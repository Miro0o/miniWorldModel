# Cygwin Project

[TOC]



## Res
🏠 http://www.cygwin.com
📂 https://cygwin.com/cygwin-ug-net/cygwin-ug-net.html


### Related Topics
↗ [Windows](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows.md)
↗ [POSIX (Portable Operating System Interface)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/POSIX%20(Portable%20Operating%20System%20Interface).md)

↗ [WSL (Windows Subsystems for Linux)](../WSL%20(Windows%20Subsystem%20for%20Linux)/WSL%20(Windows%20Subsystems%20for%20Linux).md)

↗ [MSYS & MSYS2](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/MSYS%20&%20MSYS2.md)
↗ [MinGW & MinGW-w64](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/C-like%20Runtimes/C-like%20Compilers%20Suites/MinGW%20&%20MinGW-w64.md)


### Learning Resources
👍 👨‍💻 https://silaoa.github.io/2019/2019-02-14-Cygwin系列（一）：Cygwin是什么.html
Cygwin系列（一）：Cygwin是什么
本文同步发布于知乎（账号silaoA）和微信公众号平台(账号伪码人)。



## Intro
> 🔗 https://silaoa.github.io/2019/2019-02-14-Cygwin系列（一）：Cygwin是什么.html


### Cygwin Components
Cygwin就是在Windows中增加了一个中间层——兼容POSIX的模拟层，并在此基础上构建了大量Linux-like的软件工具。再来解释本文开头的回答，如下图，POSXI兼容环境包括以下两部分：
- cygwin1.dll，作为实现POSIX系统调用的模拟层，可原生运行在Windows中；
- 在cygwin1.dll之上构建的大量函数库、应用程序，如`libc`、`zlib`、`bash`、`gcc`、`vim`、`awk`、`sed`、`git`等等，与UNIX/Linux几乎等同*。

![](../../../../../../../../Assets/Pics/Screenshot%202024-02-15%20at%207.39.11PM.png)
<small>Cygwin环境层次简要示意图</small>

Cygwin API首先尽可能地遵从[Single Unix Specification V3（2004版）](http://pubs.opengroup.org/onlinepubs/009695399/nfindex.html)，这个标准内容同时也是POSIX.1和IEEE Std 1003.1的标准内容，由Open Group和IEEE共同制定，最新已更新到V4（2018版），其次再尽可能地遵从Linux最佳实践。Cygwin API中还有些是Cygwin独有的，在POSIX中并未涉及。

Cygwin将`cygwin1.dll`、函数库、应用程序等文件按照UNIX/Linux的目录树架构进行组织存放，如`/bin`、`/usr`、`/lib`、`/etc`、`/var`、`/home`等等都存在于Cygwin安装路径下，用户从终端登陆进Cygwin的shell后，就可以像在UNIX/Linux系统那样使用相同的命令、工具，随着开发工作推进，越来越多的GNU、UNIX、Linux软件都移植到了Cygwin中。不仅如此，甚至像X Server、Gnome/KDE桌面环境等都移植到了Cygwin中，UNIX/Linux系统中的图形界面软件也能使用。


### Cygwin Pros & Cons
Pros:
- 首先自然是近乎一致的UNIX/Linux体验；
- 完备且相对轻量，普通用户不必安装整个Linux系统或虚拟机，就可以获得近乎一致的体验，Cygwin的程序运行与Windows互不干扰，高效的命令行工具与Windows图形界面各有所长、形成互补；
- 开源免费，cygwin1.dll本身是按照GPLv3协议发布的，其他的应用程序有GPL、LGPL、X11等多种协议；
- 安装卸载方便，Cygwin提供了包管理工具，可按需安装/卸载软件包，一个能运行起来的最小Cygwin系统只需要几十上百MB，而完全的Cygwin系统需要几十GB；
- 源码级兼容性，GNU、UNIX、Linux软件的源代码几乎不用修改就可以在Cygwin环境中编译构建成功；
- 与Windows互操作，Cygwin把Windows的磁盘挂载到/cygdrive下，如c盘就是`/cygdrive/c`、d盘就是`/cygdrive/d`，Cygwin中的应用程序可以读写Windows磁盘中的文件，Windows应用程序也可以读写Cygwin目录中的文件（但要注意不要把文件搞乱了）；Cygwin的shell中可以启动Windows程序，Windows的cmd中也可以启动Cygwin的程序，但由于字符编码不同可能造成乱码；
- 多一套可用的API，对于Windows开发者，程序代码既可以调用Win32 API，又可以调用Cygwin API，甚至混合。
Cons:
- 效率相对低，由于是在Win32系统之上模拟实现POSIX兼容层，应用程序在底层就多了一个层级的函数调用，效率比UNIX/Linux系统上原生的应用程序肯定低，不过这也是在效率和兼容性之间选择的一个平衡；
- 未实现二进制文件级别的兼容，Cygwin系统上的应用程序编译后仍然是Windows PE格式的可执行文件，**UNIX/Linux系统上的二进制可执行文件在Cygwin上不能运行**。
- 与Windows互操作不足，Windows原生程序并不能利用cygwin1.dll提供的与UNIX/Linux兼容的信号、pty设备等，除非改写程序代码重新编译，但这样新的程序就依赖于cygwin1.dll，就不是 **“Windows原生程序”**了。


### Cygwin Application Scenarios
Cygwin可资利用的是已经移植的大量GNU、UNIX、Linux软件和兼容POSIX的模拟层，其使用场合也就是针对这两点。

常见的应用场合包括但不限于：
1. **Shell命令行使用**
	1. Shell是UNIX/Linux的精华所在，骨灰级玩家可以做到不用鼠标只敲命令完成所有工作，用户最常用的大量命令在Cygwin下均可照常使用，在UNIX/Linux编写的脚本也可以几乎不加修改地在Cygwin下运行。例如安卓厨房本是在Linux-like环境下运行的脚本集合，用于修改安卓系统固件包，有了Cygwin，Windows用户也可以拿来修改安卓系统固件包。高效的命令行工具与Windows图形界面各有所长、形成互补。
2. **交叉编译构建环境搭建**
	1. Cygwin环境中已移植好了gcc等开发工具，大量的交叉工具链（如arm-none-gnu-eabi-gcc、arm-none-gnu-eabi-binutils）也可以在Cygwin中制作，就算只有Windows原生版本的，Cygwin shell中也能调用，那么利用Cygwin就能搭建起交叉编译构建环境；另外，使用Cygwin API，编写代码以及后续编译构建过程，与在UNIX/Linux中差异也很小了。
3. **程序移植** 
	1. 把符合POSIX标准的程序移植到Windows下，还有更多正在由个人、社区、商业公司、研究机构不断贡献的开源自由软件，造福广大Windows用户，利用已有的GNU、UNIX、Linux软件会使程序移植越来越容易。这一点不多说。
4. **兼用POSIX API和Win32 API开发**  
	1. 有的开发者可能对UNIX/Linux和Win32的API都熟悉，两套API也各有其优点，在Cygwin下开发者自己可以任意选取、混合使用。


### 🤔 Cygwin 🆚 Other Related Windows Projects
> 🔗 https://silaoa.github.io/2019/2019-02-26-Cygwin系列（三）：盘点与Cygwin相似和相反的项目.html
#### Projects Run Alike Cygwin
POSIX subsystem、SFU、↗ [WSL (Windows Subsystems for Linux)](../WSL%20(Windows%20Subsystem%20for%20Linux)/WSL%20(Windows%20Subsystems%20for%20Linux).md)

↗ [MinGW & MinGW-w64](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/C-like%20Runtimes/C-like%20Compilers%20Suites/MinGW%20&%20MinGW-w64.md)

↗ [MSYS & MSYS2](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/MSYS%20&%20MSYS2.md)

UWIN、GnuWin32、UnxUtils 
(这几个项目做着和Cygwin、MinGW/MSYS类似的工作，但比他们都差，逐渐淡出视线。)
#### Projects Run Against Cygwin
↗ [ReactOS](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/💙%20ReactOS/ReactOS.md)

↗ [Wine Project (Linux Subsystem for Windows)](../🍷%20Wine%20Project%20(Linux%20Subsystem%20for%20Windows)/Wine%20Project%20(Linux%20Subsystem%20for%20Windows).md)

Longene

> 2005年，大名鼎鼎的《Linux内核源代码情景分析》《Windows内核情景分析：采用开源代码ReactOS》的作者、浙江大学教授毛德操发起了Linux兼容内核（Linux Unified Kernel）自由软件项目，也叫Longene，中文翻译“龙井”，受浙大网新有限公司赞助。
> 
> 毛德操教授在网上发表了《Linux兼容内核》《漫谈兼容内核》《漫谈Wine》等系列文章，指出项目的开发路线。Longene主要做以下三方面工作
> 1. 以可运行的Wine为起点，以Linux内核函数为材料，在内核空间逐步替换Wine在用户空间的功能组件（如Wine Server等），但运行Windows程序仍需要Longene版的Wine支持，剔除了Wine Server；
> 2. 借鉴ReactOS、NDISWrapper项目，实现Windows设备驱动框架；
> 3. 借鉴ReactOS、NDISWrappe项目和Linux内核，实现Windows内核API；
> 
> 最终的目标是实现一个同时支持Linux和Windows的“兼容内核”。

2008年，一个中文Linux发行版MagicLinux 2.1采用了Longene 0.2.2内核。2013年至2014年初Longene发布了1.0-rc1和rc2版。但后来项目逐渐停滞，官网 www.Longene.org 也关闭了，相关代码公开在[GitHub](https://github.com/tsuibin/longene)上



## Ref
[Cygwin系列（六）：使用Cygwin常见问题及应对]: https://silaoa.github.io/2019/2019-03-20-Cygwin系列（六）：使用Cygwin常见问题及应对.html

需指出，Cygwin中Shell的PATH变量值，与Windows系统的PATH变量值相互独立，但是**Cygwin中Shell的PATH初始值继承自Windows系统的PATH变量值，用户可以在此基础上继续定义，这也是为什么在Cygwin的Shell中可以执行Windows原生命令的原因！** 通常，至少`/bin`、`/usr/bin`、`/usr/local/bin`这些标准路径都应该在Shell的PATH中。
