# SEED Project

[TOC]



## Res
🏠 https://seedsecuritylabs.org
Labs | Books | Courses | Env

🚧 https://github.com/seed-labs/seed-labs/tree/master


### Learning Materials
🏫 📄 https://www.cs.memphis.edu/~kanyang/COMP4420-fall22.html
This course will discuss security issues and solutions in computer and mobile networks. Topics include Web Security (web security mode, web application security), Cryptography (symmetric cryptography, public-key cryptography, SSL/TLS, and other crypto tools), Network Security (security issues in network protocols, network defense tools, DoS attacks, etc.), Mobile Security (mobile platform security models, mobile threats and malware), and Cloud Security. (The content and syllabus are subject to adjustment during the semester.)

🚧 Seed Lab Notes
https://github.com/skyblueee/seed_labs
SEED LABS NOTE是本人计划对这套实验课程进行系统学习形成的笔记。
[这里](http://www.cis.syr.edu/~wedu/seed/Labs/SEED_Book_1_2011.pdf)是大部分实验(28个)的实验手册集合(2011年)。[这里](http://www.cis.syr.edu/~wedu/seed/SEED_Chinese_2009.pdf)是其中文版（2009年，涵盖17个实验）。
由于SEED实验非常“与时俱进”，更新较快，为了和最新的实验保持一致，本项目不采用上述两个集合文档，而是采用各个实验页面单独的文档。

📔 网络与系统安全（2023春季） | 哈工大（深圳)
https://hitsz-cslab.gitee.io/net-work-security/



## Intro
Started in 2002, funded by a total of 1.3 million dollars from NSF, and now used by [1080 institutes worldwide](https://seedsecuritylabs.org/adoptions/), the SEED project's objectives are to develop hands-on laboratory exercises (called SEED labs) for cybersecurity education, and to help instructors adopt these labs in their curricula.


### 🫄🏻 Lab Setup
user_name: seed
passwd: dees

#### 1️⃣ via QEMU (Local)
**#1 QEMU from CLI**
```shell
qemu-system-x86_64 SEED-Ubuntu20.04.qcow2 -m 4096 -machine accel=hvf -cpu 2 -display default,show-cursor=on -vga vmware
```
Note here `-vga vmware` is needed as the author of `seed-ubuntu20.04.qcow2` required. 

Other parameters like memory size & cpu sizes is adjustable at discretion.


**#2 QEMU from VMM (libvirt here)**

↗ [FAQ/ 👉 QEMU + `Libvirt` on macOS](../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/FAQ.md#👉%20QEMU%20+%20`Libvirt`%20on%20macOS)


#### 2️⃣ via Cloud (remote)
etc..


## Seed-Lab-CTF
🚧 https://github.com/cole-wustl/seed-labs-ctf
Capture The Flag (CTF) challenges, many of which are associated with Labs from the SEED Labs project by Wenliang (Kevin) Du at Syracuse.



## Ref
[👍 网络攻防技术-实验合集 ｜ CSDN]: https://blog.csdn.net/qq_45755706?type=blog
[👍 网络攻防技术-实验合集 | CSDN]: https://blog.csdn.net/day0713/category_11656422.html

[👍 SEED-Lab | CSDN]: http://t.csdnimg.cn/qpt50

网络空间安全专业在读，博客主要用于记录学习中的一些有趣的东西 涉及比较广泛：安全、CTF、开发、密码学、刷题心得、体系结构等 Welcome to the blog of lunan~
