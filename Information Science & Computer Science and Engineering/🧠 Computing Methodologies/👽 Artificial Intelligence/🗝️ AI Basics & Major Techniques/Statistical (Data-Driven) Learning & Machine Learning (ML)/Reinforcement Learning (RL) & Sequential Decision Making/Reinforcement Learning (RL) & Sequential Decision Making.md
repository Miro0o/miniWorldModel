# Reinforcement Learning (RL) & Sequential Decision Making

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)
↗ [Mathematical Modeling & Abstraction](../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
↗ [Cybernetics & Control Theory](../../../../../🧮%20Mathematics/Cybernetics%20&%20Control%20Theory/Cybernetics%20&%20Control%20Theory.md)

↗ [Sequential Decision-Making](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/👩🏻‍⚖️%20Rational%20Decision-Making%20Problems%20&%20Theory/Sequential%20Decision-Making/Sequential%20Decision-Making.md)
↗ [Game Theory & Multi-Agent Decision-Making](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/👩🏻‍⚖️%20Rational%20Decision-Making%20Problems%20&%20Theory/Game%20Theory%20&%20Multi-Agent%20Decision-Making/Game%20Theory%20&%20Multi-Agent%20Decision-Making.md)
↗ [Uncertain Knowledge & Probabilistic Reasoning (Decision Making)](../../🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Uncertain%20Knowledge%20&%20Probabilistic%20Reasoning%20(Decision%20Making).md)

↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
- ↗ [Markov Process & Markov Chain (MC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md)
- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)

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
字幕制作者（中文（中国））：
- [西湖大学WindyLab](https://space.bilibili.com/2044042934)
课程 /书籍地图：
- ![](../../../../../../Assets/Pics/Pasted%20image%2020260724173045.png)
Third-party code and materials
- **Code**
	- _Python:_
		- [https://github.com/AstonDky/Math_in_RL_Visual](https://github.com/AstonDky/Math_in_RL_Visual) (May 2026, by Keyan Dong)
		- [https://github.com/Ronchy2000/Multi-agent-RL/tree/master/RL_Learning-main](https://github.com/Ronchy2000/Multi-agent-RL/tree/master/RL_Learning-main) (Oct 2025, by Rongqi Lu)
		- [https://github.com/zhoubay/Code-for-Mathematical-Foundations-of-Reinforcement-Learning](https://github.com/zhoubay/Code-for-Mathematical-Foundations-of-Reinforcement-Learning) (Mar 2025, by Xibin ZHOU)
		- [https://github.com/10-OASIS-01/minrl](https://github.com/10-OASIS-01/minrl) (Feb 2025)
		- [https://github.com/SupermanCaozh/The_Coding_Foundation_in_Reinforcement_Learning](https://github.com/SupermanCaozh/The_Coding_Foundation_in_Reinforcement_Learning) (by Zehong Cao, Aug 2024)
		- [https://github.com/ziwenhahaha/Code-of-RL-Beginning](https://github.com/ziwenhahaha/Code-of-RL-Beginning) by RLGamer (Mar 2024)
		    - Videos for code explanation: [https://www.bilibili.com/video/BV1fW421w7NH](https://www.bilibili.com/video/BV1fW421w7NH)
		- [https://github.com/jwk1rose/RL_Learning](https://github.com/jwk1rose/RL_Learning) by Wenkang Ji (Feb 2024)
	- _Matlab:_
		- [https://github.com/EveryDayIsaSong/MATLAB-Code-for-Mathematical-Foundation-of-Reinforcement-Learning](https://github.com/EveryDayIsaSong/MATLAB-Code-for-Mathematical-Foundation-of-Reinforcement-Learning) (by Yucheng Mao, Jan 2026)
	- _R:_
		- [https://github.com/NewbieToEverything/Code-Mathmatical-Foundation-of-Reinforcement-Learning](https://github.com/NewbieToEverything/Code-Mathmatical-Foundation-of-Reinforcement-Learning)
	- _C++:_
		- [https://github.com/purundong/test_rl](https://github.com/purundong/test_rl)
- **Study notes**
- _English:_
	- [https://lyk-love.cn/tags/reinforcement-learning/](https://lyk-love.cn/tags/reinforcement-learning/) by a graduate student from UC Davis
- _Chinese:_
	- RL knowledge graph: [https://hanfei-hz.github.io/assets/files/rl_explorer.html](https://hanfei-hz.github.io/assets/files/rl_explorer.html) (by Fei Han, May 2026)
	- [https://github.com/Peanut-Study/Reinforcement-Learning-Study-Note/tree/main](https://github.com/Peanut-Study/Reinforcement-Learning-Study-Note/tree/main) (Jan 2026)
	- [https://zhuanlan.zhihu.com/p/692207843](https://zhuanlan.zhihu.com/p/692207843)
	- [https://blog.csdn.net/qq_64671439/category_12540921.html](https://blog.csdn.net/qq_64671439/category_12540921.html)
	- [http://t.csdnimg.cn/EH4rj](http://t.csdnimg.cn/EH4rj)
	- [https://blog.csdn.net/LvGreat/article/details/135454738](https://blog.csdn.net/LvGreat/article/details/135454738)
	- [https://xinzhe.blog.csdn.net/article/details/129452000](https://xinzhe.blog.csdn.net/article/details/129452000)
	- [https://blog.csdn.net/v20000727/article/details/136870879?spm=1001.2014.3001.5502](https://blog.csdn.net/v20000727/article/details/136870879?spm=1001.2014.3001.5502)
	- [https://blog.csdn.net/m0_64952374/category_12883361.html](https://blog.csdn.net/m0_64952374/category_12883361.html)
There are also many others notes made by many other readers on the Internet. I am not able to put them all here. You are welcome to recommend to me if you find a good one.
- **Chinese PPT**
	- [https://github.com/manyouma/RobotIntelli_sztu](https://github.com/manyouma/RobotIntelli_sztu) (by Manyou Ma, July 2026)
- **Chinese videos made based on my course (Bilibili)**
	- [https://www.bilibili.com/video/BV1DMBYB6Edo](https://www.bilibili.com/video/BV1DMBYB6Edo) （Jan 2026）
	- [https://www.bilibili.com/video/BV1fW421w7NH](https://www.bilibili.com/video/BV1fW421w7NH)
	- [https://www.bilibili.com/video/BV1Ne411m7GX](https://www.bilibili.com/video/BV1Ne411m7GX)
	- [https://www.bilibili.com/video/BV1HX4y1H7uR](https://www.bilibili.com/video/BV1HX4y1H7uR)
	- [https://www.bilibili.com/video/BV1TgzsYDEnP](https://www.bilibili.com/video/BV1TgzsYDEnP)
	- [https://www.bilibili.com/video/BV1CQ4y1J7zu](https://www.bilibili.com/video/BV1CQ4y1J7zu)


https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf
Reinforcement Learning - An Introduction
Richard S. Sutton and Andrew G. Barto


For a list of real-world applications of RL, see e.g., https://bit.ly/42V7dIJ from Csaba szepesvari (2024), https://bit.ly/3EMMYCW from Vitaly Kurin (2022), and https://github.com/montrealrobotics/DeepRLInTheWorld, which seems to be kept up to date.

https://walkinglabs.github.io/hands-on-modern-rl/preface/intro
Hands-on Modern RL
全书大致可分为四个部分，在下图的核心脉络中用不同的颜色呈现：
- ![](../../../../../../Assets/Pics/Pasted%20image%2020260724172548.png)
- 上图是全书算法的主线。**第一部分**（灰色）带你快速上手，在 CartPole 和 DPO 上获得第一手感受。**第二部分**（蓝色）构建核心理论：左侧蓝色分支是 Value-Based——先估计每个动作能得多少分，再选得分最高的；右侧橙色分支是 Policy-Based——跳过打分，直接学习在什么状态下该做什么动作。两条路线在 Actor-Critic 处合流，由此长出 PPO。**第三部分**（绿色）进入大模型时代：PPO 正是后续所有大模型对齐与智能体算法的骨架，由此延伸出 RLHF、DPO、GRPO 和 Agentic RL。**第四部分**（紫色）展望前沿，探索多模态 RL 与具身智能。
- 以下是各章内容的详细介绍。
	- **第一部分包括快速入门。**
		- **第 1 章**带你零基础运行第一个 RL 训练脚本，在 CartPole 倒立摆上获得"AI 能自己学会一件事"的第一手感受。
		- **第 2 章**将场景从"游戏控制"切换到"语言对齐"，用一个完整的 DPO 微调流程让大语言模型学会"不盲从用户"，体验现代 RL 如何直接作用于大模型。
	- **接下来的五章集中构建强化学习的理论与方法体系。**
		- **第 3 章**引入 RL 的数学基石——马尔可夫决策过程（MDP），从多臂老虎机问题出发，逐步建立状态、动作、奖励的形式化框架，并推导出贝尔曼方程。
		- **第 4 章**进入深度强化学习，展示 DQN 如何将 Q-Learning 从一张小表格搬进神经网络，通过经验回放和目标网络让智能体直接从 Atari 游戏像素中学会决策——这也是深度学习与强化学习融合的里程碑。
		- **第 5 章**转向另一条路线——策略梯度方法，从 REINFORCE 到带基线的策略梯度，理解策略优化的基本范式。
		- **第 6 章**搭建 Actor-Critic 架构，引入优势函数和 Critic 训练方法，让 Value-Based 和 Policy-Based 两条路线在此汇合。
		- **第 7 章**聚焦 PPO，深入裁剪（Clipping）和广义优势估计（GAE）两大核心机制，在月球着陆器上实践稳定训练的艺术——PPO 既是游戏控制时代的集大成者，也是后续所有大模型对齐算法的出发点。
	- **第三部分讨论大模型时代的对齐与智能体算法。**
		- **第 8 章**串联 SFT → RM → RL 三阶段，构建一条完整的 RLHF 工程流水线，覆盖数据工程、奖励函数设计、训练稳定性控制和自我博弈数据飞轮等实际工作中的核心挑战。
		- **第 9 章**介绍后训练对齐的前沿算法。从数学上揭示 DPO 如何将奖励信号"隐藏"在策略概率比中绕过奖励模型；随后介绍 GRPO 如何用组内相对优势进一步省去 Critic 网络。重点探讨 **RLVR（基于可验证奖励的 RL）**，解析如何用规则反馈替代人工标注，追踪 **DeepSeek-R1-Zero** 纯强化学习驱动推理能力（CoT）自发涌现的最新进展。
		- **第 10 章**聚焦 **Agentic RL（智能体强化学习）**。探讨如何用 RL 训练能在环境中连续行动、调用工具、多轮交互的智能体，涵盖工具调用、轨迹合成、信用分配和工业界实践（如 Deep Research Agent）。这是从"对话模型"到"自主智能体"的关键跨越。
	- **第四部分将 RL 拓展到视觉、物理世界与前沿方向。**
		- **第 11 章**把 RL 从纯文本推进到视觉-语言模型（VLM），分析多模态 RL 中视觉幻觉、奖励归因等独特问题，并介绍 Open-R1 等前沿框架在视觉推理与生成上的探索。
		- **第 12 章**展望强化学习的未来趋势。不仅探讨从离散动作到连续动作控制，以及 Sim-to-Real 域随机化等**具身智能**的核心挑战，还覆盖了 Model-Based RL、自我博弈（Self-Play）、LLM 多智能体协作与离线 RL（Offline RL）等将彻底改变智能系统形态的前沿方向。


### Other Resources
https://rl-handbook.com/
This handbook gives a comprehensive, up-to-date guide to reinforcement learning and sequential decision making. Starting from bandits and Markov decision processes, it progresses through value-based methods, policy gradients, actor-critic architectures, and model-based approaches. Advanced topics include imitation learning, offline RL, curiosity-driven exploration, and multi-agent systems. The material balances mathematical rigor with runnable code examples, and is designed to serve as an open, continuously updated resource for students, researchers, and engineers entering or working in the field.



## Intro
> 📖 Python Machine Learning, 3rd Ed. to be published December 12th, 2019
> https://github.com/rasbt/python-machine-learning-book-3rd-edition

In **reinforcement learning**, the goal is to develop a system (**agent**) that improves its performance based on **interactions with the environment**. Since the information about the current state of the environment typically also includes a so-called **reward signal**, we can think of reinforcement learning as a field related to supervised learning. However, in reinforcement learning, this feedback is not the correct ground truth label or value, but a measure of how well the action was measured by a reward function. Through its interaction with the environment, an agent can then use reinforcement learning to learn a series of actions that maximizes this reward via an exploratory trial-and-error approach or deliberative planning.

![Screenshot 2023-01-28 at 12.39.03 PM](../../../../../../Assets/Pics/Screenshot%202023-01-28%20at%2012.39.03%20PM.png)

> 📖 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265

**Reinforcement learning** or **RL** is a class of methods for solving various kinds of **sequential decision making** tasks. In such tasks, we want to design an **agent** that interacts with an **external environment**. The agent maintains an internal state $z_t$, which it passes to its **policy $\pi$** to choose an **action** $a_t = \pi(z_t)$. The environment responds by sending back an **observation** $o_{t+1}$, which the agent uses to update its internal state using the **state-update (SU) function** $z_{t+1} = SU (z_t, a_t, o_{t+1})$. See Figure 1.1 for an illustration. 

To simplify things, we often assume that the environment is also a ↗ [Markov Process & Markov Chain (MC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md), which has internal world state $w_t$, from which the observations $o_t$ are derived. (This is called a POMDP — see Section 1.2.1). We often simplify things even more by assuming that the observation $o_t$ reveals the hidden environment state; in this case, we denote the internal agent state and external environment state by the same letter, namely $s_t = o_t = w_t = z_t$. (This is called an ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md) — see Section 1.2.2). We discuss these assumptions in more detail in Section 1.1.3. 

RL is more complicated than **supervised learning** (e.g., training a classifier) or **self-supervised learning** (e.g., training a language model), because this framework is very general: there are many assumptions we can make about the environment and its observations $o_t$, and many choices we can make about the form the agent’s internal state $z_t$ and policy $\pi$, as well the ways to update these objects as we see more data. We will study many different combinations in the rest of this document. The right choice ultimately depends on which real-world application you are interested in solving.

![](../../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2011.25.44.png)


### Reinforcement Learning & Control Theory
#reinforcement_learning #control_theory

> [!links]
> ↗ [Cybernetics & Control Theory](../../../../../🧮%20Mathematics/Cybernetics%20&%20Control%20Theory/Cybernetics%20&%20Control%20Theory.md)

> [!quote]
> E. D. Sontag. Mathematical Control Theory: Deterministic Finite Dimensional Systems. 2nd. Vol. 6. Texts in Applied Mathematics. Springer, 1998.
> 
> B. Recht. “A Tour of Reinforcement Learning: The View from Continuous Control”. In: Annual Review of Control, Robotics, and Autonomous Systems 2 (2019), pp. 253–279. url: http://arxiv.org/abs/1806.09460.
> 
> D. Bertsekas. Reinforcement learning and optimal control. Athena Scientific, 2019. url: http://www.mit.edu/~dimitrib/RLbook.html.
> 
> S. Meyn. Control Systems and Reinforcement Learning. Cambridge, 2022. url: https://meyn.ece.ufl.edu/2021/08/01/control-systems-and-reinforcement-learning/.



## Mathematical Models of The RL Problem
> [!links]
> ↗ [Mathematical Modeling & Abstraction](../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
> ↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"
> 
> ↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
> ↗ [Markov Process & Markov Chain (MC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md)
> - ↗ [Discrete-Time Markov Chains (DTMC)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Discrete-Time%20Markov%20Chains%20(DTMC)/Discrete-Time%20Markov%20Chains%20(DTMC).md)
> - ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)
> - ↗ [Markov Reward Model (MRM)](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Reward%20Model%20(MRM).md)
>
> ↗ [Linear Algebra & Module-Like Algebraic Structure (模)](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20(模)/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20(模).md)
> ↗ [Vector & Vector Space (Linear Space)](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20(模)/Vector%20&%20Vector%20Space%20(Linear%20Space)/Vector%20&%20Vector%20Space%20(Linear%20Space).md)


### 🎯 Classical Markovian-Based RL
#### Objectives & Recursive Approach
> [!links]
> ↗ [Function & Mapping of Set](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
> ↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md) "least fixed point theorem"
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
##### Bellman Equation (BE) & Bellman Optimal Equation (BOE)
↗ [Dynamic Programming (DP)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/🦋%20Optimization%20Algorithms%20&%20Computation/📝%20Dynamic%20Programming%20(DP)/Dynamic%20Programming%20(DP).md)
↗ [Bellman Principle of Optimality & Bellman (Optimal) Equations (BOE)](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/🦋%20Optimization%20Algorithms%20&%20Computation/📝%20Dynamic%20Programming%20(DP)/Bellman%20Principle%20of%20Optimality%20&%20Bellman%20(Optimal)%20Equations%20(BOE).md)

 ↗ [Function & Mapping of Set](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
 fixed point & contraction mapping theorem


### 🎯 Other RL Models & Algorithms
↗ [Distributional RL](Distributional%20RL/Distributional%20RL.md)
↗ [Hierarchical RL (HRL)](Hierarchical%20RL%20(HRL)/Hierarchical%20RL%20(HRL).md)
↗ [Imitation Learning (IL) & Learning from Demonstration (LfD)](Imitation%20Learning%20(IL)%20&%20Learning%20from%20Demonstration%20(LfD)/Imitation%20Learning%20(IL)%20&%20Learning%20from%20Demonstration%20(LfD).md)
↗ [Intrinsically Motivated RL (Unsupervised RL)](Intrinsically%20Motivated%20RL%20(Unsupervised%20RL)/Intrinsically%20Motivated%20RL%20(Unsupervised%20RL).md)
↗ [Multi-Agent RL (MARL)](Multi-Agent%20RL%20(MARL)/Multi-Agent%20RL%20(MARL).md)



## Reinforcement Learning Algorithms (for Markovian-Based Model)
### 🎯 Model-Based RL (MBRL)
> [!links]
> ↗ [Mathematical Modeling & Abstraction](../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
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



## General RL, AIXI, and Universal AGI



## Ref
[Make Post Train Solid Again - ybq的文章 - 知乎]: https://zhuanlan.zhihu.com/p/1995265459285694156
