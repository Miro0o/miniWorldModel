# LLM Utilization & Prompt, Context, and Harness Engineering

[TOC]



## Res
### Related Topics
↗ [LLM Applications & LLM-Driven Automation](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/LLM%20Applications%20&%20LLM-Driven%20Automation.md)
↗ [Agentic LLMs & AI Workflow](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/Agentic%20LLMs%20&%20AI%20Workflow.md)

↗ [LLM Agentic Reasoning](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)
↗ [Uncertain Knowledge & Probabilistic Reasoning (Decision Making)](../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Uncertain%20Knowledge%20&%20Probabilistic%20Reasoning%20(Decision%20Making).md)
↗ [RLM (Reasoning Language Model) & LRM (Large Reasoning Model)](../RLM%20(Reasoning%20Language%20Model)%20&%20LRM%20(Large%20Reasoning%20Model).md)

↗ [AI4Math](../../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4Math/AI4Math.md)
↗ [AI4Code](../../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code/AI4Code.md)

↗ [LLM Infrastructure (Deployment & Inference)](../../LLM%20Infrastructure%20(Deployment%20&%20Inference)/LLM%20Infrastructure%20(Deployment%20&%20Inference).md)

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
↗ [LLM Agentic Reasoning](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)
↗ [RLM (Reasoning Language Model) & LRM (Large Reasoning Model)](../RLM%20(Reasoning%20Language%20Model)%20&%20LRM%20(Large%20Reasoning%20Model).md)
↗ [AI4Math](../../../../❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4Math/AI4Math.md)
↗ [AI4Code](../../../../../../Software%20Engineering/🤖%20AI4SE/🤔%20AI4Code/AI4Code.md)


### Best Practice: Using LLMs for Specific Tasks
> 🤖 gpt 5.5

The best practice is not "prompt harder"; it is to match the task to the lightest reliable LLM pattern, then test it against representative cases.

1. Define the Task Contract

Before choosing prompting, RAG, tools, skills, agents, or fine-tuning, specify:
- Objective: what successful output means.
- Inputs: allowed sources, files, APIs, user-provided data, context freshness.
- Output contract: prose, JSON schema, table, code patch, report, decision, classification label.
- Constraints: tone, length, budget, latency, citations, privacy, allowed tools.
- Failure behavior: when to ask a question, refuse, escalate to human review, or return "unknown".
- Evaluation cases: normal, edge, adversarial, and common failure cases.

Good prompts usually have this shape:

```text
Task: [specific job]
Context: [only facts needed for this job]
Input: [data to operate on]
Constraints: [rules, limits, safety boundaries]
Output format: [exact schema/template]
Quality bar: [what to check before final answer]
Uncertainty handling: [what to do if missing/conflicting evidence]
```

---
2. Use the LLM Utilization Ladder

| Task condition | Prefer |
|---|---|
| One-off writing, summarization, brainstorming, explanation | Clear prompt with task, context, constraints, and output format |
| Output must follow a specific format | Template, examples, structured output schema, or validator |
| Task depends on current, private, or domain-specific facts | Context engineering or RAG with source attribution |
| Task requires exact computation, parsing, sorting, transformations, or API calls | Deterministic tool/script/function call, with LLM for orchestration and explanation |
| Task is repeatable and procedural | Agent Skill or reusable prompt harness |
| Task requires multiple tools and decisions over time | Agent workflow with checkpoints, logs, and permissions |
| Task is high-volume, stable, and examples exceed prompt/context capacity | Fine-tuning or distillation, only after evals show prompting/RAG is insufficient |
| Task is high-risk: legal, medical, security, financial, destructive actions | Human review, strict source control, permission gates, and audit logs |

---
3. Prompting Practices That Usually Transfer Across Models

- Be explicit and specific. Name the task, audience, constraints, and desired output.
- Separate instructions, context, examples, and user input with headings or delimiters.
- Provide examples when the output style or decision boundary is subtle.
- Give the model the context it cannot know: project conventions, business rules, current docs, schemas, and policies.
- Ask for concise verification, not hidden reasoning. For modern reasoning models, direct outcome-level instructions often work better than forcing "think step by step".
- Use a validator whenever the output is machine-consumed: JSON schema, tests, lints, type checks, calculators, database constraints, or custom scripts.
- Log prompts, context, outputs, tool calls, and user corrections so failures can become eval cases.

 ---
 4. Context Engineering Practices

- Put only relevant context in the active prompt. More context can reduce reliability if it distracts from the task.
- Keep long references external and load them on demand.
- Use retrieval when facts change or are too large for the prompt.
- Include provenance: where each retrieved fact came from.
- Separate durable instructions from per-request data.
- For agent systems, prefer progressive disclosure: a short index/description first, detailed instructions only when needed.

 ---
 5. Evaluation Practices

Run evals before optimizing prompts too aggressively.

Useful eval sets contain:
- Typical production inputs.
- Hard examples from previous failures.
- Edge cases and adversarial prompts.
- Examples requiring refusal, uncertainty, or source citation.
- Cases for every supported output format.

Useful eval metrics include:
- Exact match or schema validity for classifiers/extractors.
- Factuality and source-grounding for Q&A/summarization.
- Test/lint/type-check pass rate for coding tasks.
- Human preference or rubric grading for writing and judgment tasks.
- Cost, latency, and tool-call count for production workflows.



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


### Agentic Techniques
> [!links]
> ↗ [Agentic LLMs & AI Workflow](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/Agentic%20LLMs%20&%20AI%20Workflow.md)
> - ↗ [LLM Agentic Reasoning](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/📑%20LLM%20Agentic%20Reasoning/LLM%20Agentic%20Reasoning.md)
> - ↗ [MCP (Model Context Protocol)](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/MCP%20(Model%20Context%20Protocol)/MCP%20(Model%20Context%20Protocol).md)
> 
> ↗ [Agentic AI Workflow Dev](../../../../../../Software%20Engineering/🤖%20AI4SE/🦾%20AI%20Powered%20Dev%20&%20Vibe%20Coding/Agentic%20AI%20Workflow%20Dev/Agentic%20AI%20Workflow%20Dev.md)
> ↗ [AI Agent Assistants (General Purpose) & LLM OS](../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/AI%20Agent%20Assistants%20(General%20Purpose)%20&%20LLM%20OS/AI%20Agent%20Assistants%20(General%20Purpose)%20&%20LLM%20OS.md)
#### Agent Skills 🤔
> [!Abstract]
> Anthropic: "[Introducing Agent Skills](https://www.anthropic.com/news/skills)"
> - Claude can now use _Skills_ to improve how it performs specific tasks. Skills are folders that include instructions, scripts, and resources that Claude can load when needed.
> - Claude will only access a skill when it's relevant to the task at hand. When used, skills make Claude better at specialized tasks like working with Excel or following your organization's brand guidelines.
> 
> Anthropic: ["Equipping agents for the world with Agent Skills"](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

> [!Abstract] Skills Collections
> 
> https://github.com/ljagiello/ctf-skills
> Agent skills for solving CTF challenges - web exploitation, binary pwn, crypto, reverse engineering, forensics, OSINT, and more

> 🔗 https://agentskills.io/home

Agent Skills are folders of instructions, scripts, and resources that agents can discover and use to do things more accurately and efficiently.
```
my-skill/
├── SKILL.md          # Required: instructions + metadata
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
└── assets/           # Optional: templates, resources
```

Why Agent Skills?
Agents are increasingly capable, but often don’t have the context they need to do real work reliably. Skills solve this by giving agents access to procedural knowledge and company-, team-, and user-specific context they can load on demand. Agents with access to a set of skills can extend their capabilities based on the task they’re working on.**For skill authors**: Build capabilities once and deploy them across multiple agent products.**For compatible agents**: Support for skills lets end users give agents new capabilities out of the box.**For teams and enterprises**: Capture organizational knowledge in portable, version-controlled packages.

What can Agent Skills enable?
- **Domain expertise**: Package specialized knowledge into reusable instructions, from legal review processes to data analysis pipelines.
- **New capabilities**: Give agents new capabilities (e.g. creating presentations, building MCP servers, analyzing datasets).
- **Repeatable workflows**: Turn multi-step tasks into consistent and auditable workflows.
- **Interoperability**: Reuse the same skill across different skills-compatible agent products.
##### Lists of Agent Skills 
https://x.com/zodchiii/status/2034924354337714642?s=20
Top 50 Claude Skills & GitHub  Repos for AI — The Only List You  Need.
###### Standards and Official Baselines
> 🤖 gpt 5.5

| Resource | Type | Why track it |
|---|---|---|
| [AgentSkills.io](https://agentskills.io/) and [agentskills GitHub org](https://github.com/agentskills) | Open standard and docs | Canonical `SKILL.md` format, docs, examples, and portability baseline. |
| [Anthropic Agent Skills docs](https://docs.claude.com/en/docs/claude-code/skills) | Official docs | Claude Code/Claude API skill behavior, discovery paths, invocation, and authoring docs. |
| [Anthropic engineering: Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) | Official explainer | Good conceptual overview: progressive disclosure, scripts, evaluation, and security. |
| [anthropics/skills](https://github.com/anthropics/skills) | Official reference catalog | Example skills for documents, creative/design, development, communication, and templates. |
| [openai/skills](https://github.com/openai/skills) | Official Codex skills catalog | Codex-focused skills catalog with system, curated, and experimental skills. |
| [MicrosoftDocs/Agent-Skills](https://github.com/MicrosoftDocs/Agent-Skills) | Official Azure skills catalog | Microsoft/Azure skills generated from Microsoft Learn, with compatibility notes for Claude, Codex, Copilot, Cursor, Gemini, and OpenCode. |
| [Vercel Labs skills CLI](https://github.com/vercel-labs/skills) | Package manager / installer | `npx skills` installer and multi-agent support for OpenCode, Claude Code, Codex, Cursor, and others. |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Official/domain collection | Vercel-focused and web-development skills; useful examples of skill structure and install docs. |
| [trailofbits/skills](https://github.com/trailofbits/skills) | Domain marketplace | Security research, vulnerability detection, reverse engineering, static analysis, and audit workflow skills. |
###### Searchable Directories and Marketplaces
> 🤖 gpt 5.5

| Resource                                                                         | Type                      | Notes                                                                                                          |
| -------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [skills.sh](https://www.skills.sh/)                                              | Agent skills directory    | Large searchable directory with install/activity signals; docs warn that listed skills still need user review. |
| [officialskills.sh](https://officialskills.sh/)                                  | Official-team directory   | Maintained by VoltAgent team; focuses on official dev-team skills and avoids AI-generated filler.              |
| [Awesome Skills](https://www.awesomeskills.dev/)                                 | Searchable directory      | Browse `SKILL.md` files across GitHub for Claude Code, Codex, Cursor, and related agents.                      |
| [AwesomeSkill.ai](https://awesomeskill.ai/)                                      | Marketplace/directory     | Marketplace-style browser for Claude, Codex, ChatGPT, and coding-agent skills.                                 |
| [Claude Skills Hub directory](https://claudeskills.info/agent-skills/directory/) | Directory                 | Central index for AI agent skills built on the open `SKILL.md` standard.                                       |
| [SkillsDirectory.com](https://www.skillsdirectory.com/)                          | Directory                 | Positions itself around secure/verified skills for Claude, coding agents, and AI workflows.                    |
| [MDSkill](https://mdskill.dev/)                                                  | Directory/CLI             | Search, audit, and install agent skills; includes multi-agent support and security scoring claims.             |
| [DiscoverAISkills](https://discoveraiskills.com/)                                | Directory                 | AI skills, Claude skills, MCP servers, and agent tools in one place.                                           |
| [skillsdir.dev](https://skillsdir.dev/)                                          | Directory/package manager | Claude-oriented standardized skill directory and package-manager style site.                                   |
| [AgentSkillHub](https://www.agentskillhub.io/)                                   | Directory                 | Searchable Claude/agent skills library with verified labels.                                                   |
| [SkillsGate](https://skillsgate.ai/)                                             | Visual manager            | Desktop/TUI manager powered by skills.sh public skill discovery.                                               |
| [AgenticSkills](https://agenticskills.io/)                                       | Directory                 | AI agent skills plus MCP server discovery.                                                                     |
| [SkillsHunt](https://skillshunt.org/)                                            | Directory                 | Searchable skills and MCP discovery, including meta/community collections.                                     |
| [ReadFa](https://readfa.com/)                                                    | Directory                 | Cross-platform skill discovery with governance and MCP coverage.                                               |
| [ClawHub](https://clawhub.ai/)                                                   | OpenClaw/skill sharing    | Agent skill sharing and discovery, especially relevant to OpenClaw-style local agents.                         |
| [SkillNet](https://skillnet.openkg.cn/)                                          | Repository/directory      | Listed by the Awesome-Agent-Skills research hub as a large-scale skill repository/organization platform.       |
| [SkillHub](https://www.skillhub.club/)                                           | Community hub             | Listed by the Awesome-Agent-Skills research hub as community skill resources.                                  |
| [SkillsMP](https://skillsmp.com/)                                                | Marketplace               | Listed by the Awesome-Agent-Skills research hub as a marketplace-style skill ecosystem.                        |
###### GitHub Awesome Lists and Meta-Repositories
> 🤖 gpt 5.5

| Resource                                                                                              | Focus                              | Notes                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)                   | General agent skills               | Strong first stop. Curates official and community skills from Anthropic, OpenAI, Google, Vercel, Stripe, Cloudflare, Netlify, Trail of Bits, Sentry, Expo, Hugging Face, Figma, Microsoft, and more. |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)               | Claude skills and app integrations | Large curated Claude skills/plugins list; useful when looking for skills that connect to external apps and workflows.                                                                                |
| [GetBindu/awesome-claude-code-and-skills](https://github.com/GetBindu/awesome-claude-code-and-skills) | Claude Code skills, agents, tools  | Large topical guide covering security, marketing, documentation, Claude Code guides, workflows, and related tooling.                                                                                 |
| [kodustech/awesome-agent-skills](https://github.com/kodustech/awesome-agent-skills)                   | Software engineering skills        | Curated list for AI coding agents, organized by frontend, backend, DevOps, testing, security, observability, mobile, data science, and related categories.                                           |
| [JayLZhou/Awesome-Agent-Skills](https://github.com/JayLZhou/Awesome-Agent-Skills)                     | Research hub                       | Paper list, taxonomy, benchmarks, platforms, and ecosystem resources for skill-centric LLM agents.                                                                                                   |
| [junminhong/awesome-agent-skills](https://github.com/junminhong/awesome-agent-skills)                 | Cross-platform workflows           | Bilingual list covering Codex, Claude Code, Kiro CLI, practical categories, and getting-started material.                                                                                            |
| [seb1n/awesome-ai-agent-skills](https://github.com/seb1n/awesome-ai-agent-skills)                     | Self-contained skills              | Library of complete, platform-agnostic skills rather than only links to external repos.                                                                                                              |
| [theneoai/awesome-skills](https://github.com/theneoai/awesome-skills)                                 | Persona/professional prompt packs  | Broad "expert skill" prompt-pack collection for professional roles and workflow methods. Needs quality review before use.                                                                            |
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)             | OpenClaw skills                    | Large categorized list filtered from the OpenClaw skills registry. Useful for local-first/plugin-style agents.                                                                                       |
| [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills)                   | Claude skills                      | Community curated Claude Skills list.                                                                                                                                                                |
| [w95/awesome-claude-corporate-skills](https://github.com/w95/awesome-claude-corporate-skills)         | Corporate roles                    | Skills organized by executive leadership, finance, HR, marketing, sales, legal, operations, engineering, product, data, customer success, procurement, and document processing.                      |
| [InternScience/Awesome-Scientific-Skills](https://github.com/InternScience/Awesome-Scientific-Skills) | Scientific research                | Agent Skills for scientific research plus references to related skill mega-lists.                                                                                                                    |
| [github/awesome-copilot](https://github.com/github/awesome-copilot)                                   | Copilot ecosystem                  | Adjacent collection of skills, prompts, plugins, cookbooks, custom agents, and Copilot resources.                                                                                                    |
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | Subagents, adjacent                | Not strictly skills, but useful when comparing skills vs specialized subagents.                                                                                                                      |
| [kyrolabs/awesome-agents](https://github.com/kyrolabs/awesome-agents)                                 | Agent frameworks, adjacent         | Useful broader list for agent tools/products/frameworks; not specifically a skills directory.                                                                                                        |
###### Direct Skill Collections Worth Tracking
> 🤖 gpt 5.5

These are not always "collections of collections", but they are large or high-signal skill libraries:

| Resource | Focus |
|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | Official Claude examples and document skills. |
| [openai/skills](https://github.com/openai/skills) | Official Codex skills catalog. |
| [MicrosoftDocs/Agent-Skills](https://github.com/MicrosoftDocs/Agent-Skills) | Azure and Microsoft Learn skill catalog. |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Vercel/web-development skills. |
| [trailofbits/skills](https://github.com/trailofbits/skills) | Security analysis, audits, static analysis, reverse engineering, smart contracts. |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | Multi-category production-oriented skills across marketing, product, business, compliance, finance, docs, and design. |
| [agent-skills-hub/agent-skills-hub](https://github.com/agent-skills-hub/agent-skills-hub) | Cross-platform skill hub for OpenClaw, Claude Code, Gemini, Cursor, Antigravity, and others. |
##### How to Choose a Skill Collection
> 🤖 gpt 5.5

Prefer in this order:
1. Official vendor or project-maintainer skills for the tool/API/framework you are using.
2. Reputable domain experts for high-risk domains, for example security skills from security firms.
3. Curated lists that link to source repositories and expose maintainers, stars, issues, and install instructions.
4. Directories with quality/security signals, but still inspect the actual repo.
5. Bulk-generated skill packs only as inspiration, not as trusted install targets.

Red flags:
- No visible source repository.
- Very broad claims like "does everything" without examples or validators.
- Large scripts with hidden dependencies.
- Instructions that ask the agent to ignore user/security policies.
- Network calls to unknown domains.
- Secret handling without explicit rules.
- Skills that grant broad tool permissions without need.
##### Maintenance Queries
> 🤖 gpt 5.5

Useful searches to refresh this note:

```text
site:github.com "awesome-agent-skills"
site:github.com "awesome-claude-skills"
site:github.com "SKILL.md" "Agent Skills"
site:github.com "Codex" "Claude Code" "Cursor" "SKILL.md"
"Agent Skills directory" "Codex" "Claude Code"
"skills.sh" "agent skills"
"Agent Skills" "open standard" "SKILL.md"
```



## Context Engineering
> [!Abstract]
> https://arxiv.org/abs/2507.13334
> A Survey of Context Engineering for Large Language Models
> - [Lingrui Mei](https://arxiv.org/search/cs?searchtype=author&query=Mei,+L), [Jiayu Yao](https://arxiv.org/search/cs?searchtype=author&query=Yao,+J), [Yuyao Ge](https://arxiv.org/search/cs?searchtype=author&query=Ge,+Y), [Yiwei Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Baolong Bi](https://arxiv.org/search/cs?searchtype=author&query=Bi,+B), [Yujun Cai](https://arxiv.org/search/cs?searchtype=author&query=Cai,+Y), [Jiazhi Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+J), [Mingyu Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+M), [Zhong-Zhi Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+Z), [Duzhen Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+D), [Chenlin Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+C), [Jiayi Mao](https://arxiv.org/search/cs?searchtype=author&query=Mao,+J), [Tianze Xia](https://arxiv.org/search/cs?searchtype=author&query=Xia,+T), [Jiafeng Guo](https://arxiv.org/search/cs?searchtype=author&query=Guo,+J), [Shenghua Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+S)



## (LLM Agent) Harness Engineering
> [!Abstract]
> https://www.anthropic.com/engineering/harness-design-long-running-apps
> Harness design for long-running application development (Published Mar 24, 2026)
> Harness design is key to performance at the frontier of agentic coding. Here's how we pushed Claude further in frontend design and long-running autonomous software engineering.
> 
> https://openai.com/index/harness-engineering/
> Harness engineering: leveraging Codex in an agent-first world By Ryan Lopopolo, Member of the Technical Staff (February 11, 2026)
> **Our most difficult challenges now center on designing environments, feedback loops, and control systems** that help agents accomplish our goal: build and maintain complex, reliable software at scale.

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

[Your harness, your memory]: https://x.com/hwchase17/status/2042978500567609738?s=20
The “best” way to build agentic systems has changed dramatically over the past three years. When ChatGPT came out, all you could do were simple RAG chains ([LangChain](https://github.com/langchain-ai/langchain)). Then the models got a little better, and could create more complex flows ([LangGraph](https://github.com/langchain-ai/langgraph)). Then they got a lot better, and that gave rise to a new type of scaffolding - [agent harnesses](https://blog.langchain.com/the-anatomy-of-an-agent-harness/). Examples of agent harnesses include [Claude Code](https://code.claude.com/docs/en/overview), [Deep Agents](https://github.com/langchain-ai/deepagents), [Pi](https://github.com/badlogic/pi-mono) (powers [OpenClaw](https://docs.openclaw.ai/) ), [OpenCode](https://opencode.ai/), [Codex](https://openai.com/codex/), [Letta Code](https://www.letta.com/blog/letta-code), and many more.

![](../../../../../../../Assets/Pics/Pasted%20image%2020260425205813.png)

[Using Git with coding agents]: https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/