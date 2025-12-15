# Network Booting

[TOC]



## Res
### Related Topics
↗ [TFTP (Trivial File Transfer Protocol)](../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/File%20Transferring/FTP%20(File%20Transfer%20Protocol)/TFTP%20(Trivial%20File%20Transfer%20Protocol).md)
↗ [PXELINUX](../Syslinux%20Project/PXELINUX.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Booting#Network_booting

Most computers are also capable of booting over a computer network. In this scenario, the operating system is stored on the disk of a server, and certain parts of it are transferred to the client using a simple protocol such as the ↗ [TFTP (Trivial File Transfer Protocol)](../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/File%20Transferring/FTP%20(File%20Transfer%20Protocol)/TFTP%20(Trivial%20File%20Transfer%20Protocol).md). After these parts have been transferred, the operating system takes over the control of the booting process.

As with the second-stage boot loader, network booting begins by using **generic network access methods** provided by the **network interface's boot ROM**, which typically contains a **↗ [PXE (Preboot Execution Environment)](PXE%20(Preboot%20Execution%20Environment)/PXE%20(Preboot%20Execution%20Environment).md) image.** No drivers are required, but the system functionality is limited until the operating system kernel and drivers are transferred and started. As a result, once the ROM-based booting has completed it is entirely possible to network boot into an operating system that itself does not have the ability to use the network interface.



## Ref

