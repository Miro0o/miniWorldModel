# Program Language Processing & Compilation Theory (Compile-time)

[TOC]



## Res
### Related Topics
↗ [Automata Theory and (Formal) Language Theory](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
- ↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)
- ↗ [Context-Sensitive Languages (CSL) & Linear-Bounded Automata (LBA)](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md)
↗ [Programming Language Theory (PLT)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
- ↗ [Formal Semantics and Programming Language](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)

↗ [Software (Program) Techniques & Binary Engineering](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
↗ [SCA (Static Code Analysis) & SAST](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/SCA%20(Static%20Code%20Analysis)%20&%20SAST.md)
↗ [Natural Language Processing (NLP) & Computational Linguistics](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics.md)

↗ [Compilation & Program Loading Tools](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
↗ [CC (Compiler Compilers)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/📌%20CC%20(Compiler%20Compilers)/CC%20(Compiler%20Compilers).md)
↗ [Compilation & Program Loading Tools](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)

↗ [WASM (WebAssembly)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🖥️%20Web%20FrontEnd%20Dev/🚜%20WASM%20(WebAssembly)/WASM%20(WebAssembly).md)

↗ [Instruction Levels In Computer - ISA and Beyond](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond.md)


### Courses & Books
🏫 [Stanford /CS143: Compilers](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/Stanford/CS%20143%20Compilers/CS143:%20Compilers.md)

🏫 [NJU / 软件分析](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/NJU%20南京大学/软件分析/软件分析.md)
🏫 [UNDT /编译原理](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/UNDT%20国防科技大学/编译原理/编译原理.md)

🎬【第一课，编译原理介绍】 https://www.bilibili.com/video/BV1kq4y147DF?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【【全集】编译原理-静态程序分析【Static Program Analyses】】 https://www.bilibili.com/video/BV1Eu41167bV/?p=4&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

📖 Compilers: Principles, Techniques, and Tools 
Alfred V.Aho, Ravi Sethi, Jeffrey D.Ullman 

📖 Modern Compiler Implementation in C
Andrew W.Appel, Jens Palsberg

📖 Advanced Compiler Design and Implementation
Steven S.Muchnick



## Overview
![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>The process of compilation</small>

![img](../../../../../../Assets/Pics/v2-e5db6f0744ca512453bc3e30d5daa8ed_1440w.webp)
![img](../../../../../Assets/Pics/v2-021c8f16065c41abc2229967c3dbf1b2_1440w.webp)
<small>The process of NLP</small>


### Compilation Systems Workflow
![application_execution_and_computer_data_flow.excalidraw | 800](../../../../Assets/Illustrations/Computer%20System/application_execution_and_computer_data_flow.excalidraw.md)
<small>Application Execution and Computer Data Flow</small>

![](../../../../../Assets/Pics/Screenshot%202023-10-13%20at%2012.54.00PM.png)
<small>CSAPP. An example of C compilation process.</small>

Although the machine we presented is quite different from a real machine, the assembly process we described is not. Virtually every assembler in use today passes twice through the source code. The first pass assembles as much code as it can, while building a symbol table; the second pass completes the binary instructions using address values retrieved from the symbol table built during the first pass.

The final output of most assemblers is **a stream of relocatable binary instructions**. Binary code is relocatable when the addresses of the operands are relative to the location where the operating system has loaded the program in memory, and the operating system is free to load this code wherever it wants. 
#### 1️⃣ /2️⃣Preprocess & Compiling
↗ [Compilation Phase](Compilation%20Phase/Compilation%20Phase.md)

![](../../../../Assets/Pics/Screenshot%202025-09-22%20at%2020.18.53.png)
<small>Compilers Principles Techniques and Tools 2nd Edition</small>

![](../../../../Assets/Pics/Pasted%20image%2020250304120243.png)
<small><a>https://www.geeksforgeeks.org/phases-of-a-compiler/</a></small>
#### 3️⃣ Assembling
↗ [Assembly Phase](Assembly%20Phase/Assembly%20Phase.md)
#### 4️⃣ /5️⃣ Address Binding
##### Compile-time Binding

##### Loadtime Binding

##### Runtime Binding

#### 4️⃣ /5️⃣ Linking & Loading
↗ [Program Linking & Loading (Link-time & Load-time)](../🚽%20Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time)/Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time).md)


### Compilation Types & Strategies
> 🔗 https://silaoa.github.io/2019/2019-03-20-Cygwin系列（六）：使用Cygwin常见问题及应对.html

系统环境指的什么？GNU的构建工具链中使用CPU指令集架构、厂商、系统内核的三元组合来指示系统环境，很多构建工具的名称都带上了这个系统环境前缀，比如`x86_64-pc-cygwin-gcc`、`x86_64-unknown-cygwin-pkg-config`等。

1. **Native Compiler**
	1. 原生（native）编译构建，即编译构建命令所运行（host）的系统环境和编译构建输出目标（target）的系统环境一致； 
	2. Generates machine code for the same platform it runs on.
2. **Cross Compiler**
	1. 交叉（cross）编译构建，上述target和host不一致，即在A系统环境构建出在B系统上运行的目标，这在嵌入式开发中尤为多见。
	2. Produces machine code for a different platform than the one it runs on.
3. **Just-In-Time (JIT) Compiler**
	1. Compiles code at runtime to improve execution speed.
4. **Interpreter-Based Compiler (Transpiler)**: 
	2. Converts code from one high-level language to another.

- [Ahead-of-time](https://en.wikipedia.org/wiki/Ahead-of-time_compilation "Ahead-of-time compilation") (AOT)
- [Just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation "Just-in-time compilation") (JIT)
- [Tracing just-in-time](https://en.wikipedia.org/wiki/Tracing_just-in-time_compilation "Tracing just-in-time compilation")
- [Compile and go system](https://en.wikipedia.org/wiki/Compile_and_go_system "Compile and go system")
- [Precompilation](https://en.wikipedia.org/wiki/Precompilation "Precompilation")
- [Transcompilation](https://en.wikipedia.org/wiki/Source-to-source_compiler "Source-to-source compiler")
- [Recompilation](https://en.wikipedia.org/wiki/Dynamic_recompilation "Dynamic recompilation")
#### Static Compilation
> 🔗 https://en.wikipedia.org/wiki/Static_compilation

#### Dynamic Compilation

#### JIT Compilation
> ↗ [Java Virtual Machine (JVM)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/Java%20Virtual%20Machine%20(JVM)/Java%20Virtual%20Machine%20(JVM).md)

> 🔗 https://en.wikipedia.org/wiki/Just-in-time_compilation

In computing, **just-in-time (JIT)** compilation (also **dynamic translation** or **run-time compilations**) is compilation (of computer code) during execution of a program (at run time) rather than before execution. This may consist of source code translation but is more commonly bytecode translation to machine code, which is then executed directly. A system implementing a JIT compiler typically continuously analyses the code being executed and identifies parts of the code where the speedup gained from compilation or recompilation would outweigh the overhead of compiling that code.

JIT compilation is a combination of the two traditional approaches to translation to machine code—**ahead-of-time compilation (AOT)**, and **interpretation**—and combines some advantages and drawbacks of both. Roughly, JIT compilation combines the speed of compiled code with the flexibility of interpretation, with the overhead of an interpreter and the additional overhead of compiling and linking (not just interpreting). JIT compilation is a form of dynamic compilation, and allows adaptive optimization such as dynamic recompilation and microarchitecture-specific speedups. Interpretation and JIT compilation are particularly suited for dynamic programming languages, as the runtime system can handle late-bound data types and enforce security guarantees.
##### JIT Design
In a bytecode-compiled system, source code is translated to an intermediate representation known as bytecode. Bytecode is not the machine code for any particular computer, and may be portable among computer architectures. The bytecode may then be interpreted by, or run on a virtual machine. The JIT compiler reads the bytecodes in many sections (or in full, rarely) and compiles them dynamically into machine code so the program can run faster. This can be done per-file, per-function or even on any arbitrary code fragment; the code can be compiled when it is about to be executed (hence the name "just-in-time"), and then cached and reused later without needing to be recompiled.

By contrast, a traditional **interpreted virtual machine** will simply interpret the bytecode, generally with much lower performance. Some **interpreters** even interpret source code, without the step of first compiling to bytecode, with even worse performance. **Statically-compiled code** or **native code** is compiled prior to deployment. A **dynamic compilation environment** is one in which the compiler can be used during execution. A common goal of using JIT techniques is to reach or surpass the performance of static compilation, while maintaining the advantages of bytecode interpretation: Much of the "heavy lifting" of parsing the original source code and performing basic optimization is often handled at compile time, prior to deployment: compilation from bytecode to machine code is much faster than compiling from source. The deployed bytecode is portable, unlike native code. Since the runtime has control over the compilation, like interpreted bytecode, it can run in a secure sandbox. Compilers from bytecode to machine code are easier to write, because the portable bytecode compiler has already done much of the work.

JIT code generally offers far better performance than interpreters. In addition, it can in some cases offer better performance than static compilation, as many optimizations are only feasible at run-time:
1. The compilation can be optimized to the targeted CPU and the operating system model where the application runs. For example, JIT can choose [SSE2](https://en.wikipedia.org/wiki/SSE2 "SSE2") vector CPU instructions when it detects that the CPU supports them. To obtain this level of optimization specificity with a static compiler, one must either compile a binary for each intended platform/architecture, or else include multiple versions of portions of the code within a single binary.
2. The system is able to collect statistics about how the program is actually running in the environment it is in, and it can rearrange and recompile for optimum performance. However, some static compilers can also take profile information as input.
3. The system can do global code optimizations (e.g. [inlining](https://en.wikipedia.org/wiki/Inline_expansion "Inline expansion") of library functions) without losing the advantages of dynamic linking and without the overheads inherent to static compilers and linkers. Specifically, when doing global inline substitutions, a static compilation process may need run-time checks and ensure that a virtual call would occur if the actual class of the object overrides the inlined method, and boundary condition checks on array accesses may need to be processed within loops. With just-in-time compilation in many cases this processing can be moved out of loops, often giving large increases of speed.
4. Although this is possible with statically compiled garbage collected languages, a bytecode system can more easily rearrange executed code for better cache utilization.

Because a JIT must render and execute a native binary image at runtime, true machine-code JITs necessitate platforms that allow for data to be executed at runtime, making using such JITs on a [Harvard architecture](https://en.wikipedia.org/wiki/Harvard_architecture)-based machine impossible; the same can be said for certain operating systems and virtual machines as well. However, a special type of "JIT" may potentially not target the physical machine's CPU architecture, but rather an optimized VM bytecode where limitations on raw machine code prevail, especially where that bytecode's VM eventually leverages a JIT to native code.
##### Security
JIT compilation fundamentally uses executable data, and thus poses security challenges and possible exploits.

Implementation of JIT compilation consists of compiling source code or byte code to machine code and executing it. This is generally done directly in memory: the JIT compiler outputs the machine code directly into memory and immediately executes it, rather than outputting it to disk and then invoking the code as a separate program, as in usual ahead of time compilation. In modern architectures this runs into a problem due to [executable space protection](https://en.wikipedia.org/wiki/Executable_space_protection "Executable space protection"): arbitrary memory cannot be executed, as otherwise there is a potential security hole. Thus memory must be marked as executable; for security reasons this should be done _after_ the code has been written to memory, and marked read-only, as writable/executable memory is a security hole (see [W^X](https://en.wikipedia.org/wiki/W%5EX "W^X")). 

 >For instance Firefox's JIT compiler for Javascript introduced this protection in a release version with Firefox 

[JIT spraying](https://en.wikipedia.org/wiki/JIT_spraying "JIT spraying") is a class of [computer security exploits](https://en.wikipedia.org/wiki/Computer_security_exploit "Computer security exploit") that use JIT compilation for [heap spraying](https://en.wikipedia.org/wiki/Heap_spraying "Heap spraying"): the resulting memory is then executable, which allows an exploit if execution can be moved into the heap.
##### Tracing JIT Compilation
> 🔗 https://en.wikipedia.org/wiki/Tracing_just-in-time_compilation


### The Science of Building A Compiler
↗ [Mathematical Modeling & Abstraction](../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [Semantic Analysis](Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)

> 📖 Compilers Principles Techniques and Tools 2nd Edition

Compiler design is full of beautiful examples where complicated real-world problems are solved by abstracting the essence of the problem mathematically. ==These serve as excellent illustrations of how abstractions can be used to solve problems: take a problem, formulate a mathematical abstraction that captures the key characteristics, and solve it using mathematical techniques.== The problem formulation must be grounded in a solid understanding of the characteristics of computer programs, and the solution must be validated and refined empirically.

A compiler must accept all source programs that conform to the specification of the language; the set of source programs is infinite and any program can be very large, consisting of possibly millions of lines of code. Any transformation performed by the compiler while translating a source program must preserve the meaning of the program being compiled. Compiler writers thus have influence over not just the compilers they create, but all the programs that their compilers compile. This leverage makes writing compilers particularly rewarding; however, it also makes compiler development challenging.
#### Modeling in Compiler Design and Implementation
↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)
↗ [Attribute Grammars](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Attribute%20Grammars.md)
↗ [Tree Basics](../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/📌%20Graph%20Theory%20Basics/Tree%20Basics.md)
#### The Science of Code Optimization
> 📖 Compilers Principles Techniques and Tools 2nd Edition

The term "optimization" in compiler design refers to the attempts that a compiler makes to produce code that is more efficient than the obvious code. "Optimization" is thus a misnomer, since there is no way that the code produced by a compiler can be guaranteed to be as fast or faster than any other code that performs the same task.

In modern times, the optimization of code that a compiler performs has become both more important and more complex.
- It is more complex because processor architectures have become more complex, yielding more opportunities to improve the way code executes. It is more important because massively parallel computers require substantial optimization, or their performance suffers by orders of magnitude. With the likely prevalence of multi core machines (computers with chips that have large numbers of processors on them) , all compilers will have to face the problem of taking advantage of multiprocessor machines.
- It is hard, if not impossible, to build a robust compiler out of "hacks." Thus, an extensive and useful theory has been built up around the problem of optimizing code. The use of a rigorous mathematical foundation allows us to show that an optimization is correct and that it produces the desirable effect for all possible inputs. We shall see, starting in Chapter 9, how models such q,s graphs, matrices, and linear programs are necessary if the compiler is to produce well optimized code.
- On the other hand, pure theory alone is insufficient. Like many real world problems, there are no perfect answers. In fact, most of the questions that we ask in compiler optimization are undecidable. One of the most important skills in compiler design is the ability to formulate the right problem to solve. We need a good understanding of the behavior of programs to start with and thorough experimentation and evaluation to validate our intuitions.

Compiler optimizations must meet the following design objectives:
- The optimization must be **correct**, that is, preserve the meaning of the compiled program;
	- **It is impossible to overemphasize the importance of correctness**. It is trivial to write a compiler that generates fast code if the generated code need not be correct! Optimizing compilers are so difficult to get right that we dare say that no optimizing compiler is completely error-free! Thus, the most important objective in writing a compiler is that it is correct.
- The optimization must be **efficient** so that it improves the performance of many programs;
	- The second goal is that the compiler must be **effective** in improving the performance of many input programs. Normally, performance means the speed of the program execution. Especially in embedded applications, we may also wish to minimize the size of the generated code. And in the case of mobile devices, it is also desirable that the code minimizes power consumption. Typically, the same optimizations that speed up execution time also conserve power. Besides performance, usability aspects such as error reporting and debugging are also important.
- The compilation time must be kept reasonably **short**;
	- Third, we need to keep the compilation time **short** to support a rapid development and debugging cycle. This requirement has become easier to meet as machines get faster. Often, a program is first developed and debugged without program optimizations. Not only is the compilation time reduced, but more importantly, unoptimized programs are easier to debug, because the optimizations introduced by a compiler often obscure the relationship between the source code and the object code. Tuning on optimizations in the compiler sometimes exposes new problems in the source program; thus testing must again be performed on the optimized code. The need for additional testing sometimes deters the use of optimizations in applications, especially if their performance is not critical.
- The engineering effort required must be manageable (**simple**);
	- Finally, a compiler is a complex system; we must keep the system **simple** to assure that the engineering and maintenance costs of the compiler are manageable. There is an infinite number of program optimizations that we could implement, and it takes a nontrivial amount of effort to create a correct and effective optimization. We must prioritize the optimizations, implementing only those that lead to the greatest benefits on source programs encountered in practice.

Thus, in studying compilers, we learn not only how to build a compiler, but also the general methodology of solving complex and open-ended problems. The approach used in compiler development involves both theory and experimentation. We normally start by formulating the problem based on our intuitions on what the important issues are.
#### Programming Language Features Impacts Compiler Design
> ↗ [Computer Languages & Programming Methodology](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)

> 📖 Compilers Principles Techniques and Tools 2nd Edition
##### The Static/Dynamic Distinction

##### Environments and States

##### Static Scope and Block Structure

##### Explicit Access Control

##### Dynamic Scope

##### Parameter Passing Mechanisms

##### Aliasing



## Applications of Compiler Technology
### Implementation of High-Level Programming Languages


### Optimizations for Computer Architectures
#### Parallelism

#### Memory Hierarchies


### Design of New Computer Architectures
#### RISC

#### Specialized Architectures


### Program Translations
#### Binary Translation
> 🔗 https://en.wikipedia.org/wiki/Binary_translation

In computing, binary translation is a form of binary recompilation where sequences of instructions are translated from a source instruction set to the target instruction set. In some cases such as instruction set simulation, the target instruction set may be the same as the source instruction set, providing testing and debugging features such as instruction trace, conditional breakpoints and hot spot detection.

The two main types are static and dynamic binary translation. Translation can be done in hardware (for example, by circuits in a CPU) or in software (e.g. run-time engines, static recompiler, emulators).

#### Hardware Synthesis

#### Database Query Interpreters

#### Compiled Simulation


### Software Productivity Tools 
#### Type Checking

#### Bounds Checking

#### Memory-Management Tools



## Ref
[Compiler | wikipedia]: https://en.wikipedia.org/wiki/Compiler

虽然编译原理很重要，但是我一直不理解，为什么需要学这门课?
- 现在的 AI 架构都有用上编译技术进行中间优化，例如 Tensorflow、TVM，这些东西的本质就是一个内嵌的领域专用程序语言（EDSL）。 还有一个编程范式叫增量计算 （incremental computation），是反应式编程、数据流编程的一种，当节点上有任何数据更新/发送信号，数据相依的路径也会更新，游戏脚本设计、金融系统会用到。 还有树的优化，用元编程把树的走访消融在一块，可以减少快取丢失，浏览器的网页渲染会用得上。光追也有用元编程优化的技术。 所以编译原理学到的东西，不一定真的是要去搞编程语言设计还是编译器开发才用得上，做一些架构设计的时候它的精神本质就是一种编译器
- 还有编译器工具链的build系统可以对应到很多的设计应用，可以看知乎这篇 [https://zhuanlan.zhihu.com/p/375651053](https://zhuanlan.zhihu.com/p/375651053)

如何学习编译原理？ - 腾讯技术工程的回答 - 知乎 https://www.zhihu.com/question/21515496/answer/1689704074

>  [编译原理 -- 笔记](https://github.com/wangfupeng1988/read-notes/blob/master/video/编译原理.md)
>  
> 《编译原理》由 中科大 华保健老师 讲。视频地址 https://mooc.study.163.com/course/1000002001 （B 站也有相关资源）
>
> 看完了 [计算机组成](https://github.com/wangfupeng1988/read-notes/blob/master/video/计算机组成.md) 和 [汇编语言](https://github.com/wangfupeng1988/read-notes/blob/master/video/汇编语言.md) 就来看编译原理，接下来看会再去看操作系统，这四部分算是计算机学科的基础知识体系。其实一开始看汇编语言找到的是 [哈工大的一门课](https://www.bilibili.com/video/av17649289?from=search&seid=3383969367865956125) ，从一开始就看不懂，但是也不能轻易放弃啊，就坚持看了 1/3 左右。看弹幕上评论，感觉这门课是跟考研有关的，怪不得全都是一些理论知识，因此推荐考研的同学可以去尝试看一下。但是一直看不懂，那就是方法有问题，于是就切换频道，找到了中科大华保健老师的这门课。刚看了大约一个小时，就感觉老师讲的太好了，真的是深入浅出，想学编译原理的同学一定要看这门课。

[Phases of a Compiler | Geeksforgeeks]: https://www.geeksforgeeks.org/phases-of-a-compiler/

[编译原理三大经典：龙书 虎书 鲸书  | cnblog]: https://www.cnblogs.com/Arthurian/p/7881889.html
众所周知，在编译原理界有三本经典的书籍，它们分别被称为龙书、虎书、鲸书，但很多人不知道这三本书分别是什么，或者很多人只知道龙书而对其它两本书不了解，这里给出简单介绍并附上三本书PDF版本的下载链接。
