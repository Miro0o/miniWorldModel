# SCTP (Stream Control Trasmission Protocol)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol

The **Stream Control Transmission Protocol** (**SCTP**) is a computer networking communications protocol in the [transport layer](https://en.wikipedia.org/wiki/Transport_layer "Transport layer") of the [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite "Internet protocol suite"). Originally intended for [Signaling System 7](https://en.wikipedia.org/wiki/Signaling_System_7 "Signaling System 7") (SS7) message transport in telecommunication, the protocol provides the message-oriented feature of the User Datagram Protocol (UDP), while ensuring reliable, in-sequence transport of messages with congestion control like the Transmission Control Protocol (TCP). Unlike UDP and TCP, the protocol supports [multihoming](https://en.wikipedia.org/wiki/Multihoming "Multihoming") and redundant paths to increase resilience and reliability.

SCTP is standardized by the Internet Engineering Task Force (IETF) in RFC 9260. The SCTP reference implementation was released as part of FreeBSD version 7, and has since been widely ported to other platforms.

SCTP is optimized to:
- Avoid the multithread infrastructure problems, when the traffic is high
- Improve the SCTP association searching rate (association lookup process speed is increased) by SCTP hash table optimization on the SPU 
- Improve FSM for retransmission cases

SCTP is used for applications where monitoring and detection of loss of session is required. The SCTP path or session failure detection mechanism, for example, the heartbeat, monitors the connectivity of the session.


![](../../../../../../Assets/Pics/Pasted%20image%2020230908154544.png)




## Ref
[👍 Securing GTP and SCTP Traffic User Guide for Security Devices | Juniper]: https://www.juniper.net/documentation/us/en/software/junos/gtp-sctp/topics/topic-map/security-gprs-sctp.html
