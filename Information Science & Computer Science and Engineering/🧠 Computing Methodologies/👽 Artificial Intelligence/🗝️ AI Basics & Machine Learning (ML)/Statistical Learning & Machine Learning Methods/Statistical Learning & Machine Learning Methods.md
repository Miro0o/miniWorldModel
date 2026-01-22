# Statistical Learning & Machine Learning Methods

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)
↗ [Measures (Measure Theory)](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/Measures%20(Measure%20Theory).md)
↗ [Probability Theory & Statistics](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Probability%20Theory%20&%20Statistics.md)
- ↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
- [Bayesian Statistics & Statistical Analysis](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Bayesian%20Statistics%20&%20Statistical%20Analysis/Bayesian%20Statistics%20&%20Statistical%20Analysis.md)
	- ↗ [Inferential Statistics (Analysis) & Statistical Inference](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Bayesian%20Statistics%20&%20Statistical%20Analysis/Inferential%20Statistics%20(Analysis)%20&%20Statistical%20Inference/Inferential%20Statistics%20(Analysis)%20&%20Statistical%20Inference.md)
	- ↗ [Variational Inference](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Bayesian%20Statistics%20&%20Statistical%20Analysis/Inferential%20Statistics%20(Analysis)%20&%20Statistical%20Inference/Variational%20Inference/Variational%20Inference.md)
	- ↗ [Causal Inference in Statistics](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Bayesian%20Statistics%20&%20Statistical%20Analysis/Inferential%20Statistics%20(Analysis)%20&%20Statistical%20Inference/Causal%20Inference%20in%20Statistics/Causal%20Inference%20in%20Statistics.md)

↗ [Data Mining](../../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/⛏️%20Data%20Mining/Data%20Mining.md)

↗ [R Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Interpreted%20Languages/R%20Language/R%20Language.md)


### Learning Resources
【【合集】十分钟 机器学习 系列视频 《统计学习方法》】 https://www.bilibili.com/video/BV1No4y1o7ac/?p=2&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
课程讲义将陆续在公众号“简博士数据分析吧”更新，欢迎订阅

📖 Information Theory, Inference, and Learning Algorithms. David J.C. MacKay

📖 统计学习方法, 李航
- 本书共介绍了10种主要的统计学习⽅法：感知机、k近邻法、朴素贝叶斯法、决策树、逻辑斯谛回归与最⼤熵模型、⽀持向量机、提升⽅法、EM算法、隐马尔可夫模型和条件随机场。这10种统计学习⽅法的特点概括总结在表12.1中：
	- ![|500](../../../../../Assets/Pics/Screenshot%202025-09-06%20at%2011.54.39.png)

([James et al. 2013](https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/stat-learn-intro.html#ref-James-StatLearn-R13)): Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani(2013) An Introduction to Statistical Learning: with Applications in R, Springer.

Max Kuhn and Julia Silge(2023), Tidy Modeling with R, [https://www.tmwr.org/](https://www.tmwr.org/)

https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/MLbook2016.htm
周志华 著. 机器学习, 北京: 清华大学出版社, 2016年1月.
- [前言 /目录](https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/Book2016toc.pdf)

https://github.com/Vay-keen/Machine-learning-learning-notes
周志华《机器学习》又称西瓜书是一本较为全面的书籍，书中详细介绍了机器学习领域不同类型的算法(例如：监督学习、无监督学习、半监督学习、强化学习、集成降维、特征选择等)，记录了本人在学习过程中的理解思路与扩展知识点，希望对新人阅读西瓜书有所帮助！

https://github.com/datawhalechina/pumpkin-book
南瓜书（pumpkin-book）

https://www.cis.upenn.edu/~jean/math-deep.pdf
Algebra, Topology, Differential Calculus, and Optimization Theory For Computer Science and Machine Learning
Jean Gallier and Jocelyn Quaintance
Department of Computer and Information Science, University of Pennsylvania
April 14, 2025

https://ocw.mit.edu/courses/18-657-mathematics-of-machine-learning-fall-2015/pages/readings/ (2015)
The class will be split in three main parts:
1. The Statistical Theory of Machine Learning.
    - Classification, Regression, Aggregation
    - Empirical Risk Minimization, Regularization
    - Suprema of Empirical Processes
2. Algorithms and Convexity.
    - Boosting
    - Kernel Methods
    - Convex Optimization
3. Online Learning.
    - Online Convex Optimization
    - Partial Information: Bandit Problems
    - Blackwell’s Approachability


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Statistical_learning_theory

**Statistical learning theory** is a framework for [machine learning](https://en.wikipedia.org/wiki/Machine_learning) drawing from the fields of [statistics](https://en.wikipedia.org/wiki/Statistics) and [functional analysis](https://en.wikipedia.org/wiki/Functional_analysis). Statistical learning theory deals with the [statistical inference](https://en.wikipedia.org/wiki/Statistical_inference) problem of finding a predictive function based on data. Statistical learning theory has led to successful applications in fields such as [computer vision](https://en.wikipedia.org/wiki/Computer_vision), [speech recognition](https://en.wikipedia.org/wiki/Speech_recognition), and [bioinformatics](https://en.wikipedia.org/wiki/Bioinformatics).


### Machine Learning, Statistical Learning, Neural Network & Deep Learning, and AI?


[统计学和机器学习到底有什么区别？]: https://www.jiqizhixin.com/articles/2019-04-24-16
[统计学习，机器学习，深度学习 - IAMGPS的文章 - 知乎]: https://zhuanlan.zhihu.com/p/379821665
[Machine Learning Vs. Statistical Learning]: https://blogs.perficient.com/2018/01/29/machine-learning-vs-statistical-learning/

[[Machine Learning VS Statistical Learning vs Statistics]: https://stats.stackexchange.com/questions/442128/machine-learning-vs-statistical-learning-vs-statistics

[MACHINE LEARNING VS. STATISTICS]: https://onlinestats.canr.udel.edu/machine-learning-vs-statistics/



## Types of Machine Learning Problems
![Screenshot 2023-01-28 at 12.26.51 PM](../../../../..//Assets/Pics/Screenshot%202023-01-28%20at%2012.26.51%20PM.png)


### 1️⃣ Supervised Learning
↗️ [Supervised Learning](Supervised Learning/Supervised Learning.md)


### 2️⃣ Semi-supervised learning
↗ [Semi-supervised Learning](Supervised%20Learning/🥝%20Semi-supervised%20Learning/Semi-supervised%20Learning.md)
↗ [GAN (Generative Adversarial Network)](../Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/GAN%20(Generative%20Adversarial%20Network)/GAN%20(Generative%20Adversarial%20Network).md)
#### Self-training


### 3️⃣ Reinforcement learning
↗ [Reinforcement Learning (RL) & Sequential Decision Making](Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)


### 4️⃣ Unsupervised learning
↗ [Unsupervised Learning](Unsupervised%20Learning/Unsupervised%20Learning.md)



## Ref
[如何学习《统计学习方法》？ - 知乎]: https://www.zhihu.com/question/49386395
