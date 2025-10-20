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

> 🔗 https://en.wikipedia.org/wiki/Bisimulation



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


### Partition Refinement Algorithm


### Minimization & Bisimulation Quotient (R-Quotient)



## Ref
[（三）模态逻辑 Modal Logic 互模拟 bisimulation - 许阳的文章 - 知乎]: https://zhuanlan.zhihu.com/p/346686091

bisimilarity的一些特点
1. 某个模型和其自身的bisimulation，不是等价关系（也就是说A和B有Bisimulation关系，B和C也有，不意味着A和C也有；自己和自己也不一定有；... 就是由于以模型为单元，粒度太粗bisimulation的定义十分随意），Bisimulation不满足自反、对称、传递）。它甚至可以考察某个模型的某个，和这个模型另一个局部的关系，完全和等价关系不沾边。  
2. （某两个模型间的）bisimulation对并（union）封闭，所有bisimulations的union，是greatest bisimulation.【相当于把有关联的分支不断叠加起来】（注意，这一点是很重要的：我们探讨两个模型的bisimulation时，是探讨最大bisimulation的一个子集）  
3. Bisimilarity 是点模型间的等价关系。【分别证明自反，对称，传递。该证明比较简单，设计定义Z的方式即可】  
4. Bisimilarity within models  可以被看作最大bisimulation（任意两个点世界若可以有bisimilarity关系，就放入这个集合中）. 如果（  ），它可以被视为M上的等价关系。  

Bisimulation是模型之间的关系。但In practice，我们经常用**bisimulation talk about bisimilarity（即点模型间的关系）.**
两个模型间具有bisimulation，不意味着任意模型中任意可能世界，在另一个模型中都有对应的点。（对点世界的操作，保持“bisimularity”，意味着之前有关系、之后还是有，之前没有、之后也没有）
