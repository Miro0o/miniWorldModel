# Viper (Verification Infrastructure for Permission-​based Reasoning)

[TOC]



## Res
🏠 https://www.pm.inf.ethz.ch/research/viper.html


### Related Topics
↗ [SMT Solving & Algorithms](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SMT%20Solving%20&%20Algorithms/SMT%20Solving%20&%20Algorithms.md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Theorem%20Provers%20&%20Constraint%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers.md)


### Other Resources



## Intro
> 🔗 https://www.pm.inf.ethz.ch/research/viper.html

Viper (Verification Infrastructure for Permission-​based Reasoning) is a language and suite of tools, providing an architecture on which new verification tools and prototypes can be developed simply and quickly. Viper is being developed at ETH Zurich in close collaboration with the team of Alex Summers at UBC.

Viper comprises a novel intermediate verification language, also named _Viper_, and automatic verifiers for the language, as well as example front-end tools. The Viper toolset can be used to implement verification techniques for front-end programming languages via translations into the Viper language. For an introduction to Viper's features, try the [Viper Tutorial](http://viper.ethz.ch/tutorial/)! You can download Viper [here](https://www.pm.inf.ethz.ch/research/viper/downloads.html).

![](../../../../../Assets/Pics/Pasted%20image%2020260925093819.png)

The Viper toolchain is designed to make it easy to implement verification techniques for sequential and concurrent programs with mutable state. It provides native support for reasoning about the program state using _permissions_ or _ownership_, e.g. in the style of _separation logic_. New verification techniques can be implemented directly as translations to the Viper language, using either of the verifiers provided. The Viper language is also useful to encode verification problems manually, for instance, while prototyping new verification techniques.

We have built several verifiers on top of Viper, including the [Gobra](https://www.pm.inf.ethz.ch/research/gobra.html) verifier for Go, [Nagini](https://www.pm.inf.ethz.ch/research/nagini.html) for Python and [Prusti](https://www.pm.inf.ethz.ch/research/prusti.html) for Rust. We have also built several research prototypes, for instance, for [Chalice](https://www.pm.inf.ethz.ch/research/chalice.html), to reason about weak-memory programs, and to verify smart contracts written in the Vyper language. Viper is also used in various research projects outside ETH Zurich, e.g., at Brown University, CMU, Columbia University, INRIA, University of Minnesota, NYU, University of Twente (in the [external pageVerCors](https://vercors.ewi.utwente.nl/) project), and University of British Columbia. Viper is used for teaching at Charles University Prague, DTU Copenhagen, ETH Zurich, NYU, Rice University, and UBC.

The best way to try out Viper for yourself is via the [plugin for VSCode available for download](http://www.pm.inf.ethz.ch/research/viper/downloads.html). It is also possible to run Viper in your browser: there is an interactive [introductory Viper tutorial](http://viper.ethz.ch/tutorial/) available, as well as additional [examples to try out online](http://viper.ethz.ch/examples/).



## Ref
