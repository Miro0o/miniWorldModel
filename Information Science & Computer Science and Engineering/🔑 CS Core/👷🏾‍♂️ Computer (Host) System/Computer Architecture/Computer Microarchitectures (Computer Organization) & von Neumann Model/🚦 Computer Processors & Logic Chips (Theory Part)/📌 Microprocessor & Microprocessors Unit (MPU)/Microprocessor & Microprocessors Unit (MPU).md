# Microprocessor & Microprocessors Unit (MPU)

[TOC]



## Res
### Related Topics
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)

↗ [Embedded Hardwares & Chips](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Embedded%20Hardwares%20&%20Chips.md)
- Computing Units & Chips & Boards
	- ↗ [ASIC (Application-Specific Integrated Circuit)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)
		- ↗ [Google TPU (Tensor Processing Unit)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Full-Customized%20ASIC/Google%20TPU%20(Tensor%20Processing%20Unit)/Google%20TPU%20(Tensor%20Processing%20Unit).md)
		- ↗ [NPU (Network Processing Unit)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/NPU%20(Network%20Processing%20Unit)/NPU%20(Network%20Processing%20Unit).md)
		- ↗ [LPU (Language Processing Unit)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Full-Customized%20ASIC/LPU%20(Language%20Processing%20Unit)/LPU%20(Language%20Processing%20Unit).md)
	- ↗ [Configurable Processors (PLDs, Programmable Logic Devices)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices).md)
		- ↗ [FPGA (Field Programmable Gates Arrays)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/FPGA%20(Field%20Programmable%20Gates%20Arrays).md)
	- ↗ [Standardized Processors (off-the-shelf)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/Standardized%20Processors%20(off-the-shelf).md)
		- ↗ [Microcontrollers (MCU, 单片机)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/📌%20Microcontrollers%20(MCU,%20单片机)/Microcontrollers%20(MCU,%20单片机).md)
- IO Units & Sensors
	- etc.

↗ [Hardware Acceleration](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Hardware%20Acceleration.md)

↗ [Computer Processors & Logic Chips (Implementation Part)](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part).md)

↗ [Systems on Chip (SoC)](../Systems%20on%20Chip%20(SoC).md)


### Other Resources



## Intro
> [!TIP]
> 💡 The design of a microprocessor (or simple processor) heavily relies on the ↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md) and ↗ [Computer Microarchitectures (Computer Organization) & von Neumann Model](../../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md).
> 
> This article gives an overview of some essentials of a microprocessor.
> 
> Though it varies on different computer architectures, the main microprocessor architectures are CPU (a general purpose processors unit), GPU, DSP, or the latest SoC (System on a Chip).
> 
> Other processors at ↗ [Computer Processors & Logic Chips (Theory Part)](../Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part).md)


### Microprocessor & Microprocessor Units

> [!quote]
> 🤖 Gemini 3.0 Pro
> https://gemini.google.com/share/ebedeb833ded
> 
> Is a GPU a Microprocessor? How to define microprocessor?
> 
> **Technically: Yes.** **Socially: No.**
> - **The Technical View:** A "Microprocessor" is simply a processing unit contained on a single integrated circuit (chip). Since a GPU fits this description perfectly, it is physically a type of microprocessor.
> - **The "Street" View:** In the industry, if you say "Microprocessor," people assume you mean the main **CPU** (Central Processing Unit). Because the GPU is specialized for graphics and parallel math, ==we usually classify it as a **"Coprocessor"** or simply an **"Accelerator."**==
> 
> **The Key Difference:**
> - **Microprocessor (CPU):** Designed for **General Purpose** work (running Windows, opening Word, checking email).
> - **GPU:** Designed for **Specific** work (calculating the color of millions of pixels at once).
#### Main CPU
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [CPU (Central Processing Unit)](🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)
#### Accelerators / Coprocessors
> [!links]
> ↗ [ASIC (Application-Specific Integrated Circuit)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)
> ↗ [Configurable Processors (PLDs, Programmable Logic Devices)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices).md)
> ↗ [Standardized Processors (off-the-shelf)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/Standardized%20Processors%20(off-the-shelf).md)
##### GPU (Graphics Processing Unit)
↗ [GPU (Graphics Processing Unit)](Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
##### TPU (Tensor Processing Unit)
> [!quote]
> 🔗 https://www.kaggle.com/general/221800
> 
> - **Tensor Processing Unit abbreviation TPU** is a custom-built integrated circuit developed specifically for machine learning and tailored for TensorFlow, Google's open-source machine learning framework. TPU’s have been powering Google data centers since 2015, however Google still uses CPUs and GPUs for other types of machine learning.  
> - TPU can handle **upto 128000 operations** per cycle  
> - A co-processor designed to accelerate deep learning tasks develop using TensorFlow (a programming framework); Compilers have not been developed for TPU which could be used for general purpose programming; hence, it requires significant effort to do general programming on TPU
> 
> https://iq.opengenus.org/cpu-vs-gpu-vs-tpu/
> https://www.quora.com/What-is-the-difference-between-GPUs-CPUs-and-TPUs
##### DSP (Digital Signal Processor)
↗ [DSP (Digital Signal Processor)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/DSP%20(Digital%20Signal%20Processor)/DSP%20(Digital%20Signal%20Processor).md)

A **digital signal processor** (**DSP**) is a specialized microprocessor chip, with its architecture optimized for the operational needs of [digital signal processing](https://en.wikipedia.org/wiki/Digital_signal_processing "Digital signal processing").

DSPs are fabricated on [MOS integrated circuit](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") chips.

DSPs are widely used in [audio signal processing](https://en.wikipedia.org/wiki/Audio_signal_processing "Audio signal processing"), [telecommunications](https://en.wikipedia.org/wiki/Telecommunications "Telecommunications"), [digital image processing](https://en.wikipedia.org/wiki/Digital_image_processing "Digital image processing"), [radar](https://en.wikipedia.org/wiki/Radar "Radar"), [sonar](https://en.wikipedia.org/wiki/Sonar "Sonar")and [speech recognition](https://en.wikipedia.org/wiki/Speech_recognition "Speech recognition") systems, and in common [consumer electronic](https://en.wikipedia.org/wiki/Consumer_electronic "Consumer electronic") devices such as [mobile phones](https://en.wikipedia.org/wiki/Mobile_phones "Mobile phones"), [disk drives](https://en.wikipedia.org/wiki/Disk_drives "Disk drives") and [high-definition television](https://en.wikipedia.org/wiki/High-definition_television "High-definition television") (HDTV) products.
##### More..
↗ [DPU (Data Processing Unit)](Accelerators%20(Coprocessors)/DPU%20(Data%20Processing%20Unit)/DPU%20(Data%20Processing%20Unit).md)
↗ [Apple Neural Engine](Accelerators%20(Coprocessors)/Apple%20Neural%20Engine.md)

↗ [ASIC (Application-Specific Integrated Circuit)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/ASIC%20(Application-Specific%20Integrated%20Circuit).md)
↗ [Configurable Processors (PLDs, Programmable Logic Devices)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices)/Configurable%20Processors%20(PLDs,%20Programmable%20Logic%20Devices).md)
↗ [Standardized Processors (off-the-shelf)](../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/Standardized%20Processors%20(off-the-shelf)/Standardized%20Processors%20(off-the-shelf).md)
#### The Mix of Microprocessors and SoCs
↗ [Systems on Chip (SoC)](../Systems%20on%20Chip%20(SoC).md)

![](../../../../../../../Assets/Pics/Pasted%20image%2020260117003203.png)
![](../../../../../../../Assets/Pics/Pasted%20image%2020260117003337.png)
<small>The scaling in the Apple M series of SoCs<br><a>https://pbs.twimg.com/media/FCBl1gcWEAUOdRw?format=jpg&name=large</a></small>



## Evolution of Microprocessor
```notion-like-tables
table-id-UsDPYe
```
<small>In March 2021, MIPS announced that the development of the MIPS architecture had ended as the company is making the transition to RISC-V</small>

> 🔗 [Comparision of ISAs](https://en.wikipedia.org/wiki/Comparison_of_instruction_set_architectures)

↗ [Development History of ISA](../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Development%20History%20of%20ISA.md)
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)



## MPU Models & Manufacturers
↗ [Semiconductor Industry & Companies](../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Semiconductor%20Industry%20&%20Companies.md)



## Ref
[List of Intel CPU microarchitectures]: https://en.wikipedia.org/wiki/List_of_Intel_CPU_microarchitectures#Miscellaneous
[List of AMD CPU microarchitectures]: https://en.wikipedia.org/wiki/List_of_AMD_CPU_microarchitectures

[RISC-V]: https://en.wikipedia.org/wiki/RISC-V
[MIPS architecture]: https://en.wikipedia.org/wiki/MIPS_architecture#MIPS_V
[ARM architecture family]: https://en.wikipedia.org/wiki/ARM_architecture_family#64/32-bit_architecture
[x86 architecture family]: https://en.wikipedia.org/wiki/X86

[Instruction Set Architecture]: https://en.wikipedia.org/wiki/Instruction_set_architecture#Classification_of_ISAs

[CISC and RISC architectures]: https://en.wikipedia.org/wiki/Instruction_set_architecture#Classification_of_ISAs
[Modified Harcard Architecture]: https://en.wikipedia.org/wiki/Modified_Harvard_architecture
