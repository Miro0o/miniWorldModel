# FAQ

[TOC]



## 👉 What is test oracle?
#software_test #test_oracle

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

[Test Oracle --- Wikipedia]: https://en.wikipedia.org/wiki/Test_oracle
[Oracle，甲骨文，不，是什么？]: https://turingtest.biz/2019/05/oracle%ef%bc%8c%e7%94%b2%e9%aa%a8%e6%96%87%ef%bc%8c%e4%b8%8d%ef%bc%8c%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f/
[What is a test oracle and what is it used for?  ---- stackoverflow]: https://stackoverflow.com/questions/23522166/what-is-a-test-oracle-and-what-is-it-used-for
[探究：软件工程中的test oracle到底是什么意思？  --- CSDN]: http://t.csdn.cn/rmgkj

