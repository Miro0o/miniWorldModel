# Database Environment

[TOC]


## Overview
![](../../../../../Assets/Pics/Screenshot%202023-03-06%20at%204.44.56%20PM.png)

### View - Schema - Model
View: A view is essentially some subset of the database (tables)
Schema: A schema is a unique structured view 👆🏻
Model: A model is the schema of a set of schemas 👆🏻



## ANSI-SPARC Three-Level Architecture
![](../../../../../Assets/Pics/Screenshot%202023-03-06%20at%204.34.58%20PM.png)

![](../../../../../Assets/Pics/Screenshot%202023-03-06%20at%204.38.41%20PM.png)


### 1️⃣ Internal Level
Internal Level
- Physical representation of the database on the computer
- Describes how the data is stored in the database

1. Storage space allocation for data and indexes
2. Record description for storage (with stored sizes for data items)  
3. Record placement(安放)  
4. Data compression(压缩) and encryption techniques


### C-I Mapping
Conceptual Schema-Internal Schema Mapping


### 2️⃣ Conceptual Level
Conceptual Level
- Community view of the database  
- Describes what data is stored in database and relationships among the data

1. All entities, their attributes and their relationships
2. The constraints on the data  
3. Semantic information about the data  
4. Security and integrity information


### E-C Mapping
External Schema-Conceptual Schema Mapping


### 3️⃣ External Level
External Level
- Users’ view of the database
- Describes that part of database that is relevant to a particular user

The view is the ‘real world’ represented in a form that is familiar for users


### Three-Level Arch Objective: Data Independence
#TODO 
Logical Data independence
Physical Data independence



## Roles in Database Environment
### Data Admin & Database Admin
DA
DBA

### Database Designer
Conceptual Design
Physical Design

### Application Developer


### End User



## Ref
