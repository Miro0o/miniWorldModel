# Message Passing

[TOC]



## Res
### Related Topics



## Intro
When processes interact with one another, two fundamental requirements must be satisfied: **synchronization** and **communication**. Processes need to be synchronized to enforce mutual exclusion; cooperating processes may need to exchange information. One approach to providing both of these functions is message passing. 

> Message passing has the further advantage that it lends itself to implementation in distributed systems as well as in shared-memory multiprocessor and uniprocessor systems.

Message passing systems come in many forms. In this section, we will provide a general introduction that discusses features typically found in such systems. The actual function of message passing is normally provided in the form of a pair of primitives:

> `send (destination, message)`
>` receive (source, message)`

This is the minimum set of operations needed for processes to engage in message passing. A process sends information in the form of a message to another process designated by a destination. A process receives information by executing the receive primitive, indicating the source and the message.



## Message Passing Design Issues
![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-11%20at%208.36.05%20PM.png)


### Synchronization

Both the sender and receiver can be blocking or nonblocking. Three combinations are common, although any particular system will usually have only one or two combinations implemented:

1. **Blocking send, blocking receive**: Both the sender and receiver are blocked until the message is delivered; this is sometimes referred to as a rendezvous. This combination allows for tight synchronization between processes.
2. **Nonblocking send, blocking receive**: Although the sender may continue on, the receiver is blocked until the requested message arrives. This is probably the most useful combination. It allows a process to send one or more messages to a variety of destinations as quickly as possible. A process that must receive a message before it can do useful work needs to be blocked until such a message arrives. An example is a server process that exists to provide a service or resource to other processes.
3. **Nonblocking send, nonblocking receive**: Neither party is required to wait.

The **nonblocking send** is more natural for many concurrent programming tasks. For example, if it is used to request an output operation such as printing, it allows the requesting process to issue the request in the form of a message, then carry on. One potential danger of the nonblocking send is that an error could lead to a situation in which a process repeatedly generates messages. Because there is no blocking to discipline the process, these messages could consume system resources, including processor time and buffer space, to the detriment of other processes and the OS. Also, the nonblocking send places the burden on the programmer to determine that a message has been received: Processes must employ reply messages to acknowledge receipt of a message.

For the receive primitive, the **blocking receive** appears to be more natural for many concurrent programming tasks. Generally, a process that requests a message will need the expected information before proceeding. However, if a message is lost, which can happen in a distributed system, or if a process fails before it sends an anticipated message, a receiving process could be blocked indefinitely. This problem can be solved by the use of the **nonblocking receive**. However, the danger of this approach is that if a message is sent after a process has already executed a matching receive, the message will be lost. Other possible approaches are to allow a process to test whether a message is waiting before issuing a receive and allow a process to specify more than one source in a receive primitive. The latter approach is useful if a process is waiting for messages from more than one source, and can proceed if any of these messages arrive.


### Addressing
#### 1️⃣ Direct Addressing

- the send primitive includes a **specific identifier** of the destination process. 
- The receive primitive can be handled in one of two ways. 
	- One possibility is to require that the process explicitly designate a sending process. Thus, the process must know ahead of time from which process a message is expected. This will often be effective for cooperating concurrent processes. 
	
	- In other cases, however, it is impossible to specify the anticipated source process. An example is a printer-server process, which will accept a print request message from any other process. For such applications, a more effective approach is the use of **implicit addressing**. In this case, the source parameter of the receive primitive possesses a value returned when the receive operation has been performed.


#### 2️⃣ Indirect Addressing
The other general approach is indirect addressing. In this case, messages are not sent directly from sender to receiver, but rather are sent to a **shared data structure consisting of queues** that can temporarily hold messages. Such queues are generally referred to as **mailboxes**. Thus, for two processes to communicate, one process sends a message to the appropriate mailbox, and the other process picks up the message from the mailbox.

The association of processes to mailboxes can be either **static** or **dynamic**. Ports are often statically associated with a particular process; that is, the port is created and permanently assigned to the process. Similarly, a one-to-one relationship is typically defined statically and permanently. When there are many senders, the association of a sender to a mailbox may occur dynamically. 

> Primitives such as connect and disconnect may be used for this purpose.


##### Relationship between Senders & Receivers
![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%2010.15.41%20AM.png)

A **one-to-one relationship** allows a private communications link to be set up between two processes. This insulates their interaction from erroneous interference from other processes. 

A **many-to-one relationship** is useful for client/ server interaction; one process provides service to a number of other processes. In this case, the mailbox is often referred to as a port. 

A **one-to-many relationship** allows for one sender and multiple receivers; it is useful for applications where a message or some information is to be broadcast to a set of processes.

A **many-to-many relationship** allows multiple server processes to provide concurrent service to multiple clients.


### Message Format
The format of the message depends on the objectives of the messaging facility and whether the facility runs on a single computer or on a distributed system. 

**Fixed Length Messages**
For some operating systems, designers have preferred **short**, **fixed-length** messages to minimize processing and storage overhead. If a large amount of data is to be passed, the data can be placed in a file and the message then simply references that file. 

**Variable-length Messages**
A more flexible approach is to allow **variable-length** messages.

Figure 5.22 shows a typical message format for operating systems that support variable-length messages. The message is divided into two parts: 
- a header, which contains information about the message,
- and a body, which contains the actual contents of the message. 

The header may contain an identification of the source and intended destination of the message, a length field, and a type field to discriminate among various types of messages. There may also be additional control information, such as a **pointer field** so that a linked list of messages can be created; a **sequence number**, to keep track of the number and order of messages passed between source and destination; and a **priority field**.

![|400](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%2010.12.43%20AM.png)


### Queue Discipline
The simplest queueing discipline is first-in-first-out, but this may not be sufficient if some messages are more urgent than others. An alternative is to allow the specifying of message priority, on the basis of message type or by designation by the sender. Another alternative is to allow the receiver to inspect the message queue and select which message to receive next.



## Message Passing Implementation
### 👉 Message Passing for Mutual Exclusion



### 👉 Message Passing for Synchronization (2 Processes)


### 👉 Message Passing for Synchronization (N Processes)


### 👉 Message Passing for the Bounded-buffer Producer/Consumer Problem

![](../../../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%2010.12.28%20AM.png)


## Ref

