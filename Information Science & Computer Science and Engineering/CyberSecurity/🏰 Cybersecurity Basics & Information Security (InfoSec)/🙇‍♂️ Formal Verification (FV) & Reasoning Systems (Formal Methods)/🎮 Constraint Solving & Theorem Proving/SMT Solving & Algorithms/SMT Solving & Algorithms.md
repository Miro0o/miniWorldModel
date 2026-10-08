# SMT Solving & Algorithms

[TOC]



## Res
### Related Topics
↗ [Formal System, Formal Semantics, and Formal Logic](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md)
↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)
↗ [First Order Theory (FOT) & Satisfiability Modulo Theories (SMT)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First%20Order%20Theory%20(FOT)%20&%20Satisfiability%20Modulo%20Theories%20(SMT).md)
↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20(Binary%20Decision%20Diagrams)%20&%20ROBDD.md)

↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
↗ [Generic & Automated Theorem Provers (ATP)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/Generic%20&%20Automated%20Theorem%20Provers%20(ATP)/Generic%20&%20Automated%20Theorem%20Provers%20(ATP).md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
- ↗ [Z3 Theorem Prover](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md) 🤔
- ↗ [cvc5 (Cooperating Validity Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/cvc5%20(Cooperating%20Validity%20Checker).md)

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Complexity Theory & Computational Complexity](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
↗ [Computationally Hard Problems](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Algorithm%20Complexity/Computationally%20Hard%20Problems.md)

↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE)/Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE).md)

↗ [Program Abstraction & Abstract Interpretation](../../../🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)


### Learning Resources
[SMT-LIB The Satisfiability Modulo Theories Library](https://smt-lib.org/)
Standard
- [Language](https://smt-lib.org/language.shtml)
- [Theories](https://smt-lib.org/theories.shtml)
	- [ArraysEx](https://smt-lib.org/theories-ArraysEx.shtml)
		- Functional arrays with extensionality
	- [FixedSizeBitVectors](https://smt-lib.org/theories-FixedSizeBitVectors.shtml)
		- Bit vectors with arbitrary size
	- [Core](https://smt-lib.org/theories-Core.shtml)
		- Core theory, defining the basic Boolean operators
	- [FloatingPoint](https://smt-lib.org/theories-FloatingPoint.shtml)
		- Floating point numbers
	- [HO-Core](https://smt-lib.org/theories-HO-Core.shtml)
		- Higher-order maps
	- [Ints](https://smt-lib.org/theories-Ints.shtml)
		- Integer numbers
	- [Reals](https://smt-lib.org/theories-Reals.shtml)
		- Real numbers
	- [Reals_Ints](https://smt-lib.org/theories-Reals_Ints.shtml)
		- Real and integer numbers
	- [Strings](https://smt-lib.org/theories-UnicodeStrings.shtml)
		- Unicode character strings and regular expressions
- [Logics](https://smt-lib.org/logics.shtml)
	- ![](../../../../../../Assets/Pics/Pasted%20image%2020261008213103.png)
Software
- [Solvers](https://smt-lib.org/solvers.shtml)
	- Current systems
		- To our knowledge, the following systems (listed alphabetically) were under active development in 2018: [Alt-Ergo](http://ergo.lri.fr/), [AProVE](http://aprove.informatik.rwth-aachen.de/), [Boolector](http://fmv.jku.at/boolector/), [CVC4](http://cs.nyu.edu/acsys/cvc4/), [MathSAT 5](http://mathsat.fbk.eu/), [Minkeyrink](https://minkeyrink.com/), [OpenSMT 2](http://verify.inf.usi.ch/content/opensmt2), [Q3B](https://github.com/martinjonas/Q3B), [SMTInterpol](http://ultimate.informatik.uni-freiburg.de/smtinterpol/), [SMT-RAT](http://smtrat.github.io/), [STP](http://stp.github.io/), [veriT](http://www.verit-solver.org/), [Yices 2](http://yices.csl.sri.com/), [Z3](https://github.com/Z3Prover/z3/wiki).
	- Older systems
		- To our knowledge, the following systems are no longer current as their development has been discontinued. They are included for historical reasons and comparison purposes. [Ario](http://www.eecs.umich.edu/~ario/), [Barcelogic](http://www.lsi.upc.es/~oliveras/bclt-main.html), [Beaver](http://uclid.eecs.berkeley.edu/Beaver/), [CVC3](http://www.cs.nyu.edu/acsys/cvc3/), [DPT](http://sourceforge.net/projects/dpt), [Fx7](http://moskal.me/smt/en.html), [haRVey](http://webloria.loria.fr/equipes/cassis/softwares/haRVey/), [ICS](http://ics.csl.sri.com/), [iSAT3](https://projects.avacs.org/projects/isat3), [LPSAT](http://www.cs.washington.edu/ai/lpsat.html), [MathSAT 4](http://mathsat4.disi.unitn.it/), [MiniSmt](http://cl-informatik.uibk.ac.at/software/minismt/), [Mistral](http://www.cs.utexas.edu/~tdillig/mistral/index.html), [OpenSMT](http://verify.inf.usi.ch/opensmt1), [raSAT](http://www.jaist.ac.jp/~mizuhito/tools/rasat.html), [RDL](http://www.ai-lab.it/ccr/index.html), [SatEEn](http://vlsi.colorado.edu/~hhkim/sateen/), [Simplify](http://kind.ucd.ie/products/opensource/Simplify/), [Simplics](http://fm.csl.sri.com/simplics/), [SONOLAR](http://www.informatik.uni-bremen.de/agbs/florian/sonolar/), [Spear](http://www.domagoj-babic.com/index.php/ResearchProjects/Spear), [STeP](http://www-step.stanford.edu/), [SVC](http://verify.stanford.edu/SVC/), [SWORD](http://www.informatik.uni-bremen.de/agra/eng/sword.php), [UCLID](http://uclid.eecs.berkeley.edu/), [Yices](http://yices.csl.sri.com/old/yices1-documentation.shtml).
- [Utilities](https://smt-lib.org/utilities.shtml)
	- Editing
		- Syntax highlighting for [VIM](https://github.com/bohlender/vim-z3-smt2).
		- Syntax highlighting mode [TextMate and Sublime](https://bitbucket.org/AdrienChampion/tmlanguages).
		- [Emacs mode](https://github.com/chsticksel/smtlib-mode) to edit and run SMT-LIB 2 scripts.
	- Parsing
		- An [ANTLR grammar](https://github.com/julianthome/smtlibv2-grammar) of SMT-LIB 2.6 scripts.
		- [**jSMTLIB**](http://smtlib.github.io/jSMTLIB/), a suite of Java tools for parsing and type-checking SMT-LIB 2 scripts, and translating them to the input languages of some non-SMT-LIB-conforming solvers.
		- An open source [generic lexer and parser](http://es.fbk.eu/people/griggio/misc/smtlib2parser.html) for SMT-LIB 2.0 scripts implemented in Flex and Bison and C99.
		- A [Haskell library](http://hackage.haskell.org/package/smt-lib) for parsing and printing SMT-LIB 2 scripts.
		- An SWI-Prolog [parser](https://eu.swi-prolog.org/pack/list?p=smtlib) for SMT-LIB 2.6 scripts.
		- An OCaml [parser](http://www.cs.uiowa.edu/~astump/software/ocaml-smt2.zip) for SMT-LIB 2.0 scripts (not maintained).
	- Language Server
		- [**Dolmen**](https://github.com/Gbury/dolmen), an LSP server SMT-LIB 2.6.
	- Debugging
		- [**ddSMT**](http://fmv.jku.at/ddsmt/), a delta-debugger (input minimizer) for SMT-LIB-compliant solvers.
	- Interfaces
		- [**Nsolv**](https://github.com/delcypher/nsolv), a front-end that allows multiple SMT-LIB 2 compliant solvers to be executed in parallel.
		- [**rsmt2**](https://github.com/kino-mc/rsmt2), a generic Rust library to interact with SMT-LIB 2 compliant solvers running in a separate system process.
		- [**SBV**](http://leventerkok.github.com/sbv/), a tool to express properties of Haskell programs and prove them using SMT solvers via an SMT-LIB interface.
		- [**SMT Kit**](http://ahorn.github.io/smt-kit/), a C++11 library for many-sorted logics targeting quantifier-free SMT-LIB 2.0 formulas.
		- [**SMTpp**](https://github.com/ossanha/smtpp), an OCaml tool operating both as a source-to-source transformer and analyzer for SMT-LIB 2.0.
		- [**pySMT**](http://www.pysmt.org/), a Python library for manipulating and solving SMT formulas using SMT-LIB 2-compliant solvers.


### Other Resources
[Satisfiability modulo theories - Wikipedia](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories)



## Intro
> [!links]
> ↗ [First Order Theory (FOT) & Satisfiability Modulo Theories (SMT)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First%20Order%20Theory%20(FOT)%20&%20Satisfiability%20Modulo%20Theories%20(SMT).md)
> 
> ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
> ↗ [Z3 Theorem Prover](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md)
> ↗ [cvc5 (Cooperating Validity Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/cvc5%20(Cooperating%20Validity%20Checker).md)
> ↗ [openSMT](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/openSMT.md)
> 
> ---
> ↗ [Problem Solving & Search-Based Methods](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)
> ↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)
> 
> ↗ [Mathematical Optimization (Programming)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
> ↗ [Program Optimization](../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Program%20Optimization/Program%20Optimization.md)
> ↗ [Equality Saturation (EqSat)](../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Program%20Optimization/Equality%20Saturation%20(EqSat)/Equality%20Saturation%20(EqSat).md)
> 
> ↗ [Program Equivalence and Metatheory](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Program%20Equivalence%20and%20Metatheory/Program%20Equivalence%20and%20Metatheory.md)
> ↗ [Equational Reasoning & Term Rewriting](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Program%20Equivalence%20and%20Metatheory/Equational%20Reasoning%20&%20Term%20Rewriting/Equational%20Reasoning%20&%20Term%20Rewriting.md)


### SMT Solving Fundamentals: CDCL(T)
> [!links]
> ↗ [SAT Solving & Algorithms](../SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md)
> ↗ [Conflict-Driven Clause Learning (CDCL)](../SAT%20Solving%20&%20Algorithms/Conflict-Driven%20Clause%20Learning%20(CDCL).md)
> 
> ↗ [Program Abstraction & Abstract Interpretation](../../../🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md) "Abstraction using over-approximation"
> 
> ↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"

Main idea: combine CDCL SAT solving with theory solvers
- CDCL-based SAT over the _Boolean structure_ (boolean abstraction) of the formula
- theory solver handles the _conjunctive fragment_
- Recall: SAT solvers good at pruning exponential search space

This is called _CDCL(T)_
- T could be a combination of theories
- (Earlier papers called it DPLL(T) …)

![](../../../../../../Assets/Pics/Screenshot%202026-10-08%20at%2022.23.38.png)

![](../../../../../../Assets/Pics/Screenshot%202026-10-08%20at%2022.44.37.png)

![](../../../../../../Assets/Pics/Screenshot%202026-10-08%20at%2022.45.24.png)



## Ref
