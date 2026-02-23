# Cryptographic Protocols Modeling & Models of Communication (and Intruder)

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Abstraction](../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [Models of Computation & Abstract Machines](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)

↗ [Cryptographic Protocols Modeling & Verification](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Security%20Protocols%20Formal%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification/Cryptographic%20Protocols%20Modeling%20&%20Verification.md)

↗ [AnB (Alice and Bob) Notation & AnBx Langauges](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/AnB%20(Alice%20and%20Bob)%20Notation%20&%20AnBx%20Langauges.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Models_of_communication

**Models of communication** simplify or represent the process of [communication](https://en.wikipedia.org/wiki/Communication "Communication"). Most communication [models](https://en.wikipedia.org/wiki/Model "Model") try to describe both [verbal](https://en.wikipedia.org/wiki/Verbal_communication "Verbal communication") and [non-verbal communication](https://en.wikipedia.org/wiki/Non-verbal_communication "Non-verbal communication") and often understand it as an exchange of [messages](https://en.wikipedia.org/wiki/Message "Message"). Their function is to give a compact overview of the complex process of communication. This helps researchers formulate [hypotheses](https://en.wikipedia.org/wiki/Hypothesis "Hypothesis"), apply communication-related concepts to real-world cases, and test [predictions](https://en.wikipedia.org/wiki/Prediction "Prediction"). Despite their usefulness, many models are criticized based on the claim that they are too simple because they leave out essential aspects. The components and their interactions are usually presented in the form of a diagram. Some basic components and interactions reappear in many of the models. They include the idea that a sender [encodes](https://en.wikipedia.org/wiki/Code "Code") information in the form of a message and sends it to a [receiver](https://en.wikipedia.org/wiki/Receiver_\(information_theory\) "Receiver (information theory)") through a [channel](https://en.wikipedia.org/wiki/Communication_channel "Communication channel"). The receiver needs to decode the message to understand the initial idea and provides some form of [feedback](https://en.wikipedia.org/wiki/Feedback "Feedback"). In both cases, [noise](https://en.wikipedia.org/wiki/Communication_noise "Communication noise") may interfere and distort the message.

Models of communication are classified depending on their intended applications and on how they conceptualize the process. General models apply to all forms of communication while specialized models restrict themselves to specific forms, like [mass communication](https://en.wikipedia.org/wiki/Mass_communication "Mass communication"). Linear transmission models understand communication as a one-way process in which a sender transmits an idea to a receiver. Interaction models include a feedback loop through which the receiver responds after getting the message. Transaction models see sending and responding as simultaneous activities. They hold that [meaning](https://en.wikipedia.org/wiki/Meaning_\(philosophy\) "Meaning (philosophy)") is created in this process and does not exist prior to it. Constitutive and [constructionist](https://en.wikipedia.org/wiki/Social_constructionism "Social constructionism") models stress that communication is a basic phenomenon responsible for how people understand and [experience](https://en.wikipedia.org/wiki/Experience "Experience") [reality](https://en.wikipedia.org/wiki/Reality "Reality"). [Interpersonal](https://en.wikipedia.org/wiki/Interpersonal_communication "Interpersonal communication") models describe communicative exchanges with other people. They contrast with [intrapersonal](https://en.wikipedia.org/wiki/Intrapersonal_communication "Intrapersonal communication") models, which discuss communication with oneself. Models of non-human communication describe communication among other species. Further types include encoding-decoding models, hypodermic models, and relational models.

The problem of communication was already discussed in [Ancient Greece](https://en.wikipedia.org/wiki/Ancient_Greece "Ancient Greece") but the field of [communication studies](https://en.wikipedia.org/wiki/Communication_studies "Communication studies") only developed into a separate research discipline in the middle of the 20th century. All early models were linear transmission models, like [Lasswell's model](https://en.wikipedia.org/wiki/Lasswell%27s_model "Lasswell's model"), the [Shannon–Weaver model](https://en.wikipedia.org/wiki/Shannon%E2%80%93Weaver_model "Shannon–Weaver model"), Gerbner's model, and [Berlo's model](https://en.wikipedia.org/wiki/Berlo%27s_model "Berlo's model"). For many purposes, they were later replaced by interaction models, like [Schramm's model](https://en.wikipedia.org/wiki/Schramm%27s_model "Schramm's model"). Beginning in the 1970s, transactional models of communication, like [Barnlund's model](https://en.wikipedia.org/wiki/Barnlund%27s_model "Barnlund's model"), were proposed to overcome the limitations of interaction models. They constitute the origin of further developments in the form of constitutive models.


### Why Models of Communication & Cryptographic Protocols
> 🤖 GPT-5.2
> https://chatgpt.com/share/698a3655-f540-800f-939f-c8ce2c90027f

One-sentence summary:
Cryptographic models are needed to precisely define security, reason about powerful attackers, find subtle protocol flaws, enable proofs and automation, and make assumptions explicit—something testing and intuition can never guarantee.

---
We need cryptographic models because **security is not something we can “test” exhaustively**—it must be **reasoned about**. Models give us a _precise way to define attackers, assumptions, and guarantees_, so we can prove (or disprove) security claims.

Here’s the intuition, then the formal reasons.


Intuition: why models are necessary -- Saying “this protocol is secure” without a model is meaningless.
- Secure **against whom**?  
- Secure **under what assumptions**?  
- Secure **in which environment**?
Cryptographic models answer these questions.


Formal reasons:

==To define _what security means_==
Security is **not absolute**.
Examples:
- “The message is secret”
- “The protocol authenticates the server”
- “Keys cannot be stolen”
These statements are vague unless we specify:
- What the attacker can do
- What it means to “break” security

Models provide formal definitions
For example:
- In the **Dolev–Yao model**, secrecy means:
	- The attacker cannot derive the message term.
- In the **computational model**, secrecy means:
	- No PPT adversary can distinguish the message from random.
Without a model, there is **no precise notion of security**.


==To reason about extremely powerful attackers==
Real attackers:
- Control networks
- Replay messages
- Run protocols concurrently
- Adapt based on observations
We cannot enumerate all possible attacks.

Models let us assume a _maximal attacker_
- Dolev–Yao: attacker controls the entire network
- Computational: attacker is any PPT algorithm

If a protocol is secure against these attackers, it is secure against **weaker real-world attackers**.


==To find subtle protocol flaws _before deployment_==
Many famous protocol failures were **logic errors**, not broken crypto:
- Needham–Schroeder (authentication flaw)
- TLS renegotiation attack
- Kerberos replay issues
These flaws:
- Passed testing
- Used strong cryptography
- Failed under formal analysis

Models expose:
- Replay attacks
- Man-in-the-middle attacks
- Confusion of identities
- Key reuse mistakes
Testing alone cannot catch these.


==To enable formal proofs and automation==
Models make security **machine-checkable**.
Thanks to models, we can:
- Automatically verify protocols
- Get counterexamples (attacks)
- Prove properties hold for _all executions_
Tools rely on models:
- ProVerif → symbolic (Dolev–Yao–style)
- Tamarin → symbolic + algebraic
- CryptoVerif → computational
Without models, **automated verification is impossible**.


==To separate _protocol logic_ from _cryptographic strength_==
Models help answer different questions:
Symbolic models (e.g., Dolev–Yao)
- “Is the protocol logic correct _assuming crypto works_?”
Computational models
- “Does this cryptographic construction resist feasible attacks?”

This separation is crucial:
- A protocol can be **logically broken** even with perfect crypto
- A cryptosystem can be **cryptographically broken** even if protocol logic is sound


==To make assumptions explicit==
Every security claim depends on assumptions.
Models force you to state them clearly:
- Is encryption probabilistic?
- Are keys long-term or ephemeral?
- Can sessions run concurrently?
- Are hashes ideal?
This prevents **hidden assumptions**, which are a major cause of insecurity.


==To reason about composition and real-world use==
Protocols rarely run in isolation.
Models like **Universal Composability (UC)** ensure:
- Security still holds when protocols interact
- Security survives concurrent executions
- Components can be safely reused
Without models:
- A “secure” protocol can become insecure when combined with others


==Why multiple models exist (not just one)==
No single model captures everything:

| Model          | Strength                       | Weakness                  |
| -------------- | ------------------------------ | ------------------------- |
| Dolev–Yao      | Finds logic flaws, automatable | Ignores crypto weaknesses |
| Computational  | Realistic crypto               | Hard to automate          |
| UC             | Strong composability           | Very complex              |
| Info-theoretic | Absolute guarantees            | Often impractical         |

We need **different models for different questions**.



## Types of Models of Communication & Cryptographic Protocols
> 🤖 GPT-5.2
> https://chatgpt.com/share/698a3655-f540-800f-939f-c8ce2c90027f

| Model Type     | Example         | Cryptography Assumption | Attacker                     |
| -------------- | --------------- | ----------------------- | ---------------------------- |
| Symbolic       | Dolev–Yao       | Perfect                 | All-powerful (except crypto) |
| Symbolic       | Strand Spaces   | Perfect                 | Network attacker             |
| Computational  | Bellare–Rogaway | Real crypto             | PPT                          |
| Computational  | UC              | Real crypto             | PPT, concurrent              |
| Hybrid         | Comp. Sound DY  | Real crypto             | PPT                          |
| Info-theoretic | Shannon         | Perfect secrecy         | Unbounded                    |



## Ref
