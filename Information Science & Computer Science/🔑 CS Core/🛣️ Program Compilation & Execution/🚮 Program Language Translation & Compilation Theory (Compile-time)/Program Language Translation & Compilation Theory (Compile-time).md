# Program Language Translation & Compilation Theory (Compile-time)

[TOC]



## Res
### Related Topics
↗ [Automata Theory and (Formal) Language Theory](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
↗ [Programming Language Theory (PLT)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)

↗ [Software Analysis & Binary Engineering](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/Software%20Analysis%20&%20Binary%20Engineering.md)
↗ [Natural Language Processing (NLP)](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)/Natural%20Language%20Processing%20(NLP).md)

↗ [Compilation & Program Loading Tools](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
↗ [CC (Compiler Compilers)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/📌%20CC%20(Compiler%20Compilers)/CC%20(Compiler%20Compilers).md)
↗ [Compilation & Program Loading Tools](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)

↗ [WASM (WebAssembly)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🖥️%20Web%20FrontEnd%20Dev/🚜%20WASM%20(WebAssembly)/WASM%20(WebAssembly).md)


### Courses & Books
🏫 [Stanford /CS143: Compilers](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/Stanford/CS%20143%20Compilers/CS143:%20Compilers.md)

🏫 [NJU / 软件分析](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/NJU%20南京大学/软件分析/软件分析.md)
🏫 [UNDT /编译原理](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/UNDT%20国防科技大学/编译原理/编译原理.md)

🎬【第一课，编译原理介绍】 https://www.bilibili.com/video/BV1kq4y147DF?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【【全集】编译原理-静态程序分析【Static Program Analyses】】 https://www.bilibili.com/video/BV1Eu41167bV/?p=4&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Overview
![img](../../../../../../Assets/Pics/v2-e64ffca4c671f0038e0763202d55ec53_1440w.webp)
<small>The process of compilation</small>

![img](../../../../../../Assets/Pics/v2-e5db6f0744ca512453bc3e30d5daa8ed_1440w.webp)
![img](../../../../../Assets/Pics/v2-021c8f16065c41abc2229967c3dbf1b2_1440w.webp)
<small>The process of NLP</small>


### Compilation Types
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



## Compilation Systems Workflow
![application_execution_and_computer_data_flow.excalidraw | 800](../../../../Assets/Illustrations/Computer%20System/application_execution_and_computer_data_flow.excalidraw.md)
<small>Application Execution and Computer Data Flow</small>

![](../../../../../Assets/Pics/Screenshot%202023-10-13%20at%2012.54.00PM.png)
<small>CSAPP</small>

Although the machine we presented is quite different from a real machine, the assembly process we described is not. Virtually every assembler in use today passes twice through the source code. The first pass assembles as much code as it can, while building a symbol table; the second pass completes the binary instructions using address values retrieved from the symbol table built during the first pass.

The final output of most assemblers is **a stream of relocatable binary instructions**. Binary code is relocatable when the addresses of the operands are relative to the location where the operating system has loaded the program in memory, and the operating system is free to load this code wherever it wants. 

### 1️⃣ Preprocess


### 2️⃣ Compiling


### 3️⃣ Assembling


### 4️⃣/5️⃣ Address Binding
#### Compile-time Binding

#### Loadtime Binding

#### Runtime Binding


### 4️⃣/5️⃣ Linking & Loading
↗ [Program Linking & Loading (Link-time & Load-time)](../🚽%20Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time)/Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time).md)



## Compilation Strategies
- [Ahead-of-time](https://en.wikipedia.org/wiki/Ahead-of-time_compilation "Ahead-of-time compilation") (AOT)
- [Just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation "Just-in-time compilation") (JIT)
- [Tracing just-in-time](https://en.wikipedia.org/wiki/Tracing_just-in-time_compilation "Tracing just-in-time compilation")
- [Compile and go system](https://en.wikipedia.org/wiki/Compile_and_go_system "Compile and go system")
- [Precompilation](https://en.wikipedia.org/wiki/Precompilation "Precompilation")
- [Transcompilation](https://en.wikipedia.org/wiki/Source-to-source_compiler "Source-to-source compiler")
- [Recompilation](https://en.wikipedia.org/wiki/Dynamic_recompilation "Dynamic recompilation")



## Binary Translation
> 🔗 https://en.wikipedia.org/wiki/Binary_translation

In computing, binary translation is a form of binary recompilation where sequences of instructions are translated from a source instruction set to the target instruction set. In some cases such as instruction set simulation, the target instruction set may be the same as the source instruction set, providing testing and debugging features such as instruction trace, conditional breakpoints and hot spot detection.

The two main types are static and dynamic binary translation. Translation can be done in hardware (for example, by circuits in a CPU) or in software (e.g. run-time engines, static recompiler, emulators).



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
![](../../../../Assets/Pics/Pasted%20image%2020250304120243.png)