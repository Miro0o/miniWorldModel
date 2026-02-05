# SMT (Satisfiability Modulo Theory) Solvers

[TOC]



## Res
### Related Topics
↗ [Formal System, Formal Logics, and Its Semantics](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Complexity Theory & Computational Complexity](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
↗ [Computationally Hard Problems](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Algorithm%20Complexity/Computationally%20Hard%20Problems.md)

↗ [Symbolic Execution & Concolic Execution](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Symbolic%20Execution%20&%20Concolic%20Execution/Symbolic%20Execution%20&%20Concolic%20Execution.md)


### Other Resources
[Satisfiability modulo theories - Wikipedia](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories)
[SMT-LIB The Satisfiability Modulo Theories Library](https://smt-lib.org/)



## Intro: SMT (Satisfiability Modulo Theories)
> 🔗 https://en.wikipedia.org/wiki/Satisfiability_modulo_theories

In computer science and mathematical logic, **satisfiability modulo theories (SMT)** is the problem of determining whether a mathematical formula is satisfiable. ==It generalizes the **Boolean satisfiability problem (SAT)** to more complex formulas involving real numbers, integers, and/or various data structures such as lists, arrays, bit vectors, and strings.== The name is derived from the fact that these expressions are interpreted within ("modulo") a certain formal theory in first-order logic with equality (often disallowing quantifiers). SMT solvers are tools that aim to solve the SMT problem for a practical subset of inputs. SMT solvers such as Z3 and cvc5 have been used as a building block for a wide range of applications across computer science, including in automated theorem proving, program analysis, program verification, and software testing.

Since Boolean satisfiability is already **NP-complete**, the SMT problem is typically **NP-hard**, and for many theories it is undecidable. ==Researchers study which theories or subsets of theories lead to a decidable SMT problem and the computational complexity of decidable cases.== The resulting decision procedures are often implemented directly in SMT solvers; see, for instance, the decidability of [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic). SMT can be thought of as a constraint satisfaction problem and thus a certain formalized approach to constraint programming.

> **Relationship to Automated Theorem Proving**
> #ATP #SMT
> There is substantial overlap between SMT solving and automated theorem proving (ATP). Generally, automated theorem provers focus on supporting full first-order logic with quantifiers, whereas SMT solvers focus more on supporting various theories (interpreted predicate symbols). ATPs excel at problems with lots of quantifiers, whereas SMT solvers do well on large problems without quantifiers.[1] The line is blurry enough that some ATPs participate in SMT-COMP, while some SMT solvers participate in CASC.



## SMT Solvers
### SMT Solver Applications
1. Verification
2. Symbolic-execution based analysis and testing
3. Interactive theorem proving


### List of SMT Solvers
> 🔗 https://en.wikipedia.org/wiki/Satisfiability_modulo_theories#Solvers



## Ref
[🤔 understanding smt solvers: an introduction to z3]: https://de-engineer.github.io/smt-solvers/
this post was an overview of smt solvers with the practical example of a ctf challenge and we also touched a bit on their limitations. i’m not an expert on the topic, i tried to cover all the introductory knowledge that i could put in without increasing the complexity of the blog. there is indeed far more to learn about and you can do so by checking all the links in the resources section.
- [symbolic execution lecture from mit](https://www.youtube.com/watch?v=yrvzpvhyhzw)
- [symbolic execution with triton engine](https://pwn.umasscybersec.org/lectures/index.html)
- [hexrays ctf solution with z3](https://www.youtube.com/watch?v=kzd1hi0zbyc)
- [ost2 course on symbolic analysis (teaches angr)](https://p.ost2.fyi/courses/course-v1:opensecuritytraining2+re3201_symexec+2021_v1/course/)
- [papers by z3 team](https://z3prover.github.io/papers/)
- [the path explosion problem in symbolic execution - paper](https://studenttheses.uu.nl/bitstream/handle/20.500.12932/35856/thesis.pdf?sequence=1&isallowed=y)
