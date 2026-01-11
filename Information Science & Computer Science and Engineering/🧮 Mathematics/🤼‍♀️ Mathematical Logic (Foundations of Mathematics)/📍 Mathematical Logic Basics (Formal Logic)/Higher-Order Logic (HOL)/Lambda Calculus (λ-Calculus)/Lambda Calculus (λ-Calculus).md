# Lambda Calculus (λ-Calculus)

[TOC]



## Res
### Related Topics
↗ [Type and Effect Systems](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🦖%20Type%20and%20Effect%20Systems/Type%20and%20Effect%20Systems.md)


### Other Resources
https://plato.stanford.edu/entries/lambda-calculus/
The Lambda Calculus | Stanford Encyclopedia of Philosophy

[类型和程序设计语言](https://book.douban.com/subject/1318672/)

[Algebraic data type](https://en.wikipedia.org/wiki/Algebraic_data_type)
[Empty product](https://en.wikipedia.org/wiki/Empty_product)
[Foundations for programmming languages](https://book.douban.com/subject/1761918/)
[Practical Foundations for Programming Languages](https://book.douban.com/subject/26782198/)

🎬【编程的尽头是数学？30分钟带你入门计算机的灵魂——λ演算 | 函数式编程 / 核心语法 / 求值过程 / 邱奇数 / 高阶函数 / 递归-哔哩哔哩】 https://b23.tv/719pKNx
课程关键节点时间戳，方便跳转 👇
【一、什么是λ演算？】
00:00 - 开篇：纯粹计算的可视化与核心思想
01:35 - λ演算的起源：希尔伯特问题与三位巨匠
02:30 - 核心语法：变量、函数定义 (λ) 与函数应用
【二、可视化与求值】
04:18 - Tromp图：将λ表达式画出来
05:53 - β-规约 (Beta Reduction)：计算机如何“运行”λ表达式
09:05 - 柯里化 (Currying)：如何处理多参数函数
【三、从零构建万物】
10:48 - 布尔运算：用函数定义“真”与“假”
13:24 - 邱奇数：用函数定义数字与加法
17:18 - 递归的魔法：不动点组合子与阶乘函数
【四、理论的深度与广度】
23:13 - 规约图与邱奇-罗瑟定理
26:21 - 超越基础：从邱奇-图灵论题到函数式编程



## Intro
> 🔗 https://en.wikipedia.org/wiki/Typed_lambda_calculus#
> 🔗 https://en.wikipedia.org/wiki/Lambda_calculus

> 🔗 https://thzt.github.io/2017/09/06/type-2/

现在很多种编程语言都支持匿名函数了，例如，[C# 3.0](https://msdn.microsoft.com/zh-sg/library/bb397687)，[C++ 11](https://zh.wikipedia.org/wiki/C%2B%2B11)和[Java 8](https://en.wikipedia.org/wiki/Java_version_history#Java_SE_8)中的lambda表达式，又例如，[Python 2.2.2](https://docs.python.org/release/2.2.2/ref/ref.html)中的lambda，[ECMAScript 3](http://www-archive.mozilla.org/js/language/E262-3.pdf)的匿名函数，[ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)的箭头函数（arrow function）等等。更不论，[Haskell](https://www.haskell.org/)，[Lisp](https://en.wikipedia.org/wiki/Lisp)，[Standard ML](https://en.wikipedia.org/wiki/Standard_ML)，这些函数式编程语言了。

越来越多的语言拥抱匿名函数，是因为在很多场景中，我们无需给函数事先指定一个名字，并且结合[词法作用域](https://zh.wikipedia.org/zh-hans/%E4%BD%9C%E7%94%A8%E5%9F%9F)和高阶函数，会使某些问题用更直观的方式得以解决。

从理论上来讲，匿名函数具有和一般函数同样的计算能力，使用某些技术手段，可以让匿名函数支持递归运算，从而完成任何[图灵可计算](https://zh.wikipedia.org/zh-hans/%E5%8F%AF%E8%AE%A1%E7%AE%97%E5%87%BD%E6%95%B0)的任务。

然而，要想理解这一切，我们首先还得静下心来，从基础的λ演算开始吧。

λ演算听起来是一个高大上的概念，实际上它只是一套“符号推导系统”，人们首先定义某些合法的符号，然后再定义一些符号推导规则，最后，就可以计算了，从一堆合法的符号得到另一堆，这种推导过程称之为“演算”。

为了让λ演算更容易被接受，我们暂时先岔开话题，看看自然数是怎么定义的。

> ↗ [Natural Number & Peano Axioms](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension/Natural%20Number%20&%20Peano%20Axioms.md)

[λ演算](https://zh.wikipedia.org/wiki/%CE%9B%E6%BC%94%E7%AE%97)，是1930年由邱奇（[Alonzo Church](https://zh.wikipedia.org/zh-hans/%E9%98%BF%E9%9A%86%E4%BD%90%C2%B7%E9%82%B1%E5%A5%87)）发明的一套[形式系统](https://zh.wikipedia.org/zh/%E5%BD%A2%E5%BC%8F%E7%B3%BB%E7%B5%B1)，它是从具体的函数定义，函数调用和函数复合中，抽象出来的数学概念。


### Syntax of Lambda Calculus


### Semantics of Lambda Calculus



## Simply Typed Lambda Calculus
**Syntax** 
- 🔗 https://thzt.github.io/2017/09/19/type-6/

**Semantics**
- 🔗 https://thzt.github.io/2018/02/03/semantics-5/
- Henkin semantics & Henkin model
	- ↗ [σ-Algebra (Sigma Algebra)](../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/σ-Algebra%20(Sigma%20Algebra)/σ-Algebra%20(Sigma%20Algebra).md)
	- ↗ [Henkin Model & Henkin Semantics](Henkin%20Model%20&%20Henkin%20Semantics.md)
- Cartesian closed category
	- ↗ [Cartesian Closed Category (CCC)](../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Cartesian%20Closed%20Category%20(CCC).md)


> 🔗 https://en.wikipedia.org/wiki/Simply_typed_lambda_calculus



## Untyped (Uni-Typed) Lambda Calculus



## Ref
