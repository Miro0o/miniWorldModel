# Intractability

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability

A problem that can theoretically be solved, but requires impractical and infinite resources (e.g., time) to do so, is known as an _**intractable problem**_. Conversely, a problem that can be solved in practice is called a _**tractable problem**_, literally "a problem that can be handled". The term _[infeasible](https://en.wiktionary.org/wiki/infeasible "wikt:infeasible")_ (literally "cannot be done") is sometimes used interchangeably with _[intractable](https://en.wiktionary.org/wiki/intractable "wikt:intractable")_, though this risks confusion with a [feasible solution](https://en.wikipedia.org/wiki/Feasible_solution "Feasible solution") in [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization "Mathematical optimization").

Tractable problems are frequently identified with problems that have polynomial-time solutions (P![{\displaystyle {\textsf {P}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec84dd832febb10256f66e1d1812aced47e07c4c), PTIME); this is known as the [Cobham–Edmonds thesis](https://en.wikipedia.org/wiki/Cobham%E2%80%93Edmonds_thesis "Cobham–Edmonds thesis"). Problems that are known to be intractable in this sense include those that are [EXPTIME](https://en.wikipedia.org/wiki/EXPTIME "EXPTIME")-hard. If NP is not the same as P![{\displaystyle {\textsf {P}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec84dd832febb10256f66e1d1812aced47e07c4c), then [NP-hard](https://en.wikipedia.org/wiki/NP-hard "NP-hard") problems are also intractable in this sense.

However, this identification is inexact: a polynomial-time solution with large degree or large leading coefficient grows quickly, and may be impractical for practical size problems; conversely, an exponential-time solution that grows slowly may be practical on realistic input, or a solution that takes a long time in the worst case may take a short time in most cases or the average case, and thus still be practical. Saying that a problem is not in P does not imply that all large cases of the problem are hard or even that most of them are. For example, the decision problem in [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic "Presburger arithmetic") has been shown not to be in P, yet algorithms have been written that solve the problem in reasonable times in most cases. Similarly, algorithms can solve the NP-complete [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem "Knapsack problem") over a wide range of sizes in less than quadratic time and [SAT solvers](https://en.wikipedia.org/wiki/SAT_solver "SAT solver") routinely handle large instances of the NP-complete [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem "Boolean satisfiability problem").



## Ref
