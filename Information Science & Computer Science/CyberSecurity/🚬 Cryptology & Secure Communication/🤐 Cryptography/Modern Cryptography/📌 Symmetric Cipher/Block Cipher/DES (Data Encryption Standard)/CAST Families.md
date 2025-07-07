# CAST Families

[TOC]



## Res


## Intro
**CAST** is a general procedure for constructing a family of [block ciphers](https://en.citizendium.org/wiki/Block_cipher "Block cipher"); individual ciphers have names like [CAST-128](https://en.citizendium.org/wiki/CAST_(cipher)#CAST-128) and [CAST-256](https://en.citizendium.org/wiki/CAST_(cipher)#CAST-256).

The original work on CAST was in [Carlisle Adams](https://en.citizendium.org/wiki/Carlisle_Adams "Carlisle Adams")' PhD thesis. His supervisor was [Stafford Tavares](https://en.citizendium.org/wiki/Stafford_Tavares "Stafford Tavares"), but they say the name is unrelated to their initials. A well-known paper is "Constructing Symmetric Ciphers using the CAST Design Procedure". There is also a [US patent](http://www.patentstorm.us/patents/5825886.html) on some of the techniques.

CAST is a block ciphers belonging to the family of DES (Data Encryption System) that uses **substitutions** and **permutations** (known as Substitution Permutation Network or SPN) in key calculations and encryption and decryption processes. The CAST algorithm has two versions, namely CAST-128 and CAST-256 where both are distinguished by the length of the used key. The maximum Key length allowed in CAST is 128 bits or 16 characters. In addition CAST-128 allows key sizes to vary from 40 bits to 128 bits with the addition of 8-bits. While the length of plain text that can be encrypted and decrypted is 64 bits (8 characters) and supports all types of plain text. 


## Ref
[CAST (cipher) | Citizendium ]: https://en.citizendium.org/wiki/CAST_(cipher)

[Utility Software Design to Comprehend The Cryptography Cast-128 Method]: https://iopscience.iop.org/article/10.1088/1742-6596/1364/1/012049#:~:text=CAST%20is%20a%20block%20ciphers,and%20encryption%20and%20decryption%20processes

This study describes the procedures of CAST-128, the design of encryption procedures from CAST-128, calculations from the Key Schedule using Substitution Boxes (S-Boxes), how the CAST-128 encryption and decryption algorithms work, the results of the implementation of the CAST-128 algorithm created a program that also functions as a learning program to understand the CAST- 128 algorithm with the process of key formation, CAST-128 algorithm encryption and decryption.