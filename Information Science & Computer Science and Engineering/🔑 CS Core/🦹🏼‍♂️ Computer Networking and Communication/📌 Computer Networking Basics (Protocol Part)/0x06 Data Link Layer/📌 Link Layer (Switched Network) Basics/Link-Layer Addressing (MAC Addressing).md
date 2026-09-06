# Link-Layer Addressing (MAC Addressing)

[TOC]



## Res
### Related Topics
↗ [MAC (Media Access Control) Protocol & Layer 2 Lower Sublayer](📌%20MAC%20(Media%20Access%20Control)%20&%20Layer%202%20Lower%20Sublayer/MAC%20(Media%20Access%20Control)%20Protocol%20&%20Layer%202%20Lower%20Sublayer.md)



## Intro

![](../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%203.30.42%20PM.png)



## Link-Layer Address (MAC Address)
> ↗ [MAC (Media Access Control) Protocol & Layer 2 Lower Sublayer](📌%20MAC%20(Media%20Access%20Control)%20&%20Layer%202%20Lower%20Sublayer/MAC%20(Media%20Access%20Control)%20Protocol%20&%20Layer%202%20Lower%20Sublayer.md)

A **link-layer address** is variously called a **LAN address**, a **physical address**, or a **MAC address**. Because MAC address seems to be the most popular term, we’ll henceforth refer to link-layer addresses as MAC addresses. 

For most LANs (including Ethernet and 802.11 wireless LANs), the MAC address is 6 bytes long, giving 248 possible MAC addresses. As shown in Figure 6.16, these 6-byte addresses are typically expressed in hexadecimal notation, with each byte of the address expressed as a pair of hexadecimal numbers. ==Although MAC addresses were designed to be permanent, it is now possible to change an adapter’s MAC address via software. For the rest of this section, however, we’ll assume that an adapter’s MAC address is fixed.==

> ❗ It’s important to note, however, ==that **link-layer switches** do not have link-layer addresses associated with their interfaces that connect to hosts and routers==. This is because the job of the link-layer switch is to carry datagrams between hosts and routers; a switch does this job transparently, that is, without the host or router having to explicitly address the frame to the intervening switch.


![|500](../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%2010.09.47%20AM.png)


### Property of MAC Address
#### 👉 Unique 
One interesting property of MAC addresses is that no two adapters have the same address.

The IEEE manages the MAC address space. In particular, when a company wants to manufacture adapters, it purchases a chunk of the address space consisting of 224 addresses for a nominal fee. IEEE allocates the chunk of 224 addresses by fixing the first 24 bits of a MAC address and letting the company create unique combinations of the last 24 bits for each adapter.
#### 👉 Flat
An adapter’s MAC address has a **flat structure** (as opposed to a **hierarchical structure**) and doesn’t change no matter where the adapter goes.

> A laptop with an Ethernet interface always has the same MAC address, no matter where the computer goes. A smartphone with an 802.11 interface always has the same MAC address, no matter where the smartphone goes. 

Recall that, in contrast, IP addresses have a **hierarchical structure** (that is, a network part and a host part), and a host’s IP addresses needs to be changed when the host moves, i.e., changes the network to which it is attached. 

> - An adapter’s MAC address is analogous to a person’s social security number, which also has a flat addressing structure and which doesn’t change no matter where the person goes. 
> - An IP address is analogous to a person’s postal address, which is hierarchical and which must be changed whenever a person moves. Just as a person may find it useful to have both a postal address and a social security number, it is useful for a host and router interfaces to have both a network-layer address and a MAC address.



## Link-Layer Addressing
### 1️⃣ Intra-Subnet Link-Layer Addressing

> Link layer using following protocols to address packages (frames) within the LAN.

#### ARP (IPv4)
↗ [ARP (Address Resolution Protocol) (LAN, IPv4)](../../0x05%20Network%20Layer/🚙%20Data%20Plane%20(Forwarding)/ARP%20(Address%20Resolution%20Protocol)%20(LAN,%20IPv4)/ARP%20(Address%20Resolution%20Protocol)%20(LAN,%20IPv4).md)

> ARP for Ethernet is defined in [RFC 826]. A nice introduction to ARP is given in the TCP/IP tutorial, [RFC 1180]. We’ll explore ARP in more detail in the homework problems.
##### 🤨 Is ARP link layer protocol or network layer protocol?
Students often wonder if ARP is a link-layer protocol or a network-layer protocol. As we’ve seen, an ARP packet is encapsulated within a link-layer frame and thus lies architecturally above the link layer. However, an ARP packet has fields containing link-layer addresses and thus is arguably a link-layer protocol, but it also contains network-layer addresses and thus is also arguably a network-layer protocol. In the end, ARP is probably best considered a protocol that straddles the boundary between the link and network layers—not fitting neatly into the simple layered protocol stack we studied in Chapter 1. Such are the complexities of real-world protocols!
#### NDP (IPv6)
↗ [NDP (Neighbor Discovery Protocol) (IPv6)](../../0x05%20Network%20Layer/🚙%20Data%20Plane%20(Forwarding)/NDP%20(Neighbor%20Discovery%20Protocol)%20(IPv6)/NDP%20(Neighbor%20Discovery%20Protocol)%20(IPv6).md)


### 2️⃣ Inter-Subnet Link-Layer Addressing

![](../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%2010.31.51%20AM.png)

For host A (111.111.111.111) to communicate to host B (222.222.222.222), A sends its packages to router via link layer routing protocols (ARP, or others), router determines in its network layer which network to forward, and then within that network packages routes via link layer routing protocols (ARP, or others) till it get to the destination. 

This is exactly the network layer service to route package from network to network!

↗ [0x05 Network Layer](../../0x05%20Network%20Layer/0x05%20Network%20Layer.md)



## Link Layer (Tier-2) Switches Addressing

↗ [Link Layer (Tier-2) Switch](Link%20Layer%20Network%20Devices/Link%20Layer%20(Tier-2)%20Switch.md)



## Ref