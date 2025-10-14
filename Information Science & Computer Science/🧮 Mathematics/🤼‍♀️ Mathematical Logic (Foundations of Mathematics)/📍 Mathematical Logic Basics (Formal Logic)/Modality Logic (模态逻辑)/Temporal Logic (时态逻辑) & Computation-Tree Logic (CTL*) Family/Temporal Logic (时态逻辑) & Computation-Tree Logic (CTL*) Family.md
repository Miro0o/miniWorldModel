# Temporal Logic (时态逻辑) & Computation-Tree Logic (CTL*) Family

[TOCj]



## Res
### Related Topics
↗ [Sequential Logic Circuits (时序逻辑电路)](../../../../../🔑%20CS%20Core/Hardware%20&%20EE%20Related%20Theories/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x04%20Sequential%20Logic%20Circuits%20(时序逻辑电路)/Sequential%20Logic%20Circuits%20(时序逻辑电路).md)
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
↗ [(Formal) Model Checking](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)



## Intro
### Model Of Computation
> ↗ [(Formal) Model Checking /(Symbolic) Transition Systems](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md#(Symbolic)%20Transition%20Systems)

![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.33.15.png)
<small><a>https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00</a></small>
![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.34.43.png)
<small><a>https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00</a></small>


### Computation Tree Logics CTL*
Temporal logics may differ according to how they handle branching in the underlying computation tree:
- In a **↗ [Linear Temporal Logic (LTL)](Linear%20Temporal%20Logic%20(LTL).md)**, operators are provided for describing events along a single computation path. 
- In a **↗ [Branching Time Logic (Computation-Tree Logic, CTL)](Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)** the temporal operators quantify over the paths that are possible from a given state.

The **computation tree logic CTL\***(NOTICE FOR THE PRIME) combines both branching-time and linear-time operators.

![](../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2022.14.33.png)


### Syntax & Notation of CTL*
**Notation**
In this logic a **path quantifier** can prefix an assertion composed of arbitrary combinations of the usual linear-time operators.
- For a state $s$ we define the **set of all paths** starting from $s$, as the set of all **maximal executions** starting from $s$: $Paths(s) = \{s_0, s_1, s_2, ... ∣ s_0=s \text{ and } s_i \to s_{i+1}\}$
	- For a path $\pi = s_0, s_1, s_2, …$ we define the $(i-1)$-th state by $\pi[i]=s_i$
	- We can also define the prefix starting at the $(i-1)$-th state $\pi[i...]=s_i, s_{i+1}, ...$
- We define the ==satisfaction set== of an LTL or CTL formula as the set of states that satisfy the formula $sat(\phi) = \{s ∣ s \models \phi\}$
	- ↗ [(Formal) Model Checking](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
	- We say that a transition system ($T$) satisfies a formula ($\phi$) if all its initial states ($s\in I$) satisfy the formula:
		- $T\models\phi \iff \forall s\in I. s \models\phi$
	- or, equivalently:
		- $T\models\phi \iff I\subseteq sat(\phi)$
- Path quantifier:
	- $A / \forall$ -- “for every path”
	- $E / \exists$ -- “there exists a path”
- Linear-time operators:
	- $X_p$ -- $p$ holds next time /state
	- $F_p$ -- $p$ holds sometime in the future
	- $G_p$ -- $p$ holds globally in the future
	- $_pU_q$ -- $p$ holds until $q$ holds

![](../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2001.24.00.png)


**Syntax**
The grammar of CTL* has the same state formulas as CTL… $$\phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi ∣ \forall\psi$$
… but (subtly) extended path formulas (akin to LTL) $$\psi ::= \bigcirc\psi ∣ \diamondsuit\psi ∣ \Box\psi ∣ \psi_1\cup\psi_2 ∣ \neg\psi ∣ \psi_1\lor\psi_2 ∣ \phi$$
Main differences:
- no need to interleave quantifiers with temporal operators
- All state formulas are also path formulas

> LTL formulas can be seen as CTL* formulas of the form $\forall\psi$ where $\psi$ is a path formula **without path quantifiers**


### Semantics of CTL*
![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.18.21.png)


### Expressive Power of CTL, LTL, and CTL*
It can be shown that the three logics discussed in this section have different expressive powers. 

For example, there is no CTL formula that is equivalent to the LTL formula $A(FG p)$ .
Likewise, there is no LTL formula that is equivalent to the CTL formula $AG(EF p)$ .
The disjunction $A(FGp)\lor AG(EFp)$ is a CTL* formula that is not expressible in either CTL or LTL.

![](../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2022.14.33.png)



## Ref
[15–414/614 Bug Catching: Automated Program Verification - Lecture 7: Computation Tree Logics | CMU]: https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00
Model of Computation
Computation Tree Logics
The Logic CTL*
Path Formulas and State Formulas
CTL and LTL
Expressive Power of Logics
