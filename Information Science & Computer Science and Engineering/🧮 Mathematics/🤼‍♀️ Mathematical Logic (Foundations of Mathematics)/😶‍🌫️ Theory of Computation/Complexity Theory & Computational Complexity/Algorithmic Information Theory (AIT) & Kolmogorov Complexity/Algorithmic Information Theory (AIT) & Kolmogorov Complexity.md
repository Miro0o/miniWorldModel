# Algorithmic Information Theory (AIT) & Kolmogorov Complexity

[TOC]



## Res
### Related Topics
↗ [Computational Trilogy & Curry–Howard(–Lambek) Correspondence](../../../Proof%20Theory/Computational%20Trilogy%20&%20Curry–Howard(–Lambek)%20Correspondence.md)
↗ [Chaos Theory](../../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Dynamical%20Systems%20Theory/🇺🇳%20Chaos%20Theory/Chaos%20Theory.md)


### Other Resources



## Intro
### History of AIT & Kolmogorov Complexity
Algorithmic information theory was founded by [Ray Solomonoff](https://en.wikipedia.org/wiki/Ray_Solomonoff "Ray Solomonoff"), who published the basic ideas on which the field is based as part of his invention of [algorithmic probability](https://en.wikipedia.org/wiki/Algorithmic_probability "Algorithmic probability")—a way to overcome serious problems associated with the application of [Bayes' rules](https://en.wikipedia.org/wiki/Bayes%27_rule "Bayes' rule") in statistics. He first described his results at a Conference at [Caltech](https://en.wikipedia.org/wiki/Caltech "Caltech") in 1960, and in a report, February 1960, "A Preliminary Report on a General Theory of Inductive Inference." Algorithmic information theory was later developed independently by [Andrey Kolmogorov](https://en.wikipedia.org/wiki/Andrey_Kolmogorov "Andrey Kolmogorov"), in 1965 and [Gregory Chaitin](https://en.wikipedia.org/wiki/Gregory_Chaitin "Gregory Chaitin"), around 1966.

There are several variants of Kolmogorov complexity or algorithmic information; the most widely used one is based on [self-delimiting programs](https://en.wikipedia.org/wiki/Prefix_code "Prefix code") and is mainly due to [Leonid Levin](https://en.wikipedia.org/wiki/Leonid_Levin "Leonid Levin") (1974). [Per Martin-Löf](https://en.wikipedia.org/wiki/Per_Martin-L%C3%B6f "Per Martin-Löf") also contributed significantly to the information theory of infinite sequences. An axiomatic approach to algorithmic information theory based on the [Blum axioms](https://en.wikipedia.org/wiki/Blum_axioms "Blum axioms") (Blum 1967) was introduced by Mark Burgin in a paper presented for publication by [Andrey Kolmogorov](https://en.wikipedia.org/wiki/Andrey_Kolmogorov "Andrey Kolmogorov") (Burgin 1982). The axiomatic approach encompasses other approaches in the algorithmic information theory. It is possible to treat different measures of algorithmic information as particular cases of axiomatically defined measures of algorithmic information. Instead of proving similar theorems, such as the basic invariance theorem, for each particular measure, it is possible to easily deduce all such results from one corresponding theorem proved in the axiomatic setting. This is a general advantage of the axiomatic approach in mathematics. The axiomatic approach to algorithmic information theory was further developed in the book (Burgin 2005) and applied to software metrics (Burgin and Debnath, 2003; Debnath and Burgin, 2003).



## Algorithmic Information Theory (AIT)
> 🔗 https://en.wikipedia.org/wiki/Algorithmic_information_theory

**Algorithmic information theory** (**AIT**) is a branch of [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science") that concerns itself with the relationship between [computation](https://en.wikipedia.org/wiki/Theory_of_computation "Theory of computation") and [information](https://en.wikipedia.org/wiki/Information#Measuring_information "Information") of computably generated objects (as opposed to [stochastically](https://en.wikipedia.org/wiki/Stochastic_process "Stochastic process") generated), such as [strings](https://en.wikipedia.org/wiki/String_\(computer_science\) "String (computer science)") or any other [data structure](https://en.wikipedia.org/wiki/Data_structure "Data structure"). In other words, it is shown within algorithmic information theory that computational incompressibility "mimics" (except for a constant that only depends on the chosen universal programming language) the relations or inequalities found in [information theory](https://en.wikipedia.org/wiki/Information_theory "Information theory"). According to [Gregory Chaitin](https://en.wikipedia.org/wiki/Gregory_Chaitin "Gregory Chaitin"), it is "the result of putting [Shannon](https://en.wikipedia.org/wiki/Claude_Shannon "Claude Shannon")'s [information theory](https://en.wikipedia.org/wiki/Information_theory "Information theory") and [Turing](https://en.wikipedia.org/wiki/Alan_Turing "Alan Turing")'s [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory") into a cocktail shaker and shaking vigorously."

Besides the formalization of a universal measure for irreducible information content of computably generated objects, some main achievements of AIT were to show that:
- in fact algorithmic complexity follows (in the [self-delimited](https://en.wikipedia.org/wiki/Prefix_code "Prefix code") case) the same inequalities (except for a constant) that [entropy](https://en.wikipedia.org/wiki/Entropy_\(information_theory\) "Entropy (information theory)") does, as in classical information theory;
- randomness is incompressibility; 
- and, within the realm of randomly generated software, the probability of occurrence of any data structure is of the order of the shortest program that generates it when running on a universal machine.

AIT principally studies measures of irreducible information content of [strings](https://en.wikipedia.org/wiki/String_\(computer_science\) "String (computer science)") (or other [data structures](https://en.wikipedia.org/wiki/Data_structure "Data structure")). Because most mathematical objects can be described in terms of strings, or as the [limit of a sequence](https://en.wikipedia.org/wiki/Limit_of_a_sequence "Limit of a sequence") of strings, it can be used to study a wide variety of mathematical objects, including [integers](https://en.wikipedia.org/wiki/Integer "Integer"). One of the main motivations behind AIT is the very study of the information carried by mathematical objects as in the field of [metamathematics](https://en.wikipedia.org/wiki/Metamathematics "Metamathematics"), e.g., as shown by the incompleteness results mentioned below. Other main motivations came from surpassing the limitations of [classical information theory](https://en.wikipedia.org/wiki/Information_theory "Information theory") for single and fixed objects, formalizing the concept of [randomness](https://en.wikipedia.org/wiki/Algorithmically_random_sequence "Algorithmically random sequence"), and finding a meaningful [probabilistic inference](https://en.wikipedia.org/wiki/Bayesian_inference "Bayesian inference") without prior knowledge of the [probability distribution](https://en.wikipedia.org/wiki/Probability_distribution "Probability distribution") (e.g., whether it is [independent and identically distributed](https://en.wikipedia.org/wiki/Independent_and_identically_distributed "Independent and identically distributed"), [Markovian](https://en.wikipedia.org/wiki/Markov_chain "Markov chain"), or even [stationary](https://en.wikipedia.org/wiki/Stationary_process "Stationary process")). ==In this way, AIT is known to be basically founded upon three main mathematical concepts and the relations between them: [algorithmic complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity "Kolmogorov complexity"), [algorithmic randomness](https://en.wikipedia.org/wiki/Algorithmically_random_sequence "Algorithmically random sequence"), and [algorithmic probability](https://en.wikipedia.org/wiki/Algorithmic_probability "Algorithmic probability").==



## Kolmogorov Complexity
### Definition of Kolmogorov Complexity
> 🔗 https://zhuanlan.zhihu.com/p/586889341

柯尔莫哥洛夫复杂度定义为，用生成字符串最短算法长度，来表征字符串复杂度。接下来，我们来看3个实例，以增强感性理解。

字符串1:010101010101010101010101
字符串2:2,3,5,8,13,21,34,55
字符串3:35j8o1d93id78mcdkOjiwwuetcn

读友们可以思考一下：如果要用最简短描述，你会如何描述以上3个字符串？
像上面这样，老老实实把每一个字符读出来或者写下来，自然是一种描述，但未必是最简短描述。
例如，第1个字符串，读友们很容易观察出规律：01重复出现。我们可以描述为：01重复出现12次。如是描述比把24个字符逐一描述要简短。
例如，第2个字符串，规律相对难一些，但也不难发现：从第3个数字开始起，都是前两个数字之和。如是描述比把8个字符逐一描述要简短。
但第3个字符串并没有这么规律，事实上，这27个字符是 在键盘上随便敲出来的。如果要描述这27个字符，只能老老实实把27个字符逐一读出来或者写下来。

如果用程序代码来实现就是：输出“35j8o1d93id78mcdkOjiwwuetcn”。这看起来有点愚笨，不过没有办法，只能这么做。
相反，字符串1和字符串2程序代码看起来比较聪明。字符串1程序代码是：输出“12个01’”;字符串2程序代码是：输出“ N ( i )”( i =1-8,N1=N2=2, N ( j )= N ( j -1)+ N ( j ), j =3-8)。
不难发现，这两个程序代码要比字符串本身要简短，尤其是字符串规律不变、数量增加时。
例如，不是12个“01”，而是12万个“01”，代码只要把12改成12万就可以，代码增加长度可以忽略不计。与之形成鲜明对比的是，逐一写下来长度会暴涨，字符串2也类似。

如是定义柯尔莫哥洛夫复杂度后，我们可以形容字符串1和字符串2复杂度比较低，因为我们可以找到比字符串本身更简单说法来描述。
相反，字符串3复杂度比较高，因为找不到比字符串本身更简单描述。你可以描述它是“随便打出来的字符串”，但这种描述不精准、不符合要求，因为“随便打出来的字符串”未必就是这个字符串，可能是其它字符串。

简单来说，柯尔莫哥洛夫复杂度理论，也称为[算法信息论](https://zhida.zhihu.com/search?content_id=218554500&content_type=Article&match_order=1&q=%E7%AE%97%E6%B3%95%E4%BF%A1%E6%81%AF%E8%AE%BA&zhida_source=entity)，假定字符串与生成字符串最短计算机程序长度一样复杂。每一个字符串，都去找一个能生成该字符串最短算法或者程序。

如果这个程序代码长度很短，就说字符串“几乎没有算法内容”，较为简单；相反，如果需要一个长程序来生成字符串，那么“有更多算法内容”，较为复杂。一言以蔽之，对应生成该字符串最短程序长度越长，字符串复杂度就越高。


### Application of Kolmogorov Complexity
> 🔗 https://zhuanlan.zhihu.com/p/586889341

理解柯尔莫哥洛夫复杂度涵义以及不可计算性后，我们就可以借鉴运用到各个领域。

比如说，过滤规则。
在过滤器中， 提到，在信息过载时代，构建、筛选和运用合适过滤器很关键。柯尔莫哥洛夫复杂度，可以作为一个有效过滤规则。
有些书几十万个字符串，但柯尔莫哥洛夫复杂度可能很低，也许1000个字符就足以描述清楚，其它内容并没有多大信息量。
相反，有些书柯尔莫哥洛夫复杂度很大，例如有些经典，信息量很大，常读常新，相关解读文章字符数加起来，可能远远超过原书本身。虽然书籍柯尔莫哥洛夫复杂度大，未必就好看，例如，有些网络爽文字数很多，但柯尔莫哥洛夫复杂度小，是一些人休闲之好，但如果追求提高认知深度，可资选书参考。
类似的，电影等作品也是如此。有些电影柯尔莫哥洛夫复杂度大，看起来费脑，但可以解读出很多内容，甚至电影导演都不了解内容，常看常新。

比如说，简单追求。
读友们知道[奥卡姆剃刀](https://zhida.zhihu.com/search?content_id=218554500&content_type=Article&match_order=1&q=%E5%A5%A5%E5%8D%A1%E5%A7%86%E5%89%83%E5%88%80&zhida_source=entity)是指，如无必要，勿增实体。回顾前面三个字符串描述过程，也是在运用奥卡姆剃刀。如果能用更简练描述，为什么要用更冗长描述呢？
类似的，所有学科都在追求简单。以理论物理学为例，我们力求用精简但强大定律来总结海量观测和实验成果。也就是说，我们一直在不停编写可以诠释这个世界最简单程序。
其实，生命本身就是从简单到复杂典例。一个受精卵遵循简短基因程序，最后长大成人。从这个视角来看，基因科学就是在探索诠释生命最简单程序。
值得注意的是，爱因斯坦提醒我们，追求简单但不是过分简单，在评估柯尔莫哥洛夫复杂度时我们要审慎。
例如，也许可以在某些字符串局部找到某种规律，但应用到整体可能就会出错，因为这个局部规律并不是整体都符合。

比如说，意义探索。
在纽约大学计算机科学教授诺森·扬诺夫斯基看来，柯尔莫哥洛夫复杂度不可计算定理，可能是数理逻辑中最深刻定理之一。
他认为，这个定理等于是说，不管你对一系列事件规律怎么总结，提出一个多么深刻解释，你也永远都不知道还有没有更好总结和更深解释。
这种不可能恰恰给人以希望。如果真有最佳总结和解释，一旦找到，那就再也没有探索必要。
每个人一辈子就是一连串事件，所有人的所有事件就构成历史，如果对于这些事件意义、模式和规律解读永无止境，那么无论何时何地都有探索空间。
也就是说，人生因为柯尔莫哥洛夫复杂度不可计算而充满意义，变得有趣。

在词条的最后， 要提醒的是，注意运用极限思维。
有些极限，例如不可能制造出永动机，告诉我们不要徒劳；有些极限，例如柯尔莫哥洛夫复杂度不可计算，提醒我们永不止步。



## Ref
[柯尔莫哥洛夫复杂度 - 工管阿T的文章 - 知乎]: https://zhuanlan.zhihu.com/p/586889341
