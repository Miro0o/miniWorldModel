# SMT (Satisfiability Modulo Theory) Solvers

[TOC]



## Res
### Related Topics
↗ [Complexity Theory & Computational Complexity](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
↗ [SMT Solving & Algorithms](SMT%20Solving%20&%20Algorithms.md)

↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)
↗ [First Order Theory (FOT) & Satisfiability Modulo Theories (SMT)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First%20Order%20Theory%20(FOT)%20&%20Satisfiability%20Modulo%20Theories%20(SMT).md)


### Other Resources
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



## Intro
> [!links]
> ↗ [First Order Theory (FOT) & Satisfiability Modulo Theories (SMT)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First%20Order%20Theory%20(FOT)%20&%20Satisfiability%20Modulo%20Theories%20(SMT).md)
> ↗ [SMT Solving & Algorithms](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)


### List of SMT Solvers
> 🔗 https://en.wikipedia.org/wiki/Satisfiability_modulo_theories#Solvers


> 🔗 [SMT-LIB The Satisfiability Modulo Theories Library](https://smt-lib.org/)

[Solvers](https://smt-lib.org/solvers.shtml)
- Current systems
	- To our knowledge, the following systems (listed alphabetically) were under active development in 2018: [Alt-Ergo](http://ergo.lri.fr/), [AProVE](http://aprove.informatik.rwth-aachen.de/), [Boolector](http://fmv.jku.at/boolector/), [CVC4](http://cs.nyu.edu/acsys/cvc4/), [MathSAT 5](http://mathsat.fbk.eu/), [Minkeyrink](https://minkeyrink.com/), [OpenSMT 2](http://verify.inf.usi.ch/content/opensmt2), [Q3B](https://github.com/martinjonas/Q3B), [SMTInterpol](http://ultimate.informatik.uni-freiburg.de/smtinterpol/), [SMT-RAT](http://smtrat.github.io/), [STP](http://stp.github.io/), [veriT](http://www.verit-solver.org/), [Yices 2](http://yices.csl.sri.com/), [Z3](https://github.com/Z3Prover/z3/wiki).
- Older systems
	- To our knowledge, the following systems are no longer current as their development has been discontinued. They are included for historical reasons and comparison purposes. [Ario](http://www.eecs.umich.edu/~ario/), [Barcelogic](http://www.lsi.upc.es/~oliveras/bclt-main.html), [Beaver](http://uclid.eecs.berkeley.edu/Beaver/), [CVC3](http://www.cs.nyu.edu/acsys/cvc3/), [DPT](http://sourceforge.net/projects/dpt), [Fx7](http://moskal.me/smt/en.html), [haRVey](http://webloria.loria.fr/equipes/cassis/softwares/haRVey/), [ICS](http://ics.csl.sri.com/), [iSAT3](https://projects.avacs.org/projects/isat3), [LPSAT](http://www.cs.washington.edu/ai/lpsat.html), [MathSAT 4](http://mathsat4.disi.unitn.it/), [MiniSmt](http://cl-informatik.uibk.ac.at/software/minismt/), [Mistral](http://www.cs.utexas.edu/~tdillig/mistral/index.html), [OpenSMT](http://verify.inf.usi.ch/opensmt1), [raSAT](http://www.jaist.ac.jp/~mizuhito/tools/rasat.html), [RDL](http://www.ai-lab.it/ccr/index.html), [SatEEn](http://vlsi.colorado.edu/~hhkim/sateen/), [Simplify](http://kind.ucd.ie/products/opensource/Simplify/), [Simplics](http://fm.csl.sri.com/simplics/), [SONOLAR](http://www.informatik.uni-bremen.de/agbs/florian/sonolar/), [Spear](http://www.domagoj-babic.com/index.php/ResearchProjects/Spear), [STeP](http://www-step.stanford.edu/), [SVC](http://verify.stanford.edu/SVC/), [SWORD](http://www.informatik.uni-bremen.de/agra/eng/sword.php), [UCLID](http://uclid.eecs.berkeley.edu/), [Yices](http://yices.csl.sri.com/old/yices1-documentation.shtml).


### SMT Solver Applications
> [!links]
> ↗ [Problem Solving & Search-Based Methods](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)
> ↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)
> 
> ↗ [Constraint Solving & Theorem Proving](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md)
> 
> ↗ [Neuro-Symbolic AI](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Neuro-Symbolic%20AI/Neuro-Symbolic%20AI.md)

- Model Checking
    - (in)finite-state systems
    - hybrid systems
    - abstraction refinement
    - state invariant generation
    - interpolation
- Program Analysis
    - symbolic execution
    - program verification
    - verification in separation logic
    - (non-)termination
    - loop invariant generation
    - procedure summaries
    - race analysis
    - concurrency errors detection
- Software Synthesis
    - syntax-guided function synthesis
    - automated program repair
    - synthesis of reactive systems
    - synthesis of self-stabilizing systems
    - network schedule synthesis
- Type Checking
    - dependent types
    - semantic subtyping
    - type error localization
- Security
    - automated exploit generation
    - protocol debugging
    - protocol verification
    - analysis of access control policies
    - run-time monitoring
- Compilers
    - compilation validation
    - optimization of arithmetic computations
- Machine Learning
    - verification of deep NNs
    - generation of adversarial examples
- Interactive Theorem Proving
    - increasing level of automation
- Software Engineering
    - system model consistency
    - design analysis
    - test case generation
    - verification of ATL transformations
    - semantic search for code reuse
    - interactive (software) requirements prioritization
    - generating instances of meta-models
    - behavioral conformance of web services



## Ref
[🤔 understanding smt solvers: an introduction to z3]: https://de-engineer.github.io/smt-solvers/
this post was an overview of smt solvers with the practical example of a ctf challenge and we also touched a bit on their limitations. i’m not an expert on the topic, i tried to cover all the introductory knowledge that i could put in without increasing the complexity of the blog. there is indeed far more to learn about and you can do so by checking all the links in the resources section.
- [symbolic execution lecture from mit](https://www.youtube.com/watch?v=yrvzpvhyhzw)
- [symbolic execution with triton engine](https://pwn.umasscybersec.org/lectures/index.html)
- [hexrays ctf solution with z3](https://www.youtube.com/watch?v=kzd1hi0zbyc)
- [ost2 course on symbolic analysis (teaches angr)](https://p.ost2.fyi/courses/course-v1:opensecuritytraining2+re3201_symexec+2021_v1/course/)
- [papers by z3 team](https://z3prover.github.io/papers/)
- [the path explosion problem in symbolic execution - paper](https://studenttheses.uu.nl/bitstream/handle/20.500.12932/35856/thesis.pdf?sequence=1&isallowed=y)
