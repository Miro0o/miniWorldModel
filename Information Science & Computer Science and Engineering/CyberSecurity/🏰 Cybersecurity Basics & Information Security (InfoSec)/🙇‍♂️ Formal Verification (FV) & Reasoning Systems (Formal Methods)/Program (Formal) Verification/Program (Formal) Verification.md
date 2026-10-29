# Program (Formal) Verification

[TOC]



## Res
### Related Topics
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29.md)
↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)

↗ [Programming Language Theory (PLT)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20Theory%20%28PLT%29.md)

↗ [Formal Verifiers & Constraint Solvers & Checkers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers.md)
- ↗ [Theorem Provers & Proof Assistants](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/Theorem%20Provers%20&%20Proof%20Assistants/Theorem%20Provers%20&%20Proof%20Assistants.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers.md)
- ↗ [Symbolic & Concolic Execution Engines](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Symbolic%20&%20Concolic%20Execution%20Engines/Symbolic%20&%20Concolic%20Execution%20Engines.md)

↗ [Formal Verification & Analysis Programming Languages](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Formal%20Verification%20&%20Analysis%20Programming%20Languages/Formal%20Verification%20&%20Analysis%20Programming%20Languages.md)
- ↗ [LEAN](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Formal%20Verification%20&%20Analysis%20Programming%20Languages/LEAN.md)
- ↗ [Viper (Verification Infrastructure for Permission-​based Reasoning)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Formal%20Verification%20&%20Analysis%20Programming%20Languages/Viper%20%28Verification%20Infrastructure%20for%20Permission-​based%20Reasoning%29.md)
- ↗ [WhyML & Why3](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Formal%20Verification%20&%20Analysis%20Programming%20Languages/WhyML%20&%20Why3.md)
- ↗ [Dafny](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Formal%20Verification%20&%20Analysis%20Programming%20Languages/Dafny.md)

↗ [ICT System Reliability (Correctness) & Verification](../../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/ICT%20System%20Reliability%20%28Correctness%29%20&%20Verification.md)
↗ [Hardware (Digital Circuits) Verification](../Hardware%20%28Digital%20Circuits%29%20Verification/Hardware%20%28Digital%20Circuits%29%20Verification.md)

↗ [Software (Program) Techniques & Binary Engineering](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering.md)
- ↗ [Program Analysis Basics](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
	- ↗ [SCA (Static Code Analysis) & SAST](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/SCA%20%28Static%20Code%20Analysis%29%20&%20SAST.md)
- ↗ [Program Synthesis & Code Generation](../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Program%20Synthesis%20&%20Code%20Generation/Program%20Synthesis%20&%20Code%20Generation.md)

↗ [Programming Language Processing & Program Execution](../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Program Transformation & Compilation Theory (Compile-time)](../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29.md)
↗ [Code (Program) Analysis & Optimization](../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Code%20%28Program%29%20Analysis%20&%20Optimization/Code%20%28Program%29%20Analysis%20&%20Optimization.md)

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



## Intro
> [!links]
> ↗ [Programming Language & Formal Semantics](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Programming%20Language%20&%20Formal%20Semantics.md)
> ↗ [Axiomatic Semantics (Hoare-Style Logic)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Axiomatic%20Semantics%20%28Hoare-Style%20Logic%29/Axiomatic%20Semantics%20%28Hoare-Style%20Logic%29.md)
> ↗ [Denotational Semantics](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Denotational%20Semantics/Denotational%20Semantics.md)
> ↗ [Operational Semantics](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Operational%20Semantics/Operational%20Semantics.md)
> 
> ↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20%28Runtime%29/Procedure%20%28Function%29%20Call%20&%20Runtime%20Memory%20Layout.md)

> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

**Software Verification**: ↗ [Software Quality Assurance (SQA)](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/Software%20Quality%20Assurance%20%28SQA%29.md)
- *Peer reviewing* (↗ [Code Review](../../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)) and *software testing* (↗ [Software Testing](../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20%28SQA%29/🧪%20Software%20Testing/Software%20Testing.md)) are the major software verification techniques used in practice.
- ==Formal verification techniques for property P==:
	- Deductive methods:
		- Method: provide a formal proof that P holds
		- Tool:
			- Theorem Prover: ↗ [Theorem Provers & Proof Assistants](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/Theorem%20Provers%20&%20Proof%20Assistants/Theorem%20Provers%20&%20Proof%20Assistants.md), ↗ [SAT Solving & Algorithms](../🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md), ↗ [SMT Solving & Algorithms](../🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md);
			- Proof Assistant; ↗ [Formal Verifiers & Constraint Solvers & Checkers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers.md)
			- Proof Checker;
		- Applicable if: system has form a systematical theory
	- ↗ [(Formal) Model Checking (MC)](../🧳%20%28Formal%29%20Model%20Checking%20%28MC%29/%28Formal%29%20Model%20Checking%20%28MC%29.md):
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

---
A common theme: from program to formulas

```tikz
\begin{document}
\definecolor{panel}{RGB}{32,34,38}
\definecolor{paneltwo}{RGB}{42,44,49}
\definecolor{border}{RGB}{115,118,125}
\definecolor{textmain}{RGB}{235,235,232}
\definecolor{textmuted}{RGB}{170,172,176}
\definecolor{accent}{RGB}{184,154,92}
\definecolor{accentdark}{RGB}{62,54,39}

\begin{tikzpicture}[
    >=latex,
    font=\small,
    text=textmain,

    box/.style={
        draw=border,
        fill=panel,
        text=textmain,
        rounded corners,
        align=center,
        minimum height=1.6cm,
        minimum width=2.9cm,
        line width=0.7pt
    },

    process/.style={
        draw=accent,
        fill=accentdark,
        text=textmain,
        rounded corners,
        align=center,
        minimum height=2cm,
        minimum width=3.1cm,
        line width=1pt
    },

    note/.style={
        draw=border,
        fill=paneltwo,
        text=textmain,
        rounded corners,
        align=left,
        inner sep=7pt,
        text width=4.2cm,
        line width=0.6pt
    }
]

% ---------------------------------------------------------
% Main pipeline
% ---------------------------------------------------------

\node[box] (program) at (0,0) {
    \textbf{Program}\\
    +\\
    \textbf{Specification}\\[2mm]
    preconditions\\
    postconditions\\
    invariants
};

\node[process] (vcgen) at (4.2,0) {
    \textbf{Verification}\\
    \textbf{Condition Generator}\\[2mm]
    Program reasoning\\
    $\rightarrow$ logical formulas
};

\node[box] (vc) at (8.4,0) {
    \textbf{Verification}\\
    \textbf{Conditions}\\[2mm]
    Proof obligations\\
    expressed in logic
};

\node[process] (solver) at (12.6,0) {
    \textbf{Theorem Prover}\\
    /\\
    \textbf{SMT Solver}\\[2mm]
    Attempts to prove\\
    each condition
};

\node[box] (result) at (16.8,0) {
    \textbf{Verification Result}\\[2mm]
    proved\\
    or\\
    counterexample
};


% ---------------------------------------------------------
% Main arrows
% ---------------------------------------------------------

\draw[->, line width=1pt, draw=textmuted]
    (program) -- (vcgen);

\draw[->, line width=1pt, draw=textmuted]
    (vcgen) -- (vc);

\draw[->, line width=1pt, draw=textmuted]
    (vc) -- (solver);

\draw[->, line width=1pt, draw=textmuted]
    (solver) -- (result);


% ---------------------------------------------------------
% Verification-condition explanation
% ---------------------------------------------------------

\node[note] (logicnote) at (8.4,3.5) {
    \textbf{Logical formulas}\\[2mm]

    Verification conditions may involve:

    $\bullet$ propositional logic\\
    $\bullet$ first-order logic\\
    $\bullet$ arithmetic\\
    $\bullet$ arrays\\
    $\bullet$ bit-vectors
};

\draw[dashed, ->, draw=border]
    (logicnote) -- (vc);


% ---------------------------------------------------------
% SMT explanation
% ---------------------------------------------------------

\node[note] (smtnote) at (12.6,-3.6) {
    \textbf{Example: Z3}\\[2mm]

    SMT = Satisfiability Modulo Theories.

    Typical theories include:

    $\bullet$ integers and reals\\
    $\bullet$ arrays\\
    $\bullet$ bit-vectors\\
    $\bullet$ equality\\
    $\bullet$ uninterpreted functions
};

\draw[dashed, ->, draw=border]
    (smtnote) -- (solver);


% ---------------------------------------------------------
% Conceptual labels
% ---------------------------------------------------------

\node[text=textmuted] at (4.2,-1.7)
    {\footnotesize Program $\rightarrow$ Logic};

\node[text=textmuted] at (12.6,1.7)
    {\footnotesize Logic $\rightarrow$ Proof};

\end{tikzpicture}
\end{document}
```


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
Given: {P}S{Q} and required annotations such as loop invariants, a verifier constructs logical
conditions whose validity implies correctness.

For example:
```
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
```

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


### A Brief Summary of Current Program Verification Techniques
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



## Program Verification Basics
### Hoare Logic & Axiomatic Semantics
↗ [Axiomatic Semantics (Hoare-Style Logic)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Axiomatic%20Semantics%20%28Hoare-Style%20Logic%29/Axiomatic%20Semantics%20%28Hoare-Style%20Logic%29.md)


### Programs to Hoare Logic Proof Rules

#### Automate Hoare Logic Inference


### Predicate Transformation
#### Weakest Precondition & Strongest Postcondition

|比较|Weakest Precondition|Strongest Postcondition|
|---|---|---|
|简称|wp / wlp|sp|
|起点|Postcondition \(Q\)|Precondition \(P\)|
|方向|Backward|Forward|
|要求|哪些初始状态可以保证 \(Q\)？|哪些最终状态可能被到达？|
|对应状态集合|最大的安全初始状态集合|精确的终止后继状态集合|
|最终验证|\(P\models wp(St,Q)\)|\(sp(St,P)\models Q\)|
|典型用途|VC Generation|Symbolic Execution|
#### Weakest Precondition & Algorithm

Guarded Commands 的 wp 和 sp

|Statement|\(wp(St,Q)\)|\(sp(St,P)\)|
|---|---|---|
|`x := E`|\(Q[E/x]\)|\(\exists x_0.\,(x=E[x_0/x])\land P[x_0/x]\)|
|`assume R`|\(R\rightarrow Q\)|\(P\land R\)|
|`assert R`|\(R\land Q\)|\(P\land R\)|
|`St1; St2`|\(wp(St_1,wp(St_2,Q))\)|\(sp(St_2,sp(St_1,P))\)|
#### Strongest Postcondition & Symbolic Execution


### Inductive Assertion Method & Basic Paths



## Ref
> [!summary] CSCI5690 Lecture 7 — Program Verification with Hoare Logic
>
> - **1. Program Semantics & Modeling**
>     - **Program State**：$s \in \mathcal{S}$，包含 program counter (pc)、variables、stack、heap 等。
>     - **Transition System**：$T \subseteq \mathcal{S} \times \mathcal{S}$，描述程序执行引起的状态变化 $s \rightarrow s'$。
>     - **State Set Representation**
>         - Explicit：直接枚举状态。
>         - Symbolic：使用 predicate $P$ 表示状态集合 $\llbracket P \rrbracket = \{s \in \mathcal{S} \mid P(s)\}$。
>     - **Three Types of Program Semantics**
>         - Operational Semantics：通过状态转移或执行步骤定义程序行为；包括 Big-Step / Small-Step Semantics。
>         - Axiomatic Semantics：通过 assertions 和 proof rules 描述程序执行前后的逻辑关系。
>         - Denotational Semantics：将程序解释为数学函数或数学域上的运算。
>     - **Imp Language**：`skip`、`x := E`、`St1; St2`、`if C then St1 else St2`、`while C do St`。
>
> - **2. Hoare Logic & Program Correctness**
>     - **Hoare Triple**：$\{P\}\ St\ \{Q\}$。
>         - $P$：Precondition，执行前需要满足的条件。
>         - $St$：Program Statement。
>         - $Q$：Postcondition，执行后需要保证的条件。
>     - **Partial Correctness**：如果初始状态满足 $P$，且程序终止，则最终状态必须满足 $Q$；不要求 termination。
>         - $\models \{P\}St\{Q\}$：Semantic Validity。
>         - $\vdash \{P\}St\{Q\}$：Syntactic Provability，能够使用 Hoare Logic Rules 证明。
>         - 特殊情况：$\{false\}St\{Q\}$、$\{P\}St\{true\}$、$\{P\}\ while\ true\ do\ skip\ \{Q\}$ 都满足 partial correctness。
>     - **Total Correctness**：Partial Correctness + Termination；讲义记为 $[P]\ St\ [Q]$。
>     - **Soundness**：$\vdash \{P\}St\{Q\} \Rightarrow \models \{P\}St\{Q\}$。
>     - **Relative Completeness**：在 assertion language 表达能力足够，且能够证明底层逻辑公式的理想条件下，Hoare Logic 可证明所有语义有效的 partial correctness specifications；不代表一般程序验证可判定。
>
> - **3. Hoare Logic Proof Rules**
>     - **Skip**：$\{P\}\ skip\ \{P\}$。
>     - **Assignment**：$\{Q[E/x]\}\ x:=E\ \{Q\}$。
>         - $Q[E/x]$：将 $Q$ 中自由出现的 $x$ 安全替换为 $E$。
>         - 本质是 Backward Reasoning：从期望的 postcondition 反推 precondition。
>     - **Composition**：若 $\{P\}St_1\{R\}$ 且 $\{R\}St_2\{Q\}$，则 $\{P\}St_1;St_2\{Q\}$。
>         - $R$ 是 Intermediate Assertion；如何自动找到 $R$ 是自动化证明中的一个问题。
>     - **Conditional**：分别证明 $\{P \land C\}St_1\{Q\}$ 和 $\{P \land \neg C\}St_2\{Q\}$。
>     - **While**：若 $\{I \land C\}Body\{I\}$，则 $\{I\}\ while\ C\ do\ Body\ \{I \land \neg C\}$。
>         - $I$ 为 Loop Invariant；规则只保证 partial correctness。
>     - **Rule of Consequence**
>         - Strengthening Precondition：$P' \Rightarrow P$，允许使用更强的 $P'$。
>         - Weakening Postcondition：$Q \Rightarrow Q'$，允许使用更弱的 $Q'$。
>         - 注意方向：Precondition 可以加强，Postcondition 可以减弱。
>
> - **4. Loop Invariant & Inductive Invariant**
>     - **Invariant**：在所有实际 reachable loop-header states 上成立的性质。
>         - $Reach(Init) \subseteq \llbracket I \rrbracket$。
>     - **Inductive Invariant**：不仅实际成立，而且自身足以支持 inductive proof。
>         - Initialization：$Init \subseteq \llbracket I \rrbracket$。
>         - Preservation：$Post_{Body}(\llbracket I \land C \rrbracket) \subseteq \llbracket I \rrbracket$。
>         - 即 $\{I \land C\}Body\{I\}$。
>     - **关系**：Inductive Invariant $\Rightarrow$ Invariant；反过来不一定成立。
>         - 原因：Invariant 只约束 reachable states；Inductiveness 必须对所有满足 $I \land C$ 的状态成立，包括 unreachable states。
>         - Invariant Strengthening：通过加入辅助约束排除不合适的状态，使候选 invariant 变成 inductive。
>     - **Loop Verification 的三个证明义务**
>         - Initialization：循环开始之前建立 $I$。
>         - Preservation：$I \land C \Rightarrow wp(Body,I)$。
>         - Postcondition：$I \land \neg C \Rightarrow Q$。
>     - **Invariant 的作用**：通过有限的逻辑公式 over-approximate reachable states，从而避免枚举任意多次循环执行。
>
> - **5. Predicate Transformers — wp & sp**
>     - **Weakest Precondition (wp)**：Backward Reasoning，从目标 $Q$ 反推保证 $Q$ 的最弱初始条件。
>         - 最弱 = 限制最少 = 包含最多初始状态。
>         - $\{P\}St\{Q\}$ valid $\iff P \Rightarrow wp(St,Q)$ valid。
>     - **Strongest Postcondition (sp)**：Forward Reasoning，从初始条件 $P$ 计算所有可能终止结果的最精确描述。
>         - 最强 = 限制最多 = 对应最小的合法 postcondition state set。
>         - $\{P\}St\{Q\}$ valid $\iff sp(St,P) \Rightarrow Q$ valid。
>     - **核心对偶关系**：$sp(St,P) \Rightarrow Q \iff P \Rightarrow wp(St,Q)$（在相同的 partial correctness 语义下）。
>     - **wp Calculation Rules**
>         - Skip：$wp(skip,Q)=Q$。
>         - Assignment：$wp(x:=E,Q)=Q[E/x]$。
>         - Sequence：$wp(St_1;St_2,Q)=wp(St_1,wp(St_2,Q))$。
>         - Conditional：$wp(if\ C\ then\ St_1\ else\ St_2,Q)=(C \Rightarrow wp(St_1,Q)) \land (\neg C \Rightarrow wp(St_2,Q))$。
>     - **sp Calculation Rules**
>         - Assignment：$sp(x:=E,P)=\exists x_{old}.\,(x=E[x_{old}/x]) \land P[x_{old}/x]$。
>         - Sequence：$sp(St_1;St_2,P)=sp(St_2,sp(St_1,P))$。
>         - Conditional：分别计算两个分支的 sp，再使用 disjunction 合并。
>     - **sp 与 Model Checking 的联系**
>         - $sp(St,P)$ 对应 transition relation 的 Post-Image。
>         - $Post_T(P)(s')=\exists s.\,T(s,s') \land P(s)$。
>         - sp 经常产生 existential quantifiers，因此可能需要 Quantifier Elimination。
>
> - **6. Weakest Liberal Precondition & Fixed Points**
>     - **wlp vs. Total-Correctness wp**
>         - $wlp(St,Q)$：只保证程序一旦终止，结果满足 $Q$；允许 non-termination。
>         - $wp_{total}(St,Q)$：保证程序终止并满足 $Q$。
>         - 讲义使用 $wp$ 表示 weakest liberal precondition，即讨论 partial correctness 的版本。
>         - 对于 `while true do skip`：$wlp=true$，而 $wp_{total}=false$。
>     - **为什么 Loop 需要 Fixed Point？**
>         - `while C do St` 可以递归展开为 `if C then (St; while C do St) else skip`。
>         - 循环的前置条件依赖于自身，因此产生方程 $X=F(X)$。
>         - $F(X)=(\neg C \land Q) \lor (C \land wlp(St,X))$。
>     - **LFP vs. GFP**
>         - Weakest Liberal Precondition：使用 Greatest Fixed Point，$wlp(while\ C\ do\ St,Q)=\nu F$。
>         - Total-Correctness wp：使用 Least Fixed Point，$wp_{total}(while\ C\ do\ St,Q)=\mu F_{total}$。
>         - 直观区别：GFP 接受不会产生错误终止结果的状态（包括可能不终止的情况）；LFP 只接受能够保证终止且结果正确的状态。
>         - 与 Model Checking 联系：Reachability 常使用 LFP；partial-correctness wlp 的循环语义使用 GFP，二者计算目标不同。
>
> - **7. Automated Program Verification & VC Generation**
>     - **基本流程**：Annotated Program → Verification Condition Generator (VCG) → VCs → SMT Solver / Theorem Prover。
>     - **Annotations**：Preconditions、Postconditions、Loop Invariants，以及终止性证明所需的 Ranking Functions。
>     - **Verification Conditions (VCs)**：将程序正确性转化为需要证明 valid 的逻辑公式 $\varphi_1,\ldots,\varphi_n$。
>         - Validity Checking：$\models VC \iff \neg VC$ is UNSAT。
>     - **Approximate Weakest Precondition (awp)**
>         - 非循环语句：按照 wp 规则递归计算。
>         - Annotated Loop：$awp(while\ C\ do\ \{I\}\ Body,Q)=I$。
>         - 同时生成额外 VCs，检查 $I$ 的 preservation 与 $I \land \neg C \Rightarrow Q$。
>         - 如果所有相关 VCs 成立，且 $P \Rightarrow awp(St,Q)$，则 Hoare Triple valid。
>         - 注意：这是充分条件，不一定是必要条件；正确程序也可能因为 invariant 太弱而验证失败（False Alarm）。
>     - **Dafny**：使用 program annotations 与 wp-based VC Generation 验证程序。
>         - `requires`：Precondition。
>         - `ensures`：Postcondition。
>         - `invariant`：Loop Invariant。
>         - `decreases`：Ranking Function / Termination Metric。
>
> - **8. Guarded Commands (GC)**
>     - 一种用于程序验证的简化 Intermediate Representation，方便逻辑推理与 VC Generation。
>     - **Core Commands**
>         - `assume B`：限制可行路径；不满足 $B$ 的路径被排除。
>         - `assert B`：检查必须成立的性质；存在不满足 $B$ 的 reachable state 则为 assertion failure。
>         - `havoc x`：对 $x$ 进行 nondeterministic assignment，可以取任意允许值。
>         - `c1; c2`：Sequential Composition。
>         - `c1 [] c2`：Nondeterministic Choice。
>     - **关键区别：assume vs. assert**
>         - $wp(assume\ B,Q)=B \Rightarrow Q$。
>         - $wp(assert\ B,Q)=B \land Q$。
>         - $sp(assume\ B,P)=sp(assert\ B,P)=P \land B$，但 assert 的安全性仍需单独验证。
>     - **其他规则**
>         - $wp(havoc\ x,Q)=\forall x.\,Q$。
>         - $wp(c_1\mathbin{[]}c_2,Q)=wp(c_1,Q)\land wp(c_2,Q)$。
>     - **Control Flow Encoding**
>         - `if B then S else T` → `(assume B; S) [] (assume !B; T)`。
>         - Loop → `assert I; havoc modified_variables; assume I; ((assume C; Body; assert I; assume false) [] assume !C)`。
>         - 通过 invariant 和 havoc，将无限循环的验证转化为有限的 loop-free proof obligations。
>
> - **9. Symbolic Execution & Inductive Assertion Method**
>     - **Symbolic Execution**
>         - 使用 symbolic variables 和 path constraints 描述程序执行，而非只运行具体输入。
>         - 沿路径正向传播状态条件，可使用 sp 进行形式化。
>         - Branch Conditions 通过 `assume` 限制路径；Assertions 对应需要证明的 safety conditions。
>         - 常结合 SAT/SMT Solver 判断路径可行性、寻找 counterexamples。
>     - **Inductive Assertion Method**
>         - 将 Control Flow Graph (CFG) 按关键 annotations 划分为有限的 Basic Paths。
>         - Basic Paths 通常连接入口、循环头不变量和出口等关键位置，避免无限展开 loops。
>         - 对每条路径 $\{F\}S\{G\}$ 生成 VC。
>             - Backward：$F \Rightarrow wp(S,G)$。
>             - Forward：$sp(S,F) \Rightarrow G$。
>         - 验证所有 basic paths 的 proof obligations，包括 loop-back paths，即可利用 induction 建立 partial correctness。
>     - **Typical Applications**
>         - wp：VC Generation、Inductive Assertion Method、Predicate Abstraction。
>         - sp：Symbolic Execution、Static Program Analysis、Invariant Generation。
>
> - **10. Termination & Total Correctness**
>     - **核心关系**：Total Correctness = Partial Correctness + Termination。
>     - **Well-Founded Relation**：不存在无限严格下降链的关系。
>         - $(\mathbb{N},<)$ 是 well-founded；$(\mathbb{Z},<)$ 不是。
>         - 自然数元组上的 Lexicographic Ordering 也是 well-founded。
>     - **Ranking Function / Loop Variant**
>         - $\delta:\mathcal{S}\rightarrow Z$，其中 $(Z,\prec)$ 是 well-founded set/relation。
>         - 每次 loop iteration 必须满足 $\delta(s')\prec\delta(s)$。
>         - 因为良基关系不允许无限下降，所以循环不能无限执行。
>     - **Common Ranking Functions**
>         - Scalar：如 $\delta=n-i$，要求非负并严格递减。
>         - Lexicographic：如 $\delta=(i,j)$，先比较 $i$，若 $i$ 不变，再比较 $j$。
>         - Lexicographic Ordering 允许低优先级分量增加，只要更高优先级分量严格下降。
>     - **Invariant vs. Variant**
>         - Invariant：证明 What remains true（Safety / Partial Correctness）。
>         - Variant / Ranking Function：证明 Why execution must stop（Termination）。
>     - **Total Correctness Verification**：同时检查 inductive invariants、postconditions，以及所有相关循环的 ranking-function decrease。
>
> - **11. Overall Connections & Key Takeaways**
>     - **Program Semantics**：Program → Transition Relation → State Sets / Predicates。
>     - **Hoare Logic**：使用 proof rules 证明程序满足 pre/postconditions。
>     - **Predicate Transformers**：wp 反向推导必要条件；sp 正向计算可能的结果状态。
>     - **VC Generation**：将程序证明转化为逻辑公式，再由 SMT Solver 验证。
>     - **Loop Verification**：通过 inductive invariants 对无限多次迭代进行有限证明。
>     - **Termination Verification**：通过 well-founded relations 和 ranking functions 排除 infinite executions。
>     - **Connections to Model Checking**：共同使用 transition systems、reachability、fixed points、state predicates 和 inductive invariants。
>     - **Main Challenges**：自动生成足够强的 invariants、ranking functions，以及处理 heap、concurrency、recursion 等复杂程序特性。
>     - **Core Pipeline**：Program + Specification + Annotations → VC Generation → SAT/SMT/Theorem Proving → Correctness Guarantee。
