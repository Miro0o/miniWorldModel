# Data Flow Analysis

[TOC]



## Res
### Related Topics
↗ [Program Abstraction & Abstract Interpretation](../🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)
↗ [Partial Order & Order Theory](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Partial%20Order%20&%20Order%20Theory.md)
↗ [Lattice (Order Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20%28Order%20Theory%29/Lattice%20%28Order%20Theory%29.md)

↗ [Dataflow Computing](../../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20%28Host%29%20System/Computer%20Architecture/Computer%20Microarchitectures%20%28Computer%20Organization%29%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20%28Theory%20Part%29/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/📌%20Parallel%20Computing%20Alternative%20Modelings/Dataflow%20Computing.md)

↗ [Information Flow & Information Flow Control (IFC)](../Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29/Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29.md)


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
> [!links]
> ↗ [CFG (Control Flow Graph) & ICFG (Interprocedure CFG)](../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/CFG%20%28Control%20Flow%20Graph%29%20&%20ICFG%20%28Interprocedure%20CFG%29.md)

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


### Sources and Sinks (Drains)
> 🔗 https://en.wikipedia.org/wiki/Sources_and_sinks#

In the [physical sciences](https://en.wikipedia.org/wiki/Physical_sciences "Physical sciences"), [engineering](https://en.wikipedia.org/wiki/Engineering "Engineering") and [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), **sources and sinks** (sometimes **sources and drains**) is an analogy used to describe properties of [vector fields](https://en.wikipedia.org/wiki/Vector_field "Vector field"). It generalizes the idea of fluid sources and sinks (like the [faucet](https://en.wikipedia.org/wiki/Tap_\(valve\) "Tap (valve)") and [drain](https://en.wikipedia.org/wiki/Drain_\(plumbing\) "Drain (plumbing)") of a bathtub) across different scientific disciplines. These terms describe points, regions, or entities where a vector field originates or terminates. This analogy is usually invoked when discussing the [continuity equation](https://en.wikipedia.org/wiki/Continuity_equation "Continuity equation"), the [divergence](https://en.wikipedia.org/wiki/Divergence "Divergence") of the field and the [divergence theorem](https://en.wikipedia.org/wiki/Divergence_theorem "Divergence theorem"). The analogy sometimes includes **swirls** and **saddles** for points that are neither of the two.

In the case of [electric fields](https://en.wikipedia.org/wiki/Electric_field "Electric field") the idea of flow is replaced by [field lines](https://en.wikipedia.org/wiki/Field_line "Field line") and the sources and sinks are [electric charges](https://en.wikipedia.org/wiki/Electric_charge "Electric charge").



## Methods in Data Flow Analysis
### Intra-Procedural (Same-Procedural) Analysis
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.14.29.png)

↗ [Reaching Definition Analysis](Intra-procedural%20Analysis/Reaching%20Definition%20Analysis.md)
↗ [Live Variable Analysis](Intra-procedural%20Analysis/Live%20Variable%20Analysis.md)
↗ [Available Expressions Analysis](Intra-procedural%20Analysis/Available%20Expressions%20Analysis.md)


### Inter-Procedural Analysis
↗ [Interprocedural Analysis](📲%20Inter-procedural%20Analysis/Interprocedural%20Analysis.md)
↗ [DFG (Data Flow Graph)](📲%20Inter-procedural%20Analysis/DFG%20%28Data%20Flow%20Graph%29.md)


### Shape Analysis
↗ [Shape Analysis](../Memory%20&%20Heap%20Analysis/Shape%20Analysis/Shape%20Analysis.md)


### Information Flow Control & Analysis
↗ [Information Flow & Information Flow Control (IFC)](../Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29/Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29.md)
↗ [Taint Analysis](../Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29/Taint%20Analysis/Taint%20Analysis.md)



## Ref
