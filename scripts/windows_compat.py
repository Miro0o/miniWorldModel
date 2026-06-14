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
from urllib.parse import quote, unquote


INVALID_CHARS = set('<>:"\\|?*')
RESERVED_NAMES = {
    "CON",
    "PRN",
    "AUX",
    "NUL",
    *(f"COM{i}" for i in range(1, 10)),
    *(f"LPT{i}" for i in range(1, 10)),
}
TEXT_SUFFIXES = {
    ".canvas",
    ".css",
    ".csv",
    ".excalidraw",
    ".html",
    ".js",
    ".json",
    ".md",
    ".markdown",
    ".svg",
    ".ts",
    ".txt",
    ".yaml",
    ".yml",
}


def run_git(repo: Path, *args: str, text: bool = True) -> str | bytes:
    result = subprocess.run(
        ["git", "-C", str(repo), *args],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=text,
    )
    return result.stdout


def load_config(path: Path) -> dict:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def replacement_pairs(config: dict) -> list[tuple[str, str]]:
    pairs: list[tuple[str, str]] = []
    for section in ("component_replacements", "name_replacements"):
        for old, new in config.get(section, {}).items():
            pairs.append((old, new))
            old_stem, old_ext = os.path.splitext(old)
            new_stem, new_ext = os.path.splitext(new)
            if old_ext == ".md" and new_ext == ".md":
                pairs.append((old_stem, new_stem))
    return pairs


def encoded_variants(value: str) -> set[str]:
    return {
        value,
        value.replace(" ", "%20"),
        quote(value, safe=""),
        quote(value, safe="/"),
        quote(value, safe="/()&,*"),
        quote(value, safe="/()&,*:"),
        quote(value, safe="/()&,*:?"),
    }


def content_replacements(config: dict) -> list[tuple[str, str]]:
    replacements: list[tuple[str, str]] = []
    seen: set[tuple[str, str]] = set()
    raw_pairs: list[tuple[str, str]] = []
    for old, new in config.get("component_replacements", {}).items():
        # Component mappings must be rewritten as path components. Replacing a
        # raw component everywhere is too broad for names such as `Treas.`,
        # which can be a substring of the valid file name `Treas..md`.
        raw_pairs.append((f"{old}/", f"{new}/"))
    for old, new in config.get("name_replacements", {}).items():
        raw_pairs.append((old, new))
        old_stem, old_ext = os.path.splitext(old)
        new_stem, new_ext = os.path.splitext(new)
        if old_ext == ".md" and new_ext == ".md":
            raw_pairs.append((old_stem, new_stem))

    for old, new in raw_pairs:
        for old_variant in encoded_variants(old):
            for new_variant in encoded_variants(new):
                # Prefer the corresponding encoding style when possible.
                if (
                    old_variant == old
                    and new_variant != new
                    or "%20" in old_variant
                    and "%20" not in new_variant
                    or "%" in old_variant
                    and "%" not in new_variant
                ):
                    continue
                pair = (old_variant, new_variant)
                if pair not in seen:
                    replacements.append(pair)
                    seen.add(pair)
                break
    # Longest first prevents partial replacements from blocking full names.
    replacements.sort(key=lambda pair: len(pair[0]), reverse=True)
    return replacements


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
    name = re.sub(r" {2,}", " ", name).rstrip(" .")
    if not name:
        name = "unnamed"
    stem = name.split(".")[0].upper()
    if stem in RESERVED_NAMES:
        name = f"{name}_"
    return name


def sanitize_path(path: str, config: dict) -> str:
    return "/".join(sanitize_component(part, config) for part in path.split("/"))


def rewrite_text(data: bytes, config: dict) -> bytes:
    try:
        text = data.decode("utf-8")
    except UnicodeDecodeError:
        return data
    rewritten = text
    for old, new in content_replacements(config):
        rewritten = rewritten.replace(old, new)
    return rewritten.encode("utf-8")


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


def git_diff_entries(source: Path, base: str, head: str) -> list[tuple[str, str | None, str | None]]:
    raw = run_git(source, "diff", "--name-status", "--find-renames", "-z", f"{base}..{head}", text=False)
    if not isinstance(raw, bytes):
        raise TypeError("expected bytes from git diff")
    fields = raw.split(b"\0")
    entries: list[tuple[str, str | None, str | None]] = []
    i = 0
    while i < len(fields) and fields[i]:
        status = fields[i].decode("utf-8", "surrogateescape")
        i += 1
        if status.startswith("R") or status.startswith("C"):
            old = fields[i].decode("utf-8", "surrogateescape")
            new = fields[i + 1].decode("utf-8", "surrogateescape")
            i += 2
            entries.append((status[0], old, new))
        else:
            path = fields[i].decode("utf-8", "surrogateescape")
            i += 1
            entries.append((status[0], None, path))
    return entries


def git_show(source: Path, ref: str, path: str) -> bytes:
    return subprocess.run(
        ["git", "-C", str(source), "show", f"{ref}:{path}"],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    ).stdout


def copy_from_source(source: Path, target: Path, ref: str, source_path: str, config: dict) -> Path:
    dest_rel = sanitize_path(source_path, config)
    dest = target / dest_rel
    data = git_show(source, ref, source_path)
    if Path(source_path).suffix.lower() in TEXT_SUFFIXES:
        data = rewrite_text(data, config)
    ensure_parent(dest)
    dest.write_bytes(data)
    return dest


def sync_changed(source: Path, target: Path, base: str, head: str, config: dict) -> list[str]:
    changed: list[str] = []
    for status, old, new in git_diff_entries(source, base, head):
        if old:
            old_dest = target / sanitize_path(old, config)
            remove_path(old_dest)
            changed.append(f"remove {sanitize_path(old, config)}")
        if status == "D":
            if new is None:
                continue
            old_dest = target / sanitize_path(new, config)
            remove_path(old_dest)
            changed.append(f"remove {sanitize_path(new, config)}")
            continue
        if new is None:
            continue
        dest = copy_from_source(source, target, head, new, config)
        changed.append(f"write {dest.relative_to(target).as_posix()}")
    return changed


def rewrite_all_text_files(root: Path, config: dict) -> list[str]:
    changed: list[str] = []
    for path in root.rglob("*"):
        if ".git" in path.parts or not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        data = path.read_bytes()
        new_data = rewrite_text(data, config)
        if new_data != data:
            path.write_bytes(new_data)
            changed.append(path.relative_to(root).as_posix())
    return changed


def full_sanitize(root: Path, config: dict) -> list[str]:
    changed: list[str] = []
    paths = [p for p in root.rglob("*") if ".git" not in p.parts]
    for path in sorted(paths, key=lambda p: len(p.parts), reverse=True):
        rel = path.relative_to(root).as_posix()
        sanitized = sanitize_path(rel, config)
        if sanitized == rel:
            continue
        dest = root / sanitized
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
    old_components = set(config.get("component_replacements", {}).keys())
    old_names = set(config.get("name_replacements", {}).keys())
    old_name_stems = {
        os.path.splitext(name)[0]
        for name in old_names
        if os.path.splitext(name)[1] == ".md"
    }
    link_re = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
    hits: list[str] = []
    for path in root.rglob("*.md"):
        if ".git" in path.parts:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for line_no, line in enumerate(text.splitlines(), 1):
            for match in link_re.finditer(line):
                raw = match.group(1).strip()
                if re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*:", raw) or raw.startswith("#"):
                    continue
                decoded = unquote(raw).split("#", 1)[0]
                components = [component for component in decoded.split("/") if component]
                for component in components:
                    if component in old_components or component in old_names or component in old_name_stems:
                        hits.append(f"{path.relative_to(root)}:{line_no}: {component}")
                        break
    return hits


def read_state(target: Path, state_file: str) -> str | None:
    path = target / state_file
    if not path.exists():
        return None
    with path.open("r", encoding="utf-8") as f:
        return json.load(f).get("last_synced_main")


def write_state(target: Path, state_file: str, head: str, base: str) -> None:
    path = target / state_file
    ensure_parent(path)
    with path.open("w", encoding="utf-8") as f:
        json.dump({"last_synced_main": head, "previous_synced_main": base}, f, indent=2)
        f.write("\n")


def resolve_base(source: Path, target: Path, state_file: str, target_ref: str, head: str) -> str:
    state = read_state(target, state_file)
    if state:
        try:
            run_git(source, "cat-file", "-e", f"{state}^{{commit}}")
            return state
        except subprocess.CalledProcessError:
            pass
    return str(run_git(source, "merge-base", target_ref, head)).strip()


def cmd_sync(args: argparse.Namespace) -> int:
    source = args.source.resolve()
    target = args.target.resolve()
    config = load_config(args.config.resolve())
    state_file = args.state_file or config.get("state_file", ".github/windows-sync-state.json")
    head = args.head or str(run_git(source, "rev-parse", "HEAD")).strip()
    base = args.base or resolve_base(source, target, state_file, args.target_ref, head)
    if base == head:
        print(f"Already synced to {head}")
        return 0
    print(f"Syncing main changes {base}..{head}")
    changed = sync_changed(source, target, base, head, config)
    changed.extend(f"rewrite {p}" for p in rewrite_all_text_files(target, config))
    write_state(target, state_file, head, base)
    for item in changed:
        print(item)
    return verify_or_report(target, config)


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
