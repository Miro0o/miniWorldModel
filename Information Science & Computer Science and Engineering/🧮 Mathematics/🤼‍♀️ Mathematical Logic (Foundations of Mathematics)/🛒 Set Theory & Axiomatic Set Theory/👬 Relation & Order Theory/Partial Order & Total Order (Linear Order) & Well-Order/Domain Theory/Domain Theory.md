# Domain Theory

[TOC]



## Res
### Related Topics
↗ [Formal Semantics and Programming Language](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
- ↗ [Denotational Semantics](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Denotational%20Semantics/Denotational%20Semantics.md)

↗ [Function & Mapping of Set](../../../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)

↗ [Topology](../../../../../Topology/Topology.md)
↗ [Measures (Measure Theory)](../../../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/Measures%20(Measure%20Theory).md)


### Other Resources



## Intro
> 🔗 https://zh.wikipedia.org/wiki/%E5%9F%9F%E7%90%86%E8%AE%BA

**域理论**（英語：Domain theory）是研究通常叫做「域」的特定种类[偏序集合](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F%E9%9B%86%E5%90%88 "偏序集合")的[数学](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6 "数学")分支。因此域理论可以被看作是[序理论](https://zh.wikipedia.org/wiki/%E5%BA%8F%E7%90%86%E8%AE%BA "序理论")的分支。这个领域主要应用于[计算机科学](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6 "计算机科学")中，特别是针对[函数式编程语言](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80 "函数式编程语言")，用它来指定[指称语义](https://zh.wikipedia.org/wiki/%E6%8C%87%E7%A7%B0%E8%AF%AD%E4%B9%89 "指称语义")。域理论以非常一般化的方式形式化了逼近和收敛的直觉概念，并与[拓扑学](https://zh.wikipedia.org/wiki/%E6%8B%93%E6%89%91%E5%AD%A6 "拓扑学")有密切联系。在计算机科学中指称语义的一个可作为替代的方式是[度量空间](https://zh.wikipedia.org/wiki/%E5%BA%A6%E9%87%8F%E7%A9%BA%E9%97%B4 "度量空间")。

[Dana Scott](https://zh.wikipedia.org/wiki/Dana_Scott "Dana Scott") 在 1960 年代后期发起对域的研究的主要动机是为 [lambda 演算](https://zh.wikipedia.org/wiki/Lambda_%E6%BC%94%E7%AE%97 "Lambda 演算")找寻[指称语义](https://zh.wikipedia.org/wiki/%E6%8C%87%E7%A7%B0%E8%AF%AD%E4%B9%89 "指称语义")。在这种形式化中，认为“函数”通过在这个语言中的特定项指定。在纯粹[语法](https://zh.wikipedia.org/wiki/%E8%AF%AD%E6%B3%95 "语法")方式下，可以得到从简单函数到接受其他函数作为它的输入参数的函数。再次只使用在这种形式化中的可获得的语法变换，可以获得所谓的[不动点组合子](https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%8A%A8%E7%82%B9%E7%BB%84%E5%90%88%E5%AD%90 "不动点组合子")(其中最著名的是 Y 组合子)；通过定义，它们有如下性质，对于所有函数 _f_ 都有 _f_(**Y**(_f_)) = **Y**(_f_)。

要公式化这样一种指称语义，首先会尝试为 lambda 演算构造一个**模型**，在其中为每个 lambda 项关联上一个真正的(全)函数。这样一种模型将形式化作为纯语法系统的 lambda 演算和作为操纵具体的数学函数的符号系统的 lambda 演算之间的连接。不幸的是，这种模型不能存在，如果存在，它必须包含对应于组合子 **Y** 的一个真正的全函数，它是计算任意输入函数 _f_ 的[不动点](https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%8A%A8%E7%82%B9 "不动点")的函数。不能给予 **Y** 这样的函数，因为某些函数(比如“后继函数”)没有不动点。这个对应于 **Y** 的真正函数至少必须是[偏函数](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%87%BD%E6%95%B0 "偏函数")，对于某些输入必须是未定义的。

Scott 通过形式化"部分"或"不完全"信息的概念来表示仍未返回一个结果的计算来克服这个困难。通过对计算的每个域(比如自然数)考虑一个额外的元素，表示“未定义”输出，就是永不结束的计算的"结果"来建模。此外，计算的域被装备了一个“次序关系”，在其中"未定义结果"是[最小元素](https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E5%85%83 "最小元")。

为 lambda 演算找到模型的一个重要步骤是只考虑保证有最小不动点的那些函数(在这种[偏序集合](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F%E9%9B%86%E5%90%88 "偏序集合")上)。这些函数的集合，与适当的排序一起，再次是这个理论意义上的一个"域"。而限制于所有可获得的函数的一个子集有另一个巨大的好处: 有可能获得包含它们自己的[函数空间](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E7%A9%BA%E9%97%B4 "函数空间")的域，就是得到应用于自身的函数。

除了这些需要的性质，域理论还允许吸引人的直觉释义。同上所述，计算的域总是部分有序的。这种排序表示信息或知识的层次。元素在这个次序上越高，它就更加明确和包含更多的信息。更低的元素表示不完全的知识或中间结果。

接着通过在这个域上重复的应用[单调函数](https://zh.wikipedia.org/wiki/%E5%8D%95%E8%B0%83%E5%87%BD%E6%95%B0 "单调函数")来精制出结果。到达一个[不动点](https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%8A%A8%E7%82%B9 "不动点")等价于完成一个计算。域为这些想法提供了优越的设施，因为可以保证单调函数的不动点的存在，并且在额外的限制下，可以从下面逼近。



## Ref
