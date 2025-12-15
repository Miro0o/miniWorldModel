# Gödel Scheduler - ByteDance

[TOC]



## Res



## Intro
在项目早期，基础架构团队就计划用一套调度系统管理在离线业务，真正做到统一调度。由于离线业务的调度需求比较复杂，与在线业务差别比较大，吞吐要求也很高；加上 Kubernetes 原生调度器是基于 Pod 调度，对更上一级 “Job” 级别的调度语义支持能力有限；同时由于原生调度器是单体调度器，性能优化的天花板也较低，比较难满足部分批式计算任务的需求——我们决定基于 Kubernetes 系统自研分布式调度器：**Gödel Scheduler**。

Gödel Scheduler 是一个能统一调度在线和离线业务的分布式调度器，能在满足在离线业务功能和性能需求的前提下，提供良好的扩展性和调度质量。

Gödel Scheduler 具备如下主要特点：
- 基于 K8s Scheduler，结合**乐观并发**思想，把最耗时的应用到节点匹配（filtering and scoring）操作放在 scheduler 组件，可以并发执行，提高大规模集群调度吞吐；
- **两层调度语义**抽象（Unit 和 Pod）和**二级调度框架**实现：提供更灵活的“批”调度能力，更好支持离线业务的同时，可以进一步提高调度吞吐和提升系统扩展性 （扩展后的框架可以更好地处理一些特殊场景）；
- 丰富的功能和优秀的性能，满足在线，离线（批，流）和训练等业务需求，真正做到统一调度；
- 兼容 Kubernetes 生态，可以替换 K8s Scheduler；
	- 由于性能以及架构优化，在 framework interface 上与 K8s Scheduler 不完全一样，但扩展性不受影响，也可以像 Kubernetes 一样实现 scheduling plugin；

Gödel Scheduler 的架构如下图所示：

![](../../../../../../Assets/Pics/Pasted%20image%2020240202221524.png)

可以看到，Gödel Scheduler 由三个组件组成：Dispatcher、Scheduler 和 Binder。其中，Scheduler 组件是多实例，乐观并发调度， Dispatcher 和 Binder 则是单实例。


## Ref
[字节跳动开源 Gödel Scheduler：在离线统一调度器]: https://mp.weixin.qq.com/s/csPhuXXvkzCyBwVsPDH4mw

