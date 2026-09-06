# Monitors (管程)

[TOC]



## Res
### Related Topics



## Intro
> 由于信号量机制的缺点：进程自备同步操作，`P(S)`和`V(S)`操作大量分散在各个进程中，不易管理，易发生死锁。 
> 因此引入管程的概念，这是一种比信号量更高的抽象。或者说并没有这种实体存在于系统或编程语言中，更多的是一种机制，一种解决方法，但是编程语言和操作系统都提供了实现管程的重要部件 `条件变量`。
> 
> - 管程特点：管程封装了同步操作，对进程隐蔽了同步细节，简化了同步功能的调用界面。用户编写并发程序如同编写顺序(串行)程序。
> - ==目的：分离互斥和条件同步的关注==
> - 什么是管程：(实现原理：锁和条件变量)
> 	- 一个锁：指定临界区  
> 	- 0或者多个条件变量：等待通知信号量用于管理并发访问共享数据


Semaphores provide a primitive yet powerful and flexible tool for enforcing mutual exclusion and for coordinating processes. **However, it may be difficult to produce a correct program using semaphores.** The difficulty is that `semWait` and `semSignal` operations may be scattered throughout a program, and it is not easy to see the overall effect of these operations on the semaphores they affect.

The monitor is a **programming language construct** that provides equivalent functionality to that of semaphores and that is easier to control. 

The concept was first formally defined in [HOAR74]. 
- The monitor construct has been implemented in a number of programming languages, including Concurrent Pascal, Pascal-Plus, Modula-2, Modula-3, and Java. 
- It has also been implemented as a **program library**. This allows programmers to put a monitor lock on any object. 
- In particular, for something like a linked list, you may want to lock all linked lists with one lock, or have one lock for each list, or have one lock for each element of each list.



## 1️⃣ Monitors with Signal (Hoare's Monitor)
### Characteristics of Monitors 
A monitor is a **software module** consisting of one or more procedures, an initialization sequence, and local data.

The **chief characteristics** of a monitor are the following:
1. The local data variables are accessible only by the monitor’s procedures and not by any external procedure.
2. A process enters the monitor by invoking one of its procedures.
3. Only one process may be executing in the monitor at a time; any other processes that have invoked the monitor are blocked, waiting for the monitor to become available.

The first two characteristics are reminiscent of those for objects in object-oriented software. Indeed, an object-oriented OS or programming language can readily implement a monitor as an object with special characteristics.


### Condition Variables & Primitives in Monitor
A monitor supports synchronization by the use of **condition variables** that are contained within the monitor and **accessible only within the monitor**. Condition variables are a special data type in monitors, which are operated on by two functions:

- `cwait(c)`: Suspend execution of the calling process on condition c. The monitor is now available for use by another process.
- `csignal(c)`: Resume execution of some process blocked after a `cwait` on the same condition. If there are several such processes, choose one of them; if there is no such process, do nothing.

![|500](../../../../../../../../../Assets/Pics/Screenshot%202023-04-06%20at%202.02.38%20PM.png)


### Hoare's Monitor for Bounded-Buffer Producer/Consumer Problem
```c
/* program producerconsumer */
monitor boundedbuffer;  
char buffer [N];  
int nextin, nextout;
int count;  
cond notfull, notempty;

void append (char x)
{
	if (count == N) cwait(notfull); 
	buffer[nextin] = x;  
	nextin = (nextin + 1) % N;
	count++;
	/* one more item in buffer */
	csignal (notempty);
}

void take (char x) {
	if (count == 0) cwait(notempty);
	x = buffer[nextout];  
	nextout = (nextout + 1) % N); 
	count--;
	csignal (notfull);
}

{
/* monitor body */
/* buffer initially empty */
nextin = 0; nextout = 0; count = 0;
}
```

```c
void producer() {
	char x;
	while (true) {
		produce(x);
		append(x);  
	}

}  

void consumer() {
	char x;  
	while (true) { 
		take(x);
		consume(x);  
	}
}  

void main() {
	parbegin (producer, consumer);
}

```

### Semaphores 🆚 Monitors (Condition Variables)
As with semaphores, it is possible to make mistakes in the synchronization function of monitors. For example, if either of the `csignal` functions in the bounded-buffer monitor are omitted, then processes entering the corresponding condition queue are permanently hung up. 

The advantage that monitors have over semaphores is that all of the synchronization functions are confined to the monitor. Therefore, it is easier to verify that the synchronization has been done correctly and to detect bugs. Furthermore, once a monitor is correctly programmed, access to the protected resource is correct for access from all processes. In contrast, with semaphores, resource access is correct only if all of the processes that access the resource are programmed correctly.



## 2️⃣ Monitors with Notify and Broadcast
### Drawbacks in Hoare's Monitor
Hoare’s definition of monitors [HOAR74] requires that if there is at least one pro- cess in a condition queue, a process from that queue runs immediately when another process issues a `csignal` for that condition. Thus, the process issuing the `csignal` must either immediately exit the monitor or be blocked on the monitor.

There are two **drawbacks** to this approach:
1. If the process issuing the `csignal` has not finished with the monitor, then two additional process switches are required: one to block this process, and another to resume it when the monitor becomes available.
2. Process scheduling associated with a signal must be perfectly reliable. When a `csignal` is issued, a process from the corresponding condition queue must be activated immediately, and the scheduler must ensure that no other process enters the monitor before activation. Otherwise, the condition under which the process was activated could change. For example, in Figure 5.19, when a `csignal`( `notempty`) is issued, a process from the `notempty` queue must be activated before a new consumer enters the monitor. Another example: A producer process may append a character to an empty buffer then fail before signaling; any processes in the `notempty` queue would be permanently hung up.


### Lampson/ Redell Monitor
#TODO 



### Lampson/ Redell Monitor 🆚 Hoare Monitor
**Less error prone**
An advantage of Lampson/ Redell monitors over Hoare monitors is that the Lampson/ Redell approach is **less prone to error**. In the Lampson/ Redell approach, because each procedure checks the monitor variable after being signaled, with the use of the while construct, a process can signal or broadcast incorrectly without causing an error in the signaled program. The signaled program will check the relevant variable and, if the desired condition is not met, continue to wait.


**Modular implementation**
Another advantage of the Lampson/ Redell monitor is that it lends itself to a **more modular approach** to program construction. For example, consider the implementation of a buffer allocator. There are two levels of conditions to be satisfied for cooperating sequential processes:
1. Consistent data structures. Thus, the monitor enforces mutual exclusion and completes an input or output operation before allowing another operation on the buffer.
2. Level 1, plus enough memory for this process to complete its allocation request.

In the Hoare monitor, each signal conveys the level 1 condition but also carries the implicit message, “I have freed enough bytes for your particular allocate call to work now.” Thus, the signal implicitly carries the level 2 condition. If the programmer later changes the definition of the level 2 condition, it will be necessary to reprogram all signaling processes. If the programmer changes the assumptions made by any particular waiting process (i.e., waiting for a slightly different level 2 invariant), it may be necessary to reprogram all signaling processes. This is unmodular and likely to cause synchronization errors (e.g., wake up by mistake) when the code is modified. The programmer has to remember to modify all procedures in the monitor every time a small change is made to the level 2 condition. With a Lampson/ Redell monitor, a broadcast ensures the level 1 condition and carries a hint that level 2 might hold; each process should check the level 2 condition itself. If a change is made in the level 2 condition in either a waiter or a signaler, there is no possibility of erroneous wakeup because each procedure checks its own level 2 condition. Therefore, the level 2 condition can be hidden within each procedure. With the Hoare monitor, the level 2 condition must be carried from the waiter into the code of every signaling process, which violates data abstraction and interprocedural modularity principles.



## Ref
[👍 操作系统-进程互斥和同步]: https://mikeblog.top/2018/11/18/操作系统-进程互斥和同步-2018-11-18/

