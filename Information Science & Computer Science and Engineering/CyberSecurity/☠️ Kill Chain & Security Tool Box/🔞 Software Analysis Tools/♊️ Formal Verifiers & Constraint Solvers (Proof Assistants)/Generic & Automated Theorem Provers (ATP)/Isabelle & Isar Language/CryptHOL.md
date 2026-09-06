# CryptHOL

[TOC]



## Res
🏠 https://isa-afp.org/entries/CryptHOL.html
Topics
- [Computer science/Security/Cryptography](https://isa-afp.org/topics/computer-science/security/cryptography/)
- [Computer science/Functional programming](https://isa-afp.org/topics/computer-science/functional-programming/)
- [Mathematics/Probability theory](https://isa-afp.org/topics/mathematics/probability-theory/)
Session CryptHOL
- [Misc_CryptHOL](https://isa-afp.org/thys/CryptHOL/Misc_CryptHOL.html)
- [Set_Applicative](https://isa-afp.org/thys/CryptHOL/Set_Applicative.html)
- [SPMF_Applicative](https://isa-afp.org/thys/CryptHOL/SPMF_Applicative.html)
- [List_Bits](https://isa-afp.org/thys/CryptHOL/List_Bits.html)
- [Environment_Functor](https://isa-afp.org/thys/CryptHOL/Environment_Functor.html)
- [Partial_Function_Set](https://isa-afp.org/thys/CryptHOL/Partial_Function_Set.html)
- [Negligible](https://isa-afp.org/thys/CryptHOL/Negligible.html)
- [Resumption](https://isa-afp.org/thys/CryptHOL/Resumption.html)
- [Generat](https://isa-afp.org/thys/CryptHOL/Generat.html)
- [Generative_Probabilistic_Value](https://isa-afp.org/thys/CryptHOL/Generative_Probabilistic_Value.html)
- [Computational_Model](https://isa-afp.org/thys/CryptHOL/Computational_Model.html)
- [GPV_Expectation](https://isa-afp.org/thys/CryptHOL/GPV_Expectation.html)
- [GPV_Bisim](https://isa-afp.org/thys/CryptHOL/GPV_Bisim.html)
- [GPV_Applicative](https://isa-afp.org/thys/CryptHOL/GPV_Applicative.html)
- [Cyclic_Group](https://isa-afp.org/thys/CryptHOL/Cyclic_Group.html)
- [Cyclic_Group_SPMF](https://isa-afp.org/thys/CryptHOL/Cyclic_Group_SPMF.html)
- [CryptHOL](https://isa-afp.org/thys/CryptHOL/CryptHOL.html)


### Related Topics
↗ [Higher-Order Languages & Logics (HOL)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Logic,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20%28HOL%29/Higher-Order%20Languages%20&%20Logics%20%28HOL%29.md)


### Other Resources



## Intro
> 🔗 https://isa-afp.org/entries/CryptHOL.html

CryptHOL provides a framework for formalising cryptographic arguments in Isabelle/HOL. It shallowly embeds a probabilistic functional programming language in higher order logic. The language features monadic sequencing, recursion, random sampling, failures and failure handling, and black-box access to oracles. Oracles are probabilistic functions which maintain hidden state between different invocations. All operators are defined in the new semantic domain of generative probabilistic values, a codatatype. We derive proof rules for the operators and establish a connection with the theory of relational parametricity. Thus, the resuting proofs are trustworthy and comprehensible, and the framework is extensible and widely applicable.

The framework is used in the accompanying AFP entry "Game-based Cryptography in HOL". There, we show-case our framework by formalizing different game-based proofs from the literature. This formalisation continues the work described in the author's ESOP 2016 paper.



## Ref
