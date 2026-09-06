#!/usr/bin/env python3
"""Generate and validate the Windows-compatible vault branch.

The macOS-friendly `main` branch is the canonical source. This tool ports only
changed files from `main` into the generated Windows branch and rewrites renamed
path references in text files.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import unicodedata
from pathlib import Path


INVALID_CHARS = set('<>:"\\|?*')
RESERVED_NAMES = {
    "CON",
    "PRN",
    "AUX",
    "NUL",
    *(f"COM{i}" for i in range(1, 10)),
    *(f"LPT{i}" for i in range(1, 10)),
}


def run_git(repo: Path, *args: str, text: bool = True) -> str | bytes:
    result = subprocess.run(
        ["git", "-C", str(repo), *args],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=text,
        encoding="utf-8" if text else None,
    )
    return result.stdout


def load_config(path: Path) -> dict:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def sanitize_component(component: str, config: dict) -> str:
    if component in config.get("component_replacements", {}):
        return config["component_replacements"][component]
    if component in config.get("name_replacements", {}):
        return config["name_replacements"][component]

    name = component
    query_like = "?" in name and ("=" in name or "&" in name)
    name = name.replace("->", "to")
    name = name.replace(": ", " - ")
    name = name.replace(":", " -")
    name = name.replace(" | ", " - ")
    name = name.replace("|", "-")
    name = name.replace('"', "")
    name = name.replace("<", "").replace(">", "")
    name = name.replace("?", "")
    name = name.replace("*", "star")
    if query_like:
        name = name.replace("&", "_").replace("=", "-")
    name = re.sub(r"[\\\x00-\x1f]", "", name)
    name = re.sub(r" {2,}", " ", name).rstrip(" .")
    if not name:
        name = "unnamed"
    stem = name.split(".")[0].upper()
    if stem in RESERVED_NAMES:
        name = f"_{name}"
    return name


def sanitize_path(path: str, config: dict) -> str:
    return "/".join(sanitize_component(part, config) for part in path.split("/"))


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def remove_path(path: Path) -> None:
    if path.is_dir():
        shutil.rmtree(path)
    elif path.exists() or path.is_symlink():
        path.unlink()
    parent = path.parent
    while parent != parent.parent and parent.exists():
        try:
            parent.rmdir()
        except OSError:
            break
        parent = parent.parent


def audit_links(root: Path, config: dict, *, write: bool = False) -> dict:
    """Use the tested destination parser; never rewrite config, code, or prose."""
    helper = Path(__file__).with_name("vault_links.mjs")
    command = ["node", str(helper), "--target", str(root), "--json", "--repair-stale"]
    if write:
        command.append("--write")
    result = subprocess.run(
        command, input=json.dumps(config), check=True,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        text=True, encoding="utf-8",
    )
    return json.loads(result.stdout)


def rewrite_all_text_files(root: Path, config: dict) -> list[str]:
    report = audit_links(root, config, write=True)
    return [change["file"] for change in report["changes"]]


def full_sanitize(root: Path, config: dict) -> list[str]:
    changed: list[str] = []
    paths = [p for p in root.rglob("*") if not any(part.startswith(".") for part in p.relative_to(root).parts)]
    for path in sorted(paths, key=lambda p: len(p.parts), reverse=True):
        rel = path.relative_to(root).as_posix()
        # Rename only this basename, bottom-up. Moving children into newly
        # created final parent paths makes the later parent rename collide.
        dest = path.with_name(sanitize_component(path.name, config))
        sanitized = dest.relative_to(root).as_posix()
        if dest == path:
            continue
        ensure_parent(dest)
        if dest.exists():
            raise RuntimeError(f"destination already exists: {sanitized}")
        path.rename(dest)
        changed.append(f"{rel} -> {sanitized}")
    changed.extend(f"rewrite {p}" for p in rewrite_all_text_files(root, config))
    return changed


def verify_windows_paths(root: Path) -> list[str]:
    issues: list[str] = []
    normalized: dict[str, str] = {}
    for current_root, dirs, files in os.walk(root):
        if Path(current_root).name == ".git" or ".git" in Path(current_root).parts:
            dirs[:] = []
            continue
        for name in [*dirs, *files]:
            path = Path(current_root) / name
            rel = path.relative_to(root).as_posix()
            stem = name.split(".")[0].upper()
            bad_chars = "".join(sorted(set(name) & INVALID_CHARS))
            if bad_chars:
                issues.append(f"{rel}: invalid chars {bad_chars!r}")
            if name.endswith(" ") or name.endswith("."):
                issues.append(f"{rel}: trailing space/dot")
            if stem in RESERVED_NAMES:
                issues.append(f"{rel}: reserved device name")
            if any(ord(ch) < 32 for ch in name):
                issues.append(f"{rel}: control character")
            key = unicodedata.normalize("NFC", rel).casefold().rstrip(" .")
            previous = normalized.get(key)
            if previous and previous != rel:
                issues.append(f"case/trailing collision: {previous} <-> {rel}")
            normalized[key] = rel
    return issues


def verify_old_markdown_targets(root: Path, config: dict) -> list[str]:
    report = audit_links(root, config)
    return [
        f"{issue['file']}:{issue['line']}: {issue['decoded']}"
        for issue in report["issues"]
        if issue["category"] == "windows-rename" and not issue.get("drawingText")
    ]


def cmd_sync(args: argparse.Namespace) -> int:
    """Keep the legacy CLI while using the tested three-way synchronization."""
    command = [
        "node", str(Path(__file__).with_name("windows_sync.mjs")),
        "--config", str(args.config.resolve()),
        "--source", str(args.source.resolve()),
        "--target", str(args.target.resolve()),
    ]
    for name in ("base", "head", "state_file"):
        value = getattr(args, name, None)
        if value:
            command.extend(["--" + name.replace("_", "-"), value])
    return subprocess.run(command, check=False).returncode


def verify_or_report(root: Path, config: dict) -> int:
    issues = verify_windows_paths(root)
    issues.extend(verify_old_markdown_targets(root, config))
    if issues:
        for issue in issues:
            print(issue, file=sys.stderr)
        return 1
    print("Windows path verification passed")
    return 0


def cmd_full(args: argparse.Namespace) -> int:
    config = load_config(args.config.resolve())
    for item in full_sanitize(args.target.resolve(), config):
        print(item)
    return verify_or_report(args.target.resolve(), config)


def cmd_verify(args: argparse.Namespace) -> int:
    config = load_config(args.config.resolve())
    return verify_or_report(args.target.resolve(), config)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--config",
        type=Path,
        default=Path(".github/windows-path-map.json"),
        help="Path to windows-path-map.json",
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    sync = subparsers.add_parser("sync", help="Port changed main files into the current Windows branch worktree")
    sync.add_argument("--source", type=Path, required=True, help="Path to a checkout of main")
    sync.add_argument("--target", type=Path, default=Path("."), help="Path to the Windows branch worktree")
    sync.add_argument("--base", help="Base main commit. Defaults to state file or merge-base.")
    sync.add_argument("--head", help="Head main commit. Defaults to source HEAD.")
    sync.add_argument("--target-ref", default="origin/windows-compatible-paths")
    sync.add_argument("--state-file", help="State file path relative to target worktree")
    sync.set_defaults(func=cmd_sync)

    full = subparsers.add_parser("full", help="Sanitize all paths and rewrite all text files in a worktree")
    full.add_argument("--target", type=Path, default=Path("."))
    full.set_defaults(func=cmd_full)

    verify = subparsers.add_parser("verify", help="Verify Windows path compatibility")
    verify.add_argument("--target", type=Path, default=Path("."))
    verify.set_defaults(func=cmd_verify)
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
