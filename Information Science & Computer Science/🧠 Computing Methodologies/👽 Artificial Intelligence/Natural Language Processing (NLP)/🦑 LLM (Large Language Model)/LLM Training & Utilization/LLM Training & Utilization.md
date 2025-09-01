# LLM Training & Utilization

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://cameronrwolfe.substack.com/p/understanding-and-using-supervised

**Training LLMs.** The training process for language models typically proceeds in three phases; see below. First, we pretrain the language model, which is (by far) the most computationally-expensive step of training. From here, we perform alignment, typically via the [three-step framework](https://cameronrwolfe.substack.com/i/93578656/refining-llm-behavior) (see below) with supervised fine-tuning (SFT) and reinforcement learning from human feedback (RLHF)[1](https://cameronrwolfe.substack.com/p/understanding-and-using-supervised#footnote-1-136815345).

![](../../../../../../Assets/Pics/Pasted%20image%2020250831143544.png)

![](../../../../../../Assets/Pics/Pasted%20image%2020250831143538.png)

The steps outlined above form the standardized training pipeline that is used for most state-of-the-art LLMs (e.g., ChatGPT or LLaMA-2 [3]). SFT and RLHF are computationally cheap compared to pretraining, but they require the curation of a dataset—either of high-quality LLM outputs or human feedback on LLM outputs — which can be difficult and time consuming.

Sometimes we have to do a bit more when applying an LLM to solve a downstream task. In particular, we can further specialize a language model (if needed) either via domain-specific fine-tuning or [in-context learning](https://cameronrwolfe.substack.com/i/123558334/different-types-of-learning); see below. Domain-specific fine-tuning simply trains the model further—_usually via a [language modeling objective](https://cameronrwolfe.substack.com/i/85568430/language-modeling), similarly to pretraining/SFT_—on data that is relevant to the downstream task, while in-context learning adds extra context or examples into the language model’s prompt to be used as context for solving a problem.

![](../../../../../../Assets/Pics/Pasted%20image%2020250831143732.png)

**What is alignment?** Finally, there is a term we have used several times in the above discussion that is important to understand: _alignment_. A pretrained language model is usually not useful. If we generate output with this model, the results will probably be repetitive and not very helpful. To create a more useful language model, we have to _align_ this model to the desires of the human user. In other words, instead of generating the most likely textual sequence, our language model learns to generate the textual sequence that is desired by a user.

> _“For our collection of preference annotations, we focus on helpfulness and safety. Helpfulness refers to how well Llama 2-Chat responses fulfill users’ requests and provide requested information; safety refers to whether Llama 2-Chat’s responses are unsafe.”_ - from [5]

Such alignment, which is accomplished via the three-step framework with SFT and RLHF outlined above, can be used to encourage a variety of behaviors and properties within an LLM. Typically, those training the model select a set of one or a few criteria that are emphasized throughout the alignment process. Common alignment criteria include: improving instruction following capabilities, discouraging harmful output, making the LLM more helpful, and many more. For example, [LLaMA-2](https://cameronrwolfe.substack.com/p/llama-2-from-the-ground-up) [5] is aligned to be _i)_ helpful and _ii)_ harmless/safe; see above.


### LLM Training Frameworks
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



## Ref
