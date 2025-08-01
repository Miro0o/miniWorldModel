# Computational Complexity Theory

[TOC]



## Res
### Related Topics


### Learning Resources
【【卡内基梅隆大学】复杂性理论 | 理论计算机科学 | 研究生课程 -CMU 双语字幕】 https://www.bilibili.com/video/BV1kS4y1r78H/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro



### Complexity Classes
> 🔗 https://en.wikipedia.org/wiki/Complexity_class#

In [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory"), a **complexity class** is a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") of [computational problems](https://en.wikipedia.org/wiki/Computational_problem "Computational problem") "of related resource-based [complexity](https://en.wikipedia.org/wiki/Computational_complexity "Computational complexity")". The two most commonly analyzed resources are [time](https://en.wikipedia.org/wiki/Time_complexity "Time complexity") and [memory](https://en.wikipedia.org/wiki/Space_complexity "Space complexity").

In general, a complexity class is defined in terms of a type of computational problem, a [model of computation](https://en.wikipedia.org/wiki/Model_of_computation "Model of computation"), and a bounded resource like [time](https://en.wikipedia.org/wiki/Time_complexity "Time complexity") or [memory](https://en.wikipedia.org/wiki/Space_complexity "Space complexity"). In particular, most complexity classes consist of [decision problems](https://en.wikipedia.org/wiki/Decision_problem "Decision problem") that are solvable with a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine"), and are differentiated by their time or space (memory) requirements. For instance, the class **[P](https://en.wikipedia.org/wiki/P_\(complexity\) "P (complexity)")** is the set of decision problems solvable by a deterministic Turing machine in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time "Polynomial time"). There are, however, many complexity classes defined in terms of other types of problems (e.g. [counting problems](https://en.wikipedia.org/wiki/Counting_problem_\(complexity\) "Counting problem (complexity)") and [function problems](https://en.wikipedia.org/wiki/Function_problem "Function problem")) and using other models of computation (e.g. [probabilistic Turing machines](https://en.wikipedia.org/wiki/Probabilistic_Turing_machine "Probabilistic Turing machine"), [interactive proof systems](https://en.wikipedia.org/wiki/Interactive_proof_system "Interactive proof system"), [Boolean circuits](https://en.wikipedia.org/wiki/Boolean_circuit "Boolean circuit"), and [quantum computers](https://en.wikipedia.org/wiki/Quantum_computer "Quantum computer")).

The study of the relationships between complexity classes is a major area of research in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"). There are often general hierarchies of complexity classes; for example, it is known that a number of fundamental time and space complexity classes relate to each other in the following way:

> [L](https://en.wikipedia.org/wiki/L_\(complexity\) "L (complexity)") $\subseteq$ [NL](https://en.wikipedia.org/wiki/NL_\(complexity\) "NL. (complexity)") $\subseteq$ [P](https://en.wikipedia.org/wiki/P_\(complexity\) "P (complexity)") $\subseteq$ [NP](https://en.wikipedia.org/wiki/NP_\(complexity\) "NP (complexity)") $\subseteq$ [PSPACE](https://en.wikipedia.org/wiki/PSPACE "PSPACE") $\subseteq$ [EXPTIME](https://en.wikipedia.org/wiki/EXPTIME "EXPTIME") $\subseteq$ [NEXPTIME](https://en.wikipedia.org/wiki/NEXPTIME "NEXPTIME") $\subseteq$ [EXPSPACE](https://en.wikipedia.org/wiki/EXPSPACE "EXPSPACE")

Where $\subseteq$ denotes the [subset](https://en.wikipedia.org/wiki/Subset "Subset") relation. However, many relationships are not yet known; for example, one of the most famous [open problems](https://en.wikipedia.org/wiki/Open_problem "Open problem") in computer science concerns whether [**P** equals **NP**](https://en.wikipedia.org/wiki/P_versus_NP "P versus NP"). The relationships between classes often answer questions about the fundamental nature of computation. The **P** versus **NP** problem, for instance, is directly related to questions of whether [nondeterminism](https://en.wikipedia.org/wiki/Nondeterministic_algorithm "Nondeterministic algorithm") adds any computational power to computers and whether problems having solutions that can be quickly checked for correctness can also be quickly solved.


> 🔗 https://en.wikipedia.org/wiki/Complexity_class#Summary_of_relationships_between_complexity_classes

The following table shows some of the classes of problems that are considered in complexity theory. If class **X** is a strict [subset](https://en.wikipedia.org/wiki/Subset "Subset") of **Y**, then **X** is shown below **Y** with a dark line connecting them. If **X** is a subset, but it is unknown whether they are equal sets, then the line is lighter and dotted. Technically, the breakdown into decidable and undecidable pertains more to the study of [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory"), but is useful for putting the complexity classes in perspective.

![|400](../../../../../Assets/Pics/Screenshot%202025-08-01%20at%2021.45.14.png)



## Computational Intractability & P vs NP Problem
> 🔗 https://en.wikipedia.org/wiki/P_versus_NP_problem#

The **P versus NP problem** is a major [unsolved problem](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_computer_science "List of unsolved problems in computer science") in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"). Informally, it asks whether every problem whose solution can be quickly verified can also be quickly solved.

Here, "quickly" means an algorithm exists that solves the task and runs in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time "Polynomial time") (as opposed to, say, [exponential time](https://en.wikipedia.org/wiki/Exponential_time "Exponential time")), meaning the task completion time is [bounded above](https://en.wikipedia.org/wiki/Upper_bound "Upper bound") by a [polynomial function](https://en.wikipedia.org/wiki/Polynomial_function "Polynomial function") on the size of the input to the algorithm. The general class of questions that some [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm") can answer in polynomial time is "[P](https://en.wikipedia.org/wiki/P_\(complexity\) "P (complexity)")" or "class P". For some questions, there is no known way to find an answer quickly, but if provided with an answer, it can be verified quickly. The class of questions where an answer can be _verified_ in polynomial time is ["NP"](https://en.wikipedia.org/wiki/NP_\(complexity\) "NP (complexity)"), standing for "nondeterministic polynomial time".

An answer to the P versus NP question would determine whether problems that can be verified in polynomial time can also be solved in polynomial time. If P $\neq$ NP, which is widely believed, it would mean that there are problems in NP that are harder to compute than to verify: they could not be solved in polynomial time, but the answer could be verified in polynomial time.

The problem has been called the most important open problem in [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"). Aside from being an important problem in [computational theory](https://en.wikipedia.org/wiki/Computational_theory "Computational theory"), a proof either way would have profound implications for mathematics, [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), algorithm research, [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), [game theory](https://en.wikipedia.org/wiki/Game_theory "Game theory"), multimedia processing, [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), [economics](https://en.wikipedia.org/wiki/Economics "Economics") and many other fields.

It is one of the seven [Millennium Prize Problems](https://en.wikipedia.org/wiki/Millennium_Prize_Problems "Millennium Prize Problems") selected by the [Clay Mathematics Institute](https://en.wikipedia.org/wiki/Clay_Mathematics_Institute "Clay Mathematics Institute"), each of which carries a US$1,000,000 prize for the first correct solution.



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
