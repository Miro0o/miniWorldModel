# Software (Program) Verification

[TOC]



## Res
### Related Topics
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29.md)
↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)

↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)
- ↗ [Generic & Automated Theorem Provers (ATP)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers.md)
- ↗ [Symbolic & Concolic Execution Engines](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Symbolic%20&%20Concolic%20Execution%20Engines/Symbolic%20&%20Concolic%20Execution%20Engines.md)


### Leraning Resources
https://martinsteffen.github.io/programverification/
Specification and Verification of Parallel Systems | Some feed in connection with the lecture IN5110
The page collects posts in connection with the lecture [Specification and Verification of Parallel Systems (IN5110)](https://www.uio.no/studier/emner/matnat/ifi/IN5110/h25/index.html) I am planning for information about the material and content of the lecture. Important messages (for instance concerning organizational issues) will not appear here, but as “beskjeder” on the official IFI page (and email). The posts are mostly **NOT** pensum. For example, in the oral exam, there won’t be questions specifically targeting information posted (only) here. The intention is to shed additional light on the material covered in the lecture, with the hope of being useful.


### Other Resources



## Intro
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

**Software Verification**: ↗ [Software Quality Assurance (SQA)](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/Software%20Quality%20Assurance%20%28SQA%29.md)
- *Peer reviewing* (↗ [Code Review](../../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)) and *software testing* (↗ [Software Testing](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/🧪%20Software%20Testing/Software%20Testing.md)) are the major software verification techniques used in practice.
- Formal verification techniques for property P: ↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29.md)
	- Deductive methods:
		- Method: provide a formal proof that P holds
		- Tool:
			- Theorem Prover: ↗ [Generic & Automated Theorem Provers (ATP)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29.md), ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers.md), ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers.md);
			- Proof Assistant; ↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)
			- Proof Checker;
		- Applicable if: system has form a systematical theory
	- ↗ [(Formal) Model Checking](../🧳%20%28Formal%29%20Model%20Checking/%28Formal%29%20Model%20Checking.md):
		- Method: systematic check on P in ALL STATES
		- Tool: model checker
		- Applicable if: system generates (finite) behavioural model
	- Model-based Simulation or Testing: ↗ [Software Testing](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/🧪%20Software%20Testing/Software%20Testing.md)
		- Method: test P by exploring possible behaviours.
		- Tool: 
		- Basic Procedure: 
			- take a model (simulation) or a realization (testing)
			- simulate it with certain inputs, e.g. test cases 
			- observe reaction and check whether this is "desired"
		- Important drawbacks:
			- numbers of possible behaviours are very large (even infinite)
			- unexplored behaviours may contain the fatal bug
		- Simulation /Testing can show the presence of errors, not there absence.

**Milestone Papers in Software Verification**
- Mathematical program correctness - (Turing, 1949)
- Syntax-based technique for sequential programs - (Hoare, 1969)
	- ﻿﻿for a given input, does a computer program generate the correct output?
	- ﻿﻿based on compositional proof rules expressed in predicate logic
- Syntax-based technique for concurrent programs (Pnueli, 1977)
	- ﻿﻿handles properties referring to states during the computation
	- ﻿﻿based on proof rules expressed in temporal logic
- Automated verification of concurrent programs
	- ﻿﻿model-based instead of proof-rule based approach
	- ﻿﻿does the concurrent program satisfy a given (logical) property?
- ↗ [(Formal) Model Checking](../🧳%20%28Formal%29%20Model%20Checking/%28Formal%29%20Model%20Checking.md)



## Ref
