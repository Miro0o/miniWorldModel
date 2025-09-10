# Distance-Vector (DV) Routing Algorithms

[TOC]



## Res
### Related Topics



## Intro
> DV-like algorithms are used in many routing protocols in practice, including the Internet’s RIP and BGP, ISO IDRP, Novell IPX, and the original ARPAnet.


Whereas the LS algorithm is an algorithm using global information, the **distance-vector (DV) algorithm** is **iterative**, **asynchronous**, and **distributed**. 
- It is **distributed** in that each node receives some information from one or more of its directly attached neighbors, performs a calculation, and then distributes the results of its calculation back to its neighbors. 
- It is **iterative** in that this process continues on until no more information is exchanged between neighbors. (Interestingly, the algorithm is also **self-terminating** -- there is no signal that the computation should stop; it just stops.) 
- The algorithm is **asynchronous** in that it does not require all of the nodes to operate in lockstep with each other.

We’ll see that an asynchronous, iterative, self-terminating, distributed algorithm is much more interesting and fun than a centralized algorithm!



## DV Algorithms
### Bellman-Ford Algorithm
↗ [Bellman-Ford Algorithm](../../../../../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Graphs%20(and%20Trees)%20Problems/Shortest%20Path%20Problem/Single-Source%20Shortest%20Path%20(SSSP)/Bellman-Ford%20Algorithm.md)



## DV Maintainance
### Distance-Vector Algorithm: Link-Cost Changes and Link Failure



### Distance-Vector Algorithm: Adding Poisoned Reverse
The specific looping scenario just described can be avoided using a technique known as poisoned reverse. The idea is simple—if z routes through y to get to destination x, then z will advertise to y that its distance to x is infinity, that is, z will advertise to y that Dz(x) = ! (even though z knows Dz(x) = 5 in truth). z will continue telling this little white lie to y as long as it routes to x via y. Since y believes that z has no path to x, y will never attempt to route to x via z, as long as z continues to route to x via y (and lies about doing so).

Let’s now see how poisoned reverse solves the particular looping problem we encountered before in Figure 5.5(b). As a result of the poisoned reverse, y’s distance table indicates Dz(x) = ∞. When the cost of the (x, y) link changes from 4 to 60 at time t0, y updates its table and continues to route directly to x, albeit at a higher cost of 60, and informs z of its new cost to x, that is, Dy(x) = 60. After receiving the update at t1, z immediately shifts its route to x to be via the direct (z, x) link at a cost of 50. Since this is a new least-cost path to x, and since the path no longer passes through y, z now informs y that Dz(x) = 50 at t2. After receiving the update from z, y updates its distance table with Dy(x) = 51. Also, since z is now on y’s least- cost path to x, y poisons the reverse path from z to x by informing z at time t3 that Dy(x) = ! (even though y knows that Dy(x) = 51 in truth).

Does poisoned reverse solve the general count-to-infinity problem? It does not. You should convince yourself that loops involving three or more nodes (rather than simply two immediately neighboring nodes) will not be detected by the poisoned reverse technique.


## Ref

