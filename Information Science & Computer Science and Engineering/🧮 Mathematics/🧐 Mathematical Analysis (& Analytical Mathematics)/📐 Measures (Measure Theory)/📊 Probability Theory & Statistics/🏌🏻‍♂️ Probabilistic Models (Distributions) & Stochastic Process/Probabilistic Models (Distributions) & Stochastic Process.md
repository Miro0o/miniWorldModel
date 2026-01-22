# Probabilistic Models (Distributions) & Stochastic Process

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [AI Basics & Machine Learning (ML)](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/AI%20Basics%20&%20Machine%20Learning%20(ML).md)
↗ [Statistical Learning & Machine Learning Methods](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/Statistical%20Learning%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20&%20Machine%20Learning%20Methods.md)

↗ [PRISM](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/PRISM.md)
↗ [Theory of Computation](../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Models of Computation & Abstract Machines](../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)


### Other Resources
📖 Introduction to Probability Model (PM)
📖 Stochastic Process (SP)
Sheldon M. Ross

[KNP07a](https://www.prismmodelchecker.org/bibitem.php?key=KNP07a) (for DTMCs and CTMCs)
[FKNP11](https://www.prismmodelchecker.org/bibitem.php?key=FKNP11) (for MDPs)
[NPS13](https://www.prismmodelchecker.org/bibitem.php?key=NPS13) (for PTAs)
[SK16](https://www.prismmodelchecker.org/bibitem.php?key=SK16) (for stochastic games)

Jan Rutten, Marta Kwiatkowska, Gethin Norman and David Parker.
Mathematical Techniques for Analyzing Concurrent and Probabilistic Systems.
Volume 23 of CRM Monograph Series. American Mathematical Society. P. Panangaden and F. van Breugel (eds.). March 2004.
- Probability features increasingly often in software and hardware systems: it is used in distributed co-ordination and routing problems, to model fault-tolerance and performance, and to provide adaptive resource management strategies. _Probabilistic model checking_ is an automatic procedure for establishing if a desired property holds in a probabilistic model, aimed at verifying probabilistic specifications such as "leader election is eventually resolved with probability 1", "the chance of shutdown occurring is at most 0.01%", and "the probability that a message will be delivered within 30ms is at least 0.75". A probabilistic model checker calculates the _probability_ of a given temporal logic property being satisfied, as opposed to validity. In contrast to conventional model checkers, which rely on reachability analysis of the underlying transition system graph, probabilistic model checking additionally involves numerical solutions of linear equations and linear programming problems. These lecture notes summarise both the theory and the practical details of automatic verification of probabilistic systems against temporal logic specifications. We cover discrete- and continuous-time Markov chains, Markov decision processes and probabilistic timed automata, as well as the temporal logics PCTL, CSL and PTCTL. The usefulness of the techniques is demonstrated through a number of case studies analysing real-world probabilistic protocols performed with [PRISM](http://www.cs.bham.ac.uk/~dxp/prism/), a probabilistic model checker developed at the University of Birmingham.

Arnd Hartmanns, Holger Hermanns, In the quantitative automata zoo, Science of Computer Programming, Volume 112, Part 1, 2015, Pages 3-23, ISSN 0167-6423,
https://doi.org/10.1016/j.scico.2015.08.009.



## Intro
### Stochastic Process
> 🔗 https://en.wikipedia.org/wiki/Stochastic_process

In probability theory and related fields, a stochastic (/stəˈkæstɪk/) or random process is a mathematical object usually defined as a family of random variables in a probability space, where the index of the family often has the interpretation of time. Stochastic processes are widely used as mathematical models of systems and phenomena that appear to vary in a random manner. Examples include the growth of a bacterial population, an electrical current fluctuating due to thermal noise, or the movement of a gas molecule.[1][4][5] Stochastic processes have applications in many disciplines such as biology,[6] chemistry,[7] ecology,[8] neuroscience,[9] physics,[10] image processing, signal processing,[11] control theory,[12] information theory,[13] computer science,[14] and telecommunications.[15] Furthermore, seemingly random changes in financial markets have motivated the extensive use of stochastic processes in finance.[16][17][18]

Applications and the study of phenomena have in turn inspired the proposal of new stochastic processes. Examples of such stochastic processes include the Wiener process or Brownian motion process,[a] used by Louis Bachelier to study price changes on the Paris Bourse,[21] and the Poisson process, used by A. K. Erlang to study the number of phone calls occurring in a certain period of time.[22] These two stochastic processes are considered the most important and central in the theory of stochastic processes,[1][4][23] and were invented repeatedly and independently, both before and after Bachelier and Erlang, in different settings and countries.[21][24]

The term random function is also used to refer to a stochastic or random process,[25][26] because a stochastic process can also be interpreted as a random element in a function space.[27][28] The terms stochastic process and random process are used interchangeably, often with no specific mathematical space for the set that indexes the random variables.[27][29] But often these two terms are used when the random variables are indexed by the integers or an interval of the real line.[5][29] If the random variables are indexed by the Cartesian plane or some higher-dimensional Euclidean space, then the collection of random variables is usually called a random field instead.[5][30] The values of a stochastic process are not always numbers and can be vectors or other mathematical objects.[5][28]

Based on their mathematical properties, stochastic processes can be grouped into various categories, which include random walks,[31] martingales,[32] Markov processes,[33] Lévy processes,[34] Gaussian processes,[35] random fields,[36] renewal processes, and branching processes.[37] The study of stochastic processes uses mathematical knowledge and techniques from probability, calculus, linear algebra, set theory, and topology[38][39][40] as well as branches of mathematical analysis such as real analysis, measure theory, Fourier analysis, and functional analysis.[41][42][43] The theory of stochastic processes is considered to be an important contribution to mathematics[44] and it continues to be an active topic of research for both theoretical reasons and applications.



## Ref
[请问下 Ross 的随机过程那个版本比较好？ - Mercurial的回答 - 知乎]: https://www.zhihu.com/question/389395273/answer/1194198617
这学期就在上Sheldon的Foundation of Stochastic Process。Ross的说法是Stochastic Process (以下简称SP)是主要教材，Probability Model (PM)作为补充。但实际情况是Ross基本是严格按照PM讲的，SP主要用来布置作业。唯一的例外是Renewal theory这一块用SP讲。而Ross教的本科或master level的随机过程则是只用PM。我的建议是，如果你是工科非概率方向的研究生，PM够用。如果是做随机过程的PhD，可以两本一起读。如果你是数学系做概率的PhD，看Durrett吧。

应用随机过程：概率模型导论那本书例子丰富，内容也多，知识点的排版更系统一些，一共好像有12个章节，总之，可以看看，（如果可以，尽量看英文原版，个人感觉中文翻译的版本应该不差，但是读起来有些别扭。）另外一本随机过程内容上来说比前者会少一些，但是该有的都还是有了，具体少的内容就是上一本书最后一两章的内容，并且关于概率的介绍都融合在第一章了，蛮可以。两本都挺好的，不过看你适合哪本，每个人对书的口味不同，比如说我就觉得概率模型导论比较啰嗦，我一般都是当当“字典”用。最后，学习的话，最好把课后习题都做个60％+，这样才会知道知识点如何去运用，对学习这门课程是有莫大的好处的！
