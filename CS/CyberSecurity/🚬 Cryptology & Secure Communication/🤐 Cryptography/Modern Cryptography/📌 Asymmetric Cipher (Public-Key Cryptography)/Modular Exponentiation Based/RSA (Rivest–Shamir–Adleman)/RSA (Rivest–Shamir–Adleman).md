# RSA (Rivest–Shamir–Adleman)

[TOC]



## Res
### Related Topics



## Intro
RSA 公钥算法是由 MIT 的 Rivest, Shamir 和 Adleman 在 I978 年公开出来的。RSA 方案是 被最广泛接受并实现的通用公开密钥密码算法，目前已成为公钥密码的国际标准。该算法的数学基础是初等数论中的欧拉定理，其安全性建立在大整数因子分解的困难性之上:
1. 存在e, d, n的值, 使得对所有的 m<n，有 $m^{ed} \mod n = m\mod n$
2. 对于所有 m<n 的值，加解密计算 $m^e$ 和 $m^d$ 是正确且容易地 
3. 在给定e和n时，计算出d是不可行的。


### RSA Essentials/ Security & Analysis
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-26%20at%202.00.50%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-26%20at%202.01.17%20PM.png)

- Caveat: using RSA encryption in the form we have shown is not secure
	- It’s deterministic, so not IND-CPA secure
	- There are other subtle issues
- Solution: Use an appropriate (probabilistic) padding scheme



## RSA Implementation 
### Modular Exponentiation
#### Binary Exponentiation
> 🔗 https://cp-algorithms.com/algebra/binary-exp.html
#### CRT (Chinese Remainder Theorem)
> ⚠ CRT is ONLY for **decryption**

> Fermat's little theorem

> Extended Euclid


### Primes Generations & Primality Test
> ↗ [Primality Test](../../../../../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Primality%20Test/Primality%20Test.md)
> ↗ [Primality Test](../../../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/Number%20Theory%20Problems/Primality%20Test.md)

现在还没有产生任意大素数的实用技术，通常使用的过程是随机选取一个需要的数量级的奇数并检验这个数是否是素数;如果不是，再重复前面的步骤直到找到了通过检验的素数为止。

检验素性方面已经出现了许多方法，而且几乎所有的检验方法都是概率性的。也就是说，这个检验只是确定—个给定的整数很可能是素数。虽然缺乏完全的确定性，但是这些检验在 运行时可以按照需要重复进行使得出错的概率尽可能的接近于 0。一个比较高效和流行的素 性检测算法是 Miller-Rabin 算法。
#### Quadratic Reciprocity
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-26%20at%202.46.30%20PM.png)

Formula for primes


#### Miller-Rabin Primality Test
##### WITNESS Algorithm



## RSA Padding Scheme
### OAEP (Optimal Asymmetric Encryption Padding)
Optimal asymmetric encryption padding (OAEP): A method of adding padding that introduces randomness and makes RSA secure
- Different from “padding” used for symmetric encryption, used to add randomness instead of dummy bytes

RSA-OAEP is IND-CPA secure

![](../../../../../../../../Assets/Pics/Screenshot%202024-10-03%20at%2013.41.57.png)

![](../../../../../../../../Assets/Pics/Screenshot%202024-10-03%20at%2013.42.15.png)

![](../../../../../../../../Assets/Pics/Screenshot%202024-10-03%20at%2013.42.24.png)



## Ref
算法学习笔记(48): 米勒-拉宾素性检验 - Pecco的文章 - 知乎 https://zhuanlan.zhihu.com/p/220203643

[Binary Exponentiation | Algorothem for Competitive Programming]: https://cp-algorithms.com/algebra/binary-exp.html



