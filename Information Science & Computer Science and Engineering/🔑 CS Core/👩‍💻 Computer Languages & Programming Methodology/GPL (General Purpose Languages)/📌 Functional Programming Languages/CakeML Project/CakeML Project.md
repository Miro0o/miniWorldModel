# CakeML Project

[TOC]



## Res
🏠 https://cakeml.org/


### Related Topics
↗ [Formal Verification (FV) & Reasoning Systems (Formal Methods)](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29.md)
↗ [CakeML Compiler](../../../🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/🍄%20Verified%20Compilers/CakeML%20Compiler.md)

↗ [ML (Programming Language)](../../../Other%20Languages%20&%20Formats/Formal%20Verification%20&%20Analysis%20Programming%20Languages/ML%20%28Programming%20Language%29.md)


### Other Resources



## Intro
CakeML is a functional programming language and an ecosystem of proofs and tools built around the language. The ecosystem includes a proven-correct compiler that can bootstrap itself.



The CakeML project consists of the following components, all of which are [free software](https://fsfe.org/about/basics/freesoftware.en.html).

**Language definition.** The CakeML language is based on a substantial subset of [Standard ML](http://sml-family.org/). Its formal semantics is specified in [higher-order logic](https://hol-theorem-prover.org/) (HOL) in a [functional big-step style](https://cakeml.org/esop16.pdf). The core of the language (its syntax and semantics) is quite stable, but the standard basis library is still undergoing development. Contributions are welcome!

**Compiler backend.** The CakeML compiler has many parts. The most significant part is the [verified compiler backend](https://cakeml.org/icfp16.pdf), which transforms an untyped AST to concrete machine code for one of 6 target architectures. The compiler backend has been proved to only produce machine code that is compatible with the behaviours of the source programs. The backend passes through several intermediate languages (as this [diagram](https://cakeml.org/compiler.svg) illustrates) and performs some optimisations.

**Compiler frontend 1.** There are two frontends to the compiler. The first one is a proof-producing synthesis tool (called the translator). It generates CakeML AST from ML-like functions in HOL and proves that the generated AST has the same behaviour as the HOL function. The [original version](https://cakeml.org/jfp14.pdf) of this tool produced only pure CakeML code, but [more recent versions](https://cakeml.org/ijcar18.pdf) can produce code that performs I/O and uses state, including local state.

**Compiler frontend 2.** The second compiler frontend consists of a traditional parser followed by a type inferencer. Both of these have been proved sound and complete with respect to declarative specifications. For the parser, this means that [our PEG parser](https://cakeml.org/popl14.pdf) implementation finds a correct parse tree if there exists one according to a traditional grammar for CakeML concrete syntax (SML). [Soundness and completeness of the type inferencer](https://cakeml.org/ifl15.pdf) means that, if the program can be typed, then the inferencer will find a type (which is the most general type).

**Compiler bootstrapping.** The CakeML compiler has been bootstrapped inside HOL. By bootstrapped we mean that the compiler has compiled itself. This was achieved by noticing that frontend 2 combined with the backend is a HOL function which we can feed into the tool-chain consisting of frontend 1 and the backend. The result is a verified binary that provably implements the compiler itself (with frontend 2). Recent built bootstrapped binary are [here as tar.gz files](https://github.com/CakeML/cakeml/releases). The bootstrapping is described [here](https://cakeml.org/popl14.pdf) and [here](https://xrchz.net/thesis.pdf).

**Post-hoc verification of CakeML programs.** We have adapted Charguéraud's [CFML verification framework to CakeML](https://cakeml.org/esop17.pdf). Usually, we recommend that verified CakeML code is produced via synthesis using frontend 1. However, in some cases it is more convenient to do Hoare-style reasoning in the separation logic of CFML. CakeML's version of CFML supports reasoning about references, arrays, exceptions and I/O, and is used for verification of parts of the CakeML basis library.

**Verified applications built using CakeML.** The CakeML tools are geared towards production of verified applications using proof-producing synthesis (frontend 1) and compilation inside HOL (in-logic evaluation of the compiler backend). To date, the largest case study is the bootstrapped CakeML compiler. Other end-to-end verified applications that have been produced using the CakeML tools are:
- a word frequency counter (a [tutorial](https://code.cakeml.org/tree/master/tutorial) example)
- Unix-like tools such as [grep](https://code.cakeml.org/tree/master/examples/grepProgScript.sml), [sort](https://code.cakeml.org/tree/master/examples/sortProgScript.sml), [cat](https://code.cakeml.org/tree/master/examples/iocatProgScript.sml), [diff](https://code.cakeml.org/tree/master/examples/diffProgScript.sml), and [patch](https://code.cakeml.org/tree/master/examples/patchProgScript.sml)
- an [OpenTheory article checker](https://github.com/CakeML/cakeml/tree/master/examples/opentheory)
- a [certificate checker for floating-point error bounds](https://arxiv.org/abs/1707.02115)
- checkers for SAT proofs (DRAT/LPR) and many similar formats, [read more here](https://cakeml.org/checkers.html)
- [Candle](https://cakeml.org/candle/): a verified implementation of HOL Light running on CakeML

**Verified compilers built on top of the CakeML compiler or using parts of it.** The CakeML compiler has been used to build the following verified compilers for other programming languages:
- [Kalas](https://drops.dagstuhl.de/opus/volltexte/2022/16736/pdf/LIPIcs-ITP-2022-27.pdf): A verified, end-to-end compiler for a choreographic language
- [Pancake](https://cakeml.org/pancake.html): a verified compiler for a systems programming language
- [PureCake](https://cakeml.org/purecake.html): a verified compiler for a lazy Haskell-style functional language



## Ref
