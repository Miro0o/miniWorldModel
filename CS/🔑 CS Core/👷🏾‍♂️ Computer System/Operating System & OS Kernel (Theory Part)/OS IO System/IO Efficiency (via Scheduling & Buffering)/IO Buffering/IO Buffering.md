# I/O Buffering

[TOC]



## Res

## Intro
![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%203.15.30%20PM.png)


### I/O Buffering Motivations / Problems Without Buffering
Suppose a user process wishes to read blocks of data from a disk one at a time, with each block having a length of 512 bytes. The data are to be read into a data area within the address space of the user process at virtual location 1000 to 1511. The simplest way would be to execute an I/O command (something like Read_Block[1000, disk]) to the disk unit then wait for the data to become available. The waiting could either be busy waiting (continuously test the device status) or, more practically, process suspension on an interrupt.

There are two problems with this approach. 
1. First, the program is **hung up waiting** for the relatively slow I/O to complete. 
2. The second problem is that this approach to I/O **interferes with swapping decisions by the OS**. Virtual locations 1000 to 1511 must remain in main memory during the course of the block transfer. Otherwise, some of the data may be lost. If paging is being used, at least the page containing the target locations must be locked into main memory. Thus, although portions of the process may be paged out to disk, it is impossible to swap the process out completely, even if this is desired by the operating system. 
3. Notice also there is a risk of **single-process deadlock**. If a process issues an I/O command, is suspended awaiting the result, and then is swapped out prior to the beginning of the operation, the process is blocked waiting on the I/O event, and the I/O operation is blocked waiting for the process to be swapped in. To avoid this deadlock, the user memory involved in the I/O operation must be locked in main memory immediately before the I/O request is issued, even though the I/O operation is queued and may not be executed for some time.

The same considerations apply to an output operation. If a block is being transferred from a user process area directly to an I/O module, then the process is blocked during the transfer and the process may not be swapped out.

To avoid these overheads and inefficiencies, it is sometimes convenient to perform **input transfers** in advance of requests being made, and to perform output transfers some time after the request is made. This technique is known as **buffering**. In this section, we look at some of the buffering schemes that are supported by operating systems to improve the performance of the system.


### I/O Buffering Benefits
![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%203.49.33%20PM.png)



### I/O Buffering Modes
#### 1️⃣ Block-oriented (Block I/O)
A block-oriented device stores information in blocks that are usually of fixed size, and transfers are made one block at a time. Generally, it is possible to reference data by its block number.

> Disks and USB keys are examples of block-oriented devices. 


#### 2️⃣ Stream-oriented (Character I/O)
A stream-oriented device transfers data in and out as a stream of bytes, with no block structure.

> Terminals, printers, communications ports, mouse and other pointing devices, and most other devices that are not secondary storage are stream-oriented.



## Types of I/O Buffering
![|500](../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%203.24.53%20PM.png)



### 1️⃣ Single Buffer
- Request for the next block triggered immediately after buffer is read (进程读取数据后立刻请求下一个数据块) : known as read ahead (预读) or anticipated input (预期输入)
- For stream-oriented I/O, the buffer usually contains a line (面向流的I/O通常以一行作为一个缓冲区单元)
- Single buffer is suitable for applications with sequential data access (适用于顺序数据访问)

#### For Block-oriented I/O
For block-oriented devices, the single buffering scheme can be described as follows: Input transfers are made to the system buffer. When the transfer is complete, the process moves the block into user space and immediately requests another block. This is called **reading ahead**, or **anticipated input**; it is done in the expectation that the block will eventually be needed. For many types of computation, this is a reasonable assumption most of the time because data are usually accessed sequentially. Only at the end of a sequence of processing will a block be read in unnecessarily.

This approach will generally provide a speedup compared to the lack of system buffering. The user process can be processing one block of data while the next block is being read in. The OS is able to swap the process out because the input operation is taking place in system memory rather than user process memory. This technique does, however, complicate the logic in the operating system. The OS must keep track of the assignment of system buffers to user processes. The swapping logic is also affected: If the I/O operation involves the same disk that is used for swapping, it hardly makes sense to queue disk writes to the same device for swapping the process out. This attempt to swap the process and release main memory will itself not begin until after the I/O operation finishes, at which time swapping the process to disk may no longer be appropriate.

Similar considerations apply to block-oriented output. When data are being transmitted to a device, they are first copied from the user space into the system buffer, from which they will ultimately be written. The requesting process is now free to continue or to be swapped as necessary.


#### For Stream-oriented I/O
For stream-oriented I/O, the single buffering scheme can be used in a line-at-a- time fashion or a byte-at-a-time fashion. Line-at-a-time operation is appropriate for scroll-mode terminals (sometimes called dumb terminals). With this form of terminal, user input is one line at a time, with a carriage return signaling the end of a line, and output to the terminal is similarly one line at a time. A line printer is another example of such a device. Byte-at-a-time operation is used on forms-mode terminals, when each keystroke is significant, and for many other peripherals, such as sensors and controllers.

In the case of line-at-a-time I/O, the buffer can be used to hold a single line. The user process is suspended during input, awaiting the arrival of the entire line. For output, the user process can place a line of output in the buffer and continue process- ing. It need not be suspended unless it has a second line of output to send before the buffer is emptied from the first output operation. In the case of byte-at-a-time I/O, the interaction between the OS and the user process follows the producer/consumer model discussed in Chapter 5.

#### Single Buffer Limitation
![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%203.52.45%20PM.png)


### 2️⃣ Double Buffer
An improvement over single buffering can be had by assigning two system buffers to the operation (see Figure 11.5c). A process now transfers data to (or from) one buffer while the operating system empties (or fills) the other. This technique is known as **double buffering** or **buffer swapping**.

- For **block-oriented transfer**, we can roughly estimate the execution time as max [C, T]. It is therefore possible to keep the block-oriented device going at full speed if C ... T. On the other hand, if C 7 T, double buffering ensures that the pro- cess will not have to wait on I/O. In either case, an improvement over single buffering is achieved. Again, this improvement comes at the cost of increased complexity.

- For **stream-oriented input**, we again are faced with the two alternative modes of operation. For line-at-a-time I/O, the user process need not be suspended for input or output, unless the process runs ahead of the double buffers. For byte-at-a-time operation, the double buffer offers no particular advantage over a single buffer of twice the length. In both cases, the producer/consumer model is followed.

![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%203.53.22%20PM.png)


### 3️⃣ Circular Buffer
A double-buffer scheme should smooth out the flow of data between an I/O device and a process. If the performance of a particular process is the focus of our concern, then we would like for the I/O operation to be able to keep up with the process. Double buffering may be inadequate if the process performs rapid bursts of I/O. In this case, the problem can often be alleviated by using more than two buffers.

When more than two buffers are used, the collection of buffers is itself referred to as a circular buffer (see Figure 11.5d), with each individual buffer being one unit in the circular buffer. This is simply the bounded-buffer producer/consumer model studied in Chapter 5.



## Buffering Performance
### Execution Time Per Block
[KNUT97] suggests a crude but informative performance comparison between single buffering and no buffering. 

---
1️⃣ Without buffering, the execution time per block is essentially 
$$T + C$$
Where T is the time required to input one block, and C is the computation time that intervenes between input requests. 

---
2️⃣ With a single buffer, the execution time per block is 
$$max [C, T] + M$$
where M is the time required to move the data from the system buffer to user memory. 

> In most cases, execution time per block is substantially less with a single buffer compared to no buffer.

---
3️⃣ With a double buffer, the time per block is 
$$max[T, C + M]$$



### The Utility of Buffering
Buffering is a technique that **smoothes out peaks** in I/O demand. However, no amount of buffering will allow an I/O device to keep pace with a process indefinitely when the average demand of the process is greater than the I/O device can service. Even with multiple buffers, all of the buffers will eventually fill up, and the process will have to wait after processing each chunk of data. However, in a multiprogramming environment, when there is a variety of I/O activity and a variety of process activity to service, buffering is one tool that can increase the efficiency of the OS and the performance of individual processes.



## Ref

