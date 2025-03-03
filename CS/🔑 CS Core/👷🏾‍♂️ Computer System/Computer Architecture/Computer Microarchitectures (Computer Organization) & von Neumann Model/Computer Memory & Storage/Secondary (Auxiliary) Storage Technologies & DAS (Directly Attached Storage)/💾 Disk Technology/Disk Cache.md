# Disk Cache

[TOC]



## Res
### Related Topics



## Intro
The term **cache memory** is usually used to apply to a memory that is smaller and faster than main memory, and that is interposed between main memory and the processor. Such a cache memory reduces average memory access time by exploiting the principle of locality.

The same principle can be applied to disk memory. Specifically, ==a **disk cache** is a buffer in **main memory** for disk sectors==.The cache contains a copy of some of the sectors on the disk. When an I/O request is made for a particular sector, a check is made to determine if the sector is in the disk cache. If so, the request is satisfied via the cache. If not, the requested sector is read into the disk cache from the disk.

Because of the **phenomenon of locality of reference**, when a block of data is fetched into the cache to satisfy a single I/O request, it is likely that there will be future references to that same block.



## Design Considerations
### Data Sharing
First, when an I/O request is satisfied from the disk cache, the data in the disk cache must be delivered to the requesting process. 
This can be done either by 
1. transferring the block of data within main memory from the disk cache to memory assigned to the user process, 
2. or simply by using a shared memory capability and passing a pointer to the appropriate slot in the disk cache. The latter approach saves the time of a **memory-to-memory transfer** and also allows **shared access** by other processes using the **readers/writers model** described in Chapter 5.


### Replacement Policies
↗ [Virtual Memory /Replacement Policy](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Replacement%20Policy/Replacement%20Policy.md)

↗ [Cache Memory (高速缓存) /Cache Memory Replacement Policy](../../Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM.md)

> LRU, LFU, frequency-based replacement

#### Frequency-based Replacement
A simple LFU algorithm has the following problem. It may be that certain blocks are referenced relatively infrequently overall, but when they are referenced, there are short intervals of repeated references due to locality, thus building up high reference counts. After such an interval is over, the reference count may be mislead- ing and not reflect the probability that the block will soon be referenced again. Thus, the effect of locality may actually cause the LFU algorithm to make poor replacement choices.

To overcome this difficulty with LFU, a technique known as frequency-based replacement is proposed in [ROBI90].

For clarity, let us first consider a simplified version, illustrated in Figure 11.9a. The blocks are logically organized in a stack, as with the LRU algorithm. A certain portion of the top part of the stack is designated the new section. When there is a cache hit, the referenced block is moved to the top of the stack. If the block was already in the new section, its reference count is not incremented; otherwise, it is incremented by 1. Given a sufficiently large new section, this results in the reference counts for blocks that are repeatedly re-referenced within a short interval remaining unchanged. On a miss, the block with the smallest reference count that is not in the new section is chosen for replacement; the least recently used such block is chosen in the event of a tie.

The authors report this strategy achieved only slight improvement over LRU. The problem is the following:
1. On a cache miss, a new block is brought into the new section, with a count of 1.
2. The count remains at 1 as long as the block remains in the new section.
3. Eventually the block ages out of the new section, with its count still at 1.
4. If the block is not now re-referenced fairly quickly, it is very likely to be replaced because it necessarily has the smallest reference count of those blocks that are not in the new section. In other words, there does not seem to be a sufficiently long interval for blocks aging out of the new section to build up their reference counts, even if they were relatively frequently referenced.

A further refinement addresses this problem: Divide the stack into three sections: new, middle, and old (see Figure 11.9b). As before, reference counts are not incremented on blocks in the new section. However, only blocks in the old section are eligible for replacement. Assuming a sufficiently large middle section, this allows relatively frequently referenced blocks a chance to build up their reference counts before becoming eligible for replacement. Simulation studies by the authors indicate this refined policy is significantly better than simple LRU or LFU.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%203.46.01%20PM.png)



## Performance Considerations
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%203.47.38%20PM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%203.47.47%20PM.png)



## Ref

