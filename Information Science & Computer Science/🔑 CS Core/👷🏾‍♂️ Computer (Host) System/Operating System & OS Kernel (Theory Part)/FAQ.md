# FAQ

[TOC]



## 👉 Difference Between Mutual Exclusion and Synchronization
#mutual_exclusion #OS_Kernel #synchronization
**Mutual exclusion** means that only a single thread should be able to access the shared resource at any given point of time. This avoids the race conditions between threads acquireing the resource. Monitors and Locks provide the functionality to do so. 

**Synchronization** means that you synchronize/order the access of multiple threads to the shared resource.  
Consider the example:  
If you have two threads, `Thread 1` & `Thread 2`.  
`Thread 1` and `Thread 2` execute in parallel but before `Thread 1` can execute say a statement `A` in its sequence it is a must that `Thread 2` should execute a statement `B` in its sequence. What you need here is synchronization. A semaphore provides that. You put a semapohore wait before the statement `A` in `Thread 1` and you post to the semaphore after statement `B` in `Thread 2`.  
This ensures the synchronization you need.

[Difference Between Mutual Exclusion and Synchronization | stackoverflow]: https://stackoverflow.com/a/10101247/16542494



## 👉 System V IPC & Posix IPC
#System_V #Posix #IPC #OS_Kernel 

Both have the same basic tools -- semaphores, shared memory and message queues. They offer a slightly different interface to those tools, but the basic concepts are the same. One notable difference is that POSIX offers some notification features for message queues that Sys V does not. (See `mq_notify()`.)

Sys V IPC has been around for longer which has a couple of practical implications --

First, POSIX IPC is less widely implemented. I wrote a Python wrapper for POSIX IPC and [its documentation lists what I know about POSIX IPC implementations on various platforms](http://semanchuk.com/philip/posix_ipc/#platforms).

On all of the platforms listed in that documentation, Sys V IPC is completely implemented AFAIK, whereas you can see the POSIX IPC is not.

The second implication of their relative age is that POSIX IPC was designed after Sys V IPC had been used for a while. Therefore, the designers of the POSIX API were able to learn from the strengths and weaknesses of the Sys V API. As a result the POSIX API is simpler and easier to use IMO, and I recommend it over the Sys V API. 

I should note that I've never run any performance tests to compare the two. I would think that the older API (Sys V) would have had more time to be performance tuned, but that's just speculation which is of course no substitute for real-world testing.

As to why there are two standards -- POSIX created their standard because they thought it was an improvement on the Sys V standard. But if everyone agreed that POSIX IPC is better, many many many programs still use Sys V IPC and it would take years to port them all to POSIX IPC. In practice, it would not be worth the effort so even if all new code used POSIX IPC as of tomorrow, Sys V IPC would stick around for many years. 

We can't tell you which you should use without knowing a lot more about what you intend to do, but the answers you have here should give you enough information to decide on your own.


[System V IPC vs Posix IPC | stackoverflow]: https://stackoverflow.com/a/4589898/16542494



## 👉 UNIX Domain vs BSD vs TCP vs Internet sockets?
#UNIX_Domain #BSD #TCP #Internet_socket #OS_Kernel 

A socket is an abstraction. The tag definition used on SO for a socket is as good as any:

> An endpoint of a bidirectional inter-process communication flow. This often refers to a process flow over a network connection, but by no means is limited to such. 

So from that a major distinction are sockets that (1) use a network and (2) sockets that do not. 

**Unix domain sockets** do not use the network. Their API makes it appear to be (mostly) the same to the developer as a network socket but all the communication is done through the kernel and the sockets are limited to talking to processes on the machine upon which they are running.

**Berkeley sockets** are what we know as network sockets on POSIX platforms today. ==In the past there were different lines of Unix development (e.g. Berkeley or BSD, System V or sysV, etc.) Berkeley sockets essentially won in the marketplace and are effectively synonymous with Unix sockets today.==

Strictly speaking there isn't a **TCP socket**. There are network sockets that can communicate using the TCP protocol. It's just a linguist shorthand to refer to them as a TCP socket to distinguish them from a socket using another protocol e.g. UDP, a routing protocol or whatnot.

An **"Internet" socket** is a mostly a meaningless distinction. It's a socket using a network protocol. That eliminates Unix domain sockets, but most network protocols can be used to communicate on a LAN or the Internet, which is just collection of networks. (Though do note there are protocols specific to local networks as well as those that manage collections of networks.)


[UNIX Domain vs BSD vs TCP vs Internet sockets?]: https://stackoverflow.com/a/22898357/16542494

