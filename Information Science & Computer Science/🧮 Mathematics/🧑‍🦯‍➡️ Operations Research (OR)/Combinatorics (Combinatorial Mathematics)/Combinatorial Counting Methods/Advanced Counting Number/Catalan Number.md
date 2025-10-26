# Catalan Number

[TOC]



## Res
### Related Topics
↗ [Series (级数)](../../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Series%20(级数).md)

↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
↗ [Group Theory & Group-Like Algebraic Structure](../../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Group%20Theory%20&%20Group-Like%20Algebraic%20Structure/Group%20Theory%20&%20Group-Like%20Algebraic%20Structure.md)



## Intro



## Ref
[【［ppt］结合律等于随便加括号？代数系统上的结合律。n个数加括号种类数与卡特兰数（卡塔兰数）】]: https://www.bilibili.com/video/BV1Lz4y1s7sX/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
- 什么是结合律？结合律就是三个元素做运算，可以通过随意添加括号的方式来改变运算次序，运算结果不变。
- 结合律可以从三个元素推广到任意n个元素吗？可以，但n要求是有限数。（视频中进行了证明）
	- 若n为无限，需要另外的性质才可以得到推广后的结合率。
	- 当n为无限，当前的方法不可以推出结合律，例：格兰迪级数（Grandi's Series）
- 考虑n是有限数的情况。n个元素进行任意添加括号，可以有多少种添加方法？
	- 设对$n$个元素，有$S_n$种任意添加括号的方法：
		- 首先，易知 $S_1 = 1, S_2 = 1, S_3 = 2, S_4 = 5$
		- 可得通项：$S_n = \sum^{n-1}_{k=1}S_kS_{n-k}, \ n \gt 2$。 解释如下：
			- 考虑添加两个括号的情况，此时以从左到右第k个数为分界添加括号： $(k \text{个数}) \circ(n - k \text{个数})$
			- 此时，第一个括号内可以写作 $S_k$，第二个括号内可以写作$S_{n-k}$。故当前共有 $S_k\times S_{n-k}$ 种添加括号的方法
			- 令$k$遍历所有取值：$S_k\times S_{n-k}, \ k=1,2,...,(n-1)$
			- 将上述所有取值相加，就是在全部n个元素下的任意添加括号的方法数量，即 $S_n = \sum^{n-1}_{k=1}S_kS_{n-k}, \ n \gt 2$
	- $S_n = C_{n-1} = \frac{(2n-2)!}{(n-1)!n!}$
	- $C_n$ 就是卡特兰数（Catalan Number），$C_n = \frac{2n!}{n!(n+1)!}$。
	