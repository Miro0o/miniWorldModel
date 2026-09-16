# LLM Infrastructure (Deployment & Inference)

[TOC]



## Res
### Related Topics
↗ [AI (Data) Infrastructure & Techniques Stack](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack.md)
- ↗ [Foundation Models & Development & SDKs](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/Foundation%20Models%20&%20Development%20&%20SDKs.md)
- ↗ [Model Monitoring & Observability](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/Model%20Monitoring%20&%20Observability/Model%20Monitoring%20&%20Observability.md)
- ↗ [Model Web Demo & Web Deployment](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/Model%20Web%20Demo%20&%20Web%20Deployment/Model%20Web%20Demo%20&%20Web%20Deployment.md)

↗ [Transformers](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)
↗ [Attention & Efficient Operator Implementation](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Attention%20&%20Efficient%20Operator%20Implementation.md)

↗ [AI4SE](../../../../../Software%20Engineering/🤖%20AI4SE/AI4SE.md)
- ↗ [Agentic AI Workflow Dev](../../../../../Software%20Engineering/🤖%20AI4SE/🦾%20AI%20Powered%20Dev%20&%20Vibe%20Coding/Agentic%20AI%20Workflow%20Dev/Agentic%20AI%20Workflow%20Dev.md)
- ↗ [AI API Call & AI Gateway](../../../../../Software%20Engineering/🤖%20AI4SE/🦾%20AI%20Powered%20Dev%20&%20Vibe%20Coding/AI%20API%20Call%20&%20AI%20Gateway.md)

↗ [AI on Cloud](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/AI%20on%20Cloud/AI%20on%20Cloud.md)

↗ [vLLM](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/vLLM.md)
↗ [SGLang](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/SGLang.md)


### Papers
https://github.com/0xSero/turboquant
TurboQuant: Near-optimal KV cache quantization for LLM inference (3-bit keys, 2-bit values) with Triton kernels + vLLM integration
Implementation of TurboQuant KV cache compression (ICLR 2026, arXiv:2504.19874) with vLLM integration. Tested on dense and MoE architectures across RTX 3090 and RTX 5090 GPUs.

https://arxiv.org/abs/2309.06180
Efficient Memory Management for Large Language Model Serving with PagedAttention
- [Woosuk Kwon](https://arxiv.org/search/cs?searchtype=author&query=Kwon,+W), [Zhuohan Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+Z), [Siyuan Zhuang](https://arxiv.org/search/cs?searchtype=author&query=Zhuang,+S), [Ying Sheng](https://arxiv.org/search/cs?searchtype=author&query=Sheng,+Y), [Lianmin Zheng](https://arxiv.org/search/cs?searchtype=author&query=Zheng,+L), [Cody Hao Yu](https://arxiv.org/search/cs?searchtype=author&query=Yu,+C+H), [Joseph E. Gonzalez](https://arxiv.org/search/cs?searchtype=author&query=Gonzalez,+J+E), [Hao Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+H), [Ion Stoica](https://arxiv.org/search/cs?searchtype=author&query=Stoica,+I)
- High throughput serving of large language models (LLMs) requires batching sufficiently many requests at a time. However, existing systems struggle because the key-value cache (KV cache) memory for each request is huge and grows and shrinks dynamically. When managed inefficiently, this memory can be significantly wasted by fragmentation and redundant duplication, limiting the batch size. To address this problem, we propose PagedAttention, an attention algorithm inspired by the classical virtual memory and paging techniques in operating systems. On top of it, we build vLLM, an LLM serving system that achieves (1) near-zero waste in KV cache memory and (2) flexible sharing of KV cache within and across requests to further reduce memory usage. Our evaluations show that vLLM improves the throughput of popular LLMs by 2-4× with the same level of latency compared to the state-of-the-art systems, such as FasterTransformer and Orca. The improvement is more pronounced with longer sequences, larger models, and more complex decoding algorithms. vLLM's source code is publicly available at [this https URL](https://github.com/vllm-project/vllm)

https://arxiv.org/abs/2205.14135
FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness
- [Tri Dao](https://arxiv.org/search/cs?searchtype=author&query=Dao,+T), [Daniel Y. Fu](https://arxiv.org/search/cs?searchtype=author&query=Fu,+D+Y), [Stefano Ermon](https://arxiv.org/search/cs?searchtype=author&query=Ermon,+S), [Atri Rudra](https://arxiv.org/search/cs?searchtype=author&query=Rudra,+A), [Christopher Ré](https://arxiv.org/search/cs?searchtype=author&query=R%C3%A9,+C)
- Transformers are slow and memory-hungry on long sequences, since the time and memory complexity of self-attention are quadratic in sequence length. Approximate attention methods have attempted to address this problem by trading off model quality to reduce the compute complexity, but often do not achieve wall-clock speedup. We argue that a missing principle is making attention algorithms IO-aware -- accounting for reads and writes between levels of GPU memory. We propose FlashAttention, an IO-aware exact attention algorithm that uses tiling to reduce the number of memory reads/writes between GPU high bandwidth memory (HBM) and GPU on-chip SRAM. We analyze the IO complexity of FlashAttention, showing that it requires fewer HBM accesses than standard attention, and is optimal for a range of SRAM sizes. We also extend FlashAttention to block-sparse attention, yielding an approximate attention algorithm that is faster than any existing approximate attention method. FlashAttention trains Transformers faster than existing baselines: 15% end-to-end wall-clock speedup on BERT-large (seq. length 512) compared to the MLPerf 1.1 training speed record, 3× speedup on GPT-2 (seq. length 1K), and 2.4× speedup on long-range arena (seq. length 1K-4K). FlashAttention and block-sparse FlashAttention enable longer context in Transformers, yielding higher quality models (0.7 better perplexity on GPT-2 and 6.4 points of lift on long-document classification) and entirely new capabilities: the first Transformers to achieve better-than-chance performance on the Path-X challenge (seq. length 16K, 61.4% accuracy) and Path-256 (seq. length 64K, 63.1% accuracy).

https://www.usenix.org/conference/osdi22/presentation/yu
Orca: A Distributed Serving System for Transformer-Based Generative Models
- Gyeong-In Yu and Joo Seong Jeong, _Seoul National University;_ Geon-Woo Kim, _FriendliAI and Seoul National University;_ Soojeong Kim, _FriendliAI;_ Byung-Gon Chun, _FriendliAI and Seoul National University_
- Large-scale Transformer-based models trained for generation tasks (e.g., GPT-3) have recently attracted huge interest, emphasizing the need for system support for serving models in this family. Since these models generate a next token in an autoregressive manner, one has to run the model multiple times to process an inference request where each iteration of the model generates a single output token for the request. However, existing systems for inference serving do not perform well on this type of workload that has a multi-iteration characteristic, due to their inflexible scheduling mechanism that cannot change the current batch of requests being processed; requests that have finished earlier than other requests in a batch cannot return to the client, while newly arrived requests have to wait until the current batch completely finishes.
- In this paper, we propose iteration-level scheduling, a new scheduling mechanism that schedules execution at the granularity of iteration (instead of request) where the scheduler invokes the execution engine to run only a single iteration of the model on the batch. In addition, to apply batching and iteration-level scheduling to a Transformer model at the same time, we suggest selective batching, which applies batching only to a selected set of operations. Based on these two techniques, we have implemented a distributed serving system called ORCA, with additional designs for scalability to models with hundreds of billions of parameters. Our evaluation on a GPT-3 175B model shows that ORCA can significantly outperform NVIDIA FasterTransformer in terms of both latency and throughput: 36:9× throughput improvement at the same level of latency.


### Learning Resources
https://github.com/henryhxu/CSCI5540
CSCI5540 Machine Learning Systems, Fall 2026
- This graduate course will introduce you to the key concepts and the state-of-the-art in large-scale software systems for LLMs and agents, and encourage you to think about either building new tools or how to apply existing ones in various domains.
- The format of this course is heavily borrowed from Prof. Mosharaf Chowdhury's [CSE 585](https://github.com/mosharaf/cse585/tree/f26) from U. Michigan with his consent.

This is an evolving list and subject to changes due to the breakneck pace of agentic and generative AI innovations.

| Date       | Readings                                                                                                                                                                                                                  | Presenter                                                                  | Summary | Reviewer |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------- | :------ | :------- |
| **Sep 7**  | **Introduction (Cloud, systems, and transformers)**                                                                                                                                                                       | [Henry](https://github.com/henryhxu/CSCI5540/blob/main/lectures/lec1.pptx) |         |          |
|            | [Hints and Principles for Computer System Design](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/09/Hints-and-Principles-v1-full.pdf) (Required)                                                        |                                                                            |         |          |
|            | [The Datacenter as a Computer](https://web.eecs.umich.edu/~mosharaf/Readings/DC-Computer.pdf) (Chapters 1 and 2)                                                                                                          |                                                                            |         |          |
|            | [Heterogeneity at Hyperscale: Characterization and Scheduling of Large Production AI Clusters at Alibaba](https://www.usenix.org/conference/osdi26/presentation/li-suyi)                                                  |                                                                            |         |          |
| **Sep 14** | **No Class: Find Project Groups**                                                                                                                                                                                         |                                                                            |         |          |
|            | [How to Read a Paper](http://ccr.sigcomm.org/online/files/p83-keshavA.pdf) (Required)                                                                                                                                     |                                                                            |         |          |
|            | [How to Give a Bad Talk](https://www.cs.ucf.edu/courses/cop4910/fall2004/BadTalk.pdf) (Required)                                                                                                                          |                                                                            |         |          |
|            | _**Chapter 1. Systems for LLMs**_                                                                                                                                                                                         |                                                                            |         |          |
| **Sep 21** | **Pre-training: DP, TP, PP**                                                                                                                                                                                              |                                                                            |         |          |
|            | [Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM](https://dl.acm.org/doi/10.1145/3458817.3476209) (Required)                                                                              |                                                                            |         |          |
|            | [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://dl.acm.org/doi/10.5555/3433701.3433727) (Required)                                                                                         |                                                                            |         |          |
|            | [PyTorch FSDP: Experiences on Scaling Fully Sharded Data Parallel](https://dl.acm.org/doi/10.14778/3611540.3611569)                                                                                                       |                                                                            |         |          |
|            | [GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism](https://proceedings.neurips.cc/paper/2019/hash/093f65e080a295f8076b1c5722a46aa2-Abstract.html)                                            |                                                                            |         |          |
| **Sep 28** | **Pre-training: EP, SP, compiler, memory**                                                                                                                                                                                |                                                                            |         |          |
|            | [Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin) (Required)                                                    |                                                                            |         |          |
|            | [DeepSpeed Ulysses: System Optimizations for Enabling Training of Extreme Long Sequence Transformer Models](https://arxiv.org/abs/2309.14509) (Required)                                                                  |                                                                            |         |          |
|            | [BigMac: Breaking the Pareto Frontier of Compute and Memory in Multimodal LLM Training](https://arxiv.org/pdf/2605.25451) (Required)                                                                                      |                                                                            |         |          |
|            | [RingAttention with Blockwise Transformers for Near-Infinite Context](https://openreview.net/forum?id=WsRHpHH4s0)                                                                                                         |                                                                            |         |          |
|            | [AutoSP: Unlocking Long-Context LLM Training Via Compiler-Based Sequence Parallelism](https://openreview.net/forum?id=0fgsHvmBBI)                                                                                         |                                                                            |         |          |
|            | [MegaScale-Omni: A Hyper-Scale, Workload-Resilient System for MultiModal LLM Training in Production](https://dl.acm.org/doi/10.1145/3767295.3803587)                                                                      |                                                                            |         |          |
| **Oct 5**  | **Inference: Disaggregation and Memory**                                                                                                                                                                                  |                                                                            |         |          |
|            | [Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180) (Required)                                                                                           |                                                                            |         |          |
|            | [DistServe: Disaggregating Prefill and Decoding for Goodput-Optimized Large Language Model Serving](https://arxiv.org/abs/2401.09670) (Required)                                                                          |                                                                            |         |          |
|            | [Orca: A Distributed Serving System for Transformer-Based Generative Models](https://www.usenix.org/conference/osdi22/presentation/yu)                                                                                    |                                                                            |         |          |
|            | [Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve](https://www.usenix.org/conference/osdi24/presentation/agrawal)                                                                                   |                                                                            |         |          |
| **Oct 12** | **Inference: KV Cache and Speculation**                                                                                                                                                                                   |                                                                            |         |          |
|            | [Mooncake: A KVCache-centric Disaggregated Architecture for LLM Serving](https://arxiv.org/abs/2407.00079)                                                                                                                |                                                                            |         |          |
|            | [EAGLE-3: Scaling up Inference Acceleration of Large Language Models via Training-Time Test](https://arxiv.org/abs/2503.01840)                                                                                            |                                                                            |         |          |
|            | [VeriCache: Turning Lossy KV Cache into Lossless LLM Inference](https://arxiv.org/abs/2605.17613)                                                                                                                         |                                                                            |         |          |
|            | [DFlash: Block Diffusion for Flash Speculative Decoding](https://arxiv.org/abs/2602.06036)                                                                                                                                |                                                                            |         |          |
|            | _**Chapter 2: Systems for Agents**_                                                                                                                                                                                       |                                                                            |         |          |
| **Oct 19** | **Post-training: Basics**                                                                                                                                                                                                 |                                                                            |         |          |
|            | [HybridFlow: A Flexible and Efficient RLHF Framework](https://dl.acm.org/doi/10.1145/3689031.3696075) (Required)                                                                                                          |                                                                            |         |          |
|            | [Optimizing RLHF Training for Large Language Models with Stage Fusion](https://www.usenix.org/conference/nsdi25/presentation/zhong) (Required)                                                                            |                                                                            |         |          |
|            | [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948)                                                                                                    |                                                                            |         |          |
|            | [Reinforcement Learning Optimization for Large-Scale Learning: An Efficient and User-Friendly Scaling Library](https://arxiv.org/abs/2506.06122)                                                                          |                                                                            |         |          |
| **Oct 26** | **Post-training: Async and Disaggregation**                                                                                                                                                                               |                                                                            |         |          |
|            | [AReaL: A Large-Scale Asynchronous Reinforcement Learning System for Language Reasoning](https://proceedings.neurips.cc/paper_files/paper/2025/hash/33c00862bfa29ac72ecf630a41e19352-Abstract-Conference.html) (Required) |                                                                            |         |          |
|            | [StreamRL: Scalable, Heterogeneous, and Elastic RL for LLMs with Disaggregated Stream Generation](https://arxiv.org/abs/2504.15930) (Required)                                                                            |                                                                            |         |          |
|            | [Dynamic Compute and Network Orchestration for Disaggregated RL](https://dl.acm.org/doi/10.1145/3789240.3829124)                                                                                                          |                                                                            |         |          |
|            | [ProRL Agent: Rollout-as-a-Service for RL Training of Multi-Turn LLM Agents](https://arxiv.org/abs/2603.18815)                                                                                                            |                                                                            |         |          |
| **Nov 2**  | **Agents as a New Workload**                                                                                                                                                                                              |                                                                            |         |          |
|            | [The Cost of Dynamic Reasoning: Demystifying AI Agents and Test-Time Scaling from an AI Infrastructure Perspective](https://arxiv.org/abs/2506.04301) (Required)                                                          |                                                                            |         |          |
|            | [Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657) (Required)                                                                                                                                       |                                                                            |         |          |
|            | [Towards Understanding, Analyzing, and Optimizing Agentic AI Execution: A CPU-Centric Perspective](https://arxiv.org/abs/2511.00739)                                                                                      |                                                                            |         |          |
|            | [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)                                                                                                           |                                                                            |         |          |
| **Nov 9**  | **Agent Serving and Sandbox**                                                                                                                                                                                             |                                                                            |         |          |
|            | [Parrot: Efficient Serving of LLM-based Applications with Semantic Variable](https://www.usenix.org/conference/osdi24/presentation/lin-chaofan) (Required)                                                                |                                                                            |         |          |
|            | [FlashAgents: Accelerating Multi-Agent LLM Systems via Streaming Prefill Overlap](https://openreview.net/forum?id=m14PPUfgEc) (Required)                                                                                  |                                                                            |         |          |
|            | [Towards End-to-End Optimization of LLM-based Applications with Ayo](https://dl.acm.org/doi/10.1145/3676641.3716278)                                                                                                      |                                                                            |         |          |
|            | [Pie: A Programmable Serving System for Emerging LLM Applications](https://dl.acm.org/doi/10.1145/3731569.3764814)                                                                                                        |                                                                            |         |          |
| **Nov 16** | **Agent Applications in the Real World**                                                                                                                                                                                  |                                                                            |         |          |
|            | [Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://arxiv.org/abs/2601.11868) (Required)                                                                                    |                                                                            |         |          |
|            | [R&D-Agent-Quant: A Multi-Agent Framework for Data-Centric Factors and Model Joint Optimization](https://arxiv.org/abs/2505.15155) (Required)                                                                             |                                                                            |         |          |
|            | [Measuring Agents in Production](https://arxiv.org/abs/2512.04123)                                                                                                                                                        |                                                                            |         |          |
|            | [MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://arxiv.org/abs/2404.15155)                                                                                                               |                                                                            |         |          |
|            | _**Chapter 3: Infrastructures and Operations**_                                                                                                                                                                           |                                                                            |         |          |
| **Nov 23** | **Kernels and Networks**                                                                                                                                                                                                  |                                                                            |         |          |
|            | [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/abs/2205.14135) (Required)                                                                                                |                                                                            |         |          |
|            | [Alibaba HPN: A Data Center Network for Large Language Model Training](https://dl.acm.org/doi/10.1145/3651890.3672265) (Required)                                                                                         |                                                                            |         |          |
|            | [FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling](https://arxiv.org/abs/2603.05451)                                                                                           |                                                                            |         |          |
|            | [Connecting 100K+ GPUs: Building the Communication Stack for Large-Scale LLM Training](https://dl.acm.org/doi/10.1145/3789240.3829152)                                                                                    |                                                                            |         |          |
| **Nov 30** | **Reliability and Simulation**                                                                                                                                                                                            |                                                                            |         |          |
|            | [Robust LLM Training Infrastructure at ByteDance](https://arxiv.org/abs/2509.16293) (Required)                                                                                                                            |                                                                            |         |          |
|            | [Frontier: Towards Comprehensive and Accurate LLM Inference Simulation](https://arxiv.org/abs/2605.21312) (Required)                                                                                                      |                                                                            |         |          |
|            | [Gemini: Fast Failure Recovery in Distributed Training with In-Memory Checkpoints](https://dl.acm.org/doi/10.1145/3600006.3613145)                                                                                        |                                                                            |         |          |
|            | [Mycroft: Tracing Dependencies in Collective Communication Towards Reliable LLM Training](https://dl.acm.org/doi/10.1145/3731569.3764848)                                                                                 |                                                                            |         |          |
|            | [SimAI: Unifying Architecture Design and Performance Tuning for Large-Scale Large Language Model Training with Scalability and Precision](https://www.usenix.org/conference/nsdi25/presentation/wang-xizheng-simai)       |                                                                            |         |          |


https://github.com/bojieli/ai-infra-book
https://bojieli.github.io/ai-infra-book/
深入理解 AI Infra：量化分析与系统设计
《深入理解 AI Infra》是 GitHub 上获得 45k+ Star 的[《深入理解 AI Agent：设计原理与工程实践》](https://github.com/bojieli/ai-agent-book)的姊妹篇。
写完《深入理解 AI Agent》后，在与读者交流的过程中，我越来越感到：要开发好基于模型的应用，还需要理解它赖以运行的基础设施。大多数软件工程师不必亲自开发操作系统、编译器和芯片，却仍要学习操作系统、编译原理和计算机体系结构，因为申请内存、读取文件、调用函数，背后都有资源与时间代价。基于模型开发应用也是如此。延迟相差几倍，产品体验就可能完全不同；成本相差一个数量级，能够支撑的商业模式也随之改变。
更深层的变化是**编程抽象的上移：从操作系统到模型上下文**。传统的操作系统、编译器和硬件要为事先未知的各种程序提供通用能力，系统优化总要在可编程性与性能之间取舍。如今 LLM 成了最重要的应用，从算子执行到分布式调度，都可以针对特定的模型和加速器架构优化；模型设计也开始反过来适应硬件。从某种意义上说，**模型成了 LLM 时代的操作系统，AI Infra 成了 LLM 时代的计算机体系结构**。
贯穿全书的方法是**从约束推导设计**：先明确任务与质量要求，列出计算、存储、通信和依赖关系，对照硬件的容量、带宽和算力做数量级估算。这类估算人容易出错，AI 也一样：只算权重读取而忘了 KV 缓存，按峰值算力推算速度而不查带宽能否供给，把工作平分给多张卡却遗漏卡间通信，漏掉任何一项，结论都可能偏离几倍甚至几个数量级。从 FPGA 加速 Bing 搜索排序、昇腾 AKG 算子生成到 UB 万卡互联，反复出现的是同一条线索：**数据搬移**。本书因此反复追问五个问题：**搬什么、搬多少、搬几次、经过哪里、谁必须等它。**

|章|主题|主要问题|
|---|---|---|
|1|[初识 AI Infra](https://bojieli.github.io/ai-infra-book/manuscripts/01-%E5%88%9D%E8%AF%86%20AI%20Infra.html)|一次生成需要多少显存、计算和数据读写？|
|2|[模型架构](https://bojieli.github.io/ai-infra-book/manuscripts/02-%E6%A8%A1%E5%9E%8B%E6%9E%B6%E6%9E%84.html)|注意力、历史状态与专家结构如何改变系统需求？|
|3|[推理与训练负载](https://bojieli.github.io/ai-infra-book/manuscripts/03-%E6%8E%A8%E7%90%86%E4%B8%8E%E8%AE%AD%E7%BB%83%E8%B4%9F%E8%BD%BD.html)|任务阶段、到达模式和状态寿命如何影响资源需求？|
|4|[加速器架构](https://bojieli.github.io/ai-infra-book/manuscripts/04-%E5%8A%A0%E9%80%9F%E5%99%A8%E6%9E%B6%E6%9E%84.html)|如何在计算、存储、带宽、功耗与成本之间取舍？|
|5|[算子与运行时](https://bojieli.github.io/ai-infra-book/manuscripts/05-%E7%AE%97%E5%AD%90%E4%B8%8E%E8%BF%90%E8%A1%8C%E6%97%B6.html)|融合、复用、并发和调度如何减少执行开销？|
|6|[超节点](https://bojieli.github.io/ai-infra-book/manuscripts/06-%E8%B6%85%E8%8A%82%E7%82%B9.html)|多设备协作如何平衡容量、吞吐和同步代价？|
|7|[数据中心网络](https://bojieli.github.io/ai-infra-book/manuscripts/07-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E7%BD%91%E7%BB%9C.html)|网络带宽、通信方式和拥塞怎样影响计算效率？|
|8|[推理优化](https://bojieli.github.io/ai-infra-book/manuscripts/08-%E6%8E%A8%E7%90%86%E4%BC%98%E5%8C%96.html)|批处理、KV 管理、卸载与推测解码何时有效？|
|9|[分布式推理](https://bojieli.github.io/ai-infra-book/manuscripts/09-%E5%88%86%E5%B8%83%E5%BC%8F%E6%8E%A8%E7%90%86.html)|如何放置计算和状态，并处理扩缩容与恢复？|
|10|[训练系统](https://bojieli.github.io/ai-infra-book/manuscripts/10-%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F.html)|怎样安排显存、通信和重算，让训练更高效？|
|11|[资源调度与运行环境](https://bojieli.github.io/ai-infra-book/manuscripts/11-%E8%B5%84%E6%BA%90%E8%B0%83%E5%BA%A6%E4%B8%8E%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83.html)|模型服务和工具环境如何共享资源，减少等待？|
|12|[端边云协同](https://bojieli.github.io/ai-infra-book/manuscripts/12-%E7%AB%AF%E8%BE%B9%E4%BA%91%E5%8D%8F%E5%90%8C.html)|任务放在本地、边缘还是云端，怎样兼顾效果、延迟和成本？|


### Other Resources
https://faichou.com/posts/llm-cache/
LLM 缓存机制：从计费到原理



## Intro
### Deploy LLM on Different Levels - Desktop and Production
#vLLM #ollama #LLM #software_deployment

> To explain these two deployments, take the comparison of ollama and vLLM for example (generated by Gemini 2.5 Flash):

While both Ollama and vLLM are tools for LLM inference (running a model), their **design goals** and **primary use cases** are fundamentally different:

| **Aspect**             | **Ollama**                                                                                                    | **vLLM (Very Large Language Model)**                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Primary Goal**       | **Simplicity and Accessibility.** To make it easy to run LLMs locally for prototyping and personal use.       | **High-Throughput and Efficiency.** To maximize LLM serving performance in production.                       |
| **Target Environment** | Local machines, developer laptops, single-user setups.                                                        | Production servers, cloud deployments, multi-GPU clusters.                                                   |
| **Performance**        | Good for single-user, low-concurrency requests. Prioritizes a simple user experience over raw speed at scale. | **Significantly Higher Throughput and Lower Latency** under heavy, concurrent load.                          |
| **Key Optimization**   | **Quantization** and easy packaging for resource-constrained hardware.                                        | **PagedAttention** (efficient memory management) and **Continuous Batching** (efficient request scheduling). |
| **Hardware Focus**     | Consumer-grade hardware (CPU and GPU) and Apple Silicon.                                                      | High-end, dedicated GPUs (like NVIDIA A100s/H100s).                                                          |
| **User Experience**    | Simple CLI and API, minimal setup. **Beginner-friendly.**                                                     | More complex setup, focused on advanced configuration for production needs. **Engineer-focused.**            |
| **Model Scope**        | Curated model library that are pre-packaged.                                                                  | Works with a wide range of models from the Hugging Face ecosystem.                                           |
#### LLM Desktop Deployment
↗ [ollama](LLM%20Desktop%20Deployment/ollama.md)
↗ [GPT4All](LLM%20Desktop%20Deployment/GPT4All.md)
↗ [LM Studio](LLM%20Desktop%20Deployment/LM%20Studio.md)
↗ [Jan.AI](LLM%20Desktop%20Deployment/Jan.AI.md)
#### LLM High-Performance Deployment & Inference Services Providers
##### LLM High-Performance Inference /Serving Engines
> 🔗 Reference: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)

- [SGLang](https://github.com/sgl-project/sglang) - SGLang is a fast serving framework for large language models and vision language models.
- [vLLM](https://github.com/vllm-project/vllm) - A high-throughput and memory-efficient inference and serving engine for LLMs.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - a toolkit for deploying and serving Large Language Models (LLMs).
- [exllama](https://github.com/turboderp/exllama) - A more memory-efficient rewrite of the HF transformers implementation of Llama for use with quantized weights.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - LLM inference in C/C++.
- [ollama](https://github.com/ollama/ollama) - Get up and running with Llama 3, Mistral, Gemma, and other large language models.
- [Langfuse](https://github.com/langfuse/langfuse) - Open Source LLM Engineering Platform Tracing, Evaluations, Prompt Management, Evaluations and Playground.
- [FastChat](https://github.com/lm-sys/FastChat) - A distributed multi-model LLM serving system with web UI and OpenAI-compatible RESTful APIs.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Blazingly fast LLM inference.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - A python package for Txt-to-SQL with self hosting functionalities and RESTful APIs compatible with proprietary as well as open source LLM.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - Run LLMs and batch jobs on any cloud. Get maximum cost savings, highest GPU availability, and managed execution -- all with a simple interface.
- [Haystack](https://haystack.deepset.ai/) - an open-source NLP framework that allows you to use LLMs and transformer-based models from Hugging Face, OpenAI and Cohere to interact with your own data.
- [Sidekick](https://github.com/ai-sidekick/sidekick) - Data integration platform for LLMs.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - An interactive chat project that leverages Ollama/OpenAI/MistralAI LLMs for rapid understanding and navigation of GitHub code repository or compressed file resources.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - Interact with LLM using Ollama models(or openAI, mistralAI)via pure shell scripts on your Linux(or MacOS) system, enhancing intelligent system management without any dependencies.
- [LangChain](https://github.com/hwchase17/langchain) - Building applications with LLMs through composability
- [Floom](https://github.com/FloomAI/Floom) AI gateway and marketplace for developers, enables streamlined integration of AI features into products
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - Comprehensive set of tools for working with local LLMs for various tasks.
- [LiteChain](https://github.com/rogeriochaves/litechain) - Lightweight alternative to LangChain for composing LLMs
- [magentic](https://github.com/jackmpcollins/magentic) - Seamlessly integrate LLMs as Python functions
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - Use ChatGPT On Wechat via wechaty
- [promptfoo](https://github.com/typpo/promptfoo) - Test your prompts. Evaluate and compare LLM outputs, catch regressions, and improve prompt quality.
- [Agenta](https://github.com/agenta-ai/agenta) - Easily build, version, evaluate and deploy your LLM-powered apps.
- [Serge](https://github.com/serge-chat/serge) - a chat interface crafted with llama.cpp for running Alpaca models. No API keys, entirely self-hosted!
- [Langroid](https://github.com/langroid/langroid) - Harness LLMs with Multi-Agent Programming
- [Embedchain](https://github.com/embedchain/embedchain) - Framework to create ChatGPT like bots over your dataset.
- [Opik](https://github.com/comet-ml/opik) - Confidently evaluate, test, and ship LLM applications with a suite of observability tools to calibrate language model outputs across your dev and production lifecycle.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - simplifies the evaluation of LLMs by providing a unified microservice to access and test multiple AI models.
- [OpenLLM](https://github.com/bentoml/OpenLLM) - Fine-tune, serve, deploy, and monitor any open-source LLMs in production. Used in production at [BentoML](https://bentoml.com/) for LLMs-based applications.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) - MII makes low-latency and high-throughput inference, similar to vLLM powered by DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Inference for text-embeddings in Rust, HFOIL Licence.
- [Infinity](https://github.com/michaelfeil/infinity) - Inference for text-embeddings in Python
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Nvidia Framework for LLM Inference
- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIA Framework for LLM Inference(Transitioned to TensorRT-LLM)
- [Flash-Attention](https://github.com/Dao-AILab/flash-attention) - A method designed to enhance the efficiency of Transformer models
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - Formerly langchain-ChatGLM, local knowledge based LLM (like ChatGLM) QA app with langchain.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - Build your own conversational search engine using less than 500 lines of code by [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - Create, deploy and operate Actions using Python anywhere to enhance your AI agents and assistants. Batteries included with an extensive set of libraries, helpers and logging.
- [LMDeploy](https://github.com/InternLM/lmdeploy) - A high-throughput and low-latency inference and serving framework for LLMs and VLs
- [Tune Studio](https://studio.tune.app/) - Playground for devs to finetune & deploy LLMs
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - Locally running websearch using LLM chains
- [AI Gateway](https://github.com/Portkey-AI/gateway) — Gateway streamlines requests to 100+ open & closed source models with a unified API. It is also production-ready with support for caching, fallbacks, retries, timeouts, loadbalancing, and can be edge-deployed for minimum latency.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - Simple API for deploying any RAG or LLM that you want adding plugins.
- [Wllama](https://github.com/ngxson/wllama) - WebAssembly binding for llama.cpp - Enabling in-browser LLM inference
- [GPUStack](https://github.com/gpustack/gpustack) - An open-source GPU cluster manager for running LLMs
- [MNN-LLM](https://github.com/alibaba/MNN) -- A Device-Inference framework, including LLM Inference on device(Mobile Phone/PC/IOT)
- [CAMEL](https://www.camel-ai.org/) - First LLM Multi-agent framework.
##### LLM Inference Services Providers & API 🤔
↗ [AI API Call & AI Gateway](../../../../../Software%20Engineering/🤖%20AI4SE/🦾%20AI%20Powered%20Dev%20&%20Vibe%20Coding/AI%20API%20Call%20&%20AI%20Gateway.md)



## LLM Inference & KV Caching
> [!links]
> ↗ [vLLM](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/vLLM.md)
> ↗ [SGLang](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/SGLang.md)
>
> ↗ [Transformers](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)
> ↗ [Attention & Efficient Operator Implementation](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Attention%20&%20Efficient%20Operator%20Implementation.md)


### Pre-Filling


### Decoding



## Ref
[KV Caching in LLMs, Clearly Explained]: https://x.com/_avichawla/status/2034902650534187503?s=20
![](../../../../../../Assets/Pics/Screenshot%202026-04-26%20at%2017.44.28.png)
