# Secondary Storage Management (OS Level)

[TOC]



## Res
↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../../../OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)



## Intro
> Goal: Manage the disk space to support a stream of file operations, i.e., insertion and deletion (管理磁盘空间，支持一系列文件操作)

Two basic tasks:
- File allocation: Given a set of blocks associated with a file and the set of available disk blocks, determine where to place the blocks (文件分配：决定文件的数据块在二级存储中存放的盘块位置)
- Free space management: Keep track of available disk blocks (空闲空间管理：维护可用盘块集合)

### Volumes
The term volume is used somewhat differently by different operating systems and file management systems, but in essence a volume is a logical disk. [CARR05] defines a volume as follows:

> Volume: A collection of addressable sectors in secondary memory that an OS or application can use for data storage. The sectors in a volume need not be consecutive on a physical storage device; instead, they need only appear that way to the OS or application. A volume may be the result of assembling and merging smaller volumes.

In the simplest case, a single disk equals one volume. Frequently, a disk is divided into partitions, with each partition functioning as a separate volume. It is also common to treat multiple disks as a single volume or partitions on multiple disks as a single volume.


### Reliability
Consider the following scenario:
1. User A requests a file allocation to add to an existing file.
2. The request is granted and the disk and file allocation tables are updated in main memory but not yet on disk.
3. The system crashes and subsequently restarts.
4. User B requests a file allocation and is allocated space on disk that overlaps the last allocation to user A.
5. User A accesses the overlapped portion via a reference that is stored inside A’s file. 

This difficulty arose because the system maintained a copy of the disk allocation table and file allocation table in main memory for efficiency. To prevent this type of error, the following steps could be performed when a file allocation is requested:
1. . Lock the disk allocation table on disk. This prevents another user from causing alterations to the table until this allocation is completed.
2. Search the disk allocation table for available space. This assumes a copy of the disk allocation table is always kept in main memory. If not, it must first be read in.
3. Allocate space, update the disk allocation table, and update the disk. Updating the disk involves writing the disk allocation table back onto disk. For chained disk allocation, it also involves updating some pointers on disk.
4. Update the file allocation table and update the disk.
5. Unlock the disk allocation table.

This technique will prevent errors. However, when small portions are allocated frequently, the impact on performance will be substantial. To reduce this overhead, a batch storage allocation scheme could be used. In this case, a batch of free portions on the disk is obtained for allocation. The corresponding portions on disk are marked “in use.” Allocation using this batch may proceed in main memory. When the batch is exhausted, the disk allocation table is updated on disk and a new batch may be acquired. If a system crash occurs, portions on the disk marked “in use” must be cleaned up in some fashion before they can be reallocated. The technique for cleanup will depend on the file system’s particular characteristics.



## Secondary Storage Management Tasks 
### File Allocation
↗ [File Allocation](File%20Allocation.md)

### Free Space Management
↗ [Free Space Management](Free%20Space%20Management.md)







## Ref

