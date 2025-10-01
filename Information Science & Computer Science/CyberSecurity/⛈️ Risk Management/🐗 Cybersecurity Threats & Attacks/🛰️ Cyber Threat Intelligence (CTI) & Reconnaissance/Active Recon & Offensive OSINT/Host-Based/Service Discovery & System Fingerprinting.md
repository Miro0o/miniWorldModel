# Service Discovery & System Fingerprinting

[TOC]



## Res
### Related Topics
↗ [Cyberspace Assets Mapping & Management](../../../../🐄%20Cyberspace%20Assets/🧨%20Cyberspace%20Assets%20Mapping%20&%20Management/Cyberspace%20Assets%20Mapping%20&%20Management.md)

↗ [Service & Application Version Detection](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/⭐️%20Nmap%20Mechanisms%20&%20Network%20Scanning%20Principles/Service%20&%20Application%20Version%20Detection/Service%20&%20Application%20Version%20Detection.md)
↗ [Remote OS Detection](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/⭐️%20Nmap%20Mechanisms%20&%20Network%20Scanning%20Principles/Remote%20OS%20Detection/Remote%20OS%20Detection.md)

↗ xprobe2.



## Intro
The final goal of the enumeration portion of reconnaissance is to identify the services and applications that are operational on the target system. If possible, the attacker would want to know the **service type**, **vendor**, and **version to facilitate** the identification of any vulnerability.

The following are some of the several techniques used to determine active services:
- **Identify default ports and services**: If the remote system is identified as having a Microsoft operating system with port 80 open (the WWW service), an attacker may assume that a default installation of Microsoft IIS is installed. Additional testing will be used to verify this assumption (nmap). 
- **Banner grabbing**: This is done using tools such as amap, netcat, nmap, and Telnet.
- **Review default web pages**: Some applications install with default administration, error, or other pages. If attackers access these, they will provide guidance on installed applications that may be vulnerable to attack. In the following screenshot, the attacker can easily identify the version of Apache Tomcat that has been installed on the target system.
- **Review source code**: Poorly configured web-based applications may respond to certain HTTP requests such as HEAD or OPTIONS with a response that includes the web server software version, and, possibly, the base operating system or the scripting environment in use.



## Active Directory Domain Servers Discovery
Often during an internal penetration testing activity, penetration testers will be provided with a username and password. In real-world scenarios, the attackers are inside the network and an attack scenario would be what they could do with normal user access and how they elevate the privileges to compromise the enterprise domain.

### 👉 `rpcclient`



## Operating System Fingerprinting
Determining the operating system of a remote system is conducted using two types of scans: active fingerprinting & passive fingerprinting. 

Active fingerprinting is faster and more accurate than passive fingerprinting.

![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.02.31%20PM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.02.47%20PM.png)


### Banner Grabbing
> 🔗 https://en.wikipedia.org/wiki/Banner_grabbing

**Banner grabbing** is a technique used to gain information about a computer system on a network and the services running on its open ports. Administrators can use this to take inventory of the systems and services on their network. However, an intruder can use banner grabbing in order to find network [hosts](https://en.wikipedia.org/wiki/Host_\(network\) "Host (network)") that are running versions of applications and operating systems with known [exploits](https://en.wikipedia.org/wiki/Exploit_\(computer_security\) "Exploit (computer security)").

Some examples of [service ports](https://en.wikipedia.org/wiki/Port_\(computer_networking\) "Port (computer networking)") used for banner grabbing are those used by [HTTP](https://en.wikipedia.org/wiki/HTTP "HTTP"), [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol"), and [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol "Simple Mail Transfer Protocol"); ports 80, 21, and 587 respectively. Tools commonly used to perform banner grabbing are [Telnet](https://en.wikipedia.org/wiki/Telnet "Telnet"), [Nmap](https://en.wikipedia.org/wiki/Nmap "Nmap") and [Netcat](https://en.wikipedia.org/wiki/Netcat "Netcat").

For example, one could establish a connection to a target web server using Netcat, then send an HTTP request. The response will typically contain information about the service running on the host:
```
[root@prober]# nc www.targethost.com 80
HEAD / HTTP/1.1

HTTP/1.1 200 OK
Date: Mon, 11 May 2009 22:10:40 EST
Server: Apache/2.0.46 (Unix)  (Red Hat/Linux)
Last-Modified: Thu, 16 Apr 2009 11:20:14 PST
ETag: "1986-69b-123a4bc6"
Accept-Ranges: bytes
Content-Length: 1110
Connection: close
Content-Type: text/html
```

This information may be used by an administrator to catalog this system, or by an intruder to narrow down a list of applicable exploits.

To prevent this, network administrators should restrict access to services on their networks and shut down unused or unnecessary services running on network hosts.

[Shodan](https://en.wikipedia.org/wiki/Shodan_\(website\) "Shodan (website)") is a search engine for banners grabbed from port scanning the Internet.


### Active Fingerprinting
Active fingerprinting: The attacker sends normal and malformed packets to the target and records its response pattern, referred to as the fingerprint. By comparing the fingerprint to a local database, the operating system can be determined.
#### 👉 nmap
↗ [Nmap (The Scanner)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/Nmap%20Project%20Products/Nmap%20(The%20Scanner).md)
#### 👉 xprobe2


### Passive Fingerprinting
Passive fingerprinting: The attacker sniffs, or records and analyzes the packet stream to determine the characteristics of the packets
#### 👉 Wireshark(?)
↗ [Wireshark](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Reconnaissance%20&%20Exploration%20Tools/📌%20OSINT%20&%20Passive%20Recon%20Tools/Packet%20Analyzing%20&%20Sniffing%20&%20Spoofing%20Tools/Wireshark/Wireshark.md)



## Web Services Discovery & Fingerprinting
### 👉 sslscan
🏠 https://github.com/rbsec/sslscan

sslscan version 2 has now been released. This includes a major rewrite of the backend scanning code, which means that it is no longer reliant on the version of OpenSSL for many checks. This means that it is possible to support legacy protocols (SSLv2 and SSLv3), as well as supporting TLSv1.3 - regardless of the version of OpenSSL that it has been compiled against. (2023/10)



## Disk Scan
### 👉 dirscan
🚧 https://github.com/j3ers3/Dirscan
目录扫描

🚧 https://github.com/orf/dirscan
Dirscan is a high-performance tool for quickly inspecting the contents of huge (possibly networked) disks. It provides a summary of every single directory on a given disk, complete with the number of files within, their total size, and the latest time a file was created, accessed or modified.

It's designed for disks that are too large to inspect with traditional tools, and it:
- Is many orders of magnitudes faster than tools like `du`, `find` or `tree`
- Can max out any disk you give it, assuming you have enough CPU resources to keep up.
- Produces a simple JSON or CSV output that can be analysed by the built in viewer or other tools
- Supports a customisable number of threads
- Streams results to the output file, keeping relatively constant memory usage with any sized disk.



## Ref

