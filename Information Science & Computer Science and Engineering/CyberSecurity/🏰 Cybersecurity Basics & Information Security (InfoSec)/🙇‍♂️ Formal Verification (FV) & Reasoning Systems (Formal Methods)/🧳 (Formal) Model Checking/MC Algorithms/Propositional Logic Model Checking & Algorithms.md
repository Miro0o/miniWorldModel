# Propositional Logic Model Checking & Algorithms

[TOC]



## Res
### Related Topics
↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20(PL)%20-%20(零阶)%20命题逻辑.md)

↗ [Symbolic AI & Logic Programs](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🦴%20Symbolic%20AI%20&%20Logic%20Programs/Symbolic%20AI%20&%20Logic%20Programs.md)
↗ [Problem Solving & Search-Based Methods](../../../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)


### Other Resources



## Intro
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 7

In this section, we describe two families of efficient algorithms for general propositional inference based on model checking: one approach based on **backtracking search**, and one on **local hill-climbing search**. These algorithms are part of the “technology” of propositional logic. This section can be skimmed on a first reading of the chapter. 

The algorithms we describe are for checking satisfiability: the SAT problem. (As noted in Section 7.5, testing entailment, $α\models β$, can be done by testing unsatisfiability of $α∧¬β$.) We mentioned on page 241 the connection between finding a satisfying model for a logical sentence and finding a solution for a constraint satisfaction problem, so it is perhaps not surprising that the two families of propositional satisfiability algorithms closely resemble the backtracking algorithms of Section 5.3 and the local search algorithms of Section 5.4. They are, however, extremely important in their own right because so many combinatorial problems in computer science can be reduced to checking the satisfiability of a propositional sentence. Any improvement in satisfiability algorithms has huge consequences for our ability to handle complexity in general.



## Ref
