# First Order Theory (FOT) & Satisfiability Modulo Theories (SMT)

[TOC]



## Res
### Related Topics
↗ [SMT Solving & Algorithms](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)


### Learning Resources
https://dl.acm.org/doi/pdf/10.1145/1995376.1995394
Leonardo de Moura and Nikolaj Bjorner. Satisfiability Modulo Theories: Introduction and Applications. Communications of the ACM, vol. 54, no. 9, 2011.
gentle introduction

Clark W. Barrett, Cesare Tinelli. Satisfiability Modulo Theories. Handbook of Model Checking 2018: 305-343.
terminology, more detail


### Other Resources



## Intro
> [!quote] GPT 6.0 Astra
> ↗ [Classical Logic (Standard Formal Logic)](../Classical%20Logic%20(Standard%20Formal%20Logic).md)
> 
> https://chatgpt.com/share/6abfada4-0500-83ec-a068-c4896dd9161d
> https://chatgpt.com/share/6abfadb2-47f4-83ec-8b4a-27d20510d311
> 
> ![](../../../../../../Assets/Pics/ChatGPT%20Image%20Oct%202,%202026,%2008_51_24%20PM.png)

A first-order theory T consists of
- A first-order signature Σ (set of function and relation symbols and their arities)
- A set of axioms A, which is a set of Σ-sentences (i.e., closed FOL formulas containing only function and relation symbols that are in Σ)
Function and relation symbols in Σ have no meaning by themselves, the set A of axioms gives their meaning (axioms are inference rules without premises. axioms gives language semantics meaning these inferences rules limit the truth values of the interpretation.). We say that A axiomatizes T

> [!Example] First-Order Theory: Example
> The theory of partial orders (over the signature (∅; ≤/2,= /2)) has three axioms:
> - Reflexivity: ∀x.x ≤x
> - Transitivity: ∀x.∀y.∀z.(x ≤y ∧y ≤z) →x ≤z
> - Anti-symmetry: ∀x.∀y.(x ≤y ∧y ≤x) →x = y


### Satisfiability Modulo a Theory
Recall: first-order theory $T$ is defined by:
- **Signature $\Sigma_T$**
  - set of constant, function, and predicate symbols
- **Set of $T$-Models**
  - models that fix the interpretation of symbols of $\Sigma_T$, i.e., $\Sigma_T$-structures
  - alternately, can use Axioms $A_T$ to provide meaning to symbols
A formula $F$ is **T-satisfiable (satisfiable modulo T)** iff
$M,\rho \models F$ for some T-model $M$ and some valuation $\rho$.

A formula $F$ is **T-valid (valid modulo T)** iff
$M,\rho \models F$ for all T-models $M$ and all valuations $\rho$.

$\rho$: interpretation for variables only

Theory $T$ is **decidable** if validity modulo $T$ is decidable for every $\Sigma_T$-formula $F$.
There is an algorithm that always terminates with "yes" if $F$ is $T$-valid, and "no" if $F$ is $T$-invalid.


### Fragment of a Theory
*Fragment of a theory* $T$ is a syntactically restricted subset of formulas of the theory
- We restrict only the logical symbols

> [!Example]
> - *Quantifier-free fragment* (QFF) of theory $T$ is the set of formulas without quantifiers
> - *Quantifier-free conjunctive fragment* of theory $T$ is the set of formulas without quantifiers and disjunction

Fragments are useful
- can be decidable, even if the full theory isn't
- can have a decision procedure of lower complexity than for full theory



## First Order Theories & Theory Solvers
> [!links]
> ↗ [Z3 Theorem Prover](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md)


### Theory of Equality $T_E$

> [!Example] Example: Theory solver for $QFF \ T_{=}$
> -  In 1954, Ackermann showed that the QFF of the theory of equality and uninterpreted functions is decidable.
> - In 1976, Nelson and Oppen implemented an O(n2) algorithm based on a **congruence closure** computation.
> 	- ↗ [Number Sets & Field Construction (Completion) and Extension](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension.md) "closure"
> - Modern implementations are congruence closure computation based on the **union-find data structure** (_data structures again!)_
> 	- Efficient: O(_n_ log _n_)


### Theory of Bitvectors $T_{BV}$


### Theories for Arithmetic
#### Linear Arithmetic
- $\Sigma = \{\text{constants}, +, -, \text{multiplication by constants}, =, <, \leq\}$
  - Linear Real/Rational Arithmetic (LRA): interpreted over $\mathbb{R}/\mathbb{Q}$
  - Linear Integer Arithmetic (LIA): interpreted over $\mathbb{Z}$

> [!Example] Example: Quantifier-free Conjunctive fragment and its solver
> - Formula is a conjunction of linear constraints of the form $ax + by + cz \ldots \leq d$ where $a,b,c,d$ are constants
> - **Linear Programming (LP) solvers** can check feasibility of this system of inequalities, i.e., whether any solution exists for $x,y,z$ in $\mathbb{R}$A
> 	- e.g., general simplex method: a theory solver for LRA
> - **Integer Linear Programming (ILP)** solvers can find integer solutions
> 	- ILP is NP-complete
> 	- Relaxation methods (using cutting planes), Omega test


### Theory of Integers $T_{ℤ}$


### Theory of Reals $T_ℝ$ and Theory of Rationals $T_ℚ$


### Theory of Arrays $T_A$



## Satisfiability Modulo Theories (SMT) Problem
> [!Links]
> ↗ [SMT Solving & Algorithms](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)
> ![](../../../../../../Assets/Pics/Screenshot%202026-10-08%20at%2022.23.38.png)
> ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)

![](../../../../../../Assets/Pics/Screenshot%202026-10-17%20at%2016.26.36.png)
<small>The Basic SMT Problem</small>

> 🔗 https://en.wikipedia.org/wiki/Satisfiability_modulo_theories

In computer science and mathematical logic, **satisfiability modulo theories (SMT)** is the problem of determining whether a mathematical formula is satisfiable. ==It generalizes the **Boolean satisfiability problem (SAT)** to more complex formulas involving real numbers, integers, and/or various data structures such as lists, arrays, bit vectors, and strings.== The name is derived from the fact that these expressions are interpreted within ("modulo") a certain formal theory in first-order logic with equality (often disallowing quantifiers). SMT solvers are tools that aim to solve the SMT problem for a practical subset of inputs. SMT solvers such as Z3 and cvc5 have been used as a building block for a wide range of applications across computer science, including in automated theorem proving, program analysis, program verification, and software testing.

Since Boolean satisfiability is already **NP-complete**, the SMT problem is typically **NP-hard**, and for many theories it is undecidable. ==Researchers study which theories or subsets of theories lead to a decidable SMT problem and the computational complexity of decidable cases.== The resulting decision procedures are often implemented directly in SMT solvers; see, for instance, the decidability of [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic). SMT can be thought of as a constraint satisfaction problem and thus a certain formalized approach to constraint programming.

> **Relationship to Automated Theorem Proving**
> #ATP #SMT
> 
> There is substantial overlap between SMT solving and automated theorem proving (ATP). Generally, automated theorem provers focus on supporting full first-order logic with quantifiers, whereas SMT solvers focus more on supporting various theories (interpreted predicate symbols). ATPs excel at problems with lots of quantifiers, whereas SMT solvers do well on large problems without quantifiers.[1] The line is blurry enough that some ATPs participate in SMT-COMP, while some SMT solvers participate in CASC.



## Ref
