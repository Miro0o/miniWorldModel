# Cryptology & Secure Communication

[TOC]



## Res
> 🎉 More resources can be found at ↗ [Cryptography](🤐%20Cryptography/Cryptography.md) & ↗ [Cryptanalysis](🤮%20Cryptanalysis/Cryptanalysis.md)


### Related Topics
↗ [Information Theory](../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)

↗ [Elementary Theory of Numbers](../../🧮%20Mathematics/🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Elementary%20Theory%20of%20Numbers.md)
↗ [Number Theory Problems](../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/Number%20Theory%20Problems/Number%20Theory%20Problems.md)

↗ [AnB (Alice and Bob) Notation & AnBx Languages](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/AnB%20(Alice%20and%20Bob)%20Notation%20&%20AnBx%20Languages.md)

↗ [Computer Networking and Communication](../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Computer%20Networking%20and%20Communication.md)
↗ [Web 3.0 & Decentralized Finance](../../Data-Oriented%20&%20Human-Centered%20Technologies/Web%203.0%20&%20Decentralized%20Finance/Web%203.0%20&%20Decentralized%20Finance.md)
↗ [BlockChain](../../Data-Oriented%20&%20Human-Centered%20Technologies/Web%203.0%20&%20Decentralized%20Finance/Decentralized%20Fiance%20&%20Cryptocurrency/De-Fi%20Technologies/BlockChain.md)

↗ [Anonymous & Private Networks](../Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/Anonymous%20&%20Private%20Networks.md)
↗ [Tunneling Protocols & Technologies](../Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/📌%20Tunneling%20Protocols%20&%20Technologies/Tunneling%20Protocols%20&%20Technologies.md)

↗ [Reliable Data Transfer (RDT)](../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/Reliable%20Data%20Transfer%20(RDT)/Reliable%20Data%20Transfer%20(RDT).md)
↗ [ICT System Reliability (Correctness) & Verification](../⛈️%20Risk%20Management/🦟%20Vulnerabilities/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)


### ⚖️ Laws & Legislations
https://www.oscca.gov.cn/sca/xxgk/2023-06/04/content_1057225.shtml
中华人民共和国密码法 （2020.1.1）

https://www.oscca.gov.cn/sca/xxgk/2023-10/07/content_1061109.shtml
《商用密码应用安全性评估管理办法》已经2023年9月11日国家密码管理局局务会议审议通过，现予公布，自2023年11月1日起施行。


### Other Resources



## Intro
### Overview
#### Cryptology
Information security uses [cryptography](https://en.wikipedia.org/wiki/Cryptography) to transform usable information into a form that renders it unusable by anyone other than an authorized user; this process is called [encryption](https://en.wikipedia.org/wiki/Encryption). ==In a nutshell, cryptography is about communicating securely over insecure communication channels.==

> 📖《网络攻防术》朱俊虎，网络空间安全学科规划教材

密码学是一门关于通信安全的学科，主要研究如何保护信息的机密性、完整性和可用性。在密码学中，通常使用加密算法和解密算法来实现对信息的保护。
 
信息安全是保护计算机系统和网络中的信息免受未经授权的访问、使用、泄露、破坏和干扰的一种技术、政策和管理措施的总称。信息安全包括密码学、网络安全、物理安全、应用程序安全、数据安全等多个方面。

在现代社会中，信息安全已经成为一个非常重要的领域。无论是政府、军队、企业还是个人，都需要保护自己的信息安全。例如，企业需要保护客户的个人数据，政府需要保护机密信息，个人需要保护自己的隐私和财产安全。

密码学是实现信息安全的重要手段之一。通过使用密码学技术，可以保护信息的机密性和完整性，从而防止信息被未经授权的访问、泄露和篡改。常见的密码学技术包括对称加密、非对称加密和哈希函数等。

> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

经典的密码学主要是关于加密和解密的理论，主要用于通信保密。但今天，密码学已经得到了更加深入广泛的发展，其内容已不再是单一的加解密技术。著名密码学家 S. Vanstone 曾说，密码学（Cryptology）不仅仅是提供信息安全的一些方法，更是一个数学技术的集合。毫无疑问，密码学主要是因为应对信息安全问题而存在的学科。但总的来说，在信息安全的诸多涉及面中，密码学主要为存储和传输中的数字信息提供如下几个方面的安全保护：(↗ [Core Cryptographic Properties Threats & Countermeasures](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Core%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md))
- **机密性**
	- 是一种允许特定用户访问和阅读信息，而非授权用户对信息内容不可理解的安全属性。在密码学中，信息的机密性通过加密技术实现。
- **数据完整性**
	- 数据完整性即可以确保数据在存储和传输过程中不被非授权修改的安全属性。为提供这种信息安全属性，用户必须有检测非授权修改的能力。非授权修改包括数据的篡改、删除、插入和重放等。密码学可通过采用数据加密、报文鉴别或数字签名等技术来实现数据的完整性保护。
- **鉴别**
	- 这是一种与数据来源和身份鉴别有关的安全服务。鉴别服务包括对身份的鉴别和对数据源的鉴别。对于一次通信，必须确信通信的对端是预期的实体，这就涉及到身份的鉴别。对于数据，仍然希望每一个数据单元发送或来源于预期的实体，这就是数据源鉴别。数据源鉴别隐含地提供数据完整性服务。密码学可通过数据加密、数字签名或鉴别协议等技术来提供这种真实性服务。
- **抗抵赖性**
	- 这是一种用于阻止通信实体抵赖先前的通信行为及相关内容的安全特性。密码学通过对称加密或非对称加密，以及数字签名等技术，并借助可信机构或证书机构的辅助来提供这种服务。

密码学的主要任务是从理论上和实践上阐述和解决这四个问题。它是研究信息的机密性、完整性、真实性和抗抵赖性等信息安全问题的一门学科。

==密码学主要包括密码编码学（Cryptography）和密码分析学（Cryptoanalysis）两个分支==。密码编码学的主要任务是寻求有效密码算法和协议，以保证信息的机密性或认证性的方法。它主要研究密码算法的构造与设计，也就是密码体制的构造。它是密码理论的基础，也是保密系统设计的基础。密码分析学的主要任务是研究加密信息的破译或认证信息的伪造。它主要是对密码信息的解析方法进行研究。例如，试图通过分析密文获取对方的真正明文。密码分析是检验密码体制安全性最为直接的手段，只有通过实际密码分析考验的密码体制，才是真正可用的。这一点香农在几十年前就已表明：只有密码分析者才能评判密码体制的安全性。因此，密码编码学和密码分析学是密码学的两个方面，两者既相互对立，又互相促进和发展。
- ↗ [Cryptography](🤐%20Cryptography/Cryptography.md)
- ↗ [Cryptanalysis](🤮%20Cryptanalysis/Cryptanalysis.md)
#### Secure Communication
> [!links]
> ↗ [Cybersecurity Basics & Information Security (InfoSec)](../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec).md)

> 🔗 https://en.wikipedia.org/wiki/Secure_communication

**Secure communication** is when two entities are communicating and do not want a third party to listen in. For this to be the case, the entities need to communicate in a way that is unsusceptible to [eavesdropping](https://en.wikipedia.org/wiki/Eavesdropping "Eavesdropping") or [interception](https://en.wikipedia.org/wiki/Signals_intelligence "Signals intelligence"). Secure communication includes means by which people can share information with varying degrees of certainty that third parties cannot intercept what is said. Other than spoken face-to-face communication with no possible eavesdropper, it is probable that no communication is guaranteed to be secure in this sense, although practical obstacles such as legislation, resources, technical issues (interception and encryption), and the sheer volume of communication serve to limit [surveillance](https://en.wikipedia.org/wiki/Surveillance "Surveillance").

With many communications taking place over long distance and mediated by technology, and increasing awareness of the importance of interception issues, technology and its compromise are at the heart of this debate. For this reason, this article focuses on communications mediated or intercepted by technology.

Also see _[Trusted Computing](https://en.wikipedia.org/wiki/Trusted_Computing "Trusted Computing")_, an approach under present development that achieves security in general at the potential cost of compelling obligatory trust in corporate and government bodies.


### Definition /Primitives in Cryptology
#### Objective & Security Protocol Notation (AnB Notation)
> [!links]
> ↗ [AnB (Alice and Bob) Notation & AnBx Languages](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/AnB%20(Alice%20and%20Bob)%20Notation%20&%20AnBx%20Languages.md)

> 🔗 https://textbook.cs161.org/crypto/intro.html

The most basic problem in cryptography is one of ensuring the security of communications across an insecure medium. Two recurring members of the cast of characters in cryptography are **Alice** and **Bob**, who wish to communicate securely as though they were in the same room or were provided with a dedicated, untappable line. However, they only have available a telephone line or an Internet connection subject to tapping by an eavesdropping adversary, **Eve**. In some settings, Eve may be replaced by an active adversary **Mallory**, who can tamper with communications in addition to eavesdropping on them.

The goal is to design a scheme for scrambling the messages between Alice and Bob in such a way that Eve has no clue about the contents of their exchange, and Mallory is unable to tamper with the contents of their exchange without being detected. In other words, we wish to simulate the ideal communication channel using only the available insecure channel.

> 🔗 https://en.wikipedia.org/wiki/Security_protocol_notation

In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), **security (engineering) protocol notation**, also known as **protocol narrations** and **Alice & Bob notation**, is a way of expressing a [protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol "Cryptographic protocol") of correspondence between entities of a dynamic system, such as a [computer network](https://en.wikipedia.org/wiki/Computer_network "Computer network"). In the context of a [formal model](https://en.wikipedia.org/wiki/Formal_model "Formal model"), it allows reasoning about the properties of such a system.

The standard notation consists of a set of principals (traditionally named [Alice, Bob](https://en.wikipedia.org/wiki/Alice_and_Bob "Alice and Bob"), Charlie, and so on) who wish to communicate. They may have access to a server S, shared keys K, timestamps T, and can generate [nonces](https://en.wikipedia.org/wiki/Cryptographic_nonce "Cryptographic nonce") N for authentication purposes.

A simple example might be the following: $A\rightarrow B:\{X\}_{K_{A,B}}$

This states that **A**lice intends a message for **B**ob consisting of a [plaintext](https://en.wikipedia.org/wiki/Plaintext "Plaintext") **X** encrypted under shared key **KA,B**.

Another example might be the following: $B\rightarrow A:\{N_{B}\}_{K_{A}}$

This states that **B**ob intends a message for **A**lice consisting of a [**n**once](https://en.wikipedia.org/wiki/Cryptographic_nonce "Cryptographic nonce") **NB** encrypted using public key of Alice.

A key with two subscripts, **KA,B**, is a [symmetric key](https://en.wikipedia.org/wiki/Symmetric_key "Symmetric key") shared by the two corresponding individuals. A key with one subscript, **KA**, is the public key of the corresponding individual. A private key is represented as the [inverse](https://en.wikipedia.org/wiki/Inverse_function#Notation "Inverse function") of the public key.

The notation specifies only the operation and not its semantics — for instance, private key encryption and signature are represented identically.

We can express more complicated protocols in such a fashion. See [Kerberos](https://en.wikipedia.org/wiki/Kerberos_\(protocol\) "Kerberos (protocol)") as an example. Some sources refer to this notation as _Kerberos Notation_. Some authors consider the notation used by Steiner, Neuman, & Schiller as a notable reference.

Several models exist to reason about security protocols in this way, one of which is [BAN logic](https://en.wikipedia.org/wiki/BAN_logic "BAN logic").

Security protocol notation inspired many of the programming languages used in [choreographic programming](https://en.wikipedia.org/wiki/Choreographic_programming "Choreographic programming").
#### Objective of Cryptology /Secure Communication & Cryptographic Properties ⭐ 
> [!links]
> ↗ [Cybersecurity Basics & InfoSec /🛡️ InfoSec Principles & Objectives](../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec).md#🛡️%20InfoSec%20Principles%20&%20Objectives) "CIA triangle"
> 
> ↗ [Core Cryptographic Properties Threats & Countermeasures](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Core%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)
> ↗ [Other Cryptographic Properties Threats & Countermeasures](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Other%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)

Data Confidentiality, Data Integrity, Authentication and Non-repudiation are core principles of modern-day Cryptology.
1. **Confidentiality (机密性)** refers to certain rules and guidelines usually executed under confidentiality agreements which ensure that the information is restricted to certain people or places. ==(Encryption)==
2. **Data integrity (完整性)** refers to maintaining and making sure that the data stays accurate and consistent over its entire life cycle. ==(Encryption, Communication Channel)==
3. **Authentication (真实性)** is the process of making sure that the piece of data being claimed by the user belongs to it. ==(Message Authentication)==
	1. ↗ [Authentication (身份鉴别)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md)
	2. ↗ [Message Authentication (报文鉴别，消息鉴别)](🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Message%20Authentication%20(报文鉴别，消息鉴别).md)
4. **Non-repudiation (不可抵赖性)** refers to ability to make sure that a person or a party associated with a contract or a communication cannot deny the authenticity of their signature over their document or the sending of a message. ==(Message Authentication)==

> Other infosec attributes includes:
>  1. Availability
>  2. Reliability
>  3. Controllability
>  4. Accountability
>  5. forward secrecy
>  6. malleability

---
> 🔗 https://textbook.cs161.org/crypto/intro.html

You might be thinking that **authenticity** and **integrity** seem very closely related, and you would be correct; it makes sense that before you can prove that a message came from a particular person, you first have to prove that the message was not changed. In other words, before you can prove authenticity, you first have to be able to prove integrity. However, these are not identical properties and we will take a look at some edge cases as we delve further into the cryptographic unit.

You can think about cryptographic algorithms that ensure integrity and authenticity as adding a seal on the message that is being sent. Alice uses the key to add a special seal, like a piece of tape on the envelope, on the message. She then sends the sealed message over the unsecure channel. If Mallory tampers with the message, she will break the tape on the envelope, and therefore break the seal. Without the key, Mallory cannot create her own seal. When Bob receives the message, he checks that the seal is untampered before unsealing the envelope and revealing the message.

Most cryptographic algorithms that guarantee integrity and authenticity work as follows: Alice generates a _tag_ or a _signature_ on a message. She sends the message with the tag to Bob. When Bob receives the message and the tag, he verifies that the tag is valid for the message that was sent. If the attacker modifies the message, the tag should no longer be valid, and Bob’s verification will fail. This will let Bob detect if the message has been altered and is no longer the original message from Alice. The attacker should not be able to generate valid tags for their malicious messages.

A related property that we may want our cryptosystem to have is **deniability**. If Alice and Bob communicate securely, Alice might want to publish a message from Bob and show it to a judge, claiming that it came from Bob. If the cryptosystem has deniability, there is no cryptographic proof available to guarantee that Alice’s published message came from Bob. For example, consider a case where Alice and Bob use the same key to generate a signature on a message, and Alice publishes a message with a valid signature. Then the judge cannot be sure that the message came from Bob–the signature could have plausibly been created by Alice.

|                              | Symmetric-key                                     | Asymmetric-key                                        |
| ---------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| Confidentiality              | Block ciphers with chaining modes (e.g., AES-CBC) | Public-key encryption(e.g., El Gamal, RSA encryption) |
| Integrity and authentication | MACs (e.g., AES-CBC-MAC)                          | Digital signatures (e.g., RSA signatures)             |
#### Keys 
> [!links]
> ↗ [Key Management](Key%20Management/Key%20Management.md)

> 🔗 https://textbook.cs161.org/crypto/intro.html

The most basic building block of any cryptographic system (or _cryptosystem_) is the ==**key**==. The key is a secret value that helps us secure messages. Many cryptographic algorithms and functions require a key as input to lock or unlock some secret value.

There are two main key models in modern cryptography. In the _symmetric key_ model, Alice and Bob both know the value of a secret key, and must secure their communications using this shared secret value. In the _asymmetric key_ model, each person has a secret key and a corresponding _public key_.


### 🗓️ History of Information & Communication Systems | Secure Communication (保密通讯)
> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

密码技术源远流长，其起源可以追溯到几千年前的埃及，巴比伦，古罗马和古希腊。早在 4000 多年以前，古埃及人就在墓志铭中使用过类似于象形文字那样奇妙的符号，这是史载的最早的密码形式。古代密码虽然不是起源于战争，但其发展成果却首先被用于战争。可以说，人类社会自从有了战争，有了保密通信的需求，就有了密码技术的研究和应用。交战双方都为了保护自己的通信安全、窃取对方的情报而研究各种信息加密技术和密码分析技术。

根据不同时期密码技术采用的加密和解密实现手段的不同特点， 密码技术的发展历史大致可以划分为三个时期，即古典密码、近代密码和现代密码时期。

↗ [History of Information Systems & Security Systems](../History%20of%20Information%20Systems%20&%20Security%20Systems.md)
↗ [Cryptography](🤐%20Cryptography/Cryptography.md) "🐼 History of Cryptography"



## ✨ Principles of Secure Communication & Cryptosystems
### Communication Models & Intruder Models
> [!links]
> ↗ [Cryptographic Protocols Modeling & Models of Communication (and Intruder)](🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder).md)
> ↗ [Shannon–Weaver Model](🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Information-Theoretic%20Models/Shannon–Weaver%20Model.md)
> ↗ [Dolev–Yao (DY) Model & Extended Dolev–Yao Models](🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Symbolic%20(Formal)%20Models/Dolev–Yao%20(DY)%20Model%20&%20Extended%20Dolev–Yao%20Models.md)

![](../../../../../../Assets/Pics/Pasted%20image%2020260209201620.png)
<small>The five essential parts of the Shannon–Weaver model: A source uses a transmitter to translate a message into a signal, which is sent through a channel and translated back by a receiver until it reaches its destination.</small>

![](../../../../Assets/Pics/Screenshot%202023-03-01%20at%208.48.15%20PM.png)
<small>An example: asymmetric secure communication model</small>


### Cryptosystems (密码体制) ⭐
> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

通常一个密码体制可以有如下几个部分:
1. 消息空间 M(又称明文空间): 所有可能明文 m 的集合;
2. 密文空间 C: 所有可能密文 c 的集合;
3. 密钥空间 K: 所有可能密钥k的集合，其中每一密钥k由加密密钥ke和解密密钥kd组成，即k=(ke，kd);
4. 加密算法 E: 一簇由加密密钥控制的、从 M 到 C 的加密变换;
5. 解密算法 D: 一簇由解密密钥控制的、从 C 到 M 的解密变换。

五元组 $\{ M，C，K，E，D \}$就称为一个密码系统。在密码系统中，对于每一个确定的密钥k，加密算法将确定一个具体的加密变换，解密算法将确定一个具体的解密变换，而且解密变换就是加密变换的 逆变换。对于明文空间M中的每一个明文m，加密算法E在加密密钥$k_e$的控制下将明文m加密成密文c; 而解密算法D则在密钥$k_d$的控制下将密文c解密成同一明文m，即: 
- 对 $m\in M，(k_e，k_d)\in K，$有 $D_{k_d} (E_{k_e}(m))=m$。


### Cryptosystems Design and Threat Model
> [!links]
> ↗ [Cryptographic Attacks & Rubber-Hose Cryptanalysis](🤮%20Cryptanalysis/Cryptographic%20Attacks%20&%20Rubber-Hose%20Cryptanalysis.md)
#### Cryptosystems Design Principle
> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

归纳起来，一个提供机密性服务的密码系统是实际可用的，必须满足如下基本要求：
- 系统的保密性不依赖于加密体制或算法的保密，而仅依赖于密钥的安全性。“**一切秘密寓于密钥之中**”是密码系统设计的一个重要原则。
- 满足实际安全性，使破译者取得密文后在有效时间和成本范围内，确定密钥或相应明文在计算上是不可行的。
- 加密和解密算法应适用于明文空间、密钥空间中的所有元素。
- 加密和解密算法能有效地计算，密码系统易于实现和使用。

最后还需要指出的是，对一个密码系统仅仅采取截获密文而进行分析的这类攻击称作被动攻击，这往往针对的是加密系统攻击，如上述安全性讨论中提到的密码系统。而更一般意义下的密码系统还可能遭受另一类攻击，这就是主动攻击。在这类攻击中，攻击者通过主动采用删除、修改、增加、填入、重放、伪造等手段向密码系统注入假消息，以破坏密码系统提供的信息完整性、真实性以及抗抵赖性等安全属性的保护服务，而不仅仅是从截获的密文分析出相应明文或系统密钥。
##### Kerckhoff’s Principle
> 🔗 https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle#Explanation_of_the_principle

Cryptosystems should remain secure even when the attacker knows all internal details of the system. The key should be the only thing that must be kept secret, and the system should be designed to make it easy to change keys that are leaked (or suspected to be leaked). If your secrets are leaked, it is usually a lot easier to change the key than to replace every instance of the running software. (This principle is closely related to **Shannon’s Maxim: Don’t rely on security through obscurity.**)

> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月
> 
> 在设计和评估密码系统时还应当遵循公开设计原则，这就是著名柯克霍夫斯（Kerckhoffs）原则。其核心内容是：即使密码系统中的算法为密码分析者所知，也难以从截获的密文推导出明文或密钥。也就是说，密码体制的安全性仅应依赖于对密钥的保密，而不依赖对算法的保密。只有在假设攻击者对密码算法有充分的研究，并且拥有足够的计算资源的情况下仍然安全的密码才是安全的密码系统。 
>  
> 不把密码系统的安全性建立在算法的保密上意味着密码算法可以公开，也可以被分析，即使攻击者知道密码算法也没有关系。对于商用密码系统而言，公开密码算法的优点包括以下几个方面：
> 1. 有利于对密码算法的安全性进行公开测试评估；
> 2. 防止密码算法设计者在算法中隐藏后门；
> 3. 易于实现密码算法的标准化；
> 4. 有利于使用密码算法产品的规模化生产，实现低成本和高性能。
> 
> 但是必须要指出的是，密码设计的公开原则并不等于所有的密码在应用时都一定要公开密码算法。例如世界各国的军政核心密码就都不公开其加密算法。世界各主要国家都有强大的专业密码设计与分析队伍，他们仍然坚持密码的公开设计原则，在内部进行充分的分析，只是对外不公开而已。在公开设计原则下都是安全的密码，在实际使用时再对算法保密，将会更加安全。对于商业密码则坚持在专业部门指导下的公开征集、公开评价的原则。
#### Types of Threats Against Crypto-system
In general, we will assume that the attacker knows the crypto-system to be cracked, and the attack types are usually divided into the following four types:

| Attack Type              | Description                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| ciphertext attack        | only has ciphertext                                                                        |
| Known plaintext attack   | Have ciphertext and corresponding plaintext                                                |
| Select plaintext attack  | Have encryption permission, can encrypt the plaintext and get the corresponding ciphertext |
| Select ciphertext attack | Have decryption permission, can decrypt the ciphertext and get the corresponding plaintext |
#### Cryptosystem's Assessment
> 出现在分组密码一章节中。这里引用一下

对密码体制的评估主要有 3 个方面:(1)安全性;(2)性能;(3)算法和实现特性。
1. 安全性是评估中的最重要因素，包括下述要点:算法抗密码分析的强度，可靠的数学基础，算法输出的随机性，与其他候选算法比较的相对安全性。
2. 算法性能主要包括:在各种平台上的计算效率和对存储空间的需求。计算效率主要指算法在用软硬 件实现时的执行速度。
3. 算法和实现特性主要包括:灵活性、硬件和软件适应性、算法的简单性等。算法的灵活性指可以满 足更多应用的需求，如:
	1. 密钥和分组长度可以进行调整;
	2. 在许多不同类型的环境中能够安全和有 效地实现;
	3. 可以为序列密码、HASH函数等的实现供帮助;
	4. 算法必须能够用软件和硬件两种方法实现。另外，算法设计相对简单也是一个评估因素。
##### Correctness
↗ [Cryptographic Protocols Modeling & Verification](../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)
##### Security ⭐
> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

密码系统的安全性（主要两个方面的因素）
1. **密码算法本身**的安全强度
密码算法的安全强度取决于密码设计水平、破译技术等。可以说一个密码系统所使用密码算法的安全强度是 该系统安全性的技术保证。

2. 密码系统的管理或使用中的漏洞 （**密码算法外**的不安全因素）
另外一个方面就是密码算法之外的不安全因素。因为即使一个密码算法能够达到足够高的安全强度，但攻击者却有可能通过其他非技术手段(例如用社会工程手段收买相关密钥管理人员)攻破一个密码系统。这些不安全因素来自于密码系统的管理或使用中的漏洞。

> 因此，密码算法的保密强度并不等价于密码系统整体的安全性。一个密码系统必须同时完善技术与管理要求，才能保证整个密码系统的安全。本教材仅讨论影响一个密码系统安全性的技术因素，即密码 算法本身。


密码系统安全性的评估
1. **无条件安全性**
这种评价方法考虑的是假定攻击者拥有无限的计算资源，但仍然无法破译该密码系统。按照信息论的观点就是，攻击者观察密文前后明文的不确定性相等，也即攻击者通过观察密文不会得到任何有助于破译密码系统的信息。这种密码系统就是理论上不可破译的，或者称该密码体制具有完善保密性(Perfect Secrecy )或无条件安全性。

> 1918 年，AT&T 工程师 Gilbert Vernam 发明的**一次一密(OTP)密码方案**是最早被人们认识的无条件安全的密码体制。这种密码系统使用与消息一样长的随机密钥，且密钥使用永不重复，由于它产生不带有与明文有任何统计关系的随机输出，这种方案如果被正确使用，就是理论上不可破译的密码系统。但这一方案虽然安全性能卓越，但实际上不实用，因为其密钥生成十分困难，密钥不能重复使用，密钥管理成为一个非常艰难的问题，完全的一次一密密码体制往往只具有理论上的意义。

2. **可证明安全性**
这种方法是将密码系统的安全性归结为某个经过深入研究的数学难题(如大整数素因子分解、计算 离散对数等)，数学难题被证明求解困难。这种评估方法存在的问题是它只说明了这个密码方法的安全 性与某个困难问题相关，没有完全证明问题本身的安全性，并给出它们的等价性证明。

3. **计算安全性**
计算安全性又称为实际安全性，这种评价方法是指使用目前最好的方法攻破该密码系统所需要的计 算远远超出攻击者的计算资源水平，则可以定义这个密码系统是安全的。

🎤 综上，一个密码系统要达到实际安全性，就要满足以下准则:  
1. 破译该密码系统的实际计算量(包括计算时间或费用)十分巨大，以致于在实际上是无法实现的;
2. 破译该密码系统所需要的计算时间超过被加密信息有用的生命周期。例如，战争中发起战斗攻击的作战命令只需要在战斗打响前需要保密;重要新闻消息在公开报道前需要保密的时间往往也只有几个小时;
3. 破译该密码系统的费用超过被加密信息本身的价值;

如果一个密码系统能够满足以上准则之一，就可以认为是满足实际安全性的。对于实际应用中的密码系统而言，由于至少存在一种破译方法，即强力攻击法，因此都不能满足无条件安全性，只提供计算安全性。
##### Efficiency
##### Other Algorithms-specific Features


### Cryptosystems Implementation
> [!links]
> ↗ [Security Programming & Security Product Development](../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/Security%20Programming%20&%20Security%20Product%20Development/Security%20Programming%20&%20Security%20Product%20Development.md)
#### Software Implementation
#### Hardware Implementation


### Cryptosystems Taxonomy
#### 1️⃣ Key Specific (根据密码算法所用的密钥数量)
> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

根据加密算法与解密算法所使用的密钥是否相同，或是否能简单地由加/解密密钥导出解/加密密钥，可以将密码体制分为**对称密码体制**（Symmetric cipher，也称为单钥密码体制、秘密密钥密码体制、对称密钥密码体制或常规密码体制）和**非对称密码体制**（Asymmetric cipher，也称为双钥密码体制、公开密钥密码体制、非对称密钥密码体制）。

如果一个提供保密服务的密码系统，它的加密密钥和解密密钥相同，或者虽然不同，但由其中任意一个可以很容易地导出另外一个，那么该系统所采用的就是对称密码体制。本书所介绍的 DES、AES、IDEA、RC6 等都是典型对称密码体制。显然，使用对称密码体制时，如果某个实体拥有加密（或解密）能力，也就必然拥有解密（或加密）能力。

如果一个提供保密服务的密码系统，其加密算法和解密算法分别用两个不同的密钥实现，并且由加密密钥不能推导出解密密钥，则该系统所采用的就是非对称密码体制。采用非对称密钥密码体制的每个用户都有一对选定的密钥。其中一个是可以公开的，称为公开密钥（Public key），简称公钥；另一个由用户自己秘密保存，称为私有密钥（Private key），简称私钥。如本书中所介绍的 RSA、ElGamal、椭圆曲线密码等都是非对称密钥密码体制的典型实例。

在安全性方面，对称密钥密码体制是基于复杂的非线性变换与迭代运算实现算法安全性的，而非对称密钥密码体制一般是基于某个公认的数学难题而实现安全性的。由于后者的安全程度与现实的计算能力具有密切的关系，因此，通常认为非对称密钥密码体制的安全强度似乎没有对称密钥密码体制高，但也具有对称密钥密码体制所不具备的一些特性，比如它适用于开放性的使用环境，密钥管理问题相对简单，可以方便、安全地实现数字签名和验证等。

==由于非对称密码体制的安全性一般是依赖于某个公认的数学难题，普遍认为其安全性没有对称密码体制高。==
##### Symmetric Cipher
> [!links]
> ↗ [Symmetric Cipher](🤐%20Cryptography/Modern%20Cryptography/📌%20Symmetric%20Cipher/Symmetric%20Cipher.md)

> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

使用对称密码体制实现的保密通信模型如图1.2 所示。在保密通信前，由消息的发送方（信源）生成密钥，并通过安全的信道送到消息的接收方（信宿）；或者由可信的第三方生成密钥，并通过安全信道送到消息的发送方和接收方。在进行保密通信时，由发送方利用加密算法，根据输入的明文消息 _m_ 和密钥 _k_ 生成密文 _c_，并通过不安全的普通信道（存在密码攻击者）传送到接收方。接收方通过解密算法根据输入的密文 _c_ 和密钥 _k_ 解密恢复出明文 _m_。

![](../../../Assets/Pics/Screenshot%202026-02-27%20at%2019.24.11.png)
<small>对称密码体制(Symmetric cipher，也称为单钥密码体制、秘密密钥密码体制、 对称密钥密码体制或常规密码体制)</small>

![](../../../Assets/Pics/Pasted%20image%2020260305165011.png)

对称密码体制的主要优点是加密、解密的处理速度快，效率高，算法安全性高。而存在的局限性或不足主要有以下几点：
- 对称密码算法的密钥分发过程复杂，所花代价高。对称密码保密通信模型要求在通信前要建立安全信道，以保证将密钥安全地传送到通信的接收方。但如何才能将密钥安全地送到接收方，这是对称密码算法的突出问题，甚至可能成为“不可逾越的障碍”（catch-22）。
- 密钥管理的困难。在实现多用户保密通信时，密码系统的密钥数量会急剧增大，使密钥管理更加复杂。例如，要实现 n 个用户的两两保密通信，每个用户都需要安全获取并保管 (n−1) 个密钥，系统总共需要的密钥数量为 C(n, 2) = n(n−1)/2，当 n=100 时，密钥数量为 4,995；当 n=5000 时，密钥数量则高达 12,497,500。
- 保密通信系统的开放性差。通信双方必须安全拥有相同的密钥，才能开始保密通信。如果收发双方素不相识或没有可靠的密钥传递渠道，就不能进行保密通信。
- 存在数字签名的困难性。当用对称密码算法实现数字签名时，由于通信双方拥有相同的秘密信息（密钥），使得接收方可以伪造数字签名，发送方也可以抵赖发送过的消息，难以实现抗抵赖的安全需求。
##### Asymmetric Cipher
> [!links]
> ↗ [Asymmetric Cipher (Public-Key Cryptography)](🤐%20Cryptography/Modern%20Cryptography/📌%20Asymmetric%20Cipher%20(Public-Key%20Cryptography)/Asymmetric%20Cipher%20(Public-Key%20Cryptography).md)

> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

使用非对称密码体制实现的保密通信模型如图 1.3 所示。在保密通信前，假定每个用户都有一对用于加密和解密的密钥对，其中每个用户的加密密钥公开发布，使得任何人都很容易地获取；而每个用户的解密密钥则由各个用户自己安全保管，不得泄露。在进行保密通信时，由发送方利用加密算法，根据输入的明文消息 m 和接收方的加密密钥（公开密钥）$k_e$ 生成密文 c，并通过不安全的普通信道（存在密码攻击者）传送到接收方。接收方则可利用解密算法，根据输入的密文 c 和秘密保管的私有密钥（解密密钥）$k_d$ 解密恢复出明文 m。

![](../../../../Assets/Pics/Screenshot%202023-03-01%20at%208.48.15%20PM.png)
<small>非对称密码体制(Asymmetric cipher，也称为双钥密码体制、公开密钥密码体制、非对称密钥密码体制)</small>

而攻击者通过截获密文 c，利用加解密算法和接收方的公钥（加密密钥）$k_e$ 或除接收方私有密钥 $k_d$ 之外的其它密钥，想要得出明文 m 或接收方私有密钥（解密密钥）$k_d$ 则是计算不可行的。

需要强调的是，在非对称密码体制中，加密算法、解密算法以及公开密钥是可以公开的信息，而私有密钥是需要保密的。而用公开密钥对明文进行加密后，仅能采用与之对应的私有密钥解密，才能恢复出明文。

非对称密码体制的优点主要有：
- 密钥分配简单。不需要安全信道和复杂的安全协议来传送密钥。每个用户的公钥密钥可基于公开的渠道（如密钥分发中心）分发给其它用户，而私有密钥则由用户自己秘密保管。
- 系统密钥量少，便于管理。系统中的每个用户只需要保存自己的私有密钥，n 个用户仅需要产生 n 对密钥。
- 系统开放性好。
- 可以实现数字签名。

与对称密码体制相比，非对称密码体制存在的局限性是加密、解密运算复杂，处理速度较慢，同等安全强度下，非对称密码体制的密钥位数较多。

另外，由于加密密钥是公开发布的，客观上存在“可能报文攻击”的威胁，即攻击者截获密文之后，可以利用公开的加密密钥，通过尝试遍历加密所有可能的明文，并与截获的密文进行比较，若可能的明文数量不多，这种攻击是很有效的。为了对抗这种攻击，可以通过引入随机化因子，使相同的明文加密的密文不相同。
#### 2️⃣ Encryption Specific (根据对明文信息的处理方式)
分组密码(Block cipher)
序列密码(Stream cipher，也称为流密码)
#### 3️⃣ Reversible Specific (根据是否能进行可逆的加密变换)
> [!links]
> ↗ [Function & Mapping of Set](../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> ↗ [Message Digest & Hash Function (Integrity)](🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Digest%20&%20Hash%20Function%20(Integrity)/Message%20Digest%20&%20Hash%20Function%20(Integrity).md)
> ↗ [Message Digest (Hash Function) Based Message Authentication](🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Message%20Digest%20(Hash%20Function)%20Based%20Message%20Authentication/Message%20Digest%20(Hash%20Function)%20Based%20Message%20Authentication.md)

单向函数密码体制
双向变换密码体制
#### Other cutting-edge Cryptosystems...
Identity-Based Encryption, IBE
Attribute-Based Encryption, ABE
Functional Encryption, FE
Full Homomorphic Encryption, FHE
Deniable Encryption



## 🌅 Secure Communication & Cryptographic Protocols
> [!links]
> ↗ [Cryptographic Protocols Modeling & Models of Communication (and Intruder)](🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder).md)
> ↗ [Cryptographic Protocols Modeling & Verification](../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)


### Secure Communication with Core Cryptographic Properties ⭐
![](../../../../../Assets/Pics/Screenshot%202023-06-05%20at%2010.09.26%20PM.png)

![](../../../../../Assets/Pics/Screenshot%202023-06-05%20at%2010.09.38%20PM.png)


### Threats /Security Mechanisms in Secure Communication
↗ [Core Cryptographic Properties Threats & Countermeasures](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Core%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)
↗ [Cybersecurity Threats & Attacks](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)

↗ [Cryptanalysis](🤮%20Cryptanalysis/Cryptanalysis.md)


### Security Protocol Verification
↗ [Security Protocols Formal Modeling & Verification](../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Security%20Protocols%20Formal%20Modeling%20&%20Verification.md)
↗ [Cryptographic Protocols Modeling & Verification](../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)



## Cryptographic Applications
> Software, Hardware, and protocols.

![](../../../Assets/Pics/Screenshot%202024-04-26%20at%203.28.56%20PM.png)
<small>https://en.wikipedia.org/wiki/Encryption_software</small>

↗ [Cryptology Applications](Cryptology%20Applications.md)



## Ref
[密码学与计算机网络安全、信息安全与密码学、解决区块链隐私问题的密码学]: https://blog.csdn.net/dujuancao11/article/details/109138506

[密码学与信息安全]: https://juejin.cn/s/密码学与信息安全
[现代密码学概述]: https://blog.csdn.net/qq_51524329/article/details/121542115
[密码学系列之二：密码学基本概念]: https://blog.csdn.net/apr15/article/details/125055333
[1.6 密码系统的安全性（二）]: https://learnku.com/docs/cryptography/16-security-of-cryptographic-system-2/8922

[🤔 关于密评，这10个问题你一定要知道！]: http://www.lingpan.cn/newsinfo/1183029.html

[👍 密码学最好的课程是什么？ - 知乎]: https://www.zhihu.com/question/390212555
直接上干货，个人觉得不用看别的了
1. https://www.coursera.org/learn/cryptography
2. https://www.coursera.org/learn/crypto
3. https://www.youtube.com/playlist?list=PL6ogFv-ieghe8MOIcpD6UDtdK-UMHG8oH
