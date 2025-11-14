# Randomness & (Pseudo) Random Number Generation (P-RNG)

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)
↗ [Chaos Theory](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Dynamical%20Systems%20Theory/🇺🇳%20Chaos%20Theory/Chaos%20Theory.md)

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


> 🔗 https://en.wikipedia.org/wiki/Random_number_generation

**Random number generation** is a process by which, often by means of a **random number generator** (**RNG**), a sequence of [numbers](https://en.wikipedia.org/wiki/Number "Number") or [symbols](https://en.wikipedia.org/wiki/Symbol "Symbol") is generated that cannot be reasonably predicted better than by [random](https://en.wikipedia.org/wiki/Random "Random") chance. This means that the particular outcome sequence will contain some patterns detectable in hindsight but impossible to foresee. True random number generators can be _[hardware random-number generators](https://en.wikipedia.org/wiki/Hardware_random_number_generator "Hardware random number generator")_ (HRNGs), wherein each generation is a function of the current value of a physical environment's attribute that is constantly changing in a manner that is practically impossible to model. This would be in contrast to so-called _random number generations_ done by _[pseudorandom number generators](https://en.wikipedia.org/wiki/Pseudorandom_number_generator "Pseudorandom number generator")_ (PRNGs), which generate [pseudorandom](https://en.wikipedia.org/wiki/Pseudorandom "Pseudorandom") numbers that are in fact predetermined—these numbers can be reproduced simply by knowing the initial state of the PRNG and the method it uses to generate numbers. There is also a class of [non-physical true random number generators](https://en.wikipedia.org/wiki/Non-physical_true_random_number_generator "Non-physical true random number generator") (NPTRNG) that produce true random numbers without an access to a dedicated hardware source, by scavenging entropy that is present in the computer system. See the details in [True vs. pseudo-random numbers](https://en.wikipedia.org/wiki/Random_number_generation#True_vs._pseudo-random_numbers).

Various [applications of randomness](https://en.wikipedia.org/wiki/Applications_of_randomness "Applications of randomness") have led to the development of different methods for generating [random](https://en.wikipedia.org/wiki/Random "Random") data. Some of these have existed since ancient times, including well-known examples like the rolling of [dice](https://en.wikipedia.org/wiki/Dice "Dice"), [coin flipping](https://en.wikipedia.org/wiki/Coin_flipping "Coin flipping"), the [shuffling](https://en.wikipedia.org/wiki/Shuffling "Shuffling") of [playing cards](https://en.wikipedia.org/wiki/Playing_card "Playing card"), the use of [yarrow](https://en.wikipedia.org/wiki/Yarrow "Yarrow") stalks (for [divination](https://en.wikipedia.org/wiki/I_Ching_divination "I Ching divination")) in the [I Ching](https://en.wikipedia.org/wiki/I_Ching "I Ching"), as well as countless other techniques. Because of the mechanical nature of these techniques, generating large quantities of sufficiently random numbers (important in statistics) required much work and time. Thus, results would sometimes be collected and distributed as [random number tables](https://en.wikipedia.org/wiki/Random_number_table "Random number table").

Several computational methods for pseudorandom number generation exist. All fall short of the goal of true randomness, although they may meet, with varying success, some of the [statistical tests for randomness](https://en.wikipedia.org/wiki/Statistical_randomness "Statistical randomness") intended to measure how unpredictable their results are (that is, to what degree their patterns are discernible). This generally makes them unusable for applications such as [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"). However, carefully designed [_cryptographically secure pseudorandom number generators_](https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator "Cryptographically secure pseudorandom number generator") (CSPRNGS) also exist, with special features specifically designed for use in cryptography.


### Randomness & Entropy
> 🔗 https://textbook.cs161.org/crypto/prng.html

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
> 🔗 https://textbook.cs161.org/crypto/prng.html

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



## Randomness Applications
> 🔗 https://en.wikipedia.org/wiki/Applications_of_randomness

[Randomness](https://en.wikipedia.org/wiki/Randomness "Randomness") has multiple uses in [science](https://en.wikipedia.org/wiki/Science "Science"), [art](https://en.wikipedia.org/wiki/Art "Art"), [statistics](https://en.wikipedia.org/wiki/Statistics "Statistics"), [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), [gaming](https://en.wikipedia.org/wiki/Video_game "Video game"), [gambling](https://en.wikipedia.org/wiki/Gambling "Gambling"), and other fields. For example, [random assignment](https://en.wikipedia.org/wiki/Random_assignment "Random assignment") in [randomized controlled trials](https://en.wikipedia.org/wiki/Randomized_controlled_trial "Randomized controlled trial") helps scientists to test hypotheses, and [random numbers](https://en.wikipedia.org/wiki/Random_number_generation "Random number generation") or [pseudorandom numbers](https://en.wikipedia.org/wiki/Pseudorandomness "Pseudorandomness") help video games such as [video poker](https://en.wikipedia.org/wiki/Video_poker "Video poker").

These uses have different levels of [requirements](https://en.wikipedia.org/wiki/Requirement "Requirement"), which leads to the use of different methods. Mathematically, there are distinctions between [randomization](https://en.wiktionary.org/wiki/randomization#Noun "wikt:randomization"), [pseudorandomization](https://en.wikipedia.org/wiki/Pseudorandomness "Pseudorandomness"), and [quasirandomization](https://en.wikipedia.org/wiki/Low-discrepancy_sequence "Low-discrepancy sequence"), as well as between [random number generators](https://en.wikipedia.org/wiki/Random_number_generation "Random number generation") and [pseudorandom number generators](https://en.wikipedia.org/wiki/Pseudorandom_number_generator "Pseudorandom number generator"). For example, applications in cryptography usually have strict requirements, whereas other uses (such as generating a "quote of the day") can use a looser standard of pseudorandomness.



## PRNG Applications
Practical applications and uses
### UUIDs


### Pseudo-Random Stream Generation
↗ [Pseudo-Random Stream Generation](Modern%20Cryptography/📌%20Symmetric%20Cipher/Stream%20Cipher%20(Sequence%20Cipher)/📌%20Stream%20Cipher%20Design/Pseudo-Random%20Stream%20Generation/Pseudo-Random%20Stream%20Generation.md)



## Ref
