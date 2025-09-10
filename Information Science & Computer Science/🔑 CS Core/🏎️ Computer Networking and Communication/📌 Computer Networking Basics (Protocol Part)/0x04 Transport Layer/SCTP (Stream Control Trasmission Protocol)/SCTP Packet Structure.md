# SCTP Packet Structure

[TOC]



## Res
### Related Topics



## SCTP Packet Structure Overview
An SCTP packet consists of the following sections:
- [Common Header Section](https://www.juniper.net/documentation/us/en/software/junos/gtp-sctp/topics/topic-map/security-gprs-sctp.html#id-sctp-packet-structure-overview__d49e38)
- [Data Chunk Section](https://www.juniper.net/documentation/us/en/software/junos/gtp-sctp/topics/topic-map/security-gprs-sctp.html#id-sctp-packet-structure-overview__d49e88)

![](../../../../../../Assets/Pics/Pasted%20image%2020230908154829.png)


### Common Header Section
All SCTP packets require a common header section. This section occupies the first 12 bytes of the packet. Table 1 describes the fields in the common header section:

|Field|Description|
|---|---|
|Source port number|Identifies the sending port.|
|Destination port number|Identifies the receiving port. The hosts use the destination port number to route the packet to the appropriate destination or an application.|
|Verification tag|Distinguishes stale packets from a previous connection. This is a 32-bit random value created during initialization.|
|Checksum|Uses the cyclic redundancy check (CRC32) algorithm to detect errors that might have been introduced during data transmission.|
<small>Table 1: Common Header Fields</small>


### Data Chunk Section
Data chunk section—This section occupies the remaining portion of the packet. Table 2 describes the fields in the data chunk section:

|Field|Description|
|---|---|
|Chunk Type|Identifies the contents of the chunk value field. This is 1- byte long.|
|Chunk Flags|Consists of 8 flag-bits whose definition varies with the chunk type. The default value is zero. This indicates that no application identifier is specified by the upper layer for the data.|
|Chunk Length|Specifies the total length of the chunk in bytes. This field is 2 - bytes long. If the chunk does not form a multiple of 4 bytes (that is, the length is not a multiple of 4) it is implicitly padded with zeros which are not included in the chunk length.|
|Chunk Value|A general purpose data field.|
<small>Table 2: Data Chunk Fields</small>

The resource manager (RM) allows 8 source IP addresses and 8 destination IP addresses during an SCTP communication.



## Ref
[👍 Securing GTP and SCTP Traffic User Guide for Security Devices | Juniper]: https://www.juniper.net/documentation/us/en/software/junos/gtp-sctp/topics/topic-map/security-gprs-sctp.html
