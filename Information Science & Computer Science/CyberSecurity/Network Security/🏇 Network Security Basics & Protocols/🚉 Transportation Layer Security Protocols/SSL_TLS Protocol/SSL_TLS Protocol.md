# SSL_TLS Protocol

[TOC]



## Res
### Related Topics
↗ [HTTPS (HTTP Security)](../../📱%20Application%20Layer%20Security%20Protocols/HTTPS%20(HTTP%20Security)/HTTPS%20(HTTP%20Security).md) 
↗ [PKI Scheme (Centralized)](../../../../🚬%20Cryptology%20&%20Secure%20Communication/Key%20Management/📌%20Key%20Management%20Algorithms%20&%20Protocols/🚛%20Key%20Distribution%20(one-to-many)/Asymmetric%20Key%20Distribution%20(AKD)/AKD%20via%20Public%20Key%20Certificates/🏦%20PKI%20Scheme%20(Centralized)/PKI%20Scheme%20(Centralized).md)
↗ [Cryptology & Secure Communication](../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)

↗ [SSH (Secure SHell)](../../📱%20Application%20Layer%20Security%20Protocols/SSH%20(Secure%20SHell)/SSH%20(Secure%20SHell).md)
↗ [IPSec (Internet Protocol Security) & IPSec VPN](../../🫱🏻‍🫲🏿%20Network%20Layer%20Security/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)


### Learning Resources
【深入浅出计算机网络 - 7.7 网络体系结构各层采取的安全措施——运输层】 https://www.bilibili.com/video/BV1bU4y1S7gz/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
> 💡 Heads-up
>
> **SSL (Secure Sockets Layer) specifications (1994, 1995, 1996) is an already deprecated protocol.**  It was first introduced by [Netscape Communications](https://en.wikipedia.org/wiki/Netscape_Communications) for adding the HTTPS protocol to their [Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator) web browser, then deprecated as the release of **Transport Layer Security** (**TLS**) 1.0 in 1999, which was built on SSL. TLS is a proposed [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (IETF) standard and the current version is TLS 1.3, defined in [RFC 8446](https://tools.ietf.org/html/rfc8446), August 2018. 
>
> However SSL and TLS are still used together to refer as SSL/TLS Layer.



## 🎯 SSL (Secure Sockets Layer, 安全套接层)
广泛地用于Web浏览器与服务器之间的身份认证和加密数据传输

SSL协议提供的服务主要有：
- 认证用户和服务器，确保数据发送到正确的客户机和服务器
- 加密数据以防止数据中途被窃取
- 维护数据的完整性，确保数据在传输过程中不被改变

![](../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.48.49PM.png)

Read these to find more: 
- [Frequently Asked Questions About SSL/TLS](https://www.ssl.com/faqs/faq-what-is-ssl/#faq)
- [Keys, Certificates, and Handshakes](https://www.ssl.com/faqs/faq-what-is-ssl/#keys)
- [SSL/TLS and Secure Web Browsing](https://www.ssl.com/faqs/faq-what-is-ssl/#secure-web-browsing)
- [Obtaining an SSL/TLS Certificate](https://www.ssl.com/faqs/faq-what-is-ssl/#obtain)

Or, for a quick TL;DR introduction to SSL, just jump ahead to watch a short 🎬 **[video](https://www.ssl.com/faqs/faq-what-is-ssl/#video)**.


### SSL Overview
#### SSL Session / SSL Connection
SSL协议有两个重要概念，SSL会话和SSL连接

- SSL连接：连接是对等的、暂时的，每个连接都和一个会话相关。
	- 链接状态由以下参数决定
		- **Server and client random**：每个连接中，服务器和客户机选择的、 用来表示字节顺序的随机数。
		- **Server write MAC secret**：服务器发送的在MAC操作数据时用的秘密密钥。
		- **Client write MAC secret**：客户机发送的在MAC操作数据时用的秘密密钥。
		- **Server write key**：常规加密密钥，用于服务器对数据加密和客户机对数据解密。
		- **Client write key**：常规加密密钥，用于客户机加密数据和服务器解密数据。
		- **Initialization vectors**：当在CBC模式中使用一个块密码时，为每一个密钥保留了一个Ⅳ（初始化向量）。该字段首先由SSL握手协议进行初始化。其后，每条记录的最后加密文本块保留作为后一条记录的Ⅳ。
		- **Sequence number**：对于每次连接，每一方为传送和接收的消息保留的单独序列号。当一方发送或接收变化的密码规格消息时，将适当的序列号置0。序列号最大为$2^{64}-1$
- SSL会话：
	- 指在客户机和服务器之间的关联。
	- 会话由握手协议创建。
	- 会话定义一组可以被多个连接共用的密码安全参数。
	- 对于每个连接，可以利用会话来避免对新的安全参数进行代价昂贵的协商。
	- 会话状态由以下参数决定：
		- **会话标识符（Session identifier）**：由服务器选择的任意字节顺序，用来确定活动或可恢复的会话状态。
		- **对等实体证书（Peer certificate）**：对等实体的X．509v3证书。该状态的元素可以为空。
		- **压缩方法（Compression method）**；压缩数据的算法优先于加密算法。
		- **加密规格（Cipher spec）**：指定批量数据加密算法（例如空，DES等等）和用于MAC（Message Authentication Code，消息鉴别码）计算的散列算法（例如MD5或SHA-1）。该参数同时确定了密码属性，如hash_size。
		- **主密码（Master secret）**：由客户机和服务器共享的48字节长的密码是否可恢复（is resumable）：用来确定会话是否可用于初始化新连接的标志。
#### SSL Security & Improvement
SSL标准协议存在着以下不容忽视的缺点
- 不符合《商用密码管理条例》中对商用密码产品不得使用国外密码算法的规定。
- 系统安全性还不够强。SSL协议的数据安全性其实就是建立在RSA等算法的安全性上，因此从本质上来讲，攻破RSA等算法就等同于攻破此协议。由于美国政府的出口限制，使得进入我国的实现了SSL的产品（Web浏览器和服务器）均只能提供512比特RSA公钥、40比特对称密钥的加密。显然，攻破此协议并不太难

因此，信息安全厂家一般采用对SSL进行密码方面的合规改进和采用PKI下的数字证书机制来增强SSL的安全性
- SSL协议在“重传攻击”上，有它独到的解决办法。SSL协议为每一次安全连接产生了一个128位长的随机数——“连接序号”。理论上，攻击者提前无法预测此连接序号，因此不能对服务器的请求做出正确的应答。但是计算机产生的随机数是伪随机数，它的实际周期要远比2128小，更为危险的是有规律性，所以说SSL协议并没有从根本上解决“信息重传”这种攻击方法，有效的解决方法是采用“时间戳”。但是这需要解决网络上所有节点的时间同步问题 。


### SSL Protocol
![](../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.29.28PM.png)

SSL protocol Stack. The SSL Record Protocol provides basic security services to upper layer protocols. The SSL Handshake Protocol among three upper layer protocols is used to negotiate security parameters for an SSL connection. The other two protocols in the upper layer protocols, Change Cipher Spec Protocol and Alert Protocol, are supplementary for SSL. The SSL Record Protocol fragments the application message into blocks of 214 bytes or less and optionally
#### 1️⃣ SSL Record Protocol
SSL记录协议为SSL连接提供了两种服务
- 机密性：握手协议为SSL有效载荷的常规密码定义共享秘密密钥。
- 消息完整性：握手协议为生成MAC定义共享秘密密钥。

记录协议发出传输请求消息，把数据分段成可以操作的数据块，还可以选择压缩数据，加入MAC信息，加密，加入文件头，在TCP段中传输结果单元。接收到的数据需要解密、身份验证、解压、重组，然后才能交付.

![](../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.33.56PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.37.48PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.39.38PM.png)
#### 2️⃣ SSL Handshake Protocol
![](../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.44.19PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%205.47.22PM.png)

建立安全能力，包括协议版本、会话ID、密码组、压缩方法和初始随机数字。
服务器可以发送证书、密钥交换和请求证书。服务器信号以hello消息段结束。
客户机可以发送证书。客户机发送密钥交换。客户机可以发送证书验证。
更改密码组并完成握手协议



## 🎯 TLS (Transport Layer Security，传输层安全)
↗ [TLS (Transport Layer Security) Protocols](📌%20TLS%20(Transport%20Layer%20Security)%20Protocols/TLS%20(Transport%20Layer%20Security)%20Protocols.md)



## Ref
[数字签名、数字证书与HTTPS是什么关系？]: https://www.freebuf.com/company-information/238820.html
[一文彻底搞懂加密、数字签名和数字证书！]: https://segmentfault.com/a/1190000024523772
[Transport Layer Security (TLS)]: https://www.techtarget.com/searchsecurity/definition/Transport-Layer-Security-TLS

[👍 SECURE SOCKET LAYER AND TRANSPORT LAYER SECURITY]: https://www.brainkart.com/article/Secure-Socket-Layer-and-Transport-Layer-Security_8480/

[👍 Cryptography and Network Security]: https://www.brainkart.com/subject/Cryptography-and-Network-Security_137/
