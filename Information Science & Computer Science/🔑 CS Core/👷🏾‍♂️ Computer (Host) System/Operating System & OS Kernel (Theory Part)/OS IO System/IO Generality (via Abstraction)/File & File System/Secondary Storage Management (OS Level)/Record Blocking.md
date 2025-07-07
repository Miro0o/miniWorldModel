# Record Blocking

[TOC]



## Res


## Intro
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%209.46.00%20AM.png)

As indicated in Figure 12.2, records are the logical unit of access of a structured file (As opposed to a file that is treated only as a stream of bytes, such as in the UNIX file system.), whereas blocks are the unit of I/O with secondary storage. For I/O to be performed, records must be organized as blocks.


### Recording Blocking Issues 
There are several issues to consider. First, should blocks be of fixed or variable length? On most systems, blocks are of fixed length. This simplifies I/O, buffer allocation in main memory, and the organization of blocks on secondary storage. Second, what should the relative size of a block be compared to the average record size? The trade-off is this: The larger the block, the more records that are passed in one I/O operation. If a file is being processed or searched sequentially, this is an advantage, because the number of I/O operations is reduced by using larger blocks, thus speeding up processing. On the other hand, if records are being accessed randomly and no particular locality of reference is observed, then larger blocks result in the unnecessary transfer of unused records. However, combining the frequency of sequential operations with the potential for locality of reference, we can say the I/O transfer time is reduced by using larger blocks. The competing concern is that larger blocks require larger I/O buffers, making buffer management more difficult.


### Blocking Design Based on Block Size

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.04.27%20PM.png)

> Figure 12.8 illustrates these methods assuming a file is stored in sequential blocks on a disk. The figure assumes the file is large enough to span two tracks. (The organization of data on a disk is in a concentric set of rings, called tracks. Each track is the same width as the read/write head. See Appendix J.) The effect would not be changed if some other file allocation scheme were used.

Given the size of a block, there are three methods of blocking that can be used:
1. **Fixed blocking**: Fixed-length records are used, and an integral number of records are stored in a block. There may be unused space at the end of each block. This is referred to as internal fragmentation.
2. **Variable-length spanned blocking**: Variable-length records are used and are packed into blocks with no unused space. Thus, some records must span two blocks, with the continuation indicated by a pointer to the successor block.
3. **Variable-length unspanned blocking**: Variable-length records are used, but spanning is not employed. There is wasted space in most blocks because of the inability to use the remainder of a block if the next record is larger than the remaining unused space.

Fixed blocking is the common mode for sequential files with fixed-length records. Variable-length spanned blocking is efficient of storage and does not limit the size of records. However, this technique is difficult to implement. Records that span two blocks require two I/O operations, and files are difficult to update, regard-less of the organization. Variable-length unspanned blocking results in wasted space and limits record size to the size of a block.

The record-blocking technique may interact with the virtual memory hardware, if such is employed. In a virtual memory environment, it is desirable to make the page the basic unit of transfer. Pages are generally quite small, so it is impractical to treat a page as a block for unspanned blocking. Accordingly, some systems combine multiple pages to create a larger block for file I/O purposes. This approach is used for VSAM files on IBM mainframes.



## Ref

