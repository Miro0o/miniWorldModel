# Instruction Tuning

[TOC]



## Res
### Related Topics
↗ [Supervised Learning](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Supervised%20Learning/Supervised%20Learning.md)
↗ [SFT (Supervised Fine Tuning)](../Fine%20Tuning%20Methods/SFT%20(Supervised%20Fine%20Tuning)/SFT%20(Supervised%20Fine%20Tuning).md)



## Intro
> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

In essence, instruction tuning is the approach to fine-tuning pre-trained LLMs on a collection of formatted instances in the form of natural language [67], which is highly related to supervised fine-tuning [66] and multi-task prompted training [28]. In order to perform instruction tuning, we first need to collect or construct instruction-formatted instances. Then, we employ these formatted instances to fine-tune LLMs in a supervised learning way (e.g., training with the sequence-to-sequence loss). After instruction tuning, LLMs can demonstrate superior abilities to generalize to unseen tasks [28, 67, 69], even in a multilingual setting [94]. 

A recent survey [331] presents a systematic overview of the research on instruction tuning. In comparison to that, we mainly focus on the effect of instruction tuning on LLMs and provide detailed guidelines or strategies for instance collection and tuning. In addition, we also discuss the use of instruction tuning for satisfying the real needs of users, which has been widely applied in existing LLMs, e.g., InstructGPT [66] and GPT-4 [46].



## Formatted Instance Construction



## Instruction Tuning Strategies



## The Effect of Instruction Tuning
### Performance Improvement
> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

Despite being tuned on a moderate number of instances, instruction tuning has become an important way to improve or unlock the abilities of LLMs [69]. Recent studies have experimented with language models in multiple scales (ranging from 77M to 540B), showing that the models of different scales can all benefit from instruction tuning [69, 334], yielding improved performance as the parameter scale increases [94]. Further, smaller models with instruction tuning can even perform better than larger models without fine-tuning [28, 69]. Besides the model scale, instruction tuning demonstrates consistent improvements in various model architectures, pre-training objectives, and model adaptation methods [69]. In practice, instruction tuning offers a general approach to enhancing the abilities of existing language models [69] (including small-sized PLMs). Also, it is much less costly than pretraining, since the amount of instruction data required by LLMs is significantly smaller than pre-training data.


### Task Generalization
> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

Instruction tuning encourages the model to understand natural language instructions for task completion. It endows LLMs with the ability (often considered as an emergent ability) to follow human instructions [31] to perform specific tasks without demonstrations, even on unseen tasks [69]. A large number of studies have confirmed the effectiveness of instruction tuning to achieve superior performance on both seen and unseen tasks [95, 334]. Also, instruction tuning has been shown to be useful in alleviating several weaknesses of LLMs (e.g., repetitive generation or complementing the input without accomplishing a certain task) [66, 69], leading to a superior capacity to solve real-world tasks for LLMs. Furthermore, LLMs trained with instruction tuning can generalize to related tasks across languages. For example, BLOOMZ-P3 [94] is fine-tuned based on BLOOM [78] using English-only task collection P3 [180]. Interestingly, BLOOMZ-P3 can achieve a more than 50% improvement in multilingual sentence completion tasks compared to BLOOM, which shows that instruction tuning can help LLMs acquire general task skills from English-only datasets and transfer such skills into other languages [94]. In addition, it has been found that using English-only instructions can produce satisfactory results on multilingual tasks [94], which helps reduce the effort of instruction engineering for a specific language.


### Domain Specialization
> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

Existing LLMs have showcased superior capabilities in traditional NLP tasks (e.g., generation and reasoning) and daily questions. However, they may still lack domain knowledge to accomplish specific tasks, such as medicine, law, and finance (See Section 8 for a detailed discussion of LLMs in different applications). Instruction tuning is an effective approach to adapting existing general LLMs to be domain-specific experts. For instance, researchers propose to fine-tune Flan-PaLM [69] using medical datasets to create Med-PaLM [354], a medical knowledge assistant that achieves performance levels comparable to those of expert clinicians. Furthermore, a recent study [355] fine-tunes FLAN-T5 to support e-commerce recommender systems with natural language instructions, showing strong performance in a variety of recommendation tasks. There are also several open-sourced medical models instructiontuned based on LLaMA [57], such as BenTsao [356]. Also, researchers explore instruction tuning on law [357], finance [358], and arithmetic computation [359].



## Empirical Analysis of Instruction Tuning



## Ref
