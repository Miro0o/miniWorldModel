# Computer Resource (CPU + Memory) Scheduling

[TOC]



## Res
### Related Topics
↗ [Interrupts (Software & Hardware)](../../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)


### Learning Resources
🎬【处理器调度 (RR, MLFQ 和 CFS；优先级翻转；多处理器调度) [南京大学2022操作系统-P20]】 https://www.bilibili.com/video/BV12a411Y7uW/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
![](../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%204.20.29%20PM.png)



## ⭐️ 3 Types in Computer Resource (CPU + Memory) Scheduling
![|400](../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%202.16.49%20PM.png)

> 假设一个进程就是一个赛季。球员就是可用资源。


### Long-Term Scheduling 
> **Long-term scheduling** is performed when a new process is created. This is a decision whether to add a new process to the set of processes that are currently active. (赛季大名单)

#TODO 


### Medium-Term Scheduling
> **Medium-term scheduling** is a part of the swapping function. This is a decision whether to add a process to those that are at least partially in main memory and therefore available for execution. (单场首发) 

Medium-term scheduling is part of the **swapping function**. 

> 💡 The issues involved are discussed in ↗ [Processes Description & Control](../../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/Processes%20Description%20&%20Control.md), ↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md), ↗ [Virtual Memory (OS Software Level)](../../OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md)

Typically, the swapping-in decision is based on the need to manage the degree of multiprogramming. On a system that does not use virtual memory, memory management is also an issue. Thus, the swapping-in decision will consider the memory requirements of the swapped-out processes.


### Short-Term Scheduling
> **Short-term scheduling** is the actual decision of which ready process to execute next. Figure 9.2 reorganizes the state transition diagram of Figure 3.9b to suggest the nesting of scheduling functions. (临场调整)

In terms of frequency of execution, the long-term scheduler executes relatively infrequently and makes the coarse-grained decision of whether or not to take on a new process, and which one to take. The medium-term scheduler is executed somewhat more frequently to make a swapping decision. The short-term scheduler, also known as the dispatcher, executes most frequently and makes the fine-grained decision of which process to execute next.

The short-term scheduler is invoked whenever an event occurs that may lead to the blocking of the current process, or that may provide an opportunity to preempt a currently running process in favor of another. Examples of such events include:

• Clock interrupts  
• I/O interrupts  
• Operating system calls  
• Signals (e.g., semaphores)


### ⭐️ Scheduling Maters!
Scheduling affects the performance of the system because it determines which processes will wait, and which will progress. This point of view is presented in Figure 9.3, which shows the queues involved in the state transitions of a process.1 Fundamentally, scheduling is a matter of managing queues to minimize queueing delay and to optimize performance in a queueing environment.

![](../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%202.22.57%20PM.png)



## Computer Resource Scheduling Basics
### Uniprocessor Scheduling
↗ [Uniprocessor Scheduling](Process%20Scheduling/Uniprocessor%20Scheduling/Uniprocessor%20Scheduling.md)


### Multiprocessor & Multicore Scheduling
↗ [Multiprocessor & Multicore Scheduling](Process%20Scheduling/Multiprocessor%20&%20Multicore%20Scheduling/Multiprocessor%20&%20Multicore%20Scheduling.md)



## Ref

