# Control Plane (Routing & Managements)

[TOC]



## Res
### Related Topics
↗ [NPU (Network Processing Unit)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/NPU%20(Network%20Processing%20Unit)/NPU%20(Network%20Processing%20Unit).md)
↗ [Anonymous Network & Host](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👺%20Anonymous%20Network%20&%20Host/Anonymous%20Network%20&%20Host.md)



## Intro
### Routing Tables, Forwarding Tables & Flow Tables
![](../../../../../../Assets/Pics/Screenshot%202023-05-06%20at%2010.30.01%20AM.png)

Recall Figures 4.2 and 4.3. There, we saw that the **forwarding table** (in the case of **destination-based forwarding**) and the **flow table** (in the case of **generalized forwarding**) were the principal elements that linked the network layer’s data and control planes. We learned that these tables specify the local data-plane forwarding behavior of a router. We saw that in the case of generalized forwarding, the actions taken could include not only **forwarding** a packet to a router’s output port, but also **dropping** a packet, **replicating** a packet, and/or **rewriting** layer 2, 3 or 4 packet-header fields.

==In this chapter, we’ll study how those forwarding and flow tables are **computed**, **maintained** and **installed**.== In our introduction to the network layer in Section 4.1, we learned that there are two possible approaches for doing so: per-router control logically centralized control.


### Per-router Control
![](../../../../../../Assets/Pics/Screenshot%202023-05-17%20at%209.59.44%20AM.png)


### Logically Centralized Control
![](../../../../../../Assets/Pics/Screenshot%202023-05-17%20at%209.59.25%20AM.png)

The controller interacts with a **control agent (CA)** in each of the routers via a well-defined protocol to configure and manage that router’s flow table. Typically, the CA has minimum functionality; its job is to communicate with the controller, and to do as the controller commands. Unlike the routing algorithms in Figure 5.1, the CAs do not directly interact with each other nor do they actively take part in computing the forwarding table. This is a key distinction between per-router control and logically centralized control.

By “logically centralized” control [Levin 2012] we mean that the routing control service is accessed as if it were a single central service point, even though the service is likely to be implemented via multiple servers for fault-tolerance, and performance scalability reasons. 

As we will see in Section 5.5, SDN adopts this notion of a logically centralized controller -- an approach that is finding increased use in production deployments. 
- Google uses SDN to control the routers in its internal B4 global wide-area network that interconnects its data centers [Jain 2013]. 
- SWAN [Hong 2013], from Microsoft Research, uses a logically centralized controller to manage routing and forwarding between a wide area network and a data center network. 
- Major ISP deployments, including COMCAST’s ActiveCore and Deutsche Telecom’s Access 4.0 are actively integrating SDN into their networks. 
- And as we’ll see in Chapter 8, SDN control is central to 4G/5G cellular networking as well. [AT&T 2019] notes, “ ... SDN, isn’t a vision, a goal, or a promise. It’s a reality. By the end of next year, 75% of our network functions will be fully virtualized and software-controlled.” China Telecom and China Unicom are using SDN both within data centers and between data centers [Li 2015].



## Routing Algorithms in Control Plane
↗ [Routing Algorithms Basics](Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection)/📌%20Routing%20Algorithms%20Basics/Routing%20Algorithms%20Basics.md)

↗ [Dynamic Routing Protocols (Unicast，单播)](Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection)/Dynamic%20Routing%20Protocols%20(Unicast，单播)/Dynamic%20Routing%20Protocols%20(Unicast，单播).md)
↗ [IP Multicasting (Group Communication)（多播，组播）](Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection)/IP%20Multicasting%20(Group%20Communication)（多播，组播）/IP%20Multicasting%20(Group%20Communication)（多播，组播）.md)



## Network Management in Control Plane
↗ [IP Layer Network Management](IP%20Layer%20Network%20Management/IP%20Layer%20Network%20Management.md)



## Ref

