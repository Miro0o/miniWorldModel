# RLM (Reasoning Language Model) & LRM (Large Reasoning Model)

[TOC]



## Res
### Related Topics
↗ [LLM Agentic Reasoning](../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)
↗ [Neuro-Symbolic AI](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Neuro-Symbolic%20AI/Neuro-Symbolic%20AI.md)
↗ [LLM Utilization & Prompt, Context, and Harness Engineering](LLM%20Utilization%20&%20Prompt,%20Context,%20and%20Harness%20Engineering/LLM%20Utilization%20&%20Prompt,%20Context,%20and%20Harness%20Engineering.md)

↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
- ↗ [LLM and RL](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/LLM%20and%20RL.md)
↗ [RLFT (Reinforcement Learning Fine Tuning)](LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning).md)

↗ [Logic (and Critical Thinking)](../../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
- ↗ [Formal System, Formal Logics, and Its Semantics](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)

↗ [Knowledge Representation (Syntax Level) and Reasoning (KRR)](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR).md)
↗ [Uncertain Knowledge & Probabilistic Reasoning (Decision Making)](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Uncertain%20Knowledge%20&%20Probabilistic%20Reasoning%20(Decision%20Making).md)

↗ [AI4Code](../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code/AI4Code.md)
↗ [AI4Math](../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4Math/AI4Math.md)


### Papers
https://arxiv.org/pdf/2603.09906
Thinking to Recall: How Reasoning Unlocks Parametric Knowledge in LLMs
- While reasoning in LLMs plays a natural role in math, code generation, and multi-hop factual questions, its effect on simple, single-hop factual questions remains unclear. Such questions do not require step-by-step logical decomposition, making the utility of reasoning highly counterintuitive. Nevertheless, we find that enabling reasoning substantially expands the capability boundary of the model’s parametric knowledge recall, unlocking correct answers that are otherwise effectively unreachable. Why does reasoning aid parametric knowledge recall when there are no complex reasoning steps to be done? To answer this, we design a series of hypothesis-driven controlled experiments, and identify two key driving mechanisms: (1) a computational buffer effect, where the model uses the generated reasoning tokens to perform latent computation independent of their semantic content; and (2) factual priming, where generating topically related facts acts as a semantic bridge that facilitates correct answer retrieval. Importantly, this latter generative self-retrieval mechanism carries inherent risks: we demonstrate that hallucinating intermediate facts during reasoning increases the likelihood of hallucinations in the final answer. Finally, we show that our insights can be harnessed to directly improve model accuracy by prioritizing reasoning trajectories that contain hallucination-free factual statements.

🤔 https://arxiv.org/pdf/2504.09037
A Survey of Frontiers in LLM Reasoning: Inference Scaling, Learning to Reason, and Agentic Systems
- Reasoning is a fundamental cognitive process that enables logical inference, problem-solving, and decision-making. With the rapid advancement of large language models (LLMs), reasoning has emerged as a key capability that distinguishes advanced AI systems from conventional models that empower chatbots. In this survey, we categorize existing methods along two orthogonal dimensions: (1) Regimes, which define the stage at which reasoning is achieved (either at inference time or through dedicated training); and (2) Architectures, which determine the components involved in the reasoning process, distinguishing between standalone LLMs and agentic compound systems that incorporate external tools, and multiagent collaborations. Within each dimension, we analyze two key perspectives: (1) Inputlevel, which focuses on techniques that construct high-quality prompts that the LLM condition on; and (2) Output level, which methods that refine multiple sampled candidates to enhance reasoning quality. This categorization provides a systematic understanding of the evolving landscape of LLM reasoning, highlighting emerging trends such as the shift from inference-scaling to learning-to-reason (e.g., DeepSeek-R1), and the transition to agentic workflows (e.g., OpenAI Deep Research, Manus Agent). Additionally, we cover a broad spectrum of learning algorithms, from supervised fine-tuning to reinforcement learning such as PPO and GRPO, and the training of reasoners and verifiers. We also examine key designs of agentic workflows, from established patterns like generator-evaluator and LLM debate to recent innovations. Finally, we identify emerging trends, such as domain-specific reasoning systems, and open challenges, such as evaluation and data quality. This survey aims to provide AI researchers and practitioners with a comprehensive foundation for advancing reasoning in LLMs, paving the way for more sophisticated and reliable AI systems.

https://arxiv.org/pdf/2502.10867
A Tutorial on LLM Reasoning: Relevant Methods behind ChatGPT o1
- [Jun Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+J)
- OpenAI o1 has shown that applying reinforcement learning to integrate reasoning steps directly during inference can significantly improve a model's reasoning capabilities. This result is exciting as the field transitions from the conventional autoregressive method of generating answers to a more deliberate approach that models the slow-thinking process through step-by-step reasoning training. Reinforcement learning plays a key role in both the model's training and decoding processes. In this article, we present a comprehensive formulation of reasoning problems and investigate the use of both model-based and model-free approaches to better support this slow-thinking framework.

https://arxiv.org/pdf/2504.19678
From LLM Reasoning to Autonomous AI Agents: A Comprehensive Review

https://arxiv.org/pdf/2601.18352
Code over Words: Overcoming Semantic Inertia via Code-Grounded Reasoning

https://arxiv.org/pdf/2505.16400
AceReason-Nemotron: Advancing Math and Code Reasoning through Reinforcement Learning

https://arxiv.org/abs/2601.22642
Pushing the Boundaries of Natural Reasoning: Interleaved Bonus from Formal-Logic Verification in Language Models

https://arxiv.org/abs/2603.01896
Agentic Code Reasoning 
Shubham Ugare, Satish Chandra  Meta, USA

https://arxiv.org/html/2602.06176v1
Large Language Model Reasoning Failures
[Peiyang Song](https://arxiv.org/search/cs?searchtype=author&query=Song,+P), [Pengrui Han](https://arxiv.org/search/cs?searchtype=author&query=Han,+P), [Noah Goodman](https://arxiv.org/search/cs?searchtype=author&query=Goodman,+N)
- Large Language Models (LLMs) have exhibited remarkable reasoning capabilities, achieving impressive results across a wide range of tasks. Despite these advances, significant reasoning failures persist, occurring even in seemingly simple scenarios. To systematically understand and address these shortcomings, we present the first comprehensive survey dedicated to reasoning failures in LLMs. We introduce a novel categorization framework that distinguishes reasoning into embodied and non-embodied types, with the latter further subdivided into informal (intuitive) and formal (logical) reasoning. In parallel, we classify reasoning failures along a complementary axis into three types: fundamental failures intrinsic to LLM architectures that broadly affect downstream tasks; application-specific limitations that manifest in particular domains; and robustness issues characterized by inconsistent performance across minor variations. For each reasoning failure, we provide a clear definition, analyze existing studies, explore root causes, and present mitigation strategies. By unifying fragmented research efforts, our survey provides a structured perspective on systemic weaknesses in LLM reasoning, offering valuable insights and guiding future research towards building stronger, more reliable, and robust reasoning capabilities. We additionally release a comprehensive collection of research works on LLM reasoning failures, as a GitHub repository at [this https URL](https://github.com/Peiyang-Song/Awesome-LLM-Reasoning-Failures), to provide an easy entry point to this area.


### Other Resources
https://github.com/atfortes/Awesome-LLM-Reasoning

https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs
- [Awesome-Efficient-Reasoning-LLMs](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#awesome-efficient-reasoning-llms)
    - [[TMLR 2025] Stop Overthinking: A Survey on Efficient Reasoning for Large Language Models](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#tmlr-2025-stop-overthinking-a-survey-on-efficient-reasoning-for-large-language-models)
    - [📢 Want to add related papers? Feel free to open a pull request!](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#-want-to-add-related-papers-feel-free-to-open-a-pull-request)
    - [📢 News](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#-news)
    - [📊 Taxonomy](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#-taxonomy)
    - [Section I: RL with Length Reward Design](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-i--rl-with-length-reward-design)
    - [Section II: SFT with Variable-Length CoT Data](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-ii-sft-with-variable-length-cot-data)
    - [Section III: Compressing Reasoning Steps into Fewer Latent Representation](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-iii-compressing-reasoning-steps-into-fewer-latent-representation)
    - [Section IV: Dynamic Reasoning Paradigm during Inference](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-iv-dynamic-reasoning-paradigm-during-inference)
    - [Section V: Prompt-Guided Efficient Reasoning](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-v-prompt-guided-efficient-reasoning)
    - [Section VI: Prompts Attribute-Driven Reasoning Routing](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-vi-prompts-attribute-driven-reasoning-routing)
    - [Section VII: Reasoning Abilities via Efficient Training Data and Model Compression](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-vii-reasoning-abilities-via-efficient-training-data-and-model-compression)
    - [Section VIII: Evaluation and Benchmark](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#section-viii-evaluation-and-benchmark)
    - [Citation](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#citation)
    - [Acknowledgment](https://github.com/Eclipsess/Awesome-Efficient-Reasoning-LLMs#acknowledgment)

https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy
Towards Improving Reasoning & Planning Capabilities of LLMs with Neuro-Symbolic Learning
1. [Awesome Tutorials & Workshops & Talks](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#-awesome-tutorials--workshops--talks)
2. [Awesome Survey](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#-awesome-survey--books)
3. [Basic Neuro-Symbolic Frameworks](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#-basic-neuro-symbolic-frameworks)
4. [Symbolic to LLM](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#-symbolic-to-llm)
	- [Symbolic Generation, LLM Imitation](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#symbolic-generation-llm-imitation)
	- [LLM Formalize, Symbolic Augment](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#llm-formalize-symbolic-augment)
5. [LLM to Symbolic](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#-llm-to-symbolic)
	- [Symbolic Solver Aided Methods](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#symbolic-solver-aided-methods)
	- [Program Aided Methods](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#program-aided-methods)
	- [Tool Aided Methods](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#tool-aided-methods)
	- [Search Augmented Methods](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#search-augmented-methods)
6. [LLM plus Symbolic](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#-llm-plus-symbolic)
	- [Symbolic Formatted Reasoning](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#symbolic-formatted-reasoning)
	- [Differential Symbolic Module](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#differential-symbolic-module)
	- [Symbolic Feedback](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#symbolic-feedback)
7. [Awesome Datasets & Benchmarks](https://github.com/LAMDASZ-ML/Awesome-LLM-Reasoning-with-NeSy#awesome-datasets--benchmarks)



## Intro
### Language, Logic, Deduction, and Reasoning
↗ [Language & Literature](../../../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Humanities/📃%20Language%20&%20Literature/Language%20&%20Literature.md)
↗ [Linguistics](../../../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Humanities/📃%20Language%20&%20Literature/Linguistics/Linguistics.md)

↗ [Logic (and Critical Thinking)](../../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
- ↗ [Formal System, Formal Logics, and Its Semantics](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Classical Logic (Standard Formal Logic)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)

↗ [Proof Theory](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Theory.md)
- ↗ [Gentzen-Style Proofs (Natural Deduction)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)

↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)

↗ [Knowledge Representation (Syntax Level) and Reasoning (KRR)](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR).md)


### Reasoning Language Model (RLM) /Large Reasoning Model (LRM)
> 🔗 https://en.wikipedia.org/wiki/Reasoning_model

A **reasoning model**, also known as a **reasoning language model** (**RLM**) or **large reasoning model** (**LRM**), is a type of [large language model](https://en.wikipedia.org/wiki/Large_language_model "Large language model") (LLM) that has been specifically trained to solve complex tasks requiring multiple steps of logical [reasoning](https://en.wikipedia.org/wiki/Reasoning "Reasoning"). These models demonstrate superior performance on logic, mathematics, and programming tasks compared to standard LLMs. They possess the ability to [revisit and revise](https://en.wikipedia.org/wiki/Backtracking "Backtracking") earlier reasoning steps and utilize additional computation during inference as a method to [scale performance](https://en.wikipedia.org/wiki/Neural_scaling_law "Neural scaling law"), complementing traditional scaling approaches based on training data size, model parameters, and training compute

Unlike traditional language models that generate responses immediately, reasoning models allocate additional compute, or thinking, time before producing an answer to solve multi-step problems. [OpenAI](https://en.wikipedia.org/wiki/OpenAI "OpenAI") introduced this terminology in September 2024 when it released the [o1 series](https://en.wikipedia.org/wiki/OpenAI_o1 "OpenAI o1"), describing the models as designed to "spend more time thinking" before responding. The company framed o1 as a reset in model naming that targets complex tasks in science, coding, and mathematics, and it contrasted o1's performance with [GPT-4o](https://en.wikipedia.org/wiki/GPT-4o "GPT-4o") on benchmarks such as [AIME](https://en.wikipedia.org/wiki/American_Invitational_Mathematics_Examination "American Invitational Mathematics Examination") and [Codeforces](https://en.wikipedia.org/wiki/Codeforces "Codeforces"). Independent reporting the same week summarized the launch and highlighted OpenAI's claim that o1 automates [chain-of-thought](https://en.wikipedia.org/wiki/Chain-of-thought_prompting "Chain-of-thought prompting") style reasoning to achieve large gains on difficult exams.

In operation, reasoning models generate internal chains of intermediate steps, then select and refine a final answer. [OpenAI](https://en.wikipedia.org/wiki/OpenAI "OpenAI") reported that o1's accuracy improves as the model is given more [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning "Reinforcement learning") during training and more test-time compute at inference. The company initially chose to hide raw chains and instead return a model-written summary, stating that it "decided not to show" the underlying thoughts so researchers could monitor them without exposing unaligned content to end users. Commercial deployments document separate "reasoning tokens" that meter hidden thinking and a control for "reasoning effort" that tunes how much compute the model uses. These features make the models slower than ordinary chat systems while enabling stronger performance on difficult problems.


### Domain Specific Reasoning
#### Code Reasoning
↗ [AI4Code](../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code/AI4Code.md)
↗ [LLM For Security](../../../../../CyberSecurity/🫧%20AI4Security/LLM%20For%20Security/LLM%20For%20Security.md)
#### Math Reasoning
↗ [AI4Math](../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4Math/AI4Math.md)


### Agentic Reasoning
↗ [LLM Agentic Reasoning](../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)


### Formal, Semi-Formal, and Informal Reasoning
↗ [Logic (and Critical Thinking)](../../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
- ↗ [Formal System, Formal Logics, and Its Semantics](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)

↗ [Proof Theory](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Theory.md)
↗ [Gentzen-Style Proofs (Natural Deduction)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)

↗ [Neuro-Symbolic AI](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Neuro-Symbolic%20AI/Neuro-Symbolic%20AI.md)



## Reasoning Taxonomy
### Reasoning Regime
#### Explicit Reasoning (Inference Time)

#### Implicit /Latent Reasoning (Training Time)


### Reasoning Architecture
#### Standalone LLM Reasoning

#### Single Agent System Reasoning

#### Multi-Agents System Reasoning



## Improving Explicit Reasoning (Inference Scaling)



## Improving Implicit /Latent Reasoning (Learning to Reason)



## Ref
[69 【一篇文章讲明白 LLM Reasoning - 万有引力Leon | 小红书 - 你的生活兴趣社区】 😆 2mCFcUPDwWm6SdG]: https://www.xiaohongshu.com/discovery/item/69a774ce000000001b01eab4?source=webshare&xhsshare=pc_web&xsec_token=ABCP5APAsftFcniB6Fp3pxbnNwdPOlX4xT85LtCixych0=&xsec_source=pc_share
	