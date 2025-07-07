# VMware ESXi & VMware vSphere

[TOC]



## Res
🏠 
🚧 
📂 https://docs.vmware.com/en/VMware-vSphere/index.html?sid=MPba0A


### Related Topics
↗ [VMware Server](../../Hosted%20Hypervisor/Independant/VMware%20Server.md)
↗ [VMware Workstation](../../Hosted%20Hypervisor/Independant/VMware%20Workstation.md)

↗ [IDC & Data Center Networking](../../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/🚀%20High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies/IDC%20&%20Data%20Center%20Networking.md)



## Intro
> VMWare有三个版本
> 1. workstation是单机级，用在个人桌面系统中，需要操作系统支持。
> 2. Server是工作组级，用于服务器，需要操作系统支持。
> 3. ESXi和vSphere是企业级，用于服务器，不需要操作系统支持。ESXi是vSphere的子集，一种裁剪版。



## Ref
[VMWare ESXi简介及运维]: http://t.csdnimg.cn/UBy8f

VMWare ESXi，是VMWare vSphere Hypervisor 套件下的重要组件，一款优秀的服务器级别的虚拟机。前身是ESX，依赖 Linux 源码，后抛弃 Linux 源码做成ESXi。

整个产品，界面清晰易用，但硬件兼容性较差（主要面向服务器），不依赖于任何操作系统，直接安装在裸机上，它本身就可以看作一个操作系统，然后可以在它上面安装其他系统。

[Overview of vNetwork Distributed Switch concepts (1010555)]: https://kb.vmware.com/s/article/1010555
