# I/O Contorl Methods

[TOC]



## Res
### Related Topics



## Overview
Peripheral devices are not connected directly to the CPU. Instead, there is an 🎳**interface** that handles the data transfers. This interface converts the system bus signals to and from a format that is acceptable to the given device. 

Because of the great differences in control methods and transmission modes among various kinds of I/O devices, it is infeasible to try to connect them directly to the system bus. Instead, ==**dedicated I/O modules** serve as interfaces between the CPU and its peripherals. ==

These modules perform many functions, including
- **controlling device actions**
- **buffering data**
- **performing error detection**
- **communicating with the CPU**.

> Although one method isn’t necessarily better than another, the manner in which a computer controls its I/O greatly influences overall system design and performance. The objective is to know when the I/O method employed by a particular computer architecture is appropriate to how that system will be used.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%201.38.09%20PM.png)



## The Evolution of The I/O Functions
As computer systems have evolved, there has been a pattern of increasing complexity and sophistication of individual components. Nowhere is this more evident than in the I/O function. The evolutionary steps can be summarized as follows:

1. The processor directly controls a peripheral device. This is seen in simple microprocessor-controlled devices. (CPU 直接管理IO)
2. A controller or I/O module is added. The processor uses programmed I/O without interrupts. With this step, the processor becomes somewhat divorced from the specific details of external device interfaces. (加入I/O控制器，CPU直接管理I/O控制器，间接管理IO)
3. (**Interrupt driven)** The same configuration as step 2 is used, but now interrupts are employed. The processor need not spend time waiting for an I/O operation to be performed, thus increasing efficiency. (加入I/O中断，CPU仍直接管理I/O控制器，但是二者可以异步执行，CPU无需等待I/O)
4. (**DMA**) The I/O module is given direct control of memory via DMA. It can now move a block of data to or from memory without involving the processor, except at the beginning and end of the transfer. (加入DMA，I/O可以自决地管理（有限的，与CPU共享的）内存空间了，CPU对I/O的直接控制减少了)
5. (**I/O Channel**) The I/O module is enhanced to become a separate processor, with a specialized instruction set tailored for I/O. The central processing unit (CPU) directs the I/O processor to execute an I/O program in main memory. The I/O processor fetches and executes these instructions without processor intervention. This allows the processor to specify a sequence of I/O activities and to be interrupted only when the entire sequence has been performed. (加入I/O处理器，CPU对I/O的直接控制进一步减少，CPU只需进行声明式的指令控制)
6. (**I/O Processor**) The I/O module has a local memory of its own and is, in fact, a computer in its own right. With this architecture, a large set of I/O devices can be controlled, with minimal processor involvement. A common use for such an architecture has been to control communications with interactive terminals. The I/O processor takes care of most of the tasks involved in controlling the terminals. (加入I/O专用内存，I/O逐渐变成一个可以自决的“电脑”，CPU对I/O的控制越来越少)

As one proceeds along this evolutionary path, more and more of the I/O function is performed without processor involvement. The central processor is increasingly relieved of I/O-related tasks, improving performance. With the last two steps (5 and 6), a major change occurs with the introduction of the concept of an I/O module capable of executing a program.

> 📝 **A note about terminology** 
> 
> For all of the modules described in steps 4 through 6, the term direct memory access is appropriate, because all of these types involve direct control of main memory by the I/O module. 
> Also, the I/O module in step 5 is often referred to as an **I/O channel**, and that in step 6 as an **I/O processor**; however, each term is, on occasion, applied to both situations. In the latter part of this section, we will use the term I/O channel to refer to both types of I/O modules.



## Types of I/O Control Methods
### 1️⃣ Programmed (Instruction-Based) I/O 
↗ [Programmed (Instruction-Based) IO](Programmed%20(Instruction-Based)%20IO.md)


### 2️⃣ Interrupt-Driven I/O
↗ [Interrupt-Driven IO](Interrupt-Driven%20IO.md)


### 3️⃣ Memory-Mapped I/O
> - Each I/O device has its own reserved block of memory
> - the registers in the interface appear in the computer’s memory map, and there is no real difference between accessing memory and accessing an I/O device. 
> - Thus the instructions to move data to and from both I/O and memory are the same. This simplified the design of the system


**Pros & Cons**
Clearly, this is advantageous from the perspective of speed, but it uses up memory space in the system. 


### 4️⃣ Direct Memory Access (DMA)
↗ [Direct Memory Access (DMA)](Direct%20Memory%20Access%20(DMA).md)


### 5️⃣ Channel I/O
Use dedicated I/O processors.

**Pros**

**Cons**



## Ref

