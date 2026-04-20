# Networking ACL

[TOC]



## Res
### Related Topics
↗ [Authentication Model/ACL](../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/📌%20Access%20Control%20Models/DAC%20(Discretionary%20Access%20Control)/ACL%20(Access%20Control%20List)%20Based%20DAC%20Models/ACL%20(Access%20Control%20List).md)


### Other Resources
【ACL技术-1-访问控制列表（基本原理）】 https://www.bilibili.com/video/BV1zy4y1t7Fj/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【ACL技术-2-基本ACL实验（配合telnet）】 https://www.bilibili.com/video/BV1cB4y1N7kL/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【ACL技术-3-高级ACL实验（配合telnet）】 https://www.bilibili.com/video/BV1DV411n7WH/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
A network access control list (ACL) is made up of rules that either allow access to a computer environment or deny it. In a way, an ACL is like a guest list at an exclusive club. Only those on the list are allowed in the doors. This enables administrators to ensure that, unless the proper credentials are presented by the device, it cannot gain access. 

There are two basic kinds of ACLs:
1. **Filesystem ACLs**: These work as filters, managing access to directories or files. A filesystem ACL gives the operating system instructions as to the users that are allowed to access the system, as well as the privileges they are entitled to once they are inside.
2. **Networking ACLs**: Networking ACLs manage access to a network. To do this, they provide instructions to switches and routers as to the kinds of traffic that are allowed to interface with the network. They also dictate what each user or device can do once they are inside.

When ACLs were first conceived, they worked like [firewalls](https://www.fortinet.com/resources/cyberglossary/how-does-a-firewall-work), blocking access to unwanted entities. While many firewalls have network access control functions, some organizations still use ACLs with technologies such as [virtual private networks (VPNs)](https://www.fortinet.com/resources/cyberglossary/what-is-a-vpn). In this way, an administrator can dictate which kinds of traffic get encrypted and then sent through the secure tunnel of the VPN.



## Ref
[What Is a Network Access Control List?]: https://www.fortinet.com/resources/cyberglossary/network-access-control-list
[华为网络设备上的常用安全技术（一）：ACL]: https://blog.51cto.com/1184394769/822574
[访问控制技术]: https://www.cnblogs.com/SingleCat/p/13554038.html
[安全策略]: https://blog.csdn.net/qq_38668258/article/details/88126831
[ACL（访问控制列表）基础篇-超有趣学网络 - 叶焕新的文章 - 知乎]: https://zhuanlan.zhihu.com/p/39191464

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA
![](../../../../../../../Assets/Pics/Pasted%20image%2020250316222855.png)