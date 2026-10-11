# Norm (Vector Space)

[TOC]



## Res
### Related Topics
↗ [Normed Vector Space](../../🛸%20Hybrid%20Algebraic%20Structures/Normed%20Vector%20Space.md)


### Other Resources



## Intro
> [!links]
> ↗ [Set Mapping & Function](../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)

> 🔗 https://en.wikipedia.org/wiki/Norm_(mathematics)

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), a **norm** is a [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") from a real or complex [vector space](https://en.wikipedia.org/wiki/Vector_space "Vector space") to the non-negative real numbers that behaves in certain ways like the distance from the [origin](https://en.wikipedia.org/wiki/Origin_\(mathematics\) "Origin (mathematics)"): it [commutes](https://en.wikipedia.org/wiki/Equivariant_map "Equivariant map") with scaling, obeys a form of the [triangle inequality](https://en.wikipedia.org/wiki/Triangle_inequality "Triangle inequality"), and is zero only at the origin. In particular, the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance "Euclidean distance") in a [Euclidean space](https://en.wikipedia.org/wiki/Euclidean_space "Euclidean space") is defined by a norm on the associated [Euclidean vector space](https://en.wikipedia.org/wiki/Euclidean_vector_space "Euclidean vector space"), called the [Euclidean norm](https://en.wikipedia.org/wiki/Norm_\(mathematics\)#Euclidean_norm), the [2-norm](https://en.wikipedia.org/wiki/Norm_\(mathematics\)#p-norm), or, sometimes, the **magnitude** or **length** of the vector. This norm can be defined as the [square root](https://en.wikipedia.org/wiki/Square_root "Square root") of the [inner product](https://en.wikipedia.org/wiki/Inner_product "Inner product") of a vector with itself.

A [seminorm](https://en.wikipedia.org/wiki/Seminorm "Seminorm") satisfies the first two properties of a norm but may be zero for vectors other than the origin. A vector space with a specified norm is called a [normed vector space](https://en.wikipedia.org/wiki/Normed_vector_space "Normed vector space"). In a similar manner, a vector space with a seminorm is called a _seminormed vector space_.

The term **pseudonorm** has been used for several related meanings. It may be a synonym of "seminorm". It can also refer to a norm that can take infinite values or to certain functions parametrised by a [directed set](https://en.wikipedia.org/wiki/Directed_set "Directed set").


### Manhattan Norm ( L1 Norm / 1-Norm)
_Formula:_ $\Vert{}x\Vert{}_1 = \vert{}x_1\vert{} + \vert{}x_2\vert{} + \cdots + \vert{}x_n\vert{}$


### Euclidean Norm (L2 Norm / 2-Norm)
_Formula:_ $\Vert{}x\Vert{}_2 = \sqrt{x_1^2 + x_2^2 + \cdots + x_n^2}$


### Generalized p-Norm
_Formula:_ $\Vert{}x\Vert{}_p = \left( \sum \vert{}x_i\vert{}^p \right)^{1/p}$ (for p ≥ 1)


### Maximum Norm (L∞ Norm / Infinity-Norm):
_Formula:_ $\Vert{}x\Vert{}_\infty = \max(\vert{}x_1\vert{}, \vert{}x_2\vert{}, \ldots, \vert{}x_n\vert{}$



## Vector Norm
> 🔗 https://mathworld.wolfram.com/VectorNorm.html



## Matrix Norm
> 🔗 https://en.wikipedia.org/wiki/Matrix_norm

==In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), a [norm](https://en.wikipedia.org/wiki/Vector_norm "Vector norm") is a function from a [vector space](https://en.wikipedia.org/wiki/Vector_space "Vector space") to non-negative [real numbers](https://en.wikipedia.org/wiki/Real_number "Real number") that satisfies certain axioms==. A **matrix norm** is a norm defined on a vector space of [matrices](https://en.wikipedia.org/wiki/Matrix_\(mathematics\) "Matrix (mathematics)"). As for every norm, a matrix norm defines a [distance](https://en.wikipedia.org/wiki/Metric_\(mathematics\) "Metric (mathematics)"), the distance between two matrices being the norm of their difference. The specificity of matrix norms is that they may often be defined either directly as for every norm, or by mean of their properties as linear operators.

There are many specific matrix norms. Most arise from the following three perspectives, though different perspectives may sometimes yield the same norm.
- Consider the matrix as a [linear operator](https://en.wikipedia.org/wiki/Linear_operator "Linear operator"); then a matrix norm may describe how much the operator can stretch vectors. Such matrix norms induced by vector norms are called [_operator norms_](https://en.wikipedia.org/wiki/Matrix_norm#Matrix_norms_induced_by_vector_norms).
- Consider the matrix as a rectangular array of numbers; then a matrix norm may be defined as a [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") of the entries of the matrix. Such matrix norms are sometimes called [_"entry-wise" norms_](https://en.wikipedia.org/wiki/Matrix_norm#%22Entry_wise%22_matrix_norms).
- The [singular value decomposition](https://en.wikipedia.org/wiki/Singular_value_decomposition "Singular value decomposition") is useful in analyzing matrices. A vector norm of the singular values of a matrix may be taken as a matrix norm. Such norms are called [_Schatten norms_](https://en.wikipedia.org/wiki/Matrix_norm#Schatten_norms).

Matrix norms are often denoted by [double vertical bars](https://en.wikipedia.org/wiki/Double_vertical_bar "Double vertical bar") with optional subscripts (e.g., $‖A‖$ or $‖A‖_2$). However, the meaning of the subscript may vary, since matrix norms in different perspectives relate to [ℓp-norms](https://en.wikipedia.org/wiki/Lp_space#The_p-norm_in_finite_dimensions "Lp space") in different ways.

Matrix norms in different perspectives:

| [Operator norms](https://en.wikipedia.org/wiki/Matrix_norm#Matrix_norms_induced_by_vector_norms) | ["Entry-wise" norms](https://en.wikipedia.org/wiki/Matrix_norm#%22Entry-wise%22_matrix_norms) | [Schatten norms](https://en.wikipedia.org/wiki/Matrix_norm#Schatten_norms) (SVD) | Also known as                                                                      |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| induced from $ℓ^1$-norm                                                                          | maximum column sum                                                                            |                                                                                  | column norm                                                                        |
|                                                                                                  | sum of singular values                                                                        | Schatten $ℓ^1$-norm                                                              | nuclear norm                                                                       |
|                                                                                                  | square root of the sum of squares                                                             | Schatten $ℓ^2$-norm                                                              | [Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)         |
| induced from $ℓ^2$-norm                                                                          | the largest singular value                                                                    | Schatten $ℓ^∞$-norm                                                              | [spectral norm](https://en.wikipedia.org/wiki/Matrix_norm#Spectral_norm_\(p_=_2\)) |
| induced from $ℓ^∞$-norm                                                                          | maximum row sum                                                                               |                                                                                  | row norm                                                                           |



## Ref
