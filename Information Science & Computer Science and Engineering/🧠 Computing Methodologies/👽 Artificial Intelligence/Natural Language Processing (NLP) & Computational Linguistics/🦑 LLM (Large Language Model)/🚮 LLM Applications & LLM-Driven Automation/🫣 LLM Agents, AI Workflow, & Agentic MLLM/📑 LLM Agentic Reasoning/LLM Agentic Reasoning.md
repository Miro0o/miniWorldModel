# LLM Agentic Reasoning

[TOC]



## Res
### Related Topics
↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)
↗ [RLM (Reasoning Language Model) & LRM (Large Reasoning Model)](../../../LLM%20Training,%20Utilization,%20and%20Evaluation/RLM%20(Reasoning%20Language%20Model)%20&%20LRM%20(Large%20Reasoning%20Model).md)


### Other Resources
https://github.com/weitianxin/Awesome-Agentic-Reasoning
- **[01/21/26]** 🚀 We have released a comprehensive survey on _**Agentic Reasoning for Large Language Models**_! The paper is now available on [arxiv](https://arxiv.org/abs/2601.12538) and [HuggingFace](https://huggingface.co/papers/2601.12538). We welcome contributions from the community to help expand and improve our survey 🤗!
- [📋 Table of Contents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-table-of-contents)
	- [🌟 Introduction](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-introduction)
	- [🤝 Contributing](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-contributing)
	- [📝 Citation](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-citation)
	- [🏗️ Foundational Agentic Reasoning](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#%EF%B8%8F-foundational-agentic-reasoning)
	    - [🗺️ Planning Reasoning](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#%EF%B8%8F-planning-reasoning)
	    - [🛠️ Tool-Use Optimization](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#%EF%B8%8F-tool-use-optimization)
	    - [🔍 Agentic Search](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-agentic-search)
	- [🧬 Self-evolving Agentic Reasoning](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-self-evolving-agentic-reasoning)
	    - [🔄 Agentic Feedback Mechanisms](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-agentic-feedback-mechanisms)
	    - [🧠 Agentic Memory](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-agentic-memory)
	    - [🚀 Evolving Foundational Agentic Capabilities](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-evolving-foundational-agentic-capabilities)
	- [👥 Collective Multi-agent Reasoning](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-collective-multi-agent-reasoning)
	    - [🎭 Role Taxonomy of Multi-Agent Systems (MAS)](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-role-taxonomy-of-multi-agent-systems-mas)
	    - [🤝 Collaboration and Division of Labor](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-collaboration-and-division-of-labor)
	    - [🌱 Multi-Agent Memory and Evolution](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-multi-agent-memory-and-evolution)
	- [🎨 Applications](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-applications)
	    - [💻 Math Exploration & Vibe Coding Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-math-exploration--vibe-coding-agents)
	    - [🔬 Scientific Discovery Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-scientific-discovery-agents)
	    - [🤖 Embodied Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-embodied-agents)
	    - [🏥 Healthcare & Medicine Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-healthcare--medicine-agents)
	    - [🌐 Autonomous Web Exploration & Research Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-autonomous-web-exploration--research-agents)
	- [📊 Benchmarks](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-benchmarks)
	    - [⚙️ Core Mechanisms of Agentic Reasoning](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-core-mechanisms-of-agentic-reasoning)
	        - [Tool Use](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#tool-use)
	        - [Search](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#search)
	        - [Memory and Planning](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#memory-and-planning)
	        - [Multi-Agent System](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#multi-agent-system)
	    - [🎯 Applications of Agentic Reasoning](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#-applications-of-agentic-reasoning)
	        - [Embodied Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#embodied-agents-1)
	        - [Scientific Discovery Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#scientific-discovery-agents-1)
	        - [Autonomous Research Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#autonomous-research-agents)
	        - [Medical and Clinical Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#medical-and-clinical-agents)
	        - [Web Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#web-agents)
	        - [General Tool-Use Agents](https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#general-tool-use-agents)

https://arxiv.org/abs/2603.01896
Agentic Code Reasoning 
Shubham Ugare, Satish Chandra 
Meta, USA



## Intro
> 🔗 https://github.com/weitianxin/Awesome-Agentic-Reasoning?tab=readme-ov-file#%EF%B8%8F-foundational-agentic-reasoning

We organize agentic reasoning into three layers, each corresponding to a distinct reasoning paradigm under different _environmental dynamics_:
- **Foundational Reasoning.** Core single-agent abilities (planning, tool-use, search) in environments
- **Self-Evolving Reasoning.** Adaptation through feedback, memory, and learning in dynamic settings
- **Collective Reasoning.** Multi-agent coordination, role specialization, and collaborative intelligence

Across these layers, we further identify complementary reasoning paradigms defined by their _optimization settings_.
- **In-Context Reasoning.** Test-time scaling through structured orchestration and adaptive workflows
- **Post-Training Reasoning.** Behavior optimization via RL and supervised fine-tuning



## Ref
