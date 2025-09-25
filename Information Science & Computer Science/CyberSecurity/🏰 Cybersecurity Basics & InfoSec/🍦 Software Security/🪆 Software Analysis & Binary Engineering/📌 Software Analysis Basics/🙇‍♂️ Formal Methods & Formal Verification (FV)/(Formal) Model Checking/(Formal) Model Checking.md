# (Formal) Model Checking

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [Computational Complexity Theory](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/Computational%20Complexity%20Theory/Computational%20Complexity%20Theory.md)
↗ [Computationally Hard Problems](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/Computational%20Complexity%20Theory/Computationally%20Hard%20Problems.md)

↗ [ICT System Reliability (Correctness) & Verification](../../../../../../⛈️%20Risk%20Management/🦟%20Vulnerabilities/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)
↗ [Software Quality Assurance (SQA)](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)

↗ [Probability Models & Stochastic Process](../../../../../../../🧮%20Mathematics/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Probability%20Models%20&%20Stochastic%20Process.md)
- ↗ [Markov Chains (MC)](../../../../../../../🧮%20Mathematics/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)/Markov%20Chains%20(MC).md)

↗ [Temporal Logic (时态逻辑) & Computation-Tree Logic (CTL*) Family](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family.md)
- ↗ [Linear Temporal Logic (LTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Linear%20Temporal%20Logic%20(LTL).md)
- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)


### Related Tools
https://en.wikipedia.org/wiki/List_of_model_checking_tools
Here is a list of significant model-checking tools:
- Afra: a model checker for [Rebeca](https://en.wikipedia.org/wiki/Rebeca_\(programming_language\) "Rebeca (programming language)") which is an actor-based language for modeling concurrent and reactive systems
- [Alloy](https://en.wikipedia.org/wiki/Alloy_\(specification_language\) "Alloy (specification language)") (Alloy Analyzer)
- [BLAST](https://en.wikipedia.org/wiki/BLAST_model_checker "BLAST model checker") (Berkeley Lazy Abstraction Software Verification Tool)
- [CADP](https://en.wikipedia.org/wiki/CADP "CADP") (Construction and Analysis of Distributed Processes) a toolbox for the design of communication protocols and distributed systems
- [CPAchecker](https://en.wikipedia.org/wiki/CPAchecker "CPAchecker"): an open-source software model checker for C programs, based on the CPA framework
- [ECLAIR](https://en.wikipedia.org/wiki/ECLAIR "ECLAIR"): a platform for the automatic analysis, verification, testing, and transformation of C and C++ programs
- [FDR2](https://en.wikipedia.org/wiki/FDR2 "FDR2"): a model checker for verifying real-time systems modelled and specified as [CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes "Communicating sequential processes") Processes
- [FizzBee](https://en.wikipedia.org/w/index.php?title=FizzBee&action=edit&redlink=1 "FizzBee (page does not exist)"): an easier to use alternative to TLA+, that uses Python-like specification language, that has both behavioral modeling like TLA+ and probabilistic modeling like PRISM
- [ISP](https://en.wikipedia.org/wiki/ISP_Formal_Verification_Tool "ISP Formal Verification Tool") code level verifier for [MPI](https://en.wikipedia.org/wiki/Message_Passing_Interface "Message Passing Interface") programs
- [Java Pathfinder](https://en.wikipedia.org/wiki/Java_Pathfinder "Java Pathfinder"): an open-source model checker for Java programs
- [Libdmc](https://en.wikipedia.org/wiki/Libdmc "Libdmc"): a framework for distributed model checking
- [mCRL2](https://en.wikipedia.org/wiki/MCRL2 "MCRL2") Toolset, [Boost Software License](https://en.wikipedia.org/wiki/Boost_Software_License "Boost Software License"), Based on [ACP](https://en.wikipedia.org/wiki/Algebra_of_Communicating_Processes "Algebra of Communicating Processes")
- [NuSMV](https://en.wikipedia.org/wiki/NuSMV "NuSMV"): a new symbolic model checker
- [PAT](https://en.wikipedia.org/wiki/PAT_\(model_checker\) "PAT (model checker)"): an enhanced simulator, model checker and refinement checker for concurrent and real-time systems
- [Prism](https://www.prismmodelchecker.org/): a probabilistic symbolic model checker
	- **PRISM** is a _probabilistic model checker_, a tool for formal modelling and analysis of systems that exhibit random or probabilistic behaviour. It has been used to analyse systems from many different [application domains](https://www.prismmodelchecker.org/casestudies/), including communication and multimedia protocols, randomised distributed algorithms, security protocols, biological systems and many others.
- [Roméo](https://en.wikipedia.org/wiki/Romeo_Model_Checker "Romeo Model Checker"): an integrated tool environment for modelling, simulation, and verification of real-time systems modelled as parametric, time, and stopwatch Petri nets
- [SPIN](https://en.wikipedia.org/wiki/SPIN_model_checker "SPIN model checker"): a general tool for verifying the correctness of distributed software models in a rigorous and mostly automated fashion
- [Storm](https://en.wikipedia.org/w/index.php?title=STORM_\(model_checker\)&action=edit&redlink=1 "STORM (model checker) (page does not exist)"):[[22]](https://en.wikipedia.org/wiki/Model_checking#cite_note-22) A model checker for probabilistic systems.
- [TAPAs](https://en.wikipedia.org/wiki/TAPAs_model_checker "TAPAs model checker"): a tool for the analysis of process algebra
- [TAPAAL](https://en.wikipedia.org/wiki/TAPAAL "TAPAAL"): an integrated tool environment for modelling, validation, and verification of Timed-Arc [Petri Nets](https://en.wikipedia.org/wiki/Petri_Nets "Petri Nets")
- [TLA+](https://en.wikipedia.org/wiki/TLA%2B "TLA+") model checker by [Leslie Lamport](https://en.wikipedia.org/wiki/Leslie_Lamport "Leslie Lamport")
- [UPPAAL](https://en.wikipedia.org/wiki/UPPAAL "UPPAAL"): an integrated tool environment for modelling, validation, and verification of real-time systems modelled as networks of timed automata
- [Zing](https://en.wikipedia.org/w/index.php?title=Zing_\(model-checker\)&action=edit&redlink=1 "Zing (model-checker) (page does not exist)")[[23]](https://en.wikipedia.org/wiki/Model_checking#cite_note-23) – experimental tool from [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft") to validate state models of software at various levels: high-level protocol descriptions, work-flow specifications, web services, device drivers, and protocols in the core of the operating system. Zing is currently being used for developing drivers for Windows.


### Other Resources
Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

https://youtu.be/VHWEldcSx14?si=dj9hdtmGVH3jbsmo
Lecture 1 - Introduction (Model Checking) | Prof.Katoen RWTH Aachen University


### Research Papers
🎬【\[EuroSys'24\] SandTable: Scalable Distributed System Model Checking】 https://www.bilibili.com/video/BV1c1421i7iG/
🏠 https://github.com/tangruize/SandTable



## Intro
> 🤖 Gemini 2.5

Model checking is ==an automated verification technique that checks if a formal model of a system (either hardware or software) satisfies a given set of properties, often expressed in temporal logic==. It systematically explores the system's states and, if a property is violated, provides a [counterexample](https://www.google.com/search?newwindow=1&cs=0&sca_esv=2bd8a92f2f2a46b0&sxsrf=AE3TifOtrlSTvOaHDAvElReERu0Ozo3b5A%3A1757159855993&q=counterexample&sa=X&ved=2ahUKEwiA5u_HisSPAxUERvEDHU_tNmwQxccNegQIAxAB&mstk=AUtExfC1OerJGfdHuSlUYP3WY3HAVNtyr8QZZMnP5oq--0ofnF47BYj0g602fYr84hgV9XxqHoZsGZ95JGsbAZD9UTwEY6RrBEfCazLRtkojTOhnpL61rbPOG4Zm97EMppxj2Rjv0K83c78IbEagL66Gqud9Ug8gbAN8NUMsb815IxfXsTQ&csui=3), which is a trace of execution showing the failure, making it a powerful tool for debugging. This method is superior to traditional testing because it is exhaustive and can find bugs that simulation might miss.

> 🔗 https://en.wikipedia.org/wiki/Model_checking

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **model checking** or **property checking** is a method for checking whether a [finite-state model](https://en.wikipedia.org/wiki/Finite-state_machine "Finite-state machine") of a system meets a given [specification](https://en.wikipedia.org/wiki/Formal_specification "Formal specification") (also known as [correctness](https://en.wikipedia.org/wiki/Correctness_\(computer_science\) "Correctness (computer science)")). This is typically associated with [hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware") or [software systems](https://en.wikipedia.org/wiki/Software_system "Software system"), where the specification contains liveness requirements (such as avoidance of [livelock](https://en.wikipedia.org/wiki/Livelock "Livelock")) as well as safety requirements (such as avoidance of states representing a [system crash](https://en.wikipedia.org/wiki/System_crash "System crash")).

In order to solve such a problem [algorithmically](https://en.wikipedia.org/wiki/Algorithm "Algorithm"), both the model of the system and its specification are formulated in some precise mathematical language. To this end, the problem is formulated as a task in [logic](https://en.wikipedia.org/wiki/Logic "Logic"), namely to check whether a [structure](https://en.wikipedia.org/wiki/Structure_\(mathematical_logic\) "Structure (mathematical logic)") satisfies a given logical formula. This general concept applies to many kinds of logic and many kinds of structures. A simple model-checking problem consists of verifying whether a formula in the [propositional logic](https://en.wikipedia.org/wiki/Propositional_logic "Propositional logic") is satisfied by a given structure.

> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

**Model-based** verification techniques are based on models describing the possible system behavior in a mathematically precise and unambiguous manner. It turns out that – prior to any form of verification – the accurate modeling of systems often leads to the discovery of incompleteness, ambiguities, and inconsistencies in informal system specifications. Such problems are usually only discovered at a much later stage of the design. The system models are accompanied by algorithms that systematically explore all states of the system model. This provides the basis for a whole range of verification techniques ranging from an exhaustive exploration (model checking) to experiments with a restrictive set of scenarios in the model (simulation), or in reality (testing).

...

==Model checking is a verification technique that explores all possible system states in a
brute-force manner.== Similar to a computer chess program that checks possible moves, a
model checker, the software tool that performs the model checking, examines all possible
system scenarios in a systematic manner. In this way, it can be shown that a given system
model truly satisfies a certain property. It is a real challenge to examine the largest possible
state spaces that can be treated with current means, i.e., processors and memories. State-
of-the-art model checkers can handle state spaces of about $10^8$ to $10^9$ states with explicit
state-space enumeration. Using clever algorithms and tailored data structures, larger state
spaces ($10^{20}$ up to even $10^{476}$ states) can be handled for specific problems. Even the subtle
errors that remain undiscovered using emulation, testing and simulation can potentially
be revealed using model checking.

![|600](../../../../../../../../Assets/Pics/Screenshot%202025-08-29%20at%2015.57.08.png)

...

==Model checking is an automated technique that, given a finite-state model of a system and a formal property, systematically checks whether this property holds for (a given state in) that model.==

...

Model checking requires a model of the system under consideration and a desired property and systematically checks whether or not the given model satisfies this property. Typical properties that can be checked are deadlock freedom, invariants, and request-response properties. Model checking is an automated technique to check the absence of errors (i.e., property violations) and alternatively can be considered as an intelligent and effective debugging technique. It is a general approach and is applied in areas like hardware verification and software engineering. Due to unremitting improvements of underlying algorithms and data structures together with hardware technology improvements, model-checking techniques that two decades ago only worked for simple examples are nowadays applicable to more realistic designs. It is fair to say that in the last two decades model checking has developed as a mature and heavily used verification and debugging technique.

The concepts of model checking have their roots in mathematical foundations such as propositional logic, automata theory and formal languages, data structures, and graph algorithms. It is expected that readers are familiar with the basics of these topics when starting with our book, although an appendix is provided that summarizes the essentials. Knowledge on complexity theory is required for the theoretical complexity considerations of the various model-checking algorithms.

![Language_and_Programming_Language_Processing.md | 800](../../../../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>


### Process of Model Checking
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

![|600](../../../../../../../../Assets/Pics/Screenshot%202025-08-29%20at%2015.57.08.png)

In applying model checking to a design the following diﬀerent phases can be distinguished:
- **Modeling** phase:
	- Choose a type of formal model (a mathematical representation) for the system. Usually this is a TS (transition system) or a graph, like a computation tree.
		- Timed Automata
		- Probabilistic Systems
	- Model the system under consideration using the model description language of the model checker at hand;
	- As a first sanity check and quick assessment of the model perform some simulations;
	- Formalize the property to be checked using the property specification language.
		- Properties to be checked:
			- Bowen Alpern and Fred B. Schneider. Defining liveness. Information ProcessingLetters, 21(4):181–185, October 1985.
				- **Safety Properties:** "Nothing bad ever happens." An example might be, "The elevator doors are never open while the elevator is moving."
				- **Liveness Properties**: "Something good will eventually happen." For example, "If a request button is pressed, the elevator will eventually arrive at that floor."
			- Taxonomy
				- Linear-Time Properties
				- Regular Properties
		- Property Specification Languages:
			- Temporal Logic
				- Linear Temporal Logic
				- Computation Tree Logic
- **Running** phase: run the model checker to check the validity of the property in the system model. 
	- A model checking algorithm systematically explores all possible states and transitions in the model.  This exhaustive search determines if the model satisfies all the specified properties.
- **Analysis** phase:
	- Property satisfied? -> 
		- Check next property (if any); 
	- Property violated? ->
		- Analyze generated counterexample by simulation;
		- Refine the model, design, or property;
		- Repeat the entire procedure.
	- Out of memory?→
		- Try to reduce the model and try again.
			- Partial Order Reduction
		- Comparison of models: Equivalences and Abstraction

In addition to these steps, the entire verification should be planned, administered, and organized. This is called **verification organization**. 


### Pros & Cons of Model Checking
> Model checking is an effective technique to expose potential design errors.

> 🤖 Gemini 2.5

Advantages and Limitations
- A major advantage of model checking is its **exhaustiveness**. It can find subtle errors and edge cases that are difficult or impossible to discover through traditional testing or simulation. It is a highly automated process, which reduces the potential for human error.
- However, a key limitation is the **state explosion problem.** As the complexity of a system increases, the number of possible states can grow exponentially, making it computationally intractable to explore every state. This is why model checking is typically applied to finite-state systems and why researchers continue to develop new techniques, such as symbolic model checking and abstraction, to handle larger state spaces.

> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

The strengths of model checking:
- It is a general verification approach that is applicable to a wide range of applications such as embedded systems, software engineering, and hardware design.
- It supports partial verification, i.e., properties can be checked individually, thus allowing focus on the essential properties first. No complete requirement specification is needed.
- It is not vulnerable to the likelihood that an error is exposed; this contrasts with testing and simulation that are aimed at tracing the most probable defects.
- It provides diagnostic information in case a property is invalidated; this is very useful for debugging purposes.
- It is a potential “push-button” technology; the use of model checking requires neither a high degree of user interaction nor a high degree of expertise.
- It enjoys a rapidly increasing interest by industry; several hardware companies have started their in-house verification labs, job oﬀers with required skills in model checking frequently appear, and commercial model checkers have become available.
- It can be easily integrated in existing development cycles; its learning curve is not very steep, and empirical studies indicate that it may lead to shorter development times.
- It has a sound and mathematical underpinning; it is based on theory of graph algorithms, data structures, and logic.

The weaknesses of model checking:
- It is mainly appropriate to control-intensive applications and less suited for data-intensive applications as data typically ranges over infinite domains.
- Its applicability is subject to decidability issues; for infinite-state systems, or reasoning about abstract data types (which requires undecidable or semi-decidable logics), model checking is in general not eﬀectively computable.
- It verifies a system model, and not the actual system (product or prototype) itself; any obtained result is thus as good as the system model. Complementary techniques, such as testing, are needed to find fabrication faults (for hardware) or coding errors (for software).
- It checks only stated requirements, i.e., there is no guarantee of completeness. The validity of properties that are not checked cannot be judged.
- It suﬀers from the state-space explosion problem, i.e., the number of states needed to model the system accurately may easily exceed the amount of available computer memory. Despite the development of several very eﬀective methods to combat this problem (see Chapters 7 and 8), models of realistic systems may still be too large to fit in memory.
- Its usage requires some expertise in finding appropriate abstractions to obtain smaller system models and to state properties in the logical formalism used.
- It is not guaranteed to yield correct results: as with any tool, a model checker may contain software defects.
- It does not allow checking generalizations: in general, checking systems with an arbitrary number of components, or parameterized systems, cannot be treated. Model checking can, however, suggest results for arbitrary parameters that may be verified using proof assistants.


### History of Development of Model Checking
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

Model checking. Model checking originates from the independent work of two pairs in the early eighties: Clarke and Emerson [86] and Queille and Sifakis [347]. The term model checking was coined by Clarke and Emerson. The brute-force examination of the entire state space in model checking can be considered as an extension of automated protocol validation techniques by Hajek [182] and West [419, 420]. While these earlier techniques were restricted to checking the absence of deadlocks or livelocks, model checking allows for the examination of broader classes of properties. 
- Introductory papers on model checking can be found in [94, 95, 96, 293, 426]. 
- The limitations of model checking were discussed by Apt and Kozen [17]. 
- More information on model checking is available in the earlier books by Holzmann [205], McMillan [288], and Kurshan [250] and the more recent works by Clarke, Grumberg, and Peled [92], Huth and Ryan [219], Schneider [365], and B´ erard et al. [44]. The model-checking trajectory has recently been described by Ruys and Brinksma [360].


### Examples of Model Checkers in Real World Software



## 1️⃣ System Modeling
> ↗ [Mathematical Modeling & Real World Problem Solving](../../../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)


### (Symbolic) Transition Systems
> ↗ [Automata Theory and (Formal) Language Theory](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
> ↗ [Formal Semantics and Programming Language](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
> 
> ↗ [The Essence of Computing - Program](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md)
> - programs are transition systems
> - hardware circuits are transition systems
> - communication processes are transition systems
> - etc.

A transition system $TS$ is a tuple $(S,Act,\to,I,AP,L)$ where
- $S$ is a set of states,
- $Act$ is a set of actions,
- $\to \subseteq S \times Act \times S$ is a transition relation,
- $I \subseteq S$ is a set of initial states,
- $AP$ is a set of atomic propositions, 
- $L$: $S→AP^2$ is a labeling function.

$TS$ is called **finite** if $S$, $Act$, and $AP$ are **finite**.

It is important to realize that in case a state has more than one outgoing transition, the
“next” transition is chosen in a purely **nondeterministic** fashion. That is, the outcome of
this selection process is not known a priori, and, hence, no statement can be made about the likelihood with which a certain transition is selected. Similarly, when the set of initial states consists of more than one state, the start state is selected nondeterministically.

For convenience, we write $s \xrightarrow[]{\alpha}s'$ instead of $(s,α,s') \in \to$.

The labeling function $L$ relates a set $L(s) \in AP^2$ of atomic propositions to any state $s$. $L(s)$ intuitively stands for exactly those atomic propositions $a \in AP$ which are satisfied by state $s$. Given that $Φ$ is a propositional logic formula, then $s$ satisfies the formula $Φ$ if the evaluation induced by $L(s)$ makes the formula Φ true; that is: $s |= Φ \ iﬀ \ L(s) |= Φ$.
####  Kripke Structure
> 🔗 https://en.wikipedia.org/wiki/Kripke_structure_(model_checking)

A **Kripke structure** is a variation of the [transition system](https://en.wikipedia.org/wiki/Transition_system "Transition system"), originally proposed by [Saul Kripke](https://en.wikipedia.org/wiki/Saul_Kripke "Saul Kripke"), used in [model checking](https://en.wikipedia.org/wiki/Model_checking "Model checking") to represent the behavior of a system. It consists of a [graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\) "Graph (discrete mathematics)") whose nodes represent the reachable states of the system and whose edges represent state transitions, together with a labelling function which maps each node to a set of properties that hold in the corresponding state. [Temporal logics](https://en.wikipedia.org/wiki/Temporal_logic "Temporal logic") are traditionally interpreted in terms of Kripke structures.


### Computational Tree
↗ [Graph Basics](../../../../../../../🧮%20Mathematics/Graph%20Theory/📌%20Graph%20Theory%20Basics/Graph%20Basics.md)


### Timed Automata
↗ [Automata Theory and (Formal) Language Theory](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)


### Probabilistic Systems
↗ [Probability Models & Stochastic Process](../../../../../../../🧮%20Mathematics/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Probability%20Models%20&%20Stochastic%20Process.md)



## 2️⃣ Properties and Property Specialization
### Logic Languages
↗ [Classical Logic (Standard Logic)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/Classical%20Logic%20(Standard%20Logic).md)
- ↗ [(Zeroth-Order Logic) Propositional Logic - (零阶) 命题逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/(Zeroth-Order%20Logic)%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
- ↗ [(First-Order) Predicate Logic -（一阶）谓词逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/(First-Order)%20Predicate%20Logic%20-（一阶）谓词逻辑.md)

↗ [Temporal Logic (时态逻辑) & Computation-Tree Logic (CTL*) Family](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family.md)
- ↗ [Linear Temporal Logic (LTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Linear%20Temporal%20Logic%20(LTL).md)
- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)


### Properties
Linear-Time Properties
Regular Properties


### Property Specialization



## 3️⃣ Models Analysis & Improvement
### Model Equivalences And Abstraction


### States Explosion & Reduction



## Ref
[Model Checking -- An Overview]: https://web.stanford.edu/class/cs357/lecture12.pdf
