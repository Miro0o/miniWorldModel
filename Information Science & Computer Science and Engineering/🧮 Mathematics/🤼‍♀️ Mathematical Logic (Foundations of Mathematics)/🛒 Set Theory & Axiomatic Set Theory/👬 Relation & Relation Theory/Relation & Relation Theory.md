# Relation & Relation Theory

[TOC]



## Res
### Related Topics
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)
↗ [Second-Order Predicate Logic (二阶谓词逻辑)](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Second-Order%20Predicate%20Logic%20(二阶谓词逻辑).md)
↗ [Higher-Order Languages & Logics (HOL)](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Higher-Order%20Languages%20&%20Logics%20(HOL).md)

↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)

↗ [Combinatorics (Combinatorial Mathematics)](../../../Combinatorics%20(Combinatorial%20Mathematics)/Combinatorics%20(Combinatorial%20Mathematics).md)

↗ [Tree & Graph](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Tree%20&%20Graph/Tree%20&%20Graph.md)
↗ [Graph Theory](../../../Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/Graph%20Theory.md)
↗ [Models of Computation & Abstract Machines](../../😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"
↗ [Markov Process & Markov Chain (MC)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md)
- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)

↗ [Bisimulation](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🧳%20(Formal)%20Model%20Checking/Models%20Analysis%20&%20Improvement/Bisimulation.md)


### Other Resources



## Intro
> 📖 离散数学，四川大学计算机学院

世界上的事物都在一定范围内以某种方式互相联系例如天体之间可以用星系来划分，人类之间可以用是否有共同的祖先来定血缘生物，物种之间可以用进化顺序来定先后，化学元素之间可以用外层电子数来决定在元素周期表上的位置等。

类似地，数学或者计算机科学中的研究对象也以各种不同的形式相互联系着：例如，整数之间以大小整除或同余等关系相联系；命题公式之间以是否有相同主合取范式相联系；程序中两个变量可以用是否占有同一内存地址相联系。总之，事物之间总可以根据需要确定相应的关系。

从数学的角度看，这类联系就是某个集合中元素之间存在的关系。本章将用数学语言把这类联系形式化给出关系的一般描述及其表示方法并研究关系的性质，以导出能普遍适用的理论，反过来又能用于指导对实践问题的深入应用。由于一组元素之间的关系常常可以通过每两个元素之间的关系来表达，因而二元（素之间的）关系是最基本的关系，

![computing.excalidraw | 800](../../../../../Assets/Illustrations/Philosophy/computing.excalidraw.md)

> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)

In mathematics, a **relation** denotes some kind of relationship between two objects in a set, which may or may not hold.[1] As an example, "is less than" is a relation on the set of natural numbers; it holds, for instance, between the values 1 and 3 (denoted as $1 < 3$), and likewise between 3 and 4 (denoted as $3 < 4$), but not between the values 3 and 1 nor between 4 and 4, that is, $3 < 1$ and $4 < 4$ both evaluate to false. As another example, "is sister of" is a relation on the set of all people, it holds e.g. between Marie Curie and Bronisława Dłuska, and likewise vice versa. Set members may not be in relation "to a certain degree" – either they are in relation or they are not.

Formally, a relation $R$ over a set $X$ can be seen as a set of ordered pairs $(x, y)$ of members of $X$.[2] The relation $R$ holds between $x$ and $y$ if $(x, y)$ is a member of $R$. For example, the relation "is less than" on the natural numbers is an infinite set $R_{less}$ of pairs of natural numbers that contains both $(1, 3)$ and $(3, 4)$, but neither $(3, 1)$ nor $(4, 4)$. The relation "is a nontrivial divisor of" on the set of one-digit natural numbers is sufficiently small to be shown here: $R_{dv} = \{ (2, 4), (2, 6), (2, 8), (3, 6), (3, 9), (4, 8) \}$; for example 2 is a nontrivial divisor of 8, but not vice versa, hence $(2, 8) \in R_{dv}$, but $(8, 2) \notin R_{dv}$.

If $R$ is a relation that holds for $x$ and $y$, one often writes $xRy$. For most common relations in mathematics, special symbols are introduced, like "$<$" for "is less than", and "$|$" for "is a divisor of", and, most popular "$=$" for "is equal to". For example, "$1 < 3$", "1 is less than 3", and "$(1, 3) \in R_{less}$" mean all the same; some authors also write "$(1, 3) \in (<)$".


### Formal Definition: Relation
> [!links]
> ↗ [Function & Mapping of Set](../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)

> 📖  Introduction to the Theory of Computation, 3rd edition, by Michael Sipser

A **predicate** or **property** is a function whose range is $\{TRUE, FALSE\}$. For example, let $even$ be a property that is $TRUE$ if its input is an even number and $FALSE$ if its input is an odd number. Thus $even(4) = TRUE$ and $even(5) = FALSE$.

A property whose domain is a set of k-tuples $A \times ···\times A$ is called a **relation**, a **k-ary relation**, or a **k-ary relation on A**. A common case is a **2-ary relation**, called a **binary relation**. When writing an expression involving a binary relation, we customarily use infix notation. For example, “less than” is a relation usually written with the infix operation symbol $<$. “Equality”, written with the $=$ symbol, is another familiar relation. If $R$ is a binary relation, the statement $aRb$ means that $aRb= TRUE$. Similarly, if $R$ is a k-ary relation, the statement $R(a_1, ..., a_k)$ means that $R(a_1, ..., a_k) = TRUE$.

Sometimes describing predicates with sets instead of functions is more convenient. The predicate $P: D \to \{TRUE, FALSE\}$ may be written $(D,S)$, where $S= \{a \in D | P(a) = TRUE\}$, or simply $S$ if the domain $D$ is obvious from the context. Hence the relation beats may be written $$\{(Scissors, Paper), (Paper, Stone), (Stone, Scissors)\}$$
![](../../../../../Assets/Pics/Screenshot%202025-09-15%20at%2020.04.36.png)


### Binary Relation
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


### Representation of Relation



## Properties of Relation
> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)#Properties_of_relations

A relation $R$ over a set $X$ can be characterized by several important properties. Below are the primary definitions and examples.

Reflexivity
* **Reflexive:** For all $x \in X$, $xRx$. 
    * *Example:* $\geq$ is a reflexive relation, but $>$ is not.
* **Irreflexive (or strict):** For all $x \in X$, not $xRx$. 
    * *Example:* $>$ is an irreflexive relation, but $\geq$ is not.

> **Note:** These alternatives are not exhaustive. For example, the relation $y = x^2$ is neither reflexive nor irreflexive; it contains the pair $(0,0)$ but does not contain $(2,2)$.

Symmetry
* **Symmetric:** For all $x, y \in X$, if $xRy$ then $yRx$. 
    * *Example:* "Is a blood relative of" is symmetric because $x$ is a blood relative of $y$ if and only if $y$ is a blood relative of $x$.
* **Antisymmetric:** For all $x, y \in X$, if $xRy$ and $yRx$, then $x = y$. 
    * *Example:* $\geq$ is antisymmetric. The relation $>$ is also antisymmetric, but **vacuously** (the condition in the definition is always false).
* **Asymmetric:** For all $x, y \in X$, if $xRy$ then not $yRx$. 
    * *Note:* A relation is asymmetric if and only if it is both antisymmetric and irreflexive. 
    * *Example:* $>$ is asymmetric, but $\geq$ is not.

> **Note:** These three are not exhaustive. Over the natural numbers, the relation $xRy$ defined by $x > 2$ is neither symmetric (e.g., $5R1$ but not $1R5$) nor antisymmetric (e.g., $6R4$ and $4R6$ both exist), let alone asymmetric.

Transitivity
* **Transitive:** For all $x, y, z \in X$, if $xRy$ and $yRz$, then $xRz$. 
    * *Note:* A transitive relation is irreflexive if and only if it is asymmetric.
    * *Example:* "Is ancestor of" is a transitive relation, while "is parent of" is not.

Connectivity
* **Connected:** For all $x, y \in X$, if $x \neq y$, then $xRy$ or $yRx$. 
    * *Example:* On the natural numbers, $<$ is connected, while "is a divisor of" is not (e.g., neither $5R7$ nor $7R5$).
* **Strongly Connected:** For all $x, y \in X$, $xRy$ or $yRx$. 
    * *Note:* A relation is strongly connected if and only if it is connected and reflexive.
    * *Example:* On the natural numbers, $\leq$ is strongly connected, but $<$ is not.


### Uniqueness Properties
> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)#Uniqueness_properties

_Injective_[e](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-heterogeneous-18) (also called _left-unique_[14](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-kkm-19))
- For all _x_, _y_, _z_ ∈ _X_, if _xRy_ and _zRy_ then _x_ = _z_. For example, the green and blue relations in the diagram are injective, but the red one is not (as it relates both −1 and 1 to 1), nor is the black one (as it relates both −1 and 1 to 0).

_Functional_[15](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-20)[16](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-21)[17](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-22)[e](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-heterogeneous-18) (also called _right-unique_,[14](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-kkm-19) _right-definite_[18](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-FOOTNOTEM%C3%A4s2007-23) or _univalent_[9](https://en.wikipedia.org/wiki/Relation_\(mathematics\)#cite_note-FOOTNOTESchmidt2010Chapt._5-10))
- For all _x_, _y_, _z_ ∈ _X_, if _xRy_ and _xRz_ then _y_ = _z_. Such a relation is called a _[partial function](https://en.wikipedia.org/wiki/Partial_function "Partial function")_. For example, the red and green relations in the diagram are functional, but the blue one is not (as it relates 1 to both −1 and 1), nor is the black one (as it relates 0 to both −1 and 1).


### Totality Properties
> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)#Totality_properties

_[Serial](https://en.wikipedia.org/wiki/Serial_relation "Serial relation")_ (also called _total_ or _left-total_)
- For all _x_ ∈ _X_, there exists some _y_ ∈ _X_ such that _xRy_. For example, the red and green relations in the diagram are total, but the blue one is not (as it does not relate −1 to any real number), nor is the black one (as it does not relate 2 to any real number). As another example, > is a serial relation over the integers. But it is not a serial relation over the positive integers, because there is no y in the positive integers such that 1 > _y_. However, < is a serial relation over the positive integers, the rational numbers and the real numbers. Every reflexive relation is serial: for a given x, choose _y_ = _x_.

_Surjective_ (also called _right-total_) or _onto_)
- For all _y_ ∈ _X_, there exists an _x_ ∈ _X_ such that _xRy_. For example, the green and blue relations in the diagram are surjective, but the red one is not (as it does not relate any real number to −1), nor is the black one (as it does not relate any real number to 2).


### Combinations of Properties & Important Relations ⭐
> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)#Combinations_of_properties

Relations that satisfy certain combinations of the above properties are particularly useful, and thus have received names by their own.

|                                                                                                                                                                     | [Reflexivity](https://en.wikipedia.org/wiki/Reflexive_relation "Reflexive relation") | [Symmetry](https://en.wikipedia.org/wiki/Symmetric_relation "Symmetric relation") | [Transitivity](https://en.wikipedia.org/wiki/Transitive_relation "Transitive relation") | [Connectedness](https://en.wikipedia.org/wiki/Connected_relation "Connected relation") | Example                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [Partial order](https://en.wikipedia.org/wiki/Partially_ordered_set#Formal_definition "Partially ordered set")                                                      | <a style="color:green">Refl </a>                                                     | <a style="color:red">Antisym </a>                                                 | <a style="color:green">Yes </a>                                                         |                                                                                        | [Subset](https://en.wikipedia.org/wiki/Subset "Subset")                                     |
| [Strict partial order](https://en.wikipedia.org/wiki/Partially_ordered_set#Correspondence_of_strict_and_non-strict_partial_order_relations "Partially ordered set") | <a style="color:red">Irrefl </a>                                                     | <a style="color:red">Asym </a>                                                    | <a style="color:green">Yes </a>                                                         |                                                                                        | Strict subset                                                                               |
| [Total order](https://en.wikipedia.org/wiki/Total_order "Total order")                                                                                              | <a style="color:green">Refl </a>                                                     | <a style="color:red">Antisym </a>                                                 | <a style="color:green">Yes </a>                                                         | <a style="color:green">Yes </a>                                                        | [Alphabetical order](https://en.wikipedia.org/wiki/Alphabetical_order "Alphabetical order") |
| [Strict total order](https://en.wikipedia.org/wiki/Total_order#Strict_total_order "Total order")                                                                    | <a style="color:red">Irrefl </a>                                                     | <a style="color:red">Asym </a>                                                    | <a style="color:green">Yes </a>                                                         | <a style="color:green">Yes </a>                                                        | Strict alphabetical order                                                                   |
| [Equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation "Equivalence relation")                                                                   | <a style="color:green">Refl </a>                                                     | <a style="color:green">sym </a>                                                   | <a style="color:green">Yes </a>                                                         |                                                                                        | [Equality](https://en.wikipedia.org/wiki/Equality_\(mathematics\) "Equality (mathematics)") |

> 📖 离散数学，四川大学计算机学院

等价关系和偏序关系是两类在实践问题中有着重要意义的二元关系，同时也在计算机科学中有着极其重要的应用。

等价关系是同时具有自反性，对称性和传递性的关系。
偏序关系是具有自反性，反对称性和传递性的关系。

等价关系的一个例子就是相等性，相等性关系$R(a,b)$当且仅当$a,b$是同一个元素。
偏序关系，例如通常的序关系$R⊆N×N$，$R(a,b)$当且仅当$a⩽b$。
#### Equivalence Relation
 >[!links]
 >↗ [Equivalence Relation](Equivalence%20Relation.md)

> 📖  Introduction to the Theory of Computation, 3rd edition, by Michael Sipser

A special type of binary relation, called an **equivalence relation**, captures the notion of two objects being equal in some feature. A binary relation $R$ is an equivalence relation if $R$ satisfies three conditions:
1. $R$ is reflexive if for every $x$, $xRx$;
2. $R$ is symmetric if for every $x$ and $y$, $xRy$ implies $yRx$;
3. $R$ is transitive if for every $x$, $y$, and $z$, $xRy$ and $yRz$ implies $xRz$.
#### Ordering & Partial Order Relation
> [!links]
> ↗ [Partial Order & Order Theory](Partial%20Order%20&%20Order%20Theory/Partial%20Order%20&%20Order%20Theory.md)
> - Partial Order & Lattice
> - Total Order
> - Well Order
> 
> ↗ [Lattice (Order Theory)](Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

A _partially ordered set_ or poset is a tuple $(L, \sqsubseteq)$, meaning a set of elements $L$ with an (partially) ordering relationship $\sqsubseteq$ on it, that uphold: $$\begin{aligned} & \forall a. \ a\sqsubseteq a & \text{reflexive} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq a\implies a=b & \text{anti-symetric} \\
& ∀a. \ a\sqsubseteq b\land b\sqsubseteq c\implies a\sqsubseteq c & \text{transitive}
\end{aligned}$$
> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)#Orderings

_[Partial order](https://en.wikipedia.org/wiki/Partially_ordered_set#Formal_definition "Partially ordered set")_
- A relation that is reflexive, antisymmetric, and transitive.
_[Strict partial order](https://en.wikipedia.org/wiki/Partially_ordered_set#Correspondence_of_strict_and_non-strict_partial_order_relations "Partially ordered set")_
- A relation that is irreflexive, asymmetric, and transitive.
_[Total order](https://en.wikipedia.org/wiki/Total_order "Total order")_
- A relation that is reflexive, antisymmetric, transitive and connected.
_[Strict total order](https://en.wikipedia.org/wiki/Total_order#Strict_total_order "Total order")_
- A relation that is irreflexive, asymmetric, transitive and connected.
#### Uniqueness Properties
> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)#Uniqueness_properties_2

One-to-one[e]
- Injective and functional. For example, the green relation in the diagram is one-to-one, but the red, blue and black ones are not.
One-to-many[e]
- Injective and not functional. For example, the blue relation in the diagram is one-to-many, but the red, green and black ones are not.
Many-to-one[e]
- Functional and not injective. For example, the red relation in the diagram is many-to-one, but the green, blue and black ones are not.
Many-to-many[e]
- Not injective nor functional. For example, the black relation in the diagram is many-to-many, but the red, green and blue ones are not.
#### Uniqueness and Totality Properties & Function ⭐
> [!links]
> ↗ [Function & Mapping of Set](../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> ↗ [Mathematical Analysis (& Analytical Mathematics)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)
> 
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
> 
> ↗ [Category Theory (范畴论)](../../../🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)

> 🔗 https://en.wikipedia.org/wiki/Relation_(mathematics)#Uniqueness_and_totality_properties

A function[e]
- A relation that is functional and total. For example, the red and green relations in the diagram are functions, but the blue and black ones are not.
An injection[e]
- A function that is injective. For example, the green relation in the diagram is an injection, but the red, blue and black ones are not.
A surjection[e]
- A function that is surjective. For example, the green relation in the diagram is a surjection, but the red, blue and black ones are not.
A bijection[e]
- A function that is injective and surjective. For example, the green relation in the diagram is a bijection, but the red, blue and black ones are not.

> 📖 离散数学，四川大学计算机学院

通常使用的函数概念是指数值量之间的依赖关系一个量因变量从属于其他量自变量的变化而变化。一般地，也可以把函数看成是两个集合元素之间的联系关系。因此，函数是一种特殊的二元关系。



## Ref
[👍 浅谈相等关系与等价关系]: https://evian-zhang.github.io/articles/Math/27659362/27659362.html
从数学上来讲，等价关系是在 **某个方面上** 两者的可互换性，而相等关系是在 **所有方面** 两者的可互换性。

[等价关系、等价类与划分 | CSDN]: https://blog.csdn.net/sinat_20471177/article/details/118707113
