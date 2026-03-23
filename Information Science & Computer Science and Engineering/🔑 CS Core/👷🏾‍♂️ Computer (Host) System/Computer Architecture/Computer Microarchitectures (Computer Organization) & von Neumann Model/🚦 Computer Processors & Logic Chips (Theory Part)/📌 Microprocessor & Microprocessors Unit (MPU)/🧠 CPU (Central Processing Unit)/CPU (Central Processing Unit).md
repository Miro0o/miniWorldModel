# CPU (Central Processing Unit)

[TOC]



## Res
### Related Topics
↗ [Internal Bus (On-Chip Bus)](../../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Internal%20Bus%20(On-Chip%20Bus)/Internal%20Bus%20(On-Chip%20Bus).md)
↗ [OS Processes & Automata Management (CPU + Main Memory Resource)](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource).md)

↗ [Microcontrollers (MCU, 单片机)](../../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/📌%20Microcontrollers%20(MCU,%20单片机)/Microcontrollers%20(MCU,%20单片机).md)
↗ [Systems on Chip (SoC)](../../Systems%20on%20Chip%20(SoC).md)

↗ [ASM (Assembly Languages)](../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)

↗ [Instruction Execution](../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Instruction%20Execution.md)
↗ [Memory Access & Addressing](../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

↗ [Semiconductor Industry & Companies](../../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Semiconductor%20Industry%20&%20Companies.md)


### Learning Resources
🔥 https://eater.net
- [Build an 8-bit CPU from scratch](https://eater.net/8bit)
	- 🎬 https://space.bilibili.com/3065282/#/channel/detail
- [Build a 6502 computer](https://eater.net/6502)
- [Learn how the Internet works](https://eater.net/inet)
- [Let’s build a video card!](https://eater.net/vga)
- [Learn about error detection](https://eater.net/crc)

📃 https://cpu.land
Putting the “You” in CPU
Curious exactly what happens when you run a program on your computer? Read this article to learn how multiprocessing works, what system calls really are, how computers manage memory with hardware interrupts, and how Linux loads executables.
- [Ch. 0 Intro](https://cpu.land/)
- [Ch. 1 Basics](https://cpu.land/the-basics)
- [Ch. 2 Multitasking](https://cpu.land/slice-dat-time)
- [Ch. 3 Exec](https://cpu.land/how-to-run-a-program)
- [Ch. 4 ELF](https://cpu.land/becoming-an-elf-lord)
- [Ch. 5 Paging](https://cpu.land/the-translator-in-your-computer)
- [Ch. 6 Fork-Exec](https://cpu.land/lets-talk-about-forks-and-cows)
- [Ch. 7 Epilogue](https://cpu.land/epilogue)



## Overview
The central processing unit (CPU), or simply processor, is the engine that interprets (or executes) instructions stored in main memory. At its core is a word-size storage device (or register) called the program counter (PC). At any point in time, the PC points at (contains the address of) some machine-language instruction in main memory.2

From the time that power is applied to the system until the time that the power is shut off, a processor repeatedly executes the instruction pointed at by the program counter and updates the program counter to point to the next instruction. A processor appears to operate according to a very simple instruction execution model, defined by its instruction set architecture. In this model, instructions execute in strict sequence, and executing a single instruction involves performing a series of steps. The processor reads the instruction from memory pointed at by the program counter (PC), interprets the bits in the instruction, performs some simple operation dictated by the instruction, and then updates the PC to point to the next instruction, which may or may not be contiguous in memory to the instruction that was just executed.

The term "**microprocessor**" refers to a single implemented processor and, very often, when there are more than one microprocessor the processor's unit is referred to as the **central processing unit (CPU)**.

> 👀 This section only focuses on processor implementation under von Neumann-based microarchitecture.


### CPU in a von Neumann Model
> [!links]
> ↗ [Computer Bus (Datapath) & Interfaces & Protocols](../../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols.md)
> ↗ [Computer Memory & Storage](../../../Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020230302132111.png)
<small>The Modified von Neumann Architecture</small>

![](../../../../../../../../../Assets/Pics/Screenshot%202023-03-02%20at%204.11.10%20PM.png)
<small>Computer Components: Top-Level View</small>
Figure 1.1 depicts simplified Von Neumann-based computer top-level components. 

One of the processor’s functions is to exchange data with memory. For this purpose, it typically makes use of two internal (to the processor) registers:
- a memory address register (**MAR**), which specifies the address in memory for the next read or write; 
- and a memory buffer register (**MBR**), which contains the data to be written into memory, or receives the data read from memory. 

Similarly:
- an I/O address register (**I/OAR**) specifies a particular I/O device. 
- an I/O buffer register (**I/OBR**) is used for the exchange of data between an I/O module and the processor.


### CPU Layout & Microarchitecture
> [!links]
> ↗ [Computer Architecture](../../../../Computer%20Architecture.md) "microarchitecture =? organization =? CPU =? CPU core"
> 
> ↗ [Computer Processors & Logic Chips (Implementation Part)](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part).md)
> - ↗ [Intel Chips](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Intel%20Chips.md)
> - ↗ [Nvidia Chips](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Nvidia%20Chips.md)
> - ↗ [AMD Chips](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/AMD%20Chips.md)
> - ↗ [Apple Chips (M Series & A Series)](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Apple%20Chips%20(M%20Series%20&%20A%20Series).md)

> [!TIP]
> 🔗 [List of Intel processors](https://en.wikipedia.org/wiki/List_of_Intel_processors)
> 🔗 [List of AMD processors](https://en.wikipedia.org/wiki/List_of_AMD_processors)

![](../../../../../../../../../Assets/Pics/arch%20(1).jpg)
<small>Simplified von Neumann CPU Architecture</small>

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020230304155503.png)
<small>Early von Neumann model as a SISD architecture</small>

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117002800.png)
![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117002004.png)
<small>Die shots of the intel core i9 13900k <br> Image credit: Fritzchen Fritz <br> <a>https://www.pcgamer.com/oh-sorry-i-was-busy-admiring-these-gorgeous-die-shots-of-the-intel-core-i9-13900k/</a></small>

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117003203.png)
![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117003337.png)
<small>The scaling in the Apple M series of SoCs<br><a>https://pbs.twimg.com/media/FCBl1gcWEAUOdRw?format=jpg&name=large</a></small>
#### CPU Core (Core Microarchitecture)
> [!TIP]
> List of Modern CPU Microarchitectures
> 🔗 [List of Intel CPU microarchitectures](https://en.wikipedia.org/wiki/List_of_Intel_CPU_microarchitectures)
> 🔗 [List of AMD CPU microarchitectures](https://en.wikipedia.org/wiki/List_of_AMD_CPU_microarchitectures)

1. Datapath
	1. For other bus look at ↗ [Computer Bus (Datapath) & Interfaces & Protocols](../../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols.md)
2. Control Unit
	1. a module responsible for sequencing operations and making sure the correct data are where they need to be at the correct time.
	2. As in ↗ [Control Unit](📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/Control%20Unit.md) for more.
3. Arithmetic Unit
	1. ↗ [ALU (Arithmetic Logic Unit)](📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/ALU%20(Arithmetic%20Logic%20Unit).md)
4. Register
	1. ↗ [Register](📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/Register.md)

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260115201409.png)
<small>Intel 80286 microarchitecture <br> <a>https://en.wikipedia.org/wiki/Intel_80286</a></small>

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117001248.png)
<small>Intel Raptor Cove CPU core microarchitecture <br> <a>https://en.wikipedia.org/wiki/Golden_Cove#Raptor_Cove</a></small>
#### CPU Infrastructure
> [!links]
> ↗ [MCU (Memory Controller Unit) & IMC (Integrated Memory Controller)](Outside%20CPU%20Core%20(Interconnect%20Topology)/MCU%20(Memory%20Controller%20Unit)%20&%20IMC%20(Integrated%20Memory%20Controller).md)
> ↗ [LLC (Last Level Cache) - L3 (L4)](Outside%20CPU%20Core%20(Interconnect%20Topology)/LLC%20(Last%20Level%20Cache)%20-%20L3%20(L4).md)
> ↗ [Internal Bus (On-Chip Bus)](../../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Internal%20Bus%20(On-Chip%20Bus)/Internal%20Bus%20(On-Chip%20Bus).md)
> 
> ↗ [ASIC (Application-Specific Integrated Circuit)](../../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)
> - ↗ [NPU (Network Processing Unit)](../../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/NPU%20(Network%20Processing%20Unit)/NPU%20(Network%20Processing%20Unit).md)
> - ↗ [Apple Neural Engine](../Accelerators%20(Coprocessors)/Apple%20Neural%20Engine.md)
>
> ↗ [GPU (Graphics Processing Unit)](../Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
> ↗ [Systems on Chip (SoC)](../../Systems%20on%20Chip%20(SoC).md)

> 🤖 Gemini 3.0 pro 
> https://gemini.google.com/share/ebedeb833ded
> 
> "In a multicore CPU, there are multiple cores, and each core itself is a microarchitecture. I wonder, then, what is the overall layout of that CPU called? the organization of CPU?"

When we talk about the design of the individual core (how it does math, how it predicts branches), we call that the **Core Microarchitecture**.

But you are asking about the "stuff" outside the cores—how the cores are arranged, how they talk to each other, and how they share memory. ==The specific industry term for this overall layout is the **"Uncore"** (Intel terminology) or the **"Data Fabric"** (AMD terminology)==.

==In academic or general engineering terms, this is often called the **Network-on-Chip (NoC)** or the **Interconnect Topology**.==

Here is how the CPU is actually organized.

**The Distinction: Core vs. Uncore**
Think of a multicore CPU as a **gated community (The Chip)**.
- **The Cores (Core Microarchitecture):** These are the **Houses**.
    - Inside the house, you have a kitchen, bedroom, and bathroom (ALU, Registers, L1 Cache).
    - The design of the house (is it a Victorian or a Modernist box?) is the _Core Microarchitecture_ (e.g., "Golden Cove").
- **The Uncore (The Organization):** This is the **Infrastructure**.
    - This includes the **Roads** connecting the houses (The Ring Bus or Mesh).
    - The **Community Park** shared by everyone (L3 Cache).
    - The **Gatehouse** that lets delivery trucks in and out (Memory Controller / PCIe lanes).
The "overall layout" you are asking about is the design of those roads and utilities.


**Common Layouts (Topologies)**
Just like cities have different road layouts, CPUs have different ways of connecting cores. This "Interconnect Architecture" dictates how fast core 1 can talk to core 8.
- A. The Ring Bus (The Subway Line)
	- **Layout:** The cores are arranged in a circle. A data "train" constantly loops around stopping at each core.
	- **Pros:** Simple, fast for small numbers of cores (up to ~10).
	- **Cons:** If you have 20 cores, it takes too long for the train to go all the way around.
	- **Where used:** Most consumer CPUs (Intel Core i7, i5).
- B. The Mesh (The City Grid)
	- **Layout:** Cores are arranged in rows and columns. Data travels like a taxi in Manhattan (up one block, over two blocks).
	- **Pros:** Highly scalable. You can have 100 cores without traffic jams.
	- **Cons:** More complex to build.
	- **Where used:** High-end Server Chips (Intel Xeon, massive supercomputers).
- C. Crossbar (The Telephone Switchboard)
	- **Layout:** Every core has a direct wire to every other core.
	- **Pros:** Instant communication.
	- **Cons:** The amount of wiring explodes as you add cores. Physically impossible for large CPUs.
	- **Where used:** Only in very small chips (4-8 cores) or inside the GPU.


**The Modern Era: Chiplets and "Fabric"**
Recently (started by AMD with Ryzen), the definition of "Layout" changed again.

Instead of printing the whole city on one piece of silicon (Monolithic), they started printing the "Houses" (Cores) on separate tiny chips and the "Roads" (Uncore) on a big central hub chip.
- **AMD calls this "Infinity Fabric":** It is a high-speed communication protocol that acts as the "layout" connecting different physical pieces of silicon together.


### Word Length & Addressing Space
> [!links]
> ↗ [Memory Access & Addressing](../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)
> ↗ [Address Space & Memory Layout](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)

> 📖 《汇编语言》 王爽

概括地讲，16位结构 (16 位机、字长为 16位等常见说法与16位结构的含义相同) 描述了一个CPU 具有下面几方面的结构特性。
- 运算器一次最多可以处理16位的数据;
- 寄存器的最大宽度为16位:
- 寄存器和运算器之间的通路为16位。

8086是16位结构的CPU，这也就是说，在8086内部，能够一次性处理、传输、暂时存储的信息的最大长度是16位的。内存单元的地址在送 上地址总线之前，必须在CPU中处理、传输、暂时存放 ，对于16位CPU一次性处理、传输、暂时存储16位的地址。

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240327200246.png)
<small>图1-7计算机中的总线连接示意图<br><a>https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html</a></small>



## Instruction Execution
![](../../../../../../../../../Assets/Pics/Screenshot%202023-03-03%20at%209.05.51%20AM.png)

> Detailed info at ↗ [Instruction Execution](../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Instruction%20Execution.md)


### The Separation of Instruction and Data
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [Memory Access & Addressing](../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

This is decided by the nature of turing machine and von neumann architecture.


### Interrupts
![](../../../../../../../../../Assets/Pics/Screenshot%202023-03-03%20at%209.10.54%20AM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-03-03%20at%209.15.46%20AM.png)

More at ↗ [Processor /Interrupts](../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)
or ↗ [ASM /Interrupts](../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/⚡️%20ASM%20Advance/Interrupts/Interrupts.md)



## 🎯 Performance Metrics & Specs
### Clock 
>⚠ 
>Generally, when we mention the clock, we are referring to the **system clock** or the **master clock** that regulates the CPU and other components.
>
>However, certain buses also have their own clocks. **Bus clocks** are one of them. Bus clocks are usually slower than CPU clocks, causing bottleneck problems.
>
>↗ [Computer Bus (Datapath) & Interfaces & Protocols](../../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols.md)
#### CPU Clock Basics
#### 📈 Minimal Clock Cycle Time
Most machines are synchronous: There is a master clock signal, which ticks (changing from 0 to 1 to 0 and so on) at regular intervals. Registers must wait for the clock to tick before new data can be loaded. 

It seems reasonable to assume that if we speed up the clock, the machine will run faster. **However, there are limits on how short we can make the clock cycles**. When the clock ticks and new data are loaded into the registers, the register outputs are likely to change. These changed output values must propagate through all the circuits in the machine until they reach the input of the next set of registers, where they are stored. The clock cycle must be long enough to allow these changes to reach the next set of registers. 

If the clock cycle is too short, we could end up with some values not reaching the registers. This would result in an **inconsistent state** in our machine, which is definitely something we must avoid.

Therefore, the **minimum clock cycle time** must be at least as great as the **maximum propagation delay** of the circuit, from each set of register outputs to register inputs.

>  What if we “shorten” the distance between registers to shorten the propagation delay?
>  
>  We could do this by adding registers between the output registers and the corresponding input registers. But recall that registers cannot change values until the clock ticks, so we have, in effect, increased the number of clock cycles. For example, an instruction that would require two clock cycles might now require three or four (or more, depending on where we locate the additional registers).
#### 📉 Maximal Clock Cycle Time
System components have defined performance bounds, indicating the maximum time required for the components to perform their functions. Manufacturers guarantee that their components will run within these bounds in the most extreme circumstances. When we connect all of the components together serially, where one component must complete its task before another can function properly, it is important to be aware of these performance bounds so we are able to synchronize the components properly. 

However, many people push the bounds of certain system components in an attempt to improve system performance. Overclocking is one method people use to achieve this goal.
##### Overclocking
Although many components are potential candidates, one of the most popular components for overclocking is the CPU. The basic idea is to run the CPU at clock and/or bus speeds above the upper bound specified by the manufacturer.

Although this can increase system performance, one must be careful not to create system timing faults or, worse yet, overheat the CPU. The system bus can also be overclocked, which results in overclocking the various components that communicate via the bus. Overclocking the system bus can provide considerable performance improvements, but can also damage the components that use the bus or cause them to perform unreliably.
#### Clock Speed 🆚 CPU Time (Processing Time)
Most machine instructions require one or two clock cycles, but some can take 35 or more. We present the following formula to relate seconds to cycles:
$$CPU\ TIME = \frac{seconds}{programs} = \frac{instructions}{programs} \times \frac{average\ cycles}{instructions} \times \frac{seconds}{cycles}$$

i.e.
$$CPU\ TIME = \overline{instructions} \times \overline{cycles} \times  \overline{seconds}$$

It is important to note that the architecture of a machine has a large effect on its performance. ==Two machines with the same clock speed do not necessarily execute instructions in the same number of cycles.==



## 🎯 CPU Manufacture
### CPU Manufacturing Technologies


### CPU Manufacturers



## Ref
[👍 How To Make A CPU - A Simple Picture Based Explanation]: https://blog.robertelder.org/how-to-make-a-cpu/

The purpose of this article is to explain how to make a CPU out of rocks and sand as fast as possible without using too many words.  As the world of proprietary hardware and software crushes in around us, we risk losing the ability to make things for ourselves as individuals.  It is for this reason that I felt compelled to learn how one could hypothetically make their own integrated circuits by themself.  Skip to the end of this article for a few more words on this subject and a disclaimer.

[中央处理器(CPU)制造商 | baidu]: https://baike.baidu.com/item/中央处理器%28CPU%29制造商/1690497

[如何动手做出一个 CPU，很简单]: https://mp.weixin.qq.com/s/6WnxSF5QfVZ9pdcofYPKhg

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240329161411.png)

【顶级DIY！国外牛人在Excel中构建出16bit CPU：主频3Hz、128KB RAM】 https://www.bilibili.com/video/BV1m5411k7ny/?share_source=copy_web
