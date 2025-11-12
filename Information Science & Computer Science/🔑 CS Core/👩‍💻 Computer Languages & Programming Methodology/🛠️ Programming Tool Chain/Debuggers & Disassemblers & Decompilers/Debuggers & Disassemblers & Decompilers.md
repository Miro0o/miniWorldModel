# Debuggers & Disassemblers & Decompilers

[TOC]



## Res
### Related Topics
↗ [Program Debugging & Defensive Programming](../../Program%20Debugging%20&%20Defensive%20Programming.md)
↗ [Disassembly Techniques](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/SRE%20(Software%20Reverse%20Engineering)/Disassembly%20Techniques/Disassembly%20Techniques.md)
↗ [Anti-Disassembly](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/Anti-Reverse%20Engineering%20&%20Software%20Protection/Anti-Disassembly/Anti-Disassembly.md)

↗ [Compilation & Program Loading Tools](../Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
- ↗ [Assemblers](../Compilation%20&%20Program%20Loading%20Tools/Assemblers/Assemblers.md)
- ↗ [CC (Compiler Compilers)](../Compilation%20&%20Program%20Loading%20Tools/Compilers/📌%20CC%20(Compiler%20Compilers)/CC%20(Compiler%20Compilers).md)
↗ [GCC (The GNU Compiler Collection)](../Compilation%20&%20Program%20Loading%20Tools/🐐%20GCC%20(The%20GNU%20Compiler%20Collection)/GCC%20(The%20GNU%20Compiler%20Collection).md)
- ↗ [gdb (GNU DeBugger)](../Compilation%20&%20Program%20Loading%20Tools/🐐%20GCC%20(The%20GNU%20Compiler%20Collection)/gdb%20(GNU%20DeBugger)/gdb%20(GNU%20DeBugger).md)
- pwngdb
- etc.
↗ [LLVM](../Compilation%20&%20Program%20Loading%20Tools/🦅%20LLVM/LLVM.md)
- ↗ [lldb](../Compilation%20&%20Program%20Loading%20Tools/🦅%20LLVM/lldb/lldb.md)
- etc.
↗ [Code Sanitizer](../Code%20Sanitizer.md)

↗ [Static Code Analysis Tools (SCAT)](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md)
↗ [Software Analysis Tools](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/Software%20Analysis%20Tools.md)
- ↗ [IDA Pro](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🩻%20SRE%20&%20Binary%20Analysis/👱🏻‍♀️%20IDA%20Pro/IDA%20Pro.md)
	- ↗ [Hex-Rays Decompiler](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🩻%20SRE%20&%20Binary%20Analysis/👱🏻‍♀️%20IDA%20Pro/Hex-Rays%20Decompiler.md)
- ↗ [JEB Pro](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🩻%20SRE%20&%20Binary%20Analysis/JEB%20Pro/JEB%20Pro.md)
- ↗ [Ghidra](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🩻%20SRE%20&%20Binary%20Analysis/Ghidra/Ghidra.md)

↗ [Binary Ninja](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🩻%20SRE%20&%20Binary%20Analysis/Binary%20Ninja.md)

↗ [Hex & Binary Manipulation](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Text%20&%20File%20&%20Dir%20Management/Hex%20&%20Binary%20Manipulation.md)
↗ [Kernel Debugging](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/🦺%20Operating%20System%20Basics/Kernel%20Debugging.md)



## Intro



## Debugger
### Java


### C /C++


### Python Bytecode


### Go



## Disassemblers & Decompilers
> 🔗 https://en.wikipedia.org/wiki/Disassembler

A disassembler is a computer program that **translates machine language into assembly language** — the inverse operation to that of an assembler. Disassembly, the output of a disassembler, is often formatted for human-readability rather than suitability for input to an assembler, making it principally a reverse-engineering tool. Common uses of disassemblers include analyzing high-level programing language compilers output and their optimizations, recovering source code of a program whose original source was lost, malware analysis, modifying software (such as ROM hacking), and software cracking.

A disassembler differs from a **decompiler**, which targets a high-level language rather than an assembly language.

Assembly language source code generally permits the use of constants and programmer comments. These are usually removed from the assembled machine code by the assembler. If so, a disassembler operating on the machine code would produce disassembly lacking these constants and comments; the disassembled output becomes more difficult for a human to interpret than the original annotated source code. Some disassemblers provide a built-in code commenting feature where the generated output gets enriched with comments regarding called API functions or parameters of called functions. Some disassemblers make use of the symbolic debugging information present in object files such as ELF. For example, IDA allows the human user to make up mnemonic symbols for values or regions of code in an interactive session: human insight applied to the disassembly process often parallels human creativity in the code writing process.


### Java
https://github.com/mstrobel/procyon


### C /C++


### Python Bytecode


### Go



## Ref
[Disassembler | Wikipedia]: https://en.wikipedia.org/wiki/Disassembler
