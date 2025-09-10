# Resident Set Policy

[TOC]



## Res
### Related Topics



## Intro
Recall in replacement policy, following questions are raised:

- How many page frames are to be allocated to each active process (🔔 **discussed in resident set management**)
- Whether the set of pages to be considered for replacement should be limited to those of the process that caused the page fault or encompass all the page frames in main memory (🔔 **discussed in resident set management**)
- Among the set of pages considered, which particular page should be selected for replacement (**discussed in replacement policy**)


### Resident Set Size 
With paged virtual memory, it is not necessary (and indeed may not be possible) to bring all of the pages of a process into main memory to prepare it for execution. Thus, the OS must decide how many pages to bring in, that is, how much main memory to allocate to a particular process. Several factors come into play:
- The smaller the amount of memory allocated to a process, the more processes that can reside in main memory at any one time. This increases the probability that the OS will find at least one ready process at any given time, and hence reduces the time lost due to swapping.
- If a relatively small number of pages of a process are in main memory, then, despite the principle of locality, the rate of page faults will be rather high (see Figure 8.10b).
- Beyond a certain size, additional allocation of main memory to a particular process will have no noticeable effect on the page fault rate for that process because of the principle of locality.


#### 1️⃣-1️⃣ Fixed-Allocation Policy
A fixed-allocation policy gives a process a fixed number of frames in main memory within which to execute. That number is decided at initial load time (process creation time) and may be determined based on the type of pro- cess (interactive, batch, type of application) or may be based on guidance from the programmer or system manager. With a fixed-allocation policy, whenever a page fault occurs in the execution of a process, one of the pages of that process must be replaced by the needed page.


#### 1️⃣-2️⃣ Variable-Allocation Policy
A variable-allocation policy allows the number of page frames allocated to a process to be varied over the lifetime of the process. Ideally, a process that is suffer- ing persistently high levels of page faults (indicating that the principle of locality only holds in a weak form for that process) will be given additional page frames to reduce the page fault rate; whereas a process with an exceptionally low page fault rate (indicating that the process is quite well behaved from a locality point of view) will be given a reduced allocation, with the hope that this will not noticeably increase the page fault rate. The use of a variable-allocation policy relates to the concept of replacement scope, as explained in the next subsection.

The variable-allocation policy would appear to be the more powerful one. How-ever, the difficulty with this approach is that it requires the OS to assess the behavior of active processes. This inevitably requires software overhead in the OS, and is dependent on hardware mechanisms provided by the processor platform.


### Replacement Scope
#### 2️⃣-1️⃣ Local Replacement Policy
A local replacement policy chooses only among the resident pages of the process that generated the page fault in selecting a page to replace.


#### 2️⃣-2️⃣ Global Replacement Policy
A global replacement policy considers all unlocked pages in main memory as candidates for replacement, regardless of which process owns a particular page.

> As mentioned earlier, when a frame is locked, the page currently stored in that frame may not be replaced. An unlocked page is simply a page in a frame of main memory that is not locked. While it happens that local policies are easier to analyze, there is no convincing evidence that they perform better than global policies, which are attractive because of their simplicity of implementation and minimal overhead [CARR84, MAEK87].



## Resident Set Management Basics
![](../../../../../../../Assets/Pics/Screenshot%202023-05-11%20at%203.28.22%20PM.png)


### 1️⃣ Fixed Allocation, Local Scope
![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%208.21.42%20PM.png)

For this case, we have a process that is running in main memory with a fixed number of frames. When a page fault occurs, the OS must choose which page is to be replaced from among the currently resident pages for this process. Replacement algorithms such as those discussed in the preceding subsection can be used.

With a fixed-allocation policy, it is necessary to decide ahead of time the amount of allocation to give to a process. This could be decided on the basis of the type of application and the amount requested by the program. The drawback to this approach is twofold: If allocations tend to be too small, then there will be a high page fault rate, causing the entire multiprogramming system to run slowly. If allocations tend to be unnecessarily large, then there will be too few programs in main memory, and there will be either considerable processor idle time or considerable time spent in swapping.


### 2️⃣ Variable Allocation, Global Scope
![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%208.23.10%20PM.png)

This combination is perhaps the easiest to implement and has been adopted in a number of operating systems. At any given time, there are a number of processes in main memory, each with a certain number of frames allocated to it. Typically, the OS also maintains a list of free frames. When a page fault occurs, a free frame is added to the resident set of a process, and the page is brought in. Thus, a process experiencing page faults will gradually grow in size, which should help reduce overall page faults in the system.

The difficulty with this approach is in the replacement choice. When there are no free frames available, the OS must choose a page currently in memory to replace. The selection is made from among all of the frames in memory, except for locked frames such as those of the kernel. Using any of the policies discussed in the preceding subsection, the page selected for replacement can belong to any of the resident processes; there is no discipline to determine which process should lose a page from its resident set. Therefore, the process that suffers the reduction in resident set size may not be optimum.

One way to counter the potential performance problems of a variable allocation, global-scope policy is to use page buffering. In this way, the choice of which page to replace becomes less significant, because the page may be reclaimed if it is referenced before the next time that a block of pages are overwritten.



### 3️⃣ Variable Allocation, Local Scope
![](../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%208.23.44%20PM.png)





## Ref

