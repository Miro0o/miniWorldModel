# LSP for Vim

[TOC]



## Res
↗ [LSP (Language Service Protocol)](../../../🌋%20Advanced%20Language%20Services/❤️‍🔥%20LSP%20(Language%20Service%20Protocol)/LSP%20(Language%20Service%20Protocol).md)



## LSP Clients/Server for VIM
### 👉 vim-lsp
🚧 https://github.com/prabirshrestha/vim-lsp
🔗 https://vimawesome.com/plugin/vim-lsp

async language server protocol plugin for vim and neovim

1. Server Registration
2. Auto-complete
3. Snippets
	1. vim-lsp does not support snippets by default. If you want snippet integration, you will first have to install a third-party snippet plugin and a plugin that integrates it in vim-lsp. At the moment, you have following options:
		1. [vim-vsnip](https://github.com/hrsh7th/vim-vsnip) together with [vim-vsnip-integ](https://github.com/hrsh7th/vim-vsnip-integ)
		2. [UltiSnips](https://github.com/SirVer/ultisnips) together with [vim-lsp-ultisnips](https://github.com/thomasfaingnaert/vim-lsp-ultisnips)
		3. [neosnippet.vim](https://github.com/Shougo/neosnippet.vim) together with [vim-lsp-neosnippet](https://github.com/thomasfaingnaert/vim-lsp-neosnippet)
	2. For more information, refer to the readme and documentation of the respective plugins.
4. Folding
5. Semantic Highlighting
6. Debugging (vim-lsp itself)
7. Other Supported Commands...(see docs)

#### 👉 vim-lsp-settings (auto configuration via vim-lsp)
🚧 https://github.com/mattn/vim-lsp-settings

Language Servers are not easy to install. Visual Studio Code provides easy ways to install and update Language Servers and Language Server Client. This plugin provides the same feature for Vim.

##### Basics Usages
While editing a file with a supported filetype:
```
:LspInstallServer
```
To uninstall server:
```
:LspUninstallServer server-name
```
Because there is no way to update a server, please run `:LspInstallServer` again, the newer version will be installed.


### 👉 LanguageClient-neovim 
🚧 https://github.com/autozimu/languageclient-neovim

Features:
- Non-blocking asynchronous calls.
- [Sensible completion](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-288731936). Integrated well with [deoplete](https://github.com/Shougo/deoplete.nvim) or [ncm2](https://github.com/ncm2/ncm2), or [MUcomplete](https://github.com/lifepillar/vim-mucomplete). Or simply with vim built-in `omnifunc`.
- [Realtime diagnostics/compiler/lint message.](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-288732042)
- [Rename.](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-288731403)
- [Hover/Get identifier info.](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-288731665)
- [Goto definition.](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-288731744)
- Goto reference locations.
- [Workspace/Document symbols query](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-288731839).
- [Formatting](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-324497559).
- [Code Action/Quick Fix](https://github.com/autozimu/LanguageClient-neovim/issues/35#issuecomment-331016526).



## LSP Color Scheme
### LSP SignColumn
Set vim SignColumn bg to NONE, or disable singcolumn

```vim
" set signcolumn=no                                                                                                                                                        hi SignColumn guibg=NONE ctermbg=NONE
```


### LSP Error & Warning Highlight
There are three elements in LSP (or vim in general?) relates to error & waring signs. They are: (warning highlight for example)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-26%20at%2011.10.30%20AM.png)

To modify them, use below configurations:
```
LspErrorHighlight
LspWarningHighlight

LspErrorText
LspWarningText

LspErrorVirtualText
LspWarningVirtualText
```

[SignColumn LSP diagnostics bg set to none | Reddit]: https://www.reddit.com/r/neovim/comments/vps7ao/signcolumn_lsp_diagnostics_bg_set_to_none/

[Grey bar on left in vim? | Stackoverflow]: https://stackoverflow.com/questions/4112128/grey-bar-on-left-in-vim

[How to contol vim colors]: https://alvinalexander.com/linux/vi-vim-editor-color-scheme-syntax/

[👀 vim color names]: https://codeyarns.com/tech/2011-07-29-vim-chart-of-color-names.html#gsc.tab=0

[Can we change color scheme #41]: https://github.com/jackguo380/vim-lsp-cxx-highlight/issues/41


## Ref

