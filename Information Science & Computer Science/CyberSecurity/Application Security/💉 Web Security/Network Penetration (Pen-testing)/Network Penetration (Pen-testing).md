# Network Penetration (Pen-testing)

[TOC]




#TODO 



## Res
### Related Topics
↗ [Kill Chain & Security Tool Box](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Kill%20Chain%20&%20Security%20Tool%20Box.md)
- ↗ [Pen-testing Tools](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Pen-testing%20Tools/Pen-testing%20Tools.md)

↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)
- ↗ [Passive Recon & (Defensive) OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Passive%20Recon%20&%20(Defensive)%20OSINT/Passive%20Recon%20&%20(Defensive)%20OSINT.md)
- ↗ [Active Recon & Offensive OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Active%20Recon%20&%20Offensive%20OSINT.md)
↗ [Cyberspace Assets Mapping & Management](../../../⛈️%20Risk%20Management/🐄%20Cyberspace%20Assets/🧨%20Cyberspace%20Assets%20Mapping%20&%20Management/Cyberspace%20Assets%20Mapping%20&%20Management.md)
↗ [Web Security](../Web%20Security.md)


### Learning Resource
📂 https://github.com/nixawk/pentest-wiki
pentest-wiki

📄 http://www.pentest-standard.org/index.php/Main_Page
PTES, Pen Testing Execution Standard

The penetration testing execution standard consists of seven (7) main sections. These cover everything related to a penetration test - from the initial communication and reasoning behind a pentest, through the intelligence gathering and threat modeling phases where testers are working behind the scenes in order to get a better understanding of the tested organization, through vulnerability research, exploitation and post exploitation, where the technical security expertise of the testers come to play and combine with the business understanding of the engagement, and finally to the reporting, which captures the entire process, in a manner that makes sense to the customer and provides the most value to it.

https://www.cnblogs.com/carmi/collections/8635
合集-内网渗透_干货分享


### Other Resources
https://hak5.org/
Founded in 2005, Hak5's mission is to advance the InfoSec industry. We do this through our award winning podcasts, leading pentest gear, and inclusive community – where all hackers belong.


## Intro
### Kill-Chain
↗ [Kill Chain & Security Tool Box](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Kill%20Chain%20&%20Security%20Tool%20Box.md)

![](../../../../../Assets/Pics/Screenshot%202023-10-09%20at%207.33.54AM.png)


### Misconceptions of vulnerability scanning (Vscan), penetration testing (Pentest), and red team exercises (RTE)
- **Vulnerability scanning (Vscan)**: It is a process of identifying vulnerabilities or security loopholes in a system or network. One of the misconceptions about Vscan is that it will let you know all of the known vulnerabilities; well, it's not true. Limitations with Vscan are only potential vulnerabilities and it purely depends on the type of scanner that one utilizes; it might also include lots of false positives and, to the business owner, there is no clear vision on whether they are relevant risks or not and which one will be utilized by the attackers first to gain access. 

- **Penetration testing (Pentest)**: It is a process of safely exploiting vulnerabilities without much impact to the existing network or business. There is a lower number of false positives since the testers will try and simulate the exploit. Limitations with the pentest are only currently known, publicly available exploits and mostly these are project-focused testing. We often hear from pentesters during an assessment, "Yay! Got Root"—but we never question: What's next? This could be due to various reasons, such as the project limits you to report the high-risk issues immediately to the client or the client is interested in only one segment of the network and wants you to test that.

- **Red Team Exercise (RTE)**: It is a process of evaluating the effectiveness of an organization to defend against cyber threats and improve its security by any possible means; during an RTE, we can notice multiple ways of achieving project objectives and goals, such as complete coverage of activities with the defined project goal, including phishing, wireless, disk drops (USB, CD, and SSD), and physical penetration testing. The limitations with RTEs are time-bound, pre-defined scenarios and an assumed rather than real environment. Often, the RTE is run with a fully monitored mode for every technique and tactics are executed according to the procedure, but this isn't the case when a real attacker wants to achieve an objective.

Often, all three different testing methodologies refer to the term **hack** or **compromise**. We will hack your network and show you where your weaknesses are; but wait, does the client or business owner understand the term hack or compromise? How do we measure it? What are the criteria? And when do we know that the hack or compromise is complete? All the questions point to only one thing: what's the primary goal?


### Objective-based Penetration Testing
The primary goal of a pentest/RTE is to determine the real risk, differentiating the risk rating from the scanner and giving a business risk value for each asset, along with the brand image of the organization. It's not about whether how much risk they have; rather, it's about how much they are exposed. A threat that has been found does not really constitute a risk and need not be demonstrated



## Network Penetration Processes & Phases
↗ [ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🏕️%20Threat%20Models%20&%20Threat%20Modeling/ATT&CK（Adversarial%20Tactics,%20Techniques,%20and%20Common%20Knowledge）.md)


### Explore & Reconnaissance Phase
↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)
- ↗ [Passive Recon & (Defensive) OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Passive%20Recon%20&%20(Defensive)%20OSINT/Passive%20Recon%20&%20(Defensive)%20OSINT.md)
- ↗ [Active Recon & Offensive OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Active%20Recon%20&%20Offensive%20OSINT.md)


### Delivery Phase


### Exploit & Compromise Phase


### Achieve Phase



## Ref
