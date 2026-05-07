# Trust-worthy AI & LLM Safety and Security

[TOC]



## Res
### Related Topics
↗ [XAI (eXplainable AI) & Mathematical Analysis of AI](../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌁%20XAI%20(eXplainable%20AI)%20&%20Mathematical%20Analysis%20of%20AI/XAI%20(eXplainable%20AI)%20&%20Mathematical%20Analysis%20of%20AI.md)
- ↗ [(M)LLM Explainability](../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌁%20XAI%20(eXplainable%20AI)%20&%20Mathematical%20Analysis%20of%20AI/🥺%20(M)LLM%20Explainability/(M)LLM%20Explainability.md)

↗ [Attack Simulation - Red, Blue, Purple, White](../../../../../../CyberSecurity/⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White.md)

↗ [AI4Security](../../../../../../CyberSecurity/🫧%20AI4Security/AI4Security.md)
↗ [LLM For Security](../../../../../../CyberSecurity/🫧%20AI4Security/LLM%20For%20Security/LLM%20For%20Security.md)


### Papers
#### Attacks Against LLM 
https://arxiv.org/abs/2603.10080
Amnesia: Adversarial Semantic Layer Specific Activation Steering in Large Language Models

https://arxiv.org/abs/2604.08407
Your Agent Is Mine: Measuring Malicious Intermediary Attacks on the LLM Supply Chain
- [Hanzhi Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+H), [Chaofan Shou](https://arxiv.org/search/cs?searchtype=author&query=Shou,+C), [Hongbo Wen](https://arxiv.org/search/cs?searchtype=author&query=Wen,+H), [Yanju Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+Y), [Ryan Jingyang Fang](https://arxiv.org/search/cs?searchtype=author&query=Fang,+R+J), [Yu Feng](https://arxiv.org/search/cs?searchtype=author&query=Feng,+Y)
- Large language model (LLM) agents increasingly rely on third-party API routers to dispatch tool-calling requests across multiple upstream providers. These routers operate as application-layer proxies with full plaintext access to every in-flight JSON payload, yet no provider enforces cryptographic integrity between client and upstream model. We present the first systematic study of this attack surface. We formalize a threat model for malicious LLM API routers and define two core attack classes, payload injection (AC-1) and secret exfiltration (AC-2), together with two adaptive evasion variants: dependency-targeted injection (AC-1.a) and conditional delivery (AC-1.b). Across 28 paid routers purchased from Taobao, Xianyu, and Shopify-hosted storefronts and 400 free routers collected from public communities, we find 1 paid and 8 free routers actively injecting malicious code, 2 deploying adaptive evasion triggers, 17 touching researcher-owned AWS canary credentials, and 1 draining ETH from a researcher-owned private key. Two poisoning studies further show that ostensibly benign routers can be pulled into the same attack surface: a leaked OpenAI key generates 100M GPT-5.4 tokens and more than seven Codex sessions, while weakly configured decoys yield 2B billed tokens, 99 credentials across 440 Codex sessions, and 401 sessions already running in autonomous YOLO mode. We build Mine, a research proxy that implements all four attack classes against four public agent frameworks, and use it to evaluate three deployable client-side defenses: a fail-closed policy gate, response-side anomaly screening, and append-only transparency logging.


#### LLM Alignment


### Other Resources



## Intro



## AI /LLM Safety



## AI /LLM Security
> [!links]
> ↗ [AI4Security](../../../../../../CyberSecurity/🫧%20AI4Security/AI4Security.md)
> ↗ [LLM For Security](../../../../../../CyberSecurity/🫧%20AI4Security/LLM%20For%20Security/LLM%20For%20Security.md)



## Ref
