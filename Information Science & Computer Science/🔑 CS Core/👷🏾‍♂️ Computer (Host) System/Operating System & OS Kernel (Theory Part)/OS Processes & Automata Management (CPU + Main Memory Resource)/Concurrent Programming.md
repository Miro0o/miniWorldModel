# Concurrent Programming

[TOC]



## Res
### Related Topics
↗ [OS Level Programming with C & CPP](../../../../Software%20Engineering/👇%20System%20Software%20Engineering/OS%20Level%20Programming%20in%20Different%20Languages/OS%20Level%20Programming%20with%20C%20&%20CPP/OS%20Level%20Programming%20with%20C%20&%20CPP.md)
- ↗ [Concurrency](../../../../Software%20Engineering/👇%20System%20Software%20Engineering/OS%20Level%20Programming%20in%20Different%20Languages/OS%20Level%20Programming%20with%20C%20&%20CPP/Process%20Management/Concurrency.md)
↗ [Go Concurrent Programming](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/Golang/📌%20Go%20Advanced/Go%20Concurrent%20Programming.md)
↗ [Java Concurrent Programming](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java%20Advanced/Java%20Concurrent%20Programming.md)
↗ [Python Concurrent Programming](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Interpreted%20Languages/🐍%20Python/📌%20Python%20Basics/Python%20Concurrent%20Programming.md)

↗ [Physical Database Design (Software Engineering) /Transaction Management /Concurrency Control](../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20DBMS%20Design/Physical%20Database%20Design%20(Software%20Engineering)/Transaction%20Management/Concurrency%20Control/Concurrency%20Control.md)

↗ [Concurrent Computing](../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Concurrent%20Computing/Concurrent%20Computing.md)
↗ [Parallel Computing & Programming](../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md)
↗ [Distributed Computing & Systems](../../../../🧠%20Computing%20Methodologies/Distributed%20Computing%20&%20Systems/Distributed%20Computing%20&%20Systems.md)

↗ [Web Development & The Internet](../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Development%20&%20The%20Internet.md)


### Learning Resources
【真实世界的并发编程 (高性能计算/数据中心/人机交互中的并发编程) [南京大学2022操作系统-P7]】 https://www.bilibili.com/video/BV1cS4y1r7gw/?p=7&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### Concurrent Programming 🆚 Parallel Computing?
> ↗ [FAQ /👉 pipelining, parallelism, concurrency in HTTP Connection Management](../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/FAQ.md#👉%20pipelining,%20parallelism,%20concurrency%20in%20HTTP%20Connection%20Management)

- **并发**：由于有限的资源限制，在某一划定的时间段内（一个时刻，一个处理周期，任意其他规定的时段）资源的请求大于可用资源，这时就需要某种策略来协调这种供小于求的情况，使得在约定的条件内达到最优解。这通常意味着在最短时间内满足最多的资源请求。
- **并行计算**：对一个已知的任务，通过某种划分策略，使得这个任务被划分为多个可以同时处理的子任务，从而达到对该任务处理性能的提高。处理性能可以是任何规定的指标，不过通常是处理效率，即速度/成本。
- **流水线技术/pipelining**: 一种简单的并行计算中的划分策略。

> ↗ [Parallel Computing /Concurrency & Parallelism](../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md#Concurrency%20&%20Parallelism)



## Ref
[并发编程（一）：并行计算概念]: https://wch853.github.io/posts/concurrent/并发编程（一）：并行计算概念.html#何去何从的并行计算
