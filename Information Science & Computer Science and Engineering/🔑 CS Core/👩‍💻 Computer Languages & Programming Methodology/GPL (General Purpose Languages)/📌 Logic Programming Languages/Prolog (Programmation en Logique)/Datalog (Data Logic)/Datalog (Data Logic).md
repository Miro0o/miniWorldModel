# Datalog (Data Logic)

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Database Systems](../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
↗ [DBMS (DataBase Management System) Implementations](../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/DBMS%20%28DataBase%20Management%20System%29%20Implementations/DBMS%20%28DataBase%20Management%20System%29%20Implementations.md)

↗ [Database Languages](../../../../DSL%20%28Domain%20Specific%20Languages%29/Database%20Languages/Database%20Languages.md)
↗ [Database System Languages](../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20System%20Languages.md)
↗ [SQL (Structured Query Language)](../../../../DSL%20%28Domain%20Specific%20Languages%29/Database%20Languages/🦆%20Query%20Languages%20%28Data%20Query%20Languages,%20DQL%29/🩼%20SQL%20%28Structured%20Query%20Language%29/SQL%20%28Structured%20Query%20Language%29.md)

↗ [Datalog Analysis](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Language-Eco-Specific%20Program%20Analysis/Datalog%20Analysis/Datalog%20Analysis.md)

↗ [Equational Reasoning & Term Rewriting](../../../../🐢%20Programming%20Language%20Theory%20%28PLT%29/Program%20Equivalence%20and%20Metatheory/Equational%20Reasoning%20&%20Term%20Rewriting/Equational%20Reasoning%20&%20Term%20Rewriting.md)


### Other Resources
https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog
[Datalog](https://en.wikipedia.org/wiki/Datalog) is a declarative logic programming language that comes from the database theory and logic programming communities. While there are many perspectives on Datalog, we are going to focus on it from an operational perspective, and draw some comparisons to term rewriting systems.
- [Resources](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#resources)
- [Simple Example](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#simple-example)
- [Optimization](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#optimization)
    - [Semi-naive Evaluation](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#semi-naive-evaluation)
    - [Magic Sets](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#magic-sets)
- [Extensions](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#extensions)
    - [Negation](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#negation)
    - [From Booleans to Integers, Lattices, and Semi-rings](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#from-booleans-to-integers-lattices-and-semi-rings)
    - [Existentials, ADTs, EGDs, and TGDs](https://inst.eecs.berkeley.edu/~cs294-260/sp24/2024-02-05-datalog#existentials-adts-egds-and-tgds)

There are a lot of great resources out there on Datalog. Here are just a few:
- [Wikipedia](https://en.wikipedia.org/wiki/Datalog) has a nice overview.
- [Souffle](https://souffle-lang.github.io/) is a modern Datalog implementation that provides a nice [tutorial](https://souffle-lang.github.io/tutorial) and other documentation.
- [Foundations of Databases](http://webdam.inria.fr/Alice/) (the “Alice book”) is a classic textbook on databases that covers Datalog. It’s available online at that link.
- Philip Zucker has a [notes pages](https://www.philipzucker.com/notes/Languages/datalog/), many blog posts, and an [online book](https://www.philipzucker.com/datalog-book) (in progress) on Datalog (and other topics relevant to this course!).
- The following survey papers:
    - [Datalog and Recursive Query Processing](http://blogs.evergreen.edu/sosw/files/2014/04/Green-Vol5-DBS-017.pdf)
    - [Modern Datalog Engines](https://soft.vub.ac.be/Publications/2022/vub-tr-soft-22-21.pdf)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Datalog

**Datalog** is a [declarative](https://en.wikipedia.org/wiki/Declarative_programming "Declarative programming") [logic programming](https://en.wikipedia.org/wiki/Logic_programming "Logic programming") language. While it is syntactically a subset of [Prolog](https://en.wikipedia.org/wiki/Prolog "Prolog"), Datalog generally uses a bottom-up rather than top-down evaluation model. This difference yields significantly different behavior and properties from [Prolog](https://en.wikipedia.org/wiki/Prolog "Prolog"). It is often used as a [query language](https://en.wikipedia.org/wiki/Query_language "Query language") for [deductive databases](https://en.wikipedia.org/wiki/Deductive_database "Deductive database"). Datalog has been applied to problems in [data integration](https://en.wikipedia.org/wiki/Data_integration "Data integration"), [networking](https://en.wikipedia.org/wiki/Computer_network "Computer network"), [program analysis](https://en.wikipedia.org/wiki/Program_analysis "Program analysis"), and more.



## Ref
