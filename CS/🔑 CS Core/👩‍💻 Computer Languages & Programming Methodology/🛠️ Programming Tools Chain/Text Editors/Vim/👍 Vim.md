# Vim

[TOC]



## Res
### Vim Variants & Integration
↗ [Neovim](../Neovim/Neovim.md)
↗ [ST Package Contorl /NeoVintageous](../SublimeText/SublimeText%20Configuration/ST%20Package%20Contorl.md)


### Learn Vim
- [Missing Semester --- Vim](https://missing.csail.mit.edu/2020/editors/)
- [写给 VS Code 用户的 Vim 入坑指南](https://www.ahonn.me/blog/the-vim-guide-for-vs-code-users)
- [Learn Vim For the Last Time: A Tutorial and Primer](https://danielmiessler.com/study/vim/)
	- [get start with VimGolf](http://codenhance.com/2015/10/07/getting-started-with-vim-golf.html)
	- [VimGolf](http://vimgolf.com/) is a competitive game that improves your text editing skills. It’s a great way to kill five minutes inbetween tasks and offers the promise of some seriously obscure bragging rights.
	- If you’re completely unfamiliar with Vim, go try [this online tutorial(openvim)](http://www.openvim.com/tutorial.html), or at least play [Vim Snake](http://www.vimsnake.com/) or [Vim Adventures](http://vim-adventures.com/) to get used to the basic movements. What follows will be a quick walkthrough of installing the necessary programs, creating an account, and submitting your first entry.
- [Vim-galore](https://github.com/mhinz/vim-galore)
  - language supported: en, zn, ja, pt, ru, vi
- [Vimawesome](https://vimawesome.com)  --- awesome vim plug-in from across the universe
- Learn Vim progressively
  - [简明Vim练级攻略](https://coolshell.cn/articles/5426.html)
- Deep dive into vim
  - [Learn Vim Script the Hard Way](https://learnvimscriptthehardway.stevelosh.com/) 

Interactive Vim tutorial: [Open Vim](https://openvim.com/)
Vim quick reference from Vim help pages: [quickref.txt](https://vimhelp.org/quickref.txt.html)
List of all Vim ex (:) commands: [ex-cmd-index](https://vimhelp.org/index.txt.html#ex-cmd-index)

https://www.vimfromscratch.com/
Vim From Scratch


### 🐍 Vim Cheat Sheet & Tips
👍 https://devhints.io/vim

https://vim.rtorr.com
https://vimsheet.com

👍 https://learnbyexample.github.io/tips/#vim


### Vim Docs
📂 [Vim Help](https://vimhelp.org)
[Vim Tutorial](https://www.tutorialspoint.com/vim/index.htm)



## Overview
### 🤷 What is [Vim](https://www.vim.org) ?
Vim stands for Vi IMproved.  Most of Vim was made by Bram Moolenaar, but only through the help of many others.

> [Vim, emacs, nano, neovim, ed, etc..](https://medium.com/linode-cube/emacs-nano-or-vim-choose-your-terminal-based-text-editor-wisely-8f3826c92a68)


### 🧐 Why Vim?
Check out [this article](http://www.viemu.com/a-why-vi-vim.html).


### 💨 Try Vim
> To learn Vim basics, enter `vimtutor` in your terminal to access an interactive walkthrough.
> 
> 💪 When you’re ready for some advanced practice, try [VimGolf](http://www.vimgolf.com/) for exercises that encourage finding better, more efficient solutions to solve challenges.

Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X.

> **关于键位映射**
> 用 Vim 编辑代码的时候会频繁用到 ESC 和 CTRL 键, 但是这两个键都离 home row 很远, 可以把 CapsLock 键映射到 Esc 或者 Ctrl 键，让手更舒服一些。
>
> Windows 系统可以使用 [Powertoys](https://learn.microsoft.com/en-us/windows/powertoys/) 或者 [AutoHotkey](https://www.autohotkey.com/) 重映射键位。 
> MacOS 系统提供了重映射键位的[设置](https://vim.fandom.com/wiki/Map_caps_lock_to_escape_in_macOS)，另外也可以使用 [Karabiner-Elements](https://karabiner-elements.pqrs.org/) 重映射。
>
> 但更佳的做法是同时将 CapsLock 映射为 Ctrl 和 Esc，点按为 Esc，按住为 Ctrl。
> Windows 系统下，这个[AutoHotKey gist](https://gist.github.com/sedm0784/4443120) 实现了这个功能。 
> MacOS 可以导入[这个 karabiner rule](https://ke-complex-modifications.pqrs.org/#caps_lock_tapped_escape_held_left_control) 重映射。


### 🦹🏼‍♂️ Vim Usages -- Basics & Advance
↗ [Vim Basic Usages](Vim%20Usages/Vim%20Basic%20Usages.md)
↗ [Vim Advance Usages](Vim%20Usages/Vim%20Advance%20Usages.md)



## Vim History --- from vi to vim
> 🔗 https://mp.weixin.qq.com/s/0BXnvponBNlsu7oEbXjuRA



## 🤤 Vim Customization
↗ [Vim Customization & Configuration](Vim%20Customization%20&%20Configuration/Vim%20Customization%20&%20Configuration.md)



## 🔗 Refs
- [quit Vim](https://blog.csdn.net/luo200618/article/details/52510781)
- [Vim hotkey](https://www.cnblogs.com/zlcxbb/p/6442083.html)
- [优雅地查找与替换](https://harttle.land/2016/08/08/vim-search-in-file.html#header-0)
- [复制、删除、粘贴](https://blog.csdn.net/ljx_5489464/article/details/50896080)
	- [一文搞懂复制粘贴](https://www.cnblogs.com/huahuayu/p/12235242.html)
- [how do i quit from vim ](https://stackoverflow.com/questions/11828270/how-do-i-exit-the-vim-editor)
- [Vim Cheetsheet](https://devhints.io/vim)
- [vim技巧：在不同文件buffer间切换，在多窗口跳转和改变窗口大小](https://segmentfault.com/a/1190000021070194)
- [vim 多窗口使用技巧](https://blog.51cto.com/hackedu/3404063)
- [VIM学习笔记 多标签页（Tabs） - YYQ的文章 - 知乎]( https://zhuanlan.zhihu.com/p/25946307)
- [如何用 vim 文本编辑器比较两文件](https://www.cnblogs.com/klchang/p/13441038.html) 

[👍 A Practical Guide to Learning Vim (NV on ST)]: https://zzzachzzz.github.io/blog/a-practical-guide-to-learning-vim

[世界上最厉害的编程神器 ，被大多数人抛弃了......]: https://mp.weixin.qq.com/s/0BXnvponBNlsu7oEbXjuRA
![](../../../../../../Assets/Pics/Pasted%20image%2020240523150520.png)

vi把编辑模式和命令模式区分开，就可以在命令模式玩出花儿来，甚至可以基于基本的词来“造句”

**动词**
动词表示对文本的操作，例如
d  delete  删除
r  replace  替换
y  yank  复制
v  visual  选择

**名词**
表示待编辑的文本对象
w  word  一个单词
s  sentence  一个句子
p  paragraph  一个段落

**修饰符**（有人称为介词）
表示待编辑文本的范围或者位置
i  inside     表示在...之内
a  around  表示环绕
t  till          直到某个字符（不包括该字符）
f  find        直到某个字符（包括该字符）

然后就可以组词成句了：动词 + 介词 + 名词 ，例如：
删除当前的单词 : diw (delete inside word)
改变当前的句子：cis(change inside sentence)
删除文本直到字符e : dte (delete till 'e')
选择一个句子：vis (visual inside sentence)

非常强大也非常自然，并且vi还支持自定义，可以定制一套属于自己的动词名词结构出来。
当然，复杂的操作可以用鼠标+菜单的方式来实现，那就需要把手从键盘上挪开了。
值得注意的是，**vi 是在Modem只有300波特率的时候编写的 ！**
即使后来的1200波特率，传输文本的速度也比大多数人阅读的速度慢，更别说300波特率了，这深刻地影响了vi的设计。

Bill Joy曾经“酸酸地”说过：那些开发Emacs的家伙们坐在MIT的实验室中，有着像现在光纤一样快的网络，他们可以在屏幕闪烁的情况下发出有趣的命令，而我坐在伯克利的简陋房子里，用着极其缓慢的调制解调器，几乎无法让光标离开底线。人们不会知道，**vi是为了一个已经消失的世界编写的**。
