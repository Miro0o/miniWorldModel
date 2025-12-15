# Dongle

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Dongle

A **dongle** is a small piece of computer hardware that connects to a [port](https://en.wikipedia.org/wiki/Computer_port_(hardware) "Computer port (hardware)") on another device to provide it with additional functionality, or enable a pass-through to such a device that adds functionality.

In computing, the term was initially synonymous with _[software protection dongles](https://en.wikipedia.org/wiki/Software_protection_dongle "Software protection dongle")_—a form of hardware [digital rights management](https://en.wikipedia.org/wiki/Digital_rights_management "Digital rights management") in which a piece of [software](https://en.wikipedia.org/wiki/Computer_software "Computer software") will only operate if a specified dongle—which typically contains a [license key](https://en.wikipedia.org/wiki/Product_key "Product key") or some other cryptographic protection mechanism—is plugged into the computer while it is running.

The term has since been applied to other forms of devices with a similar form factor, such as:
- adapters that convert ports to handle different types of connectors (such as [DVI](https://en.wikipedia.org/wiki/DVI "DVI") to [VGA](https://en.wikipedia.org/wiki/VGA "VGA") for displays, [USB-to-serial](https://en.wikipedia.org/wiki/USB-to-serial_adapter "USB-to-serial adapter") data communication, and in modern computing, [USB-C](https://en.wikipedia.org/wiki/USB-C "USB-C") to other types of ports, and [Mobile High-Definition Link](https://en.wikipedia.org/wiki/Mobile_High-Definition_Link "Mobile High-Definition Link"))
- USB wireless adapters for standards such as [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth "Bluetooth") and [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi "Wi-Fi")
- [USB flash drives](https://en.wikipedia.org/wiki/USB_flash_drive "USB flash drive") (more commonly described as "USB stick" or "USB key")
- small form-factor [digital media players](https://en.wikipedia.org/wiki/Digital_media_player "Digital media player") that plug into [HDMI](https://en.wikipedia.org/wiki/HDMI "HDMI") ports (most commonly described as a "media player dongle" or "media player stick")



## Ref
[加密狗工作原理和破解方法简介 | CSDN]: http://t.csdnimg.cn/MMGQj

加密狗是目前流行的一种软件加密工具。它是插在计算机接口上的软硬件结合的软件加密产品。一般有USB口和并口两种，又称**USB加密狗**和**并口加密狗**，目前流行的一般是USB加密狗，并口加密狗在前几年的时候用得比较多。

加密狗内部一般都有几十到几十K字节的存储空间可供读写，有的内部还增添了一个单片机。软件运行时通过向狗发送消息，判断从接口返回密码(简单的就是返回0或1)数据正确与否来检查加密狗是否存在。此种方式可以通过直接修改返回值，来达到破解的目的。另一种可以在加密狗内写入一些数据，程序执行时需要从加密狗内读取数据，这种情况下，如果只是简单的修改返回值，程序是肯定不能正常运行的，所以就有了复制加密狗的破解方法。

加密狗技术实际上并不是很高深的技术，因为主要的加密狗的芯片和内部文件都有专业的黑客及厂家提供，软件作者一般只是把数据文件用`专用软件`写入狗中，所以不存在技术先进不先进之分。这里只是简单的分析了加密狗破解的一些常见思路，对于软件作者来说，还是有相应的策略的，这也就是矛与盾的关系，互相促进，互相提高。

加密狗的破解大致可以分为三种方法：
- 一种是通过硬件克隆或者复制
- 一种是通过SoftICE等Debug工具调试跟踪解密
- 一种是通过编写拦截程序修改软件和加密狗之间的通讯
