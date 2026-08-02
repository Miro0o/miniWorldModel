# OS Scheduling & Resource Management

[TOC]



## Res
### Related Topics
↗ [OS Processes & Automata Management (CPU + Main Memory Resource)](../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource).md)
- ↗ [System Calls](../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
↗ [Interrupts (Software & Hardware)](../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)

↗ [Task Management & Scheduling (Process & Threads)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/⭕️%20Task%20Management%20&%20Scheduling%20(Process%20&%20Threads)/Task%20Management%20&%20Scheduling%20(Process%20&%20Threads).md)
↗ [macOS Scheduling & Resource Management](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20Scheduling%20&%20Resource%20Management/macOS%20Scheduling%20&%20Resource%20Management.md)
↗ [UNIX Scheduling & Resource Management](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/UNIX%20Family/📌%20UNIX%20Kernel/UNIX%20Scheduling%20&%20Resource%20Management/UNIX%20Scheduling%20&%20Resource%20Management.md)

↗ [Cluster Scheduling & Orchestration](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/Cluster%20Scheduling%20&%20Orchestration/Cluster%20Scheduling%20&%20Orchestration.md)

↗ [Scheduling & Sequencing](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Rational%20Decision-Making/Mathematical%20Optimization%20(Programming)/Discrete%20&%20Combinatorial%20Optimization/Combinatorial%20&%20Network%20Optimization/Scheduling%20&%20Sequencing/Scheduling%20&%20Sequencing.md)


### Learning Resources
🎬【处理器调度 (RR, MLFQ 和 CFS；优先级翻转；多处理器调度) [南京大学2022操作系统-P20]】 https://www.bilibili.com/video/BV12a411Y7uW/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


### Other Resources



## Intro
In a multiprogramming system (↗ [Development(History) of Operating Systems](../🦺%20Operating%20System%20Basics/Development(History)%20of%20Operating%20Systems.md)), multiple processes exist concurrently in main memory. Each process alternates between using a processor and waiting for some event to occur, such as the completion of an I/O operation. The processor or processors are kept busy by executing one process while the others processes wait.

The key to multiprogramming is scheduling. 


### Resource-based Scheduling
↗ [Computer Resource (CPU + Memory) Scheduling](Computer%20Resource%20(CPU%20+%20Memory)%20Scheduling/Computer%20Resource%20(CPU%20+%20Memory)%20Scheduling.md)
↗ [IO Efficiency (via Scheduling & Buffering)](../OS%20IO%20System/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering)/IO%20Efficiency%20(via%20Scheduling%20&%20Buffering).md)

![](../../../../../Assets/Pics/Screenshot%202023-05-18%20at%202.21.32%20PM.png)

![](../../../../../Assets/Pics/Screenshot%202023-06-19%20at%204.20.29%20PM.png)


### Real-Time Scheduling
↗ [Real-Time Scheduling](Real-Time%20Scheduling/Real-Time%20Scheduling.md)
↗ [Real Time Communication (Protocol)](../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Real%20Time%20Communication%20(Protocol)/Real%20Time%20Communication%20(Protocol).md)
↗ [RTOS (Real-Time Operating System)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Operating%20Systems/🐎%20RTOS%20(Real-Time%20Operating%20System)/RTOS%20(Real-Time%20Operating%20System).md)



## Ref
