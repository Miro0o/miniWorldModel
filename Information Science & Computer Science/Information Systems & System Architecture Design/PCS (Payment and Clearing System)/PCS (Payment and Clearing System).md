# PCS (Payment and Clearing System)

[TOC]



## Res
### Related Topics
↗ [Finance & Financial Management](../../../Other%20Networks%20of%20Knowledge/Social%20Science/💸%20Economics%20&%20Finance/🏦%20Finance%20&%20Financial%20Management/Finance%20&%20Financial%20Management.md)

↗ [E-commerce Industry](../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/Internet%20&%20Entertainment%20Industry/E-commerce%20Industry/E-commerce%20Industry.md)
↗ [Third-Party Payment Industry](../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/Internet%20&%20Entertainment%20Industry/Third-Party%20Payment%20Industry/Third-Party%20Payment%20Industry.md)



## Intro
> 🤖 AI-generated

Example Scenario: A Consumer Makes a Purchase
1. **Purchase Initiation**:
    - A consumer uses a credit card to buy a laptop from an online retailer.
2. **Transaction Authorization**:
    - The retailer’s payment system sends the transaction details to the payment network (e.g., VisaNet).
    - VisaNet checks if the consumer’s bank (the issuing bank) has enough credit available.
    - If approved, VisaNet sends an authorization back to the retailer.
3. **Transaction Completion**:
    - The retailer completes the sale and provides the consumer with the laptop.
4. **Settlement Process**:
    - At the end of the day, the retailer’s bank (the acquiring bank) compiles all card transactions it processed.
    - This bank will need to settle these transactions with the issuing banks.
5. **Interbank Payment**:
    - The acquiring bank sends a net payment request to the issuing banks for the total amount of all transactions.
    - This transfer of funds between banks is facilitated through an interbank payment system like CHIPS or another settlement network.
    - The issuing banks transfer the appropriate funds to the acquiring bank.

![international_transaction | 800](../../../Assets/Illustrations/Finance%20&%20Transaction/international_transaction.md)


### Payment Method & Bank Card
#### Cash

#### Negotiable Instrument /Money Order /Bill of Exchange，Draft

#### Cheque

#### Bank Card
银行卡的卡号是标识发卡机构和持卡人信息的号码，由以下三部分组成：发卡行标识代码(BIN号)、发卡行自定义位、校验码。各个银行机构所发行的银行卡卡号都是不同的，全世界都不会找到任何一张重样的银行卡，无论是已用的还是在用的。它们的长度和格式也是不同的。但有一点相同，就是都遵循前面讲的大结构，由13-19位数字表示。
##### Debit Card
##### Credit Card

#### Mobile Payment /E-Payment
↗ [Third-Party Payment Industry](../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/Internet%20&%20Entertainment%20Industry/Third-Party%20Payment%20Industry/Third-Party%20Payment%20Industry.md)

**移动支付**（又称**移动付款**、**数字付款**、**电子付款**、**感应支付**、**扫码付款**、**数字支付**、**电子支付**和**扫码支付**）是指使用[移动设备](https://zh.wikipedia.org/wiki/%E8%A1%8C%E5%8B%95%E8%A3%9D%E7%BD%AE "移动设备")进行付款的服务。在不需使用现金、支票或信用卡的情况下，消费者可使用移动设备支付各项服务或数字及实体商品的费用。虽然使用非实体货币系统的概念已存在许久，但支持此系统的科技直到近期才开始普及。

移动支付在世界各地以不同的形式应用。形式问题也会导致移动支付的比例提高。主要的移动支付方式共有五种类型：短信为基础的转账支付、移动设备网络支付（[WAP](https://zh.wikipedia.org/wiki/WAP "WAP")）、应用程序支付（[APP](https://zh.wikipedia.org/wiki/APP "APP")）、 [条码支付](https://zh.wikipedia.org/w/index.php?title=%E6%A2%9D%E7%A2%BC%E6%94%AF%E4%BB%98&action=edit&redlink=1 "条码支付（页面不存在）")（[Barcode](https://zh.wikipedia.org/wiki/%E6%A2%9D%E7%A2%BC "条码"), [QR码](https://zh.wikipedia.org/wiki/QR%E7%A2%BC "QR码")）和感应支付（[NFC](https://zh.wikipedia.org/wiki/%E8%BF%91%E5%A0%B4%E9%80%9A%E8%A8%8A "近场通信")）。此外，在海地等国家也开始出现移动服务营运商与银行合作的支付方式。 许多公司提供了移动支付的解决方案，包括[金融机构](https://zh.wikipedia.org/wiki/%E9%87%91%E8%9E%8D%E6%A9%9F%E6%A7%8B "金融机构")和[信用卡](https://zh.wikipedia.org/wiki/%E4%BF%A1%E7%94%A8%E5%8D%A1 "信用卡")公司、网络服务公司（例如[Google](https://zh.wikipedia.org/wiki/Google "Google")）、移动通信服务营运商、主要的通信网络基础建设商（例如Orange的w-HA）以及生厂移动设备的[跨国公司](https://zh.wikipedia.org/wiki/%E8%B7%A8%E5%9C%8B%E5%85%AC%E5%8F%B8 "跨国公司")（例如[Ericsson](https://zh.wikipedia.org/wiki/Ericsson "Ericsson")、[BlackBerry](https://zh.wikipedia.org/wiki/BlackBerry "BlackBerry")和[苹果公司](https://zh.wikipedia.org/wiki/%E8%98%8B%E6%9E%9C%E5%85%AC%E5%8F%B8 "苹果公司")）。



## Payment Processing Networks /银行卡转接清算机构 /信用卡组织 /银行卡组织
> 🔗 https://zhuanlan.zhihu.com/p/634273776

早些时候，银行网络不够发达时，A银行的银行卡，就只支持在A银行的机器上进行存取款等操作，不同银行的银行卡是互相排斥、互不兼容的。

显然，这种操作模式，结算的效率实在太低了，银行之间交换数据的成本也很高，资金流通起来非常麻烦。

为改善这种情况，专门成立了一类公司——**银行卡转接清算机构**，股东由各家商业银行组成，由它来组建一个**清算网络**，统一制定银行卡之间的清算标准和规则，并通过与各国的银行合作，来发行各种银行卡。

有了卡组织的存在，持有一张卡就可以在含有卡组织标识的任意一家银行机器上操作了。

目前，全球主流的卡组织有中国银联、VISA、MasterCard等。

![](../../../Assets/Pics/Pasted%20image%2020250504121726.png)
<small><a>https://research.cicc.com/frontend/recommend/detail?id=1806</a></small>


> 🔗 https://maimai.cn/article/detail?fid=1693502737&efid=eylGLQKk8H6q_r47LdehIA

卡组织全称银行卡转接清算机构（又称信用卡组织/银行卡组织），由成员组成的国际性或区域性支付卡组织，授权成员发卡，受理商户的卡交易，拥有并经营自己的国际区域处理网络。==卡组织负责建设和运营全球或区域统一的**支付卡信息交换网络**，负责支付卡交易的信息转换和资金清算，制定并推行支付卡跨行交易业务规范和技术标准。==

卡组织成立后要做的第一件事就是吸收会员或成员并建设和运营一个庞大的网络（如visa的visanet，中国银联的跨行交易清算系统CUPS等等），这个网络主要负责银行卡交易的信息交换、资金清算等等很多功能。

而加入银行卡组织的会员（比如银行）一般也有自己的网络，比如支付网络或交易清算网络等等，当会员加入银行卡组织后，该会员的网络就会与银行卡组织的国际网络进行联网，与银行卡组织进行全球的信息交换、交易处理、资金清算等业务。所以，一个银行卡组织的会员越多，会员遍布范围越广，那么这个银行卡组织的国际性和全球性就越强，服务就更加便利，总之，银行卡组织的国际网络和其会员的自有网络进行联网，共同构成遍布全世界的金融交易网络。

银行卡组织本身并不发卡，而是由加入银行卡组织的金融类机构会员（主要是银行）来发行各种卡片，并且会提示其会员机构们开发新的支付产品和技术。持卡人的相关关系也有各金融机构自己负责管理。 

> 目前国际上比较大的卡组织，分别是威士国际组织（VISA International）及万事达卡国际组织（MasterCard International）两大组织及美国运通国际股份有限公司（America Express）、中国银联股份有限公司（China UnionPay Co.,Ltd.）、大来信用卡有限公司（Diners Club）、JCB日本国际信用卡公司（JCB）、发现卡（Discover Card）等**专业银行卡转接清算机构**以及欧陆卡(EUROPAY)、台湾地区联合信用卡中心(NCCC) 、新加坡星网电子付款公司(NETS)、韩国BC卡公司(BC card)、越南付款结转公司(Banknetvn)等多家**区域卡组织**。

**目前控制全球银行卡标准的主要机构是美国的VISA、万事达。这两个所谓的“国际信用卡组织”实际上是美国的两家跨国公司。** 它们最初都是由美国多家发卡机构联合设立的股份公司，经过几十年的发展，已经成为巨型跨国企业。其经营的核心就是银行卡的标准、基于标准的银行卡品牌和覆盖全球的交易网络。它们利用其全球网络的优势，吸收各国发卡银行成为其会员，推行自己的品牌、标准。


### Visa /威士
Visa是全球支付技术公司, 运营着全球最大的零售电子支付网络连接着全世界200多个国家和地区的消费者、企业、金融机构和政府，促进人们更方便地使用数字货币，代替现金或支票。Visa的前身是1900年成立的美洲银行信用卡公司。1974年，美洲银行信用卡公司与西方国家的一些商业银行合作，成立了国际信用卡服务公司，并于1977年正式改为威士（VISA）国际组织，成为全球性的信用卡联合组织。威士国际组织拥有VISA、ELECTRON、INTERLINK、PLUS及VISA CASH等品牌商标。Visa不向消费者发卡，也不向消费者提供贷款和设定持卡人的卡费及利率。客户关系属于其金融机构的网络，直接由金融机构负责管理。
#### VisaNet


### Master /万事达
万事达卡国际组织（MasterCard INTERNATIONAL）是全球第二大信用卡国际组织。1966年美国加州的一些银行成立了银行卡协会（Interbank Card Association），并于1970年启用Master Charge的名称及标志，统一了各会员银行发行的信用卡名称和设计，1978年再次更名为MasterCard。万事达卡国际组织拥有 MasterCard、Maestro、Mondex、Cirrus等品牌商标。万事达卡国际组织本身并不直接发卡，MasterCard品牌的信用卡是由参加万事达卡国际组织的金融机构会员发行的。


### UnionPay /中国银联
> 🔗 https://zh.wikipedia.org/zh-cn/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%81%94#%E5%9C%A8%E7%BA%BF%E6%94%AF%E4%BB%98%E5%B9%B3%E5%8F%B0

中国银联股份有限公司，通称中国银联和银联，是一家总部设在中华人民共和国上海市的股份制金融服务机构，并提供银行间支付结算服务。该机构拥有的网上跨行交易清算系统，曾在中国大陆具有唯一性和垄断性。2015年时，成为全球交易量最大的银行卡清算组织。截止2024年12月31日，银联卡全球受理网络已延伸到183个国家和地区，84个国家和地区发行了银联卡。

2002年时，在中华人民共和国政府主导、推动下，中国银联由中国境内的85家金融机构、政府机构和其他法人共同发起。3月26日，经中国人民银行批准，中国银联正式成立，总估值16.5亿元人民币。政府推动建立中国银联的初衷，是为建立和运营全银行卡跨行信息交换网络，实现中国银联卡在中国大陆境内的共通，推动中国大陆的银行卡产业迅速发展。截至2018年1月，银联网络已经延伸到中国大陆境外168个国家和地区。2008和2009年，经过两轮增资扩股，注册资本增至29.3亿元人民币，共计152家股东。

在中国大陆，所有有发行银行卡的商业银行，无论股份情况，都有发行银联卡。银联在港澳地区也有相当优势，大西洋银行、中国银行澳门分行、香港上海汇丰银行、恒生银行、中国银行（香港）、南洋商业银行、集友银行、星展银行（香港）、东亚银行、中国工商银行（亚洲）、中国建设银行（亚洲）、花旗香港、上海商业银行、AEON信贷财务(亚洲)有限公司、安信信贷皆发行银联卡。在新加坡的中国资本背景银行也普遍发行银联卡，泰国、缅甸、俄罗斯也有当地发行的银联卡。而在台湾虽然多数ATM及商户支持银联，但目前台湾仍未有任何一家银行发行银联卡，该情况也和银联在世界多数国家类似，即ATM及商户多数支持银联，但并没有当地银行发行银联卡。
#### 跨行交易清算系统CUPS


### DinersClub /大来
大莱卡（DinersClub）大来卡于1950年由创业者FrankMCMamaca创办，是第一张塑料付款卡，最终发展成为一个国际通用的信用卡。1981年美国最大的零售银行--花旗银行的控股公司--花旗公司接受了DinersClubIntenational卡。大来卡公司的主要优势在于它在尚未被开发的地区增加其销售额，并且巩固该公司在信用卡市场中所保持的强有力的位置。该公司通过大来现金兑换网络与ATM网络之间所形成互惠协议，从而集中加强了其在国际间市场上的地位。


### JCB
JCB（JapanCreditBureau）1961年，JCB作为日本第一个专门的信用卡公司宣告成立。此后，它一直以最大公司的姿态发展至今，它是代表日本的名副其实的信用卡公司。在亚洲地区，其商标是独一无二的。其业务范围遍及世界各地100多个国家和地区。JCB信用卡的种类成为世界之最，达5000多种。JCB的国际战略主要瞄准了工作、生活在国外的日本实业家和女性。为确立国际地位，JCB也对日本、美国和欧洲等商户实现优先服务计划，使其包括在 JCB持卡人的特殊旅游指南中。空前的优质服务是JCB成功的奥秘。


### America Express /Amex /运通
运通卡（America Express）自1958年发行第一张运通卡以来，迄今为止运通已在68个国家和地区以49种货币发行了运通卡，构建了全球最大的自成体系的特约商户网络，并拥有超过6000万名的优质持卡人群体。成立于1850年的运通公司，最初的业务是提供快递服务。随着业务的不断发展，运通于1891年率先推出旅行支票，主要面向经常旅行的高端客户。可以说，运通服务于高端客户的历史长达百年，积累了丰富的服务经验和庞大的优质客户群体。



## Card Transaction



## Interbank Payment


## International Payment



## Ref
[支付清算系统 ｜ MBA智库]: https://wiki.mbalib.com/wiki/%E6%94%AF%E4%BB%98%E6%B8%85%E7%AE%97%E4%BD%93%E7%B3%BB

[非银行支付机构网络支付清算平台 | wikipedia]: https://zh.wikipedia.org/wiki/%E9%9D%9E%E9%93%B6%E8%A1%8C%E6%94%AF%E4%BB%98%E6%9C%BA%E6%9E%84%E7%BD%91%E7%BB%9C%E6%94%AF%E4%BB%98%E6%B8%85%E7%AE%97%E5%B9%B3%E5%8F%B0

[一文读懂国际支付清算体系 ｜ 腾讯云]: https://cloud.tencent.com/developer/article/1946677
![](../../../Assets/Pics/Pasted%20image%2020250504121541.png)

[银行间支付结算系统 | wikipedia]: https://zh.wikipedia.org/zh-cn/%E9%8A%80%E8%A1%8C%E9%96%93%E6%94%AF%E4%BB%98%E7%B5%90%E7%AE%97%E7%B3%BB%E7%B5%B1
清算所银行间支付系统（ 英语：Clearing House Interbank Payments System，CHIPS ）是一家美国私有大额交易清算所。截至2023年，它已结算约500,000笔付款，每天处理总金额为1.7万亿美元 [1]。 CHIPS与联邦储备银行的Fedwire基金一起构成了美国主要的大额国内和国际美元支付网络，占其市场份额约为96%。CHIPS交易受《统一商法典》第4A条管辖。

不同于属于监管机构一部分的Fedwire系统，CHIPS归使用该系统的金融机构所有。对于时间敏感度较低的支付，银行通常更喜欢使用CHIPS而不是Fedwire进行清算，因为CHIPS更便宜（无论是收费还是所需的资金）。原因之一是Fedwire是实时全额结算系统，而CHIPS允许净额支付。

[👍 中金看海外 | 银行卡清算组织：美国支付产业链“皇冠上的宝石”]: https://research.cicc.com/frontend/recommend/detail?id=1806
![](../../../Assets/Pics/Pasted%20image%2020250504121726.png)
![](../../../Assets/Pics/Pasted%20image%2020250504121831.png)
![](../../../Assets/Pics/Pasted%20image%2020250504122002.png)
![](../../../Assets/Pics/Pasted%20image%2020250504122330.png)

[除了银联之外还有哪些国际发卡组织？ - GoeCycle的文章 - 知乎]: https://zhuanlan.zhihu.com/p/350527342

[支付卡号 | wikipedia]: https://zh.wikipedia.org/wiki/%E6%94%AF%E4%BB%98%E5%8D%A1%E5%8F%B7

[Clearing (finance) | wikipedia]: https://en.wikipedia.org/wiki/Clearing_(finance)#United_States_clearing_system

[👍 所谓 ＂卡组织＂究竟是做什么的？ | 脉脉]: https://maimai.cn/article/detail?fid=1693502737&efid=eylGLQKk8H6q_r47LdehIA

[👍 深度答疑-有了微信和支付宝，还要其他支付公司干啥？ - 陈奇的文章 - 知乎]: https://zhuanlan.zhihu.com/p/401065807
正如标题所言，相信很多人都有这样的疑问，我曾经也有。这是一个从普通用户的角度，很容易自然而然产生的疑惑，即使支付行业从业人员很多也说不明白。关键在于理清下面4个问题：
- 支付机构的定义
- 支付业务许可的类型
- 其他支付机构与微信/支付宝的关系
- 支付产品及应用范围
一句话总结：其他支付公司既和微信支付宝有业务合作关系，又能提供差异化的产品应用于不同的行业和场景。从普通用户角度而言，每个用户使用的支付场景不一样，感受就不一样；从普通商户角度而言，商户的不同需求决定要有不同的供应；从大平台角度而言，互联网Top20巨头有18家自有或收购支付牌照是出于大数据、金融服务、业务合规的需求。

![](../../../../../../Assets/Pics/Pasted%20image%2020250504141524.png)
**收款业务链条**
- 链条1：消费者---收单外包服务机构---收单侧支付机构---清算机构---账户侧支付机构
- 链条2：消费者---收单侧支付机构---清算机构---账户侧支付机构
- 链条3：消费者---账户侧支付机构---清算机构---账户侧支付机构

**举例说明：**
- 你早上买包子，包子铺使用的是“收钱吧”聚合二维码收款，你用微信/支付宝等app扫码支付，这个流程对应的就是链条1。
- 你去酒店开房，酒店前台用的“银联商务”智能pos，让你出示微信或支付宝等app的付款码，pos扫码实现收款，这个流程对应的就是链条2。
- 你去沙县小吃或兰州拉面吃东西，假如他们用的是微信/支付宝个人收款码或商家版收款码，但一个码只支持某一个app扫码，不兼容其他app扫，这个流程对应的就是链条3。

[事关支付牌照，华为、字节在列！ | 财联社]: https://mp.weixin.qq.com/s/tOGXbiwOM8l8FElgodHNsQ
被喻为非银行支付“基本法”的《非银行支付机构监督管理条例》（下称《条例》）正式落地以来，支付行业迎来了标志性的时刻，新规后首批正式支付牌照名单出炉。

7月4日，人民银行官网公布非银行支付机构《支付业务许可证》续展（换证）公示信息。其中，花瓣支付(深圳)有限公司、抖音支付科技有限公司、乐刷支付科技有限公司等13家支付机构的《支付业务许可证》变更为“长期有效”。与此同时，6家机构未能通过 “考验”，较上一年16家公司获得续展过渡期牌照的结果再度缩减。

多位接受财联社记者采访的业内人士均认为，此次续展结果是行业加速洗牌、迈向高质量发展的关键节点。有参与本批牌照续展的机构人士透露，新规之后“长期有效” 牌照并非 “护身符”，不排除“出现问题直接取消资格”的可能性。综合来看，监管从 “数量管控” 转向 “质量优化”。

