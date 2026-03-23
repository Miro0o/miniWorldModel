# Overlay Network

[TOC]



## Res
### Related Topics
↗ [Tunneling & VPN (Virtual Personal Network)](../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
↗ [Tunneling Protocols & Technologies](../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/Tunneling%20Protocols%20&%20Technologies.md)

↗ [vLAN & VxLAN](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/vLAN%20&%20VxLAN/vLAN%20&%20VxLAN.md)
↗ [NVGRE (Network Virtualization using GRE)](../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/GRE%20(Generic%20Routing%20Encapsulation)/NVGRE%20(Network%20Virtualization%20using%20GRE).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Overlay_network

An **overlay network** is a computer network that is layered on top of another (logical as opposed to physical) network. Nodes in the overlay network are connected by virtual or logical links. Each link corresponds to a path, perhaps through many physical links, in the underlying network. The topology of the overlay network may (and often does) differ from that of the underlying one. The concept of overlay networking is distinct from the traditional model of OSI layered networks, and almost always assumes that the underlay network is an **IP network** of some kind.

**Examples**
1. The most striking example of an overlay network is the Internet itself. The Internet itself **was** initially built as an overlay on the [telephone network](https://en.wikipedia.org/wiki/Telephone_network).
2. Many [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer "Peer-to-peer") networks are also overlay networks. They are organized as nodes of a virtual system of links that run on top of the [Internet](https://en.wikipedia.org/wiki/Internet "Internet").
3. Another example of an overlay network is a [distributed hash table](https://en.wikipedia.org/wiki/Distributed_hash_table "Distributed hash table"), which maps keys to nodes in the network. In this case, the underlying network is an IP network, and the overlay network is a table (actually a [map](https://en.wikipedia.org/wiki/Associative_array "Associative array")) indexed by keys.
4. Some other examples of overlay networking technologies are, [VXLAN](https://en.wikipedia.org/wiki/Virtual_Extensible_LAN "Virtual Extensible LAN"), [BGP VPNs](https://en.wikipedia.org/wiki/Border_Gateway_Protocol "Border Gateway Protocol"), both Layer 2 and Layer 3, and IP over IP technologies, such as [GRE](https://en.wikipedia.org/wiki/Generic_Routing_Encapsulation "Generic Routing Encapsulation") or [IPSEC](https://en.wikipedia.org/wiki/IPsec "IPsec") Tunnels. IP over IP technologies, such as [SD-WAN](https://en.wikipedia.org/wiki/SD-WAN "SD-WAN") are a class of overlay network.


### List of overlay network protocols
Overlay network protocols based on [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP") include:
- [Distributed hash tables](https://en.wikipedia.org/wiki/Distributed_hash_table "Distributed hash table") (DHTs) based on the [Chord](https://en.wikipedia.org/wiki/Chord_(peer-to-peer) "Chord (peer-to-peer)")
- [JXTA](https://en.wikipedia.org/wiki/JXTA "JXTA")
- [XMPP](https://en.wikipedia.org/wiki/XMPP "XMPP"): the routing of messages based on an endpoint Jabber ID (Example: nodeId_or_userId@domainId\resourceId) instead of by an IP Address
- Many peer-to-peer protocols including [Gnutella](https://en.wikipedia.org/wiki/Gnutella "Gnutella"), [Gnutella2](https://en.wikipedia.org/wiki/Gnutella2 "Gnutella2"), [Freenet](https://en.wikipedia.org/wiki/Freenet "Freenet"), [I2P](https://en.wikipedia.org/wiki/I2P "I2P") and [Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network) "Tor (anonymity network)").
- [PUCC](https://en.wikipedia.org/wiki/P2P_Universal_Computing_Consortium "P2P Universal Computing Consortium")
- [Solipsis](https://en.wikipedia.org/wiki/Solipsis "Solipsis"): a [France Télécom](https://en.wikipedia.org/wiki/France_T%C3%A9l%C3%A9com "France Télécom") system for massively shared virtual world

Overlay network protocols based on UDP/IP include:
- [Distributed hash tables](https://en.wikipedia.org/wiki/Distributed_hash_table "Distributed hash table") (DHTs) based on [Kademlia](https://en.wikipedia.org/wiki/Kademlia "Kademlia") algorithm, such as [KAD](https://en.wikipedia.org/wiki/Kad_network "Kad network"), [etc.](https://en.wikipedia.org/wiki/Kademlia#Networks "Kademlia")
- [Real Time Media Flow Protocol](https://en.wikipedia.org/wiki/Real_Time_Media_Flow_Protocol "Real Time Media Flow Protocol") – [Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash "Adobe Flash")



## Ref
[Overlay 介绍 ｜ 华为数据中心网络设计指南]: https://support.huawei.com/enterprise/zh/doc/EDOC1100023543/ebbc6e5f

