# UPnP (Universal Plug-and-Play)

[TOC]



## Res
### Related Topics
↗ [UPnP IGD (Internet Gateway Device Control Protocol)](../../../../../0x05%20Network%20Layer/MiddleBoxes/NAT%20(Network%20Address%20Translation)/NAT%20Traversal/UPnP%20IGD%20(Internet%20Gateway%20Device%20Control%20Protocol).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Universal_Plug_and_Play

Universal Plug and Play (UPnP) is a set of networking protocols on the Internet Protocol (IP) that permits networked devices, such as personal computers, printers, Internet gateways, Wi-Fi access points and mobile devices, to seamlessly discover each other's presence on the network and establish functional network services. ==UPnP is intended primarily for residential networks without enterprise-class devices.==

UPnP assumes the network runs IP, and then uses HTTP on top of IP to provide device/service description, actions, data transfer and event notification. Device search requests and advertisements are supported by running HTTP on top of UDP (port 1900) using multicast (known as HTTPMU). Responses to search requests are also sent over UDP, but are instead sent using unicast (known as HTTPU).

Conceptually, UPnP extends plug and play—a technology for dynamically attaching devices directly to a computer—to zero-configuration networking for residential and SOHO wireless networks. UPnP devices are plug-and-play in that, when connected to a network, they automatically establish working configurations with other devices, removing the need for users to manually configure and add devices through IP addresses.

==UPnP is generally regarded as unsuitable for deployment in business settings for reasons of economy, complexity, and consistency==: the multicast foundation makes it chatty, consuming too many network resources on networks with a large population of devices; the simplified access controls do not map well to complex environments.



## Ref
