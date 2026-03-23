# MC Algorithms For PCTL

[TOC]



## Res
### Related Topics
↗ [Probabilistic CTL (PCTL)](../../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Probabilistic%20CTL%20(PCTL).md)
↗ [Linear Algebra](../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Module-Like%20Algebraic%20Structure/Linear%20Algebra/Linear%20Algebra.md)

↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)


### Other Resources



## Intro
> [!links]
> ↗ [MC Algorithms For CTL](MC%20Algorithms%20For%20CTL.md)
> ↗ [Probabilistic CTL (PCTL)](../../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Probabilistic%20CTL%20(PCTL).md)


### Global Algorithm & Basic Cases
see ↗ [MC Algorithms For CTL /Global Model Checking Algorithm](MC%20Algorithms%20For%20CTL.md#Global%20Model%20Checking%20Algorithm)
1. CTL -> ECTL
2. Phi (property) -> AST of ECTL
	- ↗ [AST & CST (Abstract & Contrete Syntax Tree)](../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/AST%20&%20CST%20(Abstract%20&%20Contrete%20Syntax%20Tree).md)
3.  ECTL model checking for the sat()
4. initial states in sat()?

In below algorithms, the core idea is implementation via fixed point & recursive function: 
- ↗ [Function & Mapping of Set](../../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
- ↗ [Lattice (Order Theory)](../../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)
- ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)


### Model Checking $\mathbb{P}(X\phi)$
Recall the semantic definition: $$Pr_s(X\phi)=\sum_{s'\in\phi}P(s,s')$$
We can trivially perform such computation algorithmically.

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.48.16.png)


### Model Checking $\mathbb{P}(F^{\le n}\phi)$
![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.52.02.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.52.32.png)


### Model Checking $\mathbb{P}(F\phi)$
![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.53.35.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.54.03.png)
![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.54.20.png)


### Model Checking $\mathbb{P}(\phi_1U^{\le n}\phi_2)$
![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.58.05.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.58.53.png)


### Model Checking $\mathbb{P}(\phi_1U\phi_2)$
![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.59.24.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2016.59.37.png)


### Algorithms for Solving System of Equations 🤔
↗ [Linear Algebra & Module-Like Algebraic Structure](../../../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure.md)
↗ [Linear Equation Methods](../../../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure/Linear%20Equation%20Methods.md)


### Examples of Basic PCTL MC Algorithms



## Parameter Synthesis
Common (🤔) model checking problem: does a given model $M$ satisfy a given property $\Phi$? $$M \models \Phi \ ?$$
Alternatively, does a given model $M$ **partially** satisfy a given property $\Phi$ ? $$\exists x, y, z. \ M(x,y,z) \models \Phi \ ?$$
For example, in PCTL, this translates to when $P(s,s')$ is partially known in computing $Pr_s(\Diamond B)$:
$$\begin{aligned}& Pr_s(\Diamond B) = 1 & if(s\models B)\\
& Pr_s(\Diamond B) = 0 & if(s\models\neg\exists\Diamond B)\\
& Pr_s(\Diamond B) = \sum_{s'\in S} P(s,s')\cdot Pr_{s'}(\Diamond B) & \text{otherwise}
\end{aligned}$$

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2010.42.08.png)



## Expectation and Rewards
> [!links]
> ↗ [Markov Reward Model (MRM)](../../../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Reward%20Model%20(MRM).md)
> ↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)

> [!TIP]
> Cost/rewards in PRISM
> - See https://www.prismmodelchecker.org/manual/ThePRISMLanguage/CostsAndRewards and: https://www.prismmodelchecker.org/manual/PropertySpecification/Reward-basedProperties
> 
> For a deeper treatment of cost/rewards in probabilistic systems you can check our textbook (principles of model checking, section 10.6) or the references indicated in the PRISM manual.
> For examples, you can check the PRISM models in the PRISM distribution under /prism-models/

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-21%20at%2008.52.32.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2010.43.53.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2010.44.09.png)



## Ref
