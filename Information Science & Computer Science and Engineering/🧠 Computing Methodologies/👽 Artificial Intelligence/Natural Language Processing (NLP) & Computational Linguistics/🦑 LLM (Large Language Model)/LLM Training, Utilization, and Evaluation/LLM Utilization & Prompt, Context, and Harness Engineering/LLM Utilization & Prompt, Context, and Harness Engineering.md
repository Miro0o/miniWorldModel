# LLM Utilization & Prompt, Context, and Harness Engineering

[TOC]



## Res
### Related Topics
↗ [LLM Applications & LLM-Driven Automation](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/LLM%20Applications%20&%20LLM-Driven%20Automation.md)
↗ [LLM Agents, AI Workflow, & Agentic MLLM](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM.md)

↗ [LLM Agentic Reasoning](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)
↗ [Uncertain Knowledge & Probabilistic Reasoning (Decision Making)](../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Uncertain%20Knowledge%20&%20Probabilistic%20Reasoning%20(Decision%20Making).md)
↗ [RLM (Reasoning Language Model) & LRM (Large Reasoning Model)](../RLM%20(Reasoning%20Language%20Model)%20&%20LRM%20(Large%20Reasoning%20Model).md)

↗ [AI4Math](../../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4Math/AI4Math.md)
↗ [AI4Code](../../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code/AI4Code.md)

↗ [LLM Infrastructure & Deployment](../../LLM%20Infrastructure%20&%20Deployment/LLM%20Infrastructure%20&%20Deployment.md)

↗ [Cybernetics & Control Theory](../../../../../../🧮%20Mathematics/Cybernetics%20&%20Control%20Theory/Cybernetics%20&%20Control%20Theory.md)


### Learning Resources
https://www.promptingguide.ai
intro to PE

[Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)
The Prompt Engineering Guide is a project by [DAIR.AI](https://github.com/dair-ai). It aims to educate researchers and practitioners about prompt engineering.

We borrow inspirations from many open resources like [OpenAI CookBook](https://github.com/openai/openai-cookbook), [Pretrain, Prompt, Predict](http://pretrain.nlpedia.ai/), [Learn Prompting](https://learnprompting.org/), and many others.

[Learn Prompting](https://learnprompting.org/)
[ChatGPT3-Free-Prompt-List](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List)
[Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf)
[edx ChatGPT101](https://www.edx.org/course/introduction-to-chatgpt)
[OpenAI Examples](https://platform.openai.com/examples)
[免费 Prompt Engineering 教程](https://github.com/thinkingjimmy/Learning-Prompt)
[Promptify](https://github.com/promptslab/Promptify)


### Papers
Winning Gold at IMO 2025 with a Model-Agnostic Verification-and-Refinement Pipeline
https://arxiv.org/abs/2507.15855

https://arxiv.org/abs/2507.13334
A Survey of Context Engineering for Large Language Models
- [Lingrui Mei](https://arxiv.org/search/cs?searchtype=author&query=Mei,+L), [Jiayu Yao](https://arxiv.org/search/cs?searchtype=author&query=Yao,+J), [Yuyao Ge](https://arxiv.org/search/cs?searchtype=author&query=Ge,+Y), [Yiwei Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Baolong Bi](https://arxiv.org/search/cs?searchtype=author&query=Bi,+B), [Yujun Cai](https://arxiv.org/search/cs?searchtype=author&query=Cai,+Y), [Jiazhi Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+J), [Mingyu Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+M), [Zhong-Zhi Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+Z), [Duzhen Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+D), [Chenlin Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+C), [Jiayi Mao](https://arxiv.org/search/cs?searchtype=author&query=Mao,+J), [Tianze Xia](https://arxiv.org/search/cs?searchtype=author&query=Xia,+T), [Jiafeng Guo](https://arxiv.org/search/cs?searchtype=author&query=Guo,+J), [Shenghua Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+S)
- The performance of Large Language Models (LLMs) is fundamentally determined by the contextual information provided during inference. This survey introduces Context Engineering, a formal discipline that transcends simple prompt design to encompass the systematic optimization of information payloads for LLMs. We present a comprehensive taxonomy decomposing Context Engineering into its foundational components and the sophisticated implementations that integrate them into intelligent systems. We first examine the foundational components: context retrieval and generation, context processing and context management. We then explore how these components are architecturally integrated to create sophisticated system implementations: retrieval-augmented generation (RAG), memory systems and tool-integrated reasoning, and multi-agent systems. Through this systematic analysis of over 1400 research papers, our survey not only establishes a technical roadmap for the field but also reveals a critical research gap: a fundamental asymmetry exists between model capabilities. While current models, augmented by advanced context engineering, demonstrate remarkable proficiency in understanding complex contexts, they exhibit pronounced limitations in generating equally sophisticated, long-form outputs. Addressing this gap is a defining priority for future research. Ultimately, this survey provides a unified framework for both researchers and engineers advancing context-aware AI.


### Other Resources
https://latitude.so/developers
https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools
System Prompts and Models of AI Tools



## Intro
### Model Inference


### Model Reasoning
↗ [LLM Agentic Reasoning](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)
↗ [RLM (Reasoning Language Model) & LRM (Large Reasoning Model)](../RLM%20(Reasoning%20Language%20Model)%20&%20LRM%20(Large%20Reasoning%20Model).md)
↗ [AI4Math](../../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4Math/AI4Math.md)
↗ [AI4Code](../../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code/AI4Code.md)



## Prompt Engineering
> 🔗 https://www.promptingguide.ai

Prompt engineering is a relatively new discipline for developing and optimizing prompts to efficiently use language models (LMs) for a wide variety of applications and research topics. Prompt engineering skills help to better understand the capabilities and limitations of large language models (LLMs).

Prompt engineering is not just about designing and developing prompts. It encompasses a wide range of skills and techniques that are useful for interacting and developing with LLMs. It's an important skill to interface, build with, and understand capabilities of LLMs. You can use prompt engineering to improve safety of LLMs and build new capabilities like augmenting LLMs with domain knowledge and external tools.


### Basic Prompting Techniques
> 📎 https://deci.ai/blog/fine-tuning-peft-prompt-engineering-and-rag-which-one-is-right-for-you/
#### Zero-Shot Prompting
In zero-shot prompting, we prepend a certain instruction to the user’s query without providing the model with _any_ direct examples.

Imagine you’re developing a tech support chatbot using a large language model. To make sure the model focuses on providing tech solutions without having prior examples, you can prepend a specific instruction to all user inputs:
```text
Prompt:   

Provide a tech support solution based on the following user concern. User concern: My computer won't turn on.

Solution:
```

By prepending an instruction to the user query (“My computer won’t turn on,” we give the model context for the kind of answer desired. This is a way of adapting its output for tech support even without explicit examples of tech solutions.
#### Few-shot Prompting
In few-shot prompting, we prepend a few examples to the user’s query. These examples are essentially pairs of sample input and expected model output. 

Imagine creating a health app that categorizes dishes into ‘Low Fat’ or ‘High Fat’ using a language model. To orient the model, a couple of examples are prepended to the user query:  
```
Classify the following dish based on its fat content: Grilled chicken, lemon, herbs. Response: Low Fat

Classify the following dish based on its fat content: Mac and cheese with heavy cream and butter. Response: High Fat

Classify the following dish based on its fat content: Avocado toast with olive oil

Response:
```
  
Informed by the examples in the prompt, a large enough and well trained LLM will reliably respond: “High Fat.” 

Few-shot prompting is a good way of getting the model to adopt a certain response format. Going back to our tech support app example, if we wanted the model’s response to conform to a certain structure or length restrictions, we could do so through few-shot prompting.
#### Chain-Of-Thought (COT) Prompting 
Chain-of-thought prompting allows for detailed problem-solving by guiding the model through intermediate steps. Pairing it with few-shot prompting can enhance performance on tasks that need thoughtful analysis before generating an answer.  
``` text
Subtracting the smallest number from the largest in this group results in an even number: 5, 8, 9.

A: Subtracting 5 from 9 gives 4. The answer is True.

Subtracting the smallest number from the largest in this group results in an even number: 10, 15, 20.

A: Subtracting 10 from 20 gives 10. The answer is True.

Subtracting the smallest number from the largest in this group results in an even number: 7, 12, 15.

A:
```
  
In fact, chain of thought prompting can also be paired with zero shot prompting to enhance performance on tasks that require step-by-step analysis. Going back to our tech support app example, if we wanted to improve the model’s performance, we could ask it to break down the solution step by step.
```text
Break down the tech support solution step by step based on the following user concern. User concern: My computer won't turn on.

Solution:
```

For a variety of applications, basic prompt engineering of a very large LLM can deliver ‘good enough’ accuracy. It provides an economical adaptation method because it is fast and doesn’t involve large amounts of computing power. The downside is that it’s simply not accurate or robust enough for use cases additional background knowledge is required.


### Agent Skills
↗ [LLM Agents, AI Workflow, & Agentic MLLM](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM.md)
↗ [AI Agent Assistants (General Purpose) & LLM OS](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/AI%20Agent%20Assistants%20(General%20Purpose)%20&%20LLM%20OS/AI%20Agent%20Assistants%20(General%20Purpose)%20&%20LLM%20OS.md)



## Context Engineering



## Harness Engineering
> [!links]
> ↗ [Cybernetics & Control Theory](../../../../../../🧮%20Mathematics/Cybernetics%20&%20Control%20Theory/Cybernetics%20&%20Control%20Theory.md)



## Ref
[👍 Fine-Tuning, PEFT, Prompt Engineering, and RAG]: https://deci.ai/blog/fine-tuning-peft-prompt-engineering-and-rag-which-one-is-right-for-you/

[👍 Prompt场景示例和高阶Prompt - thirsd的文章 - 知乎]: https://zhuanlan.zhihu.com/p/688732784

[Harness engineering: leveraging Codex in an agent-first world By Ryan Lopopolo, Member of the Technical Staff]: https://openai.com/index/harness-engineering/
**Our most difficult challenges now center on designing environments, feedback loops, and control systems** that help agents accomplish our goal: build and maintain complex, reliable software at scale.

[Harness Engineering | Birgitta Böckeler]: https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html
The OpenAI team’s harness components mix deterministic and LLM-based approaches across 3 categories (grouping based on my interpretation):
1. **Context engineering**: Continuously enhanced knowledge base in the codebase, plus agent access to dynamic context like observability data and browser navigation
2. **Architectural constraints**: Monitored not only by the LLM-based agents, but also deterministic custom linters and structural tests
3. **“Garbage collection”**: Agents that run periodically to find inconsistencies in documentation or violations of architectural constraints, fighting entropy and decay
The OpenAI team says: “Our most difficult challenges now center on designing environments, feedback loops, and control systems.” This reminded me of [Chad Fowler’s recent post on “Relocating Rigor”](https://aicoding.leaflet.pub/3mbrvhyye4k2e). It’s refreshing to hear concrete ideas and experiences about where that rigor might go, rather than just hoping “better models” will magically solve maintainability issues.

[Harness Engineering Is Cybernetics ]: https://x.com/odysseus0z/status/2030416758138634583?s=20
![](../../../../../../../Assets/Pics/Pasted%20image%2020260315193222.png)
The generation-verification asymmetry — the intuition behind [P vs NP](https://en.wikipedia.org/wiki/P_versus_NP_problem) ,[demonstrated empirically for LLMs](https://arxiv.org/abs/2110.14168) by Cobbe et al. — points to where this goes. Generating a correct solution is harder than verifying one. You don't need to out-implement the machine. You need to out-evaluate it: specify what "correct" looks like, recognize when the output misses, judge whether the direction is right.
