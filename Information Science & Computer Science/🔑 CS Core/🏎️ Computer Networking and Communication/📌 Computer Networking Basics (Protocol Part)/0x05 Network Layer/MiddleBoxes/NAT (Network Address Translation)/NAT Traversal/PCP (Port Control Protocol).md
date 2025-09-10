# PCP (Port Control Protocol)

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Port_Control_Protocol

Port Control Protocol (PCP) is a computer networking protocol that allows hosts on IPv4 or IPv6 networks to control how the incoming IPv4 or IPv6 packets are translated and forwarded by an upstream router that performs network address translation (NAT) or packet filtering. By allowing hosts to create explicit port forwarding rules, handling of the network traffic can be easily configured to make hosts placed behind NATs or firewalls reachable from the rest of the Internet (so they can also act as network servers), which is a requirement for many applications.

Additionally, explicit port forwarding rules available through PCP allow hosts to reduce the amount of generated traffic by eliminating workarounds in form of outgoing NAT keepalive messages, which are required for maintaining connections to servers and for various NAT traversal techniques such as TCP hole punching. At the same time, less generated traffic reduces the power consumption, directly improving the battery runtime for mobile devices.

PCP was standardized in 2013 as a successor to the [NAT Port Mapping Protocol](https://en.wikipedia.org/wiki/NAT_Port_Mapping_Protocol "NAT Port Mapping Protocol"), with which it shares similar protocol concepts and packet formats. PCP adds support for IPv6 and additional NAT scenarios.

In environments where a UPnP IGD is used in the local network, an interworking function between the UPnP IGD and PCP is required to be embedded in the IGD. The UPnP IGD-PCP Interworking Function is specified in RFC6970.

DHCP (IPv4 and IPv6) options to configure hosts with Port Control Protocol (PCP) server IP addresses are specified in RFC7291. The procedure to follow for selecting a server among a list of PCP servers is discussed in RFC7488.

In environments where NAT64 is deployed, PCP allows to learn the IPv6 prefix(es) used by a PCP-controlled NAT64 device to build IPv4-converted IPv6 addresses by the NAT64 (RFC7225)



## Ref
