# Database System Design

[TOC]



## Res
### Related Topics
↗ [Database Applications (DBAP) & Services](../Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/Database%20Applications%20(DBAP)%20&%20Services/Database%20Applications%20(DBAP)%20&%20Services.md)

↗ [Information Systems & System Architecture Design](../../../../Information%20Systems%20&%20System%20Architecture%20Design/Information%20Systems%20&%20System%20Architecture%20Design.md)
↗ [System Modeling & Integration](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/System%20Modeling%20&%20Integration.md)
- ↗ [Data Integration](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Data%20Integration/Data%20Integration.md)
↗ [Enterprise Architecture Modeling (Software Integration)](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Enterprise%20Architecture%20Modeling%20(Software%20Integration)/Enterprise%20Architecture%20Modeling%20(Software%20Integration).md)


### Other Resources



## Intro
![](../../../../../Assets/Pics/Screenshot%202023-03-06%20at%204.44.56%20PM.png)
<small>Review: Database System Environment</small>

![](../../../../../Assets/Pics/Pasted%20image%2020240228232522.png)


### The Information Systems Lifecycle
> [!links]
> ↗ [Information Systems & System Architecture Design](../../../../Information%20Systems%20&%20System%20Architecture%20Design/Information%20Systems%20&%20System%20Architecture%20Design.md)

> **Information System**: The resources that enable the collection, management, control, and dissemination of information throughout an organization.


### Case Tools in Database Design
↗ [CASE (Computer-Aided Software Engineering) Tools](../../../../Software%20Engineering/CASE%20(Computer-Aided%20Software%20Engineering)%20Tools/CASE%20(Computer-Aided%20Software%20Engineering)%20Tools.md)

Support provided by CASE(计算机辅助软件工程) tools include:
- data dictionary to store information about database system’s data;
- design tools to support data analysis;
- tools to permit development of corporate data model, and conceptual and logical data models;
- tools to enable prototyping of applications.

Provide following benefits: 
* Standards;
* Integration(集成化);  
* Support for standard methods;
* Consistency(一致性);  
* Automation.

![](../../../../../Assets/Pics/Screenshot%202023-04-22%20at%203.51.09%20PM.png)



## 🔄 Database System Development Lifecycle, DSDLC
> [!links]
> ↗ [Database Design](Database%20Design/Database%20Design.md)
> 
> ↗ [Database Application (DBAP) Design](Database%20Application%20(DBAP)%20Design/Database%20Application%20(DBAP)%20Design.md)
> ↗ [Database Applications (DBAP) & Services](../Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/Database%20Applications%20(DBAP)%20&%20Services/Database%20Applications%20(DBAP)%20&%20Services.md)

> 🔗 
> Informations System;
> Information System Lifecycle (ISLC), or Softwrae Development Lifecycle (SDLC);
> 
> ↗ [SDLC (Software Development Life Circle) & SDLC Models](../../../../Software%20Engineering/Software%20Development%20Norms%20&%20Patterns/🔄%20SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models/SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models.md)

As a database system is a fundamental component of the larger organization-wide information system, the **database system development lifecycle** is inherently associated with the **lifecycle of the information system**. The stages of the database system development lifecycle are shown in Figure 10.1. Below the name of each stage is the section in this chapter that describes that stage.

It is important to recognize that the stages of the database system development lifecycle are not strictly sequential, but involve some amount of repetition of previous stages through feedback loops. For example, problems encountered during database design may necessitate additional requirements collection and analysis. As there are feedback loops between most stages, we show only some of the more obvious ones in Figure 10.1. A summary of the main activities associated with each stage of the database system development lifecycle is described in Table 10.1.

For small database systems, with a small number of users, the lifecycle need not be very complex. However, when designing a medium to large database systems with tens to thousands of users, using hundreds of queries and application pro- grams, the lifecycle can become extremely complex. Throughout this chapter, we concentrate on activities associated with the development of medium to large database systems. In the following sections we describe the main activities associated with each stage of the database system development lifecycle in more detail.


![](../../../../../Assets/Pics/Screenshot%202023-06-16%20at%204.09.18%20PM.png)
<small>Database System Development Life Cycle #1 </small>

![](../../../../../Assets/Pics/Screenshot%202023-06-16%20at%204.05.58%20PM.png)

![|600](../../../../../Assets/Pics/Screenshot%202023-03-06%20at%203.02.57%20PM.png)
<small>Database System Development Life Cycle #2</small>


### 1️⃣ Database Meta Design
↗ [Database System Meta Design](Database%20System%20Meta%20Design/Database%20System%20Meta%20Design.md)


### 2️⃣ Database Design & Three Schema Model
↗ [Database Design](Database%20Design/Database%20Design.md)
- ↗ [Conceptual Database Design (Conceptual Modeling)](Database%20Design/Conceptual%20Database%20Design%20(Conceptual%20Modeling)/Conceptual%20Database%20Design%20(Conceptual%20Modeling).md)
- ↗ [Logical Database Design (Data Modeling)](Database%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Logical%20Database%20Design%20(Data%20Modeling).md)
- ↗ [Physical Database Design (Physical Modeling)](Database%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Physical%20Database%20Design%20(Physical%20Modeling).md)
	- ↗ [DBMS (DataBase Management System) Implementations](../Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/DBMS%20(DataBase%20Management%20System)%20Implementations/DBMS%20(DataBase%20Management%20System)%20Implementations.md)

↗ [Data Integration](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Data%20Integration/Data%20Integration.md)

![](../../../../../../Assets/Pics/Pasted%20image%2020260318145616.png)
<small><a>https://medium.com/@lasyachowdary1703/day-9-intro-to-conceptual-logical-physical-data-models-mapping-ideas-to-reality-cb02608b18b3</a></small>


### 3️⃣ Database Application Design
↗ [Database Application (DBAP) Design](Database%20Application%20(DBAP)%20Design/Database%20Application%20(DBAP)%20Design.md)
↗ [Database Applications (DBAP) & Services](../Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/Database%20Applications%20(DBAP)%20&%20Services/Database%20Applications%20(DBAP)%20&%20Services.md)



## ✅ Case Study: Oracle Architecture



## Ref
