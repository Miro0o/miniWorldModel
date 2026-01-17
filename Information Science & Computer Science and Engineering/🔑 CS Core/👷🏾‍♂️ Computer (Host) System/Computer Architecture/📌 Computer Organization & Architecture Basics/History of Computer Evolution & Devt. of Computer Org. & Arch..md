#  History of Computer Evolution & Devt. of Computer Org. & Arch.

[TOC]



## Res
### Related Topics
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Microchips, Chips, Computer Chips & IC (in General)](../Microchips,%20Chips,%20Computer%20Chips%20&%20IC%20(in%20General).md)

↗ [Computer (Host) System](../../Computer%20(Host)%20System.md)
↗ [History of Computing](../../../../🧠%20Computing%20Methodologies/History%20of%20Computing.md)
↗ [History of Computer Networking and Communication Evolution](../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/History%20of%20Computer%20Networking%20and%20Communication%20Evolution.md)
↗ [History of Information Systems & Security Systems](../../../../CyberSecurity/History%20of%20Information%20Systems%20&%20Security%20Systems.md)
↗ [Computer Languages & Programming Methodology /History & Generations of (High-Level) Programming Languages](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md#History%20&%20Generations%20of%20(High-Level)%20Programming%20Languages)


### Other Resources



## Intro
> 🔗 https://foxsen.github.io/archbase/%E5%BC%95%E8%A8%80.html#%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E7%9A%84%E5%8F%91%E5%B1%95 "计算机体系结构的发展"

从事一个领域的研究，要先了解这个领域的发展历史。计算机体系结构是不断发展的。

20世纪五六十年代，由于工艺技术的限制，计算机都做得很简单，计算机体系结构主要研究怎么做加减乘除，Computer Architecture基本上等于Computer Arithmetic。以后我们会讲到先行进位加法器、Booth补码乘法算法、华莱士树等，主要是那时候的研究成果。现在体系结构的主要矛盾不在运算部件，CPU中用来做加减乘除的部件只占CPU中硅面积的很小一部分，CPU中的大部分硅面积用来给运算部件提供足够的指令和数据。

20世纪七八十年代的时候，以精简指令集（Reduced Instruction Set Computer，简称RISC）兴起为标志，指令系统结构（Instruction Set Architecture，简称ISA）成为计算机体系结构的研究重点。笔者上大学的时候系统结构老师告诉我们，计算机体系结构就是指令系统结构，是计算机软硬件之间的界面。

20世纪90年代以后，计算机体系结构要考虑的问题把CPU、存储系统、IO系统和多处理器也包括在内，研究的范围大大地扩展了。到了21世纪，网络就是计算机，计算机体系结构要覆盖的面更广了：向上突破了软硬件界面，需要考虑软硬件的紧密协同；向下突破了逻辑设计和工艺实现的界面，需要从晶体管的角度考虑结构设计。一方面，计算机系统的软硬件界面越来越模糊。按理说指令系统把计算机划分为软件和硬件是清楚的，但现在随着虚拟机和二进制翻译系统的出现，软硬件的界面模糊了。当包含二进制动态翻译的虚拟机执行一段程序时，这段程序可能被软件执行，也有可能直接被硬件执行；可能被并行化，也可能没有被并行化。因此，计算机结构设计需要更多地对软件和硬件进行统筹考虑。另一方面，随着工艺技术的发展，计算机体系结构需要更多地考虑电路和工艺的行为。工艺技术发展到纳米级，体系结构设计不仅要考虑晶体管的延迟，而且要考虑连线的延迟，很多情况下即使逻辑路径很短，如果连线太长也会导致其成为关键路径。

工艺技术的发展和应用需求的提高是计算机体系结构发展的主要动力。首先，半导体工艺技术和计算机体系结构技术互为动力、互相促进，推动着计算机工业的蓬勃发展。一方面，半导体工艺水平的提高，为计算机体系结构的设计提供了更多更快的晶体管来实现更多功能、更高性能的系统。例如20世纪60年代发展起来的虚拟存储技术通过建立逻辑地址到物理地址的映射，使每个程序有独立的地址空间，大大方便了编程，促进了计算机的普及。但虚拟存储技术需要TLB（Translation Lookaside Buffer）结构在处理器访存时进行虚实地址转换，而TLB的实现需要足够快、足够多的晶体管。所以半导体工艺的发展为体系结构的发展提供了很好的基础。另一方面，计算机体系结构的发展是半导体技术发展的直接动力。在2010年之前，世界上最先进半导体工艺都用于生产计算机用的处理器芯片，为处理器生产厂家所拥有（如IBM和英特尔）。其次，应用需求的不断提高为计算机体系结构的发展提供了持久的动力。最早计算机都是用于科学工程计算，只有少数人能够用，20世纪80年代IBM把计算机摆到桌面，大大促进了计算机工业发展；21世纪初网络计算的普及又一次促进了计算机工业的发展。

在2010年之前，计算机工业的发展主要是工艺驱动为主，应用驱动为辅，都是计算机工艺厂家先挖空心思发明出应用然后让大家去接受。例如英特尔跟微软为了利润而不断发明应用，从DOS到Windows，到Office，到3D游戏，每次都是他们发明了计算机的应用，然后告诉用户为了满足新的应用需求需要换更好的计算机。互联网也一样，没有互联网之前，人们根本没有想到它能干这么多事情，更没有想到互联网会成为这么大一个产业，对社会的发展产生如此巨大的影响。在这个过程中，当然应用是有拉动作用的，但这个力量远没有追求利润的动力那么大。做计算机体系结构的人总是要问一个问题，摩尔定律发展所提供的这么多晶体管可以用来干什么，很少有人问满足一个特定的应用需要多少个晶体管。但在2010年之后，随着计算机基础软硬件的不断成熟，IT产业的主要创新从工艺转向应用。可以预计，未来计算机应用对体系结构的影响将超过工艺技术，成为计算机体系结构发展的首要动力。



## Evolution of Computers: Computer Application
> 📖 New perspectives: computer concepts, 21 ed, Module 8, Section B: The Computer Industry


### Mutual Calculators
![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.39.17.png)


### Mechanical Calculators
![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.39.38.png)

![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.39.54.png)


### Computer Prototypes
![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.40.15.png)
![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.40.25.png)
![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.40.42.png)


### Commercial Computers
![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.40.55.png)

![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.41.06.png)

![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.41.19.png)


### Personal Computers
![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.41.42.png)

![](../../../../../Assets/Pics/Screenshot%202025-03-22%20at%2020.46.21.png)



## The Development of Chip Technology: Mole's Law
↗ [Digital (Logic) Electronics Foundations](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)


### Evolution of Processors (Micro-Architecture)
↗ [Microprocessors Unit (MPU) /Evolution of Microprocessor](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Microprocessor%20&%20Microprocessors%20Unit%20(MPU).md#Evolution%20of%20Microprocessor)
↗ [CPU (Central Processing Unit)](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)



## The Development of Computer Organization and Architecture
### Challenges in the Future
> 🔗 https://foxsen.github.io/archbase/%E5%BC%95%E8%A8%80.html#%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E5%8F%91%E5%B1%95

前面分析了工艺和应用的发展趋势，当它们作用在计算机体系结构上时，对结构的发展产生了重大影响。计算机体系结构过去几十年都是在克服各种障碍的过程中发展的，目前计算机体系结构的进一步发展面临复杂度、主频、功耗、带宽等障碍。

（1）复杂度障碍

工艺技术的进步为结构设计者提供了更多的资源来实现更高性能的处理器芯片，也导致了芯片设计复杂度的大幅度增加。现代处理器设计队伍动辄几百到几千人，但设计能力的提高还是远远赶不上复杂度的提高，验证能力更是成为芯片设计的瓶颈。另外，晶体管特征尺寸缩小到纳米级给芯片的物理设计带来了巨大的挑战。纳米级芯片中连线尺寸缩小，相互间耦合电容所占比重增大，连线间的信号串扰日趋严重；硅片上的性能参数（如介电常数、掺杂浓度等）的漂移变化导致芯片内时钟树的偏差；晶体管尺寸的缩小使得蚀刻等过程难以处理，在芯片设计时就要充分考虑可制造性。总之，工艺所提供的晶体管更多了，也更“难用”了，导致设计周期和设计成本大幅度增加。

在过去六七十年的发展历程中，计算机体系结构经历了一个由简单到复杂，由复杂到简单，又由简单到复杂的否定之否定过程。自从20世纪40年代发明电子计算机以来，最早期的处理器结构由于工艺技术的限制，不可能做得很复杂；随着工艺技术的发展，到20世纪60年代处理器结构变得复杂，流水线技术、动态调度技术、向量机技术被广泛使用，典型的机器包括IBM的360系列以及Cray的向量机；20世纪80年代RISC技术的提出使处理器结构得到一次较大的简化（X86系列从Pentium III开始，把CISC指令内部翻译成若干RISC操作来进行动态调度，内部流水线也采用RISC结构）；但后来随着深度流水、乱序执行、多发射、高速缓存、转移预测技术的实现，RISC处理器结构变得越来越复杂，现在的RISC微处理器普遍能允许数百条指令乱序执行，如Intel的Sunny Cov最多可以容纳352条指令。目前，包括超标量RISC和超长指令字（Very Long Instruction Word，简称VLIW）在内的指令级并行技术使得处理器核变得十分复杂，通过进一步增加处理器核的复杂度来提高性能已经十分有限，通过细分流水线来提高主频的方法也很难再延续下去。需要探索新的结构技术来在简化结构设计的前提下充分利用摩尔定律提供的晶体管，以进一步提高处理器的功能和性能。

（2）主频障碍

主频持续增长的时代已经结束。摩尔定律本质上是晶体管尺寸以及晶体管翻转速度变化的定律，但由于商业的原因，摩尔定律曾经被赋予每18个月处理器主频提高一倍的含义。这个概念是在Intel跟AMD竞争的时候提出来的。Intel的Pentium III主频不如AMD的K5/K6高，但其流水线效率高，实际运行程序的性能比AMD的K5/K6好，于是AMD就拿主频说事，跟Intel比主频；Intel说主频不重要，关键是看实际性能，谁跑程序跑得快。后来Intel的Pentium IV处理器把指令流水线从Pentium III的10级增加到20级，主频比AMD的处理器高了很多，但是相同主频下比AMD性能要低，两个公司反过来了；这时候轮到Intel拿主频说事，AMD反过来说主频不重要，实际性能重要。那段时间我们确实看到Intel处理器的主频在翻番地提高。Intel曾经做过一个研究，准备把Pentium IV的20级流水线再细分成40级，也就是一条指令至少40拍才能做完，做了很多模拟分析后得到一个结论，只要把转移猜测表做大一倍、二级Cache增加一倍，可以弥补流水级增加一倍引起的流水线效率降低。后来该项目取消了，Intel说4GHz以上做不上去了，改口说摩尔定律改成每两年处理器核的数目增加一倍。

事实上过去每代微处理器主频是其上一代的两倍多，其中只有1.4倍来源于器件的按比例缩小，另外1.4倍来源于结构的优化，即流水级中逻辑门数目的减少。目前的高主频处理器中，指令流水线的划分已经很细，每个流水级只有10～15级FO4（等效4扇出反相器）的延迟，已经难以再降低。电路延迟随晶体管尺寸缩小的趋势在0.13μm工艺的时候也开始变慢了，而且连线延迟的影响越来越大，连线延迟而不是晶体管翻转速度将制约处理器主频的提高。在Pentium IV的20级流水线中有两级只进行数据的传输，没有进行任何有用的运算。

（3）功耗障碍

随着晶体管数目的增加以及主频的提高，功耗问题越来越突出。现代的通用处理器功耗峰值已经高达上百瓦，按照硅片面积为1～2平方厘米计算，其单位面积的热密度已经远远超过了普通的电炉。以Intel放弃4GHz以上的Pentium IV项目为标志，功耗问题成为导致处理器主频难以进一步提高的直接因素。在移动计算领域，功耗更是压倒一切的指标。因此如何降低功耗的问题已经十分迫切。

如果说传统的CPU设计追求的是每秒运行的次数（运算速度）以及每一块钱所能买到的性能（性能价格比），那么在今天，每瓦特功耗所得到的性能（性能功耗比）已经成为越来越重要的指标。就像买汽车，汽车的最高时速是200公里还是300公里大部分人不在意，更在意的是汽车的价格要便宜，百公里油耗要低。

CMOS电路的功耗与主频和规模都成正比，与电压的平方成正比，而主频在一定程度上又跟电压成正比。由于晶体管的特性，0.13μm工艺以后工作电压不随着工艺的进步而降低，加上频率的提高，导致功耗密度随集成度的增加而增加。另外纳米级工艺的漏电功耗大大增加，在65nm工艺的处理器中漏电功耗已经占了总功耗的30%。这些都对计算机体系结构的低功耗设计提出了挑战。降低功耗需要从工艺技术、物理设计、体系结构设计、系统软件以及应用软件等多个方面共同努力。

（4）带宽障碍

随着工艺技术的发展，处理器片内的处理能力越来越强。按照目前的发展趋势，现代处理器很快将在片内集成十几甚至几十个高性能处理器核，而芯片进行计算所需要的数据归根结底是来自片外。高性能的多核处理器如不能低延迟、高带宽地同外部进行数据交互，则会出现“嘴小肚子大”“茶壶里倒饺子”的情况，整个系统的性能会大大降低。

芯片的引脚数不可能无限增加。通用CPU封装一般都有上千个引脚，一些服务器CPU有四五千个引脚，有时候封装成本已经高于硅的成本了。处理器核的个数以指数增加，封装不变，意味着每个CPU核可以使用的引脚数按指数级下降。

冯·诺依曼结构中CPU和内存在逻辑上是分开的，指令跟数据都存在内存中，CPU要不断从内存取指令和数据才能进行运算。传统的高速缓存技术的主要作用是降低平均访问延迟，解决CPU速度跟存储器速度不匹配的问题，但并不能有效解决访存带宽不够的问题。现在普遍通过高速总线来提高处理器的带宽，这些高速总线采用差分低摆幅信号进行传输。不论是访存总线（如DDR4、FBDIMM等）、系统总线（如HyperTransport）还是IO总线(如PCIe)，其频率都已经达到GHz级，有的甚至超过10GHz，片外传输频率高于片内运算频率。即便如此，由于片内晶体管数目的指数级增加，处理器体系结构设计也要面临每个处理器核的平均带宽不断减少的情况。进入21世纪以来，如果说功耗是摩尔定律的第一个“杀手”，导致结构设计从单核到多核，那么带宽问题就是摩尔定律的第二个“杀手”，必将导致结构设计的深刻变化。一些新型工艺技术，如3D封装技术、光互连技术，有望缓解处理器的带宽瓶颈。

上述复杂度、主频、功耗、带宽的障碍对计算机体系结构的发展造成严重制约，使得计算机体系结构在通用CPU核的微结构方面逐步趋于成熟，开始往片内多核、片上系统以及结合具体应用的专用结构方面发展。



## Ref
[Turing machine | WikiPedia]: https://en.wikipedia.org/wiki/Turing_machine
[Von Neumann Architecture | Wikipedia]: https://en.wikipedia.org/wiki/Von_Neumann_architecture
