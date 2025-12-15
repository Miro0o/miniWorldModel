# Network Devices Overview

[TOC]



## Res
### Related Topics
↗ [Cloud Native Network](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Cloud%20Runtime/Cloud%20Native%20Network/Cloud%20Native%20Network.md)

↗ [Network Layer Devices](0x05%20Network%20Layer/Network%20Layer%20Devices/Network%20Layer%20Devices.md)
↗ [Link Layer Network Devices](0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/Link%20Layer%20Network%20Devices.md)
↗ [Physical Layer Network Devices](0x07%20Physical%20Layer/Physical%20Layer%20Network%20Devices/Physical%20Layer%20Network%20Devices.md)

↗ [Network Chips & Devices](../../Hardware%20&%20EE%20Related%20Theories/Network%20Chips%20&%20Devices/Network%20Chips%20&%20Devices.md)
↗ [Network Interface Cards (NIC)](../../Hardware%20&%20EE%20Related%20Theories/Auxiliary%20Hardware%20&%20Peripherals%20(IO%20Devices)/Input%20&%20Output%20Devices/Network%20Interface%20Cards%20(NIC)/Network%20Interface%20Cards%20(NIC).md)



## Network Devices Overview
**Network Devices:** Network devices, also known as networking hardware, are physical devices that allow hardware on a computer network to communicate and interact with one another. For example Repeater, Hub, Bridge, Switch, Routers, Gateway, Brouter, and NIC, etc.


### 👉 Repeater
**Repeater** – A repeater operates at the **physical layer**. Its job is to regenerate the signal over the same network before the signal becomes too weak or corrupted to extend the length to which the signal can be transmitted over the same network. An important point to be noted about repeaters is that they not only amplify the signal but also regenerate it. When the signal becomes weak, they copy it bit by bit and regenerate it at its star topology connectors connecting following the original strength. **It is a 2-port device** 


### 👉 Hub
集线器就是将网线集中到一起的机器，也就是多台主机和设备的连接器。集线器的主要功能是对接收到的信号进行同步整形放大，以扩大网络的传输距离，是中继器的一种形式，区别在于集线器能够提供多端口服务，也称为多口中继器。集线器在OSI/RM中的物理层。集线器的基本功能是信息分发，它把一个端口接收的所有信号向所有端口分发出去。一些集线器在分发之前将弱信号重新生成，一些集线器整理信号的时序以提供所有端口间的同步数据通信。

集线器实际就是一种多端口的中继器。集线器一般有4、8、16、24、32等数量的RJ45接口，通过这些接口，集线器便能为相应数量的电脑完成“中继”功能（将已经衰减得不完整的信号经过整理，重新产生出完整的信号再继续传送）。由于它在网络中处于一种“中心”位置，因此集线器也叫做“HUB”。

集线器的工作原理很简单，比如有一个具备8个端口的集线器，共连接了8台电脑。集线器处于网络的“中心”，通过集线器对信号进行转发，8台电脑之间可以互连互通。具体通信过程是这样的：假如计算机1要将一条信息发送给计算机8，当计算机1的网卡将信息通过双绞线送到集线器上时，集线器并不会直接将信息送给计算机8，它会将信息进行“广播”——将信息同时发送给8个端口，当8个端口上的计算机接收到这条广播信息时，会对信息进行检查，如果发现该信息是发给自己的，则接收，否则不予理睬。由于该信息是计算机1发给计算机8的，因此最终计算机8会接收该信息，而其它7台电脑看完信息后，会因为信息不是自己的而不接收该信息。

---
**Hub** – A hub is a basically **multi-port repeater**. A hub connects multiple wires coming from different branches, for example, the connector in star topology which connects different stations. 
1. Hubs cannot filter data, so data packets are sent to all connected devices.  In other words, the [collision domain](https://en.wikipedia.org/wiki/Collision_domain) of all hosts connected through Hub remains one.  
2. Also, they do not have the intelligence to find out the best path for data packets which leads to inefficiencies and wastage.

Types of hubs:
- **Active Hub:** These are the hubs that have their power supply and can clean, boost, and relay the signal along with the network. It serves both as a repeater as well as a wiring center. These are used to extend the maximum distance between nodes.
- **Passive Hub:** These are the hubs that collect wiring from nodes and power supply from the active hub. These hubs relay signals onto the network without cleaning and boosting them and can’t be used to extend the distance between nodes.
- **Intelligent Hub:** It works like an active hub and includes remote management capabilities. They also provide flexible data rates to network devices. It also enables an administrator to monitor the traffic passing through the hub and to configure each port in the hub.


### 👉 Bridge
↗ [Network Bridge](0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/Network%20Bridge.md)


### 👉 Switch
> ↗ [Link Layer (Tier-2) Switch](0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/Link%20Layer%20(Tier-2)%20Switch.md)
> ↗ [Virtual Security Switch](../Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Link%20Layer/Virtual%20Switch%20(vSwitch)/Virtual%20Security%20Switch.md)

交换机是集线器的升级换代产品，外形上和集线器没什么分别，是一种在通信系统中自动完成信息交换功能的设备，用途和HUB一样也是连接组网之用，但是它具有比集线器更强大的功能。

交换机也叫交换式集线器，它通过对信息进行重新生成，并经过内部处理后转发至指定端口，具备自动寻址能力和交换作用，由于交换机根据所传递信息包的目的地址，将每一信息包独立地从源端口送至目的端口，避免了和其他端口发生碰撞。广义的交换机就是一种在通信系统中完成信息交换功能的设备。

在计算机网络系统中，交换机是针对共享工作模式的弱点而推出的。集线器是采用共享工作模式的代表，如果把集线器比作一个邮递员，那么这个邮递员是个不认识字的“傻瓜”——要他去送信，他不知道直接根据信件上的地址将信件送给收信人，只会拿着信分发给所有的人，然后让接收的人根据地址信息来判断是不是自己的!而交换机则是一个“聪明”的邮递员——交换机拥有一条高带宽的背部总线和内部交换矩阵。交换机的所有的端口都挂接在这条背部总线上，当控制电路收到数据包以后，处理端口会查找内存中的地址对照表以确定目的MAC（网卡的硬件地址）的NIC（网卡）挂接在哪个端口上，通过内部交换矩阵迅速将数据包传送到目的端口。目的MAC若不存在，交换机才广播到所有的端口，接收端口回应后交换机会“学习”新的地址，并把它添加入内部地址表中。

可见，交换机在收到某个网卡发过来的“信件”时，会根据上面的地址信息，以及自己掌握的“常住居民户口簿”快速将信件送到收信人的手中。万一收信人的地址不在“户口簿”上，交换机才会像集线器一样将信分发给所有的人，然后从中找到收信人。而找到收信人之后，交换机会立刻将这个人的信息登记到“户口簿”上，这样以后再为该客户服务时，就可以迅速将信件送达了。

---
**Switch** – A switch is a **multiport bridge with a buffer and a design that can boost its efficiency(a large number of ports imply less traffic) and performance**. A switch is a **data link layer** device. The switch can perform error checking before forwarding data, which makes it very efficient as it does not forward packets that have errors and forward good packets selectively to the correct port only.  In other words, the switch divides the collision domain of hosts, but the [broadcast domain](https://en.wikipedia.org/wiki/Broadcast_domain) remains the same.
#### Types of Switch
1. **Unmanaged switches**: These switches have a simple plug-and-play design and do not offer advanced configuration options. They are suitable for small networks or for use as an expansion to a larger network.
2. **Managed switches**: These switches offer advanced configuration options such as VLANs, QoS, and link aggregation. They are suitable for larger, more complex networks and allow for centralized management.
3. **Smart switches**: These switches have features similar to managed switches but are typically easier to set up and manage. They are suitable for small- to medium-sized networks.
4. **Layer 2 switches**: These switches operate at the Data Link layer of the OSI model and are responsible for forwarding data between devices on the same network segment.
5. **Layer 3 switches**: These switches operate at the Network layer of the OSI model and can route data between different network segments. They are more advanced than Layer 2 switches and are often used in larger, more complex networks.
6. **PoE switches**: These switches have Power over Ethernet capabilities, which allows them to supply power to network devices over the same cable that carries data.
7. **Gigabit switches**: These switches support Gigabit Ethernet speeds, which are faster than traditional Ethernet speeds.
8. **Rack-mounted switches**: These switches are designed to be mounted in a server rack and are suitable for use in data centers or other large networks.
9. **Desktop switches**: These switches are designed for use on a desktop or in a small office environment and are typically smaller in size than rack-mounted switches.
10. **Modular switches**: These switches have modular design, which allows for easy expansion or customization. They are suitable for large networks and data centers.


### 👉 Routers
↗ [Router](0x05%20Network%20Layer/Network%20Layer%20Devices/Router/Router.md)

#### 👉 Gateway
按照不同的分类标准，网关也有很多种。TCP/IP协议里的网关是最常用的，在这里我们通常所讲的“网关”均指TCP/IP协议下的网关。

那么网关到底是什么呢？网关实质上是一个网络通向其他网络的IP地址。比如有网络A和网络B，网络A的IP地址范围为“192.168.1.1~192. 168.1.254”，子网掩码为255.255.255.0；网络B的IP地址范围为“192.168.2.1~192.168.2.254”，子网掩码为255.255.255.0。在没有路由器的情况下，两个网络之间是不能进行TCP/IP通信的，即使是两个网络连接在同一台交换机(或集线器)上，TCP/IP协议也会根据子网掩码(255.255.255.0)判定两个网络中的主机处在不同的网络里。而要实现这两个网络之间的通信，则必须通过网关。如果网络A中的主机发现数据包的目的主机不在本地网络中，就把数据包转发给它自己的网关，再由网关转发给网络B的网关，网络B的网关再转发给网络B的某个主机(如附图所示)。网络B向网络A转发数据包的过程。

所以说，只有设置好网关的IP地址，TCP/IP协议才能实现不同网络之间的相互通信。那么这个IP地址是哪台机器的IP地址呢？网关的IP地址是具有路由功能的设备的IP地址，具有路由功能的设备有路由器、启用了路由协议的服务器(实质上相当于一台路由器)、代理服务器(也相当于一台路由器)。

网关的分类：
1)协议网关：协议网关通常在使用不同协议的网络区域间做协议转换。
2)应用网关：应用网关是在使用不同数据格式间翻译数据的系统。
3)安全网关：安全网关是各种技术的融合，具有重要且独特的保护作用，其范围从协议级过滤到十分复杂的应用级过滤。

网关和路由器最大的区别是是否连接相似的网络。如果连接相似的网络，则称为路由器。而连接不相似的网络，称为网关。
相似的网络和不相似的网络有两种不同的含义。
- 逻辑层面：
	- 相似的网络：如果都是互联网上的两个网络，我们称为相似的网络。
	- 不相似的网络：如果一个是私网（内网）一个是公网。我们称为不相似的网络。
- 物理层面：
	- 相似的网络：都是以太网或者同一种介质的网络。
	- 不相似的网络：一边是以太，一边是SDH或者ATM等。

---
**Gateway** – A gateway, as the name suggests, is a passage to connect two networks that may work upon different networking models. They work as messenger agents that take data from one system, interpret it, and transfer it to another system. Gateways are also called protocol converters and can operate at any network layer. Gateways are generally more complex than switches or routers. A gateway is also called a **protocol converter**. 


### 👉 Brouter
**Brouter** – It is also known as the bridging router is a device that combines features of both bridge and router. It can work either at the **data link layer** or a **network layer**. Working as a router, it is capable of routing packets across networks and working as the bridge, it is capable of filtering local area network traffic. 


### 👉 NIC (Network Adapter)
> ↗ [NIC (Network Adapter)](0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/NIC%20(Network%20Adapter).md)

**NIC** – NIC or network interface card is a **network adapter** that is used to connect the computer to the network. It is installed in the computer to establish a LAN.  It has a unique id that is written on the chip, and it has a connector to connect the cable to it. The cable acts as an interface between the computer and the router or modem. NIC card is a **layer 2 device** which means that it works on both the physical and data link layers of the network model.



## Difference Between Network Devices
### Repeaters 🆚 Hubs


### Bridges 🆚 Switches


### Hubs 🆚 Switches
集线器主要用于共享网络的组建，它处于网络的一个星型结点，对连接在该结点的设备进行集中管理。若无集线器作为中心节点来对设备进行管理，会呈现出复杂的网络拓扑，而引入集线器能简化网络拓扑，同时方便用户快速加入网络。在实际应用场景中，集线器一般应用于中小型局域网或者大中型网络的边缘。

集线器为半双工传输模式，且各台设备共享带宽，若网络中某一台设备长时间占用线路会严重影响其他设备通信。相比之下，交换机支持全双工传输模式，且各台设备独占带宽，通信线路之间不会相互影响，所以应用场景更加广泛，不仅能应用于中小型局域网，也广泛应用于中大型广域网中。此外，交换机可以构建虚拟局域网（VLAN）来隔离广播域，缩小广播范围，在控制“广播风暴”产生的同时还可以提高网络的安全性。总体来说，相比于集线器，交换机的应用场景更广泛，其已逐渐替代集线器。

| 区别   | 集线器   | 交换机       |
| ---- | ----- | --------- |
| 工作层次 | 物理层   | 数据链路层     |
| 转发方式 | 广播转发  | 查表转发或丢弃   |
| 传输模式 | 半双工模式 | 半双工/全双工模式 |
| 带宽   | 共享宽带  | 独占宽带      |

[集线器和交换机的区别 | 锐捷]: https://www.ruijie.com.cn/jszl/89659/

---
1) 在OSI/RM（OSI参考模型）中的工作层次不同
交换机和集线器在OSI/RM开放体系模型中对应的层次就不一样，集线器是同时工作在第一层（物理层），而交换机至少是工作在第二层（数据链路层），更高级的交换机可以工作在第三层（网络层）和第四层（传输层）。

2) 交换机的数据传输方式不同
集线器的数据传输方式是广播（broadcast）方式，而交换机的数据传输是有目的的，数据只对目的节点发送，只是在自己的MAC地址表中找不到的情况下第一次使用广播方式发送，然后因为交换机具有MAC地址学习功能，第二次以后就不再是广播发送了，又是有目的的发送。这样的好处是数据传输效率提高，不会出现广播风暴，在安全性方面也不会出现其它节点侦听的现象。用集线器组成的网络称为共享式网络，而用交换机组成的网络称为交换式网络。 共享式以太网存在的主要问题是所有用户共享带宽，每个用户的实际可用带宽随网络用户数的增加而递减。这是因为当信息繁忙时，多个用户可能同时“争用”一个信道，而一个信道在某一时刻只允许一个用户占用，所以大量的用户经常处于监测等待状态，致使信号传输时产生抖动、停滞或失真，严重影响了网络的性能。

3) 带宽占用方式不同
在带宽占用方面，集线器所有端口是共享集线器的总带宽，而交换机的每个端口都具有自己的带宽，这样就交换机实际上每个端口的带宽比集线器端口可用带宽要高许多，也就决定了交换机的传输速度比集线器要快许多，也就决定了交换机的传输速度比集线器要快许多。交换机在传输数据时是并行传输，多个端口对之间可以同时传输数据，或者一个端口内的各台计算机之间的交换数据不会影响到另外一个端口内的数据通信。

4) 传输模式不同
集线器只能采用半双工方式进行传输的，因为集线器是共享传输介质的，这样上行通道上集线器一次只能传输一个任务，要么是接收数据，要么是发送数据。交换机可以是半双工操作，也可以是全双工操作。

---
HUB，也就是集线器。它的作用可以简单的理解为将一些机器连接起来组成一个局域网。而交换机（又名交换式集线器）作用与集线器大体相同。但是两者在性能上有区别：集线器采用的式共享带宽的工作方式，而交换机是独享带宽。这样在机器很多或数据量很大时，两者将会有比较明显的。而路由器与以上两者有明显区别，它的作用在于连接不同的网段并且找到网络中数据传输最合适的路径 ，可以说一般情况下个人用户需求不大。路由器是产生于交换机之后，就像交换机产生于集线器之后，所以路由器与交换机也有一定联系，并不是完全独立的两种设备。路由器主要克服了交换机不能路由转发数据包的不足。

如果用最简单的语言叙述交换机与集线器的区别，那就应该是智能与非智能的差别。集线器说白了只是连接多个计算机的设备，它只能起到信号放大、传输的作用，但不能对信号中的碎片进行处理，所以在传输过程中非常容易出错。而交换机则可以看作是一种智能型的集线器，它除了包括集线器的所有特性外，还具有自动寻址、交换、处理的功能。并且在传递过程中，只有发送源与接受源独立工作，其间不与其它端口发生关系，从而达到防止数据丢失和提高吞吐量的目的。

从它们的工作状态看，集线器属于共享型。也就是说，在一个端口向另外一个端口发送信息的时候，其它的端口就不能再有信息传输，只能处于等待状态。另外集线器是工作在半双工下，即在传输过程中只能是单向的，必须是在一个发送源发送完信息后，接受方才能发送信号。交换机的工作原理却与集线器有很大区别，由于它的每个端口都可视为一条独立的通道，所以在一个端口工作时不会影响到其它端口的传输。而且交换机是工作在全双工状态下的，因此它的数据处理能力在无形中又提高了一倍。

[集线器、交换机、路由器、网桥、网关之间的区别和联系 - 行云流水的文章 - 知乎]: https://zhuanlan.zhihu.com/p/408653152


### 2-Layer Switches 🆚 3-Layer Switches 🆚 Routers
路由器与交换机的主要区别：
(1) 工作层次不同
最初的的交换机是工作在OSI／RM开放体系结构的数据链路层，也就是第二层，而路由器一开始就设计工作在OSI模型的网络层。由于交换机工作在OSI的第二层（数据链路层），所以它的工作原理比较简单，而路由器工作在OSI的第三层（网络层），可以得到更多的协议信息，路由器可以做出更加智能的转发决策。

(2) 数据转发所依据的对象不同
交换机是利用物理地址或者说MAC地址来确定转发数据的目的地址。而路由器则是利用不同网络的ID号（即IP地址）来确定数据转发的地址。IP地址是在软件中实现的，描述的是设备所在的网络，有时这些第三层的地址也称为协议地址或者网络地址。MAC地址通常是硬件自带的，由网卡生产商来分配的，而且已经固化到了网卡中去，一般来说是不可更改的。而IP地址则通常由网络管理员或系统自动分配。

(3) 传统的交换机只能分割**冲突域**，不能分割**广播域**；而路由器可以分割广播域
由交换机连接的网段仍属于同一个广播域，广播数据包会在交换机连接的所有网段上传播，在某些情况下会导致通信拥挤和安全漏洞。连接到路由器上的网段会被分配成不同的广播域，广播数据不会穿过路由器。虽然第三层以上交换机具有VLAN功能，也可以分割广播域，但是各子广播域之间是不能通信交流的，它们之间的交流仍然需要路由器。

(4) 路由器提供了防火墙的服务
路由器仅仅转发特定地址的数据包，不传送不支持路由协议的数据包传送和未知目标网络数据包的传送，从而可以防止广播风暴。交换机一般用于LAN-WAN的连接，交换机归于网桥，是数据链路层的设备，有些交换机也可实现第三层的交换。 路由器用于WAN-WAN之间的连接，可以解决异性网络之间转发分组，作用于网络层。他们只是从一条线路上接受输入分组，然后向另一条线路转发。这两条线路可能分属于不同的网络，并采用不同协议。相比较而言，路由器的功能较交换机要强大，但速度相对也慢，价格昂贵，第三层交换机既有交换机线速转发报文能力，又有路由器良好的控制功能，因此得以广泛应用。

[集线器、交换机、路由器、网桥、网关之间的区别和联系 - 行云流水的文章 - 知乎]: https://zhuanlan.zhihu.com/p/408653152



## Ref
[Network Devices (Hub, Repeater, Bridge, Switch, Router, Gateways and Brouter) | GeeksforGeeks]: https://www.geeksforgeeks.org/network-devices-hub-repeater-bridge-switch-router-gateways/

[👍 集线器、交换机、路由器、网桥、网关之间的区别和联系 - 行云流水的文章 - 知乎]: https://zhuanlan.zhihu.com/p/408653152

[👍 集线器和交换机的区别 | 锐捷]: https://www.ruijie.com.cn/jszl/89659/
