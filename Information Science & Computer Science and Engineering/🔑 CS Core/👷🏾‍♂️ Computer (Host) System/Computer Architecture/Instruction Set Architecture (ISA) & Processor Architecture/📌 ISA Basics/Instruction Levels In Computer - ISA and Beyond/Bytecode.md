# Bytecode

[TOC]



## Res
### Related Topics
↗ [Java Bytecode](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Java%20Bytecode/Java%20Bytecode.md)
↗ [JVM Instrument Set & Java Bytecode](../../RISC%20(Reduced%20Instruction%20Set%20Computer)/JVM%20Instrument%20Set%20&%20Java%20Bytecode/JVM%20Instrument%20Set%20&%20Java%20Bytecode.md)

↗ [Ark Bytecode](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Ark%20Bytecode/Ark%20Bytecode.md)
↗ [Smali Code](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Smali%20Code/Smali%20Code.md)

↗ [ASM (Assembly Languages)](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/ASM%20(Assembly%20Languages).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Bytecode

**Bytecode** (also called **portable code** or **p-code** is a form of [instruction set](https://en.wikipedia.org/wiki/Instruction_set "Instruction set") designed for efficient execution by a software [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing) "Interpreter (computing)"). Unlike [human-readable](https://en.wikipedia.org/wiki/Human-readable_code "Human-readable code") [source code](https://en.wikipedia.org/wiki/Source_code "Source code"), bytecodes are compact numeric codes, constants, and references (normally numeric addresses) that encode the result of [compiler](https://en.wikipedia.org/wiki/Compiler "Compiler") parsing and performing [semantic analysis](https://en.wikipedia.org/wiki/Semantic_analysis_(compilers) "Semantic analysis (compilers)") of things like type, scope, and nesting depths of program objects.

The name bytecode stems from instruction sets that have one-[byte](https://en.wikipedia.org/wiki/Byte "Byte") [opcodes](https://en.wikipedia.org/wiki/Opcode "Opcode")followed by optional parameters. [Intermediate representations](https://en.wikipedia.org/wiki/Intermediate_representation "Intermediate representation") such as bytecode may be output by [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") implementations to ease [interpretation](https://en.wikipedia.org/wiki/Interpreter_(computer_software) "Interpreter (computer software)"), or it may be used to reduce hardware and [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") dependence by allowing the same code to run [cross-platform](https://en.wikipedia.org/wiki/Cross-platform "Cross-platform"), on different devices. Bytecode may often be either directly executed on a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine "Virtual machine") (a [p-code machine](https://en.wikipedia.org/wiki/P-code_machine "P-code machine"), i.e., interpreter), or it may be further compiled into [machine code](https://en.wikipedia.org/wiki/Machine_code "Machine code") for better performance.

Since bytecode instructions are processed by software, they may be arbitrarily complex, but are nonetheless often akin to traditional hardware instructions: virtual [stack machines](https://en.wikipedia.org/wiki/Stack_machine "Stack machine") are the most common, but virtual [register machines](https://en.wikipedia.org/wiki/Register_machine "Register machine") have been built also. Different parts may often be stored in separate files, similar to [object modules](https://en.wikipedia.org/wiki/Object_file "Object file"), but dynamically loaded during execution.



## Ref
[Intermediate representation | Wikipedia]: https://en.wikipedia.org/wiki/Intermediate_representation

[I2C | Wikipedia]: https://en.wikipedia.org/wiki/I²C


