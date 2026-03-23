# HTTPS (HTTP Security)

[TOC]



## Res
### Related Topics
HTTPS = ↗ [HTTP (HyperText Transfer Protocol)](../../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20(HyperText%20Transfer%20Protocol).md) + ↗ [SSL_TLS Protocol](../../../🚉%20Transportation%20Layer%20Security%20Protocols/SSL_TLS%20Protocol/SSL_TLS%20Protocol.md)



## Intro
> 🔗 [HTTPS -- WiKipedia](https://en.wikipedia.org/wiki/HTTPS)

> HTTPS（全称：Hypertext Transfer Protocol over Secure Socket Layer），是HTTP的安全版。HTTPS的安全基础是SSL，通过结合HTTP和SSL来实现Web浏览器和Web服务器之间的安全通信。
> HTTPS已经融合在当今的Web浏览器中，只要Web服务器支持HTTPS，就可以使用。
> HTTPS现在已广泛用于Intenet上的安全B/S应用，例如网上交易等
> HTTPS的规范文档可参阅RFC 2818（HTTPS Over TLS）

**Hypertext Transfer Protocol Secure** (**HTTPS**) is an extension of the [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (HTTP). It is used for [secure communication](https://en.wikipedia.org/wiki/Secure_communications) over a [computer network](https://en.wikipedia.org/wiki/Computer_network), and is widely used on the Internet. In HTTPS, the [communication protocol](https://en.wikipedia.org/wiki/Communication_protocol) is encrypted using [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) (TLS) or, formerly, Secure Sockets Layer (SSL). The protocol is therefore also referred to as **HTTP over TLS**, or **HTTP over SSL**.

The principal motivations for HTTPS are [authentication](https://en.wikipedia.org/wiki/Authentication) of the accessed [website](https://en.wikipedia.org/wiki/Website), and protection of the [privacy](https://en.wikipedia.org/wiki/Information_privacy) and [integrity](https://en.wikipedia.org/wiki/Data_integrity) of the exchanged data while in transit. It protects against [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), and the bidirectional [encryption](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation) of communications between a client and server protects the communications against [eavesdropping](https://en.wikipedia.org/wiki/Eavesdropping) and [tampering](https://en.wikipedia.org/wiki/Tamper-evident#Tampering). The authentication aspect of HTTPS requires a trusted third party to sign server-side [digital certificates](https://en.wikipedia.org/wiki/Public_key_certificate). This was historically an expensive operation, which meant fully authenticated HTTPS connections were usually found only on secured payment transaction services and other secured corporate information systems on the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web). In 2016, a campaign by the [Electronic Frontier Foundation](https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation) with the support of [web browser](https://en.wikipedia.org/wiki/Web_browser) developers led to the protocol becoming more prevalent. HTTPS is now used more often by web users than the original non-secure HTTP, primarily to protect page authenticity on all types of websites; secure accounts; and to keep user communications, identity, and web browsing private.

### HTTPS
1. 建立一个安全通道，来保证数据传输的安全；当使用HTTPS时，下面的通信内容是被加密保护的，第三方即使截获，也没有任何意义，因为没有密钥，即看不懂，也篡改不了：
	1. 请求文档的URL
	2. 文档的内容
	3. 浏览器格式的内容
	4. 在浏览器和服务器之间传输的Cookies
	5. HTTP报头的内容。
2. 确认网站的真实性，凡是使用了HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA机构颁发的安全证书来查询和验证。
	1. 一般采用HTTPS的服务器都会从CA （Certificate Authority）申请一个用于证明服务器用途类型的证书。
	2. 该证书只有用于对应的服务器的时候，客户端才信任此主机。
	3. 所以所有的银行系统网站，关键部分应用都是HTTPS的。客户通过信任该证书，从而信任该主机。



## HTTPS Working Principles
连接初始化
- 客户端通过一个可用的端口初始化一个与服务器的连接，之后发送TLS ClientHello开始TLS握手。
- 握手结束后，客户端会初始化第一个HTTP请求。所有的HTTP数据将当作TLS的应用数据发送。
- 之后是进行在该连接上的传统HTTP操作。

连接关闭
- 一个HTTP客户端或者HTTP服务器可以通过在HTTP记录中加入行：Connection:Close来指示关闭连接。当该记录发送后，就表明连接关闭。

![](../../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.04.23PM.png)

### Man-in-the-Middle Attack
![](../../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.06.14PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.07.49PM.png)



## Ref
