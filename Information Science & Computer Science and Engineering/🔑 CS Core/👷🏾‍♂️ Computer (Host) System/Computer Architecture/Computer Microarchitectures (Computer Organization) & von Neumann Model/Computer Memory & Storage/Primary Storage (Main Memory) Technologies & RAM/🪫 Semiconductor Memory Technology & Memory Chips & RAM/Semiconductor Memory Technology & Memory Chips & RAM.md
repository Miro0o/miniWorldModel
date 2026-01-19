# Semiconductor Memory Technology & Memory Chips

[TOC]



## Res
### Related Topics
↗ [Semi-conductor Media (Circuit) Storage & Flash Storage](../../Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage/Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage.md)
↗ [Semiconductor Memory Technology & Memory Chips & RAM](Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM.md)

↗ [Digital (Logic) Electronics Foundations](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
↗ [Transistors & Metal–Oxide Semiconductor (MOS)](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x01%20Logic%20Gate/Transistors%20&%20Metal–Oxide%20Semiconductor%20(MOS).md)


### Learning Resources



## Intro: Semiconductor Memory
> 🔗 https://en.wikipedia.org/wiki/Computer_memory

Modern computer memory is implemented as **semiconductor memory**, where data is stored within **memory cells** built from **MOS transistors** and other components on an integrated circuit. There are two main kinds of semiconductor memory: volatile and non-volatile. 
- Examples of non-volatile memory are flash memory and ROM, PROM, EPROM, and EEPROM memory. 
- Examples of volatile memory are dynamic random-access memory (DRAM) used for primary storage and static random-access memory (SRAM) used mainly for CPU cache.

Most semiconductor memory is organized into **memory cells** each storing one bit (0 or 1). **Flash memory** organization includes both one bit per memory cell and a multi-level cell capable of storing multiple bits per cell. The memory cells are grouped into words of fixed word length, for example, 1, 2, 4, 8, 16, 32, 64 or 128 bits. Each word can be accessed by a binary address of N bits, making it possible to store 2N words in the memory.


### Transistors & Logic Gates
↗ [Digital (Logic) Electronics Foundations](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
↗ [Logic Gate](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x01%20Logic%20Gate/Logic%20Gate.md)
↗ [Transistors & Metal–Oxide Semiconductor (MOS)](../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x01%20Logic%20Gate/Transistors%20&%20Metal–Oxide%20Semiconductor%20(MOS).md)


### Memory Cells
> 🔗 https://en.wikipedia.org/wiki/Memory_cell_(computing)
> 
> Take SSD (VNAND Flash Memory) as an example:
> ↗ [Semi-conductor Media (Circuit) Storage & Flash Storage /Flash Memory /V-NAND](../../Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage/Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage.md#V-NAND)
> ↗ [SSD (Solid State Disk) /VNAND SSD](../../Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage/SSD%20(Solid%20State%20Disk)/SSD%20(Solid%20State%20Disk).md#VNAND%20SSD)
> 
> 🎬 https://youtu.be/5Mh3o886qpg?si=eiegmGOZaXpl_04v&t=319
> single memory cells in VNAND Flash Memory

The memory cell is the fundamental building block of computer memory. The memory cell is an electronic circuit that stores one bit of binary information and it must be set to store a logic 1 (high voltage level) and reset to store a logic 0 (low voltage level). Its value is maintained/stored until it is changed by the set/reset process. The value in the memory cell can be accessed by reading it.

MOS Memory & Volatile Memory
- Over the history of computing, different memory cell architectures have been used, including **core memory** and **bubble memory**. Today[as of?], the most common memory cell architecture is **MOS memory**, which consists of **metal–oxide–semiconductor (MOS) memory cells**. Modern random-access memory (RAM) uses **MOS field-effect transistors (MOSFETs)** as flip-flops, along with MOS capacitors for certain types of RAM.
- The SRAM (static RAM) memory cell is a type of flip-flop circuit, typically implemented using MOSFETs. These require very low power to keep the stored value when not being accessed. 
- A second type, DRAM (dynamic RAM), is based around MOS capacitors. Charging and discharging a capacitor can store a '1' or a '0' in the cell. However, the charge in this capacitor will slowly leak away, and must be refreshed periodically. Because of this refresh process, DRAM uses more power. However, DRAM can achieve greater storage densities.

Floating-Gate Memory & Non-Volatile Memory (NVM)
- On the other hand, most non-volatile memory (NVM) is based on **floating-gate memory cell** architectures. Non-volatile memory technologies including EPROM, EEPROM and flash memory use floating-gate memory cells, which are based around floating-gate MOSFET transistors.



## 🎯 Volatile Memory & RAM
### DRAM (Dynamic RAM)
↗ [DRAM (Dynamic RAM) Technology](DRAM%20(Dynamic%20RAM)%20Technology/DRAM%20(Dynamic%20RAM)%20Technology.md)


### SRAM (Static RAM)
↗ [SRAM (Static RAM) Technology](SRAM%20(Static%20RAM)%20Technology/SRAM%20(Static%20RAM)%20Technology.md)



## 🎯 Non-Volatile Memory
### NV-RAM (Non-Volatile RAM)


### ROM
↗ [Semi-conductor Media (Circuit) Storage & Flash Storage](../../Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage/Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage.md)


### Other Non-semiconductor Storage
↗ [Secondary (Auxiliary) Storage Technologies & DAS (Directly Attached Storage)](../../Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage).md)



## Ref
[Charge trap flash | Wikipedia]: https://en.wikipedia.org/wiki/Charge_trap_flash
