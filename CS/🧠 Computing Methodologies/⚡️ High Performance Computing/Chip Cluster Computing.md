# Chip Cluster Computing

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Switched LAN](../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/Switched%20LAN/Switched%20LAN.md)
↗ [IDC & Data Center Networking](../../../../🏎️%20Computer%20Networking%20and%20Communication/🚀%20High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies/IDC%20&%20Data%20Center%20Networking.md)

↗ [Distributed Computing & Systems](../Distributed%20Computing%20&%20Systems/Distributed%20Computing%20&%20Systems.md)
↗ [Distributed Systems Implementations](../Distributed%20Computing%20&%20Systems/💸%20Distributed%20Systems%20Implementations/Distributed%20Systems%20Implementations.md)
↗ [Multiprocessors and Multicore Processors](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/Multiprocessors%20and%20Multicore%20Processors/Multiprocessors%20and%20Multicore%20Processors.md)



## Intro




## Ref
[👍 Meta超大规模AI智算基础设施架构设计]: https://mp.weixin.qq.com/s/aME8ltsRKyYGXfYZyATyxw

本文翻译2024年Meta分享的一篇技术文章Building Meta’s GenAI Infrastructure。

- 两个 GPU 集群，每个集群 `2.4w H100`，分别用 `RoCE/InfiniBand` 网络；
- LLaMA3 就是在这两个集群上训练出来的；
- 预计到 2024 年底，Meta AI 基础设施建设将拥有 `35w 张 H100` GPU，总算力相当于约 `60w 张 H100`。
