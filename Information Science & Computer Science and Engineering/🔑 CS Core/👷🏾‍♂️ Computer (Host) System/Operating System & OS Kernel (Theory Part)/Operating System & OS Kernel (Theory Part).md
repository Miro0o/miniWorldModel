# Operating System & OS Kernel (Theory Part)

[TOC]



## Res
### Related Topics
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
↗ [Operating Systems & Kernels (Engineering Part)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)

↗ [Operating System Components & Runtime Libraries](😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Components%20&%20Runtime%20Libraries.md)
- ↗ [Operating System Kernel (Kernel Mode)](😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
- ↗ [System Core Function Libraries & C Standard Library (User Mode)](😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)

↗ [C & CPP](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)

↗ [Programming Language Processing & Program Execution](../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)

↗ [System Security](../../../CyberSecurity/System%20Security/System%20Security.md)
↗ [Software Runtime Security](../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/Software%20Runtime%20Security.md)


### Learning Resources
#### Courses
🏫 [NJU /操作系统](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/NJU%20南京大学/操作系统/操作系统.md)
- 🎬【操作系统概述 (为什么要学操作系统) [南京大学2022操作系统-蒋炎岩-P1]】 https://www.bilibili.com/video/BV1Cm4y1d7Ur/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
- 🎬 【操作系统概述 (操作系统的历史；学习建议) [南京大学2023操作系统-P1] (蒋炎岩)】 https://www.bilibili.com/video/BV1Xx4y1V7JZ/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
- 🎬【课程总结 (从逻辑门到计算机系统) [南京大学2022操作系统-P32]】 https://www.bilibili.com/video/BV1R34y1L7sY/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🏫 [UCB /CS162 Operating System](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/UC%20Berkeley/CS162%20Operating%20System/CS162%20Operating%20System.md)
🏫 [MIT /6.S081/828/1810 Operating System Engineering](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/MIT/6.S081(6.828,%206.1810)%20Operating%20System%20Engineering/6.S081(6.828,%206.1810)%20Operating%20System%20Engineering.md)

> Learning in action by ↗ [Operating Systems & Kernels (Engineering Part)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)
> Theoretical knowledge begins with ↗ [📌 Operating System Overview](🦺%20Operating%20System%20Basics/📌%20Operating%20System%20Overview.md)

🇨🇳 ↗ [NJU /操作系统](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/NJU%20南京大学/操作系统/操作系统.md)
🇨🇳 ↗ [HIT OS /Operating System](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/HIT%20哈尔滨工业大学/HIT%20OS%20-%20Operating%20System.md)

https://hexhive.epfl.ch/OSTEP-slides/
Introduction to Operating Systems (CS-323, EPFL)
This class is a gently introduction into operating systems concepts at EPFL for undergraduate students in their third year. The students come with a light background in C programming from a mandatory class on C concepts and an optional C programming project in their second year. Generally, the C background of the students is rather light and many have not really worked with Linux environments yet.
#### Books
↗ [Computer (Host) System](../Computer%20(Host)%20System.md)
↗ [Computer Architecture](../Computer%20Architecture/Computer%20Architecture.md)

↗ [Linux (Derived From UNIX Family)](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20(Derived%20From%20UNIX%20Family).md)
↗ [UNIX Family](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/UNIX%20Family/UNIX%20Family.md)
↗ [Windows](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows.md)

📖 [UNIX Network Programming](http://www.unpbook.com) volumn I & II
📖 Advanced Programming in the UNIX® Environment 
📖 The Little Book of Semaphores -- Allen B. Downey

📖 Operating systems principles and practice

👍 📖 Operating Systems: Three Easy Pieces
https://pages.cs.wisc.edu/~remzi/OSTEP/
https://github.com/remzi-arpacidusseau/ostep-projects

|                                                                                                                                                |                                                                                                                                                                              |                                                                                                                                                         |                                                                                                                                                                            |                                                                                                 |                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Intro**                                                                                                                                      | **Virtualization**                                                                                                                                                           |                                                                                                                                                         | **Concurrency**                                                                                                                                                            | **Persistence**                                                                                 | **Security**                                                                              |
| [Preface](https://pages.cs.wisc.edu/~remzi/OSTEP/preface.pdf)                                                                                  | 3 _[Dialogue](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-virtualization.pdf)_                                                                                           | 12 _[Dialogue](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-vm.pdf)_                                                                                 | 25 _[Dialogue](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-concurrency.pdf)_                                                                                           | 35 _[Dialogue](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-persistence.pdf)_                | 52 [_Dialogue_](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-security.pdf)             |
| [TOC](https://pages.cs.wisc.edu/~remzi/OSTEP/toc.pdf)                                                                                          | 4 [Processes](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)                                                                                                          | 13 [Address Spaces](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/vm-intro) | 26 [Concurrency and Threads](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-intro) | 36 [I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf)                       | 53 [_Intro Security_](https://pages.cs.wisc.edu/~remzi/OSTEP/security-intro.pdf)          |
| 1 _[Dialogue](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-threeeasy.pdf)_                                                                  | 5 [Process API](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/cpu-api)                            | 14 [Memory API](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-api.pdf)                                                                                      | 27 [Thread API](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-api.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-api)                  | 37 [Hard Disk Drives](https://pages.cs.wisc.edu/~remzi/OSTEP/file-disks.pdf)                    | 54 [_Authentication_](https://pages.cs.wisc.edu/~remzi/OSTEP/security-authentication.pdf) |
| 2 [Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/intro) | 6 [Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf)                                                                                              | 15 [Address Translation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf)                                                                       | 28 [Locks](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-locks)                   | 38 [Redundant Disk Arrays (RAID)](https://pages.cs.wisc.edu/~remzi/OSTEP/file-raid.pdf)         | 55 [_Access Control_](https://pages.cs.wisc.edu/~remzi/OSTEP/security-access.pdf)         |
|                                                                                                                                                | 7 [CPU Scheduling](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf)                                                                                                     | 16 [Segmentation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf)                                                                           | 29 [Locked Data Structures](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks-usage.pdf)                                                                                | 39 [Files and Directories](https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf)               | 56 [_Cryptography_](https://pages.cs.wisc.edu/~remzi/OSTEP/security-crypto.pdf)           |
|                                                                                                                                                | 8 [Multi-level Feedback](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf)                                                                                          | 17 [Free Space Management](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-freespace.pdf)                                                                     | 30 [Condition Variables](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-cv)           | 40 [File System Implementation](https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf) | 57 [_Distributed_](https://pages.cs.wisc.edu/~remzi/OSTEP/security-distributed.pdf)       |
|                                                                                                                                                | 9 [Lottery Scheduling](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-lottery.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/cpu-sched-lottery) | 18 [Introduction to Paging](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf)                                                                       | 31 [Semaphores](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf) [code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-sema)                | 41 [Fast File System (FFS)](https://pages.cs.wisc.edu/~remzi/OSTEP/file-ffs.pdf)                |                                                                                           |
|                                                                                                                                                | 10 [Multi-CPU Scheduling](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-multi.pdf)                                                                                        | 19 [Translation Lookaside Buffers](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-tlbs.pdf)                                                                  | 32 [Concurrency Bugs](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf)                                                                                             | 42 [FSCK and Journaling](https://pages.cs.wisc.edu/~remzi/OSTEP/file-journaling.pdf)            | **Appendices**                                                                            |
|                                                                                                                                                | 11 _[Summary](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-dialogue.pdf)_                                                                                                      | 20 [Advanced Page Tables](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-smalltables.pdf)                                                                    | 33 [Event-based Concurrency](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-events.pdf)                                                                                    | 43 [Log-structured File System (LFS)](https://pages.cs.wisc.edu/~remzi/OSTEP/file-lfs.pdf)      | [_Dialogue_](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-vmm.pdf)                     |
|                                                                                                                                                |                                                                                                                                                                              | 21 [Swapping: Mechanisms](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf)                                                                     | 34 _[Summary](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-dialogue.pdf)_                                                                                                | 44 [Flash-based SSDs](https://pages.cs.wisc.edu/~remzi/OSTEP/file-ssd.pdf)                      | [Virtual Machines](https://pages.cs.wisc.edu/~remzi/OSTEP/vmm-intro.pdf)                  |
|                                                                                                                                                |                                                                                                                                                                              | 22 [Swapping: Policies](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf)                                                                |                                                                                                                                                                            | 45 [Data Integrity and Protection](https://pages.cs.wisc.edu/~remzi/OSTEP/file-integrity.pdf)   | [_Dialogue_](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-monitors.pdf)                |
|                                                                                                                                                |                                                                                                                                                                              | 23 [Complete VM Systems](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-complete.pdf)                                                                        |                                                                                                                                                                            | 46 _[Summary](https://pages.cs.wisc.edu/~remzi/OSTEP/file-dialogue.pdf)_                        | [Monitors](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-monitors.pdf)                   |
|                                                                                                                                                |                                                                                                                                                                              | 24 _[Summary](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-dialogue.pdf)_                                                                                  |                                                                                                                                                                            | 47 _[Dialogue](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-distribution.pdf)_               | [_Dialogue_](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-labs.pdf)                    |
|                                                                                                                                                |                                                                                                                                                                              |                                                                                                                                                         |                                                                                                                                                                            | 48 [Distributed Systems](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-intro.pdf)                 | [Lab Tutorial](https://pages.cs.wisc.edu/~remzi/OSTEP/lab-tutorial.pdf)                   |
|                                                                                                                                                |                                                                                                                                                                              |                                                                                                                                                         |                                                                                                                                                                            | 49 [Network File System (NFS)](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-nfs.pdf)             | [Systems Labs](https://pages.cs.wisc.edu/~remzi/OSTEP/lab-projects-systems.pdf)           |
|                                                                                                                                                |                                                                                                                                                                              |                                                                                                                                                         |                                                                                                                                                                            | 50 [Andrew File System (AFS)](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-afs.pdf)              | [xv6 Labs](https://pages.cs.wisc.edu/~remzi/OSTEP/lab-projects-xv6.pdf)                   |
|                                                                                                                                                |                                                                                                                                                                              |                                                                                                                                                         |                                                                                                                                                                            | 51 _[Summary](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-dialogue.pdf)_                        |                                                                                           |


📖 大话处理器（？偶尔看到，不知道怎么样）

🤔 http://www.harley.com/books/sg3.html
Harley Hahn's Guide to Unix and Linux

👍 https://jyywiki.cn/OS/References.md
1. 编程基础
	1. Brian W. Kernighan and Dennis M. Ritchie. _The C programming language_ (2nd Edition). Prentice Hall, 1998.
	2. [The CERT C Coding Standard: Rules for Developing Safe, Reliable, and Secure Systems](https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard). Software Engineering Institute of Carnegie Mellon University, 2016.
	3. [pwn.college: Learn to hack](https://pwn.college/)
2. UNIX/Linux 编程
	1. Jlevy Hollowa. [_The Art of Command Line_](https://github.com/jlevy/the-art-of-command-line).
	2. Gerard Beekmans. [Linux from Scratch](http://linuxfromscratch.org/).
	3. Harley Hahn. _[Harley Hahn's Guide to Unix and Linux](http://www.harley.com/books/sg3.html)_. McGraw-Hill Higher Education, 2008.
	4. Michael Kerrisk. _The Linux Programming Interface: A Linux and UNIX System Programming Handbook_. No Starch Press, 2010.
	5. W. Richard Stevens and Stephen A. Rago. _[Advanced Programming in the UNIX® Environment](http://www.apuebook.com/apue3e.html)_ (3rd Edition). Addison-Wesley, 2013.
3. 操作系统原理
	1. 陈海波、夏虞斌. _[现代操作系统：原理与实现](http://ipads.se.sjtu.edu.cn/mospi/)_. 机械工业出版社, 2020.
	2. Thomas Anderson, Michael Dahlin. _Operating Systems: Principles and Practice_ (2nd Edition). Recursive Books, 2014.
	3. John R. Levine. _[Linkers and Loaders](https://linker.iecc.com/)_. Morgan-Kauffman, 1999.
	4. Robert Love. _Linux Kernel Development: A Thorough Guide to the Design and Implementation of the Linux Kernel_ (3rd Edition). Addison-Wesley, 2010.
	5. Marshall Kirk McKusick, Keith Bostic, Michael J. Karels, and John S. Quarterman. _[The Design and Implementation of the 4.4BSD Operating System](https://www.freebsd.org/doc/en/books/design-44bsd/book.html)_. Addison-Wesley Longman, 1996.
4. Finally, The Friendly Manual
	1. Linux manpages (tldr, man, info, ...): [man7.org](https://www.man7.org/)
	2. [Bourne-Again Shell (bash)](https://www.gnu.org/software/bash/manual/html_node/index.html)
	3. [GNU Compiler Collection (GCC)](https://gcc.gnu.org/onlinedocs/)
	4. [GNU Debugger (gdb)](https://sourceware.org/gdb/documentation/)
	5. [Binutils (ld, as, objdump, and more)](https://sourceware.org/binutils/docs/)
	6. [GNU Make](https://www.gnu.org/software/make/manual/html_node/index.html)
#### Learning by doing!
💻 [Writing an OS in Rust](https://os.phil-opp.com/)
💻 [OSDev - wiki](https://wiki.osdev.org/Main_Page)


### Other Resources
[CPU Architecture](https://www.tutorialspoint.com/computer_logical_organization/cpu_architecture.htm)

[Programmed Introduction to MIPS Assembly Language](https://chortle.ccsu.edu/assemblytutorial/index.html#part1)
[Simple CPU :) - updated 30/10/2019](http://simplecpudesign.com/simple_cpu_v1/index.html)
[Central Processing Unit (CPU)](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers/xcae6f4a7ff015e7d:computer-components/a/central-processing-unit-cpu)
[Organization of Computer Systems: §4: Processors](https://www.cise.ufl.edu/~mssz/CompOrg/CDA-proc.html)

📄 https://en.wikipedia.org/wiki/Operating_system

📃 https://cpu.land
Putting the “You” in CPU
Curious exactly what happens when you run a program on your computer? Read this article to learn how multiprocessing works, what system calls really are, how computers manage memory with hardware interrupts, and how Linux loads executables.
- [Ch. 0 Intro](https://cpu.land/)
- [Ch. 1 Basics](https://cpu.land/the-basics)
- [Ch. 2 Multitasking](https://cpu.land/slice-dat-time)
- [Ch. 3 Exec](https://cpu.land/how-to-run-a-program)
- [Ch. 4 ELF](https://cpu.land/becoming-an-elf-lord)
- [Ch. 5 Paging](https://cpu.land/the-translator-in-your-computer)
- [Ch. 6 Fork-Exec](https://cpu.land/lets-talk-about-forks-and-cows)
- [Ch. 7 Epilogue](https://cpu.land/epilogue)



## Intro
> 🎬【操作系统概述 (为什么要学操作系统) [南京大学2022操作系统-蒋炎岩-P1]】 https://www.bilibili.com/video/BV1Cm4y1d7Ur/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
> ↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)


### 🤔 RTFM /RTFSC


### ⭐ Computation, Programming Languages and Programs
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)

↗ [Theory of Computation](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

↗ [Computer Languages & Programming Methodology](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Programming Language Processing & Program Execution](../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)


### Computer System Review
![computer_architecture.excalidraw | 800](../../../../Assets/Illustrations/Computer%20System/computer_architecture_and_computer_science.excalidraw.md)
<small>Computer System Overveiw</small>

↗ [Computer Architecture](../Computer%20Architecture/Computer%20Architecture.md)


### Operating System Overview
↗ [📌 Operating System Overview](🦺%20Operating%20System%20Basics/📌%20Operating%20System%20Overview.md)
↗ [Firmware and Computer (OS) Booting](../Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)



## Operating System Security
↗ [Software Security](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/Software%20Security.md)
↗ [Operating System Security (& Mobile Security)](../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/Operating%20System%20Security%20(&%20Mobile%20Security).md)



## Ref
