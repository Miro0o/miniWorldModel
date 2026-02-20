# Universal Algebra (泛代数)

[TOC]



## Res
### Related Topics



## Intro
> 🔗 [Universal algebra](https://en.wikipedia.org/wiki/Universal_algebra)

**Universal algebra** (sometimes called **general algebra**) is the field of [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") that studies [algebraic structures](https://en.wikipedia.org/wiki/Algebraic_structure "Algebraic structure") in general, not specific types of algebraic structures. For instance, rather than considering [groups](https://en.wikipedia.org/wiki/Group_\(mathematics\) "Group (mathematics)") or [rings](https://en.wikipedia.org/wiki/Ring_\(mathematics\) "Ring (mathematics)") as the object of study—this is the subject of [group theory](https://en.wikipedia.org/wiki/Group_theory "Group theory") and [ring theory](https://en.wikipedia.org/wiki/Ring_theory "Ring theory")— in universal algebra, the object of study is the possible types of algebraic structures and their relationships.


### Basic Idea
> 🔗 https://en.wikipedia.org/wiki/Universal_algebra#Basic_idea

In universal algebra, an **algebra** (or [algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure "Algebraic structure")) is a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") _A_ together with a collection of operations on _A_.
#### Arity
> 🔗 https://en.wikipedia.org/wiki/Universal_algebra#Arity

An **_n_-[ary](https://en.wikipedia.org/wiki/Arity "Arity") [operation](https://en.wikipedia.org/wiki/Operation_\(mathematics\) "Operation (mathematics)")** on _A_ is a [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") that takes _n_ elements of _A_ and returns a single element of _A_. Thus, a 0-ary operation (or _nullary operation_) can be represented simply as an element of _A_, or a _[constant](https://en.wikipedia.org/wiki/Constant_\(mathematics\) "Constant (mathematics)")_, often denoted by a letter like _a_. A 1-ary operation (or _[unary operation](https://en.wikipedia.org/wiki/Unary_operation "Unary operation")_) is simply a function from _A_ to _A_, often denoted by a symbol placed in front of its argument, like $~x$. A 2-ary operation (or _[binary operation](https://en.wikipedia.org/wiki/Binary_operation "Binary operation")_) is often denoted by a symbol placed between its arguments (also called [infix notation](https://en.wikipedia.org/wiki/Infix_notation "Infix notation")), like $x∗y$. Operations of higher or unspecified _[arity](https://en.wikipedia.org/wiki/Arity "Arity")_ are usually denoted by function symbols, with the arguments placed in parentheses and separated by commas, like $f(x,y,z)$ or $f(x1,...,xn)$. One way of talking about an algebra, then, is by referring to it as an [algebra of a certain type](https://en.wikipedia.org/wiki/Outline_of_algebraic_structures#Types_of_algebraic_structures "Outline of algebraic structures") $Ω$, where $Ω$ is an ordered sequence of natural numbers representing the arity of the operations of the algebra. However, some researchers also allow [infinitary](https://en.wikipedia.org/wiki/Infinitary "Infinitary") operations, such as $\textstyle \bigwedge _{\alpha \in J}x_{\alpha }$ where _$J$_ is an infinite [index set](https://en.wikipedia.org/wiki/Index_set "Index set"), which is an operation in the algebraic theory of [complete lattices](https://en.wikipedia.org/wiki/Complete_lattice "Complete lattice").

> 🔗 https://en.wikipedia.org/wiki/Arity

#### Equations
After the operations have been specified, the nature of the algebra is further defined by [axioms](https://en.wikipedia.org/wiki/Axiom "Axiom"), which in universal algebra often take the form of [identities](https://en.wikipedia.org/wiki/Identity_\(mathematics\)#Logic_and_universal_algebra "Identity (mathematics)"), or **equational laws.** An example is the [associative](https://en.wikipedia.org/wiki/Associative "Associative") axiom for a binary operation, which is given by the equation $x ∗ (y ∗ z) = (x ∗ y) ∗ z$. The axiom is intended to hold for all elements _x_, _y_, and _z_ of the set _A_.


### Varieties & Equational Class
> 🔗 https://en.wikipedia.org/wiki/Universal_algebra#Varieties

A collection of algebraic structures defined by identities is called a [variety](https://en.wikipedia.org/wiki/Variety_\(universal_algebra\) "Variety (universal algebra)") or **equational class**.

Restricting one's study to varieties rules out:
- [quantification](https://en.wikipedia.org/wiki/Quantification_\(logic\) "Quantification (logic)"), including [universal quantification](https://en.wikipedia.org/wiki/Universal_quantification "Universal quantification") (∀) except before an equation, and [existential quantification](https://en.wikipedia.org/wiki/Existential_quantification "Existential quantification") (∃)
- [logical connectives](https://en.wikipedia.org/wiki/Logical_connective "Logical connective") other than [conjunction](https://en.wikipedia.org/wiki/Logical_conjunction "Logical conjunction") (∧)
- [relations](https://en.wikipedia.org/wiki/Finitary_relation "Finitary relation") other than equality, in particular [inequalities](https://en.wikipedia.org/wiki/Inequality_\(mathematics\) "Inequality (mathematics)"), both _a_ ≠ _b_ and [order relations](https://en.wikipedia.org/wiki/Order_theory "Order theory")

The study of equational classes can be seen as a special branch of [model theory](https://en.wikipedia.org/wiki/Model_theory "Model theory"), typically dealing with structures having operations only (i.e. the [type](https://en.wikipedia.org/wiki/Signature_\(logic\) "Signature (logic)") can have symbols for functions but not for [relations](https://en.wikipedia.org/wiki/Finitary_relation "Finitary relation") other than equality), and in which the language used to talk about these structures uses equations only.

Not all [algebraic structures](https://en.wikipedia.org/wiki/Algebraic_structure "Algebraic structure") in a wider sense fall into this scope. For example, [ordered groups](https://en.wikipedia.org/wiki/Ordered_group "Ordered group") involve an ordering relation, so would not fall within this scope.

The class of [fields](https://en.wikipedia.org/wiki/Field_\(mathematics\) "Field (mathematics)") is not an equational class because there is no type (or "signature") in which all field laws can be written as equations (inverses of elements are defined for all _non-zero_ elements in a field, so inversion cannot be added to the type).

One advantage of this restriction is that the structures studied in universal algebra can be defined in any [category](https://en.wikipedia.org/wiki/Category_theory "Category theory") that has _finite [products](https://en.wikipedia.org/wiki/Product_\(category_theory\) "Product (category theory)")_. For example, a [topological group](https://en.wikipedia.org/wiki/Topological_group "Topological group") is just a group in the category of [topological spaces](https://en.wikipedia.org/wiki/Topological_space "Topological space").


> 🔗 https://en.wikipedia.org/wiki/Variety_(universal_algebra)


### Basic Constructions



### Motivation & Applications
> [!links]
> ↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)
> ↗ [Constraint Satisfaction Problems (CSPs)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Satisfaction%20Problems%20(CSPs).md)

In addition to its unifying approach, universal algebra also gives deep theorems and important examples and counterexamples. It provides a useful framework for those who intend to start the study of new classes of algebras. It can enable the use of methods invented for some particular classes of algebras to other classes of algebras, by recasting the methods in terms of universal algebra (if possible), and then interpreting these as applied to other classes. It has also provided conceptual clarification; as J.D.H. Smith puts it, _"What looks messy and complicated in a particular framework may turn out to be simple and obvious in the proper general one."_

In particular, universal algebra can be applied to the study of [monoids](https://en.wikipedia.org/wiki/Monoid "Monoid"), [rings](https://en.wikipedia.org/wiki/Ring_\(algebra\) "Ring (algebra)"), and [lattices](https://en.wikipedia.org/wiki/Lattice_\(order\) "Lattice (order)"). Before universal algebra came along, many theorems (most notably the [isomorphism theorems](https://en.wikipedia.org/wiki/Isomorphism_theorem "Isomorphism theorem")) were proved separately in all of these classes, but with universal algebra, they can be proven once and for all for every kind of algebraic system.

The 1956 paper by Higgins referenced below has been well followed up for its framework for a range of particular algebraic systems, while his 1963 paper is notable for its discussion of algebras with operations which are only partially defined, typical examples for this being categories and groupoids. This leads on to the subject of [higher-dimensional algebra](https://en.wikipedia.org/wiki/Higher-dimensional_algebra "Higher-dimensional algebra") which can be defined as the study of algebraic theories with partial operations whose domains are defined under geometric conditions. Notable examples of these are various forms of higher-dimensional categories and groupoids.



## Generalization
> [!links]
> ↗ [Category Theory (范畴论)](../🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)
> ↗ [Model Theory (模型论)](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Model%20Theory%20(模型论)/Model%20Theory%20(模型论).md)
> operad theory
> partial algebra

> 🔗 https://en.wikipedia.org/wiki/Universal_algebra#Generalizations



## Ref
