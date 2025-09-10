# Routing Algorithms Basics

[TOC]



## Res
### Related Topics



## Intro
### Routing Algorithms Foundation -- Graph Theory
Graph, edges, nodes, neighbors, path, least-cost path, shortest path, ...

↗ [Graph Theory](../../../../../../../🧮%20Mathematics/Graph%20Theory/Graph%20Theory.md)


### Routing Algorithms Taxonomy 
#### 👉 Centralized & Decentralized Routing Algorithms
##### 1️⃣ The Link-State (LS) Routing Algorithm
 A **centralized routing algorithm** computes the least-cost path between a source and destination using **complete, global knowledge** about the network. That is, the algorithm takes the connectivity between all nodes and all link costs as inputs. This then requires that the algorithm somehow obtain this information before actually performing the calculation. The calculation itself can be run at one site (e.g., a logically centralized controller as in Figure 5.2) or could be replicated in the routing component of each and every router (e.g., as in Figure 5.1). ==The key distinguishing feature here, however, is that the algorithm has **complete information** about connectivity and link costs.== Algorithms with global state information are often referred to as **link-state (LS) algorithms**, since the algorithm must be aware of the cost of each link in the network. 

↗ [Link-State (LS) Routing Algorithms](Link-State%20(LS)%20Routing%20Algorithms/Link-State%20(LS)%20Routing%20Algorithms.md)


##### 2️⃣ The Distance-Vector (DV) Routing Algorithm
In a **decentralized routing algorithm**, the calculation of the least-cost path is carried out in an **iterative, distributed manner** by the routers. No node has complete information about the costs of all network links. Instead, each node begins with only the knowledge of the costs of its own directly attached links. Then, through an iterative process of calculation and exchange of information with its neighboring nodes, a node gradually calculates the least-cost path to a destination or set of destinations. The decentralized routing algorithm we’ll study below in Section 5.2.2 is called a **distance-vector (DV) algorithm**, because each node maintains a vector of estimates of the costs (distances) to all other nodes in the network. Such decentralized algorithms, with **interactive message exchange between neighboring routers** is perhaps more naturally suited to control planes where the routers interact directly with each other, as in Figure 5.1.

↗ [Distance-Vector (DV) Routing Algorithms](Distance-Vector%20(DV)%20Routing%20Algorithms/Distance-Vector%20(DV)%20Routing%20Algorithms.md)


##### 3️⃣ The Path-Vector (PV) Routing Algorithm
↗  [Path-Vector (PV) Routing Algorithms](Path-Vector%20(PV)%20Routing%20Algorithms/Path-Vector%20(PV)%20Routing%20Algorithms.md)


##### 🔥 Distance Vector vs Link State vs Path Vector ?
> 🔗 http://www.bscottrandall.com/3.3.1.html#:~:text=With%20distance%2Dvector%2C%20routers%20shared,which%20I%20can%20gather%20distance

🎯 **Distance vector routing** is so named because it involves two factors: the distance, or metric, of a destination, and the vector, or direction to take to get there. Routing information is only exchanged between directly connected neighbors. This means a router knows from which neighbor a route was learned, but it does not know where that neighbor learned the route; a router can’t see beyond its own neighbors. This aspect of distance vector routing is sometimes referred to as “routing by rumor.” Measures like split horizon and poison reverse are employed to avoid routing loops.

🎯 **Link-state routing**, in contrast, requires that all routers know about the paths reachable by all other routers in the network. Link-state information is flooded throughout the link-state domain (an area in OSPF or IS-IS) to ensure all routers posses a synchronized copy of the area’s link-state database. From this common database, each router constructs its own relative shortest-path tree, with itself as the root, for all known routes.

> There is a great pictorial [here](http://packetlife.net/blog/2008/oct/2/distance-vector-versus-link-state/)

🎯 A **path vector protocol (BGP is the only one)** is in ways an extension of distance-vector routing. With distance-vector, routers shared the distance metric among each other. ==With path-vector, routers share the entire path for each destination. In other words, don’t just send the distance, but send the path from which I can gather distance.== Sending the entire path aids in **loop detection**, for if I see my AS in the path of an advertisement I know that a loop will occur if I install that route in my routing table, so I simply ignore the advertisement. In addition, a path-vector protocol allows policies to be implemented by being able to say go across this particular path. Since the distance-vector protocol had no path knowledge, no policy routing was really available.


#### 👉 Static & Dynamic Routing Algorithms
A second broad way to classify routing algorithms is according to whether they are static or dynamic. 

- In **static routing algorithms**, routes change very slowly over time, often as a result of human intervention (for example, a human manually editing a link costs). 
- **Dynamic routing algorithms** change the routing paths as the network traffic loads or topology change. A dynamic algorithm can be run either periodically or in direct response to topology or link cost changes. While dynamic algorithms are more responsive to network changes, they are also more susceptible to problems such as routing loops and route oscillation.


#### 👉 Load-sensitive & Load-insensitive Routing Algorithms
A third way to classify routing algorithms is according to whether they are load-sensitive or load-insensitive. 
- In a **load-sensitive algorithm**, **link costs vary dynamically to reflect the current level of congestion in the underlying link**. If a high cost is associated with a link that is currently congested, a routing algorithm will tend to choose routes around such a congested link. 
- While early ARPAnet routing algorithms were load-sensitive [McQuillan 1980], a number of difficulties were encountered [Huitema 1998]. Today’s Internet routing algorithms (such as RIP, OSPF, and BGP) are **load-insensitive**, as a **link’s cost does not explicitly reflect its current (or recent past) level of congestion**.



## 🆚 Comparison of LS & DV
The DV and LS algorithms take complementary approaches toward computing routing. 
- In the DV algorithm, each node talks to only its directly connected neighbors, but it provides its neighbors with least-cost estimates from itself to all the nodes (that it knows about) in the network.
- The LS algorithm requires global information. Consequently, when implemented in each and every router, for example, as in Figures 4.2 and 5.1, each node would need to communicate with all other nodes (via broadcast), but it tells them only the costs of its directly connected links. 

Let’s conclude our study of LS and DV algorithms with a quick comparison of some of their attributes. Recall that N is the set of nodes (routers) and E is the set of edges (links).

- **Message complexity**. We have seen that LS requires each node to know the cost of each link in the network. This requires $O(|N| |E|)$ messages to be sent. 
	- Also, whenever a link cost changes, the new link cost must be sent to all nodes. The DV algorithm requires message exchanges between directly connected neighbors at each iteration. We have seen that the time needed for the algorithm to converge can depend on many factors. When link costs change, the DV algorithm will propagate the results of the changed link cost only if the new link cost results in a changed least-cost path for one of the nodes attached to that link.

- **Speed of convergence**. We have seen that our implementation of LS is an $O(|N|^2)$ algorithm requiring $O(|N| |E|))$ messages. The DV algorithm can converge slowly and can have routing loops while the algorithm is converging. DV also suffers from the **count-to-infinity problem.**

- **Robustness**. What can happen if a router fails, misbehaves, or is sabotaged? Under LS, a router could broadcast an incorrect cost for one of its attached links (but no others). A node could also corrupt or drop any packets it received as part of an LS broadcast. But an LS node is computing only its own forwarding tables; other nodes are performing similar calculations for themselves. This means route calculations are somewhat separated under LS, providing a degree of robustness. Under DV, a node can advertise incorrect least-cost paths to any or all destinations. (Indeed, in 1997, a malfunctioning router in a small ISP provided national backbone routers with erroneous routing information. This caused other routers to flood the malfunctioning router with traffic and caused large portions of the Internet to become disconnected for up to several hours [Neumann 1997].) More generally, we note that, at each iteration, a node’s calculation in DV is passed on to its neighbor and then indirectly to its neighbor’s neighbor on the next iteration. In this sense, an incorrect node calculation can be diffused through the entire network under DV.

==In the end, neither algorithm is an obvious winner over the other; indeed, both algorithms are used in the Internet.==



## Ref
[Classes of Routing Protocols | GeeksforGeeks]: https://www.geeksforgeeks.org/multiple-access-protocols-in-computer-network/

[👍 3.3.1 - Distance Vector vs Link State vs Path Vector]: http://www.bscottrandall.com/3.3.1.html#:~:text=With%20distance%2Dvector%2C%20routers%20shared,which%20I%20can%20gather%20distance

