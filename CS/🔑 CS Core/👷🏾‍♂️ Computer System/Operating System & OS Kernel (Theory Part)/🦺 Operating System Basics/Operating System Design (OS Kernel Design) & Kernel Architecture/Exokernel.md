# Exokernel

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Exokernel

Exokernel is an operating system kernel developed by the MIT Parallel and Distributed Operating Systems group, and also a class of similar operating systems.
Operating systems generally present hardware resources to applications through high-level abstractions such as (virtual) file systems. The idea behind exokernels is to force as few abstractions as possible on application developers, enabling them to make as many decisions as possible about hardware abstractions. Exokernels are tiny, since functionality is limited to ensuring protection and multiplexing of resources, which is considerably simpler than conventional microkernels' implementation of message passing and monolithic kernels' implementation of high-level abstractions.

![](../../../../../../../../../Assets/Pics/Screenshot%202024-02-20%20at%2010.05.28AM.png)
<small>Graphic overview of Exokernel. Exokernels are much smaller than a normal kernel (monolithic kernel). They give more direct access to the hardware, thus removing most abstractions</small>

The exokernel concept has been around since at least 1994, but as of 2010exokernels are still a research effort and have not been used in any major commercial operating systems.

A concept operating exokernel system is [Nemesis](https://en.wikipedia.org/wiki/Nemesis_(operating_system) "Nemesis (operating system)"), written by [University of Cambridge](https://en.wikipedia.org/wiki/University_of_Cambridge "University of Cambridge"), [University of Glasgow](https://en.wikipedia.org/wiki/University_of_Glasgow "University of Glasgow"), [Citrix Systems](https://en.wikipedia.org/wiki/Citrix_Systems "Citrix Systems"), and the [Swedish Institute of Computer Science](https://en.wikipedia.org/wiki/Swedish_Institute_of_Computer_Science "Swedish Institute of Computer Science"). [MIT](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology "Massachusetts Institute of Technology") has also built several exokernel-based systems, including ExOS.



## Ref

