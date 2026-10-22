# (Formal) Model Checking (MC)

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Abstraction](../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [Complexity Theory & Computational Complexity](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
↗ [Computationally Hard Problems](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Algorithm%20Complexity/Computationally%20Hard%20Problems.md)

↗ [ICT System Reliability (Correctness) & Verification](../../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/ICT%20System%20Reliability%20%28Correctness%29%20&%20Verification.md)
↗ [Software Quality Assurance (SQA)](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/Software%20Quality%20Assurance%20%28SQA%29.md)

↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process.md)
- ↗ [Markov Process & Markov Chain (MC)](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20%28MC%29/Markov%20Process%20&%20Markov%20Chain%20%28MC%29.md)

↗ [Formal System, Formal Semantics, and Formal Logic](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md)
- ↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Classical%20Logic%20%28Standard%20Formal%20Logic%29.md)
- ↗ [Temporal Logic (时态逻辑)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Temporal%20Logic%20%28时态逻辑%29.md)
	- ↗ [Computation-Tree Logic (CTL*) Family](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Computation-Tree%20Logic%20%28CTLstar%29%20Family.md)
		- ↗ [Linear Temporal Logic (LTL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Linear%20Temporal%20Logic%20%28LTL%29.md)
		- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Branching%20Time%20Logic%20%28Computation-Tree%20Logic,%20CTL%29.md)
- ↗ [Data Structure in Logic Formulas](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)
	- ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20%28Binary%20Decision%20Diagrams%29%20&%20ROBDD.md)

↗ [Symbolic AI & Logic Programs](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🦴%20Symbolic%20AI%20&%20Logic%20Programs/Symbolic%20AI%20&%20Logic%20Programs.md)
↗ [Problem Solving & Search-Based Methods](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)

↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)
↗ [Static Code Analysis Tools (SCAT)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20%28SCAT%29/Static%20Code%20Analysis%20Tools%20%28SCAT%29.md)
- model checkers
	- ↗ [PRISM](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/PRISM.md)
	- ↗ [TLA+](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/TLA+.md)
	- ↗ [SPIN](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/SPIN.md)
	- ↗ [ESBMC (Efficient SMT-Based Model Checker)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/ESBMC%20%28Efficient%20SMT-Based%20Model%20Checker%29.md)
	- ↗ [CBMC (C Bounded Model Checker)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/CBMC%20%28C%20Bounded%20Model%20Checker%29.md)
- theorem solvers (proof assistant)
	- ↗ [SMT Solving & Algorithms](../🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)
	- ↗ [SAT Solving & Algorithms](../🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md)
	- ↗ [Theorem Provers & Proof Assistants](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/Theorem%20Provers%20&%20Proof%20Assistants/Theorem%20Provers%20&%20Proof%20Assistants.md)


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
https://dl.acm.org/doi/pdf/10.1145/5397.5399
Automatic Verification of Finite-State Concurrent Systems Using Temporal Logic Specifications
E. M. CLARKE Carnegie Mellon University
E. A. EMERSON University of Texas, Austin
and
A. P. SISTLA GTE Laboratories, Inc.


🎬【\[EuroSys'24\] SandTable: Scalable Distributed System Model Checking】 https://www.bilibili.com/video/BV1c1421i7iG/
🏠 https://github.com/tangruize/SandTable

Arnd Hartmanns, Holger Hermanns, In the quantitative automata zoo, Science of Computer Programming, Volume 112, Part 1, 2015, Pages 3-23, ISSN 0167-6423,
https://doi.org/10.1016/j.scico.2015.08.009.


### Other Resources
Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

https://youtu.be/VHWEldcSx14?si=dj9hdtmGVH3jbsmo
Lecture 1 - Introduction (Model Checking) | Prof.Katoen RWTH Aachen University

https://web.stanford.edu/class/cs357/lecture12.pdf#page=1.00
Model Checking - An Overview



## Intro
> [!links]
> ↗ [Formal System, Formal Semantics, and Formal Logic](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md) "satisfiability"
>
> ```tikz
> \usepackage{amsmath,amssymb}
> \usetikzlibrary{calc}
> \begin{document}
> \begin{tikzpicture}[
>   scale=0.90, transform shape,
>   font=\small,
>   mainbox/.style={draw=gray!65, rounded corners=2pt, line width=.45pt,
>                   minimum width=4.25cm, minimum height=6.55cm, align=center},
>   consequence/.style={draw=gray!65, rounded corners=2pt, line width=.45pt,
>                       minimum width=3.10cm, minimum height=1.25cm, align=center},
>   logicbox/.style={draw=gray!65, rounded corners=2pt, line width=.45pt,
>                    minimum height=1.05cm, align=center},
>   arr/.style={->, >=stealth, line width=.6pt},
>   relation/.style={->, >=stealth, line width=.55pt},
>   linklabel/.style={font=\scriptsize, inner sep=0pt},
>   smallnote/.style={font=\scriptsize, align=center}
> ]
>
> % =========================
> % Added logic layer (outside the original four-box structure)
> % =========================
> \node[logicbox, minimum width=4.25cm] (ordinarylogic) at (0,4.95)
>   {\textbf{Ordinary logic}\\[-1pt]{\scriptsize informal / natural-language reasoning}};
>
> \node[logicbox, minimum width=8.95cm] (formallogic) at (11.875,4.95)
>   {\textbf{Formal logic}\\[-1pt]{\scriptsize formal study of inference and logical consequence}};
>
> \draw[arr] (ordinarylogic.east) -- (formallogic.west)
>   node[midway,above=2.2pt,linklabel] {formalize};
>
> % =========================
> % Original four-column structure — preserved
> % =========================
> \node[mainbox] (ordinary) at (0,0) {};
> \node[mainbox] (axiomatic) at (4.75,0) {};
> \node[mainbox] (formal) at (9.50,0) {};
> \node[mainbox] (semantic) at (14.25,0) {};
>
> % Titles
> \node[font=\bfseries\large, align=center, text width=3.7cm] at (0,2.45)
>   {Ordinary\\mathematical\\activity};
> \node[font=\bfseries\large, align=center, text width=3.7cm] at (4.75,2.45)
>   {Axiomatic\\presentation};
> \node[font=\bfseries\large, align=center, text width=3.7cm] at (9.50,2.55)
>   {Formal system};
> \node[font=\bfseries, align=center] at (9.50,2.12)
>   {syntactic side};
> \node[font=\bfseries\large, align=center, text width=3.7cm] at (14.25,2.45)
>   {Model-theoretic\\semantics};
>
> % Top row content
> \node[align=center, text width=3.55cm] (mathlang) at (0,.75)
>   {Mathematical\\language\\[-1pt]{\scriptsize natural / semi-formal}};
> \node[align=center, text width=3.55cm] (specified) at (4.75,.75)
>   {Specified language\\and primitive notions};
> \node[align=center, text width=3.55cm] (flang) at (9.50,.75)
>   {Formal language $\mathcal L$};
> \node[align=center, text width=3.55cm] (models) at (14.25,.75)
>   {Structures /\\interpretations};
>
> % Bottom row content
> \node[align=center, text width=3.55cm] (reason) at (0,-1.55)
>   {Reasoning and proof\\[-1pt]{\scriptsize ordinary practice}};
> \node[align=center, text width=3.55cm] (axioms) at (4.75,-1.55)
>   {Axioms and accepted\\proof methods};
> \node[align=center, text width=3.55cm] (calculus) at (9.50,-1.55)
>   {Formal calculus $S$\\[-1pt]{\scriptsize axioms $+$ inference rules}};
> \node[align=center, text width=3.55cm] (sat) at (14.25,-1.55)
>   {Satisfaction relation\\[-1pt]$\mathcal M \models \varphi$};
>
> % Original vertical arrows
> \draw[arr] (mathlang.south) -- (reason.north);
> \draw[arr] (specified.south) -- (axioms.north);
> \draw[arr] (flang.south) -- (calculus.north);
> \draw[arr] (models.south) -- (sat.north);
>
> % Original horizontal arrows and labels — restored exactly
> \draw[arr] (mathlang.east) -- (specified.west)
>   node[midway,above=2.2pt,linklabel] {systematize};
> \draw[arr] (reason.east) -- (axioms.west)
>   node[midway,above=2.2pt,linklabel] {axiomatize};
> \draw[arr] (specified.east) -- (flang.west)
>   node[midway,above=2.2pt,linklabel] {formalize};
> \draw[arr] (axioms.east) -- (calculus.west)
>   node[midway,above=2.2pt,linklabel] {formalize};
> \draw[arr] (flang.east) -- (models.west)
>   node[midway,above=2.2pt,linklabel] {interpret};
>
> % =========================
> % Added relation of logic layer to original diagram
> % =========================
> % Ordinary logic informs ordinary mathematical reasoning.
> \draw[relation,dashed] (ordinarylogic.south) -- ($(ordinary.north)+(0,0.02)$)
>   node[midway,font=\scriptsize,align=center,text width=2.25cm] {used in mathematical reasoning};
>
> % Formal logic spans the proof-theoretic and semantic sides.
> \draw[gray!70, line width=.55pt] (7.26,3.62) -- (16.49,3.62);
> \draw[gray!70, line width=.55pt] (7.26,3.62) -- (7.26,3.45);
> \draw[gray!70, line width=.55pt] (16.49,3.62) -- (16.49,3.45);
> \node[smallnote, fill=white, inner sep=1pt] at (11.875,3.62)
>   {proof-theoretic / syntactic side \quad + \quad model-theoretic / semantic side};
> \draw[relation] (formallogic.south) -- (11.875,3.82);
>
> % =========================
> % Original consequence boxes
> % =========================
> \node[consequence] (syncon) at (9.50,-4.33)
>   {$\Gamma \vdash_{S} \varphi$\\[-1pt]{\scriptsize syntactic consequence}};
> \node[consequence] (semcon) at (14.25,-4.33)
>   {$\Gamma \models \varphi$\\[-1pt]{\scriptsize semantic consequence}};
> \draw[arr] (formal.south) -- (syncon.north);
> \draw[arr] (semantic.south) -- (semcon.north);
>
> % =========================
> % Added soundness / completeness bridges
> % Restored to the earlier lower-bridge layout; formulas sit with the arrows.
> % =========================
> \draw[arr] (syncon.south) -- (9.50,-5.60) -- (14.25,-5.60) -- (semcon.south);
> \node[font=\scriptsize,above=2.2pt] at (11.875,-5.60)
>   {soundness: $\Gamma\vdash_S\varphi \Rightarrow \Gamma\models\varphi$};
>
> \draw[arr] (semcon.south) -- (14.25,-6.36) -- (9.50,-6.36) -- (syncon.south);
> \node[font=\scriptsize,above=2.2pt] at (11.875,-6.36)
>   {completeness: $\Gamma\models\varphi \Rightarrow \Gamma\vdash_S\varphi$};
>
> \node[smallnote] at (11.875,-6.96)
>   {if both hold: $\Gamma\vdash_S\varphi \iff \Gamma\models\varphi$};
>
> \end{tikzpicture}
> \end{document}
> ```
> 
> ↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20%28PL%29%20-%20%28零阶%29%20命题逻辑.md) "satisfiability"
>
> The SAT problem: does there exist a model $M$ that satisfies $\Phi$? $$\exists M. M\models\Phi ?$$
>
> Common (🤔) model checking problem: does a given model $M$ satisfy a given property $\Phi$? $$M \models \Phi \ ?$$
>
> Alternatively, does a given model $M$ **partially** satisfy a given property $\Phi$ ? $$\exists x, y, z. \ M(x,y,z) \models \Phi \ ?$$
>
> ↗ [Computation-Tree Logic (CTL*) Family](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Computation-Tree%20Logic%20%28CTLstar%29%20Family.md) "satisfaction set"

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
model checker, the software tool that performs the model checking, examines all possible system scenarios in a systematic manner. In this way, it can be shown that a given system model truly satisfies a certain property. It is a real challenge to examine the largest possible state spaces that can be treated with current means, i.e., processors and memories. State-of-the-art model checkers can handle state spaces of about $10^8$ to $10^9$ states with explicit state-space enumeration. Using clever algorithms and tailored data structures, larger state spaces ($10^{20}$ up to even $10^{476}$ states) can be handled for specific problems. Even the subtle errors that remain undiscovered using emulation, testing and simulation can potentially be revealed using model checking.

![|600](../../../../../Assets/Pics/Screenshot%202025-08-29%20at%2015.57.08.png)

...

==Model checking is an automated technique that, given a finite-state model of a system and a formal property, systematically checks whether this property holds for (a given state in) that model.==

...

Model checking requires a model of the system under consideration and a desired property and systematically checks whether or not the given model satisfies this property. Typical properties that can be checked are deadlock freedom, invariants, and request-response properties. Model checking is an automated technique to check the absence of errors (i.e., property violations) and alternatively can be considered as an intelligent and effective debugging technique. It is a general approach and is applied in areas like hardware verification and software engineering. Due to unremitting improvements of underlying algorithms and data structures together with hardware technology improvements, model-checking techniques that two decades ago only worked for simple examples are nowadays applicable to more realistic designs. It is fair to say that in the last two decades model checking has developed as a mature and heavily used verification and debugging technique.

**The concepts of model checking have their roots in mathematical foundations such as propositional logic, automata theory and formal languages, data structures, and graph algorithms.** It is expected that readers are familiar with the basics of these topics when starting with our book, although an appendix is provided that summarizes the essentials. Knowledge on complexity theory is required for the theoretical complexity considerations of the various model-checking algorithms.

![Language_and_Programming_Language_Processing.md | 800](../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>


### Process of Model Checking
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

![|600](../../../../../Assets/Pics/Screenshot%202025-08-29%20at%2015.57.08.png)

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



## 1️⃣ System Modeling (Semantic)
> [!links]
> ↗ [Mathematical Modeling & Abstraction](../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
> ↗ [Theory of Computation](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
> - ↗ [Models of Computation & Abstract Machines](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
> 
> ↗ [Programming Language & Formal Semantics](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Programming%20Language%20&%20Formal%20Semantics.md)
> ↗ [Data Structure in Logic Formulas](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)
>
> ↗ [Computation as Programs - Computer Program Semantics & Models](../../../../🗺%20CS%20Overview/Computation%20as%20Programs%20-%20Computer%20Program%20Semantics%20&%20Models.md)

![Language_and_Programming_Language_Processing | 800](../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)


### (Symbolic) Transition Systems
↗ [Models of Computation & Abstract Machines](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md#Symbolic%20Transition%20System%20⭐) "transition system"

Semantics of Transition System
- execution
- trace
- computational tree


### Mathematical Models & Symbolic Model Checking 🤔
> [!links]
> ↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)
> 
> ↗ [Data Structure in Logic Formulas](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)
> ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20%28Binary%20Decision%20Diagrams%29%20&%20ROBDD.md)
> ↗ [PDAG (Propositional Directed Acyclic Graph)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/PDAG%20%28Propositional%20Directed%20Acyclic%20Graph%29.md)
> 
> ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers.md)
> ↗ [CBMC (C Bounded Model Checker)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/CBMC%20%28C%20Bounded%20Model%20Checker%29.md)

> [!TIP]
> $$\boxed{ \text{State Set} \longleftrightarrow \text{Characteristic Function} \longleftrightarrow \text{Boolean Formula} }$$
> 
> Pre-image & symbolic backward traversal
> ↗ [MC Algorithms](MC%20Algorithms/MC%20Algorithms.md)

> 🤖 Google AI Mode

Symbolic models in model checking are a technique that uses mathematical symbols, often represented by Binary Decision Diagrams (BDDs), to represent and analyze a system's entire state space efficiently, instead of checking each state individually. This allows for the verification of systems with extremely large state spaces, far beyond the limits of traditional methods. Symbolic model checking is a powerful formal verification method used for systems like protocols and hardware, and it involves representing system states, transitions, and properties symbolically to automate the process of finding errors or verifying properties.


### Probabilistic System Modeling
↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process.md)
- ↗ [Discrete-Time Markov Chains (DTMC)](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20%28MC%29/Discrete-Time%20Markov%20Chains%20%28DTMC%29/Discrete-Time%20Markov%20Chains%20%28DTMC%29.md) & ↗ [Continuous-Time Markov Chains (CTMC)](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20%28MC%29/Continuous-Time%20Markov%20Chains%20%28CTMC%29/Continuous-Time%20Markov%20Chains%20%28CTMC%29.md)
- Markov decision processes (MDPs) and probabilistic automata (PAs)
	- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20%28MC%29/Markov%20Decision%20Processes%20%28MDP%29%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20%28MDP%29%20&%20Stochastic%20Dynamic%20Program.md)
- probabilistic timed automata (PTAs)
- partially observable MDPs and PTAs (POMDPs and POPTAs)
- interval Markov chains and MDPs (IDTMCs and IMDPs)

![|350](../../../../../Assets/Pics/Pasted%20image%2020251024212947.png)
<small><a>https://www.modestchecker.net/</a><br>The Modest Toolset -- Quantitative Modelling and Verification<br>At the core of the Modest Toolset is the model of networks of stochastic hybrid automata (SHA), which combine nondeterministic choices, continuous system dynamics, stochastic decisions and timing, and real-time behaviour, including nondeterministic delays. A wide range of well-known and extensively studied formalisms in modelling and verification can be seen as special cases of SHA:</small>


### Distributed System Modeling
> [!link]
> ↗ [Petri Nets](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Distributed%20Computation%20Models/Petri%20Nets.md)


### Concurrent System Modeling
> [!links]
> ↗ [Process Calculi (Process Algebras)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Concurrent%20Computation%20Models/Process%20Calculi%20%28Process%20Algebras%29.md)
> ↗ [Actor Model & Actor Model Theory](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Concurrent%20Computation%20Models/Actor%20Model%20&%20Actor%20Model%20Theory.md)
> 
> ↗ [Concurrency Control](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20Processes%20&%20Automata%20Management%20%28CPU%20+%20Main%20Memory%20Resource%29/Concurrency%20Control/Concurrency%20Control.md)
> ↗ [Concurrent Computing](../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Concurrent%20Computing/Concurrent%20Computing.md)
> ↗ [Concurrent Programming](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20Processes%20&%20Automata%20Management%20%28CPU%20+%20Main%20Memory%20Resource%29/Concurrent%20Programming.md)
> ↗ [Concurrency Analysis](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Concurrency%20Analysis/Concurrency%20Analysis.md)

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



## 2️⃣ Properties and Property Specialization (Syntax)
### (Modal) Logic Languages
> foundations for property specialization

↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Classical%20Logic%20%28Standard%20Formal%20Logic%29.md)
- ↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20%28PL%29%20-%20%28零阶%29%20命题逻辑.md)
- ↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20%28Standard%20Formal%20Logic%29/First-Order%20Logic%20%28FOL%29%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20%28FOL%29%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)

↗ [Higher-Order Languages & Logics (HOL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🎩%20Higher-Order%20Languages%20&%20Logics%20%28HOL%29/Higher-Order%20Languages%20&%20Logics%20%28HOL%29.md)

↗ [Modal Logic (模态逻辑)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Modal%20Logic%20%28模态逻辑%29.md)
- ↗ [Dynamic Logic (DL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Dynamic%20Logic%20%28DL%29/Dynamic%20Logic%20%28DL%29.md)
- ↗ [Temporal Logic (时态逻辑)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Temporal%20Logic%20%28时态逻辑%29.md)
	- ↗ [Computation-Tree Logic (CTL*) Family](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Computation-Tree%20Logic%20%28CTLstar%29%20Family.md)
		- ↗ [Linear Temporal Logic (LTL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Linear%20Temporal%20Logic%20%28LTL%29.md)
		- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Branching%20Time%20Logic%20%28Computation-Tree%20Logic,%20CTL%29.md)
		- ↗ [Probabilistic CTL (PCTL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Probabilistic%20CTL%20%28PCTL%29.md)


---
semantic model satisfies syntactic specification


We define the satisfaction set of a formula as the set of states that satisfy the formula
$$sat(ϕ) = {s ∣ s ⊧ ϕ}$$
We say that a transition system satisfies a formula if all its initial states satisfy the formula:
$$T ⊧ ϕ \iff ∀s ∈ I . s ⊧ ϕ$$
or, equivalently
$$T ⊧ ϕ \iff I ⊆ sat(ϕ)$$
A state satisfies a formula if all paths starting from $s$ satisfy the formula
$$s ⊧ ϕ \iff ∀π ∈ Paths(s) . π ⊧ ϕ$$


### Properties 🤔
> what kinds of properties we have?

Linear-Time Properties
Regular Properties

---
Safety:
- “Nothing bad will happen.”
- S is a safety property iff every infinite path π violating S has a **finite prefix** π' such that every extension of π' violates S.
- **Mutual exclusion:** P1 and P2 will _never_ be in their critical regions simultaneously.
- ![](../../../../../Assets/Pics/Screenshot%202026-10-15%20at%2021.04.01.png)


Liveness:
- “Something good will happen.”
- L is a liveness property iff every finite path (prefix) π can be extended so that it satisfies L.
- **Starvation freedom:** whenever P1 is ready to enter its critical section, it will _eventually_ succeed.

Fairness: (cannot be expressed in CTL\*)

| Fairness          | 意义                                   | LTL 描述                            |
| ----------------- | ------------------------------------ | --------------------------------- |
| Absolute fairness | \(P\) 必须无限次执行                        | \(GF\,exec\)                      |
| Strong fairness   | 如果 \(P\) 无限次 ready，则必须无限次执行          | \(GF\,ready\Rightarrow GF\,exec\) |
| Weak fairness     | 如果 \(P\) 从某一时刻开始始终 ready，则必须持续获得执行机会 | \(FG\,ready\Rightarrow GF\,exec\) |


### Property Specification
> how to describe, or specify, a property, using logic languages or maybe other languages (property specification language) that's based on logic languages?



## 3️⃣ Model Checking Algorithms
↗ [Formal System, Formal Semantics, and Formal Logic](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md) "satisfiability and SAT problem"
- The SAT problem: does there exist a model $M$ that satisfies $\Phi$? $$\exists M. M\models\Phi ?$$
- The model checking problem:  given $M$ and $\Phi$ decide $$M\models\Phi ?$$
↗ [MC Algorithms](MC%20Algorithms/MC%20Algorithms.md) ⭐
- choose system model  -> $M$
- choose logic language -> $\Phi$
- apply mc algorithm of the logic language on $M$ for $\Phi$


↗ [Formal Verifiers & Constraint Solvers & Checkers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers.md)
- ↗ [Theorem Provers & Proof Assistants](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/Theorem%20Provers%20&%20Proof%20Assistants/Theorem%20Provers%20&%20Proof%20Assistants.md)
- ↗ [SMT Solving & Algorithms](../🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)
- ↗ [SAT Solving & Algorithms](../🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md)

↗ [Symbolic AI & Logic Programs](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🦴%20Symbolic%20AI%20&%20Logic%20Programs/Symbolic%20AI%20&%20Logic%20Programs.md)
↗ [Problem Solving & Search-Based Methods](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)
- ↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)
- ↗ [Constraint Satisfaction Problems (CSPs)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Satisfaction%20Problems%20%28CSPs%29.md)


### Propositional Logic Model Checking & Algorithms
↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Classical%20Logic%20%28Standard%20Formal%20Logic%29.md)
↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20%28PL%29%20-%20%28零阶%29%20命题逻辑.md)

↗ [Propositional Logic Model Checking & Algorithms](MC%20Algorithms/Propositional%20Logic%20Model%20Checking%20&%20Algorithms.md)


### Modal Logic Model Checking & Algorithms
↗ [Modal Logic (模态逻辑)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Modal%20Logic%20%28模态逻辑%29.md)
- ↗ [Temporal Logic (时态逻辑)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Temporal%20Logic%20%28时态逻辑%29.md)
	- ↗ [Computation-Tree Logic (CTL*) Family](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Computation-Tree%20Logic%20%28CTLstar%29%20Family.md)
- ↗ [Dynamic Logic (DL)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Dynamic%20Logic%20%28DL%29/Dynamic%20Logic%20%28DL%29.md)
- ↗ [Epistemic (Modal) Logic](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Epistemic%20%28Modal%29%20Logic/Epistemic%20%28Modal%29%20Logic.md)

↗ [MC Algorithms For CTLstar](MC%20Algorithms/MC%20Algorithms%20For%20CTLstar%20Family/MC%20Algorithms%20For%20CTLstar.md)
↗ [MC Algorithms For CTL](MC%20Algorithms/MC%20Algorithms%20For%20CTLstar%20Family/MC%20Algorithms%20For%20CTL.md)
↗ [MC Algorithm For LTL](MC%20Algorithms/MC%20Algorithms%20For%20CTLstar%20Family/MC%20Algorithm%20For%20LTL.md)


### Probabilistic Model Checking & Algorithms
↗ [Probability Theory & Statistics](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/Probability%20Theory%20&%20Statistics.md)
↗ [Markov Process & Markov Chain (MC)](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20%28MC%29/Markov%20Process%20&%20Markov%20Chain%20%28MC%29.md)

↗ [MC Algorithms For PCTL](MC%20Algorithms/MC%20Algorithms%20For%20CTLstar%20Family/MC%20Algorithms%20For%20PCTL.md)


### Statistical Model Checking & Algorithms
↗ [Probability Theory & Statistics](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/Probability%20Theory%20&%20Statistics.md)
↗ [Markov Process & Markov Chain (MC)](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20%28MC%29/Markov%20Process%20&%20Markov%20Chain%20%28MC%29.md)
#### Random Variables for Trace Generation
↗ [Random (Stochastic) Variable & Probability Distribution](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/Random%20%28Stochastic%29%20Variable%20&%20Probability%20Distribution/Random%20%28Stochastic%29%20Variable%20&%20Probability%20Distribution.md)

![](../../../../../Assets/Pics/Screenshot%202025-11-15%20at%2022.59.53.png)
- ==A probabilistic model can be seen as (very complex) random variable $𝑋$.==
- Sampling $𝑋$ — generating traces — traverses the probability transition matrix of the model, one observation at a time.
- Observing enough samples gives a fair idea of the general model behavior.
#### Statistics for Modeling Checking
![](../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.38.55.png)

![](../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.39.10.png)

![](../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.38.33.png)

![](../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.39.41.png)
#### Confidence Intervals
![](../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.42.09.png)

![](../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2000.42.22.png)
#### Applications
Transient probability estimation
Unbounded probability estimation
Steady state
Nondeterminism
Rare events



## 4️⃣ Models Analysis & Improvement
↗ [Models Analysis & Improvement](Models%20Analysis%20&%20Improvement/Models%20Analysis%20&%20Improvement.md)


### Model Equivalences And Abstraction
↗ [Bisimulation](Models%20Analysis%20&%20Improvement/Bisimulation.md)


### States Explosion & Reduction
↗ [MC Algorithms](MC%20Algorithms/MC%20Algorithms.md)

---
↗ [Software Analysis Basics /Program State Space & State Explosion](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md#Program%20State%20Space%20&%20State%20Explosion)
↗ [Program Abstraction & Abstract Interpretation](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)

↗ [Lattice (Order Theory)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20%28Order%20Theory%29/Lattice%20%28Order%20Theory%29.md)
partial order reduction

symbolic model checking

compositional reasoning



## Ref
[Model Checking -- An Overview]: https://web.stanford.edu/class/cs357/lecture12.pdf
[15-817 Introduction to Model Checking | CMU Fall 2009 ]: https://www.cs.cmu.edu/~emc/15817-f09/index.html
