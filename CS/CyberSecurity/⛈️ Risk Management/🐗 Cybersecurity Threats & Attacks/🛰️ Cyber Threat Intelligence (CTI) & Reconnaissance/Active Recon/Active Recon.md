# Active Recon

[TOC]



## Res
### Related Topics
↗ [Reconnaissance & Exploration](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration/Reconnaissance%20&%20Exploration.md)
↗ [Nmap Mechanisms & Network Scanning Principles](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration/Nmap%20Proj/⭐️%20Nmap%20Mechanisms%20&%20Network%20Scanning%20Principles/Nmap%20Mechanisms%20&%20Network%20Scanning%20Principles.md)
↗ [Cyberspace Assets Mapping & Management](../../../../⛈️%20Risk%20Management/🐄%20Cyberspace%20Assets/🧨%20Cyberspace%20Assets%20Mapping%20&%20Management/Cyberspace%20Assets%20Mapping%20&%20Management.md)



## Intro
The main goal of the active reconnaissance phase is to collect and weaponize information about the target as much as possible in order to facilitate the exploitation phase of the kill chain methodology.

Although active reconnaissance produces more useful information, interactions with the target system may be logged, triggering alarms by protective devices, such as firewalls, **Intrusion Detection Systems** (**IDS**), and **Intrusion Prevention Systems** (**IPS**). As the usefulness of the data to the attacker increases, so does the risk of detection

To improve the effectiveness of active reconnaissance in providing detailed information, our focus will be on using stealthy, or difficult to detect, techniques.

### Contents in this chapter
- Stealth scanning strategies
- External and internal infrastructure, host discovery, and enumeration
- Comprehensive reconnaissance of applications, especially `recon-ng`
- Enumeration of internal hosts using DHCP
- Useful Microsoft Windows commands during penetration testing
- Taking advantage of default configurations
- Enumeration of users using SNMP, SMB, and `rpcclient`



## 👠 Stealthy Scanning Strategies (Hide Identity)
When employing stealth to support reconnaissance, a tester mimicking the actions of a hacker will do the following:

- Camouflage tool signatures to avoid detection and triggering an alarm Hide the attack within legitimate traffic
- Modify the attack to hide the source and type of traffic
- Make the attack invisible using nonstandard traffic types or encryption

Stealth scanning techniques can include some or all of the following:

- Adjusting source IP stack and tool identification settings
- Modifying packet parameters (`nmap`)
- Using proxies with anonymity networks (ProxyChains and the Tor network)


### 1️⃣ Adjusting source IP stack and tool identification settings

Before the penetration tester (or the attacker) begins testing, we must ensure that all unnecessary services on Kali are disabled or turned off.

#### DHCP
For example, if the local DHCP daemon is enabled and is not required, it is possible for the DHCP to interact with the target system, which could be logged and send alarms to the target's administrators.

#### Identifying sequence
Some commercial and open source tools (for example, the Metasploit framework) tag their packets with an identifying sequence. This can trigger certain intrusion detection system.

to test tags:
- Use dummy VM. Compare system logs to identify tagging trace.
- Analyze traffic, like by using Wireshark. 


### 3️⃣ Modifying packet parameters
When attempting to minimize detection, some stealth techniques to avoid detection and subsequent alarms include the following:

- Attackers approach the target with a goal in mind and send the minimum number of packets needed to determine the objective. For example, if you wish to confirm the presence of a web host, you first need to determine whether port 80, the default port for web-based services, is open.

- Avoid scans that may connect with the target system and leak data. Do not ping the target or use **synchronize** (**SYN**) and non-conventional packet scans, such as **acknowledge** (**ACK**), **finished** (**FIN**), and **reset** (**RST**) packets.

- Randomize or spoof packet settings, such as the source IP and port address, and the MAC address.
- Adjust the timing to slow the arrival of packets at the target site.
- Change the packet size by fragmenting packets or appending random data to confuse packet inspection devices.

↗ [Nmap Proj](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration/Nmap%20Proj/Nmap%20Proj.md)


### 3️⃣ Using proxies with anonymity networks
↗ [Anonymous & Private Networks](../../../../Network%20Security/Anonymous%20&%20Private%20Networks/Anonymous%20&%20Private%20Networks.md)



## Ref
[👍 信息收集总结]: http://uuzdaisuki.com/2021/05/31/信息收集总结/