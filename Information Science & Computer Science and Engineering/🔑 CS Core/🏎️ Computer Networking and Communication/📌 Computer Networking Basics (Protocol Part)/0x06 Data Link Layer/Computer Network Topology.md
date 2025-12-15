# Computer Network Topology

[TOC]



## Res
### Related Topics
↗ [Overlay Network](../../Network%20Virtualization%20(NV)/Overlay%20Network.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Network_topology#References


Common layouts are:
- [Bus network](https://en.wikipedia.org/wiki/Bus_network "Bus network"): all nodes are connected to a common medium along this medium.
	- This was the layout used in the original [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet"), called [10BASE5](https://en.wikipedia.org/wiki/10BASE5 "10BASE5") and [10BASE2](https://en.wikipedia.org/wiki/10BASE2 "10BASE2"). 
	- This is still a common topology on the [data link layer](https://en.wikipedia.org/wiki/Data_link_layer "Data link layer"), 
	- although modern [physical layer](https://en.wikipedia.org/wiki/Physical_layer "Physical layer") variants use [point-to-point](https://en.wikipedia.org/wiki/Point-to-point_(telecommunications) "Point-to-point (telecommunications)") links instead, forming a star or a tree.
- [Star network](https://en.wikipedia.org/wiki/Star_network "Star network"): all nodes are connected to a special central node.
	- This is the typical layout found in a small [switched Ethernet](https://en.wikipedia.org/wiki/Switched_Ethernet "Switched Ethernet") LAN, where each client connects to a central network switch
	- and logically in a [wireless LAN](https://en.wikipedia.org/wiki/Wireless_LAN "Wireless LAN"), where each wireless client associates with the central [wireless access point](https://en.wikipedia.org/wiki/Wireless_access_point "Wireless access point").
- [Ring network](https://en.wikipedia.org/wiki/Ring_network "Ring network"): each node is connected to its left and right neighbor node, such that all nodes are connected and that each node can reach each other node by traversing nodes left or rightwards.
	- [Token ring](https://en.wikipedia.org/wiki/Token_ring "Token ring") networks, and 
	- the [Fiber Distributed Data Interface](https://en.wikipedia.org/wiki/Fiber_Distributed_Data_Interface "Fiber Distributed Data Interface") (FDDI), made use of such a topology.
- [Mesh network](https://en.wikipedia.org/wiki/Mesh_network "Mesh network"): each node is connected to an arbitrary number of neighbors in such a way that there is at least one traversal from any node to any other.
- [Fully connected network](https://en.wikipedia.org/wiki/Fully_connected_network "Fully connected network"): each node is connected to every other node in the network.
- [Tree network](https://en.wikipedia.org/wiki/Tree_network "Tree network"): nodes are arranged hierarchically. This is the natural topology for a larger Ethernet network with multiple switches and without redundant meshing.

Bus network
Grid network
Mesh network
Point-to-point 
Ring network 
Arbitrated loop 
Star network 
Switched fabric 
Tree network 
Fat tree 
Hypertree
Topology of the World Wide Web



## Ref
