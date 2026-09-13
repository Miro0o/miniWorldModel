# Trust-worthy AI & LLM Safety and Security

[TOC]



## Res
### Related Topics
↗ [ICT System Reliability (Correctness) & Verification](../../../../../../CyberSecurity/⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)
↗ [Attack Simulation - Red, Blue, Purple, White](../../../../../../CyberSecurity/⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White.md)

↗ [XAI (eXplainable AI) & Mathematical Analysis of AI](../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌁%20XAI%20(eXplainable%20AI)%20&%20Mathematical%20Analysis%20of%20AI/XAI%20(eXplainable%20AI)%20&%20Mathematical%20Analysis%20of%20AI.md)
- ↗ [(M)LLM Explainability](../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌁%20XAI%20(eXplainable%20AI)%20&%20Mathematical%20Analysis%20of%20AI/🥺%20(M)LLM%20Explainability/(M)LLM%20Explainability.md)

↗ [Knowledge Distillation](../../LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Knowledge%20Distillation/Knowledge%20Distillation.md)

↗ [AI4Security](../../../../../../CyberSecurity/🫧%20AI4Security/AI4Security.md)
↗ [LLM For Security](../../../../../../CyberSecurity/🫧%20AI4Security/LLM%20For%20Security/LLM%20For%20Security.md)

↗ [AI4SE](../../../../../../Software%20Engineering/🤖%20AI4SE/AI4SE.md)

↗ [LLM & Software Engineering and Security](../../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/📌%20LLM%20&%20Software%20Engineering%20and%20Security/LLM%20&%20Software%20Engineering%20and%20Security.md)
↗ [LLM-Software-Security-Research-Dossier-2026](../../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/📌%20LLM%20&%20Software%20Engineering%20and%20Security/Dossiers/LLM-Software-Security-Research-Dossier-2026/LLM-Software-Security-Research-Dossier-2026.md)


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
https://www.anthropic.com/threat-intelligence-report-september-2026
Detecting and countering misuse of AI: September 2026
- Cyber operations | [Read more](https://www.anthropic.com/threat-intelligence-report-september-2026#cyber-operations-sep-26)
	- AI-augmented cyber operations
	- Cyber operations: From assistant to orchestrator
	- Trends
	- Sophisticated attacks no longer require sophisticated attackers
	- AI’s role in cyber operations has become increasingly autonomous
	- GTG-20006: Russian espionage
	- GTG-50014: ShinyHunters smash-and-grab opportunists
	- GTG-10007: Exploit foundries and autonomous attack frameworks
	- GTG-50029: Hacktivists targeted European political and affiliated entities
- Surveillance operations | [Read more](https://www.anthropic.com/threat-intelligence-report-september-2026#surveillance-operations-sep-26)
	- AI-enabled surveillance operations
	- GTG-54009: Disrupting a commercial surveillance platform using Claude to profile the social media accounts of Iranian and Persian Gulf-based users
	- GTG-14010: Disrupting a China-based surveillance and recruitment operation targeting Uyghurs in Syria
	- GTG-14020: Disrupting a China-based religious affairs intelligence operation targeting Catholic, Tibetan Buddhist, Falun Gong, and Taiwanese Christian communities
	- GTG-14021: Disrupting a China-based public and state security campaign of “stability maintenance” surveillance and transnational repression
	- GTG-14022: Disrupting a China-based “public opinion monitoring” and dissident surveillance operation
	- GTG-34007: Disrupting two Iranian nexus actors building surveillance systems and malicious Firefox browsing extension
	- GTG-50027: Disrupting a national mass interception and surveillance platform for Mali’s state intelligence service
	- GTG-30005: Military reconnaissance
	- GTG-30006: Building the tools for domestic surveillance
- Influence operations | [Read more](https://www.anthropic.com/threat-intelligence-report-september-2026#influence-operations-sep-26)
	- Detecting and countering influence operations using Claude
	- How we investigate
	- How we measure reach
	- Trends in influence operations
	- GTG-04001: Disrupting a Russian foreign information manipulation and interference operation in the Central African Republic
	- GTG-54002: Disrupting a commercial “influence-as-a-service” operation spanning six continents
	- GTG-84005: Disrupting a commercial election-manipulation platform targeting Malaysia
	- GTG-24015: Disrupting Russian state-media editorial pipelines built on Claude
	- GTG-34001: Disrupting Iranian state-aligned influence operations on Claude—the ICCO, the Islamic Propaganda Office, and the Bina Observatory
	- GTG-54006: Disrupting an automated pro-Awami League fake-news operation on Claude targeting rural Bangladesh
	- GTG-84006: Disrupting a distributed MEK/NCRI-aligned influence operation that used a shared AI agent to impersonate real people and recruit inside Iran
	- GTG-54004: Disrupting a domestic coordinated inauthentic behavior campaign in Kenya
	- GTG-84002: Disrupting a UAE-directed influence operation targeting the Muslim Brotherhood, Sudan conflict, and UN accountability mechanisms
- Conventional weapons | [Read more](https://www.anthropic.com/threat-intelligence-report-september-2026#conventional-weapons-sep-26)
	- Detecting and countering the use of Claude in conventional weapons activity
	- Part I: Weapons development and design
	- GTG-87001: Disrupting a Yemen-based guided weapons engineering cell using Claude to develop guidance software
	- GTG-17001: Disrupting a China-based operation using Claude to draft a fire control specification and acquisition documents for undersea warfare
	- GTG-27005: Disrupting a Russia-based operation using Claude to engineer an autonomous military drone swarm
	- GTG-17002: Disrupting a China-based operation using Claude to build targeting software for electronic warfare and air defense suppression
	- Part II: Intelligence collection and procurement
	- GTG-27006: Disrupting a Russia-based operation using Claude to procure mixed military and civilian goods
	- GTG-17003: Disrupting a China-based operation using Claude to collect intelligence on directed-energy weapons and their supply chain
- Biological misuse | [Read more](https://www.anthropic.com/threat-intelligence-report-september-2026#biological-misuse-sep-26)
	- Detecting and countering biological misuse of AI
	- A note on dual use
	- Case study 1: An evasion platform for military-civilian research
	- Case study 2: A research program engineering highly pathogenic mammal-adapted avian influenza
	- Case study 3: Covert frontier model access for orthopoxvirus research
	- Case studies 4 and 5: Venoms and toxins
	- Conclusions
- Scams and fraud | [Read more](https://www.anthropic.com/threat-intelligence-report-september-2026#scams-and-fraud-sep-26)
	- GTG-15001: Deceptive dating app network
	- Key findings
	- Indicators of compromise
	- Disruption and mitigations
- Illicit distillation | [Read more](https://www.anthropic.com/threat-intelligence-report-september-2026#illicit-distillation-sep-26)
	- Illicit distillation and scaled abuse
	- What is illicit distillation?
	- How unauthorized labs access Anthropic’s models
	- How unauthorized labs distill Claude’s reasoning capabilities
	- What we found
	- GTG 16005: Chain-of-thought distillation and AI R&D campaign by Alibaba (Qwen / Tongyi Lab)
	- GTG-16002: Moonshot serves Claude instead of Kimi and collects exchanges for model training
	- GTG-16001: DeepSeek serves Claude instead of its own models and collects exchanges for model training
	- GTG-16006: Distillation, AI R&D, and targeting cyber capabilities
	- Xiaomi illicit distillation campaign
	- GTG 16012 and GTG 16003: Sensetime, MiniMax, and the third-party reseller ecosystem
	- How we address illicit distillation



## Intro



## AI /LLM Safety



## AI /LLM Security
> [!links]
> ↗ [AI4Security](../../../../../../CyberSecurity/🫧%20AI4Security/AI4Security.md)
> ↗ [LLM For Security](../../../../../../CyberSecurity/🫧%20AI4Security/LLM%20For%20Security/LLM%20For%20Security.md)



## Ref
