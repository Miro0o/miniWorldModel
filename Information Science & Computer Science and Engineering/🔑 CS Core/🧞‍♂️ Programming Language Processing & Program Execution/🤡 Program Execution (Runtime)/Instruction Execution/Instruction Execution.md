# Instruction Execution

[TOC]



## Res
### Related Topics
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [ISA Instruction Basics](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/📌%20ISA%20Instruction%20Basics/ISA%20Instruction%20Basics.md)
↗ [ASM (Assembly Languages)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/ASM%20(Assembly%20Languages).md)

↗ [Computer Processors & Logic Chips (Theory Part)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part).md)
- ↗ [CPU (Central Processing Unit)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)

↗ [(Text) Data Representations & Storage in Computer](../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/(Text)%20Data%20Representations%20&%20Storage%20in%20Computer.md)
↗ [von Neumann /Memory Access](Memory%20Access%20&%20Addressing.md)


### Other Resources



## Intro
### The Separation of Instruction and Data
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)


### 🪜 Computer Instructions Processing Level
Instruction Processing Level:

Software -> Program -> Instruction (ISA) -> Microinstruction (RTN) -> Control Signals

![](../../../../../Assets/Pics/Screenshot%202023-03-21%20at%209.12.25%20PM.png)
<small>Instruction Processing Level</small>


👩‍💻 **Software Level** 
↗ [Software Engineering](../../../../Software%20Engineering/Software%20Engineering.md)
↗ [Cloud Computing & Cloud Native](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)
↗ [Operating System & OS Kernel (Theory Part)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)


💻 **Program Level**
↗ [Computer Languages & Programming Methodology](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Algorithm & Data Structure](../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithm%20&%20Data%20Structure.md)


🤖 **Instruction Level**
↗ [ASM (Assembly Languages)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/ASM%20(Assembly%20Languages).md)
👉👉 This section! 👈 👈

> Assembly language is human-readable characters encoding of binary machine code language!
> ↗ [Machine Code](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Machine%20Code.md)


📝 **Micro-operations Level**
↗ [Micro-Instruction & Micro-Operation](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Micro-Instruction%20&%20Micro-Operation.md)


🔬 **Microcode (Firmware Level)**
↗ [Firmware and Computer (OS) Booting](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)
↗ [Microcode & Micro-Program](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Microcode%20&%20Micro-Program.md)


⚡️ **Control Signals**
↗ [Digital (Logic) Electronics Foundations](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)


⚙️ **Bare Metal** 
Beyond CS!



## Instruction Cycle
> [!links]
> 👉 quick look at ↗ [👧🏽 MARIE](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/👧🏽%20MARIE.md) for gists of Instruction processing


### Fetch-Decode-Execute Cycle
![](../../../../../Assets/Pics/Screenshot%202023-03-03%20at%209.05.51%20AM.png)


### Interrupts & System Call
> [!links]
> ↗ [Interrupts (Software & Hardware)](Interrupts%20(Software%20&%20Hardware).md)
> 
> ↗ [System Calls](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
> - ↗ [System Signals & Exception Handling](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Signals%20&%20Exception%20Handling.md)
> 
> ↗ [System Call Interfaces (SCI)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/System%20Call%20Interfaces%20(SCI).md)

![](../../../../../Assets/Pics/Screenshot%202023-03-03%20at%209.10.54%20AM.png)

![](../../../../../Assets/Pics/Screenshot%202023-03-03%20at%209.15.46%20AM.png)



## Instruction Execution Process
![](../../../../../Assets/Pics/Screenshot%202023-10-13%20at%208.15.46PM.png)
![](../../../../../Assets/Pics/Screenshot%202023-10-13%20at%208.15.55PM.png)



## Ref
