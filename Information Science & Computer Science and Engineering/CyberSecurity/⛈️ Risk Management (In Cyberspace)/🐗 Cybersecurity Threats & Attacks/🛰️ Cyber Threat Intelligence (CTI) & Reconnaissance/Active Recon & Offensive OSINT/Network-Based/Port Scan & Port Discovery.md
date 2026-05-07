# Port Scan & Port Discovery

[TOC]



## Res
### Related Projects
↗ [Nettools/ 👉 netstat](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Nettools.md#👉%20netstat)
↗ [Process Management Basics/ 👉 `lsof`](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/🪆%20Process%20Management/Process%20Management%20Basics.md#👉%20`lsof`)

↗ [nmap /Port Scanning](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/⭐️%20Nmap%20Mechanisms%20&%20Network%20Scanning%20Principles/Port%20Scanning/Port%20Scanning.md)



## Intro
Port scanning is the process of connecting to TCP and UDP ports to determine what services and applications are running on the target device. There are 65,535 ports each for both TCP and UDP on each system. Some ports are known to be associated with particular services (for instance, TCP 20 and 21 are the usual ports for the File Transfer Protocol (FTP) service). 

The first 1,024 are the **well-known ports**, and most defined services run over ports in this range; accepted services and ports are maintained by 🔗 [IANA](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml).

![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.00.58%20PM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.01.34%20PM.png)

> Although there are accepted ports for particular services, such as port 80 for web-based traffic, services can be directed to use any port. This option is frequently used to hide particular services, particularly if the service is known to be vulnerable to attack. However, if attackers complete a port scan and do not find an expected service or find it using an unusual port, they will be prompted to investigate further.


↗ [Port Scanning](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/⭐️%20Nmap%20Mechanisms%20&%20Network%20Scanning%20Principles/Port%20Scanning/Port%20Scanning.md)



## 👉 `nmap`
↗ [Nmap (The Scanner)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/Nmap%20Project%20Products/Nmap%20(The%20Scanner).md)

The universal port mapping tool, nmap, relies on active stack fingerprinting. Specially crafted packets are sent to the target system, and the response of the OS to those packets allows nmap to identify the OS. In order for nmap to work, at least one listening port must be open, and the operating system must be known and fingerprinted, with a copy of that fingerprint in the local database.

Using nmap for port discovery is very noisy—it will be detected and logged by network security devices. Some points to remember are as follows:
- Attackers and penetration testers focused on stealth will test only the ports that impact the kill chain they are following to their specific target. If they are launching an attack that exploits vulnerabilities in a web server, they will search for targets with port 80 or port 8080 accessible.
- Most port scanners have default lists of ports that are scanned—ensure that you know what is on that list and what has been omitted. Consider both TCP and UDP ports.
- Successful scanning requires a deep knowledge of TCP/IP and related protocols, networking, and how particular tools work. For example, SCTP is an increasingly common protocol on networks, but it is rarely tested on corporate networks.
- Port scanning, even when done slowly, can impact a network. Some older network equipment and equipment from specific vendors will lock when receiving or transmitting a port scan, hence turning a scan into a denial of service attack.
- Tools used to scan a port, particularly nmap, are being extended with regards to functionalities. They can also be used to detect vulnerabilities and exploit simple security holes.



## 👉 `netcat` (NC) | `ncat`
↗ [The GNU Netcat (NC)](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/The%20GNU%20Netcat%20(NC).md)
↗ [Ncat (Netcat for the 21th century)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/Nmap%20Project%20Products/Ncat%20(Netcat%20for%20the%2021th%20century).md)

> While attackers utilize the proxying application and Tor network, it is also possible to write their own custom network port scanner. The following one-line command can be utilized during penetration testing to identify the list of open ports just by using netcat: `while read r; do nc -v -z $r 1-65535; done < iplist`



## Ref
[👍 浅谈端口扫描技术]: https://xz.aliyun.com/t/5376
[👍 👍 运用Scapy编写类似于Nmap的端口扫描脚本]: https://xz.aliyun.com/t/4704

[python+scapy实现扫描工具（扫描主机、端口）]: https://blog.csdn.net/hell_orld/article/details/109231819

[👍 Port Scanning Techniques | Nmap]: https://nmap.org/book/man-port-scanning-techniques.html

[【nmap】常用五种扫描原理详解 -TCP SYN、完整TCP、TCP ACK、TCP FIN/Xmas/NULL、UDP]: https://blog.csdn.net/m0_62783065/article/details/126803061
