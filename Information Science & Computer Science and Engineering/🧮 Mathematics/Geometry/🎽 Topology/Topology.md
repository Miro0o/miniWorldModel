# Topology

[TOC]



## Res
### Related Topics


### Learning Resources
https://friedl.app.uni-regensburg.de/topologynotes.html
Topology lecture notes:
- The complete [Full topology lectures notes (4785 pages)](https://friedl.app.uni-regensburg.de/papers/1t-total-public-october-7-2024.pdf)
- Lecture notes for für [Algebraic topology I-III (1277 pages)](https://friedl.app.uni-regensburg.de/papers/1t-total--algebraic-topology-3.5.-final-v2.pdf)
- Lecture notes for für [Knot theory (248 pages)](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

![](../../../../Assets/Pics/Screenshot%202026-04-26%20at%2014.53.41.png)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Topology

**Topology** (from the [Greek](https://en.wikipedia.org/wiki/Greek_language "Greek language") words [τόπος](https://en.wiktionary.org/wiki/%CF%84%CF%8C%CF%80%CE%BF%CF%82 "wikt:τόπος"), 'place, location', and λόγος, 'study') is the branch of [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") concerned with the properties of a [geometric object](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object") that are preserved under [continuous](https://en.wikipedia.org/wiki/Continuous_function "Continuous function") [deformations](https://en.wikipedia.org/wiki/Deformation_theory "Deformation theory"), such as [stretching](https://en.wikipedia.org/wiki/Stretch_factor "Stretch factor"), [twisting](https://en.wikipedia.org/wiki/Torsion_\(mechanics\) "Torsion (mechanics)"), crumpling, and bending; that is, without closing holes, opening holes, tearing, gluing, or passing through itself.

A [topological space](https://en.wikipedia.org/wiki/Topological_space "Topological space") is a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") endowed with a structure, called a _[topology](https://en.wikipedia.org/wiki/Topology_\(structure\) "Topology (structure)")_, which allows defining continuous deformation of subspaces, and, more generally, all kinds of [continuity](https://en.wikipedia.org/wiki/List_of_continuity-related_mathematical_topics "List of continuity-related mathematical topics"). [Euclidean spaces](https://en.wikipedia.org/wiki/Euclidean_space "Euclidean space") and more generally, [metric spaces](https://en.wikipedia.org/wiki/Metric_space "Metric space") are examples of topological spaces, as any distance or metric defines a topology. The deformations that are considered in topology are [homeomorphisms](https://en.wikipedia.org/wiki/Homeomorphism "Homeomorphism") and [homotopies](https://en.wikipedia.org/wiki/Homotopy "Homotopy"). A property that is invariant under such deformations is a [topological property](https://en.wikipedia.org/wiki/Topological_property "Topological property"). The following are basic examples of topological properties: the [dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension "Lebesgue covering dimension"), which allows distinguishing between a [line](https://en.wikipedia.org/wiki/Line_\(geometry\) "Line (geometry)") and a [surface](https://en.wikipedia.org/wiki/Surface_\(mathematics\) "Surface (mathematics)"); [compactness](https://en.wikipedia.org/wiki/Compact_space "Compact space"), which allows distinguishing between a line and a circle; [connectedness](https://en.wikipedia.org/wiki/Connectedness "Connectedness"), which allows distinguishing a circle from two non-intersecting circles.

The ideas underlying topology go back to [Gottfried Wilhelm Leibniz](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz "Gottfried Wilhelm Leibniz"), who in the 17th century envisioned the _geometria situs_ and _analysis situs_. [Leonhard Euler](https://en.wikipedia.org/wiki/Leonhard_Euler "Leonhard Euler")'s [Seven Bridges of Königsberg](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg "Seven Bridges of Königsberg") problem and [polyhedron formula](https://en.wikipedia.org/wiki/Polyhedron_formula "Polyhedron formula") are arguably the field's first theorems. The term _topology_ was introduced by [Johann Benedict Listing](https://en.wikipedia.org/wiki/Johann_Benedict_Listing "Johann Benedict Listing") in the 19th century, although, it was not until the first decades of the 20th century that the idea of a topological space was developed.

> 🔗 https://thzt.github.io/2018/02/09/semantics-7/

拓扑学，被人们戏称橡皮膜上的几何学，它主要研究在连续变换下保持不变的几何性质，例如，连通性和紧致性。

这里我们先不展开，主要看一下在拓扑学中是怎么建立数学结构的。


**子集族**
设$X$是一个非空集合，$2^X$​​是$X$的幂集（所有子集构成的集合），
把$2​^X$​​的子集（即以$X$的一部分子集为成员的集合）称为$X$的**子集族**。

  
**拓扑空间**
设$X$是一个非空集合，$X$的一个子集族$τ$称为$X$的一个**拓扑**，
如果它满足
（1）$X$和$∅$都包含在$τ$中
（2）$τ$中任意多个成员的并集仍在$τ$中
（3）$τ$中有限多个成员的交集仍在$τ$中

集合$X$和它的一个拓扑$τ$一起称为一个**拓扑空间**，记作$(X,τ)$。称$τ$中的成员为这个拓扑空间的**开集**。

从定义看出，给出集合的一个拓扑就是规定它的哪些子集是开集。


**连续映射**
设 $X$ 和 $Y$ 都是拓扑空间，$f : X \to Y$ 是一个映射。
$x \in X$，如果对于包含 $f(x) \in Y$ 的每一个开集 $V$，必存在包含 $x$ 的开集 $U$，使得 $f(U) \subseteq V$，我们就说 $f$ 在 $x$ 处连续。

如果映射 $f : X \to Y$ 在任一点 $x \in X$ 都连续，则说 $f$ 是**连续映射**。


**同胚映射**
如果 $f : X \to Y$ 是双射，并且 $f$ 及其逆 $f^{-1} : Y \to X$ 都是连续的，则称 $f$ 是一个**同胚映射**，简称**同胚**。

当存在 $X$ 到 $Y$ 的同胚映射时，就称 $X$ 与 $Y$ 同胚，记作 $X \cong Y$。

> [!IMPORTANT] 注意
> 同胚映射中条件 $f^{-1}$ 连续不可忽视，它不能从双射和 $f$ 的连续性推导出来。



## Ref

