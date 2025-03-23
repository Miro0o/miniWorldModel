# ASIC (Application-Specific Integrated Circuit)

[TOC]



## Res
### Related Topics
↗ [Systems on Chip (SOC)](../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Systems%20on%20Chip%20(SOC).md)



## Intro
![](../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%204.10.35%20PM.png)


---
 🔗 第一章 数字逻辑概论 - 罗小罗同学的文章 - 知乎 - https://zhuanlan.zhihu.com/p/485020828

**ASIC** 是根据用户特定要求和电子系统的特定需要而设计制造的专用集成电路。**与通用集成电路相比具有体积小、重量轻、功耗低、速度高、成本低、保密性强的优点。** ASIC 芯片的制作可以采用 **全定制** 或 **半定制** 的方法。全定制适用于生产批量的成熟产品，由半导体生产厂家制造。 对于生产批量小或研究试制阶段的产品，可以采用半定制方法。目前最为流行的半定制方法是用复杂可编程逻辑器件（Complex Programmable Logic Device，CPLD）和现场可编程门阵列（Field Programmabe Gate Array，FPGA）来进行ASIC 设计。用户通过软件编程，将自己设计的数字系统制作在厂家生产的 CPLD或FPGA芯片上，便得到所需的系统级芯片。

|      | 全定制       | 半定制             |
| ---- | --------- | --------------- |
| 适用范围 | 生产批量的成熟产品 | 生产批量小或研究试制阶段的产品 |
| 流行方法 | ……        | CPLD、FPGA       |


---
https://en.wikipedia.org/wiki/Application-specific_integrated_circuit

An **application-specific integrated circuit (ASIC /ˈeɪsɪk/)** is an integrated circuit (IC) chip customized for a particular use, rather than intended for general-purpose use, such as a chip designed to run in a digital voice recorder or a high-efficiency video codec. Application-specific standard product chips are intermediate between ASICs and industry standard integrated circuits like the 7400 series or the 4000 series. ASIC chips are typically fabricated using **metal–oxide–semiconductor (MOS)** technology, as MOS integrated circuit chips.

As feature sizes have shrunk and chip design tools improved over the years, the maximum complexity (and hence functionality) possible in an ASIC has grown from 5,000 logic gates to over 100 million. Modern ASICs often include entire microprocessors, memory blocks including ROM, RAM, EEPROM, flash memory and other large building blocks. Such an ASIC is often termed a SoC (system-on-chip). Designers of digital ASICs often use a hardware description language (HDL), such as Verilog or VHDL, to describe the functionality of ASICs.


### FPGA 🆚 ASIC
> ↗ [FPGA (Field Programmable Gates Arrays)](../Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/FPGA%20(Field%20Programmable%20Gates%20Arrays).md)

**Field-programmable gate arrays (FPGA)** are the modern-day technology improvement on breadboards, meaning that they are not made to be application-specific as opposed to ASICs. Programmable logic blocks and programmable interconnects allow the same FPGA to be used in many different applications. For smaller designs or lower production volumes, FPGAs may be more cost-effective than an ASIC design, even in production. The **non-recurring engineering (NRE)** cost of an ASIC can run into the millions of dollars. Therefore, device manufacturers typically prefer FPGAs for prototyping and devices with low production volume and ASICs for very large production volumes where NRE costs can be amortized across many devices.



## ASIC Design Principles
Designing full-custom ASICs requires thinking of the chip from three perspectives: From a behavioral perspective, we define exactly what the chip is supposed to do. How do we produce the desired outputs as functions of the inputs? From a structural perspective, we determine which logic components provide the desired behavior. From a physical perspective, we think of how the components should be placed on the silicon die to make the best use of chip real estate and minimize connection distances between the components.

![](../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%204.13.15%20PM.png)



## Ref

