# Semantic Analysis

[TOC]



## Res
### Related Topics
↗ [Formal System, Formal Semantics, and Formal Logic](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic.md)
↗ [Formal Syntax & Metasyntax (and Metalanguage)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/📌%20Formal%20Syntax%20&%20Metasyntax%20%28and%20Metalanguage%29/Formal%20Syntax%20&%20Metasyntax%20%28and%20Metalanguage%29.md)

↗ [Models of Computation & Abstract Machines](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
↗ [Computation as Programs - Computer Program Semantics & Models](../../../../../../🗺%20CS%20Overview/Computation%20as%20Programs%20-%20Computer%20Program%20Semantics%20&%20Models.md)

↗ [Programming Language & Formal Semantics](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Programming%20Language%20&%20Formal%20Semantics.md)
- ↗ [Attribute Grammars](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/📌%20Formal%20Syntax%20&%20Metasyntax%20%28and%20Metalanguage%29/Attribute%20Grammars.md)
- ↗ [Operational Semantics](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Operational%20Semantics/Operational%20Semantics.md)

↗ [Software (Program) Techniques & Binary Engineering](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering.md)
↗ [Program Analysis Basics](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
- ↗ [SCA (Static Code Analysis) & SAST](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/SCA%20%28Static%20Code%20Analysis%29%20&%20SAST.md)
	- ↗ [Data Flow Analysis](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Data%20Flow%20Analysis/Data%20Flow%20Analysis.md)
		- ↗ [DDG (Data Dependency Graph)](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Data%20Flow%20Analysis/📲%20Inter-procedural%20Analysis/DDG%20%28Data%20Dependency%20Graph%29.md)
		- ↗ [DFG (Data Flow Graph)](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Data%20Flow%20Analysis/📲%20Inter-procedural%20Analysis/DFG%20%28Data%20Flow%20Graph%29.md)
- ↗ [PL Static Syntactic Analysis & Type System](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20Analysis%20&%20Systems/🦖%20PL%20Static%20Syntactic%20Analysis%20&%20Type%20System/PL%20Static%20Syntactic%20Analysis%20&%20Type%20System.md)

↗ [CFG (Control Flow Graph) & ICFG (Interprocedure CFG)](CFG%20%28Control%20Flow%20Graph%29%20&%20ICFG%20%28Interprocedure%20CFG%29.md)

↗ [Static Code Analysis Tools (SCAT)](../../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20%28SCAT%29/Static%20Code%20Analysis%20Tools%20%28SCAT%29.md)


### Other Resources
https://courses.compute.dtu.dk/02242/topics/semantics.html

Floyd, Robert W . (1993). _Assigning Meanings to Programs._ doi:10.1007/978-94-011-1793-7_4 https://doi.org/10.1007/978-94-011-1793-7_4

Nielson, Hanne Riis; Nielson, Flemming (2007). _Semantics with Applications._

Plotkin, Gordon D (2004). _The origins of structural operational semantics._ doi:10.1016/j.jlap.2004.03.009 https://homepages.inf.ed.ac.uk/gdp/publications/Origins_SOS.pdf



## Intro
↗ [Computation as Programs - Computer Program Semantics & Models](../../../../../../🗺%20CS%20Overview/Computation%20as%20Programs%20-%20Computer%20Program%20Semantics%20&%20Models.md)
↗ [Program Analysis Basics](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
↗ [Programming Language & Formal Semantics](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20%28PLT%29/Programming%20Language%20&%20Formal%20Semantics/Programming%20Language%20&%20Formal%20Semantics.md)

![computing.excalidraw | 800](../../../../../../../Assets/Illustrations/Philosophy/computing.excalidraw.md)



## Ref
