# SCA (Static Code Analysis) & SAST

[TOC]



## Res
### Related Topics
↗ [Program Language Translation & Compilation Theory (Compile-time)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time).md)
- ↗ [Compilation Phase](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)
	- ↗ [Lexical Analysis (Scanning)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Lexical%20Analysis%20(Scanning)/Lexical%20Analysis%20(Scanning).md)
	- ↗ [Syntactic Analysis (Parsing)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/Syntactic%20Analysis%20(Parsing).md)
	- ↗ [Semantic Analysis](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
	- ↗ [IR (Intermediate Representation) & IR Generation](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/2️⃣%20IR%20(Intermediate%20Representation)%20&%20IR%20Generation/IR%20(Intermediate%20Representation)%20&%20IR%20Generation.md)
	- ↗ [Code Generation](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Code%20Generation/Code%20Generation.md)
	- ↗ [Code Optimization](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Code%20Optimization/Code%20Optimization.md)
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

📖 Static Program Analysis, by Anders Møller and Michael I. Schwartzbach.

📖 Principles of Program Analysis, by Flemming Nielson, Hanne R. Nielson and Chris Hankin.



## Intro
> 📖 Static Program Analysis | Anders Møller and Michael I. Schwartzbach

Static program analysis has been used since the early 1960’s in optimizing compilers. More recently, it has proven useful also for bug finding and verification tools, and in IDEs to support program development. In the following, we give some examples of the kinds of questions about program behavior that arise in these different applications.
- **Analysis for program optimization Optimizing** compilers (including just-in-time compilers in interpreters) need to know many different properties of the program being compiled, in order to generate efficient code.
- **Analysis for program correctness** The most successful analysis tools that have been designed to detect errors (or verify absence of errors) target generic correctness properties that apply to most or all programs written in specific programming languages. In unsafe languages like C, such errors sometimes lead to critical security vulnerabilities. In more safe languages like Java, such errors are typically less severe, but they can still cause program crashes.
- **Analysis for program development** Modern IDEs perform various kinds of program analysis to support debugging, refactoring, and program understanding.

> 🔗 https://www.bilibili.com/video/BV1b7411K7P4

Two Words to Conclude Static Analysis:
- **Abstraction**
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.57.45.png)
- **Over-approximation**
	- Transfer functions
		- In static analysis, transfer functions define how to evaluate different program statements on abstract values.
		- Transfer functions are defined according to “analysis problem” and the “semantics” of different program statements.
		- ![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.59.24.png)
	- Control flows
		- ![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2001.00.14.png)


### Language and  Programming Language
↗ [Automata Theory and (Formal) Language Theory](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)

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


### Levels of Static Code Analysis & Intermediate Representation
↗ [Instruction Levels In Computer - ISA and Beyond](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond.md)
↗ [Program Language Translation & Compilation Theory (Compile-time)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time).md)
- ↗ [Compilation Phase](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)
	- ↗ [Lexical Analysis (Scanning)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Lexical%20Analysis%20(Scanning)/Lexical%20Analysis%20(Scanning).md)
	- ↗ [Syntactic Analysis (Parsing)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/Syntactic%20Analysis%20(Parsing).md)
	- ↗ [Semantic Analysis](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
	- ↗ [IR (Intermediate Representation) & IR Generation](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/2️⃣%20IR%20(Intermediate%20Representation)%20&%20IR%20Generation/IR%20(Intermediate%20Representation)%20&%20IR%20Generation.md)

![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>

![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.21.14.png)
![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.22.45.png)


### Control Flow Graph (CFG)
↗ [Constraint (Control Flow) Analysis](Constraint%20(Control%20Flow)%20Analysis/Constraint%20(Control%20Flow)%20Analysis.md)



## Static Application Security Testing (SAST)
> **Static Code Analysis (SCA) vs Static Application Security Testing (SAST)**
> 
> Static Application Security Testing (SAST) applies static code analysis to find security issues. In general, static code analysis can be used to find various types of issues like style, formatting, quality, performance or security issues. SAST tools are designed specifically to find security issues with high accuracy, striving for low false positive and false negative rates, and providing detailed information about root causes and remedies of spotted vulnerabilities.
> 
> 🔗 https://snyk.io/learn/open-source-static-code-analysis/



## Ref
[Static Code Analysis Explained]: https://snyk.io/learn/open-source-static-code-analysis/

