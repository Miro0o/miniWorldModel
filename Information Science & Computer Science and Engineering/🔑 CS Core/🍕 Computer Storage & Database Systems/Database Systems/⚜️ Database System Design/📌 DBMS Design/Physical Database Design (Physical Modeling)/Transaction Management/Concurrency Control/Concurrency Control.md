# Concurrency Control

[TOC]



## Res
### Related Topics
↗ [Concurrent Programming](../../../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/Concurrent%20Programming.md)



## Intro
A major objective in developing a database is to enable many users to access shared data concurrently. Concurrent access is relatively easy if all users are only reading data, as there is no way that they can interfere with one another. However, when two or more users are accessing the database simultaneously and at least one is updating data, there may be interference that can result in inconsistencies.

This objective is similar to the objective of multi-user computer systems, which allow two or more programs (or transactions) to execute at the same time. 

In this way, the operations of the two transactions are **interleaved** to achieve concurrent execution. In addition, **throughput** -- the amount of work that is accomplished in a given time interval -- is improved as the CPU is executing other transactions instead of being in an idle state waiting for I/O operations to complete.


### The Need for Concurrency Control
However, although two transactions may be perfectly correct in themselves, the interleaving of operations in this way may produce an incorrect result, thus compromising the **integrity** and **consistency** of the database. 

#### 1️⃣ Lost Update Problem (During Job Updating)
> An apparently successfully completed update operation by one user can be overridden by another user.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-04%20at%203.54.18%20PM.png)
#### 2️⃣ Uncommitted Dependency (Dirty Read) Problem (During Job Updating)
> The uncommitted dependency problem occurs when one transaction is allowed to see the intermediate results of another transaction before it has committed.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-04%20at%203.56.40%20PM.png)
#### 3️⃣ Inconsistent Analysis (During Job Reading)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-04%20at%203.59.40%20PM.png)

4️⃣ Another problem can occur when a transaction T rereads a data item it has previously read but, in between, another transaction has modified it. Thus, T receives two different values for the same data item. This is sometimes referred to as a **non-repeatable** (or **fuzzy**) **read**. 

5️⃣ A similar problem can occur if transaction T executes a query that retrieves a set of tuples from a relation satisfying a certain predicate, re-executes the query at a later time, but finds that the retrieved set contains an additional (**phantom**) tuple that has been inserted by another transaction in the meantime. This is sometimes referred to as a **phantom read**.



## Serializability (Consistency) & Recoverability
> Before we discuss the main concurrency control techniques, we discuss some key concepts associated with serializability and recoverability of transactions.

↗ [Serializability and Recoverability](Serializability%20and%20Recoverability.md)



## Concurrency Control Techniques
↗ [Concurrency Control Techniques](Concurrency%20Control%20Techniques/Concurrency%20Control%20Techniques.md) 

1. Locking methods
	1. deadlock
2. Time-stamping methods



## Granularity of Data Items



## Ref

