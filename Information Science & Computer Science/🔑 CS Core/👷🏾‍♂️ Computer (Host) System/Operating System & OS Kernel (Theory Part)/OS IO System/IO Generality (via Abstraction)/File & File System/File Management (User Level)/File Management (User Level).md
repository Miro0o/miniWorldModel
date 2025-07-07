# File Management (User Level)

[TOC]



## Res


## Intro
A file management system is that **set of system software that provides services to users and applications in the use of files**. Typically, the only way a user or application may access files is through the file management system. This relieves the user or programmer of the necessity of developing special-purpose software for each application and provides the system with a consistent, well-defined means of controlling its most important asset.


### File Management System Objectives
[GROS86] suggests the following objectives for a file management system:
- To meet the **data management** needs and **requirements of the user**, which include storage of data and the ability to perform the aforementioned operations
- To guarantee, to the extent possible, that the data in the file are valid
- To optimize **performance**, both from the system point of view in terms of overall throughput, and from the user’s point of view in terms of **response time**
- To provide **I/O support** for a variety of storage device types
- To minimize or eliminate the potential for **lost or destroyed data**
- To provide a standardized set of **I/O interface routines** to user processes
- To provide I/O support for multiple users, in the case of **multiple-user systems**
#### Minimal User Requirements For File Management System
With respect to the first point, meeting user requirements, the extent of such requirements depends on the variety of applications and the environment in which the computer system will be used. For an interactive, general-purpose system, the following constitute a minimal set of requirements:
1. Each user should be able to create, delete, read, write, and modify files.
2. Each user may have controlled access to other users’ files.
3. Each user may control what types of accesses are allowed to the user’s files.
4. Each user should be able to move data between files.
5. Each user should be able to back up and recover the user’s files in case of damage.
6. Each user should be able to access his or her files by name rather than by numeric identifier.

These objectives and requirements should be kept in mind throughout our discussion of file management systems.



## Ref
[👍 Linux Cygwin知识库（二）：目录、文件及基本操作]: https://silaoa.github.io/2019/2019-05-04-Linux%20Cygwin知识库（二）：目录、文件及基本操作.html

