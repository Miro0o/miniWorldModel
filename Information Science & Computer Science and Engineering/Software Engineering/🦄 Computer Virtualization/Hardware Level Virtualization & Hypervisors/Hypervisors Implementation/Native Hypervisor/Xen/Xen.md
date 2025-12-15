# Xen

[TOC]



## Res


## Intro
Xen 的 VMM ( Xen Hypervisor ) 位于操作系统和硬件之间，负责为上层运行的操作系统内核提供虚拟化的硬件资源，负责管理和分配这些资源，并确保上层虚拟机（称为域 Domain）之间的相互隔离。Xen采用混合模式，因而设定了一个特权域用以辅助Xen管理其他的域，并提供虚拟的资源服务，该特权域称为Domain0，而其余的域则称为Domain U。

因此Xen就包含了三个部分： 

Xen Hypervisor：直接运行于硬件之上是Xen客户操作系统与硬件资源之间的访问接口。通过将客户操作系统与硬件进行分类，Xen管理系统可以允许客户操作系统安全，独立的运行在相同硬件环境之上。 

Domain 0：运行在Xen管理程序之上，具有直接访问硬件和管理其他客户操作系统的特权的客户操作系统。

DomainU：运行在Xen管理程序之上的普通客户操作系统或业务操作系统，不能直接访问硬件资源（如：内存，硬盘等），但可以独立并行的存在多个。

![](../../../../../../../../Assets/Pics/Pasted%20image%2020231226230630.png)



## Ref
[虚拟化技术Xen与XenServer的区别 | CSDN]: https://blog.csdn.net/Kim_Weir/article/details/80555678

