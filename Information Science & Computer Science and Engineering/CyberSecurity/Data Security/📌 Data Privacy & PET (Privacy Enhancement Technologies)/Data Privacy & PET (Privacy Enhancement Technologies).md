# Data Privacy & PET (Privacy Enhancement Technologies)

[TOC]



## Res
### Related Topics
↗ [Cryptology & Secure Communication](../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
- ↗ [Zero-Knowledge Proof (ZKP)](../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/Security%20Protocols%20&%20Cryptographic%20Verification/🍭%20Zero-Knowledge%20Proof%20%28ZKP%29/Zero-Knowledge%20Proof%20%28ZKP%29.md)
- ↗ [Secure Multi-Party Computation (SMPC)](../../🚬%20Cryptology%20&%20Secure%20Communication/Secure%20Multi-Party%20Computation%20%28SMPC%29/Secure%20Multi-Party%20Computation%20%28SMPC%29.md)
- ↗ [Homomorphic Encryption (HE)](../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Homomorphic%20Encryption%20%28HE%29/Homomorphic%20Encryption%20%28HE%29.md)
- Private Set Intersection

↗ [Trusted Computing (TC)](../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Trusted%20Computing%20%28TC%29/Trusted%20Computing%20%28TC%29.md)
↗ [TPM & TSS](../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Trusted%20Computing%20%28TC%29/TPM%20&%20TSS/TPM%20&%20TSS.md)

↗ [Zero Trust Security](../../⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Zero%20Trust%20Security/Zero%20Trust%20Security.md)

↗ [Information Flow & Information Flow Control (IFC)](../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29/Information%20Flow%20&%20Information%20Flow%20Control%20%28IFC%29.md)

↗ [Anonymous & Private Networks](../../Network%20%28&%20Communication%29%20Security/Anonymous%20&%20Private%20Networks/Anonymous%20&%20Private%20Networks.md)
↗ [Onion Network & Tor Projects](../../Network%20%28&%20Communication%29%20Security/Anonymous%20&%20Private%20Networks/👺%20Anonymous%20Network%20&%20Host/Onion%20Network%20&%20Tor%20Projects.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Privacy-enhancing_technologies

**Privacy-enhancing technologies** (**PET**) are technologies that embody fundamental data protection principles by minimizing personal data use, maximizing data security, and empowering individuals. PETs allow [online users](https://en.wikipedia.org/wiki/User_\(computing\) "User (computing)") to protect the [privacy](https://en.wikipedia.org/wiki/Data_privacy "Data privacy") of their [personally identifiable information](https://en.wikipedia.org/wiki/Personally_identifiable_information "Personally identifiable information") (PII), which is often provided to and handled by services or applications. PETs use techniques to minimize an information system's possession of [personal data](https://en.wikipedia.org/wiki/Personal_data "Personal data") without losing functionality. Generally speaking, PETs can be categorized as either hard or soft privacy technologies.


> 🤖 GPT 6.0

A useful way to think about **Privacy-Enhancing Technologies (PETs)** is as a collection of techniques that protect data **at different stages: collection, storage, computation, sharing, and communication**.

A practical taxonomy looks like this:

|Branch of PET|Main idea|Common topics / techniques|
|---|---|---|
|**1. Data anonymization & de-identification**|Remove or transform identifying information|Anonymization, pseudonymization, masking, generalization, **k-anonymity**, l-diversity, t-closeness|
|**2. Statistical privacy**|Allow useful statistics while limiting disclosure about individuals|**Differential Privacy (DP)**, randomized response, noise addition, privacy budgets, local vs. central DP|
|**3. Privacy-preserving cryptography**|Compute or exchange information without revealing the underlying data|**Homomorphic Encryption (HE)**, Secure Multi-Party Computation (MPC), Private Set Intersection (PSI), Oblivious Transfer|
|**4. Zero-knowledge techniques**|Prove something is true without revealing the secret information itself|**Zero-Knowledge Proofs (ZKP)**, zk-SNARKs, zk-STARKs|
|**5. Privacy-preserving machine learning**|Train/use ML models while reducing exposure of sensitive data|**Federated Learning**, Differentially Private ML, Secure Aggregation, encrypted inference|
|**6. Trusted hardware / confidential computing**|Protect data while it is being processed|**Trusted Execution Environments (TEEs)**, secure enclaves, confidential computing|
|**7. Synthetic data**|Generate artificial data that preserves useful statistical properties|Synthetic datasets, generative models, DP synthetic data, privacy/utility evaluation|
|**8. Communication & network privacy**|Hide who is communicating, what is transmitted, or metadata|Onion routing, **Tor**, mix networks, anonymous communication, encrypted messaging|
|**9. Privacy-preserving identity**|Prove identity or attributes without unnecessarily revealing personal information|Anonymous credentials, selective disclosure, decentralized identity, attribute-based credentials|



## Ref
