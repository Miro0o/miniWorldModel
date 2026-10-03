# Equational Reasoning & Term Rewriting

[TOC]



## Res
### Related Topics
↗ [Universal Algebra (泛代数)](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/👽%20Universal%20Algebra%20(泛代数)/Universal%20Algebra%20(泛代数).md)
↗ [Term Algebra & Free Σ-algebra](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/👽%20Universal%20Algebra%20(泛代数)/Σ-algebra%20(Sigma-Algebra)/Term%20Algebra%20&%20Free%20Σ-algebra.md)

↗ [Formal System, Formal Semantics, and Formal Logic](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md)
↗ [Equational Logic](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/Equational%20Logic.md)
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)

↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods).md)
↗ [Program (Formal) Verification](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/Program%20(Formal)%20Verification/Program%20(Formal)%20Verification.md)

↗ [Software (Program) Techniques & Binary Engineering](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
↗ [Program Analysis Basics](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)

↗ [Programming Language Processing & Program Execution](../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Program Transformation & Compilation Theory (Compile-time)](../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time).md)
↗ [Program Optimization](../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Program%20Optimization/Program%20Optimization.md)
↗ [Equality Saturation (EqSat)](../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Program%20Optimization/Equality%20Saturation%20(EqSat)/Equality%20Saturation%20(EqSat).md)
↗ [E-Graph & Egg](../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Program%20Optimization/Equality%20Saturation%20(EqSat)/E-Graph%20&%20Egg.md)

↗ [Database Languages](../../../DSL%20(Domain%20Specific%20Languages)/Database%20Languages/Database%20Languages.md)
↗ [Datalog (Data Logic)](../../../GPL%20(General%20Purpose%20Languages)/📌%20Logic%20Programming%20Languages/Prolog%20(Programmation%20en%20Logique)/Datalog%20(Data%20Logic)/Datalog%20(Data%20Logic).md)


### Learning Resources
https://inst.eecs.berkeley.edu/~cs294-260/sp24/
This course aims to give students experience with some of the many declarative techniques for program analysis and optimization. In particular, we will study term rewriting systems, datalog, and equality saturation.
https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-01-22-term-rewriting
Term Rewriting
- Monday, January 22, 2024
- Equational reasoning is a powerful technique in programming languages and many other domains. In essence, you have a set of equations and you are interested in the consequences of these equations. Maybe you want to prove that two expressions are equal, or maybe you want to simplify an expression.
- Term rewriting is the most common mechanism for equational reasoning; it’s the basis of optimizing compilers, theorem provers, computer algebra systems, and many other systems that need to reason about programs.
- The purpose of this lecture is to give a (rather quick) introduction to term rewriting, so we can discuss various applications via papers in later discussions.


[A Taste of Rewriting](https://inst.eecs.berkeley.edu/~cs294-260/sp24/papers/taste-of-rewrite-systems.pdf)
[Rewriting](https://inst.eecs.berkeley.edu/~cs294-260/sp24/papers/handbook-ar-rewriting.pdf) chapter from the Handbook of Automated Reasoning

Baader, Franz, and Tobias Nipkow. Term rewriting and all that. Cambridge university press, 1998.

 C. Kirchner and H. Kirchner. Rewriting, Solving, Proving. 1999-2006. Available at https://wiki.bordeaux.inria.fr/Helene-Kirchner/lib/exe/fetch.php?media=wiki:rsp.pdf.


### Other Resources



## Intro



## Ref
