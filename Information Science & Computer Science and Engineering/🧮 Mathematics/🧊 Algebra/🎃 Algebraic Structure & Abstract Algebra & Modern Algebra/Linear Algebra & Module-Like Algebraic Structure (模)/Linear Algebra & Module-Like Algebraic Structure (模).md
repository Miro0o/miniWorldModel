# Linear Algebra & Module-Like Algebraic Structure (模)

[TOC]



## Res
### Related Topics
↗ [Set Mapping & Function](../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
↗ [Geometry](../../../Geometry/Geometry.md)

↗ [Linear Algebra Problems](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithms%20Implementation%20For%20Classical%20Problems/🦜%20Programming%20Implementation%20of%20Math%20Problems/Programming%20for%20Algebra%20Problems/Linear%20Algebra%20Problems/Linear%20Algebra%20Problems.md)

↗ [Group Theory & Group-Like Algebraic Structure (群)](../Group%20Theory%20&%20Group-Like%20Algebraic%20Structure%20(群)/Group%20Theory%20&%20Group-Like%20Algebraic%20Structure%20(群).md)
- ↗ [Abelian Groups](../Group%20Theory%20&%20Group-Like%20Algebraic%20Structure%20(群)/Abelian%20Groups/Abelian%20Groups.md)
- ↗ [Ring Theory & Ring-Like Algebraic Structure](../Group%20Theory%20&%20Group-Like%20Algebraic%20Structure%20(群)/Ring%20Theory%20&%20Ring-Like%20Algebraic%20Structure/Ring%20Theory%20&%20Ring-Like%20Algebraic%20Structure.md)

↗ [Hybrid Algebraic Structures](../🛸%20Hybrid%20Algebraic%20Structures/Hybrid%20Algebraic%20Structures.md)
- ↗ [Normed Vector Space](../🛸%20Hybrid%20Algebraic%20Structures/Normed%20Vector%20Space.md)
- ↗ [Hilbert Space](../🛸%20Hybrid%20Algebraic%20Structures/Hilbert%20Space.md)
- ↗ [Banach Space](../🛸%20Hybrid%20Algebraic%20Structures/Banach%20Space.md)

↗ [AI + Robotics & Robot Learning](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/🤔%20AI%20Embodiment%20&%20World%20Model%20(WM)/AI%20+%20Robotics%20&%20Robot%20Learning/AI%20+%20Robotics%20&%20Robot%20Learning.md)
↗ [Computer Graphics Programming](../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Computer%20Graphics%20Programming.md)
↗ [Digital & Video Games Development](../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Digital%20&%20Video%20Games%20Development/Digital%20&%20Video%20Games%20Development.md)


### Learning Resources
🎬（已完结）《线性代数应该这样学（Linear Algebra Done Right）》自制教程&习题选讲 https://www.bilibili.com/video/BV1Vg411G7cz?p=34&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
📖 Linear Algebra Done Right, Sheldon Axler
- Chapter 1 — Vector Spaces — 1
    - 1A $\mathbf{R}^n$ and $\mathbf{C}^n$ — 2
        - Complex Numbers — 2
        - Lists — 5
        - $\mathbf{F}^n$ — 6
        - Digression on Fields — 10
        - Exercises 1A — 10
    - 1B Definition of Vector Space — 12
        - Exercises 1B — 16
    - 1C Subspaces — 18
        - Sums of Subspaces — 19
        - Direct Sums — 21
        - Exercises 1C — 24
- Chapter 2 — Finite-Dimensional Vector Spaces — 27
    - 2A Span and Linear Independence — 28
        - Linear Combinations and Span — 28
        - Linear Independence — 31
        - Exercises 2A — 37
    - 2B Bases — 39
        - Exercises 2B — 42
    - 2C Dimension — 44
        - Exercises 2C — 48
- Chapter 3 — Linear Maps — 51
    - 3A Vector Space of Linear Maps — 52
        - Definition and Examples of Linear Maps — 52
        - Algebraic Operations on $\mathcal{L}(V,W)$ — 55
        - Exercises 3A — 57
    - 3B Null Spaces and Ranges — 59
        - Null Space and Injectivity — 59
        - Range and Surjectivity — 61
        - Fundamental Theorem of Linear Maps — 62
        - Exercises 3B — 66
    - 3C Matrices — 69
        - Representing a Linear Map by a Matrix — 69
        - Addition and Scalar Multiplication of Matrices — 71
        - Matrix Multiplication — 72
        - Column–Row Factorization and Rank of a Matrix — 77
        - Exercises 3C — 79
    - 3D Invertibility and Isomorphisms — 82
        - Invertible Linear Maps — 82
        - Isomorphic Vector Spaces — 86
        - Linear Maps Thought of as Matrix Multiplication — 88
        - Change of Basis — 90
        - Exercises 3D — 93
    - 3E Products and Quotients of Vector Spaces — 96
        - Products of Vector Spaces — 96
        - Quotient Spaces — 98
        - Exercises 3E — 103
    - 3F Duality — 105
        - Dual Space and Dual Map — 105
        - Null Space and Range of Dual of Linear Map — 109
        - Matrix of Dual of Linear Map — 113
        - Exercises 3F — 115
- Chapter 4 — Polynomials — 119
    - Zeros of Polynomials — 122
    - Division Algorithm for Polynomials — 123
    - Factorization of Polynomials over $\mathbf{C}$ — 124
    - Factorization of Polynomials over $\mathbf{R}$ — 127
    - Exercises 4 — 129
- Chapter 5 — Eigenvalues and Eigenvectors — 132
    - 5A Invariant Subspaces — 133
        - Eigenvalues — 133
        - Polynomials Applied to Operators — 137
        - Exercises 5A — 139
    - 5B The Minimal Polynomial — 143
        - Existence of Eigenvalues on Complex Vector Spaces — 143
        - Eigenvalues and the Minimal Polynomial — 144
        - Eigenvalues on Odd-Dimensional Real Vector Spaces — 149
        - Exercises 5B — 150
    - 5C Upper-Triangular Matrices — 154
        - Exercises 5C — 160
    - 5D Diagonalizable Operators — 163
        - Diagonal Matrices — 163
        - Conditions for Diagonalizability — 165
        - Gershgorin Disk Theorem — 170
        - Exercises 5D — 172
    - 5E Commuting Operators — 175
        - Exercises 5E — 179
- Chapter 6 — Inner Product Spaces — 181
    - 6A Inner Products and Norms — 182
        - Inner Products — 182
        - Norms — 186
        - Exercises 6A — 191
    - 6B Orthonormal Bases — 197
        - Orthonormal Lists and the Gram–Schmidt Procedure — 197
        - Linear Functionals on Inner Product Spaces — 204
        - Exercises 6B — 207
    - 6C Orthogonal Complements and Minimization Problems — 211
        - Orthogonal Complements — 211
        - Minimization Problems — 217
        - Pseudoinverse — 220
        - Exercises 6C — 224
- Chapter 7 — Operators on Inner Product Spaces — 227
    - 7A Self-Adjoint and Normal Operators — 228
        - Adjoints — 228
        - Self-Adjoint Operators — 233
        - Normal Operators — 235
        - Exercises 7A — 239
    - 7B Spectral Theorem — 243
        - Real Spectral Theorem — 243
        - Complex Spectral Theorem — 246
        - Exercises 7B — 247
    - 7C Positive Operators — 251
        - Exercises 7C — 255
    - 7D Isometries, Unitary Operators, and Matrix Factorization — 258
        - Isometries — 258
        - Unitary Operators — 260
        - QR Factorization — 263
        - Cholesky Factorization — 266
        - Exercises 7D — 268
    - 7E Singular Value Decomposition — 270
        - Singular Values — 270
        - SVD for Linear Maps and for Matrices — 273
        - Exercises 7E — 278
    - 7F Consequences of Singular Value Decomposition — 280
        - Norms of Linear Maps — 280
        - Approximation by Linear Maps with Lower-Dimensional Range — 283
        - Polar Decomposition — 285
        - Operators Applied to Ellipsoids and Parallelepipeds — 287
        - Volume via Singular Values — 291
        - Properties of an Operator as Determined by Its Eigenvalues — 293
        - Exercises 7F — 294
- Chapter 8 — Operators on Complex Vector Spaces — 297
    - 8A Generalized Eigenvectors and Nilpotent Operators — 298
        - Null Spaces of Powers of an Operator — 298
        - Generalized Eigenvectors — 300
        - Nilpotent Operators — 303
        - Exercises 8A — 306
    - 8B Generalized Eigenspace Decomposition — 308
        - Generalized Eigenspaces — 308
        - Multiplicity of an Eigenvalue — 310
        - Block Diagonal Matrices — 314
        - Exercises 8B — 316
    - 8C Consequences of Generalized Eigenspace Decomposition — 319
        - Square Roots of Operators — 319
        - Jordan Form — 321
        - Exercises 8C — 324
    - 8D Trace: A Connection Between Matrices and Operators — 326
        - Exercises 8D — 330
- Chapter 9 — Multilinear Algebra and Determinants — 332
    - 9A Bilinear Forms and Quadratic Forms — 333
        - Bilinear Forms — 333
        - Symmetric Bilinear Forms — 337
        - Quadratic Forms — 341
        - Exercises 9A — 344
    - 9B Alternating Multilinear Forms — 346
        - Multilinear Forms — 346
        - Alternating Multilinear Forms and Permutations — 348
        - Exercises 9B — 352
    - 9C Determinants — 354
        - Defining the Determinant — 354
        - Properties of Determinants — 357
        - Exercises 9C — 367
    - 9D Tensor Products — 370
        - Tensor Product of Two Vector Spaces — 370
        - Tensor Product of Inner Product Spaces — 376
        - Tensor Product of Multiple Vector Spaces — 378
        - Exercises 9D — 380
- Photo Credits — 383
- Symbol Index — 384
- Index — 385
- Colophon: Notes on Typesetting — 390


🎬3blue1brown | The essence of linear algebra
https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=8X1lwkP2qaYpyjhm
- [Vectors](https://youtu.be/fNk_zzaMoSs?si=id1HVbCfkjOuxMoD)
	- {constant number(scaler), vector, matrix} and operations on them
- [Linear Combinations, and Basis Vector](https://youtu.be/k7RM-ot2NWY?si=C38tMZgo97TyXN-4)
- [Linear Transformation and Matrices](https://youtu.be/kYB8IZa5AuE?si=a6uRwquDDI-bgItJ)
- [Matrices Multiplication as Composition](https://youtu.be/XkY2DOUCWMU?si=Ydbrf1xcuRBsWU_V)
	- space transformation in a row
- [Tree-Dimensional Linear Transformation](https://youtu.be/rHLEWRxRGiM?si=sUy2t6ywc8pYK6C6)
- [The Determinant](https://youtu.be/Ip3X9LOh2dk?si=OqQFTSj27lsbd_jT)
	- det(A) = 0 --> dimension collapse! once dimension collapse, we cannot go back anymore, i.e. we loose inverse.
- [Inverse Matrices, Column Space, Rank and Null Space](https://youtu.be/uQhTuRlWMxw?si=s5tkXSarFPhbgkGu)
	- the correspondence between matrices and system of linear equation
	- rank: number of dimensions in the output transformation (column space)
	-  null space /kernel: the information on the lost dimensions that goes to origin.
- [Nonsquare Matrices as Transformation Between Dimensions](https://youtu.be/v8VSDg_WQlA?si=ktYec8EXhauF499J)
	- transformation between dimensions. one column represent one vector: hence, the dimension of the vector (the number of rows of the matrices) is the dimension after transformation, while the number of such vector (the number of columns of the matrices) can be considered the dimension before transformation.
		- such nonsquare matrices thus marks the transformation of dimensions before and after transformation
- [Dot Products and Duality](https://youtu.be/LyGKycYT2v0?si=NUvXx8aL_LiQN-HH)
	- the dot products of two vectors = a constant number, i.e. (the length of vector1's projection on vector2) x (the length of vector2) 
		- the order doesn't mater here. don't care vector1 projects on vector 2 or the reverse.
	- $\Leftrightarrow$ the linear transformation to one-dimension of one vector
- [Cross Products](https://youtu.be/eu6i7WJeinw?si=E2b6J5sM7yePnzfD)
	- the cross products of two vectors = a third vector, with the length of the vector equals to the area of previous two vectors and the direction perpendicular to them.
- [Cross Products in the Light of Linear Transformation](https://youtu.be/BaM7OCEm3G0?si=-skraUVHxzhWLS4d)
- [Cramer's Rule, Explained Geometrically](https://youtu.be/jBsC34PxzoM?si=5Scb3V7qqQuJvxgN)
- [Change of Basis](https://youtu.be/P2LTAUO1TdA?si=YM6App8dLoslQfxD)
- [Eigenvectors and Eigenvalues](https://youtu.be/PFDu9oVAE-g?si=YEuRFok2K10E2v5J)
	- $A\cdot V = \lambda\cdot V$, i.e. V (eigenvector) stay unchanged (possibly scaled by factor of $\lambda$ (eigenvalue) however) during transformation of $A$
	- we can use 2 eigenvectors of a space (if exists) as the basis vector, when needed to perform continues transformation to speed up the calculation
- [A Quick Trick for Computing Eigenvalues](https://youtu.be/e50Bj7jn9IQ?si=7vhXujTuqgS6XnPQ)
- [Abstract Vector Space](https://youtu.be/TgKwz5Ikpc8?si=bM0W9ETqruHxIS-J)


🖥️ Linear Algebra for Everyone | Gilbert Strang https://math.mit.edu/~gs/everyone/
🖥️ Introduction to Linear Algebra | Gilbert Strang https://math.mit.edu/~gs/linearalgebra/

📖 线性代数 by 李炯生 查建国 (z-lib.org)
📖 高等代数学习指导书 by 丘维声


### Other Resources



## Intro
### Linear Algebra
> 🔗 https://en.wikipedia.org/wiki/Linear_algebra

**Linear algebra** is the branch of [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") concerning [linear equations](https://en.wikipedia.org/wiki/Linear_equation "Linear equation") such as $$a_{1}x_{1}+\cdots +a_{n}x_{n}=b$$
[linear maps](https://en.wikipedia.org/wiki/Linear_map "Linear map") such as $$(x_{1},\ldots ,x_{n})\mapsto a_{1}x_{1}+\cdots +a_{n}x_{n},$$
and their representations in [vector spaces](https://en.wikipedia.org/wiki/Vector_space "Vector space") and through [matrices](https://en.wikipedia.org/wiki/Matrix_\(mathematics\) "Matrix (mathematics)").

Linear algebra is central to almost all areas of mathematics. For instance, linear algebra is fundamental in modern presentations of [geometry](https://en.wikipedia.org/wiki/Geometry "Geometry"), including for defining basic objects such as [lines](https://en.wikipedia.org/wiki/Line_\(geometry\) "Line (geometry)"), [planes](https://en.wikipedia.org/wiki/Plane_\(geometry\) "Plane (geometry)") and [rotations](https://en.wikipedia.org/wiki/Rotation_\(mathematics\) "Rotation (mathematics)"). Also, [functional analysis](https://en.wikipedia.org/wiki/Functional_analysis "Functional analysis"), a branch of [mathematical analysis](https://en.wikipedia.org/wiki/Mathematical_analysis "Mathematical analysis"), may be viewed as the application of linear algebra to [function spaces](https://en.wikipedia.org/wiki/Space_of_functions "Space of functions").

Linear algebra is also used in most sciences and fields of [engineering](https://en.wikipedia.org/wiki/Engineering "Engineering") because it allows [modeling](https://en.wikipedia.org/wiki/Mathematical_model "Mathematical model") many natural phenomena, and computing efficiently with such models. For [nonlinear systems](https://en.wikipedia.org/wiki/Nonlinear_system "Nonlinear system"), which cannot be modeled with linear algebra, it is often used for dealing with [first-order approximations](https://en.wikipedia.org/wiki/First-order_approximation "First-order approximation"), using the fact that the [differential](https://en.wikipedia.org/wiki/Differential_\(mathematics\) "Differential (mathematics)") of a [multivariate function](https://en.wikipedia.org/wiki/Multivariate_function "Multivariate function") at a point is the linear map that best approximates the function near that point.


### Module
> [!links]
> ↗ [Vector & Vector Space (Linear Space)](Vector%20&%20Vector%20Space%20(Linear%20Space)/Vector%20&%20Vector%20Space%20(Linear%20Space).md)
> ↗ [Abelian Groups](../Group%20Theory%20&%20Group-Like%20Algebraic%20Structure%20(群)/Abelian%20Groups/Abelian%20Groups.md)

> 🔗 https://en.wikipedia.org/wiki/Module_(mathematics)

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), a **module** is a generalization of the notion of [vector space](https://en.wikipedia.org/wiki/Vector_space "Vector space") in which the [field](https://en.wikipedia.org/wiki/Field_\(mathematics\) "Field (mathematics)") of [scalars](https://en.wikipedia.org/wiki/Scalar_\(mathematics\) "Scalar (mathematics)") is replaced by a (not necessarily [commutative](https://en.wikipedia.org/wiki/Commutative_ring "Commutative ring")) [ring](https://en.wikipedia.org/wiki/Ring_\(mathematics\) "Ring (mathematics)"). The concept of a _module_ also generalizes the notion of an [abelian group](https://en.wikipedia.org/wiki/Abelian_group "Abelian group"), since the abelian groups are exactly the modules over the ring of [integers](https://en.wikipedia.org/wiki/Integer "Integer").

Like a vector space, a module is an additive abelian group, and scalar multiplication is [distributive](https://en.wikipedia.org/wiki/Distributive_property "Distributive property") over the operations of addition between elements of the ring or module and is [compatible](https://en.wikipedia.org/wiki/Semigroup_action "Semigroup action") with the ring multiplication.

Modules are very closely related to the [representation theory](https://en.wikipedia.org/wiki/Representation_theory "Representation theory") of [groups](https://en.wikipedia.org/wiki/Group_\(mathematics\) "Group (mathematics)"). They are also one of the central notions of [commutative algebra](https://en.wikipedia.org/wiki/Commutative_algebra "Commutative algebra") and [homological algebra](https://en.wikipedia.org/wiki/Homological_algebra "Homological algebra"), and are used widely in [algebraic geometry](https://en.wikipedia.org/wiki/Algebraic_geometry "Algebraic geometry") and [algebraic topology](https://en.wikipedia.org/wiki/Algebraic_topology "Algebraic topology").



## Ref
[逆矩阵是什么？]: https://www.shuxuele.com/algebra/matrix-inverse.html

27 【向量内积背后竟然藏着宇宙的对称性？ - 漫士沉思录 | 小红书 - 你的生活兴趣社区】 😆 PwTPtgQWyQCsmsW 😆 https://www.xiaohongshu.com/discovery/item/678f2a3200000000180188ca?source=webshare&xhsshare=pc_web&xsec_token=ABaB3PyooAAQEmuaKVKeM8TpKbV22Ush6Eo8SX9b5v0y0=&xsec_source=pc_share

[Linear algebra concept maps]: https://minireference.com/blog/linear-algebra-concept-maps/
![linear_algebra_page1](../../../../../../Assets/Cheat_Sheets/linear_algebra_page1.pdf)
