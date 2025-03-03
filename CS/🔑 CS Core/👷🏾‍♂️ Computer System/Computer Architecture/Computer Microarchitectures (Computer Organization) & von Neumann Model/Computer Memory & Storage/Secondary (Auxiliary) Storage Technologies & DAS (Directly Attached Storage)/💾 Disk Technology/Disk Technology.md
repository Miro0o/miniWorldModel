# Disk Technology

[TOC]



## Res
### Related Topics
↗ [Disk Scheduling](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering)/Disk%20Scheduling/Disk%20Scheduling.md)
↗ [HDD Scheduling Policies](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering)/Disk%20Scheduling/Disk%20Scheduling%20with%20HDD/HDD%20Scheduling%20Policies.md)



## Intro
### Disk Interfaces
↗ [Disk Buses & Interfaces](../../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Slot%20(Internal%20Bus)/📌%20Disk%20Buses%20&%20Interfaces/Disk%20Buses%20&%20Interfaces.md)


### Disk Media
#### Magnetic Disk
#### Solid State Disk
#### Optical Disks



## Disk Drives
### 1️⃣ Rigid Disk Drives (HDD, Hard Disk Drive)
#### HDD Structures
![|400](../../../../../../../../../Assets/Pics/Pasted%20image%2020230619155434.png)

- Disk tracks are numbered from the outside edge, starting with zero
- Data blocks resides in the secters.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.01.49%20PM.png)
#### 💨 Performance Metrics
##### 1️⃣ Access Time: Seek Time + Rotational Delay
**Seek time**: the time that it takes for a disk arm to move into position over the desired cylinder

**Rotational delay :** is the time that it takes for the desired sector to move into position beneath the read/write heads.
##### 2️⃣ Mean Time To Failure (MTTF)
**MTTF**: is a statistically-determined value often calculated experimentally, e.g., 300,000 hours. It usually doesn't tell us much about the actual expected life of the disk. Design life is usually more realistic.
#### HDD Characteristics
- Low cost is the major advantage of hard disks
- But their limitations include:
	- Very slow compared to main memory
	- Fragility
	- Moving parts wear out


### 2️⃣ Solid State Drives (SSD)
- ﻿﻿Reductions in memory cost enable the widespread adoption of solid state drives（固态硬盘），SSDs.
	- ﻿﻿SSDs store data in non-volatile flash memory circuits.
	- Flash memory is also found in memory sticks (记忆棒) and MP3 players.

SSD access time is typically 100 times faster than magnetic disk, but slower than RAM by a factor of usually 100,000.
- ﻿﻿The number varies widely among manufacturers and interface methods.

﻿﻿Unlike RAM, flash is block-addressable (like disk drives).
- ﻿﻿The bit cells of flash storage wear out after 30,000 to 1,000,000 updates to a page.
- ﻿﻿Updates are spread over the entire medium through wear leveling (磨损平衡) to prolong the life of the SSD.
#### Enterprise SSDs
﻿﻿Enterprise SSDs must maintain the highest degree of performance and reliability.
#### 💨 Performance Metrics
SSD specifications share many common metrics with HDDs.

The Joint Electron Devices Engineering Council (JEDEC) sets standards for SSD performance and reliability metrics. The most important are:
##### 1️⃣ Unrecoverable Bit Error Ratio (UBER)
UBER is a measure of **disk reliability** 
UBER is calculated by dividing the number of data errors by the number of bits read, using a simulated lifetime workload.
##### 2️⃣ Terabyte Written (TBW)
TBW is a measure of **disk endurance (service life)**
TBW is the number of terabytes that can be written to the disk before the disk fails to meet specifications for speed and error rates.



## RAID
↗ [RAID (Redundant Array of Independent Disks)](RAID%20(Redundant%20Array%20of%20Independent%20Disks).md)


## Ref
