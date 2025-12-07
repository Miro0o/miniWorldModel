# Program Abstraction & Abstract Interpretation

[TOC]



## Res
### Related Topics
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
↗ [Formal Semantics and Programming Language](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)


### Other Resources



## Intro
### Program Semantics & Program Interpretation
↗ [Formal Semantics and Programming Language](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md) (program semantics, abstraction, and interpretation)

↗ [(Formal) Model Checking](../../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
- transition systems
- semantics of transition systems:
	- execution and traces
	- computational tree

Program interpretation: precisely same semantics
Abstract interpretation: approximated semantics


### Program Abstraction & Safe-Approximation
> 🔗 https://www.bilibili.com/video/BV1b7411K7P4

The essence of static code analysis: 
- **Abstraction**
	- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.57.45.png)
- **Safe-approximation**
	- Galois connection:
		- ![](../../../../../../../../Assets/Pics/Pasted%20image%2020251010000047.png)
		- A Galois Connection is a connection between two ordered sets, with a concretion γ and an abstraction α function. Mathematically, Galois connection only describe relations between two ordered sets. Here, in program abstraction, we use Galois connection to describe such two specific ordered sets of concrete domain and abstract domain. But don't mis-understand that concretion and abstraction are concepts from Galois connection. They are not.
	- Transfer functions (abstract functions)
		- In static analysis, transfer functions define how to evaluate different program statements on abstract values.
		- Transfer functions are defined according to “analysis problem” and the “semantics” of different program statements.
		- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2000.59.24.png)
	- Control flows (branches)
		- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-09%20at%2001.00.14.png)


### Abstract Interpretation of Program
> 📖 Static Program Analysis  | Anders Møller and Michael I. Schwartzbach

The theory of abstract interpretation provides a solid mathematical foundation for what it means for an analysis to be sound, ==by relating the analysis specification to the formal semantics of the programming language==. Another use of abstract interpretation is for understanding whether an analysis design, or a part of an analysis design, is as precise as possible relative to a choice of analysis lattice and where imprecision may arise. The fundamental ideas of abstract interpretation were introduced by Cousot and Cousot in the 1970s [CC76, CC77, CC79b].

> 🔗 https://en.wikipedia.org/wiki/Abstract_interpretation

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **abstract interpretation** is a theory of [sound approximation](https://en.wikipedia.org/wiki/Soundness "Soundness") of the [semantics of computer programs](https://en.wikipedia.org/wiki/Semantics_of_programming_languages "Semantics of programming languages"), based on [monotonic functions](https://en.wikipedia.org/wiki/Monotonic_function#Monotonicity_in_order_theory "Monotonic function") over [ordered sets](https://en.wikipedia.org/wiki/Ordered_set "Ordered set"), especially [lattices](https://en.wikipedia.org/wiki/Lattice_\(order\) "Lattice (order)"). It can be viewed as a partial [execution](https://en.wikipedia.org/wiki/Execution_\(computers\) "Execution (computers)") of a [computer program](https://en.wikipedia.org/wiki/Computer_program "Computer program") which gains information about its semantics (e.g., [control-flow](https://en.wikipedia.org/wiki/Control-flow_analysis "Control-flow analysis"), [data-flow](https://en.wikipedia.org/wiki/Data-flow_analysis "Data-flow analysis")) without performing all the [calculations](https://en.wikipedia.org/wiki/Calculation "Calculation").

Its main concrete application is formal [static analysis](https://en.wikipedia.org/wiki/Static_code_analysis "Static code analysis"), the automatic extraction of information about the possible executions of computer programs; such analyses have two main usages:
- inside [compilers](https://en.wikipedia.org/wiki/Compiler "Compiler"), to analyse programs to decide whether certain [optimizations](https://en.wikipedia.org/wiki/Optimization_\(computer_science\) "Optimization (computer science)") or [transformations](https://en.wikipedia.org/wiki/Program_transformation "Program transformation") are applicable;
- for [debugging](https://en.wikipedia.org/wiki/Debugging "Debugging") or even the certification of programs against classes of bugs.

Abstract interpretation was formalized by the French computer scientist working couple [Patrick Cousot](https://en.wikipedia.org/wiki/Patrick_Cousot "Patrick Cousot") and [Radhia Cousot](https://en.wikipedia.org/wiki/Radhia_Cousot "Radhia Cousot") in the late 1970s.



## 🎯 Program Analysis Abstraction & Interpretation - In Mathematics
### Prerequisite 👨🏼‍🍼
#### Posets & Lattice
> Prerequisite or background knowledge 🤔
> ↗ [Algebraic Structure & Abstract Algebra & Modern Algebra /Group, Ring, and Field ⭐](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md#Group,%20Ring,%20and%20Field%20⭐)
> ![Screenshot 2023-01-05 at 2.42.36 PM](../../../../../../../../Assets/Pics/Screenshot%202023-01-05%20at%202.42.36%20PM.png)
> <small>【群环域串讲】 <a>https://www.bilibili.com/video/BV1L84y1k7Yc/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d</a></small>


↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
↗ [Lattice (Set Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)


> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.3
> **Lattice**

A lattice is partially ordered sets $(L,\sqsubseteq)$, with two extra operators $\lfloor \rfloor$ and $\lceil \rceil$. 
- $\lfloor \rfloor$ is the **least upper bound (lub), or join**.  $a\lfloor \rfloor b$, meaning that $$\forall c. \ a\sqsubseteq c\land b\sqsubseteq c \implies a\lfloor \rfloor b \sqsubseteq c.$$
- $\lceil \rceil$ is the **greatest lower bound (glb), or meet**. $a\lceil \rceil b$ meaning that $$\forall c. \ c\sqsubseteq a\land c\sqsubseteq b \implies c \sqsubseteq a\lceil \rceil b.$$
Furthermore, this implies that there exist a least bound $\bot=\lceil\rceil L$ and a greatest bound $\top=\lfloor\rfloor L$, from which we have the following identities: $$\begin{aligned}
& \top\lceil\rceil a = a = a\lfloor\rfloor \bot \\
& \top\lfloor\rfloor a = \top \\
& a \lceil\rceil\bot = \bot
\end{aligned}$$
We can use Hasse Diagram to draw a lattice:
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.42.08.png)
The reason why they are called latices is that they can be drawn using Hasse digrams which gives these nice structures, which looks like a wooden lattice.
##### Monotonicity & Fixed Point Axiom
↗ [Lattice (Set Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)
##### May /Must Analysis: A Lattice View
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.24.34.png)
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.24.53.png)
#### Galois Connection & Safe-Approximation ⭐
> ↗ [Galois Theory](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Ring%20Theory%20&%20Ring-Like%20Algebraic%20Structure/Field%20Theory%20&%20Field-like%20Algebraic%20Structure/Galois%20Theory.md)
> ↗ [Category Theory (范畴论)](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)
> 
> 🔗 [Galois connection - Wikipedia](https://en.wikipedia.org/wiki/Galois_connection)

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.4

![](../../../../../../../../Assets/Pics/Pasted%20image%2020251010000047.png)
<small>A Galois Connection is a connection between two ordered sets, with a concretion γ and an abstraction α function. Mathematically, Galois connection only describe relations between two ordered sets. Here, in program abstraction, we use Galois connection to describe such two specific ordered sets of concrete domain and abstract domain. But don't mis-understand that concretion and abstraction are concepts from Galois connection. They are not.</small>

A **Galois connection** is a relationship between two ordered sets $(C, \sqsubseteq_C)$ and $(A, \sqsubseteq_A)$, where we can abstract information from the concrete domain into the abstract domain $\alpha : C \to A$ while preserving the order if going back $\gamma : A \to C$. $\alpha$ explains how to abstract a value, and $\gamma$ explains what the abstraction means.

Because the abstraction might be lossy ("abstraction" 🤔 ), it is not the case that if we abstract a value we get back the same concrete value $\gamma(\alpha(c)) \ne c$. What we can be sure, however, is the preservation of the order, as pointed out by Galois Connection. ==A Galois connection satisfies the following rule: $$ \forall c \in C, a \in A.\; c \sqsubseteq_C \gamma(a) \Leftrightarrow \alpha(c) \sqsubseteq_A a $$==
It states that, if we have a concrete value $c$, and abstract it $\alpha(c)$, then any value “larger” than this abstraction $a$ will concretize to a value $\gamma(a)$ that is “larger” than the original value (see figure above). At first this might not seem useful, but ==if we satisfy this rule, we get the following laws for free==: $$ \begin{aligned}
c \sqsubseteq_C \gamma(\alpha(c))) \quad & \text{– if we abstract we only increase in size} \\
\alpha(\gamma(a)) \sqsubseteq_A a \quad & \text{– if we concretize we only decrease in size} \\
\alpha(\gamma(\alpha(c))) = \alpha(c) \quad & \text{– we don’t keep losing information (only lose once)} \\
\gamma(\alpha(\gamma(a))) = \gamma(a) \quad & \text{– ... above applies for both directions} \\
\gamma(a_1 \sqcup_A a_2) = \gamma(a_1) \sqcup_C \gamma(a_2) \quad & \text{– $\gamma$ preserves joins} \\
\alpha(c_1 \sqcap_C c_2) = \alpha(c_1) \sqcap_A \alpha(c_2) \quad & \text{– $\alpha$ preserves meets}
\end{aligned} $$
The first two rules give us confidence that whatever abstraction we choose, we **only lose information**, never create it. And the second two rules give us confidence that we **don’t keep losing** that information, i.e. we only lose them for once.

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3

==In practice, Galois connections allows us to map our infinite domain of may or must analyses into a more manageable abstract domain, while giving us guarantees that we are still correctly over- or under-estimating (safe-approximation).==
##### Adjunction and Testing
> ↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
> ↗ [Category Theory (范畴论)](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md) "adjunct functor"

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3

==Galois connections is actually a concrete example on a mathematical construct called **adjunction**.== Adjunction is one of the most useful and unappreciated mathematical structures in computer science. One example is testing technique for testing data readers.

While in most cases we would expect, anything we pretty print to be parsable to the same value. That is not always the case as line numbers might differ or some data are lost in the translation. It should, however, always hold that

```Python
# Most of the time
parse(pretty(a)) == a 

# Always
pretty(parse(pretty(a))) == pretty(a)

# Bonus for all strings s:
parse(pretty(parse(s))) == parse(s)
```
#### Abstract Operations
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.5Abstract 
> Operations in the Sign Domain. See below "👉 The Sign Analysis"

Finally, we have reached the fun part. Before, we only defined how objects (operated by operators) in a program can be mapped from concrete domain to abstract domain. **However, remember a program consist of both objects and operations: $P(obj, opr)$. Or, equivalently, each state $S$ of a program $P$ consists of variables and operations, $S(var, opr)$ .** (The state machine semantics of program, ↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md))

We can now define **operations in the abstract domain** that mimic the operations in the concrete domain. Because our concrete domain is the set of integers, we can define $+_{2^{i32}}$ as the operation over the product: $$ A +_{2^{i32}} B = \{\, a + b \mid a \in A, b \in B \,\} $$
For example: $$ \{1, 3\} +_{2^{i32}} \{0, 10\} = \{1, 3, 11, 13\} $$
Now we can also define the **plus abstract domain**: $$ \begin{array}{lll}
\{+\} +_{\text{Sign}} \{+\} &=& \{+\} & \{+\} +_{\text{Sign}} \{-\} &=& \{-, +, 0\} \\
\{+\} +_{\text{Sign}} \{0\} &=& \{+\} & \{0\} +_{\text{Sign}} \{+\} &=& \{+\} \\
\{0\} +_{\text{Sign}} \{-\} &=& \{-\} & \{0\} +_{\text{Sign}} \{0\} &=& \{0\} \\
\{-\} +_{\text{Sign}} \{+\} &=& \{-, +, 0\} & \{-\} +_{\text{Sign}} \{-\} &=& \{-\} \\
\{-\} +_{\text{Sign}} \{0\} &=& \{-\} & \text{... and many more}
\end{array} $$
But how do we know if we have implemented our abstract operation correctly? Since we want to **over-approximate** our operations, we know that computing in our abstract domain should never **under-approximate**: $$ A +_{2^{i32}} B \subseteq \gamma\big(\alpha(A) +_{\text{Sign}} \alpha(B)\big) $$
The above equation requires us to create huge sets of values. Instead, we can use our **Galois connection** to rewrite the equation to see that we only have to show the following. ==Essentially, abstracting the result of an operation should be smaller than abstracting and then doing the operation in the abstract domain:== $$
\alpha(A +_{2^{i32}} B) \subseteq \alpha(A) +_{\text{Sign}} \alpha(B) $$

### 👉 Bounded Static Abstraction & Interpretation
> Cousot, Patrick; Cousot, Radhia (1977). _Abstract interpretation._ [`doi:10.1145/512950.512973`](https://www.doi.org/10.1145/512950.512973) [link](https://doi.org/10.1145/512950.512973)
> Cousot, Patrick; Cousot, Radhia (1979). _Systematic design of program analysis frameworks._ [`doi:pdf/10.1145/567752.567778`](https://www.doi.org/pdf/10.1145/567752.567778) [link](https://doi.org/pdf/10.1145/567752.567778)
> Nielson, Hanne Riis; Nielson, Flemming (2007). _Semantics with Applications._

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3

In practice, Galois connections allows us to map our infinite domain of may or must analyses into a more manageable abstract domain, while giving us guarantees that we are still correctly over- or under-estimating (safe-approximation). In the following example, we explain above points by instantiate how to map static analysis (our $\text{step}$ function) from concrete domain to abstraction. 

> ==Once we leave the concrete domain and enter the abstract domain, the analysis done here (abstraction domain) is what we call the "abstract interpretation"==, as oppose to "program interpretation", which happens at the concrete domain where you interpret a program using different semantics.

Let's assume we are building a **may analysis**. Since we want to over-approximate our $\text{step}()$ function, (recall ↗ [SCA (Static Code Analysis) & SAST /BSA in Formal Definition](../SCA%20(Static%20Code%20Analysis)%20&%20SAST.md#BSA%20in%20Formal%20Definition)) we therefore introduce an abstract domain $(A, \sqsubseteq_A)$ that has an abstract stepping function $\text{step}_A()$.  We assume the Galois connection $(2^{\text{Trace}}, \subseteq) \leftrightarrow^{\alpha}_{\gamma} (A, \sqsubseteq_A)$.  We can use this new abstract stepping function to define a **bounded static analysis** of depth $n$:  $\text{BSA}_A^n = \text{step}_A^n$. We define $\text{step}_A^n$ recursively: 
$$\begin{aligned}
& \text{step}_A^0 = \alpha(I_P) \\
& \text{step}_A^n = \text{step}_A(\text{step}_A^{n-1}) \sqcup_A \text{step}_A^{n-1}
\end{aligned}
$$
We can prove by induction over $n$ that stepping in the abstract domain is in fact a may analysis $\text{BSA}^n \subseteq \gamma(\text{BSA}_A^n)$, given that 
$$
\text{step}(T) \cup T \subseteq \gamma(\text{step}_A(\alpha(T)) \sqcup_A \alpha(T)).
$$
> **Proof?**
> Using induction over $n$, show that the following is true:  $$ \text{step}(T) \cup T \subseteq \gamma(\text{step}_A(\alpha(T)) \sqcup_A \alpha(T)) \implies \text{BSA}^n \subseteq \gamma(\text{BSA}_A^n) $$

We can also show that $\text{step}(T) \subseteq \gamma(\text{step}_A(\alpha(T)))$ is a **stronger statement**, and is sufficient to prove the above, by noting that $\text{step}(T) \cup T \subseteq \gamma(\text{step}_A(\alpha(T)) \sqcup_A \alpha(T)).$ From $T \subseteq \gamma(\alpha(T))$, and using that $\gamma$ preserves joins, we get: 
$$ \text{step}(T) \cup T \subseteq
\gamma(\text{step}_A(\alpha(T)) \cup \gamma(\alpha(T))) 
= 
\gamma(\text{step}_A(\alpha(T)) \sqcup_A \alpha(T)) $$
Finally, as it is very hard to talk about the concrete domain (since it is infinite), we can use the Galois connection again to see that we only have to show: 
$$ \alpha(\text{step}(T)) \sqsubseteq_A \text{step}_A(\alpha(T))$$
The above statement basically means, the abstraction of our original **program interpretation**, is less ($\sqsubseteq_A$) than the **abstract interpretation** of the original program.

> To show this, follow sections below: state abstraction, per-instruction abstraction, per-variable abstraction, and variables abstractions.
#### Abstraction
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3.5

In this section, we talk about some common prototypes of program abstraction, including state abstraction, per-instruction (per-pc) abstraction, and per-variable abstraction.

Further, as shown in Galois connection, these abstraction composes. This mean we can create one long chain: (`[A]` means abstraction)
$$\begin{aligned} (2^{Trace}, \ \subseteq) & \leftrightarrow^\alpha_\gamma \ (2^{State}, \subseteq) &\text{State Abstraction} \\
& \leftrightarrow^\alpha_\gamma \ (P_C,\sqsubseteq_{P_C}) &\text{Per-Instruction Abstraction} \\
& \leftrightarrow^\alpha_\gamma \ (P_V,\sqsubseteq_{P_V}) &\text{Per-Variable Abstraction} \\
& \leftrightarrow^\alpha_\gamma \ (P_V[A], \sqsubseteq_{P_V[A]}) &\text{Variables Abstraction}
\end{aligned}$$
##### The State Abstraction
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:state-abstraction

The first, and most useful abstraction, is the **state abstraction**. Here we throw away everything from the trace except the final state (noted as $\text{State or } S$) of the trace: 
$$ (2^{\text{Trace}}, \subseteq) \leftrightarrow^{\alpha}_{\gamma} (2^{\text{State}}, \subseteq) $$
We can define the abstraction as the set of end states of the traces and the concretion as the set of traces that end in one of the states: 
$$\begin{aligned}
& \alpha(T) = \{ \tau_{|\tau|} \mid \tau \in T \} \\
& \gamma(S) = \{ \tau \mid s \in S, \tau \in \text{Trace}, \tau_{|\tau|} = s \}
\end{aligned}$$
This is a useful abstraction for us, because we do not need to know where the trace came from to figure out if an assertion error exists in the program — only that a trace ends in an assertion error.

We can now define $\text{step}_{\text{State}}$ as only stepping the final state of each trace: 
$$\text{step}_{\text{State}}(S) = \{ s' \mid s \in S, \delta(s, s') \}$$
> Check that $\text{step}_{\text{State}}$ is an abstract operation of `step`:  $$\alpha(\text{step}(T)) \subseteq \text{step}_{\text{State}}(\alpha(T))$$

Now let $\text{BSA}_{\text{State}}^n = \text{step}_{\text{State}}^n(\alpha(I_P))$. It is now clear by induction on $n$ that $\text{BSA}^n \subseteq \gamma(\text{BSA}_{\text{State}}^n)$. So if there exists an assertion error within $n$ steps, then there exists a trace $\tau \in \text{BSA}^n$ such that $\tau_{|\tau|} = \text{err}(\text{‘assertion error’}) \quad\text{and}\quad |\tau| \le n$.

From our Galois connection we can see that  
$$\begin{aligned}
\{ \tau \mid \text{err}(\text{‘assertion error’}) \} 
& \subseteq \text{BSA}^n 
\subseteq \gamma(\text{BSA}_{\text{State}}^n) \\

\implies 
& \alpha(\{ \tau \mid \text{err}(\text{‘assertion error’}) \}) \\
& \subseteq \{ \text{err}(\text{‘assertion error’}) \} \\
& \subseteq \text{BSA}_{\text{State}}^n
\end{aligned}$$
Which means that if $\text{err}(\text{‘assertion error’}) \notin \text{BSA}_{\text{State}}^n$, then $\{ \tau \mid \text{err}(\text{‘assertion error’}) \} \notin \text{BSA}^n$, Which is exactly the guarantee we are looking for in a **may analysis**.
##### The Per-Instruction Abstraction
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:per-instruction-abstraction

In this abstraction, we want to take advantage of executing the same instruction in states with the same program counter.

Let's focus on a JVM **without a method stack (call stack, i.e. no function calls)**, which means that every state is abstracted as a triple $\langle \sigma, \lambda, \iota \rangle$, where $\sigma$ stands for registers, $\lambda$ stands for memory, and $\iota$ stands for the PC (program counter) of current state (recall the state machine semantics of a program in ↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)). 

We can abstract this by collecting the states per $\iota$. Let $\mathbf{P_c} = \iota \rightarrow 2^{\text{State}}$ be a mapping from program counters to the program state space. $\mathbf{P_c}$ is a lattice with partial order $\sqsubseteq_{\mathbf{P_c}}$ where one mapping is less than ($\sqsubseteq_{\mathbf{P_c}}$) another if all states are smaller than the other, and $\bigsqcup_{\mathbf{P_c}}$ is pointwise set union ($\cup$) of states. Then we have our Galois connection between the original program and per-instruction abstraction:
$$(2^{\text{State}}, \subseteq) \leftrightarrow^{\alpha}_{\gamma} (\mathbf{P_c}, \sqsubseteq_{\mathbf{P_c}})$$

Now we can write a stepping function that can step all states with the same instruction at once, $\text{step}_{\iota}$, and then merge the result into the other states:
$$\text{step}_{\mathbf{P_c}}(C) =
\bigsqcup_{\mathbf{P_c}}
\left\{

\iota' \mapsto 
\left\{
\langle \sigma', \lambda', \iota' \rangle
\right\}
\ \middle| \

\begin{aligned}
& (\iota \mapsto S) \in C, \\
& S' = \text{step}_{\iota}(S), \\
& \langle \sigma', \lambda', \iota' \rangle \in S'
\end{aligned}

\right\}$$
##### The Per-Variable Abstraction
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:per-variable-abstraction

We are now faced with our first hard choice. 🤔

We would love to use the **Sign abstraction** that we built in the previous section. One way of doing that is compressing the state, so that instead of having a set of states, we distribute the content of the locals (variables in current state) and stack (method stack, or operators).

So instead of having a set of states, we have a **pair of abstract locals and abstract stack**.  
The abstract locals are now a mapping from natural numbers to a power set of possible values (variables in current state), while the abstract stack is a stack of possible values (operators?): 
$$\mathbf{P_v} = \iota \rightarrow
\{(\mathbb{N} \mapsto (2^{V_a})) \times (2^{V_a})^* \}\cup \{ \text{ok}, \text{err}('.') \}$$

Since the stack and the locals are typed at each instruction, these are actually sets of integers, which we know how to abstract using the **Sign abstraction**.

Furthermore, $\mathbf{P_v}$ is also a partially ordered set, by pointwise comparing the set of variables, and a lattice by pointwise joining and meeting the sets of variables.

We can also see that this is a Galois connection: 
$$\mathbf{P_c} \leftrightarrow^{\alpha}_{\gamma} \mathbf{P_v}$$

The problem with this abstraction -- and the reason this choice is hard -- is that this is the first abstraction that **severely over-approximates** our problem. 

(More about this next time.)
###### Variable Abstractions
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3.4

Finally, we are at a point where we can use our Sign Abstraction, by using it to abstract the sets of variables.
$$\mathbf{P_v} [A] = \iota \rightarrow
\{(\mathbb{N} \mapsto A) \times A^* \}\cup \{ \text{ok}, \text{err}('.') \}$$
If we can see $A$ is an abstraction of $2^{V_\sigma}$, then we also get a Galois connection from $\mathbf{P_V}$ to $\mathbf{P_V}[A]$: $$(2^{\mathbf{V}_\sigma}, \subseteq) 
\leftrightarrow^{\alpha}_{\gamma} (
A, \sqsubseteq_A)

\implies

(\mathbf{P_V}, \sqsubseteq_{\mathbf{P_V}})
\leftrightarrow^{\alpha}_{\gamma} 
(\mathbf{P_V}[A], \sqsubseteq_{\mathbf{P_V}[A]})$$
Specifically, we get this in our Sign Analysis: 
$$(\mathbf{P_V}, \sqsubseteq_{\mathbf{P_V}})
\leftrightarrow^{\alpha}_{\gamma} 
(\mathbf{P_V}[\text{Sign}], \sqsubseteq_{\mathbf{P_V}[\text{Sign}]})$$
#### Abstract Interpreter Implementation
> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:3.2

Now, we are going to look at what an implementation might look like. Because we are going to step all states at the same time, we need an `manystep` function ([Bounded Abstract Interpretation (§3)](https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:bsa)). Here we take a set of states (abstracted by `A`), and yield all the states (or final states) which could be produced by it ([The State Abstraction (§3.1)](https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:state-abstraction)).

```Python
def manystep(sts : StateSet[A]) -> Iteratable[A | str]:
  ...
```

To run our bounded static analysis, we first have to compute the initial state, from the initial method (`methodid`), then we can simply run this a bounded number of times, and joining the results every time.

```Python
final = {}
sts = A.initialstate_from_method(methodid)
for i in range(MAX_STEPS):
  for s in manystep(sts):
    if isinstance(s, str):
      final.add(s)
    else:
      sts |= s
log.info(f"The following final states {final} is possible in {MAX_STEPS}")
```
##### Grouping Per Instruction
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:2.1

The first thing we do is we ask the state set to break it down per instruction (see [The Per-Instruction Abstraction (§3.2)](https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:per-instruction-abstraction)), we do this so we can process the states at the same instruction at the same time.

```Python
for pc, state in sts.per_instruction():
  match bc[pc]:
    case jvm.Binary(type=jvm.Int(), operant=opr):
      ...
```
##### Grouping Per Variable
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:2.2

At this point we would like to step the states according to the instructions, but we are at an impasse. We need to get the variables out of the set of states.

One option (as we used in [The Per-Variable Abstraction (§3.3)](https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:per-variable-abstraction)) is to merge all the states and create a single state with merged variables. But this comes at a loss of precision (see [Dependent Values (§1)](https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:dependent-variables)), or we can ask the states to group themselves by the variables needed.

Here we use a group method which takes the set of states and group them by some query. By allowing the state to choose how group themselves, it can choose the most optimal grouping. In our case, we want to pop two integers:

```Python
for ([va1, va2], after) for state.group(pop=[jvm.Int(), jvm.Int()]):
  ...
```
##### Doing The Operation
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:2.3

At this point we have two abstract integers which we then use to do our computation. The computation is done using the state.binary method, which returns all possible pairs of values and states or failures. _Even though we already have the abstract values `va1` `va2` doing the operation on them might affect some other parts of the state, see [Dependent Values (§1)](https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:dependent-variables)_. If the result is not a failure, we update the state with the new value, using an update method.

```Python
for res in after.binary(opr, va1, va2):
  match res with 
    case (va3, after):
        yield after.frame.update(push=[va3], pc=pc+1)
    case err:
        yield err
```
##### Constraining The Space
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:2.4

Sometimes like with `Ifz`, operations sometimes can return multiples states. If we compare an abstract value with 0, it can both be true that some variables are smaller and some are larger. However, this might also have implications for the rest of the state. We need to return multiple states, one if something bad happens and one if it does not.

```Python
case jvm.Ifz(condition=con, target=target):
  for ([va1], after) for state.group(pop=[jvm.Int()]):
    for res in after.binary(con, va1, 0):
      match res:
        case (True, after):
          yield after.frame.update(pc=target)
        case (False, after):
          yield after.frame.update(pc=pc+1)
        case err:
          yield err
```


### 👉 Unbounded Static Abstraction & Interpretation
> 🤖 Google Search AI Mode

"Unbounded static abstraction" is a concept in program analysis, referring to the challenge of creating a finite, static model of a program that can handle potentially infinite, or "unbounded," data, such as memory from the heap. Unlike static memory, which has a fixed size, heap memory can grow unpredictably, and standard analysis techniques struggle to represent it with a finite abstraction. Static analysis must therefore use approximation techniques (abstraction here) to model this unbounded behavior while remaining sound and terminating.
#### Fixed-Point Axiom
↗ [Lattice (Set Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)
#### The Widening Operator (The Interval Abstraction as An Example)
> Please first check below "👉 Interval Abstraction -- Unbounded Analysis"
>  
>  ([Nielson (2020)](https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#ref:nielson2020program) at page 110)
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:3.3

Because, we are not guaranteed to reach a fixed point with the interval abstraction, we need to force it. This is known as the widening operator, the goal of the widening operator $∇$ is to dramatically over approximate joins in a way that we are guaranteed a fixed point in a finite number of steps.

One way of adding a widening operator to the interval abstraction is to use a constant set, often referred to as $\mathbb{K}$. This set contains all the constants in the program or file of interest. This is like the dictionaries we used in the dynamic analysis.

To define the widening operator (for interval abstraction), we define two operators $\min_K J$ and $\max_K J$ which, given a set of integers $J$, pick the largest and smallest, respectively, $k \in K \cup \{\infty, -\infty\}$ such that $k \le \min J$ and $k \ge \max J$.
$$ [i, j] \nabla [k, h] =
\left[
  \min_K \{ i, k \},
  \max_K \{ j, h \}
\right] $$

We can see that we can only apply this operator a finite number of times until we either get $\infty$ or $-\infty$.

Now, when running our analysis, we use the $\nabla$ operator instead of the $\sqcup$ operator, and we can continue computing until we reach a fixed point.

> Definition 3: K-Interval Abstraction
> 
> The interval abstraction $\text{Itval}_K$ is a tuple of two numbers $i, j$,   representing the interval of integers between $[i, j]$, both inclusive,  using a set of known boundaries $K$. $$\begin{aligned} \alpha(S) & = [\min S, \max S]  \\
\gamma([i, j]) & = \{ n \in \mathbb{Z} \mid j \ge n \le i \} \\
[i, j] \sqsubseteq_{\text{Itval}_K} [k, h] & \equiv k \le i \land j \le h \\
[i, j] \sqcup_{\text{Itval}_K} [k, h] & \equiv [\min\{i, k\}, \max\{j, h\}] \\
[i, j] \sqcap_{\text{Itval}_K} [k, h] & \equiv [\max\{i, k\}, \min\{j, h\}] \\
\top_{\text{Itval}_K} & = [-\infty, \infty] \\
\bot_{\text{Itval}_K} & = [\infty, -\infty] \\
[i, j] \nabla_{\text{Itval}_K} [k, h] & =
\left[
  \min_K \{ i, k \},
  \max_K \{ j, h \}
\right]
\end{aligned}$$

> Activity 3: Define a Widening Operator  
> Include a widening operator in your analysis, so that you only have to join a finite number of times.
##### Proving Widening
Proving that a widening operator is correct requires some carefulness.  
We have to prove two properties:
1. That $\nabla$ increases in size, and  
2. That we can only apply the $\nabla$ operator a finite number of times before a fixpoint is reached.
$$
\begin{aligned} & \forall a, b \in A. \; a \subseteq (a \nabla b) \land b \subseteq (a \nabla b) \\
& \exists n \in \mathbb{N}, \forall x \in A^{n+1},
\; a \in A. \;
(a_0 \nabla a_1) \nabla a_2 \dots \nabla a_n
= ((a_0 \nabla a_1) \nabla a_2) \dots \nabla a_{n+1}
\end{aligned}
$$
##### The Worklist Algorithm
> ([Nielson (2020)](https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#ref:nielson2020program) at page 59)
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:3.4

Currently our algorithm is a little slow, as we essentially in lockstep iterate over the entire program for every step.

This is of cause silly, as we would much rather only handle unprocessed events. Consider you have a stepping function from a program locations and an abstract state to a set of program locations and abstract states, which needs to joined at those points: $$steps: PC\times\overset{-}{State}\to2^{PC\times\overset{-}{State}}$$
Too extend our current implementation for this, we can modify the `per_instruction` method in `StateSet` to only emit

```Python
class StateSet[A]:
  per_inst : dict[PC, A]
  needswork : set[PC]

  def per_instruction(self):
    for pc in self.needswork: 
      yield (pc, self.per_inst[pc])

  # sts |= astate
  def __ior__(self, astate):
    old = self.per_inst[astate] 
    self.per_inst[astate.pc] |= astate
    if old != self.per_inst[astate.pc]:
      needswork.add(astate.pc)
  
  ...
```

This approach uses significantly less instructions than running all steps every time, and still produce the same results.
##### The Reverse Post-Order Traversal
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:3.4.1

However there is still some work we can do to improve the algorithm. For-example, when you analyse the following program:

```Java
void fn() { 
  int i = 0;
  while (i < 100) { 
    i += 1;
  }
  // Many operations on i.
}
```

There is no reason to update the states after the while loop, before we have reached fixpoint of the while loop.

The correct order to do this computation is in [reverse post-order](https://en.wikipedia.org/wiki/Tree_traversal). If you do this you are guranteed to process any loops first.


### Context Sensitive Analysis & Support For Procedure Calls
> ↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)
> ↗ [Interprocedural Analysis](../Data%20Flow%20Analysis/📲%20Inter-procedural%20Analysis/Interprocedural%20Analysis.md)
> ↗ [Context-Sensitive Pointer Analysis](../Pointer%20Analysis%20&%20Alias%20Analysis/Context-Sensitive%20Pointer%20Analysis.md)

> 🔗  [Smaragdakis (2014)](https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html#ref:smaragdakis2014introspective)
> 🔗 [Might (2010)](https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html#ref:might2010resolving)

> 🔗 https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html

**Procedure Calls Are Complicated**
In our previous chapters, every time we encountered a jump instruction it was to a known location. This is called a statically known jump. If the jump is only known at run-time, we call it a dynamic jump. Method calls, or specifically returning from a method, are one of the most common cases of dynamic control flow. On a static method call the jump site is statically known, however, when we want to return, it depends on the caller. So when running a static analysis we don't know where to return the results.

This is best illustrated by an example:

```c
int id(int i) { 
  return i; // Where to return to?
} 

int main() { 
  int x = id(1);
  int y = id(0);
  return x + y;
}
```

Of cause this problem gets even worse if we have dynamic dispatching, like when we call a method on an object. In this case we don't even know the call site.


**The Trivial Solution: In-lining**
The naive solution to this problem is to inline the method call. In theory, this means expanding the content of the callee-method, the method that is being called, inside the caller-method, and then continuing normal abstract interpretation.

```Java
int id(int i) { 
  return i; // Where to return to?
} 

int main() { 
  int x = id(1);
  int y = id(0);
  return x + y;
}
```

Becomes
```Java
int main() { 
  return 1 + 0;
}
```

This works very well in some situation, and is actually the preferred way to do optimizations in compiles as we can specialise the method call to the exact situation is is called in. However, the method has many drawbacks, it can be hard to do the in-lining correctly, we can not reuse the analysis across calls, and worst of all we can not handle recursive calls.


**Abstract Call Plumbing**
An alternative solution is to think about how the computer actually calls a method. When the computer calls a method, it stores a return address on the stack. When we return from a method, we use this return address as the target.

So one solution to the call problem, is to keep track of a set of return address alongside the current state. When we now reach a return call, we have a set of targets. We can use this set to update the state with the return value at each of those targets.

In theoretical terms, your state is now a map from program points to a set of return states ($2^ι$) as well as an abstraction of the powerset of states $\overset{-}{state}$. $$ι↦2^ι\times\overset{-}{state}$$
Notice that we do not have to abstract the set of return addresses, as it is finite (and normally quite small, e.g ., less that 100).


By keeping track of an over-approximation of return locations we can run abstract analysis as we are used to. After running the analysis for the first call we get the following:

```Java
int id(int i) { 
  // { main:1} x {+}
  return i;       
  // updates the results of main:1 with {+}
} 

int main() { 
  int x = id(1); // result {+} 
  int y = id(0); // yet not computed
  return x + y;  // yet not computed
}
```

And after doing the second call we get the following:
```Java
int id(int i) { 
  // { main:1, main:2} x {0, +}
  return i;       
  // updates the results of main:1 and main:2 with {0, +}
} 

int main() { 
  int x = id(1); // result {0, +} 
  int y = id(0); // result {0, +} 
  return x + y;  // result {+}
}
```

However, as we can see this comes at a cost. Keeping only a single instance of a method, means that every use of that method leaks into every other. If we look at the caller side of the problem we get the following:

If we change the + with a /, we can see that our analysis finds a bug, even though it can never happen:

```Java
int id(int i) { 
  // { main:1, main:2} x {0, +}
  return i;       
  // updates the results of main:1 and main:2 with {0, +}
} 

int main() { 
  int x = id(1); // result {0, +} 
  int y = id(0); // result {0, +} 
  return x / y;  // result BUG!
}
```

The issue is that we we do not save the context of the call, which makes the result too wide.

> 🔗 https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html#sec:2

_Context Sensitive Analysis_ is about expanding the abstract state to be able to react to the context in which the method was called.
#### Full Call Stack Context
One way of doing this, is by making the state of a bytecode instruction be dependent on the call stack. We can write the total state as a map from the bytecode offsets (e.i the stack) an abstract state with return values: $$ι+↦2^ι*×\overset{-}{𝐒𝐭𝐚𝐭𝐞}$$
This has the advantage of giving us precise static information. In our example, from above the two calls would be differentiated by their call stack (e.i. they are called from two different point caller), and we can remove the faulty warning:

Consider this program. The only way to know that it does not throw an error is to track the full call stack.
```Java
int main() {
  int x = id(0); // main:1 -> {} x {0}
  int y = id(1); // not yet computed
  return x / y;  // not yet computed
}

int id(int x) {
  // main:1,id:1 -> {main:1} x { 0 }
  return x  
}
```

But now when we analyse a new call site we get the following:
```Java
int main() {
  int x = id(0); // main:1 -> {} x {0}
  int y = id(1); // main:1 -> {} x {+}
  return x / y;  // main:1 -> {} x {0}
}

int id(int x) {
  // Now we keep two state:
  // main:1,id:1 -> {main:1} x { 0 }
  // main:2,id:1 -> {main:2} x { + }
  return x  
}
```
#### (k-CFA) Limited Context Sensitivity
> 🔗 https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html#sec:2.2

The problem with the approach above is two-fold. The first problem is space, as we have to keep a version of state for each reachable call-stack, this can quickly explode in size. The second problem is recursive methods. In recursive methods, the call-stack is often dependent on the input (and might be infinite), and can make the analysis run forever.

As with everything else in static analysis, we have to abstract. Instead of keeping the entire call-stack, we just keep the last k call-sites, this is called _k-CFA_ ([Might 2010](https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html#ref:might2010resolving)). Essentially, keeping no more than k+1 bytecode offsets.

In object oriented programming languages $k≤2$ are often feasible, and polynomial ([Might 2010](https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html#ref:might2010resolving)); however, in functional languages it is EXPTIME-complete, meaning that there exist no polynomial-time algorithm that solves the problem.

In Java, it is often fine (and necessary) to choose $k=1$ to get a good analysis.



## 🎯 Program Analysis Abstraction & Interpretation - In Practice
### Examples For Beginners 🐣
#### 👉 Sign Abstraction (Integer Abstraction) -- Bounded Analysis
##### Same-Procedure Sign Analysis
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.1
> Also, see above "Abstract Operations"

Assume that we are working with all the possible integer values that a variable has at some point in the program. It would be much easier to simply keep track of whether the set contains positive, negative, or zero values.

We can represent this as a set that only contains three elements $\{ +, -, 0 \}$, i.e. exactly zero ($0$), larger than zero ($+$), and smaller than zero ($-$). This set is of size $3!$, which is much easier to work with than the set of size $2^{32}!$. In the following sections, we are going to refer to this set as **Sign**. $$\text{Sign} = \{ +, 0, - \} $$
We call Sign an **abstraction**, as we can convert the concrete domain of integers into the abstract domain of **Sign**. We call this conversion the **abstraction $\alpha$**: $$ \begin{aligned}
\alpha(\{1, 2, 3\}) &= \{ + \} \\
\alpha(\{0\}) &= \{ 0 \} \\
\alpha(\{-1, 3\}) &= \{ +, - \} \\
\alpha(\{-1, 0, 3\}) &= \{ 0, +, - \}
\end{aligned} $$
In our Sign abstraction, we use set inclusion as our order $(\sqsubseteq_{Sign} = \subseteq)$ and use the intersection and union of the underlying set as the meet ($\lceil\rceil_{sign} = \cap$) and join ($\lfloor\rfloor_{sign} = \cup$) of our lattice. Thus, obviously we have $\bot=\emptyset$ and $\top = \{+,−,0 \}$.

![](../../../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.42.08.png)

We can see that there exists a **Galois connection** between our concrete integer domain and our abstract sign domain $(2^{\mathbb{Z}}, \subseteq) \;\;\xleftrightarrow[\gamma]{\alpha}\;\; (\text{Sign}, \sqsubseteq_{\text{Sign}})$, where the **abstraction** $\alpha$ and **concretion** $\gamma$ are defined like this: $$\begin{aligned} 
\alpha(N) & = \{ + \mid n \in N, n < 0 \} \\
& \cup \{ - \mid n \in N, n > 0 \} \\
& \cup \{ 0 \mid n \in N, n = 0 \} \\
\\
\gamma(S) & = \{ n \mid n \in \mathbb{Z}, n < 0, + \in S \} \\
& \cup \{ n \mid n \in \mathbb{Z}, n > 0, - \in S \} \\
& \cup \{ 0 \mid 0 \in S \}
\end{aligned}$$
👉 <a>We can also see that we satisfy the rules.</a> Let's pick a concrete value $\{0, 1\}$. If we convert that to an abstract value we get: $\alpha(\{0, 1\}) = \{0, +\}$
- Since $\alpha(\{0, 1\}) \sqsubseteq \{0, +\} \sqsubseteq \{0, +, -\},$  
- and since  $\gamma(\{0, +\}) = \mathbb{Z}^{0, +} \quad \text{and} \quad \gamma(\{0, +, -\}) = \mathbb{Z}^{0, +, -},$
- then we get that $\{0, 1\} \subseteq \mathbb{Z}^{0, +} \subseteq \mathbb{Z}.$ 
##### Fix for Dependent Values
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:dependent-variables
##### Inter-Procedure Sign Analysis
#### 👉 Interval Abstraction (Integer Abstraction) -- Unbounded Analysis
> ↗ [Lattice (Set Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md) "Fixed Point"
##### Same-Procedure Interval Analysis
> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:interval-abstraction

However, not all abstractions form a lattice of finite height. One example of such abstractions are the interval abstraction. 

Here we represent a set integers as a interval between two numbers.

> Definition 2: Interval Abstraction
> 
> The interval abstraction $\text{Itval}$ is a tuple of two numbers $i, j$,   representing the interval of integers between $[i, j]$, both inclusive. 
> $$\begin{aligned} \alpha(S) & = [\min S, \max S]  \\
\gamma([i, j]) & = \{ n \in \mathbb{Z} \mid i \le n \le j  \} \\
[i, j] \sqsubseteq_{\text{Itval}} [k, h] & \equiv k \le i \land j \le h \\
[i, j] \sqcup_{\text{Itval}} [k, h] & \equiv [\min\{i, k\}, \max\{j, h\}] \\
[i, j] \sqcap_{\text{Itval}} [k, h] & \equiv [\max\{i, k\}, \min\{j, h\}] \\
\top_{\text{Itval}_K} & = [-\infty, \infty] \\
\bot_{\text{Itval}_K} & = [\infty, -\infty] \\
\end{aligned}$$


**Example: Runs forever**
Consider the following program:

```Java
void example() {
  int i = 0;
  while (i >= 0) {
    i = i + 1;
  }
}
```

In this case our interval analysis will look something like this:
1 $\{i↦[0,0]\}$
2 $\{i↦[0,0]\} 𝚜𝚎𝚎 𝚝𝚑𝚊𝚝 𝚒 >= 𝟶$
3 $\{i↦[0,0]+[1,1]\}𝚒 = 𝚒 + 𝟷$
4 $\{i↦[0,0]⊔[1,1]\}𝚕𝚘𝚘𝚙 𝚋𝚊𝚌𝚔$
5 $\{i↦[0,1]\}𝚜𝚎𝚎 𝚝𝚑𝚊𝚝 𝚒 >= 𝟶$
6 $\{i↦[0,1]+[1,1]\}𝚒 = 𝚒 + 𝟷$
7 $\{i↦[0,1]⊔[1,2]\}𝚕𝚘𝚘𝚙 𝚋𝚊𝚌𝚔$
8 ...𝚊𝚗𝚍 𝚜𝚘 𝚘𝚗

This might continue forever, unless we find a better way. (widening operator!)


**Implement the Interval abstraction.**
Now implement the range abstraction in your language of choice. Remember to test your abstraction:

```Python
from hypothesis import given
from hypothesis.strategies import integers, sets

@given(sets(integers()))
def test_interval_abstraction_valid(xs):
  r = Interval.abstract(xs) 
  assert all(x in r for x in xs)

@given(sets(integers()), sets(integers()))
def test_interval_abstraction_distributes(xs, ys):
  assert (Interval.abstract(xs) | Interval.abstract(ys)) == Interval.abstract(xs | ys)
```


**Implement Operations on Interval Abstraction.**
Define the arithmetic operations you need to run your static analysis.

You can use hypothesis to test them, remember you want the operations to be an over approximation:

```Python
@given(sets(integers()), sets(integers()))
def test_interval_abstraction_add(xs,ys):
  r = Interval.abstract(xs) + Interval.abstraction(ys)
  assert all(x + y in r for x in xs for y in ys)
```


Notice that the latice of the interval abstraction does not have a finite height, we can always add 1 to either end of the interval.



## Ref
