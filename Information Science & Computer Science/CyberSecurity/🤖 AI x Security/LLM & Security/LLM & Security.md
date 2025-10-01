# LLM & Security

[TOC]



## Res
### Related Topics
↗ [LLM (Large Language Model)](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
- ↗ [LLM Agents & Agentical LLM](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)/🦑%20LLM%20(Large%20Language%20Model)/🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents%20&%20Agentical%20LLM/LLM%20Agents%20&%20Agentical%20LLM.md)

↗ [LLM & Software Security and Analysis](../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Software%20Security%20and%20Analysis.md)
↗ [LLM & Fuzzing](../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Fuzzing.md)
↗ [LLM & Supply Chain Security](../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Supply%20Chain%20Security.md)


### Paper Reading List
Zhang, J., Bu, H., Wen, H., Liu, Y., Fei, H., Xi, R., Li, L., Yang, Y., Zhu, H., & Meng, D. (2025). When LLMs meet cybersecurity: A systematic literature review. _Cybersecurity_, _8_(1), 55. [https://doi.org/10.1186/s42400-025-00361-w](https://doi.org/10.1186/s42400-025-00361-w)


### Awesome Large Language Model Tools for Cybersecurity Research
> 🔗 https://github.com/tenable/awesome-llm-cybersecurity-tools
#### Reverse Engineering
- [G-3PO: A Protocol Droid for Ghidra](https://github.com/tenable/ghidra_tools/tree/main/g3po): An AI assistant developed by Olivia Lucca Fraser at Tenable for analysing and annotating decompiled code in Ghidra, which queries OpenAI and/or Anthropic's language models. See [this writeup on the Tenable tech blog](https://medium.com/tenable-techblog/g-3po-a-protocol-droid-for-ghidra-4b46fa72f1ff) for details.
- [ai for Pwndbg](https://github.com/tenable/pwndbg/blob/dev/pwndbg/commands/ai.py): Your trusty AI debugging sidekick, developed by Olivia Lucca Fraser at Tenable as a Pwndbg command.
- [ai for GEF](https://github.com/tenable/gef-extras): Same as above, but implemented as a GEF command. Developed by Olivia Lucca Fraser at Tenable.
- [Gepetto](https://github.com/JusticeRage/Gepetto): An IDA Pro plugin that queries GPT models for explanatory comments and meaningful variable names (like G-3PO for IDA Pro). Developed by Ivan Kwiatkowski.
- [GPT-WPRE](https://github.com/moyix/gpt-wpre): Whole-program Reverse Engineering with GPT-3. This is a little toy prototype of a tool that attempts to summarize a whole binary using GPT-3 (specifically the text-davinci-003 model), based on decompiled code provided by Ghidra. Developed by Brendan Dolan-Gavitt.
- [IATelligence](https://github.com/fr0gger/IATelligence): IATelligence is a Python script that extracts the Import Address Table (IAT) from a PE file and uses OpenAI's GPT-3 model to provide details about each Windows API imported by the file. The script also searches for related MITRE ATT&CK techniques and explains how the API could potentially be used by attackers. Developed by Thomas Roccia.
#### Network Analysis
- [BurpGPT](https://github.com/Tenable/BurpGPT): A BurpSuite plugin, developed by Tenable, that uses GPT to analyse HTTP requests and responses. Developed by Yossi Nisani at Tenable.
#### Cloud Security
- [EscalateGPT](https://github.com/Tenable/EscalateGPT): Uses GPT to discover privilege escalation vulnerabilities in misconfigured Identity Access and Management (IAM) policies for AWS. Developed by Yossi Nisani at Tenable.
#### Proofs of Concept
##### Hacking LLMs
- [Indirect Prompt Injections](https://github.com/greshake/llm-security): Proof of concept code for indirect prompt injection attacks, by Kai Greshake.
##### LLM-Driven Malware
- [LLMorphism](https://github.com/SPTHvx/SPTH/tree/master/viruses/files/LLMorphism): A self-replicating agent that uses GPT-3.5 as a metamorphic engine, by Second Part to Hell.
- [Darwin-GPT](https://github.com/muellerberndt/darwin-gpt): A minimal self-replicating agent based on GPT-3.5/4, by Bernhard Mueller.


### 👨‍🍳 Agentic LLM + Automated Security
https://github.com/0x4m4/hexstrike-ai
HexStrike AI MCP v6.0 features a multi-agent architecture with autonomous AI agents, intelligent decision-making, and vulnerability intelligence.
- How It Works
	- **AI Agent Connection** - Claude, GPT, or other MCP-compatible agents connect via FastMCP protocol
	- **Intelligent Analysis** - Decision engine analyzes targets and selects optimal testing strategies
	- **Autonomous Execution** - AI agents execute comprehensive security assessments
	- **Real-time Adaptation** - System adapts based on results and discovered vulnerabilities
	- **Advanced Reporting** - Visual output with vulnerability cards and risk analysis


### Other Resources
https://aicyberchallenge.com/
- DARPA'S Artificial Intelligence Cyber Challenge (AIxCC), in collaboration with ARPA-H, brings together the foremost experts in AI and cybersecurity to safeguard the software critical to all Americans.
- AIXCC is excited to have Anthropic, Google, Microsoft, OpenAI, the Linux Foundation, the Open Source Security Foundation, Black Hat USA, and DEF CON as collaborators in this effort.*

🏠 https://github.com/ddzipp/AutoAudit
- [AutoAudit-7B](https://github.com/ddzipp/AutoAudit/blob/main)，此版本为demo版，基于[Alpaca-Lora](https://github.com/tloen/alpaca-lora)训练而来，在网络安全的英文领域回答效果尚佳，但暂时不具备上下文关联的功能，需要用更大参数的模型来解决。
- AutoAudit-33B，该版本仍然在内部测试和训练过程中，我们会稍晚些时候放出。

microsoft copilot



## Intro



## Ref
[大语言模型的可信之路：TrustLLM全面揭秘]: https://mp.weixin.qq.com/s/iah6Wz0VsMsJx_wCtgirBw
LLMs 的兴起也引入了关于它们可信度的担忧。与传统语言模型不同，LLMs 具有可能导致可信赖问题的独特特性：
1）**LLMs 的输出复杂性和多样性**，加上它们的优秀的生成能力。LLMs 展示了处理广泛复杂和多样化主题的无与伦比的能力。然而，这种复杂性可能导致不可预测性，从而可能产生不准确或误导性的输出。同时，它们先进的生成能力为恶意行为者滥用开辟了途径，包括传播虚假信息和促进网络攻击。例如，攻击者可能使用 LLMs 制作欺骗性和误导性文本，诱导用户点击恶意链接或下载恶意软件。此外，LLMs 可用于自动化网络攻击，例如生成大量假账户和评论，以扰乱网站的正常运营。LLMs 的安全机制绕过技术，即所谓的 “越狱攻击”（jailbreak），也构成了重大威胁。
2）**训练数据集中的偏见和隐私信息**。可信赖的一个主要挑战来自训练数据集中潜在的偏见，这对 LLMs 生成内容的公平性有重大影响。例如，数据中的以男性为中⼼的偏见可能使得大语言模型主要反映男性观点的输出，从而使女性的贡献和观点被忽视。同样，偏好特定文化背景的偏见可能导致对该文化有偏见的回应，从而忽视其他文化背景中存在的多样性。另一个关键问题是训练数据集中包含敏感个⼈信息。在缺乏严格保护措施的情况下，这些数据容易被滥用，可能导致隐私泄露。这一问题在保持患者数据机密性至关重要的医疗领域尤为严重。 
3）**用户对 LLMs 的高期望**。用户可能对 LLMs 的性能有很高的期望，期望它们提供准确且有见地的回应，强调模型与⼈类价值观的一致性。许多研究者对 LLMs 是否与⼈类价值观一致表示担忧。一种不一致可能会显著影响它们在各个领域的广泛应用。例如，LLM 可能认为某些情况下的行为是合适的，但⼈类可能认为它不适当，从而导致其应用中的冲突和矛盾。 
虽然 LLMs 的开发者已经做出了重大努力来解决上述担忧。例如，OpenAI 采取了措施以确保 LLMs 在训练数据阶段、训练方法和下游应用中的可信度。WebGPT 被引⼊以协助⼈类评估在 LLMs 生成内容中识别不准确信息。同时，Meta AI 在 Llama2 中引⼊了新的安全对齐基准，包括在预训练、微调和红队评估中的广泛安全调查。尽管⼈们已经付出了非常多的努力来确保大语言模型的可信赖，一个问题仍然存在：**我们真正能在多大程度上信任 LLMs？** 
在一篇论文中，来自40个机构的近70位研究者合作提出了 TrustLLM—— 一个统一的框架，用于对 LLM 可信度的全面分析，包括现有工作的全面综述、可信 LLM 的不同维度的原则、一个新的测试基准，以及对主流 LLM 的全面可信度评估。此外，作者开源了用于快速评估 LLMs 的 toolkit，并且维护了一个 leaderboard 来展示 LLMs 的可信赖的表现。

[What is Microsoft Security Copilot?]: https://learn.microsoft.com/en-us/security-copilot/microsoft-security-copilot
