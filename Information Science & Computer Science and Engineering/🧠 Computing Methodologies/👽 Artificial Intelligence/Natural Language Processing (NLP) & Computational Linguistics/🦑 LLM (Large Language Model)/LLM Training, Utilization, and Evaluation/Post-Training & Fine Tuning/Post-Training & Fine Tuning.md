# Post-Training & Fine Tuning

[TOC]



## Res
### Related Topics



### Commonly Used Datasets for Fine-tuning


### Papers
[Multitask Prompted Training Enables Zero-Shot Task Generalization](https://arxiv.org/pdf/2110.08207.pdf). _Victor Sanh, Albert Webson, Colin Raffel, Stephen H. Bach, Lintang A. Sutawika, Zaid Alyafeai, Antoine Chaffin, Arnaud Stiegler, Teven Le Scao, Arun Raja, Manan Dey, M SAIFUL BARI, Canwen Xu, Urmish Thakker, Shanya Sharma Sharma, Eliza Szczechla, Taewoon Kim, Gunjan Chhablani, Nihal V. Nayak, Debajyoti Datta, Jonathan Chang, Mike Tian-Jian Jiang, Han Wang, Matteo Manica, Sheng Shen, Zheng Xin Yong, Harshit Pandey, Rachel Bawden, Thomas Wang, Trishala Neeraj, Jos Rozen, Abheesht Sharma, Andrea Santilli, Thibault Févry, Jason Alan Fries, Ryan Teehan, Stella Rose Biderman, Leo Gao, T. Bers, Thomas Wolf, Alexander M. Rush_. 2021. Introduces **T0** from BigScience.
[Finetuned Language Models Are Zero-Shot Learners](https://arxiv.org/pdf/2109.01652.pdf). _Jason Wei, Maarten Bosma, Vincent Zhao, Kelvin Guu, Adams Wei Yu, Brian Lester, Nan Du, Andrew M. Dai, Quoc V. Le_. 2021. Introduces **FLAN** from Google.
    
[Prefix-Tuning: Optimizing Continuous Prompts for Generation](https://arxiv.org/pdf/2101.00190.pdf). _Xiang Lisa Li, Percy Liang_. ACL/IJCNLP 2021.
[Training language models to follow instructions with human feedback](https://cdn.openai.com/papers/Training_language_models_to_follow_instructions_with_human_feedback.pdf).Long Ouyang, Jeff Wu Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell†, Peter Welinder, Paul Christiano, Jan Leike, Ryan Lowe. InstructGPT paper.

[The Power of Scale for Parameter-Efficient Prompt Tuning](https://arxiv.org/pdf/2104.08691.pdf), Brian Lester, Rami Al-Rfou, Noah Constant. EMNLP 2021. Introduces prompt tuning.

[Towards a Unified View of Parameter-Efficient Transfer Learning](https://arxiv.org/pdf/2110.04366.pdf), Junxian He, Chunting Zhou, Xuezhe Ma, Taylor Berg-Kirkpatrick, Graham Neubig. ICLR 2022.

[P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally Across Scales and Tasks](https://arxiv.org/pdf/2110.07602.pdf), Xiao Liu, Kaixuan Ji, Yicheng Fu, Zhengxiao Du, Zhilin Yang, Jie Tang. arXiv 2021.


### Other Resources
https://stanford-cs324.github.io/winter2022/lectures/adaptation/
CS324 - Large Language Model | Stanford



## Intro
> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

After pre-training, LLMs can acquire the general abilities for solving various tasks. However, an increasing number of studies have shown that **LLM’s abilities can be further adapted according to specific goals.** In this section, we introduce two major approaches to adapting pre-trained LLMs, namely instruction tuning and alignment tuning. The former approach mainly aims to enhance (or unlock) the abilities of LLMs, while the latter approach aims to align the behaviors of LLMs with human values or preferences. Further, we will also discuss efficient tuning and quantization for model adaptation in resource-limited settings. In what follows, we will introduce the four parts in detail.

> 🤖 GPT-5
> Difference between instruction tuning and alignment tuning

**instruction tuning teaches the model _what to do_**, while **alignment tuning teaches it _how it should behave_**. They overlap in practice, but they target different problems.

Think of an LLM as:
- **Pretraining** → learns language  
- **Instruction tuning** → learns _obedience_  
- **Alignment tuning** → learns _judgment_

| Dimension              | Instruction Tuning         | Alignment Tuning                      |
| ---------------------- | -------------------------- | ------------------------------------- |
| Main question          | “What should I do?”        | “What should I _not_ do or _prefer_?” |
| Training signal        | Correct responses          | Preference comparisons / rewards      |
| Focus                  | Capability & usability     | Behavior & values                     |
| Output space           | Task-correct answers       | Acceptable / preferred answers        |
| Failure mode addressed | Not following instructions | Being harmful, rude, or misleading    |

In real pipelines:
- Instruction datasets already contain implicit alignment (polite tone, refusals)
- Alignment tuning often improves instruction following (via preference learning)
- RLHF models usually start from instruction-tuned checkpoints
So the distinction is **conceptual**, not strictly procedural.


### Instruction Tuning
↗ [Instruction Tuning](Fine%20Tuning%20Directions/Instruction%20Tuning.md)

> 🤖 GPT-5

What it is
Instruction tuning trains the model on **(instruction → response)** pairs so it learns to _follow user commands_.

Example data:
```
Instruction: Summarize the following text in one paragraph. 
Response: ...
```

Goal
Make the model:
- Understand what the user wants
- Produce task-appropriate outputs
- Generalize to _unseen instructions_

What it improves
- Task following
- Zero-shot / few-shot performance
- Helpfulness and usability

Typical datasets
- Human-written instructions (e.g. early InstructGPT)
- Synthetic instruction data (self-instruct, Alpaca-style)
- Task mixtures (QA, summarization, reasoning, coding)

Key property
After instruction tuning: The model **responds to prompts as commands, not just text continuation**


### Alignment Tuning
↗ [LLM Adaptation & Alignment Tuning](Fine%20Tuning%20Directions/LLM%20Adaptation%20&%20Alignment%20Tuning.md)

> 🤖 GPT-5

What it is
Alignment tuning trains the model to:
- Follow **human preferences**
- Respect **safety norms**
- Avoid **harmful, misleading, or unwanted behavior**
This is less about _task execution_ and more about _behavioral constraints_.

Goal
Make the model:
- Helpful _and_ safe
- Honest about uncertainty
- Polite, non-toxic, non-manipulative
- Resistant to misuse

What it improves
- Safety (refusals, moderation)
- Tone and social behavior
- Preference alignment (“this answer is better than that one”)

Typical methods
- **RLHF** (Reinforcement Learning from Human Feedback)
- **RLAIF** (AI feedback instead of humans)
- **Preference optimization** (DPO, IPO, KTO, etc.)
- Constitutional AI

Key property
After alignment tuning: The model chooses **acceptable answers among many valid ones**



## Ref
[Make Post Train Solid Again - ybq的文章 - 知乎]: https://zhuanlan.zhihu.com/p/1995265459285694156 (2026.01)
LLM 论文千千万，有用的工作却没几篇。这篇文章，我想简单讨论下到底该如何把后训练工作做的 solid。文章并没什么技术细节，大家随便看看。
- 敲定正确的 Baseline
- 少用 sense 挑战 math
- 大小模型的结论谨慎迁移
- simple yet effective
	- 过去一年在纯语言模型领域，几乎只有两个工作是得到了业界所有同行的认可：上半年的利用 ORM 提升模型推理能力，下半年的利用 TIS / IcePop 保证训推一致性，都是 simple yet effective 的完美代言。
	- 这里，我们重点回顾一下训推不一致：2024 年所有同行就都知道 vllm、model.generate、megatron 前向算子，这之间的结果有较大差异；2025 年从 TIS 提出到 ICEpop 的这段时间内，几乎所有同行者都能想到 IcePop 的方案。大家都曾有机会提出这两个算法，但把握住机会的就是那两篇 Notion 分享，行动力强、实验严谨、理论扎实，两个团队配得上大家的赞扬。话说回来，连 TIS 这种 simple 的 idea 都埋没了一年才被广而告之，围绕着 LLM 的 policy gradient 算法必有宝藏等着大家去挖掘。
	- 从经验上来说，如果某个工作的核心步骤不是两句话能概括出来的，那这个工作似乎离雕花标签也不远了。目前的 LLM，找不到什么 solid 的工作是不 simple 的。
	