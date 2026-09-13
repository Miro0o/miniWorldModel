# Boolean Algebra

[TOC]



## Res
### Related Topics
↗ [Formal System, Formal Semantics, and Formal Logic](../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md)
↗ [Classical Logic (Standard Formal Logic)](../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)
- ↗ [Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑](../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20(PL)%20-%20(零阶)%20命题逻辑.md)
- ↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)

↗ [Game Theory & Multi-Agent Decision-Making](../../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/👩🏻‍⚖️%20Rational%20Decision-Making%20Problems%20&%20Theory/Game%20Theory%20&%20Multi-Agent%20Decision-Making/Game%20Theory%20&%20Multi-Agent%20Decision-Making.md)

↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)

↗ [Digital (Logic) Electronics Foundations](../../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
↗ [Sequential Logic Circuits (时序逻辑电路)](../../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x04%20Sequential%20Logic%20Circuits%20(时序逻辑电路)/Sequential%20Logic%20Circuits%20(时序逻辑电路).md)
↗ [Combinational Logic Circuits (组合逻辑电路)](../../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x02%20Combinational%20Logic%20Circuits%20(组合逻辑电路)/Combinational%20Logic%20Circuits%20(组合逻辑电路).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Boolean_algebra

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") and [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic"), **Boolean algebra** is a branch of [algebra](https://en.wikipedia.org/wiki/Algebra "Algebra"). It differs from [elementary algebra](https://en.wikipedia.org/wiki/Elementary_algebra "Elementary algebra") in two ways. First, the values of the [variables](https://en.wikipedia.org/wiki/Variable_\(mathematics\) "Variable (mathematics)") are the [truth values](https://en.wikipedia.org/wiki/Truth_value "Truth value") _true_ and _false_, usually denoted by 1 and 0, whereas in elementary algebra the values of the variables are numbers. Second, Boolean algebra uses [logical operators](https://en.wikipedia.org/wiki/Logical_operator "Logical operator") such as [conjunction](https://en.wikipedia.org/wiki/Logical_conjunction "Logical conjunction") (_and_) denoted as ∧, [disjunction](https://en.wikipedia.org/wiki/Disjunction "Disjunction") (_or_) denoted as ∨, and [negation](https://en.wikipedia.org/wiki/Negation "Negation") (_not_) denoted as ¬. Elementary algebra, on the other hand, uses arithmetic operators such as addition, multiplication, subtraction, and division. Boolean algebra is therefore a formal way of describing [logical operations](https://en.wikipedia.org/wiki/Logical_operation "Logical operation") in the same way that elementary algebra describes numerical operations.

Boolean algebra was introduced by [George Boole](https://en.wikipedia.org/wiki/George_Boole "George Boole") in his first book _The Mathematical Analysis of Logic_ (1847), and set forth more fully in his _[An Investigation of the Laws of Thought](https://en.wikipedia.org/wiki/An_Investigation_of_the_Laws_of_Thought "An Investigation of the Laws of Thought")_ (1854). According to [Huntington](https://en.wikipedia.org/wiki/Edward_Vermilye_Huntington "Edward Vermilye Huntington"), the term _Boolean algebra_ was first suggested by [Henry M. Sheffer](https://en.wikipedia.org/wiki/Henry_M._Sheffer "Henry M. Sheffer") in 1913, although [Charles Sanders Peirce](https://en.wikipedia.org/wiki/Charles_Sanders_Peirce "Charles Sanders Peirce") gave the title "A Boolian Algebra with One Constant" to the first chapter of his "The Simplest Mathematics" in 1880. Boolean algebra has been fundamental in the development of [digital electronics](https://en.wikipedia.org/wiki/Digital_electronics "Digital electronics"), and is provided for in all modern [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language"). It is also used in [set theory](https://en.wikipedia.org/wiki/Set_theory "Set theory") and [statistics](https://en.wikipedia.org/wiki/Statistics "Statistics").



## Ref
