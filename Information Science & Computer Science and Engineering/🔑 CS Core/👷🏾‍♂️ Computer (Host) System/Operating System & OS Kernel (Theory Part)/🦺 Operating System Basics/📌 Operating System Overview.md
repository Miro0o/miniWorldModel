# Operating System Overview

[TOC]



## Res
### Related Topics
↗ [Firmware and Computer (OS) Booting](../../Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)
↗ [Shell & Terminals (Console)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/Shell%20&%20Terminals%20(Console).md)
↗ [Interrupts (Software & Hardware)](../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)


### Learning Resources
📄 https://en.wikipedia.org/wiki/Operating_system

🎬【操作系统概述 (为什么要学操作系统) [南京大学2022操作系统-蒋炎岩-P1]】 https://www.bilibili.com/video/BV1Cm4y1d7Ur/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro: Operating Systems
The operating system itself is little more than an ordinary piece of software. It differs from most other software in that it is loaded by booting the computer and is then executed directly by the processor. 

The operating system must have control of the processor (as well as other resources), because one of its many tasks is scheduling the processes that use the CPU. It relinquishes control of the CPU to various application programs during the course of their execution. The operating system is dependent on the processor to regain control when the application either no longer requires the CPU or gives up the CPU as it waits for other resources.

![](../../../../../Assets/Pics/Screenshot%202024-03-28%20at%2010.47.12%20AM.png)
<small><a>https://en.wikipedia.org/wiki/Operating_system#External_links</a></small>


### Development (History) of OS
↗ [Development(History) of Operating Systems](Development(History)%20of%20Operating%20Systems.md)
↗ [Operating System Design (OS Kernel Design) & Kernel Architecture](Operating%20System%20Design%20(OS%20Kernel%20Design)%20&%20Kernel%20Architecture/Operating%20System%20Design%20(OS%20Kernel%20Design)%20&%20Kernel%20Architecture.md)



## 🥅 OS Objectives & Functions
An OS is a program that controls the execution of application programs, and acts as an interface between applications and the computer hardware. It can be thought of as having three objectives:
- **Convenience**: An OS makes a computer more convenient to use.  
- **Efficiency**: An OS allows the computer system resources to be used in an efficient manner.
- **Ability to evolve**: An OS should be constructed in such a way as to permit the effective development, testing, and introduction of new system functions without interfering with service.

↗ More is at [Operating System Services](Operating%20System%20Services.md)

🤔 As an engineering project, ↗ **[Fault Tolerance](Fault%20Tolerance.md)** is also an eternal objective pursuing by generations of engineers.


### 🧠 Abstractions Provided by an Operating System (From User Perspective)
> The operating system has two primary purposes: (1) to protect the hardware from misuse by runaway applications and (2) to provide applications with simple and uniform mechanisms for manipulating complicated and often wildly different low-level hardware devices. (CSAPP)

The operating system achieves both goals via the fundamental abstractions shown in figure below: processes, virtual memory, and files. As this figure suggests
- files are abstractions for I/O devices, 
- virtual memory is an abstraction for both the main memory and disk I/O devices, and 
- processes are abstractions for the processor, main memory, and I/O devices.

![](../../../../../Assets/Pics/Screenshot%202023-10-13%20at%209.33.22PM.png)
#### 1️⃣ Processes
↗ [OS Processes & Automata Management (CPU + Main Memory Resource)](../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource).md)
#### 2️⃣ Virtual Memory Space
↗ [Primary Storage (Main Memory) Technologies & RAM](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM.md)
↗ [Address Space & Memory Layout](../OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
#### 3️⃣ Files
↗ [Network Sockets](../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Network%20Sockets.md)
↗ [File & File System](../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)

↗ [IO Generality (via Abstraction)](../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/IO%20Generality%20(via%20Abstraction).md)
#### 4️⃣ Virtual Machine
The idea of a virtual machine was introduced by IBM in the 1960s, but it has become more prominent recently as a way to manage computers that must be able to run programs designed for multiple operating systems (such as Microsoft Windows, Mac OS X, and Linux) or different versions of the same operating system.

↗ [Computer Virtualization](../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Computer%20Virtualization.md)



## 🤔 Program, OS, Automata



## Morden Operating Systems
> ↗ [Operating Systems & Kernels (Engineering Part)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)


### 👉 Windows
More of Windows can be found at ↗ [Windows NT (New Technology) Kernel](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20NT%20(New%20Technology)%20Kernel.md).


### 👉 UNIX
> More of UNIX can be found at ↗ [UNIX Kernel](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/UNIX%20Family/📌%20UNIX%20Kernel/UNIX%20Kernel.md)

![](../../../../../Assets/Pics/Screenshot%202023-03-02%20at%2010.06.15%20PM.png)


### 👉 Linux
More of Linux can be found at :

↗ [🍸 Linux Kernel](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/🍸%20Linux%20Kernel.md)
↗ [Linux (Derived From UNIX Family)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20(Derived%20From%20UNIX%20Family).md)


### 👉 MacOS
macOS is noted here ↗ [macOS Kernel (xnu) & Darwin](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20Kernel%20(xnu)%20&%20Darwin.md).


### 👉 Android
Android is noted here ↗ [Android Kernel](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Android%20&%20AOSP/Android%20Kernel/Android%20Kernel.md).



## Ref
[History of UNIX]: https://en.wikipedia.org/wiki/History_of_Unix
[操作系统原理——第2章 操作系统概述]: https://blog.csdn.net/tangkcc/article/details/114852154

[Operating system | wikipedia]: https://en.wikipedia.org/wiki/Operating_system#External_links
