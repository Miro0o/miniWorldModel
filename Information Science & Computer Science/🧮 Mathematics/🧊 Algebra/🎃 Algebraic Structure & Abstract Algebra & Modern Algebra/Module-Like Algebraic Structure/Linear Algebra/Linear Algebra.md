# Linear Algebra

[TOC]



## Res
### Related Topics
↗ [Linear Algebra Problems](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/Linear%20Algebra%20Problems/Linear%20Algebra%20Problems.md)


### Learning Resources
🎬（已完结）《线性代数应该这样学（Linear Algebra Done Right）》自制教程&习题选讲 https://www.bilibili.com/video/BV1Vg411G7cz?p=34&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬3blue1brown | The essence of linear algebra
https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=8X1lwkP2qaYpyjhm
- [Vectors](https://youtu.be/fNk_zzaMoSs?si=id1HVbCfkjOuxMoD)
	- {constant (scale), vector, matrice}
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

📖 Linear Algebra Done Right



## Intro



## Ref
[逆矩阵是什么？]: https://www.shuxuele.com/algebra/matrix-inverse.html

27 【向量内积背后竟然藏着宇宙的对称性？ - 漫士沉思录 | 小红书 - 你的生活兴趣社区】 😆 PwTPtgQWyQCsmsW 😆 https://www.xiaohongshu.com/discovery/item/678f2a3200000000180188ca?source=webshare&xhsshare=pc_web&xsec_token=ABaB3PyooAAQEmuaKVKeM8TpKbV22Ush6Eo8SX9b5v0y0=&xsec_source=pc_share

[Linear algebra concept maps]: https://minireference.com/blog/linear-algebra-concept-maps/
![linear_algebra_page1](../../../../../../Assets/Cheat_Sheets/linear_algebra_page1.pdf)
