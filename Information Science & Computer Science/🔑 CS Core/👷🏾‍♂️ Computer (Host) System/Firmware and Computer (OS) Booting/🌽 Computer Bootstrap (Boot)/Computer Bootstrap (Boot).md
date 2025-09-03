# Computer Bootstrap (Boot)

[TOC]



## Res
### Related Topics
↗ [ASM (Assembly Languages)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
↗ [C & CPP](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)
↗ [Operating System Kernel (Kernel Mode)](../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
↗ [Program Compilation & Execution](../../../🛣️%20Program%20Compilation%20&%20Execution/Program%20Compilation%20&%20Execution.md)
↗ [Memory Access & Addressing](../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

↗ [TPM & TSS](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/Other%20Security%20Aspects%20(Other%20Countermeasures)/Trusted%20Computing%20(TC)/TPM%20&%20TSS/TPM%20&%20TSS.md)
↗ [TPM](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/Other%20Security%20Aspects%20(Other%20Countermeasures)/Trusted%20Computing%20(TC)/TPM%20&%20TSS/TPM%20Project/TPM.md)

↗ [Linux Kernel Booting Process](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20Kernel%20Booting%20Process.md)
↗ [Android Starting Process](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Android%20&%20AOSP/Android%20Starting%20Process.md)


### Learning Resources
🔥 👍 从裸机启动开始运行一个C++程序
http://t.csdnimg.cn/fpEXy
于是在经过了一系列研究和实验之后，笔者决定起笔这一个系列的文章。在这个系列文章中将会介绍：
- x86体系的结构和启动过程
- 如何编写一个简单的MBR(Master Boot Record)，然后进入内核程序
- 如何从用C/C++来生成内核程序（包括编译、链接、转载的方法）
- 站在内核的角度看到的内存结构是怎样的
- C/C++程序的内存分布是怎样的，各部分加载到内存中的形态是怎样的
- C代码和C++代码编译方式的异同

📄 👍 https://foxsen.github.io/archbase/计算机启动过程分析.html
《计算机体系结构基础》 - 计算机启动过程分析

无论采用何种指令系统的处理器，复位后的第一条指令都会从一个预先定义的特定地址取回。处理器的执行就从这条指令开始。处理器的启动过程，实际上就是一个特定程序的执行过程。这个程序我们称之为固件，又称为BIOS（Basic Input Output System，基本输入输出系统）。对于LoongArch，处理器复位后的第一条指令将固定从地址0x1C000000的位置获取。这个地址需要对应一个能够给处理器核提供指令的设备，这个设备以前是各种ROM，现在通常是闪存（Flash）。从获取第一条指令开始，计算机系统的启动过程也就开始了。

为了使计算机达到一个最终可控和可用的状态，在启动过程中，需要对包括处理器核、内存、外设等在内的各个部分分别进行初始化，再对必要的外设进行驱动管理。本章的后续内容将对这些具体工作进行讨论。

👍 📖 https://0xax.gitbooks.io/linux-insides/content/Booting/
Linux booting process
Explain linux by its source codes!



## Intro
先插一句话，现在很多人用UEFI BIOS这个称呼。这里为了区分：
- BIOS一律指传统BIOS，(Legacy BIOS)
- UEFI BIOS一律称呼为UEFI。
- UEFI下的BIOS设置，一律称为UEFI设置。


### Booting
> 🔗 https://en.wikipedia.org/wiki/Booting

In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), **booting** is the process of starting a [computer](https://en.wikipedia.org/wiki/Computer "Computer") as initiated via [hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware") such as a button or by a [software](https://en.wikipedia.org/wiki/Software "Software") command. After it is switched on, a computer's [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPU) has no software in its [main memory](https://en.wikipedia.org/wiki/Main_memory "Main memory"), so some process must load software into memory before it can be executed. This may be done by hardware or [firmware](https://en.wikipedia.org/wiki/Firmware "Firmware") in the CPU, or by a separate processor in the computer system.

**Boot** is short for **[_bootstrap_](https://en.wikipedia.org/wiki/Bootstrapping "Bootstrapping")** or **bootstrap load** and derives from the phrase _[to pull oneself up by one's bootstraps](https://en.wikipedia.org/wiki/Bootstrapping#Etymology "Bootstrapping")_. The usage calls attention to the requirement that, if most software is loaded onto a computer by other software already running on the computer, some mechanism must exist to load the initial software onto the computer. Early computers used a variety of ad-hoc methods to get a small program into memory to solve this problem. The invention of [read-only memory](https://en.wikipedia.org/wiki/Read-only_memory "Read-only memory") (ROM) of various types solved this paradox by allowing computers to be shipped with a start up program that could not be erased. Growth in the capacity of ROM has allowed ever more elaborate start up procedures to be implemented.

↗ [Legacy BIOS (Basic IO System)](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20Legacy%20BIOS%20(Basic%20IO%20System)/Legacy%20BIOS%20(Basic%20IO%20System).md) 
↗ [UEFI BIOS](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20UEFI%20BIOS/UEFI%20BIOS.md)


### Computer States


### Chain Loading


### Boot Devices



## POST (Power-On Self-Test)
> 🔗 https://en.wikipedia.org/wiki/Power-on_self-test

A power-on self-test (POST) is a process performed by firmware or software routines immediately after a computer or other digital electronic device is powered on.

The results of the POST may be displayed on a panel that is part of the device, output to an external device, or stored for future retrieval by a diagnostic tool. Since a self-test might detect that the system's usual human-readable display is non-functional, an indicator lamp or a speaker may be provided to show error codes as a sequence of flashes or beeps. In addition to running tests, the POST process may also set the initial state of the device from firmware.

In the case of a computer, the POST routines are part of a device's pre-boot sequence; if they complete successfully, the bootstrap loader code is invoked to load an operating system.



## Boot Sequence
### 🎯 BIOS Boot Sequence
↗ [Legacy BIOS (Basic IO System)](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20Legacy%20BIOS%20(Basic%20IO%20System)/Legacy%20BIOS%20(Basic%20IO%20System).md)


### 🎯 UEFI BIOS Boot Sequence
↗ [UEFI BIOS](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20UEFI%20BIOS/UEFI%20BIOS.md)


### 🎯 Other Boot Sequences



## ⭐️ Modern Boot Loader
> 🔗 https://en.wikipedia.org/wiki/Booting#Modern_boot_loaders

When a computer is turned off, its software‍—‌including operating systems, application code, and data‍—‌remains stored on [non-volatile memory](https://en.wikipedia.org/wiki/Non-volatile_memory "Non-volatile memory"). When the computer is powered on, it typically does not have an operating system or its loader in [random-access memory](https://en.wikipedia.org/wiki/Random-access_memory "Random-access memory") (RAM). The computer first executes a relatively small program stored in [read-only memory](https://en.wikipedia.org/wiki/Read-only_memory "Read-only memory") (ROM, and later [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM"), [NOR flash](https://en.wikipedia.org/wiki/NOR_flash "NOR flash")) along with some needed data, to initialize CPU and motherboard, to initialize [RAM](https://en.wikipedia.org/wiki/RAM "RAM") (especially on x86 systems), to access the nonvolatile device (usually [block device](https://en.wikipedia.org/wiki/Block_device "Block device"), e.g. NAND flash) or devices from which the operating system programs and data can be loaded into RAM.

The small program that starts this sequence is known as a **bootstrap loader**, **bootstrap** or **boot loader**. Often, **multiple-stage boot loaders** are used, during which several programs of increasing complexity load one after the other in a process of **[chain loading](https://en.wikipedia.org/wiki/Chain_loading "Chain loading")**.

Some earlier computer systems, upon receiving a boot signal from a human operator or a peripheral device, may load a very small number of fixed instructions into memory at a specific location, initialize at least one CPU, and then point the CPU to the instructions and start their execution. These instructions typically start an input operation from some peripheral device (which may be switch-selectable by the operator). Other systems may send hardware commands directly to peripheral devices or I/O controllers that cause an extremely simple input operation (such as "read sector zero of the system device into memory starting at location 1000") to be carried out, effectively loading a small number of boot loader instructions into memory; a completion signal from the I/O device may then be used to start execution of the instructions by the CPU.

Smaller computers often use less flexible but more automatic boot loader mechanisms to ensure that the computer starts quickly and with a predetermined software configuration. In many desktop computers, for example, the bootstrapping process begins with the CPU executing software contained in ROM (for example, the [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS") of an [IBM PC](https://en.wikipedia.org/wiki/IBM_PC "IBM PC")) at a predefined address (some CPUs, including the Intel [x86 series](https://en.wikipedia.org/wiki/Intel_8086 "Intel 8086") are designed to execute this software after reset without outside help). This software contains rudimentary functionality to search for devices eligible to participate in booting, and load a small program from a special section (most commonly the [boot sector](https://en.wikipedia.org/wiki/Boot_sector "Boot sector")) of the most promising device, typically starting at a fixed [entry point](https://en.wikipedia.org/wiki/Entry_point "Entry point")such as the start of the sector.

Boot loaders may face peculiar constraints, especially in size; for instance, on the IBM PC and compatibles, the boot code must fit in the [Master Boot Record](https://en.wikipedia.org/wiki/Master_Boot_Record "Master Boot Record") (MBR) and the [Partition Boot Record](https://en.wikipedia.org/wiki/Partition_Boot_Record "Partition Boot Record") (PBR), which in turn are limited to a single sector; on the [IBM System/360](https://en.wikipedia.org/wiki/IBM_System/360 "IBM System/360"), the size is limited by the IPL medium, e.g., [card](https://en.wikipedia.org/wiki/Punched_card "Punched card") size, track size.

On systems with those constraints, the first program loaded into RAM may not be sufficiently large to load the operating system and, instead, must load another, larger program. The first program loaded into RAM is called a first-stage boot loader, and the program it loads is called a second-stage boot loader.


### 1️⃣ First-Stage Boot Loader
↗ [First-Stage Boot Loader (System Firmware)](First-Stage%20Boot%20Loader%20(System%20Firmware)/First-Stage%20Boot%20Loader%20(System%20Firmware).md)


### 2️⃣ Second-Stage Boot Loader
↗ [Second-Stage Boot Loader & Boot Manager](Second-Stage%20Boot%20Loader%20&%20Boot%20Manager/Second-Stage%20Boot%20Loader%20&%20Boot%20Manager.md)


### 3️⃣ Network Booting
↗ [Network Booting](Second-Stage%20Boot%20Loader%20&%20Boot%20Manager/🛰️%20Network%20Booting/Network%20Booting.md)


### Embedded and Multi-stage Boot Loaders
Many embedded systems must boot immediately. For example, waiting a minute for a digital television or a GPS navigation device to start is generally unacceptable. Therefore, such devices have software systems in ROM or flash memory so the device can begin functioning immediately; little or no loading is necessary, because the loading can be precomputed and stored on the ROM when the device is made.

Large and complex systems may have boot procedures that proceed in multiple phases until finally the operating system and other programs are loaded and ready to execute. Because operating systems are designed as if they never start or stop, a boot loader might load the operating system, configure itself as a mere process within that system, and then irrevocably transfer control to the operating system. The boot loader then terminates normally as any other process would.



## Ref
[Booting | Wikipedia]: https://en.wikipedia.org/wiki/Booting

[👍 电脑基础知识普及：BIOS、EFI与UEFI详解！ - 知乎用户fB10GU的文章 - 知乎]: https://zhuanlan.zhihu.com/p/54108702

> [what is UEFI, and how is it different from BIOS?](https://www.howtogeek.com/56958/htg-explains-how-uefi-will-replace-the-bios/)
> both UEFI and BIOS are low-level software that starts when you boot your PC before booting your operating system, but UEFI is a more modern solution, supporting larger hard drives, faster boot times, more security features, and—conveniently—graphics and mouse cursors.
> The BIOS will soon be dead: Intel has announced [plans to completely replace it with UEFI](https://www.anandtech.com/show/12068/intel-to-remove-bios-support-from-uefi-by-2020) on all their [chipsets](https://www.pugetsystems.com/labs/articles/Z97-vs-H97---What-is-the-Difference-562/) by 2020.

[👍 计算机是如何启动的? | 阮一峰]: https://www.ruanyifeng.com/blog/2013/02/booting.html

计算机的整个(BIOS)启动过程分成四个阶段。
1. 第一阶段：BIOS
	1. 硬件自检
	2. 启动顺序
2. 第二阶段：主引导记录 (MBR)
	1. 主引导记录的结构
	2. 分区表
3. 第三阶段：硬盘启动
	1. 情况A：卷引导记录 (VBR)
	2. 情况B：扩展分区和逻辑分区 (EBR)
	3. 情况C：启动管理器
4. 第四阶段：操作系统
	1. 控制权转交给操作系统后，操作系统的内核首先被载入内存。
	2. 以Linux系统为例，先载入/boot目录下面的kernel。内核加载成功后，第一个运行的程序是/sbin/init。它根据配置文件（Debian系统是/etc/initab）产生init进程。这是Linux启动后的第一个进程，pid进程编号为1，其他进程都是它的后代。然后，init线程加载系统的各个模块，比如窗口程序和网络程序，直至执行/bin/login程序，跳出登录界面，等待用户输入用户名和密码。
5. 至此，全部启动过程完成。

[👍 计算机启动流程]: https://www.initroot.com/linuxintroduction/computerbootprocess.html
计算机的整个启动过程主要是按顺序执行三个独立存放的程序，分别是：  
1.存在ROM中的BIOS;  
2.存放在启动设备（通常就是磁盘）第一个扇区，也就是MBR（Master Boot Record，主引导记录）中的bootloader，常用的bootloader有grub和uboot;  
3.存放在磁盘中的linux操作系统内核, 通常在/boot目录下，文件名类似boot/vmlinuz-4.15.0-54-generic。

我们知道计算机执行的程序是需要先加载到内存中才能由cpu读取执行，BIOS存放在ROM中，而ROM正是内存的一部分， 只是ROM中的程序在系统掉电后不会消失，相当于是固化到ROM中的固件。BIOS在电脑主板出厂的时候就已经由厂家烧录到ROM中了。 所以在计算机上电的时候，系统首先执行的就是ROM中的BIOS了。

而bootloader和操作系统linux内核程序都是存放在磁盘上的， 这两个程序是在安装linux操作系统的时候安装到磁盘中的，bootloader被安装到磁盘的第一个扇区，即MBR，而linux内核则通常被安装到/boot/目录下。 所以这两个程序在执行之前都需要从磁盘加载到内存中才能执行，bootloader被BIOS加载到内存，而linux内核则由bootloader加载到内存。

综上所述，计算机的整个启动过程可以概述为如下三大步骤：  
**bios-->bootloader-->linux**  
**1.执行ROM中的BIOS；  
2.BIOS将启动设备第一个扇区即MBR中的bootloader加载到内存并执行；  
3.bootloader将磁盘中的linux内核加载到内存中并执行。**

PC机启动时，cpu首先执行ROM中的BIOS，ROM BIOS会将默认启动驱动器上的引导扇区(MBR)中的bootloader读入内存， bootloader将操作系统内核读入内存，并将控制权交给操作系统内核代码。

[🎬计算机在交给操作系统之前所做的事情，UEFI 和 BIOS  的故事]: https://www.bilibili.com/video/BV1kR4y177GX/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

[科普贴：BIOS和UEFI的启动项 - 王诗峣的文章 - 知乎]: https://zhuanlan.zhihu.com/p/31365115

先插一句话，现在很多人用UEFI BIOS这个称呼。这里为了区分：
- BIOS一律指传统BIOS，
- UEFI BIOS一律称呼为UEFI。
- UEFI下的BIOS设置，一律称为UEFI设置。

一句话概括：BIOS只认识设备，不认识分区、不认识文件。
一句话概括，UEFI认识设备，还认识设备ROM，还认识分区表、认识文件系统以及文件。

![](../../../../../Assets/Pics/Pasted%20image%2020240816223431.png)
<small>Windows 8/8.1/10 BIOS: MBR->PBR->bootmgr->WinLoad.exe</small>

![](../../../../../Assets/Pics/Pasted%20image%2020240816223509.png)
<small>Windows 8/8.1/10 UEFI: UEFI firmware->bootmgfw.efi->WinLoad.efi</small>

[👍 The Kernel Boot Process (2008)]: https://manybutfinite.com/post/kernel-boot-process/
[👍 How Computers Boot Up (2008)]: https://manybutfinite.com/post/how-computers-boot-up/

![](../../../../../Assets/Pics/Screenshot%202024-09-15%20at%2001.35.22.png)

![](../../../../../Assets/Pics/Pasted%20image%2020240915013605.png)