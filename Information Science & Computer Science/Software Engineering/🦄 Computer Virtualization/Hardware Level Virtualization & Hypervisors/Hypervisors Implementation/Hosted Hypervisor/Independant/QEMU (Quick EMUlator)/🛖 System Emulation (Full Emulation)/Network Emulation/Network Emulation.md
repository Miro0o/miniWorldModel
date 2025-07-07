# Network Emulation

[TOC]



## Res
📂 https://www.qemu.org/docs/master/system/devices/net.html



## Intro



## Ref
[Qemu虚拟机与宿主机之间文件传输]: http://pwn4.fun/2020/05/27/Qemu虚拟机与宿主机之间文件传输/

宿主机要通过ssh访问虚拟机有两种网络配置方式，一种是用户模式网络，另一种是网桥网络模式。

[Ubuntu下SSH登录Qemu虚拟机]: http://pwn4.fun/2019/05/31/Ubuntu下SSH登录Qemu虚拟机/

[Set up a Mac for Qemu with Bridged Network]: https://upstreamwithoutapaddle.com/home-lab/bare-metal-bootstrap/

[在 macos 创建 QEMU 桥接网络]: https://taoshu.in/unix/qemu-bridge-on-macos.html

[👍 kvm的4中网络模型（qemu-kvm）]: https://www.cnblogs.com/wyzhou/p/9630660.html

1. 隔离模式（类似vmare中仅主机模式）：虚拟机之间组建网络，该模式无法与宿主机通信，无法与其他网络通信，相当于虚拟机只是连接到一台交换机上，所有的虚拟机能够相互通信。  
2. 路由模式：相当于虚拟机连接到一台路由器上，由路由器(物理网卡)，统一转发，但是不会改变源地址。  
3. NAT模式（类似vmare中的NAT模式）：在路由模式中，会出现虚拟机可以访问其他主机，但是其他主机的报文无法到达虚拟机，而NAT模式则将源地址转换为路由器(物理网卡)地址，这样其他主机也知道报文来自那个主机，在docker环境中经常被使用。  
4. 桥接模式（类似vmare中的bridge桥接模式）：在宿主机中创建一张虚拟网卡作为宿主机的网卡，而物理网卡则作为交换机。

[QEMU网络操作相关说明及常用命令]: https://github.com/QthCN/opsguide_book/blob/master/QEMU网络操作相关说明及常用命令.md

EMU提供了4种网络模式（除了第四种，其它都是通过-net参数配置的。默认的参数是-net nic -net user）：
- 基于brige
- 基于NAT
- QEMU内置的用户模式网络
- 直接分配网络设备的网络

[QEMU 网络配置一把梭]: https://wzt.ac.cn/2021/05/28/QEMU-networking/

QEMU 提供 4 种网络通信方法，它们分别是：
1. User mode stack：用户协议栈方式，这种方式的大概原理是在 QEMU 进程中实现一个协议栈，这个协议栈可以被视为一个主机与虚拟机之间的 NAT 服务器，它负责将 QEMU 所模拟的系统网络请求转发到外部网卡上面，从而实现网络通信。但是不能将外面的请求转发到虚拟机内部，并且虚拟机 VLAN 中的每个接口必须放在 10.0.2.0 子网中。
2. socket： 为 VLAN 创建套接字，并把多个 VLAN 连接起来。
3. TAP/bridge：最重要的一种通信方式，我们想要实现 QEMU 虚拟机和外部通信就需要使用这种方式。
4. VDE：也是用于连接 VLAN 的，如果没有 VLAN 连接需求基本用不到。

[👍 QEMU虚拟机网络模拟]: https://www.owalle.com/2019/12/26/network-in-vm/

QEMU可以模拟多种网卡设备(例如PCI或者ISA设备)，同时可将这些虚拟网卡与host上的虚拟网络设备(或者虚拟的hub)连接起来。各种不同类型的网络设备既可以为虚拟机提供真实的网络访问(例如TAP、SLiRP user模式)，也可以是同一个host上面的不同虚拟机之间的访问(Socket)。  
常见的网络设备实现有4种：
1. User模式: `-net user` (如果没有指定`-net xx`这是默认配置)。
2. TAP(Terminal Access Point): 这是QEMU推荐的虚拟机联网的虚拟网络设备的后端实现。可以认为虚拟网卡直接与其相连。TAP接口的行为应该与真实的网络设备一样，一旦将TAP绑定到“网桥”(bridge)上之后，他们就可以网络通信了。
3. Hubs: hub实现将多个网络设备连接起来，比如QEMU的虚拟网卡(TAP设备)，将虚拟机中的多个网卡相连，或者host的网络设备通过参数`-netdev hubport`或者`-nic hubport`相连。
4. Socket: 通过参数`-netdev socket` (或`-nic socket`或`-net socket`) 可以实现多个虚拟机之间的互联。

[👍 QEMU 网络配置]: https://tomwei7.com/2021/10/09/qemu-network-config/

QEMU 的网络由两个部分组成:
- 提供给虚拟机的虚拟网卡（virtual network device）比如经典的 e1000,rtl8139 以及 virtio-net-pci 等，是虚拟机内部看到的设备
- 与虚拟网卡交互的后端（network backend）虚拟机往虚拟网卡写入的数据都会由 network backend 流出到真实的网络环境中

[QEMU中的网络虚拟化配置 | CSDN]: https://blog.csdn.net/rikeyone/article/details/106767540

qemu对于网络的[虚拟化](https://so.csdn.net/so/search?q=%E8%99%9A%E6%8B%9F%E5%8C%96&spm=1001.2101.3001.7020)需要两个命令行参数来指定，其中一个用于指定网络的前端驱动，也就是客户机中的实现，另一个用于指定网络的后端实现，也就是在宿主机中的实现。
