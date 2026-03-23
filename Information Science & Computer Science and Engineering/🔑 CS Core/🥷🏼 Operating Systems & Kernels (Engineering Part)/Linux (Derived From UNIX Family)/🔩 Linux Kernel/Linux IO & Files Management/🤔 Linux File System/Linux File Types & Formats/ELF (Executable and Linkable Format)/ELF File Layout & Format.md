# ELF File Layout & Format

[TOC]



## Res
### Related Topics
↗ [Compilation & Program Loading Tools](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
↗ [Compilation Phase](../../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)

↗ [ELF and ABI Standards](../../../../../Linux%20Referenced%20Specifications/ELF%20and%20ABI%20Standards.md)


### Other Resources
https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779
ELF Format Cheatsheet



## Intro
### Program Instruction & Program Data


### Why Separate Instruction & Data
1. Privilege
2. Cache & Locality Principles
3. Share Memory


### ⭐ ELF File Layout
> 🔗 https://www.cs.cmu.edu/afs/cs/academic/class/15213-f00/docs/elf.pdf

Object files (i.e. ELF files in this pdf's context) participate in **program linking** (building a program) and **program execution** (running a pro-ram). For convenience and efficiency, the object file format provides **parallel views of a file's contents**, reflecting the differing needs of these activities.

![](../../../../../../../../../Assets/Pics/Screenshot%202025-03-29%20at%2013.06.55.png)
<small><a>https://www.cs.cmu.edu/afs/cs/academic/class/15213-f00/docs/elf.pdf</a></small>

An **ELF header** resides at the beginning and holds a "road map" describing the file's organization. Sections hold the bulk of object file information for the linking view: instructions, data, symbol table, relocaion information, and so on.

A **program header table**, if present, tells the system how to create a process image. Files used to build a process image (execute a program) must have a program header table; relocatable files do not need one. A section header table contains information describing the file's sections. Every section has an entry in the table; each entry gives information such as the section name, the section size, etc. Files used during linking must have a section header table; other object files may or may not have one.

> Although the figure shows the program header table immediately after the ELF header, and the section header table following the sections, actual files may differ. Moreover, sections and segments have no specified order. ==Only the ELF header has a fixed position in the file.==

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329134042.png)
<small>Executable and Linkable Format (ELF), is the default binary format on Linux-based systems. <a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>


> 🔗 https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329124413.png)
<small><a>https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link</a></small>
**注意：段（`Segment`）与节（`Section`）的区别。很多地方对两者有所混淆。段是程序执行的必要组成，当多个目标文件链接成一个可执行文件时，会将相同权限的节合并到一个段中。相比而言，节的粒度更小。**

如图所示，为ELF文件的基本结构，其主要由四部分组成：
- ELF Header
- ELF Program Header Table (或称Program Headers、程序头)
- ELF Section Header Table (或称Section Headers、节头表)
- ELF Sections

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329143843.png)
<small><a>https://en.wikipedia.org/wiki/Executable_and_Linkable_Format</a></small>
#### Sections 🆚 Segments
> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

Segments are divided into sections, each section has an utility for the ELF file.

Sections per se, are not useful at runtime, so they are only useful at link time.

Segments are used for creating a block of memory, with some specific permissions and store there some content.

In contrast from other File formats, ELF files are composed of sections and segments. As previously mentioned, sections gather all needed information to link a given object file and build an executable, while Program Headers split the executable into segments with different attributes, which will eventually be loaded into memory.

In order to understand the relationship between Sections and Segments, we can picture segments as a tool to make the linux loader’s life easier, as they group sections by attributes into single segments in order to make the loading process of the executable more efficient, instead of loading each individual section into memory. The following diagram attempts to illustrate this concept:

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329140611.png)
#### In-memory loaded ELF layout 🆚 ELF file on disk layout
ELF files in disk are just a format that defines how to load it in memory to work fine.

In disk it specifies some not necessary useful information such as .`symtab`, .`strtab`, they are not used at runtime and are there just for debugging purposes.

Size in memory is usually different than in disk, for example, someone can define uninitialized variables (stored at bss). In disk you just have to specify it's size without occupying that space. Once loaded in memory you have to fill that space somehow, for example with zeroes, so when loading the storage needed to allocate the ELF increases.

ELF file in disk:
![|450](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329141145.png)

ELF loaded in memory:
![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329141151.png)


### ELF File Execution
↗ [Programming Language Processing & Program Execution](../../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Program Execution (Runtime)](../../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)



## ⏬ ELF File Header / Executable Header (Ehdr)
> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

==This is the only part of the ELF that must be in an specific location (at the starting of the ELF file).==

It defines basic information, such as the file magic number to know whether a file is an ELF or another type. Also it defines type of ELF, architecture and some options that will link it to other parts of the ELF file.

32-bit struct:

```
#define EI_NIDENT (16)

typedef struct
{
  unsigned char	e_ident[EI_NIDENT];	/* Magic number and other info */
  Elf32_Half	e_type;			/* Object file type */
  Elf32_Half	e_machine;		/* Architecture */
  Elf32_Word	e_version;		/* Object file version */
  Elf32_Addr	e_entry;		/* Entry point virtual address */
  Elf32_Off	e_phoff;		/* Program header table file offset */
  Elf32_Off	e_shoff;		/* Section header table file offset */
  Elf32_Word	e_flags;		/* Processor-specific flags */
  Elf32_Half	e_ehsize;		/* ELF header size in bytes */
  Elf32_Half	e_phentsize;		/* Program header table entry size */
  Elf32_Half	e_phnum;		/* Program header table entry count */
  Elf32_Half	e_shentsize;		/* Section header table entry size */
  Elf32_Half	e_shnum;		/* Section header table entry count */
  Elf32_Half	e_shstrndx;		/* Section header string table index */
} Elf32_Ehdr;
```

64-bit struct:

```
typedef struct
{
  unsigned char	e_ident[EI_NIDENT];	/* Magic number and other info */
  Elf64_Half	e_type;			/* Object file type */
  Elf64_Half	e_machine;		/* Architecture */
  Elf64_Word	e_version;		/* Object file version */
  Elf64_Addr	e_entry;		/* Entry point virtual address */
  Elf64_Off	e_phoff;		/* Program header table file offset */
  Elf64_Off	e_shoff;		/* Section header table file offset */
  Elf64_Word	e_flags;		/* Processor-specific flags */
  Elf64_Half	e_ehsize;		/* ELF header size in bytes */
  Elf64_Half	e_phentsize;		/* Program header table entry size */
  Elf64_Half	e_phnum;		/* Program header table entry count */
  Elf64_Half	e_shentsize;		/* Section header table entry size */
  Elf64_Half	e_shnum;		/* Section header table entry count */
  Elf64_Half	e_shstrndx;		/* Section header string table index */
} Elf64_Ehdr;
```

The `EI_NIDENT`, is the size in bytes of the first struct entry, the `e_type`.

It is the ELF magic headers and some basic specifications of the file.

> 🔗 https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

我们可以使用readelf工具来查看ELF Header。

|   |   |
|---|---|
|1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22|$ readelf -h hello.o<br><br>ELF Header:<br>  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00<br>  Class:                             ELF64<br>  Data:                              2's complement, little endian<br>  Version:                           1 (current)<br>  OS/ABI:                            UNIX - System V<br>  ABI Version:                       0<br>  Type:                              REL (Relocatable file)<br>  Machine:                           Advanced Micro Devices X86-64<br>  Version:                           0x1<br>  Entry point address:               0x0<br>  Start of program headers:          0 (bytes into file)<br>  Start of section headers:          672 (bytes into file)<br>  Flags:                             0x0<br>  Size of this header:               64 (bytes)<br>  Size of program headers:           0 (bytes)<br>  Number of program headers:         0<br>  Size of section headers:           64 (bytes)<br>  Number of section headers:         13<br>  Section header string table index: 10|

ELF文件结构示意图中定义的`Elf_Ehdr`的各个成员的含义与readelf具有对应关系。如下表所示：

| 成员          | 含义                                                                      |
| ----------- | ----------------------------------------------------------------------- |
| e_ident     | Magic: 7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00                  |
|             | Class: ELF32                                                            |
|             | Data: 2’s complement, little end                                        |
|             | Version: 1(current)                                                     |
|             | OS/ABI: UNIX - System V                                                 |
|             | ABI Version: 0                                                          |
| e_type      | Type: REL (Relocatable file)                                            |
|             | ELF文件类型                                                                 |
| e_machine   | Machine: Advanced Micro Devices X86-64                                  |
|             | ELF文件的CPI平台属性                                                           |
| e_version   | Version: 0x1                                                            |
|             | ELF版本号。一般为常数1                                                           |
| e_entry     | Entry point address: 0x0                                                |
|             | **入口地址，规定ELF程序的入口虚拟地址，操作系统在加载完该程序后从这个地址开始执行进程的指令。可重定位指令一般没有入口地址，则该值为0** |
| e_phoff     | Start of program headers: 0(bytes into file)                            |
| e_shoff     | Start of section headers: 672 (bytes into file)                         |
|             | Section Header Table 在文件中的偏移                                            |
| e_word      | Flags: 0x0                                                              |
|             | ELF标志位，用来标识一些ELF文件平台相关的属性。                                              |
| e_ehsize    | Size of this header: 64 (bytes)                                         |
|             | ELF Header本身的大小                                                         |
| e_phentsize | Size of program headers: 0 (bytes)                                      |
| e_phnum     | Number of program headers: 0                                            |
| e_shentsize | Size of section headers: 64 (bytes)                                     |
|             | 单个Section Header大小                                                      |
| e_shnum     | Number of section headers: 13                                           |
|             | Section Header的数量                                                       |
| e_shstrndx  | Section header string table index: 10                                   |
|             | Section Header字符串表在Section Header Table中的索引                             |
> For more, go to 🔗 [ELF Cheat Sheet](https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779)


### ELF Magic Number (魔数)
 > 🔗 https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
 
每种可执行文件的格式的开头几个字节都是很特殊的，特别是开头4个字节，通常被称为**魔数（Magic Number）**。通过对魔数的判断可以确定文件的格式和类型。如：ELF的可执行文件格式的头4个字节为`0x7F`、`e`、`l`、`f`；Java的可执行文件格式的头4个字节为`c`、`a`、`f`、`e`；如果被执行的是Shell脚本或perl、python等解释型语言的脚本，那么它的第一行往往是`#!/bin/sh`或`#!/usr/bin/perl`或`#!/usr/bin/python`，此时前两个字节`#`和`!`就构成了魔数，系统一旦判断到这两个字节，就对后面的字符串进行解析，以确定具体的解释程序路径。



## ⏬ Programme Header Table
> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

The program header table provides a segment view of the binary, as opposed to the section view provided by the section header table. The section view of an ELF binary, is meant for static-linking purposes only.

In contrast, the segment view, is used by the operating system and dynamic-linker when loading an ELF into a process for execution to locate the relevant code and data and decide what to load into virtual memory.

Segments provide an execution view, they are needed only for executable ELF files and not for nonexecutable files such as relocatable objects.

32-bit struct:

```
typedef struct
{
  Elf32_Word	p_type;			/* Segment type */
  Elf32_Off	p_offset;		/* Segment file offset */
  Elf32_Addr	p_vaddr;		/* Segment virtual address */
  Elf32_Addr	p_paddr;		/* Segment physical address */
  Elf32_Word	p_filesz;		/* Segment size in file */
  Elf32_Word	p_memsz;		/* Segment size in memory */
  Elf32_Word	p_flags;		/* Segment flags */
  Elf32_Word	p_align;		/* Segment alignment */
} Elf32_Phdr;
```

64-bit struct:

```
typedef struct
{
  Elf64_Word	p_type;			/* Segment type */
  Elf64_Word	p_flags;		/* Segment flags */
  Elf64_Off	p_offset;		/* Segment file offset */
  Elf64_Addr	p_vaddr;		/* Segment virtual address */
  Elf64_Addr	p_paddr;		/* Segment physical address */
  Elf64_Xword	p_filesz;		/* Segment size in file */
  Elf64_Xword	p_memsz;		/* Segment size in memory */
  Elf64_Xword	p_align;		/* Segment alignment */
} Elf64_Phdr;
```

![](../../../../../../../../../Assets/Pics/Screenshot%202025-03-29%20at%2013.23.34.png)
<small><a>https://www.cs.cmu.edu/afs/cs/academic/class/15213-f00/docs/elf.pdf</a></small>



## ⏬ Section Header Table (Shdr)
> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

The code and data is divided into contiguous non-overlapping chunks called sections.

It is just an space to store data or code, which its specifications are in a section header specifying needed details such as the size and offset.

Every section has a section header which defines it.

32-bit struct:

```
typedef struct
{
  Elf32_Word	sh_name;		/* Section name (string tbl index) */
  Elf32_Word	sh_type;		/* Section type */
  Elf32_Word	sh_flags;		/* Section flags */
  Elf32_Addr	sh_addr;		/* Section virtual addr at execution */
  Elf32_Off	sh_offset;		/* Section file offset */
  Elf32_Word	sh_size;		/* Section size in bytes */
  Elf32_Word	sh_link;		/* Link to another section */
  Elf32_Word	sh_info;		/* Additional section information */
  Elf32_Word	sh_addralign;		/* Section alignment */
  Elf32_Word	sh_entsize;		/* Entry size if section holds table */
} Elf32_Shdr;
```

64-bit struct:

```
typedef struct
{
  Elf64_Word	sh_name;		/* Section name (string tbl index) */
  Elf64_Word	sh_type;		/* Section type */
  Elf64_Xword	sh_flags;		/* Section flags */
  Elf64_Addr	sh_addr;		/* Section virtual addr at execution */
  Elf64_Off	sh_offset;		/* Section file offset */
  Elf64_Xword	sh_size;		/* Section size in bytes */
  Elf64_Word	sh_link;		/* Link to another section */
  Elf64_Word	sh_info;		/* Additional section information */
  Elf64_Xword	sh_addralign;		/* Section alignment */
  Elf64_Xword	sh_entsize;		/* Entry size if section holds table */
} Elf64_Shdr;
```


> 🔗 https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

ELF 节头表是一个节头数组。每一个节头都描述了其所对应的节的信息，如节名、节大小、在文件中的偏移、读写权限等。**编译器、链接器、装载器都是通过节头表来定位和访问各个节的属性的。**

我们可以使用readelf工具来查看节头表。

|   |   |
|---|---|
|1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37|$ readelf -S hello.o<br><br>There are 13 section headers, starting at offset 0x2a0:<br><br>Section Headers:<br>  [Nr] Name              Type             Address           Offset<br>       Size              EntSize          Flags  Link  Info  Align<br>  [ 0]                   NULL             0000000000000000  00000000<br>       0000000000000000  0000000000000000           0     0     0<br>  [ 1] .text             PROGBITS         0000000000000000  00000040<br>       0000000000000015  0000000000000000  AX       0     0     1<br>  [ 2] .rela.text        RELA             0000000000000000  000001f0<br>       0000000000000030  0000000000000018   I      11     1     8<br>  [ 3] .data             PROGBITS         0000000000000000  00000055<br>       0000000000000000  0000000000000000  WA       0     0     1<br>  [ 4] .bss              NOBITS           0000000000000000  00000055<br>       0000000000000000  0000000000000000  WA       0     0     1<br>  [ 5] .rodata           PROGBITS         0000000000000000  00000055<br>       000000000000000d  0000000000000000   A       0     0     1<br>  [ 6] .comment          PROGBITS         0000000000000000  00000062<br>       0000000000000035  0000000000000001  MS       0     0     1<br>  [ 7] .note.GNU-stack   PROGBITS         0000000000000000  00000097<br>       0000000000000000  0000000000000000           0     0     1<br>  [ 8] .eh_frame         PROGBITS         0000000000000000  00000098<br>       0000000000000038  0000000000000000   A       0     0     8<br>  [ 9] .rela.eh_frame    RELA             0000000000000000  00000220<br>       0000000000000018  0000000000000018   I      11     8     8<br>  [10] .shstrtab         STRTAB           0000000000000000  00000238<br>       0000000000000061  0000000000000000           0     0     1<br>  [11] .symtab           SYMTAB           0000000000000000  000000d0<br>       0000000000000108  0000000000000018          12     9     8<br>  [12] .strtab           STRTAB           0000000000000000  000001d8<br>       0000000000000013  0000000000000000           0     0     1<br>Key to Flags:<br>  W (write), A (alloc), X (execute), M (merge), S (strings), l (large)<br>  I (info), L (link order), G (group), T (TLS), E (exclude), x (unknown)<br>  O (extra OS processing required) o (OS specific), p (processor specific)|

ELF文件结构示意图中定义的`Elf_Shdr`的各个成员的含义与readelf具有对应关系。如下表所示：

|成员|含义|
|---|---|
|sh_name|节名|
||节名是一个字符串，保存在一个名为`.shstrtab`的字符串表（可通过Section Header索引到）。sh_name的值实际上是其节名字符串在`.shstrtab`中的偏移值|
|sh_type|节类型|
|sh_flags|节标志位|
|sh_addr|节地址：节的虚拟地址|
||如果该节可以被加载，则sh_addr为该节被加载后在进程地址空间中的虚拟地址；否则sh_addr为0|
|sh_offset|节偏移|
||**如果该节存在于文件中，则表示该节在文件中的偏移；否则无意义，如sh_offset对于BSS 节来说是没有意义的**|
|sh_size|节大小|
|sh_link、sh_info|节链接信息|
|sh_addralign|节地址对齐方式|
|sh_entsize|节项大小|
||有些节包含了一些固定大小的项，如符号表，其包含的每个符号所在的大小都一样的，对于这种节，sh_entsize表示每个项的大小。**如果为0，则表示该节不包含固定大小的项。**|
#### Section Type（sh_type）
节名是一个字符串，只是在链接和编译过程中有意义，但它并不能真正地表示节的类型。对于编译器和链接器来说，主要决定节的属性是节的类型（`sh_type`）和节的标志位（`sh_flags`）。

节的类型相关常量以`SHT_`开头，上述`readelf -S`命令执行的结果省略了该前缀。常见的节类型如下表所示：

|常量|值|含义|
|---|---|---|
|SHT_NULL|0|无效节|
|SHT_PROGBITS|1|**程序节**。代码节、数据节都是这种类型。|
|SHT_SYMTAB|2|**符号表**|
|SHT_STRTAB|3|**字符串表**|
|SHT_RELA|4|**重定位表**。该节包含了重定位信息。|
|SHT_HASH|5|**符号表的哈希表**|
|SHT_DYNAMIC|6|动态链接信息|
|SHT_NOTE|7|提示性信息|
|SHT_NOBITS|8|表示该节在文件中没有内容。如`.bss`节|
|SHT_REL|9|该节包含了重定位信息|
|SHT_SHLIB|10|保留|
|SHT_DNYSYM|11|**动态链接的符号表**|
#### Section Flagi Bit（sh_flag）
节标志位表示该节在进程虚拟地址空间中的属性。如是否可写、是否可执行等。相关常量以`SHF_`开头。常见的节标志位如下表所示：

|常量|值|含义|
|---|---|---|
|SHF_WRITE|1|表示该节在进程空间中可写|
|SHF_ALLOC|2|表示该节在进程空间中需要分配空间。有些包含指示或控制信息的节不需要在进程空间中分配空间，就不会有这个标志。|
|SHF_EXECINSTR|4|表示该节在进程空间中可以被执行|
#### Section Link Info（sh_link、sh_info）
如果节的类型是与链接相关的（无论是动态链接还是静态链接），如**重定位表、符号表、**等，则`sh_link`、`sh_info`两个成员所包含的意义如下所示。其他类型的节，这两个成员没有意义。

| sh_type     | sh_link                 | sh_info            |
| ----------- | ----------------------- | ------------------ |
| SHT_DYNAMIC | 该节所使用的**字符串表**在节头表中的下标  | 0                  |
| SHT_HASH    | 该节所使用的**符号表**在节头表中的下标   | 0                  |
| SHT_REL     | 该节所使用的**相应符号表**在节头表中的下标 | 该重定位表所作用的节在节头表中的下标 |
| SHT_RELA    | 该节所使用的**相应符号表**在节头表中的下标 | 该重定位表所作用的节在节头表中的下标 |
| SHT_SYMTAB  | 操作系统相关                  | 操作系统相关             |
| SHT_DYNSYM  | 操作系统相关                  | 操作系统相关             |
| other       | SHN_UNDEF               | 0                  |



## ⏬ Basic Sections/ Segments
![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329140611.png)


### Linking View: Sections
The first entry in the section header table of every ELF file is defined by the ELF standard to be a NULL entry. The type of the entry is `SHT_NULL`, and all fields in the section header are zeroed out.

> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

Division of segments / sections:
- Text Segment
    - `.text`
    - `.rodata`
    - `.hash`
    - `.dynsym`
    - `.dynstr`
    - `.plt`
    - `.rel.got`
- Data segment
    - `.data`
    - `.dynamic`
    - `.got.plt`
    - `.bss`

> 🔗 https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
#### 👉 `.text` Section ✅
`.text`节是保存了程序代码指令的**代码节**。**一段可执行程序，如果存在Phdr，则`.text`节就会存在于`text`段中**。由于`.text`节保存了程序代码，所以节类型为`SHT_PROGBITS`。
#### 👉 `.rodata` Section

`rodata`节保存了只读的数据，如一行C语言代码中的字符串。由于`.rodata`节是只读的，所以只能存在于一个可执行文件的**只读段**中。因此，只能在`text`段（不是`data`段）中找到`.rodata`节。由于`.rodata`节是只读的，所以节类型为`SHT_PROGBITS`。
#### 👉 `.data` Section ✅
`.data`节存在于`data`段中，**其保存了初始化的全局变量等数据**。由于`.data`节保存了程序的变量数据，所以节类型为`SHT_PROGBITS`。
#### 👉 `.bss` Section (Block Started by Symbol) ✅
`.bss`节存在于`data`段中，占用空间不超过4字节，仅表示这个节本省的空间。**`.bss`节保存了未进行初始化的全局数据**。程序加载时数据被初始化为0，在程序执行期间可以进行赋值。由于`.bss`节未保存实际的数据，所以节类型为`SHT_NOBITS`。
##### BSS Etymology
Dennis Ritchie says:

> Actually the acronym (in the sense we took it up; it may have other credible etymologies) is "Block Started by Symbol." It was a pseudo-op in FAP (Fortran Assembly [-er?] Program), an assembler for the IBM 704-709-7090-7094 machines.  It defined its label and set aside space for a given number of words.  There was another pseudo-op, BES, "Block Ended by Symbol" that did the same except that the label was defined by the last assigned word + 1.  (On these machines Fortran arrays were stored backwards in storage and were 1-origin.)
> 
> The usage is reasonably appropriate, because just as with standard Unix loaders, the space assigned didn't have to be punched literally into the object deck but was represented by a count somewhere.

[ What does {some strange unix command name} stand for?]: http://www.faqs.org/faqs/unix-faq/faq/part1/section-3.html
#### 👉 `.plt` Section (Procedure Linkage Table)
`.plt`节也称为**过程链接表（Procedure Linkage Table）**，**其包含了动态链接器调用从共享库导入的函数所必需的相关代码**。由于`.plt`节保存了代码，所以节类型为`SHT_PROGBITS`。
#### 👉 `.got.plt` Section (Global Offset Table)
`.got`节保存了**全局偏移表**。**`.got`节和`.plt`节一起提供了对导入的共享库函数的访问入口，由动态链接器在运行时进行修改**。由于`.got.plt`节与程序执行有关，所以节类型为`SHT_PROGBITS`。
#### 👉 `.hash` Section (`.gnu.hash`)
`.hash`节也称为`.gnu.hash`，其保存了一个用于查找符号的散列表。
#### 👉 Symbol Tables ( `.symtab` & `.dynsym` ) ✅
> `.symtab`节是一个`ElfN_Sym`的数组，保存了符号信息。节类型为`SHT_SYMTAB`。
> `.dynsym`节保存在`text`段中。**其保存了从共享库导入的动态符号表**。节类型为`SHT_DYNSYM`。

> 🔗 https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

`.dynsym`节和`.symtab`节两者都是符号表，那么它们到底有什么区别呢？存在什么关系呢？

**符号是对某些类型的数据或代码（如全局变量或函数）的符号引用，函数名或变量名就是符号名**。例如，`printf()`函数会在动态链接符号表`.dynsym`中存有一个指向该函数的符号项（以`Elf_Sym`数据结构表示）。在大多数共享库和动态链接可执行文件中，存在两个符号表。即`.dynsym`和`.symtab`。

**`.dynsym`保存了引用来自外部文件符号的全局符号**。如`printf`库函数。**`.dynsym`保存的符号是`.symtab`所保存符合的子集，`.symtab`中还保存了可执行文件的本地符号**。如全局变量，代码中定义的本地函数等。

既然`.dynsym`是`.symtab`的子集，那为何要同时存在两个符号表呢？

通过`readelf -S`命令可以查看可执行文件的输出，一部分节标志位（`sh_flags`）被标记为了**A（ALLOC）、WA（WRITE/ALLOC）、AX（ALLOC/EXEC）**。其中，`.dynsym`被标记为ALLOC，而`.symtab`则没有标记。

ALLOC表示有该标记的节会在运行时分配并装载进入内存，而`.symtab`不是在运行时必需的，因此不会被装载到内存中。**`.dynsym`保存的符号只能在运行时被解析，因此是运行时动态链接器所需的唯一符号**。`.dynsym`对于动态链接可执行文件的执行是必需的，而`.symtab`只是用来进行调试和链接的。

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329113408.png)
<small><a>https://blog.csdn.net/jinking01/article/details/105387253?fromshare=blogdetail&sharetype=blogdetail&sharerId=105387253&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link</a></small>

上图所示为通过符号表索引字符串表的示意图。符号表中的每一项都是一个`Elf_Sym`结构，对应可以在字符串表中索引得到一个字符串。该数据结构中成员的含义如下表所示：

| 成员       | 含义                          |
| -------- | --------------------------- |
| st_name  | 符号名。该值为该符号名在字符串表中的偏移地址。     |
| st_value | 符号对应的值。存放符号的值（可能是地址或位置偏移量）。 |
| st_size  | 符号的大小。                      |
| st_other | 0                           |
| st_shndx | 符号所在的节                      |
| st_info  | 符号类型及绑定属性                   |


使用readelf工具我们也能够看到符号表的相关信息。

|                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | $ readelf -s hello.o<br><br>Symbol table '.symtab' contains 11 entries:<br>   Num:    Value          Size Type    Bind   Vis      Ndx Name<br>     0: 0000000000000000     0 NOTYPE  LOCAL  DEFAULT  UND<br>     1: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS hello.c<br>     2: 0000000000000000     0 SECTION LOCAL  DEFAULT    1<br>     3: 0000000000000000     0 SECTION LOCAL  DEFAULT    3<br>     4: 0000000000000000     0 SECTION LOCAL  DEFAULT    4<br>     5: 0000000000000000     0 SECTION LOCAL  DEFAULT    5<br>     6: 0000000000000000     0 SECTION LOCAL  DEFAULT    7<br>     7: 0000000000000000     0 SECTION LOCAL  DEFAULT    8<br>     8: 0000000000000000     0 SECTION LOCAL  DEFAULT    6<br>     9: 0000000000000000    21 FUNC    GLOBAL DEFAULT    1 main<br>    10: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT  UND puts |

> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

Symbols are a symbolic reference to some type of data or code such as a global variable or function.

32-bit struct:

```
typedef struct
{
  Elf32_Word	st_name;		/* Symbol name (string tbl index) */
  Elf32_Addr	st_value;		/* Symbol value */
  Elf32_Word	st_size;		/* Symbol size */
  unsigned char	st_info;		/* Symbol type and binding */
  unsigned char	st_other;		/* Symbol visibility */
  Elf32_Section	st_shndx;		/* Section index */
} Elf32_Sym;
```

64-bit struct:

```
typedef struct
{
  Elf64_Word	st_name;		/* Symbol name (string tbl index) */
  unsigned char	st_info;		/* Symbol type and binding */
  unsigned char st_other;		/* Symbol visibility */
  Elf64_Section	st_shndx;		/* Section index */
  Elf64_Addr	st_value;		/* Symbol value */
  Elf64_Xword	st_size;		/* Symbol size */
} Elf64_Sym;
```

Values:
- `st_name`: Symbol name.
- `st_info`: Symbol type and binding. It is calculated using macros.
- `st_other`: Symbol visibility.
    - `STV_DEFAULT`: For default visibility symbols, its attribute is specified by the symbol’s binding type.
    - `STV_PROTECTED`: Symbol is visible by other objects, but cannot be preempted.
    - `STV_HIDDEN`: Symbol is not visible to other objects.
    - `STV_INTERNAL`: Symbol visibility is reserved.
- `st_shndx`: Section index.
- `st_value`: Symbol value.
- `st_size`: Symbol size.

st_info Values:
- `st_bind`: Symbol binding.
    - `STB_LOCAL`: Local symbols are not visible outside the object file containing their definition, such as a function declared static.
    - `STB_GLOBAL`: Global symbols are visible to all object files being combined.
    - `STB_WEAK`: Similar to global binding, but with less precedence, meaning that the binding is weak and may be overridden by another symbol (with the same name) that is not marked as `STB_WEAK`.
- `st_type`: Symbol type.
    - `STT_NOTYPE`: The symbols type is undefined.
    - `STT_FUNC`: The symbol is associated with a function or other executable code.
    - `STT_OBJECT`: The symbol is associated with a data object.
    - `STT_SECTION`: The symbol is a section.

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329140240.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>

#### 👉 String Tables (`.strtab` & `.dynstr` & `.shstrtab`)
> `.strtab`节保存的是符号字符串表，表中的内容会被`.symtab`的`ElfN_Sym`结构中的`st_name`引用。节类型为`SHT_STRTAB`。

类似于符号表，在大多数共享库和动态链接可执行文件中，也存在两个字符串表。即`.dynstr`和`.strtab`，分别对应于`.dynsym`和`symtab`。此外，还有一个`.shstrtab`的节头字符串表，用于保存节头表中用到的字符串，可通过`sh_name`进行索引。

ELF文件中所有字符表的结构基本一致，如上图所示。
#### 👉 Reallocate Table (`.rel`)
`.rel.dyn`: Global variable relocation table.
`.rel.plt`: Function relocation table.

> 重定位表保存了重定位相关的信息，**这些信息描述了如何在链接或运行时，对ELF目标文件的某部分或者进程镜像进行补充或修改**。由于重定位表保存了重定位相关的数据，所以节类型为`SHT_REL`。

**重定位就是将符号定义和符号引用进行连接的过程**。可重定位文件需要包含描述如何修改节内容的相关信息，从而使可执行文件和共享目标文件能够保存进程的程序镜像所需要的正确信息。

重定位表是进行重定位的重要依据。我们可以使用objdump工具查看目标文件的重定位表：

|   |   |
|---|---|
|1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14|$ objdump -r hello.o<br><br><br>hello.o:     file format elf64-x86-64<br><br>RELOCATION RECORDS FOR [.text]:<br>OFFSET           TYPE              VALUE<br>0000000000000005 R_X86_64_32       .rodata<br>000000000000000a R_X86_64_PC32     puts-0x0000000000000004<br><br><br>RELOCATION RECORDS FOR [.eh_frame]:<br>OFFSET           TYPE              VALUE<br>0000000000000020 R_X86_64_PC32     .text|

重定位表是一个`Elf_Rel`类型的数组结构，每一项对应一个需要进行重定位的项。  
其成员含义如下表所示：

|成员|含义|
|---|---|
|r_offset|重定位入口的偏移。|
||对于**可重定位文件**来说，这个值是该重定位入口所要修正的位置的第一个字节相对于节起始的偏移|
||对于**可执行文件或共享对象文件**来说，这个值是该重定位入口所要修正的位置的第一个字节的虚拟地址|
|r_info|重定位入口的类型和符号|
||因为不同处理器的指令系统不一样，所以重定位所要修正的指令地址格式也不一样。每种处理器都有自己的一套重定位入口的类型。|
||对于**可执行文件和共享目标文件**来说，它们的重定位入口是动态链接类型的。|

重定位是目标文件链接成为可执行文件的关键。我们将在后面的进行介绍。
#### 👉 `.init`, `.fini` & `.init_array`, `.fini_array`
> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

- `.init`: Executable code that performs initialization tasks and needs to run before any other code in the binary is executed (Then it has `SHF_EXECINSTR` flag) The system executes the code in the .init section before transferring control to the main entry point of the binary.
- `.fini`: The contrary as `.init`, it has executable code that must run after the main program completes.
- - `.init_array`: Contains an array of pointers to functions to use as constructors (each of these functions is called in turn when the binary is initialized). In `gcc` , you can mark functions in your C source files as constructors by decorating them with `__attribute__((constructor)`. By default, there is an entry in `.init_array` for executing `frame_dummy`.
- `.fini_array`: Contains an array of pointers to functions to use as destructors.
##### `.ctors` & `.dtors`
- `.ctors`: Equivalent of `.init_array` produced by older versions of `gcc`.
- `.dtors`: Equivalent of `.fini_array` produced by older versions of `gcc`.

`.ctors`（**构造器**）节和`.dtors`（**析构器**）节分别保存了指向构造函数和析构函数的函数指针，**构造函数是在main函数执行之前需要执行的代码；析构函数是在main函数之后需要执行的代码**。


### Execution View: Segments
![](../../../../../../../../../Assets/Pics/Screenshot%202025-03-29%20at%2013.20.41.png)
<small><a>https://www.cs.cmu.edu/afs/cs/academic/class/15213-f00/docs/elf.pdf</a></small>

![](../../../../../../../../../Assets/Pics/Screenshot%202025-03-29%20at%2013.23.17.png)
<small><a>https://www.cs.cmu.edu/afs/cs/academic/class/15213-f00/docs/elf.pdf</a></small>

> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

Division of segments / sections:
- Text Segment
    - `.text`
    - `.rodata`
    - `.hash`
    - `.dynsym`
    - `.dynstr`
    - `.plt`
    - `.rel.got`
- Data segment
    - `.data`
    - `.dynamic`
    - `.got.plt`
    - `.bss`



## ⏬ Compiler Specific Sections/ Segments
![](../../../../../../../../../../../Assets/Pics/Screenshot%202023-10-16%20at%208.24.47PM.png)


### .note.GNU-stack



## ⏬ User Customized Sections/ Segments



## ELF File in Linking & Loading
> ↗ [Program Linking & Loading (Link-time & Load-time)](../../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚽%20Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time)/Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time).md)
> ↗ [ELF File Static Linking](../../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚽%20Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time)/Program%20Static%20Linking%20Procedure/ELF%20File%20Static%20Linking.md)
> ↗ [ELF File Dynamic Linking & Loading](../../../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚽%20Program%20Linking%20&%20Loading%20(Link-time%20&%20Load-time)/Program%20Dynamic%20Linking%20&%20Loading%20Procedure/ELF%20File%20Dynamic%20Linking%20&%20Loading.md)


### Dynamic 
> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

32-bit struct:

```
typedef struct
{
  Elf32_Sword	d_tag;			/* Dynamic entry type */
  union
    {
      Elf32_Word d_val;			/* Integer value */
      Elf32_Addr d_ptr;			/* Address value */
    } d_un;
} Elf32_Dyn;
```

64-bit struct:

```
typedef struct
{
  Elf64_Sxword	d_tag;			/* Dynamic entry type */
  union
    {
      Elf64_Xword d_val;		/* Integer value */
      Elf64_Addr d_ptr;			/* Address value */
    } d_un;
} Elf64_Dyn;
```

Values:

- `d_tag`: Contains a tag.
    - `DT_NEEDED`: Holds the string table offset to the name of a needed shared library.
    - `DT_SYMTAB`: Contains the address of the dynamic symbol table also known by its section name `.dynsym`.
    - `DT_HASH`: Holds the address of the symbol hash table, also known by it's section name `.hash` (or sometimes named `.gnu.hash`).
    - `DT_STRTAB`: Holds the address of the symbol string table, also known by its section name `.dynstr`.
    - `DT_PLTGOT`: Holds the address of the global offset table.
- `d_val`: Holds an integer value that has various interpretations such as being the size of a relocation entry to give one instance.
- `d_ptr`: Holds a virtual memory address that can point to various locations needed by the linker; a good example would be the address to the symbol table for the d_tag `DT_SYMTAB`.

---- type defines ----

d_tag defines:

```
#define DT_NULL		0		/* Marks end of dynamic section */
#define DT_NEEDED	1		/* Name of needed library */
#define DT_PLTRELSZ	2		/* Size in bytes of PLT relocs */
#define DT_PLTGOT	3		/* Processor defined value */
#define DT_HASH		4		/* Address of symbol hash table */
#define DT_STRTAB	5		/* Address of string table */
#define DT_SYMTAB	6		/* Address of symbol table */
#define DT_RELA		7		/* Address of Rela relocs */
#define DT_RELASZ	8		/* Total size of Rela relocs */
#define DT_RELAENT	9		/* Size of one Rela reloc */
#define DT_STRSZ	10		/* Size of string table */
#define DT_SYMENT	11		/* Size of one symbol table entry */
#define DT_INIT		12		/* Address of init function */
#define DT_FINI		13		/* Address of termination function */
#define DT_SONAME	14		/* Name of shared object */
#define DT_RPATH	15		/* Library search path (deprecated) */
#define DT_SYMBOLIC	16		/* Start symbol search here */
#define DT_REL		17		/* Address of Rel relocs */
#define DT_RELSZ	18		/* Total size of Rel relocs */
#define DT_RELENT	19		/* Size of one Rel reloc */
#define DT_PLTREL	20		/* Type of reloc in PLT */
#define DT_DEBUG	21		/* For debugging; unspecified */
#define DT_TEXTREL	22		/* Reloc might modify .text */
#define DT_JMPREL	23		/* Address of PLT relocs */
#define	DT_BIND_NOW	24		/* Process relocations of object */
#define	DT_INIT_ARRAY	25		/* Array with addresses of init fct */
#define	DT_FINI_ARRAY	26		/* Array with addresses of fini fct */
#define	DT_INIT_ARRAYSZ	27		/* Size in bytes of DT_INIT_ARRAY */
#define	DT_FINI_ARRAYSZ	28		/* Size in bytes of DT_FINI_ARRAY */
#define DT_RUNPATH	29		/* Library search path */
#define DT_FLAGS	30		/* Flags for the object being loaded */
#define DT_ENCODING	32		/* Start of encoded range */
#define DT_PREINIT_ARRAY 32		/* Array with addresses of preinit fct*/
#define DT_PREINIT_ARRAYSZ 33		/* size in bytes of DT_PREINIT_ARRAY */
#define DT_SYMTAB_SHNDX	34		/* Address of SYMTAB_SHNDX section */
#define	DT_NUM		35		/* Number used */
#define DT_LOOS		0x6000000d	/* Start of OS-specific */
#define DT_HIOS		0x6ffff000	/* End of OS-specific */
#define DT_LOPROC	0x70000000	/* Start of processor-specific */
#define DT_HIPROC	0x7fffffff	/* End of processor-specific */
#define	DT_PROCNUM	DT_MIPS_NUM	/* Most used by any processor */
```


### Relocation
> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

==Relocation is the process of connecting symbolic references with symbolic definitions. ==Relocatable files must have information that describes how to modify their section contents, thus allowing executable and shared object files to hold the right information for a process's program image. Relocation entries are these data.

Rel 32-bit struct:

```
typedef struct
{
  Elf32_Addr	r_offset;		/* Address */
  Elf32_Word	r_info;			/* Relocation type and symbol index */
} Elf32_Rel;
```

Rel 64-bit struct:

```
typedef struct
{
  Elf64_Addr	r_offset;		/* Address */
  Elf64_Xword	r_info;			/* Relocation type and symbol index */
} Elf64_Rel;
```

Rela 32-bit struct:

```
typedef struct
{
  Elf32_Addr	r_offset;		/* Address */
  Elf32_Word	r_info;			/* Relocation type and symbol index */
  Elf32_Sword	r_addend;		/* Addend */
} Elf32_Rela;
```

Rela 64-bit struct:

```
typedef struct
{
  Elf64_Addr	r_offset;		/* Address */
  Elf64_Xword	r_info;			/* Relocation type and symbol index */
  Elf64_Sxword	r_addend;		/* Addend */
} Elf64_Rela;
```

Values:
- `r_offset`: Points to the location that requires the relocation action.
    - For `ET_REL` type binaries, this value denotes an offset within a section header. in which the relocations have to take place.
    - For `ET_EXEC` type binaries, this value denotes a virtual address affected by a relocation.
- `r_info`: Gives both the symbol table index with respect to which the relocation must be made and the type of relocation to apply.
- `r_addend`: Specifies a constant addend used to compute the value stored in the relocatable field.

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020250329183514.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>

Sections:
- `.rel.bss`: Contains all the `R_386_COPY` relocs.
- `.rel.plt`: Contains all the `R_386_JMP_SLOT` relocs these modify the first half of the GOT elements.
- `.rel.got`: Contains all the `R_386_GLOB_DATA` relocs these modify the second half of the GOT elements.
- `.rel.data`: Contains all the `R_386_32` and `R_386_RELATIVE` relocs.
- `.rela.dyn`: Contains dynamic relocations for variables.
- `.rela.plt`: Contains dynamic relocations for functions.



## Ref

