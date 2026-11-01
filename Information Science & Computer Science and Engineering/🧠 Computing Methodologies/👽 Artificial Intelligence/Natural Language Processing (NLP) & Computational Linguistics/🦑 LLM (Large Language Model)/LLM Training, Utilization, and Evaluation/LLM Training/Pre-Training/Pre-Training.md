# Pre-Training

[TOC]



## Res
### Related Topics
↗ [Dataset Preparation](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/1️⃣%20Datasets%20Preparation/Dataset%20Preparation.md)
↗ [Data Preprocessing](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/1️⃣%20Datasets%20Preparation/Data%20Preprocessing/Data%20Preprocessing.md)

↗ [Neural Network Models](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)
↗ [Transformers](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)

↗ [LLM Foundation Models List & Evaluation and Benchmarks & Leaderboard](../../../🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard.md)


### Other Resources
https://stanford-cs324.github.io/winter2022/lectures/training/
CS324 - Large Language Model | Stanford

https://stanford-cs324.github.io/winter2022/lectures/parallelism/
CS324 - Large Language Model | Stanford
- [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism](https://arxiv.org/pdf/1909.08053.pdf). _M. Shoeybi, M. Patwary, Raul Puri, P. LeGresley, J. Casper, Bryan Catanzaro_. 2019.
- [GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism](https://arxiv.org/pdf/1811.06965.pdf). _Yanping Huang, Yonglong Cheng, Dehao Chen, HyoukJoong Lee, Jiquan Ngiam, Quoc V. Le, Z. Chen_. NeurIPS 2018.
- [Efficient large-scale language model training on GPU clusters using Megatron-LM](https://arxiv.org/pdf/2104.04473.pdf). _D. Narayanan, M. Shoeybi, J. Casper, P. LeGresley, M. Patwary, V. Korthikanti, Dmitri Vainbrand, Prethvi Kashinkunti, J. Bernauer, Bryan Catanzaro, Amar Phanishayee, M. Zaharia_. SC 2021.
- [TeraPipe: Token-Level Pipeline Parallelism for Training Large-Scale Language Models](https://arxiv.org/pdf/2102.07988.pdf). _Zhuohan Li, Siyuan Zhuang, Shiyuan Guo, Danyang Zhuo, Hao Zhang, D. Song, I. Stoica_. ICML 2021.



## Intro



## Tokenization & Embedding
> 🤖 GPT-6.0 Astra
> https://chatgpt.com/share/6ac25d50-45b4-83ec-be26-e304272419c1

```
原始文本
"ChatGPT is great!"
        │
        ▼
┌─────────────────┐
│  Tokenization   │
│ 文本 → token    │
└─────────────────┘
        │
        ▼
 [1234, 567, 890]
   token IDs
        │
        ▼
┌─────────────────┐
│    Embedding    │
│ ID → 向量       │
└─────────────────┘
        │
        ▼
 [0.21, -0.8, ...]
 [-0.37, 0.12, ...]
 [0.61,  0.4, ...]
        │
        ▼
 Transformer
        │
        ▼
 Attention / MLP / ...
```

---
**Tokenization**
from words to tokens 
- token IDs & vocabulary size
- special tokens

determine LLM workload
- prefill
- kv cache
- attention

---
**Embedding**
from tokens to vectors
(from one-hot encoding to embedding)

static embedding:
- the initial embedding vectors /matrices
- fixed; same token same static embedding
contextual embedding:
- the embedding vector /matrices of the token changes as attention computation
- dynamic, more and more contextual information

positional embedding 
- to mark the sequence number of the token to its embedding matrix
sinusoidal positional encoding
RoPE (rotary position embedding)
- to encode the positional information in QKV, not adding additional vector

one-hot & embedding look up

Un-Embedding


### Positional Embedding
#### Sinusoidal Positional Encoding

#### RoPE



## Distributed Training
↗ [LLM Infrastructure (Deployment & Inference)](../../../LLM%20Infrastructure%20%28Deployment%20&%20Inference%29/LLM%20Infrastructure%20%28Deployment%20&%20Inference%29.md)



## Ref
