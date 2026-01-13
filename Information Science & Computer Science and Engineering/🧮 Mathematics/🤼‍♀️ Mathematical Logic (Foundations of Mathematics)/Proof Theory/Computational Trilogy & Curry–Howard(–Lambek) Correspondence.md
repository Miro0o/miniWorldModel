# Computational Trilogy & Curry–Howard(–Lambek) Correspondence

[TOC]



## Res
### Related Topics
↗ [Programming Language Theory (PLT)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
↗ [Formal Semantics and Programming Language](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)

↗ [Theory of Computation](../😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)

↗ [Mathematical Logic (Foundations of Mathematics)](../Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
- ↗ [Mathematical Logic Basics (Formal Logic & Its Semantics)](../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic%20&%20Its%20Semantics).md)
↗ [Logic Programming Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)
- ↗ [Lambda Calculus (λ-Calculus)](../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Higher-Order%20Logic%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)

↗ [Category Theory (范畴论)](../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)
↗ [Type Theory (类型论)](../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)


### Other Resources
👍 https://thzt.github.io/categories/Math/
- [语言背后的代数学（一）：语义解释](https://thzt.github.io/2018/01/14/semantics-1/)
- [语言背后的代数学（二）：初等代数](https://thzt.github.io/2018/01/20/semantics-2/)
- [语言背后的代数学（三）：语义模型](https://thzt.github.io/2018/01/27/semantics-3/)
- [语言背后的代数学（四）：哥德尔定理](https://thzt.github.io/2018/01/30/semantics-4/)
- [语言背后的代数学（五）：Σ代数](https://thzt.github.io/2018/02/03/semantics-5/)
- [语言背后的代数学（六）：Henkin模型](https://thzt.github.io/2018/02/04/semantics-6/)
- [语言背后的代数学（七）：数学结构](https://thzt.github.io/2018/02/09/semantics-7/)
- [语言背后的代数学（八）：范畴](https://thzt.github.io/2018/02/11/semantics-8/)
- [语言背后的代数学（九）：笛卡尔闭范畴](https://thzt.github.io/2018/02/19/semantics-9/)
- [语言背后的代数学（十）：Curry-Howard-Lambek correspondance](https://thzt.github.io/2018/02/23/semantics-10/)

📄 https://ncatlab.org/nlab/show/computational+trilogy
A profound cross-disciplinary insight has emerged – starting in the late 1970s, with core refinements in recent years – observing that three superficially different-looking fields of [mathematics](https://ncatlab.org/nlab/show/mathematics),
- [computation](https://ncatlab.org/nlab/show/computation)/[programming languages](https://ncatlab.org/nlab/show/programming+languages)
- [formal logic](https://ncatlab.org/nlab/show/formal+logic)/[type theory](https://ncatlab.org/nlab/show/type+theory)
- [∞-](https://ncatlab.org/nlab/show/%28%E2%88%9E%2C1%29-category)[category theory](https://ncatlab.org/nlab/show/category+theory)/[∞-](https://ncatlab.org/nlab/show/%28%E2%88%9E%2C1%29-topos)[topos theory](https://ncatlab.org/nlab/show/topos+theory) ([algebraic topology](https://ncatlab.org/nlab/show/algebraic+topology))
are but three different perspectives on a single underlying phenomenon at the [foundations of mathematics](https://ncatlab.org/nlab/show/foundations+of+mathematics): computation, logic, and space.

📄 https://seniormars.com/posts/trilogy/



## Intro
> 🔗 https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence

In [programming language theory](https://en.wikipedia.org/wiki/Programming_language_theory "Programming language theory") and [proof theory](https://en.wikipedia.org/wiki/Proof_theory "Proof theory"), the **Curry–Howard correspondence** is the direct relationship between [computer programs](https://en.wikipedia.org/wiki/Computer_program "Computer program") and [mathematical proofs](https://en.wikipedia.org/wiki/Mathematical_proof "Mathematical proof"). It is also known as the **Curry–Howard isomorphism** or **equivalence**, or the **proofs-as-programs** and **propositions-** or **formulae-as-types interpretation**.

It is a generalization of a syntactic [analogy](https://en.wikipedia.org/wiki/Analogy "Analogy") between systems of formal logic and computational calculi that was first discovered by the American [mathematician](https://en.wikipedia.org/wiki/Mathematician "Mathematician") [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry "Haskell Curry") and the [logician](https://en.wikipedia.org/wiki/Logician "Logician") [William Alvin Howard](https://en.wikipedia.org/wiki/William_Alvin_Howard "William Alvin Howard"). It is the link between logic and computation that is usually attributed to Curry and Howard, although the idea is related to the operational interpretation of [intuitionistic logic](https://en.wikipedia.org/wiki/Intuitionistic_logic "Intuitionistic logic") given in various formulations by [L. E. J. Brouwer](https://en.wikipedia.org/wiki/L._E._J._Brouwer "L. E. J. Brouwer"), [Arend Heyting](https://en.wikipedia.org/wiki/Arend_Heyting "Arend Heyting") and [Andrey Kolmogorov](https://en.wikipedia.org/wiki/Andrey_Kolmogorov "Andrey Kolmogorov") (see [Brouwer–Heyting–Kolmogorov interpretation](https://en.wikipedia.org/wiki/Brouwer%E2%80%93Heyting%E2%80%93Kolmogorov_interpretation "Brouwer–Heyting–Kolmogorov interpretation")) and [Stephen Kleene](https://en.wikipedia.org/wiki/Stephen_Kleene "Stephen Kleene") (see [Realizability](https://en.wikipedia.org/wiki/Realizability "Realizability")). The relationship has been extended to include [category theory](https://en.wikipedia.org/wiki/Category_theory "Category theory") as the three-way **Curry–Howard–Lambek correspondence**.


### The Explanation of CHL Correspondence
> 🔗 https://thzt.github.io/2018/02/23/semantics-10/

本文介绍了Curry-Howard-Lambek correspondance，它将本来毫无关系的三个学科联系在了一起，类型理论与程序和计算相关，逻辑学与证明（论）相关，范畴论与模型（论）和代数学相关。

![](../../../../Assets/Pics/Pasted%20image%2020260112182510.png)
<small><a>https://seniormars.com/posts/trilogy/</a></small>

![](../../../../Assets/Pics/Pasted%20image%2020260112182521.png)
<small><a>https://seniormars.com/posts/trilogy/</a></small>

![](../../../../Assets/Pics/Pasted%20image%2020260112182541.png)
<small><a>https://seniormars.com/posts/trilogy/</a></small>

![](../../../../Assets/Pics/Pasted%20image%2020260112182607.png)
<small><a>https://seniormars.com/posts/trilogy/</a></small>


### Physics Interpretation
> 🔗 https://zt.dw.cash/book-foundation-of-phys-in-geo-and-info/volume05-metatheory-logic-computation-experimental-verification/part13-categorical-foundations-physics/chapter24-topos-physical-logic/24-03-curry-howard-lambek-correspondence-physics_en.html EN
> 🔗 https://zt.dw.cash/book-foundation-of-phys-in-geo-and-info/volume05-metatheory-logic-computation-experimental-verification/part13-categorical-foundations-physics/chapter24-topos-physical-logic/24-03-curry-howard-lambek-correspondence-physics.html CN

在 24.1 节和 24.2 节中，我们确立了物理系统的拓扑斯模型和直觉主义逻辑基础。这揭示了物理实在的**构造性（Constructivity）**：物理真理不是静态的 tautology，而是需要通过观测（操作）来建立的。

本节将引入逻辑学、计算机科学与范畴论之间最深刻的同构关系——**柯里-霍华德-兰贝克（Curry-Howard-Lambek, CHL）对应**，并将其推广到物理学领域。我们将证明，物理学、逻辑学和计算理论在深层结构上是**三位一体**的。在 QCA 离散本体论中，**物理系统即类型（Type），物理状态即程序（Program），物理过程即证明（Proof）**。这一视角彻底消除了“物理定律“与“数学逻辑“之间的界限，将宇宙演化诠释为一个巨大的**类型推导与归约（Type Inference and Reduction）** 过程。


### Philosophical Interpretation
> 🔗 https://ncatlab.org/nlab/show/computational+trilogy



## Ref
[为什么会有Curry-Howard correspondence？ - BlackWinter的回答 - 知乎]: https://www.zhihu.com/question/354035182/answer/2804674953
刚刚接触类型论，也对此很好奇，理解不深单纯谈谈自己的想法。

CH correspondence可以看作是[Brouwer–Heyting–Kolmogorov interpretation](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Brouwer%25E2%2580%2593Heyting%25E2%2580%2593Kolmogorov_interpretation)的延伸。布劳威尔、海廷、柯尔莫哥洛夫等人在思考“究竟什么是对一个给定公式的证明” 这个问题时，不约而同地发现证明可以用结构归纳法来定义：寻找从命题A出发到命题B的证明路径，可以看作是递归地构造一个函数，它将命题A的证明映射为命题B的证明（在给定的context下），而且这个函数的构造方式只依赖命题A和B的逻辑结构，不依赖命题A自身的真值。例如，逻辑连接词被视为由subterm的证明到整个公式的证明的映射。（具体的构造方法，上面的wiki链接中有非常好的例子，这里不展开了）。

这样得到的是[构造主义逻辑](https://zhida.zhihu.com/search?content_id=540028079&content_type=Answer&match_order=1&q=%E6%9E%84%E9%80%A0%E4%B8%BB%E4%B9%89%E9%80%BB%E8%BE%91&zhida_source=entity)。在构造主义的语境中，说一个公式是真的，就是说可以直接证明它。构造主义的逻辑要求证明对象必须被直接地构造出来，拒绝接受排中律和二次互反律。(关于构造主义，知乎上有篇文章写的很好 [谈谈数学里的构造主义（constructivism）、直觉主义（intuitionism）和数学基础 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/22389755))

注意证明是被递归地构造出来的，而[lambda演算](https://zhida.zhihu.com/search?content_id=540028079&content_type=Answer&match_order=1&q=lambda%E6%BC%94%E7%AE%97&zhida_source=entity) 其实就是发明了一套形式系统来表达计算的概念，其核心思想就是函数的递归的构造。所以直觉上讲，证明的递归构造和函数的递归构造可以用同一套形式系统表达并不出人意料。（比如函数的Application对应证明中的蕴含箭头的消去，即modus ponens；函数的Abstration对应证明中蕴含箭头的引入）。construct和compute的概念是相通的。

上面说的是我对CH correspondence中的proofs as terms的直观理解。那么另一个PAT，即propositions as types又怎么理解呢？比如，如果将命题逻辑、高阶逻辑、各种模态逻辑分别看作不同粒度的知识表示方法，其中的陈述以不同粒度表达了语义，那么为什么这些陈述恰好有其类型对应物呢？对于这些问题，我暂时还没想明白……

以上都是比较浅显的角度。事实上Curry-Howard correspondence的哲学内涵非常深刻，被认为揭示了数学、逻辑和编程本质上的统一，这称为计算三位一体主义，有兴趣可以看看下面的链接：https://ncatlab.org/nlab/show/computational+trilogy

摘录其中很有意思的一段话：“**基督教三位一体的教义指出，有一个神，显现在三个位格中，圣父、圣子和圣灵，他们共同构成了三位一体。计算三位一体主义认为计算以三种形式表现出来:命题的证明、类型的程序和结构之间的映射。这三个方面产生了三种崇拜:逻辑学，它把证明和命题放在首位;语言，把程序和类型放在首位;范畴，它优先考虑映射和结构。计算三位一体主义的中心教条认为，逻辑、语言和范畴只是一个神圣的计算概念的三种表现形式。**”

[语言背后的代数学（十）：Curry-Howard-Lambek correspondance]: https://thzt.github.io/2018/02/23/semantics-10/
我们看到，只要将逻辑系统中的$\land$和$\to$，替换成简单类型化$\lambda$演算中的$×$和$\to$，那么这两个系统从推导规则上来看是一致的。

逻辑中的命题，对应了简单类型化$\lambda$演算中的类型，逻辑中命题的证明，对应了简单类型化$\lambda$演算中的项（的类型断言）。

命题$A\to B$，可以这样理解，如果该命题可证，则存在将$A$的证明转换为BB的证明的构建过程（construction）。

命题$A\land B$，可以这样理解，它是$A$和$B$的证明序对（pair）。

考虑到以上命题逻辑与类型之间的对应关系，我们可以说，[proofs as programs](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence)。

[LEAN4 入门（introduction） - Lin Mulikas的文章 - 知乎]:https://zhuanlan.zhihu.com/p/678954230
![](../../../../../Assets/Pics/Pasted%20image%2020260109004002.png)
