# Kali Linux

[TOC]



## 🛣 Res
🏠 https://www.kali.org
📂 https://www.kali.org/docs/
🧰 Kali Tools https://www.kali.org/tools/


### Related Topics
↗ [Network Penetration (Pen-testing)](../../Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Network%20Penetration%20(Pen-testing).md)
↗ [Debian Based Linux](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Distros/🌀%20Debian%20Based%20Linux/Debian%20Based%20Linux.md)


### Learning Resources
📖 Mastering Kali Linux for Advanced Penetration Testing
🚧 https://github.com/PacktPublishing/Mastering-Kali-Linux-for-Advanced-Penetration-Testing-Third-Edition

📖 Learning Kali Linux

🎬 [奇安信联合出品网络安全Kali Linux精品全套教程完整版]: https://www.bilibili.com/video/BV15t4y1P7sU/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
![Cover image for How to Install Kali Linux on VirtualBox: A Step-by-Step Guide](../../../../../../../../Assets/Pics/tps8yqrc42qayb4gmfyd.jpeg)

Kali Linux (Kali) is the successor to the **BackTrack penetration testing platform** that is generally regarded as the de facto standard package of tools used to facilitate penetration testing to secure data and voice networks. It was developed by **Mati Aharoni** and **Devon Kearns** of Offensive Security.

> **Kali Linux** is a Debian-based Linux system that was created for penetration testing and is particularly beneficial for security professionals and amateurs. Kali Linux, formerly known as **BackTrack Linux**, comes with a number of network auditing tools and apps. Kali can be used as a Live DVD or installed as a host operating system (OS) on a computer like any other Linux. However, using Kali as a general-purpose desktop operating system is not recommended. At the same time, settings are not saved after a system reboot when using Kali Live DVD. Virtual machines can be extremely useful in this case. In today's blog post, we'll look at how to set up Kali Linux as a virtual machine in VirtualBox (VM).


### BackTrack (BT)
🏠 https://www.backtrack-linux.org

BackTrack was a Linux distribution that focused on security, based on the **Knoppix Linux** distribution aimed at digital forensics and penetration testing use. In March 2013, the [Offensive Security](https://www.offensive-security.com/) team rebuilt BackTrack around the Debian distribution and released it under the name Kali Linux.

The last version of BackTrack is BT 5r3. (2022)

> ![](../../../../Assets/Pics/Screenshot%202023-01-19%20at%204.12.03%20PM.png)
>
> **Offensive Security** is an American international company working in information security, penetration testing and digital forensics. Operating from around 2007, the company created open source projects, advanced security courses, the ExploitDB vulnerability database, and the Kali Linux distribution. The company was started by Mati Aharoni, and employs security professionals with experience in security penetration testing and system security evaluation. The company has provided security counseling and training to many technology companies.


### Kali
[Kali Linux](https://www.kali.org/) *(formerly known as [BackTrack Linux](https://www.backtrack-linux.org/))* is an [open-source](https://www.kali.org/docs/policy/kali-linux-open-source-policy/), [Debian-based Linux](https://www.kali.org/docs/policy/kali-linux-relationship-with-debian/) distribution aimed at advanced Penetration Testing and Security Auditing. It [does this by](https://www.kali.org/features/) providing common tools, configurations, and automations which allows the user to focus on the task that needs to be completed, not the surrounding activity.

Kali Linux contains industry specific modifications as well as [several hundred tools](https://www.kali.org/docs/policy/penetration-testing-tools-policy/) targeted towards various Information Security tasks, such as Penetration Testing, Security Research, Computer Forensics, Reverse Engineering, Vulnerability Management and Red Team Testing.

Kali Linux is a multi-platform solution, accessible and freely available to information security professionals and hobbyists.
#### Kali Linux Features (2022)
> 🔗 https://www.kali.org/docs/introduction/what-is-kali-linux/#kali-linux-features

- **More than [600](https://www.kali.org/docs/policy/penetration-testing-tools-policy/) penetration testing tools included:** After reviewing every tool that was included in BackTrack, we eliminated a great number of tools that either simply did not work or which duplicated other tools that provided the same or similar functionality. Details on what’s included are on the [Kali Tools](https://www.kali.org/tools) site.
- **Free (as in beer) and always will be:** Kali Linux, like BackTrack, is [completely free](https://www.kali.org/docs/policy/kali-linux-open-source-policy/) of charge and always will be. You will never, ever have to pay for Kali Linux.
- **Open source Git tree:** We are committed to the open source development model and our [development tree](https://gitlab.com/kalilinux) is available for all to see. All of the source code which goes into Kali Linux is available for anyone who wants to tweak or rebuild [packages](https://pkg.kali.org/) to suit their specific needs.
- **FHS compliant:** Kali adheres to the [Filesystem Hierarchy Standard](https://www.pathname.com/fhs/), allowing Linux users to easily locate binaries, support files, libraries, etc.
- **Wide-ranging wireless device support:** A regular sticking point with Linux distributions has been support for wireless interfaces. We have built Kali Linux to support as many wireless devices as we possibly can, allowing it to run properly on a wide variety of hardware and making it compatible with numerous USB and other wireless devices.
- **Custom kernel, patched for injection:** As penetration testers, the development team often needs to do wireless assessments, so our kernel has the latest injection patches included.
- **Developed in a secure environment:** The [Kali Linux team](https://www.kali.org/about-us/) is made up of a small group of individuals who are the only ones trusted to commit packages and interact with the repositories, all of which is done using multiple secure protocols.
- **GPG signed packages and repositories:** Every package in Kali Linux is signed by each individual developer who built and committed it, and the repositories subsequently sign the packages as well.
- **Multi-language support:** Although penetration tools tend to be written in English, we have ensured that Kali includes true multilingual support, allowing more users to operate in their native language and locate the tools they need for the job.
- **Completely customizable:** We thoroughly understand that not everyone will agree with our design decisions, so we have made it as easy as possible for our more adventurous users to [customize Kali Linux](https://www.kali.org/docs/development/live-build-a-custom-kali-iso/) to their liking, all the way down to the kernel.
- **ARMEL and ARMHF support:** Since ARM-based single-board systems like the [Raspberry Pi](https://www.kali.org/docs/arm/raspberry-pi/) and [BeagleBone Black](https://www.kali.org/docs/arm/beaglebone-black/), among others, are becoming more and more prevalent and inexpensive, we knew that [Kali’s ARM support](https://www.kali.org/docs/introduction/kali-on-arm-a-bit-of-history/) would need to be as robust as we could manage, with fully working installations for both [ARMEL and ARMHF](https://en.wikipedia.org/wiki/ARM_architecture) systems. Kali Linux is available on [a wide range of ARM devices ](https://www.kali.org/docs/arm/)and has ARM repositories integrated with the mainline distribution so tools for ARM are updated in conjunction with the rest of the distribution.

*For more features of Kali Linux, please see the following page: [Kali Linux Overview](https://www.kali.org/features/).*


### Kali Linux Get-started
↗ [FAQ/ 👉 Kali Linux Setup](FAQ.md#👉%20Kali%20Linux%20Setup)

Installing & updating Kali linux


## Ref
