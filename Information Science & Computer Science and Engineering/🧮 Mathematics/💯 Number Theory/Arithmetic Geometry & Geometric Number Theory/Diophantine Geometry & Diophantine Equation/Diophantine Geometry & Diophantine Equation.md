# Diophantine Geometry & Diophantine Equation

[TOC]



## Res
### Related Topics
↗ [Diophantine Equations (不定方程)](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithms%20Implementation%20For%20Classical%20Problems/🦜%20Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/📌%20Fundamentals/Diophantine%20Equations%20(不定方程).md)


### Other Resources



## Intro
> 💡 https://zh.wikipedia.org/zh-cn/丟番圖方程
>https://en.wikipedia.org/wiki/Diophantine_equation

**丢番图方程**（**Diophantine equation**），又称**不定方程**，是[未知数](https://zh.wikipedia.org/wiki/未知数)只能使用[整数](https://zh.wikipedia.org/wiki/整數)的整数系数[多项式](https://zh.wikipedia.org/wiki/多項式)[等式](https://zh.wikipedia.org/wiki/等式)；即形式如$a_1x_1^{b_1}+a_2x_2^{b_2}+......+a_nx_n^{b_n}=c$ 的等式，并且其中所有的$a_j$、$b_j$和c均是整数。若其中能找到一组整数解$m_1, m_2, ..., m_n$者则称之有整数解。

**丢番图问题**一般可以有数条等式，其数目比未知数的数目少；丢番图问题要求找出对所有等式都成立的整数组合。换言之，丢番图问题定义了代数曲线或者代数曲面，或更为一般的几何形，要求找出其中的栅格点。对丢番图问题的数学研究称为**[丢番图分析](https://zh.wikipedia.org/wiki/丢番图分析)**。线性丢番图方程为线性整数系数多项式等式，即此多项式为次数为0或1的单项式的和。

丢番图方程的名字来源于3世纪[希腊](https://zh.wikipedia.org/wiki/希臘)数学家[亚历山大城](https://zh.wikipedia.org/wiki/亞歷山大城)的[丢番图](https://zh.wikipedia.org/wiki/丢番图)，他曾对这些方程进行研究，并且是第一个将符号引入代数的数学家。

关于丢番图方程的理论的形成和发展是二十世纪数学一个很重要的发展。丢番图方程的例子有[裴蜀等式](https://zh.wikipedia.org/wiki/貝祖等式)、[勾股定理](https://zh.wikipedia.org/wiki/勾股定理)的整数解、[佩尔方程](https://zh.wikipedia.org/wiki/佩尔方程)、[四平方和定理](https://zh.wikipedia.org/wiki/四平方和定理)和[费马最后定理](https://zh.wikipedia.org/wiki/費馬最後定理)等。

> 🔗 https://en.wikipedia.org/wiki/Diophantine_equation

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), a **Diophantine equation** is a [polynomial equation](https://en.wikipedia.org/wiki/Polynomial_equation "Polynomial equation") with [integer](https://en.wikipedia.org/wiki/Integer "Integer") coefficients, for which only integer solutions are of interest. A **linear Diophantine equation** equates the sum of two or more unknowns, with coefficients, to a constant. An **exponential Diophantine equation** is one in which unknowns can appear in [exponents](https://en.wikipedia.org/wiki/Exponent "Exponent").

**Diophantine problems** have fewer equations than unknowns and involve finding integers that solve all equations simultaneously. Because such [systems of equations](https://en.wikipedia.org/wiki/Systems_of_equations "Systems of equations") define [algebraic curves](https://en.wikipedia.org/wiki/Algebraic_curve "Algebraic curve"), [algebraic surfaces](https://en.wikipedia.org/wiki/Algebraic_surface "Algebraic surface"), or, more generally, [algebraic sets](https://en.wikipedia.org/wiki/Algebraic_set "Algebraic set"), their study is a part of [algebraic geometry](https://en.wikipedia.org/wiki/Algebraic_geometry "Algebraic geometry") that is called _[Diophantine geometry](https://en.wikipedia.org/wiki/Diophantine_geometry)_.

The word _Diophantine_ refers to the [Hellenistic mathematician](https://en.wikipedia.org/wiki/Greek_mathematics#Hellenistic "Greek mathematics") of the 3rd century, [Diophantus](https://en.wikipedia.org/wiki/Diophantus "Diophantus") of [Alexandria](https://en.wikipedia.org/wiki/Alexandria "Alexandria"), who made a study of such equations and was one of the first mathematicians to introduce [symbolism](https://en.wikipedia.org/wiki/Mathematical_symbol "Mathematical symbol") into [algebra](https://en.wikipedia.org/wiki/Algebra "Algebra"). The mathematical study of Diophantine problems that Diophantus initiated is now called **Diophantine analysis**.

While individual equations present a kind of puzzle and have been considered throughout history, the formulation of general theories of Diophantine equations, beyond the case of linear and [quadratic](https://en.wikipedia.org/wiki/Quadratic_equation "Quadratic equation") equations, was an achievement of the twentieth century.


**Examples**
In the following Diophantine equations, w, x, y, and z are the unknowns and the other letters are given constants:

| $ax+by=c$                                                     | This is a linear Diophantine equation, related to [Bézout's identity](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity "Bézout's identity").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $w^{3}+x^{3}=y^{3}+z^{3}$                                     | The smallest [nontrivial solution](https://en.wikipedia.org/wiki/Triviality_\(mathematics\)#Trivial_and_nontrivial_solutions "Triviality (mathematics)") in positive integers is 123 + 13 = 93 + 103 = 1729. It was famously given as an evident property of 1729, a [taxicab number](https://en.wikipedia.org/wiki/Taxicab_number "Taxicab number") (also named [Hardy–Ramanujan number](https://en.wikipedia.org/wiki/Hardy%E2%80%93Ramanujan_number "Hardy–Ramanujan number")) by [Ramanujan](https://en.wikipedia.org/wiki/Ramanujan "Ramanujan") to [Hardy](https://en.wikipedia.org/wiki/G._H._Hardy "G. H. Hardy") while meeting in 1917.[1](https://en.wikipedia.org/wiki/Diophantine_equation#cite_note-1) There are infinitely many nontrivial solutions.[2](https://en.wikipedia.org/wiki/Diophantine_equation#cite_note-2) |
| $x^{n}+y^{n}=z^{n}$                                           | For _n_ = 2 there are infinitely many solutions (_x, y, z_): the [Pythagorean triples](https://en.wikipedia.org/wiki/Pythagorean_triple "Pythagorean triple"). For larger integer values of n, [Fermat's Last Theorem](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem "Fermat's Last Theorem") (initially claimed in 1637 by Fermat and [proved by Andrew Wiles](https://en.wikipedia.org/wiki/Wiles%27s_proof_of_Fermat%27s_Last_Theorem "Wiles's proof of Fermat's Last Theorem") in 1995[3](https://en.wikipedia.org/wiki/Diophantine_equation#cite_note-wiles-3)) states there are no positive integer solutions (_x, y, z_).                                                                                                                                                                                               |
| $x^{2}-ny^{2}=\pm 1$                                          | This is [Pell's equation](https://en.wikipedia.org/wiki/Pell%27s_equation "Pell's equation"), which is named after the English mathematician [John Pell](https://en.wikipedia.org/wiki/John_Pell_\(mathematician\) "John Pell (mathematician)"). It was studied by [Brahmagupta](https://en.wikipedia.org/wiki/Brahmagupta "Brahmagupta") in the 7th century, as well as by Fermat in the 17th century.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ${\frac {4}{n}}={\frac {1}{x}}+{\frac {1}{y}}+{\frac {1}{z}}$ | The [Erdős–Straus conjecture](https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Straus_conjecture "Erdős–Straus conjecture") states that, for every positive integer n ≥ 2, there exists a solution in x, y, and z, all as positive integers. Although not usually stated in polynomial form, this example is equivalent to the polynomial equation 4xyz=n(yz+xz+xy).![{\displaystyle 4xyz=n(yz+xz+xy).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b34fa20339ca35e4b6a2038814b7c8066d600226)                                                                                                                                                                                                                                                                                                                             |
| $x^{4}+y^{4}+z^{4}=w^{4}$                                     | [Conjectured](https://en.wikipedia.org/wiki/Euler%27s_sum_of_powers_conjecture "Euler's sum of powers conjecture") incorrectly by [Euler](https://en.wikipedia.org/wiki/Euler "Euler") to have no nontrivial solutions. Proved by [Elkies](https://en.wikipedia.org/wiki/Elkies "Elkies") to have infinitely many nontrivial solutions, with a computer search by Frye determining the smallest nontrivial solution, 958004 + 2175194 + 4145604 = 4224814.[4](https://en.wikipedia.org/wiki/Diophantine_equation#cite_note-4)[5](https://en.wikipedia.org/wiki/Diophantine_equation#cite_note-5)                                                                                                                                                                                                                                       |



## Ref
