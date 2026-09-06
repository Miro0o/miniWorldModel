# Authentication (身份鉴别)

[TOC]



## Res
### Related Topics
↗ [Message Authentication (报文鉴别，消息鉴别)](../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Message%20Authentication%20(报文鉴别，消息鉴别).md)

↗ [HTTP Authentication](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Authentication.md)

↗ [Web Authentication Technologies & Frameworks](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Web%20Authentication%20Technologies%20&%20Frameworks.md)
↗ [SSO (Single Sign-On)](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/SSO%20(Single%20Sign-On)/SSO%20(Single%20Sign-On).md)

↗ [Brocken Authentication](../../../../../Application%20Security/💉%20Web%20Security/🛟%20Web%20Application%20Security%20Risks%20(Threats,%20Attacks,%20Vulnerabilities)%20&%20OWASP/Insecure%20Design%20&%20Failures/Identication%20and%20Authentication%20Failures/Brocken%20Authentication.md)

↗ [Identity Cloud](../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Service%20(Delivery)%20Models/SaaS%20(Software%20as%20a%20Service)/Identity%20Cloud/Identity%20Cloud.md)


### Other Resources
https://github.com/a466350665/smart-sso
springboot SSO 单点登录，OAuth2实现，支持App登录，支持分布式



## Intro
### Authentication in General
> 🔗 https://en.wikipedia.org/wiki/Authentication
>
> Conceptions easy to get confused:
> authentication, authorization, access control, identification;
> authentication, verification, certification,

Authentication is relevant to multiple fields. In 🎨[art](https://en.wikipedia.org/wiki/Art), 🩻[antiques](https://en.wikipedia.org/wiki/Antique), and 🐒[anthropology](https://en.wikipedia.org/wiki/Anthropology), a common problem is verifying that a given artifact was produced by a certain person or in a certain place or period of history. In 🖥️[computer science](https://en.wikipedia.org/wiki/Computer_science), verifying a user's identity is often required to allow access to confidential data or systems.
#### Authentication in CS /Information Systems ⭐
The context here specifically applies to **authentication in Computer Science**, which is also mostly implemented as **access control**.

> 🔗 [Access Control | wikipedia](https://en.wikipedia.org/wiki/Access_control)

In the field of access control, there are three major aspects:
- Physical Security
- Computer Security
- Telecommunication Security

The property that ensures that the identity of a subject or resource is the one claimed. Authenticity applies to entities such as users, processes, systems and information.
- 鉴别就是确认实体是它所声明的
- 鉴别是最重要的安全服务之一。鉴别服务提供了关于某个实体身份的保证。（所有其它的安全服务都依赖于该服务）
- 鉴别可以对抗假冒攻击的危险

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-05%20at%209.30.57%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-01%20at%204.07.54PM.png)

身份鉴别与其它机制的关系
- 访问控制：作为访问控制服务的一种必要支持，访问控制服务的执行依赖于确知的身份（访问控制服务直接对达到机密性、完整性、可用性及合法使用目标提供支持）；
- 数据完整性：作为提供数据起源鉴别的一种可能方法（当它与数据完整性机制结合起来使用时）；
- 审计机制：作为对责任原则的一种直接支持，例如，在审计追踪过程中做记录时，提供与某一活动相联系的确知身份。

身份鉴别的协议基础:
身份鉴别协议：通信参与者为完成相互的身份鉴别或识别而采用的**规程**、**约定**、**约束和交换信息的总和**。
- 单向鉴别协议（**one way authentication protocol**）
- 双向(相互)鉴别协议（**mutual authentication protocol**）
	- 在理论上，相互鉴别可通过组合两个单向鉴别交换协议来实现。然而，这种组合需要被仔细地考察，因为有可能这样的组合易受窃听重放攻击。
	- 另外，设计协议消息数比相应的单向交换协议的消息数的两倍少得多的相互鉴别交换协议是可能的。
	- 因此，由于安全性和性能的原因，相互鉴别交换协议必须为此目的而特别地进行设计。


### Requirements for Authentication Systems
(1) 验证者正确鉴别合法申请者的概率极大化。
(2) 不具可传递性(Transferability)，验证者B不可能重用申请者A提供给他的信息来伪装申请者A，而成功地骗取其他人的验证，从而得到信任。
(3) 攻击者伪装申请者欺骗验证者成功的概率要小到可以忽略的程度，能抗击已知密文攻击，即能对抗攻击者截获到申请者和验证者的多次通信密文，然后伪装申请者欺骗验证者。
(4) 计算有效性，为实现身份鉴别所需的计算量要小。
(5) 通信有效性，为实现身份鉴别所需通信次数和数据量要小。
(6) 秘密参数能安全存储
(7) 相互鉴别(按需)。
(8) 可信第三方的实时参与(按需)。

网络环境下对身份鉴别的要求
- 唯一的身份标识（ID）
- 抗被动的威胁（窃听），口令不在网上明码传输
	- 被动攻击：窃听，不对消息做任何修改，不影响原有业务流，难以检测
- 抵抗主动的威胁，比如阻断、伪造、重放,网络上传输的鉴别信息不可重用
	- 主动攻击：阻断、伪造、重放


### Authentication Roles /Entity
身份鉴别的相关实体
(1)申请者/声称者(Claimant)，出示身份信息的实体，又称作示证者(Prover)，提出某种认证请求; 
(2)验证者V(Verifier)，检验申请者提供的认证信息的正确性和合法性，决定是否满足其认证要求;
(3)攻击者，可以窃听和伪装申请者，骗取验证者的信任。
(4)鉴别系统在必要时会有第三方，即可信赖者( 可信第三方，TP「Trusted Thired Party」)参与仲裁。

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-06%20at%208.40.24AM.png)



## 🎯 Authentication Factors
> [!TIP]
> This entry applies to authentication in general terms, including **product authentication** and **art authentication** and also, **digital authentication**. 

How someone may be authenticated fall into three categories, based on what is known as the **factors of authentication**:
- something the 1️⃣ user **knows**, (knowledge)
	- ↗ [Cryptographic Authentication (基于密码学原理)](🎫%20Cryptographic%20Authentication%20(基于密码学原理)/Cryptographic%20Authentication%20(基于密码学原理).md)
- something the 2️⃣ user **has**, (possession)
- something the 3️⃣ user **is**. (inherence)

Each **authentication factor** covers a range of elements used to authenticate or verify a person's identity before being granted access, approving a transaction request, signing a document or other work product, granting authority to others, and establishing a chain of authority.

Security research has determined that for a **positive authentication**, elements from at least two, and preferably all three, factors should be verified. The three factors (classes) and some of the elements of each factor are:
- the **knowledge factors**: Something the user **knows** (e.g., a [password](https://en.wikipedia.org/wiki/Password), [partial password](https://en.wikipedia.org/wiki/Partial_password), [passphrase](https://en.wikipedia.org/wiki/Pass_phrase), [personal identification number](https://en.wikipedia.org/wiki/Personal_identification_number) (PIN), [challenge–response](https://en.wikipedia.org/wiki/Challenge–response) (the user must answer a question or pattern), [security question](https://en.wikipedia.org/wiki/Security_question)).
- the **ownership factors**: Something the user **has** (e.g., wristband, [ID card](https://en.wikipedia.org/wiki/ID_card), [security token](https://en.wikipedia.org/wiki/Security_token), [implanted device](https://en.wikipedia.org/wiki/Microchip_implant_(human)), [cell phone](https://en.wikipedia.org/wiki/Cell_phone) with a built-in [hardware token](https://en.wikipedia.org/wiki/Hardware_token), [software token](https://en.wikipedia.org/wiki/Software_token), or [cell phone](https://en.wikipedia.org/wiki/Cell_phone) holding a [software token](https://en.wikipedia.org/wiki/Software_token)).
- the **inherence factors**: Something the user **is or does** (e.g., [fingerprint](https://en.wikipedia.org/wiki/Fingerprint), [retinal](https://en.wikipedia.org/wiki/Retina) pattern, [DNA](https://en.wikipedia.org/wiki/DNA) sequence (there are assorted definitions of what is sufficient), [signature](https://en.wikipedia.org/wiki/Signature), face, voice, unique bio-electric signals, or other [biometric](https://en.wikipedia.org/wiki/Biometric) identifiers).


### Single-factor Authentication
As the weakest level of authentication, only a single component from one of the three categories of factors is used to authenticate an individual's identity. The use of only one factor does not offer much protection from misuse or malicious intrusion. This type of authentication is not recommended for financial or personally relevant transactions that warrant a higher level of security


### Multi-factor Authentication
> 🔗 [Multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)

Multi-factor authentication involves two or more authentication factors (*something you know*, *something you have*, or *something you are*). Two-factor authentication is a special case of multi-factor authentication involving exactly two factors
#### 2FA (2-Factors-Authentication)
**2FA Example: Authentication Tokens** (↗ [JWT (Json Web Token)](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Token%20Based%20Authentication/JWT%20(Json%20Web%20Token).md))
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

**2FA Example: Security Keys** (↗ [Dongle](../../../../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Input%20&%20Output%20Devices/Dongle/Dongle.md))
- Security key: A device designed to defend against phishing
	- Something the user owns
- Usage
	- When the user signs up for a website, the security key generates a new public/private key pair and gives the public key to the website
	- When the user wants to log in, the server sends a nonce to the security key
	- The security key signs the nonce and website name (from the browser) and gives the signature to the server
- Security keys prevent phishing
	- In a phishing attack, the security key generates a signature with the attacker’s website name, not the legitimate website name
		- Impervious to relay attacks!
##### Subverting 2FA : Replay Attacks
↗ [Cryptographic Attacks & Rubber-Hose Cryptanalysis](../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤮%20Cryptanalysis/Cryptographic%20Attacks%20&%20Rubber-Hose%20Cryptanalysis.md)

![](../../../../../../../../../Assets/Pics/Screenshot%202024-10-22%20at%2010.37.10.png)
##### Subverting 2FA : Social Engineering
↗ [Social Engineering & Physical Security](../../../../🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Social%20Engineering%20&%20Physical%20Security.md)



## 🎯 Authentication Taxonomy
### Authentication Taxonomy Overview
广义上来说，鉴别广泛应用在不限于网络空间安全领域的各个领域，比如艺术品真赝的鉴别，字迹的鉴别，等等。从这个广义的角度来说，按照鉴别对象分类标准分类，鉴别可以分为如下结构：
1. 基于鉴别对象
	1. 面对人的鉴别
	2. 面对机器的鉴别
	3. 面对物品的鉴别
2. 基于鉴别方法
	1. 基于密码学原理 (基于你所知道的)
		1. 基于对称密码算法（不同于对称鉴别）
		2. 基于公钥密码算法
		3. 基于密码校验函数算法
	2. 基于非密码学原理
		1.  基于你所知道的（**What you know** ）
			1. 知识、口令、密码
		2. 基于你所拥有的（**What you have** ）
			1. 身份证、信用卡、钥匙、智能卡、令牌等
		3. 基于你的个人特征（**What you are**）
			1. 指纹，笔迹，声音，手型，脸型，视网膜，虹膜
	3. ZKP（不依赖于上述任何一种identity）

---
身份鉴别可以是**单向**的也可以是**双向**的。
- 所谓**单向鉴别**是指通信双方中只有一方鉴别另一方，而双向鉴别是指通信双方相互鉴别。在单向身份鉴别中，一个实体充当声称者;另一个实体充当验证者。
- 对于**双向身份鉴别**，每个实体同时充当声称者和验证者。双向鉴别可在两个方向上使用相同或不同的鉴别机制。
- **第三方鉴别**：由可信第三方来确认身份

依据鉴别信息是否共享进行分类，鉴别可分为**对称鉴别**和**非对称鉴别**。
- **对称鉴别**方法的例子有:口令和使用对称密码技术加密的质询。
- **非对称鉴别**方法的例子有:使用非对称密码技术和在不暴露任何信息情况下对信息所有者的信息进行验证的技术。

依据鉴别过程是否采用密码技术，鉴别分为使用密码技术的鉴别和使用非密码技术的鉴别。
- **使用密码技术的鉴别**: 对称的、非对称的或混合的密码技术，可用于提供鉴别信息的完整性保护和鉴别信息的机密性保护。使用密码技术的身份鉴别技术实例包括使用加密来保护传输期间的口令。
- **使用非密码技术的鉴别**: 非密码技术的身份鉴别技术包括使用口令或质询-响应表。
	- 基于你所知道的（**What you know** ）
		- 知识、口令、密码
	- 基于你所拥有的（**What you have** ）
		- 身份证、信用卡、钥匙、智能卡、令牌等
	- 基于你的（生物）特征（**What you are**）
		- 指纹，笔迹，声音，手型，脸型，视网膜，虹膜
	- 双因素、多因素认证
- **零知识证明协议**

本地鉴别和远程鉴别
- **本地鉴别**：实体在本地环境的初始化鉴别
- **远程鉴别**：连接远程设备的实体鉴别

Peer Entity Authentication (对等实体鉴别)
- Used in association with a logical connection to provide confidence in the identity of the entities connected.
Data Origin Authentication (数据原发鉴别)
- In a connectionless transfer, provides assurance that the source of received data is as claimed.


### 1️⃣ 按保护等级分类
#### 0级鉴别（无保护）
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.04.51PM.png)
#### 1级鉴别（抗泄露保护）
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.05.07PM.png)
#### 2级鉴别（抗泄露和对不同验证者重放的保护）
↗ [Cryptographic Attacks & Rubber-Hose Cryptanalysis](../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤮%20Cryptanalysis/Cryptographic%20Attacks%20&%20Rubber-Hose%20Cryptanalysis.md) "replay attacks"

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.05.21PM.png)
#### 3级鉴别（抗泄露和对同一验证者重放的保护）
↗ [Cryptographic Attacks & Rubber-Hose Cryptanalysis](../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤮%20Cryptanalysis/Cryptographic%20Attacks%20&%20Rubber-Hose%20Cryptanalysis.md) "replay attacks"

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.05.34PM.png)
#### 4级鉴别（抗泄露和对相同/不同验证者重放的保护）
↗ [Cryptographic Attacks & Rubber-Hose Cryptanalysis](../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤮%20Cryptanalysis/Cryptographic%20Attacks%20&%20Rubber-Hose%20Cryptanalysis.md) "replay attacks"
##### 惟一数机制
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.06.32PM.png)
##### 质询机制
↗ [Password Based Authentication (基于口令) /Challenge /Response (质询/响应 ｜ 挑战/应答)](Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md#Challenge%20/Response%20(质询/响应%20｜%20挑战/应答))

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.06.44PM.png)
##### 专用加密质询机制
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.06.57PM.png)
##### 计算响应机制
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.07.09PM.png)


### 2️⃣ 按机制的配置分类
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.46.36PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.46.48PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.46.55PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.47.04PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.47.13PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.47.21PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.47.29PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.47.44PM.png)

#### 涉及可信第三方的模型
##### 阶段模型
##### 使用初始化信息知识的模型
##### 介入鉴别的可信第三方之间的关系
###### 联机可信第三方
###### 脱机可信第三方
#### 不涉及可信第三方的模型


### 3️⃣ 按鉴别对象分类
#### 🎯 Object-based Authentication (Peer Entity Authentication, 对等实体鉴别)
对等实体鉴别
- **定义**：确认连接中对方实体的真实身份。
- **特点**：用于通信双方建立连接或通信过程中，证明对方确实是声称的那个活动实体（如用户、终端、服务器）。
- **目的**：防止假冒和重放攻击，确保通信一方正在和正确的对象交流。
- **常见技术**：基于密码学的挑战-应答协议、数字签名、Kerberos协议等。


对等实体鉴别按照鉴别对象分类：
1. 人（Human/User Authentication）
- **定义**：对人类用户（自然人）的身份进行鉴别。
- **核心特点**：高度依赖交互、记忆力或生物特征，存在忘记密码、凭证被盗等风险。
- **常见凭证**：
    - 口令/密码（知识）
    - 短信验证码/动态令牌（拥有）
    - 指纹/人脸/虹膜（生物特征）
- **代表技术**：多因素身份验证（MFA）、单点登录（SSO）、FIDO（快连）标准。

2. 机（Machine/Device Authentication）
- **定义**：对标准的计算设备（如服务器、PC、虚拟机、容器或手机终端）的身份进行鉴别。
- **核心特点**：具备较强的计算和存储能力，可以运行复杂的加密算法，鉴别过程通常是自动化的。
- **常见凭证**：
    - MAC地址 / IP地址（较弱，易伪造）
    - 数字证书（X.509格式，最常用）
    - 机器指纹（基于硬件序列号、系统配置等生成的哈希）
- **代表技术**：TLS双向认证、设备指纹技术、安全外壳协议（SSH）密钥对验证。

3. 物（Thing/Object Authentication）
- **定义**：对物联网终端、传感器、RFID标签、摄像头、无人机等轻量级物件的身份进行鉴别。
- **核心特点**：通常属于**受限设备（Constrained Devices）**，计算能力弱、内存小、功耗低，无法运行复杂的公钥密码学。
	- 考虑到资源有限的“物”通常所传递的数据量也很有限，因此，对物的认证其实是对数据来源的认证，即一个数据无论经过多少转发，其原始来源应该可以得到鉴别。
- **常见凭证**：
    - RFID / NFC 唯一标识符
    - 轻量级共享密钥
    - 物理不可克隆函数（PUF，硬件级特征）
- **代表技术**：轻量级认证协议（如基于ACE-OAuth的IoT鉴别）、对称加密挑战应答、固件签名验证。
#### 🎯 Message Authentication (Data Origin Authentication, 数据原发鉴别)
> [!links]
> ↗ [Message Authentication (报文鉴别，消息鉴别)](../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Message%20Authentication%20(报文鉴别，消息鉴别).md)

数据源发鉴别
- **定义**：确认接收到的特定数据单元确实来自所声称的发送源。
- **特点**：不关心发送者当前是否在线，只关心某条具体的数据、消息或文件是不是由该源头最初发出的。
- **目的**：提供数据的来源证明，防止数据来源被伪造，通常与数据完整性验证结合在一起。
- **常见技术**：带密钥的hash函数（HMAC）、附加了发送方数字签名的报文等。


### 4️⃣ 按鉴别技术分类
#### Non-Cryptography Authentication
- 基于口令的身份鉴别
- 基于一次性口令的身份鉴别
- 基于质询-应答的身份鉴别
- 基于地址的身份鉴别
- 基于生物特征的身份鉴别
- 基于个人令牌的身份鉴别

↗ [Biometrics Authentication (基于生物特征信息)](Biometrics%20Authentication%20(基于生物特征信息)/Biometrics%20Authentication%20(基于生物特征信息).md)
↗ [Physical Evidence-Based Authentication (基于实物凭证)](Physical%20Evidence-Based%20Authentication%20(基于实物凭证)/Physical%20Evidence-Based%20Authentication%20(基于实物凭证).md)
↗ [Password Based Authentication (基于口令)](Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md)
↗ [Address Based Authentication](Address%20Based%20Authentication.md)
#### Cryptography-based Authentication
↗ [Cryptographic Authentication (基于密码学原理)](🎫%20Cryptographic%20Authentication%20(基于密码学原理)/Cryptographic%20Authentication%20(基于密码学原理).md)
#### Zero-Knowledge-Proof (ZKP)
↗ [Zero-Knowledge Proof (ZKP)](../../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/Security%20Protocols%20&%20Cryptographic%20Verification/🍭%20Zero-Knowledge%20Proof%20(ZKP)/Zero-Knowledge%20Proof%20(ZKP).md)



## Authentication Applications
> [!links]
> ↗ [Cryptology & Secure Communication](../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md) "🌅 Secure Communication & Cryptographic Protocols"


### Network-Based Authentication
↗ [Web Access Control](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Access%20Control.md)
↗ [Web Authentication Technologies & Frameworks](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Web%20Authentication%20Technologies%20&%20Frameworks.md)
- ↗ [Web Authentication Technologies & Frameworks](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Web%20Authentication%20Technologies%20&%20Frameworks.md)
	- ↗ [JWT (Json Web Token)](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Token%20Based%20Authentication/JWT%20(Json%20Web%20Token).md)
	- ↗ [x-auth-token](../../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Token%20Based%20Authentication/x-auth-token.md)
	- ↗ [SAML (Security Assertion Markup Language)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/DSL%20(Domain%20Specific%20Languages)/Security%20DSL/SAML%20(Security%20Assertion%20Markup%20Language).md)
- ↗ [HTTP Authentication](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Authentication.md)
- ↗ [HTTP Access Control (CORS)](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Access%20Control%20(CORS).md)

↗ [Networking Access Control](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/Networking%20Access%20Control/Networking%20Access%20Control.md)
↗ [Network Managements & Standards](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/Network%20Managements%20&%20Standards.md)
↗ [NAC (Network Access Control)](../../../🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/NAC%20(Network%20Access%20Control).md)

↗ [Application Layer Security Protocols](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Application%20Layer%20Security%20Protocols.md)
- ↗ [RADIUS (Remote Authentication Dial-In User Service)](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Authentication%20Protocols/RADIUS%20(Remote%20Authentication%20Dial-In%20User%20Service)/RADIUS%20(Remote%20Authentication%20Dial-In%20User%20Service).md)
- ↗ [Kerberos](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Authentication%20Protocols/Kerberos/Kerberos.md)

↗ [Physical (& Link) Layer Security Protocols](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/Physical%20(&%20Link)%20Layer%20Security%20Protocols.md)
- ↗ [IEEE 802.11 Security Standards & WPA](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.11%20Security%20Standards%20&%20WPA/IEEE%20802.11%20Security%20Standards%20&%20WPA.md)
- ↗ [IEEE 802.1x](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.1x/IEEE%20802.1x.md)
- ↗ [EAP (Extensible Authentication Protocol)](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Security%20Protocols/EAP%20(Extensible%20Authentication%20Protocol)/EAP%20(Extensible%20Authentication%20Protocol).md)
- ↗ [WAPI (WLAN Authentication and Privacy Infrastructure)](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Security%20Protocols/WAPI%20(WLAN%20Authentication%20and%20Privacy%20Infrastructure)/WAPI%20(WLAN%20Authentication%20and%20Privacy%20Infrastructure).md)
- ↗ [MACsec (Media Access Control Security)](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Security%20Protocols/MACsec%20(Media%20Access%20Control%20Security)/MACsec%20(Media%20Access%20Control%20Security).md)

↗ [LDAP (Lightweight Directory Access Protocol)](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Messaging%20&%20Remote%20Accessing/LDAP%20(Lightweight%20Directory%20Access%20Protocol)/LDAP%20(Lightweight%20Directory%20Access%20Protocol).md)
↗ [SSH (Secure SHell)](../../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/SSH%20(Secure%20SHell).md)


### Host-Based Authentication



## 🩸🗡️ Threats To Authentication Systems
> [!links]
> ↗ [Cybersecurity Threats & Attacks](../../../../🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)
> ↗ [Core Cryptographic Properties Threats & Countermeasures](../../../../🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Core%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)
> ↗ [Other Cryptographic Properties Threats & Countermeasures](../../../../🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Other%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)

鉴别交换协议的核心问题有两个:
- 保密性
	- 为了防止伪装和防止暴露会话密钥，基本鉴别与会话密码信息必须以保密形式通信。这就要求预先存在保密或公开密钥供实现加密使用。
- 时效性
	- 涉及防止消息重放攻击。

保证消息实时性
1、时间戳:A接受一个新消息仅当该消息包含一个时间戳，该时间戳在A看来，是足够接近A所知道的当前 时间;这种方法要求不同参与者之间的时钟需要同步。

> 局限性： 由于变化的和不可预见的网络延迟的本性，不能期望分布式时钟保持精确的同步。因此，任何基于时间戳的过程必须采用时间窗的方式来处理:一方面时间窗应足够大以包容网络延迟， 另一方面时间窗应足够小以最大限度地减小遭受攻击 的机会。安全的时间服务器用以实现时钟同步可能是 最好的方法。

2、质询/响应方式(Challenge/Response):A期望从B 获得一个新消息，首先发给B一个随机质询值 (Challenge)，并要求后续从B收到的消息(Response) 包含正确的这个质询值(或其函数)。

>局限性： 不适应非连接性的应用，因为它要求在传输开始之前先有握手的额外销，这就抵消了无连接通信的主要特点。

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-05%20at%209.34.52%20PM.png)



## Ref
[网络安全之身份认证（转载） - 纹身的大熊猫的文章 - 知乎]: https://zhuanlan.zhihu.com/p/84993949

[信息系统访问控制的层次模型]: 中国科学院 计算机网络信息中心，北京 100190;2. 中国科学院研究生院，北京 100049) "吴开超，沈志宏，周园春，阎保平"

[secure authentication]: https://www.securecoding.com/blog/secure-authentication/
[自己动手做一个简单的 Telegram 入群验证 Bot |]: https://tstrs.me/1490.html
[用于识别、认证和验证的生物识别认证系统]: https://www.boonedam.com/zh-cn/accessories-and-additions/biometric-authentication-systems
[微信官方文档 -- 生物认证]: https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/bio-auth.html

- 小程序通过 [SOTER](https://github.com/Tencent/soter) 提供生物认证方式。
- 目前暂时只支持指纹识别认证。设备支持的生物认证方式可使用 [wx.checkIsSupportSoterAuthentication](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html) 查询

[22. Anonymous Authentication（匿名认证）]: https://www.cnblogs.com/jrkl/p/13513429.html

[SAML Explained in Plain English]: https://www.onelogin.com/learn/saml
