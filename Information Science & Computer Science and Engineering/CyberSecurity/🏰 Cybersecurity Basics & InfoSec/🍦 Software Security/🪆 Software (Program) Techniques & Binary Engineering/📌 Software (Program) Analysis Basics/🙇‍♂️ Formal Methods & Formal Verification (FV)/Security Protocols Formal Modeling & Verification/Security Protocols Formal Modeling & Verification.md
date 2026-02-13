# Security Protocols Formal Modeling & Verification

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Abstraction](../../../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [(Formal) Model Checking](../(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
↗ [AnB (Alice and Bob) Notation & AnBx Langauges](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/AnB%20(Alice%20and%20Bob)%20Notation%20&%20AnBx%20Langauges.md)

↗ [Mathematical Logic (Foundations of Mathematics)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
↗ [Formal System, Formal Logics, and Its Semantics](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
↗ [Proof Theory](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Theory.md)

↗ [Mechanized (Formal) Reasoning & Automated Reasoning](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning.md)

↗ [Cryptology & Secure Communication](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
- ↗ [Cryptography](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Cryptography.md)
- ↗ [Cryptology Applications](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20Applications.md)
- ↗ [Cryptographic Attacks & Rubber-Hose Cryptanalysis](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤮%20Cryptanalysis/Cryptographic%20Attacks%20&%20Rubber-Hose%20Cryptanalysis.md)
- ↗ [Cryptographic Protocols Modeling & Models of Communication](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication.md) ⭐

↗ [Risk Countermeasures & Security Control](../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Risk%20Countermeasures%20&%20Security%20Control.md)
- ↗ [Identity & Access Management (IAM)](../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Identity%20&%20Access%20Management%20(IAM).md)
	- ↗ [Access Control (访问控制)](../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)
	- ↗ [Access Control Models](../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/📌%20Access%20Control%20Models/Access%20Control%20Models.md)

↗ [Static Code Analysis Tools (SCAT)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md) "model checker"
- ↗ [OFMC (Open-Source Fixed-Point Model-Checker)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/🤼%20Model%20Checker/OFMC%20(Open-Source%20Fixed-Point%20Model-Checker).md)

↗ [Formal Verifications & Constraint Solvers (Proof Assistants)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
- ↗ [Automated & Generic Theorem Provers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)
	- ↗ [Isabelle & Isar Language](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Isabelle%20&%20Isar%20Language.md)
	- ↗ [HOL Interactive Theorem Prover](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/HOL%20Interactive%20Theorem%20Prover.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)

↗ [Security Programming & Security Product Development](../../../../../Security%20Programming%20&%20Security%20Product%20Development/Security%20Programming%20&%20Security%20Product%20Development.md)

↗ [Zero-Knowledge Proof (ZKP)](../../../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Human-Oriented%20Authentication%20(鉴别对象为人)/Zero-Knowledge%20Proof%20(ZKP)/Zero-Knowledge%20Proof%20(ZKP).md)


### Learning Resources
https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf
https://www.imm.dtu.dk/~samo/OFMC-tutorial.pdf#
Protocol Security Verification Tutorial
Sebastian M ̈odersheim,
DTU Compute, samo@dtu.dkSpring 2018
- This tutorial gives an introduction to modeling security protocols and the methods for automated verification that is hopefully easier accessible than research papers. For concreteness it uses OFMC, an automated protocol verification tool written by the author, and thus this document also serves as a user manual for OFMC. Several other methods and tools are briefly discussed in order to give a broader perspective.
- OFMC [Manual](https://paolo.science/anbxtutorial/tools/ofmc-manual.pdf) and [Tutorial](https://paolo.science/anbxtutorial/tools/OFMC-tutorial.pdf) (S.Mödersheim)

https://archiv.infsec.ethz.ch/education/as09/fmsec.html
Formal Methods for Information Security
[263-4600-00L](http://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheitPre.do?lerneinheitId=63189&semkez=2009W&lang=en) (2V + 1U) Autumn Semester 2009
**Lecturers and Tutors:** [Sebastian Mödersheim](http://www.zurich.ibm.com/~smo/) and [Christoph Sprenger](https://archiv.infsec.ethz.ch/people/csprenge.html)
- The lecture treats formal and cryptographic methods for the modelling and analysis of security-critical systems. The first and main part of the lecture will concentrate on cryptographic protocols. Cryptographic protocols such as SSL/TLS, SSH, Kerberos and IPSec, form the basis for secure communication and business processes. Numerous attacks on published protocols, such as public-key Kerberos, show that the design of these protocols is extremely error-prone. A rigorous analysis of these protocols is therefore indispensable. Besides an overview of existing analysis methods and tools the lecture will convey the theoretical basis and functioning of some selected methods and tools. The tutorials offer the possibility of applying some tools on concrete protocols. The second part of the lecture will be concerned with formal methods in other parts of information security such as access control.


### Other Resources
https://arxiv.org/pdf/1101.1815
Approaches to Formal Verification of Security Protocols
Suvansh Lal, Mohit Jain, Vikrant Chaplot
Dhirubhai Ambani Institute of Information and Communication Technology
- To achieve our objective we introduce four well known verification approaches – 1) the **sequential programming** approach; 2 )the **logic programming** approach; 3) the **strand spaces** approach and the 4) **belief based** approach – falling under the broader domains of **model checking** and **logical inference**. Each of the above mention methodologies are applied to formally verify the Needham Schroeder Public Key protocol [3] for Lowe’s attack[4]. In the process of doing so, we compare these approaches for their specification ease, competence in determining complex security flaws; and computational costs. We also make an explicit mention of the advantages and limitations of using these approaches in verifying similar systems.



## Intro
↗ [Cryptology & Secure Communication](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
- ↗ [Cryptography](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Cryptography.md)
- ↗ [Cryptographic Protocols Modeling & Models of Communication](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication.md)
	- ↗ [Dolev–Yao (DY) Model & Extended Dolev–Yao Models](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptographic%20Protocols%20Modeling%20&%20Models%20of%20Communication/Symbolic%20(Formal)%20Models/Dolev–Yao%20(DY)%20Model%20&%20Extended%20Dolev–Yao%20Models.md)

↗ [Formal Verification & Analysis Programming Languages](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/Formal%20Verification%20&%20Analysis%20Programming%20Languages.md)
- ↗ [AnB (Alice and Bob) Notation & AnBx Langauges](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/AnB%20(Alice%20and%20Bob)%20Notation%20&%20AnBx%20Langauges.md)



## Ref
