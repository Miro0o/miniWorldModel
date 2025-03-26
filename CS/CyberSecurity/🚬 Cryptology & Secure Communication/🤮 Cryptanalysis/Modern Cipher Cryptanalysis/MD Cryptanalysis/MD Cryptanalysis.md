# MD Cryptanalysis

[TOC]



## Res
↗ [MD (Message Digest)](../../../🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Digest%20&%20Hash%20Function%20(Integrity)/MD%20(Message%20Digest)/MD%20(Message%20Digest).md)

↗ [SeedLab - Cryptography /👉 MD5 Collision Attack Lab](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🎯%20Cyber%20Ranges%20&%20Labs/🧪%20Ranges%20&%20Security%20Labs/SEED%20Project/SeedLab%20-%20Cryptography.md#👉%20MD5%20Collision%20Attack%20Lab)



## Intro
对散列函数的攻击是指攻击者寻找一对产生碰撞的消息的过程。评价散列函数的有效方法就是看一 个攻击者找到一对产生碰撞的消息所花的代价有多高。遵循柯克霍夫斯(Kerckhoffs)原则，在讨论散 列函数的安全性时，都假设攻击者已经知道了散列函数的算法。
- 第一类称为穷举攻击(或暴力攻击)，它能对任何类型的散列函数进行攻击，其中最典型的方法就 是“生日攻击”。采用这类攻击的攻击者将产生许多的消息，计算其散列值，并进行比较。当消息足够 多时，根据概率论的有关结论，消息将以某种较大的概率发生碰撞，这时可以认为散列函数已经被攻破。 这种攻击可行性的关键在于究竟需要多少消息的输入才能使发生碰撞的概率足够大。如果消息数目大到 使计算上是不可行的，那么这种攻击就是不可行的:否则，可以认为该散列函数是不安全的。
- 第二类称为密码分析法，这类攻击方法依赖于对散列函数的结构和代数性质分析，采用针对散列函数弱性质的方法进行攻击。这类攻击方法有中间相遇攻击、修正分组攻击和差分分析等等。另外，使用了其他密码算法构造的散列函数，还可能因为所使用的密码算法本身存在的弱点而引起攻击。例如，针对 DES 密码算法的一些安全性弱点，如互补性、弱密钥与半弱密钥等，都可用来攻击基于 DES 构造的散列函数。



## 1️⃣ Brute-Force Attack
### Birthday Attack
#### Birthday Problem


#### Birthday Attack



## 2️⃣ MD Cryptanalysis Attack



## Ref
[MD5 Collision Attack Lab — A Cryptographic Security SEEDLab]: https://medium.com/@shrutiavinodh/md5-collision-attack-lab-a-cryptographic-security-seedlab-448329a57f9b

[👍 哈希碰撞与生日攻击 | 阮一峰的网络日志]: https://www.ruanyifeng.com/blog/2018/09/hash-collision-and-birthday-attack.html

[Birthday attack | Wikipedia]: https://en.wikipedia.org/wiki/Birthday_attack

A birthday attack is a type of cryptographic attack that exploits the mathematics behind the birthday problem in probability theory. This attack can be used to abuse communication between two or more parties. The attack depends on the higher likelihood of collisions found between random attack attempts and a fixed degree of permutations (pigeonholes). With a birthday attack, it is possible to find a collision of a hash function in $$\sqrt{2^n} = 2 ^ {n/2}$$
with $2^{n}$ being the classical [preimage resistance](https://en.wikipedia.org/wiki/Preimage_resistance "Preimage resistance") security. There is a general (though disputed) result that quantum computers can perform birthday attacks, thus breaking collision resistance, in $$\sqrt[3]{2^n} = 2 ^{n/3}$$
Although there are some digital signature vulnerabilities associated with the birthday attack, it cannot be used to break an encryption scheme any faster than a brute-force attack

