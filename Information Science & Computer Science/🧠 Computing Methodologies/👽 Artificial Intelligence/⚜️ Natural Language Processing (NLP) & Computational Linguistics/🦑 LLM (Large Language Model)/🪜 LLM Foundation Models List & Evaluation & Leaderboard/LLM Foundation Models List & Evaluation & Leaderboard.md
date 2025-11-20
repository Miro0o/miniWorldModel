# LLM Foundation Models List & Evaluation & Leaderboard

[TOC]



## Res
### Related Topics
↗ [MLLM Evaluation & Benchmarks](../../🐝%20Multimodal%20AI%20&%20MLLM/MLLM%20Evaluation%20&%20Benchmarks.md)

↗ [Pre-trained NN Weights & NN Models](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/Pre-trained%20NN%20Weights%20&%20NN%20Models/Pre-trained%20NN%20Weights%20&%20NN%20Models.md)
↗ [Transformers](../../../🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/🌊%20Deep%20Learning%20(Neural%20Network)/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)


### Benchmarks & Leaderboards ⭐
https://lmarena.ai/
Chatbot Arena LLM Leaderboard: Community-driven Evaluation for Best LLM and AI chatbots
- Chatbot Arena is an open platform for crowdsourced AI benchmarking, hosted by researchers at UC Berkeley [SkyLab](https://sky.cs.berkeley.edu/) and [LMArena](https://blog.lmarena.ai/about/). We open-source the [FastChat](https://github.com/lm-sys/FastChat) project at GitHub and release open datasets. We always welcome contributions from the community. If you're interested in collaboration, we'd love to hear from you!

https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard#/
Open LLM Leaderboard

https://artificialanalysis.ai/leaderboards/models
Comparison and ranking the performance of over 30 AI models (LLMs) across key metrics including quality, price, performance and speed (output speed - tokens per second & latency - TTFT), context window & others. For more details including relating to our methodology, see our [FAQs.](https://artificialanalysis.ai/faq)

https://tatsu-lab.github.io/alpaca_eval/

https://www.vellum.ai/llm-leaderboard

https://livebench.ai/#/

https://llm-stats.com/

https://scale.com/leaderboard

https://gorilla.cs.berkeley.edu/leaderboard.html
BFCL: From Tool Use to Agentic Evaluation of Large Language Models
The Berkeley Function Calling Leaderboard (BFCL) V4 evaluates the LLM's ability to call functions (aka tools) accurately. This leaderboard consists of real-world data and will be updated periodically. For more information on the evaluation dataset and methodology, please refer to our blogs: [BFCL-v1](https://gorilla.cs.berkeley.edu/blogs/8_berkeley_function_calling_leaderboard.html) introducing AST as an evaluation metric, [BFCL-v2](https://gorilla.cs.berkeley.edu/blogs/12_bfcl_v2_live.html) introducing enterprise and OSS-contributed functions, [BFCL-v3](https://gorilla.cs.berkeley.edu/blogs/13_bfcl_v3_multi_turn.html) introducing multi-turn interactions, and [BFCL-v4](https://gorilla.cs.berkeley.edu/blogs/15_bfcl_v4_web_search.html) introducing holistic agentic evaluation. Checkout [code and data](https://github.com/ShishirPatil/gorilla/tree/main/berkeley-function-call-leaderboard).

https://aider.chat/docs/leaderboards/

https://arcprize.org/arc-agi/2/
ARC-AGI-1 was created in 2019 (before LLMs even existed). It endured 5 years of global competitions, over 50,000x of AI scaling, and saw little progress until late 2024 with test-time adaptation methods pioneered by [ARC Prize 2024](https://arcprize.org/2024-results) and [OpenAI](https://arcprize.org/arc-agi/2/blog/oai-o3-pub-breakthrough).
ARC-AGI-2 - the next iteration of the benchmark - is designed to stress test the **efficiency** and **capability** of state-of-the-art AI reasoning systems, provide useful signal towards AGI, and re-inspire researchers to work on new ideas.
Pure LLMs score 0%, AI reasoning systems score only single-digit percentages, yet extensive testing shows that humans can solve every task.
Can you create a system that can reach 85% accuracy?

https://andonlabs.com/evals/vending-bench
Vending-Bench2
How do agents act over very long horizons? We answer this by letting agents manage a simulated vending machine business. The agents need to handle ordering, inventory management, and pricing over long context horizons to successfully make money.

https://huggingface.co/blog/Ziyang/screenspot-pro
ScreenSpot-Pro
We present **ScreenSpot-Pro**—a benchmark designed to evaluate GUI grounding models specifically for high-resolution, professional computer-use environments.

https://nof1.ai/
**Alpha Arena** is the first benchmark designed to measure AI's investing abilities. Each model is given $10,000 of **real money**, in **real markets**, with the aim of maximizing trading profits over the course of 2 weeks. Each model must generate alpha, size trades, time trades and manage risk, completely autonomously.

---
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


### Evaluation Tools & Frameworks
> 🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main?tab=readme-ov-file#llm-evaluation (2025.01)

- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - A framework for few-shot evaluation of language models.
- [MixEval](https://github.com/Psycoy/MixEval) - A reliable click-and-go evaluation suite compatible with both open-source and proprietary models, supporting MixEval and other benchmarks.
- [lighteval](https://github.com/huggingface/lighteval) - a lightweight LLM evaluation suite that Hugging Face has been using internally.
- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - a repository for evaluating open language models.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - This repository contains code to quantitatively evaluate instruction-tuned models such as Alpaca and Flan-T5 on held-out tasks.
- [simple-evals](https://github.com/openai/simple-evals) - Eval tools by OpenAI.
- [Giskard](https://github.com/Giskard-AI/giskard) - Testing & evaluation library for LLM applications, in particular RAGs
- [LangSmith](https://www.langchain.com/langsmith) - a unified platform from LangChain framework for: evaluation, collaboration HITL (Human In The Loop), logging and monitoring LLM applications.
- [Ragas](https://github.com/explodinggradients/ragas) - a framework that helps you evaluate your Retrieval Augmented Generation (RAG) pipelines.


### Papers


### Other Resources
https://deepeval.com/



## A List of Popular Large Language Models
> 🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main (2024.06)

- [Gemma](https://blog.google/technology/developers/gemma-open-models/) - Gemma is built for responsible AI development from the same research and technology used to create Gemini models.
- [Mistral](https://mistral.ai/) - Mistral-7B-v0.1 is a small, yet powerful model adaptable to many use-cases including code and 8k sequence length. Apache 2.0 licence.
- [Mixtral 8x7B](https://mistral.ai/news/mixtral-of-experts/) - a high-quality sparse mixture of experts model (SMoE) with open weights.
- [LLaMA](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/) & [LLaMA-2](https://ai.meta.com/llama/) - A foundational large language model. [LLaMA.cpp](https://github.com/ggerganov/llama.cpp) [Lit-LLaMA](https://github.com/Lightning-AI/lit-llama)
    - [Alpaca](https://crfm.stanford.edu/2023/03/13/alpaca.html) - A model fine-tuned from the LLaMA 7B model on 52K instruction-following demonstrations. [Alpaca.cpp](https://github.com/antimatter15/alpaca.cpp) [Alpaca-LoRA](https://github.com/tloen/alpaca-lora)
    - [Flan-Alpaca](https://github.com/declare-lab/flan-alpaca) - Instruction Tuning from Humans and Machines.
    - [Baize](https://github.com/project-baize/baize-chatbot) - Baize is an open-source chat model trained with [LoRA](https://github.com/microsoft/LoRA). It uses 100k dialogs generated by letting ChatGPT chat with itself.
    - [Cabrita](https://github.com/22-hours/cabrita) - A portuguese finetuned instruction LLaMA.
    - [Vicuna](https://lmsys.org/blog/2023-03-30-vicuna/) - An Open-Source Chatbot Impressing GPT-4 with 90% ChatGPT Quality.
    - [Llama-X](https://github.com/AetherCortex/Llama-X) - Open Academic Research on Improving LLaMA to SOTA LLM.
    - [Chinese-Vicuna](https://github.com/Facico/Chinese-Vicuna) - A Chinese Instruction-following LLaMA-based Model.
    - [GPTQ-for-LLaMA](https://github.com/qwopqwop200/GPTQ-for-LLaMa) - 4 bits quantization of [LLaMA](https://arxiv.org/abs/2302.13971) using [GPTQ](https://arxiv.org/abs/2210.17323).
    - [GPT4All](https://github.com/nomic-ai/gpt4all) - Demo, data, and code to train open-source assistant-style large language model based on GPT-J and LLaMa.
    - [Koala](https://bair.berkeley.edu/blog/2023/04/03/koala/) - A Dialogue Model for Academic Research
    - [BELLE](https://github.com/LianjiaTech/BELLE) - Be Everyone's Large Language model Engine
    - [StackLLaMA](https://huggingface.co/blog/stackllama) - A hands-on guide to train LLaMA with RLHF.
    - [RedPajama](https://github.com/togethercomputer/RedPajama-Data) - An Open Source Recipe to Reproduce LLaMA training dataset.
    - [Chimera](https://github.com/FreedomIntelligence/LLMZoo) - Latin Phoenix.
    - [WizardLM|WizardCoder](https://github.com/nlpxucan/WizardLM) - Family of instruction-following LLMs powered by Evol-Instruct: WizardLM, WizardCoder.
    - [CaMA](https://github.com/zjunlp/CaMA) - a Chinese-English Bilingual LLaMA Model.
    - [Orca](https://aka.ms/orca-lm) - Microsoft's finetuned LLaMA model that reportedly matches GPT3.5, finetuned against 5M of data, ChatGPT, and GPT4
    - [BayLing](https://github.com/ictnlp/BayLing) - an English/Chinese LLM equipped with advanced language alignment, showing superior capability in English/Chinese generation, instruction following and multi-turn interaction.
    - [UltraLM](https://github.com/thunlp/UltraChat) - Large-scale, Informative, and Diverse Multi-round Chat Models.
    - [Guanaco](https://github.com/artidoro/qlora) - QLoRA tuned LLaMA
    - [ChiMed-GPT](https://github.com/synlp/ChiMed-GPT) - A Chinese medical large language model.
    - [RAFT](https://aka.ms/raft-blog) - RAFT: A new way to teach LLMs to be better at RAG ([paper](https://arxiv.org/abs/2403.10131)).
    - [Gorilla LLM](https://github.com/ShishirPatil/gorilla) - Gorilla: Large Language Model Connected with Massive APIs
    - [LLaVa](https://github.com/haotian-liu/LLaVA) - LLaVA: Large Language and Vision Assistant, an end-to-end trained large multimodal model that connects a vision encoder and LLM for general-purpose visual and language understanding.
- [BLOOM](https://huggingface.co/bigscience/bloom) - BigScience Large Open-science Open-access Multilingual Language Model [BLOOM-LoRA](https://github.com/linhduongtuan/BLOOM-LORA)
    - [BLOOMZ&mT0](https://huggingface.co/bigscience/bloomz) - a family of models capable of following human instructions in dozens of languages zero-shot.
    - [Phoenix](https://github.com/FreedomIntelligence/LLMZoo)
- [Deepseek](https://github.com/deepseek-ai/)
    - [Coder](https://github.com/deepseek-ai/DeepSeek-Coder) - Let the Code Write Itself.
    - [LLM](https://github.com/deepseek-ai/DeepSeek-LLM) - Let there be answers.
    - 知名私募巨头幻方量化旗下的人工智能公司深度求索（DeepSeek）自主研发的大语言模型开发的智能助手。包括 [7B-base](https://modelscope.cn/models/deepseek-ai/deepseek-llm-7b-base/summary), [67B-base](https://modelscope.cn/models/deepseek-ai/deepseek-llm-67b-base/summary),
- [Yi](https://github.com/01-ai/Yi) - A series of large language models trained from scratch by developers @01-ai.
- [T5](https://arxiv.org/abs/1910.10683) - Text-to-Text Transfer Transformer
    - [T0](https://arxiv.org/abs/2110.08207) - Multitask Prompted Training Enables Zero-Shot Task Generalization
- [OPT](https://arxiv.org/abs/2205.01068) - Open Pre-trained Transformer Language Models.
- [UL2](https://arxiv.org/abs/2205.05131v1) - a unified framework for pretraining models that are universally effective across datasets and setups.
- [GLM](https://github.com/THUDM/GLM)- GLM is a General Language Model pretrained with an autoregressive blank-filling objective and can be finetuned on various natural language understanding and generation tasks.
    - [ChatGLM-6B](https://github.com/THUDM/ChatGLM-6B) - ChatGLM-6B 是一个开源的、支持中英双语的对话语言模型，基于 [General Language Model (GLM)](https://github.com/THUDM/GLM) 架构，具有 62 亿参数.
    - [ChatGLM2-6B](https://github.com/THUDM/ChatGLM2-6B) - An Open Bilingual Chat LLM | 开源双语对话语言模型
    - [ChatGLM3-6B](https://github.com/THUDM/ChatGLM3) - An Open Bilingual Chat LLMs | 开源双语对话语言模型 ; Including [ChatGLM3-6B-32k](https://huggingface.co/THUDM/chatglm3-6b-32k), [ChatGLM3-6B-128k](https://huggingface.co/THUDM/chatglm3-6b-128k).
- [RWKV](https://github.com/BlinkDL/RWKV-LM) - Parallelizable RNN with Transformer-level LLM Performance.
    - [ChatRWKV](https://github.com/BlinkDL/ChatRWKV) - ChatRWKV is like ChatGPT but powered by my RWKV (100% RNN) language model.
    - [Trending Demo](https://huggingface.co/spaces/BlinkDL/RWKV-Gradio-2) - RWKV-5 trained on 100+ world languages (70% English, 15% multilang, 15% code).
- [StableLM](https://stability.ai/blog/stability-ai-launches-the-first-of-its-stablelm-suite-of-language-models) - Stability AI Language Models.
- [YaLM](https://medium.com/yandex/yandex-publishes-yalm-100b-its-the-largest-gpt-like-neural-network-in-open-source-d1df53d0e9a6) - a GPT-like neural network for generating and processing text. It can be used freely by developers and researchers from all over the world.
- [GPT-Neo](https://github.com/EleutherAI/gpt-neo) - An implementation of model & data parallel [GPT3](https://arxiv.org/abs/2005.14165)-like models using the [mesh-tensorflow](https://github.com/tensorflow/mesh) library.
- [GPT-J](https://github.com/kingoflolz/mesh-transformer-jax/#gpt-j-6b) - A 6 billion parameter, autoregressive text generation model trained on [The Pile](https://pile.eleuther.ai/).
    - [Dolly](https://www.databricks.com/blog/2023/03/24/hello-dolly-democratizing-magic-chatgpt-open-models.html) - a cheap-to-build LLM that exhibits a surprising degree of the instruction following capabilities exhibited by ChatGPT.
- [Pythia](https://github.com/EleutherAI/pythia) - Interpreting Autoregressive Transformers Across Time and Scale
    - [Dolly 2.0](https://www.databricks.com/blog/2023/04/12/dolly-first-open-commercially-viable-instruction-tuned-llm) - the first open source, instruction-following LLM, fine-tuned on a human-generated instruction dataset licensed for research and commercial use.
- [OpenFlamingo](https://github.com/mlfoundations/open_flamingo) - an open-source reproduction of DeepMind's Flamingo model.
- [Cerebras-GPT](https://www.cerebras.net/blog/cerebras-gpt-a-family-of-open-compute-efficient-large-language-models/) - A Family of Open, Compute-efficient, Large Language Models.
- [GALACTICA](https://github.com/paperswithcode/galai/blob/main/docs/model_card.md) - The GALACTICA models are trained on a large-scale scientific corpus.
    - [GALPACA](https://huggingface.co/GeorgiaTechResearchInstitute/galpaca-30b) - GALACTICA 30B fine-tuned on the Alpaca dataset.
- [Palmyra](https://huggingface.co/Writer/palmyra-base) - Palmyra Base was primarily pre-trained with English text.
- [Camel](https://huggingface.co/Writer/camel-5b-hf) - a state-of-the-art instruction-following large language model designed to deliver exceptional performance and versatility.
- [h2oGPT](https://github.com/h2oai/h2ogpt)
- [PanGu-α](https://openi.org.cn/pangu/) - PanGu-α is a 200B parameter autoregressive pretrained Chinese language model develped by Huawei Noah's Ark Lab, MindSpore Team and Peng Cheng Laboratory.
- [MOSS](https://github.com/OpenLMLab/MOSS) - MOSS是一个支持中英双语和多种插件的开源对话语言模型.
- [Open-Assistant](https://github.com/LAION-AI/Open-Assistant) - a project meant to give everyone access to a great chat based large language model.
    - [HuggingChat](https://huggingface.co/chat/) - Powered by Open Assistant's latest model – the best open source chat model right now and @huggingface Inference API.
- [StarCoder](https://huggingface.co/blog/starcoder) - Hugging Face LLM for Code
- [MPT-7B](https://www.mosaicml.com/blog/mpt-7b) - Open LLM for commercial use by MosaicML
- [Falcon](https://falconllm.tii.ae/) - Falcon LLM is a foundational large language model (LLM) with 40 billion parameters trained on one trillion tokens. TII has now released Falcon LLM – a 40B model.
- [XGen](https://github.com/salesforce/xgen) - Salesforce open-source LLMs with 8k sequence length.
- [Baichuan](https://github.com/baichuan-inc) - A series of large language models developed by Baichuan Intelligent Technology.
- [Aquila](https://github.com/FlagAI-Open/FlagAI/tree/master/examples/Aquila) - 悟道·天鹰语言大模型是首个具备中英双语知识、支持商用许可协议、国内数据合规需求的开源语言大模型。
- [phi-1](https://arxiv.org/abs/2306.11644) - a new large language model for code, with significantly smaller size than competing models.
- [phi-1.5](https://arxiv.org/abs/2309.05463) - a 1.3 billion parameter model trained on a dataset of 30 billion tokens, which achieves common sense reasoning benchmark results comparable to models ten times its size that were trained on datasets more than ten times larger.
- [phi-2](https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/) - a 2.7 billion-parameter language model that demonstrates outstanding reasoning and language understanding capabilities, showcasing state-of-the-art performance among base language models with less than 13 billion parameters.
- [InternLM / 书生·浦语](https://github.com/InternLM/InternLM) - Official release of InternLM2 7B and 20B base and chat models. 200K context support. [Homepage](https://internlm.intern-ai.org.cn/) | [ModelScope](https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm-7b/summary)
- [BlueLM-7B](https://github.com/vivo-ai-lab/BlueLM) - BlueLM(蓝心大模型): Open large language models developed by vivo AI Lab. [Homepage](https://developers.vivo.com/product/ai/bluelm) | [ModelScope](https://modelscope.cn/models/vivo-ai/BlueLM-7B-Base/summary) [MoE-16B-base](https://modelscope.cn/models/deepseek-ai/deepseek-moe-16b-base), 等. | [Chat with DeepSeek (Beta)](https://chat.deepseek.com/sign_in)
- [Qwen series](https://huggingface.co/Qwen) - The large language model series proposed by Alibaba Cloud. ｜ 阿里云研发的通义千问大模型系列. 包括 [7B](https://huggingface.co/Qwen/Qwen-7B), [72B](https://huggingface.co/Qwen/Qwen-72B), 及各种量化和Chat版本. [Chat Demo](https://huggingface.co/spaces/Qwen/Qwen-72B-Chat-Demo)
- [XVERSE series](https://github.com/xverse-ai) - Multilingual large language model developed by XVERSE Technology Inc | 由深圳元象科技自主研发的支持多语言的大语言模型. 包括[7B](https://github.com/xverse-ai/XVERSE-7B), [13B](https://github.com/xverse-ai/XVERSE-13B), [65B](https://github.com/xverse-ai/XVERSE-65B)等.
- [Skywork series](https://github.com/SkyworkAI/Skywork) - A series of large models developed by the Kunlun Group · Skywork team | 昆仑万维集团·天工团队开发的一系列大型模型.
- [Command-R series](https://huggingface.co/CohereForAI) - Two multilingual large language models intended for retrieval augmented generation (RAG) and conversational use, at [35](https://huggingface.co/CohereForAI/c4ai-command-r-v01) and [104](https://huggingface.co/CohereForAI/c4ai-command-r-plus) billion parameters. 128k context support.
- [Jamba](https://huggingface.co/ai21labs/Jamba-v0.1) - A Hybrid Transformer-Mamba MoE model, with 52B params, first production grade mamba based LLM, 256K context support.



## A List of Open LLM Models
> 🔗 https://github.com/Hannibal046/Awesome-LLM/tree/main?tab=readme-ov-file#open-llm (2025.09)

DeepSeek
- [DeepSeek-Math-7B](https://huggingface.co/collections/deepseek-ai/deepseek-math-65f2962739da11599e441681)
- [DeepSeek-Coder-1.3|6.7|7|33B](https://huggingface.co/collections/deepseek-ai/deepseek-coder-65f295d7d8a0a29fe39b4ec4)
- [DeepSeek-VL-1.3|7B](https://huggingface.co/collections/deepseek-ai/deepseek-vl-65f295948133d9cf92b706d3)
- [DeepSeek-MoE-16B](https://huggingface.co/collections/deepseek-ai/deepseek-moe-65f29679f5cf26fe063686bf)
- [DeepSeek-v2-236B-MoE](https://arxiv.org/abs/2405.04434)
- [DeepSeek-Coder-v2-16|236B-MOE](https://github.com/deepseek-ai/DeepSeek-Coder-V2)
- [DeepSeek-V2.5](https://huggingface.co/deepseek-ai/DeepSeek-V2.5)
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)

Alibaba
- [Qwen-1.8B|7B|14B|72B](https://huggingface.co/collections/Qwen/qwen-65c0e50c3f1ab89cb8704144)
- [Qwen1.5-0.5B|1.8B|4B|7B|14B|32B|72B|110B|MoE-A2.7B](https://qwenlm.github.io/blog/qwen1.5/)
- [Qwen2-0.5B|1.5B|7B|57B-A14B-MoE|72B](https://qwenlm.github.io/blog/qwen2)
- [Qwen2.5-0.5B|1.5B|3B|7B|14B|32B|72B](https://qwenlm.github.io/blog/qwen2.5/)
- [CodeQwen1.5-7B](https://qwenlm.github.io/blog/codeqwen1.5/)
- [Qwen2.5-Coder-1.5B|7B|32B](https://qwenlm.github.io/blog/qwen2.5-coder/)
- [Qwen2-Math-1.5B|7B|72B](https://qwenlm.github.io/blog/qwen2-math/)
- [Qwen2.5-Math-1.5B|7B|72B](https://qwenlm.github.io/blog/qwen2.5-math/)
- [Qwen-VL-7B](https://huggingface.co/Qwen/Qwen-VL)
- [Qwen2-VL-2B|7B|72B](https://qwenlm.github.io/blog/qwen2-vl/)
- [Qwen2-Audio-7B](https://qwenlm.github.io/blog/qwen2-audio/)
- [Qwen2.5-VL-3|7|72B](https://qwenlm.github.io/blog/qwen2.5-vl/)
- [Qwen2.5-1M-7|14B](https://qwenlm.github.io/blog/qwen2.5-1m/)

Meta
- [Llama 3.2-1|3|11|90B](https://llama.meta.com/)
- [Llama 3.1-8|70|405B](https://llama.meta.com/)
- [Llama 3-8|70B](https://llama.meta.com/llama3/)
- [Llama 2-7|13|70B](https://llama.meta.com/llama2/)
- [Llama 1-7|13|33|65B](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/)
- [OPT-1.3|6.7|13|30|66B](https://arxiv.org/abs/2205.01068)

Mistral AI
- [Codestral-7|22B](https://mistral.ai/news/codestral/)
- [Mistral-7B](https://mistral.ai/news/announcing-mistral-7b/)
- [Mixtral-8x7B](https://mistral.ai/news/mixtral-of-experts/)
- [Mixtral-8x22B](https://mistral.ai/news/mixtral-8x22b/)

Google
- [Gemma2-9|27B](https://blog.google/technology/developers/google-gemma-2/)
- [Gemma-2|7B](https://blog.google/technology/developers/gemma-open-models/)
- [RecurrentGemma-2B](https://github.com/google-deepmind/recurrentgemma)
- [T5](https://arxiv.org/abs/1910.10683)

Apple
- [OpenELM-1.1|3B](https://huggingface.co/apple/OpenELM)

Microsoft
- [Phi1-1.3B](https://huggingface.co/microsoft/phi-1)
- [Phi2-2.7B](https://huggingface.co/microsoft/phi-2)
- [Phi3-3.8|7|14B](https://huggingface.co/microsoft/Phi-3-mini-4k-instruct)

AllenAI
- [OLMo-7B](https://huggingface.co/collections/allenai/olmo-suite-65aeaae8fe5b6b2122b46778)

xAI
- [Grok-1-314B-MoE](https://x.ai/blog/grok-os)

Cohere
- [Command R-35B](https://huggingface.co/CohereForAI/c4ai-command-r-v01)

01-ai
- [Yi-34B](https://huggingface.co/collections/01-ai/yi-2023-11-663f3f19119ff712e176720f)
- [Yi1.5-6|9|34B](https://huggingface.co/collections/01-ai/yi-15-2024-05-663f3ecab5f815a3eaca7ca8)
- [Yi-VL-6B|34B](https://huggingface.co/collections/01-ai/yi-vl-663f557228538eae745769f3)

Baichuan
- [Baichuan-7|13B](https://huggingface.co/baichuan-inc)
- [Baichuan2-7|13B](https://huggingface.co/baichuan-inc)

Nvidia
- [Nemotron-4-340B](https://huggingface.co/nvidia/Nemotron-4-340B-Instruct)

BLOOM
- [BLOOMZ&mT0](https://huggingface.co/bigscience/bloomz)

Zhipu AI
- [GLM-2|6|10|13|70B](https://huggingface.co/THUDM)
- [CogVLM2-19B](https://huggingface.co/collections/THUDM/cogvlm2-6645f36a29948b67dc4eef75)

OpenBMB
- [MiniCPM-2B](https://huggingface.co/collections/openbmb/minicpm-2b-65d48bf958302b9fd25b698f)
- [OmniLLM-12B](https://huggingface.co/openbmb/OmniLMM-12B)
- [VisCPM-10B](https://huggingface.co/openbmb/VisCPM-Chat)
- [CPM-Bee-1|2|5|10B](https://huggingface.co/collections/openbmb/cpm-bee-65d491cc84fc93350d789361)

RWKV Foundation
- [RWKV-v4|5|6](https://huggingface.co/RWKV)minicpm-2b-65d48bf958302b9fd25b698f)

ElutherAI
- [Pythia-1|1.4|2.8|6.9|12B](https://github.com/EleutherAI/pythia)

Stability AI
- [StableLM-3B](https://huggingface.co/stabilityai/stablelm-3b-4e1t)
- [StableLM-v2-1.6B](https://huggingface.co/stabilityai/stablelm-2-1_6b)
- [StableLM-v2-12B](https://huggingface.co/stabilityai/stablelm-2-12b)
- [StableCode-3B](https://huggingface.co/collections/stabilityai/stable-code-64f9dfb4ebc8a1be0a3f7650)

BigCode
- [StarCoder-1|3|7B](https://huggingface.co/collections/bigcode/%E2%AD%90-starcoder-64f9bd5740eb5daaeb81dbec)
- [StarCoder2-3|7|15B](https://huggingface.co/collections/bigcode/starcoder2-65de6da6e87db3383572be1a)

DataBricks
- [MPT-7B](https://www.databricks.com/blog/mpt-7b)
- [DBRX-132B-MoE](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm)

Shanghai AI Laboratory
- [InternLM2-1.8|7|20B](https://huggingface.co/collections/internlm/internlm2-65b0ce04970888799707893c)
- [InternLM-Math-7B|20B](https://huggingface.co/collections/internlm/internlm2-math-65b0ce88bf7d3327d0a5ad9f)
- [InternLM-XComposer2-1.8|7B](https://huggingface.co/collections/internlm/internlm-xcomposer2-65b3706bf5d76208998e7477)
- [InternVL-2|6|14|26](https://huggingface.co/collections/OpenGVLab/internvl-65b92d6be81c86166ca0dde4)

Moonshot AI
- [Moonlight-A3B](https://huggingface.co/collections/moonshotai/moonlight-a3b-67f67b029cecfdce34f4dc23)
- [Kimi-VL-A3B](https://huggingface.co/collections/moonshotai/kimi-vl-a3b-67f67b6ac91d3b03d382dd85)
- [Kimi-K2](https://huggingface.co/collections/moonshotai/kimi-k2-6871243b990f2af5ba60617d)



## A List of Evaluation & Benchmarks
https://agi.safe.ai/
Humanity's Last Exam

| **Capability**        | **Most Common Benchmark(s)**              | **What It Measures**                                                                                                               |
| --------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **General Knowledge** | **MMLU** (and **MMLU-Pro**)               | Still used as a baseline for broad, academic knowledge. The "Pro" version is harder.                                               |
| **Expert Reasoning**  | **HLE** (Humanity's Last Exam) & **GPQA** | Graduate-level questions in science, math, and humanities. Tests deep reasoning.                                                   |
| **Coding**            | **SWE-Bench**                             | The new standard. Tests a model's ability to fix real-world bugs in actual code repositories.                                      |
| **Mathematics**       | **MATH** & **GPQA**                       | Tests solving competition-level and graduate-level math problems.                                                                  |
| **"Live" Evaluation** | **LiveBench** & **Arena-Hard**            | Newer benchmarks that are _dynamically updated_ with new questions to prevent "data contamination" (models "memorizing" the test). |



## Ref
