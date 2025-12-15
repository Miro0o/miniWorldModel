# Windows Driver

[TOC]



## Res 
📂 https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/


### Related Topics



## Intro
> 🔗 https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/

This section includes general concepts to help you understand kernel-mode programming and describes specific techniques of kernel programming. For a general overview of Windows Drivers, see [Getting Started with Windows Drivers](https://learn.microsoft.com/en-us/windows-hardware/drivers/develop/getting-started-with-windows-drivers), which provides a general overview of Windows components, lists the types of device drivers used in Windows, discusses the goals of Windows device drivers, and discusses generic sample device drivers included in the kit.

This section contains conceptual information that describes and helps you build kernel-mode drivers.

- An  **Overview** containing:
    - [An overview of Windows Components](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/overview-of-windows-components)
    - [Design Goals for Kernel-Mode Drivers](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/design-goals-for-kernel-mode-drivers)
    - A catalogue of [Sample Kernel-Mode Drivers](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/sample-kernel-mode-drivers)
    - [Kernel Driver Development Best Practices](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/surface-team-driver-development-best-practices), as compiled by the Microsoft Surface team
- **Kernel-Mode Components** describes the primary kernel-mode managers and components of the Windows operating system.
	- ↗ [Windows Kernel /Intro: Windows Components & System Architecture](../../Windows%20NT%20(New%20Technology)%20Kernel.md#Intro:%20Windows%20Components%20&%20System%20Architecture)
- [**Writing WDM Drivers**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/writing-wdm-drivers) and [Introduction to WDM](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-wdm) provide information needed to write drivers using the Windows Driver Model (WDM).
- [**Device Objects**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-device-objects) and the other topics in **Device Objects and Device Stacks** describe how the operating system represents devices by device objects.
- [**Memory Management for Windows Drivers**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/managing-memory-for-drivers) illustrates how kernel-mode drivers allocate memory for purposes such as storing internal data, buffering data during I/O operations, and sharing memory with other kernel-mode and user-mode components.
- **Security** From [Controlling Device Access](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/controlling-device-access) and [Privileges](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/privileges) to [SDDL for Device objects](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/sddl-for-device-objects), ensure that your drivers are as secure as possible.
- [**Handling IRPs**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/handling-irps) describes how kernel-mode drivers handle I/O request packets (IRPs).
- **DMA** Direct Memory Access (DMA) is a critical aspect of driver development, and [the topics in this node](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-adapter-objects) cover DMA from A to Z.
- [**Controller Objects**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-controller-objects) represent a physical device controller with attached devices.
- [**Interrupt Service Routines (ISRs)**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-interrupt-service-routines) handle interrupts for drivers of a physical device that receives interrupts.
- [**Message-Signaled Interrupts**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-message-signaled-interrupts) trigger an interrupt by writing a value to a particular memory address.
- [**Deferred Procedure Calls (DPC Objects)**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-dpc-objects) can be queued from ISRs and are executed at a later time and at a lower IRQL than the ISR.
- [**Plug and Play (PnP)**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-plug-and-play) focuses on the system software support for PnP and how drivers use that support to implement PnP.
- [**Power Management**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-power-management) describes the architecture that provides a comprehensive approach to system and device power management.
- [**Windows Management Instrumentation (WMI)**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/implementing-wmi) are extensions to your kernel-mode driver, which enable your driver to become a WMI provider. A WMI provider makes measurement and instrumentation data available to WMI consumers, such as user-mode applications.
- [**Driver Programming Techniques**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/using-nt-and-zw-versions-of-the-native-system-services-routines) Programming drivers in the kernel mode of Windows requires techniques that sometimes differ significantly from those of ordinary user-mode programming.
- [**Bulk memory volatile accessor functions (v3)**](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/bulk-memory-volatile-accessor-functions-v3) describes prerelease bulk memory volatile accessor functions that are available starting in Windows 11 Insider Preview.



## Ref
