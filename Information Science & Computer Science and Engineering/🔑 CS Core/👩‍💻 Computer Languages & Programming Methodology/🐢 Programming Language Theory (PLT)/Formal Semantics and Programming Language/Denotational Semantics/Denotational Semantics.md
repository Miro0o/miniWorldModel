# Denotational Semantics

[TOC]



## Res
### Related Topics
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Function & Mapping of Set](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)

↗ [Relation & Order Theory](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)
- ↗ [Partial Order & Total Order (Linear Order) & Well-Order](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
	- ↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)
	- ↗ [Domain Theory](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Domain%20Theory/Domain%20Theory.md)

↗ [Metric Semantics (Denotational Semantics Based on Metric Space)](Metric%20Semantics%20(Denotational%20Semantics%20Based%20on%20Metric%20Space).md)

↗ [Functional Programming Languages](../../../Other%20Languages%20for%20Specific%20Areas/Functional%20Programming%20Languages/Functional%20Programming%20Languages.md)
↗ [Haskell](../../../Other%20Languages%20for%20Specific%20Areas/Functional%20Programming%20Languages/Haskell/Haskell.md)


### Other Resources
-  [Denotational semantics - Wikipedia](https://en.wikipedia.org/wiki/Denotational_semantics)
-  [TOWARD A MATHEMATICAL SEMANTICS FOR COMPUTER LANGUAGES — Dana Scott and Christopher Strachey](https://ncatlab.org/nlab/files/ScottStrachey-MathematicalSemantics.pdf)
-  [An introduction to denotational semantics - YouTube](https://www.youtube.com/watch?v=yorSVVbhsCY)
-  [Denotational Design: From Meanings To Programs • Conal Elliott • YOW! 2015 - YouTube](https://www.youtube.com/watch?v=rlyqoYoUumc)



## Intro
> 🔗 https://zh.wikipedia.org/wiki/%E6%8C%87%E7%A7%B0%E8%AF%AD%E4%B9%89

在[计算机科学](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6 "计算机科学")中，**指称语义**（英語：Denotational semantics）是通过构造表达其语义的（叫做指称(denotation)或意义的）[数学对象](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%AF%B9%E8%B1%A1 "数学对象")来形式化[计算机系统](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F "计算机系统")的[语义](https://zh.wikipedia.org/wiki/%E8%AF%AD%E4%B9%89 "语义")的一种方法。编程语言的[形式语义](https://zh.wikipedia.org/wiki/%E5%BD%A2%E5%BC%8F%E8%AF%AD%E4%B9%89 "形式语义")的其他方法包括[公理语义](https://zh.wikipedia.org/wiki/%E5%85%AC%E7%90%86%E8%AA%9E%E7%BE%A9 "公理語義")和[操作语义](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E8%AF%AD%E4%B9%89%E5%AD%A6 "操作语义学")。指称语义方式最初开发来处理一个单一计算机[程序](https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F "程序")定义的系统。后来领域扩展到了由多于一个程序构成的系统，比如[网络](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C "计算机网络")和[并发系统](https://zh.wikipedia.org/w/index.php?title=%E5%B9%B6%E5%8F%91%E7%B3%BB%E7%BB%9F&action=edit&redlink=1 "并发系统（页面不存在）")。

指称语义起源于 [克里斯托弗·斯特雷奇](https://zh.wikipedia.org/wiki/%E5%85%8B%E9%87%8C%E6%96%AF%E6%89%98%E5%BC%97%C2%B7%E6%96%AF%E7%89%B9%E9%9B%B7%E5%A5%87 "克里斯托弗·斯特雷奇") 和 [Dana Scott](https://zh.wikipedia.org/wiki/Dana_Scott "Dana Scott") 在1960年代的工作。在 Strachey 和 Scott 最初开发的时候，指称语义把计算机程序的指称(意义)解释为映射输入到输出的[函数](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0 "函数")。后来证明对于允许包含[递归](https://zh.wikipedia.org/wiki/%E9%80%92%E5%BD%92 "递归")定义的函数和数据结构，这样的元素的程序的指称(意义)定义太受限制了。为了解决这个困难，Scott 介入了基于[域](https://zh.wikipedia.org/wiki/%E5%9F%9F%E7%90%86%E8%AE%BA "域理论")的指称语义的一般性方法[(Abramsky and Jung 1994)](https://zh.wikipedia.org/wiki/%E6%8C%87%E7%A7%B0%E8%AF%AD%E4%B9%89#endnote_Abramsky1994_-)。后来的研究者介入了基于[幂域](https://zh.wikipedia.org/w/index.php?title=%E5%B9%82%E5%9F%9F&action=edit&redlink=1 "幂域（页面不存在）")的方法，来解决[并发系统](https://zh.wikipedia.org/w/index.php?title=%E5%B9%B6%E5%8F%91%E7%B3%BB%E7%BB%9F&action=edit&redlink=1 "并发系统（页面不存在）")的语义的问题[(Clinger 1981)](https://zh.wikipedia.org/wiki/%E6%8C%87%E7%A7%B0%E8%AF%AD%E4%B9%89#endnote_Clinger1981_-)。

粗略的说，指称语义关注找到代表程序所做所为的数学对象。这种对象的搜集叫做域。例如，程序(或程序段)可以被偏函数，或[演员](https://zh.wikipedia.org/wiki/%E6%BC%94%E5%91%98%E6%A8%A1%E5%9E%8B "演员模型")[事件图想定](https://zh.wikipedia.org/wiki/%E6%BC%94%E5%91%98%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%8C%87%E7%A7%B0%E8%AF%AD%E4%B9%89 "演员模型的指称语义")，或用环境和系统之间的博弈表示: 它们都是域的一般性例子。

指称语义的一个重要原则是“语义应当是[复合性](https://zh.wikipedia.org/wiki/%E5%A4%8D%E5%90%88%E6%80%A7%E5%8E%9F%E7%90%86 "复合性原理")的”: 程序段的指称应当建立自它的子段的指称。最简单的例子是: “3 + 4”的意义确定自“3”、“4”和“+”的意义。

指称语义最初被开发为把函数式和顺序式程序建模为映射输入到输出的数学函数的框架。本文第一节描述在这个框架内开发的指称语义。后续章节处理多态、并发等问题。

> 🤖 GPT-5

**指称语义**的核心思想是：给每一个程序（或表达式）分配一个**数学对象**，这个对象就是程序的“意义”。

常见做法是：
- 程序 ↦ 数学函数
- 表达式 ↦ 域（domain）中的元素

例如：
`程序 P : 输入 → 输出`
在指称语义中会被解释成： $⟦P⟧:D→D$

为了处理：
- 递归
- 非终止
- 无限计算

指称语义**传统上**使用的是：
- **偏序集合**
- **域理论（Domain Theory）**
- **不动点理论**

==「除了传统的基于偏序/域理论的指称语义之外，还可以用度量空间来构建程序的数学语义」==
- ↗ [Metric Semantics (Denotational Semantics Based on Metric Space)](Metric%20Semantics%20(Denotational%20Semantics%20Based%20on%20Metric%20Space).md)
- ↗ [Metric Spaces](../../../../../🧮%20Mathematics/Topology/Point-set%20(General)%20Topology/Metric%20Spaces.md)



## Ref
[Expression-oriented programming language | wikipedia]: https://en.wikipedia.org/wiki/Expression-oriented_programming_language
