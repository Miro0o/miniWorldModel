# Appendix 1

[TOC]


🔗 https://www.qtmuniao.com/2021/05/16/distributed-system-material/



## 引子
时下，随着通信技术的发展、移动互联网的普及、物联网车联网人工智能的兴起，每天所产生的数据呈爆炸性的增长。这种尺度的数据不是传统单机系统可以独立处理的，而只能借助于大规模的分布式系统，因而分布式系统渐渐的变成一门 “显学”。而作为一个分布式系统初学者，面对网上未加归类、浩如烟海的学习资料，很容易两眼抓瞎。

但分布式系统有其基本研究内容和独特发展脉络，比如：

1. 一些基本研究问题：时序问题、一致性问题、容错技术、共识算法、并发控制等等。
2. 一些基本定理：CAP、PACELC、FLP
3. 渐次发展的工业系统：MapReduce、Spark、GFS、Dynamo、Cosmos

因此只需要在 “时空” 两个维度对分布式系统进行把握，就能提纲挈领，愈学愈明。“**时**” 表示分布式系统的演进脉络，可以通过阅读不同时期、学术界工业界的一些论文来把握。“**空**” 表示分布式系统中所研究的基本问题的拆解，可以通过阅读一些书籍建立分布式系统的知识体系。本文将我在学习分布式系统知识过程搜集到的一些资料，按类别简单汇总，以飨诸君。资料排名没有先后，请按需采用。

**注：**文中推荐的资料大多为英文，如果阅读有困难，推荐使用 Chrome 浏览器，并且给 Chrome 装一个 “[google 翻译](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)” 的插件，可以点击一键 “翻译此页面”。

_作者：木鸟杂记 [https://www.qtmuniao.com/2021/05/16/distributed-system-material/](https://www.qtmuniao.com/2021/05/16/distributed-system-material/), 转载请注明出处_



## 书籍
### Dr. Martin Kleppmann. Designing Data-Intensive Applications

《构建数据密集型应用》，[https://dataintensive.net/buy.html](https://dataintensive.net/buy.html)，作者提供免费英文版下载，网上也可以搜到。

全书分为三大部分：

1. 系统基石（Foundations of Data System）
2. 分散数据（Distributed Data）
3. 衍生数据（Derived Data）

**系统基石**部分探讨了数据系统的一些通用侧面：

1. 可靠性、可扩展性、可维护性（Reliable, Scalable, and Maintainable Applications）
2. 数据模型和查询语言（Data Models and Query Languages）
3. 数据存储和检索（Storage and Retrieval）
4. 数据编码和演进（Encoding and Evolution）

**分散数据**部分讨论了构建分散在多机上的数据系统和一些原则和面临的问题：

1. 冗余（replication）
2. 分片（Partition）
3. 事务（Transactions）
4. 分布式系统存在的问题（The Trouble With Distributed Systems）
5. 一致性和共识（Consistency and Consensus）

**衍生数据**部分其实是在探讨分散在多机上的系统的处理问题。包括：

1. 批处理（Batch Processing）
2. 流式处理（Stream Processing）
3. 数据系统的未来（The Future of Data Systems）

近年来流批系统趋于融合，从而让用户能够更加灵活、高效的对原始数据进行处理和变换。

这些章节拆分的都非常棒。熟读本书，让你在遇到一个新系统时，可以如庖丁解牛一般熟练拆解成为多个构件，并了每个构件背后的权衡取舍（trade off）。


### M. van Steen and A.S. Tanenbaum, Distributed Systems, 3rd ed., [distributed-systems.net](http://distributed-systems.net/), 2017.

《分布式系统》第三版，[https://www.distributed-systems.net/index.php/books/ds3/](https://www.distributed-systems.net/index.php/books/ds3/)。作者提供英文版 PDF 免费下载链接，简介：

本书分为九个小结：

- 简介（Introduction）
- 架构（Architecture）
- 进程（Processes）
- 通信（Communication）
- 命名系统（Naming）
- 协同（Coordination）
- 一致性和多副本（Consistency and replication）
- 容错（Fault Tolerance）
- 安全（Security）

作者还提供了 Python 示例代码和图表下载。


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#Mikito-Takada-Distributed-System-for-fun-and-profit "Mikito Takada. Distributed System for fun and profit")Mikito Takada. Distributed System for fun and profit

一本免费的分布式系统小书：[http://book.mixu.net/distsys/](http://book.mixu.net/distsys/)，介绍了分布式系统中的一些关键概念和设计考量，助你了解知名的商用系统如 Dynamo、BigTable、MapReduce、Hadoop 背后的设计原理。作者将分布式编程的考量归结为两个方面：

1. 信息以光速传递
2. 分离组件会独立出错

然后将全书分为五个小结：

1. **分布式系统基础（Basics）**：粗粒度的介绍了一些名词和概念，探讨了系统的目标以及实现的难度
2. **自上而下的层层抽象（Up and down the level of abstraction）**：介绍了 CAP 定理和 FLP impossibility ，然后探讨了多种一致性模型。
3. **时与序（time and order**）。理解分布系统的关键之一，便是要理解分散的组件如何确定时间的先后顺序。
4. **多副本：避免分裂（Replication: preventing divergence）**：多副本间如何保持一致
5. **多副本：接受分歧（Replication: accepting divergence）**：多副本间如何处理冲突



## 公开课
### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#MIT-6-824-Distributed-Systems "MIT 6.824: Distributed Systems")MIT 6.824: Distributed Systems
最经典的分布式系统课程之一：[https://pdos.csail.mit.edu/6.824/schedule.html](https://pdos.csail.mit.edu/6.824/schedule.html)。
课程亮点在于：
1. 精选的论文列表
2. 精巧的实验设计
非常适合自学。


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#Cambridge-Concurrent-and-Distributed-Systems "Cambridge Concurrent and Distributed Systems")Cambridge Concurrent and Distributed Systems
剑桥大学的并发和分布式课程， [https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/materials.html](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/materials.html)

DDIA 作者 Martin Kleppmann 主讲。


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#CMU-15-440-Distributed-Systems "CMU 15-440: Distributed Systems")CMU 15-440: Distributed Systems
cmu 的分布式系统：[https://www.cs.cmu.edu/~dga/15-440/S14/syllabus.html](https://www.cs.cmu.edu/~dga/15-440/S14/syllabus.html)。


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#standford-cs244b-Distributed-System "standford cs244b Distributed System")standford cs244b Distributed System
斯坦福的分布式系统课程：[http://www.scs.stanford.edu/20sp-cs244b/](http://www.scs.stanford.edu/20sp-cs244b/)
CS244b 是一个讨论课，也给了一些经典的论文列表。


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#UW-CSE490H-Distributed-Systems "UW CSE490H: Distributed Systems")UW CSE490H: Distributed Systems
华盛顿大学的分布式系统课程：[https://courses.cs.washington.edu/courses/cse490h/11wi/](https://courses.cs.washington.edu/courses/cse490h/11wi/)。最近几年的课程没有开还是没有公开，最近的是 2011 年的。也提供了一个不错的论文阅读列表。



## [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE "开源项目")开源项目
### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E5%AD%98%E5%82%A8 "存储")存储
1. Hadoop， [https://github.com/apache/hadoop](https://github.com/apache/hadoop) ，Java：可以通过 tag 看早期代码，包含 MapReduce 和 GFS 的开源实现
2. seaweedfs ，[https://github.com/chrislusf/seaweedfs](https://github.com/chrislusf/seaweedfs)， Golang：参考了 Facebook Haystack 和 F4
3. Minio，[https://github.com/minio/minio](https://github.com/minio/minio)， Golang：一个经典的开源实现的对象存储
4. TiDB，[https://github.com/pingcap/tidb](https://github.com/pingcap/tidb)，Golang，提供 MySql 访问接口的分布式数据库



## [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E5%85%B1%E8%AF%86%E7%AE%97%E6%B3%95 "共识算法")共识算法
1. Etcd，[https://github.com/etcd-io/etcd](https://github.com/etcd-io/etcd)，Golang：Raft 的一个实现，用于 k8s 中。也可以用于任何分布式系统的控制面的数据存储。
2. Zookeeper，[https://github.com/apache/zookeeper](https://github.com/apache/zookeeper)，Java：实现了 Zab 共识协议，最初用于 Hadoop 中存储元信息，地位和 Etcd 类似。


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E8%AE%A1%E7%AE%97 "计算")计算
1. Spark，[https://github.com/apache/spark](https://github.com/apache/spark)，Scala：一个大数据处理、分析引擎
2. Flink，[https://github.com/apache/flink](https://github.com/apache/flink)，Java：流批一体的数据处理引擎
3. Ray，[https://github.com/ray-project/ray](https://github.com/ray-project/ray)，Python/C++：表达能力强大的通用计算引擎



## [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E7%B3%BB%E5%88%97%E5%8D%9A%E5%AE%A2 "系列博客")系列博客
### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E5%86%99%E7%BB%99%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%AD%A6%E8%80%85%E7%9A%84%E4%B8%80%E4%BA%9B%E7%AC%94%E8%AE%B0 "写给分布式系统初学者的一些笔记")写给分布式系统初学者的一些笔记
Jeff Hodges [https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/](https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/)

博主将从事分布式系统工作所得到的经验教训做了一个概要性的总结，对新人进入分布式领域转换思想很有启发性作用。包括：

1. 故障频发是分布式系统区别于其他系统的显著特点
2. 构建健壮的分布式系统要远难于单机系统
3. 分布式系统的开源协作不同于单机系统
4. 多机协同很难
5. 很慢这个事情在分布式系统中很难定位
6. 寻找使服务部分可用的手段
7. 充分利用局部性原理
8. 使用 CAP 原理来审视你的分布式系统
9. …



### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E7%BB%99%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%9A%84%E4%B8%80%E4%BA%9B%E5%88%86%E5%B8%83%E5%BC%8F%E7%90%86%E8%AE%BA "给分布式系统工程师的一些分布式理论")给分布式系统工程师的一些分布式理论
[https://www.the-paper-trail.org/post/2014-08-09-distributed-systems-theory-for-the-distributed-systems-engineer/](https://www.the-paper-trail.org/post/2014-08-09-distributed-systems-theory-for-the-distributed-systems-engineer/)

博主给出了分布式系统的一个入门路径和参考资料：
1. **第一步（First steps）：**推荐了一些书
2. **故障和时序（Failure and Time）**：分布系统中最重要的两个基石，给出了一些经典论文引用
3. **容错的基本考量（The basic tension of fault tolerance）**：要做冗余以容错，但过分冗余又会浪费性能
4. **基本源语（Basic primitives）**：分布系统中的一些基本概念论文链接，包括选举算法、一致性快照、共识协议、分布式状态机、广播、链式冗余。
5. **一些工业系统论文列表**：谷歌的居多，非谷歌的也有一些



## [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#Meetup "Meetup")Meetup
### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#Papers-we-love "Papers we love")Papers we love
PapersWeLove 计算机论文分享： [https://www.zhihu.com/column/c_1353678180390162432](https://www.zhihu.com/column/c_1353678180390162432)


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#Microsoft-Distributed-System-Meetup "Microsoft-Distributed-System-Meetup")Microsoft-Distributed-System-Meetup
微软同学搞的一个分布式系统 meetup，包括 一块学 6.824、一块读 DDIA、有意思的主题演讲等等：[https://microsoft-distributed-system-meetup.github.io/home/](https://microsoft-distributed-system-meetup.github.io/home/)


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#Distributed-Systems-Reading-Group "Distributed Systems Reading Group")Distributed Systems Reading Group
MIT 同学在 2013 年搞的一个论文阅读小组：[http://dsrg.pdos.csail.mit.edu/papers/](http://dsrg.pdos.csail.mit.edu/papers/)

包括共识协议、数据冗余、事务相关、并发问题等等。


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E5%AD%A6%E4%B9%A0%E5%B0%8F%E7%BB%84 "计算机系统学习小组")**计算机系统学习小组**
@[胡津铭](https://www.zhihu.com/people/hu-jin-ming-31) 组织的系统学习小组：[https://learn-sys.github.io/cn/](https://learn-sys.github.io/cn/)


### [](https://www.qtmuniao.com/2021/05/16/distributed-system-material/#The-Last-Thing "The Last Thing")The Last Thing
最后，附赠一个 github 上经典的 awesome 系列中，分布式系统的 repo：[https://github.com/theanalyst/awesome-distributed-systems](https://github.com/theanalyst/awesome-distributed-systems)
