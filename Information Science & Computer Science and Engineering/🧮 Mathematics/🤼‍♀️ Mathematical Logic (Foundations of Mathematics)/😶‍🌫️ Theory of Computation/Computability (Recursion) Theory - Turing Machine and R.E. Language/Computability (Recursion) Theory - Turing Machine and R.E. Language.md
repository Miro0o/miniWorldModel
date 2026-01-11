# Computability (Recursion) Theory - Turing Machine and R.E. Language

[TOC]



## Res
### Related Topics
↗ [Computer (Host) System](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20(Host)%20System.md)
↗ [Computer Architecture](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Architecture.md)

↗ [Computer Languages & Programming Methodology](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)

↗ [Programming Language Processing & Program Execution](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
- ↗ [Program Execution (Runtime)](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
- ↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md#)
- Recurrence Relation (递推关系) & Recursion (递归)
- Generating Function (生成函数 /母函数)


### Other Resources



## Intro
> ↗ [The Development History of AI](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/The%20Development%20History%20of%20AI.md)
> turing test

![](../../../../../Assets/Pics/Screenshot%202023-05-08%20at%204.26.42%20PM.png)
<small>What can computers do?</small>

> 🔗 https://en.wikipedia.org/wiki/Computability_theory

**Computability theory**, also known as **recursion theory**, is a branch of [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic"), [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), and the [theory of computation](https://en.wikipedia.org/wiki/Theory_of_computation "Theory of computation") that originated in the 1930s with the study of [computable functions](https://en.wikipedia.org/wiki/Computable_function "Computable function") and [Turing degrees](https://en.wikipedia.org/wiki/Turing_degree "Turing degree"). The field has since expanded to include the study of generalized [computability](https://en.wikipedia.org/wiki/Computability "Computability") and [definability](https://en.wikipedia.org/wiki/Definable_set "Definable set"). In these areas, computability theory overlaps with [proof theory](https://en.wikipedia.org/wiki/Proof_theory "Proof theory") and [effective descriptive set theory](https://en.wikipedia.org/wiki/Effective_descriptive_set_theory "Effective descriptive set theory").

Basic questions addressed by computability theory include:
-   What does it mean for a [function](https://en.wikipedia.org/wiki/Function_(mathematics) "Function (mathematics)") on the [natural numbers](https://en.wikipedia.org/wiki/Natural_number "Natural number") to be computable?
-   How can noncomputable functions be classified into a hierarchy based on their level of noncomputability?

Although there is considerable overlap in terms of knowledge and methods, mathematical computability theorists study the theory of relative computability, reducibility notions, and degree structures; those in the computer science field focus on the theory of [subrecursive hierarchies](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory"), [formal methods](https://en.wikipedia.org/wiki/Formal_method "Formal method"), and [formal languages](https://en.wikipedia.org/wiki/Formal_language "Formal language").



## Universal Turing Machine (UTM)



## Ref
[Computability theory]: https://en.wikipedia.org/wiki/Computability_theory

[Turing Mahine | Wikipedia]: https://en.wikipedia.org/wiki/Turing_machine
[Universal Turing Machine]: https://en.wikipedia.org/wiki/Universal_Turing_machine

[How to tell if a language is recognizable, co-recognizable or decidable? | Stackoverflow]: https://cs.stackexchange.com/q/11500/174354

[AI数学基础之:确定图灵机和非确定图灵机]: https://www.cnblogs.com/flydean/p/14646553.html

[Arithmetical hierarchy | wikipedia]: https://en.wikipedia.org/wiki/Arithmetical_hierarchy
[复杂度类列表 | wikipedia]: https://zh.wikipedia.org/zh-hans/複雜度類列表
[Understanding the Arithmetical Hierarchy | StackExchange]: https://math.stackexchange.com/q/4887971/1230830

[👍 如何通俗地解释停机问题（Halting Problem）？ - 张皓的回答 - 知乎]: https://www.zhihu.com/question/20081359/answer/162329455
[Halting problem | Wikipedia]: https://en.wikipedia.org/wiki/Halting_problem
[Gödel's incompleteness theorems | wikipedia]: https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems
