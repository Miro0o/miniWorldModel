# ONC RPC (Sun RPC)

[TOC]



## Res
[Understanding Sun RPC Services](https://www.juniper.net/documentation/en_US/junos/information-products/topic-collections/maintenance-release-feature-guides/12.1X46/index.html?topic-42314.html)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Sun_RPC




## Ref
[SUN RPC 简介]: https://www.cnblogs.com/yunnotes/archive/2013/04/19/3032535.html

在传统的编程概念中，进程是由程序员在本地编译完成，并只能局限在本地运行的一段代码，即其主程序和过程之间的运行关系是本地调用关系，这种结构在网络日益发展的今天已无法适应实际需求。众所周知，传统进程程调用模式无法充分利用网络上其他主机的资源（如CPU、Memory等），也无法提高代码在实体间的共享程度，使得主机资源大量浪费。RPC很好地解决了传统过程所存在的一系列弊端。通过RPC可以充分利用非共享内存的多处理器环境（例如通过局域网连接得多台工作站）,这样可以简便地将应用分布在多台工作站上，应用程序就像运行在一个多处理器的计算机上一样，因此可以方便的实现过程代码共享，提高系统资源的利用率，也可以将以大量数值处理的操作放在处理能力较强的系统上运行，从而减轻前端机的负担。
