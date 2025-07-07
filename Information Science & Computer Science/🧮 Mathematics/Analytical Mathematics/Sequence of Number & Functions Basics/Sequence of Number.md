# Sequence of Number

[TOC]



## Res


## Contents
### The Expansion of Set of Number 
数系的扩充 （回忆代数结构）
- 自然数集N：加法、乘法封闭
	- 离散性
- 整数集Z：加法、减法、乘法封闭
	- 离散性
- 有理数集Q：加法、减法、乘法、除法封闭 (有限小数+无限循环小数)
	- 稠密性（无限分割），但有空隙
	- 离散性
- (第一次数学危机)
	- 可公度：a，b是任意两线段的长度，则存在另一长度为c的线段，使得$a=mc, b=nc, \frac{a}{b} = \frac{m}{n}$
	- 正方形对角线不可公度！
	- （例）证明 $\sqrt2$ 不是有理数
		- 反证法：$\sqrt2 = \frac{p}{q}, \ p,q\in{Z}$
	- 几何上：数轴上存在有理数无法到达的点
- 实数集R：加法、减法、乘法、除法、根号 封闭 （有理数 + 无理数「无限不循环小数」）
	- 使得数轴完全填满
	- 连续性（实数连续统）
- 复数集

### The Continuity of The Set of Real Number
实数系的连续性
- 实数集合内的最大数与最小数
	- 有限非空集
		- 最大数
			- $S \subset R, \ S \neq \emptyset; \ if \ \exists C \in S, \ \forall{x}\in{S}, x \leq C, \ \to \text{C is the maxium in S}, \ C = \max{S}$
		- 最小数
			- 
		- 有限非空集合必有最大最小数
			- （证）反证法
	- 无限集
		- 不一定有最大最小数
			- （证）
- 实数集合的上界/下界
	- 上界：$S \subset R, \ S \neq \emptyset; \ if \ \exists M \in R, \ \forall{x}\in{S}, x \leq M$, 称M是S一个上界，或称S有上界
	- 下界：$S \subset R, \ S \neq \emptyset; \ if \ \exists m \in R, \ \forall{x}\in{S}, x \geq m$, 称m是S一个下界，或称S有下界
- 实数集合的上界集合/下界集合，上确界/下确界
	- 上界集合最大数/最小数，上确界
		- 设U 是集合S的上界集合，则U没有最大数；但是U一定有最小数，记为 $\beta=\sup{S}$，称为S的**上确界**。「确界存在定理（实数系连续性定理）」
		- $\beta \ \begin{cases}\beta \ 是上界&\forall{x}\in{S}, \ x \leq\beta \\ \beta=\sup{S}&\forall\varepsilon\gt0, \ \exists{x}\in{S}, \ x \gt \beta-\varepsilon \end{cases}$
	- 下界集合最大数/最小数，下确界
		- 设U 是集合S的下界集合，则U没有最小数；但是U一定有最大数，记为 $\alpha=\inf{S}$，称为S的**下确界**。「确界存在定理（实数系连续性定理）」
		- $\alpha \ \begin{cases}\alpha \ 是下界&\forall{x}\in{S}, \ x \geq\alpha \\ \alpha=\inf{S}&\forall\varepsilon\gt0, \ \exists{x}\in{S}, \ x \lt \alpha+\varepsilon \end{cases}$
- <a style="red">确界存在定理（实数系连续性定理）</a>
	- https://www.bilibili.com/video/BV1sX4y1Y7jH/?p=8&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	- 定义：非空有上界的（实）数集必有上确界；非空有下界的（实）数集必有下确界。
	- 证明：
		- 设 $$S \subset R, S \neq\emptyset, \ \text{S有上界}, \ S=\{a_0+0.a_1a_2...a_n... \vert \ a_0=[x], \ 0.a_1a_2...a_n...=(x), \ s\in{S}\}$$
	- （例）$T=\{x \vert x\in{Q}, \ x\gt{0}, \ x^2\lt{2}\}, \ \text{则T在Q内没有上确界} \left(\sqrt{2}不是上确界，因为\sqrt{2}\notin{Q} \right)$
	- 

### Sequence of Number / Limits of Sequence of Number
数列
- 数列的定义：特殊的离散函数（$Z^+ \to \text{some sets...}$）
- 数列的表示
	- 枚举
	- 表达式
	- 通项式
- ==数列的极限==
	- （例）圆周率$\pi$
		- 刘徽：使用圆内接正多边形的周长逼近圆的周长（$2\pi$）
		- "割值弥细，所失弥少；割之又割，以至于不可割，则与圆周合体而无所失矣。"
		- （见下“重要数列极限”）
	- 数列极限的定义
		- 邻域的定义
			- 
		- （柯西）
			- $lim_{n\to\infty}{x_n}=a, \ a\in{R}: \forall\varepsilon\gt0,\exists{N_0}\in{N}, \forall n\gt{N_0}, \vert x_n - a \vert \lt \varepsilon$
			- 若a存在，称$x_n$收敛于a；否则称其发散
		- （瓦尔）
			- ..
			- 若a存在，称$x_n$收敛于a；否则称其发散
		- (注意：数列收敛与否与数列前有限项无关)
		- ![](../../../../Assets/Pics/Screenshot%202023-10-06%20at%2012.29.54AM.png)
		- 使用定义证明数列极限： $n \to \infty$ (放缩)
			- https://www.bilibili.com/video/BV1sX4y1Y7jH/?p=10&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
			- 基本初等函数
				- 常数函数
					- $lim_{n\to\infty}a$
				- 幂、指、对函数
					- ${n^2}$
					- ${\left(-1\right)^n}$
					- ${q^n, \ 0<\vert q \vert<1}$
						- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%204.51.50PM.png)
					- $lim_{n \to \infty}{\sqrt[n]{a}} = 1, a>1$
						- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%204.52.12PM.png)
				- 三角、反三角函数
					- 
			- 初等函数
				- 加减+基本初等函数（及其复合/求逆）
					- 略
				- 乘除+基本初等函数（及其复合/求逆）
					- ${\frac{n}{n+3}} \to 1$
					- ${\frac{1}{n}}$
					- $lim_{n\to\infty}{\frac{n^2+1}{2n^2-7n}}=\frac{1}{2}$
						- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%204.55.14PM.png)
				- 基本初等函数的复合/求逆
			- 非初等函数
				- $lim_{n\to\infty}{\sqrt[n]n = 1}$
					- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%204.52.29PM.png)
				- $lim_{n\to\infty}{\sqrt[n]{n^{k}} = 1}, \ k\in{N}$
				- $lim_{n\to\infty}{a_n} = a, \ lim_{n\to\infty}{\frac{a_1+a_2+...+a_n}{n}} = a$
					- 见下“重要不等式的数列极限”
#### Properties of Sequence of Number
- <a style="red">数列极限的性质</a>
	- 唯一性
		- $lim_{n\to\infty}{x_n}=a, lim_{n\to\infty}{x_n}=b \to a=b$
		- （证）
	- 有界性
		- $\exists{M}\in{R}, \ \forall{n}\in{N^+}\to x_n \leq M$: 称M为$\{x_n\}$上界，或称其有上界
		- $\exists{m}\in{R}, \ \forall{n}\in{N^+}\to x_n \geq m$: 称m为$\{x_n\}$下界，或称其有下界
		- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%205.11.32PM.png)
		- <a style="red">收敛数列必定有界</a> （有界不一定收敛；单调有界必收敛；见下“收敛准则”）
			- （证）
	- 保序性（实际上是前两个性质的推论）
		- ![](../../../../Assets/Pics/Screenshot%202023-10-06%20at%2010.42.51AM.png)
		- 推论1: $if \ lim_{n\to\infty}{y_n = b \gt 0}, \ then \ \exists N, \forall n \gt N, y_n \gt \frac{b}{2} \gt 0$
		- 推论2: $if \ lim_{n\to\infty}{y_n = b \lt 0}, \ then \ \exists N, \forall n \gt N, y_n \lt \frac{b}{2} \lt 0$
		- 推论3: $if \ lim_{n\to\infty}{y_n = b \neq 0}, \ then \ \exists N, \forall n \gt N, \vert y_n \vert \gt \vert \frac{b}{2} \vert \gt 0$
#### 数列极限的计算
总结：
1. 运算法则：四则运算法则
2. 等价无穷小
3. 夹逼/收敛+单调
4. 放缩
5. 重要极限
##### 收敛数列的四则运算
- <a style="red">收敛数列的四则运算（确定，有限）</a>
	- **前提：$x_n, \ y_n$ 极限均存在**，设 $lim_{n\to\infty}{x_n}=a, \ lim_{n\to\infty}{y_n}=b$，对其做**有限次**四则运算
		- $lim_{n\to\infty}({\alpha{x_n}+\beta{y_n}}) = lim_{n\to\infty}({\alpha{x_n}}) + lim_{n\to\infty}({\beta{y_n}}) = \alpha a + \beta b$
			- （证）
		- $lim_{n\to\infty}({\alpha{x_n} \times \beta{y_n}}) = lim_{n\to\infty}({\alpha{x_n}})\times lim_{n\to\infty}({\beta{y_n}}) = \alpha a \times \beta b$
			- （证）
		- $lim_{n\to\infty}{\frac{\alpha{x_n}}{\beta{y_n}}} =\frac{lim_{n\to\infty}({\alpha{x_n}})}{lim_{n\to\infty}({\beta{y_n}})}= \frac{\alpha a}{\beta b}$
			- （证）
	- **初等函数**在数列极限上的**有限次**四则运算
		- $lim_{n\to\infty}{\frac{5^{n+1}-(-2)^n}{3\cdot5^n + 2\cdot3^n}} \to 1$
		- $lim_{n \to \infty}{\sqrt[n]{a}} = 1, a>0$
			- $\begin{cases}a \gt 1 & 已证 \\ a = 1 & 显然 \\ a \lt 1 & lim_{n\to\infty}{\frac{1}{\sqrt[n]{\frac{1}{a}}}} \end{cases}$
		- $lim_{n\to\infty}{n\cdot(\sqrt{n^2+1} - \sqrt{n^2-1})}$
	- **初等函数**在数列极限上的**无限次**四则运算：
		- $lim_{n\to\infty}({\frac{1}{\sqrt{n^2+1}}+\frac{1}{\sqrt{n^2+2}}+\frac{1}{\sqrt{n^2+3}}+...+\frac{1}{\sqrt{n^2+n}}})$
			- 夹逼
##### 收敛数列极限的重要计算方法
- <a style="red">夹逼定理</a>
	- （证）
	- （例）$lim_{n\to\infty}({\sqrt{n+1}-\sqrt{n})}$
	- （例）$lim_{n\to\infty}{(a_1^n + a_2^n + ... + a_p^n)^{\frac{1}{n}}} = \max{a_i}$
	- （例）$lim_{n\to\infty}{\sqrt[n]n = 1}$
		- $1 \lt \sqrt[n]{n} = \sqrt[n]{\sqrt{n}\sqrt{n}\cdot\underbrace{1\cdot1\cdot ... \cdot1}}_{n-2} \leq \frac{2\sqrt{n} + n -2}{n}$
	- （例）$lim_{n\to\infty}{\sqrt[n]{n^2} = 1}$
		- $1 \lt \sqrt[n]{n^2} = \sqrt[n]{\sqrt{n}\sqrt{n}\sqrt{n}\sqrt{n}\cdot\underbrace{1\cdot1\cdot ... \cdot1}}_{n-4} \leq \frac{4\sqrt{n} + n - 4}{n}$
- <a style="red">单调有界数列必收敛</a>
	- （证）
	- （例）$x_1>0, \ x_{n+1}=1+\frac{x_n}{1+x_n}, \ n=1,2,3...$
		- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%206.41.19PM.png)![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%206.42.16PM.png)
	- （例）$0\lt{x_1}\lt{1}, \ x_{n+1}=x_n(1-x_n), \ lim_{n\to\infty}{x_n}=?$
		- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%207.49.31PM.png)
		- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%207.49.40PM.png)
	- （例）$x_1=\sqrt2, \ x_{n+1}=\sqrt{3+2x_n}, \ n=1,2,3... \ lim_{n\to\infty}{x_n}=?$
		- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%207.55.49PM.png)
	- （例）$x_1=\sqrt2, \ x_2=\sqrt{2+\sqrt2}, \ x_3=\sqrt{2+\sqrt{2+\sqrt2}}, ... \ lim_{x\to\infty}{\sqrt{2+x_{n-1}}} = ?$
##### 重要收敛数列和其极限
- 重要收敛数列和其极限
	- https://www.bilibili.com/video/BV15v411g7VP/?p=17&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	- ⭐ Fabbinaci 数列：$a_n = a_{n-1} + a_{n-2}, \ b_n=\frac{a_n}{a_{n-1}}$
		- $lim_{}{b_n}=\frac{1\pm\sqrt5}{2}, \ b_{2k}, \ b_{2k+1}, \ k\in{N}$
		- tbd..
	- ⭐ $\pi$ 
		- 
	- ⭐ $e$ 
		- $lim_{n\to\infty}(1+\frac{1}{n})^n \ \to e$
			- $(1+\frac{1}{n+1})^n \lt e \lt (1+\frac{1}{n})^{n+1}$
	- ⭐ 调和级数数列
		- $a_n=1+\frac{1}{2^p}+\frac{1}{3^p}+\frac{1}{4^p}+...+\frac{1}{n^p}, \ p \gt 0$
		- $\begin{cases}p\gt1&{a_n}收敛\\p=1&a_n调和级数\\0\lt{p}\lt{1}&{a_n\to\infty}\end{cases}$
	- $\gamma$ (欧拉常数)
		- 取调和级数数列中p=1，得 $lim_{n\to\infty}{\{(1+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{n})-\ln{n}\}} \to \gamma$
		- (证)
		- （例）$lim_{n\to\infty}{(\frac{1}{n+1}+\frac{1}{n+2}+...+\frac{1}{2n})}=\ln{2}$
			- $\begin{cases}b_n=\{(1+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{n})-\ln{n}\}\to\gamma\\b_{2n}=\{(1+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{2n})-\ln{2n}\}\to\gamma\end{cases}$
			- （前n项依次相减）$lim_{n\to\infty}{b_{2n}-b_n}=lim_{n\to\infty}{\{(\frac{1}{n+1}+\frac{1}{n+2}+...+\frac{1}{2n})-\ln{2}\}} \to 0$
		- （例）$lim_{n\to\infty}{(1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+...+ (-1)^{n+1}\frac{1}{n})}=\ln{2}$
			- $\begin{cases}b_n=\{(1+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{n})-\ln{n}\}\to\gamma\\b_{2n}=\{(1+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{2n})-\ln{2n}\}\to\gamma\end{cases}$
			- （前n项错位相减）$lim_{n\to\infty}{b_{2n}-b_n}=lim_{n\to\infty}{\{(1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+...+ (-1)^{n+1}\frac{1}{n})-\ln{2}\}} \to 0$

重要不等式的数列极限 （$设 \ lim_{n\to\infty}{a_n} = a$）
- 回顾重要不等式： $\frac{a_1 + a_2 + a_3 + ... a_n}{n} \geq \sqrt{a_1a_2a_3...a_n} \geq \frac{n}{\frac{1}{a_1}+\frac{1}{a_2}+...+\frac{1}{a_n}}$
- $\lim_{n\to\infty}{\frac{a_1 + a_2 + a_3 + ... a_n}{n}}=a$
	- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%205.06.56PM.png)
	- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%205.07.04PM.png)
- $\sqrt{a_1a_2a_3...a_n}$
- $\frac{n}{\frac{1}{a_1}+\frac{1}{a_2}+...+\frac{1}{a_n}}$

其他重要不等式极限
- $lim_{n\to\infty}{(a_1^n + a_2^n + ... + a_p^n)^{\frac{1}{n}}} = \max{a_i}$
	- ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%203.09.57PM.png)
	- ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%203.10.43PM.png)
- $lim_{n\to\infty}{\sqrt[n]{n^\alpha} = 1}$
	- $lim_{n\to\infty}{\sqrt[n]n = 1}$
		- $1 \lt \sqrt[n]{n} = \sqrt[n]{\sqrt{n}\sqrt{n}\cdot\underbrace{1\cdot1\cdot ... \cdot1}}_{n-2} \leq \frac{2\sqrt{n} + n -2}{n}$
- $lim_{n \to \infty}{\sqrt[n]{a}} = 1, a>0$
	- $\begin{cases}a \gt 1 & 已证 \\ a = 1 & 显然 \\ a \lt 1 & lim_{n\to\infty}{\frac{1}{\sqrt[n]{\frac{1}{a}}}} \end{cases}$
##### 特殊的数列极限：无穷量
- ==特殊的数列极限：无穷量==
	- 无穷量定义
		- $\infty$ 无穷大量 （正无穷大，负无穷大）
			- 定义：$\forall{G}\gt{0}, \ \exists{N_0}\in{N}: \ \forall{n}\gt{N_0}\to \vert{x_n}\vert\gt{G}$
				- 正无穷大量：$\forall{G}\gt{0}, \ \exists{N_0}\in{N}: \ \forall{n}\gt{N_0}\to {x_n}\gt{G}$
				- 负无穷大量：$\forall{G}\gt{0}, \ \exists{N_0}\in{N}: \ \forall{n}\gt{N_0}\to {x_n}\lt{-G}$
			- （例）$\vert{q}\vert\gt{1}, \ lim_{n\to\infty}{q^n}\to\infty$
			- （例）$lim_{n\to\infty}{\frac{n^2-1}{n+5}}\to\infty$
		- $0$ 无穷小量
			- 定义：
			- （例）
	- <a style="red">无穷量的性质</a>
		- $if \ x_n \neq 0, \ lim_{n\to\infty}{x_n} \to \infty \Leftrightarrow ( lim_{n\to\infty}{\frac{1}{x_n}} \to 0 )$
			- （证）
	- 无穷量运算
		- https://www.bilibili.com/video/BV1sX4y1Y7jH/?p=14&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
		- $lim_{n\to\infty}{\frac{a_0n^k+a_1n^{k-1}+a_3n^{k-2}+...+a_{k-1}n+a_k}{b_0n^l+b_1n^{l-1}+b_3n^{l-2}+...+b_{l-1}n+b_l}}, \ a_0,b_0 \neq 0, \ k,l\in{N^+}$
			- $lim_{n\to\infty}{[n^{k-l}\frac{a_0+\frac{a_1}{n}+\frac{a_2}{n^2}+...+\frac{a_k}{n^k}}{b_0+\frac{b_1}{n}+\frac{b_2}{n^2}+...+\frac{b_l}{n^l}}]}, \ \frac{a_0}{b_0}\neq0$
			- $=\begin{cases}\infty&k\gt{l}\\\frac{a_0}{b_0}&k=l\\0&k\lt{l}\end{cases}$
		- 无穷量运算类型
			- 确定型：
			- 待定型：
		- 无穷量运算法则
			- <a style="red">Stolz Theorm</a>
				- $$\{y_n\}严格单增, \ lim_{n\to\infty}{y_n}={+\infty}:  \ lim_{n\to\infty}{\frac{x_n-x_{n-1}}{y_n-y_{n-1}}}=a, \ (a\in{R}, \ a=+\infty, \ a=-\infty) \to \ lim_{n\to\infty}{\frac{x_n}{y_n}}=a$$
				- ![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%206.10.30PM.png)![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%206.10.48PM.png)![](../../../../Assets/Pics/Screenshot%202023-10-07%20at%206.14.34PM.png)
				- （例）$lim_{n\to\infty}{\frac{1^k+2^k+3^k+...+n^k}{n^{k+1}}}$
				- （例）$lim_{n\to\infty}{a_n}=a, \ lim_{n\to\infty}{\frac{a_1+2a_2+3a_3+...+na_n}{n^2}}$
### 实数系的基本定理
- <a style="red">闭区间套定理</a>
	- https://www.bilibili.com/video/BV15v411g7VP/?p=18&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
- <a style="red">实数集不可列定理</a> （实数系的连续性）
	- ![](../../../../Assets/Pics/Screenshot%202023-10-09%20at%2011.26.38AM.png)
- 子列\*
	- https://www.bilibili.com/video/BV15v411g7VP/?p=19&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	- 子列定义：
		- $x_{n_k}, \ n_k\gt{n_{k-1}} \ k\in{N}, \ n_k\in{N}$
	- 子数列性质：
		- <a style="red">子数列收敛的继承性</a>
			- $lim_{n\to\infty}{x_n}=a\to lim_{k\to\infty}{x_{n_k}}=a$
				- （证） $$\begin{cases}\because lim_{n\to\infty}{x_n}=a, \ a\in{R}\to \forall\varepsilon\gt0,\exists{N_0}\in{N}, \forall n\gt{N_0}, \vert x_n - a \vert \lt \varepsilon\\\therefore\exists K_0\in{N}, \ \forall{k}\gt{K_0}, \ n_k\gt{N_0}\to\vert x_{n_k} - a \vert \lt\varepsilon\end{cases}$$
			- （推论）反过来，考虑式子的逆否命题：若存在两个子列收敛结果不相等，则原数列不收敛
				- （例）$\text{证}\sin{\frac{n\pi}{4}}\text{发散}$
		- <a style="red">致密性定理（Bolzano-weierstrass Theorem）</a>
			- 有界数列不一定收敛，但是有界数列必有收敛子列
				- ![](../../../../Assets/Pics/Screenshot%202023-10-09%20at%201.10.13PM.png)
			- 无界数列必有发散子列
- 基本数列\*
	- https://www.bilibili.com/video/BV15v411g7VP/?p=20&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	- 定义：$\forall\varepsilon\gt0, \ \vert{a_n}-{a_m}\vert\lt\varepsilon, \ \forall n,m\in{N}$
	- （例）$a_n=(1+\frac{1}{(2)^2}+\frac{1}{(3)^2}+...+\frac{1}{(n)^2})$
		- $$\text{设}m\gt{n}, \ {a_m-a_n}=(1+\frac{1}{(n+1)^2}+\frac{1}{(n+2)^2}+...+\frac{1}{(m)^2})\lt(1+\frac{1}{n(n+1)}+\frac{1}{(n+1)(n+2)}+...+\frac{1}{(m-1)(m)})\lt\frac{1}{n}-\frac{1}{m}\lt\frac{1}{n}$$
		- $\therefore\forall\varepsilon, \ \exists{N=[\frac{1}{\varepsilon}]}, \ \forall{m\gt{n}\gt{N}}, \ \vert{a_n}-{a_m}\vert\lt\frac{1}{n}\lt\varepsilon\to{a_n}\text{是基本数列}$
	- （例）$a_n=(1+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{n})$
		- $$\text{设}m\gt{n}, \text{不妨令}m=2n, \ a_m-a_n=(\frac{1}{n+1}+\frac{1}{n+2}+...+\frac{1}{m})\gt{(m-n)}(\frac{1}{m}+\frac{1}{m}+...+\frac{1}{m})=\frac{1}{2}$$
		- $\therefore\forall\varepsilon, \ \vert{a_n}-{a_m}\vert\not\lt\varepsilon\to{a_n}\text{不是基本数列}$
	- <a style="red">Cauchy收敛原则</a> (实数系完备性)
		- $\{a_n\}\text{收敛}\iff\{a_n\}\text{是基本数列}$
		- $lim_{n\to\infty}{a_n}=A, \ A\in{R} \iff \forall\varepsilon\gt0, \ \exists{N}, \ \forall{n,m\gt{N}}\to\vert{a_n}-{a_m}\vert\lt\varepsilon, \ \forall n,m\in{N}$
		- （证）
			- 必要性：
				- ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%2011.10.07AM.png)
			- 充分性：
				- ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%2011.22.01AM.png)
		- （例）$\vert{x_{n+1}-x_{n}}\vert\lt{k}\lt\vert{x_n}-{x_{n-1}}\vert\text{（数列满足压缩性）}\to\text{数列收敛}$
			- ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%2012.08.58PM.png)


1. https://www.bilibili.com/video/BV15v411g7VP/?p=21&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
2. 以下定理是相互等价的，它们共同称为实数系的基本定理：
	1. 确界存在定理
	2. 单调有界数列收敛定理
	3. 闭区间套定理
	4. 致密性定理（Bolzano-weierstrass Theorem）
	5. Cauchy收敛原则
	6. ![](../../../../Assets/Pics/Screenshot%202023-10-11%20at%201.27.59PM.png)
3. 证明：$\text{Cauchy收敛原则}\iff\text{闭区间套定理}$
	1. tbd..



## Ref

