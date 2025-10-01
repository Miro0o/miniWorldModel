# USB (Universal Serial Bus)

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/USB

**Universal Serial Bus** (**USB**) is an industry standard that specifies the physical interfaces and protocols for connecting, data transferring and powering of hosts, such as [personal computers](https://en.wikipedia.org/wiki/Personal_computer "Personal computer"), [peripherals](https://en.wikipedia.org/wiki/Peripheral "Peripheral"), e.g. keyboards and mobile devices, and intermediate hubs.

As of 2023, USB consists of four generations of specifications: [USB 1.‘‘x’’](https://en.wikipedia.org/wiki/USB#USB_1.x), [USB 2.0](https://en.wikipedia.org/wiki/USB#USB_2.0), [USB 3.‘‘x’’](https://en.wikipedia.org/wiki/USB_3.0 "USB 3.0"), and [USB4](https://en.wikipedia.org/wiki/USB4 "USB4"). Since USB4 the specification enhances the data transfer and power supply functionality with connection-oriented, tunneling architecture designed to combine multiple protocols onto a single physical interface, so that the total speed and performance of the USB4 Fabric can be dynamically shared.

USB connector interfaces are classified into three types: A (host), B (peripheral), and C (2014, replaces A and B). The A and B types know different sizes: Standard, Mini, and Micro. The standard size is the largest and is mainly used for desktop and larger peripheral equipment. The mini size was introduced for mobile devices, but it was replaced by the thinner micro size. The micro size is nowadays the most common for smartphones and tablets. The [USB Type-C](https://en.wikipedia.org/wiki/USB_Type-C "USB Type-C") connector interface is the newest and the only one applicable to USB4. It is reversible and _can_ support various functionalities and protocols; some are mandatory, many just optional, and depending on the type of the device: host, peripheral device, or hub.

> 🔗 https://wiki.sipeed.com/soft/maixpy/zh/get_started/uart.html

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240309155629.png)

- USB 串口的特点
    1. 可以热插拔。就是用户在使用外接设备时，不需要关机再开机等动作，而是在电脑工作时，直接将 USB 插上使用。
    2. 携带方便。USB 设备大多以“小、轻、薄”见长，对用户来说，随身携带大量数据时，很方便。当然USB硬盘是首要之选了。
    3. 标准统一。大家常见的是 IDE 接口的硬盘，串口的鼠标键盘，并口的打印机扫描仪，可是有了USB之后，这些应用外设统统可以用同样的标准与个人电脑连接，这时就有了 USB 硬盘、USB 鼠标、USB 打印机等等。
    4. 可以连接多个设备。USB 在个人电脑上往往具有多个接口，可以同时连接几个设备，如果接上一个有四个端口的USB HUB时，就可以再连上；四个USB设备，以此类推，尽可以连下去，将你家的设备都同时连在一台个人电脑上而不会有任何问题(注：最高可连接至127个设备)。
- 传送速度
    1. USB 1.0是在1996年出现的，速度只有1.5Mb/s(位每秒)； 1998年升级为USB 1.1，速度也大大提升到12Mb/s ；
    2. USB2.0规范是由USB1.1规范演变而来的。它的传输速率达到了480Mbps，折算为MB为60MB/s，足以满足大多数外设的速率要求。
    3. USB 3.0的理论速度为5.0Gb/s，其实只能达到理论值的5成，那也是接近于USB 2.0的10倍了。
    4. USB 3.1，传输速度为10Gbit/s，三段式电压5V/12V/20V，最大供电100W ，新型Type C插型不再分正反。



## Ref
[👍 USB | Wikipedia]: https://en.wikipedia.org/wiki/USB

[了解这些常用接口一定会有用的]: https://www.yinxiang.com/everhub/note/4828ea4f-240b-44bd-8cfd-20ecd7cd1657
