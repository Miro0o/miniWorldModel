# First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑

[TOC]



## Res
### Related Topics
↗ [Set Theory & Axiomatic Set Theory](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)
- ↗ [Natural Number & Peano Axioms](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Number%20Sets%20&%20Field%20Construction%20%28Completion%29%20and%20Extension/Natural%20Number%20&%20Peano%20Axioms.md)
- ↗ [Relation & Relation Theory](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Relation%20&%20Relation%20Theory.md)
- ↗ [Set Mapping & Function](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)


### Learning Resources


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



## Syntax
### Quantification of (Propositional) Logic
![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2016.44.39.png)
<small>《离散数学》四川大学计算机学院</small>
#### Existential Quantification & Universal Quantification
![Screenshot 2023-01-02 at 6.10.37 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.10.37%20PM.png)
<small>《离散数学》四川大学计算机学院</small>
#### Free Variable & Bound Variable

#### Substitution
**FOL Quantifier Scopes: Safe (Capture-Avoiding) Substitution**
Example:
$\underbrace{(\forall x.\ \overbrace{P(\underbrace{x}_{\text{bound}},\underbrace{y}_{\text{free}})}^{\text{scope of }\forall x})}_{\vphantom{X}} \to Q(f(\underbrace{y}_{\text{free}}),\underbrace{x}_{\text{free}})$

Substitution:
$\sigma : \{x \mapsto g(x), y \mapsto f(x), Q(f(y),x) \mapsto H(x,y)\}$
1. Rename bound variable using fresh variable $z$:
   $(\forall z.P(z,y)) \to Q(f(y),x)$
2. Perform (simultaneous) substitution:
   $(\forall z.P(z,f(x))) \to H(x,y)$

> **Important:** No free variable becomes bound (i.e., captured) during substitution.


**Formula substitution:**
Let $\sigma$ be the substitution $\{F_1 \mapsto G_1, \ldots, F_n \mapsto G_n\}$
such that $F_i \equiv G_i$ for $1 \leq i \leq n$.
If $F\sigma$ is a safe substitution, then $F \equiv F\sigma$.


### Predicate Logic Equivalent & Normal Form
![Screenshot 2023-01-02 at 6.04.59 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.04.59%20PM.png)
<small>《离散数学》四川大学计算机学院</small>

![Screenshot 2023-01-02 at 6.05.32 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.05.32%20PM.png)
<small>《离散数学》四川大学计算机学院</small>

#### Negation Normal Form (NNF)

#### Prenex Normal Form (PNF)

#### Skolem Norm
![Screenshot 2023-01-02 at 6.06.09 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.06.09%20PM.png)
<small>《离散数学》四川大学计算机学院</small>



## Semantics
> [!quote] GPT 6.0
> ↗ [Classical Logic (Standard Formal Logic)](../Classical%20Logic%20%28Standard%20Formal%20Logic%29.md)
> 
> ![](../../../../../../Assets/Pics/ChatGPT%20Image%20Oct%202,%202026,%2008_51_24%20PM.png)


As with PL, semantics of a formula is given by an interpretation.

An **interpretation $I : (D_I, \alpha_I)$** consists of:
- **Domain $D_I$:** a *non-empty* set of values or objects
	- cardinality $|D_I|$ may be finite (e.g., 52 cards), countably infinite (e.g., integers), or uncountably infinite (e.g., reals)
- **Assignment $\alpha_I$**
	- each variable $x$ assigned a value $x_I \in D_I$
	- each n-ary function $f$ assigned a function value $f_I : D_I^n \to D_I$
	  (in particular, each constant $a$ is assigned a value $a_I \in D_I$)
	- each n-ary predicate $p$ assigned a function that maps to Booleans
	  $p_I : D_I^n \to \{\underline{\text{true}}, \underline{\text{false}}\}$
	  (in particular, each propositional variable $P$ is assigned a truth value $\underline{\text{true}}$ or $\underline{\text{false}}$)


---
Let $x$ be a variable. An **x-variant of interpretation** $I$ is an interpretation $J : (D_J, \alpha_J)$ such that:
- $D_I = D_J$
- $\alpha_I[y] = \alpha_J[y]$ for all symbols $y$ that are not $x$

That is, $I$ and $J$ agree on everything except possibly $x$

Let $I \triangleleft \{x \mapsto v\}$ be the x-variant of $I$ in which $\alpha_{I \triangleleft \{x \mapsto v\}} = v$ for some $v \in D_I$.
Then we have that
- $I \models \forall x.F$ iff **for all** $v \in D_I$, $I \triangleleft \{x \mapsto v\} \models F$
- $I \models \exists x.F$ iff **there exists** $v \in D_I$ such that $I \triangleleft \{x \mapsto v\} \models F$


---
**Structure**
Let $\Sigma = \langle F, R, ar \rangle$ be a first-order signature.
A $\Sigma$-structure $M$ consists of:
- a *non-empty* set $U^M$ (the *domain* or *universe* of $M$)
- a function $f^M : \underbrace{U^M \times \cdots \times U^M}_{ar(f)\text{ times}} \to U^M$
  for each function symbol $f \in F$

- a relation $r^M \subseteq \underbrace{U^M \times \cdots \times U^M}_{ar(r)\text{ times}}$
  for each relation symbol $r \in R$

**Structure Example:**
The signature for linear integer arithmetic $\Sigma_{LIA}$ is $(+/2, -/1, 0/0, 1/0; </2, =/2)$
The *standard model* of linear integer arithmetic is the following structure $\mathbb{Z}$ over $\Sigma_{LIA}$:
- $U^M$ is the set of all integers
- $+^M$ is integer addition
- $-^M$ is negation
- $0^M$ is zero
- $1^M$ is one
- $<^M$ is the less-than relation
- $=^M$ is the equality relation
Note that the standard model is *not* the only interpretation:
- $+^M$ could instead be integer multiplication
- $0^M$ could instead be thirteen
- $<^M$ could instead be the divisibility relation
- $U^M$ could instead be the set of real numbers
- etc.



## Reasoning in Frist-Order Logic
> [!links]
> ↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29.md)


### Formal Deduction in Logics
↗ [Logic And Mechanized (Formal) Reasoning /Formalized Deduction](../../../Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29.md#Formalized%20Deduction)


### Proof Systems & Inference Rules
![Screenshot 2023-01-02 at 6.11.02 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.11.02%20PM.png)
<small>《离散数学》四川大学计算机学院</small>


Inference rules provide a means to reason over statements (e.g., formulas) in a formal language (e.g., FOL): $$\frac{\text{premises}}{\text{conclusions}}$$
- premises are 0 or more statements
- conclusion is a single formula
- an axiom is an inference rule with an empty set of premises

#### Derivations
A *derivation* is comprised of a number of inference steps, e.g.:
$\dfrac{\dfrac{\neg\neg P}{P} \qquad \dfrac{\neg R \lor Q}{Q}}{P \land Q}$

This derivation is not *complete* because it has *open branches*:
- no derivation of $\neg\neg P$ nor of $\neg R \lor Q$

We can *assume* that they hold and use this assumption using the following rules:
$\overline{[P]} \qquad \dfrac{[P]}{P}$
##### Assumptions & Axiom
**Assumptions**
We can then complete the derivation:

$\dfrac{\dfrac{\dfrac{[\neg\neg P]}{\neg\neg P}}{P} \qquad \dfrac{\dfrac{[\neg R \lor Q]}{\neg R \lor Q}}{Q}}{P \land Q}$

Note: we omit the horizontal line for axioms

Our derivation is now complete!


**Axiom**
An axiom is an inference rule with no premises $\dfrac{\ }{P}$
Can use axioms determine the denotation (meaning) of non-logical symbols (constants, functions, predicates)

Axioms denote tautologies in a given *theory*, e.g.,
$\forall x,y.(x+y)=(y+x)$
$\forall x.\mathrm{even}(x)\lor\mathrm{odd}(x)$
$\forall x.\mathrm{prime}(x)\leftrightarrow((x>1)\land\neg\exists i,j.(x=i\times j)\land(i>1)\land(j>1))$

#### Derivability Judgment
We write $P \vdash Q$ if $Q$ can be derived from premise $P$.

As can be be seen below, $\neg\neg P \land \neg R \land Q \vdash P \land Q$:

$\dfrac{\dfrac{\dfrac{\dfrac{[\neg\neg P \land \neg R \land Q]}{\neg\neg P \land \neg R \land Q}}{\neg\neg P}}{P} \qquad \dfrac{\dfrac{\dfrac{[\neg\neg P \land \neg R \land Q]}{\neg\neg P \land \neg R \land Q}}{\neg R \lor Q}}{Q}}{P \land Q}$

"If we assume $\neg\neg P \land \neg R \lor Q$ holds, then we can prove $P \land Q$."
#### (Safe) Substitution
==We use $P[t/x]$ to denote the safe substitution $P\{x \mapsto t\}$.== The following inference rules are sound:

$\dfrac{\forall x.P}{P[t/x]}$ (universal instantiation)

$\dfrac{P[c/x]}{\exists x.P}$ (existential generalization)


Example 1: $\dfrac{\forall x.\mathrm{even}(x)\lor\mathrm{odd}(x)}{\mathrm{even}(1)\lor\mathrm{odd}(1)}$

Example 2: $\dfrac{\forall x.\exists y.x=y}{\exists y.x=y[y+1/x]}$ i.e., $\dfrac{\forall x.\exists y.x=y}{\exists z.y+1=z}$

NB: that this does **not** result in the following! $\dfrac{\forall x.\exists y.x=y}{\exists y.y+1=y}$
#### Proof Systems and Proof Systems about Proof Systems
There are different kinds of proof systems for reasoning about FOL formulas and meta-level reasoning
- Reasoning about FOL formulas, as seen in natural deduction systems, e.g., $\dfrac{P \to Q \qquad P}{Q}$
- Reasoning about derivability, e.g., $\dfrac{P \vdash Q \qquad P \vdash \neg Q}{\vdash \neg P}, \dfrac{P \vdash Q}{\vdash P \to Q}, \dfrac{\vdash P \lor Q \qquad P \vdash R \qquad Q \vdash R}{\vdash R}$
- Semantic reasoning, e.g., $\dfrac{I \models \neg F}{I \not\models F}, \dfrac{I \not\models \neg F}{I \models F}, \dfrac{I \models F \land G}{I \models F}, \dfrac{I \models F \land G}{I \models G}$ etc.



## First-Order Theory & SMT
↗ [First Order Theory (FOT) & Satisfiability Modulo Theories (SMT)](First%20Order%20Theory%20%28FOT%29%20&%20Satisfiability%20Modulo%20Theories%20%28SMT%29.md)



## Properties of First-Order Logic
### Soundness & Completeness
A proof method or system is sound if every formula that can be proven true is valid
- e.g., a proof system for FOL is sound if for all valid $F$ , $⊢F$
- e.g., the semantic argument proof method is sound
	- method: assume $I ̸⊨F$ for some $I$ , and derive contradiction $I ⊨⊥$in all branches
	- if every branch of a semantic argument proof reaches $I ⊨⊥$, then F is valid

A proof method or system is complete if every valid formula has a proof
- e.g., a proof system for FOL is sound if $⊢F$ implies that $F$ is valid
- e.g., the semantic argument proof method is complete
	- each valid formula F has a semantic argument proof in which every branch reaches $I⊨⊥$

NB: there are different proof systems for FOL that are both sound and complete!
$$\frac{P ⊢Q →R}{P ⊢¬Q ∨R} \text{vs.} \frac{P ⊢Q →R P ⊢Q}{P ⊢R}$$


### Decidability
FOL is undecidable (Turing & Church)
There exists no algorithm for deciding if a FOL formula F is valid, i.e., always halt and say “yes” if F is valid or say “no” if F is invalid

FOL is semi-decidable
There is a procedure that always halts and says “yes” if F is valid, but may not halt if F is invalid


### Coherence /Consistence



## Ref
[你好，类型（五）：Predicate logic]: https://thzt.github.io/2017/09/16/type-5/
