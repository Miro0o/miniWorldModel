# Netowrk Application Communication Architectures

[TOC]



## Res
### Related Topics
↗ [Database System Web Services' Architectures](../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DS%20Web%20Services'%20Architectures.md)
↗ [Web Application Systems & Architecture Design](../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20Systems%20&%20Architecture%20Design.md)
↗ [Information Systems & System Architecture Design](../../../../Information%20Systems%20&%20System%20Architecture%20Design/Information%20Systems%20&%20System%20Architecture%20Design.md)
↗ [Web Development & The Internet](../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Development%20&%20The%20Internet.md)


### Learning Resources
【深入浅出计算机网络 - 6.2 客户/服务器方式和对等方式】 https://www.bilibili.com/video/BV1mV4y1T72M/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
Before diving into software coding, you should have a broad architectural plan for your application. Keep in mind that ==an application’s architecture is distinctly different from the network architecture (e.g., the five-layer Internet architecture discussed in Chapter 1).== 
- From the application developer’s perspective, the **network architecture** is fixed and provides a specific set of services to applications.
- The **application architecture**, on the other hand, is designed by the application developer and dictates how the application is structured over the various end systems. In choosing the application architecture, an application developer will likely draw on one of the two predominant architectural paradigms used in modern network applications: the **client-server architecture** or the **peer-to-peer (P2P) architecture**.

![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.26.37%20PM.png)



## 1️⃣ C/S Architecture
> ↗ [Web Development & The Internet](../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Development%20&%20The%20Internet.md)

In a client-server architecture, there is an always-on host, called the **server**, which services requests from many other hosts, called **clients**.

![web_and_Internet_arch.excalidraw | 800](../../../../../Assets/Illustrations/Web/web_and_Internet_arch.excalidraw.md)


### Server Cluster /Data Center
Often in a client-server application, a single-server host is incapable of keeping up with all the requests from clients. For this reason, a **data center**, housing a large number of hosts, is often used to create a powerful virtual server.

> For example, a popular social-networking site can quickly become overwhelmed if it has only one server handling all of its requests. 

The most popular Internet services -- such as search engines (e.g., Google, Bing, Baidu), Internet commerce (e.g., Amazon, eBay, Alibaba), Web-based e-mail (e.g., Gmail and Yahoo Mail), social media (e.g., Facebook, Instagram, Twitter, and WeChat) -- run in one or more data centers.

> Google has 19 data centers distributed around the world, which collectively handle search, YouTube, Gmail, and other services.

A data center can have hundreds of thousands of servers, which must be powered and maintained. Additionally, the service providers must pay recurring interconnection and bandwidth costs for sending data from their data centers.

==The trending is, as the rise of cloud computing, major providers begin transferring buesiness from data center to cloud. ==

↗ [Cloud Computing & Cloud Native](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)



## 2️⃣ P2P Architecture
> ↗ [P2P Channels](../0x06%20Data%20Link%20Layer/Switched%20LAN/〰️%20P2P%20Channels/P2P%20Channels.md)

In a P2P architecture, there is minimal (or no) reliance on dedicated servers in data centers. Instead the application exploits direct communication between pairs of intermittently connected hosts, called **peers**. servers/clients apeer to be peer hosts communicating through a connection might reverse in their roles trough another communication.

### Pros & Cons
- One of the most compelling features of P2P architectures is their **self-scalability**. For example, in a P2P file-sharing application, although each peer generates workload by requesting files, each peer also adds service capacity to the system by distributing files to other peers. 
- P2P architectures are also **cost effective**, since they normally don’t require significant server infrastructure and server bandwidth (in contrast with clients-server designs with datacenters). 
- However, P2P applications face **challenges of security, performance, and reliability** due to their highly decentralized structure.



## Ref

