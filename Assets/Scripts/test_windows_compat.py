"""Run on the Linux CI runner (which can create macOS-style filenames)."""
import json
import os
import tempfile
import unittest
from pathlib import Path

import windows_compat as compat


class WindowsCompatibilityTests(unittest.TestCase):
    def test_reserved_device_with_extension(self):
        self.assertEqual(compat.sanitize_component("NUL.md", {}), "_NUL.md")
        self.assertEqual(compat.sanitize_component("COM1.txt", {}), "_COM1.txt")

    @unittest.skipIf(os.name == "nt", "Original names cannot be created on Windows")
    def test_nested_full_conversion_preserves_config(self):
        config = {
            "component_replacements": {"CTL* Family": "CTLstar Family"},
            "name_replacements": {"CTL* Family.md": "CTLstar Family.md"},
        }
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            original = root / "CTL* Family" / "CTL* Family.md"
            original.parent.mkdir()
            original.write_text("# CTL* Family\n", encoding="utf-8")
            source = root / "Source.md"
            source.write_text("[CTL*](CTL*%20Family/CTL*%20Family.md#Keep*)\n", encoding="utf-8")
            config_path = root / ".github" / "windows-path-map.json"
            config_path.parent.mkdir()
            config_path.write_text(json.dumps(config), encoding="utf-8")
            original_config = config_path.read_bytes()
            compat.full_sanitize(root, config)
            self.assertTrue((root / "CTLstar Family" / "CTLstar Family.md").is_file())
            self.assertEqual(config_path.read_bytes(), original_config)
            self.assertEqual(source.read_text(), "[CTL*](CTLstar%20Family/CTLstar%20Family.md#Keep*)\n")
            self.assertEqual(compat.verify_old_markdown_targets(root, config), [])
            self.assertEqual(compat.rewrite_all_text_files(root, config), [])

    def test_parser_bridge_repairs_existing_target(self):
        config = {"name_replacements": {"CS143: Compilers.md": "CS143 - Compilers.md"}}
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "CS143 - Compilers.md").write_text("# Course", encoding="utf-8")
            source = root / "Source.md"
            source.write_bytes(b"[[CS143: Compilers|Course]]\r\n")
            self.assertEqual(len(compat.verify_old_markdown_targets(root, config)), 1)
            self.assertEqual(compat.rewrite_all_text_files(root, config), ["Source.md"])
            self.assertEqual(source.read_bytes(), b"[[CS143 - Compilers|Course]]\r\n")
            self.assertEqual(compat.verify_old_markdown_targets(root, config), [])


if __name__ == "__main__":
    unittest.main()
