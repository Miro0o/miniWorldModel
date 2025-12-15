# Quantum Cryptography & Post-Quantum Cryptography (PQ)

[TOC]



## Res
### Related Topics
↗ [Quantum Computing (and Communication)](../../../../🧠%20Computing%20Methodologies/Quantum%20Computing%20(and%20Communication)/Quantum%20Computing%20(and%20Communication).md)



## Intro



## Quantum Cryptography (QC)
> 🔗 https://en.wikipedia.org/wiki/Quantum_cryptography

**Quantum cryptography** is the science of exploiting [quantum mechanical](https://en.wikipedia.org/wiki/Quantum_mechanics "Quantum mechanics") properties such as quantum entanglement, measurement disturbance, no-cloning theorem, and the principle of [superposition](https://en.wikipedia.org/wiki/Quantum_superposition "Quantum superposition") to perform various [cryptographic](https://en.wikipedia.org/wiki/Cryptographic "Cryptographic") tasks. Historically defined as the practice of encoding messages, a concept now referred to as [encryption](https://en.wikipedia.org/wiki/Encryption "Encryption"), quantum cryptography plays a crucial role in the secure processing, storage, and transmission of information across various domains.

One aspect of quantum cryptography is [quantum key distribution](https://en.wikipedia.org/wiki/Quantum_key_distribution "Quantum key distribution") (QKD), which offers an [information-theoretically secure](https://en.wikipedia.org/wiki/Information-theoretic_security "Information-theoretic security") solution to the [key exchange](https://en.wikipedia.org/wiki/Key_exchange "Key exchange") problem. The advantage of quantum cryptography lies in the fact that it allows the completion of various cryptographic tasks that are proven or conjectured to be impossible using only classical (i.e. non-quantum) communication. Furthermore, quantum cryptography affords the authentication of messages, which allows the legitimates parties to prove that the messages were not wiretaped during transmission. For example, in a cryptographic set-up, it is [impossible to copy](https://en.wikipedia.org/wiki/No-cloning_theorem "No-cloning theorem") with perfect fidelity, the data encoded in a [quantum state](https://en.wikipedia.org/wiki/Quantum_state "Quantum state"). If one attempts to read the encoded data, the quantum state will be changed due to [wave function collapse](https://en.wikipedia.org/wiki/Wave_function_collapse "Wave function collapse") ([no-cloning theorem](https://en.wikipedia.org/wiki/No-cloning_theorem "No-cloning theorem")). This could be used to detect eavesdropping in QKD schemes, or in quantum communication links and networks. These advantages have significantly influenced the evolution of quantum cryptography, making it practical in today's digital age, where devices are increasingly interconnected and cyberattacks have become more sophisticated. As such quantum cryptography is a critical component in the advancement of a quantum internet, as it establishes robust mechanisms to ensure the long-term privacy and integrity of digital communications and systems.



## Post-Quantum Cryptography (PQC)
> 🔗 https://en.wikipedia.org/wiki/Post-quantum_cryptography

**Post-quantum cryptography** (**PQC**), sometimes referred to as **quantum-proof**, **quantum-safe**, or **quantum-resistant**, is the development of [cryptographic](https://en.wikipedia.org/wiki/Cryptographic_primitive "Cryptographic primitive") algorithms (usually [public-key](https://en.wikipedia.org/wiki/Public-key_cryptosystem "Public-key cryptosystem") algorithms) that are currently thought to be secure against a [cryptanalytic attack](https://en.wikipedia.org/wiki/Cryptanalytic_attack "Cryptanalytic attack") by a [quantum computer](https://en.wikipedia.org/wiki/Quantum_computing "Quantum computing"). Most widely used public-key algorithms rely on the difficulty of one of three mathematical problems: the [integer factorization problem](https://en.wikipedia.org/wiki/Integer_factorization_problem "Integer factorization problem"), the [discrete logarithm problem](https://en.wikipedia.org/wiki/Discrete_logarithm_problem "Discrete logarithm problem") or the [elliptic-curve discrete logarithm problem](https://en.wikipedia.org/wiki/Elliptic-curve_discrete_logarithm_problem "Elliptic-curve discrete logarithm problem"). All of these problems could be easily solved on a sufficiently powerful quantum computer running [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm "Shor's algorithm") or possibly alternatives.

As of 2025, quantum computers lack the [processing power](https://en.wikipedia.org/wiki/Processing_power "Processing power") to break widely used cryptographic algorithms; however, because of the length of time required for migration to quantum-safe cryptography, cryptographers are already designing new algorithms to prepare for **[Y2Q](https://en.wikipedia.org/wiki/Y2Q "Y2Q")** or **Q-Day**, the day when current algorithms will be vulnerable to quantum computing attacks. [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem "Mosca's theorem") provides the risk analysis framework that helps organizations identify how quickly they need to start migrating.

Their work has gained attention from academics and industry through the PQCrypto [conference](https://en.wikipedia.org/wiki/Academic_conference "Academic conference") series hosted since 2006, several workshops on Quantum Safe Cryptography hosted by the [European Telecommunications Standards Institute](https://en.wikipedia.org/wiki/ETSI "ETSI") (ETSI), and the [Institute for Quantum Computing](https://en.wikipedia.org/wiki/Institute_for_Quantum_Computing "Institute for Quantum Computing"). The rumoured existence of widespread [harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later "Harvest now, decrypt later") programs has also been seen as a motivation for the early introduction of post-quantum algorithms, as data recorded now may still remain sensitive many years into the future.

In contrast to the threat quantum computing poses to current public-key algorithms, most current [symmetric cryptographic algorithms](https://en.wikipedia.org/wiki/Symmetric_cipher "Symmetric cipher") and [hash functions](https://en.wikipedia.org/wiki/Hash_function "Hash function") are considered to be relatively secure against attacks by quantum computers. While the quantum [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm "Grover's algorithm") does speed up attacks against symmetric ciphers, doubling the key size can effectively counteract these attacks. Thus post-quantum symmetric cryptography does not need to differ significantly from current symmetric cryptography.

In 2024, the U.S. [National Institute of Standards and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology "National Institute of Standards and Technology") (NIST) released final versions of its first three Post-Quantum Cryptography Standards.


### Standards



### Algorithms
#### Lattice-Based Cryptography

#### Multivariate Cryptography

#### Hash-based Cryptography

#### Code-based Cryptography

#### Isogeny-based cryptography

#### Symmetric key quantum resistance


### Security Reductions
In cryptography research, it is desirable to prove the equivalence of a cryptographic algorithm and a known hard mathematical problem. These proofs are often called "security reductions", and are used to demonstrate the difficulty of cracking the encryption algorithm. In other words, the security of a given cryptographic algorithm is reduced to the security of a known hard problem. Researchers are actively looking for security reductions in the prospects for post-quantum cryptography. Current results are given here:



## Ref
[Quantum Search-to-Decision Reduction for the LWE Problem | Cryptology ePrint Archive]: https://eprint.iacr.org/2023/344
[Kyber | wikipedia]: https://en.wikipedia.org/wiki/Kyber
