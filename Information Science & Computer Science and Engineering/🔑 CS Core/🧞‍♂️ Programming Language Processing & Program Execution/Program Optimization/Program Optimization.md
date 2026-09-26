# Program Optimization

[TOC]



## Res
### Related Topics
↗ [Operations Research (OR) & Optimization & Rational Decision-Making](../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making.md)
↗ [Mathematical Optimization (Programming)](../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)

↗ [Formal System, Formal Semantics, and Formal Logic](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md)

↗ [Computer Languages & Programming Methodology](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Programming Language Theory (PLT)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
- ↗ [Program Equivalence and Metatheory](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Program%20Equivalence%20and%20Metatheory/Program%20Equivalence%20and%20Metatheory.md)
- ↗ [Programming Language & Formal Semantics](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20&%20Formal%20Semantics/Programming%20Language%20&%20Formal%20Semantics.md)

↗ [Software (Program) Techniques & Binary Engineering](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
- ↗ [Program Analysis Basics](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
- ↗ [Program Synthesis & Code Generation](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Synthesis%20&%20Code%20Generation/Program%20Synthesis%20&%20Code%20Generation.md)


### Other Resources
https://inst.eecs.berkeley.edu/~cs294-260/sp24/
Declarative Program Analysis and Optimization

| Wk  | Date |      | Topic                                                                                                                                                                                      |                           |
| --- | ---- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| 1   | Wed  | 1-17 | [Welcome](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-01-17-welcome)                                                                                                               |                           |
| 2   | Mon  | 1-22 | [Term Rewriting](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-01-22-term-rewriting)                                                                                                 |                           |
|     | Wed  | 1-24 | [Playing by the Rules: Rewriting as a practical optimisation technique in GHC](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-01-24-haskell-rewriting)                                | Tianrui, Shreyas          |
| 3   | Mon  | 1-29 | [Verifying and Improving Halide’s Term Rewriting System with Program Synthesis](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-01-29-halide-rewriting)                                | Federico, Manish, Charles |
|     | Wed  | 1-31 | [Achieving High Performance the Functional Way: Expressing High-Performance Optimizations as Rewrite Strategies](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-01-31-opt-strategies) | Sora, Eric                |
| 4   | Mon  | 2-05 | [Datalog](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog)                                                                                                               |                           |
|     | Wed  | 2-07 | [Doop: Strictly Declarative Specification of Sophisticated Points-to Analyses](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-07-doop)                                             | Manish, Shaokai           |
| 5   | Mon  | 2-12 | [From Datalog to Flix: A Declarative Language for Fixed Points on Lattices](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-12-flix)                                                | Tianrui, Altan            |
|     | Wed  | 2-14 | [Slog: Higher-Order, Data-Parallel Structured Deduction](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-14-slog)                                                                   | Jiwon, Altan              |
| 6   | Mon  | 2-19 | Holiday                                                                                                                                                                                    |                           |
|     | Wed  | 2-21 | [Functional Programming with Datalog](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-21-datalog-fp)                                                                                | Tyler, Jeremy             |
| 7   | Mon  | 2-26 | [E-Graphs and Equality Saturation](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-26-egraphs)                                                                                      |                           |
|     | Wed  | 2-28 | [Efficient E-matching for SMT Solvers](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-28-ematching)                                                                                | Federico, Jacob, Jiwon    |
| 8   | Mon  | 3-04 | [Equality Saturation: A New Approach to Optimization](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-03-04-eqsat-paper)                                                               | Sora, Shaokai             |
|     | Wed  | 3-06 | [babble: Learning Better Abstractions with E-Graphs and Anti-Unification](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-03-06-babble)                                                | Eric, Jacob               |
| 9   | Mon  | 3-11 | [Automatic Datapath Optimization using E-Graphs](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-03-11-egraphs-datapath)                                                               | Jeremy, Charles, Shreyas  |
|     | Wed  | 3-13 | [ECTAs: Searching Entangled Program Spaces](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-03-13-ecta)                                                                                | Altan, Tyler              |
| 10  | Mon  | 3-18 | No Class                                                                                                                                                                                   |                           |
|     | Wed  | 3-20 | [Better Together: Unifying Datalog and Equality Saturation](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-03-20-egglog)                                                              | Max                       |
|     | Thu  | 3-21 | [EGRAPHS Community Lightning Talks](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-03-21-egraphs-lightning)                                                                           |                           |



## Intro
> 🔗 https://en.wikipedia.org/wiki/Program_optimization

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **program optimization**, **code optimization**, or **software optimization** is the process of modifying a software system to make some aspect of it work more [efficiently](https://en.wikipedia.org/wiki/Algorithmic_efficiency "Algorithmic efficiency") or use fewer resources. In general, a [computer program](https://en.wikipedia.org/wiki/Computer_program "Computer program") may be optimized so that it executes more rapidly, or to make it capable of operating with less [memory storage](https://en.wikipedia.org/wiki/Computer_data_storage "Computer data storage") or other resources, or draw less power.

Although the term "optimization" is derived from "optimum", achieving a truly optimal system is rare in practice, which is referred to as [superoptimization](https://en.wikipedia.org/wiki/Superoptimization "Superoptimization"). Optimization typically focuses on improving a system with respect to a specific quality metric rather than making it universally optimal. This often leads to trade-offs, where enhancing one metric may come at the expense of another. One frequently cited example is the [space–time tradeoff](https://en.wikipedia.org/wiki/Space%E2%80%93time_tradeoff "Space–time tradeoff"), where reducing a program's execution time can increase its memory consumption. Conversely, in scenarios where memory is limited, engineers might prioritize a slower [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm") to conserve space. There is rarely a single design that can excel in all situations, requiring [programmers](https://en.wikipedia.org/wiki/Software_engineers "Software engineers") to prioritize attributes most relevant to the application at hand. Metrics for software include throughput, [latency](https://en.wikipedia.org/wiki/Frames_per_second "Frames per second"), [volatile memory usage](https://en.wikipedia.org/wiki/RAM "RAM"), [persistent storage](https://en.wikipedia.org/wiki/Disk_storage "Disk storage"), [internet usage](https://en.wikipedia.org/wiki/Internet_usage "Internet usage"), [energy consumption](https://en.wikipedia.org/wiki/Energy_consumption "Energy consumption"), and hardware [wear and tear](https://en.wikipedia.org/wiki/Wear_and_tear "Wear and tear"). The most common metric is speed.

Furthermore, achieving absolute optimization often demands disproportionate effort relative to the benefits gained. Consequently, optimization processes usually slow once sufficient improvements are achieved. Fortunately, significant gains often occur early in the optimization process, making it practical to stop before reaching [diminishing returns](https://en.wikipedia.org/wiki/Diminishing_returns "Diminishing returns").


### Levels of Program Optimization
> 🔗 https://en.wikipedia.org/wiki/Program_optimization#Levels_of_optimization



## Ref
