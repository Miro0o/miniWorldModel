# MacOS (Derived From UNIX Family)


[TOC]



![[../../../../../Assets/Pics/latest-20221217132855978.png]]
![[../../../../../Assets/Pics/latest.png]]
![[../../../../../Assets/Pics/latest-20221217132659022.png]]
![[../../../../../Assets/Pics/254.png]]



## ⛲️ Resources
### Related Topics
↗ [Rosetta](../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/Rosetta.md)


### macOS Dev
⭐️ https://github.com/nicolashery/mac-dev-setup
A beginner's guide to setting up a development environment on macOS

👨‍💻 📂 https://opensource.apple.com
Open source software is at the heart of Apple platforms and developer tools. Apple works with developers around the world to create, contribute, and release open source code.

📄 https://web.mit.edu/macdev/www/macdev.html
The Macintosh Development group of Information Systems is responsible for the care and feeding of several technology implementations on the Macintosh key to the MIT computing environment. In our spare time, some of our staff win programming [awards](http://www.hax.com/MacHack/BestOf98.html) and write cool [hacks](http://web.mit.edu/macdev/asciiMac/).


### macOS User
https://machow2.com
MacHow2 is a team of dedicated Mac enthusiasts that have been helping users get the most out of their Mac since 2013. We feature reviews, tutorials and roundups of the very best software and hardware for macOS and Mac computers.

https://www.switchingtomac.com

https://github.com/lysyi3m/macos-terminal-themes
Color schemes for default macOS Terminal.app

https://www.macgf.com
MACGF官网是一个专注于macOS系统生产力软件下载，简直就是Mac星球，MACGF提供免费版macOS软件下载、苹果笔记本macbook软件下载，MacWk免费提供安装使用教程及技巧...



## Intro



## Architecture
> 🔗 https://github.com/redcanaryco/mac-monitor/wiki/3.-macOS-System-Architecture

This is a high level refresher and is **not** exhaustive. macOS is no different from other operating systems in that it has a user space / kernel space boundary enforced by security controls. Fundamentally macOS boils down to the XNU hybrid kernel consisting of BSD and Mach components.


### XNU (X is Not Unix) the kernel
> ↗ [macOS Kernel (xnu) & Darwin](📌%20macOS%20Kernel%20(xnu)%20&%20Darwin/macOS%20Kernel%20(xnu)%20&%20Darwin.md)

> The _incomplete_ XNU source code can be found on Apple's Open Source Software Distributions account on GitHub: [https://github.com/apple-oss-distributions/xnu](https://github.com/apple-oss-distributions/xnu).

XNU is the hybrid heart (kernel) of macOS consisting of BSD and the Mach microkernel. A brief overview of each of these components is listed below and shown in the above diagram.

![[../../../../../Assets/Pics/os X archi.jpeg]]

![MacOS_Architecture](../../../../../Assets/Pics/MacOS_Architecture.svg)



## Ref

