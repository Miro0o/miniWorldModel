# Semaphore

[TOC]



## Res
### Related Topics



## Intro
> The first major advance in dealing with the problems of concurrent processes came in 1965 with Dijkstra’s treatise [DIJK65]. Dijkstra was concerned with the design of an OS as a collection of cooperating sequential processes, and with the development of efficient and reliable mechanisms for supporting cooperation. These mechanisms can just as readily be used by user processes if the processor and OS make the mechanisms available.

The fundamental principle is this: ==Two or more processes can cooperate by means of simple **signals**, such that a process can be forced to stop at a specified place until it has received a specific signal==. Any complex coordination requirement can be satisfied by the appropriate structure of signals. For signaling, special variables called **semaphores** are used. 
- To transmit a signal via semaphore s, a process executes the primitive `semSignal (s)`. 
- To receive a signal via semaphore s, a process executes the primitive `semWait (s)`; 

if the corresponding signal has not yet been transmitted, the process is **suspended** (blocked or busy waiting) until the transmission takes place.

> In Dijkstra’s original paper and in much of the literature, the letter **P** is used for `semWait` and the letter **V** for `semSignal`; these are the initials of the Dutch words for test (*proberen*) and increment (*verhogen*). In some of the literature, the terms *wait* and *signal* are used. This book uses `semWait` and `semSignal` for clarity, and to avoid confusion with similar wait and signal operations in monitors, discussed subsequently.


### Semaphore Definitions & Operations
To achieve the desired effect, we can view the semaphore as a variable that has an integer value upon which only three operations are defined:
1. A semaphore may be initialized to a nonnegative integer value.
2. The `semWait` operation decrements the semaphore value. If the value becomes negative, then the process executing the `semWait` is blocked. Otherwise, the process continues execution.
3. The `semSignal` operation increments the semaphore value. If the resulting value is less than or equal to zero, then a process blocked by a `semWait` operation, if any, is unblocked.

Other than these three operations, there is no way to inspect or manipulate semaphores.

We explain these operations as follows. 
1. To begin, the semaphore has a zero or positive value. 
	1. If the value is positive, that value equals the number of processes that can issue a wait and immediately continue to execute.
	2. If the value is zero, either by initialization or because a number of processes equal to the initial semaphore value have issued a wait, the next process to issue a wait is blocked, and the semaphore value goes negative. 
2. Each subsequent wait drives the semaphore value further into minus territory. The negative value equals the number of processes waiting to be unblocked. Each signal unblocks one of the waiting processes when the semaphore value is negative.

```c
// A difinition of semaphore primitives

struct semaphore { 
	int count;
	queueType queue; 
};

void semWait(semaphore s){     // Atomic operation !
	s.count--;
	if (s.count < 0) {
		/* place this process in s.queue */;
		/* block this process */;
    }
}

void semSignal(semaphore s){   // Atomic operation !
	s.count++;
	if (s.count<= 0) {
		/* remove a process P from s.queue */;
		/* place process P on ready list */;
	}
}
```


### Semaphore Characteristics
1. In general, there is no way to know before a process decrements a semaphore whether it will block or not.
2. After a process increments a semaphore and another process gets woken up, both processes continue running concurrently. There is no way to know which process, if either, will continue immediately on a uniprocessor system.
3. When you signal a semaphore, you don’t necessarily know whether another process is waiting, so the number of unblocked processes may be zero or one.



## Types of Semaphore
![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-11%20at%208.09.47%20PM.png)


1. Integral Semaphore (整型信号量)
> 不满足“让权等待”原则，会发生忙等。忙等就是占用CPU资源但是不使用CPU资源，这样会使CPU虽然空闲，但是无法分配给其他进程使用。

2. Record Semaphore（记录型信号量）
> 前一个进程释放一个资源就唤醒一个新的进程进行使用, 否则新进程自我阻塞，不会发生忙等。


### Binary Semaphore
↗ [Binary Semaphore](Binary%20Semaphore.md)

 > In principle, it should be easier to implement the binary semaphore, and it can be shown that it has the same expressive power as the general semaphore (see Problem 5.19). To contrast the two types of semaphores, the nonbinary semaphore is often referred to as either a **counting semaphore** or a **general semaphore**.


### Strong Semaphore & Week Semaphore
For both counting semaphores and binary semaphores, a **queue** is used to hold processes waiting on the semaphore. The question arises of the order in which processes are removed from such a queue. 

The fairest removal policy is **first-in-first-out (FIFO)**: The process that has been blocked the longest is released from the queue first; a semaphore whose definition includes this policy is called a **strong semaphore**. A semaphore that does not specify the order in which processes are removed from the queue is a **weak semaphore**.



## Semaphore Mechanism
> For both counting semaphores and binary semaphores, a queue is used to hold processes waiting on the semaphore. The question arises of the order in which processes are removed from such a queue.

![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%209.00.47%20AM.png)


### 🤔 Queue Scheduling (Replacement) Policies
↗ [OS Scheduling & Resource Management](../../../../../OS%20Scheduling%20&%20Resource%20Management/OS%20Scheduling%20&%20Resource%20Management.md)

#TODO 



## 🔥 Semaphore Solutions
![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-11%20at%208.14.49%20PM.png)


### 👉 Semaphore for Mutual Exclusion
![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%209.09.44%20AM.png)



### 👉 Semaphore for Synchronization (2 Processes)



### 👉 Semaphore for Synchronization with Precursors (N Processes)


### 👉 Semaphore for The Producer/Consumer Problem
#TODO 



## Semaphore Implementation
As was mentioned earlier, it is imperative that the `semWait` and `semSignal` operations be implemented as **atomic primitives**. 

1. One obvious way is to implement them in **hardware /firmware**, via special instructions ? (🤔 this seems to be different from what below discussed "hardware-supported scheme")
2. Failing this, a variety of schemes have been suggested. The essence of the problem is one of mutual exclusion: Only one process at a time may manipulate a semaphore with either a `semWait` or `semSignal` operation. Thus, any of the **software schemes**, such as **Dekker’s algorithm** or **Peterson’s algorithm**, could be used; this would entail a substantial processing overhead.

Another alternative is to use one of the **hardware-supported schemes** for mutual exclusion. For example, Figure 5.17 shows the use of a compare&swap instruction. In this implementation, the semaphore is again a structure, but now includes a new integer component, `s.flag`. Admittedly, this involves a form of busy waiting. However, the `semWait` and `semSignal` operations are relatively short, so the amount of busy waiting involved should be minor.

For a single-processor system, it is possible to inhibit interrupts for the duration of a `semWait` or `semSignal` operation, as suggested in Figure 5.17b. Once again, the relatively short duration of these operations means that this approach is reasonable.

![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%209.16.12%20AM.png)



## Ref
[👍 进程同步 进程互斥 软件和硬件实现方式 信号量机制 信号量机制实现进程同步，进程互斥，前驱关系 - 享受生活的文章 - 知乎]: https://zhuanlan.zhhttps://zhuanlan.zhihu.com/p/56159336ihu.com/p/56159336

下面是简单的概述：

用户进程可以通过使用操作系统提供的**一对原语**来对**信号量**进行操作，从而很方便的实现了进程互斥、进程同步。

**信号量**其实就是一个变量(**可以是一个整数，也可以是更复杂的记录型变量**)，可以用一个信号量来**表示系统中某种资源的数量**，比如:系统中只有一台打印机，就可以设置一个初值为1的信号量。

原语是一种特殊的程序段，其**执行只能一气呵成，不可被中断**。原语是由**关中断/开中断指令**实现的。软件解决方案的主要问题是由“进入区的各种操作无法一气呵成”，因此如果能把进入区、退出区的操作都用“原语”实现，使这些操作能“一气呵成”就能避免问题。

**一对原语:wait(S)原语和signal(S)原语**，可以把原语理解为我们自己写的函数，函数名分别为wait和signal,**括号里的信号量S**其实就是函数调用时传入的一个参数。

wait、signal 原语常**简称为P、V操作**(来自荷兰语proberen和verhogen)。因此，做题的时候常把wait(S)、signal(S) 两个操作分别写为**P(S)、V(S)**


[Semaphore | Wikipedia]: https://en.wikipedia.org/wiki/Semaphore_(programming)
