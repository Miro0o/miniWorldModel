# OSINT (Open Source Intelligence)

[TOC]



## Res
### Related Topics
↗ [Reconnaissance & Exploration](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration/Reconnaissance%20&%20Exploration.md)


### Learning Resources
[ctfshow 网络迷踪 all 笔记（同步更新)](https://www.cnblogs.com/Suica/p/15650806.html#/c/subject/p/15650806.html)

[CTFshow---网络迷踪---(专题解题思路)](https://www.xl-bit.cn/index.php/archives/594/)


### Other Resources
👍 🔥 https://osintframework.com
OSINT Framework
OSINT framework focused on gathering information from free tools or resources. The intention is to help people find free OSINT resources. Some of the sites included might require registration or offer more data for \$\$\$, but you should be able to get at least a portion of the available information for no cost.  

I originally created this framework with an information security point of view. Since then, the response from other fields and disciplines has been incredible. I would love to be able to include any other OSINT resources, especially from fields outside of infosec. Please let me know about anything that might be missing!



## Intro
![Screenshot 2023-01-20 at 12.24.08 AM](../../../../../../../Assets/Pics/Screenshot%202023-01-20%20at%2012.24.08%20AM.png)



## 1️⃣ Offensive OSINT
### 👉 Sublist3r
Sublist3r is a Python-based tool that can be utilized during domain harvesting, which can enumerate sub-domains of a primary domain using OSINT. The tool utilizes APIs such as Google, Bing, Baidu, and ASK search engines. It also searches in NetCraft, Virustotal, ThreatCrowd, DNSdumpster, and reverseDNS; this also performs brute force using a specific wordlist


### 👉 Maltego
↗ [Meltego](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration/📌%20OSINT%20&%20Passive%20Recon%20Tools/Meltego.md)


### 👉 OSRFramework
↗ [OSRFramework](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration/📌%20OSINT%20&%20Passive%20Recon%20Tools/OSRFramework.md)


### Web Scraping
↗ [Web & HTML Scraping](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Interpreted%20Languages/Python/Python%20Applications%20&%20Programming/Web%20&%20HTML%20Scraping/Web%20&%20HTML%20Scraping.md)



## 2️⃣ Defensive OSINT
Defensive OSINT is typically used to see what is already on internet including breached information and see whether that information is valuable during the penetration testing activity. If the goal of penetration testing is to demonstrate the real-world scenario where this data can be handy, the first step is to identify a similar target that has already been breached. The majority of organizations fix only the affected platform or the host, and often they forget about other similar environments. The defensive OSINT is largely divided into three places of search.


### ⭐️ Internet Search Engine & Databases
#### Googlehacking & GHDB
↗ [Exploit Database & Google Hacking & GHDB](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Sections/📌%20Vulnerability%20Government（漏洞管控）/Vulnerability%20Databases%20&%20Sources/Exploit%20Database%20&%20Google%20Hacking%20&%20GHDB.md)

These Google operators are part of the Google query process, and the syntax of searching is as follows:
```shell
operator:itemthatyouwanttosearch
```

| Operator        | Description                                    | Mixes with other operators? | Can be used alone |
| --------------- | :--------------------------------------------- | :-------------------------- | ----------------- |
| intitle         | Page title keyword search                      | Yes                         | Yes               |
| allintitle      | All keywords search at a time in the title     | No                          | Yes               |
| inurl           | Search the keyword in the URL.                 | Yes                         | Yes               |
| site            | Filter Google search results only to the site. | Yes                         | Yes               |
| ext or filetype | Search ofr peculiar extension or file type     | Yes                         | No                |
| allintext       | Keyword search for all number of occurrences   | No                          | Yes               |
| link            | External link search on a page                 | No                          | Yes               |
| inanchor        | Search anchor link on a web page               | Yes                         | Yes               |
| numrange        | Limit search on the range                      | Yes                         | Yes               |
| datarange       | Limit search on the date                       | Yes                         | Yes               |
| author          | Finding group author                           | Yes                         | Yes               |
| group           | earching group names                           | Yes                         | Yes               |
| related         | Search related keywords                        | Yes                         | Yes               |
|                 |                                                |                             |                   |

For more on ↗️ [GoogleGuide](https://www.googleguide.com/advanced_operators_reference.html).

utilize google hacking database from [exploit-db](https://www.exploit-db.com).


#### Web Archive
What is deleted from the internet is not necessarily deleted from Google. Every page that is visited by Google is backed up as a snapshot in Google's cache servers. Typically, it is intended to see whether Google can serve you the best available page based on your search query. The same can be utilized to gather information about our target. For example, say a hacked database's details were posted in sampledatadumpwebsite.com, and that website or the link is taken off the internet. If the page is accessed by Google, this information serves the attackers a lot of information such as usernames, password hashes, what type of backend was being utilized, and other relevant technological and policy information. The following link is the first level of harvesting past data: https://web.archive.org/web/.


#### Shodan and Censys.io


#### exploit-db
↗ [Exploit Database & Google Hacking & GHDB](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Sections/📌%20Vulnerability%20Government（漏洞管控）/Vulnerability%20Databases%20&%20Sources/Exploit%20Database%20&%20Google%20Hacking%20&%20GHDB.md)


#### Other Sources...
↗ [Web Content Search Services & Wiki Projects & Wikimedia Foundation (WMF)](../../../../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/🔍%20Web%20Content%20Search%20Services%20&%20Wiki%20Projects%20&%20Wikimedia%20Foundation%20(WMF)/Web%20Content%20Search%20Services%20&%20Wiki%20Projects%20&%20Wikimedia%20Foundation%20(WMF).md)

https://pastebin.com


#### 👉 miranda.py


### Dark web
The dark web is the encrypted network that exists between Tor servers and their clients, whereas the deep web is simply the content of databases and other web services that for one reason or another cannot be indexed by conventional search engines such as Google.

Some sites like http://deepdotweb.com list available market list on dark web.

>  see ↗️  [Dark web](../../../../../🔑 CS_Core/🏎️ Networking/📌 Basics/0x02 Application Layer/Dark web/Dark web.md) for more.


### Security breach
A security breach is any incident that results in unauthorized access of data, applications, services, networks, and/or devices by bypassing their underlying security mechanisms. These websites have an archive of breached data.
- http://zone-h.com
- https://databases.today
- https://haveibeenpwned.com


### Threat Intelligence
Threat intelligence is controlled, calculated, and refined information about potential or current attacks that threaten an organization. The primary purpose of this kind of intelligence is to ensure organizations are aware of the current risks, such as **Advanced Persistent Threats** (**APTs**), **zero-day exploits**, and other severe external threats. 

Penetration testers or attackers will always subscribe to these kinds of open source threat intelligence frameworks, such as STIX and TAXII, or utilize, GOSINT framework for **indicators of compromise** (**IOCs**)



## 3️⃣ User Profiling
Lists of commonly used passwords are available for download, and are stored locally on Kali in the `/usr/share/wordlists` directory. However this is only the relflection of mass choices. For particular user, there's a better way. 


### Gathering usernames & email address
#### 👉 theHarvester
The theHarvester tool is a Python script that searches through popular search engines and other sites for email addresses, hosts, and sub-domains.

Using theHarvester is relatively simple, as there are only a few command switches to set. The options available are as follows:
- -d: This identifies the domain to be searched; usually the domain or target's website.  
- -b: This identifies the source for extracting the data; it must be one of the following: Bing, BingAPI, Google, Google-Profiles, Jigsaw, LinkedIn, People123, PGP, or All.
- -l: This limiting option instructs theHarvester to only harvest data from a specified number of returned search results.  
- -f: This option is used to save the final results to an HTML and an XML file. If this option is omitted, the results will be displayed on the screen, and not saved.


### Creating custom wordlists for cracking passwords
#### 👉 CUPP
↗ [CUPP (Common User Password Profiler)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/📌%20Wordlist%20&%20User%20Password%20Profile/CUPP%20(Common%20User%20Password%20Profiler).md)


#### twofi
🔗 https://github.com/digininja/twofi/tree/master

While we can profile a user utilizing social media platforms such as Facebook, Twitter, LinkedIn, and so on, we can also use twofi, which stands for **Twitter words of interest**. This tool is written in Ruby script and utilizes the Twitter API to generate a custom list of words that can be utilized for offline password cracking.


#### 👉 CeWL
CeWL is a Ruby app that spiders a given URL to a specified depth, optionally following external links, and returns a list of words that can then be used for password crackers such as **John the Ripper**.



## Ref
[NATO Open Source Intelligence: Reference Documents]: http://information-retrieval.info/docs/NATO-OSINT.html

[ATP 2-22.9]