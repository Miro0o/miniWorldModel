# Network Topology Construction

[TOC]



## Res
### Related Topics



## Network Route Tracing
### 👉 Traceroute
Using the **Time To Live** (**TTL**) field in an IP packet, each hop from one point to the next elicits an ICMPTIME_EXCEEDED message from the receiving router, decrementing the value in the TTL field by 1. The packets count the number of hops and the route taken.

> 💡
> Using a web-based *traceroute* (**www.traceroute.org**), it is possible to trace various geographic origin sites to the target network. These types of scans will **frequently identify more than one different network** connecting to the target, which is information that could be missed by conducting only a single `traceroute` command from a location close to the target. Web-based `traceroute` may also **identify multi-homed hosts** that connect two or more networks together. These hosts are an important target for attackers, because they drastically increase the attack surface leading to the target.

> In Kali, `traceroute` is a command-line program that uses ICMP packets to map the route; in Windows, the program is `tracert`.

#### Load balancers
Sometimes using different host traceroute same target host may yeild different printing:  hops filtered (data is shown as * * *) path or complete path. This might indicate that load balancers are in effect.

You can confirm this using Kali's `lbd`script; however, this activity may be logged by the target site.


#### ldb


### 👉 `hping3`
This is a TCP/IP packet assembler and analyzer. This supports TCP, UDP, ICMP, and raw-IP and uses a ping-like interface. 


### 👉 `intrace`
This enables users to enumerate IP hops by exploiting existing TCP connections, both initiated from the local system or network or from local hosts. This makes it very useful for bypassing external filters such as firewalls. intrace is a replacement for the less reliable 0trace program. 


### 👉 `trace6`
This is a traceroute program that uses ICMP6.



### Mapping beyond the firewall
Attackers normally start the network debugging using traceroute utility, which attempts to map all of the hosts on a route to a specific destination host or system. Once the target is reached, as the TTL (Time to Live) field will be 0, the target will discard the datagram and generate an ICMP time exceeded packet back to its originator.

As you see from the preceding example, we cannot go beyond a particular IP, which most probably means that there is a packet filtering device at hop 3. Attackers would dig a little bit deeper to understand what is deployed on that IP.

Deploying the default UDP datagram option, it will increase the port number at every time it sends an UDP datagram. Hence, attackers will start pointing a port number to reach the final target destination.



## Network Topology Analysis



## Ref

