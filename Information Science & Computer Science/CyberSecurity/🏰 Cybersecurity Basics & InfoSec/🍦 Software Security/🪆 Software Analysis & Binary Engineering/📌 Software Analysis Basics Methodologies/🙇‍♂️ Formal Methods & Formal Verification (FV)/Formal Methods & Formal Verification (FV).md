# Formal Methods & Formal Verification (FV)

[TOC]



## Res
### Related Topics
↗ [Software Quality Assurance (SQA)](../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)
↗ [Software Testing](../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)
↗ [Security Audit & Security Audit Trail](../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md)

↗ [Mathematical Logic](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/Mathematical%20Logic.md)
- ↗ [Mathematical Logic Basics (Formal Logic)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic).md)
- ↗ [Propositional Logic](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Propositional%20Logic%20(命题逻辑)/Propositional%20Logic.md)
- ↗ [(First-Order) Predicate Logic -（一阶）谓词逻辑](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/(First-Order)%20Predicate%20Logic%20-（一阶）谓词逻辑/(First-Order)%20Predicate%20Logic%20-（一阶）谓词逻辑.md)
↗ [Automata Theory and (Formal) Language Theory](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
↗ [Programming Language Theory (PLT)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Symbolic and Algebraic Manipulation](../../../../../../🧠%20Computing%20Methodologies/Symbolic%20and%20Algebraic%20Manipulation/Symbolic%20and%20Algebraic%20Manipulation.md)

↗ [Static Code Analysis Tools (SCAT)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Symbolic%20Execution%20&%20Constrain%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Symbolic%20Execution%20&%20Constrain%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
- etc.

↗ [(Formal) Verification & Analysis Programming Languages](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/(Formal)%20Verification%20&%20Analysis%20Programming%20Languages/(Formal)%20Verification%20&%20Analysis%20Programming%20Languages.md)
↗ [Logic Programming Languages](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)



## Intro
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

In software and hardware design of complex systems, more time and eﬀort are spent on verification than on construction. Techniques are sought to reduce and ease the verification eﬀorts while increasing their coverage. Formal methods oﬀer a large potential to obtain an early integration of verification in the design process, to provide more eﬀective verification techniques, and to reduce the verification time.

Let us first briefly discuss the role of formal methods. **To put it in a nutshell, formal methods can be considered as “the applied mathematics for modeling and analyzing ICT systems”.** Their aim is to establish system correctness with mathematical rigor. Their great potential has led to an increasing use by engineers of formal methods for the verification of complex software and hardware systems. Besides, formal methods are one of the “highly recommended” verification techniques for software development of safety-critical systems according to, e.g., the best practices standard of the IEC (International Electrotechnical Commission) and standards of the ESA (European Space Agency). 




## Ref
[形式化验证方法研究综述 | CSDN]: https://panpan.blog.csdn.net/article/details/133158054?fromshare=blogdetail&sharetype=blogdetail&sharerId=133158054&sharerefer=PC&sharesource=&sharefrom=from_link

形式化验证是一种通过数学方法来证明软件、硬件或系统的正确性的技术。它采用形式化语言、逻辑和证明技术，通过对系统建模、规约和验证，从而达到证明系统行为是否满足给定规定的目的的目的。

形式化验证的优势在于它可以对系统进行全面、自动、形式化的测试和验证，从而发现和纠正系统设计的缺陷。它的结果可以得到精确、确定的结论，可以帮助开发人员减少迭代设计和测试的时间和成本。因此，形式化验证在现代软件和硬件系统的开发过程中已经得到广泛应用。

尽管形式化验证具有强大的验证功能，但是它在实际应用中也存在一些挑战。形式化验证需要专业的证明人员和高水平的数学和计算机科学知识，因此成本较高。此外，由于复杂性问题，形式化验证的规模通常在实际系统的规模上有所限制。

综上所述，形式化验证是一种非常有价值的技术，它对提高软件和硬件系统质量的保障作用不可忽视。但是，为了使其更广泛应用于实际开发过程中，还需要不断提高形式化验证的效率和可用性。

[软件所在形式化方法领域多个方向取得进展]: http://www.iscas.ac.cn/xwdt2016/kyjz2016/202404/t20240417_7114585.html
可满足性模理论（SMT）是形式化方法与自动推理的一个重要方向，它研究在某些特定理论下（如等式理论和无解释函数、数组理论、位向量、线性和非线性算术）的一阶逻辑公式可满足性的判定方法。在算术理论方面，目前大部分SMT求解器主要基于串行求解，相关工作集中在如何改进串行SMT求解器中的求解技术和启发式方法。面对计算资源与算力日益充足的今天，研究团队尝试采用并行和分布式的方法来充分利用算力，以提高SMT问题的求解性能。

研究团队将提出的方法应用到目前国际最先进的求解器CVC5、OpenSMT2、Z3，与基求解器的求解结果相比，仅是8核的并行求解，平均成功求解实例就增加了3495个，求解速度提高约30%。该方法与前沿并行求解技术相比也有显著提升，并且在非线性理论上表现尤为突出。

[静态代码分析之约束求解简介 | 华为云]: https://bbs.huaweicloud.com/blogs/229334
约束求解和抽象解释，是程序分析的两大基石。一般程序分析问题通常都需要转换为各种数学模型，例如图可达性问题、约束求解问题（通常在符号执行、路径敏感分析等场景使用）等，然后进行特定的求解来发现程序中存在的问题。

本文简单对约束求解进行简单介绍。首先会介绍一些关于约束求解的概念，然后会使用z3求解器举例。

[符号执行 (Symbolic Execution) 与约束求解 (Constraint Solving) - Flowlet的文章 - 知乎]: 
https://zhuanlan.zhihu.com/p/675592367
本文为软件分析学科中符号执行（Symbolic Execution）与约束求解（Constraint Solving）子系统的概念论述。

本文主要分为以下几部分：
1. 符号执行
	1. Part I：前言
	2. Part II：经典符号执行
	3. Part III：符号执行的发展
	4. Part IV：混合执行
	5. Part V：执行生成测试
	6. Part VI：选择符号执行
2. 2、约束求解
	1. Part I：前言
	2. Part II：约束求解
	3. Part III：约束求解问题
	4. Part IV：SAT问题求解
	5. Part V：SMT问题求解
