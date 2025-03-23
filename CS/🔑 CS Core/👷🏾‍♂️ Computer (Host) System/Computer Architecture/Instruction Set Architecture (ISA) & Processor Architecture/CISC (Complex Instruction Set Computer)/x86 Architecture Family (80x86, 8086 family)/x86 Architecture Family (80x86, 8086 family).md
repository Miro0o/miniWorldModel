# x86 Architecture Family (80x86, 8086 family)

[TOC]



## Res
### Related Topics
↗ [x86 ISA Based ASM](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/x86%20ISA%20Based%20ASM.md)


### Documentations
📂 https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html
Intel® 64 and IA-32 Architectures Software Developer Manuals

http://x86asm.net/index.html
Focused mainly on x86 architecture, including x86-64 architecture, instruction encodings, reverse code engineering, and system programming in Windows and Linux OS.

**I'm just so interested in this - where can I learn more?**
For more information on this material, try some of these links:
[x86.org](http://www.x86.org/)  
[Intel documentation for developers](http://developer.intel.com/drg/mmx/Manuals/prm/PRM.HTM)
[mmx.com - Intel's MMX site](http://mmx.com/)  
[Intel's latest developer's literature](http://developer.intel.com/design/litcenter/index.htm)

**Who should I hold responsible for these web pages?**
[Eugene Madlangbayan](mailto:shdspawn@wam.umd.edu) - Q&A section, printing out tons of Intel documents  
[Shane Shaffer](mailto:kingpong@wam.umd.edu) - The MMX material, doing the web pages, wasting time making a dancing Pentium graphic  
[Randall Ward](mailto:randallw@erols.com) - The history/development stuff up to MMX



## Intro
> 🔗 https://en.wikipedia.org/wiki/X86

**x86** (also known as **80x86** or the **8086 family**) is a family of [complex instruction set computer](https://en.wikipedia.org/wiki/Complex_instruction_set_computer "Complex instruction set computer") (CISC) [instruction set architectures](https://en.wikipedia.org/wiki/Instruction_set_architecture "Instruction set architecture") initially developed by [Intel](https://en.wikipedia.org/wiki/Intel "Intel")based on the [Intel 8086](https://en.wikipedia.org/wiki/Intel_8086 "Intel 8086") [microprocessor](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor") and its [8088](https://en.wikipedia.org/wiki/Intel_8088 "Intel 8088")variant. The 8086 was introduced in 1978 as a fully [16-bit](https://en.wikipedia.org/wiki/16-bit_computing "16-bit computing")extension of Intel's [8-bit](https://en.wikipedia.org/wiki/8-bit_computing "8-bit computing") [8080](https://en.wikipedia.org/wiki/Intel_8080 "Intel 8080") microprocessor, with [memory segmentation](https://en.wikipedia.org/wiki/X86_memory_segmentation "X86 memory segmentation") as a solution for addressing more memory than can be covered by a plain 16-bit address. The term "x86" came into being because the names of several successors to Intel's 8086 processor end in "86", including the [80186](https://en.wikipedia.org/wiki/Intel_80186 "Intel 80186"), [80286](https://en.wikipedia.org/wiki/Intel_80286 "Intel 80286"), [80386](https://en.wikipedia.org/wiki/Intel_80386 "Intel 80386") and [80486](https://en.wikipedia.org/wiki/Intel_80486 "Intel 80486")processors. Colloquially, their names were "186", "286", "386" and "486".

The term is not synonymous with [IBM PC compatibility](https://en.wikipedia.org/wiki/IBM_PC_compatible "IBM PC compatible"), as this implies a multitude of other [computer hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware"). [Embedded systems](https://en.wikipedia.org/wiki/Embedded_system "Embedded system") and general-purpose computers used x86 chips [before the PC-compatible market started](https://en.wikipedia.org/wiki/Influence_of_the_IBM_PC_on_the_personal_computer_market#Before_the_IBM_PC's_introduction "Influence of the IBM PC on the personal computer market"), some of them before the [IBM PC](https://en.wikipedia.org/wiki/IBM_PC "IBM PC") (1981) debut.

As of June 2022, most [desktop](https://en.wikipedia.org/wiki/Desktop_computer "Desktop computer") and [laptop](https://en.wikipedia.org/wiki/Laptop "Laptop") computers sold are based on the x86 architecture family, while mobile categories such as [smartphones](https://en.wikipedia.org/wiki/Smartphone "Smartphone") or [tablets](https://en.wikipedia.org/wiki/Tablet_computer "Tablet computer") are dominated by [ARM](https://en.wikipedia.org/wiki/ARM_architecture "ARM architecture"). At the high end, x86 continues to dominate computation-intensive [workstation](https://en.wikipedia.org/wiki/Workstation "Workstation") and [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing "Cloud computing") segments. The fastest supercomputer in the [TOP500](https://en.wikipedia.org/wiki/TOP500 "TOP500") list for June 2022 was the first exascale system, [Frontier](https://en.wikipedia.org/wiki/Frontier_(supercomputer) "Frontier (supercomputer)"), built using [AMD Epyc](https://en.wikipedia.org/wiki/AMD_Epyc "AMD Epyc") CPUs based on the x86 ISA; it broke the 1 [exaFLOPS](https://en.wikipedia.org/wiki/FLOPS "FLOPS") barrier in May 2022.


### 📜 History of x86 Family
↗ [Development History of ISA /History of x86 Architecture](../../📌%20ISA%20Basics/Development%20History%20of%20ISA.md#History%20of%20x86%20Architecture)



## ⭐️ Basic Properties of the Architecture
> 🔗 https://en.wikipedia.org/wiki/X86#Basic_properties_of_the_architecture


### Floating Point and SIMD


### x86/x64 Addressing Mode: Segmented Addressing
> ↗ [Memory Access & Addressing](../../../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)
> ↗ [8086 ASM (16 bit) /⛸️ Data Access](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/8086%20ASM%20(16%20bit).md#⛸️%20Data%20Access)


### 🌀 x86/x64 Registers
> ↗ [Register](../../../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/📌%20Basic%20CPU%20Components/Register.md)
> ↗ [8086 ASM (16 bit) /🫙 Registers](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/8086%20ASM%20(16%20bit).md#🫙%20Registers)

![](../../../../../../../Assets/Pics/x86%20registers%20map.png)
##### EFLAGS & RFLAGS
![](../../../../../../../Assets/Pics/Pasted%20image%2020240907221609.png)

> 🤖 Contents below are AI-generated

**RFLAGS vs EFLAGS**
- **RFLAGS vs. EFLAGS**: In a 64-bit environment, the actual register used is **RFLAGS**, which is 64 bits wide. ==However, only the lower 32 bits are actively used for the condition flags, and the upper 32 bits are generally reserved and unused.==
- **Naming in GDB**: GDB often refers to the flags register as **EFLAGS** regardless of whether the program is 32-bit or 64-bit, because the 32-bit portion of the **RFLAGS** register holds the same set of flags as in the 32-bit environment.
- **No Functional Difference**: Even though it's labeled as **EFLAGS**, you're still inspecting the 32-bit portion of the **RFLAGS** register in a 64-bit program. The functionality and the bits used (for flags like zero flag, carry flag, etc.) are identical.

**Why GDB Labels RFLAGS as EFLAGS**
- **Historical Naming**: The register was originally called **EFLAGS** in 32-bit systems. Since only the lower 32 bits are actively used for the condition flags, many debugging tools continue to use the term **EFLAGS**, even when dealing with 64-bit programs.
- **Simplification**: For consistency, the same naming is retained to avoid confusion, as the lower 32 bits in both **RFLAGS** (64-bit) and **EFLAGS** (32-bit) represent the same flags.
##### AVX-512 (Advanced Vector Extensions 512 & ZMM Registers, K Registers

### x86/x64 Execution/Operating Modes
> 🔗 https://en.wikipedia.org/wiki/X86_assembly_language#Execution_modes

The x86 processors support five modes of operation for x86 code, **Real Mode**, **Protected Mode**, **Long Mode**, **Virtual 86 Mode**, and **System Management Mode**, in which some instructions are available and others are not. A 16-bit subset of instructions is available on the 16-bit x86 processors, which are the 8086, 8088, 80186, 80188, and 80286. These instructions are available in real mode on all x86 processors, and in 16-bit protected mode (80286 onwards), additional instructions relating to protected mode are available. On the 80386 and later, 32-bit instructions (including later extensions) are also available in all modes, including real mode; on these CPUs, V86 mode and 32-bit protected mode are added, with additional instructions provided in these modes to manage their features. SMM, with some of its own special instructions, is available on some Intel i386SL, i486 and later CPUs. Finally, in long mode (AMD Opteron onwards), 64-bit instructions, and more registers, are also available. **The instruction set is similar in each mode but memory addressing and word size vary, requiring different programming strategies.**

The modes in which x86 code can be executed in are:
1. **Real mode (16-bit)**
	1. 20-bit segmented memory address space (meaning that only 1 MB of memory can be addressed— actually since 80286 a little more through HMA), direct software access to peripheral hardware, and no concept of memory protection or multitasking at the hardware level. Computers that use BIOS start up in this mode.
2. **Protected mode (16-bit and 32-bit)**
	1. Expands addressable physical memory to 16 MB and addressable virtual memory to 1 GB. Provides privilege levels and protected memory, which prevents programs from corrupting one another. 16-bit protected mode (used during the end of the DOS era) used a complex, multi-segmented memory model. 32-bit protected mode uses a simple, flat memory model.
3. **Long mode (64-bit)**
	1. Mostly an extension of the 32-bit (protected mode) instruction set, but unlike the 16–to–32-bit transition, many instructions were dropped in the 64-bit mode. Pioneered by AMD.
4. **Virtual 8086 mode (16-bit)**
	1. A special hybrid operating mode that allows real mode programs and operating systems to run while under the control of a protected mode supervisor operating system
5. **System Management Mode (16-bit)**
	1. Handles system-wide functions like power management, system hardware control, and proprietary OEM designed code. It is intended for use only by system firmware. All normal execution, including the operating system, is suspended. An alternate software system (which usually resides in the computer's firmware, or a hardware-assisted debugger) is then executed with high privileges.
#### CPU Modes Switching
The processor runs in real mode immediately after power on, so an **operating system kernel**, or other program, must explicitly switch to another mode if it wishes to run in anything but real mode. Switching modes is accomplished by modifying certain bits of the processor's control registers after some preparation, and some additional setup may be required after the switch.

> **💡 Examples**
> ↗ [Firmware and Computer (OS) Booting](../../../../Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)
> 
> - With a computer running legacy BIOS, the BIOS and the boot loader run in Real mode. The 64-bit operating system kernel checks and switches the CPU into Long mode and then starts new kernel-mode threads running 64-bit code.
> - With a computer running UEFI, the UEFI firmware (except CSM and legacy Option ROM), the UEFI boot loader and the UEFI operating system kernel all run in Long mode.
#### Memory Segmentation
> 🔗 https://en.wikipedia.org/wiki/X86_memory_segmentation#
#### Real Mode
#### Protected Mode


### x86/x64 ISA Extensions & CPU Specific Instructions
> 🔗 https://en.wikipedia.org/wiki/X86#Extensions
#### Intel Control-flow Enforcement Technology (CET)
> 🔗 https://www.intel.com/content/www/us/en/developer/articles/technical/technical-look-control-flow-enforcement-technology.html

#### Intel® AVX-512
> 🔗 https://www.intel.com/content/www/us/en/products/docs/accelerator-engines/what-is-intel-avx-512.html


### 🧻 x86/x64 Instruction Listings
↗ [x86 Instruction Listing](x86%20Instruction%20Listing.md)



## 🛠️ CPU Implementations & Optimizations on x86/x64 Architecture
> 🔗 https://en.wikipedia.org/wiki/X86#Current_implementations

During execution, current x86 processors employ a few extra decoding steps to split most instructions into smaller pieces called micro-operations. These are then handed to a control unit that buffers and schedules them in compliance with x86-semantics so that they can be executed, partly in parallel, by one of several (more or less specialized) execution units. These modern x86 designs are thus pipelined, superscalar, and also capable of out of order and speculative execution (via branch prediction, register renaming, and memory dependence prediction), which means they may execute multiple (partial or complete) x86 instructions simultaneously, and not necessarily in the same order as given in the instruction stream. Some Intel CPUs (Xeon Foster MP, some Pentium 4, and some Nehalem and later Intel Core processors) and AMD CPUs (starting from Zen) are also capable of simultaneous multithreading with two threads per core (Xeon Phi has four threads per core). Some Intel CPUs support transactional memory (TSX).

When introduced, in the mid-1990s, this method was sometimes referred to as a "RISC core" or as "RISC translation", partly for marketing reasons, but also because these micro-operations share some properties with certain types of RISC instructions. However, traditional microcode (used since the 1950s) also inherently shares many of the same properties; the new method differs mainly in that the translation to micro-operations now occurs asynchronously. Not having to synchronize the execution units with the decode steps opens up possibilities for more analysis of the (buffered) code stream, and therefore permits detection of operations that can be performed in parallel, simultaneously feeding more than one execution unit.

The latest processors also do the opposite when appropriate; they combine certain x86 sequences (such as a compare followed by a conditional jump) into a more complex micro-op which fits the execution model better and thus can be executed faster or with fewer machine resources involved.

Another way to try to improve performance is to cache the decoded micro-operations, so the processor can directly access the decoded micro-operations from a special cache, instead of decoding them again. Intel followed this approach with the Execution Trace Cache feature in their NetBurst microarchitecture (for Pentium 4 processors) and later in the Decoded Stream Buffer (for Core-branded processors since Sandy Bridge).

Transmeta used a completely different method in their Crusoe x86 compatible CPUs. They used just-in-time translation to convert x86 instructions to the CPU's native VLIW instruction set. Transmeta argued that their approach allows for more power efficient designs since the CPU can forgo the complicated decode step of more traditional x86 implementations.



## Ref
[x86 | Wikipedia]: https://en.wikipedia.org/wiki/X86
