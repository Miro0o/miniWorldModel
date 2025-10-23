# MC Algorithms

[TOC]



## Res
### Related Topics
↗ [AST & CST (Abstract & Contrete Syntax Tree)](../../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/AST%20&%20CST%20(Abstract%20&%20Contrete%20Syntax%20Tree).md)
↗ [Data Structure in Logic Formulas](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)

↗ [Modality Logic (模态逻辑)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Modality%20Logic%20(模态逻辑).md)
- ↗ [Dynamic Logic](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Dynamic%20Logic/Dynamic%20Logic.md)
- ↗ [Temporal Logic (时态逻辑) & Computation-Tree Logic (CTL*) Family](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family.md)
	- ↗ [Linear Temporal Logic (LTL)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Linear%20Temporal%20Logic%20(LTL).md)
	- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)



## Intro
> ↗ [Software Analysis Basics /Program State Space & State Explosion](../../../Software%20(Program)%20Analysis%20Basics.md#Program%20State%20Space%20&%20State%20Explosion)
> ↗ [Lattice (Set Theory)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)


### Global Model Checking Algorithm
> Recall: ↗ [Temporal Logic (时态逻辑) & Computation-Tree Logic (CTL*) Family](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family.md) & ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)%20&%20Computation-Tree%20Logic%20(CTL*)%20Family/Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)
> 
> 1. The ECTL syntax ("flattened") of CTL:
> $\phi ::= true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\bigcirc\phi ∣ \exists\Box\phi ∣ \exists\phi_1\cup\phi_2$
> **NOTE**: we focus on this grammar to reduce the number of algorithms, but dedicated algorithms for all CTL operators can be designed.
> 
> 2. Satisfaction sat & semantics of CTL: 
> We say that a transition system ($T$) satisfies a formula ($\phi$) if all its initial states ($s\in I$) satisfy the formula:
> - $T\models\phi \iff \forall s\in I. s \models\phi$
> - or, equivalently:
> 	- $T\models\phi \iff I\subseteq sat(\phi)$
> 
> ```
> sat(phi){
> 	// ...
> }
> modelCheck(TS, phi){
> 	return I.in(sat(phi))
> }
> ```

Now that we have our **main algorithm**:
```
// for each property phi, we want to check that TS satisfy this phi, i.e. the set of the initial states of TS is a subset of the satisfaction set of property phi:

modelCheck(TS, phi){
	return I.is_subset_of(sat(phi))
}
```

Hence, all we need to do is to implement function `sat(phi)` for ECTL:  $$\begin{aligned} 
\phi : := & true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ \exists\bigcirc\phi ∣ \exists\Box\phi ∣ \exists\phi_1\cup\phi_2 \\ 
& true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ EX(\phi) ∣ EG(\phi) ∣ E_{\phi_1}U_{\phi_2}
\end{aligned}$$
So, how to implement function $sat(phi)$ ?

First, we will see that $sat(phi)$ is recursive. For some easy cases, here is the algorithms:
```
// S stands for the whole set of states of TS

sat(true) = return S
sat(NOT phi) = S / sat(phi)
sat(phi1 OR phi2) = sat(phi1) OR sat(phi2)
sat(EX phi) = ...
sat(EG phi) = ...
sat(E(phi1 AND phi2)) = ...
```

Hence, invoking `sat(phi)` will recursively compute the satisfaction sets for all sub-formulas of `phi`. We can think of satisfaction sets being computed bottom-up on the parse tree of `phi`:

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2023.20.40.png)

We can apply **memoisation** (recall ↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)) to avoid recomputing twice the same satisfaction sets. How?
- Store results of expensive function calls in a table (hashing)
- Use the results whenever the call occurs again

We will see that for the first several case, implementation of $sat(\phi)$ is easy, which will be covered  in basic cases below; for EU and EG, however, they are not trivial to implement. 


### MC Algorithms For Basic Cases

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-13%20at%2023.31.29.png)

Assume function $Post(s) = 2^s$ represent all the immediate successors of state $S$.
$sat(\exists\bigcirc\phi) = sat(EX\phi) = \{s\in S | Post(s) \land sat(\phi) \neq \emptyset\}$

These cases can be easily implemented with a suitable representation of states and transitions, amenable for set operations (complement, union, etc.)

> NOTE: A popular approach is to use ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20(Binary%20Decision%20Diagrams)%20&%20ROBDD.md) to represent sets of states using boolean formulas (not covered in this course).

Now these are cases we covered so far:
```
// S stands for the whole set of states of TS

sat(true) = return S
sat(NOT phi) = S / sat(phi)
sat(phi1 OR phi2) = sat(phi1) OR sat(phi2)
sat(EX phi) = Post(s) AND sat(phi) != null
sat(EG phi) = ...
sat(E(phi1 AND phi2)) = ...
```

For the ECTL $\phi : := true ∣ p ∣ \neg\phi ∣ \phi_1\lor\phi_2 ∣ EX(\phi) ∣ EG(\phi) ∣ E_{\phi_1}U_{\phi_2}$, there are only $EG$ and $EU$ not implemented. However, we will see below that it's not trivial to implement them.


### Fixed-Point Computation for EU, and EG
#### EU
##### MC Algorithms For EF
##### MC Algorithms For EU
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-23%20at%2015.13.38.png)
(what if post(s) is always s from sat(phi1), i.e. the path is phi1.... to the infinity? )

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-23%20at%2015.20.38.png)

#### MC Algorithms For EG

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-23%20at%2015.21.42.png)
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-23%20at%2015.22.17.png)
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-23%20at%2015.22.30.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-23%20at%2015.22.51.png)
#### Overall Algorithm Complexity
The overall complexity is linear in the size of the transition system and the formula.

Idea:
- One call to sat(…) per sub-formula -> polynomial time in the size of the formula
- Every sat(…) algorithm uses polynomial time in the size of the transition system:
- Set operations used in the algorithms can be run in polynomial time.
- In sat(EG…), sat (E…U…) a state can only be once in the worklist W (once removed, it can’t be added)



## Ref
