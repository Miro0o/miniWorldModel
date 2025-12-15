# Drivers

[TOC]



## Res
🔗 https://libvirt.org/drivers.html



## Internal drivers
- [Hypervisor drivers](https://libvirt.org/drivers.html#hypervisor-drivers)
- [Storage drivers](https://libvirt.org/storage.html)
- [Node device driver](https://libvirt.org/drvnodedev.html)
- [Secret driver](https://libvirt.org/drvsecret.html)

The libvirt public API delegates its implementation to one or more internal drivers, depending on the [connection URI](https://libvirt.org/uri.html) passed when initializing the library. There is always a hypervisor driver active, and if the libvirt daemon is available there will usually be a network and storage driver active.



## Hypervisor drivers
The hypervisor drivers currently supported by libvirt are:
- [LXC](https://libvirt.org/drvlxc.html) - Linux Containers
- [OpenVZ](https://libvirt.org/drvopenvz.html)
- [QEMU/KVM/HVF](https://libvirt.org/drvqemu.html)
- [Test](https://libvirt.org/drvtest.html) - Used for testing
- [VirtualBox](https://libvirt.org/drvvbox.html)
- [VMware ESX](https://libvirt.org/drvesx.html)
- [VMware Workstation/Player](https://libvirt.org/drvvmware.html)
- [Xen](https://libvirt.org/drvxen.html)
- [Microsoft Hyper-V](https://libvirt.org/drvhyperv.html)
- [Virtuozzo](https://libvirt.org/drvvirtuozzo.html)
- [Bhyve](https://libvirt.org/drvbhyve.html) - The BSD Hypervisor
- [Cloud Hypervisor](https://libvirt.org/drvch.html)



## Ref

