# CPU Virtualization

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [x86 Architecture Family (80x86, 8086 family)](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md)
↗ [x86 Virtualization](📌%20Hardware-assisted%20Virtualization/CPU-assisted%20Virtualization/x86%20Virtualization/x86%20Virtualization.md)



## Intro
### Challenges for CPU Virtualization
> 📎 https://www.cnblogs.com/woshiweige/p/4518430.html

x86操作系统被设计成直接运行在硬件上，自然这些系统会认为它们拥有硬件的全部控制权。x86架构为操作系统和应用程序提供了四个不同级别的权限来管理对硬件的访问，分别为ring 0，1，2和3。用户程序一般运行在ring 3，操作系统需要直接访问内存和硬件，因此需要在ring 0执行它的特权指令。x86架构的虚拟化需要在操作系统(运行于最高权限的ring 0)之下放置一个提供共享资源的虚拟化层来创建和管理虚拟机。比较糟的是，有些敏感指令在非ring 0下执行时具有不同的语义，因此不能很好地将其虚拟化。在运行时陷入并翻译这些敏感指令和特权指令是一个艰难的挑战，这使得x86架构的虚拟化起初看起来是不可完成的任务。

VMware在1998年就攻克了这个挑战，开发了二进制翻译技术使得VMM运行在ring 0以达到隔离和性能的要求，而将操作系统转移到比应用程序所在ring 3权限高和比虚拟机监控器所在ring 0权限低的用户级。基于VMware 20000多客户的安装使用情况以及所形成的广大合作伙伴生态系统，VMware使用二进制翻译的全虚拟化方案已经成为事实上的标准，总的来说业界还没有一个开放的标准来定义和管理虚拟化。每个开发虚拟化解决方案的公司可以用不同的方式应对这个技术上的挑战，提供的解决方案良莠不齐。

正如以下阐述的，目前有三种技术来实现x86架构CPU敏感指令和特权指令的虚拟化，分别为：
. 使用二进制翻译的全虚拟化；
. 操作系统辅助或半虚拟化；
. 硬件辅助的虚拟化(第一代)；


---
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

首先我们知道X86处理器有4个特权级别，Ring 0~Ring 3，只有运行在Ring 0 ~ 2级时，处理器才可以访问特权资源或执行特权指令，运行在Ring 0级时，处理器可以运行所有的特权指令。X86平台上的操作系统一般只使用Ring 0和Ring 3这两个级别，其中，操作系统内核运行在Ring 0级，也被称为内核空间指令，用户进程运行在Ring 3级，也被称为用户空间指令。

**特权级压缩(ring compression)**
为了满足上面所述的需求，VMM自身必须运行在Ring 0级，同时为了避免Guest OS控制系统资源，Guest OS不得不降低自身的运行级别而运行于Ring 3（Ring 1、2 不使用）。

此外，VMM使用分页或段限制的方式保护物理内存的访问，但是64位模式下段限制不起作用，而分页又不区分Ring 0,1,2。为了统一和简化VMM的设计，Guest OS只能和用户进程一样运行在Ring 3。VMM必须监视Guest OS对GDT、IDT等特权资源的设置，防止Guest OS运行在Ring 0级，同时又要保护降级后的Guest OS不受Guest进程的主动攻击或无意破坏。

**特权级别名（Ring Alias）**
设计上的原因，操作系统假设自己运行于ring 0，然而虚拟化环境中的Guest OS实际上运行于Ring 1或Ring 3，由此，VMM必须保证各Guest OS不能得知其正运行于虚拟机中这一事实，以免其打破前面的“等价执行”标准。例如，x86处理器的特权级别存放在CS代码段寄存器内，Guest OS却可以使用非特权PUSH指令将CS寄存器压栈，然后POP出来检查该值；又如，Guest OS在低特权级别时读取特权寄存器GDT、LDT、IDT和TR时并不发生异常。这些行为都不同于Guest OS的正常期望。

**地址空间压缩（Address Space Compression）**
地址空间压缩是指VMM必须在Guest OS的地址空间中保留一段供自己使用，这是x86虚拟化技术面临的另一个挑战。VMM可以完全运行于自有的地址空间，也可以部分地运行于Guest OS的地址空间。前一种方式，需在VMM模式与Guest OS模式之间切换，这会带来较大的开销；此外，尽管运行于自己的地址空间，VMM仍需要在Guest OS的地址空间保留出一部分来保存控制结构，如IDT和GDT。无论是哪一种方式，VMM必须保证自己用到地址空间不会受到Guest OS的访问或修改。

**非特权敏感指令**
x86使用的敏感指令并不完全隶属于特权指令集，VMM将无法正确捕获此类指令并作出处理。例如，非特权指令SMSW在寄存器中存储的机器状态就能够被Guest OS所读取，这违反了经典虚拟化理论的要求。

**静默特权失败(Silent Privilege Failures)**
x86的某些特权指令在失败时并不返回错误，因此，其错误将无法被VMM捕获，这将导致其违反经典虚拟化信条中的“等价执行”法则。

**中断虚拟化(Interrupt Virtualization)**
虚拟化环境中，屏蔽中断及非屏蔽中断的管理都应该由VMM进行；然而，GuestOS对特权资源的每次访问都会触发处理器异常，这必然会频繁屏蔽或启用中断，如果这些请求均由VMM处理，势必会极大影响整体系统性能。


#### ISA/CPU Privilege Design
↗ [Privilege Level & Protection Ring](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Privilege%20Level%20&%20Protection%20Ring.md)

![](../../../../../../../Assets/Pics/Pasted%20image%2020240217173550.png)
<small>Protection ring on an x86 CPU. Usually ring 0 is kernel space, ring 3 is user space.</small>


### 1️⃣ Full Virtualization
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

全虚拟化为客户机提供了完整的虚拟X86平台， 包括处理器、 内存和外设， 支持运行任何理论上可在真实物理平台上运行的操作系统， 为虚拟机的配置提供了最大程度的灵活性。不需要对客户机操作系统做任何修改即可正常运行任何非虚拟化环境中已存在基于X86平台的操作系统和软件，这也是全虚拟化无可比拟的优势。

在全虚拟化情况下，虚拟机并不知道自己运行在虚拟化环境下，是无感知的，安装使用时跟在物理机上没有什么区别。但是这种完全虚拟化中间需要软件做支撑的，需要软件去模拟提供所有的硬件资源，至少是这个CPU的特权指令需要用软件去模拟的，因为你要让各Guest并不知道自己运行在虚拟环境中，那么你就必须要提供一个带有特权指令的CPU。

在虚拟化环境中，通常虚拟跟模拟是两个概念，VMWare的动态二进制翻译技术（BT）是虚拟的而QEMU软件技术是模拟的。最大的区别在于，模拟通过软件实现时需要模拟CPU ring 0-3，也就是需要转换CPU ring 0-3所有的指令，而虚拟只需要转换CPU ring 0特权指令即可。

当然不管上面说到的BT技术还是QEMU还是硬件辅助虚拟化技术都属于完全虚拟化技术，都是需要指令转换的，都是需要复杂的步骤才能完成的，如果我们能够精简这其中的步骤那么虚拟机的性能一定会有提升的。那么怎么精简呢？这就是下面说的半虚拟化技术。另外，在全虚拟化模式下：

CPU如果不支持硬件虚拟化技术：那么所有指令都是通过VMM虚拟的，通过VMM内的BT动态翻译技术把虚拟机要运行的特权指令转换为物理指令集，然后到CPU上运行。

CPU如果支持硬件虚拟化技术：VMM运行ring -1，而GuestOS运行在ring 0。

#### Binary Translation (BT)
![](../../../../../Assets/Pics/Pasted%20image%2020230308111602.png)
<small>Full Vertualization under X86 Architcture</small>

> 比较著名的全虚拟化 VMM 有 Microsoft Virtual PC、VMware Workstation、Sun Virtual Box、Parallels Desktop for Mac 和 QEMU。QEMU 在今年（2019）对外宣称可以模拟所有设备。天啊，这简直是个奇迹般的伟大软件。
#### Hardware-Assisted Virtualization (HVM)
![](../../../../../Assets/Pics/Pasted%20image%2020230308125433.png)

↗ [Hardware-assisted Virtualization](📌%20Hardware-assisted%20Virtualization/Hardware-assisted%20Virtualization.md)


### 2️⃣ Para-virtualization /OS-Assisted Virtualization
> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

软件虚拟化可以在缺乏硬件虚拟化支持的平台上完全通过VMM软件来实现对各个虚拟机的监控，以保证它们之间彼此独立和隔离。 但是付出的代价是软件复杂度的增加，和性能上的损失。减轻这种负担的一种方法就是，改动客户操作系统，使它知道自己运行在虚拟环境下，能够与虚拟机监控机协同工作。这种方法就叫半虚拟化（para-virtualization）。虚拟机内核明确知道自己是运行在虚拟化之上的，对于硬件资源的使用不再需要BT而是自己向VMM申请使用，如对于内存或CPU的使用是直接向VMM申请使用，直接调用而非翻译。就算对于I/O设备的使用它也可以通过Hyper Call（Hypervisor提供的系统调用）直接可以跟硬件打交道，减少了中间的翻译步骤自然性能就好了，据说这种半虚拟化方式能够让虚拟化达到物理机90%的性能。本质上，半虚拟化弱化了对虚拟机特殊指令的被动截获要求，将其转化成客户机操作系统的主动通知。但是，半虚拟化需要修改客户机操作系统的源代码来实现主动通知。

Xen是开源准虚拟化技术的一个例子，操作系统作为虚拟服务器在Xen Hypervisor上运行之前，它必须在内核层面进行某些改变。因此，Xen适用于BSD、Linux、Solaris及其他开源操作系统，但不适合对像Windows这些专有的操作系统进行虚拟化处理，因为它们不  
公开源代码，所以无法修改其内核。

![](../../../../../Assets/Pics/Pasted%20image%2020230308111614.png)
<small>Para-vertualization under X86 Architcture</small>



## Ref
[虚拟化技术原理（CPU、内存、IO） | cnblog]: https://www.cnblogs.com/bj-mr-li/p/11407927.html

[理解全虚拟、半虚拟以及硬件辅助的虚拟化 | cnblog]: https://www.cnblogs.com/woshiweige/p/4518430.html

