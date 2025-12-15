# Awesome CLI Integration

[TOC]



## Git Integration
### 👉 tig
🚧 https://github.com/jonas/tig

Tig is an ncurses-based **text-mode interface for git**. It functions mainly as a Git repository browser, but can also assist in staging changes for commit at chunk level and act as a pager for output from various Git commands.

Resources
- Homepage: https://jonas.github.io/tig/
- Manual: https://jonas.github.io/tig/doc/manual.html
- Tarballs: https://github.com/jonas/tig/releases
- Git URL: git://github.com/jonas/tig.git
- Gitter: https://gitter.im/jonas/tig
- Q&A: https://stackoverflow.com/questions/tagged/tig


### 👉 shallow-backup
🚧 https://github.com/alichtman/shallow-backup
`shallow-backup` lets you easily create lightweight backups of installed packages, applications, fonts and dotfiles, and automatically push them to a remote Git repository.

I wanted a tool that allows you to:
- Back up dotfiles _from where they live on the system_.
- Back up files from _any_ path on the system, not just `$HOME`.
- Reinstall them from the backup directory idempotently.
- Backup and reinstall files conditionally, so you can easily manage dotfiles across multiple systems.
- Copy files on installation and backup, as opposed to symlinking them.
- Backup package installations in a highly compressed manner

And is incredibly fault tolerant and user-protective.

`shallow-backup` is the only tool that checks all of those boxes.


### 👉 lazygit
🚧 https://github.com/jesseduffield/lazygit
simple terminal UI for git commands


### 👉 cz-git
🏠 https://cz-git.qbb.sh/zh/
🚧 https://github.com/Zhengqbbb/cz-git/tree/main
Support OpenAI, and more engineered, lightweight, customizable, standard output format [Commitizen adapter](https://cz-git.qbb.sh/guide/introduction)and [Git commit CLI](https://cz-git.qbb.sh/cli/).

> 工程性更强，轻量级，高度自定义， 输出标准格式的 Commitizen 适配器和 CLI

cz-git | czg 🛠️ DX first and more engineered, lightweight, customizable, standard output format Commitizen adapter and CLI


### 👉 commitlinter
🚧 https://github.com/conventional-changelog/commitlint
commitlint checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org/).


### 👉 gita
🚧 https://github.com/nosarthur/gita

This tool has two main features
- display the status of multiple git repos such as branch, modification, commit message side by side
- (batch) delegate git commands/aliases and shell commands on repos from any working directory


### 👉 git-extras
🚧 https://github.com/tj/git-extras
GIT utilities -- repo summary, repl, changelog population, author commit percentages and more



## Github Integration
### 👉 CLI Github
[CLI GitHub](https://github.com/IonicaBizau/cli-github) - Fancy GitHub client.


### 👉 hub
[hub](https://github.com/github/hub) - Make git easier to use with GitHub.


### 👉 git-labelmaker
[git-labelmaker](https://github.com/himynameisdave/git-labelmaker) - Edit GitHub labels.




## Status Visualization
### 👉 Powerline
📂 [Powerline Docs](https://powerline.readthedocs.io/en/latest/usage.html)



## cat Visualization
### 👉 BAT
🏠 https://github.com/sharkdp/bat/

BAT is a substitude of `cat`. It supports loads of text highlighting, git Integratedtion, auto-paging ... and so on many fansy functiones. 

BAT can also be integrated with other tools. 

BAT is configured by configure file. The location of configure file is as `bat --config-file` shows. 
```shell
# Set the theme to auto-ajust as macOS system style changed
--theme="\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo Sublime Snazzy || echo Solarized (light))"

# Show line numbers, Git modifications and file header (but no grid)
--style="numbers,changes,header"

# Use italic text on the terminal (not supported on all terminals)
# --italic-text=always

# Use C++ syntax for Arduino .ino files
--map-syntax "*.ino:C++"
```

For further detail, check through its official docs. 


### 👉 CCAT
`ccat` is the colorizing `cat`. It works similar to `cat` but displays content with syntax highlighting.


🏠 https://github.com/owenthereal/ccat




## ls Visualization
### 👉 lsd
`lsd` provides various services for CoreServices frameworks. It is not meant to be invoked directly and it must not be terminated.


### 👉 exa | eza
🏠 https://the.exa.website
🚧 https://github.com/ogham/exa
exa is unmaintained, use the fork `eza` instead! 2024-01-24 :(

🏠 https://eza.rocks
🚧 https://github.com/eza-community/eza



## Database Integration
### 👉 mycli
🏠 https://github.com/dbcli/mycli
↗ [MySQL](../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DBMS%20(DataBase%20Management%20System)%20Implementations/RDBMS%20(Relational)/🌙%20MySQL/MySQL.md)

A command line client for MySQL that can do auto-completion and syntax highlighting.

HomePage: [http://mycli.net](http://mycli.net/) Documentation: [http://mycli.net/docs](http://mycli.net/docs)


`mycli` is written using [prompt_toolkit](https://github.com/jonathanslenders/python-prompt-toolkit/).

- Auto-completion as you type for SQL keywords as well as tables, views and columns in the database.
- Syntax highlighting using Pygments.
- Smart-completion (enabled by default) will suggest context-sensitive completion.
	- `SELECT * FROM <tab>` will only show table names.
	- `SELECT * FROM users WHERE <tab>` will only show column names.
- Support for multiline queries.
- Favorite queries with optional positional parameters. Save a query using `\fs alias query` and execute it with `\f alias` whenever you need.
- Timing of sql statements and table rendering.
- Config file is automatically created at `~/.myclirc` at first launch.
- Log every query and its results to a file (disabled by default).
- Pretty prints tabular data (with colors!)
- Support for SSL connections
- Some features are only exposed as [key bindings](https://github.com/dbcli/mycli/blob/main/doc/key_bindings.rst)


### 👉 pgcli
🏠 https://www.pgcli.com/
↗ [PostgreSQL](../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DBMS%20(DataBase%20Management%20System)%20Implementations/Object-Relational%20Database/PostgreSQL/PostgreSQL.md)

Pgcli is a command line interface for Postgres with auto-completion and syntax highlighting.

Source: [https://github.com/dbcli/pgcli](https://github.com/dbcli/pgcli)



## HTTP Server
### 👉 GoTTY
🚧 https://github.com/yudai/gotty

GoTTY is a simple command line tool that turns your CLI tools into web applications.



## Browser Integration
- [s](https://github.com/zquestz/s) - Open a web search in your terminal.
- [hget](https://github.com/bevacqua/hget) - Render websites in plain text from your terminal.
- [mapscii](https://github.com/rastapasta/mapscii) - Terminal Map Viewer.
- [nasa-cli](https://github.com/xxczaki/nasa-cli) - Download NASA Picture of the Day.
- [getnews.tech](https://github.com/omgimanerd/getnews.tech) - Fetch news headlines from various news outlets.
- [trino](https://github.com/eneserdogan/trino) - Translation of words and phrases.
- [translate-shell](https://github.com/soimort/translate-shell) - Google Translate interface.



## Markdown Integration
- [DocToc](https://github.com/thlorenz/doctoc) - Generates table of contents for markdown files.
- [grip](https://github.com/joeyespo/grip) - Preview markdown files as GitHub would render them.
- [mdv](https://github.com/axiros/terminal_markdown_viewer) - Styled terminal markdown viewer.
- [glow](https://github.com/charmbracelet/glow) - Styled markdown rendering.
- [gtree](https://github.com/ddddddO/gtree) - Use markdown to generate directory trees and the directories itself.


### 👉 glow
🚧 https://github.com/charmbracelet/glow
Glow is a terminal based markdown reader designed from the ground up to bring out the beauty—and power—of the CLI.

Use it to discover markdown files, read documentation directly on the command line and stash markdown files to your own private collection, so you can read them anywhere. Glow will find local markdown files in subdirectories or a local Git repository.

By the way, all data stashed is encrypted end-to-end: only you can decrypt it. More on that below.


### 👉 mdv (terminal_markdown_viewer) (Dark Mode Onlys)
🚧 https://github.com/axiros/terminal_markdown_viewer

When you edit multiple md files remotely, like in a larger [mkdocs](http://www.mkdocs.org/) project, context switches between editing terminal(s) and viewing browser may have some efficiency impact. Also sometimes there is just no browser, like via security gateways offering just a fixed set of applications on the hop in machine. Further, reading efficiency and convenience is often significantly improved by using colors. And lastly, using such a thing for cli applications might improve user output, e.g. for help texts.

This is where mdv, a Python based Markdown viewer for the terminal might be a good option.



## AI Integration & Prompt
### 👉 `clevercli`
🏠 https://github.com/clevercli/clevercli

**clevercli** is a CLI that queries OpenAI models (e.g. ChatGPT). New prompt types can easily be added and there is a growing list of community maintained prompts.



## Ref
