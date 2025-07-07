# Shamir Threshold Scheme

[TOC]



## Res


## Intro
### Shamir Threshold Scheme Principles
Shamir 门限秘密共享方案有两个参数 t 和 n，因此也写作 (t, n) 门限方案。 n 表示秘密分割参与者的数量； t 即门限值，表示至少几个参与者聚到一起才可以恢复秘密信息。

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%208.53.01%20AM.png)


### Shamir Threshold Scheme Phases
Shamir 秘密分割门限方案由系统初始化、秘密分发和秘密重构三个阶段组成。

![](../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%209.04.44%20AM.png)

Lagrange polynomial:
#TODO 


![|500](../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%209.05.40%20AM.png)



## Security Issues
如果 k-1 个参与者想获得秘密 s，他们可构造出由 k-1 个方程构成的线性方程组，其 中有 k 个未知量。

对$GF(q)$中的任一值$s0$，可设$f(0)=s_0$ ，这样可得到第k个方程，并由Lagrange插值公 式得出 $f(x)$。因此对每一 $s_0∈ GF(q)$都有一个唯一的多项式满足线性方程组，所以已知 $k-1$ 个子密钥得不到关于秘密 $s$ 的任何信息，因此这个方案是完善的。 

Shamir 秘密分割门限方案的主要特点有:
优点：
(1)是完善的门限方案;  
(2)每个份额的大小与秘密值的大小相近;
(3)易于扩充新用户，即计算要分配的新份额不影响原来的各个份额。 
(4)安全性不依赖于未经证明的假设。

缺点：
(5)门限值固定;  
(6)秘密分发者知道参与者的份额;
(7)不能防止秘密分发者和参与者的欺诈。



## Ref
[👍 Shamir 门限秘密共享方案]: https://blog.sagiri.tech/index.php/archives/55/


