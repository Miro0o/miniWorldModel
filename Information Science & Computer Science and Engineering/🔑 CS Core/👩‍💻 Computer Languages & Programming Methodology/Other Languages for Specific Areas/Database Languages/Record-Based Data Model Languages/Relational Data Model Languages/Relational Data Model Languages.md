# Relational Data Model Languages
[TOC]



## Res
### Related Topics
Recall ↗ [Database System Languages](../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/Database%20System%20Languages.md)
↗ [DBMS /Relational Database](../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DBMS%20(DataBase%20Management%20System)%20Implementations/RDBMS%20(Relational)/RDBMS%20(Relational).md)



## ⏮️ Review
Recall that in a database language, there are 3 components:
1. DDL, data define language;
2. DML, data munipulate language;
	1. DQL, data query language (❗staple)
3. DCL, data control language (security related)

---
Relational database maps many sheets 📈 together to store & organize data. 
List of several popular relational database: 

1. 商用数据库，例如：[Oracle](https://www.oracle.com/)，[SQL Server](https://www.microsoft.com/sql-server/)，[DB2](https://www.ibm.com/db2/)等；
2. 开源数据库，例如：[MySQL](https://www.mysql.com/)，[PostgreSQL](https://www.postgresql.org/)等；
3. 桌面数据库，以微软[Access](https://products.office.com/access)为代表，适合桌面应用程序使用；
4. 嵌入式数据库，以[Sqlite](https://sqlite.org/)为代表，适合手机应用和桌面程序。


### Relational Data Models
↗ [Relational (Data) Models](../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20DBMS%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Record-Based%20Data%20Models/Relational%20(Data)%20Models/Relational%20(Data)%20Models.md)



## 🏟️ Relation in Math
> ❗❗ Foundation of Relational DML

Both Relational Algebra and Relational Calculus are **formal query languages**. 

### Relational Algebra（关系代数）
Relational Algebra is a **procedural language**. In Relational Algebra, The order is specified in which the operations have to be performed. In [Relational Algebra](https://www.geeksforgeeks.org/introduction-of-relational-algebra-in-dbms/), frameworks are created to implement the queries. The basic operation included in relational algebra are: 

1. Select (σ)
2. Project (Π)
3. Union (U)
4. Set Difference (-)
5. Cartesian product (X)
6. Rename (ρ) 


### Relational Calculus（关系演算）
Relational Calculus is the formal query language. It is also known as **Declarative language**. In Relational Calculus, the order is not specified in which the operation has to be performed. Relational Calculus means what result we have to obtain.   
Relational Calculus has two variations: 

1.  [Tuple Relational Calculus (TRC)](https://www.geeksforgeeks.org/dbms-tupple-relational-calculus/)
2.  [Domain Relational Calculus (DRC)](https://www.geeksforgeeks.org/dbms-domain-relational-calculus/)

Relational Calculus is denoted as:
```
{ t | P(t) }

Where,
t: the set of tuples
p: is the condition which is true for the given set of tuples.
```


### Difference between Relational Algebra and Relational Calculus

| NO |      Basis of Comparison      |                      Relational Algebra                      |                     Relational Calculus                      |
| :--: | :---------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  1.  |       **Language Type**       |                 It is a Procedural language.                 | Relational Calculus is a Declarative (non-procedural) language. |
|  2.  |         **Procedure**         |      Relational Algebra means how to obtain the result.      |   Relational Calculus means what result we have to obtain.   |
|  3.  |           **Order**           | In Relational Algebra, the order is specified in which the operations have to be performed. |     In Relational Calculus, the order is not specified.      |
|  4.  |          **Domain**           |       Relational Algebra is independent of the domain.       | Relation Calculus can be domain-dependent because of domain relational calculus. |
|  5.  |   **Programming language**    |   Relational Algebra is nearer to a programming language.    | Relational Calculus is not nearer to programming language but to natural language. |
|  6.  |     **Inclusion in SQL**      | The SQL includes only some features from the relational algebra. | SQL is based to a greater extent on the tuple relational calculus. |
|  7.  | **Relationally completeness** | Relational Algebra is one of the languages in which queries can be expressed but the queries should also be expressed in relational calculus to be relationally complete. | For a database language to be relationally complete, the query written in it must be expressible in relational calculus. |
|  8.  |     **Query Evaluation**      | The evaluation of the query relies on the order specification in which the operations must be performed. | The order of operations does not matter in relational calculus for the evaluation of queries. |
|  9.  |      **Database access**      | For accessing the database, relational algebra provides a solution in terms of what is required and how to get that information by following a step-by-step description. | For accessing the database, relational calculus provides a solution in terms as simple as what is required and lets the system find the solution for that. |
| 10.  |      **Expressiveness**       | The expressiveness of any given language is judged using relational algebra operations as a standard. | The completeness of a language is measured in the manner that it is least as powerful as calculus. That implies relation defined using some expression of the calculus is also definable by some other expression, the language is in question. |



## Relational Data Languages Components
### 1️⃣ Relational DDL


### 2️⃣ Relational DML
#### 🦆 Relational DQL


### 3️⃣ Relational DCL



## SQL (Structured Query Language)
↗ [SQL (Structured Query Language)](../../🦆%20Query%20Languages%20(Data%20Query%20Languages,%20DQL)/🩼%20SQL%20(Structured%20Query%20Language)/SQL%20(Structured%20Query%20Language).md)



## Ref
[关系代数(Relational Algebra)概览]: https://blog.csdn.net/zsi386/article/details/79091307
[数据库复习9——关系代数和关系演算]: https://www.cnblogs.com/claireyuancy/p/7217371.html


