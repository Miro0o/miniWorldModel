# Cyberspace Assets Mapping & Management

[TOC]



## Res
### Related Topics
↗ [Reconnaissance & Exploration Tools](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration%20Tools/Reconnaissance%20&%20Exploration%20Tools.md)
↗ [Passive Recon & (Defensive) OSINT](../../🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Passive%20Recon%20&%20(Defensive)%20OSINT/Passive%20Recon%20&%20(Defensive)%20OSINT.md)

↗ [Attack Surface Management (ASM)](../🚀%20Attack%20Surface%20Management%20(ASM)/Attack%20Surface%20Management%20(ASM).md)
↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../../🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)

↗ [goby](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration%20Tools/goby.md)

↗ [Network (& Communication) Security](../../../Network%20(&%20Communication)%20Security/Network%20(&%20Communication)%20Security.md)


### Cyberspace Assets Search Engines
> ↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../../🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)

http://whatweb.bugscaner.com/look/

🔍 https://x.threatbook.com
微步在线 ｜ 威胁分析与情报共享社区

🔍 https://www.yunsee.cn
云悉指纹，让互联网资产更清晰. 网络资产一键可查; 精准应用指纹识别; 应用组成安全评估.

🔍 https://www.zoomeye.org
`Zoomeye` is **chinese** based search engine. Zoomeye uses **Xmap** and **Wmap** to search for the network devices that are connected over the internet. These two engines are used in 24/7 detection.
🚧 https://github.com/knownsec/ZoomEye-python
ZoomEye-python: The official Python library and CLI by Knownsec 404 Team.

🔍 https://en.fofa.info
`FOFA` is a search engine for global cyberspace mapping belonging to Beijing Huashun Xin'an Technology Co., Ltd.

Through continuous active detection of global Internet assets, more than 4 billion assets and more than 350,000 fingerprint rules have been accumulated, identifying most software and hardware network assets. Asset data supports external presentation and application in various ways and can perform hierarchical portraits of assets based on IP.

🔍 https://www.shodan.io
`Shodan` is the world's first search engine for Internet-connected devices. Discover how Internet intelligence can help you make better decisions.

🔍 https://search.censys.io
`Censys` helps organizations, individuals, and researchers find and monitor every server on the Internet to reduce exposure and improve security.

🔍 https://viz.greynoise.io/
`GreyNoise`

🔍 https://wigle.net/
`WiGLE`

🔍 https://hunter.io/
`Hunter`

🧰 https://www.virustotal.com/gui/home/search
`VirusTotal`

🔍 https://publicwww.com/
`PublicWWW`

🔍 https://tineye.com/
`TinEye`



## Intro
网络空间自上而下可划分为实体人物层、虚拟角色层、逻辑网络层、物理网络层和地理层。人物层由现实空间的真实个体组成，虚拟角色层由网络使用者账户组成，物理网络层由互联网通信设备和基础设施构成，逻辑网络层用于连接物理网络层和虚拟角色层，地理层为全球网络空间的运行提供空间、物质、能量等基础支撑，网络空间测绘的主要研究对象为物理网络层。

近年来，以计算机系统为代表的通信基础设施迅速发展，网络空间成为人类生产生活的第二类生存空间，蕴含的软硬件系统、信息数据等是国家重要的战略资源，因此也被认为是继陆、海、空、天之后代表国家网络主权的“第五空间”。网络空间测绘技术通过对全网资产进行探测识别、实体定位、深度关联和层级映射，绘制“第五空间”的“底图”，旨在建立高效网络资产安全检测体系，对高效管理网络空间、快速应对突发安全事件、维护国家网络空间主权具有重要意义。


### 网络空间测绘系统架构 （Cyberspace Assets Detection System Architecture）
![](../../../../../../Assets/Pics/Pasted%20image%2020231005164056.png)


### 1️⃣ Network Assets Detection
> 网络资产探测是指利用一定技术手段获取目标主机的设备属性信息和应用属性信息，包括IP存活性探测、端口/服务探测、操作系统探测、流量采集、别名解析、DNS探测、应用类型探测等方面，如图2所示。

↗ [Active Recon & Offensive OSINT](../../🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Active%20Recon%20&%20Offensive%20OSINT.md)


### 2️⃣ Network Assets Identification
> 网络资产识别主要有设备组件识别、应用组件识别、业务类型推断3个方面，常用的技术手段是资产指纹比对。网络资产在协议实现、网络应用等方面存在差异，如开放的端口/服务信息、banner信息、Web网页数据等，对这些差异进行特征提取可得到该资产的特征指纹，网络资产指纹库积累了大量网络资产指纹。资产指纹比对是将目标主机的特征指纹和指纹库进行匹配，从而实现资产属性识别。

↗ [Active Recon & Offensive OSINT](../../🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Active%20Recon%20&%20Offensive%20OSINT.md)


### 3️⃣ Network Topology Construction
> 网络拓扑结构还原是利用IP路径信息、路由器配置文件、BGP路由表等数据还原得到网络的IP级、路由器级、PoP级和AS级的拓扑结构，旨在识别网络关键节点、推断节点间的隐含关系，发现拓扑结构的薄弱环节

1. IP级网络拓扑还原是指将目标网络的IP路径还原为拓扑图的形式，IP级拓扑图中的节点表示IP地址，节点之间的连边表示两个IP地址存在直连的链路。
2. 路由器级网络拓扑通常是利用路由别名解析技术得到IP地址和路由器的对应关系，对IP级拓扑结构进行聚合得到，拓扑结构中节点表示路由器，节点之间的连边表示两个路由器直接相连，该方法对路由别名解析的准确率和覆盖率要求较高。
3. 自治域（AS）是由一组运行相同路由策略的路由器组成，自治域网络通过入网点与相邻自治域进行通信，在PoP级拓扑图中，节点代表网络入网点，节点之间的连边代表两个入网点之间存在物理连接。PoP级拓扑是对路由器级拓扑进一步聚合得到，常用的方法有根据DNS命名规则或IP定位手段获取IP地址/路由器的地理位置信息，将具有相同地理信息的IP节点聚类为入网点。PoP级网络拓扑对于发现和验证网络关键节点具有重要意义。
4. 互联网由数万个AS组成，AS之间通过边界网关协议（BGP）交换路由信息，因此整个互联网可以看作一个AS级拓扑图。AS路径数据主要从美国RouteViews项目或欧洲互联网注册管理中心RIPE-RIS发布的BGP路由表得到。


### 4️⃣ Network Topology Analysis
- **边界节点** 有AS边界节点和地理边界节点两种情况，根据BGP协议，边界节点即网络的入网点，在跨域通信和跨地区通信中处于关键位置。边界节点识别是基于IP级拓扑，根据IP地址与AS的映射关系、IP地址与国家/地区的映射关系，对相邻两个IP节点是否位于属于相同AS、是否位于同一个国家/地区进行判断。

- **骨干节点** 是指在实际互联网结构中承担较大通信流量或处于核心路由位置的节点。骨干节点识别一方面基于复杂网络的度、介数、K-shell等参数对网络节点的重要性进行评估，另一方面结合实际网络环境和通信系统架构对重要节点进行筛选和验证。

- **节点关系推理** 是指面向具体应用场景，在相同层级的拓扑结构中挖掘相同类型节点之间的逻辑关系和连通关系，在对不同层级网络拓扑中，建立不同类型节点间的映射关系。



## Ref
[👍 网络空间资产探测与分析技术研究 | 国家保密局]: http://www.gjbmj.gov.cn/n1/2022/0422/c411145-32406257.html

网络空间测绘技术涉及网络探测、协议分析、规则匹配、拓扑分析、大数据、应用安全、可视化表达等诸多领域。本文从网络资产探测和拓扑结构分析两个方面，对相关技术及其面临的挑战进行阐述。

...

面临的挑战及解决思路
- 由于IPv6地址空间规模庞大且分布稀疏，IPv4网络探测方法不适用于IPv6地址空间，然而IPv6地址在地理空间分配和运营管理方面具有一定的规律，IPv6地址空间预测技术利用这种规律为IPv6高效探测提供了新思路。首先通过开源数据集或被动探测等途径收集一定数量的活跃IPv6，作为种子地址，然后对种子地址进行建模，采用地址生成算法得到预测IPv6地址，最后对预测地址进行探测、验证。这种基于规则和统计规律的IPv6地址探测方法核心在于地址建模分析和地址生成算法，优化这些算法是提高活跃IPv6地址发现效率的关键，也是IPv6地址空间探测的重要研究方向。

- 物联网体系结构复杂，海量的智能终端设备没有统一的技术标准，网络层、应用层存在不同的网络协议和体系结构，因此传统的网络资产识别技术不能满足物联网设备识别需要。对于配置传感器的物联网设备，通常利用其传感器的相关特征进行设备识别，而对于互联网上没有配置传感器的物联网设备识别则采用人工标记和机器学习相结合的方法实现。实验证明，采用人工标记的方式提取物联网设备指纹作为先验知识，是有效增加指纹准确性和设备识别覆盖程度的最有效最直接的途径。

未来的网络资产测绘预计将朝着以下3方面发展：
- 网络空间测绘将在内网、专网等方向发展，被广泛应用于内网、专网的资产管理，帮助用户单位建立健全网络资产管理流程，促进资产设备的规范使用；
- 网络资产探测在资产识别方面将进一步结合人工智能技术，为网络资产指纹的自动化提取和未知设备识别提供新的方法和理念，提高网络资产探测和识别的效率和准确率；
- 网络空间拓扑分析将在网络实体定位和多层级映射方面，融合地理数据库、资产数据库、漏洞库、威胁情报等资源库，分别从联通关系和逻辑关系的角度建立网络空间实体之间多维度、多层次的拓扑结构图。


[棚改的高峰与退潮：货币化安置政策成拐点]: https://finance.sina.cn/2020-11-26/detail-iiznezxs3892038.d.html

[Zoomeye — Find open servers, Webcams, Porn sites vulnerabilities | Medium]: https://medium.com/@danielwebimprints/zoomeye-find-open-servers-webcams-porn-sites-vulnerabilities-c8096e05b45

[👍 最受黑客和安全专家青睐的10款搜索引擎]: https://mp.weixin.qq.com/s/Shtq_iu95lyhnOFDKzc2kA