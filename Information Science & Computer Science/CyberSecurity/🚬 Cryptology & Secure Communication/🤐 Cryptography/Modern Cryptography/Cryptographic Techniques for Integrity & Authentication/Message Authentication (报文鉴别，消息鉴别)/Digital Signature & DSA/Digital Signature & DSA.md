# Digital Signature & DSA

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://textbook.cs161.org/crypto/signatures.html

数字签名（Digital Signature）又称**公钥数字签名**或**电子签章**,是以电子形式存储于信息中或以附件或逻辑上关联数据, 用于辨识数据签署人身份,表明签署人对数据中所包含信息的认可。

> **ISO**对数字签名的定义：
> 附加在数据单元上的一些数据，或是对数据单元所做的密码变换，这种数据或变换允许数据单元的接收者用以确认数据单元的来源和数据单元的完整性，并保护数据，防止被他人(如接收者)伪造

数字签名的方法和功能:
- 基于PKI的公钥密码技术的数字签名:
- 用一个以生物特征统计学为基础的识别标识，如手书签名和图章的电子图像的模式识别；
- 手印、声音印记或视网膜扫描的识别；
- 一个让收件人能识别发件人身份的密码代号、密码或个人识别码PIN；
- 基于量子计算机文件等。比较成熟的、使用方便具有可操作性的、在世界先进国家和普遍使用电子签名技术基于PKI的数字签名技术。

数字签名算法组成主要有2部分：签名算法和验证算法。
为保证信息传输的完整性、发送者的身份认证、防止交易中的抵赖行为发生，数字签名技术是将摘要信息用发送者的私钥加密，与原文一起传送给接收者。

最终目的是实现6种安全保障功能：
（1）必须可信（数据真实性）。（2）无法抵赖（抗抵赖性）。（3）不可伪造（数据真实性）。
（4）不能重用（数据真实性）。（5）不许变更(数据完整性)。（6）处理快、应用广。

> 🔗 Digest from [Wikipedia](https://en.wikipedia.org/wiki/Digital_signature).

A **digital signature** is a mathematical scheme for verifying the authenticity of digital messages or documents. A valid digital signature, where the prerequisites are satisfied, gives a recipient very high confidence that the message was created by a known sender ([authenticity](https://en.wikipedia.org/wiki/Authentication)), and that the message was not altered in transit ([integrity](https://en.wikipedia.org/wiki/Data_integrity)).

> 数字签名实际上是一个把数字形式的消息和某个源发实体相联系的数据串，把它附加在一个消息或完全加密的消息上，以便于消息的接收方能够鉴别消息的内容，并证明消息只能源发于所声称的发送方。

Digital signatures employ [asymmetric cryptography](https://en.wikipedia.org/wiki/Asymmetric_key_algorithm). In many instances, they provide a layer of validation and security to messages sent through a non-secure channel: Properly implemented, a digital signature gives the receiver reason to believe the message was sent by the claimed sender. Digital signatures are equivalent to traditional handwritten signatures in many respects, but properly implemented digital signatures are more difficult to forge than the handwritten type. Digital signature schemes, in the sense used here, are cryptographically based, and must be implemented properly to be effective. They can also provide [non-repudiation](https://en.wikipedia.org/wiki/Non-repudiation), meaning that the signer cannot successfully claim they did not sign a message, while also claiming their [private key](https://en.wikipedia.org/wiki/Private_key) remains secret. Further, some non-repudiation schemes offer a timestamp for the digital signature, so that even if the private key is exposed, the signature is valid. Digitally signed messages may be anything representable as a [bitstring](https://en.wikipedia.org/wiki/Bitstring): examples include electronic mail, contracts, or a message sent via some other cryptographic protocol.


### Objective & Requirements of Digital Signature

> **数字签名的作用在于保护真实性和完整性。

当通信双方发生下列情况时，必须解决其安全问题:
- 抵赖，发送方否认自己发送过某一文件;接收方否认自己曾接收到某一文件。
- 伪造，攻击者伪造一份文件，声称它来自发送方。  
- 冒充，网络上的某个用户冒充另一个用户接收或发送信息。  
- 篡改，攻击者对通信信息进行篡改。
#### 🆚 Difference between Digital Signature & Traditional Signature
一般来讲，手写签名和数字签名的主要差别在于:  
- 所签文件方面的不同。一个手写签名是所签文件的物理部分，而一个数字签名并不是所签文件的物理部分，因此所使用的数字签名算法必须设法把签名“捆绑”到所签文件上。  
- 验证方面的不同。一个手写签名是通过和一个真实的手写签名比较来验证的，这种方法很不安全，容易伪造某些人的手写签名，需要验证者有较丰富的鉴别经验。而数字签名是通过密码技术来实 现的，签名信息难以伪造，并通过一个公开的验证算法来验证，这样“任何人”都能验证一个数字签名。
- “拷贝”方面的不同。一个手写签名不易拷贝，因为一个文件的手写签名的拷贝通常容易与原文件 区别开来。而一个数字签名容易拷贝，因为一个文件的数字签名的拷贝与原文件一样，这个特点 要求阻止一个数字签名消息的重复使用和滥用。
#### 🎯Objective/ Definition/ Features of Digital Signature
一个完善的签名方案应满足以下三个条件:
- 签名者事后不能否认或抵赖自己的签名。  
- 其他任何人均不能伪造签名，也不能对接收或发送的信息进行篡改、伪造和冒充。  
- 若当事双方对签名真伪发生争执时，能够在公正的仲裁者面前通过验证签名来确定其真伪。

为了实现数字签名要求，当事双方应首先达成有关协议，数字签名协议中包括签名的产生、验证及 纠纷的解决方法等内容。一般来说，数字签名方案还应满足以下要求:
1. 签名是不可伪造的。除了合法的签名者外，任何其他人伪造其数字签名在计算上是不可行的，无论是通过用已有数字签名来构造新消息，还是对给定消息伪造一个数字签名。
2. 签名是不可抵赖的。签名者事后不能否认自己的签名。签名要求使用签名者的惟一秘密信息，以防止伪造和抵赖。
3. 签名是可信的。签名的识别和验证必须相对容易，任何人都可以验证签名的有效性。;
4. 签名是不可复制的。对一个消息的签名不能通过复制变为另一个消息的签名。签名与消息是一个不可分割的整体，如果对一个消息的签名是从别处复制而来，则任何人都可以发现签名与消息的不一致性，从而拒收此签名的消息。
5. 签名的消息是不可篡改的。经签名的消息是不能被篡改，否则任何人都可以发现签名与消息的不一致性，从而拒收此签名的消息。

数字签名作用：
- **真实性**：（身份鉴别）如果接收方B收到用A的私钥加密的消息，则可以用A的公钥解密。如果解密成功，则B可以肯定这个消息是A发来的。这是因为，如果B能够用A的公钥解密消息，则表明最初消息用A的私钥加密而且只有A知道他的私钥 。因此发送方A用私钥加密消息即是他自己的数字签名。
	- （防假冒）别人不可能假冒A，假设有攻击者C假冒A发送消息，由于C没有A的私钥，因此不能用A的私钥加密消息，接收方也就不能用A的公钥解密。因此，不能假冒A。
	- （抗抵赖）如果今后发生争议，则双方找个公证人，B可以拿出加密消息，用A的公钥解密从而证明这个消息是A发来的，即不可抵赖(即A无法否认自己发了消息，因为消息是用他的私钥加密的，只有他有这个私钥)。
- **完整性**：（防篡改）即使C在中途截获了加密消息，能够用A的公钥解密消息，然后改变消息，也没法达到任何目的，因为C没有A的私钥，无法再次用A的私钥加密改变后的消息。因此，即使C把改变的消息转发给B。B也不会误以为来自A，因为它没有用A的私钥加密。
- 现代web商务


### Laws, Regulations & Standards
早期的数字签名是利用传统的对称密码来实现的，非常复杂，安全性也不高。自公开密钥密码体制出现以后，数字签名技术日臻成熟，已走向实用化。美国国家标准与技术研究所于 1991 年 8 月就出了一种基于公开密钥密码体制的数字签名标准 DSS (Digital Signature Standard)，用于政府和商业文件签名。目前，在德国、日本、加拿大以及美国等许多国家都颁布和实施了各自的有关数字签名的法律，使得在这些国家数字签名与传统签名一样具有法律效力。我国的《电子签名法》于 2004 年8 月在十届全国人大常委会第十一次会议上获得通过，它规定了数字签名的程序和合法性，从定义、适用范围、认证规范、法律责任等诸多方面给出了法律规范。可以预见，电子签名法将为数字签名的安全性提供足够的法律和技术保障。


### Digital Signatures Applications
Digital signatures are a standard element of most **cryptographic protocol suites**, and are commonly used for software distribution, financial transactions, [contract management software](https://en.wikipedia.org/wiki/Contract_management_software), and in other cases where it is important to detect forgery or [tampering](https://en.wikipedia.org/wiki/Tampering_(crime)).

Digital signatures are often used to implement [electronic signatures](https://en.wikipedia.org/wiki/Electronic_signature), which includes any electronic data that carries the intent of a signature, but not all electronic signatures use digital signatures. Electronic signatures have legal significance in some countries, including Canada, South Africa, the United States, Algeria, Turkey, India, Brazil, Indonesia, Mexico, Saudi Arabia, Uruguay, Switzerland, Chile and the countries of the European Union.



## 🚰 Digital Signature Execution
### 1️⃣ Direct Digital Signature
直接方式是指数字签名的执行过程只有通信双方参与，并假定双方有共享的秘密密钥，或者接收一 方知道发送方的公开密钥。例如消息接收者可以获得消息发送者的公钥，发送者用其自己的私钥对整个 消息或者消息散列码进行签名来形成数字签名。

直接数字签名有一些共同的缺点:方案的有效性依赖于发送方秘密密钥的安全性。如果发送方想对 已发出的消息予以否认，就可以声称自己的秘密密钥已丢失或者被盗，因此自己的数字签名是他人伪造 的。可以采取某些行政管理手段，虽然不能避免但可在某种程度上减弱这种威胁。例如，要求每一个被 签名的消息都包含一个时间戳，标明消息被签名的日期和时间，并要求秘密密钥一旦丢失，就要立即向 管理机构报告。但这种方式的数字签名仍然存在着假冒签名的威胁，假设发送方的秘密密钥在时间 T 被窃取，攻击者可以伪造一个消息，用发送方的秘密密钥对其签名并加上 T 以前的时间戳


### 2️⃣ Arbitrated Digital Signature
具有仲裁的数字签名是在通信双方的基础上引入了第三方仲裁者参与。通常的做法是所有从发送方 到接收方的签名消息首先送到仲裁者，仲裁者将消息及其数字签名进行一系列的测试，以检查其来源和 内容，并将消息加上时间戳，与已被仲裁者验证通过的数字签名一起发送给接收方。在这种方式下，仲 裁者扮演裁判的角色，起着重要作用并应取得所有的参与者的信任。

下面给出几个需要仲裁者的数字签名方案。其中 S 表示发送方，R 表示接收方，A 是仲裁者，m 是 传送的消息。
#### 对称加密，仲裁者可以看到消息内容

#### 对称加密，仲裁者不能看到消息内容

#### 公钥加密，仲裁者不能看到消息内容



## 📐 Digital Signature Design Basics & Principles 
一个数字签名方案由两部分组成:带有陷门的数字签名算法(Signature Algorithm)和验证算法 (Verification Algorithm)。

归纳起来，一个数字签名方案的应用一般包括三个过程: 
1. 系统初始化过程:产生数字签名方案中用到的所有系统和用户参数，有公开的，也有秘密的
2. 签名产生过程:用户利用给定的签名算法和参数对消息产生签名，这种签名过程可以公开也可以不公开，但一定包含仅签名者才拥有的秘密信息(签名密钥)。
3. 签名验证过程:验证者利用公开的验证方法和参数对给定消息的签名进行验证，得出签名的有效性。

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%209.31.25%20AM.png)


### Signature Algorithm
数字签名算法是一个由密钥控制的函数。对任意一个消息m，一个密钥k，签名算法产生的一个签名信息记为 $s=sig k (m)$，算法是公开的，但密钥 k 是保密的，这样，不知道密钥 的人就不能产生正确的签名，从而不能伪造签名。


### Verification Algorithm
验证算法 $ver(m，s)$ 也是公开的，它通过 $ver(m，s)= True$ 或 $False$ 来验证签名。



## 🚸 Digital Signature Implementations
### Asymmetrical-key Based Digital Signatures
↗ [Asymmetrical-key Based Digital Signatures Algorithm (DSA)](Asymmetrical-key%20Based%20Digital%20Signatures%20Algorithm%20(DSA).md)


### Special Purpose Digital Signatures
↗ [Special Purpose Digital Signatures Algorithm (DSA)](Special%20Purpose%20Digital%20Signatures%20Algorithm%20(DSA).md)



## Ref
[数字签名是什么？-- 阮一峰的日志]: https://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html
[数字签名与HTTPS详解]: https://www.cnblogs.com/rinack/p/10743355.html
