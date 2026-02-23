# Diffie-Hellman Based Key Exchange

[TOC]



## Res
### Related Topics
↗ [Discrete Logarithm](../../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/Number%20Theory%20Problems/Discrete%20Logarithm/Discrete%20Logarithm.md)


### Other Resources



## Intro
> 🔗 https://textbook.cs161.org/crypto/key-exchange.html

> 📖 《应用密码学》
> **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

Deffie-Hellman(简称 DH) 密钥交换是最早的 密钥交换算法之一，它使得通信的双方能在非安 全的信道中安全的交换密钥，用于加密后续的通信消息。由前Sun Microsystems 公司首席安全官，惠特菲尔德·迪菲(Whitfield Diffie)和斯坦福大 学电气工程系名誉教授马丁·赫尔曼(Martin Edward Hellman)在1976年首次发表。

2016年3月两人获2015ACM图灵奖。

> 🔗 https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange

**Diffie–Hellman** (**DH**) **key exchange** is a mathematical method of securely generating a symmetric [cryptographic key](https://en.wikipedia.org/wiki/Cryptographic_key "Cryptographic key") over a public channel and was one of the first [protocols](https://en.wikipedia.org/wiki/Public-key_cryptography "Public-key cryptography") as conceived by [Ralph Merkle](https://en.wikipedia.org/wiki/Ralph_Merkle "Ralph Merkle") and named after [Whitfield Diffie](https://en.wikipedia.org/wiki/Whitfield_Diffie "Whitfield Diffie") and [Martin Hellman](https://en.wikipedia.org/wiki/Martin_Hellman "Martin Hellman"). DH is one of the earliest practical examples of public key exchange implemented within the field of cryptography. Published in 1976 by Diffie and Hellman, this is the earliest publicly known work that proposed the idea of a private key and a corresponding public key.

Traditionally, secure encrypted communication between two parties required that they first exchange keys by some secure physical means, such as paper key lists transported by a trusted [courier](https://en.wikipedia.org/wiki/Courier "Courier"). The Diffie–Hellman key exchange method allows two parties that have no prior knowledge of each other to jointly establish a [shared secret](https://en.wikipedia.org/wiki/Shared_secret "Shared secret") key over an [insecure channel](https://en.wikipedia.org/wiki/Insecure_channel "Insecure channel"). This key can then be used to encrypt subsequent communications using a [symmetric-key](https://en.wikipedia.org/wiki/Symmetric-key_algorithm "Symmetric-key algorithm") [cipher](https://en.wikipedia.org/wiki/Cipher "Cipher").

Diffie–Hellman is used to secure a variety of [Internet](https://en.wikipedia.org/wiki/Internet "Internet") services. However, research published in October 2015 suggests that the parameters in use for many DH Internet applications at that time are not strong enough to prevent compromise by very well-funded attackers, such as the security services of some countries.

The scheme was published by Whitfield Diffie and Martin Hellman in 1976, but in 1997 it was revealed that [James H. Ellis](https://en.wikipedia.org/wiki/James_H._Ellis "James H. Ellis"), [Clifford Cocks](https://en.wikipedia.org/wiki/Clifford_Cocks "Clifford Cocks"), and [Malcolm J. Williamson](https://en.wikipedia.org/wiki/Malcolm_J._Williamson "Malcolm J. Williamson") of [GCHQ](https://en.wikipedia.org/wiki/Government_Communications_Headquarters "Government Communications Headquarters"), the British signals intelligence agency, had previously shown in 1969 how public-key cryptography could be achieved.

Although Diffie–Hellman key exchange itself is a non-authenticated [key-agreement protocol](https://en.wikipedia.org/wiki/Key-agreement_protocol "Key-agreement protocol"), it provides the basis for a variety of authenticated protocols, and is used to provide [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy "Forward secrecy") in [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security")'s [ephemeral](https://en.wikipedia.org/wiki/Ephemeral_key "Ephemeral key") modes (referred to as EDH or DHE depending on the cipher suite). Forward secrecy results from the use of ephemeral keys: the private keys are discarded once key agreement is complete, making them safe from later compromise. Ephemeral keys are practical because it is computationally cheap to create public-private key pairs suitable for use with Diffie-Hellman exchange.

The method was followed shortly afterwards by [RSA](https://en.wikipedia.org/wiki/RSA_\(algorithm\) "RSA (algorithm)"), an implementation of public-key cryptography using asymmetric algorithms.

Expired US patent 4200770 from 1977 describes the now public-domain algorithm. It credits Hellman, Diffie, and Merkle as inventors.



## 🎯 Classical Diffie-Hellman Key Exchange (Modular Arithmetic)
> 📖 《应用密码学》
> **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

Diffie-Hellman 密钥协商协议是 Diffie 和 Hellman 在 1976 年提出的，它是第一个公开发表的公开密钥密码算法，其安全性基于有限域 $Z_p$ 的离散对数问题，其算法描述如下：

设 $p$ 是一个满足安全性要求的大素数，$\alpha$ 是模 $p$ 的一个本原元。$\alpha$ 和 $p$ 作为系统参数公开，所有的用户都可以得到 $\alpha$ 和 $p$，它们也将为所有的用户所共享。

在两个用户 A 与 B 要通信时，他们可以通过下列步骤协商通信时所使用的密钥：
- **S1:** 用户 A 选取一个随机数 $r_A$，$1 \le r_A \le p-2$，计算   $$s_A = \alpha^{r_A} \pmod p$$并且把 $s_A$ 发送给用户 B；
- **S2:** 用户 B 选取一个随机数 $r_B$，$1 \le r_B \le p-2$，计算 $$s_B = \alpha^{r_B} \pmod p$$并且把 $s_B$ 发送给用户 A；
- **S3:** 用户 A 计算 $K = s_B^{\,r_A} \pmod p$
- **S4:** 用户 B 计算 $K' = s_A^{\,r_B} \pmod p$

由于有 $$
\begin{aligned}
K &= s_B^{\,r_A} \pmod p = (\alpha^{r_B} \pmod p)^{r_A} \pmod p \\
  &= \alpha^{r_A r_B} \pmod p = s_A^{\,r_B} \pmod p = K'
\end{aligned} $$这样，通信双方 A 与 B 得到共同的密钥 $K$，这样就可以使用对称密码体制进行保密通信。

如果攻击者窃听到了信道上的消息 $s_A$ 与 $s_B$，由于 $r_A$ 与 $r_B$ 是用户在通信时才产生的保密参数，这样，如果想获得通信密钥 $K$ 就必须求解离散对数问题，在素数很大时，这在计算上是不可行的。


![|400](../../../../../../../../Assets/Pics/Screenshot%202024-10-01%20at%2012.39.20.png)


### Ephemeral and/or Static Keys &  DHE (Diffie-Hellman Ephemeral)
#### Triple Diffie–Hellman (3-DH)

#### Extended Triple Diffie–Hellman (X3DH)

### Security and Practical Considerations
> 🔗 https://textbook.cs161.org/crypto/key-exchange.html

- Diffie-Hellman does not provide authentication
	- Diffie-Hellman is not secure against a MITM adversary
- DHE is an **active protocol**: Alice and Bob need to be online at the same time to exchange keys
	- What if Bob wants to encrypt something and send it to Alice for her to read later?

![](../../../../../../../../Assets/Pics/Screenshot%202024-10-01%20at%2012.45.04.png)

> 📖 《应用密码学》
> **刘嘉勇**，任德斌，方勇，胡勇，应用密码学（第2版）（“十一五”国家级规划教材），清华大学出版社，2014年11月

算法本身的安全性依赖于有限域上计算离散对数的困难性。但协议在实际应用时，一定要引入某种鉴别机制，否则就容易 受到**中间人攻击 (man-in-the-middle attack)**

密钥协商协议应能同时鉴别参加者的身份，这种协议称为**鉴别密钥协商**。

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%208.43.35%20AM.png)



## DHE-RSA



## DHE-DES



## DHE-ECDSA



## 🎯 Elliptic-Curve Diffie-Hellman (ECDH)
> 🔗 https://textbook.cs161.org/crypto/key-exchange.html
> 
> The discrete-log problem seems hard because exponentiating integers in modular arithmetic “wraps around”
> Diffie-Hellman can be generalized to any mathematical group that has this cyclic property
> 
> Benefit of ECDH: The underlying problem is harder to solve, so we can use smaller keys (3072-bit DHE is about as secure as 384-bit ECDHE)

> 🔗 https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman

**Elliptic-curve Diffie–Hellman** (**ECDH**) is a [key agreement](https://en.wikipedia.org/wiki/Key_agreement "Key agreement") protocol that allows two parties, each having an [elliptic-curve](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography "Elliptic-curve cryptography") public–private key pair, to establish a [shared secret](https://en.wikipedia.org/wiki/Shared_secret "Shared secret") over an [insecure channel](https://en.wikipedia.org/wiki/Insecure_channel "Insecure channel"). This shared secret may be directly used as a key, or to [derive another key](https://en.wikipedia.org/wiki/Key_derivation_function "Key derivation function"). The key, or the derived key, can then be used to encrypt subsequent communications using a [symmetric-key cipher](https://en.wikipedia.org/wiki/Symmetric-key_algorithm "Symmetric-key algorithm"). It is a variant of the [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange "Diffie–Hellman key exchange") protocol using [elliptic-curve cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography "Elliptic-curve cryptography").


### DH 🆚 ECDH
#diffie_hellman #ECDH

|                  | **Classic**                                                                                                      | **Elliptic Curve (ECDH)**                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Group**        | $\mathbb{Z}_p^{\star} = \{1,\ldots,p-1\}$                                                                        | Finite field $\mathbb{F}$ of order $n$                                                   |
| **Group Op.**    | $\times : \mathbb{Z}_p^{\star} \times \mathbb{Z}_p^{\star} \rightarrow \mathbb{Z}_p^{\star}$  (Mult. modulo $p$) | $+ : \mathbb{F} \times \mathbb{F} \rightarrow \mathbb{F}$  (not quite so intuitive…)     |
| **Generator**    | $g \in \mathbb{Z}_p^{\star}$                                                                                     | $g$ on elliptic curve                                                                    |
| **Secrets**      | $X,Y \in \{1,\ldots,p-1\}$                                                                                       | $X,Y \in \{1,\ldots,n-1\}$                                                               |
| **Half keys**    | $g^X := \underbrace{g \times \cdots \times g}_{X\ \text{times}}$  <br> $g^Y := \cdots$                           | $X \cdot g := \underbrace{g + \cdots + g}_{X\ \text{times}}$  <br> $Y \cdot g := \cdots$ |
| **Full key**     | $(g^X)^Y = (g^Y)^X$                                                                                              | $X \cdot Y \cdot g = Y \cdot X \cdot g$                                                  |
| **Typical size** | thousand of bits                                                                                                 | hundreds of bits                                                                         |

> [!TIP]
> **Trick:** write $\times$ for the group operation also in ECDH.
> 
> |                | **Classic** | **Elliptic Curve (ECDH)** |
> |----------------|-------------|-----------------------------|
> | **Group** | $\mathbb{Z}_p^{\star} = \{1,\ldots,p-1\}$ | Finite field $\mathbb{F}$ of order $n$ |
> | **Group Op.** | $\times : \mathbb{Z}_p^{\star} \times \mathbb{Z}_p^{\star} \rightarrow \mathbb{Z}_p^{\star}$  (Mult. modulo $p$) | $\times : \mathbb{F} \times \mathbb{F} \rightarrow \mathbb{F}$  (not quite so intuitive…) |
> | **Generator** | $g \in \mathbb{Z}_p^{\star}$ | $g$ on curve |
> | **Secrets** | $X,Y \in \{1,\ldots,p-1\}$ | $X,Y \in \{1,\ldots,n-1\}$ |
> | **Half keys** | $g^X := \underbrace{g \times \cdots \times g}_{X\ \text{times}}$  <br> $g^Y := \cdots$ | $g^X := \underbrace{g \times \cdots \times g}_{X\ \text{times}}$  <br> $g^Y := \cdots$ |
> | **Full key** | $(g^X)^Y = (g^Y)^X$ | $(g^X)^Y = (g^Y)^X$ |
> | **Typical size** | thousand of bits | hundreds of bits |


### Elliptic-Curve Diffie-Hellman Ephemeral (ECDHE)



## Ref
