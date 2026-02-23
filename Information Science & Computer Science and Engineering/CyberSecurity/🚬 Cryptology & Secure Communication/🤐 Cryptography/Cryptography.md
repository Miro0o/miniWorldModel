# Cryptography

[TOC]



## Res
### Related Topics
Cryptography is a sub-category of Cryptology:
👉 [Cryptology & Secure Communication](../Cryptology%20&%20Secure%20Communication.md)

↗ [Elementary Theory of Numbers](../../../🧮%20Mathematics/🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Elementary%20Theory%20of%20Numbers.md)
↗ [Number Theory Problems](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/Number%20Theory%20Problems/Number%20Theory%20Problems.md)
↗ [Computationally Hard Problems](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Algorithm%20Complexity/Computationally%20Hard%20Problems.md)

↗ [Decentralized Fiance & Cryptocurrency](../../../Data-Oriented%20&%20Human-Centered%20Technologies/Web%203.0%20&%20Decentralized%20Finance/Decentralized%20Fiance%20&%20Cryptocurrency/Decentralized%20Fiance%20&%20Cryptocurrency.md)
↗ [OpenSSL Project](../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🚉%20Transportation%20Layer%20Security%20Protocols/SSL_TLS%20Protocol/SSL%20&%20TLS%20Implementations/OpenSSL%20Project/OpenSSL%20Project.md)


### Learning Resources
https://wqbook.wqxuetang.com/book/3250393
📖 应用密码学（第3版）
作者： 刘嘉勇、赵亮、杨进、李莉
出版社： 清华大学出版社
出版日期： 2024-02-01
1. **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

📖 应用密码学：协议、算法与C源程序（原书第2版）

📖 图解密码技术:第3版/ (日)结城浩著
[图解密码学系列 | 知乎](https://www.zhihu.com/column/c_1417266554786078720)
[《图解密码技术》学习笔记汇总](https://blog.csdn.net/qq_29864185/article/details/116743551)

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

[CTF-WiKi CN](https://ctf-wiki.org/crypto/introduction/)
[CTF-WiKi EN](https://ctf-wiki.mahaloz.re)

[Cryptography and Computer Programming](https://macs4200.org/frontmatter.html)
- Additional Resources
	- Python Code Vizualization Tool [http://www.pythontutor.com/](http://www.pythontutor.com/visualize.html#mode=edit)
	- The Mathematics of Encryption [https://bookstore.ams.org/mawrld-29](https://bookstore.ams.org/mawrld-29)

📖 https://toc.cryptobook.us/
A Graduate Course in Applied Cryptography
By   [Dan Boneh](https://crypto.stanford.edu/~dabo)   and   [Victor Shoup](https://shoup.net/)
Part I: Secret key cryptography
- 1: Introduction
- 2: Encryption
- 3: Stream ciphers
- 4: Block ciphers
- 5: Chosen plaintext attacks
- 6: Message integrity
- 7: Message integrity from universal hashing
- 8: Message integrity from collision resistant hashing
- 9: Authenticated encryption
Part II: Public key cryptography
- 10: Public key tools
- 11: Public key encryption
- 12: Chosen ciphertext secure public-key encryption
- 13: Digital signatures
- 14: Fast signatures from one-way functions
- 15: Elliptic curve cryptography and pairings
- 16: Attacks on number theoretic assumptions
- 17: Post-quantum cryptography from lattices
Part III: Protocols
- 18: Protocols for identification and login
- 19: Identification and signatures from sigma protocols
- 20: Proving properties in zero-knowledge
- 21: Authenticated key exchange
- 22: Threshold cryptography
- 23: Secure multi-party computation
Appendices
- A: Basic number theory
- B: Basic probability theory
- C: Basic complexity theory
- D: Probabilistic algorithms


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


### Other Resourcess
- [Khan Academy Open Class](http://open.163.com/special/Khan/moderncryptography.html)
- [In-depth cryptography - Principles and Applications of Common Encryption Technologies](https://github.com/yuankeyang/python/blob/master/%E3%80%8A%E6%B7%B1%E5%85%A5)
- [https://cryptopals.com/](https://cryptopals.com/), a bunch of cryptography exercises.

[Mbed TLS](https://www.trustedfirmware.org/projects/mbed-tls/)
- [Mbed TLS Library](https://github.com/Mbed-TLS/mbedtls)

[人人都能看懂的密码学]( https://github.com/guoshijiang/cryptography )

【尚硅谷-网络安全之密码学，信息安全\加密算法教程】 https://www.bilibili.com/video/BV1tz4y197hm/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
Cryptography, or cryptology (from Ancient Greek: κρυπτός, romanized: kryptós "hidden, secret"; and γράφειν graphein, "to write", or -λογία -logia, "study", respectively), is **the practice and study of techniques for secure communication in the presence of adversarial behavior**.More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages. 

Modern cryptography exists at the intersection of the disciplines of mathematics, computer science, information security, electrical engineering, digital signal processing, physics, and others. Core concepts related to information security (data confidentiality, data integrity, authentication, and non-repudiation) are also central to cryptography.


### ⭐ Principles of Modern Cryptography
↗ [Modern Cryptography](Modern%20Cryptography/Modern%20Cryptography.md)


### Cryptography Application
Practical applications of cryptography include electronic commerce, chip-based payment cards, digital currencies, computer passwords, and military communications.

Other applications include:
1. Computer passwords
2. Digital currencies
3. Secure web browsing
4. Electronic signatures
5. Authentication
6. Cryptocurrencies
7. End-to-end encryption


### 🧮 Mathematical Foundations of Cryptography: Number Theory
↗ [Elementary Theory of Numbers](../../../🧮%20Mathematics/🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Elementary%20Theory%20of%20Numbers.md)
↗ [Number Theory Problems](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/Number%20Theory%20Problems/Number%20Theory%20Problems.md)



## 🐼 History of Cryptography
> [!links]
> ↗ [History of Information Systems & Security Systems](../../History%20of%20Information%20Systems%20&%20Security%20Systems.md)

![](../../../../Assets/Pics/Screenshot%202023-01-22%20at%207.36.34%20PM.png)

> 🔗 https://textbook.cs161.org/crypto/intro.html

The word “cryptography” comes from the Latin roots _crypt_, meaning secret, and _graphia_, meaning writing. So cryptography is quite literally the study of how to write secret messages.

Schemes for sending secret messages go back to antiquity. 2,000 years ago, Julius Caesar employed what’s today referred to as the “Caesar cypher,” which consists of permuting the alphabet by shifting each letter forward by a fixed amount. For example, if Caesar used a shift by 3 then the message “cryptography” would be encoded as “fubswrjudskb”. With the development of the telegraph (electronic communication) during the 1800s, the need for encryption in military and diplomatic communications became particularly important. The codes used during this “pen and ink” period were relatively simple since messages had to be decoded by hand. The codes were also not very secure, by modern standards.

The second phase of cryptography, the “mechanical era,” was the result of a German project to create a mechanical device for encrypting messages in an unbreakable code. The resulting _Enigma_ machine was a remarkable feat of engineering. Even more remarkable was the massive British effort during World War II to break the code. The British success in breaking the Enigma code helped influence the course of the war, shortening it by about a year, according to most experts. There were three important factors in the breaking of the Enigma code. First, the British managed to obtain a replica of a working Enigma machine from Poland, which had cracked a simpler version of the code. Second, the Allies drew upon a great deal of brainpower, first with the Poles, who employed a large contingent of mathematicians to crack the structure, and then from the British, whose project included Alan Turing, one of the founding fathers of computer science. The third factor was the sheer scale of the code-breaking effort. The Germans figured that the Enigma was well-nigh uncrackable, but what they didn’t figure on was the unprecedented level of commitment the British poured into breaking it, once codebreakers made enough initial progress to show the potential for success. At its peak, the British codebreaking organization employed over 10,000 people, a level of effort that vastly exceeded anything the Germans had anticipated. They also developed electromechanical systems that could, in parallel, search an incredible number of possible keys until the right one was found.

Modern cryptography is distinguished by its reliance on mathematics and electronic computers. It has its early roots in the work of Claude Shannon following World War II. The analysis of the _one-time pad_(discussed in the next chapter) is due to Shannon. The early 1970s saw the introduction of a standardized cryptosystem, DES, by the National Institute for Standards in Technology (NIST). DES answered the growing need for digital encryption standards in banking and other businesses. The decade starting in the late 1970s then saw an explosion of work on a computational theory of cryptography.

> 📖 **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

密码技术源远流长，其起源可以追溯到几千年前的埃及，巴比伦，古罗马和古希腊。早在 4000 多年以前，古埃及人就在墓志铭中使用过类似于象形文字那样奇妙的符号，这是史载的最早的密码形式。古代密码虽然不是起源于战争，但其发展成果却首先被用于战争。可以说，人类社会自从有了战争，有了保密通信的需求，就有了密码技术的研究和应用。交战双方都为了保护自己的通信安全、窃取对方的情报而研究各种信息加密技术和密码分析技术。

根据不同时期密码技术采用的加密和解密实现手段的不同特点， 密码技术的发展历史大致可以划分为三个时期，即古典密码、近代密码和现代密码时期。


### 1️⃣ Classic Cryptography （古典密码学）
↗️ [Classic Cryptography](Classic%20Cryptography/Classic%20Cryptography.md)

Classic cryptography, by modern standards, is not strictly cryptography; it is mostly **encoding** in various forms. 


### 2️⃣ Modern Cryptography （近代密码学）
> 📄 The Communication Theory of Secret Systems, C.E.Shannon


### 3️⃣ Contemporary Cryptography （现代密码学,公钥密码）
> 💡 Terms "modern" and "contemporary" here are just a distinction of timeline in Cryptography's development. In most cases, they are both referred simply as "Modern Cryptography".

> 📄 New Directions in Cryptography, W.Diffie, M.Hellman

> [!links]
> ↗ [Diffie-Hellman Based Key Exchange](../Key%20Management/📌%20Key%20Management%20Algorithms%20&%20Protocols/👥%20Key%20Agreement,%20Transport,%20and%20Exchange%20(one-to-one)/Key%20Exchange%20Algorithms%20&%20Protocols/Diffie-Hellman%20Based%20Key%20Exchange.md)
> ↗️ [Modern Cryptography](Modern%20Cryptography/Modern%20Cryptography.md)
#### Symmetric Key Cryptography
It is an encryption system where the sender and receiver of a message use a single common key to encrypt and decrypt messages. Symmetric Key Systems are faster and simpler but the problem is that the sender and receiver have to somehow exchange the key in a secure manner. The most popular symmetric key cryptography system is Data Encryption System(DES).

**e.g.**
DES, 3DES, IDEA, AES
#### Asymmetric Key Cryptography
Under this system, a pair of keys is used to encrypt and decrypt information. A public key is used for encryption and a private key is used for decryption. Public key and Private Key are different. Even if the public key is known by everyone the intended receiver can only decode it because he alone knows the private key.

**e.g.**
RSA, ECC, EIGamal
#### Message Digest Algorithm (hash)
There is no usage of any key in this algorithm. A hash value with a fixed length is calculated as per the plain text which makes it impossible for the contents of plain text to be recovered. Many operating systems use hash functions to encrypt passwords.

**e.g.**
Parity check -> CRC -> MD -> SHA -> MAC
##### Digital Signature
Digital Signature is an implementation of asymmetric cryptography.

🙈 more on ↗ [Message Digest](Modern Cryptography/Message Digest/Message Digest.md). 


### 4️⃣ Quantum Cryptography
> ↗ [Quantum Cryptography & Post-Quantum Cryptography (PQ)](Quantum%20Cryptography%20&%20Post-Quantum%20Cryptography%20(PQ)/Quantum%20Cryptography%20&%20Post-Quantum%20Cryptography%20(PQ).md)



## Prototype of Cryptography
多数的密码学理论研究在探讨密码学原型：具备基本密码学特质的算法以及和其他问题的关连。例如，容易正向运算却难以逆向运算的单向函数。通常而言，密码应用如果要安全，就必须保证单向函数存在。然而，如果单向函数存在，就表示P ≠ NP。既然当前P与NP问题仍是未解，我们就无从得知单向函数是否存在。如果单向函数存在，那安全的准随机数产生器与准随机数函数就存在。 当前已知的密码学原型仅提供基本的机能。通常是机密、消息完整、认证、和不可否认。任何其他机能都是基本算法的组合与延伸，这类组合称为密码系统。例如PGP、SSH、SSL/TLS、公开密钥基础建设和数字签名等。其他密码原型还有加密算法本身、单向排列、暗门排列等。



## 🔭 Cryptography Outlook
1976 年 Diffie 和 Hellman 的公钥密码的思想提出，标志着现代密码学的诞生，在国际密码学发展史上是具有里程碑意义的大事件，自此国际上已提出了许多种公钥密码体制 ，如基于分解大整数的困难性的密码体制——RSA 密码体制及其变种、基于离散对数问题的公钥密码体制——ElGamal 密码体制及其变种 ECC 等等，这些都得到了广泛的应用，并且为当今信息化时代提供了各种各样的安全性服务(如机密性、可信性(鉴别)、完整性、不可否认性 、可用性以及访问控制等)。这些公钥密码体制的安全性均依赖于数学难题(大整数分解难题和离散对数求解难题)的困难性．然而这些问题在量子计算情形下经过 Shor 算法均可变为易解问题——P问题，因而我们可以断言量子计算机出现之日，便是现今密码寿终正寝之日。因此，研究抗量子的计算的密码算法是未来密码学的新的研究方向。



## Ref
[1.1 信息摘要算法简介]:https://www.jianshu.com/p/859bc80129eb
[什么是密码学 - 良良工作室的文章 - 知乎]: https://zhuanlan.zhihu.com/p/104408045
[由古论今，三千年加密算法发展史]: https://www.aqniu.com/learn/28166.html
[Digest -- MDN Docs]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Digest
[Message-Digest Algorithm 5: Overview and How Does it Work?]: https://www.simplilearn.com/tutorials/cyber-security-tutorial/md5-algorithm
[密码学入门（一） - 秘猿科技的文章 - 知乎]:https://zhuanlan.zhihu.com/p/52208681
[密码学的术语、分类]: https://segmentfault.com/a/1190000013533019
[单向函数]:https://blog.csdn.net/hechenggong159/article/details/81038782
