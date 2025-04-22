# LLVM

[TOC]



## Res
🏠 https://llvm.org
📂 [Getting Started with LLVM Core Libraries（中文版）](https://getting-started-with-llvm-core-libraries-zh-cn.readthedocs.io/zh_CN/latest/index.html)




## 🏙 Overview
> [LLVM](https://llvm.org) was initially known as *Low Level Virtual Machine*, but then widely extended its business beyond virtual machine
> 
> LLVM is licensed by [**BSD**](https://linux.cn/article-3186-1.html) (*Berkeley Software Distribution*)

The LLVM Project is **a collection of modular and reusable compiler and toolchain technologies**. Despite its name, LLVM has little to do with traditional virtual machines. ==The name "LLVM" itself is not an acronym; it is the full name of the project.==

LLVM began as a [research project](https://llvm.org/pubs/2004-01-30-CGO-LLVM.html) at the [University of Illinois](https://cs.illinois.edu/), with the goal of providing a modern, SSA-based compilation strategy capable of supporting both static and dynamic compilation of arbitrary programming languages. Since then, LLVM has grown to be an umbrella project consisting of a number of subprojects, many of which are being used in production by a wide variety of [commercial and open source](https://llvm.org/Users.html) projects as well as being widely used in [academic research](https://llvm.org/pubs/). Code in the LLVM project is licensed under the ["Apache 2.0 License with LLVM exceptions"](https://llvm.org/docs/DeveloperPolicy.html#new-llvm-project-license-framework)


### 🎼 Components
The primary sub-projects of LLVM are:

1. The **LLVM Core** libraries provide a modern source- and target-independent [optimizer](https://llvm.org/docs/Passes.html), along with [code generation support](https://llvm.org/docs/CodeGenerator.html) for many popular CPUs (as well as some less common ones!) These libraries are built around a [well specified](https://llvm.org/docs/LangRef.html) code representation known as the LLVM intermediate representation ("LLVM IR"). The LLVM Core libraries are [well documented](https://llvm.org/docs/), and it is particularly easy to invent your own language (or port an existing compiler) to use [LLVM as an optimizer and code generator](https://llvm.org/docs/tutorial/).
2. **[Clang](https://clang.llvm.org/)** is an "LLVM native" C/C++/Objective-C compiler, which aims to deliver amazingly fast compiles, extremely useful [error and warning messages](https://clang.llvm.org/diagnostics.html) and to provide a platform for building great source level tools. The [Clang Static Analyzer](https://clang-analyzer.llvm.org/) and [clang-tidy](https://clang.llvm.org/extra/clang-tidy/) are tools that automatically find bugs in your code, and are great examples of the sort of tools that can be built using the Clang frontend as a library to parse C/C++ code.
3. The **[LLDB](https://lldb.llvm.org/)** project builds on libraries provided by LLVM and Clang to provide a great native debugger. It uses the Clang ASTs and expression parser, LLVM JIT, LLVM disassembler, etc so that it provides an experience that "just works". It is also blazing fast and much more memory efficient than GDB at loading symbols.
4. The **[libc++](https://libcxx.llvm.org/)** and **[libc++ ABI](https://libcxxabi.llvm.org/)** projects provide a standard conformant and high-performance implementation of the C++ Standard Library, including full support for C++11 and C++14.
5. The **[compiler-rt](https://compiler-rt.llvm.org/)** project provides highly tuned implementations of the low-level code generator support routines like "`__fixunsdfdi`" and other calls generated when a target doesn't have a short sequence of native instructions to implement a core IR operation. It also provides implementations of run-time libraries for dynamic testing tools such as [AddressSanitizer](https://clang.llvm.org/docs/AddressSanitizer.html), [ThreadSanitizer](https://clang.llvm.org/docs/ThreadSanitizer.html), [MemorySanitizer](https://clang.llvm.org/docs/MemorySanitizer.html), and [DataFlowSanitizer](https://clang.llvm.org/docs/DataFlowSanitizer.html).
6. The **[MLIR](https://mlir.llvm.org/)** subproject is a novel approach to building reusable and extensible compiler infrastructure. MLIR aims to address software fragmentation, improve compilation for heterogeneous hardware, significantly reduce the cost of building domain specific compilers, and aid in connecting existing compilers together.
7. The **[OpenMP](https://openmp.llvm.org/)** subproject provides an [OpenMP](https://openmp.org/) runtime for use with the OpenMP implementation in Clang.
8. The **[polly](https://polly.llvm.org/)** project implements a suite of cache-locality optimizations as well as auto-parallelism and vectorization using a polyhedral model.
9. The **[libclc](https://libclc.llvm.org/)** project aims to implement the OpenCL standard library.
10. The **[klee](https://klee.llvm.org/)** project implements a "symbolic virtual machine" which uses a theorem prover to try to evaluate all dynamic paths through a program in an effort to find bugs and to prove properties of functions. A major feature of klee is that it can produce a testcase in the event that it detects a bug.
11. The **[LLD](https://lld.llvm.org/)** project is a new linker. That is a drop-in replacement for system linkers and runs much faster.
12. The **[BOLT](https://github.com/llvm/llvm-project/tree/main/bolt)** project is a post-link optimizer. It achieves the improvements by optimizing application's code layout based on execution profile gathered by sampling profiler.



## Getting start
[llvm-tutorial - 部分中文翻译教程](https://github.com/hunterzju/llvm-tutorial.)



## Ref