# Partial Order & Order Theory

[TOC]



## Res
### Related Topics
↗ [Function & Mapping of Set](../../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)


### Other Resources



## Intro
> 🔗 https://zh.wikipedia.org/zh-cn/%E5%BA%8F%E7%90%86%E8%AE%BA

次序无所不在——至少在数学和相关领域比如[计算机科学](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6 "计算机科学")是这样。你典型遇到的第一个次序是[小学](https://zh.wikipedia.org/wiki/%E5%B0%8F%E5%AD%A6 "小学")数学教育中的[自然数](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E6%95%B0 "自然数")的次序。这个直觉概念很容易扩展到其他[数](https://zh.wikipedia.org/wiki/%E6%95%B0 "数")的集合的排序，比如[整数](https://zh.wikipedia.org/wiki/%E6%95%B4%E6%95%B0 "整数")和[实数](https://zh.wikipedia.org/wiki/%E5%AE%9E%E6%95%B0 "实数")。实际上大于或小于另一个数的概念一般是数系统的基本直觉（尽管你通常还感兴趣于两个数实际的[差](https://zh.wikipedia.org/wiki/%E5%B7%AE "差")，它不能由这个次序给出）。排序的另一个非常熟悉的例子是词典中[词典次序](https://zh.wikipedia.org/w/index.php?title=%E8%AF%8D%E5%85%B8%E6%AC%A1%E5%BA%8F&action=edit&redlink=1 "词典次序（页面不存在）")。

上述类型的次序有特殊性质：每个元素都是可以“比较”于另一个元素，就是说，它或者大于、或者小于、或者等于另一个元素。但是，这不总是想要的要求。一个周知的例子是[集合](https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88_\(%E6%95%B0%E5%AD%A6\) "集合 (数学)")的[子集](https://zh.wikipedia.org/wiki/%E5%AD%90%E9%9B%86 "子集")排序。如果一个集合A包含集合B的所有元素，则 _B_ 被称为小于等于 _A_。然而有些集合不能在这种方式来比较，因为其中每个都包含着其他集合中不存在的某些元素。所以，子集包含是[偏](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F "偏序")次序，对立了前面给出的[全](https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BA%8F "全序")次序。

序理论在一般性架构下捕获了上述例子引发的直觉次序。这是通过指定[关系](https://zh.wikipedia.org/wiki/%E5%85%B3%E7%B3%BB_\(%E6%95%B0%E5%AD%A6\) "关系 (数学)") $\leq$ 必须是数学上次序的一些性质来完成的。这种更加抽象的方式更有意义，因为你可以从一般性架构推导出各种定理，而不用关心任何特定次序的细节。这种洞察可以容易的转换到很多具体应用中。

由次序的各种实践使用所驱动，已经定义了多个特殊种类的有序集合，其中某些已经发展出自己的数学领域。此外，序理论不限制于各种种类的排序关系，还考虑在它们之间的适当的[函数](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0 "函数")。函数的序理论的性质的一个简单例子来自在[数学分析](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90 "数学分析")中常见的[单调函数](https://zh.wikipedia.org/wiki/%E5%8D%95%E8%B0%83%E5%87%BD%E6%95%B0 "单调函数")。

> 🔗 https://en.wikipedia.org/wiki/Order_theory

**Order theory** is a branch of [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") that investigates the intuitive notion of order using [binary relations](https://en.wikipedia.org/wiki/Binary_relation "Binary relation"). It provides a formal framework for describing statements such as "this is [less than](https://en.wikipedia.org/wiki/Less_than "Less than") that" or "this precedes that".


### Formal Definition: Sequence & Tuples
> [!links]
> ↗ [Number Sequence](../../../../🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)

 > 📖 Introduction to the Theory of Computation, 3rd edition, by Michael Sipser
 
A **sequence** of objects is a list of these objects in some order. We usually designate a sequence by writing the list within parentheses. For example, the sequence 7, 21, 57 would be written $$(7,21,57).$$
The order doesn’t matter in a set, but in a sequence it does. Hence $(7,21,57)$ is not the same as $(57,7,21)$. Similarly, repetition does matter in a sequence, but it doesn’t matter in a set. Thus $(7,7,21,57)$ is different from both of the other sequences, whereas the set $\{7,21,57\}$ is identical to the set $\{7,7,21,57\}$. 

As with sets, sequences may be finite or infinite. Finite sequences often are called **tuples**. A sequence with k elements is a **k-tuple**. Thus $(7,21,57)$ is a 3-tuple. A 2-tuple is also called an **ordered pair**.

Sets and sequences may appear as elements of other sets and sequences. For example, the **power set** of A is the set of all subsets of A. If A is the set $\{0,1\}$, the power set of A is the set $\{∅,\{0\},\{1\},\{0,1\}\}$. The set of all ordered pairs whose elements are 0s and 1s is $\{(0,0),(0,1),(1,0), (1,1)\}$.

If A and B are two sets, the **Cartesian product** or **cross product** of A and B, written $A\times B$, is the set of all ordered pairs wherein the first element is a member of A and the second element is a member of B.

We can also take the Cartesian product of $k$ sets, $A_1$, $A_2$, ... ,$A_k$ , written $A_1 \times A_2 \times ··· \times A_k$. It is the set consisting of all k-tuples $(a_1, a_2, ..., a_k)$ where $a_i \in A_i$.

If we have the Cartesian product of a set with itself, we use the shorthand $$\overbrace{A \times A \times ... \times A}^{k} = A^k$$

### Partial Order (偏序) & Partially Ordered Sets (Posets)
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.2

A _partially ordered set_ or poset is a tuple $(L, \sqsubseteq)$, meaning a set of elements $L$ with an (partially) ordering relationship $\sqsubseteq$ on it, that uphold: $$\begin{aligned} & \forall a. \ a\sqsubseteq a & \text{reflexive} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq a\implies a=b & \text{anti-symetric} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq c\implies a\sqsubseteq c & \text{transitive}
\end{aligned}$$
Common partially ordered sets are the integers $(ℤ,≤)$ (also in the other direction $(ℤ,≥)$), the booleans $(\{𝚝𝚝,𝚏𝚏\},\implies)$, and the set of Sign′s $(2^{Sign},\subseteq)$.
#### Poset Visualization & Hasse Diagram
> 🔗 [Hasse diagram - Wikipedia](https://en.wikipedia.org/wiki/Hasse_diagram)
- We can draw the diagram of a poset. Below is the so called **Hasse Diagram** of poset $(2^{\text{\{A, B, C\}}}, \subseteq)$:
- ![|400](../../../../../../Assets/Pics/Screenshot%202025-10-09%20at%2022.52.59.png)
- <small><a>https://blog.wohin.me/posts/nju-program-analysis-05/</a></small>
- Here we only draw the imitate next elements in the order, i.e. connection to the immediate adjacent nodes.


### Functions Between Orders (Posets)
> 🔗 https://en.wikipedia.org/wiki/Order_theory#Functions_between_orders

It is reasonable to consider functions between partially ordered sets having certain additional properties that are related to the ordering relations of the two sets. The most fundamental condition that occurs in this context is [monotonicity](https://en.wikipedia.org/wiki/Monotonic_function "Monotonic function"). A function _f_ from a poset _P_ to a poset _Q_ is **monotone**, or **order-preserving**, if _a_ ≤ _b_ in _P_ implies _f_(_a_) ≤ _f_(_b_) in _Q_ (Noting that, strictly, the two relations here are different since they apply to different sets.). The converse of this implication leads to functions that are **order-reflecting**, i.e. functions _f_ as above for which _f_(_a_) ≤ _f_(_b_) implies _a_ ≤ _b_. On the other hand, a function may also be **order-reversing** or **antitone**, if _a_ ≤ _b_ implies _f_(_a_) ≥ _f_(_b_).

An **[order-embedding](https://en.wikipedia.org/wiki/Order-embedding "Order-embedding")** is a function _f_ between orders that is both order-preserving and order-reflecting. Examples for these definitions are found easily. For instance, the function that maps a natural number to its successor is clearly monotone with respect to the natural order. Any function from a discrete order, i.e. from a set ordered by the identity order "=", is also monotone. Mapping each natural number to the corresponding real number gives an example for an order embedding. The [set complement](https://en.wikipedia.org/wiki/Complement_\(set_theory\) "Complement (set theory)") on a [powerset](https://en.wikipedia.org/wiki/Powerset "Powerset") is an example of an antitone function.

An important question is when two orders are "essentially equal", i.e. when they are the same up to renaming of elements. **[Order isomorphisms](https://en.wikipedia.org/wiki/Order_isomorphism "Order isomorphism")** are functions that define such a renaming. An order-isomorphism is a monotone [bijective](https://en.wikipedia.org/wiki/Bijective "Bijective") function that has a monotone inverse. This is equivalent to being a [surjective](https://en.wikipedia.org/wiki/Surjective "Surjective") order-embedding. Hence, the image _f_(_P_) of an order-embedding is always isomorphic to _P_, which justifies the term "embedding".

A more elaborate type of functions is given by so-called **[Galois connections](https://en.wikipedia.org/wiki/Galois_connection "Galois connection")**. Monotone Galois connections can be viewed as a generalization of order-isomorphisms, since they constitute of a pair of two functions in converse directions, which are "not quite" inverse to each other, but that still have close relationships.

Another special type of self-maps on a poset are **[closure operators](https://en.wikipedia.org/wiki/Closure_operator#Closure_operators_on_partially_ordered_sets "Closure operator")**, which are not only monotonic, but also [idempotent](https://en.wikipedia.org/wiki/Idempotent "Idempotent"), i.e. _f_(_x_) = _f_(_f_(_x_)), and **[extensive](https://en.wikipedia.org/wiki/Closure_operator "Closure operator")** (or _inflationary_), i.e. _x_ ≤ _f_(_x_). These have many applications in all kinds of "closures" that appear in mathematics.

Besides being compatible with the mere order relations, functions between posets may also behave well with respect to special elements and constructions. For example, when talking about posets with least element, it may seem reasonable to consider only monotonic functions that preserve this element, i.e. which map least elements to least elements. If binary infima ∧ exist, then a reasonable property might be to require that _f_(_x_ ∧ _y_) = _f_(_x_) ∧ _f_(_y_), for all _x_ and _y_. All of these properties, and indeed many more, may be compiled under the label of limit-preserving functions.

Finally, one can invert the view, switching from _functions of orders_ to _orders of functions_. Indeed, the functions between two posets _P_ and _Q_ can be ordered via the [pointwise order](https://en.wikipedia.org/wiki/Pointwise_order "Pointwise order"). For two functions _f_ and _g_, we have _f_ ≤ _g_ if _f_(_x_) ≤ _g_(_x_) for all elements _x_ of _P_. This occurs for example in [domain theory](https://en.wikipedia.org/wiki/Domain_theory "Domain theory"), where [function spaces](https://en.wikipedia.org/wiki/Function_space "Function space") play an important role.

#### Order-Preserving & Monotone Functions

#### Order Embedding

#### Order Isomorphisms

#### Galois Connections



## Special Types of Orders / Properties /Relations
> 🔗 https://en.wikipedia.org/wiki/Order_theory#Special_types_of_orders

Many of the structures that are studied in order theory employ order relations with further properties. In fact, even some relations that are not partial orders are of special interest. Mainly the concept of a [preorder](https://en.wikipedia.org/wiki/Preorder "Preorder") has to be mentioned. A preorder is a relation that is reflexive and transitive, but not necessarily antisymmetric. Each preorder induces an [equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation "Equivalence relation") between elements, where _a_ is equivalent to _b_, if _a_ ≤ _b_ and _b_ ≤ _a_. Preorders can be turned into orders by identifying all elements that are equivalent with respect to this relation.

Several types of orders can be defined from numerical data on the items of the order: a [total order](https://en.wikipedia.org/wiki/Total_order "Total order") results from attaching distinct real numbers to each item and using the numerical comparisons to order the items; instead, if distinct items are allowed to have equal numerical scores, one obtains a [strict weak ordering](https://en.wikipedia.org/wiki/Strict_weak_ordering "Strict weak ordering"). Requiring two scores to be separated by a fixed threshold before they may be compared leads to the concept of a [semiorder](https://en.wikipedia.org/wiki/Semiorder "Semiorder"), while allowing the threshold to vary on a per-item basis produces an [interval order](https://en.wikipedia.org/wiki/Interval_order "Interval order").

An additional simple but useful property leads to so-called **[well-founded](https://en.wikipedia.org/wiki/Well-founded_relation "Well-founded relation")**, for which all non-empty subsets have a minimal element. Generalizing well-orders from linear to partial orders, a set is **[well partially ordered](https://en.wikipedia.org/wiki/Well_partial_order "Well partial order")** if all its non-empty subsets have a finite number of minimal elements.

Many other types of orders arise when the existence of [infima](https://en.wikipedia.org/wiki/Infimum "Infimum") and [suprema](https://en.wikipedia.org/wiki/Supremum "Supremum") of certain sets is guaranteed. Focusing on this aspect, usually referred to as [completeness](https://en.wikipedia.org/wiki/Completeness_\(order_theory\) "Completeness (order theory)") of orders, one obtains:
- [Bounded posets](https://en.wikipedia.org/wiki/Bounded_poset "Bounded poset"), i.e. posets with a [least](https://en.wikipedia.org/wiki/Least_element "Least element") and [greatest element](https://en.wikipedia.org/wiki/Greatest_element "Greatest element") (which are just the supremum and infimum of the [empty subset](https://en.wikipedia.org/wiki/Empty_subset "Empty subset")),
- [Lattices](https://en.wikipedia.org/wiki/Lattice_\(order\) "Lattice (order)"), in which every non-empty finite set has a supremum and infimum,
- [Complete lattices](https://en.wikipedia.org/wiki/Complete_lattice "Complete lattice"), where every set has a supremum and infimum, and
- [Directed complete partial orders](https://en.wikipedia.org/wiki/Directed_complete_partial_order "Directed complete partial order") (dcpos), that guarantee the existence of suprema of all [directed subsets](https://en.wikipedia.org/wiki/Directed_set "Directed set") and that are studied in [domain theory](https://en.wikipedia.org/wiki/Domain_theory "Domain theory").
- Partial orders with complements, or _poc sets_, are posets with a unique bottom element 0, as well as an order-reversing involution $∗$ such that $a\leq a^{*}\implies a=0$.

However, one can go even further: if all finite non-empty infima exist, then ∧ can be viewed as a total binary operation in the sense of [universal algebra](https://en.wikipedia.org/wiki/Universal_algebra "Universal algebra"). Hence, in a lattice, two operations ∧ and ∨ are available, and one can define new properties by giving identities, such as
_x_ ∧ (_y_ ∨ _z_)  =  (_x_ ∧ _y_) ∨ (_x_ ∧ _z_), for all _x_, _y_, and _z_.

This condition is called **distributivity** and gives rise to [distributive lattices](https://en.wikipedia.org/wiki/Distributive_lattice "Distributive lattice"). There are some other important distributivity laws which are discussed in the article on [distributivity in order theory](https://en.wikipedia.org/wiki/Distributivity_\(order_theory\) "Distributivity (order theory)"). Some additional order structures that are often specified via algebraic operations and defining identities are
- [Heyting algebras](https://en.wikipedia.org/wiki/Heyting_algebra "Heyting algebra") and
- [Boolean algebras](https://en.wikipedia.org/wiki/Boolean_algebra_\(structure\) "Boolean algebra (structure)"),

which both introduce a new operation ~ called **negation**. Both structures play a role in [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic") and especially Boolean algebras have major applications in [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"). Finally, various structures in mathematics combine orders with even more algebraic operations, as in the case of [quantales](https://en.wikipedia.org/wiki/Quantale "Quantale"), that allow for the definition of an addition operation.

Many other important properties of posets exist. For example, a poset is **locally finite** if every closed [interval](https://en.wikipedia.org/wiki/Interval_\(mathematics\) "Interval (mathematics)") [_a_, _b_] in it is [finite](https://en.wikipedia.org/wiki/Finite_set "Finite set"). Locally finite posets give rise to [incidence algebras](https://en.wikipedia.org/wiki/Incidence_algebra "Incidence algebra") which in turn can be used to define the [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic#Generalizations "Euler characteristic") of finite bounded posets.


### Preorders & Quasi-orders 🤔


### Well-Founded Relation (良基关系)
> [!links]
> ↗ [Mathematics](../../../../Mathematics.md) "well-founded induction"

> 🔗 https://thzt.github.io/2017/03/03/recursive-function-3/

**定义1:**
集合 $A$ 上的**良基关系**是一个二元关系 $\prec$，如果不存在无限下降序列 (infinite descending sequence) $a_0 \succ a_1 \succ a_2 \cdots$。
* 例如，自然数上的关系 $<$ 就是一个良基关系。
* 但是 $\leqslant$ 却不是，因为存在一个无限下降序列 $a_0 \geqslant a_1 \geqslant a_2 \cdots$。
根据良基关系，我们可以定义集合中的**最小元**：$a \in A$ 为最小元，如果不存在 $a' \in A$，使得 $a' \prec a$。

**定义2:**
对于良基关系，有一个等价的定义：$A$ 上的二元关系 $\prec$ 是良基的，当且仅当 $A$ 的每一个非空子集 $B$ 有最小元。

我们可以证明一下这两种说法等价性。要证明当且仅当，我们需要证明充分性和必要性：
 (1) 充分性
* **要证**：$A$ 上的二元关系 $\prec$ 是良基的，则 $A$ 的每一个非空子集 $B$ 有最小元。
* **使用反证法**：如果 $B$ 没有最小元，则对于每个 $a \in B$，总可以找到 $a' \in B$，使得 $a' \prec a$。
* 但是，如果这样的话，我们就可以对任何 $a_0 \in B$，以 $a_0$ 开始构造一个无限下降序列 $a_0 \succ a_1 \succ a_2 \cdots$，这与 $\prec$ 是一个良基关系矛盾。充分性证毕。
 (2) 必要性
* **要证**：如果 $A$ 的每一个非空子集 $B$ 都有最小元，则 $A$ 上用于比较的二元关系 $\prec$ 是良基的。
* **证明**：由于 $A$ 的每一个非空子集 $B$ 都有最小元，则不可能存在无限下降序列 $a_0 \succ a_1 \succ a_2 \cdots$。
* **因此**：$\prec$ 是良基的。必要性证毕。

**结论**：$A$ 上的二元关系 $\prec$ 是良基的，当且仅当 $A$ 的每一个非空子集 $B$ 有最小元。


### Total Order /Linear Order (全序)
> 🔗 https://en.wikipedia.org/wiki/Total_order

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), a **total order** or **linear order** is a [partial order](https://en.wikipedia.org/wiki/Partial_order "Partial order") in which any two elements are comparable. That is, a total order is a [binary relation](https://en.wikipedia.org/wiki/Binary_relation "Binary relation") $≤$ on some [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") $X$, which satisfies the following for all a,b and c in $X$:
1. $a\leq a$ ([reflexive](https://en.wikipedia.org/wiki/Reflexive_relation "Reflexive relation")).
2. If ![{\displaystyle a\leq b}|38](https://wikimedia.org/api/rest_v1/media/math/render/svg/41558abc50886fdf38817495b243958d7b3dd39b) and $b\leq c$ then $a\leq c$ ([transitive](https://en.wikipedia.org/wiki/Transitive_relation "Transitive relation")).
3. If ![{\displaystyle a\leq b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/41558abc50886fdf38817495b243958d7b3dd39b) and $b\leq a$ then $a=b$ ([antisymmetric](https://en.wikipedia.org/wiki/Antisymmetric_relation "Antisymmetric relation")).
4. $a\leq b$ or $b\leq a$ ([strongly connected](https://en.wikipedia.org/wiki/Connected_relation "Connected relation"), formerly called totality).

Requirements 1. to 3. just make up the definition of a partial order. Reflexivity (1.) already follows from strong connectedness (4.), but is required explicitly by many authors nevertheless, to indicate the kinship to partial orders.[1](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTEHalmos1968Ch.14-1) Total orders are sometimes also called **simple**,[2](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTEBirkhoff19672-2) **connex**,[3](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTESchmidtStr%C3%B6hlein199332-3) or **full orders**.[4](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTEFuchs19632-4)

A set equipped with a total order is a **totally ordered set**;[5](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTEDaveyPriestley19903-5) the terms **simply ordered set**,[2](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTEBirkhoff19672-2) **linearly ordered set**,[3](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTESchmidtStr%C3%B6hlein199332-3)[5](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTEDaveyPriestley19903-5) **toset**[6](https://en.wikipedia.org/wiki/Total_order#cite_note-Young_2016-6) and **loset**[7](https://en.wikipedia.org/wiki/Total_order#cite_note-7)[8](https://en.wikipedia.org/wiki/Total_order#cite_note-8) are also used. The term _chain_ is sometimes defined as a synonym of _totally ordered set_,[5](https://en.wikipedia.org/wiki/Total_order#cite_note-FOOTNOTEDaveyPriestley19903-5) but generally refers to a totally ordered subset of a given partially ordered set.

An extension of a given partial order to a total order is called a [linear extension](https://en.wikipedia.org/wiki/Linear_extension "Linear extension") of that partial order.

#### Total Order Relation

#### Totally Ordered Sets (Tosets)

#### Well Order (良序)

##### Well-Ordering/ Zermelo Theorem


### Completeness of Orders (Posets)
#### Bounded Poset
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/
> **Upper/ lower bounds of a poset; lub & join; glb & meet**

给定一个偏序集$(P,\preceq)$和它的子集$S（S\subseteq P）$，我们说$u\in P$是$S$的一个**上界**，当且仅当$\forall x\in S, x\preceq u$；类似地，$l\in P$是$S$的一个**下界**，当且仅当$\forall x\in S, l\preceq x$。

若$S$是由下图中绿色部分组成的集合，那么$\{a,b,c\}$就是$S$的上界，$\{ \}$是$S$的下界：
![|300](../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.51.15.png)

在此基础上，我们定义**最小上界（叫做lub或join）**，记为$\lfloor\rfloor S$，对于$S$的每一个上界$u$，有$\lfloor\rfloor S \preceq u \lfloor\rfloor S \preceq u$；类似地，定义最大下界（叫做glb或meet），记为$\lceil\rceil S$，对于$S$的每一个下界$l$，有$l\preceq l\lceil\rceil S\preceq\lceil\rceil S$。

还是以集合为例，若$S$是由下图中绿色部分组成的集合，则$\{a,b,c\}$和$\{a,b\}$都是它的上界，后者还是最小上界；$\{ \}$则是$S$的唯一下界，因此也是最大下界：

![|300](../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.51.41.png)

若$S$只包含两个元素$a$和$b$，我们也可以将$\lfloor\rfloor S$写为$a\lfloor\rfloor b$，将$\lceil\rceil S$写为$a\lceil\rceil b$。

关于上下界的两个特性：
1. ==不是所有的poset都有lub或glb。== (所以，不是所有的偏序集可以称之为格)
2. 如果一个poset有lub或glb，它一定是唯一的。这一点可以借助偏序关系的antisymmetry特点证明。
#### Lattice (格) ⭐
> [!links]
> ↗ [Lattice (Order Theory)](Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.3

A lattice is partially ordered sets $(L,\sqsubseteq)$, with two extra operators $\lfloor \rfloor$ (join) and $\lceil \rceil$ (meet).
- $\lfloor \rfloor$ is the **least upper bound (lub), or join**.  $a\lfloor \rfloor b$, meaning that $$\forall c. \ a\sqsubseteq c\land b\sqsubseteq c \implies a\lfloor \rfloor b \sqsubseteq c.$$
- $\lceil \rceil$ is the **greatest lower bound (glb), or meet**. $a\lceil \rceil b$ meaning that $$\forall c. \ c\sqsubseteq a\land c\sqsubseteq b \implies c \sqsubseteq a\lceil \rceil b.$$
Furthermore, this implies that there exist a least bound $\bot=\lceil\rceil L$ and a greatest bound $\top=\lfloor\rfloor L$, from which we have the following identities: $$\begin{aligned}
& \top\lceil\rceil a = a = a\lfloor\rfloor \bot \\
& \top\lfloor\rfloor a = \top \\
& a \lceil\rceil\bot = \bot
\end{aligned}$$
#### Directed Subset of Posets
> 🔗 https://thzt.github.io/2018/02/09/semantics-7/

**有向子集（Directed Subset）**
偏序集 $(D, \leqslant)$ 的非空子集 $S \subseteq D$ 叫做**有向子集**，当且仅当，对于 $S$ 中的任意元素 $a, b \in S$，存在 $S$ 中的一个元素 $c$，使得 $a \leqslant c$ 且 $b \leqslant c$。

定义
1. **有向完全偏序集 (Directed Complete Partial Order, DCPO)**：如果一个偏序集 $(D, \leqslant)$ 的每个有向子集 $S \subseteq D$ 都有上确界（记为 $\bigvee S$），就称它是一个**有向完全偏序集**。
2. **完全偏序集 (Complete Partial Order, CPO)**：此外，如果它还有最小元，就称它是一个**完全偏序集**。

> [!IMPORTANT] 注意
> 完全偏序集并不是每一个子集都有上确界，而是它的每一个**有向子集**都有上确界。
##### Continuous Functions
> 🔗 https://thzt.github.io/2018/02/09/semantics-7/

**连续函数 (Continuous Functions)**
假设 $(D, \leqslant)$ 与 $(E, \leqslant)$ 是完全偏序集，$f : D \to E$ 是集合上定义的一个函数。

单调性 (Monotonicity)
- 对于任意的 $d, d' \in D$，如果 $d \leqslant d'$ 就有 $f(d) \leqslant f(d')$，我们就说 $f$ 是**单调的**。

连续性 (Continuity)
- 如果 $f$ 是单调的，且对于任意有向子集 $S \subseteq D$，有：$f(\bigvee S) = \bigvee f(S)$，就称 $f$ 是**连续的**。
#### Directed Complete Partial Orders (dcpos)

#### Poc Sets


### Distributivity & Distributivity Lattice
> 🔗 https://en.wikipedia.org/wiki/Distributive_lattice



## Ref
[全序关系和偏序关系的区别是什么？ - 三川啦啦啦的回答 - 知乎]: https://www.zhihu.com/question/36758436/answer/500886873

偏序与完全序（离散数学知识）
**（1）偏序与完全序的概念：**
- [偏序关系](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%81%8F%E5%BA%8F%E5%85%B3%E7%B3%BB&zhida_source=entity)、[全序关系](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%85%A8%E5%BA%8F%E5%85%B3%E7%B3%BB&zhida_source=entity)都是[公理集合论](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%85%AC%E7%90%86%E9%9B%86%E5%90%88%E8%AE%BA&zhida_source=entity)中的一种[二元关系](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E4%BA%8C%E5%85%83%E5%85%B3%E7%B3%BB&zhida_source=entity)。
- 偏序集合：配备了偏序关系的集合。
	- 偏序：只对部分要元素成立关系（部分可比）
	- 集合内只有部分元素之间在这个关系下是可以比较的。
	- 比如：比如复数集中并不是所有的数都可以比较大小，那么“大小”就是复数集的一个偏序关系。
- 全序集合：配备了全序关系的集合。
	- 全序：对集合中任意两个元素都有关系
	- 集合内任何一对元素在在这个关系下都是相互可比较的。
	- 比如：有限长度的序列按字典序是全序的。最常见的是单词在字典中是全序的。
**（2）偏序与完全序的定义:**
- 偏序的定义：
	- 设R是集合A上的一个二元关系，若R满足：
		- Ⅰ [自反性](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E8%87%AA%E5%8F%8D%E6%80%A7&zhida_source=entity)：对任意x∈A，有xRx；
		- Ⅱ [反对称性](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%8F%8D%E5%AF%B9%E7%A7%B0%E6%80%A7&zhida_source=entity)（即反对称关系）：对任意x,y∈A，若xRy，且yRx，则x=y；
		- Ⅲ [传递性](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E4%BC%A0%E9%80%92%E6%80%A7&zhida_source=entity)：对任意x, y,z∈A，若xRy，且yRz，则xRz。
	- 则称R为A上的偏序关系。
- 全序的定义：
	- 设集合X上有一全序关系，如果我们把这种关系用 ≤ 表述，则下列陈述对于 X 中的所有 a, b 和 c 成立：
		- 如果 a ≤ b 且 b ≤ a 则 a = b (反对称性)
		- 如果 a ≤ b 且 b ≤ c 则 a ≤ c (传递性)
		- a ≤ b 或 b ≤ a (完全性)
	- **注意**：
		- 完全性本身也包括了自反性。 所以，全序关系必是偏序关系。

---
以上答主好像都没有举例子，那我就当一回搬运工吧。
- 集合的包含关系是一种偏序。
- 在整数集中定义偏序：若a能整除b，我们就记为a≺b
显然它满足序公理。但整数集中，不是任何两个数都存在整除关系，这个关系是**局部**的（partial），太“偏颇”，于是被称为**偏序**。

[👍 南大软分课程笔记｜05 数据流分析理论]: https://blog.wohin.me/posts/nju-program-analysis-05/

[语言背后的代数学（七）：数学结构]: https://thzt.github.io/2018/02/09/semantics-7/

[Understanding the Definition of Well-Founded Induction | mathematics]: https://math.stackexchange.com/q/2792061/1230830
