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

↗ [Neuro-Symbolic AI](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Neuro-Symbolic%20AI/Neuro-Symbolic%20AI.md)


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
https://egraphs.org/
EGRAPHS Community
- [Home](https://egraphs.org/)
 - [Community Meeting](https://egraphs.org/meeting/)
 - [Workshop](https://egraphs.org/workshop/)
 - [Zulip Chat](https://egraphs.org/zulip/)
The EGRAPHS community brings together researchers and practitioners that use e-graphs and related techniques. E-graphs are data structures for working with large equivalence classes of programs. While originally designed for use in automated theorem provers (such as SMT solvers), they have recently been employed to build new kinds of program optimizers and synthesizers using a technique called _equality saturation_.
Curious what people are doing with e-graphs? Check out [Philip Zucker’s](https://www.philipzucker.com/) page on [Awesome E-graphs](https://github.com/philzook58/awesome-egraphs).

https://egraphs-good.github.io/
The egg project uses e-graphs to provide a new way to build program optimizers and synthesizers.



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
> 🤖 GPT 6.0 

Early Mathematical Reasoning about Program Correctness
- **1949 — Alan Turing, "Checking a Large Routine"**
	- One of the earliest examples of a mathematical proof about a computer program.
	- Reasoned about assertions that should hold at selected points in a program.
	- Anticipated the later idea of **loop invariants** and assertion-based verification.

 ---
Assertional and Deductive Verification
- **1967 — Robert W. Floyd, "Assigning Meanings to Programs"**
	- Associate logical assertions with points in a program's control flow.
	- Prove that program commands preserve the required assertions.
	- Provides a systematic basis for proving program correctness and termination.
	- Introduced what became known as the **Floyd method** or **inductive assertion method**.
- **1969 — C. A. R. Hoare, "An Axiomatic Basis for Computer Programming"**
	- Introduced a compositional, syntax-directed proof system for sequential programs.
	- Proof rules are expressed using predicate logic.
	- Introduced the **Hoare triple**: `{P} S {Q}`
	    - `P` — precondition
	    - `S` — program statement or program fragment
	    - `Q` — postcondition
	  - Meaning under **partial correctness**:
		- if `S` starts in a state satisfying `P`,
		- and `S` terminates,
		- then the resulting state satisfies `Q`.
		- To establish **total correctness**, termination must additionally be proved.
- **1975 — Edsger W. Dijkstra, Weakest Preconditions**
	- Introduced predicate-transformer semantics and the **weakest precondition**: `wp(S, Q)`
	- `wp(S, Q)` is the weakest condition on the initial state that guarantees execution of `S` establishes postcondition `Q`.
	- Provided a calculational foundation for:
	    - program correctness,
	    - program derivation,
	    - verification-condition generation.

---
Verification of Concurrent and Reactive Programs

- **1976 — Owicki–Gries Method**
	- Extended Hoare-style deductive verification from sequential programs to **parallel / concurrent programs**.
	- Each process is first proved locally correct.
	- Additional checks establish that processes do not invalidate one another's assertions (**interference freedom**).
	- An early syntax-directed proof technique for concurrent programs.
- **1977 — Amir Pnueli, "The Temporal Logic of Programs"**
	- Introduced temporal logic as a systematic way to specify and reason about ongoing program executions.
	- Allows properties to refer to states and events **over time**, rather than only to initial and final states.
	- Important distinction:
		- **Safety** — "something bad never happens"
		- **Liveness** — "something good eventually happens"
	- Became a major foundation for the verification of concurrent and reactive systems and, later, for model checking.

---
Static Analysis through Abstraction

- **1977 — Patrick Cousot and Radhia Cousot, Abstract Interpretation**
	- Introduced a general mathematical framework for sound static program analysis.
	- Instead of computing exact program behaviors, analyze an **abstract approximation** of those behaviors.
	- Makes it possible to automatically infer properties such as:
		- value ranges,
		- signs,
		- reachable states,
		- invariants,
		- absence of certain runtime errors.
	- Became a theoretical foundation for many modern static-analysis tools.

---
Model Checking: Algorithmic Verification

- **1981–1982 — Clarke–Emerson and Queille–Sifakis**
	- Established **model checking** as an automatic verification technique.
	- Developed independently by:
	    - Edmund Clarke and E. Allen Emerson
	    - Jean-Pierre Queille and Joseph Sifakis
	- Main shift:
		- **proof-rule based verification** → reason about program text using logical inference rules
		- **model checking** → construct a state-transition model and algorithmically check whether the model satisfies a logical property
	  - Typical question: 
		  - Does this concurrent / reactive system satisfy property `φ`?
	- Typical ingredients:
		- a finite-state transition system,
		- a specification expressed in temporal logic,
		- an algorithm that explores the state space.
	- Major advantage:
		- highly automated;
	    - when a property fails, the checker can often produce a **counterexample trace**.
	- Major challenge:
	    - **state-space explosion**.
- **1990s — Symbolic Model Checking**
	- Represent sets of states symbolically rather than enumerating states individually.
	- BDD-based symbolic techniques made it possible to analyze dramatically larger state spaces.
	- Model checking became particularly influential in hardware verification.
- **2000 — Counterexample-Guided Abstraction Refinement (CEGAR)**
	- Combine abstraction with model checking.
	- Typical loop:
	    1. construct an abstract model;
	    2. model-check the abstract model;
	    3. obtain a counterexample;
	    4. determine whether it is real or **spurious**;
	    5. refine the abstraction;
	    6. repeat.
	- Became an important architecture for scalable software model checking.

---
Local Reasoning about Memory

- **2001–2002 — Separation Logic**
	- Extended Hoare-style reasoning to programs manipulating mutable heap structures.
	- Introduced operators such as **separating conjunction** (`*`) for reasoning about disjoint regions of memory.
	- Enables **local reasoning**:
		- reason about the portion of memory a program fragment actually accesses, rather than the entire heap.
	- Became a major foundation for:
		- heap verification,
		- pointer reasoning,
		- memory-safety analysis,
		- modular verification of mutable data structures.

---
SMT-Based Automated Deductive Verification

- **2000s — Verification Conditions + Automated Theorem Proving / SMT**
  - Deductive verification became increasingly automated.

  Typical workflow:

  `Program + Specifications`
  → `Verification Condition Generator`
  → `Logical Verification Conditions (VCs)`
  → `SMT Solver / Theorem Prover`

  - Programmers provide specifications such as:
    - preconditions,
    - postconditions,
    - assertions,
    - loop invariants,
    - function contracts,
    - termination measures.

  - The verifier automatically converts the program and its specifications into
    logical proof obligations.

  - If all required VCs are proved valid, the program is verified with respect to
    its specification.

  - Conceptually, validity checking can be reduced to satisfiability checking:

    `VC is valid`
    ⇔
    `¬VC is unsatisfiable`

  - Typical solver outcomes:

    - `UNSAT` for `¬VC` → the VC is proved valid
    - `SAT` → the VC does not hold; a model may help diagnose the failure
    - `UNKNOWN` → the solver could not establish the result

- **2008 — Z3 SMT Solver**
  - Efficient SMT solving for combinations of theories such as:
    - arithmetic,
    - arrays,
    - bit-vectors,
    - uninterpreted functions,
    - quantifiers.
  - SMT solvers made large parts of deductive verification practically automatic.

- **2010 — Dafny**
  - A verification-aware programming language and automatic program verifier.
  - Specifications are written directly alongside executable code, for example:

    - `requires` — preconditions
    - `ensures` — postconditions
    - `invariant` — loop invariants
    - `assert` — intermediate proof obligations
    - `decreases` — termination measures

  - Simplified verification pipeline:

    `Dafny program`
    → `Boogie`
    → `Verification Conditions`
    → `Z3 SMT solver`

  - Important point:
    - Dafny is still fundamentally **deductive verification**.
    - The proof obligations are derived from program semantics and specifications.
    - Automation mainly eliminates the need to prove each logical step manually.
    - Users may still need to provide invariants, specifications, lemmas, or other
      proof guidance.

---
Modern Program Verification

Modern verification systems increasingly combine several previously separate ideas:

- **Deductive verification**
  - Hoare logic
  - weakest preconditions
  - verification-condition generation
  - SMT solving

- **Model checking**
  - explicit-state exploration
  - symbolic model checking
  - bounded model checking
  - temporal-logic verification

- **Static analysis**
  - abstract interpretation
  - dataflow analysis
  - shape analysis

- **Abstraction and refinement**
  - predicate abstraction
  - CEGAR

- **Symbolic reasoning**
  - symbolic execution
  - constraint solving
  - SAT / SMT

- **Heap and modular reasoning**
  - separation logic
  - ownership
  - permissions

- **Invariant / specification synthesis**
  - template-based synthesis
  - CEGIS / SyGuS
  - CHC solving
  - PDR / IC3-style reasoning

- **Recent AI-assisted approaches**
  - LLM-generated specifications,
  - invariants,
  - contracts,
  - lemmas,
  - and proof hints,
  - with a formal verifier used as the final correctness checker.

##### Two Major Traditions
A useful high-level view is that program verification developed along two major, partly converging traditions:


1. Deductive / Proof-Based Verification

`Program + Specification`
→ `Proof Obligations`
→ `Theorem Prover / SMT Solver`

Examples:
- Floyd assertions
- Hoare logic
- weakest preconditions
- separation logic
- Boogie
- Dafny

Characteristics:
- naturally supports rich, potentially infinite-state programs;
- can prove strong functional-correctness properties;
- usually requires specifications and sometimes auxiliary invariants or lemmas.


2. Model-Based / Algorithmic Verification

`System`
→ `State-Transition Model`
→ `Model-Checking Algorithm`
→ `Satisfied / Counterexample`

Examples:
- temporal logic
- explicit-state model checking
- symbolic model checking
- bounded model checking
- CEGAR

Characteristics:
- often highly automated;
- especially effective for finite-state and reactive/concurrent systems;
- state-space explosion is the central scalability challenge.
#### Modern Trend

The distinction is no longer strict.

Modern verifiers frequently combine:

`deduction + abstraction + model checking + SAT/SMT + synthesis`

For example, abstraction may reduce an infinite-state program to a manageable model,
a model checker may find a counterexample, an SMT solver may determine whether the
counterexample is feasible, and the abstraction may then be refined automatically.

#### Verification-Condition Generation in One Picture

Given:

    {P}
    S
    {Q}

and required annotations such as loop invariants, a verifier constructs logical
conditions whose validity implies correctness.

For example:

    Program
      +
    Preconditions / Postconditions
      +
    Loop Invariants
          │
          ▼
    VC Generator
          │
          ▼
    Verification Conditions
          │
          ▼
    SMT Solver / Theorem Prover
          │
          ├── proved ──────→ verified
          │
          └── not proved ──→ counterexample/model, timeout,
                              unknown, or additional annotations needed

This is the core architecture behind many modern deductive verifiers.

---

Historical Trajectory
1949  Turing
      Mathematical reasoning about program correctness
        ↓
1967  Floyd
      Assertions attached to control-flow points
        ↓
1969  Hoare
      Compositional axiomatic semantics / Hoare logic
        ↓
1975  Dijkstra
      Weakest preconditions and calculational reasoning
        ↓
1976  Owicki–Gries
      Deductive verification of parallel programs
        ↓
1977  Pnueli
      Temporal logic for reactive and concurrent programs
        ↓
1977  Cousot & Cousot
      Abstract interpretation
        ↓
1981–82
      Clarke–Emerson / Queille–Sifakis
      Automatic model checking
        ↓
1990s
      Symbolic model checking
        ↓
2000  CEGAR
      Automatic abstraction refinement
        ↓
2001–02
      Separation logic and local heap reasoning
        ↓
2000s
      SMT-based automated deductive verification
        ↓
2008  Z3
        ↓
2010  Dafny
        ↓
Today
      Deduction + model checking + abstract interpretation
      + symbolic execution + SMT + synthesis + AI-assisted verification


### A Brief Summary of Program Verification Techniques
> 🤖 GPT 6.0 (2026.09)

|Challenge|Established / Mainstream Techniques|Research Frontier|Engineering Maturity|
|---|---|---|---|
|**Loop invariant synthesis**|Abstract interpretation, predicate abstraction, CEGAR, interpolation, PDR/IC3-style CHC solving|SyGuS/CEGIS-based invariant synthesis; LLM-generated invariants with verifier feedback|★★★☆☆|
|**Function contracts**|Modular verification, procedure summaries, separation logic, assume-guarantee reasoning|Automatic contract inference/synthesis; LLM-assisted specification and contract synthesis with verifier feedback|★★★☆☆|
|**Termination**|Ranking functions, size-change termination, transition invariants, lexicographic/multiphase ranking functions|Nonlinear, heap-aware, probabilistic, and concurrent ranking-function synthesis|★★★☆☆|
|**Heap / pointer reasoning**|Separation logic, ownership/borrowing, shape analysis, points-to and alias analysis|Automatic inductive heap-predicate synthesis; concurrent separation logic; richer compositional heap reasoning|★★★★☆ _(memory safety)_; ★★☆☆–★★★☆☆ _(rich heap properties)_|
|**Quantified reasoning**|E-matching, MBQI, CEGQI, quantifier elimination for suitable fragments|Automatic trigger selection; syntax-guided, model-guided, and learned instantiation strategies|★★☆☆–★★★☆☆|
|**Nonlinear arithmetic**|NLSAT/CAD for nonlinear real arithmetic, Gröbner-basis methods, interval methods; bit-blasting for finite-width bit-vectors|Stronger theory combination, proof-guided algebraic reasoning, nonlinear mixed integer/real reasoning|★★☆☆|
|**Concurrency**|POR/DPOR, thread-modular reasoning, rely-guarantee reasoning, concurrent separation logic, weak-memory analysis|Scalable compositional verification; concurrent invariant synthesis; verification under relaxed/weak memory models|★★☆☆–★★★☆☆|
|**Path / state-space explosion**|Symbolic execution, state merging/subsumption, CEGAR, bounded exploration|Hybrid fuzzing + symbolic/concolic execution; learned or coverage-guided search; compositional summaries|★★★★☆ _(bug finding)_; ★★☆☆–★★★☆☆ _(exhaustive proof)_|
|**Specification**|Contracts, specification languages/DSLs, formal models, property templates|LLM-assisted specification synthesis; specification mining; test/oracle/verifier-guided refinement|★★☆☆|
|**Abstraction design**|Abstract interpretation, predicate abstraction, CEGAR, domain-specific abstractions|Automatic abstraction discovery; learned abstractions; data-driven/neural-guided refinement|★★★★☆|



## Ref
