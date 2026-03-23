# DNS & Domain Reconnaissance

[TOC]



## Res
### Related Topics
↗ [DNS (Domain Name Systems)](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/🏘️%20Local%20Configuration%20&%20Discovery/Name%20Service%20Discovery/DNS%20(Domain%20Name%20Systems)/DNS%20(Domain%20Name%20Systems).md)
↗ [DNS Server (DNS Distributed Database)](../../../../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/DNS%20Server%20(DNS%20Distributed%20Database)/DNS%20Server%20(DNS%20Distributed%20Database).md)


### 🔍 DNS Search Service /Database
https://lookup.icann.org/en

https://www.whois.com

https://www.dnsleaktest.com

https://rapiddns.io
RapidDNS is a dns query tool which make querying subdomains or sites of a same ip easy!

http://ceye.io/introduce
ceye platform, which monitoring DNS queries and HTTP requests through its own DNS server and HTTP server, it can also create custom files as online payloads. It can help security researchers collect information when testing vulnerabilities (e.g. SSRF/XXE/RFI/RCE).

https://iplogger.org/
Paste the IP address you want to check in the field below and get its scan results. The service IP Tracker allows you to get information about the country, city, and provider, and see the device's approximate location with this IP on the map.

国外的数据库：MaxMind、IP2Location 、Quova 、Geobytes 及Cqcounter等，
国内的数据库有IP138 、QQWry 及IPcn等。


### Domains, Websites, and Networking
[AnalyzeID](https://analyzeid.com/)  
[Central Ops Domain Check](https://centralops.net/asp/co/DomainCheck.vbs.asp)  
[Criminal IP Domain Search](https://www.criminalip.io/en/domain)  
[FaviHunter](https://github.com/eremit4/favihunter)  
[GreyNoise](https://www.greynoise.io/)  
[Hudson Rock Free Tools](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools)  
[LeakIX](https://leakix.net/)  
[OpenPhish](https://openphish.com/)  
[PhishTank](https://www.phishtank.com/)  
[PublicWWW](https://publicwww.com/)  
[Scamadvisor](https://www.scamadviser.com/)  
[Shodan](https://www.shodan.io/)  
[Shodan Darkweb Queries](https://www.youtube.com/watch?v=IOblaXyY2U0)  
[Shodan Dorks](https://github.com/humblelad/Shodan-Dorks)  
[Shodan Geolocation Filters](https://www.youtube.com/watch?v=HqGh8Y_8fWY)  
[Short Links Verification Cheat Sheet](https://github.com/seintpl/osint/blob/main/short-links-verification-cheatsheet.md)  
[Tracking All the WiFi Things](https://osintcurio.us/2019/01/15/tracking-all-the-wifi-things/)  
[URL Scan](https://urlscan.io/)  
[View DNS](https://viewdns.info/)  
[Virtual Site Mapper](http://www.visualsitemapper.com/)  
[Website OSINT Attack Surface](https://www.osintdojo.com/diagrams/website)  
[WhatIsMyIPAddress](https://whatismyipaddress.com/)  
[Whoxy](https://www.whoxy.com/)  
[Wigle.net](https://wigle.net/)  
[Zone-H Website Defacements](https://www.zone-h.org/archive/special=1)  



## DNS Recon Intro
> Note that DNS information may contain stale or incorrect entries. To minimize inaccurate information, query different source servers and use different tools to cross-validate results. Review results and manually verify any suspect findings.

Once a tester has identified the targets that have an online presence and contain items of interest, the next step is to identify the IP addresses and routes to the target.

DNS reconnaissance is concerned with identifying who owns a particular domain or series of IP addresses (the sort of information gained with whois although this has been completely changed with the **General Data Protection Regulation (GDPR)** enforcement across Europe from May 2018), the DNS information defining the actual domain names and IP addresses assigned to the target and the route between the penetration tester or the attacker and the final target.

This information gathering is semi-active—some of the information is available from freely available open sources such as DNSstuff.com, while other information is available from third parties such as DNS registrars. Although the registrar may collect IP addresses and data concerning requests made by the attacker, it is rarely provided to the end target. The information that could be directly monitored by the target, such as DNS server logs, is almost never reviewed or retained.

Because the information needed can be queried using a defined systematic and methodical approach, its collection can be automated.

### Root Domain Recon /Discovery
此步骤个人的经验是，面对大公司优先选择工信部备案查询，小公司用搜索引擎做起点，然后几种方式都可以过一遍，查漏补缺，尽量获取最全的信息。大部分公司根域名都不会很多，全部过一遍也不会用掉多少时间。

1.搜索引擎 + 高级搜索
搜索引擎直接搜索其公司名称，获取其相关根域名

2.天眼查、企查查、爱企查
从天眼查、企查查等途径，输入公司名，查询其域名以及全资控股子公司的域名
[https://www.qcc.com/](https://www.qcc.com/)
[https://www.tianyancha.com/](https://www.tianyancha.com/)

3.工信部备案
工信部备案查询域名/ip地址（需要详细且正确的公司名称，结果也会很全面）
[https://beian.miit.gov.cn/#/Integrated/recordQuery](https://beian.miit.gov.cn/#/Integrated/recordQuery)

4.fofa /shodan等
fofa查询其公司名称，获取相关域名
↗ [Cyberspace Assets Mapping & Management](../../../../🐄%20Cyberspace%20Assets/🧨%20Cyberspace%20Assets%20Mapping%20&%20Management/Cyberspace%20Assets%20Mapping%20&%20Management.md)

5.站长之家
使用其icp查询功能查询备案，当我们不知道公司完整名称的时候也可以使用此网站功能使用已知域名查询完整备案公司名称
[http://icp.chinaz.com/](http://icp.chinaz.com/)

6.反查域名
用已知的某些ip反查域名
[https://dns.aizhan.com/](https://dns.aizhan.com/)
[https://whois.aizhan.com/](https://whois.aizhan.com/)

### Sub Domain Recon /Discovery
1.各类网站查询解析记录
以bilibili为例：
[https://www.dnsgrep.cn/subdomain/bilibili.com](https://www.dnsgrep.cn/subdomain/bilibili.com)
[https://securitytrails.com/list/apex_domain/bilibili.com](https://securitytrails.com/list/apex_domain/bilibili.com)
类似的网站非常多，这两个都是免费的，但是第二个要注册登录

2.子域名爆破
相关的工具很多，部分扫描器也自带子域名爆破功能或可安装相关插件。
subDomainsBrute
[https://github.com/lijiejie/subDomainsBrute](https://github.com/lijiejie/subDomainsBrute)

3.fofa、shodan
利用这类工具对域名资产进行查询，如  
fofa语法domain=”xxx.com”

4.OneForAll
此工具会集成多种方式搜集子域名，包括dns查询、证书查询等，详情见其项目中的readme



## Basics Tools
### 👉 The `whois` command (Post GDPR)
The whois command used to be the first step in identifying an IP address for many years until GDPR was enforced. Formerly, the whois command was used to to query databases that store information on the registered users of an internet resource, such as a domain name or IP address. Depending on the database that is queried, the response to a whois request will provide names, physical addresses, phone numbers, and email addresses (useful in facilitating social engineering attacks), as well as IP addresses and DNS server names. After 25th May 2018, there are no registrant details provided; however, attackers can understand which whois server responds and it retrieves domain data that includes availability, ownership, creation, expiration details, and name servers.


### 👉 `nslookup`


### 👉 `dig`


### 👉 `Sublist3r`
Sublist3r is a Python-based tool that can be utilized during domain harvesting, which can enumerate sub-domains of a primary domain using OSINT. The tool utilizes APIs such as Google, Bing, Baidu, and ASK search engines. It also searches in NetCraft, Virustotal, ThreatCrowd, DNSdumpster, and reverseDNS; this also performs brute force using a specific wordlist



## DNS & IPv4
| Application                  | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| dnsenum,dnsmap, and dnsrecon | These are comprehensive DNS scanners—DNS record enumeration (A, MX, TXT, SOA, wildcard, and so on), subdomain brute-force attacks, Google lookup, reverse lookup, zone transfer, and zone walking. dsnrecon is usually the first choice—it is highly reliable, results are well parsed, and data can be directly imported into the Metasploit framework. |
| dnstracer                    | This determines where a given DNS gets its information from, and follows the chain of DNS servers back to the servers that know the data. |
| dnswalk                      | This DNS debugger checks specified domains for internal consistency and accuracy. |
| fierce                       | This locates non-contiguous IP space and hostnames against specified domains by attempting zone transfers and then attempting brute-force attacks to gain DNS information. |


### 👉 `dnsenum` | `dnsmap` | `dnsrecon`
🔗 https://www.kali.org/tools/dnsrecon/
🔗 https://github.com/darkoperator/dnsrecon


### 👉 `dnstracer`


### 👉 `dnswalk`


### 👉 `fierce`



## DNS & IPv6
The increased size of the addressable address space presents some problems to penetration testers, particularly when using scanners that step through the available address space looking for live servers. However, some features of the IPv6 protocol have simplified discovery, especially the use of ICMPv6 to identify active link-local addresses.

It is important to consider IPv6 when conducting initial scans for the following reasons:
- There's uneven support for IPv6 functionality in testing tools, so the tester must ensure that each tool is validated to determine its performance and accuracy in IPv4, IPv6, and mixed networks.  
- Because IPv6 is a relatively new protocol, the target network may contain misconfigurations that leak important data; the tester must be prepared to recognize and use this information.
- Older network controls (firewalls, IDS, and IPS) may not detect IPv6. In such cases, penetration testers can use IPv6 tunnels to maintain covert communications with the network and exfiltrate the data undetected.

Kali includes several tools developed to take advantage of IPv6 (most comprehensive scanners, such as `nmap`, now support IPv6), some of which are as follows; tools that are particular to IPv6 were largely derived from the **THC-IPv6 Attack Toolkit**.

The following table provides the list of tools that are utilized for reconnaissance of IPv6:

| Application       | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| dnsdict6          | Enumerates sub-domains to obtain IPv4 and IPv6 addresses (if present) using a brute force search based on a supplied dictionary file or its own internal list. |
| dnsrevenum6       | Performs reverse DNS enumeration given an IPv6 address.      |
| `covert_send6 `   | Sends the content of a file covertly to the target.          |
| `covert_send6d `  | Writes covertly received content to file.                    |
| denial6           | Performs various denial of service attacks on a target.      |
| `detect-new-ip6 ` | Detects new IPv6 addresses joining the local network.        |
| detect_sniffer6   | Tests whether systems on the local LAN are sniffing          |
| Exploit6          | Performs exploits of various CVE-known IPv6 vulnerabilities on the destination |
| fake_dhcps6       | Fake DHCPv6 server                                           |


> 👉 Metasploit can also be utilized for IPv6 host discovery. The `auxiliary/scanner/discovery/ipv6_multicast_ping` module will discover all of the IPv6-enabled machines with the physical (MAC) address

> 👉 THC IPv6 suite `atk6-alive6` will discover alive addresses in the same segment.


### 👉 `dnsdict6`


### 👉 `dnsrevenum6`


### 👉 `covert_send6` | `covert_send6d`


### 👉 `denial6`


### 👉 `detect-new-ip6`


### 👉 `detect_sniffer6`


### 👉 `Exploit6`


### 👉 `fake_dhcps6`



## IP Address to DNS Records



## Ref
[利用IP反查域名的几种方法 - 半路的solo的文章 - 知乎]: https://zhuanlan.zhihu.com/p/382307227
- 利用nslookup反查域名
- 利用socket批量解析
- 利用pyopenssl解析证书中的CN
