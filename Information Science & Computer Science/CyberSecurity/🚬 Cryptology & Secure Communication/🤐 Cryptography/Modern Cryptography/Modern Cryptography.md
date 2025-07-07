# Modern Cryptography

[TOC]



## Res
### Related Topics



## Intro

|                              | Symmetric-key                                     | Asymmetric-key                                        |
| ---------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| Confidentiality              | Block ciphers with chaining modes (e.g., AES-CBC) | Public-key encryption(e.g., El Gamal, RSA encryption) |
| Integrity and authentication | MACs (e.g., AES-CBC-MAC)                          | Digital signatures (e.g., RSA signatures)             |
$Authenticity \subset Integrity$
- **Integrity -> Authenticity**
	- If integrity is valid -> no guarantee authenticity is valid
	- If integrity is invalid -> authenticity is invalid
- **Authenticity -> Integrity**
	- If authenticity is valid -> integrity is valid
	- If authenticity is invalid -> integrity is invalid

Modern cryptographic techniques: 
1. **Symmetric Cipher** /**Asymmetric Cipher**: basic techniques; ensure confidentiality, additionally with other properties depending on how is used.
2. **Message Digest & Hash Functions:** ensure integrity (conditionally)
	1. **Message authentication**: ensure authentication. 
3. **Authenticated Encryption (AE)**: ensure all CIA properties. 



## Ref
