# Relation & Order Theory

[TOC]



## Res
### Related Topics
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
↗ [First-Order Logic & Predicate Calculus -（一阶）谓词逻辑](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)
↗ [Second-Order Predicate Logic (二阶谓词逻辑)](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Second-Order%20Predicate%20Logic%20(二阶谓词逻辑).md)
↗ [Higher-Order Languages & Logics (HOL)](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Higher-Order%20Languages%20&%20Logics%20(HOL).md)

↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)

↗ [Tree & Graph](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Tree%20&%20Graph/Tree%20&%20Graph.md)
↗ [Graph Theory](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/Graph%20Theory.md)
↗ [Models of Computation & Abstract Machines](../../😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"
↗ [Markov Process & Markov Chain (MC)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md)
- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)

↗ [Bisimulation](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/Models%20Analysis%20&%20Improvement/Bisimulation.md)


### Other Resources



## Intro
### Relation & Binary Relation
> 📖 离散数学，四川大学计算机学院

世界上的事物都在一定范围内以某种方式互相联系例如天体之间可以用星系来划分，人类之间可以用是否有共同的祖先来定血缘生物，物种之间可以用进化顺序来定先后，化学元素之间可以用外层电子数来决定在元素周期表上的位置等。

类似地，数学或者计算机科学中的研究对象也以各种不同的形式相互联系着：例如，整数之间以大小整除或同余等关系相联系；命题公式之间以是否有相同主合取范式相联系；程序中两个变量可以用是否占有同一内存地址相联系。总之，事物之间总可以根据需要确定相应的关系。

从数学的角度看，这类联系就是某个集合中元素之间存在的关系。本章将用数学语言把这类联系形式化给出关系的一般描述及其表示方法并研究关系的性质，以导出能普遍适用的理论，反过来又能用于指导对实践问题的深入应用。由于一组元素之间的关系常常可以通过每两个元素之间的关系来表达，因而二元（素之间的）关系是最基本的关系，

![computing.excalidraw | 800](../../../../../Assets/Illustrations/Computer%20Science%20Philosophy/computing.excalidraw.md)
#### Formal Definition: Relation
> ↗ [Function & Mapping of Set](../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)

> 📖  Introduction to the Theory of Computation, 3rd edition, by Michael Sipser

A **predicate** or **property** is a function whose range is $\{TRUE, FALSE\}$. For example, let $even$ be a property that is $TRUE$ if its input is an even number and $FALSE$ if its input is an odd number. Thus $even(4) = TRUE$ and $even(5) = FALSE$.

A property whose domain is a set of k-tuples $A \times ···\times A$ is called a **relation**, a **k-ary relation**, or a **k-ary relation on A**. A common case is a **2-ary relation**, called a **binary relation**. When writing an expression involving a binary relation, we customarily use infix notation. For example, “less than” is a relation usually written with the infix operation symbol $<$. “Equality”, written with the $=$ symbol, is another familiar relation. If $R$ is a binary relation, the statement $aRb$ means that $aRb= TRUE$. Similarly, if $R$ is a k-ary relation, the statement $R(a_1, ..., a_k)$ means that $R(a_1, ..., a_k) = TRUE$.

Sometimes describing predicates with sets instead of functions is more convenient. The predicate $P: D \to \{TRUE, FALSE\}$ may be written $(D,S)$, where $S= \{a \in D | P(a) = TRUE\}$, or simply $S$ if the domain $D$ is obvious from the context. Hence the relation beats may be written $$\{(Scissors, Paper), (Paper, Stone), (Stone, Scissors)\}$$
![](../../../../../Assets/Pics/Screenshot%202025-09-15%20at%2020.04.36.png)
#### Binary Relation
> 🔗 https://thzt.github.io/2017/03/03/recursive-function-3/

直观的说，集合$A$的元素和集合$B$的元素之间的关系是一个二元性质$R$，使得对于每个$a∈A$和$b∈B$而言，$R(a,b)$要么为真，要么为假。

关系通常表示为一个集合，它是笛卡尔积的子集，即，集合$A$和集合$B$之间的关系$R$是它们笛卡尔积的一个子集$R⊆A×B$。

如果序对$(a,b)$属于子集$R$，则认为$a$与$b$之间的关系为真，否则认为$a$与$b$之间的关系为假。

通常关系直接描述为$R(a,b)$，或者$aRb$，而不用$(a,b)∈R$。


某个集合上的二元关系有很多性质，例如自反性，对称性，反对称性，传递性。
- 一个关系$R⊆A×A$是自反的，如果$R(a,a)$对于所有的$a∈A$成立；
- 是对称的，如果$R(a,b)$就有$R(b,a)$，对于所有的$a,b∈A$都成立；
- 是反对称的，如果$R(a,b)$且$R(b,a)$，则$a,b$是同一个元素，对于所有的$a,b∈A$都成立；
	- （注意，反对称性不是对称性的否定。
- 是传递的，如果$R(a,b)$和$R(b,c)$能推出$R(a,c)$，对于所有的$a,b,c∈A$都成立。
#### Special Types of (Binary) Relation
> 📖 离散数学，四川大学计算机学院

等价关系和偏序关系是两类在实践问题中有着重要意义的二元关系，同时也在计算机科学中有着极其重要的应用。

等价关系是同时具有自反性，对称性和传递性的关系。
偏序关系是具有自反性，反对称性和传递性的关系。

等价关系的一个例子就是相等性，相等性关系$R(a,b)$当且仅当$a,b$是同一个元素。
偏序关系，例如通常的序关系$R⊆N×N$，$R(a,b)$当且仅当$a⩽b$。
##### Equivalence Relation
↗ [Equivalence Relation](Equivalence%20Relation.md)

> 📖  Introduction to the Theory of Computation, 3rd edition, by Michael Sipser

A special type of binary relation, called an **equivalence relation**, captures the notion of two objects being equal in some feature. A binary relation $R$ is an equivalence relation if $R$ satisfies three conditions:
1. $R$ is reflexive if for every $x$, $xRx$;
2. $R$ is symmetric if for every $x$ and $y$, $xRy$ implies $yRx$;
3. $R$ is transitive if for every $x$, $y$, and $z$, $xRy$ and $yRz$ implies $xRz$.
##### Partial Order Relation
↗ [Partial Order & Total Order (Linear Order) & Well-Order](Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
↗ [Lattice (Set Theory)](Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)

Partial Order & Lattice
Total Order
Well Order

A _partially ordered set_ or poset is a tuple $(L, \sqsubseteq)$, meaning a set of elements $L$ with an (partially) ordering relationship $\sqsubseteq$ on it, that uphold: $$\begin{aligned} & \forall a. \ a\sqsubseteq a & \text{reflexive} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq a\implies a=b & \text{anti-symetric} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq c\implies a\sqsubseteq c & \text{transitive}
\end{aligned}$$
##### Function
> 📖 离散数学，四川大学计算机学院

通常使用的函数概念是指数值量之间的依赖关系一个量因变量从属于其他量自变量的变化而变化。一般地，也可以把函数看成是两个集合元素之间的联系关系。因此，函数是一种特殊的二元关系。

↗ [Function & Mapping of Set](../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
↗ [Mathematical Analysis (& Analytical Mathematics)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)


### Order Theory
> 🔗 https://zh.wikipedia.org/zh-cn/%E5%BA%8F%E7%90%86%E8%AE%BA

次序无所不在——至少在数学和相关领域比如[计算机科学](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6 "计算机科学")是这样。你典型遇到的第一个次序是[小学](https://zh.wikipedia.org/wiki/%E5%B0%8F%E5%AD%A6 "小学")数学教育中的[自然数](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E6%95%B0 "自然数")的次序。这个直觉概念很容易扩展到其他[数](https://zh.wikipedia.org/wiki/%E6%95%B0 "数")的集合的排序，比如[整数](https://zh.wikipedia.org/wiki/%E6%95%B4%E6%95%B0 "整数")和[实数](https://zh.wikipedia.org/wiki/%E5%AE%9E%E6%95%B0 "实数")。实际上大于或小于另一个数的概念一般是数系统的基本直觉（尽管你通常还感兴趣于两个数实际的[差](https://zh.wikipedia.org/wiki/%E5%B7%AE "差")，它不能由这个次序给出）。排序的另一个非常熟悉的例子是词典中[词典次序](https://zh.wikipedia.org/w/index.php?title=%E8%AF%8D%E5%85%B8%E6%AC%A1%E5%BA%8F&action=edit&redlink=1 "词典次序（页面不存在）")。

上述类型的次序有特殊性质：每个元素都是可以“比较”于另一个元素，就是说，它或者大于、或者小于、或者等于另一个元素。但是，这不总是想要的要求。一个周知的例子是[集合](https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88_\(%E6%95%B0%E5%AD%A6\) "集合 (数学)")的[子集](https://zh.wikipedia.org/wiki/%E5%AD%90%E9%9B%86 "子集")排序。如果一个集合A包含集合B的所有元素，则 _B_ 被称为小于等于 _A_。然而有些集合不能在这种方式来比较，因为其中每个都包含着其他集合中不存在的某些元素。所以，子集包含是[偏](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F "偏序")次序，对立了前面给出的[全](https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BA%8F "全序")次序。

序理论在一般性架构下捕获了上述例子引发的直觉次序。这是通过指定[关系](https://zh.wikipedia.org/wiki/%E5%85%B3%E7%B3%BB_\(%E6%95%B0%E5%AD%A6\) "关系 (数学)") $\leq$ 必须是数学上次序的一些性质来完成的。这种更加抽象的方式更有意义，因为你可以从一般性架构推导出各种定理，而不用关心任何特定次序的细节。这种洞察可以容易的转换到很多具体应用中。

由次序的各种实践使用所驱动，已经定义了多个特殊种类的有序集合，其中某些已经发展出自己的数学领域。此外，序理论不限制于各种种类的排序关系，还考虑在它们之间的适当的[函数](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0 "函数")。函数的序理论的性质的一个简单例子来自在[数学分析](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90 "数学分析")中常见的[单调函数](https://zh.wikipedia.org/wiki/%E5%8D%95%E8%B0%83%E5%87%BD%E6%95%B0 "单调函数")。
#### Formal Definition: Sequence & Tuples
> ↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)

 > 📖 Introduction to the Theory of Computation, 3rd edition, by Michael Sipser
 
A **sequence** of objects is a list of these objects in some order. We usually designate a sequence by writing the list within parentheses. For example, the sequence 7, 21, 57 would be written $$(7,21,57).$$
The order doesn’t matter in a set, but in a sequence it does. Hence $(7,21,57)$ is not the same as $(57,7,21)$. Similarly, repetition does matter in a sequence, but it doesn’t matter in a set. Thus $(7,7,21,57)$ is different from both of the other sequences, whereas the set $\{7,21,57\}$ is identical to the set $\{7,7,21,57\}$. 

As with sets, sequences may be finite or infinite. Finite sequences often are called **tuples**. A sequence with k elements is a **k-tuple**. Thus $(7,21,57)$ is a 3-tuple. A 2-tuple is also called an **ordered pair**.

Sets and sequences may appear as elements of other sets and sequences. For example, the **power set** of A is the set of all subsets of A. If A is the set $\{0,1\}$, the power set of A is the set $\{∅,\{0\},\{1\},\{0,1\}\}$. The set of all ordered pairs whose elements are 0s and 1s is $\{(0,0),(0,1),(1,0), (1,1)\}$.

If A and B are two sets, the **Cartesian product** or **cross product** of A and B, written $A\times B$, is the set of all ordered pairs wherein the first element is a member of A and the second element is a member of B.

We can also take the Cartesian product of $k$ sets, $A_1$, $A_2$, ... ,$A_k$ , written $A_1 \times A_2 \times ··· \times A_k$. It is the set consisting of all k-tuples $(a_1, a_2, ..., a_k)$ where $a_i \in A_i$.

If we have the Cartesian product of a set with itself, we use the shorthand $$\overbrace{A \times A \times ... \times A}^{k} = A^k$$



## Ref
[👍 浅谈相等关系与等价关系]: https://evian-zhang.github.io/articles/Math/27659362/27659362.html
从数学上来讲，等价关系是在 **某个方面上** 两者的可互换性，而相等关系是在 **所有方面** 两者的可互换性。

[等价关系、等价类与划分 | CSDN]: https://blog.csdn.net/sinat_20471177/article/details/118707113
