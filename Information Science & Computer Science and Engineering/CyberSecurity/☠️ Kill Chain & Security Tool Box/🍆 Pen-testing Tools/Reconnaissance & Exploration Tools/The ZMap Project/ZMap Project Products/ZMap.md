# ZMap

[TOC]



## Res
🚧 https://github.com/zmap/zmap

↗ [XMap](../../XMap.md)



## Intro
ZMap is a fast single packet network scanner designed for Internet-wide network surveys. On a typical desktop computer with a gigabit Ethernet connection, ZMap is capable scanning the entire public IPv4 address space on a single port in under 45 minutes. With a 10gigE connection and [PF_RING](http://www.ntop.org/products/packet-capture/pf_ring/), ZMap can scan the IPv4 address space in under 5 minutes.

ZMap operates on GNU/Linux, Mac OS, and BSD. ZMap currently has fully implemented probe modules for TCP SYN scans, ICMP, DNS queries, UPnP, BACNET, and can send a large number of [UDP probes](https://github.com/zmap/zmap/blob/master/examples/udp-probes/README). If you are looking to do more involved scans, e.g., banner grab or TLS handshake, take a look at [ZGrab 2](https://github.com/zmap/zgrab2), ZMap's sister project that performs stateful application-layer handshakes.



## Ref
[👍 Zmap for Scanning the Internet: Scan the Entire Internet in 45 minutes | hackers-arise]: https://www.hackers-arise.com/post/zmap-for-scanning-the-internet-scan-the-entire-internet-in-45-minutes

