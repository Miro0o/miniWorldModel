# LEAN

[TOC]



## Res
🏠 https://lean-lang.org
🚧 https://github.com/leanprover/lean4
📂 https://lean-lang.org/lean4/doc/whatIsLean.html
🫂 https://leanprover-community.github.io/learn.html


### Related Topics
↗ [Automated & Generic Theorem Provers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)


### Other Resources
https://github.com/leanprover-community/mathlib4
[Mathlib](https://leanprover-community.github.io/) is a user maintained library for the [Lean theorem prover](https://leanprover.github.io/). It contains both programming infrastructure and mathematics, as well as tactics that use the former and allow to develop the latter.

https://leanprover-community.github.io/mathlib4_docs/

https://adam.math.hhu.de/#/g/leanprover-community/NNG4
Welcome to the Natural Number Game | An introduction to mathematical proof.
In this game, we will build the basic theory of the natural numbers `{0,1,2,3,4,...}` from scratch. Our first goal is to prove that `2 + 2 = 4`. Next we'll prove that `x + y = y + x`. And at the end we'll see if we can prove Fermat's Last Theorem. We'll do this by solving levels of a computer puzzle game called Lean.



## Intro
> 🔗 https://zhuanlan.zhihu.com/p/678954230

**辅助证明简介**
LEAN4 是一门编程语言，也是一个辅助证明器。简单来说，使用 LEAN4 的时候，一侧是代码区域，一侧是交互区域——有点像很多 markdown 笔记的形式。

对于数学家而言，我们需要辅助证明往往是因为：在纸上写证明是纯文字的，很多时候不方便检索不方便查阅定理。所以辅助证明理应能够有效的协助这一方面的需求。

对于写代码而言，我们很多时候写着写着就没有动力了——比如我要实现一个算法，我脑海只有一个雏形，随着我写的代码越来越多，我甚至出现突然的完形崩溃：我忘了我那部分代码写起来是满足了什么功能。

而辅助定理证明，是利用编程语言作为特殊的文字符号，去记录我们的证明过程，并利用计算机的计算功能，对于一些书写工作进行简化。


**为什么能够辅助证明**
首先，人类的数学语言就是建立了[文字符号]和[数学概念]的对应。因此，当你得知有编程语言能够完成[代码]和[数学语言]的对应的时候，理应不该特别惊讶。

首先，我不加证明的声明[对应定理]——“数学语言可以和代码对应”，当然，这个对应的程度如何暂且不提。就想象成一个可以互逆的过程。

![](https://pic4.zhimg.com/v2-f6038d8f6fb2457bf5689bc8e4f0b997_1440w.jpg)

LEAN4 和 数学的关系

假设我们承认上述示意图，那么至少，我们可以实现在电脑上写数学。（但这个底线并没有什么好惊讶的，因为“写数学”本身就是写数学符号，我们用 [LaTex](https://zhida.zhihu.com/search?content_id=239008565&content_type=Article&match_order=1&q=LaTex&zhida_source=entity) 也行……）

所以，精华的部分在于，编译器可以对代码执行计算，也就是能够一定程度上把证明过程给简化。也许，未来的终极是，我们书写一个概念 A，一个概念 B，编译器可以完全的自动把过程写出来。



## Ref
[LEAN4 入门（introduction） - Lin Mulikas的文章 - 知乎]:https://zhuanlan.zhihu.com/p/678954230
![](../../../../../Assets/Pics/Pasted%20image%2020260109004002.png)
