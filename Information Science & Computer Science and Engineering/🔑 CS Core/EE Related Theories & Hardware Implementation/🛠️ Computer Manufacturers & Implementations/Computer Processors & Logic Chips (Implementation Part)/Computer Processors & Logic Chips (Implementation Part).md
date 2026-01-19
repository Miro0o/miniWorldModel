# Computer Processors & Logic Chips (Implementation Part)

[TOC]



## Res
### Related Topics
↗ [Digital (Logic) Electronics Foundations](../../⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
↗ [Transistors & Metal–Oxide Semiconductor (MOS)](../../⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x01%20Logic%20Gate/Transistors%20&%20Metal–Oxide%20Semiconductor%20(MOS).md)

↗ [Microchips, Chips, Computer Chips & IC (in General)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Microchips,%20Chips,%20Computer%20Chips%20&%20IC%20(in%20General).md)
- ↗ [Computer Processors & Logic Chips (Theory Part)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part).md)
	- ↗ [Microprocessor & Microprocessors Unit (MPU)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Microprocessor%20&%20Microprocessors%20Unit%20(MPU).md)
	- ↗ [CPU (Central Processing Unit)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
	- ↗ [GPU (Graphics Processing Unit)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
	- etc.
- ↗ [Computer Memory & Storage](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
	- ↗ [DRAM (Dynamic RAM) Technology](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/🪫%20Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM/DRAM%20(Dynamic%20RAM)%20Technology/DRAM%20(Dynamic%20RAM)%20Technology.md)
	- ↗ [Disk Technology](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/💾%20Disk%20Technology/Disk%20Technology.md)
	- etc.
- [Computer IO System & Device Management](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20IO%20System%20&%20Device%20Management/Computer%20IO%20System%20&%20Device%20Management.md)
	- ↗ [Device Controllers & Adapter Cards (Expansion Cards)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20IO%20System%20&%20Device%20Management/Device%20Controllers%20&%20Adapter%20Cards%20(Expansion%20Cards).md)
	- etc.

↗ [Embedded Hardwares & Chips](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Embedded%20Hardwares%20&%20Chips.md)
- ↗ [ASIC (Application-Specific Integrated Circuit)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)
- ↗ [Configurable Processors (PLDs, Programmable Logic Devices)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices).md)
- ↗ [Standardized Processors (off-the-shelf)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/Standardized%20Processors%20(off-the-shelf).md)

↗ [Semiconductor Industry & Companies](../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Semiconductor%20Industry%20&%20Companies.md)

↗ [Systems on Chip (SoC)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/Systems%20on%20Chip%20(SoC).md)

↗ [Digital (Logic) Electronics Foundations](../../⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md) 🤔🤔🤔



## Intro



## Ref
