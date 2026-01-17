# DRAM (Dynamic RAM) Technology

[TOC]



## Res
### Related Topics


### Learning Resources
https://youtu.be/7J7X7aZvMXQ?si=nihtTACDaAFqfU14
How does Computer Memory Work? 💻🛠


### Other Resources



## Intro: Dynamic RAM Technology
> 🔗 https://en.wikipedia.org/wiki/Dynamic_random-access_memory

**Dynamic random-access memory** (dynamic RAM or DRAM) is a type of random-access semiconductor memory that stores each bit of data in a memory cell, usually consisting of a tiny capacitor and a transistor, both typically based on metal–oxide–semiconductor (MOS) technology. While most DRAM memory cell designs use a capacitor and transistor, some only use two transistors. In the designs where a capacitor is used, the capacitor can either be charged or discharged; these two states are taken to represent the two values of a bit, conventionally called 0 and 1. The electric charge on the capacitors gradually leaks away; without intervention the data on the capacitor would soon be lost. To prevent this, DRAM requires an external memory refresh circuit which periodically rewrites the data in the capacitors, restoring them to their original charge. This refresh process is the defining characteristic of dynamic random-access memory, in contrast to static random-access memory (SRAM) which does not require data to be refreshed. Unlike flash memory, DRAM is volatile memory (vs. non-volatile memory), since it loses its data quickly when power is removed. However, DRAM does exhibit limited data remanence.

DRAM typically takes the form of an integrated circuit chip, which can consist of dozens to billions of DRAM memory cells. DRAM chips are widely used in digital electronics where low-cost and high-capacity computer memory is required. One of the largest applications for DRAM is the main memory (colloquially called the RAM) in modern computers and graphics cards (where the main memory is called the graphics memory). It is also used in many portable devices and video game consoles. In contrast, SRAM, which is faster and more expensive than DRAM, is typically used where speed is of greater concern than cost and size, such as the cache memories in processors.

The need to refresh DRAM demands more complicated circuitry and timing than SRAM. This complexity is offset by the structural simplicity of DRAM memory cells: only one transistor and a capacitor are required per bit, compared to four or six transistors in SRAM. This allows DRAM to reach very high densities with a simultaneous reduction in cost per bit. Refreshing the data consumes power, causing a variety of techniques to be used to manage the overall power consumption. For this reason, DRAM usually needs to operate with a memory controller; the memory controller needs to know DRAM parameters, especially memory timings, to initialize DRAMs, which may be different depending on different DRAM manufacturers and part numbers.

DRAM had a 47% increase in the price-per-bit in 2017, the largest jump in 30 years since the 45% jump in 1988, while in recent years the price has been going down. In 2018, a "key characteristic of the DRAM market is that there are currently only three major suppliers — Micron Technology, SK Hynix and Samsung Electronics" that are "keeping a pretty tight rein on their capacity". There is also Kioxia (previously Toshiba Memory Corporation after 2017 spin-off) which doesn't manufacture DRAM. Other manufacturers make and sell DIMMs (but not the DRAM chips in them), such as Kingston Technology, and some manufacturers that sell stacked DRAM (used e.g. in the fastest supercomputers on the exascale), separately such as Viking Technology. Others sell such integrated into other products, such as Fujitsu into its CPUs, AMD in GPUs, and Nvidia, with HBM2 in some of their GPU chips.

![](../../../../../../../../../Assets/Pics/Screenshot%202025-03-28%20at%2010.55.58.png)



## Versions of DRAM
> 🔗 https://en.wikipedia.org/wiki/Dynamic_random-access_memory


### 1️⃣ ADRAM (Asynchronous Dynamic RAM)
The original DRAM, now known by the retronym asynchronous DRAM was the first type of DRAM in use. From its origins in the late 1960s, it was commonplace in computing up until around 1997, when it was mostly replaced by synchronous DRAM. In the present day, manufacture of asynchronous RAM is relatively rare.
### 2️⃣ SDRAM (Synchronous Dynamic RAM)
Synchronous dynamic RAM (SDRAM) significantly revises the asynchronous memory interface, adding a clock (and a clock enable) line. All other signals are received on the rising edge of the clock.

> 🔗 https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#

|Date of introduction|Chip name|Capacity ([bits](https://en.wikipedia.org/wiki/Bit "Bit"))[[6]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-binpre-6)|SDRAM type|Manufacturer(s)|[Process](https://en.wikipedia.org/wiki/Semiconductor_device_fabrication "Semiconductor device fabrication")|[MOSFET](https://en.wikipedia.org/wiki/MOSFET "MOSFET")|Area|Ref|
|---|---|---|---|---|---|---|---|---|
|1992|KM48SL2000|16 [Mbit](https://en.wikipedia.org/wiki/Megabit "Megabit")|[SDR](https://en.wikipedia.org/wiki/SDR_SDRAM "SDR SDRAM")|[Samsung](https://en.wikipedia.org/wiki/Samsung_Electronics "Samsung Electronics")|_**?**_|[CMOS](https://en.wikipedia.org/wiki/CMOS "CMOS")|_**?**_|[[41]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-KM48SL2000-41)[[5]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-electronic-design-5)|
|1996|MSM5718C50|18 Mbit|[RDRAM](https://en.wikipedia.org/wiki/RDRAM "RDRAM")|[Oki](https://en.wikipedia.org/wiki/Oki_Electric_Industry "Oki Electric Industry")|_**?**_|CMOS|325 mm2|[[42]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-oki-rdram-42)|
|[N64 RDRAM](https://en.wikipedia.org/wiki/Nintendo_64_technical_specifications "Nintendo 64 technical specifications")|36 Mbit|RDRAM|[NEC](https://en.wikipedia.org/wiki/NEC "NEC")|_**?**_|CMOS|_**?**_|[[43]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-43)|
|_**?**_|1024 Mbit|SDR|[Mitsubishi](https://en.wikipedia.org/wiki/Mitsubishi_Electric "Mitsubishi Electric")|[150 nm](https://en.wikipedia.org/wiki/180_nanometer "180 nanometer")|CMOS|_**?**_|[[44]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-stol-44)|
|1997|_**?**_|1024 Mbit|SDR|[Hyundai](https://en.wikipedia.org/wiki/Hyundai_Electronics "Hyundai Electronics")|_**?**_|[SOI](https://en.wikipedia.org/wiki/Silicon_on_insulator "Silicon on insulator")|_**?**_|[[45]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix90s-45)|
|1998|MD5764802|64 Mbit|RDRAM|Oki|_**?**_|CMOS|325 mm2|[[42]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-oki-rdram-42)|
|March 1998|Direct RDRAM|72 Mbit|RDRAM|[Rambus](https://en.wikipedia.org/wiki/Rambus "Rambus")|_**?**_|CMOS|_**?**_|[[46]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-46)|
|June 1998|_**?**_|64 Mbit|[DDR](https://en.wikipedia.org/wiki/DDR_SDRAM "DDR SDRAM")|Samsung|_**?**_|CMOS|_**?**_|[[38]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung98-38)[[47]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung99-47)[[48]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-phys-48)|
|1998|_**?**_|64 Mbit|DDR|Hyundai|_**?**_|CMOS|_**?**_|[[45]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix90s-45)|
|128 Mbit|SDR|Samsung|_**?**_|CMOS|_**?**_|[[49]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung-history-49)[[47]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung99-47)|
|1999|_**?**_|128 Mbit|DDR|Samsung|_**?**_|CMOS|_**?**_|[[47]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung99-47)|
|1024 Mbit|DDR|Samsung|[140 nm](https://en.wikipedia.org/wiki/130_nanometer "130 nanometer")|CMOS|_**?**_|[[44]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-stol-44)|
|2000|[GS eDRAM](https://en.wikipedia.org/wiki/PlayStation_2_technical_specifications "PlayStation 2 technical specifications")|32 Mbit|[eDRAM](https://en.wikipedia.org/wiki/EDRAM "EDRAM")|[Sony](https://en.wikipedia.org/wiki/Sony "Sony"), [Toshiba](https://en.wikipedia.org/wiki/Toshiba "Toshiba")|[180 nm](https://en.wikipedia.org/wiki/180_nm "180 nm")|CMOS|279 mm2|[[50]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-sony2003-50)|
|2001|_**?**_|288 Mbit|RDRAM|Hynix|_**?**_|CMOS|_**?**_|[[51]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2000s-51)|
|_**?**_|[DDR2](https://en.wikipedia.org/wiki/DDR2_SDRAM "DDR2 SDRAM")|Samsung|[100 nm](https://en.wikipedia.org/wiki/100_nm "100 nm")|CMOS|_**?**_|[[48]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-phys-48)[[44]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-stol-44)|
|2002|_**?**_|256 Mbit|SDR|Hynix|_**?**_|CMOS|_**?**_|[[51]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2000s-51)|
|2003|[EE+GS eDRAM](https://en.wikipedia.org/wiki/PlayStation_2_technical_specifications "PlayStation 2 technical specifications")|32 Mbit|eDRAM|Sony, Toshiba|[90 nm](https://en.wikipedia.org/wiki/90_nm "90 nm")|CMOS|86 mm2|[[50]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-sony2003-50)|
|_**?**_|72 Mbit|[DDR3](https://en.wikipedia.org/wiki/DDR3 "DDR3")|Samsung|90 nm|CMOS|_**?**_|[[52]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-52)|
|512 Mbit|DDR2|Hynix|_**?**_|CMOS|_**?**_|[[51]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2000s-51)|
|[Elpida](https://en.wikipedia.org/wiki/Elpida_Memory "Elpida Memory")|[110 nm](https://en.wikipedia.org/wiki/110_nanometer "110 nanometer")|CMOS|_**?**_|[[53]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-53)|
|1024 Mbit|DDR2|Hynix|_**?**_|CMOS|_**?**_|[[51]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2000s-51)|
|2004|_**?**_|2048 Mbit|DDR2|Samsung|80 nm|CMOS|_**?**_|[[54]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung2004-54)|
|2005|[EE+GS eDRAM](https://en.wikipedia.org/wiki/PlayStation_2_technical_specifications "PlayStation 2 technical specifications")|32 Mbit|eDRAM|Sony, Toshiba|[65 nm](https://en.wikipedia.org/wiki/65_nm "65 nm")|CMOS|86 mm2|[[55]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-impress-55)|
|[Xenos eDRAM](https://en.wikipedia.org/wiki/Xenos_\(graphics_chip\) "Xenos (graphics chip)")|80 Mbit|eDRAM|NEC|90 nm|CMOS|_**?**_|[[56]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-56)|
|_**?**_|512 Mbit|DDR3|Samsung|80 nm|CMOS|_**?**_|[[48]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-phys-48)[[57]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung2000s-57)|
|2006|_**?**_|1024 Mbit|DDR2|Hynix|60 nm|CMOS|_**?**_|[[51]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2000s-51)|
|2008|_**?**_|_**?**_|[LPDDR2](https://en.wikipedia.org/wiki/LPDDR2 "LPDDR2")|Hynix|_**?**_|
|April 2008|_**?**_|8192 Mbit|DDR3|Samsung|50 nm|CMOS|_**?**_|[[58]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-58)|
|2008|_**?**_|16384 Mbit|DDR3|Samsung|50 nm|CMOS|_**?**_|
|2009|_**?**_|_**?**_|DDR3|Hynix|[44 nm](https://en.wikipedia.org/wiki/45_nanometer "45 nanometer")|CMOS|_**?**_|[[51]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2000s-51)|
|2048 Mbit|DDR3|Hynix|[40 nm](https://en.wikipedia.org/wiki/40_nanometer "40 nanometer")|
|2011|_**?**_|16384 Mbit|DDR3|Hynix|40 nm|CMOS|_**?**_|[[40]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2010s-40)|
|2048 Mbit|[DDR4](https://en.wikipedia.org/wiki/DDR4 "DDR4")|Hynix|[30 nm](https://en.wikipedia.org/wiki/32_nanometer "32 nanometer")|CMOS|_**?**_|[[40]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2010s-40)|
|2013|_**?**_|_**?**_|[LPDDR4](https://en.wikipedia.org/wiki/LPDDR4 "LPDDR4")|Samsung|[20 nm](https://en.wikipedia.org/w/index.php?title=20_nm&action=edit&redlink=1 "20 nm (page does not exist)")|CMOS|_**?**_|[[40]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-hynix2010s-40)|
|2014|_**?**_|8192 Mbit|LPDDR4|Samsung|20 nm|CMOS|_**?**_|[[59]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-59)|
|2015|_**?**_|12 Gbit|LPDDR4|Samsung|20 nm|CMOS|_**?**_|[[49]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-samsung-history-49)|
|2018|_**?**_|8192 Mbit|[LPDDR5](https://en.wikipedia.org/wiki/LPDDR#LP-DDR5 "LPDDR")|Samsung|[10 nm](https://en.wikipedia.org/wiki/10_nm_process "10 nm process")|[FinFET](https://en.wikipedia.org/wiki/FinFET "FinFET")|_**?**_|[[60]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-60)|
|128 Gbit|DDR4|Samsung|10 nm|FinFET|_**?**_|[[61]](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory#cite_note-61)|

#### SDR SDRAM /SDR (Single Data Rate SDRAM)
#### DDR SDRAM /DDR (Double Data Rate SDRAM) ✅
↗ [DDR (Double Data Rate) SDRAM](DDR%20(Double%20Data%20Rate)%20SDRAM.md)
#### DRDRAM (Direct RAMBUS DRAM)
#### RLDRAM (Reduced Latency DRAM)
### 3️⃣ Graphic RAM (ADRAM or SDRAM)
Graphics RAMs are asynchronous and synchronous DRAMs designed for graphics-related tasks such as texture memory and framebuffers, found on video cards.
#### VRAM (Video DRAM)
#### WRAM (Window DRAM)
#### MDRAN (Multibank DRAM)
#### SGRAM (Synchronous Graphics RAM)
#### GDDR SDRAM (Graphics Double Data Rate SDRAM) ✅
↗ [GDDR (Graphics DDR) SDRAM](GDDR%20(Graphics%20DDR)%20SDRAM.md)
#### PSRAM /PSDRAM (Pseudostatic RAM)
> 🔗 https://en.wikipedia.org/wiki/Dynamic_random-access_memory#Graphics_double_data_rate_SDRAM

Pseudostatic RAM (PSRAM or PSDRAM) is dynamic RAM with built-in refresh and address-control circuitry to make it behave similarly to static RAM (SRAM). It combines the high density of DRAM with the ease of use of true SRAM. PSRAM is used in the Apple iPhone and other embedded systems such as XFlar Platform.

Some DRAM components have a self-refresh mode. While this involves much of the same logic that is needed for pseudo-static operation, this mode is often equivalent to a standby mode. It is provided primarily to allow a system to suspend operation of its DRAM controller to save power without losing data stored in DRAM, rather than to allow operation without a separate DRAM controller as is in the case of mentioned PSRAMs.

An embedded variant of PSRAM was sold by MoSys under the name 1T-SRAM. It is a set of small DRAM banks with an SRAM cache in front to make it behave much like a true SRAM. It is used in Nintendo GameCube and Wii video game consoles.

Cypress Semiconductor's HyperRAM  is a type of PSRAM supporting a JEDEC-compliant 8-pin HyperBus or Octal xSPI interface.



## Ref
🎬【动态随机存取存储器（DRAM）的工作原理】 https://www.bilibili.com/video/BV1ZE4m1X73r/?share_source=copy_web

🎬【大型服务器主板32条DDR4内存条12层设计，PCB文件310m大小。一般电脑真跑不动。】 https://www.bilibili.com/video/BV1J1421t73Y/?share_source=copy_web
