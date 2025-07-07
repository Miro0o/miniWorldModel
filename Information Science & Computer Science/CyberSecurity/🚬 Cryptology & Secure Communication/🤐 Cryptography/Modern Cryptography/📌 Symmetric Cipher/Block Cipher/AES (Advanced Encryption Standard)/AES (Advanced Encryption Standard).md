# AES (Advanced Encryption Standard)

[TOC]



## Res
### Related Topics


### Other Resources
👍 http://www.moserware.com/2009/09/stick-figure-guide-to-advanced.html
A Stick Figure Guide to the Advanced Encryption Standard (AES)
(A play in 4 acts. Please feel free to exit along with the stage character that best represents you. Take intermissions as you see fit. Click on the stage if you have a hard time seeing it. If you get bored, you can [jump to the code](https://github.com/moserware/AES-Illustrated). Most importantly, enjoy the show!)



## Intro
### AES Overview
- Key size 128, 192, or 256 bits (k = 128, 192, or 256)
	- Use key size 256 these days
- Block size 128 bits (n = 128)
	- Note: The block size is still always 128 bits, regardless of key size

There is no formal proof that AES is secure (indistinguishable from a random permutation)
However, in 20 years, nobody has been able to break it, so it is assumed to be secure
- The NSA uses AES-256 for secrets they want to keep secure for the 40 years (even in the face of unknown breakthroughs in research)

Takeaway: AES is the modern standard block cipher algorithm
- The standard key size (128 bits) is large enough to prevent brute-force attacks


### AES Background /History
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%204.44.50%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%204.45.02%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%204.45.10%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-12%20at%204.45.19%20PM.png)



## Math in AES



## AES Process
### AES Functions
#### `SubBytes()`
字节代替变换ByteSub(): 也称S盒变换, 是一个关于字节的非线性变换。 S盒变换是AES唯一的非线性变换，也是AES安全的关键。

与DES的S盒变换比较:
(1) AES使用16个相同的S盒，DES使用8个不相同的S盒
(2) AES的S盒有8位输入8位输出，是一种非线性替换。DES的S盒有6位输入4位输出，是一种非线性压缩。

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240924142420.png)
#### `ShiftRows()`
行移位(ShiftRows)变换中，状态矩阵中的每一行将以字节为单位，循环右移不同的位移量。
![](../../../../../../../../Assets/Pics/Pasted%20image%2020240924142439.png)

#### `MixColumns()`
列混合变换对State中的每列进行独立的操作，它把每个列都看成GF(28)中的一个四项多项式s(x)，再 与GF(28)上的固定多项式 a(x)= {03}x3+{01}x2+{01}x+{02}进行模x4+1的乘法运算。
![](../../../../../../../../Assets/Pics/Pasted%20image%2020240924142455.png)
#### `Add Roud Key`
密钥加法层(也叫轮密钥加，英文Add Round Key)
![](../../../../../../../../Assets/Pics/Pasted%20image%2020240924142338.png)



## AES Features
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%203.14.53%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%203.15.03%20PM.png)



## AES Treats & Attacks
### AES-CBC & Padding Oracle Attack
#### Plaintext Padding Oracle

#### Ciphertext Padding Oracle



## Ref
[👍 AES加密算法的详细介绍与实现 | CSDN]: https://blog.csdn.net/qq_28205153/article/details/55798628
[密码学基础：AES加密算法 | 知乎]: https://zhuanlan.zhihu.com/p/78913397
