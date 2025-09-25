# Network Layer

[TOC]



## Res
### Related Network Layer Implementations
↗ [Network Layer Security](../../../../CyberSecurity/Network%20Security/🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security/Network%20Layer%20Security.md)
↗ [Mobile IP](../0x07%20Physical%20Layer/Wireless%20&%20Mobile%20Network/Mobile%20Network%20Technology%20&%20Cellular%20Network/Mobile%20IP.md)

↗ [NPU (Network Processing Unit)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/NPU%20(Network%20Processing%20Unit)/NPU%20(Network%20Processing%20Unit).md)
↗ [Software Defined Network (SDN)](../../🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md)


### Learning Resources
🎬【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=47&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=48&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

[Network Layer | Wikipedia](https://en.wikipedia.org/wiki/Network_layer)



## Overview
> 💡 **forwarding, switching, Link-layer switches, routers**
> 
> We mention here in passing that the terms **forwarding** and **switching** are often used interchangeably by computer-networking researchers and practitioners; we’ll use both terms interchangeably in this textbook as well. While we’re on the topic of terminology, it’s also worth mentioning two other terms that are often used interchangeably, but that we will use more carefully. We’ll reserve the term **packet switch** to mean a general packet-switching device that transfers a packet from input link interface to output link interface, according to values in a packet’s header fields. 
> - Some packet switches, called **link-layer switches** (examined in Chapter 6), base their forwarding decision on values in the fields of the link-layer frame; switches are thus referred to as link-layer (layer 2) devices. 
> - Other packet switches, called **routers**, base their forwarding decision on header field values in the network-layer datagram. Routers are thus network-layer (layer 3) devices. (To fully appreciate this important distinction, you might want to review Section 1.5.2, where we discuss network-layer datagrams and link-layer frames and their relationship.) 
> 
> Since our focus in this chapter is on the network layer, we’ll mostly use the term router in place of packet switch.


![Screenshot 2022-11-20 at 12.01.39 PM](../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2012.01.39%20PM.png)


### (The Internet's) Network Service Models
1️⃣ The Internet’s network layer provides a single service, known as **best-effort service**. This means that IP makes its “best effort” to deliver segments between communicating hosts, but it **makes no guarantees**. 
- it does not guarantee eventual segment delivery;
- it does not guarantee orderly delivery of segments;
- it does not guarantee on the end-to-end delay or minimal bandwidth;
- it does not guarantee the integrity of the data in the segments.

🤣 It might appear that best-effort service is a euphemism for no service at all -- a network that delivered no packets to the destination would satisfy the definition of best-effort delivery service! 

2️⃣ Other network architectures have defined and implemented service models that **go beyond the Internet’s best-effort service**. 
- For example, the **ATM network architecture** [Black 1995] provides for guaranteed in-order delay, bounded delay, and guaranteed minimal bandwidth. 

3️⃣ There have also been proposed **service model extensions to the Internet architecture**.
- For example, the **Intserv architecture** [RFC 1633] aims to provide end-end delay guarantees and congestion-free communication. 

Interestingly, in spite of these well-developed alternatives, the Internet’s basic best-effort service model combined with adequate bandwidth provisioning and bandwidth-adaptive application-level protocols such as the DASH protocol we encountered at ↗ [Video Streaming](../../Real%20Time%20Communication%20(Protocol)/Video%20Transmission%20(Streaming)%20&%20OTT/Video%20Streaming/Video%20Streaming.md) ==have arguably proven to be more than “good enough” to enable an amazing range of applications==, including streaming video services such as Netflix and video-over-IP, real-time conferencing applications such as Skype and Facetime.

![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2010.56.04%20AM.png)
<small>Network-layer service model</small>

> 💡 **The Network Service Model**
> 
> The network service model defines the characteristics of end-to-end delivery of packets between sending and receiving hosts.
> 
> Let’s now consider some possible services that the network layer could provide. These services could include:
> - **Guaranteed delivery**. This service guarantees that a packet sent by a source host will eventually arrive at the destination host.
> - **Guaranteed delivery with bounded delay**. This service not only guarantees delivery of the packet, but delivery within a specified host-to-host delay bound (for example, within 100 msec).
> - **In-order packet delivery**. This service guarantees that packets arrive at the destination in the order that they were sent.
> - **Guaranteed minimal bandwidth**. This network-layer service emulates the behavior of a transmission link of a specified bit rate (for example, 1 Mbps) between sending and receiving hosts. As long as the sending host transmits bits (as part of packets) at a rate below the specified bit rate, then all packets are eventually delivered to the destination host.
> - **Security**. The network layer could encrypt all datagrams at the source and decrypt them at the destination, thereby providing confidentiality to all transport-layer segments.


### ⭐️ Functions & Service Model of IP Layer (Network Layer)
**Forwarding (data plane)** refers to the **router-local action** of transferring a packet from an input link interface of the router to the appropriate output link interface of the router. Forwarding takes place at very **short timescales** (typically a few nanoseconds), and thus is typically implemented in hardware. 

**Data Plane** 
- local, per-router function
- determines how datagram arriving on router input port is forwarded to router output port

---
**Routing (control plane)** refers to the **network-wide process** that determines the end-to-end paths that packets take from source to destination. Routing takes place on much **longer timescales** (typically seconds), and as we will see is often implemented in software.


**Control Plane**
- network-wide logic
- determines how datagram is routed among routers along end-end path from source host to destination host
- two control-plane approaches:
	- traditional routing algorithms: implemented in routers
	- software-defined networking (SDN): implemented in (remote) servers

![Screenshot 2022-11-26 at 3.35.43 PM](../../../../../Assets/Pics/Screenshot%202022-11-26%20at%203.35.43%20PM.png)
#### 🎯 2 Services Provided by Network Layer
##### 1️⃣ Virtual Circuit (VC) Network -- Connection Oriented
![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2010.33.29%20AM.png)

很多广域分组交换网都使用面向连接的**虚电路服务(Virtual Circuit, VC)**。例如，曾经的**x.25**和逐渐过时的**帧中继(Frame Relay, FR)**，**异步传输模式(Asynchronous Transfer Mode, ATM)**。然而，因特网使用的是无连接的数据包模式。
##### 2️⃣ Datagram Network -- Connectionless Service
![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2010.37.40%20AM.png)
#### 🎯 2 Kinds of Control-plane Approaches
##### Per-router Control Plane
![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2010.54.04%20AM.png)
##### SDN Control Plane
![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2010.54.12%20AM.png)


### Connecting Heterogeneous Network 
![Screenshot 2022-11-26 at 3.40.20 PM](../../../../../Assets/Pics/Screenshot%202022-11-26%20at%203.40.20%20PM.png)
![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2010.43.45%20AM.png)



## Network Layer Design Outlook
### Network Layer Foundations
#### Router
> 🏃‍♂ For more info, check out [Router](Network%20Layer%20Devices/Router/Router.md) 
#### 👾 IP(Internet Protocol)
> 🏃‍♂ For more info, check out ↗ [Internet Protocols (IP)](Internet%20Protocols%20(IP)/Internet%20Protocols%20(IP).md)


### 1️⃣ Data Plane (Forwarding)
↗ [Data Plane (Forwarding)](🚙%20Data%20Plane%20(Forwarding)/Data%20Plane%20(Forwarding).md)


### 2️⃣ Control Plane (Routing)
#### 🛂 IP Layer Network Management
↗ [ICMP (IPv4)](🎮%20Control%20Plane%20(Routing%20&%20Managements)/IP%20Layer%20Network%20Management/ICMP%20(Internet%20Control%20Message%20Protocol)/ICMP%20(IPv4)/ICMP%20(IPv4).md)
↗ [ICMPv6 (IPv6)](🎮%20Control%20Plane%20(Routing%20&%20Managements)/IP%20Layer%20Network%20Management/ICMP%20(Internet%20Control%20Message%20Protocol)/ICMPv6%20(IPv6)/ICMPv6%20(IPv6).md)
#### Network Routing / IP Address Modes / Route Selection
↗ [Network Routing (IP Address Modes) (Route Selection)](🎮%20Control%20Plane%20(Routing%20&%20Managements)/Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection)/Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection).md)
#### SDN
> 🏃‍♂ For more info, check out ↗ [Software Defined Network (SDN)](../../🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md) 

🔗 【深入浅出计算机网络 - 4.10 软件定义网络SDN】 https://www.bilibili.com/video/BV19P411J77K/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


### 🧪 Middleboxes
↗ [MiddleBoxes](MiddleBoxes/MiddleBoxes.md)



## The IP Hourglass
![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2011.28.24%20AM.png)

![](../../../../../Assets/Pics/Screenshot%202023-04-30%20at%2011.28.34%20AM.png)



## 🤺 Arguments & Opinions
### Architectural Principles of the Internet

![](../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2010.56.03%20AM.png)


### The End-end Argument
![](../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2010.57.05%20AM.png)

> “The function in question can completely and correctly be implemented only with the knowledge and help of the application standing at the end points of the communication system. Therefore, providing that questioned function as a feature of the communication system itself is not possible. (Sometimes an incomplete version of the function provided by the communication system may be useful as a performance enhancement.)
> 
> We call this line of reasoning against low-level function implementation the “end-to-end argument.”
> 
> Saltzer, Reed, Clark 1981


### Where's the Intelligence?
![](../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2010.58.46%20AM.png)



## Ref
