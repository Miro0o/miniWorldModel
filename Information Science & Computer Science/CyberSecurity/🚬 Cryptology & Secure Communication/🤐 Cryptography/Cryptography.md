# Cryptography

[TOC]



## Res
### Related Notes
Cryptography is a sub-category of Cryptology:
👉 [Cryptology & Secure Communication](../Cryptology%20&%20Secure%20Communication.md)

↗ [Cryptocurrency /Cryptography](../../../Data-Oriented%20&%20Human-Centered%20Technologies/Web%203.0%20&%20Decentralized%20Finance/Decentralized%20Fiance%20&%20Cryptocurrency/Decentralized%20Fiance%20&%20Cryptocurrency.md)
↗ [OpenSSL Project](../../Network%20Security/🏇%20Network%20Security%20Basics%20&%20Protocols/🚉%20Transportation%20Layer%20Security%20Protocols/SSL_TLS%20Protocol/SSL%20&%20TLS%20Implementations/OpenSSL%20Project/OpenSSL%20Project.md)


### Learning Guides
[CTF-WiKi CN](https://ctf-wiki.org/crypto/introduction/)
[CTF-WiKi EN](https://ctf-wiki.mahaloz.re)

[Cryptography and Computer Programming](https://macs4200.org/frontmatter.html)
- Additional Resources
	- Python Code Vizualization Tool [http://www.pythontutor.com/](http://www.pythontutor.com/visualize.html#mode=edit)
	- The Mathematics of Encryption [https://bookstore.ams.org/mawrld-29](https://bookstore.ams.org/mawrld-29)

[图解密码学系列 | 知乎](https://www.zhihu.com/column/c_1417266554786078720)
[《图解密码技术》学习笔记汇总](https://blog.csdn.net/qq_29864185/article/details/116743551)

📖 https://toc.cryptobook.us/
A Graduate Course in Applied Cryptography
By   [Dan Boneh](https://crypto.stanford.edu/~dabo)   and   [Victor Shoup](https://shoup.net/)


### More Learning Materials
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


### 🔫 Types of Attacks
In general, we will assume that the attacker knows the cryptosystem to be cracked, and the attack types are usually divided into the following four types:

| Attack Type | Description |
| - | - |
| ciphertext attack | only has ciphertext |
| Known plaintext attack | Have ciphertext and corresponding plaintext |
| Select plaintext attack | Have encryption permission, can encrypt the plaintext and get the corresponding ciphertext|
| Select ciphertext attack | Have decryption permission, can decrypt the ciphertext and get the corresponding plaintext |


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



## 🧮 Cryptography Foundations
↗ [Elementary Theory of Numbers](../../../🧮%20Mathematics/🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Elementary%20Theory%20of%20Numbers.md)



## 🐼 History of Cryptography

> #TODO 
>
> 记得有个图，，，突然找不到了qwq 对比了历年最安全的加密算法
>
> 以后补一下


![](../../../../Assets/Pics/Screenshot%202023-01-22%20at%207.36.34%20PM.png)


### 1️⃣ Classic Cryptography （古典密码学）
↗️ [Classic Cryptography](Classic%20Cryptography/Classic%20Cryptography.md)

Classic cryptography, by modern standards, is not strictly cryptography; it is mostly **encoding** in various forms. 


### 2️⃣ Modern Cryptography （近代密码学）
The Communication Theory of Secret Systems, C.E.Shannon


### 3️⃣ Contemporary Cryptography （现代密码学,公钥密码）

> 💡 Terms "modern" and "contemporary" here are just a distinction of timeline in Cryptography's development. In most cases, they are both referred simply as "Modern Cryptography".


New Directions in Cryptography, W.Diffie, M.Hellman

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

🙈 more on [Message Digest](Modern Cryptography/Message Digest/Message Digest.md). 


### 4️⃣ Quantum Cryptography
#TODO 


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
