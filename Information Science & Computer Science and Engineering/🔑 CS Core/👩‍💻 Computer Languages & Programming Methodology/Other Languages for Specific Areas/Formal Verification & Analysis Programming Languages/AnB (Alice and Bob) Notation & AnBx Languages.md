# AnB (Alice and Bob) Notation & AnBx Languages

[TOC]



## Res
### Related Topics
↗ [Cryptology & Secure Communication](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
↗ [Cryptography](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Cryptography.md)
↗ [Cryptographic Protocols Modeling & Models of Communication (and Intruder)](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder).md)

↗ [Security Protocols Formal Modeling & Verification](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Security%20Protocols%20Formal%20Modeling%20&%20Verification.md)
- ↗ [Cryptographic Protocols Modeling & Verification](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)

↗ [Proof Theory](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Theory.md)
- ↗ [Gentzen-Style Proofs (Natural Deduction)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)


### Other Resources
https://infsec.ethz.ch/research/software/anb.html
Alice&Bob protocols
**Research papers and tools on Alice&Bob notation**
- [DownloadKeller's bachelor's thesis (PDF, 1.1 MB)](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/information-security-group-dam/research/software/thesis_keller_alicebob.pdf): about translating Alice&Bob protocol notation into Tamarin's input language, [Downloadwith implementation available (GZ, 49 KB)](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/information-security-group-dam/research/software/anb.tar.gz).
- [DownloadFestschrift for Jose Meseguer (PDF, 433 KB)](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/information-security-group-dam/research/software/anb_festschrift.pdf): Alice and Bob Meet Equational Theories - translation of Alice&Bob notation in general, and to Tamarin specifically. Prototype [Downloadcheck generator available (GZ, 14 KB)](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/information-security-group-dam/research/software/gen_checks.tar.gz).
- [DownloadKozmai's bachelor's thesis (PDF, 698 KB)](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/information-security-group-dam/research/software/Kozmai-Tamarin-to-AnB.pdf): translation a class of Tamarin specifications into Alice&Bob protocol notation, [Downloadwith implementation available (ZIP, 24 KB)](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/information-security-group-dam/research/software/tamarin_to_anb.zip).  

The backend for this work is the [Tamarin prover](https://infsec.ethz.ch/research/projects/tamarin.html).



## Intro
### Alice and Bob Notation
> 🔗 https://en.wikipedia.org/wiki/Alice_and_Bob

**Alice and Bob** are fictional characters commonly used as [placeholders](https://en.wikipedia.org/wiki/Placeholder_name "Placeholder name") in discussions about [cryptographic](https://en.wikipedia.org/wiki/Cryptography "Cryptography") systems and [protocols](https://en.wikipedia.org/wiki/Cryptographic_protocol "Cryptographic protocol"), and in other science and engineering literature where there are several participants in a [thought experiment](https://en.wikipedia.org/wiki/Thought_experiment "Thought experiment"). The Alice and Bob characters were created by [Ron Rivest](https://en.wikipedia.org/wiki/Ron_Rivest "Ron Rivest"), [Adi Shamir](https://en.wikipedia.org/wiki/Adi_Shamir "Adi Shamir"), and [Leonard Adleman](https://en.wikipedia.org/wiki/Leonard_Adleman "Leonard Adleman") in their 1978 paper "A Method for Obtaining Digital Signatures and Public-key Cryptosystems". Subsequently, they have become common [archetypes](https://en.wikipedia.org/wiki/Archetype "Archetype") in many scientific and engineering fields, such as [quantum cryptography](https://en.wikipedia.org/wiki/Quantum_cryptography "Quantum cryptography"), [game theory](https://en.wikipedia.org/wiki/Game_theory "Game theory") and [physics](https://en.wikipedia.org/wiki/Physics "Physics"). As the use of Alice and Bob became more widespread, additional characters were added, sometimes with particular meanings. These characters do not have to refer to people; they refer to generic agents which might be different computers or even different programs running on a single computer.
#### Cast of Characters
> 🔗 https://en.wikipedia.org/wiki/Alice_and_Bob#Cast_of_characters

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Alice_ and _Bob_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | The original, generic characters. Generally, Alice and Bob want to exchange a message or cryptographic key.                                                                                                                                                                                                                                                                                                                                                            |
| _Carol_, _Carlos_ or _Charlie_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | A generic third participant.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _Chuck_ or _Chad_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | A third participant, usually of malicious intent.[15](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-15)                                                                                                                                                                                                                                                                                                                                                        |
| _Craig_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A _[password cracker](https://en.wikipedia.org/wiki/Password_cracking "Password cracking"),_ often encountered in situations with stored passwords.                                                                                                                                                                                                                                                                                                                    |
| _Dan_, _Dave_ or _David_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | A generic fourth participant.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| _Erin_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | A generic fifth participant, but rarely used, as "E" is usually reserved for Eve.                                                                                                                                                                                                                                                                                                                                                                                      |
| _Eve_ or _Yves_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | An _[eavesdropper](https://en.wikipedia.org/wiki/Eavesdropping "Eavesdropping")_, who is usually a passive attacker. While they can listen in on messages between Alice and Bob, they cannot modify them. In [quantum cryptography](https://en.wikipedia.org/wiki/Quantum_cryptography "Quantum cryptography"), Eve may also represent the _environment_.[_[clarification needed](https://en.wikipedia.org/wiki/Wikipedia:Please_clarify "Wikipedia:Please clarify")_] |
| _Faythe_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | A _trusted [advisor](https://en.wikipedia.org/wiki/Adviser "Adviser")_, courier or intermediary. Faythe is used infrequently, and is associated with _faith_ and _faithfulness_. Faythe may be a repository of key service or courier of shared secrets.[_[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_]                                                                                                     |
| _Frank_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A generic sixth participant.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _Grace_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A _government representative_. For example, Grace may try to force Alice or Bob to implement backdoors in their protocols. Grace may also deliberately weaken standards.[16](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-16)                                                                                                                                                                                                                                 |
| _Heidi_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A _mischievous designer_ for cryptographic standards, but rarely used.[17](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-17)                                                                                                                                                                                                                                                                                                                                   |
| _Ivan_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | An _issuer_, mentioned first by Ian Grigg in the context of [Ricardian contracts](https://en.wikipedia.org/wiki/Ricardian_contract "Ricardian contract").[18](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-18)                                                                                                                                                                                                                                                |
| _Judy_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | A _judge_ who may be called upon to resolve a potential dispute between participants. See [Judge Judy](https://en.wikipedia.org/wiki/Judge_Judy "Judge Judy").                                                                                                                                                                                                                                                                                                         |
| _Mallory_[19](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-Schneier1996-19)[20](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-20)[21](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-21) or (less commonly) _Mallet_[22](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-Schneier1994-22)[23](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-Perkins2000-23)[24](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-LaMacchia2002-24)[25](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-Dolev2009-25) or _Darth_[26](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-Stallings1998-26) | A _malicious attacker_. Associated with Trudy, an _intruder_. Unlike the passive Eve, Mallory is an active attacker (often used in [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack "Man-in-the-middle attack")), who can modify messages, substitute messages, or replay old messages. The difficulty of securing a system against a Mallory is much greater than against an Eve.                                                   |
| _Michael_ or _Mike_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Used as an alternative to the eavesdropper Eve, from _[microphone](https://en.wikipedia.org/wiki/Microphone "Microphone")_.                                                                                                                                                                                                                                                                                                                                            |
| _Niaj_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Used as an alternative to the eavesdropper Eve in several South Asian nations.[27](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-27)                                                                                                                                                                                                                                                                                                                           |
| _Olivia_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | An _[oracle](https://en.wikipedia.org/wiki/Oracle_machine "Oracle machine")_, who responds to queries from other participants. Olivia often acts as a "[black box](https://en.wikipedia.org/wiki/Black_box "Black box")" with some concealed state or information, or as a [random oracle](https://en.wikipedia.org/wiki/Random_oracle "Random oracle").                                                                                                               |
| _Oscar_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | An _opponent_, similar to Mallory, but not necessarily malicious.                                                                                                                                                                                                                                                                                                                                                                                                      |
| _Peggy_ or _Pat_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | A _prover_, who interacts with the _verifier_ to show that the intended transaction has actually taken place. Peggy is often found in [zero-knowledge proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof "Zero-knowledge proof").                                                                                                                                                                                                                              |
| _Rupert_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | A _repudiator_ who appears for interactions that desire [non-repudiation](https://en.wikipedia.org/wiki/Non-repudiation "Non-repudiation").                                                                                                                                                                                                                                                                                                                            |
| _Sybil_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A _[pseudonymous](https://en.wikipedia.org/wiki/Pseudonym "Pseudonym") attacker_, who usually uses a large number of identities. For example, Sybil may attempt to subvert a [reputation system](https://en.wikipedia.org/wiki/Reputation_system "Reputation system"). See [Sybil attack](https://en.wikipedia.org/wiki/Sybil_attack "Sybil attack").                                                                                                                  |
| _Trent_ or _Ted_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | A _trusted [arbitrator](https://en.wikipedia.org/wiki/Arbitral_tribunal "Arbitral tribunal")_, who acts as a [neutral third party](https://en.wikipedia.org/wiki/Trusted_third_party "Trusted third party").                                                                                                                                                                                                                                                           |
| _Trudy_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | An _intruder_.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| _Victor_[19](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-Schneier1996-19) or _Vanna_[28](https://en.wikipedia.org/wiki/Alice_and_Bob#cite_note-28)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | _A verifier_, who requires proof from the _prover_.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| _Walter_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | A _[warden](https://en.wikipedia.org/wiki/Prison_warden "Prison warden")_, who may guard Alice and Bob.                                                                                                                                                                                                                                                                                                                                                                |
| _Wendy_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A _[whistleblower](https://en.wikipedia.org/wiki/Whistleblower "Whistleblower")_, who is an insider with privileged access capable of divulging information.                                                                                                                                                                                                                                                                                                           |



## AnB Language & Cryptographic Protocol Modeling
> [!links]
> ↗ [Security Protocols Formal Modeling & Verification](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Security%20Protocols%20Formal%20Modeling%20&%20Verification.md)
> - ↗ [Cryptographic Protocols Modeling & Verification](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)
> 
> ↗ [Cryptographic Protocols Modeling & Models of Communication (and Intruder)](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder).md)
> 
> ↗ [OFMC (Open-Source Fixed-Point Model-Checker)](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/🤼%20Model%20Checker/OFMC%20(Open-Source%20Fixed-Point%20Model-Checker).md)


### AnB Syntax
 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 4. 

> [!TIP]
> Modeling Agents and Fixed Key-Infrastructures
> - Normally **variables** (uppercase) like A,B,C,...
> 	- can be played by any **concrete** (lowercase) agent like a,b,c,...,i
> - Special agent: `i` – the intruder
> - Honest agent: constant like `s` for a trusted server
> 	- Cannot be instantiated (especially the intruder), fixed in all protocol runs
> - Given key infrastructures: use functions e.g.
> 	- $sk(A,B)$ the shared key of A and B
> 	- $pw(A,B)$ the password of A at server B
> 	- $pk(A)$ the public key of A
> 		- $inv(K)$ is the private key that belongs to public key K.
> 		- Note `inv` and `exp` are a built-in function (do not declare as a function).
> 	- Give every role the necessary initial knowledge

> [!TIP]
> AnB: Things to Note
> - Identifiers that start with uppercase: variables (E.g., A,B,KAB)
> - Identifiers that start with lowercase: constants and functions (E.g., s,pre,sk)
> - One should declare a type for all identifiers; OFMC can search for type-flaw attacks when using the option -untyped (in which case all types are ignored).
> - The (initial) knowledge of agents MUST NOT contain variables of any type other than Agent.
> 	- For long-term keys, passwords, etc. use functions like sk(A, B).
> - Each variable that does not occur in the initial knowledge is freshly created during the protocol by the first agent who uses it.
> 	- In the NSSK example, A creates NA, s creates KAB, B creates NB.
#### Message Term Algebra
> [!links]
> ↗ [Term Algebra & Free Algebra](../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/👽%20Universal%20Algebra%20(泛代数)/Term%20Algebra%20&%20Free%20Algebra.md)

 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 6.

The syntax of Messages (Msg) in AnB can be described by the following context-free grammar:
$$
\begin{aligned}
\text{Msg} \;::=&\; \text{Constant} \\
&\mid\; \text{Variable} \\
&\mid\; \text{Msg} , \text{Msg} & \text{concatenation}\\
&\mid\; \{\!\mid\; \text{Msg} \;\mid\!\} \; \text{Msg} & \text{symmetric encryption}\\
&\mid\; \{ \text{Msg} \} \; \text{Msg} & \text{asymmetric encryption}\\
&\mid\; \text{inv}(\text{Msg}) & \text{inverse}\\
&\mid\; \text{exp}(\text{Msg}, \text{Msg}) & \text{modular exponentiation}\\
&\mid\; \text{Function}(\text{Msg}) & \text{user-defined functions}\\
&\mid\; ( \text{Msg} )
\end{aligned}
$$

where **Constant** and **Function** are user-chosen identifiers that start with a lower-case letter, and **Variable** with an upper-case letter.

A distinguished constant is the name of the intruder: `i`.


> [!definition]
> **Signature**
> 
> ==A signature $Σ$ is a set of function symbols.==
> Constants are a special case of functions: they take 0 arguments.
> 
> **Table 1:** Standard function symbols for protocol verification.
> 
> | Symbol                            | Arity   | Meaning (informal)                    | Public    |
> | --------------------------------- | ------- | ------------------------------------- | --------- |
> | $i$                               | $0$     | name of the intruder                  | yes       |
> | $\operatorname{inv}(\cdot)$       | $1$     | private key of a given public key     | ==no==        |
> | $\{\cdot\}_{\cdot}$               | $2$     | asymmetric encryption                 | yes       |
> | $\{\mid\cdot\mid\}_{\cdot}$               | $2$     | symmetric encryption                  | yes       |
> | $\langle \cdot,\cdot \rangle$     | $2$     | pairing/concatenation                 | yes       |
> | $\operatorname{exp}(\cdot,\cdot)$ | $2$     | exponentiation modulo fixed prime $p$ | yes       |
> | $a,b,c,\ldots$                    | $0$     | User-defined constants                | User-def. |
> | $f(\cdot)$                        | $\star$ | User-defined function symbol $f$      | User-def. |
> - Call $Σ$ the set of all function symbols and $Σ_p$ the public ones.
> - Public functions can be applied by every agent
> - $\operatorname{inv}$ is not public: the private key of a given public key.

> [!definition]
> **Terms**
> 
> Let $V=\{X,Y,Z,\ldots\}$ be a set of variable symbols.
> ==$\mathcal{T}_{\Sigma}(V)$ is the set of *terms* (over $\Sigma$ and $V$)==, defined as follows:
> - All variables of $V$ are terms.
> - If $f\in\Sigma$ is a function symbol that takes $n$ arguments and if $t_1,\ldots,t_n$ are terms, then also $f(t_1,\ldots,t_n)$ is a term.
#### Examples of AnB Modeling Protocols
↗ [Cryptographic Protocols Modeling & Verification](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)
- Key-Establishment Protocol & Diffie-Hellman Key Exchange
- TLS


### AnB Semantics
> [!links]
> ↗ [Strand Spaces Model](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Symbolic%20(Formal)%20Models/Strand%20Spaces%20Model.md)
> 
> ↗ [Models of Computation & Abstract Machines](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition systems"

So far we have covered the syntax of messages:
- What constitutes a syntactically correct message.

Now we define the semantics of messages:
- What does a message actually mean?
- How can ↗ [OFMC (Open-Source Fixed-Point Model-Checker)](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/🤼%20Model%20Checker/OFMC%20(Open-Source%20Fixed-Point%20Model-Checker).md) make a meaningful analysis of a protocol?
- Like a set of rules of a game.
#### Intruder Models
↗ [Cryptographic Protocols Modeling & Verification](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)
- ↗ [Dolev–Yao (DY) Model & Extended Dolev–Yao Models](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🛀%20Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication%20(and%20Intruder)/Symbolic%20(Formal)%20Models/Dolev–Yao%20(DY)%20Model%20&%20Extended%20Dolev–Yao%20Models.md)
#### Strands Space Semantics
 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 5. From Alice and Bob to Strands – Intuition

> [!example]
> ↗ [Needham–Schroeder Protocol](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/Key%20Management/📌%20Key%20Management%20Algorithms%20&%20Protocols/👥%20Key%20Agreement,%20Transport,%20and%20Exchange%20(one-to-one)/Key%20Transport%20Algorithms%20&%20Protocols/Needham–Schroeder%20Protocol.md)
> 
> NSPK protocol expressed as in AnB language, message sequence chart, and Role /Strand
> 
> ==AnB language:==
> ```AnB
> Protocol : NSPK
> Types : Agent A , B ;
> 		Number NA , NB ;
> 		Function pk , h
> Knowledge : A : B : A , pk ( A ) , inv ( pk ( A )) , B , pk ( B ) , h ;
> 			B , pk ( B ) , inv ( pk ( B )) , A , pk ( A ) , h
> Actions :
> A - > B : { NA , A }( pk ( B ))  # A generates NA
> B - > A : { NA , NB }( pk ( A )) # B generates NB
> A - > B : { NB }( pk ( B ))
> 
> Goals :
> h(NA, NB) secret between A , B
> ```
> 
> ==Message sequence chart:==
> ```tikz
> \begin{document}
> \begin{tikzpicture}[
>   font=\Large,
>   linebase/.style={line width=1.2pt},
>   dot/.style={circle, fill=black, inner sep=0pt, minimum size=7pt},
>   lab/.style={midway, above, inner sep=3pt}
> ]
> % \tikzset{>=stealth'} % bigger arrowheads
> % this is not working in obsidian tikz?
> 
> % X positions
> \def\xA{0}
> \def\xB{10}
> \def\d{0.18}
> 
> % Y positions
> \def\yTop{6.5}
> \def\yOne{4.5}
> \def\yTwo{2.2}
> \def\yThree{-0.1}
> 
> % Participant boxes
> \node[draw, minimum width=12mm, minimum height=12mm] at (\xA,\yTop) {\textit{A}};
> \node[draw, minimum width=12mm, minimum height=12mm] at (\xB,\yTop) {\textit{B}};
> 
> % Dots
> \node[dot] (A1) at (\xA,\yOne) {};
> \node[dot] (A2) at (\xA,\yTwo) {};
> \node[dot] (A3) at (\xA,\yThree) {};
> 
> \node[dot] (B1) at (\xB,\yOne) {};
> \node[dot] (B2) at (\xB,\yTwo) {};
> \node[dot] (B3) at (\xB,\yThree) {};
> 
> % Lifelines A
> \draw[linebase] (\xA-\d,\yTop-0.6) -- (\xA-\d,\yOne);
> \draw[linebase] (\xA+\d,\yTop-0.6) -- (\xA+\d,\yOne);
> \draw[linebase] (\xA,\yOne) -- (\xA,\yTwo);
> \draw[linebase] (\xA-\d,\yTwo) -- (\xA-\d,\yThree);
> \draw[linebase] (\xA+\d,\yTwo) -- (\xA+\d,\yThree);
> 
> % Lifelines B
> \draw[linebase] (\xB,\yTop-0.6) -- (\xB,\yOne);
> \draw[linebase] (\xB-\d,\yOne) -- (\xB-\d,\yTwo);
> \draw[linebase] (\xB+\d,\yOne) -- (\xB+\d,\yTwo);
> \draw[linebase] (\xB,\yTwo) -- (\xB,\yThree);
> 
> % Messages
> \draw[->, linebase] (A1) -- (B1)
>   node[lab] {$\{NA,A\}_{pk(B)}$};
> 
> \draw[<-, linebase] (A2) -- (B2)
>   node[lab] {$\{NA,NB\}_{pk(A)}$};
> 
> \draw[->, linebase] (A3) -- (B3)
>   node[lab] {$\{NB\}_{pk(B)}$};
> 
> \end{tikzpicture}
> \end{document}
> ```
> 
> ==Roles and strands:==
> ```tikz
> \begin{document}
> \begin{tikzpicture}[
>   font=\Large,
>   linebase/.style={line width=1.4pt},
>   dot/.style={circle, fill=black, inner sep=0pt, minimum size=8pt},
>   lab/.style={midway, above, inner sep=3pt}
> ]
> 
> % ===== Geometry =====
> \def\d{0.18} % separation for double lifelines
> \def\yTop{6.5}
> \def\yOne{4.5}
> \def\yTwo{2.2}
> \def\yThree{-0.1}
> 
> % Left half x positions
> \def\xAL{0}
> \def\xBL{8}
> 
> % Right half x positions
> \def\xAR{16}
> \def\xBR{24}
> 
> % ===== LEFT HALF =====
> % A label box (left)
> \node[draw, minimum width=12mm, minimum height=12mm] at (\xAL,\yTop) {\textit{A}};
> 
> % A events (left)
> \node[dot] (AL1) at (\xAL,\yOne) {};
> \node[dot] (AL2) at (\xAL,\yTwo) {};
> \node[dot] (AL3) at (\xAL,\yThree) {};
> 
> % A lifelines (left): double, single, double
> \draw[linebase] (\xAL-\d,\yTop-0.6) -- (\xAL-\d,\yOne);
> \draw[linebase] (\xAL+\d,\yTop-0.6) -- (\xAL+\d,\yOne);
> \draw[linebase] (\xAL,\yOne) -- (\xAL,\yTwo);
> \draw[linebase] (\xAL-\d,\yTwo) -- (\xAL-\d,\yThree);
> \draw[linebase] (\xAL+\d,\yTwo) -- (\xAL+\d,\yThree);
> 
> % Messages (left)
> \draw[->, linebase] (AL1) -- (\xBL,\yOne)
>   node[lab] {$\{NA,A\}_{pk(B)}$};
> \draw[<-, linebase] (AL2) -- (\xBL,\yTwo)
>   node[lab] {$\{NA,NB\}_{pk(A)}$};
> \draw[->, linebase] (AL3) -- (\xBL,\yThree)
>   node[lab] {$\{NB\}_{pk(B)}$};
> 
> % ===== RIGHT HALF =====
> % B label box (right)
> \node[draw, minimum width=12mm, minimum height=12mm] at (\xBR,\yTop) {\textit{B}};
> 
> % B events (right)
> \node[dot] (BR1) at (\xBR,\yOne) {};
> \node[dot] (BR2) at (\xBR,\yTwo) {};
> \node[dot] (BR3) at (\xBR,\yThree) {};
> 
> % B lifelines (right): single, double, single
> \draw[linebase] (\xBR,\yTop-0.6) -- (\xBR,\yOne);
> \draw[linebase] (\xBR-\d,\yOne) -- (\xBR-\d,\yTwo);
> \draw[linebase] (\xBR+\d,\yOne) -- (\xBR+\d,\yTwo);
> \draw[linebase] (\xBR,\yTwo) -- (\xBR,\yThree);
> 
> % Messages (right)
> \draw[->, linebase] (\xAR,\yOne) -- (BR1)
>   node[lab] {$\{NA,A\}_{pk(B)}$};
> \draw[<-, linebase] (\xAR,\yTwo) -- (BR2)
>   node[lab] {$\{NA,NB\}_{pk(A)}$};
> \draw[->, linebase] (\xAR,\yThree) -- (BR3)
>   node[lab] {$\{NB\}_{pk(B)}$};
> 
> \end{tikzpicture}
> \end{document}
> ```
> - For each **Role** of the protocol, a program that sends and receives messages (over possibly insecure network)
> - **Strand**: concrete execution of a role: all variables (here A, B, NA, NB) instantiated with concrete values
> 	- or a prefix thereof (an agent might not finish)
> 
> ==Attacks in strands semantic== (Dolve-Yao model)
> 
> ```tikz
> \begin{document}
> \begin{tikzpicture}[
>   font=\Large,
>   linebase/.style={line width=1.2pt},
>   dot/.style={circle, fill=black, inner sep=0pt, minimum size=8pt},
>   lab/.style={midway, above, inner sep=3pt}
> ]
> 
> % ===== X positions =====
> \def\xA{0}
> \def\xI{8}
> \def\xB{16}
> \def\d{0.18} % separation for double lifelines
> 
> % ===== Y positions =====
> \def\yTop{7.6}  % box baseline-ish
> \def\yAone{6.0}
> \def\yAtwo{0.4}
> 
> \def\yIone{6.0}
> \def\yItwo{4.2}
> \def\yIthree{2.4}
> \def\yIfour{0.4}
> 
> \def\yBone{4.2}
> \def\yBtwo{2.4}
> 
> % ===== Participant boxes =====
> \node[draw, minimum width=10mm, minimum height=10mm] at (\xA,\yTop) {$a$};
> \node[draw, minimum width=10mm, minimum height=10mm] at (\xI,\yTop) {$i$};
> \node[draw, minimum width=10mm, minimum height=10mm] at (\xB,\yTop) {$b$};
> 
> % ===== Event dots =====
> \node[dot] (A1) at (\xA,\yAone) {};
> \node[dot] (A2) at (\xA,\yAtwo) {};
> 
> \node[dot] (I1) at (\xI,\yIone) {};
> \node[dot] (I2) at (\xI,\yItwo) {};
> \node[dot] (I3) at (\xI,\yIthree) {};
> \node[dot] (I4) at (\xI,\yIfour) {};
> 
> \node[dot] (B1) at (\xB,\yBone) {};
> \node[dot] (B2) at (\xB,\yBtwo) {};
> 
> % ===== Lifelines: a =====
> % double from box to first dot
> \draw[linebase] (\xA-\d,\yTop-0.6) -- (\xA-\d,\yAone);
> \draw[linebase] (\xA+\d,\yTop-0.6) -- (\xA+\d,\yAone);
> % single down to bottom dot
> \draw[linebase] (\xA,\yAone) -- (\xA,\yAtwo);
> 
> % ===== Lifelines: i =====
> % single from box to top dot
> \draw[linebase] (\xI,\yTop-0.6) -- (\xI,\yIone);
> % double between I1 and I2
> \draw[linebase] (\xI-\d,\yIone) -- (\xI-\d,\yItwo);
> \draw[linebase] (\xI+\d,\yIone) -- (\xI+\d,\yItwo);
> % single between I2 and I3
> \draw[linebase] (\xI,\yItwo) -- (\xI,\yIthree);
> % double between I3 and I4
> \draw[linebase] (\xI-\d,\yIthree) -- (\xI-\d,\yIfour);
> \draw[linebase] (\xI+\d,\yIthree) -- (\xI+\d,\yIfour);
> 
> % ===== Lifelines: b =====
> % single from box to B1
> \draw[linebase] (\xB,\yTop-0.6) -- (\xB,\yBone);
> % double between B1 and B2
> \draw[linebase] (\xB-\d,\yBone) -- (\xB-\d,\yBtwo);
> \draw[linebase] (\xB+\d,\yBone) -- (\xB+\d,\yBtwo);
> 
> % ===== Messages =====
> % m1: a -> i (blue)
> \draw[->, linebase] (A1) -- (I1)
>   node[lab] {${\color{blue} m_1}$};
> 
> % m2: i -> b
> \draw[->, linebase] (I2) -- (B1)
>   node[lab] {$m_2$};
> 
> % m3: b -> i (blue), leftwards
> \draw[<-, linebase] (I3) -- (B2)
>   node[lab] {${\color{blue} m_3}$};
> 
> % m4: i -> a (red), leftwards at bottom
> \draw[<-, linebase] (A2) -- (I4)
>   node[lab] {${\color{red} m_4}$};
> 
> \end{tikzpicture}
> \end{document}
> ```
> 
> An attack is a strand space where the following conditions are met:
> - Messages sent by honest agents are received by `i`
> - Messages received by honest agents are sent by `i` who can compose the message from the messages he has received so far.
> 	- In the example: $\{m_1\}⊢m_2$ and $\{{\color{blue}m_1, m_3}\}⊢\color{red}m_4\color{black}$.
> - The successful completion violates a goal of the protocol.

 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 8.

Let us start by giving a formal definition of strands:

> [!definition]
> **Definition 9.** A strand is a sequence of steps where each step is either
> - $\operatorname{Snd}(t)$ for sending a message $t$.
> - $\operatorname{Rcv}(t)$ for receiving a message $t$.
> - $s \doteq t$ for checking whether two terms $s$ and $t$ are equal. (We write $\doteq$ to indicate that this is an operation performed during protocol execution.)
> - $\operatorname{Evt}(t)$ generates a special event $t$ (that the intruder cannot see and that we use only for formulating the goals).

For a strand of zero steps we write $0$. 

> [!example]
> The graphical notation of strands is straightforward, e.g. the strand $$ \operatorname{Rcv}(X).\operatorname{Snd}(f(X)).\operatorname{Rcv}(Y).\, X \doteq h(Y) $$ would be represented as
> 
> ```latex
> % \usepackage{amsmath}
> 
> \begin{document}
> \begin{tikzpicture}[
>   font=\Large,
>   linebase/.style={line width=1.2pt},
>   dot/.style={circle, fill=black, inner sep=0pt, minimum size=7pt},
>   lab/.style={midway, above, inner sep=2pt}
> ]
> 
> % Geometry
> \def\xI{0}       % lifeline x
> \def\d{0.18}     % double-line separation
> \def\xR{6.5}     % arrow length to the right
> 
> \def\y1{4.6}     % top dot
> \def\y2{2.8}     % middle dot
> \def\y3{1.0}     % bottom dot
> 
> % Lifeline (double vertical line)
> \draw[linebase] (\xI-\d,\y1+0.2) -- (\xI-\d,\y3-1.4);
> \draw[linebase] (\xI+\d,\y1+0.2) -- (\xI+\d,\y3-1.4);
> 
> % Event dots
> \node[dot] (E1) at (\xI,\y1) {};
> \node[dot] (E2) at (\xI,\y2) {};
> \node[dot] (E3) at (\xI,\y3) {};
> 
> % Messages
> % Top: left-pointing arrow labeled X
> \draw[<-, linebase] (E1) -- (\xR,\y1) node[lab] {$X$};
> 
> % Middle: right-pointing arrow labeled f(X)
> \draw[->, linebase] (E2) -- (\xR,\y2) node[lab] {$f(X)$};
> 
> % Bottom: left-pointing arrow labeled Y
> \draw[<-, linebase] (E3) -- (\xR,\y3) node[lab] {$Y$};
> 
> % Condition box
> \node[draw, inner sep=6pt, anchor=north] at (\xI,\y3-1.0) {$X = h(Y)$};
> 
> \end{tikzpicture}
> \end{document}
> ```

Let $S=S_1.\operatorname{Rcv}(t).S_2$ be a strand, and let $X$ be a variable that occurs in $t$ but not in $S_1$. Then we say $X$ is bound in $S$ by the receive step $\operatorname{Rcv}(t)$. We say that all variables that are not bound by such a receive step are free variables of $S$. We say that a strand is closed if it does not have free variables.
#### The Algebraic AnB Semantics
> 📄 Almousa, Omar, Sebastian Mödersheim, and Luca Viganò. "Alice and Bob: Reconciling formal models and implementation." Programming Languages with Applications to Biology and Security: Essays Dedicated to Pierpaolo Degano on the Occasion of His 65th Birthday. Cham: Springer International Publishing, 2015. 66-85.

 >https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf (March 2020)
 >Protocol Security Verification Tutorial
 >Sebastian M ̈odersheim,
 >Chapter 10. The Algebraic AnB Semantics
##### Message model



## Ref
