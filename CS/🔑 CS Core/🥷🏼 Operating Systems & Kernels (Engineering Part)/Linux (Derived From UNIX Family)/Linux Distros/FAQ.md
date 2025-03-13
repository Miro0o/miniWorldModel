 FAQ

[TOC]



## 👉 CentOS 8 换源
#CentOS #source_package
### 1️⃣ Overview

[CentOS 8 / CentOS Stream 换源，设置dnf / yum镜像](https://www.cnblogs.com/wswind/p/11751829.html) 

centos 8 默认是会读取centos.org的mirrorlist的，所以一般来说是不需要配置镜像的。
如果你的网络访问mirrorlist有问题，才需要另外配置
相关镜像配置，请参考各镜像站的相关帮助

1. https://developer.aliyun.com/mirror/centos
2. https://mirrors.tuna.tsinghua.edu.cn/help/centos/
3. http://mirrors.ustc.edu.cn/help/centos.html
4. https://mirrors.huaweicloud.com/
### 2️⃣ Aproaches
1. change mirrorsite
   1. aliyun
   2. ustc
   3. tuna
   4. ...
2. sed
3. EPEL ([What is EPEL?](https://docs.fedoraproject.org/en-US/epel/))
4. dnf fastest mirror
### 3️⃣ Example

take `tuna.tsinghua.edu.cn` for example:

> https://mirrors.tuna.tsinghua.edu.cn/help/centos/

1. Backup  `/etc/yum.repos.d/`
2. Edit `CentOS-*.repo` files in  `/etc/yum.repos.d/` : 
   1. 在 `mirrorlist=` 开头行前面加 `#` 注释掉；并将 `baseurl=` 开头行取消注释（如果被注释的话）。 对于 CentOS 7 ，请把该行内的域名（例如`mirror.centos.org`）替换为 `mirrors.tuna.tsinghua.edu.cn`。 对于 CentOS 8 ，请把 `mirror.centos.org/$contentdir` 替换为 `mirrors.tuna.tsinghua.edu.cn/centos`
3.  `sudo yum makecache`



## 👉 Diff between `apt` & `apt-get`
#debian #ubuntu #apt #apt-get


> 🔗 [What is the difference between apt and apt-get?](https://askubuntu.com/a/934449/1636059)

> **TL;DR** `apt` = most common used command options from `apt-get`, `apt-cache` and `apt-config`.

Tere are various tools that interact with [Advanced Packaging Tool (APT)](https://help.ubuntu.com/lts/serverguide/apt.html.en) and allow you to install, remove and manage packages in [Debian based Linux distributions](https://www.debian.org/derivatives/). `apt-get` is one such command-line tool which is widely popular. Another popular tool is [Aptitude](https://help.ubuntu.com/lts/serverguide/aptitude.html.en) with both GUI and command-line options.

If you have used `apt-get` commands, you might have come across a number of similar commands such as `apt-cache`, `apt-config` etc. And this is where the problem arises.

You see, these commands are way too low level and they have so many functionalities which are perhaps never used by an average Linux user. On the other hand, the most commonly used package management commands are scattered across `apt-get`, `apt-cache` and `apt-config`.

The `apt` commands have been introduced to solve this problem. `apt` consists some of the most widely used features from `apt-get`, `apt-cache` and `apt-config` leaving aside obscure and seldom used features.

With `apt`, you don’t have to fiddle your way from `apt-get` to `apt-cache` to `apt-config`. `apt` is more structured and provides you with necessary options needed to manage packages.

I have written in detail on the [difference between apt and apt-get](https://itsfoss.com/apt-vs-apt-get-difference/).



## 👉 Diff between Ubuntu & Debian
#ubuntu #debian

> 🔗 https://itsfoss.com/debian-vs-ubuntu/

👉 **Release cycle**
Ubuntu has two kinds of releases: LTS and regular. [Ubuntu LTS (long term support) release](https://itsfoss.com/long-term-support-lts/) comes out every two years and they get support for five years. You have the option to upgrade to the next available LTS release. The LTS releases are considered more stable. There are also non-LTS releases, every six months. These releases are supported for nine months only.

On the other hand, Debian has three different releases: Stable, Testing and Unstable. Unstable is for actual testing and should be avoided.


👉 **Software freshness**
Debian’s focus on stability means that it does not always aim for the latest versions of the software. For example, the latest Debian 11 features GNOME 3.38, not the latest GNOME 3.40. The same goes for other software like GIMP, LibreOffice, etc..

Ubuntu LTS releases also focus on stability. But they usually have more recent versions of the popular software.

> 🤣 Debian stable = Debian stale


👉 **Software availability**
Both Debian and Ubuntu has a huge repository of software. However, [Ubuntu also has PPA](https://itsfoss.com/ppa-guide/) (Personal Package Archive). With PPA, installing newer software or getting the latest software version becomes a bit more easy.

You may try using PPA in Debian but it won’t be a smooth experience. You’ll encounter issues most of the time.


👉 **Supported platforms**
Ubuntu is available on 64-bit x86 and ARM platforms. It does not provide 32-bit ISO anymore.

Debian, on the other hand, supports both 32 bit and 64 bit architecture.


👉 **Installation**
[Installing Ubuntu](https://itsfoss.com/install-ubuntu/) is a lot easier than [installing Debian](https://itsfoss.com/install-debian-easily/).


👉 **Out of the box hardware support**
As mentioned earlier, Debian focuses primarily on [FOSS](https://itsfoss.com/what-is-foss/) (free and open source software). This means that the kernel provided by Debian does not include proprietary drivers and firmware.

It’s not that you cannot make it work but you’ll have to do add/enable additional repositories and install it manually. This could be discouraging, specially for the beginners.

Ubuntu is not perfect but it is a lot better than Debian for providing drivers and firmware out of the box. This means less hassle and a more complete out-of-the-box experience.


👉 **Desktop environment choices**
Ubuntu uses a customized GNOME desktop environment by default. You may install [other desktop environments](https://itsfoss.com/best-linux-desktop-environments/) on top of it or opt for [various desktop based Ubuntu flavors](https://itsfoss.com/which-ubuntu-install/) like Kubuntu (for KDE), Xubuntu (for Xfce) etc.

Debian also installs GNOME by default. But its installer gives you choice to install desktop environment of your choice during the installation process.

You may also get [DE specific ISO images from its website](https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/).


👉 **Gaming**
Gaming on Linux has improved in general thanks to Steam and its Proton project. Still, gaming depends a lot on hardware.

And when it comes to hardware compatibility, Ubuntu is better than Debian for supporting proprietary drivers.


👉 **Performance**
There is no clear ‘winner’ in the performance section, whether it is on the server or on the desktop. Both Debian and Ubuntu are popular as desktop as well as server operating systems.


👉 **Community and support**
Debian is a true community project. Everything about this project is governed by its community members.

Ubuntu is backed by [Canonical](https://canonical.com/). However, it is not entirely a corporate project. It does have a community but the final decision on any matter is in Canonical’s hands.

As far the support goes, both Ubuntu and Debian have dedicated forums where users can seek help and advice.

Canonical also offers professional support for a fee to its enterprise clients. Debian has no such features.



## 👉 Turn down the GUI on Ubuntu/Debian
#ubuntu #debian #GUI 

```shell
sudo systemctl stop display-manager

sudo systemctl isolate multi-user.target
```



## 👉 Install Software on Ubuntu
#ubuntu #FreeSoftware #config 

### Install .AppImage file

### Install .deb file

### Install .desktop file


