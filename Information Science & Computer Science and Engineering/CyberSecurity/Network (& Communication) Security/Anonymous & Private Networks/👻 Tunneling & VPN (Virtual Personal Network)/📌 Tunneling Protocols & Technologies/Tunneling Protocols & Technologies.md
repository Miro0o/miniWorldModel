# Tunneling Protocols & Technologies

[TOC]



## Res
### Related Topics
↗ [OpenVPN Project & OpenVPN Community Project](../VPN%20&%20NAT%20Traversal%20Implementations/📌%20OpenVPN%20Project%20&%20OpenVPN%20Community%20Project/OpenVPN%20Project%20&%20OpenVPN%20Community%20Project.md)
- ↗ [OpenVPN Protocol](../VPN%20&%20NAT%20Traversal%20Implementations/📌%20OpenVPN%20Project%20&%20OpenVPN%20Community%20Project/OpenVPN%20Protocol/OpenVPN%20Protocol.md)

↗ [IPSec (Internet Protocol Security) & IPSec VPN](../../../Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security%20Protocols/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)
↗ [SSL VPN](SSL%20VPN/SSL%20VPN.md)
↗ [WireGuard](../VPN%20&%20NAT%20Traversal%20Implementations/VPN%20&%20NAT%20Free%20Software/WireGuard.md)

↗ [SSH (Secure SHell)](../../../Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/SSH%20(Secure%20SHell).md)
- ↗ [SSH Tunneling](../../../Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/📌%20SSH%20Services%20&%20Components/SSH%20Tunneling.md)

↗ [vLAN & VxLAN](../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/vLAN%20&%20VxLAN/vLAN%20&%20VxLAN.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Tunneling_protocol

In [computer networks](https://en.wikipedia.org/wiki/Computer_network "Computer network"), a **tunneling protocol** is a [communication protocol](https://en.wikipedia.org/wiki/Communication_protocol "Communication protocol") that allows for the movement of data from one network to another. They can, for example, allow private communications to be sent across a public network (such as the [Internet](https://en.wikipedia.org/wiki/Internet "Internet")), or for one network protocol to be carried over an incompatible network, through a process called [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_\(networking\) "Encapsulation (networking)").

Because tunneling involves repackaging the traffic data into a different form, perhaps with [encryption](https://en.wikipedia.org/wiki/Encryption "Encryption") as standard, it can hide the nature of the traffic that is run through a tunnel.

==Tunneling protocols work by using the data portion of a [packet](https://en.wikipedia.org/wiki/Network_packet "Network packet") (the [payload](https://en.wikipedia.org/wiki/Payload_\(computing\) "Payload (computing)")) to carry the packets that actually provide the service. ==Tunneling uses a layered protocol model such as those of the [OSI](https://en.wikipedia.org/wiki/Open_Systems_Interconnection "Open Systems Interconnection") or [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP") protocol suite, but usually violates the layering when using the payload to carry a service not normally provided by the network. Typically, the delivery protocol operates at an equal or higher level in the layered model than the payload protocol.


**Common tunneling protocols:**
- [IP in IP](https://en.wikipedia.org/wiki/IP_in_IP "IP in IP") (IP protocol 4): IP in IPv4/IPv6
- [SIT/IPv6](https://en.wikipedia.org/wiki/6in4 "6in4") (IP protocol 41): IPv6 in IPv4/IPv6
- [GRE](https://en.wikipedia.org/wiki/Generic_Routing_Encapsulation "Generic Routing Encapsulation") (IP protocol 47): Generic Routing Encapsulation
- [OpenVPN](https://en.wikipedia.org/wiki/OpenVPN "OpenVPN") (UDP port 1194)
- [SSTP](https://en.wikipedia.org/wiki/Secure_Socket_Tunneling_Protocol "Secure Socket Tunneling Protocol") (TCP port 443): Secure Socket Tunneling Protocol
- [IPSec](https://en.wikipedia.org/wiki/IPSec "IPSec") (IP protocols 50 and 51): Internet Protocol Security
- [L2TP](https://en.wikipedia.org/wiki/Layer_2_Tunneling_Protocol "Layer 2 Tunneling Protocol") (UDP port 1701): Layer 2 Tunneling Protocol
- [L2TPv3](https://en.wikipedia.org/wiki/L2TPv3 "L2TPv3") (IP protocol 115): Layer 2 Tunneling Protocol version 3
- [VXLAN](https://en.wikipedia.org/wiki/Virtual_Extensible_LAN "Virtual Extensible LAN") (UDP port 4789): Virtual Extensible Local Area Network
- [PPTP](https://en.wikipedia.org/wiki/Point-to-Point_Tunneling_Protocol "Point-to-Point Tunneling Protocol") (TCP port 1723 for control, [GRE](https://en.wikipedia.org/wiki/Generic_Routing_Encapsulation "Generic Routing Encapsulation") for data): Point-to-Point Tunneling Protocol
- [PPPoE](https://en.wikipedia.org/wiki/Point-to-Point_Protocol_over_Ethernet "Point-to-Point Protocol over Ethernet") (EtherType 0x8863 for control, 0x8864 for data): Point-to-Point Protocol over Ethernet
- [GENEVE](https://en.wikipedia.org/wiki/Generic_Network_Virtualization_Encapsulation "Generic Network Virtualization Encapsulation")
- [WireGuard](https://en.wikipedia.org/wiki/WireGuard "WireGuard") (UDP dynamic port)


### Tunnel Broker
> 🔗 https://en.wikipedia.org/wiki/Tunnel_broker

In the context of computer networking, a tunnel broker is a service which provides a network tunnel. These tunnels can provide encapsulated connectivity over existing infrastructure to another infrastructure.

There are a variety of tunnel brokers, including IPv4 tunnel brokers, though most commonly the term is used to refer to an IPv6 tunnel broker as defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [3053](https://datatracker.ietf.org/doc/html/rfc3053)

IPv6 tunnel brokers typically provide IPv6 to sites or end users over IPv4. In general, IPv6 tunnel brokers offer so called 'protocol 41' or proto-41 tunnels. These are tunnels where IPv6 is tunneled directly inside IPv4 packets by having the protocol field set to '41' (IPv6) in the IPv4 packet. In the case of IPv4 tunnel brokers IPv4 tunnels are provided to users by encapsulating IPv4 inside IPv6 as defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [2473](https://datatracker.ietf.org/doc/html/rfc2473)



## Ref
[Nginx 或 Haproxy 搭建 TLS 隧道隐藏指纹 | Xray-core]: https://xtls.github.io/document/level-2/nginx_or_haproxy_tls_tunnel.html
Nginx 或 Haproxy 实现的 HTTPS 隧道、HTTP/2 over HTTPS 隧道、WebSocket over HTTP/2 over HTTPS 隧道、gRPC over HTTP/2 over HTTPS 隧道以及自签证书双端认证的 gRPC over HTTP/2 over HTTPS 隧道
