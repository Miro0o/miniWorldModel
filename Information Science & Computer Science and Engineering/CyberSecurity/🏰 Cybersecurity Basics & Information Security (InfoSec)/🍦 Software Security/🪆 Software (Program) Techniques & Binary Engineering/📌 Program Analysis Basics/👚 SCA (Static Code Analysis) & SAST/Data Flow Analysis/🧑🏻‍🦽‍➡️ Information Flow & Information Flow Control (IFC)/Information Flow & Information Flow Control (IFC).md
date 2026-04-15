# 🧑🏻‍🦽‍➡️ Information Flow & Information Flow Control (IFC)

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../../../../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)

↗ [Lattice (Order Theory)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

↗ [Cryptology & Secure Communication](../../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
↗ [Cybersecurity Basics & Information Security (InfoSec)](../../../../../../Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec).md)

↗ [Access Control (访问控制)](../../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)


### Other Resources
[南大软分课程笔记｜13 静态分析在安全领域的应用](https://blog.wohin.me/posts/nju-program-analysis-13/)



## Intro: Information Flow Security (信息流安全)
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-13/

[Dorothy E. Denning](https://en.wikipedia.org/wiki/Dorothy_E._Denning)于1976年在论文 [_A Lattice Model of Secure Information Flow_](https://courses.cs.washington.edu/courses/cse590s/02sp/secure-information-flow.pdf) 提出，一个系统需要访问（access）和流（flow）控制来满足所有安全要求。

访问控制（access control）用来确保程序有权限访问特定信息，主要关心信息是如何被访问的。

信息流安全则是一种端到端的思路，通过追踪信息流通过一个程序的过程，确保该程序能够安全地处理信息，主要关心信息是如何被传播的。

Dorothy E. Denning与Peter J. Denning夫妇二人1977年的论文 [_Certification of Programs for Secure Information Flow_](https://www.cs.utexas.edu/~shmat/courses/cs380s/denning.pdf )对信息流做了如下解释：如果变量$x$中的信息被传送到变量$y$，它们之间就建立了一条信息流 $x\to y$。这看起来与我们前面学过的指针分析十分相似。

一种将信息流和安全联系起来的思路是，将不同类型的变量划分到不同的安全等级（security levels），在这些等级之间建立允许的流，从而形成信息流策略。不同实际场景下的安全等级千差万别，可以很复杂也可以很简单。考虑最简单的情况：只有H（高）和L（低）两个安全等级，下面两行代码就分别对应了这两个等级：

```java
h = getPassword(); // h is high security
broadcast(l); // l is low security
```

另外，我们也可以在格（lattice）上对安全等级进行建模（来自前面提到的第一篇论文）：$L\leq H_L \leq H$。

所谓“信息流策略”，用来限制信息流在不同安全等级之间的流动。例如，J. A. Goguen和J. Meseguer于1982年在论文 [_Security Policies and Security Models_](https://www.cs.purdue.edu/homes/ninghui/readings/AccessControl/goguen_meseguer_82.pdf) 中提出了一个信息流策略——不干涉策略（noninterference policy），它要求高安全等级的变量中的信息不应对低安全等级的变量中的信息有任何影响。因此，你也不应该能通过观察低安全等级的变量来获得任何高安全等级的信息。对应到代码上，形如$x_L=y_H$这样的语句就违背了这一信息流策略。

在格的视角下，上述策略可以表达为，应确保信息在安全等级的格中向上流动。

> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)

**Information flow** in an [information theoretical](https://en.wikipedia.org/wiki/Information_theory "Information theory") context is the transfer of information from a [variable](https://en.wikipedia.org/wiki/Random_variable "Random variable") x to a variable y in a given [process](https://en.wikipedia.org/wiki/Stochastic_process "Stochastic process"). Not all flows may be desirable; for example, a system should not leak any confidential information (partially or not) to public observers—as it is a violation of privacy on an individual level, or might cause major loss on a corporate level.


### Security Properties of Information
> [!links]
> ↗ [Cybersecurity Basics & InfoSec /🛡️ InfoSec Principles & Objectives](../../../../../../Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec).md#🛡️%20InfoSec%20Principles%20&%20Objectives)

> 🔗 https://blog.wohin.me/posts/nju-program-analysis-13/

众所周知，信息安全三要素包括机密性（confidentiality）、完整性（integrity）和可用性（availability）。本节课讨论的是信息流，因此重点关注前两个要素。

确保机密性，通俗意义上就是阻止敏感信息泄露；确保完整性，就是避免不受信的信息污染了受信（重要）的信息（这一说法来自Ken Biba于1977年发表的论文 [_Integrity Considerations for Secure Computer Systems_](https://apps.dtic.mil/sti/pdfs/ADA039324.pdf)）。常见的各种注入问题就是损害了完整性。

有意思的是，结合前面讨论的安全等级相关的知识来看，机密性和完整性恰好是对称的：确保机密性，就是要避免高安全等级的秘密信息流向低安全等级的公开区域，属于读保护；确保完整性，就是要避免低安全等级的不可信信息流向高安全等级的可信区域，属于写保护。

另外，完整性本身也是一个覆盖广泛的概念。它可以包括数据的正确性（correctness）、完全性（completeness）和一致性（consistency）。


### Explicit Flows and Side (Covert) Channels
> [!links]
> ↗ [Side-Channel Attack (SCA)](../../../../../../🪖%20Hardware%20Security/Hardware%20Threats%20&%20Attacks/Side-Channel%20Attack%20(SCA)/Side-Channel%20Attack%20(SCA).md)

> 🔗 https://blog.wohin.me/posts/nju-program-analysis-13/

我们继续来讨论信息流。“信息”本身是一个抽象的概念，它并不等同于数据。信息可能会有两种不同的传播方式：显式流和隐式流（implicit flow）。

前者很简单，例如$x_L=y_H$​这个语句就是通过直接复制/赋值的方式实现信息传递，也就是显式流。隐式流则不那么直观，基于此途径的敏感信息泄露也相对而言不那么好防御。现实中已经有许多这样的例子。例如，在下面的代码片段中，根据$publik_L$的结果，我们将能够推断$secret_H$的正负性：

```java
secret_H = getSecret();
if (secret_H < 0) publik_L = 1;
else publik_L = 0;
```

敏感信息虽然没有直接传播，但是它影响了控制流，这可能会被低安全等级的观察者观察到。

通过计算系统传递信息的机制被称作信道（channels）。在此基础上，Butler W.Lampson于1973年发表的文章 [_A Note on the Confinement Problem_](https://www.cs.utexas.edu/~shmat/courses/cs380s_fall09/lampson73.pdf)将那些利用本非用于信息传递的机制的信道称为隐蔽信道。一些常见的隐蔽信道包括：
- 隐式流，通过程序控制结构传递信息。
- 终止（termination）信道，通过程序的（不）可终止性差异传递信息。
- 时间（timing）信道，通过计算时间的差异传递信息。
- 异常（exceptions），通过异常来传递信息。

尽管隐蔽信道比较难识别和防御，它能够传递的信息通常也比显式流少得多。因此，本课程主要关注显式流。一个问题是，如何检测和避免非预期的信息流呢？接下来将要讨论的污点分析是有效的解决方案之一。

> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Explicit_flows_and_side_channels

nformation flows can be divided in two major categories. The simplest one is explicit flow, where some secret is explicitly leaked to a publicly observable variable. In the following example, the secret in the variable _h_ flows into the publicly observable variable _l_.
```
var l, h
l := h
```

The other flows fall into the [side channel](https://en.wikipedia.org/wiki/Side_channel_attack "Side channel attack") category. For example, in the [timing attack](https://en.wikipedia.org/wiki/Timing_attack "Timing attack") or in the [power analysis attack](https://en.wikipedia.org/wiki/Power_analysis "Power analysis"), the system leaks information through, respectively, the time or power it takes to perform an action depending on a secret value.

In the following example, the attacker can deduce if the value of _h_ is one or not by the time the program takes to finish:
```
var l, h
if h = 1 then
    (* do some time-consuming work *)
l := 0
```

Another side channel flow is the implicit information flow, which consists in leakage of information through the program [control flow](https://en.wikipedia.org/wiki/Control_flow "Control flow"). The following program (implicitly) discloses the value of the secret variable _h_ to the variable _l_. In this case, since the _h_ variable is boolean, all the bits of the variable of _h_ is disclosed (at the end of the program, _l_ will be 3 if _h_ is true, and 42 otherwise).

```
var l, h
if h = true then
    l := 3
else
    l := 42
```



## Information Flow Policies & Information Flow Control (IFC)
### Information Flow Policies
#### Noninterference Policy
> 🔗 https://en.wikipedia.org/wiki/Non-interference_(security)

Non-interference is a policy that enforces that an attacker should not be able to distinguish two computations from their outputs if they only vary in their secret inputs. However, this policy is too strict to be usable in realistic programs.[4] The classic example is a password checker program that, in order to be useful, needs to disclose some secret information: whether the input password is correct or not (note that the information that an attacker learns in case the program rejects the password is that the attempted password is not the valid one).
#### Declassification
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification

As shown previously, non-interference policy is too strict for use in most real-world applications.[7] Therefore, several approaches to allow controlled releases of information have been devised. Such approaches are called information declassification.

Robust declassification requires that an active attacker may not manipulate the system in order to learn more secrets than what passive attackers already know.[4]

Information declassification constructs can be classified in four orthogonal dimensions: what information is released, who is authorized to access the information, where the information is released, and when the information is released.[4]
##### What

##### Who

##### Where

##### When

##### Declassification Approaches for Implicit Flows
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification_approaches_for_implicit_flows

An implicit flow occurs when code whose conditional execution is based on private information updates a public variable. This is especially problematic when multiple executions are considered since an attacker could leverage the public variable to infer private information by observing how its value changes over time or with the input.


### Information Flow Control Systems
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Information_flow_control

A mechanism for _information flow control_ is one that enforces information flow policies. Several methods to enforce information flow policies have been proposed. Run-time mechanisms that tag data with information flow labels have been employed at the [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") level and at the [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") level. Static program analyses have also been developed that ensure information flows within programs are in accordance with policies.

Both static and dynamic analysis for current programming languages have been developed. However, dynamic analysis techniques cannot observe all execution paths, and therefore cannot be both sound and precise. In order to guarantee noninterference, they either terminate executions that might release sensitive information or they ignore updates that might leak information.

A prominent way to enforce information flow policies in a program is through a [security type system](https://en.wikipedia.org/wiki/Security_type_system "Security type system"): that is, a type system that enforces security properties. In such a sound type system, if a program type-checks, it meets the flow policy and therefore contains no improper information flows.
#### Security Type System
> [!links]
> ↗ [Type Theory (类型论)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)
> ↗ [Type Analysis](../../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Type%20Analysis/Type%20Analysis.md)
> ↗ [Type and Effect Systems](../../🦖%20Type%20and%20Effect%20Systems/Type%20and%20Effect%20Systems.md)

> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Security_type_system

In a programming language augmented with a security type system every expression carries both a type (such as boolean, or integer) and a security label.

Following is a simple security type system from [1] that enforces non-interference. The notation $\vdash exp : \tau$ means that the expression $exp$ has type $\tau$. Similarly, $[sc] \vdash C$ means that the command $C$ is typable in the security context $sc$.
$$
\begin{aligned}

[E1\!-\!2]\quad 
&\frac{}{\vdash exp : high}
\qquad
\frac{h \notin Vars(exp)}{\vdash exp : low}
\\[10pt]

[C1\!-\!3]\quad 
&[sc] \vdash skip
\qquad
[sc] \vdash h := exp
\qquad
\frac{\vdash exp : low}{[low] \vdash l := exp}
\\[10pt]

[C4\!-\!5]\quad 
&\frac{[sc] \vdash C_1 \quad [sc] \vdash C_2}{[sc] \vdash C_1; C_2}
\qquad
\frac{\vdash exp : sc \quad [sc] \vdash C}{[sc] \vdash while\ exp\ do\ C}
\\[10pt]

[C6\!-\!7]\quad 
&\frac{\vdash exp : sc \quad [sc] \vdash C_1 \quad [sc] \vdash C_2}{[sc] \vdash if\ exp\ then\ C_1\ else\ C_2}
\qquad
\frac{[high] \vdash C}{[low] \vdash C}

\end{aligned}
$$

Well-typed commands include, for example,
$$
[low] \vdash if\ l = 42\ then\ h := 3\ else\ l := 0.
$$

Conversely, the program
$$
l := 0;\ while\ l < h\ do\ l := l + 1
$$

is ill-typed, as it will disclose the value of variable $h$ into $l$.

Note that the rule $[C7]$ is a subsumption rule, which means that any command that is of security type $high$ can also be $low$. For example, $h := 1$ can be both $high$ and $low$. This is called polymorphism in type theory. Similarly, the type of an expression $exp$ that satisfies $h \notin Vars(exp)$ can be both $high$ and $low$ according to $[E1]$ and $[E2]$ respectively.



## Taint Analysis
↗ [Taint Analysis](Taint%20Analysis.md)



## Ref
