# Markov Decision Processes (MDP) & Stochastic Dynamic Program

[TOC]



## Res
### Related Topics
↗ [Decision Making & Game Theory](../../../../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Decision%20Making%20&%20Game%20Theory/Decision%20Making%20&%20Game%20Theory.md)
↗ [Discrete-Time Markov Chains (DTMC)](../Discrete-Time%20Markov%20Chains%20(DTMC)/Discrete-Time%20Markov%20Chains%20(DTMC).md)

↗ [Probabilistic CTL (PCTL)](../../../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Probabilistic%20CTL%20(PCTL).md)


### Other Resources
[FKNP11](https://www.prismmodelchecker.org/bibitem.php?key=FKNP11) (for MDPs)

https://en.wikipedia.org/wiki/Monty_Hall_problem
Monty Hall problem



## Intro
> 🔗 https://en.wikipedia.org/wiki/Markov_decision_process

**Markov decision process** (**MDP**), also called a [stochastic dynamic program](https://en.wikipedia.org/wiki/Stochastic_dynamic_programming "Stochastic dynamic programming") or stochastic control problem, is a model for [sequential decision making](https://en.wikipedia.org/wiki/Sequential_decision_making "Sequential decision making") when [outcomes](https://en.wikipedia.org/wiki/Outcome_\(probability\) "Outcome (probability)") are uncertain.

Originating from [operations research](https://en.wikipedia.org/wiki/Operations_research "Operations research") in the 1950s, MDPs have since gained recognition in a variety of fields, including [ecology](https://en.wikipedia.org/wiki/Ecology "Ecology"), [economics](https://en.wikipedia.org/wiki/Economics "Economics"), [healthcare](https://en.wikipedia.org/wiki/Health_care "Health care"), [telecommunications](https://en.wikipedia.org/wiki/Telecommunications "Telecommunications") and [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning "Reinforcement learning"). Reinforcement learning utilizes the MDP framework to model the interaction between a learning agent and its environment. In this framework, the interaction is characterized by states, actions, and rewards. The MDP framework is designed to provide a simplified representation of key elements of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") challenges. This modeling framework incorporates the understanding of [cause and effect](https://en.wikipedia.org/wiki/Causality "Causality"), the management of uncertainty and nondeterminism, and the pursuit of explicit goals.

The name comes from its connection to [Markov chains](https://en.wikipedia.org/wiki/Markov_chain "Markov chain"), a concept developed by the Russian mathematician [Andrey Markov](https://en.wikipedia.org/wiki/Andrey_Markov "Andrey Markov"). The "Markov" in "Markov decision process" refers to the underlying structure of [state transitions](https://en.wikipedia.org/wiki/Transition_system "Transition system") that still follow the [Markov property](https://en.wikipedia.org/wiki/Markov_property "Markov property"). The process is called a "decision process" because it involves making decisions that influence these state transitions, extending the concept of a Markov chain into the realm of decision-making under uncertainty.

![](../../../../../../../../Assets/Pics/Screenshot%202025-11-21%20at%2008.59.49.png)


### Formal Definition of MDP
A Markov Decision Process (MDP) is a tuple $$(S, P, ι, AP, L, Act)$$
such that:
- $S$ is a finite, a non-empty set of states
- $P : S → Act → S → [0,1]$ is a probabilistic transition function, i.e. such that for all states s and actions a it holds $\sum_{s'\in S}P(s,a,s')=1$
- $\iota:S\to[0,1]$ is an initial distribution, i.e. such that $\sum_{s\in S}\iota(s)=1$
- $AP$ is a set of atomic propositions
- $L$ is a labelling function
- $Act$ is a set of action labels


**Path in MDP**
A path in an MDP is a sequence of states and actions $$s_0, a_0, s_1, a_1, …$$
such that transitions can actually be followed $$P(s_i, a_i, s_{i+1}) > 0$$
As usual we can define the set of all paths $$Paths_s = \{s_0, a_0, s_1, a_1, … ∣ s = s_0 ∧ ∀ i ∈ ℕ . P(s_i, a_i, s_{i+1}) > 0\}$$
A path mixes non-deterministic and probabilistic choices, how to measure
probabilities of set of paths? with stategies.


**Strategy in MDP**
A memory-less strategy is a mapping of states into actions $$σ : S → Act$$
Every strategy induces a DTMC! $$(S, P^σ, ι, AP, L) \text{ where } P^σ(s, s′ ) = P(s, σ(s), s′ )$$
We can then re-use al lot of the DTMC machinery (probability measures for paths, PCTL model checking, etc) for various purposes.
For example, we can define the set of paths induced by a strategy
$$Paths^σ_s = \{s_0, a_0, s_1, a_1, … ∣ s = s_0 ∧ ∀i ∈ ℕ . P(s_i, a_i, s_{i+1}) > 0 ∧ a_i = σ(s_i)\}$$
And measure probabilities subsets of it

NOTE: strategies can be history-based but we focus on memory less here for simplicity since they are enough for our purpose here, i.e. measuring max and min probabilities.


**Measuring probabilities of paths**
In an MDP it does not make sense to ask for the probability of arbitrary paths $$Pr_s({π ∈ Paths(s) ∣ π ⊧ ψ})?$$
since we can’t measure probabilities in presence of non-determinism.
But we can ask about the best/worst possible strategies
$$min_{σ∈(S→Act)}{Pr_s({π ∈ Paths^σ(s) ∣ π ⊧ ψ})}?$$
$$max_{σ∈(S→Act)}{Pr_s({π ∈ Paths^σ(s) ∣ π ⊧ ψ})}?$$


### Optimization Objective


### Simulator Models
> 🔗 https://en.wikipedia.org/wiki/Markov_decision_process#Simulator_models

In many cases, it is difficult to represent the transition probability distributions, $P_{a}(s,s')$, explicitly. In such cases, a simulator can be used to model the MDP implicitly by providing samples from the transition distributions. One common form of implicit MDP model is an episodic environment simulator that can be started from an initial state and yields a subsequent state and reward every time it receives an action input. In this manner, trajectories of states, actions, and rewards, often called **_episodes_** may be produced.

Another form of simulator is a _generative model_, a single step simulator that can generate samples of the next state and reward given any state and action. (Note that this is a different meaning from the term [generative model](https://en.wikipedia.org/wiki/Generative_model "Generative model") in the context of [statistical classification](https://en.wikipedia.org/wiki/Statistical_classification "Statistical classification").) In [algorithms](https://en.wikipedia.org/wiki/Algorithms "Algorithms") that are expressed using [pseudocode](https://en.wikipedia.org/wiki/Pseudocode "Pseudocode"), $G$ is often used to represent a generative model. For example, the expression $s',r\gets G(s,a)$ might denote the action of sampling from the generative model where $s$ and $a$ are the current state and action, and $s′$ and $r$ are the new state and reward. Compared to an episodic simulator, a generative model has the advantage that it can yield data from any state, not only those encountered in a trajectory.

These model classes form a hierarchy of information content: an explicit model trivially yields a generative model through sampling from the distributions, and repeated application of a generative model yields an episodic simulator. In the opposite direction, it is only possible to learn approximate models through [regression](https://en.wikipedia.org/wiki/Regression_analysis "Regression analysis"). The type of model available for a particular MDP plays a significant role in determining which solution algorithms are appropriate. For example, the [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming "Dynamic programming") algorithms described in the next section require an explicit model, and [Monte Carlo tree search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search "Monte Carlo tree search") requires a generative model (or an episodic simulator that can be copied at any state), whereas most [reinforcement learning](https://en.wikipedia.org/wiki/Markov_decision_process#Reinforcement_learning) algorithms require only an episodic simulator.


### Extending of MDP
MDPs are 1-player games…we can can have multiple players!
Turn-based Stochastic Games (TSGs) as one possible extension.
PRISM Games supports PCTL model checking for TSGs (and more).

↗ [Decision Making & Game Theory](../../../../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Decision%20Making%20&%20Game%20Theory/Decision%20Making%20&%20Game%20Theory.md)



## MDP Algorithms
> 🔗 https://en.wikipedia.org/wiki/Markov_decision_process#Algorithms


### MDP Algorithm Basics
> ↗ [MC Algorithms For PCTL](../../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/MC%20Algorithms/MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20PCTL.md)

**Measuring probabilities of paths**
In an MDP it does not make sense to ask for the probability of arbitrary paths $$Pr_s({π ∈ Paths(s) ∣ π ⊧ ψ})?$$
since we can’t measure probabilities in presence of non-determinism.
But we can ask about the best/worst possible strategies
$$min_{σ∈(S→Act)}{Pr_s({π ∈ Paths^σ(s) ∣ π ⊧ ψ})}?$$
$$max_{σ∈(S→Act)}{Pr_s({π ∈ Paths^σ(s) ∣ π ⊧ ψ})}?$$


**Probabilistic Reachability**
How to compute min/max probabilities? There are too many strategies!
namely : $| Act |^{|S|}$
Fortunately, we can optimise locally, as we shall see.
As for DTMCs, we just need to solve a system of equations :)


**Computing $P_{min_{s}}(◊B)$ &  Computing $P_{max_{s}}(◊B)$**
The most basic idea here is to compute all possible strategy and choose the min /max posibility.


### Linear Program


### Value Iteration


### Policy /Strategy Iteration


### Modified Policy Iteration


### Gauss-Seidel



## Rewards in MDP



## MDP Extensions & Generalizations
> 🔗 https://en.wikipedia.org/wiki/Markov_decision_process#Extensions_and_generalizations


## Ref
