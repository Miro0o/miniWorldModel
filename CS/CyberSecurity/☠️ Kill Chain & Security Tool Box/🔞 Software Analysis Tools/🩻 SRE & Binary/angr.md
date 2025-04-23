# angr

[TOC]



## Res
🏠 https://angr.io
📂 https://docs.angr.io/en/latest/index.html

Y. Shoshitaishvili et al., "SOK: (State of) The Art of War: Offensive Techniques in Binary Analysis," 2016 IEEE Symposium on Security and Privacy (SP), San Jose, CA, USA, 2016, pp. 138-157, doi: 10.1109/SP.2016.17. https://ieeexplore.ieee.org/document/7546500?denied=

In short, we make the following contributions:
1. We reproduce many existing approaches in offensive binary analysis, in a single, coherent framework, to provide an understanding of the relative effectiveness of current offensive binary analysis techniques.
2. We show the difficulties (and solutions to those difficulties) of combining diverse binary analysis techniques and applying them on a large scale.
3. We open source our framework, `angr`, for the use of future generations of research into the analysis of binary code.


### Related Topics


### Other Resources
🚧 https://github.com/jakespringer/angr_ctf
angr_ctf则是一个专门针对angr的项目，里面有17个angr相关的题目。这些题目只有一个唯一的要求：你需要找出能够使程序输出“Good Job”的输入，这也是符号执行常见的应用场景。



## Intro
> 🔗 https://docs.angr.io/en/latest/core-concepts/be_creative.html

`angr` is an open-source binary analysis platform for Python. It combines both static and dynamic symbolic ("`concolic`") analysis, providing tools to solve a variety of tasks.

Ultimately, angr is just an emulator. It is a highly instrumentable and very unique emulator with lots of considerations for environment, true, but at its core, the work you do with `angr` is about extracting knowledge about how a bunch of bytecode behaves on a CPU. In designing `angr`, we’ve tried to provide you with the tools and abstractions on top of this emulator to make certain common tasks more useful, but there’s no problem you can’t solve just by working with a SimState and observing the affects of `.step()`.

> 🔗 https://www.cnblogs.com/level5uiharu/p/16925991.html

angr是一个支持多处理架构的用于二进制文件分析的工具包，它提供了动态符号执行的能力以及多种静态分析的能力。项目创建的初衷，是为了整合此前多种二进制分析方式的优点，并开发一个平台，以供二进制分析人员比较不同二进制分析方式的优劣，并根据自身需要开发新的二进制分析系统和方式。

也正是因为angr是一个二进制文件分析的工具包，因此它可以被使用者扩展，用于自动化逆向工程、漏洞挖掘等多个方面。


### Binary Analysis via `angr`
> 🔗 https://docs.angr.io/en/latest/core-concepts/analyses.html

`angr`’s goal is to make it easy to carry out useful analyses on binary programs. To this end, angr allows you to package analysis code in a common format that can be easily applied to any project. We will cover writing your own analyses [Writing Analyses](https://docs.angr.io/en/latest/extending-angr/analysis_writing.html#writing-analyses), but the idea is that all the analyses appear under `project.analyses` (for example, `project.analyses.CFGFast()`) and can be called as functions, returning analysis result instances.

**Built-in Analyses**

|Name|Description|
|---|---|
|CFGFast|Constructs a fast _Control Flow Graph_ of the program|
|CFGEmulated|Constructs an accurate _Control Flow Graph_ of the program|
|VFG|Performs VSA on every function of the program, creating a _Value Flow Graph_ and detecting stack variables|
|DDG|Calculates a _Data Dependency Graph_, allowing one to determine what statements a given value depends on|
|BackwardSlice|Computes a _Backward Slice_ of a program with respect to a certain target|
|Identifier|Identifies common library functions in CGC binaries|
|More!|angr has quite a few analyses, most of which work! If you’d like to know how to use one, please submit an issue requesting documentation.|

**Resilience**

Analyses can be written to be resilient, and catch and log basically any error. These errors, depending on how they’re caught, are logged to the `errors` or `named_errors` attribute of the analysis. However, you might want to run an analysis in “fail fast” mode, so that errors are not handled. To do this, the argument `fail_fast=True` can be passed into the analysis constructor.



## `angr` Analysis Engine Design
> Y. Shoshitaishvili et al., "SOK: (State of) The Art of War: Offensive Techniques in Binary Analysis," 2016 IEEE Symposium on Security and Privacy (SP), San Jose, CA, USA, 2016, pp. 138-157, doi: 10.1109/SP.2016.17. https://ieeexplore.ieee.org/document/7546500?denied=

 Submodule: Intermediate Representation
 Submodule: Binary Loading
 Submodule: Program State Representation/modification
 Submodule: Data Model
 Submodule: Full-Program Analysis



## Ref
[angr_ctf——从0学习angr（一）：angr简介与核心概念 | cnblog]: https://www.cnblogs.com/level5uiharu/p/16925991.html
