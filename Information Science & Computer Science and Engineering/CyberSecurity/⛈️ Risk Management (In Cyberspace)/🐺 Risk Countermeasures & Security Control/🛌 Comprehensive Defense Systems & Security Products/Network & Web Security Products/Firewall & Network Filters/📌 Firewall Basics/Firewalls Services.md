# Firewalls Services

[TOC]



## Res
### Related Topics



## Intro
防火墙需具备五个基本功能/服务：
- 过滤进、出网络的数据；
- 管理进、出网络的访问行为；
- 封堵某些禁止的业务；
- 记录通过防火墙的信息内容和活动；
- 对网络攻击的检测和告警

防火墙的其它功能/服务：
- 控制进出网络的信息流向和数据包，过滤不安全的服务；
	- 数据库长连接应用支持
	- 路由支持
	- **ADSL**拨号功能
	- **SNMP**网管支持
- 隐藏内部**IP**地址及网络结构的细节；
	- 动态**IP**环境支持
- 提供使用和流量的日志和审计功能；
- 部署**NAT**（**Network Address Translation**，网络地址转换）；
- 逻辑隔离内部网段，对外提供**WEB**和**FTP**；
- 实现集中的安全管理；
- 提供**VPN**功能。
	- **IPSEC VPN**
	- **PPTP/L2TP**
- 高可用性



## Basic Firewall Services
### 👉 Basic Access Control
- 基于源**IP**地址
- 基于目的**IP**地址
- 基于源端口
- 基于目的端口
- 基于时间
- 基于用户
- 基于流量
- 基于文件
- 基于网址
- 基于**MAC**地址

![](../../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%2010.22.58AM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%2010.23.13AM.png)

### 👉 Authentication 
多种鉴别方式和第三方鉴别
- 本地鉴别、内置**OTP**服务器鉴别
- 支持第三方**RADIUS**服务器鉴别
- 支持**TACAS/TACAS+** 服务器鉴别
- 支持**S/KEY** 、**SECUID**、**VIECA**、**LDAP**、域鉴别等鉴别

### 👉 IP-MAC Binding
![](../../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%2010.24.02AM.png)

### 👉 Log Audit
1. 会话日志：即普通连接日志
	1. 通信源地址、目的地址、源目端口、通信时间、通信协议、字节数、是否允许通过
2. 命令日志和内容日志：即深度分析日志
	1. 在通信日志的基础之上，记录下各个应用层命令参数和内容。例如HTTP请求及其要取的网页名。
3. 提供日志分析工具
	1. 自动产生各种报表，智能化的指出网络可能的安全漏洞



## Extended Firewall Services
### 👉 DHCP Support
![](../../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%2010.24.17AM.png)

### 👉 NAT（网络地址转换）
> 仅对IP进行转换

![](../../../../../../../../../Assets/Pics/Screenshot%202024-01-05%20at%2012.57.51PM.png)

- 隐藏了内部网络的结构
- 内部网络可以使用私有**IP**地址
- 公开地址不足的网络可以使用这种方式提供**IP**复用功能

### 👉 MAP（地址/端口映射）
> 对IP+port number进行转换

![](../../../../../../../../../Assets/Pics/Screenshot%202024-01-05%20at%2012.58.49PM.png)

1. 公开服务器可以使用私有地址
2. 隐藏内部网络结构

### 👉 High-Availability
#### Two-host Recovery (双机热备)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%2010.25.50AM.png)
#### Load-Balancing
↗ [Load Balancing Services](../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/Load%20Balancing%20Services/Load%20Balancing%20Services.md)

负载均衡算法：
- 轮流
- 轮流+权值
- 最少连接
- 最少连接+权值

### 👉 VPN
#### IPSEC VPN
↗ [IPSec (Internet Protocol Security) & IPSec VPN](../../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security%20Protocols/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)
互联网安全协议（Internet Protocol Security，IPsec），是一个协议簇，通过对IP协议的分组进行加密和认证来保护IP协议的网络传输协议族
#### L2TP/PPTP VPN
↗ [PPTP (Point to Point Tunneling Protocol)](../../../../../../Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/PPTP%20(Point%20to%20Point%20Tunneling%20Protocol).md)
TBD..



## Ref
