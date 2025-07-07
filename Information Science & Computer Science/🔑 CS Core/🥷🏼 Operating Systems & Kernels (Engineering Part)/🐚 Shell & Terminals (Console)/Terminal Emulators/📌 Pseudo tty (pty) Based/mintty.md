# mintty

[TOC]



## Res
🏠 https://mintty.github.io


### Related Topics
↗ [Cygwin Project](../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/Cygwin%20Project/Cygwin%20Project.md)

↗ [MinGW & MinGW-w64](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/C-like%20Runtimes/C-like%20Compilers%20Suites/MinGW%20&%20MinGW-w64.md)
↗ [MSYS & MSYS2](../../🦞%20Shell%20&%20Script%20Programming/MSYS%20&%20MSYS2.md)

↗ [PuTTY](../../../../../CyberSecurity/Network%20Security/🏇%20Network%20Security%20Basics%20&%20Protocols/📱%20Application%20Layer%20Security%20Protocols/SSH%20(Secure%20SHell)/SSH%20Clients%20&%20Remote%20Shell/PuTTY.md)



## Intro
> 🔗 https://silaoa.github.io/2019/2019-12-29-Cygwin系列（十）：折腾终端1.html

Mintty是一款基于pty的开源终端，从`putty` 0.60版本的代码分支而来，现今项目地址：[https://mintty.github.io](https://mintty.github.io/)，兼容POSIX “pipe”模式，完全支持ANSI转义序列。不同寻常的是，在抱了Cygwin大腿的同时，还调用了Win32 GUI API，运行不仅依赖Cygwin核心（`cygwin1.dll`），还依赖一堆Windows的dll（`msvcrt.dll`、`GDI32.dll`、`USER32.dll`、`KERNEL32.DLL`）等。它不仅是Cygwin的默认终端，也是MSYS、MSYS2等的默认终端，随各项目的软件包发行，与`wslbrige`配合还能连接到WSL（的命令行程序）。从这可以看出，Mintty和Cygwin关系密切不一般，官方默认没毛病。

Mintty的主要功能特性：

- 兼容`xterm`，支持DEC公司（VT100就是他家的）终端产品所有屏幕控制功能；
- 支持字符加粗、斜体、下划线、闪烁、前后景色等风格；
- 全面支持Unicode，支持Emoji；
- 支持256色和真彩色；
- 支持图片显示；
- 图形化配置，保存为配置文件`.mintty`；
- 灵活的文字复制粘贴操作；
- 支持Windows XP至Windows10。

Mintty项目官网列出展示上述功能特性的截图，还提供了使用手册，使用手册也是随软件包一起发行。[Cygwin系列（五）：Shell命令行初体验](https://silaoa.github.io/2019/2019-03-13-Cygwin%E7%B3%BB%E5%88%97%EF%BC%88%E4%BA%94%EF%BC%89%EF%BC%9AShell%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%88%9D%E4%BD%93%E9%AA%8C.html)也简单说了它的工作原理。

Mintty的强大之处无需赘述，但不可避免地存在一个问题——不能很好地和Windows命令行程序配合起来，一方面前文陈述的Windows Console组件和pty的不兼容，另一方面是Windows命令行程序使用的字符集与Mintty所支持的存在不兼容。还有我个人觉得不太爽的，**尽管支持通过如`tmux`、`GNU Screen`等多路复用器切换窗口，但Mintty不支持多标签页**。



## Ref

