# Program Linking & Loading (Link-time & Load-time)

[TOC]



## Res
### Related Topics
↗ [C-Based Languages](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/GPL(General%20Purpose%20Languages)/👔%20C-Based%20Languages/C-Based%20Languages.md)
- ↗ [C & CPP](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/GPL(General%20Purpose%20Languages)/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)

↗ [Compilation & Program Loading Tools](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
- ↗ [Program Linkers & Loaders](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Program%20Linkers%20&%20Loaders/Program%20Linkers%20&%20Loaders.md)

↗ [Operating System Components & Runtime Libraries](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Components%20&%20Runtime%20Libraries.md)
↗ [System Core Function Libraries & C Standard Library (User Mode)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)
↗ [Load Control](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Load%20Control/Load%20Control.md)

↗ [File Types & File Formats](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20Types%20&%20File%20Formats.md)
↗ [ELF (Executable and Linkable Format)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/ELF%20(Executable%20and%20Linkable%20Format)/ELF%20(Executable%20and%20Linkable%20Format).md)
↗ [Windows PE (Portable Executable) File](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20File%20System/Window%20File%20Types%20&%20Formats/Windows%20PE%20(Portable%20Executable)%20File/Windows%20PE%20(Portable%20Executable)%20File.md)

↗ [GNU C Library (glibc)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🏆%20Linux%20System%20Libraries%20&%20Runtime%20Environments/👎%20GNU%20C%20Library%20(glibc)/GNU%20C%20Library%20(glibc).md)
↗ [Microsoft C run-time library (MSVCRT.DLL)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows%20System%20Libraries%20&%20Runtime%20Environments/Microsoft%20C%20run-time%20library%20(MSVCRT.DLL)/Microsoft%20C%20run-time%20library%20(MSVCRT.DLL).md)

↗ [Application Runtimes & SDKs](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Application%20Runtimes%20&%20SDKs.md)


### Learning Resources
【什么是可执行文件 (调试信息；Stack Unwinding；静态链接中的重定位) [南京大学2022操作系统-P16]】 https://www.bilibili.com/video/BV15F411G7Ti/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
【动态链接和加载 (静态 ELF 加载器实现；调试 Linux 内核；动态链接和加载) [南京大学2022操作系统-P17]】 https://www.bilibili.com/video/BV1wL4y1L72C/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### Program Linking
On most systems, program compiler output must pass through a link editor (or linker) before it can be executed on the target system. Linking is the process of matching the external symbols of a program with all exported symbols from other files, producing a single binary file with no unresolved external symbols. The principal job of a link editor, as shown in Figure 8.6, is to combine related program files into a unified loadable module. (The example in the figure uses file extensions characteristic of a DOS/Windows environment.) The constituent binary files can be entirely user-written, or they can be combined with standard system routines, depending on the needs of the application. Moreover, the binary linker input can be produced by any compiler. Among other things, this permits various sections of a program to be written in different languages, so part of a program could be written in C++ for ease of coding, and another part might be written in assembly language to speed up execution in a particularly slow section of the code.

As with assemblers, most link editors require two passes to produce a complete load module comprising all of the external input modules.
- During its first pass, the linker produces a global external symbol table containing the names of each of the external modules and their relative starting addresses with respect to the beginning of the total linked module.
- During the second pass, all references between the (formerly separate and external) modules are replaced with displacements for those modules from the symbol table. During the second pass of the linker, platform-dependent code can also be added to the combined module, producing a unified and loadable binary program file.

> 🔗 https://blog.csdn.net/jinking01/article/details/105388149?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388149&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

模块化设计是软件开发中最常用的设计思想。**链接（Linking）** 本质上就是把各个模块之间相互引用的部分处理好，使得各个模块之间能够正确衔接。比如：

> 我们在模块`main.c`中使用另一个模块`func.c`中的`foo()`函数。我们在`main.c`模块中每一处调用`foo`时都必须确切知道`foo`函数的地址。但由于每个模块都是单独编译的。编译器在编译`main.c`的时候并不知道`foo`函数的地址。所以编译器会暂时把这些调用`foo`的指令的目标地址搁置，等待最后链接时由链接器将这些指令的目标地址修正。这就是静态链接最基本的过程和作用。

如下图所示为最基本的静态链接过程示意图。每个模块的源代码文件（如`.c`）文件经过编译器编译成**目标文件**（Object File，一般扩展名为`.o`或`.obj`）。目标文件和 **库（Library）** 一起链接形成最终的可执行文件。

其中，最常见的库就是**运行时库（Runtime Library）**，它是支持程序运行的基本函数的集合。**库本质上是一组目标文件的包，由一些最常用的代码编译成目标文件后打包而成**。

![600](../../../../../Assets/Pics/Pasted%20image%2020250329153603.png)
链接过程主要包含了三个步骤：
1. **地址与空间分配（Address and Storage Allocation）**
2. **符号解析（Symbol Resolution）**
3. **重定位（Relocation）**

↗ [ELF File Static Linking](Program%20Static%20Linking%20Procedure/ELF%20File%20Static%20Linking.md)
↗ [ELF File Dynamic Linking & Loading](Program%20Dynamic%20Linking%20&%20Loading%20Procedure/ELF%20File%20Dynamic%20Linking%20&%20Loading.md)
↗ [PE File Static Linking](Program%20Static%20Linking%20Procedure/PE%20File%20Static%20Linking.md)
↗ [PE File Dynamic Linking & Loading](Program%20Dynamic%20Linking%20&%20Loading%20Procedure/PE%20File%20Dynamic%20Linking%20&%20Loading.md)
#### Linking Library Files
↗ [Operating System Components & Runtime Libraries](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Components%20&%20Runtime%20Libraries.md)
↗ [System Core Function Libraries & C Standard Library (User Mode)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)
↗ [GNU C Library (glibc)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🏆%20Linux%20System%20Libraries%20&%20Runtime%20Environments/👎%20GNU%20C%20Library%20(glibc)/GNU%20C%20Library%20(glibc).md)
↗ [Microsoft C run-time library (MSVCRT.DLL)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows%20System%20Libraries%20&%20Runtime%20Environments/Microsoft%20C%20run-time%20library%20(MSVCRT.DLL)/Microsoft%20C%20run-time%20library%20(MSVCRT.DLL).md)

↗ [Application Runtimes & SDKs](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Application%20Runtimes%20&%20SDKs.md)


> 🔗 https://www.cnblogs.com/icefoxhz/p/16668663.html

静态链接库和动态库均为函数库:
- 函数库：不是C语言的一部分，是一些事先写好的函数的集合，给别人复用，就像scanf和printf函数一样，通过#include <stdio.h>，即可调用。早期并没有函数库，只是后来的程序员们通过整理把日常用的函数进行合并，形成一份完整的函数库，就是现在的标准函数库，例如：glibc
- 静态链接库：
	- 函数库源代码经过只编译不链接形成的.o目标文件，然后通过ar工具将.o文件归档成.a静态链接库文件。商业公司通过发布.h头文件和.a静态链接库文件给用户使用。用户拿到.a和.h文件，通过.h文件得知函数库内的函数原型，然后在自己的.c文件中直接调用这些库函数，在链接形成可执行程序过程中：链接器会在.a文件中找到对应的.o文件。
	- 缺点：如果多个应用程序都使用了同一个静态库的库函数时，则会导致每个应用程序在生成可执行程序中，都各自复制了一份库函数的代码，这些应用程序如果同时运行，在系统内存中则会存在多个库函数的副本，很浪费内存  
- 动态链接库（.so Shared Object共享库）
	- 优点：不像静态链接库那样，拷贝库函数的代码到可执行程序中，而是在可执行程序需要调用到库函数的位置做了标记，当可执行程序运行到调用该库函数的位置，会自动将该动态库加载到内存，以后不管多少个应用程序同时运行，该库函数在内存中只有一份

总结：
- 静态库相当于直接把代码插入到生成的可执行文件中，会导致体积变大，但是只需要一个文件即可运行。
- 动态库则只在生成的可执行文件中生成“插桩”函数，当可执行文件被加载时会读取指定目录中的.dll文件，加载到内存中空闲的位置，并且替换相应的“插桩”指向的地址为加载后的地址，这个过程称为重定向。这样以后函数被调用就会跳转到动态加载的地址去。
- Windows：可执行文件同目录，其次是环境变量%PATH%  
- Linux：ELF格式可执行文件的RPATH，其次是/usr/lib等


### Programing Loading
> 💡 Loading in general refers to the process of executable files of program being loaded (copied) from disk to main memory and being ready to executed. Usually this is down by another piece of program called the "loader". In case of static linked executable files, the loader simply copied them from the disk to the memory; in case of dynamic linked executable files, the loader is expected to do a lot more: this process is what "narrowly" defined as "program loading", i.e. the process of dynamic program loading, which excluding the static program loading. 

↗ [ELF File Static Linking](Program%20Static%20Linking%20Procedure/ELF%20File%20Static%20Linking.md)
↗ [ELF File Dynamic Linking & Loading](Program%20Dynamic%20Linking%20&%20Loading%20Procedure/ELF%20File%20Dynamic%20Linking%20&%20Loading.md)
↗ [PE File Static Linking](Program%20Static%20Linking%20Procedure/PE%20File%20Static%20Linking.md)
↗ [PE File Dynamic Linking & Loading](Program%20Dynamic%20Linking%20&%20Loading%20Procedure/PE%20File%20Dynamic%20Linking%20&%20Loading.md)

---
> 🔗 https://blog.csdn.net/jinking01/article/details/105388577?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388577&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

当我们在 Linux 的 bash 中输入命令执行某个 ELF 可执行文件时，如下所示。
```
$ ./hello.out
```

那么，Linux 系统是如何装载该 ELF 文件并执行的呢？这个过程可以分为以下这些步骤：
- 创建新进程
- 检查可执行文件类型
- 搜索匹配装载处理过程
- 装载执行可执行文件

1. **创建新进程**
	1. 首先在用户层面，bash 进程会调用 `fork()` 系统调用创建一个新的进程。其次，新的进程通过调用 `execve()` 系统调用来执行指定的 ELF 文件。原先的 bash 进程继续返回并等待刚才启动的新进程结束，之后继续等待用户输入命令。
	2. `execve()` 系统调用被定义在 `unistd.h`，其原型如下所示。其中的三个参数分别对应被执行程序的 **程序文件名**、**执行参数**、**环境变量**。
```
int execve(const char *filename, char *const argv[], char *const envp[]);
```
2. **检查可执行文件类型**
	1. 当进入 `execve()` 系统调用之后，Linux 内核就开始进行真正的装载工作。在内核中，`execve()` 系统调用相应的入口是 `sys_execve()`。`sys_execve()` 进行一些参数的检查复制之后，调用 `do_execve()`。`do_execve()` 会首先查找被执行的文件，如果找到文件，则读取文件的前 128 个字节。
	2. 为什么要先读取文件的前 128 个字节？这是因为Linux支持的可执行文件不止 ELF 一种，还包括 **a.out**、**Java 程序**、**以 `#!` 开头的脚本程序**。`do_execve()`通过读取前 128 个字节来判断文件的格式。每种可执行文件格式的开头几个字节都是很特殊的，尤其是前4个字节，被称为 **魔数（Magic Number）**。比如：ELF的可执行文件格式的头 4 个字节为 `0x7F`、`e`、`l`、`f`；Java的可执行文件格式的头 4 个字节为 `c`、`a`、`f`、`e`；如果是解释型语言的脚本，则第一行通常是 `#!/bin/sh` 或 `#!/user/bin/python`，其中 `#` 和 `!` 构成了魔数，系统一旦判断到这两个字节，就对后面的字符串进行解析，以确定具体的解释程序的路径。
3. **搜索匹配装载处理过程**
	1. 当 `do_execve()` 读取了128个字节的文件头部之后，调用 `search_binary_handle()` 去搜索和匹配合适的可执行文件装载处理过程。**Linux 中所有被支持的可执行文件格式都有相应的装载处理过程**，`search_binary_handler()` 会通过判断头部的魔术确定文件的格式，并且调用相应的装载处理过程。常见的可执行程序及其装载处理过程的对应关系如下所示.
		1. ELF 可执行文件：`load_elf_binary()`
		2. a.out 可执行文件：`load_aout_binary()`
		3. 可执行脚本程序：`load_script()`
4. **装载执行可执行文件**
	1. 以 ELF 的装载处理过程 `load_elf_binary()` 为例，其所包含的步骤如下图所示：
![|600](../../../../Assets/Pics/Pasted%20image%2020250329172821.png)
<small><a>https://blog.csdn.net/jinking01/article/details/105388577?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388577&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link</a> ELF Loading Example: load_elf_binary()</small>

5. 操作系统读取可执行文件 ELF 的 `Header`，检查文件的有效性。
6. 操作系统读取可执行文件 ELF的 `Program Header Table` 中读取每个 `Segment` 的虚拟地址、文件地址、属性等。
7. 操作系统根据 `Program Header Table` 将可执行文件 ELF 映射至内存。
8. 如果是静态链接的情况，则直接跳转至第 7 步；如果是动态链接的情况，操作系统将查找 `.interp` 节，找到 **动态链接器（Dynamic Linker）** 的位置，并启动动态链接器。在 Linux 下，动态链接器 `ld.so` 是一个共享对象，操作系统同样通过映射的方式将它加载到进程的地址空间。操作系统在加载完后，将控制权交给动态链接器的入口。
9. 动态链接器获得控制权后，开始执行一系列初始化操作。
10. 动态链接器根据当前的环境参数，对可执行文件进行动态链接工作。
11. 控制权被转交到可执行文件的入口地址，程序开始正式执行。


### Linking & Loading Types
> [!TIP]
> There is a difference between compilation, linking, and loading. 
> That means, static /dynamic complication doesn't necessarily indicate static /dynamic linking!
> 
> ↗ [Program Language Processing & Compilation Theory (Compile-time)](../🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md)
#### Static Linking
↗ [ELF File Static Linking](Program%20Static%20Linking%20Procedure/ELF%20File%20Static%20Linking.md)
↗ [PE File Static Linking](Program%20Static%20Linking%20Procedure/PE%20File%20Static%20Linking.md)

![](../../../../Assets/Pics/Pasted%20image%2020250329182959.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>
#### Dynamic Linking & Loading
- Load Time Dynamic Linking
- Run Time Dynamic Linking

↗ [ELF File Dynamic Linking & Loading](Program%20Dynamic%20Linking%20&%20Loading%20Procedure/ELF%20File%20Dynamic%20Linking%20&%20Loading.md)
↗ [PE File Dynamic Linking & Loading](Program%20Dynamic%20Linking%20&%20Loading%20Procedure/PE%20File%20Dynamic%20Linking%20&%20Loading.md)s

![](../../../../Assets/Pics/Pasted%20image%2020250329183012.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>



## Ref
[Context: Programming Language Implementation | Florida State University, COP4610: Operating Systems & Concurrent Programming]: https://www.cs.fsu.edu/~baker/opsys/notes/linking.html

![](../../../../Assets/Pics/Pasted%20image%2020250304121327.png)

![](../../../../Assets/Pics/Pasted%20image%2020250304121246.png)

[C/C++ 静态链接库(.a) 与 动态链接库(.so)]: https://www.cnblogs.com/52php/p/5681711.html
![](../../../../../Assets/Pics/Pasted%20image%2020240617143024.png)

[👍 C语言静态链接库和动态链接库讲解及制作使用]: https://www.cnblogs.com/icefoxhz/p/16668663.html
