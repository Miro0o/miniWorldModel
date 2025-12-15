# Routing Processors (Routing)

[TOC]



## Res
### Related Topics



## Intro
The routing processor performs **control-plane functions**. 
- In traditional routers, it executes the routing protocols (which we’ll study in Sections 5.3 and 5.4), maintains routing tables and attached link state information, and computes the forwarding table for the router.
- In SDN routers, the routing processor is responsible for communicating with the remote controller in order to (among other activities) receive forwarding table entries computed by the remote controller, and install these entries in the router’s input ports. 

The routing processor also performs the **network management functions** that we’ll study in Section 5.7.


## Ref

