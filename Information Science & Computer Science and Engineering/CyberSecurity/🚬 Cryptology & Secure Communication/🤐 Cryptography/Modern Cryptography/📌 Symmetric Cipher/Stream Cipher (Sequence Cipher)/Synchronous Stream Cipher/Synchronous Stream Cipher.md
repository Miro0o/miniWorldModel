# Synchronous Stream Cipher

[TOC]



## Res
### Related Topics



## Intro
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%2012.36.26%20PM.png)

同步序列密码的主要特点如下:

(1)无错误传播。从图 9.1 可以看到:同步序列密码各符号之间是真正独立的。因此， 一个传播错误只影响一个符号，不会影响到后继的符号。

(2)有同步要求。在同步序列密码中，发送方和接收方必须保持精确的同步，用同样 的密钥并作用在同样的位置上，接收方才能正确的解密。通信中丢失或增加了一个密文字符， 则接收方将一直错误，直到重新同步为止，这是同步序列密码的一个主要缺点。但同时也能 够容易检测插入、删除、重播等主动攻击。


### Synchronous Stream Cipher Taxonomy
#### 1️⃣ Binary Additive Counter Stream Ciphers

目前，已有的同步序列密码大多数是二元加法序列密码，在这种序列密码中，密钥流、 明文流和密文流都被编码成 0、1 序列，且基本的加、解密变换都是模 2 加(即异或操作)， 即:

加密： 
$$c_i = m_i \oplus k_i (i = 1,2,3,..n)$$
解密：
$$m_i = c_i \oplus k_i (i = 1,2,3,..n)$$


↗ [Binary Additive Counter Stream Ciphers](Binary%20Additive%20Counter%20Stream%20Ciphers/Binary%20Additive%20Counter%20Stream%20Ciphers.md)



## Ref

