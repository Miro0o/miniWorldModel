# Unix Directory System

[TOC]



## Res


## Intro



## Unix Conventional Directory Layout
![](../../../../../../../Assets/Pics/Pasted%20image%2020230316140056.png)

**Directories or Files and their description**
- **/ :** The slash / character alone denotes the root of the filesystem tree.

- **/bin :** Stands for “**binaries**” and contains certain fundamental utilities, such as ls or cp, which are generally needed by all users.

- **/boot :** Contains all the files that are required **for successful booting process**.

- **/dev :** Stands for “**devices**”. Contains file representations of peripheral devices and pseudo-devices.

- **/etc :** Contains **system-wide configuration files and system databases**. Originally also contained “dangerous maintenance utilities” such as init,but these have typically been moved to /sbin or elsewhere.

- **/home :** Contains the home directories for the users.

- **/lib :** Contains **system libraries, and some critical files such as kernel modules or device drivers**.

- **/media :** Default mount point for **removable devices**, such as USB sticks, media players, etc.

- **/mnt :** Stands for “**mount**”. Contains **filesystem mount points**. These are used, for example, if the system uses multiple **hard disks** or **hard disk partitions**. It is also often used for **remote (network) filesystems**, **CD-ROM/DVD drives**, and so on.

- **/proc :** procfs virtual filesystem showing information about processes as files.

- **/root :** The home directory for the superuser “root” – that is, the system administrator. This account’s home directory is usually on the initial filesystem, and hence not in /home (which may be a mount point for another filesystem) in case specific maintenance needs to be performed, during which other filesystems are not available. Such a case could occur, for example, if a hard disk drive suffers physical failures and cannot be properly mounted.

- **/tmp :** A place for temporary files. Many systems clear this directory upon startup; it might have tmpfs mounted atop it, in which case its contents do not survive a reboot, or it might be explicitly cleared by a startup script at boot time.

- **/usr :** Originally the directory holding user home directories,its use has changed. **It now holds executables, libraries, and shared resources that are not system critical**, like the X Window System, KDE, Perl, etc. However, on some Unix systems, some user accounts may still have a home directory that is a direct subdirectory of /usr, such as the default as in Minix. (**on modern systems, these user accounts are often related to server or system use, and not directly used by a person**).
	- **/usr/bin :** This directory stores all binary programs distributed with the operating system not residing in /bin, /sbin or (rarely) /etc.
	- **/usr/include :** Stores the development headers used throughout the system. Header files are mostly used by the **#include** directive in C/C++ programming language.
	- **/usr/lib :** Stores the required libraries and data files for programs stored within /usr or elsewhere.

- **/var :** A short for “**variable**.” **A place for files that may change often – especially in size**, for example e-mail sent to users on the system, or process-ID lock files.
	- **/var/log :** Contains system log files.
	- **/var/mail :** The place where all the incoming mails are stored. Users (other than root) can access their own mail only. Often, this directory is a symbolic link to /var/spool/mail.
	- **/var/spool :** Spool directory. Contains print jobs, mail spools and other queued tasks.
	- **/var/tmp :** A place for temporary files which should be preserved between system reboots.



## Ref

