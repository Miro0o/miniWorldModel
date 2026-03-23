# DPDK (Data Plane Development Kits)

[TOC]



## Res
🏠 https://www.dpdk.org
🚧 https://github.com/DPDK/dpdk (`dpdk` only)
🚧 http://git.dpdk.org/ (`dpdk` and related tools/libs/etc.)

📂 http://core.dpdk.org
- 📂 http://doc.dpdk.org/guides/ | `dpdk` official english documentation 🇺🇸
- 📂 https://dpdk-docs.readthedocs.io/en/latest/howto/index.html | `dpdk` 文档中文版 🇨🇳
- 📂 http://doc.dpdk.org/api/

Please check the doc directory for release notes,
API documentation, and sample application information.

For questions and usage discussions, subscribe to: users@dpdk.org
Report bugs and issues to the development mailing list: dev@dpdk.org


### Related Topics
↗ [The Linux Foundation](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/The%20Linux%20Foundation.md)
↗ [Intel](../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Chip%20Manufacturers/Intel.md)
↗ [SPDK (Storage Plane Development Kit)](../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/🚀%20High%20Performance%20Storage%20(HPS)/SPDK%20(Storage%20Plane%20Development%20Kit)/SPDK%20(Storage%20Plane%20Development%20Kit).md)


### Learning Resources
https://blog.csdn.net/haolipengzhanshen/category_9269298.html
DPDK入门教程 👍 

https://github.com/0voice/dpdk_engineer_manual
冲破内核瓶颈，让I/O性能飙升】DPDK工程师手册，官方文档，最新视频，开源项目，实战案例，论文，大厂内部ppt，知名工程师一览表

https://www.xiexianbin.cn/sdn/dpdk/must-read-for-dpdk-beginner/index.html
本文将助于各位有志于从事 `DPDK` 工作或需要了解该领域背景的人群快速入门 DPDK。



## Intro
DPDK is a set of libraries and drivers for fast packet processing.
It supports many processor architectures and both FreeBSD and Linux.

The DPDK uses the Open Source BSD-3-Clause license for the core libraries and drivers. The kernel components are GPL-2.0 licensed.


### DPDK 对传统基于OS内核的数据传输的突破
> 📎 https://ctimbai.github.io/2018/04/10/tech/net/dpdk/DPDK_入门最佳指南/

相对传统的基于内核的网络数据处理，DPDK 对从内核层到用户层的网络数据流程进行了重大突破:
1. **传统 Linux 内核网络数据流程**
	1. 硬件中断--->取包分发至内核线程--->软件中断--->内核线程在协议栈中处理包--->处理完毕通知用户层
	2. 用户层收包-->网络层--->逻辑层--->业务层
2. **dpdk 网络数据流程**
	1. 硬件中断--->放弃中断流程
	2. 用户层通过设备映射取包--->进入用户层协议栈--->逻辑层--->业务层

具体地，DPDK在如下方面有重大突破：
- **UIO（用户空间的 I/O 技术）的加持**
	- DPDK 能够绕过内核协议栈，本质上是得益于 UIO 技术，通过 UIO 能够拦截中断，并重设中断回调行为，从而绕过内核协议栈后续的处理流程。
	- UIO 设备的实现机制其实是对用户空间暴露文件接口，比如当注册一个 UIO 设备 uioX，就会出现文件 /dev/uioX，对该文件的读写就是对设备内存的读写。除此之外，对设备的控制还可以通过 /sys/class/uio 下的各个文件的读写来完成。
	- ![](../../../../../Assets/Pics/Pasted%20image%2020240602165740.png)
- **内存池技术**
	- DPDK 在用户空间实现了一套精巧的内存池技术，内核空间和用户空间的内存交互不进行拷贝，只做控制权转移。这样，当收发数据包时，就减少了内存拷贝的开销。
- **大页内存管理**
	- DPDK 实现了一组大页内存分配、使用和释放的 API，上层应用可以很方便使用 API 申请使用大页内存，同时也兼容普通的内存申请。
- **无锁环形队列**
	- DPDK 基于 Linux 内核的无锁环形缓冲 kfifo 实现了自己的一套无锁机制。支持单生产者入列/单消费者出列和多生产者入列/多消费者出列操作，在数据传输的时候，降低性能的同时还能保证数据的同步。
- **poll-mode 网卡驱动**
	- DPDK 网卡驱动完全抛弃中断模式，基于轮询方式收包，避免了中断开销。
- **NUMA**
	- DPDK 内存分配上通过 proc 提供的内存信息，使 CPU 核心尽量使用靠近其所在节点的内存，避免了跨 NUMA 节点远程访问内存的性能问题。
- **CPU 亲和性**
	- DPDK 利用 CPU 的亲和性将一个线程或多个线程绑定到一个或多个 CPU 上，这样在线程执行过程中，就不会被随意调度，一方面减少了线程间的频繁切换带来的开销，另一方面避免了 CPU 缓存的局部失效性，增加了 CPU 缓存的命中率。
- **多核调度框架**
	- DPDK 基于多核架构，一般会有主从核之分，主核负责完成各个模块的初始化，从核负责具体的业务处理。

除了上述之外，DPDK 还有很多的技术突破，可以用下面这张图来概之。
![](../../../../../Assets/Pics/Pasted%20image%2020240602165622.png)


### DPDK: Glossary & Basic Concepts
> 🔗 https://www.cnblogs.com/janeysj/p/15029450.html
> 🔗 https://www.xiexianbin.cn/sdn/dpdk/dpdk-glossary/index.html?to_index=1


### DPDK Source Code Structure
> 🔗 https://dpdk-docs.readthedocs.io/en/latest/prog_guide/source_org.html



## Ref
[👍 What is DPDK?]: https://www.packetcoders.io/what-is-dpdk/

[👍 DPDK 入门最佳指南]: https://ctimbai.github.io/2018/04/10/tech/net/dpdk/DPDK_入门最佳指南/

[DPDK : 用 TestPMD 测试 DPDK 性能和功能 | CSDN]: https://blog.csdn.net/hhd1988/article/details/123009368
[DPDK测试testpmd]: https://www.cnblogs.com/hjxiamen/p/17947295

[👍 DPDK 从入门到入门]: https://nxw.name/2022/what-is-dpdk

![|400](../../../../../Assets/Pics/Pasted%20image%2020240605223714.png)

![|400](../../../../../Assets/Pics/Pasted%20image%2020240605223724.png)

![](../../../../../Assets/Pics/Pasted%20image%2020240605223728.png)


[ DPDK入门实践1——基本概念 | cnblog]: https://www.cnblogs.com/janeysj/p/15029450.html

[DPDK开发快速入门 | CSDN]: http://t.csdnimg.cn/rVExR
![](../../../../../Assets/Pics/Pasted%20image%2020240606100215.png)

[👍 DPDK 初学者入门必读]: https://www.xiexianbin.cn/sdn/dpdk/must-read-for-dpdk-beginner/index.html

[👍 linux源码解读（三十二）：dpdk核心源码解析（二） | Cnblog]: https://www.cnblogs.com/theseventhson/p/16038708.html

[👍 DPDK 笔记 - RSS (Recieve Side Sliding 网卡分流机制) ｜ CSDN]: https://blog.csdn.net/Rong_Toa/article/details/108532566

[DPDK Linux平台上DPDK入门指南（二） | CSDN]: https://blog.csdn.net/qq_44710568/article/details/136733043

