# System Software Engineering

[TOC]



## Res
### Related Topics
↗ [C & CPP](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)
↗ [Algorithm & Data Structure](../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithm%20&%20Data%20Structure.md)

↗ [System Security](../../CyberSecurity/System%20Security/System%20Security.md)

↗ [Operating Systems & Kernels (Engineering Part)](../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)
- ↗ [Linux (Derived From UNIX Family)](../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20(Derived%20From%20UNIX%20Family).md)
- ↗ [macOS (Derived From UNIX Family)](../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/macOS%20(Derived%20From%20UNIX%20Family).md)
- ↗ [Windows](../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows.md)
- ↗ [Android & AOSP](../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Android%20&%20AOSP/Android%20&%20AOSP.md)
↗ [Database Systems](../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
↗ [Programming Language Processing & Program Execution](../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Computer (IO Devices) Drivers & Programming](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Computer%20(IO%20Devices)%20Drivers%20&%20Programming.md)
↗ [Computer Networking and Communication](../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Computer%20Networking%20and%20Communication.md)
- ↗ [Network Programming & RPC](../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
↗ [Security Programming & Security Product Development](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/Security%20Programming%20&%20Security%20Product%20Development/Security%20Programming%20&%20Security%20Product%20Development.md)
↗ [ISA (Industry Standard Architecture)](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Slot%20&%20Internal%20Bus/ISA%20(Industry%20Standard%20Architecture)/ISA%20(Industry%20Standard%20Architecture).md)

↗ [Parallel Computing & Programming](../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md)

↗ [AI (Data) Infrastructure & Techniques Stack](../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack.md)



## Intro: System Level Programming Abstraction
![](../../../../../../Assets/Pics/Screenshot%202024-02-21%20at%209.18.47PM.png)
<small>Image source from wikipedia: Linux Kernel </small>

![[../../../../../../../Assets/Pics/os X archi.jpeg]]
<small>MacOS Architecture</small>


### Bus
↗ [Computer Bus (Datapath) & Interfaces & Protocols](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols.md)


### CPU
#### Instruction and Data
↗ [Memory Access & Addressing](../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)
#### Memory Read/Write
↗ [Instruction Execution](../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Instruction%20Execution.md)
#### Register
↗ [Register](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/Register.md)


### Memory
↗ [Computer Memory & Storage](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
#### Memory Unit


### Motherboard
#### Interface Card
#### Memory Card
##### RAM
##### ROM with BIOS
##### RAM on the Interface Card
![](../../../../../../Assets/Pics/Screenshot%202023-03-01%20at%2011.08.01%20AM.png)


### Memory Address Space
![](../../../../../../Assets/Pics/Screenshot%202023-03-01%20at%2011.08.25%20AM.png)



## 🎯 ISA & ASM Development
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [ASM (Assembly Languages)](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)



## 🎯 Compiler Development
↗ [Program Language Processing & Compilation Theory (Compile-time)](../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md)
↗ [Compilation & Program Loading Tools](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)



## 🎯 OS Kernel & System Libraries Development
↗ [Operating System & OS Kernel (Theory Part)](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)
↗ [Operating Systems & Kernels (Engineering Part)](../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)
↗ [Kernel Debugging](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/🦺%20Operating%20System%20Basics/Kernel%20Debugging.md)
↗ [Information Systems & System Architecture Design](../../Information%20Systems%20&%20System%20Architecture%20Design/Information%20Systems%20&%20System%20Architecture%20Design.md)
↗ [Computer (Host) System](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20(Host)%20System.md)

↗ [Operating System Components & Runtime Libraries](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Components%20&%20Runtime%20Libraries.md)
↗ [System Core Function Libraries & C Standard Library (User Mode)](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)



## 🎯 I/O Drivers Development
↗ [Computer (IO Devices) Drivers & Programming](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Computer%20(IO%20Devices)%20Drivers%20&%20Programming.md)



## 🎯 System Level Applications Development
↗ [Computer Storage & Database Systems](../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Computer%20Storage%20&%20Database%20Systems.md)
- ↗ [Database Systems](../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
- ↗ [High Performance Storage (HPS)](../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/🚀%20High%20Performance%20Storage%20(HPS)/High%20Performance%20Storage%20(HPS).md)
↗ [Computer Networking and Communication](../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Computer%20Networking%20and%20Communication.md)
- ↗ [Network Programming & RPC](../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
- ↗ [High Performance Network (HPN) & IDC Technologies](../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/🚀%20High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies/High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies.md)
↗ [Computing Methodologies](../../🧠%20Computing%20Methodologies/Computing%20Methodologies.md)
- ↗ [High Performance Computing](../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/High%20Performance%20Computing.md)

↗ [Cloud Operating System & Platform (System Level Engineering)](../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering).md)

↗ [Embedded Programming & Software Development](../../Computer%20Engineering,%20Embedded%20&%20IoT/Embedded%20Programming%20&%20Software%20Development/Embedded%20Programming%20&%20Software%20Development.md)

etc.



## Ref
