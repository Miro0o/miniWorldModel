# Virtual Memory (Hardware and Control Structure)

[TOC]



## Res
### Related Topics
↗ [Virtual Memory (OS Software Level)](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md)

↗ [Primary Storage (Main Memory) Technologies & RAM](../Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM.md)



## Intro
The **principle of locality** suggests that a virtual memory scheme may be effective. For virtual memory to be practical and effective, two ingredients are needed.
- First, there must be **hardware support** for the paging and/or segmentation scheme to be employed.
- Second, the OS must include **software for managing** the movement of pages and/or segments between secondary memory and main memory. 

In this section, we will examine the hardware aspect and look at the necessary control structures, which are created and maintained by the OS but are used by the memory management hardware. An examination of the OS issues will be provided in the ↗ [Virtual Memory (OS Software Level)](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md).

---

The purpose of virtual memory is to use the hard disk as an extension of RAM, thus increasing the available address space a process can use.

Using virtual memory, your computer addresses more main memory than it actually has, and it uses the hard drive to hold the excess. This area on the hard drive is called a **page file,** because it holds chunks of main memory on the hard drive.

The most common way to implement virtual memory is by using **paging**, a method in which main memory is divided into fixed-size blocks and programs are divided into the same-size blocks.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2010.05.42%20AM.png)
<small>Characteristics of Paging and Segmentation</small>


### Terminology
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-04%20at%203.06.29%20PM.png)
<small>Virtual Memory Terminology</small>

**Virtual address**: The logical or program address that the process uses. Whenever the CPU generates an address, it is always in terms of virtual address space.

**Physical address**: The real address in physical memory.

**Mapping**: The mechanism by which virtual addresses are translated into physical ones (very similar to cache mapping).

**Page frames**: The equal-sized chunks or blocks into which **main memory (physical memory, RAM)** is divided.

**Pages**: The chunks or blocks into which virtual memory (**the logical address space**, the virtual memory address, in this case) is divided, each equal in size to a page frame. Virtual pages are stored on disk until needed.

**Paging**: The process of copying a virtual page from disk to a page frame in main memory.

**Fragmentation**: Memory that becomes unusable.

**Page fault**: An event that occurs when a requested page is not in main memory and must be copied into memory from disk.


### Locality & Thrashing
> Recall ↗ [Principle of Locality](../../Computer%20Memory%20&%20Storage.md)

Thus, at any one time, only a few pieces of any given process are in memory, and therefore more processes can be maintained in memory. Furthermore, time is saved because unused pieces are not swapped in and out of memory. However, the OS must be **clever** about how it manages this scheme. In the steady state, practically all of main memory will be occupied with process pieces, so the processor and OS have direct access to as many processes as possible. Thus, when the OS brings one piece in, it must throw another out. If it throws out a piece just before it is used, then it will just have to go get that piece again almost immediately. Too much of this leads to a condition known as **thrashing**: **The system spends most of its time swapping pieces rather than executing instructions.** 

The avoidance of thrashing was a major research area in the 1970s and led to a variety of complex but effective algorithms. In essence, the OS tries to guess, based on recent history (principle of locality), which pieces are least likely to be used in the near future.

To summarize, the **principle of locality** states that program and data references within a process tend to cluster. Hence, the assumption that only a few pieces of a process will be needed over a short period of time is valid. Also, it should be possible to make intelligent guesses about which pieces of a process will be needed in the near future, which avoids thrashing.



## Memory Virtualization Methods
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2010.37.25%20AM.png)


### 1️⃣ Virtual Paging
↗ [Virtual Paging](Virtual%20Paging.md)


### 2️⃣ Virtual Segmentation
↗ [Virtual Segmentation](Virtual%20Segmentation.md)


### Virtual Paging 🆚 Virtual Segmentation: Pros and Cons
Paging is based on a purely physical value: The program and main memory are divided up into chunks of the same physical size. 
Segmentation, on the other hand, allows for logical portions of the program to be divided into variable-sized partitions.

With segmentation, the user is aware of the segment sizes and boundaries; with paging, the user is unaware of the partitioning. 

Paging is easier to manage: Allocation, freeing, swapping, and relocating are easy when everything’s the same size. However, pages are typically smaller than segments, which means more overhead (in terms of resources to both track and transfer pages). 

Paging eliminates external fragmentation, whereas segmentation eliminates internal fragmentation. 

Segmentation has the ability to support sharing and protection, both of which are very difficult to do with paging.


### 3️⃣ 💑 Combined Segmentation and Paging
↗ [Virtual Segmentation Combined with Virtual Paging](Virtual%20Segmentation%20Combined%20with%20Virtual%20Paging.md)


### 4️⃣ ⭐️ Putting It All Together: The TLB, Page Table, Cache, and Main Memory

![](../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%204.08.45%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%209.32.17%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%209.33.46%20PM.png)



## Protection & Sharing
Segmentation lends itself to the implementation of protection and sharing policies. Because each segment table entry includes a length as well as a base address, a pro- gram cannot inadvertently access a main memory location beyond the limits of a segment. To achieve sharing, it is possible for a segment to be referenced in the segment tables of more than one process. The same mechanisms are, of course, available in a paging system. However, in this case, the page structure of programs and data is not visible to the programmer, making the specification of protection and sharing requirements more awkward. Figure 8.13 illustrates the types of protection relation- ships that can be enforced in such a system.

More sophisticated mechanisms can also be provided. A common scheme is to use a ring-protection structure, of the type we referred to in Chapter 3 (see Figure 3.18). In this scheme, lower-numbered, or inner, rings enjoy greater privilege than higher-numbered, or outer, rings. Typically, ring 0 is reserved for kernel functions of the OS, with applications at a higher level. Some utilities or OS services may occupy an intermediate ring. Basic principles of the ring system are as follows:
• A program may access only data that reside on the same ring or a less-privileged ring.
• A program may call services residing on the same or a more-privileged ring.



## Fragmentation



## Ref