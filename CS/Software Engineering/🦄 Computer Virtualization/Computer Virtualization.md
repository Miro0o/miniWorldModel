# Computer Virtualization

[TOC]



## Res
### Communities & Supports
📂 [RED HAT ENTERPRISE LINUX 6 | Virtualization Administration Guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/virtualization_administration_guide/index)

📂 [SUSE Linux Enterprise Server 15 SP1 | Virtualization Guide](https://documentation.suse.com/sles/15-SP1/html/SLES-all/book-virt.html)

> Describes virtualization technology in general, and introduces `libvirt` — the unified interface to virtualization — and detailed information on specific hypervisors.

📂  [译｜论文｜可虚拟化第三代（计算机）架构的规范化条件（ACM, 1974）](https://arthurchiao.art/blog/formal-requirements-for-virtualizable-arch-zh/)
Popek & Goldberg, 1974


### Related Topics
↗ [Network Virtualization](../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/Network%20Virtualization.md)
↗ [Virtual Reality](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Virtual%20Reality/Virtual%20Reality.md)

↗ [Console Games & Video Games](../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/🕹️%20Games/Games%20Library/Console%20Games%20&%20Video%20Games/Console%20Games%20&%20Video%20Games.md)

↗ [Cloud Computing & Cloud Native](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)
↗ [VMWare](../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/System%20Level%20Software%20Providers/VMWare.md)



## Overview
![](../../../../Assets/Pics/Screenshot%202024-04-01%20at%203.15.48%20PM.png)
<small>https://en.wikipedia.org/wiki/Virtualization#External_links</small>

> 📎 https://www.cnblogs.com/bj-mr-li/p/11407927.html

虚拟化是一个广义的术语，是指计算元件在虚拟的基础上而不是真实的基础上运行，是一个为了简化管理、优化资源的解决方案。

在X86平台虚拟化技术中，新引入的虚拟化层通常称为虚拟机监控器（Virtual MachineMonitor, VMM）， 也叫做Hypervisor。 虚拟机监控器运行的环境，也就是真实的物理平台，称之为宿主机。而虚拟出来的平台通常称为客户机，里面运行的系统对应地也称为客户机操作系统，如下图。

1974年，Popek和Goldberg在一篇论文中定义了“经典虚拟化(Classical virtualization)”的基本需求，他们认为，一款真正意义上的VMM至少要符合三个方面的标准：
- 等价执行（Equivalient execution）：除了资源的可用性及时间上的不同之外，程序在虚拟化环境中及真实环境中的执行是完全相同的。
- 性能（Performance）：指令集中的大部分指令要能够直接运行于CPU上。
- 安全（Safety）：VMM要能够完全控制系统资源。


### Virtualization & Emulation
#virtualization #emulation



### Virtualization History
↗ [Virtualization Development History & Timeline](Virtualization%20Development%20History%20&%20Timeline.md)


### 🎲 Virtualization by Objects
1. Virtual Reality
	1. As in ↗ [AI /Virtual Reality](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Virtual%20Reality/Virtual%20Reality.md).
2. Virtual Machine
	1. Platform Virtualization
	2. Application Virtualization(Sandbox)
	3. Desktop virtualization
3. Network Virtualization
	1. As in ↗ [Computer Network /Network Virtualization](../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/Network%20Virtualization.md)
4. Storage Virtualization
	1. ↗ [Operating System / Memory Management /Memory Virtualization](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Virtual%20Memory%20(Hardware%20and%20Control%20Structure)/Virtual%20Memory%20(Hardware%20and%20Control%20Structure).md)
5. Service Virtualization
	1. As in ↗ [Cloud Computing & Cloud Native](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md).



## 🪜 Virtualization by Abstraction Levels
### 1️⃣ Hardware Abstraction Level
At this level virtualizations are often referred as Hypervisors, or VMM (virtual machine manager).

> As in ↗ [Hardware Level Virtualization & Hypervisors](Hardware%20Level%20Virtualization%20&%20Hypervisors/Hardware%20Level%20Virtualization%20&%20Hypervisors.md)

↗ [Bochs IA-32 (x86) PC emulator](Hardware%20Level%20Virtualization%20&%20Hypervisors/Hypervisors%20Implementation/Hosted%20Hypervisor/Exclusive/Bochs%20IA-32%20(x86)%20PC%20emulator.md)
↗ [QEMU](Hardware%20Level%20Virtualization%20&%20Hypervisors/Hypervisors%20Implementation/Hosted%20Hypervisor/Independant/QEMU/QEMU.md)
↗ [VMware ESXi & VMware vSphere](Hardware%20Level%20Virtualization%20&%20Hypervisors/Hypervisors%20Implementation/Native%20Hypervisor/VMware%20ESXi%20&%20VMware%20vSphere/VMware%20ESXi%20&%20VMware%20vSphere.md)
↗ [Microsoft Hyper-V](Hardware%20Level%20Virtualization%20&%20Hypervisors/Hypervisors%20Implementation/Native%20Hypervisor/Microsoft%20Hyper-V/Microsoft%20Hyper-V.md)


### Software Abstraction Level
#### 2️⃣ OS Level
↗ [Container Implementations](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🏂%20OS%20Level%20Virtualization%20&%20Containers%20Technology/🐋%20Container%20Implementations/Container%20Implementations.md)
↗ [OS Level Virtualization & Containers Technology](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🏂%20OS%20Level%20Virtualization%20&%20Containers%20Technology/OS%20Level%20Virtualization%20&%20Containers%20Technology.md)
#### 3️⃣ Library Level
↗ [Library Level Virtualization](Library%20Level%20Virtualization/Library%20Level%20Virtualization.md)
#### 4️⃣ Process Level (Application Level, Sandbox)
↗ [Process Level Virtualization](Process%20Level%20Virtualization/Process%20Level%20Virtualization.md)


### 5️⃣ Service Level
↗ [Virtual Reality](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Virtual%20Reality/Virtual%20Reality.md)

↗ [Network Virtualization](../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/Network%20Virtualization.md)
↗ [Graphics Rendering Frameworks (2D & 3D)](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Graphics%20Rendering%20Frameworks%20(2D%20&%203D).md)



## Ref
[虚拟化技术发展编年史]: https://www.woshipm.com/it/2808541.html
[虚拟化技术概念学习总结]: https://cloud.tencent.com/developer/article/1782543
[虚拟化，看这篇文章就够了]: https://www.51cto.com/article/536043.html
[虚拟化技术的分类及介绍]: https://zhuanlan.zhihu.com/p/102809005
[VPS常用虚拟技术（OpenVZ、Xen、KVM）介绍与比较]: https://zhuanlan.zhihu.com/p/37593753
[虚拟化]: https://zh.wikipedia.org/zh-cn/虛擬化

[理解（计算、网络，存储）虚拟化，只需一篇文章]: https://blog.csdn.net/weixin_57726902/article/details/124072149

[👍 Introduction to virtualisation | Ubuntu serer docs]: https://ubuntu.com/server/docs/virtualization-introduction

[👍 x86 virtualization | Wikipedia]: https://en.wikipedia.org/wiki/X86_virtualization

[VMWare ESXi简介及运维 | CSDN]: http://t.csdnimg.cn/UBy8f
![](../../../../Assets/Pics/Pasted%20image%2020240402135030.png)

[Virtualization | The linux kernel]: https://linux-kernel-labs.github.io/refs/heads/master/lectures/virt.html#classic-virtualization
