# Number Sets & Field Construction (Completion) and Extension

[TOC]



## Res
### Related Topics
↗ [Algebra](../../../🧊%20Algebra/Algebra.md)
↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)

↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)
↗ [Elementary Theory of Numbers](../../../🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Elementary%20Theory%20of%20Numbers.md)



## Intro
### Closure & Closure Operator
> [!lnks]
> ↗ [Closure (CS & PL)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Features%20(?)/Closure%20(CS%20&%20PL).md)

> 🔗 https://en.wikipedia.org/wiki/Closure_(mathematics)

In mathematics, a [subset](https://en.wikipedia.org/wiki/Subset "Subset") of a larger [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") is **closed** under a given [operation](https://en.wikipedia.org/wiki/Operation_\(mathematics\) "Operation (mathematics)") on the larger set if performing that operation on members of the subset always produces a member of that subset. For example, the [natural numbers](https://en.wikipedia.org/wiki/Natural_number "Natural number") are closed under addition, but not under subtraction: 1 − 2 is not a natural number, although both 1 and 2 are.

Similarly, a subset is said to be closed under a _collection_ of operations if it is closed under each of the operations individually.

The **closure** of a subset is the result of a [closure operator](https://en.wikipedia.org/wiki/Closure_operator "Closure operator") applied to the subset. The _closure_ of a subset under some operations is the smallest superset that is closed under these operations. It is often called the _span_ (for example [linear span](https://en.wikipedia.org/wiki/Linear_span "Linear span")) or the _generated set_.
#### Definition
Let S be a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") equipped with one or several methods for producing elements of S from other elements of S. A subset X of S is said to be _closed_ under these methods if an input of purely elements of X always results in an element still in X. Sometimes, one may also say that X has the **closure property**.

The main property of closed sets, which results immediately from the definition, is that every [intersection](https://en.wikipedia.org/wiki/Set_intersection "Set intersection") of closed sets is a [closed set](https://en.wikipedia.org/wiki/Closed_set "Closed set"). It follows that for every subset Y of S, there is a smallest closed subset X of S such that $Y\subseteq X$ (it is the intersection of all closed subsets that contain Y). Depending on the context, X is called the _closure_ of Y or the set [generated](https://en.wikipedia.org/wiki/Generating_set "Generating set") or [spanned](https://en.wikipedia.org/wiki/Span_\(linear_algebra\) "Span (linear algebra)") by Y.

The concepts of closed sets and closure are often extended to any property of subsets that are stable under intersection; that is, every intersection of subsets that have the property has also the property. For example, in $\mathbb {C} ^{n}$, a _[Zariski-closed](https://en.wikipedia.org/wiki/Zariski-closed "Zariski-closed") set_, also known as an [algebraic set](https://en.wikipedia.org/wiki/Algebraic_set "Algebraic set"), is the set of the common zeros of a family of polynomials, and the [Zariski closure](https://en.wikipedia.org/wiki/Zariski_closure "Zariski closure") of a set V of points is the smallest algebraic set that contains V.
##### In algebraic structures
An [algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure "Algebraic structure") is a set equipped with [operations](https://en.wikipedia.org/wiki/Operation_\(mathematics\) "Operation (mathematics)") that satisfy some [axioms](https://en.wikipedia.org/wiki/Axioms "Axioms"). These axioms may be [identities](https://en.wikipedia.org/wiki/Identity_\(mathematics\) "Identity (mathematics)"). Some axioms may contain [existential quantifiers](https://en.wikipedia.org/wiki/Existential_quantifier "Existential quantifier") ∃;![{\displaystyle \exists ;}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2908b5cfb241652aacb13c0fb39bb60670b401a5) in this case it is worth to add some auxiliary operations in order that all axioms become identities or purely [universally quantified](https://en.wikipedia.org/wiki/Universally_quantified "Universally quantified") formulas. See [Algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure "Algebraic structure") for details. A set with a single [binary operation](https://en.wikipedia.org/wiki/Binary_operation "Binary operation") that is closed is called a [magma](https://en.wikipedia.org/wiki/Magma_\(algebra\) "Magma (algebra)").

In this context, given an algebraic structure S, a [substructure](https://en.wikipedia.org/wiki/Substructure_\(mathematics\) "Substructure (mathematics)") of S is a subset that is closed under all operations of S, including the auxiliary operations that are needed for avoiding existential quantifiers. A substructure is an algebraic structure of the same type as S. It follows that, in a specific example, when closeness is proved, there is no need to check the axioms for proving that a substructure is a structure of the same type.

Given a subset X of an algebraic structure S, the closure of X is the smallest substructure of S that is closed under all operations of S. In the context of algebraic structures, this closure is generally called the substructure _generated_ or _spanned_ by X, and one says that X is a [generating set](https://en.wikipedia.org/wiki/Generating_set "Generating set") of the substructure.

For example, a [group](https://en.wikipedia.org/wiki/Group_\(mathematics\) "Group (mathematics)") is a set with an [associative operation](https://en.wikipedia.org/wiki/Associative_operation "Associative operation"), often called _multiplication_, with an [identity element](https://en.wikipedia.org/wiki/Identity_element "Identity element"), such that every element has an [inverse element](https://en.wikipedia.org/wiki/Inverse_element "Inverse element"). Here, the auxiliary operations are the [nullary](https://en.wikipedia.org/wiki/Nullary "Nullary") operation that results in the identity element and the [unary operation](https://en.wikipedia.org/wiki/Unary_operation "Unary operation") of inversion. A subset of a group that is closed under multiplication and inversion is also closed under the nullary operation (that is, it contains the identity) if and only if it is non-empty. So, a non-empty subset of a group that is closed under multiplication and inversion is a group that is called a [subgroup](https://en.wikipedia.org/wiki/Subgroup "Subgroup"). The subgroup generated by a single element, that is, the closure of this element, is called a [cyclic group](https://en.wikipedia.org/wiki/Cyclic_group "Cyclic group").

In [linear algebra](https://en.wikipedia.org/wiki/Linear_algebra "Linear algebra"), the closure of a non-empty subset of a [vector space](https://en.wikipedia.org/wiki/Vector_space "Vector space") (under vector-space operations, that is, addition and [scalar multiplication](https://en.wikipedia.org/wiki/Scalar_multiplication "Scalar multiplication")) is the [linear span](https://en.wikipedia.org/wiki/Linear_span "Linear span") of this subset. It is a vector space by the preceding general result, and it can be proved easily that is the set of [linear combinations](https://en.wikipedia.org/wiki/Linear_combination "Linear combination") of elements of the subset.

Similar examples can be given for almost every algebraic structures, with, sometimes some specific terminology. For example, in a [commutative ring](https://en.wikipedia.org/wiki/Commutative_ring "Commutative ring"), the closure of a single element under [ideal](https://en.wikipedia.org/wiki/Ideal_\(ring_theory\) "Ideal (ring theory)") operations is called a [principal ideal](https://en.wikipedia.org/wiki/Principal_ideal "Principal ideal").
#### Examples
##### Binary Relation
> [!links]
> ↗ [Relation & Order Theory](../👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)

> 🔗 https://en.wikipedia.org/wiki/Closure_(mathematics)#Binary_relations
##### Other Examples
> 🔗 https://en.wikipedia.org/wiki/Closure_(mathematics)#Other_examples

- In [matroid](https://en.wikipedia.org/wiki/Matroid "Matroid") theory, the closure of _X_ is the largest superset of _X_ that has the same rank as _X_.
- The [transitive closure](https://en.wikipedia.org/wiki/Transitive_set#Transitive_closure "Transitive set") of a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)").
- The [algebraic closure](https://en.wikipedia.org/wiki/Algebraic_closure "Algebraic closure") of a [field](https://en.wikipedia.org/wiki/Field_\(algebra\) "Field (algebra)").
- The [integral closure](https://en.wikipedia.org/wiki/Integral_closure "Integral closure") of an [integral domain](https://en.wikipedia.org/wiki/Integral_domain "Integral domain") in a [field](https://en.wikipedia.org/wiki/Field_\(mathematics\) "Field (mathematics)") that contains it.
- The [radical of an ideal](https://en.wikipedia.org/wiki/Radical_of_an_ideal "Radical of an ideal") in a [commutative ring](https://en.wikipedia.org/wiki/Commutative_ring "Commutative ring").
- In [geometry](https://en.wikipedia.org/wiki/Geometry "Geometry"), the [convex hull](https://en.wikipedia.org/wiki/Convex_hull "Convex hull") of a set _S_ of points is the smallest [convex set](https://en.wikipedia.org/wiki/Convex_set "Convex set") of which _S_ is a [subset](https://en.wikipedia.org/wiki/Subset "Subset").
- In [formal languages](https://en.wikipedia.org/wiki/Formal_language "Formal language"), the [Kleene closure](https://en.wikipedia.org/wiki/Kleene_closure "Kleene closure") of a language can be described as the set of strings that can be made by concatenating zero or more strings from that language.
- In [group theory](https://en.wikipedia.org/wiki/Group_theory "Group theory"), the [conjugate closure](https://en.wikipedia.org/wiki/Conjugate_closure "Conjugate closure") or normal closure of a set of [group](https://en.wikipedia.org/wiki/Group_\(mathematics\) "Group (mathematics)") elements is the smallest [normal subgroup](https://en.wikipedia.org/wiki/Normal_subgroup "Normal subgroup") containing the set.
- In [mathematical analysis](https://en.wikipedia.org/wiki/Mathematical_analysis "Mathematical analysis") and in [probability theory](https://en.wikipedia.org/wiki/Probability_theory "Probability theory"), the closure of a collection of subsets of _X_ under [countably many](https://en.wikipedia.org/wiki/Countable "Countable") [set operations](https://en.wikipedia.org/wiki/Algebra_of_sets "Algebra of sets") is called the [σ-algebra](https://en.wikipedia.org/wiki/Sigma-algebra "Sigma-algebra") generated by the collection.



## Natural Number Set & Peano Axioms
> ↗ [Formal System, Formal Logics, and Its Semantics](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md) Gödel's Incompleteness Theorems

↗ [Natural Number & Peano Axioms](Natural%20Number%20&%20Peano%20Axioms.md)


### Cardinal Number & Cardinality



## Field Extension From Natural Number
> ↗ [Formal System, Formal Logics, and Its Semantics](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
> ↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)

![Screenshot 2025-10-07 at 18.56.35](../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2018.56.35.png)
<small>Tegmark, M. (1998). Is “the theory of everything” merely the ultimate ensemble theory?. Annals of Physics, 270(1), 1-51. <a>https://arxiv.org/abs/gr-qc/9704009</a></small>

![](../../../../../Assets/Pics/Pasted%20image%2020251007191312.png)
<small>A Map of Mathematical Structures for AI <br>
Posted on December 30, 2022 (<a>https://mentalmodels4life.net/2022/12/30/a-map-of-mathematical-structures/</a>) by Kee Siong Ng (<a>https://mentalmodels4life.net/author/keesiongng/</a>) <br>
Generally speaking, each arrow involves the addition of some new symbols and the axioms that provide their definitions and / or properties. Some boxes have multiple incoming arrows; these are systems constructed from the union of multiple sets of new symbols and axioms. Note also that the relationships represented by the arrows are, in general, transitive.</small>


### Rational Number & Irrational Number


### Real Number


### Complex Number



## Ref
