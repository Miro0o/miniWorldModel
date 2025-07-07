# Risk Assessment

[TOC]



## Res
### Related Topics
↗ [Risk Management /Risk](../Risk%20Management.md#😱%20Risk)



## Intro
An important aspect of information security and risk management is recognizing the value of information and defining appropriate procedures and protection requirements for the information. Not all information is equal and so not all information requires the same degree of protection. This requires information to be assigned a [security classification](https://en.wikipedia.org/wiki/Classified_information).
1. The first step in information classification is to identify a member of senior management as the owner of the particular information to be classified. 
2. Next, develop a classification policy. The policy should describe the different classification labels, define the criteria for information to be assigned a particular label, and list the required [security controls](https://en.wikipedia.org/wiki/Security_controls) for each classification.

网络空间安全风险评估就是从风险管理角度，运用科学的方法和手段，系统地分析信息系统所面临的威胁及其存在的脆弱性，评估安全事件一旦发生可能造成的危害程度，提出有针对性的抵御威胁的防护对策和整改措施；为防范和化解网络空间安全风险，将风险控制在可接受的水平，从而为最大限度地保障网络空间安全提供科学依据。
**（存在风险，但不一定造成损失）**

![](../../../../../Assets/Pics/Screenshot%202023-11-03%20at%201.32.25PM.png)

信息系统的安全风险信息是**动态变化**的，只有动态的信息安全评估才能发现和跟踪最新的安全风险。所以信息安全评估是一个**长期持续**的工作，通常应该每隔1-3年就进行一次全面安全风险评估。
- 风险评估是分析确定风险的过程。
- 风险评估的目的是控制风险。
- 风险评估是风险管理的起点和基础环节。
- 风险管理是在倡导适度安全。风险管理的目的不是消除风险，也无法做到完全消除风险，而是将风险控制在最小的可接受范围内。

![](../../../../../Assets/Pics/Screenshot%202023-11-03%20at%201.35.16PM.png)


### 风险评估，等保测评，安全检查
等保测评、安全检查都是在既定安全基线的基础上开展的符合性测评，其中等保测评是符合国家安全要求的测评，安全检查是符合行业主管安全要求的符合性测评。

而风险评估是在国家、行业安全要求的基础上，以被评估系统特定安全要求为目标而开展的风险识别、风险分析、风险评价活动。


### 国家对开展风险评估工作的政策要求
>《国家信息化领导小组关于加强信息安全保障工作的意见》（中办发[2003]27号）中明确提出：
>“要重视信息安全风险评估工作，对网络与信息系统安全的潜在威胁、薄弱环节、防护措施等进行分析评估，综合考虑网络与信息系统的重要性、涉密程度和面临的信息安全风险等因素，进行相应等级的安全建设和管理”
> 
>《国家网络与信息安全协调小组〈关于开展信息安全风险评估工作的意见〉》（国信办【2006】5号文）中明确规定了风险评估工作的相关要求：
> - 风险评估的基本内容和原则
> - 风险评估工作的基本要求
> - 开展风险评估工作的有关安排
> 
> 为落实《国家电子政务工程建设项目管理暂行办法》（发改委[2007]55号令）对风险评估的要求， 发改高技【2008】2071号文件《关于加强国家电子政务工程建设项目信息安全风险评估工作的通知》提出了具体要求：（相当于“信息安全审计”）
> - 电子政务工程建设项目应开展信息安全风险评估工作
> - 评估的主要内容应包含：资产、威胁、脆弱性、已有的安全措施和残余风险的影响等
> - 项目建设单位应在试运行期间开展风险评估工作，作为项目验收的重要依据
> - 项目验收申请时，应提交信息安全风险评估报告
> - 系统投入运行后，应定期开展信息安全风险评估


### 风险评估工作承担单位
![](../../../../../Assets/Pics/Screenshot%202023-11-03%20at%201.53.06PM.png)



## Risk Assessment Workflow
![](../../../../../Assets/Pics/Screenshot%202023-10-08%20at%2011.11.33AM.png)


### 1️⃣ Risk Assessment Setup (风险评估准备)


### 2️⃣ Risk Factors Recognition (风险要素识别)
#### 1️⃣ Assets Assessment & Evaluation
↗ [Cyberspace Assets](../🐄%20Cyberspace%20Assets/Cyberspace%20Assets.md)
↗ [Cyberspace Assets Mapping & Management](../🐄%20Cyberspace%20Assets/🧨%20Cyberspace%20Assets%20Mapping%20&%20Management/Cyberspace%20Assets%20Mapping%20&%20Management.md)
↗ [Cyber Assets Attack Surface Management (CAASM)](../🐄%20Cyberspace%20Assets/🚀%20Attack%20Surface%20Management%20(ASM)/Cyber%20Assets%20Attack%20Surface%20Management%20(CAASM)/Cyber%20Assets%20Attack%20Surface%20Management%20(CAASM).md)

资产的评估是对资产的价值或重要程度进行评估，资产本身的货币价值是资产价值的体现，但更重要的是资产对组织关键业务的顺利开展乃至组织目标实现的重要程度。由于多数资产不能以货币形式的价值来衡量，**资产评价很难以定量的方式来进行，多数情况下只能以定性的形式，依据重要程度的不同划分等级**
- 定性：非常重要 - 重要 - 比较重要 - 不太重要 - 不重要
- 定量：5 - 4 - 3 - 2 - 1

信息资产的机密性、完整性、可用性、可审计性和不可抵赖性等是评价资产的安全属性
可以先分别对资产在以上各方面的重要程度进行评估，然后通过一定的方法进行综合，可得资产的综合价值
#### 2️⃣ Threats Assessment & Evaluation
↗ [Cybersecurity Threats & Attacks](../🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)
#### 3️⃣ Vulnerability Assessment & Evaluation
↗ [Vulnerabilities](../🦟%20Vulnerabilities/Vulnerabilities.md)
↗ [Software Vulnerability & Weakness](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Software%20Vulnerability%20&%20Weakness.md)
#### 确认已有的安全控制措施
考虑：
- 预防性措施
- 检测性措施
- 纠正性措施
- 威慑性措施


### 3️⃣ Risk Analysis ⭐ (风险分析)
![](../../../../../Assets/Pics/Screenshot%202023-11-03%20at%202.00.55PM.png)
#### 🎯 Quantified Risk Analysis (定量分析)
定量风险分析试图是在风险评估与成本效益分析期间收集的各个组成部分计算客观数字值，定量风险分析更具客观性
- 例如，用替换成本、生产率损失成本、品牌名誉成本以及其他直接和间接商业价值来估计各项资产的真实价值

定量分析主要试图从财务数字上对安全风险进行评估，得出可以量化的风险分析结果，准确度量风险的可能性和损失量。因为定量分析处理数字和金额价值，它必须有公式

定量评估：
- 运用数量指标来对风险进行评估
- 采用量化的数值描述后果（估计出可能损失的金额）和可能性（概率或频率）
##### 👉 因子分析法
基于期望损失的风险评估方法
基于期望损失效用的风险评估方法

期望年度损失法
期望年度损失**ALE**（**Annual Loss Expectancy**）
##### 👉 聚类分析法
##### 👉 时序模型
##### 👉 回归模型
##### 👉 风险图法
##### 👉 决策树法
#### 🎯 Qualified Risk Analysis (定性分析)
定性评估：
- 依据研究者的知识、经验、历史教训、政策走向及特殊变例等非量化资料对风险做出判断
- 采用文字形式或叙述性数值范围描述风险的影响程度和可能性的大小（如高、中、低等）

定性风险分析在风险评价时，往往需要凭借分析者的经验和直觉，或者业界的标准和惯例，为风险诸要素的大小或高低程度定性分级。
- 定性风险分析更具主观性
- 后果或影响的定性量度（示例）
##### 👉 矩阵法
##### 👉 因素分析法
##### 👉 逻辑分析法
##### 👉 历史比较法
##### 👉 德尔斐法
#### 🎯 Semi-Quantified Risk Analysis (半定量分析)
在风险分析过程中综合使用定性和定量风险分析技术对风险要素赋值的方式，实现对风险各要素的度量数值化
在实际的风险分析活动中，经常采用半定量的风险分析方法
##### 👉 相乘法
根据预设的等级划分规则判定风险结果。
依此类推，得到所有重要资产的风险值，并根据风险等级划分表，确定风险等级。
#### 🎯 Comprehensive Risk Analysis (综合分析)
定量分析是定性分析的基础和前提；定性分析则是灵魂，是形成概念，做出判断，得出结论的依靠应该将这两种方法融合起来，得到综合的评估方法
- 基于模糊综合评价的风险评估方法
- 基于灰色理论的风险评估方法
- 基于D-S证据理论的风险评估方法
- 基于机器学习的风险评估方法
##### 👉 The Analytic Hierarchy Process (AHP)
> 层次分析法 (The analytic hierarchy process,简称AHP)
> （20 世纪70 年代，美国著名的运筹学专家，萨蒂提出）


### 4️⃣ Risk Conviction (风险结果判定)
TBD..



## Risk Assessment Tools & Automation
网络入侵检测系统
远程评估系统
安全检测包（LSAS）
Microsoft安全基准分析器
风险评估分析工具
风险信息库工具

风险评估与管理工具
▪ 基于标准的工具，如基于NIST SP 800-30或ISO 27005开发的工具
▪ 基于知识的工具，综合各种风险分析方法，形成知识库，以此为基础完成综合评估
▪ 基于模型的工具，对典型系统的资产、威胁、脆弱性建立量化或半量化的模型

系统基础平台风险评估工具
▪ 脆弱性扫描工具：基于网络的扫描器、基于主机的扫描器、分布式网络扫描器、数据库脆弱性扫描器
▪ 渗透性测试工具：黑客工具、脚本文件

风险评估辅助工具
▪ 检查列表、入侵检测系统、安全审计工具、拓扑发现工具和资产信息收集系统，用于评估过程参考的评估指标库、知识库、漏洞库、算法库和模型库



## Ref

