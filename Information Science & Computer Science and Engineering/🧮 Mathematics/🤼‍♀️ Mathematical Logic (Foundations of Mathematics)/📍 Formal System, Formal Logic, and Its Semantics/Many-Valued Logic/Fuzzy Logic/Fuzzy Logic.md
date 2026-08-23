# Fuzzy Logic

[TOC]



## Res
### Related Topics


### Other Resources
https://plato.stanford.edu/entries/logic-fuzzy/
- [1. Fuzzy connectives based on t-norms](https://plato.stanford.edu/entries/logic-fuzzy/#FuzzConnBaseTNorm)
- [2. MTL: A fundamental fuzzy logic](https://plato.stanford.edu/entries/logic-fuzzy/#MTLFundFuzzLogi)
- [3. Łukasiewicz logic](https://plato.stanford.edu/entries/logic-fuzzy/#LukaLogi)
- [4. Gödel–Dummett logic](https://plato.stanford.edu/entries/logic-fuzzy/#GodeLogi)
- [5. Other notable fuzzy logics](https://plato.stanford.edu/entries/logic-fuzzy/#OtheNotaFuzzLogi)
- [6. Predicate logics](https://plato.stanford.edu/entries/logic-fuzzy/#PredLogi)
- [7. Algebraic semantics](https://plato.stanford.edu/entries/logic-fuzzy/#AlgeSema)
- [8. Proof theory](https://plato.stanford.edu/entries/logic-fuzzy/#ProoTheo)
- [9. Semantics justifying truth-functionality](https://plato.stanford.edu/entries/logic-fuzzy/#SemaJustTrutFunc)
- [10. Fuzzy logic and vagueness](https://plato.stanford.edu/entries/logic-fuzzy/#FuzzLogiVagu)
- [Bibliography](https://plato.stanford.edu/entries/logic-fuzzy/#Bib)
- [Academic Tools](https://plato.stanford.edu/entries/logic-fuzzy/#Aca)
- [Other Internet Resources](https://plato.stanford.edu/entries/logic-fuzzy/#Oth)
- [Related Entries](https://plato.stanford.edu/entries/logic-fuzzy/#Rel)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Fuzzy_logic
> 🔗 https://plato.stanford.edu/entries/logic-fuzzy/

Fuzzy logic is intended to model logical reasoning with vague or imprecise statements like “Petr is young (rich, tall, hungry, etc.)”. It refers to a family of [many-valued logics](https://plato.stanford.edu/entries/logic-manyvalued/), where the truth-values are interpreted as degrees of truth. The truth-value of a logically compound proposition, like “Carles is tall and Chris is rich”, is determined by the truth-value of its components. In other words, like in classical logic, one imposes truth-functionality.

Fuzzy logic emerged in the context of the theory of fuzzy sets, introduced by Lotfi Zadeh (1965). A fuzzy set assigns a degree of membership, typically a real number from the interval [0,1], to elements of a universe. Fuzzy logic arises by assigning degrees of truth to propositions. The standard set of truth-values (degrees) is the real unit interval [0,1], where 0 represents “totally false”, 1 represents “totally true”, and the other values refer to partial truth, i.e., intermediate degrees of truth.

“Fuzzy logic” is often understood in a very wide sense which includes all kinds of formalisms and techniques referring to the systematic handling of _degrees_ of some kind (see, e.g., Nguyen & Walker 2000). In particular in engineering contexts (fuzzy control, fuzzy classification, soft computing) it is aimed at efficient computational methods tolerant to suboptimality and imprecision (see, e.g., Ross 2010). This entry focuses on fuzzy logic in a restricted sense, established as a discipline of mathematical logic following the seminal monograph by Petr Hájek (1998) and nowadays usually referred to as “mathematical fuzzy logic”. For details about the history of different variants of fuzzy logic we refer to Bělohlávek, Dauben, & Klir 2017.

Mathematical fuzzy logic focuses on logics based on a truth-functional account of partial truth and studies them in the spirit of classical mathematical logic, investigating syntax, model-theoretic semantics, proof systems, completeness, etc., both, at the propositional and the predicate level (see Cintula, Fermüller, Hájek, & Noguera 2011 and 2015).



## Ref
