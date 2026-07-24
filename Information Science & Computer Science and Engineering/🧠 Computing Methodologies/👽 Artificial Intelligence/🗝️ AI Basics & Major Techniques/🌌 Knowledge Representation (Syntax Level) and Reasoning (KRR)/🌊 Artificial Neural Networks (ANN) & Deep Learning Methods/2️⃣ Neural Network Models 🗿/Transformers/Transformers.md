# Transformers

[TOC]



## Res
### Related Topics
↗ [Natural Language Processing (NLP) & Computational Linguistics](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics.md)
↗ [LLM (Large Language Model)](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)

↗ [AI4X, AGI (Artificial General Intelligence) & AIGC](../../../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC.md)


### Learning Resources
https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&si=AUDMGwyz7-yL33Xd
Neural networks | 3Blue1Brown
- [But what is a neural network? | Deep learning chapter 1](https://youtu.be/aircAruvnKk?si=RiyEviyfGbC8YwS0)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://youtu.be/IHZwWFHWa-w?si=DqZgN_65JZfHX-81)
- [Backpropagation, intuitively | Deep Learning Chapter 3](https://youtu.be/Ilg3gGewQ5U?si=yYl6Vi6Sb-NxWbh5)
- [Backpropagation calculus | Deep Learning Chapter 4](https://youtu.be/tIeHLnjs5U8?si=w84SrOkyDnMwKSk7)
- [Large Language Models explained briefly](https://youtu.be/LPZh9BOjkQs?si=7CRyWTVnx3BIGQGy)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://youtu.be/wjZofJX0v4M?si=cLC36CWJiJPKQJgT)
	- 【【官方双语】GPT是什么？直观解释Transformer | 深度学习第5章-哔哩哔哩】 https://b23.tv/rcO76mO
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://youtu.be/eMlx5fFNoYc?si=UqpVj1vDxOtWAnlc)
	- 【【官方双语】直观解释注意力机制，Transformer的核心 | 【深度学习第6章】-哔哩哔哩】 https://b23.tv/f0udg4P
- [How might LLMs store facts | Deep Learning Chapter 7](https://youtu.be/9-Jl0dxWQs8?si=jJPuNPfLV6AtWNJa)

👍 https://poloclub.github.io/transformer-explainer/ (This is a soo good explaination!)
Transformer Explainer
- Transformer Explainer features a live GPT-2 (small) model running directly in the browser. This model is derived from the PyTorch implementation of GPT by Andrej Karpathy's [nanoGPT project](https://github.com/karpathy/nanoGPT "Github") and has been converted to [ONNX Runtime](https://onnxruntime.ai/ "ONNX") for seamless in-browser execution. The interface is built using JavaScript, with [Svelte](https://kit.svelte.dev/ "Svelte") as a front-end framework and [D3.js](https://d3js.org/ "D3") for creating dynamic visualizations. Numerical values are updated live following the user input.
- Transformer Explainer was created by [Aeree Cho](https://aereeeee.github.io/), [Grace C. Kim](https://www.linkedin.com/in/chaeyeonggracekim/), [Alexander Karpekov](https://alexkarpekov.com/), [Alec Helbling](https://alechelbling.com/), [Jay Wang](https://zijie.wang/), [Seongmin Lee](https://seongmin.xyz/), [Benjamin Hoover](https://bhoov.com/), and [Polo Chau](https://poloclub.github.io/polochau/) at the Georgia Institute of Technology.

https://stanford-cs324.github.io/winter2022/lectures/selective-architectures/
CS324 - Large Language Model | Stanford


### Other Resources
https://faichou.com/posts/a-transformer-walkthrough/
From Embedding to Attention: A Transformer Walkthrough
February 11, 2026 / 28 min read



## Intro: The Original Transformer Architecture
> 🔗 https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)

In deep learning, transformer is a neural network architecture based on the multi-head attention mechanism, in which text is converted to numerical representations called tokens, and each token is converted into a vector via lookup from a word embedding table.[1] At each layer, each token is then contextualized within the scope of the context window with other (unmasked) tokens via a parallel multi-head attention mechanism, allowing the signal for key tokens to be amplified and less important tokens to be diminished.

Transformers have the advantage of having no recurrent units, therefore requiring less training time than earlier recurrent neural architectures (RNNs) such as long short-term memory (LSTM).[2] Later variations have been widely adopted for training large language models (LLMs) on large (language) datasets.[3]

The modern version of the transformer was proposed in the 2017 paper "Attention Is All You Need" by researchers at Google.[1] Transformers were first developed as an improvement over previous architectures for machine translation,[4][5] but have found many applications since. They are used in large-scale natural language processing, computer vision (vision transformers), reinforcement learning,[6][7] audio,[8] multimodal learning, robotics,[9] and even playing chess.[10] It has also led to the development of pre-trained systems, such as generative pre-trained transformers (GPTs)[11] and BERT[12] (bidirectional encoder representations from transformers).

![](../../../../../../../../Assets/Pics/Pasted%20image%2020250920191324.png)
<small>The Transformer - model architecture. <br> Vaswani, Ashish, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin. "Attention is all you need." Advances in neural information processing systems 30 (2017).</small>


### Tokenization & Embedding
#### Un-Embedding

#### Position Encoding


### Attention
↗ [Attention in Transformer & Efficient Implementation](Attention%20in%20Transformer%20&%20Efficient%20Implementation.md)

![](../../../../../../../../Assets/Pics/Screenshot%202025-09-04%20at%2020.14.39.png)
<small><a>https://poloclub.github.io/transformer-explainer/</a></small>


### FeedForward Network (MLPs)


### Probability



## Implementation of Transformer Architecture
> [!links]
> ↗ [Foundation Models & Development & SDKs](../../../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/Foundation%20Models%20&%20Development%20&%20SDKs.md)
> - ↗ [Tensorflow](../../../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/Hybrid%20Languages%20&%20Cross%20Platforms/📌%20Tensorflow/Tensorflow.md)
> - ↗ [PyTorch](../../../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/ML%20Programming%20&%20Frameworks/⭐️%20Python%20Based%20ML%20Libraries/📌%20PyTorch/PyTorch.md)



## ✨ Enhancements of Classical Transformer Architecture
> [!Links]
> ↗ [LLM (Large Language Model)](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
> ↗ [LLM Foundation Models List & Evaluation and Benchmarks & Leaderboard](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard.md)
> 
> ↗ [Natural Language Processing (NLP) & Computational Linguistics](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics.md)

```markdown
Transformer family tree

Attention Is All You Need (2017)
Full encoder–decoder Transformer
├─ Core idea:
│  self-attention + feed-forward blocks + residuals + positional encoding
│
├─ Encoder-only branch
│  └─ BERT (2018)
│     ├─ Bidirectional encoder pretraining
│     ├─ Best for understanding-style tasks
│     └─ Legacy today:
│        still important for embeddings, retrieval, classification, reranking
│
├─ Decoder-only branch
│  └─ GPT (2018)
│     ├─ Autoregressive / next-token prediction
│     ├─ Became the main line for generative LLMs
│     │
│     ├─ Long-context / positional improvements
│     │  ├─ Transformer-XL (2019)
│     │  │  └─ recurrence + longer effective context
│     │  └─ RoFormer / RoPE (2021)
│     │     └─ rotary position embedding
│     │
│     ├─ Inference-efficiency improvements
│     │  ├─ Multi-Query Attention (MQA)
│     │  └─ Grouped-Query Attention (GQA)
│     │
│     ├─ Feed-forward / normalization modernization
│     │  ├─ GLU / SwiGLU-style MLPs
│     │  └─ RMSNorm-style normalization
│     │
│     ├─ Sparse-scaling branch
│     │  └─ Switch Transformer / MoE (2021)
│     │     └─ only some experts active per token
│     │
│     └─ Mainstream modern LLMs
│        ├─ Dense decoder-only:
│        │  Llama 3.x, many Qwen models, many smaller open LLMs
│        ├─ MoE decoder-only:
│        │  DeepSeek-V3, Llama 4, some newer frontier/open models
│        └─ Multimodal decoder-centered systems:
│           text Transformer + vision/audio modules + fusion/cross-attention
│
└─ Encoder–decoder branch
   └─ T5 (2019/2020)
      ├─ “Text-to-text” unification
      ├─ Strong for translation, summarization, structured generation
      └─ Legacy today:
         still important, but less dominant than decoder-only for chat LLMs
```


### 1️⃣ Encoder–Decoder Architecture (seq2seq Transformers)
> [!quote]
> 🤖 ChatGPT 4
> - Keep the **full original structure**: encoder + decoder.
> - Encoder reads the input → decoder generates the output while attending to encoder states.
> - Example: **T5, BART, mBART, FLAN-T5**.
> - Use case: machine translation, summarization, text-to-text tasks.
> - **Key trait**: input processed fully, output generated step by step.

> [!Papers]
> Encoder-decoder architectures:
> - [BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension](https://arxiv.org/pdf/1910.13461.pdf). _M. Lewis, Yinhan Liu, Naman Goyal, Marjan Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Veselin Stoyanov, Luke Zettlemoyer_. ACL 2019. Introduces **BART** from Facebook.
> - [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://arxiv.org/pdf/1910.10683.pdf). _Colin Raffel, Noam M. Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, W. Li, Peter J. Liu_. J. Mach. Learn. Res. 2019. Introduces **T5** from Google.


### 2️⃣ Decoder-Only Transformer & LLM ⭐
> [!LINKS]
> ↗ [LLM Training, Utilization, and Evaluation](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training,%20Utilization,%20and%20Evaluation.md)
> 
> ↗ [DeepSeek](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/Main%20Stream%20General%20Models/DeepSeek/DeepSeek.md)
> ↗ [Alibaba Qwen](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/Main%20Stream%20General%20Models/Alibaba%20Qwen/Alibaba%20Qwen.md)
> ↗ [Zhipu GLM](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/Main%20Stream%20General%20Models/Zhipu%20GLM/Zhipu%20GLM.md)
> ↗ [MiniMax](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/Main%20Stream%20General%20Models/MiniMax.md)
> ↗ [Moonshot Kimi](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/Main%20Stream%20General%20Models/Moonshot%20Kimi/Moonshot%20Kimi.md)

> [!quote]
> 🤖 ChatGPT 4
> - Use **just the decoder** stack (with a slight tweak: _causal masking_, so a token only sees the left context).
> - Output: next-token probabilities → autoregressive generation.
> - Example: **GPT-2, GPT-3, GPT-4, Claude, Gemini, etc.**
> - Use case: text generation (chat, code, stories, reasoning).
> - **Key trait**: strictly left-to-right.
> 
> **Why LLMs are decoder-only**
> - Autoregressive generation (left-to-right) is a _natural fit_ for large-scale language modeling: “given this text, predict the next token.”
> - Simpler and more scalable than encoder–decoder.
> - Training objective: just next-token prediction (no special masking schemes like BERT).
> - Decoder-only models can also do “understanding” tasks by framing them as generation (e.g., “Classify this text: …”).

> [!Papers]
> Decoder-only architectures:
> - [Language Models are Unsupervised Multitask Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language-models.pdf). _Alec Radford, Jeff Wu, R. Child, D. Luan, Dario Amodei, Ilya Sutskever_. 2019. Introduces **GPT-2** from OpenAI.
> - [Language Models are Few-Shot Learners](https://arxiv.org/pdf/2005.14165.pdf). _Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, J. Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, T. Henighan, R. Child, A. Ramesh, Daniel M. Ziegler, Jeff Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, Dario Amodei_. NeurIPS 2020. Introduces **GPT-3** from OpenAI.
> - [Scaling Language Models: Methods, Analysis&Insights from Training Gopher](https://arxiv.org/pdf/2112.11446.pdf). _Jack W. Rae, Sebastian Borgeaud, Trevor Cai, Katie Millican, Jordan Hoffmann, Francis Song, J. Aslanides, Sarah Henderson, Roman Ring, Susannah Young, Eliza Rutherford, Tom Hennigan, Jacob Menick, Albin Cassirer, Richard Powell, G. V. D. Driessche, Lisa Anne Hendricks, Maribeth Rauh, Po-Sen Huang, Amelia Glaese, Johannes Welbl, Sumanth Dathathri, Saffron Huang, Jonathan Uesato, John F. J. Mellor, I. Higgins, Antonia Creswell, Nathan McAleese, Amy Wu, Erich Elsen, Siddhant M. Jayakumar, Elena Buchatskaya, D. Budden, Esme Sutherland, K. Simonyan, Michela Paganini, L. Sifre, Lena Martens, Xiang Lorraine Li, A. Kuncoro, Aida Nematzadeh, E. Gribovskaya, Domenic Donato, Angeliki Lazaridou, A. Mensch, J. Lespiau, Maria Tsimpoukelli, N. Grigorev, Doug Fritz, Thibault Sottiaux, Mantas Pajarskas, Tobias Pohlen, Zhitao Gong, Daniel Toyama, Cyprien de Masson d’Autume, Yujia Li, Tayfun Terzi, Vladimir Mikulik, I. Babuschkin, Aidan Clark, Diego de Las Casas, Aurelia Guy, Chris Jones, James Bradbury, Matthew Johnson, Blake A. Hechtman, Laura Weidinger, Iason Gabriel, William S. Isaac, Edward Lockhart, Simon Osindero, Laura Rimell, Chris Dyer, Oriol Vinyals, Kareem W. Ayoub, Jeff Stanway, L. Bennett, D. Hassabis, K. Kavukcuoglu, Geoffrey Irving_. 2021. Introduces **Gopher** from DeepMind.
> - [Jurassic-1: Technical details and evaluation](https://uploads-ssl.webflow.com/60fd4503684b466578c0d307/61138924626a6981ee09caf6_jurassic_tech_paper.pdf). _Opher Lieber, Or Sharir, Barak Lenz, Yoav Shoham_. 2021. Introduces **Jurassic** from AI21 Labs.
> 
> Modeling:
> - [Language Models are Unsupervised Multitask Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf). Introduces GPT-2.
> - [Attention is All you Need](https://arxiv.org/pdf/1706.03762.pdf). _Ashish Vaswani, Noam M. Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin_. NIPS 2017.
> - [Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
> - [CS224N slides on RNNs](http://web.stanford.edu/class/cs224n/slides/cs224n-2022-lecture06-fancy-rnn.pdf)
> - [CS224N slides on Transformers](http://web.stanford.edu/class/cs224n/slides/cs224n-2021-lecture09-transformers.pdf)
> - [Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation](https://arxiv.org/pdf/2108.12409.pdf). _Ofir Press, Noah A. Smith, M. Lewis_. 2021. Introduces **Alibi embeddings**.
> - [Transformer-XL: Attentive Language Models beyond a Fixed-Length Context](https://arxiv.org/pdf/1901.02860.pdf). _Zihang Dai, Zhilin Yang, Yiming Yang, J. Carbonell, Quoc V. Le, R. Salakhutdinov_. ACL 2019. Introduces recurrence on Transformers, relative position encoding scheme.
> - [Generating Long Sequences with Sparse Transformers](https://arxiv.org/pdf/1904.10509.pdf). _R. Child, Scott Gray, Alec Radford, Ilya Sutskever_. 2019. Introduces **Sparse Transformers**.
> - [Linformer: Self-Attention with Linear Complexity](https://arxiv.org/pdf/2006.04768.pdf). _Sinong Wang, Belinda Z. Li, Madian Khabsa, Han Fang, Hao Ma_. 2020. Introduces **Linformers**.
> - [Rethinking Attention with Performers](https://arxiv.org/pdf/2009.14794.pdf). _K. Choromanski, Valerii Likhosherstov, David Dohan, Xingyou Song, Andreea Gane, Tamás Sarlós, Peter Hawkins, Jared Davis, Afroz Mohiuddin, Lukasz Kaiser, David Belanger, Lucy J. Colwell, Adrian Weller_. ICLR 2020. Introduces **Performers**.
> - [Efficient Transformers: A Survey](https://arxiv.org/pdf/2009.06732.pdf). _Yi Tay, M. Dehghani, Dara Bahri, Donald Metzler_. 2020.

>🤖 https://chatgpt.com/share/69d11f8b-ec20-8397-aa1c-40a5e50d5d61

```markdown
Decoder-only Transformer line

GPT-1 (2018)
└─ autoregressive decoder-only LM
   └─ GPT-2 (2019)
      └─ GPT-3 (2020)
         ├─ scaling-law / compute-optimal training era
         │  └─ Chinchilla influence (2022)
         │
         ├─ modern dense decoder recipe
         │  ├─ RMSNorm / pre-norm
         │  ├─ SwiGLU / GLU-style FFN
         │  ├─ RoPE
         │  └─ GQA / MQA
         │     ├─ Llama family
         │     ├─ Qwen dense families
         │     └─ many open LLMs
         │
         ├─ sparse decoder recipe
         │  └─ MoE
         │     ├─ Gemini Pro / 2.5 line
         │     ├─ DeepSeek-V2 / V3
         │     ├─ GLM-4.5
         │     ├─ Llama 4
         │     ├─ OpenAI gpt-oss
         │     └─ MiniMax-01 / M1 / M2.5 line
         │
         ├─ long-context specializations
         │  ├─ Qwen2.5-1M
         │  ├─ Gemini 1.5 / 2.5
         │  └─ MiniMax-01
         │
         └─ attention redesign branches
            ├─ MQA / GQA
            ├─ MLA (DeepSeek)
            └─ Lightning Attention + hybrid softmax (MiniMax)

2018  GPT-1        decoder-only autoregressive LM becomes the main branch
2019  GPT-2        same branch proves surprisingly general
2020  GPT-3        scale + in-context learning become central
2022  Chinchilla   training recipe becomes more data/compute-optimal
2019  MQA          inference cost becomes a first-class design target
2021  RoPE         positional encoding modernizes
2023  GQA          mainstream compromise for fast serving
2023  Llama-style  RMSNorm + SwiGLU + RoPE + GQA becomes the standard open recipe
2024  DeepSeek-V2  MoE + MLA = more aggressive efficiency redesign
2024  Gemini 1.5   dense/Flash and sparse-MoE/Pro split
2024  MiniMax-01   hybrid lightning+softmax attention for long context
2025  Llama 4      major Meta shift from dense to MoE
2025  GPT-oss      OpenAI publicly shows its current open MoE descendant
2025  GLM-4.5      recent GLM line clearly on MoE branch
2025+ Qwen2.5-1M   mainstream dense recipe extended to million-token contexts
```

A modern decoder-only Transformer can be read as this pipeline:

```
tokens  
→ token embeddings  
→ repeated Transformer blocks  
   [RMSNorm → causal self-attention → residual  
    RMSNorm → MLP (or MoE FFN) → residual]  
→ final normalization  
→ output projection to vocabulary logits  
→ next-token prediction
```

That high-level structure is still very close to GPT. What changed is the **inside of the block**: better normalization, better positional encoding, more inference-efficient attention, and sometimes MoE sparsity.
#### 📌 LLM Architecture Gallery
https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison
The Big LLM Architecture Comparison: 
From DeepSeek V3 to GLM-5: A Look At Modern LLM Architecture Design

https://sebastianraschka.com/llm-architecture-gallery/
- This page collects architecture figures and fact sheets from [The Big LLM Architecture Comparison](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison), [From GPT-2 to gpt-oss](https://magazine.sebastianraschka.com/p/from-gpt-2-to-gpt-oss-analyzing-the), [From DeepSeek V3 to V3.2](https://magazine.sebastianraschka.com/p/technical-deepseek), and [A Dream of Spring for Open-Weight LLMs](https://magazine.sebastianraschka.com/p/a-dream-of-spring-for-open-weight), plus selected release posts or technical reports when a new architecture has not been covered in one of those articles yet. It focuses on the architecture panels only. Click a figure to enlarge it and use the model title to jump to the corresponding article section.
- ![](../../../../../../../../Assets/Pics/Pasted%20image%2020260404215455.png)
#### Dense Decoder vs Sparse Decoder & MoE (Mixture of Experts)
↗ [MoE (Mixture of Experts) Architecture](Sparse%20&%20Dense%20Decoder%20Architecture/MoE%20(Mixture%20of%20Experts)%20Architecture/MoE%20(Mixture%20of%20Experts)%20Architecture.md)

#### Residual Connections
↗ [Residual Connections](Residual%20Connections.md)

#### Normalizations

#### Attention Redesign
↗ [Attention in Transformer & Efficient Implementation](Attention%20in%20Transformer%20&%20Efficient%20Implementation.md)

#### Retrieve-Based Model
↗ [Retrieve-Based Architecture](Retrieve-Based%20Architecture/Retrieve-Based%20Architecture.md)


### 3️⃣ Encoder-Only Transformer
> [!quote]
> 🤖 ChatGPT 4
> - Use **just the encoder** stack from the original Transformer.
> - **Output**: a contextual embedding for every token (good for classification, clustering, etc.).
> - **Example**: BERT, RoBERTa.
> - **Use case**: understanding tasks (e.g., “Is this sentence positive or negative?”).
> - **Key trait**: bidirectional (looks at left + right context together).

> [!Papers]
> Encoder-only architectures:
> - [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/pdf/1810.04805.pdf). _Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova_. NAACL 2019. Introduces **BERT** from Google.
> - [RoBERTa: A Robustly Optimized BERT Pretraining Approach](https://arxiv.org/pdf/1907.11692.pdf). _Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, M. Lewis, Luke Zettlemoyer, Veselin Stoyanov_. 2019. Introduces **RoBERTa** from Facebook.


### Tokenization
> [!Papers]
> Tokenization:
> - [Between words and characters: A Brief History of Open-Vocabulary Modeling and Tokenization in NLP](https://arxiv.org/pdf/2112.10508.pdf). _Sabrina J. Mielke, Zaid Alyafeai, Elizabeth Salesky, Colin Raffel, Manan Dey, Matthias Gallé, Arun Raja, Chenglei Si, Wilson Y. Lee, Benoît Sagot, Samson Tan_. 2021. Comprehensive survey of tokenization.
> - [Neural Machine Translation of Rare Words with Subword Units](https://arxiv.org/pdf/1508.07909.pdf). _Rico Sennrich, B. Haddow, Alexandra Birch_. ACL 2015. Introduces **byte pair encoding** into NLP. Used by GPT-2, GPT-3.
> - [Google’s Neural Machine Translation System: Bridging the Gap between Human and Machine Translation](https://arxiv.org/pdf/1609.08144.pdf). _Yonghui Wu, M. Schuster, Z. Chen, Quoc V. Le, Mohammad Norouzi, Wolfgang Macherey, M. Krikun, Yuan Cao, Qin Gao, Klaus Macherey, J. Klingner, Apurva Shah, Melvin Johnson, Xiaobing Liu, Lukasz Kaiser, Stephan Gouws, Y. Kato, Taku Kudo, H. Kazawa, K. Stevens, George Kurian, Nishant Patil, W. Wang, C. Young, Jason R. Smith, Jason Riesa, Alex Rudnick, Oriol Vinyals, G. Corrado, Macduff Hughes, J. Dean_. 2016. Introduces **WordPiece**. Used by BERT.
> - [SentencePiece: A simple and language independent subword tokenizer and detokenizer for Neural Text Processing](https://arxiv.org/pdf/1808.06226.pdf). _Taku Kudo, John Richardson_. EMNLP 2018. Introduces **SentencePiece**.



## Ref
Deng, Y., Xia, C. S., Yang, C., Zhang, S. D., Yang, S., & Zhang, L. (2024). Large Language Models are Edge-Case Generators: Crafting Unusual Programs for Fuzzing Deep Learning Libraries. Proceedings of the IEEE/ACM 46th International Conference on Software Engineering, 1–13. https://doi.org/10.1145/3597503.3623343
- LLMs can be classified based on variations of the popular Transformer architecture [64] into: Encoder-only, Decoder-only and Encoder-Decoder models. Decoder-only LLMs (e.g., GPT [7, 46], Codex [10] and CodeGen [43]) focus on autoregressive completion tasks by learning to predict the probability of the next token given previously generated tokens. Encoder-only (e.g., CodeBERT [17] and GraphCodeBERT [24]) and Encoder-Decoder (e.g., CodeT5 [79] and PLBART [4]) models on the other hand are designed for infilling tasks, where the pre-training objective is to recover masked-out tokens or token spans in the training data by using bi-directional context.
