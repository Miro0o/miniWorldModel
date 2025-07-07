# NIC (Network Adapter)

[TOC]



## Res
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=27&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


### Related Topics
↗ [Virtual NIC (vNIC)](../../../../Network%20Virtualization/📌%20NV%20Implementations/Virtual%20Physical%20Layer/Virtual%20NIC%20(vNIC)/Virtual%20NIC%20(vNIC).md)
↗ [MAC (Media Access Control) Protocol & Layer 2 Lower Sublayer](../📌%20MAC%20(Media%20Access%20Control)%20&%20Layer%202%20Lower%20Sublayer/MAC%20(Media%20Access%20Control)%20Protocol%20&%20Layer%202%20Lower%20Sublayer.md)

↗ [Physical Layer Network Devices](../../../0x07%20Physical%20Layer/Physical%20Layer%20Network%20Devices/Physical%20Layer%20Network%20Devices.md)



## Intro
> 🖇 https://www.cnblogs.com/machangwei-8/p/10352887.html

1. What is [NIC](https://zh.wikipedia.org/zh-cn/网卡) (Network Interface Controller)?
   The NIC may use one or more of the following techniques to indicate the availability of packets to transfer:

   - [Polling](https://en.wikipedia.org/wiki/Polling_(computer_science)) is where the [CPU](https://en.wikipedia.org/wiki/CPU) examines the status of the [peripheral](https://en.wikipedia.org/wiki/Peripheral) under program control.
   - [Interrupt](https://en.wikipedia.org/wiki/Interrupt_request)-driven I/O is where the peripheral alerts the CPU that it is ready to transfer data.

2. NICs may use one or more of the following techniques to transfer packet data:
- [Programmed input/output](https://en.wikipedia.org/wiki/Programmed_input/output), where the CPU moves the data to or from the NIC to memory.
- [Direct memory access](https://en.wikipedia.org/wiki/Direct_memory_access) (DMA), where a device other than the CPU assumes control of the [system bus](https://en.wikipedia.org/wiki/System_bus) to move data to or from the NIC to memory. This removes load from the CPU but requires more logic on the card. In addition, a packet buffer on the NIC may not be required and [latency](https://en.wikipedia.org/wiki/Latency_(engineering)) can be reduced.



## NIC Working Modes
> 网卡的缺省工作模式包含广播模式和直接模式，即它只接收广播帧和发给自己的帧

### Broad Cast Model
广播模式（Broad Cast Model）：它的物理地址（MAC）地址是 0Xffffff 的帧为广播帧，工作在广播模式的网卡接收广播帧。

### MultiCast Model
多播传送（MultiCast Model）：多播传送地址作为目的物理地址的帧可以被组内的其它主机同时接收，而组外主机却接收不到。但是，如果将网卡设置为多播传送模式，它可以接收所有的多播传送帧，而不论它是不是组内成员。

### Direct Model
直接模式（Direct Model）：工作在直接模式下的网卡只接收目地址是自己 Mac地址的帧。

### Promiscuous Model
混杂模式（Promiscuous Model）：工作在混杂模式下的网卡接收所有的流过网卡的帧，信包捕获程序就是在这种模式下运行的。

混杂模式就是接收所有经过网卡的数据包，包括不是发给本机的包。默认情况下网卡只把发给本机的包（包括广播包）传递给上层程序，其它的包一律丢弃。简单的讲,混杂模式就是指网卡能接受所有通过它的数据流，不管是什么格式，什么地址的。当网卡处于这种”混杂”方式时，该网卡具备”广播地址”，它对所有遇到的每一个数据帧都 产生一个硬件中断以便提醒操作系统处理流经该物理媒体上的每一个报文包。

```shell
## to set eth0 to promisc
sudo ifconfig eth0 promisc
sudo ip link set eth0 promisc on

## to check out eth0 has been set to promisc
ifocnfig eth0
#Look for the "PROMISC" flag in the output, indicating that the interface is in promiscuous mode.
```



## Ref
[网卡混杂模式介绍与设置 - WCH_SoftGroup的文章 - 知乎]: https://zhuanlan.zhihu.com/p/543476314

