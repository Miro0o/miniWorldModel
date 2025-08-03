# Relation & Order Theory

[TOC]



## Res
### Related Topics



## Intro
### Relation
> 📖 离散数学，四川大学计算机学院

世界上的事物都在一定范围内以某种方式互相联系例如天体之间可以用星系来划分，人类之间可以用是否有共同的祖先来定血缘生物，物种之间可以用进化顺序来定先后，化学元素之间可以用外层电子数来决定在元素周期表上的位置等。

类似地，数学或者计算机科学中的研究对象也以各种不同的形式相互联系着：例如，整数之间以大小整除或同余等关系相联系；命题公式之间以是否有相同主合取范式相联系；程序中两个变量可以用是否占有同一内存地址相联系。总之，事物之间总可以根据需要确定相应的关系。

从数学的角度看，这类联系就是某个集合中元素之间存在的关系。本章将用数学语言把这类联系形式化给出关系的一般描述及其表示方法并研究关系的性质，以导出能普遍适用的理论，反过来又能用于指导对实践问题的深入应用。由于一组元素之间的关系常常可以通过每两个元素之间的关系来表达，因而二元（素之间的）关系是最基本的关系，

![computing.excalidraw](../../../../../Assets/Illustrations/Computer%20Science%20Philosophy/computing.excalidraw.md)
#### Function
↗ [Function & Mapping of Set](../Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)


### Order Theory
> 🔗 https://zh.wikipedia.org/zh-cn/%E5%BA%8F%E7%90%86%E8%AE%BA

次序无所不在——至少在数学和相关领域比如[计算机科学](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6 "计算机科学")是这样。你典型遇到的第一个次序是[小学](https://zh.wikipedia.org/wiki/%E5%B0%8F%E5%AD%A6 "小学")数学教育中的[自然数](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E6%95%B0 "自然数")的次序。这个直觉概念很容易扩展到其他[数](https://zh.wikipedia.org/wiki/%E6%95%B0 "数")的集合的排序，比如[整数](https://zh.wikipedia.org/wiki/%E6%95%B4%E6%95%B0 "整数")和[实数](https://zh.wikipedia.org/wiki/%E5%AE%9E%E6%95%B0 "实数")。实际上大于或小于另一个数的概念一般是数系统的基本直觉（尽管你通常还感兴趣于两个数实际的[差](https://zh.wikipedia.org/wiki/%E5%B7%AE "差")，它不能由这个次序给出）。排序的另一个非常熟悉的例子是词典中[词典次序](https://zh.wikipedia.org/w/index.php?title=%E8%AF%8D%E5%85%B8%E6%AC%A1%E5%BA%8F&action=edit&redlink=1 "词典次序（页面不存在）")。

上述类型的次序有特殊性质：每个元素都是可以“比较”于另一个元素，就是说，它或者大于、或者小于、或者等于另一个元素。但是，这不总是想要的要求。一个周知的例子是[集合](https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88_\(%E6%95%B0%E5%AD%A6\) "集合 (数学)")的[子集](https://zh.wikipedia.org/wiki/%E5%AD%90%E9%9B%86 "子集")排序。如果一个集合A包含集合B的所有元素，则 _B_ 被称为小于等于 _A_。然而有些集合不能在这种方式来比较，因为其中每个都包含着其他集合中不存在的某些元素。所以，子集包含是[偏](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F "偏序")次序，对立了前面给出的[全](https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BA%8F "全序")次序。

序理论在一般性架构下捕获了上述例子引发的直觉次序。这是通过指定[关系](https://zh.wikipedia.org/wiki/%E5%85%B3%E7%B3%BB_\(%E6%95%B0%E5%AD%A6\) "关系 (数学)") $\leq$ 必须是数学上次序的一些性质来完成的。这种更加抽象的方式更有意义，因为你可以从一般性架构推导出各种定理，而不用关心任何特定次序的细节。这种洞察可以容易的转换到很多具体应用中。

由次序的各种实践使用所驱动，已经定义了多个特殊种类的有序集合，其中某些已经发展出自己的数学领域。此外，序理论不限制于各种种类的排序关系，还考虑在它们之间的适当的[函数](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0 "函数")。函数的序理论的性质的一个简单例子来自在[数学分析](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90 "数学分析")中常见的[单调函数](https://zh.wikipedia.org/wiki/%E5%8D%95%E8%B0%83%E5%87%BD%E6%95%B0 "单调函数")。



## Ref
