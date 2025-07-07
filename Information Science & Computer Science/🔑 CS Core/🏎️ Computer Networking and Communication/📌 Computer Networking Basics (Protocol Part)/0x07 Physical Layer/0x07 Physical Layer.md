# Physics Layer

[TOC]



## Res
### Related Topics
↗ [Physical & Link Layer Security](../../../../CyberSecurity/Network%20Security/🏇%20Network%20Security%20Basics%20&%20Protocols/🔌%20Physical%20(Link)%20Layer%20Security/Physical%20&%20Link%20Layer%20Security.md)

↗ [Computer Bus (Datapath) & Interfaces & Protocols](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols.md)
↗ [Bus Specifications & Communication Control Systems](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/📌%20Bus%20Specifications%20&%20Communication%20Control%20Systems/Bus%20Specifications%20&%20Communication%20Control%20Systems.md)


### Learning Resources
🎬 【深入浅出计算机网络 - 2.1 物理层概述】 https://www.bilibili.com/video/BV1g14y1x7hQ/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

[Physical Layer | Wikipedia](https://en.wikipedia.org/wiki/Physical_layer)



## Overview
### Physics Layer Services
> 物理层为数据端设备提供传送数据通路、传输数据，为数据链路层提供服务



## Physical Networks & Communication Media
![](../../../../../Assets/Pics/Pasted%20image%2020240510145217.png)
<small>https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA</small>


### Wired Network
The following classes of wired technologies are used in computer networking.
- _[Coaxial cable](https://en.wikipedia.org/wiki/Coaxial_cable "Coaxial cable")_ is widely used for cable television systems, office buildings, and other work sites for local area networks. Transmission speed ranges from 200 million bits per second to more than 500 million bits per second.
	- [ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T") [G.hn](https://en.wikipedia.org/wiki/G.hn "G.hn") technology uses existing [home wiring](https://en.wikipedia.org/wiki/Home_wiring "Home wiring")([coaxial cable](https://en.wikipedia.org/wiki/Ethernet_over_coax "Ethernet over coax"), phone lines and [power lines](https://en.wikipedia.org/wiki/Power_line_communication "Power line communication")) to create a high-speed local area network.

- _[Twisted pair](https://en.wikipedia.org/wiki/Twisted_pair "Twisted pair")_ cabling is used for wired [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet") and other standards. It typically consists of 4 pairs of copper cabling that can be utilized for both voice and data transmission. The use of two wires twisted together helps to reduce [crosstalk](https://en.wikipedia.org/wiki/Crosstalk_(electronics) "Crosstalk (electronics)") and [electromagnetic induction](https://en.wikipedia.org/wiki/Electromagnetic_induction "Electromagnetic induction"). The transmission speed ranges from 2 Mbit/s to 10 Gbit/s. Twisted pair cabling comes in two forms: unshielded twisted pair (UTP) and shielded twisted-pair (STP). Each form comes in several [category ratings](https://en.wikipedia.org/wiki/Category_cable "Category cable"), designed for use in various scenarios.

- An _[optical fiber](https://en.wikipedia.org/wiki/Optical_fiber "Optical fiber")_ is a glass fiber. It carries pulses of light that represent data via lasers and [optical amplifiers](https://en.wikipedia.org/wiki/Optical_amplifier "Optical amplifier"). Some advantages of optical fibers over metal wires are very low transmission loss and immunity to electrical interference. Using dense [wave division multiplexing](https://en.wikipedia.org/wiki/Wavelength-division_multiplexing "Wavelength-division multiplexing"), optical fibers can simultaneously carry multiple streams of data on different wavelengths of light, which greatly increases the rate that data can be sent to up to trillions of bits per second. Optic fibers can be used for long runs of cable carrying very high data rates, and are used for [undersea communications cables](https://en.wikipedia.org/wiki/Undersea_communications_cables "Undersea communications cables") to interconnect continents. 
	- There are two basic types of fiber optics, [single-mode optical fiber](https://en.wikipedia.org/wiki/Single-mode_optical_fiber "Single-mode optical fiber")(SMF) and [multi-mode optical fiber](https://en.wikipedia.org/wiki/Multi-mode_optical_fiber "Multi-mode optical fiber") (MMF). Single-mode fiber has the advantage of being able to sustain a coherent signal for dozens or even a hundred kilometers. Multimode fiber is cheaper to terminate but is limited to a few hundred or even only a few dozen of meters, depending on the data rate and cable grade.


### Wireless Network
- _Radio and [spread spectrum](https://en.wikipedia.org/wiki/Spread_spectrum "Spread spectrum") technologies_ – Wireless LANs use a high-frequency radio technology similar to digital cellular. Wireless LANs use spread spectrum technology to enable communication between multiple devices in a limited area. [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11 "IEEE 802.11") defines a common flavor of open-standards wireless radio-wave technology known as [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi "Wi-Fi").
	- _[Cellular networks](https://en.wikipedia.org/wiki/Cellular_network "Cellular network")_ use several radio communications technologies. The systems divide the region covered into multiple geographic areas. Each area is served by a low-power [transceiver](https://en.wikipedia.org/wiki/Transceiver "Transceiver").
	- _[Communications satellites](https://en.wikipedia.org/wiki/Communications_satellite "Communications satellite")_ – Satellites also communicate via microwave. The satellites are stationed in space, typically in geosynchronous orbit 35,400 km (22,000 mi) above the equator. These Earth-orbiting systems are capable of receiving and relaying voice, data, and TV signals.
	- _Terrestrial [microwave](https://en.wikipedia.org/wiki/Microwave "Microwave")_ – Terrestrial microwave communication uses Earth-based transmitters and receivers resembling satellite dishes. Terrestrial microwaves are in the low gigahertz range, which limits all communications to line-of-sight. Relay stations are spaced approximately 40 miles (64 km) apart.
- _[Free-space optical communication](https://en.wikipedia.org/wiki/Free-space_optical_communication "Free-space optical communication")_ uses visible or invisible light for communications. In most cases, [line-of-sight propagation](https://en.wikipedia.org/wiki/Line-of-sight_propagation "Line-of-sight propagation") is used, which limits the physical positioning of communicating devices.
- Extending the Internet to interplanetary dimensions via radio waves and optical means, the [Interplanetary Internet](https://en.wikipedia.org/wiki/Interplanetary_Internet "Interplanetary Internet").
- [IP over Avian Carriers](https://en.wikipedia.org/wiki/IP_over_Avian_Carriers "IP over Avian Carriers") was a humorous April fool's [Request for Comments](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments"), issued as [RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [1149](https://datatracker.ietf.org/doc/html/rfc1149). It was implemented in real life in 2001.

The last two cases have a large [round-trip delay time](https://en.wikipedia.org/wiki/Round-trip_delay_time "Round-trip delay time"), which gives slow [two-way communication](https://en.wikipedia.org/wiki/Two-way_communication "Two-way communication") but doesn't prevent sending large amounts of information (they can have high throughput).



## Ref

