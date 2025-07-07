# Network Bridge

[TOC]



## Res
### Related Topics
↗ [Linux Bridge](../../../../Network%20Virtualization/📌%20NV%20Implementations/Virtual%20Link%20Layer/Linux%20Bridge.md)



## Intro
简单的说网桥就是个硬件网络协议翻译器，假设你有2台电脑，一台兼容机安装windows，一台是Apple安装OS2，那么两台电脑之间是默认网络协议是不同的，兼容机可能只会说TCP/IP，苹果机只会说Apple talk，就好象两个外国人都不会说对方的语言，怎么办？找个翻译，网桥就是翻译。

在386、486时代网桥可能是一台安装了协议转换程序的电脑，如今交换机也包含这个功能。今天的操作系统之间为了互相交流，支持更多的协议，操作系统自己就可以是网桥，现在网桥这个概念已经淡出了。更多是所谓的桥接、转发、协议二次封装。

网桥也可以说相当一个端口少的二层交换机，再者网桥主要由软件实现，交换机主要由硬件实现！

---
**Bridge** – A bridge operates at the **data link layer**. A bridge is a repeater, with add on the functionality of **filtering content** by reading the MAC addresses of the source and destination. It is also used for interconnecting two LANs working on the same protocol. It has a single input and single output port, thus making it a **2 port device**.

**Types of Bridges** 
- **Transparent Bridges:** These are the bridge in which the stations are completely unaware of the bridge’s existence i.e. whether or not a bridge is added or deleted from the network, reconfiguration of the stations is unnecessary. These bridges make use of two processes i.e. bridge forwarding and bridge learning.
- **Source Routing Bridges:** In these bridges, routing operation is performed by the source station and the frame specifies which route to follow. The host can discover the frame by sending a special frame called the discovery frame, which spreads through the entire network using all possible paths to the destination.



## Ref

