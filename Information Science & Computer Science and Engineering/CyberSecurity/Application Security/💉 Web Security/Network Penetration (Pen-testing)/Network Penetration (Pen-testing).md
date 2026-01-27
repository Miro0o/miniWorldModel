# Network Penetration (Pen-testing)

[TOC]



## Res
### Related Topics
↗ [Risk Assessment](../../../⛈️%20Risk%20Management/Risk%20Management%20Life%20Circle/Risk%20Assessment.md)

↗ [Kill Chain & Security Tool Box](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Kill%20Chain%20&%20Security%20Tool%20Box.md)
- ↗ [Pen-testing Tools](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Pen-testing%20Tools.md)

↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)
- ↗ [Passive Recon & (Defensive) OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Passive%20Recon%20&%20(Defensive)%20OSINT/Passive%20Recon%20&%20(Defensive)%20OSINT.md)
- ↗ [Active Recon & Offensive OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Active%20Recon%20&%20Offensive%20OSINT.md)
↗ [Cyberspace Assets Mapping & Management](../../../⛈️%20Risk%20Management/🐄%20Cyberspace%20Assets/🧨%20Cyberspace%20Assets%20Mapping%20&%20Management/Cyberspace%20Assets%20Mapping%20&%20Management.md)
↗ [Web Security](../Web%20Security.md)

↗ [AI x Security](../../../🫧%20AI%20x%20Security/AI%20x%20Security.md)
↗ [Attack Simulation - Red, Blue, Purple, White](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White.md)


### Learning Resource
📂 https://github.com/nixawk/pentest-wiki
pentest-wiki

📄 http://www.pentest-standard.org/index.php/Main_Page
PTES, Pen Testing Execution Standard
- The penetration testing execution standard consists of seven (7) main sections. These cover everything related to a penetration test - from the initial communication and reasoning behind a pentest, through the intelligence gathering and threat modeling phases where testers are working behind the scenes in order to get a better understanding of the tested organization, through vulnerability research, exploitation and post exploitation, where the technical security expertise of the testers come to play and combine with the business understanding of the engagement, and finally to the reporting, which captures the entire process, in a manner that makes sense to the customer and provides the most value to it.

https://www.cnblogs.com/carmi/collections/8635
合集-内网渗透_干货分享

📖 Mastering Kali Linux for Advanced Penetration Testing
https://www.amazon.com/Mastering-Linux-Advanced-Penetration-Testing-ebook/dp/B07GVNJR6V?ref_=ast_sto_dp



### Other Resources
https://hak5.org/
Founded in 2005, Hak5's mission is to advance the InfoSec industry. We do this through our award winning podcasts, leading pentest gear, and inclusive community – where all hackers belong.

👍 https://github.com/juliocesarfort/public-pentesting-reports
A repository containing public penetration test reports published by consulting firms and academic security groups.
Maintained by Julio @ Blaze Information Security ([https://www.blazeinfosec.com](https://www.blazeinfosec.com/))

https://www.recurity-labs.com/
Recurity Labs specializes in IT-security consulting services, focusing on the most important angles of software and system security: the design and verification of expected behaviour.

https://viperone.gitbook.io/pentest-everything
This book is my collection of notes and write-ups for various offensive security based topics and platforms. This book is generally updated most days and will continue to be for the foreseeable future. If at any point this book stops being developed, I will leave a warning on this page.
This book is primarily developed for viewing on Gitbook. If you wish to fork this book please do so on GitHub.



## Intro
### Contents /Objective of Penetration Test (And Other Security Exercise)
![](../../../../../Assets/Pics/Pasted%20image%2020251001215700.png)

> ↗ [Risk Assessment](../../../⛈️%20Risk%20Management/Risk%20Management%20Life%20Circle/Risk%20Assessment.md)

> 📖 Mastering Kali Linux for Advanced Penetration Testing

Misconceptions of vulnerability scanning, penetration testing, and red team exercises
- **Vulnerability scanning (Vscan)**: It is a process of identifying vulnerabilities or security loopholes in a system or network. One of the misconceptions about Vscan is that it will let you know all of the known vulnerabilities; well, it's not true. Limitations with Vscan are only potential vulnerabilities and it purely depends on the type of scanner that one utilizes; it might also include lots of false positives and, to the business owner, there is no clear vision on whether they are relevant risks or not and which one will be utilized by the attackers first to gain access. 
- **Penetration testing (Pentest)**: It is a process of safely exploiting vulnerabilities without much impact to the existing network or business. There is a lower number of false positives since the testers will try and simulate the exploit. Limitations with the pentest are only currently known, publicly available exploits and mostly these are project-focused testing. We often hear from pentesters during an assessment, "Yay! Got Root"—but we never question: What's next? This could be due to various reasons, such as the project limits you to report the high-risk issues immediately to the client or the client is interested in only one segment of the network and wants you to test that.
- **Red Team Exercise (RTE)**: It is a process of evaluating the effectiveness of an organization to defend against cyber threats and improve its security by any possible means; during an RTE, we can notice multiple ways of achieving project objectives and goals, such as complete coverage of activities with the defined project goal, including phishing, wireless, disk drops (USB, CD, and SSD), and physical penetration testing. The limitations with RTEs are time-bound, pre-defined scenarios and an assumed rather than real environment. Often, the RTE is run with a fully monitored mode for every technique and tactics are executed according to the procedure, but this isn't the case when a real attacker wants to achieve an objective.

Often, all three different testing methodologies refer to the term **hack** or **compromise**. We will hack your network and show you where your weaknesses are; but wait, does the client or business owner understand the term hack or compromise? How do we measure it? What are the criteria? And when do we know that the hack or compromise is complete? All the questions point to only one thing: what's the primary goal?
#### Objective-based Penetration Testing
The primary goal of a pentest/RTE is to determine the real risk, differentiating the risk rating from the scanner and giving a business risk value for each asset, along with the brand image of the organization. It's not about whether how much risk they have; rather, it's about how much they are exposed. A threat that has been found does not really constitute a risk and need not be demonstrated


### Methodology of Penetration Test & Kill-Chain
> ↗ [Kill Chain & Security Tool Box](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Kill%20Chain%20&%20Security%20Tool%20Box.md)

> 📖 Mastering Kali Linux for Advanced Penetration Testing

To address the limitations inherent in formal testing methodologies, they must be integrated in a framework that views the network from the perspective of an attacker, the kill chain.

In 2009, Mike Cloppert of Lockheed Martin CERT introduced the concept that is now known as the attacker kill chain. This includes the steps taken by an adversary when they are attacking a network. It does not always proceed in a linear flow as some steps may occur in parallel. Multiple attacks may be launched over time at the same target, and overlapping stages may occur at the same time.

![](../../../../../Assets/Pics/Screenshot%202023-10-09%20at%207.33.54AM.png)



## Network Penetration Processes
> ↗ [Kill Chain & Security Tool Box](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Kill%20Chain%20&%20Security%20Tool%20Box.md)

![risk_management_and_software_security.excalidraw | 1000](../../../../../Assets/Illustrations/Computer%20Security/risk_management_and_software_security.excalidraw.md)
<small>Risk management & Cyversecurity</small>


### 0️⃣ Threat Modeling & Risk Assessment
↗ [Cybersecurity Threats & Attacks](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)
↗ [Threat Models & Threat Modeling](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🏕️%20Threat%20Models%20&%20Threat%20Modeling/Threat%20Models%20&%20Threat%20Modeling.md)
- ↗ [ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🏕️%20Threat%20Models%20&%20Threat%20Modeling/ATT&CK（Adversarial%20Tactics,%20Techniques,%20and%20Common%20Knowledge）.md)
- ↗ [CAPEC (Common Attack Pattern Enumerations and Classifications)](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🏕️%20Threat%20Models%20&%20Threat%20Modeling/CAPEC%20(Common%20Attack%20Pattern%20Enumerations%20and%20Classifications).md)

↗ [Risk Assessment](../../../⛈️%20Risk%20Management/Risk%20Management%20Life%20Circle/Risk%20Assessment.md)

![](../../../../../Assets/Pics/Screenshot%202025-10-01%20at%2022.23.14.png)
<small><a>https://attack.mitre.org/matrices/enterprise/</a></small>

[Microsoft Baseline Security Analyzer](https://en.wikipedia.org/wiki/Microsoft_Baseline_Security_Analyzer)
[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
[IBM Security Redbooks](https://www.redbooks.ibm.com/domains/security)
[CIS Benchmarks List](https://www.cisecurity.org/cis-benchmarks)


### Penetration Phases & Tactics
> 📖 Mastering-Linux-Advanced-Penetration-Testing
> ↗ [ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🏕️%20Threat%20Models%20&%20Threat%20Modeling/ATT&CK（Adversarial%20Tactics,%20Techniques,%20and%20Common%20Knowledge）.md)

- Explore & Reconnaissance
	- Reconnaissance (TA0043)
		- ↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)
			- ↗ [Passive Recon & (Defensive) OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Passive%20Recon%20&%20(Defensive)%20OSINT/Passive%20Recon%20&%20(Defensive)%20OSINT.md)
			- ↗ [Active Recon & Offensive OSINT](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Active%20Recon%20&%20Offensive%20OSINT.md)
	- Resource Development (TA0042)
	- Discovery (TA0007)
	- Attack Surface & Vulnerability Assessment
		- ↗ [Attack Surface Management (ASM)](../../../⛈️%20Risk%20Management/🐄%20Cyberspace%20Assets/🚀%20Attack%20Surface%20Management%20(ASM)/Attack%20Surface%20Management%20(ASM).md)
		- ↗ [Vulnerability Discovery & Scanning（漏洞检测 & 扫描）](../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Phases/Vulnerability%20Discovery%20&%20Scanning（漏洞检测%20&%20扫描）.md)
- ↗ [Delivery Phase](Delivery%20Phase/Delivery%20Phase.md)
	- Weaponization
		- ↗ [Kill Chain & Security Tool Box](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Kill%20Chain%20&%20Security%20Tool%20Box.md)
	- Initial Access (TA0001)
		- ↗ [Social Engineering & Physical Security](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Social%20Engineering%20&%20Physical%20Security.md)
		- ↗ [Physical Security](../../../Physical%20Security/Physical%20Security.md)
			- ↗ [Embedded Devices & RFID Hacking](../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🪖%20Hardware%20Security/Hardware%20Threats%20&%20Attacks/Embedded%20Devices%20&%20RFID%20Hacking/Embedded%20Devices%20&%20RFID%20Hacking.md)
		- ↗ [Wireless & Mobile Network Security](../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🛜%20Wireless%20&%20Mobile%20Network%20Security/Wireless%20&%20Mobile%20Network%20Security.md)
			- ↗ [WiFi Attacks & Cracking](../../../Network%20(&%20Communication)%20Security/Network%20Threats%20&%20Attacks/Link%20Layer%20&%20Physical%20Layer%20Attacks/WiFi%20Attacks%20&%20Cracking/WiFi%20Attacks%20&%20Cracking.md)
	- ↗ [Bypassing Security Controls](Delivery%20Phase/Bypassing%20Security%20Controls/Bypassing%20Security%20Controls.md)
	- Execution (TA0002)
- ↗ [Exploit or Compromise Phase](Exploit%20or%20Compromise%20Phase/Exploit%20or%20Compromise%20Phase.md)
	- Installation
		- ↗ [Malware (Malicious Code), Analysis, and Detection](../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/Malware%20(Malicious%20Code),%20Analysis,%20and%20Detection/Malware%20(Malicious%20Code),%20Analysis,%20and%20Detection.md)
	- Credential Access (TA0006)
		- ↗ [Password Attack](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Password%20Attack.md)
			- (↗ [Credentials & Password Related Tools](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Credentials%20&%20Password%20Related%20Tools.md))
- Achieve Phase
	- ↗ [Persistence](Achieve%20Phase/Persistence/Persistence.md) (TA0003)
	- ↗ [Privilege Escalation](Achieve%20Phase/Privilege%20Escalation/Privilege%20Escalation.md) (TA0004)
	- ↗ [Lateral Movement](Achieve%20Phase/Lateral%20Movement/Lateral%20Movement.md) (TA0008)
	- ↗ [Command & Control (CC)](Achieve%20Phase/Command%20&%20Control%20(CC)/Command%20&%20Control%20(CC).md) (TA0011)
	- ↗ [Defense Evasion](Achieve%20Phase/Defense%20Evasion/Defense%20Evasion.md) (TA0005)
	- Collection (TA0009)
	- ↗ [Exfiltration](Achieve%20Phase/Exfiltration/Exfiltration.md) (TA0010)
- Impact (TA0040)
	- ↗ [Risk Management](../../../⛈️%20Risk%20Management/Risk%20Management.md)
		- ↗ [Risk Countermeasures & Security Control](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Risk%20Countermeasures%20&%20Security%20Control.md)
		- ↗ [Forensics & Traceability Analysis](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Forensics%20&%20Traceability%20Analysis/Forensics%20&%20Traceability%20Analysis.md)
		- ↗ [Disaster & Incidence Response (IR)](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Disaster%20&%20Incidence%20Response%20(IR)/Disaster%20&%20Incidence%20Response%20(IR).md)



## Ref
