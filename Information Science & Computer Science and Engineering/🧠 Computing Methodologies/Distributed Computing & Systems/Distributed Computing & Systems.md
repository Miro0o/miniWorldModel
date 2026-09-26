# Distributed Computing & Systems

[TOC]



## Res
### Related Systems
↗ [Parallel Computing & Programming](../⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md)
↗ [High Performance Network (HPN) & IDC Technologies](../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/🚀%20High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies/High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies.md)

↗ [Computer Storage & Database Systems](../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Computer%20Storage%20&%20Database%20Systems.md)
↗ [High Performance Storage (HPS)](../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/🚀%20High%20Performance%20Storage%20(HPS)/High%20Performance%20Storage%20(HPS).md)


### Learning Resources
💻 [分布式系统大纲](https://iswade.github.io/translate/distsys/)
💻 [分布式系统 - 知识体系详解 | Java全栈知识体系](https://pdai.tech/md/arch/arch-z-overview.html)
📖 [分布式系统(Distributed System)资料](https://gist.github.com/zjhiphop/c4861a6f586e3fdb2379)
#### Courses
🏫 MIT ↗ [6.5840 (6.824) Distributed Systems](../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/MIT/6.5840%20(6.824)%20Distributed%20Systems/6.5840%20(6.824)%20Distributed%20Systems.md)
> 要说“分布式系统的经典学习资料”，MIT 6.824（即 MIT 分布式系统课程） 一定位居榜首。
> 这门课程已经有 20 年历史，日前公布了 2020 年春季课表，与往年不同的是，除了传统的文字介绍，官方还放出了高清课程视频。


🏫 CMU ↗ [15-440 & 640 Distributed Systems](../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/CMU/15-440%20&%20640%20Distributed%20Systems/15-440%20&%20640%20Distributed%20Systems.md)
> 这是分布式系统的入门课，主要是针对本科生。推荐下14年Dave和Srini上的，特色之一是用了Go（那阵子Dave特别着迷于go）地址在 
> http://www.cs.cmu.edu/~dga/15-440/S14/


🏫 CMU 15-172
> [15-712 Advanced and Distributed Operating Systems, Spring 2012](https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15712-s12/www/)
> 
> 面向PhD，主要是读paper。上课老师Hui Zhang是神人之一，大局观特别好，上了之后启发很大。我算是从这课入的门。
> 
> 建议顺序是先学习440的课件，然后完成作业，有余力再712.
> 不过提醒一点是，这两门课都没有录像，所以光看课件效果会差很多。尤其是15-712这门课，纯自己读paper和老师在你读后讲一讲差很远。这个主要是因为系统是艺术而不是科学。里面的很多设计决定和哲学相关。所以不仅仅是懂怎么做的 ，更多是体会为什么要这么设计。


🏫 CMU 15-418/Stanford CS149: Parallel Computing
> [Kayvon Fatahalian](http://www.cs.cmu.edu/~kayvonf) 教授此前在 CMU 开了 15-418 这门课，后来他成为 Stanford 的助理教授后又开了类似的课程 CS149。但总体来说，15-418 包含的课程内容更丰富，并且有课程回放，但 CS149 的编程作业更 fashion 一些。我个人是观看的 15-418 的课程录影但完成的 CS149 的作业。
> 
> 🔗 https://csdiy.wiki/并行与分布式系统/CS149/


### Other Resources
Awesome Database Learning



## Intro



## Ref
[Online Transaction Processing]: https://en.wikipedia.org/wiki/Online_transaction_processing

[到底什么是分布式系统？你需要了解这些]: https://segmentfault.com/a/1190000023951396

分布式系统是一个古老而宽泛的话题，而近几年因为 “大数据” 概念的兴起，又焕发出了新的青春与活力。本文将会通过对如下几个问题展开谈一下分布式系统：
- 什么是分布式系统？
- 为什么要用分布式系统？
- 分布式系统设计推演
- CAP定理是什么？
- 分布式系统如何进行分布？
- 分布式应用通常使用的架构类型哪些?
- 分布式系统的优缺点有哪些？

[什么是分布式系统，如何学习分布式系统]: https://www.cnblogs.com/xybaby/p/7787034.html

[👍 👍 学习分布式系统需要怎样的知识？ - 知乎]: https://www.zhihu.com/question/23645117

[👍 学习分布式系统需要怎样的知识？ - 马超的回答 - 知乎]: https://www.zhihu.com/question/23645117/answer/124708083

总的来说，分布式系统要做的任务就是把多台机器有机的组合、连接起来，让其协同完成一件任务，可以是计算任务，也可以是存储任务。如果一定要给近些年的分布式系统研究做一个分类的话，我个人认为大概可以包括三大部分：
- **分布式存储系统**。 分布式存储系统是一个非常古老的话题，同时也是分布式系统里最难，最复杂，涉及面最广的问题。 往细了分，分布式存储系统大概可以分为四个子方向：
	- 结构化存储
	- 非结构化存储
	- 半结构化存储
	- In-memory 存储
- **分布式计算系统**
	- 我的理解是这样的：
		- 传统的并行计算要的是：投入更多机器，数据大小不变，计算速度更快
		- 分布式计算要求：投入更多的机器，能处理更大的数据。
	- 如同分布式存储系统一样，我对分布式计算系统也做了一个分类，如下：
		- 传统基于msg的系统
		- MapReduce-like 系统
		- 图计算系统
		- 基于状态（state）的系统
		- Streaming 系统
- **分布式管理系统**
	- （未完待续）

[👍 分布式系统领域有哪些经典论文？ - 严林的回答 - 知乎]: https://www.zhihu.com/question/30026369/answer/46476717
