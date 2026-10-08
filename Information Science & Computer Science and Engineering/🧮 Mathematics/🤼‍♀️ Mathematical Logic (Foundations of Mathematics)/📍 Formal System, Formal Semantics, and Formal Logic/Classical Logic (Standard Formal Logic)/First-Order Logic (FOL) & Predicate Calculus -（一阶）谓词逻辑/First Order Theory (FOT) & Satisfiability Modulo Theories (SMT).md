# First Order Theory (FOT) & Satisfiability Modulo Theories (SMT)

[TOC]



## Res
### Related Topics
↗ [SMT Solving & Algorithms](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)


### Learning Resources
Leonardo de Moura and Nikolaj Bjorner. Satisfiability Modulo Theories: Introduction and Applications. Communications of the ACM, vol. 54, no. 9, 2011.
gentle introduction

Clark W. Barrett, Cesare Tinelli. Satisfiability Modulo Theories. Handbook of Model Checking 2018: 305-343.
terminology, more detail


### Other Resources



## Intro
> [!quote] GPT 6.0 Astra
> https://chatgpt.com/share/6abfada4-0500-83ec-a068-c4896dd9161d
> https://chatgpt.com/share/6abfadb2-47f4-83ec-8b4a-27d20510d311
> 
> ![](../../../../../../Assets/Pics/ChatGPT%20Image%20Oct%202,%202026,%2008_51_24%20PM.png)


### Satisfiability Modulo a Theory


### Fragment of a Theory



### First Order Theories
#### Theory of Equality $T_E$


#### Theory of Bitvectors $T_{BV}$


#### Theories for Arithmetic


#### Theory of Integers $T_{ℤ}$


#### Theory of Reals $T_ℝ$ and Theory of Rationals $T_ℚ$


#### Theory of Arrays $T_A$


### Theory Solvers



## Satisfiability Modulo Theories (SMT) Problem
> [!Links]
> ↗ [SMT Solving & Algorithms](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)
> ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)


> 🔗 https://en.wikipedia.org/wiki/Satisfiability_modulo_theories

In computer science and mathematical logic, **satisfiability modulo theories (SMT)** is the problem of determining whether a mathematical formula is satisfiable. ==It generalizes the **Boolean satisfiability problem (SAT)** to more complex formulas involving real numbers, integers, and/or various data structures such as lists, arrays, bit vectors, and strings.== The name is derived from the fact that these expressions are interpreted within ("modulo") a certain formal theory in first-order logic with equality (often disallowing quantifiers). SMT solvers are tools that aim to solve the SMT problem for a practical subset of inputs. SMT solvers such as Z3 and cvc5 have been used as a building block for a wide range of applications across computer science, including in automated theorem proving, program analysis, program verification, and software testing.

Since Boolean satisfiability is already **NP-complete**, the SMT problem is typically **NP-hard**, and for many theories it is undecidable. ==Researchers study which theories or subsets of theories lead to a decidable SMT problem and the computational complexity of decidable cases.== The resulting decision procedures are often implemented directly in SMT solvers; see, for instance, the decidability of [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic). SMT can be thought of as a constraint satisfaction problem and thus a certain formalized approach to constraint programming.

> **Relationship to Automated Theorem Proving**
> #ATP #SMT
> 
> There is substantial overlap between SMT solving and automated theorem proving (ATP). Generally, automated theorem provers focus on supporting full first-order logic with quantifiers, whereas SMT solvers focus more on supporting various theories (interpreted predicate symbols). ATPs excel at problems with lots of quantifiers, whereas SMT solvers do well on large problems without quantifiers.[1] The line is blurry enough that some ATPs participate in SMT-COMP, while some SMT solvers participate in CASC.



## Ref
