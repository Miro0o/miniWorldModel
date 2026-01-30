# Search & Optimization Methods for AI

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [Algorithm & Data Structure](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithm%20&%20Data%20Structure.md)
- ↗ [Basic Searching](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Basic%20Searching/Basic%20Searching.md)
- ↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)

↗ [Numerical Search](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Numerical%20Methods/Numerical%20Search.md)

↗ [Operations Research (OR)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Operations%20Research%20(OR).md)
- ↗ [Mathematical Optimization (Programming)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
	- ↗ [Dynamic Programming (DP)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/COP%20(Convex%20Optimization%20Programming)/Dynamic%20Programming%20(DP)/Dynamic%20Programming%20(DP).md)
↗ [Combinatorial Optimization](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Combinatorial%20Optimization/Combinatorial%20Optimization.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Artificial_intelligence#Search_and_optimization

Search and optimization
AI can solve many problems by intelligently searching through many possible solutions.[69] There are two very different kinds of search used in AI: state space search and local search.


**State space search**
State space search searches through a tree of possible states to try to find a goal state.[70] For example, planning algorithms search through trees of goals and subgoals, attempting to find a path to a target goal, a process called means-ends analysis.[71]

Simple exhaustive searches[72] are rarely sufficient for most real-world problems: the search space (the number of places to search) quickly grows to astronomical numbers. The result is a search that is too slow or never completes.[15] "Heuristics" or "rules of thumb" can help prioritize choices that are more likely to reach a goal.[73]

Adversarial search is used for game-playing programs, such as chess or Go. It searches through a tree of possible moves and countermoves, looking for a winning position.[74]


**Local Search**
Local search uses mathematical optimization to find a solution to a problem. It begins with some form of guess and refines it incrementally.[75]

Gradient descent is a type of local search that optimizes a set of numerical parameters by incrementally adjusting them to minimize a loss function. Variants of gradient descent are commonly used to train neural networks,[76] through the backpropagation algorithm.

Another type of local search is evolutionary computation, which aims to iteratively improve a set of candidate solutions by "mutating" and "recombining" them, selecting only the fittest to survive each generation.[77]

Distributed search processes can coordinate via swarm intelligence algorithms. Two popular swarm algorithms used in search are particle swarm optimization (inspired by bird flocking) and ant colony optimization (inspired by ant trails).[78]


### Combinatorial Search
> 🔗 https://en.wikipedia.org/wiki/Combinatorial_search

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") and [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), **combinatorial search** studies [search algorithms](https://en.wikipedia.org/wiki/Search_algorithms "Search algorithms") for solving instances of problems that are believed to be hard in general, by efficiently exploring the usually large solution space of these instances. Combinatorial search algorithms achieve this efficiency by reducing the effective size of the search space or employing heuristics. Some algorithms are guaranteed to find the optimal solution, while others may only return the best solution found in the part of the state space that was explored.

Classic combinatorial search problems include solving the [eight queens puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle "Eight queens puzzle") or evaluating moves in games with a large [game tree](https://en.wikipedia.org/wiki/Game_tree "Game tree"), such as [reversi](https://en.wikipedia.org/wiki/Reversi "Reversi") or [chess](https://en.wikipedia.org/wiki/Chess "Chess").

A study of [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory") helps to motivate combinatorial search. Combinatorial search algorithms are typically concerned with problems that are [NP-hard](https://en.wikipedia.org/wiki/NP-hard "NP-hard"). Such problems are not believed to be efficiently solvable in general. However, the various approximations of complexity theory suggest that some instances (e.g. "small" instances) of these problems could be efficiently solved. This is indeed the case, and such instances often have important practical ramifications.



## Ref
