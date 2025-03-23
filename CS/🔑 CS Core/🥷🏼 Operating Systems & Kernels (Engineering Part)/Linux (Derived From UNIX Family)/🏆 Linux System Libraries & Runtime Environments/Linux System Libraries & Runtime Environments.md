# Linux System Libraries & Runtime Environments

[TOC]



## Res
### Related Topics
↗ [Operating System Components & Runtime Libraries](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Components%20&%20Runtime%20Libraries.md)
- ↗ [GNU C Library (glibc)](👎%20GNU%20C%20Library%20(glibc)/GNU%20C%20Library%20(glibc).md)



## Intro
![](../../../../../../../../Assets/Pics/Screenshot%202024-02-21%20at%209.18.47PM.png)
<small>Image source from wikipedia: Linux Kernel </small>




## Ref
[What is the role of libc(glibc) in our linux app? | Stackoverflow]: https://stackoverflow.com/q/11372872/16542494

`libc` implements both standard C functions like `strcpy()` and POSIX functions (which may be system calls) like `getpid()`. Note that not all standard C functions are in `libc` - most math functions are in `libm`.

You cannot directly make system calls in the same way that you call normal functions because calls to the kernel aren't normal function calls, so they can't be resolved by the linker. Instead, architecture-specific assembly language thunks are used to call into the kernel - you can of course write these directly in your own program too, but you don't need to because `libc`provides them for you.

Note that in Linux it is the combination of the kernel and `libc` that provides the POSIX API. `libc` adds a decent amount of value - not every POSIX function is necessarily a system call, and for the ones that are, the kernel behaviour isn't always POSIX conforming.

`libc` is a single library file (both `.so` and `.a` versions are available) and in most cases resides in `/usr/lib`. However, the glibc (GNU libc) project provides more than just `libc` - it also provides the `libm` mentioned earlier, and other core libraries like `libpthread`. So `libc`is just one of the libraries provided by glibc - and there are other alternate implementations of `libc` other than glibc.

---
With regard to the first two, glibc is both the C standard library (e.g, "standard C functions") and a wrapper for system calls. You cannot issue system calls directly because the compiler doesn't know how -- glibc contains the "glue" which is necessary to issue system calls, which is written in assembly. (It is possible to reimplement this yourself, but it's far more trouble than it's worth.)

(The C++ standard library is a separate thing; it's called `libstdc++`.)

glibc isn't a single `.so` (dynamic library) file -- there are a bunch, but libc and libm are the most commonly-used two. All of the static and dynamic libraries are stored in `/lib`.

libc is a generic term used to refer to all C standard libraries -- there are several. glibc is the most commonly used one; others include eglibc, uclibc, and dietlibc.

[标准c库函数与Linux下系统函数库 区别 （有无缓冲区引起的效率变化）| CSDN]: https://blog.csdn.net/zpznba/article/details/94356090

我们都知道，C语言在UNIX/Linux系统下有一套系统调用（系统函数），比如文件操作open()、close()、write()、read()等，而标准C语言的库函数中也有一套对文件的操作函数[fopen](https://so.csdn.net/so/search?q=fopen&spm=1001.2101.3001.7020)()、fclose()、fwrite()、fread()等.。那么同样是对文件的操作函数，标C与UC有什么区别呢？是标C效率高还是UC效率高呢？今天就让我们来一探究竟。

[👍 How libc startup in a process works?]: https://www.gnu.org/software/hurd/glibc/startup.html
**Statically-linked program**
- The ELF headers points program start at `_start`.
- `_start` (sysdeps/mach/hurd/i386/static-start.S) calls `_hurd_stack_setup`
- `_hurd_stack_setup` (sysdeps/mach/hurd/i386/init-first.c) calls `first_init` which calls `__mach_init` to initialize enough to run RPCs, then runs the `_hurd_preinit_hook` hooks, which initialize global variables of libc.
- `_hurd_stack_setup` (sysdeps/mach/hurd/i386/init-first.c) calls `_hurd_startup`.
- `_hurd_startup` (hurd/hurdstartup.c) gets hurdish information from servers and calls its `main` parameter.
- the `main` parameter was actually `doinit` (in sysdeps/mach/hurd/i386/init-first.c), which mangles the stack and calls `doinit1` which calls `init`.
- `init` sets threadvars, tries to initialize threads (and perhaps switches to the new stack) and gets to call `init1`.
- `init1` gets the Hurd block, calls `_hurd_init` on it
- `_hurd_init` (hurd/hurdinit.c) initializes initial ports, starts the signal thread, runs the `_hurd_subinit` hooks (`init_dtable` hurd/dtable.c notably initializes the FD table and the `_hurd_fd_subinit` hooks, which notably checks `std*`).
- We are back to `_start`, which jumps to `_start1` which is the normal libc startup which calls `__libc_start_main`
- `__libc_start_main` (actually called `LIBC_START_MAIN` in csu/libc-start.c) initializes libc, tls, libpthread, atexit
- `__libc_start_main` calls initialization function given as parameter `__libc_csu_init`,
- `__libc_csu_init` (csu/elf-init.c) calls `preinit_array_start` functions
- `__libc_csu_init` calls `_init`
- `_init` (sysdeps/i386/crti.S) calls `PREINIT_FUNCTION`, (actually libpthread on Linux, `__gmon_start__` on hurd)
- back to `__libc_csu_init` calls `init_array_start` functions
- back to `__libc_start_main`, it calls calls application's `main`, then `exit`.

**dynamically-linked program**
- dl.so ELF headers point its start at `_start`.
- `_start` (sysdeps/i386/dl-machine.h) calls `_dl_start`.
- `_dl_start` (elf/rtld.c) initializes `bootstrap_map`, calls `_dl_start_final`
- `_dl_start_final` calls `_dl_sysdep_start`.
- `_dl_sysdep_start` (sysdeps/mach/hurd/dl-sysdep.c) calls `__mach_init` to initialize enough to run RPCs, then calls `_hurd_startup`.
- `_hurd_startup` (hurd/hurdstartup.c) gets hurdish information from servers and calls its `main` parameter.
- the `main` parameter was actually `go` inside `_dl_sysdep_start`, which calls `dl_main`.
- `dl_main` (elf/rtld.c) interprets ld.so parameters, loads the binary and libraries, calls `_dl_allocate_tls_init`.
- we are back to `go`, which branches to `_dl_start_user`.
- `_dl_start_user` (./sysdeps/i386/dl-machine.h) runs `RTLD_START_SPECIAL_INIT` (sysdeps/mach/hurd/i386/dl-machine.h) which calls `_dl_init_first`.
- `_dl_init_first` (sysdeps/mach/hurd/i386/init-first.c) calls `first_init` which calls `__mach_init` to initialize enough to run RPCs, then runs the `_hurd_preinit_hook` hooks, which initialize global variables of libc.
- `_dl_init_first` calls `init`.
- `init` sets threadvars, tries to initialize threads (and perhaps switches to the new stack) and gets to call `init1`.
- `init1` gets the Hurd block, calls `_hurd_init` on it
- `_hurd_init` (hurd/hurdinit.c) initializes initial ports, starts the signal thread, runs the `_hurd_subinit` hooks (`init_dtable` hurd/dtable.c notably initializes the FD table and the `_hurd_fd_subinit`hooks, which notably checks `std*`).
- we are back to `_dl_start_user`, which calls `_dl_init` (elf/dl-init.c) which calls application initializers.
- `_dl_start_user` jumps to the application's entry point, `_start`
- `_start` (sysdeps/i386/start.S) calls `__libc_start_main`
- `__libc_start_main` (actually called `LIBC_START_MAIN` in csu/libc-start.c) initializes libc, atexit,
- `__libc_start_main` calls initialization function given as parameter `__libc_csu_init`,
- `__libc_csu_init` (csu/elf-init.c) calls `_init`
- `_init` (sysdeps/i386/crti.S) calls `PREINIT_FUNCTION`, (actually libpthread on Linux, `__gmon_start__` on hurd)
- back to `__libc_csu_init` calls `init_array_start` functions
- back to `__libc_start_main`, it calls application's `main`, then `exit`.
