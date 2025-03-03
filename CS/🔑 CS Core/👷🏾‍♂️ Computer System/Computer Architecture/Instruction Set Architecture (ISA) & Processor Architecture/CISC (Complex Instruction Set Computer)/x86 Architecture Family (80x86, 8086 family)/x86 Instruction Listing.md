# x86 Instruction Encoding

[TOC]



## Res
### Related Topics
↗ [x86 ISA Based ASM](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/x86%20ISA%20Based%20ASM.md)


### Reference Documents for x86-64 Instruction Encoding
Here is a list of references and useful documents I will refer to in this post and you can further check later too to encode more instructions.
- x86-64 (and x86) ISA Reference from Intel and AMD’s [x86-64 (and x86) ISA Reference](https://www.systutorials.com/3024/x86-64-isa-assembly-references/) are the authoritative [document](https://www.systutorials.com/tag/document/ "document") here. Especially,
    - the [Intel 64 and IA-32 Architectures Software Developer’s Manuals](https://www.systutorials.com/go/intel-x86-64-reference-manual/)‘ “CHAPTER 2 INSTRUCTION FORMAT” is a good starting point. There are also references for each instruction.
    - the [Intel 64 and IA-32 Architectures Software Developer’s Manuals](https://www.systutorials.com/go/intel-x86-64-reference-manual/)‘ “APPENDIX B INSTRUCTION FORMATS AND ENCODINGS” is a good reference.
- [x86-64 Instruction Encoding](http://wiki.osdev.org/X86-64_Instruction_Encoding) is another very good page from OSDev as a quick reference.


### Tools
[GNU assembler `as`](https://www.systutorials.com/docs/linux/man/1-as/)

[`objdump` tool](https://www.systutorials.com/docs/linux/man/1-objdump/)



## Intro
### Overview: x86 Instruction Types & Features
> 🔗 https://en.wikipedia.org/wiki/X86_assembly_language#Instruction_types

In general, the features of the modern x86 instruction set are:
1. A compact encoding:
	1. Variable length and alignment independent (encoded as little endian, as is all data in the x86 architecture)
	2. Mainly one-address and two-address instructions, that is to say, the first operand is also the destination.
	3. Memory operands as both source and destination are supported (frequently used to read/write stack elements addressed using small immediate offsets).
	4. Both general and implicit register usage; although all seven (counting ebp) general registers in 32-bit mode, and all fifteen (counting rbp) general registers in 64-bit mode, can be freely used as accumulators or for addressing, most of them are also implicitly used by certain (more or less) special instructions; affected registers must therefore be temporarily preserved (normally stacked), if active during such instruction sequences.
2. Produces conditional flags implicitly through most integer ALU instructions.
3. Supports various addressing modes including immediate, offset, and scaled index but not PC-relative, except jumps (introduced as an improvement in the x86-64 architecture).
4. Includes floating point to a stack of registers.
5. Contains special support for atomic read-modify-write instructions (xchg, cmpxchg/cmpxchg8b, xadd, and integer instructions which combine with the lock prefix)
6. SIMD instructions (instructions which perform parallel simultaneous single instructions on many operands encoded in adjacent cells of wider registers).


### x86 ASM Syntax: AT&T-Flavor and Intel-Flavor
↗ [x86 ISA Based ASM](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/x86%20ISA%20Based%20ASM.md)


### x86 ISA Instruction Format
![](../../../../../../../Assets/Pics/Pasted%20image%2020230321195343.png)
<small> x86指令格式</small>



## 🧻 x86 Instruction Listings
> 🔗 https://en.wikipedia.org/wiki/X86_instruction_listings#

The x86 instruction set refers to the set of instructions that x86-compatible microprocessors support. The instructions are usually part of an executable program, often stored as a computer file and executed on the processor.

The x86 instruction set has been extended several times, introducing wider registers and datatypes as well as new functionality.


### x86 Integer Instructions


### x87 Floating-Point Instructions


### SIMD Instructions


### Cryptographic Instructions


### Virtualization Instructions


### Other Instructions



## Ref
[x86 指令格式]: https://www.cnblogs.com/QKSword/p/8735119.html

[ Beginners’ Guide to x86-64 Instruction Encoding]: https://www.systutorials.com/beginners-guide-x86-64-instruction-encoding/

[x86 Instruction Format Reference]: http://www.c-jump.com/CIS77/CPU/x86/X77_0030_encoding_format.htm

