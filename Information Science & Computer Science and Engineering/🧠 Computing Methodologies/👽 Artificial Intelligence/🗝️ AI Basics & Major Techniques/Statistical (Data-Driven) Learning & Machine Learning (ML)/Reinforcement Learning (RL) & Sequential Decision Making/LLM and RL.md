# LLM and RL

[TOC]



## Res
### Related Topics
↗ [LLM (Large Language Model)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
↗ [Post-Training & Fine Tuning](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)
- ↗ [RLFT (Reinforcement Learning Fine Tuning)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning).md)
- ↗ [RLHF (RL from Human Feedback)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20&%20Regimes/RLHF%20(RL%20from%20Human%20Feedback).md)

↗ [RLM (Reasoning Language Model) & LRM (Large Reasoning Model)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/RLM%20(Reasoning%20Language%20Model)%20&%20LRM%20(Large%20Reasoning%20Model).md)


### Papers
Xu, F., Hao, Q., Zong, Z., Wang, J., Zhang, Y., Wang, J., ... & Li, Y. (2025). Towards large reasoning models: A survey of reinforced reasoning with large language models. _arXiv preprint arXiv:2501.09686_.

Bandyopadhyay, D., Bhattacharjee, S., & Ekbal, A. (2025). Thinking machines: A survey of llm based reasoning strategies. _arXiv preprint arXiv:2503.10814_.

Ke, Z., Jiao, F., Ming, Y., Nguyen, X. P., Xu, A., Long, D. X., ... & Joty, S. (2025). A survey of frontiers in llm reasoning: Inference scaling, learning to reason, and agentic systems. arXiv preprint arXiv:2504.09037.


### Learning Resources
Reinforcement Learning for Large Language Models -- A Complete Guide from Foundations to Frontiers -- Theory, Practice, and Production from the Ground Up
Arun Shankar Applied AI, Google


### Other Resources
W. Brown. Generative AI Handbook: A Roadmap for Learning Resources. 2024.
https: //genai-handbook.github.io

C. Laidlaw, E. Bronstein, T. Guo, D. Feng, L. Berglund, J. Svegliato, S. Russell, and A. Dragan. “AssistanceZero: Scalably Solving Assistance Games”. In: ICML. Apr. 2025.
https://arxiv.org/abs/2504.07091



## Intro
### Why RL For AI /LLM?


### Reinforcement Learning: Foundations & Overview
↗ [Reinforcement Learning (RL) & Sequential Decision Making](Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)


### RL for LLM Overview


### RL at Different Training Stages of LLM
> [!links]
> ↗ [LLM Training, Utilization, and Evaluation](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training,%20Utilization,%20and%20Evaluation.md)
> ↗ [Pre-Training](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Pre-Training/Pre-Training.md)
> ↗ [Post-Training & Fine Tuning](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)

Reinforcement learning isn’t just something you add at the end! You can apply RL at different points in a model’s li e cycle, each with different benefits and costs:
1. During Pre-training/Continued Pre-training - Teaching  fundamental capabilities
2. During Fine-tuning - Aligning with human preferences
3. During Inference - Spending extra compute per query
4. Continuous/Online Learning - Adapting  rom production traffic

Think if these like different times to teach a skill:
- Pre-training RL = Teaching a child  foundational problem-solving
- Fine-tuning RL = Teaching specific preferences (be polite, be concise)
- Inference RL = Taking time to "think" be ore answering
- Online RL = Learning  from every conversation you have
#### RL During Pre-Training


#### RL During Post-Training & RLFT (RL Fine Tuning) ⭐
> [!links]
> ↗ [RLFT (Reinforcement Learning Fine Tuning)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning).md)

> 📄 Murphy, K. (2025). _Reinforcement Learning: An Overview_ (No. arXiv:2412.05265). arXiv. https://doi.org/10.48550/arXiv.2412.05265

LLMs are usually trained with behavior cloning, i.e., MLE on a fixed dataset, such as a large text corpus scraped from the web. This is called pre-training. We can then improve their performance using various post-training methods, which are designed to improve their capabilities and alignment with human preferences (see e.g., [Zen+25]), as opposed to just being generative models of the data seen on the web. A simple way to perform post-training is to use instruction fine tuning, also called supervised fine-tuning (or SFT), in which we collect human demonstrations of (prompt, response) pairs, and fine-tune the model on them. However, it is very difficult to collect sufficient quantities of such data. An alternative to demonstrating good behaviors is to use RL to train the model using a suitable reward function. (We discuss where these reward functions come from in Section 6.1.2.) This is called reinforcement learning fine-tuning or RLFT. 

RLFT can be preferable to SFT for several reasons. First, it is often the case that verification is easier than generation (e.g., it is easier to ask people which answer they prefer rather than to ask them to generate good answers, an insight we exploit in Section 6.1.2.3). Second, RL can be used to learn a set of “thinking actions”, which are created in response to the question before generating the answer (see Section 6.1.4). For complex problems (e.g., in math), this tends to work much better than trying to directly learn an input-output mapping [PLG23]. (It is possible to use SFT on explicitly provided thinking traces, but it has been found that RL can generalize more reliably [Chu+25].) Finally, RL opens the path to super-human performance [SS25], going beyond whatever supervised examples humans can create.

#### RL During Inference (Test-Time Compute)

#### Continuous /Online  RL From Production


### Outcome/ Result Rewards 🆚 Process Rewards



## Foundational RL
### REINFORCE
↗ [REINFORCE](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20Algorithms/REINFORCE.md)


### PPO
↗ [PPO (Proximal Policy Optimization)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20Algorithms/PPO%20(Proximal%20Policy%20Optimization).md)


### DPO (Direct Preference Optimization)
↗ [DPO (Direct Preference Optimization)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20Algorithms/DPO%20(Direct%20Preference%20Optimization).md)



## Evolution of RL For LLM
### Deepseek & GRPO
↗ [GRPO (Group Relative PPO)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20Algorithms/GRPO%20(Group%20Relative%20PPO).md)

### RLOO

### KTO

### IPO

### ORPO


### Self-Play and Iterative Methods
↗ [RL with Self-Learning](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20&%20Regimes/RL%20with%20Self-Learning.md)


### Multi-Object RL


### Rejection Sampling & Decoding Strategies


### Verifier-Guided Generation
↗ [RLVR & RLVP (RL with Verifiable Rewards & Path)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20&%20Regimes/RLVR%20&%20RLVP%20(RL%20with%20Verifiable%20Rewards%20&%20Path).md)



## RL For Specific Domains in LLM



## Ref
