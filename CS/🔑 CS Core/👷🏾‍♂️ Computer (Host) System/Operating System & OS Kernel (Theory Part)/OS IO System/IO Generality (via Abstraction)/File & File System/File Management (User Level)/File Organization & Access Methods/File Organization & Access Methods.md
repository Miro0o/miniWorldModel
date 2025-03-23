# File Organization & Access Methods

[TOC]



## Res


## Intro
In this section, we use the term **file organization** to refer to the **logical structuring of the records** as determined by the way in which they are accessed. 

> The physical organization of the file on secondary storage depends on the blocking strategy and the file allocation strategy, issues dealt with at ↗ [Secondary Storage Management (OS Level)](../../Secondary%20Storage%20Management%20(OS%20Level)/Secondary%20Storage%20Management%20(OS%20Level).md)

In choosing a file organization, several criteria are important:
• Short access time
• Ease of update
• Economy of storage
• Simple maintenance
• Reliability

The relative priority of these criteria will depend on the applications that will use the file. For example, if a file is only to be processed in batch mode, with all of the records accessed every time, then rapid access for retrieval of a single record is of minimal concern. A file stored on CD-ROM will never be updated, and so ease of update is not an issue.

These criteria may conflict. For example, for economy of storage, there should be minimum redundancy in the data. On the other hand, redundancy is a primary means of increasing the speed of access to data. An example of this is the use of indexes.

The number of alternative file organizations that have been implemented or just proposed is unmanageably large, even for a book devoted to file systems. In this brief survey, we will outline five fundamental organizations. Most structures used in actual systems either fall into one of these categories, or can be implemented with a combination of these organizations. The five organizations, the first four of which are depicted in Figure 12.3, are as follows:

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%2010.23.38%20AM.png)



## Pile File
↗ [Pile File](Pile%20File/Pile%20File.md)



## Sequential File
↗ [Sequential File](Sequential%20File/Sequential%20File.md)


### Indexed Sequential File
↗ [Indexed Sequential File (Index + Sequence)](Sequential%20File/Indexed%20Sequential%20File%20(Index%20+%20Sequence)/Indexed%20Sequential%20File%20(Index%20+%20Sequence).md)



## Indexed File (Index + Pile)
↗ [Indexed File (Index + Pile)](Indexed%20File%20(Index%20+%20Pile)/Indexed%20File%20(Index%20+%20Pile).md)



## Direct /Hash File
The direct, or hashed, file exploits the capability found on disks to access directly any block of a known address. As with sequential and indexed sequential files, a key field is required in each record. However, there is no concept of sequential ordering here.

The direct file makes use of hashing on the key value. This function is explained in Appendix F. Figure F.1b shows the type of hashing organization with an overflow file that is typically used in a hash file.

Direct files are often used where very rapid access is required, where fixed-length records are used, and where records are always accessed one at a time. Examples are **directories**, **pricing tables**, **schedules**, and **name lists**.

#TODO 



## Ref

