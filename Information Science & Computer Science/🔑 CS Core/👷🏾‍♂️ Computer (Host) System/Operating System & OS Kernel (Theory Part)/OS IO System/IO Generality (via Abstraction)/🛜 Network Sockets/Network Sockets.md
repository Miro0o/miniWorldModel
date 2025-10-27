# Network Sockets

[TOC]



## Res
### Related Topics
↗ [IPC (Inter Process Communication)](../../../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/IPC%20(Inter%20Process%20Communication).md)
- ↗ [IPC /Sockets](../../../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/Sockets.md)
- ↗ [Internal Sockets](../../../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/Internal%20Sockets.md)

↗ [Network Programming & RPC](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
- ↗ [Internet Domain Socket Programming](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Internet%20Domain%20Socket%20Programming/Internet%20Domain%20Socket%20Programming.md)

↗ [Cloud /Remote Procedure Call (RPC)](../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/Cloud%20RPC%20Services.md)
↗ [Web Dev /Middleware /Remote Procedure Call (RPC)](../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Network_socket
> 🔗 https://en.wikipedia.org/wiki/Remote_procedure_call


### What is Network Socket
A **network socket** is a software structure within a [network node](https://en.wikipedia.org/wiki/Node_(networking)) of a [computer network](https://en.wikipedia.org/wiki/Computer_network) that serves as an endpoint for sending and receiving data across the network. The structure and properties of a socket are defined by an [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface) (API) for the networking architecture. Sockets are created only during the lifetime of a [process](https://en.wikipedia.org/wiki/Process_(computing)) of an application running in the node.
#### Socket in Internet
Because of the standardization of the [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP) protocols in the development of the [Internet](https://en.wikipedia.org/wiki/Internet), the term network socket is most commonly used in the context of the *Internet protocol suite*, and is therefore often also referred to as **Internet socket**. In this context, a socket is externally identified to other hosts by its **socket address**, which is the triad of [transport protocol](https://en.wikipedia.org/wiki/Transport_protocol), [IP address](https://en.wikipedia.org/wiki/IP_address), and [port number](https://en.wikipedia.org/wiki/Port_number).
#### Socket in IPC
The term socket is also used for the software endpoint of node-internal [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication) (IPC), which often uses the same API as a network socket.


### RPC (Remote Procedure Call)
↗ [Remote Procedure Call (RPC)](Remote%20Procedure%20Call%20(RPC).md)



## Types of Network Sockets
### Datagram Sockets
[Connectionless](https://en.wikipedia.org/wiki/Connectionless) sockets, which use [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (UDP). Each packet sent or received on a datagram socket is individually addressed and routed. Order and reliability are not guaranteed with datagram sockets, so multiple packets sent from one machine or process to another may arrive in any order or might not arrive at all. Special configuration may be required to send [broadcasts](https://en.wikipedia.org/wiki/Broadcasting_(networking)) on a datagram socket. In order to receive broadcast packets, a datagram socket should not be bound to a specific address, though in some implementations, broadcast packets may also be received when a datagram socket is bound to a specific address.


### Stream Sockets
[Connection-oriented](https://en.wikipedia.org/wiki/Connection-oriented) sockets, which use [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP), [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) or [Datagram Congestion Control Protocol](https://en.wikipedia.org/wiki/Datagram_Congestion_Control_Protocol) (DCCP). A stream socket provides a [sequenced](https://en.wikipedia.org/wiki/Sequenced) and unique flow of error-free data without record boundaries, with well-defined mechanisms for creating and destroying connections and reporting errors. A stream socket transmits data [reliably](https://en.wikipedia.org/wiki/Reliability_(computer_networking)), in order, and with [out-of-band](https://en.wikipedia.org/wiki/Out-of-band_data) capabilities. On the Internet, stream sockets are typically implemented using TCP so that applications can run across any networks using TCP/IP protocol.


### Raw Sockets
Allow direct sending and receiving of IP packets without any protocol-specific transport layer formatting. With other types of sockets, the [payload](https://en.wikipedia.org/wiki/Payload_(computing)) is automatically [encapsulated](https://en.wikipedia.org/wiki/Encapsulation_(networking)) according to the chosen transport layer protocol (e.g. TCP, UDP), and the socket user is unaware of the existence of protocol [headers](https://en.wikipedia.org/wiki/Header_(computing)) that are broadcast with the payload. When reading from a raw socket, the headers are usually included. When transmitting packets from a raw socket, the automatic addition of a header is optional.

Most socket [application programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface) (APIs), for example, those based on [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets), support raw sockets. [Windows XP](https://en.wikipedia.org/wiki/Windows_XP) was released in 2001 with raw socket support implemented in the [Winsock](https://en.wikipedia.org/wiki/Winsock) interface, but three years later, Microsoft limited Winsock's raw socket support because of security concerns.

Raw sockets are used in security-related applications like [Nmap](https://en.wikipedia.org/wiki/Nmap). One use case for raw sockets is the implementation of new transport-layer protocols in [user space](https://en.wikipedia.org/wiki/User_space). Raw sockets are typically available in network equipment, and used for [routing protocols](https://en.wikipedia.org/wiki/Routing_protocol) such as the Internet Group Management Protocol (IGMP) and [Open Shortest Path First](https://en.wikipedia.org/wiki/Open_Shortest_Path_First)(OSPF), and in the [Internet Control Message Protocol](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) (ICMP) used, among other things, by the [ping utility](https://en.wikipedia.org/wiki/Ping_utility).



## Refs
[Unix domain socket 简介]: https://www.cnblogs.com/sparkdev/p/8359028.html
[Remote procedure call | Wikipedia]: https://en.wikipedia.org/wiki/Remote_procedure_call


[👍【网络编程知识】什么是Socket？概念及原理分析]: https://www.cnblogs.com/gmpy/articles/17802712.html

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240423222918.png)
