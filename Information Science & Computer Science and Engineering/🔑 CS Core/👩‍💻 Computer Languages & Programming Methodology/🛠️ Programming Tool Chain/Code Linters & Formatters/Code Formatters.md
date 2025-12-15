# Code Formatters

[TOC]



## Res
🔗 https://github.com/vim-autoformat/vim-autoformat
🔗 https://github.com/lassik/emacs-format-all-the-code



## 📲 Formatters Integration
### 👉 vim-autoformat
↗ [Vim Customization/👉 vim-autoformat](../Text%20Editors/Vim/Vim%20Customization%20&%20Configuration/Vim%20Customization%20&%20Configuration.md#👉%20vim-autoformat)


### 👉 format-all for Emacs
🚧 https://github.com/lassik/emacs-format-all-the-code

> _NOTE:_ The package is actively maintained but due to lack of time, complex tasks are done at a slow pace. Simple tasks like adding or fixing formatter definitions are often done immediately. For faster progress, additional maintainers are welcome.



## 🚀 A Partial List..
> 🔗 https://github.com/vim-autoformat/vim-autoformat

Here is a list of formatprograms that are supported by default, and thus will be detected and used by vim when they are installed properly. They are defined in [https://github.com/Chiel92/vim-autoformat/blob/master/plugin/defaults.vim](https://github.com/Chiel92/vim-autoformat/blob/master/plugin/defaults.vim). They are simply tried in the order they are listed until one succeeds.

- `asmfmt` for **Assembly**. An assembly formatter. Can be installed with `go get -u github.com/klauspost/asmfmt/cmd/asmfmt`. See [https://github.com/klauspost/asmfmt](https://github.com/klauspost/asmfmt) for more info.

- `astyle` for **C#**, **C++**, **C** and **Java**. Download it here: [http://astyle.sourceforge.net/](http://astyle.sourceforge.net/). _Important: version `2.0.5`or higher is required, since only those versions correctly support piping and are stable enough._

- `autopep8` for **Python** (supports formatting ranges). It's probably in your distro's repository, so you can download it as a regular package. For Ubuntu type `sudo apt-get install python-autopep8` in a terminal. Here is the link to the repository: [https://github.com/hhatto/autopep8](https://github.com/hhatto/autopep8). And here the link to its page on the python website: [http://pypi.python.org/pypi/autopep8/0.5.2](http://pypi.python.org/pypi/autopep8/0.5.2).

- `black` for **Python**. Most users can install with the terminal command `sudo pip install black` or `pip install --user black`. Here is the link to the repository: [https://github.com/ambv/black](https://github.com/ambv/black)

- `buildifier` for **bazel** build files. ([https://github.com/bazelbuild/buildtools/tree/master/buildifier](https://github.com/bazelbuild/buildtools/tree/master/buildifier))

- `clang-format` for **C**, **C++**, **Objective-C**, **Protobuf** (supports formatting ranges). Clang-format is a product of LLVM source builds. If you `brew install llvm`, clang-format can be found in /usr/local/Cellar/llvm/bin/. Vim-autoformat checks whether there exists a `.clang-format` or a `_clang-format` file up in the current directory's ancestry. Based on that it either uses that file or tries to match vim options as much as possible. Details: [http://clang.llvm.org/docs/ClangFormat.html](http://clang.llvm.org/docs/ClangFormat.html).

- `cmake-format` for **CMake**. Install `cmake_format` with `pip`. See [https://github.com/cheshirekow/cmake_format](https://github.com/cheshirekow/cmake_format) for more info.

- `css-beautify` for **CSS**. It is shipped with `js-beautify`, which can be installed by running `npm install -g js-beautify`. Note that `nodejs` is needed for this to work. Here is the link to the repository: [https://github.com/einars/js-beautify](https://github.com/einars/js-beautify).

- `dartfmt` for **Dart**. Part of the Dart SDK (make sure it is on your PATH). See [https://www.dartlang.org/tools/dartfmt/](https://www.dartlang.org/tools/dartfmt/) for more info.

- `dfmt` for **D**. It can be built or downloaded from [https://github.com/dlang-community/dfmt](https://github.com/dlang-community/dfmt). Arch Linux users can install it from the `community` repository with `pacman -S dfmt`. If `dfmt` is not found in `PATH`, Vim-autoformat will try to use `dub run dfmt` command to automatically download and run `dfmt`.

- `dhall format` for **Dhall**. The standard formatter, bundled with the interpreter. See [https://github.com/dhall-lang/dhall-lang](https://github.com/dhall-lang/dhall-lang) for more info.

- `ESlint` for **Javascript**. [http://eslint.org/](http://eslint.org/) It can be installed by running `npm install eslint` for a local project or by running `npm install -g eslint` for global use. The linter is then installed locally at `$YOUR_PROJECT/node_modules/.bin/eslint` or globally at `~/.npm-global/bin/eslint`. When running the formatter, vim will walk up from the current file to search for such local installation and a ESLint configuration file (either `.eslintrc.js` or `eslintrc.json`). When the local version is missing it will fallback to the global version in your home directory. When both requirements are found eslint is executed with the `--fix`argument. Note that the formatter's name is still `eslint_local` for legacy reasons even though it already supports global `eslint`. Currently only working on *nix like OS (Linux, MacOS etc.) as it requires the OS to provide sh like shell syntax.

- `fish_indent` for **Fish-shell**. Fish shell builtin fish_indent formatter for fish shell script.

- `fixjson` for JSON. It is a JSON file fixer/formatter for humans using (relaxed) JSON5. It fixes various failures while humans writing JSON and formats JSON codes. It can be installed with `npm install -g fixjson`. More info is available at [https://github.com/rhysd/fixjson](https://github.com/rhysd/fixjson).

- `fprettify` for modern **Fortran**. Download from [official repository](https://github.com/pseewald/fprettify). Install with `./setup.py install` or `./setup.py install --user`.

- `gnatpp` for **Ada**. [http://gcc.gnu.org/onlinedocs/gcc-3.4.6/gnat_ugn_unw/The-GNAT-Pretty_002dPrinter-gnatpp.html](http://gcc.gnu.org/onlinedocs/gcc-3.4.6/gnat_ugn_unw/The-GNAT-Pretty_002dPrinter-gnatpp.html)

- `gofmt` for **Golang**. The default golang formatting program is shipped with the golang distribution. Make sure `gofmt` is in your PATH (if golang is installed properly, it should be). Here is the link to the installation: [https://golang.org/doc/install](https://golang.org/doc/install) An alternative formatter is [gofumpt](https://github.com/mvdan/gofumpt), which enforces a stricter format than `gofmt`. To enable `gofumpt` support, you should install it by running `go install mvdan.cc/gofumpt latest`, and then change the default golang formatter by configuring `let g:formatters_go = ['gofumpt']`.

- `haxe-formatter` for **Haxe**. `haxe-formatter` is a thin wrapper around the haxelib formatter library. It can be installed by running `haxelib install formatter`. Here is the link to the repository: [https://github.com/HaxeCheckstyle/haxe-formatter](https://github.com/HaxeCheckstyle/haxe-formatter)

- `html-beautify` for **HTML**. It is shipped with `js-beautify`, which can be installed by running `npm install -g js-beautify`. Note that `nodejs` is needed for this to work. Here is the link to the repository: [https://github.com/einars/js-beautify](https://github.com/einars/js-beautify).

- `js-beautify` for **Javascript** and **JSON**. It can be installed by running `npm install -g js-beautify`. Note that `nodejs` is needed for this to work. The python version version is also supported by default, which does not need `nodejs` to run. Here is the link to the repository: [https://github.com/einars/js-beautify](https://github.com/einars/js-beautify).

- `JSCS` for **Javascript**. [https://jscs-dev.github.io/](https://jscs-dev.github.io/)

- `JuliaFormatter.jl` for **Julia**. It can be installed by running `julia -e 'import Pkg; Pkg.add("JuliaFormatter")'`. You will need to install Julia and have the `julia` binary in your `PATH`. See [https://github.com/domluna/JuliaFormatter.jl](https://github.com/domluna/JuliaFormatter.jl) for more information on how to configure `JuliaFormatter.jl`. Note that since `vim-autoformat` works by running a subprocess, a new instance of Julia is instantiated every time it is invoked. And since Julia needs to precompile the code to run `format_text`, this may block the vim instance while the subprocess is running. Once Julia finishes executing, control will be handled back to the user and the formatted text will replaces the current buffer. You can consider precompiling `JuliaFormatter.jl` to make this process faster (See [`PackageCompiler.jl`](https://github.com/JuliaLang/PackageCompiler.jl) for more information on that), or consider using [a dedicated `JuliaFormatter.vim` plugin](https://github.com/kdheepak/JuliaFormatter.vim) that works asynchronously.

- `latexindent.pl` for **LaTeX**. Installation instructions at [https://github.com/cmhughes/latexindent.pl](https://github.com/cmhughes/latexindent.pl). On mac you can install it with `brew install latexindent`, then you have to add `let g:formatdef_latexindent = '"latexindent -"'` to `.vimrc`.

- `luafmt` for **Lua**. Install `luafmt` with `npm`. See [https://github.com/trixnz/lua-fmt](https://github.com/trixnz/lua-fmt) for more info.

- `stylua` for **Lua**. Install `stylua` with `cargo`. See [https://github.com/JohnnyMorganz/StyLua](https://github.com/JohnnyMorganz/StyLua) for more info.

- `mix format` for **Elixir**. `mix format` is included with Elixir 1.6+.

- `nginxfmt.py` for **NGINX**. See [https://github.com/slomkowski/nginx-config-formatter](https://github.com/slomkowski/nginx-config-formatter) for more info.

- `nixfmt` for **Nix**. It can be installed from nixpkgs with `nix-env -iA nixpkgs.nixfmt`. See [https://github.com/serokell/nixfmt](https://github.com/serokell/nixfmt) for more.

- `ocamlformat` for **OCaml**. OCamlFormat can be installed with opam: `opam install ocamlformat`. Details: [https://github.com/ocaml-ppx/ocamlformat](https://github.com/ocaml-ppx/ocamlformat). We also provide `ocp-indent` as reserve formatter.

- `packer fmt` for **Packer**. The standard formatter included with Packer. See [https://www.packer.io/docs/commands/fmt](https://www.packer.io/docs/commands/fmt) for more info.

- `perltidy` for **Perl**. It can be installed from CPAN `cpanm Perl::Tidy` . See [https://metacpan.org/pod/Perl::Tidy](https://metacpan.org/pod/Perl::Tidy) and [http://perltidy.sourceforge.net/](http://perltidy.sourceforge.net/) for more info.

- `purty` for **Purescript** It can be installed using `npm install purty`. Further instructions available at [https://gitlab.com/joneshf/purty](https://gitlab.com/joneshf/purty)

- `rbeautify` for **Ruby**. It is shipped with `ruby-beautify`, which can be installed by running `gem install ruby-beautify`. Note that compatible `ruby-beautify-0.94.0` or higher version. Here is the link to the repository: [https://github.com/erniebrodeur/ruby-beautify](https://github.com/erniebrodeur/ruby-beautify). This beautifier developed and tested with ruby `2.0+`, so you can have weird results with earlier ruby versions.

- `remark` for **Markdown**. A Javascript based markdown processor that can be installed with `npm install -g remark-cli`. More info is available at [https://github.com/wooorm/remark](https://github.com/wooorm/remark).

- `rubocop` for **Ruby**. It can be installed by running `gem install rubocop`. Here is the link to the repository: [https://github.com/bbatsov/rubocop](https://github.com/bbatsov/rubocop)

- `rustfmt` for **Rust**. It can be installed using `cargo`, the Rust package manager. Up-to-date installation instructions are on the project page: [https://github.com/rust-lang/rustfmt#quick-start](https://github.com/rust-lang/rustfmt#quick-start).

- `sass-convert` for **SCSS**. It is shipped with `sass`, a CSS preprocessor written in Ruby, which can be installed by running `gem install sass`. Here is the link to the SASS homepage: [http://sass-lang.com/](http://sass-lang.com/).

- `shfmt` for **Shell**. A shell formatter written in Go supporting POSIX Shell, Bash and mksh that can be installed with `go get -u mvdan.cc/sh/cmd/shfmt`. See [https://github.com/mvdan/sh](https://github.com/mvdan/sh) for more info.

- `sqlformat` for **SQL**. Install `sqlparse` with `pip`.

- `standard` for **Javascript**. It can be installed by running `npm install -g standard` (`nodejs` is required). No more configuration needed. More information about the style guide can be found here: [http://standardjs.com/](http://standardjs.com/).

- `stylelint` for **CSS**. [https://stylelint.io/](https://stylelint.io/) It can be installed by running `npm install stylelint stylelint-config-standard` for a local project or by running `npm install -g stylelint stylelint-config-standard`for global use. The linter is then installed locally at `$YOUR_PROJECT/node_modules/.bin/stylelint` or globally at `~/.npm-global/bin/stylelint`. When running the formatter, vim will walk up from the current file to search for such local installation. When the local version is missing it will fallback to the global version in your home directory. When both requirements are found styelint is executed with the `--fix` argument. Currently only working on *nix like OS (Linux, MacOS etc.) as it requires the OS to provide sh like shell syntax.

- `stylish-haskell` for **Haskell** It can be installed using [`cabal`](https://www.haskell.org/cabal/) build tool. Installation instructions are available at [https://github.com/jaspervdj/stylish-haskell#installation](https://github.com/jaspervdj/stylish-haskell#installation)

- `terraform fmt` for **Terraform**. The standard formatter included with Terraform. See [https://www.terraform.io/docs/cli/commands/fmt.html](https://www.terraform.io/docs/cli/commands/fmt.html) for more info.

- `tidy` for **HTML**, **XHTML** and **XML**. It's probably in your distro's repository, so you can download it as a regular package. For Ubuntu type `sudo apt-get install tidy` in a terminal.

- `typescript-formatter` for **Typescript**. `typescript-formatter` is a thin wrapper around the TypeScript compiler services. It can be installed by running `npm install -g typescript-formatter`. Note that `nodejs`is needed for this to work. Here is the link to the repository: [https://github.com/vvakame/typescript-formatter](https://github.com/vvakame/typescript-formatter).

- `xo` for **Javascript**. It can be installed by running `npm install -g xo` (`nodejs` is required). Here is the link to the repository: [https://github.com/sindresorhus/xo](https://github.com/sindresorhus/xo).

- `yapf` for **Python** (supports formatting ranges). Vim-autoformat checks whether there exists a `.style.yapf`or a `setup.cfg` file up in the current directory's ancestry. Based on that it either uses that file or tries to match vim options as much as possible. Most users can install with the terminal command `sudo pip install yapf` or `pip install --user yapf`. YAPF has one optional configuration variable to control the formatter style. For example:
```viml
let g:formatter_yapf_style = 'pep8'
```
`pep8` is the default value, or you can choose: `google`, `facebook`, `chromium`. Here is the link to the repository: [https://github.com/google/yapf](https://github.com/google/yapf)
   
- `zigformat` for **Zig**. It is an unofficial binary. You can find the installation instructions from the repo: [zigformat](https://github.com/Himujjal/zigformat)



## More..
### 👉 Prettier
> 📂 https://prettier.io/docs/en/

Prettier is an opinionated code formatter with support for:
- JavaScript (including experimental features)
- [JSX](https://facebook.github.io/jsx/)
- [Angular](https://angular.io/)
- [Vue](https://vuejs.org/)
- [Flow](https://flow.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS, [Less](http://lesscss.org/), and [SCSS](https://sass-lang.com/)
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [Ember/Handlebars](https://handlebarsjs.com/)
- [JSON](https://json.org/)
- [GraphQL](https://graphql.org/)
- [Markdown](https://commonmark.org/), including [GFM](https://github.github.com/gfm/) and [MDX v1](https://mdxjs.com/)
- [YAML](https://yaml.org/)

It removes all original styling[*](https://prettier.io/docs/en/#footnotes) and ensures that all outputted code conforms to a consistent style. (See this [blog post](https://jlongster.com/A-Prettier-Formatter))

Prettier takes your code and reprints it from scratch by taking the line length into account.



## Ref

