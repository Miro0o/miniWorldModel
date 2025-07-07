# Cryptology & Secure Communication

[TOC]



## Res
> 🎉 More resources can be found at ↗ [Cryptography](🤐%20Cryptography/Cryptography.md) & ↗ [Cryptanalysis](🤮%20Cryptanalysis/Cryptanalysis.md)


### Related Topics
↗ [Information Theory](../../🧮%20Mathematics/🧐%20Information%20Theory/Information%20Theory.md)

↗ [Computer Networking and Communication](../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Computer%20Networking%20and%20Communication.md)
↗ [Web 3.0 & Decentralized Finance](../../Data-Oriented%20&%20Human-Centered%20Technologies/Web%203.0%20&%20Decentralized%20Finance/Web%203.0%20&%20Decentralized%20Finance.md)
↗ [BlockChain](../../Data-Oriented%20&%20Human-Centered%20Technologies/Web%203.0%20&%20Decentralized%20Finance/Decentralized%20Fiance%20&%20Cryptocurrency/De-Fi%20Technologies/BlockChain.md)

↗ [Anonymous & Private Networks](../Network%20Security/Anonymous%20&%20Private%20Networks/Anonymous%20&%20Private%20Networks.md)
↗ [Tunneling Protocols & Technologies](../Network%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN/📌%20Tunneling%20Protocols%20&%20Technologies/Tunneling%20Protocols%20&%20Technologies.md)


### Tutorials / Books
📖 应用密码学：协议、算法与C源程序（原书第2版）
📖 图解密码技术:第3版/ (日)结城浩著

👍 [Learnku - 密码学入门](https://learnku.com/docs/cryptography)

🏫 https://textbook.cs161.org/crypto/
UCB CS 161 Textbook
- [Introduction to Cryptography](https://textbook.cs161.org/crypto/intro.html)
- [Symmetric-Key Cryptography](https://textbook.cs161.org/crypto/symmetric.html)
- [Cryptographic Hashes](https://textbook.cs161.org/crypto/hashes.html)
- [Message Authentication Codes (MACs)](https://textbook.cs161.org/crypto/macs.html)
- [Pseudorandom Number Generators](https://textbook.cs161.org/crypto/prng.html)
- [Diffie-Hellman Key Exchange](https://textbook.cs161.org/crypto/key-exchange.html)
- [Public-Key Encryption](https://textbook.cs161.org/crypto/public-key.html)
- [Digital Signatures](https://textbook.cs161.org/crypto/signatures.html)
- [Certificates](https://textbook.cs161.org/crypto/certificates.html)
- [Passwords](https://textbook.cs161.org/crypto/passwords.html)
- [Case Studies](https://textbook.cs161.org/crypto/case-studies.html)
- [Bitcoin](https://textbook.cs161.org/crypto/bitcoin.html)


### Learn in Action
🇬🇧 [Cracking Codes with Python](https://inventwithpython.com/cracking/)
🇨🇳 [Python 密码破解指南](https://github.com/apachecn/invent-with-python-zh/tree/master/docs/cracking)


### School Projects
https://github.com/0v3rW4tch/Cryptography-course-design/tree/master
> CUMT密码学课程设计源代码
> 
> 代码可能不是特别完善，还有可能存在其他的没有考虑周全的地方，请多多谅解
> A5.py ---------------> A5加解密
> RC4加解密.py-----------------> RC4加解密
> DES_destruct----------->DES加解密的S盒，P盒等结构
> DES加解密文件.py ---------->DES核心算法
> DigitalSignature.py----------->数字签名
> messageCheck.py --------------->消息认证
> mymd5 .py     -------------------> Hash算法
> myRSA.py ------------------------> RSA加解密

https://github.com/wsxk/hust_crypto_design
> 华中科技大学 19级密码学课程设计
> 
> PKCS7
> RSA 参数计算
> SPN增强
> SPN实现
> CRT
> 差分分析
> 彩虹表
> 模重复平方
> 线性分析

👍 https://github.com/KangweiiLiu/UCAS_courses
> 中国科学院大学网安-计算机相关课程资源，高级人工智能，深度学习，应用密码学，机器学习，信息隐藏，信息论与编码，多媒体编码等

https://github.com/szluyu99/Encryption-And-Decryption-By-Yu
> 自制的密码学综合工具，综合了对称加密算法DES，AES，IDEA，公开加密算法RSA，ECC，散列算法MD5，SHA1，CRC32，以及RSA，DSA，ECDSA数字签名验证。

https://github.com/ThuWangzw/RSA
> 2020清华大学软件学院应用密码学大作业 --- RSA


### ⚖️ Laws & Legislations
https://www.oscca.gov.cn/sca/xxgk/2023-06/04/content_1057225.shtml
中华人民共和国密码法 （2020.1.1）

https://www.oscca.gov.cn/sca/xxgk/2023-10/07/content_1061109.shtml
《商用密码应用安全性评估管理办法》已经2023年9月11日国家密码管理局局务会议审议通过，现予公布，自2023年11月1日起施行。



## Intro
Information security uses [cryptography](https://en.wikipedia.org/wiki/Cryptography) to transform usable information into a form that renders it unusable by anyone other than an authorized user; this process is called [encryption](https://en.wikipedia.org/wiki/Encryption). ==In a nutshell, cryptography is about communicating securely over insecure communication channels.==

> 密码学是一门关于通信安全的学科，主要研究如何保护信息的机密性、完整性和可用性。在密码学中，通常使用加密算法和解密算法来实现对信息的保护。
> 
> 信息安全是保护计算机系统和网络中的信息免受未经授权的访问、使用、泄露、破坏和干扰的一种技术、政策和管理措施的总称。信息安全包括密码学、网络安全、物理安全、应用程序安全、数据安全等多个方面。
> 在现代社会中，信息安全已经成为一个非常重要的领域。无论是政府、军队、企业还是个人，都需要保护自己的信息安全。例如，企业需要保护客户的个人数据，政府需要保护机密信息，个人需要保护自己的隐私和财产安全。
> 
> 密码学是实现信息安全的重要手段之一。通过使用密码学技术，可以保护信息的机密性和完整性，从而防止信息被未经授权的访问、泄露和篡改。常见的密码学技术包括对称加密、非对称加密和哈希函数等。


### Definition /Primitives in Cryptology
> 🔗 https://textbook.cs161.org/crypto/intro.html

#### Alice, Bob, Eve, and Mallory 
The most basic problem in cryptography is one of ensuring the security of communications across an insecure medium. Two recurring members of the cast of characters in cryptography are _Alice_ and _Bob_, who wish to communicate securely as though they were in the same room or were provided with a dedicated, untappable line. However, they only have available a telephone line or an Internet connection subject to tapping by an eavesdropping adversary, _Eve_. In some settings, Eve may be replaced by an active adversary _Mallory_, who can tamper with communications in addition to eavesdropping on them.

The goal is to design a scheme for scrambling the messages between Alice and Bob in such a way that Eve has no clue about the contents of their exchange, and Mallory is unable to tamper with the contents of their exchange without being detected. In other words, we wish to simulate the ideal communication channel using only the available insecure channel.
#### Keys 
The most basic building block of any cryptographic system (or _cryptosystem_) is the _key_. The key is a secret value that helps us secure messages. Many cryptographic algorithms and functions require a key as input to lock or unlock some secret value.

There are two main key models in modern cryptography. In the _symmetric key_ model, Alice and Bob both know the value of a secret key, and must secure their communications using this shared secret value. In the _asymmetric key_ model, each person has a secret key and a corresponding _public key_.
#### ⭐ CIA Triangle (Objective of Cryptology /Secure Communication)
> Refer back to principles of ↗ [Cybersecurity Basics & InfoSec /🛡️ InfoSec Principles & Objectives](../🏰%20Cybersecurity%20Basics%20&%20InfoSec/Cybersecurity%20Basics%20&%20InfoSec.md#🛡️%20InfoSec%20Principles%20&%20Objectives) for more info.
> ↗ [CIA Threats & Countermeasures](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/CIA%20Threats%20&%20Countermeasures.md)

Data Confidentiality, Data Integrity, Authentication and Non-repudiation are core principles of modern-day Cryptology.

1. **Confidentiality (机密性)** refers to certain rules and guidelines usually executed under confidentiality agreements which ensure that the information is restricted to certain people or places. ==(Encryption)==
2. **Data integrity (完整性)** refers to maintaining and making sure that the data stays accurate and consistent over its entire life cycle. ==(Encryption, Communication Channel)==
3. **Authentication (真实性)** is the process of making sure that the piece of data being claimed by the user belongs to it. ==(Message Authentication)==
4. **Non-repudiation (不可抵赖性)** refers to ability to make sure that a person or a party associated with a contract or a communication cannot deny the authenticity of their signature over their document or the sending of a message. ==(Message Authentication)==

> Other infosec attributes includes:
>  1. Availability
>  2. Reliability
>  3. Controllability
>  4. Accountability

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


### Categories of Cryptology 
#### Cryptography
> 密码编码学的主要任务是寻求有效密码算法和协议，以保证信息的机密性或认证性的方法。它主要研究密码算法 的构造与设计，也就是密码体制的构造。它是密码理论的基础，也是保密系统设计的基础。

↗ [Cryptography](🤐%20Cryptography/Cryptography.md)
#### Cryptanalysis
> 密码分析学的主要任务是研究加密信息的破译或认证信息的伪造。
> 它主要是对密码信息的解析方法进行研究。例如， 试图通过分析密文获取对方的真正明文。密码分析是检验密码体制安全性最为直接的手段，只有通过实 际密码分析考验的密码体制，才是真正可用的。这一点香农在几十年前就已表明:只有密码分析者才能 评判密码体制的安全性。因此，密码编码学和密码分析学是密码学的两个方面，两者既相互对立，又互 相促进和发展。

↗ [Cryptanalysis](🤮%20Cryptanalysis/Cryptanalysis.md)


### 🗓️ History of Information & Communication Systems | Secure Communication (保密通讯)
↗ [History of Information Systems & Security Systems](../History%20of%20Information%20Systems%20&%20Security%20Systems.md)

> 🔗 https://textbook.cs161.org/crypto/intro.html

The word “cryptography” comes from the Latin roots _crypt_, meaning secret, and _graphia_, meaning writing. So cryptography is quite literally the study of how to write secret messages.

Schemes for sending secret messages go back to antiquity. 2,000 years ago, Julius Caesar employed what’s today referred to as the “Caesar cypher,” which consists of permuting the alphabet by shifting each letter forward by a fixed amount. For example, if Caesar used a shift by 3 then the message “cryptography” would be encoded as “fubswrjudskb”. With the development of the telegraph (electronic communication) during the 1800s, the need for encryption in military and diplomatic communications became particularly important. The codes used during this “pen and ink” period were relatively simple since messages had to be decoded by hand. The codes were also not very secure, by modern standards.

The second phase of cryptography, the “mechanical era,” was the result of a German project to create a mechanical device for encrypting messages in an unbreakable code. The resulting _Enigma_ machine was a remarkable feat of engineering. Even more remarkable was the massive British effort during World War II to break the code. The British success in breaking the Enigma code helped influence the course of the war, shortening it by about a year, according to most experts. There were three important factors in the breaking of the Enigma code. First, the British managed to obtain a replica of a working Enigma machine from Poland, which had cracked a simpler version of the code. Second, the Allies drew upon a great deal of brainpower, first with the Poles, who employed a large contingent of mathematicians to crack the structure, and then from the British, whose project included Alan Turing, one of the founding fathers of computer science. The third factor was the sheer scale of the code-breaking effort. The Germans figured that the Enigma was well-nigh uncrackable, but what they didn’t figure on was the unprecedented level of commitment the British poured into breaking it, once codebreakers made enough initial progress to show the potential for success. At its peak, the British codebreaking organization employed over 10,000 people, a level of effort that vastly exceeded anything the Germans had anticipated. They also developed electromechanical systems that could, in parallel, search an incredible number of possible keys until the right one was found.

Modern cryptography is distinguished by its reliance on mathematics and electronic computers. It has its early roots in the work of Claude Shannon following World War II. The analysis of the _one-time pad_(discussed in the next chapter) is due to Shannon. The early 1970s saw the introduction of a standardized cryptosystem, DES, by the National Institute for Standards in Technology (NIST). DES answered the growing need for digital encryption standards in banking and other businesses. The decade starting in the late 1970s then saw an explosion of work on a computational theory of cryptography.



## ✨ Principles of Secure Communication
![](../../../../Assets/Pics/Screenshot%202023-03-01%20at%208.48.15%20PM.png)
<small>An example: asymmetric secure communication model</small>


### 🛕 Cryptosystems (密码体制)
通常一个密码体制可以有如下几个部分:
1. 消息空间 M(又称明文空间): 所有可能明文 m 的集合;
2. 密文空间 C: 所有可能密文 c 的集合;
3. 密钥空间 K: 所有可能密钥k的集合，其中每一密钥k由加密密钥ke和解密密钥kd组成，即k=(ke，kd);
4. 加密算法 E: 一簇由加密密钥控制的、从 M 到 C 的加密变换;
5. 解密算法 D: 一簇由解密密钥控制的、从 C 到 M 的解密变换。

五元组 $$\{ M，C，K，E，D \}$$就称为一个密码系统。在密码系统中，对于每一个确定的密钥k，加密
算法将确定一个具体的加密变换，解密算法将确定一个具体的解密变换，而且解密变换就是加密变换的 逆变换。对于明文空间M中的每一个明文m，加密算法E在加密密钥ke的控制下将明文m加密成密文c; 而解密算法D则在密钥kd的控制下将密文c解密成同一明文m，即:

对 $$m∈M，(ke，kd)∈K，$$有 $$D_kd (Eke (m))=m。$$


### Cryptosystems Design and Threat Model
> ↗ [Cybersecurity Threats & Attacks](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)

#### Kerckhoff’s Principle
> 🔗 https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle#Explanation_of_the_principle

Cryptosystems should remain secure even when the attacker knows all internal details of the system. The key should be the only thing that must be kept secret, and the system should be designed to make it easy to change keys that are leaked (or suspected to be leaked). If your secrets are leaked, it is usually a lot easier to change the key than to replace every instance of the running software. (This principle is closely related to **Shannon’s Maxim: Don’t rely on security through obscurity.**)

>  在设计和评估密码系统时还应当遵循公开设计原则，这就是著名柯克霍夫斯（Kerckhoffs）原则。其核心内容是：即使密码系统中的算法为密码分析者所知，也难以从截获的密文推导出明文或密钥。也就是说，密码体制的安全性仅应依赖于对密钥的保密，而不依赖对算法的保密。只有在假设攻击者对密码算法有充分的研究，并且拥有足够的计算资源的情况下仍然安全的密码才是安全的密码系统。 
>  
>  不把密码系统的安全性建立在算法的保密上意味着密码算法可以公开，也可以被分析，即使攻击者知道密码算法也没有关系。对于商用密码系统而言，公开密码算法的优点包括以下几个方面：
>  1. 有利于对密码算法的安全性进行公开测试评估；
>  2. 防止密码算法设计者在算法中隐藏后门；
>  3. 易于实现密码算法的标准化；
>  4. 有利于使用密码算法产品的规模化生产，实现低成本和高性能。
> 
>  但是必须要指出的是，密码设计的公开原则并不等于所有的密码算法在应用时都一定要公开密码算法。
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
##### Security
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
#### Software Implementation
#### Hardware Implementation

### Types of Cryptosystems
#### 1️⃣ Key Specific (根据密码算法所用的密钥数量)
对称密码体制(Symmetric cipher，也称为单钥密码体制、秘密密钥密码体制、 对称密钥密码体制或常规密码体制)

非对称密码体制(Asymmetric cipher，也称为双钥密码体制、公开密钥密码体制、非对称密钥密码体制)

> 由于非对称密码体制的安全性一般是依赖于某个公认的数学难题，普遍认为其安全性没有对称密码 体制高。
#### 2️⃣ Encryption Specific (根据对明文信息的处理方式)
分组密码(Block cipher)
序列密码(Stream cipher，也称为流密码)
#### 3️⃣ Reversible Specific (根据是否能进行可逆的加密变换)
单向函数密码体制
双向变换密码体制
#### Other cutting-edge Cryptosystems...
Identity-Based Encryption, IBE
Attribute-Based Encryption, ABE
Functional Encryption, FE
Full Homomorphic Encryption, FHE
Deniable Encryption



## 🌅 Secure Communication with CIA Properties
![](../../../../../Assets/Pics/Screenshot%202023-06-05%20at%2010.09.26%20PM.png)

![](../../../../../Assets/Pics/Screenshot%202023-06-05%20at%2010.09.38%20PM.png)


### Threats /Security Mechanisms in Secure Communication
↗ [CIA Threats & Countermeasures](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/CIA%20Threats%20&%20Countermeasures.md)
↗ [Cybersecurity Threats & Attacks](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)



## Cryptographic Software
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
