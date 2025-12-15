# Process Scheduling

[TOC]



## Res
### Related Topics



## Intro



## Scheduling Principles: Constraints & Objectives
Table 9.3 presents some summary information about the various scheduling policies that are examined in this subsection. The selection function determines which process, among ready processes, is selected next for execution. The function may be based on **priority**, **resource requirements**, or the **execution characteristics** of the process. In the latter case, three quantities are significant:
- w = time spent in system so far, waiting
- e = time spent in execution so far
- s = total service time required by the process, including e; 

generally, this quantity must be estimated or supplied by the user.
For example, the selection function max[w] indicates an FCFS discipline.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%203.13.48%20PM.png)


### 1️⃣ Decision Modes
The decision mode specifies the instants in time at which the selection function is exercised. There are two general categories.
#### Preemptive Scheduling
> **Preemptive**: The currently running process may be interrupted and moved to the Ready state by the OS. The decision to preempt may be performed when a new process arrives, when an interrupt occurs that places a blocked process in the Ready state, or periodically, based on a clock interrupt.
#### Non-preemptive Scheduling
> **Nonpreemptive**: In this case, once a process is in the Running state, it contin- ues to execute until (a) it terminates or (b) it blocks itself to wait for I/O or to request some OS service.


### 2️⃣ Performance Metrics
#### Single Job Perspective
##### Turnaround Time (TAT)
##### Response Time
##### Deadline (时限/截止时间)
- Hard DDL: time before which a job must conplete
- Soft DDL: time before which a job is preferred to complete (may come with penality for the timeover)
#### Batch Jobs Perspective
##### Throughput
Throughtput is measured as the number of completed jos/processes in a unit of time.
Average number of instructions per job affects throughput.
#### System Perspective
##### Resource Utilization
The time when the resource (processor or I/O) is busy in a unit of time. 


### 3️⃣ Fairness
#### Starvation
a process is admitted but never gets executed (and hence never terminates or completes)

Consequences: inefficiency and errors
- Unhappy users
- Wasted resoures
- Deadlock
#### Other Forms of Fairness
##### Proportional Fairness
resources allocated to a user/job/process is proportional to a weight value
##### Max-min Fairness
The minimal resource allocated to a user/job/process is maximized
##### Dominant Resource Fairness
fair sharing based on critical resources





## Ref

