# Domain XML Schemas

[TOC]



## Res
🔗 https://libvirt.org/formatdomain.html

> The doc provides thorough description of domain xml file formats. This notes track problems i encountered personally.



## Operating System Booting
### BIOS Bootloader
```xml
<!-- QEMU with UEFI manual firmware, secure boot and with network backed NVRAM'-->
<os firmware='efi'>
  <type>hvm</type>
  
  <loader readonly='yes' secure='yes' type='pflash'>/usr/share/OVMF/OVMF_CODE.fd</loader>
  
  <nvram type='network'>
	  <source protocol='iscsi' name='iqn.2013-07.com.example:iscsi-nopool/0'>
		  <host name='example.com' port='6000'/>
		  <auth username='myname'>
			  <secret type='iscsi' usage='mycluster_myname'/>
		  </auth>
	  </source>
  </nvram>
  
  <boot dev='hd'/>

</os>
```

#### `type`
The content of the type element specifies the type of operating system to be booted in the virtual machine. 
- `hvm` indicates that the OS is one designed to run on bare metal, so requires full virtualization. 
- `linux` (badly named!) refers to an OS that supports the Xen 3 hypervisor guest ABI.

There are also two optional attributes, 1️⃣ **`arch`** specifying the CPU architecture to virtualization, and 2️⃣ **`machine`** referring to the machine type. 
- The [Capabilities XML](https://libvirt.org/formatcaps.html) provides details on allowed values for these. 
- If `arch` is omitted then for most hypervisor drivers, the host native arch will be chosen.
	- For the `test`, `ESX` and `VMWare` hypervisor drivers, however, the `i686` arch will always be chosen even on an `x86_64` host. Since 0.0.1


> 🤷‍♀️ The [Capabilities XML](https://libvirt.org/formatcaps.html) however does not provide informations on that. Though one can use `virsh capabilities | cat` to check supported `machine` & `arch` on host. 



## Ref
[Example domain XML config]: https://libvirt.org/drvqemu.html#id25

[20.21. Example Domain XML Configuration]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/virtualization_administration_guide/section-libvirt-dom-xml-example

