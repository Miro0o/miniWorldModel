# Fuzzing Orchestration & Infrastructure

[TOC]



## Res
### Related Topics


### Other Resources
https://www.fuzzingbook.org/html/FuzzingInTheLarge.html
In the past chapters, we have always looked at fuzzing taking place on one machine for a few seconds only. In the real world, however, fuzzers are run on dozens or even thousands of machines; for hours, days and weeks; for one program or dozens of programs. In such contexts, one needs an _infrastructure_ to _collect_ failure data from the individual fuzzer runs, and to _aggregate_ such data in a central repository. In this chapter, we will examine such an infrastructure, the _FuzzManager_ framework from Mozilla.
Lessons Learned
- When fuzzing (a) with several machines, (b) several programs, (c) with several fuzzers, use a _crash server_ such as _FuzzManager_ to collect and store crashes.
- Crashes likely to be caused by the same failure should be collected in _buckets_ to ensure they all can be treated the same.
- Centrally collecting _fuzzer coverage_ can help reveal issues with fuzzers.



## Intro



## Ref
