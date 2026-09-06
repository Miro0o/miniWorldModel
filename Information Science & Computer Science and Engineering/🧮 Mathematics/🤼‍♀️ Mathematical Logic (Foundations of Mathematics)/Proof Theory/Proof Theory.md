# Proof Theory

[TOC]



## Res
### Related Topics
↗ [Marxism & Communism](../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Modern%20Philosophy/Political%20Philosophy/Marxism%20&%20Communism/Marxism%20&%20Communism.md) (马克思主义的基本方法)
↗ [Logic (and Critical Thinking) /Methodologies in Logic](../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20%28and%20Critical%20Thinking%29/Logic%20%28and%20Critical%20Thinking%29.md#Methodologies%20in%20Logic)
↗ [Mathematics /Types of Proofs](../../Mathematics.md#Types%20of%20Proofs)

↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29/Mechanized%20%28Formal%29%20Reasoning%20&%20Automated%20Reasoning%20%28Inference%29.md)

↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29.md)
↗ [Constraint Solving & Theorem Proving](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md)
↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)


### Learning Resources
Proof Theory
Gaisi Takeuti


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Proof_theory

**Proof theory** is a major branch of [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic") and [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science") within which [proofs](https://en.wikipedia.org/wiki/Mathematical_proof "Mathematical proof") are treated as formal [mathematical objects](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object"), facilitating their analysis by mathematical techniques. Proofs are typically presented as [inductively defined](https://en.wikipedia.org/wiki/Recursive_data_type "Recursive data type") [data structures](https://en.wikipedia.org/wiki/Data_structures "Data structures") such as [lists](https://en.wikipedia.org/wiki/List_\(computer_science\) "List (computer science)"), boxed lists, or [trees](https://en.wikipedia.org/wiki/Tree_\(data_structure\) "Tree (data structure)"), which are constructed according to the [axioms](https://en.wikipedia.org/wiki/Axiom "Axiom") and [rules of inference](https://en.wikipedia.org/wiki/Rule_of_inference "Rule of inference") of a given logical system. Consequently, proof theory is [syntactic](https://en.wikipedia.org/wiki/Syntax_\(logic\) "Syntax (logic)") in nature, in contrast to [model theory](https://en.wikipedia.org/wiki/Model_theory "Model theory"), which is [semantic](https://en.wikipedia.org/wiki/Formal_semantics_\(logic\) "Formal semantics (logic)") in nature.

Some of the major areas of proof theory include [structural proof theory](https://en.wikipedia.org/wiki/Structural_proof_theory "Structural proof theory"), [ordinal analysis](https://en.wikipedia.org/wiki/Ordinal_analysis "Ordinal analysis"), [provability logic](https://en.wikipedia.org/wiki/Provability_logic "Provability logic"), [proof-theoretic semantics](https://en.wikipedia.org/wiki/Proof-theoretic_semantics "Proof-theoretic semantics"), [reverse mathematics](https://en.wikipedia.org/wiki/Reverse_mathematics "Reverse mathematics"), [proof mining](https://en.wikipedia.org/wiki/Proof_mining "Proof mining"), [automated theorem proving](https://en.wikipedia.org/wiki/Automated_theorem_proving "Automated theorem proving"), and [proof complexity](https://en.wikipedia.org/wiki/Proof_complexity "Proof complexity"). Much research also focuses on applications in computer science, linguistics, and philosophy.

> 📎 https://plato.stanford.edu/archives/fall2020/entries/proof-theory/

Proof theory is not an esoteric technical subject that was invented to support a formalist doctrine in the philosophy of mathematics; rather, it has been developed as an attempt to analyze aspects of mathematical experience and to isolate, possibly overcome, methodological problems in the foundations of mathematics. The origins of those problems, forcefully and sometimes contentiously formulated in the 1920s, are traceable to the transformation of mathematics in the nineteenth century: the emergence of abstract mathematics, its reliance on set theoretic notions, and its focus on logic in a broad, foundational sense. Substantive issues came to the fore already in the mathematical work and the foundational essays of Dedekind and Kronecker; they concerned the legitimacy of undecidable concepts, the existence of infinite mathematical objects, and the sense of non-constructive proofs of existential statements.

In an attempt to mediate between conflicting foundational positions, Hilbert shifted issues, already around 1900, from a mathematical to a vaguely conceived metamathematical level. That approach was rigorously realized in the 1920s, when he took advantage of the possibility of formalizing mathematics in deductive systems and investigated the underlying formal frames from a strictly constructive, “finitist” standpoint. Hilbert’s approach raised fascinating metamathematical questions—from semantic completeness through mechanical decidability to syntactic incompleteness; however, the hoped-for mathematical resolution of the foundational issues was not achieved. The failure of his _finitist consistency program_ raised and deepened equally fascinating methodological questions. A broadened array of problems with only partial solutions has created a vibrant subject that spans computational, mathematical, and philosophical issues—with a rich history.

The main part of our article covers these exciting investigations for an expanded Hilbert Program through 1999—with special, detailed attention to results and techniques that by now can be called “classical” and are of continued interest. Newer, but still closely connected developments are sketched in Appendices: the _proof theory of set theories_ in Appendix D _combinatorial independence results_ in Appendix E, and _provably total functions_ in Appendix F. Here (infinitary) sequent calculi and suitable systems of ordinal notations are crucial proof theoretic tools. However, we discuss in section 4.2 also Gödel’s Dialectica Interpretation and some of its extensions as an alternative for obtaining relative consistency proofs and describe in section 5.2.1 the systematic attempt of completing the incomplete through recursive progressions. Both topics are analyzed further in Appendix C.2 and Appendix B, respectively. To complete this bird’s eye view of our article, we mention that the _Epilogue_, section 6, not only indicates further proof theoretic topics, but also some directions of current research that are connected to proof theory and of deep intrinsic interest. We have tried to convey the vibrancy of a subject that thrives on concrete computational and (meta-) mathematical work, but also invites and is grounded in general philosophical reflection.
- [1. Proof Theory: A New Subject](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#ProoTheoNewSubj)
    - [1.1 Hilbert’s _Ansatz_ and Results](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#HilbAnsaResu)
    - [1.2 Incompleteness and a Reduction](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#IncoRedu)
- [2. New Logical Calculi](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#NewLogiCalc)
    - [2.1 From Axioms to Rules: Natural Reasoning](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#AxioRuleNatuReas)
    - [2.2 Sequent Calculi](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#SequCalc)
- [3. Gentzen’s Consistency Proof](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#GentConsProo)
    - [3.1 Ordinals in Proof Theory](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#OrdiProoTheo)
    - [3.2 Infinite Proofs](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#InfiProo)
- [4. Hilbert’s Program, Extended](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#HilbProgExte)
    - [4.1 Constructive Frameworks](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#ConsFram)
    - [4.2 The Dialectica Interpretation: Gödel and Spector](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#DialInteGodeSpec)
- [5. Beyond Arithmetic: Subsystems of **Z**2](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#BeyoAritSubsBZ2)
    - [5.1 Takeuti’s Fundamental Conjecture](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#TakeFundConj)
    - [5.2 Predicative Theories](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#PredTheo)
        - [5.2.1 Progressions of theories: Completing the incomplete](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#ProgTheoCompInco)
        - [5.2.2 Stronger ordinal representations: The Veblen and Bachmann hierarchies](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#StroOrdiReprVeblBachHier)
        - [5.2.3 Infinitary proofs for predicative theories](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#InfiProoForPredTheo)
    - [5.3 Impredicative Subsystems and Generalized Inductive Definitions](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#ImprSubsGeneInduDefi)
        - [5.3.1 Interlude: an ordinal representation system beyond Bachmann’s](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#InteOrdiReprSystBeyoBach)
        - [5.3.2 Assigning proof-theoretic ordinals](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#AssiProoTheoOrdi)
- [6. Epilogue](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#Epil)
- [Bibliography](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#Bib)
- [Academic Tools](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#Aca)
- [Other Internet Resources](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#Oth)
- [Related Entries](https://plato.stanford.edu/archives/fall2020/entries/proof-theory/#Rel)



## Ref
