# Human-Oriented Authentication (鉴别对象为人)

[TOC]



## Res
### Related Topics
↗ [Web Access Control](../../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Access%20Control.md)
↗ [Web Authentication Technologies & Frameworks](../../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Web%20Authentication%20Technologies%20&%20Frameworks.md)



## Intro
### 保证消息实时性
1、时间戳:A接受一个新消息仅当该消息包含一个时间戳，该时间戳在A看来，是足够接近A所知道的当前 时间;这种方法要求不同参与者之间的时钟需要同步。

> 局限性： 由于变化的和不可预见的网络延迟的本性，不能期望分布式时钟保持精确的同步。因此，任何基于时间戳的过程必须采用时间窗的方式来处理:一方面时间窗应足够大以包容网络延迟， 另一方面时间窗应足够小以最大限度地减小遭受攻击 的机会。安全的时间服务器用以实现时钟同步可能是 最好的方法。


2、质询/响应方式(Challenge/Response):A期望从B 获得一个新消息，首先发给B一个随机质询值 (Challenge)，并要求后续从B收到的消息(Response) 包含正确的这个质询值(或其函数)。

>局限性： 不适应非连接性的应用，因为它要求在传输开始之前先有握手的额外销，这就抵消了无连接通信的主要特点。



## Basic Authentication Factors
### 👉 Password Based (基于口令)
Traditional password authentication is static, which is feasible to attack. That's where dynamic password authentication is adopted. 

↗ [Password Based Authentication (基于口令)](Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md)


### 👉 Biometrics (生物特征提取)
↗ [Biometrics Authentication](Biometrics%20Authentication%20(基于生物特征信息)/Biometrics%20Authentication.md)


### 👉 Cryptographic Key /Token Based (基于密钥/令牌)
↗ [Key Based Authentication](Key%20Based%20Authentication%20(基于密码学原理)/Key%20Based%20Authentication.md)
#### 👉 Anonymous Authentication
#### 👉 Group Key Agreement


### 👉 Identity Token Based (基于实物凭证)
↗ [Identity Token Based Authentication (基于实物凭证)](Identity%20Token%20Based%20Authentication%20(基于实物凭证)/Identity%20Token%20Based%20Authentication%20(基于实物凭证).md)


### 👉 Zero-Knowledge Proof (ZKP)
↗ [Zero-Knowledge Proof (ZKP)](Zero-Knowledge%20Proof%20(ZKP)/Zero-Knowledge%20Proof%20(ZKP).md)



## 2FA /Multi-factor Authentication
**2FA Example: Authentication Tokens** (↗ [JWT (Json Web Token)](../../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Web%20Authentication%20Frameworks/JWT%20(Json%20Web%20Token).md))
- Authentication token: A device that generates secure second-factor codes
	- Something the user owns
	- Examples: RSA SecurID and Google Authenticator
- Usage
	- The token and the server share a common secret key k
	- When the user wants to log in, the token generates a code HMAC(k, time)
		- The time is often truncated to the nearest 30 seconds for usability
		- The code is often truncated to 6 digits for usability
	- The user submits the code to the website
	- The website uses its secret key to regenerate the code and compare
- Drawback: Vulnerable to relay attacks
- Drawback: Vulnerable to online brute-force attacks
- Possible fix: rate limits

**2FA Example: Security Keys** (↗ [Dongle](../../../../../../../../🔑%20CS%20Core/Hardware%20&%20EE%20Related%20Theories/Auxiliary%20Hardware%20&%20Peripherals%20(IO%20Devices)/Input%20&%20Output%20Devices/Dongle/Dongle.md))
- Security key: A device designed to defend against phishing
	- Something the user owns
- Usage
	- When the user signs up for a website, the security key generates a new public/private key pair and gives the public key to the website
	- When the user wants to log in, the server sends a nonce to the security key
	- The security key signs the nonce and website name (from the browser) and gives the signature to the server
- Security keys prevent phishing
	- In a phishing attack, the security key generates a signature with the attacker’s website name, not the legitimate website name
		- Impervious to relay attacks!
##### Subverting 2FA : Relay Attacks
↗ [Cybersecurity Threats & Attacks](../../../../../🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)

![](../../../../../../../../../Assets/Pics/Screenshot%202024-10-22%20at%2010.37.10.png)
##### Subverting 2FA : Social Engineering



## Ref

