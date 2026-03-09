# RLM (Reasoning Language Model) & LRM (Large Reasoning Model)

[TOC]



## Res
### Related Topics
↗ [LLM Agentic Reasoning](../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)
↗ [Neuro-Symbolic AI](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Neuro-Symbolic%20AI/Neuro-Symbolic%20AI.md)

↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
- ↗ [LLM and RL](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/LLM%20and%20RL.md)
↗ [RLFT (Reinforcement Learning Fine Tuning)](LLM%20Training/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning).md)

↗ [Logic (and Critical Thinking)](../../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
- ↗ [Formal System, Formal Logics, and Its Semantics](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)

↗ [Knowledge Representation (Syntax Level) and Reasoning (KRR)](../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR).md)

↗ [AI4Code & Coding Agents](../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code%20&%20Coding%20Agents/AI4Code%20&%20Coding%20Agents.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Reasoning_model

A **reasoning model**, also known as a **reasoning language model** (**RLM**) or **large reasoning model** (**LRM**), is a type of [large language model](https://en.wikipedia.org/wiki/Large_language_model "Large language model") (LLM) that has been specifically trained to solve complex tasks requiring multiple steps of logical [reasoning](https://en.wikipedia.org/wiki/Reasoning "Reasoning"). These models demonstrate superior performance on logic, mathematics, and programming tasks compared to standard LLMs. They possess the ability to [revisit and revise](https://en.wikipedia.org/wiki/Backtracking "Backtracking") earlier reasoning steps and utilize additional computation during inference as a method to [scale performance](https://en.wikipedia.org/wiki/Neural_scaling_law "Neural scaling law"), complementing traditional scaling approaches based on training data size, model parameters, and training compute

Unlike traditional language models that generate responses immediately, reasoning models allocate additional compute, or thinking, time before producing an answer to solve multi-step problems. [OpenAI](https://en.wikipedia.org/wiki/OpenAI "OpenAI") introduced this terminology in September 2024 when it released the [o1 series](https://en.wikipedia.org/wiki/OpenAI_o1 "OpenAI o1"), describing the models as designed to "spend more time thinking" before responding. The company framed o1 as a reset in model naming that targets complex tasks in science, coding, and mathematics, and it contrasted o1's performance with [GPT-4o](https://en.wikipedia.org/wiki/GPT-4o "GPT-4o") on benchmarks such as [AIME](https://en.wikipedia.org/wiki/American_Invitational_Mathematics_Examination "American Invitational Mathematics Examination") and [Codeforces](https://en.wikipedia.org/wiki/Codeforces "Codeforces"). Independent reporting the same week summarized the launch and highlighted OpenAI's claim that o1 automates [chain-of-thought](https://en.wikipedia.org/wiki/Chain-of-thought_prompting "Chain-of-thought prompting") style reasoning to achieve large gains on difficult exams.

In operation, reasoning models generate internal chains of intermediate steps, then select and refine a final answer. [OpenAI](https://en.wikipedia.org/wiki/OpenAI "OpenAI") reported that o1's accuracy improves as the model is given more [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning "Reinforcement learning") during training and more test-time compute at inference. The company initially chose to hide raw chains and instead return a model-written summary, stating that it "decided not to show" the underlying thoughts so researchers could monitor them without exposing unaligned content to end users. Commercial deployments document separate "reasoning tokens" that meter hidden thinking and a control for "reasoning effort" that tunes how much compute the model uses. These features make the models slower than ordinary chat systems while enabling stronger performance on difficult problems.



## Improving Reasoning
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



## Specialized Reasoning
### Code Reasoning
↗ [AI4Code & Coding Agents](../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code%20&%20Coding%20Agents/AI4Code%20&%20Coding%20Agents.md)
↗ [LLM & Security](../../../../../CyberSecurity/🫧%20AI4Security/LLM%20&%20Security/LLM%20&%20Security.md)



## Ref
