# Low-Rank Adaptation (LoRA)

[TOC]



## Res
### Related Topics
↗ [Linear Map](../../../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20%28模%29/📌%20Linear%20Algebra%20Basics/Linear%20Map.md)


### Learning Resources
https://arxiv.org/abs/2106.09685
LoRA: Low-Rank Adaptation of Large Language Models
- [Edward J. Hu](https://arxiv.org/search/cs?searchtype=author&query=Hu,+E+J), [Yelong Shen](https://arxiv.org/search/cs?searchtype=author&query=Shen,+Y), [Phillip Wallis](https://arxiv.org/search/cs?searchtype=author&query=Wallis,+P), [Zeyuan Allen-Zhu](https://arxiv.org/search/cs?searchtype=author&query=Allen-Zhu,+Z), [Yuanzhi Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+Y), [Shean Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+S), [Lu Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+L), [Weizhu Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+W)

> An important paradigm of natural language processing consists of large-scale pre-training on general domain data and adaptation to particular tasks or domains. As we pre-train larger models, full fine-tuning, which retrains all model parameters, becomes less feasible. Using GPT-3 175B as an example -- deploying independent instances of fine-tuned models, each with 175B parameters, is prohibitively expensive. We propose Low-Rank Adaptation, or LoRA, which freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture, greatly reducing the number of trainable parameters for downstream tasks. Compared to GPT-3 175B fine-tuned with Adam, LoRA can reduce the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times. LoRA performs on-par or better than fine-tuning in model quality on RoBERTa, DeBERTa, GPT-2, and GPT-3, despite having fewer trainable parameters, a higher training throughput, and, unlike adapters, no additional inference latency. We also provide an empirical investigation into rank-deficiency in language model adaptation, which sheds light on the efficacy of LoRA. We release a package that facilitates the integration of LoRA with PyTorch models and provide our implementations and model checkpoints for RoBERTa, DeBERTa, and GPT-2 at [this https URL](https://github.com/microsoft/LoRA).


### Other Resources



## Intro
> [!quote] 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac339b7-0594-83ec-9040-af3fe3980e92
> 所以通常有两种部署方式：
> 
> ```
> 方式 A
> Base Model
>   +
> LoRA adapter
> 
> 优点：
> 可以动态切换 LoRA
> 
> 方式 B
> Base Model + LoRA
>         ↓
>       Merge
>         ↓
> Merged Model
> 优点：
> 推理结构更简单
> ```


## QLoRA
> [!links]
> 🚧 https://github.com/artidoro/qlora?tab=readme-ov-file
> 📄 https://arxiv.org/abs/2305.14314 (paper)
> 🤗 https://huggingface.co/timdettmers (Adapter Weights)
> 🚗 https://huggingface.co/timdettmers (demo)

"QLoRA: Efficient Finetuning of Quantized LLMs", an effort to democratize access to LLM research.

QLoRA uses [bitsandbytes](https://github.com/TimDettmers/bitsandbytes) for quantization and is integrated with Hugging Face's [PEFT](https://github.com/huggingface/peft) and [transformers](https://github.com/huggingface/transformers/) libraries. QLoRA was developed by members of the [University of Washington's UW NLP group](https://twitter.com/uwnlp?s=20).

 >[!quote] 🤖 GPT 6.0 Astra
 >https://chatgpt.com/share/6ac339b7-0594-83ec-9040-af3fe3980e92
 >
 >QLoRA 可以简单理解成：
 >$\text{QLoRA} = \text{Quantization} + \text{LoRA}$
 >
 >普通 LoRA:
 >```
 >Base Model
 >FP16 / BF16
 >+
 >LoRA
 >FP16/BF16
 >```
 >
 >QLoRA：
 >```
 >Base Model
 >4-bit quantized
 >冻结
 >+
 >LoRA
 >BF16 / FP16
 >训练
 >```
 >
 >所以一个 7B 模型：
 >FP16 权重大约需要：
 >$7B \times 2 bytes \approx 14GB$
 >
 >如果量化到 4-bit，理论权重大小大约：
 >$7B \times 0.5 bytes \approx 3.5GB$
 >
 >再加上量化元数据、激活值等，实际会更多一些。
 >这也是为什么很多人可以在消费级 GPU 上微调 7B、14B，甚至更大的模型。



## Ref
