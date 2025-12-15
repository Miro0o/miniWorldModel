# Linux Kernel (Modules) Management

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro



## Linux Kernel Information
### `/proc` | `sysctl`
↗ [sysctl](../🪆%20Process%20Management/System%20Services%20Management/sysctl.md)
↗ [systemd & systemctl](../🪆%20Process%20Management/System%20Services%20Management/systemd%20&%20systemctl.md)


### `/sys`
sys文件系统：输出内核识别出的各硬件设备的相关属性信息，也有内核对硬件特性的可设置参数；对此些参数的修改，即可定制硬件设备工作特性
- udev：通过读取/sys目录下的硬件设备信息按需为各硬件设备创建设备文件；  
- udev是用户空间程序；专用工具：devadmin, hotplug；  
- udev为设备创建设备文件时，会读取其事先定义好的规则文件。一般在/etc/udev/rules.d/目录下，以及/usr/lib/udev/rules.d/目录下；



## Linux Kernel Modules Management
### 👉 `ldd`


### 👉 `uname`


### 👉 `lsmod` | `modinfo`


### 👉 `modprobe`


### 👉 `insmod` | `rmmod`


### 👉 `depmod`



## Ref
[How to add SMP and Preempt in Kernel module version magic? | StackOveflow]: https://stackoverflow.com/q/55925642

[Linux kernel模块管理相关详解 | CSDN]: https://blog.csdn.net/linuxnews/article/details/51130775
