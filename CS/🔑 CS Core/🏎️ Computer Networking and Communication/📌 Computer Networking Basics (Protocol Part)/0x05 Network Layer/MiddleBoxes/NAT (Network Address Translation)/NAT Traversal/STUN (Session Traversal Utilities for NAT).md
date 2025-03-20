# STUN (Session Traversal Utilities for NAT)

[TOC]



## Res
### Related Topics
↗ [Linux TUN (network TUNnel)](../../../../../Network%20Virtualization/📌%20NV%20Implementations/Virtual%20Network%20Layer/Linux%20TUN%20(network%20TUNnel).md)
↗ [P2P Channels](../../../../0x06%20Data%20Link%20Layer/Switched%20LAN/〰️%20P2P%20Channels/P2P%20Channels.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/STUN

STUN (**Session Traversal Utilities for NAT**; originally Simple Traversal of User Datagram Protocol (UDP) through Network Address Translators) is a standardized set of methods, including a network protocol, for traversal of network address translator (NAT) gateways in applications of real-time voice, video, messaging, and other interactive communications.

STUN is a tool used by other protocols, such as **↗ [ICE (Interactive Connectivity Establishment)](ICE%20(Interactive%20Connectivity%20Establishment)/ICE%20(Interactive%20Connectivity%20Establishment).md)**, the **↗ [SIP (Session Initial Protocol)](../../../../../Real%20Time%20Communication%20(Protocol)/SIP%20(Session%20Initial%20Protocol).md)**, and **↗ [WebRTC](../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/Desktop%20&%20Monolithic%20Application%20Development/🤠%20Web%20Browser%20Development/Web%20Browser%20Networking%20&%20Communication%20Technologies/WebRTC.md)**. It provides a tool for hosts to discover the presence of a network address translator, and to discover the mapped, usually public, Internet Protocol (IP) address and port number that the NAT has allocated for the application's User Datagram Protocol (UDP) flows to remote hosts. The protocol requires assistance from a third-party network server (STUN server) located on the opposing (public) side of the NAT, usually the public Internet.

STUN was first announced in RFC 3489;[1] the title was changed in a specification of an updated set of methods published as RFC 5389, retaining the same acronym.

> 🔗 https://info.support.huawei.com/info-finder/encyclopedia/en/STUN.html

A point-to-point (P2P) network requires that two communicating parties be able to proactively access each other. However, [NAT](https://info.support.huawei.com/info-finder/encyclopedia/en/NAT.html "NAT") devices block the access, thereby affecting normal running of P2P applications. STUN technology is commonly used to overcome this NAT traversal problem. It allows network devices to discover post-NAT IP addresses and port numbers of communicating parties and to use this information to establish P2P data channels traversing the NAT devices for P2P communication.


### Why We Need STUN?
> 🔗 https://info.support.huawei.com/info-finder/encyclopedia/en/STUN.html

[NAT](https://info.support.huawei.com/info-finder/encyclopedia/en/NAT.html "NAT") is widely deployed to mitigate the exhaustion of IPv4 addresses. It also protects against attacks from external networks by dropping some packets sent from external networks to the internal network. However, it is not suitable for P2P communication, such as a P2P network, since it cannot enable two P2P communicating parties to initiate access.

To solve the problems, some NAT traversal techniques for P2P networks emerge, such as reverse link, application layer gateway (ALG), hole punching, and middleware techniques.

The STUN protocol defined by RFC is used to discover NAT devices located along the path between two communicating parties and to obtain post-NAT IP addresses and port numbers of the communicating parties. Then, a P2P channel traversing NAT devices can be set up between two communicating parties for communication. This process is also called hole punching. The STUN technology is widely used because it works with existing NAT devices and does not require any modification on them, while only one STUN server needs to be deployed on the network.


### What Is a STUN Server?
> 🔗 https://info.support.huawei.com/info-finder/encyclopedia/en/STUN.html

STUN uses the client/server model and consists of the STUN server and STUN client:
- STUN server: A router can function as a STUN server and send STUN binding responses and receive STUN binding requests. The STUN server is usually deployed on a public network.
- STUN client: A router can function as a STUN client and send STUN binding requests and receive STUN binding responses.
![](../../../../../../../../Assets/Pics/Pasted%20image%2020250320174523.png)
<small>Typical STUN networking</small>

In the STUN standard, [NAT](https://info.support.huawei.com/info-finder/encyclopedia/en/NAT.html "NAT") is classified into four types according to the mapping mode from the private IP address and port to the public IP address and port: full cone NAT, restricted cone NAT, port restricted cone NAT, and symmetric NAT. For details about the four NAT types, see NAT.


### How Does STUN Work?
> 🔗 https://info.support.huawei.com/info-finder/encyclopedia/en/STUN.html

Through message exchange with a STUN client, a STUN server can discover a [NAT](https://info.support.huawei.com/info-finder/encyclopedia/en/NAT.html "NAT") device and obtain the IP address and port number allocated by the NAT device to the STUN client. After a data channel is established between STUN clients, the clients can access each other. The STUN message exchange process consists of two phases: NAT detection and hole punching. The following figure shows the detailed process.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020250320174606.png)
<small>STUN message exchange process</small>
#### NAT Detection
1. Each STUN client sends a binding request to the STUN server.
2. After receiving binding requests, the STUN server obtains the source IP addresses and port numbers and sends a binding response to each STUN client. The binding response message carries the MAPPED-ADDRESS, XOR-MAPPED-ADDRESS, and RESPONSE-ORIGIN attributes.
3. The STUN client obtains an IP address and port number from the MAPPED-ADDRESS or XOR-MAPPED-ADDRESS attribute in the binding response, and compares the obtained IP address and port number with the source IP address and port number carried in the binding request. If they are different, a NAT device is used in front of the STUN client. After confirming the NAT detection result, each STUN client notifies the service module of the result.
#### Hole Punching
Hole punching is a technique for establishing a direct connection between P2P communicating parties behind NAT devices. Specifically, it sets up a data channel between P2P STUN clients across intermediate devices (such as RRs) by creating NAT session entries on NAT devices. The process of STUN hole punching is as follows:
1. A STUN client obtains the TNP information (including IP addresses and port numbers used before and after NAT) of other STUN clients from an RR through BGP. When STUN client 1 needs to communicate with STUN client 2, it sends BGP packets to notify STUN client 2 that hole punching is required to establish a data channel.
2. STUN client 1 and STUN client 2 send binding requests to each other for hole punching. STUN client 1 sends two binding requests to STUN client 2. Specifically, it sends message A containing pre-NAT IP address and port number and message B containing post-NAT IP addresses and port number, and STUN client 2 repeats this process.
3. After receiving messages A and B, STUN client 2 processes the messages as follows. STUN client 1 repeats similar process:
4. If STUN client 1 and STUN client 2 are on the same private network, that is, behind the same NAT device, message A can be successfully sent to STUN client 2. Otherwise, message A is discarded.
5. After STUN client 1 sends message B, NAT device 1 generates an entry to record the session from STUN client 1 to STUN client 2. However, since NAT device 2 (which is in front of STUN client 2) does not have the corresponding session entry, NAT device 2 will discard message B.
6. Meanwhile, NAT device 2 also generates an entry to record the session from STUN client 2 to STUN client 1. As NAT device 1 does not have the corresponding session entry either, it will discard message B.
7. STUN client 1 and STUN client 2 continuously send binding requests to each other. When session entries are generated on both NAT device 1 and NAT device 2, the two STUN clients can receive binding requests from each other.
8. After receiving a binding request from STUN client 1, STUN client 2 sends a binding response to STUN client 1. STUN client 1 does the same.

After the preceding STUN messages are exchanged, a data channel is established between the STUN clients so that packets can traverse the NAT devices.


### What Is STUN Used for in SD-WAN?
> 🔗 https://info.support.huawei.com/info-finder/encyclopedia/en/STUN.html

![](../../../../../../../../Assets/Pics/Pasted%20image%2020250320174958.png)



## Ref
