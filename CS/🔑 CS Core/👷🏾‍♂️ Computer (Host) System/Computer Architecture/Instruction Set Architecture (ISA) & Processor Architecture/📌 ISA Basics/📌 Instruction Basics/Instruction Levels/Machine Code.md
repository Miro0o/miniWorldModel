# Machine Code

[TOC]



## Res


## Intro
In [computer programming](https://en.wikipedia.org/wiki/Computer_programming "Computer programming"), **machine code** is computer code consisting of **machine language** instructions, which are used to control a computer's central processing unit (CPU). Each instruction causes the CPU to perform a very specific task, such as a load, a store, a jump, or an arithmetic logic unit(ALU) operation on one or more units of data in the CPU's registers or memory.

Early CPUs had specific machine code that might break backwards compatibility with each new CPU released. The notion of an [instruction set architecture](https://en.wikipedia.org/wiki/Instruction_set_architecture "Instruction set architecture")(ISA) defines and specifies the behavior and encoding in memory of the instruction set of the system, without specifying its exact implementation. This acts as an abstraction layer, enabling compatibility within the same family of CPUs, so that machine code written or generated according to the ISA for the family will run on all CPUs in the family, including future CPUs.

In general, each architecture family (e.g. [x86](https://en.wikipedia.org/wiki/X86 "X86"), [ARM](https://en.wikipedia.org/wiki/ARM_architecture_family "ARM architecture family")) has its own ISA, and hence its own specific machine code language. There are exceptions, e.g. the [IA-64](https://en.wikipedia.org/wiki/IA-64 "IA-64") can emulate x86.

Machine code is a strictly **numerical language**, and is the lowest-level interface to the CPU intended for a programmer. 
- There is, on some CPUs, a lower-level interface in the form of (modifiable) [microcode](https://en.wikipedia.org/wiki/Microcode "Microcode") that implement the machine code. However, microcode is not intended to be changed by the end user on normal commercial CPUs.
- [Assembly language](https://en.wikipedia.org/wiki/Assembly_language "Assembly language") provides a direct mapping between the numerical machine code and a human-readable version where numerical opcodes and operands are replaced by readable strings (e.g. 0x90 is the NOP instruction on [x86](https://en.wikipedia.org/wiki/X86 "X86")). While it is possible to write programs directly in machine code, managing individual bits and calculating numerical [addresses](https://en.wikipedia.org/wiki/Memory_address "Memory address") and constants manually is tedious and error-prone. For this reason, programs are very rarely written directly in machine code in modern contexts, but may be done for low-level [debugging](https://en.wikipedia.org/wiki/Debugging "Debugging"), program [patching](https://en.wikipedia.org/wiki/Patch_(computing) "Patch (computing)") (especially when assembler source is not available) and assembly language [disassembly](https://en.wikipedia.org/wiki/Disassembly "Disassembly").

The majority of practical programs today are written in [higher-level languages](https://en.wikipedia.org/wiki/High-level_programming_language "High-level programming language") or assembly languages. The source code is then translated to executable machine code by utilities such as [compilers](https://en.wikipedia.org/wiki/Compiler "Compiler"), [assemblers](https://en.wikipedia.org/wiki/Assembler_(computing) "Assembler (computing)"), and [linkers](https://en.wikipedia.org/wiki/Linker_(computing) "Linker (computing)"), with the important exception of [interpreted](https://en.wikipedia.org/wiki/Interpreted_language "Interpreted language") programs, which are not translated into machine code. However, the _[interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing) "Interpreter (computing)")_ itself, which may be seen as an executor or processor performing the instructions of the source code, typically consists of directly executable machine code (generated from assembly or high-level language source code).

Machine code is by definition the lowest level of programming detail visible to the programmer, but internally many processors use [microcode](https://en.wikipedia.org/wiki/Microcode "Microcode") or optimise and transform machine code instructions into sequences of [micro-ops](https://en.wikipedia.org/wiki/Micro-operation "Micro-operation"). This is not generally considered to be a machine code.




## Ref

