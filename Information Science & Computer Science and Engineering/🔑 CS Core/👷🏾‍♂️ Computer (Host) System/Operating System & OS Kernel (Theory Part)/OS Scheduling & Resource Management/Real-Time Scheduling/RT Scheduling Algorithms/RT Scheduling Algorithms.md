# RT Scheduling Algorithms

[TOC]



## Res
### Related Topics



## Intro


## Aperiodic RT Scheduling
![](../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%202.33.09%20PM.png)


### 1️⃣ Deadline Scheduling (EDF, Earliest Deadline First)
> ⚠ EDF is design for non-periodic jobs with soft deadlines, but it can handle both periodic /non-periodic jobs.



## Periodic RT Scheduling
### 2️⃣ Rate Monotonic Scheduling (RMS)
> ⚠ Rate monotonic scheduling is a scheduling algorithm for **periodic jobs with hard deadlines**, however it can handle both. 

For RMS, the highest-priority task is the one with the shortest period, the sec- ond highest-priority task is the one with the second shortest period, and so on. When more than one task is available for execution, the one with the shortest period is serviced first. If we plot the priority of tasks as a function of their rate, the result is a monotonically increasing function, hence the name “rate monotonic scheduling.”

![](../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%202.44.47%20PM.png)



## Ref

