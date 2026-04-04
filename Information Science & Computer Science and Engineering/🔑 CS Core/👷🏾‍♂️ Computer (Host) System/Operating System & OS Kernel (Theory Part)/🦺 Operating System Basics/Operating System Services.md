# Operating System Services 

[TOC]



## Res
### Related Topics


### Other Resources



## Overview
As we have mentioned, the operating system is an important interface to the underlying hardware, both for users and for application programs. In addition to its role as an interface, it has three principal tasks. Process management is perhaps the most interesting of these three. The other two are system resource management and protection of those resources from errant processes.



## 🥺 The Operating System as an Interface (User Perspective)

> [!Links]
> ↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
> 
> ↗ [Computer Interfaces & Hardware Drivers](../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Interfaces%20&%20Hardware%20Drivers.md)
> ↗ [ABI (Application Binary Interface)](../../Computer%20Interfaces%20&%20Hardware%20Drivers/ABI%20(Application%20Binary%20Interface).md)
> ↗ [API (Application Program Interface)](../../Computer%20Interfaces%20&%20Hardware%20Drivers/API%20(Application%20Program%20Interface).md)


### 1️⃣ User Interface
#### CLI
#### GUI


### 2️⃣ System Interface
#### Program Development

#### Program Execution

#### Access to I/O Devices

#### Controlled Access to Files

#### System Access

#### Error Detection and Response

#### Accounting


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



## 🦮 The Operating System as a Resource Manager (System Perspective)
![](../../../../../Assets/Pics/Screenshot%202023-03-05%20at%2012.25.57%20AM.png)


### 1️⃣ Resource Management in General
↗ [OS Processes & Automata Management (CPU + Main Memory Resource)](../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource).md)
↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)
↗ [OS IO System](../OS%20IO%20System/OS%20IO%20System.md)


### 2️⃣ Resource Scheduling
↗ [OS Scheduling & Resource Management](../OS%20Scheduling%20&%20Resource%20Management/OS%20Scheduling%20&%20Resource%20Management.md)


### 3️⃣ Resource Security & Protection
#### 📜 Protected Environments and the Evolution of Systems Architectures
##### Server Farm
##### Server Consolidation Product
#### Virtual Machines
↗ [Computer Virtualization](../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Computer%20Virtualization.md)
#### Subsystems & Partitions
Although subsystems and partitions are different from each other in how they define their constituent resources, you can think of both as being mini-models of the layered system architecture of a computer system.
- In the case of a partitioned environment, the levels would look like adjacent layered birthday cakes, extending from the hardware level to the application level. 
- Subsystems, on the other hand, are not so distinct from one another, with most of the differences taking place at the system software level.
##### Subsystems
##### LPARs (Logical Partition)
In very large computer systems, subsystems do not go far enough in segmenting the machine and its resources.

Sometimes a more sophisticated barrier is required to facilitate security and resource management. In these instances, a system may be broken up into logical partitions, sometimes called LPARs, as illustrated in Figure 8.4. LPARs create distinct machines within one physical system, with nothing implicitly shared between them. The resources of one partition are no more accessible to another partition than if the partitions were running on physically separate systems. For example, if a system has two partitions, A and B, partition A can read a file from partition B only if both partitions agree to establish a mutually shared resource, such as a pipe or message queue. Generally speaking, files can be copied between partitions only through the use of a file transfer protocol or a utility written for this purpose by the system vendor.

Logical partitions are especially useful in creating “sandbox” environments for user training or testing new programs. Sandbox environments get their name from the idea that anyone using these environments is free to “play around” to his or her heart’s content, as long as this playing is done within the confines of the sandbox. Sandbox environments place strict limits on the accessibility of system resources. Processes running in one partition can never intentionally or inadvertently access data or processes resident in other partitions. Partitions thus raise the level of security in a system by isolating resources from processes that are not entitled to use them.




## Ref
[操作系统原理——第2章 操作系统概述]: https://blog.csdn.net/tangkcc/article/details/114852154
