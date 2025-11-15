# (Formal) Model Checking

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [Complexity Theory & Computational Complexity](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
↗ [Computationally Hard Problems](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Algorithm%20Complexity/Computationally%20Hard%20Problems.md)

↗ [ICT System Reliability (Correctness) & Verification](../../../../../../⛈️%20Risk%20Management/🦟%20Vulnerabilities/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)
↗ [Software Quality Assurance (SQA)](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)

↗ [Probabilistic Models & Stochastic Process](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Probabilistic%20Models%20&%20Stochastic%20Process.md)
- ↗ [Markov Chains (MC) & Markov Process](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process.md)

↗ [Mathematical Logic Basics (Formal Logic)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic).md)
- ↗ [Classical Logic (Standard Logic)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/Classical%20Logic%20(Standard%20Logic).md)
- ↗ [Temporal Logic (时态逻辑)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Temporal%20Logic%20(时态逻辑).md)
	- ↗ [Computation-Tree Logic (CTL*) Family](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Computation-Tree%20Logic%20(CTL*)%20Family.md)
		- ↗ [Linear Temporal Logic (LTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Linear%20Temporal%20Logic%20(LTL).md)
		- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)
- ↗ [Data Structure in Logic Formulas](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)
	- ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20(Binary%20Decision%20Diagrams)%20&%20ROBDD.md)

↗ [Symbolic Execution & Concolic Execution](../../👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Symbolic%20Execution%20&%20Concolic%20Execution/Symbolic%20Execution%20&%20Concolic%20Execution.md)
↗ [Static Code Analysis Tools (SCAT)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md)
- model checkers
	- ↗ [PRISM](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/PRISM.md)
	- ↗ [TLA+](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/TLA+.md)
	- ↗ [SPIN](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/SPIN.md)
	- ↗ [ESBMC (Efficient SMT-Based Model Checker)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/ESBMC%20(Efficient%20SMT-Based%20Model%20Checker).md)
	- ↗ [CBMC (C Bounded Model Checker)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/CBMC%20(C%20Bounded%20Model%20Checker).md)
- theorem solvers (proof assistant)
	- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
	- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
	- ↗ [Automated & Generic Theorem Provers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)


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
- [Storm](https://en.wikipedia.org/w/index.php?title=STORM_\(model_checker\)&action=edit&redlink=1 "STORM (model checker) (page does not exist)"): A model checker for probabilistic systems.
- [TAPAs](https://en.wikipedia.org/wiki/TAPAs_model_checker "TAPAs model checker"): a tool for the analysis of process algebra
- [TAPAAL](https://en.wikipedia.org/wiki/TAPAAL "TAPAAL"): an integrated tool environment for modelling, validation, and verification of Timed-Arc [Petri Nets](https://en.wikipedia.org/wiki/Petri_Nets "Petri Nets")
- [TLA+](https://en.wikipedia.org/wiki/TLA%2B "TLA+") model checker by [Leslie Lamport](https://en.wikipedia.org/wiki/Leslie_Lamport "Leslie Lamport")
- [UPPAAL](https://en.wikipedia.org/wiki/UPPAAL "UPPAAL"): an integrated tool environment for modelling, validation, and verification of real-time systems modelled as networks of timed automata
- [Zing](https://en.wikipedia.org/w/index.php?title=Zing_\(model-checker\)&action=edit&redlink=1 "Zing (model-checker) (page does not exist)") – experimental tool from [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft") to validate state models of software at various levels: high-level protocol descriptions, work-flow specifications, web services, device drivers, and protocols in the core of the operating system. Zing is currently being used for developing drivers for Windows.


### Learning Resources
https://www.prismmodelchecker.org/lectures/
This section of the website contains teaching material covering much of the underlying theory behind PRISM. There are several sets of lecture slides available:
- "[Probabilistic model checking](https://www.prismmodelchecker.org/lectures/pmc/)"  
    a 20-lecture course with detailed coverage of model checking for DTMCs, CTMCs and MDPs  
- "[ESSLLI'10](https://www.prismmodelchecker.org/lectures/esslli10/)"  
    a 5-part course covering some additional topics (e.g. PTAs) but in slightly less depth.  
- "[BISS'07](https://www.prismmodelchecker.org/lectures/biss07/)"  
    an 11-part course covering some additional topics (e.g. PTAs, case studies) but in slightly less depth.  
- "[CPSWeek'13](https://www.prismmodelchecker.org/lectures/cpsweek13/)"  
    a 3-part tutorial, with a particular focus on probabilistic hybrid systems.
Citations included in these slides (and other talks on this site) refer to keys in [this list of references](https://www.prismmodelchecker.org/lectures/references.pdf).


### Research Papers
🎬【\[EuroSys'24\] SandTable: Scalable Distributed System Model Checking】 https://www.bilibili.com/video/BV1c1421i7iG/
🏠 https://github.com/tangruize/SandTable

Arnd Hartmanns, Holger Hermanns, In the quantitative automata zoo, Science of Computer Programming, Volume 112, Part 1, 2015, Pages 3-23, ISSN 0167-6423,
https://doi.org/10.1016/j.scico.2015.08.009.


### Other Resources
Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

https://youtu.be/VHWEldcSx14?si=dj9hdtmGVH3jbsmo
Lecture 1 - Introduction (Model Checking) | Prof.Katoen RWTH Aachen University



## Intro
> ↗ [Mathematical Logic Basics (Formal Logic)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic).md) "satisfiability"
> ↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md) "satisfiability"
> ↗ [Computation-Tree Logic (CTL*) Family](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Computation-Tree%20Logic%20(CTL*)%20Family.md) "satisfaction set"

> 🤖 Gemini 2.5

Model checking is ==an automated verification technique that checks if a formal model of a system (either hardware or software) satisfies a given set of properties, often expressed in temporal logic==. It systematically explores the system's states and, if a property is violated, provides a [counterexample](https://www.google.com/search?newwindow=1&cs=0&sca_esv=2bd8a92f2f2a46b0&sxsrf=AE3TifOtrlSTvOaHDAvElReERu0Ozo3b5A%3A1757159855993&q=counterexample&sa=X&ved=2ahUKEwiA5u_HisSPAxUERvEDHU_tNmwQxccNegQIAxAB&mstk=AUtExfC1OerJGfdHuSlUYP3WY3HAVNtyr8QZZMnP5oq--0ofnF47BYj0g602fYr84hgV9XxqHoZsGZ95JGsbAZD9UTwEY6RrBEfCazLRtkojTOhnpL61rbPOG4Zm97EMppxj2Rjv0K83c78IbEagL66Gqud9Ug8gbAN8NUMsb815IxfXsTQ&csui=3), which is a trace of execution showing the failure, making it a powerful tool for debugging. This method is superior to traditional testing because it is exhaustive and can find bugs that simulation might miss.

> 🔗 https://en.wikipedia.org/wiki/Model_checking

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **model checking** or **property checking** is a method for checking whether a [finite-state model](https://en.wikipedia.org/wiki/Finite-state_machine "Finite-state machine") of a system meets a given [specification](https://en.wikipedia.org/wiki/Formal_specification "Formal specification") (also known as [correctness](https://en.wikipedia.org/wiki/Correctness_\(computer_science\) "Correctness (computer science)")). This is typically associated with [hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware") or [software systems](https://en.wikipedia.org/wiki/Software_system "Software system"), where the specification contains liveness requirements (such as avoidance of [livelock](https://en.wikipedia.org/wiki/Livelock "Livelock")) as well as safety requirements (such as avoidance of states representing a [system crash](https://en.wikipedia.org/wiki/System_crash "System crash")).

In order to solve such a problem [algorithmically](https://en.wikipedia.org/wiki/Algorithm "Algorithm"), both the model of the system and its specification are **formulated** in some precise mathematical language. ==To this end, the problem is formulated as a task in [logic](https://en.wikipedia.org/wiki/Logic "Logic"), namely to check whether a [structure](https://en.wikipedia.org/wiki/Structure_\(mathematical_logic\) "Structure (mathematical logic)") satisfies a given logical formula.== This general concept applies to many kinds of logic and many kinds of structures. A simple model-checking problem consists of verifying whether a formula in the [propositional logic](https://en.wikipedia.org/wiki/Propositional_logic "Propositional logic") is satisfied by a given structure.

> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

==**Model-based** verification techniques are based on models describing the possible system behavior in a mathematically precise and unambiguous manner.== It turns out that – prior to any form of verification – the accurate modeling of systems often leads to the discovery of incompleteness, ambiguities, and inconsistencies in informal system specifications. Such problems are usually only discovered at a much later stage of the design. The system models are accompanied by algorithms that systematically explore all states of the system model. This provides the basis for a whole range of verification techniques ranging from an exhaustive exploration (model checking) to experiments with a restrictive set of scenarios in the model (simulation), or in reality (testing).

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

**The concepts of model checking have their roots in mathematical foundations such as propositional logic, automata theory and formal languages, data structures, and graph algorithms.** It is expected that readers are familiar with the basics of these topics when starting with our book, although an appendix is provided that summarizes the essentials. Knowledge on complexity theory is required for the theoretical complexity considerations of the various model-checking algorithms.

![Language_and_Programming_Language_Processing.md | 800](../../../../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>


### Process of Model Checking
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

![|600](../../../../../../../../Assets/Pics/Screenshot%202025-08-29%20at%2015.57.08.png)

In applying model checking to a design the following different phases can be distinguished:
- 1️⃣ **Modeling** phase:
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
- 2️⃣ **Running** phase: run the model checker to check the validity of the property in the system model. 
	- A model checking algorithm systematically explores all possible states and transitions in the model.  This exhaustive search determines if the model satisfies all the specified properties.
- 3️⃣ **Analysis** phase:
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
> ↗ [Theory of Computation](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
> ↗ [Formal Semantics and Programming Language](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
> ↗ [Data Structure in Logic Formulas](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)
> ↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)

![Language_and_Programming_Language_Processing | 800](../../../../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)


### (Symbolic) Transition Systems
> ↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
> - programs are transition systems
> - hardware circuits are transition systems
> - communication processes are transition systems
> - etc.

> 🔗 https://en.wikipedia.org/wiki/Transition_system

In [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"), a **transition system** is a concept used in the study of [computation](https://en.wikipedia.org/wiki/Computation "Computation"). It is used to describe the potential behavior of [discrete systems](https://en.wikipedia.org/wiki/Discrete_system "Discrete system"). It consists of [states](https://en.wikipedia.org/wiki/State_\(computer_science\) "State (computer science)") and transitions between states, which may be labeled with labels chosen from a set; the same label may appear on more than one transition. If the label set is a [singleton](https://en.wikipedia.org/wiki/Singleton_\(mathematics\) "Singleton (mathematics)"), the system is essentially unlabeled, and a simpler definition that omits the labels is possible.

Transition systems coincide mathematically with [abstract rewriting systems](https://en.wikipedia.org/wiki/Abstract_rewriting_system "Abstract rewriting system") (as explained further in this article) and [directed graphs](https://en.wikipedia.org/wiki/Directed_graph "Directed graph"). They differ from [finite-state automata](https://en.wikipedia.org/wiki/Finite-state_automata "Finite-state automata") in several ways:
- The set of states is not necessarily finite, or even countable.
- The set of transitions is not necessarily finite, or even countable.
- No "start" state or "final" states are given.

Transition systems can be represented as **directed graphs**.

---
**Formal Definition of Transition System**

Formally, a **transition system** is a pair $(S,T)$ where $S$ is a set of states and $T$, the _transition relation_, is a subset of $S\times S$. We say that there is a transition from state $p$ to state $q$ if $(p,q)\in T$, and denote it $p\to q$.

A **labelled transition system** is a tuple $(S,\Lambda,T)$ where $S$ is a set of states, $\Lambda$ is a set of labels, and $T$, the _labelled transition relation_, is a subset of $S\times\Lambda\times S$. We say that there is a transition from state $p$ to state $q$ with label $\alpha \iff (p,\alpha ,q)\in T$ and denote it $p\xrightarrow {\alpha } q$.

Labels can represent different things depending on the language of interest. Typical uses of labels include representing input expected, conditions that must be true to trigger the transition, or actions performed during the transition. Labelled transitions systems were originally introduced as _named_ transition systems.


**Special cases**
- If, for any given $p$ and $\alpha$, there exists only a single tuple $(p,α,q)$ in $T$, then one says that α![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) is ==deterministic (for $p$)==.
- If, for any given $p$ and $\alpha$, there exists at least one tuple $(p,\alpha,q)$ in $T$, then one says that $\alpha$ is ==executable (for $p$)==.


**Coalgebra Formulation**
The formal definition can be rephrased as follows. Labelled state transition systems on $S$ with labels from $\Lambda$ correspond [one-to-one](https://en.wikipedia.org/wiki/Bijection "Bijection") with functions $S\to P(\Lambda\times S)$, where $P$ is the (covariant) [powerset functor](https://en.wikipedia.org/wiki/Power_set "Power set"). Under this bijection $(S,\Lambda,T)$ is sent to $\xi _{T}:S\to {\mathcal {P}}(\Lambda \times S$, defined by $$p\mapsto \{\,(\alpha ,q)\in \Lambda \times S\mid p\xrightarrow {\alpha } q\,\}$$
In other words, a labelled state transition system is a [coalgebra](https://en.wikipedia.org/wiki/F-coalgebra "F-coalgebra") for the functor $P(\Lambda \times {-})$

In [model checking](https://en.wikipedia.org/wiki/Model_checking "Model checking"), a transition system is sometimes defined to include an additional labeling function for the states as well, resulting in a notion that encompasses that of [Kripke structure](https://en.wikipedia.org/wiki/Kripke_structure "Kripke structure").
####  Kripke Structure (of Transition System)
> 🔗 https://en.wikipedia.org/wiki/Kripke_structure_(model_checking)

A **Kripke structure** is a variation of the [transition system](https://en.wikipedia.org/wiki/Transition_system "Transition system"), originally proposed by [Saul Kripke](https://en.wikipedia.org/wiki/Saul_Kripke "Saul Kripke"), used in [model checking](https://en.wikipedia.org/wiki/Model_checking "Model checking") to represent the behavior of a system. It consists of a [graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\) "Graph (discrete mathematics)") whose nodes represent the reachable states of the system and whose edges represent state transitions, together with a labelling function which maps each node to a set of properties that hold in the corresponding state. [Temporal logics](https://en.wikipedia.org/wiki/Temporal_logic "Temporal logic") are traditionally interpreted in terms of Kripke structures.

---
**Formal Definition of Kripke Structure**

A transition system (of Kripke Structure) $TS$ is a tuple $(S,Act,\to,I,AP,L)$ where
- $S$ is a set of states,
- $Act$ is a set of actions,
- $\to \subseteq S \times Act \times S$ is a transition relation,
	-  or use $\delta$ to express $\to$
- $I \subseteq S$ is a set of initial states,
	- $\sigma\in I$
	- or, when using $\tau$ or $\pi$ to symbol a trace on $TS$, $\tau_0 = \sigma \in I$ or $\pi_0=\sigma\in I$
- $AP$ is a set of atomic propositions, 
- $L$: $S→AP^2$ is a labeling function.

$TS$ is called **finite** if $S$, $Act$, and $AP$ are **finite**.

It is important to realize that in case a state has more than one outgoing transition, the
“next” transition is chosen in a purely **nondeterministic** fashion. That is, the outcome of
this selection process is not known a priori, and, hence, no statement can be made about the likelihood with which a certain transition is selected. Similarly, when the set of initial states consists of more than one state, the start state is selected nondeterministically.

For convenience, we write $s \xrightarrow[]{\alpha}s'$ instead of $(s,α,s') \in \to$.

The labeling function $L$ relates a set $L(s) \in AP^2$ of atomic propositions to any state $s$. $L(s)$ intuitively stands for exactly those atomic propositions $a \in AP$ which are satisfied by state $s$. Given that $Φ$ is a propositional logic formula, then $s$ satisfies the formula $Φ$ if the evaluation induced by $L(s)$ makes the formula Φ true; that is: $s \models \Phi \iff L(s) \models \Phi$.

![](../../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.33.15.png)
<small><a>https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00</a></small>
![](../../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.34.43.png)
<small><a>https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00</a></small>


### Computational Tree
> ↗ [Graph Basics](../../../../../../../🧮%20Mathematics/Graph%20Theory/📌%20Graph%20Theory%20Basics/Graph%20Basics.md)


### Automata-Based Models
↗ [Automata Theory and (Formal) Language Theory](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
- ↗ [Regular Language (RL) & Finite Automata (FA)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Regular%20Language%20(RL)%20&%20Finite%20Automata%20(FA).md)
- ↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)
- ↗ [Context-Sensitive Languages (CSL) & Linear-Bounded Automata (LBA)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md)
- ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

↗ [Formal Semantics and Programming Language](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
#### Büchi Automaton

#### Timed Automata

#### Hybrid Automata


### Probabilistic Systems
↗ [Probabilistic Models & Stochastic Process](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Probabilistic%20Models%20&%20Stochastic%20Process.md)
- ↗ [Discrete-Time Markov Chains (DTMC)](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Discrete-Time%20Markov%20Chains%20(DTMC)/Discrete-Time%20Markov%20Chains%20(DTMC).md) & ↗ [Continuous-Time Markov Chains (CTMC)](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Continuous-Time%20Markov%20Chains%20(CTMC)/Continuous-Time%20Markov%20Chains%20(CTMC).md)
- Markov decision processes (MDPs) and probabilistic automata (PAs)
	- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)
- probabilistic timed automata (PTAs)
- partially observable MDPs and PTAs (POMDPs and POPTAs)
- interval Markov chains and MDPs (IDTMCs and IMDPs)

![|350](../../../../../../../../Assets/Pics/Pasted%20image%2020251024212947.png)
<small><a>https://www.modestchecker.net/</a><br>The Modest Toolset -- Quantitative Modelling and Verification<br>At the core of the Modest Toolset is the model of networks of stochastic hybrid automata (SHA), which combine nondeterministic choices, continuous system dynamics, stochastic decisions and timing, and real-time behaviour, including nondeterministic delays. A wide range of well-known and extensively studied formalisms in modelling and verification can be seen as special cases of SHA:</small>


### Petri Nets


### (Mathematical) Symbolic Models
↗ [Data Structure in Logic Formulas](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)
↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20(Binary%20Decision%20Diagrams)%20&%20ROBDD.md)

> 🤖 Google AI Mode

Symbolic models in model checking are a technique that uses mathematical symbols, often represented by Binary Decision Diagrams (BDDs), to represent and analyze a system's entire state space efficiently, instead of checking each state individually. This allows for the verification of systems with extremely large state spaces, far beyond the limits of traditional methods. Symbolic model checking is a powerful formal verification method used for systems like protocols and hardware, and it involves representing system states, transitions, and properties symbolically to automate the process of finding errors or verifying properties.


### Process Algebra
> 🤖 Google AI Mode

Process algebras are a family of algebraic languages used to model concurrent systems through interactions or "communications" between independent processes. 
- **CSP (Communicating Sequential Processes):** A process algebra used for describing concurrent systems in terms of message passing. Model checkers like FDR2 use CSP.
- **mCRL2:** A language that integrates features of process algebra with data types and temporal logic, allowing for rich descriptions of concurrent systems.


### Software Models
> 🤖 Google AI Mode

These models are derived directly from a system's source code, enabling the verification of software implementations. Software model checking is often used for bug hunting. 
- **Abstraction-based models:** Tools in this category, like BLAST and CPAchecker, create a simplified, abstract model from the source code, which is then used for verification. This helps mitigate the state explosion problem.
- **Code-level models:** Some model checkers, such as Java Pathfinder, operate directly on the program's code, performing a thorough state-space search.


### Game-Theoretic Models
> 🤖 Google AI Mode

These models are used to analyze multi-agent systems where multiple independent entities with different goals interact. 
- **Stochastic games:** Extend models like MDPs to include multiple players. The outcome of a transition depends on the choices of all players and probabilistic factors. This is used to synthesize optimal strategies for agents.



## 2️⃣ Properties and Property Specialization
### Logic Languages
> foundations for property specialization

↗ [Classical Logic (Standard Logic)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/Classical%20Logic%20(Standard%20Logic).md)
- ↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
- ↗ [First-Order Logic & Predicate Calculus -（一阶）谓词逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/First-Order%20Logic%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)

↗ [Higher-Order Logic (HOL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Higher-Order%20Logic%20(HOL)/Higher-Order%20Logic%20(HOL).md)

↗ [Modal Logic (模态逻辑)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Modal%20Logic%20(模态逻辑).md)
- ↗ [Dynamic Logic](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Dynamic%20Logic/Dynamic%20Logic.md)
- ↗ [Computation-Tree Logic (CTL*) Family](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Computation-Tree%20Logic%20(CTL*)%20Family.md)
	- ↗ [Linear Temporal Logic (LTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Linear%20Temporal%20Logic%20(LTL).md)
	- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)


### Properties
> what kinds of properties we have?

Linear-Time Properties
Regular Properties


### Property Specification
> how to describe, or specify, a property, using logic languages or maybe other languages (property specification language) that's based on logic languages?



## 3️⃣ Model Checking System & SAT Problem
↗ [Mathematical Logic Basics (Formal Logic)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic).md) "satisfiability and SAT problem"
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)

↗ [MC Algorithms](MC%20Algorithms/MC%20Algorithms.md)

↗ [Symbolic Execution & Concolic Execution](../../👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Symbolic%20Execution%20&%20Concolic%20Execution/Symbolic%20Execution%20&%20Concolic%20Execution.md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
↗ [Automated & Generic Theorem Provers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)


### Statistical Model Checking
↗ [Probabilities & Statistics](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probabilities%20&%20Statistics.md)
↗ [Markov Chains (MC) & Markov Process](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process.md)
#### Random Variables for Trace Generation
↗ [Random (Stochastic) Variable & Probability Distribution](../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Random%20(Stochastic)%20Variable%20&%20Probability%20Distribution/Random%20(Stochastic)%20Variable%20&%20Probability%20Distribution.md)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-15%20at%2022.59.53.png)
- ==A probabilistic model can be seen as (very complex) random variable $𝑋$.==
- Sampling $𝑋$ — generating traces — traverses the probability transition matrix of the model, one observation at a time.
- Observing enough samples gives a fair idea of the general model behavior.
#### Statistics for Modeling Checking
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.38.55.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.39.10.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.38.33.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.39.41.png)
#### Confidence Intervals
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.42.09.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.42.22.png)
#### Applications
Transient probability estimation
Unbounded probability estimation
Steady state
Nondeterminism
Rare events


### Model Checking Algorithms
↗ [MC Algorithms](MC%20Algorithms/MC%20Algorithms.md)
- ↗ [MC Algorithms For CTL*](MC%20Algorithms/MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20CTL*.md)
- ↗ [MC Algorithms For CTL](MC%20Algorithms/MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20CTL.md)
- ↗ [MC Algorithm For LTL](MC%20Algorithms/MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithm%20For%20LTL.md)
- ↗ [MC Algorithms For PCTL](MC%20Algorithms/MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20PCTL.md)



## 4️⃣ Models Analysis & Improvement
↗ [Models Analysis & Improvement](Models%20Analysis%20&%20Improvement/Models%20Analysis%20&%20Improvement.md)


### Model Equivalences And Abstraction
↗ [Bisimulation](Models%20Analysis%20&%20Improvement/Bisimulation.md)


### States Explosion & Reduction
↗ [Software Analysis Basics /Program State Space & State Explosion](../../Software%20(Program)%20Analysis%20Basics.md#Program%20State%20Space%20&%20State%20Explosion)
↗ [Lattice (Set Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)



## Ref
[Model Checking -- An Overview]: https://web.stanford.edu/class/cs357/lecture12.pdf
[15-817 Introduction to Model Checking | CMU Fall 2009 ]: https://www.cs.cmu.edu/~emc/15817-f09/index.html
