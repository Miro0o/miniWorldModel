
Worklist Algorithm 与 Fixed-point Computation 的关系
1. Fixed Point 的基本概念

在 Formal Methods 中，许多计算问题都可以被表示为 **Fixed-point Computation（不动点计算）** 问题。
给定一个函数 $F\rightarrow L$，如果某个元素 $X^*\in L$ 满足：$F(X^*)=X^*$
那么 $X^*$ 就被称为函数 $F$ 的一个 **fixed point（不动点）**。
直观上，fixed point 表示一个稳定状态：对当前结果再次应用函数 $F$，不会产生任何变化。
在许多形式化验证问题中，我们不仅希望找到一个 fixed point，还希望找到 **Least Fixed Point（最小不动点）**，记作：
$$  
\mu F  
$$
这里的“最小”是相对于定义在 $L$ 上的偏序关系而言的。例如，如果 $L$ 是集合的幂集，偏序关系为集合包含关系 $\subseteq$，那么 least fixed point 就是所有 fixed points 中按集合包含关系最小的那个。


2. 示例：Graph Reachability

考虑一个有向图 $G=(V,E)$，其中 $V$ 是节点集合，$E\subseteq V\times V$ 是有向边集合。假设我们希望计算从初始节点 $A$ 出发能够到达的所有节点。

定义后继运算 $Post(X)$：
$$  
Post(X)={v\in V\mid \exists u\in X,\ (u,v)\in E}  
$$

其中 $Post(X)$ 表示从节点集合 $X$ 出发，经过一步转移能够到达的所有节点。

接下来定义函数：
$$  
F(X)={A}\cup Post(X)  
$$

这个函数表示：给定当前的节点集合 $X$，将初始节点 $A$ 和从 $X$ 经过一步能够到达的所有节点合并，得到一个新的节点集合。

从空集开始，反复应用 $F$：
$$  
X_0=\varnothing  
$$
$$  
X_{n+1}=F(X_n)  
$$

假设图中的边为 $A\rightarrow B$、$A\rightarrow C$、$B\rightarrow D$ 和 $C\rightarrow D$，那么迭代过程为：
$$  
\begin{aligned}  
X_0 &= \varnothing\  
X_1 &= F(X_0)={A}\  
X_2 &= F(X_1)={A,B,C}\  
X_3 &= F(X_2)={A,B,C,D}\  
X_4 &= F(X_3)={A,B,C,D}  
\end{aligned}  
$$

由于 $X_4=X_3$，继续应用 $F$ 不再产生新的节点。因此：
$$  
F(X_3)=X_3  
$$

这说明 $X_3$ 是函数 $F$ 的一个 fixed point。

由于 $F$ 是关于集合包含关系的 monotone function（单调函数），并且我们从最小元素 $\varnothing$ 开始迭代，因此在有限图中，该过程最终得到的是 **least fixed point**：
$$  
Reach(A)=\mu F={A,B,C,D}  
$$

这一计算过程称为 **Fixed-point Iteration**。


3. Worklist Algorithm 作为 Fixed-point Computation 的实现方法

普通的 fixed-point iteration 通常通过反复计算完整的 $F(X)$ 来更新当前结果，直到相邻两次迭代的结果相同。

然而，在许多实际问题中，每次迭代只有一小部分信息发生变化。如果每次都重新计算整个函数，就可能产生大量不必要的重复计算。

**Worklist Algorithm 可以被理解为一种增量式（incremental）的 fixed-point computation 方法。**

它的核心思想是：只重新处理那些可能受到新信息影响的部分，而不必在每次迭代中重新计算整个系统。

以 graph reachability 为例，算法维护两个集合：
- $Visited$：已经发现的可达节点。
- $Worklist$：已经发现但尚未处理的节点。

算法首先将初始节点 $A$ 加入这两个集合。随后不断从 $Worklist$ 中取出一个节点，检查其后继节点。如果发现新的可达节点，则将其加入 $Visited$ 和 $Worklist$。

对于已经发现的节点，不需要重复加入 $Worklist$，因为它们的后继已经被处理，或者将在之后被处理。

当 $Worklist$ 为空时，意味着所有已发现节点的后继都已被检查，并且不存在尚未处理的新节点。此时，可达节点集合已经稳定，满足：
$$  
F(Visited)=Visited  
$$

因此，worklist 算法计算得到了与普通 fixed-point iteration 相同的 least fixed point。

两种方法的主要区别在于计算策略：

| |Fixed-point Iteration|Worklist Algorithm|
|---|---|---|
|核心思想|反复应用函数直到结果稳定|只处理可能引起结果变化的任务|
|计算方式|通常进行全局更新|增量式、局部更新|
|终止条件|$X_{n+1}=X_n$|$Worklist=\varnothing$|
|计算结果|Fixed point|Fixed point|
|优势|数学定义直接、实现简单|避免不必要的重复计算|

需要注意的是，worklist 为空能够表示 fixed point 已经达到，依赖于算法正确维护了任务之间的依赖关系：每次信息发生变化，都必须将可能受影响的任务重新加入 worklist。


 4. 数学基础与收敛条件
Worklist Algorithm 与 fixed-point theory 的联系可以通过 **Lattice Theory（格理论）** 和 **Monotone Functions（单调函数）** 得到更严格的解释。

假设 $(L,\sqsubseteq)$ 是一个有限高度的偏序结构，具有最小元素 $\bot$，并且 $F\rightarrow L$ 是一个 monotone function，即：
$$  
X\sqsubseteq Y\implies F(X)\sqsubseteq F(Y)  
$$
如果从 $\bot$ 开始进行迭代：
$$  
X_0=\bot,\qquad X_{n+1}=F(X_n)  
$$

那么由于 $F$ 的单调性，得到一个单调递增序列：
$$  
X_0\sqsubseteq X_1\sqsubseteq X_2\sqsubseteq\cdots  
$$

由于该结构不存在无限严格递增链，迭代最终会稳定在一个 fixed point。进一步，由于迭代从最小元素开始，而且 $F$ 是单调的，这个 fixed point 就是 least fixed point $\mu F$。

对于基于局部更新的 worklist 算法，如果各个更新操作是单调且不会丢失已获得的信息，并且所有受影响的任务都会被重新调度，那么也可以利用类似的数学性质证明其终止性与正确性。

因此，fixed-point theory 与 worklist algorithm 分别回答两个不同的问题：
- **Fixed-point Theory**：定义需要计算的数学对象，并解释解的存在性、最小性及收敛条件。
- **Worklist Algorithm**：提供一种计算策略，通过增量式传播信息，避免重复计算，从而高效地求出目标 fixed point。

两者的关系可以概括为：
$$  
\boxed{\text{Worklist Algorithm}\approx\text{Incremental Fixed-point Computation}}  
$$

这种关系广泛存在于 Model Checking、Dataflow Analysis、Abstract Interpretation、Datalog Evaluation 和 Constraint Propagation 等领域。


---
Worklist Algorithm 的本质
可以从三个不同层次理解：

|层次|概念|回答的问题|
|---|---|---|
|Mathematical|Fixed-point theory / lattice theory|我们要计算什么解？|
|Algorithmic|Worklist iteration|怎样高效计算这个解？|
|Implementation|Queue / Stack / Set / Priority Queue|怎样管理待处理任务？|

其中最值得记住的是：
$\boxed{ \begin{gathered} \text{Information Changes}\\ \Downarrow\\ \text{Schedule Affected Tasks}\\ \Downarrow\\ \text{Propagate New Information}\\ \Downarrow\\ \text{Repeat Until Stable} \end{gathered} }$

另外，有一个容易忽略的重要区别：
Worklist 为空不自动意味着算法正确。 我们必须保证，任何可能改变最终结果的更新都能触发相应任务；只有这样，worklist 清空才真正意味着计算已经稳定。# Lattice (Order Theory)

[TOC]



## Res
### Related Topics
↗ [Universal Algebra (泛代数)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/👽%20Universal%20Algebra%20%28泛代数%29/Universal%20Algebra%20%28泛代数%29.md)

↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
- ↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29.md)

↗ [Combinatorics (Combinatorial Mathematics)](../../../../../Combinatorics%20%28Combinatorial%20Mathematics%29/Combinatorics%20%28Combinatorial%20Mathematics%29.md)

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../😶‍🌫️%20Theory%20of%20Computation/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)


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
> ↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29.md)

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
> ↗ [Information Flow & Information Flow Control (IFC)](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29/Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29.md)
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
↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29.md)


### Morphism of Lattice
↗ [Order Theory & Lattice-Like Algebraic Structure (格)](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29.md)


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



## Fixed-Point Computation & Fixed-Point Theorem (of Lattice Function)
> [!link]
> ↗ [Set Mapping & Function](../../../Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../😶‍🌫️%20Theory%20of%20Computation/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
> 
> 🔗 [Fixed-point property - Wikipedia](https://en.wikipedia.org/wiki/Fixed-point_property)
> 🔗 [Ascending chain condition - Wikipedia](https://en.wikipedia.org/wiki/Ascending_chain_condition)
> 🔗 [CS 6110 Lecture 21 The Fixed-Point Theorem, Andrew Myers](https://www.cs.cornell.edu/courses/cs6110/2013sp/lectures/lec20-sp13.pdf)


### Monotonicity
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/

函数 $f : L \to L$（$L$ 是格）是 **单调的**，当且仅当 $\forall x, y \in L,\; x \preceq y \Rightarrow f(x) \preceq f(y)$


### Least Fixed-Point (LFP) and Greatest Fixed-Point (GFP)
> [!links]
> ↗ [MC Algorithms](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🧳%20%28Formal%29%20Model%20Checking%20%28MC%29/MC%20Algorithms/MC%20Algorithms.md)
> 
> ↗ [Modal Logic (模态逻辑)](../../../../📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Modal%20Logic%20%28模态逻辑%29.md)
> ↗ [Computation-Tree Logic (CTL*) Family](../../../../📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Computation-Tree%20Logic%20%28CTLstar%29%20Family.md)

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad0d315-029c-83ec-ab33-497889eec859

1. Fixed Point 的定义

设 $S$ 是一个有限状态集合，$2^S$ 是 $S$ 的幂集，即所有状态子集组成的集合。考虑一个集合算子 $F:2^S\to 2^S$。如果某个集合 $Z\subseteq S$ 满足 $F(Z)=Z$，则称 $Z$ 是 $F$ 的一个 **fixed point（不动点）**。

同一个算子可能有不止一个不动点。为了比较这些不动点，使用集合包含关系 $\subseteq$ 作为偏序：若 $X\subseteq Y$，则认为 $X$ 不大于 $Y$。

在模型检测中，相关算子通常是 **monotone（单调）** 的，即对任意 $X,Y\subseteq S$，有 $X\subseteq Y\implies F(X)\subseteq F(Y)$。由于 $(2^S,\subseteq)$ 构成完备格，Knaster–Tarski 不动点定理保证每个这样的单调算子都存在最小不动点和最大不动点。
- **Least Fixed Point（最小不动点）**：$\mu F$ 是满足 $F(Z)=Z$ 的最小集合，即它包含于 $F$ 的所有其他不动点。
- **Greatest Fixed Point（最大不动点）**：$\nu F$ 是满足 $F(Z)=Z$ 的最大集合，即 $F$ 的所有其他不动点都包含于它。

这里的“最小”和“最大”指的是**集合包含关系**，而不是集合元素的数值大小。



2. 通过迭代计算不动点

对于有限状态空间上的单调算子，可以通过迭代求解这两种不动点。

**最小不动点**从空集开始：
$$
Z_0=\varnothing,\qquad Z_{i+1}=F(Z_i).
$$

由于 $F$ 单调，迭代序列满足 $Z_0\subseteq Z_1\subseteq Z_2\subseteq\cdots$。每一步都在已有集合的基础上增加（或保持）元素。有限状态空间保证这一序列最终稳定，即存在某个 $n$，使 $Z_{n+1}=Z_n$。此时得到 $\mu F=Z_n$。

**最大不动点**从全集开始：
$$
Z_0=S,\qquad Z_{i+1}=F(Z_i).
$$

同样利用单调性，有 $Z_0\supseteq Z_1\supseteq Z_2\supseteq\cdots$。每一步都在排除（或保留）候选状态。当 $Z_{n+1}=Z_n$ 时，得到 $\nu F=Z_n$。

以下示意图展示了两种迭代方向。图中每个封闭区域表示一个状态集合；最小不动点计算从内向外扩张，最大不动点计算从外向内收缩。

```tikz
\begin{document}
\begin{tikzpicture}[scale=1, every node/.style={font=\small}]
  % Least fixed point: growing sets
  \node[font=\bfseries] at (-2.6,2.35) {Least fixed point ($\mu F$)};
  \draw[thick,gray] (-2.6,0) circle (1.75);
  \node at (-2.6,1.57) {$S$};
  \draw[thick,blue!70!black] (-2.6,0) circle (1.28);
  \node at (-2.6,1.10) {$\mu F$};
  \draw[thick,blue!65] (-2.6,0) circle (0.84);
  \node at (-2.6,0.69) {$Z_2$};
  \filldraw[fill=blue!15,draw=blue!65,thick] (-2.6,0) circle (0.40);
  \node at (-2.6,0) {$Z_1$};
  \node at (-2.6,-2.11) {$\emptyset=Z_0\subseteq Z_1\subseteq Z_2\subseteq\mu F$};

  % Greatest fixed point: shrinking sets
  \node[font=\bfseries] at (2.6,2.35) {Greatest fixed point ($\nu F$)};
  \draw[thick,gray] (2.6,0) circle (1.75);
  \node at (2.6,1.57) {$S=Z_0$};
  \draw[thick,red!70!black] (2.6,0) circle (1.28);
  \node at (2.6,1.10) {$Z_1$};
  \draw[thick,red!65] (2.6,0) circle (0.84);
  \node at (2.6,0.69) {$Z_2$};
  \filldraw[fill=red!15,draw=red!65,thick] (2.6,0) circle (0.40);
  \node at (2.6,0) {$\nu F$};
  \node at (2.6,-2.11) {$S=Z_0\supseteq Z_1\supseteq Z_2\supseteq\nu F$};
\end{tikzpicture}
\end{document}
```


3. 为什么 Eventually 对应 Least Fixed Point？
以 CTL 公式 $EFp$ 为例。它表示：从当前状态出发，**存在一条执行路径**，使得命题 $p$ 在某个有限的未来时刻成立。

记 $P=Sat(p)=\{s\in S\mid p\in L(s)\}$，并定义存在型前驱算子：
$$
\operatorname{Pre}_{\exists}(X)=\{s\in S\mid\exists t\in X,\ (s,t)\in T\}.
$$

状态 $s$ 满足 $EFp$，当且仅当以下两种情况之一成立：第一，$p$ 已在 $s$ 中成立；第二，$s$ 有一个后继状态满足 $EFp$。因此有递归方程：
$$
EFp\equiv p\lor EX(EFp).
$$

将公式解释为状态集合，得到算子 $F_{EF}(Z)=P\cup\operatorname{Pre}_{\exists}(Z)$。正确的语义由其**最小不动点**给出：
$$
Sat(EFp)=\mu Z.\bigl(P\cup\operatorname{Pre}_{\exists}(Z)\bigr).
$$

从 $Z_0=\varnothing$ 出发，第一次迭代得到 $Z_1=P$，即所有已经满足 $p$ 的状态。第二次迭代加入能够经过至多一步到达 $P$ 的状态；后续迭代依次加入能够在有限步内到达 $P$ 的状态。最终得到的集合恰好是所有满足 $EFp$ 的状态。

这里必须选择最小不动点，因为 $EFp$ 要求 **$p$ 确实在某个有限时刻发生**。如果一条路径永远在不满足 $p$ 的循环中运行，仅凭递归方程本身可能把这个循环错误地当作一个不动点；最小不动点则不会将它加入。



4. 为什么 Globally 对应 Greatest Fixed Point？

再考虑 CTL 公式 $EGp$。它表示：从当前状态出发，**存在一条无限执行路径**，并且该路径上的每一个状态都满足 $p$。

若 $s$ 满足 $EGp$，则 $p$ 首先必须在 $s$ 中成立；同时，必须存在一个后继状态，使得从该状态出发仍可以永远满足 $p$。因此：
$$
EGp\equiv p\land EX(EGp).
$$

对应的集合算子是 $F_{EG}(Z)=P\cap\operatorname{Pre}_{\exists}(Z)$，而正确的语义是它的**最大不动点**：
$$
Sat(EGp)=\nu Z.\bigl(P\cap\operatorname{Pre}_{\exists}(Z)\bigr).
$$

从 $Z_0=S$ 开始，第一次迭代排除所有不满足 $p$ 的状态；后续迭代继续排除那些无法转移到剩余候选集合的状态。达到不动点时，留下的每个状态都能选择一个仍属于该集合的后继。由于系统的状态空间有限，可以无限地重复这种选择，从而构成一条始终满足 $p$ 的无限路径。

这里必须使用最大不动点，因为 $EGp$ 要求的是**无限持续成立的可能性**，而不是通过有限步到达某个终点。若从空集计算最小不动点，即使存在一个满足 $p$ 的 self-loop，也会得到空集，错误地排除这条合法的无限路径。



5. 一个具体的状态图

考虑下面的 Kripke structure，其中只有 $s_1$ 满足 $p$，而所有状态都具有 self-loop。从 $s_0$ 还可以转移到 $s_1$。
```tikz
\begin{document}
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[circle,draw,thick,minimum size=10mm] (s0) at (0,0) {$s_0$};
  \node[circle,draw,thick,fill=green!20,minimum size=10mm] (s1) at (3,0) {$s_1$};
  \node[circle,draw,thick,minimum size=10mm] (s2) at (0,-2.0) {$s_2$};
  \draw[->,thick] (s0) edge[loop above] (s0);
  \draw[->,thick] (s0) -- (s1);
  \draw[->,thick] (s1) edge[loop above] (s1);
  \draw[->,thick] (s2) edge[loop left] (s2);
  \node[below=3mm] at (s1.south) {$p$};
  \node at (1.55,-2.65) {$P=\{s_1\}$};
\end{tikzpicture}
\end{document}
```

对 $EFp$，从空集开始迭代：
$$
\varnothing\longrightarrow\{s_1\}\longrightarrow\{s_0,s_1\} \longrightarrow\{s_0,s_1\}.
$$

所以 $Sat(EFp)=\{s_0,s_1\}$。这是因为从 $s_0$ 可以经过一步到达 $s_1$，而从 $s_2$ 无法到达任何满足 $p$ 的状态。

对 $EGp$，从全集开始迭代：
$$
\{s_0,s_1,s_2\}\longrightarrow\{s_1\}\longrightarrow\{s_1\}.
$$

所以 $Sat(EGp)=\{s_1\}$。只有从 $s_1$ 出发，才能沿 self-loop 形成一条始终满足 $p$ 的无限路径。



6. 总结
Least fixed point 和 greatest fixed point 都是单调集合算子的不动点，但它们表达的语义不同。最小不动点从确定成立的状态出发，逐步建立**有限步可达性**；最大不动点从全部候选状态出发，逐步排除不合格状态，以保留**无限期维持某性质的可能性**。

在 CTL model checking 中，这一区别典型地体现为：

$$
\boxed{Sat(EFp)=\mu Z.\bigl(P\cup\operatorname{Pre}_{\exists}(Z)\bigr)}
$$
$$
\boxed{Sat(EGp)=\nu Z.\bigl(P\cap\operatorname{Pre}_{\exists}(Z)\bigr)}
$$

因此，**Eventually 对应 least fixed point，Globally 对应 greatest fixed point**，不是单纯因为二者分别使用集合并集或交集，而是因为前者要求存在一个有限的见证（最终到达 $p$），后者要求能够无限地继续满足条件。



> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad0cd1e-97c0-83ec-936a-fe2a9b897395

3.3 两种不动点的直观对比

|           | Least Fixed Point（\(\mu\)） | Greatest Fixed Point（\(\nu\)） |
| --------- | -------------------------- | ----------------------------- |
| 计算方向      | 从 $\bot$ 向上迭代              | 从 $\top$ 向下迭代                 |
| 集合变化      | 不断添加状态                     | 不断删除状态                        |
| 证明思想      | Induction                  | Coinduction                   |
| 典型 CTL 公式 | $EF\ p$、$E[p\,U\,q]$       | $EG\ p$、$AG\ p$               |
| 典型直觉      | 有限步骤达到目标                   | 无限维持某种条件                      |

LFP 与 GFP 的对偶关系（Duality）
...


更深一层的联系：Modal μ-calculus

最后还有一个非常重要的理论联系。
在 Modal \(\mu\)-calculus 中，LFP 和 GFP 可以直接作为逻辑语言中的运算符出现：
$\mu X.\varphi(X)$
$\nu X.\varphi(X)$

其中 \(\mu\) 和 \(\nu\) 分别表示最小和最大不动点，要求变量 \(X\) 在公式中正向出现，以保证相应的语义算子是单调的。

很多 CTL 运算符都可以写成这样的形式：

| CTL          | Fixed-point 表达式               |
| ------------ | ----------------------------- |
| $EF\ p$      | $\mu X.(p\lor EX\ X)$         |
| $EG\ p$      | $\nu X.(p\land EX\ X)$        |
| $AF\ p$      | $\mu X.(p\lor AX\ X)$         |
| $AG\ p$      | $\nu X.(p\land AX\ X)$        |
| $E[p\ U\ q]$ | $\mu X.(q\lor(p\land EX\ X))$ |
| $A[p\ U\ q]$ | $\mu X.(q\lor(p\land AX\ X))$ |

这里假设 Kripke Structure 的 transition relation 是 total 的，即每个状态至少有一个后继，这是标准 CTL 语义中的常见假设。

你会发现：
CTL 中许多看起来不同的 temporal operators，实际上是由布尔运算、一步转移运算和两种 fixed-point operators 组合出来的。

这也回答了最开始的问题：LFP 和 GFP 不是简单的“同一性质的两个名字”，而是能够表达不同递归语义的两种数学构造；但通过对偶变换，它们又可以用来表达同一个性质。

整个概念关系最终可以总结为：
$\boxed{ \begin{gathered} \text{Lattice Theory}\\ \downarrow\\ \text{Fixed-point Theory }(\mu,\nu)\\ \downarrow\\ \text{CTL / Modal }\mu\text{-calculus Semantics}\\ \downarrow\\ \text{Bottom-up Model Checking}\\ \downarrow\\ \text{Fixed-point Iteration / Worklist} \end{gathered} }$

最核心的理解是：逻辑定义我们要验证的性质，不动点理论定义这些性质对应的状态集合，Bottom-up Marking 组织公式求值，Worklist 则负责高效地进行其中的递归计算。
#### Least Fixed-Point Theorem ⭐
> [!links]
> ↗ [Set Mapping & Function](../../../Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md) "fixed point & recursion"

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


### Fixed Point Computation & Worklist Algorithm
> [!links]
> ↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29.md)
> ↗ [Program Analysis Basics](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
> ↗ [Programming Language Theory (PLT)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20Theory%20%28PLT%29.md)
> 
> ↗ [MC Algorithms](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🧳%20%28Formal%29%20Model%20Checking%20%28MC%29/MC%20Algorithms/MC%20Algorithms.md)
> ↗ [Program Abstraction & Abstract Interpretation](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)

> 🔗 https://martinsteffen.github.io/compilerconstruction/worklistalgos/

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad0cd1e-97c0-83ec-936a-fe2a9b897395

Worklist Algorithm 与 Fixed-point Computation 的关系
1. Fixed Point 的基本概念

在 Formal Methods 中，许多计算问题都可以被表示为 **Fixed-point Computation（不动点计算）** 问题。
给定一个函数 $F\rightarrow L$，如果某个元素 $X^*\in L$ 满足：$F(X^*)=X^*$
那么 $X^*$ 就被称为函数 $F$ 的一个 **fixed point（不动点）**。
直观上，fixed point 表示一个稳定状态：对当前结果再次应用函数 $F$，不会产生任何变化。
在许多形式化验证问题中，我们不仅希望找到一个 fixed point，还希望找到 **Least Fixed Point（最小不动点）**，记作：
$$  
\mu F  
$$
这里的“最小”是相对于定义在 $L$ 上的偏序关系而言的。例如，如果 $L$ 是集合的幂集，偏序关系为集合包含关系 $\subseteq$，那么 least fixed point 就是所有 fixed points 中按集合包含关系最小的那个。


2. 示例：Graph Reachability

考虑一个有向图 $G=(V,E)$，其中 $V$ 是节点集合，$E\subseteq V\times V$ 是有向边集合。假设我们希望计算从初始节点 $A$ 出发能够到达的所有节点。

定义后继运算 $Post(X)$：
$$  
Post(X)={v\in V\mid \exists u\in X,\ (u,v)\in E}  
$$

其中 $Post(X)$ 表示从节点集合 $X$ 出发，经过一步转移能够到达的所有节点。

接下来定义函数：
$$  
F(X)={A}\cup Post(X)  
$$

这个函数表示：给定当前的节点集合 $X$，将初始节点 $A$ 和从 $X$ 经过一步能够到达的所有节点合并，得到一个新的节点集合。

从空集开始，反复应用 $F$：
$$  
X_0=\varnothing  
$$
$$  
X_{n+1}=F(X_n)  
$$

假设图中的边为 $A\rightarrow B$、$A\rightarrow C$、$B\rightarrow D$ 和 $C\rightarrow D$，那么迭代过程为：
$$  
\begin{aligned}  
X_0 &= \varnothing\  
X_1 &= F(X_0)={A}\  
X_2 &= F(X_1)={A,B,C}\  
X_3 &= F(X_2)={A,B,C,D}\  
X_4 &= F(X_3)={A,B,C,D}  
\end{aligned}  
$$

由于 $X_4=X_3$，继续应用 $F$ 不再产生新的节点。因此：
$$  
F(X_3)=X_3  
$$

这说明 $X_3$ 是函数 $F$ 的一个 fixed point。

由于 $F$ 是关于集合包含关系的 monotone function（单调函数），并且我们从最小元素 $\varnothing$ 开始迭代，因此在有限图中，该过程最终得到的是 **least fixed point**：
$$  
Reach(A)=\mu F={A,B,C,D}  
$$

这一计算过程称为 **Fixed-point Iteration**。


3. Worklist Algorithm 作为 Fixed-point Computation 的实现方法

普通的 fixed-point iteration 通常通过反复计算完整的 $F(X)$ 来更新当前结果，直到相邻两次迭代的结果相同。

然而，在许多实际问题中，每次迭代只有一小部分信息发生变化。如果每次都重新计算整个函数，就可能产生大量不必要的重复计算。

**Worklist Algorithm 可以被理解为一种增量式（incremental）的 fixed-point computation 方法。**

它的核心思想是：只重新处理那些可能受到新信息影响的部分，而不必在每次迭代中重新计算整个系统。

以 graph reachability 为例，算法维护两个集合：
- $Visited$：已经发现的可达节点。
- $Worklist$：已经发现但尚未处理的节点。

算法首先将初始节点 $A$ 加入这两个集合。随后不断从 $Worklist$ 中取出一个节点，检查其后继节点。如果发现新的可达节点，则将其加入 $Visited$ 和 $Worklist$。

对于已经发现的节点，不需要重复加入 $Worklist$，因为它们的后继已经被处理，或者将在之后被处理。

当 $Worklist$ 为空时，意味着所有已发现节点的后继都已被检查，并且不存在尚未处理的新节点。此时，可达节点集合已经稳定，满足：
$$  
F(Visited)=Visited  
$$

因此，worklist 算法计算得到了与普通 fixed-point iteration 相同的 least fixed point。

两种方法的主要区别在于计算策略：

| |Fixed-point Iteration|Worklist Algorithm|
|---|---|---|
|核心思想|反复应用函数直到结果稳定|只处理可能引起结果变化的任务|
|计算方式|通常进行全局更新|增量式、局部更新|
|终止条件|$X_{n+1}=X_n$|$Worklist=\varnothing$|
|计算结果|Fixed point|Fixed point|
|优势|数学定义直接、实现简单|避免不必要的重复计算|

需要注意的是，worklist 为空能够表示 fixed point 已经达到，依赖于算法正确维护了任务之间的依赖关系：每次信息发生变化，都必须将可能受影响的任务重新加入 worklist。


 4. 数学基础与收敛条件
Worklist Algorithm 与 fixed-point theory 的联系可以通过 **Lattice Theory（格理论）** 和 **Monotone Functions（单调函数）** 得到更严格的解释。

假设 $(L,\sqsubseteq)$ 是一个有限高度的偏序结构，具有最小元素 $\bot$，并且 $F\rightarrow L$ 是一个 monotone function，即：
$$  
X\sqsubseteq Y\implies F(X)\sqsubseteq F(Y)  
$$
如果从 $\bot$ 开始进行迭代：
$$  
X_0=\bot,\qquad X_{n+1}=F(X_n)  
$$

那么由于 $F$ 的单调性，得到一个单调递增序列：
$$  
X_0\sqsubseteq X_1\sqsubseteq X_2\sqsubseteq\cdots  
$$

由于该结构不存在无限严格递增链，迭代最终会稳定在一个 fixed point。进一步，由于迭代从最小元素开始，而且 $F$ 是单调的，这个 fixed point 就是 least fixed point $\mu F$。

对于基于局部更新的 worklist 算法，如果各个更新操作是单调且不会丢失已获得的信息，并且所有受影响的任务都会被重新调度，那么也可以利用类似的数学性质证明其终止性与正确性。

因此，fixed-point theory 与 worklist algorithm 分别回答两个不同的问题：
- **Fixed-point Theory**：定义需要计算的数学对象，并解释解的存在性、最小性及收敛条件。
- **Worklist Algorithm**：提供一种计算策略，通过增量式传播信息，避免重复计算，从而高效地求出目标 fixed point。

两者的关系可以概括为：
$$  
\boxed{\text{Worklist Algorithm}\approx\text{Incremental Fixed-point Computation}}  
$$

这种关系广泛存在于 Model Checking、Dataflow Analysis、Abstract Interpretation、Datalog Evaluation 和 Constraint Propagation 等领域。


---
Worklist Algorithm 的本质
可以从三个不同层次理解：

|层次|概念|回答的问题|
|---|---|---|
|Mathematical|Fixed-point theory / lattice theory|我们要计算什么解？|
|Algorithmic|Worklist iteration|怎样高效计算这个解？|
|Implementation|Queue / Stack / Set / Priority Queue|怎样管理待处理任务？|

其中最值得记住的是：
$\boxed{ \begin{gathered} \text{Information Changes}\\ \Downarrow\\ \text{Schedule Affected Tasks}\\ \Downarrow\\ \text{Propagate New Information}\\ \Downarrow\\ \text{Repeat Until Stable} \end{gathered} }$

另外，有一个容易忽略的重要区别：
Worklist 为空不自动意味着算法正确。 我们必须保证，任何可能改变最终结果的更新都能触发相应任务；只有这样，worklist 清空才真正意味着计算已经稳定。


## Ref
[👍 南大软分课程笔记｜05 数据流分析理论]: https://blog.wohin.me/posts/nju-program-analysis-05/

[Kleene fixed-point theorem| wikipedia]: https://en.wikipedia.org/wiki/Kleene_fixed-point_theorem