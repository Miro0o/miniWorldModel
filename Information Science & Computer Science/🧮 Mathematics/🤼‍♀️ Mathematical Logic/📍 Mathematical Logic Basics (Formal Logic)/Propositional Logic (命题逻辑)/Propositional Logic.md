# Propositional Logic

[TOC]



## Res
### Related Topics
↗ [Boolean Algebra](../../../🧊%20Algebra/Boolean%20Algebra/Boolean%20Algebra.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Propositional_logic

Propositional logic is a branch of logic. It is also called statement logic, sentential calculus, propositional calculus, sentential logic, or sometimes zeroth-order logic. Sometimes, it is called first-order propositional logic to contrast it with  [System F](https://en.wikipedia.org/wiki/System_F "System F"), but it should not be confused with first-order logic. It deals with propositions (which can be true or false) and relations between propositions, including the construction of arguments based on them. Compound propositions are formed by connecting propositions by  [logical connectives](https://en.wikipedia.org/wiki/Logical_connective "Logical connective") representing the [truth functions](https://en.wikipedia.org/wiki/Truth_function "Truth function") of [conjunction](https://en.wikipedia.org/wiki/Logical_conjunction "Logical conjunction"), [disjunction](https://en.wikipedia.org/wiki/Logical_disjunction "Logical disjunction"), [implication](https://en.wikipedia.org/wiki/Material_conditional "Material conditional"), [biconditional](https://en.wikipedia.org/wiki/Logical_biconditional "Logical biconditional"), and [negation](https://en.wikipedia.org/wiki/Negation "Negation"). Some sources include other connectives, as in the table below.

Unlike first-order logic, propositional logic does not deal with non-logical objects, predicates about them, or quantifiers. However, all the machinery of propositional logic is included in first-order logic and higher-order logics. ==In this sense, propositional logic is the foundation of first-order logic and higher-order logic.==

Propositional logic is typically studied with a formal language, in which propositions are represented by letters,  which are called _[propositional variables](https://en.wikipedia.org/wiki/Propositional_variable "Propositional variable")_. These are then used, together with symbols for connectives, to make _[propositional formula](https://en.wikipedia.org/wiki/Propositional_formula "Propositional formula")_. Because of this, the propositional variables are called _[atomic formulas](https://en.wikipedia.org/wiki/Atomic_formula "Atomic formula")_ of a formal propositional language. While the atomic propositions are typically represented by letters of the alphabet, there is a variety of notations to represent the logical connectives. The following table shows the main notational variants for each of the connectives in propositional logic.



## Overview
![](../../../../../Assets/Pics/Screenshot%202025-08-04%20at%2000.38.30.png)

![Screenshot 2023-01-02 at 5.55.50 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.55.50%20PM.png)

![Screenshot 2023-01-02 at 5.56.43 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.56.43%20PM.png)

![Screenshot 2023-01-02 at 5.57.08 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.57.08%20PM.png)

![Screenshot 2023-01-02 at 5.57.28 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.57.28%20PM.png)

![Screenshot 2023-01-02 at 5.59.42 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.59.42%20PM.png)

![Screenshot 2023-01-02 at 6.02.32 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.02.32%20PM.png)


消解规则：  $$(A∨B)∧(¬A∨C)⇒(B∨C)$$

这里注意是蕴含不是等价，也就是说左式成立时右式一定成立，而左式不成立时右式不一定不成立，也不一定成立。

证明的思想很简单：A 和 ¬A 一定同时成立一个；如果要求左式成立，B 和 C也得至少成立一个。



## Ref

