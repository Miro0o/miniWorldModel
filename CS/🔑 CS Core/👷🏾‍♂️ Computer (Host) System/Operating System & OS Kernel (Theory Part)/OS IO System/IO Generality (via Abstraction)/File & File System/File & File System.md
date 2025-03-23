# File & File System

[TOC]



## Res
### Related Topics
↗ [File Systems & Operating Systems](🎯%20File%20Systems%20Implementations/File%20Systems%20&%20Operating%20Systems.md)
↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../../OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)

↗ [Linux IO & Files Management](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/Linux%20IO%20&%20Files%20Management.md)
↗ [Text & File & Dir Management Basics](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Text%20&%20File%20&%20Dir%20Management/Text%20&%20File%20&%20Dir%20Management%20Basics.md)

↗ [NFS (Network File System)](../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/NAS%20(Network-Attached%20Storage)%20Protocols/NFS%20(Network%20File%20System)/NFS%20(Network%20File%20System).md)



## File & File System Overview
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%209.46.00%20AM.png)
<small>More at below "File System Functions & Organization"</small>


### Files Systems Overview
#### File System Functions & Services
See below "File System Architecture".
#### ⭐️ File System Properties (User Perspective)
- **Long-term existence**: Files are stored on disk or other secondary storage and do not disappear when a user logs off.
- **Sharable between processes**: Files have names and can have associated access permissions that permit controlled sharing.
- **Structure**: Depending on the file system, a file can have an internal structure that is convenient for particular applications. In addition, files can be organized into a hierarchical or more complex structure to reflect the relationships among files.
#### 🎯 Typical File System Operations (User Perspective)
- **Create**: A new file is defined and positioned within the structure of files.
- **Delete**: A file is removed from the file structure and subsequently destroyed.
- **Open**: An existing file is declared to be “opened” by a process, allowing the process to perform functions on the file.
- **Close**: The file is closed with respect to a process, so the process no longer may perform functions on the file, until the process opens the file again.
- **Read**: A process reads all or a portion of the data in a file.
- **Write**: A process updates a file, either by adding new data that expands the size of the file, or by changing the values of existing data items in the file.

**Typically, a file system maintains a set of attributes associated with the file**. These include owner, creation time, time last modified, and access privileges.


### ⭐️ File System Calls
> File system calls is the operating system’s abstraction (of a secondary storage) to manage files

Common functionalities include
- **basic data management** through file/directory operations
- **metadata (or attributes) management** such as owners, creation/modification time, permissions
#### Minimal Use Requirements for Fils System Calls
Data access and manipulation
- should be able to create, delete, open, close, read, write and modify files
- should be able to move data between files
- should be able to access his/her files by name
- should be able to restructure the user’s files in a form appropriate to the problem

Data access control and fault-tolerance
- May have controlled access to other users’ files
- May control what type of accesses are allowed to the users’ files
- Should be able to back up and recover files in case of damage
#### \* Real Requirements
File system calls in linux :
🔗 https://linasm.sourceforge.net/docs/syscalls/filesystem.php


### ⭐️ File Structure
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%2011.01.40%20AM.png)
#### Field
A **field** is the basic element of data. An individual field contains a single value, such as an employee’s last name, a date, or the value of a sensor reading. It is characterized by its length and data type (e.g., ASCII string, decimal). Depending on the file design, fields may be fixed length or variable length. In the latter case, the field often consists of two or three subfields: the actual value to be stored, the name of the field, and, in some cases, the length of the field. In other cases of variable-length fields, the length of the field is indicated by the use of special demarcation symbols between fields.
#### Record
A **record** is a collection of related fields that can be treated as a unit by some application program. For example, an employee record would contain such fields as name, social security number, job classification, date of hire, and so on. Again, depending on design, records may be of fixed length or variable length. A record will be of variable length if some of its fields are of variable length or if the number of fields may vary. In the latter case, each field is usually accompanied by a field name. In either case, the entire record usually includes a length field.
#### File
A **file** is a collection of similar records. The file is treated as a single entity by users and applications and may be referenced by name. Files have file names and may be created and deleted. Access control restrictions usually apply at the file level. That is, in a shared system, users and programs are granted or denied access to entire files. In some more sophisticated systems, such controls are enforced at the record or even the field level.

> Some file systems are structured only in terms of fields, not records. In that case, a file is a collection of fields.
#### Database
A **database** is a collection of related data. The essential aspects of a database are that the relationships that exist among elements of data are explicit, and that the data- base is designed for use by a number of different applications. A database may contain all of the information related to an organization or a project, such as a business or a scientific study. The database itself consists of one or more types of files. Usually, there is a separate database management system that is independent of the operating system, although that system may make use of some file management programs.
#### 🎯 Typical File System Operations (「File」System/ OS Perspective)
Users and applications wish to make use of files. Typical operations that must be supported include the following:

- **Retrieve_All**: Retrieve all the records of a file. This will be required for an application that must process all of the information in the file at one time. For example, an application that produces a summary of the information in the file would need to retrieve all records. This operation is often equated with the term sequential processing, because all of the records are accessed in sequence.
- **Retrieve_One**: This requires the retrieval of just a single record. Interactive, transaction-oriented applications need this operation.
- **Retrieve_Next**: This requires the retrieval of the record that is “next” in some logical sequence to the most recently retrieved record. Some interactive applications, such as filling in forms, may require such an operation. A program that is performing a search may also use this operation.
- **Retrieve_Previous**: Similar to Retrieve_Next, but in this case the record that is “previous” to the currently accessed record is retrieved.
- **Insert_One**: Insert a new record into the file. It may be necessary that the new record fit into a particular position to preserve a sequencing of the file.
- **Delete_One**: Delete an existing record. Certain linkages or other data structures may need to be updated to preserve the sequencing of the file.
- **Update_One**: Retrieve a record, update one or more of its fields, and rewrite the updated record back into the file. Again, it may be necessary to preserve sequencing with this operation. If the length of the record has changed, the update operation is generally more difficult than if the length is preserved.
- **Retrieve_Few**: Retrieve a number of records. For example, an application or user may wish to retrieve all records that satisfy a certain set of criteria.



## File System Organization  & Architectures
### File System Hierarchy
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%2010.02.12%20AM.png)

- At the lowest level, **device drivers** **communicate directly with peripheral devices or their controllers or channels**. A device driver is responsible for starting I/O operations on a device and processing the completion of an I/O request. For file operations, the typical devices controlled are disk and tape drives (this statement may be oldish). ==Device drivers are usually considered to be part of the operating system==.

- The next level is referred to as the **basic file system**, or the **physical I/O level**. This is the primary interface with the environment outside of the computer system. It deals with blocks of data that are exchanged with disk or tape systems. **Thus, it is concerned with the placement of those blocks on the secondary storage device and on the buffering of those blocks in main memory**. It does not understand the content of the data or the structure of the files involved. The basic file system is often considered part of the operating system.

- The **basic I/O supervisor** is **responsible for all file I/O initiation and termination**. At this level, control structures are maintained that deal with device I/O, scheduling, and file status. The basic I/O supervisor selects the device on which file I/O is to be performed, based on the particular file selected. It is also concerned with scheduling disk and tape accesses to optimize performance. I/O buffers are assigned and secondary memory is allocated at this level. The basic I/O supervisor is part of the operating system.

- **Logical I/O** enables users and applications to access records. Thus, whereas the basic file system deals with blocks of data, the logical I/O module deals with file records. Logical I/O provides a general-purpose record I/O capability and maintains basic data about files.

- The level of the file system closest to the user is often termed the **access method**. It provides a standard interface between applications and the file systems and devices that hold the data. Different access methods reflect different file structures and different ways of accessing and processing the data.


### ⭐️ File System Functions & Organization
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%209.46.00%20AM.png)

> Figure 12.2 suggests a division between what might be considered the concerns of the file management system as a separate system utility and the concerns of the operating system, with the point of intersection being record processing. ==This division is arbitrary; various approaches are taken in various systems.==

Another way of viewing the functions of a file system is shown above. Let us follow this diagram from left to right. 
#### 1️⃣ File Management Systems (User Level Concerns)
> ↗ [File Management (User Level)](File%20Management%20(User%20Level)/File%20Management%20(User%20Level).md)

1. Users and application programs **interact** with the file system by means of commands for creating and deleting files and for performing operations on files. 
2. Before performing any operation, the file system must identify and **locate the selected file**. This requires the use of some sort of **directory** that serves to describe the location of all files, plus their attributes.
3. In addition, most shared systems enforce user **access control**: Only authorized users are allowed to access particular files in particular ways. 
4. The basic operations that a user or an application may perform on a file are **performed at the record level**. The user or application views the file as having some structure that organizes the records, such as a sequential structure (e.g., personnel records are stored alphabetically by last name). Thus, to translate user commands into specific file manipulation commands, the **access method** appropriate to this file structure must be employed.
#### 2️⃣ (Secondary) Storage Management Systems (OS Level Concerns)
> ↗ [Secondary Storage Management (OS Level)](Secondary%20Storage%20Management%20(OS%20Level)/Secondary%20Storage%20Management%20(OS%20Level).md)

Whereas users and applications are concerned with records or fields, I/O is done on a **block basis**. 
1. Thus, the records or fields of a file must be organized as a sequence of blocks for output and unblocked after input. To support block I/O of files, several functions are needed. The secondary storage must be managed. 
	1. This involves allocating files to free blocks on secondary storage and managing free storage so as to know what blocks are available for new files and growth in existing files.
2. In addition, individual block I/O requests must be **scheduled**; this issue was dealt with in Chapter 11. Both disk scheduling and file allocation are concerned with optimizing performance. As might be expected, these functions therefore need to be considered together. 
3. Furthermore, the optimization will depend on the **structure of the files** and the **access patterns**. Accordingly, developing an optimum file management system from the point of view of performance is an exceedingly complicated task.


### Aspects of File Systems 



## 🎯 Types of File Systems
↗ [File Systems Implementations](🎯%20File%20Systems%20Implementations/File%20Systems%20Implementations.md)
↗ [File Systems & Operating Systems](🎯%20File%20Systems%20Implementations/File%20Systems%20&%20Operating%20Systems.md)



## Ref
[👍 File system | Wikipedia]: https://en.wikipedia.org/wiki/File_system#

[👍 Linux Cygwin知识库（二）：目录、文件及基本操作]: https://silaoa.github.io/2019/2019-05-04-Linux%20Cygwin知识库（二）：目录、文件及基本操作.html

[如何选择文件系统：EXT4、Btrfs 和 XFS]: https://linux.cn/article-7083-1.html
