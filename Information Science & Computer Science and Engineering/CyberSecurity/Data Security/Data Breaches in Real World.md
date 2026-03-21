# Data Breaches in Real World

[TOC]



## Res
### Related Topics
↗ [Realtime Information - News, Tracking, Tickets, etc.](../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/🔍%20Information%20Acquisition/Realtime%20Information%20-%20News,%20Tracking,%20Tickets,%20etc..md)
↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)


### Other Resources



## Intro



## Ref
[Anxun-isoon]: https://github.com/soufianetahiri/Anxun-isoon
The iSoon/Anxun leak in a single json file (cn_extracted_messages.json)
![](../../../Assets/Pics/Pasted%20image%2020260319235745.png)
Initial hot takes
- [https://twitter.com/DE7AULTsec/status/1759388057323618611](https://twitter.com/DE7AULTsec/status/1759388057323618611)
- [https://news.risky.biz/risky-biz-briefing-the-i-soon-data-leak](https://news.risky.biz/risky-biz-briefing-the-i-soon-data-leak): The i-SOON data also includes files that appear to be documentation or more technical business pitches that describe products of an extremely broad range of capabilities. These include:
    - Malware designed to run on Windows, macOS, Linux, iOS, and Android;
    - A platform to collect and analyse email data;
    - A platform to hack into Outlook accounts;
    - A Twitter monitoring platform;
    - An reconnaissance platform using OSINT data;
    - Physical hardware devices meant to be used for on-premises hacking, typically targeting WiFi networks;
    - Communications equipment using a Tor-like network for agents working abroad.
- [https://www.malwarebytes.com/blog/news/2024/02/a-first-analysis-of-the-i-soon-data-leak](https://www.malwarebytes.com/blog/news/2024/02/a-first-analysis-of-the-i-soon-data-leak): Some of the tools that i-Soon used are impressive enough. Some highlights:
    - Twitter (now X) stealer: Features include obtaining the user’s Twitter email and phone number, real-time monitoring, reading personal messages, and publishing tweets on the user’s behalf.
    - Custom Remote Access Trojans (RATs) for Windows x64/x86: Features include process/service/registry management, remote shell, keylogging, file access logging, obtaining system information, disconnecting remotely, and uninstallation.
    - The iOS version of the RAT also claims to authorize and support all iOS device versions without jailbreaking, with features ranging from hardware information, GPS data, contacts, media files, and real-time audio records as an extension. (Note: this part dates back to 2020)
    - The Android version can dump messages from all popular Chinese chatting apps QQ, WeChat, Telegram, and MoMo and is capable of elevating the system app for persistence against internal recovery.
    - Portable devices for attacking networks from the inside.
    - Special equipment for operatives working abroad to establish safe communication.
    - User lookup database which lists user data including phone number, name, and email, and can be correlated with social media accounts.
    - Targeted automatic penetration testing scenario framework.
Initial machine translations
- [https://github.com/soufianetahiri/Anxun-isoon/tree/main/InitialTranslations](https://github.com/soufianetahiri/Anxun-isoon/tree/main/InitialTranslations)
- [https://github.com/mttaggart/I-S00N/blob/main/README-en.md](https://github.com/mttaggart/I-S00N/blob/main/README-en.md)

---
[What Insights Can We Gain from 1 Billion Leaked Chinese National ID Numbers?]: https://spycloud.com/blog/insights-from-leaked-chinese-national-id-numbers/
During the Summer of 2022, [a Chinese data breach was posted for sale](https://www.nytimes.com/2022/07/07/business/china-police-database-hack.html) on the English-language cybercriminal forum BreachForums and immediately made international headlines. The Shanghai National Police (SHGA) database breach was particularly notable for two reasons:

---
[Data Breach Statistics & Trends (2025)]: https://www.varonis.com/blog/data-breach-statistics#cost-of-a-data-breach
[The Most Recent Data Breaches in 2025]: https://www.breachsense.com/breaches/

---
[中国大规模个资外泄 40亿笔微信等资讯全曝露 | 大纪元]: https://www.epochtimes.com/gb/25/6/9/n14527844.htm
【大纪元2025年06月09日讯】（大纪元记者吴旻洲台湾台北报导）中国近期又发生大规模用户个资外泄事件，有高达40亿笔用户资料被泄露，内容包括微信、支付宝、住址等敏感资讯，其中还有一个疑似与台湾有关的资料集。
本次事件也是迄今为止发现的最大规模中国个资单一来源外泄事件。事发至今已3个礼拜，但中共当局仍对此噤声。
根据外媒“Cyber​​news”报导，一个存有高达40亿笔资料、容量达631GB的中国资料库，在5月19日发生资料外泄，内容包含用户的财务资料、微信和支付宝等详细的敏感资讯。由网路安全专家兼SecurityDiscovery.com网站所有者迪亚琴科（Bob Dyachenko）与Cybernews团队发现。

[8.7 billion records spilled: Inside the massive Chinese data leak]: https://cybernews.com/security/billions-chinese-records-data-leak/

---
[Alipay DeepLink Attack Surface Analysis]: https://innora.ai/zfb/
Alipay DeepLink Attack Surface Analysis
One Link to Rule Them All
End-to-end analysis of the DeepLink + WebView JSBridge attack chain on Alipay Android/iOS latest versions. Reported through responsible disclosure to Ant Group. Vendor response: "normal functionality."

[Alipay Presents Real Risks—But Don’t Rush to Ban It]: https://itif.org/publications/2026/03/06/alipay-presents-real-risks-but-dont-rush-to-ban-it/

---
[China's massive data leak of military secrets ? | NetAskari]: https://netaskari.substack.com/p/chinas-massive-data-leak-of-military
About two months ago we saw a sales announcement on a dark web forum by a hacker that goes by the name of “airborneshark1". It offered a massive data set of 10 Petabyte that was apparently extracted from the National Super Computer Center of China ( NSCC ) in Tianjin. It was re-upped again a few days ago, probably to drive up the bidding process. The first post offered still the possibility to just take a peek at the complete list of “obtained” datasets, for measly 3000 USD. This time around its “all in” it seems.

[黑客称攻陷中共超算中心 售卖海量航天军事机密 | 大纪元]: https://www.epochtimes.com/gb/26/3/18/n14721963.htm
【大纪元2026年03月18日讯】（大纪元记者吕适约台湾台北报导）有骇客宣布攻陷中共超级电脑计算中心（NSCC），在暗网出售超过10PB（约1千万GB）数据，包括中共航空航太、军事等领域的敏感资料。

[FlamingChina宣称黑了中国国家超级计算中心（NSCC）科研设施，泄露10+PB数据，涉及航空航天、军事、生物信息学、核聚变模拟等]: https://www.bktai.com/Post/342/China_National_Super-computing_Center_NSCC_Research_Facility_HACKED
2.被黑原因有点低级
2.1 Win漏洞+非隔离(网络，账号）
因为这些超算中心的客户用到的数据，经常也是10几T到几十T的级别。所以，数据量非常大，可能触发预警的阈值，比较高。 另外，内部没有做隔离也很奇怪。 按理说，就算你攻破了钻地弹的超算节点，你不应该攻破飞机翼型的超算节点啊。 

我能想到的几个可能是
 1. 因为都是windows节点，而且是win 7 找一些RCE 直接攻进去也是可能的。
2. human error 这些超算的节点很多是配置了MPI 来跑的。然后由于内部出于简单配置和管理的原因，各个节点之间都建立了共享的用户名和密码。 这样，也就是说，超算的节点门都有一个共同的用户名和密码。 而且没有做存算分离的结构。导致，攻破一处，处处攻破。 无论那种都是sb至及的。

2.2 从现有的数据看，可以确定的是
1. 国家超算中心确实被黑了。
2. 甚至被黑的途径都可以猜的到。
3. 不确定的是不是有10PB的数据被盗。10PB数据很大，但是也是有可能的。

 很多人不知道，这个意味着什么。
4. 飞机
从民航客机到五代、六代战斗机，其结构强度、气动布局、疲劳寿命、振动特性，全部依赖大规模有限元和流体仿真； 应力分析，强度分析，疲劳计算，振动分析等等。 这些局部是通过本地的超算中心做的，但是大规模的还是需要国家超算中心计算的。
 5. 潜艇
包括核潜艇的结构强度解算，流体分析，模拟，都需要超算中心。
6. 高超音速飞行器，需要计算高温气动、激波结构、材料极限；
 甚至包括核爆、核聚变等极端物理过程的模拟。 所以重要性不言而喻了。

理论上，这类系统应该具备：
分级隔离（Multi-Level Security）
军工 / 航空 / 核 → 物理隔离，你做钻地弹的凭啥可以看人家设计鸡翅膀的。
Zero Trust 架构
Job级隔离（计算任务沙箱）
存算分离。
 
入侵检测没发现，流量监控失效是可预期的。
因为HPC网络特点：
高吞吐（100Gbps+）
大量内部通信（MPI）
导致IDS/IPS 很难区分：
正常计算流量 vs 数据外泄
 
但是这个完全可以采用其他的办法来监测的，但是估计没有开发专用于超算的入侵检测系统。
结果搞成这样子。。。
一个节点攻破，全部被攻破。
真是草台班子。 这有人要上法场了。

[中国超算中心遭遇史无前例安全风暴，10PB核心科研数据疑遭泄露，贱卖。中国政府一个半月保持沉默。]: https://x.com/lenscn/status/2033908746821505189?s=20
2026年2月初，一名使用 @sparrowstrike1 账号的黑客在暗网著名论坛 Breach Forums 发帖，宣称已成功突破该中心的防御系统，窃取了总量超过 10PB（约 10,000TB，占1万个1T硬盘）的核心数据。黑客目前正以 10枚门罗币（XMR）的价格公开贱卖这些敏感资产。（注：截至2026年3月17日，1枚门罗币约合370美元，10枚合计仅约3,700美元。） 此次疑似泄露的数据并非普通个人信息，而是中国顶尖科研实力的结晶。数据涵盖航空航天工程（涉及中航工业AVIC、中国商飞COMAC）、军事武器研究（涉及国防科技大学NUDT、西北工业大学NWPU）以及核聚变模拟和生物医学等高度敏感领域。 10PB的数据量意味着该中心存储的绝大部分战略级仿真模拟和工程计算结果可能已全部落入他人之手。这不仅导致数万名研究人员多年的心血面临被逆向工程的风险，更可能让竞争对手直接获取我国在尖端科技领域的底层参数，抹平技术领先优势。作为中国最大的超算中心，NSCC承载着大量涉及国防安全的绝密运算任务，此类核心平台的数据失守，等同于国家科研基础设施的"数字大坝"出现溃决，其潜在损失无法用金钱衡量。 部分数据样本曾短暂在GitHub流传，但随即消失。
- 旧闻对照： 2022年上海公安数据库特大泄露事件，十亿中国居民的个人资料与隐私信息被低价贱卖到黑网 2022年7月初，上海国家警察数据库（SHGA）遭到未经授权的入侵，导致总量超过23TB、涵盖逾10亿中国居民的个人敏感信息流向黑网。这不仅是一次普通的数据丢失，更是一场波及全国、波及数代人的信息灾难。 泄露的数据详情与真实性 一名化名"ChinaDan"的黑客在知名论坛BreachForums上发帖，以10枚比特币（约合20万美元）的价格公开售卖全部数据。
- 旧间对照2：新疆拘留营文件泄露（2022年） 2022年，大量涉及新疆维吾尔族被拘留者的内部档案、照片及监控规程文件流出，由BBC、德国《明镜》周刊等多家国际媒体深度披露。这些被合称为“新疆警察文件”的资料，揭示了该地区系统性拘押的内部运作机制。面对国际舆论的震惊，中国政府全盘否认文件的真实性，坚决拒绝任何国际独立调查，并将相关报道定性为“境外势力伪造”和“反华炒作”。
- 旧间对照3： 微博5.38亿用户数据泄露 2020年，微博爆发大规模安全事故，5.38亿用户的账号信息遭黑客窃取并在网上公然出售，泄露内容包括用户真实姓名、手机号及地理位置。 作为拥有亿级流量的社交巨头，微博官方仅发表了一份轻描淡写的声明，强调用户密码未被泄露，试图平息事态。中国网信办未对此发起任何公开调查或追责，这起波及全国半数人口的隐私泄露事件随后迅速从公众视野中“销声匿迹”。
- 旧闻对照4：上海新冠健康码数据泄露。 2022年，正值防疫关键期，涵盖4850万上海居民隐私的“随申码”数据库在网上公开出售，标价仅为4000美元。被叫卖的数据包含居民姓名、身份证号、电话号码及实时健康状态。 这起事件直接威胁到数千万市民的数字身份安全，然而上海市政府及相关防疫部门对此始终保持缄默，未发表任何官方评论或补救声明，数据治理的透明度再次缺失。
- 旧闻对照5， 微信/支付宝金融数据大泄露。2025年5月，一起涉及国民金融安全的超级泄露事件在暗网论坛BreachForums爆发。超过40亿份核心文件遭到暴露，内容极度敏感，涵盖了微信支付、支付宝的财务往来记录及大量个人金融画像。 作为中国移动支付的两大支柱，其底层数据的崩塌引发了社会层面的隐秘恐慌。尽管事件性质极其恶劣，中国当局与相关互联网巨头均未作出官方回应，延续了以往“冷处理”的应对模式。

