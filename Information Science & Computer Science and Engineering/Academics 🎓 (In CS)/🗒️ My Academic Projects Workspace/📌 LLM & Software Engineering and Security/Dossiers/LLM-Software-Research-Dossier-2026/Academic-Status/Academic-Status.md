---
ai-generated: true
last-reviewed: 2026-07-31
---

# Academic Status: LLMs for Software and Code

Date: 2026-07-31

Home: [LLM-Software-Research-Dossier-2026.md](../LLM-Software-Research-Dossier-2026.md)

This hub summarizes the non-security LLM-for-software literature. Detailed records live on one canonical topic page each.

## Scope and Evidence Labels

- `Published`: paper has a DOI or official proceedings record.
- `Official program`: an official conference program confirms the track and presentation, but normalized DOI/page metadata is not yet recorded here.
- `Accepted`: official conference program/accepted-paper page is available, but final proceedings metadata may be incomplete.
- `Frontier`: arXiv or another public preprint without verified top-venue publication.
- `Evaluation`: benchmark, empirical limitation, negative result, or measurement study.
- `Survey`: secondary synthesis; useful for orientation, not a substitute for primary evidence.

The inclusion test is artifact- or task-first: the primary artifact is a code-specific model, corpus/recipe, adaptation method, or representation, or the LLM helps build, understand, review, test, debug, verify, maintain, migrate, optimize, or operate ordinary software. Security-first work is routed to the sibling [software-security dossier](../../LLM-Software-Security-Research-Dossier-2026/LLM-Software-Security-Research-Dossier-2026.md). Languages, runtimes, contracts, testing, observability, and lifecycle methods whose primary object is an LLM application or agent are routed to the inverse-direction [Software for LLM Agent Systems dossier](../../Software-For-LLM-Agent-Systems-Research-Dossier-2026/Software-For-LLM-Agent-Systems-Research-Dossier-2026.md). Generic non-code model research and request-level serving remain outside all three.

## Current Status

Six patterns now dominate.

First, code-specific models, data, adaptation, and representations form a foundation layer with their own provenance, contamination, compute, and transfer questions. They should not be classified as task-level code generation merely because generation is one evaluation.

Second, constrained generation replaces prompt-only generation. Type systems, compiler diagnostics, execution, formal specifications, and tree search filter or guide candidates during decoding.

Third, repository engineering is an environment problem. Agent-computer interfaces, retrieval, planning, build systems, test selection, and recovery policies are often more decisive than an isolated code-generation score.

Fourth, the strongest analysis and systems papers use the model as a semantic component rather than the final oracle. Static analysis, symbolic execution, proof checking, profiling, runtime traces, and deployment monitoring retain authority over the result.

Fifth, the literature has expanded beyond a security-shaped generation-analysis-testing taxonomy. Repository memory and retrieval, API/documentation work, proof engineering, domain-specific software, multimodal UI/UX, and developer learning now have enough top-venue evidence to be tracked independently.

Sixth, software change needs lifecycle governance. Review comments, issue-change traceability, requirement alignment, architecture recovery, behavior-preserving refactoring, and generated-code smells now expose distinct quality and accountability questions.

## Area Map

| Area | Primary question | Representative anchors | File |
| --- | --- | --- | --- |
| Code models, data, and representations | Which code-specific data, objectives, adaptations, and representations create transferable capability? | OctoPack, WizardCoder, Magicoder, CodeSage, OpenCoder, Kimi-Dev. | [Code-Model Training, Adaptation, Data, and Representation](Code-Model-Training-Adaptation-Data-And-Representation.md) |
| Code generation and translation | How can decoding, types, execution, and validation improve generated or translated code? | TreeCoder, Type-Constrained Code Generation, Verified Code Transpilation, INTERTRANS. | [Code Generation, Completion, and Translation](Code-Generation-Completion-And-Translation.md) |
| Software agents | How can agents solve repository tasks while controlling context, tools, and state? | SWE-bench, SWE-agent, CodePlan, SWE-Search, CXXCrafter. | [Software Agents and Repository Engineering](Software-Agents-And-Repository-Engineering.md) |
| Review and traceability | Can review comments, issue-change links, and approval evidence remain grounded and auditable? | SWR-Bench, LinkAnchor. | [Code Review, Change Governance, and Traceability](Code-Review-Change-Governance-And-Traceability.md) |
| Comprehension and retrieval | How can developers and agents find, explain, document, and call the right code? | StackEval, Code Graph Model, repository memory, UniCoR. | [Program Comprehension, Search, Retrieval, Documentation, and APIs](Program-Comprehension-Search-Retrieval-Documentation-And-APIs.md) |
| Binary understanding and decompilation | Can models reconstruct usable source-level meaning from compiled representations without treating plausibility as correctness? | DeGPT, ReSym, DiSCo, Idioms, FidelityGPT. | [Program Understanding, Binary Analysis, Decompilation, and Reverse Engineering](Program-Understanding-Binary-Analysis-Decompilation-And-Reverse-Engineering.md) |
| Analysis and verification | Can LLMs synthesize semantics that analyzers or proof systems check? | LLift, Laurel, SpecGen, SAIL, Expecto. | [Program Analysis, Specification, Verification, and Reasoning](Program-Analysis-Specification-Verification-And-Reasoning.md) |
| Formalization and proof engineering | Can informal intent become replayable models, invariants, and proofs? | Clause2Inv, Req2LTL, PAT-Agent, ARTEMIS, ProofFusion. | [Formalization, Proof Engineering, and Verified Reasoning](Formalization-Proof-Engineering-And-Verified-Reasoning.md) |
| Testing and repair | Can execution-grounded loops find failures, generate strong tests, and produce correct fixes? | Fuzz4All, WhiteFox, TOGLL, RepairAgent, RustAssistant. | [Testing, Debugging, and General Repair](Testing-Debugging-And-General-Repair.md) |
| Optimization and compilation | Can code be made faster without sacrificing semantics? | Search-Based LLMs for Code Optimization, Reductive Analysis, QiMeng-Xpiler, ECO. | [Performance Optimization and Compilation](Performance-Optimization-And-Compilation.md) |
| Systems and operations | Can semantic inference improve diagnosis, configuration, logs, and infrastructure work? | retry-bug tooling, configuration validation, gigiprofiler, SMARTTalk. | [Systems, OS, Cloud, and Infrastructure Software](Systems-OS-Cloud-And-Infrastructure-Software.md) |
| Requirements, architecture, and evolution | How do LLMs align requirements, recover architecture, and handle APIs, documentation, and change over time? | Specine, ReqCompleter, Speculate, SemRef, deprecated-API evaluation. | [Requirements, Design, Maintenance, and Evolution](Requirements-Design-Maintenance-And-Evolution.md) |
| Quality and refactoring | Can behavior-preserving improvement reduce smells and debt without shifting review or maintenance costs? | code-refinement study, RefAgent, generated-code-smell causal study. | [Quality, Refactoring, Technical Debt, and Code Smells](Quality-Refactoring-Technical-Debt-And-Code-Smells.md) |
| Domain software | Do general results survive SQL dialects, scientific code, hardware, embedded/mobile systems, and low-resource languages? | MultiPL-T, AutoML-Agent, ResearchCodeBench, VeriThoughts, EmbedAgent. | [Domain-Specific, Low-Resource, Scientific, and Data Software](Domain-Specific-Low-Resource-Scientific-And-Data-Software.md) |
| Human-facing software | How do visual interaction, usability, clarification, education, and collaboration affect useful outcomes? | UI2Code, ReFLAIR, Programming with Pixels, interactive underspecification, developer-agent field studies. | [Human-Facing Software, UI/UX, Education, and Developer Experience](Human-Facing-Software-UI-UX-Education-And-Developer-Experience.md) |
| Evaluation | What is measured, with which oracle, freshness, cost, and contamination control? | LiveCodeBench, Mercury, SWT-Bench, SWE-rebench. | [Benchmarks, Datasets, and Evaluation](Benchmarks-Datasets-And-Evaluation.md) |
| Synthesis | What does the aggregate literature support? | surveys and systematic mappings. | [Surveys and Systematization](Surveys-And-Systematization.md) |
| Trends | Which directions are converging across venues, and what evidence would move them from frontier to established? | repository memory, checked formalization, domain evaluation, multimodal SE, longitudinal human evidence. | [Trends and Research Frontiers](../Trends-And-Research-Frontiers.md) |

## Venue-Coverage Ledger

The target venue set comes from the local field notes:

- [Artificial Intelligence Related Venues and People](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/Application/Artificial%20Intelligence%20Related%20Venues%20and%20People/Artificial%20Intelligence%20Related%20Venues%20and%20People.md>)
- [PL Related Venues and People](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/PL%20%28Programming%20Languages%29%20Related%20Venues%20and%20People.md>)
- [SE Related Venues and People](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/SE%20%28Software%20Engineering%29%20Related%20Venues%20and%20People.md>)
- [OS Related Venues and People](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/OS%20%28Operating%20System%29%20Related%20Venues%20and%20People.md>)
- [Security Related Venues and People](<../../../../../🧞‍♂️%20Research%20Frontiers,%20Venues,%20and%20Humans%20by%20CS%20Areas/System/Sec%20%28Security%29%20Related%20Venues%20and%20People.md>) — used only to enforce the cross-dossier boundary.

| Area | Target venues | Coverage in this snapshot | Next check |
| --- | --- | --- | --- |
| AI/ML | ICLR, ICML, NeurIPS, AAAI | Every available 2024–2026 archival record is in the shared source corpus; only records passing the dossier boundary are mapped here. | NeurIPS 2026 is pending; normalize remaining ICML 2026 program-record authors. |
| PL | POPL, PLDI, OOPSLA/PACMPL, ICFP/PACMPL | Every available 2024–2026 archival record is in the shared source corpus, including accepted-program records where final metadata is unavailable. | OOPSLA 2026 is pending; normalize final 2026 proceedings metadata. |
| SE | ICSE, FSE/PACMSE, ASE, ISSTA | Every available 2024–2026 archival research record is in the shared source corpus; workshops, demos, industry tracks, journal-first presentations, and invited material are excluded. | ASE 2026 is pending; normalize accepted-program records after proceedings appear. |
| OS/systems | OSDI, SOSP, EuroSys, USENIX ATC, FAST; ASPLOS adjacent | Every available 2024–2026 archival record is in the shared source corpus; direct dossier mappings still require an LLM-for-software primary claim. | SOSP and USENIX ATC 2026 are pending. |
| Security | IEEE S&P, USENIX Security, CCS, NDSS | Not a source pool for this dossier. It is monitored to move security-first work to the sibling dossier and avoid duplication. | Cross-dossier deduplication at every refresh. |

Exhaustiveness applies to the [shared source corpus](../../Literature-Corpus/README.md), not to a requirement that every venue contribute a paper to this dossier. All formal records are present in the exhaustive bibliography; adjudicated in-scope records are mapped here, while unresolved high-recall candidates remain visible in the screening table.

## Ownership and Cross-Link Rules

1. Assign a paper by its primary research claim, not every task mentioned in its evaluation.
2. Keep one full row on one canonical shelf.
3. Let benchmark and survey pages point to the canonical shelf with a short index row.
4. Put general APR, compiler/library fuzzing, runtime-error analysis, and ordinary static analysis here.
5. Put vulnerability repair, security fuzzing, taint-for-vulnerability detection, exploitability, and secure-agent attack surfaces in the security dossier.
6. Put code-specific models, corpora/recipes, adaptation methods, and learned representations on the code-model shelf; keep task-first generation, repair, and agent methods on their task shelves.
7. Route agent languages, LM-program compilers, application-level workflow runtimes, contracts, and agent testing to the [Software for LLM Agent Systems dossier](../../Software-For-LLM-Agent-Systems-Research-Dossier-2026/Software-For-LLM-Agent-Systems-Research-Dossier-2026.md); keep generic non-code model training, inference engines, and KV-cache systems outside all three.
8. Give domain-specific work a domain oracle; do not infer hardware, database, scientific, mobile, or low-resource validity from a general coding benchmark.
9. Treat education, longitudinal field studies, and multimodal interaction as software-engineering evidence, not as optional commentary on code generation.

## Method and Evaluation Checklist

| Claim | Minimum evidence to record |
| --- | --- |
| A code-model recipe improves capability | data provenance, temporal deduplication, training/compute details, ablations, and cross-task transfer |
| Generated code is correct | held-out executable tests and a clear pass criterion |
| Translation preserves behavior | differential testing, equivalence checking, or formal validation |
| Static analysis is improved | soundness/precision definition plus analyzer-confirmed findings |
| A test generator is effective | coverage or mutation score plus fault revelation, not compilability alone |
| A repair is correct | independent tests, regression analysis, and plausible-overfitting checks |
| Code is optimized | semantic preservation plus repeated performance/resource measurement |
| An agent solves repository work | reproducible environment, task freshness, trajectory/tool logs, and patch tests |
| Review or traceability is useful | complete change context, checked links, false-positive burden, human-aligned usefulness, and provenance |
| A refactoring improves quality | independent regression tests, justified quality/smell metrics, and review/maintenance cost |
| Requirements or architecture are recovered | independently checked intent, trace links, architecture ground truth, and conformance after change |
| A systems tool works | real workloads, baselines, overhead, and confirmed diagnoses or deployments |
| Developers are more productive | task selection, review/debug cost, quality outcomes, and uncertainty intervals |

## Reading Order

1. [Benchmarks, Datasets, and Evaluation](Benchmarks-Datasets-And-Evaluation.md)
2. [Code-Model Training, Adaptation, Data, and Representation](Code-Model-Training-Adaptation-Data-And-Representation.md)
3. [Code Generation, Completion, and Translation](Code-Generation-Completion-And-Translation.md)
4. [Software Agents and Repository Engineering](Software-Agents-And-Repository-Engineering.md)
5. [Code Review, Change Governance, and Traceability](Code-Review-Change-Governance-And-Traceability.md)
6. [Program Comprehension, Search, Retrieval, Documentation, and APIs](Program-Comprehension-Search-Retrieval-Documentation-And-APIs.md)
7. [Program Understanding, Binary Analysis, Decompilation, and Reverse Engineering](Program-Understanding-Binary-Analysis-Decompilation-And-Reverse-Engineering.md)
8. [Program Analysis, Specification, Verification, and Reasoning](Program-Analysis-Specification-Verification-And-Reasoning.md)
9. [Formalization, Proof Engineering, and Verified Reasoning](Formalization-Proof-Engineering-And-Verified-Reasoning.md)
10. [Testing, Debugging, and General Repair](Testing-Debugging-And-General-Repair.md)
11. [Quality, Refactoring, Technical Debt, and Code Smells](Quality-Refactoring-Technical-Debt-And-Code-Smells.md)
12. [Requirements, Design, Maintenance, and Evolution](Requirements-Design-Maintenance-And-Evolution.md)
13. [Domain-Specific, Low-Resource, Scientific, and Data Software](Domain-Specific-Low-Resource-Scientific-And-Data-Software.md)
14. [Human-Facing Software, UI/UX, Education, and Developer Experience](Human-Facing-Software-UI-UX-Education-And-Developer-Experience.md)
15. [Performance Optimization and Compilation](Performance-Optimization-And-Compilation.md)
16. [Systems, OS, Cloud, and Infrastructure Software](Systems-OS-Cloud-And-Infrastructure-Software.md)
17. [Trends and Research Frontiers](../Trends-And-Research-Frontiers.md), then the [shared Human Factor](../../../Human-Factor%20in%20LLM%20&%20Software.md) and [Non-Academic Status](../Non-Academic-Status.md)

## Research Gaps

- reliable long-horizon agent evaluation without benchmark contamination;
- code-data provenance, controlled training ablations, and transfer beyond generation benchmarks;
- specifications and test oracles that are independent of the generator being evaluated;
- cross-language and whole-project translation with semantic guarantees;
- repository memory and documentation that remain faithful after code evolution;
- semantic validation for ambiguous requirements and maintainable proof artifacts;
- review governance and traceability that remain usable under agent-generated change volume;
- architecture conformance and behavior-preserving quality improvement across multi-file edits;
- maintenance studies that measure future ownership costs, not only immediate completion time;
- OS/cloud/IaC benchmarks with realistic failure injection and operational constraints;
- energy, resource, and review costs of generated optimizations;
- calibrated human-agent handoff, rollback, and responsibility mechanisms;
- replication across organizations, languages, repositories, and developer experience levels;
- executable and accessibility-aware multimodal UI evaluation;
- specialist benchmarks for databases, scientific code, hardware, embedded systems, and low-resource languages.

## Source Discipline

Prefer official proceedings and DOI pages, then DBLP for normalized bibliographic links. Official accepted-paper/program pages are sufficient for an `Accepted` label but not for invented DOI or page metadata. arXiv records remain `Frontier` even when the topic is important. The generated [canonical corpus map](../Canonical-Corpus-Map.md), [mapped BibTeX](../LLM-Software-Research-Dossier-2026.bib), and [shared screening and manifest files](../../Literature-Corpus/README.md) are the audit trail for this narrative hub.
