# PXE (Preboot Execution Environment)

[TOC]



## Res
### Related Topics
↗ [TFTP (Trivial File Transfer Protocol)](../../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/File%20Transferring/FTP%20(File%20Transfer%20Protocol)/TFTP%20(Trivial%20File%20Transfer%20Protocol).md)
↗ [DHCP (Dynamic Host Configuration Protocol)](../../../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/🏘️%20Local%20Configuration%20&%20Discovery/Address%20Selection/DHCP%20(Dynamic%20Host%20Configuration%20Protocol)/DHCP%20(Dynamic%20Host%20Configuration%20Protocol).md)


### Learning Resources
https://wiki.archlinux.org/title/Preboot_Execution_Environment#
Preboot Execution Environment | Arch Wiki



## Intro
> 🔗 https://en.wikipedia.org/wiki/Preboot_Execution_Environment

 > pxe是Preboot Excution Environment的缩写，是intel公司研发，基于client/server的网络模式，支持远程主机通过网络从远端服务器下载镜，并由此支持通过网络启动操作系统的预启动执行环境。
 
In computing, the **Preboot eXecution Environment**, **PXE** (most often pronounced as /ˈpɪksiː/ pixie, often called PXE Boot/pixie boot.) specification describes a standardized client–server environment that boots a software assembly, retrieved from a network, on PXE-enabled clients. On the client side it requires only a PXE-capable network interface controller (NIC), and uses a small set of industry-standard network protocols such as DHCP and TFTP.

The concept behind the PXE originated in the early days of protocols like BOOTP/DHCP/TFTP, and as of 2015 it forms part of the Unified Extensible Firmware Interface (UEFI) standard. In modern data centers, PXE is the most frequent choice for operating system booting, installation and deployment.



## Ref
[Linux系统自动化安装之pxe实现 | cnblog]: https://www.cnblogs.com/qiuhom-1874/p/11789583.html

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240313214336.png)
