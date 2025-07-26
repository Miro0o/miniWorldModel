# Windows NT (New Technology) Kernel

[TOC]



## Res
### Related Topics
↗ [Windows Security](../../../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security/🪟%20Windows%20Security/Windows%20Security.md)
↗ [Operating System Kernel (Kernel Mode)](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
↗ [Operating System & OS Kernel (Theory Part)](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)



## Intro: Windows Components & System Architecture
> 🔗 https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/
> 📎 https://en.wikipedia.org/wiki/Architecture_of_Windows_NT


### Windows NT Architecture
![|600](../../../../../../../../Assets/Pics/Pasted%20image%2020240601141419.png)

### ⭐️ Windows Components
![](../../../../../../../../Assets/Pics/Screenshot%202023-03-02%20at%208.35.31%20PM.png)
<small>Windows Internals Architecture</small>
#### Windows Kernel Mode Components (Managers + Libraries)

| Component                                                                                                                                                           | Description                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Subsystem /Managers**                                                                                                                                             |                                                                                                                                                                                                                               |
| [Windows Kernel-Mode Object Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-object-manager)                          | Manages objects: files, devices, synchronization mechanisms, registry keys, and so on.                                                                                                                                        |
| [Windows Kernel-Mode Memory Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-memory-manager)                          | Manages physical memory for the operating system.                                                                                                                                                                             |
| [Windows Kernel-Mode Process and Thread Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-process-and-thread-manager)  | Handles the execution of all threads in a process.                                                                                                                                                                            |
| [Windows Kernel-Mode I/O Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-i-o-manager)                                | Manages the communication between applications and the interfaces provided by device drivers.                                                                                                                                 |
| [Windows Kernel-Mode Plug and Play Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-plug-and-play-manager)            | A subsystem of the I/O manager, the Plug and Play (PnP) Manager enables a PC to recognize when a device is added to the system.                                                                                               |
| [Windows Kernel-Mode Power Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-power-manager)                            | Manages the orderly change in power status for all devices that support power state changes.                                                                                                                                  |
| [Windows Kernel-Mode Configuration Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-configuration-manager) (Registry) | Manages the registry, such as monitoring changes in the registry or registering callbacks on specific registry data.                                                                                                          |
| [Windows Kernel-Mode Kernel Transaction Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-kernel-transaction-manager)  | Implements transaction processing in kernel mode.                                                                                                                                                                             |
| [Windows Kernel-Mode Security Reference Monitor](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-security-reference-monitor)  | Provides routines for your driver to work with access control.                                                                                                                                                                |
| **Libraries**                                                                                                                                                       |                                                                                                                                                                                                                               |
| [Windows Kernel-Mode Kernel Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-kernel-library)                          | Implements the core functionality that everything else in the operating system depends upon. The Microsoft Windows kernel provides basic low-level operations such as scheduling threads or routing hardware interrupts.      |
| [Windows Kernel-Mode Executive Support Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-executive-support-library)    | Refers to kernel-mode components that provide a variety of services to device drivers, including: object management, memory management, process and thread management, input/output management, and configuration management. |
| [Windows Kernel-Mode Run-Time Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-run-time-library)                      | A set of common utility routines needed by various kernel-mode components.                                                                                                                                                    |
| [Windows Kernel-Mode Safe String Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-safe-string-library)                | A safe string library to provide greater security in kernel-mode development.                                                                                                                                                 |
| [Windows Kernel-Mode DMA Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-dma-library)                                | A direct memory access (DMA) library for device driver developers.                                                                                                                                                            |
| [Windows Kernel-Mode HAL Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-hal-library)                                | A hardware abstraction layer (HAL) for kernel-mode driver development.                                                                                                                                                        |
| [Windows Kernel-Mode CLFS Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-clfs-library)                              | A transactional logging system, the Common Log File System (CLFS).                                                                                                                                                            |
| [Windows Kernel-Mode WMI Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-wmi-library)                                | A general mechanism for managing components, called Windows Management Instrumentation (WMI).                                                                                                                                 |
#### Windows User Mode Processes
Windows supports four basic types of user-mode processes:
1. **Special system processes**: User-mode services needed to manage the system, such as the session manager, the authentication subsystem, the service manager, and the logon process.
2. **Service processes**: The printers pooler, the event logger, user-mode components that cooperate with device drivers, various network services, and many others. Services are used by both Microsoft and external software developers to extend system functionality, as they are the only way to run background user-mode activity on a Windows system. 
3. **Environment subsystems**: Provide different OS personalities (environments). The supported subsystems are Win32 and POSIX. Each environment subsystem includes a subsystem process shared among all applications using the subsystem and dynamic link libraries (DLLs) that convert the user application calls to ALPC calls on the subsystem process, and/or native Windows calls. 
4. **User applications**: Executables (EXEs) and DLLs that provide the functionality users run to make use of the system. EXEs and DLLs are generally targeted at a specific environment subsystem; although some of the programs that are provided as part of the OS use the native system interfaces (NT API). There is also support for running 32-bit programs on 64-bit systems.


### C/S Model


### Threads and SMP


### ☮️ Windows Objects



## Ref
[Kernel-Mode Driver Architecture Design Guide | Microsoft Documentation]: https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/
