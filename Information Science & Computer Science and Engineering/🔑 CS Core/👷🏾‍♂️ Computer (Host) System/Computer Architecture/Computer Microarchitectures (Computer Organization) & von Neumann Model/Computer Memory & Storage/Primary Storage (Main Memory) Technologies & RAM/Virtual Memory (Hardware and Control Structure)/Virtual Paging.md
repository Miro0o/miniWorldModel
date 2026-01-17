# Virutal Paging

[TOC]



## Res
### Related Topics



## Intro
> 💡 The success of paging, like that of cache, is dependent on the locality principle.

The term virtual memory is usually associated with systems that employ paging, although virtual memory based on segmentation is also used and will be discussed next. The use of paging to achieve virtual memory was first reported for the Atlas computer [KILB62] and soon came into widespread commercial use. Recall from ↗ [Simple Paging & Segmentation](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Simple%20Paging%20&%20Segmentation/Simple%20Paging%20&%20Segmentation.md) that with simple paging, main memory is divided into a number of equalsize frames. Each process is divided into a number of equal-size pages of the same length as frames. A process is loaded by loading all of its pages into available, not necessarily contiguous, frames. With virtual memory paging, we again have equal-size pages of the same length as frames; however, NOT ALL pages need to be loaded into main memory frames for execution.

> The basic idea behind paging is quite simple: Allocate physical memory to processes in **fixed-size chunks (page frames)** and keep track of where the various pages of the process reside by recording information in a **page table**.

==Every process has its own page table==, which typically resides in main memory; the page table stores the physical location of each virtual page of the process.


### Virtual Address: Formats & Translations
#### Virtual Page Address Format
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2010.58.47%20AM.png)

#### Virtual Page Address Translation
The basic mechanism for reading a word from memory involves the **translation** of a virtual, or logical, address, consisting of page number and offset, into a physical address, consisting of frame number and offset, using a page table. Because the page table is of variable length, depending on the size of the process, we cannot expect to hold it in registers. Instead, it must be in main memory to be accessed. Figure 8.2 suggests a hardware implementation. When a particular process is running, a register holds the starting address of the page table for that process. The page number of a virtual address is used to index that table and look up the corresponding frame number. This is combined with the offset portion of the virtual address to produce the desired real address. Typically, the page number field is longer than the frame number field. This inequality results from the fact that the number of pages in a process may exceed the number of frames in main memory.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2010.40.40%20AM.png)


### Page Table Structure
#### Basic Fields in Page Table
The **page table** has N rows, where N is the number of virtual pages in the process. Each **page table entry (PTE)** contains the **frame number** of the corresponding page in main memory. If there are pages of the process currently not in main memory, the page table indicates this by setting a **valid bit** to 0; if the page is in main memory, the valid bit is set to 1. Therefore, each entry of the page table has two fields: a valid bit and a frame number.


#### Additional Fields in Virtual Paging Systems
A page table is also needed for a virtual memory scheme based on paging. Again, it is typical to associate a unique page table with each process.  In this case, however, the page table entries become more complex. 

1️⃣ For example, a **dirty bit** (or a **modify bit**) could be added to indicate whether the page has been changed. This makes returning the page to disk more efficient, because if it is not modified, it does not need to be rewritten to disk.

> Because only some of the pages of a process may be in main memory, a bit is needed in each page table entry to indicate whether the corresponding page is **present (P)** in main memory or not. If the bit indicates that the page is in memory, then the entry also includes the frame number of that page.

2️⃣ Another bit (the **usage bit**) can be added to indicate the page usage. This bit is set to 1 whenever the page is accessed. After a certain time period, the usage bit is set to 0. If the page is referenced again, the usage bit is set to 1. However, if the bit remains 0, this indicates that the page has not been used for a period of time, and the system might benefit by sending this page out to disk.

> The page table entry includes a **modify (M)** bit, indicating whether the contents of the corresponding page have been altered since the page was last loaded into main memory. If there has been no change, then it is not necessary to write the page out when it comes time to replace the page in the frame that it currently occupies. Other control bits may also be present. For example, if protection or sharing is managed at the page level, then bits for that purpose will be required.

By doing so, the system frees up this page’s location for another page that the process eventually needs (we discuss this in more detail when we introduce replacement algorithms).


### Paging EAT (Effective Access Time)



## ⭐️ TLB (Translation Look-aside Buffer)
> ↗ [MMU (Memory Management Unit)](../../../🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/MMU%20(Memory%20Management%20Unit).md)

We can speed up the page table lookup by storing the most recent page lookup values in a page table cache called a **translation look-aside buffer (TLB)**. Each TLB entry consists of a virtual page number and its corresponding frame number.

Typically, the TLB is implemented as associative cache, and the virtual page/frame pairs can be mapped anywhere. Here are the steps necessary for an address lookup when using a TLB.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2011.15.58%20AM.png)


### 1️⃣ TLB & Paging
![](../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%204.09.02%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2011.16.28%20AM.png)


### 2️⃣ TLB & Cache Operation
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%207.37.27%20PM.png)


### 3️⃣ TLB & All !
↗ [Virtual Memory (Hardware and Control Structure)](Virtual%20Memory%20(Hardware%20and%20Control%20Structure).md)



## 🪜 Page Table Hierarchy
In most systems, there is one page table per process. But each process can occupy huge amounts of virtual memory. For example, in the VAX (Virtual Address Extension) architecture, each process can have up to 231 = 2 GB of virtual memory. Using 29 = 512@byte pages means that as many as 222 page table entries are required per process. Clearly, the amount of memory devoted to page tables alone could be unacceptably high. To overcome this problem, most virtual memory schemes store page tables in virtual memory rather than real memory. This means page tables are subject to paging just as other pages are. When a process is running, at least a part of its page table must be in main memory, including the page table entry of the currently executing page. Some processors make use of a two-level scheme to organize large page tables. In this scheme, there is a page directory, in which each entry points to a page table. Thus, if the number of entries in the page directory is X, and if the maximum number of entries in a page table is Y, then a process can consist of up to X * Y pages. Typically, the maximum length of a page table is restricted to be equal to one page. For example, the Pentium processor uses this approach.

Figure 8.3 shows an example of a two-level scheme typical for use with a 32-bit address. If we assume byte-level addressing and 4-kB (212) pages, then the 4-GB (232) virtual address space is composed of 220 pages. If each of these pages is mapped by a 4-byte page table entry, we can create a user page table composed of 220 PTEs requiring 4 MB (222). This huge user page table, occupying 210 pages, can be kept in virtual memory and mapped by a root page table with 210 PTEs occupying 4 kB (212) of main memory. Figure 8.4 shows the steps involved in address translation for this scheme. The root page always remains in main memory. The first 10 bits of a virtual address are used to index into the root page to find a PTE for a page of the user page table. If that page is not in main memory, a page fault occurs. If that page is in main memory, then the next 10 bits of the virtual address index into the user PTE page to find the PTE for the page that is referenced by the virtual address.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2011.12.10%20AM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2011.14.24%20AM.png)


### Inverted Page Table
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2011.15.25%20AM.png)



## Internal Fractions
#TODO 



## ⭐️ Page Size Issues
### Page Size Decision Dilemma
An important hardware design decision is the size of page to be used. 

- There are several factors to consider. One is internal fragmentation. Clearly, the smaller the page size, the lesser is the amount of internal fragmentation. To optimize the use of main memory, we would like to reduce internal fragmentation. 
- On the other hand, the smaller the page, the greater is the number of pages required per process. More pages per process means larger page tables. For large programs in a heavily multiprogrammed environment, this may mean that some portion of the page tables of active processes must be in virtual memory, not in main memory. 
	- Another factor is that the physical characteristics of most secondary memory devices, which are rotational, favor a larger page size for more efficient block transfer of data.

Thus, there may be a **double page fault** for a single reference to memory: first to bring in the needed portion of the page table, and second to bring in the process page. 


### Page Size Complications
#### Page Size & Page Faults Ratios
Complicating these matters is the effect of page size on the rate at which page faults occur. This behavior, in general terms, is depicted in Figure 8.10a and is based on the principle of locality. 

If the page size is very small, then ordinarily a relatively large number of pages will be available in main memory for a process. After a time, the pages in memory will all contain portions of the process near recent references. Thus, the page fault rate should be low. As the size of the page is increased, each individual page will contain locations further and further from any particular recent reference. Thus, the effect of the principle of locality is weakened and the page fault rate begins to rise. Eventually, however, the page fault rate will begin to fall as the size of a page approaches the size of the entire process (point P in the diagram). When a single page encompasses the entire process, there will be no page faults.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2011.17.00%20AM.png)


#### Number of Page Frames & Page Fault Rate
A further complication is that the page fault rate is also determined by the number of frames allocated to a process. Figure 8.10b shows that for a fixed page size, the fault rate drops as the number of pages maintained in main memory grows.3 Thus, a software policy (the amount of memory to allocate to each process) interacts with a hardware design decision (page size).

Table 8.3 lists the page sizes used on some machines.

#### Physical Main Memory Size & Program Size
Finally, the design issue of page size is related to the size of physical main memory and program size. At the same time that main memory is getting larger, the address space used by applications is also growing. The trend is most obvious on personal computers and workstations, where applications are becoming increasingly complex. Furthermore, contemporary programming techniques used in large programs tend to decrease the locality of references within a process [HUCK93]. For example,
- Object-oriented techniques encourage the use of many small program and data modules with references scattered over a relatively large number of objects over a relatively short period of time.
- Multithreaded applications may result in abrupt changes in the instruction stream and in scattered memory references.


#### TLB: the Bottleneck
For a given size of TLB, as the memory size of processes grows and as locality decreases, the hit ratio on TLB accesses declines. Under these circumstances, the TLB can become a performance bottleneck (e.g., see [CHEN92]).

One way to improve TLB performance is to use a larger TLB with more entries. However, TLB size interacts with other aspects of the hardware design, such as the main memory cache and the number of memory accesses per instruction cycle [TALL92]. The upshot is that TLB size is unlikely to grow as rapidly as main memory size. An alternative is to use larger page sizes so each page table entry in the TLB refers to a larger block of memory. But we have just seen that the use of large page sizes can lead to performance degradation.


### Page Size Solutions #TODO 
Accordingly, a number of designers have investigated the use of multiple page sizes [TALL92, KHAL93], and several microprocessor architectures support multiple pages sizes, including MIPS R4000, Alpha, UltraSPARC, x86, and IA-64. Multiple page sizes provide the flexibility needed to use a TLB effectively. For example, large contiguous regions in the address space of a process, such as program instructions, may be mapped using a small number of large pages rather than a large number of small pages, while thread stacks may be mapped using the small page size. However, most commercial operating systems still support only one page size, regardless of the capability of the underlying hardware. The reason for this is that page size affects many aspects of the OS; thus, a change to multiple page sizes is a complex undertaking (see [GANA98] for a discussion).


![](../../../../../../../../Assets/Pics/Screenshot%202023-05-18%20at%2011.17.13%20AM.png)



## 🆚 Pros & Cons of Paging
### Paging Cons
1️⃣ Virtual memory implemented through paging adds an extra memory reference when accessing data. This time penalty is partially alleviated by using a TLB to cache page table entries. However, even with a high hit ratio in the TLB, this process still incurs translation overhead.

2️⃣ Another disadvantage of virtual memory and paging is the extra resource consumption (the memory overhead for storing page tables). In extreme cases (very large programs), the page tables may take up a significant portion of physical memory. One solution offered for this latter problem is to page the page tables, which can get very confusing indeed!

3️⃣ Virtual memory and paging also require special hardware and operating system support.


### Paging Pros
1️⃣ Programs are no longer restricted by the amount of physical memory that is available. Virtual memory permits us to run individual programs whose virtual address space is larger than physical memory. (In effect, this allows one process to share physical memory with itself.) This makes it much easier to write programs because the programmer no longer has to worry about the physical address space limitations.

2️⃣ Because each program requires less physical memory, virtual memory also permits us to run more programs at the same time. This allows us to share the machine among processes whose total address space sizes exceed the physical memory size, resulting in an increase in CPU utilization and system throughput.

3️⃣ The fixed size of frames and pages simplifies both allocation and placement from the perspective of the operating system. Paging also allows the operating system to specify protection (“this page belongs to User X and you can’t access it”) and sharing (“this page belongs to User X but you can read it”) on a per-page basis.



## Ref
[Difference between virtual page and page frame? | Stackoverflow]: https://stackoverflow.com/a/57639554/16542494 


