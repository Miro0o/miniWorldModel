# Compilation Phase

[TOC]



## Res
### Related Topics
↗ [Compilation & Program Loading Tools](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)

↗ [SCA (Static Code Analysis) & SAST](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/SCA%20(Static%20Code%20Analysis)%20&%20SAST.md)
- ↗ [Interprocedural Analysis](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/📲%20Inter-procedural%20Analysis/Interprocedural%20Analysis.md)



## Intro
### Compilation Phases
![](../../../../../Assets/Pics/Screenshot%202025-09-22%20at%2020.18.53.png)
<small>Compilers Principles Techniques and Tools 2nd Edition</small>

![](../../../../../Assets/Pics/Pasted%20image%2020250304120243.png)
<small><a>https://www.geeksforgeeks.org/phases-of-a-compiler/</a></small>

![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>


### The Grouping of Phases into Passes
> 📖 Compilers Principles Techniques and Tools 2nd Edition

The discussion of phases deals with the logical organization of a compiler. In an implementation, activities from several phases may be grouped together into a pass that reads an input file and writes an output file. For example, the front-end phases of lexical analysis, syntax analysis, semantic analysis, and intermediate code generation might be grouped together into one pass. Code optimization might be an optional pass. Then there could be a back-end pass consisting of code generation for a particular target machine.

Some compiler collections have been created around carefully designed intermediate representations that allow the front end for a particular language to interface with the back end for a certain target machine. With these collections, we can produce compilers for different source languages for one target machine by combining different front ends with the back end for that target machine. Similarly, we can produce compilers for different target machines, by combining a front end with back ends for different target machines



## Ref
[Copy-and-patch | wikipedia]: https://en.wikipedia.org/wiki/Copy-and-patch
In computing, copy-and-patch compilation is a simple compiler technique intended for just-in-time compilation (JIT compilation) that uses pattern matching to match pre-generated templates to parts of an abstract syntax tree (AST) or bytecode stream, and emit corresponding pre-written machine code fragments that are then patched to insert memory addresses, register addresses, constants and other parameters to produce executable code. Code not matched by templates can be either be interpreted in the normal way, or code created to directly call interpreter code.


