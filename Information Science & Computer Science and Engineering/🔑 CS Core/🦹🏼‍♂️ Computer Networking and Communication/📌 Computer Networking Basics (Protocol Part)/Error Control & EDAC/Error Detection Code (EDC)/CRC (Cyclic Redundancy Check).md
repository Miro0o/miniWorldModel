# CRC (Cyclic Redundancy Check)

[TOC]



## Res
### Related Topics
↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)


### Learning Resources
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=20&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🔗 [CRC 循环冗余校验 在线计算](http://www.ip33.com/crc.html)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Mathematics_of_cyclic_redundancy_checks#Bitfilters

==The [cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) (CRC) is based on division in the [ring of polynomials](https://en.wikipedia.org/wiki/Polynomial_ring) over the [finite field](https://en.wikipedia.org/wiki/Finite_field) [GF(2)](https://en.wikipedia.org/wiki/GF(2)) (the integers [modulo 2](https://en.wikipedia.org/wiki/Modular_arithmetic)),== that is, the set of [polynomials](https://en.wikipedia.org/wiki/Polynomial) where each [coefficient](https://en.wikipedia.org/wiki/Coefficient) is either zero or one, and [arithmetic operations](https://en.wikipedia.org/wiki/Arithmetic_operations) wrap around.

Any string of bits can be interpreted as the coefficients of a **message polynomial** of this sort, and to find the CRC, we multiply the message polynomial by $$x^n$$ and then find the remainder when dividing by the [degree](https://en.wikipedia.org/wiki/Degree_of_a_polynomial)-n **generator polynomial**. The coefficients of the remainder polynomial are the bits of the CRC.



## Polynomial Arithmetic Modulo 2
In general, [computation of CRC](https://en.wikipedia.org/wiki/Computation_of_cyclic_redundancy_checks) corresponds to [Euclidean division](https://en.wikipedia.org/wiki/Euclidean_division) of polynomials over [GF(2)](https://en.wikipedia.org/wiki/GF(2)):

$$M(x)\times x^n = Q(x)\times G(x) + R(x)$$

Here $$M(x)$$ is the original message polynomial and $$G(x)$$ is the degree-n generator polynomial. The bits of $$M(x)⋅x^n$$ are the original message with n zeroes added at the end. The CRC 'checksum' is formed by the coefficients of the remainder polynomial $$R(x)$$ whose degree is strictly less than n. The quotient polynomial $$Q(x)$$ is of no interest. Using [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation), it can be stated that:

$$R(x) = M(x) \times x^n \mod G(x)$$

Polynomial addition modulo 2 is the same as [bitwise XOR](https://en.wikipedia.org/wiki/Exclusive_or#Bitwise_operation). Since XOR is the inverse of itself, polynominal subtraction modulo 2 is the same as bitwise XOR too.

![](../../../../../../Assets/Pics/Screenshot%202023-01-12%20at%204.43.46%20PM.png)
<small>【CRC原理和程序实现方法1】 https://www.bilibili.com/video/BV1Jy4y187oG/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d</small>
<small>【CRC原理和程序实现方法2】 https://www.bilibili.com/video/BV1VK4y1U7pS/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d</small>



## Variations
here are several standard variations on CRCs, any or all of which may be used with any CRC polynomial. *Implementation variations* such as [endianness](https://en.wikipedia.org/wiki/Endianness)and CRC presentation only affect the mapping of bit strings to the coefficients of $$M(x)$$ and $$R(x)$$, and do not impact the properties of the algorithm.

- To check the CRC, instead of calculating the CRC on the message and comparing it to the CRC, a CRC calculation may be run on the entire codeword. 
- The shift register may be initialized with ones instead of zeroes.
- The CRC may be inverted before being appended to the message stream.



## Ref
[CRC校验是怎么回事？比如我有一个文件通过网络传输需要校验，这里这个算法具体是如何操作应用的？ - Allon的回答 - 知乎]: https://www.zhihu.com/question/20303082/answer/14680050

[crc计算和原理 - 无敌的猫的文章 - 知乎]: https://zhuanlan.zhihu.com/p/348823629


