# UNIX Domain Sockets (UDS)

[TOC]



## Res
### Related Topics
↗ [Internet Domain Socket](../../../../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Internet%20Domain%20Socket.md)
↗ [POSIX (Portable Operating System Interface)](../../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/POSIX%20(Portable%20Operating%20System%20Interface).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Unix_domain_socket

> The Unix domain socket facility is a standard component of [POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX") [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system").

A **Unix domain socket** aka **UDS** or **IPC socket** is a data communications endpoint for exchanging data between processes executing on the same host operating system. It is also referred to by its address family `AF_UNIX`. Valid socket types in the UNIX domain are:
- `SOCK_STREAM` (compare to [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol")) – for a stream-oriented socket
- `SOCK_DGRAM` (compare to [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol")) – for a datagram-oriented socket that preserves message boundaries (as on most UNIX implementations, UNIX domain datagram sockets are always reliable and don't reorder datagrams)
- `SOCK_SEQPACKET` (compare to [SCTP](https://en.wikipedia.org/wiki/SCTP "SCTP")) – for a sequenced-packet socket that is connection-oriented, preserves message boundaries, and delivers messages in the order that they were sent

The [API](https://en.wikipedia.org/wiki/API "API") for Unix domain sockets is similar to that of an [Internet socket](https://en.wikipedia.org/wiki/Internet_socket "Internet socket"), but rather than using an underlying network protocol, all communication occurs entirely within the operating system [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system) "Kernel (operating system)"). Unix domain sockets may use the file system as their address [name space](https://en.wikipedia.org/wiki/Name_space "Name space"). (Some operating systems, like [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), offer additional namespaces.) Processes reference Unix domain sockets as file system [inodes](https://en.wikipedia.org/wiki/Inode "Inode"), so two processes can communicate by opening the same socket.

In addition to sending data, processes may send [file descriptors](https://en.wikipedia.org/wiki/File_descriptor "File descriptor") across a Unix domain socket connection using the `sendmsg()` and `recvmsg()` system calls. This allows the sending processes to grant the receiving process access to a file descriptor for which the receiving process otherwise does not have access. This can be used to implement a rudimentary form of [capability-based security](https://en.wikipedia.org/wiki/Capability-based_security "Capability-based security").



## Ref

