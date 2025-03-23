# Linking Phase

[TOC]



## Res
### Related Topics
↗ [C-Based Languages](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/C-Based%20Languages.md)
↗ [C & CPP](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)

↗ [ELF (Executable and Linkable Format)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/ELF%20(Executable%20and%20Linkable%20Format)/ELF%20(Executable%20and%20Linkable%20Format).md)
↗ [Microsoft C run-time library (MSVCRT.DLL)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows%20System%20Libraries%20&%20Runtime%20Environments/Microsoft%20C%20run-time%20library%20(MSVCRT.DLL)/Microsoft%20C%20run-time%20library%20(MSVCRT.DLL).md)

↗ [Program Linkers & Loaders](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/Compilation%20&%20Program%20Loading%20Tools/Program%20Linkers%20&%20Loaders.md)
↗ [Operating System Components & Runtime Libraries](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Components%20&%20Runtime%20Libraries.md)
↗ [System Core Function Libraries & C Standard Library (User Mode)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)



## Intro
### Program Linking
On most systems, program compiler output must pass through a link editor (or linker) before it can be executed on the target system. Linking is the process of matching the external symbols of a program with all exported symbols from other files, producing a single binary file with no unresolved external symbols. The principal job of a link editor, as shown in Figure 8.6, is to combine related program files into a unified loadable module. (The example in the figure uses file extensions characteristic of a DOS/Windows environment.) The constituent binary files can be entirely user-written, or they can be combined with standard system routines, depending on the needs of the application. Moreover, the binary linker input can be produced by any compiler. Among other things, this permits various sections of a program to be written in different languages, so part of a program could be written in C++ for ease of coding, and another part might be written in assembly language to speed up execution in a particularly slow section of the code.

As with assemblers, most link editors require two passes to produce a complete load module comprising all of the external input modules.
- During its first pass, the linker produces a global external symbol table containing the names of each of the external modules and their relative starting addresses with respect to the beginning of the total linked module.
- During the second pass, all references between the (formerly separate and external) modules are replaced with displacements for those modules from the symbol table. During the second pass of the linker, platform-dependent code can also be added to the combined module, producing a unified and loadable binary program file.


### Linking Library Files
🔗 https://www.cnblogs.com/icefoxhz/p/16668663.html

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



## Ref
[C/C++ 静态链接库(.a) 与 动态链接库(.so)]: https://www.cnblogs.com/52php/p/5681711.html
![](../../../../../Assets/Pics/Pasted%20image%2020240617143024.png)

[👍 C语言静态链接库和动态链接库讲解及制作使用]: https://www.cnblogs.com/icefoxhz/p/16668663.html
