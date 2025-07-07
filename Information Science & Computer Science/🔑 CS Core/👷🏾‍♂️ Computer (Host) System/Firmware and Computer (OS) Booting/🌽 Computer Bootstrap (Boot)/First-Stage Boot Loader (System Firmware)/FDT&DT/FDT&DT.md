# FDT&DT

[TOC]



## Res
📂 [Devicetree Specification unknown-rev]([https://devicetree-specification.readthedocs.io/en/v0.3/introduction.html](https://devicetree-specification.readthedocs.io/en/latest/))



## Intro
> The core reason for the existence of Device Tree in Linux is to provide a way to describe non-discoverable hardware. This information was previously hard coded in source code.
> 
> Device Tree data can be represented in several different formats. It is derived from the device tree format used by Open Firmware to encapsulate platform information. The device tree data is typically created and maintained in a human readable format in `.dts` source files and `.dtsi` source include files. The Linux build system pre-processes the source with cpp.
> 
> The device tree source is compiled into a binary format contained in a `.dtb` blob file. The format of the data in the .dtb blob file is commonly referred to as a Flattened Device Tree (FDT). The Linux operating system uses the device tree data to find and register the devices in the system. The FDT is accessed in the raw form during the very early phases of boot, but is expanded into a kernel internal data structure known as the Expanded Device Tree (EDT) for more efficient access for later phases of the boot and after the system has completed booting.
> 
> Currently the Linux kernel can read device tree information in the ARM, x86, Microblaze, PowerPC, and Sparc architectures. There is interest in extending support for device trees to other platforms, to unify the handling of platform description across kernel architectures.



## Ref
[👍 Device Tree What It Is | Embedded Linux Wiki]: https://elinux.org/Device_Tree_What_It_Is
[👍 Linux and Devicetree | Linux Kernel Documentation]: https://docs.kernel.org/devicetree/usage-model.html
[5. Flattened Devicetree (DTB) Forma | devicetree specification]: https://devicetree-specification.readthedocs.io/en/v0.3/flattened-format.html

[what is the use of Flattened device tree - Linux Kernel](https://stackoverflow.com/a/22802650/16542494)
