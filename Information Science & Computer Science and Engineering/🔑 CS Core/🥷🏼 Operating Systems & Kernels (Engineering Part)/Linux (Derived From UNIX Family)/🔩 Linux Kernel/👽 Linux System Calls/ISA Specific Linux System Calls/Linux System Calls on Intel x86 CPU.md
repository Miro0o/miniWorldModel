# Linux System Calls on Intel x86 CPU

[TOC]



## Res
### Related Topics




## Intro



## Legacy System Calls



## Fast System Calls
> 🔗 https://blog.packagecloud.io/the-definitive-guide-to-linux-system-calls/

The legacy method seems pretty reasonable, but there are newer ways to trigger a system call which don’t involve a software interrupt and are [much faster](https://lkml.org/lkml/2002/12/9/13) than using a software interrupt.

Each of the two faster methods is comprised of two instructions. One to enter the kernel and one to leave. Both methods are described in the Intel CPU documentation as “Fast System Call”.

Unfortunately, Intel and AMD implementations have some disagreement on which method is valid when a CPU is in 32bit or 64bit mode.

In order to maximize compatibility across both Intel and AMD CPUs:
- On 32bit systems use: `sysenter` and `sysexit`.
- On 64bit systems use: `syscall` and `sysret`.


### 🎯 32-bit fast system calls: `sysenter` | `sysexit`


### 🎯 64-bit fast system calls `syscall`| `sysret`





## Ref
[👍 The Definitive Guide to Linux System Calls]: https://blog.packagecloud.io/the-definitive-guide-to-linux-system-calls/ 

(This article has been archived.)

**TL;DR**
This blog post explains how Linux programs call functions in the Linux kernel. It will outline several different methods of making systems calls, how to handcraft your own assembly to make system calls (examples included), kernel entry points into system calls, kernel exit points from system calls, glibc wrappers, bugs, and much, much more.

Here is a summary of the topics this blog post will cover,
- What is a system call?
- Prerequisite information
    - Hardware and software
    - User programs, the kernel, and CPU privilege levels
    - Interrupts
    - Model Specific Registers (MSRs)
- Calling system calls with assembly is a bad idea - A word of caution about calling system calls with assembly
- **Legacy system calls**
    - Using legacy system calls with your own assembly
    - Kernel-side: `int $0x80` entry point
    - Returning from a legacy system call with iret
- **Fast system calls**
    - 32-bit fast system calls `sysenter`/`sysexit`
        - `__kernel_vsyscall` internals
        - Using `sysenter` system calls with your own assembly
        - Kernel-side: `sysenter` entry point
        - Returning from a `sysenter` system call with `sysexit`
    - 64-bit fast system calls `syscall`/`sysret`
        - `syscall`/`sysret`
        - Using `syscall` system calls with your own assembly
        - Kernel-side: `syscall` entry point
        - Returning from a `syscall` system call with `sysret`
        - Calling a `syscall` semi-manually with `syscall(2)`
        - glibc `syscall` wrapper internals
- **Virtual system calls**
    - vDSO in the kernel
    - Locating the vDSO in memory
    - vDSO in `glibc`
    - `glibc` system call wrappers
- Interesting syscall related bugs
    - CVE-2010-3301
    - Android sysenter ABI breakage
- Conclusion
