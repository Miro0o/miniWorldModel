# Compilation & Program Loading Tools

[TOC]



## Res
### Related Topics
↗ [Application Runtimes & SDKs](../🚠%20Application%20Runtimes%20&%20SDKs/Application%20Runtimes%20&%20SDKs.md)
↗ [Programming Language Processing & Program Execution](../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)

↗ [SCA (Static Code Analysis) & SAST](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/SCA%20%28Static%20Code%20Analysis%29%20&%20SAST.md)
↗ [Program Language Processing & Compilation Theory (Compile-time)](../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20%28Compile-time%29/Program%20Language%20Processing%20&%20Compilation%20Theory%20%28Compile-time%29.md)

↗ [C & CPP](../../GPL%20%28General%20Purpose%20Languages%29/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)
↗ [WASM (WebAssembly)](../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20%28and%20Web%20Development%29/Internet%20%28Web%29%20Application%20Systems%20-%20Architecture%20&%20Patterns/Web%20Application%20Execution%20&%20Deployment%20Patterns/🚜%20WASM%20%28WebAssembly%29/WASM%20%28WebAssembly%29.md)

↗ [IDE (Integrated Development Environment)](../../../../Software%20Engineering/CASE%20%28Computer-Aided%20Software%20Engineering%29%20Tools/Lower%20CASE%20Tools/IDE%20%28Integrated%20Development%20Environment%29/IDE%20%28Integrated%20Development%20Environment%29.md)

↗ [LLVM](🦅%20LLVM/LLVM.md)
- ↗ [clang & clang++](🦅%20LLVM/clang%20&%20clang++.md)

↗ [GCC (The GNU Compiler Collection)](🐐%20GCC%20%28The%20GNU%20Compiler%20Collection%29/GCC%20%28The%20GNU%20Compiler%20Collection%29.md)
- ↗ [gcc (GNU C Compiler)](🐐%20GCC%20%28The%20GNU%20Compiler%20Collection%29/gcc%20%28GNU%20C%20Compiler%29/gcc%20%28GNU%20C%20Compiler%29.md)

↗ [JS Engines (JS Compilation)](../🚠%20Application%20Runtimes%20&%20SDKs/JavaScript%20Runtime%20Environments/JS%20Runtimes/🚒%20JS%20Engines%20%28JS%20Compilation%29/JS%20Engines%20%28JS%20Compilation%29.md)
- ↗ [Google V8](../🚠%20Application%20Runtimes%20&%20SDKs/JavaScript%20Runtime%20Environments/JS%20Runtimes/🚒%20JS%20Engines%20%28JS%20Compilation%29/Google%20V8/Google%20V8.md)

↗ [Java Runtimes (JRE & JDKs Tools)](../🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20%28JRE%20&%20JDKs%20Tools%29/Java%20Runtimes%20%28JRE%20&%20JDKs%20Tools%29.md)
- ↗ [Java Compilers](../🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20%28JRE%20&%20JDKs%20Tools%29/Java%20Compilers/Java%20Compilers.md)
- ↗ [Android Runtime (ART) and Dalvik Virtual Machine (DVM)](../🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20%28JRE%20&%20JDKs%20Tools%29/Android%20Runtime%20%28ART%29%20and%20Dalvik%20Virtual%20Machine%20%28DVM%29/Android%20Runtime%20%28ART%29%20and%20Dalvik%20Virtual%20Machine%20%28DVM%29.md)
- ↗ [Java Virtual Machine (JVM)](../🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20%28JRE%20&%20JDKs%20Tools%29/Java%20Virtual%20Machine%20%28JVM%29/Java%20Virtual%20Machine%20%28JVM%29.md)

↗ [Huawei HarmonyOS Runtimes & ArkCompiler](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20%28Engineering%20Part%29/国产操作系统%20💦/Huawei%20Operating%20Systems/📌%20Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler/Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler.md)


### Other Resources
https://quick-bench.com
Quick Bench is a micro benchmarking tool intended to quickly and simply compare the performance of two or more code snippets.



## Intro
![](../../../../../Assets/Pics/Screenshot%202023-05-22%20at%209.50.58%20PM.png)

↗ [Program Language Processing & Compilation Theory (Compile-time)](../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20%28Compile-time%29/Program%20Language%20Processing%20&%20Compilation%20Theory%20%28Compile-time%29.md)



## Online Compilers
### 👉 Compiler Explorer 🔥
🔥 https://godbolt.org
🚧 https://github.com/compiler-explorer/compiler-explorer

Run compilers interactively from your web browser and interact with the assembly


### 👉 `OnlinedGdb`


### 👉 `Jdoodle`


### 👉 `Codechef`


### 👉 `Repl`


### 👉 `CompileJava`



## Ref
🎬 【C++研究利器 - Godbolt不完全攻略-哔哩哔哩】 https://b23.tv/XtahObZ

[👍 从汇编语言的寄存器来看函数参数传递]: https://www.cnblogs.com/goldsunshine/p/14560301.html#代码在内存中的分布

[Compiling a C Program: Behind the Scenes | GeeksforGeeks]: https://www.geeksforgeeks.org/compiling-a-c-program-behind-the-scenes/

[Compilation process in c | Java T Point]: https://www.javatpoint.com/compilation-process-in-c

[不同编译器的区别？]: https://www.zhihu.com/question/24873800