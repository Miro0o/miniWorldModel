# Cryptographic Attacks & Rubber-Hose Cryptanalysis

[TOC]



## Res
### Related Topics
↗ [Cybersecurity Threats & Attacks](../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)
↗ [Social Engineering & Physical Security](../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Social%20Engineering%20&%20Physical%20Security.md)

↗ [Security Protocols Formal Modeling & Verification](../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Security%20Protocols%20Formal%20Modeling%20&%20Verification.md)
- ↗ [Cryptographic Protocols Modeling & Verification](../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)


### Other Resources



## Intro



## Cryptographic Attacks
### CIA Threats ⭐
↗ [Core Cryptographic Properties Threats & Countermeasures](../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Core%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)


### Replay Attacks
↗ [Authentication (身份鉴别)](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md)

常见的消息重放攻击形式有：
- **简单重放**：攻击者简单复制一条消息，以后在重新发送它；
- **可被日志记录的复制品**：攻击者可以在一个合法有效的时间窗内重放一个带时间戳的消息；
- **不能被检测到的复制品**：这种情况可能出现，原因是原始信息已经被拦截，无法到达目的地，而只有重放的信息到达目的地。
- **反向重放，不做修改**：向消息发送者重放。当采用传统对称加密方式时，这种攻击是可能的。因为消息发送者不能简单地识别发送的消息和收到的消息在内容上的区别。

防重防攻击：
- 针对不同验证者的重放：验证者的标识符
- 针对同一验证者的重放：非重复值
#### Countermeasures to Relay Attacks: Nonce
> To counter relay attack is essentially to make every communication unique by introducing a nonce. 
> 
> In authentication technology, a nonce (number used once) is a random or unique value that is used only once during a cryptographic communication protocol. Its primary purpose is to ensure the freshness and integrity of the exchanged messages and to prevent replay attacks. 
> The implementation of a nonce depends on the specific cryptographic protocol or authentication mechanism being used. Below are some implementations of nonce in a secure communication.
##### 1️⃣ Sequence Number
↗ [Password Based Authentication (基于口令) /共享一次性口令表 (口令序列)](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Human-Oriented%20Authentication%20(鉴别对象为人)/Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md#共享一次性口令表%20(口令序列))

序列号：计数的策略：对付重放攻击的一种方法是在认证交换中使用一个序数来给每一个消息报文编号。仅当收到的消息序数顺序合法时才接受之。但这种方法的困难是要求双方必须保持上次消息的序号。
##### 2️⃣ Time Stamp
↗ [Password Based Authentication (基于口令) /Time-Synchronization (时间同步)](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Human-Oriented%20Authentication%20(鉴别对象为人)/Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md#Time-Synchronization%20(时间同步))

时间戳：**A**接受一个新消息仅当该消息包含一个时间戳，该时间戳在**A**看来，是足够接近**A**所知道的当前时间；这种方法要求不同参与者之间的时钟需要同步。
- 在网络环境中，特别是在分布式网络环境中，时钟同步并不容易做到
- 一旦时钟同步失败
	- 要么协议不能正常服务，影响可用性 **(availability)**，造成拒绝服务 **(DOS)**
	- 要么放大时钟窗口，造成攻击的机会
- 时间窗大小的选择应根据消息的时效性来确定
##### 3️⃣ Radom Value from Verifier
验证者发送随机值（如质询）：不可预测、不重复

↗ [Chaos Theory](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Dynamical%20Systems%20Theory/🇺🇳%20Chaos%20Theory/Chaos%20Theory.md)
###### Challenge /Response
↗ [Password Based Authentication (基于口令) /Challenge /Response (质询/响应 ｜ 挑战/应答)](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Human-Oriented%20Authentication%20(鉴别对象为人)/Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md#)


### MITM (man-in-the-middle) Attacks

#### Relay Attacks
> 🔗 https://en.wikipedia.org/wiki/Relay_attack

In [computer security](https://en.wikipedia.org/wiki/Computer_security "Computer security"), a **relay attack** (also known as the two-thief attack)[[1]](https://en.wikipedia.org/wiki/Relay_attack#cite_note-1) is a type of hacking technique related to [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack "Man-in-the-middle attack") and [replay](https://en.wikipedia.org/wiki/Replay_attack "Replay attack") attacks. In a classic man-in-the-middle attack, an attacker intercepts and manipulates communications between two parties initiated by one of the parties. In a classic relay attack, communication with both parties is initiated by the attacker who then merely relays messages between the two parties without manipulating them or even necessarily reading them.
#### Rollback /Downgrade Attacks
> 🔗 https://en.wikipedia.org/wiki/Downgrade_attack

A downgrade attack, also called a bidding-down attack,[1] or version rollback attack, is a form of cryptographic attack on a computer system or communications protocol that makes it abandon a high-quality mode of operation (e.g. an encrypted connection) in favor of an older, lower-quality mode of operation (e.g. cleartext) that is typically provided for backward compatibility with older systems.[2] An example of such a flaw was found in OpenSSL that allowed the attacker to negotiate the use of a lower version of TLS between the client and server.[3] This is one of the most common types of downgrade attacks. Opportunistic encryption protocols such as STARTTLS are generally vulnerable to downgrade attacks, as they, by design, fall back to unencrypted communication. Websites which rely on redirects from unencrypted HTTP to encrypted HTTPS can also be vulnerable to downgrade attacks (e.g., sslstrip), as the initial redirect is not protected by encryption.[4]


### Collision /Birthday Attacks


### Brute-Force Attacks & Dictionary / Rainbow Table Attacks
↗ [Password Attack](🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Password%20Attack.md)

↗ [Credentials & Password Related Tools](../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Credentials%20&%20Password%20Related%20Tools.md)
- ↗ [Login Cracker & Password Cracker](../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Login%20Cracker%20&%20Password%20Cracker/Login%20Cracker%20&%20Password%20Cracker.md)


### Side-Channel Attacks



## Rubber-hose Cryptanalysis
> 🔗 https://en.wikipedia.org/wiki/Rubber-hose_cryptanalysis

In cryptography, rubber-hose cryptanalysis is a euphemism for the extraction of cryptographic secrets (e.g. the password to an encrypted file) from a person by **coercion or torture** — such as beating that person with a rubber hose, hence the name — in contrast to a mathematical or technical cryptanalytic attack. 



## Ref
[计算机网络安全 —— 实体鉴别与生成大随机数（四）]: https://www.cnblogs.com/dongweian/p/14335000.html)
为了对付重放攻击，可以使用不重数（nonce），即一个不重复使用的大随机数，也称为“一次一数”。本文简要给出了相关介绍和实现。

[👍 唯一ID生成算法剖析，看看这篇就够了]: https://cloud.tencent.com/developer/article/1530850

一般来说，常用的唯一ID生成方法有这些：
- 基于时间戳&时钟序列生成
- 基于名字空间/名字的散列值 (MD5/SHA1) 生成
- 基于随机数生成
