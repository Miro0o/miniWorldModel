# Dynamic Logic (DL)

[TOC]



## Res
### Related Topics


### Other Resources
https://www.weizmann.ac.il/math/harel/sites/math.harel/files/users/user56/DynamicLogicHarelKozenTiuryn.pdf
DYNAMIC LOGIC
DAVID HAREL, DEXTER KOZEN, AND JERZY TIURYN
Weizmann Institute of Science



## Intro
> 🔗 https://en.wikipedia.org/wiki/Dynamic_logic_(modal_logic)

In [logic](https://en.wikipedia.org/wiki/Logic "Logic"), [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), and [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"), **dynamic logic** is an extension of [modal logic](https://en.wikipedia.org/wiki/Modal_logic "Modal logic") capable of encoding properties of [computer programs](https://en.wikipedia.org/wiki/Computer_program "Computer program").

A simple example of a statement in dynamic logic is $$The\ ground\ is\ dry \rightarrow [It\ rains]The\ ground\ is\ wet$$,

which states that if the ground is currently dry and it rains, then afterwards the ground will be wet.

The syntax of dynamic logic contains a language of *propositions* (like "the ground is dry") and a language of *actions* (like "it rains"). The core modal constructs are $[a]p$, which states that after performing action $a$ the proposition $p$ should hold, and $\langle a\rangle p$, which states that after performing action $a$ it is possible that $p$ holds. The action language supports operations $a;b$ (doing one action followed by another), $a\cup b$ (doing one action or another), and iteration $a^*$ (doing one action zero or more times). The proposition language supports [Boolean operations](https://en.wikipedia.org/wiki/Boolean_algebra#Operations "Boolean algebra") (and, or, and not). The action logic is expressive enough to encode programs. For an arbitrary program $P$, [precondition](https://en.wikipedia.org/wiki/Precondition "Precondition") $\phi$, and [postcondition](https://en.wikipedia.org/wiki/Postcondition "Postcondition") $\phi'$, the dynamic logic statement $\phi\rightarrow[P]\phi'$ encodes the correctness of the program, making dynamic logic more general than [Hoare logic](https://en.wikipedia.org/wiki/Hoare_logic "Hoare logic").

Beyond its use in [formal verification](https://en.wikipedia.org/wiki/Formal_verification "Formal verification") of programs, dynamic logic has been applied to describe complex behaviors arising in [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics"), [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), [AI](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), and other fields.



## Ref
