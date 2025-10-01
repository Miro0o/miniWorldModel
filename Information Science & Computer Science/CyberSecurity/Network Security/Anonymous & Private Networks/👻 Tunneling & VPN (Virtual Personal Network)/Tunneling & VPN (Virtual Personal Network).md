# Tunneling & VPN (Virtual Personal Network)

[TOC]



## Res
### Related Topics
↗ [Netowork Security /IPsec (Internet Protocol Security)](../../Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security%20Protocols/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)
↗ [Network Virtualization](../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/Network%20Virtualization.md)
↗ [Linux Network](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🎠%20Linux%20Network/Linux%20Network.md)

↗ [VPC](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Service%20(Delivery)%20Models/IaaS%20(Infrastructure%20as%20a%20Service)/VPC.md)
↗ [Proxy Technology & GFW 🇨🇳](../Proxy%20Technology%20&%20GFW%20🇨🇳/Proxy%20Technology%20&%20GFW%20🇨🇳.md)

↗ [IPSec (Internet Protocol Security) & IPSec VPN](../../Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security%20Protocols/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)
↗ [SSL VPN](📌%20Tunneling%20Protocols%20&%20Technologies/SSL%20VPN/SSL%20VPN.md)
↗ [Reverse Tunneling](Reverse%20Tunneling.md)


### VPN Providers List
1. [NordVPN](https://bi.cybernews.com/nordvpn/ "NordVPN") – best VPN using WireGuard technology
2. [Surfshark](https://bi.cybernews.com/surfsharkvpn/ "Surfshark VPN") – fast WireGuard VPN with unlimited connections
3. [IPVanish](https://bi.cybernews.com/ipvanish/ "IPVanish") – WireGuard VPN with secure browsing features
4. [Atlas VPN](https://bi.cybernews.com/atlasvpn/ "Atlas VPN") – excellent budget VPN with WireGuard
5. [CyberGhost](https://bi.cybernews.com/cyberghostvpn/ "CyberGhost VPN") – cheap VPN with a fast WireGuard solution
6. [avast](https://www.avast.com/en-us/index) -- 
7. [Private Internet Access (PIA)](https://www.privateinternetaccess.com)
8. [👍 tailscale](https://tailscale.com) 


### Other Resources
🚧 https://github.com/vpncn/vpncn.github.io
2024中国翻墙软件VPN推荐以及科学上网避坑，稳定好用。对比SSR机场、蓝灯、V2ray、老王VPN、VPS搭建梯子等科学上网与翻墙软件，中国最新科学上网翻墙梯子VPN下载推荐，访问Chatgpt。

> 其实直到2024年的目前为止，使用VPN加密、安全翻墙依然是最适合大多数人的最方便、安全的科学上网工具，同样也是我长期关注和测试的。目前国内还能使用的正规VPN已经被墙的差不多了，只剩下看重中国市场的几款大牌VPN还算稳定。**如果你不想多磨叽，想快速、直接选择一款VPN就能安全翻墙，我建议选择下面的2款，也是我日常使用最多的，下面把基本信息和翻墙使用体验简单介绍一下**：
> - [StrongVPN](https://github.com/vpncn/vpncn.github.io#1-strongvpn--%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E4%BD%B3)
> - [ExpressVPN（优惠活动链接）](https://linkv.org/express/)

1. [翻墙的安全问题](https://github.com/vpncn/vpncn.github.io#%E7%BF%BB%E5%A2%99%E7%9A%84%E5%AE%89%E5%85%A8%E6%80%A7%E9%97%AE%E9%A2%98--%E7%BF%BB%E5%A2%99%E8%BD%AF%E4%BB%B6%E4%B8%8Evpn%E7%9A%84%E5%8C%BA%E5%88%AB)
2. [VPN翻墙稳定吗](https://github.com/vpncn/vpncn.github.io#vpn%E6%9C%8D%E5%8A%A1%E7%BF%BB%E5%A2%99%E7%A8%B3%E5%AE%9A%E5%90%97)
3. [敏感时期](https://github.com/vpncn/vpncn.github.io#%E6%95%8F%E6%84%9F%E6%97%B6%E6%9C%9F%E6%98%AF%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99)
	1. [开大会期间](https://github.com/vpncn/vpncn.github.io#%E5%BC%80%E5%A4%A7%E4%BC%9A%E6%9C%9F%E9%97%B4)
	2. [每年六月上旬](https://github.com/vpncn/vpncn.github.io#%E6%AF%8F%E5%B9%B4%E5%85%AD%E6%9C%88%E4%B8%8A%E6%97%AC)
	3. [突发事件期间](https://github.com/vpncn/vpncn.github.io#%E7%AA%81%E5%8F%91%E4%BA%8B%E4%BB%B6)
4. [买VPS自建翻墙](https://github.com/vpncn/vpncn.github.io#%E4%B9%B0vps%E8%87%AA%E5%BB%BA%E7%BF%BB%E5%A2%99%E6%9C%8D%E5%8A%A1%E5%99%A8)
5. [什么VPN适合中国用户？](https://github.com/vpncn/vpncn.github.io#%E4%BB%80%E4%B9%88vpn%E9%80%82%E5%90%88%E4%B8%AD%E5%9B%BD%E7%94%A8%E6%88%B7)
6. [怎么下载和登录VPN客户端?](https://github.com/vpncn/vpncn.github.io#%E6%80%8E%E4%B9%88%E4%B8%8B%E8%BD%BD%E5%92%8C%E7%99%BB%E5%BD%95vpn%E5%AE%A2%E6%88%B7%E7%AB%AF)
7. [适合在中国使用的翻墙软件VPN](https://github.com/vpncn/vpncn.github.io#%E9%80%82%E5%90%88%E5%9C%A8%E4%B8%AD%E5%9B%BD%E4%BD%BF%E7%94%A8%E7%9A%84%E7%BF%BB%E5%A2%99%E8%BD%AF%E4%BB%B6vpn%E5%9B%BD%E5%86%85%E5%AE%9E%E6%B5%8B)
	1. [StrongVPN-性价比最好](https://github.com/vpncn/vpncn.github.io#1-strongvpn--%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E4%BD%B3)
	2. [ExpressVPN-网络速度最快](https://github.com/vpncn/vpncn.github.io#2-expressvpn--%E9%80%9F%E5%BA%A6%E4%BD%93%E9%AA%8C%E6%9C%80%E4%BD%B3)
	3. [NordVPN](https://github.com/vpncn/vpncn.github.io#3-nordvpn)
	4. [IVacy-不推荐国内使用](https://github.com/vpncn/vpncn.github.io#4-ivacy)
	5. [PureVPN-不推荐国内使用](https://github.com/vpncn/vpncn.github.io#5-purevpn)
8. [读者使用问题讨论](https://github.com/vpncn/vpncn.github.io#%E8%AF%BB%E8%80%85%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98%E8%AE%A8%E8%AE%BA)
9. [不要入坑的VPN](https://github.com/vpncn/vpncn.github.io#%E4%B8%8D%E8%A6%81%E5%85%A5%E5%9D%91%E7%9A%84vpn)
10. [其他VPN避坑提示](https://github.com/vpncn/vpncn.github.io#%E5%85%B6%E4%BB%96vpn%E9%81%BF%E5%9D%91%E6%8F%90%E7%A4%BA)

🏠 https://github.com/jpillora/chisel
Chisel is a fast TCP/UDP tunnel, transported over HTTP, secured via SSH. Single executable including both client and server. Written in Go (golang). Chisel is mainly useful for passing through firewalls, though it can also be used to provide a secure endpoint into your network.



## VPN Intro
在公用网络上建立专用网络，进行安全通讯。在企业网络中有广泛应用。
**VPN**网关通过对数据包的加密和数据包目标地址的转换实现远程访问

![VPN vs Proxy – Difference Between Them](https://www.guru99.com/images/2/041321_0431_VPNvsProxyW1.png)


---
> 🔗 https://en.wikipedia.org/wiki/Virtual_private_network

![](../../../../../Assets/Pics/Screenshot%202024-04-24%20at%209.37.22%20PM.png)



## VPN Tunneling Establishment
连接分支机构（Intranet VPN）/连接合作伙伴（Extranet VPN）/连接远程用户（Access VPN）
主机对主机/ 主机对VPN网关 /VPN网关对VPN网关 /远程用户对VPN网关


### 1️⃣ Host to Host
该模式要求两边主机都支持IPSec
VPN网关可支持也可不支持IPSec

![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.45.17PM.png)


### 2️⃣ Host to VPN Gateway
该模式要求两边主机都支持IPSec
VPN网关可支持也可不支持IPSec

![](../../../../../Assets/Pics/Screenshot%202024-01-05%20at%2011.55.41AM.png)


### 3️⃣ VPN to VPN
该模式要求两边主机都支持IPSec
VPN网关可支持也可不支持IPSec

![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.44.58PM.png)

![](../../../../../Assets/Pics/Screenshot%202024-01-05%20at%2011.56.18AM.png)


### 4️⃣ Remote User to VPN Gateway
Remote User to VPN 网关
该模式不要求同关内主机支持IPSec

![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.46.04PM.png)



## VPN Working Process
![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.38.17PM.png)



## VPN Implementations
↗ [VPN & NAT Implementations](VPN%20&%20NAT%20Implementations/VPN%20&%20NAT%20Implementations.md)
↗ [Tunneling Protocols & Technologies](📌%20Tunneling%20Protocols%20&%20Technologies/Tunneling%20Protocols%20&%20Technologies.md)



## VPN设计安全性
### VPN Tunnel Security
保证VPN安全性通过以下手段：
- 隧道和加密：在安全性较高的场合使用加密隧道保护私有数据不被非法窥视和篡改。
- 数据验证：数据验证使接收方识别被篡改的数据，保证数据完整性。
- 身份鉴别：通过AAA，路由器提供用户鉴别、访问级别和访问记录，禁止非法访问。
- 抗重放：防止数据包被捕捉并重新投放到网上。


### Data Confidentiality
![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.42.23PM.png)


### Data Integrity
![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.42.44PM.png)


### Data Source Origin Authenticity
![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.43.06PM.png)


### Relay Attack Protection
![](../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.43.29PM.png)



## Ref
[Comparison of VPN Services]: https://en.wikipedia.org/wiki/VPN_service#comparison

[Private Internet Access VPN review]: https://cybernews.com/best-vpn/private-internet-access-review/

[🤔 What is VPN? How It Works, Types of VPN]: https://www.kaspersky.com/resource-center/definitions/what-is-a-vpn
