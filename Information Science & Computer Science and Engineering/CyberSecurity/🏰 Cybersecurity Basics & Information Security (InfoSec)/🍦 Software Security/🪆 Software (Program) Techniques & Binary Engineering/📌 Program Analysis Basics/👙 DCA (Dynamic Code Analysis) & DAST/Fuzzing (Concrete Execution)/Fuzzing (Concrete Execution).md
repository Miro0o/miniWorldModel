# Fuzzing (Concrete Execution)

[TOC]



## Res
### Related Topics
↗ [LLM & Fuzzing](../../../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Fuzzing.md) 🎓
↗ [OSS-Fuzz](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🌋%20Dynamics%20Code%20Analysis%20Tools%20(DCAT)/Fuzzers%20&%20Fuzzing%20Project/OSS-Fuzz.md)

↗ [Software Testing](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)

↗ [Code Sanitizer](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Sanitizer.md)
↗ [Code Instrumentation, System Visibility, & Computer Profiling](../🥁%20Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling/Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling.md)



### Learning Resources
#### Online Resources
🎬【模糊测试Fuzzing入门-AFL(++)-fuzz-哔哩哔哩】 https://b23.tv/WioZP4F

🚧 https://github.com/secfigo/Awesome-Fuzzing
A curated list of fuzzing resources ( Books, courses - free and paid, videos, tools, tutorials and vulnerable applications to practice on ) for learning Fuzzing and initial phases of Exploit Development like root cause analysis.

🚧 https://github.com/google/fuzzing
This project aims at hosting tutorials, examples, discussions, research proposals, and other resources related to [fuzzing](https://en.wikipedia.org/wiki/Fuzzing).

🚧 https://github.com/google/oss-fuzz
📂 https://google.github.io/oss-fuzz/
To learn more about fuzzing in general, we recommend reading [libFuzzer tutorial](https://github.com/google/fuzzing/blob/master/tutorial/libFuzzerTutorial.md) and the other docs in [google/fuzzing](https://github.com/google/fuzzing/tree/master/docs) repository. These and some other resources are listed on the [useful links](https://google.github.io/oss-fuzz/reference/useful-links/#tutorials) page.
- [libFuzzer documentation](https://llvm.org/docs/LibFuzzer.html)
- [libFuzzer tutorial](https://github.com/google/fuzzing/blob/master/tutorial/libFuzzerTutorial.md)
- [libFuzzer workshop](https://github.com/Dor1s/libfuzzer-workshop)
- [Structure-Aware Fuzzing with libFuzzer](https://github.com/google/fuzzer-test-suite/blob/master/tutorial/structure-aware-fuzzing.md)
- [Chromium Fuzzing Page](https://chromium.googlesource.com/chromium/src/testing/libfuzzer/)
- [Chromium Efficient Fuzzing Guide](https://chromium.googlesource.com/chromium/src/testing/libfuzzer/+/HEAD/efficient_fuzzing.md)
- [ClusterFuzz documentation](https://google.github.io/clusterfuzz/)

https://www.fuzzingbook.org/
The Fuzzing Book
Tools and Techniques for Generating Software Tests
**by Andreas Zeller, Rahul Gopinath, Marcel Böhme, Gordon Fraser, and Christian Holler**
- **Welcome to "The Fuzzing Book"!** Software has bugs, and catching bugs can involve lots of effort. This book addresses this problem by _automating_ software testing, specifically by _generating tests automatically_. Recent years have seen the development of novel techniques that lead to dramatic improvements in test generation and software testing. They now are mature enough to be assembled in a book – even with executable code.
- [Sitemap](https://www.fuzzingbook.org/html/00_Table_of_Contents.html)
	- While the chapters of this book can be read one after the other, there are many possible paths through the book. In this graph, an arrow _A_ → _B_ means that chapter _A_ is a prerequisite for chapter _B_. You can pick arbitrary paths in this graph to get to the topics that interest you most:
	- ![](../../../../../../../../Assets/Pics/Screenshot%202025-11-24%20at%2022.33.04.png)
	- Lexical fuzzing
		- This part introduces test generation at the _lexical_ level, that is, composing sequences of characters.
		- [Fuzzing: Breaking Things with Random Inputs](https://www.fuzzingbook.org/html/Fuzzer.html) starts with one of the simplest test generation techniques: Fuzzing feeds a _string of random characters_ into a program in the hope to uncover failures.
		- In [Getting Coverage](https://www.fuzzingbook.org/html/Coverage.html), we measure the effectiveness of these tests by assessing their _code coverage_ – that is, measuring which parts of a program are actually executed during a test run. Measuring such coverage is also crucial for test generators that attempt to cover as much code as possible.
		- [Mutation-Based Fuzzing](https://www.fuzzingbook.org/html/MutationFuzzer.html) shows how to _mutate_ existing inputs to exercise new behavior. We show how to create such mutations, and how to guide them towards yet uncovered code, applying central concepts from the popular AFL fuzzer.
		- [Greybox Fuzzing](https://www.fuzzingbook.org/html/GreyboxFuzzer.html) extends the concept of input mutation further, using statistical estimators to guide test generation towards likely bugs.
		- [Search-Based Fuzzing](https://www.fuzzingbook.org/html/SearchBasedFuzzer.html) takes the concept of guidance further, introducing search-based algorithms to systematically generate test data for a program.
		- [Mutation Analysis](https://www.fuzzingbook.org/html/MutationAnalysis.html) seeds synthetic defects (mutations) into program code to check whether the tests find them. If the tests do not find mutations, they likely won't find real bugs either.
	- Syntactic fuzzing
		- This part introduces test generation at the _syntactical_ level, that is, composing inputs from language structures.
		- [Grammars](https://www.fuzzingbook.org/html/Grammars.html) provide a _specification_ of legal inputs to a program. Specifying inputs via a grammar allows for very systematic and efficient test generation, in particular for complex input formats.
		- [Efficient Grammar Fuzzing](https://www.fuzzingbook.org/html/GrammarFuzzer.html) introduces tree-based grammar fuzzing algorithms, which are much faster and allow for much more control over the production of fuzz inputs.
		- [Grammar Coverage](https://www.fuzzingbook.org/html/GrammarCoverageFuzzer.html) allows systematically covering elements of a grammar such that we maximize variety and do not miss out individual elements.
		- [Parsing Inputs](https://www.fuzzingbook.org/html/Parser.html) shows how to use grammars to parse and decompose a given set of valid seed inputs into their corresponding derivation trees.
		- [Probabilistic Grammar Fuzzing](https://www.fuzzingbook.org/html/ProbabilisticGrammarFuzzer.html) gives grammars even more power by assigning _probabilities_ to individual expansions.
		- [Fuzzing with Generators](https://www.fuzzingbook.org/html/GeneratorGrammarFuzzer.html) shows how to extend grammars with _functions_ – pieces of code that get executed during grammar expansion, and that can generate, check, or change elements produced.
		- [Greybox Grammar Fuzzing](https://www.fuzzingbook.org/html/GreyboxGrammarFuzzer.html) makes use of the structural representation allows us to mutate, crossover, and recombine their parts in order to generate new valid, slightly changed inputs.
		- [Reducing Failure-Inducing Inputs](https://www.fuzzingbook.org/html/Reducer.html) presents techniques that _automatically reduce and simplify failure-inducing inputs to a minimum_ in order to ease debugging.
	- Semantic fuzzing
		- This part introduces test generation techniques that take the _semantics_ of the input into account, notably the behavior of the program that processes the input.
		- [Fuzzing with Constraints](https://www.fuzzingbook.org/html/FuzzingWithConstraints.html) adds _semantic constraints_ to grammars. By solving these automatically, we can produce inputs that are syntactically _and_ semantically valid.
		- [Grammar Mining](https://www.fuzzingbook.org/html/GrammarMiner.html) shows how to extract an input grammar from a program by analyzing how individual parts of the input are processed. The resulting grammars can be directly used for fuzzing.
		- [Tracking Information Flow](https://www.fuzzingbook.org/html/InformationFlow.html) shows how to track inputs throughout the program, in order to discover information leaks and further improve analysis techniques.
		- [Concolic Fuzzing](https://www.fuzzingbook.org/html/ConcolicFuzzer.html) analyzes program code to solve _path constraints_ in the program to cover branches and behaviors that are hard to reach.
		- [Symbolic Fuzzing](https://www.fuzzingbook.org/html/SymbolicFuzzer.html) works like concolic fuzzing, but does not require any executions at all.
		- [Mining Function Specifications](https://www.fuzzingbook.org/html/DynamicInvariants.html) extracts type information as well as pre- and postconditions from program executions – useful information for program analysis, testing, and verification.
- You can use this book in four ways:
	- You can **read chapters in your browser**. Check out the list of chapters in the menu above, or start right away with the [introduction to testing](https://www.fuzzingbook.org/html/Intro_Testing.html) or the [introduction to fuzzing](https://www.fuzzingbook.org/html/Fuzzer.html). All code is available for download.
	- You can **interact with chapters as Jupyter Notebooks** (beta). This allows you to edit and extend the code, experimenting _live in your browser._ Simply select "Resources → Edit as Notebook" at the top of each chapter. [Try interacting with the introduction to fuzzing.](https://mybinder.org/v2/gh/uds-se/fuzzingbook/HEAD?labpath=docs/notebooks/Fuzzer.ipynb)
	- You can **use the code in your own projects**. You can download the code as Python programs; simply select "Resources → Download Code" for one chapter or "Resources → All Code" for all chapters. These code files can be executed, yielding (hopefully) the same results as the notebooks. Even easier: [Install the fuzzingbook Python package](https://www.fuzzingbook.org/html/Importing.html).
	- You can **present chapters as slides**. This allows for presenting the material in lectures. Just select "Resources → View slides" at the top of each chapter. [Try viewing the slides for the introduction to fuzzing.](https://www.fuzzingbook.org/slides/Fuzzer.slides.html)
#### Survey Papers
📄 👍 Manes V J M, Han H S, Han C, et al. Fuzzing: Art, Science, and Engineering[J]. arXiv preprint arXiv:1812.00140, 2018.
https://arxiv.org/pdf/1812.00140.pdf
https://ieeexplore.ieee.org/document/8863940
https://doi.org/10.1109/TSE.2019.2946563

📄 Li J, Zhao B, Zhang C. Fuzzing: a survey[J]. Cybersecurity, 2018, 1(1): 6.
https://link.springer.com/article/10.1186/s42400-018-0002-y
[https://doi.org/10.1186/s42400-018-0002-y](https://doi.org/10.1186/s42400-018-0002-y).

📄 Schloegel, Moritz, et al. "Sok: Prudent evaluation practices for fuzzing." _2024 IEEE Symposium on Security and Privacy (SP)_. IEEE, 2024.

📄 Mallissery, Sanoop, and Yu-Sung Wu. "Demystify the fuzzing methods: A comprehensive survey." _ACM Computing Surveys_ 56.3 (2023): 1-38.

📄 Liang H, Pei X, Jia X, et al. Fuzzing: State of the art[J]. IEEE Transactions on Reliability, 2018, 67(3): 1199-1218.
https://ieeexplore.ieee.org/document/8371326

📄 Chen, Chen, Baojiang Cui, Jinxin Ma, Runpu Wu, Jianchao Guo, and Wenqian Liu. “A Systematic Review of Fuzzing Techniques.” _Computers & Security_ 75 (June 2018): 118–37. https://doi.org/10.1016/j.cose.2018.02.002

📄 Godefroid, Patrice. “Fuzzing: Hack, Art, and Science.” _Communications of the ACM_ 63, no. 2 (January 22, 2020): 70–76. https://doi.org/10.1145/3363824

📄 Wang, Yan, Peng Jia, Luping Liu, Cheng Huang, and Zhonglin Liu. “A Systematic Review of Fuzzing Based on Machine Learning Techniques.” Edited by Tao Song. _PLOS ONE_ 15, no. 8 (August 18, 2020): e0237749. https://doi.org/10.1371/journal.pone.0237749

📄 👍 Huang, Linghan, Peizhou Zhao, Huaming Chen, and Lei Ma. "Large language models based fuzzing techniques: A survey." _arXiv preprint arXiv:2402.00350_ (2024).
https://arxiv.org/abs/2402.00350

|                                  |                                                                                            |                                                          |          |           |
| -------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------- | --------- |
| **DOI**                          | **Title**                                                                                  | **Authors**                                              | **Year** | **Cited** |
| 10.1109/SP54263.2024.00137       | SoK: Prudent Evaluation Practices for Fuzzing                                              | Schloegel, Bars, Schiller, Bernhard, Scharnowski, et al. | 2024     | 6         |
| 10.1145/3623375                  | Demystify the Fuzzing Methods: A Comprehensive Survey                                      | S. Mallissery, Yu-Sung Wu                                | 2023     | 12        |
| 10.1186/S42400-018-0002-Y        | Fuzzing: a survey                                                                          | Jun Li, Bodong Zhao, Chaomo Zhang                        | 2018     | 235       |
| 10.1109/CECIT53797.2021.00035    | A systematic review of fuzzy testing for information systems and applications              | Shen, Wen, Zhang, Wang, Shen, Cheng                      | 2021     | 4         |
| 10.1007/S00500-023-09306-2       | A systematic review of fuzzing                                                             | Zhao, Qu, Jianliang Xu, Li,  Lv, Wang                    | 2023     | 5         |
| 10.1109/ISSSR61934.2024.00024    | A Comprehensive Review of Learning-based Fuzz Testing Techniques                           | Cheng, Li, Zhao, Li, Wong                                | 2024     | 0         |
| 10.1145/3512345                  | Fuzzing: A Survey for Roadmap                                                              | Zhu, Wen, Camtepe, Yang Xiang                            | 2022     | 139       |
| 10.1109/ACCESS.2023.3347652      | Machine Learning-Based Fuzz Testing Techniques: A Survey                                   | Zhang, Zhang, Xu, Wang,  Li                              | 2024     | 1         |
| 10.48550/ARXIV.2402.00350        | Large Language Models Based Fuzzing Techniques: A Survey                                   | Huang, Zhao, Chen, Ma                                    | 2024     | 8         |
| 10.1109/ICSIP61881.2024.10671554 | A Review of Fuzz Testing for Configuration-Sensitive Software                              | Chu, Huang, Li, Nie                                      | 2024     | 0         |
| 10.47857/IRJMS.2024.V05I04.01451 | A Systematic Review of AI Based Software Test Case Optimization                            | Padmanabhan                                              | 2024     | 0         |
| 10.1145/3243734.3243804          | Evaluating Fuzz Testing                                                                    | Klees, Ruef, Cooper, Wei, Hicks                          | 2018     | 673       |
| 10.1016/J.JSS.2022.111423        | A systematic literature review on benchmarks for evaluating debugging approaches           | Hirsch, Hofer                                            | 2022     | 10        |
| 10.1145/3649476.3658697          | The Fuzz Odyssey: A Survey on Hardware Fuzzing Frameworks for Hardware Design Verification | Saravanan, Dinakarrao                                    | 2024     | 0         |


### Researches & Papers
https://mp.weixin.qq.com/s/DL4pGH-7nPi3eSRD-rlD-w
大模型与模糊测试进行结合的研究论文汇总｜技术进展

https://mp.weixin.qq.com/s/Dn5ooUahCT7IqXIMevjVug
2024信息安全领域四大顶会Fuzz论文汇总｜技术进展

https://mp.weixin.qq.com/s/-ZYX-G_jX1AN8lzbHvW21g
2024年软件工程顶会Fuzz论文汇总

https://github.com/wcventure/FuzzingPaper
https://wcventure.github.io/FuzzingPaper/
1. This website is only used for collecting and grouping the related paper. If there are any paper need to be updated, you can contribute PR.
2. Please check the web [https://wcventure.github.io/FuzzingPaper/](https://wcventure.github.io/FuzzingPaper/), as the `.md` file shown in Github is cropped.
3. Advertisement: [Our ICTT (Guangzhou) research group](https://xidian-ictt-gz.github.io/) is accepting applications for master’s, doctoral, postdoctoral, and research assistant positions. We welcome hardworking, serious, and innovative young people who are interested in joining our research group.

https://github.com/juyongjiang/CodeLLMSurvey
The official GitHub page for the survey paper "A Survey on Large Language Models for Code Generation".
![](../../../../../../../../Assets/Pics/Pasted%20image%2020250412104958.png)

https://github.com/EdPuth/LLMs-based-Fuzzer-Survey
This repo list the core literature in the field of fuzzing test, large language model, and LLM-based fuzzer. Most of papers are selected from authoritative platform such as google scholar, and was published recently. It will be helpful for the researchers who wants to develop LLMs-based fuzzer. Feel free to send a pull request.


### Tools & Projects
🚧 https://github.com/Microsvuln/Awesome-AFL
A curated list of different AFL forks and AFL inspired fuzzers with detailed equivalent academic papers including AFL-fuzzing tutorials

🏠 https://llvm.org/docs/LibFuzzer.html
LibFuzzer is an in-process, coverage-guided, evolutionary fuzzing engine.

LibFuzzer is linked with the library under test, and feeds fuzzed inputs to the library via a specific fuzzing entrypoint (aka “target function”); the fuzzer then tracks which areas of the code are reached, and generates mutations on the corpus of input data in order to maximize the code coverage. The code coverage information for libFuzzer is provided by LLVM’s [SanitizerCoverage](https://clang.llvm.org/docs/SanitizerCoverage.html) instrumentation.

🚧 https://github.com/google/AFL
🏠 https://lcamtuf.coredump.cx/afl/
american fuzzy lop - a security-oriented fuzzer
- 🚧 https://github.com/AFLplusplus/AFLplusplus
	- The fuzzer afl++ is afl with community patches, qemu 5.1 upgrade, collision-free coverage, enhanced laf-intel & redqueen, AFLfast++ power schedules, MOpt mutators, unicorn_mode, and a lot more!
- 🚧 https://gitee.com/opengauss/dbms-fuzzing-scu
	- DBMS-Fuzzing-SCU | 四川大学贾鹏团队根据AFL修改的数据库fuzzing软件

🚧 https://github.com/google/honggfuzz
A security oriented, feedback-driven, evolutionary, easy-to-use fuzzer with interesting analysis options. See the [Usage document](https://github.com/google/honggfuzz/blob/master/docs/USAGE.md) for a primer on Honggfuzz use.

🚧 https://github.com/google/oss-fuzz
📂 https://google.github.io/oss-fuzz/
In cooperation with the [Core Infrastructure Initiative](https://www.coreinfrastructure.org/) and the [OpenSSF](https://www.openssf.org/), OSS-Fuzz aims to make common open source software more secure and stable by combining modern fuzzing techniques with scalable, distributed execution. Projects that do not qualify for OSS-Fuzz (e.g. closed source) can run their own instances of [ClusterFuzz](https://github.com/google/clusterfuzz) or [ClusterFuzzLite](https://google.github.io/clusterfuzzlite/).

We support the [libFuzzer](https://llvm.org/docs/LibFuzzer.html), [AFL++](https://github.com/AFLplusplus/AFLplusplus), and [Honggfuzz](https://github.com/google/honggfuzz) fuzzing engines in combination with [Sanitizers](https://github.com/google/sanitizers), as well as [ClusterFuzz](https://github.com/google/clusterfuzz), a distributed fuzzer execution environment and reporting tool.

Currently, OSS-Fuzz supports C/C++, Rust, Go, Python, Java/JVM, and JavaScript code. Other languages supported by [LLVM](https://llvm.org/) may work too. OSS-Fuzz supports fuzzing x86_64 and i386 builds.


### Other Resources
🤔 https://appsec.guide/
- The Testing Handbook is a resource that guides developers and security professionals in configuring, optimizing, and automating many of the static and dynamic analysis tools we use at [Trail of Bits](https://www.trailofbits.com/).
TOC
- [Cryptographic testing](https://appsec.guide/docs/crypto/)
    - [Wycheproof](https://appsec.guide/docs/crypto/wycheproof/)
    - [Constant time analysis tooling](https://appsec.guide/docs/crypto/constant_time_tool/)
    - [Zero-knowledge protocols](https://appsec.guide/docs/crypto/zkdocs/)
- [Static analysis](https://appsec.guide/docs/static-analysis/)
    - [CodeQL](https://appsec.guide/docs/static-analysis/codeql/)
    - [Semgrep](https://appsec.guide/docs/static-analysis/semgrep/)
- [Web application security](https://appsec.guide/docs/web/)
    - [Burp Suite Professional](https://appsec.guide/docs/web/burp/)
- [Fuzzing](https://appsec.guide/docs/fuzzing/)
	- [C/C++](https://appsec.guide/docs/fuzzing/c-cpp/)
	- [Rust](https://appsec.guide/docs/fuzzing/rust/)
    - [Python](https://appsec.guide/docs/fuzzing/python/)
    - [Ruby](https://appsec.guide/docs/fuzzing/ruby/)
    - Techniques
	    - [Writing harnesses](https://appsec.guide/docs/fuzzing/techniques/writing-harnesses/)
	    - [Fuzzing dictionary](https://appsec.guide/docs/fuzzing/techniques/dictionary/)
	    - [AddressSanitizer](https://appsec.guide/docs/fuzzing/techniques/asan/)
	    - [Fuzzing environments](https://appsec.guide/docs/fuzzing/techniques/environments/)
	    - [FAQ (Fuzzily Asked Questions)](https://appsec.guide/docs/fuzzing/techniques/faq/)
		    -  [The fuzzer is showing crashes, but when I run the SUT on the test cases outside of the fuzzer, then no crash is shown. What is happening?](https://appsec.guide/docs/fuzzing/techniques/faq/#the-fuzzer-is-showing-crashes-but-when-i-run-the-sut-on-the-test-cases-outside-of-the-fuzzer-then-no-crash-is-shown-what-is-happening)
			- [When should I stop fuzzing?](https://appsec.guide/docs/fuzzing/techniques/faq/#when-should-i-stop-fuzzing)
			- [Should I keep the corpus confidential or make it public?](https://appsec.guide/docs/fuzzing/techniques/faq/#should-i-keep-the-corpus-confidential-or-make-it-public)
			- [My fuzzer is not finding anything. What are indicators that there is a bug in the fuzzing setup?](https://appsec.guide/docs/fuzzing/techniques/faq/#my-fuzzer-is-not-finding-anything-what-are-indicators-that-there-is-a-bug-in-the-fuzzing-setup)
			- [My corpus has grown quite large. How do I deal with these thousands of small files?](https://appsec.guide/docs/fuzzing/techniques/faq/#my-corpus-has-grown-quite-large-how-do-i-deal-with-these-thousands-of-small-files)
			- [My fuzzer found inputs that crash the SUT. However, it is very large and complex. Is there a way to simplify finding the root cause of the crash?](https://appsec.guide/docs/fuzzing/techniques/faq/#my-fuzzer-found-inputs-that-crash-the-sut-however-it-is-very-large-and-complex-is-there-a-way-to-simplify-finding-the-root-cause-of-the-crash)
			- [How can I collect core dumps from crashes during or after a fuzzing campaign?](https://appsec.guide/docs/fuzzing/techniques/faq/#how-can-i-collect-core-dumps-from-crashes-during-or-after-a-fuzzing-campaign)
			- [I have a fuzzing setup. How often and where should I run my harness?](https://appsec.guide/docs/fuzzing/techniques/faq/#i-have-a-fuzzing-setup-how-often-and-where-should-i-run-my-harness)
			- [My fuzzer has found multiple crashes. In fact, I have hundreds of crash files. How can I find the corresponding bugs?](https://appsec.guide/docs/fuzzing/techniques/faq/#my-fuzzer-has-found-multiple-crashes-in-fact-i-have-hundreds-of-crash-files-how-can-i-find-the-corresponding-bugs)
			- [How do I fuzz my Go, Python, Java, or JavaScript project?](https://appsec.guide/docs/fuzzing/techniques/faq/#how-do-i-fuzz-my-go-python-java-or-javascript-project)
			- [I’m using Bazel, Buck, or some other build system. How can I integrate fuzzing into my project?](https://appsec.guide/docs/fuzzing/techniques/faq/#im-using-bazel-buck-or-some-other-build-system-how-can-i-integrate-fuzzing-into-my-project)
			- [My program runs only on Windows. How can I fuzz it?](https://appsec.guide/docs/fuzzing/techniques/faq/#my-program-runs-only-on-windows-how-can-i-fuzz-it)
    - [OSS-Fuzz](https://appsec.guide/docs/fuzzing/oss-fuzz/)
    - [Snapshot Fuzzing](https://appsec.guide/docs/fuzzing/snapshot-fuzzing/)
    - [Additional resources](https://appsec.guide/docs/fuzzing/resources/)



## Intro: Fuzz & Fuzzing Test
> 🔗 https://en.wikipedia.org/wiki/Fuzzing

In programming and software development, fuzzing or fuzz testing is an automated software testing technique that involves providing invalid, unexpected, or random data as inputs to a computer program. The program is then monitored for exceptions such as crashes, failing built-in code assertions, or potential memory leaks. Typically, fuzzers are used to test programs that take structured inputs. This structure is specified, e.g., in a file format or protocol and distinguishes valid from invalid input. An effective fuzzer generates semi-valid inputs that are "valid enough" in that they are not directly rejected by the parser, but do create unexpected behaviors deeper in the program and are "invalid enough" to expose corner cases that have not been properly dealt with.

For the purpose of security, input that crosses a trust boundary is often the most useful. For example, it is more important to fuzz code that handles the upload of a file by any user than it is to fuzz the code that parses a configuration file that is accessible only to a privileged user. 

> V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. (2018)
> https://ieeexplore.ieee.org/document/8863940
> https://arxiv.org/pdf/1812.00140

The term “fuzz” was originally coined by Miller et al. in 1990 to refer to a program that “generates a stream of random characters to be consumed by a target program” [152,p. 4]. Since then, the concept of fuzz as well as its action—“fuzzing”—has appeared in a wide variety of contexts, including dynamic symbolic execution [90], [226], grammar-based test case generation [88], [105], [213], permission testing [24], [80], behavioral testing [122], [175], [224], complexity testing [135], [222], kernel testing [216], [196], [186], representation dependence testing [121], function detection [227], robustness evaluation [223], exploit development [111], GUI testing [197], signature generation [72], and penetration testing [81], [156]. To systematize the knowledge from the vast literature of fuzzing, let us first present a terminology of fuzzing extracted from modern uses.

> 🔗 https://itea.org/journals/volume-45-4/review-of-fuzz-testing-to-find-system-vulnerabilities/

Fundamentally, fuzzing shifts the focus from functional test cases (i.e., what systems must do) to include the effects of the non-functional factors (i.e., incidental characteristics of systems or invalid values or rarely used values). It does so in various systematic ways of mixing structured experimentation (i.e., design of experiment or combinatorial test designs) with randomization. Such randomization can be applied within runs to the uncontrolled aspects. Finally, it often systematically and concurrently explores variations in hardware and software. Put another way by Mallissery and Wu[10]:

> _‘Fuzzing is a vulnerability discovery solution that resonates with random-mutation, feedback-driven, coverage-guided, constraint-guided, seed-scheduling, and target-oriented strategies. … Most topline companies and organizations utilize fuzzing to ensure quality control and cybersecurity operations. For example, Google uses fuzzing to verify and ensure that the millions of Lines of Code (LOC) in Google Chrome are bug-free [67]. It was challenging to admit that Google could find 20K vulnerabilities in Chrome using fuzz testing [67]. The dominant software from Microsoft has to pass the fuzz test stage in the software development cycle to ensure no code vulnerabilities and confirm stability [136]. The DoD Enterprise DevSecOps Reference Design document [40] from the United States has mentioned that continuous testing across the software development cycle is necessary for the test tools support. Therefore, it is essential to use fuzzing to discover Distributed Denial of Service attacks and malware exploit possibilities, validate system security, and reduce the risk of system degradation [40].’ [pp. 71:1-2]_


### Why Fuzzing?
> 🔗 Fuzzing技术总结（Brief Surveys on Fuzz Testing） - wcventure的文章 - 知乎 https://zhuanlan.zhihu.com/p/43432370

为什么会有不确定的测试用例，我想主要的原因是下面几点：
1. 我们无法穷举所有的输入作为测试用例。我们编写测试用例的时候，一般考虑正向测试、反向测试、边界值、超长、超短等一些常见的场景，但我们是没有办法把所有的输入都遍历进行测试的。
2. 我们无法想到所有可能的异常场景。由于人类脑力的限制，我们没有办法想到所有可能的异常组合，尤其是现在的软件越来越多的依赖操作系统、中间件、第三方组件，这些系统里的bug或者组合后形成的bug，是我们某个项目组的开发人员、测试人员无法预知的。
3. Fuzzing软件也同样无法遍历所有的异常场景。随着现在软件越来越复杂，可选的输入可以认为有无限个组合，所以即使是使用软件来遍历也是不可能实现的，否则你的版本可能就永远也发布不了。Fuzzing技术本质是依靠随机函数生成随机测试用例来进行测试验证，所以是不确定的。

这些不确定的测试用例会起到我们想要的测试结果么？能发现真正的Bug么？
1. Fuzzing技术首先是一种自动化技术，即软件自动执行相对随机的测试用例。因为是依靠计算机软件自动执行，所以测试效率相对人来讲远远高出几个数量级。比如，一个优秀的测试人员，一天能执行的测试用例数量最多也就是几十个，很难达到100个。而Fuzzing工具可能几分钟就可以轻松执行上百个测试用例。
2. Fuzzing技术本质是依赖随机函数生成随机测试用例，随机性意味着不重复、不可预测，可能有意想不到的输入和结果。
3. 根据概率论里面的“大数定律”，只要我们重复的次数够多、随机性够强，那些概率极低的偶然事件就必然会出现。Fuzzing技术就是大数定律的典范应用，足够多的测试用例和随机性，就可以让那些隐藏的很深很难出现的Bug成为必然现象。

目前，Fuzzing技术已经是软件测试、漏洞挖掘领域的最有效的手段之一。Fuzzing技术特别适合用于发现0 Day漏洞，也是众多黑客或黑帽子发现软件漏洞的首选技术。Fuzzing虽然不能直接达到入侵的效果，但是Fuzzing非常容易找到软件或系统的漏洞，以此为突破口深入分析，就更容易找到入侵路径，这就是黑客喜欢Fuzzing技术的原因。
#### Fuzzing 🆚 Symbolic /Concolic Execution?
↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE)/Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE).md)


### Terminology in Fuzzing ⭐
> V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. (2018)
> https://ieeexplore.ieee.org/document/8863940
> https://arxiv.org/pdf/1812.00140

Intuitively, fuzzing is the action of running a **Program Under Test (PUT) /System Under Test (SUT)** with “fuzz inputs”. Honoring Miller et al., we consider a fuzz input to be an input that the PUT may not be expecting, i.e., an input that the PUT may process incorrectly and trigger a behavior that was unintended by the PUT developer. To capture this idea, we define the term fuzzing as follows.


==**Definition 1 (Fuzzing)**==
Fuzzing is the execution of the PUT using input(s) sampled from an input space (the “fuzz input space”) that protrudes the expected input space of the PUT. 

Three remarks are in order. First, although it may be common to see the fuzz input space to contain the expected input space, this is not necessary—it suffices for the former to contain an input not in the latter. Second, in practice fuzzing almost surely runs for many iterations; thus writing “repeated executions” above would still be largely accurate. Third, the sampling process is not necessarily randomized, as we will see in §5.

> Fuzz testing is a form of software testing technique that utilizes fuzzing. To differentiate it from others and to honor what we consider to be its most prominent purpose, we deem it to have a specific goal of finding security-related bugs, which include program crashes. In addition, we also define fuzzer and fuzz campaign, both of which are common terms in fuzz testing:


==**Definition 2 (Fuzz Testing)**==
Fuzz testing is the use of fuzzing to test if a PUT violates a security policy.


==**Definition 3 (Fuzzer)**==
A fuzzer is a program that performs fuzz testing on a PUT.


==**Definition 4 (Fuzz Campaign)**==
A fuzz campaign is a specific execution of a fuzzer on a PUT with a specific security
policy. 

The goal of running a PUT through a fuzzing campaign is to find bugs [26] that violate the specified security policy . For example, a security policy employed by early fuzzers tested only whether a generated input—the test case—crashed the PUT. However, fuzz testing can actually be used to test any security policy observable from an execution, i.e., EM-enforceable [183]. The specific mechanism that decides whether an execution violates the security policy is called the bug oracle.


==**Definition 5 (Bug Oracle)**== (or **Sanitizers**)
> [!lnks]
> ↗ [Code Sanitizer](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Sanitizer.md)
> 
> ↗ [Code Instrumentation, System Visibility, & Computer Profiling](../🥁%20Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling/Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling.md)
> **Instrumentation:** The act of instrumenting a program involves adding non-functional changes in order to retrieve data from it or making it more secure/robust.

A bug oracle is a program, perhaps as part of a fuzzer, that determines whether a given execution of the PUT violates a specific security policy. 

We refer to the algorithm implemented by a fuzzer simply as its “fuzz algorithm”. Almost all fuzz algorithms depend on some parameters beyond (the path to) the PUT. Each concrete setting of the parameters is a fuzz configuration:


==**Definition 6 (Fuzz Configuration)**==
A fuzz configuration of a fuzz algorithm comprises the parameter value(s) that control(s) the fuzz algorithm.

The definition of a fuzz configuration is intended to be broad. Note that the type of values in a fuzz configuration depend on the type of the fuzz algorithm. For example, a fuzz algorithm that sends streams of random bytes to the PUT [152] has a simple configuration space {(PUT)}. On the other hand, sophisticated fuzzers contain algorithms that accept a set of configurations and evolve the set over time—this includes adding and removing configurations. For example, CERT BFF [49] varies both the mutation ratio and the seed over the course of a campaign, and thus its configuration space is {(PUT, s1, r1), (PUT, s2, r2), . . .}. A seed is a (commonly well-structured) input to the PUT, used to generate test cases by modifying it. Fuzzers typically maintain a collection of seeds, and some fuzzers evolve the collection as the fuzz campaign progresses. This collection is called a seed pool. Finally, a fuzzer is able to store some data  within each configuration. For instance, coverage-guided fuzzers may store the attained coverage in each configuration.

> [!quote]
> https://appsec.guide/docs/fuzzing/
> - **SUT/target:** The System Under Test (SUT) is the piece of software that is being tested. It can either be a standalone application like a command-line program or a library.
> - **Fuzzing/Fuzzer:** Fuzz testing, also known as fuzzing, is an automated software testing method that supplies a SUT with invalid, unexpected, or random data as inputs. The program that implements the fuzzing algorithm is called a fuzzer.
> - **Test case:** A test case is the concrete input that is given to the testing harness. Usually, it is a string or bitstring. A test input can also be encoded in a more complex format like an abstract syntax tree.
> - **(Testing/fuzzing) harness:** A harness handles the test setup for a given SUT. The harness wraps the software and initializes it such that it is ready for executing test cases. A harness integrates a SUT into a testing environment.
> - **libFuzzer harness:** A harness that is compatible with the libFuzzer library. The term refers to the `LLVMFuzzerTestOneInput` function.
> - **Fuzz test:** A fuzz test consists of a fuzzing harness and the SUT. You might refer to a compiled binary that includes the harness and SUT as a fuzz test.
> - **Fuzzing campaign:** A fuzzing campaign is an execution of the fuzzer. A fuzzing campaign starts when the fuzzer starts testing and stops when the fuzzing procedure is stopped.
> - **Corpus:** The evolving set of test cases. During a fuzzing campaign, the corpus usually grows as new test cases are discovered.
> - **Seed Corpus:** Fuzzing campaigns are usually bootstrapped using an initial set of test cases. This set is also called a seed corpus. Each test case of the corpus is called a seed.
> - **Fuzzing engine/runtime:** The fuzzing engine/runtime is part of the fuzzer that is executed when the fuzzing starts. It orchestrates the fuzzing process.
> - **Instrumentation:** The act of instrumenting a program involves adding non-functional changes in order to retrieve data from it or making it more secure/robust.
> - **Code coverage:** A metric to measure the degree to which the source code of a program is executed.


==**Fuzz Driver /Fuzz Harness**== (like a wrapper)
> 🔗 https://srlabs.de/blog/guide-to-writing-fuzzing-harness

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260128164334.png)
<small>Fuzzing: automated data mutation to trigger bugs <br> <a>https://srlabs.de/blog/guide-to-writing-fuzzing-harness</a></small>

A fuzzing harness is a program that enables fuzz testing of specific functions. It connects the fuzzer to the software under test (“SUT”). The harness translates test inputs from the fuzzing engine into a format the SUT can understand.

Besides being the interface between the fuzzer and the target, a harness also initializes the target API for testing.

In some cases, for example, when testing command-line applications that read input files, a custom harness isn’t strictly necessary. However, creating one can improve fuzzing speed and coverage even in those cases.


==**Fuzzer Runtime and Instrumentation Runtime**==
 > 🔗 https://appsec.guide/docs/fuzzing/

**Fuzzer runtime:** The fuzzing loop is implemented here. This unit also provides the main function for the fuzzer. The fuzzing runtime parses fuzzing options, executes the harness, collects feedback, and manages the fuzzer state. The runtime is provided by the fuzzing project you use, such as libFuzzer or AFL++. Any runtime that is required for collecting feedback through instrumentations is implemented in the fuzzer runtime.

**Instrumentation runtime:** Instrumentations like [AddressSanitizer](https://appsec.guide/docs/fuzzing/techniques/asan/) or [UndefinedBehaviorSanitizer](https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html) come with a runtime. A fuzzer must be compatible with the sanitizer for bugs to be detected reliably and feedback implemented efficiently. In memory-safe languages like Go or Rust you are less likely to need sanitizers.

Note, that the two just mentioned sanitizers introduce instrumentation with the goal of finding more bugs. There is also a different class of instrumentations (e.g., [SanitizerCoverage](https://clang.llvm.org/docs/SanitizerCoverage.html)) that provides feedback to the fuzzer during execution. The runtime of the feedback-based instrumentation is usually part of the fuzzer runtime.


### Taxonomy of Fuzzers /Fuzzing Techniques
> 🔗 https://en.wikipedia.org/wiki/Fuzzing

A fuzzer can be categorized in several ways:
1. (Reuse of existing input seeds) A fuzzer can be **generation-based** or **mutation-based** depending on whether inputs are generated from scratch or by modifying existing inputs.
2. (Aware of input structure) A fuzzer can be **dumb (unstructured)** or **smart (structured)** depending on whether it is aware of input structure.
3. (Aware of program structure) A fuzzer can be **white-, grey-, or black-box**, depending on whether it is aware of program structure.
	1. ↗ [Types of Software Testing](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Types%20of%20Software%20Testing/Types%20of%20Software%20Testing.md)

> Besides, fuzzers can also be classified by the corresponding PUTs. Please see section below of "Fuzzers by PUT".

> 🔗 https://itea.org/journals/volume-45-4/review-of-fuzz-testing-to-find-system-vulnerabilities/

Fuzzing is defined by Microsoft as ‘a program analysis technique that looks for inputs causing error conditions that have a high chance of being exploitable, such as buffer overflows, memory access violations and null pointer dereferences.’ They go on to characterize fuzz testing as being in the following three categories:
- Blackbox fuzzers, also called “dumb fuzzers,” rely solely on the sample input files to generate new inputs.
- Whitebox fuzzers analyze the target program either statically or dynamically to guide the search for new inputs aimed at exploring as many code paths as possible.
- Greybox fuzzers, just like blackbox fuzzers, don’t have any knowledge of the structure of the target program, but make use of a feedback loop to guide their search based on observed behavior from previous executions of the program.

**Table 1: Comparison of fuzz test types**

|                          |                                               |                                              |                                      |
| ------------------------ | --------------------------------------------- | -------------------------------------------- | ------------------------------------ |
|                          | **Black-box (BB)**                            | **Grey-box (GB)**                            | **White-box (WB)**                   |
| **Goal**                 | Mimic external cyber-attack                   | Mimic insider threats                        | Mimic threats with privileged access |
| **Access & Information** | Zero                                          | Some                                         | Complete                             |
| **Advantage**            | Realistic start                               | More efficient than BB                       | More comprehensive than GB           |
| **Disadvantage**         | May miss vulnerabilities & resource-intensive | Limited assessment of penetration resistance | Requires extensive release at cost   |
#### Snapshot Fuzzing
> 🔗 https://appsec.guide/docs/fuzzing/snapshot-fuzzing/

Snapshot fuzzing is the process of taking a snapshot of the target program or OS—of the memory state, register state, or other information needed to resume execution—then continuing execution in an emulated environment, mutating data in memory, and resetting the program back to the original snapshot state when the execution crashes or reaches a specified point.

Snapshot fuzzing has many advantages:
- Snapshot fuzzing can be fast, as the program does not need to start up on each test run. You can snapshot the program at the desired state (e.g., when a file is loaded) and start testing from there.
- The process is fully deterministic or has a high level of determinism.
    - The target always starts with the same state.
    - The same fuzz input should give the same result.
    - Testing results in no unreproducible crashes.
    - Any difference in execution is due to the user input, not some unknown state.
- No source is needed (but of course, symbols can help).
- It is easy to track code coverage, detect crashes, and track dirty memory.

It also has some disadvantages:
- Preparing a snapshot is time-consuming and error-prone.
    - For example, to target a Windows program, you must set up KDNET, create a VM snapshot, prepare a harness, and take other time-consuming steps.
- Existing fuzzers have many minor bugs, and you need to have tacit knowledge to make them run under specific circumstances. For example, you must know that to execute a specific target using a specific emulating back end, you have to strip a specific register’s bits; otherwise, you will have errors.

In this Testing Handbook chapter, we will demonstrate snapshot fuzzing on a Windows kernel driver using a fuzzer built with the tool what the fuzz (wtf), a distributed, code-coverage-guided, customizable, cross-platform snapshot-based fuzzer designed for user- and kernel-mode targets. It is mainly implemented for Windows, but there are extensions to support other platforms:
- [Linux](https://github.com/0vercl0k/wtf/blob/main/linux_mode)
- [macOS](https://blog.talosintelligence.com/talos-releases-new-macos-fuzzer/)

Other notable snapshot fuzzers include the following:
- [Snapchange by AWS](https://github.com/awslabs/snapchange)
- [Nyx](https://github.com/nyx-fuzz)

See [this blog post](https://doar-e.github.io/blog/2021/07/15/building-a-new-snapshot-fuzzer-fuzzing-ida/) for the story behind wtf and its use in fuzzing IDA, and [this blog post series](https://h0mbre.github.io/New_Fuzzer_Project/) on developing a custom snapshot fuzzer.
#### Differential Fuzzing /Differential Testing
> 🔗 https://en.wikipedia.org/wiki/Differential_testing

**[Differential](https://en.wikipedia.org/wiki/Software_testing "Software testing") testing**, also known as **differential fuzzing**, is a [software testing](https://en.wikipedia.org/wiki/Software_testing "Software testing") technique that detect [bugs](https://en.wikipedia.org/wiki/Software_bugs "Software bugs"), by providing the same input to a series of similar applications (or to different implementations of the same application), and observing differences in their execution. Differential testing complements traditional software testing because it is well-suited to find [semantic](https://en.wikipedia.org/wiki/Semantics_\(computer_science\) "Semantics (computer science)") or [logic bugs](https://en.wikipedia.org/wiki/Logic_error "Logic error") that do not exhibit explicit erroneous behaviors like crashes or assertion failures. Differential testing is also called back-to-back testing.

Differential testing finds semantic bugs by using different implementations of the same functionality as cross-referencing [oracles](https://en.wikipedia.org/wiki/Oracle_machine "Oracle machine"), pinpointing differences in their outputs over the same input: any discrepancy between the program behaviors on the same input is marked as a potential bug.


### OSS-Fuzz
> 🔗 https://google.github.io/oss-fuzz/

[Fuzz testing](https://en.wikipedia.org/wiki/Fuzz_testing) is a well-known technique for uncovering programming errors in software. Many of these detectable errors, like [buffer overflow](https://en.wikipedia.org/wiki/Buffer_overflow), can have serious security implications. Google has found [thousands](https://bugs.chromium.org/p/chromium/issues/list?q=label%3AStability-LibFuzzer%2CStability-AFL%20-status%3ADuplicate%2CWontFix&can=1) of security vulnerabilities and stability bugs by deploying [guided in-process fuzzing of Chrome components](https://security.googleblog.com/2016/08/guided-in-process-fuzzing-of-chrome.html), and we now want to share that service with the open source community.

In cooperation with the [Core Infrastructure Initiative](https://www.coreinfrastructure.org/) and the [OpenSSF](https://www.openssf.org/), OSS-Fuzz aims to make common open source software more secure and stable by combining modern fuzzing techniques with scalable, distributed execution. Projects that do not qualify for OSS-Fuzz (e.g. closed source) can run their own instances of [ClusterFuzz](https://github.com/google/clusterfuzz) or [ClusterFuzzLite](https://google.github.io/clusterfuzzlite/).

We support the [libFuzzer](https://llvm.org/docs/LibFuzzer.html), [AFL++](https://github.com/AFLplusplus/AFLplusplus), [Honggfuzz](https://github.com/google/honggfuzz), and [Centipede](https://github.com/google/centipede) fuzzing engines in combination with [Sanitizers](https://github.com/google/sanitizers), as well as [ClusterFuzz](https://github.com/google/clusterfuzz), a distributed fuzzer execution environment and reporting tool.

Currently, OSS-Fuzz supports C/C++, Rust, Go, Python, Java/JVM code, JavaScript and Lua. Other languages supported by [LLVM](https://llvm.org/) may work too. OSS-Fuzz supports fuzzing x86_64 and i386 builds.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260206231735.png)

The process works like this:
1. A maintainer of an open source project (or an outside volunteer) creates one or more [fuzz targets](https://llvm.org/docs/LibFuzzer.html#fuzz-target) and [integrates](https://google.github.io/oss-fuzz/advanced-topics/ideal-integration/) them with the project’s build and test system.
2. The project is [accepted to OSS-Fuzz](https://google.github.io/oss-fuzz/getting-started/accepting-new-projects/) and the developer commits their build configurations.
3. The OSS-Fuzz [builder](https://github.com/google/oss-fuzz/tree/master/infra/build) builds the project from the committed configs.
4. The builder uploads the fuzz targets to the OSS-Fuzz GCS bucket.
5. [ClusterFuzz](https://google.github.io/oss-fuzz/further-reading/clusterfuzz) downloads the fuzz targets and begins to fuzz the projects.
6. When Clusterfuzz finds a bug, it reports the issue automatically to the OSS-Fuzz [issue tracker](https://bugs.chromium.org/p/oss-fuzz/issues/list) ([example](https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=9)). ([Why use a different tracker?](https://google.github.io/oss-fuzz/faq/#why-do-you-use-a-different-issue-tracker-for-reporting-bugs-in-oss-projects))
7. Project owners are CCed on the bug report.
8. The project developer fixes the bug upstream and credits OSS-Fuzz for the discovery (the commit message should contain the string **‘Credit to OSS-Fuzz’**).

Once the developer fixes the bug, [ClusterFuzz](https://google.github.io/oss-fuzz/further-reading/clusterfuzz) automatically verifies the fix, adds a comment, and closes the issue ([example](https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=53#c3)). After the fix is verified or 90 days after reporting (whichever is earlier), the issue becomes [public](https://google.github.io/oss-fuzz/getting-started/bug-disclosure-guidelines/).

> 🔗 https://appsec.guide/docs/fuzzing/oss-fuzz/

[OSS-Fuzz](https://google.github.io/oss-fuzz/) is an open-source project developed by Google that aims to improve the security and stability of open-source software by providing free distributed infrastructure for continuous fuzz festing. Using a pre-existing framework like OSS-Fuzz has many advantages over manually running harnesses: it streamlines the process and facilitates simpler modifications. Although only select projects are accepted into OSS-Fuzz, because the project’s core is open-source, anyone can host their own instance of OSS-Fuzz and use it for private projects!

This chapter will help project developers understand how to leverage OSS-Fuzz to both fuzz a project on your private instance and delegate the fuzzing computation to Google. Additionally, security researchers will learn how to run a single harness on an existing project, extend a harness, or reproduce an individual crash.


## Fuzzing Algorithm & General Working Procedure
### General Fuzzing Procedure
![](https://appsec.guide/docs/fuzzing/intro.svg)
<small>The general fuzzing scenario consists of the developer writing a harness for a SUT. After starting a fuzzing campaign, the fuzzer runtime generates random test cases that are sent to the harness. The harness then executes the SUT, which could lead to the discovery of bugs and crashes. Instrumentation runtime and the instrumentation added to the SUT are generally optional, even though most fuzzers instrument the SUT code and add a runtime. <br> <a>https://appsec.guide/docs/fuzzing/</a></small>

![](../../../../../../../../Assets/Pics/Screenshot%202025-04-11%20at%2020.17.58.png)
<small>如图所示, 模糊测试的一般工作流程可分为5个基本步骤, 即预处理、测试输入生成、测试执行、缺陷检 测和后模糊处理. <a>Li Y, Yang WZ, Zhang Y, Xue YX. Survey on Fuzzing Based on Large Language Model. Ruan Jian Xue Bao/Journal of Software (in Chinese). http://www.jos.org.cn/1000-9825/7323.htm</a><br>注：这里“种子插桩”应该是对应 Instrumentation, 个人认为翻译成性能评估更易理解</small>

> 🔗 https://itea.org/journals/volume-45-4/review-of-fuzz-testing-to-find-system-vulnerabilities/

Different fuzzing engines employ different methods to look for vulnerabilities and there is a growing repertoire of types and names depending on their target systems and what languages they operate in. According to Mallissery and Wu [10] there are six fundamental steps in a fuzzing engine as illustrated in Figure 1:

1. System readiness is the primary step toward fuzzing (supplying initial seeds, setting iterations, memory allocation, etc.).
2. Automate the fuzzing process and instrument wherever required.
3. Generated test cases will take to the target software for performing an execution using the delivered test case.[sic6 ]
4. Continue with new program states or check for potential crashes in the software while following the execution path.
5. Report all the fuzz progress (bugs/crashes/hangs/paths/edges) to the fuzz engine and the user.
6. User involvement/backtracking is optional to improve fuzzing and explore all the unvisited program control flow paths.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020250419122414.png)


> V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. (2018)
> https://ieeexplore.ieee.org/document/8863940
> https://arxiv.org/pdf/1812.00140

![](../../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2019.30.41.png)

We present a generic algorithm for fuzz testing, Algorithm 1, which we imagine to have been implemented in a model fuzzer. It is general enough to accommodate existing fuzzing techniques, including black-, grey-, and white-box fuzzing as defined in §2.4. Algorithm 1 takes a set of fuzz configurations $\mathbb{C}$ and a timeout $t_{limit}$ as input, and outputs a set of discovered bugs $\mathbb{B}$. It consists of two parts. The first part is the `PREPROCESS` function, which is executed at the beginning of a fuzz campaign. The second part is a series of five functions inside a loop: `SCHEDULE`, `INPUTGEN`, `INPUTEVAL`, `CONFUPDATE`, and `CONTINUE`. Each execution of this loop is called a fuzz iteration and each time `INPUTEVAL` executes the PUT on a test case is called a fuzz run. Note that some fuzzers do not implement all five functions. For example, to model Radamsa [102], which never updates the set of fuzz configurations, `CONFUPDATE` always returns the current set of configurations unchanged.

**`PREPROCESS` ($\mathbb{C}$) → $\mathbb{C}$**
A user supplies `PREPROCESS` with a set of fuzz configurations as input, and it returns a potentially-modified set of fuzz configurations. Depending on the fuzz algorithm, PREPROCESS may perform a variety of actions such as inserting instrumentation code to PUTs, or measuring the execution speed of seed files. See §3.

**`SCHEDULE` ($\mathbb{C}$, $t_{elapsed}$, $t_{limit}$) → $conf$**
`SCHEDULE` takes in the current set of fuzz configurations, the current time $t_{elapsed}$, and a timeout $t_{limit}$ as input, and selects a fuzz configuration to be used for the current fuzz iteration. See §4.

**`INPUTGEN` ($conf$) → $tcs$**
`INPUTGEN` takes a fuzz configuration as input and returns a set of concrete test cases $tcs$ as output. When generating test cases, `INPUTGEN` uses specific parameter(s) in $conf$. Some fuzzers use a seed in $conf$ for generating test cases, while others use a model or grammar as a parameter. See §5.

**`INPUTEVAL` (`conf`, $tcs$, $O_{bug}$) → $\mathbb{B}$ , $execinfos$**
`INPUTEVAL` takes a fuzz configuration conf, a set of test cases $tcs$, and a bug oracle $O_{bug}$ as input. It executes the PUT on $tcs$ and checks if the executions violate the security policy using the bug oracle $O_{bug}$. It then outputs the set of bugs found $\mathbb{B}$ and information about each of the fuzz runs $execinfos$, which may be used to update the fuzz configurations. We assume $O_{bug}$ is embedded in our model fuzzer. See §6.

**`CONFUPDATE` ($\mathbb{C}$, $conf$, $execinfos$) → $\mathbb{C}$**
`CONFUPDATE` takes a set of fuzz configurations $\mathbb{C}$, the current configuration conf, and the information about each of the fuzz runs $execinfos$, as input. It may update the set of fuzz configurations $\mathbb{C}$. For example, many grey-box fuzzers reduce the number of fuzz configurations in $\mathbb{C}$ based on $execinfos$. See §7.

**`CONTINUE` ($\mathbb{C}$) → {$True$, $False$}**
`CONTINUE` takes a set of fuzz configurations $\mathbb{C}$ as input and outputs a boolean indicating whether a new fuzz iteration should occur. This function is useful to model white-box fuzzers that can terminate when there are no more paths to discover.
#### Fuzzing Environments
> 🔗 https://appsec.guide/docs/fuzzing/techniques/environments/

Like any software, the choice of fuzzer will depend on factors such as the operating system, architecture, software versions, and hardware. This section will review factors that influence the choice of the environment used for fuzzing.
#### Fuzzing Harness /Drivers
> 🔗 https://appsec.guide/docs/fuzzing/techniques/writing-harnesses/
> The following section showcases some techniques to successfully write a fuzzing harness—the most important part of any fuzzing setup. If written poorly, critical parts of your application may not be covered.
#### Instrumentation
> [!links]
> ↗ [Code Instrumentation, System Visibility, & Computer Profiling](../🥁%20Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling/Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling.md)
> ↗ [Code Sanitizer](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Sanitizer.md)
#### Fuzzing Corpus & Dictionary
> 🔗 https://appsec.guide/docs/fuzzing/techniques/dictionary/
#### Termination Conditions of Fuzzing 🤔
> 🔗 https://www.fuzzingbook.org/html/WhenToStopFuzzing.html
> 
> Lessons Learned[](https://www.fuzzingbook.org/html/WhenToStopFuzzing.html#Lessons-Learned)
> - One can measure the _progress_ of a fuzzing campaign (as species over time, i.e., S(n)).
> - One can measure the _effectiveness_ of a fuzzing campaign (as asymptotic total number of species S).
> - One can estimate the _effectiveness_ of a fuzzing campaign using the Chao1-estimator Ŝ .
> - One can extrapolate the _progress_ of a fuzzing campaign, Ŝ (n+m∗).
> - One can estimate the _residual risk_ (i.e., the probability that a bug exists that has not been found) using the Good-Turing estimator GT of the species discovery probability.


### Hybrid Fuzzing
> 🔗 https://itea.org/journals/volume-45-4/review-of-fuzz-testing-to-find-system-vulnerabilities/

Hybrid fuzzing merges fuzzing, assessed as ‘concrete’ because it is actual test, and ‘symbolic’ execution, which inculcates code-based paths, where the portmanteau of concrete and symbolic is abbreviated to ‘concolic.’ These two types of techniques are complementary and concolic is symbolic with hybrid fuzzing. One of the limits of earlier fuzzing is that the generational or mutation algorithms can constrain solutions to previously detected vulnerabilities, whereas symbolic logic execution combined with fuzzing can force unusual paths to discover additional vulnerabilities. An illustration of hybrid fuzzing is Figure 4 (below).

![](../../../../../../../../Assets/Pics/Pasted%20image%2020250419123223.png)

From the presentation Senator and Allen [4], a fuzzing engine known as ‘Driller’ was used from around 2016 to 2019 to escape compartments and access code used infrequently (i.e., Zhang, et al. [15, p. 4-16]). Major developments since 2020 that were highlighted in the ITEA workshop were ‘Fuzzolic’ [16], ‘Paint Aware Taint Analysis (PATA)’ [17] and Speedy-Automatic-Vulnerability-Incentivized Oracle (SAVIOR) [18].

...


### LLM-based Fuzzing Procedure
↗ [LLM & Fuzzing](../../../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Fuzzing.md)

![](../../../../../../../../Assets/Pics/Screenshot%202025-04-11%20at%2020.42.35.png)
<small>LLM驱动缺陷检测的一般流程 <a>Li Y, Yang WZ, Zhang Y, Xue YX. Survey on Fuzzing Based on Large Language Model. Ruan Jian Xue Bao/Journal of Software (in Chinese). http://www.jos.org.cn/1000-9825/7323.htm</a></small>



## Fuzzing Scenarios & Fuzzers
> ↗ [LLM & Fuzzing](../../../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Fuzzing.md)


### 📋 List of Fuzzers (by Techniques)
#### Genealogy
![](../../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2015.52.12.png)
<small>Genealogy tracing significant fuzzers’ lineage back to Miller et al.’s seminal work. Each node in the same row represents a set of fuzzers appeared in the same year. A solid arrow from X to Y indicates that Y cites, references, or otherwise uses techniques from X. 📗 denotes that a paper describing the work was published.</small>
<small>V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. <a>https://ieeexplore.ieee.org/document/8863940</a></small>
#### 1️⃣ Traditional Fuzzers
![](../../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2015.55.03.png)
<small>V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. <a>https://ieeexplore.ieee.org/document/8863940</a> (2018)</small>
#### 2️⃣ Traditional Machine Learning & Neural Network Based Fuzzers


#### 3️⃣ 🔥 LLM Based Fuzzers
↗ [LLM & Fuzzing](../../../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Fuzzing.md)

![](../../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2021.11.11.png)
<small>Huang, Linghan, Peizhou Zhao, Huaming Chen, and Lei Ma. "Large language models based fuzzing techniques: A survey." arXiv preprint arXiv:2402.00350 (2024).
<a>https://arxiv.org/abs/2402.00350</a></small>

![](../../../../../../../../Assets/Pics/Screenshot%202025-04-11%20at%2016.19.05.png)
<small>Huang, Linghan, Peizhou Zhao, Huaming Chen, and Lei Ma. "Large language models based fuzzing techniques: A survey." arXiv preprint arXiv:2402.00350 (2024).
<a>https://arxiv.org/abs/2402.00350</a></small>

![](../../../../../../../../Assets/Pics/Screenshot%202025-04-12%20at%2010.33.38.png)
![](../../../../../../../../Assets/Pics/Screenshot%202025-04-12%20at%2010.35.25.png)
<small>Li Y, Yang WZ, Zhang Y, Xue YX. Survey on Fuzzing Based on Large Language Model. Ruan Jian Xue Bao/Journal of Software (in Chinese). <a>http://www.jos.org.cn/1000-9825/7323.htm</a></small>


### Fuzzer by PUT


### Fuzzing by Strategies
#### Testing Mode
##### White-Box Testing

##### Black-Box Testing

##### (Directed) Grey-Box Testing
![](../../../../../../../../Assets/Pics/Screenshot%202025-11-16%20at%2021.14.54.png)
<small>Bao, A., Zhao, W., Wang, Y., Cheng, Y., McCamant, S., & Yew, P.-C. (2025). From Alarms to Real Bugs: Multi-target Multi-step Directed Greybox Fuzzing for Static Analysis Result Verification. _34th USENIX Security Symposium (USENIX Security 25)_, 6977–6997. <a>https://www.usenix.org/conference/usenixsecurity25/presentation/bao-andrew</a></small>

> Bao, A., Zhao, W., Wang, Y., Cheng, Y., McCamant, S., & Yew, P.-C. (2025). From Alarms to Real Bugs: Multi-target Multi-step Directed Greybox Fuzzing for Static Analysis Result Verification. _34th USENIX Security Symposium (USENIX Security 25)_, 6977–6997. [https://www.usenix.org/conference/usenixsecurity25/presentation/bao-andrew](https://www.usenix.org/conference/usenixsecurity25/presentation/bao-andrew)
> 
> Effective verification of the true positives from false positives is crucial for improving the usability of static analysis tools and bolstering software security. Directed greybox fuzzing (DGF), based on dynamic execution, can confirm real vulnerabilities and provide proof-of-concept exploits, offering a promising solution. However, existing DGF tools are ineffective in verifying static analysis results because they are unaware of the semantic information about individual alarms and the correlations among multiple alarms. In this paper, we fill this gap and present Lyso, the first multi-target, multi-step guided fuzzer that leverages semantic information (i.e., program flows) and correlations (i.e., shared root causes) derived from static analysis. By concurrently handling multiple alarms and prioritizing seeds that cover these root causes, Lyso efficiently explores multiple alarms. For each alarm, Lyso breaks down the goal of reaching an alarm into a sequence of manageable steps. By progressively following these steps, Lyso refines its search to reach the final step, significantly improving its ability to trigger challenging alarms. We compared Lyso to eight state-of-the-art (directed) fuzzers. Our evaluation demonstrates that Lyso outperforms existing approaches, achieving an average 12.17x speedup while finding the highest absolute number of bugs. Additionally, we applied Lyso to verify static analysis results for real-world programs, and it successfully discovered eighteen new vulnerabilities.
#### Test Case Generation
##### Directly Generation
##### Seed + Mutation
##### Fuzzing with Historical Bugs
##### Complex Input Constraints


### Fuzzing by Stages 



## Fuzzer Evaluation & Metrics
### Oracle Selection
> Deng, Y., Xia, C. S., Yang, C., Zhang, S. D., Yang, S., & Zhang, L. (2024). Large Language Models are Edge-Case Generators: Crafting Unusual Programs for Fuzzing Deep Learning Libraries. Proceedings of the IEEE/ACM 46th International Conference on Software Engineering, 1–13. https://doi.org/10.1145/3597503.3623343

**Crashes**. We detect bugs caused by unexpected crashes found when executing the fuzzing output. These crashes can include aborts, segmentation faults, and `INTERNAL_ASSERT_FAILED`. Bugs exposed by such crashes may even further trigger security vulnerabilities.

**CPU/GPU oracle**. We detect wrong-computation bugs by identifying inconsistencies between the output values across two execution backends (CPU and GPU). We follow prior work [13, 69] to use a significance tolerance threshold for comparison in order to account for the non-deterministic nature of particular library APIs when executed on different backends.  

**Automatic Differentiation (AD) oracle**. We further detect gradient computation bugs in the crucial AD engines of DL libraries, which support efficient training of DL models. We apply the AD oracle proposed in prior work [75] and compare the computed gradients between reverse-mode AD (the most commonly used mode in DL libraries), forward-mode AD, and numerical differentiation (ND).


### Common Used Metrics
> Huang, Linghan, Peizhou Zhao, Huaming Chen, and Lei Ma. "Large language models based fuzzing techniques: A survey." _arXiv preprint arXiv:2402.00350_ (2024).
> https://arxiv.org/abs/2402.00350

In addition, we summarize the most commonly used metrics based on all technologies to evaluate the performance of LLMs-based fuzzers. They can be generally categorized into three types, the metrics related to code, performance and time. 

For the ==code-related metrics==, the representative ones are code coverage and the number of bugs retrieved, as they reflect the testing coverage and vulnerability detection capability of the fuzzer most directly. 
- **Number of bugs retrieved**
- **Code coverage**
- **Number of APIs covered**
- **Number of valid programs generated**

For the ==performance-related metrics==, the hit rate is a commonly used metric. It refers to the efficiency of inputs generated by the fuzzer in targeting the test objectives. The mutation effectiveness is closely related to the mutation score and serves as a standard for measuring the quality of seed mutation. It is worth mentioning that some techniques also use F1 Score as a metric. It is calculated using precision and recall and ranges from 0 to 1, with a higher value indicating better performance in terms of both precision and recall. 
- **Number of unique crashes**
- **Hit rate**
- **Accuracy**
- **Recall**
- **F1 score**
- **Mutation Effectiveness**

 For the ==time-related metrics==, the 1) execution time represents the speed at which the fuzzer runs. On the other hand, 2) average detection time is a standard measure used to gauge the fuzzer’s ability to find vulnerabilities in the test objectives.
- **Execution time**
- **Average bug detection time**

> Sanoop Mallissery and Yu-Sung Wu. Demystify the fuzzing methods: A comprehensive survey. ACM Computing Surveys, 56(3):1–38, 2023.

[Mallissery and Wu, 2023] present a discussion of the criteria that a good fuzzer should meet, including:
1. Able to detect all vulnerabilities of the test targets 
2. Performing in-depth analysis of multiple targets when detecting code-level vulnerabilities from the interaction between multiple targets 
3. A fuzzer should identify different types of bugs
#### Code-related Metrics
##### Code Coverage
> 🔗 https://www.cnblogs.com/tomyyyyy/articles/13608791.html

代码覆盖率是模糊测试中一个极其重要的概念，**使用代码覆盖率可以评估和改进测试过程，执行到的代码越多，找到bug的可能性就越大**，毕竟，在覆盖的代码中并不能100%发现bug，在未覆盖的代码中却是100%找不到任何bug的，所以本节中就将详细介绍代码覆盖率的相关概念。

**代码覆盖率（Code Coverage）**
代码覆盖率是一种度量代码的覆盖程度的方式，也就是指源代码中的某行代码是否已执行；对二进制程序，还可将此概念理解为汇编代码中的某条指令是否已执行。其计量方式很多，但无论是GCC的GCOV还是LLVM的SanitizerCoverage，都提供函数（function）、基本块（basic-block）、边界（edge）三种级别的覆盖率检测，更具体的细节可以参考LLVM的[官方文档](https://clang.llvm.org/docs/SanitizerCoverage.html)。

**基本块（Basic Block）**
缩写为BB，指一组顺序执行的指令，BB中第一条指令被执行后，后续的指令也会被全部执行，每个BB中所有指令的执行次数是相同的，也就是说一个BB必须满足以下特征：
- ​ 只有一个入口点，BB中的指令不是任何**跳转指令**的目标。
- 只有一个退出点，只有最后一条指令使执行流程转移到另一个BB

**边（edge）**
AFL的技术白皮书中提到fuzzer通过插桩代码捕获边（edge）覆盖率。那么什么是edge呢？我们可以将程序看成一个控制流图（CFG），图的每个节点表示一个基本块，而edge就被用来表示在基本块之间的转跳。知道了每个基本块和跳转的执行次数，就可以知道程序中的每个语句和分支的执行次数，从而获得比记录BB更细粒度的覆盖率信息。

**元组（tuple）**
具体到AFL的实现中，使用二元组(branch_src, branch_dst)来记录**当前基本块** + **前一基本块** 的信息，从而获取目标的执行流程和代码覆盖情况，伪代码如下：

``` 
cur_location = <COMPILE_TIME_RANDOM>;//用一个随机数标记当前基本块
shared_mem[cur_location ^ prev_location]++;//将当前块和前一块异或保存到shared_mem[]
prev_location = cur_location >> 1;//cur_location右移1位区分从当前块到当前块的转跳
```

实际插入的汇编代码，如下图所示，首先保存各种寄存器的值并设置ecx/rcx，然后调用`__afl_maybe_log`，这个方法的内容相当复杂，这里就不展开讲了，但其主要功能就和上面的伪代码相似，用于记录覆盖率，放入一块共享内存中。

#### Performance-related Metrics

#### Time-related Metrics


### Validity of Fuzzer Evaluation Metrics
> George Klees, Andrew Ruef, Benji Cooper, Shiyi Wei, and Michael Hicks. 2018. Evaluating Fuzz Testing. In Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security (CCS '18). Association for Computing Machinery, New York, NY, USA, 2123–2138. https://doi.org/10.1145/3243734.3243804

Fuzz testing is a promising technology that has been used to uncover many important bugs and security vulnerabilities. This promise has prompted a growing number of researchers to develop new fuzz testing algorithms. The evidence that such algorithms work is primarily experimental, so it is important that it comes from a well-founded experimental methodology.

...

In this paper we propose some clear guidelines to which future papers’ evaluations should adhere. In particular, researchers should perform multiple trials and use statistical tests (Section 4); they should evaluate different seeds (Section 5), and should consider longer (≥24 hour vs. 5 hour) timeouts (Section 6); and they should evaluate bug-finding performance using ground truth rather than heuristics such as “unique crashes” (Section 7). Finally, we argue for the establishment and adoption of a good fuzzing benchmark, and sketch what it might look like. The practice of hand selecting a few particular targets, and varying them from paper to paper, is problematic (Section 8). A well-designed and agreed-upon benchmark would address this problem. We also identify other problems that our results suggest are worth studying, including the establishment of better de-duplication heuristics (a topic of recent interest [42, 51]), and the use of algorithmic ideas from related areas, such as SAT solving.

...

![](../../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2019.15.01.png)

In this paper, we surveyed 32 recent papers and analyzed their experimental methodologies. We found that no paper completely follows the methodology we have outlined above. Moreover, results of experiments we carried out using AFLFast [6] (as A) and AFL [1] (as B) illustrate why not following this methodology can lead to misleading or weakened conclusions. We found that 
- Most papers failed to perform multiple runs, and those that did failed to account for varying performance by using a statistical test. This is a problem because our experiments showed that run-to-run performance can vary substantially.
- Many papers measured fuzzer performance not by counting distinct bugs, but instead by counting “unique crashes” using heuristics such as AFL’s coverage measure and stack hashes. This is a problem because experiments we carried out showed that the heuristics can dramatically over-count the number of bugs, and indeed may suppress bugs by wrongly grouping crashing inputs. This means that apparent improvements may be modest or illusory. Many papers made some consideration of root causes, but often as a “case study” rather than a performance assessment.
- Many papers used short timeouts, without justification. Our experiments showed that longer timeouts may be needed to paint a complete picture of an algorithm’s performance.
- Many papers did not carefully consider the impact of seed choices on algorithmic improvements. Our experiments showed that performance can vary substantially depending on what seeds are used. In particular, two different non-empty inputs need not produce similar performance, and the empty seed can work better than one might expect.
- Papers varied widely on their choice of target programs. A growing number are using synthetic suites CGC and/or LAVA-M, which have the advantage that they are defined independently of a given algorithm, and bugs found by fuzzing them can be reliably counted (no crash de-duplication strategy is needed). Other papers often picked small, disjoint sets of programs, making it difficult to compare results across papers. Our experiments showed AFLFast performs well on the targets it was originally assessed against, but performed no better than AFL on two targets used by other papers.

Ultimately, our experiments roughly matched the positive results of the original AFLFast paper [6], but by expanding the scope of the evaluation to different seeds, longer timeouts, and different target programs, evidence of AFLFast’s superiority, at least for the versions we tested, was weakened. The fact that heuristic crash deduplication strategies are of questionable value further weakens our confidence in claims of improvement. We believe the same could be said of many prior papers—all suffer from problems in their evaluation to some degree. As such, a key conclusion of this paper is that the fuzzing community needs to start carrying out more rigorous experiments in order to draw more reliable conclusions.

Specifically, we recommend that fuzz testing evaluations should have the following elements:
- multiple trials with statistical tests to distinguish distributions;
- a range of benchmark target programs with known bugs (e.g.,LAVA-M, CGC, or old programs with bug fixes);
- measurement of performance in terms of known bugs, rather than heuristics based on AFL coverage profiles or stack hashes; block or edge coverage can be used as a secondary measure;
- a consideration of various (well documented) seed choices including empty seed;
- timeouts of at least 24 hours, or else justification for less, with performance plotted over time.

We see (at least) three important lines of future work. First, we believe there is a pressing need for well-designed, well-assessed benchmark suite, as described at the end of the last section. Second, and related, it would be worthwhile to carry out a larger study of the value of crash de-duplication methods on the results of realistic fuzzing runs, and potentially develop new methods that work better, for assisting with triage and assessing fuzzing when ground truth is not known. Recent work shows promise [42, 51]. Finally, it would be interesting to explore enhancements to the fuzzing algorithm inspired by the observation that no single fuzzing run found all true bugs in cxxfilt; ideas from other search algorithms, like SAT solving “reboots” [46], might be brought to bear.


### Fuzzing Test Benchmarks
> 🔗 https://itea.org/journals/volume-45-4/review-of-fuzz-testing-to-find-system-vulnerabilities/

**Magma Benchmark.** Hazimeh, et al. [25] (2020) summarize the Magma benchmark for fuzzing methods as follows:

> _High scalability and low running costs have made fuzz testing the de facto standard for discovering software bugs. Fuzzing techniques are constantly being improved in a race to build the ultimate bug-finding tool. However, while fuzzing excels at finding bugs in the wild, evaluating and comparing fuzzer performance is challenging due to the lack of metrics and benchmarks. For example, crash count—perhaps the most commonly used performance metric—is inaccurate due to imperfections in deduplication techniques. … We tackle these problems by developing Magma, a ground-truth fuzzing benchmark that enables uniform fuzzer evaluation and comparison. By introducing real bugs into real software, Magma allows for the realistic evaluation of fuzzers against a broad set of targets. By instrumenting these bugs, Magma also enables the collection of bug-centric performance metrics independent of the fuzzer. … Based on the number of bugs reached, triggered, and detected, we draw conclusions about the fuzzers’ exploration and detection capabilities … highlighting the importance of ground truth in performing more accurate and meaningful evaluations._

**Unifuzz Test Bench.** Li, et al. [26] (2020) summarize the Unifuzz test bench effort as follows:

> _A flurry of fuzzing tools (fuzzers) have been proposed in the literature, aiming at detecting software vulnerabilities effectively and efficiently. To date, it is however still challenging to compare fuzzers due to the inconsistency of the benchmarks, performance metrics, and/or environments for evaluation, which buries the useful insights and thus impedes the discovery of promising fuzzing primitives. In this paper, we design and develop UNIFUZZ, an open-source and metrics-driven platform for assessing fuzzers in a comprehensive and quantitative manner. Specifically, UNIFUZZ to date has incorporated 35 usable fuzzers, a benchmark of 20 real-world programs, and six categories of performance metrics._

**Fuzzbench.** Metzman, et al. [27] (2021) summarize the reasoning behind the development of Fuzzbench as follows:

> _In 2020 alone, over 120 papers were published on the topic of improving, developing, and evaluating fuzzers and fuzzing techniques. Yet, proper evaluation of fuzzing techniques remains elusive. The community has struggled to converge on methodology and standard tools for fuzzer evaluation. To address this problem, we introduce FuzzBench as an opensource turnkey platform and free service for evaluating fuzzers. It aims to be easy to use, fast, reliable, and provides reproducible experiments. Since its release in March 2020, FuzzBench has been widely used both in industry and academia, carrying out more than 150 experiments for external users._

**IOT Fuzzbench.** Cheng, et al. [28] (2023) summarize the reasoning behind the development of a fuzzing engine test bench specific to cyber-physical systems:

> _High scalability and low operating cost make black-box protocol fuzzing a vital tool for discovering vulnerabilities in the firmware of IoT smart devices. … In this paper, we design and implement IoTFuzzBench, a scalable, modular, metric-driven automation framework for evaluating black-box protocol fuzzers for IoT smart devices … We deployed IoTFuzzBench and evaluated 7 popular black-box protocol fuzzers on all benchmark firmware images and benchmark vulnerabilities. The experimental results show that IoTFuzzBench can not only provide fast, reliable, and reproducible experiments, but also effectively evaluate the ability of each fuzzer to find vulnerabilities and the differential performance on different performance metrics._



## Ref
[模糊测试简介 | CSDN]: https://blog.csdn.net/kelxLZ/article/details/112067973
[👍 Fuzzing技术总结（Brief Surveys on Fuzz Testing） - wcventure的文章 - 知乎]: https://zhuanlan.zhihu.com/p/43432370

[Fuzz快速上手指南]: https://wjk.moe/2023/Fuzz%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%E6%8C%87%E5%8D%97/
不得不说，学习使用LibAFL的过程，就是学习Fuzz架构的过程。基于LibAFL的baby fuzzer教程，就可以了解到fuzzer的架构。LibAFL是基于Rust语言，高度可自定义的组件化fuzzer。他们的开发者正尝试用LibAFL复刻AFL++，libfuzzer等多个知名fuzzer，这足以说明LibAFL的强大。

Fuzzing的很重要的一部分就是调试崩溃和修复漏洞。这个和fuzz本身一样重要。这个暂时没涉及

本文涵盖以下内容：
- AFL的coverage map设计
    - PCGUARD模式
    - cmplog/input to state/redqueen
- Mutators
    - honggfuzz中的Mutator
    - AFL中的splice和havoc
    - MOpt

学习资源
- [fuzz101](https://github.com/antonio-morales/Fuzzing101)
- [AFL-TRAINING](https://github.com/mykter/afl-training)。

[AFL使用指南]: https://www.cnblogs.com/tomyyyyy/articles/13610206.html
[AFL漏洞挖掘技术漫谈（一）：用AFL开始你的第一次Fuzzing | freebuf (2018)]: https://www.freebuf.com/system/191543.html
第一篇文章旨在让读者对AFL的使用流程有个基本的认识，文中将讨论如下一些基本问题：
> AFL的基本原理和工作流程；
> 如何选择Fuzzing的⽬标?
> 如何获得初始语料库?
> 如何使用AFL构建程序？
> AFL的各种执行方式；
> AFL状态窗口中各部分代表了什么意义？

[👍 Fuzz结果分析和代码覆盖率 (2018)]: https://www.cnblogs.com/tomyyyyy/articles/13608791.html
- 代码覆盖率是模糊测试中一个极其重要的概念，**使用代码覆盖率可以评估和改进测试过程，执行到的代码越多，找到bug的可能性就越大**，毕竟，在覆盖的代码中并不能100%发现bug，在未覆盖的代码中却是100%找不到任何bug的，所以本节中就将详细介绍代码覆盖率的相关概念。
- **阿尔法实验在上一篇[文章](https://www.freebuf.com/system/191543.html)中向大家介绍了使用AFL开始模糊测试前要做的一些准备工作，以及AFL的几种工作方式，但是并没有提到何时结束测试过程，以及测试完成后又需要做些什么。本文中就继续介绍这些内容，并开始逐步介绍一些AFL相关原理，以下是本文中主要讨论的问题：**
	- ​ 1.何时结束Fuzzing工作
	- ​ 2.afl-fuzz生成了哪些文件
	- ​ 3.如何对产生的crash进行验证和分类
	- ​ 4.用什么来评估Fuzzing的结果
	- ​ 5.代码覆盖率及相关概念
	- ​ 6.AFL是如何记录代码覆盖率的

[符号执行 (Symbolic Execution) 与约束求解 (Constraint Solving) - Flowlet的文章 - 知乎]: https://zhuanlan.zhihu.com/p/675592367
[静态代码分析之约束求解简介]: https://bbs.huaweicloud.com/blogs/229334

[探究：软件工程中的test oracle到底是什么意思？ | CSDN]: https://dalewushuang.blog.csdn.net/article/details/83893881?fromshare=blogdetail&sharetype=blogdetail&sharerId=83893881&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
- Xie T. Augmenting Automatically Generated Unit-Test Suites with Regression Oracle Checking[J]. 2006, 4067:380-403.
	- A test case consists of two parts: a test input to exercise the program under test and a test oracle to check the correctness of the test execution. A test oracle is often in the form of executable assertions such as in the JUnit testing framework. Manually generated test cases are valuable in exposing program faults in the current program version or regression faults in future program versions.
- Tu D, Chen R, Du Z, et al. A Method of Log File Analysis for Test Oracle[C]// International Conference on Scalable Computing and Communications; Eighth International Conference on Embedded Computing, 2009. Scalcom-Embeddedcom. IEEE, 2009:351-354.
- What is a test oracle, and what is it used for? https://stackoverflow.com/questions/23522166/what-is-a-test-oracle-and-what-is-it-used-for
	- ![](../../../../../../../../Assets/Pics/Pasted%20image%2020250407144452.png)
-  A Course in Black Box Software Testing-Examples of Test Oracles.  http://www.testingeducation.org/k04/OracleExamples.htm
	- An oracle is a mechanism for determining whether the program has passed or failed a test.
	- A complete oracle would have three capabilities and would carry them out perfectly:
		- A generator, to provide predicted or expected results for each test.
		- A comparator, to compare predicted and obtained results.
		- An evaluator, to determine whether the comparison results are sufficiently close to be a pass.

[Instrumentation 与 Profiling | CSDN]: https://blog.csdn.net/fenng/article/details/81362183?fromshare=blogdetail&sharetype=blogdetail&sharerId=81362183&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

看到有反馈说到《Oracle性能诊断艺术》中对于 Instrumentation 这个词的翻译问题。说实话，对这个词的处理当初挺让我头疼，这是个可以意会但很难用一个中文词汇对应的术语，一些翻译词典或是已有的翻译作品对这个词的处理也是五花八门。在图灵著译俱乐部里面提问得到很多回答（这里要致谢！）。权衡再三，最后根据整个章节的重点以及上下文选择用 “性能测量”。

我不喜欢用有些人说的测试领域内所用的术语”插桩”，实在是有点诡异。当然，如果这个词不翻译的话，或许更好。

另一个比较难以处理的就是 “Profiling” ，根据维基百科的解释 ，这个词指”动态程序分析的一种形式…根据程序执行收集到的信息调查程序的运行行为，通常用来查找程序中的瓶颈”。最后我用了”剖析”。(Updated: 中文是 “性能分析“。不过我觉得似乎有点容易混淆。)

这两个词很有趣，任何一个程序或者软件项目构建的初期，如果没有考虑 Instrumentation ，在程序或项目交付后，又不能做 Profiling ，那么这个程序或者项目肯定会是灾难。所以，能对 DBA 着重强调一下这一点或许要比看更多的同质化内容更有价值。

[The Art of Fuzzing: Harnessing Libraries for Effective Fuzzing]: https://bushido-sec.com/index.php/2025/01/03/fuzzing-harness-guide/
Tips and Tricks
When diving into fuzzing projects, consider these strategies to enhance your approach:
Leveraging Existing Work
- **Search for Existing Harnesses:** Google previous researchers’ work to find potential harnesses that you can adapt or learn from.
- **Explore Project Test Suites:** Many projects implement their own fuzzing tests. Reviewing these can reveal what areas are already covered and where potential gaps lie, giving you a strategic advantage.
- **Check OSS-Fuzz Coverage:** Examine which parts of the library or functions are covered by OSS-Fuzz. Identifying overlooked areas can lead to interesting discoveries.
General Tips
- **Build a Robust Corpus:** A diverse and well-curated input corpus is critical for effective fuzzing.
- **Optimize Compilation:**
- Compile a fraction of your builds (e.g., 1/15) with AddressSanitizer (ASan) for better bug detection.
- Use optimization flags like `-O3` for improved coverage during fuzzing.
- **Utilize Advanced Tools:** Consider using [Redqueen](https://github.com/AFLplusplus/AFLplusplus/blob/stable/instrumentation/README.cmplog.md) for input-to-state correspondence and deeper insights.
- **Optimize Your System:** Follow the [AFL++ performance tips](https://aflplus.plus/docs/perf_tips/) to ensure your fuzzing environment is efficient and performant.
- **Seek Inspiration:** Learn from other resources and articles:
- [Fuzzing Techniques and Harness Writing](https://appsec.guide/docs/fuzzing/techniques/writing-harnesses/)
- [Awesome LibFuzzer Harness Collection](https://github.com/Microsvuln/Awesome-Libfuzzer-Harness)
- You can find more harness I made for this article [here](https://github.com/20urc3/Publications/tree/main/Articles/LIB_HARNESS_GUIDE/harness)
Going further
Many researchers are tackling the challenges of harness creation by proposing various approaches to automate this task. You can find inspiration in the following papers:
- [Automated Fuzzing Harness Generation for Library APIs and Binary Protocol Parsers](https://arxiv.org/abs/2306.15596)
- [FuzzGen: Automatic Fuzzer Generation](https://www.usenix.org/system/files/sec20fall_ispoglou_prepub.pdf)
- [Automated Fuzzing Harness Generation for Library APIs and Binary Protocol Parsers](https://www.researchgate.net/publication/371909352_Automated_Fuzzing_Harness_Generation_for_Library_APIs_and_Binary_Protocol_Parsers)
