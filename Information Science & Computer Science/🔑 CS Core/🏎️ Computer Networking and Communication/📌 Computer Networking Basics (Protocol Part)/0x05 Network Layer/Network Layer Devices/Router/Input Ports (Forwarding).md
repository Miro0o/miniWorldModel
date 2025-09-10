# Input Ports (Forwarding)

[TOC]



## Res
### Related Topics



## Intro
An input port performs several key functions:
1. It performs the physical layer function of **terminating an incoming physical link** at a router; this is shown in the leftmost box of an input port and the rightmost box of an output port in Figure 4.4. 
2. An input port also performs link-layer functions needed to **interoperate with the link layer** at the other side of the incoming link; this is represented by the middle boxes in the input and output ports. 
3. Perhaps most crucially, a **lookup function** is also performed at the input port; this will occur in the rightmost box of the input port. It is here that the forwarding table is consulted to determine the router output port to which an arriving packet will be forwarded via the switching fabric.

Control packets (for example, packets carrying routing protocol information) are forwarded from an input port to the routing processor.

> Note that the term “port” here -- referring to the physical input and output router interfaces -- is distinctly different from the software ports associated with network applications and sockets discussed in Chapters 2 and 3. 

In practice, the number of ports supported by a router can range from a relatively small number in enterprise routers, to hundreds of 10 Gbps ports in a router at an ISP’s edge, where the number of incoming lines tends to be the greatest. The **Juniper MX2020**, **edge router**, for example, supports up to 800 100 Gbps Ethernet ports, with an overall router system capacity of 800 Tbps [Juniper MX 2020 2020].



## Input Port Processing

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%208.26.04%20AM.png)


## Forwarding
### Destination-Based Forwarding


### Generalized Forwarding


## Input Port Queuing


## Ref

