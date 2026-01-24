# Lambda Calculus ($\lambda$-Calculus)

[TOC]



## Res
### Related Topics
↗ [Type and Effect Systems](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🦖%20Type%20and%20Effect%20Systems/Type%20and%20Effect%20Systems.md)
↗ [Type Analysis](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Type%20Analysis/Type%20Analysis.md)
↗ [Type Theory (类型论)](../../🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)

↗ [Functional Models & Languages](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Database%20Languages/Object-Based%20Data%20Model%20Languages/Functional%20Models%20&%20Languages/Functional%20Models%20&%20Languages.md)
↗ [Functional Programming Languages](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Functional%20Programming%20Languages/Functional%20Programming%20Languages.md)

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

↗ [Function & Mapping of Set](../../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)
↗ [Number Sequence](../../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)
- Recurrence Relation (递推关系) & Recursion (递归)
- Generating Function (生成函数 /母函数)

↗ [Formal Verification & Analysis Programming Languages](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/Formal%20Verification%20&%20Analysis%20Programming%20Languages.md)
- ↗ [LEAN](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/LEAN.md)


### Learning Resources
https://www.irif.fr/~mellies/mpri/mpri-ens/biblio/Selinger-Lambda-Calculus-Notes.pdf
Lecture Notes on the Lambda Calculus | Peter Selinger
Department of Mathematics and Statistics | Dalhousie University, Halifax, Canada

This is a set of lecture notes that developed out of courses on the lambda calculus that I taught at the University of Ottawa in 2001 and at Dalhousie University in 2007 and 2013. Topics covered in these notes include the untyped lambda calculus, the Church-Rosser theorem, combinatory algebras, the simply-typed lambda calculus, the Curry-Howard isomorphism, weak and strong normalization, polymorphism, type inference, denotational semantics, complete partial orders, and the language PCF.

https://plato.stanford.edu/entries/lambda-calculus/
The Lambda Calculus | Stanford Encyclopedia of Philosophy

[类型和程序设计语言](https://book.douban.com/subject/1318672/)

[Foundations for programmming languages](https://book.douban.com/subject/1761918/)
[Practical Foundations for Programming Languages](https://book.douban.com/subject/26782198/)


### Other Resources
[Algebraic data type](https://en.wikipedia.org/wiki/Algebraic_data_type)
[Empty product](https://en.wikipedia.org/wiki/Empty_product)

🎬 https://youtu.be/RcVA8Nj6HEo?si=tebv9NwHVa5dz6m7
What is PLUS times PLUS?
🎬 👍【编程的尽头是数学？30分钟带你入门计算机的灵魂——λ演算 | 函数式编程 / 核心语法 / 求值过程 / 邱奇数 / 高阶函数 / 递归-哔哩哔哩】 https://b23.tv/719pKNx
课程关键节点时间戳，方便跳转 👇
- 【一、什么是λ演算？】
	- 00:00 - 开篇：纯粹计算的可视化与核心思想
	- 01:35 - λ演算的起源：希尔伯特问题与三位巨匠
	- 02:30 - 核心语法：变量、函数定义 (λ) 与函数应用
- 【二、可视化与求值】
	- 04:18 - Tromp图：将λ表达式画出来
	- 05:53 - β-规约 (Beta Reduction)：计算机如何“运行”λ表达式
	- 09:05 - 柯里化 (Currying)：如何处理多参数函数
- 【三、从零构建万物】
	- 10:48 - 布尔运算：用函数定义“真”与“假”
	- 13:24 - 邱奇数：用函数定义数字与加法
	- 17:18 - 递归的魔法：不动点组合子与阶乘函数
- 【四、理论的深度与广度】
	- 23:13 - 规约图与邱奇-罗瑟定理
	- 26:21 - 超越基础：从邱奇-图灵论题到函数式编程



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


### Syntax of $\lambda$ Calculus
#### Symbols of $\lambda$ Calculus
> 🔗 https://thzt.github.io/2017/09/06/type-2/

形式上，$\lambda$ 演算由 3 种语法项（term）组成：
1. **变量** $x$ 本身，是一个合法的 $\lambda$ 项。
2. **$\lambda$ 抽象** $\lambda x. t_1$：是一个合法的 $\lambda$ 项，称为从项 $t_1$ 中抽象出 $x$。
3. **$\lambda$ 应用** $t_1 t_2$：是一个合法的 $\lambda$ 项，称为将项 $t_1$ 应用于 $t_2$。

> [!NOTE] 符号简化
> 为了简化描述，通常会省略一些括号，例如 $(\lambda x.(xy))$ 可以简写为 $\lambda x.xy$。对于形如 $\lambda x.t_1$ 的项，“.” 后面会向右包含尽可能多的内容。
#### Deduction Rules
##### $\alpha$-conversion
> 🔗 https://thzt.github.io/2017/09/06/type-2/

**定义：** 设 $\lambda$ 项 $P$ 中包含了 $\lambda x.M$，我们可以把 $M$ 中所有自由出现的 $x$ 全部换成 $y$，即 $\lambda y.[y/x]M$。这种更名变换称为 **$\alpha$ 变换**。
* **自由出现**：指 $x$ 不被其他 $\lambda$ 抽象所绑定。
    * 例如：在 $\lambda x.xy$ 中，$y$ 是自由的，而 $x$ 是被 $\lambda x$ 绑定的。
* **等价关系**：如果 $P$ 可以经过有限步 $\alpha$ 变换转换为 $Q$，就写为 $P \equiv_\alpha Q$。

> [!EXAMPLE] 例子
> $\lambda xy.x(xy) = \lambda x.(\lambda y.x(xy))$
> $\equiv_\alpha \lambda x.(\lambda v.x(xv))$
> $\equiv_\alpha \lambda u.(\lambda v.u(uv)) = \lambda uv.u(uv)$
##### $\beta$-reduction & $\beta$ normal form $\lambda_\beta$
> 🔗 https://thzt.github.io/2017/09/06/type-2/

**定义：** 形如 $(\lambda x.M)N$ 的 $\lambda$ 项，可以经由 $\beta$ 变换转换为 $[N/x]M$，指的是把 $M$ 中所有自由出现的 $x$ 都换成 $N$。
* **记号**：如果 $P$ 可以经过有限步 $\beta$ 变换转换为 $Q$，写为 $P \rhd_\beta Q$。
* **$\beta$ 范式 ($\beta$ normal form)**：某些 $\lambda$ 项可以无限进行 $\beta$ 变换，而那些最终会终止的 $\beta$ 变换的结果，称为 **$\beta$ 范式**。

> [!EXAMPLE] 例子
> * $(\lambda x.x(xy))N \rhd_\beta N(Ny)$
> * $(\lambda x.xx)(\lambda x.xx) \rhd_\beta [(\lambda x.xx)/x](xx) = (\lambda x.xx)(\lambda x.xx) \rhd_\beta \cdots$（此项无范式，会陷入无限循环）
#### Church Encoding (邱奇编码)
> 🔗 https://thzt.github.io/2017/09/06/type-2/

现在我们有 $\lambda_\beta$ 公理系统了，就可以依照 $\alpha$ 或 $\beta$ 变换，对任意合法的 $\lambda$ 项进行变换。

假设我们有一个 $\lambda$ 项，$\lambda f.\lambda x.x$。
还有另外一个 $\lambda$ 项，$\lambda n.\lambda f.\lambda x.f(nfx)$，记为 $succ$。

我们来计算 $succ(\lambda f.\lambda x.x)$：
可得，$(\lambda n.\lambda f.\lambda x.f(nfx))(\lambda f.\lambda x.x) \rhd_\beta \lambda f.\lambda x.fx$。
我们再运用一次 $succ$，$succ(\lambda f.\lambda x.fx) \rhd_\beta \lambda f.\lambda x.f(fx)$。

我们发现每次应用 $succ$，都会给 $\lambda f.\lambda x.x$ 中加一个 $f$。最终我们可以得到以下这些项：
* $\lambda f.\lambda x.x$
* $\lambda f.\lambda x.fx$
* $\lambda f.\lambda x.f(fx)$
* $\lambda f.\lambda x.f(f(fx))$
* $\cdots$
* $\lambda f.\lambda x.f^n x$

如果我们记 $\lambda f.\lambda x.x \equiv 0$, $\lambda f.\lambda x.fx \equiv 1, \cdots, \lambda f.\lambda x.f^n x \equiv n$，我们就得到了自然数的另一种表示方式，称之为**邱奇编码**。
#### CL (Combinatory Logic) & $CL_w$
↗ [Combinatory Logic](../Combinatory%20Logic.md)

> 🔗 https://thzt.github.io/2017/09/07/type-3/

本文我们用公理化的方法，创建了另一个形式系统$CL_w$​​，接着，我们发现$CL_w$​​实际上是与$λ​_β$​​等价的。


### Semantics of Lambda Calculus



## Visualization of Lambda Calculus
### Tromp Diagrams
🏠 https://tromp.github.io/cl/diagrams.html
Lambda Diagrams are a graphical notation for closed lambda terms, in which abstractions (lambdas) are represented by horizontal lines, variables by vertical lines emanating down from their binding lambda, and applications by horizontal links connecting the leftmost variables. In the alternative style, applications link the nearest deepest variables, for a more stylistic, if less uniform, look.



## Untyped (Uni-Typed) Lambda Calculus



## Typed Lambda Calculus
> [!links]
> ↗ [Type Theory (类型论)](../../🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)
> ↗ [Type and Effect Systems](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🦖%20Type%20and%20Effect%20Systems/Type%20and%20Effect%20Systems.md)


### Simply Typed Lambda Calculus
> [!links]
> **Syntax** 
> - 🔗 https://thzt.github.io/2017/09/19/type-6/
> 
> **Semantics**
> - 🔗 https://thzt.github.io/2018/02/03/semantics-5/
> - Henkin semantics & Henkin model
> 	- ↗ [σ-Algebra (Sigma Algebra)](../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/σ-Algebra%20(Sigma%20Algebra)/σ-Algebra%20(Sigma%20Algebra).md)
> 	- ↗ [Henkin Model & Henkin Semantics](Henkin%20Model%20&%20Henkin%20Semantics.md)
> - Cartesian closed category
> 	- ↗ [Category Theory (范畴论)](../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Category%20Theory%20(范畴论).md)
> 	- ↗ [Cartesian Closed Category (CCC)](../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🩻%20Category%20Theory%20(范畴论)/Cartesian%20Closed%20Category%20(CCC).md)

> 🔗 https://en.wikipedia.org/wiki/Simply_typed_lambda_calculus


> 🔗 https://thzt.github.io/2017/09/19/type-6/



## Ref
