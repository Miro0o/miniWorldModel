# Computer Bootstrapping (Booting)

[TOC]



## Res
### Related Topics
↗ [ASM (Assembly Languages)](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
↗ [C & CPP](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)
↗ [Operating System Kernel (Kernel Mode)](../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
↗ [Programming Language Processing & Program Execution](../../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Memory Access & Addressing](../../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

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


### Other Resources



## Intro
> 先插一句话，现在很多人用UEFI BIOS这个称呼。这里为了区分：
> - BIOS一律指传统BIOS，(Legacy BIOS)
> - UEFI BIOS一律称呼为UEFI。
> - UEFI下的BIOS设置，一律称为UEFI设置。


> [!links]
> ↗ [Motherboard & Mainboard](../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Motherboard%20&%20Mainboard.md)

> 🔗 https://en.wikipedia.org/wiki/Booting

In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), **booting** is the process of starting a [computer](https://en.wikipedia.org/wiki/Computer "Computer") as initiated via [hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware") such as a button or by a [software](https://en.wikipedia.org/wiki/Software "Software") command. After it is switched on, a computer's [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPU) has no software in its [main memory](https://en.wikipedia.org/wiki/Main_memory "Main memory"), so some process must load software into memory before it can be executed. This may be done by hardware or [firmware](https://en.wikipedia.org/wiki/Firmware "Firmware") in the CPU, or by a separate processor in the computer system.

**Boot** is short for **[_bootstrap_](https://en.wikipedia.org/wiki/Bootstrapping "Bootstrapping")** or **bootstrap load** and derives from the phrase _[to pull oneself up by one's bootstraps](https://en.wikipedia.org/wiki/Bootstrapping#Etymology "Bootstrapping")_. The usage calls attention to the requirement that, if most software is loaded onto a computer by other software already running on the computer, some mechanism must exist to load the initial software onto the computer. Early computers used a variety of ad-hoc methods to get a small program into memory to solve this problem. The invention of [read-only memory](https://en.wikipedia.org/wiki/Read-only_memory "Read-only memory") (ROM) of various types solved this paradox by allowing computers to be shipped with a start up program that could not be erased. Growth in the capacity of ROM has allowed ever more elaborate start up procedures to be implemented.
#### IBM-Compatible Personal Computers (PC) Booting
> 🔗 https://en.wikipedia.org/wiki/Motherboard#Bootstrapping

In early microcomputers like the [Apple II](https://en.wikipedia.org/wiki/Apple_II "Apple II") and [IBM Personal Computer](https://en.wikipedia.org/wiki/IBM_Personal_Computer "IBM Personal Computer"), firmware was stored in socketed [ROM](https://en.wikipedia.org/wiki/ROM "ROM") chips on the motherboard. Upon power-up, the [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPU) would load its [program counter](https://en.wikipedia.org/wiki/Program_counter "Program counter") with the address of the boot ROM and begin executing instructions from it. These instructions performed a [power-on self-test](https://en.wikipedia.org/wiki/Power-on_self-test "Power-on self-test") (POST), initialized hardware components, displayed system information, verified [random-access memory](https://en.wikipedia.org/wiki/Random-access_memory "Random-access memory") (RAM), and attempted to locate and load an operating system from a bootable peripheral device. If no such device was found, the system would either execute built-in software from ROM—such as [Cassette BASIC](https://en.wikipedia.org/wiki/Cassette_BASIC "Cassette BASIC") (commonly known as ROM BASIC)—or display an error message, depending on the model. For instance, both the Apple II and the original IBM PC would launch their built-in BASIC interpreter when no bootable disk was present.

The boot firmware in modern [IBM PC compatible](https://en.wikipedia.org/wiki/IBM_PC_compatible "IBM PC compatible") motherboard designs contains either a [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS"), as did the boot ROM on the original IBM PC, or [UEFI](https://en.wikipedia.org/wiki/UEFI "UEFI"). UEFI is a successor to BIOS that became popular after Microsoft began requiring it for a system to be certified to run [Windows 8](https://en.wikipedia.org/wiki/Windows_8 "Windows 8").

When the computer is powered on, the boot firmware tests and configures memory, circuitry, and peripherals. This [Power-On Self Test](https://en.wikipedia.org/wiki/Power-On_Self_Test "Power-On Self Test") (POST) may include testing some of the following things:
- [Video card](https://en.wikipedia.org/wiki/Video_card "Video card")
- [Expansion cards](https://en.wikipedia.org/wiki/Expansion_card "Expansion card") inserted into slots, such as [conventional PCI](https://en.wikipedia.org/wiki/Conventional_PCI "Conventional PCI") and [PCI Express](https://en.wikipedia.org/wiki/PCI_Express "PCI Express")
- Historical [floppy drive](https://en.wikipedia.org/wiki/Floppy_drive "Floppy drive")
- [Temperatures](https://en.wikipedia.org/wiki/Temperature "Temperature"), [voltages](https://en.wikipedia.org/wiki/Voltage "Voltage"), and fan speeds for [hardware monitoring](https://en.wikipedia.org/wiki/Hardware_monitoring "Hardware monitoring")
- [CMOS memory](https://en.wikipedia.org/wiki/CMOS_memory "CMOS memory") used to store [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS") configuration
- [Keyboard](https://en.wikipedia.org/wiki/Computer_keyboard "Computer keyboard") and [mouse](https://en.wikipedia.org/wiki/Computer_mouse "Computer mouse")
- [Sound card](https://en.wikipedia.org/wiki/Sound_card "Sound card")
- [Network adapter](https://en.wikipedia.org/wiki/Network_adapter "Network adapter")
- Optical drives: [CD-ROM](https://en.wikipedia.org/wiki/CD-ROM "CD-ROM") or [DVD-ROM](https://en.wikipedia.org/wiki/DVD-ROM "DVD-ROM")
- [Hard disk drive](https://en.wikipedia.org/wiki/Hard_disk_drive "Hard disk drive") and [solid-state drive](https://en.wikipedia.org/wiki/Solid-state_drive "Solid-state drive")
- Security devices, such as a [fingerprint reader](https://en.wikipedia.org/wiki/Fingerprint_reader "Fingerprint reader")
- [USB](https://en.wikipedia.org/wiki/USB "USB") devices, such as a USB mass storage device
##### Boot Devices
> 🔗 https://en.wikipedia.org/wiki/Booting#Boot_devices

The boot device is the storage device from which the operating system is loaded. A modern PC's UEFI or BIOS firmware supports booting from various devices, typically a local [solid-state drive](https://en.wikipedia.org/wiki/Solid-state_drive "Solid-state drive") or [hard disk drive](https://en.wikipedia.org/wiki/Hard_disk_drive "Hard disk drive") via the [GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table "GUID Partition Table") or [Master Boot Record](https://en.wikipedia.org/wiki/Master_Boot_Record "Master Boot Record") (MBR) on such a drive or disk, an [optical disc drive](https://en.wikipedia.org/wiki/Optical_disc_drive "Optical disc drive") (using [El Torito](https://en.wikipedia.org/wiki/El_Torito_\(CD-ROM_standard\) "El Torito (CD-ROM standard)")), a [USB](https://en.wikipedia.org/wiki/USB "USB") [mass storage](https://en.wikipedia.org/wiki/Mass_storage "Mass storage") device ([USB flash drive](https://en.wikipedia.org/wiki/USB_flash_drive "USB flash drive"), [memory card reader](https://en.wikipedia.org/wiki/Memory_card_reader "Memory card reader"), USB hard disk drive, USB optical disc drive, USB solid-state drive, etc.), or a network interface card (using [PXE](https://en.wikipedia.org/wiki/Preboot_Execution_Environment "Preboot Execution Environment")). Older, less common BIOS-bootable devices include [floppy disk drives](https://en.wikipedia.org/wiki/Boot_floppy "Boot floppy"), [Zip drives](https://en.wikipedia.org/wiki/Zip_drive "Zip drive"), and [LS-120](https://en.wikipedia.org/wiki/LS-120 "LS-120") drives. IBM-compatible PCs are examples that use [horizontal integrated](https://en.wikipedia.org/wiki/Horizontal_integration "Horizontal integration") hardware and UEFI/BIOS firmware.

Typically, the system firmware (UEFI or BIOS) will allow the user to configure a _boot order_. If the boot order is set to "first, the DVD drive; second, the hard disk drive", then the firmware will try to boot from the DVD drive, and if this fails (e.g. because there is no DVD in the drive), it will try to boot from the local hard disk drive.

For example, on a PC with [Windows](https://en.wikipedia.org/wiki/Windows "Windows") installed on the hard drive, the user could set the boot order to the one given above, and then insert a [Linux](https://en.wikipedia.org/wiki/Linux "Linux") [Live CD](https://en.wikipedia.org/wiki/Live_CD "Live CD") in order to try out [Linux](https://en.wikipedia.org/wiki/Linux "Linux") without having to install an operating system onto the hard drive. This is an example of [dual booting](https://en.wikipedia.org/wiki/Dual_booting "Dual booting"), in which the user chooses which operating system to start after the computer has performed its [power-on self-test](https://en.wikipedia.org/wiki/Power-on_self-test "Power-on self-test") (POST). In this example of dual booting, the user chooses by inserting or removing the DVD from the computer, but it is more common to choose which operating system to boot by selecting from a [boot manager](https://en.wikipedia.org/wiki/Boot_manager "Boot manager") menu on the selected device, by using the computer keyboard to select from a BIOS or UEFI boot menu, or both; the boot menu is typically entered by pressing F8 or F12 keys during the POST; the BIOS setup is typically entered by pressing F2 or DEL keys during the POST.

Several devices are available that enable the user to _quick-boot_ into what is usually a variant of Linux for various simple tasks such as Internet access; examples are [Splashtop](https://en.wikipedia.org/wiki/Splashtop_OS "Splashtop OS") and [Latitude ON](https://en.wikipedia.org/wiki/Latitude_ON "Latitude ON").
##### Boot Sequence
> [!links]
> ↗ [Legacy BIOS (Basic IO System)](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20Legacy%20BIOS%20(Basic%20IO%20System)/Legacy%20BIOS%20(Basic%20IO%20System).md) 
> ↗ [UEFI BIOS](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20UEFI%20BIOS/UEFI%20BIOS.md)

> 🔗 https://en.wikipedia.org/wiki/Booting#Boot_sequence

Upon starting, an IBM-compatible personal computer's x86 CPU, executes in real mode, the instruction located at reset vector (the physical memory address FFFF0h on 16-bit x86 processors[62] and FFFFFFF0h on 32-bit and 64-bit x86 processors[63][64]), usually pointing to the firmware (UEFI or BIOS) entry point inside the ROM. This memory location typically contains a jump instruction that transfers execution to the location of the firmware (UEFI or BIOS) start-up program. This program runs a power-on self-test (POST) to check and initialize required devices such as main memory (DRAM), the PCI bus and the PCI devices (including running embedded option ROMs). One of the most involved steps is setting up DRAM over SPD, further complicated by the fact that at this point memory is very limited.

After initializing required hardware, the firmware (UEFI or BIOS) goes through a pre-configured list of non-volatile storage devices ("boot device sequence") until it finds one that is bootable.
#### SoCs and Embedded Systems Booting
> 🔗 https://en.wikipedia.org/wiki/Motherboard#Bootstrapping

In [RISC](https://en.wikipedia.org/wiki/RISC "RISC") processor based embedded systems, the simpler boot firmware, such as [Das U-Boot](https://en.wikipedia.org/wiki/Das_U-Boot "Das U-Boot"), may be used on the motherboard.

> 🔗 https://en.wikipedia.org/wiki/Booting#SoCs,_embedded_systems,_microcontrollers,_and_FPGAs

Many modern CPUs, SoCs and microcontrollers (for example, [TI](https://en.wikipedia.org/wiki/Texas_Instruments "Texas Instruments") [OMAP](https://en.wikipedia.org/wiki/OMAP "OMAP")) or sometimes even [digital signal processors](https://en.wikipedia.org/wiki/Digital_signal_processors "Digital signal processors") (DSPs) may have a boot ROM integrated directly into their silicon, so such a processor can perform a simple boot sequence on its own and load boot programs (firmware or software) from boot sources such as NAND flash or eMMC. It is difficult to hardwire all the required logic for handling such devices, so an integrated boot ROM is used instead in such scenarios. Also, a boot ROM may be able to load a boot loader or diagnostic program via serial interfaces like [UART](https://en.wikipedia.org/wiki/UART "UART"), [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus "Serial Peripheral Interface Bus"), [USB](https://en.wikipedia.org/wiki/USB "USB") and so on. This feature is often used for system recovery purposes, or it could also be used for initial non-volatile memory programming when there is no software available in the non-volatile memory yet. Many modern microcontrollers (e.g. flash memory controller on [USB flash drives](https://en.wikipedia.org/wiki/USB_flash_drive "USB flash drive")) have firmware ROM integrated directly into their silicon.

Some [embedded system](https://en.wikipedia.org/wiki/Embedded_system "Embedded system") designs may also include an intermediary boot sequence step. For example, [Das U-Boot](https://en.wikipedia.org/wiki/Das_U-Boot "Das U-Boot") may be split into two stages: the platform would load a small SPL (Secondary Program Loader), which is a stripped-down version of U-Boot, and the SPL would do some initial hardware configuration (e.g. [DRAM](https://en.wikipedia.org/wiki/DRAM "DRAM") initialization using CPU cache as RAM) and load the larger, fully featured version of U-Boot. Such embedded systems may used highly customized and [vertical integrated](https://en.wikipedia.org/wiki/Vertical_integration "Vertical integration") hardware and software, and their boot programs may be simpler. Some CPUs and SoCs may not use CPU cache as RAM on boot process, they use an integrated boot processor to do some hardware configuration, to reduce cost.

It is also possible to take control of a system by using a hardware debug interface such as [JTAG](https://en.wikipedia.org/wiki/JTAG "JTAG"). Such an interface may be used to write the boot loader program into bootable non-volatile memory (e.g. flash) by instructing the processor core to perform the necessary actions to program non-volatile memory. Alternatively, the debug interface may be used to upload some diagnostic or boot code into RAM, and then to start the processor core and instruct it to execute the uploaded code. This allows, for example, the recovery of embedded systems where no software remains on any supported boot device, and where the processor does not have any integrated boot ROM. JTAG is a standard and popular interface; many CPUs, microcontrollers and other devices are manufactured with JTAG interfaces (as of 2009).

Some microcontrollers provide special hardware interfaces that cannot be used to take arbitrary control of a system or directly run code, but instead they allow the insertion of boot code into bootable non-volatile memory (like flash memory) via simple protocols. Then at the manufacturing phase, such interfaces are used to inject boot code (and possibly other code) into non-volatile memory. After system reset, the microcontroller begins to execute code programmed into its non-volatile memory, just like usual processors are using ROMs for booting. Most notably, this technique is used by [Atmel AVR](https://en.wikipedia.org/wiki/Atmel_AVR "Atmel AVR") microcontrollers, and by others as well. In many cases such interfaces are implemented by hardwired logic. In other cases such interfaces could be created by software running in integrated on-chip boot ROM from [GPIO](https://en.wikipedia.org/wiki/GPIO "GPIO") pins.

Most DSPs have a serial mode boot and a parallel mode boot, such as the host port interface (HPI boot).

In the case of DSPs, there is often a second microprocessor or microcontroller present in the system design, and this is responsible for overall system behavior, interrupt handling, dealing with external events, user interface, etc., while the DSP is dedicated to signal processing tasks only. In such systems, the DSP could be booted by another processor which is sometimes referred as the _host processor_ (giving name to a Host Port). Such a processor is also sometimes referred as the _master_, since it usually boots first from its own memories and then controls overall system behavior, including booting of the DSP, and then further controlling the DSP's behavior. The DSP often lacks its own boot memories and relies on the host processor to supply the required code instead. The most notable systems with such a design are cell phones, modems, audio and video players and so on, where a DSP and a CPU/microcontroller coexist.

Many [FPGA](https://en.wikipedia.org/wiki/FPGA "FPGA") chips load their configuration from an external configuration ROM, typically a serial EEPROM, on power-up.


### POST (Power-On Self-Test)
> 🔗 https://en.wikipedia.org/wiki/Power-on_self-test

A power-on self-test (POST) is a process performed by firmware or software routines immediately after a computer or other digital electronic device is powered on.

The results of the POST may be displayed on a panel that is part of the device, output to an external device, or stored for future retrieval by a diagnostic tool. Since a self-test might detect that the system's usual human-readable display is non-functional, an indicator lamp or a speaker may be provided to show error codes as a sequence of flashes or beeps. In addition to running tests, the POST process may also set the initial state of the device from firmware.

In the case of a computer, the POST routines are part of a device's pre-boot sequence; if they complete successfully, the bootstrap loader code is invoked to load an operating system.


### I/O Devices & Drivers Management
↗ [Computer Interfaces & Hardware Drivers](../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Interfaces%20&%20Hardware%20Drivers.md)
↗ [Computer Firmware System Interfaces](../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Firmware%20System%20Interfaces/Computer%20Firmware%20System%20Interfaces.md)



## Modern Boot Loader & Boot Sequence (Chain Loading) ⭐
> 🔗 https://en.wikipedia.org/wiki/Booting#Modern_boot_loaders

When a computer is turned off, its software‍—‌including operating systems, application code, and data‍—‌remains stored on [non-volatile memory](https://en.wikipedia.org/wiki/Non-volatile_memory "Non-volatile memory"). When the computer is powered on, it typically does not have an operating system or its loader in [random-access memory](https://en.wikipedia.org/wiki/Random-access_memory "Random-access memory") (RAM). The computer first executes a relatively small program stored in [read-only memory](https://en.wikipedia.org/wiki/Read-only_memory "Read-only memory") (ROM, and later [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM"), [NOR flash](https://en.wikipedia.org/wiki/NOR_flash "NOR flash")) along with some needed data, to initialize CPU and motherboard, to initialize [RAM](https://en.wikipedia.org/wiki/RAM "RAM") (especially on x86 systems), to access the nonvolatile device (usually [block device](https://en.wikipedia.org/wiki/Block_device "Block device"), e.g. NAND flash) or devices from which the operating system programs and data can be loaded into RAM.

The small program that starts this sequence is known as a **bootstrap loader**, **bootstrap** or **boot loader**. Often, **multiple-stage boot loaders** are used, during which several programs of increasing complexity load one after the other in a process of **[chain loading](https://en.wikipedia.org/wiki/Chain_loading "Chain loading")**.

Some earlier computer systems, upon receiving a boot signal from a human operator or a peripheral device, may load a very small number of fixed instructions into memory at a specific location, initialize at least one CPU, and then point the CPU to the instructions and start their execution. These instructions typically start an input operation from some peripheral device (which may be switch-selectable by the operator). Other systems may send hardware commands directly to peripheral devices or I/O controllers that cause an extremely simple input operation (such as "read sector zero of the system device into memory starting at location 1000") to be carried out, effectively loading a small number of boot loader instructions into memory; a completion signal from the I/O device may then be used to start execution of the instructions by the CPU.

Smaller computers often use less flexible but more automatic boot loader mechanisms to ensure that the computer starts quickly and with a predetermined software configuration. In many desktop computers, for example, the bootstrapping process begins with the CPU executing software contained in ROM (for example, the [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS") of an [IBM PC](https://en.wikipedia.org/wiki/IBM_PC "IBM PC")) at a predefined address (some CPUs, including the Intel [x86 series](https://en.wikipedia.org/wiki/Intel_8086 "Intel 8086") are designed to execute this software after reset without outside help). This software contains rudimentary functionality to search for devices eligible to participate in booting, and load a small program from a special section (most commonly the [boot sector](https://en.wikipedia.org/wiki/Boot_sector "Boot sector")) of the most promising device, typically starting at a fixed [entry point](https://en.wikipedia.org/wiki/Entry_point "Entry point")such as the start of the sector.

Boot loaders may face peculiar constraints, especially in size; for instance, on the IBM PC and compatibles, the boot code must fit in the [Master Boot Record](https://en.wikipedia.org/wiki/Master_Boot_Record "Master Boot Record") (MBR) and the [Partition Boot Record](https://en.wikipedia.org/wiki/Partition_Boot_Record "Partition Boot Record") (PBR), which in turn are limited to a single sector; on the [IBM System/360](https://en.wikipedia.org/wiki/IBM_System/360 "IBM System/360"), the size is limited by the IPL medium, e.g., [card](https://en.wikipedia.org/wiki/Punched_card "Punched card") size, track size.

On systems with those constraints, the first program loaded into RAM may not be sufficiently large to load the operating system and, instead, must load another, larger program. The first program loaded into RAM is called a first-stage boot loader, and the program it loads is called a second-stage boot loader.


### 1️⃣ First-Stage Boot Loader
Examples of first-stage (hardware initialization stage) boot loaders include BIOS, UEFI, coreboot, Libreboot and Das U-Boot. On the IBM PC, the boot loader in the Master Boot Record (MBR) and the Partition Boot Record (PBR) was coded to require at least 32 KB[51][52] (later expanded to 64 KB[53]) of system memory and only use instructions supported by the original 8088/8086 processors.

↗ [First-Stage Boot Loader (System Firmware)](First-Stage%20Boot%20Loader%20(System%20Firmware)/First-Stage%20Boot%20Loader%20(System%20Firmware).md)
- ↗ [Legacy BIOS (Basic IO System)](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20Legacy%20BIOS%20(Basic%20IO%20System)/Legacy%20BIOS%20(Basic%20IO%20System).md)
- ↗[UEFI BIOS](First-Stage%20Boot%20Loader%20(System%20Firmware)/📌%20UEFI%20BIOS/UEFI%20BIOS.md)


### 2️⃣ Second-Stage Boot Loader
↗ [Second-Stage Boot Loader & Boot Manager](Second-Stage%20Boot%20Loader%20&%20Boot%20Manager/Second-Stage%20Boot%20Loader%20&%20Boot%20Manager.md)
- ↗ [GNU GRUB](Second-Stage%20Boot%20Loader%20&%20Boot%20Manager/GNU%20GRUB/GNU%20GRUB.md)
- ↗ [iBoot](Second-Stage%20Boot%20Loader%20&%20Boot%20Manager/iBoot/iBoot.md)
#### 3️⃣ Network Booting
↗ [PXELINUX](Second-Stage%20Boot%20Loader%20&%20Boot%20Manager/Syslinux%20Project/PXELINUX.md)
↗ [Network Booting](Second-Stage%20Boot%20Loader%20&%20Boot%20Manager/🛰️%20Network%20Booting/Network%20Booting.md)


### First and Second Stage Boot Loaders
> 🔗 https://en.wikipedia.org/wiki/Booting#First_and_second_stages_boot_loaders

Some boot loaders, such as [Das U-Boot](https://en.wikipedia.org/wiki/Das_U-Boot "Das U-Boot") and [iBoot](https://en.wikipedia.org/wiki/IBoot "IBoot"), included both first and second stages boot functions.


### Embedded and Multi-stage Boot Loaders
> 🔗 https://en.wikipedia.org/wiki/Booting#Embedded_and_multi-stage_boot_loaders

Many embedded systems must boot immediately. For example, waiting a minute for a digital television or a GPS navigation device to start is generally unacceptable. Therefore, such devices have software systems in ROM or flash memory so the device can begin functioning immediately; little or no loading is necessary, because the loading can be precomputed and stored on the ROM when the device is made.

Large and complex systems may have boot procedures that proceed in multiple phases until finally the operating system and other programs are loaded and ready to execute. Because operating systems are designed as if they never start or stop, a boot loader might load the operating system, configure itself as a mere process within that system, and then irrevocably transfer control to the operating system. The boot loader then terminates normally as any other process would.



## Booting Security
> [!links]
> ↗ [Trusted Computing (TC)](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/Other%20Security%20Aspects%20(Other%20Countermeasures)/Trusted%20Computing%20(TC)/Trusted%20Computing%20(TC).md)
> - ↗ [TPM & TSS](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/Other%20Security%20Aspects%20(Other%20Countermeasures)/Trusted%20Computing%20(TC)/TPM%20&%20TSS/TPM%20&%20TSS.md)
>
> ↗ [Operating System Security](../../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security/Operating%20System%20Security.md)
> ↗ [SELinux (Security-Enhanced Linux)](../../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security/🐏%20Linux%20Security/Linux%20Kernel%20Security%20Mechanisms/SELinux%20(Security-Enhanced%20Linux)/SELinux%20(Security-Enhanced%20Linux).md)
> ↗ [SecureBoot](../../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security/🪟%20Windows%20Security/Windows%20Security%20Mechanisms/SecureBoot.md)

> 🔗 https://en.wikipedia.org/wiki/Booting#Security

Various measures have been implemented that enhance the [security](https://en.wikipedia.org/wiki/Computer_security "Computer security") of the booting process. Some of them are made mandatory, others can be disabled or enabled by the [end user](https://en.wikipedia.org/wiki/End_user "End user"). Traditionally, booting did not involve the use of [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"). The security can be bypassed by [unlocking the boot loader](https://en.wikipedia.org/wiki/Bootloader_unlocking "Bootloader unlocking"), which might or might not be approved by the manufacturer. Modern boot loaders make use of concurrency, meaning they can run multiple processor cores and threads at the same time, which add extra layers of complexity to secure booting.

[Matthew Garrett](https://en.wikipedia.org/wiki/Matthew_Garrett "Matthew Garrett") argued that booting security serves a legitimate goal but in doing so chooses [defaults](https://en.wikipedia.org/wiki/Default_\(computer_science\) "Default (computer science)") that are hostile to users.



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