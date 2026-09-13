# Program (Formal) Verification

[TOC]



## Res
### Related Topics
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29.md)
↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)

↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)
- ↗ [Generic & Automated Theorem Provers (ATP)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers.md)
- ↗ [Symbolic & Concolic Execution Engines](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Symbolic%20&%20Concolic%20Execution%20Engines/Symbolic%20&%20Concolic%20Execution%20Engines.md)

↗ [ICT System Reliability (Correctness) & Verification](../../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/ICT%20System%20Reliability%20%28Correctness%29%20&%20Verification.md)
↗ [Hardware (Digital Circuits) Verification](../Hardware%20%28Digital%20Circuits%29%20Verification/Hardware%20%28Digital%20Circuits%29%20Verification.md)

↗ [Software (Program) Techniques & Binary Engineering](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering.md)
- ↗ [Program Analysis Basics](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
- ↗ [Program Synthesis & Code Generation](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Synthesis%20&%20Code%20Generation/Program%20Synthesis%20&%20Code%20Generation.md)


### Learning Resources
https://martinsteffen.github.io/programverification/
Specification and Verification of Parallel Systems | Some feed in connection with the lecture IN5110
The page collects posts in connection with the lecture [Specification and Verification of Parallel Systems (IN5110)](https://www.uio.no/studier/emner/matnat/ifi/IN5110/h25/index.html) I am planning for information about the material and content of the lecture. Important messages (for instance concerning organizational issues) will not appear here, but as “beskjeder” on the official IFI page (and email). The posts are mostly **NOT** pensum. For example, in the oral exam, there won’t be questions specifically targeting information posted (only) here. The intention is to shed additional light on the material covered in the lecture, with the hope of being useful.

https://courses.compute.dtu.dk/02245/
02245 - Program Verification
- This course offers a hands-on introduction to the usage, construction, and theory of automated deductive program verifiers. Students should acquire the skills to apply and extend tool-supported methodologies for developing proven-correct software.

https://www.cse.cuhk.edu.hk/~pick/csci5690/
CSCI5690: Automated Reasoning about Software Systems

https://www.cs.princeton.edu/courses/archive/fall26/cos516/
COS 516/ECE 516: Automated Reasoning about Software, Fall 2026

|   |   |   |   |
|---|---|---|---|
|Date|Topics|Readings|Assignments|
|Sept 2|Introduction & Propositional logic.|Bradley/Manna Ch 1||
|Sept 7|_Labor Day holiday_|||
|Sept 9|Formal proofs and proof checking with Lean.|||
|Sept 14|SAT solving: DPLL and resolution.||PSet 1A due|
|Sept 16|SAT solving: CDCL -- [web demo](https://www.cs.princeton.edu/courses/archive/fall22/cos516/cdcl/).|Marques-Silva, Lynce, Malik: [SAT handbook, Chapter 4](https://ebookcentral.proquest.com/lib/princeton/detail.action?docID=448770)||
|Sept 21|Finite transition systems and Binary Decision Diagrams.||PSet 1B due|
|Sept 23|Binary decision diagrams.|Bryant: [Graph-Based Algorithms for Boolean Function Manipulation](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1676819)||
|Sept 28|First-order logic.|Bradley/Manna Ch 2|PSet 2 due|
|Sept 30|First-order theories.|Bradley/Manna Ch 3||
|Oct 5|SMT solving.|De Moura, Bjørner: [Satisfiability Modulo Theories: Introduction and Applications](https://dl.acm.org/doi/pdf/10.1145/1995376.1995394)|PSet 3 due|
|Oct 7|SMT solving.|Barrett, Sebastiani, Seisha, Tinelli: [SAT handbook, Chapter 26](https://ebookcentral.proquest.com/lib/princeton/detail.action?docID=448770)||
|Oct 12|Midterm review.||PSet 4 due|
|Oct 14|Midterm exam.|||
|Oct 19,21|_Fall break_|||
|Oct 26|Programs, operational semantics, and partial correctness.|Bradley/Manna Ch 4-6  <br>Hoare: [An axiomatic basis for computer programming](https://dl.acm.org/doi/pdf/10.1145/363235.363259)||
|Oct 28|Termination and total correctness.|||
|Nov 2|Semi-automated verification.|Bradley/Manna Ch 12|Project outline due|
|Nov 4|Invariant inference I: control flow, Floyd's logic, and Houdini|||
|Nov 9|Invariant inference II: data flow analysis||PSet 5 due|
|Nov 11|Abstract interpretation.|||
|Nov 16|Algebraic program analysis.|Kincaid, Reps, Cyphert: [Algebraic program analysis](https://link.springer.com/content/pdf/10.1007%2F978-3-030-81685-8_3.pdf)|PSet 6 due|
|Nov 18|Software model checking I.|Jhala, Majumdar: [Software Model Checking](https://dl.acm.org/doi/pdf/10.1145/1592434.1592438)||
|Nov 23|Software model checking II.|||
|Nov 25|_Thanksgiving break_|||
|Nov 30|Temporal logic.|||
|Dec 2|Project presentations|||
|Dec 7|Project presentations|||
|Dec 15|Dean's date||Project report due|


### Other Resources



## Intro
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

**Software Verification**: ↗ [Software Quality Assurance (SQA)](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/Software%20Quality%20Assurance%20%28SQA%29.md)
- *Peer reviewing* (↗ [Code Review](../../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)) and *software testing* (↗ [Software Testing](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/🧪%20Software%20Testing/Software%20Testing.md)) are the major software verification techniques used in practice.
- ==Formal verification techniques for property P==:
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

---
> 🔗 https://courses.compute.dtu.dk/02245/

One of the most fundamental questions in computer science is whether the programs we write are correct. In fact, the concern about correctness is as old as computers: Alan Turing already asked in 1949^[[Alan M. Turing. On checking a large routine. Report of a Conference on High Speed Automatic Calculating Machines, pages 67–69, 1949.](https://turingarchive.kings.cam.ac.uk/publications-lectures-and-talks-amtb/amt-b-8)]

> "how can one check a routine in the sense of making sure that it is right?”

Early on, we learn that we should test our programs to increase our confidence in the correctness of our programs. However, as adequately summarized by Turing Award winner Edsgar W. Dijkstra^[[Edsger W. Dijkstra: The humble programmer, CACM 1972](https://dl.acm.org/doi/10.1145/355604.361591)],

> “program testing can be very effective to show the presence of bugs, but it is hopelessly inadequate for showing their absence.”

Dijkstra went on to note that

> “the only effective way to raise the confidence level of a program is to give a convincing proof of its correctness.”

This course is concerned with the principles and pragmatics of _deductive_ **program verification** ­­­­- techniques for deriving such correctness proofs in a _machine-checkable_, _compositional_, and _automated_ fashion. All of the highlighted aspects play an important role:
- **Deductive reasoning**: our proofs must be obtained by drawing only sound conclusions from well-known assumptions.
- **Machine-checkable**: our proofs must be machine-checkable to rule out human errors and allow for changes to our programs without starting proving their correctness all over (on a piece of paper) again.
- **Compositional**: to scale to whole software projects, we must derive proofs of large programs from existing proofs of smaller programs. Moreover, changing aspects of one software component should not affect the correctness of other components that do not depend on it.
- **Automated**: while fully automated verification is, in general, not possible (due to known undecidability results), we want to require as little interaction from programmers as possible. Ideally, programmers should only specify the desirable properties a program.

verification: formally prove that the program is correct  
• rigor: uses well established mathematical foundations  
• exhaustiveness: considers all possible program behaviors  
• automation: uses computers to verify programs!  
“correctness”:  
• does the program compute the correct result?  
• will the program crash?  
• does the program leak private information?  
• does its runtime/power consumption fall within acceptable limits?


### A Brief History of Program Verification

- Mathematical program correctness - (Turing, 1949)
- Assigning Meaning to Programs [Floyd, 1967]  
	- program is annotated with assertions (formulas in logic)  
	- program is proved correct by reasoning about assertions
- Syntax-based technique for sequential programs - (Hoare, 1969)
	- ﻿﻿for a given input, does a computer program generate the correct output?
	- ﻿﻿based on compositional proof rules expressed in predicate logic
	- An Axiomatic Basis for Computer Programming [Hoare, 1969]  
	- Hoare Triple: {P} S {Q}  
		- S: statement (or fragments) in program  
		- P: precondition  
		- Q: postcondition  
	- meaning: if S executes from a state where P is true, and if S terminates, then Q is true in the resulting state
- Syntax-based technique for concurrent programs (Pnueli, 1977)
	- ﻿﻿handles properties referring to states during the computation
	- ﻿﻿based on proof rules expressed in temporal logic
- Automated verification of concurrent programs
	- ﻿﻿model-based instead of proof-rule based approach
	- ﻿﻿does the concurrent program satisfy a given (logical) property?
	- formal logics and proof systems  
	• allow mathematical reasoning using rules of inference  
	• can apply these rules by hand  
	automation example: Hoare logic [Hoare 69]  
	• inference rules for program statements  
	• given program annotated with specifications (pre + post-conditions, loop invariants)  
	• generate verification conditions (VCs) automatically  
	• if VCs are “valid”, then program is correct  
	• validity of VC can be checked by a theorem-prover  
	automation example: Dafny tool [Leino 2010]  
	• specifications: expressed in first order logic (FOL)  
	• VC generator  
	• theorem-prover: Z3 SMT solver
- ↗ [(Formal) Model Checking](../🧳%20%28Formal%29%20Model%20Checking/%28Formal%29%20Model%20Checking.md)



## Ref
