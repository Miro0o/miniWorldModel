# Directory Services

[TOC]



## Res
### Related Topics
↗ [Identity & Access Management (IAM)](../../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Identity%20&%20Access%20Management%20(IAM).md)
↗ [LDAP (Lightweight Directory Access Protocol)](../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Messaging%20&%20Remote%20Accessing/LDAP%20(Lightweight%20Directory%20Access%20Protocol)/LDAP%20(Lightweight%20Directory%20Access%20Protocol).md)
↗ [X.500](../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Messaging%20&%20Remote%20Accessing/X.500/X.500.md)

↗ [Name Services](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/UNIX%20Family/💂‍♂️%20UNIX%20System%20Services/Name%20Services.md)



## Intro
> 🔗 
> https://zh.wikipedia.org/zh-cn/目录服务
> https://en.wikipedia.org/wiki/Directory_service

**目录服务**（英语：**Directory service**）是一个储存、组织和提供信息访问服务的软件系统，在软件工程中，一个目录是指一组名字和值的映射。它允许根据一个给出的名字来查找对应的值，与词典相似。像词典中每一个词也许会有多个词义，在一个目录中，一个名字也许会与多个不同的信息相关联。类似地，就像一个词会有多个不同的发音和多个不同的词义，目录中的一个名字可能会有多个不同类型的值。

目录也许只提供范围非常小的节点类型和数值类型，也可能对任意的或可扩展的一组类型提供支持。在一个电话目录中，节点就是姓名而数值项就是电话号码。在DNS中，节点是域名而数值项是IP地址（还有别名，邮件服务器名等等）。在一个网络操作系统的目录中，节点是那些由操作系统所管理的资源，包括用户、计算机、打印机和其它共享资源。互联网问世以来，有许多目录服务得到应用，但是本文主要关注那些源自X.500的目录服务。

目录服务遵循[LDAP](https://zh.wikipedia.org/wiki/LDAP "LDAP")和[X.500](https://zh.wikipedia.org/wiki/X.500 "X.500")协议。目录服务的一个最常用例子是[DNS](https://zh.wikipedia.org/wiki/DNS "DNS")服务。[微软](https://zh.wikipedia.org/wiki/%E5%BE%AE%E8%BD%AF "微软")的[Active Directory](https://zh.wikipedia.org/wiki/Active_Directory "Active Directory")是目录服务的一个著名实现。

> 在设计和管理目录服务中，**复制**和**分布**是两个截然不同的概念。复制是指相同的目录名字空间（相同的对象）被复制到另外一台服务器用以冗余备份和提高负载能力。复制的名字空间由同一个部门管理。分布是指多台服务器分别负责不同的名字空间，相互连接，形成一个分布式的目录服务,每一个不同的名字空间可以由不同的部门管辖。


### Security
Directory services are fundamental elements of an Identity Security strategy. Many [identity and access management (IAM)](https://www.cyberark.com/what-is/iam/) solutions use directory services in conjunction with [single sign-on](https://www.cyberark.com/what-is/sso/) (SSO), [multi-factor authentication](https://www.cyberark.com/what-is/mfa/) (MFA) or [identity lifecycle management](https://www.cyberark.com/what-is/identity-lifecycle-management/) functionality.


### 👵🏻 Directory Services Implementations in History 
> 🔗 https://en.wikipedia.org/wiki/Directory_service
#### X.500 Standards & LDAP
Directory services were part of an [Open Systems Interconnection](https://en.wikipedia.org/wiki/Open_Systems_Interconnection "Open Systems Interconnection") (OSI) initiative for common network standards and multi-vendor interoperability.

> 1️⃣ During the 1980s, the [ITU](https://en.wikipedia.org/wiki/International_Telecommunication_Union "International Telecommunication Union") and [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization") created a [set of standards (X.500)](https://en.wikipedia.org/wiki/X.500 "X.500") for directory services, initially to support the requirements of inter-carrier electronic messaging and network-name lookup.
> 
> 2️⃣ The [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol") (LDAP) is based on the X.500 directory-information services, using the TCP/IP stack and an X.500 [Directory Access Protocol](https://en.wikipedia.org/wiki/Directory_Access_Protocol "Directory Access Protocol") (DAP) string-encoding scheme on the Internet.


#### Before X.500 Standards
Systems developed before the X.500 include:
- _[Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System") (DNS):_ The first directory service on the Internet, still in use;
- _[Hesiod](https://en.wikipedia.org/wiki/Hesiod_(name_service) "Hesiod (name service)"):_ Based on DNS and used at MIT's [Project Athena](https://en.wikipedia.org/wiki/Project_Athena "Project Athena");
- _[Network Information Service](https://en.wikipedia.org/wiki/Network_Information_Service "Network Information Service") (NIS):_ Originally [Yellow Pages](https://en.wikipedia.org/wiki/Yellow_Pages_(computing) "Yellow Pages (computing)") (YP) [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems")' implementation of a directory service for Unix network environments. It played a role similar to Hesiod;
	- Sun introduced [NIS+](https://en.wikipedia.org/wiki/NIS%2B "NIS+") as part of [Solaris 2](https://en.wikipedia.org/wiki/Solaris_(operating_system) "Solaris (operating system)") in 1992, with the intention for it to eventually supersede NIS. Though due to its difficulty in integration with the existing systems, NIS+ has been removed from Solaris11.
	- As a result, many users choose to stick with NIS, and over time other modern and secure distributed directory systems, most notably [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol") (LDAP), came to replace it. 
		- e.g. `slapd` (the standalone LDAP daemon) generally runs as a non-root user;
		- e.g. [SASL](https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer "Simple Authentication and Security Layer")-based encryption of LDAP traffic is natively supported;
- _[NetInfo](https://en.wikipedia.org/wiki/NetInfo "NetInfo"):_ Developed by NeXT during the late 1980s for [NEXTSTEP](https://en.wikipedia.org/wiki/NEXTSTEP "NEXTSTEP"). After its acquisition by Apple, it was released as open source and was the directory service for MacOS X before it was deprecated for the LDAP-based Open Directory. Support for NetInfo was removed with the release of 10.5 Leopard;
- _[Banyan VINES](https://en.wikipedia.org/wiki/Banyan_VINES "Banyan VINES"):_ First scalable directory service;
- _[NT Domains](https://en.wikipedia.org/wiki/Windows_domain "Windows domain"):_ Developed by Microsoft to provide directory services for Windows machines before the release of the LDAP-based Active Directory in Windows 2000. Windows Vista continues to support NT Domains after relaxing its minimum authentication protocols;


### 💦 LDAP implementations
Lots. Refer to https://en.wikipedia.org/wiki/Directory_service for more.



## Recommended Readings
### Directory Services in the Cloud Era
> 🔗 https://www.cyberark.com/what-is/directory-services/

Microsoft Active Directory is by far the most widely adopted directory service in the business world. Active Directory was conceived to maintain information about traditional enterprise IT implementations and risk boundaries. In a traditional IT environment, stationary office workers use company-owned devices to access resources and applications hosted in on-premises data centers.

Active Directory is not easily extended to the cloud-first, mobile-first era of IT where applications and users often reside outside the enterprise network perimeter. In today’s world, users access a variety of [SaaS](https://www.cyberark.com/what-is/saas/) solutions (e.g., Salesforce, Google Workspace), Infrastructure-as-a-Service (IaaS) workloads (e.g., virtual machines running on Microsoft Azure) and on-premises applications from any location, using any device (e.g., company-owned, BYOD, mobile, etc.).

![directory services](https://www.cyberark.com/wp-content/uploads/2021/11/directory-services-img-1.png)

Many businesses are implementing [virtual directories](https://www.cyberark.com/what-is/virtual-directory/) (sometimes called cloud directories) to support hybrid IT environments and cloud-centric users. A virtual directory aggregates and normalizes information from a variety of different on-premises directories (e.g., Active Directory, LDAP-based implementations) and cloud-based directories (e.g., Azure Active Directory, Google Cloud Directory)—in real-time. A virtual directory delivers a common framework and serves as an abstraction layer that decouples users and applications from the backend directory services for ultimate performance, scalability, and extensibility. Virtual directories also make it easy to securely manage [least privilege](https://www.cyberark.com/what-is/least-privilege/) access across hybrid implementations.

Enterprises can use virtual directories for peering and federation and to enable [single sign-on](https://www.cyberark.com/products/single-sign-on/) across different applications and services. Most virtual directories support modern authentication protocols like [SAML](https://www.cyberark.com/what-is/saml/), OpenID Connect, and OAuth, as well as traditional authentication protocols like Integrated Web Authentication (IWA).

Virtual directories are typically delivered as part of [IAM solutions](https://www.cyberark.com/products/access-management/) and can be deployed on-premises or in the cloud. In addition, leading [Identity-as-a-Service (IDaaS)](https://www.cyberark.com/what-is/idaas/) providers offer cloud-based virtual directories.



## Ref
[一文了解云目录服务]: https://www.infoq.cn/article/understanding-cloud-directory-services
目录服务从广义上讲是一种提供通用对象信息的 **数据库服务**，通常包括用户信息的浏览和查找、身份验证等功能。这种类型数据库一般来说有以下特性：
-   读请求的访问量极高，但写请求的访问量相对较低，Schema 相对静态
-   具有层级的树状结构
-   对象之间有引用或者隶属关系
-   对象数据有较高的通用性，能够被多种应用程序所使用
-   强调高可用性（Availability）
-   通常支持数据同步协议


目录服务实际上是一种封装了的数据库服务，其下层实现则需要依赖某种 **通用的数据库引擎**。
- Azure AD 和 AWS Directory Service 的 **后台都是 Active Directory**，其下层是微软早期实现的一种叫做 **JET** 的数据库引擎，而 AWS 新的 Cloud Directory 据猜测可能是用 DynamoDB 实现的。
- 和上个世纪相比，现如今市面上有很多种开源的数据库引擎可以选择，对实现自有云目录服务来说是个好消息。
- 目前主流的观点认为 **NoSQL** 类型的数据库是实现目录服务的较好选择，在 CAP 原则中，**高可用性是目录服务的重心，而数据一致性一般来说则是可以适当让步的**。

【11.2 目录服务及Ldap基本原理介绍】 https://www.bilibili.com/video/BV1aA4y1Z7uL/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

[Network Information Service]: https://en.wikipedia.org/wiki/Network_Information_Service

