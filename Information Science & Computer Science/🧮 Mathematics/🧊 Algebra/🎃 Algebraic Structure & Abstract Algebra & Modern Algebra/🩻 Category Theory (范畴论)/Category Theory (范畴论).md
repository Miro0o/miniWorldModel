# Category Theory (范畴论)

[TOC]



## Res
### Related Topics
↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
↗ [Algebraic Topology](../../../Topology/Algebraic%20Topology/Algebraic%20Topology.md)

↗ [Topology Structure](../../../Topology/🎃%20Topology%20Structure/Topology%20Structure.md)
↗ [Algebraic Graph Theory](../../../Graph%20Theory/Algebraic%20Graph%20Theory/Algebraic%20Graph%20Theory.md)

↗ [Morpheme & Word](../../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Cultures/📃%20Language%20&%20Literature/🌐%20Language%20Learning%20&%20Second%20Language%20Acquisition/🇬🇧%20Learning%20English%20the%20Right%20Way/1️⃣%20English%20Grammar/Morpheme%20&%20Word/Morpheme%20&%20Word.md)

↗ [Formal Semantics and Programming Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)


### Other Resources




## Intro
> ↗ [Mathematics /👉 Structure（结构）](../../../Mathematics.md#👉%20Structure（结构）)
> 🔗 https://thzt.github.io/2018/02/09/semantics-7/

范畴论的研究数学结构的形式化方法，它不考虑具体的数学对象，而是考虑数学对象以及它们之间的联系。学习范畴论最好的办法，我认为不宜马上从抽象的概念开始，而是先回到具体的例子上面，找到相似性，**理解概念被发明的动机**。因此，我们要先理解什么是**数学结构**。

> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

上文中，我们用群，拓扑空间，CPO作为例子，来说明什么是数学结构，以及数学结构是如何通过映射来保持的。群同态保持了群结构，连续映射保持了拓扑结构，连续函数保持了完全偏序结构。那么群结构与拓扑结构之间是否有联系呢？我们能否建立拓扑空间与群之间的对应关系呢？

在代数拓扑中，就存在这样的例子，人们找到了和拓扑空间相关的群论概念，例如基本群和同调群，拓扑空间的连续映射可以导出这些群的群同态。这就为了人们使用代数学方法研究其他数学分支，奠定了基础，实际上，最原始的范畴论想法也是起源于此。

> 🔗 https://en.wikipedia.org/wiki/Category_theory

**Category theory** is a general theory of [mathematical structures](https://en.wikipedia.org/wiki/Mathematical_structure "Mathematical structure") and their relations. It was introduced by [Samuel Eilenberg](https://en.wikipedia.org/wiki/Samuel_Eilenberg "Samuel Eilenberg") and [Saunders Mac Lane](https://en.wikipedia.org/wiki/Saunders_Mac_Lane "Saunders Mac Lane") in the middle of the 20th century in their foundational work on [algebraic topology](https://en.wikipedia.org/wiki/Algebraic_topology "Algebraic topology"). Category theory is used in most areas of mathematics. In particular, many constructions of new [mathematical objects](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object") from previous ones that appear similarly in several contexts are conveniently expressed and unified in terms of categories. Examples include [quotient spaces](https://en.wikipedia.org/wiki/Quotient_space_\(disambiguation\) "Quotient space (disambiguation)"), [direct products](https://en.wikipedia.org/wiki/Direct_product "Direct product"), completion, and [duality](https://en.wikipedia.org/wiki/Duality_\(mathematics\) "Duality (mathematics)").

Many areas of [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") also rely on category theory, such as [functional programming](https://en.wikipedia.org/wiki/Functional_programming "Functional programming") and [semantics](https://en.wikipedia.org/wiki/Semantics_\(computer_science\) "Semantics (computer science)").

==A [category](https://en.wikipedia.org/wiki/Category_\(mathematics\) "Category (mathematics)") is formed by two sorts of [objects](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object"): the [objects](https://en.wikipedia.org/wiki/Object_\(category_theory\) "Object (category theory)") of the category, and the [morphisms](https://en.wikipedia.org/wiki/Morphism "Morphism") (态射), that relate two objects called the _source_ and the _target_ of the morphism.== A morphism is often represented by an arrow from its source to its target (see the figure). Morphisms can be composed if the target of the first morphism equals the source of the second one. Morphism composition has similar properties as [function composition](https://en.wikipedia.org/wiki/Function_composition "Function composition") ([associativity](https://en.wikipedia.org/wiki/Associativity "Associativity") and existence of an [identity morphism](https://en.wikipedia.org/wiki/Identity_element "Identity element") for each object).

Morphisms are often some sort of [functions](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)"), but this is not always the case. For example, a [monoid](https://en.wikipedia.org/wiki/Monoid "Monoid") may be viewed as a category with a single object, whose morphisms are the elements of the monoid.

![|300](../../../../../Assets/Pics/Pasted%20image%2020251010001911.png)
<small>Schematic representation of three objects and three morphisms of a category, which form a commutative diagram <a>https://en.wikipedia.org/wiki/Commutative_diagram "Commutative diagram"</a></small>

The second fundamental concept of category theory is the concept of a [functor](https://en.wikipedia.org/wiki/Functor "Functor"), which plays the role of a morphism between two categories C1 and C2: it maps objects of C1 to objects of C2 and morphisms of C1 to morphisms of C2 in such a way that sources are mapped to sources, and targets are mapped to targets (or, in the case of a [contravariant functor](https://en.wikipedia.org/wiki/Contravariant_functor "Contravariant functor"), sources are mapped to targets and _vice-versa_). A third fundamental concept is a [natural transformation](https://en.wikipedia.org/wiki/Natural_transformation "Natural transformation") that may be viewed as a morphism of functors.


### Diagram Representation


### Categories (范畴), Objects (对象), and Morphism (态射)
> 🔗 https://en.wikipedia.org/wiki/Category_theory#Categories,_objects,_and_morphisms

> 🔗 https://thzt.github.io/2018/02/11/semantics-8/

范畴是一个数学概念，也可以用图示法来表示。

![|300](../../../../../Assets/Pics/Pasted%20image%2020251011221138.png)

一个**范畴**CatCat由一系列**对象**（object）和**箭头**（arrow）组成。对于每一个箭头ff，有两个对象与之关联，称为箭头ff的定义域（domain）和值域（codomain）。并且，还要满足以下几条规则，
1. 对于每一个对象aa，存在恒等箭头（identity arrow），i:a→ai:a→a
2. 箭头满足结合律，对于任意的箭头f,g,hf,g,h，有(f⋅g)⋅h=f⋅(g⋅h)(f⋅g)⋅h=f⋅(g⋅h)
3. 箭头的集合在箭头组合运算下是封闭的

其中，f⋅gf⋅g表示gg和ff的组合运算，它也是一个箭头，其中gg的值域是ff的定义域。
例子：
- 所有的集合，以集合为对象，集合之间的映射作为箭头，构成了一个范畴，
- 所有的群，以群作为对象，群同态作为箭头，构成了一个范畴，
- 所有的拓扑空间，以拓扑空间作为对象，拓扑空间之间的连续映射为箭头，构成了一个范畴。

以上三个例子中，范畴中的对象都是集合，箭头都是映射，这就很容易造成误解。因为，**范畴中的对象可以不是集合，箭头也可以不是映射**，理解这一点至关重要。
例如，完全偏序(D,⩽)(D,⩽)，以DD中的元素作为对象，以x⩽yx⩽y作为x,yx,y之间的箭头，同样构成了一个范畴。


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

范畴$X$上的一个**Monad**，指的是三元组$⟨T,η,μ⟩$，它们使下图可交换：
![](../../../../../Assets/Pics/Pasted%20image%2020251011222544.png)
其中，$T:X\to X$是范畴$X$上的自函子，$η:I_X\to T，μ:T^2→T$是两个自然变换。
#### Monad on Hask Category
> 🔗 https://thzt.github.io/2018/02/11/semantics-8/



## Ref
[范畴论 | 香蕉空间]: https://www.bananaspace.org/wiki/范畴论

[语言背后的代数学（八）：范畴]: https://thzt.github.io/2018/02/11/semantics-8/
上文中，我们用群，拓扑空间，CPO作为例子，来说明什么是数学结构，以及数学结构是如何通过映射来保持的。群同态保持了群结构，连续映射保持了拓扑结构，连续函数保持了完全偏序结构。那么群结构与拓扑结构之间是否有联系呢？我们能否建立拓扑空间与群之间的对应关系呢？

在代数拓扑中，就存在这样的例子，人们找到了和拓扑空间相关的群论概念，例如基本群和同调群，拓扑空间的连续映射可以导出这些群的群同态。这就为了人们使用代数学方法研究其他数学分支，奠定了基础，实际上，最原始的范畴论想法也是起源于此。
