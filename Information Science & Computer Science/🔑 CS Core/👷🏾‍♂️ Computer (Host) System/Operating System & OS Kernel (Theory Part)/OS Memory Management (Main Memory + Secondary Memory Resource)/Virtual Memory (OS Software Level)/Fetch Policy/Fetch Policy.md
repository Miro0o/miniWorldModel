# Fetch Policy

[TOC]



## Res
### Related Topics



## Intro
The fetch policy determines when a page should be brought into main memory. The two common alternatives are demand paging and pre-paging. 

### Demand Paging
With demand paging, a page is brought into main memory only when a reference is made to a location on that page. 

If the other elements of memory management policy are good, the following should happen. When a process is first started, there will be a flurry of page faults. As more and more pages are brought in, the principle of locality suggests that most future references will be to pages that have recently been brought in. Thus, after a time, matters should settle down and the number of page faults should drop to a very low level.


### Pre-paging
With pre-paging, pages other than the one demanded by a page fault are brought in. 
- Pre-paging exploits the characteristics of most secondary memory devices, such as disks, which have seek times and rotational latency.
- If the pages of a process are stored contiguously in secondary memory, then it is more efficient to bring in a number of contiguous pages at one time rather than bringing them in one at a time over an extended period. 

> Of course, this policy is ineffective if most of the extra pages that are brought in are not referenced.

The pre-paging policy could be employed either when a process first starts up, in which case the programmer would somehow have to designate desired pages, or every time a page fault occurs. This latter course would seem preferable because it is invisible to the programmer.

> **Pre-paging 🆚 Swapping**
> 
> Pre-paging should not be confused with swapping. When a process is swapped out of memory and put in a suspended state, all of its resident pages are moved out. When the process is resumed, all of the pages that were previously in main memory are returned to main memory.



## Ref

