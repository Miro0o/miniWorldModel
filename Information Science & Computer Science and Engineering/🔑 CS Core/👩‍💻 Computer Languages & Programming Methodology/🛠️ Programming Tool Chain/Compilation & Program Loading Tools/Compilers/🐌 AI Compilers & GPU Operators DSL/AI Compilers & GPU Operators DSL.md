# AI Compilers & GPU Operators DSL

[TOC]



## Res
### Related Topics
↗ [Programming Language Processing & Program Execution](../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Program Transformation & Compilation Theory (Compile-time)](../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29.md)
↗ [Compilation Phase](../../../../../🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/Compilation%20Phase.md)

↗ [AI (Data) Infrastructure & Techniques Stack](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20%28Data%29%20Infrastructure%20&%20Techniques%20Stack/AI%20%28Data%29%20Infrastructure%20&%20Techniques%20Stack.md)
↗ [LLM Infrastructure (Deployment & Inference)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20%28NLP%29%20&%20Computational%20Linguistics/🦑%20LLM%20%28Large%20Language%20Model%29/LLM%20Infrastructure%20%28Deployment%20&%20Inference%29/LLM%20Infrastructure%20%28Deployment%20&%20Inference%29.md)
↗ [Attention & Efficient Operator Implementation](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformer%20Components%20Design/Attention%20&%20Efficient%20Operator%20Implementation.md)

↗ [GPU (Graphics Processing Unit)](../../../../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Computer%20Architecture/Computer%20Microarchitectures%20%28Computer%20Organization%29%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20%28Theory%20Part%29/📌%20Microprocessor%20&%20Microprocessors%20Unit%20%28MPU%29/Accelerators%20%28Coprocessors%29/GPU%20%28Graphics%20Processing%20Unit%29/GPU%20%28Graphics%20Processing%20Unit%29.md)
↗ [Compute Unified Device Architecture & CUDA Programming](../../../../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20%28IO%20Devices%29%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)

↗ [DSL(Domain Specific Languages)](../../../../DSL%20%28Domain%20Specific%20Languages%29/DSL%28Domain%20Specific%20Languages%29.md)

↗ [Parallel Computing & Programming](../../../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md)
↗ [Parallel Programming Libraries & SDK](../../../🚠%20Application%20Runtimes%20&%20SDKs/👯‍♀️%20Parallel%20Programming%20Libraries%20&%20SDK/Parallel%20Programming%20Libraries%20&%20SDK.md)


### Other Resources



## Intro
> [!links]
> ↗ [AI (Data) Infrastructure & Techniques Stack](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20%28Data%29%20Infrastructure%20&%20Techniques%20Stack/AI%20%28Data%29%20Infrastructure%20&%20Techniques%20Stack.md)
> ↗ [LLM Infrastructure (Deployment & Inference)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20%28NLP%29%20&%20Computational%20Linguistics/🦑%20LLM%20%28Large%20Language%20Model%29/LLM%20Infrastructure%20%28Deployment%20&%20Inference%29/LLM%20Infrastructure%20%28Deployment%20&%20Inference%29.md) ⭐
> 
> ↗ [Transformers](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md) ⭐


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


### Map: LLM Inference & AI Compilation
> [!links]
> ↗ [LLM Infrastructure (Deployment & Inference)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20%28NLP%29%20&%20Computational%20Linguistics/🦑%20LLM%20%28Large%20Language%20Model%29/LLM%20Infrastructure%20%28Deployment%20&%20Inference%29/LLM%20Infrastructure%20%28Deployment%20&%20Inference%29.md)

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


### LLM Inference Workload
> [!links]
> ↗ [Transformers](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)
> 
> ↗ [Attention & Efficient Operator Implementation](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformer%20Components%20Design/Attention%20&%20Efficient%20Operator%20Implementation.md)
> ![Transformer多头注意力流程图](../../../../../../../Assets/Pics/Transformer多头注意力流程图.png)


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

|workload|主要特征|常见瓶颈|
|---|---|---|
|Prefill GEMM|大矩阵|Tensor Core / compute|
|Decode GEMM|skinny matrix|HBM bandwidth|
|Prefill Attention|Q/K/V 都很长|compute + memory IO|
|Decode Attention|1 个 Q 扫历史 KV|KV/HBM bandwidth|
|RMSNorm|reduction + elementwise|memory bandwidth|
|RoPE|elementwise|memory bandwidth|
|Activation|elementwise|memory / launch|
|KV cache|大量 persistent state|capacity + bandwidth|
|MoE|irregular grouped GEMM|load balance + communication|
|Tensor Parallel|collective communication|NVLink / network|
|Sampling|reduction/selection|launch + memory|
|Batching|改变 tensor shape|latency ↔ throughput tradeoff|



## Tensor Compilation & Transformer Computation Graph
> [!links]
> ↗ [PyTorch](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20%28Data%29%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/⭐️%20Python%20Based%20ML%20Libraries/📌%20PyTorch/PyTorch.md)
> ↗ [Tensorflow](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🏗️%20AI%20%28Data%29%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/Hybrid%20Languages%20&%20Cross%20Platforms/📌%20Tensorflow/Tensorflow.md)

> 🤖 GPT6.0 Astra
> https://chatgpt.com/share/6ac25911-13a4-83ec-a4d5-c5ec05ce7e64

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


---
PyTorch compile 栈可以这样理解
今天比较重要的一条路径大概是：

```
Python PyTorch model
        │
        ▼
    TorchDynamo
        │
        │ graph capture
        ▼
      FX graph
        │
        ▼
 AOTAutograd /
 AOTDispatcher
        │
        │ functionalization
        │ decomposition
        ▼
   ATen-level graph
        │
        ▼
    TorchInductor
        │
        │ fusion
        │ scheduling
        │ layout
        │ codegen
        ▼
 ┌─────────────┬─────────────┐
 │             │             │
Triton      extern call    C++ etc.
 │            │
 │          cuBLAS
 │          ...
 ▼
GPU kernels
```

PyTorch 官方把主要 `torch.compile` 栈概括为 Dynamo、AOTDispatcher/AOTAutograd 和 Inductor；Inductor 再把 ATen/Prim 级别图 lower 到更接近 loop 的表示。[PyTorch Developer Mailing List](https://dev-discuss.pytorch.org/t/higher-order-operators-2023-10/1565?utm_source=chatgpt.com)

目前 PyTorch 的 NVIDIA GPU compiler 路径也大量依赖 Triton



## Kernel Engineering & Compiler Lowering
> [!links]
> ↗ [GPU (Graphics Processing Unit)](../../../../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Computer%20Architecture/Computer%20Microarchitectures%20%28Computer%20Organization%29%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20%28Theory%20Part%29/📌%20Microprocessor%20&%20Microprocessors%20Unit%20%28MPU%29/Accelerators%20%28Coprocessors%29/GPU%20%28Graphics%20Processing%20Unit%29/GPU%20%28Graphics%20Processing%20Unit%29.md)
> ↗ [Nvidia Chips](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20%28Implementation%20Part%29/Nvidia%20Chips.md)
> ↗ [Compute Unified Device Architecture & CUDA Programming](../../../../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20%28IO%20Devices%29%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)

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



## Ref
