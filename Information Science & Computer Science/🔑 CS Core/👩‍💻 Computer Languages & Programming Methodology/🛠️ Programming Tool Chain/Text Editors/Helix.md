# Helix

[TOC]



## Res
📂 [Helix Docs](https://docs.helix-editor.com/title-page.html)


## Intro
A Kakoune / Neovim inspired editor, written in Rust.

The editing model is very heavily based on Kakoune; during development I found myself agreeing with most of Kakoune's design decisions.

For more information, see the [website](https://helix-editor.com/) or [documentation](https://docs.helix-editor.com/).

All shortcuts/keymaps can be found [in the documentation on the website](https://docs.helix-editor.com/keymap.html).

[Troubleshooting](https://github.com/helix-editor/helix/wiki/Troubleshooting)


### Features
- Vim-like modal editing
- Multiple selections
- Built-in language server support
- Smart, incremental syntax highlighting and code editing via tree-sitter

It's a terminal-based editor first, but I'd like to explore a custom renderer (similar to Emacs) in wgpu or skulpin.

Note: Only certain languages have indentation definitions at the moment. Check `runtime/queries/<lang>/` for `indents.scm`.




## Ref

