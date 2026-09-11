# Computing Methodologies

[TOC]



## Res
### Related Topics
↗ [Models of Computation & Abstract Machines](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
↗ [Computer Languages & Programming Methodology](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Computation as Programs - Computer Program Semantics & Models](../🗺%20CS%20Overview/Computation%20as%20Programs%20-%20Computer%20Program%20Semantics%20&%20Models.md)

↗ [Computer (Host) System](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20(Host)%20System.md)
↗ [Computer Architecture](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Architecture.md)
↗ [Non-von Neumann Based Microarchitectures](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🤵%20Non-von%20Neumann%20Based%20Microarchitectures/Non-von%20Neumann%20Based%20Microarchitectures.md)
- ↗ [SIC (Simplified Instructional Computer)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🤵%20Non-von%20Neumann%20Based%20Microarchitectures/SIC%20(Simplified%20Instructional%20Computer).md)

↗ [Computer Storage & Database Systems](../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Computer%20Storage%20&%20Database%20Systems.md)
↗ [Computer Networking and Communication](../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Computer%20Networking%20and%20Communication.md)


### Other Resources



## Intro



## Ref
[可逆计算 | 云计算实现计算的云化，可逆计算实现计算的可逆化]: https://www.zhihu.com/column/reversible-computation
作者： Canonical

众所周知，计算机科学得以存在的基石是两个基本理论：图灵于1936年提出的图灵机理论和丘奇同年早期发表的Lambda演算理论。这两个理论奠定了所谓通用计算（Universal Computation）的概念基础，描绘了具有相同计算能力（图灵完备），但形式上却南辕北辙、大相径庭的两条技术路线。如果把这两种理论看作是上帝所展示的世界本源面貌的两个极端，那么是否存在一条更加中庸灵活的到达通用计算彼岸的中间路径?

自1936年以来，软件作为计算机科学的核心应用，一直处在不间断的概念变革过程中，各类程序语言/系统架构/设计模式/方法论层出不穷，但是究其软件构造的基本原理，仍然没有脱出两个基本理论最初所设定的范围。如果定义一种新的软件构造理论，它所引入的新概念本质上能有什么特异之处？能够解决什么棘手的问题？

本文中笔者提出在图灵机和lambda演算的基础上可以很自然的引入一个新的核心概念--可逆性，从而形成一个新的软件构造理论--可逆计算（Reversible Computation）。可逆计算提供了区别于目前业内主流方法的更高层次的抽象手段，可以大幅降低软件内在的复杂性，为粗粒度软件复用扫除了理论障碍。

可逆计算的思想来源不是计算机科学本身，而是理论物理学，它将软件看作是处于不断演化过程中的抽象实体， 在不同的复杂性层次上由不同的运算规则所描述，它所关注的是演化过程中产生的微小差量如何在系统内有序的传播并发生相互作用。

本文第一节将介绍可逆计算理论的基本原理与核心公式，第二节分析可逆计算理论与组件和模型驱动等传统软件构造理论的区别和联系，并介绍可逆计算理论在软件复用领域的应用，第三节从可逆计算角度解构Docker、React等创新技术实践。

基于可逆计算理论设计的低代码平台NopPlatform已开源：
- gitee: [canonical-entropy/nop-entropy](https://link.zhihu.com/?target=https%3A//gitee.com/canonical-entropy/nop-entropy)
- github: [entropy-cloud/nop-entropy](https://link.zhihu.com/?target=https%3A//github.com/entropy-cloud/nop-entropy)
- 开发示例：[tutorial](https://link.zhihu.com/?target=https%3A//gitee.com/canonical-entropy/nop-entropy/blob/master/docs/tutorial/tutorial.md)
- [介绍和答疑视频](https://link.zhihu.com/?target=https%3A//www.bilibili.com/video/BV1u84y1w7kX/)
