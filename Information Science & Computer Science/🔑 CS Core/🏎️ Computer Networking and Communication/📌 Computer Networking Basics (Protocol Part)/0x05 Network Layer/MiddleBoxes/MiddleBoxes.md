# MiddleBoxes

[TOC]



## Res
### ⚧️ NAT /NAPT
🔗 【深入浅出计算机网络 - 4.6 虚拟专用网VPN和网络地址转换NAT】 https://www.bilibili.com/video/BV1mV4y1M7Xs/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d 

Network Address Translation ↗ [NAT (Network Address Translation)](NAT%20(Network%20Address%20Translation)/NAT%20(Network%20Address%20Translation).md)
NAPT, Network Address and Port Translation is at ↗ [NAPT (Network Address & Port Translation)](NAT%20(Network%20Address%20Translation)/NAPT%20(Network%20Address%20&%20Port%20Translation).md)


### Security Services
#### 👻 VPN
🔗 【深入浅出计算机网络 - 4.6 虚拟专用网VPN和网络地址转换NAT】 https://www.bilibili.com/video/BV1mV4y1M7Xs/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

This notes can be seen on ↗ [Anonymous Networks /VPN](../../../../../CyberSecurity/Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN/Tunneling%20&%20VPN.md)

#### ⛑️ Firewalls /IDS
↗ [Network Security /Intrusion Detection Systems (IDS)](../../../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/IDS%20(Intrusion%20Detection%20Systems)/IDS%20(Intrusion%20Detection%20Systems).md)
↗ [Network Security /Firewall](../../../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/Firewall%20&%20Network%20Filters.md)


### Performance Enhancement
↗ [SE /Middleware](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/Web%20Dev%20Middleware.md)



## Intro
In the past 20 years, we’ve seen tremendous growth in such middleboxes, which [RFC 3234] defines as:

> "any intermediary box performing functions apart from normal, standard functions of an IP router on the data path between a source host and destination host"

We can broadly identify **three types of services performed by middleboxes**:

1️⃣ **NAT Translation**. NAT boxes implement private network addressing, rewriting datagram header IP addresses and port numbers.

2️⃣ **Security Services**. 
	- **Firewalls** block traffic based on header-field values or redirect packets for additional processing, such as **deep packet inspection (DPI)**.
	- **Intrusion Detection Systems (IDS)** are able to detect predetermined patterns and filter packets accordingly. 
	- Application-level e-mail **filters** block e-mails considered to be junk, phishing or otherwise posing a security threat.

3️⃣ **Performance Enhancement**. These middleboxes perform services such as **compression**, **content caching**, and **load balancing** of service requests (e.g., an HTTP request, or a search engine query) to one of a set of servers that can provide the desired service.

Many other middleboxes [RFC 3234] provide capabilities belonging to these three types of services, in both wired and wireless cellular [Wang 2011] networks.

![](../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2010.53.17%20AM.png)


### Middlebox: Past /Future
↗ [Network Virtualization](../../../Network%20Virtualization/Network%20Virtualization.md)

↗ [NFV (Network Function Virtualization)](../../../Network%20Virtualization/NFV%20(Network%20Function%20Virtualization)/NFV%20(Network%20Function%20Virtualization).md)
↗ [Software Defined Network (SDN)](../../../🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md)
↗ [Cloud Computing & Cloud Native](../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)


### Middlebox: Pro /Against
For many years, the Internet architecture had a clear separation between the network layer and the transport/application layers. 

In these “good old days,” the network layer consisted of routers, operating within the network core, to forward datagrams toward their destinations using fields only in the IP datagram header. The transport and application layers were implemented in hosts operating at the network edge. Hosts exchanged packets among themselves in transport-layer segments and application-layer messages. 

Today’s middleboxes clearly violate this separation: a NAT box, sitting between a router and host, rewrites network-layer IP addresses and transport-layer port numbers; an in-network firewall blocks suspect datagrams using application-layer (e.g., HTTP), transport-layer, and network-layer header fields; e-mail security gateways are injected between the e-mail sender (whether malicious or not) and the intended e-mail receiver, filtering application-layer e-mail messages based on whitelisted/blacklisted IP addresses as well as e-mail message content. 

- While there are those who have considered such middleboxes as a bit of an archi- tectural abomination [Garfinkel 2003], 
- others have adopted the philosophy that such middleboxes “exist for important and permanent reasons”—that they fill an important need—and that we’ll have more, not fewer, middleboxes in the future [Walfish 2004]. 




## Ref

