# Computer Processors & Logic Chips (Theory Part)

[TOC]



## Res
### Related Topics
↗ [Computer Processors & Logic Chips (Implementation Part)](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part).md)

↗ [Microchips, Chips, Computer Chips & IC (in General)](../../Microchips,%20Chips,%20Computer%20Chips%20&%20IC%20(in%20General).md)
↗ [Digital (Logic) Electronics Foundations](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)

↗ [CPU (Central Processing Unit)](📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
↗ [Embedded Hardwares & Chips](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Embedded%20Hardwares%20&%20Chips.md)
- ↗ [ASIC (Application-Specific Integrated Circuit)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)
- ↗ [Standardized Processors (off-the-shelf)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/Standardized%20Processors%20(off-the-shelf).md)
- ↗ [Configurable Processors (PLDs, Programmable Logic Devices)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices).md)
↗ [Single-Board Computer (SBC)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/🛌%20Single-Board%20Computer%20(SBC)/Single-Board%20Computer%20(SBC).md)
↗ [Hardware Acceleration](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Hardware%20Acceleration.md)

↗ [OS Processes & Automata Management (CPU + Main Memory Resource)](../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource).md)

↗ [Semiconductor Industry & Companies](../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Semiconductor%20Industry%20&%20Companies.md)


### Other Resources
🎬 👍【芯片放大几万倍，你会看到什么？】 https://www.bilibili.com/video/BV17F4m1T7M2/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
> 🔗 https://en.wikipedia.org/wiki/Processor_(computing)

In [computing](https://en.wikipedia.org/wiki/Computing "Computing") and [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), a **processor** or **processing unit** is an electrical component ([digital circuit](https://en.wikipedia.org/wiki/Circuit_(computer_science) "Circuit (computer science)")) that performs operations on an external data source, usually [memory](https://en.wikipedia.org/wiki/Memory_(computing) "Memory (computing)") or some other data stream. It typically takes the form of a [microprocessor](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor"), which can be implemented on a single or a few tightly integrated [metal–oxide–semiconductor](https://en.wikipedia.org/wiki/Metal%E2%80%93oxide%E2%80%93semiconductor "Metal–oxide–semiconductor") [integrated circuit](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") chips. In the past, processors were constructed using multiple individual [vacuum tubes](https://en.wikipedia.org/wiki/Vacuum_tube "Vacuum tube"), multiple individual [transistors](https://en.wikipedia.org/wiki/Transistor "Transistor"), or multiple integrated circuits.

The term is frequently used to refer to the [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPU), the main processor in a system. However, it can also refer to other [coprocessors](https://en.wikipedia.org/wiki/Coprocessor "Coprocessor"), such as a [graphics processing unit](https://en.wikipedia.org/wiki/Graphics_processing_unit "Graphics processing unit") (GPU).

Traditional processors are typically based on silicon; however, researchers have developed experimental processors based on alternative materials such as [carbon nanotubes](https://en.wikipedia.org/wiki/Carbon_nanotube), and alloys made of elements from groups [three](https://en.wikipedia.org/wiki/Group_3_element "Group 3 element") and [five](https://en.wikipedia.org/wiki/Group_5_element "Group 5 element") of the [periodic table](https://en.wikipedia.org/wiki/Periodic_table "Periodic table"). Transistors made of a single sheet of silicon atoms one atom tall and other 2D materials have been researched for use in processors. [Quantum processors](https://en.wikipedia.org/wiki/Quantum_processor "Quantum processor") have been created; they use [quantum superposition](https://en.wikipedia.org/wiki/Quantum_superposition "Quantum superposition") to represent [bits](https://en.wikipedia.org/wiki/Bit "Bit") (called [qubits](https://en.wikipedia.org/wiki/Qubit "Qubit")) instead of only an on or off state.

![](../../../../../../Assets/Pics/Screenshot%202024-05-23%20at%202.09.33%20PM.png)


### Moore's Law
[Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law), named after [Gordon Moore](https://en.wikipedia.org/wiki/Gordon_Moore "Gordon Moore"), is the observation and projection via historical trend that the number of transistors in integrated circuits, and therefore processors by extension, doubles every two years. The progress of processors has followed Moore's law closely

![](../../../../../../Assets/Pics/Pasted%20image%2020240523143039.png)



## Computer Processors /Logic Chips Taxonomy
![](../../../../../../Assets/Pics/Screenshot%202023-05-28%20at%209.35.38%20PM.png)


### Microprocessor (MPU) ⭐
> [!links]
> ↗ [Microprocessor & Microprocessors Unit (MPU)](📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Microprocessor%20&%20Microprocessors%20Unit%20(MPU).md)
> - ↗ [CPU (Central Processing Unit)](📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
>
> ↗ [Uniprocessor Organization](MPU%20Architecture%20&%20Design/Uniprocessor%20Organization/Uniprocessor%20Organization.md)
> ↗ [Multicore Processor and Multiprocessors](MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multicore%20Processor%20and%20Multiprocessors.md)
> - ↗ [Multicore Processor Units](MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multicore%20Processor%20Units/Multicore%20Processor%20Units.md)
> - ↗ [Multiprocessor Architectures & Parallel Computing](MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Multiprocessor%20Architectures%20&%20Parallel%20Computing.md)
> 
> ↗ [Computer Processors & Logic Chips (Implementation Part)](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part).md)
> - ↗ [Intel Chips](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Intel%20Chips.md)
> - ↗ [AMD Chips](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/AMD%20Chips.md)
> - ↗ [Nvidia Chips](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Nvidia%20Chips.md)
> - ↗ [国产芯片](../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/国产芯片.md)

> 🤖 Gemini 3.0 Pro
> https://gemini.google.com/share/ebedeb833ded

Microprocessor (MPU - Microprocessor Unit) -- **"The Physical Chip"**
This is a hardware component definition.
- **Definition:** A CPU that is contained entirely on a single integrated circuit (chip).
- **Context:** Before the 1970s, CPUs were giant cabinets filled with separate vacuum tubes or transistors. When we shrunk that whole cabinet down onto a tiny piece of silicon, we called it a **Micro**processor.
- **Today:** Virtually every CPU you buy (Intel Core, AMD Ryzen, Apple M1) is a microprocessor. The terms "CPU" and "Microprocessor" are now effectively synonyms in casual conversation.

Uniprocessor System -- **"The Solo Act"**
This is a system configuration definition.
- **Definition:** A computer system that runs on **one** single CPU (which has only **one** core).
- **How it works:** It can only do exactly one thing at a time. If you want to listen to music and browse the web, the Operating System has to switch between them so fast (thousands of times a second) that it _looks_ simultaneous, but it isn't.
- **Status:** Mostly extinct in modern PCs. You only find these in simple microcontrollers (like inside a washing machine or a basic thermostat).

Multicore Processor -- **"The Team in One Room"**
This is an internal design definition (Microarchitecture).
- **Definition:** A **single** physical microprocessor chip that contains **two or more** distinct processing units (called "Cores") inside it.
- **Connection to Von Neumann:** Each "Core" is effectively its own independent Von Neumann machine. It has its own Registers, its own L1 Cache, and its own execution pipeline.
- **Why we do this:** We hit a physical limit on speed (around 4-5 GHz). To make computers faster, instead of making the single brain faster (which was melting the chips), engineers started putting _more_ brains onto the same chip.
- **Example:** Your laptop likely has 1 microprocessor, but that chip has 8 or 10 cores inside.

Multiprocessor System -- **"The Multiple Buildings"**
This is a motherboard/system level definition.
- **Definition:** A computer system that has **multiple separate physical sockets** on the motherboard, with a separate physical microprocessor plugged into each one.
- **How it works:** The motherboard connects these separate chips so they can share the main memory (RAM) and work together.
- **Use Case:** This is rare for home users but standard for **Servers** and Supercomputers. A massive server might have 4 physical sockets, each holding a 64-core chip, for a total of 256 cores.

The Grand Summary: How they relate
Imagine a corporate office building.
1. **Uniprocessor:** An office with **one single employee** doing all the work.
2. **Multicore Processor:** An office with **one room** (the chip), but inside that room, there are **4 desks with 4 employees** (cores) working in parallel. They share the same coffee machine (L3 Cache/RAM).
3. **Multiprocessor:** A campus with **two separate buildings** (sockets). Each building has its own team of employees. They are connected by a telephone line (System Bus/Interconnect).
#### ISA, Microarchitecture, Microprocessor, CPU, and Die/Silicon?
#ISA #micro_architecture #micro_processor #cpu 

> 🤖 Gemini 3.0 Pro

| Term                           | Definition                                 | Example                       |
| ------------------------------ | ------------------------------------------ | ----------------------------- |
| **ISA**                        | The vocabulary (abstract).                 | x86-64, ARMv8                 |
| **Microarchitecture**          | The internal design (logic).               | Zen 4, Golden Cove, Firestorm |
| **Die / Silicon**              | The physical piece of glass/semiconductor. | A specific silicon wafer cut. |
| **CPU / SKU** = Microprocessor | The final product in the box.              | AMD Ryzen 9 7950X             |


### Embedded Logic Chips /Computing Units
#### ASIC (Application-Specific Integrated Circuits)

↗ [ASIC (Application-Specific Integrated Circuit)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)

(Sometimes ASIC is not categorized as logic chips since it only execute on one program.)

> [!TIP]
> 🤖 Gemini 3.0 Pro
> https://gemini.google.com/share/ebedeb833ded
> 
> ASIC -- **"The Hardwired Expert"**
> 
> This is the most specialized category. The name says it all: **Application-Specific**.
> - **CPU/GPU:** These are **General Purpose**. You can write code to make them do almost anything.
> - **ASIC:** This is a chip designed to do **exactly one thing** incredibly fast, and it cannot do anything else. You cannot "reprogram" it to be a different machine; the logic is often etched physically into the silicon.
> 
> **Examples:**
> - **Bitcoin Mining Rigs:** They use ASICs designed solely to solve the SHA-256 algorithm. They cannot run Windows; they cannot even render a triangle. They just crunch that one specific math equation 100x faster than a CPU.
> - **Network Routers:** High-end internet routers use ASICs to forward data packets at lightning speed without bothering a CPU.
#### Configurable Processors
↗ [Configurable Processors (PLDs, Programmable Logic Devices)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices).md)
- ↗ [PLA (Programmable Logic Array)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/PLA%20(Programmable%20Logic%20Array).md)
- ↗ [PAL (Programmable Array Logic)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/PAL%20(Programmable%20Array%20Logic).md)
- ↗ [FPGA (Field Programmable Gates Arrays)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/FPGA%20(Field%20Programmable%20Gates%20Arrays).md)
- ↗ [CPLD (Complex Programmable Logic Device)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/CPLD%20(Complex%20Programmable%20Logic%20Device).md)
#### Standardized Processors (off-the-shelf)
↗ [Standardized Processors (off-the-shelf)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/Standardized%20Processors%20(off-the-shelf).md)
- ↗ [Microcontrollers (MCU, 单片机)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/📌%20Microcontrollers%20(MCU,%20单片机)/Microcontrollers%20(MCU,%20单片机).md)
- ↗ [Arduino](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/Arduino/Arduino.md)
- ↗ [BBC Micro Bit](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/BBC%20Micro%20Bit/BBC%20Micro%20Bit.md)
- ↗ [WeMos](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/WeMos/WeMos.md)

> [!TIP]
> 🤖 Gemini 3.0 Pro
> https://gemini.google.com/share/ebedeb833ded
> 
> Microcontrollers -- **"The Entire Computer on a Chip"**
> 
> If a Microprocessor (CPU) is just a "Brain," a **Microcontroller** is a "Brain + Body" packed into a single tiny chip.
> - **Microprocessor (CPU):** It is just the brain. It cannot work alone. You must plug it into a motherboard and add separate chips for Memory (RAM), Storage, and Input/Output (I/O).
> - **Microcontroller (MCU):** It has the Processor, RAM, Storage (Flash), and I/O pins **all baked into the same piece of silicon**.
> 
> **Where you find them:**
> - **Microprocessors:** Laptops, Desktops, Servers, Smartphones (as part of an SoC).
> - **Microcontrollers:** Microwaves, Washing Machines, Car Airbags, TV Remote Controls. They are designed to run **one** specific program forever.


### Single-Board Computer (SBC)
↗ [Single-Board Computer (SBC)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/🛌%20Single-Board%20Computer%20(SBC)/Single-Board%20Computer%20(SBC).md)
- ↗ [Orange Pi](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/🛌%20Single-Board%20Computer%20(SBC)/Orange%20Pi/Orange%20Pi.md)
- ↗ [Raspberry Pi](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/🛌%20Single-Board%20Computer%20(SBC)/Raspberry%20Pi/Raspberry%20Pi.md)


### System on a Chip (SoC)
↗ [Systems on Chip (SoC)](Systems%20on%20Chip%20(SoC).md)

↗ [Motherboard & Mainboard](../Motherboard%20&%20Mainboard.md)



## Ref
[Digital Signal Processor]: https://en.wikipedia.org/wiki/Digital_signal_processor

[All about CPUs: Microprocessor, Microcontroller and Single Board Computer]: https://www.seeedstudio.com/blog/2020/10/27/all-about-cpus-microprocessor-microcontroller-and-single-board-computer/
