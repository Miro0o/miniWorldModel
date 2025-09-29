# IO & Network Virtualization

[TOC]



## Res
### Related Topics
↗ [Network Virtualization](../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/Network%20Virtualization.md)
- ↗ [NFV (Network Function Virtualization)](../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/NFV%20(Network%20Function%20Virtualization)/NFV%20(Network%20Function%20Virtualization).md)

↗ [Linux Network Virtualization](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🎠%20Linux%20Network/Linux%20Network%20Virtualization/Linux%20Network%20Virtualization.md)



## Intro
> 📎 https://www.cnblogs.com/woshiweige/p/4518430.html

设备和I/O虚拟化涉及到对虚拟设备和共享的物理设备之间的I/O请求路径的管理。

相对于直接访问(direct pass-through)物理硬件的方法，基于软件的I/O虚拟化及管理具有更丰富的特性和更简化的管理方式。以网络方面为例，虚拟网卡和虚拟交换机可以在虚拟机之间创建虚拟网络，而不需要消耗物理网络的带宽，网卡组合(NIC teaming)使得多个物理网卡变成逻辑上的一块网卡，这对虚拟机来说，物理网卡的故障转移是透明的。这样一来，虚拟机通过VMotion可以无缝地在不同系统之间迁移，并且保留已有的MAC地址。高效I/O虚拟化关键的一点就是要保留虚拟化的这些好处同时对CPU增加的消耗减到最少。

hypervisor虚拟化了物理硬件，为虚拟机呈现一系列标准的虚拟设备，如图9所示。这些虚拟设备有效的模拟了所熟知的硬件并将虚拟机的请求翻译成对系统物理硬件的请求。设备驱动的标准化也帮助了虚拟机的标准化并增加在不同平台间的可移植性，因为所有的虚拟机都配置成运行在虚拟硬件上，跟底下真实的系统物理硬件无关。


---
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

从处理器的角度看，外设是通过一组I/O资源（端口I/O或者是MMIO）来进行访问的，所以设备的相关虚拟化被称为I/O虚拟化，如：
1. 外存设备：硬盘、光盘、U盘
2. 网络设备：网卡。
3. 显示设备：VGA（显卡）
4. 键盘鼠标：PS/2、USB

还有一些如串口设备、COM口等等设备统称IO设备，所谓IO虚拟化就是提供这些设备的支持，其思想就是VMM截获客户操作系统对设备的访问请求，然后通过软件的方式来模拟真实设备的效果。基于设备类型的多样化，I/O虚拟化的方式和特点纷繁复杂，我们挑一些常用IO设备说一说。

但一般IO虚拟化的方式有以下三种，如下图：
![](../../../../../Assets/Pics/Pasted%20image%2020240602124953.png)

**第一种：模拟I/O设备**

完全使用软件来模拟，这是最简单但性能最低的方式，对于IO设备来说模拟和完全虚拟化没有太大意义上的区别。VMM给Guest OS模拟出一个IO设备以及设备驱动，Guest OS要想使用IO设备需要调内核然后通过驱动访问到VMM模拟的IO设备，然后到达VMM模拟设备区域。VMM模拟了这么多设备以及VMM之上运行了那么多主机，所以VMM也提供了一个I/O Stack（多个队列）用来调度这些IO设备请求到真正的物理IO设备之上。经过多个步骤才完成一次请求。

举例：Qemu、VMware Workstation


**第二种：半虚拟化**

半虚拟化比模拟性能要高，其通过系统调用直接使用I/O设备，跟CPU半虚拟化差不多，虚拟化明确知道自己使用的IO设备是虚拟出来的而非模拟。VMM给Guest OS提供了特定的驱动程序，在半虚拟化IO中我们也称为“前端IO驱动”；跟模拟I/O设备工作模式不同的是，Guest OS自己本身的IO设备不需要处理IO请求了，当Guest OS有IO请求时通过自身驱动直接发给VMM进行处理，而在VMM这部分的设备处理我们称之为“后端IO驱动”。

举例：Xen、virtio


**第三种：I/O透传技术**

I/O透传技术（I/O through）比模拟和半虚拟化性能都好，几乎进阶于硬件设备，Guest OS直接使用物理I/O设备，操作起来比较麻烦。其思想就是提供多个物理I/O设备，如硬盘提供多块，网卡提供多个，然后规划好宿主机运行Guest OS的数量，通过协调VMM来达到每个Guest OS对应一个物理设备。另外，要想使用I/O透传技术，不光提供多个I/O设备还需要主板上的I/O桥提供支持透传功能才可以，一般Intel提供的这种技术叫VT-d，是一种基于北桥芯片的硬件辅助虚拟化技术，主要功能是由来提高I/O灵活性、可靠性和性能的。

为什么I/O透传还需要主板支持呢？每个虚拟机直接使用一个网卡不就可以了吗？主要是因为在我们传统的X86服务器架构上，所有的IO设备通常有一个共享或集中式的DMA（直接内存访问），DMA是一种加速IO设备访问的方式。由于是集中式的，所以在VMM上管理多块网卡时其实使用的还是同一个DMA，如果让第一个Guest OS直接使用了第一块网卡，第二个Guest OS直接使用第二块网卡，但使用的DMA还是同一个，而DMA是无法区分哪个Guest OS使用的是哪块网卡，这就变的麻烦了。而像Intel的VT-d就是用来处理这些问题的，以及处理各主机中断。

举例：Intel VT-d


**对应具体设备是如何实现？**

1）硬盘如何虚拟化？
虚拟化技术中，CPU可以按时间切割，内存可以按空间切割，那么磁盘设备呢？也可以按照空间来切割，把硬盘划分成一个一个的区域。但是好像没有这么用的，一般磁盘虚拟化的方式就是通过模拟的技术来实现。

2）网卡如何虚拟化？ 
网卡的虚拟化方式一般使用模拟、半虚拟化、IO透传技术都行，其实现方式根据VMM的不同有所不同，一般的VMM都会提供所有的方式。

3）显卡如何虚拟化？
显卡虚拟化通常使用的方式叫frame buffer（帧缓存机制），通过frame buffer给每个虚拟机一个独立的窗口来实现。当然其实对于显示设备的虚拟化是比较麻烦的，所以通常在虚拟化环境中我们的显示设备性能都不会很好的，当然安装个Windows显示还是没有问题的，但不适用图形处理类的服务。

4）键盘鼠标如何虚拟化？
我们在虚拟机中使用键盘鼠标通常都是通过模拟的方式实现的，通过焦点捕获将模拟的设备跟当前设备建立关联关系，比如你使用Vmware workstation时把鼠标点进哪个虚拟机后，相当于被此虚拟机捕获了，所有的操作都是针对此虚拟机了。

总结
简单描述了CPU虚拟化、内存虚拟化、IO虚拟化的实现方式。其一，我们大概知道了如何选择虚拟化主机性能会最大化，CPU支持硬件辅助虚拟化技术，如Intel的VT；内存支持硬件辅助虚拟化技术，如Virtualization mmu和TLB；IO支持硬件辅助虚拟化技术，如Intel的VT-d。当然光有硬件的支持还不是太够，在使用虚拟化时要能够充分利用到这些硬件才行。



## Ref
[虚拟化技术原理（CPU、内存、IO） | cnblog]: https://www.cnblogs.com/bj-mr-li/p/11407927.html

[理解全虚拟、半虚拟以及硬件辅助的虚拟化 | cnblog]: https://www.cnblogs.com/woshiweige/p/4518430.html

