# History of ISA

[TOC]



## Res
### Related Topics
↗ [FAQ /👉 X86 | IA-64 | ARM](../../FAQ.md#👉%20X86%20|%20IA-64%20|%20ARM)
↗ [x86 Architecture Family (80x86, 8086 family)](../CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md)
↗ [Semiconductor Industry & Companies](../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/Semiconductor%20Industry%20&%20Companies/Semiconductor%20Industry%20&%20Companies.md)


### Other Resources



## Intro
### Naming Conventions
> 由于数字并不能作为注册商标，因此Intel及其竞争者均在新一代处理器使用可注册的名称，如奔腾（Pentium）、酷睿（Core）、锐龙（Ryzen，AMD推出）。
> 
> x86的32位架构一般又被称作IA-32，全名为“Intel Architecture, 32-bit”。其64位架构由AMD率先推出，并被称为“AMD64”。之后也被Intel采用，被其称为“Intel 64”。一般也被称作“x86-64”、“x64”。值得注意的是，Intel也推出过IA-64架构，虽然名字上与“IA-32”相似，但两者完全不兼容，并不属于x86指令集架构家族。
> 
> 简而言之:
> - x86的32位统称：x86-32, IA-32, x86
> - x86的64位统称：x86-64, x64
> - x86发展中被遗弃的分支：IA-64（这个容易令人迷惑的是它沿用了IA-32的命名方式，但是却不代指x86-64；这和intel&AMD商业竞争历史有关）



## 🎯 History of x86 Architecture
> Intel & AMD are main design companies of x86 architecture (?)  

![[../../../../../../Assets/Illustrations/Computer System/x86_history.excalidraw]]
### Designers and Manufacturers
> 🔗 https://en.wikipedia.org/wiki/X86#Designers_and_manufacturers

At various times, companies such as [IBM](https://en.wikipedia.org/wiki/IBM "IBM"), [VIA](https://en.wikipedia.org/wiki/VIA_Technologies "VIA Technologies"), [NEC](https://en.wikipedia.org/wiki/NEC "NEC"), [AMD](https://en.wikipedia.org/wiki/AMD "AMD"), [TI](https://en.wikipedia.org/wiki/Texas_Instruments "Texas Instruments"), [STM](https://en.wikipedia.org/wiki/STMicroelectronics "STMicroelectronics"), [Fujitsu](https://en.wikipedia.org/wiki/Fujitsu "Fujitsu"), [OKI](https://en.wikipedia.org/wiki/Oki_Electric_Industry "Oki Electric Industry"), [Siemens](https://en.wikipedia.org/wiki/Siemens "Siemens"), [Cyrix](https://en.wikipedia.org/wiki/Cyrix "Cyrix"), [Intersil](https://en.wikipedia.org/wiki/Intersil "Intersil"), [C&T](https://en.wikipedia.org/wiki/Chips_and_Technologies "Chips and Technologies"), [NexGen](https://en.wikipedia.org/wiki/NexGen "NexGen"), [UMC](https://en.wikipedia.org/wiki/United_Microelectronics_Corporation "United Microelectronics Corporation"), and [DM&P](https://en.wikipedia.org/wiki/Vortex86 "Vortex86") started to design or manufacture x86 [processors](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPUs) intended for personal computers and embedded systems. Other companies that designed or manufactured x86 or [x87](https://en.wikipedia.org/wiki/X87 "X87") processors include [ITT Corporation](https://en.wikipedia.org/wiki/ITT_Corporation "ITT Corporation"), [National Semiconductor](https://en.wikipedia.org/wiki/National_Semiconductor "National Semiconductor"), ULSI System Technology, and [Weitek](https://en.wikipedia.org/wiki/Weitek "Weitek").


### 🕰️ From 16-bit and 32-bit to 64-bit Architecture
#### 8008 (8-bit)

#### 8080

#### 8086 (16-bit)

#### 8088

#### 80186

#### 80286 (80296) 
Introduced in 1982, the 80296 (or 286) added additional memory functionality as well as expended the external data bus to 16bits.

While the 8088 had segmented memory accessed from the Real Mode, the 286 added the Protected Mode to the architecture's memory organization. Briefly, the new mode allowed for the segment registers from the 8088 to be used as pointers to descriptor tables (think hash tables) which in turn allowed access to memory via 24 bit base addresses (recall the bit on the 8088's memory from above). This scheme allowed for addressing 16MB of memory (both physical as well as virtual), but added the difficulty of increasing the ISA's variability in memory usage.

As noted before, while there are advantages to allowing memory to be referenced in a number of ways (consider the difficulty of DLX's single offset addressing mode), the more ways in which the memory may be addressed, the more information that will be needed to activate the control path in the correct way. The difficulties may be slight for a processor like the 286 (primarily used as a singly-user, single task chip), but as the commercial operating systems and applications began to get more and more complicated (as evidenced by Windows NT running on a Pentium), the problems have become greater.

#### 80386 (i386, IA-32) (32-bit)
This chip was perhaps the single greatest leap foreword in the history of the x86 family. The 386 introduced both a new logical memory organization and 32bit processing to the personal computing world, yet did so in such a way as to retain compatibility with the 286 and 8088. This slight of hand was accomplished by including a Virtual 8086 Mode in the architecture that allowed the lower half of the 32bit registers to be used as the older model registers. More interesting to this course, however, was the 386's introduction of parallel execution to the family.

Six units were added to the chip organization, and under ideal circumstances the units allowed for one instruction to pass a stage in a single clock cycle. The six units were:

- Bus Interface Unit (Basically a queue on top of the external bus)
- Code Prefetch Unit (Managed the queue and unpacked instructions)
- Instruction Decode Unit (Decoded instruction)
- Execution Unit (Not yet!)
- Segmentation Unit (Begins translation of logical memory address to physical address)
- Paging Unit (finishes translation of address and holds memory access information)

If you seem to notice a similarity between the units and the DLX pipeline, you are both not alone and not really on the money. Because of the difficulties mentioned above about the instruction lengths and memory modes, the x86 can really only be pipelined to a minimal degree. Parallel execution does occur, but not nearly as cleanly as with some of the architectures discussed in class. More on this topic in the discussion of the MMX technologies.

#### 80486 (i486)
The introduction of the 486 in 1989 saw the extension of the 386's parallel execution as well as the first inclusion of on-chip floating-point functions.

The instruction decode and execution units from the 386 was expanded into a five-stage pipeline structure which passed from stage to stage at speeds which could approach one stage per cycle. This feat was accomplished by reducing the overhead from the memory references introduced by the 8088. By separating the decoding of an instruction into several stages, the ideal situation will find all of the necessary values ready by the time that the execution of the instruction needs them.

In addition to these improvements, new cache support was added by the 486. A 8KB L1 cache was added on chip, and the 486 allowed for off-chip L2 cache support. Thus, the improvements in the parallel execution were due to the improved memory hierarchy as well as by the addition of the stages just discussed.

#### 80586 (The Pentium... turns out you can't copyright a number)
For the purposes of this page, the development of the x86 family is essentially complete with the introduction of the Pentium in 1993. The rule of thumb for the Pentium is that it is basically two 486's in one.

The pipeline mentioned earlier is the general format for the Pentium execution path, but the 586 added a second pipeline to allow for superscalar execution. Both pipes are managed by what appears to be a scoreboard. That is, the instructions are decoded b y the Pentium into a set of smaller instructions (do I smell RISC?) which are placed in an instruction buffer to await issue to the proper functional unit. Upon completion of the smaller instruction, the results are the held in a retirement unit which returns the result of the original instruction in the order in which it fell in the program. In this way, Intel hopes to (and frequently does) achieve execution of a single instruction at better than one clock. Perhaps the lesson here is that the speed of the Pentium is a function of how well it undoes much of the earlier architecture choices of the Intel development teams.

On less interesting notes, the size of the on-chip cache was doubled to 16KB (with 8KB devoted to instructions and 8KB to data), and additional command pins were added to allow for multi-processor systems.


### 📈 Chronology
🔗 https://en.wikipedia.org/wiki/X86#Chronology


### Intel & Other x86 Designers & Manufacturers
🔗 https://en.wikipedia.org/wiki/X86#Designers_and_manufacturers
↗ [Semiconductor Industry & Companies](../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/Semiconductor%20Industry%20&%20Companies/Semiconductor%20Industry%20&%20Companies.md)

At various times, companies such as [IBM](https://en.wikipedia.org/wiki/IBM "IBM"), [VIA](https://en.wikipedia.org/wiki/VIA_Technologies "VIA Technologies"), [NEC](https://en.wikipedia.org/wiki/NEC "NEC"), [AMD](https://en.wikipedia.org/wiki/AMD "AMD"), [TI](https://en.wikipedia.org/wiki/Texas_Instruments "Texas Instruments"), [STM](https://en.wikipedia.org/wiki/STMicroelectronics "STMicroelectronics"), [Fujitsu](https://en.wikipedia.org/wiki/Fujitsu "Fujitsu"), [OKI](https://en.wikipedia.org/wiki/Oki_Electric_Industry "Oki Electric Industry"), [Siemens](https://en.wikipedia.org/wiki/Siemens "Siemens"), [Cyrix](https://en.wikipedia.org/wiki/Cyrix "Cyrix"), [Intersil](https://en.wikipedia.org/wiki/Intersil "Intersil"), [C&T](https://en.wikipedia.org/wiki/Chips_and_Technologies "Chips and Technologies"), [NexGen](https://en.wikipedia.org/wiki/NexGen "NexGen"), [UMC](https://en.wikipedia.org/wiki/United_Microelectronics_Corporation "United Microelectronics Corporation"), and [DM&P](https://en.wikipedia.org/wiki/Vortex86 "Vortex86") started to design or manufacture x86 [processors](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPUs) intended for personal computers and embedded systems. 

Other companies that designed or manufactured x86 or [x87](https://en.wikipedia.org/wiki/X87 "X87") processors include [ITT Corporation](https://en.wikipedia.org/wiki/ITT_Corporation "ITT Corporation"), [National Semiconductor](https://en.wikipedia.org/wiki/National_Semiconductor "National Semiconductor"), [ULSI System Technology](https://en.wikipedia.org/w/index.php?title=ULSI_System_Technology&action=edit&redlink=1 "ULSI System Technology (page does not exist)"), and [Weitek](https://en.wikipedia.org/wiki/Weitek "Weitek").



## 🎯 History of ARM ISA
#TODO 


## 🎯 History of MIPS ISA
#TODO 




## Ref
[x86\x86-64\IA-32\IA-64]: https://www.cnblogs.com/wangyichao/p/4270394.html

[被我们熟知的X86，IA(Intel Architecture),ARM架构是什么样的历史]: https://blog.csdn.net/weixin_41831919/article/details/106168030

[ARM 架构]: https://zh.wikipedia.org/zh-hans/ARM架構

[👍 Timeline: A brief history of the x86 microprocessor]: https://www.computerworld.com/article/2535019/timeline--a-brief-history-of-the-x86-microprocessor.html


[👍 x86: Evolution of an Architecture]: https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html

Q: [Why do we care about Intel?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#whycare)  
Q: [Anything else I should know?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#else)  
Q: [Can you tell me what the 8088 architecture was like?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#oldstuff)  
Q: [What about floating point computations?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#floats)  
Q: [Well, my Pentium seems to run better than all of this suggests, how does it do it?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#Pent_better)  
Q: [Any moral to the story thus far?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#moral)  
Q: [Has Intel ever FUNKED anything up?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/mmx1.html)  
Q: [Hey, can I quiz myself with some questions and answers on this stuff?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86QA.html)  
Q: [I'm just so interested in this - where can I learn more?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#moreinfo)  
Q: [Who should I hold responsible for these pages?](https://www.cs.umd.edu/users/meesh/cmsc411/website/projects/blunck/x86.html#whodidit)

[👍 x86]: https://en.wikipedia.org/wiki/X86#History


