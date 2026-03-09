# OmniBOR

[TOC]



## Res
### Related Topics
🚧 https://github.com/OmniBor

**OmniBOR is a draft standard for communicating a cryptographic record of build inputs for software artifacts.**

This organization hosts the specification and tools for producing and consuming OmniBOR Artifact Input Manifests. OmniBOR is under active development. More information can be found on the [OmniBOR website](https://omnibor.io/).

🏠 https://omnibor.io

📄 https://arxiv.org/pdf/2402.08980.pdf
OmniBOR: A System for Automatic, Verifiable Artifact Resolution across Software Supply Chains


## Intro
**[OmniBOR](https://omnibor.io/glossary/omnibor)** (Universal **B**ill **O**f **R**eceipts) is a minimalistic scheme for [build tools](https://omnibor.io/glossary/build_tool) to:
1. Build a compact [Artifact Dependency Graph (ADG)](https://omnibor.io/glossary/artifact_dependency_graph), tracking every source code file incorporated into each built [artifact](https://omnibor.io/glossary/artifact).
2. Embed a unique, content-addressable reference for that [Artifact Dependency Graph (ADG)](https://omnibor.io/glossary/artifact_dependency_graph/), the [OmniBOR identifier](https://omnibor.io/glossary/omnibor/#omnibor-identifier), into the [artifact](https://omnibor.io/glossary/artifact) at build time.

[OmniBOR](https://omnibor.io/glossary/omnibor) is designed to:
- Consistently construct verifiable [Artifact Dependency Graph (ADG)s](https://omnibor.io/glossary/artifact_dependency_graph) across languages, environments, and packaging formats, with zero developer effort, involvement, or awareness
- Enable automatic, verifiable [artifact](https://omnibor.io/glossary/artifact) resolution across today’s diverse software supply chains
- Complement SBOMs, such as [SPDX](https://spdx.dev/), [CycloneDX](https://cyclonedx.org/), or [SWID](https://nvd.nist.gov/products/swid)
- Co-exist with, but not require, version control systems

**[OmniBOR](https://omnibor.io/glossary/omnibor) is NOT**:
- [Git](https://omnibor.io/glossary/git) (or any other [VCS](https://en.wikipedia.org/wiki/Version_control))
- An [SBOM](https://omnibor.io/glossary/sbom), nor a replacement for SBOMs
- A signing scheme

It is compatible with and augments these classes of tools.

_OmniBOR was formerly known as **[GitBOM](https://gitbom.omnibor.io/)**._



## Ref
[👍 Introduction to OmniBOR | Microsoft Documentation]: https://learn.microsoft.com/en-us/shows/open-at-microsoft/introduction-to-omnibor

Recommended resources
- [GitHub Maintainer Month](https://maintainermonth.github.com/)
- Find the [latest info about the open-source OmniBOR project](https://github.com/OmniBor).
- [Learn more about OmniBOR and join the community](https://omnibor.io/community/)

Related episodes
- [View all episodes on Microsoft Learn and add Open at Microsoft to a collection](https://aka.ms/OpenAtMicrosoft)
- New episode every Tuesday! [Open at Microsoft playlist on YouTube](https://aka.ms/OpenAtMicrosoftPlaylist)