# Message Digest & Hash Function (Integrity)

[TOC]



## Res
### Related Topics
↗ [MD Cryptanalysis](../../../../🤮%20Cryptanalysis/Modern%20Cipher%20Cryptanalysis/MD%20Cryptanalysis/MD%20Cryptanalysis.md)
↗ [Login Cracker & Password Cracker](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Login%20Cracker%20&%20Password%20Cracker/Login%20Cracker%20&%20Password%20Cracker.md)
- ↗ [hashcat](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Login%20Cracker%20&%20Password%20Cracker/hashcat.md)


### Other Resources



## Intro
- Map arbitrary-length input to fixed-length output
- Output is deterministic and unpredictable
- Security properties
	- One way: Given an output y, it is infeasible to find any input x such that $H(x) = y$.
	- Second preimage resistant: Given an input x, it is infeasible to find another input $x' \neq x$ such that $H(x) = H(x')$.
	- Collision resistant: It is infeasible to find another any pair of inputs $x' \neq x$ such that $H(x) = H(x')$.
- Some hashes are vulnerable to length extension attacks $(H(M) → H(M||M’))$
- Hashes don’t provide integrity (unless you can publish the hash securely)


### Hash Function Properties
设散列函数为$h(m)$，具有以下基本特性:  
(1) $h(m)$算法公开，不需要密钥。  
(2) 具有数据压缩功能，可将任意长度的输入数据转换成一个固定长度的输出。
(3) 对任何给定的m，$h(m)$易于计算。

除此之外，散列函数还必须满足以下安全性要求:  
(1) 具有**单向性**。
给定消息的散列值 $h(m)$，要得到消息 $m$ 在计算上不可行;  
(2) 具有**弱抗碰撞性(Weak collision resistance)**。
也称弱抗冲突性：对任何给定的消息 $m$，寻找与$m$不同的消息 $m’$，使得它们的散列值相同，即 $h(m’)=h (m)$，在计算上不可行。  
(3) 具有**强抗碰撞性(Strong collision resistance)** 。
也称强抗冲突性:寻找任意两个不同的消息 $m$ 和 $m’$， 使得 $h(m)=h(m’)$ 在计算上不可行。  

所谓散列函数的碰撞是指若两个消息 $m$ 与 $m’$，$m \neq m’$ ，但它们的散列值相等，即 $h(m) = h(m’)$，那么，则把这种情况称为发生了**碰撞或冲突**。

由于输入消息的长度可以是任意的，但散列函数输出的散列值的长度是固定的，如对于散列值长度为 160 位的散列函数而言，可能的散列值总数为 2160。显然，不同的消息就有可能会产生相同的散列值，即散列函数具有碰撞的**不可避免性**。

但是，散列算法的**安全性**要求找到一个碰撞在计算上是不可行的。也就是说，要求碰撞是不可预测的，攻击者不能指望对输入 消息的预期改变可以得到一个相同的散列值。

哈希函数本身能否提供完整性保护？（integrity）
- 取决于其他因素（是否确保不被篡改/authenticity）


### Hash Function Applications
散列函数的主要应用有以下三个方面:
(1)保证数据的**完整性** 
例如，为保证数据或文件的完整性，可以使用散列函数对数据或文件生成其散列码，并加以安全保存，然后，每当使用数据或文件时，用户可使用散列函数重新计算其散列码，并与保存的散列码进行比较，如果相等，说明数据是完整的，没有经过改动;否则，数据表示已经被篡改过。这样，可发现病毒或入侵者对程序或文档的非授权地篡改。

(2)**单向数据加密** 
应用于诸如用户口令加密等场合。将用户口令的散列码存放到一个口令表中，使用时将用户输入的口令进行相应散列运算后，再与口令表中对应用户的口令散列码比较，从而完成口令的有效性验证， 这种方式可避免以明文的形式保存用户口令，也无需解密运算，增强了用户口令的安全性，这种单向数 据加密至今仍然在许多信息系统中得到广泛使用。

(3)**数字签名**
将散列函数应用于数字签名可以提高高签名的速度，不泄露数字签名所对应的原始消息，而且还可以将消息的签名变换与加密变换分开处理，因此散列函数在数字签名中得到普遍应用。

↗ [Digital Signature & DSA](../Message%20Authentication%20(报文鉴别，消息鉴别)/Digital%20Signature%20&%20DSA/Digital%20Signature%20&%20DSA.md)


### Hash Function Threats
Birthday attack:

Length extension attack:
- Given H(x) and the length of x, but not x, an attacker can create H(x || m) for any m of the attacker’s choosing
	- See homework for a demo
	- Note: This doesn’t violate any property of hash functions but is undesirable in some circumstances
- SHA-256 (256-bit version of SHA-2) is vulnerable    
- SHA-3 is not vulnerable



## Hash Function Principles
### Iterative Message Digest Models


### Design Principles of Message Digest
#### 1️⃣ Asymmetric Cipher Based Design
![](../../../../../../../Assets/Pics/Screenshot%202023-05-21%20at%201.32.35%20PM.png)

对于消息 $M=(m_1，m_2，m_3......m_t)$，这时散列函数的逻辑关系可表示为: 
$$
\begin{align}
& c_0=IV; \\
& c_i=E_{PK}(m_i \oplus c_{i-1}) ; \ 1≤i≤t ; \\
& h(M)= c_t
\end{align}
$$
如果丢弃用户的私钥 $S_K$，这时产生的散列值将无法解密，它满足了散列函数的单向性要求。 虽然在合理的假设下，可以证明这类散列函数是安全的，由于它的计算效率太低，所以这一类散列函数并没有什么实用价值。
#### 2️⃣ Symmetric Block Cipher Based Design
通常，可以使用对称密钥分组密码算法的 CBC 模式或 CFB 模式来产生散列值，如图 5.4、图 5.5 所示。它将使用一个对称密钥 k 及初始变量 IV 加密分组消息，并将最后的密文分组作为散列值输出。 这时，如果分组算法是安全的，那么散列函数也将是安全的。

![](../../../../../../../Assets/Pics/Screenshot%202023-05-21%20at%201.32.56%20PM.png)
##### Attacks to Symmetric Block Cipher Based MD
基于分组密码的 CBC 工作模式和 CFB 工作模式的散列函数中，密钥 k 不能公开。如果密钥 k 公开，则会使得攻击者构造消息碰撞十分容易，下面以 CBC 模式为例进行分析。  
如图 5.6 所示，在 CBC 工作模式中，消息 M 被分为 t 个分组 $(m_1，m_2，m_3......m_t)$，然后分别用密钥 k 加密，并对每次输出结果进行链接得到最后的散列值 h(M)。如果攻击者知道密钥 k，便可以解密计 算得到最后一次加密的输入 $x_t$。于是攻击者可以将消息 M 的前 t-1 个分组 $m_1，m_2，m_3......m_{t-1}$ 任意篡改成 $m’_1，m’_2，m’_3......m’_{t-1}$，并计算得到 $c’_{t-1}$，再构造 $m’_t= c’_{t-1} \oplus c_t$，形成篡改后的消息 $M’=m’_1||m’_2||m’_3||...... ||m’_{t-1}||m’_t$。

![](../../../../../../../Assets/Pics/Screenshot%202023-05-21%20at%201.33.31%20PM.png)

虽然 $M' \neq M$，但是由于异或运算的性质，在散列函数计算的最后一步得到的 $m’_t \oplus c’_{t-1}=c_t$ 未发生变 化，所以仍然有 $c’_t= c_t$，即 $h(M’)=h(M)$，这就通过计算造成了碰撞。对于 CFB 模式，也可以使用相同的 方法篡改密文造成碰撞。因此，在密钥公开的情况下，基于分组密码的 CBC 工作模式和 CFB 工作模式 的 Hash 函数是不安全的，它们甚至不是弱抗碰撞的。在实际使用中密钥 k 必须保密，这种带密钥的散 列函数常用于产生消息鉴别码。
#### 3️⃣ Direct Design
这类散列函数并不基于任何假设和密码体制，它是通过直接构造复杂的非线性关系达到单向性要求来设计单向散列函数。这类散列算法典型的有:MD2、MD4、MD5、SHA 系列等散列算法。目前，直接设计散列函数的方法受到了人们的广泛关注和重视。

↗ [SHA (Secure Hash Algorithm)](SHA%20(Secure%20Hash%20Algorithm)/SHA%20(Secure%20Hash%20Algorithm).md)
↗ [MD (Message Digest)](MD%20(Message%20Digest)/MD%20(Message%20Digest).md)



## Ref
[👍 哈希碰撞与生日攻击 | 阮一峰的网络日志]: https://www.ruanyifeng.com/blog/2018/09/hash-collision-and-birthday-attack.html

[Birthday attack | Wikipedia]: https://en.wikipedia.org/wiki/Birthday_attack
