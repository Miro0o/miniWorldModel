# Keepalived

[TOC]



## Res
🏠 
🚧 
📂 https://keepalived.readthedocs.io/en/latest/introduction.html


### Related Topics
↗ [VRRP (Virtual Router Redundancy Protocol)](../../../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x05%20Network%20Layer/🎮%20Control%20Plane%20(Routing%20&%20Managements)/IP%20Layer%20Network%20Management/VRRP%20(Virtual%20Router%20Redundancy%20Protocol).md)
↗ [Nginx](../../🪇%20Reverse%20Proxy%20Servers/Nginx/Nginx.md)



## Intro
> 🔗 https://keepalived.readthedocs.io/en/latest/introduction.html

Load balancing is a method of distributing IP traffic across a cluster of real servers, providing one or more highly available virtual services. When designing load balanced topologies, it is important to account for the availability of the load balancer itself as well as the real servers behind it.

Keepalived provides frameworks for both load balancing and high availability. The load balancing framework relies on the well-known and widely used Linux Virtual Server (IPVS) kernel module, which provides Layer 4 load balancing. Keepalived implements a set of health checkers to dynamically and adaptively maintain and manage load balanced server pools according to their health. High availability is achieved by the Virtual Redundancy Routing Protocol (VRRP). VRRP is a fundamental brick for router failover. In addition, keepalived implements a set of hooks to the VRRP finite state machine providing low-level and high-speed protocol interactions. Each Keepalived framework can be used independently or together to provide resilient infrastructures.

In this context, load balancer may also be referred to as a _director_ or an _LVS router_.

In short, Keepalived provides two main functions:
- Health checking for LVS systems
- Implementation of the VRRPv2 stack to handle load balancer failover



## Ref
