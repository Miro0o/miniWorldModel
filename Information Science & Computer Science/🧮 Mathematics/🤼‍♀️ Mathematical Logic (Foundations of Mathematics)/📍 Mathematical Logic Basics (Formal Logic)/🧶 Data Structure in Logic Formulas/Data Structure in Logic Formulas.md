# Data Structure in Logic Formulas

[TOC]



## Res
### Related Topics
↗ [Data Structures](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Data%20Structures.md)
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)



## Intro
> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

Traditional application of logic is as a language of representing data and knowledge and for deductively making inferences from it.

A different use of logic emerged in the 1980s [Bry86, CBM90, Bry92], when logical formulas were used as a data structure for representing sets (of valuations) and relations (on valuations). Many logical operations have set-theoretic counterparts, for example union can be identified with disjunction. **It turned out that logic-based data structures could scale up to much bigger sets and relations than conventional (enumerative) data structures (trees, lists, arrays, and so on.)**

Formulas can be viewed as a data structure for representing sets and relations. The advantage of logic in this application is succinctness: a formula can represent a set that has a size that is exponential in the size of the formula. Logic representation is therefore succinct. This is in strong contrast to conventional data structures which would explicitly enumerate all elements of a set, and therefore have a size that is linear in the size of the set.

↗ [(Zeroth-Order Logic) Propositional Logic - (零阶) 命题逻辑 /Representing Propositional Logic](../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md#Representing%20Propositional%20Logic)



## Ref
