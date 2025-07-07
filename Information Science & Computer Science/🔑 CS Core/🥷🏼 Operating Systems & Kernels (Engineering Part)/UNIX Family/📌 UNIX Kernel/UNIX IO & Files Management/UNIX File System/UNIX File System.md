# Unix File System

[TOC]



## Res
### Related Topics
↗ [Linux File System](../../../../Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20System.md)
↗ [File & File System](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)



## Intro
[Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") operating systems create a virtual file system, which makes all the files on all the devices appear to exist in a single hierarchy. This means, in those systems, there is one [root directory](https://en.wikipedia.org/wiki/Root_directory "Root directory"), and every file existing on the system is located under it somewhere. Unix-like systems can use a [RAM disk](https://en.wikipedia.org/wiki/RAM_disk "RAM disk") or network shared resource as its root directory.


### File System Mounting
Unix-like systems assign a device name to each device, but this is not how the files on that device are accessed. Instead, to gain access to files on another device, the operating system must first be informed where in the directory tree those files should appear. This process is called [mounting](https://en.wikipedia.org/wiki/Mount_(computing) "Mount (computing)") a file system. 

For example, to access the files on a [CD-ROM](https://en.wikipedia.org/wiki/CD-ROM "CD-ROM"), one must tell the operating system "Take the file system from this CD-ROM and make it appear under such-and-such directory." The directory given to the operating system is called the _[mount point](https://en.wikipedia.org/wiki/Mount_point "Mount point")_ – it might, for example, be /media. The /media directory exists on many Unix systems (as specified in the [Filesystem Hierarchy Standard](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard "Filesystem Hierarchy Standard")) and is intended specifically for use as a mount point for removable media such as CDs, DVDs, USB drives or floppy disks. It may be empty, or it may contain subdirectories for mounting individual devices. Generally, only the [administrator](https://en.wikipedia.org/wiki/System_administrator "System administrator") (i.e. [root user](https://en.wikipedia.org/wiki/Root_user "Root user")) may authorize the mounting of file systems.

[Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") operating systems often include software and tools that assist in the mounting process and provide it new functionality. Some of these strategies have been coined "**auto-mounting**" as a reflection of their purpose.


### FHS (Filesystem Hierarchy Standard)
FHS is not considered to be some authority on directory structure and contents for absolutely every Linux distribution, but it is ==generally the most common standard of linux file layout.== All directories and files in FHS appear under ‘/’ (i.e. the root directory).

↗ [FHS (Filesystem Hierarchy Standard)](../../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Referenced%20Specifications/FHS%20(Filesystem%20Hierarchy%20Standard).md)



## 🎹 Types of Unix Files
↗ [Unix File Types & Formats](Unix%20File%20Types%20&%20Formats/Unix%20File%20Types%20&%20Formats.md)



## Unix Directory System
↗ [Unix Directory System](Unix%20Directory%20System.md)



## Ref
[Unix File System | GeekesforGeeks]: https://www.geeksforgeeks.org/unix-file-system/

[👍  Unix filesystem | Wikipedia]: https://en.wikipedia.org/wiki/Unix_filesystem#Conventional_directory_layout

[👍 File system | Wikipedia]: https://en.wikipedia.org/wiki/File_system#

[👍 List of File Systems | Wikipedia]: https://en.wikipedia.org/wiki/List_of_file_systems
