# Modal Logic (模态逻辑)

[TOC]



## Res
### Related Topics
↗ [Boolean Algebra](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Lattice%20(Group%20Theory)%20&%20Lattice-Like%20Algebraic%20Structure/Boolean%20Algebra/Boolean%20Algebra.md)
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)


### Other Resources
https://users.aalto.fi/~rintanj1/notes-logic.pdf
Logic and Applications, Jussi Rintanen
Department of Computer Science, Aalto University, Helsinki, Finland
March 29, 2025



## Intro
> 🔗 https://en.wikipedia.org/wiki/Modal_logic

==**Modal logic** is a kind of [logic](https://en.wikipedia.org/wiki/Logic "Logic") used to represent statements about [necessity and possibility](https://en.wikipedia.org/wiki/Modality_\(natural_language\) "Modality (natural language)").== In [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy") and related fields it is used as a tool for understanding concepts such as [knowledge](https://en.wikipedia.org/wiki/Knowledge "Knowledge"), [obligation](https://en.wikipedia.org/wiki/Obligation "Obligation"), and [causation](https://en.wikipedia.org/wiki/Causality "Causality"). For instance, in [epistemic modal logic](https://en.wikipedia.org/wiki/Epistemic_modal_logic "Epistemic modal logic"), the [formula](https://en.wikipedia.org/wiki/Well-formed_formula "Well-formed formula") $\Box P$ can be used to represent the statement that $P$ is known. In [deontic modal logic](https://en.wikipedia.org/wiki/Deontic_modal_logic "Deontic modal logic"), that same formula can represent that $P$ is a moral obligation. Modal logic considers the inferences that modal statements give rise to. For instance, most epistemic modal logics treat the formula $\Box P\rightarrow P$ as a [tautology](https://en.wikipedia.org/wiki/Tautology_\(logic\) "Tautology (logic)"), representing the principle that only true statements can count as knowledge. However, this formula is not a tautology in deontic modal logic, since what ought to be true can be false.

Modal logics are [formal systems](https://en.wikipedia.org/wiki/Formal_system "Formal system") that include [unary](https://en.wikipedia.org/wiki/Unary_operation "Unary operation") operators such as $\Diamond$ and $\Box$, representing possibility and necessity respectively. For instance the modal formula $\Diamond P$ can be read as "possibly P" while $\Box P$ can be read as "necessarily P". In the standard [relational semantics](https://en.wikipedia.org/wiki/Kripke_semantics "Kripke semantics") for modal logic, formulas are assigned truth values relative to a _[possible world](https://en.wikipedia.org/wiki/Possible_world "Possible world")_. A formula's truth value at one possible world can depend on the truth values of other formulas at other _[accessible](https://en.wikipedia.org/wiki/Accessibility_relation "Accessibility relation")_ [possible worlds](https://en.wikipedia.org/wiki/Possible_worlds "Possible worlds"). In particular, $\Diamond P$ is true at a world if $P$ is true at _some_ accessible possible world, while $\Box P$ is true at a world if $P$ is true at _every_ accessible possible world. A variety of proof systems exist which are sound and complete with respect to the semantics one gets by restricting the accessibility relation. For instance, the deontic modal logic **D** is sound and complete if one requires the accessibility relation to be [serial](https://en.wikipedia.org/wiki/Serial_relation "Serial relation").

While the intuition behind modal logic dates back to antiquity, the first modal [axiomatic systems](https://en.wikipedia.org/wiki/Axiomatic_system "Axiomatic system") were developed by [C. I. Lewis](https://en.wikipedia.org/wiki/C._I._Lewis "C. I. Lewis") in 1912. The now-standard relational semantics emerged in the mid twentieth century from work by [Arthur Prior](https://en.wikipedia.org/wiki/Arthur_Prior "Arthur Prior"), [Jaakko Hintikka](https://en.wikipedia.org/wiki/Jaakko_Hintikka "Jaakko Hintikka"), and [Saul Kripke](https://en.wikipedia.org/wiki/Saul_Kripke "Saul Kripke"). Recent developments include alternative [topological](https://en.wikipedia.org/wiki/Topology "Topology") semantics such as [neighborhood semantics](https://en.wikipedia.org/wiki/Neighborhood_semantics "Neighborhood semantics") as well as applications of the relational semantics beyond its original philosophical motivation. Such applications include [game theory](https://en.wikipedia.org/wiki/Game_theory "Game theory"), [moral](https://en.wikipedia.org/wiki/Moral_theory "Moral theory") and [legal theory](https://en.wikipedia.org/wiki/Legal_theory "Legal theory"), [web design](https://en.wikipedia.org/wiki/Web_design "Web design"), [multiverse-based set theory](https://en.wikipedia.org/wiki/Multiverse_\(set_theory\) "Multiverse (set theory)"), and [social epistemology](https://en.wikipedia.org/wiki/Social_epistemology "Social epistemology").



## Ref
