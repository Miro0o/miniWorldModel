# Branching Time Logic (Computation-Tree Logic, CTL)

[TOC]



## Res
### Related Topics
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)



## Intro
### Syntax of CTL
↗ [Temporal Logic (时态逻辑) & Computation-Tree Logic (CTL*) /Syntax & Notation of CLT*](Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family.md#Syntax%20&%20Notation%20of%20CTL*)

> ↗ [(Zeroth-Order Logic) Propositional Logic - (零阶) 命题逻辑 /Propositional Formula & Syntax](../../Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md#Propositional%20Formula%20&%20Syntax)
> ![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2013.23.22.png)
> 


![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.53.45.png)

![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.54.01.png)

Hence, CTL syntax in BNF: 
$$\begin{aligned} & \phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi ∣ \forall\psi \\
& \psi ::= \bigcirc\phi ∣ \Diamond\phi ∣ \Box\phi ∣ \phi_1\cup\phi_2 \end{aligned}$$
#### Minimal Syntax/ Minimal Set of Operators of CTL
We can get rid of “always” and “eventually” in CTL: 
$$\begin{aligned} & \phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi ∣ \forall\psi \\
& \psi ::= \bigcirc\phi ∣ \phi_1\cup\phi_2 \end{aligned}$$
#### Existential Normal Form of CTL (ECTL)
Alternatively, we can get rid of the universal quantifier: $$\begin{aligned} &\phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\psi \\
& \psi ::= \bigcirc\phi ∣ \Box\phi ∣ \phi_1\cup\phi_2\end{aligned}$$
or, only state formulas: $$\phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\bigcirc\phi ∣ \exists\Box\phi ∣ \exists\phi_1\cup\phi_2$$
![](../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2022.28.42.png)


### Semantics of CTL
![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.54.04.png)

![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.53.29.png)

![](../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2019.54.20.png)
#### Semantic Equivalences & Equations of CTL Formula



## Ref
