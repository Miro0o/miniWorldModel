# Berkley Sockets & POSIX Sockets & BSD Sockets

[TOC]



## Res
### Related Topics
↗ [API (Application Program Interface)](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/API%20(Application%20Program%20Interface).md)
↗ [Network Programming & RPC](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
↗ [POSIX (Portable Operating System Interface)](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/POSIX%20(Portable%20Operating%20System%20Interface).md)

↗ [Internet Domain Socket](../../../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Internet%20Domain%20Socket.md)
- ↗ [Internet Domain Socket Programming](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Internet%20Domain%20Socket%20Programming/Internet%20Domain%20Socket%20Programming.md)
↗ [UNIX Domain Sockets (UDS)](🌉%20Internal%20Sockets/UNIX%20Domain%20Sockets%20(UDS).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Inter-process_communication

**Berkeley sockets** is an **application programming interface** for ↗ [Internet Domain Socket](../../../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Internet%20Domain%20Socket.md) and ↗ [UNIX Domain Sockets (UDS)](🌉%20Internal%20Sockets/UNIX%20Domain%20Sockets%20(UDS).md), used for inter-process communication. It is commonly implemented as a [library](https://en.wikipedia.org/wiki/Library_(computing)) of linkable modules. It originated with the [4.2BSD Unix](https://en.wikipedia.org/wiki/History_of_the_Berkeley_Software_Distribution#4BSD) operating system, which was released in 1983.

A [socket](https://en.wikipedia.org/wiki/Network_socket) is an abstract representation ([handle](https://en.wikipedia.org/wiki/Handle_(computing))) for the local endpoint of a network communication path. The Berkeley sockets API represents it as a [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) ([file handle](https://en.wikipedia.org/wiki/File_handle)) in the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) that provides a common interface for input and output to [streams](https://en.wikipedia.org/wiki/Standard_streams) of data.

Berkeley sockets evolved with little modification from a [*de facto* standard](https://en.wikipedia.org/wiki/De_facto_standard) into a component of the [POSIX](https://en.wikipedia.org/wiki/POSIX) specification. The term **POSIX sockets** is essentially synonymous with **Berkeley sockets**, but they are also known as **BSD sockets**, acknowledging the first implementation in the [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution).


---
> 🔗 https://en.wikipedia.org/wiki/Berkeley_sockets



## Ref

