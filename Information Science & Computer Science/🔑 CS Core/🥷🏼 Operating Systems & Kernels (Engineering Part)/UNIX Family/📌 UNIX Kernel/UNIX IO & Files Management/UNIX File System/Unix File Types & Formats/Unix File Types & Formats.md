# Unix File Types & Formats

[TOC]



## Res
### Related Topics
↗ [Linux File Types & Formats](../../../../../Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/Linux%20File%20Types%20&%20Formats.md)



## Intro



## 🎯 Textual File
![](../../../../../../../../../../Assets/Pics/Pasted%20image%2020230316142517.png)

### 1️⃣ Ordinary files
An ordinary file is a file on the system that contains data, text, or program instructions.
- Used to store your information, such as some text you have written or an image you have drawn. This is the type of file that you usually work with.
- Always located within/under a directory file.
- Do not contain other files.
- In long-format output of `ls -l`, this type of file is specified by the ==“-” symbol==.


### 2️⃣ Directories
Directories store both special and ordinary files. For users familiar with Windows or Mac OS, UNIX directories are equivalent to folders. A directory file contains an entry for every file and subdirectory that it houses. If you have 10 files in a directory, there will be 10 entries in the directory. Each entry has two components. (1) The Filename (2) A unique identification number for the file or directory (called the **inode number**)
- Branching points in the hierarchical tree.
- Used to organize groups of files.
- May contain ordinary files, special files or other directories.
- Never contain “real” information which you would work with (such as text). Basically, just used for organizing files.
- All files are descendants of the root directory, ( named / ) located at the top of the tree.

In long-format output of `ls –l` , this type of file is specified by the ==“d” symbol==.


### 3️⃣ Special Files
Used to represent a real physical device such as a printer, tape drive or terminal, used for Input/Output (I/O) operations. **Device or special files** are used for device Input/Output(I/O) on UNIX and Linux systems. They appear in a file system just like an ordinary file or a directory. On UNIX systems there are two flavors of special files for each device, **character special files** and **block special files** :
- When a **character special file** is used for device Input/Output(I/O), data is transferred one character at a time. This type of access is called **raw device access**.
- When a **block special file** is used for device Input/Output(I/O), data is transferred in large fixed-size blocks. This type of access is called **block device access**.

For terminal devices, it’s one character at a time. For disk devices though, raw access means reading or writing in whole chunks of data – blocks, which are native to your disk.
- In long-format output of `ls -l`, **character special files** are marked by the ==“c” symbol==.
- In long-format output of `ls -l`, **block special files** are marked by the ==“b” symbol==.


### 4️⃣ Pipes
UNIX allows you to link commands together using a pipe. The pipe acts a temporary file which only exists to hold data from one command until it is read by another.A Unix pipe provides a one-way flow of data.The output or result of the first command sequence is used as the input to the second command sequence. 

To make a pipe, put a vertical bar (|) on the command line between two commands.For example: **who | wc -l** In long-format output of `ls –l` , named pipes are marked by the ==“p” symbol==. 


### 5️⃣ Sockets
A Unix socket (or Inter-process communication socket) is a special file which allows for advanced inter-process communication. A Unix Socket is used in a client-server application framework.

In essence, it is a stream of data, very similar to network stream (and network sockets), but all the transactions are local to the filesystem. In long-format output of ls -l, Unix sockets are marked by ==“s” symbol==.


### 5️⃣ Symbolic Link
Symbolic link is used for referencing some other file of the file system.Symbolic link is also known as Soft link. It contains a text form of the path to the file it references. To an end user, symbolic link will appear to have its own name, but when you try reading or writing data to this file, it will instead reference these operations to the file it points to. If we delete the soft link itself , the data file would still be there.If we delete the source file or move it to a different location, symbolic file will not function properly. In long-format output of ls –l , Symbolic link are marked by the ==“l” symbol== (that’s a lower case L).



## 🎯 Binary File /Executable File



## Ref

