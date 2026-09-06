# Constraint Solving & Theorem Proving

[TOC]



## Res
### Related Topics
↗ [Mathematical Optimization (Programming)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20%28OR%29%20&%20Optimization%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20%28Programming%29/Mathematical%20Optimization%20%28Programming%29.md)
↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)

↗ [Formal System, Formal Logic, and Its Semantics](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Logic,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logic,%20and%20Its%20Semantics.md)
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29.md)

↗ [Problem Solving & Search-Based Methods](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)
↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)
- ↗ [Constraint Satisfaction Problems (CSPs)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Satisfaction%20Problems%20%28CSPs%29.md)

↗ [Knowledge Representation (Syntax Level) and Reasoning (KRR)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29.md)
↗ [Logic Programs & Symbolic AI](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🦴%20Logic%20Programs%20&%20Symbolic%20AI/Logic%20Programs%20&%20Symbolic%20AI.md)

↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)
- ↗ [Generic & Automated Theorem Provers (ATP)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29.md)
	- ↗ [Isabelle & Isar Language](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29/Isabelle%20&%20Isar%20Language/Isabelle%20&%20Isar%20Language.md)
	- ↗ [Rocq Prover (Formerly Coq)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29/Rocq%20Prover%20%28Formerly%20Coq%29/Rocq%20Prover%20%28Formerly%20Coq%29.md)
	- ↗ [HOL Interactive Theorem Prover](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Generic%20&%20Automated%20Theorem%20Provers%20%28ATP%29/HOL%20Interactive%20Theorem%20Prover.md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers.md)
	- ↗ [Kissat SAT Solver](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers/Kissat%20SAT%20Solver.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers.md)
	- ↗ [Z3 Theorem Prover](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/Z3%20Theorem%20Prover.md)
	- ↗ [cvc5 (Cooperating Validity Checker)](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/cvc5%20%28Cooperating%20Validity%20Checker%29.md)
	- ↗ [openSMT](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/openSMT.md)
↗ [angr](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Symbolic%20&%20Concolic%20Execution%20Engines/angr.md)

↗ [Control Flow Analysis](../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Control%20Flow%20Analysis/Control%20Flow%20Analysis.md)


### Other Resources



## Intro



## Propositional Theorem Proving
> [!links]
> ↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Logic,%20and%20Its%20Semantics/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Classical%20Logic%20%28Standard%20Formal%20Logic%29.md)
> ↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Logic,%20and%20Its%20Semantics/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20%28零阶%29%20命题逻辑.md)
> ↗ [Boolean Algebra](../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20%28格%29/Boolean%20Algebra/Boolean%20Algebra.md)

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 7

So far, we have shown how to determine entailment by model checking: enumerating models and showing that the sentence must hold in all models. In this section, we show how entailment can be done by theorem proving—applying rules of inference directly to the sentences in our knowledge base to construct a proof of the desired sentence without consulting models. If the number of models is large but the length of the proof is short, then theorem proving can be more efficient than model checking.



## First Order Logics Theorem Proving
> [!links]
> ↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Logic,%20and%20Its%20Semantics/Classical%20Logic%20%28Standard%20Formal%20Logic%29/Classical%20Logic%20%28Standard%20Formal%20Logic%29.md)
> ↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Logic,%20and%20Its%20Semantics/Classical%20Logic%20%28Standard%20Formal%20Logic%29/First-Order%20Logic%20%28FOL%29%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20%28FOL%29%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 9

In this chapter, we describe algorithms that can answer any answerable first-order logic question. Section 9.1 introduces inference rules for quantifiers and shows how to reduce first-order inference to propositional inference, albeit at potentially great expense. Section 9.2 describes how unification can be used to construct inference rules that work directly with first-order sentences. We then discuss three major families of first-order inference algorithms: forward chaining (Section 9.3), backward chaining (Section 9.4), and resolution-based theorem proving (Section 9.5).


### Forward Chaining


### Backward Chaining


### Resolution-Based Theorem Proving



## Ref
[Constraint satisfaction problem (CSP) vs. satisfiability modulo theory (SMT); with a coda on constraint programming | StackExchange]: https://cstheory.stackexchange.com/q/29406
SAT, CP, SMT, (much of) ASP all deal with the same set of combinatorial optimisation problems. However, they come at these problems from different angles and with different toolboxes. These differences are largely in how each approach structures information about the exploration of the search space. My working analogy is that SAT is machine code, while the others are higher level languages.
