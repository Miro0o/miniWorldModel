# Link Layer (Tier-2) Switch

[TOC]



## Res
### Related Topics
↗ [Network Layer Switch](../../../0x05%20Network%20Layer/Network%20Layer%20Devices/Network%20Layer%20Switch.md)
↗ [Switch](../../../../🙌🏻%20Software%20Defined%20Network%20(SDN)/ONF%20-%20OpenFlow/OpenFlow%20Data%20Plane/Switch.md)
↗ [Virtual Switch (vSwitch)](../../../../Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Link%20Layer/Virtual%20Switch%20(vSwitch)/Virtual%20Switch%20(vSwitch).md)



## Intro
We’ll see that the switch itself is **transparent** to the hosts and routers in the subnet; that is, a host/router addresses a frame to another host/router (rather than addressing the frame to the switch) and happily sends the frame into the LAN, unaware that a switch will be receiving the frame and forwarding it.

---
> 🔗 https://en.wikipedia.org/wiki/Network_switch

A **network switch** (also called **switching hub**, **bridging hub**, and, by the IEEE, **MAC bridge**) is networking hardware that connects devices on a computer network by using packet switching to receive and forward data to the destination device.

A network switch is a **multiport network bridge** that uses MAC addresses to forward data at the data link layer (layer 2) of the OSI model. 
- Some switches can also forward data at the network layer (layer 3) by additionally incorporating routing functionality. Such switches are commonly known as **layer-3 switches** or **multilayer switches**.

**Switches for Ethernet** are the most common form of network switch. The first MAC Bridge was invented in 1983 by Mark Kempf, an engineer in the Networking Advanced Development group of Digital Equipment Corporation. The first 2 port Bridge product (LANBridge 100) was introduced by that company shortly after. The company subsequently produced multi-port switches for both Ethernet and FDDI such as GigaSwitch. Digital decided to license its MAC Bridge patent in a royalty-free, non-discriminatory basis that allowed IEEE standardization. This permitted a number of other companies to produce multi-port switches, including Kalpana. Ethernet was initially a shared-access medium, but the introduction of the MAC bridge began its transformation into its most-common point-to-point form without a collision domain.
- Switches also exist for other types of networks including Fibre Channel, Asynchronous Transfer Mode, and InfiniBand.

Unlike repeater hubs, which broadcast the same data out of each port and let the devices pick out the data addressed to them, a network switch learns the identities of connected devices and then only forwards data to the port connected to the device to which it is addressed.



## Link Layer Switch Functions
### 1️⃣ Forwarding & Filtering
Filtering is the switch function that determines whether a frame should be forwarded to some interface or should just be dropped. 

Forwarding is the switch function that determines the interfaces to which a frame should be directed, and then moves the frame to those interfaces. 

Switch filtering and forwarding are done with a **switch table**. The switch table contains entries for some, but not necessarily all, of the hosts and routers on a LAN. An entry in the switch table contains
(1) a MAC address, 
(2) the switch interface that leads toward that MAC address, and
(3) the time at which the entry was placed in the table. 

An example switch table for the uppermost switch in Figure 6.15 is shown in Figure 6.22. This description of frame forwarding may sound similar to our discussion of datagram forwarding

Indeed, in our discussion of generalized forwarding in Section 4.4, we learned that many modern packet switches can be configured to forward on the basis of layer-2 destination MAC addresses (i.e., function as a layer-2 switch) or layer-3 IP destination addresses (i.e., function as a layer-3 router). Nonetheless, we’ll make the important distinction that switches forward packets based on MAC addresses rather than on IP addresses. 
We will also see that a traditional (i.e., in a non-SDN context) switch table is constructed in a very different manner from a router’s forwarding table.

↗ [Link-Layer Addressing (MAC Addressing)](../Link-Layer%20Addressing%20(MAC%20Addressing).md)
#### Link Switch Forwarding Process
To understand how switch filtering and forwarding work, suppose a frame with destination address DD-DD-DD-DD-DD-DD arrives at the switch on interface x. The switch indexes its table with the MAC address DD-DD-DD-DD-DD-DD. There are three possible cases:

- There is no entry in the table for DD-DD-DD-DD-DD-DD. In this case, the switch forwards copies of the frame to the output buffers preceding all interfaces except for interface x. In other words, if there is no entry for the destination address, the switch broadcasts the frame.
- There is an entry in the table, associating DD-DD-DD-DD-DD-DD with interface x. In this case, the frame is coming from a LAN segment that contains adapter DD-DD-DD-DD-DD-DD. There being no need to forward the frame to any of the other interfaces, the switch performs the filtering function by discarding the frame.
- There is an entry in the table, associating DD-DD-DD-DD-DD-DD with interface y"x. In this case, the frame needs to be forwarded to the LAN segment attached to interface y. The switch performs its forwarding function by putting the frame in an output buffer that precedes interface y.

Let’s walk through these rules for the uppermost switch in Figure 6.15 and its switch table in Figure 6.22. Suppose that a frame with destination address 62-FE- F7-11-89-A3 arrives at the switch from interface 1. The switch examines its table and sees that the destination is on the LAN segment connected to interface 1 (that is, Electrical Engineering). This means that the frame has already been broadcast on the LAN segment that contains the destination. The switch therefore filters (that is, discards) the frame. Now suppose a frame with the same destination address arrives from interface 2. The switch again examines its table and sees that the destination is in the direction of interface 1; it therefore forwards the frame to the output buffer preceding interface 1. It should be clear from this example that as long as the switch table is complete and accurate, the switch forwards frames toward destinations without any broadcasting.


### 2️⃣ Self-Learning
A switch has the wonderful property (particularly for the already-overworked network administrator) that its table is built automatically, dynamically, and autonomously— without any intervention from a network administrator or from a configuration protocol. In other words, switches are self-learning. This capability is accomplished as follows:
1. The switch table is initially empty.
2. For each incoming frame received on an interface, the switch stores in its table (1) the MAC address in the frame’s source address field, (2) the interface from which the frame arrived, and (3) the current time. In this manner, the switch records in its table the LAN segment on which the sender resides. If every host in the LAN eventually sends a frame, then every host will eventually get recorded in the table.
3. The switch deletes an address in the table if no frames are received with that address as the source address after some period of time (the aging time). In this manner, if a PC is replaced by another PC (with a different adapter), the MAC address of the original PC will eventually be purged from the switch table.

Switches are **plug-and-play** devices because they require **no intervention** from a network administrator or user. A network administrator wanting to install a switch need do nothing more than connect the LAN segments to the switch interfaces. The administrator need not configure the switch tables at the time of installation or when a host is removed from one of the LAN segments. Switches are also **full-duplex**, meaning any switch interface can send and receive at the same time.



## Properties of Link Layer Switches
Having described the basic operation of a link-layer switch, let’s now consider their features and properties. We can identify several advantages of using switches, rather than broadcast links such as buses or hub-based star topologies:
- **Elimination of collisions**. In a LAN built from switches (and without hubs), there is no wasted bandwidth due to collisions! The switches buffer frames and never transmit more than one frame on a segment at any one time. As with a router, the maximum aggregate throughput of a switch is the sum of all the switch interface rates. Thus, switches provide a significant performance improvement over LANs with broadcast links.

- **Heterogeneous links**. Because a switch isolates one link from another, the different links in the LAN can operate at different speeds and can run over different media. For example, the uppermost switch in Figure 6.15 might have three1 Gbps 1000BASE-T copper links, two 100 Mbps 100BASE-FX fiber links, and one 100BASE-T copper link. Thus, a switch is ideal for mixing legacy equipment with new equipment.

- **Management**. In addition to providing enhanced security (see sidebar on Focus on Security), a switch also eases network management. For example, if an adapter malfunctions and continually sends Ethernet frames (called a jabbering adapter), a switch can detect the problem and internally disconnect the malfunctioning adapter. With this feature, the network administrator need not get out of bed and drive back to work in order to correct the problem. Similarly, a cable cut disconnects only that host that was using the cut cable to connect to the switch. In the days of coaxial cable, many a network manager spent hours “walking the line” (or more accurately, “crawling the floor”) to find the cable break that brought down the entire network. Switches also gather statistics on bandwidth usage, collision rates, and traffic types, and make this information available to the network man- ager. This information can be used to debug and correct problems, and to plan how the LAN should evolve in the future. Researchers are exploring adding yet more management functionality into Ethernet LANs in prototype deployments [Casado 2007; Koponen 2011].



## 2-Layer Switches (Link Layer Switches) 🆚 3-Layer Switches
#switch 

> ↗ [Network Layer Switch](../../../0x05%20Network%20Layer/Network%20Layer%20Devices/Network%20Layer%20Switch.md)

Whereas a router is a layer-3 packet switch, a switch is a layer-2 packet switch.

As we learned in network layer, routers are **store-and-forward** packet switches that forward packets using network-layer addresses. Although a switch is also a store-and-forward packet switch, it is fundamentally different from a router in that it forwards packets using **MAC addresses**.  

> Recall, however, that we learned in Section 4.4 that modern switches using the “**match plus action**” operation can be used to forward a layer-2 frame based on the frame's destination MAC address, as well as a layer-3 datagram using the datagram's destination IP address. Indeed, we saw that switches using the OpenFlow standard can perform generalized packet forwarding based on any of eleven different frame, datagram, and transport-layer header fields. 

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%203.43.51%20PM.png)


### Does 2-Layer Switches Have IP Address?
#switch #IP 

> 🔗 http://t.csdnimg.cn/1sxQb

二层交换机本身不具有IP地址。它工作在数据链路层,主要进行MAC地址学习与转发。
但是,二层交换机上会存在一些有IP地址的网络设备,主要包括:
- 管理接口: 二层交换机上会有一个用于管理交换机的接口,通常连接交换机的Console口或AUX口,该接口配置有IP地址,用于通过网络管理交换机。
- 视频接口: 一些二层交换机上提供了用于通过网络监控视频的摄像头接口,该接口也会配置IP地址。
- DHCP服务器接口: 部分二层交换机上可配置DHCP服务器,用于分配IP地址给交换机端口或VLAN,该DHCP服务器接口具有IP地址。
- SNMP代理接口: 二层交换机上运行的SNMP代理服务,用于实现通过SNMP管理交换机,该服务对应一个配置的IP地址。

除此之外,二层交换机上不应存在其它配置了IP地址的接口或服务。二层交换机的核心功能是进行MAC地址学习与数据帧转发,不需要具备IP地址。

所以,严格来说,二层交换机本身不具有也不需要IP地址。但是,由于管理、监控等实际需要,交换机上会运行一些依赖于IP的服务与接口,这些服务与接口对应配置的IP地址,属于这些服务的地址,而不是交换机本身的IP地址。

二层交换机转发数据依据MAC地址,而路由器则需要根据IP地址进行转发。这也是二层设备与三层设备在网络体系中发挥不同作用的原因。

总之,二层交换机不具备也不需要配置IP地址,它只需要学习和转发MAC地址。但是,交换机上会运行一些需要IP地址的管理服务与接口,这些IP地址并不代表交换机本身的地址,仅用于访问这些依赖网络的管理功能使用。


### Pros & Cons between Switches & Routers
#switch #router
#### Pros & Cons of Switches
First consider the pros and cons of switches.
1. As mentioned above, switches are plug-and-play, a property that is cherished by all the overworked network administrators of the world. 
2. Switches can also have relatively high filtering and forwarding rates -- as shown in Figure 6.24, switches have to process frames only up through layer 2, whereas routers have to process datagrams up through layer 3. 
3. On the other hand, to prevent the cycling of broadcast frames, the active topology of a switched network is restricted to a spanning tree.
4. Also, a large switched network would require large ARP tables in the hosts and routers and would generate substantial ARP traffic and processing. 
5. Furthermore, switches are susceptible to broadcast storms -- if one host goes haywire and transmits an endless stream of Ethernet broadcast frames, the switches will forward all of these frames, causing the entire network to collapse.
#### Pros & Cons of Routers
Now consider the pros and cons of routers. 
1. Because network addressing is often hierarchical (and not flat, as is MAC addressing), packets do not normally cycle through routers even when the network has redundant paths. (However, packets can cycle when router tables are misconfigured; but as we learned in Chapter 4, IP uses a special datagram header field to limit the cycling.) Thus, packets are not restricted to a spanning tree and can use the best path between source and destination.
2. Because routers do not have the spanning tree restriction, they have allowed the Internet to be built with a rich topology that includes, for example, multiple active links between Europe and North America. 
3. Another feature of routers is that they provide firewall protection against layer-2 broadcast storms. 
4. Perhaps the most significant drawback of routers, though, is that they are not plug-and-play -- they and the hosts that connect to them need their IP addresses to be configured. 
5. Also, routers often have a larger per-packet processing time than switches, because they have to process up through the layer-3 fields.
6. Finally, there are two different ways to pronounce the word router, either as “rootor” or as “rowter,” and people waste a lot of time arguing over the proper pronunciation [Perlman 1999].
#### 🎯 Choose between Switches & Routers
Typically, small networks consisting of a few hundred hosts have a few LAN segments. Switches suffice for these small networks, as they localize traffic and increase aggregate throughput without requiring any configuration of IP addresses. But larger networks consisting of thousands of hosts typically include routers within the network (in addition to switches). The routers provide a more robust isolation of traffic, control broadcast storms, and use more “intelligent” routes among the hosts in the network.

For more discussion of the pros and cons of switched versus routed networks, as well as a discussion of how switched LAN technology can be extended to accommodate two orders of magnitude more hosts than today’s Ethernets, see [Meyers 2004; Kim 2008].



## Other Types of Switches
### ToR (Top of Rack) Switch
↗ [IDC & Data Center Networking](../../../../🚀%20High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies/IDC%20&%20Data%20Center%20Networking.md)



## Ref

