# CSS Pre-processor

[TOC]



## Res
### Related Topics



## Intro


## Ref
[「译」十分钟入门 Less]: https://juejin.cn/post/6844903455862030344

这篇文章来自 **Danny Markov**， 是我最喜欢的博主之一，实际上我最近翻译的一些文章全是出自他手。在查看本文之前你也可以 [查看原文](https://link.juejin.cn/?target=http%3A%2F%2Ftutorialzine.com%2F2015%2F07%2Flearn-less-in-10-minutes-or-less%2F "http://tutorialzine.com/2015/07/learn-less-in-10-minutes-or-less/")。

我们都知道写 `CSS` 代码是有些枯燥无味的，尤其是面对那些成千上万行 `CSS` 代码的项目。你始终在相同的地方使用相同的规则并且在你的编译器中搜索和替换每次颜色的变化。这需要很多的努力和规则来保持你的 `CSS` 可维护，但它本不应该这样的。

很幸运，网站开发社区已经解决了这个问题，现在我们拥有诸如 [Less](https://link.juejin.cn/?target=http%3A%2F%2Flesscss.org%2F "http://lesscss.org/"), [Sass](https://link.juejin.cn/?target=http%3A%2F%2Fsass-lang.com%2F "http://sass-lang.com/") 和 [Stylus](https://link.juejin.cn/?target=http%3A%2F%2Flearnboost.github.io%2Fstylus%2F "http://learnboost.github.io/stylus/") 之类的预处理器，它们给我们提供了许多优于纯 `CSS` 的好处。
- 变量 - 它可以让你更轻松的在整个样式表中定义和更改值（这个功能 `CSS` 在未来某一天也有可能会实现）。
- 动态计算值 - `CSS` 中最近出了一个 `cal()`， 但它只适合用于长度的计算。
- Mixins - 可以让你重用或者组合样式，而且支持传递参数。
- 函数 - 它为你提供了一些方便的程序去操纵颜色，转换图像等。

使用预处理器的唯一缺点就是，你需要将代码转换为纯 `CSS` 代码，让它能够在浏览器中工作。


