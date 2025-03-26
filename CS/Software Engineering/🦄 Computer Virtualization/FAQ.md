# FAQ

[TOC]



## 👉 Set up `QEMU` on various OS
#qemu  #macos 
### macOS

1.**Install qemu**
```shell
brew install qemu
qemu-system-x86_64 --version
QEMU emulator version 6.0.0
Copyright (c) 2003-2021 Fabrice Bellard and the QEMU Project developers
```

(?) Since macOS doesn't support QEMU security features, we need to disable them:
``` shell
echo 'security_driver = "none"' >> /opt/homebrew/etc/libvirt/qemu.conf
echo "dynamic_ownership = 0" >> /opt/homebrew/etc/libvirt/qemu.conf
echo "remember_owner = 0" >> /opt/homebrew/etc/libvirt/qemu.conf
```


2. **Create Virtual Disk (optional)**
```shell
qemu-img create -f qcow2 ~/QEMU/ubuntu-desktop-20.04.qcow2 100G
```

**[Convert .iso to .qcow2](https://stackoverflow.com/questions/45969124/convert-iso-to-qcow2)**
```shell
qemu-img convert xxx.iso xxx.qcow2
```

3.**Create VM**
> ⚠️ Note here `accel=hvf` is declared for macOS, while most Linux use `KVM` as an accelerator.  [Check out more about KVM here](../../../📍%20Native%20Hypervisor/KVM/KVM.md) 

```shell
# config may differ from variant os

qemu-system-x86_64 \
  -m 4G \
  -vga virtio \
  -display default,show-cursor=on \
  -usb \
  -device usb-tablet \
  -machine type=q35,accel=hvf \
  -smp 4 \
  -drive file=ubuntu-desktop-20.04.qcow2,if=virtio \
  -cpu Nehalem-v1 \
  -net user,hostfwd=tcp::2222-:22 \
  -net nic \
  -cdrom ubuntu-20.04.2.0-desktop-amd64.iso
```


4. **Boot VM (Once an instance had been created)**
```shell
qemu-system-x86_64 \
  -m 4G \
  -vga virtio \
  -display default,show-cursor=on \
  -usb \
  -device usb-tablet \
  -machine type=q35,accel=hvf \
  -smp 4 \
  -drive file=ubuntu-desktop-20.04.qcow2,if=virtio \
  -cpu Nehalem-v1 \
  -net user,hostfwd=tcp::2222-:22 \
  -net nic
```



## 👉 `QEMU` + `Libvirt` on various OS | How to manage `qemu/kvm` VM with `libvirt`
#qemu #macos #libvirt #virsh #virt-install 

### macOS
Following explained how to set up `qemu/kvm` virtual machine on macOS along with `libvirt`. Img used here is seedlab-ubuntu-20.04 from ↗ [seedlab /🫄🏻 Lab Setup](../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🎯%20Cyber%20Ranges%20&%20Labs/🧪%20Ranges%20&%20Security%20Labs/SEED%20Project/SEED%20Project.md#🫄🏻%20Lab%20Setup)


**#1 Installing `libvirt` and `QEMU`**
1. First, install [homebrew](https://brew.sh/), which is a package manager for macOS.
2. Run `brew install qemu gcc libvirt`.
3. Since macOS doesn't support `QEMU` security features, we need to disable them: (???🤷)
``` shell
echo 'security_driver = "none"' >> /opt/homebrew/etc/libvirt/qemu.conf
echo "dynamic_ownership = 0" >> /opt/homebrew/etc/libvirt/qemu.conf
echo "remember_owner = 0" >> /opt/homebrew/etc/libvirt/qemu.conf
```
4. Finally start the `libvirt` service, with `brew services start libvirt`. It will start after boot as well.


**#2 Installing Ubuntu Server 20.04**
There are several methods to achieve this. 

1. Using domain xml config file
```xml
<domain type='hvf' xmlns:qemu='http://libvirt.org/schemas/domain/qemu/1.0'>
<name>ubuntu</name>
<uuid>2005CC24-522A-4485-9B9A-E60A61D9F8CF</uuid>
<memory unit='GiB'>2</memory>
<cpu mode='custom' match="exact">
   <model>host</model>
</cpu>
<vcpu>2</vcpu>
<features>
	<gic version='2'/>
</features>
<os>
	<type arch='x86_64' machine='virt'>hvm</type>
</os>
<clock offset='localtime'/>
<devices>
	<emulator>/usr/local/bin/qemu-system-x86_64</emulator>
	<controller type='usb' model='qemu-xhci'/>
	<disk type='file' device='disk'>
		<driver name='qemu' type='qcow2'/>
	<source file='/Users/mir0/workspace/VMs/SEED-Ubuntu20.04/SEED-ubuntu20.04.qcow2'/>
		<target dev='vda' bus='virtio'/>
		<boot order='1'/>
	</disk>
	<disk type='file' device='disk'>
		<driver name='qemu' type='raw'/>
		<source file='/Users/mir0/workspace/VMs/SEED-Ubuntu20.04/seed-lab-disk_img.qcow2'/>
		<target dev='vdb' bus='virtio'/>
		<boot order='2'/>
	</disk>
	<console type='pty'>
		<target type='serial'/>
	</console>
	<input type='tablet' bus='usb'/>
	<input type='keyboard' bus='usb'/>

<!-- <graphics type='vnc' port='5900' listen='127.0.0.1'/> -->

<graphics type='vnc' port='5900' listen='127.0.0.1'/>
	<video>
		<model type='virtio' vram='32768'/>
	</video>
</devices>
<seclabel type='none'/>
<qemu:commandline>
	<qemu:arg value='-netdev'/>
	<qemu:arg value='user,id=n1,hostfwd=tcp::2222-:22'/>
	<qemu:arg value='-device'/>
	<qemu:arg value='virtio-net-pci,netdev=n1,bus=pcie.0,addr=0x19'/>
</qemu:commandline>
</domain>
```
<small>An example libvirt domain xml config file. configuration may be wrong</small>

On the completion of domain xml file, use these cmds to manage the instance (as 'domain' referred here)
```shell
virsh define <domain xml file name>
virsh start <instance name>
virsh destroy <instance name>
virsh undefine <instance name>
```

> What is domain xml file?
> ↗ [Domain XML Schemas](Hardware%20Level%20Virtualization%20&%20Hypervisors/VMM%20Management%20&%20Orchestration/Libvirt%20Project/Libvirt%20Development/XML%20Schemas/Domain%20XML%20Schemas/Domain%20XML%20Schemas.md)
> 🔗 [Example domain XML config](https://libvirt.org/drvqemu.html#id25)


2. Using `virt-install` to pass `qemu` commands line directly

3. Using `virsh domxml-to-native` to convert `qemu` commands line to `libvirt` domain xml format


**#3 Multiple VMs**
If you want to create multiple VMs, create an XML file for each machine with a unique UUID, VM name, and VNC port. Also, change the `hostfwd` argument so that each VM exposes a different port for SSH, e.g. `2223` instead of `2222`. After you have defined them all, you can get a list of the VMs that are currently running with `virsh list`.


**#4 Troubleshooting**
Newer versions of Ubuntu Server may require disabling the `irqbalance` service in order to gracefully shutdown:
```
sudo systemctl disable irqbalance
```


[Qemu, virt-manager, and libvirt on macOS with Apple silicon M2]: https://medium.com/@aryangodara_19887/qemu-virt-manager-and-libvirt-on-macos-with-apple-silicon-m2-dc677e6b8559
```shell
virt-manager -c "qemu:///session" --no-fork
```
> Lastly, if you run into a problem that involves you booting up the VM; but ending up with a message that involves `startup.nsh`and you can’t figure out how to get out of it, these resources might be helpful:
> 
> 1. https://www.youtube.com/watch?v=A3z64QUTJsM
> 2. https://community.clearlinux.org/t/efi-in-virt-manager/1788/3
>
> Also, for some reason, it seems that 3d is not supported by virtio, so continue with 3d disabled.


[👍 How to Use Virsh and Manage Linux KVM]: https://adamtheautomator.com/virsh/

[👍 ARM64 VM on macOS with libvirt + QEMU]: https://www.naut.ca/blog/2021/12/09/arm64-vm-on-macos-with-libvirt-qemu/

- References:
	- [Grasping Tech: Creating a Ubuntu Desktop 18.04 Virtual Machine on macOS with QEMU](https://graspingtech.com/ubuntu-desktop-18.04-virtual-machine-macos-qemu/)
	- [Homebrew Discussion: Failed to connect socket to '/var/run/libvirt/libvirt-sock'](https://discourse.brew.sh/t/failed-to-connect-socket-to-var-run-libvirt-libvirt-sock-no-such-file-or-directory/1297/3)
	- [StackExchange: libvirt on Apple Silicon](https://stackoverflow.com/questions/66833240/libvirt-on-apple-silicon-with-qemu-system-aarch64)
	- [GitLab Issue: libvirt doesn't work with apple silicon](https://gitlab.com/libvirt/libvirt/-/issues/168)

[👍 👍 Configuring Virtual Machines with `virsh`]: https://documentation.suse.com/sles/15-SP1/html/SLES-all/cha-libvirt-config-virsh.html#libvirt-video-virsh

[How to run linux VM on MacOS with Vagrant and QEMU? | Superuser]: https://superuser.com/q/1701704



## 👉 Convert `qemu` native command line arguments to `libvirt` domain xml format or `virt-install` commands
#qemu #libvirt #virt-install





[👍 14.5.21. Converting QEMU Arguments to Domain XML | Red Hat Customer Portal]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/virtualization_administration_guide/sub-sect-domain_commands-converting_qemu_arguments_to_domain_xml

The `virsh domxml-from-native` provides a way to convert an existing set of QEMU arguments into a guest description using `libvirt` Domain XML that can then be used by `libvirt`. Note that this command is intended to be used only to convert existing `qemu` guests previously started from the command line in order to allow them to be managed through `libvirt`. The method described here should not be used to create new guests from scratch. New guests should be created using either `virsh` or `virt-manager`. Additional information can be found [here](http://libvirt.org/drvqemu.html#xmlimport).

```shell
virsh domxml-from-native qemu-argv demo.args
```

[👍 23.21. A Sample Virtual Machine XML Configuration | Red Hat Customer Portal]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-manipulating_the_domain_xml-a_sample_configuration_file


[Qemu Native to Libvirt XML | Stackoverflow]: https://stackoverflow.com/a/58952253

Unfortunately support for the `domxml-from-native` command has been removed from recentish libvirt, because we found that in practice it was too unreliable and incomplete to be useful.

Your best bet for importing a pre-existing disk image to libvirt is to use the "`virt-install`" command with its "`--import`" flag. You can use the various other args to define the disks, NICs, etc.


[Converting QEMU Solaris VM to libvirt | StackExchange]: https://serverfault.com/q/1136905



## 👉 VGA and other display devices in `qemu` | Set `qemu` for vmware display controller 

#qemu #display #VGA #VMSVGA 



[👍 VGA and other display devices in qemu]: https://www.kraxel.org/blog/2019/09/display-devices-in-qemu/#VGA

There are alot of emulated display devices available in qemu. This blog post introduces them, explains the differences between them and the use cases they are good for.

[👍 What are differences between VBoxVGA, VMSVGA and VBoxSVGA in VirtualBox?]: https://superuser.com/a/1403131



## 👉 Access Host from Guest in `qemu` | Host & Guest file transmission
#qemu #network #guest #host #file_sharing #host_access

tbd..

### Host Access

> 🔗 [How can I share the localhost of my host computer with a QEMU image?](https://stackoverflow.com/questions/67520919/how-can-i-share-the-localhost-of-my-host-computer-with-a-qemu-image)

A QEMU image running the 'user-mode' networking (as in your command line example) already has access to the host machine. It can access it either via any (non-loopback) IP address the host has, or by using the special 'gateway' IP address. If you're using the default 10.0.2.0/24 network setting then the 'gateway' is 10.0.2.2. I haven't confirmed but suspect that for a non-default net setting it will still be on .2, so in this example 192.168.76.2.

You cannot literally make 'localhost' in the guest point to the host PC, because 'localhost' for the guest is the guest itself, and having it point somewhere else would likely confuse software running in the guest.


### File Transmission
> 🔗 [How to send/upload a file from Host OS to guest OS in KVM?(not folder sharing)](https://unix.stackexchange.com/questions/207012/how-to-send-upload-a-file-from-host-os-to-guest-os-in-kvmnot-folder-sharing) 

Just hit upon two different ways:

- Transfer files via network. For example you can run httpd on the host and use any web browser or `wget`/`curl` to download files. Probably most easy and handy.

- Build ISO image on the host with files you want to transfer. Then attach it to the guest's CD drive.

```
genisoimage -o image.iso -r /path/to/dir
virsh attach-disk guest image.iso hdc --driver file --type cdrom --mode readonly
```

  - You can use `mkisofs` instead of `genisoimage`.
  - You can use GUI like `virt-manager` instead of `virsh` CUI to attach an ISO image to the guest.
  - You need to create a VM beforehand, supply that VM's ID as `guest`. You can see existing VMs by `virsh list --all`.


[👍 👍「Solved」 share host directory with guest in qemu]: https://forums.debian.net/viewtopic.php?t=154016

[👍 QEMU/KVM + virtio-fs - Sharing a host directory with a virtual machine]: https://www.tauceti.blog/posts/qemu-kvm-share-host-directory-with-vm-with-virtio/

[👍 Shared Folder in QEMU Between Linux Host and Windows Guest]: https://shallowsky.com/blog/linux/qemu-shared-folder.html

[👍 Qemu虚拟机与宿主机之间文件传输]: http://pwn4.fun/2020/05/27/Qemu虚拟机与宿主机之间文件传输/

Qemu虚拟机与宿主机之间实现文件传输，大概有四类方法：  
1.虚拟机与宿主机之间，使用网络来进行文件传输。这个需要先在宿主机上配置网络桥架，在qemu-kvm启动配置网卡就可以实现文件传输。  
2.使用9psetup协议实现虚拟机与宿主机之间文件传输。该方法先要宿主机需要在内核中配置了9p选项，qemu在编译时需要支持ATTR/XATTR。  
3.通过在Qemu虚拟机中挂载宿主机中的一个文件为硬盘。  
4.第四类方法是一种新方法，是用virtio-fs通过FUSE协议进行传输。

[qemu虚拟机文件拷贝]: https://juejin.cn/s/qemu虚拟机文件拷贝

1. scp
2. samba & SMb

[How to share a directory with the host without networking in QEMU?]: https://superuser.com/questions/628169/how-to-share-a-directory-with-the-host-without-networking-in-qemu



## 👉 Install Windows 7 in QEMU
#qemu #windows7

#TODO 


[How to install Windows 7 in QEMU](https://computernewb.com/wiki/QEMU/Guests/Windows_7)



## 👉 VM Network Configuration | Shared Network, Bridged Network, Host-only Network
#network #config #vm




[👍 虚拟机网络连接方式或parallels Desktop]: https://blog.csdn.net/Debug_Snail/article/details/84995622



## 👉 copy&paste from the host to a KVM guest
#qemu #KVM 

The solution is simple. Just install the package `spice-vdagent` in the guest virtual machine:
``` shell
sudo apt install spice-vdagent
```
The clipboard is automatically shared - we can copy and paste between the host and the guest.

---
In year 2021, qemu uses `qemu-vdagent` chardev for copy&paste, which turns off clipboard by default, so simply installing `spice-vdagent` package in guest OS does not work.

The solution of 2021 is:
1. Install `spice-vdagent` package as the current answer said,
2. Have qemu support spice (--enable-spice --enable-spice-protocol in `./configure` option),   
3. Launch qemu using:
```
qemu-system-x86_64 [ ... ] \
  -chardev qemu-vdagent,id=ch1,name=vdagent,clipboard=on \
  -device virtio-serial-pci \
  -device virtserialport,chardev=ch1,id=ch1,name=com.redhat.spice.0
```
P.S. A side effect on my qemu is that the mouse moves more smoothly thanks to vdagent.

Reference: [https://www.kraxel.org/blog/2021/05/qemu-cut-paste/](https://www.kraxel.org/blog/2021/05/qemu-cut-paste/)


[How can I copy&paste from the host to a KVM guest?]: https://askubuntu.com/questions/858649/how-can-i-copypaste-from-the-host-to-a-kvm-guest
[QEMU Clipboard Sharing on MacOS Host and Linux Guest]: https://apple.stackexchange.com/questions/431446/qemu-clipboard-sharing-on-macos-host-and-linux-guest

---
However this doesn't work for me...
TBD..