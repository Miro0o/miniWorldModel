# VDE

[TOC]



## Res
### Related Topics
[vde-2](https://github.com/virtualsquare/vde-2)
[vde_vmnet](https://github.com/lima-vm/vde_vmnet)
socket_vmnet
[qemu_vmnet](https://github.com/alessiodionisi/qemu-vmnet)



## Intro: VDE (Virtual Distributed Ethernet)
Long long time ago based on **uml-router** Copyright 2002 Yon Uriarte and Jeff Dike
qemu-vde-HOWTO is (c) by Jim Brown

> Notice: Virtual Distributed Ethernet is not related in any way with [www.vde.com](http://www.vde.com/) ("Verband der Elektrotechnik, Elektronik und Informationstechnik" i.e. the German "Association for Electrical, Electronic & Information Technologies").


### Components of the VDE architecture
- VDE switches: virtual counterpart of ethernet switches.
- VDE cables: virtual counterpart of a crossed-cable used to connect two switches.


### VDE 2 includes:
- switch management both from console and from a "unix socket terminal"
- VLAN 801.1q *almost* compatible
- FSTP (fast spanning tree) already incomplete and currently not tested for 802.1d/w/s
  compatibility. under development. (vde_switch must be compiled with the FSTP flag on)


### More
visit https://github.com/virtualsquare/vde-2



## Ref