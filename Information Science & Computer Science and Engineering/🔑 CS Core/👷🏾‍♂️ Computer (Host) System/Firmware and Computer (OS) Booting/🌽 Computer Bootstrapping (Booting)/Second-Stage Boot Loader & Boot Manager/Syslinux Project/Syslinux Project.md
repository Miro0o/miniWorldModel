# Syslinux Project

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [File Systems Implementations](../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/🎯%20File%20Systems%20Implementations/File%20Systems%20Implementations.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/SYSLINUX

The Syslinux Project consists of five different boot loaders:
- The eponymous **`SYSLINUX`**, used for booting from the ↗ [FAT (File Allocation Table) & exFAT](../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/🎯%20File%20Systems%20Implementations/Disk%20and%20Non-rotating%20File%20Systems/Flash%20Memory%20&%20SSD%20File%20Systems/FAT%20(File%20Allocation%20Table)%20&%20exFAT/FAT%20(File%20Allocation%20Table)%20&%20exFAT.md) filesystem
- **`ISOLINUX`**, used for booting from the ↗ [IOS 9660](../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/🎯%20File%20Systems%20Implementations/Disk%20and%20Non-rotating%20File%20Systems/Optic%20Disk%20File%20Systems/IOS%209660.md) filesystem
- **`PXELINUX`**, used for booting from a network server using the ↗ [PXE (Preboot Execution Environment)](../🛰️%20Network%20Booting/PXE%20(Preboot%20Execution%20Environment)/PXE%20(Preboot%20Execution%20Environment).md) system
- **`EXTLINUX`**, used for booting from Btrfs, ext2, ext3, ext4, FAT, NTFS, UFS/UFS2, and XFS filesystems
- **`MEMDISK`**, emulates a RAM disk for older operating systems like ↗ [MS-DOS](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/MS-DOS/MS-DOS.md)

The project also includes two separate menu systems and a development environment for additional modules.



## Ref
[🤔 Syslinux | Arch Linux Wiki]: https://wiki.archlinux.org/title/Syslinux#Installing_the_Syslinux_boot_loader
