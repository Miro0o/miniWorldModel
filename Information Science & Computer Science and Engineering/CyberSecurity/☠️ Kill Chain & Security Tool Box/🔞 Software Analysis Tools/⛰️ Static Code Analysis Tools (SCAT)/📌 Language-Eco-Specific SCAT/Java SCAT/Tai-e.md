# Tai-e

[TOC]



## Res
🏠 
🚧 https://github.com/pascal-lab/Tai-e
- [What is Tai-e?](https://github.com/pascal-lab/Tai-e#what-is-tai-e)
- [How to Obtain Runnable Jar of Tai-e?](https://github.com/pascal-lab/Tai-e#how-to-obtain-runnable-jar-of-tai-e)
- [How to Include Tai-e in Your Project?](https://github.com/pascal-lab/Tai-e#how-to-include-tai-e-in-your-project)
    - [Stable Version](https://github.com/pascal-lab/Tai-e#stable-version)
    - [Latest Version](https://github.com/pascal-lab/Tai-e#latest-version)
- [Documentation](https://github.com/pascal-lab/Tai-e#documentation)
    - [Reference Documentation](https://github.com/pascal-lab/Tai-e#reference-documentation)
    - [Changelog](https://github.com/pascal-lab/Tai-e#changelog)
- [Tai-e Assignments](https://github.com/pascal-lab/Tai-e#tai-e-assignments)

🔈 News
- Our paper _"Two Approaches to Fast Bytecode Frontend for Static Analysis"_ has been accepted by OOPSLA'25. This paper presents Tai-e's new bytecode frontend, which is significantly faster and more reliable than existing frontends.
- Our paper _"Pointer Analysis for Database-Backed Applications"_ has been accepted by PLDI'25. This paper describes an end–to–end pointer analysis for Java database–backed application developed on top of Tai-e.
- Our paper _"PacDroid: A Pointer-Analysis-Centric Framework for Security Vulnerabilities in Android Apps"_ has been accepted by ICSE'25. This work demonstrates Tai-e's new capability in Android analysis, providing a simple yet effective approach for security analysis of Apps. This work earned the **Best Artifact Award**🏅.
- Our paper _"Bridge the Islands: Pointer Analysis for Microservice Systems"_ has been accepted by ISSTA'25. This paper describes the first pointer analysis for Java Microservice systems developed on top of Tai-e.
- Our paper _"Interactive Cross-Language Pointer Analysis for Resolving Native Code in Java Programs"_ has been accepted by ICSE'25. This is the first cross-language pointer analysis between Java and C. This work won the **Distinguished Paper Award**🏅.
- Our paper _"Context Sensitivity without Context: A Cut-Shortcut Approach to Fast and Precise Pointer Analysis"_ has been accepted by PLDI'23. This is the first published research work developed on top of Tai-e.
- Our paper _"Tai-e: A Developer-Friendly Static Analysis Framework for Java by Harnessing the Good Designs of Classics"_ has been accepted by ISSTA'23. This paper describes the designs for the major components of Tai-e.


### Related Topics



## Intro
> 🔗 https://github.com/pascal-lab/Tai-e

Tai-e (Chinese: 太阿; pronunciation: [ˈtaɪə:]) is a new static analysis framework for Java (please see our [ISSTA 2023 paper](https://cs.nju.edu.cn/tiantan/papers/issta2023.pdf) for details), which features arguably the "best" designs from both the novel ones we proposed and those of classic frameworks such as Soot, WALA, Doop, and SpotBugs. Tai-e is easy-to-learn, easy-to-use, efficient, and highly extensible, allowing you to easily develop new analyses on top of it.

Currently, Tai-e provides the following major analysis components (and more analyses are on the way):
- Powerful pointer analysis framework
    - On-the-fly call graph construction
    - Various classic and advanced techniques of heap abstraction and context sensitivity for pointer analysis
    - Extensible analysis plugin system (allows to conveniently develop and add new analyses that interact with pointer analysis)
- Configurable security analysis
    - Taint analysis, which allows to configure sources, sinks, taint transfers, and sanitizers
    - Detection of various information leakages and injection vulnerabilities
    - Various precision and efficiency tradeoffs (benefit from the pointer analysis framework)
- Various fundamental/utility analyses
    - Fundamental analyses, e.g., reflection analysis and exception analysis
    - Modern language feature analyses, e.g., lambda and method reference analysis, and invokedynamic analysis
    - Utility tools like analysis timer, constraint checker (for debugging), and various graph dumpers
- Control/Data-flow analysis framework
    - Control-flow graph construction
    - Classic data-flow analyses, e.g., live variable analysis, constant propagation
    - Your data-flow analyses
- SpotBugs-like bug detection system
    - Bug detectors, e.g., null pointer detector, incorrect `clone()` detector
    - Your bug detectors

Tai-e is developed in Java, and it can run on major operating systems including Windows, Linux, and macOS.

As a courtesy to the developers, we expect that you **please [cite](https://github.com/pascal-lab/Tai-e/blob/master/CITATION.bib) the paper** from ISSTA 2023 describing the Tai-e framework in your research work:
- Tian Tan and Yue Li. 2023. **Tai-e: A Developer-Friendly Static Analysis Framework for Java by Harnessing the Good Designs of Classics.** In Proceedings of the 32nd ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA '23), July 17–21, 2023, Seattle, WA, USA ([pdf](https://cs.nju.edu.cn/tiantan/papers/issta2023.pdf), [bibtex](https://github.com/pascal-lab/Tai-e/blob/master/CITATION.bib)).



## Ref
[Java静态分析框架Tai-e的简单使用 | Y4er]: https://y4er.com/posts/simple-use-of-the-java-static-analysis-framework-tai-e/

