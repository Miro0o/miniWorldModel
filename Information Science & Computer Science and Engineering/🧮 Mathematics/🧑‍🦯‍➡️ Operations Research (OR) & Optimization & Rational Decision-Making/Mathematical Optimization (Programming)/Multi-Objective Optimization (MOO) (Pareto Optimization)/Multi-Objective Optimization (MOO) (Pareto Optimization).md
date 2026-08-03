# Multi-Objective Optimization (MOO) (Pareto Optimization)

[TOC]



## Res
### Related Topics
↗ [Multi-Criteria Decision-Making (MCDM) & Analysis (MCDA)](../../👩🏻‍⚖️%20Rational%20Decision-Making%20Problems%20&%20Theory/Multi-Criteria%20Decision-Making%20(MCDM)%20&%20Analysis%20(MCDA)/Multi-Criteria%20Decision-Making%20(MCDM)%20&%20Analysis%20(MCDA).md)

↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithms%20Implementation%20For%20Classical%20Problems/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Multi-objective_optimization

**Multi-objective optimization** or **Pareto optimization** (also known as **multi-objective programming**, **vector optimization**, **multi-criteria optimization**, or **multi-attribute optimization**) is an area of [multiple-criteria decision making](https://en.wikipedia.org/wiki/MCDM "MCDM") that is concerned with [mathematical optimization problems](https://en.wikipedia.org/wiki/Mathematical_optimization "Mathematical optimization") involving more than one [objective function](https://en.wikipedia.org/wiki/Loss_function "Loss function") to be optimized simultaneously. Multi-objective is a type of [vector optimization](https://en.wikipedia.org/wiki/Vector_optimization "Vector optimization") that has been applied in many fields of science, including engineering, economics and logistics where optimal decisions need to be taken in the presence of [trade-offs](https://en.wikipedia.org/wiki/Trade-off "Trade-off") between two or more conflicting objectives. Minimizing cost while maximizing comfort while buying a car, and maximizing performance whilst minimizing fuel consumption and emission of pollutants of a vehicle are examples of multi-objective optimization problems involving two and three objectives, respectively. In practical problems, there can be more than three objectives.

For a multi-objective optimization problem, it is not guaranteed that a single solution simultaneously optimizes each objective. The objective functions are said to be conflicting. A solution is called [non-dominated](https://en.wikipedia.org/wiki/Maxima_of_a_point_set "Maxima of a point set"), Pareto optimal, [Pareto efficient](https://en.wikipedia.org/wiki/Pareto_efficient "Pareto efficient") or non-inferior, if none of the objective functions can be improved in value without degrading some of the other objective values. Without additional [subjective](https://en.wikipedia.org/wiki/Subjectivity "Subjectivity") preference information, there may exist a (possibly infinite) number of Pareto optimal solutions, all of which are considered equally good. Researchers study multi-objective optimization problems from different viewpoints and, thus, there exist different solution philosophies and goals when setting and solving them. The goal may be to find a representative set of Pareto optimal solutions, and/or quantify the trade-offs in satisfying the different objectives, and/or finding a single solution that satisfies the subjective preferences of a human decision maker (DM).

**Bi-criteria optimization** denotes the special case in which there are two objective functions.

There is a direct relationship between [multitask optimization](https://en.wikipedia.org/wiki/Multitask_optimization "Multitask optimization") and multi-objective optimization.


### Pareto Sets & Pareto Front
> 🔗 https://en.wikipedia.org/wiki/Pareto_front#

In [multi-objective optimization](https://en.wikipedia.org/wiki/Multi-objective_optimization "Multi-objective optimization"), the **Pareto front** (also called **Pareto frontier** or **Pareto curve**) is the set of all [Pareto efficient](https://en.wikipedia.org/wiki/Pareto_efficient "Pareto efficient") solutions.[1](https://en.wikipedia.org/wiki/Pareto_front#cite_note-1) Colloquially, this means when there are many distinct objectives to consider in an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem "Optimization problem"), a Pareto front represents the set of solutions where no solution outperforms any other solution in the set at every objective, and every solution not in the set is outperformed by at least one solution in the Pareto front in every objective.[2](https://en.wikipedia.org/wiki/Pareto_front#cite_note-2) The concept is widely used in [engineering](https://en.wikipedia.org/wiki/Engineering "Engineering").[3](https://en.wikipedia.org/wiki/Pareto_front#cite_note-3): 111–148  It allows the designer to restrict attention to the set of efficient choices, and to make [tradeoffs](https://en.wikipedia.org/wiki/Trade-off "Trade-off") within this set, rather than considering the full range of every parameter


### Pareto Dominance & Pareto Optimality



## Ref
