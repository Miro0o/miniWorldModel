# Tunneling Protocols & Technologies

[TOC]



## Res
### Related Topics
↗ [OpenVPN Project & OpenVPN Community Project](../VPN%20&%20NAT%20Implementations/📌%20OpenVPN%20Project%20&%20OpenVPN%20Community%20Project/OpenVPN%20Project%20&%20OpenVPN%20Community%20Project.md)
↗ [OpenVPN Protocol](../VPN%20&%20NAT%20Implementations/📌%20OpenVPN%20Project%20&%20OpenVPN%20Community%20Project/OpenVPN%20Protocol/OpenVPN%20Protocol.md)

↗ [IPSec (Internet Protocol Security) & IPSec VPN](../../../🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)
↗ [SSL VPN](SSL%20VPN/SSL%20VPN.md)

↗ [SSH (Secure SHell)](../../../🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/SSH%20(Secure%20SHell)/SSH%20(Secure%20SHell).md)
↗ [SSH Tunneling](../../../🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/SSH%20(Secure%20SHell)/📌%20SSH%20Services%20&%20Components/SSH%20Tunneling.md)
↗ [vLAN & VxLAN](../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/vLAN%20&%20VxLAN/vLAN%20&%20VxLAN.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Tunneling_protocol

In computer networks, a tunneling protocol is a communication protocol which allows for the movement of data from one network to another. It can, for example, allow private network communications to be sent across a public network (such as the Internet), or for one network protocol to be carried over an incompatible network, through a process called encapsulation.

Because tunneling involves repackaging the traffic data into a different form, perhaps with encryption as standard, it can hide the nature of the traffic that is run through a tunnel.
The tunneling protocol works by using the data portion of a packet (the payload) to carry the packets that actually provide the service. Tunneling uses a layered protocol model such as those of the OSI or TCP/IP protocol suite, but usually violates the layering when using the payload to carry a service not normally provided by the network. Typically, the delivery protocol operates at an equal or higher level in the layered model than the payload protocol.


### Tunnel Broker
> 🔗 https://en.wikipedia.org/wiki/Tunnel_broker

n the context of computer networking, a tunnel broker is a service which provides a network tunnel. These tunnels can provide encapsulated connectivity over existing infrastructure to another infrastructure.

There are a variety of tunnel brokers, including IPv4 tunnel brokers, though most commonly the term is used to refer to an IPv6 tunnel broker as defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [3053](https://datatracker.ietf.org/doc/html/rfc3053)

IPv6 tunnel brokers typically provide IPv6 to sites or end users over IPv4. In general, IPv6 tunnel brokers offer so called 'protocol 41' or proto-41 tunnels. These are tunnels where IPv6 is tunneled directly inside IPv4 packets by having the protocol field set to '41' (IPv6) in the IPv4 packet. In the case of IPv4 tunnel brokers IPv4 tunnels are provided to users by encapsulating IPv4 inside IPv6 as defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [2473](https://datatracker.ietf.org/doc/html/rfc2473)



## Ref
