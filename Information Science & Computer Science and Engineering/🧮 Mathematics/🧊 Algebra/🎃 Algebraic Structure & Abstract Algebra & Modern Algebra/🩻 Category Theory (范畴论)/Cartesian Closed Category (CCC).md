# Cartesian Closed Category (CCC)

[TOC]



## Res
### Related Topics
↗ [Formal System, Formal Logics, and Its Semantics](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
↗ [Henkin Model & Henkin Semantics](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Henkin%20Model%20&%20Henkin%20Semantics.md)

↗ [Semantic Analysis](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
↗ [Formal Semantics and Programming Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)


### Other Resources



## Intro
> 🔗 https://thzt.github.io/2018/02/19/semantics-9/

**定义域和值域**

在集合论中，函数自变量所有可取值的集合，称为函数的**定义域**，给定函数$f:A→B$，其中$A$就是$f$的定义域，记为$D_f$​​，集合$f(A)=\{f(x)∣x∈A\}$，称为$f$的**值域**，记为$R​_f$​​。

在范畴论中，箭头也有定义域和值域的概念。
- 箭头$f:a→b$，表示了对象$a$和$b$之间的关系，我们称$a$为箭头$f$的**定义域**（domain），记为$dom \ f$，$b$为箭头$f$的**值域**（codomain），记为$cod \ f$。
- 由此，我们还可以定义范畴$C$中，从对象$a$到对象$b$所有箭头的集合，$hom(a,b)={f∣f∈C,dom f=a,cod f=b}$，常被称为[hom-set](https://en.wikipedia.org/wiki/Morphism#Definition)。

笛卡尔闭范畴是一种带有附加结构的范畴，这个名字虽然不是那么熟悉，而实际上，我们经常遇到它。


---
**笛卡尔积**

两个集合 $X$ 和 $Y$ 的笛卡尔积，是以以下所有可能有有序对构成的集合，
$X \times Y = \{ (x, y) | x \in X, y \in Y \}$。


---
**笛卡尔积上的函数**

$f : X \times Y \to Z$，是从笛卡尔积 $X \times Y$ 到 $Z$ 的函数，我们可以用两种不同的视角来看待它：
1. 它是一个一元函数，参数取遍 $X \times Y$ 中的所有元素。
2. 它是一个二元函数，一个参数来自于 $X$，另一个来自于 $Y$。原则上，这两种理解应该是不同的，然而它们却是等价的。


---
**柯里化 (curring)**

笛卡尔闭范畴就是反映这一类性质的数学结构，一个范畴中，定义在乘积对象 $a \times b$ 上的箭头 $f$，总是可以“自然地”由定义在某一个对象 $a$ 或 $b$ 上的箭头来决定。

这就是柯里化（currying）的概念，将一个二元函数柯里化指的是，将它看成一个一元函数，这个函数返回另一个一元函数。

假设 $f : X \times Y \to Z$ 是一个函数，
令 $Z^Y = \{ f | f(y) \in Z, y \in Y \}$ 是所有 $Y$ 到 $Z$ 的函数，
则存在唯一的 $g = X \to Z^Y$，使得 $g(x)(y) = f(x, y), \forall x \in X, y \in Y$。
函数 $g$ 称为 $f$ 的柯里化。

用 hom-set 的术语来表述就是，存在一个一一映射，使得：$$hom(X \times Y, Z) \cong hom(X, Z^Y)$$

---
**Cartesian Closed**

将以上柯里化的概念推广到范畴论中，我们就有，
一个笛卡尔闭范畴（cartesian closed category）$C$，是满足以下几个额外条件的范畴：
1. $C$ 中存在一个对象 $1$，使得对于任意对象 $A \in C$，有唯一的箭头 $A \to 1$，这样的对象 $1$，称为终对象（terminal object）。
2. 对于任意两个对象 $X$ 和 $Y$，范畴 $C$ 中存在一个对象 $X \times Y$，以及两个箭头 $p_1$ 和 $p_2$，使得，$p_1 : X \times Y \to X, p_2 : X \times Y \to Y$。
3. 对于任意两个对象 $Y$ 和 $Z$，范畴 $C$ 中存在一个对象 $Z^Y$，以及一个箭头 $e : Z^Y \times Y \to Z$，使得，对于任意的箭头 $f : X \times Y \to Z$，存在唯一的箭头 $g : X \to Z^Y$，有 $f = e \circ (g \times I)$ 恒成立。
	1. 即，$(e \circ (g \times I))(X \times Y) = e((g \times I)(X \times Y)) = e(Z^Y \times Y) = Z$。其中 $I : Y \to Y$，为对象 $Y$ 的恒等箭头，$Z^Y$ 称为指数对象（exponential object）。

![](../../../../../Assets/Pics/Pasted%20image%2020260112180555.png)



## Ref
[语言背后的代数学（九）：笛卡尔闭范畴]: https://thzt.github.io/2018/02/19/semantics-9/
