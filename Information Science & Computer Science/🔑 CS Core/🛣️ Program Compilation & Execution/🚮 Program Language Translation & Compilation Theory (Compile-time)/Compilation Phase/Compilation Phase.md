# Compilation Phase

[TOC]



## Res
### Related Topics
↗ [Compilation & Program Loading Tools](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
↗ [SCA (Static Code Analysis) & SAST](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics%20Methodologies/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/SCA%20(Static%20Code%20Analysis)%20&%20SAST.md)



## Intro



## Compilation Types
### Static Compilation
> 🔗 https://en.wikipedia.org/wiki/Static_compilation



### Dynamic Compilation



### JIT Compilation
> ↗ [Java Virtual Machine (JVM)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/Java%20Virtual%20Machine%20(JVM)/Java%20Virtual%20Machine%20(JVM).md)

> 🔗 https://en.wikipedia.org/wiki/Just-in-time_compilation

In computing, **just-in-time (JIT)** compilation (also **dynamic translation** or **run-time compilations**) is compilation (of computer code) during execution of a program (at run time) rather than before execution. This may consist of source code translation but is more commonly bytecode translation to machine code, which is then executed directly. A system implementing a JIT compiler typically continuously analyses the code being executed and identifies parts of the code where the speedup gained from compilation or recompilation would outweigh the overhead of compiling that code.

JIT compilation is a combination of the two traditional approaches to translation to machine code—**ahead-of-time compilation (AOT)**, and **interpretation**—and combines some advantages and drawbacks of both. Roughly, JIT compilation combines the speed of compiled code with the flexibility of interpretation, with the overhead of an interpreter and the additional overhead of compiling and linking (not just interpreting). JIT compilation is a form of dynamic compilation, and allows adaptive optimization such as dynamic recompilation and microarchitecture-specific speedups. Interpretation and JIT compilation are particularly suited for dynamic programming languages, as the runtime system can handle late-bound data types and enforce security guarantees.
#### JIT Design
In a bytecode-compiled system, source code is translated to an intermediate representation known as bytecode. Bytecode is not the machine code for any particular computer, and may be portable among computer architectures. The bytecode may then be interpreted by, or run on a virtual machine. The JIT compiler reads the bytecodes in many sections (or in full, rarely) and compiles them dynamically into machine code so the program can run faster. This can be done per-file, per-function or even on any arbitrary code fragment; the code can be compiled when it is about to be executed (hence the name "just-in-time"), and then cached and reused later without needing to be recompiled.

By contrast, a traditional **interpreted virtual machine** will simply interpret the bytecode, generally with much lower performance. Some **interpreters** even interpret source code, without the step of first compiling to bytecode, with even worse performance. **Statically-compiled code** or **native code** is compiled prior to deployment. A **dynamic compilation environment** is one in which the compiler can be used during execution. A common goal of using JIT techniques is to reach or surpass the performance of static compilation, while maintaining the advantages of bytecode interpretation: Much of the "heavy lifting" of parsing the original source code and performing basic optimization is often handled at compile time, prior to deployment: compilation from bytecode to machine code is much faster than compiling from source. The deployed bytecode is portable, unlike native code. Since the runtime has control over the compilation, like interpreted bytecode, it can run in a secure sandbox. Compilers from bytecode to machine code are easier to write, because the portable bytecode compiler has already done much of the work.

JIT code generally offers far better performance than interpreters. In addition, it can in some cases offer better performance than static compilation, as many optimizations are only feasible at run-time:
1. The compilation can be optimized to the targeted CPU and the operating system model where the application runs. For example, JIT can choose [SSE2](https://en.wikipedia.org/wiki/SSE2 "SSE2") vector CPU instructions when it detects that the CPU supports them. To obtain this level of optimization specificity with a static compiler, one must either compile a binary for each intended platform/architecture, or else include multiple versions of portions of the code within a single binary.
2. The system is able to collect statistics about how the program is actually running in the environment it is in, and it can rearrange and recompile for optimum performance. However, some static compilers can also take profile information as input.
3. The system can do global code optimizations (e.g. [inlining](https://en.wikipedia.org/wiki/Inline_expansion "Inline expansion") of library functions) without losing the advantages of dynamic linking and without the overheads inherent to static compilers and linkers. Specifically, when doing global inline substitutions, a static compilation process may need run-time checks and ensure that a virtual call would occur if the actual class of the object overrides the inlined method, and boundary condition checks on array accesses may need to be processed within loops. With just-in-time compilation in many cases this processing can be moved out of loops, often giving large increases of speed.
4. Although this is possible with statically compiled garbage collected languages, a bytecode system can more easily rearrange executed code for better cache utilization.

Because a JIT must render and execute a native binary image at runtime, true machine-code JITs necessitate platforms that allow for data to be executed at runtime, making using such JITs on a [Harvard architecture](https://en.wikipedia.org/wiki/Harvard_architecture)-based machine impossible; the same can be said for certain operating systems and virtual machines as well. However, a special type of "JIT" may potentially not target the physical machine's CPU architecture, but rather an optimized VM bytecode where limitations on raw machine code prevail, especially where that bytecode's VM eventually leverages a JIT to native code.
#### Security
JIT compilation fundamentally uses executable data, and thus poses security challenges and possible exploits.

Implementation of JIT compilation consists of compiling source code or byte code to machine code and executing it. This is generally done directly in memory: the JIT compiler outputs the machine code directly into memory and immediately executes it, rather than outputting it to disk and then invoking the code as a separate program, as in usual ahead of time compilation. In modern architectures this runs into a problem due to [executable space protection](https://en.wikipedia.org/wiki/Executable_space_protection "Executable space protection"): arbitrary memory cannot be executed, as otherwise there is a potential security hole. Thus memory must be marked as executable; for security reasons this should be done _after_ the code has been written to memory, and marked read-only, as writable/executable memory is a security hole (see [W^X](https://en.wikipedia.org/wiki/W%5EX "W^X")). 

 >For instance Firefox's JIT compiler for Javascript introduced this protection in a release version with Firefox 

[JIT spraying](https://en.wikipedia.org/wiki/JIT_spraying "JIT spraying") is a class of [computer security exploits](https://en.wikipedia.org/wiki/Computer_security_exploit "Computer security exploit") that use JIT compilation for [heap spraying](https://en.wikipedia.org/wiki/Heap_spraying "Heap spraying"): the resulting memory is then executable, which allows an exploit if execution can be moved into the heap.
#### Tracing JIT Compilation
> 🔗 https://en.wikipedia.org/wiki/Tracing_just-in-time_compilation



## Ref
[Copy-and-patch | wikipedia]: https://en.wikipedia.org/wiki/Copy-and-patch
In computing, copy-and-patch compilation is a simple compiler technique intended for just-in-time compilation (JIT compilation) that uses pattern matching to match pre-generated templates to parts of an abstract syntax tree (AST) or bytecode stream, and emit corresponding pre-written machine code fragments that are then patched to insert memory addresses, register addresses, constants and other parameters to produce executable code. Code not matched by templates can be either be interpreted in the normal way, or code created to directly call interpreter code.


