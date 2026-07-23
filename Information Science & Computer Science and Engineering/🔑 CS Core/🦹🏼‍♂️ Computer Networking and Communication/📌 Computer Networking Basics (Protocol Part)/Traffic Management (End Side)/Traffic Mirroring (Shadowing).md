# Traffic Mirroring (Shadowing)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
Traffic mirroring, also called shadowing, is a powerful concept that allows feature teams to bring changes to production with as little risk as possible. Mirroring sends a copy of live traffic to a mirrored service. The mirrored traffic happens out of band of the critical request path for the primary service.

镜像是一种数据流的监控技术，镜像既能对网络中的数据流量进行监控分析，又不影响网络中的数据流量的正常转发。对于监控网络信息安全和解决网络故障，镜像是一种实用性很强的网络监控技术。当网络中存在攻击或出现故障时，网络管理员可以通过镜像功能对报文进行获取并分析，找到攻击源或故障原因。  
- 根据镜像源的不同，镜像可以分为端口镜像、流镜像、[VLAN](https://info.support.huawei.com/info-finder/encyclopedia/zh/VLAN.html "VLAN")镜像、MAC镜像。例如端口镜像代表将指定端口入方向、出方向、或者出入方向的报文复制到目的端口。  
- 根据目的端口与监控设备间的连接方式，镜像可以分为本地镜像和远程镜像。


### Glossaries
- 源端口
	- 源端口指被监控设备上的指定端口，也称为被监控口。在镜像中，源端口上的数据流会被复制一份到目的端口，用于网络分析或故障排除。
- 目的端口（监控/观察端口）
	- 目的端口是与s网络分析设备相连接的端口。目的端口用于将接收到的源端口报文转发到网络分析设备。
- 远程镜像VLAN
	- 远程镜像VLAN是一种特殊的VLAN，该VLAN只传输镜像报文，不对正常的业务数据进行传输。
- 源设备
	- 源设备是远程端口镜像角色之一，指源端口所在的设备，负责将源端口的报文复制一份到源设备的输出端口，传输给中间设备或目的设备。
- 中间设备
	- 中间设备是远程端口镜像角色之一，指处于源设备和目的设备之间的设备，负责将镜像报文传输给下一个中间设备或目的设备。如果源设备与目的设备直接相连，则不存在中间设备。
- 目的设备（监控/观察设备）
	- 目的设备远程端口镜像角色之一，指远程镜像目的端口所在的设备，负责将中间设备或者源设备接收到的镜像报文转发给监控设备。



## Mirroring Basics
### 1️⃣ Port Mirroring
> 🔗 https://en.wikipedia.org/wiki/Port_mirroring

Port mirroring is used on a network switch to send a copy of network packets seen on one switch port (or an entire VLAN) to a network monitoring connection on another switch port. This is commonly used for network appliances that require monitoring of network traffic such as an intrusion detection system, passive probe or **real user monitoring (RUM)** technology that is used to support **application performance management (APM)**.
- Port mirroring on a Cisco Systems switch is generally referred to as **Switched Port Analyzer (SPAN)** or **Remote Switched Port Analyzer (RSPAN)**. Other vendors have different names for it, such as **Roving Analysis Port (RAP)** on 3Com switches.

Network engineers or administrators use port mirroring to analyze and debug data or diagnose errors on a network. It helps administrators keep a close eye on network performance and alerts them when problems occur. It can be used to mirror either inbound or outbound traffic (or both) on single or multiple interfaces.
#### Port Mirroring Working Principles
端口镜像是将网络设备上指定端口接收或发送的报文复制到目的端口，可以只复制端口接收或者发送的报文，也可以同时复制接收和发送的报文。指定端口称为镜像端口，目的端口称为观察端口。

如下图所示，DeviceA上的镜像端口在接收或发送报文的时候，会将报文复制一份到观察端口。观察端口再将复制的原始报文发送给监控设备。

![端口镜像示意图](https://download.huawei.com/mdl/image/download?uuid=9637dd3f3d9646268851b69f9206fab1 "端口镜像示意图")  
<small>端口镜像示意图</small>

当观察端口和监控设备直连时称为本地镜像。当观察端口和监控设备间不是直连，而是通过二层网络或三层网络相连时称为远程镜像。 
- 目的端口通过二层网络与监控设备相连的场景称为二层远程镜像**RSPAN（Remote Switched Port Analyzer）**。
- 目的端口通过三层网络与监控设备相连的场景称为三层远程镜像**ERSPAN（Encapsulated Remote Switched Port Analyzer）**。

如下图所示，远程端口镜像场景，观察端口将复制的报文发送给监控设备前会添加一层[VLAN](https://info.support.huawei.com/info-finder/encyclopedia/zh/VLAN.html "VLAN") Tag 或进行 GRE(General Routing Encapsulation) 封装，便于复制的报文能够穿过中间的二层网络/三层网络，到达监控设备。

![远程端口镜像示意图](https://download.huawei.com/mdl/image/download?uuid=2d90e9ed70934d38bf437ff49712d141 "远程端口镜像示意图")  
<small>远程端口镜像示意图</small>

其他类型的镜像方式原理与端口镜像类似，例如：
- 流镜像是将符合指定规则的报文流复制到观察端口。
- VLAN镜像是将指定VLAN内所有活动接口的入方向/出方向的报文复制到观察端口。
- MAC镜像将指定VLAN内源MAC地址或目的MAC地址为指定MAC地址的报文复制到观察端口。

> 端口镜像和流镜像有什么区别?
> 
> 端口镜像和流镜像都属于镜像。区别在于，端口镜像是将镜像端口所有入方向/出方向的报文复制到观察端口；而流镜像会对端口入方向/出方向的报文进行筛选，只有满足匹配条件的报文才会被复制到观察端口。流镜像中可以通过[ACL](https://info.support.huawei.com/info-finder/encyclopedia/zh/ACL.html "ACL")或相关的配置命令指定具体的匹配条件。


### 2️⃣ Stream Mirroring
流镜像是指在设备上配置一定的规则，将符合规则的特定业务流复制到观察端口进行分析和监控。

> 流量镜像是在端口镜像的基础上，将源端口与ACL（Access Control List，访问控制列表）关联，根据ACL规则对报文进行过滤，达到只镜像指定报文的目的。源端口只有匹配到ACL中permit类型的ACE（Access Control Entry，访问控制条目）的报文才能被镜像到目的端口。一个源端口只能关联一个ACL。


### 3️⃣ VLAN Mirroring
VLAN镜像是指将指定VLAN内所有活动接口的报文镜像到观察端口。用户可以对某个VLAN或者某些VLAN内的报文进行监控。

目前，华为S系列盒式交换机在应用VLAN镜像时，仅支持将VLAN内活动接口入方向的报文镜像到观察端口。

同端口镜像类似，根据监控设备在网络中位置的不同，VLAN镜像也可以分为本地VLAN镜像和远程VLAN镜像。值得注意的是，远程VLAN镜像中，主机所在VLAN和用于转发镜像报文的中间二层网络的VLAN不能相同。


### 4️⃣ MAC Mirroring
MAC镜像是指将VLAN内匹配指定源或者目的MAC地址的报文镜像到观察端口。MAC地址镜像提供了一种更加精确的镜像方式，用户可以对网络中特定设备的报文进行监控。

目前，华为S系列盒式交换机在应用MAC镜像时，仅支持将VLAN内活动接口入方向匹配指定源或者目的MAC地址的报文镜像到观察端口。



## Network Tap
> 🔗 https://en.wikipedia.org/wiki/Network_tap

A **network tap** is a system that monitors events on a local network. A tap is typically a dedicated hardware device that provides a way to access the data flowing across a [computer network](https://en.wikipedia.org/wiki/Computer_network "Computer network").

The network tap has (at least) three ports: an _A port_, a _B port_, and a _monitor_ port. A tap inserted between A and B passes all traffic (send and receive data streams) through unimpeded in real time, but also copies that same data to its monitor port, enabling a third party to listen.

Network taps are commonly used for [network intrusion detection systems](https://en.wikipedia.org/wiki/Network_intrusion_detection_system "Network intrusion detection system"), [VoIP recording](https://en.wikipedia.org/wiki/VoIP_recording "VoIP recording"), network probes, [RMON](https://en.wikipedia.org/wiki/RMON "RMON") probes, [packet sniffers](https://en.wikipedia.org/wiki/Packet_sniffer "Packet sniffer"), and other monitoring and collection devices and software that require access to a [network segment](https://en.wikipedia.org/wiki/Network_segment "Network segment"). Taps are used in security applications because they are non-obtrusive, are not detectable on the network (having no physical or [logical address](https://en.wikipedia.org/wiki/Logical_address "Logical address")), can deal with [full-duplex](https://en.wikipedia.org/wiki/Full-duplex "Full-duplex") and non-shared networks, and will usually _pass through_ or _bypass_ traffic even if the tap stops working or loses power.



## Ref
[Port Mirroring | IBM]: https://www.ibm.com/docs/en/cloud-pak-system-w4600/2.3.3?topic=features-port-mirroring

[👍 Mirroring | Istio]: https://istio.io/latest/docs/tasks/traffic-management/mirroring/

[Port mirroring | wikipedia]: https://en.wikipedia.org/wiki/Port_mirroring

[👍 镜像是什么/ 端口镜像概述 | 锐捷网络]: https://www.ruijie.com.cn/jszl/90095/
[👍 什么是镜像？| 华为]: https://info.support.huawei.com/info-finder/encyclopedia/zh/镜像.html
[👍 端口镜像]: https://cshihong.github.io/2017/11/16/端口镜像/
