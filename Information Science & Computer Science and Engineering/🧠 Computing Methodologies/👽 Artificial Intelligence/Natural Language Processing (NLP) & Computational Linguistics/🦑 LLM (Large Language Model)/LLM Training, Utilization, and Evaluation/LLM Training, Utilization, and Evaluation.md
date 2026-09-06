# LLM Training, Utilization, and Evaluation

[TOC]



## Res
### Related Topics
↗ [LLM Foundation Models List & Evaluation and Benchmarks & Leaderboard](../🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard.md)

↗ [Artificial Neural Networks (ANN) & Deep Learning Methods](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods.md)
↗ [Model Tuning & Hyperparameter Optimization (HPO)](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/3️⃣%20Model%20Training%20(Classical%20ML%20&%20NN)/Model%20Tuning%20&%20Hyperparameter%20Optimization%20(HPO)/Model%20Tuning%20&%20Hyperparameter%20Optimization%20(HPO).md)

↗ [Running ML on GPU](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/Running%20ML%20on%20GPU.md)


### Other Resources
🏠 https://github.com/RUCAIBox/LLMSurvey
A collection of papers and resources related to Large Language Models.
The organization of papers refers to our survey [**"A Survey of Large Language Models"**](https://arxiv.org/abs/2303.18223). 
- Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)


https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook#introduction
The Smol Training Playbook: The Secrets to Building World-Class LLMs
![](../../../../../../Assets/Pics/Pasted%20image%2020251108201622.png)



## Intro
> [!links]
> ↗ [Artificial Neural Networks (ANN) & Deep Learning Methods](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods.md)
> ↗ [Model Tuning & Hyperparameter Optimization (HPO)](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/3️⃣%20Model%20Training%20(Classical%20ML%20&%20NN)/Model%20Tuning%20&%20Hyperparameter%20Optimization%20(HPO)/Model%20Tuning%20&%20Hyperparameter%20Optimization%20(HPO).md)
> ↗ [Transformers](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)


### Common LLM Hyperparameters Summery
> 🤖 GPT-5
> https://chatgpt.com/share/69cc36d7-c9ec-832b-876d-1f0749d09017

| **Category**             | **Component**                | **Key Parameters**           | **Algorithms / Design Choices**                            | **Modern Usage Examples**                       |
| ------------------------ | ---------------------------- | ---------------------------- | ---------------------------------------------------------- | ----------------------------------------------- |
| 🧱 **Architecture**      | Residual Connections         | Residual scaling, placement  | Standard residual, **Pre-LN vs Post-LN**, scaled residuals | GPT-5 → Pre-LN (very likely), LLaMA → Pre-LN    |
|                          | Normalization                | ε, placement                 | LayerNorm, **RMSNorm**                                     | DeepSeek → RMSNorm                              |
|                          | Attention Mechanism          | \#heads, head dim, scaling   | Multi-head, **GQA**, MQA, FlashAttention                   | Gemini → GQA-style                              |
|                          | Feedforward Layer            | Hidden size, expansion ratio | ReLU, GELU, **SwiGLU**                                     | LLaMA → SwiGLU                                  |
|                          | Positional Encoding          | Max context, embedding type  | Sinusoidal, **RoPE**, ALiBi                                | GPT-4 → RoPE (likely), DeepSeek → RoPE variants |
|                          | Model Size                   | \#layers, hidden dim, params | Dense vs **MoE**                                           | DeepSeek → MoE                                  |
|                          | Vocabulary                   | Vocab size, tokenizer        | BPE, SentencePiece, Unigram                                | Claude                                          |
|                          | Embeddings                   | Dim, tying                   | Input/output tying, scaling                                | Standard across all models                      |
|                          | Dropout (Architecture-level) | Dropout rate                 | Dropout, attention dropout                                 | Less used in modern large models                |
|                          |                              |                              |                                                            |                                                 |
| ⚙️ **Optimization**      | Optimizer                    | LR, β₁, β₂, ε                | **AdamW**, Adafactor, Lion                                 | GPT-5 (likely AdamW)                            |
|                          | LR Schedule                  | Warmup, decay                | **Cosine decay**, linear                                   | All frontier models                             |
|                          | Gradient Clipping            | Norm threshold               | Global norm clipping                                       | Standard                                        |
|                          | Weight Decay                 | λ                            | Decoupled weight decay                                     | Standard                                        |
|                          |                              |                              |                                                            |                                                 |
| 📦 **Training Dynamics** | Batch Size                   | Tokens/step                  | Large batch + accumulation                                 | Gemini                                          |
|                          | Sequence Length              | Context window               | 4K → 1M tokens scaling                                     | GPT-5                                           |
|                          | Loss Function                | Loss type                    | Cross-entropy                                              | Universal                                       |
|                          | Label Smoothing              | ε                            | Smoothed CE                                                | Occasionally used                               |
|                          | Curriculum                   | Data ordering                | Curriculum learning                                        | Increasingly used                               |
|                          |                              |                              |                                                            |                                                 |
| ⚡ **Numerics**           | Precision                    | FP32/16/BF16/FP8             | **BF16**, FP8 emerging                                     | DeepSeek                                        |
|                          | Loss Scaling                 | Scale factor                 | Dynamic scaling                                            | FP16 setups                                     |
|                          | Stability Tricks             | Init scaling                 | μP, scaled init                                            | Frontier training                               |
|                          | Label Smoothing              | ε                            | Smoothed CE                                                | Occasionally used                               |
|                          | Curriculum                   | Data ordering                | Curriculum learning                                        | Increasingly used                               |
|                          |                              |                              |                                                            |                                                 |
| 🧠 **Memory & Scaling**  | Parallelism                  | GPU count, sharding          | Data / tensor / pipeline                                   | All frontier models                             |
|                          | Memory Optimization          | Sharding level               | ZeRO, FSDP, checkpointing                                  | DeepSpeed                                       |
|                          | Throughput                   | Tokens/sec                   | Kernel fusion, FlashAttention                              | Universal                                       |
|                          |                              |                              |                                                            |                                                 |
| 🎯 **Alignment**         | Fine-tuning                  | Reward model, KL             | RLHF, **DPO**, RLAIF                                       | Claude                                          |
|                          | Sampling Strategy            | Temperature, top-k/p         | Nucleus sampling                                           | All LLMs                                        |
|                          | Safety Training              | Constraints                  | Constitutional AI                                          | Claude                                          |



## 1️⃣ Pre-Training
↗ [Pre-Training](LLM%20Training/Pre-Training/Pre-Training.md)


### Data Preparation
↗ [Dataset Preparation](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/1️⃣%20Datasets%20Preparation/Dataset%20Preparation.md)
↗ [LLM Training Datasets](LLM%20Training/LLM%20Training%20Datasets/LLM%20Training%20Datasets.md)

🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main?tab=readme-ov-file#llm-data (2025.01)
- [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - Open-Source Toolkit for Efficient Unstructured Data Processing with Pre-built Modules and Local to Cluster Scalability.
#### Commonly Used Corpora for Pre-training


### Neural Network Models & Architectures
↗ [Neural Network Models](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)

#### Analysis and Optimization for Model Inference

#### Complex Reasoning

#### Long Context Modeling


### Model (Pre) Training
↗ [Model Training (Classical ML & NN)](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/3️⃣%20Model%20Training%20(Classical%20ML%20&%20NN)/Model%20Training%20(Classical%20ML%20&%20NN).md)
↗ [Pre-Training](LLM%20Training/Pre-Training/Pre-Training.md)
#### LLM Training Frameworks
> 🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main?tab=readme-ov-file#llm-training-frameworks (2025.01)

- [veRL](https://github.com/volcengine/verl) - veRL is a flexible and efficient RL framework for LLMs.
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed is a deep learning optimization library that makes distributed training and inference easy, efficient, and effective.
- [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - DeepSpeed version of NVIDIA's Megatron-LM that adds additional support for several features such as MoE model training, Curriculum Learning, 3D Parallelism, and others.
- [torchtune](https://github.com/pytorch/torchtune) - A Native-PyTorch Library for LLM Fine-tuning.
- [torchtitan](https://github.com/pytorch/torchtitan) - A native PyTorch Library for large model training.
- [NeMo Framework](https://github.com/NVIDIA/NeMo) - Generative AI framework built for researchers and PyTorch developers working on Large Language Models (LLMs), Multimodal Models (MMs), Automatic Speech Recognition (ASR), Text to Speech (TTS), and Computer Vision (CV) domains.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - Ongoing research training transformer models at scale.
- [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - Making large AI models cheaper, faster, and more accessible.
- [BMTrain](https://github.com/OpenBMB/BMTrain) - Efficient Training for Big Models.
- [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow: Model Parallelism Made Easier.
- [maxtext](https://github.com/AI-Hypercomputer/maxtext) - A simple, performant and scalable Jax LLM!
- [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - An implementation of model parallel autoregressive transformers on GPUs, based on the DeepSpeed library.
- [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - A library for accelerating Transformer model training on NVIDIA GPUs.
#### Analysis and Optimization for Model Training

#### Model Compression



## 2️⃣ Post-Training & Fine Tuning
> [!links]
> ↗ [Post-Training & Fine Tuning](LLM%20Training/Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)
> ↗ [LLM Adaptation & Alignment Tuning](LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Directions/LLM%20Adaptation%20&%20Alignment%20Tuning.md)

> 🔗 https://cameronrwolfe.substack.com/p/understanding-and-using-supervised
> (P.S. this article is not very accurate in the generality of the process of training. It just gives a concrete approach (while in fact there are other approaches). However, it is still good for an appetizer of this process.)

**Training LLMs.** The training process for language models typically proceeds in three phases; see below. First, we pretrain the language model, which is (by far) the most computationally-expensive step of training. From here, we perform alignment, typically via the [three-step framework](https://cameronrwolfe.substack.com/i/93578656/refining-llm-behavior) (see below) with supervised fine-tuning (SFT) and reinforcement learning from human feedback (RLHF)[1](https://cameronrwolfe.substack.com/p/understanding-and-using-supervised#footnote-1-136815345).

![](../../../../../../Assets/Pics/Pasted%20image%2020250831143544.png)

![](../../../../../../Assets/Pics/Pasted%20image%2020240602204501.png)

The steps outlined above form the standardized training pipeline that is used for most state-of-the-art LLMs (e.g., ChatGPT or LLaMA-2 [3]). SFT and RLHF are computationally cheap compared to pretraining, but they require the curation of a dataset—either of high-quality LLM outputs or human feedback on LLM outputs — which can be difficult and time consuming.

Sometimes we have to do a bit more when applying an LLM to solve a downstream task. In particular, we can further specialize a language model (if needed) either via domain-specific fine-tuning or [in-context learning](https://cameronrwolfe.substack.com/i/123558334/different-types-of-learning); see below. Domain-specific fine-tuning simply trains the model further—_usually via a [language modeling objective](https://cameronrwolfe.substack.com/i/85568430/language-modeling), similarly to pretraining/SFT_—on data that is relevant to the downstream task, while in-context learning adds extra context or examples into the language model’s prompt to be used as context for solving a problem.

![](../../../../../../Assets/Pics/Pasted%20image%2020240602204515.png)

**What is alignment?** Finally, there is a term we have used several times in the above discussion that is important to understand: _alignment_. A pretrained language model is usually not useful. If we generate output with this model, the results will probably be repetitive and not very helpful. To create a more useful language model, we have to _align_ this model to the desires of the human user. In other words, instead of generating the most likely textual sequence, our language model learns to generate the textual sequence that is desired by a user.

> _“For our collection of preference annotations, we focus on helpfulness and safety. Helpfulness refers to how well Llama 2-Chat responses fulfill users’ requests and provide requested information; safety refers to whether Llama 2-Chat’s responses are unsafe.”_ - from [5]

Such alignment, which is accomplished via the three-step framework with SFT and RLHF outlined above, can be used to encourage a variety of behaviors and properties within an LLM. Typically, those training the model select a set of one or a few criteria that are emphasized throughout the alignment process. Common alignment criteria include: improving instruction following capabilities, discouraging harmful output, making the LLM more helpful, and many more. For example, [LLaMA-2](https://cameronrwolfe.substack.com/p/llama-2-from-the-ground-up) [5] is aligned to be _i)_ helpful and _ii)_ harmless/safe; see above.



## 3️⃣ Utilization & Prompt Engineering
↗ [LLM Utilization & Prompt, Context, and Harness Engineering](LLM%20Utilization%20&%20Prompt,%20Context,%20and%20Harness%20Engineering/LLM%20Utilization%20&%20Prompt,%20Context,%20and%20Harness%20Engineering.md)
- ↗ [Context Engineering & ICL (In-Context Learning)](LLM%20Utilization%20&%20Prompt,%20Context,%20and%20Harness%20Engineering/Context%20Engineering%20&%20ICL%20(In-Context%20Learning).md)
- ↗ [CoT (Chain-of-Thought)](LLM%20Utilization%20&%20Prompt,%20Context,%20and%20Harness%20Engineering/CoT%20(Chain-of-Thought).md)
- ↗ [RAG (Retrieval Augmented Generation)](LLM%20Utilization%20&%20Prompt,%20Context,%20and%20Harness%20Engineering/RAG%20(Retrieval%20Augmented%20Generation).md)



## 4️⃣ Evaluation
### Basic Ability


### Advanced Ability


### Empirical Evaluation


### 🧐 Evaluation Approaches & Benchmarking
↗ [LLM Foundation Models List & Evaluation and Benchmarks & Leaderboard](../🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard.md)


### 🤔 Issues & Improvements
#### Hallucination



## Ref
[Understanding and Using Supervised Fine-Tuning (SFT) for Language Models | Cameron R. Wolfe, Ph.D.]: https://cameronrwolfe.substack.com?utm_source=navbar&utm_medium=web
