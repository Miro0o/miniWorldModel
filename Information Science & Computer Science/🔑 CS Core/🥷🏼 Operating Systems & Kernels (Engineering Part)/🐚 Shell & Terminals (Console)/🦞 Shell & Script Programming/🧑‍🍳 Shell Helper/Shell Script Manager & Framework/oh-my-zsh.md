# oh-my-zsh

[TOC]



![Oh My Zsh](../../../../../../../../../Assets/Pics/68747470733a2f2f6f686d797a73682e73332e616d617a6f6e6177732e636f6d2f6f6d7a2d616e73692d6769746875622e706e67.png)



```shell
Looking for an existing zsh config...
Found ~/.zshrc. Backing up to /Users/mir0/.zshrc.pre-oh-my-zsh
Using the Oh My Zsh template file and adding it to ~/.zshrc.

         __                                     __
  ____  / /_     ____ ___  __  __   ____  _____/ /_
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / /
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/
                        /____/                       ....is now installed!


Before you scream Oh My Zsh! look over the `.zshrc` file to select plugins, themes, and options.

• Follow us on Twitter: @ohmyzsh
• Join our Discord community: Discord server
• Get stickers, t-shirts, coffee mugs and more: Planet Argon Shop
```


## Res
🏠 https://ohmyz.sh/



## Intro
Oh My Zsh is an open source, community-driven framework for managing your [zsh](https://www.zsh.org/) configuration.

Sounds boring. Let's try again.

**Oh My Zsh will not make you a 10x developer...but you may feel like one.**

Once installed, your terminal shell will become the talk of the town *or your money back!* With each keystroke in your command prompt, you'll take advantage of the hundreds of powerful plugins and beautiful themes. Strangers will come up to you in cafés and ask you, *"that is amazing! are you some sort of genius?"*

Finally, you'll begin to get the sort of attention that you have always felt you deserved. ...or maybe you'll use the time that you're saving to start flossing more often. 😬

To learn more, visit [ohmyz.sh](https://ohmyz.sh/), follow [@ohmyzsh](https://twitter.com/ohmyzsh) on Twitter, and join us on [Discord](https://discord.gg/ohmyzsh).



## Customization
### 🤲🏼 Self-made Script
#### opening prompt
I write this opening prompt for fun. The script is to output an artful text on the screen everytime it is activated. The script is stored in `oh-my-zsh` and is invoked in `~/.zshrc`.

How i configure this: [Colorful Banners With figlet and lolcat](https://blog.victormendonca.com/2019/03/10/colorful-banners-with-figlet-and-lolcat/)
```shell
figlet -w 170 -f ~/.local/share/figlet-fonts/Cosmike.flf 'H e l l o , W o r l d !' | lolcat -a -d 1
```

To manually write a script (plugin) under `~/.oh-my-zsh/plugin` using [Figlet](http://www.figlet.org) & [Lolcat](https://github.com/busyloop/lolcat). [Figlet Fonts](https://github.com/xero/figlet-fonts) is also needed as output fonts. Here Cosmike is chosen. 

I also made some tweaks about the parameter. I set `-w 170` as the specific output width, and `lolcat -a -d 1` to add some animation to the output text. 


### 🎄 Themes
↗ [Powerlevel10k](../Shell%20Themes/Powerlevel10k.md)


### 🔌 Plugins

> [built-in plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)
>
> 👍 [Top popular Zsh plugins on GitHub (2021)](https://safjan.com/top-popular-zsh-plugins-on-github-2021/)



## 🔗OutLinks
1. [oh my zsh 简单插件开发之终端启动欢迎界面](https://blog.isuoge.com/a/oh-my-zsh-jian-dan-cha-jian-kai-fa-zhi-zhong-duan-.html)
2. [Best character image generator (ASCII Art text)](https://www.reddit.com/r/rpg/comments/nzmv4c/best_character_image_generator/)
3. [on-my-zsh 完全学习手册](https://blog.csdn.net/JENREY/article/details/118600067)
4. 👍 [Top popular Zsh plugins on GitHub (2021)](https://safjan.com/top-popular-zsh-plugins-on-github-2021/)

