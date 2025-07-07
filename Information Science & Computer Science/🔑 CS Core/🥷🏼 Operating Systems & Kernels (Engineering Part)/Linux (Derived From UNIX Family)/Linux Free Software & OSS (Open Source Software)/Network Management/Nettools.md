# Net-Tools

[TOC]



## Res
🏠 Project Home: https://sourceforge.net/projects/net-tools/

☎ Commands: [arp(8)](https://net-tools.sourceforge.io/man/arp.8.html), [hostname(1)](https://net-tools.sourceforge.io/man/hostname.1.html), [ifconfig(8)](https://net-tools.sourceforge.io/man/ifconfig.8.html), ipmaddr, iptunnel, [mii-tool(8)](https://net-tools.sourceforge.io/man/mii-tool.8.html), [nameif(8)](https://net-tools.sourceforge.io/man/nameif.8.html), [netstat(8)](https://net-tools.sourceforge.io/man/netstat.8.html), [plipconfig(8)](https://net-tools.sourceforge.io/man/plipconfig.8.html), [rarp(8)](https://net-tools.sourceforge.io/man/rarp.8.html), [route(8)](https://net-tools.sourceforge.io/man/route.8.html) und [slattach(8)](https://net-tools.sourceforge.io/man/slattach.8.html).

Additional mal pages: [ethers(5)](https://net-tools.sourceforge.io/man/ethers.5.html) -- /etc/ethers file for arp(8)

NB: some projects (like Debian and RedHat) use a net-tools based but different **hostname** command.


### Related Topics
↗ [iproute2](iproute2.md)



## Intro
net-tools, the collection of base networking utilities for Linux. Net-tools is no longer maintained now. A replacement is ↗ [iproute2](iproute2.md)



## 👉 `ifconfig`
> `ifconfig` is old. Use `ip` command instead of `ifconfig`.
> ↗ [Network Management Basics /👉 `ifconfig` (deprecated) --> `ip`](Network%20Management%20Basics.md#👉%20`ifconfig`%20(deprecated)%20-->%20`ip`)

`ifconfig` (interface configuration) command is used to configure the kernel-resident network interfaces. It is used at the boot time to set up the interfaces as necessary. After that, it is usually used when needed during debugging or when you need system tuning. Also, this command is used to assign the IP address and netmask to an interface or to enable or disable a given interface.

```shell
# ifconfig
# Network Interface Configurator.
# More information: <https://net-tools.sourceforge.io/man/ifconfig.8.html>.

# View network settings of an Ethernet adapter:
ifconfig eth0

# Display details of all interfaces, including disabled interfaces:
ifconfig -a

# Assign IP address to eth0 interface:
ifconfig eth0 ip_address

# To take down / up the wireless adapter:
ifconfig wlan0 {up|down}

# To set a static IP and netmask:
ifconfig eth0 192.168.1.100 netmask 255.255.255.0

# You may also need to add a gateway IP:
route add -net 192.168.1.0 netmask 255.255.255.0 gw 192.168.1.1
```

ifconfig returns DHCP configured information of the host. 
- `inet`: The IP information obtained by the DHCP server should provide us with at least one active subnet which can be utilized to identify the list of live systems and services through different scanning techniques.
- `netmask`: This information can be utilized to calculate the subnet ranges. From the previous screenshot, we have `255.255.240.0`, which means CIDR is /20 and potentially we can expect `4094` hosts on the same subnet.
- **Default gateway**: The IP information of the gateway will provide the opportunity to ping other similar gateway IP's. For example, if your default gateway IP is `192.168.1.1` by using ping scans attackers may be able to enumerate other similar IPs such as `192.168.2.1`, `192.168.3.1`, and so on.
-  **Other IP address**: DNS information can be obtained by accessing the `/etc/resolv.conf` file. The IP addresses in this file are commonly addressed in all of the subnets and domain information will also be automatically available in the same file.



## 👉 `iptables`
↗ [iptables](The%20netfilter.org%20Project%20(Netfilter)/iptables.md)



## 👉 `netstat`
> `netstat` is old. Use `ss` command instead.
> ↗ [Network Management Basics /👉 `netstat` (deprecated) --> `ss` | `hashcat`](Network%20Management%20Basics.md#👉%20`netstat`%20(deprecated)%20-->%20`ss`%20|%20`hashcat`)

The `netstat` command symbolically displays the contents of various network-related data structures.  There are a number of output formats, depending on the options for the information presented.  The first form of the command displays a list of active sockets for each protocol.  The second form presents the contents of one of the other network data structures according to the option selected. Using the third form, with a wait interval specified, `netstat` will continuously display the information regarding packet traffic on the configured network interfaces.  The fourth form displays statistics for the specified protocol or address family. If a wait interval is specified, the protocol information over the last interval seconds will be displayed. The fifth form displays per-interface statistics for the specified protocol or address family.  The sixth form displays `mbuf(9)` statistics.  The seventh form displays routing table for the specified address family.  The eighth form displays routing statistics.



## Ref
