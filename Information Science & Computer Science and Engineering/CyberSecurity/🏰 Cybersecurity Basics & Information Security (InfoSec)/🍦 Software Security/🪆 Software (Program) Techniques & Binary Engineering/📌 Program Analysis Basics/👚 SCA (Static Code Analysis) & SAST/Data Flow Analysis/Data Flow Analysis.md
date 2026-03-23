# Data Flow Analysis

[TOC]



## Res
### Related Topics
↗ [Program Abstraction & Abstract Interpretation](../🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)
↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
↗ [Lattice (Order Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

↗ [CFG (Control Flow Graph) & ICFG (Interprocedure CFG)](../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/CFG%20(Control%20Flow%20Graph)%20&%20ICFG%20(Interprocedure%20CFG).md)
↗ [Interprocedural Analysis](📲%20Inter-procedural%20Analysis/Interprocedural%20Analysis.md)

↗ [Dataflow Computing](../../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/📌%20Parallel%20Computing%20Alternative%20Modelings/Dataflow%20Computing.md)


### Other Resource
南京大学《软件分析》
第二课（Intermediate Representation）：[av93643665](https://www.bilibili.com/video/av93643665/?spm_id_from=0.0.video.desc.click)
第三课（Data Flow Analysis I）：[av95400721](https://www.bilibili.com/video/av95400721/?spm_id_from=0.0.video.desc.click)
第五课（Data Flow Analysis - Foundations I）：[BV1A741117it](https://www.bilibili.com/video/BV1A741117it/?spm_id_from=0.0.video.desc.click)
第六课（Data Flow Analysis - Foundations II）：[BV1964y1M7nL](https://www.bilibili.com/video/BV1964y1M7nL/?spm_id_from=0.0.video.desc.click)

[南大软分课程笔记｜05 数据流分析理论](https://blog.wohin.me/posts/nju-program-analysis-05/)
[南大软分课程笔记｜06 数据流分析理论](https://blog.wohin.me/posts/nju-program-analysis-06/)
[南大软分课程笔记｜07 过程间分析](https://blog.wohin.me/posts/nju-program-analysis-07/)



## Intro
> ↗ [CFG (Control Flow Graph) & ICFG (Interprocedure CFG)](../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/CFG%20(Control%20Flow%20Graph)%20&%20ICFG%20(Interprocedure%20CFG).md)

> 程序分析 - 南京大学

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.03.21.png)

Input and Output States
- Each execution of an IR statement transforms an input state to a new output state
- The input (output) state is associated with the program point before (after) the statement
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.07.09.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.06.38.png)


### Notations For Control Flow's Constraints
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.11.42.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.10.38.png)



## Methods in Data Flow Analysis
### Intra-Procedural (Same-Procedural) Analysis
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.14.29.png)

↗ [Reaching Definition Analysis](Intra-procedural%20Analysis/Reaching%20Definition%20Analysis.md)
↗ [Live Variable Analysis](Intra-procedural%20Analysis/Live%20Variable%20Analysis.md)
↗ [Available Expressions Analysis](Intra-procedural%20Analysis/Available%20Expressions%20Analysis.md)


### Inter-Procedural Analysis
↗ [Interprocedural Analysis](📲%20Inter-procedural%20Analysis/Interprocedural%20Analysis.md)
↗ [DFG (Data Flow Graph)](📲%20Inter-procedural%20Analysis/DFG%20(Data%20Flow%20Graph).md)


### Shape Analysis
↗ [Shape Analysis](Shape%20Analysis/Shape%20Analysis.md)


### Information Flow Control & Analysis
↗ [🧑🏻‍🦽‍➡️ Information Flow Control, Analysis, and Security](🧑🏻‍🦽‍➡️%20Information%20Flow%20Control,%20Analysis,%20and%20Security/🧑🏻‍🦽‍➡️%20Information%20Flow%20Control,%20Analysis,%20and%20Security.md)
↗ [Taint Analysis](🧑🏻‍🦽‍➡️%20Information%20Flow%20Control,%20Analysis,%20and%20Security/Taint%20Analysis.md)



## Ref
