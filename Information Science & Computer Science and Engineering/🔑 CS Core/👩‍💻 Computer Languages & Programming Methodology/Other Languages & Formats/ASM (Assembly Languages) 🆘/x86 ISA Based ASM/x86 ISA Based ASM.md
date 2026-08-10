# x86 ISA Based ASM

[TOC]



## Res
### Documentations
📂 [x86-64 Tour of Intel Manuals](http://x86asm.net/articles/x86-64-tour-of-intel-manuals/), MazeGen, 2007-10-04
📂 [X86 64 Register and Instruction Quick Start](https://wiki.cdot.senecacollege.ca/wiki/X86_64_Register_and_Instruction_Quick_Start)
📂 [x86 Assembly](https://en.wikibooks.org/wiki/X86_Assembly#Table_of_Contents)
📂 [Processor Architecture | Microsoft Docs - Windbg](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/processor-architecture)


### Related Topics
↗ [x86 Architecture Family (80x86, 8086 family)](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md)
↗ [8086 ASM (16 bit)](8086%20ASM%20(16%20bit).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/X86_assembly_language

x86 assembly language is the name for the family of assembly languages which provide some level of backward compatibility with CPUs back to the Intel 8008 microprocessor, which was launched in April 1972. It is used to produce object code for the x86 class of processors.

Regarded as a programming language, assembly is machine-specific and low-level. Like all assembly languages, x86 assembly uses mnemonics to represent fundamental CPU instructions, or machine code. Assembly languages are most often used for detailed and time-critical applications such as small real-time embedded systems, operating-system kernels, and device drivers, but can also be used for other applications. A compiler will sometimes produce assembly code as an intermediate step when translating a high-level program into machine code.


### x86 ASM Keyword


### x86 ASM Mnemonics and opcodes


### 🤔 x86 ASM Syntax: Intel Syntax & AT&T Syntax
There are AT&T syntax and Intel syntax. In Intel documents, it is usually in Intel syntax. With GNU toolchains on [Linux](https://www.systutorials.com/category/linux/ "Linux"), the default syntax used is usually the AT&T one.

The most significant difference between these 2 syntaxes is that AT&T and Intel syntax use the opposite order for source and destination operands. Intel syntax uses **“dest, source”** while the AT&T syntax uses **“source, dest”**. Note that instructions with more than one source operand, such as the enter instruction, do not have reversed order. For the representation of operands with the SIB or displacement, the formats are different. For example, the Intel syntax is `[rdi+0xa]` for `0xa(%rdi)` in AT&T syntax. For a list of notable differences, please check [AT&T Syntax versus Intel Syntax](http://www.sourceware.org/binutils/docs-2.12/as.info/i386-Syntax.html).


> 🔗 https://csit.kutztown.edu/~schwesin/fall20/csc235/x86-64_syntax.html

x86 (both 32- and 64-bit) has two alternative syntaxes available for it. Some assemblers can only work with one or the other, while a few can work with both.

This table summarizes the main differences between AT&T and Intel syntax:

|                  | AT&T                              | Intel                                       |
| ---------------- | --------------------------------- | ------------------------------------------- |
| Comments         | `//`                              | `;`                                         |
| Instructions     | Tagged with operand sizes: `addq` | Untagged `add`                              |
| Registers        | `%eax`,`%ebx`, etc.               | `eax`, `ebx`, etc.                          |
| Immediates       | $0x100                            | 0x100                                       |
| Indirect         | `(%eax)`                          | `[eax]`                                     |
| General indirect | `displacement(reg, reg, scale)`   | `[base + reg + reg * scale + displacement]` |

Note that in the generalized indirect format, the Intel syntax will computer `base + displacement` for you, as the opcodes really only allow a single immediate displacement. In the AT&T syntax, you have to do this yourself, using the result of the sum as the third value in the parenthesis.

The main difference between Intel and AT&T syntax is that AT&T makes the sizes of the instruction operands explicit by appending suffixes to the instruction name, whereas Intel leaves the size implicit.
#### Examples
> 🔗 https://imada.sdu.dk/u/kslarsen/dm546/Material/IntelnATT.htm

**Prefixes**
In Intel syntax there are no register prefixes or immed prefixes. In AT&T however registers are prefixed with a '%' and immed's are prefixed with a '$'. Intel syntax hexadecimal or binary immed data are suffixed with 'h' and 'b' respectively. Also if the first hexadecimal digit is a letter then the value is prefixed by a '0'.

|                                                                              |                                                                                   |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Intex Syntax<br><br>mov     eax,1<br><br>mov     ebx,0ffh<br><br>int     80h | AT&T Syntax<br><br>movl    $1,%eax<br><br>movl    $0xff,%ebx<br><br>int     $0x80 |

**Direction of Operands**
The direction of the operands in Intel syntax is opposite from that of AT&T syntax. In Intel syntax the first operand is the destination, and the second operand is the source whereas in AT&T syntax the first operand is the source and the second operand is the destination. The advantage of AT&T syntax in this situation is obvious. We read from left to right, we write from left to right, so this way is only natural.

|                                                                  |                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| Intex Syntax<br><br>instr   dest,source<br><br>mov     eax,[ecx] | AT&T Syntax<br><br>instr   source,dest<br><br>movl    (%ecx),%eax |

**Memory Operands**
Memory operands as seen above are different also. In Intel syntax the base register is enclosed in '[' and ']' whereas in AT&T syntax it is enclosed in '(' and ')'. 

|   |   |
|---|---|
|Intex Syntax<br><br>mov     eax,[ebx]<br><br>mov     eax,[ebx+3]|AT&T Syntax<br><br>movl    (%ebx),%eax<br><br>movl    3(%ebx),%eax|

The AT&T form for instructions involving complex operations is very obscure compared to Intel syntax. The Intel syntax form of these is segreg:[base+index*scale+disp]. The AT&T syntax form is %segreg:disp(base,index,scale).

Index/scale/disp/segreg are all optional and can simply be left out. Scale, if not specified and index is specified, defaults to 1. Segreg depends on the instruction and whether the app is being run in real mode or pmode. In real mode it depends on the instruction whereas in pmode its unnecessary. Immediate data used should not '$' prefixed in AT&T when used for scale/disp.

|   |   |
|---|---|
|Intel Syntax<br><br>instr   foo,segreg:[base+index*scale+disp]<br><br>mov     eax,[ebx+20h]<br><br>add     eax,[ebx+ecx*2h<br><br>lea     eax,[ebx+ecx]<br><br>sub     eax,[ebx+ecx*4h-20h]|AT&T Syntax<br><br>instr   %segreg:disp(base,index,scale),foo<br><br>movl    0x20(%ebx),%eax<br><br>addl    (%ebx,%ecx,0x2),%eax<br><br>leal    (%ebx,%ecx),%eax<br><br>subl    -0x20(%ebx,%ecx,0x4),%eax|

As you can see, AT&T is very obscure. [base+index*scale+disp] makes more sense at a glance than disp(base,index,scale).

**Suffixes**
As you may have noticed, the AT&T syntax mnemonics have a suffix. The significance of this suffix is that of operand size. 'l' is for long, 'w' is for word, and 'b' is for byte. Intel syntax has similar directives for use with memory operands, i.e. byte ptr, word ptr, dword ptr. "dword" of course corresponding to "long". This is similar to type casting in C but it doesnt seem to be necessary since the size of registers used is the assumed datatype.

|                                                                                                                   |                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Intel Syntax<br><br>mov     al,bl<br><br>mov     ax,bx<br><br>mov     eax,ebx<br><br>mov     eax, dword ptr [ebx] | AT&T Syntax<br><br>movb    %bl,%al<br><br>movw    %bx,%ax<br><br>movl    %ebx,%eax<br><br>movl    (%ebx),%eax |
#### Assemblers & Syntax Flavor Implementation
 > 🔗 https://en.wikipedia.org/wiki/X86_assembly_language#Syntax
 > ↗ [Assemblers](../../../🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Assemblers/Assemblers.md)

Many x86 assemblers use Intel syntax, including FASM, MASM, NASM, TASM, and YASM. GAS, which originally used AT&T syntax, has supported both syntaxes since version 2.10 via the `.intel_syntax` directive. A quirk in the AT&T syntax for x86 is that x87 operands are reversed, an inherited bug from the original AT&T assembler.
- The AT&T syntax is nearly universal to all other architectures (retaining the same mov order); it was originally a syntax for `PDP-11` assembly. 
- The Intel syntax is specific to the x86 architecture, and is the one used in the x86 platform's documentation. The Intel 8080, which predates the x86, also uses the "destination-first" order for mov.


### 🧐 x86 ISA Related Knowledge
↗ [x86 Architecture Family (80x86, 8086 family) /⭐ Basic Properties of the Architecture](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md#⭐️%20Basic%20Properties%20of%20the%20Architecture)

- Registers
	- ![](../../../../../../Assets/Pics/x86%20registers%20map.png)
- Addressing
- Execution Modes
- Instruction Types & Features
- program flow
- calling conventions



## Ref
[汇编中NEG和NOT的区别（汇编初学者简单笔记）| CSDN]: https://blog.csdn.net/Cassie_zkq/article/details/80384600

NEG：把操作数按位取反加一 （可以用来求一个数的相反数）
NOT：把操作数按位取反
很明显可以看出区别：NEG比NOT指令多了一步“加一”操作

[汇编 lea指令和mov指令 | CSDN]: https://blog.csdn.net/fengshh2301/article/details/53327120

**lea指令**
load effective address, 加载有效地址，可以将有效地址传送到指定的的寄存器。指令形式是从存储器读数据到寄存器, 效果是将存储器的有效地址写入到目的操作数, 简单说, 就是C语言中的”&”.

**mov指令**
在CPU内或CPU和存储器之间传送字或字节，它传送的信息可以从寄存器到寄存器，立即数到寄存器，立即数到存储单元，从存储单元到寄存器，从寄存器到存储单元，从寄存器或存储单元到除CS外的段寄存器(注意立即数不能直接送段寄存器)，从段寄存器到寄存器或存储单元。 
但是注意 
（1） MOV指令中的源操作数绝对不能是立即数和代码段CS寄存器； 
（2） MOV指令中绝对不允许在两个存储单元之间直接传送数据； 
（3） MOV指令中绝对不允许在两个段寄存器之间直接传送数据； 
（4） MOV指令不会影响标志位

**使用[]区别**
第二操作数加不加中括号[]的区别就是:

lea对变量没有影响是取地址,对寄存器来说加[]时取值,第二操作数不加[]非法

mov对变量来说没有影响是取值,对寄存器来说是加[]时取地址,第二操作数不加[]是取值
