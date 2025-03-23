# Mutual Exclusive & Synchronization (互斥与同步)

[TOC]



## Res



## Intro
To achieve concurrency control, the key is to achieve **mutual exclusive**.

> **Mutual exclusive**: two process A & B mutual exclusively access a shared resource (critical resource)
> 
> **Synchronization**: two process A & B, being mutual exclusively accessing a shared resource, have sequential requirement in accessing & execution. 
>
> 互斥就是不同时访问；同步就是在不同时访问的基础上加入访问顺序的要求。同步可以看作是一种条件互斥。
> 
> 举个例子，有两个进程A 和B 并发访问临界资源C。在互斥的要求下，可以A先访问C，B再访问C，也可以B先访问C，A再访问C；但是在同步的要求下，只能是根据同步的要求，A先访问C，或B先访问，两种情况只有一个是合法的（具体哪个合法取决于同步的要求）
> 
> 同步可以看作是一种条件互斥，此时的互斥额外的条件是要满足时序要求。时序可以是逻辑上的（大象放入冰箱有三步），也可以是物理上的（系统的物理资源的分配）


The cases of synchronization are subset of cases of mutual exclusive. (同步的情况是互斥的情况的子集)



## ☯️ Mutual Exclusion
==The basic requirement for support of concurrent processes is the ability to enforce mutual exclusion;== that is, the ability to exclude all other processes from a course of action while one process is granted that ability.


### ⭐️ Mutual Exclusion: Requirements
Any facility or capability that is to provide support for mutual exclusion should meet the following requirements:
1. Mutual exclusion must be enforced: Only one process at a time is allowed into its critical section, among all processes that have critical sections for the same resource or shared object.
2. A process that halts in its noncritical section must do so without interfering with other processes.
3. It must not be possible for a process requiring access to a critical section to be delayed indefinitely: no deadlock or starvation.
4. When no process is in a critical section, any process that requests entry to its critical section must be permitted to enter without delay.
5. No assumptions are made about relative process speeds or number of processors.
6. A process remains inside its critical section for a finite time only.

> 1.空闲让进。临界区空闲时，可以允许一个请求进入临界区的进程立即进入临界区; 
>
> 2.忙则等待。当已有进程进入临界区时，其他试图进入临界区的进程必须等待;
> 
> 3.有限等待。对请求访问的进程，应保证能在有限时间内进入临界区(保证不会饥饿) ;
> 
> 4.让权等待。当进程不能进入临界区时，应立即释放处理机，防止进程**忙等待**（即进程处于等待状态却一直占用着处理机）。


### Mutual Exclusion: Approaches
1. One approach is to leave the responsibility with the processes that wish to execute concurrently. (**process self-discretion**)
2. A second approach involves the use of special-purpose machine instructions. (**hardware level**)
3. A third approach is to provide some level of support within the OS or a programming language. (**system software level**)
#### 👉 Process Self-discretion
![](../../../../../../../Assets/Pics/Screenshot%202023-06-11%20at%207.57.48%20PM.png)
##### 1️⃣ Dekker’s Algorithm
```c
bool flag[2];
int turn;

void P0(){
	while(true){
		flag[0] = 1;
		while(flag[1]){
			if(turn){
				flag[0] = 0;
				while(turn);
				flag[0] = 1;
			}
		}
		/* critical resource using ... */
		turn = 1;
		flag[0] = 0;
	}
}

void P1(){
		flag[1] = 1;
		while(flag[0]){
			if(!turn){
				flag[1] = 0;
				while(turn);
				flag[1] = 1;
			}
		}
		/* critical resource using ... */
		turn = 0;
		flag[1] = 0;

}

void main(){
	flag[1] = 0;
	flag[0] =1;
	parbegin(P1, P0);
}

```
##### 2️⃣ Peterson’s Algorithm
```c
bool flag[2];
int turn;

void P0(){
	while(true){
		//P0 claim it want to use critical resource
		flag[0] = 1;
		
		// but P0 handle critical resource to P1, see what happen
		turn = 1;
		
		// if P1 is using critical resource, P0 waits
		while(flag[1] && turn);
		
		/* critical operation .... */
		
		// P0 claim it finished holding critical resource
		flag [0] = 0;
		
		/* remainder operation ... */
	}
}

void P1(){
	while(true){
		//P1 claim it want to use critical resource
		flag[1] = 1;
		
		// but P1 handle critical resource to P0, see what happen
		turn = 0;
		
		// if P0 is using critical resource, P1 waits
		while(flag[0] && !turn);
		
		/* critical operation .... */
		
		// P1 claim it finished holding critical resource
		flag [1] = 0;
		
		/* remainder operation ... */
		
	}
}

void main(){
	flag[0] = 0;
	flag[1] = 0;
	parbegin(P0, P1);
}
```
#### 👉 Hardware Level Approaches
![](../../../../../../../Assets/Pics/Screenshot%202023-06-11%20at%207.59.00%20PM.png)
##### 1️⃣ Interrupt Disabling (Interrupt Mask)
In a uniprocessor system, concurrent processes cannot have overlapped execution; they can only be interleaved. Furthermore, a process will continue to run until it invokes an OS service or until it is interrupted. Therefore, to guarantee mutual exclusion, it is sufficient to prevent a process from being interrupted. This capability can be provided in the form of primitives defined by the OS kernel for disabling and enabling interrupts.

```c
while (true) {  
	/* disable interrupts */;
	/* critical section */; 
	/* enable interrupts */; 
	/* remainder */;
}
```

Because the critical section cannot be interrupted, mutual exclusion is guaranteed. The price of this approach, however, is high. 
- The **efficiency** of execution could be noticeably degraded because the processor is limited in its ability to interleave processes. 
- Another problem is that this approach will **not work in a multiprocessor architecture**. When the computer includes more than one processor, it is possible (and typical) for more than one process to be executing at a time. In this case, disabled interrupts do not guarantee mutual exclusion.
##### 2️⃣ Special Machine Instructions (Busy Waiting/ Spin Waiting)
###### TestAndSet(TS) / TestAndSetLock(TSL)

###### (Compare &) Swap / Exchange / XCHG

The compare&swap instruction, also called a compare and exchange instruction, can be defined as follows [HERL90]:
```c
int compare_and_swap (int *word, int testval, int newval) {

int oldval;  
oldval = *word  
if (oldval == testval) *word = newval; return oldval;

}
```
![](../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%209.27.15%20AM.png)

The exchange instruction can be defined as follows:
```c
void exchange (int *register, int *memory) {

int temp;  
temp = *memory; *memory = *register; *register = temp;

}
```

> 如果觉得进程自旋忙等浪费`CPU`性能，而且临界区执行时间较长，那可以通过上下文切换，使得等待进程进入阻塞睡眠，当临界区进程执行完，再进行唤醒。是采用忙等还是进行上下文切换让进程进入睡眠，需要看一下临界区执行时间是否很长，如果执行时间长，则让进程进入睡眠。如果临界区执行时间很短，反而上下文切换对`CPU`损耗时间更长，则采用忙等。
###### 🤔 Properties of Special Machine Instructions Approaches

The use of a special machine instruction to enforce mutual exclusion has a number of advantages:
- It is applicable to any number of processes on either a single processor or multiple processors sharing main memory.
- It is simple and therefore easy to verify.
- It can be used to support multiple critical sections; each critical section can be defined by its own variable. 

However, there are some serious disadvantages:
- **Busy waiting** is employed: Thus, while a process is waiting for access to a critical section, it continues to consume processor time.
- **Starvation** is possible: When a process leaves a critical section and more than one process is waiting, the selection of a waiting process is arbitrary. Thus, some process could indefinitely be denied access.
- **Deadlock** is possible: Consider the following scenario on a single-processor system. Process P1 executes the special instruction (e.g., compare&swap, exchange) and enters its critical section. P1 is then interrupted to give the processor to P2, which has higher priority. If P2 now attempts to use the same resource as P1, it will be denied access because of the mutual exclusion mechanism. Thus, it will go into a busy waiting loop. However, P1 will never be dispatched because it is of lower priority than another ready process, P2.

Because of the drawbacks of both the software and hardware solutions, we need to look for other mechanisms.
#### 👉 OS /Programming Language Level Approaches
> 回顾之前的方案，他们有什么问题？
> - 在双标志先检查法中，进入区的“检查”、“上锁”操作无法一气呵成，从而导致了两个进程有可能同时进入临界区的问题;
> - ==所有的解决方案都无法实现“让权等待”==
> 
> 1965年，荷兰学者Diikstra提出了一种卓有成效的实现进程互斥、同步的方法 -- 信号量机制（迪杰斯特拉最短路径算法）

↗ [System Level Concurrency Control Mechanism](⭐️%20System%20Level%20Concurrency%20Control%20Mechanism/System%20Level%20Concurrency%20Control%20Mechanism.md)

![](../../../../../../../../Assets/Pics/Screenshot%202023-04-06%20at%201.50.54%20PM.png)



## ⌚️ Synchronization
> **同步**亦称**直接制约关系**，它是指为完成某种任务而建立的两个或多个进程，这些进程因为需要在某些位置上**协调它们的工作次序**而产生的**制约关系**，进程间的直接制约关系就是源于它们之间的**相互合作**。




## Ref
[👍 操作系统-进程互斥和同步]: https://mikeblog.top/2018/11/18/操作系统-进程互斥和同步-2018-11-18/
[👍 进程同步 进程互斥 软件和硬件实现方式 信号量机制 信号量机制实现进程同步，进程互斥，前驱关系 - 享受生活的文章 - 知乎]: https://zhuanlan.zhihu.com/p/56159336

[2.3、进程同步 | 王道考研操作系统知识点整理]: https://wizardforcel.gitbooks.io/wangdaokaoyan-os/content/9.html
