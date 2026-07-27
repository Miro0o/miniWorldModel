# Order Theory & Lattice-Like Algebraic Structure (格)

[TOC]



## Res
### Related Topics
↗ [Lattice (Order Theory)](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Map_of_lattices

The concept of a [lattice](https://en.wikipedia.org/wiki/Lattice_\(order\) "Lattice (order)") arises in [order theory](https://en.wikipedia.org/wiki/Order_theory "Order theory"), a branch of mathematics. The [Hasse diagram](https://en.wikipedia.org/wiki/Hasse_diagram "Hasse diagram") below depicts the inclusion relationships among some important subclasses of lattices.

![](../../../../../Assets/Pics/Pasted%20image%2020260727130614.png)


### Formal Definition of Lattice
↗ [Set Theory & Axiomatic Set Theory](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)
- ↗ [Relation & Relation Theory](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Relation%20&%20Relation%20Theory.md)
- ↗ [Partial Order & Order Theory](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Partial%20Order%20&%20Order%20Theory.md)


↗ [Lattice (Order Theory)](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)


### Connection to Other Algebraic Structures
> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)#Connection_to_other_algebraic_structures

Lattices have some connections to the family of [group-like algebraic structures](https://en.wikipedia.org/wiki/Magma_\(algebra\) "Magma (algebra)"). Because meet and join both commute and associate, a lattice can be viewed as consisting of two commutative [semigroups](https://en.wikipedia.org/wiki/Semigroups "Semigroups") having the same domain. For a bounded lattice, these semigroups are in fact commutative [monoids](https://en.wikipedia.org/wiki/Monoid "Monoid"). The [absorption law](https://en.wikipedia.org/wiki/Absorption_law "Absorption law") is the only defining identity that is peculiar to lattice theory. A bounded lattice can also be thought of as a commutative [rig](https://en.wikipedia.org/wiki/Rig_\(mathematics\) "Rig (mathematics)") without the distributive axiom.

By commutativity, associativity and idempotence one can think of join and meet as operations on non-empty finite sets, rather than on pairs of elements. In a bounded lattice the join and meet of the empty set can also be defined (as 0![{\displaystyle 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2aae8864a3c1fec9585261791a809ddec1489950) and 1,![{\displaystyle 1,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9cc5fd8163a83100c5330622e9e317fa4e872403) respectively). This makes bounded lattices somewhat more natural than general lattices, and many authors require all lattices to be bounded.

The algebraic interpretation of lattices plays an essential role in [universal algebra](https://en.wikipedia.org/wiki/Universal_algebra "Universal algebra").


### Morphism of Lattice
> 🔗 https://en.wikipedia.org/wiki/Lattice_(order)#Morphisms_of_lattices

The appropriate notion of a [morphism](https://en.wikipedia.org/wiki/Morphism "Morphism") between two lattices flows easily from the [above](https://en.wikipedia.org/wiki/Lattice_%28order%29#Lattices_as_algebraic_structures) algebraic definition. Given two lattices $(L,\vee_L,\wedge_L)$ and $(M,\vee_M,\wedge_M)$, a **lattice homomorphism** from $L$ to $M$ is a function $f:L\to M$ such that for all $a,b\in L$:
$f(a\vee_L b)=f(a)\vee_M f(b)$, and
$f(a\wedge_L b)=f(a)\wedge_M f(b)$.

Thus $f$ is a [homomorphism](https://en.wikipedia.org/wiki/Homomorphism "Homomorphism") of the two underlying [semilattices](https://en.wikipedia.org/wiki/Semilattice "Semilattice"). When lattices with more structure are considered, the morphisms should "respect" the extra structure, too. In particular, a **bounded-lattice homomorphism** (usually called just "lattice homomorphism") $f$ between two bounded lattices $L$ and $M$ should also have the following property:
$f(0_L)=0_M$, and
$f(1_L)=1_M$.

In the order-theoretic formulation, these conditions just state that a homomorphism of lattices is a function preserving binary meets and joins. For bounded lattices, preservation of least and greatest elements is just preservation of the join and meet of the empty set.

Any homomorphism of lattices is necessarily [monotone](https://en.wikipedia.org/wiki/Monotone_function "Monotone function") with respect to the associated ordering relation; see Limit preserving function. The converse is not true: monotonicity by no means implies the required preservation of meets and joins (see Pic. 9), although an [order-preserving](https://en.wikipedia.org/wiki/Monotonic_function "Monotonic function") [bijection](https://en.wikipedia.org/wiki/Bijection "Bijection") is a homomorphism if its [inverse](https://en.wikipedia.org/wiki/Inverse_function "Inverse function") is also order-preserving.

Given the standard definition of [isomorphisms](https://en.wikipedia.org/wiki/Isomorphism "Isomorphism") as invertible morphisms, a *lattice isomorphism* is just a [bijective](https://en.wikipedia.org/wiki/Bijective "Bijective") lattice homomorphism. Similarly, a *lattice endomorphism* is a lattice homomorphism from a lattice to itself, and a *lattice automorphism* is a bijective lattice endomorphism. Lattices and their homomorphisms form a [category](https://en.wikipedia.org/wiki/Category_theory "Category theory").

Let $\mathbb{L}$ and $\mathbb{L}'$ be two lattices with **0** and **1**. A homomorphism from $\mathbb{L}$ to $\mathbb{L}'$ is called **0**,**1**-*separating* [if and only if](https://en.wikipedia.org/wiki/If_and_only_if "If and only if")
$f^{-1}\{f(0)\}=\{0\}$
($f$ separates **0**) and
$f^{-1}\{f(1)\}=\{1\}$
($f$ separates **1**).


### Properties of Lattice
↗ [Lattice (Order Theory)](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)



## Ref
