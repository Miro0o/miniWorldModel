# ElGamal

[TOC]



## Res
### Related Topics
↗ [Diffie-Hellman Based Key Exchange](../../../../../Key%20Management/📌%20Key%20Management%20Algorithms%20&%20Protocols/👥%20Key%20Agreement,%20Transport,%20and%20Exchange%20(one-to-one)/Key%20Exchange%20Algorithms%20&%20Protocols/Diffie-Hellman%20Based%20Key%20Exchange.md)


### Other Resource



## Intro
> 🔗 https://en.wikipedia.org/wiki/ElGamal_encryption

In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), the **ElGamal encryption system** is a [public-key encryption](https://en.wikipedia.org/wiki/Public-key_encryption "Public-key encryption") algorithm based on the [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange "Diffie–Hellman key exchange"). It was described by [Taher Elgamal](https://en.wikipedia.org/wiki/Taher_Elgamal "Taher Elgamal") in 1985. ElGamal encryption is used in the free [GNU Privacy Guard](https://en.wikipedia.org/wiki/GNU_Privacy_Guard "GNU Privacy Guard") software, recent versions of [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy "Pretty Good Privacy"), and other [cryptosystems](https://en.wikipedia.org/wiki/Cryptosystem "Cryptosystem"). The [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm "Digital Signature Algorithm") (DSA) is a variant of the [ElGamal signature scheme](https://en.wikipedia.org/wiki/ElGamal_signature_scheme "ElGamal signature scheme"), which should not be confused with ElGamal encryption.

ElGamal encryption can be defined over any [cyclic group](https://en.wikipedia.org/wiki/Cyclic_group "Cyclic group") G![{\displaystyle G}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5f3c8921a3b352de45446a6789b104458c9f90b), like [multiplicative group of integers modulo _n_](https://en.wikipedia.org/wiki/Multiplicative_group_of_integers_modulo_n "Multiplicative group of integers modulo n") if and only if _n_ is $1, 2, 4, p^k \ or\  2p^k$, where _p_ is an odd prime and _k_ > 0. Its security depends upon the difficulty of the [Decisional Diffie Hellman Problem](https://en.wikipedia.org/wiki/Decisional_Diffie%E2%80%93Hellman_assumption "Decisional Diffie–Hellman assumption") in G.

![](../../../../../../../../Assets/Pics/Screenshot%202024-10-03%20at%2013.11.51.png)

![|400](../../../../../../../../Assets/Pics/Screenshot%202024-10-01%20at%2012.39.20%20copy.png)


### Security /Properties
- Malleability: The adversary can tamper with the message
	- The adversary can manipulate $C_1’ = C_1, C_2’ = 2 × C_2 = 2 × M × g^{br}$ to make it look like 2 × M was encrypted
- Caution: Needs additional padding and other modifications to make it secure



## Ref

