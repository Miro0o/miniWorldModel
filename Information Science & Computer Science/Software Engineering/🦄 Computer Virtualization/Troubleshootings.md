# Troubleshootings

[TOC]



## 👉 ability to import standalone qemu instances to lima to manage

#qemu #lima
##### Decription: 
I need to use lima to manage VM instance. And the problem is when i was to create an `mininet` vm (for SDN Lab) the only tutorial i found is how to run `mininet` vm on emu. 

So i need to know how to create instance on lima with equal specs on QEMU.

##### Solusions:
Not exactly what i was looking for...

```shell
images:
- location: ~/some/path/my-vm.qcow2
  arch: "x86_64"
```

TBD.... 

[ability to import standalone qemu instances to lima to manage]: https://github.com/lima-vm/lima/issues/881



## 👉 QEMU, No bootable device, Windows Subsystem for Linux
#qemu #wsl

The first thing to do is to check whether this command line and ISO image work on a normal Linux host system. That will tell you whether the problem is (a) the Windows Subsystem for Linux not correctly implementing something QEMU relies on or (b) your ISO image actually not being a bootable CDROM.

You might also try booting a known-good ISO image such as one for a Linux distribution.

(The general principle here is to try to do diagnostic tests to split the space of "what might be the problem" into smaller sections and determine which side your problem is.)


[QEMU, No bootable device, Windows Subsystem for Linux]: https://stackoverflow.com/questions/39232676/qemu-no-bootable-device-windows-subsystem-for-linux



## 👉 internal error: Cannot find suitable CPU model for given data
#qemu #libvirt 


TBD..


[「KVM libvirt」internal error: Cannot find suitable CPU model for given]: https://bbs.archlinux.org/viewtopic.php?id=182142

[libvirtError: internal error Cannot find suitable CPU model for given data | Stackoverflow]: https://stackoverflow.com/q/18185815



## 👉 Unable to find any firmware to satisfy 'efi'
#efi #macos #firmware #libvirt #qemu 


TBD..



[👍 `virsh` create fails with "Unable to find any firmware to satisfy 'efi'" for `aarch64` guest on macOS]: https://www.spinics.net/linux/fedora/libvirt-users/msg13201.html

Since you are providing the path to both UEFI image and varstore you can drop this 'firmware="efi"' attribute. It's what's causing troubles here.

A short trip into not so distant past. UEFI was introduced to QEMU, so `libvirt` came up with `<loader type="pflash>/path/to/uefi</loader> `and
`<nvram/> `combo. This was suboptimal, because now users had to guess
which FW to select (because it depends on guest arch, secure boot
enabled, SMM mode, ...). So QEMU started shipping small, machine
readable files to each BIOS/UEFI image, which `libvirt` would parse and pick the best one for given domain XML. And this is what `firmware='efi'` controls. IOW, using `firmware='efi'` is incompatible with specifying paths in `<loader/>` and `<nvram/>` and if you define this XML you'd see that the paths are not formatted back (e.g. in `virsh dumpxml`).

[libvirt: can't run EFI VMs on aarch64-darwin #200104]:  https://github.com/NixOS/nixpkgs/issues/200104



## 👉 XML Error: No PCI buses available 
#qemu #libvirt #macos 


TBD..



[XML error: No PCI buses available when defining MIPS VM]: https://bugs.launchpad.net/ubuntu/+source/libvirt/+bug/1561497

I don't know if needed after all that time, but the TL;DR is that by default `libvirt` does not add a `pci-root`

You can get around just doing so on your own, add:  
```xml
<controller type='pci' index='0' model='pci-root'/>
```

Mips also supports no custom cpu and I'm not sure on your `openvswitch`, so I was replacing this.

You can define e.g. [1] just fine, and if I'd have a kernel to boot it might even work.  
Yet OTOH don't expect too much from MIPS support in general.

[1]: http://paste.ubuntu.com/25924130/



## 👉 MacOS doesn't support QEMU security features
#macos #qemu 

 Since macOS doesn't support `QEMU` security features, we need to disable them: (???🤷)
``` shell
echo 'security_driver = "none"' >> /opt/homebrew/etc/libvirt/qemu.conf
echo "dynamic_ownership = 0" >> /opt/homebrew/etc/libvirt/qemu.conf
echo "remember_owner = 0" >> /opt/homebrew/etc/libvirt/qemu.conf
```


[MacOS doesn't support QEMU security features]: https://gitlab.com/libvirt/libvirt/-/issues/241



## 👉 'VMware Authorization Service' (VMAuthdService) fails to start
#VMware

This turns out that i start a linux image wit a windows settings in VMware... :|


['VMware Authorization Service' (VMAuthdService) fails to start when upgrading VMware Workstation Pro/Player (56954)]: https://kb.vmware.com/s/article/56954

[The VMware Authorization Service is not running | Stackoverflow]: https://stackoverflow.com/questions/14888390/the-vmware-authorization-service-is-not-running

To fix this solution i followed: [this](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1007131)
1. Click Start and then type Run
2. Type services.msc and click OK
3. Scroll down the list and locate that the VMware Authorization service.
4. Click Start the service, unless the service is showing a status of Started.



## 👉 SMBus Host controller not enabled
#VMware #SMBus #linux 

[【Ubuntu】SMBus Host controller not enabled（虚拟机进入不了图形界面）]: https://blog.csdn.net/Cappuccino_jay/article/details/125477612




## 👉 unsupported configuration: domain configuration does not support video model 'qxl' | unsupported configuration: spice graphics are not supported with this QEMU
#qemu #video #qxl #VGA #spice

- i install a `qemu` image via `virt-install`, but it prompts an error says 'unsupported configuration: domain configuration does not support video model '`qxl`''
- this is because by default `qemu` use `qxl` video mode (?)
- so i then set `qemu` using `vga` video mode. (`--video vga`)
- then it prompts 'unsupported configuration: spice graphics are not supported with this QEMU' 🤷
	- a person from post suggests following dependency list:
```
osinfo-db-tools
osinfo-db
libosinfo
yajl
numactl
libvirt
libvirt-glib
libvirt-python
gtk-vnc
spice-protocol
spice
usbredir
spice-gtk
device-tree-compiler
libnfs
snappy
vde2
virglrenderer
qemu
virt-manager
acpica
ovmf
```
- install them. problem solved! (??)

[KVM/QEMU qxl error]: https://www.linuxquestions.org/questions/slackware-14/kvm-qemu-qxl-error-4175707277/
