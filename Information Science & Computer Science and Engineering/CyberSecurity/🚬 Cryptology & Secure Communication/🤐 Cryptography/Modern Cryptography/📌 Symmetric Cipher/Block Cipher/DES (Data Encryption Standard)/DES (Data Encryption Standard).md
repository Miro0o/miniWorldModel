# DES (Data Encryption Standard)

[TOC]



## Res
### Implementations
https://github.com/RobinDavid/pydes
https://github.com/twhiteman/pyDes

[DES加解密的python实现](https://github.com/kinnisoy/DES)



## Intro
### Overview
![](../../../../../../../../Assets/Pics/Screenshot%202023-03-29%20at%204.02.18%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-03-29%20at%204.08.53%20PM.png)

- Designed in late 1970s
- Block size 64 bits (n = 64)
- Key size 56 bits (k = 56)
- NSA influenced two facets of its design
	- Altered some subtle internal workings in a mysterious way
	- Reduced key size from 64 bits to 56 bits
	- Made brute force attacks feasible for an attacker with massive computational resources (by 1970s standards)
- The algorithm remains essentially unbroken 40 years later
	- The NSA’s tweaking hardened it against an attack publicly revealed a decade later
- However, modern computer speeds make it completely unsafe due to small key size
	- ~$6.4 \times 10^{16}$, say $10^{10}$ tries per second on my single desktop computer's Nvidia graphics card: Takes ~$6.4 \times 10^6$ seconds or ~70 days


### DES Algorithms in a Nutshell
DES 是一种明文分组为 64 位，有效密钥 56 位，输出密文 64 位的，具有 16 轮迭代的分组对称密 码算法，DES 由初始置换，16 轮迭代，初始逆置换组成。

![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%202.54.01%20PM.png)


### DES Features
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%203.01.31%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%203.06.05%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%203.06.22%20PM.png)



## Ref
[👍 DES加密中的一些重难点整理 - milkyWay的文章 - 知乎]: https://zhuanlan.zhihu.com/p/133516777
[DES 互补性证明 ｜ CSDN]: https://blog.csdn.net/qq_43779787/article/details/105331543
[分组密码（三）DES 算法— 密码学复习（六）| cnblogs]: https://www.cnblogs.com/shirleyya/p/15098757.html

6.8 DES的对合性和可逆性
①可逆性证明
（1）定义：变换T是把64位数据的左右两半交换位置。
T(L,R)=(R,L)
因为TT(L,R)=T(R,L)=(L,R)=I，其中I为恒等变换。
又显然TT-1=I，于是TT-1=TT，所以有
T=T-1
所以T变换是对合运算。

（2）记DES第i轮中的主要运算为Fi，即
Fi(Li-1,Ri-1)=(Li-1⊕f(Ri-1,Ki),Ri-1)
Fi2(Li-1,Ri-1)=Fi(Li-1⊕f(Ri-1,Ki),Ri-1)=(Li-1⊕f(Ri-1,Ki)⊕f(Ri-1,Ki),Ri-1)=(Li-1,Ri-1)=I
所以，Fi=Fi-1.
所以，Fi变换是对合运算。

（3）结合（1）（2），便构成了DES的轮运算：
Hi=FiT
因为(FiT)(TFi)=(Fi(TT)Fi)=FiFi=I,所以(FiT)-1=(TFi),(TFi)-1=(FiT)

（4）初始置换IP和逆初始置换IP-1是互逆的。

（5）加解密表示  
① DES(M) = (M)IP(F1T)(F2T)...(F15T)(F16)IP-1 = C
② DES-1(C) = (C)IP(F16T)(F15T)...(F2T)(F1)IP-1 = M
故有

DES-1DES(M) = (M)IP(F1T)(F2T)...(F15T)(F16)IP-1IP(F16T)(F15T)...(F2T)(F1)IP-1 
= (M)IP(F1T)(F2T)...(F15T)(F16)(F16T)(F15T)...(F2T)(F1)IP-1 
= (M)IP(F1T)(F2T)...(F14T)(F15)(F15T)(F14T)...(F2T)(F1)IP-1 
= (M)IP(F1T)(F2T)...(F13T)(F14)(F14T)(F13T)...(F2T)(F1)IP-1 
= ......
= (M)IP(F1T)(F2)(F2T)(F1)IP-1 
= (M)IP(F1)(F1)IP-1 
= (M)IP IP-1 
=  M

所以DES是可逆的。

② 对合性证明
DES = IP(F1T)(F2T)...(F15T)(F16)IP-1 
DES-1 = IP(F16T)(F15T)...(F2T)(F1)IP-1

**DES和DES-1除了子密钥的使用顺序相反之外是相同的。**
**不考虑**子密钥的使用顺序，则有：

DES = IP(FT)(FT)...(FT)(F)IP-1 
DES-1 = IP(FT)(FT)...(FT)(F)IP-1
显然 DES = DES-1
所以DES的运算是对合运算。
