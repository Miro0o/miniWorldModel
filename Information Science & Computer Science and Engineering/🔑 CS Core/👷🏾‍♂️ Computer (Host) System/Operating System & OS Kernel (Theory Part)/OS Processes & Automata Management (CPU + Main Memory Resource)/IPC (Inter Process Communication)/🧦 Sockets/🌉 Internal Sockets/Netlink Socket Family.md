# Netlink Socket Family

[TOC]



## Res
### Related Topics



## Intro
**[Netlink](https://en.wikipedia.org/wiki/Netlink)**
The **Netlink** [socket](https://en.wikipedia.org/wiki/Network_socket) family is a [Linux kernel interface](https://en.wikipedia.org/wiki/Linux_kernel_interface) used for [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication) (IPC) between both the kernel and [userspace](https://en.wikipedia.org/wiki/Userspace) processes, and between different userspace processes, in a way similar to the [Unix domain sockets](https://en.wikipedia.org/wiki/Unix_domain_socket). Similarly to the [Unix domain sockets](https://en.wikipedia.org/wiki/Unix_domain_sockets), and unlike [INET sockets](https://en.wikipedia.org/wiki/Network_socket), Netlink communication cannot traverse host boundaries. However, while the Unix domain sockets use the [file system](https://en.wikipedia.org/wiki/File_system) namespace, Netlink sockets are usually addressed by [process identifiers](https://en.wikipedia.org/wiki/Process_identifier) (PIDs).



## Ref

