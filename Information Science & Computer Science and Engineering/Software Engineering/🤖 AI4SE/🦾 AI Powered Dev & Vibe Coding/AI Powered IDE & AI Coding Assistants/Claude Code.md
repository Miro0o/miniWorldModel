# Claude Code

[TOC]



## Res
🚧 https://github.com/anthropics/claude-code


### Related Topics
↗ [Anthropic Claude](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Foundation%20Models%20List%20&%20Evaluation%20and%20Benchmarks%20&%20Leaderboard/Main%20Stream%20General%20Models/Anthropic%20Claude.md)



## Intro



## Ref
[Caught in the Hook: RCE and API Token Exfiltration Through Claude Code Project Files | CVE-2025-59536 | CVE-2026-21852]: https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/?utm_source=chatgpt.com
Check Point Research has discovered **critical** vulnerabilities in Anthropic’s Claude Code that allow attackers to achieve **remote code execution** and steal API credentials through malicious project configurations. The vulnerabilities exploit various configuration mechanisms including **Hooks**, **Model Context Protocol** (MCP) servers, and **environment variables** -executing arbitrary shell commands and exfiltrating Anthropic API keys when users clone and open untrusted repositories. Following our disclosure, Check Point Research collaborated closely with the Anthropic security team to ensure these vulnerabilities were fully remediated. **All reported issues have been successfully patched prior to this publication.**

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
