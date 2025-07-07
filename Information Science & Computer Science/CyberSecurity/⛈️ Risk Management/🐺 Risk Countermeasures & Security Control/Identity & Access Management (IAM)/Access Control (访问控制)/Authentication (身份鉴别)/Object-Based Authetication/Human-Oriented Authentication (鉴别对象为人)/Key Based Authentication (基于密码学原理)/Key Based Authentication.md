# Key Based Authentication

[TOC]



## Res



## Intro
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.01.08PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.58.47PM.png)



## 1️⃣ Asymmetric Key Based Authentication
在该机制中，声称者要通过证明他知道某秘密签名密钥来证实身份。由使用他的秘密签名密钥签署某一消息来完成。消息可包含一个非重复值以抵抗重放攻击。
- 要求验证者有声称者的有效公钥
- 声称者有仅由自己知道和使用的秘密签名私钥

↗ [Asymmetric Cipher (Public-Key Cryptography)](../../../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/📌%20Asymmetric%20Cipher%20(Public-Key%20Cryptography)/Asymmetric%20Cipher%20(Public-Key%20Cryptography).md)

### 👉 Certification Based Authentication (基于证书)
Generally, for certificate-based authentication, the system will generate a digital certificate to validate the user. It can be generated from the user’s unique Id like voter ID, passport, or other. It contains the user’s public key and digital signature, with this system will identify the right user, A system takes a digital sign from a user and uses cryptography to make sure it’s a valid user. 

### One-direction Authentication
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.56.44PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.56.53PM.png)

### Mutual Authentication
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.57.03PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.57.12PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.57.19PM.png)



## 2️⃣ Symmetric Key Based Authentication
基于对称密码算法的鉴别依靠一定协议下的数据加密处理。通信双方共享一个密钥（通常存储在硬件中），该密钥在质询—应答协议中处理或加密信息交换。

↗ [Symmetric Cipher](../../../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/📌%20Symmetric%20Cipher/Symmetric%20Cipher.md)

### 👉 Token Based Authentication (基于令牌)
Token-based authentication is a process in which users identify with unique tokens after the user provides credentials to the system. A token is valid only for a designated time period, after that user needs to re-generate it to use again. 

> ⚠ **Diff between certification & token**
>
> Tokens are essentially symmetric keys. That means that the same key has to be both on the client and the server to be able to authenticate users.
>
> Certificates use an asymmetric set of keys. Certificates are based on public-key cryptography. The client keeps possession of the private, which is never shared by anyone else.
>
> In Web Security, instead of just signing a ‘challenge’, the client signs the entirety of the message that’s sent by the server.

### Authentication Without Trusted Third Party
#### On-direction Authentication
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.54.24PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.54.36PM.png)

#### Mutual Authentication
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.54.47PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.54.57PM.png)

### Authentication via Trusted Third Party (Mutual Authentication)
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.55.13PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.55.23PM.png)



## 3️⃣ Message Digest Function Based Authentication
- 在该机制中，待鉴别的实体通过表明它拥有某个秘密鉴别密钥来证实其身份。可由该实体以其秘密密钥和特定数据作输入，使用密码校验函数获得密码校验值来达到。
- 声称者和验证者共享秘密鉴别密钥，应仅为该两个实体所知，以及他们的信任方。

↗ [Message Digest (Hash Function) Based Message Authentication](../../../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Message%20Digest%20(Hash%20Function)%20Based%20Message%20Authentication/Message%20Digest%20(Hash%20Function)%20Based%20Message%20Authentication.md)

### One-direction Authentication
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.57.44PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.58.06PM.png)

### Mutual Authentication
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.58.22PM.png)

![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%202.58.31PM.png)



## Ref