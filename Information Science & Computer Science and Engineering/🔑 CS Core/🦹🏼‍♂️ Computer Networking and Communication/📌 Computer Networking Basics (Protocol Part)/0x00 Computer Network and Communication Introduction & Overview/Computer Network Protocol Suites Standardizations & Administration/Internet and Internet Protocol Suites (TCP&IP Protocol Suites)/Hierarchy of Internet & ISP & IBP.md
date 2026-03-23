# Hierarchy of Internet & ISP & IBP

[TOC]



## Res
### Related Topics
↗ [Chinese Network Infrastructure & Communication Service Providers](../../Real%20World%20Network%20Infrastructure%20Implementations%20&%20Communication%20Services%20Provider/Chinese%20Network%20Infrastructure%20&%20Communication%20Service%20Providers.md)
↗ [Europe Network Infrastructure & Communication Services Providers](../../Real%20World%20Network%20Infrastructure%20Implementations%20&%20Communication%20Services%20Provider/Europe%20Network%20Infrastructure%20&%20Communication%20Services%20Providers.md)
↗ [U.S. Network Infrastructure & Communication Services Providers](../../Real%20World%20Network%20Infrastructure%20Implementations%20&%20Communication%20Services%20Provider/U.S.%20Network%20Infrastructure%20&%20Communication%20Services%20Providers.md)

↗ [Mobile Network Technology & Cellular Network](../../../0x07%20Physical%20Layer/Wireless%20&%20Mobile%20Network/Mobile%20Network%20Technology%20&%20Cellular%20Network/Mobile%20Network%20Technology%20&%20Cellular%20Network.md)


### Other Resources



## Intro
![](../../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.18.29%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.35.21%20AM.png)


### NSP (Network Service Provider)


### ISP (Internet Service Provider)
> **ISP的英文是Internet Service Provider，翻译为互联网服务提供商**，即向广大用户综合提供互联网接入业务、信息业务、和增值业务的电信运营商。ISP是经国家主管部门批准的正式运营企业，享受国家法律保护。


### IXP (Internet Exchange Point)


### Internet Backbone & IBP
> 🔗 https://en.wikipedia.org/wiki/Internet_backbone

The **Internet backbone** may be defined by the [principal data routes](https://en.wikipedia.org/wiki/Backbone_network "Backbone network") between large, strategically interconnected [computer networks](https://en.wikipedia.org/wiki/Computer_network "Computer network") and [core routers](https://en.wikipedia.org/wiki/Core_router "Core router") of the [Internet](https://en.wikipedia.org/wiki/Internet "Internet"). These data routes are hosted by commercial, government, academic and other high-capacity network centers, as well as the [Internet exchange points](https://en.wikipedia.org/wiki/Internet_exchange_point "Internet exchange point") and [network access points](https://en.wikipedia.org/wiki/Network_access_point "Network access point"), that exchange Internet traffic between the countries, continents, and across the oceans. [Internet service providers](https://en.wikipedia.org/wiki/Internet_service_provider "Internet service provider"), often [Tier 1 networks](https://en.wikipedia.org/wiki/Tier_1_network "Tier 1 network"), participate in Internet backbone traffic by privately negotiated [interconnection agreements](https://en.wikipedia.org/wiki/Interconnect_agreement "Interconnect agreement"), primarily governed by the principle of settlement-free [peering](https://en.wikipedia.org/wiki/Peering "Peering").

The Internet, and consequently its backbone networks, do not rely on central control or coordinating facilities, nor do they implement any global network policies. The [resilience](https://en.wikipedia.org/wiki/Resilience_(network) "Resilience (network)") of the Internet results from its principal architectural features, most notably the idea of placing as few network [state](https://en.wikipedia.org/wiki/State_(computer_science) "State (computer science)") and control functions as possible in the network elements and instead relying on the endpoints of communication to handle most of the processing to ensure data integrity, reliability, and authentication. In addition, the high degree of [redundancy](https://en.wikipedia.org/wiki/Redundancy_(engineering) "Redundancy (engineering)") of today's network links and sophisticated real-time [routing](https://en.wikipedia.org/wiki/Routing "Routing") protocols provide alternate paths of communications for load balancing and congestion avoidance.

The largest providers, known as [Tier 1 networks](https://en.wikipedia.org/wiki/Tier_1_network "Tier 1 network"), have such comprehensive networks that they do not purchase [transit](https://en.wikipedia.org/wiki/Internet_transit "Internet transit") agreements from other providers



## 互联网网间互联
### 🎯 互联网网间互联方式


### 🎯 互联网网间互联结算模式



## Ref
[👍 长文|互联网骨干网全面解析 - kgzhang的文章 - 知乎]: https://zhuanlan.zhihu.com/p/267213062

- 什么是互联网骨干网?
- 互联网网间互联方式
	- 国际通用互联方式相互联接和交换信息的方式，称为互联网网间互联方式.
	- 按照互联双方交换信息的方式不同，互联网网间互联方式可分为两种：一是对等互联（Peering），二是不对称互联（Transit）。
	- 在因特网中，互联网骨干网之间的互联互通有多种模式，我们可以按四种不同的维度来加以区别：
		- （1）按照物理连接方式的不同可分为直接互联和通过交换中心互联；
		- （2）按照互联双方交换信息的方式不同可分为不穿透互联和穿透互联；
		- （3）按照结算模式的不同可分为付费互联和免结算互联；
		- （4）根据路由开放程度的不同可分为一方对另一方开放部分路由的互联和一方对另一方开放所有路由的互联。
	- 一些常见的互联方式：
		- 对等互联 (Peering)
			- 公共对等互联（PublicPeering）
			- 专用对等互联（PrivatePeering）
		- 不对等互联(Transit)
		- 部分对等互联（PartialPeering）
		- 付费对等互联（PaidPeering）
		- 部分不对称互联（PartialTransit）
- 网间互联结算模式
	- 互联双方支付费用的规则或方法，称为网间互联结算模式。
	- 互联网网间互联结算模式大致有两种。一是免费结算模式，即“呼叫者保留全部收入”（SenderKeepsAll，SKA）或“开票但不收费”（Bill and Keep） ；二是付费结算模式（Settlement）
	- 互联网为什么不使用传统的电信网结算模式?
- 中国互联网骨干网
	- 目前，中国拥有九大骨干网:
		- 中国公用计算机互联网（CHINANET）
			- CHINANET八大节点
			- 中国电信CHINANET骨干网核心层由北京、上海、广州、沈阳、南京、武汉、成都、西安等8个城市的核心节点组成。
			- 核心节点之间为不完全网状结构。以北京、上海、广州为中心的三中心结构，其他核心节点分别以至少两条高速ATM链路与这三个中心相连。另外各省还建立了二级节点。
		- 中国科技网（CSTNET）
		- 中国教育和科研计算机网（CERNET）
		- 中国金桥信息网（CHINAGBN）
		- 中国联通互联网（UNINET）
		- 中国网通公用互联网（CNCNET）
		- 中国移动互联网（CMNET）
		- 中国国际经济贸易互联网（CIETNET）
		- 中国长城互联网（CGWNET）
	- 目前中国有七家**骨干网运营商**，分别是[中国电信](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%25E4%25B8%25AD%25E5%259B%25BD%25E7%2594%25B5%25E4%25BF%25A1)、[中国联通](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%25E4%25B8%25AD%25E5%259B%25BD%25E8%2581%2594%25E9%2580%259A)、[中国移动](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%25E4%25B8%25AD%25E5%259B%25BD%25E7%25A7%25BB%25E5%258A%25A8)、[中国教育和科研计算机网](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%25E4%25B8%25AD%25E5%259B%25BD%25E6%2595%2599%25E8%2582%25B2%25E5%2592%258C%25E7%25A7%2591%25E7%25A0%2594%25E8%25AE%25A1%25E7%25AE%2597%25E6%259C%25BA%25E7%25BD%2591)、[中国科技网](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/w/index.php%3Ftitle%3D%25E4%25B8%25AD%25E5%259B%25BD%25E7%25A7%2591%25E6%258A%2580%25E7%25BD%2591%26action%3Dedit%26redlink%3D1) 、[中国国际电子商务网](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/w/index.php%3Ftitle%3D%25E4%25B8%25AD%25E5%259B%25BD%25E5%259B%25BD%25E9%2599%2585%25E7%2594%25B5%25E5%25AD%2590%25E5%2595%2586%25E5%258A%25A1%25E7%25BD%2591%26action%3Dedit%26redlink%3D1)和[中国长城互联网](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/w/index.php%3Ftitle%3D%25E4%25B8%25AD%25E5%259B%25BD%25E9%2595%25BF%25E5%259F%258E%25E4%25BA%2592%25E8%2581%2594%25E7%25BD%2591%26action%3Dedit%26redlink%3D1)
- 美国和亚洲部分国家互联网骨干网互联互通现状
	- 美国
	- 日本
	- 新加坡
	- 韩国
	- 澳大利亚
- 国外互联网骨干网互联互通现状分析总结
	- 尽管各国的具体市场情况不同，经济制度也不尽一样，但是我们从中仍然可以总结出一些共性的东西。
	- 首先，不管是亚洲还是欧美国家，在Internet骨干网的互联互通问题上，各国基本上仍然采取不规制的管制政策。相较于传统电话业务，Internet仍然处于技术腾飞的阶段，新的业务不断被开发出来，各国的规制者都普遍担心过去严格的事无巨细的规制手段可能会扭曲市场结构，妨碍技术进步，最终阻碍Internet的发展。美国联邦通信管理局并没有制定传统意义上的复杂的规制措施，然而，市场的运行仍然是有章可循的，反垄断法的存在迫使骨干网运营商不敢滥用其垄断优势。
	- 其次，竞争是因特网发展的关键。各国的案例都说明，只有在因特网骨干网中存在竞争的前提下，这个市场才能健康有序地发展。各国一级运营商的数目均大于等于3，形成了基本的竞争态势。不论是一级骨干网还是下一级骨干网，参与竞争的运营商越多，网间结算和用户接入的费用就越低。如果在市场中存在一定数量的、有一定实力的二级运营商，往往会对一级运营商造成强大的压力，迫使一级运营商降低价格，提高质量，日本的案例就说明了这一点。
	- 再次，无规制并不代表着自由放任。应该注意到的是，这些经济发达国家有比较完善的竞争法和反垄断法，因特网运营商大到兼并重组，小到市场运作无一不受到相关法律的制约。在看到竞争性局面的同时，也要警惕反竞争的行为。虽然这些国家仍然把市场作为解决互联网之间互联互通的主要手段，但是对于小运营商，主要还是持保护的态度，防止大运营商滥用其市场优势。

[History and Evolution of Internet Backbones & Interconnection]: http://www.cybertelecom.org/broadband/backbone3.htm