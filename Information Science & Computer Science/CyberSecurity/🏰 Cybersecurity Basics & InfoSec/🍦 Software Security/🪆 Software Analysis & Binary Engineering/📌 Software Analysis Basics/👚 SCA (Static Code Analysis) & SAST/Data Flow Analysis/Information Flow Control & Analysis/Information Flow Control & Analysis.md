# Information Flow Control & Analysis

[TOC]



## Res
### Related Topics
↗ [Lattice (Set Theory)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)
↗ [Access Control (访问控制)](../../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)


### Other Resources
[南大软分课程笔记｜13 静态分析在安全领域的应用](https://blog.wohin.me/posts/nju-program-analysis-13/)



## Intro: Information Flow Security (信息流安全)
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-13/

[Dorothy E. Denning](https://en.wikipedia.org/wiki/Dorothy_E._Denning)于1976年在论文[_A Lattice Model of Secure Information Flow_](https://courses.cs.washington.edu/courses/cse590s/02sp/secure-information-flow.pdf)提出，一个系统需要访问（access）和流（flow）控制来满足所有安全要求。

访问控制（access control）用来确保程序有权限访问特定信息，主要关心信息是如何被访问的。

信息流安全则是一种端到端的思路，通过追踪信息流通过一个程序的过程，确保该程序能够安全地处理信息，主要关心信息是如何被传播的。

Dorothy E. Denning与Peter J. Denning夫妇二人1977年的论文 [_Certification of Programs for Secure Information Flow_](https://www.cs.utexas.edu/~shmat/courses/cs380s/denning.pdf )对信息流做了如下解释：如果变量xx中的信息被传送到变量yy，它们之间就建立了一条信息流 $x\to y$。这看起来与我们前面学过的指针分析十分相似。

一种将信息流和安全联系起来的思路是，将不同类型的变量划分到不同的安全等级（security levels），在这些等级之间建立允许的流，从而形成信息流策略。不同实际场景下的安全等级千差万别，可以很复杂也可以很简单。考虑最简单的情况：只有H（高）和L（低）两个安全等级，下面两行代码就分别对应了这两个等级：

```java
h = getPassword(); // h is high security
broadcast(l); // l is low security
```

另外，我们也可以在格（lattice）上对安全等级进行建模（来自前面提到的第一篇论文）：$L\leq H_L \leq H$。

所谓“信息流策略”，用来限制信息流在不同安全等级之间的流动。例如，J. A. Goguen和J. Meseguer于1982年在论文 [_Security Policies and Security Models_](https://www.cs.purdue.edu/homes/ninghui/readings/AccessControl/goguen_meseguer_82.pdf) 中提出了一个信息流策略——不干涉策略（noninterference policy），它要求高安全等级的变量中的信息不应对低安全等级的变量中的信息有任何影响。因此，你也不应该能通过观察低安全等级的变量来获得任何高安全等级的信息。对应到代码上，形如$x_L=y_H$这样的语句就违背了这一信息流策略。

在格的视角下，上述策略可以表达为，应确保信息在安全等级的格中向上流动。


### Security Properties of Information
> ↗ [Cybersecurity Basics & InfoSec /🛡️ InfoSec Principles & Objectives](../../../../../../Cybersecurity%20Basics%20&%20InfoSec.md#🛡️%20InfoSec%20Principles%20&%20Objectives)

> 🔗 https://blog.wohin.me/posts/nju-program-analysis-13/

众所周知，信息安全三要素包括机密性（confidentiality）、完整性（integrity）和可用性（availability）。本节课讨论的是信息流，因此重点关注前两个要素。

确保机密性，通俗意义上就是阻止敏感信息泄露；确保完整性，就是避免不受信的信息污染了受信（重要）的信息（这一说法来自Ken Biba于1977年发表的论文[_Integrity Considerations for Secure Computer Systems_](https://apps.dtic.mil/sti/pdfs/ADA039324.pdf)）。常见的各种注入问题就是损害了完整性。

有意思的是，结合前面讨论的安全等级相关的知识来看，机密性和完整性恰好是对称的：确保机密性，就是要避免高安全等级的秘密信息流向低安全等级的公开区域，属于读保护；确保完整性，就是要避免低安全等级的不可信信息流向高安全等级的可信区域，属于写保护。

另外，完整性本身也是一个覆盖广泛的概念。它可以包括数据的正确性（correctness）、完全性（completeness）和一致性（consistency）。


### Propagation of Information & Information Flow



## Ref
