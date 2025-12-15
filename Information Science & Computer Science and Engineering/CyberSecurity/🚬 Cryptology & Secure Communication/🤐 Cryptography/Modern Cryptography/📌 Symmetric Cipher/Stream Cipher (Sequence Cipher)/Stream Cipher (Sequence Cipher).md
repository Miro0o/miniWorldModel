# Stream Cipher (Sequence Cipher)

[TOC]



## Res
### Related Topics
↗ [Stream Cipher Cryptanalysis](../../../../🤮%20Cryptanalysis/Modern%20Cipher%20Cryptanalysis/Symmetric%20Cipher%20Cryptanalysis/Stream%20Cipher%20Cryptanalysis/Stream%20Cipher%20Cryptanalysis.md)



## Intro
> 1949 年 Shannon 证明了只有一次一密密码体制是绝对安全的，这给序列密码技术的研究以强大的支持，流加密方案是模仿一次一密系统的尝试，或者说“一次一密”的密码方案 是序列密码的雏形。如果序列密码所使用的是真正随机产生的、与消息流长度相同的密钥流， 则此时的序列密码就是一次一密的密码体制。


### Stream Cipher Characteristics
> 块密码中的CTR模式也是一种流密码加密方式。

序列密码的加解密规则一般都非常简单，其关键在于密钥流的产生。与分组密码相比， 序列密码的主要特点如下:
1. 序列密码以一个符号(如一个字符或一个比特)作为基本的处理单元，而分组密码以一定大小的分组作为基本的处理单元;
2. 序列密码使用一个随时间变化的简单的加密变换，即不同时刻所用的密钥不同，而分组密码在不同时刻所用的密钥是相同的。

Stream Cipher Security:
- Stream ciphers are IND-CPA secure, assuming the pseudorandom output is secure
- In some stream ciphers, security is compromised if too much plaintext is encrypted
	- Example: In AES-CTR, if you encrypt so many blocks that the counter wraps around, you’ll start reusing keys
	- In practice, if the key is n bits long, usually stop after 2n/2 bits of output
	- Example: In AES-CTR with 128-bit counters, stop after 264 blocks of output

Stream Ciphers Support Streaming
- Stream ciphers can continually process new data as it arrives
	- Only need to maintain internal state of the PRNG
	- Keep generating more PRNG output as more input arrives

Stream Ciphers Support Seeking
- Suppose you received a 1 GB ciphertext (encryption of a 1 GB message) and you only wanted to decrypt the last 128 bytes
- Benefit of some stream ciphers: You can decrypt one part of the ciphertext without decrypting the entire ciphertext
	- Example: In AES-CTR, to decrypt only block i, compute EK(nonce || i) and XOR with the ith block of ciphertext
	- Example: ChaCha20 (another stream cipher) lets you decrypt arbitrary parts of ciphertext
	- With HMAC-DRBG, you have to generate all the PRNG output up until the block you want to decrypt


### Stream Cipher Taxonomy
相对而言，由于在自同步序列密码中，密文流参与了密钥流的生成，密钥流的分析将复 杂化，导致自同步序列密码较难从理论上进行详尽的分析。目前，绝大多数有关序列密码的 研究都是同步序列密码方面的。

↗ [Asynchronous Stream Cipher & Self-Synchronizing Stream Ciphers (SSSC)](Asynchronous%20Stream%20Cipher%20&%20Self-Synchronizing%20Stream%20Ciphers%20(SSSC)/Asynchronous%20Stream%20Cipher%20&%20Self-Synchronizing%20Stream%20Ciphers%20(SSSC).md)

↗ [Synchronous Stream Cipher](Synchronous%20Stream%20Cipher/Synchronous%20Stream%20Cipher.md)


### Stream Cipher Application
序列密码具有软件实现简单、便于硬件实现、加解密处理速度快、没有或只有有限的错误传播等特点，因此序列密码在实际应用中，特别是在军事或外交保密通信应用领域有着突出优势。



## ⭐️ Stream Cipher Design Principles
二元加法序列密码的安全强度取决于密钥流发生器所产生的密钥流性质。如果密钥流是无周期的无限长随机序列，则此时序列密码是一次一密的密码体制，是绝对安全的。在实际应用中，密钥流都是用有限存储和有限复杂逻辑的电路来产生的，此时密钥流发生器只有有限个状态。这样，密钥流发生器迟早要回到初始状态，故其输出也就是周期序列。所以，实际应用中的序列密码是不可能实现一次一密的密码体制的，但如果密钥流发生器生成的密钥流周期足够长，且随机性好，其安全强度还是可以保证的。==因此，序列密码的设计当中最核心的问题在于密钥流发生器的设计，序列密码的安全强度取决于密钥流发生器生成的密钥流的周期、复杂度、(伪)随机性等。==

设计序列密码需从两方面进行考虑:一是从系统自身的复杂性度量出发，如输出密钥序 列的周期、线性复杂度、随机性等;另一方面从抗已知攻击出发，如线性逼近、统计分析等。 目前设计密钥流发生器的主要准则如下:
- 密钥量足够大。因为密钥流的输出取决于输入密钥的值，为防止强力攻击，密钥应该足够长，在目前的软硬件技术条件下，应不小于 128 位。 
- 加密序列的周期足够长重复的周期越长，密码分析的难度就越大，一般为 2128 或 2256。
	-  现代密码机数据率高达10^8 bit/s，如果10年内不使用周期重复的{ki}，则要求{ki}的周期T>=3*106或255;
- 良好的统计特征。在一个周期内0、1游程的频率大抵相当；
	- 密钥流应该尽可能地接近于一个真正的随机数流的特征，密钥流的随机特性越好，密文越随机，密码分析就越困难。
- 用统计方法由{ki}提取KG的结构或K的信息在再计算上是不可信的。
- 满足混乱性、扩散性


### ⭐️ Randomness of Sequence
↗ [Randomness of Sequence](📌%20Stream%20Cipher%20Design/Randomness%20of%20Sequence.md)


### Pseudo-Random Stream Generation
↗ [Pseudo-Random Stream Generation](📌%20Stream%20Cipher%20Design/Pseudo-Random%20Stream%20Generation/Pseudo-Random%20Stream%20Generation.md)
↗ [Randomness & (Pseudo) Random Number Generation (P-RNG)](../../../Randomness%20&%20(Pseudo)%20Random%20Number%20Generation%20(P-RNG).md)



## Ref
[序列密码 | 博客园]: https://www.cnblogs.com/liugangjiayou/p/12461331.html

[👍 「密码学」序列密码]: https://comydream.github.io/2018/11/28/cryptography-stream-cipher/index.html

