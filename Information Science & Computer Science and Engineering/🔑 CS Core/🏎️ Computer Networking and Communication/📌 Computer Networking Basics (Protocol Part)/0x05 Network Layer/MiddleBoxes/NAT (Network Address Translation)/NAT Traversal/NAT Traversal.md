# NAT Traversal

[TOC]



## Res
### Related Topics
↗ [P2P Channels](../../../../0x06%20Data%20Link%20Layer/Switched%20LAN/〰️%20P2P%20Channels/P2P%20Channels.md)

↗ [Reverse Proxy Servers & Application Servers](../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/🐈%20Reverse%20Proxy%20Servers%20&%20Application%20Servers/Reverse%20Proxy%20Servers%20&%20Application%20Servers.md)
- ↗ [frp (A Fast Reverse Proxy)](../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/🐈%20Reverse%20Proxy%20Servers%20&%20Application%20Servers/Reverse%20Proxy%20Servers/frp%20(A%20Fast%20Reverse%20Proxy).md)

↗ [Tunneling & VPN (Virtual Personal Network)](../../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
↗ [VPN & NAT Implementations](../../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/VPN%20&%20NAT%20Implementations/VPN%20&%20NAT%20Implementations.md)


### Other Resoures
👍 [「译」 NAT 穿透是如何工作的：技术原理及企业级实践（Tailscale, 2020）](https://arthurchiao.art/blog/how-nat-traversal-works-zh/)
- [How NAT traversal works](https://tailscale.com/blog/how-nat-traversal-works/)
- This article is archived into current folder in `.webarchive` extension, which is unseeable on obsidian.

>想了解更多新的 NAT 术语，可参考
> - RFC [4787](https://tools.ietf.org/html/rfc4787) (NAT Behavioral Requirements for UDP)
> - RFC [5382](https://tools.ietf.org/html/rfc5382) (for TCP)
> - RFC [5508](https://tools.ietf.org/html/rfc5508) (for ICMP)
>
>如果自己实现 NAT，那应该（should）遵循这些 RFC 的规范，这样才能使你的 NAT 行为符合业界惯例，与其他厂商的设备或软件良好兼容。



## Intro
> 🔗 https://en.wikipedia.org/wiki/NAT_traversal

**Network address translation traversa**l is a computer networking technique of establishing and maintaining Internet Protocol connections across gateways that implement network address translation (NAT).

NAT traversal techniques are required for many network applications, such as peer-to-peer file sharing and voice over IP.

Various NAT traversal techniques have been developed:
- [NAT Port Mapping Protocol](https://en.wikipedia.org/wiki/NAT_Port_Mapping_Protocol "NAT Port Mapping Protocol") (NAT-PMP) is a protocol introduced by Apple as an alternative to IGDP.
- [Port Control Protocol](https://en.wikipedia.org/wiki/Port_Control_Protocol "Port Control Protocol") (PCP) is a successor of NAT-PMP.
- [UPnP](https://en.wikipedia.org/wiki/UPnP "UPnP") [Internet Gateway Device Protocol](https://en.wikipedia.org/wiki/Internet_Gateway_Device_Protocol "Internet Gateway Device Protocol") (UPnP IGD) is supported by many small NAT gateways in [home or small office](https://en.wikipedia.org/wiki/Small_office/home_office "Small office/home office") settings. It allows a device on a network to ask the router to open a port.
- [Interactive Connectivity Establishment](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment "Interactive Connectivity Establishment") (ICE) is a complete protocol for using STUN and/or TURN to do NAT traversal while picking the best network route available. It fills in some of the missing pieces and deficiencies that were not mentioned by STUN specification.
- [Session Traversal Utilities for NAT](https://en.wikipedia.org/wiki/STUN "STUN") (STUN) is a standardized set of methods and a network protocol for NAT hole punching. It was designed for UDP but was also extended to TCP.
- [Traversal Using Relays around NAT](https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT "Traversal Using Relays around NAT") (TURN) is a relay protocol designed specifically for NAT traversal.
- [NAT hole punching](https://en.wikipedia.org/wiki/NAT_hole_punching "NAT hole punching") is a general technique that exploits how NATs handle some protocols (for example, UDP, TCP, or ICMP) to allow previously blocked packets through the NAT.
    - [UDP hole punching](https://en.wikipedia.org/wiki/UDP_hole_punching "UDP hole punching")
    - [TCP hole punching](https://en.wikipedia.org/wiki/TCP_hole_punching "TCP hole punching")
    - [ICMP hole punching](https://en.wikipedia.org/wiki/ICMP_hole_punching "ICMP hole punching")
- [Socket Secure](https://en.wikipedia.org/wiki/SOCKS "SOCKS") (SOCKS) is a technology created in the early 1990s that uses proxy servers to relay traffic between networks or systems.
- [Application-level gateway](https://en.wikipedia.org/wiki/Application-level_gateway "Application-level gateway") (ALG) techniques are a component of a firewall or NAT that provides configureable NAT traversal filters. It is claimed that this technique creates more problems than it solves.



## Ref
