# LFSR (Linear Feedback Shift Register)

[TOC]



## Res
### Related Topics



## Intro
在许多序列密码中，产生密钥流最重要的一个部件是线性反馈移位寄存器(Linear Feedback Shift Register, LFSR)，这主要基于以下几个原因:
(1)LFSR 非常适合硬件实现; 
(2)它们能产生大的周期序列; 
(3)它们能产生好的统计特性的序列;
(4)它们的结构能够应用代数方法进行很好的分析。


### N-scale Feedback Shift Register
n 级反馈移位寄存器的结构如图 9.3 所示:
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%201.08.29%20PM.png)


### LFSR (Linear Feedback Shift Register)
> 线性反馈移位寄存器输序列的性质完全由反馈函数 f(a1，a2，...， an)决定

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%201.10.52%20PM.png)


### M-sequence
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%201.12.52%20PM.png)



## Ref

