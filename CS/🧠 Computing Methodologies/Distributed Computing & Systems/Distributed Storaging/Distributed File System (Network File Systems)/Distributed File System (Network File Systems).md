# Distributed File System (Network File Systems)

[TOC]



## Res


## Intro
> ↗ [File & File System](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)
> ↗ [File Systems Implementations](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/🎯%20File%20Systems%20Implementations/File%20Systems%20Implementations.md)

[Distributed file systems](https://en.wikipedia.org/wiki/Distributed_file_system "Distributed file system") are also called network file systems. Many implementations have been made, they are location dependent and they have [access control lists](https://en.wikipedia.org/wiki/Access_control_lists "Access control lists") (ACLs), unless otherwise stated below.

- [9P](https://en.wikipedia.org/wiki/9P_(protocol) "9P (protocol)"), the [Plan 9 from Bell Labs](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs "Plan 9 from Bell Labs") and [Inferno](https://en.wikipedia.org/wiki/Inferno_(operating_system) "Inferno (operating system)") distributed file system protocol. One implementation is [v9fs](https://en.wikipedia.org/wiki/V9fs "V9fs"). No ACLs.
- [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3 "Amazon S3")
- [Andrew File System](https://en.wikipedia.org/wiki/Andrew_File_System "Andrew File System") (AFS) is scalable and location independent, has a heavy client [cache](https://en.wikipedia.org/wiki/Cache_(computing) "Cache (computing)") and uses [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol) "Kerberos (protocol)") for authentication. Implementations include the original from [IBM](https://en.wikipedia.org/wiki/IBM "IBM") (earlier [Transarc](https://en.wikipedia.org/wiki/Transarc "Transarc")), Arla and [OpenAFS](https://en.wikipedia.org/wiki/OpenAFS "OpenAFS").
- [Avere Systems](https://en.wikipedia.org/wiki/Avere_Systems "Avere Systems") has AvereOS that creates a [NAS](https://en.wikipedia.org/wiki/Network-attached_storage "Network-attached storage") protocol file system in [object storage](https://en.wikipedia.org/wiki/Object_storage "Object storage").
- [DCE Distributed File System](https://en.wikipedia.org/wiki/DCE_Distributed_File_System "DCE Distributed File System") ([DCE](https://en.wikipedia.org/wiki/Distributed_computing_environment "Distributed computing environment")/DFS) from [IBM](https://en.wikipedia.org/wiki/IBM "IBM") (earlier [Transarc](https://en.wikipedia.org/wiki/Transarc "Transarc")) is similar to AFS and focus on full [POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX") file system semantics and [high availability](https://en.wikipedia.org/wiki/High_availability "High availability"). Available for [AIX](https://en.wikipedia.org/wiki/AIX_operating_system "AIX operating system") and [Solaris](https://en.wikipedia.org/wiki/Solaris_(operating_system) "Solaris (operating system)") under a [proprietary software](https://en.wikipedia.org/wiki/Proprietary_software "Proprietary software") license.
- [File Access Listener](https://en.wikipedia.org/wiki/File_Access_Listener "File Access Listener") (FAL) is an implementation of the [Data Access Protocol](https://en.wikipedia.org/w/index.php?title=Data_Access_Protocol&action=edit&redlink=1 "Data Access Protocol (page does not exist)") (DAP) which is part of the [DECnet](https://en.wikipedia.org/wiki/DECnet "DECnet") suite of [network protocols](https://en.wikipedia.org/wiki/Network_protocols "Network protocols") created by [Digital Equipment Corporation](https://en.wikipedia.org/wiki/Digital_Equipment_Corporation "Digital Equipment Corporation").
- [Magma](https://en.wikipedia.org/wiki/MagmaFS "MagmaFS"), developed by Tx0.
- [MapR FS](https://en.wikipedia.org/wiki/MapR_FS "MapR FS") is a distributed high-performance file system that exhibits file, table and messaging APIs.
- [Microsoft Office Groove](https://en.wikipedia.org/wiki/Microsoft_Office_Groove "Microsoft Office Groove") shared workspace, used for DoHyki
- [NetWare Core Protocol](https://en.wikipedia.org/wiki/NetWare_Core_Protocol "NetWare Core Protocol") (NCP) from [Novell](https://en.wikipedia.org/wiki/Novell "Novell") is used in networks based on [NetWare](https://en.wikipedia.org/wiki/Novell_NetWare "Novell NetWare").
- [Network File System](https://en.wikipedia.org/wiki/Network_File_System_(protocol) "Network File System (protocol)") (NFS) originally from [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems") is the standard in UNIX-based networks. NFS may use [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol) "Kerberos (protocol)") authentication and a client [cache](https://en.wikipedia.org/wiki/Cache_(computing) "Cache (computing)").
- [OS4000](https://en.wikipedia.org/wiki/OS4000 "OS4000") Linked-OS provides distributed filesystem across OS4000 systems.
- [Self-certifying File System](https://en.wikipedia.org/wiki/Self-certifying_File_System "Self-certifying File System") (SFS), a global network file system designed to securely allow access to file systems across separate administrative domains.
- [Server Message Block](https://en.wikipedia.org/wiki/Server_Message_Block "Server Message Block") (SMB) originally from [IBM](https://en.wikipedia.org/wiki/IBM "IBM") (but the most common version is modified heavily by [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft")) is the standard in Windows-based networks. SMB is also known as _Common Internet File System (CIFS)_. SMB may use [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol) "Kerberos (protocol)") authentication.



## Ref
[👍 List of File Systems | Wikipedia]: https://en.wikipedia.org/wiki/List_of_file_systems

[👍 Comparison of distributed file systems | Wikipedia]: https://en.wikipedia.org/wiki/Comparison_of_distributed_file_systems



