# Microkernel (μ-kernel)

[TOC]



## Res
### Related Topics
↗ [Design Pattern /Serverless](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20System%20Architecture%20Design%20Pattern/Serverless/Serverless.md)


### Learning Resources
↗ [seL4](../../../../../Software%20Engineering/👇%20System%20Software%20Engineering/System%20Level%20Projects/seL4/seL4.md)



## Intro
> 微内核，提出时间比单内核要晚，在学术界而言无疑是初生的朝阳。微内核基于模块化的设计，将内核功能简化到最少，仅提供少量基础功能，更多的功能运行在用户态，不同服务运行在不同的地址空间，常用的服务（比如IO、内存管理）通过IPC调用来组合提供。无疑从这个层面上讲微内核的扩展性更强，增加新功能无需重新编译内核。并且由于内核服务间的隔离，使得OS更安全，一个服务挂掉，不会影响其他服务。而单内核中一个服务的异常可能让整个内核挂掉。但问题也显而易见，那就是大量的IPC，性能必然受影响。
> 
> 谭宁邦教授（Tanenbaum）在上世纪开源的MINIX操作系统就是微内核架构设计，这个内核被Linus拿去学习过操作系统，不过之后他开发的Linux操作系统使用了宏内核架构。
> 
> 微内核的思想其实和后来大型分布式系统中SOA、微服务的概念不谋而合。然而历史却并不相似，站在二十一世纪的第三个十年回望，Linux成功空前。时至今日，不管是MINIX还是其他，都鲜有扛起微内核大旗的OS被广泛使用（华为推出鸿蒙时高调宣布采用单微内核架构，能走多远我们拭目以待吧）。



## Ref
