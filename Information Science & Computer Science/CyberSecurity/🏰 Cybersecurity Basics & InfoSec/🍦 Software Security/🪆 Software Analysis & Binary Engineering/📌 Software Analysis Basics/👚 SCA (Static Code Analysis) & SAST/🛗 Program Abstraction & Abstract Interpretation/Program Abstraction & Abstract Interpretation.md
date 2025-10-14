# Program Abstraction & Abstract Interpretation

[TOC]



## Res
### Related Topics



## Intro
### Abstraction of Program


### Abstract Interpretation of Program
> 📖 Static Program Analysis  | Anders Møller and Michael I. Schwartzbach

The theory of abstract interpretation provides a solid mathematical foundation for what it means for an analysis to be sound, ==by relating the analysis specification to the formal semantics of the programming language==. Another use of abstract interpretation is for understanding whether an analysis design, or a part of an analysis design, is as precise as possible relative to a choice of analysis lattice and where imprecision may arise. The fundamental ideas of abstract interpretation were introduced by Cousot and Cousot in the 1970s [CC76, CC77, CC79b].



## 🎯 Program Analysis Abstraction & Interpretation- In Mathematics
### Posets & Lattice
> ↗ [Algebraic Structure & Abstract Algebra & Modern Algebra /Group, Ring, and Field ⭐](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md#Group,%20Ring,%20and%20Field%20⭐)
> ![Screenshot 2023-01-05 at 2.42.36 PM](../../../../../../../../Assets/Pics/Screenshot%202023-01-05%20at%202.42.36%20PM.png)
> <small>【群环域串讲】 <a>https://www.bilibili.com/video/BV1L84y1k7Yc/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d</a></small>


↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
↗ [Lattice (Set Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)


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
We can use Hasse Diagram to draw a lattice.
#### Monotonicity & Fixed Point Axiom
↗ [Lattice (Set Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)


### Galois Connection & Safe-Approximation ⭐
> ↗ [Galois Theory](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Ring%20Theory%20&%20Ring-Like%20Algebraic%20Structure/Field%20Theory%20&%20Field-like%20Algebraic%20Structure/Galois%20Theory.md)
> ↗ [Category Theory (范畴论)](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)
> 
> 🔗 [Galois connection - Wikipedia](https://en.wikipedia.org/wiki/Galois_connection)

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.4

![](../../../../../../../../Assets/Pics/Pasted%20image%2020251010000047.png)
<small>A Galois Connection is a connection between two ordered sets, with a concretion γ and an abstraction α function.</small>

A **Galois connection** is a relationship between two ordered sets $(C, \sqsubseteq_C)$ and $(A, \sqsubseteq_A)$, where we can abstract information from the concrete domain into the abstract domain $\alpha : C \to A$ while preserving the order if going back $\gamma : A \to C$. $\alpha$ explains how to abstract a value, and $\gamma$ explains what the abstraction means.

Because the abstraction might be lossy ("abstraction" 🤔 ), it is not the case that if we abstract a value we get back the same concrete value $\gamma(\alpha(c)) \ne c$. Instead, ==a Galois connection satisfies the following rule: $$ \forall c \in C, a \in A.\; c \sqsubseteq_C \gamma(a) \Leftrightarrow \alpha(c) \sqsubseteq_A a $$==
It states that, if we have a concrete value $c$, and abstract it $\alpha(c)$, then any value “larger” than this abstraction $a$ will concretize to a value $\gamma(a)$ that is “larger” than the original value (see figure above). At first this might not seem useful, but ==if we satisfy this rule, we get the following laws for free==: $$ \begin{aligned}
c \sqsubseteq_C \gamma(\alpha(c))) \quad & \text{– if we abstract we only increase in size} \\
\alpha(\gamma(a)) \sqsubseteq_A a \quad & \text{– if we concretize we only decrease in size} \\
\alpha(\gamma(\alpha(c))) = \alpha(c) \quad & \text{– we don’t keep losing information (only lose once)} \\
\gamma(\alpha(\gamma(a))) = \gamma(a) \quad & \text{– ... in both directions} \\
\gamma(a_1 \sqcup_A a_2) = \gamma(a_1) \sqcup_C \gamma(a_2) \quad & \text{– $\gamma$ preserves joins} \\
\alpha(c_1 \sqcap_C c_2) = \alpha(c_1) \sqcap_A \alpha(c_2) \quad & \text{– $\alpha$ preserves meets}
\end{aligned} $$
The first two rules give us confidence that whatever abstraction we choose, we **only lose information**, never create it. And the second two rules give us confidence that we **don’t keep losing** that information, i.e. we only lose them for once.

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3

==In practice, Galois connections allows us to map our infinite domain of may or must analyses into a more manageable abstract domain, while giving us guarantees that we are still correctly over- or under-estimating (safe-approximation).==
#### Adjunction and Testing
> ↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
> ↗ [Category Theory (范畴论)](../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)

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


### Abstract Operations
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.5Abstract 
> Operations in the Sign Domain. See below "👉 The Sign Analysis"

Finally, we have reached the fun part. We can now define **operations in the abstract domain** that mimic the operations in the concrete domain. Because our concrete domain is the set of integers, we can define $+_{2^{i32}}$ as the operation over the product: $$ A +_{2^{i32}} B = \{\, a + b \mid a \in A, b \in B \,\} $$
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



## 🎯 Program Analysis Abstraction & Interpretation - In Practice 
### 👉 The Sign Analysis
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.1
> Also, see above "Abstract Operations"

Assume that we are working with all the possible integer values that a variable has at some point in the program. It would be much easier to simply keep track of whether the set contains positive, negative, or zero values.

We can represent this as a set that only contains three elements $\{ +, -, 0 \}$, i.e. exactly zero ($0$), larger than zero ($+$), and smaller than zero ($-$). This set is of size $3!$, which is much easier to work with than the set of size $2^{32}!$. In the following sections, we are going to refer to this set as **Sign**. $$\text{Sign} = \{ +, 0, - \} $$
We call Sign an **abstraction**, as we can convert the concrete domain of integers into the abstract domain of **Sign**. We call this conversion the abstraction **$\alpha$**: $$ \begin{aligned}
\alpha(\{1, 2, 3\}) &= \{ + \} \\
\alpha(\{0\}) &= \{ 0 \} \\
\alpha(\{-1, 3\}) &= \{ +, - \} \\
\alpha(\{-1, 0, 3\}) &= \{ 0, +, - \}
\end{aligned} $$
In our Sign abstraction, we use set inclusion as our order $\sqsubseteq_{Sign} = \subseteq$ and use the intersection and union of the underlying set as the meet ($\lceil\rceil$) and join ($\lfloor\rfloor$) of our lattice. $\bot=\emptyset$ and $\top = \{+,−,0 \}$.

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


### Bounded Abstraction & Interpretation
> Cousot, Patrick; Cousot, Radhia (1977). _Abstract interpretation._ [`doi:10.1145/512950.512973`](https://www.doi.org/10.1145/512950.512973) [link](https://doi.org/10.1145/512950.512973)
> Cousot, Patrick; Cousot, Radhia (1979). _Systematic design of program analysis frameworks._ [`doi:pdf/10.1145/567752.567778`](https://www.doi.org/pdf/10.1145/567752.567778) [link](https://doi.org/pdf/10.1145/567752.567778)
> Nielson, Hanne Riis; Nielson, Flemming (2007). _Semantics with Applications._

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3

In practice, Galois connections allows us to map our infinite domain of may or must analyses into a more manageable abstract domain, while giving us guarantees that we are still correctly over- or under-estimating (safe-approximation).

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:3.5

One great thing about Galois connections is that they compose. This mean we can create one long chain: $$\begin{aligned} (2^{Trace}, \ \subseteq) & \leftrightarrow^\alpha_\gamma \ (2^{State}, \subseteq) &\text{State Abstraction} \\
& \leftrightarrow^\alpha_\gamma \ (P_C,\sqsubseteq_{P_C}) &\text{Per-Instruction Abstraction} \\
& \leftrightarrow^\alpha_\gamma \ (P_V,\sqsubseteq{P_V}) &\text{Per-Variable Abstraction} \\
& \leftrightarrow^\alpha_\gamma \ (P_V[Sign], \sqsubseteq_{P_C[Sign]}) &\text{Variables Abstraction}
\end{aligned}$$
#### The State Abstraction

#### The Per-Instruction Abstraction

#### The Per-Variable Abstraction

#### Variables Abstractions


### Unbounded Abstraction & Interpretation



## Ref
