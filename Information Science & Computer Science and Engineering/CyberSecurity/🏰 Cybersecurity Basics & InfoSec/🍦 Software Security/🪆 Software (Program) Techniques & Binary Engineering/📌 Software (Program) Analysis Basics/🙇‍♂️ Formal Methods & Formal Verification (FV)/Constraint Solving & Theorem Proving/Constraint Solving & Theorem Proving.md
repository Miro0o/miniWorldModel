# Constraint Solving & Theorem Proving

[TOC]



## Res
### Related Topics
↗ [Mathematical Optimization (Programming)](../../../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
↗ [Symbolic Execution & Concolic Execution](../../👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Symbolic%20Execution%20&%20Concolic%20Execution/Symbolic%20Execution%20&%20Concolic%20Execution.md)

↗ [Constraint Solver Problems (CSPs)](../../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Search%20&%20Optimization%20Methods%20in%20AI/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Constraint%20Based%20Search%20&%20Constraint%20Satisfaction/Constraint%20Solver%20Problems%20(CSPs).md)

↗ [Formal Verifications & Constraint Solvers (Proof Assistants)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
- ↗ [Automated & Generic Theorem Provers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)
	- ↗ [Isabelle & Isar Language](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Isabelle%20&%20Isar%20Language.md)
	- ↗ [Rocq Prover (Formerly Coq)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Rocq%20Prover%20(Formerly%20Coq).md)
	- ↗ [HOL Interactive Theorem Prover](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/HOL%20Interactive%20Theorem%20Prover.md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
	- ↗ [Kissat SAT Solver](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/Kissat%20SAT%20Solver.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
	- ↗ [Z3 Theorem Prover](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md)
	- ↗ [cvc5 (Cooperating Validity Checker)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/cvc5%20(Cooperating%20Validity%20Checker).md)
	- ↗ [openSMT](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/openSMT.md)
↗ [angr](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Symbolic%20&%20Concolic%20Execution%20Engines/angr.md)

↗ [Constraint-Based Analysis & Control Flow Analysis](../../👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis.md)


### Other Resources



## Intro



## Ref
[Constraint satisfaction problem (CSP) vs. satisfiability modulo theory (SMT); with a coda on constraint programming | StackExchange]: https://cstheory.stackexchange.com/q/29406
SAT, CP, SMT, (much of) ASP all deal with the same set of combinatorial optimisation problems. However, they come at these problems from different angles and with different toolboxes. These differences are largely in how each approach structures information about the exploration of the search space. My working analogy is that SAT is machine code, while the others are higher level languages.
