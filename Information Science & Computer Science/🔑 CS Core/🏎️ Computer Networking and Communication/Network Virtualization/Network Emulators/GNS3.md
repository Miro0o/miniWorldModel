# GNS3

[TOC]



## Res
🏠 https://www.gns3.com/
🚧 


### Related Topics



## Intro
> 🔗 https://cloud.tencent.com/developer/article/1078164

GNS3由三部分组成，我们平时使用的是GNS3-GUI，这是一个用Python编写的GUI界面，通过这个界面我们定义网络拓扑、各种要模拟的网络元素（网元）。
![](../../../../../Assets/Pics/Pasted%20image%2020240625233853.png)

GNS3中模拟网元分为两类，一类是IOU（IOS on Unix）组成的传统网元；一类是通过虚拟机+镜像创建的“虚拟机网元”。前者主要用来模拟Cisco的二层、三层交换机；后者主要用来模拟一些基于x86的网元，比如Citrix NetScaler、F5 BIG-IP、甚至Cisco的NX-OSv 9000，我们要模拟的OVS也属于这类。



## Ref
[👍 OVN实战一之GNS3操作指南及OVN入门 | 腾讯云文档]: https://cloud.tencent.com/developer/article/1078164

GNS3是一个专业的网络模拟器，可以用它来模拟交换机、路由器、防火墙等网络设备。它的功能非常强大，基于它能搭建一个近似于 “真实”的模拟环境。

Wireshark是一个跨平台的网络数据包分析工具，和tcpdump比较它提供了一个友好的GUI界面。GNS3中已经对它进行了集成（安装GNS3的时候自动安装），可以通过GNS3界面直接对网络拓扑中的某条链路抓包分析。
