# Windows

[TOC]



## Res
📂 https://learn.microsoft.com/en-us/docs/
- all products documents

📂 https://learn.microsoft.com/en-us/troubleshoot/
- [Windows Server](https://learn.microsoft.com/en-us/troubleshoot/windows-server/welcome-windows-server)
	- Troubleshooting articles for Windows Server
- [Windows Client](https://learn.microsoft.com/en-us/troubleshoot/windows-client/welcome-windows-client)
	- Troubleshooting articles for Windows clients
- [Windows 365](https://learn.microsoft.com/en-us/troubleshoot/windows-365/welcome-windows-365)
	- Troubleshooting articles for Windows 365
- [Application Developer](https://learn.microsoft.com/en-us/troubleshoot/windows/win32/welcome-windowsdeveloper)
	- Troubleshooting articles for Windows application developers
- [Hardware Developer](https://learn.microsoft.com/en-us/troubleshoot/windows-hardware/drivers/welcome-windowshardware)
	- Troubleshooting articles for Windows hardware developers

📂 https://learn.microsoft.com/en-us/windows-server/

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
								- Windows System InformAation
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
↗ [Microsoft](../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/📌%20Comprehensive%20IT%20Service%20Providers/Microsoft.md)
↗ [Windows Security](../../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security/🪟%20Windows%20Security/Windows%20Security.md)


### Other Resources



## Overview
### History
Microsoft initially used the name Windows in 1985, for an operating environment extension to the primitive MS-DOS operating system, which was a successful OS used on early personal computers. 

This Windows/MS-DOS combination was ultimately replaced by a new version of Windows, known as **Windows NT**, first released in 1993, and intended for laptop and desktop systems. 

Although the basic internal architecture has remained roughly the same since Windows NT, the OS has continued to evolve with new functions and features. 
The latest release at the time of this writing is **Windows 10**. Windows 10 incorporates features from the preceding desktop/laptop release, Windows 8.1, as well as from versions of Windows intended for mobile devices for the Internet of Things (IoT). Windows 10 also incorporates software from the Xbox One system. The resulting unified Windows 10 supports desktops, laptops, smart phones, tablets, and Xbox One.


## Windows Architecture
↗ [Windows NT (New Technology) Kernel](📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20NT%20(New%20Technology)%20Kernel.md)



## Ref
[如何把PC键盘的Alt和Ctrl互换？ - Wordness的文章 - 知乎]: https://zhuanlan.zhihu.com/p/364754575
1. 使用插件
	1. powertoys
	2. sharpkeys
	3. maokeyboard
2. 手动修改注册表

[👍 注册表]: https://blog.csdn.net/duan_qiao925/article/details/115762947

[Windows 11 版本对比：家庭版、专业版、企业版、教育版、SE 版的区别 | CSDN]: https://blog.csdn.net/winkexin/article/details/131567684?fromshare=blogdetail&sharetype=blogdetail&sharerId=131567684&sharerefer=PC&sharesource=&sharefrom=from_link
[Compare Windows 11 editions | microsoft]: https://www.microsoft.com/en-us/windows/business/compare-windows-11#Security
[Windows 11 Pro Vs Windows 11 Pro Workstation. Your thoughts? | reddit]: https://www.reddit.com/r/Windows11/comments/rcz2dm/windows_11_pro_vs_windows_11_pro_workstation_your/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button