# Higher-Order Languages & Logics (HOL)

[TOC]



## Res
### Related Topics
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)

↗ [Type Theory (类型论)](../🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)


### Other Resources



## Intro
### Calculus (Computation) vs Logics
#calculus #logic #formal_logic #mathematical_logic #higher_order_logic 

> [!links]
> ↗ [Computational Trilogy & Curry–Howard(–Lambek) Correspondence](../../Proof%20Theory/Computational%20Trilogy%20&%20Curry–Howard(–Lambek)%20Correspondence.md)
> ↗ [Models of Computation & Abstract Machines](../../😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

> 🤖 GPT-5.0
> https://chatgpt.com/share/69738170-978c-800f-967d-a269d0df7e65

**λ-calculus, combinatory logic, and object calculus are not logics by themselves** in the sense of having built-in notions of _truth_, _validity_, or _models_.

They are **formal calculi of computation**.
However:
- They can **encode logics**
- They can **be given logical interpretations**
- Some become logics once you add **types, propositions, or semantics**
So we must distinguish:
- **Raw calculus**
- **Typed / logical interpretation**

**Logic asks “what is true?”  
Calculus asks “what computes?”**
Typed calculi sit exactly at the **bridge** between the two.

|System|Logic?|Order|Truth Semantics|
|---|---|---|---|
|Untyped λ-calculus|❌|Higher-order|None|
|Typed λ-calculus|✔ (via CH)|Higher-order|Intuitionistic|
|Dependent λ-calculus|✔|Higher-order|Intuitionistic|
|Untyped combinatory logic|❌|Higher-order|None|
|Typed combinatory logic|✔|Higher-order|Intuitionistic|
|Object calculus (untyped)|❌|Higher-order|None|
|Object calculus (typed)|Partial|Higher-order|Usually intuitionistic|

Why These Are Still “Logical” in Spirit
They connect to logic through:
- Curry–Howard Correspondence
	- λ-terms ↔ proofs
	- Types ↔ propositions
	- Reduction ↔ proof normalization
- Internal Languages of Categories
	- Cartesian closed categories ↔ typed λ-calculus
	- Toposes ↔ higher-order intuitionistic logic
- Encodability
	- Classical logic can be embedded (via double-negation)
	- Modal logic via monads or type constructors

- λ-calculus and combinatory logic are **computational cores**
- They become **higher-order logics** when:
    - Types are added
    - Propositions are identified with types
- Object calculus formalizes **computation with state and structure**
- Truth semantics emerge **only after interpretation**


### Higher-Order Logics
> 🤖 GPT-5.0
> https://chatgpt.com/share/69738170-978c-800f-967d-a269d0df7e65

| Logic / System                            |                                          | Order of Language                                    | Semantics of Truth                     | Typical Models / Semantics                                            | Key Characteristics                                                                       | Main Applications                                                 |
| ----------------------------------------- | ---------------------------------------- | ---------------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Classical Higher-Order Logic (HOL)        |                                          | Higher-order (quantifies over functions, predicates) | Classical                              | Standard semantics; simple type theory (Church); full function spaces | Law of excluded middle, non-constructive proofs, very expressive; not complete or compact | Formalized mathematics, theorem proving (Isabelle/HOL, HOL Light) |
| Intuitionistic Higher-Order Logics        | Intuitionistic Higher-Order Logic (IHOL) | Higher-order                                         | Intuitionistic                         | Kripke models, Heyting algebras, topos semantics                      | Constructive reasoning, no excluded middle, proof-oriented                                | Type theory, program verification, proof assistants               |
|                                           | Dependent Type Theory (Martin-Löf)       | Higher-order + dependent types                       | Intuitionistic (propositions-as-types) | Categorical semantics (toposes, categories with families)             | Proofs as programs, very high expressiveness                                              | Coq, Agda, Lean (core), formal verification                       |
| Modal Higher-Order Logics                 | Higher-Order Modal Logic (HOML)          | Higher-order                                         | Modal (classical or intuitionistic)    | Kripke frames with possible worlds and higher-order domains           | Modal operators ($\Box$, $\Diamond$), quantification over predicates/functions            | Metaphysics, formal ontology, epistemic logic                     |
|                                           | Intensional Higher-Order Logic           | Higher-order                                         | Modal / intensional                    | Montague-style possible-world semantics                               | Distinguishes intension vs extension, world-dependent properties                          | Natural language semantics, philosophy of language                |
| Many-Valued and Fuzzy Higher-Order Logics | Higher-Order Fuzzy Logic                 | Higher-order                                         | Many-valued / fuzzy                    | Residuated lattices, fuzzy function spaces                            | Degrees of truth in $[0,1]$, generalized connectives                                      | AI, soft reasoning, knowledge representation                      |
|                                           | Higher-Order Probabilistic Logic         | Higher-order                                         | Probabilistic                          | Probability measures over higher-order propositions                   | Uncertainty + higher-order quantification                                                 | Research-level AI, uncertain reasoning                            |
| Paraconsistent Higher-Order Logics        | Higher-Order Paraconsistent Logic        | Higher-order                                         | Paraconsistent (non-explosive)         | Non-classical consequence relations; many-valued or Kripke-style      | Contradictions allowed without triviality                                                 | Inconsistent databases, legal reasoning                           |
| Substructural Higher-Order Logics         | Higher-Order Linear Logic                | Higher-order                                         | Substructural / resource-sensitive     | Phase spaces, categorical models                                      | No unrestricted contraction/weakening; resource-aware                                     | Programming languages, computational complexity                   |



## Ref
