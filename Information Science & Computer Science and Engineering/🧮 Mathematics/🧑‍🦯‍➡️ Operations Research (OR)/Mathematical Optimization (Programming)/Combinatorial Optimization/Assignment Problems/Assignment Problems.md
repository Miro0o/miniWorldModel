# Assignment Problems

[TOC]



## Res
### Related Topics
↗ [Search & Optimization Methods in AI](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Search%20&%20Optimization%20Methods%20in%20AI/Search%20&%20Optimization%20Methods%20in%20AI.md)
- ↗ [Systematic & Combinatorial Search (Classical Search)](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Search%20&%20Optimization%20Methods%20in%20AI/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search).md)
- ↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Search%20&%20Optimization%20Methods%20in%20AI/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)
	- ↗ [Constraint Satisfaction Problems (CSPs)](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Search%20&%20Optimization%20Methods%20in%20AI/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Satisfaction%20Problems%20(CSPs).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Assignment_problem

The **assignment problem** is a fundamental [combinatorial optimization](https://en.wikipedia.org/wiki/Combinatorial_optimization "Combinatorial optimization") problem. In its most general form, the problem is as follows:

The problem instance has a number of _agents_ and a number of _tasks_. Any agent can be assigned to perform any task, incurring some _cost_ that may vary depending on the agent-task assignment. It is required to perform as many tasks as possible by assigning at most one agent to each task and at most one task to each agent, in such a way that the _total cost_ of the assignment is minimized.

Alternatively, describing the problem using [graph theory](https://en.wikipedia.org/wiki/Graph_theory "Graph theory"):

The assignment problem consists of finding, in a [weighted](https://en.wikipedia.org/wiki/Weighted_graph "Weighted graph") [bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph "Bipartite graph"), a [matching](https://en.wikipedia.org/wiki/Matching_\(graph_theory\) "Matching (graph theory)") of maximum size, in which the sum of weights of the edges is minimum.

If the numbers of agents and tasks are equal, then the problem is called **balanced assignment**, and the graph-theoretic version is called **minimum-cost perfect matching**. Otherwise, it is called **unbalanced assignment**.

If the total cost of the assignment for all tasks is equal to the sum of the costs for each agent (or the sum of the costs for each task, which is the same thing in this case), then the problem is called **linear assignment**. Commonly, when speaking of the _assignment problem_ without any additional qualification, then the _linear balanced assignment problem_ is meant.


**Formal Definition**
The formal definition of the **assignment problem** (or **linear assignment problem**) is

Given two sets, _A_ and _T_, together with a [weight function](https://en.wikipedia.org/wiki/Weight_function "Weight function") _C_ : _A_ × _T_ → **[R](https://en.wikipedia.org/wiki/Real_number "Real number")**. Find a [bijection](https://en.wikipedia.org/wiki/Bijection "Bijection") _f_ : _A_ → _T_ such that the [cost function](https://en.wikipedia.org/wiki/Loss_function "Loss function"): $\sum _{a\in A}C(a,f(a))$ is minimized.

Usually the weight function is viewed as a square real-valued [matrix](https://en.wikipedia.org/wiki/Matrix_\(mathematics\) "Matrix (mathematics)") _C_, so that the cost function is written down as: $\sum _{a\in A}C_{a,f(a)}$

The problem is "linear" because the cost function to be optimized as well as all the constraints contain only linear terms.


> 🤖 GPT-5.2


### Combinatorial Search 🆚 CSPs 🆚 Assignment Problems
↗ [Systematic & Combinatorial Search (Classical Search)](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Search%20&%20Optimization%20Methods%20in%20AI/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search).md)



## Ref
