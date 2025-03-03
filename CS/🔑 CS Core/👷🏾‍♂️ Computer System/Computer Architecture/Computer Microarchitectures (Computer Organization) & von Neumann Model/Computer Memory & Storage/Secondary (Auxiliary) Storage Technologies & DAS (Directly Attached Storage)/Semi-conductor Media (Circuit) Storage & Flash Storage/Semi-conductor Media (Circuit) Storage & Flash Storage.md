# Semi-conductor Media (Circuit) Storage & Flash Storage

[TOC]



## Res
### Related Topics
↗ [Digital (Logic) Electronics Foundations](../../../../../../Hardware%20&%20EE%20Related%20Theories/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
↗ [Semiconductor Memory Technology & Memory Chips & RAM](../../Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/🪫%20Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM/Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM.md)


### Learning Resources
🎬 https://youtu.be/YtBysgPOKx4?si=yGbvXAb8Ai5n7k5C
How does NAND Flash Work? Reading from TLC : Triple Level Cells || Exploring Solid State Drives

This video is part of a series that intends to thoroughly explain how SSDs, and more specifically how 3D NAND works. These are the episodes in the series: 
- Overview of SSDs and 3D NAND: [How do SSDs Work? | How does your Sma...](https://www.youtube.com/watch?v=5Mh3o886qpg&t=0s)
- Abridged overview of SSDs: [How do SSDs Work?  How to fit 3 WEEKS...](https://www.youtube.com/watch?v=E7Up7VuFd8A&t=0s) 
- How information is written to a cell:[The Engineering Puzzle of Storing Tri...](https://www.youtube.com/watch?v=5f2xOxRGKqk&t=0s)



## Intro
↗ [Semiconductor Memory Technology & Memory Chips & RAM](../../Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/🪫%20Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM/Semiconductor%20Memory%20Technology%20&%20Memory%20Chips%20&%20RAM.md)



## PROM (Programmable Read-Only Memory)



## EPROM (Erasable PROM)



## EEPROM (Electrically Erasable PROM)



## Flash Memory
> 🔗 https://foxsen.github.io/archbase/计算机组成原理和结构.html

闪存（Flash Storage）是一种半导体存储器，它和磁盘一样是非易失性的存储器，但是它的访问延迟却只有磁盘的千分之一到百分之一，而且它尺寸小、功耗低，抗震性更好。常见的闪存有SD卡、U盘和SSD固态磁盘等。与磁盘相比，闪存的每GB价格较高，因此容量一般相对较小。目前闪存主要应用于移动设备中，如移动电话、数码相机、MP3播放器，主要原因在于它的体积较小。闪存在移动市场具有很强的应用需求，工业界投入了大量财力推动闪存技术的发展。随着技术的发展，闪存的价格在快速下降，容量在快速增加，因此SSD固态硬盘技术获得了快速发展。SSD固态硬盘是使用闪存构建的大容量存储设备，它模拟硬盘接口，可以直接通过硬盘的SATA总线与计算机相连。
- 最早出现的闪存被称为**NOR型闪存**，因为它的存储单元与一个标准的或非门很像
- **NAND型闪存**采用另一种技术，它的存储密度更高，每GB的成本更低，因此NAND型闪存适合构建大容量的存储设备。前面所列的SD卡、U盘和SSD固态硬盘一般都是用NAND型闪存构建的。

使用闪存技术构建的永久存储器存在一个问题，即闪存的存储单元随着擦写次数的增多存在损坏的风险。为了解决这个问题，大多数NAND型闪存产品内部的控制器采用地址块重映射的方式来分布写操作，目的是将写次数多的地址转移到写次数少的块中。该技术被称为磨损均衡（Wear Leveling）。闪存的平均擦写次数在10万次左右。这样，通过磨损均衡技术，移动电话、数码相机、MP3播放器等消费类产品在使用周期内就不太可能达到闪存的写次数限制。闪存产品内部的控制器还能屏蔽制造过程中损坏的块，从而提高产品的良率。


### NOR Flash Storage


### NAND Flash Storage
#### V-NAND
> 🎬 https://youtu.be/YtBysgPOKx4?si=yGbvXAb8Ai5n7k5C
> How does NAND Flash Work? Reading from TLC : Triple Level Cells || Exploring Solid State Drives
> 
> This video is part of a series that intends to thoroughly explain how SSDs, and more specifically how 3D NAND works. These are the episodes in the series: 
> - Overview of SSDs and 3D NAND: [How do SSDs Work? | How does your Sma...](https://www.youtube.com/watch?v=5Mh3o886qpg&t=0s)   
> - Abridged overview of SSDs: [How do SSDs Work?  How to fit 3 WEEKS...](https://www.youtube.com/watch?v=E7Up7VuFd8A&t=0s)  
> - How information is written to a cell: [The Engineering Puzzle of Storing Tri...](https://www.youtube.com/watch?v=5f2xOxRGKqk&t=0s)

![](../../../../../../../../Assets/Pics/Screenshot%202024-07-15%20at%209.36.27%20PM.png)
<small>🎬 https://youtu.be/YtBysgPOKx4?si=yGbvXAb8Ai5n7k5C</small>

## Ref
Memory card
