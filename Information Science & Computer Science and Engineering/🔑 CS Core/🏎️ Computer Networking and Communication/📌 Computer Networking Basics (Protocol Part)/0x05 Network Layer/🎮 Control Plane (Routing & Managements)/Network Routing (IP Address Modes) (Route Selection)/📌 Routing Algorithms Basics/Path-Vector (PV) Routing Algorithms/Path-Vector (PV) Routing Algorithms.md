# Path-Vector (PV) Routing Algorithms

[TOC]



## Res
### Related Topics



## Intro
A **path-vector routing protocol** is a network routing protocol which maintains the path information that gets updated dynamically. Updates that have looped through the network and returned to the same node are easily detected and discarded. This algorithm is sometimes used in [Bellman–Ford routing algorithms](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm "Bellman–Ford algorithm") to avoid "Count to Infinity" problems.

It is different from the [distance vector routing](https://en.wikipedia.org/wiki/Distance_vector_routing "Distance vector routing") and [link state routing](https://en.wikipedia.org/wiki/Link_state_routing "Link state routing"). Each entry in the routing table contains the destination network, the next router and the path to reach the destination.

- [Border Gateway Protocol](https://en.wikipedia.org/wiki/Border_Gateway_Protocol "Border Gateway Protocol") (BGP) is an example of a path vector protocol. In BGP, the [autonomous system boundary routers](https://en.wikipedia.org/wiki/Open_Shortest_Path_First#Autonomous_system_boundary_router "Open Shortest Path First") (ASBR) send path-vector messages to advertise the reachability of networks. Each router that receives a path vector message must verify the advertised path according to its policy. If the message complies with its policy, the router modifies its routing table and the message before sending the message to the next neighbor. It modifies the routing table to maintain the [autonomous systems](https://en.wikipedia.org/wiki/Autonomous_system_(Internet) "Autonomous system (Internet)") that are traversed in order to reach the destination system. It modifies the message to add its AS number and to replace the next router entry with its identification.
- [Exterior Gateway Protocol](https://en.wikipedia.org/wiki/Exterior_Gateway_Protocol "Exterior Gateway Protocol") (EGP) does not use path vectors.

It has three phases: 
1. Initiation
2. Sharing
3. Updating


> 📝 
> 
> Of note, BGP is commonly referred to as an External Gateway Protocol (EGP) given its role in connecting Autonomous Systems (AS). 
> 
> Communication protocols within AS are therefore referred to as Internal Gateway Protocols (IGP) which contain OSPF and IS-IS among others.
> 
> This being said, BGP can be used within an AS, which typically occurs within very large organizations such as Facebook or Microsoft.



## Ref
[Path-vector routing protocol | Wikipedia]: https://en.wikipedia.org/wiki/Path-vector_routing_protocol


