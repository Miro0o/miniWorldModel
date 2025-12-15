# Open Firmware

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Open_Firmware

**Open Firmware** is a standard defining the interfaces of a computer [firmware](https://en.wikipedia.org/wiki/Firmware "Firmware") system, formerly endorsed by the [Institute of Electrical and Electronics Engineers](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers "Institute of Electrical and Electronics Engineers") (IEEE). It originated at [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems") where it was known as **OpenBoot**, and has been used by multiple vendors including [Sun](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems"), [Apple](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc."), [IBM](https://en.wikipedia.org/wiki/IBM "IBM") and [ARM](https://en.wikipedia.org/wiki/Arm_Holdings "Arm Holdings").

Open Firmware allows a system to load [platform](https://en.wikipedia.org/wiki/Platform_(computing) "Platform (computing)")-independent [drivers](https://en.wikipedia.org/wiki/Device_driver "Device driver") directly from a PCI device, improving compatibility.

Open Firmware may be accessed through its [command line interface](https://en.wikipedia.org/wiki/Command_line_interface "Command line interface"), which uses the [Forth programming language](https://en.wikipedia.org/wiki/Forth_programming_language "Forth programming language").


### Feature
- Open Firmware defines a standard way to describe the hardware configuration of a system, called the _[device tree](https://en.wikipedia.org/wiki/Device_tree "Device tree")_. This helps the operating system to better understand the configuration of the host computer, relying less on user configuration and hardware polling. 
	- For example, Open Firmware is essential for reliably identifying slave [I2C](https://en.wikipedia.org/wiki/I2C "I2C") devices like temperature sensors for [hardware monitoring](https://en.wikipedia.org/wiki/Hardware_monitoring "Hardware monitoring"), whereas the alternative solution of performing a blind probe of the [I2C](https://en.wikipedia.org/wiki/I2C "I2C") bus, as has to be done by software like [lm_sensors](https://en.wikipedia.org/wiki/Lm_sensors "Lm sensors") on generic hardware, is known to result in serious hardware issues under certain circumstances.

- Open Firmware Forth Code may be compiled into FCode, a [bytecode](https://en.wikipedia.org/wiki/Bytecode "Bytecode") which is independent of [instruction set architecture](https://en.wikipedia.org/wiki/Instruction_set_architecture "Instruction set architecture"). A [PCI card](https://en.wikipedia.org/wiki/Peripheral_Component_Interconnect "Peripheral Component Interconnect") may include a program, compiled to FCode, which runs on any Open Firmware system. In this way, it can provide boot-time [diagnostics](https://en.wikipedia.org/wiki/Diagnostic "Diagnostic"), configuration code, and [device drivers](https://en.wikipedia.org/wiki/Device_driver "Device driver"). FCode is also very compact, so that a disk driver may require only one or two kilobytes. Therefore, many of the same I/O cards can be used on Sun systems and Macintoshes that used Open Firmware. FCode implements [ANS Forth](https://en.wikipedia.org/wiki/Forth_(programming_language) "Forth (programming language)") and a subset of the Open Firmware library.

- Being based upon an interactive programming language, Open Firmware can be used to efficiently test and bring up new hardware. It allows drivers to be written and tested interactively. Operational video and mouse drivers are the only prerequisite for a graphical interface suitable for end-user diagnostics. Apple shipped such a diagnostic "operating system" in many Power Macintoshes. Sun also shipped an FCode-based diagnostic tool suite called OpenBoot Diagnostics (OBDiag) used by customer service support and hardware manufacturing teams



## Ref

