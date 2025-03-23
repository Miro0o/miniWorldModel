# Channel IO

[TOC]



## Res


## Intro
- ﻿﻿Very large systems employ channel I/O.
- ﻿﻿1/O channels are driven by small CPUs called **I/O processors (IOPs),** which are optimized for 1/O and can control various channel paths.
- ﻿﻿Slower devices such as terminals and printers are combined/multiplexed (复用) into a single faster channel.
- ﻿﻿On IBM mainframes (大型机), multiplexed channels are called multiplexor channels(多路复用器通道).


### IOP (I/O Processer)
Channel 1/O is distinguished from DMA by the intelligence of the IOPs.

Unlike DMA circuits, IOPs have the ability to execute programs that include arithmetic-logic and branching instructions.

The IOP negotiates protocols, issues device commands, translates storage coding to memory coding, and can transfer entire files or groups of files independent of the host CPU.

The host has only to create the program instructions for the l/O operation and tell the IOP where to find them.


![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%205.03.47%20PM.png)


## Ref

