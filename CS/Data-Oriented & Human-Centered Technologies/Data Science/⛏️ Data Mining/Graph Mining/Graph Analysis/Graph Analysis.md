# Graph Analysis

[TOC]



## Res


## Intro
### Graph Analysis Platforms
↗ [Graph Analysis Platforms](🚣🏻‍♂️%20Graph%20Analysis%20Platforms/Graph%20Analysis%20Platforms.md)


### Graph Computing Engines
↗ [Graph Computing Engines](🔥%20Graph%20Computing%20Engines/Graph%20Computing%20Engines.md)



## 图分析系统发展
由于图分析算法的多样性和分布式计算的复杂性，分布式图分析算法往往需要遵循一定的编程模型。当前的编程模型有`点中心模型“Think-like-vertex”`，`基于矩阵的模型`和`基于子图的模型`等。在这些模型下，涌现出各种图分析系统，如 Pregel、 Apache Giraph、 PowerGraph、Spark GraphX等。

**1. Pregel**
Google 于 2010 年在 SIGMOD 上发表论文《Pregel: a system for large-scale graph processing 》，Pregel在相当长一段时间是Google PageRank的主要计算系统，但没有开源。

**2. Apache Giraph**
Apache Giraph 是Pregel论文的开源实现，以 Hadoop 为基础开发的上层应用，其系统架构和计算模型与 Pregel 保持了一致，同时也在 Pregel 模型上增加了一些新的特性。

**3. PowerGraph**
CMU 于 2012 年在 OSDI 上发表论文《PowerGraph: Distributed Graph-Parallel Computation on Natural Graphs》，PowerGraph后来被集成到GraphLab后成为GraphLab的一个主要底层框架，GraphLab实际上是一个机器学习框架，里面实现了非常多的机器学习算法，之前GraphLab是一个开源项目，但它在接受了两轮投资之后已经由原来的免费项目变成了一个付费试用的项目。

**4. Spark GraphX**
UC Berkeley 于2014年在USENIX上发表论文《 GraphX: Graph Processing in a Distributed Dataflow Framework 》，是Spark 中用于图形和图形并行计算的新组件。在高层次上， GraphX 通过引入一个新的图形抽象来扩展 Spark RDD：一种具有附加到每个顶点和边缘的属性的定向多重图形。为了支持图计算，GraphX 公开了一组基本运算符（例如： subgraph、joinVertices 和 aggregateMessages ）以及 Pregel API 的优化变体。



## Ref
[图分析入门 - 6979阿强的文章 - 知乎]: https://zhuanlan.zhihu.com/p/386614281

[👍 图分析算法的应用]: https://coladrill.github.io/2021/02/17/图分析算法的应用/

> 路径搜索（Pathfinding）
> 中心性算法（Centrality Algorithms）
> 社群发现算法（Community Detection Algorithms）
> 频繁模式挖掘
> 模式匹配


