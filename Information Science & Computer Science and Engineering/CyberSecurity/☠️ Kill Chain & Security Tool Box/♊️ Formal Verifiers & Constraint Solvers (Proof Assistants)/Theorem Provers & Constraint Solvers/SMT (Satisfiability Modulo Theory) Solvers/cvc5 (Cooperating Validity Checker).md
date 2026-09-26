# cvc5 (Cooperating Validity Checker)

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Cooperating_Validity_Checker

In computer science and mathematical logic, **Cooperating Validity Checker (CVC)** is a family of satisfiability modulo theories (SMT) solvers. The latest major versions of CVC are CVC4 and CVC5 (stylized cvc5); earlier versions include CVC, CVC Lite, and CVC3. Both CVC4 and cvc5 support the SMT-LIB and TPTP input formats for solving SMT problems, and the SyGuS-IF format for program synthesis. Both CVC4 and cvc5 can output proofs that can be independently checked in the LFSC format, cvc5 additionally supports the Alethe and Lean 4 formats. cvc5 has bindings for C++, Python, and Java.

CVC4 competed in SMT-COMP in the years 2014-2020, and cvc5 has competed in the years 2021-2022. CVC4 competed in SyGuS-COMP in the years 2015-2019, and in CASC in 2013-2015.

CVC4 uses the DPLL(T) architecture, and supports the theories of linear arithmetic over rationals and integers, fixed-width bitvectors, floating-point arithmetic, strings, (co)-datatypes, sequences (used to model dynamic arrays), finite sets and relations, separation logic, and uninterpreted functions among others. cvc5 additionally supports finite fields.

In addition to standard SMT and SyGuS solving, cvc5 supports abductive reasoning, which is the problem of constructing a formula B that can be conjoined with a formula A to prove a goal formula C.

cvc5 has been subject to several independent test campaigns



## Ref
