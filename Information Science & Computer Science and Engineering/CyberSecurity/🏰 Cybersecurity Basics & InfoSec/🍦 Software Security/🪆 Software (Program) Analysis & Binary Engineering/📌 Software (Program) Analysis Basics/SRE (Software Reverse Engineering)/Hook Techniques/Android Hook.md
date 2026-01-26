# Android Hook

[TOC]



## Res
### Related Topics
↗ [Android & AOSP](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Android%20&%20AOSP/Android%20&%20AOSP.md)
↗ [Android Security](../../../../../../System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/🤖%20Android%20Security/Android%20Security.md)


### Other Resources
Xposed Framework

https://github.com/topjohnwu/Magisk
Magisk is a suite of open source software for customizing Android, supporting devices higher than Android 6.0.  
Some highlight features:
- **MagiskSU**: Provide root access for applications
- **Magisk Modules**: Modify read-only partitions by installing modules
- **MagiskBoot**: The most complete tool for unpacking and repacking Android boot images
- **Zygisk**: Run code in every Android applications' processes

https://www.luckypatchers.com/download/
Lucky Patcher is a free Android app that can mod many apps and Games, Block ads, remove unwanted system apps, backup apps before and after modifying, Move apps to SD card, remove license verification from paid apps and games, etc.



## Intro



## Ref
[Android中常见的HOOK框架收集 | CSDN]: http://t.csdnimg.cn/4ieMP
1. Xposed：Java层的HOOK框架，由于要修改Zgote进程，需要Root;
	1. https://github.com/rovo89/Xposed
2. CydiaSubstrator:本地层的HOOK框架，本质上是一个inline Hook
3. dexposed框架：随着阿里的热修复的框架：原理上跟Xposed有很多雷同，dexposed框架（缺点：仅支持Dalvik不支持ART）；
4. AndFix框架：找到方法在ART中的结构，然后将结构体的内容全部替换为Hook的内容；（缺点：原方法的信息全部被替换，所以无法再执行原方法 ）；
5. Sophix 框架：后来阿里升级了一下，先对原来的方法作为备份，然后替换。（缺点：）
6. AndroidMethodHook框架
	1. https://github.com/panhongwei/AndroidMethodHook
7. Legend框架：在AndFix框架的基础上，在方法进行替换前进行了方法的备份；
8. YAHFA框架
	1. http://rk700.github.io/2017/06/30/hook-on-android-n/
9. EPIC框架：既然替换入口的方式无法达到Hook所有类型方法的目的，那么如果不替换入口，而是直接修改入口里面指向的代码呢？（这种方式有个高大上的学名：callee side dynamic rewriting) 这个框架是VirtualXposed和太极实现的一个基础。
	1. http://weishu.me/2017/11/23/dexposed-on-art/

随着后来VirtrualApp多开的出现,Java层的HOOK出现了VirtualXposed和太极：
均是免Root的。

10. VirtualXposed:Virtual APP与Xposed的一个结合。
11. 太极：太极Xposed ☯️ 是一个无需Root、不用解锁Bootloader，也不需要刷机就能使用 Xposed 模块的一个APP。 
	1. epic：https://github.com/tiann/epic
	2. 太极阴：类似于VirtualXposed，会进行二次打包。
	3. 太极阳：跟magsik结合对系统应用进行HOOK，并且结合magsik更加的难以检测。
	4. [太极（类 Xposed 框架）停止维护](https://www.oschina.net/news/291534/taichi-android-xposed-eol)
12. 虚拟大师：一个运行在手机上的虚拟机，有点像windows下的VMware;缺点就是耗资源比较卡。
13. SandHook：坑大之作，https://bbs.pediy.com/thread-249163.htm
14. riru: 替换一个会被 zygote 进程加载的共享库libmemtrack
	1. https://github.com/RikkaApps/Riru 
15. EdXposed：使用的是riru+改进的yahfa
	1. https://github.com/ElderDrivers/EdXposed?tab=readme-ov-file
16. Magisk:另辟蹊径，通过挂载一个与系统文件相隔离的文件系统来加载自定义内容，为系统分区打开了一个通往平行世界的入口，所有改动在那个世界（Magisk 分区）里发生，在必要的时候却又可以被认为是（从系统分区的角度而言）没有发生过

隐藏Root的实现： https://bbs.pediy.com/thread-247408.htm

17. LSPosed Framework
	1. https://github.com/LSPosed/LSPosed