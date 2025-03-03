# First-Stage Boot Loader (System Firmware)

[TOC]



## Res
### Related Topics
↗ [UEFI BIOS](📌%20UEFI%20BIOS/UEFI%20BIOS.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Booting#Modern_boot_loaders

Boot loaders may face peculiar constraints, especially in size; for instance, on the IBM PC and compatibles, the boot code must fit in the [Master Boot Record](https://en.wikipedia.org/wiki/Master_Boot_Record "Master Boot Record") (MBR) and the [Partition Boot Record](https://en.wikipedia.org/wiki/Partition_Boot_Record "Partition Boot Record") (PBR), which in turn are limited to a single sector; on the [IBM System/360](https://en.wikipedia.org/wiki/IBM_System/360 "IBM System/360"), the size is limited by the IPL medium, e.g., [card](https://en.wikipedia.org/wiki/Punched_card "Punched card") size, track size.

On systems with those constraints, the first program loaded into RAM may not be sufficiently large to load the operating system and, instead, must load another, larger program. The first program loaded into RAM is called a first-stage boot loader, and the program it loads is called a second-stage boot loader.

Examples of first-stage (Hardware initialization stage) bootloaders include [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS"), [UEFI](https://en.wikipedia.org/wiki/UEFI "UEFI"), [coreboot](https://en.wikipedia.org/wiki/Coreboot "Coreboot"), [Libreboot](https://en.wikipedia.org/wiki/Libreboot "Libreboot") and [Das U-Boot](https://en.wikipedia.org/wiki/Das_U-Boot "Das U-Boot"). On the IBM PC, the boot loader in the [Master Boot Record](https://en.wikipedia.org/wiki/Master_Boot_Record "Master Boot Record") (MBR) and the [Partition Boot Record](https://en.wikipedia.org/wiki/Partition_Boot_Record "Partition Boot Record") (PBR) was coded to require at least 32 KB (later expanded to 64 KB of system memory and only use instructions supported by the original [8088](https://en.wikipedia.org/wiki/8088 "8088")/[8086](https://en.wikipedia.org/wiki/8086 "8086") processors.



## Ref

