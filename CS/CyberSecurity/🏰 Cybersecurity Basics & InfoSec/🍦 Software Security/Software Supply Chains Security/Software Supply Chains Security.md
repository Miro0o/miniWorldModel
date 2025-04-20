# Software Supply Chains Security

[TOC]



## Res
### Related Topics
↗ [LLM & Supply Chain Security](../../../../Academics%20🎓/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Analysis/LLM%20&%20Supply%20Chain%20Security.md)

↗ [Vulnerability Disclosure & Discovery (Malicious Code Detection)](../🪆%20Software%20Analysis%20&%20Binary%20Engineering/Vulnerability%20Disclosure%20&%20Discovery%20(Malicious%20Code%20Detection)/Vulnerability%20Disclosure%20&%20Discovery%20(Malicious%20Code%20Detection).md)
↗ [Malicious Code & Behavior Discovery](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/Malicious%20Code%20&%20Behavior%20Discovery.md)
↗ [Vulnerability Discovery（漏洞检测）](../🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Discovery（漏洞检测）/Vulnerability%20Discovery（漏洞检测）.md)
- ↗ [Vulnerability Scanners](../🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Discovery（漏洞检测）/🔍%20Vulnerability%20Scanners/Vulnerability%20Scanners.md)

↗ [CLI Package & Software Management](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/📦%20CLI%20Package%20&%20Software%20Management/CLI%20Package%20&%20Software%20Management.md)
↗ [Programming Tools Chain](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/Programming%20Tools%20Chain.md)

↗ [Cloud Computing & Cloud Native](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)
- ↗ [Dev(Sec)Ops (Application Level Engineering)](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev(Sec)Ops%20(Application%20Level%20Engineering)/Dev(Sec)Ops%20(Application%20Level%20Engineering).md)

↗ [SDLC (Software Development Life Circle) & SDLC Models](../../../../Software%20Engineering/Software%20Development%20Pattern/🔄%20SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models/SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models.md)
↗ [SDL (Secure Development Lifecycle)](SDL%20(Secure%20Development%20Lifecycle).md)

↗ [Container Registry & Artifacts Management](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev(Sec)Ops%20(Application%20Level%20Engineering)/🛬%20Continuous%20Delivery/Provisioning/Container%20Registry%20&%20Artifacts%20Management/Container%20Registry%20&%20Artifacts%20Management.md)
↗ [Code Management (CM) (Git Implementations)](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev(Sec)Ops%20(Application%20Level%20Engineering)/🛫%20Continuous%20Integration/Code%20Management%20(CM)%20(Git%20Implementations)/Code%20Management%20(CM)%20(Git%20Implementations).md)
↗ [CLI Package & Software Management](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/📦%20CLI%20Package%20&%20Software%20Management/CLI%20Package%20&%20Software%20Management.md)

↗ [Jfrog](../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/🛌%20Security%20Industry%20&%20Companies/Jfrog.md)


### Other Resources



## Intro
### Software Supply Chains Security 🆚 Software Development Life Circle (SDLC)
> ↗ [SDL (Secure Development Lifecycle)](SDL%20(Secure%20Development%20Lifecycle).md)
> ↗ [SDLC (Software Development Life Circle) & SDLC Models](../../../../Software%20Engineering/Software%20Development%20Pattern/🔄%20SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models/SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models.md)

> 🔗 [软件供应链安全白皮书 (2021) | 悬镜安全 - 中国信通院](http://mogesec.com/wp-content/uploads/2021/12/软件供应链安全白皮书（2021）.pdf)

![](../../../../../Assets/Pics/Screenshot%202024-02-28%20at%202.02.47PM.png)
<small>软件供应链生命周期与软件生命周期的关系</small>

行业内对软件供应链有多种理解，其中包括三种主流理解方式：
1. 第一种是将软件供应链单纯视为以开源组件为主的第三方组件供应链条；
2. 第二种是将其视为软件生产过程供应链条，包括第三方组件、开发工具和开发环境等要素；
3. 第三种是将其视为从原材料开始加工成消费者手中的最终产品并实施运营过程的全流程链条。

由于前两种理解存在不同程度的片面性，因此本白皮书中以第三种理解作为阐述基础。
- **传统供应链**的概念可以理解为一个由各种组织、人员、技术、活动、信息和资源组成的将商品或服务从供应商转移到消费者手中的过程，这一过程从原材料开始，将其加工成中间组件乃至最终转移到消费者手中的最终产品。软件供应链是根据软件生命周期中一系列环节与传统供应链的相似性，由传统供应链扩展而来。
- **软件供应链的生命周期**包括原始组件、集成组件、软件产品及产品运营四个环节（如上图所示）。在软件供应链中，原始组件是原材料，集成组件是中间组件，软件产品是交到消费者手中的商品，产品运营是为消费者提供的服务保障产品的正常运行。因此，软件供应链可以理解为软件和系统的从生产到交付全过程，是一套自动化、标准化及规模化的持续交付的流水线。通过设计和开发阶段，将生产完成的软件产品通过软件交付渠道从软件供应链运输给最终用户。

原始组件、集成组件、软件产品及产品运营四部分涵盖保障软件供应链安全涉及的诸多关键安全要素，了解软件供应链的每一个阶段及流程中出现的源代码、工具及集成组件对于构建安全可靠的软件供应链至关重要。

根据软件供应链的定义，**软件供应链安全**可以被理解为软件生产的整个过程中软件设计与开发的各个阶段来自编码过程、工具、设备、供应商以及最终交付渠道所共同面临的安全问题。

对软件从业者来说，实际需要关注的是自身的软件产品开发过程和运营过程，也就是软件产品和产品运营这两个阶段，软件供应链中的原始组件和集成组件阶段的安全问题应由相应的组件供应商解决。做个类比，假如我们需要生产一部手机，我们需要关注的是手机生产和上市运营。在生产手机过程发生前，我们需要选择可信的零部件供应商，从之购买合格的零部件。而并不需要接管供应商的生产流程，帮助供应商做质量管理。**软件产品阶段和产品运营阶段的加总，实际上就是传统概念中的软件生命周期**。软件生命周期可以划分为 4 个主要阶段：设计阶段、编码阶段、发布阶段、运营阶段（如上图所示）。这也是软件供应链安全治理中真正需要关注的部分。



## 🗡️ Software Supply Chains Risk Analysis
### Challenges Face Software Supply Chains
> 🔗 https://36kr.com/p/2407207901078534

腾讯安全开发安全专家刘天勇表示，从技术角度看，软件供应链安全的治理的难点可以分成三部分：
1. **检测门槛高**
	1. 开源组件的来源复杂，依靠单一的技术手段难以做到全面覆盖。
	2. 市面上常见的开源组件检测技术是基于源代码的SCA分析，但基于源码的SCA难以覆盖软件供应链交接界面的第三方软件成品。
2. **修复成本高**
	1. 在企业开始做开源组件的风险治理的时候，存量业务往往会发现大量的漏洞，但这些业务大多数处于上线运营的阶段，修复的过程对研发资源是一个较大的消耗，同时对安全团队来说也是较大的推动阻力。
3. **攻击影响范围广**
	1. 第三方开源组件的使用，间接扩大了软件的受攻击面，针对上游供应链环节的漏洞挖掘和恶意利用，能够快速覆盖大量的下游软件，同时相关的攻击具有较高的隐蔽性，常用的安全检测手段难以进行全面的防御，目前软件供应链攻击已经成为攻防演练中非常常用的攻击手段。
	2. 此外，供应商对产品安全性的重视程度不足、开发人员安全开发能力有限等，导致第三方供应商产品安全质量参差不齐，也加大了软件供应链安全治理的难度。



## 🤺 Software Supply Chains Security Governance /Solutions
![](../../../../../Assets/Pics/Screenshot%202024-02-28%20at%202.02.47PM.png)
<small>软件供应链生命周期与软件生命周期的关系</small>


### 0️⃣ Software Supply Chains Security Governing Architecture
> 🔗 https://36kr.com/p/2407207901078534

事实上，软件供应链安全问题是人、流程和知识的问题，而非纯粹的技术问题。 
在解决软件研发过程的供应链安全问题时，需要贴合SDLC（软件开发生命周期）考虑供应链安全风险。
为此，Goolge提出了SLSA（Supply-chain Levels for Software Artifacts）框架，微软提出了SCIM（Supply Chain Integrity Model）框架以及CNCF（云原生计算基金会）的软件供应链最佳实践，三种框架都强调对于源代码、第三方依赖、构建系统、制品、发布、部署的安全性。
#### DevSecOps
↗ [Dev(Sec)Ops (Application Level Engineering)](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev(Sec)Ops%20(Application%20Level%20Engineering)/Dev(Sec)Ops%20(Application%20Level%20Engineering).md)
#### Microsoft SDL (Security Development Lifecycle)
↗ [SDL (Secure Development Lifecycle)](SDL%20(Secure%20Development%20Lifecycle).md)


### 1️⃣ Software Design /Plan Stage


### 2️⃣ Software Dev /Build Stage
#### SCA & SBOM
↗ [SCA (Software Composition Analysis) & SBOM](🤔%20Software%20Supply%20Chains%20Security%20Related%20Projects/SCA%20(Software%20Composition%20Analysis)%20&%20SBOM/SCA%20(Software%20Composition%20Analysis)%20&%20SBOM.md)
#### Code Analysis & Software Testing
↗ [Software Testing](../../../../Software%20Engineering/Software%20Maintenance%20&%20Operations%20Management/🧪%20Software%20Testing/Software%20Testing.md)
↗ [Network Penetration (Pen-testing)](../../../Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Network%20Penetration%20(Pen-testing).md)
↗ [Vulnerability Disclosure & Discovery (Malicious Code Detection)](../🪆%20Software%20Analysis%20&%20Binary%20Engineering/Vulnerability%20Disclosure%20&%20Discovery%20(Malicious%20Code%20Detection)/Vulnerability%20Disclosure%20&%20Discovery%20(Malicious%20Code%20Detection).md)

> **静态应用程序安全测试(SAST)**、**动态应用程序安全测试(DAST)**、**交互式应用程序安全测试 (IAST)** 和**运行时应用程序扫描保护(RASP)工具**，以及明智地使用渗透测试，可以帮助企业测试他们自己的内部代码，并提供对第三方代码的进一步检查，以作为应对风险的后盾。
> 
> 相比于SCA和SBOM产品依赖于已知的、先前发现的漏洞，彻底的应用程序渗透评估可能会在检查第三方库和框架时识别出脆弱的代码使用情况，而这些代码以前可能在其他地方没有报告过。
> 
> 此外，共**享机密扫描和管理**也正在从一个独立的工具类别快速转变为一个功能，该功能正在融入软件供应链安全工具的各个方面。这是因为在开发和实际环境中，针对嵌入在源代码、配置文件和基础设施代码中的机密数据的网络攻击活动仍然猖獗，因此迫切需要解决这个问题。
> 
> 此外，依赖关系管理和分析、受信任的**存储库和注册中心**、**安全代码签名**、**CI/ CD管道安全性**、**第三方风险管理平台**、**IaC安全**和**CNAPP**，都是软件供应链安全治理要重点关注的对象。


### 3️⃣ Software Release /Production Stage


### 4️⃣ Software Operation /Maintenance Stage



## Ref
[👍 软件供应链安全白皮书 (2021) | 悬镜安全 - 中国信通院]: http://mogesec.com/wp-content/uploads/2021/12/软件供应链安全白皮书（2021）.pdf

- **1 软件供应链概述**
	- 1.1 软件供应链与传统供应链之间的共性及差异性
	- 1.2 软件供应链的发展历程
	- 1.3 开源和云原生时代改变了传统的软件供应链
- **2 软件供应链安全现状**
	- 2.1 国内外软件供应链安全发展现状
		- 2.1.1 国际软件供应链安全发展现状
		- 2.1.2 国内软件供应链安全发展现状
	- 2.2 软件供应链的安全挑战
		- 2.2.1 国际竞争环境加剧，软件供应链完整性遭遇挑战
		- 2.2.2 软件开源化趋势增强，安全风险加剧
		- 2.2.3 软件复杂度增加，软件供应链每一环节均存在风险
		- 2.2.4 难以处理敏捷开发与安全成本之间的平衡
- **3 软件供应链风险分析**
	-  3.1 软件供应链风险概述
		- 3.1.1 软件供应链风险现状
		- 3.1.2 软件供应链风险因素分析
	- 3.2 软件供应链的漏洞类型
		- 3.2.1 漏洞来源类型
		- 3.2.2 漏洞状态类型
	- 3.3 软件供应链的攻击类型
		- 3.3.1 预留后门
		- 3.3.2 开发工具污染
		- 3.3.3 升级劫持
		- 3.3.4 捆绑下载
		- 3.3.5 源代码污染
- **4 软件供应链安全治理方法**
	- 4.1 体系构建阶段
		- 4.1.1 SDL 软件安全开发生命周期
		- 4.1.2 DevSecOps
	- 4.2 设计阶段
		- 4.2.1 软件供应商风险管理流程
		- 4.2.2 软件供应商评估模型
		- 4.2.3 软件供应商风险管理的作用
	- 4.3 编码阶段
		- 4.3.1 构建详细的软件物料清单 (SBOM)
		- 4.3.2 使用基于 SCA 技术的工具
	- 4.4 发布运营阶段
		- 4.4.1 建立成熟的应急响应机制
		- 4.4.2 构建完善的运营保障工具链
- **5 软件供应链安全应用实践**
	- 5.1 可信研发运营安全能力成熟度模型
	- 5.2 云安全共享责任模型
	- 5.3 Grafeas 开源计划

[软件供应链安全现状分析与对策建议]: https://www.secrss.com/articles/56780

[👍 软件供应链安全如此重要，但为什么难以解决？| 36Kr]: https://36kr.com/p/2407207901078534

软件供应链安全如今已经成了一个世界性难题。从2021年底Apache Log4j“核弹级”风险爆发，时至今日影响仍然存在，保障软件供应链安全已成为业界关注焦点。

[软件Supply Chain 安全：它是什么，为什么至关重要 | OPSWAT]: https://chinese.opswat.com/blog/mastering-software-supply-chain-security

[👍 Hunting for Malicious Packages on PyPI]: https://jordan-wright.com/blog/post/2020-11-12-hunting-for-malicious-packages-on-pypi/

[👍 Finding malicious PyPI packages through static code analysis: Meet GuardDog]: https://securitylabs.datadoghq.com/articles/guarddog-identify-malicious-pypi-packages/

[👍 Hunting for Malicious Packages on PyPI]: https://jordan-wright.com/blog/post/2020-11-12-hunting-for-malicious-packages-on-pypi/

![|400](../../../../../Assets/Pics/Pasted%20image%2020240525190610.png)

