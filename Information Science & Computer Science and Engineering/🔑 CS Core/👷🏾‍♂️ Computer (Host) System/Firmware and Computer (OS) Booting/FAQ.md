# FAQ

[TOC]



## 👉 Do microcode and micro-operation mean the same?
#microcode #micro_operation #ASM #computer_architecture

No.

Microcode is a micro-program made up of micro-instructions which are directly executed by the hardware. It is an interpreter for the machine code the programmer sees, in much the same way as traditional BASIC is for a tokenised BASIC program. Micro-instructions generally look nothing like the user-visible machine language.

A micro-op is also an instruction that is directly executed by the hardware. In a RISC CPU machine code instructions and micro-ops mostly have a 1:1 relationship. The only difference is that a micro-op is a wider and simpler version of the machine code. For example where the machine code might have several different instruction formats e.g. `Rd <- Rs1 op Rs2` and `Rd <- Rs1 op imm12` and `Rd <- (imm20 << 12)` the micro-ops will all have fields for all of op, `rd`, `rs1`, `rs2`, `imm32` even when some of them aren't used. The CPU designer *could* make the machine code be like this, and not decode instructions to a u-op at all, but then programs would be much bigger. It doesn't matter if a u-op inside the CPU pipeline is 64 or more bits wide. It would be very bad if programs in memory were.

On RISC CPUs there might be a few cases where a machine code instruction decodes to two or more u-ops. Many RISC ISAs don't need this, and in the others it is fairly rare. In modern CISC computers, which are fast because they don't use a microcode interpreter, many or most instructions are split into several u-ops. This is the source of the false "x86 is RISC now anyway" claim you often hear. No -- "RISC" and "CISC" are properties of the Instruction Set, not of how it is implemented.

In a few cases, two or more instructions might be combined into one u-op. Modern x86 and Arm both do this for a compare followed by a conditional branch.


[Do microcode and micro-operation mean the same? | Reddit]: https://www.reddit.com/r/arm/comments/oi4dk1/comment/h4v7im5/?utm_source=share&utm_medium=web2x&context=3



## Ref

