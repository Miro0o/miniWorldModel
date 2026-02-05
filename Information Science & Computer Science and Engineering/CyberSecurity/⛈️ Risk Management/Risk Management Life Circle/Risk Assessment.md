# Risk Assessment

[TOC]



## Res
### Related Topics
↗ [Risk Management /Risk](../Risk%20Management.md#😱%20Risk)

↗ [Network Penetration (Pen-testing)](../../Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Network%20Penetration%20(Pen-testing).md)

↗ [Risk Countermeasures & Security Control](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Risk%20Countermeasures%20&%20Security%20Control.md)
- ↗ [Security Audit & Security Audit Trail](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md)

↗ [ICT System Reliability (Correctness) & Verification](../🦟%20Vulnerabilities/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)

↗ [Software Quality Assurance (SQA)](../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)
- ↗ [Software Testing](../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)

↗ [Vulnerabilities](../🦟%20Vulnerabilities/Vulnerabilities.md)
↗ [Software Vulnerability & Weakness](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Software%20Vulnerability%20&%20Weakness.md)
- ↗ [Vulnerability Assessment (VA)（漏洞评估）](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Phases/📌%20Vulnerability%20Government（漏洞管控）/📊%20Vulnerability%20Assessment%20(VA)（漏洞评估）/Vulnerability%20Assessment%20(VA)（漏洞评估）.md)
- ↗ [Techniques - Vulnerability Disclosure & Discovery](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Techniques/Techniques%20-%20Vulnerability%20Disclosure%20&%20Discovery.md)
	- ↗ [Fuzzing (Concrete Execution)](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Fuzzing%20(Concrete%20Execution)/Fuzzing%20(Concrete%20Execution).md)


### Other Resources



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

![](../../../../../Assets/Pics/Screenshot%202023-11-03%20at%201.53.06PM.png)


### Motivations of Risk Assessment
![](../../../../../Assets/Pics/Pasted%20image%2020251001215700.png)
#### Compliance (合规)
**等保测评，安全检查，风险评估**
- 等保测评、安全检查都是在既定安全基线的基础上开展的符合性测评，其中等保测评是符合国家安全要求的测评，安全检查是符合行业主管安全要求的符合性测评。
- 而风险评估是在国家、行业安全要求的基础上，以被评估系统特定安全要求为目标而开展的风险识别、风险分析、风险评价活动。

> ==国家对开展风险评估工作的政策要求==
> 
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

#### Risk Reduction

#### Resilience Through Attack Simulation



## Risk Assessment Workflow
![](../../../../../Assets/Pics/Screenshot%202023-10-08%20at%2011.11.33AM.png)


### 1️⃣ Risk Assessment Setup (风险评估准备)


### 2️⃣ Risk Factors Recognition (风险要素识别) ⭐
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
↗ [Cryptographic Attacks & Rubber-Hose Cryptanalysis](../../🚬%20Cryptology%20&%20Secure%20Communication/🤮%20Cryptanalysis/Cryptographic%20Attacks%20&%20Rubber-Hose%20Cryptanalysis.md)

![](../../../../Assets/Pics/Screenshot%202025-10-18%20at%2017.29.20.png)
#### 3️⃣ Vulnerability Assessment & Evaluation
↗ [Vulnerabilities](../🦟%20Vulnerabilities/Vulnerabilities.md)
- ↗ [Vulnerability Assessment (VA)（漏洞评估）](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Phases/📌%20Vulnerability%20Government（漏洞管控）/📊%20Vulnerability%20Assessment%20(VA)（漏洞评估）/Vulnerability%20Assessment%20(VA)（漏洞评估）.md)
	- ↗ [CVSS (Common Vulnerability Scoring System)](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Phases/📌%20Vulnerability%20Government（漏洞管控）/📊%20Vulnerability%20Assessment%20(VA)（漏洞评估）/CVSS%20(Common%20Vulnerability%20Scoring%20System).md)
↗ [Software Vulnerability & Weakness](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Software%20Vulnerability%20&%20Weakness.md)
#### 🤔 Existing Risks & Security Control Mechanisms
↗ [Risk Countermeasures & Security Control](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Risk%20Countermeasures%20&%20Security%20Control.md)

SOURCES OF RISK
- Technical vulnerability
- A flaw with a negative outcome
- Attacker has access to the flaw
- Attacker has the capability to exploit the flaw
- Unsafe procedures and processes
- Problematic dependencies or architecture
- Lack of training
- Lack of inventory management

Security Control Methods:
- Preventative Controls
	- Firewalls and anti-virus software to block malicious activities
	- Data encryption to protect data integrity and confidentiality
	- Access control measures to restrict unauthorized entry
- Detective Controls
	- Intrusion detection systems (IDS)
	- Security event log management and analysis
	- Regular audits and vulnerability scans
- Corrective Controls
	- Patch management to fix vulnerabilities that might have been exploited
	- Backup and recovery procedures to restore lost or compromised data
	- Incident response teams
- Compensating Controls
	- Enhanced monitoring
	- Additional verification procedures
- Deterrent Controls
	- Warning signs
	- Legal information
- Physical Controls
	- Access control systems
	- Security guards
	- Fences, doors, locks
	- Alarm systems


### 3️⃣ Risk Analysis ⭐ (风险分析)
![](../../../../Assets/Pics/Screenshot%202025-10-18%20at%2017.13.51.png)

![](../../../../../Assets/Pics/Screenshot%202023-11-03%20at%202.00.55PM.png)
#### 🎯 Quantative Risk Analysis (定量分析)
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
#### 🎯 Qualitative Risk Analysis (定性分析)
定性评估：
- 依据研究者的知识、经验、历史教训、政策走向及特殊变例等非量化资料对风险做出判断
- 采用文字形式或叙述性数值范围描述风险的影响程度和可能性的大小（如高、中、低等）

定性风险分析在风险评价时，往往需要凭借分析者的经验和直觉，或者业界的标准和惯例，为风险诸要素的大小或高低程度定性分级。
- 定性风险分析更具主观性
- 后果或影响的定性量度（示例）
##### 👉 矩阵法 (Qualitative Risk Matrix)
Uncertainty of outcome
Potential for loss
Measured in probability and impact
Inherent in any decision making

![](../../../../Assets/Pics/Screenshot%202025-10-18%20at%2017.02.09.png)

![](../../../../Assets/Pics/Screenshot%202025-10-18%20at%2017.02.46.png)

![](../../../../Assets/Pics/Screenshot%202025-10-18%20at%2017.03.02.png)

![](../../../../Assets/Pics/Screenshot%202025-10-18%20at%2017.03.15.png)
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



## Risk Assessment Tools & Methodologies
> ↗ [Risk Countermeasures & Security Control](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Risk%20Countermeasures%20&%20Security%20Control.md)


风险评估与管理工具
- 基于标准的工具，如基于NIST SP 800-30或ISO 27005开发的工具
- 基于知识的工具，综合各种风险分析方法，形成知识库，以此为基础完成综合评估
- 基于模型的工具，对典型系统的资产、威胁、脆弱性建立量化或半量化的模型

风险评估工具
- 脆弱性扫描工具：基于网络的扫描器、基于主机的扫描器、分布式网络扫描器、数据库脆弱性扫描器
- 渗透性测试工具：黑客工具、脚本文件
- 远程评估系统
- 代码审计
- 软件测试 /漏洞挖掘
风险评估辅助工具
- 检查列表、入侵检测系统、安全审计工具、拓扑发现工具和资产信息收集系统
- 用于评估过程参考的评估指标库、知识库、漏洞库、算法库和模型库

风险评估分析工具
- Microsoft安全基准分析器



## Risk (Security) Assessment Project Management
SECURITY ASSESSMENTS
- Measure exposure and risk
	- Investigate level of control
	- Measure effectiveness of the sum of relevant security controls
	- Assess detection capabilities
- Scope versus constraints
- Usually only aimed at gaps

SECURITY ASSESSMENT RULES
- The assessment needs to be reproduceable
- Methods and methodology are key
- Reporting metrics matter
- Keep objectives in mind e.g. no one is going to pay for your exploit
- Provide transparency
- Ensure flexibility
- Write meaningful recommendations and mitigation paths

PREREQUISITES
- Source IP addresses to test from
- Target scope
- User accounts: 2x accounts per role
- Source code and build environment assets
- Access card, seating location
- Waiver/permission to connect own equipment
- Documentation
- Network & application overview
- File and directory listing
- Expected input & output of API calls
- Testing time window
- Contact persons

PREREQUISITE CHECKLIST
- Has the client’s firewall and cloud white-listed your IP addresses?
- Have your IP addresses been white-listed?
- Is the application up and running and reachable?
- Are the user accounts: Created? Activated? Tested? Correct access?
- Does the application work as expected?
- Did the client reserve a seating area?
- Is the network reachable/authenticated?
- Does the network connectivity work towards the target scope?

PREREQUISITE TECHNICAL CHECKLIST
- Check your testing equipment: hardware, virtual machines, testing tools, etc
- Power adapters
- Encrypted data carriers
- Internet capable devices
- Network cables and adapters
- Headphones

MANAGING RISK WHILE TESTING
- Use of network and system resources
- Guarantee availability of target systems
- Guarantee availability of testing operations
- Proactive communication
- On-going monitoring of testing efforts
- Clearances and background checks of assessors

What is important when managing a security assessment project?
- Scope
- Expectation management
- Cleary defined deliverables
	- Report deliverable
		- Date, time and location
		- Name of assessors
		- Executive summary
		- Terminology used
		- Tested scope and any scope deviations
		- Approach, methodology, metrics and prerequisites used
		- Finding details and root causes
		- Recommendations
		- Technical Appendices`
- Communication
- Decision making and deviations during the assessment
- Tracking progress and goals
- Time management

POSSIBLE CHALLENGES
- Prerequisites are not met
- Functionality not available or not working as expected
	- FAILED EXPECTATIONS
		- “We thought you would be stealthy”
		- “We don’t think finding x is valid, please remove it”
		- “Can you remove finding x because it will upset our customer”
		- ”Why didn’t you write anything positive about us?”
		- “Can you add a statement that we have really good security?”
		- “We fixed the vulnerabilities during the test so don’t report them”
		- “Please remove all platform findings, that’s not for our team”
- User accounts do not work or lack privileges
- Unresponsive or slow application
- Stability issues with application
- Scope deviations or “scope creep”
	- SCOPE CREEP EXAMPLES
		- “We added some functionality”
		- “Surprise! It’s not Java, it’s SWIFT…”
		- ”We changed the architecture… a bit. It’s in the cloud now”
		- It’s not 10 IP addresses, it’s 100… but who’s counting, right?
		- “Can I sit next to you?”
		- “We are running some builds and updating as you test”



## Ref
