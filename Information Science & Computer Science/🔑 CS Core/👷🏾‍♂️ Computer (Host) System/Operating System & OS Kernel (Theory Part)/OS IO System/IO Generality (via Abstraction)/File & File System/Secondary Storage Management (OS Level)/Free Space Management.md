# Free Space Management

[TOC]



## Res
### Related Topics



## Intro
> Free space management: Keep track of available disk blocks (空闲空间管理：维护可用盘块集合)

Just as the space allocated to files must be managed, so the space that is not currently allocated to any file must be managed. To perform any of the file allocation techniques described previously, it is necessary to know what blocks on the disk are available. Thus, we need a disk allocation table in addition to a file allocation table. We discuss here a number of techniques that have been implemented.


### Disk Allocation Table (DAT)
> Disk allocation table (DAT) is the data structure that keeps track of block usage (通过磁盘分配表记录盘块的使用情况)



## 👶🏽 Free Space Management Basic Methods
### 1️⃣ Bit Table
This method uses a vector containing one bit for each block on the disk. Each entry of a 0 corresponds to a free block, and each 1 corresponds to a block in use.

A bit table has the advantage that it is relatively easy to find one or a contiguous group of free blocks. Thus, a bit table works well with any of the file allocation methods outlined. Another advantage is that a bit table is as small as possible.

![|600](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.27.37%20PM.png)


#### Bit Table Size for a Memory
However, it can still be sizable. The amount of memory (in bytes) required for a block bitmap is
$$\frac{disk \ size \ in \ bytes}{8 \times file \ system \ block \ size}$$

Thus, for a 16-Gbyte disk with 512-byte blocks, the bit table occupies about 4 Mbytes. Can we spare 4 Mbytes of main memory for the bit table? If so, then the bit table can be searched without the need for disk access. But even with today’s memory sizes, 4 Mbytes is a hefty chunk of main memory to devote to a single function. The alternative is to put the bit table on disk. But a 4-Mbyte bit table would require about 8,000 disk blocks. We can’t afford to search that amount of disk space every time a block is needed, so a bit table resident in memory is indicated.

Even when the bit table is in main memory, an exhaustive search of the table can slow file system performance to an unacceptable degree. This is especially true when the disk is nearly full and there are few free blocks remaining. Accordingly, most file systems that use bit tables maintain auxiliary data structures that summarize the contents of subranges of the bit table. For example, the table could be divided logically into a number of equal-size subranges. A summary table could include, for each subrange, the number of free blocks and the maximum-sized contiguous number of free blocks. When the file system needs a number of contiguous blocks, it can scan the summary table to find an appropriate subrange and then search that subrange.


### 2️⃣ Chained Free Portion
> - Organize the free portions in a chain (对空闲分区采用链式管理)
> - The start block of a portion stores length & next portion (每个空闲分区的开头盘块存储当前分区的长度和下一个空闲分区的开头)
> - No DAT is needed: store the head free portion    (不需要磁盘分配表：记录首个空闲分区的位置即可)


- Find available [...]
	- block: Take one block from the head (从链首指向的分区分配一块并更新链表状态)
	- portion: Find the first suitable free portion in the chain (从第一个可以满足条件的分区进行分配并更新链表状态)

- Issues
	- Fragmentation (碎片)
	- Long allocation/recycle time (分配及回收时间长)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.28.05%20PM.png)

The free portions may be chained together by using a pointer and length value in each free portion. This method has negligible space overhead because there is no need for a disk allocation table, merely for a pointer to the beginning of the chain and the length of the first portion. This method is suited to all of the file allocation methods. If allocation is a block at a time, simply choose the free block at the head of the chain and adjust the first pointer or length value. If allocation is by variable-length portion, a first-fit algorithm may be used: The headers from the portions are fetched one at a time to determine the next suitable free portion in the chain. Again, pointer and length values are adjusted.

This method has its own problems. After some use, the disk will become quite fragmented and many portions will be a single block long. Also note every time you allocate a block, you need to read the block first to recover the pointer to the new first free block before writing data to that block. If many individual blocks need to be allocated at one time for a file operation, this greatly slows file creation. Similarly, deleting highly fragmented files is very time consuming.


### 3️⃣ Indexing
The indexing approach treats free space as a file and uses an index table as described under file allocation. For efficiency, the index should be on the basis of variable-size portions rather than blocks. Thus, there is one entry in the table for every free portion on the disk. This approach provides efficient support for all of the file allocation methods.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.28.35%20PM.png)


### 4️⃣ Free Block List
In this method, each block is assigned a number sequentially and the list of the numbers of all free blocks is maintained in a reserved portion of the disk. Depending on the size of the disk, either 24 or 32 bits will be needed to store a single block number, so the size of the free block list is 24 or 32 times the size of the corresponding bit table and thus must be stored on disk rather than in main memory. However, this is a satisfactory method. Consider the following points:
1. The space on disk devoted to the free block list is less than 1% of the total disk space. If a 32-bit block number is used, then the space penalty is 4 bytes for every 512-byte block.
2. Although the free block list is too large to store in main memory, there are two effective techniques for storing a small part of the list in main memory.
    1. The list can be treated as a push-down stack (see Appendix P) with the first few thousand elements of the stack kept in main memory. When a new block is allocated, it is popped from the top of the stack, which is in main memory. Similarly, when a block is deallocated, it is pushed onto the stack. There only has to be a transfer between disk and main memory when the in-memory portion of the stack becomes either full or empty. Thus, this technique gives almost zero-time access most of the time.
    2. The list can be treated as a FIFO queue, with a few thousand entries from both the head and the tail of the queue in main memory. A block is allocated by taking the first entry from the head of the queue, and deallocated by adding it to the end of the tail of the queue. There only has to be a transfer between disk and main memory when either the in-memory portion of the head of the queue becomes empty or the in-memory portion of the tail of the queue becomes full.

In either of the strategies listed in the preceding point (stack or FIFO queue), a background thread can slowly sort the in-memory list or lists to facilitate contiguous allocation.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.28.58%20PM.png)



## Ref

