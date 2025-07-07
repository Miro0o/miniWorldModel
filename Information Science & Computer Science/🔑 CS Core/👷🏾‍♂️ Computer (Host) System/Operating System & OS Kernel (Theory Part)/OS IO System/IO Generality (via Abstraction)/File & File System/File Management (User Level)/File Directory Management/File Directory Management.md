# File Directory Management

[TOC]



## Res



## Intro
Associated with any file management system and collection of files is a file directory. The directory contains information about the files, including attributes, location, and ownership. 
- Much of this information, especially that concerned with storage, is managed by the operating system.
- Although some of the information in directories is available to users and applications, this is generally provided indirectly by system routines.
- The directory is itself a file, accessible by various file management routines. 


### Contents of Directories
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-01%20at%202.30.59%20PM.png)



## Structures of Directories
### 🍽️ Types of Operations of Directories
To understand the requirements for a file structure, it is helpful to consider the types of operations that may be performed on the directory:
- **Search**: When a user or application references a file, the directory must be searched to find the entry corresponding to that file.
- **Create file**: When a new file is created, an entry must be added to the directory.
- **Delete file**: When a file is deleted, an entry must be removed from the directory.
- **List directory**: All or a portion of the directory may be requested. Generally, this request is made by a user and results in a listing of all files owned by that user, plus some of the attributes of each file (e.g., type, access control information, usage information).
- **Update directory**: Because some file attributes are stored in the directory, a change in one of these attributes requires a change in the corresponding directory entry.


### Single-Level Directory (List Structure) & Two-Level Directory
The simplest form of structure for a directory is that of a **list** of entries, one for each file. This structure could be represented by a **simple sequential file**, with the name of the file serving as the key. In some earlier single-user systems, this technique has been used. However, it is inadequate when multiple users share a system and even for single users with many files.

However, the simple list is not suited to supporting those operations listed above. 
Consider the needs of a single user. The user may have many types of files, including word-processing text files, graphic files, and spreadsheets. 
1. The user may like to have these organized by project, by type, or in some other convenient way. If the directory is a simple sequential list, it provides no help in organizing the files and forces the user to be careful not to use the same name for two different types of files. 
2. The problem is much worse in a shared system. Unique naming becomes a serious problem.
3. Furthermore, it is difficult to conceal portions of the overall directory from users when there is no inherent structure in the directory.

A start in solving these problems would be to go to a **two-level scheme**. In this case, there is one directory for each user, and a master directory. The master directory has an entry for each user directory, providing address and access control information. Each user directory is a simple list of the files of that user. This arrangement means names must be unique only within the collection of files of a single user, and the file system can easily enforce access restriction on directories. However, it still provides users with no help in structuring collections of files.


### 🎖️ Hierarchical /Tree-structured Directory 

![|500](../../../../../../../../../Assets/Pics/Screenshot%202023-06-01%20at%202.31.24%20PM.png)

#### Naming
In the hierarchical directory system, each subdirectory and file has a unique name inside a directory (一个目录下的子目录和文件的名字是唯一的)

The pathname is the concatenation of all names on the path from the root to a directory or a file, which is unique in a system  (路径名是从根目录到目标目录或目标文件的路径上所有节点的名字连接的结果，在系统中唯一)


#### Pathname & Reference
> Reference a file/directory by absolute path, i.e., pathname, or relative path, i.e., name relative to a working directory (通过绝对路径或者相对路径引用文件)

![|500](../../../../../../../../../Assets/Pics/Screenshot%202023-06-01%20at%202.32.54%20PM.png)



## Implementations of Directories in File Systems
### Unix File System
![](../../../../../../../../../Assets/Pics/Pasted%20image%2020230316140056.png)

More at ↗ [UNIX File System](../../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/UNIX%20Family/📌%20UNIX%20Kernel/UNIX%20IO%20&%20Files%20Management/UNIX%20File%20System/UNIX%20File%20System.md)


### Linux File System
↗ [Linux File System](../../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20System.md)


### Windows File System
↗ [Window File System](../../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20File%20System/Window%20File%20System.md)


### MacOS File System
↗ [macOS File System](../../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20IO%20&%20Files%20Management/macOS%20File%20System/macOS%20File%20System.md)




## Ref

