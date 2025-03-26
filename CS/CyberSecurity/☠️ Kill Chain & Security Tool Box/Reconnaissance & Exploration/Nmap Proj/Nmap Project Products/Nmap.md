# Nmap

[TOC]



## Res
📂 https://nmap.org/book/man.html#man-description
Chapter 15. Nmap Reference Guide
- [Description](https://nmap.org/book/man.html#man-description)
- [Options Summary](https://nmap.org/book/man-briefoptions.html)
- [Target Specification](https://nmap.org/book/man-target-specification.html)
- [Host Discovery](https://nmap.org/book/man-host-discovery.html)
- [Port Scanning Basics](https://nmap.org/book/man-port-scanning-basics.html)
- [Port Scanning Techniques](https://nmap.org/book/man-port-scanning-techniques.html)
- [Port Specification and Scan Order](https://nmap.org/book/man-port-specification.html)
- [Service and Version Detection](https://nmap.org/book/man-version-detection.html)
- [OS Detection](https://nmap.org/book/man-os-detection.html)
- [Nmap Scripting Engine (NSE)](https://nmap.org/book/man-nse.html)
- [Timing and Performance](https://nmap.org/book/man-performance.html)
- [Firewall/IDS Evasion and Spoofing](https://nmap.org/book/man-bypass-firewalls-ids.html)
- [Output](https://nmap.org/book/man-output.html)
- [Miscellaneous Options](https://nmap.org/book/man-misc-options.html)
- [Runtime Interaction](https://nmap.org/book/man-runtime-interaction.html)
- [Examples](https://nmap.org/book/man-examples.html)
- [Nmap Book](https://nmap.org/book/man-book.html)
- [Bugs](https://nmap.org/book/man-bugs.html)
- [Authors](https://nmap.org/book/man-author.html)
- [Legal Notices](https://nmap.org/book/man-legal.html)
    - [Nmap Copyright and Licensing](https://nmap.org/book/man-legal.html#nmap-copyright)
    - [Creative Commons License for this Nmap Guide](https://nmap.org/book/man-legal.html#man-copyright)
    - [Source Code Availability and Community Contributions](https://nmap.org/book/man-legal.html#source-contrib)
    - [No Warranty](https://nmap.org/book/man-legal.html#no-warranty)
    - [Inappropriate Usage](https://nmap.org/book/man-legal.html#inappropriate-usage)
    - [Third-Party Software and Funding Notices](https://nmap.org/book/man-legal.html#third-party-soft)
    - [United States Export Control](https://nmap.org/book/man-legal.html#us-export)



## Intro
Nmap (“Network Mapper”) is an open source tool for network exploration and security auditing. It was designed to rapidly scan large networks, although it works fine against single hosts. Nmap uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics. While Nmap is commonly used for security audits, many systems and network administrators find it useful for routine tasks such as network inventory, managing service upgrade schedules, and monitoring host or service uptime.


### Interesting Ports Tables
The output from Nmap is a list of scanned targets, with supplemental information on each depending on the options used. Key among that information is the “**interesting ports table**”. That table lists the port number and protocol, service name, and state. The state is either `open`, `filtered`, `closed`, or `unfiltered`. `Open` means that an application on the target machine is listening for connections/packets on that port.`Filtered` means that a firewall, filter, or other network obstacle is blocking the port so that Nmap cannot tell whether it is `open` or `closed`.`Closed` ports have no application listening on them, though they could open up at any time. Ports are classified as `unfiltered` when they are responsive to Nmap's probes, but Nmap cannot determine whether they are open or closed. Nmap reports the state combinations `open|filtered`and `closed|filtered` when it cannot determine which of the two states describe a port. The port table may also include software version details when version detection has been requested. When an IP protocol scan is requested (`-sO`), Nmap provides information on supported IP protocols rather than listening ports.

In addition to the interesting ports table, Nmap can provide further information on targets, including reverse DNS names, operating system guesses, device types, and MAC addresses.



## Ref
[👍 Nmap命令扫描详解]: https://developer.aliyun.com/article/524792
[👍 你真的会用Nmap吗？一文读懂Nmap的正确使用方法]: https://www.freebuf.com/sectool/277822.html

[👍 👍 运用Scapy编写类似于Nmap的端口扫描脚本]: https://xz.aliyun.com/t/4704

[nmap超详细使用教程 | CSDN]: http://t.csdnimg.cn/M1kwi
