# Onion Network & Tor

[TOC]



## Res
🏠 https://www.torproject.org
🚧 https://gitlab.torproject.org/tpo/team

📄 👨‍💻 🫂 https://metrics.torproject.org
Tor Metrics archives historical data about the Tor ecosystem, collects data from the public Tor network and related services, and assists in developing novel approaches to safe, privacy preserving data collection.


### Related Topics
↗ [Darknet](../../Darknet.md)
↗ [Tails (The Amnesic Incognito Live System)](../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Distros/🌀%20Debian%20Based%20Linux/Tails%20(The%20Amnesic%20Incognito%20Live%20System).md)
↗ [Whonix](../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Distros/🌀%20Debian%20Based%20Linux/Whonix.md)


### Tor Networks Sites Index
📄 https://hiddenwikitor.com
The hidden wiki exists in many forms since the tor network started, it was always a place where people could find other hidden service URLs.

You can find sites for buying drugs and guns, fake identification, credit cards, bank accounts and even hackers for hire on the hidden wiki.


### Toolboxes
↗ [Whonix](../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Distros/🌀%20Debian%20Based%20Linux/Whonix.md)

https://bridges.torproject.org/bridges?transport=obfs4
official channel for obtaining obfs4 bridge (an alternative is using telegram bot)

https://check.torproject.org
check if current ip & network is using tor network

http://sourceforge.net/projects/linuxscripts/files/Tor-Buddy/
Tor buddy (2013) (this looks obsolete though.)

👍 🚧 https://github.com/scriptzteam/Tor-Bridges-Collector/tree/main
https://tor-bridges-collector.0xc0d3.xyz/ (backup)
Tor bridges collector

https://torscan-ru.ntc.party
Tor relay workers for use as Bridge (bridges)



## Intro
> 🔗 [The Dark Web Browser: What Is Tor, Is It Safe, and How to Use It | avast](https://www.avast.com/c-tor-dark-web-browser)

**Tor (The Onion Router) is a network that anonymizes web traffic to provide truly private web browsing.**  The Tor Browser hides your IP address and browsing activity by redirecting web traffic through a series of different routers known as nodes. Because Tor hides browsing activity and blocks tracking, it’s used by whistleblowers, journalists, and others who want to protect their privacy online.


### How to Circumvent GFW 🇨🇳
📄 [how to circumvent GFW](https://support.torproject.org/censorship/connecting-from-china/)

↗ [FAQ / 👉 How to Circumvent GFW 🇨🇳](../../FAQ.md#👉%20How%20to%20Circumvent%20GFW%20🇨🇳)


### 💦 Use Tor with Caution
> Although communications are now protected using the Tor network, it is possible for a DNS leak to occur, which occurs when your system makes a DNS request to provide your identity to an ISP.
> 
> 🔗 Check for DNS leaks:  

When using Tor, some considerations to be kept in mind are as follows:
- Tor provides an anonymizing service, but it does not guarantee privacy. Owners of the exit nodes are able to sniff traffic and may be able to access user credentials.  
- Vulnerabilities in the Tor browser bundle have reportedly been used by law enforcement to exploit systems and gain user information.
- ProxyChains do not handle UDP (User Datagram Protocol) traffic.  
- Some applications and services cannot run over this environment—in particular, Metasploit and nmap may break. The stealth SYN scan of nmap breaks out of ProxyChains and the connect scan is invoked instead; this can leak information to the target.
- Some browser applications (ActiveX, Adobe's PDF applications, Flash, Java, RealPlay, and QuickTime) can be used to obtain your IP address. 
- Attackers can also use random chaining. With this option, ProxyChains will randomly choose IP addresses from the our list (local Ethernet IP, for example, 127.0.0.1, 192.168.x.x or 172.16.x.x) and use them for creating our ProxyChain. This means that each time we use ProxyChains, the chain of proxies will look different to the target, making it harder to track our traffic from its source.
- To do so, in a similar fashion, edit the /etc/proxychains.conf file and comment out dynamic chains and uncomment random_chain, since we can only use one of these options at a time.  
- In addition, attackers can uncomment the line with chain_len, which will then determine the number of IP address in the chain while creating a random proxy chain.



## Ref
[使用tor 不要做这些事情]: https://www.iyouport.org/使用-tor-保护自己时千万不要做这九件事！/

[whonix 小白指南]: https://www.iyouport.org/妈妈说，操作安全永远不能被忽视%E2%80%8A-%E2%80%8A匿名工具：/

[tor洋葱浏览器的配置]: https://ruanjianlun.xyz/tor%E6%B4%8B%E8%91%B1%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE/

[👍 配置tor browser实现访问暗网]: http://uuzdaisuki.com/2018/03/01/配置tor-browser实现访问暗网/
