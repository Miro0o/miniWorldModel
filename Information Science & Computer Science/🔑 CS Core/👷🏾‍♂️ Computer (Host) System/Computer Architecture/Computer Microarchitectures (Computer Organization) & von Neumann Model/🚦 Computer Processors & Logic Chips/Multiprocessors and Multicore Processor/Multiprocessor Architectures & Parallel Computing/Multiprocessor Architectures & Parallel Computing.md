# Multiprocessor Architectures & Parallel Computing

[TOC]



## Res
### Related Topics
↗ [Computer Architecture and Flynn's Taxonomy](../../../../📌%20Computer%20Organization%20&%20Architecture%20Basics/Computer%20Architecture%20and%20Flynn's%20Taxonomy.md)
↗ [ILP (Instruction Level Parallelism)](../../../../../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/ILP%20(Instruction%20Level%20Parallelism)/ILP%20(Instruction%20Level%20Parallelism).md)
↗ [Parallel Computing & Programming](../../../../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md)



## Intro
Term "parallel" here describes a general conception of how computing is conducted. It concieves a way to improve computing proficiency with limited resources.

The engineering implementation to parallel computing or parallel processing can be roughly ascribed to two level: the hardware and the software.
1. On the hardware level, there are two ways to parallel compute as well:
	1. multiprocessing with multiple processors;
	2. multiprocessing with processors of multiple cores, or multicore processor. 

2. On the software level, there are two ways to parallel compute as well:
	1. multiprocessing with multiple processes, or multitasking. It means running multiple process for multiple tasks;
	2. multiprocessing with mnultiple threads, or multithreading. It means running multipe threads for divided sequential steps of tasks.

🌻 🌻 Very often, designing parallel programs to maximumally utilize the parallel designed hardware is the most difficult part in achieving parallel processing. Hence it's why even when parallel processing architectures is getting more and more complicated it is still not a common standard in daily lives to parallel compute: there are not efficient enough programs to support that set of hardwares.

> 💡 For more of parallelism at system software level, go to ↗ [Operating System Design (OS Kernel Design) & Kernel Architecture](../../../../../Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/🦺%20Operating%20System%20Basics/Operating%20System%20Design%20(OS%20Kernel%20Design)%20&%20Kernel%20Architecture/Operating%20System%20Design%20(OS%20Kernel%20Design)%20&%20Kernel%20Architecture.md)

![](../../../../../../../../Assets/Pics/Screenshot%202024-03-17%20at%204.49.59%20PM.png)
<small>https://en.wikipedia.org/wiki/Parallel_computing</small>


### Amdahl’s Law (Gene Amdahl)
Even parallel computing has its limits, however. As the number of processors increases, so does the overhead of managing how tasks are distributed to those processors.

No matter how many processors we place in a system, or how many resources we assign to them, somehow, somewhere, a bottleneck is bound to develop. The best we can do, however, is make sure the slowest parts of the system are the ones that are used the least. This is the idea of Amdahl’s Law.

> Amdahl’s law states that the performance enhancement possible with a given improvement is limited by the amount that the improved feature is used. The underlying premise is that every algorithm has a sequential part that ultimately limits the speedup that can be achieved by multiprocessor implementation.

The main idea is that when we speed up one part of a system, the effect on the overall system performance depends on both how significant this part was and how much it sped up. Consider a system in which executing some application requires time $T_{old}$. Suppose some part of the system requires a fraction $\alpha$ of this time, and that we improve its performance by a factor of $k$. That is, the component originally required time $\alpha{T_{old}}$, and it now requires time $(\alpha{T_{old}})/k$. The overall execution time would thus be $$T_{new} = (1 − \alpha)T_{old} + (\alpha{T_{old}})/k =T_{old}[(1−\alpha)+\alpha/k]$$
From this, we can compute the speedup $S=T_{old} / T_{new}$ as $$S=\frac{1}{(1−α)+α/k}\qquad (1.1)$$

As an example, consider the case where a part of the system that initially consumed 60% of the time $(\alpha=0.6)$ is sped up by a factor of 3 $(k=3)$. Then we get a speedup of $1/[0.4 + 0.6/3] = 1.67×$. Even though we made a substantial improvement to a major part of the system, our net speedup was significantly less than the speedup for the one part. This is the major insight of Amdahl’s law - ==to significantly speed up the entire system, we must improve the speed of a very large fraction of the overall system.==


### Flynn's Taxonomy
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230304154759.png)
<small>Flynn's Taxonomy of Computer Architectures</small>

↗ [Computer Architecture and Flynn's Taxonomy](../../../../📌%20Computer%20Organization%20&%20Architecture%20Basics/Computer%20Architecture%20and%20Flynn's%20Taxonomy.md)
🔗 Further reading: [Duncan's Taxonomy](https://en.wikipedia.org/wiki/Duncan%27s_taxonomy)



## Multiprocessor Computer Architecture Designs
> ↗ [Computer Architecture and Flynn's Taxonomy](../../../../📌%20Computer%20Organization%20&%20Architecture%20Basics/Computer%20Architecture%20and%20Flynn's%20Taxonomy.md)

### 1️⃣ Superscalar and VLIW
↗ [VLIW (Very Long Instruction Word)](../../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/VLIW%20(Very%20Long%20Instruction%20Word)/VLIW%20(Very%20Long%20Instruction%20Word).md)


### 2️⃣ Vector Processors
↗ [Vector Processors](Vector%20Processors/Vector%20Processors.md)


### 3️⃣ Interconnection Networks


### 4️⃣ Symmetric Multiprocessing /Shared Memory Multiprocessors (SMP)
↗ [Symmetric Multiprocessing & Shared Memory Multiprocessors (SMP)](Symmetric%20Multiprocessing%20&%20Shared%20Memory%20Multiprocessors%20(SMP)/Symmetric%20Multiprocessing%20&%20Shared%20Memory%20Multiprocessors%20(SMP).md)


### Asymmetric Multiprocessing (AMP)
↗ [Asymmetric Multiprocessing (AMP)](Asymmetric%20Multiprocessing%20(AMP).md)


### 💦 Alternative Parallel Processing Approaches
#### Distributed Computing
↗ [Distributed Computing & Systems](../../../../../../../🧠%20Computing%20Methodologies/Distributed%20Computing%20&%20Systems/Distributed%20Computing%20&%20Systems.md)
#### Dataflow Computing
↗ [Dataflow Computing](📌%20Parallel%20Computing%20Alternative%20Modelings/Dataflow%20Computing.md)
#### Neural Network
↗ [Deep Learning (Neural Networks)](../../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning/📌%20Deep%20Learning%20(Neural%20Network)/Deep%20Learning%20(Neural%20Networks).md)
↗ [Neural Networks (In Parallel Computing)](📌%20Parallel%20Computing%20Alternative%20Modelings/Neural%20Networks%20(In%20Parallel%20Computing).md)
#### Systolic Arrays
↗ [Systolic Arrays](📌%20Parallel%20Computing%20Alternative%20Modelings/Systolic%20Arrays.md)



## Ref
[👍 Symmetric Multiprocessing (SMP) and Asymmetric Multiprocessing (AMP)]: https://www.acontis.com/en/symmetric-multiprocessing-and-asymmetric-multiprocessing.html

