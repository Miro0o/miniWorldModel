# Search & Optimization Methods in AI

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Abstraction](../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [Graph Theory](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/Graph%20Theory.md)
↗ [Graph Basics](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/📌%20Graph%20Theory%20Basics/Graph%20Basics.md)

↗ [Algorithm & Data Structure](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithm%20&%20Data%20Structure.md)
- ↗ [Basic Searching](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Basic%20Searching/Basic%20Searching.md)
- ↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)

↗ [Numerical Search](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Numerical%20Methods/Numerical%20Search.md)

↗ [Operations Research (OR)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Operations%20Research%20(OR).md)
- ↗ [Mathematical Optimization (Programming)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
	- ↗ [Dynamic Programming (DP)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/COP%20(Convex%20Optimization%20Programming)/Dynamic%20Programming%20(DP)/Dynamic%20Programming%20(DP).md)
	- ↗ [Metaheuristic & Heuristic](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Metaheuristic%20&%20Heuristic/Metaheuristic%20&%20Heuristic.md)
	- ↗ [Combinatorial Optimization](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Combinatorial%20Optimization/Combinatorial%20Optimization.md)


### Other Resources



## Intro
> 🤖 GPT-5.2

Search problems and search state space:
- state space known (classical search)
	- state space can collapse
	- state space refuses to collapse.
- state space unknown (learning-based methods)
	- 

tbd.


### (Classical) Search Strategies
> 🔗 https://en.wikipedia.org/wiki/Artificial_intelligence#Search_and_optimization

Search and optimization
AI can solve many problems by intelligently searching through many possible solutions.[69] There are two very different kinds of search used in AI: state space search and local search.
#### State Space Search /Systematic Combinatorial Search 
> [!links]
> state space search is under ↗ [Systematic & Combinatorial Search (Classical Search)](Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search).md)

> 🔗 https://en.wikipedia.org/wiki/Artificial_intelligence#Search_and_optimization

**State space search** (actually "combinatorial search" would be more precise)
State space search searches through a tree of possible states to try to find a goal state.[70] For example, planning algorithms search through trees of goals and subgoals, attempting to find a path to a target goal, a process called means-ends analysis.[71]

Simple exhaustive searches[72] are rarely sufficient for most real-world problems: the search space (the number of places to search) quickly grows to astronomical numbers. The result is a search that is too slow or never completes.[15] "Heuristics" or "rules of thumb" can help prioritize choices that are more likely to reach a goal.[73]

Adversarial search is used for game-playing programs, such as chess or Go. It searches through a tree of possible moves and countermoves, looking for a winning position.[74]

> 🔗 https://en.wikipedia.org/wiki/State-space_search

**State-space search** is a process used in the field of [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), including [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") (AI), in which successive [configurations](https://en.wikipedia.org/wiki/Configuration_graph "Configuration graph") or _states_ of an instance are considered, with the intention of finding a _goal state_ with the desired property.

Problems are often modelled as a [state space](https://en.wikipedia.org/wiki/State_space "State space"), a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") of _states_ that a problem can be in. The set of states forms a [graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\) "Graph (discrete mathematics)") where two states are connected if there is an _operation_ that can be performed to transform the first state into the second.

State-space search often differs from traditional [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") [search](https://en.wikipedia.org/wiki/Search_algorithm "Search algorithm") methods because the state space is [_implicit_](https://en.wikipedia.org/wiki/Implicit_graph "Implicit graph"): the typical state-space graph is much too large to generate and store in [memory](https://en.wikipedia.org/wiki/Computer_storage "Computer storage"). Instead, nodes are generated as they are explored, and typically discarded thereafter. A solution to a [combinatorial search](https://en.wikipedia.org/wiki/Combinatorial_search "Combinatorial search") instance may consist of the goal state itself, or of a path from some _initial state_ to the goal state.

In state-space search, a state space is formally represented as a [tuple](https://en.wikipedia.org/wiki/Tuple "Tuple") $S:\langle S,A,\operatorname {Action} (s),\operatorname {Result} (s,a),\operatorname {Cost} (s,a)\rangle$, in which:
- S![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) is the [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") of all possible states;
- A![{\displaystyle A}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7daff47fa58cdfd29dc333def748ff5fa4c923e3) is the set of possible actions, not related to a particular state but regarding all the state space;
- $\operatorname {Action} (s)$ is the function that establishes which action is possible to perform in a certain state;
- $\operatorname {Result} (s,a)$ is the function that returns the state reached performing action $a$ in state $s$;
- $\operatorname {Cost} (s,a)$ is the cost of performing an action $a$ in state $s$. In many state spaces, $a$ is a constant, but this is not always true.
##### Uninformed Search
↗ [Uninformed Search](Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Uninformed%20Search/Uninformed%20Search.md)
##### Informed Search
↗ [Informed (Heuristic) Search](Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Informed%20(Heuristic)%20Search/Informed%20(Heuristic)%20Search.md)
#### Local Search
> 🔗 https://en.wikipedia.org/wiki/Artificial_intelligence#Search_and_optimization

Local search uses mathematical optimization to find a solution to a problem. It begins with some form of guess and refines it incrementally.[75]

Gradient descent is a type of local search that optimizes a set of numerical parameters by incrementally adjusting them to minimize a loss function. Variants of gradient descent are commonly used to train neural networks,[76] through the backpropagation algorithm.

Another type of local search is evolutionary computation, which aims to iteratively improve a set of candidate solutions by "mutating" and "recombining" them, selecting only the fittest to survive each generation.[77]

Distributed search processes can coordinate via swarm intelligence algorithms. Two popular swarm algorithms used in search are particle swarm optimization (inspired by bird flocking) and ant colony optimization (inspired by ant trails).[78]
#### Sampling-Based and Probabilistic Search
↗ [Sampling-Based and Probabilistic Search](Sampling-Based%20and%20Probabilistic%20Search/Sampling-Based%20and%20Probabilistic%20Search.md)


### Games & Multi-agents Search
↗ [Games & Search in Multi-Agents Environment](🎳%20Games%20&%20Search%20in%20Multi-Agents%20Environment/Games%20&%20Search%20in%20Multi-Agents%20Environment.md)


### Metahuristics & Huristics
> [!links]
> ↗ [Mathematical Optimization (Programming)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
> ↗ [Metaheuristic & Heuristic](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Metaheuristic%20&%20Heuristic/Metaheuristic%20&%20Heuristic.md)



## Ref
