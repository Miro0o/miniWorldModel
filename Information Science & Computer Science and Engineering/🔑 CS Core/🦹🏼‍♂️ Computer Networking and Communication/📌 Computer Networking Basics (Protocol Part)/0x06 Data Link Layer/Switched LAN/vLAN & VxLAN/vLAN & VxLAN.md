# vLAN & VXLAN

[TOC]



## Res
### Related Topic
↗ [Link Layer (Tier-2) Switch](../../📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/Link%20Layer%20(Tier-2)%20Switch.md)
↗ [Switched LAN](../Switched%20LAN.md)

↗ [Tunneling & VPN (Virtual Personal Network)](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
↗ [Tunneling Protocols & Technologies](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/Tunneling%20Protocols%20&%20Technologies.md)


### Learning Resources
🎬【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=39&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=40&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

https://support.huawei.com/enterprise/zh/doc/EDOC1100198437/4b7cb278
CloudEngine 9800, 8800, 6800, 5800 V200R020C10 配置指南-VXLAN | Huawei



## Intro
### LAN (Local Area Network)
↗ [Switched LAN](../Switched%20LAN.md)


### vLAN (Virtual Local Area Network)
As the name suggests, a switch that supports VLANs allows multiple virtual local area networks to be defined over a single physical local area network infrastructure. **Hosts within a VLAN communicate with each other as if they (and no other hosts) were connected to the switch**.

---
> 🔗 https://developer.aliyun.com/article/945531#slide-1

VLAN（Virtual Local Area Network）即虚拟局域网，是将一个物理的LAN在逻辑上划分成多个广播域的通信技术。每个VLAN是一个广播域，VLAN内的主机间可以直接通信，而VLAN间则不能直接互通。这样，广播报文就被限制在一个VLAN内。虚拟局域网（VLAN）是在局域网（LAN）的逻辑上划分成多个广播域，每一个广播域就是一个 VLAN。下图为交换机划分虚拟局域网。交换机把一个广播域划分成了3个广播域，物理上这些设备在一个交换机上，但是逻辑上已经分别划分到三个交换机上，所以会有三个局域网（虚拟局域网），三个广播域。

![](../../../../../../../Assets/Pics/Pasted%20image%2020240614000657.png)

交换机划分 VLAN 说明，VLAN1 这个虚拟局域网编号，一般工作于管理组，所以普通 VLAN 都是从 2 开始编号，默认情况下，所有虚拟局域网都隶属于 VALN1。在上图中不同的 VLAN 相互间是不能通讯的。为了解决这个问题，引进了三层交换机（或路由器）等 OSI 的三层设备实现跨网段通信。

![|500](../../../../../../../Assets/Pics/Pasted%20image%2020240614001440.png)

**VLAN特点**
- 与LAN不同，VLAN(虚拟局域网)是LAN的逻辑分离，其在单个带宽内创建多个LAN段。虚拟局域网的特点是在局域网中构建的局域网段可以根据需要进行跨接和收缩。单个广播域的这种划分会产生更多的带宽。它消除了为组织的各种子网安装多个不同交换机的需要。
- 交换机用于实现VLAN；每个交换机端口都分配有一个VLAN。同一个VLAN 中的端口可以共享广播，不同VLAN中的端口不能。它还通过将广播限制到交换机中存在的每个端口并从单个广播构建多个广播来提供安全性。
- VLAN提供了更大的灵活性，因为端口也可以在需要时进行切换；它无需购买昂贵的交换机来分隔网络中的子网可降低成本。VLAN必须实施分层网络寻址方案，通过该方案，IP地址可以系统地分配给网段或VLAN。

**LAN与VLAN主要区别**
- 创建LAN需要集线器、交换机和路由器等设备；VLAN是使用交换机或网桥创建的。
- LAN中只有一个广播域，因此每个数据包都会广播到除发送设备之外的每个连接；VLAN可以在单个介质中实现多个广播域并且可以将数据包发送到所需的LAN网段。
- LAN中延迟计数较高，因为使用单个广播域并导致冲突；VLAN产生低延迟。
- 安全方面：LAN不如VLAN安全，因为它通过隔离不同VLAN中的用户来限制将数据包传输到不必要的端口。
- VLAN更加灵活和可扩展，可相应地添加和删除新用户，并将其部署在合适的LAN段中而不管物理位置如何，它还可以识别流量。
- VLAN还通过为两个独立的网络使用一台交换机而不是使用两台交换机来降低硬件成本。
- VLAN可以轻松地进行故障排除和管理，因为它使用了特殊的技术来做到这一点。与提供更高效率和准确性的VLAN相比，LAN性能是平均的。
- LAN涉及标准LAN协议，例如令牌环和FDDI，而在VLAN中，网络机制中采用特殊协议，例如ISL(交换机间链路)和VTP(VPN 中继协议）。
#### vLANs Types & Working Layers
> 🔗 https://developer.aliyun.com/article/945531#slide-1

1. ==静态 VLAN。== 静态 VLAN 又被称为**基于端口的 VLAN（PortBased VLAN）**。是为了明确指定哪个 Port 属于哪个 VLAN ID。
	1. 在 VLAN 管理员最初配置交换机 Port 和 VLAN ID 的对应关系时，就已经固定了这种对应关系，即一个 Port 只能对应一个 VLAN ID，之后无法进行更改，除非管理员再重新配置。
	2. 当一台设备接到这个 Port 上的时候，怎么判断该主机的 VLAN ID 与 Port 对应呢，这里是根据 IP 配置决定的，我们知道每个 VLAN 都有一个子网号，并对应着哪些 Port，如果设备要求的 IP 地址和该 Port 对应的 VLAN 的子网号不匹配，则连接失败，该设备将无法正常通信。所以除了连接到正确的 Port 外，也必须给设备分配属于该 VLAN 网络段的 IP 地址，这样才能加入到该 VLAN 中。
	3. 由于需要一个个端口地指定，因此当网络中的计算机数目超过一定数字（比如数百台）后，设定操作就会变得烦杂无比。并且，客户机每次变更所连端口，都必须同时更改该端口所属 VLAN 的设定——这显然不适合那些需要频繁改变拓补结构的网络。
2. ==动态 VLAN。== 动态 VLAN 则是根据每个端口所连的计算机，随时改变端口所属的 VLAN。这就可以避免上述的更改设定之类的操作。动态 VLAN 可以大致分为 3 类：  
	1. **基于 MAC 的 VLAN**。基于 MAC 地址的 VLAN ，就是通过查询并记录端口所连的计算机网卡的 MAC 地址来决定端口的所属。假定有一个 MAC 地址 “A” 被交换机设定为属于 VLAN 10，那么不论 MAC 地址为 “A” 的这台计算机连在交换机哪个端口，该端口都会被划分到 VLAN 10 中去。计算机连在端口 1 时，端口 1 属于 VLAN 10 ；而计算机连在端口 2 时，则是端口 2 属于 VLAN 10。基于 MAC 地址的 VLAN ，在设定时必须调查所连接的所有计算机的 MAC 地址并加以登录。而且如果计算机交换了网卡，还是需要更改设定。
	2. **基于 IP 的 VLAN**。基于子网的 VLAN，则是通过所连计算机的 IP 地址，来决定端口所属 VLAN 的。不像基于 MAC 地址的 VLAN，即使计算机因为交换了网卡或是其他原因导致 MAC 地址改变，只要它的 IP 地址不变，就仍可以加入原先设定的 VLAN。因此，与基于 MAC 地址的 VLAN 相比，能够更为简便地改变网络结构。IP 地址是 OSI 参照模型中第三层的信息，所以我们可以理解为基于子网的 VLAN 是一种在 OSI 的第三层设定访问链接的方法。
	3. **基于用户的 VLAN**。基于用户的 VLAN，则是根据交换机各端口所连的计算机上当前登录的用户，来决定该端口属于哪个 VLAN。这里的用户识别信息，一般是计算机操作系统登录的用户，比如可以是 Windows 域中使用的用户名。这些用户名信息，属于 OSI 第四层以上的信息。

----
1. In a **↗ [Port-based vLAN](Static%20vLAN/Port-based%20vLAN.md)**, the switch’s ports (interfaces) are divided into groups by the network manager. Each group constitutes a VLAN, with the ports in each VLAN forming a **broadcast domain** (i.e., broadcast traffic from one port can only reach other ports in the group)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%204.24.55%20PM.png)

2. In **↗ [MAC-based vLAN](Dynamic%20vLAN/MAC-based%20vLAN.md)**, the network manager specifies the set of MAC addresses that belong to each VLAN; whenever a device attaches to a port, the port is connected into the appropriate VLAN based on the MAC address of the device. 
3. VLANs can also be defined based on **↗ [Network-Layer Protocols Based vLAN & IP Based vLAN](Dynamic%20vLAN/Network-Layer%20Protocols%20Based%20vLAN%20&%20IP%20Based%20vLAN.md)** (e.g., IPv4, IPv6, or AppleTalk) and other criteria. (**↗ [User & Role Based vLAN](Dynamic%20vLAN/User%20&%20Role%20Based%20vLAN.md)**)
4. It is also possible for VLANs to be **extended across IP routers**, allowing islands of LANs to be connected together to form a single VLAN that could span the globe. 

See the 802.1Q standard [IEEE 802.1q 2005] for more details.



### VXLAN (Virtual eXtensible Local Area Network)
> 🔗 https://developer.aliyun.com/article/945531#slide-1

> vlan + vpn ?

VXLAN（Virtual eXtensible Local Area Network，虚拟扩展局域网），是由IETF定义的NVO3（Network Virtualization over Layer 3）标准技术之一，是对传统VLAN协议的一种扩展。VXLAN本质上是一种隧道技术，在源网络设备与目的网络设备之间的IP网络上，建立一条逻辑隧道，将用户侧报文经过特定的封装后通过这条隧道转发。从用户的角度来看，接入网络的服务器就像是连接到了一个虚拟的二层交换机的不同端口上（可把蓝色虚框表示的数据中心VXLAN网络看成一个二层虚拟交换机），可以方便地通信。

![](../../../../../../../Assets/Pics/Pasted%20image%2020240614001230.png)


**为什么需要VXLAN呢？**
这和数据中心服务器侧的虚拟化趋势紧密相关，一方面服务器虚拟化后出现了虚拟机动态迁移，要求提供一个无障碍接入的网络；另一方面，数据中心规模越发庞大，租户数量激增，需要网络提供隔离海量租户的能力。采用VXLAN可以满足上述两个关键需求。

**那VXLAN都能够解决什么问题？**
1. 突破VLAN ID数量限制
	1. VLAN能支持的二层网络数量有限。VLAN Tag总共4个字节，其中有12bit用来标识不同的二层网络，这样总共是4000多个。而VXLAN header有8个字节，有24bit用来标识不同的二层网络，这样总共是1600多万个。
2. 突破TOR交换机MAC地址表限制
	1. 数据中心的虚拟化给网络设备带来的最直接影响就是：之前TOR（Top Of Rack）交换机的一个端口连接一个物理主机对应一个MAC地址，但现在交换机的一个端口虽然还是连接一个物理主机但是可能进而连接几十个甚至上百个虚拟机和相应数量的MAC地址。传统交换机是根据MAC地址表实现二层转发。如下图所示，交换机在收到一个数据帧之后，根据VLAN和目的MAC地址，查找到相应的交换机端口，再将数据帧从相应的端口发出。
3. 突破单条网络链路
	1. VLAN协议使用STP（Spanning Tree Protocol）来管理多条线路，STP根据优先级和cost，只会选出一条线路来工作，这样可以避免数据传递的环路。这种主备（active-passive）的模式，比只连接一条线路肯定是有优势，但是对于用户来说，相当于花了N倍的钱，却只用到了1倍的服务。当网络流量较大的时，也不能通过增加线路来提升性能。而VxLAN因为是通过UDP封装，在三层网络上传输。虽然传递的还是二层的Ethernet Frame，但是VXLAN可以利用一些基于三层的协议来实现多条线路共同工作（active-active），以实现负载均衡，例如ECMP，LACP。现在对于用户来说，花了N倍的钱，也用到了N倍的服务。当网络流量较大时，现在可以通过增加线路来减轻现有线路的负担。这在提升数据中心网络性能，尤其是东西向流量的性能时，尤其重要。这是VXLAN相比VLAN，能带来的另一个好处。

![|500](../../../../../../../Assets/Pics/Pasted%20image%2020240614001248.png)



## Ref
[👍 深入理解lan、vlan、vxlan《OpenStack 网络》]: https://developer.aliyun.com/article/945531#slide-1

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA

![](../../../../../../../Assets/Pics/Pasted%20image%2020240510151034.png)

![](../../../../../../../Assets/Pics/Pasted%20image%2020240510151102.png)

![](../../../../../../../Assets/Pics/Pasted%20image%2020250316222233.png)

[GVRP (GARP VLAN Registration Protocol or Generic VLAN Registration Protocol) | TechTarget]: https://www.techtarget.com/searchnetworking/definition/GVRP
Becoming part of a formal IEEE 802.1ak standard amendment in 2007, Multiple VLAN Registration Protocol replaced GVRP, as it was found to be prone to performance issues that could potentially cause prolonged network convergence. 
...
Technically, GVRP is still included as part of the IEEE standard, as the amendment did not completely remove it. It is expected to be removed in the future, but until that happens, GVRP is still being used.
