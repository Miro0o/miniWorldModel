# Memory Virtualization

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [MMU (Memory Management Unit)](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/MMU%20(Memory%20Management%20Unit).md)



## Intro
> 📎 https://www.cnblogs.com/woshiweige/p/4518430.html

内存虚拟化涉及到对系统物理内存的共享和动态地为虚拟机分配内存。内存虚拟化和当代操作系统对虚拟内存的支持类似。应用程序看到的连续地址空间和底下真正的物理内存不一定是一一对应的。操作系统保存了虚拟页号到物理页号的映射。当前所有的x86 CPU包含了一个内存管理单元(MMU)和一个旁路缓冲(TBL)以优化虚拟内存的性能。

为了在一个系统上运行多个虚拟机，还需要另外一层的内存虚拟化。也就是说，MMU需要被虚拟化来支持虚拟机系统。虚拟机系统还是控制着虚拟地址到虚拟机内存物理地址的映射，但虚拟机系统不能直接访问真实的机器内存。VMM负责将虚拟机物理内存映射到真实的机器内存，并使用影子页表来加速映射过程。如图8种标红线之处所示，VMM使用硬件中的TLB来直接映射虚拟内存到机器内存以避免每次访问时需要两级转换。当虚拟机改变了虚拟内存到物理内存的映射时，VMM更新影子页表使得后续可以直接查找。对于所有的虚拟化方案来说，MMU虚拟化都会带来一定的代价，这也是第二代硬件辅助虚拟化方案会改进的地方。
![](../../../../../Assets/Pics/Pasted%20image%2020240602124115.png)


---
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

首先我们知道内存本身就类似于虚拟化技术，其通过虚拟地址对外提供服务，所有的进程都以为自己可以使用所有的物理内存。如下图提供了在非虚拟化中和虚拟化中寻址方式。

![](../../../../../Assets/Pics/Pasted%20image%2020240602124823.png)


### No Memory Virtualization
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

在非虚拟化中，系统把物理地址通过虚拟地址的方式（一个个页框）提供出去给进程使用，每个进程都以为自己可以使用所有的物理内存。本来在CPU上有个称为MMU（memory management unit）的东西，任何时候当某个进行想要访问数据自己的线性地址中的某段数据的时候，就是虚拟地址。这个进程就会传给CPU一个地址，并需要读取数据，但是CPU知道这个地址是无法真正访问到数据的，于是CPU要通过MMU将这段地址转换为对应物理地址的访问，从而这段数据就能访问到了。一般进程所得到的内存地址空间是一个连续的虚拟地址空间，而在真正的物理内存存储时一般都不会是连续的地址空间。

↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)


### Memory Virtualization
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

为了实现内存虚拟化，让客户机使用一个隔离的、从零开始且具有连续的内存空间，像KVM虚拟机引入一层新的地址空间，即客户机物理地址空间 (Guest Physical Address, GPA)，这个地址空间并不是真正的物理地址空间，它只是宿主机虚拟地址空间在客户机地址空间的一个映射。对客户机来说，客户机物理地址空间都是从零开始的连续地址空间，但对于宿主机来说，客户机的物理地址空间并不一定是连续的，客户机物理地址空间有可能映射在若干个不连续的宿主机地址区间。

从上图我们看出，在虚拟化环境中，由于虚拟机物理地址不能直接用于宿主机物理MMU进行寻址，所以需要把虚拟机物理地址转换成宿主机虚拟地址 （Host Virtual Address, HVA）。运行在硬件之上的Hypervisor首先会对物理内存进行虚拟地址 （Host Virtual Address, HVA）转换，然后还需要对转换后的虚拟地址内存空间进行再次虚拟，然后输出给上层虚拟机使用，而在虚拟机中同样又要进行GVA转换到GPA操作。显然通过这种映射方式，虚拟机的每次内存访问都需要Hypervisor介入，并由软件进行多次地址转换，其效率是非常低的。

因此，为了提高GVA到HPA转换的效率，目前有两种实现方式来进行客户机虚拟地址到宿主机物理地址之间的直接转换。其一是基于纯软件的实现方式，也即通过影子页表（Shadow Page Table）来实现客户虚拟地址到宿主机物理地址之间的直接转换（KVM虚拟机是支持的）。其二是基于硬件辅助MMU对虚拟化的支持，来实现两者之间的转换。

其中Shadow Page Table（影子页表），其实现非常复杂，因为每一个虚拟机都需要有一个Shadow Page Table。并且这种情况会出现一种非常恶劣的结果，那就是TLB（Translation Lookaside Buffer，传输后备缓冲器）很难命中，尤其是由多个虚拟主机时，因为TLB中缓存的是GVA到GPA的转换关系，所以每一次虚拟主机切换都需要清空TLB，不然主机之间就会发生数据读取错误（因为各主机间都是GVA到GPA）。传输后备缓冲器是一个内存管理单元用于改进虚拟地址到物理地址转换后结果的缓存，而这种问题也会导致虚拟机性能低下。

此外，Intel的EPT(Extent Page Table) 技术和AMD的NPT(Nest Page Table) 技术都对内存虚拟化提供了硬件支持。这两种技术原理类似，都是在硬件层面上实现客户机虚拟地址到宿主机物理地址之间的转换。称为Virtualation MMU。当有了这种MMU虚拟化技术后，对于虚拟机进程来说还是同样把GVA通过内部MMU转换为GPA，并不需要改变什么，保留了完全虚拟化的好处。但是同时会自动把GVA通过Virtualation MMU技术转换为真正的物理地址（HPA）。很明显减少了由GPA到HPA的过程，提升虚拟机性能。

并且CPU厂商还提供了TLB硬件虚拟化技术，以前的TLB只是标记GVA到GPA的对应关系，就这两个字段，现在被扩充为了三个字段，增加了一个主机字段，并且由GVA到GPA以及对应变成了GVA到HPA的对应关系。明确说明这是哪个虚拟机它的GVA到HPA的映射结果。

**总结**

由此看出内存虚拟化，如果没有硬件做支撑，那么只能使用Shadow Page Table（影子页表），也就意味着TLB需要不断地进行清空。而有了内存虚拟机技术后，虚拟机的性能在某种程度上也得到了大大地提升。

## Ref
[虚拟化技术原理（CPU、内存、IO） | cnblog]: https://www.cnblogs.com/bj-mr-li/p/11407927.html

[理解全虚拟、半虚拟以及硬件辅助的虚拟化 | cnblog]: https://www.cnblogs.com/woshiweige/p/4518430.html
