# Discrete-Time Markov Chains (DTMC)

[TOC]



## Res
### Related Topics
↗ [PRISM](../../../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/🤼%20Model%20Checker/PRISM.md)
↗ [Probabilistic CTL (PCTL)](../../../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Probabilistic%20CTL%20(PCTL).md)


### Other Resources
📂 https://www.prismmodelchecker.org/tutorial/
This tutorial will introduce you to the PRISM tool using a selection of example models.
The tutorial comprises several parts. If you are new to the tool, we recommend that you start by working through the first part (Knuth's die algorithm) to see the basics. After that, you should be able to look at the remaining parts in any order, depending in which models or applications you are interested in. If anything is unclear, the best place to look for answers is the [PRISM manual](https://www.prismmodelchecker.org/manual/).
- **[Knuth's die algorithm](https://www.prismmodelchecker.org/tutorial/die.php)**: This uses a simple **discrete-time Markov chain (DTMC)** example - a randomised algorithm for modelling a 6-sided die with a fair coin due to Don Knuth. It introduces the basics of the PRISM modelling language and the PRISM tool.  
- **[Herman's self-stabilisation algorithm](https://www.prismmodelchecker.org/tutorial/herman.php)**: This uses another simple randomised algorithm: a self-stabilisation algorithm due to Herman. This is also modelled as a **DTMC** and introduces some additional features of the **PRISM modelling** and property languages. 
- **[EGL contract signing protocol](https://www.prismmodelchecker.org/tutorial/egl.php)**: This uses a case study from the field of **computer security**, modelled as a **DTMC**: the EGL contract signing protocol.  


Knuth, D. (1976). The complexity of nonuniform random number generation. _Algorithm and Complexity, New Directions and Results_.

[KNP07a](https://www.prismmodelchecker.org/bibitem.php?key=KNP07a) (for DTMCs and CTMCs)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Discrete-time_Markov_chain#Stationary_distributions

In [probability](https://en.wikipedia.org/wiki/Probability "Probability"), a **discrete-time Markov chain** (**DTMC**) is a sequence of random variables, known as a [stochastic process](https://en.wikipedia.org/wiki/Stochastic_process "Stochastic process"), in which the value of the next variable depends only on the value of the current variable, and not any variables in the past. For instance, a machine may have two states, _A_ and _E_. When it is in state _A_, there is a 40% chance of it moving to state _E_ and a 60% chance of it remaining in state _A_. When it is in state _E_, there is a 70% chance of it moving to _A_ and a 30% chance of it staying in _E_. The sequence of states of the machine is a Markov chain. If we denote the chain by $X_{0},X_{1},X_{2},...$ then $X_0$ is the state which the machine starts in and $X_{10}$ is the [random variable](https://en.wikipedia.org/wiki/Random_variable "Random variable") describing its state after 10 transitions. The process continues forever, indexed by the [natural numbers](https://en.wikipedia.org/wiki/Natural_numbers "Natural numbers").

An example of a stochastic process which is not a Markov chain is the model of a machine which has states _A_ and _E_ and moves to _A_ from either state with 50% chance if it has ever visited _A_ before, and 20% chance if it has never visited _A_ before (leaving a 50% or 80% chance that the machine moves to _E_). This is because the behavior of the machine depends on the whole history—if the machine is in _E_, it may have a 50% or 20% chance of moving to _A_, depending on its past values. Hence, it does not have the [Markov property](https://en.wikipedia.org/wiki/Markov_property "Markov property").

A Markov chain can be described by a [stochastic matrix](https://en.wikipedia.org/wiki/Stochastic_matrix "Stochastic matrix"), which lists the probabilities of moving to each state from any individual state. From this matrix, the probability of being in a particular state _n_ steps in the future can be calculated. A Markov chain's state space can be partitioned into communicating classes that describe which states are reachable from each other (in one transition or in many). Each state can be described as transient or recurrent, depending on the probability of the chain ever returning to that state. Markov chains can have properties including periodicity, reversibility and stationarity. A [continuous-time Markov chain](https://en.wikipedia.org/wiki/Continuous-time_Markov_chain "Continuous-time Markov chain") is like a discrete-time Markov chain, but it moves states continuously through time rather than as discrete time steps. Other stochastic processes can satisfy the Markov property, the property that past behavior does not affect the process, only the present state.


### Formal Definition of DMTC
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2012.31.51.png)
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2012.35.22.png)
#### Transient Distributions
Where is the Markov chain **after 1/2/3/…/n steps**?
**Answer**: in the transient distribution $\theta_n$

Two equivalent definitions / 2 ways to compute :
1. $\theta_n = \iota \cdot P^n$
	1. Multiply the initial distribution vector by the transition probability matrix 𝑃𝑛 = make n-steps
2. $\begin{aligned} & \theta_0 = \iota \\ & \theta_{n+1} = \theta_n\cdot P\end{aligned}$ (Recursively)
	1. after 0-steps we’re at the initial distribution;
	2. after (n+1)-steps we’re at where we were after n-steps multiplied by the transition matrix
	3. ![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2013.14.42.png)
#### Steady State Distribution
**Where is the Markov chain in the long term?** (where does it end?)
**Answer**: in the limit of $\theta_n$

Two ways to compute $\pi = 𝑙𝑖𝑚𝑖𝑡_{𝑛\to\infty}\theta_n$:
1. By iterative approximations -->  compute lots of transient distributions
2. As the (unique) stationary distribution, i.e. a distribution that satisfies $\pi = \pi \cdot 𝑃$ -->  **a “fixpoint” condition**
	1. ![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2013.33.26.png)
	2. $\pi = \pi \cdot 𝑃 \Leftrightarrow \pi - \pi \cdot 𝑃 = 0 \Leftrightarrow \pi(I - P) = 0$
		1. $lim_{n\to\infty}\theta_n =lim_{n\to\infty}(\iota \cdot P^n) = \pi$
		2. $det(\pi) = det(lim_{n\to\infty}(\iota \cdot P^n)) = 0 \Leftrightarrow lim_{n\to\infty}(det(\iota \cdot P^n))=0$ (?)
		3. ↗ [Eigenvalues, Eigenvectors, and Invariant Subspaces](../../../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure/Eigenvalues,%20Eigenvectors,%20and%20Invariant%20Subspaces/Eigenvalues,%20Eigenvectors,%20and%20Invariant%20Subspaces.md)

It's not always that the limit $\pi = 𝑙𝑖𝑚𝑖𝑡_{𝑛\to\infty}\theta_n$ is well defined and can be computed as the (unique) stationary distribution $\pi = \pi \cdot 𝑃$:
There are **cases** where :
- the limit is simply not well-defined;
- the limit depends on the initial distribution;
- the stationary distribution is not unique (the equation has more than 1 solution).

Examples:
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2013.24.52.png)
- 💡 Use ↗ [PRISM](../../../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/🤼%20Model%20Checker/PRISM.md) or ↗ [Z3 Theorem Prover](../../../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md) to compute the steady state distribution of fourth example: 
	- ![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2013.35.59.png)


For the limit $\pi = 𝑙𝑖𝑚𝑖𝑡_{𝑛\to\infty}\theta_𝑛$ to be computed as the (unique) stationary distribution $\pi = \pi \cdot 𝑃$ of the DTMC $T$, there exist **sufficient conditions** ($\implies$):
1. $T$ must be **aperiodic**
	1. $T$ is aperiodic if the GCD of all cycle lengths is 1—check stats.stackexchange.com/a/48861
2. $T$ must be **strongly connected**.

If (1) and (2) do not hold: pay attention to the computation of steady states, because it may not mean what you have in mind.
If (1) and (2) hold, we can compute the limit precisely and independently of the initial distribution.


**Where does the probability mass go?**
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-25%20at%2013.23.04.png)
Bottom Strongly Connected Components are SCCs without outgoing edges. In the long-term, the probability mass resides in the BSCCs. The initial distribution determines how much goes to each BSCC. Sometimes the entire DTMC forms one BSCC—it is then called **ergodic** or **irreducible**.


### Reachability Probabilities
#### Prob. of Reaching Single State
$P_s=\Sigma_{t\in pre(s)} P_t\times Trans(t,s)$

> Knuth, D. (1976). The complexity of nonuniform random number generation. _Algorithm and Complexity, New Directions and Results_.

Simulating a 4-faced dice with a coin:
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2013.39.35.png)

Simulating a 6-faced dice with a coin:
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2013.47.50.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2013.39.52.png)
#### Prob. of Reaching Sets of Paths
1. probability measures
2. describe paths (events) in ↗ [Probabilistic CTL (PCTL)](../../../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Probabilistic%20CTL%20(PCTL).md)


### Probability Measures (Prob. of Reaching Sets of Paths)
#### Definition of Probability Measure
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2014.01.06.png)
#### Cylinder Set & Probability Measure
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2014.02.05.png)

![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2014.02.41.png)
![](../../../../../../../../Assets/Pics/Screenshot%202025-10-14%20at%2014.02.53.png)


### DTMC with Rewards /Costs
↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)

↗ [MC Algorithms For PCTL](../../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20and%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems/🧳%20(Formal)%20Model%20Checking/MC%20Algorithms/MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20PCTL.md)
↗ [Markov Reward Model (MRM)](../Markov%20Reward%20Model%20(MRM).md)

↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)



## Ref
