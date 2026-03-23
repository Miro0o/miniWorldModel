# Linux Network Virtualization

[TOC]



## Res
### Related Topics
↗ [IO & Network Virtualization](../../../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/IO%20&%20Network%20Virtualization.md)



## Linux Network Virtualization Brief Introduction
### Linux NIC Virtualization Technologies
> 🔗 https://heitaoq66.github.io/2020/03/19/openstack学习-网络管理/

↗ [Linux TUN (network TUNnel)](../../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Network%20Layer/Linux%20TUN%20(network%20TUNnel).md)
↗ [Linux TAP (network TAP)](../../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Link%20Layer/Linux%20TAP%20(network%20TAP).md)

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020240427103356.png)
<small>https://heitaoq66.github.io/2020/03/19/openstack学习-网络管理/</small>

TAP设备：模拟一个二层的网络设备，可以接收和发送二层网络数据包  
TUN设备：模拟一个三层的网络设备，可以接收和发送三层网络数据包  
VETH:虚拟ethernet接口，通常以pair的方式出现，一端发出的网络数据包会被另一端接收，可以形成两个网桥之间的通道

TAP/TUN提供了一台主机内用户空间的数据传输机制，它虚拟机了一套网络接口，这套接口和物理的接口无任何区别，可以配置IP，可以路由流量，不同的是它流量只在主机内流通

veth-pari，是成对出现的网络设备，一端连接协议栈，一端连接彼此，数据从一端出，一端进。它的特性常常用来连接不同的虚拟网络组件，构建大规模的虚拟网络拓扑，比如连接linux bridge，ovs等，用于neutron，可以构建非常复杂的网络形态。


### Linux Switch Virtualization Technologies
↗ [Linux Bridge](../../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Link%20Layer/Linux%20Bridge.md)
↗ [Linux network-namespace](../../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Network%20Layer/Virtual%20Network%20(vNetwork)/Linux%20network-namespace.md)
↗ [OVS (Open vSwitch)](../../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Link%20Layer/Virtual%20Switch%20(vSwitch)/OVS%20(Open%20vSwitch).md)



## Ref
[👍 openstack学习-网络管理(转)]: https://heitaoq66.github.io/2020/03/19/openstack学习-网络管理/
