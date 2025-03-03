# Wine Project (Linux Subsystem for Windows)

[TOC]



## Res
🏠 https://www.winehq.org
- [APPDB](https://appdb.winehq.org)
- [Wine Wiki](https://wiki.winehq.org/Main_Page)
- [Wine Forums](https://forum.winehq.org)

### Related Topics
↗ [Vulkan Project](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Vulkan%20Project/Vulkan%20Project.md)
↗ [Graphics Rendering Frameworks (2D & 3D)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Graphics%20Rendering%20Frameworks%20(2D%20&%203D).md)

↗ [Rosetta](../Rosetta.md)



## Intro
**Wine** (originally an acronym for "**Wine Is Not an Emulator**") is a ==compatibility layer capable of running Windows applications on several POSIX-compliant operating systems==, such as Linux, macOS, & BSD. Instead of simulating internal Windows logic like a virtual machine or emulator, Wine translates Windows API calls into POSIX calls **on-the-fly**, eliminating the performance and memory penalties of other methods and allowing you to cleanly integrate Windows applications into your desktop.

> 🔗 https://silaoa.github.io/2019/2019-02-26-Cygwin系列（三）：盘点与Cygwin相似和相反的项目.html

Wine是“Wine Is Not an Emulator”的递归简写，字面意思为Wine不是模拟器，它的工作原理是在运行时通过一个**Wine Server进程**将Windows系统调用 **“翻译”**成为POSIX兼容的等价调用，比如Windows的PushButton（按钮）翻译为X11协议的对应控件。在这一点上，Wine和WSL很类似，只是作用方向相反。

Wine在Linux/UNIX系统的用户空间重建了Windows系统的目录结构，重新实现Windows系统函数库、系统服务、IE、注册表等重要组件。此外还提供了`Winelib`辅助Windows程序移植，其作用类似于`Cygwin DLL`，只是作用方向相反；源代码从链接Windows DLL切换到链接`Winelib`重新编译，生成（Linux系统上）ELF格式的二进制程序，获得更高的效率。可以说，**Wine是一个开源、自由的Windows兼容层，从二进制到源代码都兼容，甚至Windows上的bug特征都保持一致。**

由于Windows闭源，大量API、文件格式、协议等不对外提供说明文档，外界无从得知Windows内部的逻辑、确切的API列表及功能，而且由于版权，Wine项目必须另外自行实现一套Windows系统的DLL库，同时保持兼容性，相当于只凭借模糊不清的照片重建一栋功能、外观一致的房子。这项工作难度很大，Wine直到15年后的2008年才发布1.0稳定版，项目依旧活跃，2018年发布最新的4.0稳定版。尽管已经高度兼容，但由于Windows体系架构、设计概念与Linux/UNIX迥异，Wine不能完全模拟Windows环境，Windows原生设备驱动程序就不能运行。

总结起来，要让Windows程序在Linux/UNIX系统上运行，通过Wine有2种办法：  
①让Wine启动二进制程序文件，但如果程序调用了未被微软公开的Windows API，Wine的系统函数库无法提供，运行失败；  
②有程序源代码，修改配置文件让链接库指向[Winelib](https://wiki.winehq.org/Winelib_User%27s_Guide)，重新编译生成（Linux系统上）ELF格式的二进制程序，同样，[Winelib](https://wiki.winehq.org/Winelib_User%27s_Guide)不可能覆盖100%的Windows API，可能编译失败；通过源代码编译，程序可以同时使用POSIX API和Windows API，这和Cygwin上一样。

Wine官网上有个[AppDB](https://appdb.winehq.org/)，列出了可以在Wine上运行较为良好的Windows程序。

Wine项目受到CodeWeavers公司赞助，后者售卖基于Wine的商业化产品——CrossOver，国内制作的Deepin Linux发行版，经商业合作内置CrossOver。



## Third Party Applications
> 🔗 https://wiki.winehq.org/Third_Party_Applications

### 👉 Crossover
↗ [⭐️ Crossover](Third-party%20Wine%20App/⭐️%20Crossover.md)


### 👉 Wineskin Winery
Wineskin Winery, created by a programmer who used the screen name _doh123_ and now maintained by a programmer with the screen name _Gcenx,_ is a work in progress and not well-documented.


### 👉 DOSBox
↗ [DOSBox](Third-party%20Wine%20App/DOSBox.md)


### 👉 Porting Kit


### 👉 PlayOnMac



## Ref
[Win project | Wikipedia]: https://zh.wikipedia.org/wiki/Wine

[Get the Best of Both Worlds: How to Run Windows Apps on Your Mac]: https://www.pcma
g.com/how-to/how-to-run-windows-apps-on-your-mac

[CodeWeavers's CrossOver instead of Wine? | Reddit]: https://www.reddit.com/r/linux_gaming/comments/mcsxq3/comment/gs75jyw/?utm_source=share&utm_medium=web2x&context=3

> Crossover is based on Wine and essentially powers it, but it isn't the same, as it adds additional features on top of it specifically to deal with installation and compatibility of Windows applications. It is kind of like PlayOnLinux but optimized for applications. Their work is to improve compatibility with productivity applications, not games. They don't technically support any games to my knowledge. For gaming you would definitely be better off with Lutris and/or Proton. Also note that Codeweavers contributes quite a bit to the Wine project as well, so a lot of what they do it in Wine as well.
