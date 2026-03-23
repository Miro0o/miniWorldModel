# OS Scheduling & Resource Management

[TOC]



## Res
### Related Topics
↗ [System Calls](../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
↗ [Interrupts (Software & Hardware)](../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)


### Learning Resources
🎬【处理器调度 (RR, MLFQ 和 CFS；优先级翻转；多处理器调度) [南京大学2022操作系统-P20]】 https://www.bilibili.com/video/BV12a411Y7uW/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
In a multiprogramming system, multiple processes exist concurrently in main memory. Each process alternates between using a processor and waiting for some event to occur, such as the completion of an I/O operation. The processor or processors are kept busy by executing one process while the others processes wait.

The key to multiprogramming is scheduling. There are 4 types of scheduling summarized below. 


### Resource-based Scheduling Types
![](../../../../../Assets/Pics/Screenshot%202023-05-18%20at%202.21.32%20PM.png)

![](../../../../../Assets/Pics/Screenshot%202023-06-19%20at%204.20.29%20PM.png)
#### 1️⃣ Scheduling of Computer Resources (CPU + Memory)
↗ [Computer Resource (CPU + Memory) Scheduling](Computer%20Resource%20(CPU%20+%20Memory)%20Scheduling/Computer%20Resource%20(CPU%20+%20Memory)%20Scheduling.md)
#### 2️⃣ Scheduling of I/O Resources
↗ [IO Efficiency (via Scheduling & Buffering)](../OS%20IO%20System/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering)/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering).md)


### Real-Time Scheduling
↗ [Real-Time Scheduling](Real-Time%20Scheduling/Real-Time%20Scheduling.md)



## Ref

