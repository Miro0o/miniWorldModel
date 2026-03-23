# Memory Management (Main Memory + Secondary Memory Resource)

[TOC]



## Res
### Related Topics
↗ [Computer Memory & Storage](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
↗ [Primary Storage (Main Memory) Technologies & RAM](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM.md)

↗ [Database Systems](../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
↗ [File & File System](../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)

↗ [IO Efficiency (via Scheduling & Buffering)](../OS%20IO%20System/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering)/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering).md)
↗ [Procedure (Function) Call & Runtime Memory Layout](../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)


### Learning Resources
🎬【1-Bit 数据的存储 (延迟线/磁芯/DRAM/SRAM/磁带/磁盘/光盘/Flash SSD) [南京大学2022操作系统-P23]】 https://www.bilibili.com/video/BV1U54y1f7fm/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
> 🔗 https://en.wikipedia.org/wiki/Memory_management#Manual_memory_management

![](../../../../../Assets/Pics/Screenshot%202024-09-02%20at%2014.57.10.png)
<small>https://en.wikipedia.org/wiki/Memory_management</small>



## ⭐️ Memory Management Requirements
### 1️⃣ Relocation


### 2️⃣ Protection


### 3️⃣ Sharing


### 4️⃣ Logical Organization


### 5️⃣ Physical Organization



## Memory Management Methods
![](../../../../../Assets/Pics/Screenshot%202023-05-04%20at%201.25.23%20PM.png)
<small>Memory Management Techniques</small>

Fixed /Dynamic Partitioning: 整个程序作为整体，程序全部加载，地址连续
Simple Paging/ Segmentation: 整个程序划分为块，程序全部加载，地址不连续
Virtual Memory Paging/ Segmentation: 整个程序划分为块，程序部分加载，地址不连续


### Partitioning
↗ [Partitioning](Partitioning/Partitioning.md)


### Simple Paging & Simple Segmentation
↗ [Simple Paging & Segmentation](Simple%20Paging%20&%20Segmentation/Simple%20Paging%20&%20Segmentation.md)


### Virtual Memory
#### 1️⃣ Virtual Paging & Virtual Segmentation (Hardware & Control Structure)
↗ [Virtual Memory (Hardware and Control Structure)](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Virtual%20Memory%20(Hardware%20and%20Control%20Structure)/Virtual%20Memory%20(Hardware%20and%20Control%20Structure).md)
#### 2️⃣ Virtual Memory Policies (OS Software Level)
↗ [Virtual Memory (OS Software Level)](Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md)



## Files & File System
↗ [File & File System](../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)



## Ref
[操作系统~内存管理之覆盖与交换、连续内存分配 | CSDN]: https://blog.csdn.net/Shangxingya/article/details/113802996

- [内存管理](https://blog.csdn.net/Shangxingya/article/details/113802996#_31)
    - [内存保护](https://blog.csdn.net/Shangxingya/article/details/113802996#_39)
        - [内存交换技术](https://blog.csdn.net/Shangxingya/article/details/113802996#_57)
        - [内存分配](https://blog.csdn.net/Shangxingya/article/details/113802996#_80)
        - [单一连续分配](https://blog.csdn.net/Shangxingya/article/details/113802996#_81)
            - [固定分区分配](https://blog.csdn.net/Shangxingya/article/details/113802996#_90)
            - [动态分区分配](https://blog.csdn.net/Shangxingya/article/details/113802996#_103)
            - [动态分配算法](https://blog.csdn.net/Shangxingya/article/details/113802996#_114)

[👍 Linux堆内存管理深入分析（上）]: https://introspelliam.github.io/2017/09/10/Linux堆内存管理深入分析（上）/
鉴于篇幅过长，我将文章分成了上下两部分，上部分主要介绍堆内存管理中的一些基本概念以及相互关系，同时也着重介绍了堆中chunk分配和释放策略中使用到的隐式链表技术。后半部分主要介绍glibc malloc为了提高堆内存分配和释放的效率，引入的显示链表技术，即binlist的概念和核心原理。其中使用到的源码在：
- https://github.com/sploitfun/lsploits/tree/master/glibc
- [malloc.c源码](https://introspelliam.github.io/others/files/malloc.c)
