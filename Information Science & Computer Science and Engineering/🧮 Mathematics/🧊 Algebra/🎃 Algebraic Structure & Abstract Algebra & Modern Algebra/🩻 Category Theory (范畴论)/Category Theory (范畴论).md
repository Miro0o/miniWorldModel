# Category Theory (范畴论)

[TOC]



## Res
### Related Topics
↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
↗ [Algebraic Topology](../../../Topology/Algebraic%20Topology/Algebraic%20Topology.md)

↗ [Type Theory (类型论)](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)
↗ [Programming Language Theory (PLT)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Computational Trilogy & Curry–Howard(–Lambek) Correspondence](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Computational%20Trilogy%20&%20Curry–Howard(–Lambek)%20Correspondence.md)

↗ [Topology Structure](../../../Topology/🎃%20Topology%20Structure/Topology%20Structure.md)
↗ [Algebraic Graph Theory](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/Algebraic%20Graph%20Theory/Algebraic%20Graph%20Theory.md)

↗ [Morpheme & Word](../../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Humanities/📃%20Language%20&%20Literature/🌐%20Language%20Learning%20&%20(Second)%20Language%20Acquisition/🇬🇧%20🇺🇸%20Learning%20English%20the%20Right%20Way/1️⃣%20English%20Grammar/Morpheme%20&%20Word/Morpheme%20&%20Word.md)

↗ [Formal Semantics and Programming Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)


### Other Resources
👍 https://thzt.github.io/categories/Math/
- [语言背后的代数学（一）：语义解释](https://thzt.github.io/2018/01/14/semantics-1/)
- [语言背后的代数学（二）：初等代数](https://thzt.github.io/2018/01/20/semantics-2/)
- [语言背后的代数学（三）：语义模型](https://thzt.github.io/2018/01/27/semantics-3/)
- [语言背后的代数学（四）：哥德尔定理](https://thzt.github.io/2018/01/30/semantics-4/)
- [语言背后的代数学（五）：Σ代数](https://thzt.github.io/2018/02/03/semantics-5/)
- [语言背后的代数学（六）：Henkin模型](https://thzt.github.io/2018/02/04/semantics-6/)
- [语言背后的代数学（七）：数学结构](https://thzt.github.io/2018/02/09/semantics-7/)
- [语言背后的代数学（八）：范畴](https://thzt.github.io/2018/02/11/semantics-8/)
- [语言背后的代数学（九）：笛卡尔闭范畴](https://thzt.github.io/2018/02/19/semantics-9/)
- [语言背后的代数学（十）：Curry-Howard-Lambek correspondance](https://thzt.github.io/2018/02/23/semantics-10/)



## Intro
> [!links]
> ↗ [Mathematics /👉 Structure（结构）](../../../Mathematics.md#👉%20Structure（结构）)

> 🔗 https://thzt.github.io/2018/02/09/semantics-7/

范畴论的研究数学结构的形式化方法，它不考虑具体的数学对象，而是考虑数学对象以及它们之间的联系。

学习范畴论最好的办法，我认为不宜马上从抽象的概念开始，而是先回到具体的例子上面，找到相似性，**理解概念被发明的动机**。

因此，我们要先理解什么是**数学结构**。后文中，我们会首先介绍最常被提及的群结构，然后再介绍拓扑空间和CPO（完全偏序）。有了这些例子之后，对抽象概念的理解是事半功倍的。
- ↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
	- ↗ [Group Theory & Group-Like Algebraic Structure](../Group%20Theory%20&%20Group-Like%20Algebraic%20Structure/Group%20Theory%20&%20Group-Like%20Algebraic%20Structure.md)
- ↗ [Topology](../../../Topology/Topology.md)
	- ↗ [Topology Structure](../../../Topology/🎃%20Topology%20Structure/Topology%20Structure.md)
- ↗ [Relation & Order Theory](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)
	- ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)

我们又重新回顾了完全偏序这一概念，实际上，任意一个CPO（完全偏序），都构成了一个范畴，而所有的群，也构成了一个范畴。==群范畴的对象是集合，而CPO（完全偏序）范畴的对象不一定是集合。== 这对摆脱集合论来理解范畴是很关键的。

范畴的对象不一定是集合，所有的箭头也不一定构成一个集合。如果一个范畴$C$，它的对象都是集合，所有的箭头也构成了一个集合，就称该范畴是一个小范畴（[small categories]）。

> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

上文中，我们用群，拓扑空间，CPO作为例子，来说明什么是数学结构，以及数学结构是如何通过映射来保持的。==群同态保持了群结构，连续映射保持了拓扑结构，连续函数保持了完全偏序结构。== 那么群结构与拓扑结构之间是否有联系呢？我们能否建立拓扑空间与群之间的对应关系呢？

在代数拓扑中，就存在这样的例子，人们找到了和拓扑空间相关的群论概念，例如基本群和同调群，拓扑空间的连续映射可以导出这些群的群同态。这就为了人们使用代数学方法研究其他数学分支，奠定了基础，实际上，最原始的范畴论想法也是起源于此。

> 🔗 https://en.wikipedia.org/wiki/Category_theory

**Category theory** is a general theory of [mathematical structures](https://en.wikipedia.org/wiki/Mathematical_structure "Mathematical structure") and their relations. It was introduced by [Samuel Eilenberg](https://en.wikipedia.org/wiki/Samuel_Eilenberg "Samuel Eilenberg") and [Saunders Mac Lane](https://en.wikipedia.org/wiki/Saunders_Mac_Lane "Saunders Mac Lane") in the middle of the 20th century in their foundational work on [algebraic topology](https://en.wikipedia.org/wiki/Algebraic_topology "Algebraic topology"). Category theory is used in most areas of mathematics. In particular, many constructions of new [mathematical objects](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object") from previous ones that appear similarly in several contexts are conveniently expressed and unified in terms of categories. Examples include [quotient spaces](https://en.wikipedia.org/wiki/Quotient_space_\(disambiguation\) "Quotient space (disambiguation)"), [direct products](https://en.wikipedia.org/wiki/Direct_product "Direct product"), completion, and [duality](https://en.wikipedia.org/wiki/Duality_\(mathematics\) "Duality (mathematics)").

Many areas of [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") also rely on category theory, such as [functional programming](https://en.wikipedia.org/wiki/Functional_programming "Functional programming") and [semantics](https://en.wikipedia.org/wiki/Semantics_\(computer_science\) "Semantics (computer science)").

==A [category](https://en.wikipedia.org/wiki/Category_\(mathematics\) "Category (mathematics)") is formed by two sorts of [objects](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object"): the [objects](https://en.wikipedia.org/wiki/Object_\(category_theory\) "Object (category theory)") of the category, and the [morphisms](https://en.wikipedia.org/wiki/Morphism "Morphism") (态射), that relate two objects called the _source_ and the _target_ of the morphism.== A morphism is often represented by an arrow from its source to its target (see the figure). Morphisms can be composed if the target of the first morphism equals the source of the second one. Morphism composition has similar properties as [function composition](https://en.wikipedia.org/wiki/Function_composition "Function composition") ([associativity](https://en.wikipedia.org/wiki/Associativity "Associativity") and existence of an [identity morphism](https://en.wikipedia.org/wiki/Identity_element "Identity element") for each object).

Morphisms are often some sort of [functions](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)"), but this is not always the case. For example, a [monoid](https://en.wikipedia.org/wiki/Monoid "Monoid") may be viewed as a category with a single object, whose morphisms are the elements of the monoid.

![|300](../../../../../Assets/Pics/Pasted%20image%2020251010001911.png)
<small>Schematic representation of three objects and three morphisms of a category, which form a commutative diagram <a>https://en.wikipedia.org/wiki/Commutative_diagram "Commutative diagram"</a></small>

The second fundamental concept of category theory is the concept of a [functor](https://en.wikipedia.org/wiki/Functor "Functor"), which plays the role of a morphism between two categories C1 and C2: it maps objects of C1 to objects of C2 and morphisms of C1 to morphisms of C2 in such a way that sources are mapped to sources, and targets are mapped to targets (or, in the case of a [contravariant functor](https://en.wikipedia.org/wiki/Contravariant_functor "Contravariant functor"), sources are mapped to targets and _vice-versa_). A third fundamental concept is a [natural transformation](https://en.wikipedia.org/wiki/Natural_transformation "Natural transformation") that may be viewed as a morphism of functors.

> 🔗 https://plato.stanford.edu/archives/win2006/entries/category-theory/

Category theory has come to occupy a central position in contemporary mathematics and theoretical computer science, and is also applied to mathematical physics. Roughly, it is a general mathematical theory of structures and of systems of structures. As category theory is still evolving, its functions are correspondingly developing, expanding and multiplying. At minimum, it is a powerful language, or conceptual framework, allowing us to see the universal components of a family of structures of a given kind, and how structures of different kinds are interrelated. ==Category theory is both an interesting object of philosophical study, and a potentially powerful formal tool for philosophical investigations of concepts such as space, system, and even truth.== It can be applied to the study of logical systems in which case category theory is called "categorical doctrines" at the syntactic, proof-theoretic, and semantic levels. ==Category theory is an alternative to set theory as a foundation for mathematics.== As such, it raises many issues about mathematical ontology and epistemology. Category theory thus affords philosophers and logicians much to use and reflect upon.


### Diagram Representation
> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

**幺半群 (Monoid) 的图示表示法**
在之前的内容中，我们学习过**幺半群**，它指的是一个集合 $M$ 以及 $M$ 上的二元运算 $\cdot$，满足以下两个条件：
1. $\forall x, y, z \in M, (x \cdot y) \cdot z = x \cdot (y \cdot z)$
2. $\exists e \in M, \forall x \in M, x \cdot e = e \cdot x = x$

这两个条件除了可以用等式来表示，还可以用**图 (diagram)** 来表示：
![](../../../../../Assets/Pics/Pasted%20image%2020260112172833.png)

我们称以上两张图都是**可交换的 (commutative)**，即：沿不同的路径进行运算，只要起点和终点相同，则运算的结果就相同。
* **结合律的图示含义**：
    $<x, y, z> \mapsto <x, yz> \mapsto x(yz)$ 总是等于 $<x, y, z> \mapsto <xy, z> \mapsto (xy)z$。
    即 $x(yz) = (xy)z$，表明 $M$ 中元素的运算满足结合律。
* **单位元 (幺元) 的图示含义**：
    $<0, x> \mapsto <e, x> \mapsto ex$ 总是等于 $<0, x> \mapsto x$，即 $ex = x$。
    $<x, 0> \mapsto <x, e> \mapsto xe$ 总是等于 $<x, 0> \mapsto x$，即 $xe = x$。
    因此，$ex = x = xe$，表明 $M$ 中存在幺元 $e$。

所以，我们可以用以上两个图表，作为幺半群的定义，称为**图示法**。


**图示法的更一般形式**
在集合论中讨论映射时，一般不写具体元素，还可以表示为：
![](../../../../../Assets/Pics/Pasted%20image%2020260112173003.png)

其中：
* $\mu: M \times M \to M$ 是乘法运算函数。
* $\eta: 1 \to M$ 是选取单位元的函数。
* $1 = \{0\}$ 是只有一个元素的集合。

用图示法来表示幺半群，具有更强的**一般性**。


### Categories (范畴), Objects (对象), and Morphism (态射)
> 🔗 https://en.wikipedia.org/wiki/Category_theory#Categories,_objects,_and_morphisms

> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

范畴是一个数学概念，也可以用图示法来表示。

![|300](../../../../../Assets/Pics/Pasted%20image%2020251011221138.png)

一个**范畴**Cat由一系列**对象**（object）和**箭头**（arrow）组成。对于每一个箭头ff，有两个对象与之关联，称为箭头ff的定义域（domain）和值域（codomain）。并且，还要满足以下几条规则，
1. 对于每一个对象aa，存在恒等箭头（identity arrow），i:a→a
2. 箭头满足结合律，对于任意的箭头f,g,h，有(f⋅g)⋅h=f⋅(g⋅h)
3. 箭头的集合在箭头组合运算下是封闭的

其中，f⋅g表示g和f的组合运算，它也是一个箭头，其中g的值域是f的定义域。
例子：
- 所有的集合，以集合为对象，集合之间的映射作为箭头，构成了一个范畴，
- 所有的群，以群作为对象，群同态作为箭头，构成了一个范畴，
- 所有的拓扑空间，以拓扑空间作为对象，拓扑空间之间的连续映射为箭头，构成了一个范畴。

以上三个例子中，范畴中的对象都是集合，箭头都是映射，这就很容易造成误解。因为，**范畴中的对象可以不是集合，箭头也可以不是映射**，理解这一点至关重要。
例如，完全偏序(D,⩽)，以D中的元素作为对象，以x⩽y作为x,y之间的箭头，同样构成了一个范畴。


### Functors (函子)
> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

函子就是两个范畴之间的箭头。

![|400](../../../../../Assets/Pics/Pasted%20image%2020251011221417.png)

一个函子$F$是范畴$C$到范畴$D$的箭头：$F: C\to D$。它满足以下条件：
- $F$把$C$中的对象$\{A, B, C\}$映射到D中的对象$\{F(A), F(B), F(C)\}$
- $F$把$C$中的箭头$\{f, g\}$映射到D中的箭头$\{F(f), F(g)\}$
- $F(f\cdot g) = F(f)\cdot F(g)$

值得注意：
- 等式左边的$\cdot$，表示$C$中的箭头组合运算；
- 等式右边的$\cdot$，表示$D$中的箭头组合运算。

> 🔗 https://en.wikipedia.org/wiki/Category_theory#Functors
> 🔗 https://en.wikipedia.org/wiki/Functor

Example functors:
- Diagram
- (Category theoretical) presheaf
- Presheaves (over a topological space)
- Constant functor
- Endofunctor
- Identity functor
- Diagonal functor
- Limit functor
- Power sets functor
- Dual vector space
- Fundamental group
- Algebra of continuous functions
- Tangent and cotangent bundles
- Group actions/representations
- Lie algebras
- Forgetful functors
- Free functors
- Homomorphism groups
- Representable functors
- [Adjoint functors](https://en.wikipedia.org/wiki/Adjoint_functors)
	- In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), specifically [category theory](https://en.wikipedia.org/wiki/Category_theory "Category theory"), **adjunction** is a relationship that two [functors](https://en.wikipedia.org/wiki/Functor "Functor") may exhibit, intuitively corresponding to a weak form of equivalence between two related [categories](https://en.wikipedia.org/wiki/Category_\(mathematics\) "Category (mathematics)"). Two functors that stand in this relationship are known as **adjoint functors**, one being the **left adjoint** and the other the **right adjoint**. Pairs of adjoint functors are ubiquitous in mathematics and often arise from constructions of "optimal solutions" to certain problems (i.e., constructions of objects having a certain [universal property](https://en.wikipedia.org/wiki/Universal_property "Universal property")), such as the construction of a [free group on a set](https://en.wikipedia.org/wiki/Free_group "Free group") in [algebra](https://en.wikipedia.org/wiki/Algebra "Algebra"), or the construction of the [Stone–Čech compactification](https://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification "Stone–Čech compactification") of a [topological space](https://en.wikipedia.org/wiki/Topological_space "Topological space") in [topology](https://en.wikipedia.org/wiki/Topology "Topology").


**Relation to other concepts**
> 🔗 https://en.wikipedia.org/wiki/Functor#Relation_to_other_categorical_concepts

Let _C_ and _D_ be categories. The collection of all functors from _C_ to _D_ forms the objects of a category: the [functor category](https://en.wikipedia.org/wiki/Functor_category "Functor category"). Morphisms in this category are [natural transformations](https://en.wikipedia.org/wiki/Natural_transformation "Natural transformation") between functors.

Functors are often defined by [universal properties](https://en.wikipedia.org/wiki/Universal_property "Universal property"); examples are the [tensor product](https://en.wikipedia.org/wiki/Tensor_product "Tensor product"), the [direct sum](https://en.wikipedia.org/wiki/Direct_sum_of_modules "Direct sum of modules") and [direct product](https://en.wikipedia.org/wiki/Direct_product "Direct product") of groups or vector spaces, construction of free groups and modules, [direct](https://en.wikipedia.org/wiki/Direct_limit "Direct limit") and [inverse](https://en.wikipedia.org/wiki/Inverse_limit "Inverse limit") limits. The concepts of [limit and colimit](https://en.wikipedia.org/wiki/Limit_\(category_theory\) "Limit (category theory)") generalize several of the above.

Universal constructions often give rise to pairs of [adjoint functors](https://en.wikipedia.org/wiki/Adjoint_functors "Adjoint functors").


### Natural Transformations (自然变换)
> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

自然变换（natural transformation）是一族箭头，将范畴$A$在一个函子中的像（picture），变换成了另一个函子的像。

给定两个函子$S,T:A\to B$，其中$A$和$B$是范畴。自然变换的每个分量（components）使下图可交换。

![](../../../../../Assets/Pics/Pasted%20image%2020251011222203.png)

其中，$\tau_\alpha$​​是$B$中的箭头，$\tau_\alpha​​:S_a\to T_a$。


> 🔗 https://en.wikipedia.org/wiki/Category_theory#Natural_transformations

![|300](../../../../../Assets/Pics/Pasted%20image%2020251010235647.png)
<small>The two functors F and G are called naturally isomorphic if there exists a natural transformation from F to G such that ηX is an isomorphism for every object X in C.</small>


### Monad
> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

范畴到自身的函子，称为**自函子**（endofunctor）。

**自函子与自然变换**
设 $T : X \to X$ 是任意范畴 $X$ 上的**自函子** (Endofunctor)。自函子复合之后仍为自函子：
* $T^2 = T \circ T : X \to X$
* $T^3 = T^2 \circ T : X \to X$


**自然变换的定义**
令 $\mu : T^2 \to T$ 是一个**自然变换**，其分量为：
$$\mu_x : T^2x \to Tx, \quad \forall x \in X$$
则使用 $\mu$ 可以定义另外两个自然变换：
1. **$T\mu : T^3 \to T^2$**
   其分量为：$(T\mu)_x = T(\mu_x) : T^3x \to T^2x$
2. **$\mu T : T^3 \to T^2$**
   其分量为：$(\mu T)_x = \mu_{Tx}$


范畴$X$上的一个**Monad**，指的是三元组$⟨T,η,μ⟩$，它们使下图可交换：
![](../../../../../Assets/Pics/Pasted%20image%2020251011222544.png)
其中，$T:X\to X$是范畴$X$上的自函子，$η:I_X\to T，μ:T^2→T$是两个自然变换。

值得注意的是，Monad与幺半群的图示法是相似的，只需要将幺半群定义中的$×$，改写成自函子的复合运算，把单位集合$1$，改写成单位自函子即可。

因此，我们说Monad是自函子范畴上的一个幺半群。

> All told, a monad in X is just a monoid in the category of endofunctors of X, with product x replaced by composition of endofunctors and unit set by the identity endofunctor.
#### e.g. Monad on Hask Category
> ↗ [Haskell](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Functional%20Programming%20Languages/Haskell/Haskell.md)
> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

如果把Haskell语言中的类型作为对象，把类型之间的函数看做箭头，则在函数复合运算下，构成了一个范畴，称为**Hask范畴**。


**Functor (函子)**
Haskell 中类型类（type class）`Functor` 的每一个实例，定义了 Hask 范畴中的一个函子。
```Haskell
class Functor (f :: * -> *) where
    fmap :: (a -> b) -> f a -> f b
```

`fmap` 表示了函子作用在箭头上的结果。作用在对象上，可以使用 `pure :: a -> f a` 来表示。

在 Haskell 中，一个类型要成为 `Functor` 的实例，还要满足相应的 “Functor Law”：
```Haskell
fmap id = id
fmap (f . g) = fmap f . fmap g
```

可以证明，这些 “Functor Law” 刚好使 `f`, `fmap` 和 `pure` 构成了范畴论意义上的函子。


**Monad**
Haskell 中类型类 `Monad` 的每一个实例，定义了 Hask 范畴中的一个 Monad。
```Haskell
class Functor m => Monad m where
    return :: a -> m a
    (>>=)  :: m a -> (a -> m b) -> m b
```

在 Haskell 中，一个类型要成为 `Monad` 的实例，还要满足相应的 “Monad Law”：
```Haskell
return a >>= k                 = k a
m        >>= return            = m
m        >>= (\x -> k x >>= h) = (m >>= k) >>= h
```

可以证明，这些 “Monad Law” 刚好使 `m`, `>>=` 和 `return` 构成了范畴论意义上的 Monad。



## Ref
[范畴论 | 香蕉空间]: https://www.bananaspace.org/wiki/范畴论

[语言背后的代数学（八）：范畴]: https://thzt.github.io/2018/02/11/semantics-8/
上文中，我们用群，拓扑空间，CPO作为例子，来说明什么是数学结构，以及数学结构是如何通过映射来保持的。群同态保持了群结构，连续映射保持了拓扑结构，连续函数保持了完全偏序结构。那么群结构与拓扑结构之间是否有联系呢？我们能否建立拓扑空间与群之间的对应关系呢？

在代数拓扑中，就存在这样的例子，人们找到了和拓扑空间相关的群论概念，例如基本群和同调群，拓扑空间的连续映射可以导出这些群的群同态。这就为了人们使用代数学方法研究其他数学分支，奠定了基础，实际上，最原始的范畴论想法也是起源于此。
