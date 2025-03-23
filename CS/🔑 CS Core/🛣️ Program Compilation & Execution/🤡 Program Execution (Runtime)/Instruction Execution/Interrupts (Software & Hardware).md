# Interrupts (Software & Hardware)

[TOC]



## Res
### Related Topics
↗ [ASM /Interrupts](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/⚡️%20ASM%20Advance/Interrupts/Interrupts.md)
↗ [System Calls](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)

↗ [Privilege Level & Protection Ring](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Privilege%20Level%20&%20Protection%20Ring.md)



## Overview
### What is Interrupt? Hardware Interrupt & Software Interrupt
![protection_ring.excalidraw | 800](../../../../../../Assets/Illustrations/Computer%20System/protection_ring.excalidraw.md)

> 🔗 https://blog.packagecloud.io/the-definitive-guide-to-linux-system-calls/

You can think of an interrupt as an event that is generated (or “raised”) by hardware or software.
- A **hardware interrupt (硬中断/中断)** is raised by a hardware device to notify the kernel that a particular event has occurred. A common example of this type of interrupt is an interrupt generated when a NIC receives a packet.
- A **software interrupt (软中断)** is raised by executing a piece of code. On x86-64 systems, a software interrupt can be raised by executing the `int` instruction.

Interrupts usually have numbers assigned to them. Some of these interrupt numbers have a special meaning.


### How Interrupt is triggered?
Interrupts can be triggered by
1. I/O requests
2. Invalid instruction encountered 
3. Arithmetic errors (e.g., division by 0)  
4. Arithmetic underflow or overflow  
5. Hardware malfunction (e.g., memory parity error)
6. Page faults
7. Miscellaneous

An interrupt 
- can be initiated by the user or the system
- can be maskable (disabled or ignored) or nonmaskable (a high-priority interrupt that cannot be disabled and must be acknowledged)
- can occur within or between instructions
- may be synchronous (occurring at the same place every time a program is executed) or asynchronous (occurring unexpectedly)
- can result in the program terminating or continuing execution once the interrupt is handled


### How Interrupt is implemented/handled?
> 🔗 https://blog.packagecloud.io/the-definitive-guide-to-linux-system-calls/

You can imagine an array that lives in memory on the CPU. Each entry in this array maps to an interrupt number. Each entry contains the address of a function that the CPU will begin executing when that interrupt is received along with some options, like what privilege level the interrupt handler function should be executed in.

Here’s a photo from the Intel CPU manual showing the layout of an entry in this array:
![](../../../../../Assets/Pics/Pasted%20image%2020240222133648.png)

If you look closely at the diagram, you can see a 2-bit field labeled DPL (Descriptor Privilege Level). The value in this field determines the minimum privilege level the CPU will be in when the handler function is executed.

This is how the CPU knows which address it should execute when a particular type of event is received and what privilege level the handler for that event should execute in.

In practice, there are lots of different ways to deal with interrupts on x86-64 systems. If you are interested in learning more read about the [8259 Programmable Interrupt Controller](http://wiki.osdev.org/8259_PIC), [Advanced Interrupt Controllers](http://wiki.osdev.org/APIC), and [IO Advanced Interrupt Controllers](http://wiki.osdev.org/IOAPIC).



## Ref
[操作系统 | 中断 & 系统调用浅析 - 彭旭锐的文章 - 知乎]: https://zhuanlan.zhihu.com/p/289410487
