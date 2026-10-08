# E-Graph & Egg

[TOC]



## Res
🏠 https://egraphs.org/
EGRAPHS Community
- [Home](https://egraphs.org/)
 - [Community Meeting](https://egraphs.org/meeting/)
 - [Workshop](https://egraphs.org/workshop/)
 - [Zulip Chat](https://egraphs.org/zulip/)
The EGRAPHS community brings together researchers and practitioners that use e-graphs and related techniques. E-graphs are data structures for working with large equivalence classes of programs. While originally designed for use in automated theorem provers (such as SMT solvers), they have recently been employed to build new kinds of program optimizers and synthesizers using a technique called _equality saturation_.
Curious what people are doing with e-graphs? Check out [Philip Zucker’s](https://www.philipzucker.com/) page on [Awesome E-graphs](https://github.com/philzook58/awesome-egraphs).


🚧 https://egraphs-good.github.io/
The egg project uses e-graphs to provide a new way to build program optimizers and synthesizers.
📄 https://dl.acm.org/doi/pdf/10.1145/3434304
egg: Fast and Extensible Equality Saturation


🚧 https://github.com/egraphs-good/egglog
This is the repo for the core of the `egglog` engine, which combines the power of equality saturation and Datalog.
📄 https://dl.acm.org/doi/pdf/10.1145/3591239
Beer Together: Unifying Datalog and Equality Saturation


### Related Topics
↗ [Datalog (Data Logic)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/GPL%20(General%20Purpose%20Languages)/📌%20Logic%20Programming%20Languages/Prolog%20(Programmation%20en%20Logique)/Datalog%20(Data%20Logic)/Datalog%20(Data%20Logic).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/E-graph

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), an **e-graph** is a [data structure](https://en.wikipedia.org/wiki/Data_structure "Data structure") that stores an [equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation "Equivalence relation") over [terms](https://en.wikipedia.org/wiki/Term_\(logic\) "Term (logic)") of some [language](https://en.wikipedia.org/wiki/Formal_language "Formal language").


> 🤖 GPT 6.0 Astra

```
                 source expression
                        │
                        ▼
                    E-GRAPH
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
      rewriting      analysis      relations
          │             │             │
          └─────────────┼─────────────┘
                        │
                        ▼
                 new equalities
                 new information
                        │
                        ▼
                     rebuild
                        │
                        ▼
                   fixed point
                        │
                        ▼
                    extractor
                        │
                        ▼
                 best expression
                 


---
所以更准确地讲，一个 EqSat optimizer 可以拆成三个相互独立的问题：

        ① 哪些变换是合法的？
                │
             rewrites
                │
                ▼
        ② 要探索哪些候选？ (① + ② rewrite scheduling)
                │
       e-graph + scheduling
                │
                ▼
        ③ 哪一个候选最好？ (program extraction)
                │
          cost + extraction
                │
                ▼
             output
             

---
# 我会把整个问题分成四层
这个模型可能最适合你现在的理解：  
──────────────────────────────
Layer 1: Semantics
──────────────────────────────

哪些东西真的相等？

x + 0 = x
a(b+c) = ab+ac
...

用户 / theorem / synthesis 决定


──────────────────────────────
Layer 2: Representation
──────────────────────────────

如何同时保存大量 equality？

              E-GRAPH


──────────────────────────────
Layer 3: Search
──────────────────────────────

探索哪些 equality？

rule scheduling
limits
phases
guidance
analysis


──────────────────────────────
Layer 4: Objective
──────────────────────────────

哪个程序最好？

cost model
+
extraction



其中 e-graph 最直接解决的是：
Layer 2。

Equality Saturation 是：
Layer 2 + 一种 Layer 3 策略。

`egg` 给你的是：
Layer 2 + Layer 3 的高效基础设施，同时开放 Layer 1 和 Layer 4 给用户。
```



cost model 怎么得到？

|方法|思路|例子|
|---|---|---|
|手工 cost|人定义每个 operator 的成本|AST size、instruction count|
|analytic model|数学估算 hardware cost|latency、area、memory traffic|
|profiling|真正在机器上跑|GPU kernel latency|
|learned cost model|ML 预测性能|tensor compiler、autotuning|
|solver-based|把全局约束交给 solver|ILP/MILP extraction|
|multi-objective|同时考虑多个指标|latency + area + energy|


### Application of E-Graph & Egg

| 领域                              | e-graph 在做什么                                      |
| ------------------------------- | ------------------------------------------------- |
| **Compiler optimization**       | 搜索等价程序，避免 pass-ordering 问题                        |
| **Tensor / ML compiler**        | 搜索 kernel fusion、tensor graph 等价变换                |
| **DSP / vectorization**         | 从 scalar computation 搜索 SIMD/vectorized 实现        |
| **Linear algebra optimization** | 矩阵代数重写、选择低成本表达式                                   |
| **Numerical computing**         | 搜索数值等价但 floating-point error 更小的公式                |
| **Hardware synthesis**          | 搜索等价 circuit / implementation，再按 latency/area 等抽取 |
| **Program synthesis**           | 用等价关系压缩 program search space                      |
| **CAD / program restructuring** | 从低层几何程序恢复更紧凑、可编辑结构                                |
| **Theorem proving / SMT**       | 维护 equality / congruence，这是 e-graph 的历史来源         |
| **Query optimization**          | 把等价 query/plan 放进共同搜索空间，再按成本选择                    |




## Ref
