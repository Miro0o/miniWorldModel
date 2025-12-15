# npcap

[TOC]



## Res
🏠 https://npcap.com

The primary documentation for Npcap is the [Npcap User's Guide](https://npcap.com/guide/). You can also refer to the [README file](https://github.com/nmap/npcap/blob/master/README.md) on Github. The changes in each new release are documented in the [Npcap Changelog](https://npcap.com/changelog).



## Intro
Npcap is the **Nmap Project's packet capture (and sending) library for Microsoft Windows**. It implements the open [Pcap API](https://en.wikipedia.org/wiki/Pcap) using a custom Windows kernel driver alongside our Windows build of [the excellent libpcap library](http://www.tcpdump.org/). This allows Windows software to capture raw network traffic (including wireless networks, wired ethernet, localhost traffic, and many VPNs) using a simple, portable API. Npcap allows for sending raw packets as well. 

Mac and Linux systems already include the **Pcap API**, so Npcap allows popular software such as [Nmap](https://nmap.org/) and [Wireshark](https://www.wireshark.org/) to run on all these platforms (and more) with a single codebase.

Npcap began in 2013 as some improvements to the (now discontinued) WinPcap library, but has been largely rewritten since then with [hundreds of releases](https://npcap.com/changelog) improving Npcap's speed, portability, security, and efficiency. 


### 👉 `wincap` (predecessor of `npcap`)
🏠 https://www.winpcap.org

15 September 2018

WinPcap, though still available for download (v4.1.3), has not seen an upgrade in many years and there are no road map/future plans to update the technology. While community support may persist, technical oversight by Riverbed staff, responses to questions posed by Riverbed resources, and bug reporting are no longer available.

Gordon Lyon, Nmap project founder, has created Npcap, a packet capture library for Windows, that includes WinPcap compatibility and may be a suitable replacement for WinPcap and WinPcap Pro. Information can be found at [https://nmap.org/npcap/.](https://nmap.org/npcap/) 



## Ref

