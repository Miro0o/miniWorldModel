# Symmetric Cipher

[TOC]



## Res
### Related Topics
↗ [Symmetric Cipher Cryptanalysis](../../../🤮%20Cryptanalysis/Modern%20Cipher%20Cryptanalysis/Symmetric%20Cipher%20Cryptanalysis/Symmetric%20Cipher%20Cryptanalysis.md)


### Learning Resources
📖 [第 3 章　对称密码（共享密钥密码）——用相同的密钥进行加密和解密](https://m.ituring.com.cn/book/tupubarticle/30282)



## Intro
### One-Time-Pad (OTP)
↗ [Polyalphabetic Ciphers](../../Classic%20Cryptography/Substitution%20Cipher/Polyalphabetic%20Ciphers.md)


### Block Cipher 🆚 Stream Cipher
分组密码与序列密码都属于对称密码，但两者有较大的不同：

😺 分组密码已一定大小作为每次处理的基本单元，而序列密码则是以一个元素（一个字母或一个比特）作为基本的处理单元。 

😺 分组密码算法的关键是加密算法，序列密码算法的关键是密钥序列生成器。

😺  
- 序列密码是一个随时间变化的加密变换，具有转换速度快、低错误传播的优点，**硬件实现电路更简单**(相比较于软件实现就会慢很多)；其缺点是：低扩散（意味着混乱不够）、插入及修改的不敏感性。
- 分组密码**易于使用软件实现**，使用的是一个不随时间变化的固定变换，具有扩散性好、插入敏感等优点；其缺点是：加解密处理速度慢、存在错误传播。 

> 序列密码是逐位进行加密,由于位操作速度比较慢,因此,序列密码并不适合于使用软件来实现,而更适用于采用硬件来高效实现(使用硅材料可以非常有效地实现序列密码)。
> 
> 由于分组算法可以避免耗时的位操作,并且易于处理计算机界定大小的数据分组,所以,分组算法则可以很容易地使用软件来实现。从实际应用来看,分组密码的应用更为普遍,一般来说分组密码的算法更为坚固些。

😺 序列密码涉及到大量的理论知识，提出了众多的设计原理，也得到了广泛的分析，**但许多研究成果并没有完全公开，这也许是因为序列密码目前主要应用于军事和外交等机密部门的缘故**。目前，公开的序列密码算法主要有RC4、A5/1、SEAL等；公开的分组密码算法主要有DES、AES。



## Symmetric Cipher Analysis
### Symmetric Cipher Security Analysis


### Drawbacks of Symmetric Cipher
对称密码体制不能完全适应应用的需要，主要表现在以下三方面:

1. **密钥管理的困难性问题**
对称密码体制中，任何两个用户间要进行保密通信就需要一个密钥，不同用户间进行保 密通信时必须使用不同的密钥;密钥为发送方和接收方所共享，用于消息的加密和解密。在 一个有 n 个用户的保密通信网络中，用户彼此间进行保密通信就需要 n(n-1)/2 个密钥。当 网络中用户数量增加时，密钥的数量将急剧增大。如当 n=100 时，需要 4950 个密钥;而 n =500 时，需要 124750个密钥。

2. **系统的开放性问题**
电子商务等网络应用提出了互不认识的网络用户间进行秘密通信问题，而对称密码体制的密钥分发方法要求密钥共享各方互相信任，因此它不能解决陌生人间的密钥传递问题，也就不能支持陌生人间的保密通信。

3. **数字签名问题**
对称密码体制难以从机制上提供数字签名功能，也就不能实现通信中的抗抵赖需求。

正是对称密码体制存在上述的局限性，促使人们产生了建立新的密码体制的愿望。公钥 密码体制又称为非对称密码体制，或双密钥密码体制，其思想在 1976 年由 W.Diffie 和 M . E. Hellman 在其开创性的论文“密码学新方向”’中首先提出来的。

↗ [Asymmetric Cipher (Public-Key Cryptography)](../📌%20Asymmetric%20Cipher%20(Public-Key%20Cryptography)/Asymmetric%20Cipher%20(Public-Key%20Cryptography).md)



## Ref
[序列密码和分组密码区别]: https://www.fisec.cn/443.html#:~:text=序列密码与分组密码,固定改换%2C没有记忆性%E3%80%82

[3.1 序列密码与分组密码]: https://learnku.com/docs/cryptography/31-sequence-cipher-and-block-cipher/8933
