# Software (Program) Verification

[TOC]



## Res
### Related Topics
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)
↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE)/Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE).md)

↗ [Formal Verifications & Constraint Solvers (Proof Assistants)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
- ↗ [Automated & Generic Theorem Provers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
- ↗ [Symbolic & Concolic Execution Engines](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Symbolic%20&%20Concolic%20Execution%20Engines/Symbolic%20&%20Concolic%20Execution%20Engines.md)


### Leraning Resources
https://martinsteffen.github.io/programverification/
Specification and Verification of Parallel Systems | Some feed in connection with the lecture IN5110
The page collects posts in connection with the lecture [Specification and Verification of Parallel Systems (IN5110)](https://www.uio.no/studier/emner/matnat/ifi/IN5110/h25/index.html) I am planning for information about the material and content of the lecture. Important messages (for instance concerning organizational issues) will not appear here, but as “beskjeder” on the official IFI page (and email). The posts are mostly **NOT** pensum. For example, in the oral exam, there won’t be questions specifically targeting information posted (only) here. The intention is to shed additional light on the material covered in the lecture, with the hope of being useful.


### Other Resources



## Intro
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

**Software Verification**: ↗ [Software Quality Assurance (SQA)](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)
- *Peer reviewing* (↗ [Code Review](../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)) and *software testing* (↗ [Software Testing](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)) are the major software verification techniques used in practice.
- Formal verification techniques for property P: ↗ [Formal Methods & Formal Verification (FV)](../Formal%20Methods%20&%20Formal%20Verification%20(FV).md)
	- Deductive methods:
		- Method: provide a formal proof that P holds
		- Tool:
			- Theorem Prover: ↗ [Automated & Generic Theorem Provers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md), ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md), ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md);
			- Proof Assistant; ↗ [Formal Verifications & Constraint Solvers (Proof Assistants)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
			- Proof Checker;
		- Applicable if: system has form a systematical theory
	- ↗ [(Formal) Model Checking](../(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md):
		- Method: systematic check on P in ALL STATES
		- Tool: model checker
		- Applicable if: system generates (finite) behavioural model
	- Model-based Simulation or Testing: ↗ [Software Testing](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)
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
- ↗ [(Formal) Model Checking](../(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)



## Ref
