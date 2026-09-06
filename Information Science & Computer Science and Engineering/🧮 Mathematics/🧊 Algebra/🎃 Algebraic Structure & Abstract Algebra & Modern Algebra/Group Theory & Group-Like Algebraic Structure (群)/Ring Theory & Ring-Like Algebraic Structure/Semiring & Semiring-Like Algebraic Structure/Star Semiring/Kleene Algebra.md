# Kleene Algebra

[TOC]



## Res
### Related Topics
↗ [Regular Language (RL) & Finite Automata (FA)](../../../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Regular%20Language%20(RL)%20&%20Finite%20Automata%20(FA).md)
↗ [regex (Regular Expression)](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/DSL%20(Domain%20Specific%20Languages)/📌%20regex%20(Regular%20Expression)/regex%20(Regular%20Expression).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Kleene_algebra

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") and [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"), a **Kleene algebra** ([/ˈkleɪni/](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English") [_KLAY-nee_](https://en.wikipedia.org/wiki/Help:Pronunciation_respelling_key "Help:Pronunciation respelling key"); named after [Stephen Cole Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene "Stephen Cole Kleene")) is a [semiring](https://en.wikipedia.org/wiki/Semiring "Semiring") that generalizes the theory of [regular expressions](https://en.wikipedia.org/wiki/Regular_expression "Regular expression"): it consists of a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") supporting union (addition), concatenation (multiplication), and [Kleene star](https://en.wikipedia.org/wiki/Kleene_star "Kleene star") operations subject to certain algebraic laws. The addition is required to be idempotent ($x+x=x$ for all $x$), and induces a [partial order](https://en.wikipedia.org/wiki/Partially_ordered_set "Partially ordered set") defined by $x≤y$ if $x+y=y$. The Kleene star operation, denoted $x∗$, must satisfy the laws of a [closure operator](https://en.wikipedia.org/wiki/Closure_operator "Closure operator").

Kleene algebras have their origins in the theory of regular expressions and [regular languages](https://en.wikipedia.org/wiki/Regular_language "Regular language") introduced by Kleene in 1951 and studied by others including V.N. Redko and [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway "John Horton Conway"), who introduced the term in 1971. The concept was later popularized by [Dexter Kozen](https://en.wikipedia.org/wiki/Dexter_Kozen "Dexter Kozen") in the 1980s, who fully characterized their algebraic properties and, in 1994, gave a finite axiomatization.

Kleene algebras have a number of extensions that have been studied, including Kleene algebras with tests (KAT) introduced by Kozen in 1997. Kleene algebras and Kleene algebras with tests have applications in [formal verification](https://en.wikipedia.org/wiki/Formal_verification "Formal verification") of computer programs. They have also been applied to specify and verify [computer networks](https://en.wikipedia.org/wiki/Computer_network "Computer network").



## Ref
