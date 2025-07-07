# Zero-Knowledge Proof (ZKP) 

[TOC]



## Res
### Related Topics
↗ [Secure Multi-Party Computation (SMPC)](../../../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Secure%20Multi-Party%20Computation%20(SMPC)/Secure%20Multi-Party%20Computation%20(SMPC).md)


### Other Resources



## Intro
向别人证明知道某种事物或者拥有某种物品有直接证明和间接证明两种方法。
- 直接证明，是出示或说出该事物，使别人知道和相信，从而得到证明。但这会使别人也知道或掌握这一秘密，是最大泄漏证明；
- 间接证明，用一种有效的数学方法证明其知道秘密，而又不泄漏信息给别人，这就是零知识证明问题。


### ZKP Properties & Definition
这种交互式用户身份鉴别协议必须满足如下三个性质:

(1)完全性(Completeness)。若双方都诚实地执行协议，则验证者能以非常大的概率 确信对方的身份。

(2)健全性(Soundness)。若声称者不知道与他所声称的用户身份相关联的秘密信息， 且验证者是诚实的，则验证者将以非常大的概率拒绝接受声称者的身份。

(3)隐藏性(Witness Hiding)。若声称者是诚实的，则不论协议进行了多少次，任何 人(包括验证者)都无法从协议中推出声称者的秘密信息。

需要指出的是，一个满足完全性和健全性的协议并不能保证协议是安全的。例如，声称 者 A 可以通过简单地泄露他的秘密信息来向验证者证明他的身份。该协议显然是完全的和 健全的，但却是不安全的，因为以后该验证者就可以假冒声称者 A。在密码学中，我们希望 一个鉴别协议能够在声称者向验证者证明他身份的同时由没有泄露任何信息，这就是零知识 证明思想。

实际上，向别人证明知道某种事物或者拥有某种物品有直接证明和间接证明两种方法。 直接证明就是出示或说出该事物，使别人知道和相信，从而得到证明。但这会使别人也知道 或掌握这一秘密，是最大泄漏证明;另一种方法是用一种有效的数学方法证明其知道秘密， 而又不泄漏信息给别人，这就是零知识证明问题。


### Examples of ZKP
#### 1️⃣ Cave Problem
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-06-05%20at%2010.00.07%20PM.png)
#### 2️⃣ Number Theory Problem
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-06-05%20at%209.58.12%20PM.png)



## ZKP Protocols
计算模**n**平方根的困难性
- **Fiat-Shamir**身份识别协议
- **Fiege-Fiat-Shamir**身份识别协议
离散对数的困难性
- **Needham-Schroeder**协议



## Ref
[零知识证明 | Wikipedia]: https://zh.wikipedia.org/wiki/零知识证明

[姚氏百万富翁问题 - 李治的文章 - 知乎]: https://zhuanlan.zhihu.com/p/404085829

[A Survey of Zero-Knowledge Proofs with Applications to Cryptography]: http://austinmohr.com/Work_files/zkp.pdf

Austin Mohr, Southern Illinois University at Carbondale
