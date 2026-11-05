# Machine Learning Compilation (MLC) & Operator Dev

[TOC]



## Res
### Related Topics
↗ [AI (LLM) Compilers & GPU Operators DSL](../../🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/🐌%20AI%20(LLM)%20Compilers%20&%20GPU%20Operators%20DSL/AI%20(LLM)%20Compilers%20&%20GPU%20Operators%20DSL.md) 🤔

↗ [Software (Program) Techniques & Binary Engineering](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
↗ [Program Analysis Basics](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)

↗ [Compilation & Program Loading Tools](../../🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
↗ [LLVM](../../🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/🦅%20LLVM/LLVM.md)
↗ [MLIR (Multi-Level Intermediate Representation)](../../🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/🦅%20LLVM/MLIR%20(Multi-Level%20Intermediate%20Representation)/MLIR%20(Multi-Level%20Intermediate%20Representation).md)

↗ [AI (Data) Infrastructure & Machine Learning Systems](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems/AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems.md) ⭐
- ↗ [ML Programming & Frameworks](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/ML%20Programming%20&%20Frameworks.md)
- ↗ [Python Based ML Libraries](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/⭐️%20Python%20Based%20ML%20Libraries/Python%20Based%20ML%20Libraries.md)
↗ [LLM Infrastructure (Deployment & Inference)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Infrastructure%20(Deployment%20&%20Inference)/LLM%20Infrastructure%20(Deployment%20&%20Inference).md)
- ↗ [Nvidia Megatron](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Infrastructure%20(Deployment%20&%20Inference)/Parallel%20&%20Distributed%20Training%20&%20Inference/Nvidia%20Megatron.md)
- ↗ [Microsoft DeepSpeed](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Infrastructure%20(Deployment%20&%20Inference)/Parallel%20&%20Distributed%20Training%20&%20Inference/Microsoft%20DeepSpeed.md)
↗ [Attention & Efficient Operator Implementation](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformer%20Components%20Design/Attention%20&%20Efficient%20Operator%20Implementation.md)

↗ [GPU (Graphics Processing Unit)](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
↗ [Compute Unified Device Architecture & CUDA Programming](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md) ⭐

↗ [DSL(Domain Specific Languages)](../../DSL%20(Domain%20Specific%20Languages)/DSL(Domain%20Specific%20Languages).md)

↗ [High Performance Computing](../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/High%20Performance%20Computing.md)
↗ [Parallel Computing & Programming](../../../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md)
↗ [Parallel Programming Libraries & SDK](../../🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/👯‍♀️%20Parallel%20Programming%20Libraries%20&%20SDK/Parallel%20Programming%20Libraries%20&%20SDK.md)

↗ [Nvidia PTX (Parallel Thread Execution)](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/RISC%20(Reduced%20Instruction%20Set%20Computer)/Nvidia%20PTX%20(Parallel%20Thread%20Execution)/Nvidia%20PTX%20(Parallel%20Thread%20Execution).md)


### Learning Resources
[Machine Learning Compilation](https://csdiy.wiki/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%B3%BB%E7%BB%9F/MLC/)
Machine learning compilation (Tianqi Chen)
- 这门课是机器学习编译领域的顶尖学者陈天奇在2022年暑期开设的一门在线课程。其实机器学习编译无论在工业界还是学术界仍然是一个非常前沿且快速更迭的领域，国内外此前还没有为这个方向专门开设的相关课程。因此如果对机器学习编译感兴趣想有个全貌性的感知的话，可以学习一下这门课。
- 本课程主要以 [Apache TVM](https://tvm.apache.org/) 这一主流的机器学习编译框架为例（陈天奇是这个框架的创始人之一），聚焦于如何将开发模式下（如 Tensorflow, Pytorch, Jax）的各类机器学习模型，通过一套普适的抽象和优化算法，变换为拥有更高性能并且适配各类底层硬件的部署模式。课程讲授的知识点都是相对 High-Level 的宏观概念，同时每节课都会有一个配套的 Jupyter Notebook 来通过具体的代码讲解知识点，因此如果从事 TVM 相关的编程开发的话，这门课有丰富且规范的代码示例以供参考。
- 所有的课程资源全部开源并且有中文和英文两个版本，B站和油管分别有中文和英文的课程录影。
- 课程网站：[https://mlc.ai/summer22-zh/](https://mlc.ai/summer22-zh/)
- 课程视频：[Bilibili](https://www.bilibili.com/video/BV15v4y1g7EU?spm_id_from=333.337.search-card.all.click&vd_source=a4d76d1247665a7e7bec15d15fd12349)
- 课程笔记：[https://mlc.ai/zh/index.html](https://mlc.ai/zh/index.html)
- 课程作业：[https://github.com/mlc-ai/notebooks/blob/main/assignment](https://github.com/mlc-ai/notebooks/blob/main/assignment)

| Date      | Plan                                                           | Resources                                                                                                                                                                                                                                                                                                    |
| --------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 06/17 Fri | Episode 1: **Overview of ML Compilation**                      | [slides](https://mlc.ai/summer22/slides/1-Introduction.pdf) \| [video](https://youtu.be/Oc_wVXdnrrM) \| [notes](https://mlc.ai/chapter_introduction/)                                                                                                                                                        |
| 06/24 Fri | Episode 2: **Tensor Program Abstraction**                      | [slides](https://mlc.ai/summer22/slides/2-TensorProgram.pdf) \| [ipynb](https://github.com/mlc-ai/notebooks/blob/main/2_tensor_program_abstraction.ipynb) \| [video](https://youtu.be/H0UrECDLHMc) \| [notes](https://mlc.ai/chapter_tensor_program/)                                                        |
| 07/01 Fri | Episode 3: **Tensor Program Abstraction Case Study: TensorIR** | [ipynb](https://github.com/mlc-ai/notebooks/blob/main/3_TensorIR_Tensor_Program_Abstraction_Case_Study_Action.ipynb) \| [video](https://youtu.be/NSOdtaSW1A4) \| [notes](https://mlc.ai/chapter_tensor_program/case_study.html) \| [exercise](https://mlc.ai/chapter_tensor_program/tensorir_exercises.html) |
| 07/08 Fri | Episode 4: **Build End to End Models**                         | [ipynb](https://github.com/mlc-ai/notebooks/blob/main/4_Build_End_to_End_Model.ipynb) \| [video](https://youtu.be/JfrbfwUwoV0) \| [notes](https://mlc.ai/chapter_end_to_end/index.html) \| [assignment](https://github.com/mlc-ai/notebooks/blob/main/assignment/assignment1.ipynb)                          |
| 07/15 Fri | Episode 5: **Automatic Program Optimization**                  | [ipynb](https://github.com/mlc-ai/notebooks/blob/main/5_Automatic_Program_Optimization.ipynb) \| [video](https://youtu.be/P0L-EFMswUg) \| [notes](https://mlc.ai/chapter_auto_program_optimization/index.html)                                                                                               |
| 07/22 Fri | **No class**                                                   |                                                                                                                                                                                                                                                                                                              |
| 07/29 Fri | Episode 6: **Integration with Machine Learning Frameworks**    | [ipynb](https://github.com/mlc-ai/notebooks/blob/main/6_Integration_with_Machine_Learning_Frameworks.ipynb) \| [video](https://youtu.be/EhD7LgTl_CQ) \| [notes](https://mlc.ai/chapter_integration/index.html)                                                                                               |
| 08/05 Fri | Episode 7: **GPU and Specialized Hardware: part1**             | [ipynb](https://github.com/mlc-ai/notebooks/blob/main/7_GPU_and_Specialized_Hardware.ipynb) \| [video](https://youtu.be/CSMcOzv5Bhw) \| [notes](https://mlc.ai/chapter_gpu_acceleration/part1.html)                                                                                                          |
| 08/12 Fri | Episode 8: **GPU and Specialized Hardware: part2**             | [ipynb](https://github.com/mlc-ai/notebooks/blob/main/8_GPU_and_Specialized_Hardware_part2.ipynb) \| [video](https://youtu.be/V1d4F3-AAfc) \| [notes](https://mlc.ai/chapter_gpu_acceleration/part2.html) \| [tutorial](https://github.com/mlc-ai/notebooks/blob/main/tutorial/tutorial_tensor_core.ipynb)   |
| 08/19 Fri | Episode 9: **Graph Optimizations**                             | [ipynb](https://github.com/mlc-ai/notebooks/blob/main/9_Computational_Graph_Optimization.ipynb) \| [video](https://youtu.be/dfL0EoI6T_4) \| [notes](https://mlc.ai/chapter_graph_optimization/index.html)                                                                                                    |
| 08/26 Fri | **No class**                                                   |                                                                                                                                                                                                                                                                                                              |
| 09/02 Fri | Episode 10: **Summary and Future Works**                       | [slides](https://mlc.ai/summer22/slides/10-Summary-Future.pdf) \| [video](https://youtu.be/2R2TOSwPJvc)                                                                                                                                                                                                      |


https://github.com/mlc-ai/modern-gpu-programming-for-mlsys
https://mlc.ai/modern-gpu-programming-for-mlsys/
Modern GPU Programming For MLSys
Part I, Understanding the GPU
- [GPU Execution Model](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_background/index.html)
- [What Makes a Kernel Fast](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_performance/index.html)
- [Data Layout and Its Notation](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_data_layout/index.html)
- [The Evolution of Tensor Core Data Layouts](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_layout_generations/index.html)
- [Async Data Movement: TMA](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_tma/index.html)
- [Blackwell Tensor Core: `tcgen05.mma`](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_tensor_cores/index.html)
- [Tensor Memory (TMEM)](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_tmem/index.html)
- [Async Coordination: mbarrier](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_async_barriers/index.html)
- [Advanced Scheduling: Cluster Launch Control](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_clc/index.html)
Part II, TIRx Overview
- [Introduction to TIRx](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_intro_tirx/index.html)
- [TIRx Layout API](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_tirx_layout_api/index.html)
Part III, GEMM: Tiled to SOTA
- [Building a Tiled GEMM](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_basics/index.html)
    - [GEMM](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_basics/index.html#gemm)
    - [Optimization Path](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_basics/index.html#optimization-path)
    - [Step 1: Sequential Single-Tile GEMM](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_basics/index.html#step-1-sequential-single-tile-gemm)
    - [Step 2: K-Loop Accumulation](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_basics/index.html#step-2-k-loop-accumulation)
    - [Step 3: Spatial Tiling (Multi-CTA)](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_basics/index.html#step-3-spatial-tiling-multi-cta)
    - [Exercises](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_basics/index.html#exercises)
- [Pipelining GEMM with TMA](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_async/index.html)
    - [Step 4: TMA Async Load](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_async/index.html#step-4-tma-async-load)
    - [Step 5: Software Pipeline (PIPE_DEPTH=2)](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_async/index.html#step-5-software-pipeline-pipe-depth-2)
    - [Step 6: Persistent Kernel + Tile Scheduler](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_async/index.html#step-6-persistent-kernel-tile-scheduler)
    - [Exercises](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_async/index.html#exercises)
- [Scaling GEMM with Warp Specialization and Clusters](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_advanced/index.html)
    - [Step 7: Warp Specialization](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_advanced/index.html#step-7-warp-specialization)
    - [Step 8: Two-CTA Cluster](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_advanced/index.html#step-8-two-cta-cluster)
    - [Step 9: Multi-Consumer Warp Specialization](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_advanced/index.html#step-9-multi-consumer-warp-specialization)
    - [End-to-End Results](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_advanced/index.html#end-to-end-results)
    - [Exercises](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_gemm_advanced/index.html#exercises)
Part IV, Flash Attention 4
- [Flash Attention 4](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html)
    - [Algorithm Structure](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#algorithm-structure)
    - [Tile Primitive Data Flow](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#tile-primitive-data-flow)
    - [Warp Roles and Scope](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#warp-roles-and-scope)
    - [Conventions for Reading the Code](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#conventions-for-reading-the-code)
    - [QKᵀ MMA and PV MMA](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#qk-mma-and-pv-mma)
    - [TMEM Layout and Reuse](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#tmem-layout-and-reuse)
    - [Key Barrier Protocols](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#key-barrier-protocols)
    - [Pipeline Timeline](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#pipeline-timeline)
    - [Rescaling and Writeback](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#rescaling-and-writeback)
    - [Causal Masking](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#causal-masking)
    - [GQA Support](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#gqa-support)
    - [Tile Scheduling](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#tile-scheduling)
    - [Compile and Verify](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#compile-and-verify)
    - [Exercises](https://mlc.ai/modern-gpu-programming-for-mlsys/chapter_flash_attention/index.html#exercises)
Appendices
- [Overview](https://mlc.ai/modern-gpu-programming-for-mlsys/appendix/index.html)
- [TIRx Language Reference](https://mlc.ai/modern-gpu-programming-for-mlsys/tirx_guide/language_reference/index.html)
- [Measuring and Analyzing GPU Kernel Performance](https://mlc.ai/modern-gpu-programming-for-mlsys/appendix/benchmarking_gpu_kernels.html)
- [Compiler Internals](https://mlc.ai/modern-gpu-programming-for-mlsys/tirx_guide/arch/index.html)
- [Debugging Warp-Specialized Kernels](https://mlc.ai/modern-gpu-programming-for-mlsys/appendix/debugging_warp_specialized.html)
#### Paper & Projects
https://arxiv.org/abs/2502.10517
KernelBench: Can LLMs Write Efficient GPU Kernels?
[Anne Ouyang](https://arxiv.org/search/cs?searchtype=author&query=Ouyang,+A), [Simon Guo](https://arxiv.org/search/cs?searchtype=author&query=Guo,+S), [Simran Arora](https://arxiv.org/search/cs?searchtype=author&query=Arora,+S), [Alex L. Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+A+L), [William Hu](https://arxiv.org/search/cs?searchtype=author&query=Hu,+W), [Christopher Ré](https://arxiv.org/search/cs?searchtype=author&query=R%C3%A9,+C), [Azalia Mirhoseini](https://arxiv.org/search/cs?searchtype=author&query=Mirhoseini,+A)

https://arxiv.org/html/2608.12629v1
CAKE: Compiler–Agent Co-Design for Frontier Kernel Evolution
Zihao Ye

https://arxiv.org/html/2608.00894v3
Rethinking Agentic Kernel Generation for Emerging Accelerators


### Other Resources
https://act-compiler.github.io/
ACT Ecosystem
- We recommend starting with our [ASPLOS 2026 tutorial](https://github.com/act-compiler/act/tree/asplos26/tutorials/asplos26). The tutorial provides a step-by-step walkthrough of the ACT ecosystem, requiring no prior experience with AI accelerators or ML compilers, and provides hands-on exercises to get familiar with the TAIDL Python DSL and automated tool generation. We encourage you to follow along and experiment with the code.
https://github.com/act-compiler/act
ACT: Accelerator Compiler Toolkit
Recent years have seen a proliferation of specialized ML accelerators -- proposed in both academia (e.g., Gemmini, FEATHER) and industry (e.g., Google TPU, Intel AMX) -- that depart significantly from traditional CPU/GPU architectures. However, research on compiler and systems support for these accelerators remains sparse, largely due to the lack of mature open-source compiler infrastructures capable of targeting them from popular ML frameworks like PyTorch, and JAX. Building such support involves considerable manual effort, slowing innovation and creating a gap between hardware and software research communities.

To bridge this gap, we present **ACT (Accelerator Compiler Toolkit) Ecosystem**, an ecosystem that automatically generates complete compiler backends and essential software tooling from high-level ISA specifications of tensor accelerators.

The ACT Ecosystem consists of:
- **TAIDL (Tensor Accelerator ISA Definition Language)**: A Python-based DSL for specifying tensor accelerator ISAs. TAIDL leverages tensor IRs like XLA-HLO to compactly and precisely model execution semantics of tensor accelerator ISAs.
- **TAIDL-TO (Test Oracle) Generator**: Automatically generates scalable functional simulators just from TAIDL specifications, enabling correctness testing of the software stack. TAIDL-TOs are orders of magnitude faster than existing simulators.
- **ACT-Backend Generator**: Automatically generates sound and complete compiler backends just from a TAIDL specification. ACT backends match or outperform state-of-the-art expert-written libraries, while maintaining low compile times (<1 sec).
- **XLA Integration**: Enables end-to-end compilation from popular ML frameworks like JAX and PyTorch.



## Intro
### Traditional ML /DL Compilation
> [!links]
> ↗ [AI (Data) Infrastructure & Machine Learning Systems](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems/AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems.md)


### LLM Compilation
> [!links]
> ↗ [LLM Infrastructure (Deployment & Inference)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Infrastructure%20(Deployment%20&%20Inference)/LLM%20Infrastructure%20(Deployment%20&%20Inference).md) 🤔
> ![](../../../../../../../Assets/Pics/LLM推理服务全流程信息图.png)
> 
> ↗ [Transformers](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)
> ↗ [Attention & Efficient Operator Implementation](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformer%20Components%20Design/Attention%20&%20Efficient%20Operator%20Implementation.md)

> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac25911-13a4-83ec-a4d5-c5ec05ce7e64

四十六、如果你的目标是学 GPU compiler，我建议按这个顺序学

不要一上来钻 LLVM。
最好的顺序其实是：
1. **先理解 LLM workload**  
    `prefill / decode / GEMM / attention / KV cache / batching`
2. **GPU architecture**  
    `SM / warp / block / register / shared memory / HBM / Tensor Core`
3. **CUDA programming**  
    自己写 `vector add → reduction → softmax → tiled GEMM`
4. **性能模型**  
    `roofline / arithmetic intensity / occupancy / memory coalescing / latency hiding`
5. **高性能 kernels**  
    `CUTLASS / FlashAttention / Triton`
6. **Compiler**  
    `graph capture → IR → lowering → fusion → scheduling → codegen`
7. **PyTorch compiler**  
    `Dynamo → AOTAutograd → Inductor → Triton`
8. **LLM serving**  
    `vLLM scheduler / PagedAttention / KV management / CUDA Graph`
9. **distributed inference**  
    `TP / EP / PP / NCCL / NVLink`
10. **最后把整个 stack 串起来 profile**  
    `Nsight Systems / Nsight Compute / torch profiler`
这样学，你看到任何一个项目，都能立刻判断它位于哪一层。

最后给你一个特别重要的判断框架
以后看任何 GPU / LLM optimization paper 或项目，第一反应都问这 6 个问题：
1. 它优化的是 serving、compiler、kernel 还是 hardware？
2. 它优化 prefill 还是 decode？
3. workload 是 compute-bound 还是 memory-bound？(communication-bound? launch-bound?)
4. bottleneck 在 HBM、SM/Tensor Core 还是 inter-GPU communication？
5. 它减少的是 FLOPs、memory traffic、kernel launch，
   还是 synchronization？
6. 优化来自：
   batching？
   fusion？
   layout？
   quantization？
   algorithm？
   scheduling？
   hardware-specific mapping？
#### Map: LLM Inference /Serving & AI Compilation
> [!links]
> ↗ [LLM Infrastructure (Deployment & Inference)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Infrastructure%20(Deployment%20&%20Inference)/LLM%20Infrastructure%20(Deployment%20&%20Inference).md)

> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac25911-13a4-83ec-a4d5-c5ec05ce7e64

```
                  API requests
                       │
                       ▼
              Serving runtime
           vLLM / TensorRT-LLM
                       │
              batching / KV cache
              request scheduling
                       │
                       ▼
              model computation
                       │
                       ▼
              tensor compiler
        Inductor / XLA / TensorRT
                       │
                       ▼
                  GPU kernels
    FlashAttention / GEMM / RMSNorm / MoE
                       │
                       ▼
                 CUDA / GPU
                       │
                       ▼
                  H100/B200...


所以：五个层次：
Level 1
Serving / Scheduling
    “算谁？”

Level 2
Graph / Tensor Compiler
    “算哪些 kernel？”

Level 3
Kernel Compiler / Kernel Library
    “这个 kernel 怎么算？”

Level 4
CUDA Runtime + Distributed Runtime
    “这些工作怎么提交、同步和通信？”

Level 5
GPU Architecture
    “硬件实际上怎么执行？”


再加一条横向资源轴：
                  ┌──────── compute ────────┐
                  │                         │
serving → compiler → kernel → CUDA → GPU
   │             │      │              │
   └──────────── memory hierarchy ─────┘
                        +
                multi-GPU network


---------------------------------------------

                         ┌───────────────────────────────┐
                         │           User/API            │
                         │ prompt / messages / sampling  │
                         └───────────────┬───────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  1. API / Frontend                                              │
│                                                                 │
│ HTTP / gRPC / OpenAI-compatible API                             │
│ authentication / rate limit / streaming / request parsing       │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│  2. Tokenization + Request Construction                         │
│                                                                 │
│ text → token IDs                                                │
│ sampling params / max_tokens / stop conditions                  │
│ request metadata                                                │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│  3. LLM Serving Engine                                          │
│                                                                 │
│ vLLM / TensorRT-LLM / SGLang / etc.                             │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Scheduler                                                   │ │
│ │ waiting queue → running set                                 │ │
│ │ continuous batching / chunked prefill / priorities          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ KV-cache manager                                            │ │
│ │ blocks/pages / allocation / eviction / prefix caching       │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Model runner                                                │ │
│ │ build tensors / positions / page tables / metadata          │ │
│ │ invoke model                                                │ │
│ └─────────────────────────────────────────────────────────────┘ │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                one "engine iteration"
                               │
              ┌────────────────┴─────────────────┐
              │                                  │
              ▼                                  ▼
       PREFILL phase                         DECODE phase
   many prompt tokens/request             ~1 token/request
   GEMM-heavy                             memory/KV-heavy
              │                                  │
              └────────────────┬─────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│  4. Transformer computation graph                               │
│                                                                 │
│ Embedding                                                       │
│   ↓                                                             │
│ [RMSNorm                                                        │
│   ↓                                                             │
│ QKV projection ── GEMM                                          │
│   ↓                                                             │
│ RoPE                                                            │
│   ↓                                                             │
│ Attention ───────── FlashAttention / PagedAttention             │
│   ↓                                                             │
│ Output projection ─ GEMM                                        │
│   ↓                                                             │
│ Residual                                                        │
│   ↓                                                             │
│ RMSNorm                                                         │
│   ↓                                                             │
│ MLP: GEMM → activation → GEMM                                   │
│      or MoE routing → experts → combine                         │
│ ] × N layers                                                    │
│   ↓                                                             │
│ LM head GEMM                                                    │
│   ↓                                                             │
│ logits                                                          │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼

              ┌───────────────────────────────────┐
              │ 5. Operator / Graph implementation│
              │                                   │
              │ THREE paths coexist:              │
              └───────────────────────────────────┘
                    │          │           │
       ┌────────────┘          │           └────────────┐
       ▼                       ▼                        ▼

  Hand-written /            Tensor compiler        Vendor libraries
  specialized kernel
                                                    cuBLAS
  FlashAttention            TorchInductor           cuBLASLt
  FlashInfer                XLA                     cuDNN
  custom CUDA               TensorRT                NCCL
  CUTLASS                    TensorRT-LLM plugins
  Triton kernel
       │                       │                        │
       └──────────────┬────────┴───────────────┬────────┘
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│  6. Kernel code generation / lowering                           │
│                                                                 │
│ e.g. Triton:                                                    │
│                                                                 │
│ tensor/loop IR                                                  │
│       ↓                                                         │
│ Triton IR                                                       │
│       ↓                                                         │
│ GPU-aware IR                                                    │
│       ↓                                                         │
│ LLVM/NVVM                                                       │
│       ↓                                                         │
│ PTX                                                             │
│       ↓                                                         │
│ machine code / cubin                                            │
│                                                                 │
│ or CUDA C++ → NVCC → PTX/cubin                                  │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│  7. GPU execution runtime                                       │
│                                                                 │
│ CUDA Runtime API                                                │
│ cudaLaunchKernel / cudaMemcpyAsync / CUDA Graph                 │
│                    ↓                                            │
│ CUDA Driver API                                                 │
│ contexts / modules / streams / device memory                    │
│                    ↓                                            │
│ NVIDIA kernel driver                                            │
│                    ↓                                            │
│ GPU command queues                                              │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│  8. GPU hardware                                                │
│                                                                 │
│ H100 / B200                                                     │
│                                                                 │
│ HBM                                                             │
│  ↕                                                              │
│ L2                                                              │
│  ↕                                                              │
│ SM ────────────────────────────────────────────────             │
│ │ registers                                                     │
│ │ shared memory / L1                                            │
│ │ warp schedulers                                               │
│ │ CUDA cores                                                    │
│ │ Tensor Cores                                                  │
│ │ load/store units                                              │
│ │ TMA / async memory machinery                                  │
│ └────────────────────────────────────────────────               │
└─────────────────────────────────────────────────────────────────┘

                 multi-GPU 时还横插一层：

              GPU 0 ←→ NVLink/NVSwitch ←→ GPU 1
                 ↕                         ↕
                  └──── NCCL collectives ─┘
               AllReduce / AllGather /
               ReduceScatter / AllToAll
```

这里其实存在三个层次的“优化”
Layer 1：数学 / algorithm optimization
例如：
```
普通 attention
↓
FlashAttention
```
改变的是**计算组织算法**。

Layer 2：Tensor compiler optimization
例如：
```
MatMul
+
Bias
+
Activation
```
变成：
```
Fused op
```
决定：
```
fusion
layout
scheduling
memory
```

Layer 3：Kernel optimization
某个 fused operation 已经定了：
```
fused_attention
```

但还要决定：
```
tile size
warps
register usage
shared memory
pipeline stages
```

最后生成具体 kernel。
三层不是完全分开的，但这个模型很有用。
#### LLM Inference Workload ⭐
> [!links]
> ↗ [Transformers](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)
> 
> ↗ [Attention & Efficient Operator Implementation](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformer%20Components%20Design/Attention%20&%20Efficient%20Operator%20Implementation.md)
> ![Transformer多头注意力流程图](../../../../../../../../../Assets/Pics/Transformer多头注意力流程图.png)


> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac25911-13a4-83ec-a4d5-c5ec05ce7e64

```md
LLM inference workload
│
├── Phase
│   ├── Prefill
│   └── Decode
│
├── Dense compute
│   ├── GEMM
│   ├── Batched GEMM
│   └── Grouped GEMM
│
├── Attention
│   ├── Prefill attention
│   │     └── FlashAttention
│   │
│   └── Decode attention
│         └── Paged / KV attention
│
├── Memory / elementwise
│   ├── RMSNorm
│   ├── RoPE
│   ├── activation
│   ├── residual
│   └── layout transformation
│
├── Stateful memory
│   └── KV cache
│         ├── allocate
│         ├── read
│         ├── write
│         ├── page/block mapping
│         └── prefix reuse
│
├── Serving workload
│   ├── batching
│   ├── continuous batching
│   ├── chunked prefill
│   ├── scheduling
│   └── speculative decoding
│
├── Sparse / MoE
│   ├── routing
│   ├── top-k
│   ├── dispatch
│   ├── grouped GEMM
│   └── combine
│
├── Distributed
│   ├── AllReduce
│   ├── AllGather
│   ├── ReduceScatter
│   └── AllToAll
│
└── Output
    ├── logits
    ├── top-k / top-p
    └── sampling
```


47. 最重要的是形成这样一个因果链
不要孤立地记：
```
prefill
decode
KV cache
GEMM
```

要把它们串起来：
```
Autoregressive generation
        ↓
历史 token 不能重复算
        ↓
KV cache
        ↓
每次 decode 只新增一个 token
        ↓
GEMM 的 M 变小
        ↓
weight reuse 下降
        ↓
decode 更 memory-bound
        ↓
serving 系统需要 batching
        ↓
batching 增加 M
        ↓
提高 GEMM weight reuse
        ↓
GPU utilization 提升
```

另一条：
```
Attention 需要历史 KV
        ↓
context 越长
        ↓
每个 decode token 读取 KV 越多
        ↓
memory traffic 上升
        ↓
decode latency 上升
        ↓
GQA/MQA 减少 KV heads
        ↓
KV bandwidth + capacity 都下降
```

再一条：
```
Prefill 有大量 tokens
        ↓
large GEMM
        ↓
high arithmetic intensity
        ↓
Tensor Cores 容易吃满
        ↓
prefill 更 compute-bound
```

当你能自然推导出这三条链，而不是背结论时，LLM workload 这一层就基本建立起来了。

---

最后先记住一个最核心的表

| workload          | 主要特征                     | 常见瓶颈                          |
| ----------------- | ------------------------ | ----------------------------- |
| Prefill GEMM      | 大矩阵                      | Tensor Core / compute         |
| Decode GEMM       | skinny matrix            | HBM bandwidth                 |
| Prefill Attention | Q/K/V 都很长                | compute + memory IO           |
| Decode Attention  | 1 个 Q 扫历史 KV             | KV/HBM bandwidth              |
| RMSNorm           | reduction + elementwise  | memory bandwidth              |
| RoPE              | elementwise              | memory bandwidth              |
| Activation        | elementwise              | memory / launch               |
| KV cache          | 大量 persistent state      | capacity + bandwidth          |
| MoE               | irregular grouped GEMM   | load balance + communication  |
| Tensor Parallel   | collective communication | NVLink / network              |
| Sampling          | reduction/selection      | launch + memory               |
| Batching          | 改变 tensor shape          | latency ↔ throughput tradeoff |
#### Compilation Targets
↗ [GPU (Graphics Processing Unit)](../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)

Tensor accelerator
- ↗ [Google TPU (Tensor Processing Unit)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Full-Customized%20ASIC/Google%20TPU%20(Tensor%20Processing%20Unit)/Google%20TPU%20(Tensor%20Processing%20Unit).md)
- Gemmini
- PLENA

Processors with matrix accelerator
- Intel AMX
- SoC AI Enginers


### Performance Metrics & Cost Models
↗ [LLM Infrastructure (Deployment & Inference)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Infrastructure%20(Deployment%20&%20Inference)/LLM%20Infrastructure%20(Deployment%20&%20Inference).md)


### A Whole Line of AI Compilation 🤔



## Tensor Compilation & Transformer Computation Graph
> [!links]
> ↗ [Attention & Efficient Operator Implementation](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformer%20Components%20Design/Attention%20&%20Efficient%20Operator%20Implementation.md) ⭐
> 
> ↗ [PyTorch](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/⭐️%20Python%20Based%20ML%20Libraries/📌%20PyTorch/PyTorch.md)
> ↗ [Tensorflow](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20(Data)%20Infrastructure%20&%20Machine%20Learning%20Systems/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/Hybrid%20Languages%20&%20Cross%20Platforms/📌%20Tensorflow/Tensorflow.md)

> 🤖 GPT6.0 Astra
> https://chatgpt.com/share/6acf2ea8-81a0-83ec-95d5-71a281e2bbe1

我认为这是你目前最应该记住的一张图：

```
             LLM mathematical workload
        RMSNorm / Attention / MLP / MoE
                       │
                       ▼
              Tensor operators
      matmul / reduce / softmax / add...
                       │
                       ▼
             Computation Graph
                       │
                       ▼
┌──────────────────────────────────────────┐
│          Tensor / Graph Compiler         │
│                                          │
│ capture                                  │
│ decomposition                            │
│ canonicalization                         │
│ pattern recognition                      │
│ fusion                                   │
│ layout                                   │
│ shape specialization                     │
│ memory planning                          │
│ kernel selection                         │
│ scheduling                               │
└────────────────────┬─────────────────────┘
                     │
       ┌─────────────┼─────────────┐
       │             │             │
       ▼             ▼             ▼
 generate kernel   library       specialized
                   kernel          kernel

 Inductor→Triton   cuBLASLt       FlashAttention
                   cuDNN          FlashInfer
                                  custom CUDA
       │             │             │
       └─────────────┼─────────────┘
                     ▼
               Kernel Graph
                     │
                     ▼
┌──────────────────────────────────────────┐
│             Kernel Compiler              │
│                                          │
│ tiling                                   │
│ thread/warp/block mapping                │
│ memory mapping                           │
│ pipelining                               │
│ instruction selection                    │
│                                          │
│ Triton compiler / LLVM / NVVM            │
└────────────────────┬─────────────────────┘
                     │
                     ▼
                PTX / cubin
                     │
                     ▼
              CUDA Runtime
                     │
                     ▼
                   GPU
```

这张图里：
**上半部分**是你现在问的 `tensor compilation / computation graph`。
**中间**就是你说的 `GPU 算子/kernel`。
**下面**才逐渐进入 GPU compiler backend 和硬件。

---
以把这一层展开成：
```
              Model / PyTorch Program
                       │
                       ▼
              Computation Graph
                       │
                       ▼
              Graph Optimization
                       │
      ┌────────────────┼──────────────────┐
      │                │                  │
  decomposition      fusion         pattern matching
      │                │                  │
      └────────────────┼──────────────────┘
                       │
                       ▼
               Operator lowering
                       │
             ┌─────────┼─────────┐
             │         │         │
             ▼         ▼         ▼
          generate   library   custom/
           kernel     call     specialized
             │         │         │
             ▼         ▼         ▼
           Triton    cuBLAS   FlashAttention
           kernel    cuBLASLt custom CUDA
             │
             └─────────┼─────────┘
                       ▼
                 Kernel graph
                       │
                       ▼
                Memory planning
                       │
                       ▼
                 Code generation
                       │
                       ▼
              Executable module
```

这中间大概有一组核心工作：
1. **Graph capture**：把 Python/model 转成 graph。
2. **Shape/dtype propagation**：知道每个 tensor 长什么样。
3. **Decomposition / canonicalization**：把复杂 operator 拆成 compiler 更容易理解的 primitive operators。
4. **Fusion**：决定哪些 operator 合成一个 kernel。
5. **Pattern matching**：识别某些经典模式，例如 attention。
6. **Layout optimization**：决定 tensor 怎么排布，尽量避免 transpose/copy。
7. **Kernel selection / lowering**：这个 operator 到底调用 cuBLAS，还是生成 Triton，还是调用 FlashAttention。
8. **Autotuning**：多个实现里跑一下，看哪个更快。
9. **Memory planning**：中间 tensor 的显存怎么复用。
10. **Code generation**：真正生成 kernel / wrapper / executable。

这就是 tensor compiler 的主要世界。

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6acfa59a-9294-83ec-85ff-274de63347a9



## Kernel Engineering & Compiler Lowering
> [!links]
> ↗ [GPU (Graphics Processing Unit)](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
> ↗ [Nvidia Chips](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Nvidia%20Chips.md)
> ↗ [Compute Unified Device Architecture & CUDA Programming](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)
> ↗ [CUDA C++](Lowering/CUDA%20C++/CUDA%20C++.md)
> 
> ↗ [OpenAI Triton](Lowering/OpenAI%20Triton/OpenAI%20Triton.md)
> ![](../../../../../../../../../Assets/Pics/Pasted%20image%2020261011163729.png) <small>Basic architecture of a GPU.</small>

> 🤖 GPT6.0 Astra
> https://chatgpt.com/share/6ac25911-13a4-83ec-a4d5-c5ec05ce7e64

GPU compiler 经常做的是：
```
High-level semantic
         ↓
less abstract IR
         ↓
more GPU-specific IR
         ↓
machine-specific representation
```

概念化成：
```
Tensor graph

matmul
softmax
reshape
transpose

       ↓

Loop / tile IR

for M tile
  for N tile
    reduce over K

       ↓

GPU mapping

program/block
warp
thread
shared memory
register

       ↓

GPU instructions

loads
stores
mma
shuffle
barrier

       ↓

PTX

       ↓

SASS / machine code
```

**GPU compiler 研究的核心其实就是这些 lowering decisions。**


---
SM 才是你理解 GPU compiler 的核心硬件对象
一个简化的 SM：
```
                SM
┌─────────────────────────────────┐
│                                 │
│ warp scheduler                  │
│        ↓                        │
│ warps                           │
│        ↓                        │
│ ┌──────────┐   ┌─────────────┐ │
│ │CUDA cores│   │Tensor Cores │ │
│ └──────────┘   └─────────────┘ │
│                                 │
│ load/store units                │
│                                 │
│ register file                   │
│                                 │
│ shared memory / L1              │
│                                 │
└─────────────────────────────────┘
          ↕
         L2
          ↕
         HBM
```

H100 每个 SM 中有 Tensor Cores，并新增了 TMA 来异步搬运 global-memory/shared-memory 间的大块 tensor 数据。

所以 compiler/kernel engineer 不只是：
> 减少 arithmetic instructions。

而是在玩一个复杂游戏：
```
HBM bandwidth
L2 locality
shared memory capacity
register pressure
occupancy
warp scheduling
Tensor Core utilization
instruction-level parallelism
memory latency hiding
```



## Operator Dev & LLM /Agents For Operator Dev
> [!links]
> ↗ [LLM (Large Language Model)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
> ↗ [Agentic LLMs & LLM Agent Harness](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20LLM%20Agent%20Harness/Agentic%20LLMs%20&%20LLM%20Agent%20Harness.md)
> 
> ↗ [AI4SE](../../../../Software%20Engineering/🤖%20AI4SE/AI4SE.md)
> ↗ [AI4Code](../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code/AI4Code.md)

objective: for given workload and hardware, find the optimal (?) implementation

methodologies:
- human expert hand-written operator
- AI-written operator
	- agent optimize operator directly
- compilation operator
	- agentic compiler /neuro-symbolic
		- llm /agent + compilation environment
	- no AI /traditional compiler

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ae597f4-2d00-83ec-8d1e-37773f5a20a6

**我们究竟在优化什么？**
把问题形式化：
给定一个计算任务 \(F\)、目标 GPU \(H\) 和一组实际输入 \(W\)，寻找满足正确性要求、执行效率最高的实现 \(P\): $$P^*=\arg\min_{P\in\mathcal P,\;P\approx F} T(P,H,W)$$
这里的 \(P\) 可以是单个 Kernel，也可以是多个 Kernel 构成的执行方案。

固定计算任务，并不意味着只能改变代码的写法。我们仍然可以改变：
- 算法：用另一种数学上等价的算法计算。
- 计算图：改变算子融合、拆分与计算顺序。
- 数据组织：改变 Layout、内存使用和数据搬运方式。
- 并行执行：改变 Tiling、线程映射、流水线和指令。
- 实现选择：在多个 Kernel、算法及参数配置之间选择。
- 运行时策略：根据输入形状、数据特征选择不同实现。


**建立优化方法分类**
我建议保留八个维度。其中前六个决定优化系统如何工作，后两个决定它如何被验证与部署。

| 维度                              | 回答的问题        | 典型选项                                                                   |
| ------------------------------- | ------------ | ---------------------------------------------------------------------- |
| D1. 优化粒度 (Granularity)          | 优化的单位有多大？    | Instruction、Kernel、Operator、Fused Subgraph、Full Graph                  |
| D2. 优化自由度 (Search Space)        | 允许改变哪些实现决策？  | 算法、Graph、Fusion、Schedule、Layout、Memory、Thread Mapping、Kernel Selection |
| D3. 程序表示 (Representation)       | 用什么形式表达候选实现？ | Library、Template、Graph IR、Tensor IR、Schedule DSL、CUDA / Triton、PTX     |
| D4. 候选生成 (Candidate Generation) | 新的实现怎样产生？    | 复用、模板实例化、Rewrite、程序合成、直接代码生成                                           |
| D5. 搜索策略 (Search Strategy)      | 怎样探索候选空间？    | Greedy、Grid、Random、Evolution、Beam Search、MCTS、约束求解                     |
| D6. 决策与引导 (Search Guidance)     | 什么知识指导搜索？    | 人工规则、静态分析、解析 Cost Model、Learned Cost Model、RL Policy、LLM               |
| D7. 验证与反馈 (Evaluation)          | 如何判断正确、性能好？  | 形式化等价、数值测试、静态成本估计、GPU Benchmark、Profiling                              |
| D8. 优化时机 (Optimization Stage)   | 何时搜索或选择实现？   | 离线优化、AOT Build、JIT、Runtime Dispatch                                    |

我现在会把整个研究问题组织成下面三个层次，而不是再提出六条互相重叠的路线。

|层次|内容|作用|
|---|---|---|
|第 1 层：Problem Definition|计算语义、输入分布、目标 GPU、数值容差、Latency / Throughput / Memory 目标|固定什么问题需要解决|
|第 2 层：Optimization Methodology|D1–D8：优化范围、自由度、表示、候选生成、搜索、决策、验证、时机|定义如何寻找优化实现|
|第 3 层：Evaluation Protocol|Benchmark Suite、强基线、公平优化预算、跨 Shape / Hardware 泛化、端到端性能|客观衡量方法有效性|

需要强调：固定语义不一定要求浮点结果逐位相同。不同计算顺序、融合和精度策略可能改变舍入误差，因此数值容差、允许的 dtype 和精度限制必须事先明确。


**最终判断**
现在我们可以把相关领域的术语归到正确位置：
Compiler Optimization 是研究程序变换和代码生成的广泛领域；Autotuning / Auto-scheduling 是自动探索实现选择的一类方法；Superoptimization 更关注在语义等价实现空间里寻找更好的程序；Program Synthesis 关注构造满足计算规范的新程序；ML / RL / LLM Agent 则可以参与候选构造、搜索决策和性能预测等多个环节。


### Human Expert Op-Dev
Deepseek:
- https://github.com/deepseek-ai/FlashMLA
	- FlashMLA: Efficient Multi-head Latent Attention Kernels
- https://github.com/deepseek-ai/DeepGEMM
	- DeepGEMM: clean and efficient BLAS kernel library on GPU
- https://github.com/deepseek-ai/DeepSelect
	- DeepSelect: TopK kernels for DeepSeek Sparse Attention (DSA) and Samplers
- https://github.com/deepseek-ai/TileKernels
	- A kernel library written in tilelang
- https://github.com/deepseek-ai/DeepGEMM-Ascend
	- DeepGEMM-Ascend: clean and efficient matrix multiplication kernel library for Huawei Ascend NPUs


### LLM + Compilation
equality saturation ?


### LLM /Agent for Op-Dev ⭐
https://github.com/youyve/awesome-kernel-agent
- **127 agent systems** · **176 structured claims** · **47 claims with linked artifacts** · **17 hardware targets** · **5 tooling entries** · research cutoff **2026-10-19**
Representations and infrastructure
- **Representations:** [CUDA C/C++](https://docs.nvidia.com/cuda/cuda-c-programming-guide/) · [Triton](https://github.com/triton-lang/triton) · [CUTLASS / CuTe DSL](https://github.com/NVIDIA/cutlass) · [HIP / ROCm](https://rocm.docs.amd.com/) · [TileLang](https://github.com/tile-ai/tilelang) · [Pallas](https://docs.jax.dev/en/latest/pallas/index.html) · [cuTile Python](https://docs.nvidia.com/cuda/cutile-python/) · [Ascend C](https://www.hiascend.com/document/) · [NKI](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/general/nki/index.html) · [TT-Lang](https://github.com/tenstorrent/tt-lang).
- **Agent and execution infrastructure:** [KernelGYM](https://github.com/hkust-nlp/KernelGYM) · [GPU Forecasters](https://github.com/codezakh/gpu-forecasters) · [NVIDIA CompileIQ](https://developer.nvidia.com/cuda/compileiq) · [Nsight Compute](https://docs.nvidia.com/nsight-compute/) · [Proton](https://github.com/triton-lang/triton/tree/main/third_party/proton) · [rocprof](https://rocm.docs.amd.com/projects/rocprofiler/en/latest/) · [msprof](https://www.hiascend.com/document/).
- [KREX](https://github.com/youyve/awesome-kernel-agent/blob/main/catalog/2026.md#krex) adds shared-GPU benchmarking isolation; [Xtrace](https://github.com/youyve/awesome-kernel-agent/blob/main/catalog/2026.md#xtrace) provides intra-kernel tracing. Both are indexed as tools, not generation agents.
- **Reference and production kernel libraries:** [FlashAttention](https://github.com/Dao-AILab/flash-attention) · [FlashInfer](https://github.com/flashinfer-ai/flashinfer) · [DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) · [TileKernels](https://github.com/deepseek-ai/TileKernels) · [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) · [FlagGems](https://github.com/FlagOpen/FlagGems) · [AITER](https://github.com/ROCm/aiter).
Research sources
- [Towards Automated Kernel Generation in the Era of LLMs](https://arxiv.org/abs/2601.15727) — broad survey and research index
- [awesome-LLM-driven-kernel-generation](https://github.com/flagos-ai/awesome-LLM-driven-kernel-generation) and [Awesome-LLM4Kernel](https://github.com/kcxain/Awesome-LLM4Kernel) — companion indexes
- [2026-10-19 primary-source audit](https://github.com/youyve/awesome-kernel-agent/blob/main/sources/research_20261019_kernel_agents.md) — latest additions, release updates, date checks, and unresolved evidence
- [2026-08-25 primary-source audit](https://github.com/youyve/awesome-kernel-agent/blob/main/sources/research_20260825_kernel_agents.md) — previous search protocol, inclusion decisions, corrections, and exclusions
- [v2 migration review](https://github.com/youyve/awesome-kernel-agent/blob/main/reports/migration-review.md) — facts intentionally left unresolved instead of inferred
Evaluation integrity and reward hacking
- [robust-kbench](https://github.com/SakanaAI/robust-kbench) — hardened KernelBench after AI CUDA Engineer exploits; [paper](https://arxiv.org/abs/2509.14279)
- [METR Kernel Reward-Hacking Challenge](https://github.com/METR/RE-Bench/tree/main/ai_rd_triton_cumsum) — an evaluation task where reward hacking is explicitly audited
- [TRACE](https://arxiv.org/abs/2601.20103) — 54 exploit categories and 517 verified trajectories
- [RewardHackingAgents](https://arxiv.org/abs/2603.11337) — evaluator tampering as a first-class outcome
- [Standard Kernel Rubric](https://standardkernel.com/blog/standard-kernel-rubric/) — complexity, representation, hardware, performance, and automation rubric
- [Contract-Grade Verifier](https://arxiv.org/abs/2608.12700) — adversarial contract audit of 2,638 previously accepted generated kernels
- [KernelQuest](https://www.turing.com/blog/kernelquest-benchmark-ai-agents-triton-kernels) — 100 engineer-authored Triton tasks with compiled baselines and adversarial verification
- [D2K-Bench](https://arxiv.org/abs/2610.03226) — paired design-guided and unguided runs on 26 tasks / 85 workloads, separating design discovery from implementation
Competitions and leaderboards
- [MLSys'26 FlashInfer Kernel-Gen Contest](https://mlsys26.flashinfer.ai/) — B200 fused MoE, sparse attention, and gated delta-net tracks
- [GPU MODE × AMD E2E Model Speedrun](https://www.amd.com/en/developer/resources/technical-articles/2026/new-gpumode-virtual-hackathon--e2e-model-speedrun.html) — MI355X end-to-end model optimization
- [GPU MODE reference kernels](https://github.com/gpu-mode/reference-kernels) — NVIDIA and AMD kernel leaderboards, including distributed kernels
- [AWS Trainium MoE Challenge](https://github.com/aws-neuron/nki-moe) — Qwen3 MoE on Trainium
- [KernelArena](https://www.kernelarena.ai/) — open accelerator-kernel evaluation and leaderboard


https://github.com/youyve/awesome-kernel-benchmark
**30-second orientation.** This list contains two different kinds of things, and keeping them apart is the whole game:
1. **Agent benchmarks** — harnesses _designed_ to score LLM kernel generation (KernelBench and its 27 successors). These produce the headline numbers in papers.
2. **Task sources** (a.k.a. _substrates_) — the classic HPC/GPU suites that agents are evaluated _on_ or asked to optimize (PolyBench, NPB, Rodinia, …). An agent paper saying "we optimize XSBench kernels" is using a task source, not a benchmark — its numbers are only comparable to another paper that shares both the task source _and_ the measurement method.
What should I evaluate my agent on?
Pick by what you need to _prove_:
- **"My numbers are comparable to prior work"** → [KernelBench](https://github.com/ScalingIntelligence/KernelBench) — the de-facto standard everyone reports. Know its limits (see scorecard) and never use it as sole evidence.
- **"My speedups are not reward-hacking artifacts"** → [robust-kbench](https://github.com/SakanaAI/robust-kbench) — anti-gaming filters, forward+backward, 1e-5 tolerances.
- **"My kernels are correct on real production shapes"** → [BackendBench](https://github.com/meta-pytorch/BackendBench) — PyTorch OpInfo edge cases + TorchBench production traces; ships kernels as a pip backend.
- **"My kernels are fast in an absolute sense, not just vs eager"** → [SOL-ExecBench](https://research.nvidia.com/benchmarks/sol-execbench) / [CUDABench](https://github.com/CUDA-Bench/CUDABench) — ceiling-relative scores (caveat: both use datasheet peaks, which are 8–15% loose vs measured ceilings).
- **"My agent's wins survive a real serving stack"** → [ISO-Bench](https://github.com/Lossfunk/ISO-Bench) (vLLM/SGLang merged-PR tasks) / [FlashInfer-Bench](https://github.com/flashinfer-ai/flashinfer-bench).
- **"My results are honest about compute budget"** → [GEAK](https://github.com/AMD-AGI/GEAK) — the only one decomposing sequential@k vs parallel@k.
- **Triton specifically** → [TritonBench](https://github.com/thunlp/TritonBench); **ROCm/AMD** → GEAK, [AgentKernelArena](https://github.com/AMD-AGI/AgentKernelArena), [NPUEval](https://github.com/AMDResearch/NPUEval); **Ascend NPU** → [MultiKernelBench](https://github.com/wzzll123/MultiKernelBench), [AscendKernelBench](https://github.com/mindspore-ai/akg), [NPUKernelBench](https://openi.pcl.ac.cn/PCL-Benchmark/NPUKernelBench); **CUDA correctness with hidden tests** → [ComputeEval](https://github.com/NVIDIA/compute-eval).
**The honest answer for a serious paper is a portfolio:** one comparability anchor (KernelBench) + one hardened oracle (robust-kbench or BackendBench) + one absolute metric (SOL-ExecBench-style) + explicit budget reporting. No single existing benchmark covers all four — that gap is visible in the scorecard below.



## Ref
[98 【gpu 不是大模型唯一选择 - henryz | 小红书 - 你的生活兴趣社区】 😆 OnZ1l6ZUCCrcFIi 😆]: https://www.xiaohongshu.com/discovery/item/6ad76fda000000002601e07a?source=webshare&xhsshare=pc_web&xsec_token=ABadGIGIcWR4XxcTHmJdUa95ICoO00r0aqfL4fKHfxqzc=&xsec_source=pc_share

[ForgeKernel: Self-Evolving Kernels Catching and Surpassing Experts and Agents | github]: https://github.com/OpenBMB/ForgeKernel
