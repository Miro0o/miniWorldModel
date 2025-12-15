# DOS (Denial-of-Service)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.11.30%20PM.png)



## 1️⃣ Vulnerability-Based DOS
### Killer Packet Attacks
![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.12.55%20PM.png)



## 2️⃣ Resource-Consumption Based DOS
### TCP SYN Flooding Attacks
![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.13.11%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.13.23%20PM.png)

### Reflection Attack
![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.13.34%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.13.49%20PM.png)

### Amplification Attacks
反射攻击（reflection attack）是指攻击者可以发送伪造源IP地址的报文。攻击者将生成一个来自目标受害者的数据包发送到Internet上的某个服务器，该服务器将立即回复。因为源IP地址是伪造的，远程互联网服务器会回复并发送数据给受害者。这有两个影响:1. 攻击的实际来源被隐藏，很难追踪; 2. 如果使用了许多互联网服务器，攻击可能包括来自世界各地的大量数据包。  
但反射攻击真正强大的地方在于流量还会被放大（amplified）: 来自攻击者的一个小小的伪造数据包会引起服务器(或多个服务器)的大量回复。在这种情况下，攻击者可以使用一个伪造的源IP地址发送一个小数据包（伪造的IP地址就是受害者的IP地址），并让服务器(或多个服务器)向受害者发送大量回复。放大攻击（amplification attacks）会导致攻击者将来自少量机器的少量带宽转化为来自互联网中的大量流量负载全部流向受害者。

![](amplification_attack.png)
#### DNS Amplification Attacks
曾经最流行的放大攻击协议是DNS放大攻击: 一个查找域名IP地址的小DNS查询将导致一个大的应答。DNS查询通常通过UDP协议发送。UDP是一种“发即忘”协议，这意味着不需要通过握手来验证数据包IP地址的真实性。这意味着，攻击者可以伪造UDP数据包的报头，以表明它来自您想要攻击的特定IP，并将这个伪造的数据包发送到一个开放的DNS解析器。DNS解析器将回复一个对伪造IP地址的响应，并回答所问的任何问题（发送一系列大数据包）。  
一个好的放大攻击载体有两个标准:  
1)查询可以设置一个欺骗源地址(例如，通过不需要握手的ICMP或UDP协议);  
2)对查询的响应明显大于查询本身。  
DNS是满足这些条件的核心、无处不在的互联网平台，因此已成为放大攻击的最大来源。产生根本原因是，许多运行DNS解析器的网络运营商将DNS解析器打开，并愿意响应任何查询他们的IP地址。最近发生的情况是，一些不同的僵尸网络似乎列举了互联网的IP空间，以发现开放的解析器。一旦发现，它们可以用来发动重大的DNS放大攻击。

解决方案
1. 如果运行递归DNS解析器，最佳实践是确保它只响应来自授权客户端的查询。换句话说，如果你正在为你的公司运行一个递归DNS服务器，并且你的公司的IP空间是5.5.5.0/24(即5.5.5.0 - 5.5.5.255)，那么它应该只响应来自这个范围的查询。如果一个查询从9.9.9.9到达，那么它不应该响应。
2. 禁用DNS服务递归。
3. 假设我们知道我们没有从我们的网络发送任何DNS查询。因此，我们可以安全地过滤来自DNS解析器的响应:在我们的路由器上丢弃来自开放解析器的响应
#### NTP Amplification Attacks
NTP是网络时间协议，连接到互联网的机器使用它来精确地设置时钟。它还被广泛应用于互联网上的台式机、服务器甚至手机，以保持它们的时钟同步。  
不幸的是，简单的基于udp的NTP协议很容易受到放大攻击，因为它会回复一个带有欺骗源IP地址的数据包，而且至少有一个内置命令会对一个简短的请求发送一个长回复。这使得它成为DDoS工具的理想选择。NTP包含一个名为monlist的命令，可以发送给NTP服务器进行监视。它返回与NTP服务器交互过的最多600台机器的地址。这个响应比发送的请求要大得多，这使它成为放大攻击的理想选择。  
NTP放大攻击从允许源IP地址欺骗的网络上的攻击者控制的服务器开始。攻击者通过生成大量的UDP报文来欺骗源IP地址，使其看起来像是来自目标地址。这些UDP报文被发送到支持monlist命令的网络时间协议（NTP）服务器(端口123)。  
monlist命令似乎没有什么实际用途---它返回最后访问NTP服务器的600个IP地址的列表，课件它能造成特别大的伤害。如果NTP服务器的列表已完全填充，则对MONLIST请求的响应将比请求大206倍。在攻击中，由于源IP地址被欺骗，且UDP协议不需要握手，所以放大的响应被发送到目标。一个1Gbps连接的攻击者理论上可以产生200Gbps以上的DDoS流量。

解决方案
1. 可以通过访问open NTP项目（[http://openntpproject.org/）来检查网络上是否有开放的NTP服务器支持MONLIST命令运行。](http://openntpproject.org/%EF%BC%89%E6%9D%A5%E6%A3%80%E6%9F%A5%E7%BD%91%E7%BB%9C%E4%B8%8A%E6%98%AF%E5%90%A6%E6%9C%89%E5%BC%80%E6%94%BE%E7%9A%84NTP%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%94%AF%E6%8C%81MONLIST%E5%91%BD%E4%BB%A4%E8%BF%90%E8%A1%8C%E3%80%82)
2. NTP和其他基于udp的放大攻击都依赖于源IP地址欺骗。如果攻击者不能欺骗源IP地址，那么他们只能自己攻击DDoS。如果您正在运行一个网络，那么您应该确保遵循BCP38，并防止带有欺骗源地址的数据包离开您的网络。你可以使用麻省理工学院的Spoofer项目（[http://spoofer.cmand.org/summary.php）的工具来测试你的网络当前是否遵循BCP38。](http://spoofer.cmand.org/summary.php%EF%BC%89%E7%9A%84%E5%B7%A5%E5%85%B7%E6%9D%A5%E6%B5%8B%E8%AF%95%E4%BD%A0%E7%9A%84%E7%BD%91%E7%BB%9C%E5%BD%93%E5%89%8D%E6%98%AF%E5%90%A6%E9%81%B5%E5%BE%AABCP38%E3%80%82)



## 3️⃣ Distributed DOS (DDOS)
↗ [DDOS (Distributed Denial-of-Service)](DDOS%20(Distributed%20Denial-of-Service)/DDOS%20(Distributed%20Denial-of-Service).md)



## 🏳️ DOS Defence / Countermeasures
![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.14.35%20PM.png)



## Ref
[👍 DDoS攻击之放大攻击原理]: https://www.cnblogs.com/Higgerw/p/15123176.html
