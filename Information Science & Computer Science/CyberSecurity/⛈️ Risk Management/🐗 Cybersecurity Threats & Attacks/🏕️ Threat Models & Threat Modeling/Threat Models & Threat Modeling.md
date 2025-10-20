# Threat Models & Threat Modeling

[TOC]



## Res
### Related Topics
↗ [SDLC (Software Development Life Circle) & SDLC Models](../../../../Software%20Engineering/Software%20Development%20Pattern/🔄%20SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models/SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models.md)

↗ [Attack Simulation - Red, Blue, Purple, White](../../🐺%20Risk%20Countermeasures%20&%20Security%20Control/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White.md)
↗ [Network Penetration (Pen-testing)](../../../Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Network%20Penetration%20(Pen-testing).md)


### Threat Modeling Frameworks
[Microsoft Baseline Security Analyzer](https://en.wikipedia.org/wiki/Microsoft_Baseline_Security_Analyzer)
[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
[IBM Security Redbooks](https://www.redbooks.ibm.com/domains/security)
[CIS Benchmarks List](https://www.cisecurity.org/cis-benchmarks)


### Other Resources
https://www.threatmodelingmanifesto.org/
threat modeling manifesto

https://owasp.org/www-project-threat-model/
This is a documentation project. We provide information on threat modeling techniques for applications of all types, with a focus on current and emerging techniques.

Most threat model techniques answer one or more of the following questions:
- What are we working on?
- What can go wrong?
- What are we going to do about that?
- Did we do a good enough job?

This project will gather techniques, methodologies, tools and examples. We will group these using the four questions. This will allow people to easily find advice they can use.

https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
Threat Modeling - OWASP cheat sheet series
- Methods and Techniques
	- An alphabetical list of techniques:
	- [LINDDUN](https://linddun.org/)
	- [PASTA](https://cdn2.hubspot.net/hubfs/4598121/Content%20PDFs/VerSprite-PASTA-Threat-Modeling-Process-for-Attack-Simulation-Threat-Analysis.pdf)
	- [STRIDE](https://learn.microsoft.com/en-us/previous-versions/commerce-server/ee823878\(v=cs.20\)?redirectedfrom=MSDN)
	- [OCTAVE](https://insights.sei.cmu.edu/library/introduction-to-the-octave-approach/)
	- [VAST](https://go.threatmodeler.com/vast-methodology-data-sheet)
- Tools
	- [Cairis](https://github.com/cairis-platform/cairis)
	- [draw.io](https://draw.io/) - see also [threat modeling libraries](https://github.com/michenriksen/drawio-threatmodeling) for the tool
	- [IriusRisk](https://www.iriusrisk.com/) - offers a free Community Edition
	- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)
	- [OWASP's Threat Dragon](https://github.com/OWASP/threat-dragon)
	- [OWASP's pytm](https://owasp.org/www-project-pytm/)
	- [TaaC-AI](https://github.com/yevh/TaaC-AI) - AI-driven Threat modeling-as-a-Code (TaaC)
	- Threat Composer - [Demo](https://awslabs.github.io/threat-composer), [Repository](https://github.com/awslabs/threat-composer/)
- General Reference
	- [Awesome Threat Modeling](https://github.com/hysnsec/awesome-threat-modelling) - resource list
	- [Tactical Threat Modeling](https://safecode.org/wp-content/uploads/2017/05/SAFECode_TM_Whitepaper.pdf)
	- [Threat Modeling: A Summary of Available Methods](https://insights.sei.cmu.edu/library/threat-modeling-a-summary-of-available-methods/)
	- Threat modeling for builders, free online training available on [AWS SkillBuilder](https://explore.skillbuilder.aws/learn/course/external/view/elearning/13274/threat-modeling-for-builders-workshop), and [AWS Workshop Studio](https://catalog.workshops.aws/threatmodel/en-US)
	- [Threat Modeling Handbook](https://security.cms.gov/policy-guidance/threat-modeling-handbook)
	- [Threat Modeling Process](https://owasp.org/www-community/Threat_Modeling_Process)
	- [The Ultimate Beginner's Guide to Threat Modeling](https://shostack.org/resources/threat-modeling)

[Threat Modeling Process | OWASP](https://owasp.org/www-community/Threat_Modeling_Process)
- [Introduction](https://owasp.org/www-community/Threat_Modeling_Process#introduction)
    - [Step 1: Scope your work](https://owasp.org/www-community/Threat_Modeling_Process#step-1-scope-your-work)
    - [Step 2: Determine Threats](https://owasp.org/www-community/Threat_Modeling_Process#step-2-determine-threats)
    - [Step 3: Determine Countermeasures and Mitigation](https://owasp.org/www-community/Threat_Modeling_Process#step-3-determine-countermeasures-and-mitigation)
    - [Step 4: Assess your work](https://owasp.org/www-community/Threat_Modeling_Process#step-4-assess-your-work)
- [Scope your work (Samples)](https://owasp.org/www-community/Threat_Modeling_Process#sample-scope-the-work)
    - [Threat Model Information](https://owasp.org/www-community/Threat_Modeling_Process#threat-model-information-sample)
    - [External Dependencies](https://owasp.org/www-community/Threat_Modeling_Process#external-dependencies-sample)
    - [Entry Points](https://owasp.org/www-community/Threat_Modeling_Process#entry-points)
    - [Exit Points](https://owasp.org/www-community/Threat_Modeling_Process#exit-points)
    - [Assets](https://owasp.org/www-community/Threat_Modeling_Process#assets)
    - [Trust Levels](https://owasp.org/www-community/Threat_Modeling_Process#trust-levels)
    - [Data Flow Diagrams](https://owasp.org/www-community/Threat_Modeling_Process#data-flow-diagrams)
    - [Example Diagrams](https://owasp.org/www-community/Threat_Modeling_Process#example-diagrams)
    - [Determine Threats (samples)](https://owasp.org/www-community/Threat_Modeling_Process#determine-threats-sample)
        - [STRIDE](https://owasp.org/www-community/Threat_Modeling_Process#stride)
            - [STRIDE Threat List (sample)](https://owasp.org/www-community/Threat_Modeling_Process#stride-threat-list)
                - [Threat Analysis](https://owasp.org/www-community/Threat_Modeling_Process#threat-analysis)
                - [Ranking of Threats](https://owasp.org/www-community/Threat_Modeling_Process#ranking-of-threats)
                - [Qualitative Risk Model](https://owasp.org/www-community/Threat_Modeling_Process#qualitative-risk-model)
    - [Determine Countermeasures and Mitigation (Sample)](https://owasp.org/www-community/Threat_Modeling_Process#determine-countermeasures-and-mitigation)
        - [STRIDE Threat & Mitigation Techniques](https://owasp.org/www-community/Threat_Modeling_Process#stride-threat--mitigation-techniques)
- [Complementing Code Review](https://owasp.org/www-community/Threat_Modeling_Process#complementing-code-review)



## Intro
> 🔗 https://www.threatmodelingmanifesto.org/ 
> 🔗 https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html#overview

Threat modeling is analyzing representations of a system to highlight concerns about security and privacy characteristics.

At the highest levels, when we threat model, we ask four key questions:
1. What are we working on? (system modeling)
2. What can go wrong? (threats identification)
3. What are we going to do about it? (countermeasures /response and mitigation)
4. Did we do a good enough job? (review and validation) 



## Tree Modeling
### Attack Tree



### Attack-Defense Tree (ADTree)
> 🔗 https://satoss.uni.lu/members/barbara/papers/adt.pdf (Foundations of Attack–Defense Trees, Barbara Kordy, Sjouke Mauw, Saša Radomirović, Patrick Schweitzer)

...
We therefore introduce and formalize **attack–defense trees (ADTrees)** as a graphical representation of possible measures an attacker might take in order to attack a system and the defenses that a defender can employ to protect the system. Our formalization of ADTrees extends attack trees as defined in [3], in two ways. It introduces defenses as described above and it generalizes the interpretations and semantics of attack trees based on [3]. Consequently, our formalism provides a single framework covering the attributes and semantics of attack trees used in [4–6], including the notion of defense trees from [7, 8].
...

> 3. Mauw, S., Oostdijk, M.: Foundations of Attack Trees. In Won, D., Kim, S., eds.: ICISC. Volume 3935 of LNCS., Springer (2005) 186–198 
> 4. Willemson, J., Jürgenson, A.: Serial Model for Attack Tree Computations. In Lee, D., Hong, S., eds.: Proc. ICISC 2009. Volume 5984 of LNCS., Springer (2010) 118–128 
> 5. Edge, K.S., Dalton II, G.C., Raines, R.A., Mills, R.F.: Using Attack and Protection Trees to Analyze Threats and Defenses to Homeland Security. In: Military Communications Conference, 2006. MILCOM 2006. IEEE. (2006) 1–7 
> 6. Saini, V., Duan, Q., Paruchuri, V.: Threat Modeling Using Attack Trees. Journal of Computing in Small Colleges 23(4) (2008) 124–131 
> 7. Bistarelli, S., Fioravanti, F., Peretti, P.: Defense Trees for Economic Evaluation of Security Investments. In: ARES, IEEE Computer Society (2006) 416–423 
> 8. Bistarelli, S., Dall’Aglio, M., Peretti, P.: Strategic Games on Defense Trees. In Dimitrakos, T., Martinelli, F., Ryan, P.Y.A., Schneider, S.A., eds.: Formal Aspects in Security and Trust. Volume 4691 of LNCS., Springer (2006) 1–15 9. Moore, A.P., Ellison, R.J., Linger, R.C.: Attack Modeling for Informat

![](../../../../../Assets/Pics/Screenshot%202025-04-14%20at%2020.19.05.png)



## Graph Modeling
### Attack Graph



## Ref
