# Probabilities  & Statistics

[TOC]



## Res
### Related Topics
↗ [Statistical Learning Theory](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning/📌%20Statistical%20Learning%20Theory/Statistical%20Learning%20Theory.md)
↗ [Data-Oriented & Human-Centered Technologies](../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data-Oriented%20&%20Human-Centered%20Technologies.md)
- ↗ [Data Mining](../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/⛏️%20Data%20Mining/Data%20Mining.md)

↗ [Statistical Learning Theory](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning/📌%20Statistical%20Learning%20Theory/Statistical%20Learning%20Theory.md)


### Learning Resources
🏫 [UBC CS70 : discrete Math and probability theory](../🏠 Assets/UC Berkeley/CS70 : Discrete Math and Probability Theory/Intro.md) 
🏫 [UBC CS126 : Probability Theory](../🏠 Assets/UC Berkeley/CS126 : Probability Theory/Intro.md) 


🎬《概率论与数理统计》教学视频全集（宋浩 https://www.bilibili.com/video/BV1ot411y7mU?p=9&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬【比刷剧还爽!】一生推！！【麻省理工公开课】听说你概率论挂了？ MIT 概率论 (中英双语字幕)完整版全25讲，概率论应该这样学 https://www.bilibili.com/video/BV1MV4y1W73J?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

📖 概率论与数理统计, 陈希孺

📖 统计学习方法, 李航

📖 INTRODUCTION TO PROBABILITY AND STATISTICS FOR ENGINEERS AND SCIENTISTS 
📖 A FIRST COURSE IN PROBABILITY
📖 Introduction to Probability Model (PM)
📖 Stochastic Process (SP)
Sheldon M. Ross

📖 贝叶斯反演

📖 H. Pishro-Nik, "Introduction to probability, statistics, and random processes", available at [https://www.probabilitycourse.com](https://www.probabilitycourse.com/), Kappa Research LLC, 2014.



## Intro
### Probability 🆚 Statistics?
> 🤖 Gemini 2.5

Probability and statistics are two different, though related, fields that work in opposite directions: ==probability uses existing models and rules to predict future events, while statistics uses observed data to infer the underlying rules or models==. In essence, probability moves from model to data, and statistics moves from data to model.

> 🔗 https://www3.cs.stonybrook.edu/~skiena/jaialai/excerpts/node12.html#

Probability and statistics are related areas of mathematics which concern themselves with analyzing the relative frequency of events. Still, there are fundamental differences in the way they see the world:
- _Probability_ deals with predicting the likelihood of future events, while _statistics_ involves the analysis of the frequency of past events.   
- _Probability_ is primarily a theoretical branch of mathematics, which studies the consequences of mathematical definitions. _Statistics_ is primarily an applied branch of mathematics, which tries to make sense of observations in the real world.

Both subjects are important, relevant, and useful. But they are different, and understanding the distinction is crucial in properly interpreting the relevance of mathematical evidence. Many a gambler has gone to a cold and lonely grave for failing to make the proper distinction between probability and statistics.

This distinction will perhaps become clearer if we trace the thought process of a mathematician encountering her first craps game:
- If this mathematician were a probabilist, she would see the dice and think ``Six-sided dice? Presumably each face of the dice is equally likely to land face up. Now _assuming_ that each face comes up with probability 1/6, I can figure out what my chances of crapping out are.''
- If instead a statistician wandered by, she would see the dice and think ``Those dice may look OK, but how do I _know_ that they are not loaded? I'll watch a while, and keep track of how often each number comes up. Then I can decide if my observations are consistent with the assumption of equal-probability faces. Once I'm confident enough that the dice are fair, I'll call a probabilist to tell me how to play.''

In summary, probability theory enables us to find the consequences of a given ideal world, while statistical theory enables us to to measure the extent to which our world is ideal.

Modern probability theory emerged from the dice tables of France in 1654. Chevalier de Méré, a French nobleman, wondered whether the player or the house had the advantage in a variation of the following betting game.[6.1](https://www3.cs.stonybrook.edu/~skiena/jaialai/excerpts/footnode.html#foot389) In the basic version, the player rolls four dice, and wins provided none of them are a six. The house collects on the even money bet if at least one six appears.  

De Méré brought this problem to attention of the French mathematicians Blaise Pascal and Pierre de Fermat, most famous as the source of Fermat's Last Theorem. Together, these men worked out the basics of probability theory, along the way establishing that the house wins the basic version with probability ![$p = 1 - (5/6)^4 \approx 0.517$](https://www3.cs.stonybrook.edu/~skiena/jaialai/excerpts/img12.gif), where the probability _p_ = 0.5 would denote a fair game where the house wins exactly half the time.    The jai-alai world of our Monte Carlo simulation assumes that we decide the outcome of a point between two teams by flipping a suitably biased coin. If this world were reality, our simulation will compute the correct probability of each possible betting outcome. But all players are not created equal, of course. By doing a statistical study of the outcome of all the matches involving a particular player, we can determine an appropriate amount to bias the coin.

But such computations only make sense if our simulated jai-alai world is a model consistent with the real world. John von Neuman once said that ``the valuation of a poker hand can be sheer mathematics.'' We have to reduce our evaluation of a pelotari to sheer mathematics.



## Ref
[请问下 Ross 的随机过程那个版本比较好？ - Mercurial的回答 - 知乎]: https://www.zhihu.com/question/389395273/answer/1194198617
这学期就在上Sheldon的Foundation of Stochastic Process。Ross的说法是Stochastic Process (以下简称SP)是主要教材，Probability Model (PM)作为补充。但实际情况是Ross基本是严格按照PM讲的，SP主要用来布置作业。唯一的例外是Renewal theory这一块用SP讲。而Ross教的本科或master level的随机过程则是只用PM。我的建议是，如果你是工科非概率方向的研究生，PM够用。如果是做随机过程的PhD，可以两本一起读。如果你是数学系做概率的PhD，看Durrett吧。

应用随机过程：概率模型导论那本书例子丰富，内容也多，知识点的排版更系统一些，一共好像有12个章节，总之，可以看看，（如果可以，尽量看英文原版，个人感觉中文翻译的版本应该不差，但是读起来有些别扭。）另外一本随机过程内容上来说比前者会少一些，但是该有的都还是有了，具体少的内容就是上一本书最后一两章的内容，并且关于概率的介绍都融合在第一章了，蛮可以。两本都挺好的，不过看你适合哪本，每个人对书的口味不同，比如说我就觉得概率模型导论比较啰嗦，我一般都是当当“字典”用。最后，学习的话，最好把课后习题都做个60％+，这样才会知道知识点如何去运用，对学习这门课程是有莫大的好处的！