# X Window System (X11, X Project)

[TOC]



## Res
### Related Topics
↗ [Remote Administration(Access) Tools (RAT)](../../../../../../Generic%20Software%20Tools%20&%20Projects/Remote%20Administration(Access)%20Tools%20(RAT)/Remote%20Administration(Access)%20Tools%20(RAT).md)
- ↗ [VNC (Virtual Network Computing)](../../../../../../Generic%20Software%20Tools%20&%20Projects/Remote%20Administration(Access)%20Tools%20(RAT)/VNC%20(Virtual%20Network%20Computing)/VNC%20(Virtual%20Network%20Computing).md)
- ↗ [X11VNC](../../../../../../Generic%20Software%20Tools%20&%20Projects/Remote%20Administration(Access)%20Tools%20(RAT)/VNC%20(Virtual%20Network%20Computing)/X11VNC.md)

↗ [UNIX Family](../../../../../UNIX%20Family/UNIX%20Family.md)

X Project is NOT Netsarang's X serial products:
🔗 https://www.netsarang.com/en/
↗ [XManager](../XManager.md)

↗ [Xshell](../../../../../🐚%20Shell%20&%20Terminals%20(Console)/Terminal%20Emulators/📌%20Windows%20Console%20&%20ConPTY%20Based/Xshell.md)
↗ [xterm & xterm based](../../../../../🐚%20Shell%20&%20Terminals%20(Console)/Terminal%20Emulators/xterm%20&%20xterm%20based/xterm%20&%20xterm%20based.md)

↗ [VNC (Virtual Network Computing)](../../../../../../Generic%20Software%20Tools%20&%20Projects/Remote%20Administration(Access)%20Tools%20(RAT)/VNC%20(Virtual%20Network%20Computing)/VNC%20(Virtual%20Network%20Computing).md)


### Documentations & Learning Resources
📂 https://en.wikibooks.org/wiki/Guide_to_X11/Window_Managers
Guide to X11/Window Managers



## Intro
> 🔗 https://en.wikipedia.org/wiki/X_Window_System

> 🔗 https://silaoa.github.io/2021/2021-10-30-Cygwin系列（十三）：折腾X.html
> 大多数情况下，我们用Linux系统，是为了发挥命令行程序高效的威力，通过终端远程连接过去，一个黑框框里干完所有的活。但是，偶尔也需要运行一下图形界面程序，比如Web浏览器、Oracle安装程序等。而Linux系统主机通常做服务用，不会在图形支持方面堆很高的配置，这时我们可以利用X11的特性，在远端（Linux主机）运行X Client，但让安装了X Server的本地主机（如Windows主机）负责显示程序界面和交互。

1984年MIT大学创造了X规范，就类似TCP/IP协议栈一样。本义是**在UNIX系统构建图形化视窗系统的设计方案**，准确名称叫“X Window System”，注意拼写**不是**“Windows”，与微软、与Windows没任何关系。

X规范在1987年形成了第11版（Version 11），1994年发布第11版的第6次发行（Release 6），确切版本名即为“X11R6”，后来成为UNIX上图形视窗系统标准规范，也简称“X11”或者“X”，目前最新版本是2012年发布的“X11R7.7”。

The **X Window System** (**X11**, or simply **X**) is a [windowing system](https://en.wikipedia.org/wiki/Windowing_system "Windowing system") for [bitmap](https://en.wikipedia.org/wiki/Bitmap "Bitmap") displays, common on [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like")operating systems.

X provides the basic framework for a GUI environment: drawing and moving windows on the display device and interacting with a mouse and keyboard. X does not mandate the user interface – this is handled by individual programs. As such, the visual styling of X-based environments varies greatly; different programs may present radically different interfaces.

X originated as part of [Project Athena](https://en.wikipedia.org/wiki/Project_Athena "Project Athena") at [Massachusetts Institute of Technology](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology "Massachusetts Institute of Technology") (MIT) in 1984. The X protocol has been at version 11 (hence "X11") since September 1987. The [X.Org Foundation](https://en.wikipedia.org/wiki/X.Org_Foundation "X.Org Foundation") leads the X project, with the current reference implementation, [X.Org Server](https://en.wikipedia.org/wiki/X.Org_Server "X.Org Server"), available as [free](https://en.wikipedia.org/wiki/Free_software "Free software") and [open-source software](https://en.wikipedia.org/wiki/Open-source_software "Open-source software") under the [MIT License](https://en.wikipedia.org/wiki/MIT_License "MIT License") and similar permissive licenses.

> 🔗 https://silaoa.github.io/2020/2020-04-25-Cygwin系列（十二）：了解X.html
> 
> X Window System各个部分都有着多种实现，X规范本身特别偏底层，加之GNU/Linux自由开放的特点，有不少项目在X规范基础之上进一步封装，并把上述各组件、图标、主题、及其他特色组件打包在一起，形成开箱即用的桌面环境（Desktop Environment），常见如`Gnome`、`KDE`、`Unity`、`XFCE`、`LXDE`等，不一一列举，每种桌面环境都有不少用户群体，所支持的系统平台、底层库也各不一样。
> 
> 另值得一提的是，中国武汉深之度科技公司基于Debian（早先基于Ubuntu）打造的GNU/Linux发行版Deepin，拥有自己的桌面环境`DDE`，即Deepin Desktop Environment，Deepin系统在[DistroWatch](https://distrowatch.com/)上排名比较靠前，`DDE`也同时支持其他GNU/Linux发行版


### X Window System Principles
“X11”采用了C/S的架构，在其设计下，整个图形视窗系统主要分为3个部分：
- X Server（X服务器）。X Server一方面负责和设备驱动交互，监听显示器和键盘鼠标，另一方面响应X Client需求传递键盘、鼠标事件、（通过设备驱动）绘制图形文字等。**反直觉之一，X Server运行在本地**。
- X Client（X客户端）。X Client也叫X应用程序，负责实现程序逻辑，在收到设备事件后计算出绘图数据，由于本身没有绘制能力，只能向X Server发送绘制请求和绘图数据，告诉X Server在哪里绘制一个什么样的图形。**X Client可以和X Server在同一个主机上，也可以通过TCP/IP网络连接。**
- Window Manager（窗口管理器，简称WM），或者叫合成器（Compositor）。多个X Client向X Server发送绘制请求时，各X Client程序并不知道彼此的存在，绘制图形出现重叠、颜色干扰等问题是大概率事件，这就需要一个管理者统一协调，即Window Manager，它掌管各X Client的Window（窗口）视觉外观，如形状、排列、移动、重叠渲染等。**反直觉之二，Window Manager并非X Server的一部分，而是一个特殊的X Client程序**。

3个部分， **X Server是整个X Window System的中心**，协调X客户端和窗口管理器的通信。
[![X11的C/S架构 图源：维基百科](https://pic2.zhimg.com/80/v2-46b872d09eb863a65d3064dae6cdf67a_720w.png)](https://pic2.zhimg.com/80/v2-46b872d09eb863a65d3064dae6cdf67a_720w.png "X11的C/S架构 图源：维基百科")
<small>X11的C/S架构 图源：维基百科</small>

“X11”充分遵循UNIX设计哲学，尽可能简单，除非必要绝不新增功能，其实也意味着粗糙、原始；提供机制而非具体策略，如菜单、按钮等元素细节并不做规定，交给窗口管理器、客户端程序等自主实现，于是不同的实现风格各异。任何遵循了X11规范的客户端程序和服务器程序配合起来，即可正常运行，X11得益其开放性，迅速发展，成为UNIX系统的事实标准。

假定多个X客户端程序及窗口管理器在主机A上，某个X Server（如下文`X.Org Server`）运行在主机B上，程序运行过程可简化如下过程。
1. 某个X客户端进程启动，向主机B发送连接请求，目标地址可通过命令行或配置文件指定，如果给定的地址已有X Server正在监听端口，则进行下一步；
2. 主机B上的X Server返回一个连接正确响应，X Server也可以配置接受或拒绝某些地址的请求；
3. X客户端向X Server发送渲染请求及窗口界面数据；
4. X Server一方面将窗口界面数据交给显示驱动计算渲染缓冲，另一方面综合各个X客户端的渲染请求，计算更新区域，但它并不知道如何将多个窗口“合成到一起”，于是将更新区域事件发给窗口管理器；
5. 窗口管理器了解到需要在屏幕上重新合成一块区域，再向X Server发送整个屏幕的绘制请求和数据；
6. X Server将绘图数据交给显示驱动计算所有渲染缓冲，并最终绘制图形；
7. 运行过程中，X Server可能收到主机B上的鼠标、键盘事件，经计算后，X Server决定发给哪个X客户端（即获得焦点）；
8. X客户端收到鼠标、键盘事件后，回调事件处理，并计算界面该如何更新；
9. 循环第3~8，直至X客户端收到关闭事件，进程终止、连接断开。

![](../../../../../../../../../../Assets/Pics/Screenshot%202024-02-16%20at%201.25.38AM.png)
<small>X绘图过程示意</small>

以上过程，主机A和B的CPU架构、操作系统可能都不相同，若A和B是同一个主机，就相当于在本地绘图、显示了。



## Ref
[👍 Cygwin系列（十二）：了解X]: https://silaoa.github.io/2020/2020-04-25-Cygwin系列（十二）：了解X.html
[👍 Cygwin系列（十三）：折腾X]: https://silaoa.github.io/2021/2021-10-30-Cygwin系列（十三）：折腾X.html

本文同步发布于知乎（账号silaoA）和微信公众号平台（账号伪码人）。

[👍 How X Window Managers Work, And How To Write One (Part I)]: https://jichu4n.com/posts/how-x-window-managers-work-and-how-to-write-one-part-i/
[Basic Window Manager]: https://github.com/jichu4n/basic_wm

[X-Window介绍与使用 | CSDN]: http://t.csdnimg.cn/y5MMe
![](../../../../../../../../../../Assets/Pics/Pasted%20image%2020240603224347.png)
