# Telnet Protocol

[TOC]



## Res
### Related Topics
↗ [Telnet Clients](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/Terminal%20Emulators/Remote%20Terminal%20&%20Other%20Communications%20Programs/Telnet%20Clients/Telnet%20Clients.md)



## Intro
Telnet is a network protocol used to virtually access a computer and to provide a two-way, collaborative and text-based communication channel between two machines.

It follows a user command Transmission Control Protocol/Internet Protocol (TCP/IP) networking protocol for creating remote sessions. On the web, Hypertext Transfer Protocol (HTTP) and File Transfer Protocol (FTP) simply enable users to [request specific files from remote computers](https://www.techtarget.com/searchnetworking/tip/Understanding-the-FTP-PORT-command), while, through Telnet, users can log on as a regular user with the privileges they are granted to the specific applications and data on that computer.

**Telnet is not a secure protocol and is unencrypted.** By monitoring a user's connection, anyone can access a person's username, password and other private information that is typed over the Telnet session in plaintext. With this information, access can be gained to the user's device.

Some modern systems enable only command-line connections using Secure Shell (SSH), an encrypted tool similar to Telnet, or through a virtual private network (VPN). Because of security concerns, many professional organizations require use of SSH, PuTTy or other options instead of Telnet.

### History of Telnet
Telnet was originally run over **Network Control Program (NCP)** protocols. It was later called *Teletype Over Network Protocol*, or TONP. While it was used informally for some time, it was officially established on March 5, 1973, in published papers.

In early forms, Telnet used American Standard Code for Information Interchange (ASCII) delivered over an 8-bit channel to enable remote computers to communicate with basic text.

Over time, several Telnet extensions were created. Telnet has been around as a tool for programmers for several decades. The first version of Telnet was created for the Advanced Research Projects Agency Network (ARPANET), the precursor to the modern internet, in the 1960s. It was one of the first tools created to link computers remotely over large distances. A Telnet protocol was developed by researchers and professionals in 1971 followed by the Telnet system in 1983.



## Telnet Implementations
↗ [Network Management Basics /RPC /File Transmission](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Network%20Management%20Basics.md#RPC%20/File%20Transmission)



## Ref
[Telnet Introduction]: https://www.techtarget.com/searchnetworking/definition/Telnet

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA
![](../../../../../../Assets/Pics/Pasted%20image%2020250316222517.png)

