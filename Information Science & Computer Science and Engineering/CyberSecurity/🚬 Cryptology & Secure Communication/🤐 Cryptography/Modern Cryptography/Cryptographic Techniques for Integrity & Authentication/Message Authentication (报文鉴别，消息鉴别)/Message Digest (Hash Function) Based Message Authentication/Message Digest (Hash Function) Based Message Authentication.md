# Message Digest (Hash Function) Based Message Authentication

[TOC]



## Res
### Related Topics
↗ [Message Digest & Hash Function (Integrity)](../../Message%20Digest%20&%20Hash%20Function%20(Integrity)/Message%20Digest%20&%20Hash%20Function%20(Integrity).md)
↗ [Digital Signature & DSA](../Digital%20Signature%20&%20DSA/Digital%20Signature%20&%20DSA.md)



## Intro: MAC /Cryptographic Checksum
### ⭐ MAC (Message Authentication Code)
- Inputs: a secret key and a message
- Output: a tag on the message
- A secure MAC is unforgeable: Even if Mallory can trick Alice into creating MACs for messages that Mallory chooses, Mallory cannot create a valid MAC on a message that she hasn't seen before
	- Example: $HMAC(K, M) = H((K' \oplus opad) || H((K' \oplus ipad) || M))$
- MACs do not provide confidentiality

![](../../../../../../../../Assets/Pics/Screenshot%202024-09-26%20at%2013.48.49.png)

- Alice wants to send M to Bob, but doesn’t want Mallory to tamper with it
- Alice sends $M$ and $T = MAC(K, M)$ to Bob
- Bob receives $M$ and $T$
- Bob computes $MAC(K, M)$ and checks that it matches T
- If the MACs match, Bob is confident the message has not been tampered with (integrity)


### Motivation of MAC
![](../../../../../../../../Assets/Pics/Screenshot%202023-10-30%20at%208.43.45AM.png)


### MAC Mechanism
![](../../../../../../../../Assets/Pics/Pasted%20image%2020231030084325.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-10-30%20at%208.47.17AM.png)


### MAC Properties
- Correctness: Determinism
	- Note: Some more complicated MAC schemes have an additional Verify(K, M, T) function that don’t require determinism, but this is out of scope
- Efficiency: Computing a MAC should be efficient
- Security: EU-CPA (existentially unforgeable under chosen plaintext attack)**

Do MACs provide integrity?
- Yes. An attacker cannot tamper with the message without being detected

Do MACs provide authenticity?
- If a message has a valid MAC, you can be sure it came from someone with the secret key, but you can’t narrow it down to one person
- If only two people have the secret key, MACs provide authenticity: it has a valid MAC, and it’s not from me, so it must be from the other person

Do MACs provide confidentiality?
- MACs are deterministic ⇒ No IND-CPA security
- MACs in general have no confidentiality guarantees; they can leak information about the message
	- HMAC doesn’t leak information about the message, but it’s still deterministic, so it’s not IND-CPA secure



## MD-based Message Authentication Modes
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%202.46.31%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%202.46.41%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%202.46.54%20PM.png)



## MD-based Message Authentication
### NMAC


### 1️⃣ HMAC
↗ [HMAC](HMAC.md)



## Ref

