# Constraint Satisfaction Problems (CSPs)

[TOC]



## Res
### Related Topics
↗ [Theory of Computation](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
- ↗ [Complexity Theory & Computational Complexity](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)

↗ [Operations Research (OR) & Rational Decision-Making](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Rational%20Decision-Making/Operations%20Research%20(OR)%20&%20Rational%20Decision-Making.md)
- ↗ [Mathematical Optimization (Programming)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
	- ↗ [Combinatorial & Network Optimization](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/Discrete%20&%20Combinatorial%20Optimization/Combinatorial%20&%20Network%20Optimization/Combinatorial%20&%20Network%20Optimization.md)
	- ↗ [Assignment Problems](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/Discrete%20&%20Combinatorial%20Optimization/Combinatorial%20&%20Network%20Optimization/Assignment%20Problems/Assignment%20Problems.md) 🤔
- ↗ [Combinatorics (Combinatorial Mathematics)](../../../../../🧮%20Mathematics/Combinatorics%20(Combinatorial%20Mathematics)/Combinatorics%20(Combinatorial%20Mathematics).md)

↗ [Constraint Solving & Theorem Proving](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md)

↗ [Formal Verifications & Constraint Solvers (Proof Assistants)](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)


### Other Resources



## Intro
> [!links]
> ↗ [Assignment Problems](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/Discrete%20&%20Combinatorial%20Optimization/Combinatorial%20&%20Network%20Optimization/Assignment%20Problems/Assignment%20Problems.md)

> 🔗 https://en.wikipedia.org/wiki/Constraint_satisfaction_problem

**Constraint satisfaction problems** (**CSPs**) are mathematical questions defined as a set of objects whose [state](https://en.wikipedia.org/wiki/State_\(computer_science\) "State (computer science)") must satisfy a number of [constraints](https://en.wikipedia.org/wiki/Constraint_\(mathematics\) "Constraint (mathematics)") or [limitations](https://en.wikipedia.org/wiki/Limit_\(mathematics\) "Limit (mathematics)"). CSPs represent the entities in a problem as a homogeneous collection of finite constraints over [variables](https://en.wikipedia.org/wiki/Variable_\(mathematics\) "Variable (mathematics)"), which is solved by [constraint satisfaction](https://en.wikipedia.org/wiki/Constraint_satisfaction "Constraint satisfaction") methods. CSPs are the subject of research in both [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") and [operations research](https://en.wikipedia.org/wiki/Operations_research "Operations research"), since the regularity in their formulation provides a common basis to analyze and solve problems of many seemingly unrelated families. [CSPs often exhibit high complexity](https://en.wikipedia.org/wiki/Complexity_of_constraint_satisfaction "Complexity of constraint satisfaction"), requiring a combination of [heuristics](https://en.wikipedia.org/wiki/Heuristics "Heuristics") and [combinatorial search](https://en.wikipedia.org/wiki/Combinatorial_search "Combinatorial search") methods to be solved in a reasonable time. [Constraint programming](https://en.wikipedia.org/wiki/Constraint_programming "Constraint programming") (CP) is the field of research that specifically focuses on tackling these kinds of problems. Additionally, the [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem "Boolean satisfiability problem") (SAT), [satisfiability modulo theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories "Satisfiability modulo theories") (SMT), [mixed integer programming](https://en.wikipedia.org/wiki/Mixed_integer_programming "Mixed integer programming") (MIP) and [answer set programming](https://en.wikipedia.org/wiki/Answer_set_programming "Answer set programming") (ASP) are all fields of research focusing on the resolution of particular forms of the constraint satisfaction problem.

Examples of problems that can be modeled as a constraint satisfaction problem include:
- [Type inference](https://en.wikipedia.org/wiki/Type_inference "Type inference")
- [Eight queens puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle "Eight queens puzzle")
- [Map coloring problem](https://en.wikipedia.org/wiki/Graph_coloring "Graph coloring")
- [Maximum cut problem](https://en.wikipedia.org/wiki/Maximum_cut "Maximum cut")
- [Sudoku](https://en.wikipedia.org/wiki/Sudoku "Sudoku"), [crosswords](https://en.wikipedia.org/wiki/Crossword "Crossword"), [futoshiki](https://en.wikipedia.org/wiki/Futoshiki "Futoshiki"), [Kakuro](https://en.wikipedia.org/wiki/Kakuro "Kakuro") (Cross Sums), [Numbrix](https://en.wikipedia.org/wiki/Numbrix "Numbrix")/[Hidato](https://en.wikipedia.org/wiki/Hidato "Hidato"), [Zebra Puzzle](https://en.wikipedia.org/wiki/Zebra_Puzzle "Zebra Puzzle"), and many other [logic puzzles](https://en.wikipedia.org/wiki/Logic_puzzle "Logic puzzle")

These are often provided with tutorials of [CP](https://en.wikipedia.org/wiki/Constraint_programming "Constraint programming"), ASP, Boolean SAT and SMT solvers. In the general case, constraint problems can be much harder, and may not be expressible in some of these simpler systems. "Real life" examples include [automated planning](https://en.wikipedia.org/wiki/Automated_planning "Automated planning"), [lexical disambiguation](https://en.wikipedia.org/wiki/Lexical_disambiguation "Lexical disambiguation"), [musicology](https://en.wikipedia.org/wiki/Musicology "Musicology"), [product configuration](https://en.wikipedia.org/wiki/Configure,_price_and_quote "Configure, price and quote") and [resource allocation](https://en.wikipedia.org/wiki/Resource_allocation "Resource allocation").

==The existence of a solution to a CSP can be viewed as a [decision problem](https://en.wikipedia.org/wiki/Decision_problem "Decision problem").== This can be decided by finding a solution, or failing to find a solution after exhaustive search ([stochastic algorithms](https://en.wikipedia.org/wiki/Stochastic_algorithm "Stochastic algorithm") typically never reach an exhaustive conclusion, while directed searches often do, on sufficiently small problems). In some cases the CSP might be known to have solutions beforehand, through some other mathematical inference process.


### Formal Definition


### Combinatorial Search 🆚 CSPs 🆚 Assignment Problems
↗ [Systematic & Combinatorial Search (Classical Search)](../Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search).md)



## Ref
