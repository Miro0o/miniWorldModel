# C & CPP Fuzzing

[TOC]



## Res
### Related Topics
↗ [C-Based Languages](../../../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/C-Based%20Languages.md)
↗ [C & CPP](../../../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/👔%20C-Based%20Languages/🥏%20C%20&%20CPP/C%20&%20CPP.md)


### Other Resources



## Intro
> 🔗 https://appsec.guide/docs/fuzzing/c-cpp/

In this section, we will discuss how to fuzz C/C++ projects, including how to set up a fuzzer in your project. While there are many options for fuzzing C/C++ projects, we will ground this tutorial in the practical use of libFuzzer and AFL++: two of the most prominent fuzzing tools in use today that can be applied to any C/C++ project.

For a general introduction about fuzzing and fuzzing setup (e.g., the harness, fuzzer runtime, instrumentation, and SUT), refer to the [introduction](https://appsec.guide/docs/fuzzing/#introduction-to-fuzzers).


When should I use which fuzzer?

|               |                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **libFuzzer** | Simple; well-tested; basic fuzzing features; limited multi-core fuzzing; libFuzzer is in maintenance-only mode                                                                              |
| **AFL++**     | Well-tested; industry-standard; sufficient for most fuzzing needs; supported multi-core fuzzing; not suited for short fuzzing campaigns (e.g., CI fuzzing) due to initial calibration phase |
| **LibAFL**    | Potentially unstable; complex; can adapt to your fuzzing needs; supports cutting-edge fuzzing techniques; supports Android, Windows, and other more unusual fuzzing environments            |

In a nutshell, libFuzzer is designed to integrate fuzz tests into a project’s codebase, making it accessible for developers to write and maintain fuzz tests. AFL++ is more tailored for security experts, which often makes it the preferred choice for security consultants. If you have no fuzzing experience we recommend starting with libFuzzer, because switching over to the more capable AFL++ fuzzer is simple.



## Ref
