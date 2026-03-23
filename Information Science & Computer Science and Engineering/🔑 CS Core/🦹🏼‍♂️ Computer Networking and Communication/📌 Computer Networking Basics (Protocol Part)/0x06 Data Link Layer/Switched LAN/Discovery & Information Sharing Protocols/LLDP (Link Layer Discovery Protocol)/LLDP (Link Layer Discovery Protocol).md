# LLDP (Link Layer Discovery Protocol)

[TOC]



## Res
### Related Topics
↗ [SNMP & MIB](../../../../0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/SNMP%20&%20MIB/SNMP%20&%20MIB.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Link_Layer_Discovery_Protocol

The Link Layer Discovery Protocol (LLDP) is a vendor-neutral link layer protocol used by network devices for advertising their identity, capabilities, and neighbors on a local area network based on IEEE 802 technology, principally wired Ethernet. The protocol is formally referred to by the IEEE as Station and Media Access Control Connectivity Discovery specified in IEEE 802.1AB with additional support in IEEE 802.3 section 6 clause 79.

LLDP performs functions similar to several [proprietary protocols](https://en.wikipedia.org/wiki/Proprietary_protocol "Proprietary protocol"), such as [Cisco Discovery Protocol](https://en.wikipedia.org/wiki/Cisco_Discovery_Protocol "Cisco Discovery Protocol"), [Foundry Discovery Protocol](https://en.wikipedia.org/wiki/Foundry_Discovery_Protocol "Foundry Discovery Protocol"), [Nortel Discovery Protocol](https://en.wikipedia.org/wiki/Nortel_Discovery_Protocol "Nortel Discovery Protocol") and [Link Layer Topology Discovery](https://en.wikipedia.org/wiki/Link_Layer_Topology_Discovery "Link Layer Topology Discovery").

Information gathered with LLDP can be stored in the device **management information base (MIB)** and queried with the **Simple Network Management Protocol (SNMP)** as specified in RFC 2922. The topology of an LLDP-enabled network can be discovered by crawling the hosts and querying this database. Information that may be retrieved include:
- System name and description
- Port name and description
- VLAN name
- IP management address
- System capabilities (switching, routing, etc.)
- MAC/PHY information
- MDI power
- Link aggregation



## Ref
[👍 LLDP技术介绍 | H3C 技术文档]: https://www.h3c.com/cn/d_200805/605853_30003_0.htm
