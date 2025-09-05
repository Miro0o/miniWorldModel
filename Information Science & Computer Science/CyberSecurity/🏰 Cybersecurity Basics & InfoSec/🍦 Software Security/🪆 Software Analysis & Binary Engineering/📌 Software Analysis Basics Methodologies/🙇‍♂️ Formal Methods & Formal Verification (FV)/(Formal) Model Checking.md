# (Formal) Model Checking

[TOC]



## Res
### Related Topics
↗ [ICT System Reliability (Correctness) & Verification](../../../../../⛈️%20Risk%20Management/🦟%20Vulnerabilities/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)
↗ [Software Quality Assurance (SQA)](../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)

↗ [Probability Models & Stochastic Process](../../../../../../🧮%20Mathematics/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Probability%20Models%20&%20Stochastic%20Process.md)
- ↗ [Markov Chains (MC)](../../../../../../🧮%20Mathematics/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)/Markov%20Chains%20(MC).md)


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
- [Prism](https://en.wikipedia.org/wiki/PRISM_\(model_checker\) "PRISM (model checker)"): a probabilistic symbolic model checker
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


### Research Papers
🎬【\[EuroSys'24\] SandTable: Scalable Distributed System Model Checking】 https://www.bilibili.com/video/BV1c1421i7iG/
🏠 https://github.com/tangruize/SandTable



## Intro
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

![|600](../../../../../../../Assets/Pics/Screenshot%202025-08-29%20at%2015.57.08.png)

...

==Model checking is an automated technique that, given a finite-state model of a system and a formal property, systematically checks whether this property holds for (a given state in) that model.==

...

Model checking requires a model of the system under consideration and a desired property and systematically checks whether or not the given model satisfies this property. Typical properties that can be checked are deadlock freedom, invariants, and request-response properties. Model checking is an automated technique to check the absence of errors (i.e., property violations) and alternatively can be considered as an intelligent and effective debugging technique. It is a general approach and is applied in areas like hardware verification and software engineering. Due to unremitting improvements of underlying algorithms and data structures together with hardware technology improvements, model-checking techniques that two decades ago only worked for simple examples are nowadays applicable to more realistic designs. It is fair to say that in the last two decades model checking has developed as a mature and heavily used verification and debugging technique.

The concepts of model checking have their roots in mathematical foundations such as propositional logic, automata theory and formal languages, data structures, and graph algorithms. It is expected that readers are familiar with the basics of these topics when starting with our book, although an appendix is provided that summarizes the essentials. Knowledge on complexity theory is required for the theoretical complexity considerations of the various model-checking algorithms.


### Pros & Cons of Model Checking
> Model checking is an effective technique to expose potential design errors.



## Modeling Concurrent Systems
### Transition Systems



## Ref
