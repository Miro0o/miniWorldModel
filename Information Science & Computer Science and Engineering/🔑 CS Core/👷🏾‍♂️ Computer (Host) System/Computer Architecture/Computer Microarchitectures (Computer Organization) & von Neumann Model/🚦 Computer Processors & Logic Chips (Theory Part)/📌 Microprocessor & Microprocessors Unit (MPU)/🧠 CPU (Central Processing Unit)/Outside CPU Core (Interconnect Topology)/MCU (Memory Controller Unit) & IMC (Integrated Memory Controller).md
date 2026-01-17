# MCU (Memory Controller Unit) & IMC (Integrated Memory Controller)

[TOC]



## Res
### Related Topics
↗ [Primary Storage (Main Memory) Technologies & RAM](../../../../Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM.md)
↗ [Memory Bus](../../../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Memory%20Bus/Memory%20Bus.md)
↗ [LLC (Last Level Cache) - L3 (L4)](LLC%20(Last%20Level%20Cache)%20-%20L3%20(L4).md)


### Other Resources



## Intro
> ↗ https://en.wikipedia.org/wiki/Memory_controller

A **memory controller**, also known as **memory chip controller** (**MCC**) or a **memory controller unit** (**MCU**), is a digital circuit that manages the flow of data going to and from a computer's [main memory](https://en.wikipedia.org/wiki/Main_memory "Main memory"). When a memory controller is integrated into another chip, such as an integral part of a [microprocessor](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor"), it is usually called an **integrated memory controller** (**IMC**).

Memory controllers contain the logic necessary to read and write to [dynamic random-access memory](https://en.wikipedia.org/wiki/Dynamic_random-access_memory "Dynamic random-access memory") (DRAM), and to provide the critical [memory refresh](https://en.wikipedia.org/wiki/Memory_refresh "Memory refresh") and other functions. Reading and writing to DRAM is performed by selecting the row and column data addresses of the DRAM as the inputs to the [multiplexer](https://en.wikipedia.org/wiki/Multiplexer "Multiplexer") circuit, where the [demultiplexer](https://en.wikipedia.org/wiki/Demultiplexer "Demultiplexer") on the DRAM uses the converted inputs to select the correct memory location and return the data, which is then passed back through a multiplexer to consolidate the data in order to reduce the required [bus](https://en.wikipedia.org/wiki/Bus_\(computing\) "Bus (computing)") width for the operation. Memory controllers' bus widths range from [8-bit](https://en.wikipedia.org/wiki/8-bit "8-bit") in earlier systems, to 512-bit in more complicated systems, where they are typically implemented as four [64-bit](https://en.wikipedia.org/wiki/64-bit "64-bit") simultaneous memory controllers operating in parallel, though some operate with two 64-bit memory controllers being used to access a [128-bit](https://en.wikipedia.org/wiki/128-bit "128-bit") memory device.

Some memory controllers, such as the one integrated into [PowerQUICC](https://en.wikipedia.org/wiki/PowerQUICC "PowerQUICC") II processors, include [error detection and correction](https://en.wikipedia.org/wiki/Error_detection_and_correction "Error detection and correction") hardware. Many modern processors are also integrated [memory management unit](https://en.wikipedia.org/wiki/Memory_management_unit "Memory management unit") (MMU), which in many [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") implements [virtual addressing](https://en.wikipedia.org/wiki/Virtual_addressing "Virtual addressing"). On early x86-32 processors, the MMU is integrated in the CPU, but the memory controller is usually part of [northbridge](https://en.wikipedia.org/wiki/Northbridge_\(computing\) "Northbridge (computing)").



## Ref
