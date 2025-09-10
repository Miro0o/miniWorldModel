# Micro-Instruction & Micro-Operation

[TOC]



## Res
### Related Topics
↗ [FAQ /👉 Do microcode and micro-operation mean the same?](../../../../Firmware%20and%20Computer%20(OS)%20Booting/FAQ.md#👉%20Do%20microcode%20and%20micro-operation%20mean%20the%20same?)



## Intro
> 👉 quick look at [👧🏽 MARIE](../../../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/👧🏽%20MARIE.md) for gists of microoperations & RTN

The ISA constitutes a set of **machine-level instructions** used by computer components to execute a program. Each instruction appears to be very simplistic; however, if you examine what actually happens at the **component level**, each instruction involves multiple “mini-instructions” being executed.

> 🤖 Gemini 2.5

A micro-operation is the most fundamental, atomic operation a CPU can perform, such as moving data between registers or incrementing a counter. A micro-instruction is a set of these micro-operations, encoded as a control word in control memory, that are executed simultaneously to implement a complex machine code instruction. In essence, micro-instructions are the high-level commands within the microprogram, while micro-operations are the individual, hardware-level steps that carry out those commands


### RTN (RTL)
The symbolic notation used to describe the behavior of micro-operations is called **register transfer notation (RTN)** or **register transfer language (RTL)**. Each RTN instruction consists of one or more elementary RTN operations



## Ref
[Micro Instruction Sequencing]: https://www.geeksforgeeks.org/micro-instruction-sequencing/

