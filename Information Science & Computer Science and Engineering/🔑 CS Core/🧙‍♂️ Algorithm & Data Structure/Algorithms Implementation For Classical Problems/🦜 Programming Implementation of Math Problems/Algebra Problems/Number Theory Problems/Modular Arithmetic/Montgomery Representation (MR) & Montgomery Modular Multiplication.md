# Montgomery Representation (MR) & Montgomery Modular Multiplication

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Montgomery_modular_multiplication

In [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic "Modular arithmetic") computation, **Montgomery modular multiplication**, more commonly referred to as **Montgomery multiplication**, is a method for performing fast modular multiplication. It was introduced in 1985 by the American mathematician [Peter L. Montgomery](https://en.wikipedia.org/wiki/Peter_Montgomery_\(mathematician\) "Peter Montgomery (mathematician)").

Montgomery modular multiplication relies on a special representation of numbers called Montgomery form. The algorithm uses the Montgomery forms of a and b to efficiently compute the Montgomery form of _ab_ mod _N_. The efficiency comes from avoiding expensive division operations. Classical modular multiplication reduces the double-width product _ab_ using division by N and keeping only the remainder. This division requires quotient digit estimation and correction. The Montgomery form, in contrast, depends on a constant R > N which is [coprime](https://en.wikipedia.org/wiki/Coprime_integers "Coprime integers") to N, and the only division necessary in Montgomery multiplication is division by R. The constant R can be chosen so that division by R is easy, significantly improving the speed of the algorithm. In binary computers, R is always a [power of two](https://en.wikipedia.org/wiki/Power_of_two "Power of two"), since division by powers of two can be implemented by [bit shifting](https://en.wikipedia.org/wiki/Bit_shifting "Bit shifting").

The need to convert a and b into Montgomery form and their product out of Montgomery form means that computing a single product by Montgomery multiplication is slower than the conventional or [Barrett reduction](https://en.wikipedia.org/wiki/Barrett_reduction "Barrett reduction") algorithms. However, when performing many multiplications in a row, as in [modular exponentiation](https://en.wikipedia.org/wiki/Modular_exponentiation "Modular exponentiation"), intermediate results can be left in Montgomery form. Then the initial and final conversions become a negligible fraction of the overall computation. Many important cryptosystems such as [RSA](https://en.wikipedia.org/wiki/RSA_\(cryptosystem\) "RSA (cryptosystem)") and [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange "Diffie–Hellman key exchange") are based on arithmetic operations modulo a large odd number, and for these cryptosystems, computations using Montgomery multiplication with R a power of two are faster than the available alternatives.



## Ref
