# MacOS File System

[TOC]



## Res


## Intro

[macOS (formerly Mac OS X)](https://en.wikipedia.org/wiki/MacOS "MacOS") uses the [Apple File System](https://en.wikipedia.org/wiki/Apple_File_System "Apple File System") (APFS), which in 2017 replaced a file system inherited from classic Mac OS called [HFS Plus](https://en.wikipedia.org/wiki/HFS_Plus "HFS Plus") (HFS+). Apple also uses the term "Mac OS Extended" for HFS+. HFS Plus is a metadata-rich and [case-preserving](https://en.wikipedia.org/wiki/Case_preservation "Case preservation") but (usually) [case-insensitive](https://en.wikipedia.org/wiki/Case_sensitivity "Case sensitivity") file system. Due to the Unix roots of macOS, Unix permissions were added to HFS Plus. Later versions of HFS Plus added journaling to prevent corruption of the file system structure and introduced a number of optimizations to the allocation algorithms in an attempt to defragment files automatically without requiring an external defragmenter.

#### macOS Support For Other File Systems
macOS also supported the [UFS](https://en.wikipedia.org/wiki/Unix_File_System "Unix File System") file system, derived from the [BSD](https://en.wikipedia.org/wiki/BSD "BSD") Unix Fast File System via [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP "NeXTSTEP"). However, as of [Mac OS X Leopard](https://en.wikipedia.org/wiki/Mac_OS_X_Leopard "Mac OS X Leopard"), macOS could no longer be installed on a UFS volume, nor can a pre-Leopard system installed on a UFS volume be upgraded to Leopard. As of [Mac OS X Lion](https://en.wikipedia.org/wiki/Mac_OS_X_Lion "Mac OS X Lion") UFS support was completely dropped.

Newer versions of macOS are capable of reading and writing to the legacy [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table "File Allocation Table") file systems (16 and 32) common on Windows. They are also capable of _reading_ the newer [NTFS](https://en.wikipedia.org/wiki/NTFS "NTFS") file systems for Windows. In order to _write_ to NTFS file systems on macOS versions prior to [Mac OS X Snow Leopard](https://en.wikipedia.org/wiki/Mac_OS_X_Snow_Leopard "Mac OS X Snow Leopard") third party software is necessary. Mac OS X 10.6 (Snow Leopard) and later allow writing to NTFS file systems, but only after a non-trivial system setting change (third party software exists that automates this).

Finally, macOS supports reading and writing of the [exFAT](https://en.wikipedia.org/wiki/ExFAT "ExFAT") file system since Mac OS X Snow Leopard, starting from version 10.6.5




## Ref

