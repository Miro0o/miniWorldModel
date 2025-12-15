# FAQ

[TOC]



## 👉 Network, Computer Networks, internet, the Internet, Web, and WWW?
#network #Web #www #Internet

**Network**: vertexes + edges / Links + Nodes + (Switches)
**Computer Networks**: end hosts + link media
**internet**: networks of networks / a general term referring to a computer network that is interconnected (seen as a single network that is interconnected)

**Internet**: an instance of internet (inter-connected computer networks) providing services (Web services, in most cases)
**WWW = Web**: a service of computer networks providing content to every connected end host

| internet     | VS | Internet |
| :--: | :--: | :--: |
| General Term |      | Exclusive Term |
| 互联网 |      | 因特网 |
| Any Protocols |      | TCP/IP |

> **Tim Berners-Lee** proposed the architecture of what became known as the **World Wide Web**. He created the first web [server](https://developer.mozilla.org/en-US/docs/Glossary/Server), web [browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser), and webpage on his computer at the CERN physics research lab in 1990. In 1991, he announced his creation on the alt.hypertext newsgroup, marking the moment the Web was first made public.
> 
> The system we know today as "the Web" consists of several components:
> - The **[HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)** protocol governs data transfer between a server and a client.
> - To access a Web component, a client supplies a unique universal identifier, called a **[URL](https://developer.mozilla.org/en-US/docs/Glossary/URL)**(uniform resource locator) or [URI](https://developer.mozilla.org/en-US/docs/Glossary/URI) (uniform resource identifier) (formally called Universal Document Identifier (UDI)).
> - **[HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML)** (hypertext markup language) is the most common format for publishing web documents.


![](../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.25.41%20AM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.25.57%20AM.png)


[World Wide Web]: https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web



## 👉 pipelining, parallelism, concurrency in HTTP Connection Management
#pipelining #parallelism #concurrency #http

> ↗ [HTTP Connection Management](0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/📌%20HTTP%20Basics/HTTP%20Connection%20Management.md)

> **TL;DR**
> 
> - **并发**：由于有限的资源限制，在某一划定的时间段内（一个时刻，一个处理周期，任意其他规定的时段）资源的请求大于可用资源，这时就需要某种策略来协调这种供小于求的情况，使得在约定的条件内达到最优解。这通常意味着在最短时间内满足最多的资源请求。
> - **并行计算**：对一个已知的任务，通过某种划分策略，使得这个任务被划分为多个可以同时处理的子任务，从而达到对该任务处理性能的提高。处理性能可以是任何规定的指标，不过通常是处理效率，即速度/成本。
> - **流水线技术/pipelining**: 一种简单的并行计算中的划分策略。
> 
> **concurrency**: multiple tasks request concur at the same time
> 
> **pipelining**: a kind of mechanism to accelerate processing speed via enabling parallel computing without losing task sequential dependency. 
> 
> **parallelism**: pipelining is a (rudimentary though) method to achieve parallelism, i.e concurrently processing a sequential task by dividing it into parallel tasks without changing the ultimate outcome thus achieving parallel computing and improving processing speed.


### HTTP Pipelining
**HTTP pipelining** is a feature of **HTTP/1.1** that allows ==multiple HTTP requests to be sent over a single TCP connection== without waiting for the corresponding responses


![](../../../../Assets/Pics/Pasted%20image%2020230402134909.png)

![](../../../../Assets/Pics/Pasted%20image%2020230402134420.png)


[Connection management in HTTP/1.x | MDN Docs]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x

[HTTP pipelining | Wikipedia]: https://en.wikipedia.org/wiki/HTTP_pipelining

[pipelining | TechTarget]: https://www.techtarget.com/whatis/definition/pipelining

> Pipelining is the process of storing and prioritizing computer instructions that the processor executes. The pipeline is a "logical pipeline" that lets the processor perform a single instruction in multiple steps. The processing happens in a continuous, orderly, somewhat overlapped manner.


### HTTP Parallel Connection
```xml
 BrowserVersion | ConnectionsPerHostname | MaxConnections
----------------------------------------------------------
 Chrome34/32    | 6                      | 10
 IE9            | 6                      | 35
 IE10           | 8                      | 17
 IE11           | 13                     | 17
 Firefox27/26   | 6                      | 17
 Safari7.0.1    | 6                      | 17
 Android4       | 6                      | 17
 ChromeMobile18 | 6                      | 16
 IE Mobile9     | 6                      | 60
```

The first value is **_ConnectionsPerHostname_** and the second value is **_MaxConnections_**.

Source: [http://www.browserscope.org/?category=network&v=top](http://www.browserscope.org/?category=network&v=top)

Note: **_ConnectionsPerHostname_** is the maximum number of concurrent http requests that browsers will make to the same domain. To increase the number of concurrent connections, one can host resources (e.g. images) in different domains. However, you cannot exceed **_MaxConnections_**, the maximum number of connections a browser will open in total - across all domains. 

**2020 Update**;
Number of parallel connections per browser:
```xml
| Browser              | Connections per Domain         | Max Connections                |
| -------------------- | ------------------------------ | ------------------------------ |
| Chrome 81            | 6 [^note1]                     | 256[^note2]                    |
| Edge 18              | *same as Internet Explorer 11* | *same as Internet Explorer 11* |
| Firefox 68           | 9 [^note1] or 6 [^note3]       | 1000+[^note2]                  |
| Internet Explorer 11 | 12 [^note4]                    | 1000+[^note2]                  |
| Safari 13            | 6 [^note1]                     | 1000+[^note2]                  |
```

- [^note1]: tested with 72 requests, 1 domain(127.0.0.1)
- [^note2]: tested with 1002 requests, 6 requests per domain * 167 domains (127.0.0.*)
- [^note3]: when called in async context, e.g. in the callback of `setTimeout`, + `requestAnimationFrame`, `then`...
- [^note4]: of which the last 6 are follow-ups (2,4,6 available at 0.5s,1s,1.5s respectively)


[parallel HTTP connections in a browser?]: https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser

[What are Max parallel HTTP connections in a browser]: https://www.tutorialspoint.com/what-are-max-parallel-http-connections-in-a-browser


### Network Concurrency
skip.



## 👉 Why using IP address since there is MAC address? Does IPv6 make MAC address unneeded?
#IP #MAC 

1. MAC is globally unique & unchangeable, while IP is dynamic & temporally assigned to host. These static/dynamic permanent/temporary dual addressing system is efficient in many engineering perspective, i.e. it provides good balance among many other concerns including speed.
	1. IP layer is slower than MAC; thus IP layer is only needed when necessary. 
		1. MAC forwarding happens at layer 2 (data link layer), which is done by dedicated communication processor.
		2. IP forwarding happens at layer 3 (network layer), which is done by slower dedicated chip or CPU (much slower)
	2. MAC network configure & topology are static, which is inconvenient.
		1. IP layer allows network dynamically changing, which makes network management very effective.
			1. Longest prefix matching is used in ip forwarding/congregation. If using fixed MAC address or fixed IP (in case of globally unique IPv6 address), network configuration can hardly change, thus loses mobility. (end host leave old network & join new network)
		2. IP layer prevents "broadcast storm" & circular routing problem. 
	3. **Historical reasons**. The whole idea of "TCP/IP" protocol suites along with the Internet didn’t come up at its birth. Instead, it developed from a very small network which is inherently by design lack of scalability, many functions & considerations, large-scale architectural design, etc.. As the small network grows into todays enormous Internet, more and more protocols & architecture designs are attached on the existing architecture and thus the snow ball grows into what Internet looks today. _(below description is only for clearer & more intuitive elaboration, may not be historically correct)_
		1. At first there are only LAN at layer 2 level, each every network communicates within themselves only via MAC addressing. 
		2. As the network grows, many heterogeneous layer 2 network (which communicates within themselves through MAC ONLY) emerged and there is a need to inter-connect all these heterogeneous network (thus formed the Internet), so there is IP layer. This is called **IP over XXX**. Foe e.g. IP over Ethernet, IP over ATM, etc. Recall ↗ [0x05 Network Layer](0x05%20Network%20Layer/0x05%20Network%20Layer.md#The%20IP%20Hourglass). 
		3. As the network grows, the small network grows into a layering architecture (recall ↗ [OSI-ISO Protocol Suites](0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/Computer%20Network%20Protocol%20Suites%20Standardizations%20&%20Administration/OSI-ISO%20Protocol%20Suites/OSI-ISO%20Protocol%20Suites.md)), which adds more and more engineering features to it such as scalable, dedicated, easy to mange & maintain, etc..

[👍 有了 IP 地址，为什么还要用 MAC 地址？ - 知乎]: https://www.zhihu.com/question/21546408/answer/2115709429



## 👉 Difference between mobile network (or cellular network) and wireless network
#wireless #mobile_network #cellular_network

A **cellular network** or **mobile network** is a communication network where the link to and from end nodes is wireless. A communication host in a cellular network is often moving instead of staying fixed. 

Whereas in a wireless network, it only implies that the access method in the network is wireless, no matter weather the communicating host is moving or not. 



## 👉 IP Insolation | IP 隔离
#IP #network #config 

???


