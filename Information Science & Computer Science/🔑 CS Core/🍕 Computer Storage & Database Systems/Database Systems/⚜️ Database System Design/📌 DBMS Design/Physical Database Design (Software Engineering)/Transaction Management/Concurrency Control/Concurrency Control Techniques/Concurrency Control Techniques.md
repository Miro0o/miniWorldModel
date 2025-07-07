# Concurrency COntrol Techniques

[TOC]



## Res


## Intro
Serializability can be achieved in several ways; however, the two main concurrency control techniques that allow transactions to execute safely in parallel subject to certain constraints are called **locking** and **time-stamping**. 

👉 Locking and time-stamping are **conservative** (or **pessimistic**) approaches in that they cause transactions to be delayed in case they conflict with other transactions at some time in the future. 

👉 **Optimistic** methods, as you will see later, are based on the premise that conflict is rare, so they allow transactions to proceed unsynchronized and check for conflicts only at the end, when a transaction commits. We discuss locking, timestamping, and optimistic concurrency control techniques in the following sections.



## Comparison of Methods

![](../../../../../../../../../../Assets/Pics/Screenshot%202023-05-22%20at%209.22.29%20AM.png)

Figure 22.22 illustrates the relationship between **conflict serializability (CS)**, **view serializability (VS)**, **two-phase locking (2PL)**, and **timestamping (TS)**. As can be seen, view serializability encompasses the other three methods, conflict serializability encompasses 2PL and timestamping, and 2PL and timestamping overlap. Note that in the last case that there are schedules common to both 2PL and time-stamping, but there are also schedules that can be produced by 2PL but not time-stamping, and vice versa.



## Ref

