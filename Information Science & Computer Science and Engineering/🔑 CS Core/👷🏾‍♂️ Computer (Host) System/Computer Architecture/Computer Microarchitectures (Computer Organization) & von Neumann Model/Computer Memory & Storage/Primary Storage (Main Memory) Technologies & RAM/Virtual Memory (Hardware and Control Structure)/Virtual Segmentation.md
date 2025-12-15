# Segmentation

[TOC]



## Res
### Related Topics



## Intro
Instead of dividing the virtual address space into equal, fixed-size pages, and the physical address space into equal-size page frames, ==the virtual address space is divided into **logical, variable-length units**, or **segments**.==

Physical memory isn’t really divided or partitioned into anything. When a segment needs to be copied into physical memory, the operating system looks for a chunk of free memory large enough to store the entire segment.

Each segment has a **base address**, indicating where it is located in memory, and a **bounds limit**, indicating its size. Each program, consisting of multiple segments, now has an associated **segment table** instead of a page table. This segment table is simply a collection of the base/bounds pairs for each segment.


### Virtual Memory Implications
This organization has a number of advantages to the programmer over a non-segmented address space:
1. It simplifies the handling of growing data structures. If the programmer does not know ahead of time how large a particular data structure will become, it is necessary to guess unless dynamic segment sizes are allowed. With segmented virtual memory, the data structure can be assigned its own segment, and the OS will expand or shrink the segment as needed. If a segment that needs to be expanded is in main memory and there is insufficient room, the OS may move the segment to a larger area of main memory, if available, or swap it out. In the latter case, the enlarged segment would be swapped back in at the next opportunity.
2. It allows programs to be altered and recompiled independently, without requiring the entire set of programs to be relinked and reloaded. Again, this is accomplished using multiple segments.
3. It lends itself to sharing among processes. A programmer can place a utility program or a useful table of data in a segment that can be referenced by other processes.
4. It lends itself to protection. Because a segment can be constructed to contain a well-defined set of programs or data, the programmer or system administrator can assign access privileges in a convenient fashion.



### Virtual Address: Formats & Translation
#### Virtual Segmentation Address Format


#### Virtual Segmentation Address Translation

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%207.32.27%20PM.png)

#TODO 


## Virtual Segmentation 

## External Fraction
As with paging, segmentation suffers from fragmentation.
- Paging creates internal fragmentation because a frame can be allocated to a process that doesn’t need the entire frame. 
- Segmentation, on the other hand, suffers from external fragmentation. As segments are allocated and deallocated, the free chunks that reside in memory become broken up. Eventually, there are many small chunks, but none large enough to store an entire segment.

The difference between external and internal fragmentation is that, 
- with external fragmentation, enough total memory space may exist to allocate to a process, but this space is not contiguous—it exists as a large number of small, unusable holes.
- With internal fragmentation, the memory simply isn’t available because the system has overal-located memory to a process that doesn’t need it.


### GC (Garbage Collection) for External Fragmentation
To combat external fragmentation, systems use some sort of garbage collection. This process simply shuffles occupied chunks of memory to coalesce the smaller, fragmented chunks into larger, usable chunks. If you have ever defragmented a disk drive, you have witnessed a similar process, collecting the many small free spaces on the disk and creating fewer, larger ones.



## Ref

