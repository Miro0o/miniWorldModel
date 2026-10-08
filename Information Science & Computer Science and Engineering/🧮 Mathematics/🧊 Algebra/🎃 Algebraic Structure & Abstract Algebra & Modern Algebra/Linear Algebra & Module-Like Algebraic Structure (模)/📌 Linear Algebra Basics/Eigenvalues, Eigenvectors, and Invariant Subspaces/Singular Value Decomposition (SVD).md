# Singular Value Decomposition (SVD)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Singular_value_decomposition

![](../../../../../../../Assets/Pics/Pasted%20image%2020261003211109.png)

$M=U\Sigma V^\top$
$\Sigma= \operatorname{diag} (\sigma_1,\sigma_2,\ldots)$

singular values: $(\sigma_1,\sigma_2,\ldots)$
spectral norm = the maximal singular value: $\|M\|_2 = \sigma_{\max}(M)$

\*norm: 
- $|x|$: the absolute value of x (x is a number)
- $\|x\|$: 
	- x is a vector
		- L1 norm: $\|x\|_1$
		- L2 norm: $\|x\|_2 = \sqrt{\sum_i x_i^2}$
	- x is a matrix
		- Frobenius norm: $\|x\|_F = \sqrt{ \sum_{i,j}x_{ij}^2 }$
		- Spectral norm = the maximal singular value:
			- $\|x\|_2 = \sigma_{\max}(x)$


in deep learning: $\|Wx\|_2 \le \|W\|_2\|x\|_2$


### Orthogonal Matrix
$|| Qx || = || x ||$
$Q^TQ=I$

do not change the length, only rotate --> singular value = 1


### Polar Decomposition
> 🔗 https://en.wikipedia.org/wiki/Polar_decomposition

$M = rotation * stretching$



## Ref
