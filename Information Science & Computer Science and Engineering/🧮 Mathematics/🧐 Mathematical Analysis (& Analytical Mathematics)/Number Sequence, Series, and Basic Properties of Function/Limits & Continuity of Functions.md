# Limits & Continuity of Functions

[TOC]



## Res
### Related Topics
↗ [Function & Mapping of Set](../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Function%20&%20Mapping%20of%20Set/Function%20&%20Mapping%20of%20Set.md)


### Other Resources



## Contents
### 0️⃣ Function Review
> 回顾第一部分关于函数的内容和数列的内容...

1. 函数定义（略）
2. 函数初等性质（略）
3. 函数的表示（略）
4. 函数初等运算
	1. 基本初等函数
		1. 函数的四则运算
			1. 函数除法
		2. 复合函数运算
			1. 定义：
				1. （例）
				2. （例）
				3. （例）
			2. 复合函数性质
				1. 
		3. 反函数运算
			1. 定义：单射函数的逆映射就构成原函数的反函数，即只有单射函数存在反函数。
			2. 反函数的性质
				1. <a style="color:red">反函数存在性定理</a>
					2. 定义：一切严格单调函数存在反函数，且反函数也是单调函数。
					3. （证）根据反函数的定义，只要说明严格单调函数是单射函数即可（？）
					4. （例）反双曲函数
						1. asdf
				2. <a style="color:red">反函数连续性定理</a> （见下“连续函数运算法则”）
			3. 初等函数的反函数
	2. 初等函数（对**基本初等函数**做**四则运算**和**函数初等运算**）（略）
	3. 非初等函数
5. 函数的性质：
	1. 存在性
	2. 连续性
	3. 可导性


### 1️⃣ Limit of A Function
#### Definition of Limit (函数极限的定义)
函数极限的定义 （此时讲的极限都是去心邻域上的极限，即不考虑连续性；连续性在下一节讨论）
1. 去心邻域：
2. 函数极限的定义一：(同时从两侧逼近$x_0$)
	1. $$(\varepsilon - \delta \text{语言}) \ \ \forall\varepsilon\gt0,\ \exists\delta\gt0, \ \forall{x}(0\lt\vert{x-x_0}\vert\lt\delta): \ \vert{f(x)-A}\vert\lt\varepsilon \ \text{(即函数在x0处极限为A)}$$
	2. $\text{记为} \ lim_{x\to{x_0}}{f(x)}=A \ \text{或} \ f(x)\to{A}(x\to{x_0})$
	3. $\text{即对}\forall\varepsilon\gt0, \ \text{要找到}\delta\gt0, \ \text{使得当} \ 0\lt\vert{x-x_0}\vert\lt\delta\text{时，有} \vert{f(x)-A}\vert\lt\varepsilon$
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%203.38.19PM.png)
3. 函数极限的定义二：(分别从两侧逼近$x_0$)
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=26&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. 单侧极限
		1. 左极限：
		2. 右极限：
		3. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%205.01.24PM.png)
	3. 双侧极限（略，同上）
	4. （例）$sin(x)$
	5. （例）$f(x) = \begin{cases}\frac{\sin{2x}}{x}&x\lt0\\2\cos{x^2}&x\ge0\end{cases}, \ lim_{x\to0}{f(x)}=?$
4. **函数极限定义的扩充** （分别从两侧逼近无穷量和有穷量）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%205.25.22PM.png)![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%205.25.41PM.png)
	3. （例）$lim_{x\to\ - \infty}{e^x}=0$
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%205.36.13PM.png)
	4. （例）$lim_{x\to 1-}{\frac{x^2}{x-1}}=-\infty$
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%205.36.45PM.png)
	5. ![](../../../../Assets/Pics/Screenshot%202024-01-10%20at%204.45.24PM.png)
5. 渐近线
6. （例）$lim_{x\to0}{e^x}\to1$
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%201.58.59PM.png)
7. （例）$lim_{x\to2}{x^2}\to4$
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%202.03.51PM.png)
8. （例）$lim_{x\to1}{\frac{x(x-1)}{x^2-1}}=\frac{1}{2}$
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%202.07.20PM.png)
#### Properties of Limited Function (函数极限的性质)
函数极限的性质
	1. <a style="red">唯一性</a>
		2. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%202.19.01PM.png)
	2. <a style="red">局部保序性</a> （局部：在$x_0$的去心邻域内，保序：两个函数大小均保持极限大小的关系）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%202.23.03PM.png)
		2. 推论1:
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%202.38.58PM.png)
		3. 推论2:
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%202.37.00PM.png)
	3. <a style="red">局部有界性</a>
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%202.44.19PM.png)
	4. <a style="red">夹逼性</a> （见下）


#### Laws of Operations of Limited Functions (有限函数的极限运算)
函数极限的运算法则
1. 运算量均存在的情况 (收敛函数运算)
	1. 收敛初等函数的运算法则
		1. <a style="red">收敛函数的四则运算法则</a>
			1. 收敛函数做四则运算再求极限等价于先求极限再做四则运算
			2. 基本的收敛函数的四则运算法则
				1. **前提：$f(x), g(x)$ 极限均存在**，设 $lim_{x\to{x_0}}{f(x)}=a, \ lim_{x\to{x_0}}{g(x)}=b$，对其做**有限次**四则运算 （此时收敛过程是第一类定义的收敛过程，即从两侧同时逼近$x_0$）
					1. $\forall\varepsilon\gt0,\ \exists\delta\gt0, \ \forall{x}(0\lt\vert{x-x_0}\vert\lt\delta: \ \vert{f(x)-a}\vert\lt\varepsilon$
					2. $\forall\varepsilon\gt0,\ \exists\delta\gt0, \ \forall{x}(0\lt\vert{x-x_0}\vert\lt\delta: \ \vert{g(x)-b}\vert\lt\varepsilon$
					- $lim_{n\to\infty}({\alpha{f(x)}+\beta{g(x)}}) = lim_{x\to{x_0}}{\alpha{f(x)}} + lim_{x\to{x_0}}{\beta{g(x)}} = \alpha a + \beta b$
					- $lim_{n\to\infty}({\alpha{f(x)} \times \beta{g(x)}}) = lim_{x\to{x_0}}{\alpha{f(x)}}\times lim_{x\to{x_0}}{\beta{g(x)}} = \alpha a \times \beta b$
						- ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.22.18PM.png)
					- $lim_{n\to\infty}{\frac{\alpha{f(x)}}{\beta{g(x)}}} =\frac{lim_{x\to{x_0}}{\alpha{f(x)}}}{lim_{x\to{x_0}}{\beta{g(x)}}}= \frac{\alpha a}{\beta b} \ (\beta{b}\neq0)$
						- ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.21.03PM.png)
					- （例）$\lim_{x\to0}{\frac{\sin{\alpha{x}}}{x}}$
					- （例）$\lim_{x\to0}{\frac{\sin{\alpha{x}}}{\beta{x}}}$
			2. 扩充的收敛函数的四则运算法则（排除不定型）
				1. 此时收敛过程是第三类定义的收敛过程（扩充的收敛函数定义），即从两侧分别逼近无穷量和有穷量）
				2. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%205.46.08PM.png)
				3. （例）$f(x)=\frac{a_{n}x^{n}+a_{n-1}x^{n-1}+...+a_{k}x^{k}}{b_{m}x^{m}+b_{m-1}x^{m-1}+...+b_{j}x^{j}}, \ a_n,a_k,b_m,b_j\neq0$
					1. $x\to\infty, \ \begin{cases}n=m&f(x)=\frac{a_n}{b_m}\\n\gt{m}&f(x)\to\infty\\n\lt{m}&f(x)\to0\end{cases}$
					2. $x\to0, \ \begin{cases}k=j&f(x)=\frac{a_k}{b_j}\\k\gt{j}&f(x)\to0\\k\lt{j}&f(x)\to\infty\end{cases}$
				4. （例）$lim_{x\to\infty}{(1+\frac{1}{x})^x}=e, \ lim_{x\to0}{(1+x)^{\frac{1}{x}}}=e$ （见下“重要收敛函数及其极限”）
		2. <a style="red">收敛函数的复合运算法则</a>
			1. tbd...
	1. 收敛非初等函数的运算法则（略）
2. 运算量至少有一个不存在的情况
	1. 存在士不存在=不存在; 
	2. 不存在士不存在= 不一定; 
	3. 存在$\times / \div$不存在= 不一定; 
	4. 不存在$\times / \div$不存在=不一定

![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%2010.48.27AM.png)

注意：我们学的运算法则都是正对有限次运算的，对于无限次运算，除了证明过的特例（如重要极限）可以使用，不可以主观臆断地对其使用运算法则。
1. 例子
	1. $\lim_{n\to\infty}{\frac{n^n}{(n+1)^n}}$
	2. $\lim_{n\to\infty}{(1-\frac{1}{n})^{\sqrt{n}}}$
		1. 正确的做法：$\lim_{n\to\infty}{(1+\frac{1}{\sqrt{n}})^{\sqrt{n}}(1-\frac{1}{\sqrt{n}})^{\sqrt{n}}}$
		2. 错误的做法：$\lim_{n\to\infty}{((1-\frac{1}{n})^{n})^{\frac{1}{\sqrt{n}}}}$
		3. 虽然在这个例子里两个做法答案都一样。。
	3. 不过同样是这个重要极限，如果是$n\to{0}$的情况，就可以这样拆开。比如下面这个例子：
		1. $\lim_{x\to{0}}{(\frac{1+2^x}{2})^{\frac{1}{x}}}=\lim_{x\to{0}}{((1+\frac{2^x-1}{2})^{\frac{2}{2^x-1}})^{\frac{2^x-1}{2x}}}=\sqrt2$
##### Relationship Between Limited Function & Limited Sequence of Numbers (函数极限与数列极限的关系)
==函数极限与数列极限的关系==
	1. <a style="red">海涅定理(Hinne Theorm)</a> （海涅定理通常用来否定一个数列是收敛的）
		1. （证）
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.44.42PM.png)
			2. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.47.17PM.png)
		2. 海涅定理与扩充的函数极限
			4. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%205.44.37PM.png)
		4. （例）$lim_{x\to\infty}\sin{\frac{1}{x}}$
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.50.33PM.png)
	2. 海涅定理的补充
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.53.23PM.png)
##### Determination of Limited Function (收敛函数的判别准则)
收敛函数的判别准则/函数极限计算的重要方法
1. <a style="red">夹逼定理</a>
	1. 定义
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%203.33.52PM.png)
	2. （证）
	3. （例）$lim_{x\to0}{\frac{\sin{x}}{x}}=1$ （见下“重要收敛函数及其极限”）
	4. （例）$lim_{x\to0}{\frac{1-\cos{x}}{x^2}}$
	5. （例）$lim_{x\to\infty}{(1+\frac{1}{x})^x}=e$ （见下“重要收敛函数及其极限”）
##### Important Convergent Functions (重要收敛函数及其极限)
 ==重要收敛函数及其极限==
	1. $lim_{x\to0}{\frac{\sin{x}}{x}}=1$
		1. （证一：利用面积做比较）
			1. ![Triangle_Inequity.excalidraw|400](../../../../Assets/Illustrations/Math/Triangle_Inequity.excalidraw.md)
			2. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.03.08PM.png)
		2. （证二：利用数列不等式）
			3. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%204.04.52PM.png)
		3. （例）
		4. ⚠ $lim_{x\to\infty}{\frac{\sin{x}}{x}}=0$
			1. $x\to\infty, \ -\frac{1}{x}\lt{\frac{\sin{x}}{x}}\lt\frac{1}{x}$
	2. $lim_{x\to\infty}{(1+\frac{1}{x})^x}=e, \ lim_{x\to0}{(1+x)^{\frac{1}{x}}}=e$
		1. （证）(数列 + 夹逼) 这里需要夹逼而不能直接说明由于 $x\to\infty, \ n\to\infty$，从而直接把数列的结论拿来用；这是因为我们此时的知识无法证明这两个无穷量在数列和实函数上的极限过程是相同的。
			1. $$for \ \forall{x}\in{R}, \ \exists{n}\in{N}, \ n \lt x \lt n+1; \ \begin{cases}x\to+\infty&{(1+\frac{1}{n+1})^n} \lt {(1+\frac{1}{x})^x} \lt {(1+\frac{1}{n})^{n+1}}\\x\to-\infty&let \ y=-x, \ lim_{x\to-\infty}{(1+\frac{1}{x})^{x}}=lim_{y\to+\infty}{(1+\frac{1}{-y})^{-y}}=lim_{y\to+\infty}{(\frac{y-1}{y})^{-y}}=lim_{y\to+\infty}{(\frac{y}{y-1})^{y}}=lim_{y\to+\infty}{(1+\frac{1}{y-1})^{y-1}}(1+\frac{1}{y-1})=e\end{cases}$$
		2. （例）$lim_{x\to\infty}{(1-\frac{1}{x})^{x}}=\frac{1}{e}$ (由上题中 $y\to+\infty$可得出)


#### Cauchy Principle of Convergence (柯西收敛原理/柯西极限存在准则)
 <a style="red">函数极限的Cauchy收敛原理</a>
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=27&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d&t=2285
	2. 回顾数列极限的Cauchy收敛定理：$$lim_{n\to\infty}{a_n}=A, \ A\in{R} \iff \forall\varepsilon\gt0, \ \exists{N}, \ \forall{n,m\gt{N}}\to\vert{a_n}-{a_m}\vert\lt\varepsilon, \ \forall n,m\in{N}$$
	3. 函数极限的Cauchy收敛定理：$$lim_{x\to\infty}{f(x)}=A, \ A\in{R} \iff \forall\varepsilon\gt0, \ \exists{X\in{R}}, \ \forall{n,m\gt{X}}\to\vert{f(n)}-{f(m)}\vert\lt\varepsilon, \ \forall n,m\in{R}$$
		1. 充分性：（利用基本数列和海涅定理从而推断出函数极限）
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%208.22.09PM.png)
		2. 必要性：
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%208.21.25PM.png)


#### ⭐ Completeness of the Real Numbers (实数系基本定理/实数系完备性)
tbd..

![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%201.27.59PM.png)


### 2️⃣ Continuity of A Function
#### Definition of Continuity (函数连续性的定义)
1. 函数的增量（改变量）
2. 函数的点连续性
	1. $\forall\varepsilon\gt0, \ \exists\delta\gt0\to\forall{x}\ (\vert{x-x_0}\vert\lt\delta), \ \vert{f(x)-f(x_0)}\vert\lt\varepsilon$
	2. $lim_{x\to{x_0}}{f(x)=f(x_0)}$
		1. $f(x_0)$有定义
		2. $lim_{x\to{x_0-}}{f(x)=f(x_0)}$
		3. $lim_{x\to{x_0+}}{f(x)=f(x_0)}$
3. 函数的区间连续性
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=29&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. 函数在**开区间**的连续性
		1. 若f(x)在开区间(a,b)上每一点都连续，则称f(x)在开区间(a,b)上连续
			1. （例）$f(x)=\frac{1}{x}, \ \text{证明}f(x)\text{在}(0,1)\text{上连续}$ (限制$\vert{x-x_0}\vert$大小，然后放缩；放缩过程中要保留$x-x_0$的形式的式子)
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%208.46.12PM.png)
				2. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%208.45.56PM.png)
	3. 函数在**闭区间**的连续性
		1. 单侧连续
			1. 左连续：$\forall\varepsilon\gt0, \ \exists\delta\gt0\to\forall{x}\ ({x_0-x}\lt\delta), \ \vert{f(x)-f(x_0)}\vert\lt\varepsilon$
			2. 右连续：$\forall\varepsilon\gt0, \ \exists\delta\gt0\to\forall{x}\ ({x-x_0}\lt\delta), \ \vert{f(x)-f(x_0)}\vert\lt\varepsilon$
		2. 若f(x)在开区间（a,b）连续，在a点右连续，b点左连续，则称f(x)在闭区间\[a,b\]上连续
			1. （例）$f(x)=\sqrt{x(1-x)}, \ \text{证明}f(x)\text{在}[0,1]\text{上连续}$ 
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%209.04.45PM.png)![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%209.05.04PM.png)
	4. 函数在**任意区间**的连续性
		1. $$\forall\varepsilon\gt0, \ \exists\delta\gt0\to\forall{x}\in{S}(\vert{x-x_0}\vert\lt\delta), \ \vert{f(x)-f(x_0)}\vert\lt\varepsilon, \ \text{则称}f(x)\text{在区间S上连续}$$
		2. （例）$f(x)=\sin{x}, \ x\in(-\infty, +\infty), \text{证函数连续}$
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%209.17.00PM.png)
		3. （例）$f(x)=a^x \ (a\lt0,a\neq1), \ x\in(-\infty,+\infty) \ \text{证函数连续}$
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%209.43.13PM.png)
			2. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%209.44.28PM.png)
#### Discontinuities (间断点)
1. 回顾函数连续点的定义
	1. $lim_{x\to{x_0}}{f(x)=f(x_0)}$
		1. $f(x_0)$有定义
		2. $lim_{x\to{x_0-}}{f(x)=f(x_0)}$
		3. $lim_{x\to{x_0+}}{f(x)=f(x_0)}$
2. 间断点定义：$lim_{x\to{x_0}}{f(x)\neq f(x_0)}$
	1. 第一类间断点 (左右极限都存在)
		1. 跳跃间断点
			1. $lim_{x\to{x_0-}}{f(x)}\neq lim_{x\to{x_0+}}{f(x)}$
			2. 单调函数上的间断点都是跳跃间断点
			3. （例）sigmod(x)
		3. 可去间断点（）
			1. $lim_{x\to{x_0-}}{f(x)}=lim_{x\to{x_0+}}{f(x)}\neq f(x_0) \ \text{or} \ x_0\not\in{D(x)}$
			2. （例）$f(x)=x\sin\frac{1}{x}, \ x\to{0}$
	2. 第二类间断点:（左右极限至少有一个不存在）
		1. $lim_{x\to{x_0-}}{f(x)}\to\infty \ \text{or} \ lim_{x\to{x_0+}}{f(x)}\to\infty$
		2. 震荡间断点
			1. （例）$f(x)=\sin\frac{1}{x}, \ x\to{0}$
		3. 无穷间断点
			1. （例）$f(x)=e^{\frac{1}{x}}, \ x\to0$
	3. ==注意==
		1. 初等函数的间断点只可能是定义区间之外的点.
		2. 分段函数的间断点除了定义域之外的点，还可能是定义域之内的分界点.
3. （例）处处不连续的函数
	1. （例）Dirichlet function (德列克雷函数)
4. （例）无理数上连续有理数上不连续的函数
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=30&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. （例）Riemann function（黎曼函数）
		1. tbd...
#### Laws of Operations of Continuous Functions (连续函数的运算法则)
1. 连续初等函数运算法则
	1. <a style="red">连续基本初等函数的有限次四则运算</a>
		1. 两个函数在同一区间上连续，则函数在共同定义域上做四则运算，得到的结果看做一个新函数，则新函数在该区间上也连续。
		2. https://www.bilibili.com/video/BV15v411g7VP/?p=29&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
		3. **前提：$f(x), g(x)$ 极限均存在**，设 $lim_{x\to{x_0}}{f(x)}=f(x_0), \ lim_{x\to{x_0}}{g(x)}=g(x_0)$，对其做**有限次**四则运算
		4. $\forall\varepsilon\gt0,\ \exists\delta\gt0, \ \forall{x}(0\lt\vert{x-x_0}\vert\lt\delta: \ \vert{f(x)-a}\vert\lt\varepsilon$
		5. $\forall\varepsilon\gt0,\ \exists\delta\gt0, \ \forall{x}(0\lt\vert{x-x_0}\vert\lt\delta: \ \vert{g(x)-b}\vert\lt\varepsilon$
		- $lim_{x\to{x_0}}({\alpha{f(x)}+\beta{g(x)}}) = lim_{x\to{x_0}}{\alpha{f(x)}} + lim_{x\to{x_0}}{\beta{g(x)}} = \alpha{f(x_0)}+\beta{g(x_0)}$
		- $lim_{x\to{x_0}}({\alpha{f(x)} \times \beta{g(x)}}) = lim_{x\to{x_0}}{\alpha{f(x)}}\times lim_{x\to{x_0}}{\beta{g(x)}} = \alpha{f(x_0)}\times\beta{g(x_0)}$
		- $lim_{x\to{x_0}}{\frac{\alpha{f(x)}}{\beta{g(x)}}} =\frac{lim_{x\to{x_0}}{\alpha{f(x)}}}{lim_{x\to{x_0}}{\beta{g(x)}}}= \frac{\alpha{f(x_0)}}{\beta{g(x_0)}} \ (\beta{g(x_0)}\neq0)$
			- （例）$P_m(x)=a_{m}x^{m}+a_{m-1}x^{m-1}+...+a_{0} \ \text{在}(-\infty, +\infty)\text{连续}$
			- （例）$Q_{mn}(x)=\frac{a_{n}x^{n}+a_{n-1}x^{n-1}+...+a_{0}}{b_{m}x^{m}+b_{m-1}x^{m-1}+...+b_{0}} \ \text{在定义域处连续}$
	2. 连续基本初等函数的有限次复合函数运算
		1. https://www.bilibili.com/video/BV15v411g7VP/?p=31&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d&t=1667
		2. 问题引入：
			3. ![](../../../../Assets/Pics/Screenshot%202023-10-12%20at%208.33.41PM.png)
			4. ![](../../../../Assets/Pics/Screenshot%202023-10-12%20at%208.34.16PM.png)
		3. <a style="red">连续函数复合还是连续函数</a>
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%209.38.06AM.png)
			2. （例）双曲正弦函数：$y=f(x)=sh(x)=\frac{e^x+e^{-x}}{2}$
			3. （例）双曲正弦函数：$y=f(x)=ch(x)=\frac{e^x-e^{-x}}{2}$
			4. （例）双曲正切函数：$y=f(x)=th(x)=\frac{sh(x)}{ch(x)}$
		5. 推论：连续函数的复合函数也是连续函数
			1. （证）tbd..
		6. 复合运算和极限运算计算时可以交换次序
	3. 连续基本初等函数的反函数运算
		1. <a style="red">反函数连续性定理</a>： 严格单调的连续函数的反函数也是严格单调的连续函数
		2. https://www.bilibili.com/video/BV15v411g7VP/?p=31&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
		3. （证）
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%209.06.30AM.png)
			2. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%209.12.09AM.png)
	4. <a style="red">基本初等函数在其定义域上都是连续的</a>
		5. $y=c$
		6. $y=a^x(a\gt0,a\neq1)$
			1. （证）
		7. $y=\log_{a}{x}(a\gt0,a\neq1)$
			1. （证）
		8. $y=x^{\alpha}=e^{\alpha\ln{x}}$
			1. 当 $\alpha\in{R}$, y 在$(0,+\infty)$连续
			2. 当 $\alpha\in{N^+}$, y 在$(-\infty,+\infty)$连续
			3. 当 $\alpha\in{N^-}$, y 在$(-\infty,0)\union(0,+\infty)$连续
			4. 当 $\alpha\in{Q^+}, \ \alpha=\frac{q}{p}, \ p\text{为奇数}$, y 在$(-\infty,+\infty)$连续
			5. 当 $\alpha\in{Q^+}, \ \alpha=\frac{q}{p}, \ p\text{为偶数}$, y 在$[0,+\infty)$连续
		9. $y=\sin{x}, \ y=\cos{x}, \ ...$
			1. （证）
		10. $y=\arcsin{x}, \ y=\arccos{x}, \ ...$
			1. （证）
	5. <a style="red">初等函数在其定义域<b>区间内</b>都是连续的</a>
		1. (例）$y=\ln\sin{x}, \ \text{的连续区间为} \ (2n\pi, (2n+1)\pi), \ n\in{Z}$
		2. （例）$$y=\sqrt{\cos{x}-1} \ \text{定义域为} \ x=2n\pi,n\in{Z}, \text{但是定义域既不构成区间，也不构成间断点，所以不连续}$$
		3. （例）$lim_{x\to0}{(\cos{x})^{\frac{1}{x^2}}}$
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-12%20at%208.57.52PM.png)
		4. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-12%20at%209.12.57PM.png)
2. 连续非初等函数运算法则（略）
#### Properties of Continuous Function (连续函数的性质)
1. 闭区间上连续函数的性质 （tbd..）
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%204.09.42PM.png)
	2. 【数学分析 陈纪修老师 1080p高清版(全集)】 https://www.bilibili.com/video/BV15v411g7VP/?p=36&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	3. <a style="red">有界性</a>
	4. <a style="red">最值性</a>
	5. <a style="red">零点定理</a>
	6. <a style="red">介值性</a>
3. 开区间上连续函数的性质


### 🤔 Infinite /Infinitesimal of Functions (函数的无穷大量和无穷小量)
函数无穷（小）量（虽然在数列部分也讨论过无穷量，但是区别在于此时讨论域属于实函数上而非数列）

1. 函数无穷量定义：
	1. 无穷小量
	2. 无穷大量
	3. 无穷小量和无穷大量的关系
2. 函数极限的无穷小量的表示
	1. $O(v(x)): \text{v(x)的有界量}$
	2. $o(v(x)): \text{v(x)的无穷小量}$
#### 无穷量的运算法则
1. 函数无穷量的运算法则
	1. ==⚠️ 注意==
		1. 无穷小量和无穷大量的运算性质不是完全相同的!
	2. 无穷小
		1. 有限个无穷小的积/和仍是无穷小
		3. 无穷小量与有界量的积仍是无穷小
			1. 以上前两条中的有限二字不能少
			2. 两个无穷小的商不一定是无穷小
			3. 无穷小量和有界变量的和是不确定的
	3. 无穷大
		1. 两个无穷大量的积仍为无穷大量
		2. 无穷大量与有界变量之和仍为无穷大量
		3. 无穷大量与非零常数积/和仍为无穷大量
			1. 无穷大量和无穷大量之间的和是不确定的
			2. 无穷大量和有界变量的积是不确定的
#### 无穷量的比较
1. 函数无穷（小）量的比较
	1. 回顾数列无穷量的比较
		1. $(n\to\infty): \ n^n>>n!>>a^n(a\gt1)>>n^\alpha(\alpha\gt0)>>\ln^{\beta}{n}(\beta\gt0)$
		2. $e^x>>x^k>>\ln^n{x}$
	2. 无穷小/大量的比较（无穷量的阶）
		1. https://www.bilibili.com/video/BV15v411g7VP/?p=33&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
		2. 同阶无穷小/大: $lim_{x\to{x_0}}{\frac{u(x)}{v(x)}}=C\neq{0}, \ C\in{R}$
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.02.28AM.png)
			2. （例）$u(x)=x(1+\sin\frac{1}{x}), \ v(x)=x$
			3. （例）$u(x)=x(2+\sin\frac{1}{x}), \ v(x)=x$
		4. 高阶无穷小/大: $lim_{x\to{x_0}}{\frac{u(x)}{v(x)}}=0 \ \text{or} \ \infty$
			1. $u(x)=o(v(x)): \ \text{u(x)是v(x)的高阶无穷小}$
			2. （例）$lim_{x\to0}{\frac{1-\cos{x}}{x}}=0$
			3. （例）$lim_{x\to0}{\frac{\tan{x}-\sin{x}}{x^2}}=0$
			4. （例）$lim_{x\to\infty}{\frac{a^x}{x^k}}=\infty$
			5. （例）$lim_{x\to\infty}{\frac{\ln^b{x}}{x}}=0$
			6.  $lim_{x\to0}{\frac{-1}{\ln{x}}/x^{\alpha}}=0, \ lim_{x\to\infty+}{(\frac{-1}{\ln{x}})^k/x}=0$
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.16.21AM.png)
			7. $lim_{x\to0+}{e^{-\frac{1}{x}}/x^k}=0$
		2. k阶无穷小/大: $lim_{x\to{x_0}}{\frac{u(x)}{v^k(x)}}=C, \ C\in{R}$
		3. ==等价无穷小/大==: $lim_{x\to{x_0}}{\frac{u(x)}{v(x)}}=1, \ u(x)=v(x)+o(v(x))$
			1. （例）$lim_{x\to\infty}{\frac{x^3\sin{x}}{x^2}}=1$
			2. （例）$lim_{n\to\infty}{\frac{x^2+\ln{2-x}}{\arctan{x}}}$
			3. （例）$lim_{x\to\frac{\pi}{2}^{-}}{(\frac{\pi}{2}-x)\tan{x}}=1$
			4. （例）$lim_{x\to0}{\frac{\sin{x}}{x}}=1$ (重要等价无穷小)
			5. （例）$lim_{x\to0}{\frac{1-\cos{x}}{\frac{1}{2}x}}=1$
			6. （例）$lim_{x\to0}{\frac{\tan{x}-\sin{x}}{\frac{1}{2}x^3}}=1, \ (\tan{x}\sim{x}, \ \sin{x}\sim{x})$
			7. （例）$lim_{x\to0}{\frac{\log_{a}{(1+x)}}{x}}=lim_{x\to0}{\log_{a}{(1+x)^{\frac{1}{x}}}}=\log_{a}{e}=\frac{1}{\ln{a}}$
				1. $\therefore \ x\to0: \ \log_{a}{(1+x)}\sim\frac{x}{\ln{a}} \ \text{or} \ \ln{(1+x)}\sim{x}$
			8. （例）$lim_{x\to0}{\frac{a^x-1}{x}}$
				1. $x\to0 \to(a^x-1\sim{x}\ln{a}), \ or \ (e^x-1\sim{x})$
			9. （例）$lim_{x\to0}{\frac{(1+x)^{t}-1}{x}}$
				1. $x\to0\to(1+x)^t-1\sim{tx}$
			10. （例）$lim_{x\to0}{(1+2x)^{\frac{3}{\sin{x}}}}$
			11. $$lim_{x\to{x_0}}{u(x)}=0, \ lim_{x\to{x_0}}{v(x)}=\infty\to{lim_{x\to{x_0}}{[1+u(x)]^{v(x)}}}=e^{lim_{x\to{x_0}}{v(x)\cdot\ln{[1+u(x)]}}}=e^{lim_{x\to{x_0}}{v(x)\cdot{u(x)}}}$$
			12. $$lim_{x\to{x_0}}{u(x)}=0, \ lim_{x\to{x_0}}{v(x)}=\infty\to{lim_{x\to{x_0}}{u(x)^{v(x)}}}=lim_{x\to{x_0}}{e^{v(x)\cdot\ln{u(x)}}}=e^{lim_{x\to{x_0}}{v(x)}}\cdot{lim_{x\to{x_0}}{\ln{u(x)}}}=e^{a\cdot\ln{b}}=a^b$$
		4. $u(x)=\sqrt{x+\sqrt{x}}\begin{cases}x\to\infty&u(x)/\sqrt{x}=1\\x\to0&u(x)/\sqrt[4]{x}=1\end{cases}$
			1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.31.59AM.png)
		5. $u(x)=2x^3+3x^5\begin{cases}x\to\infty&u(x)\sim{3x^5}\\x\to0&u(x)\sim{2x^3}\end{cases}$
#### 无穷量的性质 /等价无穷小的替换
1. 函数无穷（小）量的性质
	1. 查看下面“重要极限”获得其他信息
	2. ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%2011.39.08AM.png)
	3. ==等价无穷小量的性质==
		1. https://www.bilibili.com/video/BV15v411g7VP/?p=35&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
		2. 等价无穷小量的替换
			1. 定义：
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.42.51AM.png)
			2. （证）
			3. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.42.30AM.png)
			4. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.45.57AM.png)
			5. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.50.03AM.png)
			6. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.52.15AM.png)
			7. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.57.29AM.png)
			8. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2011.00.28AM.png)
#### 重要极限与等价无穷小
![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%2010.49.28AM.png)

1. ==常见的函数等价无穷小== （这些只是泰勒展开的特殊情况）
	1. 无限次极限式
		1. $lim_{x\to0}{(1+x)^{\frac{1}{x}}}=e$
	2. 有限次极限式
		1. 幂指函数式
			1. $x\to0, \ \log_{a}{(1+x)}=\frac{\ln{(x+1)}}{\ln{a}}\sim\frac{x}{\ln{a}}, \ \ln{(1+x)}\sim{x}, \ x-\ln{(1+x)}\sim\frac{1}{2}x^2$
			2. $x\to0, \ e^x - 1 \sim{x}$
			3. $x\to0, \ (1+x)^\alpha-1\sim\alpha{x}$
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2010.28.24AM.png)
				2. 这个式子的扩展：
					1. $$lim_{x\to{x_0}}{u(x)}=0, \ lim_{x\to{x_0}}{v(x)}=\infty\to{lim_{x\to{x_0}}{[1+u(x)]^{v(x)}}}=e^{lim_{x\to{x_0}}{v(x)\cdot\ln{[1+u(x)]}}}=e^{lim_{x\to{x_0}}{v(x)\cdot{u(x)}}}$$
					2. $$lim_{x\to{x_0}}{u(x)}=b, \ lim_{x\to{x_0}}{v(x)}=a\to{lim_{x\to{x_0}}{u(x)^{v(x)}}}=lim_{x\to{x_0}}{e^{v(x)\cdot\ln{u(x)}}}=e^{lim_{x\to{x_0}}{v(x)}\cdot{lim_{x\to{x_0}}{\ln{u(x)}}}}=e^{a\cdot\ln{b}}=a^b$$
					3. ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%2011.36.45AM.png)
					4. ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%201.31.21PM.png)
		2. 三角函数式
			1. $x\to0, \ 1-\cos{x}\sim\frac{1}{2}x^2, \ \sin{x}\sim{x}$
			2. $x\to0, \ x-\sin{x}\sim\frac{1}{6}x^3, \ x-\arcsin{x}\sim-\frac{1}{6}x^3$
			3. $x\to0,  \ \tan{x}\sim{x}, \ x-\arctan{x}\sim\frac{1}{3}x^3, \ x-\tan{x}\sim-\frac{1}{3}x^3$
	4. ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%2011.40.55AM.png)


### 极限的计算
1. 导数定义、定积分的定义、级数收敛的性质
2. 四则运算、基本运算法则（无穷小/大量的性质，如 无穷小和无穷小相乘还是无穷小）
3. 函数的连续
4. 两个重要极限
5. 等价无穷小和泰勒展开
6. 导数定理：洛必达法则/拉格朗日、柯西中值定理
7. 数列的极限性质：单调有界数列必有极限、夹逼、放缩、
	1. 证明不等式（有哪些方法证明/计算不等式？）

注意：我们学的运算法则都是正对有限次运算的，对于无限次运算，除了证明过的特例（如重要极限）可以使用，不可以主观臆断地对其使用运算法则。
1. 例子
	1. $\lim_{n\to\infty}{\frac{n^n}{(n+1)^n}}$
	2. $\lim_{n\to\infty}{(1-\frac{1}{n})^{\sqrt{n}}}$
		1. 正确的做法：$\lim_{n\to\infty}{(1+\frac{1}{\sqrt{n}})^{\sqrt{n}}(1-\frac{1}{\sqrt{n}})^{\sqrt{n}}}$
		2. 错误的做法：$\lim_{n\to\infty}{((1-\frac{1}{n})^{n})^{\frac{1}{\sqrt{n}}}}$
		3. 虽然在这个例子里两个做法答案都一样。。
	3. 另一个例子可以这样拆开的例子：
		1. $\lim_{x\to{0}}{(\frac{1+2^x}{2})^{\frac{1}{x}}}=\lim_{x\to{0}}{((1+\frac{2^x-1}{2})^{\frac{2}{2^x-1}})^{\frac{2^x-1}{2x}}}=\sqrt2$
	4. 这个原因是因为极限的运算法则指出，只有当f(x),g(x)分别单独收敛，才可以将$lim_{x\to0}f(x)^{g(x)}$ 分开计算：$lim_{x\to0}f(x)^{lim_{x\to0}g(x)}$
##### Elementary Function
- 运算对象：基本初等函数（常数函数，幂指对函数，三角/反三角函数）
- 运算规则：四则运算 + 复合函数运算/反函数运算
##### Non-elementary Function


### 3️⃣ Derivation of A Function
↗ [Differential Calculus & Derivative of Function](../Differential%20Calculus%20&%20Derivative%20of%20Function/Differential%20Calculus%20&%20Derivative%20of%20Function.md)



## Ref


