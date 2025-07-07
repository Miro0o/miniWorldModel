# Primary Storage (Main Memory) Technologies & RAM

[TOC]



## Res
### Related Topics
↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)

↗ [Memory Access & Addressing](../../../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)



## Intro
The main memory is a temporary storage device that holds both a program and the data it manipulates while the processor is executing the program. Physically, main memory consists of a collection of dynamic random access memory (DRAM) chips. Logically, memory is organized as a linear array of bytes, each with its own unique address (array index) starting at zero. In general, each of the machine instructions that constitute a program can consist of a variable number of bytes. The sizes of data items that correspond to C program variables vary according to type. For example, on an x86-64 machine running Linux, data of type short require 2 bytes, types int and float 4 bytes, and types long and double 8 bytes.


### How Data Fetched: Parallel & Sequential
> ↗ [ILP (Instruction Level Parallelism)](../../../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/ILP%20(Instruction%20Level%20Parallelism)/ILP%20(Instruction%20Level%20Parallelism).md)

When data is needed from cache, there are two options for retrieving that data. 
1. We could start an access to cache and, at the same time, start an access to main memory (in **parallel**). If the data is found in cache, the access to main memory is terminated, at no real cost because the accesses were overlapped. If the data is not in cache, the access to main memory is already well on its way. This overlapping helps reduce the cost (in time) for a cache miss. 
2. The alternative is to perform everything **sequentially**. First, cache is checked; if the data is found, we’re done. If the data is not found in cache, then an access is started to retrieve the data from main memory.
#### 1. cache & main memory access in parallel
#### 2. cache & main memory access in sequence


### How data is copied into cache
Main memory and cache are both divided into the same size blocks (the size of these blocks varies). When a memory address is generated, cache is searched first to see if the required data at that address exists there. When the requested data is not found in cache, the entire main memory block in which the requested memory address resides is loaded into cache. ==As previously mentioned, this scheme is successful because of the principle of locality -- if an address was just referenced, there is a good chance that addresses in the same general vicinity will soon be referenced as well.== Therefore, one missed address often results in several found addresses.



## 🎛️ Cache Performance Metrics
### Cache Miss/Hit
One field of the main memory address points us to a location in cache in which the data resides if it is resident in cache (this is called a cache hit), or where it is to be placed if it is not resident (which is called a cache miss). (This is slightly different for associative-mapped cache, which we discuss shortly.)


### EAT (Effective Access Time) & Hit Ratio

$$EAT \ = \ H \times Access_c + (1-H) \times Access_{MM}$$
where
- $H$ = cache hit rate
- $Access_C$ = cache access time
- $Access_{MM}$ = main memory access time.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%208.58.16%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%209.14.52%20PM.png)


### Caching and Programs Locality
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%208.56.09%20PM.png)



## 🔥 Cache Mapping Schemes
What makes cache “special”? ==Cache is not accessed by address; it is accessed by content. For this reason, cache is sometimes called content-addressable memory or CAM.== Under most cache mapping schemes, the cache entries must be checked or searched to see if the value being requested is stored in cache. To simplify this process of locating the desired data, various cache mapping algorithms are used.

> 🤔 In general, though various algorithms has been used in cache mapping, the common sense is using exponentially-increasing index by dividing cache either into blocks or sets of blocks. 
> 
> 🤔 类似倍增的思想，通过对缓存进行倍增的划分（blocks, sets of blocks）提高indexing的效率和范围。


### Fields
How, then, does the CPU locate data when it has been copied into cache? The CPU uses a specific mapping scheme that “converts” the main memory address into a cache location.

This address conversion is done by giving special significance to the bits in the main memory address. We first divide the bits into distinct groups we call fields. Depending on the mapping scheme, we may have two or three fields. How we use these fields depends on the particular mapping scheme being used.

![理解 CPU Cache](https://ts1.cn.mm.bing.net/th/id/R-C.336f9fff21b3b61889a7b0246240d69d?rik=02m%2b6ayJ8dx80Q&riu=http%3a%2f%2fwsfdl.oss-cn-qingdao.aliyuncs.com%2fcpu_cache_direct_mapping.png&ehk=X%2fciJqHsMLfkbwxORN159Y4xhlEBbXuPuO2e8E90IeY%3d&risl=&pid=ImgRaw&r=0)

offset field, block field, tag field


### 1️⃣ Direct Mapping (DM Cache)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%208.41.24%20PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%208.41.44%20PM.png)


### 2️⃣ Fully Associative Mapping (FAM Cache，全相联映射的缓存)
Instead of specifying a unique location for each main memory block (method used in DM cache), we can look at the opposite extreme: **allowing a main memory block to be placed anywhere in cache**. The only way to find a block mapped this way is to search all of cache. ==This requires the entire cache to be built from associative memory so it can be searched in parallel. Associative memory requires special hardware to allow associative searching and is, thus, quite expensive.==

Using associative mapping, the main memory address is partitioned into two pieces, the tag and the offset.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%204.14.25%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%204.14.12%20PM.png)

#### Victim Block & Replacement Policies
With fully associative mapping, when the cache is full, we need a replacement algorithm to decide which block we wish to throw out of cache (we call this our **victim block**). 
A simple first-in, first-out algorithm would work, as would a least recently used algorithm. There are many replacement algorithms that can be used; these are discussed in below "Replacement Policies" 👇


### 3️⃣ N-way Set-associative Mapping (SAM Cache, 组相联映射的缓存)
> DM first, FAM next

Because of its speed and complexity, associative cache is very expensive. Although direct mapping is inexpensive, it is very restrictive. We need a scheme somewhere in the middle.

The third mapping scheme we introduce is **N-way set-associative cache mapping**, a combination of these two approaches.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-06%20at%204.25.55%20PM.png)



## 🤔 Cache Memory Replacement Policies
Similar to ↗ [Replacement Policy](../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Replacement%20Policy/Replacement%20Policy.md) in virtual memory replacement policies



## Cache Write Policies
### Write Through
A write-through policy updates both the cache and the main memory simultaneously on every write. This is slower than write-back, but ensures that the cache is consistent with the main system memory. The obvious disadvantage here is that every write now requires a main memory access. Using a write-through policy means that every write to the cache necessitates a main memory write, thus slowing the system (if all accesses are write, this essentially slows down the system to main memory speed). However, in real applications, the majority of accesses are reads, so this slowdown is negligible.


### Write Back/ Copyback
A write-back policy (also called copyback) only updates blocks in main memory when the cache block is selected as a victim and must be removed from cache. This is normally faster than write-through because time is not wasted writing information to memory on each write to cache.

Memory traffic is also reduced with this method. The disadvantage is that main memory and cache may not contain the same value at a given instant of time, and if a process terminates (crashes) before the write to main memory is done, the data in cache may be lost.



## Levels of Cache (Cache Hierarchy)
> Recall Memroy Hierarchy discussied in [Memory /Memory Hierarchy](../Computer%20Memory%20&%20Storage.md)
> 
> Hierarchy in a hierarchy!

For years, manufacturers have been trying to balance the higher latency in larger caches with the increase in hit rates by selecting just the right size cache. However, many designers are applying the concepts of levels of memory to cache itself, and they are now using a multilevel cache hierarchy in most systems—caches are using caching for increased performance!


### L1/L2/L3 Cache
**Level 1 (L1) cache** is the term used for cache that is resident on the chip itself, and it is the fastest, smallest cache. L1 cache, often referred to as **internal cache**. When a memory access is requested, L1 is checked first, with typical access speeds of approximately 4ns. 
- L1 cache typically ranges in size from **8KB to 64KB**.
- If the data is not found in L1, the Level 2 (L2) cache is checked. 

**Level 2 (L2) cache** is typically located **external to the processor**. L2 cache can be located on the system motherboard, on a separate chip, or on an expansion board. L2 cache is larger, but slower than L1 cache. 
- L2 cache has access speeds of **15–20ns**.
- Typical sizes for L2 cache range from **64KB to 2MB**. 
- If data is missing from L1 but found in L2, it is loaded into L1 cache (in some architectures, the data being replaced in L1 is swapped with the requested data in L2). 
- More manufacturers have begun to include L2 cache in their architectures by building L2 cache onto the same die as the CPU itself so the cache runs at CPU speed (but not on the same circuit with the CPU, such as is the case with L1 cache). This reduces the access speed of L2 cache to approximately 10ns. 

**L3 cache** is the term now used to refer to the **extra cache between the processor and memory** (which used to be called L2 cache) on processors that include L2 cache as part of their architecture. 
- L3 caches range in size from **8MB to 256MB**.

> Typically, architectures use **integrated caches** at levels L2 and L3. However, many have separate instruction and data caches at L1. 
> 
> For example, the Intel Celeron uses two separate L1 caches, one for instructions and one for data. 
> - In addition to this nice design feature, Intel uses **nonblocking cache** for its L2 caches. Most caches can process only one request at a time (so on a cache miss, the cache has to wait for memory to provide the requested value and load it into cache). Nonblocking caches can process up to four requests concurrently.


### Inclusive/Exclusive Caches
**Inclusive caches** are caches at different levels that allow the data to be present at multiple levels concurrently

A **strictly inclusive cache** guarantees that all data at one level is also found in the next lower level.

**Exclusive caches** guarantee the data to be in, at most, one level of cache.



## 👐🏼 Instruction and Data Caches
### Unified /Integrated Cache
Instruction and data are cached in the same cache chip, as discussed all above. 


### Harvard Cache
Instructions and data are cached in different cache chips.?


### Victim Cache / Trace Cache
Some processors also have what is known as a **victim cache**, a small, associative cache used to hold blocks that have been thrown out of the CPU cache due to conflicts. The idea is that if the victim block is used in the near future, it can be retrieved from the victim cache with less penalty than going to memory. This basically gives the data that was evicted from cache a “second chance” to be used before being sent to memory.

Another type of specialized cache, **trace cache**, is a variant of an instruction cache. Trace caches are used to store instruction sequences that have already been decoded, so that if the instructions are needed again, no decoding is required. In addition, the processor can deal with blocks of instructions and not worry about branches in the execution flow of the program. 

> This cache is so named because it stores traces of the dynamic instruction stream, making noncontiguous instructions appear to be contiguous. The Intel Pentium 4 uses this type of cache to increase performance.


## Ref
【放大一亿倍，看芯片内部的工作原理！（完整篇）】 https://www.bilibili.com/video/BV1Ce4y1W71k/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

