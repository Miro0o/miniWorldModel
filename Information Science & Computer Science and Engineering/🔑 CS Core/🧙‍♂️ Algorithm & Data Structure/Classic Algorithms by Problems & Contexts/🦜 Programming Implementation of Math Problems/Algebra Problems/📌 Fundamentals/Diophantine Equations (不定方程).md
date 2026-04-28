# Diophantine Equations (不定方程)

[TOC]



## Res
### Related Topics



## Intro
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



## Linear Diophantine Equations (LDE)




## Homogeneous Equations



## Ref
[丢番图多项式系统]: https://reference.wolfram.com/language/tutorial/DiophantineReduce.html.zh
[介绍](https://reference.wolfram.com/language/tutorial/DiophantineReduce.html#21194150)
[多变量非线性系统](https://reference.wolfram.com/language/tutorial/DiophantineReduce.html#479923181)
[线性系统](https://reference.wolfram.com/language/tutorial/DiophantineReduce.html#551921972)
[选项](https://reference.wolfram.com/language/tutorial/DiophantineReduce.html#623839255)
[单变量系统](https://reference.wolfram.com/language/tutorial/DiophantineReduce.html#101156547)
[参考文献](https://reference.wolfram.com/language/tutorial/DiophantineReduce.html#73689979)
[双变量系统](https://reference.wolfram.com/language/tutorial/DiophantineReduce.html#13440227)
