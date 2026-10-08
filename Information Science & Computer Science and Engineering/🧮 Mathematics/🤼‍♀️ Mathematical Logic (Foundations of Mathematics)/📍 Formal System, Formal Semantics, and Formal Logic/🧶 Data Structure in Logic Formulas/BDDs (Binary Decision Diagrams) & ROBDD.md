# BDDs (Binary Decision Diagrams) & ROBDD

[TOC]



## Res
### Related Topics
↗ [Boolean Algebra](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Boolean%20Algebra/Boolean%20Algebra.md)
↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20(PL)%20-%20(零阶)%20命题逻辑.md)

↗ [Models of Computation & Abstract Machines](../../😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"


### Learning Resources
Randal E. Bryant. Graph-based algorithms for boolean function manipulation. IEEE Transactions on Computers, 100 (8), 677-691, 1986


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
> ↗ [SAT Solving & Algorithms](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md)
> ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)

![](../../../../../Assets/Pics/Screenshot%202026-10-08%20at%2023.28.24.png)



## BDD Basics
1. From truth table to decision tree
2. From decision tree to binary decision tree (BDT)
3. From decision tree to decision graph
4. Ordered binary decision diagram (OBDD)
5. Reduced ordered BDD (ROBDD)
	1. ROBDD are canonical
6. BDD operations



## Ref
[Binary Decision Diagrams: An Algorithmic Basis for Symbolic Model Checking -- Randal E. Bryant1]: https://www.cs.cmu.edu/~bryant/pubdir/hmc-bdd18.pdf
