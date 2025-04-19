# Pseudorandom & Random Number Generation (PRNG & RNG)

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/🧐%20Information%20Theory/Information%20Theory.md)
↗ [Chaos Theory](../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/Chaos%20Theory/Chaos%20Theory.md)

↗ [Stream Cipher Design](Modern%20Cryptography/📌%20Symmetric%20Cipher/Stream%20Cipher%20(Sequence%20Cipher)/📌%20Stream%20Cipher%20Design/Stream%20Cipher%20Design.md)
↗ [Pseudo-Random Stream Generation](Modern%20Cryptography/📌%20Symmetric%20Cipher/Stream%20Cipher%20(Sequence%20Cipher)/📌%20Stream%20Cipher%20Design/Pseudo-Random%20Stream%20Generation/Pseudo-Random%20Stream%20Generation.md)



## Intro
> 🔗 https://textbook.cs161.org/crypto/prng.html

- True randomness requires sampling a physical process
	- Slow and expensive (low entropy)
- PRNG: An algorithm that uses a little bit of true randomness to generate a lot of random-looking output
	- Seed(entropy): Initialize internal state
	- Reseed(entropy): Add additional entropy to the internal state
	- Generate(n): Generate n bits of pseudorandom output
	- Security: Computationally indistinguishable from truly random bits
- CTR-DRBG: Use a block cipher in CTR mode to generate pseudorandom bits
- HMAC-DRBG: Use repeated applications of HMAC to generate pseudorandom bits


### Randomness & Entropy
In cryptography, “random” usually means “random and unpredictable”
Scenario
- You want to generate a secret bitstring that the attacker can't guess
- You generate random bits by tossing a fair (50-50) coin
- The outcomes of the fair coin are harder for the attacker to guess

Entropy: A measure of uncertainty
- In other words, a measure of how unpredictable the outcomes are
- High entropy = unpredictable outcomes = desirable in cryptography
- The uniform distribution has the highest entropy (every outcome equally likely, e.g. fair coin toss)
- Usually measured in bits (so 3 bits of entropy = uniform, random distribution over 8 values)

To generate truly random numbers, we need a physical source of entropy
- An unpredictable circuit on a CPU
- Human activity measured at very fine time scales (e.g. the microsecond you pressed a key)
- However, true randomness is expensive and slow. Hence, we use PRNGs (Pseudo-Random Number Generations)

Pseudorandom number generator (PRNGs): An algorithm that uses a little bit of true randomness to generate a lot of random-looking output 
- Also called deterministic random bit generators (DRBGs)
Usage
- Generate some expensive true randomness (e.g. noisy circuit on your CPU)
- Use the true randomness as input to the PRNG
- Generate random-looking numbers quickly and cheaply with the PRNG
PRNGs are deterministic: Output is generated according to a set algorithm
- However, for an attacker who can’t see the internal state, the output is computationally indistinguishable from true randomness


### Randomness & PRNG
A PRNG has three functions:
- PRNG.Seed(randomness): Initializes the internal state using some random bits
	- Input: Some truly random bits
- PRNG.Reseed(randomness): Updates the internal state using the existing state and the random bits
	- Input: More truly random bits
- PRNG.Generate(n): Generate n pseudorandom bits
	- Input: A number n
	- Output: n pseudorandom bits
	- Updates the internal state as needed
Properties
- Correctness: Deterministic
- Efficiency: Efficient to generate pseudorandom bits
- Security: Indistinguishability from random
- Additional security: Rollback resistance



## PRNG Algorithms
### CTR-DRBG


### HMAC-DRBG
- Assuming HMAC is secure, HMAC-DRBG is a secure, rollback-resistant PRNG
	- Secure: If you can distinguish PRNG output from random, then you’ve distinguished HMAC from random
	- Rollback-resistant: If you can derive old output from the current state, then you’ve reversed the hash function or HMAC
	- The full proof is out of scope
	- In other words: if you break HMAC-DRBG, you’ve either broken HMAC or the underlying hash function



## PRNG Applications
### UUIDs


### Pseudo-Random Stream Generation
↗ [Pseudo-Random Stream Generation](Modern%20Cryptography/📌%20Symmetric%20Cipher/Stream%20Cipher%20(Sequence%20Cipher)/📌%20Stream%20Cipher%20Design/Pseudo-Random%20Stream%20Generation/Pseudo-Random%20Stream%20Generation.md)



## Ref
