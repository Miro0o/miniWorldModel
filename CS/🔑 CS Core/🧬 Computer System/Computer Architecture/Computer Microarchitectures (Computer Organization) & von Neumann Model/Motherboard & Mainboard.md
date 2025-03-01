# Motherboard & Mainboard

[TOC]



## Res
### Related Topics
↗ [Computer Motherboards](../../../Hardware%20&%20EE%20Related%20Theories/🛠️%20Computer%20System%20Implementations/Computer%20Motherboards/Computer%20Motherboards.md)

↗ [Single-Board Computer (SBC)](../../../../Embedded%20Development,%20Internet%20of%20Things%20&%20Robot/🚟%20Embedded%20Computer%20Systems/🛌%20Single-Board%20Computer%20(SBC)/Single-Board%20Computer%20(SBC).md)
↗ [Systems on Chip (SOC)](Systems%20on%20Chip%20(SOC).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Motherboard

A **motherboard** (also called **mainboard**, **main circuit board**, **MB**, **mboard**, **backplane board**, **base board**, **system board**, **mobo**; or in Apple computers logic board) is the main **printed circuit board (PCB)** in general-purpose computers and other expandable systems. It holds and allows communication between many of the crucial electronic components of a system, such as the central processing unit (CPU) and memory, and provides connectors for other peripherals. Unlike a backplane, a motherboard usually contains significant sub-systems, such as the central processor, the chipset's input/output and memory controllers, interface connectors, and other components integrated for general use.

**Motherboard means specifically a PCB with expansion capabilities**. As the name suggests, this board is often referred to as the mother of all components attached to it, which often include peripherals, interface cards, and daughterboards: sound cards, video cards, network cards, host bus adapters, TV tuner cards, IEEE 1394 cards, and a variety of other custom components.

Similarly, the term **mainboard** describes a device with a single board and no additional expansions or capability, such as controlling boards in laser printers, television sets, washing machines, mobile phones, and other [embedded systems](https://en.wikipedia.org/wiki/Embedded_system "Embedded system") with limited expansion abilities

Motherboard
> Interl, ARM <--> Acorn, [AMD](https://zh.wikipedia.org/wiki/超威半导体) ,[ASUS](https://en.wikipedia.org/wiki/Asus), [GIGABYTE](https://en.wikipedia.org/wiki/Gigabyte_Technology),  
 + ATX, Adcanced Technology eXtended
	 + ATX is a motherboard form factor specification developed by Intel in 1995
		 + BTX: in 2003, Intel announced the BTX standard
		 + [ATX 电源](https://sites.google.com/site/fenghuangsite/dian-nao/ying-jian/atx-dian-yuan-ban-ben-ji-fa-zhan-li-cheng-jie-xi)
			 + [接头](https://www.basemu.com/atx-power-supply-20pin-connector-pinout.html)
			 + ![ATX电源接口定义](https://www.basemu.com/wp-content/uploads/2016/10/ATX-power-supply-all.gif)
		- Micro ATX
			+ Mini ATX, aka ITX
			+ [SATA](https://zh.wikipedia.org/zh-cn/SATA), aka Serial ATA, Serial Advanced Technology Attachment. disk interface. 
			+ > [并发，并行，串行，同步，异步](https://blog.csdn.net/qq_26442553/article/details/78729793): 并发是对事件的描述，并行串行是一种传输方式，同步异步是对通讯方式对描述
			+ PIN 
		+ ![[../../../../../Assets/🗃 Archive/Curriculums/Assets/Screen Shot 2021-09-29 at 14.47.15.png]]
			+ Northbridge
				+ now often integrated into CPU
				+ CPU, RAM, video card
			+ Southbridge
				+ peripherials
			+ **BIOS** (/ˈbaɪɒs, -oʊs/, BY-oss, -⁠ohss; an acronym for **Basic Input/Output System** and also known as the System BIOS, ROM BIOS, BIOS ROM or PC BIOS) is firmware used to perform hardware initialization during the booting process (power-on startup), and to provide runtime services for operating systems and programs.
			+ **[PCI](https://blog.csdn.net/BjarneCpp/article/details/81096619)**, Peripheral Component Interconnect is a **local computer bus** for attaching hardware devices in a computer and is part of the PCI Local Bus standard.
		+ **BUS**
			+ contral bus
			+ address bus
			+ data bus
				+ front side bus, (FSB), connecting CPU and northbridge.



## Ref
[现在主板上没有南桥北桥芯片组了？ - 千古八方的文章 - 知乎]: https://zhuanlan.zhihu.com/p/461982828

以常见的家用Intel桌面版的CPU为例，Intel 10th Gen Core（CPU处理器）通过 495系列芯片组和外围低速设备连接。好了，现在处理低速设备的PCH（旧称南桥芯片组）还是有的，不过已经集成到CPU里了，名字改了功能小变化，承担角色没变。见下图：

![](../../../../../Assets/Pics/Pasted%20image%2020240401150756.png)
<small>上图是10代，下图11代</small>
