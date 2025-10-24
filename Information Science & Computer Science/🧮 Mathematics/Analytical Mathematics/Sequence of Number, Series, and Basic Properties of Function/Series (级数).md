# Series (级数)

[TOC]



## Res
### Related Topics
↗ [Sequence of Number](../Sequence%20of%20Number,%20Series,%20and%20Basic%20Properties%20of%20Function/Sequence%20of%20Number.md)

↗ [Catalan Number](../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/Combinatorial%20Counting%20Methods/Advanced%20Counting%20Number/Catalan%20Number.md)
↗ [Sterling Number](../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/Combinatorial%20Counting%20Methods/Advanced%20Counting%20Number/Sterling%20Number.md)



## Intro
> 🔗 什么是级数 - 锤同学LikeMath的文章 - 知乎
> https://zhuanlan.zhihu.com/p/654444116

**级数**是指将数列的项依次用加号连接起来的函数。
典型的级数有调和级数，几何级数、交错级数、幂级数、[傅里叶级数](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0&zhida_source=entity)等。


**级数理论**
**级数理论**是分析学的一个分支；它与另一个分支微积分学一起作为基础知识和工具出现在其余各分支中。二者共同以极限为基本工具，分别从离散与连续两个方面，结合起来研究函数。


**级数理论的意义**
级数是研究函数的重要工具，级数是产生新函数的重要方法，同时又是对已知函数表示、逼近的有效方法，在近似计算中发挥着重要作用。

客观世界是千变万化的，不可能只用[初等函数](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E5%88%9D%E7%AD%89%E5%87%BD%E6%95%B0&zhida_source=entity)来刻画它. 由于**初等函数的有限次运算还是初等函数，不可能产生新的函数**，必须考虑无限次运算，而最基本的运算是加法. 对初等函数进行无穷次相加，就得到[无穷级数](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E6%97%A0%E7%A9%B7%E7%BA%A7%E6%95%B0&zhida_source=entity). 例如对初等函数中最简单的[幂函数](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E5%B9%82%E5%87%BD%E6%95%B0&zhida_source=entity)进行无穷次相加，就得到幂级数；对三角函数进行无穷次相加，就得到三角级数。

==另一方面，由于幂函数、三角函数易于掌握和研究，因而可将一些**复杂函数**尽可能地用**幂函数的无限和（称为[泰勒级数](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E6%B3%B0%E5%8B%92%E7%BA%A7%E6%95%B0&zhida_source=entity)）或三角函数的无限和（称为傅里叶级数）** 来表示==

我们在建立定积分概念的同时，引入[变上限积分](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E5%8F%98%E4%B8%8A%E9%99%90%E7%A7%AF%E5%88%86&zhida_source=entity)定义出了一类新函数，使我们认识到除了初等函数之外的函数类；有了级数理论后，使我们的眼界进一步开阔了，认识到了更广泛的[非初等函数](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E9%9D%9E%E5%88%9D%E7%AD%89%E5%87%BD%E6%95%B0&zhida_source=entity)类型。

级数理论的功能并不仅仅在于引进非初等函数，更重要的是给出了研究这些函数的有效方法，而且即使是初等函数，给出了它们的级数形式，有时会更便于研究它们的性质。我们知道，泰劳公式是用有限项的多项式近似表示函数，它对于研究函数的局部逼近和整体逼近有着重要意义，在此基础上和一定的条件下，我们可以用无穷多项的多项式来准确地表示一个函数，这就是幂级数。利用函数的[幂级数展开式](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E5%B9%82%E7%BA%A7%E6%95%B0%E5%B1%95%E5%BC%80%E5%BC%8F&zhida_source=entity)，对研究函数的性质和计算都有着非常重要的作用。 当然，**能表示成幂级数的函数必须具备任意阶可微的条件，这对于有些性质较差的函数（如分段函数），我们就不能展开成幂级数，此时傅里叶级数却能满足这样的函数的展开。**

级数理论的基础仍然是**极限**，级数是一个无限求和的过程，它与有限求和有着根本的不同，即参与了极限运算，把极限及其运算性质移植到级数中去，就形成了级数的一些独特性质。级数理论的第一个重要概念是收敛性。此外，级数的运算、函数项级数的[一致收敛性](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E4%B8%80%E8%87%B4%E6%94%B6%E6%95%9B%E6%80%A7&zhida_source=entity)、一致收敛级数的分析性质、函数的幂级数展开、函数的[傅里叶级数展开](https://zhida.zhihu.com/search?content_id=233560539&content_type=Article&match_order=1&q=%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E5%B1%95%E5%BC%80&zhida_source=entity)都是级数理论的基本内容。


### Important (Infinite) Series
> ↗ [Sequence of Number](Sequence%20of%20Number.md)

Constant Term Series (常数项级数)
- p series and 🔗 [Harmonic Series](https://en.wikipedia.org/wiki/Harmonic_series_(mathematics))
	- p级数，又称超[调和级数](https://zhida.zhihu.com/search?content_id=202019348&content_type=Article&match_order=1&q=%E8%B0%83%E5%92%8C%E7%BA%A7%E6%95%B0&zhida_source=entity)，是一种特殊的正项级数。当p=1时，p级数退化为调和级数。此外，p级数是重要的正项级数，它能用来判断其它正项级数敛散性。
- 🔗 [Geometric Series](https://en.wikipedia.org/wiki/Geometric_series)
	- 对于几何级数，它是数学类名词，是表示[等比数列](https://zhida.zhihu.com/search?content_id=202019348&content_type=Article&match_order=1&q=%E7%AD%89%E6%AF%94%E6%95%B0%E5%88%97&zhida_source=entity)的前n项和，也称为等比级数。
Function Series (函数项级数)
- Power Series (幂级数)
	- Tylor Series (泰勒级数)
- Trigonometric Series (三角级数)
	- Furier Series (傅立叶级数)



## Series & Infinite Series



## Function Series
### Power Series


### Fouriers Seires



## Ref
[级数和数列有什么区别？ - 知无涯者的回答 - 知乎]: https://www.zhihu.com/question/638824947/answer/3357077213
它们是两种东西⋯
- [级数](https://zhida.zhihu.com/search?content_id=640454524&content_type=Answer&match_order=1&q=%E7%BA%A7%E6%95%B0&zhida_source=entity)是一串[式子](https://zhida.zhihu.com/search?content_id=640454524&content_type=Answer&match_order=1&q=%E5%BC%8F%E5%AD%90&zhida_source=entity)的和，如 $\sum^\infty_{n=0}\frac{1}{n^x}=\frac{1}{0^x}+ \frac{1}{1^x}+ \frac{1}{2^x}+⋯$
- [数列](https://zhida.zhihu.com/search?content_id=640454524&content_type=Answer&match_order=1&q=%E6%95%B0%E5%88%97&zhida_source=entity)是一串式子，如$a_n=\frac{1}{n^x}$是指 $\frac{1}{0^x}, \frac{1}{1^x},\frac{1}{2^x},⋯$
总而言之，级数是一个具体式子，是有值的。而数列是一堆式子
