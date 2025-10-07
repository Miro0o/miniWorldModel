# LLM Training, Utilization, and Evaluation

[TOC]



## Res
### Related Topics
↗ [LLM Models Guide & Leaderboard](../🪜%20LLM%20Models%20Guide%20&%20Leaderboard/LLM%20Models%20Guide%20&%20Leaderboard.md)


### Other Resources
🏠 https://github.com/RUCAIBox/LLMSurvey
A collection of papers and resources related to Large Language Models.
The organization of papers refers to our survey [**"A Survey of Large Language Models"**](https://arxiv.org/abs/2303.18223). 
- Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)



## Intro
↗ [Deep Learning (Neural Networks)](../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/🌊%20Deep%20Learning%20(Neural%20Network)/Deep%20Learning%20(Neural%20Networks).md)
↗ [Transformers](../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/🌊%20Deep%20Learning%20(Neural%20Network)/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)



## 1️⃣ Pre-Training
↗ [Pre-Training](Pre-Training/Pre-Training.md)


### Data Preparation
↗ [Dataset Preparation](../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/🌊%20Deep%20Learning%20(Neural%20Network)/1️⃣%20Datasets%20Preparation/Dataset%20Preparation.md)

🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main?tab=readme-ov-file#llm-data (2025.01)
- [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - Open-Source Toolkit for Efficient Unstructured Data Processing with Pre-built Modules and Local to Cluster Scalability.
#### Commonly Used Corpora for Pre-training


### Neural Network Models & Architectures
↗ [Neural Network Models](../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/🌊%20Deep%20Learning%20(Neural%20Network)/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)

#### Analysis and Optimization for Model Inference

#### Complex Reasoning

#### Long Context Modeling


### Model Training
↗ [Model Training](../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/🌊%20Deep%20Learning%20(Neural%20Network)/3️⃣%20Model%20Training/Model%20Training.md)
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
> ↗ [Post-Training & Fine Tuning](Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)
> ↗ [LLM Adaptation & Alignment Tuning](Post-Training%20&%20Fine%20Tuning/LLM%20Adaptation%20&%20Alignment%20Tuning/LLM%20Adaptation%20&%20Alignment%20Tuning.md)

> 🔗 https://cameronrwolfe.substack.com/p/understanding-and-using-supervised

**Training LLMs.** The training process for language models typically proceeds in three phases; see below. First, we pretrain the language model, which is (by far) the most computationally-expensive step of training. From here, we perform alignment, typically via the [three-step framework](https://cameronrwolfe.substack.com/i/93578656/refining-llm-behavior) (see below) with supervised fine-tuning (SFT) and reinforcement learning from human feedback (RLHF)[1](https://cameronrwolfe.substack.com/p/understanding-and-using-supervised#footnote-1-136815345).

![](../../../../../../Assets/Pics/Pasted%20image%2020250831143544.png)

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240602204501.png)

The steps outlined above form the standardized training pipeline that is used for most state-of-the-art LLMs (e.g., ChatGPT or LLaMA-2 [3]). SFT and RLHF are computationally cheap compared to pretraining, but they require the curation of a dataset—either of high-quality LLM outputs or human feedback on LLM outputs — which can be difficult and time consuming.

Sometimes we have to do a bit more when applying an LLM to solve a downstream task. In particular, we can further specialize a language model (if needed) either via domain-specific fine-tuning or [in-context learning](https://cameronrwolfe.substack.com/i/123558334/different-types-of-learning); see below. Domain-specific fine-tuning simply trains the model further—_usually via a [language modeling objective](https://cameronrwolfe.substack.com/i/85568430/language-modeling), similarly to pretraining/SFT_—on data that is relevant to the downstream task, while in-context learning adds extra context or examples into the language model’s prompt to be used as context for solving a problem.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240602204515.png)

**What is alignment?** Finally, there is a term we have used several times in the above discussion that is important to understand: _alignment_. A pretrained language model is usually not useful. If we generate output with this model, the results will probably be repetitive and not very helpful. To create a more useful language model, we have to _align_ this model to the desires of the human user. In other words, instead of generating the most likely textual sequence, our language model learns to generate the textual sequence that is desired by a user.

> _“For our collection of preference annotations, we focus on helpfulness and safety. Helpfulness refers to how well Llama 2-Chat responses fulfill users’ requests and provide requested information; safety refers to whether Llama 2-Chat’s responses are unsafe.”_ - from [5]

Such alignment, which is accomplished via the three-step framework with SFT and RLHF outlined above, can be used to encourage a variety of behaviors and properties within an LLM. Typically, those training the model select a set of one or a few criteria that are emphasized throughout the alignment process. Common alignment criteria include: improving instruction following capabilities, discouraging harmful output, making the LLM more helpful, and many more. For example, [LLaMA-2](https://cameronrwolfe.substack.com/p/llama-2-from-the-ground-up) [5] is aligned to be _i)_ helpful and _ii)_ harmless/safe; see above.



## 3️⃣ Utilization & Prompt Engineering
↗ [LLM Utilization & Prompt Engineering](LLM%20Utilization%20&%20Prompt%20Engineering/LLM%20Utilization%20&%20Prompt%20Engineering.md)


### In-Context Learning (ICL)
↗ [Context Engineering & ICL (In-Context Learning)](LLM%20Utilization%20&%20Prompt%20Engineering/Context%20Engineering%20&%20ICL%20(In-Context%20Learning).md)


### Chain-of-Thought (CoT)
↗ [CoT (Chain-of-Thought)](LLM%20Utilization%20&%20Prompt%20Engineering/CoT%20(Chain-of-Thought).md)


### Retrieval Augmented Generation (RAG)
↗ [RAG (Retrieval Augmented Generation)](LLM%20Utilization%20&%20Prompt%20Engineering/RAG%20(Retrieval%20Augmented%20Generation).md)



## 4️⃣ Evaluation
> ↗ [LLM Models Guide & Leaderboard](../🪜%20LLM%20Models%20Guide%20&%20Leaderboard/LLM%20Models%20Guide%20&%20Leaderboard.md)


### Basic Ability


### Advanced Ability


### Evaluation Approaches & Benchmarking
> 🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main?tab=readme-ov-file#llm-evaluation (2025.01)

**Evaluation**
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - A framework for few-shot evaluation of language models.
- [MixEval](https://github.com/Psycoy/MixEval) - A reliable click-and-go evaluation suite compatible with both open-source and proprietary models, supporting MixEval and other benchmarks.
- [lighteval](https://github.com/huggingface/lighteval) - a lightweight LLM evaluation suite that Hugging Face has been using internally.
- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - a repository for evaluating open language models.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - This repository contains code to quantitatively evaluate instruction-tuned models such as Alpaca and Flan-T5 on held-out tasks.
- [simple-evals](https://github.com/openai/simple-evals) - Eval tools by OpenAI.
- [Giskard](https://github.com/Giskard-AI/giskard) - Testing & evaluation library for LLM applications, in particular RAGs
- [LangSmith](https://www.langchain.com/langsmith) - a unified platform from LangChain framework for: evaluation, collaboration HITL (Human In The Loop), logging and monitoring LLM applications.
- [Ragas](https://github.com/explodinggradients/ragas) - a framework that helps you evaluate your Retrieval Augmented Generation (RAG) pipelines.

> 🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main?tab=readme-ov-file#llm-leaderboard (2025.01)

**Benchmarking**
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - a benchmark platform for large language models (LLMs) that features anonymous, randomized battles in a crowdsourced manner.
- [LiveBench](https://livebench.ai/#/) - A Challenging, Contamination-Free LLM Benchmark.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - aims to track, rank, and evaluate LLMs and chatbots as they are released.
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - An Automatic Evaluator for Instruction-following Language Models using Nous benchmark suite.
- [ACLUE](https://github.com/isen-zhang/ACLUE) - an evaluation benchmark focused on ancient Chinese language comprehension.
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - A pioneering benchmark specifically designed to assess honesty in LLMs comprehensively.
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - evaluates LLM's ability to call external functions/tools.
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - an expert-driven benchmark for Chineses LLMs.
- [CompassRank](https://rank.opencompass.org.cn/) - CompassRank is dedicated to exploring the most advanced language and visual models, offering a comprehensive, objective, and neutral evaluation reference for the industry and research.
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - a benchmark evaluating QA methods that operate over a mixture of heterogeneous input sources (KB, text, tables, infoboxes).
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - a benchmark for evaluating the performance of large language models (LLMs) in various tasks related to both textual and visual imagination.
- [FELM](https://hkust-nlp.github.io/felm) - a meta-benchmark that evaluates how well factuality evaluators assess the outputs of large language models (LLMs).
- [InfiBench](https://infi-coder.github.io/infibench) - a benchmark designed to evaluate large language models (LLMs) specifically in their ability to answer real-world coding-related questions.
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - a benchmark designed to evaluate large language models in the legal domain.
- [LLMEval](http://llmeval.com/) - focuses on understanding how these models perform in various scenarios and analyzing results from an interpretability perspective.
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - a benchmark that evaluates large language models on a variety of multimodal reasoning tasks, including language, natural and social sciences, physical and social commonsense, temporal reasoning, algebra, and geometry.
- [MathEval](https://matheval.ai/) - a comprehensive benchmarking platform designed to evaluate large models' mathematical abilities across 20 fields and nearly 30,000 math problems.
- [MixEval](https://mixeval.github.io/#leaderboard) - a ground-truth-based dynamic benchmark derived from off-the-shelf benchmark mixtures, which evaluates LLMs with a highly capable model ranking (i.e., 0.96 correlation with Chatbot Arena) while running locally and quickly (6% the time and cost of running MMLU).
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - a benchmark that evaluates large language models' ability to answer medical questions across multiple languages.
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - a multimodal question-answering benchmark designed to evaluate AI models' cognitive ability to understand human beliefs and goals.
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - a benchmark for evaluating AI models across multiple academic disciplines like math, physics, chemistry, biology, and more.
- [PubMedQA](https://pubmedqa.github.io/) - a biomedical question-answering benchmark designed for answering research-related questions using PubMed abstracts.
- [SciBench](https://scibench-ucla.github.io/#leaderboard) - benchmark designed to evaluate large language models (LLMs) on solving complex, college-level scientific problems from domains like chemistry, physics, and mathematics.
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - a benchmark platform designed for evaluating large language models (LLMs) on a range of tasks, particularly focusing on their performance in different aspects such as natural language understanding, reasoning, and generalization.
- [SuperLim](https://lab.kb.se/leaderboard/results) - a Swedish language understanding benchmark that evaluates natural language processing (NLP) models on various tasks such as argumentation analysis, semantic similarity, and textual entailment.
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - a large-scale Document Visual Question Answering (VQA) dataset designed for complex document understanding, particularly in financial reports.
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - a large-scale question-answering benchmark focused on real-world financial data, integrating both tabular and textual information.
- [VisualWebArena](https://jykoh.com/vwa) - a benchmark designed to assess the performance of multimodal web agents on realistic visually grounded tasks.
- [We-Math](https://we-math.github.io/#leaderboard) - a benchmark that evaluates large multimodal models (LMMs) on their ability to perform human-like mathematical reasoning.
- [WHOOPS!](https://whoops-benchmark.github.io/) - a benchmark dataset testing AI's ability to reason about visual commonsense through images that defy normal expectations.


### Empirical Evaluation


### 🤔 Issues & Improvements
#### Hallucination



## Ref
[Understanding and Using Supervised Fine-Tuning (SFT) for Language Models | Cameron R. Wolfe, Ph.D.]: https://cameronrwolfe.substack.com?utm_source=navbar&utm_medium=web
