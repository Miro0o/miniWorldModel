# Dolev–Yao (DY) Model & Extended Dolev–Yao Models

[TOC]



## Res
### Related Topics
↗ [AnB (Alice and Bob) Notation & AnBx Languages](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/AnB%20(Alice%20and%20Bob)%20Notation%20&%20AnBx%20Languages.md)
↗ [Term Algebra & Free Algebra](../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/👽%20Universal%20Algebra%20(泛代数)/Term%20Algebra%20&%20Free%20Algebra.md)

↗ [Gentzen-Style Proofs (Natural Deduction)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)


### Other Resources
Dolev, Danny, and Andrew Yao. "On the security of public key protocols." IEEE Transactions on information theory 29.2 (2003): 198-208.



## Intro
> 🔗 https://en.wikipedia.org/wiki/Dolev%E2%80%93Yao_model

The **Dolev–Yao model**, named after its authors [Danny Dolev](https://en.wikipedia.org/wiki/Danny_Dolev "Danny Dolev") and [Andrew Yao](https://en.wikipedia.org/wiki/Andrew_Yao "Andrew Yao"), is a [formal model](https://en.wikipedia.org/wiki/Mathematical_model "Mathematical model") used to prove properties of interactive cryptographic protocols.
 
 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 7.
 
One of the most cited papers of protocol verification is one by Danny Dolev and Andrew Yao^[On the Security of Public Key Protocols (IEEE Trans. Inf. Th., 1983)] because they suggested a simple but comprehensive intruder model that has become the de-facto standard for modeling an intruder if one does not consider the cryptographic level. The original paper considers only public-key encryption as a cryptographic primitive, but it is common to treat other primitives in the same spirit. Here are the key points:
- Every user has a public/private key pair.
- Every user knows the public key of every other user.
- The Dolev-Yao intruder:
	- The intruder is also a user with his own key pair.
	- The intruder can decrypt only messages that are “meant” for him, i.e., that are encrypted with his public key.
	- The intruder controls the network: he can read messages, block them, divert them to a different recipient, and insert new messages.

It may seem excessive to assume the intruder controls the entire network (e.g., the entire
Internet and also the Intranet of a company). However, this expresses simply that we do not rely the network to offer any protection, and we should not if a message may travel over any point that could be insecure. We will later see how to integrate a notion of channels on which the intruder has no, or limited, control.

The insecure network is the classical view of secure communication (shannon-weaver model): Alice wants to send to Bob some messages, they are honest people, but between them is a hostile world that tries to read, manipulate, or even forge messages between them. One may think of a spy novel where Alice is a secret agent operating in a foreign country and Bob is the home base of the secret service. Dolev and Yao make an important change to this classical view: that the participants of a protocol are not necessarily honest people (who stick to the rules, in particular the protocol). One may think for instance of an e-Banking protocol where Alice is a customer and Bob is a bank: it should not be a requirement of this protocol that all customers are honest, some clients may be trying to cheat. Maybe even a bank may be dishonest, e.g., due to dishonest employees trying to manipulate transactions. In fact, several of the most surprising attacks involve a dishonest participant (while the protocol is secure when considering only honest agents and the intruder can only control the network) e.g. [18]. Thus, we recommend to consider by default that every role of the protocol may be played by a dishonest agent. In some cases like the keyserver example from before, we see that the protocol is (trivially) broken if the keyserver is dishonest. We have thus explicitly made the keyserver a trusted party by using a constant s that cannot be instantiated by the intruder, while all other roles of the protocol (where we have variables) can be instantiated by the intruder i. ^[One may wonder what happens if there is more than one intruder: in the worst case, they all collaborate, therefore we see that as a special case of one intruder and the dishonest agents are bots under the intruder’s control. It is a bit of a simplification that there is only one dishonest agent called i, but as long as no inequalities on agent names are required, this is sound.]


### Dolev-Yao Intruder Deduction
> [!links]
> ↗ [Mathematics](../../../../🧮%20Mathematics/Mathematics.md)
> ↗ [Gentzen-Style Proofs (Natural Deduction)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)

 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 7.1
 
==At the core of the Dolev-Yao intruder model is the question of the cryptographic abilities.== While
Dolev and Yao only consider public-key cryptography, the general idea is that **the intruder “knows” all cryptographic algorithms** – these algorithms should not be considered a secret themselves, but only the secret keys. This is sometimes called Kerckhoff ’s principle. It is particularly important if you have dishonest participants, because they obviously need to know the algorithms. Note that only functions like $\operatorname{inv}(·)$ are exempt from this, because they do not represent a cryptographic operation, but a function in our model that assigns to every public key its corresponding private key.

Another key idea of Dolev-Yao is now: **the intruder can use all (public) cryptographic operations** – but that is it, there is no other possibility to analyze messages, like cryptanalysis. Thus we model an intruder who has access to a *Crypto API*, i.e., a library of encryption and decryption algorithms, but all he ever does cryptographically are function calls to that library. All the security results we prove in this model thus are against an intruder who is oblivious to cryptography and may no longer hold against an attacker with crypto-analytic abilities.

> [!tip]
> ==The core of the Dolev-Yao model is a definition what the intruder can do with messages.==
> - We define a relation $M ⊢m$ ...
> 	- where $M$ is a set of messages, $m$ is a message 
> - ... expressing that the intruder can derive $m$, if his knowledge is $M$.
> 
> The idea comes from syllogism (Aristotle) and (natural) deduction /deduction reasoning: 
> - ↗ [Mathematics](../../../../🧮%20Mathematics/Mathematics.md)
> - ↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
> - ↗ [Proof Theory](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Theory.md), ↗ [Gentzen-Style Proofs (Natural Deduction)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)
> 
> > [!example]
> > $$\begin{aligned} M &= \{\, k_1,\; \{\!\mid m_1 \mid\!\}_{k_1},\; m_2,\; \{\!\mid m_3 \mid\!\}_{k_2} \,\} \\[10pt] \text{Then we should have for instance:} \\ &\bullet\; M \vdash m_1 \\ &\bullet\; M \vdash m_2 \\ &\bullet\; M \nvdash m_3 \\ &\bullet\; M \vdash \{\!\mid \langle m_1, m_2 \rangle \mid\!\}_{k_1} \end{aligned} $$

One could of course instead perform “cryptographic security proofs”, i.e., prove that a protocol is secure in an algebra like $\mathcal{C}$ in Example 4. This gets extremely complex as one has to then define bounds on the intruder’s resources, consider probabilities (since the intruder may make guesses) and use assumptions of the hardness of certain mathematical problems like prime factorization. If we think of a developer in industry whose goal is to design complex distributed systems then security against such a full-fledged cryptographic model may be infeasible: we should not require that all developers of systems that use cryptography are also cryptographers themselves.

Our suggestion is to clearly distribute “responsibility” and a reasonable distribution can be: the goal of a crypto API should be, roughly speaking, that the intruder cannot derive any message that he cannot obtain from an API call. This is not trivial to formalize and prove, but there are several results that show the soundness of a Dolev-Yao model with respect to a concrete cryptographic implementation, e.g. [5].

We formalize now the cryptographic abilities of the intruder according in the style of Dolev and Yao for our set of operators from Table 1 (↗ [AnB (Alice and Bob) Notation & AnBx Languages](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/AnB%20(Alice%20and%20Bob)%20Notation%20&%20AnBx%20Languages.md), definition of signature). This is a relation of the form $M \vdash m$ where $M$ is a finite set of messages, called the **intruder knowledge**, and $m$ is a message that is derivable from that knowledge:

> [!definition]
> **Definition 8.**  (Dolev-Yao Closure)
> 
> *We define $\vdash$ as the least relation that satisfies the following rules:*
> $$
> \frac{} {M \vdash m} \quad \text{if } m \in M \; (\text{Axiom}) 
> \qquad
> \frac{M \vdash m_1 \quad \cdots \quad M \vdash m_n}{M \vdash f(m_1,\ldots,m_n)} 
> \quad \text{if } f/n \in \Sigma_p \; (\text{Compose})
> $$
> $$
> \frac{M \vdash \langle m_1,m_2\rangle}{M \vdash m_i} \; (\text{Proj}_i)
> \qquad
> \frac{M \vdash \{m\}_k \quad M \vdash k}{M \vdash m} \; (\text{DecSym})
> $$
> $$
> \frac{M \vdash \{m\}_k \quad M \vdash \operatorname{inv}(k)}{M \vdash m} \; (\text{DecAsym})
> \qquad
> \frac{M \vdash \{m\}_{\operatorname{inv}(k)}}{M \vdash m} \; (\text{OpenSig})
> $$
> $$
> \frac{M \vdash s}{M \vdash t} \quad \text{if } s \approx_E t \; (\text{Algebra})
> $$
> 
> **(Axiom)** This rule just says that the intruder can derive any term $m$ that is already in his knowledge $M$.
> 
> **(Compose)** This rule says that for any public function symbol $f$ of $n$ arguments he can apply $f$ to any terms $m_1,\ldots,m_n$ that he can already derive.
> - The compose rule is for all public functions $Σ_p$, including $\{|·|\}·$, $\{·\}·$, $⟨·, ·⟩$
> 
> **(Proj$_i$)** If the intruder knows the pair $\langle m_1,m_2\rangle$, then he also knows its components $m_1$ and $m_2$.
> 
> **(DecSym)** If the intruder knows a symmetrically encrypted message $\{m\}_k$ and also knows the key $k$, then he can derive $m$.
> 
> **(DecAsym)** Similarly for asymmetric encryption, only here he has to know the private key $\operatorname{inv}(k)$.
> 
> **(OpenSig)** If the intruder knows a signature $\{m\}_{\operatorname{inv}(k)}$, then he also knows the signed message $m$. ^[We assume here a signature scheme where the message m being signed is actually included in clear-text and the actual signature is applied only to a hash of that message. To obtain m, the intruder does not need to know the public key, but only for verifying signatures. Verifying signatures however is not a message deduction problem (he does not learn a new message from that).]
> 
> **(Algebra)** For the case that one wants to analyze a protocol under some algebraic properties $E$ (e.g. for exponentiation), this rule closes the deduction under $\approx_E$.
> 
> The fact that the intruder cannot do anything else than these rules is captured by saying that $\vdash$ is the *least* relation satisfying the rules: if $M \vdash t$ does not follow from these rules (by any number of steps), then $M \nvdash t$.

> [!example]
> **Example 6.** Let $M=\{k_1,\{m_1\}_{k_1},m_2,\{m_3\}_{k_2}\}$. Then for instance we have:
> - $M \vdash m_1$
> - $M \nvdash m_3$
> - $M \vdash \{\langle m_1,m_2\rangle\}_{k_1}$
> - $\ldots$
> 
> We can actually write derivations as a proof tree where the leaves of the tree are (Axiom) steps and the root of the tree is the result we want to prove:
> 
> ![](../../../../../../Assets/Pics/Screenshot%202026-02-23%20at%2023.59.10.png)

> [!example]
> **Example 7.** As an example for reasoning with algebraic properties consider again the property $\operatorname{exp}(\operatorname{exp}(B,X),Y) \approx \operatorname{exp}(\operatorname{exp}(B,Y),X)$.
> 
> Let the intruder knowledge be $M=\{x,\{b,\operatorname{exp}(g,y)\}_k,k,m\}$. Observe that $x,y$ are constants (lower-case letters) i.e., concrete exponents that the intruder and another participant have randomly chosen.
> 
> We show that the intruder can derive from $M$ for instance the message $\{m\}_{\operatorname{exp}(\operatorname{exp}(g,x),y)}$:
> 
> ![](../../../../../../Assets/Pics/Screenshot%202026-02-24%20at%2000.00.37.png)

> [!example]
> ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.07.50.png)


### Automating Dolev-Yao Deduction
> [!links]
> ↗ [(Formal) Model Checking](../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/🧳%20(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

Goal: design (in pseudocode) a decision procedure for Dolev-Yao:
- Given a finite set M of messages (the intruder knowledge)
- and given a message m (the goal)
- Output whether $M ⊢m$ holds.
- additionally, in the positive case, give the proof.

 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 7.2

Let us quickly think about implementing an algorithm that, given $M$ and $m$ as input should tell us whether $M \vdash m$, and consider the free algebra (i.e., $E=\emptyset$, i.e., we can omit the (xAlgebra) rule). A problem is that there are infinitely many things the intruder can do, and thus there are infinitely many proofs. How can we limit the search for a proof of $M \vdash m$, so that the algorithm does not run into an infinite loop?

The idea is to solve first an easier problem: let $M \vdash_c m$ denote derivations that only use (Axiom) and (Composition), i.e., an intruder who does not analyze any terms. This can be solved by a simple backwards search: if the goal is to derive $t=f(t_1,\ldots,t_n)$, then check if $t$ is contained in $M$, and if not, and if $f\in\Sigma_p$, try to recursively derive every $t_i$. Otherwise the answer is no. This algorithm terminates since in every recursive call, the terms get smaller.

> [!TIP] Rules for $\vdash_c$ (Composition Only)
> $$\frac{}{\displaystyle M \vdash_c m} \text{ if } m \in M \text{ (Axiom)}$$ $$\frac{\displaystyle M \vdash_c m_1 \quad \dots \quad M \vdash_c m_n}{\displaystyle M \vdash_c f(m_1, \dots, m_n)} \text{ if } f \in \Sigma_p \text{ (Compose)}$$

> [!ABSTRACT] Algorithm
> Decision procedure for $M \vdash_c m$
> 
> 1. Check if $m \in M$; if so return **yes**.
> 2. Otherwise, let $m = f(t_1, \dots, t_n)$:
> 	- $\star$ If $f$ is not public return **no**.
> 	- $\star$ Otherwise recursively check whether: $$M \vdash_c t_1 \text{ and } \dots \text{ and } M \vdash_c t_n$$
> 
> Return **yes** if all these return **yes**, and **no** otherwise.

> [!example]
> 
> step (1) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.23.45.png)
> step (2) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.23.31.png)
> step (3) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.24.00.png)
> step (4) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.24.09.png)

Next we solve the problem to *analyze* the intruder knowledge: if the intruder knows a message of the form $\{m\}_k$, use the above algorithm for checking $M \vdash_c k$, i.e., whether the key can be obtained by composition steps only. If so, add $m$ to the intruder knowledge $M$. This modification of $M$ does not change the set of terms that the intruder can derive from $M$ via $\vdash$, the intruder is just explicitly remembering what he can derive (in this case using (DecSym)). Repeat this for all of the decomposition rules (DecSym), (DecAsym), (Proj$_i$), and (OpenSig) until no new terms can be obtained. This algorithm terminates because it can only add sub-terms of the original intruder knowledge $M$ (and since $M$ is finite, there are only finitely many subterms).

> [!ABSTRACT] Analysis Steps
> * If $\{|m|\}_k \in M$ and $M \vdash_c k$ then add $m$ to $M$.
> * If $\{m\}_k \in M$ and $M \vdash_c \text{inv}(k)$ then add $m$ to $M$.
> * If $\{m\}_{\text{inv}(k)} \in M$ then add $m$ to $M$.
> * If $\langle m_1, m_2 \rangle \in M$ then add $m_1$ and $m_2$ to $M$.
> * Repeat until no new messages can be added.

> [!example]
> step (1) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.34.43.png)
> step (2) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.35.02.png)
> step (3) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.35.12.png)
> step (4) ![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2023.35.23.png)

> [!example]
> **Example 8.** *The complete analysis of the intruder knowledge $M$ in Example 7, would add the message $b$ and $\operatorname{exp}(g,y)$.*

Now that the intruder knowledge is completely analyzed, for any term $m$ to derive it suffices to use only composition steps:

> [!theorem]
> **Theorem 1^[Almousa, Omar, Sebastian Mödersheim, and Luca Viganò. "Alice and Bob: Reconciling formal models and implementation." Programming Languages with Applications to Biology and Security: Essays Dedicated to Pierpaolo Degano on the Occasion of His 65th Birthday. Cham: Springer International Publishing, 2015. 66-85.].** *For an analyzed knowledge $M$, $M \vdash m$ iff $M \vdash_c m$.*

This algorithm can also be extended to handle many equational theories $E$ (e.g. the exponentiation example), but in general $\approx_E$ is undecidable, and thus, so is $\vdash$.


> [!TIP]
> To check if a message $m$ can be derived from a set of messages $M$ ($M \vdash m$):
> - Perform the **Analysis Steps** procedure, augmenting $M$ with all derivable messages.
> - Now it suffices to check $M \vdash_c m$.
> 
> Properties of the algorithm for checking $M \vdash m$:
> -  **Soundness:** if algorithm says "yes", then $M \vdash m$.
> - **Completeness:** if $M \vdash m$, then the algorithm says "yes".
> 	- This is quite tricky to prove. 🤔
> - **Termination:** the algorithm never runs into an infinite loop.
> 	- Procedure for $\vdash_c$ terminates since it goes to smaller terms.
> 	- Analysis terminates because it only adds proper subterms of an existing term. This cannot go on forever, since there are only finitely many subterms.
#### The Completeness Proof
Task of the proof: given a Dolev-Yao proof tree for $M ⊢m$, show that the procedure will say “yes”, i.e., the procedure finds this derivation.

> [!EXAMPLE]
> $M = \{ a, b, i, \text{pk}(a), \text{pk}(b), \text{pk}(i), \text{inv}(\text{pk}(i)), \{\langle na, a \rangle\}_{\text{pk}(i)} \}$
> 
> $$
> \frac{\displaystyle \frac{\frac{}{M \vdash \{\langle na, a \rangle\}_{\text{pk}(i)}} \quad \frac{}{M \vdash \text{inv}(\text{pk}(i))}}{M \vdash \langle na, a \rangle} A \quad \frac{}{M \vdash \text{pk}(b)}}{M \vdash \{\langle na, a \rangle\}_{\text{pk}(b)}} C
> $$
 
- Argument: the step labeled $A$ would have been found by our analysis procedure, augmenting $M$ with $\langle na, a \rangle$.
- So we could replace $[A]$ by axiom afterwards.
- The remainder has only composition steps, and the completeness of $\vdash_c$ is straightforward.
- However, this works only if the message we analyze is an axiom!

What if the message is composed that we want to analyze?

> [!example] 
> $$
> \frac{\displaystyle \frac{\frac{\Pi_1}{M \vdash k} \quad {\color{red}\frac{\Pi_2}{M \vdash m}}}{M \vdash \{\mid m\mid\}_k}\quad \frac{\Pi_3}{M \vdash k}}{\displaystyle {\color{red}M \vdash m}}
> $$
> 
> *for some arbitrary subproofs $\Pi_1, \dots, \Pi_3$.*

- Here the intruder decrypts a term that he has encrypted himself.
- This can be simplified!
- It is without loss of generality to forbid the application of analysis to a term that was obtained by composition.

What if the message is itself the result of an analysis?

> [!example]
> $$
> \frac{\displaystyle \frac{\frac{}{M \vdash \{\langle m_1, m_2 \rangle\}_{\text{pk}(a)}} \quad \frac{}{M \vdash \text{inv}(\text{pk}(a))}}{M \vdash \langle m_1, m_2 \rangle} A_2}{M \vdash m} A_1
> $$
> 

Just always consider the inner-most analysis step first:
* an analysis step that has no analysis step in the subproofs.
* then the message being analyzed must be obtained by axiom, because analysis of composition we have already ruled out.
* thus we can eliminate one by one all analysis steps in the proof until we have a proof with only composition steps, and then completeness follows from $\vdash_c$.

---
Q. Can we thus prove also statements of the form $M ⊬ m$, that a m cannot be derived from $M$?

> [!example] 
> $M= \{k1, \{|m1|\}_{k1}, m2, \{|m3|\}_{k2} \}⊬m3$

A. Yes, due to completeness when our algorithm answers “no”, we know there is no derivation for $m$.


### Analysis of Dolev-Yao Intruder Model
> 🤖 https://chatgpt.com/share/69a6af9d-125c-8010-bb42-788c68a525ca



## Extending Dolev–Yao Model
### Bounded Dolev-Yao



## Ref
