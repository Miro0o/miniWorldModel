# Shell & Terminals (Console)

[TOC]



## Res
### Related Topics
↗ [GUI Desktop Environments & Windowing Systems](../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/GUI%20Desktop%20Environments%20&%20Windowing%20Systems/GUI%20Desktop%20Environments%20&%20Windowing%20Systems.md)

↗ [Messaging & Remote Accessing](../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Messaging%20&%20Remote%20Accessing/Messaging%20&%20Remote%20Accessing.md)
↗ [SSH (Secure SHell)](../../../CyberSecurity/Network%20Security/🏇%20Network%20Security%20Basics%20&%20Protocols/📱%20Application%20Layer%20Security%20Protocols/SSH%20(Secure%20SHell)/SSH%20(Secure%20SHell).md)

↗ [Computer IO System](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20IO%20System/Computer%20IO%20System.md)
↗ [OS IO System](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/OS%20IO%20System.md)
↗ [System Calls](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)


### Other Resources
🎉 https://asciinema.org
Record and share your terminal sessions, the simple way.

🎬【系统调用和 Shell (freestanding shell, 终端和 job control) [南京大学2022操作系统-P13]】 https://www.bilibili.com/video/BV1m3411n7xp/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬【How Linux Kernel Prints Text on Screen】 https://www.bilibili.com/video/BV1ex4y1t7WF/?share_source=copy_web



## Intro
> ↗ [FAQ /👉 Terminal(TTY, PTY, etc.) & Consoles](FAQ.md#👉%20Terminal(TTY,%20PTY,%20etc.)%20&%20Consoles)

> 🔗 https://silaoa.github.io/2019/2019-04-04-Linux%20Cygwin知识库（一）：一文搞清控制台、终端、shell概念.html (This website has been archived under the current directory)
> 🔗 https://silaoa.github.io/2019/2019-12-29-Cygwin系列（十）：折腾终端1.html
> 🔗 https://silaoa.github.io/2020/2020-01-13-Cygwin系列（十一）：折腾终端2.html

 > Here "shell" more specifically refers to Linux shell. But in general shell refers to a kind of software that interprates user's text commands to the OS.
 > 
 > Shell 是一门把用户指令翻译成系统调用的编程语言。

**控制台、终端、虚拟终端**是一类输入输出设备的总称，拥有将用户指令输入给操作系统和将操作系统返回结果输出给用户的基本功能，电传打字机（teletypewriter，缩写为tty）是该类设备的具体实例。终端模拟器（Terminal Emulator）是一类应用程序，用来模拟终端设备的功能，未具体说明情况下，“终端”泛指真实终端设备或终端模拟器。
- 伪终端（pseudo tty，缩写为pty）是UNIX/Linux内核中驱动程序模块，是一个软件中间层，用于克服真实终端设备在现代应用场景中的不足。
- 由于设计理念不同，Windows内核不支持 [Single Unix Specification](http://pubs.opengroup.org/onlinepubs/009695399/nfindex.html) 中规定的终端、伪终端设备，也不支持ANSI转义序列，但提供了 [Windows Console组件](https://zh.wikipedia.org/wiki/Win32%E6%8E%A7%E5%88%B6%E5%8F%B0)和相应配套的API。

**Shell**是UNIX/Linux系统中最为重要的应用程序之一，负责解释执行用户指令，打印结果，和用户交互，进行着REPL（Read-Evaluate-Print Loop）。sh、bash、zsh、fish等都是Shell的具体实例。

**系统内核**接管计算机资源，设备和程序**在系统内核的调配下运转**，他们之间的关系可用下图表示。用户实际用到的是具体程序，是难以感知内核的存在的，所以看起来就像是Shell在帮助用户调用程序。

![|300](../../../../../../Assets/Pics/Screenshot%202024-02-15%20at%2011.47.13PM.png)
<small>终端、Shell、系统内核与用户的关系示意</small>


### 1️⃣ Console, Terminal, Serial Terminal
#### Teletype, tty


#### ASNI Escape Sequence
> 🔍 [ANSI Escape Sequences](https://gist.github.com/ConnerWill/d4b6c776b509add763e17f9f113fd25b)

---
UNIX上古时期，经历了电传打字机（Teletype, tty）、电子视频终端（Video Terminal，键盘+阴极射线管显示器）用作终端设备（Terminal），通过RS232串口线连接主机，是计算机系统中的io外设。

在没有图形界面、只有文本字符的年代，为了更加灵活、友好地和用户交互，终端设备逐渐支持颜色、高亮、光标移动、清屏等多种效果，设备厂商定义一些特殊字符来表征这些效果，因为不是真正的输出文本内容，也被称为**转义字符**或**控制字符**，比如在shell提示符变量`PS1`、`ls`输出颜色控制变量`LS_COLOR`中，经常看到的”`\033[34m`”或”`\e[34m`”。这些特殊功能以函数库（termcap/terminfo）的形式提供给开发者，方便开发者调用。但是如果每个厂家都来这么一套函数库，而且各家规范也不一致的话，开发者用起来就比较头疼，程序在不同终端上兼容性也差。美国国家标准学会(American National Standard Institute，ANSI)牵头制订了包括ASCII在内的一系列规范，解决计算机、终端设备等之间数字信息问题，ANSI采用了ANSI X3.64规范，提出了“**ANSI Escape Sequence**”的概念（以下称“ANSI转义序列”），见[维基百科 ANSI_escape_code](https://en.wikipedia.org/wiki/ANSI_escape_code)。

1978年，Digital VT100成为首个支持ANSI Escape Sequence的终端设备，随着VT100大获成功，越来越多的终端设备兼容VT100，**VT100成为了事实标准**，相关标准被UNIX、Linux所支持和继承，甚至阴极射线管显示器支持80行×24列字符的尺寸标准也被保留。

---
> 🔗 https://en.wikipedia.org/wiki/ANSI_escape_code

**ANSI escape sequences** are a standard for [in-band signaling](https://en.wikipedia.org/wiki/In-band_signaling "In-band signaling") to control cursor location, color, font styling, and other options on video [text terminals](https://en.wikipedia.org/wiki/Text_terminal "Text terminal") and [terminal emulators](https://en.wikipedia.org/wiki/Terminal_emulator "Terminal emulator"). Certain sequences of [bytes](https://en.wikipedia.org/wiki/Byte "Byte"), most starting with an [ASCII escape](https://en.wikipedia.org/wiki/Escape_character#ASCII_escape_character "Escape character")character and a [bracket](https://en.wikipedia.org/wiki/Bracket "Bracket") character, are embedded into text. The terminal interprets these sequences as commands, rather than text to display verbatim.

ANSI sequences were introduced in the 1970s to replace vendor-specific sequences and became widespread in the computer equipment market by the early 1980s. They are used in development, scientific, commercial text-based applications as well as [bulletin board systems](https://en.wikipedia.org/wiki/Bulletin_board_system "Bulletin board system") to offer standardized functionality.

Although hardware text terminals have become increasingly rare in the 21st century, the relevance of the ANSI standard persists because a great majority of terminal emulators and command consoles interpret at least a portion of the ANSI standard.


### 2️⃣ Virtual Terminal, Terminal Emulator
随着计算机造价变低、PC普及，终端设备退出历史舞台，特别是图形界面（GUI）技术广泛应用后，终端模拟器（Terminal Emulator）开始替代它的位置，以下不刻意区分术语“终端”和“终端模拟器”。但是命令行程序还是期望处于真实的终端设备环境中，总不能把以前所有的命令行程序中的io功能、ANSI转义序列等全部改掉，UNIX/Linux内核发展出了**伪终端**（pseudo tty，缩写为pty）设备顺应这一趋势。

UNIX/Linux系统上的终端模拟器就顺着pty这条线发展，比如X Window System的标配程序`xterm`，其他诸如`rxvt`、Gnome图形环境标配的`Gnome Terminal`、KDE图形环境标配的`Konsole`等，基本都是在`xterm`基础上发展而来。Cygwin通过模拟UNIX，也兼容了pty（也许只能部分兼容，未实考）。

经常可以看到终端模拟器的配置中，涉及“终端模式”或者“兼容模式”，可设置的选项包括“VT100”、“ANSI”、“xterm”等。具体属性信息，可通过`stty`命令显示。
#### Unix/Linux pty
> ↗ [Pseudo tty (pty) Based](Terminal%20Emulators/📌%20Pseudo%20tty%20(pty)%20Based/Pseudo%20tty%20(pty)%20Based.md)

![pty_tty_console.excalidraw|800](../../../../../../Assets/Illustrations/Computer%20System/pty_tty_console.excalidraw.md)

![](../../../../../../Assets/Pics/Screenshot%202024-02-15%20at%2011.44.58PM.png)
<small>伪终端设备工作原理示意</small>

![](../../../../../../Assets/Pics/Screenshot%202024-02-15%20at%2011.45.40PM.png)
<small>支持伪终端设备的终端模拟器工作原理示意</small>
#### Windows Consoles -> ConPTY
> ↗ [Windows Console & ConPTY Based](Terminal%20Emulators/📌%20Windows%20Console%20&%20ConPTY%20Based/Windows%20Console%20&%20ConPTY%20Based.md)

![](../../../../../../Assets/Pics/Screenshot%202024-02-16%20at%2011.50.46AM.png)
<small>Win10 1803上的Console架构 图片来源：微软博客</small>


### 3️⃣ Shell
↗ [Shell & Script Programming](🦞%20Shell%20&%20Script%20Programming/Shell%20&%20Script%20Programming.md)



## Ref
[👍 Linux Cygwin知识库（一）：一文搞清控制台、终端、shell概念]: https://silaoa.github.io/2019/2019-04-04-Linux%20Cygwin知识库（一）：一文搞清控制台、终端、shell概念.html 

(This website has been archived under the current directory)
