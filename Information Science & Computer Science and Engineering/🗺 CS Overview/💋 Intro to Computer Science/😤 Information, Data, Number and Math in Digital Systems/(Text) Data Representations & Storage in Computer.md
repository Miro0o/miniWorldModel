# (Text) Data Representations & Storage in Computer

[TOC]



## Res
### Related Topics
Go to ↗ [von Neumann Arch /Memory](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md) for more possible info.
And maybe ↗ [8086 ASM (16 bit)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/8086%20ASM%20(16%20bit).md).

↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [Address Space & Memory Layout](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
↗ [Memory Access & Addressing](../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)



## (Text) Data Representation in Computer
### Number Representation
Computer is designed to use binary numeral system in its mathematical model and hardware implementation, hence this influences some of its number representations in software designing, and other aspects in CS you might see aw well.
- ↗ [Boolean Algebra](../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Lattice%20(Group%20Theory)%20&%20Lattice-Like%20Algebraic%20Structure/Boolean%20Algebra/Boolean%20Algebra.md)
- ↗ [Encodings /🧮 Numeral System & Number Encoding](Encodings.md#🧮%20Numeral%20System%20&%20Number%20Encoding)

This binary digits representation of numbers originally stems from information theory, and extends itself through computer /information systems to every scenarios involving the measurements of information, as the advance in human's information industry. 

Usually, a group of 8 binary numbers consist of a byte (8-digit binary number), with each binary numbers called a bit (1-digit binary number). The binary value of a bit corresponds with two states in a digital circuit: "on" and "off", or "high" and "low", or any other mutual-exclusive two states system.

Bit, Byte, Nibble, and Word
![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%209.50.38%20PM.png)
![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%209.50.45%20PM.png)


### Data Types & Byte Length Supported by Computers
**A data type is a set of values and a set of operations on those values.** The exact length of these values supported by a specific computer is implemented through programming languages, but actually decided by the word-length of the computer, i.e. the hardware, rather than software, language, or other abstractions. (?) That being said, the length of those data types can still be altered in the software as well, by another level of abstraction.

Data type is the core of program, while the program is the core of computing. Hence, one can also say that data type is the core of computing. It represents a higher level of abstraction of the computer, implying the process of how a computer is doing computing.

> 🔗 https://www.ibm.com/docs/en/ibm-mq/7.5?topic=platforms-standard-data-types

![](../../../../Assets/Pics/Screenshot%202023-03-28%20at%204.51.18%20PM.png)

![](../../../../Assets/Pics/Screenshot%202023-03-28%20at%204.51.00%20PM.png)

![](../../../../Assets/Pics/Screenshot%202023-03-28%20at%204.51.45%20PM.png)
#### Unsigned Binary Integer
##### Excess-M Representation
![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.06.29%20PM.png)
#### Signed Binary Integer
##### Signed Magnitude
![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.02.36%20PM.png)
##### 1's Complement 
![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.02.59%20PM.png)
##### 2's Complement
![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.03.07%20PM.png)
#### Floating Number
↗ [Encodings](Encodings.md)



## Data Storage
> Also at ↗ [von Neumann Based Microarchitecture /Memory](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)


### Data Storage Abstraction: Address Space
↗ [Address Space & Memory Layout](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)


### Data Storage in Memory: Byte Order/Endianness
Little Endian 🆚 Big Endian

> These two terms, little and big endian, are from the book Gulliver’s Travels, in which the Lilliputians (the tiny people) were divided into two camps: those who ate their eggs by opening the “big” end (big endians) and those who ate their eggs by opening the “little” end (little endians).

> Most UNIX machines are big endian, whereas most PCs are little endian machines. Most newer RISC architectures are also big endian.
> 
> It is also worth noting that some CPUs can handle both little and big-endian

![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.23.42%20PM.png)

![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.26.04%20PM.png)


### ⭐️ Data Storage in CPU: Stacks 🆚 Registers
#### 1️⃣ Stack Architecture
Stack architectures use a stack to execute instructions, and the operands are (implicitly) found on top of the stack. 

**pros**
Even though stack-based machines have good code density and a simple model for the evaluation of expressions 
**cons**
a stack cannot be accessed randomly, which makes it difficult to generate efficient code. In addition, the stack becomes a bottleneck during execution.

> ↗ [ISA Instruction Formats](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/📌%20ISA%20Instruction%20Basics/ISA%20Instruction%20Formats.md) - reverse polish notation

![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.31.50%20PM.png)
#### 2️⃣ Accumulator Architecture
Accumulator architectures such as MARIE, with one operand implicitly in the accumulator, minimize the internal complexity of the machine and allow for very short instructions. But because the accumulator is only temporary storage, memory traffic is very high.

![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.32.32%20PM.png)
#### 3️⃣ GPR (General Purpose Register) Architecture
> ❗❗ Two characters concern GPR metrics the most: instruction length & instruction address modes.
> 
> ↗ [Instruction Formats /Instruction length](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/📌%20ISA%20Instruction%20Basics/ISA%20Instruction%20Formats.md)
> ↗ [Memory /Memory Access](../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

General-purpose register architectures, which use sets of general-purpose registers, are the most widely accepted models for machine architectures today. 

**pros**
These register sets are faster than memory and easy for compilers to deal with, and they can be used very effectively and efficiently. In addition, hardware prices have decreased significantly, making it possible to add a large number of registers at a minimal cost.

**cons**
However, because all operands must be named, using registers results in longer instructions, causing longer fetch and decode times. (A very important goal for ISA designers is short instructions.) Designers choosing an ISA must decide which will work best in a particular environment and examine the trade-offs carefully.

> If memory access is fast, a stack-based design may be a good idea; if memory is slow, it is often better to use registers. These are the reasons most computers over the past 10 years have been general-register based.

![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.32.43%20PM.png)

![](../../../../Assets/Pics/Screenshot%202023-06-24%20at%2010.32.53%20PM.png)
##### Memory-Memory
Memory-memory architectures may have two or three operands in memory, allowing an instruction to perform an operation without requiring any operand to be in a register.
##### Memory-Register
Register-memory architectures require a mix, where at least one operand is in a register and one is in memory.
##### Load-Store (Register-Register)
Load-store architectures require data to be moved into registers before any operations on those data are performed.



## Other Data Representations Related Topics
↗ [Encodings](Encodings.md)
↗ [Computer Network /Error Control](../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/Error%20Control%20&%20EDAC/Error%20Control%20&%20EDAC.md)

↗ [Data Structures](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Data%20Structures.md)

↗ [File Types & File Formats](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20Types%20&%20File%20Formats.md)

↗ [Cryptology & Secure Communication](../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
↗ [Data Security](../../../CyberSecurity/Data%20Security/Data%20Security.md)



## Ref
[👍 字节序探析：大端与小端的比较 | 阮一峰的网络日志]: https://www.ruanyifeng.com/blog/2022/06/endianness-analysis.html
综上所述，大端序和小端序各自的优势如下:如果需要逐位运算，或者需要到从个位数开始运算，都是小端序占优势。反之，如果运算只涉及到高位，或者数据的可读性比较重要，则是大端序占优势。

[👍 On Endianness]: https://www.technicalsourcery.net/posts/on-endianness/
