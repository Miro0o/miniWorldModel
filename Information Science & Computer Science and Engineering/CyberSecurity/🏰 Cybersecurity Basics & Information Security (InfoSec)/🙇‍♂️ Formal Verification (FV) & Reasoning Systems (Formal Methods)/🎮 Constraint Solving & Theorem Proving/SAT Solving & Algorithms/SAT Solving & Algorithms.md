# SAT Solving & Algorithms

[TOC]



## Res
### Related Topics
↗ [Formal System, Formal Semantics, and Formal Logic](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md)
↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20(PL)%20-%20(零阶)%20命题逻辑.md)
↗ [Boolean Algebra](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Boolean%20Algebra/Boolean%20Algebra.md)

↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
- ↗ [miniSAT](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/miniSAT.md)
- ↗ [Kissat SAT Solver](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/Kissat%20SAT%20Solver.md)

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Complexity Theory & Computational Complexity](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)

↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE)/Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE).md)

↗ [Game Theory & Multi-Agent Decision-Making](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/👩🏻‍⚖️%20Rational%20Decision-Making%20Problems%20&%20Theory/Game%20Theory%20&%20Multi-Agent%20Decision-Making/Game%20Theory%20&%20Multi-Agent%20Decision-Making.md)


### Other Resources



## Intro
> [!links]
> ↗ [Complexity Theory & Computational Complexity](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
>
> ↗ [Boolean Algebra](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Boolean%20Algebra/Boolean%20Algebra.md)
> ↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20(PL)%20-%20(零阶)%20命题逻辑.md) "satisfiabililty"
> 
> The SAT problem: does there exist a model $M$ that satisfies $\Phi$? $$\exists M. M\models\Phi ?$$
>
> Common (🤔) model checking problem: does a given model $M$ satisfy a given property $\Phi$? $$M \models \Phi \ ?$$
>
> Alternatively, does a given model $M$ **partially** satisfy a given property $\Phi$ ? $$\exists x, y, z. \ M(x,y,z) \models \Phi \ ?$$
>
> ↗ [(Formal) Model Checking (MC)](../../🧳%20(Formal)%20Model%20Checking%20(MC)/(Formal)%20Model%20Checking%20(MC).md)

> 🔗 https://en.wikipedia.org/wiki/Boolean_satisfiability_problem

In [logic](https://en.wikipedia.org/wiki/Logic "Logic") and [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), the **Boolean satisfiability problem** (sometimes called **propositional satisfiability problem** and abbreviated **SATISFIABILITY**, **SAT** or **B-SAT**) asks whether there exists an [interpretation](https://en.wikipedia.org/wiki/Interpretation_\(logic\) "Interpretation (logic)") that [satisfies](https://en.wikipedia.org/wiki/Satisfiability "Satisfiability") a given [Boolean](https://en.wikipedia.org/wiki/Boolean_logic "Boolean logic") [formula](https://en.wikipedia.org/wiki/Formula_\(mathematical_logic\) "Formula (mathematical logic)"). In other words, it asks whether the formula's variables can be consistently replaced by the values TRUE or FALSE to make the formula evaluate to TRUE. If this is the case, the formula is called _satisfiable_, else _unsatisfiable_. For example, the formula "_a_ AND NOT _b_" is satisfiable because one can find the values _a_ = TRUE and _b_ = FALSE, which make (_a_ AND NOT _b_) = TRUE. In contrast, "_a_ AND NOT _a_" is unsatisfiable.

==SAT is the first problem that was proven to be [NP-complete](https://en.wikipedia.org/wiki/NP-complete "NP-complete")—this is the [Cook–Levin theorem](https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem "Cook–Levin theorem").== This means that all problems in the complexity class [NP](https://en.wikipedia.org/wiki/NP_\(complexity\) "NP (complexity)"), which includes a wide range of natural decision and optimization problems, are at most as difficult to solve as SAT. There is no known algorithm that efficiently solves each SAT problem (where "efficiently" means "deterministically in [polynomial time](https://en.wikipedia.org/wiki/Time_complexity#Polynomial_time "Time complexity")"). Although such an algorithm is generally believed not to exist, this belief has not been proven or disproven mathematically. Resolving the question of whether SAT has a [polynomial-time](https://en.wikipedia.org/wiki/Polynomial-time "Polynomial-time") algorithm would settle the [P versus NP problem](https://en.wikipedia.org/wiki/P_versus_NP_problem "P versus NP problem") - one of the most important open problems in the theory of computing.

Nevertheless, as of 2007, heuristic SAT-algorithms are able to solve problem instances involving tens of thousands of variables and formulas consisting of millions of symbols, which is sufficient for many practical SAT problems occurring in [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), [circuit design](https://en.wikipedia.org/wiki/Circuit_design "Circuit design"), and [automatic theorem proving](https://en.wikipedia.org/wiki/Automatic_theorem_proving "Automatic theorem proving").


### Complexity of SAT Problem
> 🔗 [Cook–Levin theorem](https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem)
> 🔗 https://en.wikipedia.org/wiki/Boolean_satisfiability_problem

SAT was the first problem known to be [NP-complete](https://en.wikipedia.org/wiki/NP-complete "NP-complete"), as proved by [Stephen Cook](https://en.wikipedia.org/wiki/Stephen_Cook "Stephen Cook") at the [University of Toronto](https://en.wikipedia.org/wiki/University_of_Toronto "University of Toronto") in 1971 and independently by [Leonid Levin](https://en.wikipedia.org/wiki/Leonid_Levin "Leonid Levin") at the [Russian Academy of Sciences](https://en.wikipedia.org/wiki/Russian_Academy_of_Sciences#The_Academy_of_Sciences_of_the_USSR "Russian Academy of Sciences") in 1973. Until that time, the concept of an NP-complete problem did not even exist. The proof shows how every decision problem in the [complexity class](https://en.wikipedia.org/wiki/Complexity_class "Complexity class") [NP](https://en.wikipedia.org/wiki/NP_\(complexity\) "NP (complexity)") can be [reduced](https://en.wikipedia.org/wiki/Reduction_\(complexity\) "Reduction (complexity)") to the SAT problem for CNF formulas, sometimes called **CNFSAT**. A useful property of Cook's reduction is that it preserves the number of accepting answers. For example, deciding whether a given [graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\) "Graph (discrete mathematics)") has a [3-coloring](https://en.wikipedia.org/wiki/Graph_coloring#Vertex_coloring "Graph coloring") is another problem in NP; if a graph has 17 valid 3-colorings, then the SAT formula produced by the Cook–Levin reduction will have 17 satisfying assignments.

NP-completeness only refers to the run-time of the worst case instances. Many of the instances that occur in practical applications can be solved much more quickly. See [§Algorithms for solving SAT](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#Algorithms_for_solving_SAT) below.
#### 3-Satisfiability (3SAT)
> 🔗 https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#3-satisfiability

#### Special Instances of 3SAT
##### Conjunctive Normal Form
Conjunctive normal form (in particular with 3 literals per clause) is often considered the canonical representation for SAT formulas. As shown above, the general SAT problem reduces to 3-SAT, the problem of determining satisfiability for formulas in this form.
##### Linear SAT
A 3-SAT formula is _Linear SAT_ (_LSAT_) if each clause (viewed as a set of literals) intersects at most one other clause, and, moreover, if two clauses intersect, then they have exactly one literal in common. An LSAT formula can be depicted as a set of disjoint semi-closed intervals on a line. Deciding whether an LSAT formula is satisfiable is NP-complete.
##### 2-Satisfiability
> Main article: [2-satisfiability](https://en.wikipedia.org/wiki/2-satisfiability "2-satisfiability")

SAT is easier if the number of literals in a clause is limited to at most 2, in which case the problem is called **[2-SAT](https://en.wikipedia.org/wiki/2-satisfiability "2-satisfiability")**. This problem can be solved in polynomial time, and in fact is [complete](https://en.wikipedia.org/wiki/NL-complete "NL-complete") for the complexity class [NL](https://en.wikipedia.org/wiki/NL_\(complexity\) "NL (complexity)"). If additionally all OR operations in literals are changed to [XOR](https://en.wikipedia.org/wiki/Exclusive_or "Exclusive or") operations, then the result is called **exclusive-or 2-satisfiability**, which is a problem complete for the complexity class [SL](https://en.wikipedia.org/wiki/SL_\(complexity\) "SL (complexity)") = [L](https://en.wikipedia.org/wiki/L_\(complexity\) "L (complexity)").
##### Horn-Satisfiability
> Main article: [Horn-satisfiability](https://en.wikipedia.org/wiki/Horn-satisfiability "Horn-satisfiability")

##### Random K-SAT

#### Not 3SAT problems
##### Disjunctive normal form
SAT is trivial if the formulas are restricted to those in **[disjunctive normal form](https://en.wikipedia.org/wiki/Disjunctive_normal_form "Disjunctive normal form")**, that is, they are a disjunction of conjunctions of literals. Such a formula is indeed satisfiable if and only if at least one of its conjunctions is satisfiable, and a conjunction is satisfiable if and only if it does not contain both _x_ and NOT _x_ for some variable _x_. This can be checked in linear time. Furthermore, if they are restricted to being in **full disjunctive normal form**, in which every variable appears exactly once in every conjunction, they can be checked in constant time (each conjunction represents one satisfying assignment). But it can take exponential time and space to convert a general SAT problem to disjunctive normal form; to obtain an example, exchange "∧" and "∨" in the [above](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#Definitions) exponential blow-up example for conjunctive normal forms.
##### Exactly-1 3-satisfiability
> Main article: [1-in-3-SAT](https://en.wikipedia.org/wiki/1-in-3-SAT "1-in-3-SAT")

Another NP-complete variant of the 3-satisfiability problem is the **one-in-three 3-SAT** (also known variously as **1-in-3-SAT** and **exactly-1 3-SAT**). Given a conjunctive normal form with three literals per clause, the problem is to determine whether there exists a truth assignment to the variables so that each clause has _exactly_ one TRUE literal (and thus exactly two FALSE literals).
##### Not-all-equal 3-satisfiability
> Main article: [Not-all-equal 3-satisfiability](https://en.wikipedia.org/wiki/Not-all-equal_3-satisfiability "Not-all-equal 3-satisfiability")

Another variant is the **not-all-equal 3-satisfiability** problem (also called **NAE3SAT**). Given a conjunctive normal form with three literals per clause, the problem is to determine if an assignment to the variables exists such that in no clause all three literals have the same truth value. This problem is NP-complete, too, even if no negation symbols are admitted, by Schaefer's dichotomy theorem.
##### XOR-satisfiability
> Main article: [XOR-SAT](https://en.wikipedia.org/wiki/XOR-SAT "XOR-SAT")

Another special case is the class of problems where each clause contains XOR (i.e. [exclusive or](https://en.wikipedia.org/wiki/Exclusive_or "Exclusive or")) rather than (plain) OR operators. This is in [P](https://en.wikipedia.org/wiki/P_\(complexity_class\) "P (complexity class)"), since an XOR-SAT formula can also be viewed as a system of linear equations mod 2, and can be solved in cubic time by [Gaussian elimination](https://en.wikipedia.org/wiki/Gaussian_elimination "Gaussian elimination")


### UNSAT Core



## SAT (Constraint) Encoding
### At-Most-One (AMO)
Naive /Pairewise encoding:

#### Sequential Encoding

#### Sequential Encoding

#### Product Encoding

#### Binary Encoding


### At-Most-K (AMK) & Cardinality Constraint
Naive /Pairewise encoding:

#### Sequential Counter

#### Totalizer



## SAT Solving Algorithms
> [!links]
> ↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20(PL)%20-%20(零阶)%20命题逻辑.md) "resolution" "subsumption"
> ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)

> 🔗 https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#Algorithms_for_solving_SAT

Since the SAT problem is NP-complete, only algorithms with exponential worst-case complexity are known for it. In spite of this, efficient and scalable algorithms for SAT were developed during the 2000s and have contributed to dramatic advances in the ability to automatically solve problem instances involving tens of thousands of variables and millions of constraints (i.e. clauses). Examples of such problems in [electronic design automation](https://en.wikipedia.org/wiki/Electronic_design_automation "Electronic design automation") (EDA) include [formal equivalence checking](https://en.wikipedia.org/wiki/Formal_equivalence_checking "Formal equivalence checking"), [model checking](https://en.wikipedia.org/wiki/Model_checking "Model checking"), [formal verification](https://en.wikipedia.org/wiki/Formal_verification "Formal verification") of [pipelined microprocessors](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor"), [automatic test pattern generation](https://en.wikipedia.org/wiki/Automatic_test_pattern_generation "Automatic test pattern generation"), [routing](https://en.wikipedia.org/wiki/Routing_\(electronic_design_automation\) "Routing (electronic design automation)") of [FPGAs](https://en.wikipedia.org/wiki/FPGA "FPGA"), [planning](https://en.wikipedia.org/wiki/Automated_planning_and_scheduling "Automated planning and scheduling"), and [scheduling problems](https://en.wikipedia.org/wiki/Scheduling_algorithm "Scheduling algorithm"), and so on. A SAT-solving engine is also considered to be an essential component in the [electronic design automation](https://en.wikipedia.org/wiki/Electronic_design_automation "Electronic design automation") toolbox.

Major techniques used by modern SAT solvers include the [Davis–Putnam–Logemann–Loveland algorithm](https://en.wikipedia.org/wiki/Davis%E2%80%93Putnam%E2%80%93Logemann%E2%80%93Loveland_algorithm "Davis–Putnam–Logemann–Loveland algorithm") (or DPLL), [conflict-driven clause learning](https://en.wikipedia.org/wiki/Conflict-driven_clause_learning "Conflict-driven clause learning") (CDCL), and [stochastic](https://en.wikipedia.org/wiki/Stochastic "Stochastic") [local search](https://en.wikipedia.org/wiki/Local_search_\(constraint_satisfaction\) "Local search (constraint satisfaction)") algorithms such as [WalkSAT](https://en.wikipedia.org/wiki/WalkSAT "WalkSAT"). Almost all SAT solvers include time-outs, so they will terminate in reasonable time even if they cannot find a solution. Different SAT solvers will find different instances easy or hard, and some excel at proving unsatisfiability, and others at finding solutions. Recent attempts have been made to learn an instance's satisfiability using deep learning techniques.

SAT solvers are developed and compared in SAT-solving contests. Modern SAT solvers are also having significant impact on the fields of software verification, constraint solving in artificial intelligence, and [operations research](https://en.wikipedia.org/wiki/Operations_research "Operations research"), among others.

Theoretical algorithms with increasingly better worst-case runtime guarantees have been given in the last decades, including an $O^{*}(1.0638^{L})$ algorithm for clause sets of length (total literal count) $L$, an $O^{*}(1.2226^{m})$ algorithm for sets of $m$ clauses, and an $O^{*}(1.32793^{n})$ algorithm for 3-SAT with $n$ variables. Here, the notation "$O^{*}(.)$" means "up to a polynomial factor", i.e. $O^{*}(f(n))=O(f(n)n^{O(1)})$. Earlier runtime guarantees are shown in the diagram.


### Brief History of SAT Solving
Deductive
• Davis-Putnam 1960 [DP]
• Based on “resolution”
Backtracking Search
• Davis, Logemann and Loveland 1962 [DLL, DPLL]
• Exhaustive search for satisfying assignment
Conflict Driven Clause Learning [CDCL]
• GRASP: Integrate a constraint learning procedure, 1996
Locality Based Search
• Emphasis on exhausting local sub-spaces, e.g., Chaff, MiniSat and others, 2001 onwards
• Added focus on efficient implementation
“Pre-processing”
• Peephole optimization, e.g., MiniSat, 2005



## Extensions of SAT
> 🔗 https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#Extensions_of_SAT

An extension that has gained significant popularity since 2003 is **[satisfiability modulo theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories "Satisfiability modulo theories")** (**SMT**) that can enrich CNF formulas with linear constraints, arrays, all-different constraints, [uninterpreted functions](https://en.wikipedia.org/wiki/Uninterpreted_function "Uninterpreted function"), etc. Such extensions typically remain NP-complete, but very efficient solvers are now available that can handle many such kinds of constraints.
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)

The satisfiability problem becomes more difficult if both "for all" ([∀](https://en.wikipedia.org/wiki/%E2%88%80 "∀")) and "there exists" ([∃](https://en.wikipedia.org/wiki/%E2%88%83 "∃")) [quantifiers](https://en.wikipedia.org/wiki/Quantifier_\(logic\) "Quantifier (logic)") are allowed to bind the Boolean variables. An example of such an expression would be $∀x ∀y ∃z \ (x ∨ y ∨ z) ∧ (¬x ∨ ¬y ∨ ¬z)$; it is valid, since for all values of _x_ and _y_, an appropriate value of _z_ can be found, viz. _z_=TRUE if both _x_ and _y_ are FALSE, and _z_=FALSE else. SAT itself (tacitly) uses only ∃ quantifiers. If only ∀ quantifiers are allowed instead, the so-called **[tautology](https://en.wikipedia.org/wiki/Tautology_\(logic\) "Tautology (logic)") problem** is obtained, which is [co-NP-complete](https://en.wikipedia.org/wiki/Co-NP-complete "Co-NP-complete"). If any number of both quantifiers are allowed, the problem is called the **[quantified Boolean formula problem](https://en.wikipedia.org/wiki/Quantified_Boolean_formula_problem "Quantified Boolean formula problem")** (**QBF**), which can be shown to be [PSPACE-complete](https://en.wikipedia.org/wiki/PSPACE-complete "PSPACE-complete"). It is widely believed that PSPACE-complete problems are strictly harder than any problem in NP, although this has not yet been proved.

Ordinary SAT asks if there is at least one variable assignment that makes the formula true. A variety of variants deal with the number of such assignments:
- **ALL-SAT**: find all satisfying assignments.
	- blocking clause
	- incremental SAT
- **Cardinal Constraints**: at most k variables are true.
- **MAJ-SAT** asks if at least half of all assignments make the formula TRUE. It is known to be complete for [PP](https://en.wikipedia.org/wiki/PP_\(complexity\) "PP (complexity)"), a probabilistic class. Surprisingly, **MAJ-kSAT** is demonstrated to be in P for every finite integer k.
- **[#SAT](https://en.wikipedia.org/wiki/Sharp-SAT "Sharp-SAT")**, the problem of counting how many variable assignments satisfy a formula, is a counting problem, not a decision problem, and is [#P-complete](https://en.wikipedia.org/wiki/Sharp-P-complete "Sharp-P-complete").
- **UNIQUE SAT** is the problem of determining whether a formula has exactly one assignment. It is complete for [US](https://en.wikipedia.org/w/index.php?title=US_\(complexity\)&action=edit&redlink=1 "US (complexity) (page does not exist)"), the [complexity class](https://en.wikipedia.org/wiki/Complexity_class "Complexity class") describing problems solvable by a non-deterministic polynomial time [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine") that accepts when there is exactly one nondeterministic accepting path and rejects otherwise.
- **UNAMBIGUOUS-SAT** is the name given to the satisfiability problem when the input formula is [promised](https://en.wikipedia.org/wiki/Promise_problem "Promise problem") to have at most one satisfying assignment. The problem is also called **USAT**. A solving algorithm for UNAMBIGUOUS-SAT is allowed to exhibit any behavior, including endless looping, on a formula having several satisfying assignments. Although this problem seems easier, Valiant and Vazirani have [shown](https://en.wikipedia.org/wiki/Valiant%E2%80%93Vazirani_theorem "Valiant–Vazirani theorem") that if there is a practical (i.e. [randomized polynomial-time](https://en.wikipedia.org/wiki/Bounded-error_probabilistic_polynomial "Bounded-error probabilistic polynomial")) algorithm to solve it, then all problems in [NP](https://en.wikipedia.org/wiki/NP_\(complexity_class\) "NP (complexity class)") can be solved just as easily.
- **MAX-SAT**, the [maximum satisfiability problem](https://en.wikipedia.org/wiki/Maximum_satisfiability_problem "Maximum satisfiability problem"), is an [FNP](https://en.wikipedia.org/wiki/FNP_\(complexity\) "FNP (complexity)") generalization of SAT. It asks for the maximum number of clauses which can be satisfied by any assignment. It has efficient [approximation algorithms](https://en.wikipedia.org/wiki/Approximation_algorithm "Approximation algorithm"), but is NP-hard to solve exactly. Worse still, it is [APX](https://en.wikipedia.org/wiki/APX "APX")-complete, meaning there is no [polynomial-time approximation scheme](https://en.wikipedia.org/wiki/Polynomial-time_approximation_scheme "Polynomial-time approximation scheme") (PTAS) for this problem unless P=NP.
- **Partial MAX-SAT**
- **WMSAT** is the problem of finding an assignment of minimum weight that satisfy a monotone Boolean formula (i.e. a formula without any negation). Weights of propositional variables are given in the input of the problem. The weight of an assignment is the sum of weights of true variables. That problem is NP-complete.

Other generalizations include satisfiability for [first](https://en.wikipedia.org/wiki/First-order_predicate_calculus "First-order predicate calculus")- and [second-order logic](https://en.wikipedia.org/wiki/Second-order_logic "Second-order logic"), [constraint satisfaction problems](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem "Constraint satisfaction problem"), [0-1 integer programming](https://en.wikipedia.org/wiki/0-1_integer_programming "0-1 integer programming").



## Ref
