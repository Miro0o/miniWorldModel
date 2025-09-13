# Internet Censorship & GFW (Great FireWall)

[TOC]



## Res
### Related Topics
↗ [Firewall & Network Filters](../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/Firewall%20&%20Network%20Filters.md)
↗ [DPI (Deep Package Inspection)](../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/DPI%20(Deep%20Package%20Inspection)/DPI%20(Deep%20Package%20Inspection).md)

↗ [Content Security](../../Data%20Security/Content%20Security/Content%20Security.md)


### Communities & Forums
🔗 https://en.wikipedia.org/wiki/Great_Firewall

https://github.com/net4people/bbs
The BBS is an inclusive and multilingual forum for public discussion about Internet censorship circumvention. It is a place for **developers and researchers** to discuss and share information, techniques, and research. Feel free to write in your own language; we will translate. To start a discussion topic, [open a new issue](https://github.com/net4people/bbs/issues/new).

本BBS是一个包容的多语种论坛，用于公开讨论规避互联网审查的话题。欢迎各位**开发者和研究人员**讨论和分享有关互联网封锁的信息、技术及研究。欢迎你使用自己的语言，我们会翻译的。要发起一个讨论话题，请[创建一个新的issue](https://github.com/net4people/bbs/issues/new)。



## GFW (Great FireWall)
### 一切的开始

> 原文地址: 🔗 https://shadowsockshelp.github.io/Shadowsocks/whats-shadowsocks.html

#### 早期大陆互联网
很久以前，我们访问各种网站都是简单直接的，用户的请求通过互联网发送到服务提供方，服务提供方直接将信息反馈给用户。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks01.png)
#### GFW 防火墙的出现
然后有一天[ GFW ](https://zh.wikipedia.org/wiki/金盾工程)就出现了，他像一个收过路费的强盗一样夹在了在用户和服务之间，每当用户需要获取信息，都经过了 GFW，GFW将它不喜欢的内容统统过滤掉，于是客户当触发 GFW 的过滤规则的时候，就会收到 Connection Reset 这样的响应内容，而无法接收到正常的内容。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks02.png)
#### 关于 ssh tunnel
聪明的人们想到了利用境外服务器代理的方法来绕过 GFW 的过滤，其中包含了各种HTTP代理服务、Socks服务、VPN服务… 其中以 ssh tunnel 的方法比较有代表性。

1）首先用户和境外服务器基于 ssh 建立起一条加密的通道 2-3) 用户通过建立起的隧道进行代理，通过 ssh server 向真实的服务发起请求 4-5) 服务通过 ssh server，再通过创建好的隧道返回给用户。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks03.png)

由于 ssh 本身就是基于 RSA 加密技术，所以 GFW 无法从数据传输的过程中的加密数据内容进行关键词分析，避免了被重置链接的问题，但由于创建隧道和数据传输的过程中，ssh 本身的特征是明显的，所以 GFW 一度通过分析连接的特征进行干扰，导致 ssh 存在被定向进行干扰的问题。
#### Shadowsocks的出现
于是[ clowwindy ](https://github.com/clowwindy/shadowsocks)同学分享并开源了他的解决方案。简单理解的话，shadowsocks 是将原来 ssh 创建的 Socks5 协议拆开成 server 端和 client 端，所以下面这个原理图基本上和利用 ssh tunnel 大致类似。

1、6) 客户端发出的请求基于 Socks5 协议跟 ss-local 端进行通讯，由于这个 ss-local 一般是本机或路由器或局域网的其他机器，不经过 GFW，所以解决了上面被 GFW 通过特征分析进行干扰的问题。

2、5) ss-local 和 ss-server 两端通过多种可选的加密方法进行通讯，经过 GFW 的时候是常规的TCP包，没有明显的特征码而且 GFW 也无法对通讯数据进行解密。

3、4) ss-server 将收到的加密数据进行解密，还原原来的请求，再发送到用户需要访问的服务，获取响应原路返回。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks04.png)


### The Great Firewall
↗ [DPI (Deep Package Inspection)](../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/DPI%20(Deep%20Package%20Inspection)/DPI%20(Deep%20Package%20Inspection).md)



## Internet Content Censorship
↗ [Content Security](../../Data%20Security/Content%20Security/Content%20Security.md)

tbd..



## Ref
[Large scale blocking of TLS-based censorship circumvention tools in China #129]:  https://github.com/net4people/bbs/issues/129

**中国大规模地封锁基于TLS的翻墙服务器**

自北京时间2022年10月3日起，超过一百名用户报告他们至少有一台基于TLS的翻墙服务器被封锁了。被封锁的服务器使用的协议包括了[trojan](https://github.com/trojan-gfw/trojan)，[Xray](https://github.com/XTLS/Xray-core)，[V2Ray TLS+Websocket](https://www.v2fly.org/config/transport/websocket.html)，[VLESS](https://www.v2fly.org/config/protocols/vless.html)，以及[gRPC](https://www.v2fly.org/config/transport/grpc.html)。我们还未收到任何[naiveproxy](https://github.com/klzgrad/naiveproxy)被封锁的消息。

下面是我们总结的关于这次封锁的一些信息，以其我们的一些推测和分析

封锁先是针对翻墙服务的端口。如果用户在端口被封后，[改换了端口](https://gfw.report/blog/ss_tutorial/zh/#%E9%85%8D%E7%BD%AE%E5%A4%87%E7%94%A8%E7%AB%AF%E5%8F%A3%E6%9D%A5%E7%BC%93%E8%A7%A3%E7%AB%AF%E5%8F%A3%E5%B0%81%E9%94%81)，那么整个服务器都会被封锁。需要指出，封锁似乎只是基于端口或IP地址，与翻墙服务有关的域名似乎并没有被加入到GFW的DNS或SNI黑名单中。

尽管大多数用户报告443端口被封，一部分使用非443端口的用户也报告了封锁。尽管大多数用户的服务器在流行的VPS提供商那里（[比如](https://bandwagonhost.com/)），但至少有一位用户位于欧洲的家中的服务器也被封锁了。

在一些案例中（并非全部案例中），封锁是动态的：用户通过浏览器还是可以直接访问翻墙端口，但同一个端口，用翻墙软件就连不通。

所有以上的信息都指向GFW已经可以精准的识别并封锁这些翻墙协议，而并非简单地封锁所有的443端口，或封锁所有的流行机房。

基于以上信息，我们推测（但还未进行实证性的测量），这些封锁可能与翻墙软件客户端发出的[Clienthello指纹](https://tlsfingerprint.io/)相关。开发者们或许可以考虑采用[uTLS](https://github.com/refraction-networking/utls)。这个[论文阅读小组](https://github.com/net4people/bbs/issues/54)，[这篇总结](https://gfw.report/blog/v2ray_weaknesses/zh/#%E7%8B%AC%E7%89%B9%E7%9A%84tls-clienthello%E6%8C%87%E7%BA%B9)，以及[这篇博文](https://zhufan.net/2022/06/18/tls%E6%8F%A1%E6%89%8B%E6%8C%87%E7%BA%B9%E6%A3%80%E6%B5%8B%E6%81%B6%E6%84%8F%E8%BD%AF%E4%BB%B6%E6%B5%81%E9%87%8F/)都是关于TLS指纹的，也许会有帮助。

下一步，我们将调查GFW是否真的使用了客户端发出的TLS指纹来识别这些协议。与此同时，如果您有任何翻墙服务器被封锁，或者有任何可以证实或反驳我们的推测的例子，我们都欢迎您或公开地或私下地与我们分享。因为这会帮助我们快速定位许多问题的根源。我们私下的联系方式可见[GFW Report](https://gfw.report/)的页脚。

