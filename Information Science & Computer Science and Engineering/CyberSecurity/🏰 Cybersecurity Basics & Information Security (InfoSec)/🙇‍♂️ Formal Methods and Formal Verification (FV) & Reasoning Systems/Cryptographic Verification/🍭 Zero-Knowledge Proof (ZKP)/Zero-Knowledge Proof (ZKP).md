# Zero-Knowledge Proof (ZKP) 

[TOC]



## Res
### Related Topics
↗ [Authentication (身份鉴别)](../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md)
↗ [Cryptographic Key Based Authentication (基于密码学原理)](../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Human-Oriented%20Authentication%20(鉴别对象为人)/🎫%20Cryptographic%20Key%20Based%20Authentication%20(基于密码学原理)/Cryptographic%20Key%20Based%20Authentication%20(基于密码学原理).md)

↗ [Secure Multi-Party Computation (SMPC)](../../../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Secure%20Multi-Party%20Computation%20(SMPC)/Secure%20Multi-Party%20Computation%20(SMPC).md)
↗ [Schnorr’s Identification Protocol & Scheme](Interactive%20ZK%20Proofs/Sigma%20Protocols%20(Commit–Challenge–Response)/Schnorr’s%20Identification%20Protocol%20&%20Scheme.md)


### Other Resources
https://www.zkdocs.com/
ZKDocs provides comprehensive, detailed, and interactive documentation on zero-knowledge proof systems and related primitives.



## Intro
向别人证明知道某种事物或者拥有某种物品有直接证明和间接证明两种方法。
- 直接证明，是出示或说出该事物，使别人知道和相信，从而得到证明。但这会使别人也知道或掌握这一秘密，是最大泄漏证明；
- 间接证明，用一种有效的数学方法证明其知道秘密，而又不泄漏信息给别人，这就是零知识证明问题。

> 🔗 https://en.wikipedia.org/wiki/Zero-knowledge_proof

In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), a **zero-knowledge proof** (also known as a **ZK proof** or **ZKP**) is a protocol in which one party (the prover) can convince another party (the verifier) that some given statement is true, without conveying to the verifier any information _beyond_ the mere fact of that statement's truth. The intuition behind the nontriviality of zero-knowledge proofs is that it is trivial to prove possession of the relevant information simply by revealing it; the hard part is to prove this possession without revealing this information (or any aspect of it whatsoever).

In light of the fact that one should be able to generate a proof of some statement _only_ when in possession of certain secret information connected to the statement, the verifier, even after having become convinced of the statement's truth by means of a zero-knowledge proof, should nonetheless remain unable to prove the statement to further third parties.

Zero-knowledge proofs can be interactive, meaning that the prover and verifier exchange messages according to some protocol, or noninteractive, meaning that the verifier is convinced by a single prover message and no other communication is needed. In the [standard model](https://en.wikipedia.org/wiki/Standard_model_\(cryptography\) "Standard model (cryptography)"), interaction is required, except for trivial proofs of [BPP](https://en.wikipedia.org/wiki/BPP_\(complexity\) "BPP (complexity)") problems. In the [common random string](https://en.wikipedia.org/w/index.php?title=Common_random_string_model&action=edit&redlink=1 "Common random string model (page does not exist)") and [random oracle](https://en.wikipedia.org/wiki/Random_oracle "Random oracle") models, [non-interactive zero-knowledge proofs](https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof "Non-interactive zero-knowledge proof") exist. **The [Fiat–Shamir heuristic](https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic "Fiat–Shamir heuristic") can be used to transform certain interactive zero-knowledge proofs into noninteractive ones.**


### ZKP Properties & Definition
这种交互式用户身份鉴别协议必须满足如下三个性质:

(1)完全性(Completeness)。若双方都诚实地执行协议，则验证者能以非常大的概率 确信对方的身份。

(2)健全性(Soundness)。若声称者不知道与他所声称的用户身份相关联的秘密信息， 且验证者是诚实的，则验证者将以非常大的概率拒绝接受声称者的身份。

(3)隐藏性(Witness Hiding)。若声称者是诚实的，则不论协议进行了多少次，任何 人(包括验证者)都无法从协议中推出声称者的秘密信息。

需要指出的是，一个满足完全性和健全性的协议并不能保证协议是安全的。例如，声称 者 A 可以通过简单地泄露他的秘密信息来向验证者证明他的身份。该协议显然是完全的和 健全的，但却是不安全的，因为以后该验证者就可以假冒声称者 A。在密码学中，我们希望 一个鉴别协议能够在声称者向验证者证明他身份的同时由没有泄露任何信息，这就是零知识 证明思想。

实际上，向别人证明知道某种事物或者拥有某种物品有直接证明和间接证明两种方法。 直接证明就是出示或说出该事物，使别人知道和相信，从而得到证明。但这会使别人也知道 或掌握这一秘密，是最大泄漏证明;另一种方法是用一种有效的数学方法证明其知道秘密， 而又不泄漏信息给别人，这就是零知识证明问题。


### Examples of ZKP
> 🔗 https://en.wikipedia.org/wiki/Zero-knowledge_proof#Abstract_examples

#### The Red Card Proof

#### Where's Wally

#### Cave Problem (The Ali Baba Cave)
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-06-05%20at%2010.00.07%20PM.png)
#### External Observation

#### Number Theory Problem
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-06-05%20at%209.58.12%20PM.png)


### Formal Definition
> 🔗 https://en.wikipedia.org/wiki/Zero-knowledge_proof#Definition

A zero-knowledge proof of some statement must satisfy three properties:
1. **Completeness**: if the statement is true, then an honest verifier (that is, one following the protocol properly) will be convinced of this fact by an honest prover.
2. **Soundness**: if the statement is false, then no cheating prover can convince an honest verifier that it is true, except with some small probability.
3. **Zero-knowledge**: if the statement is true, then no verifier learns anything other than the fact that the statement is true. In other words, just knowing the statement (not the secret) is sufficient to imagine a scenario showing that the prover knows the secret. This is formalized by showing that every verifier has some *simulator* that, given only the statement to be proved (and no access to the prover), can produce a transcript that "looks like" an interaction between an honest prover and the verifier in question.

The first two of these are properties of more general interactive proof systems. The third is what makes the proof zero-knowledge.

Zero-knowledge proofs are not proofs in the mathematical sense of the term because there is some small probability, the *soundness error*, that a cheating prover will be able to convince the verifier of a false statement. In other words, zero-knowledge proofs are probabilistic "proofs" rather than deterministic proofs. However, there are techniques to decrease the soundness error to negligibly small values (for example, guessing correctly on a hundred or thousand binary decisions has a $1/2^{100}$ or $1/2^{1000}$ soundness error, respectively. As the number of bits increases, the soundness error decreases toward zero).

A formal definition of zero-knowledge must use some computational model, the most common one being that of a Turing machine. Let $P$, $V$, and $S$ be Turing machines. An interactive proof system with $(P, V)$ for a language $L$ is zero-knowledge if for any probabilistic polynomial time (PPT) verifier $\hat{V}$ there exists a PPT simulator $S$ such that: $$
\forall x \in L,\ z \in \{0,1\}^{*},\ \mathrm{View}_{\hat{V}}\!\left[P(x) \leftrightarrow \hat{V}(x,z)\right] = S(x,z)$$
where $\mathrm{View}_{\hat{V}}[P(x)\leftrightarrow \hat{V}(x,z)]$ is a record of the interactions between $P(x)$ and $V(x,z)$. The prover $P$ is modeled as having unlimited computation power (in practice, $P$ usually is a probabilistic Turing machine). Intuitively, the definition states that an interactive proof system $(P,V)$ is zero-knowledge if for any verifier $\hat{V}$ there exists an efficient simulator $S$ (depending on $\hat{V}$) that can reproduce the conversation between $P$ and $\hat{V}$ on any given input. The auxiliary string $z$ in the definition plays the role of "prior knowledge" (including the random coins of $\hat{V}$). The definition implies that $\hat{V}$ cannot use any prior knowledge string $z$ to mine information out of its conversation with $P$, because if $S$ is also given this prior knowledge then it can reproduce the conversation between $\hat{V}$ and $P$ just as before.

The definition given is that of perfect zero-knowledge. Computational zero-knowledge is obtained by requiring that the views of the verifier $\hat{V}$ and the simulator are only computationally indistinguishable, given the auxiliary string.



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
