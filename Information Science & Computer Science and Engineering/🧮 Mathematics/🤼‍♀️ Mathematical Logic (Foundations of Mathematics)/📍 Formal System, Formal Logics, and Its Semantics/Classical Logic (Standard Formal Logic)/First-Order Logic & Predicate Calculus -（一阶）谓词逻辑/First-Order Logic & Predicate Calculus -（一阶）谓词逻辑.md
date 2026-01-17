# First-Order Logic & Predicate Calculus -（一阶）谓词逻辑

[TOC]



## Res
### Related Topics
↗ [Set Theory & Axiomatic Set Theory](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)
- ↗ [Natural Number & Peano Axioms](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension/Natural%20Number%20&%20Peano%20Axioms.md)
- ↗ [Relation & Order Theory](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)
- ↗ [Function & Mapping of Set](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)


### Other Resources



## Intro
> 📖 《离散数学》四川大学计算机学院

在上一章已经看到命题逻辑有一套完整的形式逻辑推理系统，但是仍有许多命题的推理仅靠命题逻辑是无法完成的。例如命题 “人都是要死的，苏格拉底是人，所以苏格拉底是要死的” 是形式逻辑上著名的苏格拉底命题，但是无法用命题逻辑来证明其正确性。因为按命题逻辑方式翻译的公式为 $P\land Q \to Q$，而这三个子命题之间本来就有内在联系不可能用彼此独立的简单的命题标识符来表示他们之间的深层逻辑关系。换句话说，这些子命题还有自身的逻辑结构，命题标识符不足以反映这种结构。

”人都是要死的，苏格拉底是人“， 尽管涉及 ”人“ 这个概念，但前者说的是全部的人，后者是指单个具体的人。**这种全体和个别的关系无法用命题逻辑的方法形式化地表示出来。** 此外， 在 1.1 节的例 中曾经说“$x+y<0$”不是命题，原因就在于对和没有指定具体的范围。如果在负实数（或正实数）范围里它就是一个命题，而在区间$[-1,1]$内，它就不是命题。这说明一个判断的成立与否还与所讨论对象客体 的存在范围紧密相关。

把一个逻辑判断中作为对象的客体和谓语分开并细化，确定客体所适用范围的表达方式，正是一阶谓词逻辑要解决的问题。

![](../../../../../../Assets/Pics/Screenshot%202025-08-04%20at%2000.38.30.png)
<small>《离散数学》四川大学计算机学院</small>


> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

The predicate logic is capable of **representing relational data**, about a finite or infinite universe (which might not be explicitly represented) and relations over the objects in the universe, as well as reasoning about complex statements about properties of relational data. This very much differs from what is (practically) possible in propositional logics.

Predicate logic has been used in research on the foundations of mathematics, for example for expressing basic concepts of arithmetic and set-theory. 

Theories of the semantics of natural languages have extensively used predicate logic and its various variants and extensions.

There are lots of applications of the predicate logic in computer science. As an example, much of database theory is expressible in logical terms, and there is a close connection between relational database languages such as SQL which are based on relational algebra, and the predicate logic. Relational database queries can be expressed in the predicate logic equally well (and sometimes far more intuitively) as in SQL.

Outside database theory, the basic concepts of the predicate logic, like quantification, are useful also in many types of high-level specification languages. The logic programming language Prolog is based on the predicate logic and the automated reasoning methods developed for it, especially the resolution rule for automated reasoning.

In addition to usual forms of logical reasoning, the need to support relational data has been recognized in other areas of computer science and artificial intelligence. Relational languages built on the predicate logic have been broadly adopted in areas such as relational machine learning [MR06, NMTG15, DRKNP16] and probabilistic reasoning [RD06].

> 🔗 https://en.wikipedia.org/wiki/First-order_logic

**First-order logic**, also called **predicate logic**, **predicate calculus**, or **quantificational logic**, is a collection of [formal systems](https://en.wikipedia.org/wiki/Formal_system "Formal system") used in [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics"), and [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"). First-order logic uses [quantified variables](https://en.wikipedia.org/wiki/Quantification_\(logic\) "Quantification (logic)") over non-logical objects, and allows the use of sentences that contain variables. Rather than propositions such as "all humans are mortal", in first-order logic one can have expressions in the form "for all _x_, if _x_ is a human, then _x_ is mortal", where "for all _x"_ is a quantifier, _x_ is a variable, and "... _is a human_" and "... _is mortal_" are predicates. This distinguishes it from [propositional logic](https://en.wikipedia.org/wiki/Propositional_logic "Propositional logic"), which does not use quantifiers or [relations](https://en.wikipedia.org/wiki/Finitary_relation "Finitary relation");  in this sense, propositional logic is the foundation of first-order logic.

A theory about a topic, such as [set theory](https://en.wikipedia.org/wiki/Set_theory "Set theory"), a theory for groups, or a formal theory of [arithmetic](https://en.wikipedia.org/wiki/Arithmetic "Arithmetic"), is usually a first-order logic together with a specified [domain of discourse](https://en.wikipedia.org/wiki/Domain_of_discourse "Domain of discourse") (over which the quantified variables range), finitely many functions from that domain to itself, finitely many [predicates](https://en.wikipedia.org/wiki/Predicate_\(mathematical_logic\) "Predicate (mathematical logic)") defined on that domain, and a set of axioms believed to hold about them. "Theory" is sometimes understood in a more formal sense as just a set of sentences in first-order logic.

The term "first-order" distinguishes first-order logic from [higher-order logic](https://en.wikipedia.org/wiki/Higher-order_logic "Higher-order logic"), in which there are predicates having predicates or functions as arguments, or in which quantification over predicates, functions, or both, are permitted.  In first-order theories, predicates are often associated with sets. In interpreted higher-order theories, predicates may be interpreted as sets of sets.

There are many [deductive systems](https://en.wikipedia.org/wiki/Deductive_system "Deductive system") for first-order logic which are both [sound](https://en.wikipedia.org/wiki/Soundness#Logical_systems "Soundness"), i.e. all provable statements are true in all models; and [complete](https://en.wikipedia.org/wiki/Completeness_\(logic\) "Completeness (logic)"), i.e. all statements which are true in all models are provable. Although the [logical consequence](https://en.wikipedia.org/wiki/Logical_consequence "Logical consequence") relation is only [semidecidable](https://en.wikipedia.org/wiki/Semidecidability "Semidecidability"), much progress has been made in [automated theorem proving](https://en.wikipedia.org/wiki/Automated_theorem_proving "Automated theorem proving") in first-order logic. First-order logic also satisfies several [metalogical](https://en.wikipedia.org/wiki/Metalogic "Metalogic") theorems that make it amenable to analysis in [proof theory](https://en.wikipedia.org/wiki/Proof_theory "Proof theory"), such as the [Löwenheim–Skolem theorem](https://en.wikipedia.org/wiki/L%C3%B6wenheim%E2%80%93Skolem_theorem "Löwenheim–Skolem theorem") and the [compactness theorem](https://en.wikipedia.org/wiki/Compactness_theorem "Compactness theorem").

First-order logic is the standard for the formalization of mathematics into [axioms](https://en.wikipedia.org/wiki/Axiomatic_system "Axiomatic system"), and is studied in the [foundations of mathematics](https://en.wikipedia.org/wiki/Foundations_of_mathematics "Foundations of mathematics"). [Peano arithmetic](https://en.wikipedia.org/wiki/Peano_arithmetic "Peano arithmetic") and [Zermelo–Fraenkel set theory](https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory "Zermelo–Fraenkel set theory") are axiomatizations of [number theory](https://en.wikipedia.org/wiki/Number_theory "Number theory") and set theory, respectively, into first-order logic. No first-order theory, however, has the strength to uniquely describe a structure with an infinite domain, such as the [natural numbers](https://en.wikipedia.org/wiki/Natural_number "Natural number") or the [real line](https://en.wikipedia.org/wiki/Real_line "Real line"). Axiom systems that do fully describe these two structures, i.e. [categorical](https://en.wikipedia.org/wiki/Categorical_theory "Categorical theory") axiom systems, can be obtained in stronger logics such as [second-order logic](https://en.wikipedia.org/wiki/Second-order_logic "Second-order logic").

The foundations of first-order logic were developed independently by [Gottlob Frege](https://en.wikipedia.org/wiki/Gottlob_Frege "Gottlob Frege") and [Charles Sanders Peirce](https://en.wikipedia.org/wiki/Charles_Sanders_Peirce "Charles Sanders Peirce"). For a history of first-order logic and how it came to dominate formal logic, see José Ferreirós (2001).


### Quantification of (Propositional) Logic
![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2016.44.39.png)
<small>《离散数学》四川大学计算机学院</small>
#### Existential Quantification & Universal Quantification
![Screenshot 2023-01-02 at 6.10.37 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.10.37%20PM.png)
<small>《离散数学》四川大学计算机学院</small>
#### Free Variable & Bound Variable


### Predicate Logic Formula & Valuation


### Predicate Logic Equivalent & Normal Form
![Screenshot 2023-01-02 at 6.04.59 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.04.59%20PM.png)
<small>《离散数学》四川大学计算机学院</small>

![Screenshot 2023-01-02 at 6.05.32 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.05.32%20PM.png)
<small>《离散数学》四川大学计算机学院</small>

![Screenshot 2023-01-02 at 6.06.09 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.06.09%20PM.png)
<small>《离散数学》四川大学计算机学院</small>


### Implication & Entailment of Predicate Logic



## Reasoning in Predicate Logic
> ↗ [Logic And Mechanized (Formal) Reasoning](../../../Logic%20And%20Mechanized%20(Formal)%20Reasoning.md)


### Formal Deduction in Logics
↗ [Logic And Mechanized (Formal) Reasoning /Formalized Deduction](../../../Logic%20And%20Mechanized%20(Formal)%20Reasoning.md#Formalized%20Deduction)


### Reasoning Rules in Predicate Logic
![Screenshot 2023-01-02 at 6.11.02 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.11.02%20PM.png)
<small>《离散数学》四川大学计算机学院</small>



## Ref
[你好，类型（五）：Predicate logic]: https://thzt.github.io/2017/09/16/type-5/
