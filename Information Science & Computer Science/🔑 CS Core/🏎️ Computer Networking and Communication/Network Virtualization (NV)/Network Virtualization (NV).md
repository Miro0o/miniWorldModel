# Network Virtualization (NV)

[TOC]



## Res
### Related Topics
↗ [Computer Virtualization](../../../Software%20Engineering/🦄%20Computer%20Virtualization/Computer%20Virtualization.md)
↗ [Hardware-assisted Virtualization](../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/📌%20Hardware-assisted%20Virtualization/Hardware-assisted%20Virtualization.md) (Chipset-assisted Virtualization/Network Virtualization)
↗ [IO & Network Virtualization](../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/IO%20&%20Network%20Virtualization.md)

↗ [Linux Network](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🎠%20Linux%20Network/Linux%20Network.md)
- ↗ [Linux Network Virtualization](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🎠%20Linux%20Network/Linux%20Network%20Virtualization/Linux%20Network%20Virtualization.md)

↗ [vLAN & VxLAN](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/vLAN%20&%20VxLAN/vLAN%20&%20VxLAN.md)
↗ [Virtual Routing and Forwarding (VRF)](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x05%20Network%20Layer/🎮%20Control%20Plane%20(Routing%20&%20Managements)/Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection)/Virtual%20Routing%20and%20Forwarding%20(VRF).md)

↗ [Anonymous & Private Network /VPN](../../../CyberSecurity/Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
- ↗ [Tunneling & VPN (Virtual Personal Network)](../../../CyberSecurity/Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
- ↗ [SSH Tunneling](../../../CyberSecurity/Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/📌%20SSH%20Services%20&%20Components/SSH%20Tunneling.md)

↗ [Cloud Native /VPC](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Service%20(Delivery)%20Models/IaaS%20(Infrastructure%20as%20a%20Service)/VPC.md)
↗ [Software Defined Network (SDN)](../🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md)

↗ [OpenStack Networking Service (Neutron)](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/🔞%20OpenStack/OpenStack%20Components/OpenStack%20Networking%20Service%20(Neutron)/OpenStack%20Networking%20Service%20(Neutron).md)



## Overview
![](../../../../Assets/Pics/Pasted%20image%2020230412170931.png)

![](../../../../Assets/Pics/Pasted%20image%2020230413110142.png)
<small>https://zhuanlan.zhihu.com/p/332290846</small>



## Network Virtualization Development History & Future

> 网络虚拟化过程中主要诞生过 4 类过渡技术：虚拟局域网络（VLAN）、虚拟专用网络（VPN）、主动可编程网络（APN）、覆盖网络(overlay network)。
> 
> 网络虚拟化的研究现在主要集 中于 3 个领域：云计算应用、平台化实现、软件定义网络。
> 
> 认为网络虚拟化的未来在 性能保障、可靠性、易用性和完备性等方面需要加强，为此未来的网络虚拟化需要 优化自身服务结构，并向无线网络、光网络等领域推广，此外还需要提供更加友好 的可编程接口（API）以及网络功能。 (2015)

![](../../../../Assets/Pics/Pasted%20image%2020230412170938.png)

↗ [vLAN & VxLAN](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/vLAN%20&%20VxLAN/vLAN%20&%20VxLAN.md)
↗ [Tunneling & VPN (Virtual Personal Network)](../../../CyberSecurity/Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
↗ [APN (Access Point Name)](APN%20(Access%20Point%20Name).md)
↗ [Overlay Network](Overlay%20Network.md)



## Network Virtualization Technologies Taxonomy
> 🔗 https://www.cnblogs.com/sammyliu/articles/4390650.html


### 1️⃣ Network Virtualization within Host
#### I/O Virtualization

#### Virtual Access


### 2️⃣ Network Virtualization in Network Connection
#### Infiniband
#### FCOE


### 3️⃣ Network Virtualization in Network Exchange ==(Overlay Transport Protocols)==
#### Network Virtualization Overlays (NOV2 /NOV3)
Apart from the underlay network(IP network), **network overlays** are virtual networks of interconnected nodes that share an underlying physical network, allowing deployment of applications that require specific network topologies without the need to modify the underlying network.  

1️⃣ With the help of Network overlay, you can optimise the device functions and also reduces the complexity of the network devices.
- In the case of server-based overlays, this function is implemented on the server.
- In the case of network-based overlays, this function is implemented on the first switch (at the top of the rack). 

2️⃣ With the help of Ovelay networks you can achieve and provide **scalable Layer II networks** for a _multitenant cloud_ that extends beyond 4000 VLANs. This capability is very important for private and public cloud hosted environments.  

3️⃣ You can also maintain the fabric scalability and flexibility, because the overlay virtual network no longer needs to be constrained to a single physical location. The overlay encapsulation also allows the underlying infrastructure address space to be administered separately from the tenant address space.
#### OTV (Overlay Transport Virtualization)
↗ [Overlay Network](Overlay%20Network.md)
#### LISP (Locator/Identifier Separation Protocol)

#### VxLAN (Virtual Extensible LAN)
↗ [vLAN & VxLAN](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/vLAN%20&%20VxLAN/vLAN%20&%20VxLAN.md)
#### NVGRE (Network Virtualization Using Generic Routing Encapsulation)
↗ [GRE (Generic Routing Encapsulation)](../../../CyberSecurity/Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/GRE%20(Generic%20Routing%20Encapsulation)/GRE%20(Generic%20Routing%20Encapsulation).md)
↗ [NVGRE (Network Virtualization using GRE)](../../../CyberSecurity/Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/GRE%20(Generic%20Routing%20Encapsulation)/NVGRE%20(Network%20Virtualization%20using%20GRE).md)

NVGRE allows the creation of virtual Layer 2 topologies on top of a physical Layer 3 network. With the help of NVGRE you can achieve by tunneling Ethernet frames inside an IP packet over a physical network. NVGRE supports a 24-bit segment ID or virtual subnet identifier (VSID) similar to VXLAN, providing up to 16 million virtual segments that can uniquely identify a given segment.

The difference between VXLAN and NVGRE is that NVGRE header includes an optional flow ID field. In multi-pathing deployments, network routers and switches that can parse this header can use this field together with the VSID to add flow-based entropy, although this feature requires additional hardware capabilities.

> **Note**: Microsoft is one of the major vendor who uses NVGRE concept and still a lot of vendors are doing their efforts to develop NVGRE like Cisco, VMware and Juniper.
#### STT (Stateless Transport Tunneling)
![](../../../../Assets/Pics/Screenshot%202023-04-16%20at%204.00.25%20PM.png)
<small> STT tunneling</small>
#### 🙌🏻 SDN
↗ [Software Defined Network (SDN)](../🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md)



## NFV (Network Function Virtualization)
↗ [NFV (Network Function Virtualization)](NFV%20(Network%20Function%20Virtualization)/NFV%20(Network%20Function%20Virtualization).md)



## Ref
[👍 虚拟化 - 网络虚拟化 | cnblogs]: https://www.cnblogs.com/sammyliu/articles/4390650.html

> 在网络虚拟化方面不仅很多大公司在抢占话语权，很多初创公司也在努力开拓机会，这里把我所知道的中小公司稍微做下总结，供大家参考：
> - Nicira：专注于OpenFlow的神秘公司。
> - [Big Switch](http://gigaom.com/cloud/bigswitch-nets-13-7m-to-become-vmware-of-networking/)：提供基于OpenFlow的网络虚拟化解决方案
> - Juniper Networks：支持OpenFlow
> - Open vSwitch: 一个开源的虚拟switch ，它是一个软件switch能运行在Hypervisor里, 目前已是[XenServer 6.0](http://support.citrix.com/article/CTX130418) 的缺省switch。
> - ConteXtream：借鉴Grid的思想，通过DHT（Distributed Hash Table）在传统的网络之上建立一个虚拟的抽象的网络，解决云主机服务提供商们在网络灵活性，多租户和扩展性方面的挑战。
> - Embrane： 提供一种on-demand的虚拟化网络服务，比如服务的负载均衡，防火墙，VPN。
> - Xsigo:  提供基于Infiniband技术的数据中心全虚拟化方案。
> - NextIO：提供基于PCIe技术 的I/O虚拟化产品。

[Comparison: VXLAN vs NVGRE vs STT vs LISP - Overlay Network Technologies]: https://www.routexp.com/2020/03/comparison-vxlan-vs-nvgre-vs-stt-vs.html

[SDN与网络虚拟化 | SDNLAB]: https://www.sdnlab.com/15475.html#:~:text=网络虚拟化是一种,实现弹性的网络%E3%80%82
> 网络虚拟化是一种重要的网络技术，该技术可在物理网络上虚拟多个相互隔离的虚拟网络，从而使得不同用户之间使用独立的网络资源切片，从而提高网络资源利用率，实现弹性的网络。SDN的出现使得网络虚拟化的实现更加灵活和高效，同时网络虚拟化也成为SDN应用中的重量级应用。
> 本文将介绍SDN与网络虚拟化的关系以及通过SDN实现网络虚拟化的方法，其中第二部分内容将从虚拟化平台，网络资源虚拟化和网络隔离三个方面介绍。

[理解（计算、网络，存储）虚拟化，只需一篇文章]: https://blog.csdn.net/weixin_57726902/article/details/124072149

[华为云计算（3）——网络虚拟化 - IT小组的文章 - 知乎]: https://zhuanlan.zhihu.com/p/332290846

[👍 openstack学习-网络管理(转)]: https://heitaoq66.github.io/2020/03/19/openstack学习-网络管理/
![](../../../../Assets/Pics/Pasted%20image%2020240614000553.png)


