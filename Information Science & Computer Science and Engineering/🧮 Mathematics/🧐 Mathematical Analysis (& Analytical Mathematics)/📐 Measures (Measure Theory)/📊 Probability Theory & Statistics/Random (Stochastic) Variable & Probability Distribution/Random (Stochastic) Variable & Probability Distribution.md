# Random (Stochastic) Variable & Probability Distribution

[TOC]



## Res
### Related Topics
↗ [Probabilistic Models (Distributions) & Stochastic Process](../🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)


### Other Resources
👍 https://www.math.wm.edu/~leemis/chart/UDR/UDR.html
![](../../../../../../Assets/Pics/Screenshot%202025-10-05%20at%2023.37.13.png)



## Intro



## Random Variable
### Definition of Random (Stochastic) Variable
> ↗ [σ-Algebra (Sigma Algebra)](../../σ-Algebra%20(Sigma%20Algebra)/σ-Algebra%20(Sigma%20Algebra).md)

![](../../../../../../Assets/Pics/Screenshot%202025-11-15%20at%2022.46.56.png)

![](../../../../../../Assets/Pics/Screenshot%202025-11-15%20at%2022.47.41.png)

> 🔗 https://en.wikipedia.org/wiki/Random_variable
#### Difference of Random Variable and Traditional Variable
> 📖 概率论与数理统计（第⼆版）陈鸿建 赵永红 翁洋 高等教育出版社

注意随机变量与普通函数不一样，首先定义域是样本空间而不是某数集；其次随机变量取值具有随机性，即试验之前，不知样本空间 $\Omega$ 中哪一个样本点 $\omega$ 会出现，从而 $X(\omega)$ 取何值不能确定，而试验之后，$X(\omega)$ 才确定取何值；最后，随机变量取何值具有一定的概率（如例2.4中，“$X(\omega)=2$”的概率为$\frac{1}{4}$）。

研究随机变量这些特性的需要，就产生了近代概率论，即把对随机试验的统计规律性的研究变成了对随机变量的研究. 在例2.4中，“$X(\omega)=2$”表明试验中出现样本点 $\omega_1$，这说明“$X(\omega)=2$”是一个事件，我们用$\{ \omega \ | \ X(\omega)=2 \}= \{\omega_1\}$ 表示这个事件，这一事件表明掷一硬币两次的试验中出现两次正面的事件。又如例2.2中，用 $\{\omega \ | \ X(\omega)\geq 1000\}$ 表示寿命不低于 1000h 的事件。因而事件总可以用随机变量取值在一定范围内的样本点的集合表示。

一般地，$G$ 是一个数集，用 $\{\omega \ | \ X(\omega)\in G\}$ 表示随机变量取值在 $G$ 中的样本点构成的事件.简记这一事件为（$X \in G$），从而一般可求概率 $P(X\in G)$.

> 🔗 https://zhuanlan.zhihu.com/p/150295256

假设代数中使用的变量为x，y，z。在这里，x可以是手机的数量，y = 正面的数量 或z =学生数。变量只是代表未知数字的字母字符。例如： x + 5 = 10 x是其值未知的变量，我们正在尝试查找其值。 评估后，x = 5。

==随机变量不同于代数中的变量，因为它具有一组完整的值，并且可以随机获取任何值。代数中使用的变量一次不能具有多个值。==

如果随机变量X = {0,1,2,3} 那么X可以是随机的0、1、2或3，其中每个都有不同的概率。我们将大写字母用于随机变量，以避免与传统变量混淆。

随机变量可以是离散的也可以是连续的。如果变量可以采用可计数数量的不同值，则它是离散的随机变量。


### Numeric Characteristics of Random Variables



## Probability Distribution
> 🔗 https://zh.wikipedia.org/zh-hans/%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83
> 🔗 https://en.wikipedia.org/wiki/Probability_distribution

In [probability theory](https://en.wikipedia.org/wiki/Probability_theory "Probability theory") and [statistics](https://en.wikipedia.org/wiki/Statistics "Statistics"), a **probability distribution** is a [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") that gives the probabilities of occurrence of possible **events** for an [experiment](https://en.wikipedia.org/wiki/Experiment_\(probability_theory\) "Experiment (probability theory)"). It is a mathematical description of a [random](https://en.wikipedia.org/wiki/Randomness "Randomness") phenomenon in terms of its [sample space](https://en.wikipedia.org/wiki/Sample_space "Sample space") and the [probabilities](https://en.wikipedia.org/wiki/Probability "Probability") of [events](https://en.wikipedia.org/wiki/Event_\(probability_theory\) "Event (probability theory)") ([subsets](https://en.wikipedia.org/wiki/Subset "Subset") of the sample space).

For instance, if X is used to denote the outcome of a [coin toss](https://en.wikipedia.org/wiki/Coin_flipping "Coin flipping") ("the experiment"), then the probability distribution of X would take the value 0.5 (1 in 2 or 1/2) for _X_ = heads, and 0.5 for _X_ = tails (assuming that [the coin is fair](https://en.wikipedia.org/wiki/Fair_coin "Fair coin")). More commonly, probability distributions are used to compare the relative occurrence of many different random values.

Probability distributions can be defined in different ways and for discrete or for continuous variables. Distributions with special properties or for especially important applications are given specific names.


> 📖 概率论与数理统计（第⼆版）陈鸿建 赵永红 翁洋 高等教育出版社

对于概率 $P(X\in G)$ ，最常⻅的是 $P(a\lt X\leq b)$。 ⽽对这⼀类型概率，只需求出形如 $P(X\leq b)$ 的概率即可，这是因为 $P(a\lt X\leq b) = P(X\leq b) - P(X\leq a)$ .

定义2.2 设 $X$ 是⼀随机变量，对任意实数 $x$ ，定义$$F(x) = P(X\leq x), \ x\in R $$
称$F(x)$为随机变量$X$的分布函数。


### Univariate Distribution


### Multivariate Distribution (Co-Distribution)



## Ref
[Sample mean and covariance | wikipedia]: https://en.wikipedia.org/wiki/Sample_mean_and_covariance
