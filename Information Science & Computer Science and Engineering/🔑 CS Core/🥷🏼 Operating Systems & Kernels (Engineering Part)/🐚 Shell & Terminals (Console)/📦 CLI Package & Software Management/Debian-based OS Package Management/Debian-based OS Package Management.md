# Debian-based OS Package Management

[TOC]



## Res
### Related Topics
↗ [Debian](../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Distros/🌀%20Debian%20Based%20Linux/Debian/Debian.md)
↗ [Ubuntu](../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Distros/🌀%20Debian%20Based%20Linux/Ubuntu/Ubuntu.md)
↗ [Kali Linux](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🐉%20Kali%20Linux/Kali%20Linux.md)
↗ [Whonix](../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Distros/🌀%20Debian%20Based%20Linux/Whonix.md)




## Intro
> 🔗 https://www.debian.org/doc/manuals/debian-faq/pkgtools.en.html

There are multiple tools that are used to manage Debian packages, from graphic or text-based interfaces to the low level tools used to install packages. All the available tools rely on the lower level tools to properly work and are presented here in decreasing complexity level.

> ❗ It is important to understand that the higher level package management tools such as **aptitude** or **synaptic** rely on **apt** which, itself, relies on **dpkg** to manage the packages in the system.

| 语言 | 包管理系统 | 包后缀 | 本地 | 联网 | 描述文件名 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Red Hat系 | rpm | .rpm | ✅ | ❌ | SPECS/<package-name>.spec |
| Red Hat系 | yum/dnf | .rpm | ❌ | ✅ | - |
| Debian系 | dpkg | .deb | ✅ | ❌ | debian/control |
| Debian系 | apt | .deb | ❌ | ✅ | - |



## Debian-based Package Managers
### 👉 `dpkg` (offline)
This is the main package management program.
↗ [dpkg](dpkg.md)


### 👉 `APT` package management system (onlnie)
↗ [APT Package Management System](APT%20Package%20Management%20System.md)


### 👉 `aptitude` (online)
**`aptitude`** is a package manager for Debian GNU/Linux systems that provides a frontend to the apt package management infrastructure. **aptitude** is a text-based interface using the curses library. Actions may be performed from a visual interface or from the command-line.

**`aptitude`** can be used to perform management tasks in a fast and easy way. It allows the user to view the list of packages and to perform package management tasks such as installing, upgrading, and removing packages.

**`aptitude`** provides the functionality of **`apt-get`**, as well as many additional features.



## Ref
[Where does apt-get install packages to?]: https://linuxhint.com/apt-get-install-packages-to/

