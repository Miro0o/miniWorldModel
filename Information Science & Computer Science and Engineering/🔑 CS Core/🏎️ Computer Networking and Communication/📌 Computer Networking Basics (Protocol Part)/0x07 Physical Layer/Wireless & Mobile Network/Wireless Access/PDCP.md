# PDCP

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Packet_Data_Convergence_Protocol

**Packet Data Convergence Protocol** (**PDCP**) is specified by [3GPP](https://en.wikipedia.org/wiki/3GPP) in TS 25.323 for [UMTS](https://en.wikipedia.org/wiki/UMTS), TS 36.323 for [LTE](https://en.wikipedia.org/wiki/LTE_(telecommunication)) and TS 38.323 for [5G](https://en.wikipedia.org/wiki/5G). PDCP is located in the Radio Protocol Stack in the UMTS/LTE/5G [air interface](https://en.wikipedia.org/wiki/Air_interface) on top of the [RLC](https://en.wikipedia.org/wiki/Radio_Link_Control) layer.

PDCP provides its services to the [RRC](https://en.wikipedia.org/wiki/Radio_Resource_Control) and user plane upper layers, e.g. [IP](https://en.wikipedia.org/wiki/Internet_Protocol) at the [UE](https://en.wikipedia.org/wiki/User_equipment) or to the relay at the base station. The following services are provided by PDCP to upper layers:
- transfer of user plane data;
- transfer of control plane data;
- header compression;
- ciphering;
- integrity protection.

The header compression technique can be based on either IP header compression (RFC 2507) or [Robust Header Compression](https://en.wikipedia.org/wiki/Robust_Header_Compression) (RFC 3095). If **PDCP** is configured for *No Compression* it will send the IP Packets without compression; otherwise it will compress the packets according to its configuration by upper layer and attach a **PDCP** header and send the packet.

Different header formats are defined, dependent on the type of data to be transported. In LTE, there are e.g. header formats for Control Plane PDCP Data [PDU](https://en.wikipedia.org/wiki/Protocol_data_unit) with long PDCP SN (12 bits), for User plane PDCP Data PDU with short PDCP SN (7 bits) and others.



## Ref

