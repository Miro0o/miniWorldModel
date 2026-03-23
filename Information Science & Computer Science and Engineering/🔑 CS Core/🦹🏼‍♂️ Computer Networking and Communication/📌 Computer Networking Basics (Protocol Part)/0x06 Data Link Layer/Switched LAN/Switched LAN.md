# Switched LAN

[TOC]



## Res
### Related Topics
↗ [Link Layer (Switched Network) Basics](../📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20(Switched%20Network)%20Basics.md)
↗ [Computer Network and Communication Introduction & Overview](../../0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/Computer%20Network%20and%20Communication%20Introduction%20&%20Overview.md)

↗ [Overlay Network](../../../Network%20Virtualization%20(NV)/Overlay%20Network.md)



## Intro
> 🔗 https://developer.aliyun.com/article/945531#slide-1

LAN 表示 Local Area Network，本地局域网。**一个 LAN 表示一个广播域，含义是：LAN 中的所有成员都会收到任意一个成员发出的广播包。**

![](../../../../../../Assets/Pics/Pasted%20image%2020240424231710.png)

上图为最基本的LAN布局。如果设备间想要通讯，必须要获取到对方的MAC地址。
```
举例：A 发信息给 C，A 并不知道 C 的 MAC 地址。
此时通过 ARP 协议（Address Resolution Protocol；地址解析协议；）
获取 C 的 MAC 地址，A 先要广播一个包含目标 IP 地址的 ARP 请求到链接在集线器上的所有设备上，C 接受到广播后返回 MAC 地址给 A，其他设备则丢弃信息。至此已经建立设备间通信的准备条件。
```

链接在集线器中的设备都在同一个**冲突域**和**广播域**中。此时的冲突域就是广播域。简单理解就是在这种布局中，一次只能一台设备发送信号且其他设备都能接受该信号。

集线器是物理层（OSI第一层）设备，主要作用是将信号进行接受-恢复放大-发送，双绞线、光纤在传输信号的时候，随着距离的增大，信号会减弱造成失真，借助集线器可以让信号传播更远的距离；同时集线器上有很多接口，能够扩展终端数量扩大 LAN 的规模。

同一集线器上的所有设备共享带宽，如果设备数量过多的话，会造成链路拥堵，严重的会产生广播风暴(?是吗)。

使用交换机可以把一个大的冲突域划分成多个小的冲突域，这样可以缩减冲突域的范围，降低数据拥堵。

下图添加一个交换机连接几个冲突域，交换机的一个端口对应一个单独的冲突域。这样一来一个大的广播域就分成了多个小的冲突域。但注意的是，这整个网络仍是一个广播域。

![](../../../../../../Assets/Pics/Pasted%20image%2020240424231719.png)

上面已经把冲突域进行了隔离，当设备越来越多的时候每个设备都发送一个广播，交换机需要把每个广播复制下发到所有设备，这个开销就很可怕了。

下图我们使用路由器对广播域进行隔离。

![](../../../../../../Assets/Pics/Pasted%20image%2020240424231729.png)

当路由器收到广播时，会把它自动丢弃，不会转发到路由器的其他端口，实现了广播域的分割.

![](../../../../../../Assets/Pics/Screenshot%202023-05-31%20at%209.40.19%20AM.png)



## Broadcast Channels on Switched LAN
### IEEE 802 Family
↗ [IEEE 802 Family](📌%20IEEE%20802%20Family/IEEE%20802%20Family.md)


### Ethernet (802.3)
↗ [Ethernet (802.3)](📌%20IEEE%20802%20Family/Ethernet%20(802.3)/Ethernet%20(802.3).md)


### WLAN & WiFi
↗ [LAN, WLAN & WiFi (802.11)](📌%20IEEE%20802%20Family/LAN,%20WLAN%20&%20WiFi%20(802.11)/LAN,%20WLAN%20&%20WiFi%20(802.11).md)



## Ref
[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA

![](../../../../../../Assets/Pics/Pasted%20image%2020240510150821.png)
![](../../../../../../Assets/Pics/Pasted%20image%2020250316221042.png)
![](../../../../../../Assets/Pics/Pasted%20image%2020250316221057.png)

[👍 看MikroTik暴打H3C，顺便对比选型网络方案]: https://mp.weixin.qq.com/s/nuUsE-jnqxcmNOvqq-p8aw
