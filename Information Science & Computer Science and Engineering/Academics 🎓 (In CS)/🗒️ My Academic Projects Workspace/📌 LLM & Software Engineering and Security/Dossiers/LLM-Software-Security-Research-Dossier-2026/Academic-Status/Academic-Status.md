---
ai-generated: true
last-reviewed: 2026-07-31
---

# Academic Status: LLMs And Software Security

Date: 2026-07-31

Home: [LLM Software Security Research Dossier](../LLM-Software-Security-Research-Dossier-2026.md)

This hub covers work in which an LLM is used to produce or evaluate an explicit software-security outcome, plus work that studies the security of LLM-integrated software. General LLM-for-code and program-understanding research is maintained in the sibling [LLM-Software-Research-Dossier-2026](../../LLM-Software-Research-Dossier-2026/LLM-Software-Research-Dossier-2026.md); non-security PL/SE/systems work for engineering LLM applications and agents is maintained in [Software for LLM Agent Systems Research Dossier](../../Software-For-LLM-Agent-Systems-Research-Dossier-2026/Software-For-LLM-Agent-Systems-Research-Dossier-2026.md).

## Scope And Primary-Home Rule

Included work must satisfy at least one of these tests:

- the primary outcome is a vulnerability, exploitability/reachability judgment, security patch, security rule, security policy, malware finding, or verified defensive action;
- a fuzzing, program-analysis, reverse-engineering, firmware, kernel, or OS method is evaluated with a security oracle such as a confirmed vulnerability, CVE/CWE, exploitability result, malware judgment, protection result, or enforced hardening property;
- the paper studies a security or privacy property of code generation, an LLM application, RAG, an agent, MCP/tooling, or its execution runtime.

Excluded from this dossier: generic code generation, general repository agents, ordinary bug repair, correctness-only testing, generic decompilation or reverse engineering, compiler optimization, systems-for-LLM performance, and software productivity studies without a security outcome. Publication at a security venue is not by itself an inclusion criterion.

Generic binary reconstruction, decompilation quality, and reverse-engineering comprehension are canonical in the sibling [Program Understanding, Binary Analysis, Decompilation, And Reverse Engineering](../../LLM-Software-Research-Dossier-2026/Academic-Status/Program-Understanding-Binary-Analysis-Decompilation-And-Reverse-Engineering.md) page.

Canonicalization rules:

1. Every paper has exactly one canonical table row across the `Academic-Status/` tree.
2. The primary home follows the paper’s central contribution and oracle, not every topic it mentions.
3. Cross-cutting and secondary views use links or citation keys, never a second paper row.
4. Fuzzing and dynamic analysis are child methods of program analysis. Device/OS pages provide a domain view without duplicating their rows.
5. Benchmark papers and surveys are canonically filed under `Cross-Cutting`; method pages refer to them by key.
6. Classification follows the claimed outcome and evaluation oracle, never method vocabulary or venue alone.

Labels:

- `Core`: central contribution with stable venue/source metadata.
- `Frontier`: recent preprint or early result requiring follow-up.
- `Negative/Evaluation`: limit, failure mode, reproduction, or comparative evaluation.
- `Survey`: survey, SoK, or research agenda.
- `Accepted/program record`: verified on an official 2026 program; final issue/page metadata may still change.

## Nested Area Map

| Branch | Page | Primary question |
| --- | --- | --- |
| Security Analysis | [Program Analysis](Security-Analysis/Program-Analysis.md) | How can static/taint/graph, symbolic/concolic, fuzzing/dynamic, and security-targeted binary/RE systems use LLM semantics while retaining checkable security evidence? |
| Vulnerability Lifecycle | [Detection, Triage, And Reasoning](Vulnerability-Lifecycle/Detection-Triage-And-Reasoning.md) | Can systems move from a candidate label to localization, reachability, reproduction, and defensible triage? |
| Vulnerability Lifecycle | [Security Repair And Patch Validation](Vulnerability-Lifecycle/Security-Repair-And-Patch-Validation.md) | Does a patch remove root cause, preserve behavior, and survive branch drift and regression checks? |
| Cyber Operations | [Offensive, CTF, And Pentesting](Cyber-Operations/Offensive-CTF-And-Pentesting.md) | What can safely controlled cyber agents do under reproducible environments and action logs? |
| Cyber Operations | [Defensive SOC, Incident Response, And CTI](Cyber-Operations/Defensive-SOC-And-CTI.md) | How can analysts use models for incident reasoning, threat intelligence, and executable detection rules without losing provenance? |
| Security Of LLM Software | [Coding, Dependency, And Supply Chain](Security-Of-LLM-Software/Coding-Dependency-And-Supply-Chain.md) | How secure and private are generated code, retrieved context, and suggested dependencies? |
| Security Of LLM Software | [Apps, RAG, Agents, MCP, And Tool Runtimes](Security-Of-LLM-Software/App-RAG-Agent-And-Tool-Runtimes.md) | How do prompt/data flows, memory, permissions, tools, and resource lifecycles fail? |
| Systems And OS Security | [Systems And OS Security](Systems-And-OS-Security/Systems-And-OS-Security.md) | How do LLM-assisted methods affect kernels, drivers, firmware, OS hardening, isolation, TEEs, and runtimes? |
| Cross-Cutting | [Security Benchmarks And Evaluation](Cross-Cutting/Security-Benchmarks-And-Evaluation.md) | Which tasks have real artifacts, environments, security oracles, and contamination controls? |
| Cross-Cutting | [Surveys And Systematization](Cross-Cutting/Surveys-And-Systematization.md) | Which taxonomies and methodological critiques organize the evidence? |

## Current Field Status

The dominant positive result is a verified hybrid loop. LLMs are useful for recovering semantics that conventional tools struggle to obtain cheaply: sources/sinks, checker specifications, protocol fields, harnesses and mutators, decompiler context, incident narratives, patch intent, and tool policies. An analyzer, solver, fuzzer, runtime, test suite, policy engine, or human then checks the proposal.

Standalone model judgment remains a weak baseline. Controlled studies of vulnerability detection and code auditing repeatedly expose sensitivity to transformations, misleading context, and model scale. Stronger work now reports paths, taint flows, crashes, protocol violations, executable rules, proofs of vulnerability, reproducible environments, or validated patches.

The security target has widened from source code to the whole LLM software stack. Package suggestions, retrieved manuals, persistent memory, MCP descriptions, tool permissions, log context, serving caches, runtimes, and telemetry all become attacker-controlled inputs or policy boundaries.

OS and systems security is now explicit. KNighter and KernelGPT connect LLM synthesis to Linux analysis/fuzzing; StepStone targets GPU drivers; PANGOLIN, FirmAgent, IoTBec, BSFuzzer, and LogicFuzz target firmware/devices; Kintsugi, IsolateGPT, TEE annotation, and Agent libOS study runtime containment. The OS branch deliberately excludes generic kernel acceleration and systems-for-LLM performance.

The 2026 official-program additions sharpen four frontiers:

- security-specialized fuzzing and program analysis: KNighter, Neo, R1-Fuzz, StepStone, protocol-format inference, Bulbasaur, and BugAuditor;
- validated secure generation and repair: GoodVibe, IoT RAG guarding, SecCodePRM, secure-execution repair, OSS-Fuzz agentic repair, INTENTFIX, and PatchWeaver;
- operational security: Incalmo, LogInject/context contamination, RulePilot, SIGMERGE, and AIOpsDoom;
- agent/tool security: FragFuse, MATE, the MCP toolchain study, ThinkTrap, and the agentic-AI SoK.

## Research Priorities

| Priority | Research question | Evidence standard |
| --- | --- | --- |
| Verified semantic hypotheses | Which LLM-produced sources, sinks, specs, rules, types, and constraints were actually checked? | Analyzer logs, proof obligations, path evidence, or executable specifications |
| Vulnerability causality | Can the system distinguish vulnerable, patched, unreachable, refactored, and merely broken variants? | Controlled variants plus dynamic or semantic oracle |
| Patch correctness | Did the patch remove root cause without regression or policy violation? | Reproduction, differential execution, regression/security tests, and review |
| Fuzzing effectiveness | Does LLM guidance reach new security-relevant states rather than only generate plausible inputs? | Coverage, unique reproducible failures, CVE/maintainer confirmation, cost |
| Agent/tool boundaries | Are permissions, provenance, memory, rollback, and resource budgets enforceable across tools? | Policy enforcement and adversarial end-to-end evaluation |
| Operational usefulness | Do SOC/CTI/IR systems improve human decisions without hiding source evidence? | Field/controlled human evidence, false positives, calibration, workload |
| OS/runtime containment | Can generated actions and vulnerable LLM components be isolated with small trusted boundaries? | Capability tests, kernel/runtime policy, TEE evidence, failure containment |

## Search Taxonomy

- Security analysis
  - static, taint, CPG, dataflow, specification mining, API misuse;
  - symbolic/concolic execution, formal security verification;
  - fuzzing, harness/mutator generation, protocol/input synthesis, execution feedback;
  - security-targeted binary analysis, malicious-code deobfuscation, malware analysis, and reverse engineering whose evaluation has an explicit security oracle.
- Vulnerability lifecycle
  - detection reliability, localization, reachability, severity, triage;
  - vulnerability reproduction, proof of vulnerability, CRS;
  - security repair, backporting, patch identification, validation.
- Cyber operations
  - CTF, controlled pentesting, red-team agents;
  - SOC, CTI, incident response, threat hunting, detection-rule generation.
- Security of LLM software
  - secure code generation, code-model poisoning, package/dependency supply chain;
  - prompt/tool injection, RAG poisoning, memory poisoning, app RCE;
  - MCP/tool descriptions, permissions, provenance, availability, serving cache;
  - sandboxing, isolation, TEEs, agent runtimes.
- Systems and OS security
  - kernel/driver/firmware/device fuzzing and static analysis;
  - OS configuration, hardening, patching;
  - runtime containment and capability control.
- Cross-cutting
  - benchmarks, datasets, dynamic oracles, contamination, human factors, surveys, SoKs.

## Reading Order

1. Reality checks: `Steenhoek2024LLMsCannot`, `Fang2024CodeAnalysis`, `Lin2025FromLargeToMammoth`, `Xu2025SVTrustEvalC`, `Liu2025Flashboom`, and `Evertz2026Pitfalls`.
2. Verified program analysis: `Li2024IRIS`, `Lekssays2025LLMxCPG`, `Yang2025KNighter`, `Zhou2025LATTE`, `Lin2026SpecAuditor`, `Li2026Neo`, and `Song2026ProtocolGuard`.
3. Fuzzing and OS evidence: `Wang2024ProphetFuzz`, `Yang2025HyLLFuzz`, `Yang2025KernelGPT`, `Li2026DeepSURF`, `Zou2026StepStone`, `Wang2026Bulbasaur`, `Jia2026PANGOLIN`, and `Ji2026FirmAgent`.
4. Vulnerability delivery: `Nong2025APPATCH`, `Kim2025SAN2PATCH`, `Li2026PORTGPT`, `Zhang2026OSSFuzzRepair`, `INTENTFIX2026`, and `Li2026PatchWeaver`.
5. Operations and CRS: `Deng2024PentestGPT`, `Singer2026Incalmo`, `Mustafa2026LLMSOC`, `Karanjai2026LogInject`, `Wang2026RulePilot`, `Cai2026SIGMERGE`, `Team2026OSSCRS`, and `SoK2026AIxCC`.
6. Security of LLM software: `Yan2024CodeBreaker`, `Spracklen2025PackageHallucinations`, `Li2025CodeGuarder`, `Zhang2025IsolateGPT`, `Liu2025AgentTaint`, `Rao2026FragFuse`, `Zhao2026MCPToolchain`, and `Kim2026AgenticAISoK`.
7. Frontier preprints only after checking artifact availability, independent evidence, and whether a later venue version supersedes the record.

## Venue Coverage Ledger

The venue families come from the repository’s AI, PL, Security, SE, and OS venue guides. Every available 2024–2026 archival research paper in this ledger is present in the [shared exhaustive source corpus](../../Literature-Corpus/README.md); only adjudicated papers with a primary software-security claim are mapped to this dossier.

| Field | Venue families used | 2024–2026 result | Boundary |
| --- | --- | --- | --- |
| Security | IEEE S&P, USENIX Security, ACM CCS, NDSS | Every available 2024–2026 archival record is in the source corpus; CCS 2026 is pending. | Include direct LLM + software/cyber-security work |
| Software Engineering | ICSE, FSE/PACMSE, ASE, ISSTA | Every available 2024–2026 archival research record is in the source corpus; ASE 2026 is pending. | Generic APR, testing, code agents, and productivity move to sibling dossier |
| Programming Languages | POPL, PLDI, OOPSLA/PACMPL, ICFP/PACMPL | Every available 2024–2026 archival record is in the source corpus; OOPSLA 2026 is pending. | Generic verification and language-modeling work excluded |
| Artificial Intelligence | NeurIPS, ICML, ICLR, AAAI | Every available 2024–2026 archival record is in the source corpus; NeurIPS 2026 is pending. | Generic code-generation/model papers excluded |
| Operating Systems | OSDI, SOSP, EuroSys, USENIX ATC, FAST; ASPLOS adjacent | Every available 2024–2026 archival record is in the source corpus; SOSP and USENIX ATC 2026 are pending. | Exclude generic systems-for-LLM optimization |

Venue guide anchors:

- [Artificial Intelligence venues and people](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/Application/Artificial%20Intelligence%20Related%20Venues%20and%20People/Artificial%20Intelligence%20Related%20Venues%20and%20People.md>)
- [PL venues and people](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/PL%20%28Programming%20Languages%29%20Related%20Venues%20and%20People.md>)
- [Security venues and people](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/Sec%20%28Security%29%20Related%20Venues%20and%20People.md>)
- [SE venues and people](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/SE%20%28Software%20Engineering%29%20Related%20Venues%20and%20People.md>)
- [OS venues and people](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/OS%20%28Operating%20System%29%20Related%20Venues%20and%20People.md>)

## Source And Metadata Policy

- Prefer official venue programs, DOI landing pages, proceedings, DBLP, and author manuscripts, in that order.
- Use official accepted/program pages for 2026 records whose proceedings metadata is not final and label them `Accepted/program record`.
- Keep arXiv IDs stable and replace them with a venue record only when identity is verified.
- The companion [BibTeX](../LLM-Software-Security-Research-Dossier-2026.bib) contains every record assigned to this dossier, plus clearly labeled supplementary material. The generated [canonical corpus map](../Canonical-Corpus-Map.md) is its row-level audit index.

## Thesis

The durable research direction is not “LLM replaces security analysis.” It is “LLM supplies difficult semantic hypotheses inside a bounded, auditable system whose analyzers, executions, policies, and people decide what is true.”
