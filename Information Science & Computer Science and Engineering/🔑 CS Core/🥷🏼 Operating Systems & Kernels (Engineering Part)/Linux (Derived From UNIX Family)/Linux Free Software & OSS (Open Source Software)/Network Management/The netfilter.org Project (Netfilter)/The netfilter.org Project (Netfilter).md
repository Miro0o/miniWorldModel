# The netfilter.org Project (Netfilter)

[TOC]



## Res
🏠 https://www.netfilter.org
🚧 

netfilter.org projects list:
- [ptables](https://www.netfilter.org/projects/iptables/index.html "Homepage of the netfilter.org "iptables" project")  
- [nftables](https://www.netfilter.org/projects/nftables/index.html "Homepage of the netfilter.org "nftables" project")  
- [libnftnl](https://www.netfilter.org/projects/libnftnl/index.html "Homepage of the netfilter.org "libnftnl" project")  
- [libnfnetlink](https://www.netfilter.org/projects/libnfnetlink/index.html "Homepage of the netfilter.org "libnfnetlink" project")  
- [libnetfilter_acct](https://www.netfilter.org/projects/libnetfilter_acct/index.html "Homepage of the netfilter.org "libnetfilter_acct" project")  
- [libnetfilter_log](https://www.netfilter.org/projects/libnetfilter_log/index.html "Homepage of the netfilter.org "libnetfilter_log" project")  
- [libnetfilter_queue](https://www.netfilter.org/projects/libnetfilter_queue/index.html "Homepage of the netfilter.org "libnetfilter_queue" project")  
- [libnetfilter_conntrack](https://www.netfilter.org/projects/libnetfilter_conntrack/index.html "Homepage of the netfilter.org "libnetfilter_conntrack" project")  
- [libnetfilter_cttimeout](https://www.netfilter.org/projects/libnetfilter_cttimeout/index.html "Homepage of the netfilter.org "libnetfilter_cttimeout" project")  
- [libnetfilter_cthelper](https://www.netfilter.org/projects/libnetfilter_cthelper/index.html "Homepage of the netfilter.org "libnetfilter_cthelper" project")  
- [conntrack-tools](https://www.netfilter.org/projects/conntrack-tools/index.html "Homepage of the netfilter.org "conntrack-tools" project")  
- [libmnl](https://www.netfilter.org/projects/libmnl/index.html "Homepage of the netfilter.org "libmnl" project")  
- [nfacct](https://www.netfilter.org/projects/nfacct/index.html "Homepage of the netfilter.org "nfacct" project")  
- [ipset](https://www.netfilter.org/projects/ipset/index.html "Homepage of the netfilter.org "ipset" project")  
- [ulogd](https://www.netfilter.org/projects/ulogd/index.html "Homepage of the netfilter.org "ulogd" project")  
- [xtables-addons](https://www.netfilter.org/projects/xtables-addons/index.html "Homepage of the "xtables-addons" project")


### Related Topics
↗ [Linux Network](../../../🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🎠%20Linux%20Network/Linux%20Network.md)
↗ [Network Virtualization (NV)](../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/Network%20Virtualization%20(NV).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Netfilter

**Netfilter** is a [framework](https://en.wikipedia.org/wiki/Software_framework "Software framework") provided by the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") that allows various [networking](https://en.wikipedia.org/wiki/Computer_network "Computer network")-related operations to be implemented in the form of customized handlers. Netfilter offers various functions and operations for [packet filtering](https://en.wikipedia.org/wiki/Packet_filter "Packet filter"), [network address translation](https://en.wikipedia.org/wiki/Network_address_translation "Network address translation"), and [port translation](https://en.wikipedia.org/wiki/Port_translation "Port translation"), which provide the functionality required for directing packets through a network and [prohibiting](https://en.wikipedia.org/wiki/Firewall_\(computing\) "Firewall (computing)") packets from reaching sensitive locations within a network.

Netfilter represents a set of [hooks](https://en.wikipedia.org/wiki/Hooking "Hooking") inside the Linux kernel, allowing specific [kernel modules](https://en.wikipedia.org/wiki/Kernel_module "Kernel module") to register [callback](https://en.wikipedia.org/wiki/Callback_\(computer_programming\) "Callback (computer programming)") functions with the kernel's networking stack. Those functions, usually applied to the traffic in the form of filtering and modification rules, are called for every packet that traverses the respective hook within the networking stack.

![](../../../../../../../Assets/Pics/Pasted%20image%2020260724124342.png)



## Ref
[🤔 Linux Advanced Routing & Traffic Control HOWTO]: https://tldp.org/HOWTO/Adv-Routing-HOWTO/index.html
[Chapter 11. Netfilter & iproute - marking packets]: https://tldp.org/HOWTO/Adv-Routing-HOWTO/lartc.netfilter.html
