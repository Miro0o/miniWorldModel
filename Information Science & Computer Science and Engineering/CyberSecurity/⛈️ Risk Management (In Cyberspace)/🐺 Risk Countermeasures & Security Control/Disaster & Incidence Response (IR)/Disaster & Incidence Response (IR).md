# Disaster /Incidence Response (IR)

[TOC]



## Res
🏠 https://www.cert.org.cn/publish/main/index.html
国家计算机网络应急技术处理协调中心（英文简称CNCERT/CC），成立于2001年8月，为非政府非盈利的网络安全技术中心，是中国计算机网络应急处理体系中的牵头单位。作为国家级应急中心，CNCERT/CC的主要职责是：按照“积极预防、及时发现、快速响应、力保恢复”的方针，开展互联网网络安全事件的预防、发现、预警和协调处置等工作，运行和管理国家信息安全漏洞共享平台（CNVD），维护公共互联网安全，保障关键信息基础设施的安全运行。  
CNCERT/CC在中国大陆31个省、自治区、直辖市设有分支机构，并通过组织网络安全企业、学校、社会组织和研究机构，协调骨干网络运营单位、域名服务机构和其他应急组织等，构建中国互联网安全应急体系，共同处理各类互联网重大网络安全事件。CNCERT/CC积极发挥行业联动合力，发起成立了中国反网络病毒联盟（ANVA）和中国互联网网络安全威胁治理联盟（CCTGA）。  
同时，CNCERT/CC积极开展网络安全国际合作，致力于构建跨境网络安全事件的快速响应和协调处置机制。截至2022年，已与82个国家和地区的285个组织建立了“CNCERT/CC国际合作伙伴”关系。CNCERT/CC是国际应急响应与安全组织FIRST的正式成员，以及亚太计算机应急组织APCERT的发起者之一，还积极参加亚太经合组织、国际电联、上合组织、东盟、金砖等政府层面国际和区域组织的网络安全相关工作。

📄 http://www.cac.gov.cn/2017-06/27/c_1121220113.htm
中央网信办关于印发《国家网络安全事件应急预案》的通知 - 中网办发文〔2017〕4号

📄 https://csrc.nist.gov/glossary/term/incident_response_plan#:~:text=Definitions%3A,organization%27s%20information%20systems(s).
NIST - The documentation of a predetermined set of instructions or procedures to detect, respond to, and limit consequences of a malicious cyber attacks against an organization’s information systems(s).



## Intro
### Computer Security Incidence
↗ [Security Incidence](Security%20Incidence.md)



## Incidence Response /Emergency Response
> 通常是指一个组织为了应对各种意外事件的发生所做的准备以及在事件发生后所采取的措施。


### Why Incidence Response? (应急响应的意义)
应急响应的意义应该主要包括两个方面：
第一、**未雨绸缪**，即在事件发生前事先做好准备，比如风险评估、制定安全计划、安全意识的培训、以发布安全通告的方式进行的预警、以及各种防范措施；

第二、**亡羊补牢**，即在事件发生后采取的措施，其目的在于把事件造成的损失降到最小。这些行动措施可能来自于人，也可能来自系统，发现事件发生后，系统备份、病毒检测、后门检测、清除病毒或后门、隔离、系统恢复、调查与追踪、入侵者取证等一系列操作。

以上两个方面的工作是相互补充的。首先，事前的计划和准备为事件发生后的响应动作提供了**指导框架**，否则，响应动作将陷入混乱，而这些毫无章法的响应动作有可能造成比事件本身更大的损失；其次，事后的响应可能发现事前计划的不足，吸取教训，从而**进一步完善安全计划**。因此，这两个方面应该形成一种正反馈的机制，逐步强化组织的安全防范体系。


### How Incidence Response 
#### Incidence Response Requisite (应急响应的能力要求)
一个企业、组织的应急响应能力体现了该企业、组织在应对计算机安全事件过程中的预准备状态、水平和机构间协调能力，要求能够在不受事件控制的情况下驾驭事件。计算机安全事件响应能力建设应该包括：
- 建立计算机安全事件应急响应策略与规划；
- 确立计算机安全事件处置与报告流程；
- 制定与计算机安全事件处置相关的第三方协调的工作指南；
- 确定计算机安全事件应急响应的组织框架、工作小组构成及其服务能力要求；
- 为计算机安全事件应急响应工作组配置相应的人力、物力、财力资源；
- 建立计算机安全事件应急响应工作组与国家、行业相关组织的联络、报告和协调机制。

#### Incidence Response Mechanisms
![](../../../../../../Assets/Pics/Screenshot%202023-11-01%20at%207.31.56PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-11-01%20at%207.31.38PM.png)



## Incidence Response Plan (IRP)
An incident response plan is a documented, written plan with 6 distinct phases that helps IT professionals and staff recognize and deal with a cybersecurity incident like a data breach or cyber attack. Properly creating and managing an incident response plan involves regular updates and training.


### IRP Frameworks
#### NIST Framework
> 🔗 https://www.hhs.gov/sites/default/files/cybersecurity-incident-response-plans.pdf

![](../../../../../../Assets/Pics/Screenshot%202023-11-02%20at%209.30.21AM.png)

> Currently in a draft phase, with an expected release date of early 2024.


### Incidence Response Lifecycle
![](../../../../../../Assets/Pics/Pasted%20image%2020231101194601.png)

![](../../../../../../Assets/Pics/Screenshot%202023-11-02%20at%209.25.58AM.png)

#### 1️⃣ Preparation
This phase will be the work horse of your incident response planning, and in the end, the most crucial phase to protect your business. Part of this phase includes:  
- Ensure [your employees are properly trained](https://www.securitymetrics.com/security-training) regarding their incident response roles and responsibilities in the event of data breach
- Develop incident response drill scenarios and regularly conduct mock data breaches to evaluate your incident response plan.
- Ensure that all aspects of your incident response plan (training, execution, hardware and software resources, etc.) are approved and funded in advance
- 进行调研分析；
- 确定应急响应的目标；
- 确定应急响应范围；
- 制定应急响应预案；
- 制定应急服务方案；
- 签署应急响应服务承诺书；
- 应急响应工具准备及更新维护；
- 组建适当的管理与实施团队；
- 制定预防和预警机制;

Your response plan should be well documented, thoroughly explaining everyone’s roles and responsibilities. [Then the plan must be tested](https://www.securitymetrics.com/blog/employee-data-security-training-tabletop-exercises) in order to assure that your employees will perform as they were trained. The more prepared your employees are, the less likely they’ll make critical mistakes.

**Questions to address**
- Has everyone been trained on security policies?
- Have your security policies and incident response plan been approved by appropriate management?
- Does the Incident Response Team know their roles and the required notifications to make?
- Have all Incident Response Team members participated in mock drills?

SEE ALSO: [5 Things Your Incident Response Plan Needs](https://www.securitymetrics.com/blog/5-things-your-incident-response-plan-needs)

#### 2️⃣ Identification
This is the process where you determine whether you’ve been breached. A breach, or incident, could originate from many different areas.
- 确定检测对象及范围
- 判断是否为安全事件
- 确定应急处理方案
- 明确检测范围与检测行为规范
- 预测应急处理方案可能造成的影响

**Questions to address**
- When did the event happen?
- How was it discovered?
- Who discovered it?
- Have any other areas been impacted?
- What is the scope of the compromise?
- Does it affect operations?
- Has the source (point of entry) of the event been discovered?

#### 3️⃣/1️⃣ Containment
When a breach is first discovered, your initial instinct may be to securely delete everything so you can just get rid of it. However, that will likely hurt you in the long run since you’ll be destroying valuable evidence that you need to determine where the breach started and devise a plan to prevent it from happening again.  

Instead, contain the breach so it doesn’t spread and cause further damage to your business. If you can, disconnect affected devices from the Internet. Have short-term and long-term containment strategies ready. It’s also good to have a redundant system back-up to help restore business operations. That way, any compromised data isn’t lost forever.  
- 明确抑制处理的目的
	- 应急抑制的目的是限制安全事件对受保护信息系统造成影响的范围和程度。应急抑制是信息安全应急响应工作中的重要环节，在信息安全事件发生的第一时间内对故障系统或区域实施有效的隔离和处理，或者根据所拥有的资源状况和事件的等级，采用临时切换到备份系统等措施降低事件损失、避免安全事件的扩散（例如蠕虫的大规模传播）和安全事件对受害系统的持续性破坏，有利于应急响应工作人员对安全事件做出迅速、准确的判断并采取正确的应对策略。
- 明确抑制处理带来的风险
	- 应急抑制过程中，重要的是确保**业务连续性**，应尽量保证在备份系统中完全运行原来的业务。如果出现资源紧张，应尽可能保证重要资产优先运行，维持最基本的业务能力。
- 抑制处理方案
	- 将检测到的结果跟客户进行充分沟通，告知客户目前面临的主要问题，及处理方法。

This is also a good time to update and patch your systems, review your remote access protocols (requiring mandatory [multi-factor authentication](https://www.securitymetrics.com/blog/new-multi-factor-authentication-clarification-and-supplement-principles-you-should-know)), change all user and administrative access credentials and harden all passwords.

**Questions to address**
- What’s been done to contain the breach short term?
- What’s been done to contain the breach long term?
- Has any discovered malware been quarantined from the rest of the environment?
- What sort of backups are in place?
- Does your remote access require true multi-factor authentication?
- Have all access credentials been reviewed for legitimacy, hardened and changed?
- Have you applied all recent security patches and updates?

SEE ALSO: [SecurityMetrics Learning Center](https://www.securitymetrics.com/learn/)

#### 3️⃣/2️⃣ Eradication
Once you’ve contained the issue, you need to find and eliminate the root cause of the breach. This means all malware should be securely removed, systems should again be hardened and patched, and updates should be applied. 
- 确定根除方案
- 明确风险
- 事件根除记录

Whether you do this yourself, or hire a third party to do it, you need to be thorough. If any trace of malware or security issues remain in your systems, you may still be losing valuable data, and your liability could increase.

**Questions to address**
- Have artifacts/malware from the attacker been securely removed?
- Has the system be hardened, patched, and updates applied?
- Can the system be re-imaged?

#### 3️⃣/3️⃣ Recovery
This is the process of restoring and returning affected systems and devices back into your business environment. During this time, it’s important to get your systems and business operations up and running again without the fear of another breach.
- 明确风险
- 重建系统
	- 数据备份
	- 安装新操作系统
	- 配置基线及访问控制
	- 数据恢复
	- 上线测试
	- 应急演练

**Questions to address**
- When can systems be returned to production?
- Have systems been patched, hardened and tested?
- Can the system be restored from a trusted back-up?
- How long will the affected systems be monitored and what will you look for when monitoring?
- What tools will ensure similar attacks will not reoccur? (File integrity monitoring, intrusion detection/protection, etc)

#### 4️⃣ Post-Incidence Activity (Review, Lessons Learned)
Once the investigation is complete, hold an after-action meeting with all Incident Response Team members and discuss what you’ve learned from the data breach. This is where you will analyze and document everything about the breach. Determine what worked well in your response plan, and where there were some holes. Lessons learned from both mock and real events will help strengthen your systems against the future attacks.

跟进阶段是应急响应的最后一个阶段，本阶段的内容主要是对抑制和根除的效果进行审计，确认系统没有被再次入侵，这种审计是一个需要定期进行的过程。通常第一次统计应该在一定期限之内进行，以后再进行复查，并输出跟进阶段的报告内容，跟进阶段还需要对事件处理情况进行总结，吸取经验教训，对已有安全防护措施和安全事件应急响应预案进行改进。
- 从安全事件中吸取经验教训非常关键，不停的自我完善的防护体系和策略才是最好的安全设计思路。
- 将每次安全事故的表现和处理步骤发布在内部的信息安全发布站点上，方便以后内部出现同样攻击事件后处理。
- 对于内部需要改善和做出调整的安全配置在内部网络中及时发布更新策略。

**Questions to address** 
- What changes need to be made to the security?
- How should employee be trained differently?
- What weakness did the breach exploit?
- How will you ensure a similar breach doesn’t happen again?



## Incidence Case Study
TBD..



## Ref
[我国关键信息基础设施网络安全应急响应的法律保障]: https://www.secrss.com/articles/18408
1. 关键信息基础设施网络安全应急响应法律规制的必要性
2. 我国关键信息基础设施网络安全应急响应的法制化
3. 我国关键信息基础设施网络安全应急响应法律制度的完善

[CNCERT专家：国际网络安全应急响应体系介绍]: https://www.secrss.com/articles/18516

[👍 6 Phases in the Incident Response Plan]: https://www.securitymetrics.com/blog/6-phases-incident-response-plan

[👍 Cybersecurity Incidence Response Plan - NIST]: https://www.hhs.gov/sites/default/files/cybersecurity-incident-response-plans.pdf
