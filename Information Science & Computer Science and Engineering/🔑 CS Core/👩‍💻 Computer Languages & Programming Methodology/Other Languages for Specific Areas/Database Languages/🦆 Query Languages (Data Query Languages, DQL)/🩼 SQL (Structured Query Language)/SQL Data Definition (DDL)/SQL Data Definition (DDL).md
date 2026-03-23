# SQL Data Definition (DDL)

[TOC]



## Res
### Related Topics



## Intro
```sql
CREATE DOMAIN OwnerNumber AS VARCHAR(5)  
CHECK (VALUE IN (SELECT ownerNo FROM PrivateOwner));
CREATE DOMAIN StaffNumber AS VARCHAR(5)  
CHECK (VALUE IN (SELECT staffNo FROM Staff));
CREATE DOMAIN BranchNumber AS CHAR(4)  
CHECK (VALUE IN (SELECT branchNo FROM Branch));
CREATE DOMAIN PropertyNumber AS VARCHAR(5);

CREATE DOMAIN Street AS VARCHAR(25); CREATE DOMAIN City AS VARCHAR(15); 
CREATE DOMAIN Postcode AS VARCHAR(8); CREATE DOMAIN PropertyType AS CHAR(1)

CHECK(VALUE IN (‘B’, ‘C’, ‘D’, ‘E’, ‘F’, ‘M’, ‘S’));
CREATE DOMAIN PropertyRooms 
AS SMALLINT;

CHECK(VALUE BETWEEN 1 AND 15); 
CREATE DOMAIN PropertyRent AS DECIMAL(6,2)

CHECK(VALUE BETWEEN 0 AND 9999.99); 
CREATE TABLE PropertyForRent(

```



## Transactions
↗ [Transaction Management](../../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20DBMS%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Transaction%20Management/Transaction%20Management.md)



## Ref

