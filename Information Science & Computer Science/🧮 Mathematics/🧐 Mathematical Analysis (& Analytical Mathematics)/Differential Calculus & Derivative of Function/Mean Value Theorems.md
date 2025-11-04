# Mean Value Theorems

[TOC]



## Res
### Related Topics
↗ [Series (级数)](../Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Series%20(级数)/Series%20(级数).md)



## Contents
https://www.bilibili.com/video/BV15v411g7VP/?p=50&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
### 🎯 Mean Value Theorem
1. 函数的极值和最值
	1. 如何找极值：验证一阶导数等于0或不存在的点
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.12.37AM.png)
#### 费马引理
1. 费马引理用于说明导函数零点的存在性。
2. 费马引理 (X0是极值点，且f在X0可导，-> f(x0)导数为0)
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.11.16AM.png)
#### Rolle Mean Value Theorem (罗尔中值定理)
1. Rolle Mean Value Theorem (罗尔中值定理)
	1. 罗尔定理用于考虑导函数的零点。
	2. 闭区间连续，开区间可导
	3. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.23.49AM.png)
	4. （例）Lagrange Polynomial 
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.32.03AM.png)
	5. 推论：
		1. 前提：n重零点
		2. 若f(x)在[a,b]上有n重零点，且f(x)m重可导，则f(x)的m阶导数至少有n-m个零点。
		3. ![mean_value_theorem.excalidraw](../../../../Assets/Illustrations/Math/mean_value_theorem.excalidraw.md)
#### Lagrange Mean Value Theorem (拉格朗日中值定理)
1. 拉格朗日定理作用在于用导数考虑函数增值量，即$f(x+\Delta{x})-f(x)=f^{'}(x+\theta\Delta{x})\cdot{\Delta{x}}, \  \theta\in(0,1)$
2. Lagrange Mean Value Theorem (拉格朗日中值定理)
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.41.22AM.png)
		1. （例）
			1. $y=C \iff y^{'}=0$
			2. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.45.20AM.png)
#### Cauchy 中值定理 
1. 柯西中值定理是拉格朗日中值定理的一般形式。
2. Cauchy 中值定理 （tbd）
	1. ![|300](../../../../Assets/Pics/Pasted%20image%2020231116201148.png)
	2. https://www.bilibili.com/video/BV15v411g7VP/?p=53&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d&t=897
	3. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2010.10.34AM.png)
	4. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2010.10.17AM.png)
	5. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2010.19.09AM.png)
	6. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2010.27.05AM.png)
		2. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2010.27.36AM.png)
	7. ![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%208.16.50PM.png)
#### 导数与函数性质的关系
##### 一阶导数与函数单调性的关系
1. 一阶导数与函数单调性的关系
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.47.33PM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.49.08PM.png)
	3. 【数学分析 陈纪修老师 1080p高清版(全集)】 https://www.bilibili.com/video/BV15v411g7VP/?p=51&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	4. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.52.35AM.png)
	5. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2011.53.48AM.png)
##### 二阶导数与函数凸性的关系
1. 二阶导数与函数凸性的关系
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.52.02PM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2012.01.14PM.png)
	3. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2012.04.02PM.png)
	4. ![](../../../../Assets/Pics/Screenshot%202023-10-23%20at%2012.09.56PM.png)
3. 拐点
	1. 【数学分析 陈纪修老师 1080p高清版(全集)】 https://www.bilibili.com/video/BV15v411g7VP/?p=52&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. 如何找拐点：验证二阶导数等于0或不存在的点
	3. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.23.25AM.png)
	4. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.28.50AM.png)
4. Jason 不等式
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.30.53AM.png)
	2. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.33.10AM.png)
5. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.39.37AM.png)
6. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.40.25AM.png)
7. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.43.34AM.png)
8. （例）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.47.59AM.png)
9. （例）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.51.00AM.png)
10. （例）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%209.59.28AM.png)
#### 微分中值定理的应用
![|300](../../../../Assets/Pics/Pasted%20image%2020231116201113.png)

1. 关键：逆向思维，设辅助函数
2. 证明恒等式
3. 证明不等式
4. 证明有关中值问题的结论
### 积分中值定理
🔗 https://math.fandom.com/zh/wiki/积分第一中值定理?variant=zh-hant

### 🎯 L'Hospital Theorem
https://www.bilibili.com/video/BV15v411g7VP/?p=54&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

1. 定义
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2010.40.47AM.png)
2. （证）（tbd）
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=54&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d&t=1002
##### 洛必达法则的使用方法
1. 洛必达法则是充分性定理，必须要保障极限存在的前提下才能用洛必达法则
2. 洛必达法则和等价无穷小结合使用
3. 熟练掌握不同待定型下的使用技巧

![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%203.21.20PM.png)

5. (例)
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2011.20.08AM.png)
6. （例）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-26%20at%2011.46.34AM.png)
7. https://www.bilibili.com/video/BV15v411g7VP/?p=55&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
8. 使用法则的注意
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-30%20at%2012.01.03PM.png)



### 🎯 ⭐ Taylor Theorem & Polynomial Interpolation
#### 泰勒展开的定义/插值多项式
1. 目的：用多项式近似表达函数
2. 应用：理论分析（联系一个函数f和它的各阶导数）/近似计算/求极限/证明不等式/求渐进性
3. 比较：
	1. 拉格朗日余项要求f(x)在区间上n+1阶可导，皮亚诺余项只要f(x)在x0处的n阶导存在。
	2. 拉格朗日余项用于误差估计，皮亚诺余项用于求函数的极限
	3. 拉格朗日余项用在一段固定区间，皮亚诺余项用在x0的充分小领域内。
4. 泰勒多项式
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=56&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. 引入 (使用多项式拟合其他函数)
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-30%20at%2012.06.12PM.png)
	3. 带皮亚诺余项的泰勒多项式
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2010.44.11AM.png)
		2. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2010.45.28AM.png)
	2. 带拉格朗日余项的泰勒多项式
		1. https://www.bilibili.com/video/BV15v411g7VP/?p=57&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
5. 插值多项式
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2011.09.11AM.png)
	2. https://www.bilibili.com/video/BV15v411g7VP/?p=58&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
#### 泰勒展开的计算
1. 泰勒展开的计算
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=59&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2011.30.33AM.png)
	2. 基本函数的泰勒展开
		1. 基本函数在0处的泰勒展开（基本函数的麦克劳林公式）
			1. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2011.33.55AM.png)
			2. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2011.39.06AM.png)
			3. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2011.44.59AM.png)
				2. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2011.55.09AM.png)
				3. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2011.57.39AM.png)
		2. 基本函数在非0处的泰勒展开（通过等价变换化为在0处的泰勒展开）
			1. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2012.03.31PM.png)
			2. （例）
				1. ![](../../../../Assets/Pics/Screenshot%202023-11-01%20at%2012.07.29PM.png)
#### 泰勒展开的性质
1. 泰勒展开的性质
	2. https://www.bilibili.com/video/BV15v411g7VP/?p=60&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	3. 性质一：
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2010.22.18AM.png)
		2. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2010.27.43AM.png)
		3. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2010.32.04AM.png)
#### 泰勒展开的应用
1. 泰勒展开的应用
	1. 近似计算
		1. （例）
			1. e
		2. （证明）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2011.28.20AM.png)
		3. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2010.42.23AM.png)
	2. ⭐ ⭐ 求极限
		1. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2010.46.14AM.png)
		2. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2010.53.52AM.png)
	3. 证明不等式
		1. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2010.59.41AM.png)
		2. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2011.05.00AM.png)
	4. 求曲线渐进线
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2011.14.05AM.png)
		2. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2011.17.06AM.png)
		3. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2011.19.59AM.png)
		4. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2011.25.06AM.png)
#### 常见函数的泰勒展开 ($x_0=0$)
1. $e^x=1+x+\frac{x^2}{2!}+...+\frac{x^n}{n!}$
2. $\sin{x}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+...+\frac{(-1)^{n-1}x^{2n-1}}{(2n-1)!}+R_{2n}(x)$
3. $\cos{x}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+...+\frac{(-1)^{n}x^{2n}}{(2n)!}+R_{2n+1}(x)$
4. $(1+x)^\alpha=1+\alpha{x}+\frac{\alpha(\alpha-1)}{2!}x^2+...+\frac{\alpha(\alpha-1)...(\alpha-n+1)}{n!}x^n+R_n(x)$
5. $ln(1+x)=x-\frac{1}{2}x^2+\frac{1}{3}x^3-...+(-1)^{n-1}\frac{1}{n}x^n+R_n{x}$



## Ref

