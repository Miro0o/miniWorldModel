# Asymmetrical-key Based Digital Signatures Algorithm (DSA)

[TOC]



## Res
### Related Topics
↗ [Asymmetric Cipher (Public-Key Cryptography)](../../../📌%20Asymmetric%20Cipher%20(Public-Key%20Cryptography)/Asymmetric%20Cipher%20(Public-Key%20Cryptography).md)



## Intro



## 1️⃣ RSA-based Digital Signatures
### RSA Digital Signature Algorithm
基于 RSA 公钥密码体制的数字签名方案通常称为 RSA 数字签名方案。

鉴于 RSA 算法在实践中已 经被证明了的安全性，RSA 数字签名方案在许多安全标准中得到广泛应用。ISO/IEC9796 和 ANSI X9.30-199x以及美国联邦信息处理标淮FIPS l86-2将RSA作为推荐的数字签名标准算法之一。另外， 美国 RSA 数据安全公司所开发的安全标准 PKCS#1 也是以 RSA 数字签名体制作为其推荐算法的。

#### RSA DSA Process
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%204.14.04%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-10-30%20at%209.03.25AM.png)

#### RSA DSA Properties
对于 RSA 数字签名方案的应用及安全性需要注意以下的几个问题:

(1) 上述 RSA 数字签名算法采用了对整个消息进行签名的方法，由于公开密钥密码体制一般速度 都比较慢，这样当消息比较长时，整个签名与验证过程都会相当的慢。可用散列函数先对消息进行散列， 再对散列码进行数字签名的方法来克服这一缺点。

(2) RSA 数字签名算法的安全性取决于 RSA 公开密钥密码算法的安全性(基于大整数分解的困难 性)。由 RSA 数字签名算法可知，因为只有签名者才知道签名密钥 d，所以其他人无法伪造签名者的签 名。

(3) 如果消息 m1、m2 的签名分别是 s1 和 s2，则任何知道 m1，s1，m2，s2 的人都可以伪造对消息 m1m2 的签名 s1s2，这是因为在 RSA 的数字签名方案中，$Sig(m1m2) = Sig(m1)Sig(m2)$。

(4) 任何人都可以通过获取某一用户的公钥 e，并对某一 $Y∈Zn$ 计算$ m=Ye mod n$ 来伪造该用户对随 机消息 m 的签名 Y，声称 Y 是该用户对消息 m 的数字签名，因为 $Sig(m)= md =( Y e) d =Y mod n$。当然，这一点也许并不能构成实际的威胁，因为攻击者还不能针对事先选定的消息来伪造签名，除非他拥 有合法用户的私钥或能够破解 RSA 密码体制的安全性(如求解大整数的分解问题)。



## 2️⃣ ElGamal-based Digital Signatures
### ELGamal Digital Signature Algorithm
ElGamal 数字签名方案是 T.ElGamal 在 1985 年发表关于 ElGamal 公开密钥密码时给出的两个方案 之一 (另外一个用于加密)。

ElGamal 数字签名方案具有许多变体，其中最重要的有美国 NIST 于 1991 年公布的数字签名标准(DSS)中所使用的数字签名算法 DSA。

ElGamal 数字签名方案的安全性基于有限 域上求解离散对数问题的困难性，它是一种非确定性的签名方案，即对一个给定的消息所产生的数字签名具有随机性。

#### ELGamal DSA Basics
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%204.14.18%20PM.png)

#### ELGamal DSA Proof


#### ELGamal DSA Properties
(1) ElGamal 数字签名算法是一个非确定性的数字签名算法，对同一个消息 m 所产生的签名依赖于随机数 k。  
(2) 由于用户的签名密钥 x 是保密的，攻击者要从公开的验证密钥 y 得到签名密钥 x 必须求解有限域上的离散对数问题(x=log，p y)。因此 ElGamal 数字签名算法的安全性是基于有限域上计算离散对数 的困难性。

(3)在签名时用的随机数 k 不能被泄露，这是因为当攻击者知道了随机数 k 后，可以由 s=(H(m)-x·r) k-1 mod (p-1); 计算: x = (H(m)-k·s) r-1 mod (p-1) 得到用户的私钥 x，这样整个数字签名算法便被攻破。

(4) 随机数 k 不能被重复使用。已有分析研究表明如果攻击者取得 k 相同的两个数字签名，就能够 计算得出数字签名私钥 x。


### `DSA` (Digital Signature Algorithm)
DSA was issued by ANIST in DSS (Digital Signature Standard), 1990.

> 数字签名标准 DSS(Digital Signature Standard)是美国国家标准技术研究所(NIST)在 1994 年 12 月正式颁布的美国联邦信息处理标准(FIPS PUB 186)，其中采用的数字签名算法就称为 DSA(Digital Signature Algorithm)，而散列算法则采用了上一章介绍的 SHA-1。DSA 是 ElGamal 数字签名方案的改进， 安全性仍然是基于有限域上计算离散对数的困难性。该标准后来经过了一系列修改。在 2000 年 1 月 27 日公布的扩充版 FIPS PUB 186-2 中，新增加了基于 RSA 和 ECC 的数字签名算法。
> 
> 目前 DSA 已在许多数字签名标准中得到推荐使用，除了美国联邦信息处理标准(FIPS PUB 186-2) 外，IEEE 的 P1363 标准中的数字签名方案也推荐使用 DSA 等算法。


#### DSS (Digital Signature Standard)


#### `DSA` DSA Basics


#### `DSA` Properties
DSA 算法也是非确定性的数字签名算法，对消息 m 的签名依赖于随机数 r，这样相同的消息可能产生不同的签名。另外，值得注意的是:当模数 p 选用 512 位的素数时，ElGamal 的签名长度为 1024 位，而 DSA 算法通过 160 位的素数 q 可将签名的长度缩短为 320 位，这样就大大地减少了存储空间和传输带宽。

DSA 的安全性也是基于计算有限域离散对数的困难性，鉴于有限域上计算离散对数问题的进展，一般认为 512 位的 DSA 算法无法提供较长期的安全性，而 1024 位的安全性值得信赖。 另外一个值得关注的问题是，计算 $r=(gk mod p) mod q$ 是数字签名生成过程中的主要运算之一，而该运算与待签名的消息 m 无关，因此可以进行预先计算。实际应用中，用户可以预先计算出很多 r 和 k-1 以备以后的数字签名使用，从而可大大加快生成数字签名的速度。



## 3️⃣ ECC-based Digital Signatures
### ECDSA (ECC Mapped DSA)
基于椭圆曲线密码的数字签名算法目前已成为国际上非常关注的一种密码算法，并被多个标准化组 织确定为数字签名标准。下面给出基于 IEEE1363 标准的椭圆曲线数字签名算法 ECDSA，它实际上是 数字签名算法(DSA)在椭圆曲线上的模拟，其安全性基于椭圆曲线上的离散对数问题。
#### ECDSA DSA Basics
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%204.18.05%20PM.png)


#### ECDSA DSA Properties







## Ref

