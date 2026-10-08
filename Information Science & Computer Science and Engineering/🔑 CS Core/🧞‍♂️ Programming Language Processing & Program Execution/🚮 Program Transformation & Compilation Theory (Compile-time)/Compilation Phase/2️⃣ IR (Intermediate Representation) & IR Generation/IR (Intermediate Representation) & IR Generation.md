# IR (Intermediate Representation) & IR Generation

[TOC]



## Res
### Related Topics
↗ [Bytecode](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Bytecode.md)
- ↗ [Java Bytecode](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Java%20Bytecode/Java%20Bytecode.md)
- ↗ [Ark Bytecode](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Ark%20Bytecode/Ark%20Bytecode.md)
- ↗ [Smali Code](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Smali%20Code/Smali%20Code.md)

↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [ASM (Assembly Languages)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/ASM%20(Assembly%20Languages).md)


### Other Resources
[LLVM-IR](https://llvm.org/devmtg/2017-06/1-Davis-Chisnall-LLVM-2017.pdf)
[ClangIR](https://llvm.github.io/clangir)
[RTL](https://gcc.gnu.org/onlinedocs/gccint/RTL.html)



## Intro
![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>The process of compilation</small>

![](../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.22.45.png)


### Three-Address Code (3AC)


### Static Single Assignment (SSA)
> 🔗 https://en.wikipedia.org/wiki/Static_single-assignment_form

In [compiler](https://en.wikipedia.org/wiki/Compiler "Compiler")https://en.wikipedia.org/wiki/Static_single-assignment_form design, **static single assignment form** (often abbreviated as **SSA form** or simply **SSA**) is a type of [intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation "Intermediate representation") (IR) where each [variable](https://en.wikipedia.org/wiki/Variable_\(computer_science\) "Variable (computer science)") is [assigned](https://en.wikipedia.org/wiki/Assignment_\(computer_science\) "Assignment (computer science)") exactly once. SSA is used in most high-quality optimizing compilers for imperative languages, including [LLVM](https://en.wikipedia.org/wiki/LLVM "LLVM"), the [GNU Compiler Collection](https://en.wikipedia.org/wiki/GNU_Compiler_Collection "GNU Compiler Collection"), and many commercial compilers.

There are efficient algorithms for converting programs into SSA form. To convert to SSA, existing variables in the original IR are split into versions, new variables typically indicated by the original name with a subscript, so that every definition gets its own version. Additional statements that assign to new versions of variables may also need to be introduced at the [join point](https://en.wikipedia.org/wiki/Join_point "Join point") of two control flow paths. Converting from SSA form to [machine code](https://en.wikipedia.org/wiki/Machine_code "Machine code") is also efficient.

SSA makes numerous analyses needed for optimizations easier to perform, such as determining [use-define chains](https://en.wikipedia.org/wiki/Use-define_chain "Use-define chain"), because when looking at a use of a variable there is only one place where that variable may have received a value. Most optimizations can be adapted to preserve SSA form, so that one optimization can be performed after another with no additional analysis. The SSA based optimizations are usually more efficient and more powerful than their non-SSA form prior equivalents.

In [functional language](https://en.wikipedia.org/wiki/Functional_language "Functional language") compilers, such as those for [Scheme](https://en.wikipedia.org/wiki/Scheme_\(programming_language\) "Scheme (programming language)") and [ML](https://en.wikipedia.org/wiki/ML_programming_language "ML programming language"), [continuation-passing style](https://en.wikipedia.org/wiki/Continuation-passing_style "Continuation-passing style") (CPS) is generally used. SSA is formally equivalent to a well-behaved subset of CPS excluding non-local control flow, so optimizations and transformations formulated in terms of one generally apply to the other. Using CPS as the intermediate representation is more natural for higher-order functions and interprocedural analysis. CPS also easily encodes [call/cc](https://en.wikipedia.org/wiki/Call/cc "Call/cc"), whereas SSA does not


### Java Bytecode
↗ [Java Bytecode](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Java%20Bytecode/Java%20Bytecode.md)
↗ [JVM Instrument Set & Java Bytecode](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/CISC%20(Complex%20Instruction%20Set%20Computer)/JVM%20Instrument%20Set%20&%20Java%20Bytecode/JVM%20Instrument%20Set%20&%20Java%20Bytecode.md)



## Ref
