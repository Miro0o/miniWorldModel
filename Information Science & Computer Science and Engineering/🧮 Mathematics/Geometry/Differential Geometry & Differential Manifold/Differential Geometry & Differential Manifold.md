# Differential Geometry & Differential Manifold

[TOC]



## Res
### Related Topics
↗ [Mathematical Analysis (& Analytical Mathematics)](../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)
- ↗ [Differential Calculus & Derivative of Function](../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Differential%20Calculus%20&%20Derivative%20of%20Function/Differential%20Calculus%20&%20Derivative%20of%20Function.md)

↗ [Topology](../../Topology/Topology.md)


### Learning Resources
https://www.vdgf.space/
- [可视化微分几何和形式 (上)](https://github.com/haoxins/haoxins.github.io/blob/main/2024/math-differential-geometry-1.md)
- [可视化微分几何和形式 (下)](https://github.com/haoxins/haoxins.github.io/blob/main/2024/math-differential-geometry-2.md)
[微分几何与形式：可视化方法 | TRISTAN NEEDHAM 的 五幕数学剧](https://zhuanlan.zhihu.com/p/441673512)


### Other Resources



## Intro
> 🔗 https://zh.wikipedia.org/wiki/%E5%BE%AE%E5%88%86%E5%87%A0%E4%BD%95

**微分幾何**研究[微分流形](https://zh.wikipedia.org/wiki/%E5%BE%AE%E5%88%86%E6%B5%81%E5%BD%A2 "微分流形")的幾何性質，是現代[數學](https://zh.wikipedia.org/wiki/%E6%95%B8%E5%AD%B8 "數學")中的一主流研究方向，也是[廣義相對論](https://zh.wikipedia.org/wiki/%E5%BB%A3%E7%BE%A9%E7%9B%B8%E5%B0%8D%E8%AB%96 "廣義相對論")的基礎，與[拓撲學](https://zh.wikipedia.org/wiki/%E6%8B%93%E6%92%B2%E5%AD%B8 "拓撲學")、[代數幾何](https://zh.wikipedia.org/wiki/%E4%BB%A3%E6%95%B8%E5%B9%BE%E4%BD%95 "代數幾何")及[理論物理](https://zh.wikipedia.org/wiki/%E7%90%86%E8%AE%BA%E7%89%A9%E7%90%86 "理论物理")關係密切。

古典微分几何起源于微积分，主要内容为曲线论和曲面论。[歐拉](https://zh.wikipedia.org/wiki/%E6%AD%90%E6%8B%89 "歐拉")、[蒙日](https://zh.wikipedia.org/wiki/%E8%92%99%E6%97%A5 "蒙日")和[高斯](https://zh.wikipedia.org/wiki/%E9%AB%98%E6%96%AF "高斯")被公认为古典微分几何的奠基人。近代微分几何的创始人是[黎曼](https://zh.wikipedia.org/wiki/%E9%BB%8E%E6%9B%BC "黎曼")，他在1854年创立了[黎曼几何](https://zh.wikipedia.org/wiki/%E9%BB%8E%E6%9B%BC%E5%87%A0%E4%BD%95 "黎曼几何")（实际上黎曼提出的是[芬斯勒几何](https://zh.wikipedia.org/wiki/%E8%8A%AC%E6%96%AF%E5%8B%92%E5%87%A0%E4%BD%95 "芬斯勒几何")），这成为了近代微分几何的主要内容，并在[相对论](https://zh.wikipedia.org/wiki/%E7%9B%B8%E5%AF%B9%E8%AE%BA "相对论")有极为重要的作用。[埃利·嘉当](https://zh.wikipedia.org/wiki/%E5%9F%83%E5%88%A9%C2%B7%E5%98%89%E5%BD%93 "埃利·嘉当")和[陈省身](https://zh.wikipedia.org/wiki/%E9%99%88%E7%9C%81%E8%BA%AB "陈省身")等人曾在微分几何领域做出极为杰出的贡献。

微分几何的工具也就是流形上的微积分：包括对于[流形](https://zh.wikipedia.org/wiki/%E6%B5%81%E5%BD%A2 "流形")，[切丛](https://zh.wikipedia.org/wiki/%E5%88%87%E4%B8%9B "切丛")，[余切丛](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%88%87%E4%B8%9B "余切丛")，[微分形式](https://zh.wikipedia.org/wiki/%E5%BE%AE%E5%88%86%E5%BD%A2%E5%BC%8F "微分形式")，[外微分](https://zh.wikipedia.org/wiki/%E5%A4%96%E5%BE%AE%E5%88%86 "外微分")，p![{\displaystyle p}](https://wikimedia.org/api/rest_v1/media/math/render/svg/81eac1e205430d1f40810df36a0edffdc367af36)-形式在p![{\displaystyle p}](https://wikimedia.org/api/rest_v1/media/math/render/svg/81eac1e205430d1f40810df36a0edffdc367af36)维子流形上的积分以及[斯托克斯定理](https://zh.wikipedia.org/wiki/%E6%96%AF%E6%89%98%E5%85%8B%E6%96%AF%E5%AE%9A%E7%90%86 "斯托克斯定理")，[楔积](https://zh.wikipedia.org/wiki/%E6%A5%94%E7%A9%8D "楔积")，和[李导数](https://zh.wikipedia.org/wiki/%E6%9D%8E%E5%AF%BC%E6%95%B0 "李导数")的研究。这些都和多变量微积分相关；但对于几何上的应用来讲，必须发展一种在某种意义上和特定坐标系无关的方法。微分几何的特殊概念可以说是那些体现几何本质的二阶导数：[曲率](https://zh.wikipedia.org/wiki/%E6%9B%B2%E7%8E%87 "曲率")的很多表现方式。

可微流形是一个拓扑空间，它有一个开覆盖，其中的每个开集同胚于$R^{n}$中的一个开单位球。并且，如果$f$,$g$是其中两个同胚映射，则函数$f^{-1}\circ g$无限可微。我们称一个函数无限可微，如果它和每个同胚的复合是从开球到R![{\displaystyle R}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b0bfb3769bf24d80e15374dc37b0441e2616e33)的无限可微函数。

在流形的每一点，有一个该点的[切空间](https://zh.wikipedia.org/wiki/%E5%88%87%E7%A9%BA%E9%97%B4 "切空间")，它由每个从该点离开进行运动的所有可能的速度（方向和大小）所组成。对一个n维流形，每点的切空间是一个n维向量空间，或者说是一个**R**n。切空间有多种定义。其中一个是作为所有在该点取值为0的函数组成的线性空间的对偶空间，除以 所有取值为0并且一阶导数为0的函数空间（所得到的余空间）。导数为0可以定义为“和任何可微的从实数到该流形的函数的复合的导数为0”，因而只需要用到可微性。

[向量场](https://zh.wikipedia.org/wiki/%E5%90%91%E9%87%8F%E5%A0%B4 "向量场")是从流形到它的切空间的并集（[切丛](https://zh.wikipedia.org/wiki/%E5%88%87%E4%B8%9B "切丛")）的函数，在每一点所取的值是该点的切空间的一个元素。这样的映射称为[纤维丛](https://zh.wikipedia.org/wiki/%E7%BA%A4%E7%BB%B4%E4%B8%9B "纤维丛")的[截面](https://zh.wikipedia.org/wiki/%E6%88%AA%E9%9D%A2_\(%E7%BA%A4%E7%BB%B4%E4%B8%9B\) "截面 (纤维丛)")。 向量场可微，如果该向量场应用到每个可微函数都得到一个可微函数。向量场可以看作是时不变的微分方程组。从实数到流形的可微函数是流形上的曲线。这给了一个从实数到切空间的函数：曲线上每点的速度。一条曲线称为一个向量场的一个解，如果曲线每点的速度和向量场在该点的值相等。

交错k维线性形式是向量空间V的对偶空间V\*的反对称k阶向量积的一个元素。k微分形式就是在流形的每一点选取一个这样的交错k形式--V在这里就是该点的切空间。如果它作用在k个可微向量场上的结果是流形上的一个可微函数，则称它可微。体积形式是维数和流形相同的微分形式。



## Ref
[【数学知识】流形学习概述 - 知乎用户x4qAn9的文章 - 知乎]: https://zhuanlan.zhihu.com/p/363707948
