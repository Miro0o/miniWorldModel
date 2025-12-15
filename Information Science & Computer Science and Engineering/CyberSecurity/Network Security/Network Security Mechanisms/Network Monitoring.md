# Network Monitoring

[TOC]



## Res


## Intro
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.05.47%20PM.png)


## Package Sniffer
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.08.37%20PM.png)
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.08.58%20PM.png)
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.09.22%20PM.png)


## Switch Poisoning
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.09.34%20PM.png)
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.09.47%20PM.png) 


## ARP Spoofing (ARP Poisoning)
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.10.00%20PM.png)
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.10.37%20PM.png)



## Defendence
![](../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.10.56%20PM.png)


## Ref
[👍 浅谈ARP欺骗的实现与防御 | Freebuf]: https://www.freebuf.com/articles/network/210852.html

> - [SharpPcap官方文档](http://sharppcap.sourceforge.net/htmldocs/index.html)[PacketDotNet](https://github.com/chmorgan/packetnet)（使用PacketDotNet可以很方便的构造出数据包，只需几个参数）
> - [SharpPcapTool](https://gitee.com/week233/SharpPcapTool_back.git)（实现参考，没有做物理机的虚拟机网卡过滤，当遍历到虚拟机网卡的网关IP时会抛异常，因为VMware的虚拟机网卡没有网关地址）
> - [牢底坐穿工具箱](https://gitee.com/week233/ARPAttack.git)（我的实现，已经过滤掉了VMware的虚拟机网卡）

