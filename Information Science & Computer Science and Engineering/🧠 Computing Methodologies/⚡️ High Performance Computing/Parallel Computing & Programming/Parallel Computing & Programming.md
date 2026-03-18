# Parallel Computing

[TOC]



## Res
### Related Topics
↗ [ILP (Instruction Level Parallelism)](../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/ILP%20(Instruction%20Level%20Parallelism)/ILP%20(Instruction%20Level%20Parallelism).md)
↗ [Multicore Processor and Multiprocessors](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multicore%20Processor%20and%20Multiprocessors.md)
↗ [Multiprocessor Architectures & Parallel Computing](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Multiprocessor%20Architectures%20&%20Parallel%20Computing.md)

↗ [Distributed Computing & Systems](../../Distributed%20Computing%20&%20Systems/Distributed%20Computing%20&%20Systems.md)
↗ [Distributed Systems Implementations](../../Distributed%20Computing%20&%20Systems/💸%20Distributed%20Systems%20Implementations/Distributed%20Systems%20Implementations.md)

↗ [Concurrent Programming](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/Concurrent%20Programming.md)
↗ [Compute Unified Device Architecture & CUDA Programming](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)
↗ [Parallel Programming Libraries & SDK](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/👯‍♀️%20Parallel%20Programming%20Libraries%20&%20SDK/Parallel%20Programming%20Libraries%20&%20SDK.md)


### Learning Resources
👨‍💻 https://hpcwiki.io/parallel-programming/parallel-programming-intro/

![](../../../../../../Assets/Pics/Screenshot%202024-07-26%20at%201.32.38%20PM.png)
<small>图：40 年来处理器性能进步示意图。1978-2018 年的数据由 Patterson 和 Hennessy（2017）给出，之后几年的数据是综合了 Geekbench5 和其他几个基准测试给出的大致值（具体的细节在这里我们不作过多描述）。2023 年的数据经过估算，将其转化到 4 个核总的的平均表现上得出。</small>



## Intro
> 🔗 https://en.wikipedia.org/wiki/Parallel_computing

![](../../../../../../../Assets/Pics/Screenshot%202024-03-17%20at%204.49.59%20PM.png)
<small>https://en.wikipedia.org/wiki/Parallel_computing</small>

Parallel computing is a type of computation in which many calculations or processes are carried out simultaneously. Large problems can often be divided into smaller ones, which can then be solved at the same time. There are several different forms of parallel computing: bit-level, instruction-level, data, and task parallelism. Parallelism has long been employed in high-performance computing, but has gained broader interest due to the physical constraints preventing frequency scaling. As power consumption (and consequently heat generation) by computers has become a concern in recent years, parallel computing has become the dominant paradigm in computer architecture, mainly in the form of multi-core processors.

Parallel computing is closely related to concurrent computing—they are frequently used together, and often conflated, though the two are distinct: it is possible to have parallelism without concurrency, and concurrency without parallelism (such as multitasking by time-sharing on a single-core CPU). In parallel computing, a computational task is typically broken down into several, often many, very similar sub-tasks that can be processed independently and whose results are combined afterwards, upon completion. In contrast, in concurrent computing, the various processes often do not address related tasks; when they do, as is typical in distributed computing, the separate tasks may have a varied nature and often require some inter-process communication during execution.

Parallel computers can be roughly classified according to the level at which the hardware supports parallelism, with multi-core and multi-processor computers having multiple processing elements within a single machine, while clusters, MPPs, and grids use multiple computers to work on the same task. Specialized parallel computer architectures are sometimes used alongside traditional processors, for accelerating specific tasks.

In some cases parallelism is transparent to the programmer, such as in bit-level or instruction-level parallelism, but explicitly parallel algorithms, particularly those that use concurrency, are more difficult to write than sequential ones, because concurrency introduces several new classes of potential software bugs, of which race conditions are the most common. Communication and synchronization between the different subtasks are typically some of the greatest obstacles to getting optimal parallel program performance.
A theoretical upper bound on the speed-up of a single program as a result of parallelization is given by Amdahl's law, which states that it is limited by the fraction of time for which the parallelization can be utilised.


### Concurrency & Parallelism
> ↗ [FAQ /👉 pipelining, parallelism, concurrency in HTTP Connection Management](../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/FAQ.md#👉%20pipelining,%20parallelism,%20concurrency%20in%20HTTP%20Connection%20Management)
> 
> - **并发**：由于有限的资源限制，在某一划定的时间段内（一个时刻，一个处理周期，任意其他规定的时段）资源的请求大于可用资源，这时就需要某种策略来协调这种供小于求的情况，使得在约定的条件内达到最优解。这通常意味着在最短时间内满足最多的资源请求。
> - **并行计算**：对一个已知的任务，通过某种划分策略，使得这个任务被划分为多个可以同时处理的子任务，从而达到对该任务处理性能的提高。处理性能可以是任何规定的指标，不过通常是处理效率，即速度/成本。
> - **流水线技术/pipelining**: 一种简单的并行计算中的划分策略。

Throughout the history of digital computers, two demands have been constant forces in driving improvements: we want them to do more, and we want them to run faster. Both of these factors improve when the processor does more things at once. We use the term **concurrency** to refer to the general concept of a system with multiple, simultaneous activities, and the term **parallelism** to refer to the use of concurrency to make a system run faster. Parallelism can be exploited at multiple levels of abstraction in a computer system. We highlight three levels here, working from the highest to the lowest level in the system hierarchy.
#### 👉 Process/Thread-level Concurrency
↗ [Concurrent Programming](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/Concurrent%20Programming.md)

↗ [Operating Systems /Concurrency Control](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/Concurrency%20Control/Concurrency%20Control.md)
↗ [Database Systems /Concurrency Control](../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20DBMS%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Transaction%20Management/Concurrency%20Control/Concurrency%20Control.md)
↗ [OS Level Programming /Concurrency](../../../Software%20Engineering/👇%20System%20Software%20Engineering/OS%20Level%20Programming%20in%20Different%20Languages/OS%20Level%20Programming%20with%20C%20&%20CPP/Process%20Management/Concurrency.md)
#### 👉 Hardware Level Parallel Computing
↗ [Multicore Processor and Multiprocessors](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multicore%20Processor%20and%20Multiprocessors.md)
- ↗ [Multiprocessor Architectures & Parallel Computing](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/MPU%20Architecture%20&%20Design/Multicore%20Processor%20and%20Multiprocessors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Multiprocessor%20Architectures%20&%20Parallel%20Computing.md)
#### 👉 Instruction Level Parallelism
↗ [ILP (Instruction Level Parallelism)](../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/ILP%20(Instruction%20Level%20Parallelism)/ILP%20(Instruction%20Level%20Parallelism).md)
#### 👉 Software Level Parallel Computing
↗ [Compute Unified Device Architecture & CUDA Programming](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)
openMP
MPI (Message Passing Interface)
mpi4pi
openacc
opencl



## Ref
[并行编程导论]: https://hpcwiki.io/parallel-programming/parallel-programming-intro/
我们会看到多重处理已经达到了 Amdahl 定律的上限。为了在能耗、成本、性能的三角中取得平衡，唯一的途径就是**专用**。我们在其他章节还会介绍 Tensor Core 的体系结构，它就是专用处理器的典型代表，能够大幅提升矩阵乘法的性能。
