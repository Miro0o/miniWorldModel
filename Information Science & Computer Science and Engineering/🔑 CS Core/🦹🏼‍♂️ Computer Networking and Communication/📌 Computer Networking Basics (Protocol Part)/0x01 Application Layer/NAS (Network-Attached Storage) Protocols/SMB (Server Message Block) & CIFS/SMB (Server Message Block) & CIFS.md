# SMB (Server Message Block) & CIFS

[TOC]



## Res
📂 https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-smb2/5606ad47-5ee0-437a-817e-70c366052962

Specifies the Server Message Block (SMB) Protocol Versions 2 and 3, which support the sharing of file and print resources between machines and extend the concepts from the Server Message Block Protocol.


### Related Topics
↗ [Windows](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows.md)

↗ [SAMBA](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/SAMBA.md) (SMB Implementation on Linux)
↗ [NetBIOS (Network Basic Input_Output System)](../../🚔%20Network%20Managements%20&%20Standards/🏘️%20Local%20Configuration%20&%20Discovery/Name%20Service%20Discovery/NetBIOS%20(Network%20Basic%20Input_Output%20System).md) (SMB Implementation on Windows)
↗ [Directory Services](../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/Directory%20Services.md)

↗ [SSH (Secure SHell)](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Secure%20Communication/SSH%20(Secure%20SHell)/SSH%20(Secure%20SHell).md)



## Intro
**Server Message Block** (**SMB**) is a communication protocol originally developed in 1983 by Barry A. 
- Feigenbaum at IBM and intended to provide [shared access](https://en.wikipedia.org/wiki/Shared_access "Shared access") to [files](https://en.wikipedia.org/wiki/Computer_file "Computer file") and [printers](https://en.wikipedia.org/wiki/Printer_(computing) "Printer (computing)") across [nodes](https://en.wikipedia.org/wiki/Node_(networking) "Node (networking)") on a network of systems running IBM's [OS/2](https://en.wikipedia.org/wiki/OS/2 "OS/2"). It also provides an authenticated [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication "Inter-process communication") (IPC) mechanism. 
- In 1987, [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft") and [3Com](https://en.wikipedia.org/wiki/3Com "3Com") implemented SMB in [LAN Manager](https://en.wikipedia.org/wiki/LAN_Manager "LAN Manager") for OS/2, at which time SMB used the [NetBIOS](https://en.wikipedia.org/wiki/NetBIOS "NetBIOS") service atop the [NetBIOS Frames](https://en.wikipedia.org/wiki/NetBIOS_Frames "NetBIOS Frames") protocol as its underlying transport. 
- Later, Microsoft implemented SMB in [Windows NT 3.1](https://en.wikipedia.org/wiki/Windows_NT_3.1 "Windows NT 3.1") and has been updating it ever since, adapting it to work with newer underlying transports: [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP") and [NetBT](https://en.wikipedia.org/wiki/NetBIOS_over_TCP/IP "NetBIOS over TCP/IP"). 
- In 1996, Microsoft published a version of SMB 1.0 with minor modifications under the **Common Internet File System** (**CIFS**[/sɪfs/](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English")) moniker. CIFS was compatible with even the earliest incarnation of SMB, including [LAN Manager](https://en.wikipedia.org/wiki/LAN_Manager "LAN Manager")'s. It supports symbolic links, hard links, and larger file size, but none of the features of SMB 2.0 and later. Microsoft's proposal, however, remained an [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft "Internet Draft") and never achieved standard status. Microsoft has since discontinued use of the CIFS moniker but continues developing SMB and making subsequent specifications publicly available
- SMB over [QUIC](https://en.wikipedia.org/wiki/QUIC "QUIC") was introduced in Windows Server 2022. 

SMB implementation consists of two vaguely named [Windows services](https://en.wikipedia.org/wiki/Windows_service "Windows service"): "Server" (ID: `LanmanServer`) and "Workstation" (ID: `LanmanWorkstation`). It uses [NTLM](https://en.wikipedia.org/wiki/NT_LAN_Manager "NT LAN Manager") or [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol) "Kerberos (protocol)") protocols for user authentication.



## Ref
[Server Message Block | Wikipedia]: https://en.wikipedia.org/wiki/Server_Message_Block

[Samba协议简介 - 万由科技的文章 - 知乎]: https://zhuanlan.zhihu.com/p/41449862
[网络安全分析之 SMB 协议 | 看雪]: https://bbs.kanxue.com/thread-223721.htm

[👍 SMB详解 | CSDN]: https://blog.csdn.net/qq_44002418/article/details/125508092
