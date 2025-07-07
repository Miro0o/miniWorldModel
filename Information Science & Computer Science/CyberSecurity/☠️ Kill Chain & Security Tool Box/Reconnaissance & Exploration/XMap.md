# XMap

[TOC]



## Res
🚧 https://github.com/idealeer/xmap


### Related Topics
↗ [ZMap](The%20ZMap%20Project/ZMap%20Project%20Products/ZMap.md)



## Intro
XMap is a fast network scanner designed for performing Internet-wide IPv6 & IPv4 network research scanning.

XMap is reimplemented and improved thoroughly from ZMap and is fully compatible with ZMap, armed with the "5 minutes" probing speed and novel scanning techniques. XMap is capable of scanning the 32-bits address space in under 45 minutes. With a 10 gigE connection and [PF_RING](http://www.ntop.org/products/packet-capture/pf_ring/), XMap can scan the 32-bits address space in under 5 minutes. Moreover, leveraging the novel IPv6 scanning approach, XMap can discover the IPv6 Network Periphery fast. Furthermore, XMap can scan the network space randomly with any length and at any position, such as 2001:db8::/32-64 and 192.168.0.1/16-20. Besides, XMap can probe multiple ports simultaneously.

XMap operates on GNU/Linux, macOS, and BSD. XMap currently has implemented probe modules for ICMP Echo scans, TCP SYN scans, [UDP probes](https://github.com/idealeer/xmap/blob/master/examples/udp-probes/README), and **DNS scans (stateless, stateful, or address-spoofing)**.

With banner grab and TLS handshake tool, [ZGrab2](https://github.com/zmap/zgrab2), more involved scans could be performed.



## Ref

