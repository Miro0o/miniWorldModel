# Type Theory (类型论)

[TOC]



## Res
### Related Topics
↗ [Mathematical Logic Basics (Formal Logic & Its Semantics)](../../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic%20&%20Its%20Semantics).md)
↗ [Higher-Order Logic (HOL)](../../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Higher-Order%20Logic%20(HOL)/Higher-Order%20Logic%20(HOL).md)
- ↗ [Lambda Calculus (λ-Calculus)](../../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Higher-Order%20Logic%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)
↗ [Model Theory (模型论)](../../Model%20Theory%20(模型论)/Model%20Theory%20(模型论).md)

↗ [Type Analysis](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Type%20Analysis/Type%20Analysis.md)

↗ [Category Theory (范畴论)](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)
↗ [Programming Language Theory (PLT)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Curry–Howard(–Lambek) Correspondence](../../Proof%20Theory/Curry–Howard(–Lambek)%20Correspondence.md)


### Other Resources
https://plato.stanford.edu/entries/type-theory/
- The topic of type theory is fundamental both in logic and computer science. We limit ourselves here to sketch some aspects that are important in logic. For the importance of types in computer science, we refer the reader for instance to Reynolds 1983 and 1985.
- [1. Paradoxes and Russell’s Type Theories](https://plato.stanford.edu/entries/type-theory/#ParaRussTypeTheo)
- [2. Simple Type Theory and the λ-Calculus](https://plato.stanford.edu/entries/type-theory/#SimpTypeTheoLCalc)
- [3. Ramified Hierarchy and Impredicative Principles](https://plato.stanford.edu/entries/type-theory/#RamiHierImprPrin)
- [4. Type Theory/Set Theory](https://plato.stanford.edu/entries/type-theory/#TypeTheoTheo)
- [5. Type Theory/Category Theory](https://plato.stanford.edu/entries/type-theory/#TypeTheoCatTheo)
- [6. Extensions of Type System, Polymorphism, Paradoxes](https://plato.stanford.edu/entries/type-theory/#ExteTypeSystPolyPara)
- [7. Univalent Foundations](https://plato.stanford.edu/entries/type-theory/#UnivFoun)
- [Bibliography](https://plato.stanford.edu/entries/type-theory/#Bib)
- [Academic Tools](https://plato.stanford.edu/entries/type-theory/#Aca)
- [Other Internet Resources](https://plato.stanford.edu/entries/type-theory/#Oth)
- [Related Entries](https://plato.stanford.edu/entries/type-theory/#Rel)

👍 https://thzt.github.io/categories/Logic/
- [你好，类型（一）：开篇](https://thzt.github.io/2017/09/05/type-1/)
- [你好，类型（二）：Lambda calculus](https://thzt.github.io/2017/09/06/type-2/)
- [你好，类型（三）：Combinatory logic](https://thzt.github.io/2017/09/07/type-3/)
- [你好，类型（四）：Propositional logic](https://thzt.github.io/2017/09/10/type-4/)
- [Hilbert-style和Gentzen-style演绎系统](https://thzt.github.io/2017/09/15/hilbert-style-and-gentzen-style-deduction-system/)
- [你好，类型（五）：Predicate logic](https://thzt.github.io/2017/09/16/type-5/)
- [你好，类型（六）：Simply typed lambda calculus](https://thzt.github.io/2017/09/19/type-6/)
- [你好，类型（七）：Recursive type](https://thzt.github.io/2017/09/23/type-7/)
- [你好，类型（八）：Subtype](https://thzt.github.io/2017/10/13/type-8/)
- [你好，类型（九）：Let polymorphism](https://thzt.github.io/2017/10/14/type-9/)
- [你好，类型（十）：Parametric polymorphism](https://thzt.github.io/2017/10/21/type-10/)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Type_theory

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") and [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"), a **type theory** is the [formal presentation](https://en.wikipedia.org/wiki/Formal_system "Formal system") of a specific [type system](https://en.wikipedia.org/wiki/Type_system "Type system"). Type theory is the academic study of type systems.

Some type theories serve as alternatives to [set theory](https://en.wikipedia.org/wiki/Set_theory "Set theory") as a [foundation of mathematics](https://en.wikipedia.org/wiki/Foundations_of_mathematics "Foundations of mathematics"). Two influential type theories that have been proposed as foundations are:
- [Typed λ-calculus](https://en.wikipedia.org/wiki/Typed_lambda_calculus "Typed lambda calculus") of [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church "Alonzo Church")
- [Intuitionistic type theory](https://en.wikipedia.org/wiki/Intuitionistic_type_theory "Intuitionistic type theory") of [Per Martin-Löf](https://en.wikipedia.org/wiki/Per_Martin-L%C3%B6f "Per Martin-Löf")

Most [computerized proof-writing systems](https://en.wikipedia.org/wiki/Proof_assistant "Proof assistant") use a type theory for [their foundation](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence "Curry–Howard correspondence"). A common one is [Thierry Coquand](https://en.wikipedia.org/wiki/Thierry_Coquand "Thierry Coquand")'s [calculus of inductive constructions](https://en.wikipedia.org/wiki/Calculus_of_constructions "Calculus of constructions").


### History of Type Theory
> 🔗 https://en.wikipedia.org/wiki/History_of_type_theory

The [type theory](https://en.wikipedia.org/wiki/Type_theory "Type theory") was initially created to avoid paradoxes in a variety of formal [logics](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic") and [rewrite systems](https://en.wikipedia.org/wiki/Rewrite_system "Rewrite system"). Later, type theory referred to a class of [formal systems](https://en.wikipedia.org/wiki/Formal_systems "Formal systems"), some of which can serve as alternatives to [naive set theory](https://en.wikipedia.org/wiki/Naive_set_theory "Naive set theory") as a foundation for all mathematics.

It has been tied to formal mathematics since _[Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica "Principia Mathematica")_ to today's [proof assistants](https://en.wikipedia.org/wiki/Proof_assistant "Proof assistant").



## Ref
[类型论 | Wikipedia]: https://zh.wikipedia.org/zh-cn/类型论
[HoTT学习笔记1：类型论基础 - Arjuna的文章 - 知乎]: https://zhuanlan.zhihu.com/p/33483631

[∞-type Café 暑期学校]: https://m4p1e.github.io/ntype-cafe-summer-school/

>∞-type Café 暑期学校 2023将会在2023年7月1日正式举行（可能延后到中旬）。这次活动偶然源于一个提议，是否可以举办一个关于类型论暑期活动？ 由于当下国内研究类型论的学者非常少，相关资料也寥寥无几。于是我们决定尝试一下

[LEAN4 入门（introduction） - Lin Mulikas的文章 - 知乎]:https://zhuanlan.zhihu.com/p/678954230
![](../../../../../Assets/Pics/Pasted%20image%2020260109004002.png)
