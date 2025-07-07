# RAID (Redundant Array of Independent Disks)

[TOC]



## Res


## Intro
### RAID Background
In the 30 years following the introduction of IBM’s RAMAC computer, only the largest computers were equipped with disk storage systems. Early disk drives were enormously costly and occupied a large amount of floor space in proportion to their storage capacity. They also required a strictly controlled environment: Too much heat would damage control circuitry, and low humidity caused static buildup that could scramble the magnetic flux polarizations on disk surfaces. Head crashes, or other irrecoverable failures, took an incalculable toll on business, scientific, and academic productivity. A head crash toward the end of the business day meant that all data input had to be redone to the point of the last backup, usually the night before.

Clearly, this situation was unacceptable and promised to grow even worse as everyone became increasingly reliant on electronic data storage. A permanent remedy was a long time coming. After all, weren’t disks as reliable as we could make them? It turns out that making disks more reliable was only part of the solution.


### RAID
In their 1988 paper, “A Case for Redundant Arrays of Inexpensive Disks,” David Patterson, Garth Gibson, and Randy Katz of the University of California at Berkeley coined the acronym RAID. They showed how **mainframe disk systems** could realize both reliability and performance improvements if they would employ some number of “inexpensive” small disks (such as those used by microcomputers) instead of the **single large expensive disks (SLEDs)** typical of large systems. Because the term inexpensive is relative and can be misleading, the proper meaning of the acronym is now generally accepted as **redundant array of independent disks(RAID)**.

In their paper, Patterson, Gibson, and Katz defined **five types (called levels) of RAID**, each having different performance and reliability characteristics. These original levels were numbered 1 through 5. Definitions for RAID levels 0 and 6 were later recognized. Various vendors have invented other levels, which may in the future become standards also. These are usually combinations of the generally accepted RAID levels. In this section, we briefly examine each of the seven RAID levels as well as a few hybrid systems that combine different RAID levels to meet particular performance or reliability objectives.

Every vendor of enterprise-class storage systems offers at least one type of RAID implementation. But not all storage systems are automatically protected by RAID. Those systems are often referred to as **just a bunch of disks (JBOD).**



## RAID Schemes
> NOTE: Higher RAID levels do not necessarily mean better RAID levels. It all depends upon the needs of the applications that use the disks.

### RAID Level 0 (RAID-0)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.31.05%20PM.png)


### RAID Level 1 (RAID-1)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.32.22%20PM.png)


### RAID Level 2 (RAID-2)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.33.07%20PM.png)


### RAID Level 3 (RAID-3)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.34.14%20PM.png)


### RAID Level 4 (RAID-4)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.34.56%20PM.png)


### RAID Level 5 (RAID-5)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.35.07%20PM.png)


### RAID Level 6 (RAID-6)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.35.20%20PM.png)


### RAID DP
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%207.35.30%20PM.png)

- ﻿﻿Like RAID 6, RAID DP can tolerate the loss of two disks.
- ﻿﻿The use of simple parity functions provides RAID DP with better performance than RAID 6.
- Of course, because two parity functions are involved, RAID DP's performance is somewhat degraded from that of RAID 5.


#### RAID DP & Naming Methods
A relatively new RAID technique employs a pair of parity blocks that protect overlapping sets of data blocks. This method goes by different names depending on the drive manufacturer (there are slight differences among the implementations). 

The most popular name at this writing seems to be double parity RAID (RAID DP). Others that crop up in the literature include 
1. EVENODD
2. diagonal parity RAID (also RAID DP)
3. RAID 5DP
4. advanced data guarding RAID (RAID ADG)
5. and—**erroneously!**—RAID-6.



## Hybrid RAID Schemes
Large systems consisting of many drive arrays may employ various RAID levels, depending on the criticality of the data on the drives.
- ﻿﻿A disk array that provides program workspace (say for file sorting) does not require high fault tolerance.
- ﻿﻿Critical, high-throughput (高通量) files can benefit from combining RAID O with RAID 1, called RAID 10.
- ﻿﻿RAID 50 combines striping and distributed parity. For good fault tolerance and high capacity.



## (Berkeley) RAID Nomenclature
After reading the foregoing sections, it should be clear to you that ==higher-numbered RAID levels are not necessarily “better” RAID systems.== Nevertheless, many people have a natural tendency to think that a higher number of something is always better than a lower number of something. For this reason, various attempts have been made to reorganize and rename the RAID systems that we have just presented.

We have chosen to retain the **“Berkeley” nomenclature** in this text because it is still the most widely recognized.



## RAID Schemes Summary & Comparison
![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-16%20at%203.10.11%20PM.png)


![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-16%20at%204.10.40%20PM.png)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-16%20at%204.10.51%20PM.png)


## Ref
[RAID 0 (disk striping) | TechTarget]: https://www.techtarget.com/searchstorage/definition/RAID-0-disk-striping

[RAID Types and Comparisons]: https://community.appdynamics.com/t5/Knowledge-Base/RAID-Types-and-Comparison/ta-p/28828

[👍 RAID2 与汉明码]: http://www.dostor.com/p/1569.html

![](http://www.dostor.com/STOR_IMAGES/2005-12-13/5212.jpg)

[👍 RAID 介绍]: https://yanhang.me/post/2015-01-25-raid/