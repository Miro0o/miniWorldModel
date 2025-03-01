# Firewall & Network Filters

[TOC]



## Res
### Related Topics
↗ [Firewall & Network Filters](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Firewall%20&%20Network%20Filters.md)
↗ [Access Control (访问控制)](../../../Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)

↗ [WAF (Web Application Firewall) (Web IPS)](../IPS%20(Intrusion%20Prevention%20Systems)/WAF%20(Web%20Application%20Firewall)%20(Web%20IPS)/WAF%20(Web%20Application%20Firewall)%20(Web%20IPS).md)
↗ [Free Software /Firewall & Network Filters](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Firewall%20&%20Network%20Filters.md)
- netfilters
- iptables
- etc.
↗ [Packet Analyzing & Sniffing & Spoofing](../../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Packet%20Analyzing%20&%20Sniffing%20&%20Spoofing/Packet%20Analyzing%20&%20Sniffing%20&%20Spoofing.md)

↗ [Internet Censorship & GFW (Great FireWall)](../../../../../Network%20Security/Anonymous%20&%20Private%20Networks/Internet%20Censorship%20&%20GFW%20(Great%20FireWall).md)
↗ [OpenWRT](../../../../../../Embedded%20Development,%20Internet%20of%20Things%20&%20Robot/🚟%20Embedded%20Computer%20Systems/Embedded%20Operating%20Systems/OpenWRT/OpenWRT.md)


### Learning Resources
【深入浅出计算机网络 - 7.8 防火墙访问控制与入侵检测系统】 https://www.bilibili.com/video/BV1Gr4y1u7oe/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【网络干货】网络安全之最全防火墙技术详解 - 网络工程师笔记的文章 - 知乎 https://zhuanlan.zhihu.com/p/138100829



## Intro
### ⭐️ Firewall Overview
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%203.47.45%20PM.png)

防火墙（**FireWall**）定义：一种高级访问控制设备，置于不同网络安全域之间，它通过相关的安全策略来控制（允许、拒绝、监视、记录）进出网络的访问行为。
- 在网络间（内部/外部网络、不同信息级别）提供**安全连接**的设备；
- 用于实现和执行网络之间通信的**安全策略**

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-08%20at%208.54.48AM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%203.48.31%20PM.png)
<small>*这里的访问控制只是指对双方的通信过程进行控制，和标准的Access Conrol过程略有不同。</small>

为什么需要防火墙?
- 阻止来自不可信网络的攻击
- 保护关键数据的完整性
- 维护客户对企业或机构的信任


### Firewalls Standards
**GB/T 18019-1999** 信息技术包过滤防火墙安全技术要求
**GB/T 18020-1999** 信息技术应用级防火墙安全技术要求
**GB/T 18336-2001** 信息技术安全性评估准则
**GB/T 17900-1999** 网络代理服务器的安全技术要求
**GB/T 18018-1999** 路由器安全技术要求

这些标准从安全环境、安全目标、安全要求、基本原理等方面对防火墙的各种指标进行了规定。


### Firewall & Filtering Technology
防火墙做什么？过滤
1. 实现一个组织的安全策略
2. 创建阻塞点
3. 记录internet活动记录
4. 限制网络暴露

![img](../../../../../../../../Assets/Pics/021217_0051_6.png)
↗ [iptables](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/The%20netfilter.org%20Project%20(Netfilter)/iptables.md)

防火墙的检测与过滤技术
- 应用代理（**Application Proxy**）：工作在应用层，通过编写不同的应用代理程序，实现对应用层数据的检测和分析。
- 包过滤（**Packet Filtering**）：工作在网络层（**ip**层），仅根据数据包头中的**IP**地址、端口号、协议类型等标志确定是否允许数据包通过。
- 状态检测（**Stateful Inspection**）：工作在**2~4**层，访问控制方式与**1**同，但处理的对象不是单个数据包，而是整个连接，通过规则表和连接状态表，综合判断是否允许数据包通过。
- 完全内容检测（**Compelete Content Inspection**）：工作在**2~7**层，不仅分析数据包头信息、状态信息，而且对应用层协议进行还原和内容分析，有效防范混合型安全威胁

### Firewall Drawbacks
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%204.26.19%20PM.png)

- 防火墙防外不防内；
	- 首先防火墙不能防范未经过防火墙或绕过防火墙的攻击。例如，如果允许从受保护的网络内部向外拨号，一些用户就可能形成与**Internet**的直接连接。
	- 防火墙很难防范来自于网络内部的攻击或滥用
- 防火墙难于管理和配置，易造成安全漏洞；
- 很难为用户在防火墙内外提供一致的安全策略；
- 防火墙只实现了粗粒度的访问控制；
- 对于某些攻击防火墙也无能为力。
	- 防火墙基于数据包包头信息的检测阻断方式，主要对主机提供或请求的服务进行访问控制，无法阻断通过开放端口流入的有害流量，并不是对蠕虫或者黑客攻击的解决方案。



## Firewalls Taxonomy
> 🔗 https://en.wikipedia.org/wiki/Firewall_(computing)

1️⃣ Firewalls are categorized as a network-based or a host-based system. 
1. **Network-based firewalls** are **positioned between two or more networks**, typically between the local area network (LAN) and wide area network (WAN). They are either a software appliance running on general-purpose hardware, a hardware appliance running on special-purpose hardware, or a virtual appliance running on a virtual host controlled by a hypervisor. Firewall appliances may also offer non-firewall functionality, such as [DHCP](https://en.wikipedia.org/wiki/DHCP "DHCP") or [VPN](https://en.wikipedia.org/wiki/VPN "VPN") services. 
2. **Host-based firewalls** are **deployed directly on the host** itself to control network traffic or other computing resources. This can be a [daemon](https://en.wikipedia.org/wiki/Daemon_(computing) "Daemon (computing)") or [service](https://en.wikipedia.org/wiki/Windows_service "Windows service") as a part of the [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") or an [agent application](https://en.wikipedia.org/wiki/Endpoint_security "Endpoint security") for protection.

![](../../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%204.25.39%20PM.png)

2️⃣ 防火墙从实现方式上来分，可分为硬件防火墙和软件防火墙两类。
- 硬件防火墙通常部署在内、外部网络之间，通过软、硬件结合的方式来达到隔离内、外部网络的目的；
- 软件防火墙可以在一个独立的机器上运行，通过一定的规则来达到限制非法用户访问的目的。

3️⃣ 从技术发展阶段来分看，防火墙可分为包过滤、应用代理和状态检测等几大类型。


### Firewall's Implementation
#### Software Firewall
#### Hardware Firewall
### ⭐ Firewall's Technology
↗ [Development (History) of Firewall](📌%20Firewall%20Basics/Development%20(History)%20of%20Firewall.md)
↗ [Firewalls Techniques](📌%20Firewall%20Basics/Firewalls%20Techniques.md)


### Hybrid firewalls



## 🦺 Firewall Deployments
### Firewalls Architecture Implementation (防火墙体系结构)
There are many factors that come into consideration for architecting a firewall. The major ones are: 
1. Organization‘s ability to implement and develop the architecture
2. The budget allotted by the organization
3. Objectives of the network
#### 1️⃣ Packet Filtering Router Firewalls (包过滤路由器结构)
> 过滤路由器作为内外网连接的唯一通道，通过**ACL**策略要求所有的报文都必须在此通过检查，实现报文过滤功能。

![](../../../../../../../../Assets/Pics/Pasted%20image%2020231117122317.png)

Most of organizations have a router as the interface to the Internet. This router is placed at the perimeter between the organization‘s internal networks and the internet service provider. These routers can be configured to accept or reject the packets as per the rule of the organization. This is one of the simple and effective ways to lower down the organization‘s risk from the internet.

**Drawbacks**:
- The length and the complexity of the rule sets implemented to filter the packets can grow and degrade network performance. (路由器规则表的长度随着使用时长不断增加，导致性能不断降低) 
- Also, it suffers from a lack of auditing and strong authentication mechanisms. (一旦被攻陷后很难发现，而且没有身份鉴别/ 没有日志记录)
#### 2️⃣ Multi-Homed Host Firewalls (多宿主主机结构)
> 多宿主主机具有两个网络适配器的主机系统，采用主机替代路由器执行安全控制功能，性能更高，隔离性更好。
##### Dual-Homed Host Firewalls (双宿主主机/堡垒机（**Dual Homed Gateway**）结构)
![](../../../../../../../../Assets/Pics/Pasted%20image%2020231117122328.png)

This architecture is a more complex implementation of screened host firewalls. In this architectural approach, the bastion host accommodates two NICs (Network Interface Cards) in the bastion host configuration. One of the NIC is connected to the external network, and the other one is connected to the internal network thus providing an additional layer of protection. 

This architecture often makes use of Network Address Translation (NATs). NAT is a method of mapping external IP addresses to internal IP addresses, thus forming a barrier to intrusion from external attackers.

- 双宿主主机优于过滤路由器的地方是：堡垒主机的系统软件可用于维护系统日志。
- 它的致命弱点是：一旦入侵者侵入堡垒主机，则无法保证内部网络的安全
#### 3️⃣ Screened Host Firewalls (被屏蔽主机结构)
> 有两道屏障，一是屏蔽路由器，另外一个是堡垒主机（双宿主主机）屏蔽路由器位于网络的最边缘，负责与外网实施连接，并且参与外网的路由堡垒主机存放在内部网络中，是内部网络中唯一可以连接到外部网络的主机
> 通常在路由器上设立ACL过滤规则，并通过堡垒主机进行数据转发，来确保内部网络的安全。

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-17%20at%2012.29.00PM.png)

This firewall combines a packet-filtering router with a discrete firewall such as an application proxy server. In this approach, the router screens the packet before entering the internal network and minimizes the traffic and network load on the internal proxy. The application proxy inspects application layer protocol such as HTTP or HTTPS and performs the proxy services. This separate host is called a bastion host and can be a rich target for external attacks, thus it should be thoroughly secured.

The bastion host stores copies of the internal documents, making it a promising target to the attackers. A bastion host is also commonly referred to as the Sacrificial Host.

**Advantage**
This configuration requires the attacker to hack and compromise two separate systems, before accessing the internal data. In this way, the bastion host and router protects the data and is more effective and secure implementation.

弱点：如果攻击者进入屏蔽主机内，内网中的就会受到很大威胁；这与双宿主主机受攻击时的情形差不多。
#### 4️⃣ Screened Subnet Firewalls (with DMZ) (被屏蔽子网结构）
![](../../../../../../../../Assets/Pics/Pasted%20image%2020231117122339.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-17%20at%2012.29.22PM.png)

多宿主主机体系结构和被屏蔽主机体系结构中，堡垒主机都是最主要的安全缺陷。一旦堡垒主机被入侵，则整个内部网络部处于入侵者的威胁之中。为解决这种安全隐患，被屏蔽子网体系结构被提出。
- 这种结构是在内部网络和外部网络之间建立一个被隔离的子网，用两台过滤路由器分别与内部网络和外部网络连接，中间通过堡垒主机进行数据转发。
- 特点：如果攻击者试图进入内网或者子网，他必须攻破过滤路由器和双宿主主机 ，然后才可以进入子网主机，整个过程中将引发警报机制。

Of all the architecture available, Screened Subnet Firewall is widely used and implemented in corporate networks. Screened Subnet Firewalls as the name suggests make use of DMZ and are a combination of dual-homed gateways and screened host firewalls. 

In a screened subnet firewall setup, the network architecture has three components and the setup is as follows: 
- 1st component: This component acts as a public interface and connects to the Internet.
- 2nd component: This component is a middle zone called a demilitarized zone. It acts as a buffer between 1st and 3rd components.
- 3rd component: The system in this component connects to an intranet or other local architecture.

(1) 周边网络（DMZ区）用边网络是位于非安全、不可信的外部网络与安全、可信的内部网络之间的一个附加网络。周边网络与外部网络、内部网络之间都是通过屏蔽路由器实现逻辑隔离的，因此外部用户必须穿越两道屏蔽路由器才能访问内部网络。
(2) 外部路由器的主要作用在于保护周边网络和内部网络，是被屏蔽子网体系结构的第一道屏障。在其上设置了对周边网络和内部网络进行访问的过滤规则，对外部用户访问周边网络和内部。
(3) 内部路由器用于隔离周边网络和内部网络，是被屏蔽子网体系结构的第二道屏障。在其上设置了针对内部用户的访问过滤规划，对内部用户访问周边网络和外部网络进行限制。
(4) 在被屏蔽子网结构中，堡垒主机位于周边网络，可以为外部用户提供www、FTP等服务，接受来自外部网络用户的服务资源访问请求。同时堡垒主机也可以向内部网络用户提供DNS 、电子邮件、www代理、FTP代理等多种服务，提供内部网络用户访问外部资源的接口。

**Advantage** 
The use of an additional "layer" and other aspects of the screened subnet firewall makes it a viable choice for many high-traffic or high-speed traffic sites. Screened subnet firewall also helps with throughput and flexibility.


### Firewall Access Modes (防火墙的路由接入模式)
#### Routing Mode（路由接入模式）
![|400](../../../../../../../../Assets/Pics/Pasted%20image%2020231117125716.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%209.30.43AM.png)

在路由模式中，防火墙的各个安全区域位于不同的网段且防火墙自身有 IP 地址。子网之间的相互访问控制被隔离。
#### Transient Mode（透明接入模式）
![|400](../../../../../../../../Assets/Pics/Pasted%20image%2020231117125755.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%209.31.48AM.png)

透明模式即网桥模式，只区分内部网络和外部网络。不需要对防火墙进行 IP 设置，内网用户意识不到防火墙的存在，隐蔽性较好。降低了用户管理的复杂性。
#### Hybrid Mode（混合接入模式）
- 工作于透明接入模式的防火墙可以实现透明接入。
- 工作于路由模式的防火墙可以实现不同网段的连接。
- 路由接入模式的优点和透明接入模式的优点是不能同时并存的。
- 大多数的防火墙一般同时保留了透明接入模式和路由接入模式。
- 根据用户网络情况及用户需求，在使用时由用户进行选择。

![|400](../../../../../../../../Assets/Pics/Pasted%20image%2020231117125734.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%209.32.46AM.png)

混合模式顾名思义混合了路由模式和透明模式，这种防火墙在实际生活中应用比较广泛，在混合模式中，内网和服务器区域是透明模式，与外网间则是路由模式。
#### Other Details About Access Modes
在防火墙部署中还可以使用双机热备模式，可避免单点故障；或是负载均衡模式，使性能得到扩展同时也可避免单点故障。

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%2011.06.13AM.png)



## Firewall Performance Metrics
> ↗ [Computer Network Performance Metrics](../../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/Computer%20Network%20Performance%20Metrics.md) 


### 1️⃣ Throughput
> 吞吐量：在不丢包的情况下能够达到的最大速率。该指标直接影响网络的性能。
> 
> 衡量标准：吞吐量越大，防火墙的性能越高

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-08%20at%209.23.45AM.png)


### 2️⃣ Time lag
> 时延：入口处输入帧最后1个比特到达至出口处输出帧的第1个比特输出所用的时间间隔
> - 若把防火墙想象为一段链路，时延就是这段链路的传播速率乘以传播长度
> 
> 衡量标准：延时越小，表示防火墙的性能越高
> 主要原因：数据包排队进入防火墙并依据规则检查数据包造成数据包延迟到达目标地

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-08%20at%209.24.13AM.png)


### 3️⃣ Drop Rate
> 丢包率：在稳态负载下，应由网络设备传输，但由于资源缺乏而被丢弃的帧的百分比。/在连续负载的情况下，防火墙设备由于资源不足应转发但却未转发的帧百分比
> 
> 衡量标准：丢包率越小，防火墙的性能越高

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-08%20at%209.24.36AM.png)


### 4️⃣ Back-To-Back
> 背靠背：从空闲状态开始，以达到传输介质最小合法间隔极限的传输速率发送相当数量的固定长度的帧，当出现第一个帧丢失时，发送的帧数。（应对突发网络能力/缓存能力）
> 
> 衡量标准：背对背包主要是指防火墙缓冲容量的大小, 网络上经常有一些应用会产生大量的突发数据包（例如：**NFS**，备份，路由更新等），而且这样的数据包的丢失可能会产生更多的数据包的丢失，强大缓冲能力可以减小这种突发对网络造成的影响。

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-08%20at%209.25.10AM.png)


### 5️⃣ Concurrent Connections
> 并发连结数：并发连接数是指穿越防火墙的主机之间或主机与防火墙之间能同时建立的最大连接数
> 
> 衡量标准：并发连接数主要用来测试防火墙建立和维持TCP连接的性能，并发连接数越大，防火墙的处理性能越高。

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-08%20at%209.25.27AM.png)



## 🤔 Other Topics
### Firewall Design Choices
#### 防火墙的“胖”与“瘦”
“胖”防火墙是指功能大而全的防火墙，它力图将安全功能尽可能多地包含在内，从而成为用户网络的一个安全平台；
- 优点
	- 首先是功能全
	- 其次是控制力度细
	- 第三是协作能力强
	- 降低采购和管理成本
- 缺点
	- 主要表现在性能降低
	- 其次是自身安全性相对较弱
	- 还有专业性不强，表现为功能模块的拼凑
	- 第四是稳定性不强，系统越大，BUG越多
	- 最后是配置复杂，不合理的配置会带来更大的安全隐患

“瘦”防火墙是指功能少而精的防火墙，它只作**访问控制**的专职工作，对于综合安全解决方案，则采用多家安全厂商联盟的方式来实现。
- 优势：
	- 性能高
	- 注重核心功能，专业性强
	- 整体安全性高
	- 配置简单，简化对管理员的专业要求
- 缺点
	- 功能单一
	- 整体防护能力不能满足需求
	- 整体采购成本较高

建议：**构建联动、统一的动态安全防护体系**
- 无论是“胖”防火墙的集成，还是“瘦”防火墙的联动，安全产品正在朝着体系化的结构发展，所谓“胖瘦”不过是这种体系结构的具体表现方式，“胖”将这种体系表现在一个产品中，而“瘦”将这种体系表现在一系列产品或是说一个整体方案中。
- 同时，不**管哪种体系结构，都必须通过安全管理中心来监控、协调、管理网络中的其他安全产品和网络产品，构建联动、统一的动态安全防护体系**。
#### 防火墙的硬件架构之争
在硬件技术中主要包括通用 CPU 架构、ASIC 架构、网络处理器架构。

下图为三种硬件架构的横向比较：

|架构类型|X86|NP|ASIC|
|---|---|---|---|
|灵活性|★★★|★★|★|
|扩展性|★★★|★★|★|
|性能|★|★★|★★★|
|安全性|★|★★|★★★|
|价格|低|中等|较高|

> 🤔 防火墙硬件架构的发展趋势: 
> 最佳组合：在系统控制与管理、数据高速处理转发等方面，通用CPU和可编程ASIC将各司其职，共同为防火墙系统提供灵活的服务！
##### 基于X86体系的通用CPU架构
↗ [CPU (Central Processing Unit)](../../../../../../🔑%20CS%20Core/🧬%20Computer%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
通用 CPU 架构又被称为 x86 架构，采用通用 CPU 和 PCI 总线接口，可编程性高，更灵活、更易扩展。产品功能主要由软件实现，代表产品包含了大部分的开源/商业软件防火墙（基于*nix 系统）。

X86架构防火墙中，其CPU具有高灵活性、高扩展性的特性；
- 通用CPU具有体系化的指令集和系统结构，容易支持复杂的运算和开发新的功能；
- 基于X86架构防火墙的处理速度和能力能够很好的适应各种百兆网络环境和一般千兆网络环境的需求；
- 基于X86防火墙由于受CPU处理能力和PCI总线的制约，在更高的千兆环境下其性能和功能则日益不能满足于需求；
##### 基于专用处理芯片的ASIC架构
↗ [ASIC (Application-Specific Integrated Circuit)](../../../../../../Embedded%20Development,%20Internet%20of%20Things%20&%20Robot/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)

ASIC 架构（Application Specific Integrated Circuit），专用集成电路，一种带有逻辑处理的加速处理器，把一些原先由 CPU 完成的经常性和重复工作交给 ASIC 芯片来负责完成，如交换机、路由器、智能 IC 卡，通常配合通用 CPU 单元来完成复杂运算。代表产品为大部分国外的商业硬件防火墙。

基于ASIC专用芯片架构的防火墙，通过专用数据处理芯片来工作，是公认的千兆线速防火墙，特别适用于高端千兆网络环境下。
- 传统的ASIC芯片技术的最大不足就是缺乏灵活性，开发难度大。一旦指令或计算逻辑固化到硬件中，就很难修改升级、增加新的功能。而且，ASIC设计和制造周期长，研发费用高。
- 现代的ASIC芯片技术增加了可编程性，从而能够同时满足灵活性和高性能的要求。从实现功能方面看，ASIC防火墙可以很容易地集成VPN、内容过滤和防病毒等功能。
##### 基于网络处理器的NPU架构
↗ [NPU (Network Processing Unit)](../../../../../../Embedded%20Development,%20Internet%20of%20Things%20&%20Robot/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/NPU%20(Network%20Processing%20Unit)/NPU%20(Network%20Processing%20Unit).md)

NP 架构（Network Processor），网络处理器，通用 CPU 架构和 ASIC 架构的折衷，开发难度较低，性能较好，具有灵活性/可扩展性。代表产品是大部分国内的商业硬件防火墙。

网络处理器NPU则是专门为处理数据包而设计的可编程处理器，同时，其硬件体系结构的设计大多采用高速的接口技术和总线规范，具有较高的I/O能力；
- NP架构防火墙采用的是微引擎编程，在它的每一个网口上都有一个网络处理器（NPU），具有很强的编程灵活性，是一个高度整合的，可编程的数据处理器。因此，NP架构实质是以软件编码方式处理来自各个网口的数据转发。
- 在实际编码中，微引擎编程难度是比较大的，需要根据实践经验不断的总结。一般来说，通过微码（微引擎）仿真便可以发现和定位大多数问题，但是这种仿真与硬件仿真还是有很大的区别的，最终也会导致NP防火墙产品综合成本较高，稳定性开发周期长，相比之下，其成熟性远不及ASIC和Intel IA 架构。



## Ref
[The Evolution of Firewalls: Past, Present & Future]: https://www.informationweek.com/partner-perspectives/the-evolution-of-firewalls-past-present-and-future/a/d-id/1318814

[Firewall (Computing) | Wikipedia]: https://en.wikipedia.org/wiki/Firewall_(computing)

[👍 Firewall types and architecture]: https://resources.infosecinstitute.com/topics/network-security-101/firewall-types-and-architecture/

[7 Different Types of Firewalls]: https://securitywing.com/types-of-firewall/

[Firewall Architecture]: https://www.educba.com/firewall-architecture/

[👍 第八章 防火墙 | 中传信安Wiki]: https://c4pr1c3.github.io/cuc-ns/chap0x08/main.html

[第7章 - 防火墙技术及其发展]: 四川大学精品课程, 网络空间安全技术
1. 防火墙基本概念
2. 防火墙发展历程
3. 防火墙核心技术
4. 防火墙体系结构
5. 防火墙功能与原理
6. 防火墙的接入方式
7. 防火墙的典型应用
8. 防火墙性能
9. 防火墙局限性
10. 防火墙的两个争议
11. WAF技术

[网络工程师必知：什么是下一代防火墙NGFW？ - 网络技术联盟站的文章 - 知乎]: https://zhuanlan.zhihu.com/p/460075728

firewall + UTM = NGFW (next generation firewall )