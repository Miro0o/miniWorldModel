# ReactOS

[TOC]



## Res
🏠 https://reactos.org


### Related Topics
↗ [Wine Project (Linux Subsystem for Windows)](../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/🍷%20Wine%20Project%20(Linux%20Subsystem%20for%20Windows)/Wine%20Project%20(Linux%20Subsystem%20for%20Windows).md)
↗ [Cygwin Project](../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/Cygwin%20Project/Cygwin%20Project.md)
↗ [WSL (Windows Subsystems for Linux)](../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/WSL%20(Windows%20Subsystem%20for%20Linux)/WSL%20(Windows%20Subsystems%20for%20Linux).md)

↗ [MinGW & MinGW-w64](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/C-like%20Runtimes/C-like%20Compilers%20Suites/MinGW%20&%20MinGW-w64.md)
↗ [MSYS & MSYS2](../../../🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/MSYS%20&%20MSYS2.md)



## Intro
ReactOS is an operating system.  
Our own main features are:
- ReactOS is able to run Windows software
- ReactOS is able to run Windows drivers
- ReactOS looks-like Windows
- ReactOS is free and open source

> 🔗 https://silaoa.github.io/2019/2019-02-26-Cygwin系列（三）：盘点与Cygwin相似和相反的项目.html

ReactOS并不是一个在UNIX/Linux系统运行Windows应用程序的“间接中间层”，而是一个全新的操作系统，而且它与前文MinGW-w64及下文要介绍的Wine、Longene有着密切联系，在此先介绍。

大约1995~1996年的时候，正值微软的Windows 95系统大获成功，一群开源爱好者、Windows发烧友认为Windows非常优秀，但唯一的缺点就是不开源！于是这群狂热分子讨论开发一版与Windows完全兼容的新系统，项目名叫“FreeWin95”，但难度较大，长时间并未产出什么东西。

项目成员在1998年重新发起了一个项目，就是ReactOS，目标是从零实现一个开源版的Windows NT。为了保证ReactOS完全自由开源不受污染，项目组还专门花了几年时间审查代码库，剔除逆向Windows而来的代码。历经20年ReactOS项目依旧活跃，2018年发布了0.4.10版，高度兼容Windows的硬件驱动、应用程序。

ReactOS的内核独立于UNIX/Linux/Windows的任何API，完全是凭借对Windows“连蒙带猜”的理解从零开始写，并基于这个内核实现Win32子系统，Win32子系统、子系统之上的函数库和服务参考/使用了很多Wine项目的源代码。

ReactOS为在其他系统（如UNIX/Linux）上构建Windows兼容环境提供了宝贵的技术路线和经验，如接下来要说的Wine和Longene。



## Ref

