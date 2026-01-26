# SCA (Static Code Analysis) & SAST

[TOC]



## Res
### Related Topics
↗ [Program Language Processing & Compilation Theory (Compile-time)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md)
- ↗ [Compilation Phase](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)
	- ↗ [Lexical Analysis (Scanning)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Lexical%20Analysis%20(Scanning)/Lexical%20Analysis%20(Scanning).md)
	- ↗ [Syntactic Analysis (Parsing)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/Syntactic%20Analysis%20(Parsing).md)
	- ↗ [Semantic Analysis](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
	- ↗ [IR (Intermediate Representation) & IR Generation](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/2️⃣%20IR%20(Intermediate%20Representation)%20&%20IR%20Generation/IR%20(Intermediate%20Representation)%20&%20IR%20Generation.md)
	- ↗ [Code Generation](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Code%20Generation/Code%20Generation.md)
	- ↗ [Code Optimization](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Code%20Optimization/Code%20Optimization.md)
↗ [Compilation & Program Loading Tools](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
↗ [Debuggers & Disassemblers & Decompilers](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Debuggers%20&%20Disassemblers%20&%20Decompilers/Debuggers%20&%20Disassemblers%20&%20Decompilers.md)

↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [ASM (Assembly Languages)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)

↗ [File Types & File Formats](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20Types%20&%20File%20Formats.md)
↗ [Computer Languages & Programming Methodology](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Programming Language Processing & Program Execution](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Compilation & Program Loading Tools](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)

↗ [(Formal) Model Checking](../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

↗ [SRE (Software Reverse Engineering)](../SRE%20(Software%20Reverse%20Engineering)/SRE%20(Software%20Reverse%20Engineering).md)
↗ [IDA Pro](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🩻%20SRE%20&%20Binary%20Analysis/👱🏻‍♀️%20IDA%20Pro/IDA%20Pro.md)
↗ [gdb (GNU DeBugger)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/🐐%20GCC%20(The%20GNU%20Compiler%20Collection)/gdb%20(GNU%20DeBugger)/gdb%20(GNU%20DeBugger).md)
↗ [x86_64 ASM (x64 ASM)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/x86_64%20ASM%20(x64%20ASM)/x86_64%20ASM%20(x64%20ASM).md)

↗ [Static Code Analysis Tools (SCAT)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md)


### Learning Resources
【【全集】编译原理-静态程序分析【Static Program Analyses】】 https://www.bilibili.com/video/BV1Eu41167bV/?p=3&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

↗ [NJU /软件分析](../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/NJU%20南京大学/软件分析/软件分析.md)
- 《（静态）软件分析》课程网站（含课件、实验作业、实验文档）： https://tai-e.pascal-lab.net/lectures.html 
- 《（静态）软件分析》实验作业在线评测：https://oj.pascal-lab.net/
- [南京大学《软件分析》课程01（Introduction）](https://www.bilibili.com/video/BV1b7411K7P4?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程02（Intermediate Representation）](https://www.bilibili.com/video/BV1zE411s77Z?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程03（Data Flow Analysis I）](https://www.bilibili.com/video/BV1oE411K79d?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程04（Data Flow Analysis II）](https://www.bilibili.com/video/BV19741197zA?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程05（Data Flow Analysis - Foundations I）](https://www.bilibili.com/video/BV1A741117it?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程06（Data Flow Analysis - Foundations II）](https://www.bilibili.com/video/BV1964y1M7nL?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程07（Interprocedural Analysis）](https://www.bilibili.com/video/BV1GQ4y1T7zm?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程08（Pointer Analysis）](https://www.bilibili.com/video/BV1gg4y1z78p?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程09（Pointer Analysis - Foundations I）](https://www.bilibili.com/video/BV1NS4y1Q7UJ?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程10（Pointer Analysis - Foundations II）](https://www.bilibili.com/video/BV1fb4y1i7HY?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程11（Pointer Analysis - Context Sensitivity I）](https://www.bilibili.com/video/BV1wQ4y1v72e?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程12（Pointer Analysis - Context Sensitivity II）](https://www.bilibili.com/video/BV1aR4y1x7Zk?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程13（Static Analysis for Security）](https://www.bilibili.com/video/BV1Fq4y1B74m?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程14（Datalog-Based Program Analysis）](https://www.bilibili.com/video/BV1wa411k7Uv?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程15（CFL-Reachability and IFDS）](https://www.bilibili.com/video/BV1gL411j7vS?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程16（Soundness and Soundiness）](https://www.bilibili.com/video/BV1d3411s7tt?spm_id_from=333.788.comment.all.click)

📖 Static Program Analysis, by Anders Møller and Michael I. Schwartzbach. (2025)

📖 Principles of Program Analysis, by Flemming Nielson, Hanne R. Nielson and Chris Hankin. (2005)

📖 Semantics with Applications -- An Appetizer (2007)
Flemming Nielson, Hanne R. Nielson

📖 Porgram Analysis - An Apitizer (2020)
Flemming Nielson, Hanne Riis Nielson

📖 Formal Methods - An Apitizer (2017)
Flemming Nielson, Hanne Riis Nielson


### Other Resoruces



## Intro
> 📖 Static Program Analysis | Anders Møller and Michael I. Schwartzbach

Static program analysis has been used since the early 1960’s in optimizing compilers. More recently, it has proven useful also for bug finding and verification tools, and in IDEs to support program development. In the following, we give some examples of the kinds of questions about program behavior that arise in these different applications.
- **Analysis for program optimization Optimizing** compilers (including just-in-time compilers in interpreters) need to know many different properties of the program being compiled, in order to generate efficient code.
- **Analysis for program correctness** The most successful analysis tools that have been designed to detect errors (or verify absence of errors) target generic correctness properties that apply to most or all programs written in specific programming languages. In unsafe languages like C, such errors sometimes lead to critical security vulnerabilities. In more safe languages like Java, such errors are typically less severe, but they can still cause program crashes.
- **Analysis for program development** Modern IDEs perform various kinds of program analysis to support debugging, refactoring, and program understanding.

> 🔗 https://www.bilibili.com/video/BV1b7411K7P4

The essence of static code analysis:  (↗ [Program Abstraction & Abstract Interpretation](🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md))
- **Abstraction**
- **Safe-approximation**
	- Transfer functions (abstraction functions)
	- Control flows (branches)

![](../../../../../../../Assets/Pics/Screenshot%202025-11-11%20at%2023.40.55.png)


### (Formal) Language and Programming Language (PL)
↗ [Automata Theory and (Formal) Language Theory /Chomsky Hierarchy](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md#Chomsky%20Hierarchy)
↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)

↗ [Computer Languages & Programming Methodology](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Programming Language Theory (PLT)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)

![](../../../../../../../Assets/Pics/Pasted%20image%2020240909175821.png)

> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html##sec:2.3

Chomsky Hierarchy separates languages into four categories of decreasing expressive power. 

On the top of the hierarchy, we have type 3 languages. The type 3 language category is the most restrictive, and contain all languages definable by regular expressions. In practice, this only allows for repeats of small languages and cannot match nested parenthesis. Figuring out if a string is in a type 3 language is decidable.

In a type 2 language we can have words defined by nesting. This is very useful if you want nested parenthesis. This language is the basis of the syntax of most programming languages (except C: typedef I'm looking at you!). Type 2 languages can be recognized using a push down automaton.

In a type 1 language, we can define our language recursively, but we are also allowed to give context to the recursion. For example checking a program to see if a variable is in scope, is context sensitive because it depends on the declarations and how nested we are in the curly parenthesis:
``` C
int hello(int x) { 
  // Context { x , y }
  int y; 
  { 
    int z; 
    // Context { x , y, z} is z in scope? Yes
  }
  // Context { x , y} is z in scope? No
}
```

Finally, we have type 0 languages, is a set of words which can be recognized by a Turing machine. One example is all programs that terminate.


### Levels of Static Code Analysis by Language Processing Procedure and Levels of Syntax
↗ [Automata Theory and (Formal) Language Theory](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md) "Chomsky hierarchy" 

↗ [Instruction Levels In Computer - ISA and Beyond](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond.md)
↗ [Program Language Processing & Compilation Theory (Compile-time)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md)
- ↗ [Compilation Phase](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)
	- ↗ [Lexical Analysis (Scanning)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Lexical%20Analysis%20(Scanning)/Lexical%20Analysis%20(Scanning).md)
	- ↗ [Syntactic Analysis (Parsing)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/Syntactic%20Analysis%20(Parsing).md) 🤔
	- ↗ [Semantic Analysis](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
	- ↗ [IR (Intermediate Representation) & IR Generation](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/2️⃣%20IR%20(Intermediate%20Representation)%20&%20IR%20Generation/IR%20(Intermediate%20Representation)%20&%20IR%20Generation.md)

Most of this section of notes, the static code analysis, are semantical analysis, because this is the level that we are talking about security, vulnerability, etc. For lower level analysis, like lexical analysis or syntactic analysis, please refer to them as links given above, as in the compilation theory.

![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>

![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.21.14.png)
![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.22.45.png)


### Semantics of Program ⭐
↗ [Formal Syntax & Metasyntax (and Metalanguage)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage).md)
↗ [Formal Semantics and Programming Language](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [Mathematical Logic Basics (Formal Logic) /Semantic & The Semantics of Mathematical Logics](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md#Semantic%20&%20The%20Semantics%20of%20Mathematical%20Logics)

↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)


**Transition System**
- ↗ [Models of Computation & Abstract Machines](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md#(Symbolic)%20Transition%20System%20⭐)

**CFG**
- ↗ [CFG (Control Flow Graph) & ICFG (Interprocedure CFG)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/CFG%20(Control%20Flow%20Graph)%20&%20ICFG%20(Interprocedure%20CFG).md)
- ↗ [Constraint-Based Analysis & Control Flow Analysis](Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis.md)

**AST & CST**
- ↗ [AST & CST (Abstract & Contrete Syntax Tree)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/AST%20&%20CST%20(Abstract%20&%20Contrete%20Syntax%20Tree).md)


### Program Abstraction & Abstract Interpretation ⭐ ⭐ ⭐
For both bounded or unbounded static analysis. ❤️

![](../../../../../../../../Assets/Pics/Pasted%20image%2020251010000047.png)
<small>A Galois Connection is a connection between two ordered sets, with a concretion γ and an abstraction α function.</small>

> 🔗 https://www.bilibili.com/video/BV1b7411K7P4

The essence of static code analysis:  (↗ [Program Abstraction & Abstract Interpretation](🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md))
- **Abstraction**
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.57.45.png)
- **Safe-approximation**
	- Transfer functions (abstract functions)
		- In static analysis, transfer functions define how to evaluate different program statements on abstract values.
		- Transfer functions are defined according to “analysis problem” and the “semantics” of different program statements.
		- ![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.59.24.png)
	- Control flows (branches)
		- ![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2001.00.14.png)

↗ [Program Abstraction & Abstract Interpretation](🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)


### Static Application Security Testing (SAST)
> **Static Code Analysis (SCA) vs Static Application Security Testing (SAST)**
> 
> Static Application Security Testing (SAST) applies static code analysis to find security issues. In general, static code analysis can be used to find various types of issues like style, formatting, quality, performance or security issues. SAST tools are designed specifically to find security issues with high accuracy, striving for low false positive and false negative rates, and providing detailed information about root causes and remedies of spotted vulnerabilities.
> 
> 🔗 https://snyk.io/learn/open-source-static-code-analysis/



## Bounded Static Analysis (BSA)
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html

In bounded static analysis we want to talk about all the behaviors of the program **up to some depth**. There are no easy way to do this, because we have to handle a possible infinite set of traces, which by itself is hard to do.

The idea behind bounded static analysis is straight forward. ==Instead of selecting a single initial state and then applying the semantics on that until a trace has been made (this is what we did with dynamic analysis), we start with the set of all initial states and then apply the semantics to all states at once.== Essentially, if dynamic analysis is depth first search, static analysis is breath first. While we have the downside of having to work with infinite sets of traces, we can be smart about it, and use **abstractions** to represent the set using a finite number of traces.


### BSA in Formal Definition
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:1.1

The **Bounded Static Analysis** on a program $P$ can be defined as the set of traces of depth $n$: $\text{BSA}_P^n$ ; We can get this set using a **many-stepping function** $\text{step}$. It takes a set of traces and steps them one step. $$ \text{step}_P(T) = \left\{ \tau' s \;\middle|\; s \in \Sigma, \tau' \in T, \delta_P(\tau'_{|\tau'|}, s) \right\} $$
In the definition of $\text{step}_P()$, $\delta$ is the transition relation defined by the **single-step semantics**,  
and $\tau' s$ means appending $s$ to $\tau'$. Since we are always talking about the same program $P$, we'll sometimes omit it.

Now, we can define the **set of traces of up to length $n$**, as applying $\text{step()}$ to the initial state $n$ times, and taking the union of the results: $$\begin{aligned}
& \text{step}_P^0 = I_P \\
& \text{step}_P^n = \text{step}_P(\text{step}_P^{n-1}) \cup \text{step}_P^{n-1} \\
& \text{BSA}_P^n = \text{step}_P^n
\end{aligned}$$
Now, we can check for **assertion errors** down to depth $n$. Let's call this $\text{BAE}_P^n$, by seeing if any trace ends in an assertion error: $$ \text{BAE}_P^n \;\equiv\; \exists(\tau s) \in \text{BSA}_P^n \;\wedge\; s = \text{err}(\text{‘assertion error’}) $$
#### Safe-Approximation & May /Must Analysis
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:1.2

Sadly, it is infeasible, and sometimes impossible, to do computations over all traces at ones. Therefore, when designing an analysis, we either underestimate the set of traces (this is called a _must analysis_), or overestimate the set of traces (which is called a _may analysis_). A **must** analysis is named like that, because we know what the program **must** do, and a **may** analysis is called that because we know what the program **may** do.

In a **may analysis**, we **overestimate** every step, and in a **must analysis**, we **underestimate** every step: $$ \text{step}_{\text{must}}(T) \subseteq \text{step}(T) \subseteq \text{step}_{\text{may}}(T) $$
Naturally, we'll see that: $$ \text{step}_{\text{must}}^n \subseteq \text{step}^n \subseteq \text{step}_{\text{may}}^n $$
Essentially, 
- if we want to make sure that something **never** happens, or if we want to **warn** about an assertion error that *may* happen, we need a **may analysis**. $$ \neg \text{BAE}^n \Leftarrow \neg \text{BAE}_{\text{may}}^n $$
- If we want to **guarantee** that an assertion error *must* happen on a run, then we need a **must analysis**: $$\text{BAE}_{\text{must}}^n \Rightarrow \text{BAE}^n$$
#### No-Approximation BSA Analysis
↗ [Symbolic Execution & Concolic Execution](../👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Symbolic%20Execution%20&%20Concolic%20Execution/Symbolic%20Execution%20&%20Concolic%20Execution.md)


### Bounded Analysis 🆚 Context-Bounded Analysis 🆚 Unbounded Analysis
#bounded_analysis #context-bounded_analysis #unbounded_analysis

> 🤖 ChatGPT 5

**Bounded Static Analysis**
“**Bounded**” static analysis means that the analysis only explores **a limited (bounded) portion** of the program’s behavior.  
That is, it restricts the exploration by **some finite bound**, such as:
- **Loop unrolling bound** (e.g., analyze only up to 3 iterations of a loop)
- **Recursion depth bound** (e.g., only follow function calls up to depth 2)
- **Path length bound** (e.g., only consider execution paths up to N steps long)

The idea is to make the analysis **tractable** (since unbounded analysis can be undecidable or extremely slow), at the cost of **possibly missing some bugs or behaviors** beyond that bound.

It’s often used in **bounded model checking** and **symbolic execution**.


**Context-Bounded Static Analysis**
This adds another specific kind of bound: **context** refers to **thread interleavings** or **function call contexts**, depending on the setting.
1. **In concurrent programs:**  
	1. “**Context-bounded** analysis” limits the number of **context switches** between threads that are considered (e.g., only up to 2 switches).  
	2. This is known as **context-bounded model checking** — it’s surprisingly effective because many concurrency bugs appear with only a few context switches.
2. **In interprocedural analysis (functions calling other functions):**  
	1. “**Context-bounded**” may also mean limiting how much **call/return context** is tracked — for example, only distinguishing up to _k_ call sites (this is related to _k_-CFA in abstract interpretation).


**Unbounded Static Analysis**
Unbounded static analysis means that **no artificial limit** (no fixed bound) is imposed on how much of the program’s behavior the analysis explores. That is, it aims to reason about **all possible program executions**, **of any length**, **any loop iteration count**, **any recursion depth**, and (for concurrent programs) **any number of context switches**.

Unbounded analysis tries to prove **properties that hold for all possible executions**, such as:
- “This assertion never fails.”
- “No data race can occur.”
- “Variable `x` is always non-negative.”

To do this, unbounded analyses rely on **mathematical abstractions**, rather than explicit enumeration (both bounded and unbounded analysis make use of abstractions). For example:
- **Abstract interpretation** uses _abstract domains_ (like intervals, polyhedra) to summarize infinite behaviors.
- **Symbolic model checking** uses _induction_ or _fixpoint computation_ to reason about loops and recursion without unrolling them finitely.

|Aspect|**Bounded Analysis**|**Unbounded Analysis**|
|---|---|---|
|**Exploration**|Limited by a fixed bound (e.g., N steps, K context switches)|Unlimited — all executions are considered|
|**Completeness**|Incomplete (may miss bugs beyond the bound)|Complete (can prove correctness for all cases, if it terminates)|
|**Soundness**|Often sound _within the bound_, but not globally|Aims to be globally sound|
|**Scalability**|Usually fast (because it explores finitely many states)|Can be expensive or even undecidable|
|**Example tools**|Bounded model checkers (CBMC, ESBMC), concolic testing|Abstract interpreters, symbolic model checkers (e.g., SPIN, Infer, Astrée)|



## Unbounded Static Analysis (USA)
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:3

The problem with bounded static analysis is that even if we run our static analysis for 1.000.000 iterations, we have no guarantee that our program will not exhibit bad behavior in iteration 1.000.001. Unbounded Static Analysis seeks to fix this, by running the static analysis until a fixed point is reached.


### USA in Formal Definition
#### Safe-Approximation & May /Must Analysis



## Ref
[Static Code Analysis Explained]: https://snyk.io/learn/open-source-static-code-analysis/

