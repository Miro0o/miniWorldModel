# IDC & Data Center Networking

[TOC]



## Res
### Related Topics
↗ [0x06 Data Link Layer](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/0x06%20Data%20Link%20Layer.md)
↗ [Link Layer (Tier-2) Switch](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/Link%20Layer%20(Tier-2)%20Switch.md)
↗ [Network Virtualization](../Network%20Virtualization/Network%20Virtualization.md)

↗ [Cloud Computing & Cloud Native](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)
↗ [Cloud Operating System & Platform (System Level Engineering)](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering).md)
↗ [Software Defined Network (SDN)](../🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md)
↗ [Datacenter](../../🍕%20Computer%20Storage%20&%20Database%20Systems/🚀%20High%20Performance%20Storage%20(HPS)/Datacenter.md)


### Learning Resources
📂 https://support.huawei.com/enterprise/zh/doc/EDOC1100023543/426cffd9
华为数据中心网络设计指南

通过阅读本书，您将了解以下内容：
- 第一章：介绍华为CE系列交换机的特点、优势以及在网络中的位置。您将看到，华为提供类型丰富、满足不同网络需求的多款数据中心交换机，其中肯定有您需要的那一款。
- 第二章：介绍交换机在机架或机柜的部署方式，或者也可以理解为服务器的接入方式。选择TOR还是EOR/MOR，在这里您会找到答案。
- 第三章：介绍数据中心网络中的布线设计。在合适的场景下使用最优的线缆，是构建一张高速数据中心网络的必要条件。
- 第四章：介绍如何合理的设置收敛比。在网络设计过程中，收敛比是必然要考虑的要素。收敛比的设定取决于服务器的类型、带宽需求以及未来的网络扩展等多个因素。如果您想让网络达到线速，或者最大程度的满足东西向和南北向流量的最优化转发，那么您应该阅读下这一章的内容。
- 第五章：介绍华为提供的多种Fabric网络技术。从本章开始，专题的重心从物理架构设计转移到逻辑架构设计。这些Fabric技术可以帮助您实现设备虚拟化，简化网络管理，避免二层环路。
- 第六章：介绍IP Fabric和三层路由的设计原则。为什么Spine-Leaf架构能够成为目前大多数数据中心网络的选择？数据中心网络三层路由协议的选择依据是什么？这就是第六章要回答的问题。
- 第七章：介绍Overlay网络和技术。数据中心中有海量租户（VM），他们之间通常需要进行跨物理网络的二层或三层互通。Overlay网络是构建在物理Underlay网络之上的逻辑网络，通过构建点到点或点到多点的隧道，实现租户之间的通信需求。本章重点讲述目前应用最广泛的Overlay技术——VXLAN。
- 第八章：介绍VXLAN控制面协议BGP EVPN的实现原理。有了BGP EVPN，VXLAN可以进行隧道自动建立以及表项学习，降低了网络中的泛洪流量。



## Intro



## Ref
[浅谈：数据中心网络架构的演进]: https://www.ruijie.com.cn/jszl/89179/

**传统三层网络架构**
- 传统企业数据中心因一些业务应用，为满足网络的组网，广播功能及网络桥接和清晰分层，一般都采用分层模块化设计。在传统的大型数据中心，网络通常呈三层网络架构，分别是：
	- Access Layer（接入层）：接入交换机通常位于机架顶部，也被称为[ToR交换机](https://www.ruijie.com.cn/cp/jh-shjzhx/)，用于连接所有的计算节点，在数据中心中，以机柜交换机的形式存在；
	- Aggregation Layer（汇聚层）：汇聚交换机连接Access交换机，做网关及路由策略等功能，同时各种[防火墙](https://www.ruijie.com.cn/cp/aq-wgl/wallz5100/)，负载均衡业务也在此部署。
	- Core Layer（核心层）：核心交换机为进出数据中心的包提供高速转发，用于汇聚层的互联，并实现整个[数据中心](https://www.ruijie.com.cn/cp/jh-shjzhx/)与外部网络的三层通信。
- 早期的数据中心大多是南北向流量（即数据中心之外的客户端到数据中心服务器之间的流量），三层网络架构可以在核心交换机统一控制数据的流入流出，实现数据流量做负载均衡。从示意图可见，汇聚交换机是L2和L3网络的分界点，汇聚交换机以下的是L2网络，以上是L3网络。每组汇聚交换机管理一个POD（Point Of Delivery），BUM报文域控制在单个汇聚POD内，汇聚层往上采用路由转发，因此服务器的迁移也就限制在POD内，影响网路在各种故障场景下的收敛。

![](../../../../../../Assets/Pics/Pasted%20image%2020240512151446.png)

**CLOS网络架构**
随着技术发展，现代互联网数据中心没有传统网络的负担且要求资源的灵活弹性扩展，东西向流量（数据中心内的服务器之间的流量）逐渐在数据中心中占据主导地位。由于传统三层网络架构存在的问题，云计算的发展要求计算资源可灵活分配，这些催生数据中心网络架构从分层模块化转向可大规模扩展的CLOS架构。
在数据中心里CLOS架构是一个三级互连架构，包含了输入级，中间级，输出级。其设计理念是用多个小规模、低成本的单元构建复杂、大规模的网络架构。在具体应用中又被分为两种，
- 一种是胖树（Fat-Tree）的CLOS网络架构，标志CLOS正式进入数据中心网络架构领域，胖树架构主要是无带宽的收敛，整网三级部署；
- 另一种是二层Spine-Leaf网络架构，因为源于交换机内部的Switch Fabric，因此也被称为二层Fabric网络架构。从架构上看，可以看出传统的三层网络架构是垂直的结构，而Spine-Leaf网络架构是扁平的，更易于水平扩展。

![](../../../../../../Assets/Pics/Pasted%20image%2020240512151441.png)


[回顾谷歌数据中心分布式交换架构Aquila]: https://mp.weixin.qq.com/s/O5Ed766Loyht4MKIH-fKTg

[👍 软考网络工程师的难点之一 堆叠技术详解 | 微信公众号]: https://mp.weixin.qq.com/s/CEE8sNVqAwKL3zUFg72n5w

**网络堆叠技术**（Stacking Technology）是指将多个网络设备（如交换机或路由器）连接在一起，形成一个逻辑上单一的设备，以简化管理和提高网络性能。以下是对堆叠技术的详细解释以及一个案例讲解...

[数据中心架构ToR和EoR【总结】]: https://www.cnblogs.com/Anker/p/8998904.html
[深度好文：接入交换机三种架构TOR、EOR 和 MOR：有什么区别？]: https://cloud.tencent.com/developer/article/2239229
[数据中心EOR/MOR/TOR布线概念（整理）]: https://www.cnblogs.com/yickel/p/9787130.html
