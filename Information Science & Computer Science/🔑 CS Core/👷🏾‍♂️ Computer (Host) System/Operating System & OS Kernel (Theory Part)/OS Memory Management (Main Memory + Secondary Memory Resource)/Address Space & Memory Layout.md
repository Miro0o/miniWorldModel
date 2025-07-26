# Address Space & Memory Layout

[TOC]



## Res
### Related Topics
↗ [(Text) Data Representations & Storage in Computer](../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/(Text)%20Data%20Representations%20&%20Storage%20in%20Computer.md)

↗ [Procedure (Function) Call & Runtime Memory Layout](../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)
↗ [Memory Access & Addressing](../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

↗ [Memory Threats & Attacks](../../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Threats%20&%20Attacks/Memory%20Threats%20&%20Attacks.md)
- ↗ [Stack](../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Data%20Structures/Queue%20&%20Stack/Stack.md)
	- ↗ [Stack Buffer Overflow](../../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Threats%20&%20Attacks/Stack%20Attack/Stack%20Buffer%20Overflow/Stack%20Buffer%20Overflow.md)
- ↗ [Heap](../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Data%20Structures/Tree/📌%20Basic%20Tree%20&%20Derivatives/Heap.md)
	- ↗ [Heap Attack](../../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Threats%20&%20Attacks/Heap%20Attack/Heap%20Attack.md)
↗ [Memory Protections & Mitigations](../../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Protections%20&%20Mitigations/Memory%20Protections%20&%20Mitigations.md)


### Learning Resources
【进程的地址空间 (pmap; vdso; mmap; 游戏修改器/外挂) [南京大学2022操作系统-P12]】 https://www.bilibili.com/video/BV1Er4y1q7xo/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### Address Space: Abstraction of Storage
> 📎 《汇编语言》王爽

一台PC机中，装有多个存储器芯片，这些存储器芯片从物理连接上看是独立的、不同的器件。从读写属性上看分为两类:随机存储器(RAM)和只读存储器(ROM)。随机存储器可读可写，但必须带电存储，关机后存储的内容丢失; 只读存储器只能读取不能写入，关机后其中的内容不丢失。这些存储器从功能和连接上又可分为以下几类。
- **随机存储器。** 用于存放供CPU 使用的绝大部分程序和数据，主随机存储器一般由两个位置上 的 R A M 组 成 ， 装 在 主板 上的 R A M 和 插 在 扩 展 插 槽 上的 R A M 。
- **装有BIOS(Basic Input /Output System，基本输入/输出系统)的ROM。** BIOS是由主板和各类接又卡(如显卡、网卡等)厂商提供的软件系统，可以通过 它利用该硬件设备进行最基本的输入输出。在主板和某些接又卡上插有存储相应 BIOS的ROM。例如，主板上的ROM中存储着主板的BIOS(通常称为系统BIOS);显卡上的ROM中存储着显卡的BIOS;如果网卡上装有ROM，那其中就可以存储网卡的BIOS。
- **接口卡上的RAM。** 某些接又卡需要对大批量输入、输出数据进行暂时存储，在其上装有 RAM。最 典型的是显示卡上的 RAM， 一般称为显存。显示卡随时将显存中的数据向显示 器上输出。换句话说，我们将需要显示的内容写入显存，就会出现在显示器上。

![](../../../../../../Assets/Pics/Screenshot%202023-10-13%20at%209.08.17PM.png)

上述的那些存储器，在物理上是独立的器件，但是在以下两点上相同：
- 都和CPU的总线相连
- CPU 对它们进行读或写的时候都通过控制线发出内存读写命令
这也就是说，CPU 在操控它们的时候，把它们都当作内存来对待，把它们总的看作一个由若干存储单元组成的逻辑存储器，这个逻辑存储器就是我们所说的内存地址空间。(address space)

![](../../../../../../Assets/Pics/Screenshot%202023-10-13%20at%209.08.32PM.png)


### Address Space: Physical & Virtual
> 📎 https://linux-kernel-labs.github.io/refs/heads/master/lectures/intro.html

The address space term is an overload term that can have different meanings in different contexts.

1. The **physical address space** refers to the way the RAM and device memories are visible on the memory bus. For example, on 32bit Intel architecture, it is common to have the RAM mapped into the lower physical address space while the graphics card memory is mapped high in the physical address space.
2. The **virtual address space** (or sometimes just address space) refers to the way the CPU sees the memory when the virtual memory module is activated (sometime called protected mode or paging enabled). The kernel is responsible of setting up a mapping that creates a virtual address space in which areas of this space are mapped to certain physical memory areas.
	1. Related to the virtual address space there are two other terms that are often used: process (address) space and kernel (address) space.
	2. The **process space** is (part of) the virtual address space associated with a process. It is the "memory view" of processes. It is a continuous area that starts at zero. Where the process's address space ends depends on the implementation and architecture.
	3. The **kernel space** is the "memory view" of the code that runs in kernel mode.

↗ [Virtual Memory (OS Software Level)](Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md)
↗ [Virtual Memory (Hardware and Control Structure)](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Virtual%20Memory%20(Hardware%20and%20Control%20Structure)/Virtual%20Memory%20(Hardware%20and%20Control%20Structure).md)


### (Virtual) Address Space: (Application) Memory Layout & Notation
> 🔗 https://textbook.cs161.org/memory-safety/x86.html#23-c-memory-layout

At runtime, the operating system gives the program an address space to store any state necessary for program execution. You can think of the address space as a large, contiguous chunk of memory. Each _byte_ of memory has a unique address.

The size of the address space depends on your operating system and CPU architecture. In a 32-bit system, memory addresses are 32 bits long, which means the address space has 232 bytes of memory. In a 64-bit system, memory addresses are 64 bits long. (Sanity check: how big is the address space in this system?[2](https://textbook.cs161.org/memory-safety/x86.html#fn:2)) In this class, unless otherwise stated we’ll be using 32-bit systems.

We can draw the memory layout as one long array with 232 elements, where each element is one byte. The leftmost element has address `0x00000000`, and the rightmost element has address `0xFFFFFFFF`.[3](https://textbook.cs161.org/memory-safety/x86.html#fn:3)

![|500](../../../../../Assets/Pics/Pasted%20image%2020240902162323.png)

However, this is hard to read, so we usually draw memory as a grid of bytes. In the grid, the bottom-left element has address `0x00000000`, and the top-right element has address `0xFFFFFFFF`. Addresses increase as you move from left to right and from bottom to top.
![|600](../../../../../Assets/Pics/Pasted%20image%2020240902162334.png)


Although we can draw memory as a grid with annotations and labels, remember that the program only sees a huge array of raw bytes. It is up to the programmer and the compiler to manipulate this chunk of raw bytes to create objects like variables, pointers, arrays, and structs.

When a program is being run, the address space is divided into four sections. From lowest address to highest address, they are:

- The **_code_ section** contains the executable instructions of the program (i.e. the code itself). Recall that the assembler and linker output raw bytes that can be interpreted as machine code. These bytes are stored in the code section.
- The **_static_ section** contains constants and static variables that never change during program execution, and are usually allocated when the program is started.
- The **_heap_** stores dynamically allocated data. When you call `malloc` in C, memory is allocated on the heap and given to you for use until you call `free`. The heap starts at lower addresses and “grows up” to higher addresses as more memory is allocated.
- The **_stack_** stores local variables and other information associated with function calls. The stack starts at higher addresses and “grows down” as more functions are called.

![|400](../../../../../Assets/Pics/Pasted%20image%2020240902162344.png)



## 🎯 Physical Address Space



## 🎯 Virtual Address Space
### 👉 Kernel Address Space


### 👉 Application Address Space (Process Address Space)
> 📖 CSAPP

Linux processes is shown in Figure 1.13. (Other Unix systems use a similar layout.) In Linux, the topmost region of the address space is reserved for code and data in the operating system that is common to all processes. The lower region of the address space holds the code and data defined by the user’s process. Note that addresses in the figure increase from the bottom to the top.

![](../../../../../../Assets/Pics/Screenshot%202023-10-13%20at%209.00.24PM.png)

The virtual address space seen by each process consists of a number of well-defined areas, each with a specific purpose. You will learn more about these areas later in the book (CSAPP), but it will be helpful to look briefly at each, starting with the lowest addresses and working our way up:
- **Program code and data.** Code begins at the same fixed address for all processes, followed by data locations that correspond to global C variables. The code and data areas are initialized directly from the contents of an executable object file—in our case, the hello executable. You will learn more about this part of the address space when we study linking and loading in Chapter 7.

- **Heap.** The code and data areas are followed immediately by the run-time heap. Unlike the code and data areas, which are fixed in size once the process begins running, the heap expands and contracts dynamically at run time as a result of calls to C standard library routines such as malloc and free. We will study heaps in detail when we learn about managing virtual memory in Chapter 9.

- **Shared libraries.** Near the middle of the address space is an area that holds the code and data for shared libraries such as the C standard library and the math library. The notion of a shared library is a powerful but somewhat difficult concept. You will learn how they work when we study dynamic linking in Chapter 7.

- **Stack.** At the top of the user’s virtual address space is the user stack that the compiler uses to implement function calls. Like the heap, the user stack expands and contracts dynamically during the execution of the program. In particular, each time we call a function, the stack grows. Each time we return from a function, it contracts. You will learn how the compiler uses the stack in Chapter 3.

- **Kernel virtual memory.** The top region of the address space is reserved for the kernel. Application programs are not allowed to read or write the contents of this area or to directly call functions defined in the kernel code. Instead, they must invoke the kernel to perform these operations.

For virtual memory to work, a sophisticated interaction is required between the hardware and the operating system software, including a hardware translation of every address generated by the processor. The basic idea is to store the contents of a process’s virtual memory on disk and then use the main memory as a cache for the disk.


### User and kernel sharing the virtual address space
A typical implementation for user and kernel spaces is one where the virtual address space is shared between user processes and the kernel.

In this case kernel space is located at the top of the address space, while user space at the bottom. In order to prevent the user processes from accessing kernel space, the kernel creates mappings that prevent access to the kernel space from user mode.

![](../../../../../Assets/Pics/Pasted%20image%2020240531212253.png)



## 🎯 Physical Address Space <-> Virtual Address Space Mapping (Virtual Memory Management)
↗ [Virtual Memory (OS Software Level)](Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md)
↗ [Virtual Memory (Hardware and Control Structure)](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Virtual%20Memory%20(Hardware%20and%20Control%20Structure)/Virtual%20Memory%20(Hardware%20and%20Control%20Structure).md)



## Ref

