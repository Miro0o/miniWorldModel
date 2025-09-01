# Mathematical Logic Basics (Formal Logic)

[TOC]



## Res
### Related Topics
↗ [Logic (and Critical Thinking)](../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy/Philosophy%20by%20Disciplines%20&%20Topics/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Logic Programming Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)
↗ [Logic And Mechanized (Formal) Reasoning](../Logic%20And%20Mechanized%20(Formal)%20Reasoning.md)



## Intro
### Proposition
> 🔗 https://baike.baidu.com/item/%E5%91%BD%E9%A1%8C/119969#4

命题分类
- 亚里士多德在《工具论》，特别是其中的《范畴篇》中，研究了命题的不同形式及其相互关系，根据形式的不同对命题的不同类型进行了分类。亚里士多德把命题首先分为简单的和复合的两类，但他对复合命题并没有深入探讨。他进而把简单命题按质分为肯定的和否定的，按量分为全称、特称和不定的命题。他还提到个体命题，这相当于后来所谓的以专名为主项、以普遍概念为谓项的单称命题。亚里士多德着重讨论了后人以A、E、I、O为代表的4种命题。关于模态命题，他讨论了必然、不可能、可能和偶然这 4个模态词。亚里士多德所说的模态，是指事件发生的必然性、可能性等。
	- 亚里士多德以后的逻辑学家，如泰奥弗拉斯多、麦加拉学派和斯多阿学派的逻辑学家，以及中世纪的逻辑学家等，又对包含有命题联结词"或者"、"并且"、"如果，则"等的复合命题进行了不断的探讨，从而丰富了逻辑学关于命题的学说。
- 康德分类康德根据他的范畴理论对判断作了分类，这个分类对后世的影响很大。康德对判断的分类主要有4个方面：
	- 量，包括全称、特称、单称三种判断；
	- 质，包括肯定、否定、无限（所有S是非P）这几种判断；
	- 关系，有直言（两概念间的关系）、假言（两判断间的关系）、选言（若干判断间的关系）判断；
	- [模态](https://baike.baidu.com/item/%E6%A8%A1%E6%80%81/0?fromModule=lemma_inlink)，有或（概）然、实然、确然几种判断。康德所谓的模态，是指认识的程度。他认为组成假言判断、选言判断的判断，都是或然的。
- 传统逻辑分类
	- 19世纪下半叶欧洲逻辑读本对命题的分类不尽一致。大体说来，按关系即按命题主[谓项](https://baike.baidu.com/item/%E8%B0%93%E9%A1%B9/0?fromModule=lemma_inlink)之间的关系分，有[直言命题](https://baike.baidu.com/item/%E7%9B%B4%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)、[假言命题](https://baike.baidu.com/item/%E5%81%87%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)（后件主谓项的联系以前件为条件）和[选言命题](https://baike.baidu.com/item/%E9%80%89%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)（谓项之间对[主项](https://baike.baidu.com/item/%E4%B8%BB%E9%A1%B9/0?fromModule=lemma_inlink)有选择关系）。从质的角度分，有肯定命题和否定命题。从量的角度分，有全称命题，包括单称命题、普遍命题（凡S是P）和[特称命题](https://baike.baidu.com/item/%E7%89%B9%E7%A7%B0%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)。这些传统逻辑读本在讨论选言命题时，也往往论及[联言命题](https://baike.baidu.com/item/%E8%81%94%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)、分离命题（非A并且非B）等。另外，还有一类可解析命题也是常常提到的。在这类命题中，有一种叫区别命题，其形式为"只有S才是P"；还有一种叫除外命题，其形式为"除是M的S外每个S是P"。
- 形式分析
	- 现代逻辑对命题形式的分析，由于推理的有效性只与推理的前提和结论的形式有关，而与作为前提和结论的命题的具体内容无关。因此，在经典的二值逻辑里，命题可以只看成真（记为T）和假（记为F）两种，并统称为真值。
	- 对命题形式的进一步分析，要深入到最[简单](https://baike.baidu.com/item/%E7%AE%80%E5%8D%95/0?fromModule=lemma_inlink)命题内部的非命题成分。在现代逻辑中，类似"苏格拉底是人"这样的命题，被认为是最简单的命题。若以s代表"苏格拉底",以M代表"人",该类命题就可记为M(s),这表示某一个体s具有性质R。推广来说，最简单的命题的形式为F(x)，可读作[论域](https://baike.baidu.com/item/%E8%AE%BA%E5%9F%9F/0?fromModule=lemma_inlink)中的个体x具有性质F；较为复杂的形式可以有填G(x,y)),可读作论域中的个体x,y)之间具有关系G。在这里，x,y),...称为个体变项；F,G,...称为谓词变项，而F是一元的，G是二元的。一般全称命题的形式是风x(Fx→Gx)，而存在命题、即传统逻辑所谓的特称命题的形式是 ヨx(Fx∧Gx)。所有这些都是现代逻辑里的经典一阶谓词逻辑对命题形式所作的初步分析（见[谓词逻辑](https://baike.baidu.com/item/%E8%B0%93%E8%AF%8D%E9%80%BB%E8%BE%91/0?fromModule=lemma_inlink)）。此外，把量词加之于谓词变项，便形成了[高阶逻辑](https://baike.baidu.com/item/%E9%AB%98%E9%98%B6%E9%80%BB%E8%BE%91/0?fromModule=lemma_inlink)。也还可以引入模态词，或分析疑问句、命令句等等，从而建立有关的逻辑理论。



## Ref
