# Computer Microarchitectures (Computer Organization) & von Neumann Model

[TOC]



## Res
### Related Topics
↗ [Theory of Computation](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
- ↗ [Models of Computation & Abstract Machines](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)

↗ [EE Related Theories & Hardware Implementation](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/EE%20Related%20Theories%20&%20Hardware%20Implementation.md)
- ↗ [Classical Electromagnetism](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🍏%20Other%20EE%20Theories%20Related%20with%20CS/Classical%20Electromagnetism.md)
- ↗ [Digital (Logic) Electronics Foundations](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
- ↗ [Computer Implementations, Teardown & Repairs](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Implementations,%20Teardown%20&%20Repairs.md)
	- ↗ [Computer Processors & Logic Chips (Implementation Part)](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part).md)
- ↗ [Auxiliary Hardware & Peripherals Implementations](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Auxiliary%20Hardware%20&%20Peripherals%20Implementations.md)

↗ [HDL (Hardware Definition Languages)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/Embedded%20Programming%20&%20Software%20Development/Languages/HDL%20(Hardware%20Definition%20Languages)/HDL%20(Hardware%20Definition%20Languages).md)

↗ [Computer Processors & Logic Chips (Theory Part)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part).md)
- ↗ [CPU (Central Processing Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
↗ [Embedded Hardwares & Chips](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Embedded%20Hardwares%20&%20Chips.md)

↗ [Motherboard & Mainboard](Motherboard%20&%20Mainboard.md)

↗ [Firmware and Computer (OS) Booting](../../Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)
↗ [Computer Bootstrapping (Booting)](../../Firmware%20and%20Computer%20(OS)%20Booting/🌽%20Computer%20Bootstrapping%20(Booting)/Computer%20Bootstrapping%20(Booting).md)


### Other Resources
https://en.wikichip.org/wiki/list_of_microarchitectures#Intel
list of microarchitectures
Below is a **list of [microarchitectures](https://en.wikichip.org/wiki/microarchitectures "microarchitectures")** organized by company, alphabetized.
- [AMD](https://en.wikichip.org/wiki/list_of_microarchitectures#AMD)
- [Apple](https://en.wikichip.org/wiki/list_of_microarchitectures#Apple)
- [ARM Holdings](https://en.wikichip.org/wiki/list_of_microarchitectures#ARM_Holdings)
- [Cavium](https://en.wikichip.org/wiki/list_of_microarchitectures#Cavium)
- [IBM](https://en.wikichip.org/wiki/list_of_microarchitectures#IBM)
- [Intel](https://en.wikichip.org/wiki/list_of_microarchitectures#Intel)
- [Loongson](https://en.wikichip.org/wiki/list_of_microarchitectures#Loongson)
- [Marvell](https://en.wikichip.org/wiki/list_of_microarchitectures#Marvell)
- [Nvidia](https://en.wikichip.org/wiki/list_of_microarchitectures#Nvidia)
- [Qualcomm](https://en.wikichip.org/wiki/list_of_microarchitectures#Qualcomm)
- [Samsung](https://en.wikichip.org/wiki/list_of_microarchitectures#Samsung)
- [See also](https://en.wikichip.org/wiki/list_of_microarchitectures#See_also)


https://github.com/akhin/microarchitecture-cheatsheet/blob/main/README.md
Modern CPUs are very complex beasts and there are so much information about them across different departments , therefore they can be overwhelming. Microarchitecture cheat sheet aims to provide an organised collection of overviews about X86 CPUs that developers shall have on their mind when thinking about performance : (Last update date : 02 Jan, 2026)
![microarchitecture-cheatsheet](../../../../../Assets/Cheat_Sheets/microarchitecture-cheatsheet.pdf)



## Overview
![](../../../../../Assets/Pics/Pasted%20image%2020230302132847.png)
<small>Microarchitecture in computer system hierarchy</small>

> 🔗 https://en.wikipedia.org/wiki/Microarchitecture

In computer engineering, ==**microarchitecture**, also called **computer organization**== and sometimes abbreviated as **µarch** or **uarch**, ==is the way a given ↗ [Instruction Set Architecture (ISA)](../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md) is implemented in a particular processor==. A given ISA may be implemented with different microarchitectures; implementations may vary due to different goals of a given design or due to shifts in technology.

[Computer architecture](https://en.wikipedia.org/wiki/Computer_architecture "Computer architecture") is the combination of microarchitecture and instruction set architecture.

![](../../../../../Assets/Pics/Pasted%20image%2020260115200754.png)
<small>Diagram of the Intel Core 2  microarchitecture: an example of microarchitecture <br> <a>https://en.wikipedia.org/wiki/Core_\(microarchitecture\) "Core (microarchitecture)"</a></small>

> **微架构（Microarchitecture）是ISA在处理器的实现**描述处理器是怎样实现功能的，其本质就是一系列硬件实现以满足各种指令集。而Microarchitecture是ISA的具体实现，而且对于同一个ISA，可以使用不同技术的微架构 ，比如单周期、多周期以及流水线。比如说x86 ISA有286，386，486，Pretium，Pretium Pro等实现。目前，微架构涉及以下部分：**流水线、并行、存储系统分层结构**.

> 🔗 https://en.wikichip.org/wiki/microarchitecture

The [instruction set architecture](https://en.wikichip.org/w/index.php?title=instruction_set_architecture&action=edit&redlink=1 "instruction set architecture (page does not exist)") (ISA) can be seen as a high-level contract between the architect and the programmer. It sets out to define how the machine behaves with respect to correctness of program execution. The ISA, however, does not concern itself with the intimate details of how the machine gets it done. To some degree it can be seen as [black box](https://en.wikichip.org/w/index.php?title=black_box&action=edit&redlink=1 "black box (page does not exist)") or a [virtual machine](https://en.wikichip.org/w/index.php?title=virtual_machine&action=edit&redlink=1 "virtual machine (page does not exist)"). This is where the microarchitecture fills in the details. The microarchitecture describes exactly how the behavior described by the ISA is done. The microarchitecture defines how every single [digital signal](https://en.wikichip.org/w/index.php?title=digital_signal&action=edit&redlink=1 "digital signal (page does not exist)") is routed around and manipulated to achieve the desired result. The design of a microarchitecture can range from a very simple to highly complex depending on the outcome the engineers hope to achieve.

On a high level, the microarchitecture of a machine is often represented as a diagram or set of diagrams (typically in the form of [block diagrams](https://en.wikichip.org/w/index.php?title=block_diagram&action=edit&redlink=1 "block diagram (page does not exist)")) that describes the relations and interconnections of the various microarchitectural elements. These elements can range from individual electronic components such as [transistors](https://en.wikichip.org/w/index.php?title=transistors&action=edit&redlink=1 "transistors (page does not exist)") and [resistors](https://en.wikichip.org/w/index.php?title=resistors&action=edit&redlink=1 "resistors (page does not exist)") to more complex units such as [register files](https://en.wikichip.org/w/index.php?title=register_file&action=edit&redlink=1 "register file (page does not exist)") and [multipliers](https://en.wikichip.org/w/index.php?title=multipliers&action=edit&redlink=1 "multipliers (page does not exist)") to complete elements such as [arithmetic logic units](https://en.wikichip.org/wiki/arithmetic_logic_unit "arithmetic logic unit") (ALUs) and [floating point units](https://en.wikichip.org/w/index.php?title=floating_point_unit&action=edit&redlink=1 "floating point unit (page does not exist)") (FPUs). Each of those microarchitectural elements are in turn represented by detailed [schematics](https://en.wikichip.org/w/index.php?title=schematic&action=edit&redlink=1 "schematic (page does not exist)") describing the interconnections of the [logic gates](https://en.wikichip.org/wiki/logic_gates "logic gates"). Finally, [circuit diagrams](https://en.wikichip.org/w/index.php?title=circuit_diagram&action=edit&redlink=1 "circuit diagram (page does not exist)") are used to describe the connections of the transistors used to represent the logic gates schematic.

Modern microarchitectures are described using [synthesizable](https://en.wikichip.org/w/index.php?title=synthesizable&action=edit&redlink=1 "synthesizable (page does not exist)") [HDLs](https://en.wikichip.org/w/index.php?title=hardware_description_language&action=edit&redlink=1 "hardware description language (page does not exist)") such as [Verilog](https://en.wikichip.org/wiki/Verilog "Verilog") or [VHDL](https://en.wikichip.org/wiki/VHDL "VHDL"). The description of the circuit is known as [RTL design](https://en.wikichip.org/w/index.php?title=RTL_design&action=edit&redlink=1 "RTL design (page does not exist)"). [Register Transfer Level](https://en.wikichip.org/w/index.php?title=Register_Transfer_Level&action=edit&redlink=1 "Register Transfer Level (page does not exist)") (RTL) can be efficiently described using HDL. Final RTL designs are then passed over for verification and then [synthesis](https://en.wikichip.org/w/index.php?title=synthesis&action=edit&redlink=1 "synthesis (page does not exist)") - converting the RTL into optimized gate level [netlist](https://en.wikichip.org/w/index.php?title=netlist&action=edit&redlink=1 "netlist (page does not exist)"). Those optimized netlists are then either [mapped](https://en.wikichip.org/w/index.php?title=place_%26_route&action=edit&redlink=1 "place & route (page does not exist)") onto [programmable devices](https://en.wikichip.org/w/index.php?title=programmable_devices&action=edit&redlink=1 "programmable devices (page does not exist)") such as [FPGAs](https://en.wikichip.org/w/index.php?title=FPGA&action=edit&redlink=1 "FPGA (page does not exist)") or get converted into geometric representations in what's known as the physical design stage.


### Computer Organization = Microarchitecture ?
↗ [Computer Architecture](../Computer%20Architecture.md)



## Microarchitecture Models & Designs
Microarchitecture can refer to different objects, depending on the contexts. It can refer to the design of microprocessor's core, or the organization of the whole motherboard. According to difference definition of microprocessor, microprocessor can refer to the CPU only, or all other micro logic chips (like GPU). In this sense, the referring of the term microarchitecture can be further refined. 

Just so many mixed usages of different terms!


### CPU Core Organization
> [!links]
> ↗ [Microprocessor & Microprocessors Unit (MPU)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Microprocessor%20&%20Microprocessors%20Unit%20(MPU).md)
> - ↗ [CPU (Central Processing Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
> - ↗ [GPU (Graphics Processing Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
> - ↗ [DPU (Data Processing Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/DPU%20(Data%20Processing%20Unit)/DPU%20(Data%20Processing%20Unit).md)
>
>↗ [Multicore Processor and Multiprocessors](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multicore%20Processor%20and%20Multiprocessors.md) 
>- ↗ [Multicore Processor Units](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multicore%20Processor%20Units/Multicore%20Processor%20Units.md)
>- ↗ [Multiprocessor Architectures & Parallel Computing](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Multiprocessor%20Architectures%20&%20Parallel%20Computing.md)
>
>↗ [Embedded Hardwares & Chips](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Embedded%20Hardwares%20&%20Chips.md) 
>↗ [ASIC (Application-Specific Integrated Circuit)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)
>- ↗ [Google TPU (Tensor Processing Unit)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Full-Customized%20ASIC/Google%20TPU%20(Tensor%20Processing%20Unit)/Google%20TPU%20(Tensor%20Processing%20Unit).md)
#### 🎯 Von Neumann Based Models (Stored-Program Computer)
> [!links]
> ↗ [Computer Processors & Logic Chips (Theory Part)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part).md)
> ↗ [Microprocessor & Microprocessors Unit (MPU)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Microprocessor%20&%20Microprocessors%20Unit%20(MPU).md)

**冯·诺依曼架构（Von Neumann Architecture）** 是冯诺依曼参与第一台电子计算机ENIAC的设计并与团队讨论下一代计算机EDVAC的结构时总结而成的，因此冯诺依曼结构严格来说并不是由冯诺依曼独自完成的，而是他首先发表（因为这事，冯诺依曼与EDVAC团队决裂，当然，这是后话了）。 

冯·诺依曼架构将通用计算机定义为以下 3 个基本原则：
1. **采用二进制：** 指令和数据均采用二进制格式；
2. **存储程序：** 一个计算机程序，不可能只有一条指令，而是由成千上万条指令组成的。指令和数据均存储在存储器中，而不是早期的插线板中，计算机按需从存储器中取指令和取数据；
3. **计算机由 5 个硬件组成：** 运算器、控制器、存储器、输入设备和输出设备。在最开始的计算机中，五个部件是围绕着运算器运转的，这使得存储器和 I/O 设备之间的数据传送也需要经过运算器。 **而现代计算机中，五个部件是围绕着存储器运转的，这使得存储器和 I/O 设备可以直接完成数据传送，而不需要经过 CPU。**

> 更加细致地说冯诺依曼结构
> 1. 采用存储程序方式，指令和数据不加区别混合存储在同一个存储器中，即指令与数据在内存中主要通过控制器的指针进行操作（例如像X86里的SP,IP等寄存器），且在每个内存段中包含了读写权限等信息。
> 2. 存储器是按地址访问的线性编址的一维结构，每个单元的位数是固定的。在我们编程时，一般是将内存作为一段一段的使用，而对于计算机而言，其实就是一条直线。
> 3. 指令由操作码和地址组成。操作码指明本指令的操作类型,地址码指明操作数和地址。操作数本身无数据类型的标志，它的数据类型由操作码确定。
> 4. 通过执行指令直接发出控制信号控制计算机的操作。指令在存储器中按其执行顺序存放，由指令计数器指明要执行的指令所在的单元地址。指令计数器只有一个，一般按顺序递增，但执行顺序可按运算结果或当时的外界条件而改变。
> 5. 以运算器为中心，I/O设备与存储器间的数据传送都要经过运算器。
> 6. 数据以二进制表示，大大提高了存储效率。

---
The **von Neumann architecture** -- also known as the **von Neumann model** or **Princeton architecture** --- is a computer architecture based on a 1945 description by [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann), and by others, in the _[First Draft of a Report on the EDVAC](https://en.wikipedia.org/wiki/First_Draft_of_a_Report_on_the_EDVAC "First Draft of a Report on the EDVAC")_

The document describes a design architecture for an electronic digital computer with these components:
- A processing unit with both an [arithmetic logic unit](https://en.wikipedia.org/wiki/Arithmetic_logic_unit "Arithmetic logic unit") and [processor registers](https://en.wikipedia.org/wiki/Processor_register "Processor register")
- A control unit that includes an [instruction register](https://en.wikipedia.org/wiki/Instruction_register "Instruction register") and a [program counter](https://en.wikipedia.org/wiki/Program_counter "Program counter")
- Memory that stores data and instructions
- External mass storage
- Input and output mechanisms

Today’s version of the **stored-program machine architecture (von neumann models here)** satisfies at least the following characteristics:
1. Consists of three hardware systems: 
	1. a central processing unit (CPU) with 
		1. a 1️⃣ **control unit**;
		2. an 2️⃣ **arithmetic logic unit (ALU)**;
		3. registers (small storage areas);
		4. a program counter; 
	2. a 3️⃣ **main memory system**, which holds programs that control the computer’s operation; 
	3. an 4️⃣5️⃣ **I/O system**.
	4. ![](https://files.mdnice.com/user/3257/fc2ff093-b21a-499f-b30a-c936e874bf67.png)
	5. <small>Image source from wikipedia</small>
2. Has the capacity to carry out **sequential instruction processing**.
3. Contains a **single path (bus system)**, either physically or logically, between the main memory system and the control unit of the CPU, forcing alternation of instruction and execution cycles. This single path is often referred to as the ==von Neumann bottleneck==.

> 要从根本上解决**冯·诺依曼瓶颈**，还是只能重新构建一套新的计算机体系，例如生物计算机、量子计算机。不过，目前它们都还处在非常原始的阶段。现代计算机体系只能采用优化策略来减弱冯·诺依曼瓶颈的影响，这些内容我们后面都会提到，例如：
> 1. 增加一个位于 CPU 和主内存之间的高速缓存
> 2. 将指令缓存和数据缓存分离
> 3. CPU 分支预测
> 4. 将存储器集成到 CPU 芯片内部，以减少内存访问（SoC 芯片）

![](../../../../../../Assets/Pics/Pasted%20image%2020230302132111.png)
<small>The Modified von Neumann Architecture</small>

![](../../../../../../Assets/Pics/Screenshot%202023-03-02%20at%204.11.10%20PM.png)

The term "von Neumann architecture" has evolved to refer to any **stored-program computer** in which an **instruction fetch** and a **data operation** cannot occur at the same time (since they share a common bus). This is referred to as the [von Neumann bottleneck](https://en.wikipedia.org/wiki/Von_Neumann_architecture#Von_Neumann_bottleneck), which often limits the performance of the corresponding system

The design of a von Neumann architecture machine is simpler than in a [Harvard architecture](https://en.wikipedia.org/wiki/Harvard_architecture "Harvard architecture") machine -- which is also a stored-program system, yet has one dedicated set of address and data buses for reading and writing to memory, and another set of address and data buses to fetch instructions.

![](../../../../../Assets/Pics/Pasted%20image%2020260115201409.png)
<small>Intel 80286 microarchitecture <br> <a>https://en.wikipedia.org/wiki/Intel_80286</a></small>

↗ [Microprocessor & Microprocessors Unit (MPU)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Microprocessor%20&%20Microprocessors%20Unit%20(MPU).md)
↗ [CPU (Central Processing Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
- ↗ [ALU (Arithmetic Logic Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/ALU%20(Arithmetic%20Logic%20Unit).md)
- ↗ [Control Unit](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/Control%20Unit.md)
- Memory Unit
	- ↗ [MMU (Memory Management Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/MMU%20(Memory%20Management%20Unit).md)
- Input /Output Unit
	- ↗ [MCU (Memory Controller Unit) & IMC (Integrated Memory Controller)](🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/Outside%20CPU%20Core%20(Interconnect%20Topology)/MCU%20(Memory%20Controller%20Unit)%20&%20IMC%20(Integrated%20Memory%20Controller).md)
#### 🎯 Non-Von Neumann Models
> [!links]
> ↗ [Non-von Neumann Based Microarchitectures](🤵%20Non-von%20Neumann%20Based%20Microarchitectures/Non-von%20Neumann%20Based%20Microarchitectures.md).
##### Harvard Based Models
> 🤨 Many modern general-purpose computers use a modified version of the Harvard architecture in which they have **separate pathways for data and instructions but not separate storage**. (指令和数据存一块，但是用单独的总线分别取)
> 
> 🧐 Pure Harvard architectures are typically used in **microcontrollers** (an entire computer system on a chip), such as those found in embedded systems, as in appliances, toys, and cars. (指令和数据分开存，分开取)

![](../../../../../Assets/Pics/Pasted%20image%2020230302132344.png)
<small>Simplified Harvard Based Architecture Diagram</small>

![](../../../../../Assets/Pics/Pasted%20image%2020230302132205.png)
<small>Slight Dive into a Harvard Based Architecture Model</samll>
##### More Architecture Models!
To list a few:
1. **Neural networks** (using ideas from models of the brain as a computing paradigm) implemented in silicon, cellular automata, cognitive computers (machines that learn by experience rather than through programming, e.g., IBM’s SyNAPSE computer, a machine that models the human brain);
2. **Quantum computation** (a combination of computing and quantum physics)
3. **Dataflow computation**;
4. **Parallel computers**. 


### Motherboard Organization
↗ [Motherboard & Mainboard](Motherboard%20&%20Mainboard.md)



## Microarchitecture Technologies
### Pipeline Processing


### Parallel Processing


### Hierarchical Storage 
![](../../../../../../Assets/Pics/Pasted%20image%2020230301122408.png)
<small>Simplified Computer Memory Hierarchy </small>



## Ref
[漫谈计算机架构]: https://segmentfault.com/a/1190000014885126
[Microarchitecture]: https://en.wikipedia.org/wiki/Microarchitecture#See_also
[Flynn's Taxonomy]: https://en.wikipedia.org/wiki/Flynn%27s_taxonomy

[关于冯·诺依曼结构]: https://starashzero.github.io/swi-homework/lab04.html
[一套用了 70 年的计算机架构 —— 冯·诺依曼架构]: https://www.mdnice.com/writing/ba4b3af843a84652adef7fae7380da07

[Von Neumann Architecture | Wikipedia]: https://en.wikipedia.org/wiki/Von_Neumann_architecture

[👍 计算机体系结构-01 - 指令集体系结构、微体系结构简介]: https://blog.csdn.net/qq_36393978/article/details/128647553
