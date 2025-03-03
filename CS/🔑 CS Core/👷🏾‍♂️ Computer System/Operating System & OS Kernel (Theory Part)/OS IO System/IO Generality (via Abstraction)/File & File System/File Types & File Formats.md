# File Types & File Formats

[TOC]



## Res
### Related Topics


### Learning Resources
【什么是可执行文件 (调试信息；Stack Unwinding；静态链接中的重定位) [南京大学2022操作系统-P16]】 https://www.bilibili.com/video/BV15F411G7Ti/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## 🎯 Text File (Read, Write) (Data Level)
### 📌 Text File Formats (文本文件格式)
↗ [Encodings](../../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/Encodings.md)
↗ [DSL(Domain Specific Languages) & GPL(General Purpose Languages)](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages).md)
↗ [Linux File Types & Formats](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/Linux%20File%20Types%20&%20Formats.md)



## 🎯 Binary File (Executable) (Instruction Level)
### 📌 Executable File Formats (可执行文件格式) ⭐
> 🔗 https://en.wikipedia.org/wiki/Object_file

Most object file formats are structured as separate sections of data, each section containing a certain type of data. These sections are known as "segments" due to the term "memory segment", which was previously a common form of memory management. When a program is loaded into memory by a loader, the loader allocates various regions of memory to the program. Some of these regions correspond to sections of the object file, and thus are usually known by the same names. Others, such as the stack, only exist at run time. In some cases, relocation is done by the loader (or linker) to specify the actual memory addresses. However, for many programs or architectures, relocation is not necessary, due to being handled by the memory management unit or by position-independent code. On some systems the segments of the object file can then be copied (paged) into memory and executed, without needing further processing. On these systems, this may be done lazily, that is, only when the segments are referenced during execution, for example via a memory-mapped file backed by the object file.

Types of data supported by typical object file formats: 
- **Header** (descriptive and control information)
- **Code segment** ("text segment", executable code)
- **Data segment** (initialized static variables)
- **Read-only data segment** (rodata, initialized static constants)
- **BSS segment** (uninitialized static data, both variables and constants)
- External definitions and references for linking
- Relocation information
- Dynamic linking information
- Debugging information
- Segments in different object files may be combined by the linker according to rules specified when the segments are defined. Conventions exist for segments shared between object files; for instance, in DOS there are different memory models that specify the names of special segments and whether or not they may be combined.

The debugging data format of debugging information may either be an integral part of the object file format, as in COFF, or a semi-independent format which may be used with several object formats, such as stabs or DWARF.
#### COFF (Common File Format)

#### PE (Portable Executable) (PE-COFF)
↗ [Windows PE (Portable Executable) File](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20File%20System/Windows%20PE%20(Portable%20Executable)%20File/Windows%20PE%20(Portable%20Executable)%20File.md)
↗ [Window File Types & Formats](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20File%20System/Window%20File%20Types%20&%20Formats.md)
#### ELF (Executable Linkable Format)
↗ [ELF (Executable and Linkable Format)](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/ELF%20(Executable%20and%20Linkable%20Format)/ELF%20(Executable%20and%20Linkable%20Format).md)
↗ [Linux File Types & Formats](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/Linux%20File%20Types%20&%20Formats.md)
#### OMF (Object Module Format)
#### Mach-O Universal Binary
↗ [Mach-O Universal Binary](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20IO%20&%20Files%20Management/macOS%20File%20System/macOS%20File%20Types%20&%20Formats/Mach-O%20Universal%20Binary.md)


### 👉 Executable Object Files (可执行目标文件)
#### `.exe` (Executable)

#### `.out`

#### `.COM`


### 👉 Dynamic Link Files (动态链接文件)
#### `.dll` (DLL, Dynamic Link Library)
#### `.so` (DSO, Dynamic Shared Objects)
#### `.s`


### 👉 Static Link Files (静态链接文件)
#### `.lib` (SLL, Static Link Library)
#### `.a`



## Ref
[Object file | Wikipedia]: https://en.wikipedia.org/wiki/Object_file
[Executables | wikipedia]: https://en.wikipedia.org/wiki/Executable
