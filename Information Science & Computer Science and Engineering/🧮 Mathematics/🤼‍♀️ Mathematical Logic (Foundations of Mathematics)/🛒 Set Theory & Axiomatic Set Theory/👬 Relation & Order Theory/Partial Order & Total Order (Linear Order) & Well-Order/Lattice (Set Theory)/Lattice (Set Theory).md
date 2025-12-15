# Lattice (Set Theory)

[TOC]



## Res
### Related Topics
↗ [Lattice (Group Theory) & Lattice-Like Algebraic Structure](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Lattice%20(Group%20Theory)%20&%20Lattice-Like%20Algebraic%20Structure/Lattice%20(Group%20Theory)%20&%20Lattice-Like%20Algebraic%20Structure.md)

↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
- ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)



## Intro
> 🔗 https://zh.wikipedia.org/zh-hans/%E6%A0%BC_(%E6%95%B0%E5%AD%A6)

在[数学](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6 "数学")中，**格**（英语：Lattice）是其非空有限[子集](https://zh.wikipedia.org/wiki/%E5%AD%90%E9%9B%86 "子集")都有一个[上确界](https://zh.wikipedia.org/wiki/%E4%B8%8A%E7%A1%AE%E7%95%8C "上确界")（称为**并**）和一个[下确界](https://zh.wikipedia.org/wiki/%E4%B8%8B%E7%A1%AE%E7%95%8C "下确界")（称为**交**）的[偏序集合](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F%E9%9B%86%E5%90%88 "偏序集合")（poset）。格也可以特征化为满足特定公理[恒等式](https://zh.wikipedia.org/wiki/%E6%81%92%E7%AD%89%E5%BC%8F "恒等式")的[代数结构](https://zh.wikipedia.org/wiki/%E4%BB%A3%E6%95%B0%E7%BB%93%E6%9E%84 "代数结构")。因为两个定义是等价的，格理论从[序理论](https://zh.wikipedia.org/wiki/%E5%BA%8F%E7%90%86%E8%AE%BA "序理论")和[泛代数](https://zh.wikipedia.org/wiki/%E6%B3%9B%E4%BB%A3%E6%95%B0 "泛代数")二者提取内容。[半格](https://zh.wikipedia.org/wiki/%E5%8D%8A%E6%A0%BC "半格")包括了格，依次包括[海廷代数](https://zh.wikipedia.org/wiki/%E6%B5%B7%E5%BB%B7%E4%BB%A3%E6%95%B0 "海廷代数")和[布尔代数](https://zh.wikipedia.org/wiki/%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0 "布尔代数")。这些"格样式"的结构都允许序理论和抽象代数的描述。

需要注意的是，本条目介绍的是序理论中的“格”，并非几何与[群论](https://zh.wikipedia.org/wiki/%E7%BE%A4%E8%AE%BA "群论")中的“[格（群论）](https://zh.wikipedia.org/wiki/%E6%A0%BC%E5%AD%90 "格子")”（点阵），两者的英文均为“lattice”。虽然在继承自平面的次序中，每个点阵都是格，但是许多格不是点阵。


### Formal Definition of Lattice
**Partial Order & Partially Ordered Sets (Posets)**
(skipped. See ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md))


**Upper Bounds and Lower Bounds of a poset**
(skipped. See ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md))


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
The reason why they are called latices is that they can be drawn using Hasse Diagram which gives these nice structures, which looks like a wooden lattice.
#### Hasse Diagrams
> 🔗 [Hasse diagram - Wikipedia](https://en.wikipedia.org/wiki/Hasse_diagram)

Below is a Hasse Diagram of poset $(2^{\text{\{A, B, C\}}}, \subseteq)$:
![|400](../../../../../../../Assets/Pics/Screenshot%202025-10-09%20at%2022.52.59.png)
<small><a>https://blog.wohin.me/posts/nju-program-analysis-05/</a></small>

Here we only draw the imitate next elements in the order, i.e. connection to the immediate adjacent nodes.


### More Lattice Variants:  Semilattice, Complete and Product Lattice
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/

![](../../../../../../../Assets/Pics/Screenshot%202025-10-11%20at%2012.53.24.png)

- 格（lattice）
- 半格（semilattice）
- 完全格（complete lattice）
- 乘积格（Product Lattice）
	- 很容易证明，乘积格也是格，完全格构成的乘积格也是完全格。

![](../../../../../../../Assets/Pics/Screenshot%202025-10-09%20at%2023.07.33.png)
<small>现在，我们再次回到数据流分析上，定义一个基于格的数据流分析框架(D,L,F)：其中D指的是数据流的方向，包括前向和后向；L指的是由值域V和一个meet或join操作符构成的格；F指的是从V到V的一系列transfer functions。<br>
实际上，数据流分析可以视作在格上不断迭代应用transfer functions和meet/join操作。<br> <a>https://blog.wohin.me/posts/nju-program-analysis-05/</a></small>


### Monotonicity & Fixed Point Axiom (of Lattice Function)
🔗
-  [Fixed-point property - Wikipedia](https://en.wikipedia.org/wiki/Fixed-point_property)
-  [Ascending chain condition - Wikipedia](https://en.wikipedia.org/wiki/Ascending_chain_condition)
-  [CS 6110 Lecture 21 The Fixed-Point Theorem, Andrew Myers](https://www.cs.cornell.edu/courses/cs6110/2013sp/lectures/lec20-sp13.pdf)
#### Monotonicity
> 🔗 https://blog.wohin.me/posts/nju-program-analysis-05/

函数 $f : L \to L$（$L$ 是格）是 **单调的**，当且仅当 $\forall x, y \in L,\; x \preceq y \Rightarrow f(x) \preceq f(y)$
#### Fixed Point Axiom
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



## Ref
[👍 南大软分课程笔记｜05 数据流分析理论]: https://blog.wohin.me/posts/nju-program-analysis-05/
