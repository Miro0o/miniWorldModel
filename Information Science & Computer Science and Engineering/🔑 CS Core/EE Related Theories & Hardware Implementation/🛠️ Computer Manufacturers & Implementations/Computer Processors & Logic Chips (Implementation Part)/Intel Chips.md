# Intel Chips

[TOC]



## Res
### Related Topics


### Other Resources
https://en.wikipedia.org/wiki/List_of_Intel_processors
https://en.wikipedia.org/wiki/List_of_Intel_CPU_microarchitectures
https://en.wikipedia.org/wiki/Intel_Core#

【1.8纳米芯片的里面有什么？十分钟看懂英特尔最先进的芯片】 https://www.bilibili.com/video/BV14BksBXEnT/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
【地球首枚1.8纳米芯片，人类科技的双重豪赌：GAA晶体管与晶圆背部供电【英特尔18A深度解读】】 https://www.bilibili.com/video/BV1MzUaBoE6k/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### x86 Microarchitectures
> 🔗 https://en.wikipedia.org/wiki/List_of_Intel_CPU_microarchitectures

| Year | Micro­architecture                                                                                                                                                                                                                                                             | Pipeline stages                         | Max  <br>clock  <br>(MHz)                                            | Process node                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1978 | [8086](https://en.wikipedia.org/wiki/Intel_8086 "Intel 8086") (8086, [8088](https://en.wikipedia.org/wiki/Intel_8088 "Intel 8088"))                                                                                                                                            | 2                                       | 5                                                                    | [3000](https://en.wikipedia.org/wiki/3_%CE%BCm_process "3 μm process") nm                                                                                                                                           |
| 1982 | [186](https://en.wikipedia.org/wiki/Intel_80186 "Intel 80186") (80186, [80188](https://en.wikipedia.org/wiki/Intel_80188 "Intel 80188"))                                                                                                                                       | 2                                       | 25                                                                   |                                                                                                                                                                                                                     |
| 1982 | [286](https://en.wikipedia.org/wiki/Intel_80286 "Intel 80286") (80286)                                                                                                                                                                                                         | 3                                       | 25                                                                   | [1500](https://en.wikipedia.org/wiki/1.5_%CE%BCm_process "1.5 μm process") nm                                                                                                                                       |
| 1985 | [386](https://en.wikipedia.org/wiki/Intel_80386 "Intel 80386") (80386)                                                                                                                                                                                                         | 6                                       | 33                                                                   |                                                                                                                                                                                                                     |
| 1989 | [486](https://en.wikipedia.org/wiki/Intel_80486 "Intel 80486") (80486)                                                                                                                                                                                                         | 5                                       | 100                                                                  | [1000](https://en.wikipedia.org/wiki/1_%CE%BCm_process "1 μm process") nm                                                                                                                                           |
| 1993 | [P5](https://en.wikipedia.org/wiki/P5_\(microarchitecture\) "P5 (microarchitecture)") (Pentium)                                                                                                                                                                                | 5                                       | 200                                                                  | [800](https://en.wikipedia.org/wiki/800_nm_process "800 nm process"), [600](https://en.wikipedia.org/wiki/600_nm_process "600 nm process"), [350](https://en.wikipedia.org/wiki/350_nm_process "350 nm process") nm |
| 1995 | [P6](https://en.wikipedia.org/wiki/P6_\(microarchitecture\) "P6 (microarchitecture)") (Pentium Pro, Pentium II)                                                                                                                                                                | 14 (17 with load & store/retire)        | 450                                                                  | [500](https://en.wikipedia.org/wiki/600_nm_process "600 nm process"), 350, [250](https://en.wikipedia.org/wiki/250_nm_process "250 nm process") nm                                                                  |
| 1997 | [P5](https://en.wikipedia.org/wiki/P5_\(microarchitecture\) "P5 (microarchitecture)") (Pentium MMX)                                                                                                                                                                            | 6                                       | 233                                                                  | 350 nm                                                                                                                                                                                                              |
| 1999 | [P6](https://en.wikipedia.org/wiki/P6_\(microarchitecture\)#From_Pentium_Pro_to_Pentium_III "P6 (microarchitecture)") (Pentium III)                                                                                                                                            | 12 (15 with load & store/retire)        | 1400                                                                 | 250, [180](https://en.wikipedia.org/wiki/180_nm_process "180 nm process"), [130](https://en.wikipedia.org/wiki/130_nm_process "130 nm process") nm                                                                  |
| 2000 | [NetBurst](https://en.wikipedia.org/wiki/NetBurst "NetBurst") (Pentium 4)  <br>(Willamette)                                                                                                                                                                                    | 20 unified with branch prediction       | 2000                                                                 | 180 nm                                                                                                                                                                                                              |
| 2002 | NetBurst (Pentium 4)  <br>(Northwood, Gallatin)                                                                                                                                                                                                                                | 3466                                    | 130 nm                                                               |                                                                                                                                                                                                                     |
| 2003 | [Pentium M](https://en.wikipedia.org/wiki/Pentium_M_\(microarchitecture\) "Pentium M (microarchitecture)") (Banias, Dothan)  <br>[Enhanced Pentium M](https://en.wikipedia.org/wiki/Enhanced_Pentium_M_\(microarchitecture\) "Enhanced Pentium M (microarchitecture)") (Yonah) | 10 (12 with fetch/retire)               | 2333                                                                 | 130, [90](https://en.wikipedia.org/wiki/90_nm_process "90 nm process"), [65](https://en.wikipedia.org/wiki/65_nm_process "65 nm process") nm                                                                        |
| 2004 | NetBurst (Pentium 4, Pentium D)  <br>([Prescott](https://en.wikipedia.org/wiki/NetBurst#Revisions "NetBurst"))                                                                                                                                                                 | 31 unified with branch prediction       | 3800                                                                 | 90, 65 nm                                                                                                                                                                                                           |
| 2006 | [Intel Core](https://en.wikipedia.org/wiki/Intel_Core_\(microarchitecture\) "Intel Core (microarchitecture)")                                                                                                                                                                  | 12 (14 with fetch/retire)               | 3000                                                                 | 65 nm                                                                                                                                                                                                               |
| 2007 | [Penryn](https://en.wikipedia.org/wiki/Penryn_\(microarchitecture\) "Penryn (microarchitecture)") (die shrink)                                                                                                                                                                 | 3333                                    | [45](https://en.wikipedia.org/wiki/45_nm_process "45 nm process") nm |                                                                                                                                                                                                                     |
| 2008 | [Nehalem](https://en.wikipedia.org/wiki/Nehalem_\(microarchitecture\) "Nehalem (microarchitecture)")                                                                                                                                                                           | 20 unified (14 without miss prediction) | 3600                                                                 |                                                                                                                                                                                                                     |
|      | [Bonnell](https://en.wikipedia.org/wiki/Bonnell_\(microarchitecture\) "Bonnell (microarchitecture)")                                                                                                                                                                           | 16 (20 with prediction miss)            | 2100                                                                 |                                                                                                                                                                                                                     |
| 2010 | [Westmere](https://en.wikipedia.org/wiki/Westmere_\(microarchitecture\) "Westmere (microarchitecture)") (die shrink)                                                                                                                                                           | 20 unified (14 without miss prediction) | 3866                                                                 | [32](https://en.wikipedia.org/wiki/32_nm_process "32 nm process") nm                                                                                                                                                |
| 2011 | [Saltwell](https://en.wikipedia.org/wiki/Saltwell_\(microarchitecture\) "Saltwell (microarchitecture)") (die shrink)                                                                                                                                                           | 16 (20 with prediction miss)            | 2130                                                                 |                                                                                                                                                                                                                     |
|      | [Sandy Bridge](https://en.wikipedia.org/wiki/Sandy_Bridge "Sandy Bridge")                                                                                                                                                                                                      | 14 (16 with fetch/retire)               | 4000                                                                 |                                                                                                                                                                                                                     |
| 2012 | [Ivy Bridge](https://en.wikipedia.org/wiki/Ivy_Bridge_\(microarchitecture\) "Ivy Bridge (microarchitecture)") (die shrink)                                                                                                                                                     | 4100                                    | [22](https://en.wikipedia.org/wiki/22_nm_process "22 nm process") nm |                                                                                                                                                                                                                     |
| 2013 | _[Silvermont](https://en.wikipedia.org/wiki/Silvermont "Silvermont")_                                                                                                                                                                                                          | 14–17 (16–19 with fetch/retire)         | 2670                                                                 |                                                                                                                                                                                                                     |
|      | [Haswell](https://en.wikipedia.org/wiki/Haswell_\(microarchitecture\) "Haswell (microarchitecture)")                                                                                                                                                                           | 14 (16 with fetch/retire)               | 4400                                                                 |                                                                                                                                                                                                                     |
| 2014 | [Broadwell](https://en.wikipedia.org/wiki/Broadwell_\(microarchitecture\) "Broadwell (microarchitecture)") (die shrink)                                                                                                                                                        | 3700                                    | [14](https://en.wikipedia.org/wiki/14_nm_process "14 nm process") nm |                                                                                                                                                                                                                     |
| 2015 | [Airmont](https://en.wikipedia.org/wiki/Airmont_\(microarchitecture\) "Airmont (microarchitecture)") (die shrink)                                                                                                                                                              | 14–17 (16–19 with fetch/retire)         | 2640                                                                 |                                                                                                                                                                                                                     |
|      | [Skylake](https://en.wikipedia.org/wiki/Skylake_\(microarchitecture\) "Skylake (microarchitecture)")                                                                                                                                                                           | 14 (16 with fetch/retire)               | 5300                                                                 |                                                                                                                                                                                                                     |
| 2016 | _[Goldmont](https://en.wikipedia.org/wiki/Goldmont "Goldmont")_                                                                                                                                                                                                                | 20 unified with branch prediction       | 2600                                                                 |                                                                                                                                                                                                                     |
| 2017 | _[Goldmont Plus](https://en.wikipedia.org/wiki/Goldmont_Plus "Goldmont Plus")_                                                                                                                                                                                                 | 20 unified with branch prediction (?)   | 2800                                                                 |                                                                                                                                                                                                                     |
| 2018 | [Palm Cove](https://en.wikipedia.org/wiki/Cannon_Lake_\(microprocessor\) "Cannon Lake (microprocessor)")                                                                                                                                                                       | 14 (16 with fetch/retire)               | 3200                                                                 | [10](https://en.wikipedia.org/wiki/10_nm_process "10 nm process") nm                                                                                                                                                |
| 2019 | [Sunny Cove](https://en.wikipedia.org/wiki/Sunny_Cove_\(microarchitecture\) "Sunny Cove (microarchitecture)")                                                                                                                                                                  | 12–19 (misprediction)                   | 4100                                                                 |                                                                                                                                                                                                                     |
| 2020 | [_Tremont_](https://en.wikipedia.org/wiki/Tremont_\(microarchitecture\) "Tremont (microarchitecture)")                                                                                                                                                                         | 20 unified                              | 3300                                                                 |                                                                                                                                                                                                                     |
|      | [Willow Cove](https://en.wikipedia.org/wiki/Willow_Cove "Willow Cove")                                                                                                                                                                                                         | 12 unified                              | 5300                                                                 |                                                                                                                                                                                                                     |
| 2021 | [Cypress Cove](https://en.wikipedia.org/wiki/Cypress_Cove_\(microarchitecture\) "Cypress Cove (microarchitecture)")                                                                                                                                                            | 12 unified                              | 5300                                                                 | [14](https://en.wikipedia.org/wiki/14_nm_process "14 nm process") nm                                                                                                                                                |
|      | [Golden Cove](https://en.wikipedia.org/wiki/Golden_Cove "Golden Cove")                                                                                                                                                                                                         | 12 unified                              | 5500                                                                 | [Intel 7](https://en.wikipedia.org/wiki/7_nm_process "7 nm process")                                                                                                                                                |
|      | [_Gracemont_](https://en.wikipedia.org/wiki/Gracemont_\(microarchitecture\) "Gracemont (microarchitecture)")                                                                                                                                                                   | 20 unified with misprediction penalty   | 4300                                                                 |                                                                                                                                                                                                                     |
| 2022 | [Raptor Cove](https://en.wikipedia.org/wiki/Raptor_Cove "Raptor Cove")                                                                                                                                                                                                         | 12 unified                              | 6200                                                                 |                                                                                                                                                                                                                     |
| 2023 | [Redwood Cove](https://en.wikipedia.org/w/index.php?title=Redwood_Cove&action=edit&redlink=1 "Redwood Cove (page does not exist)")                                                                                                                                             | 10 unified                              |                                                                      | [Intel 4](https://en.wikipedia.org/wiki/5_nm_process "5 nm process"), Intel 3                                                                                                                                       |
|      | Crestmont                                                                                                                                                                                                                                                                      |                                         |                                                                      | Intel 4, TSMC N6, Intel 3                                                                                                                                                                                           |
| 2024 | [Lion Cove](https://en.wikipedia.org/wiki/Lion_Cove "Lion Cove")                                                                                                                                                                                                               | 10 unified                              |                                                                      | [TSMC N3B](https://en.wikipedia.org/wiki/3_nm_process "3 nm process")                                                                                                                                               |
|      | _[Skymont](https://en.wikipedia.org/w/index.php?title=Skymont&action=edit&redlink=1 "Skymont (page does not exist)")_                                                                                                                                                          | 16 unified                              |                                                                      |                                                                                                                                                                                                                     |
| 2026 | [Cougar Cove](https://en.wikipedia.org/w/index.php?title=Cougar_Cove&action=edit&redlink=1 "Cougar Cove (page does not exist)")                                                                                                                                                |                                         |                                                                      | [Intel 18A](https://en.wikipedia.org/w/index.php?title=Intel_18A&action=edit&redlink=1 "Intel 18A (page does not exist)")                                                                                           |
|      | [Panther Cove](https://en.wikipedia.org/w/index.php?title=Panther_Cove&action=edit&redlink=1 "Panther Cove (page does not exist)")                                                                                                                                             |                                         |                                                                      |                                                                                                                                                                                                                     |
|      | _[Darkmont](https://en.wikipedia.org/w/index.php?title=Darkmont&action=edit&redlink=1 "Darkmont (page does not exist)")_                                                                                                                                                       |                                         |                                                                      |                                                                                                                                                                                                                     |
|      | [Coyote Cove](https://en.wikipedia.org/w/index.php?title=Coyote_Cove&action=edit&redlink=1 "Coyote Cove (page does not exist)")                                                                                                                                                |                                         |                                                                      |                                                                                                                                                                                                                     |
|      | [_Arctic Wolf_](https://en.wikipedia.org/w/index.php?title=Arctic_Wolf_\(microarchitecture\)&action=edit&redlink=1 "Arctic Wolf (microarchitecture) (page does not exist)")                                                                                                    |                                         |                                                                      |                                                                                                                                                                                                                     |
| 2027 | [Griffin Cove](https://en.wikipedia.org/w/index.php?title=Griffin_Cove_\(microarchitecture\)&action=edit&redlink=1 "Griffin Cove (microarchitecture) (page does not exist)")                                                                                                   |                                         |                                                                      |                                                                                                                                                                                                                     |


### Intel E-Cores and P-Cores
> 🤖 Google Search AI Mode

Intel's E-cores (Efficient cores) and P-cores (Performance cores) are ==two different types of processing cores in their hybrid CPU architecture, designed to balance power and speed==: **P-cores handle demanding tasks for high performance**, while smaller, lower-power **E-cores manage background processes efficiently**, optimizing overall system performance and battery life by assigning work to the right core type.



## Intel Processors Before 32-bit
### 4-bit Processors


### 8-bit Processors
#### Intel 8008

#### Intel 8080

#### Intel 8085


### 16-bit Processors



## Intel 32-bit Processors



## Intel 64-bit Processors
### Intel 64 – Core


### Intel 64 – Nehalem
#### Intel Pentium (Nehalem)

#### Core i3 /i5 /i7 (1st Gen)
#### Xeon


### Sandy Bridge / Ivy Bridge
#### Celeron (Sandy /Ivy)

#### Pentium (Sandy /Ivy)

#### Core i3 /i5 /i7 (2nd Gen)


### Golden Cove (P-cores) /Gracemont (E-cores)
> 🔗 https://en.wikipedia.org/wiki/Golden_Cove#Raptor_Cove

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117001248.png)
<small>Intel Golden Cove CPU core microarchitecture <br> <a>https://en.wikipedia.org/wiki/Golden_Cove#Raptor_Cove</a></small>
#### Core i3 /i5 /i7 /i9 (12th Gen) -- Alder Lake
> 🔗 https://en.wikipedia.org/wiki/Alder_Lake


#### Xeon -- Sapphire Rapids


### Raptor Cove
#### Core i3 /i5 /i7 /i9 (13th and 14th Gen) -- Raptor Lake
##### Core i9 13900k
![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117002800.png)
![](../../../../../../../../Assets/Pics/Pasted%20image%2020260117002004.png)
<small>Die shots of the intel core i9 13900k <br> Image credit: Fritzchen Fritz <br> <a>https://www.pcgamer.com/oh-sorry-i-was-busy-admiring-these-gorgeous-die-shots-of-the-intel-core-i9-13900k/</a></small>


### Redwood Cove (P-cores) /Crestmont (E-cores)
#### Intel 64 Core Series 1 – Meteor Lake (since 2023)
> 🔗 https://en.wikipedia.org/wiki/Meteor_Lake

> 🔗 https://en.wikipedia.org/wiki/Intel_Core#Core_and_Core_Ultra_3/5/7/9_series

Starting with the Meteor Lake mobile series launched in December 2023 (with the exception of Raptor Lake-HX Refresh), Intel introduced a new naming system for its new and upcoming processors. The numbers 3, 5, 7 and 9 which denote tiers are still used, but the letter 'i' is dropped, and there is a new "Core Ultra" sub-brand. Like AMD with their [Ryzen 7000 mobile series](https://en.wikipedia.org/wiki/Ryzen#Mobile_6 "Ryzen") and later processors, Intel now refreshes older architectures to be sold as more affordable mainstream processors while the latest architectures are released as "premium" products, under the Core Ultra brand
##### Core (3 /5 /7 /9) and Core Ultra (3 /5 /7 /9)


### Lion Cove (P-cores) /Skymont (E-cores)
> 🔗 https://en.wikipedia.org/wiki/Lion_Cove

#### Intel 64 Core Series 2 - Lunar Lake & Arrow Lake
> 🎬 https://youtu.be/wusyYscQi0o?si=IdCczQTejw03TDlv
>
> 🔗 https://www.techpowerup.com/336412/inside-arrow-lake-intels-die-exposed-and-annotated

![](../../../../../Assets/Pics/Pasted%20image%2020260119193250.png)
![](../../../../../Assets/Pics/Pasted%20image%2020260119193257.png)
![](../../../../../Assets/Pics/Pasted%20image%2020260119193305.png)
![](../../../../../Assets/Pics/Pasted%20image%2020260119193311.png)


### Coyote Cove (P-cores) /Arctic Wolf (E-cores)
#### Intel 64 Core Series 4 - Nova Lake



## Ref

