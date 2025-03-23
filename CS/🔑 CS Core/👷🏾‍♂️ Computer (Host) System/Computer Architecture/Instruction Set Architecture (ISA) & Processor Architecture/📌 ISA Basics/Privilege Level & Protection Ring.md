# Privilege Level & Protection Ring

[TOC]



## Res
### Related Topics
↗ [CPU (Central Processing Unit)](../../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [Operating System & OS Kernel (Theory Part)](../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)

↗ [OS /Privilege Level & System Calls](../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
↗ [Instruction Execution /Interrupts](../../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)
↗ [ASM /Interrupts](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/⚡️%20ASM%20Advance/Interrupts/Interrupts.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Protection_ring

> **TL;DR**
> 1. Privilege levels are a means of access control. The current privilege level determines which CPU instructions and IO may be performed.
> 2. The kernel runs at the most privileged level, called “Ring 0”. User programs run at a lesser level, typically “Ring 3”.

In computer science, **hierarchical protection domains**, often called **protection rings**, are mechanisms to protect data and functionality from faults (by improving fault tolerance) and malicious behavior (by providing computer security).

Computer operating systems provide different levels of access to resources. A protection ring is one of two or more hierarchical levels or layers of privilege within the architecture of a computer system. This is generally **hardware-enforced** by some CPU architectures that provide different **CPU modes** at the hardware or microcode level.
- Rings and CPU modes are different concepts. Operating systems running on hardware supporting both may use both forms of protection or only one.
- Rings are arranged in a hierarchy from most privileged (most trusted, usually numbered zero) to least privileged (least trusted, usually with the highest ring number). On most operating systems, Ring 0 is the level with the most privileges and interacts most directly with the physical hardware such as certain CPU functionality (e.g. the control registers) and I/O controllers. 
- With the increasing prevalence of virtualization, many CPUs have added another level (conceptually ring -1) for the hypervisor.

![](../../../../../../../Assets/Pics/Pasted%20image%2020240217173550.png)
<small>Protection ring on an x86 CPU. Usually ring 0 is kernel space, ring 3 is user space.</small>

Special mechanisms are provided to allow an outer ring to access an inner ring's resources in a predefined manner, as opposed to allowing arbitrary usage. Correctly gating access between rings can improve security by preventing programs from one ring or privilege level from misusing resources intended for programs in another. For example, spyware running as a user program in Ring 3 should be prevented from turning on a web camera without informing the user, since hardware access should be a Ring 1 function reserved for device drivers. Programs such as web browsers running in higher numbered rings must request access to the network, a resource restricted to a lower numbered ring.

![protection_ring.excalidraw | 800](../../../../../../Assets/Illustrations/Computer%20System/protection_ring.excalidraw.md)


### OS Modes based on Ring Protection
#### 1️⃣ Supervisor Mode (Supervisor/Kernel Mode + User Mode)
In computer terms, _supervisor mode_ is a hardware-mediated flag that can be changed by code running in system-level software. System-level tasks or threads may have this flag set while they are running, whereas user-level applications will not. This flag determines whether it would be possible to execute machine code operations such as modifying registers for various descriptor tables, or performing operations such as disabling interrupts.

In a monolithic kernel, the operating system runs in supervisor mode and the applications run in user mode. Other types of OS, like those with an [exokernel](https://en.wikipedia.org/wiki/Exokernel "Exokernel") or [microkernel](https://en.wikipedia.org/wiki/Microkernel "Microkernel"), do not necessarily share this behavior.
#### 2️⃣ Hypervisor Mode
> ↗ [Hardware-assisted Virtualization](../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/📌%20Hardware-assisted%20Virtualization/Hardware-assisted%20Virtualization.md)
> ↗ [x86 Virtualization](../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/📌%20Hardware-assisted%20Virtualization/CPU-assisted%20Virtualization/x86%20Virtualization/x86%20Virtualization.md)

Recent CPUs from Intel and AMD offer x86 virtualization instructions for a hypervisor to control Ring 0 hardware access. Although they are mutually incompatible, both Intel VT-x (codenamed "`Vanderpool`") and AMD-V (codenamed "`Pacifica`") create a new "Ring −1" so that a guest operating system can run Ring 0 operations natively without affecting other guests or the host OS.

To assist virtualization, VT-x and SVM insert a new privilege level beneath Ring 0. Both add nine new machine code instructions that only work at "Ring −1", intended to be used by the hypervisor.


### Processor Modes (CPU Modes) & Ring Protection
Ring protection can be combined with 🔗 [processor modes](https://en.wikipedia.org/wiki/Processor_modes "Processor modes") (master/kernel/privileged/supervisor mode versus slave/unprivileged/user mode) in some systems. Operating systems running on hardware supporting both may use both forms of protection or only one.

Effective use of ring architecture requires close cooperation between hardware and the operating system. Operating systems designed to work on multiple hardware platforms may make only limited use of rings if they are not present on every supported platform. Often the security model is simplified to "kernel" and "user" even if hardware provides finer granularity through rings.



## Protection Ring Implementations
> 🔗 https://en.wikipedia.org/wiki/Protection_ring



## Ref

