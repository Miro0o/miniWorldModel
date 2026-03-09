# Basic Process Scheduling Algorithm for Uniprocessor

[TOC]



## Res
### Related Topics
↗ [(Formal) Model Checking](../../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/🧳%20(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)


### Learning Resources
🎬【处理器调度 (RR, MLFQ 和 CFS；优先级翻转；多处理器调度) [南京大学2022操作系统-P20]】 https://www.bilibili.com/video/BV12a411Y7uW/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro



## ⭐️ Scheduling Algorithms
### Scheduling Algorithms Overview
#### Characteristics of Various Scheduling Policies
![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%202.36.09%20PM.png)
#### Priority Scheduling
↗ [Priority Scheduling](Priority%20Scheduling.md)



## 🎯 Non-preemptive Scheduling Algorithms
### 1️⃣ FCFS /FIFO
The simplest scheduling policy is first-come-first- served (FCFS), also known as first-in, first-out (FIFO) or a strict queueing scheme. As each process becomes ready, it joins the ready queue. When the currently running process ceases to execute, the process that has been in the ready queue the longest is selected for running.


### 2️⃣ SPN (Shortest Process Next) /SJF ()
#### EW


### 3️⃣ HRRN (Highest Response Ratio Next)
#### Response Ratio



## 🎯 Preemptive Scheduling Algorithms
### 4️⃣ RR (Round Robin), Time Slicing

> ⚠ Next job enter into cpu before the current job fully exit

With round robin, the principal design issue is the **length of the time quantum**, or **slice**, to be used. If the quantum is very short, then short processes will move through the system relatively quickly. On the other hand, there is processing over- head involved in handling the clock interrupt and performing the scheduling and dispatching function. Thus, very short time quanta should be avoided. One useful guide is that the time quantum should be slightly greater than the time required for a typical interaction or process function. If it is less, then most processes will require at least two time quanta. Figure 9.6 illustrates the effect this has on response time. Note in the limiting case of a time quantum that is longer than the longest-running process, round robin degenerates to FCFS.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%204.08.21%20PM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%204.13.03%20PM.png)


### 5️⃣ SRT (Shortest Remaining Time)
> May be viewed as the preemptive version of SPN


### 6️⃣ Multi-Level Feedback Queue, Feedback (MLFQ)
- no prior knowledge about the execution time of process
- adsf
- adsf

![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%204.13.47%20PM.png)

MLFQ is biased against long process
- approach 1
- approach 2



## Scheduling Algorithms Review
### A Comparison of Scheduling Policies

| Process | Arrival Time | Service Time |
| - | - | - |
| A | 0 | 3 |
| B | 2 | 6 |
| C | 4 | 4 |
| D | 6 | 5 |
| E | 8 | 2 |

![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%202.41.22%20PM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%203.22.49%20PM.png)



## Ref
[高响应比优先调度算法（HRRN）例题详解 | CSDN]: https://blog.csdn.net/weixin_43347550/article/details/105096046

