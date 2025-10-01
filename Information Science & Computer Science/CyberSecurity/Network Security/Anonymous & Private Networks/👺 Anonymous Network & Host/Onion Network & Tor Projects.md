# Onion Network & Tor Projects

[TOC]



## Res
🏠 https://www.torproject.org
🚧 https://gitlab.torproject.org/tpo/team

📄 👨‍💻 🫂 https://metrics.torproject.org
Tor Metrics archives historical data about the Tor ecosystem, collects data from the public Tor network and related services, and assists in developing novel approaches to safe, privacy preserving data collection.


### Related Topics
↗ [DarkWeb](../DarkWeb.md)
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


### Tor alternatives still in development
The following projects are still in development, but are working toward creating even stronger anonymity networks, but for more specific applications. Tor was created as a sort of generic, one size fits all solution for anonymous web use. These projects are more focused on specific applications of web use.
#### Aqua/Herd
[Aqua](https://aqua.mpi-sws.org/) is a file sharing network designed to be completely anonymous, while [Herd](http://www.sigcomm.org/node/3865) is an anonymous Voice over IP network. The designers are working up a means of stripping the metadata from the network traffic, which is the primary way of tracing a client and the server that client is communicating with.
#### Vuvuzela/Alpenhorn
[Alpenhorn](https://github.com/vuvuzela/alpenhorn) is the second iteration of Vuvuzela, named after the horn normally used at soccer matches in Latin America and Africa. Alpenhorn is an anonymous, metadata free chat program that can be scaled to millions of users, in theory. Expect a public beta in the near future.
#### Dissent
If anonymity is more important to you than latency, then [Dissent](http://motherboard.vice.com/read/dissent-a-new-type-of-security-tool-could-markedly-improve-online-anonymity) offers some of the strongest available anonymity. Due to the higher latency and low bandwidth, dissent is best used for blogging, micro-blogging or even IRC type communications. The way Dissent works is rather simple, but bandwidth heavy. When one client transmits anything, all the other clients transmit a package of the same size. Instead of using onion routing, Dissent is based on DC-nets, a dining cryptographers algorithm. Combine that with a verifiable shuffle algorithm and you end up with the most anonymous design being looked at by researchers today.
#### Riffle
Anonymous file sharing is becoming more and more sought after. [Riffle](http://www.theinquirer.net/inquirer/news/2464646/riffle-is-a-new-anonymous-sharing-technique-10-times-faster-than-predecessors) is yet another attempt at providing an anonymous way for a user to share files of any size. However, it is not meant as a replacement for Tor, mainly because file sharing over Tor breaks anonymity. Riffle is meant to augment Tor by providing Tor users with a truly anonymous way to share files, without choking the Tor network. Inspired by Dissent, Riffle also uses a shuffle algorithm but drops the DC-net cryptographic algorithm.
#### Riposte
[Riposte was inspired by Dissent](http://www.scs.stanford.edu/~dm/home/papers/corrigan-gibbs:riposte.pdf), but focused on micro-blogging. Micro-blogging is currently the realm of Twitter, Pinterest and other such services where users update their “blog” with small snippets of information like quotes from famous people or requests for feedback or even requests to join networks. Riffle is designed to allow a user to micro-blog anonymously at the expense of internet speed. Following in the footsteps of Dissent, Riposte also uses the DC-net type setup for hiding the original transmission in a storm of transmissions of random data bits of the same size.



## Intro
> 🔗 [What is Tor? The key to internet anonymity and safe, legal usage](https://www.comparitech.com/blog/vpn-privacy/ultimate-guide-to-tor/) 
> 🔗 [The Dark Web Browser: What Is Tor, Is It Safe, and How to Use It | avast](https://www.avast.com/c-tor-dark-web-browser)

**Tor (The Onion Router) is a network that anonymizes web traffic to provide truly private web browsing.**  The Tor Browser hides your IP address and browsing activity by redirecting web traffic through a series of different routers known as nodes. Because Tor hides browsing activity and blocks tracking, it’s used by whistleblowers, journalists, and others who want to protect their privacy online.


### How to Circumvent GFW 🇨🇳
📄 [how to circumvent GFW](https://support.torproject.org/censorship/connecting-from-china/)

↗ [FAQ / 👉 How to Circumvent GFW 🇨🇳](../FAQ.md#👉%20How%20to%20Circumvent%20GFW%20🇨🇳)


### 💦 Use Tor with Caution
> Although communications are now protected using the Tor network, it is possible for a DNS leak to occur, which occurs when your system makes a DNS request to provide your identity to an ISP.
> 
> Check for DNS leaks:  ↗ [DNS & Domain Reconnaissance](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Network-Based/DNS%20&%20Domain%20Reconnaissance.md)

When using Tor, some considerations to be kept in mind are as follows:
- Tor provides an anonymizing service, but it does not guarantee privacy. Owners of the exit nodes are able to sniff traffic and may be able to access user credentials.  
- Vulnerabilities in the Tor browser bundle have reportedly been used by law enforcement to exploit systems and gain user information.
- ProxyChains do not handle UDP (User Datagram Protocol) traffic.  
- Some applications and services cannot run over this environment—in particular, Metasploit and nmap may break. The stealth SYN scan of nmap breaks out of ProxyChains and the connect scan is invoked instead; this can leak information to the target.
- Some browser applications (ActiveX, Adobe's PDF applications, Flash, Java, RealPlay, and QuickTime) can be used to obtain your IP address. 
- Attackers can also use random chaining. With this option, ProxyChains will randomly choose IP addresses from the our list (local Ethernet IP, for example, 127.0.0.1, 192.168.x.x or 172.16.x.x) and use them for creating our ProxyChain. This means that each time we use ProxyChains, the chain of proxies will look different to the target, making it harder to track our traffic from its source.
- To do so, in a similar fashion, edit the /etc/proxychains.conf file and comment out dynamic chains and uncomment random_chain, since we can only use one of these options at a time.  
- In addition, attackers can uncomment the line with chain_len, which will then determine the number of IP address in the chain while creating a random proxy chain.



##   Tor Projects
> 🔗 https://www.comparitech.com/blog/vpn-privacy/ultimate-guide-to-tor/

Finally, as an added bonus, here is a list of all the other projects in the works over at TorProject, all with an interest in maintaining internet privacy for any and all who wish to make use of their products. Some of these are rather obvious and user friendly, while others are more behind-the-scenes. A couple of different programming libraries are available for software developers to allow their products to communicate with The Onion Network.


### The Tor browser
This is what most people use to access Tor. It’s very simple to acquire and use. The browser is actually a customized version of Mozilla Firefox, and therefore looks and feels like any other web browser. The customization is designed to leave no trace of your web surfing on the computer. Simply download the compressed file for your operating system, be it Windows, MacOS or Linux, extract it to its own folder, run the executable file inside that folder and surf to your heart’s content in complete anonymity. When you close the browser, all traces of your browsing are cleared from memory. Only your bookmarks and downloads are left behind.


### .onion web sites
These are websites that are only accessible within the Tor network, and by knowing where to go. There are special search engines like Onion.city and Onion.to, as well as a host of others. Keep in mind, though that there are hoaxes, scams, and honeypots strewn throughout the DarkNet. Be wary of what you click on. There are also some very disturbing images available in there. You have been warned.


### Orbot
You can access the Tor network on your Android device using Orbot. Orbot creates a Tor proxy on your device so that all internet traffic from your device goes through the Tor network. That means that all the apps on your phone or tablet will have their traffic routed through Tor as well. Of course, some apps are designed not to be anonymous and will break the anonymity provided by the Tor network. True anonymity requires just a few steps to make sure tattlers are disabled or, at the very least, not running while you’re tapping into Tor. Remember to disable auto-sync and shut down any apps that automatically log you into an account, like Gmail, Yahoo!, Facebook, Twitter and the like.


### OrFox
To go along with Orbot, there is also a browser for Android devices that allows you to surf the net using Tor. However, this only applies to web surfing in a browser. All the other apps on your Android device will be communicating through normal lines of traffic without the benefit of anonymity provided by the onion router.


### Tails
This might be the ultimate usage of Tor. It is a “live operating system” that is run either from a CD or a USB thumb drive or memory stick. Put this in a computer right before you restart. If the computer’s BIO is setup correctly, it will load Tails instead of the OS that is loaded on the computer’s hard drive. Perfect for using a computer that does not belong to you for surfing the web anonymously and leaving no trace of your browsing anywhere on the computer. The computer’s internal hard drive is not touched while the computer is running Tails and the computer’s memory is erased with each reboot. Also, any cookies or temporary internet files that are loaded into Tails are not recorded to the CD or thumb drive while in use so those are also lost as soon as the computer is restarted.


### Arm
You were first introduced to Arm at the end of the “[How to build your own Tor relay or node](https://www.comparitech.com/blog/vpn-privacy/build-tor-relay-node/)” article. Arm is a command line-based monitor for a Tor relay. It displays real-time information for a relay or bridge in the Tor network. This helps you keep an eye on your relay by providing statistics, metrics and health reports. You can learn how many Tor users have accessed Tor through your relay or how much of your available bandwidth is being used in support of Tor.


### Atlas
Atlas is a web application that provides information on the current status of the Tor network’s relays. Type the name of a relay into the search box at the top of the site and get a basic overview of its current status. Click on the relay’s nickname to get a much more detailed report along with an explanation of all the flags that apply to that particular node.


### Pluggable Transports
Used to change the way your data stream appears. This is yet another way of keeping you connected to Tor. Some entities have started blocking Tor traffic based on the traffic itself, not the IP address of the relay or bridge that is being used to connect to the network. Pluggable Transports change the look and feel of Tor traffic to appear to be normal, un-Tor-like traffic to escape detection.


### Stem
This is the library that developers turn to for creating programs to interact with Tor. Arm is one example of such a program.


### OONI
While Atlas is a site showing the status of the Tor network, OONI is the site showing the status of censorship in the world today. It does this by probing the internet using a known good result and comparing that result to an unprotected, unencrypted result. Any changes in the results are evidence of tampering or censorship.


### TorBirdy
This is an extension for Mozilla Thunderbird that configures it to run on the Tor network. Consider it a Torbutton for Thunderbird.


### Onionoo
Onionoo is a web-based protocol that gets information relating to the current status of The Onion Network. This information is not in a human readable format. It is meant to act as a service for other applications like Atlas or Tor2Web.


### Metrics Portal
As the name implies, this is where you get metrics relating to the Tor network like available bandwidth and the estimated size of the current userbase. Any researcher that is interested in any specific, detailed statistics about the Tor network can find it here, or submit a request for the metric that they are looking for.


### Shadow
A simulation of a network using the real Tor browser. This is most useful in a lab type setup when you want to see how Tor can affect your network, without impacting your real network. Perfect for experimenting with Tor and various other programs before allowing or implementing them on your local area network.


### Tor2Web
Grants non-Tor browser users access to websites running in Tor hidden services. The idea is to allow internet users the option of sacrificing their anonymity while still granting them access to information hidden inside the Tor network, while at the same time not sacrificing the anonymity of the websites that they are accessing.


### Tor Messenger
An instant messenger client that uses the Tor network for all of its transmissions. Secure by default with cross platform capabilities, it is an ideal chat program for anyone wanting to stay secure and anonymous.


### txtorcon
This is a programmers library for writing Python based applications that talks to or launches a Tor program. It contains all the utilities for accessing Tor’s circuits, streams, logging functions and hidden-services.



## Ref
[使用tor 不要做这些事情]: https://www.iyouport.org/使用-tor-保护自己时千万不要做这九件事！/

[whonix 小白指南]: https://www.iyouport.org/妈妈说，操作安全永远不能被忽视%E2%80%8A-%E2%80%8A匿名工具：/

[tor洋葱浏览器的配置]: https://ruanjianlun.xyz/tor%E6%B4%8B%E8%91%B1%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE/

[👍 配置tor browser实现访问暗网]: http://uuzdaisuki.com/2018/03/01/配置tor-browser实现访问暗网/

