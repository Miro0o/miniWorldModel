# Virtual Segmentation Combined with Virtual Paging

[TOC]



## Res
### Related Topics



## Intro
Combined segmentation and paging is advantageous because it allows for segmentation from the user’s point of view and paging from the system’s point of view.

In a combined paging/segmentation system, a user’s address space is broken up into a number of segments, at the discretion of the programmer. Each segment is, in turn, broken up into a number of fixed-size pages, which are equal in length to a main memory frame. If a segment has length less than that of a page, the segment occupies just one page. 

- From the programmer’s point of view, a logical address still consists of a segment number and a segment offset. 
- From the system’s point of view, the segment offset is viewed as a page number and page offset for a page within the specified segment.


### Virtual `SegPage` Specifics
The memory segmentation /page / page frames: 
- The virtual address space is divided into segments of variable length, and the segments are divided into fixed-size pages.
- Main memory is divided into frames of the same size.

Each segment has a page table, which means that every program has multiple page tables.

The physical address is divided into three fields. 
- The first field is the segment field, which points the system to the appropriate page table. 
- The second field is the page number, which is used as an offset into this page table. 
- The third field is the offset within the page.



## Combined Paging/Segmentation System
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%207.22.05%20PM.png)



## Ref

