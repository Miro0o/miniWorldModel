# FAQ

[TOC]



## 👉 Would it improve the performance of DBMS if it was embedded into OS Kernel?
#database #OS_Kernel #performance 


[将数据库写进操作系统内核是否能提升性能？ - 孤帆的回答 - 知乎]: https://www.zhihu.com/question/667354659/answer/30284743340
看似有意义实则没价值。首先按照你这个逻辑来说，任何性能敏感的程序最好都扔到kernel里面好了，然后你得到了一个什么都包括的巨无霸程序，我都不知道这还叫不叫operating system。实际点来说，之所以现在的程序，不仅仅是数据库进行分层，是有他的原因的，一个很大原因就是要管理一个复杂的codebase对于任何团队来说都是很有挑战的，不说开发，只是说发版本release，都是个挺复杂的问题。所以业界一直在推解耦，抽象，是有他的原因的。那么抽象，解耦，带来了什么呢，他们带来了更高的正确性和更少的bug和更快的开发u速度，而这里的trade off就是一定的性能。 至少在目前的数据库开发上面，这个tradeoff是完全值得的，没人喜欢一个很快但是不正确/天天crash的数据库。而哪怕是用ebpf这种非侵入式的方式，debug的难度也可以算是突破天际了，所以这东西注定没什么工程实用价值。也许，eventually有人愿意用10年来磨一个项目，然后把周围的这些观测性，运维性的工具/特性都做好，这也不是不可能工程化。但目前看来，只是个1后面没有0，学术界的自high罢了

[将数据库写进操作系统内核是否能提升性能？ - 无敌大饺子的回答 - 知乎]: https://www.zhihu.com/question/667354659/answer/90677972587

理论上来说，将数据库运行在内核中确实可以减少[系统调用](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8&zhida_source=entity)的开销和[上下文切换](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2&zhida_source=entity)开销，从而提升性能。不过，这种做法早在上世纪60年代就已有先例——例如 [PickOS](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Pick_operating_system) 就是一例。但其主要问题在于**可移植性、维护性和安全性。**数据库开发人员不仅要编写和维护数据库代码，还得维护操作系统内核、编写新的硬件驱动，基本不可持续。 如今的数据库系统复杂程度与操作系统内核不相上下，因此无一例外地都构建在通用操作系统之上，专注于数据库逻辑，把驱动、安全、硬件资源管理等交给操作系统处理（例如通过 [POSIX 接口](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=POSIX+%E6%8E%A5%E5%8F%A3&zhida_source=entity)）。

这种分工虽然解决了问题，也带来了很多矛盾。比如名嘴Linus喷数据库的人没品味，非要用[AIO接口](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=AIO%E6%8E%A5%E5%8F%A3&zhida_source=entity)。数据库的人则喜欢绕过操作系统，因为数据库作为应用程序比OS内核更了解自己的工作负载，同时觉得操作系统提供的接口太过于通用，无论是性能还是灵活性上都不太容易满足数据库的需求，比如”著名“的Andy[非常讨厌posix的mmap接口](https://link.zhihu.com/?target=https%3A//db.cs.cmu.edu/mmap-cidr2022/)。大部分数据库系统（比如MySQL,PostgreSQL)有自己的[buffer pool](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=buffer+pool&zhida_source=entity)，绕过了Linux的page cache，方便高效实现事务ACID特性。

另一方面，操作系统内核具有在用户态程序无法实现的执行特权指令的优势——例如直接修改page table、刷TLB、发送中断等。如果能将这些特性直接赋予数据库系统，数据库能有更大的发挥空间。

目前，主流的数据库和操作系统接口协同设计方案大致可以归纳为以下几种方向：
1. **定制化操作系统内核**  
    为数据库量身打造一个专用内核（如早期的 PickOS），这种方法可以最大限度地发挥硬件性能，但代价是**维护成本极高**。每次硬件更新都可能需要重新编写或修改大量驱动代码，从长远来看难以持续。
2. **内核旁路方案 (Kernel Bypass)**  
    利用类似 DPDK 和 SPDK 的用户态驱动，可以绕过操作系统内核直接访问网络和存储硬件。不过，这种方式仅限于网络和存储子系统，对于像虚拟内存、中断管理、特权指令等安全性要求极高的模块，则无法实现绕过。
3. **扩展现有通用操作系统**  
    以 Linux 为例，许多研究尝试通过增加特殊的系统调用、魔改内核、开发专门的内核模块，或者利用 [eBPF](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=eBPF&zhida_source=entity) 等User Bypass技术，将部分数据库逻辑迁移到内核空间。这种方法的优点在于能保持 Linux 生态的丰富工具和稳定性，但也面临几个问题：
	- **设计空间受限**：数据库仍然需要在用户态和内核态之间频繁切换，带来系统调用的开销；而 eBPF 对代码的功能和编程模型（如不支持浮点运算，仅能编写简单程序）也存在一定限制，同时不能修改对安全性要求很高的子系统（比如虚拟内存、中断等）。
	- **安全与可维护性问题**：随意修改复杂的内核代码容易引入安全漏洞，并增加维护负担，可能影响内核的持续更新。

有没有既能满足安全、可维护性、Linux生态，同时能将所有特权指令使能给数据库系统的方法呢？

（下面是广告时间）

我们在一篇SIGMOD 25 论文《Practical DB-OS Co-Design with Privileged Kernel Bypass》中提出了一种新的设计范式，称为[privileged kernel bypass](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=privileged+kernel+bypass&zhida_source=entity)。这种设计的核心思路是：

- 将数据库进程跑在一个虚拟化环境下的guest kernel space里面，类似于[Unikernel](https://zhida.zhihu.com/search?content_id=711250198&content_type=Answer&match_order=1&q=Unikernel&zhida_source=entity)的环境，数据库能够使用所有的特权指令。
- 区别于unikernel，这个guest kernel把数据库系统的系统调用通过hypercall转发给 host kernel，由host kernel提供服务，这样能够复用host kernel的所有硬件驱动、子系统（比如文件系统、网络）、相关的工具生态。
- 同时数据库系统能够在虚拟化环境里随意魔改guest kernel：

- 比如利用硬件page table来设计一些新奇的buffer pool管理方式，绕过host kernel的mmap接口的各种限制，避免掉guest态到host态的切换开销;
- 实现微秒级别的内存快照
- 实现比host kernel更高效的的内存分配机制
- 为事务特化一个抢占式调度器
- ....

- 同时这种魔改只影响 guest kernel，保持了Host kernel的稳定和安全。Host kernel通过在内核态跑一个hypervisor （比如我们用的[dune](https://link.zhihu.com/?target=https%3A//www.usenix.org/conference/osdi12/technical-sessions/presentation/belay) hypervisor) 来提供这种虚拟化环境，安全隔离则由虚拟化硬件(Intel VT-x)和hypervisor来完成。

有兴趣的请参考：

HPTS 24的talk PPT：[https://hpts.ws/papers/2024/2024_session3_zhou.pdf](https://link.zhihu.com/?target=https%3A//hpts.ws/papers/2024/2024_session3_zhou.pdf)

论文preprint: [https://zxjcarrot.github.io/fil](https://link.zhihu.com/?target=https%3A//zxjcarrot.github.io/files/libdbos_SIGMOD25.pdf)