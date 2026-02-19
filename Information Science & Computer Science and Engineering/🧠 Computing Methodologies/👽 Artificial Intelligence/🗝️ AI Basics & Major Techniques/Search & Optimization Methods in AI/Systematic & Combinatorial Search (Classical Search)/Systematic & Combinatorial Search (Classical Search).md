# Systematic & Combinatorial Search (Classical Search)

[TOC]



## Res
### Related Topics
↗ [Complexity Theory & Computational Complexity](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)

↗ [Operations Research (OR)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Operations%20Research%20(OR).md)
- ↗ [Mathematical Optimization (Programming)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
- ↗ [Combinatorics (Combinatorial Mathematics)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/Combinatorics%20(Combinatorial%20Mathematics).md)

↗ [Basic Searching](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Basic%20Searching/Basic%20Searching.md)
↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Combinatorial_search

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") and [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), **combinatorial search** studies [search algorithms](https://en.wikipedia.org/wiki/Search_algorithms "Search algorithms") for solving instances of problems that are believed to be hard in general, by efficiently exploring the usually large solution space of these instances. Combinatorial search algorithms achieve this efficiency by reducing the effective size of the search space or employing heuristics. Some algorithms are guaranteed to find the optimal solution, while others may only return the best solution found in the part of the state space that was explored.

Classic combinatorial search problems include solving the [eight queens puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle "Eight queens puzzle") or evaluating moves in games with a large [game tree](https://en.wikipedia.org/wiki/Game_tree "Game tree"), such as [reversi](https://en.wikipedia.org/wiki/Reversi "Reversi") or [chess](https://en.wikipedia.org/wiki/Chess "Chess").

A study of [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory") helps to motivate combinatorial search. Combinatorial search algorithms are typically concerned with problems that are [NP-hard](https://en.wikipedia.org/wiki/NP-hard "NP-hard"). Such problems are not believed to be efficiently solvable in general. However, the various approximations of complexity theory suggest that some instances (e.g. "small" instances) of these problems could be efficiently solved. This is indeed the case, and such instances often have important practical ramifications.


> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 3

This chapter has introduced search algorithms that an agent can use to select action sequences in a wide variety of environments—as long as they are episodic, single-agent, fully observable, deterministic, static, discrete, and completely known. There are tradeoffs to be made between the amount of time the search takes, the amount of memory available, and the quality of the solution. We can be more efficient if we have domain-dependent knowledge in the form of a heuristic function that estimates how far a given state is from the goal, or if we precompute partial solutions involving patterns or landmarks.
- Before an agent can start searching, a well-defined problem must be formulated.
- A problem consists of five parts: the initial state, a set of actions, a transition model describing the results of those actions, a set of goal states, and an action cost function.
- The environment of the problem is represented by a state space graph. A path through the state space (a sequence of actions) from the initial state to a goal state is a solution.
- Search algorithms generally treat states and actions as atomic, without any internal structure (although we introduced features of states when it came time to do learning).
- Search algorithms are judged on the basis of completeness, cost optimality, time complexity, and space complexity.
- ==Uninformed search methods== have access only to the problem definition. Algorithms build a search tree in an attempt to find a solution. Algorithms differ based on which node they expand first:
	- Best-first search selects nodes for expansion using an evaluation function.
	- Breadth-first search expands the shallowest nodes first; it is complete, optimal for unit action costs, but has exponential space complexity.
	- Uniform-cost search expands the node with lowest path cost, g(n), and is optimal for general action costs.
	- Depth-first search expands the deepest unexpanded node first. It is neither complete nor optimal, but has linear space complexity. Depth-limited search adds a depth bound.
	- Iterative deepening search calls depth-first search with increasing depth limits until a goal is found. It is complete when full cycle checking is done, optimal for unit action costs, has time complexity comparable to breadth-first search, and has linear space complexity.
	- Bidirectional search expands two frontiers, one around the initial state and one around the goal, stopping when the two frontiers meet.
- ==Informed search methods== have access to a heuristic function $h(n)$ that estimates the cost of a solution from n. They may have access to additional information such as pattern databases with solution costs.
	- Greedy best-first search expands nodes with minimal $h(n)$. It is not optimal but is often efficient.
	- A\*search expands nodes with minimal $f(n) = g(n) + h(n)$. A\*is complete and optimal, provided that h(n) is admissible. The space complexity of A\* is still an issue for many problems.
	- Bidirectional A\* search is sometimes more efficient than A\*itself.
	- IDA\*(iterative deepening A∗search) is an iterative deepening version of A\*, and thus adresses the space complexity issue.
	- RBFS (recursive best-first search) and SMA\* (simplified memory-bounded A\*) are robust, optimal search algorithms that use limited amounts of memory; given enough time, they can solve problems for which A\* runs out of memory.
	- Beam search puts a limit on the size of the frontier; that makes it incomplete and suboptimal, but it often finds reasonably good solutions and runs faster than complete searches.
	- Weighted A\* search focuses the search towards a goal, expanding fewer nodes, but sacrificing optimality.
- The performance of heuristic search algorithms depends on the quality of the heuristic function. One can sometimes construct good heuristics by relaxing the problem definition, by storing precomputed solution costs for subproblems in a pattern database, by defining landmarks, or by learning from experience with the problem class.


### Combinatorial Search 🆚 Dynamic Programming?
#combinatorial_search #dynamic_programming


### Combinatorial Search 🆚 CSPs 🆚 Assignment Problems
#combinatorial_search #CSPs #assignment_problems

> [!links]
> ↗ [Constraint Satisfaction Problems (CSPs)](../Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Satisfaction%20Problems%20(CSPs).md)
> ↗ [Assignment Problems](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Combinatorial%20Optimization/Assignment%20Problems/Assignment%20Problems.md)



## Ref
