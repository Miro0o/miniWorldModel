# Firmware and Computer (OS) Booting

[TOC]



## Res
### Related Topics
↗ [Computer (IO Devices) Drivers & Programming](../Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Computer%20(IO%20Devices)%20Drivers%20&%20Programming.md)
↗ [FAQ /👉 Difference Between Computer Firmware 🆚 Drivers?](../Computer%20Interfaces%20&%20Hardware%20Drivers/FAQ.md#👉%20Difference%20Between%20Computer%20Firmware%20🆚%20Drivers?)

↗ [QEMU](../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/Hypervisors%20Implementation/Hosted%20Hypervisor/Independant/QEMU/QEMU.md)
↗ [JTAG（Joint Test Action Group）Debugger](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/Debuggers%20&%20Disassemblers%20&%20Decompilers/Debuggers/JTAG（Joint%20Test%20Action%20Group）Debugger.md)


### Other Resources



## Intro: Firmware
![](../../../../Assets/Pics/Screenshot%202024-03-28%20at%2011.57.52%20PM.png)
<small><a>https://en.wikipedia.org/wiki/Preboot_Execution_Environment#External_links</a></small>

In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), **firmware** is a specific class of computer software that provides the low-level control for a device's specific hardware. 

Firmware, such as the [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS") of a personal computer, may contain basic functions of a device, and may provide [hardware abstraction](https://en.wikipedia.org/wiki/Hardware_abstraction "Hardware abstraction") services to higher-level software such as operating systems. For less complex devices, firmware may act as the device's complete operating system, performing all control, monitoring and data manipulation functions. Typical examples of devices containing firmware are embedded systems (running embedded software), home and personal-use appliances, computers, and [computer peripherals](https://en.wikipedia.org/wiki/Computer_peripheral "Computer peripheral").

Firmware is held in [non-volatile memory](https://en.wikipedia.org/wiki/Non-volatile_memory "Non-volatile memory") devices such as [ROM](https://en.wikipedia.org/wiki/Read-only_memory "Read-only memory"), [EPROM](https://en.wikipedia.org/wiki/EPROM "EPROM"), [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM"), and [flash memory](https://en.wikipedia.org/wiki/Flash_memory "Flash memory"). Updating firmware requires ROM [integrated circuits](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") to be physically replaced, or EPROM or flash memory to be reprogrammed through a special procedure. Some firmware memory devices are permanently installed and cannot be changed after manufacture. Common reasons for updating firmware include fixing bugs or adding features.


### Firmware Applications
#### 1️⃣ Computer
#### 2️⃣ Home & Personal-Use Products
As of 2010, most [portable music players](https://en.wikipedia.org/wiki/Portable_music_player "Portable music player") support firmware upgrades. Some companies use firmware updates to add new playable file formats ([codecs](https://en.wikipedia.org/wiki/Codecs "Codecs")). Other features that may change with firmware updates include the GUI or even the battery life. Most [mobile phones](https://en.wikipedia.org/wiki/Mobile_phone "Mobile phone") have a [firmware over the air](https://en.wikipedia.org/wiki/Firmware_over_the_air "Firmware over the air") firmware upgrade capability for much the same reasons; some may even be upgraded to enhance reception or sound quality.
#### 3️⃣ Automobiles
Since 1996, most [automobiles](https://en.wikipedia.org/wiki/Automobile "Automobile") have employed an on-board computer and various sensors to detect mechanical problems. As of 2010, modern vehicles also employ computer-controlled [anti-lock braking systems](https://en.wikipedia.org/wiki/Anti-lock_braking_system "Anti-lock braking system") (ABS) and computer-operated [transmission control units](https://en.wikipedia.org/wiki/Transmission_control_unit "Transmission control unit") (TCUs). The driver can also get in-dash information while driving in this manner, such as real-time fuel economy and tire pressure readings. Local dealers can update most vehicle firmware.
#### 4️⃣ Other Examples
Other firmware applications include:
- In home and personal-use products:
    - Timing and control systems for [washing machines](https://en.wikipedia.org/wiki/Washing_machine "Washing machine")
    - Controlling sound and video attributes, as well as the channel list, in modern [televisions](https://en.wikipedia.org/wiki/Television "Television")
- In [routers](https://en.wikipedia.org/wiki/Network_router "Network router"), [switches](https://en.wikipedia.org/wiki/Network_switch "Network switch"), and [firewalls](https://en.wikipedia.org/wiki/Firewall_(computing) "Firewall (computing)"):
    - [LibreCMC](https://en.wikipedia.org/wiki/LibreCMC "LibreCMC") – a 100% [free software](https://en.wikipedia.org/wiki/Free_software "Free software") router distribution based on the [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre "Linux-libre") kernel
    - [IPFire](https://en.wikipedia.org/wiki/IPFire "IPFire") – an [open-source](https://en.wikipedia.org/wiki/Open-source_software "Open-source software") firewall/router distribution based on the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel")
    - [fli4l](https://en.wikipedia.org/wiki/Fli4l "Fli4l") – an open-source firewall/router distribution based on the Linux kernel
    - [OpenWrt](https://en.wikipedia.org/wiki/OpenWrt "OpenWrt") – an open-source firewall/router distribution based on the Linux kernel
    - [m0n0wall](https://en.wikipedia.org/wiki/M0n0wall "M0n0wall") – an embedded firewall distribution of [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD")
    - [Proprietary firmware](https://en.wikipedia.org/wiki/Proprietary_firmware "Proprietary firmware")
- In [NAS](https://en.wikipedia.org/wiki/Network-attached_storage "Network-attached storage") systems:
    - [NAS4Free](https://en.wikipedia.org/wiki/NAS4Free "NAS4Free") – an open-source NAS operating system based on FreeBSD
    - [Openfiler](https://en.wikipedia.org/wiki/Openfiler "Openfiler") – an open-source NAS operating system based on the Linux kernel
    - [Proprietary firmware](https://en.wikipedia.org/wiki/Proprietary_firmware "Proprietary firmware")

- [Field-Programmable Gate Array](https://en.wikipedia.org/wiki/Field-Programmable_Gate_Array "Field-Programmable Gate Array") (FPGA) code may be referred to as firmware


### Firmware Hacking



## Intro: Booting
↗ [Computer Bootstrap (Boot)](🌽%20Computer%20Bootstrap%20(Boot)/Computer%20Bootstrap%20(Boot).md)



## Ref
[Firmware | Wikipedia]: https://en.wikipedia.org/wiki/Firmware

[👍 About Firmware | Beyond Linux® From Scratch (System V Edition) - Version 12.0 - Chapter 3. After LFS Configuration Issues]: https://www.linuxfromscratch.org/blfs/view/12.0/postlfs/firmware.html
