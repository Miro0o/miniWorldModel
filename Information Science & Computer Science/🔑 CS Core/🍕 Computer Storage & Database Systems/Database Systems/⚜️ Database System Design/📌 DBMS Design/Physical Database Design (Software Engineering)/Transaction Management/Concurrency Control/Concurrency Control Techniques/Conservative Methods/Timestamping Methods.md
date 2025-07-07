# Timestamping Methods

[TOC]



## Res



## Intro
The use of **locks**, combined with the **two-phase locking protocol**, guarantees serializability of schedules. The order of transactions in the equivalent serial schedule is based on the order in which the transactions lock the items they require. If a transaction needs an item that is already locked, it may be forced to wait until the item is released. (Thus occurs deadlocks)

A different approach that also guarantees serializability uses transaction **timestamps** to order transaction execution for an equivalent serial schedule.

Timestamp methods for concurrency control are quite different from locking methods. **No locks are involved and therefore there can be no deadlock.** Locking methods generally prevent conflicts by making transactions wait. With timestamp methods, there is no waiting: transactions involved in conflict are simply rolled back and restarted.

> 👉 **Timestamp** 
> A unique identifier created by the DBMS that indicates the relative starting time of a transaction.

> 👉 **Timestamping**
> A concurrency control protocol that orders transactions in such a way that older transactions, transactions with smaller timestamps, get priority in the event of conflict.

> 👉 In addition to timestamps for transactions, there are timestamps for data items. Each data item contains a **read_timestamp**, giving the timestamp of the last transaction to read the item, and a **write_timestamp**, giving the timestamp of the last transaction to write (update) the item.

With timestamping, if a transaction attempts to read or write a data item, ==then the read or write is only allowed to proceed if the last update on that data item was carried out by an **older transaction**.== Otherwise, the transaction requesting the read/ write is restarted and given a new timestamp. New timestamps must be assigned to restarted transactions to prevent their being continually aborted and restarted. Without new timestamps, a transaction with an old timestamp might not be able to commit owing to younger transactions having already committed.



## Time-stamping Method Rules
### Basic Timestamp Ordering
(1) Transaction T issues a **read(x)**.
- Transaction T asks to read an item (x) that has already been updated by a younger (later) transaction, that is, **`ts(T) < write_timestamp(x)`**. This means that an earlier transaction is trying to read a value of an item that has been updated by a later transaction. The earlier transaction is too late to read the previous outdated value, and any other values it has acquired are likely to be inconsistent with the updated value of the data item. In this situation, transaction T must be aborted and restarted with a new (later) timestamp.
- Otherwise, **`ts(T) >= write_timestamp(x)`**, and the read operation can proceed. We set `read_timestamp(x) = max(ts(T), read_timestamp(x))`.


(2) Transaction T issues a **write(x)**.
- Transaction T asks to write an item (x) whose value has already been read by a younger transaction, that is **`ts(T) < read_timestamp(x)`**. This means that a later transaction is already using the current value of the item and it would be an error to update it now. This occurs when a transaction is late in doing a write and a younger transaction has already read the old value or written a new one. In this case, the only solution is to roll back transaction T and restart it using a later timestamp.
- Transaction T asks to write an item (x) whose value has already been written by a younger transaction, that is **`ts(T) < write_timestamp(x)`**. This means that transaction T is attempting to write an obsolete value of data item x. Transaction T should be rolled back and restarted using a later timestamp.
- Otherwise, the write operation can proceed. We set `write_timestamp(x) = ts(T)`.

| T (ts(T)) | data (x) | operation|
| - | - | - |
| read | R - younger (ts(T) < read_timestamp(x)) | Null |
| read | W - younger (ts(T) < write_timestamp(x)) | restart |
| write | R - younger (ts(T) < read_timestamp(x))| restart | 
| write | W - younger (ts(T) < write)timestamp(x))| ignore | 


This scheme, called **basic timestamp ordering**, guarantees that transactions are **conflict serializable**, and the results are equivalent to a serial schedule in which the transactions are executed in chronological order of the timestamps. In other words, the results will be as if all of transaction 1 were executed, then all of transaction 2, and so on, with no interleaving.

==However, basic timestamp ordering does not guarantee recoverable schedules.== Before we show how these rules can be used to generate a schedule using time-stamping, we first examine a slight variation to this protocol that provides greater concurrency.


### Thomas’s write rule
A modification to the basic timestamp ordering protocol that relaxes conflict serializability can be used to provide greater concurrency by rejecting obsolete write operations (Thomas, 1979). The extension, known as Thomas’s write rule, modi- fies the checks for a write operation by transaction T as follows:

- Transaction T asks to write an item (x) whose value has already been read by a younger transaction, that is, ts(T) , read_timestamp(x). As before, roll back transaction T and restart it using a later timestamp.

- Transaction T asks to write an item (x) whose value has already been written by a younger transaction, that is ts(T) , write_timestamp(x). This means that a later transaction has already updated the value of the item, and the value that the older transaction is writing must be based on an obsolete value of the item. In this case, the write operation can safely be ignored. This is sometimes known as the ignore obsolete write rule, and allows greater concurrency.  

- Otherwise, as before, the write operation can proceed. We set `write_timestamp(x) = ts(T)`.

The use of **Thomas’s write rule** allows schedules to be generated that would not have been possible under the other concurrency protocols discussed in this sec- tion. For example, the schedule shown in Figure 22.10 is not conflict serializable: the write operation on balx by transaction T11 following the write by T12 would be rejected, and T11 would need to be rolled back and restarted with a new time-stamp. In contrast, using Thomas’s write rule this view serializable schedule would be valid without requiring any transactions to be rolled back.

We examine another timestamping protocol that is based on the existence of multiple versions of each data item in the next section.


## Multiversion Timestamp Ordering
#TODO 





## Ref

