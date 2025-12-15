# Diffie-Hellman Based Key Exchange

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://textbook.cs161.org/crypto/key-exchange.html

Deffie-Hellman(简称 DH) 密钥交换是最早的 密钥交换算法之一，它使得通信的双方能在非安 全的信道中安全的交换密钥，用于加密后续的通信消息。由前Sun Microsystems 公司首席安全官，惠特菲尔德·迪菲(Whitfield Diffie)和斯坦福大 学电气工程系名誉教授马丁·赫尔曼(Martin Edward Hellman)在1976年首次发表。

2016年3月两人获2015ACM图灵奖



## 🎯 Basic DHE (Diffie-Hellman Ephemeral): Modular Arithmetic
![|600](../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%208.39.52%20AM.png)

![|400](../../../../../../../../Assets/Pics/Screenshot%202024-10-01%20at%2012.39.20.png)


### Security Issues
- Diffie-Hellman does not provide authentication
	- Diffie-Hellman is not secure against a MITM adversary
- DHE is an **active protocol**: Alice and Bob need to be online at the same time to exchange keys
	- What if Bob wants to encrypt something and send it to Alice for her to read later?

算法本身的安全性依赖于有限域上计算离散对数的困难性。但协议在实际应用时，一定要引入某种鉴别机制，否则就容易 受到**中间人攻击 (man-in-the-middle attack)**

密钥协商协议应能同时鉴别参加者的身份，这种协议称为**鉴别密钥协商**。

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%208.43.35%20AM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202024-10-01%20at%2012.45.04.png)



## DHE-RSA



## DHE-DES



## DHE-ECDSA



## 🎯 Elliptic-Curve Diffie-Hellman Ephemeral (ECDHE)
> The discrete-log problem seems hard because exponentiating integers in modular arithmetic “wraps around”
> Diffie-Hellman can be generalized to any mathematical group that has this cyclic property
> 
> Benefit of ECDH: The underlying problem is harder to solve, so we can use smaller keys (3072-bit DHE is about as secure as 384-bit ECDHE)



## Ref
