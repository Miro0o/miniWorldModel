# Instruction Set Architecture (ISA) & Processor Architecture

[TOC]



## Res
### Related Topics
Dive deep beginning with ↗ [ISA Instruction Formats](📌%20ISA%20Basics/📌%20ISA%20Instruction%20Basics/ISA%20Instruction%20Formats.md)

The implementation of an ISA is referred to as "Microprocessor". This part is available at ↗ [Microcomputer Principles & Interfaces /Computer Microarchitectures](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md).

Instruction in action: ↗ [Instruction Execution](../../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Instruction%20Execution.md)

ISA is implemented and largely relies on the implementation of ↗ [Computer Microarchitectures (Computer Organization) & von Neumann Model](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md), especially ↗ [Computer Processors & Logic Chips](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/Computer%20Processors%20&%20Logic%20Chips.md) or ↗ [CPU (Central Processing Unit)](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md) in most occasions.

↗ [ASM (Assembly Languages)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
↗ [System Call Interfaces (SCI)](../../Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/System%20Call%20Interfaces%20(SCI).md)
↗ [Machine Code](📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Machine%20Code.md)


### Learning Resources
https://www.intel.com/content/www/us/en/resources-documentation/developer.html
Intel Documentation Center

https://www.amd.com/en/developer/browse-by-resource-type/documentation.html
AMD Documentation Center



## Overview
> 👉 quick look at [👧🏽 MARIE](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/👧🏽%20MARIE.md) for gists of ISA
> ↗ [FAQ/ 👉 ISA 🆚 ASM ? Differences & Commons 🤔](../FAQ.md#👉%20ISA%20🆚%20ASM%20?%20Differences%20&%20Commons%20🤔)

The **Instruction Set Architecture (ISA)** of a machine is a critical abstraction layer in computer architecture that specifies the instructions that the computer can perform and the format for each instruction, along with the associated rules for how those instructions interact with the processor’s state (registers, memory, etc.). The ISA is essentially an interface between the software and the hardware. Some ISAs include hundreds of instructions.

The ISA serves as the boundary between software (such as operating systems and applications) and hardware (the physical CPU and memory). Programmers and compilers write code that adheres to the ISA, which ensures that the code can be executed on any hardware that implements that ISA.

![](../../../../../../../Assets/Pics/Screenshot%202023-03-21%20at%209.12.25%20PM.png)
<small>Instruction Processing Level</small>


### Components Defined by an ISA
> 🤖 Contents below are AI-generated (Chat-gpt4-mini) 
> ↗ [x86 Architecture Family (80x86, 8086 family)](CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md) for an instance
> ↗ [FAQ/ 👉 ISA 🆚 ASM ? Differences & Commons 🤔](../FAQ.md#👉%20ISA%20🆚%20ASM%20?%20Differences%20&%20Commons%20🤔)

1. **Instruction Set**:
    - **Types of Instructions**: Defines the various types of instructions the processor can execute, including arithmetic operations, data movement (load/store), control flow (jumps, branches), and special instructions (e.g., system calls, interrupts).
    - **Instruction Formats**: Specifies how instructions are encoded in binary form, including the layout of bits in an instruction, opcode, operand fields, etc.
2. **Registers**:
    - **General-Purpose Registers**: The number, size, and purpose of general-purpose registers (e.g., registers for arithmetic operations, addressing, etc.).
    - **Special-Purpose Registers**: Includes the program counter (PC), status register, stack pointer, and others that are critical for control flow and state management.
3. **Addressing Modes**:
    - **Memory Addressing**: Defines how memory addresses are calculated, including direct, indirect, immediate, indexed, and relative addressing modes.
4. **Data Types and Sizes**:
    - **Supported Data Types**: Defines the data types that the ISA can handle natively, such as integers, floating-point numbers, and SIMD (Single Instruction, Multiple Data) types.
    - **Data Width**: Specifies the size of these data types (e.g., 8-bit, 16-bit, 32-bit, 64-bit).
5. **Memory Model**:
    - **Endianness**: Defines the byte order (big-endian vs. little-endian) used to represent data in memory.
    - **Alignment**: Specifies how data should be aligned in memory for efficient access.
6. **Instruction Execution**
    - **Interrupt and Exception Handling**: Defines how interrupts and exceptions are managed, including which instructions trigger them, how the CPU state is saved, and how control is transferred to the appropriate handler.
    - **Function/Procedure Calling Conventions**: A set of rules that define how functions receive parameters, return values, and manage resources such as the stack and registers
    - **Control Flow**: How instructions control the flow of execution (e.g., branching, jumping, function calls).
1. **Modes of Operation**:
    - **Privilege Levels**: Defines different modes such as user mode, supervisor mode, and possibly others that control access to certain instructions and resources.
    - **Execution Modes**: in x86 like real mode, protected mode and etc.?


### ISA 🆚 Machine Code
↗ [ISA Instruction Basics](📌%20ISA%20Basics/📌%20ISA%20Instruction%20Basics/ISA%20Instruction%20Basics.md)
↗ [ISA Basics](📌%20ISA%20Basics/ISA%20Basics.md)
↗ [Machine Code](📌%20ISA%20Basics/Instruction%20Levels%20In%20Computer%20-%20ISA%20and%20Beyond/Machine%20Code.md)
#### Relationship Between ISA and Machine Code
> 🤖 Contents below are AI-generated (Chat-gpt4-mini) 

1. **Specification vs. Implementation**:
    - The ISA is the specification that defines what the machine code instructions should look like, what operations they perform, and how they interact with the CPU's resources.
    - Machine code is the actual implementation of this specification. It is the encoded form of the instructions that the processor executes.
2. **Encoding**:
    - The ISA specifies the structure and encoding of machine instructions, including how the binary bits are arranged to represent different operations and operands.
    - Machine code is the result of applying this encoding to specific instructions. For example, the ISA might specify that an `ADD` instruction has a specific binary encoding, and the machine code will be the binary sequence that represents this `ADD` instruction.
3. **Abstraction Level**:
    - The ISA is at a higher level of abstraction, describing the rules and capabilities of the processor in terms of what it can do (e.g., add, subtract, load, store) without specifying the exact binary details.
    - Machine code is at a lower level, consisting of the exact binary instructions that are executed by the CPU.

**Example**
Suppose the ISA for a particular processor defines an `ADD` instruction that adds two registers and stores the result in a third register. The ISA might specify:
- The opcode for `ADD` is `0001`.
- The registers are represented by 3-bit codes.
- The instruction format is `opcode (4 bits) | destination register (3 bits) | source register 1 (3 bits) | source register 2 (3 bits)`.

For an instruction like `ADD R1, R2, R3` (where R1 = R2 + R3):
- **ISA**: Describes that this operation is an addition, involves three registers, and follows a specific binary encoding pattern.
- **Machine Code**: The actual binary code might be `0001 001 010 011`, where `0001` is the opcode for `ADD`, `001` is the code for R1, `010` for R2, and `011` for R3.
#### ISA Instruction to Machine Code Mapping /Encoding
> 🤖 Contents below are AI-generated (Chat-gpt4-mini) 

1. **One-to-One Mapping**:
    - **Simple Instructions**: For many simple instructions, especially in RISC (Reduced Instruction Set Computer) architectures, there is a straightforward one-to-one mapping between an ISA instruction and a machine code instruction. Each ISA instruction is encoded as a single, unique binary machine code sequence.
    - **Example**: In a RISC architecture like RISC-V, an instruction like `ADD` might always translate directly into a specific 32-bit binary pattern.
2. **One-to-Many Mapping**:
    - **Complex Instructions or Pseudo-instructions**: Some ISA instructions, particularly in CISC (Complex Instruction Set Computer) architectures, may not have a one-to-one mapping. Instead, a single ISA instruction might translate into multiple machine code instructions, or vice versa.
    - **Example**:
        - **Macro-instructions or Pseudo-instructions**: An ISA might define a "pseudo-instruction" that is more abstract or high-level (like a complex memory operation). This pseudo-instruction could be translated by the assembler into multiple simpler machine code instructions.
        - **Variable-length Instructions**: In CISC architectures like x86, a single high-level operation (like a `MOV`with a complex addressing mode) might be encoded differently depending on the specific operands or addressing modes. Thus, the same logical operation could have different machine code representations.
3. **One-to-Zero Mapping**:
    - **Optimization or Translation**: Sometimes, an ISA instruction may be optimized away or transformed during the compilation or assembly process. For example, certain instructions might be redundant or optimized out if they don’t contribute to the final machine code (e.g., certain no-op operations).

**Example of Different Mappings**
- **RISC Architecture (e.g., RISC-V)**:
    - A RISC-V instruction like `ADD R1, R2, R3` might map directly to a single 32-bit machine code word, such as `0x00002033`.
    - Every `ADD` instruction in RISC-V will have a consistent and unique machine code representation.
- **CISC Architecture (e.g., x86)**:
    - An x86 instruction like `MOV AX, [BX + SI]` might have different encodings depending on the size of the operands, the addressing mode, and other factors.
    - A complex instruction like `LODSB` (which loads a byte from memory into the AL register and increments the pointer) might translate into different machine code sequences depending on the current addressing mode or segment registers.
#### 🤔 How is ISA/ASM Translated into Machine Code?
Machine code is the actual binary instruction executed by CPU. ISA defines the format, structure, and organization of each binary instruction and give them mnemonics. ASM, based on those mnemonics, adds more language-related grammars, like pseudo-instruction, to better serve the assembler and programmer.  
-- personal understanding

↗ [ASM (Assembly Languages)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)


### Brief History of ISA Development
↗ [Development History of ISA](📌%20ISA%20Basics/Development%20History%20of%20ISA.md)



## 🎨 ISA Design Decisions
### ISA Design Principles
Specifically, instruction sets are differentiated by the following features:
1. Operand storage (data can be stored in a stack structure or in registers or both)

2. Number of explicit operands per instruction (zero, one, two, and three being the most common)

3. Operand location (instructions can be classified as register-to-register, register-to-memory, or memory-to-memory, which simply refer to the combinations of operands allowed per instruction)

4. Operations (including not only types of operations but also which instructions can access memory and which cannot)

5. Type and size of operands (operands can be addresses, numbers, or even characters)


### ISA Measure Metrics
Instruction set architectures are measured by several different factors, including 
1. The amount of **space** a program requires;
2. The **complexity** of the instruction set, in terms of the amount of decoding necessary to execute an instruction and the complexity of the tasks performed by the instructions;
3. The **length** of the instructions;
4. The **total number** of instructions.


### ISA Considerations
- **Instruction length.** Short instructions are typically better because they take up less space in memory and can be fetched quickly. However, this limits the number of instructions, because there must be enough bits in the instruction to specify the number of instructions we need. Shorter instructions also have tighter limits on the size and number of operands.
	- Instructions of a fixed length are easier to decode but waste space.

- **Memory organization affects instruction format**. If memory has, for example, 16- or 32-bit words and is not byte addressable, it is difficult to access a single character. For this reason, even machines that have 16-, 32-, or 64-bit words are often byte addressable, meaning that every byte has a unique address even though words are longer than 1 byte.

- **A fixed-length instruction does not necessarily imply a fixed number of operands**. We could design an ISA with fixed overall instruction length but allow the number of bits in the operand field to vary as necessary. (This is called an **expanding opcode** and is covered in more detail in Section 5.2.5.)

- **There are many different types of addressing modes**. In Chapter 4, MARIE used two addressing modes: direct and indirect. However, we see in this chapter that a large variety of addressing modes exist.

- **Byte order**. If words consist of multiple bytes, in what order should these bytes be stored on a byte-addressable machine? Should the least significant byte be stored at the highest or lowest byte address? This little versus big endian debate is discussed in the following section.

- How many registers should the architecture contain, and how should these registers be organized? How should operands be stored in the CPU?



## Ref
[Intel和AMD 与 x86，ARM，MIPS有什么区别？ - 零度君的回答 - 知乎]: https://www.zhihu.com/question/63627218/answer/211243489

[Instructions in ISA and microinstructions?]: https://softwareengineering.stackexchange.com/questions/273870/instructions-in-isa-and-microinstructions

[Comparison of instruction set architectures]: https://en.wikipedia.org/wiki/Comparison_of_instruction_set_architectures

[Processor register | Wikipedia]: https://en.wikipedia.org/wiki/Processor_register
