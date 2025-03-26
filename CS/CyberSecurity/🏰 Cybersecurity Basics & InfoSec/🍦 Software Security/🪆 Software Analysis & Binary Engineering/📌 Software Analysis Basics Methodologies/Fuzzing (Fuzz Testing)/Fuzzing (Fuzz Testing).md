# Fuzzing (Fuzz Testing)

[TOC]



## Res
### Related Topics
↗ [LLM & Fuzzing](../../../../../../Academics%20🎓/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Analysis/LLM%20&%20Fuzzing.md) 🎓
↗ [OSS-Fuzz](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/Fuzzers%20&%20Fuzzing%20Project/OSS-Fuzz.md)


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
#### Survey Papers
📄 👍 Manes V J M, Han H S, Han C, et al. Fuzzing: Art, Science, and Engineering[J]. arXiv preprint arXiv:1812.00140, 2018.
https://arxiv.org/pdf/1812.00140.pdf
https://ieeexplore.ieee.org/document/8863940
https://doi.org/10.1109/TSE.2019.2946563

📄 Li J, Zhao B, Zhang C. Fuzzing: a survey[J]. Cybersecurity, 2018, 1(1): 6.
https://link.springer.com/article/10.1186/s42400-018-0002-y
[https://doi.org/10.1186/s42400-018-0002-y](https://doi.org/10.1186/s42400-018-0002-y).

📄 Liang H, Pei X, Jia X, et al. Fuzzing: State of the art[J]. IEEE Transactions on Reliability, 2018, 67(3): 1199-1218.
https://ieeexplore.ieee.org/document/8371326

📄 Chen, Chen, Baojiang Cui, Jinxin Ma, Runpu Wu, Jianchao Guo, and Wenqian Liu. “A Systematic Review of Fuzzing Techniques.” _Computers & Security_ 75 (June 2018): 118–37. https://doi.org/10.1016/j.cose.2018.02.002

📄 Godefroid, Patrice. “Fuzzing: Hack, Art, and Science.” _Communications of the ACM_ 63, no. 2 (January 22, 2020): 70–76. https://doi.org/10.1145/3363824

📄 Wang, Yan, Peng Jia, Luping Liu, Cheng Huang, and Zhonglin Liu. “A Systematic Review of Fuzzing Based on Machine Learning Techniques.” Edited by Tao Song. _PLOS ONE_ 15, no. 8 (August 18, 2020): e0237749. https://doi.org/10.1371/journal.pone.0237749

📄 👍 Huang, Linghan, Peizhou Zhao, Huaming Chen, and Lei Ma. "Large language models based fuzzing techniques: A survey." _arXiv preprint arXiv:2402.00350_ (2024).
https://arxiv.org/abs/2402.00350


### Papers & Research Topics
https://mp.weixin.qq.com/s/DL4pGH-7nPi3eSRD-rlD-w
大模型与模糊测试进行结合的研究论文汇总｜技术进展

https://mp.weixin.qq.com/s/Dn5ooUahCT7IqXIMevjVug
2024信息安全领域四大顶会Fuzz论文汇总｜技术进展

https://mp.weixin.qq.com/s/-ZYX-G_jX1AN8lzbHvW21g
2024年软件工程顶会Fuzz论文汇总


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


### Others
https://github.com/wcventure/FuzzingPaper
https://wcventure.github.io/FuzzingPaper/
1. This website is only used for collecting and grouping the related paper. If there are any paper need to be updated, you can contribute PR.
2. Please check the web [https://wcventure.github.io/FuzzingPaper/](https://wcventure.github.io/FuzzingPaper/), as the `.md` file shown in Github is cropped.
3. Advertisement: [Our ICTT (Guangzhou) research group](https://xidian-ictt-gz.github.io/) is accepting applications for master’s, doctoral, postdoctoral, and research assistant positions. We welcome hardworking, serious, and innovative young people who are interested in joining our research group.



## Intro: Fuzz & Fuzzing Test
> 🔗 https://en.wikipedia.org/wiki/Fuzzing

In programming and software development, fuzzing or fuzz testing is an automated software testing technique that involves providing invalid, unexpected, or random data as inputs to a computer program. The program is then monitored for exceptions such as crashes, failing built-in code assertions, or potential memory leaks. Typically, fuzzers are used to test programs that take structured inputs. This structure is specified, e.g., in a file format or protocol and distinguishes valid from invalid input. An effective fuzzer generates semi-valid inputs that are "valid enough" in that they are not directly rejected by the parser, but do create unexpected behaviors deeper in the program and are "invalid enough" to expose corner cases that have not been properly dealt with.

For the purpose of security, input that crosses a trust boundary is often the most useful. For example, it is more important to fuzz code that handles the upload of a file by any user than it is to fuzz the code that parses a configuration file that is accessible only to a privileged user. 

> V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. (2018)
> https://ieeexplore.ieee.org/document/8863940
> https://arxiv.org/pdf/1812.00140

The term “fuzz” was originally coined by Miller et al. in 1990 to refer to a program that “generates a stream of random characters to be consumed by a target program” [152,p. 4]. Since then, the concept of fuzz as well as its action—“fuzzing”—has appeared in a wide variety of contexts, including dynamic symbolic execution [90], [226], grammar-based test case generation [88], [105], [213], permission testing [24], [80], behavioral testing [122], [175], [224], complexity testing [135], [222], kernel testing [216], [196], [186], representation dependence testing [121], function detection [227], robustness evaluation [223], exploit development [111], GUI testing [197], signature generation [72], and penetration testing [81], [156]. To systematizethe knowledge from the vast literature of fuzzing, let us first present a terminology of fuzzing extracted from modern uses.


### Terminology
> V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. (2018)
> https://ieeexplore.ieee.org/document/8863940
> https://arxiv.org/pdf/1812.00140

Intuitively, fuzzing is the action of running a **Program Under Test (PUT)** with “fuzz inputs”. Honoring Miller et al., we consider a fuzz input to be an input that the PUT may not be expecting, i.e., an input that the PUT may process incorrectly and trigger a behavior that was unintended by the PUT developer. To capture this idea, we define the term fuzzing
as follows.

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

==**Definition 5 (Bug Oracle)**==
A bug oracle is a program, perhaps as part of a fuzzer, that determines whether a given execution of the PUT violates a specific security policy. 

We refer to the algorithm implemented by a fuzzer simply as its “fuzz algorithm”. Almost all fuzz algorithms depend on some parameters beyond (the path to) the PUT. Each concrete setting of the parameters is a fuzz configuration:

==**Definition 6 (Fuzz Configuration)**==
A fuzz configuration of a fuzz algorithm comprises the parameter value(s) that control(s) the fuzz algorithm.

The definition of a fuzz configuration is intended to be broad. Note that the type of values in a fuzz configuration depend on the type of the fuzz algorithm. For example, a fuzz algorithm that sends streams of random bytes to the PUT [152] has a simple configuration space {(PUT)}. On the other hand, sophisticated fuzzers contain algorithms that accept a set of configurations and evolve the set over time—this includes adding and removing configurations. For example, CERT BFF [49] varies both the mutation ratio and the seed over the course of a campaign, and thus its configuration space is {(PUT, s1, r1), (PUT, s2, r2), . . .}. A seed is a (commonly well-structured) input to the PUT, used to generate test cases by modifying it. Fuzzers typically maintain a collection of seeds, and some fuzzers evolve the collection as the fuzz campaign progresses. This collection is called a seed pool. Finally, a fuzzer is able to store some data  within each configuration. For instance, coverage-guided fuzzers may store the attained coverage in each configuration.


### Working Procedure
> V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. (2018)
> https://ieeexplore.ieee.org/document/8863940
> https://arxiv.org/pdf/1812.00140

![](../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2019.30.41.png)

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


### Taxonomy
> 🔗 https://en.wikipedia.org/wiki/Fuzzing

A fuzzer can be categorized in several ways:
1. (Reuse of existing input seeds) A fuzzer can be generation-based or mutation-based depending on whether inputs are generated from scratch or by modifying existing inputs.
2. (Aware of input structure) A fuzzer can be dumb (unstructured) or smart (structured) depending on whether it is aware of input structure.
3. (Aware of program structure) A fuzzer can be white-, grey-, or black-box, depending on whether it is aware of program structure.


### Genealogy
![](../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2015.52.12.png)
<small>Genealogy tracing significant fuzzers’ lineage back to Miller et al.’s seminal work. Each node in the same row represents a set of fuzzers appeared in the same year. A solid arrow from X to Y indicates that Y cites, references, or otherwise uses techniques from X. 📗 denotes that a paper describing the work was published.</small>
<small>V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. <a>https://ieeexplore.ieee.org/document/8863940</a></small>


### 📋 List of Fuzzers 
![](../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2015.55.03.png)
<small>V. J. M. Manès et al., "The Art, Science, and Engineering of Fuzzing: A Survey," in IEEE Transactions on Software Engineering, vol. 47, no. 11, pp. 2312-2331, 1 Nov. 2021, doi: 10.1109/TSE.2019.2946563. <a>https://ieeexplore.ieee.org/document/8863940</a> (2018)</small>

![](../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2021.11.11.png)
<small>Huang, Linghan, Peizhou Zhao, Huaming Chen, and Lei Ma. "Large language models based fuzzing techniques: A survey." arXiv preprint arXiv:2402.00350 (2024).
<a>https://arxiv.org/abs/2402.00350</a></small>



## Fuzzer Evaluation & Metrics
> George Klees, Andrew Ruef, Benji Cooper, Shiyi Wei, and Michael Hicks. 2018. Evaluating Fuzz Testing. In Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security (CCS '18). Association for Computing Machinery, New York, NY, USA, 2123–2138. https://doi.org/10.1145/3243734.3243804

Fuzz testing is a promising technology that has been used to uncover many important bugs and security vulnerabilities. This promise has prompted a growing number of researchers to develop new fuzz testing algorithms. The evidence that such algorithms work is primarily experimental, so it is important that it comes from a well-founded experimental methodology.

...

In this paper we propose some clear guidelines to which future papers’ evaluations should adhere. In particular, researchers should perform multiple trials and use statistical tests (Section 4); they should evaluate different seeds (Section 5), and should consider longer (≥24 hour vs. 5 hour) timeouts (Section 6); and they should evaluate bug-finding performance using ground truth rather than heuristics such as “unique crashes” (Section 7). Finally, we argue for the establishment and adoption of a good fuzzing benchmark, and sketch what it might look like. The practice of hand selecting a few particular targets, and varying them from paper to paper, is problematic (Section 8). A well-designed and agreed-upon benchmark would address this problem. We also identify other problems that our results suggest are worth studying, including the establishment of better de-duplication heuristics (a topic of recent interest [42, 51]), and the use of algorithmic ideas from related areas, such as SAT solving.

...

![](../../../../../../../Assets/Pics/Screenshot%202025-03-05%20at%2019.15.01.png)

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

> Huang, Linghan, Peizhou Zhao, Huaming Chen, and Lei Ma. "Large language models based fuzzing techniques: A survey." _arXiv preprint arXiv:2402.00350_ (2024).
> https://arxiv.org/abs/2402.00350

In addition, we summarise the most commonly used metrics based on all technologies to evaluate the performance of LLMs-based fuzzers. ==They can be generally categorized into three types, the metrics related to code, performance and time. ==

For the **code-related metrics**, the representative ones are code coverage and the number of bugs retrieved, as they reflect the testing coverage and vulnerability detection capability of the fuzzer most directly. 
- Number of bugs retrieved
- Code coverage
- Number of APIs covered
- Number of valid programs generated

For the **performance-related metrics**, the hit rate is a commonly used metric. It refers to the efficiency of inputs generated by the fuzzer in targeting the test objectives. The mutation effectiveness is closely related to the mutation score and serves as a standard for measuring the quality of seed mutation. It is worth mentioning that some techniques also use F1 Score as a metric. It is calculated using precision and recall and ranges from 0 to 1, with a higher value indicating better performance in terms of both precision and recall. 
- Number of unique crashes
- Hit rate
- Accuracy
- Recall
- F1 score
- Mutation Effectiveness

 For the **time-related metrics**, the 1) execution time represents the speed at which the fuzzer runs. On the other hand, 2) average detection time is a standard measure used to gauge the fuzzer’s ability to find vulnerabilities in the test objectives.
- Execution time
- Average bug detection time



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
