# Hosts(IP) Discovery & Network Enumeration

[TOC]



## Res
### Related Topics
↗ [Host Discovery (Ping Scanning)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/⭐️%20Nmap%20Mechanisms%20&%20Network%20Scanning%20Principles/Host%20Discovery%20(Ping%20Scanning)/Host%20Discovery%20(Ping%20Scanning).md)


### IP Information Search Sites
👍 https://ip.skk.moe
IP 地址查询/ CDN 命中节点测试/ DNS 出口查询/ 网络连通性检查 / 其他实用工具

https://ipinfo.io
Accurate IP address data that keeps pace with secure, specific, and forward-looking use cases.

https://en.ntunhs.net/IPInfo/EN/index.html

https://www.chaipip.com/aiwen.html
精确IP-地理位置定位

[Criminal IP](https://www.criminalip.io/en)  
[GreyNoise](https://www.greynoise.io/)  
[IKnowWhatYouDownload](https://iknowwhatyoudownload.com/)  
[Info by IP](https://www.infobyip.com/)  
[IP Address OSINT Attack Surface](https://www.osintdojo.com/diagrams/ip)  
[IP Fingerprints](https://www.ipfingerprints.com/)  
[IP Info](https://ipinfo.io/)  
[IP Void](https://www.ipvoid.com/)  
[Live IP Map](https://www.liveipmap.com/)  
[Mitaka](https://github.com/ninoseki/mitaka)  
[Shodan](https://www.shodan.io/)  
[Spyse](https://spyse.com/)  
[ThatsThem IP Lookup](https://thatsthem.com/reverse-ip-lookup)  
[Tor Exonerator](https://metrics.torproject.org/exonerator.html)  


### Other Resources
📄 [Security Scanners | Linux Gazette](https://linuxgazette.net/issue57/sharma.html)
[superscan](https://sectools.org/tool/superscan/)



## Intro
Host enumeration is the process of gaining specific particulars regarding a defined host. It is not enough to know that a server or wireless access point is present; instead, we need to expand the attack surface by identifying open ports, the base operating system, services that are running, and supporting applications.

This is highly intrusive and, unless care is taken, the active reconnaissance will be detected and logged by the target organization.


### Live Host Discovery (Ping Scanning)
The first step is to run network ping sweeps against a target address space and look for responses that indicate that a particular target is live and capable of responding. Historically, pinging is referred to as the use of **ICMP**; however, **TCP**, **UDP**, **ICMP**, and **ARP** traffic can also be used to identify live hosts.

![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%204.59.49%20PM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.00.16%20PM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.00.36%20PM.png)


| Application | Description |
|---|---|
|alive6 and detect-new- ip6|This is for IPv6 host detection. detect-new-ip6 runs on a scripted basis and identifies new IPv6 devices when added.|
|Dnmap and nmap|nmap is the standard network enumeration tool. dnmap is a distributed client-server implementation of the nmap scanner. PBNJ stores nmap results in a database, and then conducts historical analyses to identify new hosts.|
|fping, hping2,<br><br>hping3, and nping|These are packet crafters that respond to targets in various ways to identify live hosts.|



## Identification and Enumeration of Internal Network Hosts

### DHCP & Network Sniffing
The **Dynamic Host Configuration Protocol** (**DHCP**) is a service that dynamically assigns an IP address to the hosts on the network. 

This protocol operates at the MAC sub layer of the Data-Link layer of the TCP/IP protocol stack. 

Upon selection of auto-configuration, a broadcast query will be sent to the DHCP servers and when a response is received from the DHCP server, a broadcast query is sent by the client to the DHCP server requesting required information. The server will now assign an IP address to the system and other configuration parameters such as the **subnet mask**, **DNS**, and the **default gateway**.

We will now see traffic on **DNS**, **NBNS**, **BROWSER**, and other protocols that might potentially reveal hostnames, **VLAN** information, domains, and active subnets in the network.


### 👉 ifconfig
> ↗ [Network Management Basics /👉 `ifconfig` (deprecated) --> `ip` | `ipconfig`](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Network%20Management%20Basics.md#👉%20`ifconfig`%20(deprecated)%20-->%20`ip`%20|%20`ipconfig`)
> ↗ [Nettools /ifconfig](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Nettools.md#👉%20ifconfig)



## ARP broadcasting
### 👉 nmap
↗ [Nmap (The Scanner)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Reconnaissance%20&%20Exploration%20Tools/The%20Nmap%20Project/Nmap%20Project%20Products/Nmap%20(The%20Scanner).md)


### 👉 arp-scan



## Ping Sweep
**Ping sweep** is the process of pinging an entire range of network IP addresses or individual IPs to find out whether they're alive and responding. An attacker's first step in any large-scale scanning is to enumerate all of the hosts that are responding. 


### 👉 nmap & fping
Penetration testers can leverage `fping` or `nmap` or even write custom Bash scripts to do the activity:
```shell
fping -g IPrange
nmap -sP IPrange
for i in {1..254}; do ping -c 1 10.10.0.$i | grep 'from'; done
```
Sometimes, attackers can get a roadblock during the ping sweep due to the firewall that blocks all of the ICMP traffic. In case of an ICMP block, we can utilize the following command to identify alive hosts by specifying a specific list of port numbers during the ping sweep:
``` shell
nmap -sP -PT 80 IPrange
```


### 👉 Masscan
The biggest advantage of Masscan is randomization of hosts, ports, speed, flexibility, and compatibility.


### Customized Script
Now, save the script below into `anyname.sh` and then `chmod +x anyname.sh`. Next, run `./anyname.sh fileincludesipranges`
```shell
#!/bin/bash
function helptext {  
echo "enter the massnmap with the file input with list of IP address ranges"
}
if [ "$#" -ne 1 ]; then  
echo "Sorry cannot understand the command" helptext>&2  
exit 1

elif [ ! -s $1 ]; then  
echo "ooops it is empty" helptext>&2  
exit 1
fi

if [ "$(id -u)" != "0" ]; then  
echo "I assume you are running as root" helptext>&2  
exit 1
fi

for range in $(cat $1); do
store=$(echo $range | sed -e 's/\//_/g') echo "I am trying to create a store to dump now hangon"

mkdir -p pwd/$store; iptables -A INPUT -p tcp --dport 60000 -j DROP; echo - e "\n alright lets fire masscan ****"

masscan --open --banners --source-port 60000 -p0-65535 --max-rate 15000 - oBpwd/$store/masscan.bin $range; masscan --read$

if [ ! -s ./results/$store/masscan-output.txt ]; then echo "Thank you for wasting time"
else
awk'/open/ {print $4,$3,$2,$1}' ./results/$store/masscan-output.txt | awk'
/.+/{ if (!($1 in Val)) { Key[++i] = $1; } Val[$1] = Val[$1] $2 ","; END{ for (j = 1; j <= i; j++) {printf("%s:%s\n%s", Key[j], Val[Key[j]], (j == i) ? "" : "\n");}}'>}./results/$store/hostsalive.csv

for ipsfound in $(cat ./results/$store/hostsalive.csv); do IP=$(echo $TARGET | awk -F: '{print $1}'); PORT=$(echo $TARGET | awk -F: '{print $2}' | sed's/,$//'); FILENAME=$(echo $IP | awk'{print "nmap_"$1}'); nmap -vv -sV --version- intensity 5 -sT -O --max-rate 5000 -Pn -T3 -p $PORT -oA ./results/$store/$FILENAME $IP; done
fi
done
```



## IPv6 Host Detection
Metasploit can also be utilized for IPv6 host discovery. The auxiliary/scanner/discovery/ipv6_multicast_ping module will discover all of the IPv6-enabled machines with the physical (MAC) address, as shown in the following screenshot:

THC IPv6 suite atk6-alive6 will discover alive addresses in the same segment, as shown in the following screenshot:


### 👉 alive6


### 👉 detect-new-ip6



## Packet Crafters
### 👉 fping


### 👉 hping2


### 👉 hping3


### 👉 nping


### 👉 dnmap



## SNMP Enumeration
SNMP stands for **Simple Network Management Protocol**; traditionally, this is used for collecting information about configuration of network devices such as printers, hubs, switches, routers on internet protocol, and servers. Attackers can potentially take advantage of SNMP that runs on **UDP port 161 (by default)** when it is poorly configured or left out with default configuration having a default community string. SNMP has been developed from 1987: version 1 had plain text passwords in transit, version 2c had improved performance, but still plain text passwords, and now the latest v3 encrypts all of the traffic with message integrity.

There are two types of community strings utilized in all versions of SNMP: 
- **Public**: Community string is used for read-only access
- **Private**: Community string is used for both read and write access

The first step that attackers would look for is any identified network device on the internet and find if a public community string is enabled so that they can pull out all of the information specific to the network and draw a topology around it to create more focused attacks. These issues arise since most of the time IP-based **Access Control Listing (ACL)** is often not implemented or not used.

### 👉 snmpwalk


### 👉 Metasploit
[Metasploit Framework (MSF)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🍆%20Pen-testing%20Tools/Exploitation%20&%20Compromise%20Tools/Metasploit%20Framework%20(MSF)/Metasploit%20Framework%20(MSF).md)



## Locating Network Shares
### 👉 NETBIOS null Session & smbclient
One of the oldest attacks that penetration testers these days forget is the NETBIOS null session, which will allow them to enumerate all of the network shares: smbclient -I TargetIP -L administrator -N -U ""


### 👉 enum4linux
Also, we can utilize enum4linux similar to enum.exe from formerly bindview.com, which is now taken over by Symantec; this tool is normally for enumerating information from Windows and Samba systems: `enum4linux.pl [options] targetip`



## Alias Analysis
> 别名解析是针对一个路由器拥有多个IP地址的情况，建立IP地址和路由器的映射关系，是构建网络空间路由器级拓扑结构的关键。常用的别名解析工具有Midar、Iffinder、Kapar等。DNS探测是通过IP地址反向解析建立IP地址和域名之间的对应关系，是资产属性识别的重要依据。


### 👉 `Midar`


### 👉 `Iffinder`


### 👉 `Kapar`



## Ref
