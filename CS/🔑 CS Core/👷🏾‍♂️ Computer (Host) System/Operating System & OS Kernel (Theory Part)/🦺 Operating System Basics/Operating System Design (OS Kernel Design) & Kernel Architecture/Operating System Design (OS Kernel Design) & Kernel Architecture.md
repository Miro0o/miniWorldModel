# Operating System Design (OS Kernel Design) & Kernel Architecture

[TOC]



## Res
### Related Topics
↗ [Development(History) of Operating Systems](../Development(History)%20of%20Operating%20Systems.md)
↗ [Operating System Kernel (Kernel Mode)](../../😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)


### Learning Resources
🎬【操作系统设计选讲 (POSIX; Windows API; Micro/Exo/Unikernel) [南京大学2022操作系统-P21]】 https://www.bilibili.com/video/BV16i4y1m7Tg/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Overview
Two operating system components are crucial: the **kernel** and the **system programs**
- As the core of the operating system, the kernel performs scheduling, synchronization, memory management, interrupt handling, and it provides security and protection.

Four main factors drive operating system design: performance, power, cost, and compatibility


### OS System Types
#### Microkernel Systems (微内核系统)
Key features of microkernel design are its smaller size, easy portability, and the array of services that run a layer above the kernel instead of in the kernel itself.

- Microkernels provide **rudimentary operating system functionality**, relying on other **modules** to perform specific tasks, thus moving many typical operating system services into user space. This permits many services to be restarted or reconfigured without restarting the entire operating system. 
- Microkernels provide security, because services running at the user level have restricted access to system resources. 
- Microkernels can be customized and ported to other hardware more easily than monolithic kernels. 
- However, additional communication between the kernel and the other modules is necessary, often resulting in a slower and less efficient system. 

Microkernel development has been significantly encouraged by the growth in SMP and other multiprocessor systems. Examples of microkernel operating systems include MINIX, Mach, and QNX.
#### Monolithic Systems (宏内核系统)
Monolithic kernels provide all their essential functionality through a **single process**. Consequently, they are significantly larger than microkernels. Typically targeted for specific hardware, monolithic kernels interact directly with the hardware, so they can be optimized more easily than can microkernel operating systems. It is for this reason that monolithic kernels are not easily portable. 

Examples of monolithic kernel operating systems include Linux, MacOS, and DOS.
#### Hybrid Kernel Systems
Examples: Windows NT, XP, Vista, 7, 8, 10, 11, Server 2019, Windows Phone 8, 8.1, Xbox one



## Developments Leading to Modern Operating Systems

The rate of change in the demands on operating systems requires not just modifications and enhancements to existing architectures, but new ways of organizing the OS. A wide range of different approaches and design elements has been tried in both experimental and commercial operating systems, but much of the work fits into the following categories:

- Microkernel architecture
- Multithreading
- Symmetric multiprocessing
- Distributed operating systems
- Object-oriented design

#TODO 

### Microkernel Architecture (微内核系统)


### Multithreading 


### Symmetric Multiprocessing


### Distributed Operating Systems


### Object-Oriented Design



## OS Design Considerations for Multiprocessor and Multicore
#TODO 







## Ref