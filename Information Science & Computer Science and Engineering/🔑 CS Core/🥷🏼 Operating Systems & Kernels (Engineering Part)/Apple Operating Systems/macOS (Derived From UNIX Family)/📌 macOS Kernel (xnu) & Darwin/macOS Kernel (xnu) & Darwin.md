# macOS Kernel (xnu) & Darwin

[TOC]



## Res
🚧 https://github.com/apple-oss-distributions/xnu


### Related Topics
↗ [MacOS & iOS Security](../../../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/🍎%20MacOS%20&%20iOS%20Security/MacOS%20&%20iOS%20Security.md)
↗ [Firmware and Computer (OS) Booting](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)


### Learning Resources
💻 👍 https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/KernelProgramming/Architecture/Architecture.html



## Intro
> ↗ https://github.com/redcanaryco/mac-monitor/wiki/3.-macOS-System-Architecture#user-space--kernel-space-communication

> The _incomplete_ XNU source code can be found on Apple's Open Source Software Distributions account on GitHub: [https://github.com/apple-oss-distributions/xnu](https://github.com/apple-oss-distributions/xnu).

XNU is the hybrid heart (kernel) of macOS consisting of BSD and the Mach microkernel. A brief overview of each of these components is listed below and shown in the above diagram.

XNU kernel is part of the Darwin operating system for use in macOS and iOS operating systems. XNU is an acronym for `X is Not Unix`. XNU is a hybrid kernel combining the **Mach kernel** developed at Carnegie Mellon University with components from FreeBSD and a C++ API for writing drivers called **IOKit**. XNU runs on x86_64 and ARM64 for both single processor and multi-processor configurations.

![[../../../../../../../../Assets/Pics/os X archi.jpeg]]

![|600](../../../../../../../../Assets/Pics/Pasted%20image%2020240622022024.png)
<small>OS X architecture</small>


### Mach
Mach's role in the hybrid kernel architecture is multifaceted in that it provides abstractions from "process execution" to IOKit drivers to time primitives. Fundamentally, processes on macOS (exposed by the BSD side of the kernel) are made up of Mach Tasks / Threads. This tight relationship is exposed further by IPC primitives like ports, which facilitate secure communication channels for data exchange between tasks.


### BSD
This is the primary section we're interested in here as it implements the **KAuth (Kernel Authorizatuon)** KPI, **BSM (Basic Security Module)**, and **MACF (Mandatory Access Control Framework)**. BSD's role in the kernel is also pretty vast. It exposes POSIX compliance via the BSD system call table, processes/threads, file permissions, etc in addition to manging system resources and the implementation of the file system ([APFS as of 2017](https://www.apple.com/newsroom/2017/09/macos-high-sierra-now-available-as-a-free-update/#:~:text=Apple%20File%20System%20(APFS)) with the introduction of 10.13 High Sierra). Additionally, here you'll notice each part of the BSD component registering their scopes to BSM using `kauth_register_scope`.


### User space → kernel space communication
User space has a few primary ways to communicate with the kernel (hands wave):
- **User Space → Process → Thread → IPC → System Call → Trap → Kernel Space**
- **User Space → Process → Thread → Exception → Trap → Kernel Space**
- **User Space → Process → Thread → Interrupt → Trap → Kernel Space**
- **User Space → Process → Thread → System Call → Trap → Kernel Space**

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240622021140.png)



## System Boot: Security In-depth
> ↗ [Firmware and Computer (OS) Booting](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)

We're including this section as brief overview for legacy data sources reliant on Kernel Extensions (KEXTs). KEXTs are denied from loading by the default LocalPolicy object on AppleSilicon (signed by the Secure Enclave) and the T2 chip on Intel. Apple Platforms leverage a defense in-depth approach for their secure boot (iBoot) implementation. Starting with hardware each stage in the boot chain validates the next. iBoot exists to help thwart downgrade attacks, boot time infection, and maintain system integrity. Changing the boot security level of macOS requires booting into recoveryOS (which can have it's own password).

| **Apple Silicon Boot**                                                 | **Intel Boot**                                                         |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| https://support.apple.com/guide/security/boot-process-secac71d5623/web | https://support.apple.com/guide/security/boot-process-sec5d0fab7c6/web |
| ![](../../../../../../../../Assets/Pics/Pasted%20image%2020240622021302.png) | ![](../../../../../../../../Assets/Pics/Pasted%20image%2020240622021325.png) |

### Apple Silicon
> 🔗 https://support.apple.com/guide/security/boot-modes-sec10869885b/web

> These settings can be modified with ["Startup Security Utility"](https://support.apple.com/guide/mac-help/change-security-settings-startup-disk-a-mac-mchl768f7291/mac) in recoveryOS. To boot into recoveryOS on Apple Silicon hold the power button until you see a logo. You can then set the Security Policy for the boot disk.

- (_Default_) **Full Security**: Similar to the iOS boot process -- only allows booting the latest installed OS (disallows downgrades). Utilizes a personalized OS signature from Apple -- requires an internet connection at OS install time. Signatures are personalized when they include a specific [ECID (Exclusive Chip Identifier)](https://support.apple.com/guide/security/aside/sec21774ef95/1/web/1).
- **Reduced Security**: Instruct iBoot to allow for OS downgrades. The global signature needs to be trusted, but the OS does not need to be the latest. Utilizes the OS' global signatures for validation.
    - Allow loading of notarized kernel extensions.
    - Allow remote management of kernel extensions and automatic software updates.
- **Permissive Security** (requires that SIP is "disabled"): Allows for booting custom XNU kernels. To do this iBoot accepts objects signed by Secure Enclave with the same private key used to sign the LocalPolicy object. Once SIP is disabled this boot security option will be enabled in Startup Security Utility.
    - Allow loading of notarized kernel extensions.
    - Allow remote management of kernel extensions and automatic software updates.


### Intel
> These settings can be modified with "Startup Security Utility" in recoveryOS. To boot into recoveryOS [on Intel hold (⌘ + R)](https://support.apple.com/en-us/102603#:~:text=Intel%2Dbased%20Mac-,Command%20(%E2%8C%98)%2DR,-%3A%20Start%20up%20from) until you see a logo.

- (Default) **Full Security**: Similar to the iOS boot process -- only allows booting the latest installed OS (disallows downgrades). Utilizes personalized OS signature from Apple servers -- requires an internet connection at OS install time.
- **Medium Security**: "Allows any version of signed operating system software ever trusted by Apple to run.
- **No Security**: Does not enforce any requirements on the bootable OS.
- **Boot media** options:
    - T2 external boot enforcement: Disallow USB, Thunderbolt, PCIe, or SATA.
    - Allow booting from any device / removable media.



## Ref
[👍 3. macOS System Architecture]: https://github.com/redcanaryco/mac-monitor/wiki/3.-macOS-System-Architecture#user-space--kernel-space-communication
