# VMware Workstation (Pro)

[TOC]



## Res
🏠 https://www.vmware.com


### Related Topics
↗ [VMWare](../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/System%20Level%20Software%20Producers/VMWare.md)

↗ [VMware vmnet](../../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Network%20Layer/Virtual%20Network%20(vNetwork)/VMware%20vmnet.md)
↗ [VMware ESXi & VMware vSphere](../../Native%20Hypervisor/VMware%20ESXi%20&%20VMware%20vSphere/VMware%20ESXi%20&%20VMware%20vSphere.md)
↗ [VMware Server](VMware%20Server.md)


### Other Resources
https://github.com/vmware/open-vm-tools
open-vm-tools is a set of services and modules that enable several features in VMware products for better management of, and seamless user interactions with, guests. It includes kernel modules for enhancing the performance of virtual machines running Linux or other VMware supported Unix like guest operating systems.

open-vm-tools enables the following features in VMware products:
- Graceful execution of power operations (reboot and shutdown) in the guest.
- Execution of built-in or user configured scripts in the guest during various power operations.
- Running programs, commands and file system operations in the guest to enhance guest automation.
- Authentication for guest operations.
- Generation of heartbeat from guest to host for vSphere HA solution to determine guest's availabilty.
- Clock synchronization between guest and host.
- Quiescing guest file systems to allow host to capture file-system-consistent guest snapshot.
- Execution of pre-freeze and post-thaw scripts while quiescing guest file systems.
- Customization of the guest immediately after power on.
- Periodic collection of network, disk, and memory usage information from the guest.
- Resizing the graphical desktop screen of the guest.
- Shared Folders operations between host and guest file systems on VMware Workstation and VMware Fusion.
- Copying and pasting text, graphics, and files between guest and host or client desktops.
- Dragging and dropping files between guest and host UI.
- Periodic collection of running applications, services, and containers in the guest.
- Accessing content from GuestStore.
- Publishing data to Guest Data Publisher.
- Managing Salt-Minion desired state specified in a guest variable.



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

[Enabling HGFS Shared Folders on Fusion or Workstation hosted Linux VMs for open-vm-tools]: https://knowledge.broadcom.com/external/article?legacyId=74650
