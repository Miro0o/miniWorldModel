# Temporal Logic (时态逻辑) & Computation-Tree Logic (CTL*) Family

[TOCj]



## Res
### Related Topics
↗ [Sequential Logic Circuits (时序逻辑电路)](../../../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x04%20Sequential%20Logic%20Circuits%20(时序逻辑电路)/Sequential%20Logic%20Circuits%20(时序逻辑电路).md)
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
↗ [(Formal) Model Checking](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

↗ [MC Algorithms For CTL*](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/MC%20Algorithms/MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20CTL*.md)


### Other Resources
https://matthewbdwyer.github.io/psp/
Temporal Specification Patterns
This page is the home of an online repository for information about property specification for finite-state verification. The intent of this repository is to collect patterns that occur commonly in the specification of concurrent and reactive systems. Most specification formalisms in this domain are a bit tricky to use. To make them easier to use our patterns come with descriptions that illustrate how to map well-understood, but imprecise, conceptions of system behavior into precise statements in common formal specification languages. We're already support mappings to a number of formalisms that have tool support for automated analysis.



## Intro
Temporal logics may differ according to how they handle branching in the underlying computation tree:
- In a **↗ [Linear Temporal Logic (LTL)](Linear%20Temporal%20Logic%20(LTL).md)**, operators are provided for describing events along a single computation path. 
- In a **↗ [Branching Time Logic (Computation-Tree Logic, CTL)](Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)** the temporal operators quantify over the paths that are possible from a given state.

The **computation tree logic CTL\***(NOTICE FOR THE PRIME) combines both branching-time and linear-time operators.

![](../../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2022.14.33.png)

> 🔗 <a>https://en.wikipedia.org/wiki/CTL*</a>

**CTL*** is a superset of [computational tree logic](https://en.wikipedia.org/wiki/Computational_tree_logic "Computational tree logic") (CTL) and [linear temporal logic](https://en.wikipedia.org/wiki/Linear_temporal_logic "Linear temporal logic") (LTL). It freely combines path quantifiers and temporal operators. Like CTL, CTL* is a branching-time logic. The formal semantics of CTL* formulae are defined with respect to a given [Kripke structure](https://en.wikipedia.org/wiki/Kripke_structure "Kripke structure").

CTL* model checking (of an input formula on a fixed model) is PSPACE-complete and the [satisfiability](https://en.wikipedia.org/wiki/Satisfiability "Satisfiability") problem is [2EXPTIME](https://en.wikipedia.org/wiki/2EXPTIME "2EXPTIME")-complete.


### Syntax & Notation of CTL*
**Notation**
In this logic a **path quantifier** can prefix an assertion composed of arbitrary combinations of the usual linear-time operators.
- For a state $s$ we define the **set of all paths** starting from $s$, as the set of all **maximal executions** starting from $s$: $Paths(s) = \{s_0, s_1, s_2, ... ∣ s_0=s \text{ and } s_i \to s_{i+1}\}$
	- For a path $\pi = s_0, s_1, s_2, …$ we define the $(i-1)$-th state by $\pi[i]=s_i$
	- We can also define the prefix starting at the $(i-1)$-th state $\pi[i...]=s_i, s_{i+1}, ...$
- We define the ==satisfaction set== of a (LTL, CTL, CTL\*, etc.) formula as the set of states that satisfy the formula $sat(\phi) = \{s ∣ s \models \phi\}$
	- ↗ [(Formal) Model Checking](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
	- We say that a transition system ($T$) satisfies a formula ($\phi$) if all its initial states ($s\in I$) satisfy the formula:
		- $T\models\phi \iff \forall s\in I. s \models\phi$
	- or, equivalently:
		- $T\models\phi \iff I\subseteq sat(\phi)$

**Logical Operators:**

**Modal Operators:**
- Path quantifier:
	- $A / \forall$ -- “for every path”
	- $E / \exists$ -- “there exists a path”
- Linear-time operators:
	- $X_p$ -- $p$ holds ne<a>X</a>t time /state
	- $F_p$ -- $p$ holds sometime in the <a>F</a>uture
	- $G_p$ -- $p$ holds <a>G</a>lobally in the future
	- $_pU_q$ -- $p$ holds <a>U</a>ntil $q$ holds

![](../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2001.24.00.png)


**Syntax**
The grammar of CTL* has the same state formulas as CTL… $$\phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi ∣ \forall\psi$$
… but (subtly) extended path formulas (akin to LTL) $$\psi ::= \bigcirc\psi ∣ \diamondsuit\psi ∣ \Box\psi ∣ \psi_1\cup\psi_2 ∣ \neg\psi ∣ \psi_1\lor\psi_2 ∣ \phi$$
Main differences:
- no need to interleave quantifiers with temporal operators
- All state formulas are also path formulas

> LTL formulas can be seen as CTL* formulas of the form $\forall\psi$ where $\psi$ is a path formula **without path quantifiers**


**Minimal Set of Operators**


### Semantics of CTL*
![](../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.18.21.png)
#### Semantic Equivalences & Equations of CTL\* Formula ⭐


### Expressive Power of CTL, LTL, and CTL*
It can be shown that the three logics discussed in this section have different expressive powers. 

![](../../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2022.14.33.png)

Example 1:
- For example, there is no CTL formula that is equivalent to the LTL formula $A(FG p)$ .
- Likewise, there is no LTL formula that is equivalent to the CTL formula $AG(EF p)$ .
- The disjunction $A(FGp)\lor AG(EFp)$ is a CTL* formula that is not expressible in either CTL or LTL.


Example 2: CTL can distinguish more than LTL
- ![](../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2022.38.42.png)
- A simple CTL formula that distinguishes them is `AX ( EX c ∧ EX d )`
	- Reason: evaluate at the initial state `a`.
		- In **T₁** `a` has a single successor `b`, and at that `b` there exists a next state labelled `c` and there exists a next state labelled `d`. So `EX c ∧ EX d` holds at `b`, hence `AX(...)` holds at `a`. Therefore the formula is **true** in T₁.
		- In **T₂** `a` has two different immediate successors (two different `b` states). One `b` has a `c`-successor but no `d`-successor, the other `b` has a `d`-successor but no `c`-successor. Thus for at least one immediate successor of `a` the conjunct `EX c ∧ EX d` is false, so `AX(...)` is **false** in T₂.
	- So `AX(EX c ∧ EX d)` holds in T₁ but not in T₂, distinguishing the two systems.


Example 3: LTL can distinguish more than CTL
- ![](../../../../../../../Assets/Pics/Screenshot%202025-12-09%20at%2019.16.01.png)
- Are $\varphi \land G\varphi$ and $\varphi \land AG\varphi$ equivalent?
- No. They are _not_ equivalent. They look similar, but they quantify in fundamentally different ways:
	- In CTL: $AG \varphi$ means:  
		- ==In _every_ path starting from the current state, at _every_ future state, $\varphi$ holds.==
	- In LTL: $G\varphi$ means:  
		- ==Along _the current path being evaluated_, $\varphi$ holds at every future position.==
	- LTL never talks about _other_ possible futures.  CTL does.


Example 4: CTL\* and CTL
Example 4.1:

| Formula       | Real meaning                                                               | Strength                                                         |
| ------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| (CTL\*) EGF φ | One path with infinitely many φ’s                                          | 🔥 **Strongest**                                                 |
| (CTL) EGEF φ  | One path that infinitely often reaches states _from which φ is reachable_  | Medium                                                           |
| (CTL) EGAF φ  | One path that infinitely often reaches states _from which φ is inevitable_ | Weakest (strongest requirement on states, but easier to falsify) |
Example 4.2:
- `A(Φ1 U (Φ2 ∧ AX Φ3))` (CTL) -> `A(Φ1 U (Φ2 ∧ X Φ3))` (CTL\*) -> `A(Φ1 U (Φ2 ∧ EX Φ3))` (CTL)
- In **CTL*** the formula `A(Φ1 U (Φ2 ∧ X Φ3))` means:
	- For **every** path πππ from the initial state, there exists an index kkk such that (for all i<ki<ki<k we have π[i]⊨Φ1π[i]\models Φ1π[i]⊨Φ1) and π[k]⊨Φ2π[k]\models Φ2π[k]⊨Φ2 and **the next state along the _same path_** π[k+1]⊨Φ3π[k+1]\models Φ3π[k+1]⊨Φ3.
	- Note: the `X` refers to the _next state along the same path_.
- In **CTL** you are **required** to place a path-quantifier in front of temporal operators like `X`. So there are two natural CTL encodings people consider:
    - `AX Φ3` means: **at the current state, every successor state** satisfies `Φ3`.
    - `EX Φ3` means: **at the current state, there exists some successor** that satisfies `Φ3`.
- If you write `A(Φ1 U (Φ2 ∧ AX Φ3))` in CTL, the `AX` is a _state_ property: the `Φ2` state chosen must have _all_ successors satisfying `Φ3`.  
- If you write `A(Φ1 U (Φ2 ∧ EX Φ3))`, the chosen `Φ2` state must have _some_ successor satisfying `Φ3` (but that successor might not be the actual next state on the path you are considering).
Example 4.3:
- For all paths, either Φ1 always holds or Φ2 always holds:
	- can only be expressed in CTL\*. CTL expression is not possible.
	- $(AGΦ1​∨AGΦ2​)$ (CTL) -> $A(GΦ1​∨GΦ2​)$ (CTL\*) -> $AG(Φ1​∨Φ2​)$ (CTL)
	- There are three similar-looking formulas whose meanings differ:
		- AGΦ1∨AGΦ2AG\Phi_1 \vee AG\Phi_2AGΦ1​∨AGΦ2​ — global uniform choice: either Φ1\Phi_1Φ1​ holds everywhere in the whole model, or Φ2\Phi_2Φ2​ does (same choice for all paths).
		- A(GΦ1∨GΦ2)A(G\Phi_1 \vee G\Phi_2)A(GΦ1​∨GΦ2​) — the one you asked about: for **each path** choose (possibly differently per path) one of the two to hold everywhere on that path.
		- AG(Φ1∨Φ2)AG(\Phi_1\vee\Phi_2)AG(Φ1​∨Φ2​) — at every state at least one of Φ1,Φ2\Phi_1,\Phi_2Φ1​,Φ2​ holds; the choice may vary from state to state (even along the same path).



## Ref
[15–414/614 Bug Catching: Automated Program Verification - Lecture 7: Computation Tree Logics | CMU]: https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00
Model of Computation
Computation Tree Logics
The Logic CTL*
Path Formulas and State Formulas
CTL and LTL
Expressive Power of Logics
