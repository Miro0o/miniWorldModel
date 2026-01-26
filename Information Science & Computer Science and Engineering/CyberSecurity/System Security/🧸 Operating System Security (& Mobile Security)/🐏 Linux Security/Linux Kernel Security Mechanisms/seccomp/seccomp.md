# seccomp

[TOC]



## Res


## Intro
**seccomp** (short for **secure computing mode**) is a [computer security](https://en.wikipedia.org/wiki/Computer_security "Computer security") facility in the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel"). seccomp allows a [process](https://en.wikipedia.org/wiki/Process_(computing) "Process (computing)") to make a one-way transition into a "secure" state where it cannot make any [system calls](https://en.wikipedia.org/wiki/System_call "System call")except `exit()`, `sigreturn()`, `read()` and `write()` to already-open [file descriptors](https://en.wikipedia.org/wiki/File_descriptor "File descriptor"). Should it attempt any other system calls, the kernel will either just log the event or terminate the process with [SIGKILL](https://en.wikipedia.org/wiki/SIGKILL "SIGKILL")or [SIGSYS](https://en.wikipedia.org/wiki/SIGSYS "SIGSYS"). In this sense, it does not [virtualize](https://en.wikipedia.org/wiki/Virtual_machine "Virtual machine") the system's resources but isolates the process from them entirely.

seccomp mode is enabled via the [`prctl(2)`](https://manned.org/prctl.2) system call using the `PR_SET_SECCOMP` argument, or (since Linux kernel 3.17) via the [`seccomp(2)`](https://manned.org/seccomp.2) system call. seccomp mode used to be enabled by writing to a file, `/proc/self/seccomp`, but this method was removed in favor of `prctl()`. In some kernel versions, seccomp disables the [`RDTSC`](https://en.wikipedia.org/wiki/RDTSC "RDTSC") [x86](https://en.wikipedia.org/wiki/X86 "X86") instruction, which returns the number of elapsed processor cycles since power-on, used for high-precision timing.

**seccomp-bpf** is an extension to seccomp that allows filtering of system calls using a configurable policy implemented using [Berkeley Packet Filter](https://en.wikipedia.org/wiki/Berkeley_Packet_Filter "Berkeley Packet Filter") rules. It is used by [OpenSSH](https://en.wikipedia.org/wiki/OpenSSH "OpenSSH")  and [vsftpd](https://en.wikipedia.org/wiki/Vsftpd "Vsftpd") as well as the Google [Chrome/Chromium](https://en.wikipedia.org/wiki/Chrome_web_browser "Chrome web browser") web browsers on [ChromeOS](https://en.wikipedia.org/wiki/ChromeOS "ChromeOS") and Linux. (In this regard seccomp-bpf achieves similar functionality, but with more flexibility and higher performance, to the older [systrace](https://en.wikipedia.org/wiki/Systrace "Systrace")—which seems to be no longer supported for [Linux](https://en.wikipedia.org/wiki/Linux "Linux").)

Some consider seccomp comparable to [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD "OpenBSD") pledge(2) and [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD") [capsicum](https://en.wikipedia.org/wiki/Capsicum_(Unix) "Capsicum (Unix)")



## Ref

