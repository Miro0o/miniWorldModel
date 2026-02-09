# Reinforcement Learning (RL) & Sequential Decision Making

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)
↗ [Mathematical Modeling & Real World Problem Solving](../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
↗ [Cybernetics & Control Theory](../../../../../🧮%20Mathematics/Cybernetics%20&%20Control%20Theory/Cybernetics%20&%20Control%20Theory.md)

↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
- ↗ [Markov Process & Markov Chain (MC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md)
- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)

↗ [Decision Making & Game Theory](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Decision%20Making%20&%20Game%20Theory/Decision%20Making%20&%20Game%20Theory.md)

↗ [AI Embodiment & World Model (WM)](../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/🤔%20AI%20Embodiment%20&%20World%20Model%20(WM)/AI%20Embodiment%20&%20World%20Model%20(WM).md)


### Learning Resources
🏫 [CS285 Deep Reinforcement Learning](../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/UC%20Berkeley/CS285%20Deep%20Reinforcement%20Learning/CS285%20Deep%20Reinforcement%20Learning.md)

https://spinningup.openai.com/en/latest/user/introduction.html
Welcome to Spinning Up in Deep RL! This is an educational resource produced by OpenAI that makes it easier to learn about deep reinforcement learning (deep RL).

👍 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265
- In later chapters, we will describe methods for learning the best policy to maximize $V_π(s0) = E [G_0|s_0, π]$.
- More details on RL can be found in textbooks such as [SB18; KWW22; Pla22; Li23; Sze10], and reviews such as [Aru+17; FL+18; Li18; Wen18a; ID19]. For a more theoretical treatment, see e.g., [Aga+22a; MMT24; FR23]. For details on how RL relates to control theory, see e.g., [Son98; Rec19; Ber19; Mey22]; for connections to operations research, see [Pow22]; for connections to finance, see [RJ22].

👍 👍【【强化学习的数学原理】课程：从零开始到透彻理解（完结）】 https://www.bilibili.com/video/BV1sd4y167NS/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
教材PDF+PPT+代码网址： 
- Mathematical Foundations of Reinforcement Learning | Shiyu Zhao
1. 【Github】：
	1. https://github.com/MathFoundationRL/Book-Mathmatical-Foundation-of-Reinforcement-Learning
2. 【百度网盘】：
	1. https://pan.baidu.com/s/1kNxM8sl8FUWV6SiiGIep3Q?pwd=ghx83
3. 【Onedrive】：
	1. https://westlakeu-my.sharepoint.com/:f:/g/personal/lyujialing_westlake_edu_cn/EgN1-0jOU61BnaTkG7zJ9nsBUdjKEi6hNrdT5n8mp-qn3g?e=3MbtmD 
4. 其中GitHub的材料是最新的，有条件的推荐访问GitHub
字幕制作者（中文（中国））：[西湖大学WindyLab](https://space.bilibili.com/2044042934)

https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf
Reinforcement Learning - An Introduction
Richard S. Sutton and Andrew G. Barto


### Other Resources
For a list of real-world applications of RL, see e.g., https://bit.ly/42V7dIJ from Csaba szepesvari (2024), https://bit.ly/3EMMYCW from Vitaly Kurin (2022), and https://github.com/montrealrobotics/DeepRLInTheWorld, which seems to be kept up to date.



## Intro
> 📖 Python Machine Learning, 3rd Ed. to be published December 12th, 2019
> https://github.com/rasbt/python-machine-learning-book-3rd-edition

In **reinforcement learning**, the goal is to develop a system (**agent**) that improves its performance based on **interactions with the environment**. Since the information about the current state of the environment typically also includes a so-called **reward signal**, we can think of reinforcement learning as a field related to supervised learning. However, in reinforcement learning, this feedback is not the correct ground truth label or value, but a measure of how well the action was measured by a reward function. Through its interaction with the environment, an agent can then use reinforcement learning to learn a series of actions that maximizes this reward via an exploratory trial-and-error approach or deliberative planning.

![Screenshot 2023-01-28 at 12.39.03 PM](../../../../../../../Assets/Pics/Screenshot%202023-01-28%20at%2012.39.03%20PM.png)

> 📖 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265

**Reinforcement learning** or **RL** is a class of methods for solving various kinds of **sequential decision making** tasks. In such tasks, we want to design an **agent** that interacts with an **external environment**. The agent maintains an internal state $z_t$, which it passes to its **policy $\pi$** to choose an **action** $a_t = \pi(z_t)$. The environment responds by sending back an **observation** $o_{t+1}$, which the agent uses to update its internal state using the **state-update (SU) function** $z_{t+1} = SU (z_t, a_t, o_{t+1})$. See Figure 1.1 for an illustration. 

To simplify things, we often assume that the environment is also a ↗ [Markov Process & Markov Chain (MC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md), which has internal world state $w_t$, from which the observations $o_t$ are derived. (This is called a POMDP — see Section 1.2.1). We often simplify things even more by assuming that the observation $o_t$ reveals the hidden environment state; in this case, we denote the internal agent state and external environment state by the same letter, namely $s_t = o_t = w_t = z_t$. (This is called an ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md) — see Section 1.2.2). We discuss these assumptions in more detail in Section 1.1.3. 

RL is more complicated than **supervised learning** (e.g., training a classifier) or **self-supervised learning** (e.g., training a language model), because this framework is very general: there are many assumptions we can make about the environment and its observations $o_t$, and many choices we can make about the form the agent’s internal state $z_t$ and policy $\pi$, as well the ways to update these objects as we see more data. We will study many different combinations in the rest of this document. The right choice ultimately depends on which real-world application you are interested in solving.

![](../../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2011.25.44.png)


### Reinforcement Learning & Control Theory
#reinforcement_learning #control_theory

> [!links]
> [Cybernetics & Control Theory](../../../../../🧮%20Mathematics/Cybernetics%20&%20Control%20Theory/Cybernetics%20&%20Control%20Theory.md)



## Mathematical Models of The RL Problem
> [!links]
> ↗ [Mathematical Modeling & Real World Problem Solving](../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
> ↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"
> 
> ↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
> ↗ [Markov Process & Markov Chain (MC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md)
> - ↗ [Discrete-Time Markov Chains (DTMC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Discrete-Time%20Markov%20Chains%20(DTMC)/Discrete-Time%20Markov%20Chains%20(DTMC).md)
> - ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)
> - ↗ [Markov Reward Model (MRM)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Reward%20Model%20(MRM).md)
>
> ↗ [Linear Algebra & Module-Like Algebraic Structure](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure.md)
> ↗ [Vector & Vector Space](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure/Vector%20&%20Vector%20Space/Vector%20&%20Vector%20Space.md)


### 🎯 Classical Markovian-Based RL
#### Objectives & Recursive Approach
> [!links]
> ↗ [Function & Mapping of Set](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> ↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md) "least fixed point theorem"
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
##### Bellman Equation
> [!links]
> ↗ [Bellman-Ford Algorithm](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Graphs%20(and%20Trees)%20Problems/Shortest%20Path%20Problem/Single-Source%20Shortest%20Path%20(SSSP)/Bellman-Ford%20Algorithm.md)
> ↗ [Dynamic Programming (DP)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/COP%20(Convex%20Optimization%20Programming)/Dynamic%20Programming%20(DP)/Dynamic%20Programming%20(DP).md)

> 🔗 https://en.wikipedia.org/wiki/Bellman_equation
##### Bellman Optimal Equation (BOE)
> [!links]
> ↗ [Function & Mapping of Set](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> fixed point & contraction mapping theorem


### 🎯 Other RL Models & Algorithms
↗ [Distributional RL](Distributional%20RL/Distributional%20RL.md)
↗ [Hierarchical RL (HRL)](Hierarchical%20RL%20(HRL)/Hierarchical%20RL%20(HRL).md)
↗ [Imitation Learning (IL) & Learning from Demonstration (LfD)](Imitation%20Learning%20(IL)%20&%20Learning%20from%20Demonstration%20(LfD)/Imitation%20Learning%20(IL)%20&%20Learning%20from%20Demonstration%20(LfD).md)
↗ [Intrinsically Motivated RL (Unsupervised RL)](Intrinsically%20Motivated%20RL%20(Unsupervised%20RL)/Intrinsically%20Motivated%20RL%20(Unsupervised%20RL).md)
↗ [Multi-Agent RL (MARL)](Multi-Agent%20RL%20(MARL)/Multi-Agent%20RL%20(MARL).md)



## Reinforcement Learning Algorithms (for Markovian-Based Model)
### 🎯 Model-Based RL (MBRL)
> [!links]
> ↗ [Mathematical Modeling & Real World Problem Solving](../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
> ↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"
> 
> ↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)


#### Value Iteration

#### Policy Iteration

#### Truncated Policy Iteration


### 🎯 Model-Free RL
↗ [Statistics (Data) Analyzing Methods & Statistical Model](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏒%20Statistics%20(Data)%20Analyzing%20Methods%20&%20Statistical%20Model/Statistics%20(Data)%20Analyzing%20Methods%20&%20Statistical%20Model.md)
- ↗ [Monte Carlo Methods](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏒%20Statistics%20(Data)%20Analyzing%20Methods%20&%20Statistical%20Model/Monte%20Carlo%20Methods/Monte%20Carlo%20Methods.md)
↗ [Monte Carlo Based RL](📌%20RL%20Basics%20-%20Markovian%20Based%20RL/Value-Based%20RL/Monte%20Carlo%20Based%20RL.md)
#### Non-Incremental RL

#### Incremental RL
##### Stochastic Approximation (SA)

##### Temporal-Difference Learning

#### Function Representations of Incremental RL
##### Value Function Approximation

##### Policy Function Approximation (Policy Gradient)


### 🎯 Actor-Critic Methods



## Ref
[Make Post Train Solid Again - ybq的文章 - 知乎]: https://zhuanlan.zhihu.com/p/1995265459285694156
