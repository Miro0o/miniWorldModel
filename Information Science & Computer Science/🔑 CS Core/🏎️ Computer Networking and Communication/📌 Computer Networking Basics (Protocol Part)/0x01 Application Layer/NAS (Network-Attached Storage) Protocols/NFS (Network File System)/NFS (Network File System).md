# NFS (Network File System)

[TOC]



## Res
### Related Topics
↗ [File & File System](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20&%20File%20System.md)

↗ [ONC RPC (Sun RPC)](../../../../Network%20Programming%20&%20RPC/RPC%20Frameworks/ONC%20RPC%20(Sun%20RPC).md)
↗ [Kerberos](../../../../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/⛑️%20Authentication%20Protocols%20&%20Implementations/Kerberos/Kerberos.md)



## Intro
### Protocol Development
> 🔗 https://en.wikipedia.org/wiki/Network_File_System



## Ref
[NFS网络文件系统简介]: https://cloud-atlas.readthedocs.io/zh_CN/latest/infra_service/nfs/intro_nfs.html

为解决本地文件系统的限制 (磁盘空间有限、无法多客户端共享访问)，网络文件系统(Network File System, NFS)被发明出来:
- 多个客户端可以共享访问服务器上相同的文件
- 非常便于集中管理NFS服务器上的文件(提供一定的安全性)，例如集中备份、冗灾等'

网络文件系统(NFS)是一个守护进程，它允许其他计算机在另一台远程计算机上 `挂载` 磁盘文件系统目录，并像访问本地文件和文件夹一样访问这些文件。
NFS最早是Sun Microsystems公司于1984年发明

[1. NFS简介]: https://www.huweihuang.com/linux-notes/tools/nfs-usage.html

[👍 一个 NFS 的简介]: https://planet.ustclug.org/post/217

[NFS介绍与配置]: https://www.plob.org/article/125.html

[👍 认识 NFS 文件共享协议]: https://zhuanlan.zhihu.com/p/31626338


[Network File System | Wikipedia]: https://en.wikipedia.org/wiki/Network_File_System


