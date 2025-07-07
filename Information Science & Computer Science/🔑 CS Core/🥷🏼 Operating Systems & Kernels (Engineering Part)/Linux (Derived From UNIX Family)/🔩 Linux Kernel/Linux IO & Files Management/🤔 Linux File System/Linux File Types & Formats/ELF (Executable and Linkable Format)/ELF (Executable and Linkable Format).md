# ELF (Executable and Linkable Format)

[TOC]



## Res
### Related Topics


### Other Resources
https://man7.org/linux/man-pages/man5/elf.5.html

https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

https://www.cs.cmu.edu/afs/cs/academic/class/15213-f00/docs/elf.pdf



## Intro
> 🔗 https://en.wikipedia.org/wiki/Executable_and_Linkable_Format

In computing, the Executable and Linkable Format (ELF, formerly named Extensible Linking Format) is a common standard file format for executable files, object code, shared libraries, and core dumps. First published in the specification for the application binary interface (ABI) of the Unix operating system version named System V Release 4 (SVR4), and later in the Tool Interface Standard, it was quickly accepted among different vendors of Unix systems. In 1999, it was chosen as the standard binary file format for Unix and Unix-like systems on x86 processors by the 86open project.

By design, the ELF format is flexible, extensible, and cross-platform. For instance, it supports different endiannesses and address sizes so it does not exclude any particular CPU or instruction set architecture. This has allowed it to be adopted by many different operating systems on many different hardware platforms.

> 🔗 https://man7.org/linux/man-pages/man5/elf.5.html

ELF is the standard binary format on operating systems such as Linux. Some of the capabilities of ELF are dynamic linking, dynamic loading, imposing run-time control on a program, and an improved method for creating shared libraries. The ELF representation of control data in an object file is platform independent, which is an additional improvement over previous binary formats.


### ELF File Types
> ↗ [File Types & File Formats](../../../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20Types%20&%20File%20Formats.md)

> 🔗 https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

ELF文件主要有三种类型，可以通过ELF Header中的`e_type`成员进行区分。
- **可重定位文件（Relocatable File）**：`ETL_REL`。一般为`.o`文件。可以被链接成可执行文件或共享目标文件。静态链接库属于可重定位文件。
- **可执行文件（Executable File）**：`ET_EXEC`。可以直接执行的程序。
- **共享目标文件（Shared Object File）**：`ET_DYN`。一般为`.so`文件。有两种情况可以使用。
    - 链接器将其与其他可重定位文件、共享目标文件链接成新的目标文件；
    - 动态链接器将其与其他共享目标文件、结合一个可执行文件，创建进程映像。

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329112820.png)
![](../../../../../../../../../Assets/Pics/Screenshot%202025-03-29%20at%2013.06.55.png)

#### 👉 Relocatable File
#### 👉 Executable File
#### 👉 Shared Object File
#### 👉 Core Dump File\*



## ELF File Layout & Format
↗ [ELF File Layout & Format](ELF%20File%20Layout%20&%20Format.md)



## FatELF: universal binaries for Linux
> 🔗 https://en.wikipedia.org/wiki/Executable_and_Linkable_Format#FatELF:_universal_binaries_for_Linux

FatELF is an ELF binary-format extension that adds fat binary capabilities. It is aimed for Linux and other Unix-like operating systems. Additionally to the CPU architecture abstraction (byte order, word size, CPU instruction set etc.), there is the potential advantage of software-platform abstraction e.g., binaries which support multiple kernel ABI versions. As of 2021, FatELF has not been integrated into the mainline Linux kernel



## Ref

