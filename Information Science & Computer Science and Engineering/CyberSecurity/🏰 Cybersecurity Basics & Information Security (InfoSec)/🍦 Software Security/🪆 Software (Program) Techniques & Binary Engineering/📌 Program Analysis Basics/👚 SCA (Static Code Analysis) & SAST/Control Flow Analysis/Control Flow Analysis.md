# Control Flow Analysis

[TOC]



## Res
### Related Topics
↗ [Program Abstraction & Abstract Interpretation](../🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)

↗ [Constraint Solving & Theorem Proving](../../../../../🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md)
↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)

↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)
↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)
↗ [SAT Solving & Algorithms](../../../../../🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md)
↗ [SMT Solving & Algorithms](../../../../../🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)

↗ [CFG (Control Flow Graph) & ICFG (Interprocedure CFG)](../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/CFG%20%28Control%20Flow%20Graph%29%20&%20ICFG%20%28Interprocedure%20CFG%29.md)

↗ [Information Flow & Information Flow Control (IFC)](../Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29/Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29.md)


### Other Resources



## Intro
> [!links]
> ↗ [CFG (Control Flow Graph) & ICFG (Interprocedure CFG)](../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/CFG%20%28Control%20Flow%20Graph%29%20&%20ICFG%20%28Interprocedure%20CFG%29.md)

Control Flow Analysis
- Usually refer to building Control Flow Graph (CFG)
- CFG serves as the basic structure for static analysis
- The node in CFG can be an individual 3-address instruction, or (usually) a Basic Block (BB)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-11%20at%2023.46.27.png)



## Ref
