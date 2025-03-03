# Replacement Policy

[TOC]



## Res


## Intro
The area of replacement policy is probably the most studied of any area of memory management. 


### Scope of Replacement Policy
Topics related to memory chunk replacement policies and where they are addressed: 
- How many page frames are to be allocated to each active process (🔔 **discussed in resident set management**)
- Whether the set of pages to be considered for replacement should be limited to those of the process that caused the page fault or encompass all the page frames in main memory (🔔 **discussed in resident set management**)
- Among the set of pages considered, which particular page should be selected for replacement (😄 **this section covers**)


### Replacement Policy Objectives & Principle of Locality
When all of the frames in main memory are occupied and it is necessary to bring in a new page to satisfy a page fault, the replacement policy determines which page currently in memory is to be replaced. **All of the policies have as their objective that the page to be removed should be the page least likely to be referenced in the near future.** 
- Because of the principle of locality, there is often a high correlation between recent referencing history and near-future referencing patterns. Thus, most policies try to predict future behavior **on the basis of past behavior**. 

One trade-off that must be considered is that the more elaborate and sophisticated the replacement policy, the greater will be the hardware and software overhead to implement it.


### Frame Locking
One restriction on replacement policy needs to be mentioned before looking at various algorithms: **Some of the frames in main memory may be locked**. When a frame is locked, the page currently stored in that frame may NOT be replaced.

- Much of the kernel of the OS, as well as key control structures, are held in locked frames. 
- In addition, I/O buffers and other time-critical areas may be locked into main memory frames.

Locking is achieved by associating a **lock bit** with each frame. This bit may be kept in a frame table as well as being included in the current page table.



## Replacement Algorithms
![](../../../../../../../Assets/Pics/Screenshot%202023-05-11%20at%202.45.26%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-11%20at%203.20.03%20PM.png)


### 1️⃣ OPT (Benchmark Algorithms)


### 2️⃣ LRU


### 3️⃣ FIFO


### 4️⃣ CLOCK & Use Bit
The simplest form of clock policy requires the association of an additional bit with each frame, referred to as the **use bit**. When a page is first loaded into a frame in memory, the use bit for that frame is set to 1. Whenever the page is subsequently referenced (after the reference that generated the page fault), its use bit is set to 1. 

For the page replacement algorithm, the set of frames that are candidates for replacement (this process: local scope; all of main memory: global scope) is considered to be a circular buffer, with which a pointer is associated.

When a page is replaced, the pointer is set to indicate the next frame in the buffer after the one just updated. When it comes time to replace a page, the OS scans the buffer to find a frame with a use bit set to 0.
- Each time it encounters a frame with a use bit of 1, it resets that bit to 0 and continues on. 
	- If any of the frames in the buffer have a use bit of 0 at the beginning of this process, the first such frame encountered is chosen for replacement. 
	- If all of the frames have a use bit of 1, then the pointer will make one complete cycle through the buffer, setting all the use bits to 0, and stop at its original position, replacing the page in that frame.

We can see that this policy is similar to FIFO, except that, in the clock policy, any frame with a use bit of 1 is passed over by the algorithm. The policy is referred to as a clock policy because we can visualize the page frames as laid out in a circle. A number of operating systems have employed some variation of this simple clock policy (e.g., Multics [CORB68]).

![](../../../../../../../Assets/Pics/Screenshot%202023-05-11%20at%203.20.15%20PM.png)


#### Enhanced CLOCK With Additional Bits
The clock algorithm can be made more powerful by increasing the number of bits that it employs. On the other hand, if we reduce the number of bits employed to zero, the clock algorithm degenerates to FIFO.

##### 1️⃣ Modify Bit
In all processors that support paging, a **modify bit** is associated with every page in main memory, and hence with every frame of main memory. This bit is needed so that when a page has been modified, it is not replaced until it has been written back into secondary memory. We can exploit this bit in the clock algorithm in the following way. If we take the use and modify bits into account, each frame falls into one of four categories:
1. Not accessed recently, not modified (u = 0; m = 0)
2. Accessed recently, not modified (u = 1; m = 0)
3. Not accessed recently, modified (u = 0; m = 1)
4. Accessed recently, modified (u = 1; m = 1) 

With this classification, the clock algorithm performs as follows:
1. Beginning at the current position of the pointer, scan the frame buffer. During this scan, make no changes to the use bit. The first frame encountered with (u = 0; m = 0) is selected for replacement.
2. If step 1 fails, scan again, looking for the frame with (u = 0; m = 1). The first such frame encountered is selected for replacement. During this scan, set the use bit to 0 on each frame that is bypassed.
3. If step 2 fails, the pointer should have returned to its original position and all of the frames in the set will have a use bit of 0. Repeat step 1 and, if necessary, step 2. This time, a frame will be found for the replacement.

> This strategy was used on an earlier version of the Macintosh virtual memory scheme [GOLD89]. The advantage of this algorithm over the simple clock algorithm is that pages that are unchanged are given preference for replacement. Because a page that has been modified must be written out before being replaced, there is an immediate saving of time.


### 5️⃣ Random Replacement Policy

> ==The problem with LRU and FIFO is that there are **degenerate referencing situations** in which they can be made to **thrash** (constantly throw out a block, then bring it back, then throw it out, then bring it back, repeatedly)==. Some people argue that random replacement, although it sometimes throws out data that will be needed soon, never thrashes. Unfortunately, it is difficult to have truly random replacement, and it can decrease average performance.



## Page Buffering
![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%208.24.27%20PM.png)

#TODO 



## Replacement Policy And Cache Size
As discussed earlier, main memory size is getting larger and the locality of applications is decreasing. In compensation, cache sizes have been increasing. Large cache sizes, even multimegabyte ones, are now feasible design alternatives [BORG90]. With a large cache, the replacement of virtual memory pages can have a performance impact. If the page frame selected for replacement is in the cache, then that cache block is lost as well as the page that it holds.

In systems that use some form of page buffering, it is possible to improve cache performance by supplementing the page replacement policy with a policy for page placement in the page buffer. Most operating systems place pages by selecting an arbitrary page frame from the page buffer; typically a first-in-first-out discipline is used. A study reported in [KESS92] shows that a careful page placement strategy can result in 10–20% fewer cache misses than naive placement.

Several page placement algorithms are examined in [KESS92]. The details are beyond the scope of this book, as they depend on the details of cache structure and policies. The essence of these strategies is to bring consecutive pages into main memory in such a way as to minimize the number of page frames that are mapped into the same cache slots.



## Ref

