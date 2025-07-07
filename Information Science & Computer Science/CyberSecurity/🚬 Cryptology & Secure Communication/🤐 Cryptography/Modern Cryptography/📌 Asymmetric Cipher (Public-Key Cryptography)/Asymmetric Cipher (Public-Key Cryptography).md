# Asymmetric Cipher (Public-Key Cryptography)


[TOC]



## Res
### Related Topics
↗ [Asymmetric Cipher Cryptanalysis](../../../🤮%20Cryptanalysis/Modern%20Cipher%20Cryptanalysis/Asymmetric%20Cipher%20Cryptanalysis/Asymmetric%20Cipher%20Cryptanalysis.md)



## Intro
> 🔗 https://textbook.cs161.org/crypto/public-key.html


### Asymmetric Cipher Intro
↗ [Symmetric Cipher](../📌%20Symmetric%20Cipher/Symmetric%20Cipher.md)

![](../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%204.00.15%20PM.png)


### Asymmetric Cipher Features
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%204.00.43%20PM.png)


### Asymmetric Cipher Application
一般的，公开密钥密码系统主要有如下的应用:
(1) **机密性的实现** 
发送方用接收方的公钥加密消息，接收方用自己的私钥来解密。通常只用来对短消息进行直接公钥密码对加解密。
(2) **数字签名** 
发送方用自己的私钥来签名消息，接收方通过发送方对应的公钥来鉴别消息，并且发送方不能对自己的签名进行否认。
(3) **密钥分发和协商** 
发送方和接收方基于公钥密码系统容易实现在公开信道上的大规模的密钥分发和协商。



## Principles of Asymmetric Cipher
### Asymmetric Key Requirements
![](../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%204.02.10%20PM.png)


### Secure Communication via Asymmetric Key Cryptosystem

![](../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%204.02.52%20PM.png)


### Trapdoor Function & One-way Function

![](../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%204.03.42%20PM.png)

在公钥密码中，对任意明文进行加密变换是容易计算的;如果知道解密密钥，那么，对密文进行解密也将是容易计算的;但是，如果不知道解密密钥，对密文进行 逆变换以得到正确的明文在计算上将是不可行的。称具有这种性质的函数为单向陷门函数。

较正式的，单向陷门函数可以被定义为如下函数 f:
(1)给出 f 的定义域中的任意元素 x, f(x)的计算是容易的;
(2)给出y=f (x)中的y要计算x时，若知道设计函数f时结合进去的某种信息(该信 息称为陷门)，则容易计算;若不知道该信息，则难以计算。
这样，设计公钥密码体制就变成了寻找单向陷门函数。



## ✨ Asymmetric-key Cryptosystems
目前人们主要是基于如下的数学 上的困难问题来设计单向函数和公钥密码体制:

(1)大整数分解问题(如公钥密码体制 RSA);
(2)有限域上的离散对数问题(如公钥密码体制 ElGamal);
(3)椭圆曲线上的离散对数问题(如公钥密码体制 ECC)。

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%204.00.23%20PM.png)


### Mixed Cipher
虽然公钥密码学有很多优点，但公钥密码算法运行在很大的代数结构之中，这就意味着昂贵的代数计算。相比较而言，对称密码函数一般更加有效。例如就 AES 而言，它在 256 个元素的范围中运算;基本的运算如乘法和求逆可以通过“查表”法来完成，效率非常高。通常，公钥密码系统要比相应的对称密码系统所需的计算量大得多，故一般不用公钥密码系统来加密大量的数据。

在应用中，尤其当需要加密大量的数据时，目前一种常用的方法是采用混合密码体制。 在这个密码体制中，首先产生一个随机的用于对称密码加密的临时密钥;再用公钥密码体制 来加密这个临时密钥，这就在发送者和接收者之间建立了共享的临时密钥;在这个共享的临时密钥控制下，采用对称密码体制对大量数据进行加密;最后再把加密的临时密钥和密文数 据组成报文一起发送出去。这种组合方案发挥了这两种密码系统的优势:公钥密码体制易于密钥分配和对称密码体制具有高效率。


## Asymmetric Cipher Security Analysis



## Ref
[Public-key cryptography | Wikipedia]: https://en.wikipedia.org/wiki/Public-key_cryptography

![](../../../../../../Assets/Pics/Screenshot%202024-05-21%20at%205.21.52%20PM.png)
