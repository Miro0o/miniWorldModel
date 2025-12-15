# [neovim](https://github.com/neovim/neovim)

[TOC]



![Neovim](../../../../../../../../Assets/Pics/neovim-logo-300x87.png)



## Res
📂 [Documentation](https://neovim.io/doc/)

[Chat](https://app.element.io/#/room/%23neovim:matrix.org)

👍 [A Guide to Neovim Configuration](https://github.com/theniceboy/nvim)



## Intro
Neovim is a project that seeks to aggressively refactor [Vim](https://www.vim.org/) in order to:
- Simplify maintenance and encourage [contributions](https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md)
- Split the work between multiple developers
- Enable [advanced UIs](https://github.com/neovim/neovim/wiki/Related-projects#gui) without modifications to the core
- Maximize [extensibility](https://github.com/neovim/neovim/wiki/Plugin-UI-architecture)

See the [Introduction](https://github.com/neovim/neovim/wiki/Introduction) wiki page and [Roadmap](https://neovim.io/roadmap/) for more information.


### Features
- Modern [GUIs](https://github.com/neovim/neovim/wiki/Related-projects#gui)
- [API access](https://github.com/neovim/neovim/wiki/Related-projects#api-clients) from any language including C/C++, C#, Clojure, D, Elixir, Go, Haskell, Java/Kotlin, JavaScript/Node.js, Julia, Lisp, Lua, Perl, Python, Racket, Ruby, Rust
- Embedded, scriptable [terminal emulator](https://neovim.io/doc/user/nvim_terminal_emulator.html)
- Asynchronous [job control](https://github.com/neovim/neovim/pull/2247)
- [Shared data (shada)](https://github.com/neovim/neovim/pull/2506) among multiple editor instances
- [XDG base directories](https://github.com/neovim/neovim/pull/3470) support
- Compatible with most Vim plugins, including Ruby and Python plugins

See [`:help nvim-features`](https://neovim.io/doc/user/vim_diff.html#nvim-features) for the full list, and [`:help news`](https://neovim.io/doc/user/news.html) for noteworthy changes in the latest version!


### Transitioning from Vim
See [`:help nvim-from-vim`](https://neovim.io/doc/user/nvim.html#nvim-from-vim) for instructions.


### Project layout
```
├─ cmake/           CMake utils
├─ cmake.config/    CMake defines
├─ cmake.deps/      subproject to fetch and build dependencies (optional)
├─ runtime/         plugins and docs
├─ src/nvim/        application source code (see src/nvim/README.md)
│  ├─ api/          API subsystem
│  ├─ eval/         VimL subsystem
│  ├─ event/        event-loop subsystem
│  ├─ generators/   code generation (pre-compilation)
│  ├─ lib/          generic data structures
│  ├─ lua/          Lua subsystem
│  ├─ msgpack_rpc/  RPC subsystem
│  ├─ os/           low-level platform code
│  └─ tui/          built-in UI
└─ test/            tests (see test/README.md)
```



## Ref
[How can I configure neovim?]: https://www.reddit.com/r/neovim/comments/359d9i/how_can_i_configure_neovim/

[How is NeoVim Different From Vim]: https://www.baeldung.com/linux/vim-vs-neovim

