# Complexity Theory & Computational Complexity

[TOC]



## Res
### Related Topics
↗ [Decision Theory & Decision Analysis](../../../../../Other%20Networks%20of%20Knowledge/Science%20&%20Application/Social%20Science/Decision%20Theory%20&%20Decision%20Analysis/Decision%20Theory%20&%20Decision%20Analysis.md)
↗ [Chaos Theory](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Dynamical%20Systems%20Theory/🇺🇳%20Chaos%20Theory/Chaos%20Theory.md)

↗ [Measures (Measure Theory)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/Measures%20(Measure%20Theory).md)
- ↗ [Probabilities & Statistics](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probabilities%20&%20Statistics.md)

↗ [Algorithm & Data Structure](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithm%20&%20Data%20Structure.md)


### Learning Resources
【【卡内基梅隆大学】复杂性理论 | 理论计算机科学 | 研究生课程 -CMU 双语字幕】 https://www.bilibili.com/video/BV1kS4y1r78H/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

https://theory.cs.princeton.edu/complexity/
Computational Complexity: A Modern Approach | [Sanjeev Arora](http://www.cs.princeton.edu/%7Earora/) and [Boaz Barak](http://www.boazbarak.org/)
[Cambridge University Press](http://www.cambridge.org/us/catalogue/catalogue.asp?isbn=9780521424264)
This is a textbook on computational complexity theory. It is intended as a text for an advanced undergraduate course or introductory graduate course, or as a reference for researchers and students in computer science and allied fields such as mathematics and physics. See also [Amazon page for the book](http://www.amazon.com/Computational-Complexity-Approach-Sanjeev-Arora/dp/0521424267/ref=sr_1_1?ie=UTF8&s=books&qid=1239836395&sr=8-1).

**P, NP and Mathematics - a computational complexity perspective** | [A.Wigderson](http://www.math.ias.edu/%7Eavi)
Proceedings of the ICM 06 (Madrid), vol. 1, EMS Publishing House, Zurich, pp. 665-712, 2007.  [(ps)](https://www.math.ias.edu/~avi/PUBLICATIONS/MYPAPERS/W06/w06.ps) [(pdf)](https://www.math.ias.edu/~avi/PUBLICATIONS/MYPAPERS/W06/w06.pdf)



## Intro
### Complexity Theory: Complexity is Complex
> 🔗 https://zhuanlan.zhihu.com/p/586889341

复杂是一个复杂议题，定义有几十种，但科学家至今还没找到一个公认定义。每个定义基于不同视角，各有道理。

例如，根据数量大小来定义复杂性。比较碱基对数量，人类基因组大约有30亿组碱基对，酵母菌大约有2000万组碱基对，那么人类比酵母菌复杂250倍。

例如，根据[信息熵](https://zhida.zhihu.com/search?content_id=218554500&content_type=Article&match_order=1&q=%E4%BF%A1%E6%81%AF%E7%86%B5&zhida_source=entity)来定义复杂性。一个信息，如果克服越大不确定性，信息熵越大，信息量就越大，就越复杂，信息价值也就越大。反之，则相反。

例如，根据逻辑层次来定义复杂性。层次越多，就越复杂；层次越少，就越简单。例如，多细胞生命比单细胞生命逻辑层次更多，就更复杂。

前置思考也提到一种定义方式。如果系统机制可以用有限简单规则刻画，即便表面复杂，也算简单；如果做不到，就像[复杂适应系统](https://zhida.zhihu.com/search?content_id=218554500&content_type=Article&match_order=1&q=%E5%A4%8D%E6%9D%82%E9%80%82%E5%BA%94%E7%B3%BB%E7%BB%9F&zhida_source=entity)那样，内里和表面一样复杂，就是真复杂。

诸如此类，每一种定义都能反映复杂性某个侧面，都有优点和缺点。柯尔莫哥洛夫复杂度也是一种定义和测量方式，可资参考。


### Computational Complexity Theory
> 🔗 https://en.wikipedia.org/wiki/Computational_complexity_theory

In [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science") and mathematics, **computational complexity theory** focuses on classifying [computational problems](https://en.wikipedia.org/wiki/Computational_problem "Computational problem") according to their **resource usage**, and explores the relationships between these classifications. A computational problem is a task solved by a computer. A computation problem is solvable by mechanical application of mathematical steps, such as an [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm").

A problem is regarded as inherently difficult if its solution requires significant resources, whatever the algorithm used. The theory formalizes this intuition, by introducing mathematical [models of computation](https://en.wikipedia.org/wiki/Models_of_computation "Models of computation") to study these problems and quantifying their [computational complexity](https://en.wikipedia.org/wiki/Computational_complexity "Computational complexity"), i.e., the amount of resources needed to solve them, such as time and storage. Other measures of complexity are also used, such as the amount of communication (used in [communication complexity](https://en.wikipedia.org/wiki/Communication_complexity "Communication complexity")), the number of [gates](https://en.wikipedia.org/wiki/Logic_gate "Logic gate") in a circuit (used in [circuit complexity](https://en.wikipedia.org/wiki/Circuit_complexity "Circuit complexity")) and the number of processors (used in [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing "Parallel computing")). One of the roles of computational complexity theory is to determine the practical limits on what computers can and cannot do. The [P versus NP problem](https://en.wikipedia.org/wiki/P_versus_NP_problem "P versus NP problem"), one of the seven [Millennium Prize Problems](https://en.wikipedia.org/wiki/Millennium_Prize_Problems "Millennium Prize Problems"), is part of the field of computational complexity.

Closely related fields in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science") are [analysis of algorithms](https://en.wikipedia.org/wiki/Analysis_of_algorithms "Analysis of algorithms") and [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory"). A key distinction between analysis of algorithms and computational complexity theory is that the former is devoted to analyzing the amount of resources needed by a particular algorithm to solve a problem, whereas the latter asks a more general question about all possible algorithms that could be used to solve the same problem. More precisely, computational complexity theory tries to classify problems that can or cannot be solved with appropriately restricted resources. In turn, imposing restrictions on the available resources is what distinguishes computational complexity from computability theory: the latter theory asks what kinds of problems can, in principle, be solved algorithmically.
#### Computational Problems


### Machine Models and Complexity Measures


### (Computational) Complexity Classes
> Recall Chomsky Hierarchy ↗ [Automata Theory and (Formal) Language Theory](../🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
> ![](../../../../../Assets/Pics/Pasted%20image%2020240909175821.png)
> ![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)

> 🔗 https://en.wikipedia.org/wiki/Complexity_class#

In [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory"), a **complexity class** is a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") of [computational problems](https://en.wikipedia.org/wiki/Computational_problem "Computational problem") "of related resource-based [complexity](https://en.wikipedia.org/wiki/Computational_complexity "Computational complexity")". The two most commonly analyzed resources are [time](https://en.wikipedia.org/wiki/Time_complexity "Time complexity") and [memory](https://en.wikipedia.org/wiki/Space_complexity "Space complexity").

In general, a complexity class is defined in terms of a type of computational problem, a [model of computation](https://en.wikipedia.org/wiki/Model_of_computation "Model of computation"), and a bounded resource like [time](https://en.wikipedia.org/wiki/Time_complexity "Time complexity") or [memory](https://en.wikipedia.org/wiki/Space_complexity "Space complexity"). In particular, most complexity classes consist of [decision problems](https://en.wikipedia.org/wiki/Decision_problem "Decision problem") that are solvable with a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine"), and are differentiated by their time or space (memory) requirements. For instance, the class **[P](https://en.wikipedia.org/wiki/P_\(complexity\) "P (complexity)")** is the set of decision problems solvable by a deterministic Turing machine in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time "Polynomial time"). There are, however, many complexity classes defined in terms of other types of problems (e.g. [counting problems](https://en.wikipedia.org/wiki/Counting_problem_\(complexity\) "Counting problem (complexity)") and [function problems](https://en.wikipedia.org/wiki/Function_problem "Function problem")) and using other models of computation (e.g. [probabilistic Turing machines](https://en.wikipedia.org/wiki/Probabilistic_Turing_machine "Probabilistic Turing machine"), [interactive proof systems](https://en.wikipedia.org/wiki/Interactive_proof_system "Interactive proof system"), [Boolean circuits](https://en.wikipedia.org/wiki/Boolean_circuit "Boolean circuit"), and [quantum computers](https://en.wikipedia.org/wiki/Quantum_computer "Quantum computer")).

The study of the relationships between complexity classes is a major area of research in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"). There are often general hierarchies of complexity classes; for example, it is known that a number of fundamental time and space complexity classes relate to each other in the following way:

> [L](https://en.wikipedia.org/wiki/L_\(complexity\) "L (complexity)") $\subseteq$ [NL](https://en.wikipedia.org/wiki/NL_\(complexity\) "NL. (complexity)") $\subseteq$ [P](https://en.wikipedia.org/wiki/P_\(complexity\) "P (complexity)") $\subseteq$ [NP](https://en.wikipedia.org/wiki/NP_\(complexity\) "NP (complexity)") $\subseteq$ [PSPACE](https://en.wikipedia.org/wiki/PSPACE "PSPACE") $\subseteq$ [EXPTIME](https://en.wikipedia.org/wiki/EXPTIME "EXPTIME") $\subseteq$ [NEXPTIME](https://en.wikipedia.org/wiki/NEXPTIME "NEXPTIME") $\subseteq$ [EXPSPACE](https://en.wikipedia.org/wiki/EXPSPACE "EXPSPACE")

Where $\subseteq$ denotes the [subset](https://en.wikipedia.org/wiki/Subset "Subset") relation. However, many relationships are not yet known; for example, one of the most famous [open problems](https://en.wikipedia.org/wiki/Open_problem "Open problem") in computer science concerns whether [**P** equals **NP**](https://en.wikipedia.org/wiki/P_versus_NP "P versus NP"). The relationships between classes often answer questions about the fundamental nature of computation. The **P** versus **NP** problem, for instance, is directly related to questions of whether [nondeterminism](https://en.wikipedia.org/wiki/Nondeterministic_algorithm "Nondeterministic algorithm") adds any computational power to computers and whether problems having solutions that can be quickly checked for correctness can also be quickly solved.

![](../../../../../Assets/Pics/Screenshot%202025-08-01%20at%2023.57.08.png)

> 🔗 https://en.wikipedia.org/wiki/Complexity_class#Summary_of_relationships_between_complexity_classes

The following table shows some of the classes of problems that are considered in complexity theory. If class **X** is a strict [subset](https://en.wikipedia.org/wiki/Subset "Subset") of **Y**, then **X** is shown below **Y** with a dark line connecting them. If **X** is a subset, but it is unknown whether they are equal sets, then the line is lighter and dotted. Technically, the breakdown into decidable and undecidable pertains more to the study of [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory"), but is useful for putting the complexity classes in perspective.

![|400](../../../../../Assets/Pics/Screenshot%202025-08-01%20at%2021.45.14.png)

![](../../../../../Assets/Pics/Screenshot%202025-08-01%20at%2022.39.25.png)
<small>P vs. NP and the Computational Complexity Zoo | youtube<br><a>https://youtu.be/YX40hbAHx3s?si=T3xOQJse8AgO0WcP</a></small>

> 🔗 https://en.wikipedia.org/wiki/List_of_complexity_classes
> This is a **list of [complexity classes](https://en.wikipedia.org/wiki/Complexity_class "Complexity class")** in [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory"). For other computational and complexity subjects, see [list of computability and complexity topics](https://en.wikipedia.org/wiki/List_of_computability_and_complexity_topics "List of computability and complexity topics").
#### Relationship Between Complexity Classes and Chomsky Hierarchy
Complexity classes are about resources (time/space) and efficiency ($O(n^3)$ time /$O(n)$ space?). Chomsky hierarchy is about computability (computation models). 
- In Chomsky hierarchy (and computability theory) we study for a given problem (after translating into a decision problem), can a syntax generate language that contain the solution of this problem, or in another words, can a device accept the language of this problem.
- In complexity theory, we study for a given problem, using our best algorithm and considering the worst-case scenarios, what are the least amount of resources required to solve this problem. Since our most powerful computation model is computer (Turing machine), we often by default use this as our computing machine.



## P vs NP Problem
> 🔗 https://en.wikipedia.org/wiki/P_versus_NP_problem#

The **P versus NP problem** is a major [unsolved problem](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_computer_science "List of unsolved problems in computer science") in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"). ==Informally, it asks whether every problem whose solution can be quickly verified can also be quickly solved.==

Here, "quickly" means an algorithm exists that solves the task and runs in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time "Polynomial time") (as opposed to, say, [exponential time](https://en.wikipedia.org/wiki/Exponential_time "Exponential time")), meaning the task completion time is [bounded above](https://en.wikipedia.org/wiki/Upper_bound "Upper bound") by a [polynomial function](https://en.wikipedia.org/wiki/Polynomial_function "Polynomial function") on the size of the input to the algorithm. The general class of questions that some [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm") can answer in polynomial time is **"[P](https://en.wikipedia.org/wiki/P_\(complexity\) "P (complexity)")" or "class P"**. For some questions, there is no known way to find an answer quickly, but if provided with an answer, it can be verified quickly. The class of questions where an answer can be _verified_ in polynomial time is **["NP"](https://en.wikipedia.org/wiki/NP_\(complexity\) "NP (complexity)")**, standing for "**nondeterministic polynomial time**".

An answer to the P versus NP question would determine whether problems that can be verified in polynomial time can also be solved in polynomial time. If P $\neq$ NP, which is widely believed, it would mean that there are problems in NP that are harder to compute than to verify: they could not be solved in polynomial time, but the answer could be verified in polynomial time.

The problem has been called the most important open problem in [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"). Aside from being an important problem in [computational theory](https://en.wikipedia.org/wiki/Computational_theory "Computational theory"), a proof either way would have profound implications for mathematics, [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), algorithm research, [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), [game theory](https://en.wikipedia.org/wiki/Game_theory "Game theory"), multimedia processing, [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), [economics](https://en.wikipedia.org/wiki/Economics "Economics") and many other fields.

It is one of the seven [Millennium Prize Problems](https://en.wikipedia.org/wiki/Millennium_Prize_Problems "Millennium Prize Problems") selected by the [Clay Mathematics Institute](https://en.wikipedia.org/wiki/Clay_Mathematics_Institute "Clay Mathematics Institute"), each of which carries a US$1,000,000 prize for the first correct solution.


### P, NP, NPC(NP-Completeness ) & NPH(NP-Hard)
> 🔗 https://en.wikipedia.org/wiki/P_versus_NP_problem#NP-completeness

![](../../../../../Assets/Pics/Pasted%20image%2020250801223400.png)
<small>Euler diagram (<a>https://en.wikipedia.org/wiki/Euler_diagram</a>) for P, NP, NP-complete, and NP-hard set of problems (excluding the empty language and its complement, which belong to P but are not NP-complete)</small>

- P (Polynomial) Problem: 
	- The class of questions where all answers can be *find* in polynomial time
		- Why we care about polynomial time? Because this is the computational power of our computer. If a problem can be solved in polynomial time, it means we can solve it using computer. There's no guarantee that we can solve all problems with complexity higher than polynomial. (We can solve some of these problems, in a smaller scale, i.e. within the computational limit. However we cannot solve all these problems at any scale.)
	- e.g. 
		- Sorting problem of N numbers
- NP (Non-deterministic Polynomial) Problem:
	- The class of questions where an answer can be _verified_ in polynomial time
	- e.g.
		- Sorting problem of N numbers
		- Soduku problem
		- Hamiltonian path
- [NPH Problem](https://en.wikipedia.org/wiki/NP-hard):
	- The class of questions that all NP problems can be reduced (in polynomial time) to them. Informally, NP-hard problems are those at least as hard as NP problems. NP-hard problems need not be in NP; i.e., they need not have solutions verifiable in polynomial time.
	- e.g.
		- **Traveling Salesperson Problem (TSP)**: can be reduced from the problem of Hamiltonian path
- NPC Problem:
	- The class of questions that any other NP problem is reducible to in polynomial time and whose solution is still verifiable in polynomial time, i.e. NPC problems are the intersection of NP and NPH. That is, any NP problem can be transformed into any NP-complete problem. Informally, an NP-complete problem is an NP problem that is at least as "tough" as any other problem in NP.
		- The first natural problem proven to be NP-complete was the  [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem "Boolean satisfiability problem"), also known as SAT. (↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)) This is the [Cook–Levin theorem](https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem "Cook–Levin theorem"), so _any_ instance of _any_ problem in NP can be transformed mechanically into a Boolean satisfiability problem in polynomial time. The Boolean satisfiability problem is one of many NP-complete problems. If any NP-complete problem is in P, then it would follow that P = NP. However, many important problems are NP-complete, and no fast algorithm for any of them is known.
		- After SAT problem was proved to be NP-complete, [proof by reduction](https://en.wikipedia.org/wiki/Reduction_\(complexity\) "Reduction (complexity)") provided a simpler way to show that many other problems are also NP-complete, including the game Sudoku discussed earlier. In this case, the proof shows that a solution of Sudoku in polynomial time could also be used to complete [Latin squares](https://en.wikipedia.org/wiki/Latin_square "Latin square") in polynomial time. This in turn gives a solution to the problem of partitioning [tri-partite graphs](https://en.wikipedia.org/wiki/Multipartite_graph "Multipartite graph") into triangles, which could then be used to find solutions for the special case of SAT known as 3-SAT, which then provides a solution for general Boolean satisfiability. So a polynomial-time solution to Sudoku leads, by a series of mechanical transformations, to a polynomial time solution of satisfiability, which in turn can be used to solve any other NP-problem in polynomial time. Using transformations like this, a vast class of seemingly unrelated problems are all reducible to one another, and are in a sense "the same problem".
	- e.g.
		- **Traveling Salesperson Problem (TSP)**, with the total cost lower than C: this is a NP problem itself, and can be reduced from the problem of Hamiltonian path as well.

> 【【作业】P问题，NP问题，NPH问题，NPC问题介绍】 https://www.bilibili.com/video/BV1pF41127B3/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
#### SAT Problem & SMT Problem
↗ [Formal System, Formal Logics, and Its Semantics](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)


### Formal Definition
> 🔗 https://en.wikipedia.org/wiki/P_versus_NP_problem#Formal_definitions


### Consequences of Solution
> 🔗 https://en.wikipedia.org/wiki/P_versus_NP_problem#Consequences_of_solution


### Similar Problems
_[R](https://en.wikipedia.org/wiki/R_\(complexity\) "R (complexity)") vs. [RE](https://en.wikipedia.org/wiki/RE_\(complexity\) "RE (complexity)")_ problem, where R is analog of class P, and RE is analog class NP. These classes are not equal, because undecidable but verifiable problems do exist, for example, [Hilbert's tenth problem](https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem "Hilbert's tenth problem") which is [RE-complete](https://en.wikipedia.org/wiki/RE_\(complexity\)#RE-complete "RE (complexity)").

A similar problem exists in the theory of [algebraic complexity](https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity#Algebraic_P_and_NP "Arithmetic circuit complexity"): _VP vs. VNP_ problem. Like _P vs. NP_, the answer is currently unknown.



## Intractability
↗ [Intractability](Algorithm%20Complexity/Intractability.md)



## Continuous Complexity Theory
> 🔗 https://en.wikipedia.org/wiki/Computational_complexity_theory#Continuous_complexity_theory

Continuous complexity theory can refer to complexity theory of problems that involve continuous functions that are approximated by discretizations, as studied in [numerical analysis](https://en.wikipedia.org/wiki/Numerical_analysis "Numerical analysis"). One approach to complexity theory of numerical analysis is [information based complexity](https://en.wikipedia.org/wiki/Information_based_complexity "Information based complexity").

Continuous complexity theory can also refer to complexity theory of the use of [analog computation](https://en.wikipedia.org/wiki/Analog_computation "Analog computation"), which uses continuous [dynamical systems](https://en.wikipedia.org/wiki/Dynamical_system "Dynamical system") and [differential equations](https://en.wikipedia.org/wiki/Differential_equation "Differential equation"). [Control theory](https://en.wikipedia.org/wiki/Control_theory "Control theory") can be considered a form of computation and differential equations are used in the modeling of continuous-time and hybrid discrete-continuous-time systems.



## Ref
[计算复杂性理论]: https://zh.wikipedia.org/zh-cn/計算複雜性理論

[Oracle machine | Wikipedia]: https://en.wikipedia.org/wiki/Oracle_machine

[算数阶层 | wikipedia]: https://zh.wikipedia.org/zh-cn/%E7%AE%97%E6%95%B0%E9%98%B6%E5%B1%82
[阿列夫数 | wikipedia]: https://zh.wikipedia.org/wiki/%E9%98%BF%E5%88%97%E5%A4%AB%E6%95%B8

[自创宇宙观:『神盒世界』 - Divinity Box的文章 - 知乎]: https://zhuanlan.zhihu.com/p/416179675
[数学阶层 - Divinity Box的文章 - 知乎]: https://zhuanlan.zhihu.com/p/574909121
[哲学阶层 - Divinity Box的文章 - 知乎]: https://zhuanlan.zhihu.com/p/574909463

[Arithmetical hierarchy | wikipedia]: https://en.wikipedia.org/wiki/Arithmetical_hierarchy
[Analytical hierarchy | wikipedia]: https://en.wikipedia.org/wiki/Analytical_hierarchy

[Oracle machine | wikipedia]: https://en.wikipedia.org/wiki/Oracle_machine

[P vs. NP and the Computational Complexity Zoo | youtube]:https://youtu.be/YX40hbAHx3s?si=T3xOQJse8AgO0WcP
Simplicity is the final achievement
After one has played a vast quantity of of notes and more notes, it is simplicity that emerges as the crowning reward of art.  -- Chopin.
