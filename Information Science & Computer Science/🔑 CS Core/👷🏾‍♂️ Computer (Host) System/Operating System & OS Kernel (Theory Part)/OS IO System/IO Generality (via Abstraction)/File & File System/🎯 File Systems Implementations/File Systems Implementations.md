# File Systems Implementations

[TOC]



## Res
### Related Topics
↗ [Computer Memory & Storage](../../../../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../../../OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)

↗ [Distributed File System (Network File Systems)](../../../../../../../🧠%20Computing%20Methodologies/Distributed%20Computing%20&%20Systems/Distributed%20Storaging/Distributed%20File%20System%20(Network%20File%20Systems)/Distributed%20File%20System%20(Network%20File%20Systems).md)
↗ [Cloud Native Storage](../../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Cloud%20Runtime/Cloud%20Native%20Storage/Cloud%20Native%20Storage.md)
↗ [Database Systems](../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
↗ [Cloud Database](../../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev(Sec)Ops%20(Application%20Level%20Engineering)/🛫%20Continuous%20Integration/Cloud%20Database.md)

↗ [NAS (Network-Attached Storage) Protocols](../../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/NAS%20(Network-Attached%20Storage)%20Protocols/NAS%20(Network-Attached%20Storage)%20Protocols.md)
↗ [Storage Area Network (SAN)](../../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/Storage%20Area%20Network%20(SAN).md)

↗ [macOS File System](../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20IO%20&%20Files%20Management/macOS%20File%20System/macOS%20File%20System.md)
- ↗ [HFS (Hierarchical File System) & HFS+ (macOS Extended)](../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20IO%20&%20Files%20Management/macOS%20File%20System/🧃%20HFS%20(Hierarchical%20File%20System)%20&%20HFS+%20(macOS%20Extended)/HFS%20(Hierarchical%20File%20System)%20&%20HFS+%20(macOS%20Extended).md)
↗ [Window File System](../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20File%20System/Window%20File%20System.md)
- ↗ [NTFS (NT File System)](../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20File%20System/NTFS%20(NT%20File%20System)/NTFS%20(NT%20File%20System).md)


### Other Resources
📄 https://en.wikipedia.org/wiki/List_of_file_systems
📄 https://en.wikipedia.org/wiki/File_system



## Intro
![](../../../../../../../../Assets/Pics/Screenshot%202024-03-28%20at%2010.42.33%20AM.png)
<small><a>https://en.wikipedia.org/wiki/File_system#External_links</a></small>



## File Systems Taxonomy
- [Clustered](https://en.wikipedia.org/wiki/Clustered_file_system "Clustered file system") 
    - [Global](https://en.wikipedia.org/wiki/Global_file_system "Global file system")
    - [Grid](https://en.wikipedia.org/wiki/Grid_file_system "Grid file system")
    - [Self-certifying](https://en.wikipedia.org/wiki/Self-certifying_File_System "Self-certifying File System")
- [Flash](https://en.wikipedia.org/wiki/Flash_file_system "Flash file system")
- [Journaling](https://en.wikipedia.org/wiki/Journaling_file_system "Journaling file system")
- [Log-structured](https://en.wikipedia.org/wiki/Log-structured_file_system "Log-structured file system")
- [Object](https://en.wikipedia.org/wiki/Object_storage "Object storage")
- [Record-oriented](https://en.wikipedia.org/wiki/Record-oriented_filesystem "Record-oriented filesystem")
- [Semantic](https://en.wikipedia.org/wiki/Semantic_file_system "Semantic file system")
- [Steganographic](https://en.wikipedia.org/wiki/Steganographic_file_system "Steganographic file system")
- [Synthetic](https://en.wikipedia.org/wiki/Synthetic_file_system "Synthetic file system")
- [Versioning](https://en.wikipedia.org/wiki/Versioning_file_system "Versioning file system")



### 👉 File System by Storage Media
#### ⭐️ Disk File Systems
A _disk file system_ takes advantages of the ability of disk storage media to randomly address data in a short amount of time. Additional considerations include the speed of accessing data following that initially requested and the anticipation that the following data may also be requested. This permits multiple users (or processes) access to various data on the disk without regard to the sequential location of the data. Examples include [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table "File Allocation Table") ([FAT12](https://en.wikipedia.org/wiki/FAT12 "FAT12"), [FAT16](https://en.wikipedia.org/wiki/FAT16 "FAT16"), [FAT32](https://en.wikipedia.org/wiki/FAT32)), [exFAT](https://en.wikipedia.org/wiki/ExFAT "ExFAT"), [NTFS](https://en.wikipedia.org/wiki/NTFS "NTFS"), [ReFS](https://en.wikipedia.org/wiki/ReFS "ReFS"), [HFS](https://en.wikipedia.org/wiki/Hierarchical_File_System_(Apple) "Hierarchical File System (Apple)") and [HFS+](https://en.wikipedia.org/wiki/HFS_Plus "HFS Plus"), [HPFS](https://en.wikipedia.org/wiki/High_Performance_File_System "High Performance File System"), [APFS](https://en.wikipedia.org/wiki/Apple_File_System "Apple File System"), [UFS](https://en.wikipedia.org/wiki/Unix_File_System "Unix File System"), [ext2](https://en.wikipedia.org/wiki/Ext2 "Ext2"), [ext3](https://en.wikipedia.org/wiki/Ext3 "Ext3"), [ext4](https://en.wikipedia.org/wiki/Ext4 "Ext4"), [XFS](https://en.wikipedia.org/wiki/XFS "XFS"), [btrfs](https://en.wikipedia.org/wiki/Btrfs "Btrfs"), [Files-11](https://en.wikipedia.org/wiki/Files-11 "Files-11"), [Veritas File System](https://en.wikipedia.org/wiki/Veritas_File_System "Veritas File System"), [VMFS](https://en.wikipedia.org/wiki/VMFS "VMFS"), [ZFS](https://en.wikipedia.org/wiki/ZFS "ZFS"), [ReiserFS](https://en.wikipedia.org/wiki/ReiserFS "ReiserFS"), [NSS](https://en.wikipedia.org/wiki/Novell_Storage_Services "Novell Storage Services") and ScoutFS. Some disk file systems are [journaling file systems](https://en.wikipedia.org/wiki/Journaling_file_system "Journaling file system")or [versioning file systems](https://en.wikipedia.org/wiki/Versioning_file_system "Versioning file system")
#### Flash File Systems
#### Tape File Systems
##### Tape Formatting


### 👉 File System by Functions
#### ⭐️ Database (File Systems)
Some other projects that aren't "pure" database file systems but that use some aspects of a database file system:

- Many [Web content management systems](https://en.wikipedia.org/wiki/Web_content_management_system "Web content management system") use a [relational DBMS](https://en.wikipedia.org/wiki/Database_management_system "Database management system") to store and retrieve files. For example, [XHTML](https://en.wikipedia.org/wiki/XHTML "XHTML") files are stored as [XML](https://en.wikipedia.org/wiki/XML "XML") or text fields, while image files are stored as blob fields; [SQL](https://en.wikipedia.org/wiki/SQL "SQL") SELECT (with optional [XPath](https://en.wikipedia.org/wiki/XPath "XPath")) statements retrieve the files, and allow the use of a sophisticated logic and more rich information associations than "usual file systems." Many CMSs also have the option of storing only [metadata](https://en.wikipedia.org/wiki/Metadata "Metadata") within the database, with the standard filesystem used to store the content of files.
- Very large file systems, embodied by applications like [Apache Hadoop](https://en.wikipedia.org/wiki/Apache_Hadoop "Apache Hadoop") and [Google File System](https://en.wikipedia.org/wiki/Google_File_System "Google File System"), use some _database file system_ concepts.

↗ [Database Systems](../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
#### Transactional File System
#### ⭐️ Network File Systems (Distributed File Systems)
A _network file system_ or a _distributed file system_ is a file system that acts as a client for a remote file access protocol, providing access to files on a server. Programs using local interfaces can transparently create, manage and access hierarchical directories and files in remote network-connected computers. 

> Examples of network file systems include clients for the [NFS](https://en.wikipedia.org/wiki/Network_File_System_(protocol) "Network File System (protocol)"), [AFS](https://en.wikipedia.org/wiki/Andrew_File_System "Andrew File System"), [SMB](https://en.wikipedia.org/wiki/Server_Message_Block "Server Message Block") protocols, and file-system-like clients for [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol") and [WebDAV](https://en.wikipedia.org/wiki/WebDAV "WebDAV").

↗ [Distributed File System (Network File Systems)](../../../../../../../🧠%20Computing%20Methodologies/Distributed%20Computing%20&%20Systems/Distributed%20Storaging/Distributed%20File%20System%20(Network%20File%20Systems)/Distributed%20File%20System%20(Network%20File%20Systems).md)
#### Shared Disk File Systems
A _shared disk file system_ is one in which a number of machines (usually servers) all have access to the same external disk subsystem (usually a [storage area network](https://en.wikipedia.org/wiki/Storage_area_network "Storage area network")). The file system arbitrates access to that subsystem, preventing write collisions.[[26]](https://en.wikipedia.org/wiki/File_system#cite_note-27)Examples include [GFS2](https://en.wikipedia.org/wiki/GFS2 "GFS2") from [Red Hat](https://en.wikipedia.org/wiki/Red_Hat "Red Hat"), [GPFS](https://en.wikipedia.org/wiki/IBM_General_Parallel_File_System "IBM General Parallel File System"), now known as Spectrum Scale, from IBM, [SFS](https://en.wikipedia.org/wiki/SAN_File_System "SAN File System") from DataPlow, [CXFS](https://en.wikipedia.org/wiki/CXFS "CXFS") from [SGI](https://en.wikipedia.org/wiki/Silicon_Graphics_International "Silicon Graphics International"), [StorNext](https://en.wikipedia.org/wiki/StorNext "StorNext") from [Quantum Corporation](https://en.wikipedia.org/wiki/Quantum_Corporation "Quantum Corporation") and ScoutFS from Versity.


### 👉 Special File Systems
A _special file system_ presents non-file elements of an operating system as files so they can be acted on using file system APIs. This is most commonly done in [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like")operating systems, but devices are given file names in some non-Unix-like operating systems as well.
#### Device File Systems
A _device file system_ represents I/O devices and pseudo-devices as files, called [device files](https://en.wikipedia.org/wiki/Device_file "Device file"). Examples in [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") systems include [devfs](https://en.wikipedia.org/wiki/Devfs "Devfs") and, in [Linux](https://en.wikipedia.org/wiki/Linux "Linux") 2.6 systems, [udev](https://en.wikipedia.org/wiki/Udev "Udev"). In non-Unix-like systems, such as [TOPS-10](https://en.wikipedia.org/wiki/TOPS-10 "TOPS-10") and other operating systems influenced by it, where the full filename or [pathname](https://en.wikipedia.org/wiki/Pathname "Pathname") of a file can include a device prefix, devices other than those containing file systems are referred to by a device prefix specifying the device, without anything following it.
#### Minimal File System / Audio-cassette Storage
#### Flat File Systems
#### ⭐️ Pesudo File Systems (Virtual File Systems)
- [devfs](https://en.wikipedia.org/wiki/Devfs "Devfs") – a virtual file system in Unix-like operating systems for managing device nodes on-the-fly
- [procfs](https://en.wikipedia.org/wiki/Procfs "Procfs") – a pseudo-file system, used to access kernel information about processes
- [tmpfs](https://en.wikipedia.org/wiki/Tmpfs "Tmpfs") – in-memory temporary file system (on Unix-like platforms)
- [sysfs](https://en.wikipedia.org/wiki/Sysfs "Sysfs") – a virtual file system in [Linux](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") holding information about buses, devices, firmware, filesystems, etc.
- [debugfs](https://en.wikipedia.org/wiki/Debugfs "Debugfs") – a virtual file system in [Linux](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") for accessing and controlling kernel debugging
- [configfs](https://en.wikipedia.org/wiki/Configfs "Configfs") – a writable file system used to configure various kernel components of [Linux](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel")
- [sysctlfs](https://en.wikipedia.org/w/index.php?title=Sysctlfs&action=edit&redlink=1 "Sysctlfs (page does not exist)") – allow accessing [sysctl](https://en.wikipedia.org/wiki/Sysctl "Sysctl") nodes via a file system; available on [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD") via PUFFS,[[29]](https://en.wikipedia.org/wiki/List_of_file_systems#cite_note-29) [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD") kernel via a 3rd-party module, and [Linux](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") as a part of Linux procfs.
- [kernfs](https://en.wikipedia.org/wiki/Kernfs_(BSD) "Kernfs (BSD)") – a file system found on some BSD systems (notably [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD")) that provides access to some kernel state variables; similar to sysctlfs, Linux procfs and Linux sysfs.
- [wikifs](https://en.wikipedia.org/wiki/Wikifs "Wikifs") – a server application for [Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs "Plan 9 from Bell Labs")'s virtual, [wiki](https://en.wikipedia.org/wiki/Wiki "Wiki"), file system
#### Encrypted File Systems
- [eCryptfs](https://en.wikipedia.org/wiki/ECryptfs "ECryptfs") – a stacked cryptographic file system in the Linux kernel since 2.6.19
- [Secure Shell File System](https://en.wikipedia.org/wiki/SSHFS "SSHFS") (SSHFS) – locally mount a remote directory on a server using only a [secure shell](https://en.wikipedia.org/wiki/Secure_shell "Secure shell") login.
- [EncFS](https://en.wikipedia.org/wiki/EncFS "EncFS"), GPL [Encrypted file system](https://en.wikipedia.org/wiki/Disk_encryption_software "Disk encryption software") in user-space
- [Rubberhose filesystem](https://en.wikipedia.org/wiki/MaruTukku "MaruTukku")
- [EFS](https://en.wikipedia.org/wiki/Encrypting_File_System "Encrypting File System") – an encrypted file system for [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") systems and [AIX](https://en.wikipedia.org/wiki/AIX_operating_system "AIX operating system"). An extension of [NTFS](https://en.wikipedia.org/wiki/NTFS "NTFS")
- [ZFS](https://en.wikipedia.org/wiki/ZFS "ZFS"), with encryption support.
#### ⭐️ File System Interfaces
These are not really file systems; they allow access to file systems from an operating system standpoint.
- [FUSE](https://en.wikipedia.org/wiki/FUSE_(linux) "FUSE (linux)") (file system in userspace, like [LUFS](https://en.wikipedia.org/wiki/Linux_Userland_Filesystem "Linux Userland Filesystem") but better maintained)
- [LUFS](https://en.wikipedia.org/wiki/Linux_Userland_Filesystem "Linux Userland Filesystem") (Linux userland file system – seems to be abandoned in favour of [FUSE](https://en.wikipedia.org/wiki/FUSE_(linux) "FUSE (linux)"))
- [PUFFS](https://en.wikipedia.org/w/index.php?title=Pass-to-Userspace_Framework_File_Fystem&action=edit&redlink=1 "Pass-to-Userspace Framework File Fystem (page does not exist)") (Userspace filesystem for NetBSD, including a compatibility layer called **librefuse** for porting existing FUSE-based applications)
- [VFS](https://en.wikipedia.org/wiki/Virtual_file_system "Virtual file system") Virtual Filesystem



## Ref
[👍 File system | Wikipedia]: https://en.wikipedia.org/wiki/File_system#
[👍 List of File Systems | Wikipedia]: https://en.wikipedia.org/wiki/List_of_file_systems

[如何选择文件系统：EXT4、Btrfs 和 XFS]: https://linux.cn/article-7083-1.html