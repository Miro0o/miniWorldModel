# Hardware-assisted Virtualization

[TOC]



## Res
### Related Topics
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [CPU (Central Processing Unit)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Hardware-assisted_virtualization
> 🔗 https://en.wikipedia.org/wiki/X86_virtualization#Hardware-assisted_virtualization

In computing, hardware-assisted virtualization is a platform virtualization approach that enables efficient full virtualization using help from hardware capabilities, primarily from the host processors. A full virtualization is used to emulate a complete hardware environment, or virtual machine, in which an unmodified guest operating system (using the same instruction set as the host machine) effectively executes in complete isolation. 

Hardware-assisted virtualization was added to x86 processors (Intel VT-x, AMD-V or VIA VT) in 2005, 2006 and 2010 (respectively).

Hardware-assisted virtualization is also known as **accelerated virtualization**; Xen calls it **hardware virtual machine (HVM)**, and Virtual Iron calls it **native virtualization**.

---
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

硬件辅助虚拟化（HVM），简而言之，就是物理平台本身提供了对特殊指令的截获和重定向的硬件支持，甚至，新的硬件会提供额外的资源来帮助软件实现对关键硬件资源的虚拟化，从而提升性能。可以理解为CPU额外增加了一个ring -1环专门提供给虚拟机运行的。以X86平台的虚拟化为例，支持虚拟技术的X86 CPU带有特别优化过的指令集来控制虚拟过程，通过这些指令集，VMM会很容易将客户机置于一种受限制的模式下运行，一旦客户机试图访问物理资源，硬件会暂停客户机的运行，将控制权交回给VMM处理。VMM还可以利用硬件的虚拟化增强机制，将客户机在受限模式下对一些特定资源的访问，完全由硬件重定向到VMM指定的虚拟资源，整个过程不需要暂停客户机的运行和VMM软件的参与。

由于虚拟化硬件可提供全新的架构，支持操作系统直接在上面运行，无需进行二进制转换，减少了相关的性能开销，极大简化了VMM 设计，进而使VMM能够按通用标准进行编写， 性能更加强大。

需要说明的是， 硬件虚拟化技术是一套解决方案。完整的情况需要CPU、主板芯片组、BIOS和软件的支持，例如VMM软件或者某些操作系统本身。即使只是CPU支持虚拟化技术，在配合VMM软件的情况下，也会比完全不支持虚拟化技术的系统有更好的性能。鉴于虚拟化的巨大需求和硬件虚拟化产品的广阔前景，Intel一直都在努力完善和加强自己的硬件虚拟化产品线。自2005年末，Intel便开始在其处理器产品线中推广应用Intel Virtualization Technology（IntelVT）虚拟化技术，发布了具有IntelVT虚拟化技术的一系列处理器产品，包括桌面的Pentium和Core系列，还有服务器的Xeon至强和Itanium安腾。Intel一直保持在每一代新的处理器架构中优化硬件虚拟化的性能和增加新的虚拟化技术。现在市面上，从桌面的Core i3/5/7，到服务器端的E3/5/7/9，几乎全部都支持Intel VT技术。可以说， 在不远的将来， Intel VT很可能会成为所有Intel处理器的标准配置。当然AMD的CPU也都支持虚拟化技术。


## Ref
