# OS I/O System

[TOC]



## Res
### Related Topics
↗ [Computer IO System](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20IO%20System/Computer%20IO%20System.md)
↗ [Shell & Terminals (Console)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/Shell%20&%20Terminals%20(Console).md)
↗ [Auxiliary Hardware & Peripherals Implementations](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Auxiliary%20Hardware%20&%20Peripherals%20Implementations.md)

↗ [Computer Interfaces & Hardware Drivers](../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Interfaces%20&%20Hardware%20Drivers.md)


### Learning Resources
🎬【输入输出设备模型 (串口/键盘/磁盘/打印机/总线/中断控制器/DMA 和 GPU) [南京大学2022操作系统-P24]】 https://www.bilibili.com/video/BV1cv4y1T7wt/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
🎬【设备驱动程序 (Linux 设备驱动; GPU 和 CUDA; 存储设备抽象) [南京大学2022操作系统-P25]】 https://www.bilibili.com/video/BV17r4y1b7bn/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### I/O Devices & Hardware Implementations
↗ [Computer IO System](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20IO%20System/Computer%20IO%20System.md)


### I/O Design Objective in OS
#### 1️⃣ Generality
> I/O devices are heterogeneous in functionalities

Reduce complexity in I/O management (通用性：降低I/O设备管理复杂度)

↗ [IO Generality (via Abstraction)](IO%20Generality%20(via%20Abstraction)/IO%20Generality%20(via%20Abstraction).md)

> 💡 **Abstraction in Computer Science**
> This is a very common & essential concept through out CS !
#### 2️⃣ Efficiency
> I/O devices are heterogeneous in performance (but usually lower than CPU & memory)

Increase the performance of I/O devices (效率：提高I/O设备的性能)

↗ [IO Efficiency (via Scheduling & Buffering)](IO%20Efficiency%20(via%20Scheduling%20&%20Buffering)/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering).md)



## Logical Structure of the I/O Function
In Chapter 2, in the discussion of system structure, we emphasized the hierarchical nature of modern operating systems. The hierarchical philosophy is that the functions of the OS should be separated according to their complexity, their characteristic time scale, and their level of abstraction. Applying this philosophy specifically to the I/O facility leads to the type of organization suggested by Figure 11.4. The details of the organization will depend on the type of device and the application. The three most important logical structures are presented in the figure. Of course, a particular operating system may not conform exactly to these structures. However, the general principles are valid, and most operating systems approach I/O in approximately this way.

![](../../../../../Assets/Pics/Screenshot%202023-06-08%20at%202.13.39%20PM.png)

🎯 Let us consider the **simplest case** first, that of a local peripheral device that communicates in a simple fashion, such as a stream of bytes or records (see Figure 11.4a). The following layers are involved:
- **Logical I/O**: The logical I/O module deals with the device as a logical resource and is not concerned with the details of actually controlling the device. The logical I/O module is concerned with managing general I/O functions on behalf of user processes, allowing them to deal with the device in terms of a device identifier and simple commands such as open, close, read, and write.
- **Device I/O**: The requested operations and data(buffered characters, records, etc.) are converted into appropriate sequences of I/O instructions, channel commands, and controller orders. Buffering techniques may be used to improve utilization.
- **Scheduling and control**: The actual queueing and scheduling of I/O operations occurs at this layer, as well as the control of the operations. Thus, interrupts are handled at this layer and I/O status is collected and reported. This is the layer of software that actually interacts with the I/O module and hence the device hardware.

🎯 For a **communications device**, the I/O structure (see Figure 11.4b) looks much the same as that just described. The principal difference is that the logical I/O module is replaced by a communications architecture, which may itself consist of a number of layers. An example is TCP/IP, which will be discussed in Chapter 17.

🎯 Figure 11.4c shows a representative structure for managing I/O on a **secondary storage device** that supports a **file system**. The three layers not previously discussed are as follows:
1. **Directory management**: At this layer, symbolic file names are converted to identifiers that either reference the file directly or indirectly through a file descriptor or index table. This layer is also concerned with user operations that affect the directory of files, such as add, delete, and reorganize.

2. **File system**: This layer deals with the logical structure of files and with the operations that can be specified by users, such as open, close, read, and write. Access rights are also managed at this layer.

3. **Physical organization**: Just as virtual memory addresses must be converted into physical main memory addresses, taking into account the segmentation and paging structure, logical references to files and records must be converted to physical secondary storage addresses, taking into account the physical track and sector structure of the secondary storage device. Allocation of secondary storage space and main storage buffers is generally treated at this layer as well.

![](../../../../../Assets/Pics/Screenshot%202023-06-19%20at%203.05.12%20PM.png)



## I/O Resource Scheduling
↗ [IO Efficiency (via Scheduling & Buffering)](IO%20Efficiency%20(via%20Scheduling%20&%20Buffering)/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering).md)



## Ref

