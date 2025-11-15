# MC Algorithms For PCTL

[TOC]



## Res
### Related Topics
↗ [Probabilistic CTL (PCTL)](../../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Probabilistic%20CTL%20(PCTL).md)
↗ [Linear Algebra](../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Module-Like%20Algebraic%20Structure/Linear%20Algebra/Linear%20Algebra.md)


### Other Resources



## Intro
> ↗ [MC Algorithms For CTL](MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20CTL.md)


### Global Algorithm & Basic Cases
see ↗ [MC Algorithms For CTL](MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20CTL.md)


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
↗ [Linear Algebra](../../../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Module-Like%20Algebraic%20Structure/Linear%20Algebra/Linear%20Algebra.md)
↗ [Linear Equation Methods](../../../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Module-Like%20Algebraic%20Structure/Linear%20Algebra/Linear%20Equation%20Methods.md)



## Parameter Synthesis
Common (🤔) model checking problem: does a given model $M$ satisfy a given property $\Phi$? $$M \models \Phi \ ?$$
Alternatively, does a given model $M$ partially satisfy a given property $\Phi$ ? $$\exists x, y, z. \ M(x,y,z) \models \Phi \ ?$$
For example, in PCTL, this translates to when $P(s,s')$ is partially known in computing $Pr_s(\Diamond B)$:
$$\begin{aligned}& Pr_s(\Diamond B) = 1 & if(s\models B)\\
& Pr_s(\Diamond B) = 0 & if(s\models\neg\exists\Diamond B)\\
& Pr_s(\Diamond B) = \sum_{s'\in S} P(s,s')\cdot Pr_{s'}(\Diamond B) & \text{otherwise}
\end{aligned}$$

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2010.42.08.png)



## Expectation and Rewards
↗ [Markov Reward Model (MRM)](../../../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Markov%20Reward%20Model%20(MRM).md)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2010.43.53.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202025-11-07%20at%2010.44.09.png)



## Ref
