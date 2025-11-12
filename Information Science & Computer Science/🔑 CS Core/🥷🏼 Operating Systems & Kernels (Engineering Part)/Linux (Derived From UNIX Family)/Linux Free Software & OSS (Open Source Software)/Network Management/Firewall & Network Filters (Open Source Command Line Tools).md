# Firewall & Network Filters (Open Source Command Line Tools)

[TOC]



## Res
### Related Topics
↗ [Firewall & Network Filters](../../../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/Firewall%20&%20Network%20Filters.md)



## Intro
### `netfilter` and the netfilter.org project
↗ [The netfilter.org Project (Netfilter)](The%20netfilter.org%20Project%20(Netfilter)/The%20netfilter.org%20Project%20(Netfilter).md) is a community-driven collaborative [FOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software) project that provides packet filtering software for the [Linux](http://www.kernel.org/)2.4.x and later kernel series. The netfilter project is commonly associated with [iptables](https://www.netfilter.org/projects/iptables/index.html) and its successor [nftables](https://www.netfilter.org/projects/nftables/index.html).



## Network Administration
### 👉 `iptables` | `ip6tables`
`iptables` is under the netfilter.org project: ↗ [iptables](The%20netfilter.org%20Project%20(Netfilter)/iptables.md)


### 👉 `ipset`
🏠 https://ipset.netfilter.org

IP sets are a framework inside the Linux kernel, which can be administered by the [ipset](https://ipset.netfilter.org/ipset.man.html) utility. Depending on the type, an IP set may store IP addresses, networks, (TCP/UDP) port numbers, MAC addresses, interface names or combinations of them in a way, which ensures lightning speed when matching an entry against a set.

If you want to
- store multiple IP addresses or port numbers and match against the collection by [iptables](http://www.netfilter.org/) at one swoop; 
- dynamically update [iptables](http://www.netfilter.org/) rules against IP addresses or ports without performance penalty;
- express complex IP address and ports based rulesets with one single [iptables](http://www.netfilter.org/) rule and benefit from the speed of IP sets

then `ipset` may be the proper tool for you.

IP sets was written by Jozsef Kadlecsik and it is based on ippool by Joakim Axelsson, Patrick Schaaf and Martin Josefsson.  
Many thanks to them for their wonderful work!


### 👉 `nftables`
`nftables` is under the netfilter.org project: ↗ [nftables](The%20netfilter.org%20Project%20(Netfilter)/nftables.md)



## Firewall & Network Filters
### 👉 `ufw`
#### `Netfilter` 🆚 `Iptables` 🆚 `UFW`
↗ [FAQ / `Netfilter` 🆚 `Iptables` 🆚 `UFW` ?](../FAQ.md#`Netfilter`%20🆚%20`Iptables`%20🆚%20`UFW`%20?)


### 👉 `firewalld`
#### `firewalld` 🆚 `iptables`
↗ [FAQ/ `firewalld` 🆚 `iptables`?](../FAQ.md#`firewalld`%20🆚%20`iptables`?)



## Ref
[How To Open a Port on Linux]: https://www.digitalocean.com/community/tutorials/opening-a-port-on-linux

[How to enable iptables (instead of firewalld) services on RHEL 7 and Fedora 18?]: https://serverfault.com/questions/470287/how-to-enable-iptables-instead-of-firewalld-services-on-rhel-7-and-fedora-18
```shell
yum install iptables-services
```

[How To Restart Iptables In Kali Linux]: https://www.systranbox.com/how-to-restart-iptables-in-kali-linux/

[Kali 防火墙配置]: https://www.cnblogs.com/aashui/p/8376257.html

[👍 firewalld和iptables区别]: https://www.cnblogs.com/mefj/p/13328360.html

[👍 How To Setup a Firewall with UFW on an Ubuntu and Debian Cloud Server]: https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server

[👍 Ufw and Iptables. Which is better and why? | StackExchange + serverFault]: https://serverfault.com/a/1014625/948999

[👍 firewalld vs iptables: when to use which | stackexchange]: https://serverfault.com/a/671975

As `firewalld` is based on XML configuration, some might think that it's easier to configure the firewall in a programmatic manner. This can be achieved by `iptables` just as well, but with a different way, which is not XML. If you are already familiar with the way `iptables` works, why would you migrate all your configuration to `firewalld`?

If you consider your largest `iptables` firewall rule set, how often do you think you would benefit from the dynamic aspect of `firewalld`? In most cases the performance of `iptables`is never the issue. In most cases where the performance of `iptables` is an issue can be fixed by using `ipset` based source/destination IP sets.

It is a different debate whether or not you should use NetworkManager.

[👍 firewalld和iptables区别]: https://www.cnblogs.com/mefj/p/13328360.html

在RHEL7里有几种防火墙共存：firewalld、iptables、ebtables，默认是使用firewalld来管理netfilter子系统，不过底层调用的命令仍然是iptables等。