# xv6 (a simple unix-like teaching operating system)

[TOC]



## Res
🏠 https://pdos.csail.mit.edu/6.828/2022/xv6.html
🏫 [6.S081(6.828, 6.1810) Operating System Engineering](../../../../🗺%20CS%20Overview/👩🏼‍🏫%20Courses%20of%20Universities/MIT/6.S081(6.828,%206.1810)%20Operating%20System%20Engineering/6.S081(6.828,%206.1810)%20Operating%20System%20Engineering.md)


### Related Topics
↗ [RISC-V Instruction Set](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/RISC%20(Reduced%20Instruction%20Set%20Computer)/RISC-V%20Instruction%20Set/RISC-V%20Instruction%20Set.md)


### Other Resources
[github.com/daviddwlee84/OperatingSystem](https://github.com/daviddwlee84/OperatingSystem)
PKU OS course project and notes based on Nachos and XV6

【Xv6 代码导读 (调试工具配置；调试系统调用执行) [南京大学2022操作系统-P18]】 https://www.bilibili.com/video/BV1DY4y1a7YD/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
【Xv6 上下文切换 (上下文切换的实现；状态机的封装与恢复) [南京大学2022操作系统-P19]】 https://www.bilibili.com/video/BV1eA4y1Q76T/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Overview
### Introduction
Xv6 is a teaching operating system developed in the summer of 2006 for MIT's operating systems course, [6.828: Operating System Engineering](http://pdos.csail.mit.edu/6.828). We hope that xv6 will be useful in other courses too. This page collects resources to aid the use of xv6 in other courses, including a commentary on the source code itself.


### History and Background
For many years, MIT had no operating systems course. In the fall of 2002, one was created to teach operating systems engineering. In the course lectures, the class worked through [Sixth Edition Unix (aka V6)](https://pdos.csail.mit.edu/6.828/2012/xv6.html#v6) using John Lions's famous commentary. In the lab assignments, students wrote most of an exokernel operating system, eventually named Jos, for the Intel x86. Exposing students to multiple systems–V6 and Jos–helped develop a sense of the spectrum of operating system designs.

V6 presented pedagogic challenges from the start. Students doubted the relevance of an obsolete 30-year-old operating system written in an obsolete programming language (pre-K&R C) running on obsolete hardware (the PDP-11). Students also struggled to learn the low-level details of two different architectures (the PDP-11 and the Intel x86) at the same time. By the summer of 2006, we had decided to replace V6 with a new operating system, xv6, modeled on V6 but written in ANSI C and running on multiprocessor Intel x86 machines. Xv6's use of the x86 makes it more relevant to students' experience than V6 was and unifies the course around a single architecture. Adding multiprocessor support requires handling concurrency head on with locks and threads (instead of using special-case solutions for uniprocessors such as enabling/disabling interrupts) and helps relevance. Finally, writing a new system allowed us to write cleaner versions of the rougher parts of V6, like the scheduler and file system. 6.828 substituted xv6 for V6 in the fall of 2006. 


### Xv6 sources and text
The latest xv6 source is available via
``` shell
git clone git://github.com/mit-pdos/xv6-public.git
```

We also distribute the sources as a printed booklet with line numbers that keep everyone together during lectures. The booklet is available as [xv6-rev7.pdf](https://pdos.csail.mit.edu/6.828/2012/xv6/xv6-rev7.pdf). To get the version corresponding to this booklet, run
```shell
git checkout -b xv6-rev7 xv6-rev7
```

The xv6 source code is licensed under the traditional [MIT license](http://www.opensource.org/licenses/mit-license.php); see the LICENSE file in the source distribution. To help students read through xv6 and learn about the main ideas in operating systems we also distribute a [textbook/commentary](https://pdos.csail.mit.edu/6.828/2012/xv6/book-rev7.pdf) for the latest xv6. The line numbers in this book refer to the above source booklet.

xv6 compiles using the GNU C compiler, targeted at the x86 using ELF binaries. On BSD and Linux systems, you can use the native compilers; On OS X, which doesn't use ELF binaries, you must use a cross-compiler. Xv6 does boot on real hardware, but typically we run it using the QEMU emulator. Both the GCC cross compiler and QEMU can be found on the [6.828 tools page](https://pdos.csail.mit.edu/6.828/2012/tools.html).


### Xv6 lecture material
In 6.828, the lectures in the first half of the course cover the xv6 sources and text. The lectures in the second half consider advanced topics using research papers; for some, xv6 serves as a useful base for making discussions concrete. The lecture notes are available from the 6.828 [schedule](https://pdos.csail.mit.edu/6.828/schedule.html) page.



## Ref

