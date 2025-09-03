# Kill Chain & Security Tool Box

[TOC]



## Res
### Related Topics
↗ [Network Penetration (Pen-testing)](../Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Network%20Penetration%20(Pen-testing).md)
↗ [Software Analysis & Binary Engineering](../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/Software%20Analysis%20&%20Binary%20Engineering.md)
↗ [Forensics & Traceability Analysis](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Forensics%20&%20Traceability%20Analysis/Forensics%20&%20Traceability%20Analysis.md)
↗ [OSINT (Open Source Intelligence)](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/📌%20OSINT%20(Open%20Source%20Intelligence)/OSINT%20(Open%20Source%20Intelligence).md)
↗ [Security Audit & Security Audit Trail](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md)
↗ [Social Engineering & Physical Security](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Social%20Engineering%20&%20Physical%20Security.md)

↗ [ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🏕️%20Threat%20Models%20&%20Threat%20Modeling/ATT&CK（Adversarial%20Tactics,%20Techniques,%20and%20Common%20Knowledge）.md)


### Online Tools
https://uutool.cn
uu 在线工具

https://tool.chinaz.com
站长之家

https://xray.cool
xray 社区是长亭科技推出的免费白帽子工具平台，目前社区有[xray](https://stack.chaitin.com/tool/detail?id=1)、[xpoc](https://stack.chaitin.com/tool/detail?id=1036)、[xapp](https://stack.chaitin.com/tool/detail?id=1311)、[rad](https://stack.chaitin.com/tool/detail?id=2) 工具，均有多名经验丰富的安全开发人员和数万名社区贡献者共同打造而成

https://defuse.ca
Please feel free to check out, download, and share some of our free software, services, and research...

👍 [sectools.org](https://sectools.org)

[awesome-security](https://github.com/sbilly/awesome-security) 
[Awesome-Hacking](https://github.com/Hack-with-Github/Awesome-Hacking) 
[Awesome-CTF](https://github.com/apsdehal/awesome-ctf)
[enaqx/awesome-pentest](https://github.com/enaqx/awesome-pentest)
[Hack-with-Github/Awesome-Hacking](https://github.com/Hack-with-Github/Awesome-Hacking) 



## Intro: Kill Chain
> 💡
> The conception of 'kill chain' was coined against scenarios in ↗ [Network Penetration (Pen-testing)](../Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Network%20Penetration%20(Pen-testing).md). Here in this section of notes i extend it to a broader scope covering all tools used in security activities. 

In 2009, Mike Cloppert of Lockheed Martin CERT introduced the concept that is now known as the **attacker kill chain**. This includes the steps taken by an adversary when they are attacking a network. It does not always proceed in a linear flow as some steps may occur in parallel. Multiple attacks may be launched over time at the same target, and overlapping stages may occur at the same time.

A typical kill chain of an attacker can be described as follows:
- **Explore or reconnaissance phase**: The _adage, reconnaissance time_ is _never wasted time_, adopted by most military organizations, acknowledges that it is better to learn as much as possible about an enemy before engaging them. For the same reason, attackers will conduct extensive reconnaissance of a target before attacking. In fact, it is estimated that at least 70 percent of the work effort of a penetration test or an attack is spent conducting reconnaissance! Generally, they will employ two types of reconnaissance:
	- **Passive**: This does not directly interact with the target in a hostile manner. For example, the attacker will review the publicly available website(s), assess online media (especially social media sites), and attempt to determine the **attack surface** of the target. One particular task will be to generate a list of past and current employee names. These names will form the basis of attempts to brute force or guess passwords. They will also be used in social engineering attacks. **This type of reconnaissance is difficult, if not impossible, to distinguish from the behavior of regular users.**
	- **Active**: This can be detected by the target but it can be difficult to distinguish most online organizations' faces from the regular backgrounds. Activities occurring during active reconnaissance include physical visits to target premises, port scanning, and remote vulnerability scanning.

- (Weaponization): create malicious payload (exploit + malware)

- **Delivery phase**: Delivery is the selection and development of the weapon that will be used to complete the exploit during the attack. The exact weapon chosen will depend on the attacker's intent as well as the route of delivery (for example, across the network, via wireless, or through a web- based service). The impact of the delivery phase will be examined in the second half of this book.

- **Exploit or compromise phase**: This is the point when a particular exploit is successfully applied, allowing attackers to reach their objective. The compromise may have occurred in a single phase (for example, a known operating system vulnerability was exploited using a buffer overflow), or it may have been a multiphase compromise (for example, an attacker physically accessed premises to steal a corporate phone book. The names were used to create lists for brute force attacks against a portal logon. In addition, emails were sent to all employees to click on an embedded link to download a crafted PDF file that compromised their computers). Multiphase attacks are the norm when a malicious attacker targets a specific enterprise.
	- **Installation:** install backdoor or malware on the system
	- **Command & Control (C2)**:attacker establishes remote access channel

- **Achieve phase – Action on the Objective**: This is frequently, and incorrectly, referred to as the **exfiltration phase** because there is a focus on perceiving attacks solely as a route to steal sensitive data (such as login information, personal information, and financial information); it is common for an attacker to have a different objective. For example, a business may wish to cause a denial of service in their competitor's network to drive customers to their own website. Therefore, this phase must focus on the many possible actions of an attacker. One of the most common exploit activity occurs when the attackers attempt to improve their access privileges to the highest possible level (**vertical escalation**) and to compromise as many accounts as possible (**horizontal escalation**).  

- **Achieve phase – Persistence**: If there is value in compromising a network or system, then that value can likely be increased if there is persistent access. This allows attackers to maintain communications with a compromised system. From a defender's point of view, this is the part of the kill chain that is usually the easiest to detect.



## 「知道创宇」404 星链计划
🚧 https://github.com/knownsec/404StarLink
404星链计划 / 404 StarLink Project
「404星链计划」是知道创宇 404 实验室于 2020 年 8 月开始的计划，主要目的是改善安全圈内工具庞杂、水平层次不齐、开源无人维护的多种问题，促进安全开源社区的发展；通过这种方式将不同安全领域研究人员与开源项目链接起来。

星链计划将不断地收集优秀的安全开源项目，对收录的项目提供技术支持，持续跟踪和展示项目的更新和动态，并建立了星链计划社区，社区用户可以通过星链展示板块探索自己感兴趣的项目，同时还可以在社区内快速为开源作者反馈问题。以此方式帮助开源项目成长，促进安全社区发展
- [甲方工具](https://github.com/knownsec/404StarLink/blob/master/party_a.md)
- [信息收集](https://github.com/knownsec/404StarLink/blob/master/reconnaissance.md)
- [漏洞探测](https://github.com/knownsec/404StarLink/blob/master/vulnerability_assessment.md)
- [攻击与利用](https://github.com/knownsec/404StarLink/blob/master/penetration_test.md)
- [信息分析](https://github.com/knownsec/404StarLink/blob/master/information_analysis.md)
- [内网工具](https://github.com/knownsec/404StarLink/blob/master/intranet_tools.md)
- [其他](https://github.com/knownsec/404StarLink/blob/master/others.md)
8.[入选2021Kcon黑客大会兵器谱](https://github.com/knownsec/404StarLink/blob/master/column/2021KCon_exhibition_with_starlink.md)  
9.[入选2022Kcon黑客大会兵器谱](https://github.com/knownsec/404StarLink/blob/master/column/2022KCon_exhibition_with_starlink.md)  
10.[入选2023Kcon黑客大会兵器谱](https://github.com/knownsec/404StarLink/blob/master/column/2023KCon_exhibition_with_starlink.md)  
11.[星链计划全部项目](https://github.com/knownsec/404StarLink/blob/master/allprojects.md)  
12.[正在申请加入的项目](https://github.com/knownsec/404StarLink/issues)  
13.[星链计划视频演示栏目-星际奇兵](https://github.com/knownsec/404StarLink/blob/master/column/starlink_project_video.md)



## Ref

