# Windows Registry

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
### 🕵️ Windows Registry in a Nutshell
> 🔗 https://www.cnblogs.com/huyn/p/6876150.html

PC机及其操作系统的一个特点就是允许用户按照自己的要求对计算机系统的硬件和软件进行各种各样的配置。早期的图形操作系统，如Win3.x中，对软硬件工作环境的配置是通过对扩展名为.ini的文件进行修改来完成的，但INI文件管理起来很不方便，因为每种设备或应用程序都得有自己的INI文件，并且在网络上难以实现远程访问。
  
为了克服上述这些问题，在Windows 95及其后继版本中，采用了一种叫做“注册表”的数据库来统一进行管理，将各种信息资源集中起来并存储各种配置信息。按照这一原则，Windows各版本中都采用了将应用程序和计算机系统全部配置信息容纳在一起的注册表，用来管理应用程序和文件的关联、硬件设备说明、状态属性以及各种状态信息和数据等。

与INI文件不同的是:
1. 注册表采用了二进制形式登录数据
2. 注册表支持子键，各级子关键字都有自己的“键值”
3. 注册表中的键值项可以包含可执行代码，而不是简单的字串
4. 在同一台计算机上，注册表可以存储多个用户的特性

注册表的特点有：
1. 注册表允许对硬件、系统参数、应用程序和设备驱动程序进行跟踪配置，这使得修改某些设置后不用重新启动成为可能。
2. 注册表中登录的硬件部分数据可以支持高版本Windows的即插即用特性。当Windows检测到机器上的新设备时，就把有关数据保存到注册表中，另外，还可以避免新设备与原有设备之间的资源冲突。
3. 管理人员和用户通过注册表可以在网络上检查系统的配置和设置，使得远程管理得以实现。

> 🔗 https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users 

The **Microsoft Computer Dictionary**, Fifth Edition, defines the registry as:

> A **central hierarchical database** used in Windows 98, Windows CE, Windows NT, and Windows 2000 used to store information that is necessary to configure the system for one or more users, applications, and hardware devices.

The Registry contains information that Windows continually references during operation, such as profiles for each user, the applications installed on the computer and the types of documents that each can create, property sheet settings for folders and application icons, what hardware exists on the system, and the ports that are being used.

![](../../../../../../../Assets/Pics/Pasted%20image%2020240310213137.png)

The Registry replaces most of the text-based `.ini` files that are used in Windows 3.x and MS-DOS configuration files, such as the `Autoexec.bat` and `Config.sys`. Although the Registry is common to several Windows operating systems, there are some differences among them. 

A **registry hive** is a group of keys, subkeys, and values in the registry that has a set of supporting files that contain backups of its data. 
- The supporting files for all hives except `HKEY_CURRENT_USER` are in the `%SystemRoot%\System32\Config` folder on Windows NT 4.0, Windows 2000, Windows XP, Windows Server 2003, and Windows Vista. 
- The supporting files for `HKEY_CURRENT_USER` are in the `%SystemRoot%\Profiles\Username` folder. 

The file name extensions of the files in these folders indicate the type of data that they contain. Also, the lack of an extension may sometimes indicate the type of data that they contain.

|Registry hive|Supporting files|
|---|---|
|HKEY_LOCAL_MACHINE\SAM|Sam, Sam.log, Sam.sav|
|HKEY_LOCAL_MACHINE\Security|Security, Security.log, Security.sav|
|HKEY_LOCAL_MACHINE\Software|Software, Software.log, Software.sav|
|HKEY_LOCAL_MACHINE\System|System, System.alt, System.log, System.sav|
|HKEY_CURRENT_CONFIG|System, System.alt, System.log, System.sav, Ntuser.dat, Ntuser.dat.log|
|HKEY_USERS\DEFAULT|Default, Default.log, Default.sav|

In Windows 98, the registry files are named `User.dat` and `System.dat`. In Windows Millennium Edition, the registry files are named `Classes.dat`, `User.dat`, and `System.dat`.

The following table lists the predefined keys that are used by the system. The maximum size of a key name is 255 characters.

| Folder/predefined key | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `HKEY_CURRENT_USER`   | Contains the root of the configuration information for the user who is currently logged on. The user's folders, screen colors, and Control Panel settings are stored here. This information is associated with the user's profile. This key is sometimes abbreviated as `HKCU`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `HKEY_USERS`          | Contains all the actively loaded user profiles on the computer. `HKEY_CURRENT_USER` is a subkey of `HKEY_USERS`. `HKEY_USERS` is sometimes abbreviated as `HKU`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `HKEY_LOCAL_MACHINE`  | Contains configuration information particular to the computer (for any user). This key is sometimes abbreviated as `HKLM`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `HKEY_CLASSES_ROOT`   | Is a subkey of `HKEY_LOCAL_MACHINE\Software`. The information that is stored here makes sure that the correct program opens when you open a file by using Windows Explorer. This key is sometimes abbreviated as `HKCR`. Starting with Windows 2000, this information is stored under both the `HKEY_LOCAL_MACHINE` and `HKEY_CURRENT_USER` keys. The `HKEY_LOCAL_MACHINE\Software\Classes` key contains default settings that can apply to all users on the local computer. The `HKEY_CURRENT_USER\Software\Classes` key contains settings that override the default settings and apply only to the interactive user. The `HKEY_CLASSES_ROOT` key provides a view of the registry that merges the information from these two sources. `HKEY_CLASSES_ROOT` also provides this merged view for programs that are designed for earlier versions of Windows. To change the settings for the interactive user, changes must be made under `HKEY_CURRENT_USER\Software\Classes` instead of under `HKEY_CLASSES_ROOT`. To change the default settings, changes must be made under `HKEY_LOCAL_MACHINE\Software\Classes`. If you write keys to a key under `HKEY_CLASSES_ROOT`, the system stores the information under `HKEY_LOCAL_MACHINE\Software\Classes`. If you write values to a key under `HKEY_CLASSES_ROOT`, and the key already exists under `HKEY_CURRENT_USER\Software\Classes`, the system will store the information there instead of under `HKEY_LOCAL_MACHINE\Software\Classes`. |
| `HKEY_CURRENT_CONFIG` | Contains information about the hardware profile that is used by the local computer at system startup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

The following table lists the data types that are currently defined and that are used by Windows. The maximum size of a value name is as follows:
- Windows Server 2003, Windows XP, and Windows Vista: 16,383 characters
- Windows 2000: 260 ANSI characters or 16,383 Unicode characters
- Windows Millennium Edition/Windows 98/Windows 95: 255 characters

Long values (more than 2,048 bytes) must be stored as files with the file names stored in the registry. This helps the registry perform efficiently. The maximum size of a value is as follows:
- Windows NT 4.0/Windows 2000/Windows XP/Windows Server 2003/Windows Vista: Available memory
- Windows Millennium Edition/Windows 98/Windows 95: 16,300 bytes

> Note
> There is a 64K limit for the total size of all values of a key.

| Name                    | Data type                        | Description                                                                                                                                                                                                                                                                                                                                                                                   |     |
| ----------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Binary Value            | `REG_BINARY`                     | Raw binary data. Most hardware component information is stored as binary data and is displayed in Registry Editor in hexadecimal format.                                                                                                                                                                                                                                                      |     |
| DWORD Value             | `REG_DWORD`                      | Data represented by a number that is 4 bytes long (a 32-bit integer). Many parameters for device drivers and services are this type and are displayed in Registry Editor in binary, hexadecimal, or decimal format. Related values are `DWORD_LITTLE_ENDIAN` (least significant byte is at the lowest address) and `REG_DWORD_BIG_ENDIAN` (least significant byte is at the highest address). |     |
| Expandable String Value | `REG_EXPAND_SZ`                  | A variable-length data string. This data type includes variables that are resolved when a program or service uses the data.                                                                                                                                                                                                                                                                   |     |
| Multi-String Value      | `REG_MULTI_SZ`                   | A multiple string. Values that contain lists or multiple values in a form that people can read are generally this type. Entries are separated by spaces, commas, or other marks.                                                                                                                                                                                                              |     |
| String Value            | `REG_SZ`                         | A fixed-length text string.                                                                                                                                                                                                                                                                                                                                                                   |     |
| Binary Value            | `REG_RESOURCE_LIST`              | A series of nested arrays that is designed to store a resource list that is used by a hardware device driver or one of the physical devices it controls. This data is detected and written in the `\ResourceMap` tree by the system and is displayed in Registry Editor in hexadecimal format as a Binary Value.                                                                              |     |
| Binary Value            | `REG_RESOURCE_REQUIREMENTS_LIST` | A series of nested arrays that is designed to store a device driver's list of possible hardware resources the driver or one of the physical devices it controls can use. The system writes a subset of this list in the `\ResourceMap` tree. This data is detected by the system and is displayed in Registry Editor in hexadecimal format as a Binary Value.                                 |     |
| Binary Value            | `REG_FULL_RESOURCE_DESCRIPTOR`   | A series of nested arrays that is designed to store a resource list that is used by a physical hardware device. This data is detected and written in the `\HardwareDescription` tree by the system and is displayed in Registry Editor in hexadecimal format as a Binary Value.                                                                                                               |     |
| None                    | `REG_NONE`                       | Data without any particular type. This data is written to the registry by the system or applications and is displayed in Registry Editor in hexadecimal format as a Binary Value                                                                                                                                                                                                              |     |
| Link                    | `REG_LINK`                       | A Unicode string naming a symbolic link.                                                                                                                                                                                                                                                                                                                                                      |     |
| QWORD Value             | `REG_QWORD`                      | Data represented by a number that is a 64-bit integer. This data is displayed in Registry Editor as a Binary Value and was introduced in Windows 2000.                                                                                                                                                                                                                                        |     |


### 🧑🏼‍🔧 Back Up the Registry
Before you edit the registry, export the keys in the registry that you plan to edit, or back up the whole registry. If a problem occurs, you can then follow the steps in the [Restore the registry](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users#restore-the-registry) section to restore the registry to its previous state. To back up the whole registry, use the Backup utility to back up the system state. The system state includes the registry, the COM+ Class Registration Database, and your boot files. For more information about how to use the Backup utility to back up the system state, see the following articles:
- [Back up and restore your PC](https://support.microsoft.com/help/17127/windows-back-up-restore)
- [How to use the backup feature to back up and restore data in Windows Server 2003](https://support.microsoft.com/help/326216)


### 🧑🏼‍🔧 Edit the Registry
1. use the Windows user interface
2. use Registry Editor
3. use Group Policy
4. use a Registration Entries (.reg) file
5. use Windows Script Host
6. use Windows Management Instrumentation
7. use Console Registry Tools for Windows


### 🧑🏼‍🔧 Restore the Registry
1. restore the registry keys
2. restore the whole registry



## Windows Registry Components & Keys
> 🔗 https://www.cnblogs.com/huyn/p/6876150.html (2015, windows xp)



## Windows Registry Tricks
> 🔗 https://www.cnblogs.com/huyn/p/6876150.html (2015, windows xp)



## Ref
[👍 Windows registry information for advanced users | Microsoft Documentation]: https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users
- [Windows 2000 Server Resources Kit](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc984339(v=msdn.10))
- 👍 [Inside the Registry](https://learn.microsoft.com/en-us/previous-versions//cc750583(v=technet.10))

[👍 Windows Architecture - Registry 101 | Microsoft Blog]: https://techcommunity.microsoft.com/t5/ask-the-performance-team/windows-architecture-registry-101/ba-p/372358

First published on TECHNET on Apr 24, 2007

![](../../../../../../../Assets/Pics/Pasted%20image%2020240310213137.png)

[👍 Windows注册表详解 | CSDN]: http://t.csdnimg.cn/Xb0UE
[👍 Windows注册表详解 | cnblog]: https://www.cnblogs.com/huyn/p/6876150.html

1. 注册表的由来
2. 使用注册表
3. 注册表根键说明
4. 注册表详细内容
5. 如何备份注册表
6. 使用技巧
	1. 加快开机及关机速度
	2. 自动关闭停止响应程序
	3. 清除内存内被不使用的DLL文件
	4. 加快菜单显示速度
	5. 禁止修改用户文件夹
	6. 减小浏览局域网的延迟时间
	7. 屏蔽系统中的热键
	8. 关闭不用的共享
	9. 让IE支持多线程下载
	10. 让WINDOWS XP自动登陆
7. 我们来让我们的系统瘦瘦身
	1. 删除多余的虚拟光驱图标
	2. 删除多余的系统级图标
	3. 删除“运行”中多余的选项
	4. 删除“查找”中多余的选项
	5. 删除多余的键盘布局
	6. 删除多余的区域设置
8. 高级篇
	1. 自动清除登录窗口中上次访问者的用户名
	2. 为一些非SCSI接口光驱进行手工配置
	3. 增加NTFS性能
	4. 修复镜像组
	5. 自定义启动信息
	6. 加速文件管理系统缓存
	7. 增加“关闭系统”按钮
	8. 在NT下创建一个镜像集
	9. 登录局域网超时自动断开
	10. 改变远程访问服务的缺省端口传输速度
	11. 加快网络传输速度
	12. 自动登陆网络
	13. 禁止光盘的自动运行功能
	14. 取消系统检测串口，提高NT系统启动速度
9. XP六条未公开的秘技
	1. 支持137 GB以上大硬盘
	2. 删除共享文档
	3. 锁定桌面
	4. 停用“上次访问时间标记（Last Access Time Stamp）”
	5. 设置“远程访问连接服务器（RAS）”
	6. 使用明文密码（Lain Text Password）
10. 最新Windows XP注册表实用配置技巧
	1. 屏蔽当鼠标移动到标准控制按钮的提示信息
	2. 通过注册表查看系统BIOS信息
	3. 启动自动最优化磁盘功能
	4. 限制自动登录的数量
	5. 使用Windows NT/2000的登录界面登录Windows XP
	6. 定义Windows XP时钟服务器 Windows XP有一个新的特色，它可以将系统的时钟与Internet上的时钟服务器进行同步校正，用以下方法你可以修改或添加默认的时钟服务器。
	7. 锁定／解除任务栏在桌面上的位置
	8. 改进核心存取系统性能
	9. 优化I/O缓冲大小的默认设置
	10. 屏蔽/打开“分组相似任务栏按钮”功能
	11. 自定义激活“分组相似任务栏按钮”的窗口数量
	12. 设置当IE 6.0发生错误时是否允许错误报告
	13. 让IE使用多线程下载网页
	14. 设置Windows XP的DOS文件名风格
	15. 屏蔽/打开菜单阴影效果
	16. 设置“尚未阅读信息”的最大期限
	17. 隐藏/显示桌面图标
	18. 显示/隐藏公共对话框中的“后退”按钮
	19. 显示/隐藏公共对话框中的“查找范围快速定位区”
	20. 防止应用程序窗口失去焦点
	21. 激活磁盘DMA66模式
	22. 锁定IE的下载功能
	23. 禁止使用“LAST KNOW GOOD”(最后一次成功引导)
	24. 控制发生错误时是否弹出警告窗口
	25. 控制当系统崩溃时是否记录日制
	26. 定制Regedit的收藏夹
	27. 启用“自动完成”功能
	28. 自定义磁盘图标和卷标
	29. 为CD-ROM和磁盘驱动器建立高级安全机制
	30. 确定上次登录时用户使用的域
	31. Windows XP登录口令过期警告
	32. 防止用户配置文件选择对话框超时
	33. 使用定制的Shell（外壳程序）
	34. 通过性能库防止可扩充计数器超时
	35. 当资源管理器崩溃时强迫计算机重新启动
	36. 禁用Windows XP的文件高速缓存
	37. 设置系统临界线程的总数
