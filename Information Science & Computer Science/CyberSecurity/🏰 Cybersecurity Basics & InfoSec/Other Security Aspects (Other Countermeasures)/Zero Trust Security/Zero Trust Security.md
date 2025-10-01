# Zero Trust Security

[TOC]



## Res
### Related Topics
↗ [Zero-Knowledge Proof (ZKP)](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Object-Based%20Authentication%20Mechanism/Human-Oriented%20Authentication%20(鉴别对象为人)/Zero-Knowledge%20Proof%20(ZKP)/Zero-Knowledge%20Proof%20(ZKP).md)


### Other Resources
🔗 https://www.microsoft.com/en-us/security/business/zero-trust
Zero Trust | Microsoft



## Intro
### Background
随着企业数字化转型的持续深入，远程办公常态化，企业业务大量上云，企业的网络边界逐渐模糊，传统基于边界的安全架构面临越来越大的挑战，以传统的内外网边界来构建信任关系的模式难以有效满足当前企业的安全建设要求。
- **外网业务暴露面大**: 远程办公趋于常态化、规模化，企业面向互联网对外发布的业务越来越多，企业员工、供应商、合作伙伴等各种角色、终端均需要访问业务，容易造成业务暴露面过大，带来被恶意扫描、攻击入侵的风险。
- **网络安全边界模糊**: 大数据、云计算、移动互联网、物联网等新技术在为企业数字化转型注入新活力的同时，也使得网络安全边界逐渐模糊，导致传统只围绕物理边界进行安全建设的防护手段逐渐失效。
- **高级威胁层出不穷**: 随着数字资产价值不断提高，黑客攻击手段不断升级，内外部高级威胁频现，传统基于静态防护的机制无法快速响应及处置。
- **静态权限遭遇瓶颈**: 传统基于IP/区域的静态访问控制机制，限制了移动性，限制了生产力，业务、权限不能按需随行；也不能动态地识别用户的安全状况，无法调整合理的访问权限，不能有效保护核心业务。


### Zero Trust Overview
零信任（Zero Trust）最早是由约翰· 金德维格（John Kindervag）担任Forrester Research副总裁兼首席分析师期间创建的。这是一次对传统安全模型假设的彻底颠覆。
- 传统模型假设：组织网络内的所有事物都应受到信任。事实上，一旦进入网络，用户（包括威胁行为者和恶意内部人员）可以自由地横向移动、访问甚至泄露他们权限之外的任何数据。这显然是个很大的漏洞。
- 零信任网络访问(Zero-Trust Network Access，以下称ZTNA)则认为：不能信任出入网络的任何内容。应创建一种以数据为中心的全新边界，通过强身份验证技术保护数据。

零信任模型假定泄露（而不是假定公司防火墙背后的所有内容均安全）并将每个请求都视为源自开放网络。零信任思想，无论请求源自何处或不管访问何种资源，都应坚守“永不信任，始终验证”的原则。每个访问请求在授予访问之前都应进行完全身份鉴别、授权和加密。应用微分段和最少特权访问原则以最大限度地减少横向迁移。利用丰富的智能和分析进行检测并及时响应异常情况。



## Ref

