# Authenticated Encryption (AE) & AEAD (Authenticity + Confidentiality)

[TOC]



## Res
### Related Topics



## Intro
Authenticated encryption: A scheme that simultaneously guarantees confidentiality and integrity (and authenticity) on a message

- First approach: Combine schemes that provide confidentiality with schemes that provide integrity and authenticity
	- **MAC-then-encrypt**: $Enc(K_1, M || MAC(K2, M))$
	- **Encrypt-then-MAC**: $Enc(K1, M) || MAC(K2, Enc(K1, M))$
	- ==Always use Encrypt-then-MAC== because it's more robust to mistakes
- Second approach: Use **AEAD encryption** modes designed to provide confidentiality, integrity, and authenticity



## 1️⃣ Combining Schemes
### MAC + Encryption
First attempt: Alice sends Enc(K1, M) and MAC(K2, M)
- Integrity? Yes, attacker can’t generate a valid MAC on a modified message
- Confidentiality? No, the MAC is not IND-CPA secure

Idea 1: Let’s compute the MAC on the cipher-text instead of the plaintext: $Enc(K_1, M)$ and $MAC(K_2, Enc(K_1, M))$
- First compute $Enc(K_1, M)$
- Then MAC the ciphertext: $MAC(K_2, Enc(K_1, M))$
- Integrity? Yes, attacker can’t generate a valid MAC on a modified message
- Confidentiality? Yes, the MAC might leak info about the cipher-text, but that’s okay

Idea 2: Let’s encrypt the MAC: $Enc(K_1, M || MAC(K_2, M))$
- First compute $MAC(K_2, M)$
- Then encrypt the message and the MAC together: $Enc(K_1, M || MAC(K_2, M))$
- Integrity? Yes, attacker can’t generate a valid MAC on a modified message
- Confidentiality? Yes, everything is encrypted

Which is better?
- In theory, both are IND-CPA and EU-CPA secure if applied properly
- MAC-then-encrypt has a flaw: You don’t know if tampering has occurred until after decrypting
	- Attacker can supply arbitrary tampered input, and you always have to decrypt it
	- Passing attacker-chosen input through the decryption function can cause side-channel leaks
==Always use encrypt-then-MAC because it’s more robust to mistakes==

A example: TLS1.0
- TLS: A protocol for sending encrypted and authenticated messages over the Internet
- TLS 1.0 uses MAC-then-encrypt: $Enc(K_1, M || MAC(K_2, M))$
	- The encryption algorithm is AES-CBC
- The Lucky 13 attack abuses MAC-then-encrypt to read encrypted messages
	- Guess a byte of plaintext and change the ciphertext accordingly
	- The MAC will error, but the time it takes to error is different depending on if the guess is correct
	- Attacker measures how long it takes to error in order to learn information about plaintext
	- TLS will send the message again if the MAC errors, so the attacker can guess repeatedly
- Takeaways
	- Side channel attack: The algorithm is proved secure, but poor implementation made it vulnerable
	- Always encrypt-then-MAC



## 2️⃣ AEAD (Authentication Encryption with Additional Data)
- Authenticated encryption with additional data (AEAD): An algorithm that provides both confidentiality and integrity over the plaintext and integrity over additional data
- Additional data is usually context (e.g. memory address), so you can’t change the context without breaking the MAC
- Great: No more worrying about MAC-then-encrypt


### Galois Counter Mode (GCM)

![](../../../../../../../Assets/Pics/Pasted%20image%2020240926132043.png)



## Ref
