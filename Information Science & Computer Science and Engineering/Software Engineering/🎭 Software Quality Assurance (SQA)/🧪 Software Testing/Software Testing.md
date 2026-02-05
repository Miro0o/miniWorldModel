# Software Testing

[TOC]



## Res
### Related Topics
↗ [ICT System Reliability (Correctness) & Verification](../../../CyberSecurity/⛈️%20Risk%20Management/🦟%20Vulnerabilities/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)

↗ [Formal Methods & Formal Verification (FV)](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)
↗ [Security Audit & Security Audit Trail](../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md)
- ↗ [Code Review](../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)

↗ [Software Security](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/Software%20Security.md)
- ↗ [Software (Program) Techniques & Binary Engineering](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
- ↗ [Software Vulnerability & Weakness](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Software%20Vulnerability%20&%20Weakness.md)
- ↗ [Techniques - Vulnerability Disclosure & Discovery](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Techniques/Techniques%20-%20Vulnerability%20Disclosure%20&%20Discovery.md)

↗ [Dev(Sec)Ops (Application Level Engineering)](../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev(Sec)Ops%20(Application%20Level%20Engineering)/Dev(Sec)Ops%20(Application%20Level%20Engineering).md)

↗ [Linux Test Project (LTP)](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/🤤%20Linux%20Test%20Project%20(LTP)/Linux%20Test%20Project%20(LTP).md)

↗ [Fuzzing (Concrete Execution)](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Fuzzing%20(Concrete%20Execution)/Fuzzing%20(Concrete%20Execution).md)


### Learning Resources
[Prototype Testing Tutorial](https://www.softwaretestinghelp.com/prototype-testing-tutorial/)

[Pilot Testing – A Complete Guide](https://www.softwaretestinghelp.com/what-is-pilot-testing/)

【2022最新软件测试自学教程 新手小白30天软件测试入门最强教程】 https://www.bilibili.com/video/BV1NM4y1K73T/?p=33&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🤔 https://appsec.guide/
- The Testing Handbook is a resource that guides developers and security professionals in configuring, optimizing, and automating many of the static and dynamic analysis tools we use at [Trail of Bits](https://www.trailofbits.com/).
- In our day-to-day work, we audit software projects ranging from cloud-native software to embedded devices. We often find issues that should be easy to spot early in development with the correct security tooling, but that make their way across the software lifecycle undetected.
- We hope to assist development teams across technology stacks in their quest to improve the security posture of their software by providing practical documentation they can apply when performing security analyses of their codebases.
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
    - [OSS-Fuzz](https://appsec.guide/docs/fuzzing/oss-fuzz/)
    - [Snapshot Fuzzing](https://appsec.guide/docs/fuzzing/snapshot-fuzzing/)
    - [Additional resources](https://appsec.guide/docs/fuzzing/resources/)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Software_testing

**Software testing** is the act of examining the artifacts and the behavior of the [software](https://en.wikipedia.org/wiki/Software) under test by **validation** and **verification**. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation. Test techniques include, but not necessarily limited to:
- analyzing the product requirements for completeness and correctness in various contexts like industry perspective, business perspective, feasibility and viability of implementation, usability, performance, security, infrastructure considerations, etc.
- reviewing the product architecture and the overall design of the product
- working with product developers on improvement in coding techniques, design patterns, tests that can be written as part of code based on various techniques like boundary conditions, etc.
- executing a program or application with the intent of examining behavior
- reviewing the deployment infrastructure and associated scripts and automation
- take part in production activities by using monitoring and observability techniques


### Error, Faults and Failures
#error #faults #failures #bug 

↗ [Vulnerabilities /Vulnerabilities 🆚 Bugs (Incorrectness) 🆚 Feature ?](../../../CyberSecurity/⛈️%20Risk%20Management/🦟%20Vulnerabilities/Vulnerabilities.md#Vulnerabilities%20🆚%20Bugs%20(Incorrectness)%20🆚%20Feature%20?)

Software faults occur through the following process: A programmer makes an [error](https://en.wikipedia.org/wiki/Human_error) (mistake), which results in a [fault](https://en.wikipedia.org/wiki/Fault_(technology)) (defect, bug) in the software source code. If this fault is executed, in certain situations the system will produce wrong results, causing a [failure](https://en.wikipedia.org/wiki/Failure).
- Not all faults will necessarily result in failures. For example, faults in the [dead code](https://en.wikipedia.org/wiki/Dead_code) will never result in failures. 
- A fault that did not reveal failures may result in a failure when the environment is changed. Examples of these changes in environment include the software being run on a new [computer hardware](https://en.wikipedia.org/wiki/Computer_hardware) platform, alterations in [source data](https://en.wikipedia.org/wiki/Source_data), or interacting with different software. A single fault may result in a wide range of failure symptoms.
- Not all software faults are caused by coding errors. One common source of expensive defects is requirement gaps, that is, unrecognized requirements that result in errors of omission by the program designer. Requirement gaps can often be [non-functional requirements](https://en.wikipedia.org/wiki/Non-functional_requirements) such as [testability](https://en.wikipedia.org/wiki/Software_testability), [scalability](https://en.wikipedia.org/wiki/Scalability), [maintainability](https://en.wikipedia.org/wiki/Maintainability), [performance](https://en.wikipedia.org/wiki/Computer_performance), and [security](https://en.wikipedia.org/wiki/Computer_security).


### Input Combinations and Preconditions
A fundamental problem with software testing is that testing under *all* combinations of inputs and preconditions (initial state) is not feasible, even with a simple product. This means that the number of [faults](https://en.wikipedia.org/wiki/Software_bug) in a software product can be very large and defects that occur infrequently are difficult to find in testing and debugging. More significantly, **[non-functional](https://en.wikipedia.org/wiki/Non-functional_requirements)** dimensions of quality (how it is supposed to *be* versus what it is supposed to *do*) — [usability](https://en.wikipedia.org/wiki/Usability), [scalability](https://en.wikipedia.org/wiki/Scalability), [performance](https://en.wikipedia.org/wiki/Computer_performance), [compatibility](https://en.wikipedia.org/wiki/Backward_compatibility), and [reliability](https://en.wikipedia.org/wiki/Reliability_(engineering)) — can be highly subjective; something that constitutes sufficient value to one person may be intolerable to another.

Software developers can't test everything, but they can use combinatorial test design to identify the minimum number of tests needed to get the **coverage** they want. Combinatorial test design enables users to get greater test coverage with fewer tests. Whether they are looking for speed or test depth, they can use combinatorial test design methods to build structured variation into their test cases.


### 🪜 Testing Taxonomy & Testing Techniques and Tactics
> 🔗 https://en.wikipedia.org/wiki/Software_testing#Testing_types,_techniques_and_tactics

↗️   [Types of Software Testing](Types%20of%20Software%20Testing/Types%20of%20Software%20Testing.md)
1. Unit testing
2. Integration testing
3. System testing
4. Acceptance testing


### Measurement in Software Testing: What to Test For?
> 🔗 https://en.wikipedia.org/wiki/Software_testing#Measures

Quality measures include such topics as [correctness](https://en.wikipedia.org/wiki/Correctness_(computer_science)), completeness, [security](https://en.wikipedia.org/wiki/Computer_security_audit) and [ISO/IEC 9126](https://en.wikipedia.org/wiki/ISO/IEC_9126) requirements such as capability, [reliability](https://en.wikipedia.org/wiki/Reliability_engineering), [efficiency](https://en.wikipedia.org/wiki/Algorithmic_efficiency), [portability](https://en.wikipedia.org/wiki/Porting), [maintainability](https://en.wikipedia.org/wiki/Maintainability), compatibility, and [usability](https://en.wikipedia.org/wiki/Usability).

Here lists several [testability](https://en.wikipedia.org/wiki/Software_testability) classes:
- Class I: there exists a finite complete test suite.
- Class II: any partial distinguishing rate (i.e., any incomplete capability to distinguish correct systems from incorrect systems) can be reached with a finite test suite.
- Class III: there exists a countable complete test suite.
- Class IV: there exists a complete test suite.
- Class V: all cases.


### 🌊 Testing Process / Testing Model
↗ [SDLC (Software Development Life Circle) & SDLC Models](../../Software%20Development%20Pattern/🔄%20SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models/SDLC%20(Software%20Development%20Life%20Circle)%20&%20SDLC%20Models.md)
Especially pay attention to V Model & W Model.



## Testing Artifacts
> 🔗 https://en.wikipedia.org/wiki/Artifact_(software_development)

An **artifact** is one of many kinds of **tangible by-products** produced during the development of software. Some artifacts (e.g., [use cases](https://en.wikipedia.org/wiki/Use_case "Use case"), [class diagrams](https://en.wikipedia.org/wiki/Class_diagram "Class diagram"), requirements and design documents) help describe the function, architecture, and design of software. Other artifacts are concerned with the process of development itself—such as project plans, business cases, and risk assessments.

The term _artifact_ in connection with software development is largely associated with specific development methods or processes e.g., [Unified Process](https://en.wikipedia.org/wiki/Unified_Process "Unified Process"). This usage of the term may have originated with those methods.

[Build tools](https://en.wikipedia.org/wiki/Build_automation "Build automation") often refer to source code compiled for testing as an artifact, because the [executable](https://en.wikipedia.org/wiki/Executable "Executable") is necessary to carrying out the testing plan. Without the executable to test, the testing plan artifact is limited to non-execution based testing. In non-execution based testing, the artifacts are the [walkthroughs](https://en.wikipedia.org/wiki/Software_walkthrough "Software walkthrough"), [inspections](https://en.wikipedia.org/wiki/Software_inspection "Software inspection") and [correctness proofs](https://en.wikipedia.org/wiki/Correctness_\(computer_science\) "Correctness (computer science)"). On the other hand, [execution based testing](https://en.wikipedia.org/wiki/Dynamic_testing "Dynamic testing") requires at minimum two artifacts: a [test suite](https://en.wikipedia.org/wiki/Test_suite "Test suite") and the executable. _Artifact_ occasionally may refer to the released code (in the case of a [code library](https://en.wikipedia.org/wiki/Library_\(computing\) "Library (computing)")) or released executable (in the case of a program) produced, but more commonly an artifact is the byproduct of software development rather than the product itself. Open source code libraries often contain a [testing harness](https://en.wikipedia.org/wiki/Test_harness "Test harness") to allow contributors to ensure their changes do not cause [regression](https://en.wikipedia.org/wiki/Regression_testing "Regression testing") [bugs](https://en.wikipedia.org/wiki/Software_bug "Software bug") in the code library.

Much of what are considered artifacts is [software documentation](https://en.wikipedia.org/wiki/Software_documentation "Software documentation").


### Test Plan
> 🔗 https://en.wikipedia.org/wiki/Test_plan

A [test plan](https://en.wikipedia.org/wiki/Test_plan "Test plan") is a document detailing the approach that will be taken for intended test activities. The plan may include aspects such as objectives, scope, processes and procedures, personnel requirements, and contingency plans. The test plan could come in the form of a single plan that includes all test types (like an acceptance or system test plan) and planning considerations, or it may be issued as a master test plan that provides an overview of more than one detailed test plan (a plan of a plan). A test plan can be, in some cases, part of a wide "[test strategy](https://en.wikipedia.org/wiki/Test_strategy "Test strategy")" which documents overall testing approaches, which may itself be a master test plan or even a separate artifact.


### Traceability Matrix (TM)
> 🔗 https://en.wikipedia.org/wiki/Traceability_matrix

In software development, a traceability matrix (TM)[75]: 244  is a document, usually in the form of a table, used to assist in determining the completeness of a relationship by correlating any two baselined documents using a many-to-many relationship comparison.[75]: 3–22  It is often used with high-level requirements (these often consist of marketing requirements) and detailed requirements of the product to the matching parts of high-level design, detailed design, test plan, and test cases.


### Test Harness
> 🔗 https://en.wikipedia.org/wiki/Test_harness

The software, tools, samples of data input and output, and configurations are all referred to collectively as a [test harness](https://en.wikipedia.org/wiki/Test_harness "Test harness").


### Test Case
> 🔗 https://en.wikipedia.org/wiki/Test_case_(software)

A [test case](https://en.wikipedia.org/wiki/Test_case_\(software\) "Test case (software)") normally consists of a unique identifier, requirement references from a design specification, preconditions, events, a series of steps (also known as actions) to follow, input, output, expected result, and the actual result. Clinically defined, a test case is an input and an expected result.[[76]](https://en.wikipedia.org/wiki/Software_testing#cite_note-76) This can be as terse as "for condition x your derived result is y", although normally test cases describe in more detail the input scenario and what results might be expected. It can occasionally be a series of steps (but often steps are contained in a separate test procedure that can be exercised against multiple test cases, as a matter of economy) but with one expected result or expected outcome. The optional fields are a test case ID, test step, or order of execution number, related requirement(s), depth, test category, author, and check boxes for whether the test is automatable and has been automated. Larger test cases may also contain prerequisite states or steps, and descriptions. A test case should also contain a place for the actual result. These steps can be stored in a word processor document, spreadsheet, database, or other common repositories. In a database system, you may also be able to see past test results, who generated the results, and what system configuration was used to generate those results. These past results would usually be stored in a separate table.


### Test Script
A [test script](https://en.wikipedia.org/wiki/Test_script "Test script") is a procedure or programming code that replicates user actions. Initially, the term was derived from the product of work created by automated regression test tools. A test case will be a baseline to create test scripts using a tool or a program.


### Test Suite
> 🔗 https://en.wikipedia.org/wiki/Test_suite

In [software development](https://en.wikipedia.org/wiki/Software_development "Software development"), a [test suite](https://en.wikipedia.org/wiki/Test_suite "Test suite"), less commonly known as a validation suite, is a collection of [test cases](https://en.wikipedia.org/wiki/Test_case_\(software\) "Test case (software)") that are intended to be used to test a software program to show that it has some specified set of behaviors. A test suite often contains detailed instructions or goals for each collection of test cases and information on the system configuration to be used during testing. A group of test cases may also contain prerequisite states or steps and descriptions of the following tests.


### Test Fixture /Test Data /Test Context
> 🔗 https://en.wikipedia.org/wiki/Test_fixture

A **test fixture** is a device used to consistently test some item, device, or piece of software. Test fixtures are used in the testing of electronics, software and physical devices.

In the context of software, a test fixture (also called "test context") is used to set up the system state and input data needed for test execution.[6][7] For example, the Ruby on Rails web framework uses YAML to initialize a database with known parameters before running a test.[8] This allows for tests to be repeatable, which is one of the key features of an effective test framework.[6] In most cases, a custom test fixture will normally require custom test software. This software is created in order to ensure optimal testing performance and seamless integration. The custom software can be configured to carry out a number of different tests from BIST (Built-In Self Test) to advanced JTAG Implementation.[9]


### Test Oracle 🤔
#software_test #test_oracle

> 🔗 https://en.wikipedia.org/wiki/Test_oracle

In [computing](https://en.wikipedia.org/wiki/Computing), [software engineering](https://en.wikipedia.org/wiki/Software_engineering), and [software testing](https://en.wikipedia.org/wiki/Software_testing), a **test oracle** (or just **oracle**) is a mechanism for determining whether a test has passed or failed. The use of oracles involves comparing the output(s) of the system under test, for a given [test-case](https://en.wikipedia.org/wiki/Test_case) input, to the output(s) that the oracle determines that product should have.

> A test case consists of two parts: a test input to exercise the program under test and a test oracle to check the correctness of the test execution. A test oracle is often in the form of executable assertions such as in the JUnit testing framework. Manually generated test cases are valuable in exposing program faults in the current program version or regression faults in future program versions.

> **Test Oracle就是一种决定一项测试是否通过的（判断）机制**，常被翻译为“**测试预言**”，也可以翻译为“测试判断准则”。Test Oracle的使用会要求将被测试系统的实际输出与我们所期望的输出进行比较，从而判断是否有差异。如果有差异，可能就存在缺陷。这是软件测试过程中最基本的环节。所以，test oracle（测试预言）至关重要，如果不明确测试预言，就无法判断测试结果是否正确，也就意味着无法进行测试。虽然许多测试人员不清楚这个概念，但还一直从事着测试工作，似乎还做得不错，没有什么影响。那也许就是“神谕”，借助神谕来判断测试结果是否正确。
>
> **只要你设计测试用例或执行测试，就需要明确“test oracle（测试预言）”**，这绝不含糊，不管是潜意识行为还是有意识去做。**test oracle（测试预言）一般有下列几种：**
>
> 1. 需求规格说明书和其它需求、设计规范文档
> 2. 竞争对手的产品
> 3. 启发式测试预言（Heuristic oracle）
> 4. 统计测试预言（Statistical oracle）
> 5. 一致性测试预言（Consistency oracle）
> 6. 基于模型的测试预言（Model-based oracle）
> 7. 人类预言（Human oracle）

Several potential categories of test oracles:
1. Specification
2. Deriviation
3. Implicit 
4. Human 


### Test Run
A test run is a collection of test cases or test suites that the user is executing and comparing the expected with the actual results. Once complete, a report or all executed tests may be generated.



## Ref
- [Best Software Testing Tools 2023 [QA Test Automation Tools\]](https://www.softwaretestinghelp.com/tools/)
- [Alpha Testing and Beta Testing (A Complete Guide)](https://www.softwaretestinghelp.com/what-is-alpha-testing-beta-testing/)
- [Software Testing QA Assistant Job](https://www.softwaretestinghelp.com/software-testing-qa-assistant-job/)
- [Software Testing Course: Which Software Testing Institute Should I join?](https://www.softwaretestinghelp.com/which-software-testing-institute-should-i-join/)
- [Choosing Software Testing as your Career](https://www.softwaretestinghelp.com/choosing-software-testing-as-your-career/)
- [Software Testing Technical Content Writer Freelancer Job](https://www.softwaretestinghelp.com/software-testing-technical-content-writer-freelancer-job/)
- [Types of Risks in Software Projects](https://www.softwaretestinghelp.com/types-of-risks-in-software-projects/)
- [Best QA Software Testing Services from SoftwareTestingHelp](https://www.softwaretestinghelp.com/best-qa-software-testing-service-provider-company/)

[🤔 常见的二十种软件测试方法详解（史上最全） | cnblog]: https://www.cnblogs.com/ybqjymy/p/16727372.html

[9个最佳性能测试工具（2024）]: https://mp.weixin.qq.com/s/m8nCZm8QWPzxmR5J3Cj3fQ
1. Tricentis NeoLoad
2. BlazeMeter
3. PFLB
4. StresStimulus
5. Apache Jmeter
6. OpenText LoadRunner Professional
7. Micro Focus Silk Performer
8. Rational Performance Tester
9. SmartMeter.io

[Test Oracle --- Wikipedia]: https://en.wikipedia.org/wiki/Test_oracle
[Oracle，甲骨文，不，是什么？]: https://turingtest.biz/2019/05/oracle%ef%bc%8c%e7%94%b2%e9%aa%a8%e6%96%87%ef%bc%8c%e4%b8%8d%ef%bc%8c%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f/
[What is a test oracle and what is it used for?  ---- stackoverflow]: https://stackoverflow.com/questions/23522166/what-is-a-test-oracle-and-what-is-it-used-for
[探究：软件工程中的test oracle到底是什么意思？ | CSDN]: https://dalewushuang.blog.csdn.net/article/details/83893881?fromshare=blogdetail&sharetype=blogdetail&sharerId=83893881&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
- Xie T. Augmenting Automatically Generated Unit-Test Suites with Regression Oracle Checking[J]. 2006, 4067:380-403.
	- A test case consists of two parts: a test input to exercise the program under test and a test oracle to check the correctness of the test execution. A test oracle is often in the form of executable assertions such as in the JUnit testing framework. Manually generated test cases are valuable in exposing program faults in the current program version or regression faults in future program versions.
- Tu D, Chen R, Du Z, et al. A Method of Log File Analysis for Test Oracle[C]// International Conference on Scalable Computing and Communications; Eighth International Conference on Embedded Computing, 2009. Scalcom-Embeddedcom. IEEE, 2009:351-354.
- What is a test oracle, and what is it used for? https://stackoverflow.com/questions/23522166/what-is-a-test-oracle-and-what-is-it-used-for
	- ![](../../../../../../../Assets/Pics/Pasted%20image%2020250407144452.png)
-  A Course in Black Box Software Testing-Examples of Test Oracles.  http://www.testingeducation.org/k04/OracleExamples.htm
	- An oracle is a mechanism for determining whether the program has passed or failed a test.
	- A complete oracle would have three capabilities and would carry them out perfectly:
		- A generator, to provide predicted or expected results for each test.
		- A comparator, to compare predicted and obtained results.
		- An evaluator, to determine whether the comparison results are sufficiently close to be a pass.
