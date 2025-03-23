# Computer Microarchitectures (Computer Organization) & von Neumann Model

[TOC]



## Res
### Related Topics
↗ [Classical Electromagnetism](../../../Hardware%20&%20EE%20Related%20Theories/🍏%20Other%20EE%20Theories%20Related%20with%20CS/Classical%20Electromagnetism.md)
↗ [Digital (Logic) Electronics Foundations](../../../Hardware%20&%20EE%20Related%20Theories/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
↗ [Theory of Computation](../../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/🤼‍♀️%20Mathematical%20Logics/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
↗ [CPU (Central Processing Unit)](🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
↗ [Motherboard & Mainboard](Motherboard%20&%20Mainboard.md)

↗ [Firmware and Computer (OS) Booting](../../Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)
↗ [Computer Bootstrap (Boot)](../../Firmware%20and%20Computer%20(OS)%20Booting/🌽%20Computer%20Bootstrap%20(Boot)/Computer%20Bootstrap%20(Boot).md)

↗ [Devices Schematic Diagram & Teardown](../../../Hardware%20&%20EE%20Related%20Theories/🛠️%20Computer%20System%20Implementations/Computer%20Motherboards/Devices%20Schematic%20Diagram%20&%20Teardown.md)



## Overview
![](../../../../../Assets/Pics/Pasted%20image%2020230302132847.png)
<small>Microarchitecture in computer system hierarchy</small>

> 🔗 https://en.wikipedia.org/wiki/Microarchitecture

In computer engineering, ==**microarchitecture**, also called **computer organization**== and sometimes abbreviated as **µarch** or **uarch**, is the way a given [instruction set architecture](https://en.wikipedia.org/wiki/Instruction_set_architecture "Instruction set architecture") (ISA) is implemented in a particular processor. A given ISA may be implemented with different microarchitectures; implementations may vary due to different goals of a given design or due to shifts in technology.

[Computer architecture](https://en.wikipedia.org/wiki/Computer_architecture "Computer architecture") is the combination of microarchitecture and instruction set architecture.

> **微架构（Microarchitecture）是ISA在处理器的实现**，描述处理器是怎样实现功能的，其本质就是一系列硬件实现以满足各种指令集。而Microarchitecture是ISA的具体实现，而且对于同一个ISA，可以使用不同技术的微架构 ，比如单周期、多周期以及流水线。比如说x86 ISA有286，386，486，Pretium，Pretium Pro等实现。目前，微架构涉及以下部分：**流水线、并行、存储系统分层结构**.



## Microarchitecture Models
### 🎯 Von Neumann & Derivative Models
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

![](https://files.mdnice.com/user/3257/fc2ff093-b21a-499f-b30a-c936e874bf67.png)
<small>Image source from wikipedia</small>

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
#### 1️⃣ Arithmetic Logic Unit
#### 2️⃣ Control Unit
#### 3️⃣ Memory Unit
#### 3️⃣ Input /Output Unit


### 🎯 Non-Von Neumann Models
More is at ↗ [Non-von Neumann Based Microarchitectures](🤵%20Non-von%20Neumann%20Based%20Microarchitectures/Non-von%20Neumann%20Based%20Microarchitectures.md).
#### Harvard Based Models
![](../../../../../Assets/Pics/Pasted%20image%2020230302132344.png)



## Microarchitecture Hardware Designs
### Developments of Von Neumann Microarchitecture Designs
> 🔗 https://foxsen.github.io/archbase/计算机组成原理和结构.html#计算机系统硬件结构发展
#### 1️⃣ CPU-GPU-北桥-南桥四片结构
![|300](../../../../../Assets/Pics/Pasted%20image%2020240414145108.png)

#### 2️⃣ CPU-北桥-南桥三片结构
![|300](../../../../../Assets/Pics/Pasted%20image%2020240414145124.png)

#### 3️⃣ CPU-弱北桥-南桥三片结构
![|300](../../../../../Assets/Pics/Pasted%20image%2020240414145139.png)
#### 4️⃣ CPU-南桥两片结构
![|300](../../../../../Assets/Pics/Pasted%20image%2020240414145150.png)

#### 5️⃣ SoC单片结构
↗ [Systems on Chip (SOC)](Systems%20on%20Chip%20(SOC).md)

![|300](../../../../../Assets/Pics/Pasted%20image%2020240414144958.png)



### non-Von Neumann Microarchitecture Designs
↗ [Non-von Neumann Based Microarchitectures](🤵%20Non-von%20Neumann%20Based%20Microarchitectures/Non-von%20Neumann%20Based%20Microarchitectures.md)



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
