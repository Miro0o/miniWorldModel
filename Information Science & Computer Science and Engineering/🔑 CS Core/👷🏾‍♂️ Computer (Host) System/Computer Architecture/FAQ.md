# FAQ
[TOC]



## 👉 X86 | IA-64 | ARM
#x86 #x86_64 #IA-64 #ISA #Intel #ARM

Different CPU uses different CIS. Popular ones now are x86 and ARM.

**x86**: Itel's CPU series based on 8086. From 8086(16bit) to IA-32(32bit) to x86-64(64bit)

**IA-64**: Itel's another CPU articheture different from x86. Now was obsolete. 

> History:
>
> While Intel was the first to come up with 64-bit processor (IA-64), AMD was the first to push 64-bit processor to Domestic use and gained huge success. When Intel realized it was legend-behind, it had no choice but to go along with AMD's architecture issuing x86-64 rather than continuing its own IA-64. 

**[ARM](https://zh.wikipedia.org/zh-hans/ARM架構)**: Advanced RISC Machine. Developed by [Acorn](https://en.wikipedia.org/wiki/Acorn_Computers), British. (Now merged into [Softbank Group](https://en.wikipedia.org/wiki/SoftBank_Group))



[x86\x86-64\IA-32\IA-64]: https://www.cnblogs.com/wangyichao/p/4270394.html

[被我们熟知的X86，IA(Intel Architecture),ARM架构是什么样的历史]: https://blog.csdn.net/weixin_41831919/article/details/106168030

[ARM 架构]: https://zh.wikipedia.org/zh-hans/ARM架構

[Timeline: A brief history of the x86 microprocessor]: https://www.computerworld.com/article/2535019/timeline--a-brief-history-of-the-x86-microprocessor.html

[x86: Evolution of an Architecture]: https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html

[x86]: https://en.wikipedia.org/wiki/X86#History



## 👉 RISC vs CISC
#RISC #CISC #ISA

🔗 https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/index.html

The simplest way to examine the advantages and disadvantages of RISC architecture is by contrasting it with it's predecessor: CISC (Complex Instruction Set Computers) architecture

![img](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/options/memoryfig.gif)
<small>Multiplying Two Numbers in Memory</small>

On the right is a diagram representing the storage scheme for a generic computer. The main memory is divided into locations numbered from (row) 1: (column) 1 to (row) 6: (column) 4. The execution unit is responsible for carrying out all computations. However, the execution unit can only operate on data that has been loaded into one of the six registers (A, B, C, D, E, or F). Let's say we want to find the product of two numbers - one stored in location 2:3 and another stored in location 5:2 - and then store the product back in the location 2:3.

**The CISC Approach** 
The primary goal of CISC architecture is to complete a task in as few lines of assembly as possible. This is achieved by building processor hardware that is capable of understanding and executing a series of operations. For this particular task, a CISC processor would come prepared with a specific instruction (we'll call it "MULT"). When executed, this instruction loads the two values into separate registers, multiplies the operands in the execution unit, and then stores the product in the appropriate register. Thus, the entire task of multiplying two numbers can be completed with one instruction:

```shell
MULT 2:3, 5:2
```

MULT is what is known as a "complex instruction." It operates directly on the computer's memory banks and does not require the programmer to explicitly call any loading or storing functions. It closely resembles a command in a higher level language. For instance, if we let "a" represent the value of 2:3 and "b" represent the value of 5:2, then this command is identical to the C statement "a = a * b."

One of the primary advantages of this system is that the compiler has to do very little work to translate a high-level language statement into assembly. Because the length of the code is relatively short, very little RAM is required to store instructions. The emphasis is put on building complex instructions directly into the hardware. 

**The RISC Approach** 
RISC processors only use simple instructions that can be executed within one clock cycle. Thus, the "MULT" command described above could be divided into three separate commands: "LOAD," which moves data from the memory bank to a register, "PROD," which finds the product of two operands located within the registers, and "STORE," which moves data from a register to the memory banks. In order to perform the exact series of steps described in the CISC approach, a programmer would need to code four lines of assembly:

```shell
LOAD A, 2:3LOAD B, 5:2PROD A, BSTORE 2:3, A
```

At first, this may seem like a much less efficient way of completing the operation. Because there are more lines of code, more RAM is needed to store the assembly level instructions. The compiler must also perform more work to convert a high-level language statement into code of this form. 

| **CISC**                                                     | **RISC**                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Emphasis on hardware                                         | Emphasis on software                                         |
| Includes multi-clock complex instructions                    | Single-clock, reduced instruction only                       |
| Memory-to-memory: "LOAD" and "STORE" incorporated in instructions | Register to register: "LOAD" and "STORE" are independent instructions |
| Small code sizes, high cycles per second                     | Low cycles per second, large code sizes                      |
| Transistors used for storing complex instructions            | Spends more transistors on memory registers                  |



However, the RISC strategy also brings some very important advantages. Because each instruction requires only one clock cycle to execute, the entire program will execute in approximately the same amount of time as the multi-cycle "MULT" command. These RISC "reduced instructions" require less transistors of hardware space than the complex instructions, leaving more room for general purpose registers. Because all of the instructions execute in a uniform amount of time (i.e. one clock), pipelining is possible.

Separating the "LOAD" and "STORE" instructions actually reduces the amount of work that the computer must perform. After a CISC-style "MULT" command is executed, the processor automatically erases the registers. If one of the operands needs to be used for another computation, the processor must re-load the data from the memory bank into a register. In RISC, the operand will remain in the register until another value is loaded in its place.

**The Performance Equation**
The following equation is commonly used for expressing a computer's performance ability:



![img](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/options/performanceeq.gif)

The CISC approach attempts to minimize the number of instructions per program, sacrificing the number of cycles per instruction. RISC does the opposite, reducing the cycles per instruction at the cost of the number of instructions per program. 

**RISC Roadblocks** 
Despite the advantages of RISC based processing, RISC chips took over a decade to gain a foothold in the commercial world. This was largely due to a lack of software support.

![img](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/options/roadblock.jpg)

Although Apple's Power Macintosh line featured RISC-based chips and Windows NT was RISC compatible, Windows 3.1 and Windows 95 were designed with CISC processors in mind. Many companies were unwilling to take a chance with the emerging RISC technology. Without commercial interest, processor developers were unable to manufacture RISC chips in large enough volumes to make their price competitive.Another major setback was the presence of Intel. Although their CISC chips were becoming increasingly unwieldy and difficult to develop, Intel had the resources to plow through development and produce powerful processors. Although RISC chips might surpass Intel's efforts in specific areas, the differences were not great enough to persuade buyers to change technologies.

**The Overall RISC Advantage** 
Today, the Intel x86 is arguable the only chip which retains CISC architecture. This is primarily due to advancements in other areas of computer technology. The price of RAM has decreased dramatically. In 1977, 1MB of DRAM cost about $5,000. By 1994, the same amount of memory cost only $6 (when adjusted for inflation). Compiler technology has also become more sophisticated, so that the RISC use of RAM and emphasis on software has become ideal.



## 👉 ISA 🆚 ASM ? Differences & Commons 🤔
#ISA #ASM 

I think everyone is giving you the same answer. Instruction set is is the set (as in math) of all instructions the processor can execute or understand. Assembly language is a programming language. 

Let me try some examples based on some of the questions you are asking. And I am going to be jumping around from processor to processor with whatever code I have handy.

Instruction or opcode or binary or machine language, whatever term you want to use for the bits/bytes that are loaded into the processor to be decoded and executed. An example 
```
0x5C0B
```

The assembly language, would be
```
add r12,r11
```

For this particular processor. In this case that means r11 = r11 + r12. So I put that text, the add r12,r11 in a text file and use an assembler (a program that compiles/assembles assembly language) to assemble it into some form of binary. Like any programming language sometimes you create object files then link them together, sometimes you can go straight to a binary. And there are many forms of binaries which are in ascii and binary forms and a whole other discussion.

Now what can you do in assembler that is not part of the instruction set? How do they differ? Well for starters you can have macros:

```
.macro add3 arg1, arg2, arg3

    add \arg1,\arg3
    add \arg2,\arg3

.endm


.text

   add3 r10,r11,r12
```

Macros are like inline functions, they are not functions that are called but generate code in line. No different than a C macro for example. So you might use them to save some typing or you might use them to abstract something that you want to do over and over again and want the ability to change in one place and not have to touch every instance. The above example essentially generates this:
```shell
add r10,r12
add r11,r12
```

Another difference between the instruction set and assembly langage are pseudo instructions, for this particular instruction set for example there is no pop instruction for popping things off the stack at least not by that name, and I will explain why. But you are allowed to save some typing and use a pop in your code:
```shell
pop r12
```

The reason why there is no pop is because the addressing modes are flexible enough to have a read from the address in the source register put the value in the destination register and increment the source register by a word. Which in assembler for this instruction set is
```shell
mov @r1+,r12
```

both the pop and the mov result in the opcode 0x413C.

Another example of differences between the instruction set and assembler, switching instruction sets, is something like this:
```shell
ldr r0,=bob
```

Which to this assembly language means load the address of bob into register 0, there is no instruction for that, what the assembler does with it is generate something that would look like this if you were to write it in assembler by hand:
```shell
ldr r0,ZZ123
...
ZZ123: .word bob
```

Essentially, in a reachable place from that instruction, not in the execution path, a word is created which the linker will fill in with the address for bob. The ldr instruction likewise by the assembler or linker will get encoded with an ldr of a pc relative instruction. 

That leads to a whole category of differences between the instruction set and the assembly language
```shell
call fun
```

Machine code has no way of knowing what fun is or where to find it. For this instruction set with its many addressing modes (note I am specifically and intentionally avoiding naming the instruction sets I am using as that is not relevant to the discussion) the assembler or linker as the case may be (depending on where the fun function ends up being relative to this instruction).

The assembler may choose to encode that instruction as pc relative, if the fun function is 40 bytes ahead of the call instruction it may encode it with the equivalent of call pc+36 (take four off because the pc is one instruction ahead at execution time and this is a 4 byte instruction).

Or the assembler may not know where or what fun is and leave it up to the linker, and in that case the linker may put the absolute address of the function something that would be similar to call #0xD00D.

Same goes for loads and stores, some instruction sets have near and far pc relative, some have absolute address, etc. And you may not care to choose, you may just say
```shell
mov bob,r1 
```

and the assembler or linker or a combination of the two takes care of the rest.

Note that for some instruction sets the assembler and linker may happen at once in one program. These days we are used to the model of compiling to objects and then linking objects, but not all assemblers follow that model.

Some more cases where the assembly language can take some shortcuts:
```shell
hang: b hang
  b .
  b 2f
1:
  b 1b
  b 1f
1:
  b 1b
2:
```

The hang: b hang makes sense, branch to the label called hang. Essentially a branch to self. And as the name implies this is an infinite loop. But for this assembly language b . means branch to self, an infinite loop but I didn't have to invent a label, type it and branch to it. Another shortcut is using numbers b 1b means branch to 1 back, the assembler looks for the label number 1 behind or above the instruction. The b 1f, which is not a branch to self, means branch 1 forward, this is perfectly valid code for this assembler. It will look forward or below the line of code for a label number 1: And you can re-use number 1 like crazy in your assembly language program for this assembler, saves on having to invent label names for simple short branches. The second b 1b branches to the second 1. and is a branch to self.

It is important to understand that the company that created the processor defines the instruction set, and the machine code or opcodes or whatever term they or you use for the bits and bytes the processor decodes and executes. Very often that company will produce a document with assembly language for those instructions, a syntax. Often that company will produce an assembler program to compile/assemble that assembly language...using that syntax. But that doesn't mean that any other person on the planet that chooses to write an assembler for that instruction set has to use that syntax. This is very evident with the x86 instruction set. Likewise any psuedo instructions like the pop above or macro syntax or other short cuts like the b 1b have to be honored from one assembler to another. And very often are not, you see this with ARM for example the universal comment symbol of ; does not work with gnu assembler you have to use @ instead. ARMs assembler does use the ; (note I write my arm assembler with ;@ to make it portable). It gets even worse with gnu tools for example you can can put C language things like `#define` and `/* comment */` in your assembler and use the C compiler instead of the assembler and it will work. I prefer to stay as pure as I can for maximum portability, but naturally you may choose to use whatever features the tool offers.


[Are instruction set and assembly language the same thing? | Stackoverflow]: https://stackoverflow.com/a/5384544/16542494

---
 >🤖 Contents below are AI-generated (Chat-gpt4-mini) 

The distinction between an Instruction Set Architecture (ISA) and Assembly Language (ASM) is subtle but important. They are closely related concepts, but they serve different purposes and operate at different levels in the computer system.

**What is ISA (Instruction Set Architecture)?**
- The **ISA (Instruction Set Architecture)** is the specification of the set of instructions that a particular processor can execute. It is a formal description of the operations a processor can perform, the data types it can handle, the registers it contains, the addressing modes it supports, and how it interacts with memory and I/O devices.
- **Key Aspects of ISA:**
	- **Instruction Set**: The list of all machine instructions that the processor understands, including their binary encoding.
	- **Registers**: The available registers (e.g., general-purpose, special-purpose) and how they are used.
	- **Memory Architecture**: The way memory is accessed and managed, including addressing modes and the memory hierarchy.
	- **Data Types**: Supported data formats (e.g., integers, floating-point numbers).
	- **Control Flow**: How instructions control the flow of execution (e.g., branching, jumping, function calls).

**What is Assembly Language (ASM)?**
- **Assembly Language (ASM)** is a low-level programming language that provides a human-readable representation of the machine code defined by an ISA. Each instruction in an assembly language corresponds directly to a machine instruction supported by the ISA.
- **Key Aspects of ASM:**
	- **Mnemonic Representation**: Assembly language uses mnemonics (e.g., `ADD`, `MOV`, `JMP`) to represent the machine instructions defined by the ISA. These mnemonics are more readable than binary code.
	- **Syntax and Directives**: ASM includes a specific syntax and directives (e.g., `.data`, `.text`) to organize code, declare data sections, and manage assembly-time operations like macros and constants.
	- **Labels and Symbols**: ASM allows the use of labels and symbols to make code more understandable and to manage control flow (e.g., loop labels, function names).
	- **Assembler**: An assembler is a tool that translates assembly language code into the corresponding machine code that the processor can execute.

**The Relationship Between ISA and ASM**
1. **ISA as the Foundation**: The ISA is the underlying specification that defines what the processor can do. It is the "blueprint" that determines the capabilities and limitations of the processor. Assembly language is built directly on top of this blueprint.
2. **ASM as a Representation**: Assembly language is a representation of the ISA. It provides a more understandable way for humans to write code that will run on a processor. ==Each line of assembly code corresponds to one or more instructions defined by the ISA.==
3. **Direct Mapping**: Every assembly instruction corresponds to a specific machine instruction as defined by the ISA. For example, an `ADD` instruction in assembly might correspond to a specific binary pattern in machine code that the ISA defines as "add two numbers."
4. **Abstractions in ASM**: While closely tied to the ISA, assembly language often includes additional abstractions and conveniences not strictly part of the ISA. For example:
   - **Pseudo-instructions**: Some assembly languages provide pseudo-instructions that don’t correspond directly to a single machine instruction but are expanded by the assembler into one or more real instructions.
   - **Macros and Directives**: ASM languages may include macros or directives (e.g., `.macro`, `.include`, `.org`) that help organize code, but these are not part of the ISA itself.

**Overlaps and Differences**
- **Overlap**: The overlap between ISA and ASM comes from the fact that assembly language is designed to be a human-readable form of the ISA. The instructions, registers, and memory models in ASM directly reflect the ISA.
- **Differences**:
  - **Abstraction**: The ISA is an abstract specification that is independent of any particular implementation. Assembly language, however, is a practical tool that programmers use to write software.
  - **Human Readability**: ISA defines the binary encoding of instructions and operations at the hardware level. ASM, on the other hand, provides a way for humans to write and understand these operations using readable text.
  - **Complexity**: An ISA might define complex instruction formats and behaviors, while ASM provides a simpler or more user-friendly interface to these instructions.

**Example**
Consider the following example for a simple addition operation:
- **ISA Level**:
  - **Instruction**: An ADD instruction might be encoded as a binary pattern `00000001` followed by binary representations of the operands.
  - **Operands**: The ISA specifies which registers can be used and how the instruction interacts with memory.
- **ASM Level**:
  - **Instruction**: The same operation in assembly might be written as `ADD R1, R2, R3`, which means "add the values in registers `R2` and `R3`, and store the result in `R1`".
  - **Assembler**: The assembler converts this mnemonic into the binary machine code as defined by the ISA.

**Summary**
- **ISA**: Defines the set of operations a processor can perform, including instruction formats, registers, and data types. It is an abstract specification that ensures software compatibility across different implementations of the same architecture.
- **ASM**: A low-level programming language that provides a human-readable way to write instructions that conform to the ISA. It is a practical tool for developers to write code that will be directly executed by the processor.

In short, the ISA is the specification, and assembly language is a practical means of expressing that specification in a way that is easier for humans to work with.



## 👉 Symmetric Multiprocessing (SMP) and Asymmetric Multiprocessing (AMP)




[Symmetric Multiprocessing (SMP) and Asymmetric Multiprocessing (AMP)]: https://www.acontis.com/en/symmetric-multiprocessing-and-asymmetric-multiprocessing.html
