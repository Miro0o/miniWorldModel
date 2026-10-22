# PyTorch

[TOC]



## Res
🏠 https://pytorch.org


### Related Topics
↗ [Tensorflow](../../Hybrid%20Languages%20&%20Cross%20Platforms/📌%20Tensorflow/Tensorflow.md)
↗ [TorchInductor](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/🐌%20AI%20%28LLM%29%20Compilers%20&%20GPU%20Operators%20DSL/Tensor%20&%20Computation%20Graph/TorchInductor.md)

↗ [OpenAI Triton](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/🐌%20AI%20%28LLM%29%20Compilers%20&%20GPU%20Operators%20DSL/Lowering/OpenAI%20Triton/OpenAI%20Triton.md)


### Other Resources



## Intro
> 🤖 GPT6.0 Astra
> https://chatgpt.com/share/6acf2ea8-81a0-83ec-95d5-71a281e2bbe1

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

目前 PyTorch 的 NVIDIA GPU compiler 路径也大量依赖 Triton.



## Ref
