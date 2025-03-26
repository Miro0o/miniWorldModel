# pwndocker

[TOC]



## Res
🔥 🚧 https://github.com/skysider/pwndocker
A docker environment for pwn in ctf based on **phusion/baseimage:focal-1.2.0**, which is a modified ubuntu 20.04 baseimage for docker

🚧 https://github.com/xrivendell7/Pwndocker
A docker environment for pwn in ctf based on **phusion/baseimage**, which is a modified ubuntu 16.04 baseimage for docker. I forked and magic changed by 🔗 https://github.com/skysider/pwndocker



## Intro


## Ref
[👍 skysider/pwndocker 正确使用姿势]: https://nocbtm.github.io/2020/02/24/skysider-pwndocker-正确使用姿势/

现在pwn题是越来越高版本的libc，一场比赛ubuntu16.04，ubuntu18.04切来切去的十分难受。  
极力推荐这个pwndocker，使用这个pwndocker就不用来回的切虚拟机，利用`patchelf` 或者`process(["/path/to/ld.so", "./test"], env={"LD_PRELOAD":"/path/to/libc.so.6"})`指定libc版本运行。

这个docker已经集成pwn常用工具以及各个版本libc。


