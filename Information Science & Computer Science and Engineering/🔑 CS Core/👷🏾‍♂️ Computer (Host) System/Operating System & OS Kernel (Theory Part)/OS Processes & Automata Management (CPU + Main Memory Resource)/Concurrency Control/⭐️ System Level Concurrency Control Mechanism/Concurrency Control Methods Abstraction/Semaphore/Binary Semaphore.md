# Binary Semaphore

[TOC]



## Res
### Related Topics



## Intro
A more restricted version, known as the binary semaphore, is defined in Figure 5.7. A binary semaphore may only take on the values 0 and 1, and can be defined by the following three operations:

1. A binary semaphore may be initialized to 0 or 1.
2. The `semWaitB` operation checks the semaphore value. If the value is zero, then the process executing the `semWaitB` is blocked. If the value is one, then the value is changed to zero and the process continues execution.
3. The `semSignalB` operation checks to see if any processes are blocked on this semaphore (semaphore value equals 0). If so, then a process blocked by a `semWaitB` operation is unblocked. If no processes are blocked, then the value of the semaphore is set to one.

> In principle, it should be easier to implement the binary semaphore, and it can be shown that it has the same expressive power as the general semaphore (see Problem 5.19). To contrast the two types of semaphores, the nonbinary semaphore is often referred to as either a **counting semaphore** or a **general semaphore**.


### Binary Semaphore Primitives
```c
struct binary_semaphore {
	enum {zero, one} value;
	queueType queue;  
}

void semWaitB(binary_semaphore s){
	if (s.value == one) s.value = zero;
	else {
		/* place this process in s.queue */;
		/* block this process */;
	}
}; 

void semSignalB(semaphore s) {
	if (s.queue is empty()) s.value = one;
	else {
		/* remove a process P from s.queue */;
		/* place process P on ready list */;
	}
}
```


### Binary Semaphore 🆚 Mutex
A concept related to the binary semaphore is the **mutual exclusion lock (mutex)**. 

A mutex is a **programming flag** used to grab and release an object. When data are acquired that cannot be shared, or processing is started that cannot be performed simultaneously elsewhere in the system, the mutex is set to lock (typically zero), which blocks other attempts to use it. The mutex is set to unlock when the data are no longer needed or the routine is finished. 

👉 A key difference between the a mutex and a binary semaphore is that the process that locks the mutex (sets the value to zero) must be the one to unlock it (sets the value to 1). In contrast, it is possible for one process to lock a binary semaphore and for another to unlock it.




## Ref

