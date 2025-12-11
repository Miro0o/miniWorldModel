# Bisimulation

[TOC]



## Res
### Related Topics
↗ [Relation & Order Theory](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)
↗ [Equivalence Relation](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Equivalence%20Relation.md)


### Other Resources



## Intro
### Definition of Bisimulation Relation
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2000.46.01.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2000.46.28.png)

> 🔗 https://en.wikipedia.org/wiki/Bisimulation


### Bisimulation Equivalence & Bisimilarity
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2001.00.43.png)
#### Bisimulation Equivalence and Other Equivalence ...
##### 🆚 Trace Equivalence
- Bisimulation equivalence implies trace equivalence:
	- ![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2001.10.07.png)
- But the converse doesn't hold!
	- If T and T’ are trace equivalent (i.e. have the same traces) then it is not necessarily the case that T and T’ are bisimulation equivalent.
##### 🆚 CTL, CTL\* Equivalence
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2001.09.37.png)


### Properties of Bisimulation
**Bisimilarity**
Bisimilarity (largest bisimulation relation) is:
- reflexive
- symmetric
- transitive

Hence, bisimilarity is an ↗ [Equivalence Relation](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Equivalence%20Relation.md).


**Properties of bisimulations for single transition systems**
Let $R$ be a bisimulation for $T$. Then: 
- R is reflexive
- R is symmetric
- R is transitive

In other words, R is an ↗ [Equivalence Relation](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Equivalence%20Relation.md). Hence, we can work with the **equivalence classes of R**, as a more compact way of representing R, i.e. as a partition of S with blocks being equivalence classes.



## Computing Bisimulation of Single TS and Reducing Systems
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2001.20.03.png)


### Partition Refinement Algorithm
> ↗ [Lattice (Set Theory)](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Set%20Theory)/Lattice%20(Set%20Theory).md)

Rough sketch of the main idea:
**Step 1:**
- Start optimistically guessing that **all states can be put together in the same equivalence class**. This gives you one single partition of the states.

**Step 2:**
Split the equivalence classes into one block for each different way of labelling states (i.e. each different subset of AP).

**Step 3:**
For all blocks B in the current partition:
- check if the states in B satisfy condition (2) of bisimulation, i.e. that states in the same block can mimic each other. If that is not true, split B to make the condition hold and restart the loop (step 3).

If you reach this point the **current partition** is the **bisimilarity relation**!

Now in pseudo-code:
``` js
// Start by creating a partition where each block corresponds
// to a subset of AP
T:= { { s in S s.t. L(s) = K } | K is a subset of AP }

// Partition refinement loop
do
	fixpoint := true
	// Try to use each block to split other blocks
	for each block B in T do
		// Blocks to be potentially split
		for each block B’ in T
			for each pair of states s, s’ from B’
				// Check if condition (2) of bisimulation is violated
				if s has a transition to B and s’ does not have a transition to B then
				B0 := states in B’ that have a transition to B
				B1 := states in B’ that don’t have a transition to B
				remove B’ from T
				add B0,B1 to T
				fixpoint := false
until fixpoint // break the loop if you reach a fix point
```

> NOTE: efficient algorithms exist, which follow this idea but are smart in the refinement loop, to avoid duplicate checks.

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2013.43.46.png)


### Bisimulation Quotient (R-Quotient) & Minimization Transition System
Let $T = (S,→,I,AP,L)$ be a transition system (with no actions).

Assume you have bisimulation $R$ (typically $~$) for $T$. You can now exploit $R$ to compute the **R-quotient** of $T$ as a new transition system $T/R = (S’,→,I’,AP,L’)$.

The set of states S’ is the set of equivalence classes $$S' = S/R$$
The labelling function $L’$ just takes the label of any state in the equivalence class $$L' ([s]) = L(s)$$
Transitions are lifted to equivalence classes $$\frac{s \to s'}{[s]\to'[s]}$$
The set of initial states is the set of equivalence classes with at least one initial state $$I'
= \{[s] ∣ s' \in I \text{ and } s' \in [s]\}$$
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2013.44.42.png)


More examples: 
- Idea on **partition refinement for bisimilarity checking**:
	- Consider T1 and T2 as one transition system
	- Run partition refinement. If there is one isolated block with states from one TS only, then **not bisimilar!**
- ![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2013.50.40.png)
- ![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2013.50.49.png)
- ![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2013.50.59.png)
- ![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2013.51.10.png)



## Ref
[（三）模态逻辑 Modal Logic 互模拟 bisimulation - 许阳的文章 - 知乎]: https://zhuanlan.zhihu.com/p/346686091

bisimilarity的一些特点
1. 某个模型和其自身的bisimulation，不是等价关系（也就是说A和B有Bisimulation关系，B和C也有，不意味着A和C也有；自己和自己也不一定有；... 就是由于以模型为单元，粒度太粗bisimulation的定义十分随意），Bisimulation不满足自反、对称、传递）。它甚至可以考察某个模型的某个，和这个模型另一个局部的关系，完全和等价关系不沾边。  
2. （某两个模型间的）bisimulation对并（union）封闭，所有bisimulations的union，是greatest bisimulation.【相当于把有关联的分支不断叠加起来】（注意，这一点是很重要的：我们探讨两个模型的bisimulation时，是探讨最大bisimulation的一个子集）  
3. Bisimilarity 是点模型间的等价关系。【分别证明自反，对称，传递。该证明比较简单，设计定义Z的方式即可】  
4. Bisimilarity within models  可以被看作最大bisimulation（任意两个点世界若可以有bisimilarity关系，就放入这个集合中）. 如果（  ），它可以被视为M上的等价关系。  

Bisimulation是模型之间的关系。但In practice，我们经常用**bisimulation talk about bisimilarity（即点模型间的关系）.**
两个模型间具有bisimulation，不意味着任意模型中任意可能世界，在另一个模型中都有对应的点。（对点世界的操作，保持“bisimularity”，意味着之前有关系、之后还是有，之前没有、之后也没有）
