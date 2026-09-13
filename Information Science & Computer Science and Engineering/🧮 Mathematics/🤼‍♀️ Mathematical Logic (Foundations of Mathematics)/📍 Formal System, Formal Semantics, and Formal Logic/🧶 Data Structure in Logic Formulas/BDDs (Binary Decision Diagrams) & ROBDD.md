# BDDs (Binary Decision Diagrams) & ROBDD

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

Any propositional formula can be turned to a case analysis on a single atomic proposition by using the following equivalence-preserving transformation (also known as **Shannon expansion**.)

> 🔗 https://en.wikipedia.org/wiki/Binary_decision_diagram

A Boolean function can be represented as a [rooted](https://en.wikipedia.org/wiki/Rooted_graph "Rooted graph"), directed, acyclic [graph](https://en.wikipedia.org/wiki/Graph_theory "Graph theory"), which consists of several (decision) nodes and two terminal nodes. The two terminal nodes are labeled 0 ($FALSE$) and 1 ($TRUE$). Each (decision) node $u$ is labeled by a Boolean variable $x_i$ and has two [child nodes](https://en.wikipedia.org/wiki/Child_node "Child node") called low child and high child. The edge from node $u$ to a low (or high) child represents an assignment of the value $FALSE$ (or $TRUE$, respectively) to variable $x_i$. Such a **BDD** is called '**ordered**' if different variables appear in the same order on all paths from the root. A BDD is said to be '**reduced**' if the following two rules have been applied to its graph:
- Merge any [isomorphic](https://en.wikipedia.org/wiki/Graph_isomorphism "Graph isomorphism") subgraphs.
- Eliminate any node whose two children are isomorphic.

In popular usage, the term **BDD** almost always refers to **Reduced Ordered Binary Decision Diagram** (**ROBDD** in the literature, used when the ordering and reduction aspects need to be emphasized). ==The advantage of an ROBDD is that it is canonical (unique up to isomorphism) for a particular function and variable order.== This property makes it useful in functional equivalence checking and other operations like functional technology mapping.

A path from the root node to the 1-terminal represents a (possibly partial) variable assignment for which the represented Boolean function is true. As the path descends to a low (or high) child from a node, then that node's variable is assigned to 0 (respectively 1).



## Ref
[Binary Decision Diagrams: An Algorithmic Basis for Symbolic Model Checking -- Randal E. Bryant1]: https://www.cs.cmu.edu/~bryant/pubdir/hmc-bdd18.pdf
