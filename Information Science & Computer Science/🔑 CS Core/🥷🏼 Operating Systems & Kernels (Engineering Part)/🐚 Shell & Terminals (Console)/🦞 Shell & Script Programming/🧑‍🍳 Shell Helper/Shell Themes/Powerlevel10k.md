# Powerlevel10k

[TOC]



## Res
🏠 https://github.com/romkatv/powerlevel10k/tree/master
- [Getting started](https://github.com/romkatv/powerlevel10k/tree/master#getting-started)
- [Features](https://github.com/romkatv/powerlevel10k/tree/master#features)
- [Installation](https://github.com/romkatv/powerlevel10k/tree/master#installation)
- [Configuration](https://github.com/romkatv/powerlevel10k/tree/master#configuration)
- [Fonts](https://github.com/romkatv/powerlevel10k/tree/master#fonts)
- [Try it in Docker](https://github.com/romkatv/powerlevel10k/tree/master#try-it-in-docker)
- [License](https://github.com/romkatv/powerlevel10k/tree/master#license)
- [FAQ](https://github.com/romkatv/powerlevel10k/tree/master#faq)
- [Troubleshooting](https://github.com/romkatv/powerlevel10k/tree/master#troubleshooting)



## Intro
> [Powerlevel9](https://github.com/Powerlevel9k/powerlevel9k)
> P10k is totally compatible with P9k configuration parameter. 

Powerlevel10k is a theme for Zsh. It emphasizes [speed](https://github.com/romkatv/powerlevel10k/tree/master#uncompromising-performance), [flexibility](https://github.com/romkatv/powerlevel10k/tree/master#extremely-customizable) and [out-of-the-box experience](https://github.com/romkatv/powerlevel10k/tree/master#configuration-wizard).


```shell
Usage: p10k command [options]

Commands:

	configure: run interactive configuration wizard
	
	reload: reload configuration
	
	segment: print a user-defined prompt segment
	
	display: show, hide or toggle prompt parts
	
	help: print this help message

Print help for a specific command:

p10k help command
```

## Configuration
> source standalone configuration file form within `~/.zshrc`

### Fonts
Powerlevel10k doesn't require custom fonts but can take advantage of them if they are available. It works well with [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts), [Source Code Pro](https://github.com/adobe-fonts/source-code-pro), [Font Awesome](https://fontawesome.com/), [Powerline](https://github.com/powerline/fonts), and even the default system fonts. The full choice of style options is available only when using [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts).

👇 **Recommended font**: Meslo Nerd Font patched for Powerlevel10k. 👇


#### Meslo Nerd Font patched for Powerlevel10k
Gorgeous monospace font designed by Jim Lyles for Bitstream, customized by the same for Apple, further customized by André Berg, and finally patched by yours truly with customized scripts originally developed by Ryan L McIntyre of Nerd Fonts. Contains all glyphs and symbols that Powerlevel10k may need. Battle-tested in dozens of different terminals on all major operating systems.

_FAQ_: [How was the recommended font created?](https://github.com/romkatv/powerlevel10k/tree/master#how-was-the-recommended-font-created)



## Ref
[配置Powerlevel10 以及一些ohmyzsh插件]: https://blog.csdn.net/hch814/article/details/108434036
How i configure Powerlevel10: 

1. have iterm2 installed
2. configure Fonts need to use on iterm2 (here the author of the tutorial used [Nerd Fonts](https://www.nerdfonts.com/font-downloads), but i prefer [Powerline](https://github.com/powerline/fonts))



