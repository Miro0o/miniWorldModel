# Linux File System

[TOC]


## Res
### Related Topics
↗ [File & File System](../../../../../👷🏾‍♂️%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)
↗ [UNIX File System](../../../../UNIX%20Family/📌%20UNIX%20Kernel/UNIX%20IO%20&%20Files%20Management/UNIX%20File%20System/UNIX%20File%20System.md)


### Learning Resources
📂 [Filesystem Hierarchy Standard | LSB Workgroup, The Linux Foundation](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)



## Intro
[Linux](https://en.wikipedia.org/wiki/Linux "Linux") supports numerous file systems, but common choices for the system disk on a block device include the ext* family ([ext2](https://en.wikipedia.org/wiki/Ext2 "Ext2"), [ext3](https://en.wikipedia.org/wiki/Ext3 "Ext3") and [ext4](https://en.wikipedia.org/wiki/Ext4 "Ext4")), [XFS](https://en.wikipedia.org/wiki/XFS "XFS"), [JFS](https://en.wikipedia.org/wiki/JFS_(file_system) "JFS (file system)"), and [btrfs](https://en.wikipedia.org/wiki/Btrfs "Btrfs"). For raw flash without a [flash translation layer](https://en.wikipedia.org/wiki/Flash_translation_layer "Flash translation layer") (FTL) or [Memory Technology Device](https://en.wikipedia.org/wiki/Memory_Technology_Device "Memory Technology Device") (MTD), there are [UBIFS](https://en.wikipedia.org/wiki/UBIFS "UBIFS"), [JFFS2](https://en.wikipedia.org/wiki/JFFS2 "JFFS2") and [YAFFS](https://en.wikipedia.org/wiki/YAFFS "YAFFS"), among others. [SquashFS](https://en.wikipedia.org/wiki/SquashFS "SquashFS") is a common compressed read-only file system.


### LSB Workgroup


### Linux Directory System & FHS (File Hierarchy System)
↗ [Linux Directory System & FHS](Linux%20Directory%20System%20&%20FHS.md)

↗ [FHS (Filesystem Hierarchy Standard)](../../../Linux%20Referenced%20Specifications/FHS%20(Filesystem%20Hierarchy%20Standard).md)
FHS is not considered to be some authority on directory structure and contents for absolutely every Linux distribution, but it is ==generally the most common standard of linux file layout.== All directories and files in FHS appear under ‘/’ (i.e. the root directory).


### Mounting
The term "to mount" a filesystem in Linux refers back to the early days of computing when a tape or removable disk pack would need to be physically mounted on an appropriate drive device. After being physically placed on the drive, the filesystem on the disk pack would be logically mounted by the operating system to make the contents available for access by the OS, application programs and users.

A **mount point** is simply a directory, like any other, that is created as part of the root filesystem. So, for example, the home filesystem is mounted on the directory /home. Filesystems can be mounted at mount points on other non-root filesystems but this is less common.

The Linux root filesystem is mounted on the root directory (/) very early in the boot sequence. Other filesystems are mounted later, by the Linux startup programs, either **`rc`** under SystemV or by **`systemd`** in newer Linux releases. Mounting of filesystems during the startup process is managed by the `/etc/fstab` configuration file. An easy way to remember that is that `fstab` stands for "file system table," and it is a list of filesystems that are to be mounted, their designated mount points, and any options that might be needed for specific filesystems.

Filesystems are mounted on an existing directory/mount point using the **mount** command. In general, any directory that is used as a mount point should be empty and not have any other files contained in it. Linux will not prevent users from mounting one filesystem over one that is already there or on a directory that contains files. If you mount a filesystem on an existing directory or filesystem, the original contents will be hidden and only the content of the newly mounted filesystem will be visible.



## Linux File Types
↗ [Linux File Types & Formats / 🎯 Binary File](Linux%20File%20Types%20&%20Formats/Linux%20File%20Types%20&%20Formats.md#🎯%20Binary%20File)



## Linux Directory System /Linux File Layout
↗ [UNIX File System /FHS (Filesystem Hierarchy Standard)](../../../../UNIX%20Family/📌%20UNIX%20Kernel/UNIX%20IO%20&%20Files%20Management/UNIX%20File%20System/UNIX%20File%20System.md#FHS%20(Filesystem%20Hierarchy%20Standard))
↗ [Linux Directory System & FHS](Linux%20Directory%20System%20&%20FHS.md)



## Ref
[Linux File Hierarchy Structure | GeeksforGeeks]: https://www.geeksforgeeks.org/linux-file-hierarchy-structure/

[Classic SysAdmin: The Linux Filesystem Explained]: https://www.linuxfoundation.org/blog/blog/classic-sysadmin-the-linux-filesystem-explained

[An introduction to Linux filesystems]: https://opensource.com/life/16/10/introduction-linux-filesystems

[👍 File system | Wikipedia]: https://en.wikipedia.org/wiki/File_system#

[👍 List of File Systems | Wikipedia]: https://en.wikipedia.org/wiki/List_of_file_systems

