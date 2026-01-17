# UEFI BIOS

[TOC]



## Res
### Related Topics
↗ [EFI & UEFI (Unified Extensible Firmware Interface)](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Firmware%20System%20Interfaces/EFI%20&%20UEFI%20(Unified%20Extensible%20Firmware%20Interface)/EFI%20&%20UEFI%20(Unified%20Extensible%20Firmware%20Interface).md)


### Learning Resources
🎬【「UEFI」第2话 UEFI启动的七个阶段以及BootLoader】 https://www.bilibili.com/video/BV1jS4y1X7C9/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
![](../../../../../../../Assets/Pics/Screenshot%202024-04-04%20at%206.19.50%20PM.png)


### UEFI Booting Process
> 🔗 https://zhuanlan.zhihu.com/p/54108702

![](../../../../../../../Assets/Pics/Screenshot%202024-04-04%20at%206.22.39%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202024-04-04%20at%206.23.38%20PM.png)

一般地，预加载环境和驱动执行环境是存储在UEFI（UEFI BIOS）芯片中的，当打开电源开关时，电脑的主要部件都开始有了供电，与BIOS不同的是，UEFI预加载环境(PXE)首先开始执行，负责CPU和内存（是全部容量）的初始化工作，这里如出现重要问题，电脑即使有报警喇叭也不会响，因为UEFI没有去驱动8255发声，不过预加载环境只检查CPU和内存，如果这两个主要硬件出问题，屏幕没显示可以立即确定，另外一些主板会有提供LED提示，可根据CPU或内存亮灯大致判断故障。

CPU和内存初始化成功后，驱动执行环境（DXE）载入，当DXE载入后，UEFI就具有了枚举并加载UEFI驱动程序的能力，在此阶段，UEFI会枚举搜索各个硬件的UEFI驱动并相继加载，完成硬件初始化工作，这相比BIOS的读中断加载速度会快的多，同样如加载显卡的UEFI驱动成功，电脑也会出现启动画面，硬件驱动全部加载完毕后，最后同BIOS一样，也得去启动操作系统。

在启动操作系统的阶段，同样是根据启动记录的启动顺序，转到相应设备（仅限GPT设备，如果启动传统MBR设备，则需要打开CSM支持）的引导记录，引导操作系统并进入，这里需要注意的是，UEFI在检测到无任何操作系统启动设备时，会直接进入UEFI设置页面，而不是像BIOS那样黑屏显示相关信息。


### UEFI Booting vs BIOS Booting
#UEFI #BIOS #booting 

> 综上对BIOS和UEFI启动计算机过程的叙述，可以概括为：BIOS先要对CPU初始化，然后跳转到BIOS启动处进行POST自检，此过程如有严重错误，则电脑会用不同的报警声音提醒，接下来采用读中断的方式加载各种硬件，完成硬件初始化后进入操作系统启动过程；而UEFI则是运行预加载环境先直接初始化CPU和内存，CPU和内存若有问题则直接黑屏，其后启动PXE采用枚举方式搜索各种硬件并加载驱动，完成硬件初始化，之后同样进入操作系统启动过程。



## Ref
[👍 电脑基础知识普及：BIOS、EFI与UEFI详解！ - 知乎用户fB10GU的文章 - 知乎]: https://zhuanlan.zhihu.com/p/54108702

[🎬「UEFI」第2话 UEFI启动的七个阶段以及BootLoader]: https://www.bilibili.com/video/BV1jS4y1X7C9/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

[🎬计算机在交给操作系统之前所做的事情，UEFI 和 BIOS  的故事]: https://www.bilibili.com/video/BV1kR4y177GX/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
