# Epistemic (Modal) Logic

[TOC]



## Res
### Related Topics
↗ [Epistemology (Theory of Knowledge)](../../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/Epistemology%20(Theory%20of%20Knowledge)/Epistemology%20(Theory%20of%20Knowledge).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Epistemic_modal_logic

**Epistemic modal logic** is a subfield of [modal logic](https://en.wikipedia.org/wiki/Modal_logic "Modal logic") that is concerned with reasoning about [knowledge](https://en.wikipedia.org/wiki/Knowledge "Knowledge"). While [epistemology](https://en.wikipedia.org/wiki/Epistemology "Epistemology") has a long philosophical tradition dating back to [Ancient Greece](https://en.wikipedia.org/wiki/Ancient_Greece "Ancient Greece"), epistemic logic is a much more recent development with applications in many fields, including [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"), [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), [economics](https://en.wikipedia.org/wiki/Economics "Economics"), and [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics"). While philosophers since [Aristotle](https://en.wikipedia.org/wiki/Aristotle "Aristotle") have discussed modal logic, and [Medieval philosophers](https://en.wikipedia.org/wiki/Medieval_Philosophy "Medieval Philosophy") such as [Avicenna](https://en.wikipedia.org/wiki/Avicenna "Avicenna"), [Ockham](https://en.wikipedia.org/wiki/William_of_Ockham "William of Ockham"), and [Duns Scotus](https://en.wikipedia.org/wiki/Duns_Scotus "Duns Scotus") developed many of their observations, it was [C. I. Lewis](https://en.wikipedia.org/wiki/C._I._Lewis "C. I. Lewis") who created the first symbolic and systematic approach to the topic, in 1912. It continued to mature as a field, reaching its modern form in 1963 with the work of [Saul Kripke](https://en.wikipedia.org/wiki/Saul_Kripke "Saul Kripke").

> 🔗 https://plato.stanford.edu/entries/logic-epistemic/

Epistemic logic is a subfield of philosophical logic concerned with logical approaches to knowledge, belief, and related notions. Though any logic with an epistemic interpretation may be called an _epistemic logic_, the most widespread type of epistemic logics in use at present are modal logics. Knowledge and belief are represented via the modal operators _K_ and _B_, often with a subscript indicating the agent that holds the attitude. Formulas $K_aφ$ and $B_aφ$ are then read “agent _a_ knows that phi” and “agent _a_ believes that phi”, respectively. Epistemic logic allows the formal exploration of the implications of epistemic principles. For example, the formula $K_aφ→φ$ states that what is known is true, while $K_aφ→K_aK_aφ$ states that what is known is known to be known. The semantics of epistemic logic are typically given in terms of possible worlds _via_ Kripke models such that the formula $K_aφ$ is read to assert that $φ$ is true in all worlds agent _a_ considers epistemically possible relative to its current information. The central problems that have concerned epistemic logicians include, for example, determining which epistemic sprinciples are most appropriate for characterizing knowledge and belief, the logical relations between different conceptions of knowledge and belief, and the epistemic features of groups of agents. Beyond philosophy proper, epistemic logic flourishes in theoretical computer science, AI, economics, and related fields.
- [1. Introduction](https://plato.stanford.edu/entries/logic-epistemic/#Intr)
- [2. The Modal Approach to Knowledge](https://plato.stanford.edu/entries/logic-epistemic/#ModaApprKnow)
    - [2.1 The Formal Language of Epistemic Logic](https://plato.stanford.edu/entries/logic-epistemic/#FormLangEpisLogi)
    - [2.2 Higher-Order Attitudes](https://plato.stanford.edu/entries/logic-epistemic/#HighOrdeAtti)
    - [2.3 The Partition Principle and Modal Semantics](https://plato.stanford.edu/entries/logic-epistemic/#PartPrinModaSema)
    - [2.4 Kripke Models and The Indistinguishability Interpretation of Knowledge](https://plato.stanford.edu/entries/logic-epistemic/#KripModeIndiInteKnow)
    - [2.5 Epistemological Principles in Epistemic Logic](https://plato.stanford.edu/entries/logic-epistemic/#EpisPrinEpisLogi)
    - [2.6 Principles of Knowledge and Belief](https://plato.stanford.edu/entries/logic-epistemic/#PrinKnowBeli)
- [3. Knowledge in Groups](https://plato.stanford.edu/entries/logic-epistemic/#KnowGrou)
    - [3.1 Multi-Agent Languages and Models](https://plato.stanford.edu/entries/logic-epistemic/#MultAgenLangMode)
    - [3.2 Notions of Group Knowledge](https://plato.stanford.edu/entries/logic-epistemic/#NotiGrouKnow)
- [4. Beyond Knowing That](https://plato.stanford.edu/entries/logic-epistemic/#BeyoKnowThat)
- [5. Logical Omniscience](https://plato.stanford.edu/entries/logic-epistemic/#LogiOmni)
- [Bibliography](https://plato.stanford.edu/entries/logic-epistemic/#Bib)
- [Academic Tools](https://plato.stanford.edu/entries/logic-epistemic/#Aca)
- [Other Internet Resources](https://plato.stanford.edu/entries/logic-epistemic/#Oth)
- [Related Entries](https://plato.stanford.edu/entries/logic-epistemic/#Rel)


### Problems with the Possible World Model and Modal Model of Knowledge
> 🔗 https://en.wikipedia.org/wiki/Epistemic_modal_logic#Problems_with_the_possible_world_model_and_modal_model_of_knowledge

 we take the possible worlds approach to knowledge, it follows that our epistemic agent *a* knows all the [logical consequences](https://en.wikipedia.org/wiki/Logical_consequence "Logical consequence") of their beliefs (known as logical omniscience). If $Q$ is a logical consequence of $P$, then there is no possible world where $P$ is true but $Q$ is not. So if *a* knows that $P$ is true, it follows that all of the logical consequences of $P$ are true of all of the possible worlds compatible with _a_'s beliefs. Therefore, *a* knows $Q$. It is not epistemically possible for *a* that not-$Q$ given his knowledge that $P$. This consideration was a part of what led [Robert Stalnaker](https://en.wikipedia.org/wiki/Robert_Stalnaker "Robert Stalnaker") to develop [two-dimensionalism](https://en.wikipedia.org/wiki/Two-dimensionalism "Two-dimensionalism"), which can arguably explain how we might not know all the logical consequences of our beliefs even if there are no worlds where the propositions we know come out true but their consequences false.

Even when we ignore possible world semantics and stick to axiomatic systems, this peculiar feature holds. With **K** and **N** (the Distribution Rule and the Knowledge Generalization Rule, respectively), which are axioms that are minimally true of all normal modal logics, we can prove that we know all the logical consequences of our beliefs. If $Q$ is a logical consequence of $P$ (i.e. we have the [tautology](https://en.wikipedia.org/wiki/Tautology_\(logic\) "Tautology (logic)") $\models(P\rightarrow Q)$), then we can derive $K_a(P\rightarrow Q)$ with **N**, and using a [conditional proof](https://en.wikipedia.org/wiki/Conditional_proof "Conditional proof") with the axiom **K**, we can then derive $K_aP\rightarrow K_aQ$ with **K**. When we translate this into epistemic terms, this says that if $Q$ is a logical consequence of $P$, then *a* knows that it is, and if *a* knows $P$, *a* knows $Q$. That is to say, *a* knows all the logical consequences of every proposition. This is necessarily true of all classical modal logics. But then, for example, if *a* knows that prime numbers are divisible only by themselves and the number one, then *a* knows that $8683317618811886495518194401279999999$ is prime (since this number is only divisible by itself and the number one). That is to say, under the modal interpretation of knowledge, when *a* knows the definition of a prime number, *a* knows that this number is prime. This generalizes to any provable theorem in any axiomatic theory (i.e. if *a* knows all the axioms in a theory, then *a* knows all the provable theorems in that theory). It should be clear at this point that *a* is not human (otherwise there would not be any unsolved conjectures in mathematics, like [P versus NP problem](https://en.wikipedia.org/wiki/P_versus_NP_problem "P versus NP problem") or [Goldbach's conjecture](https://en.wikipedia.org/wiki/Goldbach's_conjecture "Goldbach's conjecture")). This shows that epistemic modal logic is an idealized account of knowledge, and explains objective, rather than subjective knowledge (if anything).


### Epistemic Fallacy (Masked-Man Fallacy)
> 🔗 https://en.wikipedia.org/wiki/Epistemic_modal_logic#Epistemic_fallacy_(masked-man_fallacy)

In [philosophical logic](https://en.wikipedia.org/wiki/Philosophical_logic "Philosophical logic"), the [masked-man fallacy](https://en.wikipedia.org/wiki/Masked-man_fallacy "Masked-man fallacy") (also known as the [intensional](https://en.wikipedia.org/wiki/Intension "Intension") fallacy or epistemic fallacy) is committed when one makes an illicit use of [Leibniz's law](https://en.wikipedia.org/wiki/Identity_of_indiscernibles "Identity of indiscernibles") in an argument. The fallacy is "epistemic" because it posits an immediate identity between a subject's knowledge of an object with the object itself, failing to recognize that Leibniz's Law is not capable of accounting for [intensional](https://en.wikipedia.org/wiki/Intension "Intension") contexts.



## Ref
