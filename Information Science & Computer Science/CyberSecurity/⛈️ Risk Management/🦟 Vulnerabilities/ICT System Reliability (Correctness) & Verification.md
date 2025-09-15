# ICT System Reliability (Correctness) & Verification

[TOC]



## Res
### Related Topics
↗ [Cryptology & Secure Communication](../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
↗ [Reliable Data Transfer (RDT)](../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/Reliable%20Data%20Transfer%20(RDT)/Reliable%20Data%20Transfer%20(RDT).md)

↗ [Formal Semantics and Programming Language](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [Formal Methods & Formal Verification (FV)](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)
- ↗ [(Formal) Model Checking](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking.md)

↗ [Software Quality Assurance (SQA)](../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)
- ↗ [Software Testing](../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)


### Other Resources



## Intro
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

**System verification techniques** are being applied to the design of ICT systems in a more reliable way. Briefly, system verification is used to establish that the design or product under consideration possesses certain properties. The properties to be validated can be quite elementary, e.g., a system should never be able to reach a situation in which no progress can be made (a deadlock scenario), and are mostly obtained from the system’s specification. This specification prescribes what the system has to do and what not, and thus constitutes the basis for any verification activity. A defect is found once the system does not fulfill one of the specification’s properties. **The system is considered to be “correct” whenever it satisfies all properties obtained from its specification.** So correctness is always relative to a specification, and is not an absolute property of a system. A schematic view of verification is depicted in Figure 1.2.

![|500](../../../../Assets/Pics/Screenshot%202025-08-29%20at%2012.59.44.png)

**Error Introduction, Detection, and Repair Costs**:
About 50% of all defects are introduced during programming, the phase in which actual coding takes place. Whereas just 15% of all errors are detected in the initial design stages, most errors are found during testing. At the start of unit testing, which is oriented to discovering defects in the individual software modules that make up the system, a defect density of about 20 defects per 1000 lines of (uncommented) code is typical. This has been reduced to about 6 defects per 1000 code lines at the start of system testing, where a collection of such modules that constitutes a real product is tested. On launching a new software release, the typical accepted software defect density is about one defect per 1000 lines of code lines1.

Errors are typically concentrated in a few software modules – about half of the modules are defect free, and about 80% of the defects arise in a small fraction (about 20%) of the modules – and often occur when interfacing modules. The repair of errors that are detected prior to testing can be done rather economically. The repair cost significantly increases from about $ 1000 (per error repair) in unit testing to a maximum of about $ 12,500 when the defect is demonstrated during system operation only. It is of vital importance to seek techniques that find defects as early as possible in the software design process: the costs to repair them are substantially lower, and their influence on the rest of the design is less substantial.

![](../../../../Assets/Pics/Screenshot%202025-08-29%20at%2013.08.12.png)

↗ [SDLC (Software Development Life Circle) & SDLC Models](../../../Software%20Engineering/Software%20Development%20Pattern/🔄%20SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models/SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models.md)
↗ [SDL (Secure Development Lifecycle)](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/Software%20Supply%20Chains%20Security/SDL%20(Secure%20Development%20Lifecycle).md)


### Software Verification
**Software Verification**: ↗ [Software Quality Assurance (SQA)](../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)
- *Peer reviewing* (↗ [Code Review](../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)) and *software testing* (↗ [Software Testing](../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)) are the major software verification techniques used in practice.
- Formal verification techniques for property P: ↗ [Formal Methods & Formal Verification (FV)](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)
	- Deductive methods:
		- Method: provide a formal proof that P holds
		- Tool:
			- Theorem Prover: [Automated Theorem Provers & Interactive Theorem Proving](../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers/Automated%20Theorem%20Provers%20&%20Interactive%20Theorem%20Proving/Automated%20Theorem%20Provers%20&%20Interactive%20Theorem%20Proving.md), [SMT (Satisfiability Modulo Theory) Solvers](../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md), [SAT (Boolean Satisfiability Problem) Solvers](../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md);
			- Proof Assistant;
			- Proof Checker;
		- Applicable if: system has form a systematical theory
	- ↗ [(Formal) Model Checking](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking.md):
		- Method: systematic check on P in ALL STATES
		- Tool: model checker
		- Applicable if: system generates (finite) behavioural model
	- Model-based Simulation or Testing: ↗ [Software Testing](../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)
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
- ↗ [(Formal) Model Checking](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking.md)


### Hardware Verification
**Hardware verification**: *Emulation*, *simulation*, and *structural analysis* are the major techniques used in hardware verification.
- **Structural analysis** comprises several specific techniques such as synthesis, timing analysis, and equivalence checking that are not described in further detail here.
- **Emulation** is a kind of testing. A reconfigurable generic hardware system (the emulator) is configured such that it behaves like the circuit under consideration and is then extensively tested. As with software testing, emulation amounts to providing a set of stimuli to the circuit and comparing the generated output with the expected output as laid down in the chip specification. To fully test the circuit, all possible input combinations in every possible system state should be examined. This is impractical and the number of tests needs to be reduced significantly, yielding potential undiscovered errors.
- With **simulation**, a model of the circuit at hand is constructed and simulated. Models are typically provided using hardware description languages such as Verilog or VHDL that are both standardized by IEEE. Based on stimuli, execution paths of the chip model are examined using a simulator. These stimuli may be provided by a user, or by automated means such as a random generator. A mismatch between the simulator’s output and the output described in the specification determines the presence of errors. Simulation is like testing, but is applied to models. It suﬀers from the same limitations, though: the number of scenarios to be checked in a model to get full confidence goes beyond any reasonable subset of scenarios that can be examined in practice.
	- Simulation is the most popular hardware verification technique and is used in various design stages, e.g., at register-transfer level, gate and transistor level. Besides these error detection techniques, hardware testing is needed to find fabrication faults resulting from layout defects in the fabrication process.


### Verification 🆚 Validation
#verification #validation

> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

...

Although the aforementioned steps are often well understood, in pr
actice it may be a serious problem to judge whether the formalized problem statement (model + properties) is an **adequate description** of the actual verification problem. This is also known as the validation problem. The complexity of the involved system, as well as the lack of precision of the informal specification of the system’s functionality, may make it hard to answer this question satisfactorily.

Verification ≠ Validation
- Verification = "check that we are building the thing right", i.e. we are building things in a correct approach. 
- Validation = "check that we are building the right thing", i.e. we are building the thing that is exactly we plan to build. 



## Ref
