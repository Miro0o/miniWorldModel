# IPSec (Internet Protocol Security) & IPSec VPN

[TOC]



## Res
### Related Topics
↗ [Internet Protocols (IP)](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x05%20Network%20Layer/Internet%20Protocols%20(IP)/Internet%20Protocols%20(IP).md)
↗ [MACsec (Media Access Control Security)](../../🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Security%20Protocols/MACsec%20(Media%20Access%20Control%20Security)/MACsec%20(Media%20Access%20Control%20Security).md)
↗ [IP (Internet Protocol) Attacks](../../../../Network%20Threats%20&%20Attacks/Network%20Layer%20Attacks/IP%20(Internet%20Protocol)%20Attacks/IP%20(Internet%20Protocol)%20Attacks.md)

↗ [Tunneling & VPN (Virtual Personal Network)](../../../../Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
- ↗ [Tunneling Protocols & Technologies](../../../../Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/Tunneling%20Protocols%20&%20Technologies.md)
- ↗ [SSL VPN](../../../../Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/SSL%20VPN/SSL%20VPN.md)
- ↗ [GRE (Generic Routing Encapsulation)](../../../../Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/GRE%20(Generic%20Routing%20Encapsulation)/GRE%20(Generic%20Routing%20Encapsulation).md)


### Other Resources
【深入浅出计算机网络 - 7.7 网络体系结构各层采取的安全措施——网络层】 https://www.bilibili.com/video/BV1Bv4y1T7xB/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
> 💡 IPsec is mostly replaced by [TLS (Transport Layer Security) Protocols](../../🚉%20Transportation%20Layer%20Security%20Protocols/SSL_TLS%20Protocol/📌%20TLS%20(Transport%20Layer%20Security)%20Protocols/TLS%20(Transport%20Layer%20Security)%20Protocols.md) 
### IPsec Overview
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.36.50%20PM.png)

> 🔗 https://www.techtarget.com/searchsecurity/definition/IPsec-Internet-Protocol-Security

**IPsec (Internet Protocol Security)** is a suite of protocols and algorithms for securing data transmitted over the internet or any public network. The Internet Engineering Task Force, or IETF, developed the IPsec protocols in the mid-1990s to provide security at the IP layer through authentication and encryption of IP [network packets](https://www.techtarget.com/searchnetworking/definition/packet).

互联网安全协议（Internet Protocol Security，IPsec），是一个协议簇，通过对IP协议的分组进行加密和认证来保护IP协议的网络传输协议族。自从1995年IPSec的研究究工作开始以来，现在已经积累了大量的标准文件集。
- **认证头（AH）**，为IP数据报提供无连接数据完整性、消息认证以及防重放攻击保护；
- **封装安全载荷（ESP）**，提供机密性、数据源认证、无连接完整性、防重放和有限的传输流（traffic-flow）机密性；==(ESP 协议的功能完全包含了AH，故使用了ESP就不用使用AH了)==
- **安全关联（SA）**，提供算法和数据包，提供AH、ESP操作所需的参数。
- **密钥协议（IKE）**，提供对称密码的钥匙的生存和交换，动态密钥交换
	- **Internet安全协商和密钥管理协议（ISAKMP）** 是IPSec的另一个主要组件。ISAKMP提供了用于应用层服务的通用格式，它支持IPSec协商方的密钥管理需求。

![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.15.03PM.png)


### Key IPsec Protocols
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.40.32%20PM.png)

- **IP Authentication Header (AH).** AH is specified in RFC 4302. It provides data integrity, and transport protection services ([anti-replay services](https://www.techtarget.com/searchnetworking/definition/anti-replay-protocol)). AH was designed to be inserted into an IP packet to add authentication data and protect the contents from modification.

- **IP Encapsulating Security Payload (ESP).** Specified in RFC 4303, ESP provides authentication, integrity, and confidentiality through the encryption of IP packets.

- **IKE.** Defined in RFC 7296, IKE is a protocol that enables two systems or devices to establish a secure communication channel over an untrusted network. The protocol uses a series of key exchanges to create a secure tunnel between a client and a server through which they can send encrypted traffic. The security of the tunnel is based on the Diffie-Hellman key exchange.

![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.55.25%20PM.png)

- **Internet Security Association and Key Management Protocol (ISAKMP).** ISAKMP is specified as part of the IKE protocol and RFC 7296. It is a framework for key establishment, authentication and negotiation of an SA for a secure exchange of packets at the IP layer. In other words, ISAKMP defines the security parameters for how two systems, or hosts, communicate with each other. Each SA defines a connection in one direction, from one host to another. The SA includes all attributes of the connection, including the cryptographic algorithm, the IPsec mode, the encryption key and any other parameters related to data transmission over the connection.

IPsec uses, or is used by, many other protocols, such as [digital signature](https://www.techtarget.com/searchsecurity/definition/digital-signature) algorithms and most protocols outlined in the **IPsec and IKE Document Roadmap, or [RFC 6071].**



## ⭐️ IPsec Working Procedures /Modes
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.37.24%20PM.png)

> 【深入浅出计算机网络 - 7.7 网络体系结构各层采取的安全措施——网络层】 https://www.bilibili.com/video/BV1Bv4y1T7xB/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d 


### 1️⃣ Tunneling Mode (most popular mode)
↗ [IPSec Tunneling Mode](IPSec%20Working%20Procedures/IPSec%20Tunneling%20Mode.md)


### 2️⃣ Transmitting Mode
↗ [IPSec Transmitting Mode](IPSec%20Working%20Procedures/IPSec%20Transmitting%20Mode.md)




## Ref
[IPsec (Internet Protocol Security)]: https://www.techtarget.com/searchsecurity/definition/IPsec-Internet-Protocol-Security

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA

![](../../../../../../../Assets/Pics/Pasted%20image%2020240510151232.png)
