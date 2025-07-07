# Pseudo-Random Stream generation

[TOC]



## Res
### Related Topics



## Intro
二元加法序列密码的安全强度取决于密钥流发生器所产生的密钥流性质。如果密钥流是 无周期的无限长随机序列，则此时序列密码是一次一密的密码体制，是绝对安全的。在实际 应用中，密钥流都是用有限存储和有限复杂逻辑的电路来产生的，此时密钥流发生器只有有限个状态。这样，密钥流发生器迟早要回到初始状态，故其输出也就是周期序列。所以，实际应用中的序列密码是不可能实现一次一密的密码体制的，但如果密钥流发生器生成的密钥流周期足够长，且随机性好，其安全强度还是可以保证的。因此，序列密码的设计当中最核心的问题在于密钥流发生器的设计，序列密码的安全强度取决于密钥流发生器生成的密钥流的周期、复杂度、(伪)随机性等。


### Randomness of Sequence
↗ [Randomness of Sequence](../Randomness%20of%20Sequence.md)



## Pseudo-Random Stream Generation Methods
### 1️⃣ Feedback Shift Register Based
#### LFSR
↗ [LFSR (Linear Feedback Shift Register)](LFSR%20(Linear%20Feedback%20Shift%20Register).md)
#### LFSR-Based Non-linear Sequence
虽然 LFSR 序列具有较好的随机性，然而 LFSR 序列密码却是在已知明文攻击下是容易 破译的。而 LFSR 序列密码可破译的根本原因在于线性移位寄存器序列是线性的，这一事实 促使人们向非线性领城探索。
非线性移位寄存器序列的研究比较困难，但人们对线性移位寄存器序列的研究却比较充 分和深人。于是人们想到，利用 LFSR 序列设计容易、随机性好等优点，来构造基于 LFSR的序列密码。基于 LFSR 的序列密码是二元加法序列密码，关键在于密钥流的产生。 对一个或多个线性移位寄存器序列进行非线性组合可以获得良好的非线性序列。图 9.5 给出对一个 LFSR 进行非线性组合的逻辑结构，图 9.6 给出对多个 LFSR 进行非线性组合的 逻辑结构。在这里用线性移位寄存器序列作为驱动源来驱动非线性电路产生非线性序列，其中用线性移位寄存器序列来确保所产生序列的长周期和均匀性，用非线性电路来确保输出序列的非线性和其他密码性质。通常称这里的非线性电路为前馈电路，称这种输出序列为前馈序列。

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%201.17.35%20PM.png)


### 2️⃣ ??
#TODO 



## Pseudo-random Stream Generators
↗ [Pseudo-Random Stream Generators](Pseudo-Random%20Stream%20Generators/Pseudo-Random%20Stream%20Generators.md)
↗ [Basic Pseudo-Random Stream Generators](Pseudo-Random%20Stream%20Generators/Basic%20Pseudo-Random%20Stream%20Generators.md)



## Ref
