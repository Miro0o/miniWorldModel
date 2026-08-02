# Lattice (Order Theory)

[TOC]



## Res
### Related Topics
↗ [Universal Algebra (泛代数)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/👽%20Universal%20Algebra%20(泛代数)/Universal%20Algebra%20(泛代数).md)

↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
- ↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格).md)

↗ [Combinatorics (Combinatorial Mathematics)](../../../../../Combinatorics%20(Combinatorial%20Mathematics)/Combinatorics%20(Combinatorial%20Mathematics).md)

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)


### Other Resources
https://thzt.github.io/2017/02/24/recursive-function-1/
- [递归函数（一）：开篇](http://thzt.github.io/2017/02/24/recursive-function-1/)
- [递归函数（二）：编写递归函数的思路和技巧](http://thzt.github.io/2017/02/25/recursive-function-2/)
- [递归函数（三）：归纳原理](http://thzt.github.io/2017/03/03/recursive-function-3/)
- [递归函数（四）：全函数与计算的可终止性](http://thzt.github.io/2017/03/06/recursive-function-4/)
- [递归函数（五）：递归集与递归可枚举集](http://thzt.github.io/2017/03/09/recursive-function-5/)
- [递归函数（六）：最多有多少个程序](http://thzt.github.io/2017/03/10/recursive-function-6/)
- [递归函数（七）：不动点算子](http://thzt.github.io/2017/03/14/recursive-function-7/)
- [递归函数（八）：偏序结构](http://thzt.github.io/2017/03/20/recursive-function-8/)
- [递归函数（九）：最小不动点定理](http://thzt.github.io/2017/03/21/recursive-function-9/)



## Intro
> [!Links]
> ↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格).md)

> 🔗 https://zh.wikipedia.org/zh-hans/%E6%A0%BC_(%E6%95%B0%E5%AD%A6)

在[数学](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6 "数学")中，**格**（英语：Lattice）是其非空有限[子集](https://zh.wikipedia.org/wiki/%E5%AD%90%E9%9B%86 "子集")都有一个[上确界](https://zh.wikipedia.org/wiki/%E4%B8%8A%E7%A1%AE%E7%95%8C "上确界")（称为**并**）和一个[下确界](https://zh.wikipedia.org/wiki/%E4%B8%8B%E7%A1%AE%E7%95%8C "下确界")（称为**交**）的[偏序集合](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F%E9%9B%86%E5%90%88 "偏序集合")（poset）。格也可以特征化为满足特定公理[恒等式](https://zh.wikipedia.org/wiki/%E6%81%92%E7%AD%89%E5%BC%8F "恒等式")的[代数结构](https://zh.wikipedia.org/wiki/%E4%BB%A3%E6%95%B0%E7%BB%93%E6%9E%84 "代数结构")。因为两个定义是等价的，格理论从[序理论](https://zh.wikipedia.org/wiki/%E5%BA%8F%E7%90%86%E8%AE%BA "序理论")和[泛代数](https://zh.wikipedia.org/wiki/%E6%B3%9B%E4%BB%A3%E6%95%B0 "泛代数")二者提取内容。[半格](https://zh.wikipedia.org/wiki/%E5%8D%8A%E6%A0%BC "半格")包括了格，依次包括[海廷代数](https://zh.wikipedia.org/wiki/%E6%B5%B7%E5%BB%B7%E4%BB%A3%E6%95%B0 "海廷代数")和[布尔代数](https://zh.wikipedia.org/wiki/%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0 "布尔代数")。这些"格样式"的结构都允许序理论和抽象代数的描述。

需要注意的是，本条目介绍的是序理论中的“格”，并非几何与[群论](https://zh.wikipedia.org/wiki/%E7%BE%A4%E8%AE%BA "群论")中的“[格（群论）](https://zh.wikipedia.org/wiki/%E6%A0%BC%E5%AD%90 "格子")”（点阵），两者的英文均为“lattice”。虽然在继承自平面的次序中，每个点阵都是格，但是许多格不是点阵。

> [!TIP]
> 二维[欧氏空间](https://zh.wikipedia.org/wiki/%E6%AC%A7%E6%B0%8F%E7%A9%BA%E9%97%B4 "欧氏空间")的格点（点阵，lattice）:
> 
> ![|200](../../../../../../../Assets/Pics/Pasted%20image%2020260727122800.png)


> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)

A **lattice** is an abstract structure studied in the [mathematical](https://en.wikipedia.org/wiki/Mathematical "Mathematical") subdisciplines of [order theory](https://en.wikipedia.org/wiki/Order_theory "Order theory") and [abstract algebra](https://en.wikipedia.org/wiki/Abstract_algebra "Abstract algebra"). It consists of a [partially ordered set](https://en.wikipedia.org/wiki/Partially_ordered_set "Partially ordered set") in which every pair of elements has a unique [supremum](https://en.wikipedia.org/wiki/Supremum "Supremum") (also called a least upper bound or [join](https://en.wikipedia.org/wiki/Join_\(mathematics\) "Join (mathematics)")) and a unique [infimum](https://en.wikipedia.org/wiki/Infimum "Infimum") (also called a greatest lower bound or [meet](https://en.wikipedia.org/wiki/Meet_\(mathematics\) "Meet (mathematics)")). An example is given by the [power set](https://en.wikipedia.org/wiki/Power_set "Power set") of a set, partially ordered by [inclusion](https://en.wikipedia.org/wiki/Subset "Subset"), for which the supremum is the [union](https://en.wikipedia.org/wiki/Union_\(set_theory\) "Union (set theory)") and the infimum is the [intersection](https://en.wikipedia.org/wiki/Intersection_\(set_theory\) "Intersection (set theory)"). Another example is given by the [natural numbers](https://en.wikipedia.org/wiki/Natural_number "Natural number"), partially ordered by [divisibility](https://en.wikipedia.org/wiki/Divisibility "Divisibility"), for which the supremum is the [least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple "Least common multiple") and the infimum is the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor "Greatest common divisor").

Lattices can also be characterized as [algebraic structures](https://en.wikipedia.org/wiki/Algebraic_structure "Algebraic structure") satisfying certain [axiomatic](https://en.wikipedia.org/wiki/Axiom "Axiom") [identities](https://en.wikipedia.org/wiki/Identity_\(mathematics\) "Identity (mathematics)"). Since the two definitions are equivalent, lattice theory draws on both [order theory](https://en.wikipedia.org/wiki/Order_theory "Order theory") and [universal algebra](https://en.wikipedia.org/wiki/Universal_algebra "Universal algebra"). The class of lattices can be generalized to [semilattices](https://en.wikipedia.org/wiki/Semilattice "Semilattice"), and some notable subclasses of lattices are [Heyting algebras](https://en.wikipedia.org/wiki/Heyting_algebra "Heyting algebra"), [Boolean algebras](https://en.wikipedia.org/wiki/Boolean_algebra_\(structure\) "Boolean algebra (structure)"), [distributive lattices](https://en.wikipedia.org/wiki/Distributive_lattice "Distributive lattice"), and [geometric lattices](https://en.wikipedia.org/wiki/Geometric_lattice "Geometric lattice") ([matroids](https://en.wikipedia.org/wiki/Matroid "Matroid")). These _lattice-like_ structures all admit [order-theoretic](https://en.wikipedia.org/wiki/Order-theoretic "Order-theoretic") as well as algebraic descriptions.

The sub-field that studies lattices is called **lattice theory**.


> 🔗 https://en.wikipedia.org/wiki/Map_of_lattices

The concept of a [lattice](https://en.wikipedia.org/wiki/Lattice_\(order\) "Lattice (order)") arises in [order theory](https://en.wikipedia.org/wiki/Order_theory "Order theory"), a branch of mathematics. The [Hasse diagram](https://en.wikipedia.org/wiki/Hasse_diagram "Hasse diagram") below depicts the inclusion relationships among some important subclasses of lattices.

![](../../../../../../../Assets/Pics/Pasted%20image%2020260727130614.png)


### Hasse Diagrams
> 🔗 [Hasse diagram - Wikipedia](https://en.wikipedia.org/wiki/Hasse_diagram)

Below is a Hasse Diagram of poset $(2^{\text{\{A, B, C\}}}, \subseteq)$:
![|400](../../../../../../../Assets/Pics/Screenshot%202025-10-09%20at%2022.52.59.png)
<small><a>https://blog.wohin.me/posts/nju-program-analysis-05/</a></small>

Here we only draw the imitate next elements in the order, i.e. connection to the immediate adjacent nodes.

The reason why they are called latices is that they can be drawn using Hasse Diagram which gives these nice structures, which looks like a wooden lattice.


### Formal Definition of Lattice
A lattice can be defined either order-theoretically as a partially ordered set, or as an algebraic structure.
#### 1️⃣ Lattice as in Order Theory
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.3
> **Lattice**

**Partial Order & Partially Ordered Sets (Posets)**
(skipped. See ↗ [Partial Order & Order Theory](../Partial%20Order%20&%20Order%20Theory.md))

**Upper Bounds and Lower Bounds of a poset**
(skipped. See ↗ [Partial Order & Order Theory](../Partial%20Order%20&%20Order%20Theory.md))

A lattice is partially ordered sets $(L,\sqsubseteq)$, with two extra operators $\lfloor \rfloor$ and $\lceil \rceil$. 
- $\lfloor \rfloor$ is the **least upper bound (lub), or join**.  $a\lfloor \rfloor b$, meaning that $$\forall c. \ a\sqsubseteq c\land b\sqsubseteq c \implies a\lfloor \rfloor b \sqsubseteq c.$$
- $\lceil \rceil$ is the **greatest lower bound (glb), or meet**. $a\lceil \rceil b$ meaning that $$\forall c. \ c\sqsubseteq a\land c\sqsubseteq b \implies c \sqsubseteq a\lceil \rceil b.$$
Furthermore, this implies that there exist a least bound $\bot=\lceil\rceil L$ and a greatest bound $\top=\lfloor\rfloor L$, from which we have the following identities: $$\begin{aligned}
& \top\lceil\rceil a = a = a\lfloor\rfloor \bot \\
& \top\lfloor\rfloor a = \top \\
& a \lceil\rceil\bot = \bot
\end{aligned}$$
> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)#As_partially_ordered_set

A [partially ordered set](https://en.wikipedia.org/wiki/Partially_ordered_set "Partially ordered set") (poset) $(L,\leq)$ is called a **lattice** if it is both a join- and a meet-[semilattice](https://en.wikipedia.org/wiki/Semilattice "Semilattice"), i.e. each two-element subset $\{a,b\}\subseteq L$ has a [join](https://en.wikipedia.org/wiki/Join_%28mathematics%29 "Join (mathematics)") (i.e. least upper bound, denoted by $a\vee b$) and [dually](https://en.wikipedia.org/wiki/Duality_%28order_theory%29 "Duality (order theory)") a [meet](https://en.wikipedia.org/wiki/Meet_%28mathematics%29 "Meet (mathematics)") (i.e. greatest lower bound, denoted by $a\wedge b$). This definition makes $\wedge$ and $\vee$ [binary operations](https://en.wikipedia.org/wiki/Binary_operation "Binary operation"). Both operations are monotone with respect to the given order: $a_1\leq a_2$ and $b_1\leq b_2$ implies that $a_1\vee b_1\leq a_2\vee b_2$ and $a_1\wedge b_1\leq a_2\wedge b_2$.

It follows by an [induction](https://en.wikipedia.org/wiki/Mathematical_induction "Mathematical induction") argument that every non-empty finite subset of a lattice has a least upper bound and a greatest lower bound. With additional assumptions, further conclusions may be possible; see [Completeness (order theory)](https://en.wikipedia.org/wiki/Completeness_%28order_theory%29 "Completeness (order theory)") for more discussion of this subject. That article also discusses how one may rephrase the above definition in terms of the existence of suitable [Galois connections](https://en.wikipedia.org/wiki/Galois_connection "Galois connection") between related partially ordered sets—an approach of special interest for the [category theoretic](https://en.wikipedia.org/wiki/Category_theoretic "Category theoretic") approach to lattices, and for [formal concept analysis](https://en.wikipedia.org/wiki/Formal_concept_analysis "Formal concept analysis").

Given a subset of a lattice, $H\subseteq L$, meet and join restrict to [partial functions](https://en.wikipedia.org/wiki/Partial_function "Partial function")—they are undefined if their value is not in the subset $H$. The resulting structure on $H$ is called a **partial lattice**. In addition to this extrinsic definition as a subset of some other algebraic structure (a lattice), a partial lattice can also be intrinsically defined as a set with two partial binary operations satisfying certain axioms.

---
> 🔗 https://en.wikipedia.org/wiki/Join_and_meet

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), specifically [order theory](https://en.wikipedia.org/wiki/Order_theory "Order theory"), the **join** of a [subset](https://en.wikipedia.org/wiki/Subset "Subset") $S$ of a [partially ordered set](https://en.wikipedia.org/wiki/Partially_ordered_set "Partially ordered set") $P$ is the [supremum](https://en.wikipedia.org/wiki/Supremum "Supremum") (least upper bound) of $S$, denoted $\bigvee S$, and similarly, the **meet** of S is the [infimum](https://en.wikipedia.org/wiki/Infimum "Infimum") (greatest lower bound), denoted $\bigwedge S$. In general, the join and meet of a subset of a partially ordered set need not exist. Join and meet are [dual](https://en.wikipedia.org/wiki/Duality_\(order_theory\) "Duality (order theory)") to one another with respect to order inversion.

A partially ordered set in which all pairs have a join is a [join-semilattice](https://en.wikipedia.org/wiki/Join-semilattice "Join-semilattice"). Dually, a partially ordered set in which all pairs have a meet is a [meet-semilattice](https://en.wikipedia.org/wiki/Meet-semilattice "Meet-semilattice"). A partially ordered set that is both a join-semilattice and a meet-semilattice is a [lattice](https://en.wikipedia.org/wiki/Lattice_\(order\) "Lattice (order)"). A lattice in which every subset, not just every pair, possesses a meet and a join is a [complete lattice](https://en.wikipedia.org/wiki/Complete_lattice "Complete lattice"). It is also possible to define a [partial lattice](https://en.wikipedia.org/wiki/Partial_lattice "Partial lattice"), in which not all pairs have a meet or join but the operations (when defined) satisfy certain axioms.

The join/meet of a subset of a [totally ordered set](https://en.wikipedia.org/wiki/Total_order "Total order") is simply the maximal/minimal element of that subset, if such an element exists.

If a subset $S$ of a partially ordered set $P$ is also an (upward) [directed set](https://en.wikipedia.org/wiki/Directed_set "Directed set"), then its join (if it exists) is called a _directed join_ or _directed supremum_. Dually, if $S$ is a downward directed set, then its meet (if it exists) is a _directed meet_ or _directed infimum_.

> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/

![](../../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.53.24.png)

- 格（lattice）
- 半格（semilattice）
- 完全格（complete lattice）
- 乘积格（Product Lattice）
	- 很容易证明，乘积格也是格，完全格构成的乘积格也是完全格。

> [!Example]
> ↗ [Information Flow & Information Flow Control (IFC)](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC)/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC).md)
> 
> ![](../../../../../../../Assets/Pics/Screenshot%202025-10-09%20at%2023.07.33.png)
> <small>现在，我们再次回到数据流分析上，定义一个基于格的数据流分析框架(D,L,F)：其中D指的是数据流的方向，包括前向和后向；L指的是由值域V和一个meet或join操作符构成的格；F指的是从V到V的一系列transfer functions。<br> 实际上，数据流分析可以视作在格上不断迭代应用transfer functions和meet/join操作。<br> <a>https://blog.wohin.me/posts/nju-program-analysis-05/</a></small>
#### 2️⃣ Lattice as in Algebraic Structure
> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)#As_algebraic_structure

A **lattice** is an [algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure "Algebraic structure") $(L,\vee,\wedge)$, consisting of a set $L$ and two binary, commutative and associative [operations](https://en.wikipedia.org/wiki/Operation_%28mathematics%29 "Operation (mathematics)") $\vee$ and $\wedge$ on $L$ satisfying the following axiomatic identities (sometimes called *absorption laws*) for all elements $a,b\in L$:
$a\vee(a\wedge b)=a$
$a\wedge(a\vee b)=a$

The following two identities are also usually regarded as axioms, even though they follow from the two absorption laws taken together.[[2]](https://en.wikipedia.org/wiki/Lattice_%28order%29#cite_note-2) These are called *idempotent laws*.
$a\vee a=a$
$a\wedge a=a$

These axioms assert that both $(L,\vee)$ and $(L,\wedge)$ are [semilattices](https://en.wikipedia.org/wiki/Semilattice "Semilattice"). The absorption laws, the only axioms above in which both meet and join appear, distinguish a lattice from an arbitrary pair of semilattice structures and assure that the two semilattices interact appropriately. In particular, each semilattice is the [dual](https://en.wikipedia.org/wiki/Duality_%28order_theory%29 "Duality (order theory)") of the other. The absorption laws can be viewed as a requirement that the meet and join semilattices define the same [partial order](https://en.wikipedia.org/wiki/Partial_order "Partial order").
#### Connection Between the Two Definitions
> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)#Connection_between_the_two_definitions

An order-theoretic lattice gives rise to the two binary operations $\vee$ and $\wedge$. Since the commutative, associative and absorption laws can easily be verified for these operations, they make $(L,\vee,\wedge)$ into a lattice in the algebraic sense.

The converse is also true. Given an algebraically defined lattice $(L,\vee,\wedge)$, one can define a partial order $\leq$ on $L$ by setting $a\leq b$ if $a=a\wedge b$, or $a\leq b$ if $b=a\vee b$, for all elements $a,b\in L$. The laws of absorption ensure that both definitions are equivalent:

$a=a\wedge b\text{ implies }b=b\vee(b\wedge a)=(a\wedge b)\vee b=a\vee b$

and dually for the other direction.

One can now check that the relation $\leq$ introduced in this way defines a partial ordering within which binary meets and joins are given through the original operations $\vee$ and $\wedge$.

Since the two definitions of a lattice are equivalent, one may freely invoke aspects of either definition in any way that suits the purpose at hand.
#### Bounded lattice
> 🔗 https://en.wikipedia.org/wiki/Bounded_lattice
> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)#Bounded_lattice

A **bounded lattice** is a lattice that additionally has a [greatest element](https://en.wikipedia.org/wiki/Greatest_element "Greatest element") (also called *maximum*, or *top* element, and denoted by $1$ or $\top$) and a [least element](https://en.wikipedia.org/wiki/Least_element "Least element") (also called *minimum*, or *bottom*, denoted by $0$ or $\bot$), which satisfy $0\leq x\leq 1$ for every $x\in L$.

A bounded lattice may also be defined as an algebraic structure of the form $(L,\vee,\wedge,0,1)$ such that $(L,\vee,\wedge)$ is a lattice, $0$ (the lattice's bottom) is the [identity element](https://en.wikipedia.org/wiki/Identity_element "Identity element") for the join operation $\vee$, and $1$ (the lattice's top) is the identity element for the meet operation $\wedge$.
$a\vee 0=a$
$a\wedge 1=a$

It can be shown that a partially ordered set is a bounded lattice if and only if every finite set of elements, including the empty set, has a join and a meet.

Every lattice can be embedded into a bounded lattice by adding a greatest and a least element. Furthermore, every non-empty finite lattice is bounded, by taking the join, respectively meet, of all elements, denoted by $1=\bigvee L=a_1\vee\cdots\vee a_n$, respectively $0=\bigwedge L=a_1\wedge\cdots\wedge a_n$, where $L=\{a_1,\ldots,a_n\}$ is the set of all elements.


### Examples of Lattice & Non-Lattice
🔗 https://en.wikipedia.org/wiki/Lattice_(order)#Examples
🔗 https://en.wikipedia.org/wiki/Lattice_(order)#Examples_of_non-lattices


### Connection to Other Algebraic Structures
↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格).md)


### Morphism of Lattice
↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格).md)


### Properties of Lattices 🤔
> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)#Properties_of_lattices
  
- [Completeness](https://en.wikipedia.org/wiki/Lattice_\(order\)#Completeness)
- [Conditional completeness](https://en.wikipedia.org/wiki/Lattice_\(order\)#Conditional_completeness)
- [Distributivity](https://en.wikipedia.org/wiki/Lattice_\(order\)#Distributivity)
- [Modularity](https://en.wikipedia.org/wiki/Lattice_\(order\)#Modularity)
- [Semimodularity](https://en.wikipedia.org/wiki/Lattice_\(order\)#Semimodularity)
- [Continuity and algebraicity](https://en.wikipedia.org/wiki/Lattice_\(order\)#Continuity_and_algebraicity)
- [Complements and pseudo-complements](https://en.wikipedia.org/wiki/Lattice_\(order\)#Complements_and_pseudo-complements)
- [Jordan–Dedekind chain condition](https://en.wikipedia.org/wiki/Lattice_\(order\)#Jordan%E2%80%93Dedekind_chain_condition)
- [Graded/ranked](https://en.wikipedia.org/wiki/Lattice_\(order\)#Graded/ranked)



## Least Fixed-point Theorem (of Lattice Function)
> [!link]
> ↗ [Function & Mapping of Set](../../../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> 
> 🔗 [Fixed-point property - Wikipedia](https://en.wikipedia.org/wiki/Fixed-point_property)
> 🔗 [Ascending chain condition - Wikipedia](https://en.wikipedia.org/wiki/Ascending_chain_condition)
> 🔗 [CS 6110 Lecture 21 The Fixed-Point Theorem, Andrew Myers](https://www.cs.cornell.edu/courses/cs6110/2013sp/lectures/lec20-sp13.pdf)


### Monotonicity
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/

函数 $f : L \to L$（$L$ 是格）是 **单调的**，当且仅当 $\forall x, y \in L,\; x \preceq y \Rightarrow f(x) \preceq f(y)$


### Least Fixed-point Theorem ⭐
> [!links]
> ↗ [Function & Mapping of Set](../../../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md) "fixed point & recursion"

> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/

给定一个完全格 $(L, \preceq)$，如果 $f : L \to L$ 是单调的且 $L$ 是有限的，那么：
1. **$f$ 的最小不动点**可以通过以下方式得到：不断迭代计算  $f(\bot),\; f(f(\bot)),\; \ldots,\; f^k(\bot)$ 直到到达这个不动点。
2. **$f$ 的最大不动点**可以通过类似的方式得到：不断迭代计算 $f(\top),\; f(f(\top)),\; \ldots,\; f^k(\top)$ 直到到达这个不动点。

如何证明不动点定理呢？我们可以分两步走：首先证明 **不动点的存在**，继而证明按照前述方式找到的不动点是最小不动点。 最大和最小不动点的证明是类似的，我们来看一下最小不动点的证明过程。


一、证明不动点的存在
- 前面我们提到，最小元素 $\bot = \lceil\rceil L$ 是格上的最小元素，且 $f$ 是单调的，因此可以得到：$\bot \preceq f(\bot) \preceq f^2(\bot) \preceq \ldots \preceq f^H(\bot)$
- 而 $L$ 又是有限的。假设其高度为 $H$，则上述数列的上限就是 $f^H(\bot)$。  
- 当 $i > H$ 时，根据鸽笼原理，存在 $k$ 和 $j$ 使得 $f^k(\bot) = f^j(\bot)$。  假设 $k < j \le H + 1$，结合 $f$ 是单调的，又有 $f^k(\bot) \preceq\ldots\preceq f^j(\bot)$，故可得 $f^{fix} = f^k(\bot) = f^j(\bot)$，不动点存在。

注：格的高度的概念会出现在下一节，指的是在格上从 top 到 bottom 的最长路径。


二、证明该不动点是最小不动点
这里我们使用归纳法证明：
1. 假设还有一个不动点 $x_0$，使得 $x_0 = f(x_0)$。由于 $\bot$ 是最小元素，结合函数单调性，可得  $f(\bot) \preceq x_0$
2. 假设 $f^i(\bot) \preceq f^i(x_0)$，那么结合函数单调性，我们有 $f^{i+1}(\bot) \preceq f^{i+1}(x_0)$
3. 因此我们得到  $f^i(\bot) \preceq f^i(x_0)$。又因为 $x_0$ 是不动点，故 $f^i(\bot) \preceq f^i(x_0) = x_0$。
4. 最终有  $f^{fix} = f^{k}(\bot) \preceq f^k(x_0) = x_0$，证毕。

> 🔗 https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html#sec:3.1


> 🔗 https://thzt.github.io/2017/03/21/recursive-function-9/



## Ref
[👍 南大软分课程笔记｜05 数据流分析理论]: https://blog.wohin.me/posts/nju-program-analysis-05/

[Kleene fixed-point theorem| wikipedia]: https://en.wikipedia.org/wiki/Kleene_fixed-point_theorem