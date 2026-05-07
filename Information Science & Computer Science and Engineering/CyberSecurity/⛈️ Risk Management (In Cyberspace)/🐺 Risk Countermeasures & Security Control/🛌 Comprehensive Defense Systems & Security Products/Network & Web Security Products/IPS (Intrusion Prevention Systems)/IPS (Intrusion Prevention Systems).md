# IPS (Intrusion Prevention Systems)

[TOC]



## Res
### Related Topics
↗ [Firewall & Network Filters](../Firewall%20&%20Network%20Filters/Firewall%20&%20Network%20Filters.md)
↗ [IDS (Intrusion Detection Systems)](../IDS%20(Intrusion%20Detection%20Systems)/IDS%20(Intrusion%20Detection%20Systems).md)
↗ [WAF (Web Application Firewall) (Web IPS)](WAF%20(Web%20Application%20Firewall)%20(Web%20IPS)/WAF%20(Web%20Application%20Firewall)%20(Web%20IPS).md)



## Intro
### Why IPS? / IPS 🆚 IDS & Firewall
![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.38.29AM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.39.07AM.png)


### What is IPS?
IPS是一种集入侵检测和防御于一体的安全产品，它不但能检测入侵的发生，而且能通过一定的响应方式，实时地中止入侵行为的发生和发展，实时地保护信息系统不受实质性的攻击。IPS使得IDS和防火墙走向统一。简单地理解，可认为IPS就是防火墙加上入侵检测系统。

IPS主要功能
- 识别对网络和主机的恶意攻击，并实时进行阻断；
- 向管理控制台发送日志信息；
- 集成病毒过滤、带宽管理和URL过滤等功能；
- **IPS是实现风险控制的主要安全设备之一**
![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.41.06AM.png)
#### IDS 🆚 IPS?
![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.41.46AM.png)
<small>IDS与IPS：技术同源</small>

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.42.17AM.png)
<small>IDS与IPS：服务不同</small>

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.44.27AM.png)
<small>IDS与IPS：解决的安全问题不同</small>



## IPS Deployment
产品组成及部署
- IPS硬件设备
- 数据分析中心（SOC/IMS/厂商配套）

IPS部署模式
- 透明模式(提供桥接功能)
	- 在这种模式下，IPS的接口（物理接口或VLAN子接口）作为交换接口工作。也就是说，对于数据包在转发时不作任何改动，包括IP 和MAC 地址，直接把包转发出去。
- 路由模式(路由功能)
	- 在这种模式下，IPS类似于一台路由器转发数据包，将接收到的数据包的源MAC 地址替换为相应接口的MAC 地址，然后转发。该模式 适用于每个区域都不在同一个网段的情况。
- 混合模式(透明+路由功能)
	- 顾名思义，这种模式是前两种模式的混合。也就是说某些接口工作 

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.46.42AM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-05%20at%209.46.52AM.png)


### IPS Configuration
TBD..



## Ref
