# BDDs (Binary Decision Diagrams) & ROBDD

[TOC]



## Res
### Related Topics
↗ [Boolean Algebra](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Boolean%20Algebra/Boolean%20Algebra.md)
↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20(PL)%20-%20(零阶)%20命题逻辑.md)

↗ [Models of Computation & Abstract Machines](../../😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"


### Learning Resources
https://ieeexplore.ieee.org/abstract/document/1676819
Bryant, "Graph-Based Algorithms for Boolean Function Manipulation," in IEEE Transactions on Computers, vol. C-35, no. 8, pp. 677-691, Aug. 1986, doi: 10.1109/TC.1986.1676819.


### Other Resources



## Intro
> [!Abstract]
> BDDs are canonical representations of Boolean formulas
>  - f1 ≡ f2 iff BDD(f1) and BDD(f2) are isomorphic
>  - f is unsatisfiable iff BDD(f) is the terminal node “0”
>  - f is valid iff BDD(f) is the terminal node “1”
>  - BDD packages do these operations in constant time
> 
> Logical operations can be performed efficiently on BDDs
> - Polynomial in argument BDD size
> 
> BDD size depends on the variable ordering
> - Some formulas have exponentially large sizes for all orderings
>  - Others are polynomial for some ordering and exponential for others

> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

Any propositional formula can be turned to a case analysis on a single atomic proposition by using the following **equivalence-preserving transformation** (also known as **Shannon expansion**.)

> 🔗 https://en.wikipedia.org/wiki/Binary_decision_diagram

A Boolean function can be represented as a [rooted](https://en.wikipedia.org/wiki/Rooted_graph "Rooted graph"), directed, acyclic [graph](https://en.wikipedia.org/wiki/Graph_theory "Graph theory"), which consists of several (decision) nodes and two terminal nodes. The two terminal nodes are labeled 0 ($FALSE$) and 1 ($TRUE$). Each (decision) node $u$ is labeled by a Boolean variable $x_i$ and has two [child nodes](https://en.wikipedia.org/wiki/Child_node "Child node") called low child and high child. The edge from node $u$ to a low (or high) child represents an assignment of the value $FALSE$ (or $TRUE$, respectively) to variable $x_i$. Such a **BDD** is called '**ordered**' if different variables appear in the same order on all paths from the root. A BDD is said to be '**reduced**' if the following two rules have been applied to its graph:
- Merge any [isomorphic](https://en.wikipedia.org/wiki/Graph_isomorphism "Graph isomorphism") subgraphs.
- Eliminate any node whose two children are isomorphic.

In popular usage, the term **BDD** almost always refers to **Reduced Ordered Binary Decision Diagram** (**ROBDD** in the literature, used when the ordering and reduction aspects need to be emphasized). ==The advantage of an ROBDD is that it is canonical (unique up to isomorphism) for a particular function and variable order.== This property makes it useful in functional equivalence checking and other operations like functional technology mapping.

A path from the root node to the 1-terminal represents a (possibly partial) variable assignment for which the represented Boolean function is true. As the path descends to a low (or high) child from a node, then that node's variable is assigned to 0 (respectively 1).


### BDD Packages
Example: CUDD, BuDDy
- Provides APIs to create a BDD manager, create variables, create BDDs by using

BDD Apply operations, etc.
- Uses a strong canonical form
- a BDD node is a triple (index, low-node, high-node)
- each index is associated with a separate hash table (unique table)
- Invariant: keeps only reduced BDDs, look up in table before creating a new node
- Uses a cache to memoize results of operations.
- Allows dynamic reordering (have to reorder _all_ BDDs in a manager)


### BDD Variants
Multi-Terminal BDD (MTBDD), Algebraic Decision Diagrams (ADD)
Zero-suppressed Binary Decision Diagram (ZBDD)
Context-Free-Language Ordered Binary Decision Diagrams (CFLOBDD)


### BDD Applications
Very popular in the 90’s…
- Combinational circuit equivalence
	- Check whether two gate-level designs are equivalent
	- One of the first formal verification successes in EDA industry
- Sequential circuit equivalence
	- Given correspondence of state variables (latches), check whether two sequential designs are equivalent
- Symbolic circuit simulation
	- Given symbolic inputs, compute circuit outputs symbolically (as equations over symbolic variables).
- Symbolic model checking
	- Uses BDDs to symbolically represent finite sets of states
- QBF (quantified Boolean formula) solvers


### Comparing BDD & SAT
> [!links]
> ↗ [SAT Solving & Algorithms](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Automated%20Reasoning/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md)
> ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)

![](../../../../../Assets/Pics/Screenshot%202026-10-08%20at%2023.28.24.png)



## BDD Basics
1. From truth table to decision tree
2. From decision tree to binary decision tree (BDT)
3. From decision tree to decision graph
	1. Shannon decomposition
4. Ordered binary decision diagram (OBDD)
5. Reduced ordered BDD (ROBDD)
	1. ROBDD are canonical
6. BDD operations (APPLY)

设 Shannon Decomposition 为：$f=(\neg x\land f_0)\lor(x\land f_1),\qquad g=(\neg x\land g_0)\lor(x\land g_1)$

其中 $f_0=f|_{x=0}$、$f_1=f|_{x=1}$，$g_0,g_1$ 同理。

| BDD Operation            | 基于 Shannon Decomposition 的公式                                     | BDD 上如何操作                              | 特殊情况 / 递归规则                                                          |
| ------------------------ | ---------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------- |
| Shannon Decomposition    | $f=(\neg x\land f_0)\lor(x\land f_1)$                            | 根节点为 $x$，low=$f_0$，high=$f_1$          | 所有 BDD Operations 的数学基础                                              |
| NOT                      | $\neg f=(\neg x\land\neg f_0)\lor(x\land\neg f_1)$               | 对 low、high 分别递归 NOT，再重建节点              | $NOT(0)=1,\ NOT(1)=0$                                                |
| AND                      | $f\land g=(\neg x\land(f_0\land g_0))\lor(x\land(f_1\land g_1))$ | low=$AND(f_0,g_0)$，high=$AND(f_1,g_1)$ | 若 $root(f)=x<root(g)=y$，则 low=$AND(f_0,g)$，high=$AND(f_1,g)$         |
| OR                       | $f\lor g=(\neg x\land(f_0\lor g_0))\lor(x\land(f_1\lor g_1))$    | low=$OR(f_0,g_0)$，high=$OR(f_1,g_1)$   | 若 $root(f)=x<root(g)=y$，则 low=$OR(f_0,g)$，high=$OR(f_1,g)$           |
| Restrict \(x=0\)         | $f\|_{x=0}=f_0$                                                  | 直接返回 low                               | 如果根变量 $y\ne x$，递归 Restrict 两个 children，再重建                           |
| Restrict $x=1$           | $f\|_{x=1}=f_1$                                                  | 直接返回 high                              | 如果根变量 $y\ne x$，递归 Restrict 两个 children，再重建                           |
| Exists $x$               | $\exists x.f=f_0\lor f_1$                                        | $OR(low,high)$，消去 $x$                  | 如果根变量 $y\ne x$，结果为 $(\neg y\land\exists x.A)\lor(y\land\exists x.B)$ |
| Forall $x$               | $\forall x.f=f_0\land f_1$                                       | $AND(low,high)$，消去 $x$                 | 如果根变量 $y\ne x$，结果为 $(\neg y\land\forall x.A)\lor(y\land\forall x.B)$ |
| Composition $x\mapsto g$ | $f[x\mapsto g]=(\neg g\land f_0)\lor(g\land f_1)$                | $ITE(g,f_1,f_0)$，替换变量并构建结果 BDD         | 如果根变量 $y\ne x$，递归替换两个 children，并通过 ITE 重建以保持 ordering                |
| Reduction Rule 1         | $f_0=f_1\Rightarrow f=f_0$                                       | 若 low=high，删除当前节点                      | 不影响 Boolean function 的语义                                             |
| Reduction Rule 2         | 相同的 $(x,f_0,f_1)$ 表示相同子函数                                        | 合并相同的 subgraphs                        | 通过 Unique Table 共享节点                                                 |

其中，特殊情况列里的：$f=(\neg y\land A)\lor(y\land B)$

表示当前 BDD 的根变量为 $y$，low 对应 $A$，high 对应 $B$。如果 $x$ 根本不出现在函数中，Restrict、Exists、Forall 和 Composition 都不改变原函数。AND/OR 在两根变量顺序相反时，对称处理即可。

另外：$ITE(c,t,e)=(c\land t)\lor(\neg c\land e)$

所有需要重建节点的运算都要进行 Reduction，以保证结果仍然是 ROBDD。



## Ref
[Binary Decision Diagrams: An Algorithmic Basis for Symbolic Model Checking -- Randal E. Bryant1]: https://www.cs.cmu.edu/~bryant/pubdir/hmc-bdd18.pdf
