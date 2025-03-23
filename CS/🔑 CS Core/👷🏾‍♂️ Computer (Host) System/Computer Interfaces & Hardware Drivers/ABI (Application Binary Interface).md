# ABI (Application Binary Interface)

[TOC]



## Res
### Related Topics
↗ [Procedure (Function) Call & Runtime Memory Layout](../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)
↗ [Machine Code](../Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/📌%20Instruction%20Basics/Instruction%20Levels/Machine%20Code.md)
↗ [ASM (Assembly Languages)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
↗ [ISA (Industry Standard Architecture)](../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Slot%20(Internal%20Bus)/ISA%20(Industry%20Standard%20Architecture)/ISA%20(Industry%20Standard%20Architecture).md)
↗ [Compilation & Program Loading Tools](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)



## Intro
In computer software, an **application binary interface** (**ABI**) is an interface between two binary program modules. Often, one of these modules is a **library** or **operating system facility**, and the other is a program that is being run by a user.
- An **ABI** defines how data structures or computational routines are accessed in **machine code**, which is a low-level, hardware-dependent format. 
- In contrast, an **API** defines this access in **source code**, which is a relatively high-level, hardware-independent, often [human-readable](https://en.wikipedia.org/wiki/Human-readable "Human-readable") format. 

A common aspect of an ABI is the [calling convention](https://en.wikipedia.org/wiki/Calling_convention "Calling convention"), which determines how data is provided as input to, or read as output from, computational routines.

> Examples of this are the [x86 calling conventions](https://en.wikipedia.org/wiki/X86_calling_conventions "X86 calling conventions").

Adhering to an ABI (which may or may not be officially standardized) is usually the job of a **compiler**, **operating system**, or **library** author. However, an application programmer may have to deal with an ABI directly when writing a program in a mix of programming languages, or even compiling a program written in the same language with different compilers.


### Description
Details covered by an ABI include the following:
- **Processor instruction set (ISA)**, with details like register file structure, stack organization, memory access types, etc.

- Sizes, layouts, and [alignments](https://en.wikipedia.org/wiki/Data_structure_alignment "Data structure alignment") of basic **data types** that the processor can directly access

- **Calling convention**, which controls how the arguments of functions are passed, and return values retrieved; for example, it controls the following:
	- Whether all parameters are passed on the stack, or some are passed in registers
    - Which registers are used for which function parameters
    - Whether the first function parameter passed on the stack is pushed first or last
    - Whether the caller or callee is responsible for cleaning up the stack after the function call

- How an application should make **system calls** to the operating system, and if the ABI specifies direct system calls rather than procedure calls to system call [stubs](https://en.wikipedia.org/wiki/Method_stub "Method stub"), the system call numbers.

- In the case of a complete operating system ABI, the **binary format** of object files, program libraries, etc.



## Procedure /Function Calling Conventions
> 🤖 Contents below are AI-generated (Chat-gpt4-mini) 
> ↗ [Procedure (Function) Call & Runtime Memory Layout](../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

Function call conventions are a set of rules that define how functions receive parameters, return values, and manage resources such as the stack and registers. These conventions ensure **compatibility** and **interoperability** between different parts of a program, such as between functions written in different languages or between a program and the operating system.

Function calling conventions are thus a product of both the underlying **architecture (ISA)** and the design choices made by **compiler** and **system designers**.
- **ISA Influence**: The difference in function call conventions between architectures like x86 and RISC-V is indeed influenced by their respective ISAs. CISC architectures like x86 traditionally use a stack-based calling convention due to a smaller number of registers, while RISC architectures like RISC-V use register-based calling conventions because they have more registers available.
- **Flexibility**: Although ISAs strongly influence calling conventions, they are not strictly defined by the ISA itself. They can vary based on operating systems, compilers, and specific use cases within the same ISA.


### Aspects Considered by Function Call Conventions
> 🤖 Contents below are AI-generated (Chat-gpt4-mini) 

Function call conventions are generally defined by the following aspects:
1. **Argument Passing**: How and where arguments are passed to functions (e.g., in registers, on the stack, or a combination of both).
2. **Return Value**: How and where the return value is provided back to the caller (e.g., in a specific register).
3. **Stack Management**: How the call stack is managed, including who is responsible for cleaning up the stack after the call (caller vs. callee).
4. **Register Preservation**: Which registers must be preserved across function calls (callee-saved vs. caller-saved registers).
5. **Calling Sequence**: The specific instructions or sequence used to make the function call and return.


### Influence of ISA on Calling Conventions
> 🤖 Contents below are AI-generated (Chat-gpt4-mini) 

Yes, calling conventions are heavily influenced by the Instruction Set Architecture (ISA). Different ISAs have different sets of registers, stack management mechanisms, and instructions, which impact how calling conventions are designed.
#### x86 Architecture (CISC)
- **Calling Convention**: In traditional x86 calling conventions (like `cdecl`, `stdcall`), arguments are often passed on the stack. The return address is also stored on the stack, and the stack is used extensively due to the limited number of general-purpose registers.
- **Reason**: x86 is a Complex Instruction Set Computer (CISC) architecture with a smaller number of registers (especially in 32-bit mode). The stack-based approach allows for flexible function calls with varying numbers of arguments without overloading the limited registers.
#### RISC-V Architecture (RISC)
- **Calling Convention**: In RISC-V, a modern Reduced Instruction Set Computer (RISC) architecture, arguments are primarily passed in registers. Specifically, the first few arguments are passed in specific registers, and only additional arguments (beyond those that can be stored in registers) are passed on the stack.
- **Reason**: RISC architectures like RISC-V have a larger number of general-purpose registers, which allows for more efficient function calls by passing arguments directly in registers, reducing memory access and speeding up function calls.



## Name Mangling



## Type Representations



## Ref
[ABI | Wikipeida]: https://en.wikipedia.org/wiki/Application_binary_interface

