# Second-Stage Boot Loader & Boot Manager

[TOC]



## Res
### Related Topics




## Intro
> 🔗 https://en.wikipedia.org/wiki/Booting#Second-stage_boot_loaders

Second-stage (OS initialization stage) boot loaders, such as shim, GNU GRUB, rEFInd, BOOTMGR, Syslinux, NTLDR and iBoot, are not themselves operating systems, but are able to load an operating system properly and transfer execution to it; the operating system subsequently initializes itself and may load extra device drivers. The second-stage boot loader does not need drivers for its own operation, but may instead use generic storage access methods provided by system firmware such as the BIOS, UEFI or Open Firmware, though typically with restricted hardware functionality and lower performance.

Many boot loaders (like GNU GRUB, rEFInd, Windows's BOOTMGR, Syslinux, and Windows NT/2000/XP's NTLDR) can be configured to give the user **multiple booting choices**. These choices can include different operating systems (for dual or multi-booting from different partitions or drives), different versions of the same operating system (in case a new version has unexpected problems), different operating system loading options (e.g., booting into a rescue or safe mode), and some standalone programs that can function without an operating system, such as memory testers (e.g., memtest86+), a basic shell (as in GNU GRUB), or even games (see 🔗 [List of PC Booter games](https://en.wikipedia.org/wiki/List_of_PC_Booter_games)). Some boot loaders can also load other boot loaders; for example, GRUB loads BOOTMGR instead of loading Windows directly. Usually a default choice is preselected with a time delay during which a user can press a key to change the choice; after this delay, the default choice is automatically run so normal booting can occur without interaction.

**The boot process can be considered complete when the computer is ready to interact with the user, or the operating system is capable of running system programs or application programs.**



## Ref

