# Logic Programs & Symbolic Artificial Intelligence

[TOC]



## Res
### Related Topics
↗ [Formal System, Formal Logics, and Its Semantics](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Classical Logic (Standard Formal Logic)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)
- ↗ [Logic And Mechanized (Formal) Reasoning](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Logic%20And%20Mechanized%20(Formal)%20Reasoning.md)
↗ [Prolog (Programmation en Logique)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Prolog%20(Programmation%20en%20Logique)/Prolog%20(Programmation%20en%20Logique).md)

↗ [Symbolic Execution & Concolic Execution](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Symbolic%20Execution%20&%20Concolic%20Execution/Symbolic%20Execution%20&%20Concolic%20Execution.md)
↗ [Symbolic Execution & Constrain Solvers (Proof Assistants)](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants).md)
↗ [Automated & Generic Theorem Provers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)


### Other Resources



## Intro
### Symbolic Artificial Intelligence
> 🔗 https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence

In artificial intelligence, symbolic artificial intelligence (also known as classical artificial intelligence or logic-based artificial intelligence)[1][2] is the term for the collection of all methods in artificial intelligence research that are based on high-level symbolic (human-readable) representations of problems, logic, and search.[3] Symbolic AI used tools such as logic programming, production rules, semantic nets and frames, and it developed applications such as knowledge-based systems (in particular, expert systems), symbolic mathematics, automated theorem provers, ontologies, the semantic web, and automated planning and scheduling systems. The Symbolic AI paradigm led to important ideas in search, symbolic programming languages, agents, multi-agent systems, the semantic web, and the strengths and limitations of formal knowledge and reasoning systems.

Symbolic AI was the dominant paradigm of AI research from the mid-1950s until the mid-1990s.[4] Researchers in the 1960s and the 1970s were convinced that symbolic approaches would eventually succeed in creating a machine with artificial general intelligence and considered this the ultimate goal of their field.[5] An early boom, with early successes such as the Logic Theorist and Samuel's Checkers Playing Program, led to unrealistic expectations and promises and was followed by the first AI Winter as funding dried up.[6][7] A second boom (1969–1986) occurred with the rise of expert systems, their promise of capturing corporate expertise, and an enthusiastic corporate embrace.[8][9] That boom, and some early successes, e.g., with XCON at DEC, was followed again by later disappointment.[9] Problems with difficulties in knowledge acquisition, maintaining large knowledge bases, and brittleness in handling out-of-domain problems arose. Another, second, AI Winter (1988–2011) followed.[10] Subsequently, AI researchers focused on addressing underlying problems in handling uncertainty and in knowledge acquisition.[11] Uncertainty was addressed with formal methods such as hidden Markov models, Bayesian reasoning, and statistical relational learning.[12][13] Symbolic machine learning addressed the knowledge acquisition problem with contributions including Version Space, Valiant's PAC learning, Quinlan's ID3 decision-tree learning, case-based learning, and inductive logic programming to learn relations.[14]

Neural networks, a subsymbolic approach, had been pursued from early days and reemerged strongly in 2012. Early examples are Rosenblatt's perceptron learning work, the backpropagation work of Rumelhart, Hinton and Williams,[15] and work in convolutional neural networks by LeCun et al. in 1989.[16] However, neural networks were not viewed as successful until about 2012: "Until Big Data became commonplace, the general consensus in the Al community was that the so-called neural-network approach was hopeless. Systems just didn't work that well, compared to other methods. ... A revolution came in 2012, when a number of people, including a team of researchers working with Hinton, worked out a way to use the power of GPUs to enormously increase the power of neural networks."[17] Over the next several years, deep learning had spectacular success in handling vision, speech recognition, speech synthesis, image generation, and machine translation, though symbolic approaches continue to be useful in a few domains such as computer algebra systems and proof assistants.

However, given the inherent complexity of intelligence itself, it remains an open question whether symbolic AI will be completely supplanted by connectionist AI, or whether symbolic AI may yet experience a resurgence. More recently, work by Zhang et al. has further argued that, at least at the theoretical level, there is no clear superiority among different technological paradigms[18].


### Logic & Logic Programs in AI
> 🔗 https://en.wikipedia.org/wiki/Artificial_intelligence#Logic

Formal logic is used for reasoning and knowledge representation.[79] Formal logic comes in two main forms: propositional logic (which operates on statements that are true or false and uses logical connectives such as "and", "or", "not" and "implies")[80] and predicate logic (which also operates on objects, predicates and relations and uses quantifiers such as "Every X is a Y" and "There are some Xs that are Ys").[81]

Deductive reasoning in logic is the process of proving a new statement (conclusion) from other statements that are given and assumed to be true (the premises).[82] Proofs can be structured as proof trees, in which nodes are labelled by sentences, and children nodes are connected to parent nodes by inference rules.

Given a problem and a set of premises, problem-solving reduces to searching for a proof tree whose root node is labelled by a solution of the problem and whose leaf nodes are labelled by premises or axioms. In the case of Horn clauses, problem-solving search can be performed by reasoning forwards from the premises or backwards from the problem.[83] In the more general case of the clausal form of first-order logic, resolution is a single, axiom-free rule of inference, in which a problem is solved by proving a contradiction from premises that include the negation of the problem to be solved.[84]

Inference in both Horn clause logic and first-order logic is undecidable, and therefore intractable. However, backward reasoning with Horn clauses, which underpins computation in the logic programming language Prolog, is Turing complete. Moreover, its efficiency is competitive with computation in other symbolic programming languages.[85]

Fuzzy logic assigns a "degree of truth" between 0 and 1. It can therefore handle propositions that are vague and partially true.[86]

Non-monotonic logics, including logic programming with negation as failure, are designed to handle default reasoning.[28] Other specialized versions of logic have been developed to describe many complex domains.


### Symbolic AI Techniques & Contributions
> 🔗 https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence#Techniques_and_contributions

---
**AI programming languages**
- ↗ [Logic Programming Languages](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)

The key AI programming language in the US during the last symbolic AI boom period was [LISP](https://en.wikipedia.org/wiki/LISP_\(programming_language\) "LISP (programming language)"). [LISP](https://en.wikipedia.org/wiki/LISP_\(programming_language\) "LISP (programming language)") is the second oldest programming language after [FORTRAN](https://en.wikipedia.org/wiki/FORTRAN "FORTRAN") and was created in 1958 by [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_\(computer_scientist\) "John McCarthy (computer scientist)"). LISP provided the first [read-eval-print loop](https://en.wikipedia.org/wiki/Read-eval-print_loop "Read-eval-print loop") to support rapid program development. Compiled functions could be freely mixed with interpreted functions. Program tracing, stepping, and breakpoints were also provided, along with the ability to change values or functions and continue from breakpoints or errors. It had the first [self-hosting compiler](https://en.wikipedia.org/wiki/Self-hosting_\(compilers\) "Self-hosting (compilers)"), meaning that the compiler itself was originally written in LISP and then ran interpretively to compile the compiler code.

Other key innovations pioneered by LISP that have spread to other programming languages include:
- [Garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_\(computer_science\) "Garbage collection (computer science)")
- [Dynamic typing](https://en.wikipedia.org/wiki/Dynamic_typing "Dynamic typing")
- [Higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function "Higher-order function")
- [Recursion](https://en.wikipedia.org/wiki/Recursion "Recursion")
- [Conditionals](https://en.wikipedia.org/wiki/Conditional_\(computer_programming\) "Conditional (computer programming)")

Programs were themselves data structures that other programs could operate on, allowing the easy definition of higher-level languages.

In contrast to the US, in Europe the key AI programming language during that same period was [Prolog](https://en.wikipedia.org/wiki/Prolog "Prolog"). Prolog provided a built-in store of facts and clauses that could be queried by a [read-eval-print loop](https://en.wikipedia.org/wiki/Read-eval-print_loop "Read-eval-print loop"). The store could act as a knowledge base and the clauses could act as rules or a restricted form of logic. As a subset of first-order logic Prolog was based on [Horn clauses](https://en.wikipedia.org/wiki/Horn_clauses "Horn clauses") with a [closed-world assumption](https://en.wikipedia.org/wiki/Closed-world_assumption "Closed-world assumption")—any facts not known were considered false—and a [unique name assumption](https://en.wikipedia.org/wiki/Unique_name_assumption "Unique name assumption") for primitive terms—e.g., the identifier barack_obama was considered to refer to exactly one object. [Backtracking](https://en.wikipedia.org/wiki/Backtracking "Backtracking") and [unification](https://en.wikipedia.org/wiki/Unification_\(computer_science\) "Unification (computer science)") are built-in to Prolog.

[Alain Colmerauer](https://en.wikipedia.org/wiki/Alain_Colmerauer "Alain Colmerauer") and Philippe Roussel are credited as the inventors of Prolog. Prolog is a form of logic programming, which was invented by [Robert Kowalski](https://en.wikipedia.org/wiki/Robert_Kowalski "Robert Kowalski"). Its history was also influenced by [Carl Hewitt](https://en.wikipedia.org/wiki/Carl_Hewitt "Carl Hewitt")'s [PLANNER](https://en.wikipedia.org/wiki/PLANNER "PLANNER"), an assertional database with pattern-directed invocation of methods. For more detail see the [section on the origins of Prolog in the PLANNER article](https://en.wikipedia.org/wiki/Planner_\(programming_language\)#The_genesis_of_Prolog "Planner (programming language)").

Prolog is also a kind of [declarative programming](https://en.wikipedia.org/wiki/Declarative_programming "Declarative programming"). The logic clauses that describe programs are directly interpreted to run the programs specified. No explicit series of actions is required, as is the case with [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming "Imperative programming") languages.

Japan championed Prolog for its [Fifth Generation Project](https://en.wikipedia.org/wiki/Fifth_Generation_Project "Fifth Generation Project"), intending to build special hardware for high performance. Similarly, [LISP machines](https://en.wikipedia.org/wiki/LISP_machines "LISP machines") were built to run LISP, but as the second AI boom turned to bust these companies could not compete with new workstations that could now run LISP or Prolog natively at comparable speeds. See the [history section](https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence#A_short_history) for more detail.

[Smalltalk](https://en.wikipedia.org/wiki/Smalltalk "Smalltalk") was another influential AI programming language. For example, it introduced [metaclasses](https://en.wikipedia.org/wiki/Metaclasses "Metaclasses") and, along with [Flavors](https://en.wikipedia.org/wiki/Flavors_\(programming_language\) "Flavors (programming language)") and [CommonLoops](https://en.wikipedia.org/wiki/CommonLoops "CommonLoops"), influenced the [Common Lisp Object System](https://en.wikipedia.org/wiki/Common_Lisp_Object_System "Common Lisp Object System"), or ([CLOS](https://en.wikipedia.org/wiki/CLOS "CLOS")), that is now part of [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp "Common Lisp"), the current standard Lisp dialect. [CLOS](https://en.wikipedia.org/wiki/CLOS "CLOS") is a Lisp-based object-oriented system that allows [multiple inheritance](https://en.wikipedia.org/wiki/Multiple_inheritance "Multiple inheritance"), in addition to incremental extensions to both classes and metaclasses, thus providing a run-time [meta-object protocol](https://en.wikipedia.org/wiki/Meta-object_protocol "Meta-object protocol").

For other AI programming languages see this [list of programming languages for artificial intelligence](https://en.wikipedia.org/wiki/List_of_programming_languages_for_artificial_intelligence "List of programming languages for artificial intelligence"). Currently, [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)"), a [multi-paradigm programming language](https://en.wikipedia.org/wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"), is the most popular programming language, partly due to its extensive package library that supports [data science](https://en.wikipedia.org/wiki/Data_science "Data science"), natural language processing, and deep learning. [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)") includes a read-eval-print loop, functional elements such as [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function "Higher-order function"), and [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming "Object-oriented programming") that includes metaclasses.


---
**Search** 
- ↗ [Search & Optimization Methods for AI](../../Search%20&%20Optimization%20Methods%20for%20AI/Search%20&%20Optimization%20Methods%20for%20AI.md)
- ↗ [Basic Searching](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Basic%20Searching/Basic%20Searching.md)
- ↗ [Operations Research (OR)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Operations%20Research%20(OR).md)
	- ↗ [Combinatorial Optimization](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Combinatorial%20Optimization/Combinatorial%20Optimization.md)

Search arises in many kinds of problem solving, including [planning](https://en.wikipedia.org/wiki/Automated_planning "Automated planning"), [constraint satisfaction](https://en.wikipedia.org/wiki/Constraint_satisfaction "Constraint satisfaction"), and playing games such as [checkers](https://en.wikipedia.org/wiki/Checkers "Checkers"), [chess](https://en.wikipedia.org/wiki/Chess "Chess"), and [go](https://en.wikipedia.org/wiki/Go_\(game\) "Go (game)"). The best known AI-search tree search algorithms are [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search "Breadth-first search"), [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search "Depth-first search"), [A*](https://en.wikipedia.org/wiki/A*_search_algorithm "A* search algorithm"), and [Monte Carlo Search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search "Monte Carlo tree search"). Key search algorithms for [Boolean satisfiability](https://en.wikipedia.org/wiki/Boolean_satisfiability "Boolean satisfiability") are [WalkSAT](https://en.wikipedia.org/wiki/WalkSAT "WalkSAT"), [conflict-driven clause learning](https://en.wikipedia.org/wiki/Conflict-driven_clause_learning "Conflict-driven clause learning"), and the [DPLL algorithm](https://en.wikipedia.org/wiki/DPLL_algorithm "DPLL algorithm"). For adversarial search when playing games, [alpha-beta pruning](https://en.wikipedia.org/wiki/Alpha-beta_pruning "Alpha-beta pruning"), [branch and bound](https://en.wikipedia.org/wiki/Branch_and_bound "Branch and bound"), and [minimax](https://en.wikipedia.org/wiki/Minimax "Minimax") were early contributions.


---
**Knowledge representation & reasoning**


---
**Automated planning**
- ↗ [Automated Planning and Scheduling (AI Planning)](../../../Automated%20Planning%20and%20Scheduling%20(AI%20Planning)/Automated%20Planning%20and%20Scheduling%20(AI%20Planning).md)

The [General Problem Solver](https://en.wikipedia.org/wiki/General_Problem_Solver "General Problem Solver") (GPS) cast planning as problem-solving used [means-ends analysis](https://en.wikipedia.org/wiki/Means-ends_analysis "Means-ends analysis") to create plans. [STRIPS](https://en.wikipedia.org/wiki/Stanford_Research_Institute_Problem_Solver "Stanford Research Institute Problem Solver") took a different approach, viewing planning as theorem proving. [Graphplan](https://en.wikipedia.org/wiki/Graphplan "Graphplan") takes a least-commitment approach to planning, rather than sequentially choosing actions from an initial state, working forwards, or a goal state if working backwards. [Satplan](https://en.wikipedia.org/wiki/Satplan "Satplan") is an approach to planning where a planning problem is reduced to a [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem "Boolean satisfiability problem").


---
**Natural language processing**
- ↗ [Natural Language Processing (NLP) & Computational Linguistics](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics.md)


---
**Agents & multi-agent system**
- ↗ [Agents & Multi-Agent System](../../../Agents%20&%20Multi-Agent%20System/Agents%20&%20Multi-Agent%20System.md)

[Agents](https://en.wikipedia.org/wiki/Software_agent) are autonomous systems embedded in an environment they perceive and act upon in some sense. Russell and Norvig's standard textbook on artificial intelligence is organized to reflect agent architectures of increasing sophistication. The sophistication of agents varies from simple reactive agents, to those with a model of the world and [automated planning](https://en.wikipedia.org/wiki/Automated_planning "Automated planning") capabilities, possibly a [BDI agent](https://en.wikipedia.org/wiki/Belief%E2%80%93desire%E2%80%93intention_software_model "Belief–desire–intention software model"), i.e., one with beliefs, desires, and intentions – or alternatively a [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning "Reinforcement learning") model learned over time to choose actions – up to a combination of alternative architectures, such as a neuro-symbolic architecture that includes deep learning for perception.

In contrast, a [multi-agent system](https://en.wikipedia.org/wiki/Multi-agent_system "Multi-agent system") consists of multiple agents that communicate amongst themselves with some inter-agent communication language such as [Knowledge Query and Manipulation Language](https://en.wikipedia.org/wiki/Knowledge_Query_and_Manipulation_Language "Knowledge Query and Manipulation Language") (KQML). The agents need not all have the same internal architecture. Advantages of multi-agent systems include the ability to divide work among the agents and to increase fault tolerance when agents are lost. Research problems include [how agents reach consensus](https://en.wikipedia.org/wiki/Consensus_dynamics "Consensus dynamics"), [distributed problem solving](https://en.wikipedia.org/wiki/Cooperative_distributed_problem_solving "Cooperative distributed problem solving"), [multi-agent learning](https://en.wikipedia.org/wiki/Multi-agent_learning "Multi-agent learning"), [multi-agent planning](https://en.wikipedia.org/wiki/Multi-agent_planning "Multi-agent planning"), and [distributed constraint optimization](https://en.wikipedia.org/wiki/Distributed_constraint_optimization "Distributed constraint optimization").



## Ref
