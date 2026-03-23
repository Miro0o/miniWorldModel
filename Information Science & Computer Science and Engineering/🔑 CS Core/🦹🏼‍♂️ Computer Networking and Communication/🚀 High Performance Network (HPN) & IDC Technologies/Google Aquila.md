# Google Aquila

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro



## Ref
[回顾谷歌数据中心分布式交换架构Aquila]: https://mp.weixin.qq.com/s/O5Ed766Loyht4MKIH-fKTg

Aquila是一种实验性的数据中心网络架构，将超低延迟作为核心设计目标，同时也支持传统的数据中心业务。Aquila使用了一种新的二层基于单元的协议、GNet、一个集成交换机和一个定制的ASIC，ASIC和GNet一同设计，并具有低延迟远程存储访问RMA。

Aquila 能够实现40 µs以下的IP流量拖尾结构往返时间RTT和低于10µs的跨数百台主机的RMA执行时间，甚至在存在面向吞吐量的后台IP流量的情况下。这意味着对于运行在Aquila原型网络上的产品质量键值存储，尾部延迟减少了5倍以上。

多年以来，谷歌的每一次重大发布都值得所有IT人思考学习。

- 2003 年的Google 文件系统（GFS，Google File System）。
- 2004 年的MapReduce分析平台。
- 2006 年的BigTable NoSQL数据库。
- 2009 年的仓储级计算（Warehouse-scale computing）。
- 2012 年的Spanner分布式数据库。
- 2015 年的Borg集群控制器以及2016年的Omega scheduler插件。
- 2015 年的Jupiter数据中心Underlay 网络。
- 2017 年的Espresso边缘路由软件堆栈。
- 2018 年的Andromeda虚拟网络堆栈。
