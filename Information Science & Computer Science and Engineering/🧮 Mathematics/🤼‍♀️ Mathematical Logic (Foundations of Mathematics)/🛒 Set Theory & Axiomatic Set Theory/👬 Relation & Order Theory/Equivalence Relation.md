# Equivalence Relation

[TOC]



## Res
### Related Topics



## Intro
### Equivalence Relation
> 📖  Introduction to the Theory of Computation, 3rd edition, by Michael Sipser

A special type of binary relation, called an **equivalence relation**, captures the notion of two objects being equal in some feature. A binary relation $R$ is an equivalence relation if $R$ satisfies three conditions:
1. $R$ is reflexive if for every $x$, $xRx$;
2. $R$ is symmetric if for every $x$ and $y$, $xRy$ implies $yRx$;
3. $R$ is transitive if for every $x$, $y$, and $z$, $xRy$ and $yRz$ implies $xRz$.

> 🔗 https://blog.csdn.net/sinat_20471177/article/details/118707113

e.g.
设A={1,2...,8}，如下定义A上的关系R：`R={<x,y>|x,y≡∈A∧x≡y(mod3)}`, 其中x≡y(mod3)叫做x与y模3相等（即x除以3的余数与y除以3的余数相等）
`R={ <1,1>,<2,2>,<3,3>,<4,4>,<5,5>,<6,6>,<7,7>,<8,8>,   <1,4>,<1,7>,<4,1>,<4,7>,<7,1>,<7,4>,<2,5>,<2,8>,<5,2>,<5,8>,<8,2>,<8,5>,<3,6>,<6,3>}`
因为$∀x∈A$,有$x≡x(mod3)$
$∀x,y∈A$,有$x≡y(mod3)$,则有$y≡x(mod3)$
$∀x,y,z∈A$,有$x≡y(mod3),y≡z(mod3)$则有$x≡z(mod3)$
同时满足自反性、对称性、传递性，所以R为A上的等价关系
以下为R的关系图：

![](../../../../../Assets/Pics/Pasted%20image%2020251210232011.png)


### Equivalence Class
> 🔗 https://blog.csdn.net/sinat_20471177/article/details/118707113

**定义**：设R为非空集合A上的等价关系, $∀x∈A$，令 $[x]R = \{ y | y∈A∧xRy \}$ 称 $[x]R$ 为 $x$ 关于$R$ 的等价类, 简称为 $x$ 的等价类, 简记为$[x]$。

e.g. 

![](../../../../../Assets/Pics/Pasted%20image%2020251210232011.png)
上图中R的等价类：
- $[1]=[4]=[7]={1,4,7}$
- $[2]=[5]=[8]={2,5,8}$
- $[3]=[6]={3,6}$

等价类的性质：
设R是非空集合A上的等价关系, 则
- $∀x∈A$, [x] 是A的非空子集
- $∀x, y∈A$, 如果 $x R y$, 则 $[x]=[y]$
- $∀x, y∈A$, 如果 $!(xRy)$, 则 $[x]$与$[y]$不交
- $∪\{ [x] | x∈A\}=A$，即所有等价类的并集就是A


### Quotient Set
> 🔗 https://blog.csdn.net/sinat_20471177/article/details/118707113

设 $R$ 为非空集合 $A$ 上的等价关系, 以 $R$ 的所有等价类作为元素的集合称为 $A$ 关于 $R$ 的商集, 记做$A/R$, $A/R = \{ [x]R | x∈A \}$

等价关系与划分的一一对应：（划分：↗ [Set Theory & Axiomatic Set Theory](../Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)）
- 商集 $A/R$ 就是 $A$ 的一个划分；
	-  例如： $A=\{1,2,…,8\}$,$A$关于模3等价关系$R$的商集为：$A/R = \{ \{1,4,7\}, \{2,5,8\}, \{3,6\} \}$，它就是$Ａ$的一个划分
- 不同的商集对应于不同的划分；
	- 任给 $A$ 的一个划分$π$, 如下定义 $A$ 上的关系 $R$：$R = \{<x,y> | x,y∈A∧x \text{与 y 在π的同一划分块中}\}$，则 $R$ 为 $A$ 上的等价关系, 且该等价关系确定的商集是$π$。



## Ref
[等价关系、等价类与划分 | CSDN]: https://blog.csdn.net/sinat_20471177/article/details/118707113
