# Vim Customization & Configuration
[TOC]



## Res
👍 [A Guide to Neovim Configuration](https://github.com/theniceboy/nvim)

🕶️ https://vimawesome.com



## Vim Configuration Basics
### `.vimrc`

[basic vimrc]: https://www.huweihuang.com/linux-notes/vim/basic-vimrc.html



## 🌈 Themes & Colors
### Res
https://vimcolorschemes.com

Help pages:
- [`hl-PmenuSel`](https://vimhelp.org/syntax.txt.html#hl-PmenuSel) in _syntax.txt_
- [`:hi`](https://vimhelp.org/syntax.txt.html#%3Ahi) in _syntax.txt_

```vim
" Set EnumConstant to red
hi LspCxxHlGroupEnumConstant ctermfg=Red guifg=Red cterm=none gui=none
" Set Namespaces to bold blue
hi LspCxxHlGroupNamespace ctermfg=Blue guifg=Blue cterm=bold gui=bold
" Set member variables to green
hi LspCxxHlGroupMemberVariable ctermfg=Green guifg=Green cterm=none gui=none
```
```vim
hi link LspCxxHlGroupEnumConstant MyColorSchemeCppEnumConstant
hi link LspCxxHlGroupNamespace MyColorSchemeCppNamespace
hi link LspCxxHlGroupMemberVariable MyColorSchemeCppMemberVar
```


### term, cterm, guiterm color
`termxx` is used by console version of Vim (when `set notermguicolors`). `guixx` is used in GVim, or in console if `set termguicolors`, and the console is capable of TrueColor, obviously. Hence you must test it in different programs to see the difference.

Also, some colors could be the same or very close to each other, e.g. "blue" is "blue" both in GUI and console.

> Can any one give me an illustrative example of how to use them?

``` json
hi Normal guifg=#1034a6 guibg=#f5f5dc ctermfg=19 ctermbg=230
```

Should look very similar but still a little different in GUI and console

For symbolic colors names see `:h cterm-colors` and `$VIMRUNTIME/rgb.txt`. The cheat sheet of 256 color indexes for console is available [here](https://jonasjacek.github.io/colors/).

[What is the difference between cterm color and gui color | Stackoverflow]: https://stackoverflow.com/a/60590774/16542494


### Selected Color Schemes
#### 👉 [Solarized 8: True Colors](https://github.com/lifepillar/vim-solarized8)
This is yet another Solarized theme for Vim. It places itself half way between the original [Solarized](https://github.com/altercation/vim-colors-solarized) and the [Flattened](https://github.com/romainl/flattened) variant. It removes only *some* of the bullshit. The color palette is exactly the same as in Solarized, although some highlight groups are defined slightly differently (for instance, I have tried to avoid red on blue).

The main reason for the existence of this project is that the original Solarized theme does not define `guifg` and `guibg` in terminal Vim, making it unsuitable for versions of Vim supporting true-color (i.e., 24-bit color) terminals. Instead, this color scheme works **out of the box everywhere**. For the best experience, you need:

- Vim ≥7.4.1799, or NeoVim, with `termguicolors` set, **and**
- a terminal supporting millions of colors (but see below for workarounds)



### Tutorials
1️⃣ A go-to solusion for vim customization: [Configure iTerm2 and Vim like a Pro](https://medium.com/@jeantimex/how-to-configure-iterm2-and-vim-like-a-pro-on-macos-e303d25d5b5c)
- [Iterm2](../../Shell/iterm2.md) 
- [oh-my-zsh](../../Shell/zsh.md) 
- Powerlevel10k (The coolest theme for Zsh)
- Vim Airline (Vim status bar)
- NERDTree (A file system tree for Vim)
- FZF (fuzzy finder)


2️⃣ check out vim color scheme : [VIM 配色方案推荐 - 知乎用户Xw7tdG的文章 - 知乎]( https://zhuanlan.zhihu.com/p/58188561)

- [solarized_8](https://github.com/lifepillar/vim-solarized8) 
  - i like this the most probably because it's light and elegant i think (?) 🤷



## 😴 Plug-in Management
### 👉 [Vim-Plug](https://github.com/junegunn/vim-plug)
Vim-plug is a vim plugin manager. 

**Getting Help**
- 📂 [Wiki](https://github.com/junegunn/vim-plug/wiki)
- See [tutorial](https://github.com/junegunn/vim-plug/wiki/tutorial) page to learn the basics of vim-plug
- See [tips](https://github.com/junegunn/vim-plug/wiki/tips) and [FAQ](https://github.com/junegunn/vim-plug/wiki/faq) pages for common problems and questions
- See [requirements](https://github.com/junegunn/vim-plug/wiki/requirements) page for debugging information & tested configurations
- Create an [issue](https://github.com/junegunn/vim-plug/issues/new)

**Intall a plug-in:**
1. list the plug on `~/.vimrc`
2. reload `~/.vimrc` by `:source ~/.vimrc` or reopen vim
3. `:PlugInstall`

**Configuration Example:**
```shell
call plug#begin()
" The default plugin directory will be as follows:
"   - Vim (Linux/macOS): '~/.vim/plugged'
"   - Vim (Windows): '~/vimfiles/plugged'
"   - Neovim (Linux/macOS/Windows): stdpath('data') . '/plugged'
" You can specify a custom plugin directory by passing it as the argument
"   - e.g. `call plug#begin('~/.vim/plugged')`
"   - Avoid using standard Vim directory names like 'plugin'

" Make sure you use single quotes

" Shorthand notation; fetches https://github.com/junegunn/vim-easy-align
Plug 'junegunn/vim-easy-align'

" Any valid git URL is allowed
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" Multiple Plug commands can be written in a single line using | separators
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" On-demand loading
Plug 'preservim/nerdtree', { 'on': 'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

" Using a non-default branch
Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

" Using a tagged release; wildcard allowed (requires git 1.9.2 or above)
Plug 'fatih/vim-go', { 'tag': '*' }

" Plugin options
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

" Plugin outside ~/.vim/plugged with post-update hook
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

" Unmanaged plugin (manually installed and updated)
Plug '~/my-prototype-plugin'

" Initialize plugin system
" - Automatically executes `filetype plugin indent on` and `syntax enable`.
call plug#end()
" You can revert the settings after the call like so:
"   filetype indent off   " Disable file-type-specific indentation
"   syntax off            " Disable syntax highlighting
```



## 🧸 File Explorer
### 👉 Netrw -- vim built-in file explorer
#### links
to grasp a glance of Netrw 
👉 [Using Netrw, vim's builtin file explorer](https://vonheikemen.github.io/devlog/tools/using-netrw-vim-builtin-file-explorer/)
👉 [Using netrw instead of NERDTree for Vim](https://blog.stevenocchipinti.com/2016/12/28/using-netrw-instead-of-nerdtree-for-vim/ "Using netrw instead of NERDTree for Vim")

other useful resources (pausibaly): 
🤷‍♀️ [Vim Netrw 快捷键最全说明](https://gist.github.com/wilon/20ee2cf4aafffc2986c54c639ed6d80e)
🤷‍♀️ [how to use Netrw Directory Listing in VIM split window without exiting it when a file has been read](https://vi.stackexchange.com/questions/9287/how-to-use-netrw-directory-listing-in-vim-split-window-without-exiting-it-when-a)


#### basics
`mf` mark file ;
`mt` mark target;
`mx` | `mc` | `mm` : operation on marked file / marked target

> When you try to do something on marked files, the action only applies to the files that are listed in the current buffer.


### 👉 [NERDtree](https://github.com/preservim/nerdtree)
#### Intro
The NERDTree is a file system explorer for the Vim editor. Using this plugin, users can visually browse complex directory hierarchies, quickly open files for reading or editing, and perform basic file system operations.
#### Getting Started
After installing NERDTree, the best way to learn it is to turn on the Quick Help. Open NERDTree with the `:NERDTree` command, and press `?` to turn on the Quick Help, which will show you all the mappings and commands available in the NERDTree. Of course, your most complete source of information is the documentation: `:help NERDTree`.
#### Using NERDtree Plug-ins
#TODO 



[NERDTree - how to delete file]: https://stackoverflow.com/questions/10615294/nerdtree-how-to-delete-file
[Nerdtree.vim – A Vim Plugin You Should Know About]: https://catonmat.net/vim-plugins-nerdtree-vim


### 👉 [nnn.vim](https://github.com/mcchrish/nnn.vim)
File Explorer nnn's vim extension ↗ [Awesome File & Dir Management](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/📌%20Awesome%20Open%20Source%20CLI%20Software/Awesome%20File%20&%20Dir%20Management.md)

**Requirements**
1.  n³
2.  `has('nvim') || has('terminal')` i.e. terminal support
3.  Optional `has('nvim-0.5') || has('popupwin')` for floating window
4.  Optional n³ v4.3(+) needed for file-explorer mode

**Installation**
install the plugin using other plugin manager:
```sh
# using vim-plug
 
```

#TODO 



## Appearance
### 📊 Status Bar
#### 👉 [vim-airline](https://github.com/vim-airline/vim-airline)
Vim-ariline is a customizable terminal status bar. Go to its github homepage for more.


#### 👉 [Vim-Powerline](https://github.com/Lokaltog/vim-powerline)
> Vim-powerline has been transfered to  **[Powerline](../../../../🗺 CS_Overview/Awesome/🎩 FancyCLI.md# 👉 Powerline)** 

Akin to vim-airline, vim-powerline provides rich features&display of status. 


#### 👉 [powerline-go](https://github.com/justjanne/powerline-go#version-control)
A [Powerline](https://github.com/Lokaltog/vim-powerline) like prompt for Bash, ZSH and Fish. Based on [Powerline-Shell](https://github.com/banga/powerline-shell) by @banga. Ported to golang by @justjanne.

- Shows some important details about the git/hg branch (see below)
- Changes color if the last command exited with a failure code
- If you're too deep into a directory tree, shortens the displayed path with an ellipsis
- Shows the current Python [virtualenv](http://www.virtualenv.org/) environment
- Shows the current Ruby version using [rbenv](https://github.com/rbenv/rbenv) or [rvm](https://rvm.io/)
- Shows if you are in a [nix](https://nixos.org/) shell
- It's easy to customize and extend. See below for details.


### Fonts / Icons
#TODO 

#### 👉 [VimDevIcons](https://github.com/ryanoasis/vim-devicons)

**Installation**
1. Install a [Nerd Font compatible font](https://github.com/ryanoasis/nerd-fonts#font-installation) or [patch your own](https://github.com/ryanoasis/nerd-fonts#font-patcher). Then set your terminal font (or `guifont` if you are using GUI version of Vim).
2. Install the Vim plugin with your favorite plugin manager, e.g. [vim-plug](https://github.com/junegunn/vim-plug):
```shell
Plug 'ryanoasis/vim-devicons'
```
Always load the vim-devicons as the very last one.

3. Configure Vim
```shell
set encoding=UTF-8
```
No need to set explicitly under Neovim: always uses UTF-8 as the default encoding.

> See [Installation](https://github.com/ryanoasis/vim-devicons/wiki/Installation) for detailed setup instructions

Use `:help devicons` for further configuration.


#### 👉 [nerdtree-git-plugin](https://github.com/Xuyuanp/nerdtree-git-plugin)
A plugin of [NERDTree](https://github.com/preservim/nerdtree) showing git status flags.
The original project [git-nerdtree](https://github.com/Xuyuanp/git-nerdtree) will not be maintained any longer.



## Coding Assistant & Language Services
### Auto Completion
#### 👉 YouCompleteMe (YCM)
> ❗ NOTE
> note that YCM requires vim that support python 3+ which default macos vim does not applied. To address this is not using macos built-in vim and reinstall one via `brew` (or other package manager?)
> 
> ps: LSP server for vim provides more powerful language services than YCM. YCM should not be used anymore. 

🔗 https://vimawesome.com/plugin/youcompleteme#quick-feature-summary
🚧 https://github.com/ycm-core/YouCompleteMe

YouCompleteMe is a fast, as-you-type, fuzzy-search code completion, comprehension and refactoring engine for [Vim](https://www.vim.org/).

It has several completion engines built in and supports any protocol-compliant Language Server, so can work with practically any language.


**Installation**
[YouCompleteMe with Vim8 on macOS ]: https://totucuong.github.io/2020/05/10/YouCompleteMe.html
```shell
cd ~/.vim/plugged 
git clone https://github.com/ycm-core/YouCompleteMe.git

cd ~/YouCompleteMe
# git submodule update --init --recursive
# /usr/bin/python3 install.py
python3 install.py --all


### In vim:
:PlugInstall
```


#### 👉 [codeium](https://codeium.com) -- AI Powered Code Assistant?
↗ [Awesome NLP & LLM Projects & Services](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/👀%20AI%20WatchList/🕶️%20Awesome%20AI/Awesome%20NLP%20&%20LLM%20Projects%20&%20Services.md)


### 🎉 Static Code Analyzers
#### 👉 LSP for Vim

> What is ↗ [LSP (Language Service Protocol)](../../../🌋%20Advanced%20Language%20Services/❤️‍🔥%20LSP%20(Language%20Service%20Protocol)/LSP%20(Language%20Service%20Protocol).md) ?

↗ [LSP for Vim](LSP%20for%20Vim.md)


#### 👉 Neomake
🚧 https://github.com/neomake/neomake

Neomake is a plugin for [Vim](http://vim.org/)/[Neovim](http://neovim.org/) to asynchronously run programs.

You can use it instead of the built-in `:make` command (since it can pick up your `'makeprg'` setting), but its focus is on providing an extra layer of makers based on the current file (type) or project. Its origin is a proof-of-concept for [Syntastic](https://github.com/scrooloose/syntastic) to be asynchronous.


#### 👉 ale
🚧 https://github.com/dense-analysis/ale

![|500](../../../../../../../Assets/Pics/ale.jpeg)

ALE (Asynchronous Lint Engine) is a plugin providing linting (syntax checking and semantic errors) in NeoVim 0.2.0+ and Vim 8.0+ while you edit your text files, and acts as a Vim [Language Server Protocol](https://langserver.org/) client.


### Formatter
> It seems like LSP server doesn't support code formatting?

#### 👉 vim-autoformat
🚧 https://github.com/vim-autoformat/vim-autoformat
🔗 https://vimawesome.com/plugin/vim-autoformat

Format code with one button press (or automatically on save).

This plugin makes use of external formatting programs to achieve the most decent results. Check the list of formatprograms below to see which languages are supported by default. Most formatprograms will obey vim settings, such as `textwidth` and `shiftwidth()`. You can easily customize existing formatprogram definitions or add your own formatprogram. When no formatprogram exists (or no formatprogram is installed) for a certain filetype, vim-autoformat falls back by default to indenting, (using vim's auto indent functionality), retabbing and removing trailing whitespace.



## Ref
[VIM语法高亮、VIM代码补全、VIM结构化视图功能的配置实现（1）| CSDN]: https://blog.csdn.net/G_BrightBoy/article/details/14229139

[VIM: Better "Go to definition" and completion using ALE]: https://thisisvini.com/vim-better-go-to-definition-completion

