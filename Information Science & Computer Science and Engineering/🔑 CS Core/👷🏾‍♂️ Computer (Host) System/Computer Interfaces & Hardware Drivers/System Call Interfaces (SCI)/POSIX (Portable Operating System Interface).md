# Posix (Portable Operating System Interface)

[TOC]



## Res
### Related Topics
↗ [LSB (Linux Standard Base)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Referenced%20Specifications/LSB%20(Linux%20Standard%20Base).md)


### See POSIX also
- [Single UNIX Specification](https://en.wikipedia.org/wiki/Single_UNIX_Specification)
- [POSIX signal](https://en.wikipedia.org/wiki/POSIX_signal)
- [POSIX Threads](https://en.wikipedia.org/wiki/POSIX_Threads)
- [C POSIX library](https://en.wikipedia.org/wiki/C_POSIX_library)
- [Common User Access](https://en.wikipedia.org/wiki/Common_User_Access) – User interface standard
- [Portable character set](https://en.wikipedia.org/wiki/Portable_character_set), set of 103 characters which should be supported in any POSIX-compliant character set locale
- [Real-time operating system](https://en.wikipedia.org/wiki/Real-time_operating_system)
- [Interix](https://en.wikipedia.org/wiki/Interix) – a full-featured POSIX and Unix environment subsystem for Microsoft's Windows NT-based operating systems
- [TRON project](https://en.wikipedia.org/wiki/TRON_project) – alternative OS standards to POSIX



## Intro
> Not to be confused with [Unix](https://en.wikipedia.org/wiki/Unix "Unix"), [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like"), or [Linux](https://en.wikipedia.org/wiki/Linux "Linux"). Differ from Windows NT.
>
> ⚠️  to understand what is Posix you need to first understand **[what is API](https://cloud.tencent.com/developer/ask/26856)**, and the system-level API & user-lever API. 

> 🔗 https://en.wikipedia.org/wiki/POSIX

The **Portable Operating System Interface** (**POSIX**) is a family of standards specified by the [IEEE Computer Society](https://en.wikipedia.org/wiki/IEEE_Computer_Society "IEEE Computer Society") for **maintaining compatibility between operating systems**. POSIX defines both the system and user level application programming interfaces (API), along with command line shells and utility interfaces, for software compatibility (portability) with variants of Unix and other operating systems. 

POSIX is also a trademark of the IEEE. POSIX is intended to be used by both application and system developers.


### Principles of POSIX
Some of the guiding principles behind POSIX design are:
- POSIX is created to make application portability easier. So it’s not for UNIX systems only. Non-UNIX systems can be POSIX-compliant too.
- The standard doesn’t dictate the development of the application or the operating system. It only defines the contract between them.
- POSIX-compliant application source code should be able to run across many systems because the standard is defined at the source code level. However, the standard doesn’t guarantee any object or binary code level portability. So the binary executable may not run even on similar machines with identical hardware and operating systems. Only source code portability is addressed in the standard.
- POSIX is written in terms of Standard C. But developers can implement it in any language they like.
- The standard only deals with aspects of the operating system that interacts with applications.
- The standard is kept succinct in terms of length and broad in terms of scope to cover a large array of systems.
- POSIX was designed to simplify portability. So it will save time and money in the long run. However, if your applications are not POSIX-compliant, it might require significant time and resource investment at the beginning.


### Austin Group
There are misconceptions in the development community that POSIX standard is old and irrelevant. It is not true. POSIX is a living document that is being regularly updated by the [Austin Group](https://www.opengroup.org/austin/). Anyone can join the group and participate in improving the standard. The standard is used actively in today’s servers, workstations, routers, mobile devices, embedded systems and more. It is used for UNIX and Linux machines.

However, developers should be aware that POSIX standard has problems. You can report any bug you discover to the Austin Group and it will be looked into for the next revision.


### POSIX OS
#### POSIX-certified (2022)
Current versions of the following operating systems have been certified to conform to one or more of the various POSIX standards. This means that they passed the automated conformance tests and their certification has not expired and the operating system has not been discontinued.

|                                                        |                                                    |                                                  |                                                              |                                                              |
| ------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [AIX](https://en.wikipedia.org/wiki/IBM_AIX)           | [EulerOS](https://en.wikipedia.org/wiki/EulerOS)   | [HP-UX](https://en.wikipedia.org/wiki/HP-UX)     | [INTEGRITY](https://en.wikipedia.org/wiki/Integrity_(operating_system)) | [macOS](https://en.wikipedia.org/wiki/MacOS) (since [10.5 Leopard](https://en.wikipedia.org/wiki/Mac_OS_X_Leopard)) |
| [OpenServer](https://en.wikipedia.org/wiki/OpenServer) | [UnixWare](https://en.wikipedia.org/wiki/UnixWare) | [VxWorks](https://en.wikipedia.org/wiki/VxWorks) | [z/OS](https://en.wikipedia.org/wiki/Z/OS)                   |                                                              |

![](../../../../../../Assets/Pics/400px-Diagram_of_Mac_OS_X_architecture.svg.png)

<small>OS X Architecture 'Darwin' and POSIX API. See more on <a>https://en.wikipedia.org/wiki/Architecture_of_macOS</a></small>
#### Formerly POSIX Certified
#### Mostly POSIX-compliant (2022)
The following are not certified as POSIX compliant yet comply in large part:

|                                                              |                                                              |                                                              |      |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) (Available through Android NDK) | [BeOS](https://en.wikipedia.org/wiki/BeOS) (and subsequently [Haiku](https://en.wikipedia.org/wiki/Haiku_(operating_system))) | [Contiki](https://en.wikipedia.org/wiki/Contiki)             | [Darwin](https://en.wikipedia.org/wiki/Darwin_(operating_system)) (core of [macOS](https://en.wikipedia.org/wiki/MacOS) and [iOS](https://en.wikipedia.org/wiki/IOS)) | [DragonFly BSD](https://en.wikipedia.org/wiki/DragonFly_BSD) |
| [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD)             | [illumos](https://en.wikipedia.org/wiki/Illumos)             | [Linux](https://en.wikipedia.org/wiki/Linux) (most distributions) | [LynxOS](https://en.wikipedia.org/wiki/LynxOS)               | [MINIX](https://en.wikipedia.org/wiki/MINIX) (now [MINIX3](https://en.wikipedia.org/wiki/MINIX3)) |
| [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD)             | [OpenSolaris](https://en.wikipedia.org/wiki/OpenSolaris)     | [Redox](https://en.wikipedia.org/wiki/Redox_(operating_system)) |  [NetBSD](https://en.wikipedia.org/wiki/NetBSD)               | [MPE/iX](https://en.wikipedia.org/wiki/HP_Multi-Programming_Executive) |
| [VMware ESXi](https://en.wikipedia.org/wiki/VMware_ESXi)     | [Xenix](https://en.wikipedia.org/wiki/Xenix)                 | [RTEMS](https://en.wikipedia.org/wiki/RTEMS)                  | | |
|                                                              |                                                              |                                                              | | |
| ... And Much More!                                           |                                                              |                                                              | | |
|                                                              |                                                              |                                                              | | |
##### POSIX for DOS
##### POSIX for OS/2
##### 🏆 POSIX for Microsoft Windows
- [Cygwin](https://en.wikipedia.org/wiki/Cygwin) provides a largely POSIX-compliant development and run-time environment for Microsoft Windows.
- [MinGW](https://en.wikipedia.org/wiki/MinGW), a fork of Cygwin, provides a less POSIX-compliant development environment and supports compatible [C](https://en.wikipedia.org/wiki/C_(programming_language))-programmed applications via [Msvcrt](https://en.wikipedia.org/wiki/Msvcrt), Microsoft's old Visual C runtime library.
- [Microsoft POSIX subsystem](https://en.wikipedia.org/wiki/Microsoft_POSIX_subsystem), an optional Windows subsystem included in Windows NT-based operating systems up to Windows 2000. POSIX-1 as it stood in 1990 revision, without threads or sockets.
- [Interix](https://en.wikipedia.org/wiki/Interix), originally OpenNT by Softway Systems, Inc., is an upgrade and replacement for [Microsoft POSIX subsystem](https://en.wikipedia.org/wiki/Microsoft_POSIX_subsystem) that was purchased by [Microsoft](https://en.wikipedia.org/wiki/Microsoft) in 1999. It was initially marketed as a stand-alone add-on product and then later included it as a component in [Windows Services for UNIX](https://en.wikipedia.org/wiki/Windows_Services_for_UNIX) (SFU) and finally incorporated it as a component in [Windows Server 2003 R2](https://en.wikipedia.org/wiki/Windows_Server_2003_R2) and later Windows OS releases under the name "Subsystem for UNIX-based Applications" (SUA); later made deprecated in 2012 (Windows 8) and dropped in 2013 (2012 R2, 8.1). It enables full POSIX compliance for certain Microsoft Windows products.
- [Windows Subsystem for Linux](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux), also known as WSL, is a compatibility layer for running Linux binary executables natively on Windows 10 using a Linux image such as Ubuntu, Debian, or OpenSUSE among others, acting as an upgrade and replacement for Windows Services for UNIX. It was released in beta in April 2016. The first distribution available was Ubuntu.
- [UWIN](https://en.wikipedia.org/wiki/UWIN) from AT&T Research implements a POSIX layer on top of the Win32 APIs.
- [MKS Toolkit](https://en.wikipedia.org/wiki/MKS_Toolkit), originally created for MS-DOS, is a software package produced and maintained by [MKS Inc.](https://en.wikipedia.org/wiki/MKS_Inc.) that provides a Unix-like environment for scripting, connectivity and porting Unix and Linux software to both 32- and 64-bit Microsoft Windows systems. A subset of it was included in the first release of [Windows Services for UNIX](https://en.wikipedia.org/wiki/Windows_Services_for_UNIX) (SFU) in 1998.
- [Windows C Runtime Library](https://en.wikipedia.org/wiki/Microsoft_Windows_library_files#Runtime_libraries) and [Windows Sockets API](https://en.wikipedia.org/wiki/Winsock) implement commonly used POSIX API functions for file, time, environment, and socket access, although the support remains largely incomplete and not fully interoperable with POSIX-compliant implementations.
##### Compliant via Compatible Layers
The following are not officially certified as POSIX compatible, but they conform in large part to the standards by implementing POSIX support via some sort of compatibility feature (usually translation libraries, or a layer atop the kernel). Without these features, they are usually non-compliant.

- [AmigaOS](https://en.wikipedia.org/wiki/AmigaOS "AmigaOS") (through the ixemul library or [vbcc](https://en.wikipedia.org/wiki/Vbcc "Vbcc")_PosixLib[[48]](https://en.wikipedia.org/wiki/POSIX#cite_note-48))
- [eCos](https://en.wikipedia.org/wiki/ECos "ECos") – POSIX is part of the standard distribution, and used by many applications. 'external links' section below has more information.
- [IBM i](https://en.wikipedia.org/wiki/IBM_i "IBM i") (through the [PASE](https://en.wikipedia.org/wiki/IBM_i#PASE "IBM i") compatibility layer)[[49]](https://en.wikipedia.org/wiki/POSIX#cite_note-49)
- [MorphOS](https://en.wikipedia.org/wiki/MorphOS "MorphOS") (through the built-in ixemul library)
- [OpenVMS](https://en.wikipedia.org/wiki/OpenVMS "OpenVMS") (through optional POSIX package)[[50]](https://en.wikipedia.org/wiki/POSIX#cite_note-50)
- [Plan 9 from Bell Labs](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs "Plan 9 from Bell Labs") APE - ANSI/POSIX Environment[[51]](https://en.wikipedia.org/wiki/POSIX#cite_note-APE-51)
- [RIOT](https://en.wikipedia.org/wiki/RIOT_(operating_system) "RIOT (operating system)") (through optional POSIX module)
- [Symbian OS](https://en.wikipedia.org/wiki/Symbian "Symbian") with [PIPS](https://en.wikipedia.org/wiki/PIPS "PIPS") (PIPS Is POSIX on Symbian)
- [VAXELN](https://en.wikipedia.org/wiki/VAXELN "VAXELN") (partial support of 1003.1 and 1003.4 through the VAXELN POSIX runtime library)[[52]](https://en.wikipedia.org/wiki/POSIX#cite_note-52)
- [Windows NT kernel](https://en.wikipedia.org/wiki/Architecture_of_Windows_NT "Architecture of Windows NT") when using Microsoft [SFU](https://en.wikipedia.org/wiki/Windows_Services_for_UNIX "Windows Services for UNIX") 3.5 or [SUA](https://en.wikipedia.org/wiki/Subsystem_for_UNIX-based_Applications "Subsystem for UNIX-based Applications")
    - [Windows 2000 Server or Professional with Service Pack 3 or later](https://en.wikipedia.org/wiki/Windows_2000 "Windows 2000"). To be POSIX compliant, one must activate optional features of Windows NT and Windows 2000 Server.[[53]](https://en.wikipedia.org/wiki/POSIX#cite_note-MS-53)
    - [Windows XP Professional with Service Pack 1 or later](https://en.wikipedia.org/wiki/Windows_XP "Windows XP")
    - [Windows Server 2003](https://en.wikipedia.org/wiki/Windows_Server_2003 "Windows Server 2003")
    - [Windows Server 2008](https://en.wikipedia.org/wiki/Windows_Server_2008 "Windows Server 2008") and Ultimate and Enterprise versions of [Windows Vista](https://en.wikipedia.org/wiki/Windows_Vista "Windows Vista")
    - [Windows Server 2008 R2](https://en.wikipedia.org/wiki/Windows_Server_2008_R2 "Windows Server 2008 R2") and Ultimate and Enterprise versions of [Windows 7](https://en.wikipedia.org/wiki/Windows_7 "Windows 7")
    - albeit deprecated, still available for [Windows Server 2012](https://en.wikipedia.org/wiki/Windows_Server_2012 "Windows Server 2012") and Enterprise version of [Windows 8](https://en.wikipedia.org/wiki/Windows_8 "Windows 8")


### History of Unix, Posix, and the Standard Unix Specification
> Quote from CSAPP

The 1960s was an era of huge, complex operating systems, such as IBM’s OS/360 and Honeywell’s Multics systems. While OS/360 was one of the most successful software projects in history, Multics dragged on for years and never achieved wide-scale use. Bell Laboratories was an original partner in the Multics project but dropped out in 1969 because of concern over the complexity of the project and the lack of progress. In reaction to their unpleasant Multics experience, a group of Bell Labs researchers—Ken Thompson, Dennis Ritchie, Doug McIlroy, and Joe Ossanna—began work in 1969 on a simpler operating system for a Digital Equipment Corporation PDP-7 computer, written entirely in machine language. Many of the ideas in the new system, such as the hierarchical file system and the notion of a shell as a user-level process, were borrowed from Multics but implemented in a smaller, simpler package. In 1970, Brian Kernighan dubbed the new system “Unix” as a pun on the complexity of “Multics.” The kernel was rewritten in C in 1973, and Unix was announced to the outside world in 1974.

Because Bell Labs made the source code available to schools with generous terms, Unix developed a large following at universities. The most influential work was done at the University of California at Berkeley in the late 1970s and early 1980s, with Berkeley researchers adding virtual memory and the Internet protocols in a series of releases called Unix 4.xBSD (Berkeley Software Distribution). Concurrently, Bell Labs was releasing their own versions, which became known as System V Unix. Versions from other vendors, such as the Sun Microsystems Solaris system, were derived from these original BSD and System V versions.

Trouble arose in the mid 1980s as Unix vendors tried to differentiate themselves by adding new and often incompatible features. To combat this trend, IEEE (Institute for Electrical and Electron- ics Engineers) sponsored an effort to standardize Unix, later dubbed “Posix” by Richard Stallman. The result was a family of standards, known as the Posix standards, that cover such issues as the C language interface for Unix system calls, shell programs and utilities, threads, and network program- ming. More recently, a separate standardization effort, known as the “Standard Unix Specification,” has joined forces with Posix to create a single, unified standard for Unix systems. As a result of these standardization efforts, the differences between Unix versions have largely disappeared.



## Refs
[POSIX | Wikipedia]: https://en.wikipedia.org/wiki/POSIX

[What is POSIX? -- stackoverflow]: https://stackoverflow.com/questions/1780599/what-is-the-meaning-of-posix

- The most important things [POSIX 7](http://pubs.opengroup.org/onlinepubs/9699919799/nfindex.html) defines
- Who conforms to POSIX?
- And .. more!

[👍 Posix Standard]: https://linuxhint.com/posix-standard/
