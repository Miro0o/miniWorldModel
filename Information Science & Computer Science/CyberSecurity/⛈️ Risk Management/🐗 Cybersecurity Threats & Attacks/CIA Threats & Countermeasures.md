# CIA Threats & Countermeasures

[TOC]



## Res
### Related Topics
↗ [Cybersecurity Basics & InfoSec /🛡️ InfoSec Principles & Objectives](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/Cybersecurity%20Basics%20&%20InfoSec.md#🛡️%20InfoSec%20Principles%20&%20Objectives)
↗ [Cybersecurity Threats & Attacks](Cybersecurity%20Threats%20&%20Attacks.md)

↗ [Risk Countermeasures & Security Control](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Risk%20Countermeasures%20&%20Security%20Control.md)
↗ [Comprehensive Defense Systems & Security Products](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Comprehensive%20Defense%20Systems%20&%20Security%20Products.md)



## Intro



## 1️⃣ Data Confidentiality
### ⚔️ Data Confidentiality Threat Model
> 🔗 https://textbook.cs161.org/crypto/intro.html#58-definitions-kerckhoffs-principle

|                             |                                                                 |                                                               |     |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------- | --- |
|                             | Can Eve trick Alice into encrypting messages of Eve’s choosing? | Can Eve trick Bob into decrypting messages of Eve’s choosing? |     |
| Ciphertext-only             | No                                                              | No                                                            |     |
| Chosen-plaintext            | Yes                                                             | No                                                            |     |
| Chosen-ciphertext           | No                                                              | Yes                                                           |     |
| Chosen plaintext-ciphertext | Yes                                                             | Yes                                                           |     |

When analyzing the confidentiality of an encryption scheme, there are several possibilities about how much access an eavesdropping attacker Eve has to the insecure channel:
1. Eve has managed to intercept a single encrypted message and wishes to recover the plaintext (the original message). This is known as a **ciphertext-only attack**.
2. Eve has intercepted an encrypted message and also already has some partial information about the plaintext, which helps with deducing the nature of the encryption. This case is a **known plaintext attack**. In this case Eve’s knowledge of the plaintext is partial, but often we instead consider complete knowledge of one instance of plaintext.
3. Eve can capture an encrypted message from Alice to Bob and re-send the encrypted message to Bob again. This is known as a **replay attack**. For example, Eve captures the encryption of the message “Hey Bob’s Automatic Payment System: pay Eve `$$100$`” and sends it repeatedly to Bob so Eve gets paid multiple times. Eve might not know the decryption of the message, but she can still send the encryption repeatedly to carry out the attack.
4. Eve can trick Alice to encrypt arbitrary messages of Eve’s choice, for which Eve can then observe the resulting ciphertexts. (This might happen if Eve has access to the encryption system, or can generate external events that will lead Alice to sending predictable messages in response.) At some other point in time, Alice encrypts a message that is unknown to Eve; Eve intercepts the encryption of Alice’s message and aims to recover the message given what Eve has observed about previous encryptions. This case is known as a **chosen-plaintext attack (CPA)**.
5. Eve can trick Bob into decrypting some ciphertexts. Eve would like to use this to learn the decryption of some other ciphertext (different from the ciphertexts Eve tricked Bob into decrypting). This case is known as a **chosen-ciphertext attack**.
6. A combination of the previous two cases: Eve can trick Alice into encrypting some messages of Eve’s choosing, and can trick Bob into decrypting some ciphertexts of Eve’s choosing. Eve would like to learn the decryption of some other ciphertext that was sent by Alice. (To avoid making this case trivial, Eve is not allowed to trick Bob into decrypting the ciphertext sent by Alice.) This case is known as a **chosen-plaintext/ciphertext attack**, and is the most serious threat model.

Today, we usually insist that our encryption algorithms provide security against **chosen-plaintext/ciphertext attacks**, both because those attacks are practical in some settings, and because it is in fact feasible to provide good security even against this very powerful attack model.

However, for simplicity, this class will focus primarily on security against chosen-plaintext attacks.
#### IND-CPA Security & Chosen-Plaintext Attack
> 🔗 https://textbook.cs161.org/crypto/symmetric.html#61-ind-cpa-security

A better definition of confidentiality: The cipher-text should not give the attacker any additional information about the plaintext, beyond what the attacker already knew.

We make this precise with an experiment/security game, the IND-CPA game:
1. The adversary Eve chooses two different messages, $M_0$ and $M_1$, and sends both messages to Alice.
2. Alice flips a fair coin. If the coin is heads, she encrypts $M_0$. If the coin is tails, she encrypts $M_1$. Formally, Alice chooses a bit $b \in \{0,1\}$ uniformly at random, and then encrypts $Mb$. Alice sends the encrypted message $Enc(K,M_b)$ back to Eve.
3. Eve is now allowed to ask Alice for encryptions of messages of Eve’s choosing. Eve can send a plaintext message to Alice, and Alice will always send back the encryption of the message with the secret key. Eve is allowed to repeat this as many times as she wants. Intuitively, this step is allowing Eve to perform a chosen-plaintext attack in an attempt to learn something about which message was sent.
4. After Eve is finished asking for encryptions, she must guess whether the encrypted message from step 2 is the encryption of $M_0$ or $M_1$.
![](../../../../Assets/Pics/Screenshot%202024-09-17%20at%2011.01.43.png)



## 2️⃣ Data Integrity (and Authenticity)
↗ [Authentication (身份鉴别)](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md)
↗ [Identification (身份证明)](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Identification%20(身份证明)/Identification%20(身份证明).md)
↗ [Data Security](../../Data%20Security/Data%20Security.md)

> 数据完整性是防止非法实体对交换数据的修改、插入、替换和删除，或者如果被修改、插入、替换和删除时可以被检测出来。数据完整性可以通过消息认证模式来保证。


### ⚔️ Data Integrity (Authenticity) Threat Model
#### EU-CPA Existential Unforgeability under Chosen-Plaintext Attack
![](../../../../Assets/Pics/Screenshot%202024-09-26%20at%2014.05.56.png)

#### Impersonation Attacks
#### MITM (Man-In-The-Middle) Attacks



### 🛡️ Data Integrity Primitives (完整性保护基本手段)
#### 通过密码学提供完整性
基于对称密码技术的完整性机制
- 对隐藏数据的相同秘密密钥的理解，有效获得数据的完整性保护
- 这种机制相当于密封

基于非对称密码技术的完整性机制
- 对隐藏数据的公钥对应的私钥的理解，获得数据完整性保护
- 这种机制相当于密封
- 也可以反过来通过数字签名的方式进行保证
##### 1️⃣ 通过密封提供完整性
1. 为待保护数据添加一个密码检查值提供完整性。
2. 使用相同的秘密密钥保护和证实数据的完整性。
3. 要么所有的潜在证实者事先知道秘密密钥，要么有访问秘密密钥的方法

对修改的检测方法:
1. 通过密码检验值实现屏蔽未受完整性保护的数据
2. 通过使用数据、密码检验值、秘密密钥，判断数据与密封是否一致来获得。
3. 一旦数据被证实，通过去除密码校验值实现去屏蔽
##### 2️⃣ 通过数字签名提供完整性
数字签名是通过一个私有密钥和一个非对称密码算法进行计算的。被屏蔽数据（数据加上附加的数字签名）可用相应的公钥进行证实。

对修改的检测方法
- 为受完整性保护的数据附加一个密码检查值，达到数s据屏蔽。
- 通过使用收到数据的数字签名以及证实数字签名的算法和公钥完成证实。
- 一旦数据被证实，通过去除密码检查值实现去屏蔽
##### 3️⃣ 通过冗余数据加密提供完整性
通过加密可以支持冗余数据的完整性，包括出错检测代码和数字指纹的数据是冗余的，完整性通过加密得到保护。

对修改的检测方法
- 对冗余数据加密实现屏蔽
- 通过解密被屏蔽数据，以及判断它们是否满足原数据应满足的任何不变性，从而获得证实。
- 通过解密被加密数据实现去屏蔽。
#### 通过上下文提供完整性
通过在一个或多个预先达成共识的上下文条件下，存储或传送数据的机制得到支持。
##### 1️⃣ 数据重复
基于数据在空间或时间上的重复出现。通常假定攻击者不能同时损毁超过某个有限数目的复制件，一旦任何数据检测到攻击，数据都可从原拷贝进行重构。

提供完整性的方式
- 通过依时间顺序或在不同场所提供同一个数据的多份拷贝，达到屏蔽数据的目的。
- 通过收集每个给定时间或地点的拷贝，作出比较以达到证实目的。
- 通过选择某个预定的最小度量值作
##### 2️⃣ 预共识上下文
提供完整性保护数据的删除检测服务，常与其它完整性机制结合使用。
- 在给定偏差范围内的特定时间和/或地点上提供数据，达到屏蔽的目的；
- 在给定的时间和或地点上预期得到数据实现证实目的；如果预期数据不存在，断定数据发生了完整性损坏。
#### 通过探测和确认提供完整性
- 使用一种总是执行正馈等幂运算的完整性探测。
- 正馈等幂：多次循环执行的运算都产生惟一的结果，这种运算被认为是等幂的。
- 这种机制不适用于数据存储。
- 通过重复相同的动作，直到完整性策略作出否认指示，或者收到一个肯定的确认，从而实现屏蔽。
- 对每份被屏蔽数据都实行证实，成功的证实会向实施屏蔽操作的实体发出肯定的确认信号。
#### 通过阻止提供完整性
- 通过阻止对数据存储或传输媒体的物理访问。
- 通过访问控制提供。


### 🛡️ Data Integrity Mechanisms (完整性保护具体机制)
#### Data Integrity Mechanisms' Matrixs (数据完整性特性机制的评价标准)
- 完整性验证的安全性
	- 消息完整性安全要求对接收的数据的任何改动都能被发现，对于给定的消息m1和其验证码H（m1），找到满足m2≠m1，且H（m2）＝H（m1）的m2在计算上不可行
- 完整性验证中加密的安全
	- 数据完整性验证的一些机制需要对其中的内容进行加密，例如摘要
- 数据完整性验证的信息有效率
	- 数据完整性验证的有效率是指原信息部分长度与合并后总信息（包括原消息和验证码）的长度之比。
- 完整性验证算法的性能
	- 数据完整性验证包括发送方计算验证码，进行加密，接收方重新计算验证码，进行解密，比较等。
#### 👉 基于数据校验思想的数据完整性验证机制
![](../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.50.20PM.png)
能检测出数据发生错误的机制并不一定能对数据完整性检测有效
- 例如，如果攻击者修改原数据的同时也根据国际标准的CRC多项式重新计算CRC，并且替换原来的CRC，这时候虽然发送的数据和接收的数据已经不一致了，但由于原消息和CRC是匹配的，因此用CRC不能检测出来
解决方法：对要发送的数据进行加密
#### 👉 基于消息摘要的完整性验证机制
步骤**1**：**A**根据要发送的消息**M0**，利用**MD5**、**SHA-1**等哈希函数**H**（双方事先商定好的）产生消息摘要**MD0**；
步骤**2**：**A**通过网络将**M0**和**MD0**一起发送到**B**；
步骤**3**：**B**收到的信息设为**M1**，摘要设为**MD1**，**B**重新用**A**使用的产生摘要的函数**H**计算消息摘要，设为**MD2**
步骤**4**：**B**比较**MD2**和**MD1**是否相同，如果相等，**B**断定数据是完整的，如果不相等，则**B**断定数据遭到篡改。

- 这个机制的优点是双方不需要共享密钥；
- 接收者确信信息未被更改过；
- ﻿﻿信息的有效率高。
- ﻿﻿消息摘要算法通常产生长度为128位或160位的消息摘要，即任何两个消息摘要相同的概率分别为2128或2160分之一，显然，这在实际上冲突的可能性极小。
- ﻿﻿如果攻击者同时修改信息及其摘要，接收者就无法判断其完整性，为此要将摘要与加密结合。这样网络截获者不能同时修改消息M和摘要D。
#### 👉 基于消息认证码（MAC）的数据完整性验证机制
步骤**1**：**A**根据要发送的消息**M0**，利用密钥**K**通过**MAC**产生函数**C**产生**MAC0=Ck(M0)**；
步骤**2**：**A**将**M0**和**MAC0**合在一起，并通过网络发送到**B**；
步骤**3**：**B**收到信息后，并将二者分开，设为**M1**和**MAC1**；
步骤**4**：**B**利用密钥**K**对收到的信息**M1**用与**A**相同的**MAC**产生函数**C**重新计算**M1**的验证码，设为**MAC2**，
步骤**5**：**B**比较**MAC2**和**MAC1**是否相同，如果相等，**B**断定数据是完整的，如果不相等，则**B**断定数据遭到篡改。

- 这种机制使接收者确信信息未被更改过，攻击者如果修改了消息**M0**，而不修改**MAC**，接收者重新计算得到的**MAC**将不同于接收到的**MAC**。
- 由于**MAC**的生成使用了双方共享的秘密密钥，攻击者不能够更改**MAC**来匹配修改过的消息。
- 这种机制也可以防止消息被整体替换，因为攻击者替换了消息，并计算自己的**MAC**，由于不知道**K**，无法再次生成正确的**MAC**。
- 没有保密作用
#### 👉 基于RSA的数字签名的完整性验证机制
步骤**1**：A用自己的私钥加密消息M，用**EA**私(M）表示；
步骤**2**：把加密的消息发送给B；
步骤**3**：B接收到加密的消息后用**A**的公钥解密，用公式DA公(EA私(M))表示；
步骤**4**：B根据解密后的明文是否有意义来进行消息完整性验证，如果有意义，**B**认为数据是完整的，如果是无意义的乱码，则**B**认为的数据遭到篡改

评价
- 在本机制中，参照物的依据就是解密后的信息是否有意义。
- 这个机制使用非对称密钥加密机制加密要发送的信息来验证数据的完整性，解决了密钥的分发问题。
- 由于A的公钥是公开的，任何人都可以解密A加密的消息，因此该机制不具有保密作用。
- 在完整性验证方面，即使攻击者C在中途截获了加密消息，能够用A的公钥解密消息，然后篡改消息，也没法达到任何目的

这个机制有三个主要缺点：
- 第一个缺点是用非对称加密体制加密整个消息，加密的速度慢；
- 第二个缺点是发送的明文必须是有意义的明文，在某些场合下，有意义的明文并不好判断，例如二进制文件，因此很难确定解密后的消息就是明文本身，为此对于二进制等文件还是需要通过增加额外验证码来进行完整性验证；
- 第三个缺点，没有保密作用。
#### 👉 基于非对称密钥和对称密钥结合的完整性验证机制
步骤**1**：**A**计算信息**M0**的错误检测码（**FCS0**）；
步骤**2**：**A**选定一次性对称密钥**K1**，用完即放弃，防止重放攻击；
步骤**3**：**A**取一次性对称密钥(K1)**，用**B**的公钥**(K2)**加密**K1，结果设为**Bk2(K1)**。这个过程称为对称密钥的密钥包装(key wrapping)**；
步骤**4 A**将**M0**和**FCS0合在一起，并使用对称密钥(K1)加密合并后的数据，结果设为：Ak1(M0+FCS0)，并通过网络将Bk2(K1)和Ak1(M0+FCS0)发送给B；
步骤**5**：**B**用**A**所用的非对称密钥算法和自己的私钥(K3)解密Bk2(K1)，这个过程的输出是对称密钥**K1**；
步骤**6**：**B**用**A**所用的对称密钥算法和对称密钥**K1**解密**Ak1**（**M0+FCS0**），并将二者分开，设为**M1**和**FCS1**；
步骤**7**：**B**用与原始信息相同的错误检测码计算方法重新计算信息**M1**的的错误检测码**FCS2**；
步骤**8**：**B**将计算的的错误检测码**FCS2**同分离的错误检测码**FCS1**进行对比，如果相等，**B**断定信息是完整的，如果不相等，则**B**断定信息遭到篡改。

评价
- 这个机制防止了攻击者替换和篡改信息的攻击，解决了密钥的发布问题，A随机选定一次性对称密钥K1，用完即放弃，防止了重放攻击。
- 缺点：是需要计算错误检测码，可以简化验证的步骤，不用计算错误检测码，一个最直接的方法是直接用加密方法实现数据完整性验证
#### 👉 基于错误检测码与对称密钥加密的完整性验证机制
![](../../../../Assets/Pics/Screenshot%202023-11-09%20at%203.52.52PM.png)

- 这个机制防止了攻击者同时把原信息和错误检测码替换并且保持它们之间的正确匹配关系的攻击，因为密钥只有双方知道，攻击者同时替换后没办法用双方的密钥K再重新加密。
- 这个机制的前提是需要双方共享对称密钥K，存在密钥的发布问题和缺点。如果改为非对称加密体制的话速度又太慢，因此要将二者结合。



## 3️⃣ Data Availability
### ⚔️ Data Availability Threat Model



## 4️⃣ Non-Repudiation
抗抵赖机制定义：抗抵赖机制旨在生成、收集、维护有关已声明的事件或动作的证据，并使该证据可得并且确认该证据，以此来解决关于此事件或动作发生或未发生而引起的争议。

抗抵赖机制的意义：抗抵赖机制是数据完整性的衍生。数据完整性保证发送方和接收方的网络传送数据不被第三方篡改和替换，但不能保证**双方自身**的欺骗和抵赖。
- 在双方自身的欺骗中，双方的抗抵赖性（又称不可否认性（Non-repudiation））是网络安全的一个重要安全特性，特别在当前电子商务应用中更是显得格外重要。

常见的抵赖行为 (行为+内容)
- **B**收到了**A**发来的信息**M0**，但却说收到的是**M1**。(内容)
- **A**向**B**发了信息**M**，但其不承认其曾经发过；(行为)
- **A**向**B**发了信息**M0**，但其却说发了**M1**；(内容)
- **B**收到了**A**发来的信息**M**，但却不承认收到了；(行为)

> 抗抵赖机制旨在生成、收集、维护有关已声明的事件或动作的证据，并使该证据可得并且确认该证据，以此来解决关于此事件或动作发生或未发生而引起的争议。


### ⚔️ Non-Repudiation Threat Model
抗抵赖面临的威胁
- 密钥泄露
	- 实体生成密钥泄露
	- **TTP**生成秘钥的泄露
	- 替换实体验证密钥
	- 替换**TTP**验证密钥
- 泄露证据
	- 证据的未授权修改和破坏
	- 破坏证据或使之无效
- 伪造证据
	- 外部人员伪造证据
	- 证据的虚假验证
	- 可信第三方伪造证据


### Non-Repudiation Mechanisms' Matrixs (抗抵赖机制的评价标准)
用户不可抵赖性机制的评价标准
- 抗抵赖性**机制的安全性**
	- 最重要的标准就是是否能真正起到抗抵赖的效果，伪造抗抵赖的签名在计算复杂性意义上是否具有不可行性
- 抗抵赖性机制**是否需要第三方参与**
	- 抗抵赖的基本思路有两种，一种是凭借自身特有的特性进行抗抵赖，称为直接数字签名法抗抵赖，另一种是借助可信的第三方进行公证来防止抵赖行为，称为仲裁数字签名抗抵赖机制
- 抗抵赖性机制的**信息有效率**
- 抗抵赖性机制**是否具有双向抗抵赖功能**
	- 可抵赖性有两个方面，一方面是发送信息方不可抵赖，
	- 另一方面是信息的接收方的不可抵赖性。
- 抗抵赖性机制是**否同时具有保密，完整性验证作用**
- 抗抵赖性**机制的性能**
	- 发送方计算消息摘要，进行私钥签名，接收方进行验证签名（解密）等。


### 🛡️ Non-Repudiation Primitives (抗抵赖基本手段)
#### 👉 使用TTP安全令牌的抗抵赖技术
#### 👉 使用安全令牌和防篡改模块的抗抵赖技术
#### 👉 使用数字签名的抗抵赖技术
#### 👉 使用时间戳的抗抵赖技术
#### 👉 使用在线可信第三方的抗抵赖技术
#### 👉 使用公证的抗抵赖技术


### 🛡️ Non-Repudiation Mechanisms (抗抵赖具体机制)
#### 👉 基于**RSA**的数字签名抗抵赖机制
步骤1：A用自己的私钥签名消息M，用EA私(M）表示；
步骤2：A把签名的消息发送给B；
步骤3：B接收到签名的消息后用A的公钥验证，用公式DA公(EA私(M）)表示；
步骤4：B如果验证成功，表示消息M一定是A发送的，起到了数字签名的作用；

评价：
- 这个机制简单，可以防止发送者抵赖发送行为以及发送的消息本身，并且在机制中不需要专门的第三方参与，具有完整性验证的作用。
- 由于签名是用发送方的私钥签名，因此任何人可以用他的公钥进行解密，而公钥是公开的，这样的数字签名只能起到签名的作用但不能保密，容易受到网络截获的攻击。
- 这个机制的性能较低，因为签名和验证操作都是用的非对称加密机制加密的，并且是对整个信息M进行签名的
#### 👉 具有保密作用的**RSA**签名抗抵赖
改进的方法：用接收方的公钥加密要发送的信息，假设A是发送方，B是接收方, A向B发送消息M，则具有保密作用的数字签名方法是：
- A用自己的私钥加密消息M，用EA私(M）表示;
- A用B的公钥加密第1步的消息，用EB公 (EA私(M))表示;
- 把两次加密后的消息发送给B；
- B接收到加密的消息后用自己的私钥解密，获得签名EA私(M），用公式DB私（EB公(EA私(M))）= EA私(M）表示；
- B对第4步的解密结果再用A的公钥解密，获得发送的消息M，用公式DA公(EA私(M）)=M表示。

如果解密成功，表示消息M一定是A发送的，起到了数字签名的作用。

> 讨论
> 在这个签名机制中，采用的是先签名后加密，那么能否先加密后签名呢，答案是否定的。
> 两种情况的区别：
> - 先签名后加密：保证信息的机密性，同时保证明文的不可抵赖
> - 先加密后签名：保证信息的机密性，同时保证密文的不可抵赖
#### 👉 基于数字信封的数字签名抗抵赖
> 前面两种方法的缺点：速度慢。由于签名是用非对称加密算法RSA对整个消息进行加密，而RSA的加密速度慢，因此不能很好推广。

改进方案：结合数字信封的加密方法，只对一次性对称密钥进行签名，其方法如下：
1. A用一次性对称密钥K1加密要发送的消息M。（消息保密）
2. A用自己的私钥加密K1。（签名K1）
3. A用B的公钥加密第2步的结果，组成数字信封。（对签名结果封装）
4. B用自己的私钥解密第3步的结果，得到签名。
5. B用A的公钥解密第4步的结果，得到一次性对称密钥K1。
6. B用一次性对称密钥K1解密第1步的结果，得到原消息。

评价
- 最大优点是改进了上述机制性能低的缺点，只对短的对称密钥签名，该签名虽然只对一次性对称密钥**K1** 进行签名，好像没有跟整个消息关联，但实际上由于这个消息是用**K1**加密的，因此签名也是跟整个消息是关联的。
- 关联的程度没有下面将要讲述的基于消息摘要的数字签名不可抵赖机制强。
#### 👉 具有数据完整性检测的数字签名抗抵赖
① 发送方A用MD5或者SHA-1等消息摘要算法对消息M计算消息摘要(MD0)
② 发送方A用自己私钥加密这个消息摘要，这个过程的输出是A的数字签名(DS)
③ 发送方(A)将消息M和数字签名(DS)一起发给接收方(B)
④ 接收方(B)收到消息(M)和数字签名(DS)后，接收方(B)用发送方的公钥解密数字签名。这个过程得到原先的消息摘要(MDl）
⑤ 接收方(B)使用与A相同的消息摘要算法计算消息摘要(MD2)

B比较两个消息摘要如下：
- MD2，第5步求出；
- MD1，第4步从A的数字签名求出。
- 如果MD1=MD2，则可以表明：B接受原消息(M)是A发来的、未经修改的消息（鉴别和数据完整性），B也保证消息来自A而不是别人伪装A。

该方法的缺点是：没有对信息**M**进行保密。
#### 👉 具有保密性和数据完整性检测的数字签名方法
（1）发送方A用MD5或者SHA-1等消息摘要算法对消息M计算消息摘要(MD0)
（2）发送方 A用一次性对称密钥K1加密要发送的消息M。（消息保密）
（3）A用B的公钥加密一次性对称密钥K1（密钥的封装）
（4）发送方A用自己私钥加密消息摘要(MD0) ，这个过程的输出是A的数字签名(DS)
（5）发送方A将加密的消息M，加密的一次性对称密钥K1和数字签名 (DS)一起发给接
收方B
（6）B用自己的私钥解密第3步的结果（加密的一次性对称密钥K1 ），得到一次性对
称密钥K1
（7）B用一次性对称密钥K1解密第2步的结果（加密的信息M），得到原消息M
（8）接收方B使用与A相同的消息摘要算法再次计算接收到的消息M’的摘要(MD2)
（9）通过第5步收到数字签名 后，用发送方A的公钥解密数字签名。这个过程得到原
先的消息摘要(MD1）。

B比较两个消息摘要如下：
- MD2，由第8步求出；
- MD1，由第9步从A的数字签名求出。
- 如果MD1=MD2，则可以表明：B接收原的消息M可以防止截获攻击（保密性）并且是从A发来的（鉴别）、是未经修改的消息（数据完整性），B也保证消息来自A而不是别人伪装A（数字签名）。

> 讨论，这里的数字签名是否需要再加密？
> 答：可以不加密，因为从数字签名解密得到的信息摘要里是看不到与原消息有关的任何信息，这由摘要的性质决定的。同时，攻击者也无法假冒数字签名
#### 👉 双方都不能抵赖的数字签名抗抵赖机制
1. A用随机对称密钥K对信息M加密得到E(K，M)，并用自己的私钥进行数字签名，记为A私(E(K，M))，然后用接收方的公钥加密后发送给接收方（三次加密）；
2. 接收方用自己的私钥解密后得到A私(E(K，M))，再用发送方的公钥解密后得到E(K，M)；(这一步确定发送方不可抵赖) （两次解密）；
3. B用自己的私钥签名E(K，M)，得到B私(E(K，M))，再用发送方的公钥加密后送给发送方；（这个步骤确定接收方不可抵赖，进行了两次加密）；
4. A用自己的私钥解密得到B私(E(K，M))，再用接收方的公钥解密得到E(K，M)，确认接收方已收到信息；
5. A把对称密钥K用自己的私钥签名，并用B的公钥加密，然后发送给B；
6. B解密后，得到对称密钥K，就可以对E(K，M)解密而得到M；

抵赖行为的反驳：由于双方都交换了数字签名，因此这个机制对双方的抵赖行为都具有作用

直接签名的缺点
- 前面讲述的直接签名中，不可抵赖性的验证模式依赖于发送方的密钥保密，发送方要抵赖发送某一消息时，可能会声称其私有密钥已暴露、过期或被盗用等
- 需要可信第三方的参与来确保类似的情况出现，例如及时将已暴露的私钥报告给可信的第三方授权中心，接收方在验证签名时要先到可信的第三方授权中心查验发送方的公钥是否注销，然后再验证签名
- 仲裁者必须是一个所有通信方都能充分信任的仲裁机构
#### 👉 基于第三方仲裁的不可抵赖机制
① X用自己的私有密钥KRx签名（加密）要发送的消息M，用EKRx[M]
表示；
② X用Y的公开密钥KUy加密第1步结果，用EKUy (EKRx[M])表示；
③ X将第2步的结果以及X的标识符IDx一起用KRx签名后发送给A，用EKRx\[IDx||EKUy (EKRx[M])\]表示；
④ X将X的标识符IDx也发送给A；
⑤ A首先检查X的公钥/私钥对是否有效和身份是否真实（后者可借助身份的可鉴别性来完成），并通过第3步解密得到的X的标识符和第4步收到的X的标识符比较相等来确保X的身份不被假冒

> A对X的抵赖反驳：A通过第3步的数字签名知该消息是来自X，并且中途未被篡改，X不能抵赖；

⑥ A将从X收到签名消息解密验证后获得的信息IDx||EKUy\[EKRx\[M\]\]，再加上时间戳T（防止重放攻击）用自己的私钥KRa签名后发送给Y，公式为EKRa\[IDx||EKUy\[EKRx\[M\]\]||T\]，并保留要被签名的副本；
⑦ Y收到A的信息后用A的公钥解密获得EKUy\[EKRx\[M\]\]；
⑧ Y用自己的私钥解密第8步的信息，再用X公钥解密，就获得M；

> Y对X的抵赖反驳：如果X抵赖发送过M，Y可以向A提起申诉，将 $IDx|| EKUy[EKRx[M]]||$ T发给A，由A根据原来的保留信息（第7步）通过第6步来确认X不可抵赖没有发送消息M



## Ref
