# Placement Policy

[TOC]



## Res


## Intro
The placement policy determines where in real memory a process piece is to reside. 

- In a **pure segmentation** system, the placement policy is an important design issue; policies such as best-fit, first-fit, and so on, which were discussed in Chapter 7, are possible alternatives. 
- However, for a system that uses either pure paging or paging combined with segmentation, placement is usually irrelevant because the address translation hardware and the main memory access hardware can perform their functions for any page-frame combination with equal efficiency.

There is one area in which placement does become a concern, and this is a subject of research and development. On a so-called **nonuniform memory access (NUMA) multiprocessor**, the distributed, shared memory of the machine can be referenced by any processor on the machine, but the time for accessing a particular physical location varies with the distance between the processor and the memory module. Thus, performance depends heavily on the extent to which data reside close to the processors that use them [LARO92, BOLO89, COX89]. For NUMA systems, an **automatic placement strategy** is desirable to assign pages to the memory module that provides the best performance.



## Ref

