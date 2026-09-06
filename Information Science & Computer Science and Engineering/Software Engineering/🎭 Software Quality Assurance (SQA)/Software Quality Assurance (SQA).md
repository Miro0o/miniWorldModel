# Software Quality Assurance (SQA)

[TOC]



## Res
### Related Topics
↗ [ICT System Reliability (Correctness) & Verification](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/ICT%20System%20Reliability%20%28Correctness%29%20&%20Verification.md)
↗ [Hardware Quality Assurance (HQA)](../../Computer%20Engineering,%20Embedded%20&%20IoT/Hardware%20Quality%20Assurance%20%28HQA%29/Hardware%20Quality%20Assurance%20%28HQA%29.md)

↗ [SDLC (Software Development Life Circle) & SDLC Models](../Software%20Development%20Norms%20&%20Patterns/🔄%20SDLC%20%28Software%20Development%20Life%20Circle%29%20&%20SDLC%20Models/SDLC%20%28Software%20Development%20Life%20Circle%29%20&%20SDLC%20Models.md)
↗ [SDL (Secure Development Lifecycle)](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/Software%20Supply%20Chains%20Security/SDL%20%28Secure%20Development%20Lifecycle%29.md)
↗ [SRLC (Software Release Life Circle) & Versioning](../Software%20Development%20Norms%20&%20Patterns/🔄%20SDLC%20%28Software%20Development%20Life%20Circle%29%20&%20SDLC%20Models/SRLC%20%28Software%20Release%20Life%20Circle%29%20&%20Versioning.md)

↗ [Vulnerabilities /Vulnerabilities 🆚 Bugs (Incorrectness) 🆚 Feature ?](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🦟%20Vulnerabilities/Vulnerabilities.md#Vulnerabilities%20🆚%20Bugs%20(Incorrectness)%20🆚%20Feature%20?)
↗ [Software Testing / Error, Faults and Failures](🧪%20Software%20Testing/Software%20Testing.md#Error,%20Faults%20and%20Failures)

↗ [Software (Program) Techniques & Binary Engineering](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering.md)
↗ [Program Analysis Basics](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)

↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29.md)
↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Software_quality_assurance

Software quality assurance (SQA) is a means and practice of monitoring all software engineering processes, methods, and work products to ensure compliance against defined standards.[1] It may include ensuring conformance to standards or models, such as [ISO/IEC 9126](https://en.wikipedia.org/wiki/ISO/IEC_9126 "ISO/IEC 9126") (now superseded by ISO 25010), [SPICE](https://en.wikipedia.org/wiki/Software_Process_Improvement_and_Capability_dEtermination "Software Process Improvement and Capability dEtermination") or [CMMI](https://en.wikipedia.org/wiki/CMMI "CMMI").

It includes standards and procedures that managers, administrators or developers may use to review and audit software products and activities to verify that the software meets quality criteria which link to standards.

SQA encompasses the entire software development process, including requirements engineering, software design, coding, code reviews, source code control, software configuration management, testing, release management and software integration. It is organized into goals, commitments, abilities, activities, measurements, verification and validation.

> 🔗 https://en.wikipedia.org/wiki/Software_testing#Measures

Quality measures include such topics as [correctness](https://en.wikipedia.org/wiki/Correctness_(computer_science)), completeness, [security](https://en.wikipedia.org/wiki/Computer_security_audit) and [ISO/IEC 9126](https://en.wikipedia.org/wiki/ISO/IEC_9126) requirements such as capability, [reliability](https://en.wikipedia.org/wiki/Reliability_engineering), [efficiency](https://en.wikipedia.org/wiki/Algorithmic_efficiency), [portability](https://en.wikipedia.org/wiki/Porting), [maintainability](https://en.wikipedia.org/wiki/Maintainability), compatibility, and [usability](https://en.wikipedia.org/wiki/Usability).



## 1️⃣ Software Correctness and Completeness &  Verification and Validation
> This is about finding "bugs"
> ↗ [Vulnerabilities /Vulnerabilities 🆚 Bugs (Incorrectness) 🆚 Feature ?](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🦟%20Vulnerabilities/Vulnerabilities.md#Vulnerabilities%20🆚%20Bugs%20(Incorrectness)%20🆚%20Feature%20?)
> ↗ [Software Testing / Error, Faults and Failures](🧪%20Software%20Testing/Software%20Testing.md#Error,%20Faults%20and%20Failures)

↗ [ICT System Reliability (Correctness) & Verification](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/ICT%20System%20Reliability%20%28Correctness%29%20&%20Verification.md)
- ↗ [ICT System Reliability (Correctness) & Verification /Verification 🆚 Validation](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/ICT%20System%20Reliability%20%28Correctness%29%20&%20Verification.md#Verification%20🆚%20Validation)

↗ [Security Audit & Security Audit Trail](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md)
- ↗ [Code Review](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)
↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29.md)
- ↗ [(Formal) Model Checking](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🧳%20%28Formal%29%20Model%20Checking/%28Formal%29%20Model%20Checking.md)

↗ [Software Testing](🧪%20Software%20Testing/Software%20Testing.md)



## 2️⃣ Software Security & Vulnerabilities
> This is about finding "vulnerabilities"
> ↗ [Vulnerabilities /Vulnerabilities 🆚 Bugs (Incorrectness) 🆚 Feature ?](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🦟%20Vulnerabilities/Vulnerabilities.md#Vulnerabilities%20🆚%20Bugs%20(Incorrectness)%20🆚%20Feature%20?)
> ↗ [Software Testing / Error, Faults and Failures](🧪%20Software%20Testing/Software%20Testing.md#Error,%20Faults%20and%20Failures)

![risk_management_and_software_security.excalidraw | 1000](../../../Assets/Illustrations/Computer%20Security/risk_management_and_software_security.excalidraw.md)
<small>Risk management & Cyversecurity</small>

↗ [Vulnerabilities](../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🦟%20Vulnerabilities/Vulnerabilities.md)
- ↗ [Vulnerability Disclosure（漏洞挖掘）](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Phases/Vulnerability%20Disclosure（漏洞挖掘）.md)
↗ [Software Security](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/Software%20Security.md)
- ↗ [Software Vulnerability & Weakness](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Software%20Vulnerability%20&%20Weakness.md)
- ↗ [Software (Program) Techniques & Binary Engineering](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering.md)
	- ↗ [Techniques - Vulnerability Disclosure & Discovery](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Techniques/Techniques%20-%20Vulnerability%20Disclosure%20&%20Discovery.md)
		- ↗ [Fuzzing (Concrete Execution)](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👙%20DCA%20%28Dynamic%20Code%20Analysis%29%20&%20DAST/Fuzzing%20%28Concrete%20Execution%29/Fuzzing%20%28Concrete%20Execution%29.md)
		- ↗ [Data Flow Analysis](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Data%20Flow%20Analysis/Data%20Flow%20Analysis.md)
		- ↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29/Symbolic%20Execution%20&%20Concolic%20Execution%20%28SSE%20&%20DSE%29.md)
		- etc.
	- ↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29.md)

↗ [Software Testing](🧪%20Software%20Testing/Software%20Testing.md)



## 3️⃣ Software Capability, Compatibility, Maintainability, and More...
↗ [Software Development Norms & Patterns](../Software%20Development%20Norms%20&%20Patterns/Software%20Development%20Norms%20&%20Patterns.md)
↗ [Cloud Computing & Cloud Native](../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)

↗ [Software Testing](🧪%20Software%20Testing/Software%20Testing.md)



## Ref
