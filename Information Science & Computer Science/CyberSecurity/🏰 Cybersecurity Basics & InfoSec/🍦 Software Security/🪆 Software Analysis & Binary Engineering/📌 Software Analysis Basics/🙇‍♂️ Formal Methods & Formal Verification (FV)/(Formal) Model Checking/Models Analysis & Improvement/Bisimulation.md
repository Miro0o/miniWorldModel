# Bisimulation

[TOC]



## Res
### Related Topics
↗ [Relation & Order Theory](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)
↗ [Equivalence Relation](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Equivalence%20Relation.md)


### Other Resources



## Intro
### Definition of Bisimulation Relation
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2000.46.01.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2000.46.28.png)


### Bisimulation Equivalence & Bisimularity
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

Hence, bisimilarity is an ↗ [Equivalence Relation](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Equivalence%20Relation.md).


**Properties of bisimulations for single transition systems**
Let $R$ be a bisimulation for $T$. Then: 
- R is reflexive
- R is symmetric
- R is transitive

In other words, R is an ↗ [Equivalence Relation](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Equivalence%20Relation.md). Hence, we can work with the **equivalence classes of R**, as a more compact way of representing R, i.e. as a partition of S with blocks being equivalence classes.



## Computing Bisimulation and Reducing Systems
![](../../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2001.20.03.png)



## Ref
