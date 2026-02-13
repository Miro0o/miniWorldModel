# The Essence of Computing - Programs & The Semantics of Programs

[TOC]



## Res
### Related Topics
↗ [Theory of Computation](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
↗ [Formal Semantics and Programming Language](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
- ↗ [Operational Semantics](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Operational%20Semantics/Operational%20Semantics.md)

↗ [Mathematical Modeling & Abstraction](../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [(Formal) Model Checking /1️⃣ System Modeling](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md#1️⃣%20System%20Modeling)

↗ [Computer Languages & Programming Methodology](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Programming Language Processing & Program Execution](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
- ↗ [Program Language Processing & Compilation Theory (Compile-time)](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md)
	- ↗ [Semantic Analysis](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
- ↗ [Program Execution (Runtime)](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
	- ↗ [Procedure (Function) Call & Runtime Memory Layout](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

↗ [Software Engineering](../Software%20Engineering/Software%20Engineering.md)

↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)
↗ [Computer Memory & Storage](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
↗ [Address Space & Memory Layout](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)

↗ [Operating System & OS Kernel (Theory Part)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)
↗ [Operating Systems & Kernels (Engineering Part)](../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)


### Other Resources
🔥 🎬【操作系统上的程序 (什么是程序和编译器) [南京大学2022操作系统-P2]】 https://www.bilibili.com/video/BV12L4y1379V/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### Related Concepts Review
#### Information, Language, and Computation
![ | 800](../../../Assets/Illustrations/Computer%20Science%20Philosophy/Human_and_knowledge.excalidraw.md)
<small>The relationship of language, information/data, computation, and automation.</small>
↗ [Universe, Self-Awareness, and Intelligence](../../Universe,%20Self-Awareness,%20and%20Intelligence.md)

![Automata_Formal_Lan.excalidraw | 800](../../../Assets/Illustrations/Math/Automata_Formal_Lan.excalidraw.md)
<small>Automata and Formal Language</small>
↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

![computer_architecture.excalidraw | 800](../../../Assets/Illustrations/Computer%20System/computer_architecture_and_computer_science.excalidraw.md)
<small>Computer System & Computer Science Overview</small>
↗ [Computer Architecture](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Architecture.md)

![application_execution_and_computer_data_flow.excalidraw | 800](../../Assets/Illustrations/Computer%20System/application_execution_and_computer_data_flow.excalidraw.md)
<small>Computer Program Execution Procedure: Top-down Review</small>
↗ [Programming Language Processing & Program Execution](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)

- 主体视角下的宇宙三大构成元素：信息、物质、能量
	- 语言为信息一切活动提供载体。
		- 信息可以脱离语言存在，但是语言是复杂信息运动的优质载体。脱离了语言，信息很难在主体意识下做复杂运动。
		- 自然语言，形式语言
	- 知识是有组织的信息
- 计算机科学的研究范畴：信息运动的自动化（自动化计算）
	- 计算机的构成：计算模型（数学）+ 硬件实现 + 软件实现
	- 计算机的应用：数学建模（算法）+ 软件实现（编程）
- 软件：软件 = 程序 + 文档
	- 程序 = 指令（编程语言）+ 数据
	- 程序通过语言的形式对计算机硬件的运行进行指令，以达到计算的目的。
- 结论
	- 编程语言和程序构成了计算机科学及计算的核心/灵魂；
	- 编程语言主要的研究范围在于形式语言的设计及实现，前者主要涉及对应的数学知识，后者还涉及软件工程；
	- 程序的主要研究范围在于程序的设计及运行，前者涉及具体的编程语言和算法，后者涉及计算机硬件和软件的工作原理。
#### Formal System & Language, Computer Language, and Programming Language
↗ [Language & Literature](../../Other%20Networks%20of%20Knowledge/Arts%20&%20Humanities/📃%20Language%20&%20Literature/Language%20&%20Literature.md) (the basic of information science)
↗ [Logic (and Critical Thinking)](../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md) "reasoning (an informal approach)"

↗ [Mathematics](../🧮%20Mathematics/Mathematics.md) "axiomatization"
- ↗ [Proof Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Theory.md) "reasoning in formal way"
	- ↗ [Gentzen-Style Proofs (Natural Deduction)](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)
↗ [Formal System, Formal Logics, and Its Semantics](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md) "formalization"
- ↗ [Classical Logic (Standard Formal Logic)](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)
↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md) "construction of formal language"
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md) "computation as a formal language"

↗ [Computer Languages & Programming Methodology](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Programming Language Theory (PLT)](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Formal Syntax & Metasyntax (and Metalanguage)](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage).md)
↗ [Formal Semantics and Programming Language](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)

> The distinction between formal language theory and logic
> #formal_logic #formal_language
> 
> (Generated by Google AI mode)
> 
> It is critical to distinguish between classifying the grammar of a logical language and classifying the logic itself. 
> -  **Formal language theory**, which includes the Chomsky hierarchy, is concerned with **syntax**. It asks whether a string of symbols is a valid formula.
> - **Logic** is concerned with **semantics** and the rules of reasoning. It asks whether a valid formula is true or provable. 
> 
> For example, the syntax of a programming language like Python can be described by a context-free grammar. However, the program's actual logic, meaning, and behavior are not described by the Chomsky hierarchy. Similarly, a formal language used for logic (e.g., predicate calculus) can be classified on the hierarchy, but the classification says nothing about the logic's ability to express concepts like truth or validity.
#### Algorithm, Program, and Software
↗ [Algorithm & Data Structure](../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithm%20&%20Data%20Structure.md) (what is algorithm?)
↗ [Software (Program) Analysis Basics](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/Software%20(Program)%20Analysis%20Basics.md) (what is program?)
↗ [Programming Language Processing & Program Execution](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
- ↗ [Program Execution (Runtime)](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
- ↗ [Procedure (Function) Call & Runtime Memory Layout](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)
↗ [Software Engineering](../Software%20Engineering/Software%20Engineering.md)


### Program Semantics, Abstraction, and Interpretation
↗ [Formal Semantics and Programming Language](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [Software (Program) Analysis Basics](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/Software%20(Program)%20Analysis%20Basics.md)
- ↗ [Program Abstraction & Abstract Interpretation /Intro](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md#Intro)

↗ [Models of Computation & Abstract Machines](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
- transition systems
- semantics of transition systems:
	- execution and traces
	- computational tree

 When we  assign meaning to other, we are giving "semantics". In programing language, programming language itself is a system of meaning. Likewise, we can invent many other systems with meaning, and map the meaning of programming language to this other system, i.e. giving semantics to programming language. This mapping is bilateral, meaning we can also say that the semantics of another system, say operational semantics, is its corresponding programming language.

Above mapping, or the action of assigning semantics, is interpretation. We can "interpret" a java program by its operational semantics, or "interpret" small step semantics from operational semantics as a transition system, or the reverse of these process. By default, we assume that during program interpretation we don't change the semantics, meaning we don't lose or add any information.

Program abstraction, is also a mapping between semantics. However, this time there is no guarantee that after mapping the original meaning (semantics) would not be altered. In fact,  the abstraction ($\to$) lose some information, and the concretion ($\leftarrow$, the reverse of abstraction) add some information. That being said, abstraction is still a very useful method to think about (interpret) the program, depending on your intention (what you want to interpret). Check out ↗ [Program Abstraction & Abstract Interpretation /Intro](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md#Intro).



## 😆 Semantics of Program In General
🔥 🎬【操作系统上的程序 (什么是程序和编译器) [南京大学2022操作系统-P2]】 https://www.bilibili.com/video/BV12L4y1379V/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>


### 📌 Operational Semantics, Transition System, and Computation Trace
↗ [Mathematical Logic (Foundations of Mathematics)](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
↗ [Formal System, Formal Logics, and Its Semantics](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Set Theory & Axiomatic Set Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)
- ↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/semantics.html##sec:2.1

**1. Program Semantics**
Program semantics is about assigning meaning to programs. When we can talk about what a piece of syntax mean, it is easier to explain what a program does.

We are going to discuss some different approaches to writing down the semantics of a program.  ==They all essentially turn programs syntax into mathematical logic.==

↗ [Mathematical Logic Basics (Formal Logic) /Semantic & The Semantics of Mathematical Logics](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md#Semantic%20&%20The%20Semantics%20of%20Mathematical%20Logics)


**2. Prerequisite: Mathematical Logic Languages & Natural Deduction**
↗ [Formal System, Formal Logics, and Its Semantics](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
↗ [Gentzen-Style Proofs (Natural Deduction)](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/semantics.html##sec:2.1

If you are unfamiliar with Natural Deduction and Gentzen-style proofs, please refer to [the Wikipedia page](https://en.wikipedia.org/wiki/Natural_deduction) on the topic. The sort story is that we refer to logical rules like this: $$\frac{Premise_1, ... Premise_n}{Conclusion}(name)$$

Which means that $(Premise_1 \land ... \land Premise_n)$ implies $Conclusion$.

If we want multiple ways of reaching the conclusion, we can make more rules. For example, conjunction $A\land B$ only requires one rule, both A and B has to be true, while disjunction $A\lor B$ has two rules: either A has to be true or B has to be true. $$\frac{AB}{A∧B}(∧)\frac{A}{A∨B}(∨L)\frac{B}{A∨B}(∨R)$$
In natural deduction, we build up syntactic objects which represents the truth of some event. We call them _judgements_. Many times you will see them written like $x\vdash y$, which is basically $\frac{x}{y}$ in its original Gentzen-style proofs. This is read: in the context of x, (we can infer) y is true. 


**3. Formal Semantics of Program Language**
↗ [Formal Semantics and Programming Language](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
- ↗ [Axiomatic Semantics (Hoare-Style Logic)](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Axiomatic%20Semantics%20(Hoare-Style%20Logic)/Axiomatic%20Semantics%20(Hoare-Style%20Logic).md)
- ↗ [Denotational Semantics](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Denotational%20Semantics/Denotational%20Semantics.md)
- ↗ [Operational Semantics](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Operational%20Semantics/Operational%20Semantics.md)

**Operational Semantics**
> ↗ [Operational Semantics](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Operational%20Semantics/Operational%20Semantics.md)

> 🔗 [Operational semantics - Wikipedia](https://en.wikipedia.org/wiki/Operational_semantics)
> 🔗 [Plotkin (2004)](https://courses.compute.dtu.dk/02242/topics/semantics.html#ref:plotkin2004origins)
> 🔗 [A structural approach to operational semantics - Plotkin](https://www.cs.cmu.edu/~crary/819-f09/Plotkin81.pdf)

==Operational semantics describes the semantic of a program as changes to a state.== This makes it ideal for describing **imperative languages** like the JVM bytecode.

**Structural Operational Semantics/ Small Step Semantics**
The _Structural Operational Semantics_ or _Small Step Semantics_ are written as judgments of the type ($\psi\vdash (\sigma→\overset{-}{\sigma})$) which means given the environment $\psi$, the state of the program $\sigma$ can be turned into $\overset{-}{\sigma}$.

The reason we call this approach the small step semantics is that we only execute a single operation at a time.

**Natural Operational Semantics or Big Step Semantics**
The _Natural Operational Semantics_ or _Big Step Semantics_, are describing running the program until it halts. $(\psi\vdash(\sigma\downarrow v)$ where $v$ is the final value of the program. Big step semantics often looks nicer than small step semantics, because it does not have to care about execution order.

Big Step semantics have the benefit of being easier to read, however, it has some big disadvantages, namely: we cannot reason about programs that run forever, and we cannot turn big step semantics into a working implementation. In contrast, small step semantics are easy to convert into an interpreter, and we can always recover the big step semantics from the operational semantics by simply applying the single step semantics until the program terminates with a value: $$\frac{\psi\vdash (\sigma\to\overset{-}{\sigma}), \ \  \psi\vdash(\overset{-}{\sigma}\downarrow v)}{\psi\vdash(\sigma\downarrow v)}(step) \ \ \ \frac{\psi\vdash (\sigma\to v)}{\psi\vdash(\sigma\downarrow v)}(done)$$


**4. Transition System** (in Kripe Structure)
(↗ [Models of Computation & Abstract Machines](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md))

Using operational semantics, we can define the meaning of a program $P$ as a Transition System:

A transition system $TS$ is a tuple $(S,Act,\to,I,AP,L)$ where
- $S$ is a set of states,
- $Act$ is a set of actions,
- $\to \subseteq S \times Act \times S$ is a transition relation,
	-  or use $\delta$ to express $\to$
- $I \subseteq S$ is a set of initial states,
	- $\sigma\in I$
	- or, when using $\tau$ or $\pi$ to symbol a trace on $TS$, $\tau_0 = \sigma \in I$ or $\pi_0=\sigma\in I$
- $AP$ is a set of atomic propositions, 
- $L$: $S→AP^2$ is a labeling function.

$TS$ is called **finite** if $S$, $Act$, and $AP$ are **finite**.

It is important to realize that in case a state has more than one outgoing transition, the
“next” transition is chosen in a purely **nondeterministic** fashion. That is, the outcome of
this selection process is not known a priori, and, hence, no statement can be made about the likelihood with which a certain transition is selected. Similarly, when the set of initial states consists of more than one state, the start state is selected nondeterministically.

For convenience, we write $s \xrightarrow[]{\alpha}s'$ instead of $(s,α,s') \in \to$.

The labeling function $L$ relates a set $L(s) \in AP^2$ of atomic propositions to any state $s$. $L(s)$ intuitively stands for exactly those atomic propositions $a \in AP$ which are satisfied by state $s$. Given that $Φ$ is a propositional logic formula, then $s$ satisfies the formula $Φ$ if the evaluation induced by $L(s)$ makes the formula Φ true; that is: $s \models \Phi \iff L(s) \models \Phi$.


**5. Traces and Maximal Trace Semantics**
A $Trace_P$ is the possible infinite sequence of states and operations of the program. $Trace_P=(States_P)^{*}$

The meaning of a program is now the set of traces that it exhibit:
 - $Semantics: Program \to 2^{Trace}$, or
 - $Sem(P)= \{\tau \in (State_P)^n ~ | ~ n \in [1,∞], ~ \tau_0 \in I_P, ~ \forall i \in [1, n−1], ~ \theta_P(\tau_{i−1},\tau_i) \}$

This is also called the **Maximal Trace Semantics**. We can now define properties, like does a program halt, using relatively well defined math: $\mathcal{L}_{halt}= \{P ~ | ~ ⁡P \in \mathcal{L}, ~ \forall \tau \in Sem(P), ~ |\tau|\neq \infty \}$, where $\mathcal{L}$ stands for Language. (↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md))
#### Mathematical Model of Computer: Turing Machine
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)


### Digital Circuits Semantics as State Machine (Transition System)
状态 = 寄存器保存的值 (flip-flop)
初始状态 = RESET (implementation dependent)
迁移 = 组合逻辑电路计算寄存器下一周期的值


### Programming Languages Semantics as State Machine (Transition System) -- C Language and OS for example
> ↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
> - Push-Down Automaton (PDA)
> 
> ↗ [Formal Semantics and Programming Language](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
#### 1️⃣ Program's State Machine: Application Perspective
C 程序的状态机模型1 (语义，semantics)
- 状态 = 堆 + 栈
- 初始状态 = `main` 的第一条语句
- 迁移 = 执行一条简单C语句
    - 任何 C 程序都可以改写成 “非复合语句” 的 C 代码 (没有函数调用)
    - [真的有这种工具](https://cil-project.github.io/cil/) (C Intermediate Language) 和[解释器](https://gitlab.com/zsaleeba/picoc)

C 程序的状态机模型2 (语义，semantics)
- 状态 = stack frame 的列表 (每个 frame 有 PC) + 全局变量(堆)
- 初始状态 = main(argc, argv), 全局变量初始化
- 迁移 = 执行 top stack frame PC 的语句; PC++
    - 函数调用 = push frame (frame.PC = 入口)
    - 函数返回 = pop frame

应用：将任何递归程序就地转为非递归
#### 2️⃣ Program's State Machine: CPU(Computer) Perspective
C 程序的状态机模型3 (语义，semantics)
- 状态 = 内存 MM + 寄存器 RR
- 初始状态 = (稍后回答)
- 迁移 = 执行一条指令
#### Application Program and OS Program
> ↗ [Operating System & OS Kernel (Theory Part)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)
> ↗ [Operating Systems & Kernels (Engineering Part)](../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)
> ↗ [Operating System Kernel (Kernel Mode)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
> ↗ [System Calls](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
> ↗ [Interrupts (Software & Hardware)](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)

操作系统上的程序:
- 所有的指令都只能计算
	- deterministic: `mov`, `add`, `sub`, `call`, ...
	- non-deterministic: `rdrand`, ...
	- 但这些指令甚至都无法使程序停下来 (NEMU: 加条 `trap` 指令)
- 调用操作系统 `syscall`
	- 把 `(M,R)`完全交给操作系统，任其修改
	    - 一个有趣的问题：如果程序不打算完全信任操作系统？
	- 实现与操作系统中的其他对象交互
	    - 读写文件/操作系统状态 (例如把文件内容写入 MM)
	    - 改变进程 (运行中状态机) 的状态，例如创建进程/销毁自己

==操作系统上的应用程序 = 计算 + `syscall`==
- 程序 = 计算 → `syscall` → 计算 → ...
	- 被操作系统加载
		- 通过另一个进程执行 `execve` 设置为初始状态
	- 状态机执行
		- 进程管理：`fork`, `execve`, `exit`, ...
		- 文件/设备管理：`open`, `close`, `read`, `write`, ...
		- 存储管理：`mmap`, `brk`, ...
	- 直到 `_exit (exit_group)` 退出
- 💀 问题：怎么构造一个最小的 Hello, World？
- 💀 问题：一个普通的、人畜无害的 Hello World C 程序执行的第一条指令在哪里？ /“二进制程序状态机的初始状态是什么？” (↗ [Intro to Computer Science /Questions Leading my CS Study](💋%20Intro%20to%20Computer%20Science/Intro%20to%20Computer%20Science.md#Questions%20Leading%20my%20CS%20Study))
	- `ld-linux-x86-64.so` 加载了 libc
		- 之后 libc 完成了自己的初始化
	    - RTFM: [libc startup](https://www.gnu.org/software/hurd/glibc/startup.html) on Hurd
	    - `main()` 的开始/结束并不是整个程序的开始/结束
	    - 例子：[hello-goodbye.c](https://jyywiki.cn/pages/OS/2022/demos/hello-goodbye.c)
	- 谁规定是 `ld-linux-x86-64.so`，而不是 `xxxx.so`?
		- `readelf` 告诉你答案

==操作系统上的应用程序：都在操作系统 API (syscall) 和操作系统中的对象上构建==
- 编译器 (gcc)，代表其他工具程序
	- 主要的系统调用：execve, read, write
	- `strace -f gcc a.c` (gcc 会启动其他进程)
		- 可以管道给编辑器 `vim -`
		- 编辑器里还可以 `%!grep` (细节/技巧)
- 图形界面程序 (xedit)，代表其他图形界面程序 (例如 vscode)
	- 主要的系统调用：`poll`, `recvmsg`, `writev`
	- `strace xedit`
	    - 图形界面程序和 X-Window 服务器按照 X11 协议通信
	    - 虚拟机中的 `xedit` 将 X11 命令通过 ssh (X11 forwarding) 转发到 Host
- 窗口管理器
    - 管理设备和屏幕 (`read`/`write`/`mmap`)
    - 进程间通信 (`send`, `recv`)
- 任务管理器
    - 访问操作系统提供的进程对象 (`readdir`/`read`)
    - 参考 gdb 里的 `info proc *`
- 杀毒软件
    - 文件静态扫描 (`read`)
    - 主动防御 (`ptrace`)
    - 其他更复杂的安全机制……


### Compilation: Switch /Transfer Between Program's State Machine
> ↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
> ↗ [Programming Language Processing & Program Execution](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
> ↗ [Compilation Phase](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)
> ↗ [Compilation & Program Loading Tools](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)

![Language_and_Programming_Language_Processing | 800](../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)

编译器：源代码 $S$ (状态机) → 二进制代码 $C$ (状态机) $$C=compile(S)$$
编译 (优化) 的正确性 (Soundness): 
- $S$ 与 $C$ 的可观测行为严格一致
    - system calls; volatile variable loads/stores; termination
- Trivially 正确 (但低效) 的实现
    - 解释执行/直接翻译 $S$ 的语义

现代 (与未来的) 编译优化: 
- 在保证观测一致性 (sound) 的前提下改写代码 (rewriting)
	- Inline assembly 也可以参与优化
	    - 其他优化可能会跨过不带 barrier 的 `asm volatile`
	- Eventual memory consistency
	- Call to external CU = write back visible memory
- 这给了我们很多想象的空间
	- Semantic-based compilation (synthesis)
	- AI-based rewriting
	- Fine-grained semantics & system call fusion

> [An executable formal semantics of C with applications](https://dl.acm.org/doi/10.1145/2103621.2103719) (POPL'12)
> [CompCert C verified compiler](https://compcert.org/motivations.html) and a [paper](https://xavierleroy.org/publi/compcert-backend.pdf) (POPL'06, Most Influential Paper Award 🏅)
> [Copy-and-patch compilation](https://dl.acm.org/doi/10.1145/3485513) (OOPSLA'21, Distinguished Paper 🏅)



## 🥸 Semantics of Program - Programming Language Specific

↗ [Computer Languages & Programming Methodology](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)

↗ [CPU (Central Processing Unit)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
↗ [Address Space & Memory Layout](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
↗ [Program Execution (Runtime)](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
↗ [Procedure (Function) Call & Runtime Memory Layout](../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-03-02%20at%204.11.10%20PM.png)
<small>Computer Components: Top-Level View</small>

![|450](../../../../Assets/Pics/Pasted%20image%2020250303220015.png)
![application_execution_and_computer_data_flow.excalidraw | 800](../../Assets/Illustrations/Computer%20System/application_execution_and_computer_data_flow.excalidraw.md)
<small>Dynamic code analysis</small>


### Declarative Programming Paradigm
#### Haskell
↗ [Haskell](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Functional%20Programming%20Languages/Haskell/Haskell.md)


### Imperative Programming Paradigm and Semantics as Transition Systems
#### Java and Java Bytecode
> ↗ [Computer Languages & Programming Methodology](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
> ↗ [Java](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md)
> ↗ [Java Bytecode](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Java%20Bytecode/Java%20Bytecode.md)
> ↗ [JVM Instrument Set & Java Bytecode](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/RISC%20(Reduced%20Instruction%20Set%20Computer)/JVM%20Instrument%20Set%20&%20Java%20Bytecode/JVM%20Instrument%20Set%20&%20Java%20Bytecode.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/semantics.html#sec:jvm-semantics

In this section, we are going to introduce some of the semantics of a limited JVM. It is incomplete and you would have to complete it on your own.

The goal of this section is to define the **small step semantics** of the JVM, and encode it in both math and in Python. You can follow along with the code in [`solutions/interpreter.py`](https://github.com/kalhauge/jpamb/blob/main/solutions/interpreter.py).

In math, we want to define judgments of $bc\vdash(s\to\overset{-}{s})$, $bc\vdash(s\to ok)$, or $bc\vdash (s\to err(\text{‘𝚖𝚜𝚐’}))$, where $bc$ is the bytecode and $s$ is the state. And, in Python we want to define a function `step`, which given a state s computes either a new state s or a done string.

```Python
def step(s : State) -> State | str:
    ...
```


**TL;DR - Java Bytecode Small Step Semantics as Transition System**
(Remember this statement? A program = data + instruction)

There are many formal semantics. Small step semantics is a kind of operational semantics. Transition system is a representation we use to express semantics. In a word, for a programming language, there are multiple (formal) semantics to interpret it, while there are also multiple representation systems to express such interpretation. They - programming language, semantics, and representation system - are not bounded to each other.

**State**: values $V$
- $V = ⟨\eta, \ \mu⟩$, where $\eta$ is the heap (global values $V_\eta$ shared across frames), and $\mu$ is the stack of frames (call stack) $\mu = \epsilon \ ⟨\lambda_1, \sigma_1,\iota_1⟩ \ ⟨\lambda_2, \sigma_2,\iota_2⟩ \ \cdots \ ⟨\lambda_n, \sigma_n,\iota_n⟩$ whose values are all stack values $V_\sigma$.
	- $\epsilon$ is the symbol we put at the bottom of the stack to indicate an empty stack. Whenever a stack pops out all items it have, the $\epsilon$ appear to be the top element. Hence, by checking wether the top element equals to $\epsilon$, we know wether we hit the bottom of the stack or not.
	- In a frame stack $⟨\lambda, \sigma,\iota⟩$:
		- $\lambda$ is an array of local data ($\lambda = [v_1, v_2, ...], \ v_i\in V_\sigma$). Array means the values are fetched by index.
		- $\sigma$ is a stack, or more specifically an operand stack ($\sigma=\epsilon \ o_1 \ o_2 \ o_3 \ ..., \ o_i \in V_\sigma$). Stack means the values are fetched FCLS.
		- $\iota$ is a single stack value $\iota \in V_\sigma$ representing PC (the value of memory address of next instruction to be executed).
	- Frame stack $\mu$ consists of stacks of frames $\{⟨\lambda_i, \sigma_i,\iota_i⟩\}$.
**Transition**: execution of one instruction of PC ($\iota$): $V \overset{bc[\iota]}{\to} V'$, or $⟨\eta, \ \mu⟩ \overset{bc[\iota]}{\to} ⟨\eta, \ \mu⟩'$
- Different instructions have different behaviors in changing $V$ to $V'$. See ↗ [JVM Instrument Set & Java Bytecode](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/RISC%20(Reduced%20Instruction%20Set%20Computer)/JVM%20Instrument%20Set%20&%20Java%20Bytecode/JVM%20Instrument%20Set%20&%20Java%20Bytecode.md) for the instruction set.

For example, we look at below decompiled `.class` file of java bytecde:
TBD.

Below ⬇️ are the explanation of above semantics, with more detailed examples


**The Context and the Program Counter**
As with all single step semantics rules, the JVM is run in a context. This context is the bytecode $bc$. For now we will define a simple operation $bc[\iota]$ which looks up the bytecode instruction at $\iota$. $\iota$ is program counter, i.e., the name of the **method** and the **offset** in that method.

We use the following short hands: $$\begin{aligned} & \iota =⟨\iota_m,\iota_o⟩ \\ 
& \iota+n=⟨\iota_m,\iota_o+n⟩ \\
& n/\iota=⟨\iota_m,n⟩
\end{aligned}$$
To do this in Python you can should do something like this:

```python
@dataclass
class PC:
    method: jvm.AbsMethodID
    offset: int

    def __iadd__(self, delta):
        self.offset += delta
        return self

    def __add__(self, delta):
        return PC(self.method, self.offset + delta)

    def __str__(self):
        return f"{self.method}:{self.offset}"


@dataclass
class Bytecode:
    suite: jpamb.Suite
    methods: dict[jvm.AbsMethodID, list[jvm.Opcode]]

    def __getitem__(self, pc: PC) -> jvm.Opcode:
        try:
            opcodes = self.methods[pc.method]
        except KeyError:
            opcodes = list(self.suite.method_opcodes(pc.method))
            self.methods[pc.method] = opcodes

        return opcodes[pc.offset]
```



**The Values (Locals and Heap), Operand (Operator) Stack**
It's all about the values (data as in data vs instruction) in a code.

The JVM is a **stack based virtual machine**, which means that instead of using *named variables* (registers) to store **intermediate values**, it uses an **operand stack (or operator stack)**. Intermediate values are those that generated during an execution (expression evaluation) and weren't explicitly declared by code. Besides intermediate values, there are values explicitly declared by the code. For these values, those that stored local to the methods are called **locals**, which can be accessed using indices, while values that stored in global memory and shared across methods is referred to as the **heap**.

The values in (our interpretation of) JVM are dynamically typed, this means that every value caries around information about its type. There are two kinds of values, stack values $V_\sigma$ and heap values $V_\eta$. $$\begin{aligned} & V_\sigma := (\mathcal{int} \ n) \ | \ (\mathcal{float} \ f) \ | \ (\mathcal{ref} \ r) \\
& V_\eta := V_\sigma \ | \ (\mathcal{byte} \ b) \ | \ (\mathcal{char} \ c) \ | \ (\mathcal{short} \ s) \ | \ (\mathcal{array} \ t \ a) \ | \ (\mathcal{object} \ cn \ fs)\end{aligned}$$
The stack contains ints are signed 32 bit integers, floats are 32 bit floating point values (IEEE 754 Standard), and references to the heap which are only 32 bits.

The heap can contain values from the stack, as well as bytes and chars that are 8 bits and 16 bits unsigned respectively, shorts are signed 16 bits, and arrays which a type and list of values, and objects which has a name and the values of the fields, which is a mapping from names to heap values.

> In this course we'll not cover **long** and **double** as they are a pain in the \*ss. Furthermore, we'll try to avoid inner classes and bootstrap methods as well.

Implementations of the values and types are stored in the [jpamb.jvm.Value](https://courses.compute.dtu.dk/02242/topics/semantics.html#https://github.com/kalhauge/jpamb/blob/main/jpamb/jvm/base.py).

The stack is a list of values: $\sigma=(V_\sigma)^*$. $\epsilon$ denote the empty stack and we add and remove elements from the end of the stack. A stack with the integers 1, 2, and 3, looks like this: $\sigma = \epsilon \ (\mathcal{int} \ 1)(\mathcal{int} \ 2)(\mathcal{int} \ 3)$. A simple implementation of this in python can be done like this:

```python
@dataclass
class Stack[T]:
    items: list[T]

    def __bool__(self) -> bool:
        return len(self.items) > 0

    @classmethod
    def empty(cls):
        return cls([])

    def peek(self) -> T:
        return self.items[-1]

    def pop(self) -> T:
        return self.items.pop(-1)

    def push(self, value):
        self.items.append(value)
        return self

    def __str__(self):
        if not self:
            return "ϵ"
        return "".join(f"{v}" for v in self.items)
```


---
> 🤖 ChatGPT 5 

The **operand stack (σ)** is where bytecode instructions temporarily **push and pop values** while evaluating expressions or performing computations. It is **not** the same as the call stack — instead, it’s used _within_ a single method to hold intermediate results.

Consider this Java code: 
```
int x = 2;
int y = 3;
int z = x + y;
```

The compiled bytecode might look like:
```
iconst_2         // push int 2
istore_1         // store into local variable 1 (x)
iconst_3         // push int 3
istore_2         // store into local variable 2 (y)
iload_1          // push x (2) onto stack
iload_2          // push y (3) onto stack
iadd             // pop top two ints (2, 3), add them, push result (5)
istore_3         // pop 5 from stack, store into local variable 3 (z)

```

Now, step-by-step, here’s what happens to **σ**:

| Instruction | Operand Stack (σ) Before | Operand Stack (σ) After | Description                 |
| ----------- | ------------------------ | ----------------------- | --------------------------- |
| `iconst_2`  | `[]`                     | `[2]`                   | push 2                      |
| `istore_1`  | `[2]`                    | `[]`                    | pop 2 → store into local[1] |
| `iconst_3`  | `[]`                     | `[3]`                   | push 3                      |
| `istore_2`  | `[3]`                    | `[]`                    | pop 3 → store into local[2] |
| `iload_1`   | `[]`                     | `[2]`                   | push local[1]               |
| `iload_2`   | `[2]`                    | `[2, 3]`                | push local[2]               |
| `iadd`      | `[2, 3]`                 | `[5]`                   | pop 3 and 2, push 5         |
| `istore_3`  | `[5]`                    | `[]`                    | pop 5 → store into local[3] |

So σ is simply the **temporary workspace** where bytecode instructions manipulate data.

Each bytecode instruction **operates on operands**, which it **pops** from σ, performs an operation, and possibly **pushes** a result back.  
For example:
- `iadd`: pops 2 ints, pushes their sum.
- `imul`: pops 2 ints, pushes their product.
- `if_icmpge`: pops 2 ints, compares them, possibly changes `ι` (the program counter).

That’s why it’s called an **operand stack** — it holds the **operands** (inputs) for the current operation.

---
JVM saves local variables of type $V_\sigma$ to a local array $\lambda$. This is were the inputs to the method goes and any data that should be saved on the method stack instead of in the heap. The local array is indexed normally $\lambda[0]$.

In its simplest form, the state of the JVM is a triplet $⟨\lambda,\sigma,\iota⟩$ which we will call a frame, where $\lambda$ is an array that stores all the locals, $\sigma$ is the operand stack and $\iota$ is the program counter.

In Python, we would write:
```Python
@dataclass
class Frame:
    locals: dict[int, jvm.Value]
    stack: Stack[jvm.Value]
    pc: PC

    def __str__(self):
        locals = ", ".join(f"{k}:{v}" for k, v in self.locals.items())
        return f"<{{{locals}}}, {self.stack}, {self.pc}>"
```



**The Simplified Stepping Function - On Current Frame (Current Method/Procedure Execution) Only**
Most of our operations only operate on one frame (no method/procedure calls, executing within single method/procedure), so we can already define our first simple SOS judgment on one frame: $$𝚋𝚌⊢⟨λ,σ,ι⟩→⟨\overset{-}{λ},\overset{-}{σ},\overset{-}{ι}⟩$$
Anticipating the definition of `State` in the next section, we define the stepping function, like so:

```Python
def step(state: State) -> State | str:
    frame = state.frames.peek() # Get the current frame
    match bc[frame.pc]:
      case ...
```

We are now ready for some examples. First we have the push operation (𝚙𝚞𝚜𝚑:𝙸 v): $$
\frac{𝚋𝚌[ι]=(\text{𝚙𝚞𝚜𝚑:𝙸 v})}{𝚋𝚌⊢⟨λ,σ,ι⟩→⟨λ,σ(𝚒𝚗𝚝v),ι+1⟩}(\mathcal{push}_I) $$
Which we can encode in Python like this:

```Python
case jvm.Push(value=v):
    frame.stack.push(v)
    frame.pc += 1
    return state
```

We can also load values from the locals using the (𝚕𝚘𝚊𝚍:𝙸n) operation: $$\frac{𝚋𝚌[ι]=(\text{𝚕𝚘𝚊𝚍:𝙸 n}) \ \ (𝚒𝚗𝚝v)=λ[n]}{𝚋𝚌⊢⟨λ,σ,ι⟩→⟨λ,σ(𝚒𝚗𝚝v),ι+1⟩}(load_I)$$
Which we can encode in Python like this:

```Python
case jvm.Load(type=jvm.Int(), index=n):
    v = frame.locals[n]
    assert v.type is jvm.Int()
    frame.stack.push(v)
    frame.pc += 1
    return state
```



**The Call Stack and Heap -- Complete Stepping Function**
Besides execution within one method /procedure, methods /procedures are also capable of calling other methods. To support this we need a stack of frames, or a call stack μ: $$\mu ∼ \cdots ⟨λ_2,σ_2,ι_2⟩⟨λ_1,σ_1,ι_1⟩$$
And now since we have multiple frames, we also need a way for the frames to share data. We call that the heap η. And it is just mapping from memory locations to $𝐕_η$. $$η∈ℕ→𝐕_η$$
The state is now just a tuple of the heap and the call stack: $⟨η,μ⟩$. Which we can represent in Python like this:

```Python
@dataclass
class State:
    heap: dict[int, jvm.Value]
    frames: Stack[Frame]
```

So now we have reached the correct definition of the stepping function, over the State. $$𝚋𝚌⊢⟨η,μ⟩→⟨\overset{-}{η},\overset{-}{μ}⟩$$
We can use the operations we defined over frames, by lifting them into the state, by doing the frame operation **on the top frame**: $$\begin{aligned} & \frac{𝚋𝚌⊢⟨λ,σ,ι⟩→⟨\overset{-}{\lambda},\overset{-}{\sigma},\overset{-}{\iota}⟩}{𝚋𝚌⊢μ⟨λ,σ,ι⟩→μ⟨\overset{-}{λ},\overset{-}{σ},\overset{-}{ι}⟩}(\mathcal{lift}_\mu) \\ \\
& \frac{𝚋𝚌⊢μ→\overset{-}{μ}}{𝚋𝚌⊢⟨η,μ⟩→⟨η,\overset{-}{μ}⟩}(\mathcal{lift}_\eta)
\end{aligned}$$


**Program Termination**
Our simplification of the JVM terminates when we exit from the last method, or we encounter an error. We do that with either an `ok` or an `err(‘𝚛𝚎𝚊𝚜𝚘𝚗’)`: $$\begin{aligned}

& \frac{𝚋𝚌[ι]=(𝚛𝚎𝚝𝚞𝚛𝚗:𝙸)}{𝚋𝚌⊢⟨η,ϵ⟨λ,σ(𝚒𝚗𝚝v),ι⟩⟩→ok}(return \ \epsilon) \\ \\

& \frac{𝚋𝚌[ι]=(𝚛𝚎𝚝𝚞𝚛𝚗:𝙸) \ \ \begin{aligned} & μ_1=⟨λ_2,σ_2,ι_2⟩ \\ & μ_2=⟨λ,σ(𝚒𝚗𝚝v),ι⟩\end{aligned}}{𝚋𝚌⊢⟨η,μμ_1μ_2⟩→⟨η,μ⟨λ_2,σ_2(𝚒𝚗𝚝v),ι_2+1⟩⟩}(return \ \mu) 
\end{aligned}$$
In Python, we can represent terminating with no error by simply returning `ok` if the stack is empty:

```Python
case jvm.Return(type=jvm.Int()):
    v1 = frame.stack.pop()
    state.frames.pop()
    if state.frames:
        frame = state.frames.peek()
        frame.stack.push(v1)
        frame.pc += 1
        return state
    else:
        return "ok"
```

One example of throwing an error is the divide operation: $$\begin{aligned} 
& \frac{𝚋𝚌[ι]=(\text{𝚋𝚒𝚗𝚊𝚛𝚢:𝙸 𝚍𝚒𝚟}) \ v_2=0}{𝚋𝚌⊢⟨σ(𝚒𝚗𝚝v_1)(𝚒𝚗𝚝v_2),ι⟩→err(\text{‘𝚍𝚒𝚟𝚒𝚍𝚎 𝚋𝚢 𝚣𝚎𝚛𝚘’})}(\mathcal{bdiv}_{I0}) \\ \\
& \frac{𝚋𝚌[ι]=(\text{𝚋𝚒𝚗𝚊𝚛𝚢:𝙸 𝚍𝚒𝚟}) \ \ \begin{aligned} & v_2≠0 \\ & v_3=v_1 /_{𝚒𝟹𝟸} v_2\end{aligned}}{𝚋𝚌⊢⟨σ(𝚒𝚗𝚝v_1)(𝚒𝚗𝚝v_2),ι⟩→⟨σ(𝚒𝚗𝚝v_3),ι+1⟩}(\mathcal{bdiv}_{I1})
\end{aligned}$$
Which can be translated into a single case match in Python. In the case we terminate with an error, we just return the corresponding string:

```Python
case jvm.Binary(type=jvm.Int(), operant=jvm.BinaryOpr.Div):
    v2, v1 = frame.stack.pop(), frame.stack.pop()
    assert v1.type is jvm.Int(), f"expected int, but got {v1}"
    assert v2.type is jvm.Int(), f"expected int, but got {v2}"
    if v2 == 0:
        return "divide by zero"

    frame.stack.push(jvm.Value.int(v1.value // v2.value))
    frame.pc += 1
    return state
```
#### C and C++
↗ [C-Based Languages](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/C-Based%20Languages.md)
↗ [C & CPP](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)

#### Go

#### Rust



## Ref
[👍 How libc startup in a process works?]: https://www.gnu.org/software/hurd/glibc/startup.html
**Statically-linked program**
- The ELF headers points program start at `_start`.
- `_start` (sysdeps/mach/hurd/i386/static-start.S) calls `_hurd_stack_setup`
- `_hurd_stack_setup` (sysdeps/mach/hurd/i386/init-first.c) calls `first_init` which calls `__mach_init` to initialize enough to run RPCs, then runs the `_hurd_preinit_hook` hooks, which initialize global variables of libc.
- `_hurd_stack_setup` (sysdeps/mach/hurd/i386/init-first.c) calls `_hurd_startup`.
- `_hurd_startup` (hurd/hurdstartup.c) gets hurdish information from servers and calls its `main` parameter.
- the `main` parameter was actually `doinit` (in sysdeps/mach/hurd/i386/init-first.c), which mangles the stack and calls `doinit1` which calls `init`.
- `init` sets threadvars, tries to initialize threads (and perhaps switches to the new stack) and gets to call `init1`.
- `init1` gets the Hurd block, calls `_hurd_init` on it
- `_hurd_init` (hurd/hurdinit.c) initializes initial ports, starts the signal thread, runs the `_hurd_subinit` hooks (`init_dtable` hurd/dtable.c notably initializes the FD table and the `_hurd_fd_subinit` hooks, which notably checks `std*`).
- We are back to `_start`, which jumps to `_start1` which is the normal libc startup which calls `__libc_start_main`
- `__libc_start_main` (actually called `LIBC_START_MAIN` in csu/libc-start.c) initializes libc, tls, libpthread, atexit
- `__libc_start_main` calls initialization function given as parameter `__libc_csu_init`,
- `__libc_csu_init` (csu/elf-init.c) calls `preinit_array_start` functions
- `__libc_csu_init` calls `_init`
- `_init` (sysdeps/i386/crti.S) calls `PREINIT_FUNCTION`, (actually libpthread on Linux, `__gmon_start__` on hurd)
- back to `__libc_csu_init` calls `init_array_start` functions
- back to `__libc_start_main`, it calls calls application's `main`, then `exit`.

**dynamically-linked program**
- dl.so ELF headers point its start at `_start`.
- `_start` (sysdeps/i386/dl-machine.h) calls `_dl_start`.
- `_dl_start` (elf/rtld.c) initializes `bootstrap_map`, calls `_dl_start_final`
- `_dl_start_final` calls `_dl_sysdep_start`.
- `_dl_sysdep_start` (sysdeps/mach/hurd/dl-sysdep.c) calls `__mach_init` to initialize enough to run RPCs, then calls `_hurd_startup`.
- `_hurd_startup` (hurd/hurdstartup.c) gets hurdish information from servers and calls its `main` parameter.
- the `main` parameter was actually `go` inside `_dl_sysdep_start`, which calls `dl_main`.
- `dl_main` (elf/rtld.c) interprets ld.so parameters, loads the binary and libraries, calls `_dl_allocate_tls_init`.
- we are back to `go`, which branches to `_dl_start_user`.
- `_dl_start_user` (./sysdeps/i386/dl-machine.h) runs `RTLD_START_SPECIAL_INIT` (sysdeps/mach/hurd/i386/dl-machine.h) which calls `_dl_init_first`.
- `_dl_init_first` (sysdeps/mach/hurd/i386/init-first.c) calls `first_init` which calls `__mach_init` to initialize enough to run RPCs, then runs the `_hurd_preinit_hook` hooks, which initialize global variables of libc.
- `_dl_init_first` calls `init`.
- `init` sets threadvars, tries to initialize threads (and perhaps switches to the new stack) and gets to call `init1`.
- `init1` gets the Hurd block, calls `_hurd_init` on it
- `_hurd_init` (hurd/hurdinit.c) initializes initial ports, starts the signal thread, runs the `_hurd_subinit` hooks (`init_dtable` hurd/dtable.c notably initializes the FD table and the `_hurd_fd_subinit`hooks, which notably checks `std*`).
- we are back to `_dl_start_user`, which calls `_dl_init` (elf/dl-init.c) which calls application initializers.
- `_dl_start_user` jumps to the application's entry point, `_start`
- `_start` (sysdeps/i386/start.S) calls `__libc_start_main`
- `__libc_start_main` (actually called `LIBC_START_MAIN` in csu/libc-start.c) initializes libc, atexit,
- `__libc_start_main` calls initialization function given as parameter `__libc_csu_init`,
- `__libc_csu_init` (csu/elf-init.c) calls `_init`
- `_init` (sysdeps/i386/crti.S) calls `PREINIT_FUNCTION`, (actually libpthread on Linux, `__gmon_start__` on hurd)
- back to `__libc_csu_init` calls `init_array_start` functions
- back to `__libc_start_main`, it calls application's `main`, then `exit`.

