# Router

[TOC]



## Res
🔗 【深入浅出计算机网络 - 4.4.6 路由器的基本工作原理】 https://www.bilibili.com/video/BV1MW4y187Vo/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


## Intro
![Screenshot 2022-11-20 at 2.10.30 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%202.10.30%20PM.png)
<small>* Each port of a router is a FULL-DUPLEX  port. </small>

路由器是网络中进行网间连接的关键设备。作为不同网络之间互相连接的枢纽，路由器系统构成了基于 TCP/IP 的国际互连网络 Internet 的主体脉络。

路由器之所以在互连网络中处于关键地位，是因为它处于网络层，一方面能够跨越不同的物理网络类型（DDN、FDDI、以太网等等），另一方面在逻辑上将整个互连网络分割成逻辑上独立的网络单位，使网络具有一定的逻辑结构。路由器的主要工作就是为经过路由器的每个数据帧寻找一条最佳传输路径，并将该数据有效地传送到目的站点。 路由器的基本功能是，把数据（IP 报文）传送到正确的网络，细分则包括：
1、IP 数据报的转发，包括数据报的寻径和传送；
2、子网隔离，抑制广播风暴；
3、维护路由表，并与其它路由器交换路由信息，这是 IP 报文转发的基础；
4、IP 数据报的差错处理及简单的拥塞控制；
5、实现对 IP 数据报的过滤和记帐。

路由器构成了 Internet 的骨架。它的处理速度是网络通信的主要瓶颈之一，它的可靠性则直接影响着网络互连的质量。因此Internet 研究领域中，路由器技术始终处于核心地位。

---
**Routers** – A router is a device like a switch that routes data packets based on their IP addresses. The router is mainly a Network Layer device. Routers normally connect LANs and WANs and have a dynamically updating routing table based on which they make decisions on routing the data packets. The router divides the broadcast domains of hosts connected through it.



## Router Components
![](../../../../../../../Assets/Pics/Screenshot%202023-05-06%20at%2010.30.01%20AM.png)


### Input Ports
↗ [Input Ports (Forwarding)](Input%20Ports%20(Forwarding).md)


### Switching Fabric
↗ [Switching Fabrics (Switching)](Switching%20Fabrics%20(Switching).md)


### Output Ports
↗ [Output Ports (Transmitting)](Output%20Ports%20(Transmitting).md)


### Routing Processor
↗ [Routing Processors (Routing)](Routing%20Processors%20(Routing).md)



## Buffer Management & Scheduling
### Input /Output Port Queuing
↗ [Input Ports (Forwarding)](Input%20Ports%20(Forwarding).md)
↗ [Output Ports (Transmitting)](Output%20Ports%20(Transmitting).md)


### Buffer Management


### Scheduling Policies



## Administrative Issues
### Network Neutrality
2015 US FCC Order on Protecting and Promoting an Open Internet: three “clear, bright line” rules:
- **no blocking** … “shall not block lawful content, applications, services, or non-harmful devices, subject to reasonable network management.”
- **no throttling**  … “shall not impair or degrade lawful Internet traffic on the basis of Internet content, application, or service, or use of a non-harmful device, subject to reasonable network management.”
- **no paid prioritization**. … “shall not engage in paid prioritization”


### ISP: telecommunications or information service?
Is an ISP a “telecommunications service” or an “information service” provider?
- the answer really matters from a regulatory standpoint!

US Telecommunication Act of 1934 and 1996:
- Title II: imposes “common carrier duties” on telecommunications services: reasonable rates, non-discrimination and requires regulation
- Title I: applies to information services:
	- no common carrier duties (not regulated)
	- but grants FCC authority  “… as may be necessary in the execution of its functions”4



## Ref

