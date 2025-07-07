# GRE (Generic Routing Encapsulation)

[TOC]



## Res
### Related Topics



## Intro
Generic Routing Encapsulation, or GRE, is a protocol for encapsulating data packets that use one [routing](https://www.cloudflare.com/learning/network-layer/what-is-routing/) protocol inside the packets of another protocol. "Encapsulating" means wrapping one data packet within another data packet, like putting a box inside another box. GRE is one way to set up a direct point-to-point connection across a network, for the purpose of simplifying connections between separate networks. It works with a variety of [network layer](https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/) protocols.

- **GRE enables the usage of protocols that are not normally supported by a network**, because the packets are wrapped within other packets that do use supported protocols. To understand how this works, think about the difference between a car and a ferry. A car travels over roads on land, while a ferry travels over water. A car cannot normally travel on water — however, a car can be loaded onto a ferry in order to do so. In this analogy, the type of terrain is like the network that supports certain routing protocols, and the vehicles are like data packets. 
- **GRE is a way to load one type of packet within another type of packet so that the first packet can cross a network it could not normally cross**, just as one type of vehicle (the car) is loaded onto another type of vehicle (the ferry) to cross terrain that it otherwise could not. 
	- For instance, suppose a company needs to set up a connection between the [local area networks (LANs)](https://www.cloudflare.com/learning/network-layer/what-is-a-lan/) in their two different offices. Both LANs use the latest version of the [Internet Protocol](https://www.cloudflare.com/learning/network-layer/internet-protocol/), IPv6. But in order to get from one office network to another, traffic must pass through a network managed by a third party — which is somewhat outdated and only supports the older IPv4 protocol.
	- With GRE, the company could send traffic through this network by encapsulating IPv6 packets within IPv4 packets. Referring back to the analogy, the IPv6 packets are the car, the IPv4 packets are the ferry, and the third-party network is the water.



## Ref
[👍 What is GRE tunneling? - How GRE protocol works | Cloudflare]: https://www.cloudflare.com/learning/network-layer/what-is-gre-tunneling/

1. What is GRE?
2. What does GRE tunneling mean?
3. What goes in a GRE header?
4. How does the use of GRE impact MTU and MSS requirements?
5. How is GRE used in DDoS attacks?
6. How does Cloudflare protect against GRE DDoS attacks?
7. How does Cloudflare use GRE tunneling?

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA

![](../../../../../../../Assets/Pics/Pasted%20image%2020240510151215.png)