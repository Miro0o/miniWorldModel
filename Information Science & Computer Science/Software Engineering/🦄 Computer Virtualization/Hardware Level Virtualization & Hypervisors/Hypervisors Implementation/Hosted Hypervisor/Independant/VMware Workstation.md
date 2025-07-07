# VMware Workstation

[TOC]



## Res
🏠 https://www.vmware.com


### Related Topics
↗ [VMware vmnet](../../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/📌%20NV%20Implementations/Virtual%20Network%20Layer/Virtual%20Network%20(vNetwork)/VMware%20vmnet.md)
↗ [VMware ESXi & VMware vSphere](../../Native%20Hypervisor/VMware%20ESXi%20&%20VMware%20vSphere/VMware%20ESXi%20&%20VMware%20vSphere.md)
↗ [VMware Server](VMware%20Server.md)



## Intro
> VMWare有三个版本
> 1. workstation是单机级，用在个人桌面系统中，需要操作系统支持。
> 2. Server是工作组级，用于服务器，需要操作系统支持。
> 3. ESXi和vSphere是企业级，用于服务器，不需要操作系统支持。ESXi是vSphere的子集，一种裁剪版。



## VMware Fusion
🏠 https://www.vmware.com/products/fusion.html




## Ref
[关于Vmware的vmx文件丢失问题的解决]: https://blog.csdn.net/houqi1993/article/details/49663115
[VMware 改变虚拟机文件位置]: https://blog.csdn.net/aa35434/article/details/132395038

1. 在vmware内查看虚拟机文件位置
2. 进入虚拟机文件，将整个文件夹复制或移动到目标路径。
3. 虚拟机文件夹内的 `.vmx` 文件保存了整个虚拟机的配置信息。待虚拟机文件复制完成后进入vmware软件，选择“打开虚拟机”，然后通过该`.vmx`文件打开虚拟机即可。