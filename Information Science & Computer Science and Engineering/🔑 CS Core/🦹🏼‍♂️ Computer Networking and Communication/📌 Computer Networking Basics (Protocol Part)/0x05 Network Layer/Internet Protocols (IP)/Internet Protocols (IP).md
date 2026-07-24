# Internet Protocols (IP)

[TOC]



## Res
### Related Topics
↗ [IP (Internet Protocol) Attacks](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Threats%20&%20Attacks/Network%20Layer%20Attacks/IP%20(Internet%20Protocol)%20Attacks/IP%20(Internet%20Protocol)%20Attacks.md)
↗ [IPSec (Internet Protocol Security) & IPSec VPN](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security%20Protocols/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)



## IP Overview



## IP Datagram Format
↗ [IPv4 Datagram Header Format](IPv4/IPv4%20Datagram%20Header%20Format.md)
↗ [IPv6 Datagram Header Format](IPv6/IPv6%20Datagram%20Header%20Format.md)


### IPv4 Header 🆚 IPv6 Header
![](../../../../../../../Assets/Pics/technologies_white_paper0900aecd8054d37d-03.jpg)
<small>IPv4 vs IPv6</small>


![IPv6 features](../../../../../../../Assets/Pics/image44.png)
<small>IPv4 vs IPv6</small>



## IP Address & IP Addressing
![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.08.49%20AM.png)

![Screenshot 2022-11-20 at 1.00.50 PM](../../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%201.00.50%20PM.png)


### 🎰 Limited IP Address & Addressing
> - For Mac Addressing, 🙈 check out  ↗ [Link-Layer Addressing (MAC Addressing)](../../0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link-Layer%20Addressing%20(MAC%20Addressing).md)

> ⚠ As for Mac addressing, it can be categorized both as Network Layer or Link Layer. Here it falls on Network Layer.

The number of IPv4 address is very limited. To tackle this problem tons of efforts have been made:
↗ [IPv4 Address Coding & Network Number Assigning](IPv4/IPv4%20Address%20Coding%20&%20Network%20Number%20Assigning.md)
↗ [NAT & NAPT (Network Address & Port Translation)](../MiddleBoxes/NAT%20&%20NAPT%20(Network%20Address%20&%20Port%20Translation)/NAT%20&%20NAPT%20(Network%20Address%20&%20Port%20Translation).md)
↗ [IPv6](IPv6/IPv6.md)

Among all of this solution, IPv6 is deemed to be the ultimate method dealing with "limited number of address" --- because it's unlimited!


### IP Address Assignment
#### 👐🏼 IP address: how to get one? (user)
##### Hard-coded (Static)
##### DHCP (Dynamic)
↗ [DHCP (Dynamic Host Configuration Protocol)](../../0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/🏘️%20Local%20Configuration%20&%20Discovery/Address%20Selection/DHCP%20(Dynamic%20Host%20Configuration%20Protocol)/DHCP%20(Dynamic%20Host%20Configuration%20Protocol).md)

#### 👐🏼 IP address: how to get blocks? (ISP)
##### ICANN
ICANN: Internet Corporation for Assigned  Names and Numbers http://www.icann.org/
- allocates IP addresses, through 5 **regional registries (RRs)** (who may then allocate to local registries)
- manages DNS root zone, including delegation of individual TLD (.com, .edu , …) management
##### NAT
↗ [NAT & NAPT (Network Address & Port Translation)](../MiddleBoxes/NAT%20&%20NAPT%20(Network%20Address%20&%20Port%20Translation)/NAT%20&%20NAPT%20(Network%20Address%20&%20Port%20Translation).md)
##### IPv6
↗ [IPv6](IPv6/IPv6.md)



## 🚚 IP Datagram Forwarding /Delivering
↗ [Data Plane (Forwarding)](../🚙%20Data%20Plane%20(Forwarding)/Data%20Plane%20(Forwarding).md)
↗ [IP Datagram Delivery](IP%20Datagram%20Delivery.md)



## 🚏IP Datagram Routing
↗ [Network Routing (IP Address Modes) (Route Selection)](../🎮%20Control%20Plane%20(Routing%20&%20Managements)/Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection)/Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection).md)



## Ref
[内网IP范围 | CSDN]: http://t.csdnimg.cn/9wMZ1
```shell
内网IP
10.0.0.0 - 10.255.255.255 
172.16.0.0 - 172.31.255.255 
192.168.0.0 - 192.168.255.555 

还有些要排除
127.0.0.1本机
0.0.0.0代表本机所有地址

224.0.0.0~255.255.255.255 多播地址
127.0.0.1 - 127.255.255.254都是环回地址（指向本机).


-----------------------------------------------------------------
REC 1918留出了3块IP地址空间（1个A类地址段，16个B类地址段，256个C类地址段）作为私有的内部使用的地址。在这个范围内的IP地址不能被路由到Internet骨干网上；Internet路由器将丢弃该私有地址。
 
IP地址类别 RPC 1918内部地址范围
 
A类 10.0.0.0到10.255.255.255
B类 172.16.0.0到172.31.255.255
C类 192.168.0.0到192.168.255.255


-----------------------------------------------------------------
IP地址分为公有IP地址和私有IP地址。

公有地址（Public address，也可称为公网地址）由Internet NIC（Internet Network Information Center因特网信息中心）负责。这些IP地址分配给注册并向Internet NIC提出申请的组织机构。通过它直接访问因特网，它是广域网范畴内的。

私有地址（Private address，也可称为专网地址）属于非注册地址，专门为组织机构内部使用，它是局域网范畴内的，出了所在局域网是无法访问因特网的。

留用的内部私有地址目前主要有以下几类：
* A类：10.0.0.0--10.255.255.255
* B类：172.16.0.0--172.31.255.255
* C类：192.168.0.0--192.168.255.255

组播地址，注意它和广播的区别。从224.0.0.0到239.255.255.255都是这样的地址。
外网地址是除了内网和组播地址以外的地址范围
```

[什么是IP？IP为什么要隔离？浏览器如何实现IP隔离？| CSDN]: http://t.csdnimg.cn/reYSc