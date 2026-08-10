# Proof of Knowledge (PoK)

[TOC]



## Res
### Related Topics
↗ [Zero-Knowledge Proof (ZKP)](../🍭%20Zero-Knowledge%20Proof%20(ZKP)/Zero-Knowledge%20Proof%20(ZKP).md)
↗ [Sigma Protocols (Commit–Challenge–Response)](../🍭%20Zero-Knowledge%20Proof%20(ZKP)/Interactive%20ZK%20Proofs/Sigma%20Protocols%20(Commit–Challenge–Response)/Sigma%20Protocols%20(Commit–Challenge–Response).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Proof_of_knowledge#Sigma_protocols

In cryptography, a proof of knowledge is an interactive proof in which the prover succeeds in 'convincing' a verifier that the prover knows something. What it means for a machine to 'know something' is defined in terms of computation. A machine 'knows something', if this something can be computed, given the machine as an input. As the program of the prover does not necessarily spit out the knowledge itself (as is the case for zero-knowledge proofs$^{[1]}$), a machine with a different program, called the knowledge extractor is introduced to capture this idea. We are mostly interested in what can be proven by polynomial time bounded machines. In this case, the set of knowledge elements is limited to a set of witnesses of some language in NP.

Let $x$ be a statement of language $L$ in NP, and $W(x)$ the set of witnesses for $x$ that should be accepted in the proof. This allows us to define the following relation: $R = \{(x,w) : x \in L,\; w \in W(x)\}.$

A proof of knowledge for relation $R$ with knowledge error $\kappa$ is a two party protocol with a prover $P$ and a verifier $V$ with the following two properties:
1. **Completeness:** If $(x,w) \in R$, then the prover $P$ who knows witness $w$ for $x$ succeeds in convincing the verifier $V$ of his knowledge. More formally: $\Pr(P(x,w) \leftrightarrow V(x) \to 1) = 1,$ i.e. given the interaction between the prover $P$ and the verifier $V$, the probability that the verifier is convinced is 1.
2. **Validity:** Validity requires that the success probability of a knowledge extractor $E$ in extracting the witness, given oracle access to a possibly malicious prover $\tilde{P}$, must be at least as high as the success probability of the prover $\tilde{P}$ in convincing the verifier. This property guarantees that no prover that doesn't know the witness can succeed in convincing the verifier.



## Ref
