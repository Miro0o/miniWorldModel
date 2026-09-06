# Microkernel (μ-kernel)

[TOC]



## Res
### Related Topics
↗ [Serverless](../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/Cloud%20System%20Software%20Architectures/Serverless/Serverless.md)

↗ [L4 Microkernel Family](../../../../../Software%20Engineering/👇%20System%20Software%20Engineering/System%20Level%20Projects/L4%20Microkernel%20Family/L4%20Microkernel%20Family.md)
↗ [seL4](../../../../../Software%20Engineering/👇%20System%20Software%20Engineering/System%20Level%20Projects/L4%20Microkernel%20Family/seL4/seL4.md)

↗ [MINIX (mini-Unix)](../../../../../Software%20Engineering/👇%20System%20Software%20Engineering/🧑🏽‍🏫%20Mini%20OS%20Kernels/MINIX%20(mini-Unix)/MINIX%20(mini-Unix).md)


### Learning Resources


### Other Resources



## Intro
> 微内核，提出时间比单内核要晚，在学术界而言无疑是初生的朝阳。微内核基于模块化的设计，将内核功能简化到最少，仅提供少量基础功能，更多的功能运行在用户态，不同服务运行在不同的地址空间，常用的服务（比如IO、内存管理）通过IPC调用来组合提供。无疑从这个层面上讲微内核的扩展性更强，增加新功能无需重新编译内核。并且由于内核服务间的隔离，使得OS更安全，一个服务挂掉，不会影响其他服务。而单内核中一个服务的异常可能让整个内核挂掉。但问题也显而易见，那就是大量的IPC，性能必然受影响。
> 
> 谭宁邦教授（Tanenbaum）在上世纪开源的MINIX操作系统就是微内核架构设计，这个内核被Linus拿去学习过操作系统，不过之后他开发的Linux操作系统使用了宏内核架构。
> 
> 微内核的思想其实和后来大型分布式系统中SOA、微服务的概念不谋而合。然而历史却并不相似，站在二十一世纪的第三个十年回望，Linux成功空前。时至今日，不管是MINIX还是其他，都鲜有扛起微内核大旗的OS被广泛使用（华为推出鸿蒙时高调宣布采用单微内核架构，能走多远我们拭目以待吧）。

> 🔗 https://en.wikipedia.org/wiki/Microkernel

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), a **microkernel** (often abbreviated as **μ-kernel**) is the near-minimum amount of [software](https://en.wikipedia.org/wiki/Software "Software") that can provide the mechanisms needed to implement an [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") (OS). These mechanisms include low-level [address space](https://en.wikipedia.org/wiki/Address_space "Address space") management, [thread](https://en.wikipedia.org/wiki/Thread_\(computing\) "Thread (computing)") management, and [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication "Inter-process communication") (IPC).

If the hardware provides multiple [rings](https://en.wikipedia.org/wiki/Protection_ring "Protection ring") or [CPU modes](https://en.wikipedia.org/wiki/CPU_modes "CPU modes"), the microkernel may be the only software executing at the most privileged level, which is generally referred to as [supervisor or kernel mode](https://en.wikipedia.org/wiki/Kernel_mode "Kernel mode"). Traditional operating system functions, such as [device drivers](https://en.wikipedia.org/wiki/Device_driver "Device driver"), [protocol stacks](https://en.wikipedia.org/wiki/Protocol_stack "Protocol stack") and [file systems](https://en.wikipedia.org/wiki/File_system "File system"), are typically removed from the microkernel and are instead run in [user space](https://en.wikipedia.org/wiki/User_space "User space").[[1]](https://en.wikipedia.org/wiki/Microkernel#cite_note-1)

Microkernels often have less source code than [monolithic kernels](https://en.wikipedia.org/wiki/Monolithic_kernel "Monolithic kernel"). The [MINIX 3](https://en.wikipedia.org/wiki/MINIX_3 "MINIX 3") microkernel, for example, has only approximately 12,000 lines of code

![](../../../../../../Assets/Pics/Pasted%20image%2020260905162046.png)
<small>Structure of monolithic and microkernel-based operating systems, respectively</small>



## Ref
