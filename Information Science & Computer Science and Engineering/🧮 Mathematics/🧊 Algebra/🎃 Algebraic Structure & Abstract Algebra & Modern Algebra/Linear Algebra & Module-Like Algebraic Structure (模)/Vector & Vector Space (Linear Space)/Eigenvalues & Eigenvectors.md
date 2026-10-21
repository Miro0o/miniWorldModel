# Eigenvalues, Eigenvectors, and Invariant Subspaces

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors

In [linear algebra](https://en.wikipedia.org/wiki/Linear_algebra "Linear algebra"), an **eigenvector** ([/ˈaɪɡən-/](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English") [_EYE-gən-_](https://en.wikipedia.org/wiki/Help:Pronunciation_respelling_key "Help:Pronunciation respelling key")) or **characteristic vector** is a (nonzero) [vector](https://en.wikipedia.org/wiki/Vector_\(mathematics_and_physics\) "Vector (mathematics and physics)") that has its [direction](https://en.wikipedia.org/wiki/Direction_\(geometry\) "Direction (geometry)") unchanged (or reversed) by a given [linear transformation](https://en.wikipedia.org/wiki/Linear_map "Linear map"). More precisely, ==an **eigenvector $v$** of a linear transformation $T$ is [scaled by a constant factor](https://en.wikipedia.org/wiki/Scalar_multiplication "Scalar multiplication") $λ$ when the linear transformation is applied to it:== ⁠$$Tv=λv$$⁠. The corresponding **eigenvalue**, **characteristic value**, or **characteristic root** is the multiplying factor $λ$ (possibly a [negative](https://en.wikipedia.org/wiki/Negative_number "Negative number") or [complex](https://en.wikipedia.org/wiki/Complex_number "Complex number") number).
（给定一个矩阵T，可以求他的特征向量v。对这个v而言，$Tv=λv$，其中 $\lambda$ 被称为特征值）
（不是每个矩阵T都有特征向量。）

[Geometrically, vectors](https://en.wikipedia.org/wiki/Euclidean_vector "Euclidean vector") are multi-[dimensional](https://en.wikipedia.org/wiki/Dimension "Dimension") quantities with magnitude and direction, often pictured as arrows. A linear transformation [rotates](https://en.wikipedia.org/wiki/Rotation_\(mathematics\) "Rotation (mathematics)"), [stretches](https://en.wikipedia.org/wiki/Scaling_\(geometry\) "Scaling (geometry)"), or [shears](https://en.wikipedia.org/wiki/Shear_mapping "Shear mapping") the vectors upon which it acts. A linear transformation's eigenvectors are those vectors that are only stretched or shrunk, with neither rotation nor shear. The corresponding eigenvalue is the factor by which an eigenvector is stretched or shrunk. If the eigenvalue is negative, then the eigenvector's direction is reversed.

The eigenvectors and eigenvalues of a linear transformation serve to characterize it, and so they play important roles in all areas where linear algebra is applied, from [geology](https://en.wikipedia.org/wiki/Geology "Geology") to [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics "Quantum mechanics"). In particular, it is often the case that a system is represented by a linear transformation whose outputs are fed as inputs to the same transformation ([feedback](https://en.wikipedia.org/wiki/Feedback "Feedback")). In such an application, the largest eigenvalue is of particular importance, because it governs the long-term behavior of the system after many applications of the linear transformation, and the associated eigenvector is the [steady state](https://en.wikipedia.org/wiki/Steady_state "Steady state") of the system.



## Ref
