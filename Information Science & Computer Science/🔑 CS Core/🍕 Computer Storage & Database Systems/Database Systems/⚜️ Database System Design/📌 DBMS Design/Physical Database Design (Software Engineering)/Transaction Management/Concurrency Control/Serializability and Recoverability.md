# Serializability and Recoverability

[TOC]



## Res



## Schedule
> **Schedule** A sequence of the operations by a set of concurrent transactions that preserves the order of the operations in each of the individual transactions.

A transaction comprises a sequence of operations consisting of read and/or write actions to the database, followed by a commit or abort action. A schedule S consists of a sequence of the operations from a set of n transactions T1, T2, . . . , Tn, subject to the constraint that the order of operations for each transaction is preserved in the schedule. Thus, for each transaction Ti in schedule S, the order of the operations in Ti must be the same in schedule S.

> **Serial Schedule** A schedule where the operations of each transaction are executed consecutively without any interleaved operations from other transactions.

> **Non-serial Schedule** A schedule where the operations from a set of concurrent transactions are interleaved.



## 🐍 DB Consistency & Serializability
### Conflicts of Consistency
The objective of a concurrency control protocol is to schedule transactions in such a way as to avoid any interference between them and hence prevent the types of problem described in the previous section. 

> One obvious solution is to allow only one transaction to execute at a time: one transaction is committed before the next transaction is allowed to begin. 

However, the aim of a multi-user DBMS is also to maximize the degree of concurrency or parallelism in the system, so that transactions that can execute without interfering with one another can run in parallel. 

> For example, transactions that access different parts of the database can be scheduled together without interference.

In this section, we examine serializability as a means of helping to identify those executions of transactions that are guaranteed to ensure **consistency** (Papadimitriou, 1979).


### Serializability & Serializable
Serial execution prevents inconsistency problems from occurring. No matter which serial schedule is chosen, serial execution never leaves the database in an inconsistent state, so **every serial execution is considered correct**, although different results may be produced. The objective of **serializability** is to find non-serial schedules that allow transactions to execute concurrently without interfering with one another, and thereby produce a database state that could be produced by a serial execution.

If a set of transactions executes concurrently, we say that the (non-serial) schedule is correct if it **produces the same result as some serial execution**. Such a schedule is called **serializable**. 

To prevent inconsistency from transactions interfering with one another, it is essential to guarantee serializability of concurrent transactions. In serializability, the ordering of read and write operations is important:
- If two transactions only **read** a data item, they do not conflict and order is not important.
- If two transactions **either read or write completely separate data items**, they do not conflict and order is not important.
- If one transaction **writes a data item and another either reads or writes the same data item**, the order of execution is important.


![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-04%20at%204.16.13%20PM.png)


#### Conflict Serializability
> A conflict serializable schedule orders any conflicting operations in the same way as some serial execution.


#### View Serializability




## Serializability Test
### Testing for Conflict Serializability & Precedence Graph

Under the **constrained write rule** (that is, a transaction updates a data item based on its old value, which is first read by the transaction), a **precedence (or serialization) graph** can be produced to test for conflict serializability.

For a schedule $S$, a precedence graph is a directed graph $G = (N, E)$ that consists of a set of nodes $N$ and a set of directed edges $E$, which is constructed as follows:
- Create a node for each transaction.
- Create a directed edge $T_i -> T_j$, if $T_j$ reads the value of an item written by $Ti$.
- Create a directed edge $T_i -> T_j$, if $T_j$ writes a value into an item after it has been read by $Ti$.
- Create a directed edge $T_i -> T_j$, if $T_j$ writes a value into an item after it has been written by $T_i$.

If an edge $T_i -> T_j$ exists in the precedence graph for $S$, then in any serial schedule $S'$ equivalent to $S$, $T_i$ must appear before $T_j$. If the precedence graph contains a cycle, the schedule is not conflict serializable.

![|600](../../../../../../../../../Assets/Pics/Screenshot%202023-06-04%20at%204.23.16%20PM.png)


### Testing for View Serializability & Precedence Graph



## 🚑 Recoverability
### Conflicts of Recoverability
Serializability identifies schedules that maintain the **consistency** of the database, assuming that none of the transactions in the schedule fails. 

An alternative perspective examines the **recoverability** of transactions within a schedule. 
- If a transaction fails, the **atomicity property** requires that we undo the effects of the transaction. 
- In addition, the **durability** property states that once a transaction commits, its changes cannot be undone (without running another, compensating, transaction). 


### Recoverability
> A schedule in which for each pair of transactions $T_i$ and $T_j$, if $T_j$ reads a data item previously written by $T_i$, then the commit operation of $T_i$ precedes the commit operation of $T_j$.




## Ref


