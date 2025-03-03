# x86 Calling Conventions

[TOC]



## Res
### Related Topics



## Intro
This article describes the **[calling conventions](https://en.wikipedia.org/wiki/Calling_convention "Calling convention")** used when programming **[x86](https://en.wikipedia.org/wiki/X86 "X86")** architecture [microprocessors](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor").

Calling conventions describe the interface of called code:
- The order in which atomic (scalar) parameters, or individual parts of a complex parameter, are allocated
- How parameters are passed (pushed on the stack, placed in registers, or a mix of both)
- Which registers the called function must preserve for the caller (also known as: callee-saved registers or non-volatile registers)
- How the task of preparing the stack for, and restoring after, a function call is divided between the caller and the callee

This is intimately related with the assignment of sizes and formats to programming-language types. Another closely related topic is [name mangling](https://en.wikipedia.org/wiki/Name_mangling "Name mangling"), which determines how symbol names in the code are mapped to symbol names used by the linker. 

**1️⃣ Calling conventions**, **2️⃣ type representations**, and **3️⃣ name mangling** are all part of what is known as an 🔗 [application binary interface](https://en.wikipedia.org/wiki/Application_binary_interface "Application binary interface")(ABI).

There are subtle differences in how various compilers implement these conventions, so it is often difficult to interface code which is compiled by different compilers. On the other hand, conventions which are used as an API standard (such as `stdcall`) are very uniformly implemented.



## Ref
[x86 calling conventions | Wikipedia]: https://en.wikipedia.org/wiki/X86_calling_conventions

[👍 x86中 几种函数调用方式]: https://www.cnblogs.com/rollenholt/archive/2012/03/28/2421921.html
[👍 从汇编语言的寄存器来看函数参数传递]: https://www.cnblogs.com/goldsunshine/p/14560301.html#代码在内存中的分布

