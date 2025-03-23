# ACPI

[TOC]



## Res


## Intro
> ACPI将电源管理交给了OS，而非之前的APM将电源管理交给BIOS。
> ↗ [APM](APM.md)


### Why ACPI?
在ACPI诞生前，高级电源管理(APM, Advanced Power Management）将电源管理几乎完全交给BIOS，呆板而限制很多，这让微软十分不爽，它希望在电源管理和硬件配置上能有更多的自主权，这也是合理的，谁比操作系统更懂现在用户在干什么呢？

1997年由英特尔、微软、东芝公司共同提出、制定了ACPI 1.0规范。ACPI，顾名思义，就是配置硬件和管理电源的规范。2000年8月康柏和凤凰科技加入，推出 ACPI 2.0规格。2004年9月惠普取代康柏，推出 ACPI 3.0规格。2009年6月16日則推出 ACPI 4.0规格。2011年11月23日推出ACPI 5.0规格。由于ACPI技术正被多个操作系统和处理器架构采用，该规格的管理模式需要与时俱进。2013年10月，ACPI的推广者们一致同意将ACPI的属有归到UEFI论坛。从那以后新的ACPI规格将由UEFI论坛制定。最新的规范是ACPI 6.1，大家可以在[Welcome to Unified Extensible Firmware Interface Forum](https://link.zhihu.com/?target=http%3A//www.uefi.org/)上下载到最新的版本。


### ACPI Architecture
> 🔗 ACPI与UEFI - 老狼的文章 - 知乎 https://zhuanlan.zhihu.com/p/25893464


![](../../../../../../../../Assets/Pics/Pasted%20image%2020230406111937.png)
可以看出它并不包含古老的PIC,CMOS，PIT等等规范，这些我们称之为Legacy支持。ACPI可以实现的功能包括：

**1.系统电源管理**（System power management）

**2.设备电源管理**（Device power management）

**3.处理器电源管理（Processor power management）**

**4.设备和处理器性能管理**（Device and processor performance management）

**5.配置/即插即用**（Configuration/Plug and Play）

**6.系统事件**（System Event）

**7.电池管理**（Battery management）

**8.温度管理**（Thermal management）

**9.嵌入式控制器**（Embedded Controller）

**10.SMBus控制器**（SMBus Controller）


我们前面几篇CPU电源管理的定义也可以在这里找到出处，从整体来看整个电源状态转化图如下：
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230406112001.png)

> G0/G1/G2/G3表示整体的状态，S1/S2/S3/S4/S5表示睡眠状态，C1/C1../Cn和P0/P1..Px就是我们前文的Pstates(EIST)和CStates，D0/D1/D2/D3表示不同的设备电源状态。有机会我们再详细介绍G/S/D的内容。


从另外一个角度，我们可以将ACPI可以看作分为两个部分：  

**1. 各种表单(Tables)**。这些表单描述了系统的各种状态，如MADT，SRAT等等，这些状态需要OS知晓，例如有多少个CPU(逻辑上)，NUMA亲缘关系如何，APIC等等。

**2. 由Differentiated System Description Table (DSDT)和Secondary System Description Table (SSDT)指向的AML代码**。这是一种ACPI规范规定的伪代码，可以想象成Java的Bytecode（功能上相差巨大）。它由ASL编译而成（对应于Java source code）。ASL程序提供了OS和固件调用的接口(method)。ACPI定义了很多预定义的Method，通过它们，OS和firmware互相传送信息（例如 主板PCI设备树，IRQ，OS支持哪些功能等等）；OS还可以调用firmware提供的接口；固件从OS那里能得到各种事件(Event)的通知等等。这点正是ACPI强大灵活之处。


### ACPI vs UEFI
> 有人也许会说ACPI提供了OS可用的硬件抽象和接口（method），UEFI也提供了抽象和接口，是不是也有冲突？其实两者面向的方面不同，ACPI主要是从硬件抽象的角度来抽象硬件，UEFI是从软件一致方向定义规范。这也是他们不但没有替代关系，反而从ACPI 5.0 开始ACPI并入UEFI论坛管理的原因。需要指出的是ACPI和UEFI没有绑定关系，ACPI可以在uboot上实现，而UEFI也可以报告DT，但他们一起工作起来会更加顺畅。UEFI提供了帮助安装更新ACPI table的接口（protocol）.大家可以在UEFI/PI spec里面找到相应的接口定义。

↗ [UEFI BIOS](../../📌%20UEFI%20BIOS/UEFI%20BIOS.md)


### ACPI vs FDT&DT

↗ [FDT&DT](../../FDT&DT/FDT&DT.md)




## Ref
[ACPI 简介 - 追寻内心的宁静的文章 - 知乎]: https://zhuanlan.zhihu.com/p/283054574

[ACPI Spec]: https://link.zhihu.com/?target=https%3A//www.uefi.org/sites/default/files/resources/ACPI_6_2.pdf
[ACPI-Introduction]: https://link.zhihu.com/?target=https%3A//acpica.org/sites/acpica/files/ACPI-Introduction.pdf
[ACPI_Overview]: https://link.zhihu.com/?target=https%3A//uefi.org/sites/default/files/resources/ACPI_Overview.pdf
[ACPI Source Language (ASL) Tutorial]: https://link.zhihu.com/?target=https%3A//acpica.org/sites/acpica/files/asl_tutorial_v20190625.pdf
[Difference Between APM and ACPI]: https://link.zhihu.com/?target=http%3A//www.differencebetween.net/technology/software-technology/difference-between-apm-and-acpi/
[APM和ACPI比较]: https://link.zhihu.com/?target=https%3A//blog.csdn.net/xie0812/article/details/49301317

[ACPI与UEFI - 老狼的文章 - 知乎]: https://zhuanlan.zhihu.com/p/25893464


