# Computability (Recursion) Theory - Turing Machine and R.E. Language

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [Computer (Host) System](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20(Host)%20System.md)
↗ [Computer Architecture](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Architecture.md)

↗ [Model Theory (模型论)](../../Model%20Theory%20(模型论)/Model%20Theory%20(模型论).md)
↗ [Computer Languages & Programming Methodology](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)

↗ [Programming Language Processing & Program Execution](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
- ↗ [Program Execution (Runtime)](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
- ↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

↗ [Function & Mapping of Set](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md#)
- Recurrence Relation (递推关系) & Recursion (递归)
- Generating Function (生成函数 /母函数)

↗ [Relation & Order Theory](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)
- ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md) "well-founded relation"
- ↗ [Domain Theory](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Domain%20Theory/Domain%20Theory.md)
↗ [Denotational Semantics](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Denotational%20Semantics/Denotational%20Semantics.md)

↗ [Lambda Calculus (λ-Calculus)](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)

↗ [Computational Trilogy & Curry–Howard(–Lambek) Correspondence](../../Proof%20Theory/Computational%20Trilogy%20&%20Curry–Howard(–Lambek)%20Correspondence.md)


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
> [!links]
> ↗ [The Development History of AI](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/The%20Development%20History%20of%20AI.md) "turing test"
> ↗ [Mathematics](../../../Mathematics.md) "proof by induction /well-founded induction"

![](../../../../../Assets/Pics/Screenshot%202023-05-08%20at%204.26.42%20PM.png)
<small>What can computers do?</small>

> 🔗 https://en.wikipedia.org/wiki/Computability_theory

**Computability theory**, also known as **recursion theory**, is a branch of [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic"), [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), and the [theory of computation](https://en.wikipedia.org/wiki/Theory_of_computation "Theory of computation") that originated in the 1930s with the study of [computable functions](https://en.wikipedia.org/wiki/Computable_function "Computable function") and [Turing degrees](https://en.wikipedia.org/wiki/Turing_degree "Turing degree"). The field has since expanded to include the study of generalized [computability](https://en.wikipedia.org/wiki/Computability "Computability") and [definability](https://en.wikipedia.org/wiki/Definable_set "Definable set"). In these areas, computability theory overlaps with [proof theory](https://en.wikipedia.org/wiki/Proof_theory "Proof theory") and [effective descriptive set theory](https://en.wikipedia.org/wiki/Effective_descriptive_set_theory "Effective descriptive set theory").

Basic questions addressed by computability theory include:
-   What does it mean for a [function](https://en.wikipedia.org/wiki/Function_(mathematics) "Function (mathematics)") on the [natural numbers](https://en.wikipedia.org/wiki/Natural_number "Natural number") to be computable?
-   How can noncomputable functions be classified into a hierarchy based on their level of noncomputability?

Although there is considerable overlap in terms of knowledge and methods, mathematical computability theorists study the theory of relative computability, reducibility notions, and degree structures; those in the computer science field focus on the theory of [subrecursive hierarchies](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory"), [formal methods](https://en.wikipedia.org/wiki/Formal_method "Formal method"), and [formal languages](https://en.wikipedia.org/wiki/Formal_language "Formal language").



## Functions by Recursion Theory
> [!links]
> ↗ [Mathematics](../../../Mathematics.md) "proof by induction /well-founded induction"
> ↗ [Relation & Order Theory](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)
> - ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
> 
> ↗ [Function & Mapping of Set](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> ↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)

> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

我们看到在程序中使用递归，可能会导致非终止性的计算，而有些递归又不会。这是为什么呢？

我们可以从递归函数论（recursion theory /computability theory）中找到一些线索。==递归函数论是和图灵机以及$λ$演算相等价的计算模型，它从另一个角度刻画了可计算性。== 可计算性是一个有趣的话题，后续文章中，我们会详细讨论。

==在递归函数论中，人们把函数划分为了3个层次：==
- 原始递归函数，
- 递归函数，
- 和其他的不能用递归函数表示的“函数”。

这些函数集合的范围越来越大。


### 1️⃣ Primitive Recursive Function
> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

本文我们先介绍原始递归函数，为此，我们需要先定义两种运算。

**(1) 合成运算**
设 $f$ 是 $k$ 元部分函数，$g_1, g_2, \cdots, g_k$ 是 $k$ 个 $n$ 元部分函数，令：
$$h(x_1, \cdots, x_n) = f(g_1(x_1, \cdots, x_n), \cdots, g_k(x_1, \cdots, x_n))$$
则称 $h$ 是由 $f$ 和 $g_1, g_2, \cdots, g_k$ 经过合成运算得到的。


**(2) 原始递归运算**
设 $f$ 是一个 $n$ 元全函数，$g$ 是 $n + 2$ 元全函数，令：
* $h(x_1, \cdots, x_n, 0) = f(x_1, \cdots, x_n)$
* $h(x_1, \cdots, x_n, t + 1) = g(t, h(x_1, \cdots, x_n, t), x_1, \cdots, x_n)$

则称 $h$ 是由 $f$ 和 $g$ 经过原始递归运算得到的。


由此，我们可以定义**原始递归函数**。初始函数包括：
1. **零函数**：$n(x) = 0$
2. **后继函数**：$s(x) = x + 1$
3. **投影函数**：$u_i^n(x_1, \cdots, x_n) = x_i, \quad 1 \leqslant i \leqslant n$
则由初始函数经过有限次合成运算和原始递归运算得到的函数，称为**原始递归函数**。


**原始递归函数的性质：**
* **封闭性**：由原始递归函数经过合成或原始递归得到的函数仍为原始递归函数。因此，原始递归函数的集合在合成与原始递归运算下是封闭的。
* **全函数性质**：每一个原始递归函数都是**全函数**。
    * 这是因为合成运算虽然在部分函数上定义，但如果 $f$ 和 $g_1, \cdots, g_k$ 是全函数，那么 $h$ 也一定是全函数。
    * 另一方面，在进行原始递归运算时，如果 $f$ 和 $g$ 是全函数，则 $h$ 也一定是全函数（由良基归纳法可证）。


### 2️⃣ Recursive Function ⭐
#### Minimization Operator (μ Operator)
> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

在前面一篇中，我们从三个初始函数出发，通过合成运算和原始递归运算，得到了原始递归函数集，递归函数集是相对于这两种运算封闭的。

然而，这样定义的原始递归函数，并不能包括所有的数论函数，一个典型的例子就是，**阿克曼函数**（Ackermann function）：

```haskell
ackermann :: Int -> Int -> Int
ackermann 0 x = x + 1
ackermann k 0 = ackermann (k-1) 1
ackermann k x = ackermann (k-1) $ ackermann k x-1
```

它并不是一个原始递归函数（证略），因此原始递归函数集并不足以表示计算机程序中的所有函数。

为此，我们需要对原始递归函数集进行扩充，我们定义一个新的运算，称为**极小化运算**（Minimalization）：

设 $P(x_1, \cdots, x_n, t)$ 是一个谓词，令： $$f(x_1, \cdots, x_n) = \mu t [P(x_1, \cdots, x_n, t)]$$
$f(x_1, \cdots, x_n)$ 的值，是使得 $P(x_1, \cdots, x_n, t)$ 为真的最小 $t$ 值；或者无定义，此时不存在 $t$ 使得 $P(x_1, \cdots, x_n, t)$ 为真。这样通过 $\min$ 得到 $f(x_1, \cdots, x_n)$ 的过程称为极小化运算，也称部分函数 $f(x_1, \cdots, x_n)$ 是由谓词经过极小化运算得到的。

以上我们给谓词定义了极小化运算，现在我们将极小化运算推广到一般的函数上面，设 $g(x_1, \cdots, x_n, t)$ 是一个 $n+1$ 元函数，令：$$f(x_1, \cdots, x_n) = \min \{t \mid g(x_1, \cdots, x_n, t) = 0\}$$
则称部分函数 $f(x_1, \cdots, x_n)$ 是由函数 $g(x_1, \cdots, x_n, t)$ 经过极小化运算得到的。
#### Recursive Functions
> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

和定义原始递归函数集一样，我们从以下三个初始函数出发：
1. **零函数**：$n(x) = 0$
2. **后继函数**：$s(x) = x + 1$
3. **投影函数**：$u_i^n(x_1, \cdots, x_n) = x_i, \quad 1 \leqslant i \leqslant n$
由初始函数，经过有限次合成运算、原始递归运算，以及**极小化运算**，得到的函数称为**递归函数**。

递归函数并不一定是全函数，因为极小化运算可能会导致结果函数在某些点无定义，递归的部分函数称为**部分递归函数**。

可以证明阿克曼函数是递归函数，但不是原始递归函数。因此，原始递归函数集是递归函数集的真子集。

> [!what's more]
> 🔗 https://thzt.github.io/2017/03/14/recursive-function-7/
> 以上几篇文章中，我们讨论了可计算性理论相关的一些内容，可计算性与递归函数论存在着千丝万缕的联系，不动点理论也是这样的，我们定义的递归函数一定存在吗？在什么情况下它是存在的？
> 要回答这些问题，还要从方程，不动点，不动点算子说起。
> 
> ↗  [Function & Mapping of Set](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
> ↗ [Lattice (Set Theory)](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)
#### Recursive Set & Recursive Enumerable Set ⭐
> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

在具体实践中，我们经常会遇到这样的问题，给定一个元素，我们需要判断这个元素是否属于某个集合。这种问题，称为集合的**成员资格问题**。

沿用这一思路，我们可以使用一个谓词 $\chi_B$ 来定义相应的集合 $B \subseteq \mathbb{N}$，$$B = \{x \in \mathbb{N} \mid \chi_B(x)\}$$
谓词 $\chi_B(x)$ 为真，则 $x \in B$。这个谓词 $\chi_B(x)$，通常称为集合 $B$ 的**特征函数**。

如果特征函数 $\chi_B$ 是一个递归的全函数，则我们总是可以判断 $\chi_B(x)$ 等于 0 还是 1，这样的集合 $B$ 称为**递归集**。

如果存在部分递归函数 $g$，使得 $B = \{x \in \mathbb{N} \mid g(x) \downarrow\}$，即 $x \in B$ 当且仅当 $g$ 在 $x$ 处有定义，则称集合 $B$ 是一个**递归可枚举集**。每一个部分递归函数，都确定出一个递归可枚举集。

因此，对于每一个自然数 $x \in \mathbb{N}$，我们总是可以通过递归集 $B$ 的特征函数 $\chi_B$，来判断 $x$ 是否 $B$ 的成员。

而对于递归可枚举集，就不容乐观了。如果某个自然数 $x \in \mathbb{N}$ 是 $B$ 的成员，那么我们可以断定这件事，因为 $g(x)$ 有定义；但是如果某个自然数 $y \in \mathbb{N}$ 不是 $B$ 的成员，我们就不能确定，因为这时候 $g(y)$ 无定义。（$g(y)$ 无定义，则它对应的图灵机不停机，后文我们详细讨论）

因此，集合 $B$ 是递归的当且仅当 $B$ 和 $\bar{B}$ 是递归可枚举的，其中 $\bar{B}$ 为 $B$ 的补集。

> [!TIP]
> 为什么递归可枚举集是“可枚举”的呢？是因为每一个递归可枚举集可以一一对应一个自然数，这是怎样做到的呢？这需要我们理解总共有多少个可能的程序，以及什么是通用程序 (universal program /universal turing machine)。
##### Enumerability
> 🔗 https://thzt.github.io/2017/03/10/recursive-function-6/
> 本文我们要讨论，为什么递归可枚举集是“可枚举”的，以及什么是可计算函数。

**集合个数的可枚举性**
程序 $\mathscr{P}$ 所计算的函数，我们可以记为 $\psi(x_1, x_2, \cdots, x_n)$。
由此，我们可以定义**通用程序** $\Phi$，则有：
$$\Phi(x_1, x_2, \cdots, x_n, y) = \psi(x_1, x_2, \cdots, x_n)$$
其中，$y$ 是程序 $\mathscr{P}$ 的编码。

因为所有的程序与自然数集一一对应，
所以，$\Phi(x_1, x_2, \cdots, x_n, 0), \Phi(x_1, x_2, \cdots, x_n, 1), \cdots$ 枚举了所有的 $n$ 元可计算函数。

我们定义 $W_y = \{x \in \mathbb{N} \mid \Phi(x, y) \downarrow\}$，
根据递归可枚举集的定义，每一个 $W_y$ 是一个递归可枚举集。

又因为 $\Phi(x, 0), \Phi(x, 1), \cdots$ 枚举了所有的可计算函数，
而上一篇中我们看到，递归可枚举集是由部分递归函数（即可计算函数）定义的，
一个部分递归函数确定出一个递归可枚举集，
所以，$W_0, W_1, \cdots$ 枚举了所有的递归可枚举集。

因此，集合 $B$ 是递归可枚举的，当且仅当存在 $y \in \mathbb{N}$，使得 $B = W_y$，
称为**枚举定理**，这就是“枚举”的含义。

令 $K = \{n \in \mathbb{N} \mid n \in W_n\}$，
则 $K$ 是递归可枚举的，但不是递归的（证略）。
因此，$\bar{K}$ 不是递归可枚举的，否则 $K$ 就是递归集了。
（根据：集合 $B$ 是递归的当且仅当 $B$ 和 $\bar{B}$ 是递归可枚举的，见上一篇）

因此，我们找到了一个非递归的递归可枚举集 $K$，以及一个非递归可枚举集 $\bar{K}$。


### 3️⃣ Non-recursive Functions



## Turing Machine & Recursive Enumerable Language
### Decidability
> [!links]
> ↗ [Software (Program) Analysis Basics](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/Software%20(Program)%20Analysis%20Basics.md)
> ↗ [Complexity Theory & Computational Complexity](../Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)

> 🔗 https://thzt.github.io/2017/03/10/recursive-function-6/

可判定性问题，指的是一个询问真或者假的问题是否可以被回答。
如果我们总能回答出这个问题是真或者是假，就称该问题是可判定的，
如果我们只能当问题为真的时候确定为真，为假的时候所进行的计算可能不会终止，那么就称该问题是半可判定的。

某元素是否属于一个递归集，是可判定的，
某元素是否属于一个递归可枚举集，是半可判定的。

因为，递归集是使用一个递归的全函数定义的，
而递归可枚举集是使用第一个部分递归函数定义的，
我们无法判断某个部分递归函数，在接受某参数时，是没有定义，还是计算尚未停止。
即，判断元素是否属于某递归可枚举集的程序可能永不停机。
#### Halting Problem is Undecidable
> 🔗 https://thzt.github.io/2017/03/10/recursive-function-6/

任给一个程序和一个自然数，问该程序对这个自然数输入的计算是否停止，这个问题称为**停机问题**。

我们可以用谓词 $H(x, y)$ 描述这个问题：$H(x, y)$ 表示以 $y$ 为代码的程序对输入 $x$ 的计算最终停止。那么，$H(x, y)$ 是不可计算的，即不存在一个程序来计算 $H(x, y)$。


**证明**
我们来证明一下，假设有一个程序可以计算 $H(x, y)$。
那么我们就能用它来构造一个新程序 $\mathscr{P}$，它的输入是 $x$。
这段程序：
* 当 $H(x, x)$ 为真时，计算不停止；
* 而当 $H(x, x)$ 为假时，计算停止。

程序 $\mathscr{P}$ 也可以进行编码，假设为 $y_0$。现在我们来判断 $H(y_0, y_0)$：
1. **如果 $H(y_0, y_0)$ 为真**：
   * 意味着编码为 $y_0$ 的程序以 $y_0$ 作为输入最终停止，即程序 $\mathscr{P}$ 输入为 $y_0$ 时最终停止。
   * 可是根据 $\mathscr{P}$ 的定义，此时 $H(x, x) = H(y_0, y_0)$ 为假才会停止，产生矛盾。
1. **如果 $H(y_0, y_0)$ 为假**：
   * 意味着编码为 $y_0$ 的程序以 $y_0$ 作为参数最终不会停止，即程序 $\mathscr{P}$ 输入为 $y_0$ 时最终不停止。
   * 可是根据 $\mathscr{P}$ 的定义，此时 $H(x, x) = H(y_0, y_0)$ 为真才不会停止，产生矛盾。

$H(y_0, y_0)$ 不能为真也不能为假，矛盾。
**结论**：因此，计算 $H(x, y)$ 的程序不存在，我们也无法用它来构造程序 $\mathscr{P}$。
#### Rice Theorem


### Computability
> [!quote]
> ![|50](../../../../../Assets/Pics/Pasted%20image%2020260117145903.png) David Hilbert: 
> Is there a program which can tell if a theorem is true or false? 🤔
>
> ![|50](../../../../../Assets/Pics/Pasted%20image%2020241010164423.png) Alonzo Church: Lambda calculus 🤓
> ![|50](../../../../../Assets/Pics/Pasted%20image%2020241010164346.png) Alan Turing: Turing machine 🤓
> ![|50](../../../../../Assets/Pics/Pasted%20image%2020260117150036.png) Kurt Gödel: General-recursive function 🤓

> 🔗 https://thzt.github.io/2017/03/10/recursive-function-6/

我们听说过，现代计算机在计算能力上是与图灵机等价的。什么叫做计算能力呢？
它指的是图灵机可计算的函数集，与现代计算机可计算的函数集是相等的。

为了简单起见，我们不去讨论图灵机，而是从现代计算机直接说起，
设 $\mathscr{P}$ 是一段程序，$n$ 是一个正整数，
我们称数论函数 $\psi(x_1, x_2, \cdots, x_n)$ 为程序 $\mathscr{P}$ 所计算的 $n$ 元部分函数，
如果对于相同的输入，
要么：(1) 程序 $\mathscr{P}$ 的计算可以终止，此时计算结果等于 $\psi(x_1, x_2, \cdots, x_n)$ 的相应函数值；
要么：(2) 程序 $\mathscr{P}$ 的计算不能终止，此时 $\psi(x_1, x_2, \cdots, x_n)$ 无定义。

设 $f(x_1, x_2, \cdots, x_n)$ 是一个部分函数，如果存在程序 $\mathscr{P}$ 可计算 $f$，则称 $f$ 是部分可计算的。
如果一个函数，既是部分可计算的，又是全函数，则称这个函数是可计算的。

可以证明，所有的原始递归函数和递归函数都是部分可计算的。
#### Computational Complexity & Turing Complete
↗ [Complexity Theory & Computational Complexity](../Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
#### Intelligence & Turing Test
↗ [Universe, Self-Awareness, and Intelligence](../../../../../Universe,%20Self-Awareness,%20and%20Intelligence.md)
↗ [Artificial Intelligence](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Artificial%20Intelligence.md)
- ↗ [The Development History of AI](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/The%20Development%20History%20of%20AI.md)
- ↗ [Natural Language Processing (NLP) & Computational Linguistics](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics.md)
	- ↗ [LLM (Large Language Model)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
- [AI4X, AGI (Artificial General Intelligence) & AIGC](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC.md)
	- ↗ [AI Embodiment & World Model](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/🤔%20AI%20Embodiment%20&%20World%20Model/AI%20Embodiment%20&%20World%20Model.md)


### Turing Machine Equivalents / Turing Complete Models
↗ [Models of Computation & Abstract Machines](../Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)



## Universal Machine /Program
### Universal Program & Input Encoding
> 🔗 https://thzt.github.io/2017/03/10/recursive-function-6/

我们使用现代计算机进行编程的时候，并不是直接把程序的输入传给程序，而是将程序本身以及它的输入，传给计算机，最后由计算机得到计算结果，

像这种接受任何程序和它的输入作为自己的输入，返回程序执行结果的程序，称为通用程序。
为此，通用程序需要把输入的程序进行编码。

常用的编码方法，涉及[配对函数](https://zh.wikipedia.org/wiki/%E9%85%8D%E5%AF%B9%E5%87%BD%E6%95%B0)和[哥德尔编码](https://zh.wikipedia.org/wiki/%E5%93%A5%E5%BE%B7%E5%B0%94%E6%95%B0)。

为了不引入太多的复杂性，我们可以将程序的编码理解为存储程序的二进制数据，不同的程序会有不同的二进制表示，每一个二进制表示可以对应一段程序（虽然可能不合法）。哥德尔编码做的事情就是将程序和自然数集一一对应起来。

因此，所有程序的个数是可数的，而这些程序可计算的函数个数也一定是可数的，它们可能是全函数，也可能是部分函数。（其中，“可数”指的是可数集，可数集是与自然数集之间存在一一映射的集合。

然而，自然数集上的函数全体并不可数，（证略
所以肯定存在程序不可计算的函数。
#### Paring Function & Gödel Numbering (GN)
> 🔗 https://thzt.github.io/2017/03/10/recursive-function-6/

配对函数和哥德尔数，是对数偶和有穷数列的一种编码方式。


**配对函数 (Pairing Function)**
令 $\langle x, y \rangle = 2^x(2y + 1) - 1$，称 $\langle x, y \rangle$ 为**配对函数**，它是一个原始递归函数。

任给一个数 $z$，存在唯一的一对数 $x$ 和 $y$，使得 $\langle x, y \rangle = z$。
* $x$ 是 $z + 1$ 含有因子 2 的个数，即使得 $2^t | (z + 1)$ 的 $t$ 的最大值。
* $(z + 1) / 2^x$ 必为奇数，$y$ 是 $2y + 1 = (z + 1) / 2^x$ 的唯一解。

一般地，记 $l(z) = x$，$r(z) = y$，则 $l(z)$ 和 $r(z)$ 也是原始递归函数。


**哥德尔数 (Gödel Number)**
记 $[a_1, a_2, \cdots, a_n] = \prod_{i=1}^n p_i^{a_i}$，$[a_1, a_2, \cdots, a_n]$ 称为有穷数列 $(a_1, a_2, \cdots, a_n)$ 的**哥德尔数**。
其中，$p_i$ 是第 $i$ 个素数。

> [!EXAMPLE] 例子
> $[2, 0, 1, 3] = 2^2 \cdot 3^0 \cdot 5^1 \cdot 7^3 = 6860$。

对于每一个固定的 $n$，$[a_1, a_2, \cdots, a_n]$ 是原始递归函数，并且这种编码具有唯一性。

> 🔗 https://zh.wikipedia.org/wiki/%E5%93%A5%E5%BE%B7%E5%B0%94%E6%95%B0

在[形式数论](https://zh.wikipedia.org/wiki/%E6%95%B0%E8%AE%BA "数论")中，**哥德尔编号**是对某些[形式语言](https://zh.wikipedia.org/wiki/%E5%BD%A2%E5%BC%8F%E8%AF%AD%E8%A8%80 "形式语言")的每个符号和[公式](https://zh.wikipedia.org/wiki/%E5%85%AC%E5%BC%8F_\(%E6%95%B0%E7%90%86%E9%80%BB%E8%BE%91\) "公式 (数理逻辑)")指派一个叫做**哥德尔数(GN)** 的唯一的[自然数](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E6%95%B0 "自然数")的[函数](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0 "函数")。这个概念是[哥德尔](https://zh.wikipedia.org/wiki/%E5%93%A5%E5%BE%B7%E5%B0%94 "哥德尔")为证明他的[哥德尔不完备定理](https://zh.wikipedia.org/wiki/%E5%93%A5%E5%BE%B7%E5%B0%94%E4%B8%8D%E5%AE%8C%E5%A4%87%E5%AE%9A%E7%90%86 "哥德尔不完备定理")而引入的。

[可计算函数](https://zh.wikipedia.org/wiki/%E5%8F%AF%E8%AE%A1%E7%AE%97%E5%87%BD%E6%95%B0 "可计算函数")集合的[编号](https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%99%9F_\(%E8%A8%88%E7%AE%97%E7%90%86%E8%AB%96\) "編號 (計算理論)")有时叫做哥德尔编号或有效编号。哥德尔编号可以被解释为一个[编程语言](https://zh.wikipedia.org/wiki/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80 "编程语言")，带有指派哥德尔数到每个可计算函数作为在这种[编程语言](https://zh.wikipedia.org/wiki/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80 "编程语言")中计算这个函数的值的[程序](https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F "程序")。[Roger 等价定理](https://zh.wikipedia.org/w/index.php?title=Roger_%E7%AD%89%E4%BB%B7%E5%AE%9A%E7%90%86&action=edit&redlink=1 "Roger 等价定理（页面不存在）")特征化了是哥德尔编号的可计算函数集合的编号。


### Universal Turing Machine (UTM)
> [!TIP]
> > 🤖 GPT-5
> 
> A **universal program** is the programming-language-level version of a **universal Turing machine**—they compute the same class of functions, just described in different frameworks.
>
>--- 
> **What is a universal program?**
> 
> A **universal program** is a program that can **simulate any other program** when given:
> 1.  a description of that program, and
> 2. the input for that program.
> 
> Formally, if `P` is any program and `x` is its input, a universal program `U` satisfies: `U(P, x) = P(x)`
> 
> So instead of hard-coding one task, `U` can _run_ any task, as long as that task is encoded as data.
>
>---
> **What is a Universal Turing Machine (UTM)?**
> 
> A **Universal Turing Machine** is the same concept, but defined in the **Turing machine model of computation**.
> - A UTM is a Turing machine
> - It takes as input:
> 	- an encoding of another Turing machine `M`
> 	- an input string `w`
> - It simulates `M` running on `w`
> 
> Formally: `UTM(⟨M⟩, w) = M(w)`

> 🔗 https://en.wikipedia.org/wiki/Universal_Turing_machine

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), a **universal Turing machine** (**UTM**) is a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine") capable of computing any computable sequence, as described by [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing "Alan Turing") in his seminal paper "On Computable Numbers, with an Application to the [Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem "Entscheidungsproblem")". Common sense might say that a universal machine is impossible, but Turing proves that it is possible. He suggested that we may compare a human in the process of computing a real number to a machine that is only capable of a finite number of conditions ⁠$q_{1},q_{2},\dots ,q_{R}$⁠; which will be called "m-configurations". He then described the operation of such machine, as described below, and argued:

> It is my contention that these operations include all those which are used in the computation of a number.

[Turing](https://en.wikipedia.org/wiki/Alan_Turing "Alan Turing") introduced the idea of such a machine in 1936–1937.



## Computable Functions
> [!links]
> ↗ [Function & Mapping of Set](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> ↗ [Models of Computation & Abstract Machines](../Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)

> 🔗 https://en.wikipedia.org/wiki/Computable_function

**Computable functions** are the basic objects of study in [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory"). Informally, a [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") is _computable_ if there is an [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm") that computes the value of the function for every value of its argument. Because of the lack of a precise definition of the concept of algorithm, every formal definition of computability must refer to a specific [model of computation](https://en.wikipedia.org/wiki/Model_of_computation "Model of computation").

Many such models of computation have been proposed, the major ones being [Turing machines](https://en.wikipedia.org/wiki/Turing_machine "Turing machine"), [register machines](https://en.wikipedia.org/wiki/Register_machine "Register machine"), [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus "Lambda calculus") and [general recursive functions](https://en.wikipedia.org/wiki/General_recursive_function "General recursive function"). Although these four are of a very different nature, they provide exactly the same class of computable functions, and, for every model of computation that has ever been proposed, the computable functions for such a model are computable for the above four models of computation.

The [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis "Church–Turing thesis") is the unprovable assertion that every notion of computability that can be imagined can compute only functions that are computable in the above sense.

Before the precise definition of computable functions, [mathematicians](https://en.wikipedia.org/wiki/Mathematician "Mathematician") often used the informal term _effectively calculable_. This term has since come to be identified with the computable functions. The effective computability of these functions does not imply that they can be _efficiently_ computed (i.e. computed within a reasonable amount of time). In fact, for some effectively calculable functions it can be shown that any algorithm that computes them will be very inefficient in the sense that the running time of the algorithm increases [exponentially](https://en.wikipedia.org/wiki/Exponential_growth "Exponential growth") (or even [superexponentially](https://en.wikipedia.org/wiki/Tetration "Tetration")) with the length of the input. The fields of [feasible computability](https://en.wikipedia.org/wiki/Feasible_computability "Feasible computability") and [computational complexity](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory") study functions that can be computed efficiently.

The [Blum axioms](https://en.wikipedia.org/wiki/Blum_axioms "Blum axioms") can be used to define an abstract [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory") on the set of computable functions. In computational complexity theory, the problem of computing the value of a function is known as a [function problem](https://en.wikipedia.org/wiki/Function_problem "Function problem"), by contrast to [decision problems](https://en.wikipedia.org/wiki/Decision_problem "Decision problem") whose results are either "yes" or "no".



## Ref
[Computability theory]: https://en.wikipedia.org/wiki/Computability_theory

[Turing Mahine | Wikipedia]: https://en.wikipedia.org/wiki/Turing_machine
[Universal Turing Machine]: https://en.wikipedia.org/wiki/Universal_Turing_machine

[How to tell if a language is recognizable, co-recognizable or decidable? | Stackoverflow]: https://cs.stackexchange.com/q/11500/174354

[AI数学基础之:确定图灵机和非确定图灵机]: https://www.cnblogs.com/flydean/p/14646553.html

[Arithmetical hierarchy | wikipedia]: https://en.wikipedia.org/wiki/Arithmetical_hierarchy
[复杂度类列表 | wikipedia]: https://zh.wikipedia.org/zh-hans/複雜度類列表
[Understanding the Arithmetical Hierarchy | StackExchange]: https://math.stackexchange.com/q/4887971/1230830

[👍 如何通俗地解释停机问题（Halting Problem）？ - 张皓的回答 - 知乎]: https://www.zhihu.com/question/20081359/answer/162329455
[Halting problem | Wikipedia]: https://en.wikipedia.org/wiki/Halting_problem
[Gödel's incompleteness theorems | wikipedia]: https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems

[Difference Between Turing Machine and Universal Turing Machine | geeksforgeeks]: https://www.geeksforgeeks.org/theory-of-computation/difference-between-turing-machine-and-universal-turing-machine/
