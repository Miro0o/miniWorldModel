# RLFT (Reinforcement Learning Fine Tuning)

[TOC]



## Res
### Related Topics
↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/Statistical%20Learning%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
↗ [LLM and RL](../../../../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/Statistical%20Learning%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/LLM%20and%20RL.md)


### Papers


### Other Resources



## Intro
> 📄 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265

LLMs are usually trained with behavior cloning, i.e., MLE on a fixed dataset, such as a large text corpus scraped from the web. This is called pre-training. We can then improve their performance using various post-training methods, which are designed to improve their capabilities and alignment with human preferences (see e.g., [Zen+25]), as opposed to just being generative models of the data seen on the web. A simple way to perform post-training is to use instruction fine tuning, also called supervised fine-tuning (or SFT), in which we collect human demonstrations of (prompt, response) pairs, and fine-tune the model on them. However, it is very difficult to collect sufficient quantities of such data. An alternative to demonstrating good behaviors is to use RL to train the model using a suitable reward function. (We discuss where these reward functions come from in Section 6.1.2.) This is called reinforcement learning fine-tuning or RLFT. 

RLFT can be preferable to SFT for several reasons. First, it is often the case that verification is easier than generation (e.g., it is easier to ask people which answer they prefer rather than to ask them to generate good answers, an insight we exploit in Section 6.1.2.3). Second, RL can be used to learn a set of “thinking actions”, which are created in response to the question before generating the answer (see Section 6.1.4). For complex problems (e.g., in math), this tends to work much better than trying to directly learn an input-output mapping [PLG23]. (It is possible to use SFT on explicitly provided thinking traces, but it has been found that RL can generalize more reliably [Chu+25].) Finally, RL opens the path to super-human performance [SS25], going beyond whatever supervised examples humans can create.



## Reword Models



## RLFT Algorithms



## Ref
