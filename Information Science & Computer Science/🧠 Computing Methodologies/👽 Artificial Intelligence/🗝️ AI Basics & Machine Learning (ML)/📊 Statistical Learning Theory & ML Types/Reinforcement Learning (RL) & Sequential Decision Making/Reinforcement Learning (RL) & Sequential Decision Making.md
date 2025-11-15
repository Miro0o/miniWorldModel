# Reinforcement Learning (RL) & Sequential Decision Making

[TOC]



## Res
### Related Topics
↗ [Probabilistic Models & Stochastic Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Probabilistic%20Models%20&%20Stochastic%20Process.md)
- ↗ [Markov Chains (MC) & Markov Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process.md)


### Learning Resources
https://spinningup.openai.com/en/latest/user/introduction.html
Welcome to Spinning Up in Deep RL! This is an educational resource produced by OpenAI that makes it easier to learn about deep reinforcement learning (deep RL).

👍 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265



## Intro
> 📖 Python Machine Learning, 3rd Ed. to be published December 12th, 2019
> https://github.com/rasbt/python-machine-learning-book-3rd-edition

In **reinforcement learning**, the goal is to develop a system (**agent**) that improves its performance based on **interactions with the environment**. Since the information about the current state of the environment typically also includes a so-called **reward signal**, we can think of reinforcement learning as a field related to supervised learning. However, in reinforcement learning, this feedback is not the correct ground truth label or value, but a measure of how well the action was measured by a reward function. Through its interaction with the environment, an agent can then use reinforcement learning to learn a series of actions that maximizes this reward via an exploratory trial-and-error approach or deliberative planning.

![Screenshot 2023-01-28 at 12.39.03 PM](../../../../../../../Assets/Pics/Screenshot%202023-01-28%20at%2012.39.03%20PM.png)

> 📖 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265

**Reinforcement learning** or **RL** is a class of methods for solving various kinds of **sequential decision making** tasks. In such tasks, we want to design an **agent** that interacts with an **external environment**. The agent maintains an internal state $z_t$, which it passes to its **policy $\pi$** to choose an **action** $a_t = \pi(z_t)$. The environment responds by sending back an **observation** $o_{t+1}$, which the agent uses to update its internal state using the **state-update (SU) function** $z_{t+1} = SU (z_t, a_t, o_{t+1})$. See Figure 1.1 for an illustration. 

To simplify things, we often assume that the environment is also a Markovian process, which has internal world state $w_t$, from which the observations $o_t$ are derived. (This is called a POMDP — see Section 1.2.1). We often simplify things even more by assuming that the observation $o_t$ reveals the hidden environment state; in this case, we denote the internal agent state and external environment state by the same letter, namely $s_t = o_t = w_t = z_t$. (This is called an ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md) — see Section 1.2.2). We discuss these assumptions in more detail in Section 1.1.3. 

RL is more complicated than **supervised learning** (e.g., training a classifier) or **self-supervised learning** (e.g., training a language model), because this framework is very general: there are many assumptions we can make about the environment and its observations $o_t$, and many choices we can make about the form the agent’s internal state $z_t$ and policy $\pi$, as well the ways to update these objects as we see more data. We will study many different combinations in the rest of this document. The right choice ultimately depends on which real-world application you are interested in solving.

![](../../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2011.25.44.png)

For a list of real-world applications of RL, see e.g., https://bit.ly/42V7dIJ from Csaba szepesvari (2024), https://bit.ly/3EMMYCW from Vitaly Kurin (2022), and https://github.com/montrealrobotics/DeepRLInTheWorld, which seems to be kept up to date.



## Ref

