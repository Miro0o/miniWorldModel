# Linux TUN (network TUNnel)

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Linux Network](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🎠%20Linux%20Network/Linux%20Network.md)
↗ [Linux TAP (network TAP)](../Virtual%20Link%20Layer/Linux%20TAP%20(network%20TAP).md)
↗ [VPN & NAT Implementations](../../../../../CyberSecurity/Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/VPN%20&%20NAT%20Implementations/VPN%20&%20NAT%20Implementations.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/TUN/TAP

In computer networking, TUN and TAP are kernel virtual network devices. Being network devices supported entirely in software, they differ from ordinary network devices which are backed by physical network adapters.
The Universal TUN/TAP Driver originated in 2000 as a merger of the corresponding drivers in Solaris, Linux and BSD. The driver continues to be maintained as part of the Linux and FreeBSD kernels.

Though both are for tunneling purposes, TUN and TAP can't be used together because they transmit and receive packets at different layers of the network stack. TUN, namely network TUNnel, simulates a network layer device and operates in layer 3 carrying IP packets. TAP, namely network TAP, simulates a link layer device and operates in layer 2 carrying Ethernet frames. TUN is used with routing. TAP can be used to create a user space network bridge.

Packets sent by an operating system via a TUN/TAP device are delivered to a user space program which attaches itself to the device. A user space program may also pass packets into a TUN/TAP device. In this case the TUN/TAP device delivers (or "injects") these packets to the operating-system network stack thus emulating their reception from an external source

![|450](../../../../../../Assets/Pics/Pasted%20image%2020240424215254.png)

![](../../../../../../../Assets/Pics/Pasted%20image%2020240427103356.png)
<small>https://heitaoq66.github.io/2020/03/19/openstack学习-网络管理/</small>



## Ref
