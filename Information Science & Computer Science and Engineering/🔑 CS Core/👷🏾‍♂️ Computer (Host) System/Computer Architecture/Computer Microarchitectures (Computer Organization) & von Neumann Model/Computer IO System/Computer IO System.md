# Computer IO System

[TOC]



## Res
### Related Topics
↗ [Computer Bus (Datapath) & Interfaces & Protocols](../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols.md)
- ↗ [Expansion Bus (Ports & Computer Bus Interfaces)](../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces).md)

↗ [Computer Interfaces & Hardware Drivers](../../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Interfaces%20&%20Hardware%20Drivers.md)
- ↗ [Computer Firmware System Interfaces](../../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Firmware%20System%20Interfaces/Computer%20Firmware%20System%20Interfaces.md)
- ↗ [Computer (IO Devices) Drivers & Programming](../../../Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Computer%20(IO%20Devices)%20Drivers%20&%20Programming.md)

↗ [Auxiliary Hardware & Peripherals Implementations](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Auxiliary%20Hardware%20&%20Peripherals%20Implementations.md)

↗ [ASM /Interfaces](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/⚡️%20ASM%20Advance/Interfaces/Interfaces.md)
↗ [Secondary (Auxiliary) Storage Technologies & DAS (Directly Attached Storage)](../Computer%20Memory%20&%20Storage/Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage).md)
↗ [Computer Networking and Communication](../../../../🏎️%20Computer%20Networking%20and%20Communication/Computer%20Networking%20and%20Communication.md)

↗ [OS IO System](../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/OS%20IO%20System.md)
- ↗ [IO Models](../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/📌%20IO%20Models/IO%20Models.md)


### Learning Resources
🎬【输入输出设备模型 (串口/键盘/磁盘/打印机/总线/中断控制器/DMA 和 GPU) [南京大学2022操作系统-P24]】 https://www.bilibili.com/video/BV1cv4y1T7wt/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Overview


## I/O Devices
External devices that engage in I/O with computer systems can be roughly grouped into three categories:
1. **Human readable**: Suitable for communicating with the computer user. Examples include printers and terminals, the latter consisting of video display, key-board, and perhaps other devices such as a mouse.
2. **Machine readable**: Suitable for communicating with electronic equipment. Examples are disk drives, USB keys, sensors, controllers, and actuators.
3. **Communication**: Suitable for communicating with remote devices. Examples are digital line drivers and modems.

![](../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%202.56.06%20PM.png)


### I/O Devices Metrics
There are great differences across classes and even substantial differences within each class. Among the key differences are the following:
- **Data rate**: There may be differences of several orders of magnitude between the data transfer rates. Figure 11.1 gives some examples.

- **Application**: The use to which a device is put has an influence on the software and policies in the OS and supporting utilities. For example, a disk used for files requires the support of file management software. A disk used as a backing store for pages in a virtual memory scheme depends on the use of virtual memory hardware and software. Furthermore, these applications have an impact on disk scheduling algorithms (discussed later in this chapter). As another example, a terminal may be used by an ordinary user or a system administrator. These uses imply different privilege levels and perhaps different priorities in the OS.

- **Complexity of control**: A printer requires a relatively simple control interface. A disk is much more complex. The effect of these differences on the OS is filtered to some extent by the complexity of the I/O module that controls the device, as discussed in the next section.

- **Unit of transfer**: Data may be transferred as a stream of bytes or characters (e.g., terminal I/O) or in larger blocks (e.g., disk I/O).

- **Data representation**: Different data encoding schemes are used by different devices, including differences in character code and parity conventions.

- **Error conditions**: The nature of errors, the way in which they are reported, their consequences, and the available range of responses differ widely from one device to another.

This diversity makes a uniform and consistent approach to I/O, both from the point of view of the operating system and from the point of view of user processes, difficult to achieve.



## I/O and Performance
### Amdahl's Law
> ↗ [Multiprocessor Architectures & Parallel Computing /Amdahl’s Law (Gene Amdahl)](../🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Multiprocessor%20Architectures%20&%20Parallel%20Computing.md#Amdahl’s%20Law%20(Gene%20Amdahl))

In 1967, Gene Amdahl recognized the interrelationship of all components with the overall efficiency of a computer system. He quantified his observations in a formula, which is now known as **Amdahl’s Law**. In essence, Amdahl’s Law states that ==the overall speedup of a computer system depends on both the speedup in a particular component and how much that component is used by the system.== In symbols:
$$S = \frac{1}{(1-f)+(f/k)}$$

where
- S is the **overall system speedup**;  
- f is the **fraction of work** performed by the faster component;
- k is the **speedup of a new component**.
#### Different Expressions of 'Speed-up'



## 🗾 I/O Architectures & Organizations
We will define input/output as a subsystem of components that moves coded data between external devices and a host system, consisting of a CPU and main memory. I/O subsystems include but are not limited to:
- **Blocks of main memory** that are devoted to I/O functions  
- **Buses** that provide the means of moving data into and out of the system
- **Control modules** in the host and in peripheral devices  
- **Interfaces** to external components such as keyboards and disks  
- **Cabling or communications links** between the host system and its peripherals.

![](../../../../../../../Assets/Pics/Screenshot%202023-05-09%20at%202.21.48%20PM.png)


### I/O Protocols
The exact form and meaning of the signals exchanged between a sender and a receiver is called a **protocol**.
Protocols include
- **command signals**, such as “Printer reset”;
- **status signals**, such as “Tape ready”; 
- **data-passing signals**, such as “Here are the bytes you requested.”

In most data-exchanging protocols, the receiver must acknowledge the commands and data sent to it or indicate that it is ready to receive data. This type of protocol exchange is called a **handshake**.

↗ [TCP Connection Management](../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x04%20Transport%20Layer/📌%20TCP%20(Transmission%20Control%20Protocol)/TCP%20Connection%20Management.md)


### 🎯 I/O Operations
#### 1️⃣ Character (Stream) I/O
---
**Keyboard Input**
Pressing a key on a computer keyboard sets in motion a sequence of activities that process the keystroke as a single event (no matter how fast you type!). The reason for this is found within the mechanics of the keyboard. Each key controls a small switch that closes a connection in a matrix of conductors that runs horizontally and vertically beneath the keys. When a key switch closes, a distinct **scan code** is read by the keyboard circuitry. The scan code is then passed to a **serial interface circuit**, which translates the scan code into a **character code**. The interface places the character code in a keyboard buffer that is maintained in low memory. Immediately afterward, an **I/O interrupt signal** is raised. The characters wait patiently in the buffer until they are retrieved -- one at a time -- by a program (or until the buffer is reset). The keyboard circuits are able to process a new keystroke only after the old one is on its way to the buffer. Although it is certainly possible to press two keys at once, only one of the strokes can be processed at a time.

---
Because of the random, sequential nature of character I/O as just described, it is best handled through **interrupt-driven I/O processing**.
#### 2️⃣ Block I/O
---
**Storage I/O**
Magnetic disks and tapes store data in blocks. Consequently, it makes sense to manage disk and tape I/O in block units. 

---

Blocks can be different sizes, depending on the particular hardware, software, and applications involved. Determining an ideal block size can be an important activity when a system is being tuned for optimum performance. 
- High-performance systems handle large blocks more efficiently than they handle small blocks. 
- Slower systems should manage bytes in smaller blocks; otherwise, the system may become unresponsive to user input during I/O.

Block I/O lends itself to **DMA** or **channel I/O processing**.


### 🎯 I/O Control Methods (Organization of The I/O Functions)
↗ [IO Control Methods](📌%20IO%20Control%20Methods/IO%20Control%20Methods.md)


### I/O Buses and Interfaces
Each I/O device is connected to the I/O bus by either a **controller** or an **adapter**. The distinction between the two is mainly one of packaging. 
- **Controllers** are chip sets in the device itself or on the system’s main printed circuit board (often called the motherboard).
- **Adapters** are cards that plug into slots on the motherboard. Regardless, the purpose of each is to transfer information back and forth between the I/O bus and an I/O device.

![](../../../../../../Assets/Pics/Screenshot%202023-10-16%20at%206.47.51PM.png)

↗ [Expansion Bus (Ports & Computer Bus Interfaces)](../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces).md)
↗ [Computer IO System](Computer%20IO%20System.md)

↗ [von Neumann Based Microarchitecture /Datapath (Bus)](../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols.md)
↗ [Expansion Bus (Ports & Computer Bus Interfaces)](../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces).md)



## Data Transmission Modes
↗ [Data Transmission Modes](Data%20Transmission%20Modes.md)



## The Evolution of the I/O Functions
As computer systems have evolved, there has been a pattern of increasing complexity and sophistication of individual components. Nowhere is this more evident than in the I/O function. The evolutionary steps can be summarized as follows:

1. The processor directly controls a peripheral device. This is seen in simple microprocessor-controlled devices.
2. A controller or I/O module is added. The processor uses programmed I/O without interrupts. With this step, the processor becomes somewhat divorced from the specific details of external device interfaces.
3. The same configuration as step 2 is used, but now interrupts are employed. The processor need not spend time waiting for an I/O operation to be performed, thus increasing efficiency.
4. The I/O module is given direct control of memory via DMA. It can now move a block of data to or from memory without involving the processor, except at the beginning and end of the transfer.
5. The I/O module is enhanced to become a separate processor, with a specialized instruction set tailored for I/O. The central processing unit (CPU) directs the I/O processor to execute an I/O program in main memory. The I/O processor fetches and executes these instructions without processor intervention. This allows the processor to specify a sequence of I/O activities and to be interrupted only when the entire sequence has been performed.
6. The I/O module has a local memory of its own and is, in fact, a computer in its own right. With this architecture, a large set of I/O devices can be controlled, with minimal processor involvement. A common use for such an architecture has been to control communications with interactive terminals. The I/O processor takes care of most of the tasks involved in controlling the terminals.

As one proceeds along this evolutionary path, more and more of the I/O function is performed without processor involvement. The central processor is increasingly relieved of I/O-related tasks, improving performance. With the last two steps (5 and 6), a major change occurs with the introduction of the concept of an I/O module capable of executing a program.

A note about terminology: For all of the modules described in steps 4 through 6, the term direct memory access is appropriate, because all of these types involve direct control of main memory by the I/O module. Also, the I/O module in step 5 is often referred to as an I/O channel, and that in step 6 as an I/O processor; however, each term is, on occasion, applied to both situations. In the latter part of this section, we will use the term I/O channel to refer to both types of I/O modules.



## Ref
[Amdahl's law | Wikipedia]: https://en.wikipedia.org/wiki/Amdahl%27s_law

[Computer Organization | Amdahl’s law and its proof ---- GeeksforGeeks]: https://www.geeksforgeeks.org/computer-organization-amdahls-law-and-its-proof/

