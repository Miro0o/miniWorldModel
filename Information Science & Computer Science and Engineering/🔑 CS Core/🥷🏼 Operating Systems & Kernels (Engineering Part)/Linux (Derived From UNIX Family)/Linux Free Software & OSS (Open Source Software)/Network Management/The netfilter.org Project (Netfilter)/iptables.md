# iptables

[TOC]



> `iptables` is old. Use the new ↗ [nftables](nftables.md) instead.



## Res
🏠 https://www.netfilter.org/projects/iptables/index.html
🚧 https://git.netfilter.org/iptables/


### Related Topics


### Learning Resources
👍 [iptables 详解-- 朱双印的个人博客](https://www.zsythink.net/archives/tag/iptables/)



## Intro
> 🫵🏽 `iptables` is designed for GNU/Linux hosts. For Unix-likes (like macOS) the counterpart is `pfctl` at ↗ [Network Management](../../../../Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/Network%20Management/Network%20Management.md)
> 
> Both of them serve as a cli client of user space communicating with core **netfilter module** of kernel space. Netfilter functions as a real network packets manager /firewall. 
> 
> In gnu/linux the core netfilter system is `IP`, while Unix-likes `PF` (Packages Filter). 

**iptables** is the userspace command line program used to configure the Linux 2.4.x and later packet filtering ruleset. It is targeted towards system administrators.

Since **Network Address Translation** is also configured from the packet filter ruleset, **iptables** is used for this, too.

The **iptables** package also includes **ip6tables**. **ip6tables** is used for configuring the IPv6 packet filter.

**Simple examples**:
```shell
# Rules op
sudo iptables -I INPUT -p tcp --dport 22 -j DROP
sudo iptables -I INPUT -m mac --mac-source xx:xx:xx:xx:xx:xx -j ACCEPT #设置指定mac地址客户端可以访问虚拟机
sudo iptables -I INPUT -s xxx.xxx.xxx.xxx -p tcp --dport 22 -j ACCEPT #设置指定ip地址客户端可以访问虚拟机

# Save changes
sudo apt install iptables-persistent
sudo iptables-save > /etc/iptables/rules.v4
```


### Dependencies
**iptables** requires a kernel that features the ip_tables packet filter. This includes all 2.4.x and later kernel releases.


### Main Features
- listing the contents of the packet filter ruleset
- adding/removing/modifying rules in the packet filter ruleset
- listing/zeroing per-rule counters of the packet filter ruleset


### Architecture
![img](../../../../../../../../../Assets/Pics/021217_0051_6.png)<small>Iptables architecture</small>



## Ref
[iptables: sport, dport 解释]: https://www.cnblogs.com/yjt1993/p/9504352.html

[linux中iptables配置文件及命令详解详解]: https://blog.csdn.net/Dexter_Wang/article/details/67634385
