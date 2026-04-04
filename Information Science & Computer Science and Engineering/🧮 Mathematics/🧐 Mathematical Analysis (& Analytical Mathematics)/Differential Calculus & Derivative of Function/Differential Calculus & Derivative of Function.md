# Differential Calculus & Derivative of Function

[TOC]



## Res
### Related Topics


### Other Resources



## Contents
### 一元导数与微分
#### 1️⃣ 一元一阶导数与微分
##### 一元一阶导数与微分的定义
https://www.bilibili.com/video/BV15v411g7VP/?p=39&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

1. 问题引入：第一宇宙速度
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-18%20at%2011.10.10AM.png)
2. 一阶微分的定义
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%207.31.51PM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%207.38.49PM.png)
	3. $y=f(x), \ \Delta{y}=g(x)\Delta{x}+o(\Delta{x}), \ dy=g(x)\Delta{x}$
	4. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%209.37.39AM.png)
	5. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%209.37.53AM.png)
	6. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%209.39.13AM.png)
4. 一阶导函数的定义
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%209.42.50AM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%209.46.32AM.png)

![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%207.32.44PM.png)

对导数的理解：
1. 导数是一种特殊的函数，对于任何函数f我们都可以考虑f的导函数；我们对导函数感兴趣是因为它反映了自变量和因变量的变化关系，这在许多场景下都很有用
2. 由于导函数只是一种特殊的函数，所以导函数的性质和前面几章中函数的性质是包含与被包含的关系，而不是并列的关系；比如考虑原函数f的导数的存在性时其实是考虑导函数g的连续性，而函数的连续性正是之前一章中讲过的内容，所以他们的定义、证明等都相似。
##### 一元一阶导数的实际应用
1. https://www.bilibili.com/video/BV15v411g7VP/?p=40&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
2. 导数的实际应用（略）
	1. 物理加速度
	2. 人口增长快慢
	3. 割线和切线
	4. 抛物线和焦点
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2010.02.09AM.png)
	5. 椭圆的导数方程
##### 原函数f的一元一阶导数的存在性（导数函数g的连续性）
“导数的存在性”是以原函数f为主语的表述
“导函数g的连续性”是以导函数g为主语的表述
两种不同的表述方式描述的是同一件事情。

这里一个容易混淆的地方就是，原函数f连续不一定有导函数g连续，即所谓的不一定存在导函数；导函数的定义和函数连续性都是对照着定义的：
1. 原函数定义：f(x)；f(x)极限；f(x)连续
2. 原函数构造新函数：g(f(x),x)=g(x)；g(x)极限：导函数；g(x)连续：导函数存在

另一容易混淆的地方：
1. 原函数f在x0处求左/右导函数g
2. 原函数f的导函数g在x0处求左/右极限

https://www.bilibili.com/video/BV15v411g7VP/?p=41&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

1. 定义：
	2. 左导数
	3. 右导数
2. （例）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2010.15.00AM.png)
3. （例）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2010.19.10AM.png)
4. （例）
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2011.04.01AM.png)
##### 一元一阶导数的运算
###### （基本）初等函数的导数
1. 有限个一元函数的导数运算
	1. 有限个一元函数求一阶导
		1. 基本初等函数的一阶导数运算
			1. 🔗 https://math.fandom.com/zh/wiki/基本初等函数的导数?variant=zh-hant
			2. ![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%205.00.08PM.png)
			3. 基本初等函数的一阶导数
				1. $y=C$
				2. $y=log_{a}{x}$
					1. $y=ln{x}$
						1. （证）
				3. $y=a^x$
					1. $y=e^x$
						1. （证）
				4. $y=x^\alpha, \ \alpha\in{R}, \ x\gt0$
					1. （证）
				5. $y=\sin{x}$
					1. （证）
				6. $y=\arcsin{x}$
			4. 基本初等函数的一阶导数的四则运算
				1. https://www.bilibili.com/video/BV15v411g7VP/?p=42&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
				2. <a style="red">加，减，标量乘/ 线性运算</a>
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2011.54.13AM.png)
					2. （例）
				3. <a style="red">乘</a>
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2011.53.17AM.png)
					2. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2011.52.23AM.png)
					3. （例）
				4. <a style="red">除 /乘法逆元</a>
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2011.58.14AM.png)
					2. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2012.00.58PM.png)
					3. （例）
					4. 推论：
						1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2012.06.38PM.png)
				5. 多元函数求一阶导
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%202.13.15PM.png)
			5. 基本初等函数的一阶导数的反函数运算
				7. https://www.bilibili.com/video/BV15v411g7VP/?p=42&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d&t=3052
				8. <a style="red">反函数求导定理</a>
					1. 定义：
						1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2012.14.38PM.png)
					2. （证）
						1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%2012.14.14PM.png)
			6. 基本初等函数的一阶导数的复合函数运算（链式法则）
				1. https://www.bilibili.com/video/BV15v411g7VP/?p=44&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
				2. 定义：（注意中间变量u在极限路径上不可以等于零）
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%202.20.12PM.png)
				3. （证）
				4. 幂指函数求导
		3. 初等函数的一阶导数运算
			1. 双曲函数的一阶导数
				1. https://www.bilibili.com/video/BV15v411g7VP/?p=43&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
			2. tbd...
		4. 非初等函数的一阶导数运算
	2. 有限个一元函数求高阶导（见下）
	3. 有限个一元函数求无限阶导（略）
2. 无限个一元函数的导数运算（略）
###### 一元一阶函数在不同表示方法下的求导
1. 显函数求导
2. 隐函数求导 （利用了一阶微分的形式不变性）
	2. 【数学分析 陈纪修老师 1080p高清版(全集)】 https://www.bilibili.com/video/BV15v411g7VP/?p=45&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	3. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%202.46.54PM.png)
	4. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%202.48.17PM.png)
	5. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%202.50.25PM.png)
3. 参数函数求导
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=46&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. （证）
	3. （例）旋轮线
	4. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%203.05.17PM.png)
4. 不同函数表示下求导的对比
	1. https://www.bilibili.com/video/BV15v411g7VP/?p=46&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d 
###### 导数的运算性质
![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%205.08.47PM.png)
##### 一元一阶微分运算
![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%205.38.29PM.png)

<a style="red">一阶微分的形式不变性</a> ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%202.42.35PM.png)
#### 2️⃣ 一元高阶导数与微分
##### 一元高阶导数与微分的定义
https://www.bilibili.com/video/BV15v411g7VP/?p=47&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

1. 引入：瞬时加速度
![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%204.40.46PM.png)
2. 二阶导数定义
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%204.50.54PM.png)
3. n阶导数定义/记号
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%204.57.30PM.png)
4. （例）
5. （例）
##### 一元高阶导数的运算
![](../../../../Assets/Pics/Screenshot%202023-11-25%20at%205.12.24PM.png)
###### 初等函数的高阶导数
1. 有限个一元高阶导数的运算
	1. 基本初等函数的高阶导数运算
		1. 基本初等函数的高阶导数
			1. $y=C$
			2. $y=log_{a}{x}$
				1. （例）$y=ln{x}\to y^{(n)}=(-1)^{n-1}\frac{(n-1)!}{x^n}$
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.10.35PM.png)
			3. $y=a^x$
				1. （例）$y=e^x$
			4. $y=x^\alpha$
				1. （例）$y=x^\alpha, \alpha\in{N^+}$
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.08.06PM.png)
				2. （例）$y=x^\alpha, \ \alpha\in{R}, \ x\gt0$
				3. 
			5. $y=\sin{x}, \ y=\cos{x}, \ y=\tan{x}$
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.02.58PM.png)
			6. $y=\arcsin{x}$
		2. 基本初等函数的高阶导数四则运算
			1. <a style="red">加，减，标量乘/ 线性运算</a>
				1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.13.52PM.png)
			2. <a style="red">乘（莱布尼茨公式）</a>
				1. 回顾：🔗 [二项式定理](https://baike.baidu.com/item/二项式系数/6763242)
				2. （定义）
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.15.09PM.png)
				3. （证明）数学归纳法
					1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.22.01PM.png)
					2. （例）
						1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.26.40PM.png)
					3. 
			3. <a style="red">除 /乘法逆元</a>
				1. $[\frac{f(x)}{g(x)}]^{(n)}=[f(x)\cdot\frac{1}{g(x)}]^{(n)}$
		3. 基本初等函数的高阶导数反函数运算
			1. 没讲。。
		4. 基本初等函数的高阶导数复合运算
			1. https://www.bilibili.com/video/BV15v411g7VP/?p=48&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d&t=2481
			2. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.37.16PM.png)
	2. 初等函数的高阶导数运算
	3. 非初等函数的高阶导数运算
	4. ==高阶导数求导方式总结==
		1. 公式法
		2. 归纳法
		3. 利用已知公式（牛-莱）
		4. 利用已知等式
3. 无限个一元高阶导数的运算（略）
###### 不同表示方法下函数求高阶导
1. 显函数（见上）
2. 隐函数求高阶导数
	1. 【数学分析 陈纪修老师 1080p高清版(全集)】 https://www.bilibili.com/video/BV15v411g7VP/?p=49&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.39.15PM.png)
3. 参数函数求高阶导数
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.39.58PM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.41.09PM.png)
###### 高阶微分
1. 定义
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.43.07PM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.44.56PM.png)
2. 高阶微分不具有形式不变性
	1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.48.46PM.png)
	2. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-10-19%20at%205.51.11PM.png)
#### 3️⃣ 可导和可微的关系
可导和可微的关系
	1. 一元函数中等价
	2. 多元函数中不等价
#### ⭐ 重要一元导数定理/性质
↗ [Mean Value Theorems](Mean%20Value%20Theorems.md)
#### ⭐ 导数应用
##### 平面曲线的曲率
###### 弧微分
$ds=\sqrt{d^2x+d^2y}=\sqrt{\phi^{'}(t)+\theta^{'}(t)}dt=\sqrt{1+y^{'}}dx$

![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.20.59PM.png)

![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.25.05PM.png)
###### 曲率及其计算公式
$K=\lim_{\Delta{x}\to\infty}{\frac{\vert{\Delta{a}}\vert}{\vert{\Delta{s}}\vert}}=\frac{1}{R}=\frac{\vert{y^{''}}\vert}{(1+y^{'2})^{\frac{3}{2}}}$
![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.26.41PM.png)

![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.22.43PM.png)
###### 曲率圆与曲率半径
![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.18.22PM.png)
##### 极值和最值问题（Extremum Problems）
https://www.bilibili.com/video/BV15v411g7VP/?p=62&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

1. 极值点判定定理
	1. 定义
		1. 由如下等式，可推广到f的n阶导的情况
			1. $$f(x)=f(x_0)+\frac{1}{1!}f^{'}(x_0)(x-x_0)+\frac{1}{2!}f^{''}(x_0)(x-x_0)^2+\frac{1}{3!}f^{'''}(x_0)(x-x_0)^3+..+o((x-x_0)^n)$$
		2. ![](../../../../Assets/Pics/Screenshot%202023-11-02%20at%2011.46.59AM.png)
	2. 证明：
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2010.58.30AM.png)
	3. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.01.15AM.png)
	4. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.04.28AM.png)
2. 最值
	1. 定义
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.20.52AM.png)
	2. （例）
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.23.07AM.png)
	3. https://www.bilibili.com/video/BV15v411g7VP/?p=63&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
		1. （例）
			1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.39.46AM.png)
			2. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.40.21AM.png)
##### 数学建模问题
1. 马尔萨斯人口模型
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.46.35AM.png)
2. 液体过滤问题
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-06%20at%2011.53.08AM.png)
##### 函数制图 /渐进线
https://www.bilibili.com/video/BV15v411g7VP/?p=64&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.38.18PM.png)

1. 函数制图的基本步骤
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.20.33AM.png)
2. （例）$y=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.28.32AM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.27.24AM.png)
	3. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.27.45AM.png)
3. （例）$y=\frac{(x-1)^2}{3(x+1)}$
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.35.48AM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.37.45AM.png)
4. （例）$y=\sqrt[3]{x^3-x^2-x+1}$
	1. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.43.10AM.png)
	2. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2010.46.57AM.png)
##### 方程近似求解
https://www.bilibili.com/video/BV15v411g7VP/?p=65&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

1. 方程的求解方法
	1. 解析方法
	2. 数值方法
2. 数值方法近似求解
	1. 二分法
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2011.01.16AM.png)
	2. 牛顿迭代法 （牛顿切线法）
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2011.06.51AM.png)
	3. <a style="color:red">定理5.6.1</a>
		1. ![](../../../../Assets/Pics/Screenshot%202023-11-08%20at%2011.09.41AM.png)
##### 零点问题
1. 由连续函数介值定理或连续函数零点定理证
2. 由罗尔定理证
##### 证明不等式 /讨论方程根的个数
1. 用单调性
2. 用最值
3. 用拉格朗日中值定理
4. 用拉格朗日余项泰勒公式

![](../../../../Assets/Pics/Screenshot%202023-11-16%20at%205.30.17PM.png)


### 二元导数与微分


### 多元导数与微分


### 导数运算总结
一元/多元，有限个/无限个，一阶导/高阶导/无限阶导
四则运算，反函数运算，复合函数运算
显函数，隐函数，参数函数
基本初等函数，初等函数，非初等函数

1. 一元函数导数/微分运算
	1. 有限个一元函数的导数运算
		1. 有限个一元函数求一阶导
			1. 基本初等函数的一阶导数运算
				1. 基本初等函数的一阶导数
				2. 基本初等函数的一阶导数的四则运算
				3. 基本初等函数的一阶导数的反函数运算
				4. 基本初等函数的一阶导数的复合函数运算
			2. 初等函数的一阶导数运算
				1. 双曲函数一阶导数
			3. 非初等函数的一阶导数运算
		2. 有限个一元函数求高阶导
			1. 基本初等函数的高阶导数运算
				1. 基本初等函数的高阶导数的四则运算
				2. 基本初等函数的高导数的反函数运算
				3. 基本初等函数的高阶导数的复合函数运算
			2. 初等函数的高阶导数运算
			3. 非初等函数的高阶导数运算
		3. 有限个一元函数求无限阶导
	2. 无限个一元函数的导数运算
		1. 无限个一元函数求一阶导
			1. 无限个基本初等函数求一阶导
			2. 
		2. 无限个一元函数求高阶导
			1. 无限个基本初等函数求高阶导
			2. 
		3. 无限个一元函数求无限阶导
			1. 无限个基本初等函数求无限阶导
			2. 
2. 多元函数导数/微分运算
	1. 有限个多元函数的导数运算
		1. 有限个多元函数求一阶导
		2. 有限个多元函数求高阶导
		3. 有限个多元函数求无限阶导
	2. 无限个多元函数的导数运算
		1. 无限个多元函数求一阶导
		2. 无限个多元函数求高阶导
		3. 无限个多元函数求无限阶导



## Ref
