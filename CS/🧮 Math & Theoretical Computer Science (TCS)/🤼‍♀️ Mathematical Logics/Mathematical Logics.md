# MATHEMATICAL Logis

[TOC]



## Res
### Related Topics
Natural Language Logics

↗ [Formal Methods & Formal Verification (FV)](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics%20Methodologies/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)
↗ [Logic Programming Languages](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)

↗ [Static Code Analysis Tools (SCAT)](../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Logic%20Verifies%20&%20Provers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Logic%20Verifies%20&%20Provers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
- etc.


### Other Resources
https://ljmw.readthedocs.io
本网站是逻辑思维普及性网站。 主要收录各类常见的逻辑谬误，并且加以简要分析与介绍。 本网站不是任何类型的逻辑学教程、教材，亦不会系统性地介绍现代逻辑学知识。 想要系统性学习逻辑学、逻辑思维的读者应购买逻辑学教材进行仔细研读。
- 违反逻辑学的基本准则
	- [同一律](https://ljmw.readthedocs.io/jbzz/tyl.html)
	    - [证甲论乙](https://ljmw.readthedocs.io/jbzz/tyl.html#id2)
	    - [稻草人谬误](https://ljmw.readthedocs.io/jbzz/tyl.html#id4)
- 命题逻辑的基本错误
	- [蕴含式前后件误用](https://ljmw.readthedocs.io/mtlj/yunhanshi.html)
	    - [肯定后件](https://ljmw.readthedocs.io/mtlj/yunhanshi.html#id2)
	    - [否定前件](https://ljmw.readthedocs.io/mtlj/yunhanshi.html#id3)
	- [析取、合取式误用](https://ljmw.readthedocs.io/mtlj/xqhq.html)
	    - [肯定选言](https://ljmw.readthedocs.io/mtlj/xqhq.html#id2)
	    - [否定联言](https://ljmw.readthedocs.io/mtlj/xqhq.html#id3)
	- [误用命题关系](https://ljmw.readthedocs.io/mtlj/mtgx.html)
	    - [误用逆命题](https://ljmw.readthedocs.io/mtlj/mtgx.html#id2)
	    - [误用否命题](https://ljmw.readthedocs.io/mtlj/mtgx.html#id4)
	    - [假逆否命题](https://ljmw.readthedocs.io/mtlj/mtgx.html#id5)
- 错误的三段论
- 非形式谬误
	- 非形式谬误指错误之处不在逻辑推理上，而在其他地方。 因此非形式谬误往往不能通过将论述符号化的方法来揭穿。 实际上，有很多非形式谬误根本就没有足够的实质论述、实质推理。
	- [以人论言](https://ljmw.readthedocs.io/fxs/yrly.html)
	    - [诉诸人身](https://ljmw.readthedocs.io/fxs/yrly.html#id2)
	    - [扣帽子](https://ljmw.readthedocs.io/fxs/yrly.html#id3)
	    - [诉诸权威](https://ljmw.readthedocs.io/fxs/yrly.html#id4)
	    - [诉诸民主](https://ljmw.readthedocs.io/fxs/yrly.html#id5)
	    - [无故关联](https://ljmw.readthedocs.io/fxs/yrly.html#id6)



## Intro
> **数理逻辑**（英語：Mathematical logic）是[数学](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6 "数学")的一个分支，其研究对象是对[证明](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E8%AF%81%E6%98%8E "数学证明")和[计算](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97 "计算")这两个直观概念进行符号化以后的[形式系统](https://zh.wikipedia.org/wiki/%E5%BD%A2%E5%BC%8F%E7%B3%BB%E7%BB%9F "形式系统")。数理逻辑是[数学基础](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80 "数学基础")的一个不可缺少的组成部分。主要的子研究领域有[模型论](https://zh.wikipedia.org/wiki/%E6%A8%A1%E5%9E%8B%E8%AE%BA "模型论")，[证明论](https://zh.wikipedia.org/wiki/%E8%AF%81%E6%98%8E%E8%AE%BA "证明论")，[集合论](https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88%E8%AE%BA "集合论")和[可计算性理论](https://zh.wikipedia.org/wiki/%E5%8F%AF%E8%AE%A1%E7%AE%97%E6%80%A7%E7%90%86%E8%AE%BA "可计算性理论")。
> 
> 数理逻辑的研究范围是[逻辑](https://zh.wikipedia.org/wiki/%E9%80%BB%E8%BE%91 "逻辑")中可被数学模式化的部分。以前称为符号逻辑（相对于[哲学逻辑](https://zh.wikipedia.org/wiki/%E5%93%B2%E5%AD%A6%E9%80%BB%E8%BE%91 "哲学逻辑")），又称[元数学](https://zh.wikipedia.org/wiki/%E5%85%83%E6%95%B0%E5%AD%A6 "元数学")。数理逻辑一般着重于研究公理系统的推断能力和表达能力。它也包括分析正确的数学推断来构筑[数学基础](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80 "数学基础")。


## Ref
[也谈数理逻辑]: http://niwatori.io/2017/01/13/mathematical-logic/
[数理逻辑]: https://zh.wikipedia.org/wiki/数理逻辑#数理逻辑和计算机科学的关系

