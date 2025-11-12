# Branching Time Logic (Computation-Tree Logic, CTL)

[TOC]



## Res
### Related Topics
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)



## Intro
### Syntax of CTL
↗ [Computation-Tree Logic (CTL*) /Syntax & Notation of CLT*](Computation-Tree%20Logic%20(CTL*)%20Family.md#Syntax%20&%20Notation%20of%20CTL*)

> ↗ [(Zeroth-Order Logic) Propositional Logic - (零阶) 命题逻辑 /Propositional Formula & Syntax](../../../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md#Propositional%20Formula%20&%20Syntax)
> ![](../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2013.23.22.png)
> 


![](../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.53.45.png)

![](../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.54.01.png)

Hence, CTL syntax in BNF: 
$$\begin{aligned} & \phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi ∣ \forall\psi \\
& \psi ::= \bigcirc\phi ∣ \Diamond\phi ∣ \Box\phi ∣ \phi_1\cup\phi_2 \end{aligned}$$

Typical Patterns of Formulas:
- “inv is an invariant”: 
	- ∀ □ inv
- “every request is followed by a response”
	- ∀ □ (request → ∃◊response)
- “infinitely often p holds”
	- ∀ □ ∀◊p
- “q is persistent”
	- ∀◊ ∃ □ q

#### Minimal Syntax/ Minimal Set of Operators of CTL
We can get rid of “always” and “eventually” in CTL: 
$$\begin{aligned} & \phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi ∣ \forall\psi \\
& \psi ::= \bigcirc\phi ∣ \phi_1\cup\phi_2 \end{aligned}$$
#### Existential Normal Form of CTL (ECTL)
Alternatively, we can get rid of the universal quantifier: $$\begin{aligned} &\phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi \\
& \psi ::= \bigcirc\phi ∣ \Box\phi ∣ \phi_1\cup\phi_2\end{aligned}$$
or, only state formulas: $$\phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\bigcirc\phi ∣ \exists\Box\phi ∣ \exists\phi_1\cup\phi_2$$
![](../../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2022.28.42.png)
#### Witnesses and Counterexamples for CTL
A **witness** for a formula of the form ∃_ψ_ is just a path satisfying _ψ_

A **counterexample** is unfortunately the entire computation tree :( 
We have the dual situation with formulas of the form ∀_ψ_


### Semantics of CTL
![](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.21.24.png)
![](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.21.38.png)


![](../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.54.04.png)

![](../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.53.29.png)

![](../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.54.20.png)
#### Semantic Equivalences & Equations of CTL Formula ⭐
> 🔗 https://en.wikipedia.org/wiki/Computation_tree_logic#Semantic_equivalences

The formulae $\phi$ and $\psi$ are said to be semantically equivalent if any state in any model that satisfies one also satisfies the other, i.e. $T\models\phi \iff T\models \psi$.
- The semantically equivalence of formulae is denoted $\phi≡\psi$


**Simple Semantic Equivalences**
A simple equivalence allows us to define “eventually” with “until”: $F\phi \equiv true \cup \phi$

Duality of "Next":
- Another example of simple equivalence is: $X\phi \equiv \neg X\neg\phi$
	- ![|300](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.42.26.png)
- Now in CTL: $EX\phi \equiv \neg AX\neg\phi$, $AX\phi \equiv \neg EX\neg\phi$
	- ![|300](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.42.53.png)

Dualities for “eventually” and “always”
- As in propositional logic, we could get rid of some operators: $G\phi \equiv \neg\ F\neg\phi$
- In CTL we have: $EG\phi \equiv \neg AF\neg\phi$, $AG\phi \equiv \neg EF\neg\phi$
	- Why is this not fine in CTL?: $G\phi \equiv \neg F\neg\phi$
		- **Syntactically not allowed** (alternation with path quantifiers)
- ![](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.33.17.png)


**De Morgan's Laws**
It can be seen that $A (\forall)$ and $E(\exists)$ are duals, being universal and existential computation path quantifiers respectively: $\neg A\Phi≡E\neg\Phi$.

Furthermore, so are $G(\Box)$ and $F(\Diamond)$.

Hence an instance of [De Morgan's laws](https://en.wikipedia.org/wiki/De_Morgan%27s_laws "De Morgan's laws") can be formulated in CTL:
- $\neg AF\phi \equiv EG\neg \phi$
- $\neg EF\phi \equiv AG\neg \phi$
- $\neg AX\phi \equiv EX\neg \phi$

It can be shown using such identities that a subset of the CTL temporal connectives is adequate if it contains $EU$, at least one of $\{AX,EX\}$ and at least one of $\{EG,AF,AU\}$ and the boolean connectives.


**Expansion Laws**
The important equivalences below are called the **expansion laws**; they allow unfolding the verification of a CTL connective towards its successors in time.
- $AG\phi \equiv \phi \land AXAG\phi$
- $EG\phi \equiv \phi \land EXEG\phi$
- $AF\phi \equiv \phi \lor AXAF\phi$
- $EF\phi \equiv \phi \lor EXEF\phi$
- $A[\phi U\psi ]\equiv \psi \lor (\phi \land AXA[\phi U\psi ])$
- $E[\phi U\psi ]\equiv \psi \lor (\phi \land EXE[\phi U\psi ])$

In LTL:
- $□ ϕ ≡ ϕ ∧ ◯ □ ϕ$
- $◊ϕ ≡ ϕ ∨ ◯◊ϕ$
- $ϕ1𝖴ϕ2 ≡ ϕ2 ∨ (ϕ1 ∧ ◯ϕ1𝖴ϕ2)$

In CTL:
- $∃ □ ϕ ≡ ϕ ∧ ∃◯ ∃ □ ϕ$
- $∃◊ϕ ≡ ϕ ∨ ∃◯ ∃◊ϕ$
- $∃ϕ1𝖴ϕ2 ≡ ϕ2 ∨ (ϕ1 ∧ ∃◯ ∃ϕ1𝖴ϕ2)$


**Distribution Laws**
In LTL
- $◊(ϕ1 ∨ ϕ2) ≡ (◊ϕ1) ∨ (◊ϕ2)$
- $□ (ϕ1 ∧ ϕ2) ≡ (□ϕ1) ∧ (□ϕ2)$

In CTL
- $∃◊(ϕ1 ∨ ϕ2) ≡ ( ∃◊ϕ1) ∨ ( ∃◊ϕ2)$
- $∀ □ (ϕ1 ∧ ϕ2) ≡ ( ∀ □ ϕ1) ∧ ( ∀ □ ϕ2)$


Does this hold? $$∃◊(ϕ1 ∧ ϕ2) ≡ ( ∃◊ϕ1) ∧ ( ∃◊ϕ2)$$Let’s see a proof
- Important for mandatory assignments
- Equivalence/implication holds —> demonstrate formally
- Equivalence/implication doesn’t hold —> show a counter-example
- ![](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.37.28.png)
- ![](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.37.38.png)

**More Laws?**
(Principles of Model Checking, Christel Baier and Joost-Pieter Katoen)

There exist complete axiomatisations.


### Expressiveness of CTL
↗ [Computation-Tree Logic (CTL*) Family](Computation-Tree%20Logic%20(CTL*)%20Family.md)

![](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.38.42.png)



## Ref
