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
> 🤖 GPT 6.0 Astra

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

所以：
- serving system 决定“哪些 request 什么时候运行”；
- tensor compiler 决定“model graph 怎么变成高效计算”；
- kernel 决定“一个具体计算怎样把 GPU 榨干”。

这是三个不同层次。





-----

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



## Ref
