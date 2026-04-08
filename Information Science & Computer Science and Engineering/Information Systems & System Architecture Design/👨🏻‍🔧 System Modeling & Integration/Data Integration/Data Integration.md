# Data Integration

[TOC]



## Res
### Related Topics
↗ [Database Systems](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
↗ [Database Design](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Database%20Design.md)
- ↗ [Conceptual Database Design (Conceptual Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Conceptual%20Database%20Design%20(Conceptual%20Modeling)/Conceptual%20Database%20Design%20(Conceptual%20Modeling).md)
- ↗ [Logical Database Design (Data Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Logical%20Database%20Design%20(Data%20Modeling).md)

↗ [Database Applications (DBAP) & Services](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Applications%20(DBAP)%20&%20Services/Database%20Applications%20(DBAP)%20&%20Services.md)


### Other Resources



## Intro
> [!quote]
> “_Data integration refers to the process of combining, sharing, or synchronizing data from multiple sources to provide users with a unified view_” 
> 
> Lenzerini, Maurizio. "Data integration: A theoretical perspective." _Proceedings of the twenty-first ACM SIGMOD-SIGACT-SIGART symposium on Principles of database systems_. 2002


### Three Schema Model: Data Management and Modeling
> [!links]
> ↗ [Database Design](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Database%20Design.md)
> ↗ [Conceptual Database Design (Conceptual Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Conceptual%20Database%20Design%20(Conceptual%20Modeling)/Conceptual%20Database%20Design%20(Conceptual%20Modeling).md)
> ↗ [Logical Database Design (Data Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Logical%20Database%20Design%20(Data%20Modeling).md)

#DBMS #data_modeling

![](../../../../Assets/Pics/Pasted%20image%2020260318145616.png)
<small><a>https://medium.com/@lasyachowdary1703/day-9-intro-to-conceptual-logical-physical-data-models-mapping-ideas-to-reality-cb02608b18b3</a></small>


> 🔗 https://stackoverflow.com/a/4279945/16542494

![](../../../../Assets/Pics/Pasted%20image%2020260318145311.png)

These terms are unfortunately overloaded with several possible definitions. According to the ANSI-SPARC "three schema" model for instance, the Conceptual Schema or Conceptual Model consists of the set of objects in a database (tables, views, etc) in contrast to the External Schema which are the objects that users see.

In the data management professions and especially among data modellers / architects, the term Conceptual Model is frequently used to mean a _semantic_ model whereas the term Logical Model is used to mean a preliminary or virtual database _design_. This is probably the usage you are most likely to come across in the workplace.

In academic usage and when describing DBMS architectures however, the Logical level means the database objects (tables, views, tables, keys, constraints, etc), as distinct from the Physical level (files, indexes, storage). To confuse things further, in the workplace the term Physical model is often used to mean the design as implemented or planned for implementation in an actual database. That may include both "physical" and "logical" level constructs (both tables and indexes for example).

When you come across any of these terms you really need to seek clarification on what is being described unless the context makes it obvious.

For a discussion of these differences, check out Data Modeling Essentials by Simsion and Witt for example.

> [!Example] A Introducing Example
> A university wants to make publicly accessible from its website both information on its departments, employees, and rooms, and on its courses and planned lectures. However, no unified data source exists. Information on departments, employees and rooms is stored in an XML database, which is used by a .NET application to support the HR department. Instead, information on courses and lectures is stored in a relational database, which is used by a Java application to support the study administration. Neither the applications expose any API, nor their source code is available.
> 
> ![](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2014.44.12.png)
> ![](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2014.44.36.png)

**Key Idea**
- The ideal data source should have a uniform **Global Conceptual Schema (GCS)**
- Each data source has its own **Local Conceptual Schema (LCS)**
- We need a way to merge different LCSs into a single GCS

**Challenges**
- Syntactical:
	- Data may use a different format
	- Data may use a different schema
- Semantical:
	- Synonyms: the same concept may be expressed using different terms
	- Homonyms: the same term may have different meanings

**Solutions**
- **Physical Integration**
	- The GCS is a physical datastore
	- Data are periodically copied from each data source into the target datastore
	- ETL: data is **E**xtract from source, **T**ransformed, and **L**oaded to target
	- ELT: data is **E**xtract from source, **L**oaded to target (unchanged), and then **T**ransformed
	- ==not for real-time!==
- **Logical Integration**
	- The GCS is a projection over each data source LCS
	- Data are kept in the originating data sources in the same source format
	- Queries are rewritten on-the-fly to match each LCS
	- Query results are transformed on-the-fly to match the GCS



## Logical Integration
> [!links]
> ↗ [ER & EER & ERD](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Conceptual%20Database%20Design%20(Conceptual%20Modeling)/ER%20&%20EER%20&%20ERD.md)
> ↗ [ERD (Entity-Relationship Diagram)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20Languages/Data%20Modeling%20Languages/ERD%20(Entity-Relationship%20Diagram).md)
> 
> ↗ [Query Processing](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Query%20Processing/Query%20Processing.md)
> ↗ [Database Query Engines](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/DBMS%20(DataBase%20Management%20System)%20Implementations/🏋️%20Database%20Engines%20&%20Search%20Engines/Database%20Query%20Engines/Database%20Query%20Engines.md)


**Logical Integration**
- The GCS is a projection over each data source LCS
- Data are kept in the originating data sources in the same source format
- Queries are rewritten on-the-fly to match each LCS
- Query results are transformed on-the-fly to match the GCS

![|500](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2015.17.29.png)
<small><a>https://cs.uwaterloo.ca/~tozsu/courses/CS742/Course%20Notes/9a-DataIntegration-handout.pdf</a></small>

**Logical Integration – Global-as-View**
- GCS is defined as a view on all LCSs
- Steps:
	1. Identify LCS for each data source
	2. Synthesize GCS from all LCSs
	3. Define mappings from GCS to LCS
- Advantages:
	- Rewriting queries and merging results is straightforward
- Disadvantages:
	- If new data sources need to be integrated, GCS may have to be changed

**Logical Integration – Local-as-View**
- Each LCS is defined as a view over the GCS
- Steps:
	1. Define GCS beforehand
	2. Identify LCS for each data source
	3. Define mappings from GCS to LCS
- Advantages:
	- GCS does not have to be changed when new data sources need to be integrated
- Disadvantages:
	- The mapping needs to be reversed
	- Rewriting queries and merging results is hard and not always possible

![|500](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2015.17.15.png)
<small><a>https://cs.uwaterloo.ca/~tozsu/courses/CS742/Course%20Notes/9a-DataIntegration-handout.pdf</a></small>


**Database Integration Issues**
- Schema translation
	- Component database schemas translated to a common intermediate canonical representation
- Schema generation
	- Intermediate schemas are used to create a global conceptual schema


### LCS Identification
- typically performed by reverse-engineering the physical data source to a conceptual
model (e.g., ER diagrams)
- Can be (partially) automated or entirely manual
- Conceptual models are not tied to a specific technology (e.g., relational vs document-based

> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.49.40.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.50.10.png)


### Schema Translation


### Schema Generation
- Schema matching
	- Finding the correspondences between multiple schemas
- Schema integration
	- Creation of the GCS (or mediated schema) using the correspondences
- Schema mapping
	- How to map data from local databases to the GCS
Important: sometimes the GCS is defined first and schema matching and schema mapping is done against this target GCS
#### 1️⃣ Schema Matching
![](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2015.23.02.png)
<small><a>https://cs.uwaterloo.ca/~tozsu/courses/CS742/Course%20Notes/9a-DataIntegration-handout.pdf</a></small>

- For each concept in a conceptual model, it identifies the corresponding element(s) in the other models:
	- For GAV, we consider all LCSs
	- For LAV, we also consider the GCS
- A concept may exist in all models, some models, or only one model
-  A concept may be represented using multiple model elements (e.g., two entities and a relation)
- Can be (partially) automated or entirely manual

> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.50.52.png)
#### 2️⃣ Schema Integration
![|500](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2015.23.28.png)
<small><a>https://cs.uwaterloo.ca/~tozsu/courses/CS742/Course%20Notes/9a-DataIntegration-handout.pdf</a></small>

Based on the schema matching results, the GCS is synthesized
-  Applicable only for GAV
Integration can be binary or n-ary
- Binary: schemas are compared pairwise
- N-ary: more that 2 schemas are compared at once


> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.51.26.png)
#### 3️⃣ Schema Mapping
> [!links]
> ↗ [Query Processing](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20Database%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Query%20Processing/Query%20Processing.md)
> ↗ [Database Query Engines](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/DBMS%20(DataBase%20Management%20System)%20Implementations/🏋️%20Database%20Engines%20&%20Search%20Engines/Database%20Query%20Engines/Database%20Query%20Engines.md)

Identifies how data from LCS can be mapped to GCS
- Schema matching has NOT specified how to transform the whole data source
Mappings will be used to rewrite queries over the GCS
- For GAV, we can express mappings as SQL views over the LCSs
##### Mediated Mapping
![](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2015.34.03.png)
<small>Mediator/ Wrapper Architecture <br> <a>https://cs.uwaterloo.ca/~tozsu/courses/CS742/Course%20Notes/9a-DataIntegration-handout.pdf</a></small>

![](../../../../Assets/Pics/Screenshot%202026-03-18%20at%2015.34.39.png)
<small>MDB Query ProcessingArchitecture <br> <a>https://cs.uwaterloo.ca/~tozsu/courses/CS742/Course%20Notes/9a-DataIntegration-handout.pdf</a></small>


> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.03.23.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.03.12.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.04.49.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.57.47.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.56.53.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.58.49.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2016.57.09.png)
> 
> (XML to SQL mediator (skipped))
##### Direct Mapping
> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.00.28.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.00.50.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.01.16.png)
> 
![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.05.48.png)
![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.06.00.png)
![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2017.06.09.png)



## Physical Integration
> [!links]
> ↗ [Data Warehouse & Beyonds](Data%20Warehouse%20&%20Beyonds.md)



## Ref
