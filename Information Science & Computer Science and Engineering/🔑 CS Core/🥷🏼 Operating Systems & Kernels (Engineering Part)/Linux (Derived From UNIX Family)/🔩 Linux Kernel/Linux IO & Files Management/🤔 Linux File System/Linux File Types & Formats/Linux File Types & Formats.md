# Linux File Types & Formats

[TOC]



## Res
### Related Topics
↗ [Unix File Types & Formats](../../../../../UNIX%20Family/📌%20UNIX%20Kernel/UNIX%20IO%20&%20Files%20Management/UNIX%20File%20System/Unix%20File%20Types%20&%20Formats/Unix%20File%20Types%20&%20Formats.md)
↗ [Window File Types & Formats](../../../../../Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20File%20System/Window%20File%20Types%20&%20Formats/Window%20File%20Types%20&%20Formats.md)
↗ [macOS File Types & Formats](../../../../../Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20IO%20&%20Files%20Management/macOS%20File%20System/macOS%20File%20Types%20&%20Formats/macOS%20File%20Types%20&%20Formats.md)



## Intro



## 🎯 Textual File (Read, Write)
Linux supports seven different types of files. These file types are the Regular file, Directory file, Link file, Character special file, Block special file, Socket file, and Named pipe file.

|   |   |
|---|---|
|File type|Description|
|Ordinary or regular files|Contain data of various content types such as text, script, image, videos, etc.|
|Directory files|Contain the name and address of other files.|
|Block or character special files|Represent device files such as hard drives, monitors, etc.|
|Link files|Point or mirror other files|
|Socket files|Provide inter-process communication|
|Named pipe files|Allow processes to send data to other processes or receive data from other processes.|

### Identify the Types of Files
↗ [Text & File & Dir Management Basics /File Type & File Head](../../../../Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Text%20&%20File%20&%20Dir%20Management/Text%20&%20File%20&%20Dir%20Management%20Basics.md#File%20Type%20&%20File%20Head)

|   |   |
|---|---|
|Character|Meaning|
|-|Regular or ordinary file|
|d|Directory file|
|l|Link file|
|b|Block special file|
|p|Named pipe file|
|c|Character special file|
|s|Socket file|


### 1️⃣ Regular File
Regular or ordinary files store data of various content types such as text, audio, video, images, scripts, and programs. There are hundreds of content types. In Linux, regular files can be created with or without an extension.

An extension is a group of characters that is used with the file name to give it a special identity or to group it with files of the similar content type. For easy recognition and processing, files of different content types often use well-known file extensions.

Although the Linux file system does not need file extensions, still you should use them. They help us in identifying the types of content that are stored in files. For example, if a file has a **.mp4** extension, you may know that it is a video file.

To view a complete list of content types and file extensions that your Linux system supports, you can see the _/etc/mime.types_ file. The **MIME**(_Multipurpose Internet Mail Extensions_) provides a standard designation and classification for file content types.


### 2️⃣ Directory File
To organize files in a hierarchy, file systems use directories. Directories are also files, but instead of storing data, they store the location of other files. To store the location of files placed in the directory, the directory uses directory entries. Each directory entry stores the name and location of a single file.

Linux file system starts with a directory called **/** or root directory. All files and directory files are created under this directory. Except the root directory, each directory has a parent directory.


### 3️⃣ Link File
Link files allow us to use a file with a different filename and from a different location. For this, we use link files. A link file is a pointer to another file. There are two types of links: a hard link and a symbolic or soft link.

A hard link creates a mirror copy of the original file. A hard link cannot be created to a directory or a file on another filesystem. A soft or symbolic link creates a pointer to the original file. A soft link can be created to a directory or a file on another filesystem.


### Special Files
Linux treats all hardware devices (such as hard drives, printers, monitors, terminal emulators, and CD/DVD drives) as special files. This means that an application program can access and use files and devices in the same way. This feature makes developing programs in Linux easier and flexible.

Linux places all special files or device files under the **/dev** directory. There are two types of special files: a character special file and a block special file. A character special file represents a device that transfers data in bytes such as a monitor or a printer. A block special file represents a device that transfers data in blocks such as a hard drive.

#### 4️⃣ Character Special File


#### 5️⃣ Block Special File


### 6️⃣ Socket File
A socket is a communication endpoint that applications use to exchange data. For example, if an application wants to communicate with another application, it connects with the socket of that application.

Each application that provides services to other applications or remote clients uses a socket to accept connections. Each socket has an associated IP address and port number that allow it to accept connections from clients.

For example, if an application of the local system wants to communicate with another application of a remote system, it connects to the socket of that application by using the associated IP address and port number of that socket.

Sockets are very complicated. To make the communication process easier between local applications, Linux uses socket files. Socket files allow applications of the local system to exchange data without going through the complex process of networking and sockets.

Socket files are the special files that use a file name as their address instead of an IP address and port number. Socket files use the **sendmsg()** and **recvmsg()** system calls to enable inter-process communication between local applications.


### 7️⃣ Named Pipe File
Linux allows us to send the output of any process or command to another process or command as the input. This feature is known as the pipe. Pipes work only when both processes are started by the same user and exist in the same parent process space.

If processes are executed under different user names and permissions, then standard pipes do not work. In such circumstances, named pipes are used. Named pipes are similar to the standard pipes except that they can be accessed as part of the filesystem.

Named pipe files are the empty pipe files. The kernel processes named pipe files without writing them to the file system. Named pipe files can exist anywhere in the file system. Named pipe files are also known as the **FIFO (First In First Out)** files.



## 🎯 Binary File (Executable)
> Instructions are packaged in a form called an executable object program and stored as a binary disk file. Object programs are also referred to as executable object files. 
> ELF is the default binary file format used on linux systems.

↗ [ELF (Executable and Linkable Format)](ELF%20(Executable%20and%20Linkable%20Format)/ELF%20(Executable%20and%20Linkable%20Format).md)



## Ref
[👍 Different Types of Files in Linux]: https://www.computernetworkingnotes.com/linux-tutorials/different-types-of-files-in-linux.html

[👍 z/Transaction Processing Facility Enterprise Edition | IBM Documentation]: https://www.ibm.com/docs/en/ztpf/2019?topic=linkage-executable-linking-format-elf

[👍 Linux Cygwin知识库（二）：目录、文件及基本操作]: https://silaoa.github.io/2019/2019-05-04-Linux%20Cygwin知识库（二）：目录、文件及基本操作.html
