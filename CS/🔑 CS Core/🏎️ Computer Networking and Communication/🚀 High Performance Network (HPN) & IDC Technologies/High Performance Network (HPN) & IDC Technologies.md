# High Performance Network (HPN) & IDC Technologies

[TOC]



## Res
### Related Topics
↗ [Computer IO System](../../🧬%20Computer%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20IO%20System/Computer%20IO%20System.md)
↗ [OS IO System](../../🧬%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/OS%20IO%20System.md)
- ↗ [IO Models](../../🧬%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/📌%20IO%20Models/IO%20Models.md)

↗ [Linux IO & Files Management](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/Linux%20IO%20&%20Files%20Management.md)
↗ [Linux Network](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🎠%20Linux%20Network/Linux%20Network.md)

↗ [0x06 Data Link Layer](../📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/0x06%20Data%20Link%20Layer.md)
↗ [IDC & Data Center Networking](IDC%20&%20Data%20Center%20Networking.md)

↗ [NPU (Network Processing Unit)](../../../Embedded%20Development,%20Internet%20of%20Things%20&%20Robot/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/NPU%20(Network%20Processing%20Unit)/NPU%20(Network%20Processing%20Unit).md)
↗ [High Performance Computer (HPC)](../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/High%20Performance%20Computer%20(HPC).md)


### Learning Resources
📖《Linux 高性能网络详解：从DPDK、RDMA到XDP》刘伟



## Intro
### C10K 到 C10M 问题的演进: 基于OS 内核的数据传输的弊端
> 📎 https://ctimbai.github.io/2018/04/10/tech/net/dpdk/DPDK_入门最佳指南/

说到高性能网络编程，一定逃不过 C10K 问题（即单机 1 万个并发连接问题），不过这个问题已经成为历史了，很多技术可以解决它，如常用的 I/O 多路复用模型，select, poll, epoll 等。在此基础上也出了很多优秀的框架，比如 Nginx 基于事件驱动的 Web 服务框架，以及基于 Python 开发的 Tornado 和 Django 这种非阻塞的 Web 框架。

如今，关注的更多是 C10M 问题（即单机 1 千万个并发连接问题）。很多计算机领域的大佬们从硬件上和软件上都提出了多种解决方案。从硬件上，比如说，现在的类似很多 40Gpbs、32-cores、256G RAM 这样配置的 X86 服务器完全可以处理 1 千万个以上的并发连接。

但是从硬件上解决问题就没多大意思了，首先它成本高，其次不通用，最后也没什么挑战，无非就是堆砌硬件而已。所以，抛开硬件不谈，我们看看从软件上该如何解决这个世界难题呢？

这里不得不提一个人，就是 Errata Security 公司的 CEO Robert Graham，他在 Shmoocon 2013 大会上很巧妙地解释了这个问题。有兴趣可以查看其 YouTube 的演进视频： C10M Defending The Internet At Scale。

> 📄 [C10M: Defending the Internet at scale](https://www.cs.dartmouth.edu/~sergey/cs258/2013/C10M-Defending-the-Internet-at-Scale-Dartmouth-2013.pdf)
> 🎬 https://www.youtube.com/watch?v=ZFvnPAIo4F0

他提到了 UNIX 的设计初衷其实为电话网络的控制系统而设计的，而不是一般的服务器操作系统，所以，它仅仅是一个负责数据传送的系统，没有所谓的控制层面和数据层面的说法，不适合处理大规模的网络数据包。最后他得出的结论是：

> ==OS 的内核不是解决 C10M 问题的办法，恰恰相反 OS 的内核正式导致 C10M 问题的关键所在。==

下面列出了基于OS内核的数据传输的弊端：
1. **中断处理：** 当网络中大量数据包到来时，会产生频繁的硬件中断请求，这些硬件中断可以打断之前较低优先级的软中断或者系统调用的执行过程，如果这种打断频繁的话，将会产生较高的性能开销。
2. **内存拷贝：** 正常情况下，一个网络数据包从网卡到应用程序需要经过如下的过程：数据从网卡通过 DMA 等方式传到内核开辟的缓冲区，然后从内核空间拷贝到用户态空间，在 Linux 内核协议栈中，这个耗时操作甚至占到了数据包整个处理流程的 57.1%。
3. **上下文切换：** 频繁到达的硬件中断和软中断都可能随时抢占系统调用的运行，这会产生大量的上下文切换开销。另外，在基于多线程的服务器设计框架中，线程间的调度也会产生频繁的上下文切换开销，同样，锁竞争的耗能也是一个非常严重的问题。
4. **局部性失效：** 如今主流的处理器都是多个核心的，这意味着一个数据包的处理可能跨多个 CPU 核心，比如一个数据包可能中断在 cpu0，内核态处理在 cpu1，用户态处理在 cpu2，这样跨多个核心，容易造成 CPU 缓存失效，造成局部性失效。如果是 NUMA 架构，更会造成跨 NUMA 访问内存，性能受到很大影响。
5. **内存管理：** 传统服务器内存页为 4K，为了提高内存的访问速度，避免 cache miss，可以增加 cache 中映射表的条目，但这又会影响 CPU 的检索效率。

综合以上问题，可以看出内核本身就是一个非常大的瓶颈所在。那很明显解决方案就是想办法绕过内核


### 从基于OS内核的数据传输到用户态数据处理
> 📎 https://ctimbai.github.io/2018/04/10/tech/net/dpdk/DPDK_入门最佳指南/

针对以上弊端，分别提出以下技术点进行探讨。
1. **控制层和数据层分离：** 将数据包处理、内存管理、处理器调度等任务转移到用户空间去完成，而内核仅仅负责部分控制指令的处理。这样就不存在上述所说的系统中断、上下文切换、系统调用、系统调度等等问题。
2. **多核技术：** 使用多核编程技术代替多线程技术，并设置 CPU 的亲和性，将线程和 CPU 核进行一比一绑定，减少彼此之间调度切换。
3. **NUMA 亲和性：** 针对 NUMA 系统，尽量使 CPU 核使用所在 NUMA 节点的内存，避免跨内存访问。
4. **大页内存：** 使用大页内存代替普通的内存，减少 cache-miss。
5. **无锁技术：** 采用无锁技术解决资源竞争问题。

经研究，目前业内已经出现了很多优秀的集成了上述技术方案的高性能网络数据处理框架，如 6wind、Windriver、Netmap、DPDK 等，其中，Intel 的 DPDK 在众多方案脱颖而出，一骑绝尘。



## Ref
[👍 IO模型及高性能网络架构分析 | cnblog]: https://www.cnblogs.com/S1mpleBug/p/16711860.html
- [前言](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E5%89%8D%E8%A8%80)
    - [操作系统一次IO调用过程](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%B8%80%E6%AC%A1io%E8%B0%83%E7%94%A8%E8%BF%87%E7%A8%8B)
- [五大IO模型](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E4%BA%94%E5%A4%A7io%E6%A8%A1%E5%9E%8B)
    - [阻塞IO](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E9%98%BB%E5%A1%9Eio)
    - [非阻塞IO](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E9%9D%9E%E9%98%BB%E5%A1%9Eio)
    - [IO多路复用](https://www.cnblogs.com/S1mpleBug/p/16711860.html#io%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8)
        - [IO多路复用之select](https://www.cnblogs.com/S1mpleBug/p/16711860.html#io%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%E4%B9%8Bselect)
        - [IO多路复用之epoll](https://www.cnblogs.com/S1mpleBug/p/16711860.html#io%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%E4%B9%8Bepoll)
    - [信号驱动IO](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E4%BF%A1%E5%8F%B7%E9%A9%B1%E5%8A%A8io)
    - [异步IO(AIO)](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E5%BC%82%E6%AD%A5ioaio)
- [高性能网络框架](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E9%AB%98%E6%80%A7%E8%83%BD%E7%BD%91%E7%BB%9C%E6%A1%86%E6%9E%B6)
    - [thread-based architecture 基于线程的架构](https://www.cnblogs.com/S1mpleBug/p/16711860.html#thread-based-architecture-%E5%9F%BA%E4%BA%8E%E7%BA%BF%E7%A8%8B%E7%9A%84%E6%9E%B6%E6%9E%84)
    - [event-driven architecture 事件驱动模型](https://www.cnblogs.com/S1mpleBug/p/16711860.html#event-driven-architecture-%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E6%A8%A1%E5%9E%8B)
    - [Reactor反应堆模式](https://www.cnblogs.com/S1mpleBug/p/16711860.html#reactor%E5%8F%8D%E5%BA%94%E5%A0%86%E6%A8%A1%E5%BC%8F)
        - [单Reactor线程模式](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E5%8D%95reactor%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%BC%8F)
        - [单Reactor线程和线程池模式](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E5%8D%95reactor%E7%BA%BF%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E6%B1%A0%E6%A8%A1%E5%BC%8F)
        - [多Reactor线程和线程池模式](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E5%A4%9Areactor%E7%BA%BF%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E6%B1%A0%E6%A8%A1%E5%BC%8F)
- [参考资料](https://www.cnblogs.com/S1mpleBug/p/16711860.html#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99)

高性能IO模型分析-Reactor模式和Proactor模式
图说 Linux 高性能网络架构的那些事
Reactor 模式就一定意味着高性能吗？

[👍 比较 RoCE、InfiniBand 和 TCP 网络：选择正确的高性能协议]: https://ascentoptics.com/blog/cn/comparing-roce-infiniband-and-tcp-networks-choosing-the-right-high-performance-protocol/
