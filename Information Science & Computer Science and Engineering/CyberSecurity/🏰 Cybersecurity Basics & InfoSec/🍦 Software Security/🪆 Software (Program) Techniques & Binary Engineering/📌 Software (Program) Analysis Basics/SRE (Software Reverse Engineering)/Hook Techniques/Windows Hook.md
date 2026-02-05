# Windows Hook

[TOC]



## Res
### Related Topics
↗ [Windows](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows.md)
↗ [Windows Security](../../../../../../System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/🪟%20Windows%20Security/Windows%20Security.md)


### Other Resources



## Intro



## Ref
[HOOK技术]: https://www.henry-blog.life/henry-blog/ni-xiang-ji-shu/hook-ji-shu
Hook通常分为两种形式，分别是修改函数代码和修改函数地址
1. 修改函数代码
	1. **Inline Hook：** Inline Hook即内联Hook，是指直接修改目标函数的代码，通常是将目标函数的前几个字节修改为跳转指令，使得执行流跳转到我们自己的代码中。此类Hook需要备份被修改的代码，以便在执行完我们的代码后能正确地返回
2. 修改函数地址
	1. **IAT HOOK：** IAT（Import Address Table）是进程加载动态链接库时用到的一个表，存储了DLL函数的地址。IAT Hook就是修改这个表中的函数地址，将其指向我们的代码，从而实现Hook。
	2. **SSDT HOOK：** SSDT（System Service Descriptor Table）是Windows系统中用于保存系统服务例程地址的表。SSDT Hook就是修改这个表中的函数地址，实现Hook。
	3. **IDT HOOK：** IDT（Interrupt Descriptor Table）是用于保存中断处理函数地址的表。IDT Hook就是修改这个表中的函数地址，实现Hook。
	4. **EAT HOOK：** EAT（Export Address Table）是动态链接库对外提供服务的函数地址表，EAT Hook就是修改这个表中的函数地址，实现Hook。
	5. **IRP HOOK：** IRP（I/O Request Packet）是Windows系统中用于描述I/O请求的数据结构。IRP Hook是通过修改驱动程序的IRP处理函数的指针，将其指向我们的代码，从而实现Hook。

[「原创」Windows Hook技术的简单介绍，干就完了！ ｜ 看雪学苑]: https://bbs.kanxue.com/thread-269261.htm
![](../../../../../../../../Assets/Pics/Pasted%20image%2020240831174103.png)

[初探hook技术 | 先知社区]: https://xz.aliyun.com/t/10351?time__1311=Cqjx2Qi%3DGQIxlxGghFoqGKDtd0QqPGCAeD
