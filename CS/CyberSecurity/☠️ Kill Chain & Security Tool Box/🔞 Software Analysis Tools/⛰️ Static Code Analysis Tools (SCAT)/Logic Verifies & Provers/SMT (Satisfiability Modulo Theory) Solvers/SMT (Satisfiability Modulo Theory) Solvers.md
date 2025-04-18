# SMT (Satisfiability Modulo Theory) Solvers

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Satisfiability_modulo_theories

In computer science and mathematical logic, **satisfiability modulo theories (SMT)** is the problem of determining whether a mathematical formula is satisfiable. It generalizes the **Boolean satisfiability problem (SAT)** to more complex formulas involving real numbers, integers, and/or various data structures such as lists, arrays, bit vectors, and strings. The name is derived from the fact that these expressions are interpreted within ("modulo") a certain formal theory in first-order logic with equality (often disallowing quantifiers). SMT solvers are tools that aim to solve the SMT problem for a practical subset of inputs. SMT solvers such as Z3 and cvc5 have been used as a building block for a wide range of applications across computer science, including in automated theorem proving, program analysis, program verification, and software testing.

Since Boolean satisfiability is already **NP-complete**, the SMT problem is typically **NP-hard**, and for many theories it is undecidable. Researchers study which theories or subsets of theories lead to a decidable SMT problem and the computational complexity of decidable cases. The resulting decision procedures are often implemented directly in SMT solvers; see, for instance, the decidability of Presburger arithmetic. SMT can be thought of as a constraint satisfaction problem and thus a certain formalized approach to constraint programming.

> **Relationship to Automated Theorem Proving**
> There is substantial overlap between SMT solving and automated theorem proving (ATP). Generally, automated theorem provers focus on supporting full first-order logic with quantifiers, whereas SMT solvers focus more on supporting various theories (interpreted predicate symbols). ATPs excel at problems with lots of quantifiers, whereas SMT solvers do well on large problems without quantifiers.[1] The line is blurry enough that some ATPs participate in SMT-COMP, while some SMT solvers participate in CASC


### SMT Solver Applications
1. Verification
2. Symbolic-execution based analysis and testing
3. Interactive theorem proving



## List of SMT Solvers
> 🔗 https://en.wikipedia.org/wiki/Satisfiability_modulo_theories#Solvers



## Ref
[🤔 Understanding SMT solvers: An Introduction to Z3]: https://de-engineer.github.io/SMT-Solvers/
This post was an overview of SMT solvers with the practical example of a CTF challenge and we also touched a bit on their limitations. I’m not an expert on the topic, I tried to cover all the introductory knowledge that I could put in without increasing the complexity of the blog. There is indeed far more to learn about and you can do so by checking all the links in the resources section.
- [Symbolic Execution Lecture from MIT](https://www.youtube.com/watch?v=yRVZPvHYHzw)
- [Symbolic Execution with Triton Engine](https://pwn.umasscybersec.org/lectures/index.html)
- [HexRays CTF solution with Z3](https://www.youtube.com/watch?v=kZd1Hi0ZBYc)
- [OST2 Course on Symbolic Analysis (teaches angr)](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2+RE3201_symexec+2021_V1/course/)
- [Papers by Z3 team](https://z3prover.github.io/papers/)
- [The Path Explosion Problem in Symbolic Execution - Paper](https://studenttheses.uu.nl/bitstream/handle/20.500.12932/35856/thesis.pdf?sequence=1&isAllowed=y)
