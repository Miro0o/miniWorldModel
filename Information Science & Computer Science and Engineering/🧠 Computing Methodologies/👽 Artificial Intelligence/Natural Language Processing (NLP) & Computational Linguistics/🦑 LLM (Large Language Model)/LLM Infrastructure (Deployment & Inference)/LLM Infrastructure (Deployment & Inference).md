# LLM Infrastructure (Deployment & Inference)

[TOC]



## Res
### Related Topics
↗ [AI (Data) Infrastructure & Techniques Stack](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack.md)
- ↗ [Foundation Models & Development & SDKs](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/🛫%20Foundation%20Models%20&%20Development%20&%20SDKs/Foundation%20Models%20&%20Development%20&%20SDKs.md)
- ↗ [Model Monitoring & Observability](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/Model%20Monitoring%20&%20Observability/Model%20Monitoring%20&%20Observability.md)
- ↗ [Model Web Demo & Web Deployment](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/Model%20Web%20Demo%20&%20Web%20Deployment/Model%20Web%20Demo%20&%20Web%20Deployment.md)

↗ [Transformers](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)
↗ [Attention in Transformer & Efficient Implementation](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Attention%20in%20Transformer%20&%20Efficient%20Implementation.md)

↗ [AI4SE](../../../../../Software%20Engineering/🤖%20AI4SE/AI4SE.md)
- ↗ [Agentic AI Workflow Dev](../../../../../Software%20Engineering/🤖%20AI4SE/🦾%20AI%20Powered%20Dev%20&%20Vibe%20Coding/Agentic%20AI%20Workflow%20Dev/Agentic%20AI%20Workflow%20Dev.md)
- ↗ [AI API Call & AI Gateway](../../../../../Software%20Engineering/🤖%20AI4SE/🦾%20AI%20Powered%20Dev%20&%20Vibe%20Coding/AI%20API%20Call%20&%20AI%20Gateway.md)

↗ [AI on Cloud](../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Techniques%20Stack/AI%20on%20Cloud/AI%20on%20Cloud.md)

↗ [vLLM](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/vLLM.md)
↗ [SGLang](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/SGLang.md)


### Papers
https://github.com/0xSero/turboquant
TurboQuant: Near-optimal KV cache quantization for LLM inference (3-bit keys, 2-bit values) with Triton kernels + vLLM integration
Implementation of TurboQuant KV cache compression (ICLR 2026, arXiv:2504.19874) with vLLM integration. Tested on dense and MoE architectures across RTX 3090 and RTX 5090 GPUs.

https://arxiv.org/abs/2309.06180
Efficient Memory Management for Large Language Model Serving with PagedAttention
- [Woosuk Kwon](https://arxiv.org/search/cs?searchtype=author&query=Kwon,+W), [Zhuohan Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+Z), [Siyuan Zhuang](https://arxiv.org/search/cs?searchtype=author&query=Zhuang,+S), [Ying Sheng](https://arxiv.org/search/cs?searchtype=author&query=Sheng,+Y), [Lianmin Zheng](https://arxiv.org/search/cs?searchtype=author&query=Zheng,+L), [Cody Hao Yu](https://arxiv.org/search/cs?searchtype=author&query=Yu,+C+H), [Joseph E. Gonzalez](https://arxiv.org/search/cs?searchtype=author&query=Gonzalez,+J+E), [Hao Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+H), [Ion Stoica](https://arxiv.org/search/cs?searchtype=author&query=Stoica,+I)
- High throughput serving of large language models (LLMs) requires batching sufficiently many requests at a time. However, existing systems struggle because the key-value cache (KV cache) memory for each request is huge and grows and shrinks dynamically. When managed inefficiently, this memory can be significantly wasted by fragmentation and redundant duplication, limiting the batch size. To address this problem, we propose PagedAttention, an attention algorithm inspired by the classical virtual memory and paging techniques in operating systems. On top of it, we build vLLM, an LLM serving system that achieves (1) near-zero waste in KV cache memory and (2) flexible sharing of KV cache within and across requests to further reduce memory usage. Our evaluations show that vLLM improves the throughput of popular LLMs by 2-4× with the same level of latency compared to the state-of-the-art systems, such as FasterTransformer and Orca. The improvement is more pronounced with longer sequences, larger models, and more complex decoding algorithms. vLLM's source code is publicly available at [this https URL](https://github.com/vllm-project/vllm)

https://arxiv.org/abs/2205.14135
FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness
- [Tri Dao](https://arxiv.org/search/cs?searchtype=author&query=Dao,+T), [Daniel Y. Fu](https://arxiv.org/search/cs?searchtype=author&query=Fu,+D+Y), [Stefano Ermon](https://arxiv.org/search/cs?searchtype=author&query=Ermon,+S), [Atri Rudra](https://arxiv.org/search/cs?searchtype=author&query=Rudra,+A), [Christopher Ré](https://arxiv.org/search/cs?searchtype=author&query=R%C3%A9,+C)
- Transformers are slow and memory-hungry on long sequences, since the time and memory complexity of self-attention are quadratic in sequence length. Approximate attention methods have attempted to address this problem by trading off model quality to reduce the compute complexity, but often do not achieve wall-clock speedup. We argue that a missing principle is making attention algorithms IO-aware -- accounting for reads and writes between levels of GPU memory. We propose FlashAttention, an IO-aware exact attention algorithm that uses tiling to reduce the number of memory reads/writes between GPU high bandwidth memory (HBM) and GPU on-chip SRAM. We analyze the IO complexity of FlashAttention, showing that it requires fewer HBM accesses than standard attention, and is optimal for a range of SRAM sizes. We also extend FlashAttention to block-sparse attention, yielding an approximate attention algorithm that is faster than any existing approximate attention method. FlashAttention trains Transformers faster than existing baselines: 15% end-to-end wall-clock speedup on BERT-large (seq. length 512) compared to the MLPerf 1.1 training speed record, 3× speedup on GPT-2 (seq. length 1K), and 2.4× speedup on long-range arena (seq. length 1K-4K). FlashAttention and block-sparse FlashAttention enable longer context in Transformers, yielding higher quality models (0.7 better perplexity on GPT-2 and 6.4 points of lift on long-document classification) and entirely new capabilities: the first Transformers to achieve better-than-chance performance on the Path-X challenge (seq. length 16K, 61.4% accuracy) and Path-256 (seq. length 64K, 63.1% accuracy).

https://www.usenix.org/conference/osdi22/presentation/yu
Orca: A Distributed Serving System for Transformer-Based Generative Models
- Gyeong-In Yu and Joo Seong Jeong, _Seoul National University;_ Geon-Woo Kim, _FriendliAI and Seoul National University;_ Soojeong Kim, _FriendliAI;_ Byung-Gon Chun, _FriendliAI and Seoul National University_
- Large-scale Transformer-based models trained for generation tasks (e.g., GPT-3) have recently attracted huge interest, emphasizing the need for system support for serving models in this family. Since these models generate a next token in an autoregressive manner, one has to run the model multiple times to process an inference request where each iteration of the model generates a single output token for the request. However, existing systems for inference serving do not perform well on this type of workload that has a multi-iteration characteristic, due to their inflexible scheduling mechanism that cannot change the current batch of requests being processed; requests that have finished earlier than other requests in a batch cannot return to the client, while newly arrived requests have to wait until the current batch completely finishes.
- In this paper, we propose iteration-level scheduling, a new scheduling mechanism that schedules execution at the granularity of iteration (instead of request) where the scheduler invokes the execution engine to run only a single iteration of the model on the batch. In addition, to apply batching and iteration-level scheduling to a Transformer model at the same time, we suggest selective batching, which applies batching only to a selected set of operations. Based on these two techniques, we have implemented a distributed serving system called ORCA, with additional designs for scalability to models with hundreds of billions of parameters. Our evaluation on a GPT-3 175B model shows that ORCA can significantly outperform NVIDIA FasterTransformer in terms of both latency and throughput: 36:9× throughput improvement at the same level of latency.


### Other Resources



## Intro
### Deploy LLM on Different Levels - Desktop and Production
> To explain these two deployments, take the comparison of ollama and vLLM for example (generated by Gemini 2.5 Flash):

#vLLM #ollama #LLM #software_deployment

While both Ollama and vLLM are tools for LLM inference (running a model), their **design goals** and **primary use cases** are fundamentally different:

| **Aspect**             | **Ollama**                                                                                                    | **vLLM (Very Large Language Model)**                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Primary Goal**       | **Simplicity and Accessibility.** To make it easy to run LLMs locally for prototyping and personal use.       | **High-Throughput and Efficiency.** To maximize LLM serving performance in production.                       |
| **Target Environment** | Local machines, developer laptops, single-user setups.                                                        | Production servers, cloud deployments, multi-GPU clusters.                                                   |
| **Performance**        | Good for single-user, low-concurrency requests. Prioritizes a simple user experience over raw speed at scale. | **Significantly Higher Throughput and Lower Latency** under heavy, concurrent load.                          |
| **Key Optimization**   | **Quantization** and easy packaging for resource-constrained hardware.                                        | **PagedAttention** (efficient memory management) and **Continuous Batching** (efficient request scheduling). |
| **Hardware Focus**     | Consumer-grade hardware (CPU and GPU) and Apple Silicon.                                                      | High-end, dedicated GPUs (like NVIDIA A100s/H100s).                                                          |
| **User Experience**    | Simple CLI and API, minimal setup. **Beginner-friendly.**                                                     | More complex setup, focused on advanced configuration for production needs. **Engineer-focused.**            |
| **Model Scope**        | Curated model library that are pre-packaged.                                                                  | Works with a wide range of models from the Hugging Face ecosystem.                                           |



## LLM Desktop Deployment
↗ [ollama](LLM%20Desktop%20Deployment/ollama.md)
↗ [GPT4All](LLM%20Desktop%20Deployment/GPT4All.md)
↗ [LM Studio](LLM%20Desktop%20Deployment/LM%20Studio.md)
↗ [Jan.AI](LLM%20Desktop%20Deployment/Jan.AI.md)



## LLM High-Performance Deployment & Inference Services Providers
### LLM High-Performance Inference /Serving Engines
> Reference: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)

- [SGLang](https://github.com/sgl-project/sglang) - SGLang is a fast serving framework for large language models and vision language models.
- [vLLM](https://github.com/vllm-project/vllm) - A high-throughput and memory-efficient inference and serving engine for LLMs.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - a toolkit for deploying and serving Large Language Models (LLMs).
- [exllama](https://github.com/turboderp/exllama) - A more memory-efficient rewrite of the HF transformers implementation of Llama for use with quantized weights.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - LLM inference in C/C++.
- [ollama](https://github.com/ollama/ollama) - Get up and running with Llama 3, Mistral, Gemma, and other large language models.
- [Langfuse](https://github.com/langfuse/langfuse) - Open Source LLM Engineering Platform Tracing, Evaluations, Prompt Management, Evaluations and Playground.
- [FastChat](https://github.com/lm-sys/FastChat) - A distributed multi-model LLM serving system with web UI and OpenAI-compatible RESTful APIs.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Blazingly fast LLM inference.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - A python package for Txt-to-SQL with self hosting functionalities and RESTful APIs compatible with proprietary as well as open source LLM.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - Run LLMs and batch jobs on any cloud. Get maximum cost savings, highest GPU availability, and managed execution -- all with a simple interface.
- [Haystack](https://haystack.deepset.ai/) - an open-source NLP framework that allows you to use LLMs and transformer-based models from Hugging Face, OpenAI and Cohere to interact with your own data.
- [Sidekick](https://github.com/ai-sidekick/sidekick) - Data integration platform for LLMs.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - An interactive chat project that leverages Ollama/OpenAI/MistralAI LLMs for rapid understanding and navigation of GitHub code repository or compressed file resources.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - Interact with LLM using Ollama models(or openAI, mistralAI)via pure shell scripts on your Linux(or MacOS) system, enhancing intelligent system management without any dependencies.
- [LangChain](https://github.com/hwchase17/langchain) - Building applications with LLMs through composability
- [Floom](https://github.com/FloomAI/Floom) AI gateway and marketplace for developers, enables streamlined integration of AI features into products
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - Comprehensive set of tools for working with local LLMs for various tasks.
- [LiteChain](https://github.com/rogeriochaves/litechain) - Lightweight alternative to LangChain for composing LLMs
- [magentic](https://github.com/jackmpcollins/magentic) - Seamlessly integrate LLMs as Python functions
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - Use ChatGPT On Wechat via wechaty
- [promptfoo](https://github.com/typpo/promptfoo) - Test your prompts. Evaluate and compare LLM outputs, catch regressions, and improve prompt quality.
- [Agenta](https://github.com/agenta-ai/agenta) - Easily build, version, evaluate and deploy your LLM-powered apps.
- [Serge](https://github.com/serge-chat/serge) - a chat interface crafted with llama.cpp for running Alpaca models. No API keys, entirely self-hosted!
- [Langroid](https://github.com/langroid/langroid) - Harness LLMs with Multi-Agent Programming
- [Embedchain](https://github.com/embedchain/embedchain) - Framework to create ChatGPT like bots over your dataset.
- [Opik](https://github.com/comet-ml/opik) - Confidently evaluate, test, and ship LLM applications with a suite of observability tools to calibrate language model outputs across your dev and production lifecycle.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - simplifies the evaluation of LLMs by providing a unified microservice to access and test multiple AI models.
- [OpenLLM](https://github.com/bentoml/OpenLLM) - Fine-tune, serve, deploy, and monitor any open-source LLMs in production. Used in production at [BentoML](https://bentoml.com/) for LLMs-based applications.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) - MII makes low-latency and high-throughput inference, similar to vLLM powered by DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Inference for text-embeddings in Rust, HFOIL Licence.
- [Infinity](https://github.com/michaelfeil/infinity) - Inference for text-embeddings in Python
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Nvidia Framework for LLM Inference
- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIA Framework for LLM Inference(Transitioned to TensorRT-LLM)
- [Flash-Attention](https://github.com/Dao-AILab/flash-attention) - A method designed to enhance the efficiency of Transformer models
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - Formerly langchain-ChatGLM, local knowledge based LLM (like ChatGLM) QA app with langchain.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - Build your own conversational search engine using less than 500 lines of code by [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - Create, deploy and operate Actions using Python anywhere to enhance your AI agents and assistants. Batteries included with an extensive set of libraries, helpers and logging.
- [LMDeploy](https://github.com/InternLM/lmdeploy) - A high-throughput and low-latency inference and serving framework for LLMs and VLs
- [Tune Studio](https://studio.tune.app/) - Playground for devs to finetune & deploy LLMs
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - Locally running websearch using LLM chains
- [AI Gateway](https://github.com/Portkey-AI/gateway) — Gateway streamlines requests to 100+ open & closed source models with a unified API. It is also production-ready with support for caching, fallbacks, retries, timeouts, loadbalancing, and can be edge-deployed for minimum latency.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - Simple API for deploying any RAG or LLM that you want adding plugins.
- [Wllama](https://github.com/ngxson/wllama) - WebAssembly binding for llama.cpp - Enabling in-browser LLM inference
- [GPUStack](https://github.com/gpustack/gpustack) - An open-source GPU cluster manager for running LLMs
- [MNN-LLM](https://github.com/alibaba/MNN) -- A Device-Inference framework, including LLM Inference on device(Mobile Phone/PC/IOT)
- [CAMEL](https://www.camel-ai.org/) - First LLM Multi-agent framework.


### LLM Inference Services Providers & API 🤔
↗ [AI API Call & AI Gateway](../../../../../Software%20Engineering/🤖%20AI4SE/🦾%20AI%20Powered%20Dev%20&%20Vibe%20Coding/AI%20API%20Call%20&%20AI%20Gateway.md)



## LLM Inference & KV Caching
> [!links]
> ↗ [vLLM](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/vLLM.md)
> ↗ [SGLang](LLM%20Inference%20&%20Serving%20-%20Engines%20&%20Solutions/SGLang.md)



## Ref
[KV Caching in LLMs, Clearly Explained]: https://x.com/_avichawla/status/2034902650534187503?s=20
![](../../../../../../Assets/Pics/Screenshot%202026-04-26%20at%2017.44.28.png)
