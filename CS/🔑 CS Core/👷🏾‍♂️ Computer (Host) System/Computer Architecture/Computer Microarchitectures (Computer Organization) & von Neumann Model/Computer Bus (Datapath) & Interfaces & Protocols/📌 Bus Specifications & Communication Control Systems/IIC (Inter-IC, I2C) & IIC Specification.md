# IIC (Inter-IC, I2C) & IIC Specification

[TOC]



## Res
### Related Topics
↗ [SMBus (System Management Bus)](../System%20Bus/SMBus%20(System%20Management%20Bus).md)


### Learning Resourecs
📂 https://www.i2c-bus.org



## Intro
![](../../../../../../../Assets/Pics/Pasted%20image%2020240327203333.png)

> 🔗 https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html
> 🔗 https://www.i2c-bus.org

The I2C bus was designed by Philips in the early ’80s to allow easy communication between components which reside on the same circuit board. Philips Semiconductors migrated to [NXP](http://www.nxp.com/) in 2006.

The name I2C translates into “Inter IC”. Sometimes the bus is called IIC or I²C bus.

The original communication speed was defined with a maximum of 100 kbit per second and many applications don’t require faster transmissions. For those that do there is a [400 kbit fastmode](https://www.i2c-bus.org/fastmode/) and – since 1998 – a [high speed 3.4 Mbit](https://www.i2c-bus.org/highspeed/) option available. Recently, _[fast mode plus](https://www.i2c-bus.org/fast-mode-plus/)_ a transfer rate between this has been specified.  Beyond this, there is the [ultra fast mode UFM](https://www.i2c-bus.org/ultra-fast-mode-ufm/), but it frankly is no real I2C bus.

I2C is not only used on single boards but also to connect components which are linked via cable. Simplicity and flexibility are key characteristics that make this bus attractive to many applications.


### Brief History of I2C & I2C Specification
在电视机内部电路中，众多功能需要用到许多集成电路IC来实现，包括主控器件微控制器和众多外围设备器件，如：PLL合成器、非易失性存储器、音频处理器、视频处理器、屏幕显示器等。这些器件相互之间要传递数据信息，那么就需要用导线相互连接，如此众多IC器件的互连，势必导致芯片引脚、PCB走线以及连接导线变得数量庞大，错综复杂，这会导致IC芯片体积增大、功耗增大、成本增加，给IC芯片设计制造厂商带来不利影响，同时也给IC芯片应用厂商和应用工程师们造成极大不便。

1982年，从事电灯泡、电剃刀、电唱机、收音机、电视机等研发制造已久的荷兰飞利浦公司，为解决电视机的上述问题，从而发明了一种集成电路互连通信电路，该电路的优点就是仅用两条线就可以实现芯片之间的互连通信，使硬件电路最简化，硬件效益最大化，给芯片设计制造者和芯片应用者带来极大益处。

飞利浦公司给这种集成电路互连通信电路命名为Inter-Integrated Circuit，简称为Inter-IC，或I2C（数字“2”为上标）。

Philips公司发明I2C-bus后，一方面，利用该项技术，研发出许多带有I2C-bus功能的芯片。这些带有I2C-bus功能的芯片，一部分用于自己使用，一部分出售给其他芯片应用厂商；另一方面，将I2C-bus专利技术授权提供给其他芯片制造厂商，获得专利技术授权的其他芯片制造厂商把该项技术应用集成到自家的芯片中，使自家的芯片也具有I2C-bus功能。

Philips公司无论是对外出售I2C-bus芯片，还是对外出售I2C-bus专利技术，都要同时对外提供一套完整的技术文档和应用细则，使得具有I2C-bus功能的器件有一个统一的标准，这就是I2C总线规范（I2C-bus Specification）。

最初，I2C 总线规范由飞利浦半导体公司编写。后来被IEEE（电气电子工程师协会）引用采纳，成为全世界的行业标准。2016年， Philips（飞利浦）公司旗下的半导体事业部独立成为一个新公司，取名NXP（恩智浦）公司，NXP（恩智浦）公司现在是I2C总线规范的利益相关者。

自2006年10月10日起，I2C原始专利已过期，因此I2C总线可以自由使用，不需要支付专利费，但制造商获取NXP分配的I²C从设备地址仍然需要付费。

2017年由MIPI联盟推出的I3C规范，NXP参与并做出了贡献。MIPI I3C提供了与I2C的向后兼容性、更高的速度和更低的功耗，并且提供了免版税版本。

I2C总线是一种全世界遵循的行业标准，目前已在50多家公司生产的1000多种不同IC中应用实施。此外，通用的I2C总线用于各种控制体系结构，如系统管理总线（SMBus）、电源管理总线（PMBus）、智能平台管理接口（IPMI）、显示数据通道（DDC）和高级电信计算体系结构（ATCA）。


### I2C Introduction
如图1-9，在I2C电路中，多个主机器件和从机器件之间通信时只需要用到两根导线互连，这两根导线分别为串行数据线（SDA）和串行时钟线（SCL）。

![|600](../../../../../../../Assets/Pics/Pasted%20image%2020240327203351.png)
<small>图1-9  I2C Bus 连线示意图</small>

如图1-9，所有主从器件的SDA线全部连在一根线上，这些器件分时占用这根公共数据线，来实现两两互传数据，那么SDA符合了数据总线的特征；所有主从器件的SCL线全部连在一根线上，它们分时占用这根公共时钟线，来实现两两互传时钟，那么SCL符合了时钟总线的特征。

因为I2C中的两根导线（SDA和SCL）构成了两根Bus，实现了Bus的功能；由于I2C电路能实现Bus的功能，故把I2C 电路称为 I2C-bus，中文叫I2C总线（I2C总线是一个两线总线）。


### Features of I2C Bus
![](../../../../../../../Assets/Pics/Pasted%20image%2020240327195618.png)

Most significant features include:
- Only two bus lines are required
- No strict baud rate requirements like for instance with RS232, the master generates a bus clock
- Simple master/slave relationships exist between all components Each device connected to the bus is software-addressable by a unique address
- I2C is a true [multi-master](https://www.i2c-bus.org/MultiMaster/) bus providing arbitration and collision detection

I2C具有如下特点：
1. 只需要两条总线；串行数据线(SDA)和串行时钟线(SCL)。
2. 连接到总线的每个设备都是可通过唯一地址进行软件寻址的，并且始终存在简单的控制器/目标关系；控制器可以作为控制器发送器或控制器接收器运行。
3. 这是一种真正的多控制器总线，包括冲突检测和仲裁，以防止两个或更多控制器同时启动数据传输时出现数据损坏。
4. 面向8位的串行双向数据传输速率在标准模式下最高可达100 kbit/s，在快速模式下最高可达400 kbit/s，在快速增强模式下最高可达1 Mbit/s，在高速模式下最高可达3.4 Mbit/s。
5. 串行、面向8位、单向数据传输，在超快速模式下最高可达5 Mbit/s。
6. 片内滤波可抑制总线数据线上的尖峰信号，以保持数据完整性。
7. 可以连接到同一总线的IC数量仅受最大总线电容的限制。在某些条件下（如简化SCL时钟频率、增加输出驱动力、增加缓冲器件、改进上拉电阻等），可以允许更大的电容。
8. 极低的电流消耗，高抗扰度，宽电源电压范围，宽工作温度范围。
9. 硬件的最简化，给芯片设计师减轻了节省输出引脚的压力，给芯片应用商带来了成本降低、空间减小、测试方便、易于升级等诸多好处，为芯片应用工程师的产品开发带来灵活多样的选择方案、方便快捷的调试手段、开发周期的缩短、开发效率的提高等好处



## Ref
[👍 彻底搞懂I2C总线（一）什么是I2C？什么是总线？什么是I2C总线？什么是I2C标准？I2C总线特点？I2C标准发展历史？ | cnblog]: https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html

I2C总线是一种全世界遵循的行业标准，目前已在50多家公司生产的1000多种不同IC中应用实施。此外，通用的I2C总线用于各种控制体系结构，如系统管理总线（SMBus）、电源管理总线（PMBus）、智能平台管理接口（IPMI）、显示数据通道（DDC）和高级电信计算体系结构（ATCA）

[👍 彻底搞懂I2C总线（2）标准模式_快速模式_快速增强模式下的I2C通信协议 | cnblog]: https://www.cnblogs.com/deliweier-wangshuping/p/16228208.html

