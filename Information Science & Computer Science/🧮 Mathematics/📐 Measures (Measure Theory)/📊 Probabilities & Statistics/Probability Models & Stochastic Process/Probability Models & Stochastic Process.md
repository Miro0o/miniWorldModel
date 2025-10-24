# Probability Models & Stochastic Process

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [AI Basics & Machine Learning (ML)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/AI%20Basics%20&%20Machine%20Learning%20(ML).md)
↗ [Statistical Learning Theory & ML Types](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/📊%20Statistical%20Learning%20Theory%20&%20ML%20Types/Statistical%20Learning%20Theory%20&%20ML%20Types.md)

↗ [PRISM](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/PRISM.md)
↗ [Theory of Computation](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)


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



## Ref
[请问下 Ross 的随机过程那个版本比较好？ - Mercurial的回答 - 知乎]: https://www.zhihu.com/question/389395273/answer/1194198617
这学期就在上Sheldon的Foundation of Stochastic Process。Ross的说法是Stochastic Process (以下简称SP)是主要教材，Probability Model (PM)作为补充。但实际情况是Ross基本是严格按照PM讲的，SP主要用来布置作业。唯一的例外是Renewal theory这一块用SP讲。而Ross教的本科或master level的随机过程则是只用PM。我的建议是，如果你是工科非概率方向的研究生，PM够用。如果是做随机过程的PhD，可以两本一起读。如果你是数学系做概率的PhD，看Durrett吧。

应用随机过程：概率模型导论那本书例子丰富，内容也多，知识点的排版更系统一些，一共好像有12个章节，总之，可以看看，（如果可以，尽量看英文原版，个人感觉中文翻译的版本应该不差，但是读起来有些别扭。）另外一本随机过程内容上来说比前者会少一些，但是该有的都还是有了，具体少的内容就是上一本书最后一两章的内容，并且关于概率的介绍都融合在第一章了，蛮可以。两本都挺好的，不过看你适合哪本，每个人对书的口味不同，比如说我就觉得概率模型导论比较啰嗦，我一般都是当当“字典”用。最后，学习的话，最好把课后习题都做个60％+，这样才会知道知识点如何去运用，对学习这门课程是有莫大的好处的！
