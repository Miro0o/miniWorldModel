# io_uring

[TOC]



## Res
### Related Topics


### Other Resources
https://lwn.net/Kernel/Index/#io_uring
- [Ringing in a new asynchronous I/O API](https://lwn.net/Articles/776703/) (January 15, 2019)
- [io_uring, SCM_RIGHTS, and reference-count cycles](https://lwn.net/Articles/779472/) (February 13, 2019)
- [Redesigned workqueues for io_uring](https://lwn.net/Articles/803070/) (October 25, 2019)
- [The rapid growth of io_uring](https://lwn.net/Articles/810414/) (January 24, 2020)
- [Two new ways to read a file quickly](https://lwn.net/Articles/813827/) (March 6, 2020)
- [Automatic buffer selection for io_uring](https://lwn.net/Articles/815491/) (March 20, 2020)
- [Operations restrictions for io_uring](https://lwn.net/Articles/826053/) (July 15, 2020)
- [Avoiding blocking file-name lookups](https://lwn.net/Articles/843163/) (January 21, 2021)
- [ioctl() for io_uring](https://lwn.net/Articles/844875/) (February 4, 2021)
- [BPF meets io_uring](https://lwn.net/Articles/847951/) (March 4, 2021)
- [GDB and io_uring](https://lwn.net/Articles/851076/) (March 31, 2021)
- [Auditing io_uring](https://lwn.net/Articles/858023/) (June 3, 2021)
- [Descriptorless files for io_uring](https://lwn.net/Articles/863071/) (July 19, 2021)
- [In search of an appropriate RLIMIT_MEMLOCK default](https://lwn.net/Articles/876288/) (November 19, 2021)
- [Zero-copy network transmission with io_uring](https://lwn.net/Articles/879724/) (December 30, 2021)
- [Security requirements for new kernel features](https://lwn.net/Articles/902466/) (July 28, 2022)
- [An io_uring-based user-space block driver](https://lwn.net/Articles/903855/) (August 8, 2022)
- [Crash recovery for user-space block drivers](https://lwn.net/Articles/906097/) (August 29, 2022)
- [Introducing io_uring_spawn](https://lwn.net/Articles/908268/) (September 20, 2022)
- [Rethinking splice()](https://lwn.net/Articles/923237/) (February 17, 2023)
- [FUSE and io_uring](https://lwn.net/Articles/932079/) (May 19, 2023)
- [Security topics: io_uring, VM attestation, and random-reseed notifications](https://lwn.net/Articles/943239/) (September 4, 2023)
- [The trouble with iowait](https://lwn.net/Articles/989272/) (September 10, 2024)



## Intro
> 🔗 https://stackoverflow.com/a/61806870/16542494 (2020)
> links mentioned below are somehow outdated though.

`io_uring` is a (new as of mid 2019) Linux kernel interface to efficiently allow you to send and receive data asynchronously. It was originally designed to target block devices and files but has since gained the ability to work with things like network sockets.

Unlike something like `epoll()`, it is built around a completion model rather than a readiness model. This is desirable because other operating systems have used the completion model successfully for some time. `io_uring` provides something competitive and complete for Linux without the [drawbacks the previous Linux AIO interface has](https://stackoverflow.com/a/46377629/2732969).

The author of `io_uring` has written a PDF document titled [Efficient IO with io_uring](https://kernel.dk/io_uring.pdf) which discusses its usage in a technical fashion. A gentler introduction is provided by the [Lord of the io_uring](https://unixism.net/loti/) guide. You can read ScyllaDB developer Glauber Costa proselytize it in [How io_uring and eBPF Will Revolutionize Programming in Linux](https://www.scylladb.com/2020/05/05/how-io_uring-and-ebpf-will-revolutionize-programming-in-linux/). Lastly, [LWN.net has written about `io_uring` many times](https://lwn.net/Kernel/Index/#io_uring).

(Shameless plug: I've written a more linky [answer on the "Is there really no asynchronous block I/O on Linux?"](https://stackoverflow.com/a/57451551/2732969) question)



## Ref
