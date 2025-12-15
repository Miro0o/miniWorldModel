# DPDK Applications & User Scenarios

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Data Plane
> 📎 https://ctimbai.github.io/2018/04/10/tech/net/dpdk/DPDK_入门最佳指南/

### 👉 OVS
Open vSwitch 是一个多核虚拟交换机平台，支持标准的管理接口和开放可扩展的可编程接口，支持第三方的控制接入。
[https://github.com/openvswitch/ovs](https://github.com/openvswitch/ovs)


### 👉 VPP
VPP 是 cisco 开源的一个高性能的包处理框架，提供了 交换/路由 功能，在虚拟化环境中，使它可以当做一个虚拟交换机来使用。在一个类 SDN 的处理框架中，它往往充当数据面的角色。经研究表明，VPP 性能要好于 OVS+DPDK 的组合，但它更适用于 NFV，适合做特定功能的网络模块。
[https://wiki.fd.io/view/VPP](https://wiki.fd.io/view/VPP)


### 👉 Lagopus
Lagopus 是另一个多核虚拟交换的实现，功能和 OVS 差不多，支持多种网络协议，如 Ethernet，VLAN，QinQ，MAC-in-MAC，MPLS 和 PBB，以及隧道协议，如 GRE，VxLan 和 GTP。
[https://github.com/lagopus/lagopus/blob/master/QUICKSTART.md](https://github.com/lagopus/lagopus/blob/master/QUICKSTART.md)


### 👉 Snabb
Snabb 是一个简单且快速的数据包处理工具箱。
[https://github.com/SnabbCo/snabbswitch/blob/master/README.md](https://github.com/SnabbCo/snabbswitch/blob/master/README.md)



## Control Plane
### 👉 OPENCONTRAIL
一个集成了 SDN 控制器的虚拟路由器，现在多用在 OpenStack 中，结合 Neutron 为 OpenStack 提供一站式的网络支持。
[http://www.opencontrail.org/](http://www.opencontrail.org/)


### 👉 CloudRouter
一个分布式的路由器。
[https://cloudrouter.org/](https://cloudrouter.org/)



## User Space Stack
### 👉 mTCP
mTCP 是一个针对多核系统的高可扩展性的用户空间 TCP/IP 协议栈。
[https://github.com/eunyoung14/mtcp/blob/master/README](https://github.com/eunyoung14/mtcp/blob/master/README)


### 👉 IwIP
IwIP 针对 RAM 平台的精简版的 TCP/IP 协议栈实现。
[http://git.savannah.gnu.org/cgit/lwip.git/tree/README](http://git.savannah.gnu.org/cgit/lwip.git/tree/README)


### 👉 Seastar
Seastar 是一个开源的，基于 C++ 11/14 feature，支持高并发和低延迟的异步编程高性能库。
[http://www.seastar-project.org/](http://www.seastar-project.org/)


### 👉 f-stack
腾讯开源的用户空间协议栈，移植于 FreeBSD协议栈，粘合了 POSIX API，上层应用（协程框架，Nginx,Redis），纯 C 编写，易上手。
[https://github.com/f-stack/f-stack](https://github.com/f-stack/f-stack)



## Ref
