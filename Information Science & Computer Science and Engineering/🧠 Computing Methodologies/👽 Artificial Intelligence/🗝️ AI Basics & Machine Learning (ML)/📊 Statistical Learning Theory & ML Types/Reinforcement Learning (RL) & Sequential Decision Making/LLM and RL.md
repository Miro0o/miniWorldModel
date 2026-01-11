# LLM and RL

[TOC]



## Res
### Related Topics
↗ [LLM (Large Language Model)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
↗ [Post-Training & Fine Tuning](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)
- ↗ [RLFT (Reinforcement Learning Fine Tuning)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning).md)
- ↗ [RLHF (RL from Human Feedback)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20for%20RLFT/RLHF%20(RL%20from%20Human%20Feedback).md)


### Papers
Xu, F., Hao, Q., Zong, Z., Wang, J., Zhang, Y., Wang, J., ... & Li, Y. (2025). Towards large reasoning models: A survey of reinforced reasoning with large language models. _arXiv preprint arXiv:2501.09686_.

Bandyopadhyay, D., Bhattacharjee, S., & Ekbal, A. (2025). Thinking machines: A survey of llm based reasoning strategies. _arXiv preprint arXiv:2503.10814_.

Ke, Z., Jiao, F., Ming, Y., Nguyen, X. P., Xu, A., Long, D. X., ... & Joty, S. (2025). A survey of frontiers in llm reasoning: Inference scaling, learning to reason, and agentic systems. arXiv preprint arXiv:2504.09037.


### Others
W. Brown. Generative AI Handbook: A Roadmap for Learning Resources. 2024.
https: //genai-handbook.github.io

C. Laidlaw, E. Bronstein, T. Guo, D. Feng, L. Berglund, J. Svegliato, S. Russell, and A. Dragan. “AssistanceZero: Scalably Solving Assistance Games”. In: ICML. Apr. 2025.
https://arxiv.org/abs/2504.07091



## Intro



## RL for LLM: RL Fine Tuning (RLFT)
> ↗ [RLFT (Reinforcement Learning Fine Tuning)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning).md)
> 
> 📄 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265

LLMs are usually trained with behavior cloning, i.e., MLE on a fixed dataset, such as a large text corpus scraped from the web. This is called pre-training. We can then improve their performance using various post-training methods, which are designed to improve their capabilities and alignment with human preferences (see e.g., [Zen+25]), as opposed to just being generative models of the data seen on the web. A simple way to perform post-training is to use instruction fine tuning, also called supervised fine-tuning (or SFT), in which we collect human demonstrations of (prompt, response) pairs, and fine-tune the model on them. However, it is very difficult to collect sufficient quantities of such data. An alternative to demonstrating good behaviors is to use RL to train the model using a suitable reward function. (We discuss where these reward functions come from in Section 6.1.2.) This is called reinforcement learning fine-tuning or RLFT. 

RLFT can be preferable to SFT for several reasons. First, it is often the case that verification is easier than generation (e.g., it is easier to ask people which answer they prefer rather than to ask them to generate good answers, an insight we exploit in Section 6.1.2.3). Second, RL can be used to learn a set of “thinking actions”, which are created in response to the question before generating the answer (see Section 6.1.4). For complex problems (e.g., in math), this tends to work much better than trying to directly learn an input-output mapping [PLG23]. (It is possible to use SFT on explicitly provided thinking traces, but it has been found that RL can generalize more reliably [Chu+25].) Finally, RL opens the path to super-human performance [SS25], going beyond whatever supervised examples humans can create.



## LLM for RL



## Ref
