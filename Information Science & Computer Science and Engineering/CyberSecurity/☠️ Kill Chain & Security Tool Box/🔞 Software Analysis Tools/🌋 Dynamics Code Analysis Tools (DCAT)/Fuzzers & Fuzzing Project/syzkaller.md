# syzkaller

[TOC]



## Res
🚧 https://github.com/google/syzkaller?tab=readme-ov-file

Initially, syzkaller was developed with Linux kernel fuzzing in mind, but now it's being extended to support other OS kernels as well. Most of the documentation at this moment is related to the [Linux](https://github.com/google/syzkaller/blob/master/docs/linux/setup.md) kernel. For other OS kernels check: [Darwin/XNU](https://github.com/google/syzkaller/blob/master/docs/darwin/README.md), [FreeBSD](https://github.com/google/syzkaller/blob/master/docs/freebsd/README.md), [Fuchsia](https://github.com/google/syzkaller/blob/master/docs/fuchsia/README.md), [NetBSD](https://github.com/google/syzkaller/blob/master/docs/netbsd/README.md), [OpenBSD](https://github.com/google/syzkaller/blob/master/docs/openbsd/setup.md), [Starnix](https://github.com/google/syzkaller/blob/master/docs/starnix/README.md), [Windows](https://github.com/google/syzkaller/blob/master/docs/windows/README.md), [gVisor](https://github.com/google/syzkaller/blob/master/docs/gvisor/README.md). [Akaros](https://github.com/google/syzkaller/blob/master/docs/akaros/README.md),
- [How to install syzkaller](https://github.com/google/syzkaller/blob/master/docs/setup.md)
- [How to use syzkaller](https://github.com/google/syzkaller/blob/master/docs/usage.md)
- [How syzkaller works](https://github.com/google/syzkaller/blob/master/docs/internals.md)
	- Linux-specific syzkaller internals
	- It's possible to fuzz some external Linux kernel interfaces with syzkaller:
		- See [this](https://github.com/google/syzkaller/blob/master/docs/linux/external_fuzzing_network.md) for details about the networking stack.
		- See [this](https://github.com/google/syzkaller/blob/master/docs/linux/external_fuzzing_usb.md) for details about the USB stack.
- [How to install syzbot](https://github.com/google/syzkaller/blob/master/docs/setup_syzbot.md)
- [How to contribute to syzkaller](https://github.com/google/syzkaller/blob/master/docs/contributing.md)
- [How to report Linux kernel bugs](https://github.com/google/syzkaller/blob/master/docs/linux/reporting_kernel_bugs.md)
- [Tech talks and articles](https://github.com/google/syzkaller/blob/master/docs/talks.md)
- [Research work based on syzkaller](https://github.com/google/syzkaller/blob/master/docs/research.md)


### Related Topics


### Other Resources



## Intro
### Design & Architecture
> 🔗 https://github.com/google/syzkaller/blob/master/docs/internals.md

![](../../../../../../Assets/Pics/Pasted%20image%2020260129194204.png)




## Ref
