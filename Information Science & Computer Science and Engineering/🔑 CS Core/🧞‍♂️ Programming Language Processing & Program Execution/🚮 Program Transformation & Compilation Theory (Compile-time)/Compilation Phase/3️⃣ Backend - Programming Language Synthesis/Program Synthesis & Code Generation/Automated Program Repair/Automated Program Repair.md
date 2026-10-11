# Automated Program Repair

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Formal_verification

Program repair is performed with respect to an [oracle](https://en.wikipedia.org/wiki/Oracle_\(computability\) "Oracle (computability)"), encompassing the desired functionality of the program which is used for validation of the generated fix. A simple example is a test-suite—the input/output pairs specify the functionality of the program. A variety of techniques are employed, most notably using [satisfiability modulo theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories "Satisfiability modulo theories") (SMT) solvers, and [genetic programming](https://en.wikipedia.org/wiki/Genetic_programming "Genetic programming"), using evolutionary computing to generate and evaluate possible candidates for fixes. The former method is deterministic, while the latter is randomized.

Program repair combines techniques from formal verification and [program synthesis](https://en.wikipedia.org/wiki/Program_synthesis "Program synthesis"). Fault-localization techniques in formal verification are used to compute program points which might be possible bug-locations, which can be targeted by the synthesis modules. Repair systems often focus on a small pre-defined class of bugs in order to reduce the search space. Industrial use is limited owing to the computational cost of existing techniques.




## Ref
