# Claude Code

[TOC]



## Res
🚧 https://github.com/anthropics/claude-code


### Related Topics
↗ [Anthropic Claude](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/Main%20Stream%20General%20Models/Anthropic%20Claude.md)
↗ [AI Agent Assistants (General Purpose) & LLM OS](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20Agentic%20LLMs%20&%20AI%20Workflow/AI%20Agent%20Assistants%20(General%20Purpose)%20&%20LLM%20OS/AI%20Agent%20Assistants%20(General%20Purpose)%20&%20LLM%20OS.md)


### Other Resources
Liu, J.; Zhao, X.; Shang, X.; Shen, Z. Dive into Claude Code: The Design Space of Today’s and Future AI Agent Systems. arXiv April 14, 2026. [https://doi.org/10.48550/arXiv.2604.14228](https://doi.org/10.48550/arXiv.2604.14228).



## Intro



## Ref
[Caught in the Hook: RCE and API Token Exfiltration Through Claude Code Project Files | CVE-2025-59536 | CVE-2026-21852]: https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/?utm_source=chatgpt.com
Check Point Research has discovered **critical** vulnerabilities in Anthropic’s Claude Code that allow attackers to achieve **remote code execution** and steal API credentials through malicious project configurations. The vulnerabilities exploit various configuration mechanisms including **Hooks**, **Model Context Protocol** (MCP) servers, and **environment variables** -executing arbitrary shell commands and exfiltrating Anthropic API keys when users clone and open untrusted repositories. Following our disclosure, Check Point Research collaborated closely with the Anthropic security team to ensure these vulnerabilities were fully remediated. **All reported issues have been successfully patched prior to this publication.**

[实测Claude Code Security找漏洞]: https://mp.weixin.qq.com/s/pQTJbhJ38vSAp_rguQUJgA

[Claude Code Source Snapshot for Security Research]: https://github.com/instructkr/claude-code
This repository mirrors a **publicly exposed Claude Code source snapshot** that became accessible on **March 31, 2026** through a source map exposure in the npm distribution. It is maintained for **educational, defensive security research, and software supply-chain analysis**.

| Category          | Technology                                                               |
| ----------------- | ------------------------------------------------------------------------ |
| Runtime           | [Bun](https://bun.sh/)                                                   |
| Language          | TypeScript (strict)                                                      |
| Terminal UI       | [React](https://react.dev/) + [Ink](https://github.com/vadimdemedes/ink) |
| CLI Parsing       | [Commander.js](https://github.com/tj/commander.js) (extra-typings)       |
| Schema Validation | [Zod v4](https://zod.dev/)                                               |
| Code Search       | [ripgrep](https://github.com/BurntSushi/ripgrep)                         |
| Protocols         | [MCP SDK](https://modelcontextprotocol.io/), LSP                         |
| API               | [Anthropic SDK](https://docs.anthropic.com/)                             |
| Telemetry         | OpenTelemetry + gRPC                                                     |
| Feature Flags     | GrowthBook                                                               |
| Auth              | OAuth 2.0, JWT, macOS Keychain                                           |

[开盒Claude Code的原来是中国00后！曾怒怼Anthropic窃取用户代码]: https://mp.weixin.qq.com/s/ZHh6ou2P7foQ_Kgd8cg3Vw

[Claude Code CLI 源码分析 : 从 Prompt 架构到工业级 AI Agent缓存黑科技+自我进化+多Agent协作+遥测监控]: https://x.com/servasyy_ai/status/2039138111566020867?s=20
