# Approaches to Deadlock

[TOC]



## Res
### Related Topics



## Intro


## 🎯 Deadlock Allowing (After Deadlock)
### 1️⃣ Ostrich Algorithm
> 🔗 https://en.wikipedia.org/wiki/Ostrich_algorithm



### 2️⃣ Deadlock Detection & Recovery
#### STEP\#1: Deadlock Detection
A common algorithm for deadlock detection is one described in [COFF71], which is designed to detect a deadlock by accounting for all possibilities of sequencing of the tasks that remain to be completed.

> The algorithm is skipped.


#### STEP\#2: Deadlock Recovery
1. **Abort all deadlocked processes**. This is, believe it or not, one of the most common, if not the most common, solutions adopted in operating systems
2. **Back up each deadlocked process to some previously defined checkpoint, and restart all processes**. This requires that rollback and restart mechanisms be built into the system. The risk in this approach is that the original deadlock may recur. However, the non-determinancy of concurrent processing may ensure that this does not happen.
3. **Successively abort deadlocked processes until deadlock no longer exists**. The order in which processes are selected for abortion should be on the basis of some criterion of minimum cost. After each abortion, the detection algorithm must be reinvoked to see whether deadlock still exists.
4. **Successively preempt resources until deadlock no longer exists**. As in(3), a cost-based selection should be used, and reinvocation of the detection algorithm is required after each preemption. A process that has a resource preempted from it must be rolled back to a point prior to its acquisition of that resource.


##### Selection Criteria
For (3) and (4), the selection criteria could be one of the following. Choose the process with the:
1. least amount of processor time consumed so far.  
2. least amount of output produced so far. 
3. most estimated time remaining.  
4. least total resources allocated so far.
5. lowest priority.

Some of these quantities are easier to measure than others. Estimated time remaining is particularly suspect. Also, other than by means of the priority measure, there is no indication of the “cost” to the user, as opposed to the cost to the system as a whole.


## 🎯 Deadlock Avoiding (Before Deadlock)
### 3️⃣ Deadlock Prevention (Static)
The strategy of deadlock prevention is, simply put, to design a system in such a way that the possibility of deadlock is excluded. We can view deadlock prevention methods as falling into two classes: 
1. An **indirect method** of deadlock prevention is to prevent the occurrence of one of the three necessary conditions previously listed (items 1 through 3).
2. A **direct method** of deadlock prevention is to prevent the occurrence of a circular wait (item 4). 


#### ❌ Mutual Exclusion
> **Mutual exclusion**: Only one process may use a resource at a time. No process may access a resource unit that has been allocated to another process.

In general, the first of the four listed conditions CANNOT be disallowed. If access to a resource requires mutual exclusion, then mutual exclusion must be supported by the OS. Some resources, such as files, may allow multiple accesses for reads but only exclusive access for writes. Even in this case, deadlock can occur if more than one process requires write permission.


#### 🙅‍♂️ Hold-and-Wait
> **Hold and wait**: A process may hold allocated resources while awaiting assign- ment of other resources

The hold-and-wait condition can be prevented by requiring that a process ==request all of its required resources at one time and blocking the process until all requests can be granted simultaneously.==

This approach is **inefficient** in three ways:
1. First, a process may be held up for a long time waiting for all of its resource requests to be filled, when in fact it could have proceeded with only some of the resources.
2. Second, resources allocated to a process may remain unused for a considerable period, during which time they are denied to other processes. Another problem is that a process may not know in advance all of the resources that it will require.
3. There is also the practical problem created by the use of modular programming or a multithreaded structure for an application. An application would need to be aware of all resources that will be requested at all levels or in all modules to make the simultaneous request.


#### 🤔 No Preemption
> **No preemption**: No resource can be forcibly removed from a process holding it.

This condition can be prevented in several ways. 
- First, if a process holding certain resources is denied a further request, that process must release its original resources and, if necessary, request them again together with the additional resource. 
- Alternatively, if a process requests a resource that is currently held by another process, the OS may preempt the second process and require it to release its resources. 

This latter scheme would prevent deadlock only if no two processes possessed the same priority.

==This approach is practical only when applied to resources whose state can be easily saved and restored later, as is the case with a processor.==


#### 🤔 Circular Wait
> **Circular wait**: A closed chain of processes exists, such that each process holds at least one resource needed by the next process in the chain.

The circular wait condition can be prevented by defining a **linear ordering of resource types**. If a process has been allocated resources of type R, then it may subsequently request only those resources of types following R in the ordering.

To see that this strategy works, let us associate an index with each resource type. Then resource $R_i$ precedes $R_j$ in the ordering if $i > j$. Now suppose two processes, A and B, are deadlocked because A has acquired $R_i$ and requested $R_j$, and B has acquired $R_j$ and requested $R_i$. This condition is impossible because it implies $i >j$ and $j > i$.

As with hold-and-wait prevention, circular wait prevention may be inefficient, unnecessarily slowing down processes and denying resource access.


### 4️⃣ Deadlock Avoidance (Dynamic)
Deadlock avoidance, on the other hand, allows the three necessary conditions but makes judicious choices to assure that the deadlock point is never reached. As such, avoidance allows more concurrency than prevention. With deadlock avoidance, a decision is made dynamically whether the current resource allocation request will, if granted, potentially lead to a deadlock. Deadlock avoidance thus requires knowledge of future process resource requests.

>  🤔 
>  The term avoidance is a bit confusing. In fact, one could consider the strategies discussed in this section to be examples of deadlock prevention because they indeed prevent the occurrence of a deadlock.

#### 4️⃣-1️⃣ Process Initiation Denial
Consider a system of n processes and m different types of resources. Let us define the following vectors and matrices:
![](../../../../../../../Assets/Pics/Screenshot%202023-04-13%20at%202.57.11%20PM.png)

The following relationships hold:
$$1. \ R_j = V_j + \sum{A_{ij}} \ , \ \forall j$$
$$2. \ C_{ij} <= R_{j} \ , \ \forall i, j$$
$$3. \ A_{ij} <= C_{ij} \ , \ \forall i,j$$

With these quantities defined, we can define a deadlock avoidance policy that refuses to start a new process if its resource requirements might lead to deadlock. Start a new process $P_n + 1$ only if
$$R_{ij} >= C_{(n+1)j} + \sum C_{ij} \ , \ \forall i,j$$

👉 That is, a process is only started if the maximum claim of all current processes plus those of the new process can be met. ==This strategy is hardly optimal, because it assumes the worst: that all processes will make their maximum claims together.==


#### 4️⃣-2️⃣ ⭐️ Resource Allocation Denial (RAD) (Banker’s Algorithm)
> 💡 **Etymology**
> 
> Dijkstra used the name Banker's Algorithm because of the analogy of this problem to one in banking, with customers who wish to borrow money corresponding to processes, and the money to be borrowed corresponding to resources. Stated as a banking problem, the bank has a limited reserve of money to lend and a list of customers, each with a line of credit. A customer may choose to borrow against the line of credit a portion at a time, and there is no guarantee that the customer will make any repayment until after having taken out the maximum amount of loan. The banker can refuse a loan to a customer if there is a risk that the bank will have insufficient funds to make further loans that will permit the customers to repay eventually.


##### STEP\#1: Determine Safe State
**State**: The state of the system reflects the current allocation of resources to processes. Thus, the state consists of the two vectors, Resource and Available, and the two matrices, Claim and Allocation, defined earlier. 

**Safe State**: A safe state is one in which there is at least one sequence of resource allocations to processes that does not result in a deadlock (i.e., all of the processes can be run to completion). An **unsafe state** is, of course, a state that is not safe.

> （1）系统在某一时刻的安全状态可能不唯一，但这不影响对系统安全性的判断。  
> （2）安全状态是非死锁状态，而不安全状态并不一定是死锁状态。即系统处于安全状态一定可以避免死锁，而系统处于不安全状态则仅仅可能进入死锁状态。这里不安全状态是指有死锁路径出现，但是是否走到这条路径上取决于系统的动态选择。

![](../../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%204.30.54%20PM.png)


##### STEP\#2: Decision-making
skipped.


##### 😭 Drawbacks of RAD/Banker's Algorithm
Deadlock avoidance has the advantage that it is not necessary to preempt and rollback processes, as in deadlock detection, and is less restrictive than deadlock prevention. However, it does have a number of restrictions on its use:
- The maximum resource requirement for each process must be stated in advance.
- The processes under consideration must be independent; that is, the order in which they execute must be unconstrained by any synchronization requirements.
- There must be a fixed number of resources to allocate.
- No process may exit while holding resources.

Deadlock prevention strategies are very conservative; they solve the problem of deadlock by limiting access to resources and by imposing restrictions on processes.

##### 🤔 Other Thoughts About Banker's Algorithm
![](../../../../../../../Assets/Pics/Screenshot%202023-06-20%20at%208.21.04%20PM.png)



## 🎯 An Integrated Deadlock Strategy
There are strengths and weaknesses to all of the strategies for dealing with deadlock. Rather than attempting to design an OS facility that employs only one of these strategies, it might be more efficient to use different strategies in different situations.


### [HOWA73] suggests one approach
- Group resources into a number of different resource classes.
- Use the linear ordering strategy defined previously for the prevention of circular wait to prevent deadlocks between resource classes.
- Within a resource class, use the algorithm that is most appropriate for that class.


As an example of this technique, consider the following classes of resources:
- **Swappable space**: Blocks of memory on secondary storage for use in swapping processes;
- **Process resources**: Assignable devices, such as tape drives, and files;
- **Main memory**: Assignable to processes in pages or segments; (CPU)
- **Internal resources**: Such as I/O channels;

The order of the preceding list represents the order in which resources are assigned. The order is a reasonable one, considering the sequence of steps that a process may follow during its lifetime. Within each class, the following strategies could be used:
- **Swappable space**: Prevention of deadlocks by requiring that all of the required resources that may be used be allocated at one time, as in the hold-and- wait prevention strategy. This strategy is reasonable if the maximum storage requirements are known, which is often the case. Deadlock avoidance is also a possibility.
- **Process resources**: Avoidance will often be effective in this category, because it is reasonable to expect processes to declare ahead of time the resources that they will require in this class. Prevention by means of resource ordering within this class is also possible.
- **Main memory:** Prevention by preemption appears to be the most appropriate strategy for main memory. When a process is preempted, it is simply swapped to secondary memory, freeing space to resolve the deadlock.
- **Internal resources**: Prevention by means of resource ordering can be used.



## Ref
[👍 操作系统——银行家算法（Banker's Algorithm）]: https://www.cnblogs.com/wkfvawl/p/11929508.html

[👍 操作系统——死锁的概念以及死锁处理策略]: https://www.cnblogs.com/wkfvawl/p/11598647.html

[Dekker’s algorithm in Process Synchronization | GeeksforGeeks]: https://www.geeksforgeeks.org/dekkers-algorithm-in-process-synchronization/
