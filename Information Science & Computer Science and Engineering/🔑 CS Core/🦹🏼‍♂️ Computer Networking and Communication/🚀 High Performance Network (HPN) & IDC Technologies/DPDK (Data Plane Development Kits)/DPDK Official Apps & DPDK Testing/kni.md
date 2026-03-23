# kni

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
🔗 http://t.csdnimg.cn/xOea7

Kni(Kernel NIC Interface)内核网卡接口，是DPDK允许用户态和内核态交换报文的解决方案，模拟了一个虚拟的网口，提供dpdk的应用程序和linux内核之间通讯。kni接口允许报文从用户态接收后转发到linu协议栈去。 为什么要弄一个kni接口，虽然dpdk的高速转发性能很出色，但是也有自己的一些缺点，比如没有协议栈就是其中一项缺陷，当然也可能当时设计时就将没有将协议栈考虑进去，毕竟协议栈需要将报文转发处理，可能会使处理报文的能力大大降低。
当kni向linux发送报文时通过调用netif_rx()将报文送入linux协议栈，这其中需要将dpdk的mbuf转换成skb_buf。
当linux向kni端口发送报文时，调用回调函数kni_net_tx()，然后报文经过转换之后发送到端口上。

kni优势
1. 相较现存的Linux TUN/TAP接口更快的速度（消除了系统调用以及`copy_to_user()`/`copy_from_user()`内存拷贝的消耗）
2. 允许标准Linux网络工具管理DPDK接口，`如ethtool`, `ifconfig` 和 `tcpdump`
3. 提供到内核协议栈接口

---
🔗 http://t.csdnimg.cn/1WeKh

内核NIC接口（KNI）是一个英特尔®DPDK控制面板解决方案，允许用户空间的应用程序与内核协议栈交换数据包。为了现实这一点，英特尔®DPDK用户空间应用程序使用IOCTL在linux内核上创建一个KNI虚拟设配。IOCTL调用提供接口信息和物理地址空间，地址空间被KII内核加载模块再次映射到内核地址空间，地址空间保存信息到虚拟设备的上下文中。英特尔®DPDK为每一个已分配的设备穿件FIFO队列让数据包进出内核模块。

这个KNI可加载内核模块是一个标准的网络驱动，它能接收从IOCTL调用英特尔®DPDK访问FIFO队列接收/转发来自英特尔®DPDK用户空间应用程序的数据包。在英特尔®DPDK中FIFO队列包含指向数据包的指针。

1）提供一个更快的机制去和内核网络协议栈、系统调用评估交互。

2）有处于英特尔®DPDK使用标准的网络工具。

内核NIC接口是一个简单的应用程序例子，为了说明使用英特尔®DPDK去创建一个路径使数据包通过LINUX 内核。通过为每一个英特尔®DPDK端口创建一个或多个内核网络设配来完成。这个应用程序允许使用标准的linux工具(如ethtool、ifconfig、tcpdump)、英特尔®DPDK共同使用。同时在linux内核和英特尔®DPDK应用程序之间交换数据包。



## Ref
[dpdk之kni使用 | CSDN]: http://t.csdnimg.cn/xOea7
