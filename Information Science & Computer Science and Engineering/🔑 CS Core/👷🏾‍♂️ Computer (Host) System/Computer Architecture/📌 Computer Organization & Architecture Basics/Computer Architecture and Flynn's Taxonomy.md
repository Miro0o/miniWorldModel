# Computer Architecture and Flynn's Taxonomy

[TOC]



## Res
### Related Topics



## Intro
![](../../../../../Assets/Pics/Pasted%20image%2020230304154759.png)
<small>Flynn's Taxonomy of Computer Architectures</small>

> 🔗 Further reading: 
> - [Duncan's Taxonomy](https://en.wikipedia.org/wiki/Duncan%27s_taxonomy)
> - [Non-von Neumann Based Microarchitectures](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🤵%20Non-von%20Neumann%20Based%20Microarchitectures/Non-von%20Neumann%20Based%20Microarchitectures.md)



## 1️⃣ SISD (Single Instruction, Single Data)
![](../../../../../Assets/Pics/Pasted%20image%2020230304155503.png)

> 早期的**冯·诺依曼结构**采用的都是SISD，冯·诺依曼结构也称**存储程序计算机**，它有两个重要特性：1. 指令和数据被存储在内存中；2. 指令被顺序执行，在一个时刻只有一条指令在执行，通过PC（Program Counter）识别当前指令。



## 2️⃣ SIMD (Single Instruction, Multiple Data)
![](../../../../../Assets/Pics/Pasted%20image%2020230304155409.png)

> SIMD 就是单指令多数据的缩写，将一个指令广播到多个处理器上，但每个处理器都有自己的数据。也就是说同一份控制指令同时运行不同的数据，如上图所示，这样做的好处就是减轻的控制成本。目前，GPUs(Graphics Processor Units)采用的就是SIMD架构。


### Vector Processers
↗ [Vector Processors](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Vector%20Processors/Vector%20Processors.md)

Often referred to as supercomputers, vector processors are specialized, heavily pipelined SIMD processors that perform efficient operations on entire vectors and matrices at once. This class of processor is suited for applications that can benefit from a high degree of parallelism, such as weather forecasting, medical diagnosing, and image processing.

Vector instructions are efficient for two reasons. First, the machine fetches significantly fewer instructions, which means there is less decoding, control unit overhead, and memory bandwidth usage. Second, the processor knows it will have a continuous source of data and can begin prefetching corresponding pairs of values. If interleaved memory is used, one pair can arrive per clock cycle. The most famous vector processors are the Cray series of supercomputers. Their basic architecture has changed little over the past 25 years.



## 3️⃣ MISD (Multiple Instruction, Single Data)
Not implemented.



## 4️⃣ MIMD (Multiple Instruction, Multiple Data)
![](../../../../../Assets/Pics/Pasted%20image%2020230304155426.png)

> MIMD指的是不同时刻不同CPU执行的指令不同，并且数据也不同，如上图所示。目前超级计算机，网络并行计算机集群和“网格”，多处理器SMP计算机，多核PC都属于这一类。而MIMD又可以根据内存结构，可以分为**共享内存和消息驱动**。共享内存就是处理器之间共享内存，通过内存来进行通信，而消息驱动指的是处理器通过消息驱动来进行通信。目前**共享内存有SMP、NUMA两种，消息驱动对应DM**。


### Interconnection Networks


### Shared Memory Machines (SMM)
#### 1️⃣ SMP (Shared Memory Multiprocessors /Symmetric Multiprocessing)
↗ [Symmetric Multiprocessing & Shared Memory Multiprocessors (SMP)](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Symmetric%20Multiprocessing%20&%20Shared%20Memory%20Multiprocessors%20(SMP)/Symmetric%20Multiprocessing%20&%20Shared%20Memory%20Multiprocessors%20(SMP).md)
#### 2️⃣ NUMA (Non-Uniform Memory Access)
↗ [NUMA (Non-Uniform Memory Access)](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/NUMA%20(Non-Uniform%20Memory%20Access)/NUMA%20(Non-Uniform%20Memory%20Access).md)


### Event-Driven Machines



## Ref
[Computer Architecture | Flynn’s taxonomy]: https://www.geeksforgeeks.org/computer-architecture-flynns-taxonomy/
[Flynn's taxonomy | wikipedia]: https://en.wikipedia.org/wiki/Flynn%27s_taxonomy
