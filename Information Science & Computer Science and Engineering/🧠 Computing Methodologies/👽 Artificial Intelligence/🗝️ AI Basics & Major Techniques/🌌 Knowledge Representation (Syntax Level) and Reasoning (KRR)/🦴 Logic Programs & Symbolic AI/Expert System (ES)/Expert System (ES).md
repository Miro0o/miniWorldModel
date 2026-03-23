# Expert System (ES)

[TOC]



## Res
### Related Topics
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
↗ [Formal Semantics and Programming Language](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)

↗ [Lambda Calculus (λ-Calculus)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)
↗ [Lisp-Based Languages](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/Lisp-Based%20Languages/Lisp-Based%20Languages.md)



## Intro



## Ref
[专家系统概述 - 小波律动的文章 - 知乎]: https://zhuanlan.zhihu.com/p/578861032
[推理引擎 | 机器之心]: https://www.jiqizhixin.com/graph/technologies/d91bce19-8564-48f4-8a08-2baf89096fdc
在人工智能领域，推理引擎是将逻辑规则应用于知识库以推断新信息的系统的一个组成部分。第一推理机是专家系统（expert systems）的组成部分。典型的专家系统由知识库（knowledge base ）和推理引擎组成。知识库存储了关于世界的事实。推理引擎将逻辑规则应用到知识库中，推导出新知识。这个过程将迭代，因为知识库中的每个新事实可以触发推理引擎中的附加规则。推理引擎主要工作在两种模式中的：正向链（ forward chaining）和反向链（Backward chaining）。正向链从已知的事实开始并断言新的事实。反向链接开始于目标，并且向后工作以确定哪些事实必须被断言，来实现目标。

|      |                                               |                                                                                                                                                                                                                                                                            |
| ---- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 年份   | 事件                                            | 相关论文                                                                                                                                                                                                                                                                       |
| 1960 | John McCarthy在麻省理工学院发明的Lisp                   | McCarthy, J. (1960). Recursive functions of symbolic expressions and their computation by machine, Part I. _Communications of the ACM_, _3_(4), 184-195.                                                                                                                   |
| 1983 | _Hayes-Roth, F., Waterman, D. A._提出如何建立一个专家系统 | Hayes-Roth, F., Waterman, D. A., & Lenat, D. B. (1983). Building expert system.                                                                                                                                                                                            |
| 2003 | Haarslev, V., & Möller, R.对语义信息的WEB建立推理引擎     | Haarslev, V., & Möller, R. (2003, October). Racer: A Core Inference Engine for the Semantic Web. In _EON_ (Vol. 87).                                                                                                                                                       |
| 2016 | Han, S., Liu, X., Mao, H.,使用深度神经网络来有效的实现推理引擎  | Han, S., Liu, X., Mao, H., Pu, J., Pedram, A., Horowitz, M. A., & Dally, W. J. (2016, June). EIE: efficient inference engine on compressed deep neural network. In Computer Architecture (ISCA), 2016 ACM/IEEE 43rd Annual International Symposium on (pp. 243-254). IEEE. |