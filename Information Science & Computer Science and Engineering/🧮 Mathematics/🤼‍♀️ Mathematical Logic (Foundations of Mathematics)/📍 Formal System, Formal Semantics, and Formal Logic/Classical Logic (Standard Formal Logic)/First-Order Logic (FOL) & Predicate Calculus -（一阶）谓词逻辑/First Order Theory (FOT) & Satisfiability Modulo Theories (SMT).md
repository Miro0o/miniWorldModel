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


### SMT Applications
| 领域                          | 主要应用                                                                                                                                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Model Checking              | 有限/无限状态系统、Hybrid Systems、Abstraction Refinement、State Invariant Generation、Interpolation                                                                                                                   |
| Program Analysis            | Symbolic Execution、Program Verification、Separation Logic Verification、Termination / Nontermination、Loop Invariant Generation、Procedure Summaries、Race Analysis、Concurrency Error Detection                 |
| Software Synthesis          | Syntax-Guided Synthesis、Automated Program Repair、Reactive System Synthesis、Self-Stabilizing System Synthesis、Network Schedule Synthesis                                                                    |
| Type Checking               | Dependent Types、Semantic Subtyping、Type Error Localization                                                                                                                                                 |
| Security                    | Automated Exploit Generation、Protocol Debugging / Verification、Access Control Policy Analysis、Runtime Monitoring                                                                                           |
| Compilers                   | Compilation Validation、Arithmetic Computation Optimization                                                                                                                                                 |
| Machine Learning            | Neural Network Verification、Adversarial Example Generation                                                                                                                                                 |
| Interactive Theorem Proving | 增强证明系统中的自动化推理                                                                                                                                                                                              |
| Software Engineering        | System Model Consistency、Design Analysis、Test Generation、ATL Transformation Verification、Semantic Code Search、Requirements Prioritization、Metamodel Instance Generation、Web Service Behavioral Conformance |



## Ref
> [!summary] Lec 4.2 — First-Order Theories (FOT) & SMT
>
> - **1. First-Order Theory (FOT)**
>     - **Motivation**：FOL 的一般 validity 问题 undecidable；通过为特定数据结构（numbers、arrays、bitvectors、lists 等）规定语义，可以获得 decidable 或更高效的 reasoning procedures。
>     - **Theory $T$ 的定义**：
>         - Signature $\Sigma_T$：规定 constant、function、predicate symbols 及其 arity。
>         - Set of $T$-Models：规定哪些 $\Sigma_T$-structures 是允许的 models。
>         - 也可以通过 Axioms $A_T$ 来刻画允许的 models。
>     - **FOL vs FOT**：
>         - FOL：non-logical symbols 没有预先固定的语义。
>         - FOT：通过 theory 限制允许的 interpretations/models。
>         - Uninterpreted function：不规定具体运算含义，但在每个 model 中仍是一个确定的函数，必须满足 congruence。
>     - **Satisfaction / Validity Modulo Theory**：
>         - $T$-satisfiable：$\exists M\in Mod(T),\exists\rho:\ M,\rho\models F$。
>         - $T$-valid：$\forall M\in Mod(T),\forall\rho:\ M,\rho\models F$。
>         - $F$ is $T$-valid $\iff \neg F$ is $T$-unsatisfiable。
>     - **Decidability**：存在一个总能终止的 algorithm，判断任意 $\Sigma_T$-formula 是否 $T$-valid。
>
> - **2. Theory Fragments**
>     - Fragment：一个 theory 中 syntactically restricted 的公式子集。
>     - **Quantifier-Free Fragment (QFF)**：不包含 $\forall,\exists$。
>     - **QF Conjunctive Fragment**：不含 quantifiers 和 disjunctions，主要是 theory literals 的 conjunction。
>     - **核心关系**：
>         - Full theory undecidable $\not\Rightarrow$ QFF undecidable。
>         - Full theory decidable $\not\Rightarrow$ computationally efficient。
>         - 更受限制的 fragment 往往有更低的 complexity。
>         - QF conjunctive fragments 是 theory solvers 的重要处理对象。
>
> - **3. Theory of Equality / EUF ($T_E$)**
>     - Equality with Uninterpreted Functions：$=$ 具有标准相等语义；其他 functions/predicates 不预先规定具体含义。
>     - **Equality Axioms**：
>         - Reflexivity：$x=x$
>         - Symmetry：$x=y\Rightarrow y=x$
>         - Transitivity：$x=y\land y=z\Rightarrow x=z$
>         - Function congruence：$\bigwedge_i x_i=y_i\Rightarrow f(\vec{x})=f(\vec{y})$
>         - Predicate congruence：$\bigwedge_i x_i=y_i\Rightarrow (p(\vec{x})\leftrightarrow p(\vec{y}))$
>     - **Decidability**：
>         - Full EUF：undecidable。
>         - QF EUF：decidable。
>         - QF conjunctive EUF：可用 Congruence Closure 高效求解。
>     - **Congruence Closure + Union-Find**：
>         - 根据 equalities 合并 equivalence classes。
>         - 若 function symbol 相同且对应 arguments 等价，则合并 function applications。
>         - 重复直到没有新的 equivalences（closure）。
>         - 若某个 disequality 两侧最终属于同一 equivalence class，则 UNSAT。
>         - 讲义给出的高效实现复杂度：$O(n\log n)$。
>     - **UF Abstraction**：
>         - 可以把复杂 operation 抽象为 uninterpreted function，减少 reasoning cost。
>         - 适用于证明只依赖函数一致性/congruence 的场景。
>         - 若证明依赖运算的特殊性质（如 XOR），则不能仅依靠 EUF，需要更具体的 theory。
>
> - **4. Common First-Order Theories**
>     - **Bitvectors ($T_{BV}$)**：
>         - Fixed-width words；支持 arithmetic、bitwise、shift、comparison 等 operations。
>         - 适用于 machine integers 和 bit-level reasoning。
>         - Decidable；可通过 bit-flattening / bit-blasting 转换为 SAT。
>         - 相关 satisfiability problem：NP-complete。
>     - **Arithmetic Theories**：
>         - Peano Arithmetic ($T_{PA}$)：$\mathbb N$ 上的 $+,*,=$；full theory 和 QFF 都 undecidable。
>         - Presburger Arithmetic ($T_{\mathbb N}$)：$\mathbb N$ 上的 $+,=$；decidable。
>         - Linear Integer Arithmetic ($T_{\mathbb Z}$ / LIA)：$\mathbb Z$ 上的线性算术，允许 multiplication by constants；decidable。
>         - Linear Real/Rational Arithmetic (LRA)：$\mathbb R/\mathbb Q$ 上的线性算术；QF conjunctive feasibility 可高效求解。
>         - Real Arithmetic ($T_{\mathbb R}$)：允许 variable multiplication；decidable，但 complexity 很高。
>         - 核心区别：$3x$ 是 linear；$xy$、$x^2$ 是 nonlinear。
>         - Natural/Integer vs Real/Rational：domain 不同，decidability 和 complexity 也可能不同。
>     - **Arrays ($T_A$)**：
>         - $select(a,i)$：读取 array $a$ 的 index $i$。
>         - $store(a,i,v)$：返回在 index $i$ 写入 $v$ 后的 array。
>         - Read-over-write：
>             - $select(store(a,i,v),i)=v$
>             - $i\ne j\Rightarrow select(store(a,i,v),j)=select(a,j)$
>         - Array congruence：$i=j\Rightarrow select(a,i)=select(a,j)$。
>         - Full theory undecidable；QFF decidable。
>     - **Arrays with Extensionality**：
>         - $\forall i.\ select(a,i)=select(b,i)\Rightarrow a=b$。
>         - 区别：普通 array axioms 保证每个位置的读取行为；extensionality 进一步保证所有位置相同的 arrays 相等。
>         - 因此 $select(a,i)=v\Rightarrow store(a,i,v)=a$ 需要 extensionality。
>     - **Algebraic Data Types (ADT)**：
>         - User-defined types，例如 $List(\alpha)=nil\mid cons(\alpha,List(\alpha))$。
>         - Distinctiveness：不同 constructors 产生不同值。
>         - Exhaustiveness：每个值都来自某个 constructor。
>         - Injectivity：同一 constructor 的结果相等 $\Rightarrow$ 对应 arguments 相等。
>         - Selectors：例如 $head(cons(h,t))=h$。
>         - Non-circularity：排除循环构造的有限数据值。
>
> - **5. Decidability & Complexity：关键对比**
>     - **Full theory / QFF**：
>         - EUF：Undecidable / Decidable
>         - Peano：Undecidable / Undecidable
>         - Presburger：Decidable / Decidable
>         - Linear Integers：Decidable / Decidable
>         - Reals with multiplication：Decidable / Decidable
>         - Rationals without multiplication：Decidable / Decidable
>         - Arrays：Undecidable / Decidable
>     - **QF Conjunctive Complexity（讲义总结）**：
>         - EUF：$O(n\log n)$
>         - LIA / Presburger：NP-complete
>         - Linear Rational Arithmetic：PTIME
>         - Arrays：NP-complete
>         - Nonlinear Real Arithmetic：complexity 很高
>     - **Decidable vs Tractable**：
>         - Decidable 只保证存在 terminating decision procedure。
>         - PTIME 表示 polynomial-time solvability。
>         - NP-complete 问题即使 decidable，最坏情况仍可能非常昂贵。
>
> - **6. Theory Solvers**
>     - Theory Solver：针对特定 theory/fragment 的 satisfiability decision procedure。
>     - **EUF**：Congruence Closure + Union-Find。
>     - **LRA**：Linear Programming (LP)，例如 Simplex，判断 linear constraints 是否 feasible。
>     - **LIA**：Integer Linear Programming (ILP)，可使用 relaxation、cutting planes、Omega test 等。
>     - **Bitvectors**：Bit-blasting / bit-flattening to SAT。
>     - 不同 theories 使用不同算法，而不是所有约束都直接转换成普通 SAT。
>
> - **7. Satisfiability Modulo Theories (SMT)**
>     - SMT：判断公式在一个或多个 background theories 下是否 satisfiable。
>     - SMT formulas 通常表示为带 built-in symbols 的 many-sorted FOL formulas。
>     - 可同时涉及 EUF、arithmetic、arrays、bitvectors、ADT 等 theories。
>     - **常见 SMT Logic 名称**：
>         - `QF_UF`：Quantifier-free Uninterpreted Functions
>         - `QF_LIA`：Quantifier-free Linear Integer Arithmetic
>         - `QF_LRA`：Quantifier-free Linear Real Arithmetic
>         - `QF_BV`：Quantifier-free Bitvectors
>         - `QF_A`：Quantifier-free Arrays（讲义记法）
>     - **SAT vs SMT**：
>         - SAT：Propositional Boolean satisfiability。
>         - SMT：Boolean structure + theory-specific semantics。
>         - SMT 可以利用 arithmetic equality、function congruence、array axioms 等进行推理。
>
> - **8. SMT Solver Architecture — CDCL(T)**
>     - **核心架构**：$SMT\ Solver=CDCL(T)+Theory\ Solvers$。
>     - **为什么需要 CDCL(T)**：
>         - Theory solvers 擅长处理 conjunctions of theory constraints。
>         - 一般 QF SMT formulas 还包含 $\lor$ 等 Boolean structure。
>         - Naive approach：转换成 DNF，逐个检查 conjunctive disjunct。
>         - 问题：DNF 可能 exponential blow-up，且难以复用之前的 theory reasoning。
>     - **CDCL(T) 的分工**：
>         - CDCL SAT Solver：处理 Boolean structure、搜索和 pruning。
>         - Theory Solver：检查选定的 conjunction 是否 theory-consistent。
>         - $T$ 可以是多个 theories 的 combination。
>         - 早期相关架构也称为 DPLL(T)。
>     - **核心设计思想**：
>         - Avoid upfront explicit exponential cost。
>         - 利用 SAT search + theory-specific decision procedures，而不是显式枚举全部 DNF branches。
>
> - **9. Software Verification Applications**
>     - **Program Equivalence**：
>         - 将程序转换成 logical constraints；用不同下标（如 $x_0,x_1$）表示变量在不同程序状态中的值。
>         - 加入输出不同的约束：$r_1\ne r_2$。
>         - SAT $\Rightarrow$ 存在可能的 non-equivalence witness。
>         - UNSAT $\Rightarrow$ 不存在输出不同的情况，从而证明 equivalence（在编码语义和假设下）。
>         - UF abstraction 可以避免不必要的复杂 arithmetic reasoning。
>     - **Compiler Optimization Validation**：
>         - 将 optimization invalidity 编码成 constraints。
>         - 例如 $1\le i\le10\land j+i=j$ 在整数 theory 中 UNSAT。
>         - UNSAT $\Rightarrow$ 对应的 invalidity condition 不可能发生。
>     - **通用验证模式**：
>         - Encode possible violation as a formula。
>         - SAT $\Rightarrow$ 找到 violation candidate / counterexample。
>         - UNSAT $\Rightarrow$ 证明不存在被编码的 violation。
>
> - **10. Further Fragments & Extensions**
>     - Arithmetic constraints 按表达能力可区分：
>         - Bounds：$x\bowtie k$
>         - Difference Constraints：$x-y\bowtie k$
>         - UTVPI：$\pm x\pm y\bowtie k$
>         - Linear Arithmetic：$a_1x_1+\cdots+a_nx_n\bowtie k$
>         - Nonlinear Arithmetic：出现变量之间的 multiplication / 更高次项。
>     - 其他 SMT theories：Strings / Regular Expressions、Floating-Point、Finite Sets、Relations、Transcendental Functions、ODEs。
>
> - **核心知识链**
>     - $FOL\rightarrow FO\ Theory\rightarrow Decidable\ Fragment\rightarrow Theory\ Solver\rightarrow CDCL(T)\rightarrow SMT$
>     - Theory 提供 **semantics**；fragment 控制 **decidability/complexity**；theory solver 提供 **domain-specific reasoning**；CDCL(T) 负责整合 **Boolean search 与 theory reasoning**。


