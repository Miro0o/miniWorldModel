# Computer Architecture Overview

[TOC]



## Res
### Related Topics




## Computer Architecture Standards Organizations
### IEEE (Institute of Electrical and Electronics Engineers)


### ITU (International Telecommunications Union)


### ISO


### Local Representatives
ANSI, American National Standards Institute
BSI, British Standards Institution
CEN, Comité Européen de Normalisation



## Historical Development of Computer Architecture Design
↗ [History of Computer Evolution](History%20of%20Computer%20Evolution.md)



## 🪜 Computer Architecture Hierarchy
![computer_architecture.excalidraw | 800](../../../../../Assets/Illustrations/Computer%20System/computer_architecture_and_computer_science.excalidraw.md)
<small>Computer Architecture Hierarchy</small>

![](../../../../../Assets/Pics/Screenshot%202023-06-25%20at%201.14.53%20AM.png)

**Level 6: The User Level(用户层）**
- ﻿﻿Program execution and user interface level.
- ﻿﻿The level with which we are most familiar.

**Level 5: High-Level Language Level（高级语言层）**
• The level with which we interact when we write programs in languages such as Python, C, Pascal, Lisp, and Java.

**Level 4: Assembly Language Level(汇编语言层）**
• Acts upon assembly language produced from Level 5, as well as instructions programmed directly at this level.

**Level 3: System Software Level(系统软件层）**
- ﻿﻿Controls executing processes on the system.
- ﻿﻿Protects system resources.
- ﻿﻿Assembly language instructions often pass through Level 3 without modification.

**Level 2: Machine Level**
- ﻿﻿Also known as the Instruction Set Architecture (ISA) Level.
- ﻿﻿Consists of instructions that are particular to the architecture of the machine.
- ﻿﻿Programs written in machine language need no compilers, interpreters, or assemblers（汇编程序）

**Level 1: Control Level（控制层）**
- ﻿﻿A control unit decodes and executes instructions and moves data through the system.
- ﻿﻿Control units can be microprogrammed or hardwired（硬接线的）
- ﻿﻿A microprogram is a program written in a low-level language that is implemented by the hardware.
- ﻿﻿Hardwired control units consist of hardware that directly executes machine instructions.

**Level 0: Digital Logic Level (数字逻辑层)**
- ﻿﻿This level is where we find digital circuits (the chips).
- ﻿﻿Digital circuits consist of gates and wires.
- ﻿﻿These components implement the mathematical logic of all other levels.



## 📜 ISA

> 🔗 Check out more at ↗ [Instruction Set Architecture (ISA) & Processor Architecture](../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md).



## 🗿 Microarchitecture
> ↗ [Computer Microarchitectures (Computer Organization) & von Neumann Model](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md) for more!


### Computer Microarchitecture Models
Control units can be designed in one of two ways: They can be hardwired or they can be microprogrammed. These implement the ISA from design level to real physical machine. 

> 🔗 Summed at [Computer Microarchitectures (Computer Organization) & von Neumann Model](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md)
#### 1️⃣ Von Neumann Based 

> 储存-执行模型
> 指令和数据存一块，同一条总线取

![](../../../../../Assets/Pics/Pasted%20image%2020230302132111.png)
<small>The Modified von Neumann Architecture</small>

More at ↗ [Computer Microarchitectures (Computer Organization) & von Neumann Model](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md)
#### 2️⃣ Harvard Based

> 🤨 Many modern general-purpose computers use a modified version of the Harvard architecture in which they have **separate pathways for data and instructions but not separate storage**. (指令和数据存一块，但是用单独的总线分别取)
> 
> 🧐 Pure Harvard architectures are typically used in **microcontrollers** (an entire computer system on a chip), such as those found in embedded systems, as in appliances, toys, and cars. (指令和数据分开存，分开取)

![](../../../../../Assets/Pics/Pasted%20image%2020230302132344.png)
<small>Simplified Harvard Based Architecture Diagram</small>

![](../../../../../Assets/Pics/Pasted%20image%2020230302132205.png)
<small>Slight Dive into a Harvard Based Architecture Model</samll>
#### 🙈 More Architecture Models!
To list a few:
1. **Neural networks** (using ideas from models of the brain as a computing paradigm) implemented in silicon, cellular automata, cognitive computers (machines that learn by experience rather than through programming, e.g., IBM’s SyNAPSE computer, a machine that models the human brain);
2. **Quantum computation** (a combination of computing and quantum physics)
3. **Dataflow computation**;
4. **Parallel computers**. 


### More About Computer Microarchitectures!
At ↗ [Computer Microarchitectures (Computer Organization) & von Neumann Model](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md)



## Computing in Future
↗ [Computing Methodologies](../../../../🧠%20Computing%20Methodologies/Computing%20Methodologies.md)
- ↗ [Artificial Intelligence](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Artificial%20Intelligence.md)
- ↗ [Quantum Computing (and Communication)](../../../../🧠%20Computing%20Methodologies/Quantum%20Computing%20(and%20Communication)/Quantum%20Computing%20(and%20Communication).md)

↗ [Cloud Computing & Cloud Native](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)



## Ref
[Computer architecture]: https://en.wikipedia.org/wiki/Computer_architecture#Definition
