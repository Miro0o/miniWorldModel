# Register

[TOC]



## Res
### Related Topics
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)

↗ [ASM (Assembly Languages)](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
- ↗ [8086 ASM (16 bit)](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/8086%20ASM%20(16%20bit).md)

↗ [Memory Access & Addressing](../../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)



## Intro
> The concept of register is shared both in real CPU design and ISA design. Usually as a software engineer (in general those who don't involve in CPU design) when referring to register we actually concerns only registers implemented in a given ISA, e.g. registers used by x86_64 or 8086. This is because in facts different CPU implementing the same ISA has different sets of registers physically for purposes like performance improvements. These variations in physical CPU design are usually invisible to upper users like software engineer. 
> 
> More info is available here ↗ [ASM /FAQ /👉 How many registers actually are there in a x64 CPU?](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/FAQ.md#👉%20How%20many%20registers%20actually%20are%20there%20in%20a%20x64%20CPU?)

D flip-flops can be used to implement registers. One D flip-flop is equivalent to a 1-bit register, so a collection of D flip-flops is necessary to store multi-bit values. For example, to build a 16-bit register, we need to connect 16 D flip-flops together. These collections of flip-flops must be clocked to work in unison. At each pulse of the clock, input enters the register and cannot be changed (and thus is stored) until the clock pulses again.

Data processing on a computer is usually done on fixed-size binary words stored in registers. Therefore, most computers have registers of a certain size. Common sizes include 16, 32, and 64 bits. The number of registers in a machine varies from architecture to architecture, but is typically a power of 2, with 16, 32, and 64 being most common. Registers contain data, addresses, or control information. Some registers are specified as “special purpose” and may contain only data, only addresses, or only control information. Other registers are more generic and may hold data, addresses, and control information at various times.

A **processor register** is a quickly accessible location available to a computer's [processor](https://en.wikipedia.org/wiki/Processor_(computing) "Processor (computing)"). Registers usually consist of a small amount of fast [storage](https://en.wikipedia.org/wiki/Computer_storage "Computer storage"), although some registers have specific hardware functions, and may be read-only or write-only. In [computer architecture](https://en.wikipedia.org/wiki/Computer_architecture "Computer architecture"), registers are typically addressed by mechanisms other than [main memory](https://en.wikipedia.org/wiki/Main_memory "Main memory"), but may in some cases be assigned a [memory address](https://en.wikipedia.org/wiki/Memory_address "Memory address") e.g. DEC [PDP-10](https://en.wikipedia.org/wiki/PDP-10 "PDP-10"), [ICT 1900](https://en.wikipedia.org/wiki/ICT_1900_series "ICT 1900 series").

Almost all computers, whether [load/store architecture](https://en.wikipedia.org/wiki/Load/store_architecture "Load/store architecture") or not, load items of data from a larger memory into registers where they are used for [arithmetic operations](https://en.wikipedia.org/wiki/Arithmetic_operation "Arithmetic operation"), [bitwise operations](https://en.wikipedia.org/wiki/Bitwise_operation), and other operations, and are manipulated or tested by [machine instructions](https://en.wikipedia.org/wiki/Machine_instruction "Machine instruction"). Manipulated items are then often stored back to main memory, either by the same instruction or by a subsequent one. Modern processors use either [static](https://en.wikipedia.org/wiki/Static_random-access_memory "Static random-access memory") or [dynamic](https://en.wikipedia.org/wiki/Dynamic_random-access_memory "Dynamic random-access memory") [RAM](https://en.wikipedia.org/wiki/Random-access_memory "Random-access memory") as main memory, with the latter usually accessed via one or more [cache levels](https://en.wikipedia.org/wiki/CPU_cache#Multi-level_caches "CPU cache").

Processor registers are normally at the top of the [memory hierarchy](https://en.wikipedia.org/wiki/Memory_hierarchy "Memory hierarchy"), and provide the fastest way to access data. The term normally refers only to the group of registers that are directly encoded as part of an instruction, as defined by the [instruction set](https://en.wikipedia.org/wiki/Instruction_set "Instruction set"). However, modern high-performance CPUs often have duplicates of these "architectural registers" in order to improve performance via [register renaming](https://en.wikipedia.org/wiki/Register_renaming "Register renaming"), allowing [parallel](https://en.wikipedia.org/wiki/Instruction-level_parallelism "Instruction-level parallelism") and [speculative execution](https://en.wikipedia.org/wiki/Speculative_execution "Speculative execution"). Modern [x86](https://en.wikipedia.org/wiki/X86 "X86")design acquired these techniques around 1995 with the releases of [Pentium Pro](https://en.wikipedia.org/wiki/Pentium_Pro "Pentium Pro"), [Cyrix 6x86](https://en.wikipedia.org/wiki/Cyrix_6x86 "Cyrix 6x86"), [Nx586](https://en.wikipedia.org/wiki/Nx586 "Nx586"), and [AMD K5](https://en.wikipedia.org/wiki/AMD_K5 "AMD K5").

When a [computer program](https://en.wikipedia.org/wiki/Computer_program "Computer program") accesses the same data repeatedly, this is called [locality of reference](https://en.wikipedia.org/wiki/Locality_of_reference "Locality of reference"). Holding frequently used values in registers can be critical to a program's performance. [Register allocation](https://en.wikipedia.org/wiki/Register_allocation "Register allocation") is performed either by a [compiler](https://en.wikipedia.org/wiki/Compiler "Compiler") in the [code generation](https://en.wikipedia.org/wiki/Code_generation_(compiler) "Code generation (compiler)") phase, or manually by an [assembly language](https://en.wikipedia.org/wiki/Assembly_language "Assembly language")programmer.


### Processor Registers Overview
🔗 https://en.wikipedia.org/wiki/Processor_register#Examples

![](../../../../../../../../../Assets/Pics/x86%20registers%20map.png)
↗ [8086 ASM /🫙 Registers](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/8086%20ASM%20(16%20bit).md#🫙%20Registers)


### Word /Word Length & Register (字长和寄存器)



## Registers Taxonomy
> ↗ https://en.wikipedia.org/wiki/Processor_register#Types

In some architectures (such as [SPARC](https://en.wikipedia.org/wiki/SPARC "SPARC") and [MIPS](https://en.wikipedia.org/wiki/MIPS_architecture "MIPS architecture")), the first or last register in the integer [register file](https://en.wikipedia.org/wiki/Register_file "Register file") is a _pseudo-register_ in that it is hardwired to always return zero when read (mostly to simplify indexing modes), and it cannot be overwritten. In [Alpha](https://en.wikipedia.org/wiki/DEC_Alpha "DEC Alpha"), this is also done for the floating-point register file. As a result of this, register files are commonly quoted as having one register more than how many of them are actually usable; for example, 32 registers are quoted when only 31 of them fit within the above definition of a register.


### 1️⃣ User-Accessible Registers
- _**Data registers**_ can hold [numeric data values](https://en.wikipedia.org/wiki/Data_(computer_science) "Data (computer science)") such as [integer](https://en.wikipedia.org/wiki/Integer_(computer_science) "Integer (computer science)") and, in some architectures, floating-point values, as well as [characters](https://en.wikipedia.org/wiki/Character_(computing) "Character (computing)"), small [bit arrays](https://en.wikipedia.org/wiki/Bit_array "Bit array") and other data. In some older architectures, such as the [IBM 704](https://en.wikipedia.org/wiki/IBM_704 "IBM 704"), the [IBM 709](https://en.wikipedia.org/wiki/IBM_709 "IBM 709") and successors, the [PDP-1](https://en.wikipedia.org/wiki/PDP-1 "PDP-1"), the [PDP-4](https://en.wikipedia.org/wiki/PDP-4 "PDP-4")/[PDP-7](https://en.wikipedia.org/wiki/PDP-7 "PDP-7")/[PDP-9](https://en.wikipedia.org/wiki/PDP-9 "PDP-9")/[PDP-15](https://en.wikipedia.org/wiki/PDP-15 "PDP-15"), the [PDP-5](https://en.wikipedia.org/wiki/PDP-5 "PDP-5")/[PDP-8](https://en.wikipedia.org/wiki/PDP-8 "PDP-8"), and the [HP 2100](https://en.wikipedia.org/wiki/HP_2100 "HP 2100"), a special data register known as the [accumulator](https://en.wikipedia.org/wiki/Accumulator_(computing) "Accumulator (computing)") is used implicitly for many operations.
- _**Address registers**_ hold [addresses](https://en.wikipedia.org/wiki/Memory_address "Memory address") and are used by instructions that indirectly access [primary memory](https://en.wikipedia.org/wiki/Primary_memory "Primary memory").
    - Some processors contain registers that may only be used to hold an _address_ or only to hold _numeric values_ (in some cases used as an [index register](https://en.wikipedia.org/wiki/Index_register "Index register") whose value is added as an offset from some address); others allow registers to hold either kind of quantity. A wide variety of possible [addressing modes](https://en.wikipedia.org/wiki/Addressing_mode "Addressing mode"), used to specify the effective address of an operand, exist.
    - The _**[stack pointer](https://en.wikipedia.org/wiki/Stack_pointer "Stack pointer")**_ is used to manage the [run-time stack](https://en.wikipedia.org/wiki/Run-time_stack "Run-time stack"). Rarely, other [data stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type) "Stack (abstract data type)") are addressed by dedicated address registers (see [stack machine](https://en.wikipedia.org/wiki/Stack_machine "Stack machine")).
- _**General-purpose registers**_ (GPRs) can store both data and addresses, i.e., they are combined data/address registers; in some architectures, the [register file](https://en.wikipedia.org/wiki/Register_file "Register file") is _unified_ so that the GPRs can store [floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_number "Floating-point number") as well.
- _**[Status registers](https://en.wikipedia.org/wiki/Status_register "Status register")**_ hold [truth values](https://en.wikipedia.org/wiki/Truth_value "Truth value") often used to determine whether some instruction should or should not be executed.
- _**Floating-point registers**_ (FPRs) store [floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_number "Floating-point number") in many architectures.
- _**[Constant](https://en.wikipedia.org/wiki/Constant_(computer_programming) "Constant (computer programming)") registers**_ hold read-only values such as zero, one, or [pi](https://en.wikipedia.org/wiki/Pi "Pi").
- _**Vector registers**_ hold data for [vector processing](https://en.wikipedia.org/wiki/Vector_processing "Vector processing") done by [SIMD](https://en.wikipedia.org/wiki/Single_instruction,_multiple_data "Single instruction, multiple data") instructions (Single Instruction, Multiple Data).
- _**Special-purpose registers**_ (SPRs) hold some elements of the [program state](https://en.wikipedia.org/wiki/Program_state "Program state"); they usually include the [program counter](https://en.wikipedia.org/wiki/Program_counter "Program counter"), also called the instruction pointer, and the [status register](https://en.wikipedia.org/wiki/Status_register "Status register"); the program counter and status register might be combined in a [program status word](https://en.wikipedia.org/wiki/Program_status_word "Program status word") (PSW) register. The aforementioned stack pointer is sometimes also included in this group. Embedded microprocessors can also have registers corresponding to specialized hardware elements.
- In some architectures, _**[model-specific registers](https://en.wikipedia.org/wiki/Model-specific_register "Model-specific register")**_ (also called _machine-specific registers_) store data and settings related to the processor itself. Because their meanings are attached to the design of a specific processor, they cannot be expected to remain standard between processor generations.
- _**[Memory type range registers](https://en.wikipedia.org/wiki/Memory_type_range_register "Memory type range register")**_ (MTRRs)


### 2️⃣ Internal Registers
- The _**[instruction register](https://en.wikipedia.org/wiki/Instruction_register "Instruction register")**_ holds the instruction currently being executed.
- Registers related to fetching information from [RAM](https://en.wikipedia.org/wiki/Random-access_memory "Random-access memory"), a collection of storage registers located on separate chips from the CPU:
    - _**[Memory buffer register](https://en.wikipedia.org/wiki/Memory_buffer_register "Memory buffer register")**_ (_MBR_), also known as _memory data register_ (_MDR_)
    - _**[Memory address register](https://en.wikipedia.org/wiki/Memory_address_register "Memory address register")**_ (_MAR_)


### 3️⃣ Architectural Registers
_**Architectural registers**_ are the registers visible to software and are defined by an architecture. They may not correspond to the physical hardware if [register renaming](https://en.wikipedia.org/wiki/Register_renaming "Register renaming") is being performed by the underlying hardware.


### 4️⃣ Hardware Registers
**[Hardware registers](https://en.wikipedia.org/wiki/Hardware_register "Hardware register")** are similar, but occur outside CPUs.



## MSR (Model Specific Registers)
> 🔗 https://blog.packagecloud.io/the-definitive-guide-to-linux-system-calls/

Model Specific Registers (also known as MSRs) are control registers that have a specific purpose to control certain features of the CPU. The CPU documentation lists the addresses of each of the MSRs.

You can use the CPU instructions `rdmsr` to `wrmsr` to read and write MSRs, respectively.

There are also command line tools which allow you to read and write MSRs, but doing this is _not recommended_ as changing these values (especially while a system is running) is dangerous unless you are really careful.

If you don’t mind potentially destabilizing your system or irreversibly corrupting your data, you can read and write MSRs by installing `msr-tools` and loading the `msr` kernel module:

```
% sudo apt-get install msr-tools
% sudo modprobe msr
% sudo rdmsr
```



## Ref
[Processor register | Wikipedia]: https://en.wikipedia.org/wiki/Processor_register
