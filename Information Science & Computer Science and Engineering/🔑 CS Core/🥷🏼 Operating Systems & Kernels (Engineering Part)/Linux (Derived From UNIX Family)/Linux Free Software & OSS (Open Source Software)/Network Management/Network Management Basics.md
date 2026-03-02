# Network Management Basics

[TOC]



## Res
### Related Topics
↗ [Network Programming & RPC](../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
↗ [Reconnaissance & Exploration Tools](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Reconnaissance%20&%20Exploration%20Tools/Reconnaissance%20&%20Exploration%20Tools.md)



## RPC /File Transmission
### 👉 FTP
↗ [FTP (File Transfer Protocol)](../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/File%20Transferring/FTP%20(File%20Transfer%20Protocol)/FTP%20(File%20Transfer%20Protocol).md)


### 👉 `telent`
[telent](https://www.cnblogs.com/peida/archive/2013/03/13/2956992.html)
telent $\subset$ TELENT $\subset$ TCP/IP
```shell
$ telnet <ip_address> <port_number>

$ telnet <domain_name> <port_number>
```

powershell
```shell
$ Test-NetConnection <ip_address> -p <port_number>

$ Test-NetConnection 192.168.178.35 -p 389
```


### 👉 `ssh` -> `mosh` /`autossh` -> `et`
> ↗ [SSH Clients & Remote Shell](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/SSH%20Clients%20&%20Remote%20Shell/SSH%20Clients%20&%20Remote%20Shell.md)
> ↗ [ET (Eternal Terminal)](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/SSH%20Clients%20&%20Remote%20Shell/ET%20(Eternal%20Terminal).md)
> ↗ [autossh](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/SSH%20Clients%20&%20Remote%20Shell/autossh.md)
> ↗ [Mosh (Mobile SHell)](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/SSH%20Clients%20&%20Remote%20Shell/Mosh%20(Mobile%20SHell).md)


**[SSH](https://www.openssh.com/)** stands for Secure Shell. It's the de facto standard for secure communication between two hosts on internet (LAN as well). 

**[Mosh](https://github.com/jarun/nnn/tree/master/plugins#installation)** is improved ssh. It adds some convinient features for dev test settings, though it has security concern under production environment for its UDP usage and port number attribution strategy. However, some of it's fancy functions such as internet roam and autometically reconnect after exiting shell still makes it a handy tool in dev.

[**Eternal Terminal (ET)**](https://eternalterminal.dev) is a remote shell that automatically reconnects without interrupting the session. Learn how to install and use it 📂 [here](https://eternalterminal.dev/usermanual).

ET is inspired & based on [**mosh**](https://mosh.org/). ([ssh](https://www.openssh.com/) and [autossh](https://linux.die.net/man/1/autossh) as well)


### 👉 `curl` | `wget`

`curl` is a tool for transferring data from or to a server using URLs. It supports these protocols:
> DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S,RTMP, RTMPS, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP, WS and WSS.

`curl` is powered by `libcurl` for all transfer-related features.

[How to trust self-signed certificate in cURL command line? | Unix & Linux]: https://unix.stackexchange.com/a/582310/541298

---
GNU `Wget` is a free utility for non-interactive download of files from the Web.  It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies.

`Wget` is non-interactive, meaning that it can work in the background, while the user is not logged on.  This allows you to start a retrieval and disconnect from the system, letting `Wget` finish the work.  By contrast, most of the Web browsers require constant user's presence, which can be a great hindrance when transferring a lot of data.

`Wget` can follow links in HTML, XHTML, and CSS pages, to create local versions of remote web sites, fully recreating the directory structure of the original site.  This is sometimes referred to as "**recursive downloading**."  While doing that, `Wget` respects the Robot Exclusion Standard (/robots.txt).  `Wget` can be instructed to convert the links in downloaded files to point at the local files, for offline viewing.

`Wget` has been designed for robustness over slow or unstable network connections; if a download fails due to a network problem, it will keep retrying until the whole file has been retrieved.  If the server supports regetting, it will instruct the server to continue the download from where it left off.


```shell
wget -r -np -nH -R index.html http://url/including/files/you/want/to/download/
# -r : 遍历所有子目录
# -np : 不到上一层子目录去
# -nH : 不要将文件保存到主机名文件夹
# -R index.html: 不下载 index.html 文件
```


[curl VS wget]: https://www.baeldung.com/linux/curl-wget

**_wget_ is a simpler solution and only supports a small number of protocols.** It is very good for downloading files and can download directory structures recursively.
We also saw how **_curl_ supports a much larger range of protocols, making it a more general-purpose tool.**

- Protocol
	- HTTP
	- `CURL` --> STDOUT (console/terminal as default),  general-purpose tool for transferring data to or from a server.
	- `wget` --> specific file ,  basically a network downloader.
- Recursive download
	- http: _wget_ is _breadth-first_
	- ftp: _wget_ is _depth-first_

[linux服务器之间传输文件的四种方式]: https://blog.csdn.net/qw_xingzhe/article/details/80167888
[Linux curl 命令下载文件]: https://www.cnblogs.com/hujiapeng/p/8470099.html

[Downloading file from FTP using cURL]: https://superuser.com/a/265066/1656771



## Network Profiling
### Network Connections & Configuration
#### Basic Network Configuration & Net-tools
↗ [Nettools](Nettools.md)
#### 👉 `dhclient`
Description: **The Internet Systems Consortium DHCP Client**, `dhclient`, provides a means for configuring one or more network interfaces using the Dynamic Host Configuration Protocol, BOOTP protocol, or if these protocols fail, by statically assigning an address.
#### 👉 `dhcpcd`
> 🔗 https://wiki.linuxquestions.org/wiki/Dhcpcd

**dhcpcd** is a mature and stable standards compliant [DHCP](https://wiki.linuxquestions.org/wiki/DHCP "DHCP") [client](http://en.wikipedia.org/wiki/Client_(computing)). It is used to obtain an IP address and other information from a dhcp [server](https://wiki.linuxquestions.org/wiki/Server "Server"), renew the IP address lease time, and automatically configure the [network interface](https://wiki.linuxquestions.org/wiki/Network_interface "Network interface"). The program performs a similar function as [dhclient](https://wiki.linuxquestions.org/wiki/Dhclient "Dhclient").
#### 👉 `netstat` (deprecated) --> `ss` (Socket Statistics)
↗ [Nettools /👉 `netstat`](Nettools.md#👉%20`netstat`)
↗ [iproute2 /👉 `ss` (Socket Statistics)](iproute2.md#👉%20`ss`%20(Socket%20Statistics))
#### 👉 `ifconfig` (deprecated) --> `ip`
↗ [Nettools /👉 `ifconfig`](Nettools.md#👉%20ifconfig)

---
> `ip` is for linux OS. for macOS, there is a wrapper program 🔗 [iproute2mac](https://github.com/brona/iproute2mac) as an alternative. 

The **ip command** is used to assign an address to a network interface and/or configure network interface parameters on Linux operating systems. This command replaces old good and now deprecated ifconfig command on modern Linux distributions.
```shell
ip OBJECT help  
ip OBJECT h  
ip a help  
ip r help
```

|               |                  |                                                     |
| ------------- | ---------------- | --------------------------------------------------- |
| Object        | Abbreviated form | Purpose                                             |
| **link**      | l                | Network device.                                     |
| **address**   | a  <br>addr      | Protocol (IP or IPv6) address on a device.          |
| **addrlabel** | addrl            | Label configuration for protocol address selection. |
| **neighbour** | n  <br>neigh     | ARP or NDISC cache entry.                           |
| **route**     | r                | Routing table entry.                                |
| **rule**      | ru               | Rule in routing policy database.                    |
| **maddress**  | m  <br>maddr     | Multicast address.                                  |
| **mroute**    | mr               | Multicast routing cache entry.                      |
| **tunnel**    | t                | Tunnel over IP.                                     |
| **xfrm**      | x                | Framework for IPsec protocol.                       |
|               |                  |                                                     |
|               |                  |                                                     |

[👍 Linux ip Command Examples]: https://www.cyberciti.biz/faq/linux-ip-command-examples-usage-syntax/
[ip command in Mac OS X terminal]: https://superuser.com/q/687310/1656771

#### 👉 `bind9` | `dnsutils`

#### 👉 `ethtools`

#### 👉 `lspci`

[PCIe网卡查看工具 | Cnblog]: https://www.cnblogs.com/codestack/p/14042843.html

首先在x86系统中PCIe支持256个Bus， 每条Bus支持32个Device， 每个Device支持8个Function，所以PCIe设备关键信息组成为：DBDF(Domain,Bus,Deivce,Function)

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240611095255.png)

#### 👉 `dmidecode`
↗ [📌 Computer Profiling & System Visibility](../Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md)


### Network Usage
#### 👉 `nethogs`
[`nethogs`](https://github.com/raboof/nethogs)
#### 👉 `iftop`
[`iftop`](http://www.ex-parrot.com/pdw/iftop/)
#### 👉 `nload`

[Linux系统nload命令查看网速流量]: https://www.5yun.org/20932.html) 


### Package Analysis
↗ [Packet Analyzing & Sniffing & Spoofing](../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Packet%20Analyzing%20&%20Sniffing%20&%20Spoofing/Packet%20Analyzing%20&%20Sniffing%20&%20Spoofing.md)
↗ [Network Diagnostic & Packet Analysis](Network%20Diagnostic%20&%20Packet%20Analysis.md)
#### 👉 `ngrep`


#### 👉 `tcpdump`
↗ [tcpdump](tcpdump.md)



## Ref