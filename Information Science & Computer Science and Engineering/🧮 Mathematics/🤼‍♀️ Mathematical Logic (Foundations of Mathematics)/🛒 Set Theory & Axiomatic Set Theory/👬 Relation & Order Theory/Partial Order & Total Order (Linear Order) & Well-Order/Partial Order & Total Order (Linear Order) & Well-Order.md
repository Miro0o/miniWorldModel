# Partial Order & Total Order (Linear Order) & Well-Order

[TOC]



## Res
### Related Topics
↗ [Function & Mapping of Set](../../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)



## Intro
### Total Order (全序)
#### Total Order Relation
#### Totally Ordered Sets (Tosets)
#### Well Order
##### Well-Ordering/ Zermelo Theorem


### Partial Order (偏序)
> [!links]
> ↗ [Lattice (Order Theory)](Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

#### Partial Order Relation
##### Well-Founded Relation (良基关系)
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
#### Partially Ordered Sets (Posets)
> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.2

A _partially ordered set_ or poset is a tuple $(L, \sqsubseteq)$, meaning a set of elements $L$ with an (partially) ordering relationship $\sqsubseteq$ on it, that uphold: $$\begin{aligned} & \forall a. \ a\sqsubseteq a & \text{reflexive} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq a\implies a=b & \text{anti-symetric} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq c\implies a\sqsubseteq c & \text{transitive}
\end{aligned}$$
Common partially ordered sets are the integers $(ℤ,≤)$ (also in the other direction $(ℤ,≥)$), the booleans $(\{𝚝𝚝,𝚏𝚏\},\implies)$, and the set of Sign′s $(2^{Sign},\subseteq)$.
##### Hasse Diagram
> 🔗 [Hasse diagram - Wikipedia](https://en.wikipedia.org/wiki/Hasse_diagram)
- We can draw the diagram of a poset. Below is the so called **Hasse Diagram** of poset $(2^{\text{\{A, B, C\}}}, \subseteq)$:
- ![|400](../../../../../../../Assets/Pics/Screenshot%202025-10-09%20at%2022.52.59.png)
- <small><a>https://blog.wohin.me/posts/nju-program-analysis-05/</a></small>
- Here we only draw the imitate next elements in the order, i.e. connection to the immediate adjacent nodes.
##### Bounds of Poset
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/
> **Upper/ lower bounds of a poset; lub & join; glb & meet**

给定一个偏序集$(P,\preceq)$和它的子集$S（S\subseteq P）$，我们说$u\in P$是$S$的一个**上界**，当且仅当$\forall x\in S, x\preceq u$；类似地，$l\in P$是$S$的一个**下界**，当且仅当$\forall x\in S, l\preceq x$。

若$S$是由下图中绿色部分组成的集合，那么$\{a,b,c\}$就是$S$的上界，$\{ \}$是$S$的下界：
![|300](../../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.51.15.png)

在此基础上，我们定义**最小上界（叫做lub或join）**，记为$\lfloor\rfloor S$，对于$S$的每一个上界$u$，有$\lfloor\rfloor S \preceq u \lfloor\rfloor S \preceq u$；类似地，定义最大下界（叫做glb或meet），记为$\lceil\rceil S$，对于$S$的每一个下界$l$，有$l\preceq l\lceil\rceil S\preceq\lceil\rceil S$。

还是以集合为例，若$S$是由下图中绿色部分组成的集合，则$\{a,b,c\}$和$\{a,b\}$都是它的上界，后者还是最小上界；$\{ \}$则是$S$的唯一下界，因此也是最大下界：

![|300](../../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.51.41.png)

若$S$只包含两个元素$a$和$b$，我们也可以将$\lfloor\rfloor S$写为$a\lfloor\rfloor b$，将$\lceil\rceil S$写为$a\lceil\rceil b$。

关于上下界的两个特性：
1. ==不是所有的poset都有lub或glb。== (所以，不是所有的偏序集可以称之为格)
2. 如果一个poset有lub或glb，它一定是唯一的。这一点可以借助偏序关系的antisymmetry特点证明。
##### Directed Subset of Posets
> 🔗 https://thzt.github.io/2018/02/09/semantics-7/

**有向子集（Directed Subset）**
偏序集 $(D, \leqslant)$ 的非空子集 $S \subseteq D$ 叫做**有向子集**，当且仅当，对于 $S$ 中的任意元素 $a, b \in S$，存在 $S$ 中的一个元素 $c$，使得 $a \leqslant c$ 且 $b \leqslant c$。

定义
1. **有向完全偏序集 (Directed Complete Partial Order, DCPO)**：如果一个偏序集 $(D, \leqslant)$ 的每个有向子集 $S \subseteq D$ 都有上确界（记为 $\bigvee S$），就称它是一个**有向完全偏序集**。
2. **完全偏序集 (Complete Partial Order, CPO)**：此外，如果它还有最小元，就称它是一个**完全偏序集**。

> [!IMPORTANT] 注意
> 完全偏序集并不是每一个子集都有上确界，而是它的每一个**有向子集**都有上确界。
###### Continuous Functions
> 🔗 https://thzt.github.io/2018/02/09/semantics-7/

**连续函数 (Continuous Functions)**
假设 $(D, \leqslant)$ 与 $(E, \leqslant)$ 是完全偏序集，$f : D \to E$ 是集合上定义的一个函数。

单调性 (Monotonicity)
- 对于任意的 $d, d' \in D$，如果 $d \leqslant d'$ 就有 $f(d) \leqslant f(d')$，我们就说 $f$ 是**单调的**。

连续性 (Continuity)
- 如果 $f$ 是单调的，且对于任意有向子集 $S \subseteq D$，有：$f(\bigvee S) = \bigvee f(S)$，就称 $f$ 是**连续的**。
#### Lattice (Poset Structure)
> ↗ [Lattice (Order Theory)](Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html#sec:2.3

A lattice is partially ordered sets $(L,\sqsubseteq)$, with two extra operators $\lfloor \rfloor$ and $\lceil \rceil$. 
- $\lfloor \rfloor$ is the **least upper bound (lub), or join**.  $a\lfloor \rfloor b$, meaning that $$\forall c. \ a\sqsubseteq c\land b\sqsubseteq c \implies a\lfloor \rfloor b \sqsubseteq c.$$
- $\lceil \rceil$ is the **greatest lower bound (glb), or meet**. $a\lceil \rceil b$ meaning that $$\forall c. \ c\sqsubseteq a\land c\sqsubseteq b \implies c \sqsubseteq a\lceil \rceil b.$$
Furthermore, this implies that there exist a least bound $\bot=\lceil\rceil L$ and a greatest bound $\top=\lfloor\rfloor L$, from which we have the following identities: $$\begin{aligned}
& \top\lceil\rceil a = a = a\lfloor\rfloor \bot \\
& \top\lfloor\rfloor a = \top \\
& a \lceil\rceil\bot = \bot
\end{aligned}$$


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