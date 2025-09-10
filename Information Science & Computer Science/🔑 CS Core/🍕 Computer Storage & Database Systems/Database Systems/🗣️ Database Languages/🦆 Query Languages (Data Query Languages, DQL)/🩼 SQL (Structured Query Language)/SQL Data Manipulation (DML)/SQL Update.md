# SQL Update

[TOC]



## Res
### Related Topics



## Intro
SQL is a complete data manipulation language that can be used for modifying the data in the database as well as querying the database. The commands for modifying the database are not as complex as the `SELECT` statement. In this section, we describe the three SQL statements that are available to modify the contents of the tables in the database:
• `INSERT` – adds new rows of data to a table  
• `UPDATE` – modifies existing data in a table  
• `DELETE` – removes rows of data from a table



## 👉 `INSERT` Statement
### `INSERT` Single Row
There are two forms of the `INSERT` statement. The first allows a single row to be inserted into a named table and has the following format:
```sql
INSERT INTO TableName [(columnList)]
VALUES (dataValueList)
```
👉 **TableName** may be either a base table or an updatable view (see Section 7.4), and columnList represents a list of one or more column names separated by commas. 

👉 The **columnList** is optional;
- if omitted, SQL assumes a list of all columns in their original `CREATE TABLE` order.
- If specified, then any columns that are omitted from the list must have been declared as `NULL` columns when the table was created, unless the `DEFAULT` option was used when creating the column.

👉 The **dataValueList** must match the columnList as follows:
- The number of items in each list must be the same.
- There must be a direct correspondence in the position of items in the two lists, so that the first item in dataValueList applies to the first item in columnList, the second item in dataValueList applies to the second item in columnList, and so on.
- The data type of each item in dataValueList must be compatible with the data type of the corresponding column.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%205.18.51%20PM.png)


### `INSERT` Multiple Rows
The second form of the INSERT statement allows multiple rows to be copied from one or more tables to another, and has the following format:
```sql
INSERT INTO TableName [(columnList)] 
SELECT . . .
```

👉 **TableName** and **columnList** are defined as before when inserting a single row. 

👉 The **`SELECT` clause** can be any valid `SELECT` statement. ==The rows inserted into the named table are identical to the result table produced by the `subselect`.== The same restrictions that apply to the first form of the `INSERT` statement also apply here.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%205.18.40%20PM.png)



## 👉 Modifying data in the database (`UPDATE`)
The UPDATE statement allows the contents of existing rows in a named table to be changed. The format of the command is:
```sql
UPDATE TableName  
SET columnName1 = dataValue1 [, columnName2 = dataValue2 . . .]
[WHERE searchCondition]
```

👉 **TableName** can be the name of a base table or an updatable view (see Section 7.4). 

👉 The **`SET` clause** specifies the names of one or more columns that are to be updated. 

👉 The **`WHERE` clause** is optional; 
- if omitted, the named columns are updated for all rows in the table. 
- If a WHERE clause is specified, only those rows that satisfy the searchCondition are updated. The new dataValue(s) must be compatible with the data type(s) for the corresponding column(s).

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%205.20.37%20PM.png)



# 👉 `DELETE` Statement
```sql
DELETE FROM TableName
[WHERE searchCondition]
```

👉 As with the `INSERT` and `UPDATE` statements, **TableName** can be the name of a base table or an updatable view (see Section 7.4).

👉 The **searchCondition** is optional; 
- if omitted, all rows are deleted from the table. This does not delete the table itself to delete the table contents and the table definition, the DROP TABLE statement must be used instead (see Section 7.3.3). 
- If a searchCondition is specified, only those rows that satisfy the condition are deleted.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%205.21.45%20PM.png)



## Ref

