# Internet Censorship & GFW (Great FireWall)

[TOC]



## Res
### Related Topics
↗ [Firewall & Network Filters](../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/Firewall%20&%20Network%20Filters.md)
↗ [DPI (Deep Package Inspection)](../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Packet%20Analyzing%20&%20Sniffing%20&%20Spoofing/DPI%20(Deep%20Package%20Inspection)/DPI%20(Deep%20Package%20Inspection).md)

↗ [🤔 Content Security & Public Opinion Control 🤔](../../Data%20Security/🤔%20Content%20Security%20&%20Public%20Opinion%20Control%20🤔/🤔%20Content%20Security%20&%20Public%20Opinion%20Control%20🤔.md)


### Communities & Forums
https://github.com/net4people/bbs
The BBS is an inclusive and multilingual forum for public discussion about Internet censorship circumvention. It is a place for **developers and researchers** to discuss and share information, techniques, and research. Feel free to write in your own language; we will translate. To start a discussion topic, [open a new issue](https://github.com/net4people/bbs/issues/new).
本BBS是一个包容的多语种论坛，用于公开讨论规避互联网审查的话题。欢迎各位**开发者和研究人员**讨论和分享有关互联网封锁的信息、技术及研究。欢迎你使用自己的语言，我们会翻译的。要发起一个讨论话题，请[创建一个新的issue](https://github.com/net4people/bbs/issues/new)。

https://gfw.report/zh/
Great Firewall Report
Know the enemy and know yourself. 知彼知己.

https://gfw.doge.tg/#/
突破防火长城


### Other Resources



## Intro
This article mainly focus on China.



## GFW (Great FireWall)
> 🔗 https://zh.wikipedia.org/wiki/%E6%96%B9%E6%BB%A8%E5%85%B4
> 🔗 https://gfw.report/blog/geedge_and_mesa_leak/zh/#1-%E5%BC%95%E8%A8%80

> 🔗 https://zh.wikipedia.org/zh-hans/%E9%98%B2%E7%81%AB%E9%95%BF%E5%9F%8E
> 🔗 https://en.wikipedia.org/wiki/Great_Firewall

The Great Firewall (GFW; Chinese: 防火长城; pinyin: Fánghuǒ Chángchéng) is the combination of legislative actions and technologies enforced by the People's Republic of China to regulate the Internet domestically.[1] Its role in internet censorship in China is to block access to selected foreign websites and to slow down cross-border internet traffic.[2] The Great Firewall was formerly operated by the State Internet Information Office, as part of the Golden Shield Project. Since 2013, the firewall is operated by the Cyberspace Administration of China (CAC), the national internet content regulator and censor of China.

The Great Firewall operates by checking transmission control protocol (TCP) packets for keywords or sensitive words. If the keywords or sensitive words appear in the TCP packets, access will be closed. If one link is closed, more links from the same machine will be blocked by the Great Firewall.[3] The effect includes: limiting access to foreign information sources, blocking popular foreign websites and mobile apps, and requiring foreign companies to adapt to domestic regulations.[4][5] Due to the Great Firewall, China has one of the lowest cross-border internet traffic rates in the world. Usage of foreign apps in China is minuscule; Asia Society estimated in 2026 that foreign apps blocked by the Great Firewall have extremely low traffic, particularly compared to domestic apps; the top five domestic apps saw traffic that was 1,000 times more than the top five foreign apps.[6]

Besides censorship, the Great Firewall has also influenced the development of China's internal internet economy by giving preference to domestic companies[7] and reducing the effectiveness of products from foreign internet companies.[8] The techniques deployed by the Chinese government to maintain control of the Great Firewall can include modifying search results for terms, and petitioning global conglomerates to remove content, as happened when they petition companies to remove apps from their Chinese App Store.[9][10]

Per the "one country, two systems" principle, China's special administrative regions (SARs)—Hong Kong and Macau—are not affected by the firewall, as SARs have their own governmental and legal systems and therefore have a higher degree of autonomy. Nevertheless, the U.S. State Department has reported that the central government authorities have closely monitored Internet use in these regions,[11] and Hong Kong's National Security Law has been used to block websites documenting anti-government protests.[12] Provincial governments in parts of China, such as Henan, run their own versions of the firewall.


### A Brief History of GFW
> 🔗 https://blog.tsingjyujing.com/z-spam/gfw-history

1987年，中国发出了第一封电子邮件：“Across the Great Wall, we can reach every corner in the world”（越过长城，走向世界每个角落）。从那一年开始，我们用互联网和这个世界联系在一起了，但是就在12年后，那个越不过去长城，回来了。

> 🔗 https://shadowsockshelp.github.io/Shadowsocks/whats-shadowsocks.html

**早期大陆互联网**
很久以前，我们访问各种网站都是简单直接的，用户的请求通过互联网发送到服务提供方，服务提供方直接将信息反馈给用户。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks01.png)


**GFW 防火墙的出现**
然后有一天[ GFW ](https://zh.wikipedia.org/wiki/金盾工程)就出现了，他像一个收过路费的强盗一样夹在了在用户和服务之间，每当用户需要获取信息，都经过了 GFW，GFW将它不喜欢的内容统统过滤掉，于是客户当触发 GFW 的过滤规则的时候，就会收到 Connection Reset 这样的响应内容，而无法接收到正常的内容。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks02.png)

> [!INFO]
> 🔗 https://blog.tsingjyujing.com/z-spam/gfw-history
> 
> 1998年，为了防止大家访问部分网站，针对IP和DNS的污染，开始了。伴随着污染，墙和梯的较量正式开始。 早期的GFW不能称之为墙，更像是一个补丁，只是单纯的污染DNS，那么我们修改DNS服务器就可以绕过去。 加上国内的DNS也流氓，所以大家大多会把DNS改成Google提供的 `8.8.8.8/8.8.4.4`。
> 
> 这样幼稚的屏蔽方式，政府也知道是不行的，于是，真正的GFW正式登上历史舞台。
> 
> 除了屏蔽特定的IP或者域名之类，GFW还会审查流量内容，因为当时大部分的网站都没有用HTTPS进行加密，所以流量是非常透明的，审查起来很容易。 当然，也会对URL进行审查，有一段时间Google无法访问，就是因为URL里面有一个叫`gs_rfai`的参数，其中“rfa”字样，与在大陆被封锁的自由亚洲电台的网址和英文缩写巧合而被GFW屏蔽。 近几年HTTPS普及了，针对内容审查手段也就慢慢失效了。


**关于 ssh tunnel**
聪明的人们想到了利用境外服务器代理的方法来绕过 GFW 的过滤，其中包含了各种HTTP代理服务、Socks服务、VPN服务… 其中以 ssh tunnel 的方法比较有代表性。

1）首先用户和境外服务器基于 ssh 建立起一条加密的通道 2-3) 用户通过建立起的隧道进行代理，通过 ssh server 向真实的服务发起请求 4-5) 服务通过 ssh server，再通过创建好的隧道返回给用户。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks03.png)

由于 ssh 本身就是基于 RSA 加密技术，所以 GFW 无法从数据传输的过程中的加密数据内容进行关键词分析，避免了被重置链接的问题，但由于创建隧道和数据传输的过程中，ssh 本身的特征是明显的，所以 GFW 一度通过分析连接的特征进行干扰，导致 ssh 存在被定向进行干扰的问题。


**Shadowsocks的出现**
于是[ clowwindy ](https://github.com/clowwindy/shadowsocks)同学分享并开源了他的解决方案。简单理解的话，shadowsocks 是将原来 ssh 创建的 Socks5 协议拆开成 server 端和 client 端，所以下面这个原理图基本上和利用 ssh tunnel 大致类似。

1、6) 客户端发出的请求基于 Socks5 协议跟 ss-local 端进行通讯，由于这个 ss-local 一般是本机或路由器或局域网的其他机器，不经过 GFW，所以解决了上面被 GFW 通过特征分析进行干扰的问题。

2、5) ss-local 和 ss-server 两端通过多种可选的加密方法进行通讯，经过 GFW 的时候是常规的TCP包，没有明显的特征码而且 GFW 也无法对通讯数据进行解密。

3、4) ss-server 将收到的加密数据进行解密，还原原来的请求，再发送到用户需要访问的服务，获取响应原路返回。

![img](https://shadowsockshelp.github.io/Shadowsocks/img/shadowsocks04.png)


**墙与梯对抗的持续升级**
> 🔗 https://blog.tsingjyujing.com/z-spam/gfw-history

举些升级的例子：
- 比如你用HTTP/SOCKS代理翻墙，那我就检测代理的流量特征（于是HTTP/SOCKS代理，卒……）。
- 你用SSH翻墙，我就检测你的流量特征，分析你到底是在执行命令，传输文件还是在打隧道翻墙
    - 但是SSH隧道目前仍然可用，技术角度说，完全区分SSH/SFTP和翻墙流量还是有难度的
- 你用GoAgent翻墙，那我就屏蔽Google的所有IP。
- 你用PPTP翻墙，那我就检测PPTP的协议，直接杀。
- OpenVPN也遭遇了PPTP同样的待遇。
- 但是AnyConnect没有，因为很多外企在使用它连接公司内网。
- Shadowsocks也差点遭受和各大VPN一样的待遇，但是因为SS的流量实在难以识别，所以当时（大约2015年）解决的方式更加粗暴：请Shadowsocks的作者喝茶。
	- ![](https://blog.tsingjyujing.com/~gitbook/image?url=https%3A%2F%2F3247607006-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M6TU8XK0hd3CZdz_gQ_%252Fuploads%252Fgit-blob-72b69bd1787e99358c1ef8cc4e4ea646a973ef17%252F2020-08-09-17-49-53.png%3Falt%3Dmedia&width=768&dpr=3&quality=100&sign=b5e0faa5&sv=2)
- 后来（大约2020年前）Shadowsocks还是被识别了，参见[这个报告](https://gfw.report/blog/gfw_shadowsocks/zh.html)。
- ~~目前最强大的工具应该是V2Ray，除了支持的协议多，其中的VMess协议对计算机时钟的要求让这个系统可以抵御一定的流量重放攻击。~~
- ~~最近大家开始用Vultr/Linode搭建服务器……这个的确不好管，但是重要节假日（每年0110月/0100日前后，国庆，两会）就批量屏蔽这些IP。~~
- GFW不仅防止国内用户访问国外主机，有的时候还会禁止一些境外IP访问国内的主机，这样可以屏蔽部分使用内网穿透技术的人。


Further info:
- ↗ [Proxy Technology (& Bypassing GFW)](Proxy%20Technology%20(&%20Bypassing%20GFW)/Proxy%20Technology%20(&%20Bypassing%20GFW).md)

> [!INFO]
> https://sunsetbrowser.app/blog/china-gfw-update-2026-q2
> 實測給你看，以下是各主流翻牆協議在 2026 Q2 的生存狀態：
> 
> | 協議              | 狀態       | 說明                |
> | --------------- | -------- | ----------------- |
> | PPTP            | ✗ 完全陣亡   | 早就不行了，別想了         |
> | L2TP/IPSec      | ✗ 幾乎全滅   | 特徵太明顯             |
> | 純 OpenVPN       | ✗ 容易被封   | UDP 模式尤其脆弱        |
> | WireGuard       | ✗ 容易被封   | 協議特徵明顯，無法偽裝       |
> | Shadowsocks（原版） | ✗ 已被研究透徹 | GFW 可精確識別         |
> | V2Ray (VMess)   | △ 中等風險   | 必須搭配 TLS + CDN 偽裝 |
> | Trojan          | ✓ 相對安全   | 偽裝為正常 HTTPS 流量    |
> | VLESS + Reality | ✓ 目前最安全  | 極強偽裝能力            |
> | Hysteria2       | △ 有風險    | 速度快，但 QUIC 審查是隱患  |


### The Great Firewall Capability
> [!INFO]
> ↗ [Tiangou Secure Gateway](../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/Firewall%20Products/Tiangou%20Secure%20Gateway.md)
> 
> 积至公司与MESA实验室：防火长城史上最大规模文件外泄分析
> **作者:** Mingshi Wu
> [English version: _Geedge & MESA Leak: Analyzing the Great Firewall’s Largest Document Leak_](https://gfw.report/blog/geedge_and_mesa_leak/en)
> - [Net4People 帖子](https://github.com/net4people/bbs/issues/519)
> - [Twitter上的相关推文](https://x.com/gfw_report/status/1966672206840164690)
> - [Telegram上的相关帖子](https://t.me/GFWReportChannel/58)
> 
> Geedge / Tiangou Secure Gateway

- passive (mirror) mode /active mode
- ↗ [DPI (Deep Package Inspection)](../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Packet%20Analyzing%20&%20Sniffing%20&%20Spoofing/DPI%20(Deep%20Package%20Inspection)/DPI%20(Deep%20Package%20Inspection).md)
- traffic speed limit
- traffic spoofing
- end user identification /profile (TSG, Sanity Directory /SAN)
- proxy identification & block



## Internet Content Censorship (in China)
> [!links]
> ↗ [中国社会监控监管与思想内容审查](../../../../Other%20Networks%20of%20Knowledge/Science%20&%20Application/Social%20Science/🌏%20Politics%20&%20Human%20(Sustainable)%20Development/Countries%20Overview/Asia/China%20(HK,%20MO,%20TW)%20🇨🇳/中国大陆地区/中国社会建设与人口治理/中国社会监控监管与思想内容审查.md)
> 
> ↗ [🤔 Content Security & Public Opinion Control 🤔](../../Data%20Security/🤔%20Content%20Security%20&%20Public%20Opinion%20Control%20🤔/🤔%20Content%20Security%20&%20Public%20Opinion%20Control%20🤔.md)
> ↗ [Anonymous Network & Host](👺%20Anonymous%20Network%20&%20Host/Anonymous%20Network%20&%20Host.md)
> - ↗ [Onion Network & Tor Projects](👺%20Anonymous%20Network%20&%20Host/Onion%20Network%20&%20Tor%20Projects.md)

> 🔗 https://en.wikipedia.org/wiki/Internet_censorship_in_China

Internet censorship is one of the forms of censorship, the suppression of speech, public communication and other information. The People's Republic of China (PRC) censors both the publishing and viewing of online material. Many controversial events are censored from news coverage, preventing many Chinese citizens from knowing about the actions of their government, and severely restricting freedom of the press.[1] China's censorship includes the complete blockage of various websites, apps, and video games, inspiring the policy's nickname, the Great Firewall,[2] which blocks websites. Methods used to block websites and pages include DNS spoofing, blocking access to IP addresses, analyzing and filtering URLs, packet inspection, and resetting connections.[3]

The government blocks website content and monitors Internet access.[4] As required by the government, major Internet platforms in China have established elaborate self-censorship mechanisms. Internet platforms are required to implement a real-name system, requiring users' real names, ID numbers, and other information when providing services. As of 2019, more than sixty online restrictions had been created by the Chinese government and implemented by provincial branches of state-owned ISPs, companies and organizations.[5][6][7] Some companies hire teams and invest in powerful artificial intelligence algorithms to police and remove illegal online content.[8] VPNs are heavily restricted and unauthorized usage can be subject to fines and legal prosecution.[9] VPN usage among the Chinese population is low; as of 2022, around 3% of Chinese citizens were estimated to use VPNs,[9] while the Asia Society estimated in 2026 that VPN usage in China by percentage was in the low single digits. Due to the Great Firewall, China has one of the lowest cross-border internet traffic rates in the world. Usage of foreign apps and websites in China is extremely low, with most Chinese netizens using domestic alternatives.[10]

Amnesty International states that China has "the largest recorded number of imprisoned journalists and cyber-dissidents in the world"[11] and Reporters Without Borders stated in 2010 and 2012 that "China is the world's biggest prison for netizens."[12][13] Freedom House rated China "Not Free" in the Freedom on the Net 2023 report.[14] Commonly alleged user offenses include communicating with organized groups abroad, signing controversial online petitions, and forcibly calling for government reform. The government has escalated its efforts to reduce coverage and commentary that is critical of the regime after a series of large anti-pollution and anti-corruption protests. Many of these protests were organized or publicized using instant messaging services, chat rooms, and text messages.[15] China's Internet police force was reported by official state media to be 2 million strong in 2013.[16]

China's special administrative regions of Hong Kong and Macau are outside the Great Firewall.[17] However, it was reported that the central government authorities have been closely monitoring Internet use in these regions (see Internet censorship in Hong Kong)



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

[Leak of Geedge Networks internal documents (100,000+ from Jira, Confluence, GitLab)]: https://github.com/net4people/bbs/issues/519
[👍 积至公司与MESA实验室：防火长城史上最大规模文件外泄分析]: https://gfw.report/blog/geedge_and_mesa_leak/zh/#1-%E5%BC%95%E8%A8%80

[2026 Q2 中國翻牆現況更新：GFW 又升級了，哪些工具還能用？]: https://sunsetbrowser.app/blog/china-gfw-update-2026-q2#2025
回顧 2025：那些改變遊戲規則的事件
要理解 2026 的現況，得先回頭看 2025 年發生的幾件大事。

GFW 史上最大源碼洩漏（2025 年 9 月）
這件事我稱它為「翻牆圈的震撼彈」。超過 **500GB** 的 GFW 源代碼、工作日誌和內部通信記錄被洩漏，來源是積至（海南）信息技術有限公司和中科院信工所的 MESA 實驗室——而積至的首席科學家，正是「防火牆之父」方濱興。
洩漏內容揭示了幾個關鍵事實：
- 員工持續對常見翻牆工具進行逆向工程
- **至少 9 個商業 VPN 已被「解決」**（具體名單未完全公開）
- 提供多種識別和過濾翻牆流量的方式
- 積至還在「一帶一路」框架下向緬甸、巴基斯坦等國輸出審查技術
老實說，看到這份洩漏資料，你就會明白為什麼這麼多 VPN 突然不能用了——人家早就把你研究透了。


「牆中牆」被揭露（2025 年 5 月）
除了國家級的 GFW，研究者發現**河南省還部署了省級封鎖系統**，封鎖域名超過 420 萬個，是國家級 GFW 的 5 倍。而且至少福建、湖北、江蘇等省也有類似系統，已經存在 5-6 年了。
翻譯成白話：你以為翻過一道牆就好了？不，裡面還有好幾道。


TCP 443 端口無條件封禁測試（2025 年 8 月）
GFW 曾在 8 月 20 日凌晨對所有 TCP 443 端口連線注入偽造封包，導致所有 HTTPS 連線中斷約 74 分鐘。雖然時間不長，但這被分析為一次**測試性封鎖**。意思是：如果他們想，隨時可以把整個加密網路都關掉。

[🤔 中國防火牆2026黑科技曝光：AI抓翻牆準確率94%，省級獨立部署天狗系統，商業VPN全軍覆沒！唯一破局方案Reality協議詳解，100萬自建節點如何讓GFW陷入政治困境]: https://youtu.be/C0WQ5I9YOYQ?si=psculDMsmMGsuDeV

[中国网络防火长城简史]: https://blog.tsingjyujing.com/z-spam/gfw-history
