# Secondary (Auxiliary) Storage Technologies & DAS (Directly Attached Storage)

[TOC]



## Res
### Related Topics
↗ [Semiconductor Memory Technology & Memory Chips & RAM](../Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/🪫%20Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM/Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM.md)

↗ [Expansion Bus (Ports & Computer Bus Interfaces)](../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces).md)
↗ [Storage Buses Protocols & Interfaces](../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/🚚%20Storage%20Bus%20Protocols%20&%20Interfaces/Storage%20Buses%20Protocols%20&%20Interfaces.md)
↗ [Storage Chips & Devices](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Storage%20Chips%20&%20Devices/Storage%20Chips%20&%20Devices.md)

↗ [Data Transmission Modes](../../Computer%20IO%20System%20&%20Device%20Management/Data%20Transmission%20Modes.md)
↗ [File & File System](../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)
↗ [NAS (Network Architecture Searching)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/3️⃣%20Model%20Training/Model%20Tuning%20&%20Hyperparameter%20Optimization/NAS%20(Network%20Architecture%20Searching).md)
↗ [Storage Area Network (SAN)](../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/Storage%20Area%20Network%20(SAN).md)



## Intro
**Computer data storage** is a technology consisting of [computer](https://en.wikipedia.org/wiki/Computer "Computer") components and [recording media](https://en.wikipedia.org/wiki/Data_storage "Data storage") that are used to retain digital [data](https://en.wikipedia.org/wiki/Data_(computing) "Data (computing)"). It is a core function and fundamental component of computers.: 15–16 

The [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPU) of a computer is what manipulates data by performing computations. In practice, almost all computers use a [storage hierarchy](https://en.wikipedia.org/wiki/Memory_hierarchy "Memory hierarchy"),: 468–473  which puts fast but expensive and small storage options close to the CPU and slower but less expensive and larger options further away. Generally, the fast technologies are referred to as "memory", while slower persistent technologies are referred to as "storage".

Even the first computer designs, [Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage "Charles Babbage")'s [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine "Analytical Engine") and [Percy Ludgate](https://en.wikipedia.org/wiki/Percy_Ludgate "Percy Ludgate")'s Analytical Machine, clearly distinguished between processing and memory (Babbage stored numbers as rotations of gears, while Ludgate stored numbers as displacements of rods in shuttles). This distinction was extended in the [Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture "Von Neumann architecture"), where the CPU consists of two main parts: The [control unit](https://en.wikipedia.org/wiki/Control_unit "Control unit") and the [arithmetic logic unit](https://en.wikipedia.org/wiki/Arithmetic_logic_unit "Arithmetic logic unit") (ALU). The former controls the flow of data between the CPU and memory, while the latter performs arithmetic and [logical operations](https://en.wikipedia.org/wiki/Bitwise_operation "Bitwise operation") on data.


### DAS (Directly Attached Storage)
> 🔗 https://en.wikipedia.org/wiki/Direct-attached_storage

Direct-attached storage (DAS) is digital storage directly attached to the computer accessing it, as opposed to storage accessed over a computer network (i.e. network-attached storage). DAS consists of one or more storage units such as hard drives, solid-state drives, optical disc drives within an external enclosure. ==The term "DAS" is a retronym to contrast with storage area network (SAN) and network-attached storage (NAS).==

> ↗ [Storage Area Network (SAN)](../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/Storage%20Area%20Network%20(SAN).md)
> ↗ [NAS (Network-Attached Storage) Protocols](../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/NAS%20(Network-Attached%20Storage)%20Protocols/NAS%20(Network-Attached%20Storage)%20Protocols.md)

A typical DAS system is made of a data storage device (for example enclosures holding a number of hard disk drives) connected directly to a computer through a [host bus adapter](https://en.wikipedia.org/wiki/Host_bus_adapter "Host bus adapter") (HBA). Between those two points there is no network device (like hub, switch, or router), and this is the main characteristic of DAS.
The main protocols used for DAS connections are [Parallel ATA](https://en.wikipedia.org/wiki/Parallel_ATA "Parallel ATA"), [SATA](https://en.wikipedia.org/wiki/SATA "SATA"), [eSATA](https://en.wikipedia.org/wiki/ESATA "ESATA"), [NVMe](https://en.wikipedia.org/wiki/NVM_Express "NVM Express"), [Parallel SCSI](https://en.wikipedia.org/wiki/Parallel_SCSI "Parallel SCSI"), [SAS](https://en.wikipedia.org/wiki/Serial_Attached_SCSI "Serial Attached SCSI"), [USB](https://en.wikipedia.org/wiki/USB "USB"), and [IEEE 1394](https://en.wikipedia.org/wiki/IEEE_1394 "IEEE 1394").


### Sequential Access Memory
↗ [Magnetic Tapes](Magnetic%20Media%20Secondary%20Storage/Magnetic%20Tapes.md)

↗ [Compact Disk (CD)](Optical%20Media%20Secondary%20Storage/Compact%20Disk%20(CD).md)
↗ [Digital Versatile Disk (DVD)](Optical%20Media%20Secondary%20Storage/Digital%20Versatile%20Disk%20(DVD).md)
↗ [Blue Disk (BD)](Optical%20Media%20Secondary%20Storage/Blue%20Disk%20(BD).md)


### RAM (Random Access Memory)
#### Disk Drive Technology
↗ [Disk Technology](💾%20Disk%20Technology/Disk%20Technology.md)
↗ [Hard Disk & Hard Disk Driver (HDD)](Magnetic%20Media%20Secondary%20Storage/Hard%20Disk%20&%20Hard%20Disk%20Driver%20(HDD).md)
↗ [Floppy Disk](Magnetic%20Media%20Secondary%20Storage/Floppy%20Disk.md)

↗ [SSD (Solid State Disk)](Semi-conductor%20Media%20(Circuit)%20Storage%20&%20Flash%20Storage/SSD%20(Solid%20State%20Disk)/SSD%20(Solid%20State%20Disk).md)


### Futural Data Storage
📝 [Future Data Storage](Future%20Data%20Storage.md)



## Ref
[Computer data storage | Wikipedia]: https://en.wikipedia.org/wiki/Computer_data_storage
