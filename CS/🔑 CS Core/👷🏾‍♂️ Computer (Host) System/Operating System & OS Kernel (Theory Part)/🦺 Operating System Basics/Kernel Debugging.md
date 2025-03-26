# Kernel Debugging

[TOC]



## Res
### Related Topics
↗ [Debuggers & Disassemblers & Decompilers](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/Debuggers%20&%20Disassemblers%20&%20Decompilers/Debuggers%20&%20Disassemblers%20&%20Decompilers.md)
- ↗ [kgdb (kernel gdb) & kdb](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/Compilation%20&%20Program%20Loading%20Tools/🐐%20GCC%20(The%20GNU%20Compiler%20Collection)/gdb%20(GNU%20DeBugger)/kgdb%20(kernel%20gdb)%20&%20kdb.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Kernel_debugger

A **kernel debugger** is a [debugger](https://en.wikipedia.org/wiki/Debugger "Debugger") present in some  [operating system kernels](https://en.wikipedia.org/wiki/Kernel_(operating_system) "Kernel (operating system)") to ease debugging and kernel development by the kernel developers. A kernel debugger might be a stub implementing low-level operations, with a full-blown debugger such as [GNU Debugger](https://en.wikipedia.org/wiki/GNU_Debugger "GNU Debugger") (gdb), running on another machine, sending commands to the stub over a [serial line](https://en.wikipedia.org/wiki/Serial_line "Serial line") or a network connection, or it might provide a command line that can be used directly on the machine being debugged.

Operating systems and operating system kernels that contain a kernel debugger:
- The [Windows NT](https://en.wikipedia.org/wiki/Windows_NT "Windows NT") family includes a kernel debugger named KD, which can act as a local debugger with limited capabilities (reading and writing kernel memory, and setting breakpoints) and can attach to a remote machine over a serial line, [IEEE 1394](https://en.wikipedia.org/wiki/IEEE_1394 "IEEE 1394") connection, [USB 2.0](https://en.wikipedia.org/wiki/Universal_Serial_Bus "Universal Serial Bus") or [USB 3.0](https://en.wikipedia.org/wiki/USB_3.0 "USB 3.0")connection. The [WinDbg](https://en.wikipedia.org/wiki/WinDbg "WinDbg") [GUI](https://en.wikipedia.org/wiki/GUI "GUI") debugger can also be used to debug kernels on local and remote machines.
- [BeOS](https://en.wikipedia.org/wiki/BeOS "BeOS") and [Haiku](https://en.wikipedia.org/wiki/Haiku_(operating_system) "Haiku (operating system)") include a kernel debugger usable with either an on-screen console or over a serial line. It features various commands to inspect memory, threads, and other kernel structures.
- [DragonFly BSD](https://en.wikipedia.org/wiki/DragonFly_BSD "DragonFly BSD")
- [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel"); No kernel debugger was included in the mainline Linux tree prior to version 2.6.26-rc1 because [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds "Linus Torvalds") didn't want a kernel debugger in the kernel.
    - KDB (local)
    - [KGDB](https://en.wikipedia.org/wiki/KGDB "KGDB") (remote)
    - MDB (local/remote)
- [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD") (DDB for local, KGDB for remote)
- [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS") - ddb for local, kdp for remote
- [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD "OpenBSD") includes ddb which has a syntax is similar to [GNU Debugger](https://en.wikipedia.org/wiki/GNU_Debugger "GNU Debugger")



## Ref
[Kernel debugger | Wikipedia]: https://en.wikipedia.org/wiki/Kernel_debugger
