# Instruction Levels In Computer - ISA and Beyond

[TOC]



## Res
### Related Topics
↗ [Program Language Translation & Compilation Theory (Compile-time)](../../../../../🛣️%20Program%20Compilation%20&%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time).md)


### Other Resources



## Intro
![application_execution_and_computer_data_flow.excalidraw | 800](../../../../../../../Assets/Illustrations/Computer%20System/application_execution_and_computer_data_flow.excalidraw.md)
<small>Application Execution and Computer Data Flow</small>

![](../../../../../../../Assets/Pics/Screenshot%202023-10-13%20at%2012.54.00PM.png)
<small>CSAPP</small>

![](../../../../../../../../Assets/Pics/Screenshot%202023-03-21%20at%209.12.25%20PM.png)
<small>Instruction Processing Level</small>



## 👉 Source Code
> ↗ [Computer Languages & Programming Methodology](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)

> 🔗 https://en.wikipedia.org/wiki/Source_code



## 👉 Object Code
> 🔗 [Object code](https://en.wikipedia.org/wiki/Object_code "Object code")

[Object files](https://en.wikipedia.org/wiki/Object_file "Object file") can in turn be [linked](https://en.wikipedia.org/wiki/Linker_\(computing\) "Linker (computing)") to form an [executable file](https://en.wikipedia.org/wiki/Executable_file "Executable file") or [library file](https://en.wikipedia.org/wiki/Library_\(computing\) "Library (computing)"). In order to be used, object code must either be placed in an executable file, a library file, or an object file.

Object code is a portion of machine code that has not yet been linked into a complete program. It is the machine code for one particular library or module that will make up the completed product. It may also contain placeholders or offsets, not found in the machine code of a completed program, that the linker will use to connect everything together. Whereas machine code is binary code that can be executed directly by the CPU, object code has the jumps and inter-module references partially parametrized so that a linker can fill them in. An object file is assumed to begin at a specific location in memory, often zero. It contains information on instructions that reference memory, so that the linker can [relocate](https://en.wikipedia.org/wiki/Relocation_\(computing\) "Relocation (computing)") the code when combining multiple object files into a single program.

An [assembler](https://en.wikipedia.org/wiki/Assembler_\(computing\) "Assembler (computing)") is used to convert [assembly code](https://en.wikipedia.org/wiki/Assembly_code "Assembly code") into machine code (object code). A linker links several object (and library) files to generate an executable. Assemblers (and some compilers) can also assemble directly to machine code to produce executable files without the object intermediary step.

![](../../../../../../../Assets/Pics/Pasted%20image%2020250909225722.png)
<small><a>https://www.geeksforgeeks.org/compiler-design/difference-between-source-code-and-object-code/</a></small>



## 👉 Bytecode
↗ [Bytecode](Bytecode.md)
↗ [JVM Instrument Set & Java Bytecode](../../RISC%20(Reduced%20Instruction%20Set%20Computer)/JVM%20Instrument%20Set%20&%20Java%20Bytecode/JVM%20Instrument%20Set%20&%20Java%20Bytecode.md)



## 👉 Machine Code <=> Assembly Code 
↗ [Machine Code](Machine%20Code.md)
↗ [ASM (Assembly Languages)](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)



## 👉 Microcode & Micro-Program
↗ [Microcode & Micro-Program](Microcode%20&%20Micro-Program.md)

↗ [FAQ /👉 Do microcode and micro-operation mean the same?](../../../../Firmware%20and%20Computer%20(OS)%20Booting/FAQ.md#👉%20Do%20microcode%20and%20micro-operation%20mean%20the%20same?)


### Micro-Instructions & Micro-Operations
↗ [Micro-Instruction & Micro-Operation](Micro-Instruction%20&%20Micro-Operation.md)



## Ref
[Difference Between Source Code and Object Code]: https://www.geeksforgeeks.org/compiler-design/difference-between-source-code-and-object-code/
