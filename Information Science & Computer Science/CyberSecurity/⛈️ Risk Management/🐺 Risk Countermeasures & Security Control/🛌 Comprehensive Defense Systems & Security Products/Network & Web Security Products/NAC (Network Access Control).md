# NAC (Network Access Control)

[TOC]



## Res
### Related Topics
↗ [Access Control (访问控制)](../../Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)
↗ [Networking Access Control](../../../../Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/Networking%20Access%20Control/Networking%20Access%20Control.md)

↗ [Application Layer Security Protocols](../../../../Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Application%20Layer%20Security%20Protocols.md)

↗ [Physical (Link) Layer Security Protocols](../../../../Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/Physical%20(Link)%20Layer%20Security%20Protocols.md)
- ↗ [EAP (Extensible Authentication Protocol)](../../../../Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Security%20Protocols/EAP%20(Extensible%20Authentication%20Protocol)/EAP%20(Extensible%20Authentication%20Protocol).md)
- ↗ [IEEE 802.11 Security Standards & WPA](../../../../Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.11%20Security%20Standards%20&%20WPA/IEEE%20802.11%20Security%20Standards%20&%20WPA.md)
- ↗ [IEEE 802.1x](../../../../Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.1x/IEEE%20802.1x.md)



## Intro
![](../../../../../../../Assets/Pics/Screenshot%202023-12-04%20at%2011.00.20PM.png)
<small>NAC的功能：鉴别 - 认证 - 授权。比通常讲的访问控制多了一个安全认证，相当于是质量检测。要防止身份合法但是自身安全质量低于标准的成员进入系统。</small>


### Development of NAC
> 2002年，思科提出NAC的概念 -> 2004年，思科的NAC进入市场；许多厂商跟进，如NAP，A10等等 -> 2009年，国内外数十家厂商，优胜劣汰，进入竞争时代；


### NAC Services & Functions
![](../../../../../../../Assets/Pics/Screenshot%202023-12-04%20at%2010.59.57PM.png)

> All-in-One Policy Compliance and Remediation Solution

1. 认证与授权
	1. Enforces authorization policies and privileges
	2. Supports multiple user roles
2. 扫描与评估
	1. Agent scan for required versions of hotfixes, AV, etc
	2. Network scan for virus and worm infections and port vulnerabilities
3. 隔离与实施
	1. Isolate non-compliant devices from rest of network
	2. MAC and IP-based quarantine effective at a per-user level
4. 更新与修复
	1.  Network-based tools for vulnerability and threat remediation
	2. Help-desk integration


### NAC Working Process
#### User Perspective
![](../../../../../../../Assets/Pics/Screenshot%202023-12-04%20at%2011.01.28PM.png)
#### System Perspective
![](../../../../../../../Assets/Pics/Screenshot%202023-12-04%20at%2011.00.50PM.png)



## NAC Implementations
### IEEE 802.1x Standards
> ↗ [IEEE 802.1x](../../../../Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.1x/IEEE%20802.1x.md)

![](../../../../../../../Assets/Pics/Screenshot%202023-12-04%20at%2010.58.15PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-12-04%20at%2010.58.26PM.png)



## Ref

