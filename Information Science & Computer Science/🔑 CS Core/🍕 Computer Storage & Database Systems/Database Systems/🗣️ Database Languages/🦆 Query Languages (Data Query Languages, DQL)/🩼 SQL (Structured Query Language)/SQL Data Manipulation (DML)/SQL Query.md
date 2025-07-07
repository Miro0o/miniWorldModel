# SQL Query

[TOC]



## Res


## Intro


## 👉 `SELECT` Statement
The purpose of the SELECT statement is to retrieve and display data from one or more database tables. It is an extremely powerful command, capable of performing the equivalent of the relational algebra’s Selection, Projection, and Join operations in a single statement (see Section 5.1). SELECT is the most frequently used SQL command and has the following general form:
```sql
SELECT      [DISTINCT | ALL] {* | [columnExpression [AS newName]] [, . . .]}   

FROM        TableName [AS alias] [, . . .] 

[WHERE      search conditions]  

[GROUP BY   columnList] [HAVING condition]

[ORDER BY   columnList {ASC | DESC} ]


/*Subselect */
[ALL | SOME | ANY] [EXISTS | NOT EXIST] [IN] SELECT (...)

```

- `columnExpression` represents a column name or an expression
- `TableName` is the name of an existing database table or view that you have access to
- `alias` is an optional abbreviation for `TableName`

==The sequence of processing in a `SELECT` statement is:==
- `FROM`: specifies the table or tables to be used  
- `WHERE`: filters the rows subject to some condition 
- `GROUP BY`: forms groups of rows with the same column value
- `HAVING`: filters the groups subject to some condition
- `SELECT`: specifies which columns are to appear in the output
- `ORDER BY`: specifies which columns are to appear in the output specifies the order of the output

The order of the clauses in the `SELECT` statement CANNOT be changed. The only two mandatory clauses are the first two: `SELECT` and `FROM`; the remainder are optional. The `SELECT` operation is **closed**: ==the result of a query on a table is another table== (see Section 5.1). There are many variations of this statement, as we now illustrate.


### columnExpression
**Calculated field** (sometimes called a **computed** or **derived field**). 
In general, to use a calculated field, you specify an SQL expression in the SELECT list. An SQL expression can involve addition, subtraction, multiplication, and division, and parentheses can be used to build complex expressions. More than one table column can be used in a calculated column; however, the columns referenced in an arithmetic expression must have a numeric type.
#TODO 


### Row selection (`WHERE` clause)
we often need to restrict the rows that are retrieved. This can be achieved with the WHERE clause, which consists of the keyword WHERE followed by a search condition that specifies the rows to be retrieved.

The rules for evaluating a conditional expression are:
- an expression is evaluated left to right;  
- subexpressions in brackets are evaluated first;
- NOTs are evaluated before ANDs and ORs;  
- ANDs are evaluated before ORs.


#### Search Conditions (Predicates)
The five basic **search conditions** (or **predicates**, using the ISO terminology) are as follows

##### 1️⃣ Comparison
**Comparison**: Compare the value of one expression to the value of another expression.
![](../../../../../../../../../../Assets/Pics/Screenshot%202023-05-14%20at%2011.21.42%20AM.png)

##### 2️⃣ Range
**Range**: Test whether the value of an expression falls within a specified range of values.
	- `BETWEEN ... AND ...` / `NOT BETWEEN`

##### 3️⃣ Set Membership
**Set membership**: Test whether the value of an expression equals one of a set of values.
	- `IN` / `NOT IN`

##### 4️⃣ Pattern Match
**Pattern match**: Test whether a string matches a specified pattern.

- `LIKE` / `NOT LIKE`
	- SQL has two special pattern-matching symbols:
	- The % percent character represents any sequence of zero or more characters (wildcard).
	- The _ underscore character represents any single character.
	- All other characters in the pattern represent themselves.
		

- **escape character**, e.g. `LIKE ‘15#%’ ESCAPE ‘#’`

##### 5️⃣ Null
**Null**: Test whether a column has a null (unknown) value.
- A null comment is considered to have an unknown value, so we cannot test whether it is equal or not equal to another string. If we tried to execute the `SELECT` statement using either of these compound conditions, we would get an empty result table.
- `IS NULL` / `IS NOT NULL`


### Grouping Results (`GROUP BY` Clause)
The previous summary queries are similar to the totals at the bottom of a report. They condense all the detailed data in the report into a single summary row of data. However, it is often useful to have subtotals in reports. We can use the `GROUP BY` clause of the `SELECT` statement to do this. A query that includes the `GROUP BY` clause is called a grouped query, because it groups the data from the `SELECT` table(s) and produces a single summary row for each group. The columns named in the `GROUP BY` clause are called the grouping columns. 

The ISO standard requires the SELECT clause and the `GROUP BY` clause to be closely integrated. When `GROUP BY` is used, each item in the `SELECT` list must be single-valued per group. In addition, the `SELECT` clause may contain only:
- column names;  
- aggregate functions;
- constants;
- an expression involving combinations of these elements.

All column names in the `SELECT` list must appear in the `GROUP BY` clause unless the name is used only in an aggregate function. The contrary is not true: there may be column names in the `GROUP BY` clause that do not appear in the `SELECT` list. When the `WHERE` clause is used with `GROUP BY`, the `WHERE` clause is applied first, then groups are formed from the remaining rows that satisfy the search condition.

The ISO standard considers two nulls to be equal for purposes of the GROUP BY clause. If two rows have nulls in the same grouping columns and identical values in all the non-null grouping columns, they are combined into the same group.

#### Restricting Groupings (`HAVING` Clause)
The `HAVING` clause is designed for use with the `GROUP BY` clause to restrict the groups that appear in the final result table. 

> Although similar in syntax, `HAVING` and `WHERE` serve different purposes. 
> - The `WHERE` clause filters **individual** rows going into the final result table, whereas
> - `HAVING` filters **groups** going into the final result table. 

The ISO standard requires that column names used in the `HAVING` clause must also appear in the `GROUP BY` list or be contained within an aggregate function. **In practice, the search condition in the `HAVING` clause always includes at least one aggregate function; otherwise the search condition could be moved to the `WHERE` clause and applied to individual rows**. (==Remember that aggregate functions cannot be used in the `WHERE` clause.==)

The `HAVING` clause is not a necessary part of SQL—any query expressed using a `HAVING` clause can always be rewritten without the HAVING clause.


### Sorting Results (`ORDER BY` Clause)
The ORDER BY clause consists of a list of column identifiers that the result is to be sorted on, separated by commas. 
A column identifier may be either a column name or a column number that identifies an element of the `SELECT` list by its position within the list, 1 being the first (leftmost) element in the list, 2 the second element in the list, and so on. Column numbers could be used if the column to be sorted on is an expression and no AS clause is specified to assign the column a name that can subsequently be referenced. 

The ORDER BY clause allows the retrieved rows to be ordered in **ascending** (`ASC`) or **descending** (`DESC`) order on any column or combination of columns, regardless of whether that column appears in the result.

> However, some dialects insist that the `ORDER BY` elements appear in the `SELECT` list. In either case, the `ORDER BY` clause must always be the last clause of the `SELECT` statement.


#### Multiple Column Ordering
It is possible to include more than one element in the ORDER BY clause. The **major sort key** determines the overall order of the result table. 

If the values of the major sort key are unique, there is no need for additional keys to control the sort. However, if the values of the major sort key are not unique, there may be multiple rows in the result table with the same value for the major sort key. In this case, it may be desirable to order rows with the same value for the major sort key by some additional sort key. If a second element appears in the `ORDER BY` clause, it is called a **minor sort key**.



## 👉 SQL Functions
### Aggregation Functions
As well as retrieving rows and columns from the database, we often want to perform some form of summation or aggregation of data, similar to the totals at the bottom of a report. 

The ISO standard defines five aggregate functions:
- `COUNT` – returns the number of values in a specified column
- `SUM` – returns the sum of the values in a specified column  
- `AVG` – returns the average of the values in a specified column
- `MIN` – returns the smallest value in a specified column
- `MAX` – returns the largest value in a specified column



## 👉 Subqueries (Embedded/Nested `SELECT`)
In this section we examine the use of a complete `SELECT` statement embedded within another `SELECT` statement. The results of this inner `SELECT` statement (or `subselect`) are used in the outer statement to help determine the contents of the final result. 

A sub-select can be used in the `WHERE` and `HAVING` clauses of an outer `SELECT` statement, where it is called a subquery or nested query. Subselects may also appear in `INSERT`, `UPDATE`, and `DELETE` statements. 


🐶 There are three types of subquery:
- A **scalar subquery** returns a single column and a single row, that is, a single value. In principle, a scalar subquery can be used whenever a single value is needed. Example 6.19 uses a scalar subquery.

- A **row subquery** returns multiple columns, but only a single row. A row subquery can be used whenever a row value constructor is needed, typically in predicates.

- A **table subquery** returns one or more columns and multiple rows. A table subquery can be used whenever a table is needed, for example, as an operand for the IN predicate.


==The following rules apply to subqueries:==
1. The `ORDER BY` clause may not be used in a subquery (although it may be used in the outermost SELECT statement).
2. The subquery `SELECT` list must consist of a single column name or expression, except for subqueries that use the keyword `EXISTS`
3. By default, columnnames in a subquery refer to the table name in the `FROM` clause of the subquery. It is possible to refer to a table in a `FROM` clause of an outer query by qualifying the column name (see following).
4. When a subquery is one of the two operands involved in a comparison, the subquery must appear on the **right-hand** side of the comparison. For example, it would be **INCORRECT** to express the previous example as:
```sql
/*This is an incorrect example*/

SELECT staffNo, fName, IName, position, salary  
FROM Staff  
WHERE (SELECT AVG(salary) FROM Staff) < salary; 
```

### `IN`
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%205.24.34%20PM.png)


### `ANY`/`SOME` & `ALL`
The keywords ANY and `ALL` may be used with subqueries that produce a single column of numbers. 

- If the subquery is preceded by the keyword **`ALL`**, the condition will be true only if it is satisfied by all values produced by the subquery. 
- If the subquery is preceded by the keyword **`ANY`**, the condition will be true if it is satisfied by any (one or more) values produced by the subquery. 
- If the subquery is empty, the `ALL` condition returns true, the `ANY` condition returns false.

The ISO standard also allows the qualifier **`SOME`** to be used in place of **`ANY`**.



### `EXISTS` & `NOT EXISTS`



## 👉 Multi-table Queries



## 👉 Multi-queries Operations
### Combining Result Tables (`UNION`, `INTERSECT`, `EXCEPT`)




## Ref
[👍 50道SQL练习题 - 小黄在路上的文章 - 知乎]: https://zhuanlan.zhihu.com/p/32137597

