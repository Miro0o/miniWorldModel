# Transaction Management

[TOC]


## Res


## Intro
### Definition of Transaction 
> 💡 **Transaction:** An action, or series of actions, carried out by a single user or application program, that reads or updates the contents of the database.

A transaction is treated as **a logical unit of work** on the database.

A transaction should always transform the database **from one consistent state to another**, although we accept that consistency may be violated while the transaction is in progress. 


### Actions of Transaction
A transaction can have one of two outcomes. 
- If it completes successfully, the transaction is said to have **committed** and the database reaches a new consistent state. 
- On the other hand, if the transaction does not execute successfully, the transaction is **aborted**.
- If a transaction is aborted, the database must be restored to the consistent state it was in before the transaction started. Such a transaction is **rolled back** or **undone**. 

==A committed transaction cannot be aborted==. If we decide that the committed transaction was a mistake, we must perform another **compensating transaction** to reverse its effects. However, an aborted transaction that is rolled back can be restarted later and, depending on the cause of the failure, may successfully execute and commit at that time.


### Declaration of Transactions 
The DBMS has no inherent way of knowing which updates are grouped together to form a single logical transaction. It must therefore provide a method to allow the user to indicate the boundaries of a transaction. 

The keywords **`BEGIN TRANSACTION`**, **`COMMIT`**, and **`ROLLBACK`** (or their equivalents) are available in many data manipulation languages to delimit transactions. 

If these delimiters are not used, the entire program is usually regarded as a single transaction, with the DBMS automatically performing a `COMMIT` when the program terminates correctly and a `ROLLBACK` if it does not.


### States in Transaction
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-21%20at%207.00.25%20PM.png)

Note that in addition to the obvious states of **`ACTIVE`**, **`COMMITTED`**, and **`ABORTED`**, there are two other states:
- **`PARTIALLY COMMITTED`**, which occurs after the final statement has been executed. At this point, it may be found that the transaction has violated serializability or has violated an integrity constraint and the transaction has to be aborted. Alternatively, the system may fail and any data updated by the transaction may not have been safely recorded on secondary storage. In such cases, the transaction would go into the **`FAILED`** state and would have to be **`ABORTRED`**. If the transaction has been successful, any updates can be safely recorded and the transaction can go to the **`COMMITTED`** state.

- **`FAILED`**, which occurs if the transaction cannot be committed or the transaction is aborted while in the ACTIVE state, perhaps due to the user aborting the


### 🧬 ACID Properties of Transactions
There are properties that all transactions should possess. The four basic, or so-called **ACID**, properties that define a transaction are (Haerder and Reuter, 1983):

• **Atomicity**. The “all or nothing” property. A transaction is an indivisible unit that is either performed in its entirety or is not performed at all. **It is the responsibility of the recovery subsystem of the DBMS to ensure atomicity.**

• **Consistency**. A transaction must transform the database from one consistent state to another consistent state. **It is the responsibility of both the DBMS and the application developers to ensure consistency.** The DBMS can ensure consistency by enforcing all the constraints that have been specified on the database schema, such as integrity constraints. However, in itself this is insufficient to ensure consistency. For example, suppose that we have a transaction that is intended to transfer money from one bank account to another and the programmer makes an error in the transaction logic and debits one account but credits the wrong account; then the database is in an inconsistent state. However, the DBMS would not have been responsible for introducing this inconsistency and would have had no ability to detect the error.

• **Isolation**. Transactions execute independently of one another. In other words, the partial effects of incomplete transactions should not be visible to other transactions. **It is the responsibility of the concurrency control subsystem to ensure isolation**.

• **Durability**. The effects of a successfully completed (committed) transaction are permanently recorded in the database and must not be lost because of a subsequent failure. **It is the responsibility of the recovery subsystem to ensure durability**.



## Database Transaction Subsystem
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-21%20at%207.17.05%20PM.png)
<small>DBMS transaction subsystem.</small>

One way to improve database performance is to ask it to do less work by moving some of its functions to specialized software. ﻿﻿Transaction management is one component that is often partitioned from the core database system.

Transaction managers are especially important when the transactions involve more than one physical database.
None of the participating databases can be responsible for the integrity of their peer databases, but an external transaction manager can keep all of them in synch.


- The **transaction manager** coordinates transactions on behalf of application programs. 

- Transaction manager communicates with the **scheduler**, the module responsible for implementing a particular strategy for concurrency control. The scheduler is sometimes referred to as the **lock manager** if the concurrency control protocol is **locking-based**. The objective of the scheduler is to maximize concurrency without allowing concurrently executing transactions to interfere with one another, and so compromise the integrity or consistency of the database.

- If a failure occurs during the transaction, then the database could be inconsistent. It is the task of the **recovery manager** to ensure that the database is restored to the state it was in before the start of the transaction, and therefore a consistent state. 

- Finally, the **buffer manager** is responsible for the efficient transfer of data between disk storage and main memory.



### CICS
• One of the earliest and most successful transaction managers was IBM's Customer Information and Control System (CICS, 顾客信息与控制系统).

• CICS can manage transaction processing between thousands of Internet users and large host systems.


## Ref
[👍 数据库事务中调度串行化、冲突可串行化、前趋图(优先图) | CSDN]: https://blog.csdn.net/J080624/article/details/84946940

