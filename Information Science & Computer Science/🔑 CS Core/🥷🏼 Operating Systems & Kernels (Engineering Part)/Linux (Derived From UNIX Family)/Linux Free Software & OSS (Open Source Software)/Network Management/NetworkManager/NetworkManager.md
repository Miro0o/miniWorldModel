# NetworkManager

[TOC]



## Res
🏠 https://networkmanager.dev
📂 https://networkmanager.dev/docs/

📄 https://developer-old.gnome.org/NetworkManager/stable/NetworkManager.html
📄 https://wiki.gnome.org/Projects/NetworkManager


### See Also
- [Red Hat Networking Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Networking_Guide/)
- [Fedora Networking Guide](https://docs.fedoraproject.org/en-US/Fedora/24/html/Networking_Guide/index.html)
- [NetworkManager in Debian](https://wiki.debian.org/NetworkManager)
- [NetworkManager on Arch Linux](https://wiki.archlinux.org/index.php/NetworkManager)



## Intro
NetworkManager is the standard Linux network configuration tool suite. It supports large range of networking setups, from desktop to servers and mobile and integrates well with popular desktop environments and server configuration management tools.

> **Network Manager & ubuntu**
> By default network management on [Ubuntu Core](https://www.ubuntu.com/core) is handled by systemd’s [networkd](https://www.freedesktop.org/software/systemd/man/systemd-networkd.service.html) and [netplan](https://launchpad.net/netplan). However, when NetworkManager is installed, it will take control of all networking devices in the system by creating a netplan configuration file in which it sets itself as the default network renderer.

> **Network Manger & Debian**
> [NetworkManager](https://wiki.gnome.org/Projects/NetworkManager) attempts to keep an active network connection available at all times. 
> 
> The point of NetworkManager is to make networking configuration and setup as painless and automatic as possible. If using DHCP, NetworkManager is intendedto replace default routes, obtain IP addresses from a DHCP server and change nameservers whenever it sees fit. In effect, the goal of NetworkManager is to make networking Just Work.



## Ref
[Network Manager | Ubuntu Core - Doc]: https://ubuntu.com/core/docs/networkmanager

