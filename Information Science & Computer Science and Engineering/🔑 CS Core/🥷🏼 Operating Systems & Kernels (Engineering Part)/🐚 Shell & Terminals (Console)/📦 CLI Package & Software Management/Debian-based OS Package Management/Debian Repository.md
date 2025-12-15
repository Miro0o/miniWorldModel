# Debian Repository

[TOC]



## Res
### Debian package documentation
- Every Debian package installs its documentation under `/usr/share/doc/<package_name>`. Check this directory for more information on a specific package. 
- All programs provided by Debian packages come with their own [ManPage](https://wiki.debian.org/ManPage).


### Configuration
- [SourcesList](https://wiki.debian.org/SourcesList) - Edit packages sources (repositories) 
- [PackageInstallTips](https://wiki.debian.org/PackageInstallTips) - Package management tips 
- [AptConfiguration](https://wiki.debian.org/AptConfiguration) - Apt configuration and *pinning*
- [UnattendedUpgrades](https://wiki.debian.org/UnattendedUpgrades) - Automatically install latest security (and other) upgrades 
- [PackageManagement/Preseed](https://wiki.debian.org/PackageManagement/Preseed) - Preconfigure Debian packages before installation 
- [PackageManagement/Searching](https://wiki.debian.org/PackageManagement/Searching) - Searching for packages 
- [Backports](https://wiki.debian.org/Backports) - Newer versions of packages compatible with [DebianStable](https://wiki.debian.org/DebianStable)
- [DebianPackageManagement](https://wiki.debian.org/DebianPackageManagement) - Advanced topics on Debian package management 
- [SecureApt](https://wiki.debian.org/SecureApt) - Authenticate packages against cryptographic signatures


### Mirrors
The official Debian package repository is mirrored all over the world. 
- The Debian website has an [official list of Debian mirrors](https://www.debian.org/mirror/list)
- There also is a list of [unofficial repositories](https://wiki.debian.org/DebianRepository/Unofficial) containing various additional software 
- There is a [team in charge of mirrors](https://wiki.debian.org/Teams/Mirrors).

https://packages.debian.org/)



## Intro
> 🔗 https://wiki.debian.org/DebianRepository

A Debian repository is a set of Debian binary or source packages organized in a special directory tree and with various infrastructure files - checksums, indices, signatures, descriptions translations.

Client computers can connect to the repository to download and install the packages using an [Apt](https://wiki.debian.org/Apt)-based [PackageManagement](https://wiki.debian.org/PackageManagement) tool.


### The Debian Package Management Tools
↗ [Debian-based OS Package Management](Debian-based%20OS%20Package%20Management.md)


### Package lists
To browse the list of Debian packages grouped by category, you can look at the [stable](https://packages.debian.org/stable/), [testing](https://packages.debian.org/testing/), [unstable](https://packages.debian.org/unstable/) and various other lists, or search on the  [packages homepage](https://packages.debian.org/).


### Repository management
- [DebianRepository/Setup](https://wiki.debian.org/DebianRepository/Setup) - summarizes the process of setting up a Debian package repository 
- [DebianRepository](https://wiki.debian.org/DebianRepository) - Debian package repository 
- [DebianRepository/Format](https://wiki.debian.org/DebianRepository/Format) - Debian package repository format 
- [DebianRepository/UseThirdParty](https://wiki.debian.org/DebianRepository/UseThirdParty) - Instructions to connect to a third-party repository


### Using a repository
Using a repository is fairly simple: for the official Debian repository open `/etc/apt/sources.list`, insert the line

```shell
deb http://ftp.debian.org/debian stable main contrib non-free
```

then run 
```shell
apt update
```

(As the root user or using sudo of course). You might also consider to use a URL like: 
- `http://ftp.<CC>.debian.org/debian` to use a location closer to you, network-wise. 
- `http://deb.debian.org/debian` to let a CDN choose the closest mirror to you (more [here](http://deb.debian.org/)) 

For the official Debian repositories this simple procedure is sufficient. The [[SourcesList](https://wiki.debian.org/SourcesList)] article contains further information about sources.list entries. For other third party repositories, you might want to follow [this excellent guide](https://wiki.debian.org/DebianRepository/UseThirdParty) to reduce the risk of hosing your system from a carelessly maintained repository. 



## Ref

