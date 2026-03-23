# Computer Bus (Datapath) & Interfaces & Protocols

[TOC]



## Res
### Related Topics
↗ [Computer Network Layering Architecture](../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/Computer%20Network%20Layering%20Architecture.md)
- ![](../../../../../../Assets/Pics/Screenshot%202023-03-27%20at%2010.17.56%20AM.png)
↗ [0x06 Data Link Layer](../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/0x06%20Data%20Link%20Layer.md)
↗ [0x07 Physical Layer](../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x07%20Physical%20Layer/0x07%20Physical%20Layer.md)
↗ [Expansion Bus (Ports & Computer Bus Interfaces)](🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces).md)

↗ [Computer Interfaces & Hardware Drivers](../../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Interfaces%20&%20Hardware%20Drivers.md)
↗ [Computer IO System & Device Management](../Computer%20IO%20System%20&%20Device%20Management/Computer%20IO%20System%20&%20Device%20Management.md)
↗ [Reliable Data Transfer (RDT)](../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/Reliable%20Data%20Transfer%20(RDT)/Reliable%20Data%20Transfer%20(RDT).md)

↗ [Motherboard & Mainboard](../Motherboard%20&%20Mainboard.md)
↗ [Systems on Chip (SoC)](../🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/Systems%20on%20Chip%20(SoC).md)



## Overview
> 🔗 https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html

在计算体系结构中， 总线（Bus）是计算机内部组件之间或计算机之间传送信息的公共通信干线，它是由导线组成的传输路径。

总线（Bus）是一种电路，它是cpu、RAM、ROM、输入、[输出等设备](https://baike.baidu.com/item/%E8%BE%93%E5%87%BA%E8%AE%BE%E5%A4%87/10823333)传递信息的公用通道，充当数据在计算机内传输的高速公路。

![](../../../../../../Assets/Pics/Pasted%20image%2020240327195814.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%206.57.41%20PM.png)

----
> 🔗 https://foxsen.github.io/archbase/计算机总线接口技术.html

计算机内部包含的多个部件往往是由不同的公司生产的。为了让这些不同的部件组合在一起可以正常工作，必须制定一套大家共同遵守的规格和协议，这就是接口或者总线。按照中文的含义，接口是指两个对象连接的部分，而总线是指对象之间传输信息的通道。**本文对接口和总线的概念不做语义上的区分，因为使用某种接口，必然需要使用与之相对应的总线；而总线也必然离不开接口，否则就无法使用。** 本文使用总线时，也包含与之相对应的接口；使用接口时，也包含与之相对应的总线。比如，提到USB时，既包含USB总线，也包含USB接口。

总线的本质作用是完成数据交换。总线用于将两个或两个以上的部件连接起来，使得它们之间可以进行数据交换，或者说通信。总线含义很广，它不仅仅是指用于数据交换的通道，有时也包含了软件硬件架构。比如PCI总线、USB总线，它们不仅仅是指主板上的某个接口，还包含了与之相对应的整套硬件模型、软件架构。

==总线的含义可以分为以下几个层级：==
1）**机械层**。接口的外形、尺寸、信号排列、连接线的长度范围等。
2）**电气层**。信号描述、电源电压、电平标准、信号质量等。
3）**协议层**。信号时序、握手规范、命令格式、出错处理等。
4）**架构层**。硬件模型、软件架构等。

==不同的总线包含的内容也有所不同，有的总线包含以上所有的层级，有的总线可能只包含部分层级。==

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020240422152104.png)
<small>Example: Storage Bus, Interface, and Protocol</small>

总线技术的应用简化了计算机的设计，使得人们可以专注于部件的开发，促进了分工合作。计算机在发展过程中，形成了各种各样的总线，有些总线发展为行业标准，有专门的组织和结构去制定规范，有些总线虽然没有明文规定，却也成为事实上的标准。这些总线，有的已经逐渐消失，有的还在不断演进。随着计算机产业的发展，未来还会不断出现新的总线。计算机总线的发展趋势是：内部化、串行化和统一化。随着集成电路行业器件集成度的不断提高，越来越多的功能被集成到单个芯片中，因此许多外部总线逐渐被内部化。串行总线由于占用的引脚个数少，总线速度高，因此逐渐替代并行总线成为主流。在市场竞争中，由于马太效应，不同设备的接口逐渐向少数几种总线标准集中，特别是在消费电子领域，USB接口逐渐成为IO设备的标准接口，总线接口越来越统一化。

---
🔗 https://en.wikipedia.org/wiki/Bus_(computing)#External_links

![](../../../../../../Assets/Pics/Screenshot%202024-04-22%20at%2011.00.41%20PM.png)

In computer architecture, a **bus** (historically also called **data highway** or **databus**) is a communication system that transfers data between components inside a computer, or between computers. This expression covers all related hardware components (wire, optical fiber, etc.) and software, including communication protocols.


### Features of Bus
> 🔗 https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html

Bus（总线）具有以下特点：
1. 总线是一种电路，是多于两个器件互连的传输电信号的导线；是多于两个器件共同使用的公共线路。
2. 一根导线可以构成一根总线，一根总线只有一根导线；多根导线就构成多根总线，相同作用的多根总线，可称之为一组总线。
3. 总线连接的器件，必须多于两个，其中不少于一个主机，也就是必须是一主多从、多主一从以及多主多从（只有两个器件的互连线不能成为总线）。
4. 总线通信时，无论是主机器件还是从机器件，同一个时刻，只能有一个器件占用并控制总线对外发送数据，一个器件从外接收数据，也就是一发一收的模式进行数据传输（某些广播信息、握手协议等可以一发多收）。
5. 总线能简化硬件，如简化芯片的引脚数量，简化导线的数量，简化布线空间等；从而能节约成本、提高性能。
6. 构成总线的导线可以是常规导线及线束、印刷电路板上的铜走线、以及硅芯片内部的微小走线等导体。

国外把总线命名为“Bus”而非“Car”，是有其道理的。总线命名为“Bus”，真的非常贴切，总线好比公交车一样，人们可以通过坐公交车到达城市的各个地方，人就如电信号，汽车内部容纳人的座位就如导线，只有一个座位的公交车就如只有一根导线构成的总线，多个座位的公交车就如多根导线构成的一组总线，人们可以分时轮流占用一个座位，但同一个时刻不能有两个及以上的人坐在同一个座位上。

为方便记忆，德力威尔王术平(😅)用八个字来刻画总线的本质：**一线多连**，**轮流占用**。


### One-wire Bus
> 🔗 https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html

![](../../../../../../Assets/Pics/Pasted%20image%2020240327195901.png)
<small>1-Wire总线（BUS）示意图</small>

如上图所示的1-Wire总线中，仅用一根线将MCU和N个温度传感器连接起来，就构成了一个单线总线。

主控器件MCU通过一根线分别和N个传感器设备传输信息，每个传感器分时轮流占用并控制这根线和MCU通信，也就是说，同一个时刻，只能有一个传感器设备占用总线，其它传感器设备必须排队，分时轮流占用控制，不能有两个及以上的传感器设备同时占用控制总线。

从上图中，我们可以总结出Bus的一些特点：
1. 一根线供两个以上的器件共同使用；
2. 一根总线由一根导线构成；
3. 总线连接的器件，必须多于两个，其中不少于一个主机，也就是必须是一主多从、多主一从以及多主多从；
4. 总线通信时，无论是主机器件还是从机器件，同一个时刻，只能有一个器件占用并控制总线对外发送数据，一个器件从外接收数据，也就是一发一收的模式进行数据传输（某些广播信息、握手协议等可以一发多收）。


### Multi-wire Bus
> 🔗 https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html

![](../../../../../../Assets/Pics/Pasted%20image%2020240327200211.png)
<small>图1-6 多根导线构成一组总线（来源：德力威尔实训案例）</small>

一根导线把每个器件相对应的某个数据引脚都连在一起，因此这根导线就成为了一根数据线；所有器件都分时轮流占用并控制这根数据线来传输数据，因此这根数据线就成为了一根数据总线；像这样的数据线有多根，多根数据线构成多根数据总线，多个数据总线被称之为一组（束）数据总线（如图1-6）。

一根导线把每个器件相对应的某个地址引脚都连在一起，因此这根导线就成为了一根地址线；所有器件都分时轮流占用并控制这根地址线来传输地址，因此这根地址线就成为了一根地址总线；像这样的地址线有多根，多根地址线构成多根地址总线，多个地址总线被称之为一组（束）地址总线（如图1-6）。

一根导线把每个器件相对应的某个控制引脚都连在一起，因此这根导线就成为了一根控制线；所有器件都分时轮流占用并控制这根控制线来传输控制信号，因此这根控制线就成为了一根控制总线；像这样的控制线有多根，多根地控制线构成多根控制总线，多个控制总线被称之为一组（束）控制总线（如图1-6）。

![](../../../../../../Assets/Pics/Pasted%20image%2020240327200246.png)
<small>图1-7计算机中的总线连接示意图</small>

在图1-7中，计算机的中央处理器CPU要实现对存储器、显示器、键盘、鼠标、硬盘等外围设备的控制和管理，就必须用导线将它们互相连接起来，但这些互连导线是有严格规定的。

中央处理器和外围设备所有数据线全部连接在一组线上，所有的地址线全部连在一组线上，所有控制线全部连在一组线上，这就构成了数据总线、地址总线和控制总线，这三路总线是相互独立的。

每一个外围设备分时轮流占用数据总线和中央处理器进行数据传输；也就是说，同一个时刻，只能有一个外围设备占用数据总线与中央处理器传输数据，其他外围设备必须排队，分时轮流使用，不能有两个及以上的外围设备同时占用数据总线。

每一个外围设备分时轮流占用地址总线和中央处理器进行地址传输；也就是说，同一个时刻，只能有一个外围设备占用地址总线与中央处理器传输地址，其他外围设备必须排队，分时轮流使用，不能有两个及以上的外围设备同时占用地址总线。

每一个外围设备分时轮流占用控制总线和中央处理器进行控制信号传输；也就是说，同一个时刻，只能有一个外围设备占用控制总线与中央处理器传输控制信号，其他外围设备必须排队，分时轮流使用，不能有两个及以上的外围设备同时占用控制总线。



## 🎯 Types of Bus
### Buses By Directions
> 🔗 https://foxsen.github.io/archbase/计算机总线接口技术.html

按照数据传递的方向，总线可以分为单向总线和双向总线。单向总线是指数据只能从一端传递到另一端，而不能反向传递。单向总线也称为单工总线。双向总线是指数据可以在两个方向上传递，既可以从A端传递到B端，也可以从B端传递到A端。双向总线也称为双工总线。双工总线又可分为半双工总线和全双工总线。半双工总线是指在一个时间段内，数据只能从一个方向传送到另一个方向，数据不能同时在两个方向传递。全双工总线是指数据可以同时在两个方向传递。全双工总线包含两组数据线，分别用于两个方向的数据传输。


### Buses By Signal Transmission
> 🔗 https://foxsen.github.io/archbase/计算机总线接口技术.html

按照总线使用的信号类型，总线可以分为并行总线和串行总线。并行总线包含多位传输线，在同一时刻可以传输多位数据，而串行总线只使用一位传输线，同一时刻只传输一位数据。并行总线的优点在于相同频率下总线的带宽更大，但正因为采用了同一时刻并行传输多位数据的方法，必须保证多位数据在同一时刻到达。这样就会对总线的宽度和频率产生限制，同时也对主板设计提出了更高的要求。与并行总线相反，一般串行总线只使用一位传输线，同一时刻只能传输一位数据，而且使用编码的方式将时钟频率信息编码在传输的数据之中。因此，串行总线的传输频率可以大大提升。PCI总线、DDR总线等都是传统的并行总线，而USB、SATA、PCIE等都是串行总线。以串行总线传输方式为基础，使用多条串行总线进行数据传输的方式正在被广泛采用。以PCIE协议为例，PCIE的接口规范中，可以使用x1、x4、x8、x16等不同宽度的接口，其中，x16就是采用16对串行总线进行数据传输。多位串行总线与并行总线的根本差别在于，多位串行总线的每一个数据通道都是相对独立传输的，它们独立进行编解码，在接收端恢复数据之后再进行并行数据之间的对齐。而并行总线使用同一个时钟对所有的数据线进行同时采样，因此对数据传输线之间的对齐有非常严格的要求。


### Buses By Functions /Signals Types

![](../../../../../../../Assets/Pics/Screenshot%202023-03-05%20at%2010.19.55%20AM.png)

![](../../../../../../../Assets/Pics/Pasted%20image%2020230302132111.png)
#### 1️⃣ Address Bus
Address lines indicate the location (e.g., in memory) that the data should be either read from or written to.
#### 2️⃣ Data Bus
These data lines contain the actual information that must be moved from one location to another.

The number of data lines is the **width of the bus (总线宽度)**
#### 3️⃣ Control Bus
Control lines indicate which device has permission to use the bus and for what purpose (reading or writing from memory or from an input/output [I/O] device, for example). Control lines also transfer acknowledgments for bus requests, interrupts, and clock synchronization signals


### Buses By Location
按照总线在计算机系统中所处的物理位置，总线可以分为片上总线、内存总线、系统总线和设备总线。

> 🤖 ChatGPT 5

Analogy
- **Internal bus (On-chip bus)** = driveway inside CPU
- **Expansion buses** = all roads leading into downtown (CPU) of the city (motherboard).
- **Local bus** = express lanes on the highway go straight into downtown (CPU) with no detours, for important guests (GPU, NVMe).
	- local bus is a subtype of expansion buses
- **Memory bus** = CPU's private driveway from memory (RAM) to CPU.
	- From a _literal viewpoint_: yes, memory bus is also a “local” connection to the CPU.
	- From a _technical vocabulary viewpoint_: **memory bus ≠ local bus**, because the term “local bus” is reserved for **peripheral expansion paths**.
#### 1️⃣ Internal Bus (On-Chip Bus)｜片上总线
> ↗ [Internal Bus (On-Chip Bus)](Internal%20Bus%20(On-Chip%20Bus)/Internal%20Bus%20(On-Chip%20Bus).md)

The internal bus connects the CPU, memory, and all other internal components
#### 2️⃣ Expansion Bus | 设备总线
> ↗ [Expansion Bus (Ports & Computer Bus Interfaces)](🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces).md)

External buses connect external devices, peripherals, expansion slots, and I/O ports to the rest of the computer.
##### 3️⃣ Local Bus | 系统总线
> ↗ [Local Bus](🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/🚌%20Local%20Bus/Local%20Bus.md)

Data buses that connect a peripheral device **directly to the CPU**.

A local bus is the pathway between the CPU, memory and peripheral controller chips. The term was popular in the early 1990s with the introduction of the VESA local bus (see [VL-bus](https://www.pcmag.com/encyclopedia/term/vl-bus)).

![](https://i.pcmag.com/imagery/encyclopedia-terms/local-bus-localbus.fit_lim.size_1024x.gif)
<small>https://www.pcmag.com/encyclopedia/term/local-bus</small>
#### 4️⃣ Memory Bus | 内存总线

#### Other Buses
↗ [Backplane Bus](Other%20Buses/Backplane%20Bus.md)



## Specifications of Bus
### Bus Clock & Bus Cycle
> ⚠ 
> Generally, when we mention the clock, we are referring to the **system clock** or the **master clock** that regulates the CPU and other components. 
> 
> However, certain buses also have their own clocks. **Bus clocks** are one of them. ==Bus clocks are usually slower than CPU clocks, causing bottleneck problems.==


### ⏰ Synchronous Bus
Synchronous buses are clocked, and things happen only at the clock ticks (a sequence of events is controlled by the clock).

Every device is synchronized by the rate at which the clock ticks, or the clock rate. The bus cycle time mentioned is the reciprocal of the bus clock rate.
#### Clock Skew (drift in the clock)
Because the clock controls the transactions, any clock skew (drift in the clock) has the potential to cause problems, implying that the bus must be kept as short as possible so the clock drift cannot get overly large. 

In addition, the bus cycle time must not be shorter than the length of time it takes information to traverse the bus. The length of the bus, therefore, imposes restrictions on both the bus clock rate and the bus cycle time.


### 👋🏻 Asynchronous Bus
#### C/S Architecture (Client/Server, Master/Slave)
Quite often, devices are divided into master and slave categories; a master device is one that initiates actions, and a slave is one that responds to requests by a master.
##### Other Architectures
> A bus can be point-to-point, connecting two specific components (as seen in Figure 4.1a). Or it can be a common pathway that connects a number of devices, requiring these devices to share the bus (referred to as a multipoint bus and shown in Figure 4.1b).
#### Bus Protocols
#### 🏁 Bus Arbitration
**In a very simple system (such as the one we present in the next section), the processor is the only device allowed to become a bus master**. This is good in terms of avoiding chaos, but bad because the processor now is involved in every transaction that uses the bus.

**In systems with more than one master device, bus arbitration is required**. Bus arbitration schemes must provide priority to certain master devices and, at the same time, make sure lower-priority devices are not starved out.
##### ⭐️ Bus Arbitration Schemes
> ↗ [Multiple Access Links & Protocols](../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/📢%20Broadcast%20Channels/Multiple%20Access%20Links%20&%20Protocols/Multiple%20Access%20Links%20&%20Protocols.md)

1. **Daisychain arbitration**: This scheme uses a “grant bus” control line that is passed down the bus from the highest-priority device to the lowest-priority device. (Fairness is not ensured, and it is possible that low-priority devices are “starved out” and never allowed to use the bus.) This scheme is simple but not fair.
2. **Centralized parallel arbitration**: Each device has a request control line to the bus and a centralized arbiter that selects who gets the bus. Bottlenecks can result from using this type of arbitration.
3. **Distributed arbitration using self-selection**: This scheme is similar to centralized arbitration, but instead of a central authority selecting who gets the bus, the devices themselves determine who has the highest priority and who should get the bus.
4. **Distributed arbitration using collision detection**: Each device is allowed to make a request for the bus. If the bus detects any collisions (multiple simultaneous requests), the device must make another request. (==Ethernet uses this type of arbitration==. ↗ [CSMA with Collision Detection (CSMA-CD)](../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/📢%20Broadcast%20Channels/Multiple%20Access%20Links%20&%20Protocols/Random%20Access%20Protocols/Carrier%20Sense%20Multiple%20Access%20(CSMA)/CSMA%20with%20Collision%20Detection%20(CSMA-CD)/CSMA%20with%20Collision%20Detection%20(CSMA-CD).md) )



## I/O Buses Operation
### Timing Diagrams
![](../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%206.26.42%20PM.png)



## Ref
[👍 彻底搞懂I2C总线（一）什么是I2C？什么是总线？什么是I2C总线？什么是I2C标准？I2C总线特点？I2C标准发展历史？ | cnblog]: https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html


[👍 SSD中，SATA、m2、PCIE和NVME各有什么意义呢？ - 褚道长的回答 - 知乎]: https://www.zhihu.com/question/48972075/answer/521468195

M.2,U.2,AIC 是物理规格，像是 公路，铁路。

PCIe，SATA，SAS 是 模拟高速接口，像是 县道，省道，高速这样。速率上限不同

SCSI，ATA，NVMe 是传输层协议，命令集。就是跑在路上面的小车，只是有 跑车 和 面包车 之分。

所以，如果要买SSD的话，不是只看 M.2就完事了 ，得分清了 是 SATA 的，还是 NVMe 的，看看主板支持的到底是哪种。否则，买回来的东西可能会用不了！
