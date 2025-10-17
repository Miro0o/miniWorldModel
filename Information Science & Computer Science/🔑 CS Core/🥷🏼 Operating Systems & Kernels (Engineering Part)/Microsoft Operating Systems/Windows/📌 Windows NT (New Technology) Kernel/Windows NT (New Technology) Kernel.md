# Windows NT (New Technology) Kernel

[TOC]



## Res
📂 https://learn.microsoft.com/en-us/windows/
- Windows Client
	- [Security](https://learn.microsoft.com/en-us/windows/security/) ✅
		- [Windows 11 security book 🔗](https://learn.microsoft.com/en-us/windows/security/book/)
		- [Security features licensing and edition requirements](https://learn.microsoft.com/en-us/windows/security/licensing-and-edition-requirements)
		- Security foundations
		- Hardware security
		- Operating system security
		- Application security
		- Identity protection
		- Cloud security
		- [Windows Privacy 🔗](https://learn.microsoft.com/en-us/windows/privacy)
	- [Privacy](https://learn.microsoft.com/en-us/windows/privacy/)
	- [Configuration](https://learn.microsoft.com/en-us/windows/configuration/)
	- Deployment
		- Windows Autopilot
		- Windows Autopatch
		- Deploy Hub
	- Client Management
	- Windows for Education
	- Windows Clients for IOT pros
	- Troubleshooting
- [Windows Application Development](https://learn.microsoft.com/en-us/windows/apps/) ✅
	- App developer tools
		- Windows App SDK
		- WinUI
		- MSIX
		- Windows Terminal
		- Windows Al
		- Windows Subsystem for Linux
		- Microsoft PowerToys
	- Platform
		- Desktop apps
			- [Win32 apps](https://learn.microsoft.com/en-us/windows/win32/) ✅
				- The Win32 API is the name given to the original platform for native C/C++ Windows applications that require direct access to Windows and hardware. It provides a first-class development experience without depending on a managed runtime environment such as .NET. That makes the Win32 API a great choice for applications that need the highest level of performance, and direct access to system hardware. You can use the Win32 API on 32-bit and 64-bit Windows.
				- [Get Started](https://learn.microsoft.com/en-us/windows/win32/desktop-programming)
				- [Design](https://learn.microsoft.com/en-us/windows/win32/uxguide/designprinciples)
				- Desktop
					- [Desktop application technologies](https://learn.microsoft.com/en-us/windows/win32/desktop-app-technologies) (see blow 🔗)
						- Accessibility
						- Desktop user interface
						- Desktop environment
						- Application installation and servicing
						- Audio and video
						- Data access and storage
						- Devices
						- Diagnostics
						- Documents and printing
						- [Graphics and gaming](https://learn.microsoft.com/en-us/windows/win32/graphics-and-multimedia) ✅
						- [Networking and Internet](https://learn.microsoft.com/en-us/windows/win32/networking) ✅
						- [Security and identity](https://learn.microsoft.com/en-us/windows/win32/security) ✅
						- [System services](https://learn.microsoft.com/en-us/windows/win32/system-services) ✅ (see blow 🔗)
							- Brief:
								- The Component Object Model (COM).
								- File compression.
								- Dynamic-link libraries.
								- Memory management.
								- Power management.
								- Secure Enclaves (Trusted Execution).
								- The creation and coordination of multiple threads of execution.
								- The development of service applications.
								- Windows messaging.
								- Obtaining Windows system information.
								- The Help API.
							- Specific:
								- COM
								- COM+
								- Activity Coordinator
								- Compression API
								- Distributed Transaction Coordinator
								- Microsoft.Dtc.PowerShell.Diagnostics
								- Microsoft.MsDtcManagement.Commands
								- [Dynamic Link Libraries](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-libraries)
								- Help API
								- Interprocess Communications
								- Kernel Transaction Manager
								- [Memory Management](https://learn.microsoft.com/en-us/windows/win32/memory/memory-management)
								- MultiPoint Services
								- Operation Recorder
								- Power Management
								- [Processes and Threads](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads)
								- Remote Desktop Services
								- [Secure Enclaves](https://learn.microsoft.com/en-us/windows/win32/trusted-execution/enclaves)
								- [Services](https://learn.microsoft.com/en-us/windows/win32/services/services)
								- [Synchronization](https://learn.microsoft.com/en-us/windows/win32/sync/synchronization)
								- Windows Desktop Sharing
								- Windows Notification Framework
								- Windows Subsystem for Linux
								- Windows System Informaation
									- [Handles and Objects](https://learn.microsoft.com/en-us/windows/win32/sysinfo/handles-and-objects)	
										- An object is a data structure that represents a system resource, such as a file, thread, or graphic image. An application cannot directly access object data or the system resource that an object represents. Instead, an application must obtain an object handle, which it can use to examine or modify the system resource.
									- ==[Registry](https://learn.microsoft.com/en-us/windows/win32/sysinfo/registry)==
										 - A system-defined database in which applications and the system store and retrieve configuration information.
									 - [System Information](https://learn.microsoft.com/en-us/windows/win32/sysinfo/system-information)
										 - Retrieves or sets system configuration, settings, version, and metrics.
									 - Time
										 - Retrieves or sets the system time.
									 - Time Provider
										 - Retrieves accurate time stamps from hardware or the network, and provides time stamps to other clients on the network.
									 - WaaS Assessment Platform
										 - The Windows as a Service (WaaS) Update Assessment Platform provides information on a device's Windows updates.
						- [AI and machine learning](https://learn.microsoft.com/en-us/windows/ai/)
					- [Develop with server technologies](https://learn.microsoft.com/en-us/windows/win32/server-and-system-technologies)
					- [API Index for desktop Windows applications](https://learn.microsoft.com/en-us/windows/win32/apiindex/api-index-portal)
					- [Windows Runtime C++ references](https://learn.microsoft.com/en-us/windows/win32/winrt/reference)
						- [Data types](https://learn.microsoft.com/en-us/windows/win32/winrt/data-types)
						- [Enumerations](https://learn.microsoft.com/en-us/windows/win32/winrt/enumerations)
						- [Functions](https://learn.microsoft.com/en-us/windows/win32/winrt/functions)
						- [Interfaces](https://learn.microsoft.com/en-us/windows/win32/winrt/interfaces)
						- [Structures](https://learn.microsoft.com/en-us/windows/win32/winrt/structures)
					- [Desktop Win32 code samples](https://learn.microsoft.com/en-us/windows/win32/desktop-win32-code-samples)
			- [WinUI](https://learn.microsoft.com/en-us/windows/apps/winui/)
				- WinUI is a native user experience (UX) framework for both Windows desktop and UWP applications.
			- WPF
			- Windows Forms
			- [UWP (Universal Windows Platform)](https://learn.microsoft.com/en-us/windows/uwp/)
		- Web development on Windows
		- Windows for loT
		- Mixed reality
		- Game development kit
- Windows Hardware Development
- Windows Servers
- Windows for IOT
- [Windows Insider Program](https://learn.microsoft.com/en-us/windows-insider/)
- [Windows 365](https://learn.microsoft.com/en-us/windows-365/)


📂 https://learn.microsoft.com/en-us/windows/win32/desktop-app-technologies
This section provides in-depth guidance and code examples about Windows features that are available to desktop applications by using the Win32 API.

| Topic                                                                                                                          | Description                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Accessibility](https://learn.microsoft.com/en-us/windows/win32/accessibility/accessibility)                                   | Provides guidance for Windows developers designing accessible applications, assistive technology developers building tools such as screen readers and magnifiers, and software test engineers creating automated scripts for testing Windows applications. |
| [Desktop user interface](https://learn.microsoft.com/en-us/windows/win32/windows-application-ui-development)                   | Provides information that enables you to develop graphical user interfaces for your apps, including features such as windows and messages, resources, and controls.                                                                                        |
| [Desktop environment](https://learn.microsoft.com/en-us/windows/win32/user-interface)                                          | Provides guidance for integrating and extending the desktop user-facing features of Windows, including the Taskbar, the desktop, and File Explorer.                                                                                                        |
| [Application installation and servicing](https://learn.microsoft.com/en-us/windows/win32/application-installing-and-servicing) | Provides information about using APIs and services provided by Windows to install, manage, and service your desktop apps.                                                                                                                                  |
| [Audio and video](https://learn.microsoft.com/en-us/windows/win32/audio-and-video)                                             | Provides guidance about using audio and video features provided by Windows.                                                                                                                                                                                |
| [Data access and storage](https://learn.microsoft.com/en-us/windows/win32/data-access-and-storage)                             | Provides information about data access and storage features you can use in your desktop applications, including file system management and cloud sync engines.                                                                                             |
| [Devices](https://learn.microsoft.com/en-us/windows/win32/devices)                                                             | Describes APIs for interacting with devices and sensors.                                                                                                                                                                                                   |
| [Diagnostics](https://learn.microsoft.com/en-us/windows/win32/diagnostics)                                                     | Provides guidance about debugging and error handling, performance profiling, network monitoring, and other diagnostics features.                                                                                                                           |
| [Documents and printing](https://learn.microsoft.com/en-us/windows/win32/printdocs/documents-and-printing)                     | Describes the documents and printing features of Windows that enable applications to save, view, and print.                                                                                                                                                |
| [Graphics and gaming](https://learn.microsoft.com/en-us/windows/win32/graphics-and-multimedia)                                 | Provides information about graphics and gaming features of Windows, including DirectX and digital imaging.                                                                                                                                                 |
| [Networking and Internet](https://learn.microsoft.com/en-us/windows/win32/networking)                                          | Provides guidance about the networking and Internet-related features of Windows, including network management, HTTP APIs, and Remote Procedure Call (RPC).                                                                                                 |
| [Security and identity](https://learn.microsoft.com/en-us/windows/win32/security)                                              | Provides information about authentication, authorization, cryptography, and other security features of Windows.                                                                                                                                            |
| [System services](https://learn.microsoft.com/en-us/windows/win32/system-services)                                             | Provides guidance about fundamental OS features such as process and threads, services, dynamic-link libraries, COM, the registry, and more.                                                                                                                |
| [AI and machine learning](https://learn.microsoft.com/en-us/windows/ai/)                                                       | Transform your Windows application with the power of artificial intelligence. Windows AI Foundry empowers you and your business to achieve more by providing intelligent solutions to complex problems.                                                    |

📂 https://learn.microsoft.com/en-us/windows/win32/system-services

| Topic                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [COM](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal)                                               | COM is a platform-independent, distributed, object-oriented system for creating binary software components that can interact. COM is the foundation technology for Microsoft's OLE (compound documents) and ActiveX (Internet-enabled components) technologies.                                                                                                                                                                                                                                                                                                                                                                       |
| [COM+](https://learn.microsoft.com/en-us/windows/win32/cossdk/component-services-portal)                                                     | COM+ is an evolution of Microsoft Component Object Model (COM) and Microsoft Transaction Server (MTS). COM+ builds on and extends applications written using COM, MTS, and other COM-based technologies. COM+ handles many of the resource management tasks that you previously had to program yourself, such as thread allocation and security. COM+ also makes your applications more scalable by providing thread pooling, object pooling, and just-in-time object activation. COM+ also helps protect the integrity of your data by providing transaction support, even if a transaction spans multiple databases over a network. |
| [Activity Coordinator](https://learn.microsoft.com/en-us/windows/win32/activity_coordinator/-activity-coordinator-portal)                    | The Activity Coordinator API coordinates execution of deferrable tasks on a system. Deferrable tasks are those tasks which don’t need to be run immediately. They can defer their execution to a time when the system is in a desired state where running the task does not interfere with other ongoing work.                                                                                                                                                                                                                                                                                                                        |
| [Compression API](https://learn.microsoft.com/en-us/windows/win32/cmpapi/-compression-portal)                                                | The Compression API exposes the Windows MSZIP, XPRESS, XPRESS_HUFF, and LZMS compression algorithms. This enables developers of Windows applications to manage versions, service, and extend the exposed compression algorithms.                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Distributed Transaction Coordinator](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms684146\(v=vs.85\))               | Guide and reference documentation for system administrators and developers using the Distributed Transaction Coordinator (DTC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Microsoft.Dtc.PowerShell.Diagnostics](https://learn.microsoft.com/en-us/previous-versions//hh438328\(v=vs.85\))                             | Provides information about the PowerShell cmdlets provided with Microsoft Distributed Transaction Coordinator (MSDTC) for diagnostics.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Microsoft.MsDtcManagement.Commands](https://learn.microsoft.com/en-us/previous-versions//hh438356\(v=vs.85\))                               | Provides information about the PowerShell cmdlets provided with Microsoft Distributed Transaction Coordinator (MSDTC) for management.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Dynamic Link Libraries](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-libraries)                                        | How to create and manage DLLs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Help API](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/helpapi/helpapi-portal)                                       | The Help API allows the opening of help catalogs and the retrieval of help content items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Interprocess Communications](https://learn.microsoft.com/en-us/windows/win32/ipc/interprocess-communications)                               | How to use mailslots and pipes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Kernel Transaction Manager](https://learn.microsoft.com/en-us/windows/win32/ktm/kernel-transaction-manager-portal)                          | How to use transacted file and registry operations, or define transactions for other resources.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Memory Management](https://learn.microsoft.com/en-us/windows/win32/memory/memory-management)                                                | Core memory management services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [MultiPoint Services](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/multipoint/windows-multipoint-server-portal)       | Server role that allows multiple users to simultaneously use the same computer, such as in a classroom environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Operation Recorder](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/oprec/-operation-portal)                            | Operation Recorder enables applications to speed up operations that repeatedly access the same file data by exposing the Windows prefetching mechanism as a public interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Power Management](https://learn.microsoft.com/en-us/windows/win32/power/power-management-portal)                                            | Core power management services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Processes and Threads](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads)                                    | How to create and manage processes and threads.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Remote Desktop Services](https://learn.microsoft.com/en-us/windows/win32/termserv/terminal-services-portal)                                 | How to programmatically interact with Remote Desktop Services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Secure Enclaves](https://learn.microsoft.com/en-us/windows/win32/trusted-execution/enclaves)                                                | Secure enclaves are used to create trusted execution environments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Services](https://learn.microsoft.com/en-us/windows/win32/services/services)                                                                | How to create and manage services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Synchronization](https://learn.microsoft.com/en-us/windows/win32/sync/synchronization)                                                      | How to coordinate multiple threads of execution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Windows Desktop Sharing](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/rdp/rdp-portal)                                | Windows Desktop Sharing is a multiple-party screen-sharing technology. Key scenarios include remote assistance, real-time collaboration and conferencing, and video communication.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Windows Notification Framework](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/wnf/windows-setup-and-migration-portal) | Documents the functions (and function callback prototypes) used to detect and possibly repair an application after a setup or migration has occurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/wsl/windows-subsystem-for-linux-portal)    | Reference information for the Windows Subsystem for Linux (WSL) programming interfaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Windows System Information](https://learn.microsoft.com/en-us/windows/win32/sysinfo/windows-system-information)                             | How to programmatically access the registry and key system configuration and version information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


### Related Topics
↗ [Windows Security](../../../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security/🪟%20Windows%20Security/Windows%20Security.md)
↗ [Operating System Kernel (Kernel Mode)](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
↗ [Operating System & OS Kernel (Theory Part)](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)



## Intro: Windows Components & System Architecture
> 🔗 https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/
> 🔗 https://en.wikipedia.org/wiki/Architecture_of_Windows_NT


### Windows NT Architecture
![|600](../../../../../../../../Assets/Pics/Pasted%20image%2020240601141419.png)


### ⭐️ Windows Components
![](../../../../../../../../Assets/Pics/Screenshot%202023-03-02%20at%208.35.31%20PM.png)
<small>Windows Internals Architecture</small>
#### Windows Kernel Mode Components (Managers + Libraries)

| Component               |                                                                                                                                                                     | Description                                                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Subsystem /Managers** |                                                                                                                                                                     |                                                                                                                                                                                                                               |
|                         | [Windows Kernel-Mode Object Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-object-manager)                          | Manages objects: files, devices, synchronization mechanisms, registry keys, and so on.                                                                                                                                        |
|                         | [Windows Kernel-Mode Memory Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-memory-manager)                          | Manages physical memory for the operating system.                                                                                                                                                                             |
|                         | [Windows Kernel-Mode Process and Thread Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-process-and-thread-manager)  | Handles the execution of all threads in a process.                                                                                                                                                                            |
|                         | [Windows Kernel-Mode I/O Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-i-o-manager)                                | Manages the communication between applications and the interfaces provided by device drivers.                                                                                                                                 |
|                         | [Windows Kernel-Mode Plug and Play Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-plug-and-play-manager)            | A subsystem of the I/O manager, the Plug and Play (PnP) Manager enables a PC to recognize when a device is added to the system.                                                                                               |
|                         | [Windows Kernel-Mode Power Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-power-manager)                            | Manages the orderly change in power status for all devices that support power state changes.                                                                                                                                  |
|                         | [Windows Kernel-Mode Configuration Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-configuration-manager) (Registry) | Manages the registry, such as monitoring changes in the registry or registering callbacks on specific registry data.                                                                                                          |
|                         | [Windows Kernel-Mode Kernel Transaction Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-kernel-transaction-manager)  | Implements transaction processing in kernel mode.                                                                                                                                                                             |
|                         | [Windows Kernel-Mode Security Reference Monitor](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-security-reference-monitor)  | Provides routines for your driver to work with access control.<br>                                                                                                                                                            |
| **Libraries**           |                                                                                                                                                                     |                                                                                                                                                                                                                               |
|                         | [Windows Kernel-Mode Kernel Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-kernel-library)                          | Implements the core functionality that everything else in the operating system depends upon. The Microsoft Windows kernel provides basic low-level operations such as scheduling threads or routing hardware interrupts.      |
|                         | [Windows Kernel-Mode Executive Support Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-executive-support-library)    | Refers to kernel-mode components that provide a variety of services to device drivers, including: object management, memory management, process and thread management, input/output management, and configuration management. |
|                         | [Windows Kernel-Mode Run-Time Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-run-time-library)                      | A set of common utility routines needed by various kernel-mode components.                                                                                                                                                    |
|                         | [Windows Kernel-Mode Safe String Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-safe-string-library)                | A safe string library to provide greater security in kernel-mode development.                                                                                                                                                 |
|                         | [Windows Kernel-Mode DMA Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-dma-library)                                | A direct memory access (DMA) library for device driver developers.                                                                                                                                                            |
|                         | [Windows Kernel-Mode HAL Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-hal-library)                                | A hardware abstraction layer (HAL) for kernel-mode driver development.                                                                                                                                                        |
|                         | [Windows Kernel-Mode CLFS Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-clfs-library)                              | A transactional logging system, the Common Log File System (CLFS).                                                                                                                                                            |
|                         | [Windows Kernel-Mode WMI Library](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-wmi-library)                                | A general mechanism for managing components, called Windows Management Instrumentation (WMI).                                                                                                                                 |
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
